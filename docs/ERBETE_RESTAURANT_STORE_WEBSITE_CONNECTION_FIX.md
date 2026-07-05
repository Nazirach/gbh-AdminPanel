# ERBETE RESTAURANT STORE WEBSITE CONNECTION FIX

Generated: 06/28/2026 05:06:59

## Tujuan

Audit koreksi ini dibuat karena scan sebelumnya membuat Restaurant App terbaca 0 akibat filter path vendor, dan Store/Website perlu dipastikan secara terpisah.

## RESTAURANT_APP

- Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor

- Files scanned: 235

- Hits found: 2428

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\add_advertisement_screen.dart
LINE: 75
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\add_advertisement_screen.dart
LINE: 79
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\add_advertisement_screen.dart
LINE: 83
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\add_advertisement_screen.dart
LINE: 87
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\add_advertisement_screen.dart
LINE: 91
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\advertisement_list_screen.dart
LINE: 232
TEXT: '${"Congratulations on creating your ad! It's now awaiting approval.To finalize the process & make payment arrangements, please contact our Admin.".tr}\n${Constant.adminEmail}',
NEXT: textAlign: TextAlign.center,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\advertisement_list_screen.dart
LINE: 284
TEXT: model.type == 'restaurant_promotion'
NEXT: ? ClipRRect(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\advertisement_list_screen.dart
LINE: 300
TEXT: if ((model.status == Constant.adsApproved || model.status != Constant.adsUpdated) && !model.endDate!.toDate().isBefore(DateTime.now()))
NEXT: model.isPaused == true

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\advertisement_list_screen.dart
LINE: 388
TEXT: if (model.type == 'restaurant_promotion')
NEXT: ClipRRect(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\advertisement_list_screen.dart
LINE: 416
TEXT: model.type == 'restaurant_promotion'
NEXT: ? SvgPicture.asset("assets/icons/ic_like.svg", colorFilter: ColorFilter.mode(isDark ? AppThemeData.grey400 : AppThemeData.grey600, BlendMode.srcIn))

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\view_advertisement_screen.dart
LINE: 86
TEXT: "Ad Status".tr,
NEXT: style: TextStyle(fontFamily: AppThemeData.medium, fontSize: 14, color: isDark ? AppThemeData.grey100 : AppThemeData.grey800),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\view_advertisement_screen.dart
LINE: 102
TEXT: label: 'Request Verify Status:'.tr,
NEXT: valueBadge: Constant.getAdsStatus(controller.advertisementModel.value).capitalizeString(),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\view_advertisement_screen.dart
LINE: 103
TEXT: valueBadge: Constant.getAdsStatus(controller.advertisementModel.value).capitalizeString(),
NEXT: isDarkMode: isDark,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\view_advertisement_screen.dart
LINE: 109
TEXT: label: 'Payment Status:'.tr,
NEXT: value: controller.advertisementModel.value.paymentStatus == true ? 'Paid'.tr : 'Unpaid'.tr,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\view_advertisement_screen.dart
LINE: 110
TEXT: value: controller.advertisementModel.value.paymentStatus == true ? 'Paid'.tr : 'Unpaid'.tr,
NEXT: textColor: controller.advertisementModel.value.paymentStatus == true ? AppThemeData.success300 : AppThemeData.danger200,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\view_advertisement_screen.dart
LINE: 111
TEXT: textColor: controller.advertisementModel.value.paymentStatus == true ? AppThemeData.success300 : AppThemeData.danger200,
NEXT: isDarkMode: isDark,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\view_advertisement_screen.dart
LINE: 114
TEXT: buildRow(label: 'Ad Type:'.tr, value: controller.advertisementModel.value.type == 'restaurant_promotion' ? 'Store Promotion'.tr : 'Video Promotion'.tr, isDarkMode: isDark),
NEXT: buildRow(label: 'Ad Created Date:'.tr, value: DateFormat('MMM d, yyyy').format(controller.advertisementModel.value.createdAt!.toDate()), isDarkMode: isDark),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\view_advertisement_screen.dart
LINE: 125
TEXT: controller.advertisementModel.value.status != Constant.adsCancel &&
NEXT: Constant.getAdsStatus(controller.advertisementModel.value) != Constant.adsExpire),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\view_advertisement_screen.dart
LINE: 126
TEXT: Constant.getAdsStatus(controller.advertisementModel.value) != Constant.adsExpire),
NEXT: child: buildRow(label: 'Ad Paused Note:'.tr, value: controller.advertisementModel.value.pauseNote ?? '', isDarkMode: isDark),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_advertisement_screen\view_advertisement_screen.dart
LINE: 130
TEXT: visible: controller.advertisementModel.value.status == Constant.adsCancel,
NEXT: child: buildRow(label: 'Ad Cancel Note:'.tr, value: controller.advertisementModel.value.canceledNote ?? '', isDarkMode: isDark),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 15
TEXT: import 'package:vendor/app/add_restaurant_screen/qr_code_screen.dart';
NEXT: import 'package:vendor/constant/constant.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 18
TEXT: import 'package:vendor/controller/add_restaurant_controller.dart';
NEXT: import 'package:vendor/models/vendor_category_model.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 20
TEXT: import 'package:vendor/models/zone_model.dart';
NEXT: import 'package:vendor/themes/app_them_data.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 29
TEXT: class AddRestaurantScreen extends StatelessWidget {
NEXT: const AddRestaurantScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 30
TEXT: const AddRestaurantScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 37
TEXT: init: AddRestaurantController(),
NEXT: builder: (controller) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 50
TEXT: Constant.selectedSection!.serviceTypeFlag == "ecommerce-service"
NEXT: ? SizedBox()

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 180
TEXT: TextFieldWidget(title: 'Store Name'.tr, controller: controller.restaurantNameController.value, hintText: 'Enter Store name'.tr),
NEXT: TextFieldWidget(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 183
TEXT: controller: controller.restaurantDescriptionController.value,
NEXT: maxLine: 5,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 326
TEXT: "Zone".tr,
NEXT: style: TextStyle(fontFamily: AppThemeData.semiBold, fontSize: 14, color: isDark ? AppThemeData.grey100 : AppThemeData.grey800),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 330
TEXT: DropdownButtonFormField<ZoneModel>(
NEXT: hint: Text(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 332
TEXT: 'Select zone'.tr,
NEXT: style: TextStyle(fontSize: 14, color: isDark ? AppThemeData.grey700 : AppThemeData.grey700, fontFamily: AppThemeData.regular),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 344
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 348
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 352
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 356
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 360
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 363
TEXT: initialValue: controller.selectedZone.value.id == null ? null : controller.selectedZone.value,
NEXT: onChanged: (value) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 365
TEXT: controller.selectedZone.value = value!;
NEXT: controller.update();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 369
TEXT: items: controller.zoneList.map((item) {
NEXT: return DropdownMenuItem<ZoneModel>(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 370
TEXT: return DropdownMenuItem<ZoneModel>(
NEXT: value: item,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 414
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 418
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 422
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 426
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 430
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 515
TEXT: border: Border.fromBorderSide(BorderSide.none), // remove default border
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 544
TEXT: Constant.selectedSection!.serviceTypeFlag == "ecommerce-service"
NEXT: ? SizedBox()

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 574
TEXT: "Delivery Settings".tr,
NEXT: style: TextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontFamily: AppThemeData.medium, fontSize: 18),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 580
TEXT: child: CupertinoSwitch(value: controller.isEnableDeliverySettings.value, onChanged: (value) {}),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 588
TEXT: enable: controller.isEnableDeliverySettings.value,
NEXT: textInputType: const TextInputType.numberWithOptions(signed: true, decimal: true),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 604
TEXT: enable: controller.isEnableDeliverySettings.value,
NEXT: textInputType: const TextInputType.numberWithOptions(signed: true, decimal: true),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 620
TEXT: enable: controller.isEnableDeliverySettings.value,
NEXT: textInputType: const TextInputType.numberWithOptions(signed: true, decimal: true),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaurant_screen.dart
LINE: 654
TEXT: Future buildBottomSheet(BuildContext context, AddRestaurantController controller) {
NEXT: return showModalBottomSheet(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\add_restaurant_screen\qr_code_screen.dart
LINE: 51
TEXT: version: QrVersions.auto,
NEXT: size: 200.0,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\login_screen.dart
LINE: 42
TEXT: "Log in to continue managing your Store’s orders and reservations seamlessly.".tr,
NEXT: style: TextStyle(color: isDark ? AppThemeData.grey400 : AppThemeData.grey500, fontSize: 16, fontFamily: AppThemeData.regular),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\otp_screen.dart
LINE: 19
TEXT: import 'package:vendor/utils/notification_service.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\otp_screen.dart
LINE: 89
TEXT: String fcmToken = await NotificationService.getToken();
NEXT: await FirebaseAuth.instance

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\otp_screen.dart
LINE: 99
TEXT: userModel.fcmToken = fcmToken;
NEXT: userModel.provider = 'phone';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\otp_screen.dart
LINE: 111
TEXT: userModel.fcmToken = await NotificationService.getToken();
NEXT: await FireStoreUtils.updateUser(userModel);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\otp_screen.dart
LINE: 163
TEXT: userModel.fcmToken = fcmToken;
NEXT: userModel.provider = 'phone';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\signup_screen.dart
LINE: 38
TEXT: "Join eMart Store today and start managing your orders effortlessly.".tr,
NEXT: style: TextStyle(color: isDark ? AppThemeData.grey400 : AppThemeData.grey500, fontSize: 16, fontFamily: AppThemeData.regular),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dart
LINE: 135
TEXT: onEmpty: Constant.showEmptyView(message: "No Conversion found".tr, isDark: isDark),
NEXT: // orderBy is compulsory to enable pagination

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dart
LINE: 137
TEXT: query: FireStoreUtils.fireStore.collection(CollectionName.chatAdmin).where("restaurantId", isEqualTo: FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true),
NEXT: //Change types customerId

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart
LINE: 74
TEXT: onEmpty: Constant.showEmptyView(message: "No conversion found".tr, isDark: isDark),
NEXT: query: FireStoreUtils.fireStore.collection(CollectionName.chat).doc(controller.orderId.value).collection("thread").orderBy('createdAt', descending: true),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart
LINE: 75
TEXT: query: FireStoreUtils.fireStore.collection(CollectionName.chat).doc(controller.orderId.value).collection("thread").orderBy('createdAt', descending: true),
NEXT: isLive: true,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 19
TEXT: class RestaurantInboxScreen extends StatelessWidget {
NEXT: const RestaurantInboxScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 20
TEXT: const RestaurantInboxScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 32
TEXT: "Restaurant Inbox".tr,
NEXT: textAlign: TextAlign.start,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 39
TEXT: .collection(CollectionName.chat)
NEXT: .where("sender_receiver_id", arrayContains: FireStoreUtils.getCurrentUid())

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 60
TEXT: UserModel? restaurant = await FireStoreUtils.getUserProfile(FireStoreUtils.getCurrentUid());
NEXT: UserModel? customer = snapshot.data;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 67
TEXT: "senderName": restaurant?.fullName(),
NEXT: "senderId": restaurant?.id,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 68
TEXT: "senderId": restaurant?.id,
NEXT: "senderProfileUrl": restaurant?.profilePictureURL,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 69
TEXT: "senderProfileUrl": restaurant?.profilePictureURL,
NEXT: "receivedName": customer?.fullName(),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 74
TEXT: "token": restaurant?.fcmToken,
NEXT: "chatType": Constant.userRoleVendor,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 136
TEXT: onEmpty: Constant.showEmptyView(message: "No conversion found".tr, isDark: isDark),
NEXT: // orderBy is compulsory to enable pagination

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 148
TEXT: // class RestaurantInboxScreen extends StatelessWidget {
NEXT: //   const RestaurantInboxScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 149
TEXT: //   const RestaurantInboxScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 177
TEXT: //               UserModel? restaurantUser = await FireStoreUtils.getUserProfile(inboxModel.restaurantId.toString());
NEXT: //               VendorModel? vendorModel = await FireStoreUtils.getVendorById(restaurantUser!.vendorID.toString());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 178
TEXT: //               VendorModel? vendorModel = await FireStoreUtils.getVendorById(restaurantUser!.vendorID.toString());
NEXT: //               ShowToastDialog.closeLoader();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 185
TEXT: //                   "restaurantName": vendorModel!.title,
NEXT: //                   "orderId": inboxModel.orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 187
TEXT: //                   "restaurantId": restaurantUser.id,
NEXT: //                   "customerId": customer.id,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 190
TEXT: //                   "restaurantProfileImage": vendorModel.photo,
NEXT: //                   "token": customer.fcmToken,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 191
TEXT: //                   "token": customer.fcmToken,
NEXT: //                   "chatType": inboxModel.chatType,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 249
TEXT: //         onEmpty: Constant.showEmptyView(message: "No Conversion found".tr, isDark: isDark),
NEXT: //         // orderBy is compulsory to enable pagination

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_screen.dart
LINE: 251
TEXT: //         query: FireStoreUtils.fireStore.collection('chat_store').where("restaurantId", isEqualTo: FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true),
NEXT: //         //Change types customerId

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dash_board_screens\app_not_access_screen.dart
LINE: 29
TEXT: child: Padding(padding: const EdgeInsets.all(20), child: SvgPicture.asset("assets/icons/ic_payment_card.svg")),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 5
TEXT: import 'package:vendor/app/add_restaurant_screen/add_restaurant_screen.dart';
NEXT: import 'package:vendor/app/dine_in_screen/dine_in_create_screen.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 9
TEXT: import 'package:vendor/constant/send_notification.dart';
NEXT: import 'package:vendor/constant/show_toast_dialog.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 20
TEXT: class DineInOrderScreen extends StatelessWidget {
NEXT: const DineInOrderScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 21
TEXT: const DineInOrderScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 103
TEXT: title: "View Status".tr,
NEXT: width: 55,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 136
TEXT: "Get started by adding your Store details to manage your menu, orders, and reservations.".tr,
NEXT: textAlign: TextAlign.center,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 148
TEXT: Get.to(const AddRestaurantScreen());
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 154
TEXT: : (controller.vendorModel.value.restaurantCost == null || controller.vendorModel.value.restaurantCost!.isEmpty)
NEXT: ? Padding(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 272
TEXT: orderModel.status.toString(),
NEXT: textAlign: TextAlign.right,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 275
TEXT: color: Constant.statusColor(status: orderModel.status.toString()),
NEXT: fontFamily: AppThemeData.semiBold,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 395
TEXT: isNew == false || (orderModel.status == Constant.orderAccepted || orderModel.status == Constant.orderRejected)
NEXT: ? const SizedBox()

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 407
TEXT: orderModel.status = Constant.orderRejected;
NEXT: await FireStoreUtils.setBookedOrder(orderModel);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 409
TEXT: SendNotification.sendFcmMessage(Constant.dineInCanceled, orderModel.author!.fcmToken.toString(), {});
NEXT: controller.getDineBooking();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 424
TEXT: orderModel.status = Constant.orderAccepted;
NEXT: await FireStoreUtils.setBookedOrder(orderModel);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 426
TEXT: SendNotification.sendFcmMessage(Constant.dineInAccepted, orderModel.author!.fcmToken.toString(), {});
NEXT: controller.getDineBooking();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 9
TEXT: import 'package:vendor/controller/add_driver_controller.dart';
NEXT: import 'package:vendor/themes/app_them_data.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 14
TEXT: class AddDriverScreen extends StatefulWidget {
NEXT: const AddDriverScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 15
TEXT: const AddDriverScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 18
TEXT: State<AddDriverScreen> createState() => _AddDriverScreenState();
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 21
TEXT: class _AddDriverScreenState extends State<AddDriverScreen> {
NEXT: @override

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 27
TEXT: init: AddDriverController(),
NEXT: builder: (controller) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 40
TEXT: controller.driverModel.value.id == null
NEXT: ? "Add Delivery Man".tr

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 106
TEXT: readOnly: (controller.driverModel.value.id !=
NEXT: null &&

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 108
TEXT: controller.driverModel.value.id != ''),
NEXT: title: 'Email Address'.tr,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 206
TEXT: // ── Sections (display only) ──────────────
NEXT: if (controller.vendorSections.isNotEmpty) ...[

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 207
TEXT: if (controller.vendorSections.isNotEmpty) ...[
NEXT: const SizedBox(height: 10),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 210
TEXT: "Sections".tr,
NEXT: style: TextStyle(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 220
TEXT: ...controller.vendorSections.map((section) {
NEXT: return Padding(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 231
TEXT: "${section.name ?? section.id ?? ''} (${controller.serviceFlagLabel(section.serviceTypeFlag)})",
NEXT: style: TextStyle(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 252
TEXT: controller.driverModel.value.id == null,
NEXT: child: Column(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 414
TEXT: controller.driverModel.value.id == null) {
NEXT: ShowToastDialog.showToast(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 422
TEXT: controller.driverModel.value.id == null) {
NEXT: ShowToastDialog.showToast(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\add_driver_screen.dart
LINE: 433
TEXT: controller.driverModel.value.id == null) {
NEXT: ShowToastDialog.showToast(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 6
TEXT: import 'package:vendor/app/add_restaurant_screen/add_restaurant_screen.dart';
NEXT: import 'package:vendor/app/driver_screens/add_driver_screen.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 7
TEXT: import 'package:vendor/app/driver_screens/add_driver_screen.dart';
NEXT: import 'package:vendor/app/verification_screen/verification_screen.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 10
TEXT: import 'package:vendor/controller/driver_list_controller.dart';
NEXT: import 'package:vendor/themes/app_them_data.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 16
TEXT: class DriverListScreen extends StatelessWidget {
NEXT: const DriverListScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 17
TEXT: const DriverListScreen({super.key});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 24
TEXT: init: DriverListController(),
NEXT: builder: (controller) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 41
TEXT: Get.to(const AddDriverScreen())?.then((value) {
NEXT: if (value == true) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 43
TEXT: controller.getAllDriverList();
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 92
TEXT: title: "View Status".tr,
NEXT: width: 55,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 137
TEXT: Get.to(const AddRestaurantScreen());
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 143
TEXT: : controller.driverUserList.isEmpty
NEXT: ? Padding(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 170
TEXT: Get.to(const AddDriverScreen())?.then((value) {
NEXT: if (value == true) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 172
TEXT: controller.getAllDriverList();
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 183
TEXT: itemCount: controller.driverUserList.length,
NEXT: shrinkWrap: true,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 188
TEXT: Get.to(const AddDriverScreen(), arguments: {"driverModel": controller.driverUserList[index]})!.then((value) {
NEXT: if (value == true) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 190
TEXT: controller.getAllDriverList();
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 205
TEXT: controller.driverUserList[index].profilePictureURL == null || controller.driverUserList[index].profilePictureURL == ''
NEXT: ? ClipRRect(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 213
TEXT: imageUrl: controller.driverUserList[index].profilePictureURL.toString(),
NEXT: fit: BoxFit.cover,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 228
TEXT: "${controller.driverUserList[index].firstName ?? ''} ${controller.driverUserList[index].lastName ?? ''}",
NEXT: style: TextStyle(fontSize: 18, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 232
TEXT: "${controller.driverUserList[index].countryCode} ${controller.driverUserList[index].phoneNumber}",
NEXT: maxLines: 1,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 237
TEXT: controller.driverUserList[index].email.toString(),
NEXT: maxLines: 1,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 245
TEXT: GetBuilder<DriverListController>(
NEXT: builder: (controller) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 250
TEXT: value: controller.driverUserList[index].active ?? false,
NEXT: onChanged: (value) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 252
TEXT: controller.driverUserList[index].active = value;
NEXT: controller.updateDriver(controller.driverUserList[index]);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.dart
LINE: 253
TEXT: controller.updateDriver(controller.driverUserList[index]);
NEXT: controller.update();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.dart
LINE: 4
TEXT: import 'package:vendor/app/add_restaurant_screen/add_restaurant_screen.dart';
NEXT: import 'package:vendor/app/employee_role_screens/add_edit_role_screen.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.dart
LINE: 61
TEXT: "Get started by adding your store details to manage your menu, orders.".tr,
NEXT: textAlign: TextAlign.center,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.dart
LINE: 73
TEXT: Get.to(const AddRestaurantScreen())?.then((value) {
NEXT: controller.update();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.dart
LINE: 122
TEXT: Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: SvgPicture.asset("assets/icons/ic_edit_coupon.svg", width: 22, height: 22)),
NEXT: IconButton(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.dart
LINE: 145
TEXT: ShowToastDialog.showToast("Please add your restaurant details before creating a employee role.".tr);
NEXT: } else {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_screens\add_employee_screen.dart
LINE: 101
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_screens\add_employee_screen.dart
LINE: 105
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_screens\add_employee_screen.dart
LINE: 109
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_screens\add_employee_screen.dart
LINE: 113
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_screens\add_employee_screen.dart
LINE: 117
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_screens\employee_list_screen.dart
LINE: 5
TEXT: import 'package:vendor/app/add_restaurant_screen/add_restaurant_screen.dart';
NEXT: import 'package:vendor/app/employee_screens/add_employee_screen.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_screens\employee_list_screen.dart
LINE: 42
TEXT: ShowToastDialog.showToast("Please add your restaurant details before creating a employee user.".tr);
NEXT: } else {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_screens\employee_list_screen.dart
LINE: 92
TEXT: "Add Your First Restaurant".tr,
NEXT: style: TextStyle(color: isDark ? AppThemeData.grey100 : AppThemeData.grey800, fontSize: 22, fontFamily: AppThemeData.semiBold),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_screens\employee_list_screen.dart
LINE: 97
TEXT: "Get started by adding your restaurant details to manage your employee men.".tr,
NEXT: textAlign: TextAlign.center,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\employee_screens\employee_list_screen.dart
LINE: 109
TEXT: Get.to(const AddRestaurantScreen())?.then((value) {
NEXT: controller.update();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 26
TEXT: final bool? isNavigateViaNotification;
NEXT: HelpSupportScreen({super.key, this.isNavigateViaNotification});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 27
TEXT: HelpSupportScreen({super.key, this.isNavigateViaNotification});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 35
TEXT: if (isNavigateViaNotification == true) {
NEXT: await Preferences.setBoolean(Preferences.isClickOnNotification, false);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 36
TEXT: await Preferences.setBoolean(Preferences.isClickOnNotification, false);
NEXT: Get.offAll(DashBoardScreen());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 55
TEXT: if (isNavigateViaNotification == true) {
NEXT: await Preferences.setBoolean(Preferences.isClickOnNotification, false);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 56
TEXT: await Preferences.setBoolean(Preferences.isClickOnNotification, false);
NEXT: Get.offAll(DashBoardScreen());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 86
TEXT: query: FireStoreUtils.fireStore.collection(CollectionName.chat).doc(FireStoreUtils.getCurrentUid()).collection('thread').orderBy('createdAt', descending: true),
NEXT: isLive: true,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 90
TEXT: onEmpty: Constant.showEmptyView(message: "No conversion found".tr, isDark: isDark),
NEXT: viewType: ViewType.list,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 118
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey100, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 122
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 126
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey100, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 130
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey100, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\help_support_screen\help_support_screen.dart
LINE: 134
TEXT: borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey100, width: 1),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 11
TEXT: import 'package:vendor/app/add_restaurant_screen/add_restaurant_screen.dart';
NEXT: import 'package:vendor/app/chat_screens/chat_screen.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 13
TEXT: import 'package:vendor/app/chat_screens/restaurant_inbox_screen.dart';
NEXT: import 'package:vendor/app/driver_screens/add_driver_screen.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 14
TEXT: import 'package:vendor/app/driver_screens/add_driver_screen.dart';
NEXT: import 'package:vendor/app/product_rating_view_screen/product_rating_view_screen.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 19
TEXT: import 'package:vendor/constant/send_notification.dart';
NEXT: import 'package:vendor/constant/show_toast_dialog.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 26
TEXT: import 'package:vendor/models/wallet_transaction_model.dart';
NEXT: import 'package:vendor/service/audio_player_service.dart';

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 120
TEXT: Get.to(const RestaurantInboxScreen());
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 157
TEXT: title: "View Status".tr,
NEXT: width: 55,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 190
TEXT: "Get started by adding your Store/Outlet details to manage your menu, orders, and reservations across the platform.".tr,
NEXT: textAlign: TextAlign.center,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 202
TEXT: Get.to(const AddRestaurantScreen())?.then((v) {
NEXT: controller.getUserProfile();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 216
TEXT: ? Constant.showEmptyView(message: "New Orders Not found".tr, isDark: isDark)
NEXT: : ListView.builder(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 226
TEXT: ? Constant.showEmptyView(message: "Accepted Orders Not found".tr, isDark: isDark)
NEXT: : ListView.builder(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 236
TEXT: ? Constant.showEmptyView(message: "Completed Orders Not found".tr, isDark: isDark)
NEXT: : ListView.builder(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 246
TEXT: ? Constant.showEmptyView(message: "Rejected Orders Not found".tr, isDark: isDark)
NEXT: : ListView.builder(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 256
TEXT: ? Constant.showEmptyView(message: "Cancelled Orders Not found".tr, isDark: isDark)
NEXT: : ListView.builder(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 267
TEXT: : Constant.showEmptyView(message: "You don’t have permission to view orders.".tr, isDark: isDark),
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 279
TEXT: double couponAmount = 0.0;
NEXT: double productTaxAmount = 0.0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 280
TEXT: double productTaxAmount = 0.0;
NEXT: double orderTaxAmount = 0.0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 281
TEXT: double orderTaxAmount = 0.0;
NEXT: double packagingTaxAmount = 0.0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 282
TEXT: double packagingTaxAmount = 0.0;
NEXT: double totalTaxAmount = 0.0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 283
TEXT: double totalTaxAmount = 0.0;
NEXT: double packagingCharge = 0.0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 299
TEXT: couponAmount = double.parse(orderModel.discount.toString());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 305
TEXT: final double totalDiscount = couponAmount + specialDiscountAmount;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 313
TEXT: /// ---------------- PRODUCT TAX (AFTER DISCOUNT) ----------------
NEXT: if (orderModel.taxScope == "product") {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 314
TEXT: if (orderModel.taxScope == "product") {
NEXT: for (var element in orderModel.products!) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 325
TEXT: for (var taxElement in element.taxSetting!) {
NEXT: if (taxElement.type == "fix") {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 326
TEXT: if (taxElement.type == "fix") {
NEXT: productTaxAmount += Constant.calculateTax(amount: discountedItemAmount.toString(), taxModel: taxElement) * qty;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 327
TEXT: productTaxAmount += Constant.calculateTax(amount: discountedItemAmount.toString(), taxModel: taxElement) * qty;
NEXT: } else {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 329
TEXT: productTaxAmount += Constant.calculateTax(amount: discountedItemAmount.toString(), taxModel: taxElement);
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 335
TEXT: /// ---------------- ORDER LEVEL TAX ----------------
NEXT: if (orderModel.taxScope == "order") {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 336
TEXT: if (orderModel.taxScope == "order") {
NEXT: for (var taxElement in orderModel.taxSetting ?? []) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 337
TEXT: for (var taxElement in orderModel.taxSetting ?? []) {
NEXT: orderTaxAmount += Constant.calculateTax(amount: (subTotal - totalDiscount).toString(), taxModel: taxElement);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 338
TEXT: orderTaxAmount += Constant.calculateTax(amount: (subTotal - totalDiscount).toString(), taxModel: taxElement);
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 344
TEXT: /// ---------------- PACKAGING TAX ----------------
NEXT: if (packagingCharge > 0) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 346
TEXT: for (var taxElement in orderModel.packagingTax ?? []) {
NEXT: packagingTaxAmount += Constant.calculateTax(amount: packagingCharge.toString(), taxModel: taxElement);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 347
TEXT: packagingTaxAmount += Constant.calculateTax(amount: packagingCharge.toString(), taxModel: taxElement);
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 351
TEXT: /// ---------------- TOTAL TAX ----------------
NEXT: totalTaxAmount = productTaxAmount + orderTaxAmount + packagingTaxAmount;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 352
TEXT: totalTaxAmount = productTaxAmount + orderTaxAmount + packagingTaxAmount;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 355
TEXT: totalAmount = (subTotal - totalDiscount) + totalTaxAmount + packagingCharge;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 648
TEXT: orderModel.status = Constant.orderRejected;
NEXT: if (orderModel.cashback?.id != null && orderModel.cashback?.cashbackValue != null) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 654
TEXT: SendNotification.sendFcmMessage(Constant.restaurantRejected, orderModel.author!.fcmToken.toString(), {});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 656
TEXT: if (orderModel.paymentMethod!.toLowerCase() != 'cod') {
NEXT: double finalAmount =

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 658
TEXT: (subTotal + double.parse(orderModel.discount.toString()) + specialDiscountAmount + double.parse(totalTaxAmount.toString())) +
NEXT: double.parse(orderModel.deliveryCharge.toString()) +

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 662
TEXT: WalletTransactionModel historyModel = WalletTransactionModel(
NEXT: amount: finalAmount,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 669
TEXT: paymentMethod: "Wallet",
NEXT: paymentStatus: "success",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 670
TEXT: paymentStatus: "success",
NEXT: note: "Order Refund success",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 675
TEXT: await FireStoreUtils.fireStore.collection(CollectionName.wallet).doc(historyModel.id).set(historyModel.toJson());
NEXT: await FireStoreUtils.updateUserWallet(amount: finalAmount.toString(), userId: orderModel.author!.id.toString());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 676
TEXT: await FireStoreUtils.updateUserWallet(amount: finalAmount.toString(), userId: orderModel.author!.id.toString());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 695
TEXT: if (controller.vendermodel.value.subscriptionTotalOrders == '0' || controller.vendermodel.value.subscriptionTotalOrders == null) {
NEXT: ShowToastDialog.closeLoader();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 698
TEXT: "You have reached the maximum order capacity for your current plan. Upgrade your subscription to continue accepting orders seamlessly!.".tr,
NEXT: );

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 717
TEXT: if (Constant.selectedSection!.isProductDetails == true && Constant.selectedSection!.name == "Restaurants") {
NEXT: showDialog(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 727
TEXT: if (controller.vendermodel.value.subscriptionTotalOrders != '-1' && controller.vendermodel.value.subscriptionTotalOrders != null) {
NEXT: controller.vendermodel.value.subscriptionTotalOrders = (int.parse(controller.vendermodel.value.subscriptionTotalOrders!) - 1).toString();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 728
TEXT: controller.vendermodel.value.subscriptionTotalOrders = (int.parse(controller.vendermodel.value.subscriptionTotalOrders!) - 1).toString();
NEXT: await FireStoreUtils.updateVendor(controller.vendermodel.value);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 734
TEXT: await controller.getAllDriverList();
NEXT: ShowToastDialog.closeLoader();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 746
TEXT: orderModel.status = Constant.orderAccepted;
NEXT: await AudioPlayerService.playSound(false);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 749
TEXT: await FireStoreUtils.restaurantVendorWalletSet(orderModel);
NEXT: SendNotification.sendFcmMessage(Constant.restaurantAccepted, orderModel.author!.fcmToken.toString(), {});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 750
TEXT: SendNotification.sendFcmMessage(Constant.restaurantAccepted, orderModel.author!.fcmToken.toString(), {});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 774
TEXT: //   controller.driverUserList.clear();
NEXT: //   controller.selectDriverUser.value = UserModel();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 775
TEXT: //   controller.selectDriverUser.value = UserModel();
NEXT: //

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 792
TEXT: if (Constant.selectedSection!.serviceTypeFlag == 'ecommerce-service') {
NEXT: await AudioPlayerService.playSound(false);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 802
TEXT: if (controller.vendermodel.value.subscriptionTotalOrders == '0' || controller.vendermodel.value.subscriptionTotalOrders == null) {
NEXT: ShowToastDialog.closeLoader();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 805
TEXT: "You have reached the maximum order capacity for your current plan. Upgrade your subscription to continue accepting orders seamlessly!.".tr,
NEXT: );

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 824
TEXT: if (Constant.selectedSection!.isProductDetails == true && Constant.selectedSection!.name == "Restaurants" && orderModel.takeAway == false) {
NEXT: showDialog(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 834
TEXT: if (controller.vendermodel.value.subscriptionTotalOrders != '-1' && controller.vendermodel.value.subscriptionTotalOrders != null) {
NEXT: controller.vendermodel.value.subscriptionTotalOrders = (int.parse(controller.vendermodel.value.subscriptionTotalOrders!) - 1).toString();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 835
TEXT: controller.vendermodel.value.subscriptionTotalOrders = (int.parse(controller.vendermodel.value.subscriptionTotalOrders!) - 1).toString();
NEXT: await FireStoreUtils.updateVendor(controller.vendermodel.value);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 841
TEXT: await controller.getAllDriverList();
NEXT: ShowToastDialog.closeLoader();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 853
TEXT: orderModel.status = Constant.orderAccepted;
NEXT: await AudioPlayerService.playSound(false);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 856
TEXT: await FireStoreUtils.restaurantVendorWalletSet(orderModel);
NEXT: SendNotification.sendFcmMessage(Constant.restaurantAccepted, orderModel.author!.fcmToken.toString(), {});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 857
TEXT: SendNotification.sendFcmMessage(Constant.restaurantAccepted, orderModel.author!.fcmToken.toString(), {});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 883
TEXT: double couponAmount = 0.0;
NEXT: double productTaxAmount = 0.0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 884
TEXT: double productTaxAmount = 0.0;
NEXT: double orderTaxAmount = 0.0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 885
TEXT: double orderTaxAmount = 0.0;
NEXT: double packagingTaxAmount = 0.0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 886
TEXT: double packagingTaxAmount = 0.0;
NEXT: double totalTaxAmount = 0.0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 887
TEXT: double totalTaxAmount = 0.0;
NEXT: double packagingCharge = 0.0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 903
TEXT: couponAmount = double.parse(orderModel.discount.toString());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 909
TEXT: final double totalDiscount = couponAmount + specialDiscountAmount;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 917
TEXT: /// ---------------- PRODUCT TAX (AFTER DISCOUNT) ----------------
NEXT: if (orderModel.taxScope == "product") {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 918
TEXT: if (orderModel.taxScope == "product") {
NEXT: for (var element in orderModel.products!) {

## STORE_PANEL

- Path: C:\deploy\storepanel

## Kesimpulan Sementara

- Jika Restaurant App sekarang memiliki hits, maka hasil 0 sebelumnya adalah efek filter scan, bukan bukti app tidak tersambung.
- Jika Store/Website tidak memiliki hits langsung, kemungkinan panel tersebut lebih banyak memakai Laravel API/MySQL atau struktur file berbeda.
- Belum patch.