# CUSTOMER SERVICE MENU CODE AND GIT AUDIT

Generated: 06/28/2026 23:53:02

Mode: read-only. No patch. No build. No Firebase write. No order creation.

## Purpose

- Check how many services Customer APK source is designed to support.
- Compare visible services with service names/types found in code and git.
- Find hidden/missing services that may exist in code but are not appearing on Customer Home.

## Git Info

```text
repo: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7
customer: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer

git rev-parse --show-toplevel:
git : fatal: not a git repository (or any of the parent directories): .git
At line:1 char:12
+ $lines += (git rev-parse --show-toplevel 2>&1 | Out-String)
+            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


git branch --show-current:
git : fatal: not a git repository (or any of the parent directories): .git
At line:1 char:12
+ $lines += (git branch --show-current 2>&1 | Out-String)
+            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


git log -1 --oneline:
git : fatal: not a git repository (or any of the parent directories): .git
At line:1 char:12
+ $lines += (git log -1 --oneline 2>&1 | Out-String)
+            ~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


git status --short:
git : fatal: not a git repository (or any of the parent directories): .git
At line:1 char:12
+ $lines += (git status --short 2>&1 | Out-String)
+            ~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 

```

## Source Search Summary

Search target: customer source files only.

- $pattern : 2 hit(s)
- $pattern : 2 hit(s)
- $pattern : 21 hit(s)
- $pattern : 546 hit(s)
- $pattern : 282 hit(s)
- $pattern : 45 hit(s)
- $pattern : 455 hit(s)
- $pattern : 2 hit(s)
- $pattern : 428 hit(s)
- $pattern : 304 hit(s)
- $pattern : 2 hit(s)
- $pattern : 2 hit(s)
- $pattern : 4 hit(s)
- $pattern : 5 hit(s)
- $pattern : 287 hit(s)
- $pattern : 112 hit(s)
- $pattern : 9 hit(s)
- $pattern : 3 hit(s)
- $pattern : 2 hit(s)
- $pattern : 47 hit(s)
- $pattern : 21 hit(s)
- $pattern : 2 hit(s)
- $pattern : 13 hit(s)
- $pattern : 33 hit(s)

## Important Source Context

