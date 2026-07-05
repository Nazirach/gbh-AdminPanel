# READ SERVICE LIST CONTROLLER MENU BLOCK

Generated: 06/30/2026 22:07:26
Mode: read-only. No patch.

File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart

## Lines 1-240
```dart
   1: import 'package:customer/models/section_model.dart';
   2: import 'package:customer/models/tax_model.dart';
   3: import 'package:customer/screen_ui/cab_service_screens/cab_dashboard_screen.dart';
   4: import 'package:customer/screen_ui/ecommarce/dash_board_e_commerce_screen.dart';
   5: import 'package:customer/screen_ui/parcel_service/parcel_dashboard_screen.dart';
   6: import 'package:customer/screen_ui/rental_service/rental_dashboard_screen.dart';
   7: import 'package:customer/service/cart_provider.dart';
   8: import 'package:customer/service/database_helper.dart';
   9: import 'package:customer/service/fire_store_utils.dart';
  10: import 'package:customer/constant/constant.dart';
  11: import 'package:customer/models/user_model.dart';
  12: import 'package:customer/models/currency_model.dart';
  13: import 'package:customer/themes/app_them_data.dart';
  14: import 'package:customer/themes/round_button_fill.dart';
  15: import 'package:customer/themes/show_toast_dialog.dart';
  16: import 'package:customer/utils/notification_service.dart';
  17: import 'package:customer/utils/preferences.dart';
  18: import 'package:firebase_auth/firebase_auth.dart' as auth;
  19: import 'package:flutter/material.dart';
  20: import 'package:get/get.dart';
  21: import '../screen_ui/auth_screens/login_screen.dart';
  22: import '../screen_ui/multi_vendor_service/dash_board_screens/dash_board_screen.dart';
  23: import '../screen_ui/on_demand_service/on_demand_dashboard_screen.dart';
  24: 
  25: class ServiceListController extends GetxController {
  26:   var isLoading = false.obs;
  27:   var serviceListBanner = <dynamic>[].obs;
  28:   var sectionList = <SectionModel>[].obs;
  29:   var currencyData = CurrencyModel().obs;
  30: 
  31:   @override
  32:   void onInit() {
  33:     super.onInit();
  34:     loadData();
  35:   }
  36: 
  37:   Future<void> loadData() async {
  38:     isLoading.value = true;
  39: 
  40:     // fetch currency
  41:     CurrencyModel? currency = await FireStoreUtils.getCurrency();
  42: 
  43:     currencyData.value = currency ?? CurrencyModel(id: "", code: "USD", decimal: 2, isactive: true, name: "US Dollar", symbol: "\$", symbolatright: false);
  44: 
  45:     // Load sections
  46:     List<SectionModel> sections = await FireStoreUtils.getSections();
  47: 
  48:     sectionList.assignAll(sections);
  49: await FireStoreUtils.getSectionBannerList().then((value) {
  50:       serviceListBanner.assignAll(value);
  51:     });
  52: 
  53:     await getZone();
  54:     isLoading.value = false;
  55:   }
  56: 
  57:   Future<void> getZone() async {
  58:     await FireStoreUtils.getZone().then((value) {
  59:       if (value != null) {
  60:         Constant.zoneList = value;
  61:       }
  62:     });
  63:   }
  64: 
  65:   Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {
  66:     try {
  67:       ShowToastDialog.showLoader("Please wait...".tr);
  68:       Constant.sectionConstantModel = sectionModel;
  69:       AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
  70:       if (auth.FirebaseAuth.instance.currentUser != null) {
  71:         String uid = auth.FirebaseAuth.instance.currentUser!.uid;
  72:         UserModel? user = await FireStoreUtils.getUserProfile(uid);
  73:         if (user != null && user.role == Constant.userRoleCustomer) {
  74:           user.fcmToken = await NotificationService.getToken();
  75:           await FireStoreUtils.updateUser(user);
  76:           ShowToastDialog.closeLoader();
  77:           if (sectionModel.serviceType == 'Ecommerce Service') {
  78:             await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
  79:           }
  80:           await _navigate(sectionModel);
  81:         } else {
  82:           ShowToastDialog.closeLoader();
  83:           Get.offAll(() => const LoginScreen());
  84:         }
  85:       } else {
  86:         ShowToastDialog.closeLoader();
  87:         await _navigate(sectionModel);
  88:       }
  89:     } catch (e) {
  90:       print("Error during service tap: $e");
  91:       ShowToastDialog.closeLoader();
  92:     }
  93:   }
  94: 
  95:   Future<void> _navigate(SectionModel sectionModel) async {
  96:     await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
  97:       if (value != null) {
  98:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
  99:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
 100:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
 101: 
 102:         if (sectionModel.packagingChargeEnable == true) {
 103:           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
 104:         }
 105:         if (sectionModel.platformFee?.enable == true) {
 106:           Constant.platformFeeModel = sectionModel.platformFee;
 107:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
 108:         }
 109:       }
 110:     });
 111: 
 112:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
 113:       if (cartItem.isNotEmpty) {
 114:         showAlertDialog(Get.context!, UserModel(), sectionModel);
 115:       } else {
 116:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
 117:           Get.to(DashBoardEcommerceScreen());
 118:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
 119:           Get.to(CabDashboardScreen());
 120:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
 121:           Get.to(RentalDashboardScreen());
 122:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
 123:           Get.to(ParcelDashboardScreen());
 124:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
 125:           Get.to(OnDemandDashboardScreen());
 126:         } else {
 127:           Get.to(() => DashBoardScreen());
 128:         }
 129:       }
 130:     } else {
 131:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
 132:         Get.to(DashBoardEcommerceScreen());
 133:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
 134:         Get.to(CabDashboardScreen());
 135:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
 136:         Get.to(RentalDashboardScreen());
 137:       } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
 138:         Get.to(ParcelDashboardScreen());
 139:       } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
 140:         Get.to(OnDemandDashboardScreen());
 141:       } else {
 142:         Get.to(() => DashBoardScreen());
 143:       }
 144:     }
 145:   }
 146: 
 147:   final CartProvider cartProvider = CartProvider();
 148: 
 149:   void showAlertDialog(BuildContext context, UserModel user, SectionModel sectionModel) {
 150:     Get.defaultDialog(
 151:       title: "Alert!".tr,
 152:       content: Column(
 153:         mainAxisSize: MainAxisSize.min,
 154:         children: [
 155:           Text("If you select this Section/Service, your previously added items will be removed from the cart.".tr, textAlign: TextAlign.center),
 156:           const SizedBox(height: 20),
 157:           Row(
 158:             children: [
 159:               Expanded(
 160:                 child: RoundedButtonFill(
 161:                   height: 5.5,
 162:                   title: "Cancel".tr,
 163:                   onPress: () {
 164:                     Get.back();
 165:                   },
 166:                   color: AppThemeData.grey900,
 167:                   textColor: AppThemeData.surface,
 168:                 ),
 169:               ),
 170:               const SizedBox(width: 12),
 171:               Expanded(
 172:                 child: RoundedButtonFill(
 173:                   title: "OK".tr,
 174:                   height: 5.5,
 175:                   onPress: () async {
 176:                     DatabaseHelper.instance.deleteAllCartProducts();
 177:                     cartProvider.clearDatabase();
 178:                     Get.back();
 179:                     if (sectionModel.serviceTypeFlag == "ecommerce-service") {
 180:                       Get.off(() => DashBoardEcommerceScreen());
 181:                     } else {
 182:                       Get.to(() => DashBoardScreen());
 183:                     }
 184:                   },
 185:                   color: AppThemeData.primary300,
 186:                   textColor: AppThemeData.surface,
 187:                 ),
 188:               ),
 189:             ],
 190:           ),
 191:         ],
 192:       ),
 193:       actions: [], // ÃƒÆ’Ã‚Â°Ãƒâ€¦Ã‚Â¸ÃƒÂ¢Ã¢â€šÂ¬Ã‹Å“Ãƒâ€¹Ã¢â‚¬Â  keep this empty since we put buttons in content
 194:     );
 195:   }
 196: }
```

## Final Status
STATUS: SERVICE_LIST_CONTROLLER_MENU_BLOCK_READ