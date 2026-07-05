# FLUTTER RESTAURANT VENDOR LIST DEBUG POINT AUDIT

Generated: 07/01/2026 02:55:21
Mode: READ ONLY. No patch.


FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:146:  static const String orderOngoing = "Order Ongoing";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:147:  static const String bookingPlaced = "booking_placed";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:148:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:149:  static CurrencyModel? currencyModel;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:150:  static List<VendorModel>? restaurantList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:151:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:152:  static String walletTopup = "wallet_topup";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:153:  static String newVendorSignup = "new_vendor_signup";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:154:  static String payoutRequestStatus = "payout_request_status";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:155:  static String payoutRequest = "payout_request";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:156:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:157:  static String scheduleOrder = "schedule_order";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:158:  static String dineInPlaced = "dinein_placed";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:159:  static String dineInCanceled = "dinein_canceled";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:160:  static String dineinAccepted = "dinein_accepted";
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:113:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:114:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:115:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:116:      ShowToastDialog.closeLoader();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:117:      Get.offAll(const OnDemandDashboardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:118:      OnDemandDashboardController controller = Get.put(OnDemandDashboardController());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:119:      controller.selectedIndex.value = 2;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:120:    } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:121:      // Extra Charges Flow
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:122:      onDemandOrderModel.value?.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:123:      onDemandOrderModel.value?.extraPaymentStatus = true;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:124:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:125:      if (selectedPaymentMethod.value == PaymentGateway.wallet.name) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:126:        WalletTransactionModel transactionModel = WalletTransactionModel(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:127:          id: Constant.getUuid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:168:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:169:      await FireStoreUtils.updateOnDemandOrder(onDemandOrderModel.value!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:170:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:171:      ShowToastDialog.closeLoader();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:172:      Get.offAll(const OnDemandDashboardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:173:      OnDemandDashboardController controller = Get.put(OnDemandDashboardController());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:174:      controller.selectedIndex.value = 2;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:175:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:176:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:177:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:178:  Rx<WalletSettingModel> walletSettingModel = WalletSettingModel().obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:179:  Rx<CodSettingModel> cashOnDeliverySettingModel = CodSettingModel().obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:180:  Rx<PayFastModel> payFastModel = PayFastModel().obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:181:  Rx<MercadoPagoModel> mercadoPagoModel = MercadoPagoModel().obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:182:  Rx<PayPalModel> payPalModel = PayPalModel().obs;
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:18:  RxList<AdvertisementModel> advertisementList = <AdvertisementModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:19:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:20:  Future<void> getAdvertisementList() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:21:    advertisementList.clear();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:22:    List<VendorModel> allNearestRestaurant = <VendorModel>[];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:23:    FireStoreUtils.getAllNearestRestaurant().listen((event) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:24:      allNearestRestaurant.addAll(event);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:25:      await FireStoreUtils.getAllAdvertisement().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:26:        List<AdvertisementModel> adsList = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:27:        advertisementList.addAll(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:28:          adsList.where(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:29:            (ads) => allNearestRestaurant.any(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:30:              (restaurant) => restaurant.id == ads.vendorId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:31:            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:32:          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:33:        );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:34:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:35:      isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:36:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:37:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:38:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart:39:  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:28:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:29:  Future<void> getProductByCategoryId() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:30:    List<ProductModel> productDataList = await FireStoreUtils.getProductListByBrandId(brandModel.value.id.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:31:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:32:    List<VendorModel> vendorList = await FireStoreUtils.getAllStoresFuture(ecommarce: true);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:33:    List<ProductModel> allProduct = <ProductModel>[];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:34:    for (var vendor in vendorList) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:35:      await FireStoreUtils.getAllProducts(vendor.id.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:36:        if (Constant.isSubscriptionModelApplied == true || vendor.adminCommission?.isEnabled == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:37:          if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:38:            if (vendor.subscriptionPlan?.itemLimit == '-1') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:39:              allProduct.addAll(value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:40:            } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:41:              int selectedProduct = value.length < int.parse(vendor.subscriptionPlan?.itemLimit ?? '0') ? (value.isEmpty ? 0 : (value.length)) : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:42:              allProduct.addAll(value.sublist(0, selectedProduct));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:43:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart:44:          }
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:17:    super.onInit();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:18:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:19:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:20:  Rx<VendorCategoryModel> vendorCategoryModel = VendorCategoryModel().obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:21:  RxList<VendorModel> allNearestRestaurant = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:22:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:23:  Future<void> getArgument() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:24:    dynamic argumentData = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:25:    if (argumentData != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:26:      vendorCategoryModel.value = argumentData['vendorCategoryModel'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:27:      dineIn.value = argumentData['dineIn'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:28:      ecommarce.value = argumentData['ecommerce'] ?? false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:29:      await getZone();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:30:      await getRestaurant();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:31:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:34:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:35:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:36:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:37:  Future getRestaurant() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:38:    FireStoreUtils.getAllNearestRestaurantByCategoryId(categoryId: vendorCategoryModel.value.id.toString(), isDining: dineIn.value).listen((event) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:39:      allNearestRestaurant.clear();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:40:      allNearestRestaurant.addAll(event);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:41:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:42:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:43:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:44:  Future<void> getZone() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:45:    await FireStoreUtils.getZone().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:46:      if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:47:        for (int i = 0; i < value.length; i++) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:48:          if (Constant.isPointInPolygon(LatLng(Constant.selectedLocation.location!.latitude ?? 0.0, Constant.selectedLocation.location!.longitude ?? 0.0), value[i].area!)) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:49:            Constant.selectedZone = value[i];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart:50:            Constant.isZoneAvailable = true;
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:22:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:23:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:24:  RxList<VendorCategoryModel> vendorCategoryModel = <VendorCategoryModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:25:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:26:  RxList<VendorModel> allNearestRestaurant = <VendorModel>[].obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:27:  RxList<VendorModel> newArrivalRestaurantList = <VendorModel>[].obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:28:  RxList<VendorModel> popularRestaurantList = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:29:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:30:  RxList<BannerModel> bannerBottomModel = <BannerModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:31:  Rx<PageController> pageBottomController = PageController(viewportFraction: 0.877).obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:32:  RxInt currentBottomPage = 0.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:33:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:34:  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:35:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:36:  Future<void> getData() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:37:    isLoading.value = true;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:38:    await getZone();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:39:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:40:    FireStoreUtils.getAllNearestRestaurant(isDining: true).listen((event) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:41:      newArrivalRestaurantList.clear();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:42:      allNearestRestaurant.clear();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:43:      popularRestaurantList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:44:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:45:      allNearestRestaurant.addAll(event);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:46:      newArrivalRestaurantList.addAll(event);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:47:      popularRestaurantList.addAll(event);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:48:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:49:      popularRestaurantList.sort(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:50:        (a, b) => Constant.calculateReview(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:51:          reviewCount: b.reviewsCount.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:52:          reviewSum: b.reviewsSum.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:53:        ).compareTo(Constant.calculateReview(reviewCount: a.reviewsCount.toString(), reviewSum: a.reviewsSum.toString())),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:54:      );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:55:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:56:      newArrivalRestaurantList.sort((a, b) => (b.createdAt ?? Timestamp.now()).toDate().compareTo((a.createdAt ?? Timestamp.now()).toDate()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:57:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:58:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:59:    update();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:60:    Future.delayed(const Duration(seconds: 3), () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:61:      isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:62:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:63:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:64:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:65:  Future<void> getCategory() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart:66:    await FireStoreUtils.getHomeVendorCategory().then((value) {
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:1:import 'package:customer/models/coupon_model.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:2:import 'package:customer/models/vendor_model.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:3:import 'package:get/get.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:4:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:5:class DiscountRestaurantListController extends GetxController {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:6:  RxBool isLoading = true.obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:7:  RxList<VendorModel> vendorList = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:8:  RxList<CouponModel> couponList = <CouponModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:9:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:10:  RxString title = "Stores".obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:11:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:12:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:13:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:14:    // TODO: implement onInit
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:15:    getArgument();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:16:    super.onInit();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:17:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:18:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:19:  Future<void> getArgument() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:20:    dynamic argumentData = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:21:    if (argumentData != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:22:      vendorList.value = argumentData['vendorList'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:23:      couponList.value = argumentData['couponList'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:24:      title.value = argumentData['title'] ?? "Stores";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:25:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:26:    isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:27:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\discount_restaurant_list_controller.dart:28:}
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:11:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:12:class FavouriteController extends GetxController {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:13:  RxBool favouriteRestaurant = true.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:14:  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:15:  RxList<VendorModel> favouriteVendorList = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:16:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:17:  RxList<FavouriteItemModel> favouriteItemList = <FavouriteItemModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:18:  RxList<ProductModel> favouriteFoodList = <ProductModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:19:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:20:  RxBool isLoading = true.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:21:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:22:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:23:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:24:    // TODO: implement onInit
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:25:    getData();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:61:        final bOpen = Constant.statusCheckOpenORClose(vendorModel: b);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:62:        if (aOpen == bOpen) return 0;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:63:        return aOpen ? -1 : 1;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:64:      });
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:65:      favouriteVendorList.value = favouriteVendorData;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:66:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:67:      for (var element in favouriteItemList) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:68:        await FireStoreUtils.getProductById(element.productId.toString()).then((value) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:69:          log("getProductById :: ${value?.name} :: ${value?.publish}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:70:          if (value != null && value.publish == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:71:            await FireStoreUtils.fireStore.collection(CollectionName.vendors).doc(value.vendorID.toString()).get().then((value1) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:72:              if (value1.exists) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:73:                VendorModel vendorModel = VendorModel.fromJson(value1.data()!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:74:                if (Constant.isSubscriptionModelApplied == true || vendorModel.adminCommission?.isEnabled == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:75:                  if (vendorModel.subscriptionPlan != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:93:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:94:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:95:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:96:    List<ProductModel> favouriteFoodData = favouriteFoodList;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:97:    List<VendorModel> favouriteVendorData = favouriteVendorList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:98:    favouriteFoodList.value = removeDuplicateFoods(favouriteFoodData);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:99:    favouriteVendorList.value = removeDuplicateVendor(favouriteVendorData);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:100:    isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:101:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:102:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:103:  void reset() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:104:    favouriteRestaurant.value = true;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:105:    favouriteList.value = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:106:    favouriteVendorList.value = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:107:    favouriteItemList.value = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:108:    favouriteFoodList.value = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:109:    isLoading.value = true;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:110:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:111:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:112:  List<ProductModel> removeDuplicateFoods(List<ProductModel> favouriteFoodList) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:113:    final seenIds = <String>{};
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:114:    return favouriteFoodList.where((food) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:115:      return seenIds.add(food.id!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart:116:    }).toList();
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:48:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:49:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:50:  RxList<VendorCategoryModel> vendorCategoryModel = <VendorCategoryModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:51:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:52:  RxList<VendorModel> allNearestRestaurant = <VendorModel>[].obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:53:  RxList<VendorModel> newArrivalRestaurantList = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:54:  RxList<AdvertisementModel> advertisementList = <AdvertisementModel>[].obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:55:  RxList<VendorModel> popularRestaurantList = <VendorModel>[].obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:56:  RxList<VendorModel> couponRestaurantList = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:57:  RxList<CouponModel> couponList = <CouponModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:58:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:59:  RxList<StoryModel> storyList = <StoryModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:60:  RxList<BannerModel> bannerModel = <BannerModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:61:  RxList<BannerModel> bannerBottomModel = <BannerModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:62:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:63:  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:64:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:65:  Future<void> getData() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:66:    isLoading.value = true;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:67:    getCartData();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:68:    selectedOrderTypeValue.value = Preferences.getString(Preferences.foodDeliveryType, defaultValue: "Delivery");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:69:    await getZone();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:70:    FireStoreUtils.getAllNearestRestaurant().listen((event) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:71:      popularRestaurantList.clear();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:72:      newArrivalRestaurantList.clear();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:73:      allNearestRestaurant.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:74:      advertisementList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:75:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:76:      allNearestRestaurant.addAll(event);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:77:      newArrivalRestaurantList.addAll(event);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:78:      popularRestaurantList.addAll(event);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:79:      Constant.restaurantList = allNearestRestaurant;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:80:      popularRestaurantList.sort(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:81:        (a, b) => Constant.calculateReview(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:82:          reviewCount: b.reviewsCount.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:83:          reviewSum: b.reviewsSum.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:84:        ).compareTo(Constant.calculateReview(reviewCount: a.reviewsCount.toString(), reviewSum: a.reviewsSum.toString())),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:85:      );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:86:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:87:      newArrivalRestaurantList.sort((a, b) => (b.createdAt ?? Timestamp.now()).toDate().compareTo((a.createdAt ?? Timestamp.now()).toDate()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:88:      await getVendorCategory();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:89:      await FireStoreUtils.getHomeCoupon().then((value) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:90:        couponRestaurantList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:91:        couponList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:92:        for (var element1 in value) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:93:          for (var element in allNearestRestaurant) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:94:            if (element1.vendorID == element.id && element1.expiresAt!.toDate().isAfter(DateTime.now())) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:95:              couponList.add(element1);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:96:              couponRestaurantList.add(element);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:97:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:98:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:99:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:100:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:101:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:102:      await FireStoreUtils.getStory().then((stories) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:103:        storyList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:104:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:105:        print("Total stories fetched: ${stories.length}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:106:        // Create a fast lookup Set of all nearest vendor IDs
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:107:        final nearestIds = allNearestRestaurant.map((e) => e.id).toSet();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:108:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:109:        print("nearestIds: $nearestIds");
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:110:        // Filter stories whose vendorID exists in nearestIds
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:111:        storyList.addAll(stories.where((story) => nearestIds.contains(story.vendorID)));
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:112:        print("Filtered storyList length: ${storyList.length}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:113:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:114:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:115:      if (Constant.isEnableAdsFeature == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:116:        await FireStoreUtils.getAllAdvertisement().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:117:          advertisementList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:118:          for (var element1 in value) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:119:            for (var element in allNearestRestaurant) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:120:              if (element1.vendorId == element.id) {
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
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:131:  Future<void> setLoading() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:132:    await Future.delayed(Duration(seconds: 1), () async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:133:      if (allNearestRestaurant.isEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:134:        await Future.delayed(Duration(seconds: 2), () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:135:          isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:136:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:137:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:138:        isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:139:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:140:      update();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:141:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:142:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:143:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:144:  Future<void> getVendorCategory() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:145:    await FireStoreUtils.getHomeVendorCategory().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:146:      vendorCategoryModel.value = value;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:147:      if (Constant.restaurantList != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:148:        List<String> usedCategoryIds = Constant.restaurantList!.expand((vendor) => vendor.categoryID ?? []).whereType<String>().toSet().toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:149:        vendorCategoryModel.value = vendorCategoryModel.where((category) => usedCategoryIds.contains(category.id)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:150:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:151:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:152:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:153:    await FireStoreUtils.getHomeTopBanner().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:154:      bannerModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:155:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:156:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:157:    await FireStoreUtils.getHomeBottomBanner().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:158:      bannerBottomModel.value = value;
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:42:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:43:  RxList<VendorCategoryModel> vendorCategoryModel = <VendorCategoryModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:44:  RxList<VendorCategoryModel> categoryWiseProductList = <VendorCategoryModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:45:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:46:  RxList<VendorModel> allNearestRestaurant = <VendorModel>[].obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:47:  RxList<VendorModel> newArrivalRestaurantList = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:48:  RxList<AdvertisementModel> advertisementList = <AdvertisementModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:49:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:50:  RxList<BannerModel> bannerModel = <BannerModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:51:  RxList<BannerModel> bannerBottomModel = <BannerModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:52:  RxList<BrandsModel> brandList = <BrandsModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:53:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:54:  Future<void> getData() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:55:    isLoading.value = true;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:56:    getCartData();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:57:    FireStoreUtils.getAllNearestRestaurant(ecommarce: true).listen((event) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:58:      print("=====>${event.length}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:59:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:60:      newArrivalRestaurantList.clear();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:61:      allNearestRestaurant.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:62:      advertisementList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:63:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:64:      allNearestRestaurant.addAll(event);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:65:      newArrivalRestaurantList.addAll(event);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:66:      Constant.restaurantList = allNearestRestaurant;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:67:      List<String> usedCategoryIds = allNearestRestaurant.expand((vendor) => vendor.categoryID ?? []).whereType<String>().toSet().toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:68:      vendorCategoryModel.value = vendorCategoryModel.where((category) => usedCategoryIds.contains(category.id)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:69:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:70:      newArrivalRestaurantList.sort((a, b) => (b.createdAt ?? Timestamp.now()).toDate().compareTo((a.createdAt ?? Timestamp.now()).toDate()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:71:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:72:      if (Constant.isEnableAdsFeature == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:73:        await FireStoreUtils.getAllAdvertisement().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:74:          advertisementList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:75:          for (var element1 in value) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:76:            for (var element in allNearestRestaurant) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:77:              if (element1.vendorId == element.id) {
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
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:88:  Future<void> setLoading() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:89:    await Future.delayed(Duration(seconds: 1), () async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:90:      if (allNearestRestaurant.isEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:91:        await Future.delayed(Duration(seconds: 2), () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:92:          isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:93:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:94:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:95:        isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:96:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:97:      update();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:98:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:99:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:100:
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:33:        width: 30,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:34:        height: 30,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:35:      ); //OSM
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:36:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:37:      for (var element in homeController.allNearestRestaurant) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:38:        osmMarker.add(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:39:          flutterMap.Marker(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:40:            point: location.LatLng(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:41:              element.latitude ?? 0.0,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:42:              element.longitude ?? 0.0,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:43:            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:44:            width: 40,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:45:            height: 40,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:46:            child: GestureDetector(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:47:              onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:60:        "assets/images/map_selected.png",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:61:        20,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:62:      );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:63:      parkingMarker = BitmapDescriptor.bytes(parking);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:64:      for (var element in homeController.allNearestRestaurant) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:65:        addMarker(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:66:          latitude: element.latitude,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:67:          longitude: element.longitude,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:68:          id: element.id.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:69:          rotation: 0,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:70:          descriptor: parkingMarker!,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:71:          title: element.title.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:72:        );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:73:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:74:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:90:      icon: descriptor,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:91:      infoWindow: InfoWindow(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:92:        title: title,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:93:        onTap: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:94:          int index = homeController.allNearestRestaurant.indexWhere(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:95:            (p0) => p0.id == id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:96:          );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:97:          Get.to(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:98:            const RestaurantDetailsScreen(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:99:            arguments: {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:100:              "vendorModel": homeController.allNearestRestaurant[index],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:101:            },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:102:          );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:103:        },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:104:      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:105:      position: LatLng(latitude ?? 0.0, longitude ?? 0.0),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:106:      rotation: rotation ?? 0.0,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:107:    );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:108:    markers[markerId] = marker;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:109:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart:110:}
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:218:          await SendNotification.sendFcmMessage(Constant.bookingPlaced, providerUser.fcmToken.toString(), payLoad);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:219:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:220:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:221:        ShowToastDialog.closeLoader();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:222:        Get.offAll(const OnDemandDashboardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:223:        OnDemandDashboardController controller = Get.put(OnDemandDashboardController());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:224:        controller.selectedIndex.value = 2;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:225:        ShowToastDialog.showToast("OnDemand Service successfully booked".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:226:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:227:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:228:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:229:}
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:95:    await FireStoreUtils.rentalOrderPlace(rentalOrderModel.value).then((value) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:96:      await FireStoreUtils.sendCarBookEmail(orderModel: rentalOrderModel.value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:97:      ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:98:      ShowToastDialog.showToast("Order placed successfully".tr);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:99:      Get.offAll(const RentalDashboardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:100:      CabRentalDashboardControllers controller = Get.put(CabRentalDashboardControllers());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:101:      controller.selectedIndex.value = 1;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:102:      // Get.back();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:103:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:104:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:105:}
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:3:import 'package:customer/models/vendor_model.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:4:import '../service/fire_store_utils.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:5:import 'package:get/get.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:6:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:7:class RestaurantListController extends GetxController {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:8:  RxBool isLoading = true.obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:9:  RxList<VendorModel> vendorList = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:10:  RxList<VendorModel> vendorSearchList = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:11:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:12:  RxString title = "Stores".obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:13:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:14:  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:15:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:16:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:17:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:18:    // TODO: implement onInit
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:19:    getArgument();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:22:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:23:  Future<void> getArgument() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:24:    dynamic argumentData = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:25:    if (argumentData != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:26:      vendorList.value = argumentData['vendorList'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:27:      vendorSearchList.value = argumentData['vendorList'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:28:      title.value = argumentData['title'] ?? "Stores";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:29:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:30:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:31:    await getFavouriteRestaurant();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:32:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:33:    isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:34:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:35:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:36:  Future<void> getFavouriteRestaurant() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_list_controller.dart:37:    if (Constant.userModel != null) {
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:9:    getData();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:10:    super.onInit();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:11:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:12:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:13:  RxList<VendorModel> allNearestRestaurant = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:14:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:15:  void getData() {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:16:    FireStoreUtils.getAllNearestRestaurant().listen((event) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:17:      allNearestRestaurant.addAll(event);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:18:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:19:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:20:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:21:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:22:  void dispose() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:23:    // TODO: implement dispose
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:24:    super.dispose();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:25:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\scan_qr_code_controller.dart:26:}
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:12:    super.onInit();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:13:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:14:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:15:  RxBool isLoading = true.obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:16:  RxList<VendorModel> vendorList = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:17:  RxList<VendorModel> vendorSearchList = <VendorModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:18:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:19:  RxList<ProductModel> productList = <ProductModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:20:  RxList<ProductModel> productSearchList = <ProductModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:21:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:22:  Future<void> getArgument() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:23:    dynamic argumentData = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:24:    if (argumentData != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:25:      vendorList.value = argumentData['vendorList'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:26:      productList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:27:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:28:    isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:29:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:30:    for (var element in vendorList) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:31:      await FireStoreUtils.getProductByVendorId(element.id.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:32:        if ((Constant.isSubscriptionModelApplied == true || element.adminCommission?.isEnabled == true) && element.subscriptionPlan != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:33:          if (element.subscriptionPlan?.itemLimit == '-1') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:34:            productList.addAll(value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:35:          } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:36:            int selectedProduct = value.length < int.parse(element.subscriptionPlan?.itemLimit ?? '0') ? (value.isEmpty ? 0 : (value.length)) : int.parse(element.subscriptionPlan?.itemLimit ?? '0');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:37:            productList.addAll(value.sublist(0, selectedProduct));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:38:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:39:        } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:40:          productList.addAll(value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:48:      return;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:49:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:50:    vendorSearchList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:51:    productSearchList.clear();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:52:    for (var element in vendorList) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:53:      if (element.title!.toLowerCase().contains(text.toLowerCase())) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:54:        vendorSearchList.add(element);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:55:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:56:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:57:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:58:    for (var element in productList) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:59:      if (element.name!.toLowerCase().contains(text.toLowerCase())) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:60:        productSearchList.add(element);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:61:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\search_controller.dart:62:    }
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:116:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:117:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:118:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:119:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:120:    if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:121:      if (cartItem.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:122:        showAlertDialog(Get.context!, UserModel(), sectionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:123:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:124:        _goToServiceRoute(sectionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:125:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:126:    } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:127:      _goToServiceRoute(sectionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:128:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:129:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:130:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:131:  void _goToServiceRoute(SectionModel sectionModel) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:132:    if (sectionModel.serviceTypeFlag == "ecommerce-service") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:133:      Get.to(DashBoardEcommerceScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:134:    } else if (sectionModel.serviceTypeFlag == "cab-service") {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:135:      Get.to(CabDashboardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:136:    } else if (sectionModel.serviceTypeFlag == "rental-service") {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:137:      Get.to(RentalDashboardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:138:    } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:139:      Get.to(ParcelDashboardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:140:    } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:141:      Get.to(OnDemandDashboardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:142:    } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:143:      Get.to(() => DashBoardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:144:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:145:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:146:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:147:  final CartProvider cartProvider = CartProvider();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:148:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:149:  void showAlertDialog(BuildContext context, UserModel user, SectionModel sectionModel) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:150:    Get.defaultDialog(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:151:      title: "Alert!".tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:152:      content: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:153:        mainAxisSize: MainAxisSize.min,
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:20:      vendorCategoryModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:21:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:22:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:23:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:24:    if (Constant.restaurantList != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:25:      List<String> usedCategoryIds = Constant.restaurantList!.expand((vendor) => vendor.categoryID ?? []).whereType<String>().toSet().toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:26:      vendorCategoryModel.value = vendorCategoryModel.where((category) => usedCategoryIds.contains(category.id)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:27:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:28:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:29:    isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:30:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart:31:}
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1010:                          Constant.userModel?.inProgressOrderID = null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1011:                          await FireStoreUtils.updateUser(Constant.userModel!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1012:                        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1013:                        ShowToastDialog.showToast("Ride cancelled successfully".tr);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1014:                        // Get.offAll(const CabDashboardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1015:                        Get.back();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1016:                        CabDashboardController cabDashboardController = Get.put(CabDashboardController());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1017:                        cabDashboardController.selectedIndex.value = 0;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1018:                      } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1019:                        ShowToastDialog.showToast("Failed to cancel ride".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1020:                      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1021:                    },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1022:                  ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1023:                ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1024:              ),
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:5:import 'package:flutter/material.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:6:import 'package:flutter_svg/flutter_svg.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:7:import 'package:get/get.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:8:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:9:class CabDashboardScreen extends StatelessWidget {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:10:  const CabDashboardScreen({super.key});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:11:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:12:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:13:  Widget build(BuildContext context) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:14:    final themeController = Get.find<ThemeController>();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:15:    return Obx(() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:16:      final isDark = themeController.isDark.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:17:      return GetX(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:18:        init: CabDashboardController(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:19:        builder: (controller) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:20:          return Scaffold(
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:16:import 'package:customer/screen_ui/location_enable_screens/address_list_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:17:import 'package:customer/screen_ui/multi_vendor_service/advertisement_screens/all_advertisement_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:18:import 'package:customer/screen_ui/multi_vendor_service/cart_screen/cart_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:19:import 'package:customer/screen_ui/multi_vendor_service/home_screen/category_restaurant_screen.dart';
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:20:import 'package:customer/screen_ui/multi_vendor_service/home_screen/restaurant_list_screen.dart' show RestaurantListScreen;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:21:import 'package:customer/screen_ui/multi_vendor_service/home_screen/view_all_category_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:22:import 'package:customer/screen_ui/multi_vendor_service/restaurant_details_screen/restaurant_details_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:23:import 'package:customer/screen_ui/multi_vendor_service/search_screen/search_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:24:import 'package:customer/screen_ui/service_home_screen/service_list_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:25:import 'package:customer/service/fire_store_utils.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:26:import 'package:customer/themes/app_them_data.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:27:import 'package:customer/themes/responsive.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:28:import 'package:customer/themes/round_button_border.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:29:import 'package:customer/themes/show_toast_dialog.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:30:import 'package:customer/themes/text_field_widget.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:201:              child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:202:                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:203:                child: InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:204:                  onTap: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:205:                    Get.to(const SearchScreen(), arguments: {"vendorList": controller.allNearestRestaurant});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:206:                  },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:207:                  child: TextFieldWidget(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:208:                    hintText: 'Search the store, item and more...'.tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:209:                    controller: null,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:210:                    enable: false,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:211:                    backgroundColor: AppThemeData.grey50,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:212:                    hintColor: isDark ? AppThemeData.grey400 : AppThemeData.grey400,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:213:                    prefix: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:214:                      padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:215:                      child: SvgPicture.asset("assets/icons/ic_search.svg", colorFilter: ColorFilter.mode(isDark ? AppThemeData.grey400 : AppThemeData.grey400, BlendMode.srcIn)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:372:                                crossAxisSpacing: 20,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:373:                                childAspectRatio: 1 / 1.1,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:374:                                padding: EdgeInsets.zero,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:375:                                physics: NeverScrollableScrollPhysics(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:376:                                children: controller.newArrivalRestaurantList.take(4).map((item) => NewArrivalCard(item: item)).toList(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:377:                              ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:378:                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:379:                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:380:                          SizedBox(height: 5),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:381:                          Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:382:                            padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:383:                            child: RoundedButtonBorder(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:384:                              radius: 10,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:385:                              color: isDark ? AppThemeData.greyDark100 : AppThemeData.grey100,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:386:                              borderColor: isDark ? AppThemeData.greyDark200 : AppThemeData.grey200,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:387:                              title: 'View All Arrivals'.tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:388:                              onPress: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:389:                                Get.to(RestaurantListScreen(), arguments: {"vendorList": controller.newArrivalRestaurantList, "title": "New Arrivals".tr});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:390:                              },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:391:                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:392:                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:393:                          SizedBox(height: 20),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:394:                          Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:395:                            padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:396:                            child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:397:                              crossAxisAlignment: CrossAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:398:                              children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:399:                                Text("Top Brands".tr, textAlign: TextAlign.start, style: AppThemeData.semiBoldTextStyle(color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900, fontSize: 16)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:693:                                ListView.builder(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:694:                                  padding: EdgeInsets.zero,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:695:                                  shrinkWrap: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:696:                                  physics: const NeverScrollableScrollPhysics(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:697:                                  itemCount: controller.allNearestRestaurant.length > 8 ? 8 : controller.allNearestRestaurant.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:698:                                  itemBuilder: (context, index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:699:                                    VendorModel item = controller.allNearestRestaurant[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:700:                                    return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:701:                                      onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:702:                                        Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": item});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:703:                                      },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:704:                                      child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:705:                                        padding: const EdgeInsets.only(bottom: 20),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:706:                                        child: Row(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:707:                                          children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:708:                                            ClipRRect(borderRadius: BorderRadius.circular(10), child: NetworkImageWidget(imageUrl: item.photo.toString(), height: 80, width: 130, fit: BoxFit.cover)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:709:                                            SizedBox(width: 10),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:757:                                  color: isDark ? AppThemeData.greyDark100 : AppThemeData.grey100,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:758:                                  borderColor: isDark ? AppThemeData.greyDark200 : AppThemeData.grey200,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:759:                                  title: 'View All Stores'.tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:760:                                  onPress: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:761:                                    Get.to(const RestaurantListScreen(), arguments: {"vendorList": controller.allNearestRestaurant});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:762:                                  },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:763:                                ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:764:                              ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:765:                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:766:                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:767:                        ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:768:                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:769:                    ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:770:                  ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:771:        );
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:33:    return WillPopScope(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:34:      onWillPop: () async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:35:        if (isNavigateViaNotification == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:36:          await Preferences.setBoolean(Preferences.isClickOnNotification, false);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:37:          Get.offAll(DashBoardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:38:        } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:39:          Get.back();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:40:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:41:        return false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:42:      },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:43:      child: GetX(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:44:        init: HelpSupportController(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:45:        builder: (controller) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:46:          return Scaffold(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:47:            backgroundColor: isDark ? AppThemeData.grey800 : AppThemeData.grey50,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:53:              leading: InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:54:                onTap: () async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:55:                  if (isNavigateViaNotification == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:56:                    await Preferences.setBoolean(Preferences.isClickOnNotification, false);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:57:                    Get.offAll(DashBoardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:58:                  } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:59:                    Get.back();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:60:                  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:61:                },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:62:                child: Icon(Icons.chevron_left_outlined, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:63:              ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:64:              title: Text('Help & Support'.tr, style: TextStyle(color: isDark ? AppThemeData.grey100 : AppThemeData.grey800, fontFamily: AppThemeData.bold, fontSize: 18)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:65:              elevation: 0,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:66:              bottom: PreferredSize(preferredSize: const Size.fromHeight(4.0), child: Container(color: isDark ? AppThemeData.grey700 : AppThemeData.grey200, height: 4.0)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:67:            ),
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:204:                            Get.offAll(const DashBoardEcommerceScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:205:                            DashBoardEcommerceController controller = Get.put(DashBoardEcommerceController());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:206:                            controller.selectedIndex.value = 3;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:207:                          } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:208:                            Get.offAll(const DashBoardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:209:                            DashBoardController controller = Get.put(DashBoardController());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:210:                            controller.selectedIndex.value = 3;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:211:                          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:212:                        },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:213:                      )
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:214:                      : RoundedButtonFill(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:215:                        title: "Track Order".tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:216:                        height: 5.5,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:217:                        color: isDark ? AppThemeData.grey700 : AppThemeData.grey200,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:218:                        textColor: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:6:import 'package:get/get.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:7:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:8:import '../../../controllers/theme_controller.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:9:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:10:class DashBoardScreen extends StatelessWidget {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:11:  const DashBoardScreen({super.key});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:12:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:13:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:14:  Widget build(BuildContext context) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:15:    final themeController = Get.find<ThemeController>();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:16:    return Obx(() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:17:      final isDark = themeController.isDark.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:18:      return GetX(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:19:        init: DashBoardController(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:20:        builder: (controller) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:21:          return Scaffold(
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:11:import '../../../service/fire_store_utils.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:12:import '../../../widget/restaurant_image_view.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:13:import 'dine_in_details_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:14:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:15:class DineInRestaurantListScreen extends StatelessWidget {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:16:  const DineInRestaurantListScreen({super.key});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:17:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:18:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:19:  Widget build(BuildContext context) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:20:    final themeController = Get.find<ThemeController>();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:21:    final isDark = themeController.isDark.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:22:    return GetX(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:23:      init: RestaurantListController(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:24:      builder: (controller) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:25:        return Scaffold(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:26:          appBar: AppBar(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:27:            backgroundColor:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:28:                isDark ? AppThemeData.surfaceDark : AppThemeData.surface,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:29:            centerTitle: false,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:30:            titleSpacing: 0,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:31:            title: Text(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:32:              controller.title.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:33:              textAlign: TextAlign.start,
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:86:            },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:87:            body:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:88:                controller.isLoading.value
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:89:                    ? Constant.loader()
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:90:                    : Constant.isZoneAvailable == false || controller.allNearestRestaurant.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:91:                    ? Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:92:                      padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:93:                      child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:94:                        mainAxisAlignment: MainAxisAlignment.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:95:                        crossAxisAlignment: CrossAxisAlignment.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:96:                        children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:97:                          Image.asset("assets/images/location.gif", height: 120),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:98:                          const SizedBox(height: 12),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:99:                          Text(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:100:                            "No Dine-In Reservations Found in Your Area".tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:138:                                const SizedBox(height: 28),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:139:                              ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:140:                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:141:                          ),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:142:                          controller.newArrivalRestaurantList.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:143:                              ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:144:                              : Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:145:                                decoration: const BoxDecoration(image: DecorationImage(image: AssetImage("assets/images/ic_new_arrival_dinein.png"), fit: BoxFit.cover)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:146:                                child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:147:                                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:148:                                  child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:149:                                    mainAxisAlignment: MainAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:150:                                    crossAxisAlignment: CrossAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:151:                                    children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:152:                                      Row(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:159:                                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:160:                                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:161:                                          InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:162:                                            onTap: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:163:                                              Get.to(const DineInRestaurantListScreen(), arguments: {"vendorList": controller.newArrivalRestaurantList, "title": "New Arrival"});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:164:                                            },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:165:                                            child: Text(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:166:                                              "View all".tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:167:                                              textAlign: TextAlign.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:168:                                              style: TextStyle(fontFamily: AppThemeData.regular, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:169:                                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:170:                                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:171:                                        ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:172:                                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:173:                                      const SizedBox(height: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:285:      shrinkWrap: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:286:      padding: EdgeInsets.zero,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:287:      physics: const NeverScrollableScrollPhysics(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:288:      scrollDirection: Axis.vertical,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:289:      itemCount: controller.popularRestaurantList.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:290:      itemBuilder: (BuildContext context, int index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:291:        VendorModel vendorModel = controller.popularRestaurantList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:292:        return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:293:          onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:294:            Get.to(const DineInDetailsScreen(), arguments: {"vendorModel": vendorModel});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:295:          },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:296:          child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:297:            padding: const EdgeInsets.only(bottom: 20),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:298:            child: Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:299:              decoration: ShapeDecoration(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:300:              child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:301:                crossAxisAlignment: CrossAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:432:      shrinkWrap: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:433:      padding: EdgeInsets.zero,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:434:      physics: const NeverScrollableScrollPhysics(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:435:      scrollDirection: Axis.vertical,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:436:      itemCount: controller.allNearestRestaurant.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:437:      itemBuilder: (BuildContext context, int index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:438:        VendorModel vendorModel = controller.allNearestRestaurant[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:439:        return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:440:          onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:441:            Get.to(const DineInDetailsScreen(), arguments: {"vendorModel": vendorModel});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:442:          },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:443:          child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:444:            padding: const EdgeInsets.only(bottom: 20),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:445:            child: Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:446:              decoration: ShapeDecoration(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:447:              child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:448:                crossAxisAlignment: CrossAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:579:      height: Responsive.height(24, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:580:      child: ListView.builder(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:581:        physics: const BouncingScrollPhysics(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:582:        scrollDirection: Axis.horizontal,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:583:        itemCount: controller.newArrivalRestaurantList.length >= 10 ? 10 : controller.newArrivalRestaurantList.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:584:        itemBuilder: (BuildContext context, int index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:585:          VendorModel vendorModel = controller.newArrivalRestaurantList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:586:          return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:587:            onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:588:              Get.to(const DineInDetailsScreen(), arguments: {"vendorModel": vendorModel});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:589:            },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:590:            child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:591:              padding: const EdgeInsets.only(right: 10),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:592:              child: SizedBox(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:593:                width: Responsive.width(55, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:594:                child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:595:                  crossAxisAlignment: CrossAxisAlignment.start,
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:162:                                        child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:163:                                          padding: const EdgeInsets.symmetric(horizontal: 18),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:164:                                          child:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:165:                                              controller.favouriteRestaurant.value
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:166:                                                  ? controller.favouriteVendorList.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:167:                                                      ? Constant.showEmptyView(message: "Favourite Store not found.".tr)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:168:                                                      : ListView.builder(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:169:                                                        shrinkWrap: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:170:                                                        padding: EdgeInsets.zero,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:171:                                                        scrollDirection: Axis.vertical,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:172:                                                        itemCount: controller.favouriteVendorList.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:173:                                                        itemBuilder: (BuildContext context, int index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:174:                                                          VendorModel vendorModel = controller.favouriteVendorList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:175:                                                          return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:176:                                                            onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:177:                                                              ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:178:                                                              Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel})?.then((value) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:179:                                                                await controller.getData();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:180:                                                              });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:181:                                                              // Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:182:                                                            },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:183:                                                            child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:184:                                                              padding: const EdgeInsets.only(bottom: 20),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:218:                                                                                        restaurantId: vendorModel.id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:219:                                                                                        userId: FireStoreUtils.getCurrentUid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:220:                                                                                      );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:221:                                                                                      controller.favouriteList.removeWhere((item) => item.restaurantId == vendorModel.id);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:222:                                                                                      controller.favouriteVendorList.removeAt(index);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:223:                                                                                      await FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:224:                                                                                    } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:225:                                                                                      FavouriteModel favouriteModel = FavouriteModel(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:226:                                                                                        restaurantId: vendorModel.id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:227:                                                                                        userId: FireStoreUtils.getCurrentUid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:228:                                                                                      );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:229:                                                                                      controller.favouriteList.add(favouriteModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:230:                                                                                      await FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:231:                                                                                    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:232:                                                                                  },
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:115:                                await FireStoreUtils.sendTopUpMail(paymentMethod: "Gift Voucher", amount: giftCodeModel.price.toString(), tractionId: transactionModel.id.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:116:                                await FireStoreUtils.placeGiftCardOrder(giftCodeModel).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:117:                                  ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:118:                                  if (Constant.walletSetting == true) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:119:                                    Get.offAll(const DashBoardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:120:                                    DashBoardController controller = Get.put(DashBoardController());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:121:                                    controller.selectedIndex.value = 2;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:122:                                  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:123:                                  ShowToastDialog.showToast("Voucher redeem successfully".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:124:                                });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:125:                              });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:126:                            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:127:                          });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:128:                        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_screen.dart:129:                      } else {
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:24:          appBar: AppBar(backgroundColor: isDark ? AppThemeData.surfaceDark : AppThemeData.surface, centerTitle: false, titleSpacing: 0),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:25:          body:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:26:              controller.isLoading.value
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:27:                  ? Constant.loader()
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:28:                  : controller.allNearestRestaurant.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:29:                  ? Constant.showEmptyView(message: "No Restaurant found".tr)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:30:                  : Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:31:                    padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:32:                    child: ListView.builder(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:33:                      shrinkWrap: true,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:34:                      itemCount: controller.allNearestRestaurant.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:35:                      itemBuilder: (context, index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:36:                        VendorModel vendorModel = controller.allNearestRestaurant[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:37:                        return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:38:                          onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:39:                            Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:40:                          },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:41:                          child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:42:                            padding: const EdgeInsets.only(bottom: 20),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:43:                            child: Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:44:                              decoration: ShapeDecoration(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:45:                              child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:46:                                crossAxisAlignment: CrossAxisAlignment.start,
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:11:import 'package:get/get.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:12:import '../../../controllers/theme_controller.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:13:import '../restaurant_details_screen/restaurant_details_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:14:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:15:class DiscountRestaurantListScreen extends StatelessWidget {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:16:  const DiscountRestaurantListScreen({super.key});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:17:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:18:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:19:  Widget build(BuildContext context) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:20:    final themeController = Get.find<ThemeController>();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:21:    final isDark = themeController.isDark.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:22:    return GetX(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:23:      init: DiscountRestaurantListController(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:24:      builder: (controller) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:25:        return Scaffold(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:26:          appBar: AppBar(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:27:            backgroundColor: isDark ? AppThemeData.surfaceDark : AppThemeData.surface,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:28:            centerTitle: false,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:29:            titleSpacing: 0,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:30:            title: Text(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:31:              controller.title.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:32:              textAlign: TextAlign.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:33:              style: TextStyle(fontFamily: AppThemeData.medium, fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:39:                  : Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:40:                    padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:41:                    child: ListView.builder(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:42:                      shrinkWrap: true,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:43:                      itemCount: controller.vendorList.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:44:                      itemBuilder: (context, index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:45:                        VendorModel vendorModel = controller.vendorList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:46:                        CouponModel offerModel = controller.couponList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:47:                        return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:48:                          onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:49:                            Get.to(RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:50:                          },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:51:                          child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:52:                            padding: const EdgeInsets.only(bottom: 20),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:53:                            child: Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:54:                              decoration: ShapeDecoration(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:55:                              child: Row(
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:77:            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:78:            child:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:79:                controller.isLoading.value
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:80:                    ? _buildHomeShimmer(isDark)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:81:                    : Constant.isZoneAvailable == false || controller.allNearestRestaurant.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:82:                    ? Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:83:                      padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:84:                      child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:85:                        mainAxisAlignment: MainAxisAlignment.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:86:                        crossAxisAlignment: CrossAxisAlignment.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:87:                        children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:88:                          Image.asset("assets/images/location.gif", height: 120),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:89:                          const SizedBox(height: 12),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:90:                          Text("No Store Found in Your Area".tr, style: TextStyle(color: isDark ? AppThemeData.grey100 : AppThemeData.grey800, fontSize: 22, fontFamily: AppThemeData.semiBold)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:91:                          const SizedBox(height: 5),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:295:                                        ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:296:                                        const SizedBox(height: 10),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:297:                                        InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:298:                                          onTap: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:299:                                            Get.to(const SearchScreen(), arguments: {"vendorList": controller.allNearestRestaurant});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:300:                                          },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:301:                                          child: TextFieldWidget(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:302:                                            hintText:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:303:                                                Constant.sectionConstantModel?.name?.toLowerCase().contains('restaurants') == true
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:304:                                                    ? 'Search the restaurant, food and more...'.tr
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:305:                                                    : 'Search the store, item and more...'.tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:306:                                            controller: null,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:307:                                            enable: false,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:308:                                            prefix: Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: SvgPicture.asset("assets/icons/ic_search.svg")),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:309:                                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:337:                                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:338:                                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:339:                                          const SizedBox(height: 32),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:340:                                          controller.bannerModel.isEmpty ? const SizedBox() : Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: BannerView(controller: controller)),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:341:                                          controller.couponRestaurantList.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:342:                                              ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:343:                                              : Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:344:                                                padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:345:                                                child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:346:                                                  mainAxisAlignment: MainAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:347:                                                  crossAxisAlignment: CrossAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:348:                                                  children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:349:                                                    titleView(isDark, "Largest Discounts", () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:350:                                                      Get.to(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:351:                                                        const DiscountRestaurantListScreen(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:352:                                                        arguments: {"vendorList": controller.couponRestaurantList, "couponList": controller.couponList, "title": "Discounts Stores"},
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:353:                                                      );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:354:                                                    }),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:355:                                                    const SizedBox(height: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:356:                                                    OfferView(controller: controller),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:357:                                                  ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:358:                                                ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:359:                                              ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:360:                                          const SizedBox(height: 28),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:361:                                          controller.newArrivalRestaurantList.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:362:                                              ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:363:                                              : Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:364:                                                decoration: const BoxDecoration(image: DecorationImage(image: AssetImage("assets/images/ic_new_arrival_bg.png"), fit: BoxFit.cover)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:365:                                                child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:366:                                                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:367:                                                  child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:368:                                                    mainAxisAlignment: MainAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:369:                                                    crossAxisAlignment: CrossAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:370:                                                    children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:371:                                                      Row(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:378:                                                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:379:                                                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:380:                                                          InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:381:                                                            onTap: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:382:                                                              Get.to(const RestaurantListScreen(), arguments: {"vendorList": controller.newArrivalRestaurantList, "title": "New Arrival"})?.then((v) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:383:                                                                controller.getFavouriteRestaurant();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:384:                                                              });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:385:                                                            },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:386:                                                            child: Text(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:387:                                                              "View all".tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:388:                                                              textAlign: TextAlign.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:389:                                                              style: TextStyle(fontFamily: AppThemeData.regular, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:390:                                                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:391:                                                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:392:                                                        ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:702:      shrinkWrap: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:703:      padding: EdgeInsets.zero,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:704:      physics: const NeverScrollableScrollPhysics(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:705:      scrollDirection: Axis.vertical,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:706:      itemCount: controller.popularRestaurantList.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:707:      itemBuilder: (BuildContext context, int index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:708:        VendorModel vendorModel = controller.popularRestaurantList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:709:        return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:710:          onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:711:            Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel})?.then((v) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:712:              controller.getFavouriteRestaurant();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:713:            });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:714:          },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:715:          child: Padding(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:716:            padding: EdgeInsets.only(bottom: controller.popularRestaurantList.length - 1 == index ? 60 : 20),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:717:            child: Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:718:              decoration: ShapeDecoration(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:719:              child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:720:                crossAxisAlignment: CrossAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:721:                children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:722:                  Stack(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:723:                    children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:724:                      ClipRRect(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:725:                        borderRadius: const BorderRadius.only(topLeft: Radius.circular(16), topRight: Radius.circular(16)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:726:                        child: Stack(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:875:      shrinkWrap: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:876:      padding: EdgeInsets.zero,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:877:      physics: const NeverScrollableScrollPhysics(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:878:      scrollDirection: Axis.vertical,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:879:      itemCount: controller.allNearestRestaurant.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:880:      itemBuilder: (BuildContext context, int index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:881:        VendorModel vendorModel = controller.allNearestRestaurant[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:882:        return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:883:          onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:884:            Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel})?.then((v) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:885:              controller.getFavouriteRestaurant();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:886:            });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:887:          },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:888:          child: Padding(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:889:            padding: EdgeInsets.only(bottom: controller.allNearestRestaurant.length - 1 == index ? 60 : 20),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:890:            child: Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:891:              decoration: ShapeDecoration(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:892:              child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:893:                crossAxisAlignment: CrossAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:894:                children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:895:                  Stack(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:896:                    children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:897:                      ClipRRect(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:898:                        borderRadius: const BorderRadius.only(topLeft: Radius.circular(16), topRight: Radius.circular(16)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:899:                        child: Stack(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1047:      height: Responsive.height(24, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1048:      child: ListView.builder(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1049:        physics: const BouncingScrollPhysics(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1050:        scrollDirection: Axis.horizontal,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1051:        itemCount: controller.newArrivalRestaurantList.length >= 10 ? 10 : controller.newArrivalRestaurantList.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1052:        itemBuilder: (BuildContext context, int index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1053:          VendorModel vendorModel = controller.newArrivalRestaurantList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1054:          return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1055:            onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1056:              Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel})?.then((v) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1057:                controller.getFavouriteRestaurant();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1058:              });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1059:            },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1060:            child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1061:              padding: const EdgeInsets.only(right: 10),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1062:              child: SizedBox(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1063:                width: Responsive.width(55, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1338:      height: Responsive.height(17, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1339:      child: ListView.builder(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1340:        physics: const BouncingScrollPhysics(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1341:        scrollDirection: Axis.horizontal,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1342:        itemCount: controller.couponRestaurantList.length >= 15 ? 15 : controller.couponRestaurantList.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1343:        itemBuilder: (BuildContext context, int index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1344:          VendorModel vendorModel = controller.couponRestaurantList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1345:          CouponModel offerModel = controller.couponList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1346:          return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1347:            onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1348:              Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1349:            },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1350:            child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1351:              padding: const EdgeInsets.only(right: 10),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1352:              child: SizedBox(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1353:                width: Responsive.width(38, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1354:                child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1826:                  mapToolbarEnabled: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1827:                  initialCameraPosition: CameraPosition(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1828:                    zoom: 18,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1829:                    target:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1830:                        controller.homeController.allNearestRestaurant.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1831:                            ? LatLng(Constant.selectedLocation.location!.latitude ?? 45.521563, Constant.selectedLocation.location!.longitude ?? -122.677433)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1832:                            : LatLng(controller.homeController.allNearestRestaurant.first.latitude ?? 45.521563, controller.homeController.allNearestRestaurant.first.longitude ?? -122.677433),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1833:                  ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1834:                ),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1835:            controller.homeController.allNearestRestaurant.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1836:                ? Container()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1837:                : Align(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1838:                  alignment: Alignment.bottomCenter,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1839:                  child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1840:                    padding: const EdgeInsets.only(bottom: 80),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1841:                    child: SizedBox(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1842:                      height: Responsive.height(25, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1843:                      child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1844:                        mainAxisSize: MainAxisSize.min,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1845:                        children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1849:                              controller: PageController(viewportFraction: 0.88),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1850:                              onPageChanged: (value) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1851:                                if (Constant.selectedMapType == "osm") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1852:                                  controller.osmMapController.move(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1853:                                    location.LatLng(controller.homeController.allNearestRestaurant[value].latitude!, controller.homeController.allNearestRestaurant[value].longitude!),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1854:                                    16,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1855:                                  );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1856:                                } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1857:                                  CameraUpdate cameraUpdate = CameraUpdate.newCameraPosition(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1858:                                    CameraPosition(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1859:                                      zoom: 18,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1860:                                      target: LatLng(controller.homeController.allNearestRestaurant[value].latitude!, controller.homeController.allNearestRestaurant[value].longitude!),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1861:                                    ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1862:                                  );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1863:                                  controller.mapController!.animateCamera(cameraUpdate);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1864:                                }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1865:                              },
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1866:                              itemCount: controller.homeController.allNearestRestaurant.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1867:                              scrollDirection: Axis.horizontal,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1868:                              itemBuilder: (context, index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1869:                                VendorModel vendorModel = controller.homeController.allNearestRestaurant[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1870:                                return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1871:                                  onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1872:                                    Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel})?.then((v) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1873:                                      controller.homeController.getFavouriteRestaurant();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1874:                                    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1875:                                  },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1876:                                  child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1877:                                    padding: EdgeInsets.symmetric(vertical: 10, horizontal: index == 0 ? 0 : 10),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1878:                                    child: Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1879:                                      decoration: BoxDecoration(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, borderRadius: const BorderRadius.all(Radius.circular(16))),
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:61:          backgroundColor: isDark ? AppThemeData.surfaceDark : AppThemeData.surface,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:62:          body:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:63:              controller.isLoading.value
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:64:                  ? _buildHomeScreenTwoShimmer(isDark)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:65:                  : Constant.isZoneAvailable == false || controller.allNearestRestaurant.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:66:                  ? Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:67:                    padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:68:                    child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:69:                      mainAxisAlignment: MainAxisAlignment.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:70:                      crossAxisAlignment: CrossAxisAlignment.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:71:                      children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:72:                        Image.asset("assets/images/location.gif", height: 120),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:73:                        const SizedBox(height: 12),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:74:                        Text("No Store Found in Your Area".tr, style: TextStyle(color: isDark ? AppThemeData.grey100 : AppThemeData.grey800, fontSize: 22, fontFamily: AppThemeData.semiBold)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:75:                        const SizedBox(height: 5),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:251:                                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:252:                                      const SizedBox(height: 10),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:253:                                      InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:254:                                        onTap: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:255:                                          Get.to(const SearchScreen(), arguments: {"vendorList": controller.allNearestRestaurant});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:256:                                        },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:257:                                        child: TextFieldWidget(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:258:                                          hintText:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:259:                                              Constant.sectionConstantModel?.name?.toLowerCase().contains('restaurants') == true
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:260:                                                  ? 'Search the dish, food and more...'.tr
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:261:                                                  : 'Search the store, item and more...'.tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:262:                                          controller: null,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:263:                                          enable: false,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:264:                                          prefix: Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: SvgPicture.asset("assets/icons/ic_search.svg")),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:265:                                        ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:274:                                      children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:275:                                        controller.bannerModel.isEmpty ? const SizedBox() : Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: BannerView(controller: controller)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:276:                                        const SizedBox(height: 20),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:277:                                        Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: CategoryView(controller: controller)),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:278:                                        controller.couponRestaurantList.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:279:                                            ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:280:                                            : Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: Column(children: [const SizedBox(height: 20), OfferView(controller: controller)])),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:281:                                        controller.storyList.isEmpty || Constant.storyEnable == false
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:282:                                            ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:283:                                            : Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: Column(children: [const SizedBox(height: 20), StoryView(controller: controller)])),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:284:                                        Visibility(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:285:                                          visible: Constant.isEnableAdsFeature == true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:286:                                          child:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:287:                                              controller.advertisementList.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:288:                                                  ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:338:                                                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:339:                                                    ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:340:                                                  ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:341:                                        ),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:342:                                        controller.allNearestRestaurant.isEmpty ? const SizedBox() : Column(children: [const SizedBox(height: 20), RestaurantView(controller: controller)]),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:343:                                      ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:344:                                    ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:345:                                  ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:346:                                ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:347:                              ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:348:                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:349:                  ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:350:          floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:351:          floatingActionButton: Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:352:            decoration: BoxDecoration(color: isDark ? AppThemeData.grey800 : AppThemeData.grey100, borderRadius: const BorderRadius.all(Radius.circular(30))),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:575:                    children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:576:                      Expanded(child: Text("Large Discounts".tr, style: TextStyle(fontFamily: AppThemeData.semiBold, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 18))),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:577:                      InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:578:                        onTap: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:579:                          Get.to(const DiscountRestaurantListScreen(), arguments: {"vendorList": controller.couponRestaurantList, "couponList": controller.couponList, "title": "Discounts Stores"});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:580:                        },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:581:                        child: Text(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:582:                          "See all".tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:583:                          textAlign: TextAlign.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:584:                          style: TextStyle(fontFamily: AppThemeData.medium, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, fontSize: 14),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:585:                        ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:586:                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:587:                    ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:588:                  ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:589:                  GradientText(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:601:              child: ListView.builder(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:602:                shrinkWrap: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:603:                scrollDirection: Axis.horizontal,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:604:                physics: const BouncingScrollPhysics(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:605:                itemCount: controller.couponRestaurantList.length >= 15 ? 15 : controller.couponRestaurantList.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:606:                itemBuilder: (context, index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:607:                  VendorModel vendorModel = controller.couponRestaurantList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:608:                  CouponModel offerModel = controller.couponList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:609:                  return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:610:                    onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:611:                      Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:612:                    },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:613:                    child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:614:                      padding: const EdgeInsets.only(right: 10),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:615:                      child: SizedBox(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:616:                        width: Responsive.width(34, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:617:                        child: ClipRRect(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:878:                children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:879:                  Expanded(child: Text("Best Stores".tr, style: TextStyle(fontFamily: AppThemeData.semiBold, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 18))),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:880:                  InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:881:                    onTap: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:882:                      Get.to(const RestaurantListScreen(), arguments: {"vendorList": controller.allNearestRestaurant, "title": "Best Stores"});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:883:                    },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:884:                    child: Text(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:885:                      "See all".tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:886:                      textAlign: TextAlign.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:887:                      style: TextStyle(fontFamily: AppThemeData.medium, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, fontSize: 14),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:888:                    ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:889:                  ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:890:                ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:891:              ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:892:            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:897:                shrinkWrap: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:898:                padding: EdgeInsets.zero,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:899:                physics: const NeverScrollableScrollPhysics(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:900:                scrollDirection: Axis.vertical,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:901:                itemCount: controller.allNearestRestaurant.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:902:                itemBuilder: (BuildContext context, int index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:903:                  VendorModel vendorModel = controller.allNearestRestaurant[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:904:                  List<CouponModel> tempList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:905:                  List<double> discountAmountTempList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:906:                  for (var element in controller.couponList) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:907:                    if (vendorModel.id == element.vendorID && element.expiresAt!.toDate().isAfter(DateTime.now())) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:908:                      tempList.add(element);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:909:                      discountAmountTempList.add(double.parse(element.discount.toString()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:910:                    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:911:                  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:912:                  return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:913:                    onTap: () {
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:12:import '../../../service/fire_store_utils.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:13:import '../../../widget/restaurant_image_view.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:14:import '../restaurant_details_screen/restaurant_details_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:15:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:16:class RestaurantListScreen extends StatelessWidget {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:17:  const RestaurantListScreen({super.key});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:18:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:19:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:20:  Widget build(BuildContext context) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:21:    final themeController = Get.find<ThemeController>();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:22:    final isDark = themeController.isDark.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:23:    return GetX(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:24:      init: RestaurantListController(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:25:      builder: (controller) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:26:        return Scaffold(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:27:          appBar: AppBar(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:28:            backgroundColor: isDark ? AppThemeData.surfaceDark : AppThemeData.surface,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:29:            centerTitle: false,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:30:            titleSpacing: 0,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:31:            title: Text(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:32:              controller.title.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:33:              textAlign: TextAlign.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:34:              style: TextStyle(fontFamily: AppThemeData.medium, fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:32:            // if TypeScan.takePicture will try decode when click to take a picture(default TypeScan.live)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:33:            onCapture: (Result result) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:34:              Get.back();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:35:              ShowToastDialog.showLoader("Please wait...".tr);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:36:              if (controller.allNearestRestaurant.isNotEmpty) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:37:                if (controller.allNearestRestaurant.where((vendor) => vendor.id == result.text).isEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:38:                  ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:39:                  ShowToastDialog.showToast("Store is not available".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:40:                  return;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:41:                }
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:42:                VendorModel storeModel = controller.allNearestRestaurant.firstWhere((vendor) => vendor.id == result.text);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:43:                ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:44:                Get.back();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:45:                Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": storeModel});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:46:              } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:47:                Get.back();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:48:                ShowToastDialog.showToast("Store is not available".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:49:              }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:50:            },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:51:          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\scan_qrcode_screen\scan_qr_code_screen.dart:52:        );
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:7:import 'package:get/get.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:8:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:9:import '../../controllers/on_demand_dashboard_controller.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:10:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:11:class OnDemandDashboardScreen extends StatelessWidget {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:12:  const OnDemandDashboardScreen({super.key});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:13:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:14:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:15:  Widget build(BuildContext context) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:16:    final themeController = Get.find<ThemeController>();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:17:    return Obx(() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:18:      final isDark = themeController.isDark.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:19:      return GetX(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:20:        init: OnDemandDashboardController(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:21:        builder: (controller) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:22:          return Scaffold(
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:47:                  title: "Track Your Order".tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:48:                  onPress: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:49:                    print("Tracking Order: $parcelOrder");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:50:                    //Get.to(() => TrackOrderScreen(), arguments: {'order': parcelOrder});
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:51:                    Get.offAll(const ParcelDashboardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:52:                    ParcelDashboardController controller = Get.put(ParcelDashboardController());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:53:                    controller.selectedIndex.value = 1;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:54:                  },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:55:                  color: AppThemeData.primary300,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:56:                  textColor: AppThemeData.grey900,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:57:                ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:58:              ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:59:            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:60:          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\order_successfully_placed.dart:61:        ),
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:5:import 'package:flutter/material.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:6:import 'package:flutter_svg/flutter_svg.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:7:import 'package:get/get.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:8:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:9:class ParcelDashboardScreen extends StatelessWidget {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:10:  const ParcelDashboardScreen({super.key});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:11:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:12:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:13:  Widget build(BuildContext context) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:14:    final themeController = Get.find<ThemeController>();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:15:    return Obx(() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:16:      final isDark = themeController.isDark.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:17:      return GetX(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:18:        init: ParcelDashboardController(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:19:        builder: (controller) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:20:          return Scaffold(
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:6:import 'package:flutter_svg/flutter_svg.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:7:import 'package:get/get.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:8:import '../../controllers/cab_rental_dashboard_controllers.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:9:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:10:class RentalDashboardScreen extends StatelessWidget {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:11:  const RentalDashboardScreen({super.key});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:12:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:13:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:14:  Widget build(BuildContext context) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:15:    final themeController = Get.find<ThemeController>();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:16:    return Obx(() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:17:      final isDark = themeController.isDark.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:18:      return GetX(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:19:        init: CabRentalDashboardControllers(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:20:        builder: (controller) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_dashboard_screen.dart:21:          return Scaffold(
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:180:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:181:  if (normalizedType == 'ecommerce-service') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:182:    return _buildMaterialFallbackIcon(Icons.storefront_rounded);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:183:  }
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:184:  if (normalizedType == 'delivery-service') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:185:    return _buildAssetFallbackIcon('assets/images/food_delivery.png');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:186:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:187:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:188:  return _buildAssetFallbackIcon('assets/icons/ghalbit_launcher_icon.png');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:189:}
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:190:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:191:Widget _buildMaterialFallbackIcon(IconData iconData) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:192:  return SizedBox(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:193:    width: 80,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:194:    height: 60,
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1238:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1239:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1240:  static StreamController<List<VendorModel>>? getNearestVendorByCategoryController;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1241:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1242:  static Stream<List<VendorModel>> getAllNearestRestaurantByCategoryId({bool? isDining, required String categoryId, bool ecommarce = false}) async* {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1243:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1244:      getNearestVendorByCategoryController = StreamController<List<VendorModel>>.broadcast();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1245:      List<VendorModel> vendorList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1246:      Query<Map<String, dynamic>> query;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1247:      if (ecommarce == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1248:        query =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1249:            isDining == true
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1250:                ? fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where("enabledDiveInFuture", isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1251:                : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1252:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1253:        query =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1254:            isDining == true
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1255:                ? fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1266:          .collection(collectionRef: query)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1267:          .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1268:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1269:      stream.listen((List<DocumentSnapshot> documentList) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1270:        vendorList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1271:        for (var document in documentList) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1272:          final data = document.data() as Map<String, dynamic>;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1273:          VendorModel vendorModel = VendorModel.fromJson(data);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1274:          if ((Constant.isSubscriptionModelApplied == true || vendorModel.adminCommission?.isEnabled == true) && vendorModel.subscriptionPlan != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1275:            if (vendorModel.subscriptionTotalOrders == "-1") {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1276:              vendorList.add(vendorModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1277:            } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1278:              if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == '-1') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1279:                if (vendorModel.subscriptionTotalOrders != '0') {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1280:                  vendorList.add(vendorModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1281:                }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1282:              }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1283:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1284:          } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1285:            vendorList.add(vendorModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1286:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1287:        }
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1288:        getNearestVendorByCategoryController!.sink.add(vendorList);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1289:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1290:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1291:      yield* getNearestVendorByCategoryController!.stream;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1292:    } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1293:      print(e);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1294:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1295:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1296:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1297:  static StreamController<List<VendorModel>>? getNearestVendorController;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1298:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1299:  static Stream<List<VendorModel>> getAllNearestRestaurant({bool? isDining, bool ecommarce = false}) async* {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1300:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1301:      getNearestVendorController = StreamController<List<VendorModel>>.broadcast();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1302:      List<VendorModel> vendorList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1303:      Query<Map<String, dynamic>> query;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1304:      if (ecommarce == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1305:        query =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1306:            isDining == true
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1307:                ? fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where("enabledDiveInFuture", isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1308:                : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1309:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1310:        query =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1311:            isDining == true
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1312:                ? fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1324:          .collection(collectionRef: query)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1325:          .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1326:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1327:      stream.listen((List<DocumentSnapshot> documentList) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1328:        vendorList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1329:        for (var document in documentList) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1330:          final data = document.data() as Map<String, dynamic>;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1331:          VendorModel vendorModel = VendorModel.fromJson(data);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1332:          if ((Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel!.adminCommision?.isEnabled == true) && vendorModel.subscriptionPlan != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1333:            if (vendorModel.subscriptionTotalOrders == "-1") {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1334:              vendorList.add(vendorModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1335:            } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1336:              if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == "-1") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1337:                if (vendorModel.subscriptionTotalOrders != '0') {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1338:                  vendorList.add(vendorModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1339:                }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1340:              }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1341:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1342:          } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1343:            vendorList.add(vendorModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1344:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1345:        }
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1346:        getNearestVendorController!.sink.add(vendorList);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1347:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1348:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1349:      yield* getNearestVendorController!.stream;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1350:    } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1351:      print(e);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1352:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1353:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1354:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1355:  static Future<List<VendorCategoryModel>> getHomePageShowCategory() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1356:    List<VendorCategoryModel> vendorCategoryList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1403:        print('FireStoreUtils.getCurrencys Parse error $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1404:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1405:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1406:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1407:    List<VendorModel?> vendorList = await getAllStoresFuture();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1408:    List<ProductModel> allProduct = <ProductModel>[];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1409:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1410:    for (var vendor in vendorList) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1411:      await getAllProducts(vendor!.id.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1412:        if (Constant.isSubscriptionModelApplied == true || vendor.adminCommission?.isEnabled == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1413:          if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1414:            if (vendor.subscriptionPlan?.itemLimit == '-1') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1415:              allProduct.addAll(value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1416:            } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1417:              int selectedProduct = value.length < int.parse(vendor.subscriptionPlan?.itemLimit ?? '0') ? (value.isEmpty ? 0 : (value.length)) : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1418:              allProduct.addAll(value.sublist(0, selectedProduct));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1419:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1420:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1454:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1455:    return products;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1456:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1457:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1458:  static Future<List<VendorModel>> getAllStoresFuture({String? categoryId, bool ecommarce = false}) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1459:    List<VendorModel> vendors = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1460:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1461:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1462:      Query<Map<String, dynamic>> collectionReference;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1463:      if (ecommarce == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1464:        collectionReference =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1465:            categoryId == null
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1466:                ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1467:                : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1468:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1639:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1640:  static Future<List<StoryModel>> getStory() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1641:    List<StoryModel> storyList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1642:    await fireStore.collection(CollectionName.story).where('sectionID', isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1643:      print("Number of Stories Fetched: ${value.docs.length}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1644:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1645:        StoryModel walletTransactionModel = StoryModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1646:        storyList.add(walletTransactionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1647:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1648:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1649:    return storyList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1650:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1651:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1652:  static Future<GiftCardsOrderModel?> checkRedeemCode(String giftCode) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1653:    GiftCardsOrderModel? giftCardsOrderModel;
-----

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart
-----
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:136:      if (isBgApp == false) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:137:        Get.offAll(HelpSupportScreen(isNavigateViaNotification: true));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:138:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:139:    } else if (type == 'orderChat') {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:140:      DashBoardController dashBoardScreen = Get.put(DashBoardController());
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:141:      dashBoardScreen.selectedIndex.value = 4;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:142:      Get.offAll(DashBoardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:143:      if (role == Constant.userRoleVendor) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:144:        Get.to(RestaurantInboxScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:145:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:146:        Get.to(DriverInboxScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:147:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:148:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:149:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:150:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:151:  void display(RemoteMessage message) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart:152:    log('Got a message whilst in the foreground!');
-----

Final Status:
STATUS: FLUTTER_RESTAURANT_VENDOR_LIST_DEBUG_POINT_AUDITED