### Pattern: getSections
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:46: List<SectionModel> sections = await FireStoreUtils.getSections();
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:261: static Future<List<SectionModel>> getSections() async {
```

### Pattern: serviceType
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:57: static String cabServiceType = "cab-service";
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:58: static String parcelServiceType = "parcel-service";
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:150: serviceType: 'ondemand-service',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart:447: serviceType: Constant.parcelServiceType,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart:180: if (Constant.sectionConstantModel?.serviceType == 'Ecommerce Service') {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:450: serviceType: Constant.parcelServiceType,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart:218: serviceType: Constant.parcelServiceType,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:141: serviceType: Constant.parcelServiceType,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:205: serviceType: Constant.parcelServiceType,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:211: serviceType: 'ondemand-service',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:229: serviceType: 'ondemand-service',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:250: serviceType: 'ondemand-service',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:117: serviceType: Constant.parcelServiceType,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:180: serviceType: Constant.parcelServiceType,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:118: serviceType: Constant.parcelServiceType,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:200: serviceType: Constant.parcelServiceType,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:240: serviceType: Constant.parcelServiceType,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:78: if (sectionModel.serviceType == 'Ecommerce Service') {
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
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:6: String? serviceType;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:15: String? serviceTypeFlag;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:26: this.serviceType,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:39: this.serviceTypeFlag,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:47: serviceType = json['serviceType'] ?? '';
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:58: serviceTypeFlag = json['serviceTypeFlag'] ?? '';
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:76: data['serviceType'] = serviceType;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:90: data['serviceTypeFlag'] = serviceTypeFlag;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\wallet_transaction_model.dart:14: String? serviceType;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\wallet_transaction_model.dart:27: this.serviceType,
```

### Pattern: serviceTypeFlag
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

### Pattern: ecommerce-service
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:113: if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:117: if (sectionModel.serviceTypeFlag == "ecommerce-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:132: if (sectionModel.serviceTypeFlag == "ecommerce-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:180: if (sectionModel.serviceTypeFlag == "ecommerce-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:203: if (Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:76: Constant.sectionConstantModel!.serviceTypeFlag == 'ecommerce-service' &&
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1088: ? Constant.sectionConstantModel!.serviceTypeFlag == 'ecommerce-service'
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:376: ? Constant.sectionConstantModel!.serviceTypeFlag == 'ecommerce-service'
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:299: Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service"
```

### Pattern: cab-service
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:57: static String cabServiceType = "cab-service";
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:119: } else if (sectionModel.serviceTypeFlag == "cab-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:134: } else if (sectionModel.serviceTypeFlag == "cab-service") {
```

### Pattern: rental-service
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:121: } else if (sectionModel.serviceTypeFlag == "rental-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:136: } else if (sectionModel.serviceTypeFlag == "rental-service") {
```

### Pattern: parcel_delivery
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:123: } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:138: } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
```

### Pattern: delivery-service
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:113: if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
```

### Pattern: SectionModel
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:54: static SectionModel? sectionConstantModel;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:28: var sectionList = <SectionModel>[].obs;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:46: List<SectionModel> sections = await FireStoreUtils.getSections();
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:66: Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:69: Constant.sectionConstantModel = sectionModel;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:70: AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:78: if (sectionModel.serviceType == 'Ecommerce Service') {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:81: await _navigate(sectionModel);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:88: await _navigate(sectionModel);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:96: Future<void> _navigate(SectionModel sectionModel) async {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:103: if (sectionModel.packagingChargeEnable == true) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:106: if (sectionModel.platformFee?.enable == true) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:107: Constant.platformFeeModel = sectionModel.platformFee;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:113: if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:115: showAlertDialog(Get.context!, UserModel(), sectionModel);
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
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:150: void showAlertDialog(BuildContext context, UserModel user, SectionModel sectionModel) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:180: if (sectionModel.serviceTypeFlag == "ecommerce-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:4: class SectionModel {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:24: SectionModel({
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:45: SectionModel.fromJson(Map<String, dynamic> json) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:261: static Future<List<SectionModel>> getSections() async {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:262: List<SectionModel> sections = [];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:267: sections.add(SectionModel.fromJson(document.data()));
```

### Pattern: sectionList
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:28: var sectionList = <SectionModel>[].obs;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:48: sectionList.assignAll(sections);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:51: itemCount: controller.sectionList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:56: final section = controller.sectionList[index];
```

### Pattern: Explore Our Services
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart:76: 'Explore Our Services': 'استكشف خدماتنا',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart:76: 'Explore Our Services': 'Explore Our Services',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:48: Text("Explore Our Services".tr, style: AppThemeData.semiBoldTextStyle(fontSize: 20, color: themeController.isDark.value ? AppThemeData.grey50 : AppThemeData.grey900)),
```

### Pattern: All Your Needs
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart:75: 'All Your Needs in One App!': 'كل احتياجاتك في تطبيق واحد!',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart:75: 'All Your Needs in One App!': 'All Your Needs in One App!',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:29: Text("All Your Needs in One App!".tr, style: AppThemeData.regularTextStyle(fontSize: 14, color: themeController.isDark.value ? AppThemeData.grey100 : AppThemeData.grey700)),
```

## Candidate Service Names Found In Source

```text
Booking
Cab
Delivery
Ecommerce
Hotel
Parcel
Rental
Restaurant
Restaurants
Ride
Store
Taxi
```

## Git Grep Service Terms

```text

### git grep: Cosmetic
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Fashion
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Flowers
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Restaurants
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Cab Service
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Food Grocery
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Parcel Service
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Rental Service
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Laundry
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Pharmacy
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Hotel
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Doctor
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Medicine
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Taxi
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: Ecommerce
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: serviceType
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git grep: serviceTypeFlag
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $grep = git grep -n -- "$term" -- customer 2>&1 | Select-Object - ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 

```

## Git History Search

This checks whether service names existed in previous commits.

```text

### git log -S: Laundry
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $hist = git log --all --oneline -S "$term" -- customer 2>&1 | Sel ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git log -S: Pharmacy
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $hist = git log --all --oneline -S "$term" -- customer 2>&1 | Sel ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git log -S: Hotel
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $hist = git log --all --oneline -S "$term" -- customer 2>&1 | Sel ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git log -S: Doctor
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $hist = git log --all --oneline -S "$term" -- customer 2>&1 | Sel ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git log -S: Medicine
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $hist = git log --all --oneline -S "$term" -- customer 2>&1 | Sel ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git log -S: Taxi
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $hist = git log --all --oneline -S "$term" -- customer 2>&1 | Sel ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git log -S: Food Grocery
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $hist = git log --all --oneline -S "$term" -- customer 2>&1 | Sel ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git log -S: Parcel Service
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $hist = git log --all --oneline -S "$term" -- customer 2>&1 | Sel ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git log -S: Rental Service
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $hist = git log --all --oneline -S "$term" -- customer 2>&1 | Sel ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git log -S: Cab Service
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $hist = git log --all --oneline -S "$term" -- customer 2>&1 | Sel ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 


### git log -S: serviceTypeFlag
git : fatal: not a git repository (or any of the parent directories): .git
At line:4 char:13
+     $hist = git log --all --oneline -S "$term" -- customer 2>&1 | Sel ...
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (fatal: not a gi...ectories): .git:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 

```

## Home / Section Related Files

```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\wallet_transaction_model.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
```

## Final Status

STATUS: CUSTOMER_SERVICE_MENU_CODE_GIT_AUDIT_FINISHED