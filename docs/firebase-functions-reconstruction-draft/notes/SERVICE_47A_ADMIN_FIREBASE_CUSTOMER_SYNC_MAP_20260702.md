# SERVICE 47A ADMIN WEB FIREBASE CUSTOMER SYNC MAP

Generated: 07/02/2026 11:14:37
Mode: READ ONLY.

## Paths
Admin Web: C:\deploy\adminpanel
Customer Git: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7
Firebase project expected: erbete-putra

## 1. Admin Web Source Scan
TEXT_START
TEXT_END

## 2. Customer App Source Scan
TEXT_START

  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.
dart:28:  static const String tax = "tax";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.
dart:29:  static const String vendorAttributes = "vendor_attributes";
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.
dart:30:  static const String vendorCategories = "vendor_categories";
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.
dart:31:  static const String vendorProducts = "vendor_products";
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.
dart:32:  static const String vendors = "vendors";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.
dart:33:  static const String wallet = "wallet";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.
dart:34:  static const String withdrawMethod = "withdraw_method";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.
dart:35:  static const String advertisements = "advertisements";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.
dart:36:  static const String cashback = "cashback";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.
dart:37:  static const String cashbackRedeem = "cashback_redeem";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.
dart:38:  static const String currency = 'currencies';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:38
:import 'package:http/http.dart' as http;
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:39:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:40
:RxList<CartProductModel> cartItem = <CartProductModel>[].obs;
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:41:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:42
:class Constant {
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:43: 
 static const userPlaceHolder = "assets/images/user_placeholder.png";
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:44:
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:45: 
 static String senderId = '';
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:46: 
 static String jsonNotificationFileURL = '';
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:148:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:14
9:  static CurrencyModel? currencyModel;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:15
0:  static List<VendorModel>? restaurantList = [];
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:151:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:15
2:  static String walletTopup = "wallet_topup";
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:15
3:  static String newVendorSignup = "new_vendor_signup";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:15
4:  static String payoutRequestStatus = "payout_request_status";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:15
5:  static String payoutRequest = "payout_request";
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:156:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:15
7:  static String scheduleOrder = "schedule_order";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:15
8:  static String dineInPlaced = "dinein_placed";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:15
9:  static String dineInCanceled = "dinein_canceled";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:18
6:  }
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:187:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:18
8:  static bool checkZoneCheck(double latitude, double longLatitude) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:18
9:    bool isZoneAvailable = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:19
0:    for (var element in Constant.zoneList) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:19
1:      if (Constant.isPointInPolygon(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:19
2:        LatLng(latitude, longLatitude),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:19
3:        element.area!,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:19
4:      )) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:19
5:        isZoneAvailable = true;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:19
6:        break;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:19
7:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:19
8:        isZoneAvailable = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:20
2:  }
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:203:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:20
4:  static String? getZoneId(double latitude, double longLatitude) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:20
5:    String? zoneId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:20
6:    for (var element in Constant.zoneList) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:20
7:      if (Constant.isPointInPolygon(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:20
8:        LatLng(latitude, longLatitude),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:20
9:        element.area!,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:21
0:      )) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:21
1:        zoneId = element.id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:21
2:        break;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:21
3:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:21
4:    }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:21
5:    return zoneId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:21
6:  }
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:217:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:21
8:  static String getReferralCode() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:21
9:    var rng = Random();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:22
0:    return (rng.nextInt(900000) + 100000).toString(); // 6 digit
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:22
1:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:25
0:  }
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:251:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:25
2:  static bool isExpire(VendorModel venderModel) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:25
3:    bool isPlanExpire = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:25
4:    if (venderModel.subscriptionPlan?.id != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:25
5:      if (venderModel.subscriptionExpiryDate == null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:25
6:        if (venderModel.subscriptionPlan?.expiryDay == '-1') {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:25
7:          isPlanExpire = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:25
8:        } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:32
8:  }
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:329:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:33
0:  static String productCommissionPrice(VendorModel vendorModel, String price) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:33
1:    String commission = "0";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:33
2:    if (sectionConstantModel!.adminCommision!.isEnabled == true) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:33
3:      if (vendorModel.adminCommission == null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:33
4:        if (sectionConstantModel!.adminCommision!.commissionType!
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:33
5:                    .toLowerCase() ==
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:33
6:                "Percent".toLowerCase() ||
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:33
7:            sectionConstantModel!.adminCommision!.commissionType
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:33
8:                    ?.toLowerCase() ==
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:33
9:                "Percentage".toLowerCase()) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:35
6:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:35
7:      } else {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:35
8:        if (vendorModel.adminCommission!.commissionType!.toLowerCase() ==
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:35
9:                "Percent".toLowerCase() ||
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:36
0:            vendorModel.adminCommission!.commissionType?.toLowerCase() ==
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:36
1:                "Percentage".toLowerCase()) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:36
2:          commission =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:36
3:              (double.parse(price) +
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:36
4:                      (double.parse(price) *
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:36
5:                          double.parse(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:36
6:                            vendorModel.adminCommission!.amount.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:36
7:                          ) /
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:36
8:                          100))
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:36
9:                  .toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:37
0:        } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:37
1:          commission =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:37
2:              (double.parse(price) +
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:37
3:                      double.parse(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:37
4:                        vendorModel.adminCommission!.amount.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:37
5:                      ))
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:37
6:                  .toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:37
7:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:37
8:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:37
9:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:38
0:      commission = price;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:41
5:  }
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:416:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:41
7:  static bool statusCheckOpenORClose({required VendorModel vendorModel}) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:41
8:    final now = DateTime.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:41
9:    var day = DateFormat('EEEE', 'en_US').format(now);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:42
0:    var date = DateFormat('dd-MM-yyyy').format(now);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:42
1:    for (var element in vendorModel.workingHours ?? []) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:42
2:      if (day == element.day.toString()) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:42
3:        if (element.timeslot!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:42
4:          for (var element in element.timeslot!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:42
5:            var start = DateFormat(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:42
6:              "dd-MM-yyyy HH:mm",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:42
7:            ).parse("$date ${element.from}");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:68
8:      final dynamic decoded = jsonDecode(user);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:68
9:      if (decoded is Map<String, dynamic>) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:69
0:        return LanguageModel.fromJson(decoded);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:69
1:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:69
2:      if (decoded is Map) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:69
3:        return LanguageModel.fromJson(Map<String, dynamic>.from(decoded));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:69
4:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:69
5:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:69
6:      print('STEP12AZ_LANGUAGE_PREFERENCE_FORMATEXCEPTION_FIX: $e');
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:69
7:    }
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:698:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:69
9:    return fallbackLanguage();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:70
9:    for (int i = 0; i < polygon.length; i++) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:71
0:      int next = (i + 1) % polygon.length;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:71
1:      if (polygon[i].latitude <= point.latitude &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:71
2:              polygon[next].latitude > point.latitude ||
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:71
3:          polygon[i].latitude > point.latitude &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:71
4:              polygon[next].latitude <= point.latitude) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:71
5:        double edgeLong = polygon[next].longitude - polygon[i].longitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:71
6:        double edgeLat = polygon[next].latitude - polygon[i].latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:71
7:        double interpol = (point.latitude - polygon[i].latitude) / edgeLat;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:71
8:        if (point.longitude < polygon[i].longitude + interpol * edgeLong) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:71
9:          crossings++;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:72
0:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:72
1:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:72
2:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:72
3:    return (crossings % 2 != 0);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:72
4:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:77
4:  }
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:775:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:77
6:  static Uri createCoordinatesUrl(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:77
7:    double latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:77
8:    double longitude, [
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:77
9:    String? label,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:78
0:  ]) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:78
1:    Uri uri;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:78
2:    if (kIsWeb) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:78
3:      uri = Uri.https('www.google.com', '/maps/search/', {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:78
4:        'api': '1',
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:78
5:        'query': '$latitude,$longitude',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:78
6:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:78
7:    } else if (Platform.isAndroid) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:78
8:      var query = '$latitude,$longitude';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:78
9:      if (label != null) query += '($label)';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:79
0:      uri = Uri(scheme: 'geo', host: '0,0', queryParameters: {'q': query});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:79
1:    } else if (Platform.isIOS) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:79
2:      var params = {'ll': '$latitude,$longitude'};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:79
3:      if (label != null) params['q'] = label;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:79
4:      uri = Uri.https('maps.apple.com', '/', params);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:79
5:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:79
6:      uri = Uri.https('www.google.com', '/maps/search/', {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:79
7:        'api': '1',
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:79
8:        'query': '$latitude,$longitude',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:79
9:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:80
0:    }
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:801:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:80
2:    return uri;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:80
3:  }
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:804:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:98
2:      newString = newString.replaceAll(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:98
3:        "{date}",
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:98
4:        DateFormat('yyyy-MM-dd').format(orderModel.createdAt!.toDate()),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:98
5:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:98
6:      newString = newString.replaceAll(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:98
7:        "{address}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:98
8:        orderModel.address?.getFullAddress() ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:98
9:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:99
0:      newString = newString.replaceAll(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:120:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:121:      // Extra Charges Flow
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:122:      onDemandOrderModel.value?.createdAt = Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:123:      onDemandOrderModel.value?.extraPaymentStatus = true;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:124:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:125:      if (selectedPaymentMethod.value == PaymentGateway.wallet.name) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:126:        WalletTransactionModel transactionModel = WalletTransactionModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:127:          id: Constant.getUuid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:128:          amount: double.parse(totalAmount.value.toString()),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:194:    isLoading.value = true;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:195:    await FireStoreUtils.getPaymentSettingsData().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:196:      stripeModel.value = 
StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:197:      payPalModel.value = 
PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:198:      payStackModel.value = 
PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:199:      mercadoPagoModel.value = 
MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:200:      flutterWaveModel.value = 
FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:201:      paytmModel.value = 
PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:202:      payFastModel.value = 
PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:203:      razorPayModel.value = 
RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:204:      midTransModel.value = 
MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:205:      orangeMoneyModel.value = 
OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:206:      xenditModel.value = 
Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:207:      walletSettingModel.value = 
WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:208:      cashOnDeliverySettingModel.value = 
CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:209:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:210:      if (walletSettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:211:        selectedPaymentMethod.value = PaymentGateway.wallet.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:212:      } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:213:        selectedPaymentMethod.value = PaymentGateway.cod.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:214:      } else if (stripeModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:233:        selectedPaymentMethod.value = PaymentGateway.xendit.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:234:      }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:235:      Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:236:      Stripe.merchantIdentifier = 'GHALBIT MARITRONIX Customer';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:237:      Stripe.instance.applySettings();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:238:      setRef();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:239:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:240:      razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:241:      razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:283:      var lo1 = jsonEncode(e);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:284:      var lo2 = jsonDecode(lo1);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:285:      StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:286:      ShowToastDialog.showToast(lom.error.message);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:287:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:288:      ShowToastDialog.showToast(e.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:289:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:290:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:291:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:599:      ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:600:    }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:601:    return GetPaymentTxtTokenModel.fromJson(data);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:602:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:603:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:604:  ///RazorPay payment function
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:605:  final Razorpay razorPay = Razorpay();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:606:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:607:  void openCheckout({required amount, required orderId}) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:935:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:936:      if (response.statusCode == 200 || response.statusCode == 201) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:937:        XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:938:        return model;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:939:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:940:        return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:941:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:942:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\0n_demand_pay
ment_controller.dart:943:      return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\advertisement
_list_controller.dart:20:  Future<void> getAdvertisementList() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\advertisement
_list_controller.dart:21:    advertisementList.clear();
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\advertisement
_list_controller.dart:22:    List<VendorModel> allNearestRestaurant = <VendorModel>[];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\advertisement
_list_controller.dart:23:    FireStoreUtils.getAllNearestRestaurant().listen((event) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\advertisement
_list_controller.dart:24:      allNearestRestaurant.addAll(event);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\advertisement
_list_controller.dart:25:      await FireStoreUtils.getAllAdvertisement().then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\advertisement
_list_controller.dart:26:        List<AdvertisementModel> adsList = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\advertisement
_list_controller.dart:27:        advertisementList.addAll(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\advertisement
_list_controller.dart:28:          adsList.where(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:7:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:8:class AllBrandProductController extends GetxController {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:9:  RxList<ProductModel> productList = <ProductModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:10:  Rx<BrandsModel> brandModel = BrandsModel().obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:11:  RxBool isLoading = true.obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:12:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:13:  @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:14:  void onInit() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:15:    // TODO: implement onInit
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:22:    if (arguments != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:23:      brandModel.value = arguments['brandModel'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:24:      await getProductByCategoryId();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:25:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:26:    isLoading.value = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:27:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:28:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:29:  Future<void> getProductByCategoryId() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:30:    List<ProductModel> productDataList = await 
FireStoreUtils.getProductListByBrandId(brandModel.value.id.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:31:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:32:    List<VendorModel> vendorList = await FireStoreUtils.getAllStoresFuture(ecommarce: true);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:33:    List<ProductModel> allProduct = <ProductModel>[];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:34:    for (var vendor in vendorList) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:35:      await FireStoreUtils.getAllProducts(vendor.id.toString()).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:36:        if (Constant.isSubscriptionModelApplied == true || vendor.adminCommission?.isEnabled 
== true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:37:          if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:38:            if (vendor.subscriptionPlan?.itemLimit == '-1') {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_brand_pro
duct_controller.dart:39:              allProduct.addAll(value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:6:class AllCategoryProductController extends GetxController {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:7:  RxBool isLoading = true.obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:8:  Rx<VendorCategoryModel> categoryModel = VendorCategoryModel().obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:9:  RxList<ProductModel> productList = <ProductModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:10:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:11:  @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:12:  void onInit() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:13:    // TODO: implement onInit
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:14:    getArguments();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:15:    super.onInit();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:20:    if (arguments != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:21:      categoryModel.value = arguments['categoryModel'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:22:      await getProductByCategoryId();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:23:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:24:    isLoading.value = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:25:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:26:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:27:  Future<void> getProductByCategoryId() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:28:    productList.value = await 
FireStoreUtils.getProductListByCategoryId(categoryModel.value.id.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:29:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\all_category_
product_controller.dart:30:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:136:      await Geolocator.requestPermission();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:137:      final position = await Geolocator.getCurrentPosition();
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:138:      final placemarks = await placemarkFromCoordinates(position.latitude, position.longitude);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:139:      final place = placemarks.first;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:140:      final address = "${place.name}, ${place.subLocality}, ${place.locality}, 
${place.administrativeArea}, ${place.postalCode}, ${place.country}";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:141:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:142:      final userLocation = UserLocation(latitude: position.latitude, longitude: position.longitude);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:143:      senderLocation.value = userLocation;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:144:      senderLocationController.value.text = address;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:145:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:146:      debugPrint("Failed to fetch current location: $e");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:147:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:148:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:195:      if (Constant.selectedMapType == 'osm') {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:196:        print("Fetching route using OSM");
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:197:        print("Sender Location: ${senderLocation.value?.latitude}, 
${senderLocation.value?.longitude}");
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:198:        print("Receiver Location: ${receiverLocation.value?.latitude}, 
${receiverLocation.value?.longitude}");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:199:        await fetchRouteWithWaypoints([
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:200:          latlong.LatLng(senderLocation.value?.latitude ?? 0.0, senderLocation.value?.longitude ?? 
0.0),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:201:          latlong.LatLng(receiverLocation.value?.latitude ?? 0.0, receiverLocation.value?.longitude 
?? 0.0),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:202:        ]);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:203:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:204:        await fetchGoogleRouteWithWaypoints();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:205:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:206:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:207:      if (distance.value < 0.5) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:226:      subTotal: subTotal.value.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:227:      parcelType: selectedCategory?.title ?? '',
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:228:      parcelCategoryID: selectedCategory?.id ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:229:      note: senderNoteController.value.text,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:230:      receiverNote: receiverNoteController.value.text,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:231:      distance: distance.value.toStringAsFixed(4),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:232:      parcelWeight: selectedWeight?.title ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:233:      parcelWeightCharge: selectedWeight?.deliveryCharge,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:234:      sendToDriver: isScheduled.value == true ? false : true,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:238:      isSchedule: isScheduled.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:239:      sourcePoint: G(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:240:        geopoint: GeoPoint(senderLocation.value!.latitude ?? 0.0, senderLocation.value!.longitude 
?? 0.0),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:241:        geohash: Geoflutterfire().point(latitude: senderLocation.value!.latitude ?? 0.0, longitude: 
senderLocation.value!.longitude ?? 0.0).hash,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:242:      ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:243:      destinationPoint: G(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:244:        geopoint: GeoPoint(receiverLocation.value!.latitude ?? 0.0, 
receiverLocation.value!.longitude ?? 0.0),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:245:        geohash: Geoflutterfire().point(latitude: receiverLocation.value!.latitude ?? 0.0, 
longitude: receiverLocation.value!.longitude ?? 0.0).hash,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:246:      ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:247:      sender: LocationInformation(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:248:        address: senderLocationController.value.text,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:249:        name: senderNameController.value.text,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:250:        phone: "(${senderCountryCodeController.value.text}) ${senderMobileController.value.text}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:251:      ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:265:    debugPrint("Order Distance: ${distance.value}");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:266:    debugPrint("Subtotal: ${subTotal.value}");
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:267:    debugPrint("Order JSON: ${order.toJson()}");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:268:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:269:    Get.to(() => ParcelOrderConfirmationScreen(), arguments: {'parcelOrder': order, 'images': 
images});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:270:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:271:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:272:  DateTime parseScheduledDateTime(String dateStr, String timeStr) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:273:    try {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:289:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:290:  Future<void> fetchGoogleRouteWithWaypoints() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:291:    final origin = '${senderLocation.value!.latitude},${senderLocation.value!.longitude}';
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:292:    final destination = '${receiverLocation.value!.latitude},${receiverLocation.value!.longitude}';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:293:    final url = Uri.parse('https://maps.googleapis.com/maps/api/directions/json?origin=$origin&desti
nation=$destination&mode=driving&key=${Constant.mapAPIKey}');
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:294:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:295:    try {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:296:      final response = await http.get(url);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:297:      final data = json.decode(response.body);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:298:      if (data['status'] == 'OK') {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:320:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:321:  Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:322:    final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:323:    final url = 
Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:324:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:325:    try {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:326:      final response = await http.get(url);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:327:      if (response.statusCode == 200) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:328:        final decoded = json.decode(response.body);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\book_parcel_c
ontroller.dart:329:        final dist = decoded['routes'][0]['distance'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:135:      if (!userSnapshot.exists) return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:136:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:137:      userModel.value = UserModel.fromJson(userSnapshot.data()!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:138:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:139:      if (userModel.value.inProgressOrderID != null && 
userModel.value.inProgressOrderID!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:140:        String? validRideId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:141:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:142:        for (String id in userModel.value.inProgressOrderID!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:143:          final rideDoc = await 
FireStoreUtils.fireStore.collection(CollectionName.rides).doc(id).get();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:153:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:154:          final rideData = rideSnapshot.data()!;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:155:          currentOrder.value = CabOrderModel.fromJson(rideData);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:156:          final status = currentOrder.value.status;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:157:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:158:          if (status == Constant.driverAccepted || status == Constant.orderInTransit) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:159:            
FireStoreUtils.fireStore.collection(CollectionName.users).doc(currentOrder.value.driverId).snapshots().listen((event) 
async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:160:              if (event.exists && event.data() != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:161:                UserModel driverModel0 = UserModel.fromJson(event.data()!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:162:                driverModel.value = driverModel0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:163:                await updateDriverRoute(driverModel0);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:164:              }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:165:            });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:166:          }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:167:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:185:        bottomSheetType.value = 'location';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:186:        if (Constant.currentLocation != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:187:          setDepartureMarker(Constant.currentLocation!.latitude, 
Constant.currentLocation!.longitude);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:188:          searchPlaceNameOSM();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:189:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:190:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:191:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:192:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:193:    final coupons = await FireStoreUtils.getCabCoupon();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:199:      final order = currentOrder.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:200:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:201:      final driverLat = driverModel.location!.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:202:      final driverLng = driverModel.location!.longitude ?? 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:203:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:204:      if (driverLat == 0.0 || driverLng == 0.0) return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:205:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:206:      // Get pickup and destination
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:207:      final pickupLat = order.sourceLocation?.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:208:      final pickupLng = order.sourceLocation?.longitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:209:      final destLat = order.destinationLocation?.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:210:      final destLng = order.destinationLocation?.longitude ?? 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:211:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:212:      if (Constant.selectedMapType == 'osm') {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:213:        /// For OpenStreetMap
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:214:        routePoints.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:215:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:216:        if (order.status == Constant.driverAccepted) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:241:      if (order.driver == null || driverModel.location == null) return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:242:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:243:      final driverLat = driverModel.location!.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:244:      final driverLng = driverModel.location!.longitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:245:      final pickupLat = order.sourceLocation?.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:246:      final pickupLng = order.sourceLocation?.longitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:247:      final destLat = order.destinationLocation?.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:248:      final destLng = order.destinationLocation?.longitude ?? 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:249:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:250:      markers.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:251:      osmMarker.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:252:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:253:      final departureBytes = await 
Constant().getBytesFromAsset('assets/images/location_black3x.png', 50);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:254:      final destinationBytes = await 
Constant().getBytesFromAsset('assets/images/location_orange3x.png', 50);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:329:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:330:  Future<void> fetchGoogleRouteBetween(LatLng originPoint, LatLng destPoint) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:331:    final origin = '${originPoint.latitude},${originPoint.longitude}';
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:332:    final destination = '${destPoint.latitude},${destPoint.longitude}';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:333:    final url = Uri.parse(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:334:      'https://maps.googleapis.com/maps/api/directions/json'
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:335:      '?origin=$origin&destination=$destination'
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:336:      '&mode=driving&key=${Constant.mapAPIKey}',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:337:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:338:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:345:        final encodedPolyline = route['overview_polyline']['points'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:346:        final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:347:        final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:348:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:349:        addPolyLine(coordinates);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:350:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:351:        // Distance + duration update
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:352:        final leg = route['legs'][0];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:353:        final totalDistance = leg['distance']['value'] / 1000.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:354:        final totalDuration = leg['duration']['value'] / 60.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:355:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:464:  Future<void> placeOrder() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:465:    DestinationLocation sourceLocation = DestinationLocation(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:466:      latitude: Constant.selectedMapType == 'osm' ? departureLatLongOsm.value.latitude : 
departureLatLong.value.latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:467:      longitude: Constant.selectedMapType == 'osm' ? departureLatLongOsm.value.longitude : 
departureLatLong.value.longitude,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:468:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:469:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:470:    DestinationLocation destinationLocation = DestinationLocation(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:471:      latitude: Constant.selectedMapType == 'osm' ? destinationLatLongOsm.value.latitude : 
destinationLatLong.value.latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:472:      longitude: Constant.selectedMapType == 'osm' ? destinationLatLongOsm.value.longitude : 
destinationLatLong.value.longitude,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:473:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:474:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:475:    CabOrderModel orderModel = CabOrderModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:476:    orderModel.id = const Uuid().v4();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:477:    orderModel.distance = distance.value.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:478:    orderModel.duration = duration.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:506:    orderModel.rideType = 'ride';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:507:    orderModel.roundTrip = false;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:508:    orderModel.sectionId = Constant.sectionConstantModel!.id;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:509:    orderModel.createdAt = Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:510:    orderModel.otpCode = (maths.Random().nextInt(9000) + 1000).toString(); // Generate a 4-digit OTP
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:511:    orderModel.status = Constant.orderPlaced;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:512:    orderModel.scheduleDateTime = Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:513:    orderModel.taxSetting = Constant.orderProductTaxList;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:514:    orderModel.platformFee = Constant.platformFeeModel?.fee;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:515:    orderModel.platformTax = Constant.platformTaxList;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:516:    log("Order Model : ${orderModel.toJson()}");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:517:    ShowToastDialog.showLoader("Please wait".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:518:    await FireStoreUtils.cabOrderPlace(orderModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:519:    await FireStoreUtils.sendCabBookEmail(orderModel: orderModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:520:    userModel.value.inProgressOrderID!.add(orderModel.id);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:521:    await FireStoreUtils.updateUser(userModel.value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:522:    ShowToastDialog.closeLoader();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:573:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:574:    osmMarker.add(marker);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:575:    if (departureLatLongOsm.value.latitude != 0 && destinationLatLongOsm.value.latitude != 0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:576:      getDirections();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:577:      animateToSource(lat, lng);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:578:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:579:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:580:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:581:  void _setGoogleMarker(double lat, double lng, {required bool isDeparture}) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:599:    mapController.animateCamera(CameraUpdate.newLatLngZoom(pos, 14));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:600:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:601:    if (departureLatLong.value.latitude != 0 && destinationLatLong.value.latitude != 0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:602:      getDirections();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:603:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:604:      mapController.animateCamera(CameraUpdate.newCameraPosition(CameraPosition(target: LatLng(lat, 
lng), zoom: 14)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:605:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:606:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:607:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:611:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:612:      // Only add valid source
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:613:      if (departureLatLongOsm.value.latitude != 0.0 && departureLatLongOsm.value.longitude != 0.0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:614:        wayPoints.add(departureLatLongOsm.value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:615:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:616:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:617:      // Only add valid destination
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:618:      if (destinationLatLongOsm.value.latitude != 0.0 && destinationLatLongOsm.value.longitude != 
0.0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:619:        wayPoints.add(destinationLatLongOsm.value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:620:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:621:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:622:      if (!isStopMarker) osmMarker.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:623:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:624:      // Add source marker
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:625:      if (departureLatLongOsm.value.latitude != 0.0 && departureLatLongOsm.value.longitude != 0.0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:626:        osmMarker.add(flutterMap.Marker(point: departureLatLongOsm.value, width: 40, height: 40, 
child: departureIconOsm!));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:627:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:628:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:629:      // Add destination marker
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:630:      if (destinationLatLongOsm.value.latitude != 0.0 && destinationLatLongOsm.value.longitude != 
0.0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:631:        osmMarker.add(flutterMap.Marker(point: destinationLatLongOsm.value, width: 40, height: 40, 
child: destinationIconOsm!));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:632:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:633:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:634:      if (wayPoints.length >= 2) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:635:        await fetchRouteWithWaypoints(wayPoints);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:636:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:642:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:643:  Future<void> fetchGoogleRouteWithWaypoints() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:644:    if (departureLatLong.value.latitude == 0.0 || destinationLatLong.value.latitude == 0.0) return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:645:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:646:    final origin = '${departureLatLong.value.latitude},${departureLatLong.value.longitude}';
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:647:    final destination = 
'${destinationLatLong.value.latitude},${destinationLatLong.value.longitude}';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:648:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:649:    final url = Uri.parse(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:650:      'https://maps.googleapis.com/maps/api/directions/json'
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:651:      '?origin=$origin&destination=$destination'
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:652:      '&mode=driving&key=${Constant.mapAPIKey}',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:653:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:664:        final encodedPolyline = route['overview_polyline']['points'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:665:        final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:666:        final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:667:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:668:        addPolyLine(coordinates);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:669:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:670:        // Distance & Duration
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:671:        num totalDistance = 0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:672:        num totalDuration = 0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:673:        for (var leg in legs) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:674:          totalDistance += leg['distance']['value']!; // meters
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:696:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:697:  Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:698:    final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:699:    final url = 
Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:700:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:701:    try {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:702:      final response = await http.get(url);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:703:      if (response.statusCode == 200) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:704:        final decoded = json.decode(response.body);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:705:        final geometry = decoded['routes'][0]['geometry']['coordinates'] as List;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:706:        final dist = decoded['routes'][0]['distance'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:707:        final dur = decoded['routes'][0]['duration'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:708:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:709:        routePoints.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:710:        routePoints.addAll(geometry.map((coord) => latlong.LatLng(coord[1], coord[0])));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:711:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:745:  double getBoundsZoomLevel(flutterMap.LatLngBounds bounds) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:746:    // Simple heuristic: zoom out for larger bounds
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:747:    final latDiff = (bounds.northEast.latitude - bounds.southWest.latitude).abs();
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:748:    final lngDiff = (bounds.northEast.longitude - bounds.southWest.longitude).abs();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:749:    double maxDiff = math.max(latDiff, lngDiff);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:750:    if (maxDiff < 0.005) return 18.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:751:    if (maxDiff < 0.01) return 16.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:752:    if (maxDiff < 0.05) return 14.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:753:    if (maxDiff < 0.1) return 12.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:754:    if (maxDiff < 0.5) return 10.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:769:  Future<void> updateCameraLocationToFitPolyline(List<LatLng> points, GoogleMapController? 
mapController) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:770:    if (mapController == null || points.isEmpty) return;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:771:    double minLat = points.first.latitude, maxLat = points.first.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:772:    double minLng = points.first.longitude, maxLng = points.first.longitude;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:773:    for (final p in points) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:774:      if (p.latitude < minLat) minLat = p.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:775:      if (p.latitude > maxLat) maxLat = p.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:776:      if (p.longitude < minLng) minLng = p.longitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:777:      if (p.longitude > maxLng) maxLng = p.longitude;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:778:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:779:    final bounds = LatLngBounds(southwest: LatLng(minLat, minLng), northeast: LatLng(maxLat, 
maxLng));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:780:    final cameraUpdate = CameraUpdate.newLatLngBounds(bounds, 50);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:781:    await checkCameraLocation(cameraUpdate, mapController);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:782:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:783:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:784:  Future<void> animateToSource(double lat, double long) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:785:    final hasBothCoords = departureLatLongOsm.value.latitude != 0.0 && 
destinationLatLongOsm.value.latitude != 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:786:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:787:    if (hasBothCoords) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:788:      await calculateZoomLevel(source: departureLatLongOsm.value, destination: 
destinationLatLongOsm.value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:789:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:790:      mapOsmController.move(latlong.LatLng(lat, long), 10);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:791:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:804:    double computeZoom(double screenPx, double worldPx, double fraction) => math.log(screenPx / 
worldPx / fraction) / math.ln2;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:805:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:806:    final north = bounds.northEast.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:807:    final south = bounds.southWest.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:808:    final east = bounds.northEast.longitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:809:    final west = bounds.southWest.longitude;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:810:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:811:    final latDelta = (north - south).abs();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:812:    final lngDelta = (east - west).abs();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:813:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:814:    final center = bounds.center;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:815:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:832:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:833:    final bounds = LatLngBounds(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:834:      southwest: LatLng(math.min(source.latitude, destination.latitude), math.min(source.longitude, 
destination.longitude)),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:835:      northeast: LatLng(math.max(source.latitude, destination.latitude), math.max(source.longitude, 
destination.longitude)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:836:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:837:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:838:    final cameraUpdate = CameraUpdate.newLatLngBounds(bounds, 90);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:839:    await checkCameraLocation(cameraUpdate, mapController);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:840:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:841:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:845:    final l2 = await mapController.getVisibleRegion();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:846:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:847:    if (l1.southwest.latitude == -90 || l2.southwest.latitude == -90) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:848:      await checkCameraLocation(cameraUpdate, mapController);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:849:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:850:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:851:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:852:  Future<void> setIcons() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:853:    try {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:870:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:871:  void clearMapDataIfLocationsRemoved() {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:872:    final isSourceEmpty = departureLatLongOsm.value.latitude == 0.0 && 
departureLatLongOsm.value.longitude == 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:873:    final isDestinationEmpty = destinationLatLongOsm.value.latitude == 0.0 && 
destinationLatLongOsm.value.longitude == 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:874:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:875:    if (isSourceEmpty || isDestinationEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:876:      // Clear polylines
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:877:      polyLines.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:878:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:879:      // Clear OSM markers (if using OSM)
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:926:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:927:  Future<void> searchPlaceNameOSM() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:928:    final url = Uri.parse('https://nominatim.openstreetmap.org/reverse?lat=${departureLatLongOsm.val
ue.latitude}&lon=${departureLatLongOsm.value.longitude}&format=json');
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:929:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:930:    final response = await http.get(url, headers: {'User-Agent': 'FlutterMapApp/1.0 
(menil.siddhiinfosoft@gmail.com)'});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:931:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:932:    if (response.statusCode == 200) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:933:      log("response.body :: ${response.body}");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:934:      Map<String, dynamic> data = json.decode(response.body);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:938:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:939:  Future<void> searchPlaceNameGoogle() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:940:    final lat = departureLatLong.value.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:941:    final lng = departureLatLong.value.longitude;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:942:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:943:    final url = 
Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:944:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:945:    final response = await http.get(url);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:946:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:947:    if (response.statusCode == 200) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:984:  Future<void> getPaymentSettings() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:985:    await FireStoreUtils.getPaymentSettingsData().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:986:      stripeModel.value = 
StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:987:      payPalModel.value = 
PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:988:      payStackModel.value = 
PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:989:      mercadoPagoModel.value = 
MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:990:      flutterWaveModel.value = 
FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:991:      paytmModel.value = 
PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:992:      payFastModel.value = 
PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:993:      razorPayModel.value = 
RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:994:      midTransModel.value = 
MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:995:      orangeMoneyModel.value = 
OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:996:      xenditModel.value = 
Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:997:      walletSettingModel.value = 
WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:998:      cashOnDeliverySettingModel.value = 
CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:999:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1000:      if (walletSettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1001:        selectedPaymentMethod.value = PaymentGateway.wallet.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1002:      } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1003:        selectedPaymentMethod.value = PaymentGateway.cod.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1004:      } else if (stripeModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1023:        selectedPaymentMethod.value = PaymentGateway.xendit.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1024:      }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1025:      Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1026:      Stripe.merchantIdentifier = 'GHALBIT MARITRONIX Customer';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1027:      Stripe.instance.applySettings();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1028:      setRef();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1029:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1030:      razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1031:      razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1072:      var lo1 = jsonEncode(e);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1073:      var lo2 = jsonDecode(lo1);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1074:      StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1075:      ShowToastDialog.showToast(lom.error.message);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1076:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1077:      ShowToastDialog.showToast(e.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1078:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1079:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1080:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1392:      ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1393:    }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1394:    return GetPaymentTxtTokenModel.fromJson(data);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1395:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1396:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1397:  ///RazorPay payment function
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1398:  final Razorpay razorPay = Razorpay();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1399:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1400:  void openCheckout({required amount, required orderId}) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1621:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1622:      if (response.statusCode == 200 || response.statusCode == 201) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1623:        XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1624:        return model;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1625:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1626:        return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1627:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1628:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_booking_c
ontroller.dart:1629:      return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:65:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:66:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:67:      print(driverUser.value.toJson());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:68:      await FireStoreUtils.getReviewsbyID(cabOrder.value.id.toString()).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:69:        if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:70:          ratingModel.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:71:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:72:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:73:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:101:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:102:  void _setMarkers() {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:103:    final sourceLat = cabOrder.value.sourceLocation!.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:104:    final sourceLng = cabOrder.value.sourceLocation!.longitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:105:    final destLat = cabOrder.value.destinationLocation!.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:106:    final destLng = cabOrder.value.destinationLocation!.longitude;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:107:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:108:    // ignore: invalid_use_of_protected_member
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:109:    googleMarkers.value = {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:110:      gmap.Marker(markerId: const gmap.MarkerId('source'), position: gmap.LatLng(sourceLat!, 
sourceLng!), icon: gmap.BitmapDescriptor.defaultMarkerWithHue(gmap.BitmapDescriptor.hueGreen)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:111:      gmap.Marker(markerId: const gmap.MarkerId('destination'), position: 
gmap.LatLng(destLat!, destLng!), icon: gmap.BitmapDescriptor.defaultMarkerWithHue(gmap.BitmapDescriptor.hueRed)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:112:    };
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:118:    final dest = cabOrder.value.destinationLocation;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:119:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:120:    final url = "https://maps.googleapis.com/maps/api/directions/json?origin=${src!.latitude},
${src.longitude}&destination=${dest!.latitude},${dest.longitude}&key=$googleApiKey";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:121:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:122:    final response = await http.get(Uri.parse(url));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:123:    final data = jsonDecode(response.body);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:124:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:125:    if (data["routes"].isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:126:      final points = data["routes"][0]["overview_polyline"]["points"];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:127:      final polylinePoints = PolylinePoints.decodePolyline(points);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:128:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:129:      final polylineCoords = polylinePoints.map((p) => gmap.LatLng(p.latitude, 
p.longitude)).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:130:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:131:      // ignore: invalid_use_of_protected_member
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:132:      googlePolylines.value = {gmap.Polyline(polylineId: const 
gmap.PolylineId("google_route"), color: AppThemeData.onDemandDark100, width: 5, points: polylineCoords)};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:133:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:134:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:135:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:139:    final dest = cabOrder.value.destinationLocation;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:140:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:141:    final url = "http://router.project-osrm.org/route/v1/driving/${src!.longitude},${src.latit
ude};${dest!.longitude},${dest.latitude}?overview=full&geometries=geojson";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:142:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:143:    final response = await http.get(Uri.parse(url));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:144:    final data = jsonDecode(response.body);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:145:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:146:    if (data["routes"].isNotEmpty) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:147:      final coords = data["routes"][0]["geometry"]["coordinates"] as List<dynamic>;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:148:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:149:      osmPolyline.value = coords.map((c) => osm.LatLng(c[1].toDouble(), 
c[0].toDouble())).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:150:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:151:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_order_det
ails_controller.dart:152:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:93:        uname: "${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:94:        profile: Constant.userModel?.profilePictureURL,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:95:        createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:96:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:97:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:98:      await FireStoreUtils.updateReviewById(updatedRating);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:99:      if (user != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:100:        await FireStoreUtils.updateUser(user);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:101:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:113:        uname: "${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:114:        profile: Constant.userModel?.profilePictureURL,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:115:        createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:116:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:117:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:118:      await FireStoreUtils.updateReviewById(newRating);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:119:      if (user != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:120:        await FireStoreUtils.updateUser(user);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cab_review_co
ntroller.dart:121:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:67:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:68:  Rx<ShippingAddress> selectedAddress = ShippingAddress().obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:69:  Rx<VendorModel> vendorModel = VendorModel().obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:70:  Rx<DeliveryCharge> deliveryChargeModel = DeliveryCharge().obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:71:  Rx<UserModel> userModel = UserModel().obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:72:  RxList<CouponModel> couponList = <CouponModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:73:  RxList<CouponModel> allCouponList = <CouponModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:74:  RxString selectedFoodType = "Delivery".obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:75:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:120:        ).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:121:          if (value != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:122:            vendorModel.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:123:          }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:124:        });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:125:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:126:      calculatePrice();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:127:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:128:    selectedFoodType.value = Preferences.getString(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:143:        deliveryChargeModel.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:144:        print(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:145:          "===> Delivery Charge Model: ${deliveryChargeModel.value.toJson()}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:146:        );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:147:        calculatePrice();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:148:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:149:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:150:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:151:    await FireStoreUtils.getAllVendorPublicCoupons(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:152:      vendorModel.value.id.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:153:    ).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:154:      couponList.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:155:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:156:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:157:    await FireStoreUtils.getAllVendorCoupons(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:158:      vendorModel.value.id.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:159:    ).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:160:      allCouponList.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:161:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:162:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:163:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:164:  Future<void> calculatePrice() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:185:        totalDistance.value = double.parse(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:186:          Constant.getDistance(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:187:            lat1: selectedAddress.value.location!.latitude.toString(),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:188:            lng1: selectedAddress.value.location!.longitude.toString(),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:189:            lat2: vendorModel.value.latitude.toString(),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:190:            lng2: vendorModel.value.longitude.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:191:          ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:192:        );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:193:        if (Constant.sectionConstantModel?.serviceType == 'Ecommerce Service') {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:194:          deliveryCharges.value = double.parse(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:195:            Constant.sectionConstantModel?.deliveryCharge ?? '0.0',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:196:          );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:197:        } else if (vendorModel.value.isSelfDelivery == true &&
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:198:            Constant.isSelfDeliveryFeature == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:199:          deliveryCharges.value = 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:200:        } else if (deliveryChargeModel.value.vendorCanModify == false) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:201:          deliveryCharges.value =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:202:              totalDistance.value >
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:203:                      deliveryChargeModel.value.minimumDeliveryChargesWithinKm!
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:208:        } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:209:          final charge =
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:210:              vendorModel.value.deliveryCharge ?? deliveryChargeModel.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:211:          deliveryCharges.value =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:212:              totalDistance.value > charge.minimumDeliveryChargesWithinKm!
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:213:                  ? totalDistance.value * charge.deliveryChargesPerKm!
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:214:                  : charge.minimumDeliveryCharges!.toDouble();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:215:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:216:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:220:    if (Constant.sectionConstantModel?.packagingChargeEnable == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:221:      packagingCharge.value =
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:222:          vendorModel.value.packagingCharge != null
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:223:              ? double.parse(vendorModel.value.packagingCharge.toString())
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:224:              : 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:225:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:226:    if (Constant.sectionConstantModel?.platformFee?.enable == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:227:      platformFee.value = Constant.calculatePlatFormMeModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:228:        platFromFeeModel: Constant.platformFeeModel,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:229:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:256:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:257:    /// ---------------- SPECIAL DISCOUNT ----------------
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:258:    if (vendorModel.value.specialDiscountEnable == true &&
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:259:        Constant.specialDiscountOffer == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:260:      final now = DateTime.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:261:      final day = DateFormat('EEEE', 'en_US').format(now);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:262:      final date = DateFormat('dd-MM-yyyy').format(now);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:263:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:264:      for (var element in vendorModel.value.specialDiscount!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:265:        if (day == element.day.toString()) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:266:          for (var slot in element.timeslot ?? []) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:267:            if (slot.discountType == "delivery") {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:268:              final start = _step45bSafeParseWorkingDateTime(date, slot.from);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:269:              final end = _step45bSafeParseWorkingDateTime(date, slot.to);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:270:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:338:    /// ---------------- DELIVERY TAX ----------------
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:339:    if (selectedFoodType.value != 'TakeAway' &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:340:        vendorModel.value.isSelfDelivery != true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:341:      for (var taxElement in Constant.driverDeliveryTaxList ?? []) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:342:        driverDeliveryTaxAmount.value += Constant.calculateTax(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:343:          amount: deliveryCharges.value.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:344:          taxModel: taxElement,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:345:        );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:346:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:472:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:473:  Future<void> addToCart({
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:474:    required CartProductModel cartProductModel,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:475:    required bool isIncrement,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:476:    required int quantity,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:477:  }) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:478:    if (isIncrement) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:479:      cartProvider.addToCart(Get.context!, cartProductModel, quantity);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:480:    } else {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:481:      cartProvider.removeFromCart(cartProductModel, quantity);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:482:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:483:    update();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:484:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:485:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:486:  List<CartProductModel> tempProduc = [];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:487:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:488:  Future<void> placeOrder() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:489:    if (selectedPaymentMethod.value == PaymentGateway.wallet.name) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:490:      if (double.parse(userModel.value.walletAmount.toString()) >=
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:491:          totalAmount.value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:492:        setOrder();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:506:    if ((Constant.isSubscriptionModelApplied == true ||
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:507:            Constant.sectionConstantModel?.adminCommision?.isEnabled == true) &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:508:        vendorModel.value.subscriptionPlan != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:509:      await FireStoreUtils.getVendorById(vendorModel.value.id!).then((
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:510:        vender,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:511:      ) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:512:        if (vender?.subscriptionTotalOrders == '0' ||
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:513:            vender?.subscriptionTotalOrders == null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:514:          ShowToastDialog.closeLoader();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:515:          ShowToastDialog.showToast(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:522:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:523:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:524:    for (CartProductModel cartProduct in cartItem) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:525:      CartProductModel tempCart = cartProduct;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:526:      if (cartProduct.extrasPrice == '0') {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:527:        tempCart.extras = [];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:528:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:529:      tempProduc.add(tempCart);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:530:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:531:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:541:    orderModel.authorID = FireStoreUtils.getCurrentUid();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:542:    orderModel.author = userModel.value;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:543:    orderModel.vendorID = vendorModel.value.id;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:544:    orderModel.vendor = vendorModel.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:545:    orderModel.adminCommission =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:546:        Constant.sectionConstantModel?.adminCommision?.isEnabled == false
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:547:            ? '0'
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:548:            : vendorModel.value.adminCommission != null
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:549:            ? vendorModel.value.adminCommission!.amount.toString()
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:550:            : Constant.sectionConstantModel?.adminCommision?.amount.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:551:    orderModel.adminCommissionType =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:552:        Constant.sectionConstantModel?.adminCommision?.isEnabled == false
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:553:            ? 'fixed'
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:554:            : vendorModel.value.adminCommission != null
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:555:            ? vendorModel.value.adminCommission!.commissionType
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:556:            : Constant.sectionConstantModel?.adminCommision?.commissionType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:557:    orderModel.status = Constant.orderPlaced;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:558:    orderModel.discount = couponAmount.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:559:    orderModel.couponId = selectedCouponModel.value.id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:560:    orderModel.paymentMethod = selectedPaymentMethod.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:561:    orderModel.products = cartItem;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:567:    orderModel.notes = reMarkController.value.text;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:568:    orderModel.takeAway = selectedFoodType.value == "Delivery" ? false : true;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:569:    orderModel.createdAt = Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:570:    orderModel.scheduleTime =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:571:        deliveryType.value == "schedule"
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:572:            ? Timestamp.fromDate(scheduleDateTime.value)
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:573:            : null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:574:    orderModel.cashback =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:575:        bestCashback.value.id == null ? null : bestCashback.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:614:        tempProduc[i].id!.split('~').first,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:615:      ).then((value) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:616:        ProductModel? productModel = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:617:        if (tempProduc[i].variantInfo != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:618:          if (productModel!.itemAttribute != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:619:            for (
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:620:              int j = 0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:621:              j < productModel.itemAttribute!.variants!.length;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:622:              j++
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:623:            ) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:624:              if (productModel.itemAttribute!.variants![j].variantId ==
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:625:                  tempProduc[i].id!.split('~').last) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:626:                if (productModel.itemAttribute!.variants![j].variantQuantity !=
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:627:                    "-1") {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:628:                  productModel.itemAttribute!.variants![j].variantQuantity =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:629:                      (int.parse(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:630:                                productModel
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:631:                                    .itemAttribute!
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:632:                                    .variants![j]
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:633:                                    .variantQuantity
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:634:                                    .toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:635:                              ) -
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:636:                              tempProduc[i].quantity!)
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:640:            }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:641:          } else {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:642:            if (productModel.quantity != -1) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:643:              productModel.quantity =
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:644:                  (productModel.quantity! - tempProduc[i].quantity!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:645:            }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:646:          }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:647:        } else {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:648:          if (productModel!.quantity != -1) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:649:            productModel.quantity =
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:650:                (productModel.quantity! - tempProduc[i].quantity!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:651:          }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:652:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:653:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:654:        await FireStoreUtils.setProduct(productModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:655:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:656:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:657:    if (Constant.isCashbackActive == true && bestCashback.value.id != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:658:      CashbackRedeemModel cashbackRedeemModel = CashbackRedeemModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:659:        id: Constant.getUuid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:660:        cashbackId: bestCashback.value.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:661:        userId: FireStoreUtils.getCurrentUid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:662:        orderId: orderModel.id,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:663:        createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:664:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:665:      await FireStoreUtils.setCashbackRedeemModel(cashbackRedeemModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:666:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:667:    await FireStoreUtils.setOrder(orderModel).then((value) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:668:      await FireStoreUtils.getUserProfile(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:669:        orderModel.vendor!.author.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:713:    isLoading.value = true;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:714:    await FireStoreUtils.getPaymentSettingsData().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:715:      stripeModel.value = StripeModel.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:716:        jsonDecode(Preferences.getString(Preferences.stripeSettings)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:717:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:718:      payPalModel.value = PayPalModel.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:719:        jsonDecode(Preferences.getString(Preferences.paypalSettings)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:720:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:721:      payStackModel.value = PayStackModel.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:722:        jsonDecode(Preferences.getString(Preferences.payStack)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:723:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:724:      mercadoPagoModel.value = MercadoPagoModel.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:725:        jsonDecode(Preferences.getString(Preferences.mercadoPago)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:726:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:727:      flutterWaveModel.value = FlutterWaveModel.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:728:        jsonDecode(Preferences.getString(Preferences.flutterWave)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:729:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:730:      paytmModel.value = PaytmModel.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:731:        jsonDecode(Preferences.getString(Preferences.paytmSettings)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:732:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:733:      payFastModel.value = PayFastModel.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:734:        jsonDecode(Preferences.getString(Preferences.payFastSettings)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:735:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:736:      razorPayModel.value = RazorPayModel.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:737:        jsonDecode(Preferences.getString(Preferences.razorpaySettings)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:738:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:739:      midTransModel.value = MidTrans.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:740:        jsonDecode(Preferences.getString(Preferences.midTransSettings)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:741:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:742:      orangeMoneyModel.value = OrangeMoney.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:743:        jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:744:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:745:      xenditModel.value = Xendit.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:746:        jsonDecode(Preferences.getString(Preferences.xenditSettings)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:747:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:748:      walletSettingModel.value = WalletSettingModel.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:749:        jsonDecode(Preferences.getString(Preferences.walletSettings)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:750:      );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:751:      cashOnDeliverySettingModel.value = CodSettingModel.fromJson(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:752:        jsonDecode(Preferences.getString(Preferences.codSettings)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:753:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:754:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:755:      if (walletSettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:756:        selectedPaymentMethod.value = PaymentGateway.wallet.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:757:      } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:778:        selectedPaymentMethod.value = PaymentGateway.xendit.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:779:      }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:780:      Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:781:      Stripe.merchantIdentifier = 'Foodie Customer';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:782:      Stripe.instance.applySettings();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:783:      setRef();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:784:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:785:      razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:786:      razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:840:      var lo1 = jsonEncode(e);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:841:      var lo2 = jsonDecode(lo1);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:842:      StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:843:      ShowToastDialog.showToast(lom.error.message);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:844:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:845:      ShowToastDialog.showToast(e.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:846:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:847:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:848:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1237:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1238:    }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1239:    return GetPaymentTxtTokenModel.fromJson(data);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1240:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1241:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1242:  ///RazorPay payment function
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1243:  final Razorpay razorPay = Razorpay();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1244:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1245:  void openCheckout({required amount, required orderId}) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1548:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1549:      if (response.statusCode == 200 || response.statusCode == 201) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1550:        XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1551:        return model;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1552:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1553:        return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1554:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1555:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1556:      return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1563:    var day = DateFormat('EEEE', 'en_US').format(now);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1564:    var date = DateFormat('dd-MM-yyyy').format(now);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1565:    for (var element in vendorModel.value.workingHours!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1566:      if (day == element.day.toString()) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1567:        if (element.timeslot!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1568:          for (var element in element.timeslot!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1569:            var start = _step45bSafeParseWorkingDateTime(date, element.from);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1570:            var end = _step45bSafeParseWorkingDateTime(date, element.to);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\cart_controll
er.dart:1571:            if (isCurrentDateInRange(start, end)) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:18:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:19:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:20:  Rx<VendorCategoryModel> vendorCategoryModel = VendorCategoryModel().obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:21:  RxList<VendorModel> allNearestRestaurant = <VendorModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:22:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:23:  Future<void> getArgument() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:24:    dynamic argumentData = Get.arguments;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:25:    if (argumentData != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:26:      vendorCategoryModel.value = argumentData['vendorCategoryModel'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:27:      dineIn.value = argumentData['dineIn'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:28:      ecommarce.value = argumentData['ecommerce'] ?? false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:29:      await getZone();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:30:      await getRestaurant();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:31:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:32:    Future.delayed(Duration(seconds: 1), () {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:36:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:37:  Future getRestaurant() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:38:    FireStoreUtils.getAllNearestRestaurantByCategoryId(categoryId: 
vendorCategoryModel.value.id.toString(), isDining: dineIn.value).listen((event) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:39:      allNearestRestaurant.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:40:      allNearestRestaurant.addAll(event);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:41:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:42:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:43:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:44:  Future<void> getZone() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:46:      if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:47:        for (int i = 0; i < value.length; i++) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:48:          if (Constant.isPointInPolygon(LatLng(Constant.selectedLocation.location!.latitude 
?? 0.0, Constant.selectedLocation.location!.longitude ?? 0.0), value[i].area!)) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:49:            Constant.selectedZone = value[i];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:50:            Constant.isZoneAvailable = true;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:51:            break;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:52:          } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:53:            Constant.isZoneAvailable = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\category_rest
aurant_controller.dart:54:          }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\change_langua
ge_controller.dart:25:        List languageListTemp = event.data()!["list"];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\change_langua
ge_controller.dart:26:        for (var element in languageListTemp) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\change_langua
ge_controller.dart:27:          LanguageModel languageModel = LanguageModel.fromJson(element);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\change_langua
ge_controller.dart:28:          if (languageModel.isActive == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\change_langua
ge_controller.dart:29:            languageList.add(languageModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\change_langua
ge_controller.dart:30:          }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\change_langua
ge_controller.dart:31:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\change_langua
ge_controller.dart:32:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\change_langua
ge_controller.dart:33:        if (Preferences.getString(Preferences.languageCodeKey).toString().isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:69:      senderId: senderId.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:70:      receiverId: receivedId.value,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:71:      createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:72:      orderId: orderId.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:73:      lastMessage: messageController.value.text,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:74:      lastMessageType: messageType,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:75:      type: 'orderChat',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:76:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:77:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:83:      senderId: FireStoreUtils.getCurrentUid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:84:      receiverId: receivedId.value,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:85:      createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:86:      url: url,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:87:      orderId: orderId.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:88:      messageType: messageType,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:89:      videoThumbnail: videoThumbnail,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:90:      seen: false,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\chat_controll
er.dart:91:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:22:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:23:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:24:  RxList<VendorCategoryModel> vendorCategoryModel = <VendorCategoryModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:25:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:26:  RxList<VendorModel> allNearestRestaurant = <VendorModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:27:  RxList<VendorModel> newArrivalRestaurantList = <VendorModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:28:  RxList<VendorModel> popularRestaurantList = <VendorModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:29:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:30:  RxList<BannerModel> bannerBottomModel = <BannerModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:31:  Rx<PageController> pageBottomController = PageController(viewportFraction: 0.877).obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:32:  RxInt currentBottomPage = 0.obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:33:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:34:  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:54:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:55:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:56:      newArrivalRestaurantList.sort((a, b) => (b.createdAt ?? 
Timestamp.now()).toDate().compareTo((a.createdAt ?? Timestamp.now()).toDate()));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:57:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:58:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:59:    update();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:60:    Future.delayed(const Duration(seconds: 3), () {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:61:      isLoading.value = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:62:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:65:  Future<void> getCategory() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:66:    await FireStoreUtils.getHomeVendorCategory().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:67:      vendorCategoryModel.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:68:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:69:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:70:    await FireStoreUtils.getHomeBottomBanner().then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:71:      bannerBottomModel.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:72:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:73:    if (Constant.userModel != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:82:      if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:83:        for (int i = 0; i < value.length; i++) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:84:          if (Constant.isPointInPolygon(LatLng(Constant.selectedLocation.location!.latitude ?? 0.0, 
Constant.selectedLocation.location!.longitude ?? 0.0), value[i].area!)) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:85:            Constant.selectedZone = value[i];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:86:            Constant.isZoneAvailable = true;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:87:            break;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:88:          } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:89:            Constant.isZoneAvailable = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_contr
oller.dart:90:          }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:97:        author: Constant.userModel,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:98:        authorID: FireStoreUtils.getCurrentUid(),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:99:        createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:100:        date: selectedDate.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:101:        status: Constant.orderPlaced,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:102:        vendor: vendorModel.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:103:        specialRequest:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:104:            additionRequestController.value.text.isEmpty
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:105:                ? ""
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:106:                : additionRequestController.value.text,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:107:        vendorID: vendorModel.value.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:108:        guestEmail: Constant.userModel!.email,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:109:        guestFirstName: Constant.userModel!.firstName,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:110:        guestLastName: Constant.userModel!.lastName,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:111:        guestPhone: Constant.userModel!.phoneNumber,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:112:        occasion: selectedOccasion.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:113:        discount: selectedTimeDiscount.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:119:      await SendNotification.sendFcmMessage(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:120:        Constant.dineInPlaced,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:121:        vendorModel.value.fcmToken.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:122:        {},
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:123:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:124:      ShowToastDialog.closeLoader();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:125:      selectedDate.value = Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:126:      Get.back();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:127:      Get.to(const DineInBookingScreen());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:134:      final now = DateTime.now().add(Duration(days: i));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:135:      var day = DateFormat('EEEE').format(now);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:136:      if (vendorModel.value.specialDiscount?.isNotEmpty == true &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:137:          vendorModel.value.specialDiscountEnable == true) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:138:        for (var element in vendorModel.value.specialDiscount!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:139:          if (day == element.day.toString()) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:140:            if (element.timeslot!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:141:              SpecialDiscountTimeslot employeeWithMaxSalary = element.timeslot!
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:142:                  .reduce(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:143:                    (item1, item2) =>
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:144:                        double.parse(item1.discount.toString()) >
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:192:    for (
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:193:      DateTime time = Constant.stringToDate(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:194:        vendorModel.value.openDineTime.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:195:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:196:      time.isBefore(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:197:        Constant.stringToDate(vendorModel.value.closeDineTime.toString()),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:198:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:199:      time = time.add(const Duration(minutes: 30))
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:200:    ) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:201:      final now = DateTime.parse(selectedDate.toDate().toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:202:      var day = DateFormat('EEEE').format(now);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:203:      var date = DateFormat('dd-MM-yyyy').format(now);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:204:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:205:      if (vendorModel.value.specialDiscount?.isNotEmpty == true &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:206:          vendorModel.value.specialDiscountEnable == true) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:207:        for (var element in vendorModel.value.specialDiscount!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:208:          if (day == element.day.toString()) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:209:            if (element.timeslot!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:210:              for (var element in element.timeslot!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:211:                if (element.discountType == "dinein") {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:212:                  var start = step46fSafeParseWorkingDateTime(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:213:                    date,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:286:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:287:  void animateSlider() {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:288:    if (vendorModel.value.photos != null &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:289:        vendorModel.value.photos!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:290:      Timer.periodic(const Duration(seconds: 2), (Timer timer) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:291:        if (currentPage < vendorModel.value.photos!.length) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:292:          currentPage++;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:293:        } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:294:          currentPage.value = 0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:295:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:296:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:297:        if (pageController.value.hasClients) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:306:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:307:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:308:  Rx<VendorModel> vendorModel = VendorModel().obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:309:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:310:  Future<void> getArgument() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:311:    dynamic argumentData = Get.arguments;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:312:    if (argumentData != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:313:      vendorModel.value = argumentData['vendorModel'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:314:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:315:    animateSlider();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:316:    statusCheck();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:317:    isLoading.value = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:318:    await getFavouriteList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:319:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:329:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:330:    await FireStoreUtils.getVendorCuisines(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:331:      vendorModel.value.id.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:332:    ).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:333:      tags.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:334:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:335:    update();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:336:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:337:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:342:    var day = DateFormat('EEEE', 'en_US').format(now);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:343:    var date = DateFormat('dd-MM-yyyy').format(now);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:344:    for (var element in vendorModel.value.workingHours!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:345:      if (day == element.day.toString()) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:346:        if (element.timeslot!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:347:          for (var element in element.timeslot!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:348:            var start = step46fSafeParseWorkingDateTime(date, element.from);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:349:            var end = step46fSafeParseWorkingDateTime(date, element.to);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_resta
urant_details_controller.dart:350:            if (isCurrentDateInRange(start, end)) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\discount_rest
aurant_list_controller.dart:5:class DiscountRestaurantListController extends GetxController {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\discount_rest
aurant_list_controller.dart:6:  RxBool isLoading = true.obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\discount_rest
aurant_list_controller.dart:7:  RxList<VendorModel> vendorList = <VendorModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\discount_rest
aurant_list_controller.dart:8:  RxList<CouponModel> couponList = <CouponModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\discount_rest
aurant_list_controller.dart:9:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\discount_rest
aurant_list_controller.dart:10:  RxString title = "Stores".obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\discount_rest
aurant_list_controller.dart:11:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\discount_rest
aurant_list_controller.dart:12:  @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\discount_rest
aurant_list_controller.dart:13:  void onInit() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:13:  RxBool favouriteRestaurant = true.obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:14:  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:15:  RxList<VendorModel> favouriteVendorList = <VendorModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:16:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:17:  RxList<FavouriteItemModel> favouriteItemList = <FavouriteItemModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:18:  RxList<ProductModel> favouriteFoodList = <ProductModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:19:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:20:  RxBool isLoading = true.obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:21:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:22:  @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:23:  void onInit() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:24:    // TODO: implement onInit
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:37:        favouriteItemList.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:38:      });
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:39:      List<VendorModel> favouriteVendorData = [];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:40:      for (var element in favouriteList) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:41:        await FireStoreUtils.getVendorById(element.restaurantId.toString()).then((value) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:42:          if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:43:            if ((Constant.isSubscriptionModelApplied == true || value.adminCommission?.isEnabled == 
true) && value.subscriptionPlan != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:44:              if (value.subscriptionTotalOrders == "-1") {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:45:                favouriteVendorData.add(value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:58:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:59:      favouriteVendorData.sort((a, b) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:60:        final aOpen = Constant.statusCheckOpenORClose(vendorModel: a);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:61:        final bOpen = Constant.statusCheckOpenORClose(vendorModel: b);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:62:        if (aOpen == bOpen) return 0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:63:        return aOpen ? -1 : 1;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:64:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:65:      favouriteVendorList.value = favouriteVendorData;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:66:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:67:      for (var element in favouriteItemList) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:68:        await FireStoreUtils.getProductById(element.productId.toString()).then((value) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:69:          log("getProductById :: ${value?.name} :: ${value?.publish}");
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:70:          if (value != null && value.publish == true) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:71:            await 
FireStoreUtils.fireStore.collection(CollectionName.vendors).doc(value.vendorID.toString()).get().then((value1) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:72:              if (value1.exists) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:73:                VendorModel vendorModel = VendorModel.fromJson(value1.data()!);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:74:                if (Constant.isSubscriptionModelApplied == true || 
vendorModel.adminCommission?.isEnabled == true) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:75:                  if (vendorModel.subscriptionPlan != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:76:                    if (vendorModel.subscriptionTotalOrders == "-1") {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:77:                      favouriteFoodList.add(value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:78:                    } else {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:79:                      if ((vendorModel.subscriptionExpiryDate != null && 
vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) ||
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:80:                          vendorModel.subscriptionPlan?.expiryDay == "-1") {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:81:                        if (vendorModel.subscriptionTotalOrders != '0') {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:82:                          favouriteFoodList.add(value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:83:                        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:84:                      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:85:                    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:86:                  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:87:                } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:94:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:95:    }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:96:    List<ProductModel> favouriteFoodData = favouriteFoodList;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:97:    List<VendorModel> favouriteVendorData = favouriteVendorList;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:98:    favouriteFoodList.value = removeDuplicateFoods(favouriteFoodData);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:99:    favouriteVendorList.value = removeDuplicateVendor(favouriteVendorData);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:100:    isLoading.value = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:101:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:102:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:103:  void reset() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:110:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:111:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:112:  List<ProductModel> removeDuplicateFoods(List<ProductModel> favouriteFoodList) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:113:    final seenIds = <String>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:114:    return favouriteFoodList.where((food) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:115:      return seenIds.add(food.id!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:116:    }).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:117:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:118:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:119:  List<VendorModel> removeDuplicateVendor(List<VendorModel> favouriteFoodVendor) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:120:    final seenIds = <String>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:121:    return favouriteFoodVendor.where((food) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:122:      return seenIds.add(food.id!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:123:    }).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:124:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_con
troller.dart:125:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:39:      if (contain.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:40:        FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandServiceModel(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:41:          section_id: provider.sectionId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:42:          service_id: provider.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:43:          user_id: FireStoreUtils.getCurrentUid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:44:          serviceAuthorId: provider.author,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:45:        );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:46:        FireStoreUtils.removeFavouriteOndemandService(favouriteModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:47:        lstFav.removeWhere((item) => item.service_id == provider.id);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:48:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:49:        FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandServiceModel(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:50:          section_id: provider.sectionId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:51:          service_id: provider.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:52:          user_id: FireStoreUtils.getCurrentUid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:53:          serviceAuthorId: provider.author,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:54:        );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:55:        FireStoreUtils.setFavouriteOndemandSection(favouriteModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:56:        lstFav.add(favouriteModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:60:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:61:  /// Get category by id safely from cached categories
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:62:  Future<CategoryModel?> getCategory(String? categoryId) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:63:    if (categoryId == null || categoryId.isEmpty) return null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:64:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:65:    // Try to find category from cached list
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:66:    CategoryModel? cat = categories.firstWhereOrNull((element) => element.id == categoryId);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:67:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:68:    // If not found, fetch from Firestore
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:69:    cat ??= await FireStoreUtils.getCategoryById(categoryId);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:70:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:71:    return cat;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:72:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\favourite_ond
emmand_controller.dart:73:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:48:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:49:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:50:  RxList<VendorCategoryModel> vendorCategoryModel = <VendorCategoryModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:51:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:52:  RxList<VendorModel> allNearestRestaurant = <VendorModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:53:  RxList<VendorModel> newArrivalRestaurantList = <VendorModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:54:  RxList<AdvertisementModel> advertisementList = <AdvertisementModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:55:  RxList<VendorModel> popularRestaurantList = <VendorModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:56:  RxList<VendorModel> couponRestaurantList = <VendorModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:57:  RxList<CouponModel> couponList = <CouponModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:58:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:59:  RxList<StoryModel> storyList = <StoryModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:60:  RxList<BannerModel> bannerModel = <BannerModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:61:  RxList<BannerModel> bannerBottomModel = <BannerModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:62:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:85:      print("RESTAURANT_VENDOR_DEBUG: popular_count=${popularRestaurantList.length}");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:86:      for (final vendor in allNearestRestaurant) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:87:        print("RESTAURANT_VENDOR_DEBUG_ITEM: id=${vendor.id} title=${vendor.title} 
section=${vendor.sectionId} zone=${vendor.zoneId} category=${vendor.categoryID}");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:88:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:89:      // END TEMP DEBUG STEP44U
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:90:      popularRestaurantList.sort(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:91:        (a, b) => Constant.calculateReview(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:92:          reviewCount: b.reviewsCount.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:93:          reviewSum: b.reviewsSum.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:95:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:96:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:97:      newArrivalRestaurantList.sort((a, b) => (b.createdAt ?? 
Timestamp.now()).toDate().compareTo((a.createdAt ?? Timestamp.now()).toDate()));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:98:      await getVendorCategory();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:99:      await FireStoreUtils.getHomeCoupon().then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:100:        couponRestaurantList.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:101:        couponList.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:102:        for (var element1 in value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:103:          for (var element in allNearestRestaurant) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:154:  Future<void> getVendorCategory() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:155:    await FireStoreUtils.getHomeVendorCategory().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:156:      vendorCategoryModel.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:157:      if (Constant.restaurantList != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:158:        List<String> usedCategoryIds = Constant.restaurantList!.expand((vendor) => vendor.categoryID 
?? []).whereType<String>().toSet().toList();
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:159:        vendorCategoryModel.value = vendorCategoryModel.where((category) => 
usedCategoryIds.contains(category.id)).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:160:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:161:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:162:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:163:    await FireStoreUtils.getHomeTopBanner().then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:164:      bannerModel.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:165:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:185:      if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:186:        for (int i = 0; i < value.length; i++) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:187:          if (Constant.isPointInPolygon(LatLng(Constant.selectedLocation.location?.latitude ?? 0.0, 
Constant.selectedLocation.location?.longitude ?? 0.0), value[i].area!)) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:188:            Constant.selectedZone = value[i];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:189:            Constant.isZoneAvailable = true;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:190:            break;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:191:          } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:192:            Constant.selectedZone = value[i];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_con
troller.dart:193:            Constant.isZoneAvailable = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:179:  Future<void> getPaymentSettings() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:180:    await FireStoreUtils.getPaymentSettingsData().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:181:      payFastModel.value = 
PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:182:      mercadoPagoModel.value = 
MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:183:      payPalModel.value = 
PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:184:      stripeModel.value = 
StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:185:      flutterWaveModel.value = 
FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:186:      payStackModel.value = 
PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:187:      paytmModel.value = 
PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:188:      razorPayModel.value = 
RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:189:      cashOnDeliverySettingModel.value = 
CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:190:      midTransModel.value = 
MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:191:      orangeMoneyModel.value = 
OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:192:      xenditModel.value = 
Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:193:      walletSettingModel.value = 
WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:194:      if (walletSettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:195:        selectedPaymentMethod.value = PaymentGateway.wallet.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:196:      } else if (stripeModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:197:        selectedPaymentMethod.value = PaymentGateway.stripe.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:198:      } else if (payPalModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:199:        selectedPaymentMethod.value = PaymentGateway.paypal.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:215:        selectedPaymentMethod.value = PaymentGateway.xendit.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:216:      }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:217:      Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:218:      Stripe.merchantIdentifier = 'GoRide';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:219:      Stripe.instance.applySettings();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:220:      setRef();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:221:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:222:      razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:223:      razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:326:      var lo1 = jsonEncode(e);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:327:      var lo2 = jsonDecode(lo1);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:328:      StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:329:      ShowToastDialog.showToast(lom.error.message);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:330:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:331:      ShowToastDialog.showToast(e.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:332:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:333:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:334:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:644:      ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:645:    }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:646:    return GetPaymentTxtTokenModel.fromJson(data);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:647:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:648:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:649:  ///RazorPay payment function
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:650:  final Razorpay razorPay = Razorpay();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:651:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:652:  void openCheckout({required amount, required orderId}) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:868:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:869:      if (response.statusCode == 200 || response.statusCode == 201) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:870:        XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:871:        return model;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:872:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:873:        return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:874:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:875:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\gift_card_con
troller.dart:876:      return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\global_settin
g_controller.dart:21:    FireStoreUtils.fireStore.collection(CollectionName.currencies).where("isActive", isEqualTo: 
true).snapshots().listen((event) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\global_settin
g_controller.dart:22:      if (event.docs.isNotEmpty) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\global_settin
g_controller.dart:23:        Constant.currencyModel = CurrencyModel.fromJson(event.docs.first.data());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\global_settin
g_controller.dart:24:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\global_settin
g_controller.dart:25:        Constant.currencyModel = CurrencyModel(id: "", code: "USD", decimal: 2, isactive: true, 
name: "US Dollar", symbol: "\$", symbolatright: false);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\global_settin
g_controller.dart:26:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\global_settin
g_controller.dart:27:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\global_settin
g_controller.dart:28:    await FireStoreUtils.getSettings();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\global_settin
g_controller.dart:29:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:50:      senderId: userModel.value.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:51:      receiverId: 'admin',
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:52:      createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:53:      orderId: null,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:54:      lastMessage: messageController.value.text,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:55:      lastMessageType: messageType,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:56:      type: 'adminchat',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:57:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:58:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:64:      senderId: FireStoreUtils.getCurrentUid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:65:      receiverId: Constant.adminType,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:66:      createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:67:      url: url,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:68:      orderId: null,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:69:      messageType: messageType,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:70:      videoThumbnail: videoThumbnail,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:71:      seen: false,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\help_support_
controller.dart:72:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:41:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:42:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:43:  RxList<VendorCategoryModel> vendorCategoryModel = <VendorCategoryModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:44:  RxList<VendorCategoryModel> categoryWiseProductList = <VendorCategoryModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:45:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:46:  RxList<VendorModel> allNearestRestaurant = <VendorModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:47:  RxList<VendorModel> newArrivalRestaurantList = <VendorModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:48:  RxList<AdvertisementModel> advertisementList = <AdvertisementModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:49:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:50:  RxList<BannerModel> bannerModel = <BannerModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:51:  RxList<BannerModel> bannerBottomModel = <BannerModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:52:  RxList<BrandsModel> brandList = <BrandsModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:53:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:65:      newArrivalRestaurantList.addAll(event);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:66:      Constant.restaurantList = allNearestRestaurant;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:67:      List<String> usedCategoryIds = allNearestRestaurant.expand((vendor) => vendor.categoryID 
?? []).whereType<String>().toSet().toList();
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:68:      vendorCategoryModel.value = vendorCategoryModel.where((category) => 
usedCategoryIds.contains(category.id)).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:69:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:70:      newArrivalRestaurantList.sort((a, b) => (b.createdAt ?? 
Timestamp.now()).toDate().compareTo((a.createdAt ?? Timestamp.now()).toDate()));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:71:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:72:      if (Constant.isEnableAdsFeature == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:73:        await FireStoreUtils.getAllAdvertisement().then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:74:          advertisementList.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:75:          for (var element1 in value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:76:            for (var element in allNearestRestaurant) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:101:  Future<void> getVendorCategory() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:102:    await FireStoreUtils.getHomeVendorCategory().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:103:      vendorCategoryModel.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:104:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:105:    await FireStoreUtils.getHomePageShowCategory().then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:106:      categoryWiseProductList.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:107:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:108:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\home_e_commer
ce_controller.dart:109:    await FireStoreUtils.getHomeTopBanner().then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:146:      if (!userSnapshot.exists) return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:147:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:148:      userModel.value = UserModel.fromJson(userSnapshot.data()!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:149:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:150:      if (userModel.value.inProgressOrderID != null && 
userModel.value.inProgressOrderID!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:151:        String? validRideId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:152:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:153:        for (String id in userModel.value.inProgressOrderID!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:154:          final rideDoc = await 
FireStoreUtils.fireStore.collection(CollectionName.rides).doc(id).get();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:164:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:165:          final rideData = rideSnapshot.data()!;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:166:          currentOrder.value = CabOrderModel.fromJson(rideData);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:167:          final status = currentOrder.value.status;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:168:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:169:          if (status == Constant.driverAccepted || status == Constant.orderInTransit) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:170:            
FireStoreUtils.fireStore.collection(CollectionName.users).doc(currentOrder.value.driverId).snapshots().listen((event) 
async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:171:              if (event.exists && event.data() != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:172:                UserModel driverModel0 = UserModel.fromJson(event.data()!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:173:                driverModel.value = driverModel0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:174:                await updateDriverRoute(driverModel0);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:175:              }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:176:            });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:177:          }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:178:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:196:        bottomSheetType.value = 'location';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:197:        if (Constant.currentLocation != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:198:          setDepartureMarker(Constant.currentLocation!.latitude, 
Constant.currentLocation!.longitude);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:199:          searchPlaceNameOSM();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:200:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:201:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:202:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:203:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:204:    final coupons = await FireStoreUtils.getCabCoupon();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:210:      final order = currentOrder.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:211:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:212:      final driverLat = driverModel.location!.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:213:      final driverLng = driverModel.location!.longitude ?? 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:214:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:215:      if (driverLat == 0.0 || driverLng == 0.0) return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:216:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:217:      // Get pickup and destination
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:218:      final pickupLat = order.sourceLocation?.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:219:      final pickupLng = order.sourceLocation?.longitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:220:      final destLat = order.destinationLocation?.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:221:      final destLng = order.destinationLocation?.longitude ?? 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:222:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:223:      if (Constant.selectedMapType == 'osm') {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:224:        /// For OpenStreetMap
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:225:        routePoints.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:226:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:227:        if (order.status == Constant.driverAccepted) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:252:      if (order.driver == null || driverModel.location == null) return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:253:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:254:      final driverLat = driverModel.location!.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:255:      final driverLng = driverModel.location!.longitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:256:      final pickupLat = order.sourceLocation?.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:257:      final pickupLng = order.sourceLocation?.longitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:258:      final destLat = order.destinationLocation?.latitude ?? 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:259:      final destLng = order.destinationLocation?.longitude ?? 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:260:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:261:      markers.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:262:      osmMarker.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:263:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:264:      final departureBytes = await 
Constant().getBytesFromAsset('assets/images/location_black3x.png', 50);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:265:      final destinationBytes = await 
Constant().getBytesFromAsset('assets/images/location_orange3x.png', 50);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:340:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:341:  Future<void> fetchGoogleRouteBetween(LatLng originPoint, LatLng destPoint) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:342:    final origin = '${originPoint.latitude},${originPoint.longitude}';
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:343:    final destination = '${destPoint.latitude},${destPoint.longitude}';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:344:    final url = Uri.parse(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:345:      'https://maps.googleapis.com/maps/api/directions/json'
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:346:      '?origin=$origin&destination=$destination'
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:347:      '&mode=driving&key=${Constant.mapAPIKey}',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:348:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:349:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:356:        final encodedPolyline = route['overview_polyline']['points'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:357:        final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:358:        final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:359:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:360:        addPolyLine(coordinates);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:361:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:362:        // Distance + duration update
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:363:        final leg = route['legs'][0];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:364:        final totalDistance = leg['distance']['value'] / 1000.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:365:        final totalDuration = leg['duration']['value'] / 60.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:366:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:467:  Future<void> placeOrder() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:468:    DestinationLocation sourceLocation = DestinationLocation(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:469:      latitude: Constant.selectedMapType == 'osm' ? departureLatLongOsm.value.latitude : 
departureLatLong.value.latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:470:      longitude: Constant.selectedMapType == 'osm' ? departureLatLongOsm.value.longitude : 
departureLatLong.value.longitude,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:471:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:472:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:473:    DestinationLocation destinationLocation = DestinationLocation(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:474:      latitude: Constant.selectedMapType == 'osm' ? destinationLatLongOsm.value.latitude : 
destinationLatLong.value.latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:475:      longitude: Constant.selectedMapType == 'osm' ? destinationLatLongOsm.value.longitude : 
destinationLatLong.value.longitude,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:476:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:477:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:478:    CabOrderModel orderModel = CabOrderModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:479:    orderModel.id = const Uuid().v4();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:480:    orderModel.distance = distance.value.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:481:    orderModel.duration = duration.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:511:    orderModel.rideType = 'intercity';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:512:    orderModel.roundTrip = false;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:513:    orderModel.sectionId = Constant.sectionConstantModel!.id;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:514:    orderModel.createdAt = Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:515:    orderModel.otpCode = (maths.Random().nextInt(9000) + 1000).toString(); // Generate a 4-digit 
OTP
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:516:    orderModel.status = Constant.orderPlaced;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:517:    orderModel.scheduleDateTime = Timestamp.now();
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:518:    log("Order Model : ${orderModel.toJson()}");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:519:    ShowToastDialog.showLoader("Please wait".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:520:    await FireStoreUtils.cabOrderPlace(orderModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:521:    await FireStoreUtils.sendCabBookEmail(orderModel: orderModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:522:    userModel.value.inProgressOrderID!.add(orderModel.id);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:523:    await FireStoreUtils.updateUser(userModel.value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:524:    ShowToastDialog.closeLoader();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:576:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:577:    osmMarker.add(marker);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:578:    if (departureLatLongOsm.value.latitude != 0 && destinationLatLongOsm.value.latitude != 0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:579:      getDirections();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:580:      animateToSource(lat, lng);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:581:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:582:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:583:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:584:  void _setGoogleMarker(double lat, double lng, {required bool isDeparture}) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:602:    mapController.animateCamera(CameraUpdate.newLatLngZoom(pos, 14));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:603:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:604:    if (departureLatLong.value.latitude != 0 && destinationLatLong.value.latitude != 0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:605:      getDirections();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:606:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:607:      mapController.animateCamera(CameraUpdate.newCameraPosition(CameraPosition(target: 
LatLng(lat, lng), zoom: 14)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:608:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:609:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:610:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:614:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:615:      // Only add valid source
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:616:      if (departureLatLongOsm.value.latitude != 0.0 && departureLatLongOsm.value.longitude != 
0.0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:617:        wayPoints.add(departureLatLongOsm.value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:618:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:619:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:620:      // Only add valid destination
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:621:      if (destinationLatLongOsm.value.latitude != 0.0 && destinationLatLongOsm.value.longitude 
!= 0.0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:622:        wayPoints.add(destinationLatLongOsm.value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:623:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:624:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:625:      if (!isStopMarker) osmMarker.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:626:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:627:      // Add source marker
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:628:      if (departureLatLongOsm.value.latitude != 0.0 && departureLatLongOsm.value.longitude != 
0.0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:629:        osmMarker.add(flutterMap.Marker(point: departureLatLongOsm.value, width: 40, height: 40, 
child: departureIconOsm!));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:630:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:631:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:632:      // Add destination marker
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:633:      if (destinationLatLongOsm.value.latitude != 0.0 && destinationLatLongOsm.value.longitude 
!= 0.0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:634:        osmMarker.add(flutterMap.Marker(point: destinationLatLongOsm.value, width: 40, height: 
40, child: destinationIconOsm!));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:635:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:636:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:637:      if (wayPoints.length >= 2) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:638:        await fetchRouteWithWaypoints(wayPoints);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:639:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:645:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:646:  Future<void> fetchGoogleRouteWithWaypoints() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:647:    if (departureLatLong.value.latitude == 0.0 || destinationLatLong.value.latitude == 0.0) 
return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:648:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:649:    final origin = '${departureLatLong.value.latitude},${departureLatLong.value.longitude}';
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:650:    final destination = 
'${destinationLatLong.value.latitude},${destinationLatLong.value.longitude}';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:651:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:652:    final url = Uri.parse(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:653:      'https://maps.googleapis.com/maps/api/directions/json'
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:654:      '?origin=$origin&destination=$destination'
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:655:      '&mode=driving&key=${Constant.mapAPIKey}',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:656:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:667:        final encodedPolyline = route['overview_polyline']['points'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:668:        final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:669:        final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:670:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:671:        addPolyLine(coordinates);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:672:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:673:        // Distance & Duration
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:674:        num totalDistance = 0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:675:        num totalDuration = 0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:676:        for (var leg in legs) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:677:          totalDistance += leg['distance']['value']!; // meters
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:699:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:700:  Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:701:    final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:702:    final url = 
Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:703:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:704:    try {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:705:      final response = await http.get(url);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:706:      if (response.statusCode == 200) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:707:        final decoded = json.decode(response.body);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:708:        final geometry = decoded['routes'][0]['geometry']['coordinates'] as List;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:709:        final dist = decoded['routes'][0]['distance'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:710:        final dur = decoded['routes'][0]['duration'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:711:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:712:        routePoints.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:713:        routePoints.addAll(geometry.map((coord) => latlong.LatLng(coord[1], coord[0])));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:714:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:748:  double getBoundsZoomLevel(flutterMap.LatLngBounds bounds) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:749:    // Simple heuristic: zoom out for larger bounds
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:750:    final latDiff = (bounds.northEast.latitude - bounds.southWest.latitude).abs();
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:751:    final lngDiff = (bounds.northEast.longitude - bounds.southWest.longitude).abs();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:752:    double maxDiff = math.max(latDiff, lngDiff);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:753:    if (maxDiff < 0.005) return 18.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:754:    if (maxDiff < 0.01) return 16.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:755:    if (maxDiff < 0.05) return 14.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:756:    if (maxDiff < 0.1) return 12.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:757:    if (maxDiff < 0.5) return 10.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:772:  Future<void> updateCameraLocationToFitPolyline(List<LatLng> points, GoogleMapController? 
mapController) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:773:    if (mapController == null || points.isEmpty) return;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:774:    double minLat = points.first.latitude, maxLat = points.first.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:775:    double minLng = points.first.longitude, maxLng = points.first.longitude;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:776:    for (final p in points) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:777:      if (p.latitude < minLat) minLat = p.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:778:      if (p.latitude > maxLat) maxLat = p.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:779:      if (p.longitude < minLng) minLng = p.longitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:780:      if (p.longitude > maxLng) maxLng = p.longitude;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:781:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:782:    final bounds = LatLngBounds(southwest: LatLng(minLat, minLng), northeast: LatLng(maxLat, 
maxLng));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:783:    final cameraUpdate = CameraUpdate.newLatLngBounds(bounds, 50);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:784:    await checkCameraLocation(cameraUpdate, mapController);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:785:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:786:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:787:  Future<void> animateToSource(double lat, double long) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:788:    final hasBothCoords = departureLatLongOsm.value.latitude != 0.0 && 
destinationLatLongOsm.value.latitude != 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:789:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:790:    if (hasBothCoords) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:791:      await calculateZoomLevel(source: departureLatLongOsm.value, destination: 
destinationLatLongOsm.value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:792:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:793:      mapOsmController.move(latlong.LatLng(lat, long), 10);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:794:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:807:    double computeZoom(double screenPx, double worldPx, double fraction) => math.log(screenPx / 
worldPx / fraction) / math.ln2;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:808:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:809:    final north = bounds.northEast.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:810:    final south = bounds.southWest.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:811:    final east = bounds.northEast.longitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:812:    final west = bounds.southWest.longitude;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:813:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:814:    final latDelta = (north - south).abs();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:815:    final lngDelta = (east - west).abs();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:816:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:817:    final center = bounds.center;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:818:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:835:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:836:    final bounds = LatLngBounds(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:837:      southwest: LatLng(math.min(source.latitude, destination.latitude), 
math.min(source.longitude, destination.longitude)),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:838:      northeast: LatLng(math.max(source.latitude, destination.latitude), 
math.max(source.longitude, destination.longitude)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:839:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:840:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:841:    final cameraUpdate = CameraUpdate.newLatLngBounds(bounds, 90);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:842:    await checkCameraLocation(cameraUpdate, mapController);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:843:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:844:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:848:    final l2 = await mapController.getVisibleRegion();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:849:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:850:    if (l1.southwest.latitude == -90 || l2.southwest.latitude == -90) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:851:      await checkCameraLocation(cameraUpdate, mapController);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:852:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:853:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:854:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:855:  Future<void> setIcons() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:856:    try {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:873:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:874:  void clearMapDataIfLocationsRemoved() {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:875:    final isSourceEmpty = departureLatLongOsm.value.latitude == 0.0 && 
departureLatLongOsm.value.longitude == 0.0;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:876:    final isDestinationEmpty = destinationLatLongOsm.value.latitude == 0.0 && 
destinationLatLongOsm.value.longitude == 0.0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:877:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:878:    if (isSourceEmpty || isDestinationEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:879:      // Clear polylines
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:880:      polyLines.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:881:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:882:      // Clear OSM markers (if using OSM)
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:929:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:930:  Future<void> searchPlaceNameOSM() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:931:    final url = Uri.parse('https://nominatim.openstreetmap.org/reverse?lat=${departureLatLongOsm.
value.latitude}&lon=${departureLatLongOsm.value.longitude}&format=json');
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:932:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:933:    final response = await http.get(url, headers: {'User-Agent': 'FlutterMapApp/1.0 
(menil.siddhiinfosoft@gmail.com)'});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:934:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:935:    if (response.statusCode == 200) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:936:      log("response.body :: ${response.body}");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:937:      Map<String, dynamic> data = json.decode(response.body);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:941:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:942:  Future<void> searchPlaceNameGoogle() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:943:    final lat = departureLatLong.value.latitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:944:    final lng = departureLatLong.value.longitude;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:945:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:946:    final url = 
Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:947:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:948:    final response = await http.get(url);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:949:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:950:    if (response.statusCode == 200) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:987:  Future<void> getPaymentSettings() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:988:    await FireStoreUtils.getPaymentSettingsData().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:989:      stripeModel.value = 
StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:990:      payPalModel.value = 
PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:991:      payStackModel.value = 
PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:992:      mercadoPagoModel.value = 
MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:993:      flutterWaveModel.value = 
FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:994:      paytmModel.value = 
PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:995:      payFastModel.value = 
PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:996:      razorPayModel.value = 
RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:997:      midTransModel.value = 
MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:998:      orangeMoneyModel.value = 
OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:999:      xenditModel.value = 
Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1000:      walletSettingModel.value = 
WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1001:      cashOnDeliverySettingModel.value = 
CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1002:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1003:      if (walletSettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1004:        selectedPaymentMethod.value = PaymentGateway.wallet.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1005:      } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1006:        selectedPaymentMethod.value = PaymentGateway.cod.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1007:      } else if (stripeModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1026:        selectedPaymentMethod.value = PaymentGateway.xendit.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1027:      }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1028:      Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1029:      Stripe.merchantIdentifier = 'GHALBIT MARITRONIX Customer';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1030:      Stripe.instance.applySettings();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1031:      setRef();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1032:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1033:      razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1034:      razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1075:      var lo1 = jsonEncode(e);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1076:      var lo2 = jsonDecode(lo1);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1077:      StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1078:      ShowToastDialog.showToast(lom.error.message);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1079:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1080:      ShowToastDialog.showToast(e.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1081:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1082:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1083:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1395:      ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1396:    }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1397:    return GetPaymentTxtTokenModel.fromJson(data);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1398:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1399:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1400:  ///RazorPay payment function
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1401:  final Razorpay razorPay = Razorpay();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1402:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1403:  void openCheckout({required amount, required orderId}) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1624:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1625:      if (response.statusCode == 200 || response.statusCode == 201) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1626:        XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1627:        return model;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1628:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1629:        return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1630:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1631:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\Intercity_hom
e_controller.dart:1632:      return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:62:    orderSub = FireStoreUtils.fireStore.collection(CollectionName.vendorOrders).doc(orderModel.valu
e.id).snapshots().listen((orderSnap) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:63:      if (orderSnap.data() == null) return;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:64:      orderModel.value = OrderModel.fromJson(orderSnap.data()!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:65:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:66:      if (orderModel.value.driverID != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:67:        driverSub?.cancel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:68:        driverSub = FireStoreUtils.fireStore.collection(CollectionName.users).doc(orderModel.value.
driverID).snapshots().listen((driverSnap) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:69:          if (driverSnap.data() == null) return;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:70:          driverUserModel.value = UserModel.fromJson(driverSnap.data()!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:71:          await updateLiveTracking();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:72:        });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:73:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:74:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:75:      if (orderModel.value.status == Constant.orderCompleted) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:76:        Get.back();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:82:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:83:  Future<void> updateLiveTracking() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:84:    driverCurrent.value = location.LatLng(driverUserModel.value.location?.latitude ?? 0.0, 
driverUserModel.value.location?.longitude ?? 0.0);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:85:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:86:    source.value = location.LatLng(orderModel.value.vendor?.latitude ?? 0.0, 
orderModel.value.vendor?.longitude ?? 0.0);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:87:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:88:    destination.value = location.LatLng(orderModel.value.address?.location?.latitude ?? 0.0, 
orderModel.value.address?.location?.longitude ?? 0.0);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:89:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:90:    if (orderModel.value.status == Constant.orderPlaced || orderModel.value.status == 
Constant.orderAccepted) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:91:      await showDriverToRestaurantRoute();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:92:    } else if (orderModel.value.status == Constant.orderShipped || orderModel.value.status == 
Constant.orderInTransit) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:93:      await showDriverToCustomerRoute();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:94:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:103:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:104:      await getPolyline(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:105:        sourceLatitude: driverCurrent.value.latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:106:        sourceLongitude: driverCurrent.value.longitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:107:        destinationLatitude: source.value.latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:108:        destinationLongitude: source.value.longitude,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:109:        showPickup: true,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:110:        showDrop: false,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:111:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:112:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:113:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:114:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:121:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:122:      await getPolyline(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:123:        sourceLatitude: driverCurrent.value.latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:124:        sourceLongitude: driverCurrent.value.longitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:125:        destinationLatitude: destination.value.latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:126:        destinationLongitude: destination.value.longitude,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:127:        showPickup: false,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:128:        showDrop: true,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:129:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:130:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:131:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:132:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:139:  Future<void> fetchRoute(location.LatLng source, location.LatLng destination) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:140:    final url = Uri.parse(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:141:      'https://router.project-osrm.org/route/v1/driving/${source.longitude},${source.latitude};${d
estination.longitude},${destination.latitude}?overview=full&geometries=geojson',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:142:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:143:    final response = await http.get(url);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:144:    if (response.statusCode == 200) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:145:      final data = json.decode(response.body);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:146:      final coords = data['routes'][0]['geometry']['coordinates'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:147:      routePoints.value = coords.map<location.LatLng>((c) => location.LatLng(c[1].toDouble(), 
c[0].toDouble())).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:148:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:149:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:150:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:151:  void animateToOSMLocation(location.LatLng loc) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:152:    osmMapController.move(loc, 15);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:171:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:172:  Future<void> getPolyline({
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:173:    required double sourceLatitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:174:    required double sourceLongitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:175:    required double destinationLatitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:176:    required double destinationLongitude,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:177:    bool showPickup = false,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:178:    bool showDrop = false,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:179:  }) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:180:    List<LatLng> polylineCoordinates = [];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:181:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:182:    PolylineResult result = await polylinePoints.getRouteBetweenCoordinates(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:183:      request: PolylineRequest(origin: PointLatLng(sourceLatitude, sourceLongitude), destination: 
PointLatLng(destinationLatitude, destinationLongitude), mode: TravelMode.driving),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:184:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:185:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:186:    if (result.points.isNotEmpty) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:187:      polylineCoordinates = result.points.map((e) => LatLng(e.latitude, e.longitude)).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:188:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:189:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:190:    addGoogleMarkers(showPickup: showPickup, showDrop: showDrop);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:191:    _addPolyLine(polylineCoordinates);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:192:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:193:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:194:  void addGoogleMarkers({bool showPickup = false, bool showDrop = false}) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:195:    markers.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:196:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:197:    // Always show driver marker
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:199:      addMarker(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:200:        id: "Driver",
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:201:        latitude: driverUserModel.value.location?.latitude ?? 0.0,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:202:        longitude: driverUserModel.value.location?.longitude ?? 0.0,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:203:        descriptor: driverIcon!,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:204:        rotation: (driverUserModel.value.rotation ?? 0).toDouble(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:205:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:206:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:207:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:208:    if (showPickup && orderModel.value.vendor?.latitude != null && pickupIcon != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:209:      addMarker(id: "Pickup", latitude: orderModel.value.vendor!.latitude ?? 0.0, longitude: 
orderModel.value.vendor!.longitude ?? 0.0, descriptor: pickupIcon!, rotation: 0.0);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:210:    } else if (showDrop && orderModel.value.address?.location?.latitude != null && dropoffIcon != 
null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:211:      addMarker(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:212:        id: "Drop",
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:213:        latitude: orderModel.value.address!.location!.latitude ?? 0.0,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:214:        longitude: orderModel.value.address!.location!.longitude ?? 0.0,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:215:        descriptor: dropoffIcon!,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:216:        rotation: 0.0,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:217:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:218:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:219:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:220:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:221:  void addMarker({required String id, required double latitude, required double longitude, 
required BitmapDescriptor descriptor, required double rotation}) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:222:    MarkerId markerId = MarkerId(id);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:223:    markers[markerId] = Marker(markerId: markerId, icon: descriptor, position: LatLng(latitude, 
longitude), rotation: rotation, anchor: const Offset(0.5, 0.5));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:224:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:225:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:226:  Future<void> addMarkerIcons() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:227:    if (Constant.selectedMapType == 'osm') return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:228:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:229:    pickupIcon = BitmapDescriptor.fromBytes(await 
Constant().getBytesFromAsset('assets/images/pickup.png', 100));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:232:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:233:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:234:  Future<void> _addPolyLine(List<LatLng> polylineCoordinates) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:235:    if (polylineCoordinates.isEmpty) return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:236:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:237:    PolylineId id = const PolylineId("poly");
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:238:    Polyline polyline = Polyline(polylineId: id, color: Colors.blue, width: 5, points: 
polylineCoordinates);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:239:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:240:    polyLines[id] = polyline;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:241:    await updateCameraBounds(polylineCoordinates);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:242:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:243:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:244:  Future<void> updateCameraBounds(List<LatLng> points) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:245:    if (mapController == null || points.isEmpty) return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:246:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:247:    double minLat = points.map((e) => e.latitude).reduce((a, b) => a < b ? a : b);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:248:    double maxLat = points.map((e) => e.latitude).reduce((a, b) => a > b ? a : b);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:249:    double minLng = points.map((e) => e.longitude).reduce((a, b) => a < b ? a : b);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:250:    double maxLng = points.map((e) => e.longitude).reduce((a, b) => a > b ? a : b);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:251:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:252:    LatLngBounds bounds = LatLngBounds(southwest: LatLng(minLat, minLng), northeast: 
LatLng(maxLat, maxLng));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:253:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:254:    await mapController!.animateCamera(CameraUpdate.newLatLngBounds(bounds, 80));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:255:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\live_tracking
_controller.dart:256:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:39:          flutterMap.Marker(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:40:            point: location.LatLng(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:41:              element.latitude ?? 0.0,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:42:              element.longitude ?? 0.0,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:43:            ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:44:            width: 40,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:45:            height: 40,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:46:            child: GestureDetector(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:47:              onTap: () {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:48:                Get.to(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:49:                  RestaurantDetailsScreen(),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:50:                  arguments: {"vendorModel": element},
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:51:                );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:52:              },
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:53:              child: departureOsmIcon,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:54:            ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:55:          ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:56:        );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:64:      for (var element in homeController.allNearestRestaurant) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:65:        addMarker(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:66:          latitude: element.latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:67:          longitude: element.longitude,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:68:          id: element.id.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:69:          rotation: 0,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:70:          descriptor: parkingMarker!,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:71:          title: element.title.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:72:        );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:73:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:78:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:79:  void addMarker({
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:80:    required double? latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:81:    required double? longitude,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:82:    required String id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:83:    required BitmapDescriptor descriptor,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:84:    required double? rotation,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:85:    required String title,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:86:  }) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:87:    MarkerId markerId = MarkerId(id);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:98:            const RestaurantDetailsScreen(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:99:            arguments: {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:100:              "vendorModel": homeController.allNearestRestaurant[index],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:101:            },
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:102:          );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:103:        },
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:104:      ),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:105:      position: LatLng(latitude ?? 0.0, longitude ?? 0.0),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:106:      rotation: rotation ?? 0.0,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:107:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:108:    markers[markerId] = marker;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:109:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\map_view_cont
roller.dart:110:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:233:  Future<void> getPaymentSettings() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:234:    await FireStoreUtils.getPaymentSettingsData().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:235:      stripeModel.value = 
StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:236:      payPalModel.value = 
PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:237:      payStackModel.value = 
PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:238:      mercadoPagoModel.value = 
MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:239:      flutterWaveModel.value = 
FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:240:      paytmModel.value = 
PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:241:      payFastModel.value = 
PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:242:      razorPayModel.value = 
RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:243:      midTransModel.value = 
MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:244:      orangeMoneyModel.value = 
OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:245:      xenditModel.value = 
Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:246:      walletSettingModel.value = 
WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:247:      cashOnDeliverySettingModel.value = 
CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:248:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:249:      if (walletSettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:250:        selectedPaymentMethod.value = PaymentGateway.wallet.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:251:      } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:252:        selectedPaymentMethod.value = PaymentGateway.cod.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:253:      } else if (stripeModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:272:        selectedPaymentMethod.value = PaymentGateway.xendit.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:273:      }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:274:      Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:275:      Stripe.merchantIdentifier = 'GHALBIT MARITRONIX Customer';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:276:      Stripe.instance.applySettings();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:277:      setRef();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:278:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:279:      razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:280:      razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:321:      var lo1 = jsonEncode(e);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:322:      var lo2 = jsonDecode(lo1);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:323:      StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:324:      ShowToastDialog.showToast(lom.error.message);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:325:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:326:      ShowToastDialog.showToast(e.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:327:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:328:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:329:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:641:      ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:642:    }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:643:    return GetPaymentTxtTokenModel.fromJson(data);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:644:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:645:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:646:  ///RazorPay payment function
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:647:  final Razorpay razorPay = Razorpay();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:648:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:649:  void openCheckout({required amount, required orderId}) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:870:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:871:      if (response.statusCode == 200 || response.statusCode == 201) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:872:        XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:873:        return model;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:874:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:875:        return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:876:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:877:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\my_cab_bookin
g_controller.dart:878:      return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:158:          author: Constant.userModel!,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:159:          quantity: double.parse(quantity.value.toString()),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:160:          sectionId: Constant.sectionConstantModel!.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:161:          address: selectedAddress.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:162:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:163:          provider: provider.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:164:          status: Constant.orderPlaced,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:165:          scheduleDateTime: Timestamp.fromDate(selectedDateTime.value),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:166:          notes: descriptionController.value.text,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:190:          authorID: FireStoreUtils.getCurrentUid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:191:          author: Constant.userModel!,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:192:          sectionId: Constant.sectionConstantModel!.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:193:          address: selectedAddress.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:194:          status: Constant.orderPlaced,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:195:          createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:196:          quantity: double.parse(quantity.value.toString()),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:197:          provider: provider.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:198:          extraPaymentStatus: true,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:199:          scheduleDateTime: Timestamp.fromDate(selectedDateTime.value),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:200:          notes: descriptionController.value.text,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_boo
king_controller.dart:201:          adminCommission:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:39:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:40:  Future<void> getReviewList() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:41:    await FireStoreUtils.getCategoryById(provider.categoryId.toString()).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:42:      if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:43:        categoryTitle.value = value.title.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:44:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:45:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:46:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:47:    await FireStoreUtils.getSubCategoryById(provider.subCategoryId.toString()).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:48:      if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:49:        subCategoryTitle.value = value.title.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:50:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:51:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:52:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_det
ails_controller.dart:53:    await FireStoreUtils.getReviewByProviderServiceId(provider.id.toString()).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:49:            List<ProviderServiceModel> filteredList = providerServiceList.where((service) => 
service.author == provider).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:50:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:51:            filteredList.sort((a, b) => a.createdAt!.compareTo(b.createdAt!));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:52:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:53:            for (int index = 0; index < filteredList.length; index++) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:54:              final service = filteredList[index];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:55:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:56:              if (Constant.isSubscriptionModelApplied == true || 
Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:57:                if (service.subscriptionPlan?.itemLimit == "-1") {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:82:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:83:  /// Get category by id safely from cached categories
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:84:  Future<CategoryModel?> getCategory(String? categoryId) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:85:    if (categoryId == null || categoryId.isEmpty) return null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:86:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:87:    // Try to find category from cached list
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:88:    CategoryModel? cat = categories.firstWhereOrNull((element) => element.id == categoryId);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:89:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:90:    // If not found, fetch from Firestore
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:91:    cat ??= await FireStoreUtils.getCategoryById(categoryId);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:92:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:93:    categoryModel.value = cat;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:94:    return cat;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:95:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:96:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:97:  RxList<FavouriteOndemandServiceModel> lstFav = <FavouriteOndemandServiceModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:104:      if (contain.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:105:        FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandServiceModel(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:106:          section_id: provider.sectionId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:107:          service_id: provider.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:108:          user_id: FireStoreUtils.getCurrentUid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:109:          serviceAuthorId: provider.author,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:110:        );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:111:        FireStoreUtils.removeFavouriteOndemandService(favouriteModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:112:        lstFav.removeWhere((item) => item.service_id == provider.id);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:113:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:114:        FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandServiceModel(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:115:          section_id: provider.sectionId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:116:          service_id: provider.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:117:          user_id: FireStoreUtils.getCurrentUid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:118:          serviceAuthorId: provider.author,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:119:        );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:120:        FireStoreUtils.setFavouriteOndemandSection(favouriteModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:121:        lstFav.add(favouriteModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:128:      if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:129:        for (int i = 0; i < value.length; i++) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:130:          if (Constant.isPointInPolygon(LatLng(Constant.selectedLocation.location?.latitude ?? 
0.0, Constant.selectedLocation.location?.longitude ?? 0.0), value[i].area!)) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:131:            Constant.selectedZone = value[i];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:132:            Constant.isZoneAvailable = true;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:133:            break;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:134:          } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:135:            Constant.selectedZone = value[i];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_hom
e_controller.dart:136:            Constant.isZoneAvailable = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:131:      uname: '${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:132:      profile: Constant.userModel?.profilePictureURL,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:133:      createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:134:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:135:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:136:    await FireStoreUtils.updateReviewById(rate);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:137:    await FireStoreUtils.updateUser(provider.value!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:138:    await FireStoreUtils.updateProvider(providerServiceModel.value!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:139:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:158:      uname: '${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:159:      profile: Constant.userModel?.profilePictureURL,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:160:      createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:161:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:162:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:163:    await FireStoreUtils.updateReviewById(rate);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:164:    await FireStoreUtils.updateWorker(workerModel.value!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:165:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\on_demand_rev
iew_controller.dart:166:    ShowToastDialog.closeLoader();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_control
ler.dart:45:  final CartProvider cartProvider = CartProvider();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_control
ler.dart:46:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_control
ler.dart:47:  void addToCart({required CartProductModel cartProductModel}) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_control
ler.dart:48:    cartProvider.addToCart(Get.context!, cartProductModel, cartProductModel.quantity!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_control
ler.dart:49:    update();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_control
ler.dart:50:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_control
ler.dart:51:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_details
_controller.dart:161:  final CartProvider cartProvider = CartProvider();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_details
_controller.dart:162:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_details
_controller.dart:163:  void addToCart({required CartProductModel cartProductModel}) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_details
_controller.dart:164:    cartProvider.addToCart(Get.context!, cartProductModel, cartProductModel.quantity!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_details
_controller.dart:165:    update();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_details
_controller.dart:166:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\order_details
_controller.dart:167:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:157:      parcelOrder.value.adminCommissionType = 
Constant.sectionConstantModel?.adminCommision?.commissionType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:158:      parcelOrder.value.status = Constant.orderPlaced;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:159:      parcelOrder.value.createdAt = Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:160:      parcelOrder.value.author = userModel.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:161:      parcelOrder.value.authorID = FireStoreUtils.getCurrentUid();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:162:      parcelOrder.value.paymentMethod = paymentBy.value == "Receiver" ? "cod" : 
selectedPaymentMethod.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:163:      parcelOrder.value.paymentCollectByReceiver = paymentBy.value == "Receiver";
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:164:      parcelOrder.value.senderZoneId = 
Constant.getZoneId(parcelOrder.value.senderLatLong!.latitude ?? 0.0, parcelOrder.value.senderLatLong!.longitude ?? 
0.0);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:165:      parcelOrder.value.receiverZoneId = 
Constant.getZoneId(parcelOrder.value.receiverLatLong!.latitude ?? 0.0, parcelOrder.value.receiverLatLong!.longitude ?? 
0.0);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:166:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:167:      if (paymentBy.value != "Receiver") {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:168:        if (selectedPaymentMethod.value == PaymentGateway.wallet.name) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:169:          WalletTransactionModel transactionModel = WalletTransactionModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:170:            id: Constant.getUuid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:171:            amount: double.parse(totalAmount.value.toString()),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:218:  Future<void> getPaymentSettings() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:219:    await FireStoreUtils.getPaymentSettingsData().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:220:      stripeModel.value = 
StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:221:      payPalModel.value = 
PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:222:      payStackModel.value = 
PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:223:      mercadoPagoModel.value = 
MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:224:      flutterWaveModel.value = 
FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:225:      paytmModel.value = 
PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:226:      payFastModel.value = 
PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:227:      razorPayModel.value = 
RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:228:      midTransModel.value = 
MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:229:      orangeMoneyModel.value = 
OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:230:      xenditModel.value = 
Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:231:      walletSettingModel.value = 
WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:232:      cashOnDeliverySettingModel.value = 
CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:233:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:234:      if (walletSettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:235:        selectedPaymentMethod.value = PaymentGateway.wallet.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:236:      } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:237:        selectedPaymentMethod.value = PaymentGateway.cod.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:238:      } else if (stripeModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:257:        selectedPaymentMethod.value = PaymentGateway.xendit.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:258:      }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:259:      Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:260:      Stripe.merchantIdentifier = 'GHALBIT MARITRONIX Customer';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:261:      Stripe.instance.applySettings();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:262:      setRef();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:263:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:264:      razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:265:      razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:306:      var lo1 = jsonEncode(e);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:307:      var lo2 = jsonDecode(lo1);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:308:      StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:309:      ShowToastDialog.showToast(lom.error.message);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:310:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:311:      ShowToastDialog.showToast(e.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:312:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:313:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:314:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:701:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:702:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:703:    return GetPaymentTxtTokenModel.fromJson(data);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:704:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:705:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:706:  // Future<GetPaymentTxtTokenModel> initiatePayment({required double amount, 
required orderId}) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:707:  //   String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:708:  //   String callback = "";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:709:  //   if (paytmModel.value.isSandboxEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:732:  //     ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:733:  //   }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:734:  //   return GetPaymentTxtTokenModel.fromJson(data);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:735:  // }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:736:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:737:  ///RazorPay payment function
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:738:  final Razorpay razorPay = Razorpay();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:739:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:740:  void openCheckout({required amount, required orderId}) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:998:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:999:      if (response.statusCode == 200 || response.statusCode == 201) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:1000:        XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:1001:        return model;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:1002:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:1003:        return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:1004:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:1005:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
confirmation_controller.dart:1006:      return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
details_controller.dart:87:    final history = <ParcelStatus>[];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
details_controller.dart:88:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
details_controller.dart:89:    DateTime baseTime = order.createdAt?.toDate() ?? DateTime.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
details_controller.dart:90:    int minutesGap = 30;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
details_controller.dart:91:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
details_controller.dart:92:    for (int i = 0; i < steps.length; i++) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
details_controller.dart:93:      final step = steps[i];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
details_controller.dart:94:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_order_
details_controller.dart:95:      history.add(ParcelStatus(status: step, time: baseTime.add(Duration(minutes: i * 
minutesGap))));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:96:        uname: "${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:97:        profile: Constant.userModel?.profilePictureURL,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:98:        createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:99:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:100:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:101:      await FireStoreUtils.updateReviewById(updatedRating);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:102:      if (user != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:103:        await FireStoreUtils.updateUser(user);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:104:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:115:        uname: "${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:116:        profile: Constant.userModel?.profilePictureURL,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:117:        createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:118:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:119:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:120:      await FireStoreUtils.updateReviewById(newRating);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:121:      if (user != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:122:        await FireStoreUtils.updateUser(user);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\parcel_review
_controller.dart:123:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:31:  RxString productId = "".obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:32:  Rx<RatingModel> ratingModel = RatingModel().obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:33:  Rx<ProductModel> productModel = ProductModel().obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:34:  Rx<VendorModel> vendorModel = VendorModel().obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:35:  Rx<VendorCategoryModel> vendorCategoryModel = VendorCategoryModel().obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:36:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:37:  RxList<ReviewAttributeModel> reviewAttributeList = <ReviewAttributeModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:38:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:39:  RxDouble ratings = 0.0.obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:40:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:41:  RxMap<String, dynamic> reviewAttribute = <String, dynamic>{}.obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:66:      await FireStoreUtils.getProductById(productId.value.split('~').first).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:67:        if (value != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:68:          productModel.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:69:          if (ratingModel.value.id != null && ratingModel.value.id!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:70:            productReviewCount.value = value.reviewsCount! - 1;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:71:            productReviewSum.value = value.reviewsSum! - ratings.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:72:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:73:            if (value.reviewAttributes != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:74:              value.reviewAttributes!.forEach((key, value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:75:                ReviewsAttribute reviewsAttributeModel = ReviewsAttribute.fromJson(value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:76:                reviewsAttributeModel.reviewsCount = reviewsAttributeModel.reviewsCount! - 1;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:77:                reviewsAttributeModel.reviewsSum = reviewsAttributeModel.reviewsSum! - 
reviewAttribute[key];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:78:                reviewProductAttributes.addEntries([MapEntry(key, reviewsAttributeModel.toJson())]);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:79:              });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:80:            }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:81:          } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:82:            productReviewCount.value = double.parse(value.reviewsCount.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:83:            productReviewSum.value = double.parse(value.reviewsSum.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:84:            if (value.reviewAttributes != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:89:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:90:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:91:      await FireStoreUtils.getVendorById(productModel.value.vendorID.toString()).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:92:        if (value != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:93:          vendorModel.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:94:          if (ratingModel.value.id != null && ratingModel.value.id!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:95:            vendorReviewCount.value = value.reviewsCount! - 1;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:96:            vendorReviewSum.value = value.reviewsSum! - ratings.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:97:          } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:98:            vendorReviewCount.value = double.parse(value.reviewsCount.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:99:            vendorReviewSum.value = double.parse(value.reviewsSum.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:102:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:103:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:104:      await 
FireStoreUtils.getVendorCategoryByCategoryId(productModel.value.categoryID.toString()).then((value) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:105:        if (value != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:106:          vendorCategoryModel.value = value;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:107:          for (var element in vendorCategoryModel.value.reviewAttributes!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:108:            await FireStoreUtils.getVendorReviewAttribute(element).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:109:              reviewAttributeList.add(value!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:110:            });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:111:          }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:112:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:113:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:120:    if (ratings.value != 0.0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:121:      ShowToastDialog.showLoader("Please wait...".tr);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:122:      productModel.value.reviewsCount = productReviewCount.value + 1;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:123:      productModel.value.reviewsSum = productReviewSum.value + ratings.value;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:124:      productModel.value.reviewAttributes = reviewProductAttributes;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:125:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:126:      vendorModel.value.reviewsCount = vendorReviewCount.value + 1;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:127:      vendorModel.value.reviewsSum = vendorReviewSum.value + ratings.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:128:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:129:      if (reviewProductAttributes.isEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:130:        reviewAttribute.forEach((key, value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:131:          ReviewsAttribute reviewsAttributeModel = ReviewsAttribute(reviewsCount: 1, reviewsSum: 
value);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:132:          reviewProductAttributes.addEntries([MapEntry(key, reviewsAttributeModel.toJson())]);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:133:        });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:134:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:135:        reviewProductAttributes.forEach((key, value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:136:          ReviewsAttribute reviewsAttributeModel = ReviewsAttribute.fromJson(value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:137:          reviewsAttributeModel.reviewsCount = reviewsAttributeModel.reviewsCount! + 1;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:138:          reviewsAttributeModel.reviewsSum = reviewsAttributeModel.reviewsSum! + 
reviewAttribute[key];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:139:          reviewProductAttributes.addEntries([MapEntry(key, reviewsAttributeModel.toJson())]);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:140:        });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:141:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:142:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:143:      for (int i = 0; i < images.length; i++) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:144:        if (images[i].runtimeType == XFile) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:145:          String url = await Constant.uploadUserImageToFireStorage(File(images[i].path), 
"profileImage/${FireStoreUtils.getCurrentUid()}", File(images[i].path).path.split('/').last);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:157:        id: ratingModel.value.id != null && ratingModel.value.id!.isNotEmpty ? 
ratingModel.value.id : Constant.getUuid(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:158:        orderId: orderModel.value.id,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:159:        vendorId: productModel.value.vendorID,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:160:        createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:161:        uname: Constant.userModel!.fullName(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:162:        profile: Constant.userModel!.profilePictureURL,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:163:        reviewAttributes: reviewAttribute,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:164:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:165:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:166:      log(vendorModel.value.toJson().toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:167:      await FireStoreUtils.updateReviewById(ratingProduct);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:168:      await FireStoreUtils.updateVendor(vendorModel.value);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:169:      await FireStoreUtils.setProduct(productModel.value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:170:      ShowToastDialog.closeLoader();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:171:      ShowToastDialog.showToast("Rating saved successfully.".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:172:      Get.back();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:173:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:174:      ShowToastDialog.showToast("Please add rate for food item.".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rate_product_
controller.dart:175:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:73:        Constant.currentLocation = position;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:74:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:75:        // Set default coordinates for Google or OSM
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:76:        departureLatLong.value = gmaps.LatLng(position.latitude, position.longitude);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:77:        departureLatLongOsm.value = latlong.LatLng(position.latitude, position.longitude);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:78:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:79:        // Get readable address
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:80:        String address = await Utils.getAddressFromCoordinates(position.latitude, 
position.longitude);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:81:        sourceTextEditController.value.text = address;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:82:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:83:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:84:      ShowToastDialog.showToast("Unable to fetch current location".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:85:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:86:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:127:  void completeOrder() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:128:    DestinationLocation sourceLocation = DestinationLocation(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:129:      latitude: Constant.selectedMapType == 'osm' ? departureLatLongOsm.value.latitude : 
departureLatLong.value.latitude,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:130:      longitude: Constant.selectedMapType == 'osm' ? departureLatLongOsm.value.longitude : 
departureLatLong.value.longitude,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:131:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:132:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:133:    print("=====>");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:134:    print(sourceTextEditController.value.text);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:135:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:136:    RentalOrderModel rentalOrderModel = RentalOrderModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:140:    rentalOrderModel.rentalVehicleType = selectedVehicleType.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:141:    rentalOrderModel.vehicleId = selectedVehicleType.value!.id;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:142:    rentalOrderModel.sectionId = Constant.sectionConstantModel!.id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:143:    rentalOrderModel.sourceLocationName = sourceTextEditController.value.text;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:144:    rentalOrderModel.bookingDateTime = Timestamp.fromDate(selectedDate.value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:145:    rentalOrderModel.paymentMethod = selectedPaymentMethod.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:146:    rentalOrderModel.paymentStatus = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:147:    rentalOrderModel.status = Constant.orderPlaced;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:148:    rentalOrderModel.subTotal = selectedPackage.value!.baseFare;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:149:    rentalOrderModel.rentalPackageModel = selectedPackage.value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:150:    rentalOrderModel.taxSetting = Constant.orderProductTaxList;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:151:    rentalOrderModel.createdAt = Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:152:    rentalOrderModel.sourceLocation = sourceLocation;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:153:    rentalOrderModel.adminCommission = Constant.sectionConstantModel!.adminCommision!.amount;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:154:    rentalOrderModel.adminCommissionType = 
Constant.sectionConstantModel!.adminCommision!.commissionType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:155:    rentalOrderModel.sourcePoint = G(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:156:      geopoint: GeoPoint(sourceLocation.latitude ?? 0.0, sourceLocation.longitude ?? 0.0),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:157:      geohash: Geoflutterfire().point(latitude: sourceLocation.latitude ?? 0.0, longitude: 
sourceLocation.longitude ?? 0.0).hash,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:158:    );
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:159:    rentalOrderModel.zoneId = Constant.getZoneId(sourceLocation.latitude ?? 0.0, 
sourceLocation.longitude ?? 0.0);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:160:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:161:    log(rentalOrderModel.toJson().toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:162:    Get.back();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:163:    Get.back();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:164:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:165:    Get.to(() => RentalConformationScreen(), arguments: {"rentalOrderModel": rentalOrderModel});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:166:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:167:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:202:  Future<void> getPaymentSettings() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:203:    await FireStoreUtils.getPaymentSettingsData().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:204:      stripeModel.value = 
StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:205:      payPalModel.value = 
PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:206:      payStackModel.value = 
PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:207:      mercadoPagoModel.value = 
MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:208:      flutterWaveModel.value = 
FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:209:      paytmModel.value = 
PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:210:      payFastModel.value = 
PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:211:      razorPayModel.value = 
RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:212:      midTransModel.value = 
MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:213:      orangeMoneyModel.value = 
OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:214:      xenditModel.value = 
Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:215:      walletSettingModel.value = 
WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:216:      cashOnDeliverySettingModel.value = 
CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:217:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:218:      if (walletSettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:219:        selectedPaymentMethod.value = PaymentGateway.wallet.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:220:      } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:221:        selectedPaymentMethod.value = PaymentGateway.cod.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_home_c
ontroller.dart:222:      } else if (stripeModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:270:  Future<void> getPaymentSettings() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:271:    await FireStoreUtils.getPaymentSettingsData().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:272:      stripeModel.value = 
StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:273:      payPalModel.value = 
PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:274:      payStackModel.value = 
PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:275:      mercadoPagoModel.value = 
MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:276:      flutterWaveModel.value = 
FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:277:      paytmModel.value = 
PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:278:      payFastModel.value = 
PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:279:      razorPayModel.value = 
RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:280:      midTransModel.value = 
MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:281:      orangeMoneyModel.value = 
OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:282:      xenditModel.value = 
Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:283:      walletSettingModel.value = 
WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:284:      cashOnDeliverySettingModel.value = 
CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:285:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:286:      if (walletSettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:287:        selectedPaymentMethod.value = PaymentGateway.wallet.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:288:      } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:289:        selectedPaymentMethod.value = PaymentGateway.cod.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:290:      } else if (stripeModel.value.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:309:        selectedPaymentMethod.value = PaymentGateway.xendit.name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:310:      }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:311:      Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:312:      Stripe.merchantIdentifier = 'GHALBIT MARITRONIX Customer';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:313:      Stripe.instance.applySettings();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:314:      setRef();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:315:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:316:      razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:317:      razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:358:      var lo1 = jsonEncode(e);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:359:      var lo2 = jsonDecode(lo1);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:360:      StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:361:      ShowToastDialog.showToast(lom.error.message);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:362:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:363:      ShowToastDialog.showToast(e.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:364:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:365:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:366:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:678:      ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:679:    }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:680:    return GetPaymentTxtTokenModel.fromJson(data);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:681:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:682:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:683:  ///RazorPay payment function
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:684:  final Razorpay razorPay = Razorpay();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:685:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:686:  void openCheckout({required amount, required orderId}) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:905:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:906:      if (response.statusCode == 200 || response.statusCode == 201) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:907:        XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:908:        return model;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:909:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:910:        return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:911:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:912:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_order_
details_controller.dart:913:      return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:97:        uname: "${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:98:        profile: Constant.userModel?.profilePictureURL,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:99:        createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:100:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:101:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:102:      await FireStoreUtils.updateReviewById(updatedRating);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:103:      if (user != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:104:        await FireStoreUtils.updateUser(user);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:105:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:117:        uname: "${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:118:        profile: Constant.userModel?.profilePictureURL,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:119:        createdAt: Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:120:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:121:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:122:      await FireStoreUtils.updateReviewById(newRating);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:123:      if (user != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:124:        await FireStoreUtils.updateUser(user);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\rental_review
_controller.dart:125:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:32:  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:33:  RxList<FavouriteItemModel> favouriteItemList = <FavouriteItemModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:34:  RxList<ProductModel> allProductList = <ProductModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:35:  RxList<ProductModel> productList = <ProductModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:36:  RxList<VendorCategoryModel> vendorCategoryList = <VendorCategoryModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:37:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:38:  RxList<CouponModel> couponList = <CouponModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:39:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:40:  @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:41:  void onInit() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:42:    super.onInit();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:58:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:59:  void animateSlider() {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:60:    if (vendorModel.value.photos != null &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:61:        vendorModel.value.photos!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:62:      step47gSliderTimer?.cancel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:63:      step47gSliderTimer = Timer.periodic(const Duration(seconds: 2), (
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:64:        Timer timer,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:65:      ) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:66:        if (currentPage < vendorModel.value.photos!.length - 1) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:67:          currentPage++;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:68:        } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:69:          currentPage.value = 0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:70:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:71:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:72:        if (pageController.value.hasClients &&
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:91:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:92:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:93:  Rx<VendorModel> vendorModel = VendorModel().obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:94:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:95:  final CartProvider cartProvider = CartProvider();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:96:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:97:  Future<void> getArgument() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:98:    cartProvider.cartStream.listen((event) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:99:      cartItem.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:105:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:106:    if (argumentData != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:107:      vendorModel.value = argumentData['vendorModel'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:108:      print(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:109:        "STEP47D_RESTAURANT_DETAIL_VENDOR_ARG: id=${vendorModel.value.id} 
title=${vendorModel.value.title} zone=${vendorModel.value.zoneId}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:110:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:111:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:112:    animateSlider();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:113:    statusCheck();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:114:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:115:    await getProduct();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:125:  Future<void> getProduct() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:126:    print(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:127:      "STEP47D_RESTAURANT_DETAIL_BEFORE_PRODUCT_LOAD: vendorId=${vendorModel.value.id} 
title=${vendorModel.value.title}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:128:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:129:    await FireStoreUtils.getProductByVendorId(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:130:      vendorModel.value.id.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:131:    ).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:132:      if ((Constant.isSubscriptionModelApplied == true ||
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:133:              vendorModel.value.adminCommission?.isEnabled == true) &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:134:          vendorModel.value.subscriptionPlan != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:135:        if (vendorModel.value.subscriptionPlan?.itemLimit == '-1') {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:136:          allProductList.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:137:          productList.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:138:          print(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:139:            "STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: 
vendorId=${vendorModel.value.id} count=${productList.length} allCount=${allProductList.length}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:140:          );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:141:        } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:142:          int selectedProduct =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:143:              value.length <
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:144:                      int.parse(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:145:                        vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:146:                      )
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:147:                  ? (value.isEmpty ? 0 : (value.length))
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:148:                  : int.parse(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:149:                    vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:150:                  );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:151:          allProductList.value = value.sublist(0, selectedProduct);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:152:          productList.value = value.sublist(0, selectedProduct);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:153:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:154:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:155:        allProductList.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:156:        productList.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:157:        print(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:158:          "STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: vendorId=${vendorModel.value.id} 
count=${productList.length} allCount=${allProductList.length}",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:159:        );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:160:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:161:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:162:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:163:    vendorCategoryList.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:164:    for (var element in productList) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:165:      await FireStoreUtils.getVendorCategoryById(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:166:        element.categoryID.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:167:      ).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:168:        if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:169:          vendorCategoryList.add(value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:170:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:171:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:172:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:225:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:226:  bool isProductMatchedWithCategory(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:227:    ProductModel product,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:228:    VendorCategoryModel vendorCategoryModel,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:229:  ) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:230:    final productCategoryId = normalizeCategoryKey(product.categoryID);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:231:    final vendorCategoryId = normalizeCategoryKey(vendorCategoryModel.id);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:232:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:233:    if (productCategoryId.isEmpty || vendorCategoryId.isEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:234:      return false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:235:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:236:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:237:    return productCategoryId == vendorCategoryId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:238:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:239:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:240:  List<ProductModel> getProductsForCategory(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:241:    VendorCategoryModel vendorCategoryModel,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:242:  ) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:243:    return productList
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:244:        .where((p0) => isProductMatchedWithCategory(p0, vendorCategoryModel))
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:245:        .toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:246:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:247:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:248:  Future<List<ProductModel>> getProductByCategory(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:249:    VendorCategoryModel vendorCategoryModel,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:250:  ) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:251:    return getProductsForCategory(vendorCategoryModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:252:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:253:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:254:  Future<void> getFavouriteList() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:255:    if (Constant.userModel != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:256:      await FireStoreUtils.getFavouriteRestaurant().then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:257:        favouriteList.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:263:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:264:      await FireStoreUtils.getOfferByVendorId(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:265:        vendorModel.value.id.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:266:      ).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:267:        couponList.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:268:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:269:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:270:    await getAttributeData();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:271:    update();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:278:    var day = DateFormat('EEEE', 'en_US').format(now);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:279:    var date = DateFormat('dd-MM-yyyy').format(now);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:280:    for (var element in vendorModel.value.workingHours ?? []) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:281:      if (day == element.day.toString()) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:282:        if (element.timeslot!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:283:          for (var element in element.timeslot!) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:284:            var start = step46oSafeParseRestaurantWorkingDateTime(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:285:              date,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:286:              element.from,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:329:  RxInt quantity = 1.obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:330:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:331:  String calculatePrice(ProductModel productModel) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:332:    String mainPrice = "0";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:333:    String variantPrice = "0";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:334:    String adOnsPrice = "0";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:335:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:336:    if (productModel.itemAttribute != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:337:      if (productModel.itemAttribute!.variants!
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:338:          .where((element) => element.variantSku == selectedVariants.join('-'))
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:339:          .isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:340:        variantPrice = Constant.productCommissionPrice(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:341:          vendorModel.value,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:342:          productModel.itemAttribute!.variants!
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:343:                  .where(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:344:                    (element) =>
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:345:                        element.variantSku == selectedVariants.join('-'),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:346:                  )
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:347:                  .first
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:348:                  .variantPrice ??
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:352:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:353:      String price = Constant.productCommissionPrice(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:354:        vendorModel.value,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:355:        productModel.price.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:356:      );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:357:      String disPrice =
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:358:          double.parse(productModel.disPrice.toString()) <= 0
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:359:              ? "0"
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:360:              : Constant.productCommissionPrice(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:361:                vendorModel.value,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:362:                productModel.disPrice.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:363:              );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:364:      if (double.parse(disPrice) <= 0) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:365:        variantPrice = price;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:366:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:367:        variantPrice = disPrice;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:368:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:369:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:370:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:371:    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:372:      if (selectedAddOns.contains(productModel.addOnsTitle![i]) == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:373:        adOnsPrice =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:374:            (double.parse(adOnsPrice.toString()) +
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:375:                    double.parse(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:376:                      Constant.productCommissionPrice(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:377:                        vendorModel.value,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:378:                        productModel.addOnsPrice![i].toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:379:                      ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:380:                    ))
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:381:                .toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:382:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:383:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:384:    adOnsPrice = (quantity.value * double.parse(adOnsPrice)).toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:400:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:401:  Future<void> addToCart({
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:402:    required ProductModel productModel,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:403:    required String price,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:404:    required String discountPrice,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:405:    required bool isIncrement,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:406:    required int quantity,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:407:    VariantInfo? variantInfo,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:408:  }) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:409:    CartProductModel cartProductModel = CartProductModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:410:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:411:    String adOnsPrice = "0";
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:412:    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:413:      if (selectedAddOns.contains(productModel.addOnsTitle![i]) == true &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:414:          productModel.addOnsPrice![i] != '0') {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:415:        adOnsPrice =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:416:            (double.parse(adOnsPrice.toString()) +
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:417:                    double.parse(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:418:                      Constant.productCommissionPrice(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:419:                        vendorModel.value,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:420:                        productModel.addOnsPrice![i].toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:421:                      ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:422:                    ))
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:423:                .toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:424:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:425:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:426:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:427:    if (variantInfo != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:428:      cartProductModel.id =
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:429:          "${productModel.id!}~${variantInfo.variantId.toString()}";
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:430:      cartProductModel.name = productModel.name!;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:431:      cartProductModel.photo = productModel.photo!;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:432:      cartProductModel.categoryId = productModel.categoryID!;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:433:      cartProductModel.price = price;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:434:      cartProductModel.discountPrice = discountPrice;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:435:      cartProductModel.vendorID = vendorModel.value.id;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:436:      cartProductModel.quantity = quantity;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:437:      cartProductModel.variantInfo = variantInfo;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:438:      cartProductModel.extrasPrice = adOnsPrice;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:439:      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:440:      cartProductModel.taxSetting =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:441:          (Constant.taxScope == "order"
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:442:              ? []
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:443:              : Constant.taxProductList
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:444:                  ?.where(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:445:                    (activeTax) =>
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:446:                        productModel.taxSetting?.any(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:447:                          (productTax) => productTax.id == activeTax.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:448:                        ) ??
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:449:                        false,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:450:                  )
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:451:                  .toList())!;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:452:    } else {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:453:      cartProductModel.id = productModel.id!;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:454:      cartProductModel.name = productModel.name!;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:455:      cartProductModel.photo = productModel.photo!;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:456:      cartProductModel.categoryId = productModel.categoryID!;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:457:      cartProductModel.price = price;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:458:      cartProductModel.discountPrice = discountPrice;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:459:      cartProductModel.vendorID = vendorModel.value.id;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:460:      cartProductModel.quantity = quantity;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:461:      cartProductModel.variantInfo = VariantInfo();
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:462:      cartProductModel.extrasPrice = adOnsPrice;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:463:      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:464:      cartProductModel.taxSetting =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:465:          (Constant.taxScope == "order"
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:466:              ? []
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:467:              : Constant.taxProductList
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:468:                  ?.where(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:469:                    (activeTax) =>
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:470:                        productModel.taxSetting?.any(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:471:                          (productTax) => productTax.id == activeTax.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:472:                        ) ??
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:473:                        false,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:474:                  )
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:475:                  .toList())!;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:476:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:477:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:478:    if (isIncrement) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:479:      await cartProvider.addToCart(Get.context!, cartProductModel, quantity);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:480:    } else {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:481:      await cartProvider.removeFromCart(cartProductModel, quantity);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:482:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:483:    log("===> new ${cartItem.length}");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:484:    update();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:485:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:486:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_de
tails_controller.dart:487:  @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:7:class RestaurantListController extends GetxController {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:8:  RxBool isLoading = true.obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:9:  RxList<VendorModel> vendorList = <VendorModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:10:  RxList<VendorModel> vendorSearchList = <VendorModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:11:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:12:  RxString title = "Stores".obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:13:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:14:  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:15:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:16:  @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:25:    if (argumentData != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:26:      vendorList.value = argumentData['vendorList'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:27:      vendorSearchList.value = argumentData['vendorList'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:28:      title.value = argumentData['title'] ?? "Stores";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:29:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:30:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:31:    await getFavouriteRestaurant();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:32:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:33:    isLoading.value = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:44:  @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:45:  void dispose() {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:46:    vendorSearchList.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:47:    super.dispose();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:48:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_li
st_controller.dart:49:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:14:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:15:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:16:  Rx<VendorModel> vendorModel = VendorModel().obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:17:  RxList<RatingModel> ratingList = <RatingModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:18:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:19:  void getArgument() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:20:    dynamic argumentData = Get.arguments;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:21:    if (argumentData != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:22:      vendorModel.value = argumentData['vendorModel'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:23:      getAllReview();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:24:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:25:    isLoading.value = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:26:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:27:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:28:  Future<void> getAllReview() async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:29:    await FireStoreUtils.getVendorReviews(vendorModel.value.id.toString()).then(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:30:      (value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:31:        ratingList.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:32:      },
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:33:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:34:    update();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\review_list_c
ontroller.dart:35:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\scan_qr_code_
controller.dart:11:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\scan_qr_code_
controller.dart:12:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\scan_qr_code_
controller.dart:13:  RxList<VendorModel> allNearestRestaurant = <VendorModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\scan_qr_code_
controller.dart:14:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\scan_qr_code_
controller.dart:15:  void getData() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\scan_qr_code_
controller.dart:16:    FireStoreUtils.getAllNearestRestaurant().listen((event) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\scan_qr_code_
controller.dart:17:      allNearestRestaurant.addAll(event);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\scan_qr_code_
controller.dart:18:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\scan_qr_code_
controller.dart:19:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:14:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:15:  RxBool isLoading = true.obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:16:  RxList<VendorModel> vendorList = <VendorModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:17:  RxList<VendorModel> vendorSearchList = <VendorModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:18:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:19:  RxList<ProductModel> productList = <ProductModel>[].obs;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:20:  RxList<ProductModel> productSearchList = <ProductModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:21:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:22:  Future<void> getArgument() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:23:    dynamic argumentData = Get.arguments;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:24:    if (argumentData != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:25:      vendorList.value = argumentData['vendorList'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:26:      productList.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:48:      return;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:49:    }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:50:    vendorSearchList.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:51:    productSearchList.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:52:    for (var element in vendorList) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:53:      if (element.title!.toLowerCase().contains(text.toLowerCase())) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:54:        vendorSearchList.add(element);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:55:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:56:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:57:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:58:    for (var element in productList) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:59:      if (element.name!.toLowerCase().contains(text.toLowerCase())) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:60:        productSearchList.add(element);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:65:  @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:66:  void dispose() {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:67:    vendorSearchList.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:68:    productSearchList.clear();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:69:    super.dispose();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:70:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\search_contro
ller.dart:71:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_
controller.dart:102:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_
controller.dart:103:  Future<void> _navigate(SectionModel sectionModel) async {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_
controller.dart:104:    await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_
controller.dart:105:      if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_
controller.dart:106:        Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == 
"product").toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_
controller.dart:107:        Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == 
"order").toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_
controller.dart:108:        Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == 
"delivery").toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_
controller.dart:109:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_
controller.dart:110:        if (sectionModel.packagingChargeEnable == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:88:      userModel.value.countryCode = countryCodeEditingController.value.text;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:89:      userModel.value.countryISOCode = countryISOCodeEditingController.value.text;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:90:      userModel.value.createdAt = Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:91:      userModel.value.appIdentifier = Platform.isAndroid ? 'android' : 'ios';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:92:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:93:      await FireStoreUtils.getReferralUserByCode(referralCodeEditingController.value.text).then((value) 
async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:94:        if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:95:          ReferralModel ownReferralModel = ReferralModel(id: FireStoreUtils.getCurrentUid(), referralBy: 
value.id, referralCode: Constant.getReferralCode());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:96:          await FireStoreUtils.referralAdd(ownReferralModel);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:128:          userModel.value.countryCode = countryCodeEditingController.value.text;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:129:          userModel.value.countryISOCode = countryISOCodeEditingController.value.text;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:130:          userModel.value.createdAt = Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:131:          userModel.value.appIdentifier = Platform.isAndroid ? 'android' : 'ios';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:132:          userModel.value.provider = 'email';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:133:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:134:          await 
FireStoreUtils.getReferralUserByCode(referralCodeEditingController.value.text).then((value) async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:135:            if (value != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\sign_up_contr
oller.dart:136:              ReferralModel ownReferralModel = ReferralModel(id: FireStoreUtils.getCurrentUid(), 
referralBy: value.id, referralCode: Constant.getReferralCode());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\splash_contro
ller.dart:40:    if (jsonString != '' && jsonString.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\splash_contro
ller.dart:41:      final Map<String, dynamic> jsonData = jsonDecode(jsonString);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\splash_contro
ller.dart:42:      final model = LanguageModel.fromJson(jsonData);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\splash_contro
ller.dart:43:      LocalizationService().changeLocale(model.slug!);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\splash_contro
ller.dart:44:    } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\splash_contro
ller.dart:45:      LocalizationService().changeLocale('en');
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\splash_contro
ller.dart:46:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\splash_contro
ller.dart:47:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\splash_contro
ller.dart:48:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:7:  RxBool isLoading = true.obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:8:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:9:  RxList<VendorCategoryModel> vendorCategoryModel = <VendorCategoryModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:10:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:11:  @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:12:  void onInit() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:13:    // TODO: implement onInit
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:14:    getCategoryData();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:15:    super.onInit();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:18:  Future<void> getCategoryData() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:19:    await FireStoreUtils.getVendorCategory().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:20:      vendorCategoryModel.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:21:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:22:    });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:23:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:24:    if (Constant.restaurantList != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:25:      List<String> usedCategoryIds = Constant.restaurantList!.expand((vendor) => 
vendor.categoryID ?? []).whereType<String>().toSet().toList();
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:26:      vendorCategoryModel.value = vendorCategoryModel.where((category) => 
usedCategoryIds.contains(category.id)).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:27:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:28:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:29:    isLoading.value = false;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:30:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_cate
gory_controller.dart:31:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_popu
lar_service_controller.dart:38:            List<ProviderServiceModel> filteredList = 
providerServiceList.where((service) => service.author == provider).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_popu
lar_service_controller.dart:39:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_popu
lar_service_controller.dart:40:            filteredList.sort((a, b) => a.createdAt!.compareTo(b.createdAt!));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_popu
lar_service_controller.dart:41:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_popu
lar_service_controller.dart:42:            for (int index = 0; index < filteredList.length; index++) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_popu
lar_service_controller.dart:43:              final service = filteredList[index];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_popu
lar_service_controller.dart:44:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_popu
lar_service_controller.dart:45:              if (Constant.isSubscriptionModelApplied == true || 
Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_all_popu
lar_service_controller.dart:46:                if (service.subscriptionPlan?.itemLimit == "-1") {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:9:  RxList<ProviderServiceModel> providerList = <ProviderServiceModel>[].obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:10:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:11:  RxString categoryId = "".obs, categoryTitle = "".obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:12:  Rx<OnDemandHomeController> onDemandHomeController = 
Get.find<OnDemandHomeController>().obs;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:13:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:14:  @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:15:  void onInit() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:16:    super.onInit();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:17:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:18:    final args = Get.arguments as Map<String, dynamic>;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:19:    categoryId.value = args['categoryId'] ?? "";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:20:    categoryTitle.value = args['categoryTitle'] ?? "";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:21:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:22:    getData();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:23:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:24:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:25:  Future<void> getData() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:27:    isLoading.value = true;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:28:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:29:    List<ProviderServiceModel> providerServiceList = await 
FireStoreUtils.getProviderFuture(categoryId: categoryId.value);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:30:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:31:    List<String?> uniqueAuthId = providerServiceList.map((service) => 
service.author).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:32:    List<String?> uniqueServiceId = providerServiceList.map((service) => 
service.id).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:33:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:34:    List<ProviderServiceModel> filterByItemLimit = <ProviderServiceModel>[];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\view_category
_service_controller.dart:35:    List<String?> uniqueId = <String>[];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:71:  Future<void> getPaymentSettings() async {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:72:    await FireStoreUtils.getPaymentSettingsData().then((value) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:73:      payFastModel.value = 
PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:74:      mercadoPagoModel.value = 
MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:75:      payPalModel.value = 
PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:76:      stripeModel.value = 
StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:77:      flutterWaveModel.value = 
FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:78:      payStackModel.value = 
PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:79:      razorPayModel.value = 
RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:80:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:81:      midTransModel.value = 
MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:82:      orangeMoneyModel.value = 
OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:83:      xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:84:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:85:      Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:86:      Stripe.merchantIdentifier = 'GoRide';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:87:      Stripe.instance.applySettings();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:88:      setRef();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:89:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:90:      razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:91:      razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:173:      var lo1 = jsonEncode(e);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:174:      var lo2 = jsonDecode(lo1);
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:175:      StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:176:      ShowToastDialog.showToast(lom.error.message);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:177:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:178:      ShowToastDialog.showToast(e.toString());
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:179:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:180:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:181:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:607:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:608:      if (response.statusCode == 200 || response.statusCode == 201) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:609:        XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:610:        return model;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:611:      } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:612:        return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:613:      }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:614:    } catch (e) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\wallet_contro
ller.dart:615:      return XenditModel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:6:  AdminCommission({this.amount, this.isEnabled, this.commissionType});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:7:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:8:  AdminCommission.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:9:    amount = json['commission'].toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:10:    isEnabled = json['enable'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:11:    commissionType = json['type'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:12:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:13:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:14:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:15:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:16:    data['commission'] = amount;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:17:    data['enable'] = isEnabled;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:18:    data['type'] = commissionType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:19:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\admin_commission_m
odel.dart:20:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:4:class AdvertisementModel {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:5:  String? coverImage;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:6:  Timestamp? createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:7:  String? description;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:8:  Timestamp? endDate;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:9:  String? id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:10:  bool? paymentStatus;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:11:  String? priority;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:12:  String? profileImage;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:26:  AdvertisementModel({
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:27:    this.coverImage,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:28:    this.createdAt,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:29:    this.description,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:30:    this.endDate,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:31:    this.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:32:    this.paymentStatus,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:33:    this.priority,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:34:    this.profileImage,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:47:  });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:48:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:49:  factory AdvertisementModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:50:    return AdvertisementModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:51:        coverImage: json['coverImage'],
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:52:        createdAt: json['createdAt'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:53:        description: json['description'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:54:        endDate: json['endDate'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:55:        id: json['id'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:56:        paymentStatus: json['paymentStatus'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:57:        priority: json['priority'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:58:        profileImage: json['profileImage'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:71:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:72:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:73:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:74:    return {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:75:      'coverImage': coverImage,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:76:      'createdAt': createdAt,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:77:      'description': description,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:78:      'endDate': endDate,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:79:      'id': id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:80:      'paymentStatus': paymentStatus,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:81:      'priority': priority,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\advertisement_mode
l.dart:82:      'profileImage': profileImage,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:5:  AttributesModel({this.id, this.title});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:6:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:7:  AttributesModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:8:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:9:    title = json['title'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:10:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:11:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:12:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:13:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:14:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:15:    data['title'] = title;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:16:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:17:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\attributes_model.d
art:18:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
8:  String? redirect_type;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
9:  String? redirect_id;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
10:  bool? isPublish;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
11:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
12:  BannerModel({this.id, this.setOrder, this.position, this.redirect_type, this.redirect_id, this.sectionId, 
this.photo, this.title, this.isPublish});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
13:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
14:  BannerModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
15:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
16:    position = json['position'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
17:    sectionId = json['sectionId'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
18:    setOrder = json['set_order'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
19:    photo = json['photo'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
20:    title = json['title'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
21:    isPublish = json['is_publish'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
22:    redirect_type = json['redirect_type'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
23:    redirect_id = json['redirect_id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
24:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
25:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
26:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
27:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
28:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
29:    data['position'] = position;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
30:    data['sectionId'] = sectionId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
31:    data['set_order'] = setOrder;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
32:    data['photo'] = photo;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
33:    data['title'] = title;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
34:    data['is_publish'] = isPublish;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
35:    data['redirect_type'] = redirect_type;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
36:    data['redirect_id'] = redirect_id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
37:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
38:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\banner_model.dart:
39:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
4:  String? id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
5:  String? title;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
6:  bool? isPublish;
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:7:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
8:  BrandsModel({this.photo, this.sectionId, this.id, this.title, this.isPublish});
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:9:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
10:  BrandsModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
11:    photo = json['photo'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
12:    sectionId = json['sectionId'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
13:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
14:    title = json['title'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
15:    isPublish = json['is_publish'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
16:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
17:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
18:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
19:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
20:    data['photo'] = photo;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
21:    data['sectionId'] = sectionId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
22:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
23:    data['title'] = title;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
24:    data['is_publish'] = isPublish;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
25:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
26:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\brands_model.dart:
27:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:15:  String? destinationLocationName;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:16:  String? authorID;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:17:  Timestamp? createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:18:  DestinationLocation? destinationLocation;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:19:  String? adminCommissionType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:20:  String? sourceLocationName;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:21:  String? rideType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:22:  Timestamp? triggerDelevery;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:23:  String? id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:51:    this.destinationLocationName,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:52:    this.authorID,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:53:    this.createdAt,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:54:    this.destinationLocation,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:55:    this.adminCommissionType,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:56:    this.sourceLocationName,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:57:    this.rideType,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:58:    this.triggerDelevery,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:59:    this.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:79:  });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:80:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:81:  CabOrderModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:82:    status = json['status'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:83:    rejectedByDrivers = json['rejectedByDrivers'] ?? [];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:84:    couponId = json['couponId'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:85:    scheduleDateTime = json['scheduleDateTime'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:86:    duration = json['duration'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:87:    roundTrip = json['roundTrip'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:90:    destinationLocationName = json['destinationLocationName'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:91:    authorID = json['authorID'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:92:    createdAt = json['createdAt'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:93:    destinationLocation = json['destinationLocation'] != null ? 
DestinationLocation.fromJson(json['destinationLocation']) : null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:94:    adminCommissionType = json['adminCommissionType'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:95:    sourceLocationName = json['sourceLocationName'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:96:    rideType = json['rideType'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:97:    triggerDelevery = json['trigger_delevery'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:98:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:99:    adminCommission = json['adminCommission'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:105:    vehicleId = json['vehicleId'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:106:    paymentMethod = json['paymentMethod'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:107:    vehicleType = json['vehicleType'] != null ? VehicleType.fromJson(json['vehicleType']) : null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:108:    otpCode = json['otpCode'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:109:    sourceLocation = json['sourceLocation'] != null ? DestinationLocation.fromJson(json['sourceLocation']) : 
null;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:110:    author = json['author'] != null ? UserModel.fromJson(json['author']) : null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:111:    subTotal = json['subTotal'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:112:    driver = json['driver'] != null ? UserModel.fromJson(json['driver']) : null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:113:    driverId = json['driverId'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:114:    platformFee = json['platformFee'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:115:    if (json['taxSetting'] != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:116:      taxSetting = <TaxModel>[];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:117:      json['taxSetting'].forEach((v) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:118:        taxSetting!.add(TaxModel.fromJson(v));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:119:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:120:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:121:    if (json['platformTax'] != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:122:      platformTax = <TaxModel>[];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:123:      json['platformTax'].forEach((v) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:124:        platformTax!.add(TaxModel.fromJson(v));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:125:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:126:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:127:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:128:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:129:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:130:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:131:    data['status'] = status;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:132:    // if (rejectedByDrivers != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:133:    //   data['rejectedByDrivers'] = rejectedByDrivers!.map((v) => v.toJson()).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:134:    // }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:135:    if (rejectedByDrivers != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:136:      data['rejectedByDrivers'] = rejectedByDrivers;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:137:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:138:    data['couponId'] = couponId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:139:    data['scheduleDateTime'] = scheduleDateTime;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:144:    data['destinationLocationName'] = destinationLocationName;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:145:    data['authorID'] = authorID;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:146:    data['createdAt'] = createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:147:    if (destinationLocation != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:148:      data['destinationLocation'] = destinationLocation!.toJson();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:149:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:150:    data['adminCommissionType'] = adminCommissionType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:151:    data['sourceLocationName'] = sourceLocationName;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:152:    data['rideType'] = rideType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:153:    data['trigger_delevery'] = triggerDelevery!;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:154:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:163:    data['driverId'] = driverId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:164:    if (driver != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:165:      data['driver'] = driver!.toJson();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:166:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:167:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:168:    if (vehicleType != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:169:      data['vehicleType'] = vehicleType!.toJson();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:170:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:171:    data['otpCode'] = otpCode;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:172:    if (sourceLocation != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:173:      data['sourceLocation'] = sourceLocation!.toJson();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:174:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:175:    if (author != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:176:      data['author'] = author!.toJson();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:177:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:178:    data['subTotal'] = subTotal;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:179:    data['platformFee'] = platformFee;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:180:    if (taxSetting != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:181:      data['taxSetting'] = taxSetting!.map((v) => v.toJson()).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:182:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:183:    if (platformTax != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:184:      data['platformTax'] = platformTax!.map((v) => v.toJson()).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:185:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:186:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:187:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:188:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:189:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:190:class DestinationLocation {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:191:  double? longitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:192:  double? latitude;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:193:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:194:  DestinationLocation({this.longitude, this.latitude});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:195:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:196:  DestinationLocation.fromJson(Map<String, dynamic> json) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:197:    longitude = json['longitude'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:198:    latitude = json['latitude'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:199:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:200:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:201:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:202:    final Map<String, dynamic> data = <String, dynamic>{};
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:203:    data['longitude'] = longitude;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:204:    data['latitude'] = latitude;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:205:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:206:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cab_order_model.da
rt:207:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:3:import 'package:customer/models/tax_model.dart';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:4:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:5:class CartProductModel {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:6:  String? id;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:7:  String? categoryId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:8:  String? name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:9:  String? photo;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:10:  String? price;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:11:  String? discountPrice;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:12:  String? vendorID;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:13:  int? quantity;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:17:  List<TaxModel>? taxSetting;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:18:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:19:  CartProductModel({this.id, this.categoryId, this.name, this.photo, this.price, this.discountPrice, 
this.vendorID, this.quantity, this.extrasPrice, this.variantInfo, this.extras, this.taxSetting});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:20:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:21:  CartProductModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:22:    id = json['id'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:23:    categoryId = json['category_id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:24:    name = json['name'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:25:    photo = json['photo'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:26:    price = json['price'] ?? "0.0";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:27:    discountPrice = json['discountPrice'] ?? "0.0";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:28:    vendorID = json['vendorID'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:29:    quantity = json['quantity'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:41:            ? null
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:42:            : "String" == json['variant_info'].runtimeType.toString()
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:43:            ? VariantInfo.fromJson(jsonDecode(json['variant_info']))
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:44:            : VariantInfo.fromJson(json['variant_info']);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:45:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:46:    taxSetting =
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:47:        json['taxSetting'] == null
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:48:            ? []
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:49:            : json['taxSetting'] is String
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:50:            ? (jsonDecode(json['taxSetting']) as List).map((e) => TaxModel.fromJson(e)).toList()
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:51:            : json['taxSetting'] is List
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:52:            ? (json['taxSetting'] as List).map((e) => TaxModel.fromJson(e)).toList()
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:53:            : [];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:54:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:55:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:56:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:57:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:58:    data['id'] = id;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:59:    data['category_id'] = categoryId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:60:    data['name'] = name;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:61:    data['photo'] = photo;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:62:    data['price'] = price;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:63:    data['discountPrice'] = discountPrice;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:64:    data['vendorID'] = vendorID;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:65:    data['quantity'] = quantity;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:67:    data['extras'] = extras;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:68:    if (variantInfo != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:69:      data['variant_info'] = variantInfo?.toJson(); // Handle null value
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:70:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:71:    // ✅ Convert List<Map> to String
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:72:    data['taxSetting'] = taxSetting == null ? [] : taxSetting!.map((e) => e.toJson()).toList();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:73:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:74:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:75:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:76:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:77:class VariantInfo {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:78:  String? variantId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:84:  VariantInfo({this.variantId, this.variantPrice, this.variantSku, this.variantImage, this.variantOptions});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:85:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:86:  VariantInfo.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:87:    variantId = json['variant_id'] ?? '';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:88:    variantPrice = json['variant_price'].toString();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:89:    variantSku = json['variant_sku'] ?? '';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:90:    variantImage = json['variant_image'] ?? '';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:91:    variantOptions = json['variant_options'] ?? {};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:92:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:93:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:94:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:95:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:96:    data['variant_id'] = variantId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:97:    data['variant_price'] = variantPrice;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:98:    data['variant_sku'] = variantSku;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:99:    data['variant_image'] = variantImage;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cart_product_model
.dart:100:    data['variant_options'] = variantOptions;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:36:  });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:37:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:38:  factory CashbackModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:39:    return CashbackModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:40:      allCustomer: json['allCustomer'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:41:      allPayment: json['allPayment'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:42:      cashbackAmount: (json['cashbackAmount'] != null) ? double.tryParse(json['cashbackAmount'].toString()) : 
null,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:43:      cashbackValue: (json['cashbackValue'] != null) ? double.tryParse(json['cashbackValue'].toString()) : null,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:44:      cashbackType: json['cashbackType'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:55:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:56:  }
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:57:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:58:    return {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:59:      'allCustomer': allCustomer,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:60:      'allPayment': allPayment,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:61:      'cashbackAmount': cashbackAmount,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:62:      if (cashbackValue != null) 'cashbackValue': cashbackValue,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_model.dar
t:63:      'cashbackType': cashbackType,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:6:  final String? userId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:7:  final String? orderId;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:8:  final Timestamp? createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:9:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:10:  CashbackRedeemModel({
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:11:    this.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:12:    this.cashbackId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:13:    this.userId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:14:    this.orderId,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:15:    this.createdAt,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:16:  });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:17:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:18:  factory CashbackRedeemModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:19:    return CashbackRedeemModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:20:      id: json['id'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:21:      cashbackId: json['cashbackId'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:22:      userId: json['userId'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:23:      orderId: json['orderId'],
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:24:      createdAt: json['createdAt'] == null ? null : json['createdAt'] as Timestamp,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:25:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:26:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:27:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:28:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:29:    return {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:30:      'id': id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:31:      'cashbackId': cashbackId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:32:      'userId': userId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:33:      'orderId': orderId,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:34:      'createdAt': createdAt,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:35:    };
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:36:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\cashback_redeem_mo
del.dart:37:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:3:  String? title;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:4:  String? image;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:5:  bool? publish;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:6:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:7:  CategoryModel({this.id, this.title, this.image, this.publish});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:8:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:9:  CategoryModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:10:    id = json['id'] ?? '';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:11:    title = json['title'] ?? '';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:12:    image = json['image'] ?? '';
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:13:    publish = json['publish'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:14:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:15:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:16:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:17:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:18:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:19:    data['title'] = title;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:20:    data['image'] = image;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:21:    data['publish'] = publish;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:22:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:23:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\category_model.dar
t:24:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:10:  String? videoThumbnail;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:11:  Url? url;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:12:  Timestamp? createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:13:  bool? seen;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:14:  int? recordingTimer;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:15:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:16:  ConversationModel({this.id, this.senderId, this.receiverId, this.orderId, this.message, this.messageType, 
this.videoThumbnail, this.url, this.createdAt, this.seen, this.recordingTimer});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:17:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:18:  factory ConversationModel.fromJson(Map<String, dynamic> parsedJson) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:19:    return ConversationModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:20:      id: parsedJson['id'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:21:      senderId: parsedJson['senderId'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:22:      receiverId: parsedJson['receiverId'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:23:      orderId: parsedJson['orderId'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:24:      message: parsedJson['message'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:28:          parsedJson.containsKey('url')
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:29:              ? parsedJson['url'] != null
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:30:                  ? Url.fromJson(parsedJson['url'])
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:31:                  : null
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:32:              : Url(),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:33:      createdAt: parsedJson['createdAt'] ?? Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:34:      seen: parsedJson['seen'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:35:      recordingTimer: parsedJson['recordingTimer'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:36:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:37:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:38:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:39:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:40:    return {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:41:      'id': id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:42:      'senderId': senderId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:43:      'receiverId': receiverId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:44:      if (orderId != null && orderId != '') 'orderId': orderId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:45:      'message': message,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:46:      'messageType': messageType,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:47:      'videoThumbnail': videoThumbnail,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:48:      'url': url == null ? null : url!.toJson(),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:49:      'createdAt': createdAt,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:50:      if (seen != null) 'seen': seen,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:51:      'recordingTimer': recordingTimer,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:52:    };
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:53:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:54:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:55:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:61:  Url({this.mime = '', this.url = ''});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:62:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:63:  factory Url.fromJson(Map<dynamic, dynamic> parsedJson) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:64:    return Url(mime: parsedJson['mime'] ?? '', url: parsedJson['url'] ?? '');
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:65:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:66:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:67:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:68:    return {'mime': mime, 'url': url};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:69:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\conversation_model
.dart:70:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
8:  String? image;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
9:  Timestamp? expiresAt;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
10:  Timestamp? createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
11:  String? description;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
12:  String? sectionId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
13:  bool? isPublic;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
14:  String? vendorID;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
15:  bool? isEnabled;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
16:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
17:  CouponModel({this.discountType, this.id, this.code, this.discount, this.image, this.expiresAt, this.description, 
this.isPublic, this.vendorID, this.isEnabled,this.createdAt,this.sectionId});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
18:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
19:  CouponModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
20:    discountType = json['discountType'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
21:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
22:    code = json['code'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
23:    discount = json['discount'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
24:    image = json['image'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
25:    expiresAt = json['expiresAt'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
28:    vendorID = json['vendorID'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
29:    isEnabled = json['isEnabled'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
30:    createdAt = json['createdAt'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
31:    sectionId = json['section_id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
32:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
33:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
34:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
35:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
36:    data['discountType'] = discountType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
37:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
38:    data['code'] = code;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
39:    data['discount'] = discount;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
40:    data['image'] = image;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
44:    data['vendorID'] = vendorID;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
45:    data['isEnabled'] = isEnabled;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
46:    data['createdAt'] = createdAt;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
47:    data['section_id'] = sectionId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
48:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
49:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\coupon_model.dart:
50:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:20:  });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:21:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:22:  factory CurrencyModel.fromJson(Map<String, dynamic> parsedJson) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:23:    return CurrencyModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:24:      code: parsedJson['code'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:25:      decimal: parsedJson['decimal_degits'] ?? 0,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:26:      isactive: parsedJson['isActive'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:27:      id: parsedJson['id'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:28:      name: parsedJson['name'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:34:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:35:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:36:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:37:    return {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:38:      'code': code,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:39:      'decimal_degits': decimal,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:40:      'isActive': isactive,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:41:      'rounding': rounding,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\currency_model.dar
t:42:      'id': id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:17:  Timestamp? date;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:18:  String? totalGuest;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:19:  VendorModel? vendor;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:20:  bool? firstVisit;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:21:  Timestamp? createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:22:  String? guestLastName;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:23:  String? discountType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:24:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:25:  DineInBookingModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:26:      {this.discount,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:27:      this.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:39:      this.vendor,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:40:      this.firstVisit,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:41:      this.createdAt,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:42:      this.guestLastName,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:43:      this.discountType});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:44:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:45:  DineInBookingModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:46:    print(json['id']);
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:47:    discount = json['discount'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:48:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:49:    guestPhone = json['guestPhone'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:50:    guestFirstName = json['guestFirstName'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:51:    status = json['status'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:52:    author = json['author'] != null ? UserModel.fromJson(json['author']) : null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:53:    guestEmail = json['guestEmail'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:54:    vendorID = json['vendorID'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:55:    occasion = json['occasion'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:56:    authorID = json['authorID'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:57:    specialRequest = json['specialRequest'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:58:    date = json['date'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:59:    totalGuest = json['totalGuest'].toString();
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:60:    vendor = json['vendor'] != null ? VendorModel.fromJson(json['vendor']) : null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:61:    firstVisit = json['firstVisit'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:62:    createdAt = json['createdAt'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:63:    guestLastName = json['guestLastName'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:64:    discountType = json['discountType'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:65:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:66:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:67:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:68:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:69:    data['discount'] = discount;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:70:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:71:    data['guestPhone'] = guestPhone;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:72:    data['guestFirstName'] = guestFirstName;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:73:    data['status'] = status;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:74:    if (author != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:75:      data['author'] = author!.toJson();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:76:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:77:    data['guestEmail'] = guestEmail;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:78:    data['vendorID'] = vendorID;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:79:    data['occasion'] = occasion;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:80:    data['authorID'] = authorID;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:81:    data['specialRequest'] = specialRequest;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:83:    data['totalGuest'] = totalGuest;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:84:    if (vendor != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:85:      data['vendor'] = vendor!.toJson();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:86:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:87:    data['firstVisit'] = firstVisit;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:88:    data['createdAt'] = createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:89:    data['guestLastName'] = guestLastName;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:90:    data['discountType'] = discountType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:91:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:92:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\dine_in_booking_mo
del.dart:93:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:8:  EmailTemplateModel({this.subject, this.id, this.type, this.message, this.isSendToAdmin});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:9:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:10:  EmailTemplateModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:11:    subject = json['subject'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:12:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:13:    type = json['type'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:14:    message = json['message'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:15:    isSendToAdmin = json['isSendToAdmin'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:16:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:17:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:18:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:19:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:20:    data['subject'] = subject;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:21:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:22:    data['type'] = type;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:23:    data['message'] = message;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\email_template_mod
el.dart:24:    data['isSendToAdmin'] = isSendToAdmin;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:3:  String? service_id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:4:  String? user_id;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:5:  String? section_id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:6:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:7:  FavouriteOndemandServiceModel({this.service_id, this.serviceAuthorId, this.user_id, 
this.section_id});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:8:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:9:  factory FavouriteOndemandServiceModel.fromJson(Map<String, dynamic> parsedJson) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:10:    return FavouriteOndemandServiceModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:11:        serviceAuthorId: parsedJson["service_author_id"] ?? "",
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:12:        section_id: parsedJson["section_id"] ?? "",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:13:        user_id: parsedJson["user_id"] ?? "",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:14:        service_id: parsedJson["service_id"] ?? "");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:15:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:16:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:17:  Map<String, dynamic> toJson() {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:18:    return {"service_author_id": serviceAuthorId, "section_id": section_id, "user_id": user_id, 
"service_id": service_id};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:19:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favorite_ondemand_
service_model.dart:20:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:7:  FavouriteItemModel({this.storeId, this.userId, this.productId, this.sectionId});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:8:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:9:  factory FavouriteItemModel.fromJson(Map<String, dynamic> parsedJson) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:10:    return FavouriteItemModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:11:      storeId: parsedJson["store_id"] ?? "",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:12:      userId: parsedJson["user_id"] ?? "",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:13:      productId: parsedJson["product_id"] ?? "",
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:14:      sectionId: parsedJson["section_id"] ?? "",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:15:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:16:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:17:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:18:  Map<String, dynamic> toJson() {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:19:    return {"store_id": storeId, "user_id": userId, "product_id": productId, "section_id": sectionId};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:20:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_item_mod
el.dart:21:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_model.da
rt:6:  FavouriteModel({this.restaurantId, this.userId,this.sectionId});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_model.da
rt:7:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_model.da
rt:8:  factory FavouriteModel.fromJson(Map<String, dynamic> parsedJson) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_model.da
rt:9:    return FavouriteModel(restaurantId: parsedJson["store_id"] ?? "", userId: parsedJson["user_id"] ?? 
"",sectionId: parsedJson["section_id"] ?? "");
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_model.da
rt:10:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_model.da
rt:11:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_model.da
rt:12:  Map<String, dynamic> toJson() {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_model.da
rt:13:    return {"store_id": restaurantId, "user_id": userId, "section_id": sectionId};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_model.da
rt:14:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\favourite_model.da
rt:15:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:3:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:4:class GiftCardsModel {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:5:  Timestamp? createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:6:  String? image;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:7:  String? expiryDay;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:8:  String? id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:9:  String? message;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:10:  String? title;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:11:  bool? isEnable;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:12:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:13:  GiftCardsModel({this.createdAt, this.image, this.expiryDay, this.id, this.message, this.title, 
this.isEnable});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:14:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:15:  GiftCardsModel.fromJson(Map<String, dynamic> json) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:16:    createdAt = json['createdAt'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:17:    image = json['image'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:18:    expiryDay = json['expiryDay'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:19:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:20:    message = json['message'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:21:    title = json['title'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:22:    isEnable = json['isEnable'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:23:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:24:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:25:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:26:    final Map<String, dynamic> data = <String, dynamic>{};
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:27:    data['createdAt'] = createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:28:    data['image'] = image;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:29:    data['expiryDay'] = expiryDay;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:30:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:31:    data['message'] = message;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:32:    data['title'] = title;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_model.d
art:33:    data['isEnable'] = isEnable;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:19:      {this.price, this.id, this.expireDate, this.createdDate, this.giftTitle, this.message, this.giftId, 
this.giftCode, this.giftPin, this.redeem, this.paymentType, this.userid});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:20:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:21:  GiftCardsOrderModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:22:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:23:    price = json['price'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:24:    expireDate = json['expireDate'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:25:    createdDate = json['createdDate'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:26:    giftTitle = json['giftTitle'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:27:    message = json['message'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:34:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:35:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:36:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:37:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:38:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:39:    data['price'] = price;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:40:    data['expireDate'] = expireDate;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:41:    data['createdDate'] = createdDate;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\gift_cards_order_m
odel.dart:42:    data['message'] = message;
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:7: 
 String? lastSenderId;
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:8: 
 String? orderId;
> 
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:9: 
 Timestamp? createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:1
0:  String? chatType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:1
1:  String? lastMessageType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:1
2:  String? type;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:1
3:  List<String>? senderReceiverId;
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:14:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:1
5:  InboxModel({this.senderId, this.lastMessage, this.orderId, this.receiverId, this.lastSenderId, this.createdAt, 
this.chatType, this.lastMessageType, this.type, this.senderReceiverId});
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:16:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:1
7:  factory InboxModel.fromJson(Map<String, dynamic> parsedJson) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:1
8:    return InboxModel(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:1
9:      senderId: parsedJson['senderId'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:2
0:      lastMessage: parsedJson['lastMessage'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:2
1:      orderId: parsedJson['orderId'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:2
2:      receiverId: parsedJson['receiverId'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:2
3:      lastSenderId: parsedJson['lastSenderId'] ?? '',
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:2
4:      createdAt: parsedJson['createdAt'] ?? Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:2
5:      chatType: parsedJson['chatType'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:2
6:      lastMessageType: parsedJson['lastMessageType'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:2
7:      senderReceiverId: List<String>.from(parsedJson['sender_receiver_id'] ?? []),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:2
8:      type: parsedJson['type'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:2
9:    );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:3
0:  }
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:31:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:3
2:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:3
3:    return {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:3
4:      'senderId': senderId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:3
5:      'lastMessage': lastMessage,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:3
6:      'orderId': orderId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:3
7:      'receiverId': receiverId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:3
8:      'lastSenderId': lastSenderId,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:3
9:      'createdAt': createdAt,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:4
0:      if (chatType != null) 'chatType': chatType,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:4
1:      'lastMessageType': lastMessageType,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:4
2:      'sender_receiver_id': senderReceiverId,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:4
3:      'type': type,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:4
4:    };
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\inbox_model.dart:4
5:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:8:  LanguageModel({this.isActive, this.slug, this.title, this.isRtl, this.image});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:9:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:10:  LanguageModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:11:    isActive = json['isActive'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:12:    slug = json['slug'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:13:    title = json['title'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:14:    isRtl = json['is_rtl'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:15:    image = json['image'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:16:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:17:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:18:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:19:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:20:    data['isActive'] = isActive;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:21:    data['slug'] = slug;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:22:    data['title'] = title;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:23:    data['is_rtl'] = isRtl;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\language_model.dar
t:24:    data['image'] = image;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
19:        this.userName});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
20:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
21:  MailSettings.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
22:    emailSetting = json['emailSetting'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
23:    fromName = json['fromName'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
24:    host = json['host'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
25:    mailEncryptionType = json['mailEncryptionType'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
26:    mailMethod = json['mailMethod'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
27:    password = json['password'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
30:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
31:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
32:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
33:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
34:    data['emailSetting'] = emailSetting;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
35:    data['fromName'] = fromName;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
36:    data['host'] = host;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
37:    data['mailEncryptionType'] = mailEncryptionType;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\mail_setting.dart:
38:    data['mailMethod'] = mailMethod;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:9:      { this.subject, this.id, this.type, this.message});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:10:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:11:  NotificationModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:12:    subject = json['subject'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:13:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:14:    type = json['type'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:15:    message = json['message'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:16:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:17:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:18:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:19:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:20:    data['subject'] = subject;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:21:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:22:    data['type'] = type;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:23:    data['message'] = message;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\notification_model
.dart:24:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:7:  String authorID, payment_method;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:8:  UserModel author;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:9:  Timestamp createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:10:  String? sectionId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:11:  ProviderServiceModel provider;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:12:  String status;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:13:  ShippingAddress? address;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:14:  String id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:15:  List<TaxModel>? taxModel;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:41:    this.payment_method = '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:42:    author,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:43:    createdAt,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:44:    provider,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:45:    this.status = '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:46:    this.address,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:47:    this.id = '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:48:    this.taxModel,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:49:    scheduleDateTime,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:69:    this.platformTax,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:70:  }) : author = author ?? UserModel(),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:71:       createdAt = createdAt ?? Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:72:       provider = provider ?? ProviderServiceModel(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:73:       scheduleDateTime = scheduleDateTime ?? Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:74:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:75:  factory OnProviderOrderModel.fromJson(Map<String, dynamic> parsedJson) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:76:    List<TaxModel>? taxList;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:77:    if (parsedJson['taxSetting'] != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:78:      taxList = <TaxModel>[];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:79:      parsedJson['taxSetting'].forEach((v) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:80:        taxList!.add(TaxModel.fromJson(v));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:81:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:82:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:83:    List<TaxModel>? platformTax;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:84:    if (parsedJson['platformTax'] != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:85:      platformTax = <TaxModel>[];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:86:      parsedJson['platformTax'].forEach((v) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:87:        platformTax!.add(TaxModel.fromJson(v));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:88:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:89:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:90:    return OnProviderOrderModel(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:91:      author: parsedJson.containsKey('author') ? UserModel.fromJson(parsedJson['author']) : UserModel(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:92:      authorID: parsedJson['authorID'] ?? '',
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:93:      address: parsedJson.containsKey('address') ? ShippingAddress.fromJson(parsedJson['address']) : 
ShippingAddress(),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:94:      createdAt: parsedJson['createdAt'] ?? Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:95:      id: parsedJson['id'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:96:      payment_method: parsedJson['payment_method'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:97:      taxModel: taxList,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:98:      sectionId: parsedJson['sectionId'] ?? '',
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:99:      status: parsedJson['status'] ?? '',
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:100:      provider: parsedJson.containsKey('provider') ? 
ProviderServiceModel.fromJson(parsedJson['provider']) : ProviderServiceModel(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:101:      notes: parsedJson['notes'] ?? "",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:102:      scheduleDateTime: parsedJson['scheduleDateTime'] ?? Timestamp.now(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:103:      newScheduleDateTime: parsedJson['newScheduleDateTime'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:104:      startTime: parsedJson['startTime'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:105:      endTime: parsedJson['endTime'],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:106:      discount: parsedJson['discount'] ?? "0.0",
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:123:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:124:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:125:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:126:    return {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:127:      'address': address?.toJson(),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:128:      'author': author.toJson(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:129:      'authorID': authorID,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:130:      'payment_method': payment_method,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:131:      'createdAt': createdAt,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:132:      'id': id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:133:      'status': status,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:134:      'provider': provider.toJson(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:135:      'sectionId': sectionId,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:136:      "taxSetting": taxModel?.map((v) => v.toJson()).toList(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:137:      "scheduleDateTime": scheduleDateTime,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:138:      "newScheduleDateTime": newScheduleDateTime,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:139:      "startTime": startTime,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:140:      "endTime": endTime,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:141:      "notes": notes,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:142:      'discount': discount,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:155:      'extraChargesDescription': extraChargesDescription,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:156:      'platformFee': platformFee,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:157:      'platformTax': platformTax?.map((v) => v.toJson()).toList(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:158:    };
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:159:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\onprovider_order_m
odel.dart:160:}
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:7:  OnBoardingModel({this.description, this.id, this.title, this.image});
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:8:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:9:  OnBoardingModel.fromJson(Map<String, dynamic> json) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:10:    description = json['description'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:11:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:12:    title = json['title'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:13:    image = json['image'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:14:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:15:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:16:  Map<String, dynamic> toJson() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:17:    final Map<String, dynamic> data = <String, dynamic>{};
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:18:    data['description'] = description;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:19:    data['id'] = id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:20:    data['title'] = title;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:21:    data['image'] = image;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\on_boarding_model.
dart:22:    return data;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
6:  String? authorID;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
7:  String? estimatedTimeToPrepare;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
8:  Timestamp? createdAt;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
9:  Timestamp? triggerDelivery;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:2
0:  String? paymentMethod;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:2
1:  List<CartProductModel>? products;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:2
2:  String? adminCommissionType;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:2
3:  VendorModel? vendor;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:2
4:  String? id;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:2
5:  String? adminCommission;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:2
6:  String? couponCode;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:2
7:  String? sectionId;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:2
8:  Map<String, dynamic>? specialDiscount;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:2
9:  String? deliveryCharge;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:5
7:    this.authorID,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:5
8:    this.estimatedTimeToPrepare,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:5
9:    this.createdAt,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:6
0:    this.triggerDelivery,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:6
1:    this.paymentMethod,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:6
2:    this.products,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:6
3:    this.adminCommissionType,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:6
4:    this.vendor,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:6
5:    this.id,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:9
0:  });
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:91:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:9
2:  OrderModel.fromJson(Map<String, dynamic> json) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:9
3:    address = json['address'] != null ? ShippingAddress.fromJson(json['address']) : null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:9
4:    status = json['status'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:9
5:    couponId = json['couponId'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:9
6:    vendorID = json['vendorID'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:9
7:    driverID = json['driverID'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:9
8:    discount = json['discount'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:9
9:    authorID = json['authorID'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
00:    estimatedTimeToPrepare = json['estimatedTimeToPrepare'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
01:    createdAt = json['createdAt'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
02:    courierCompanyName = json['courierCompanyName'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
03:    courierTrackingId = json['courierTrackingId'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
04:    triggerDelivery = json['triggerDelevery'] ?? Timestamp.now();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
05:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
06:    paymentMethod = json['payment_method'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
07:    if (json['products'] != null) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
08:      products = <CartProductModel>[];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
09:      json['products'].forEach((v) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
10:        products!.add(CartProductModel.fromJson(v));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
11:      });
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
12:    }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
13:    adminCommissionType = json['adminCommissionType'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
14:    vendor = json['vendor'] != null ? VendorModel.fromJson(json['vendor']) : null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
15:    id = json['id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
16:    adminCommission = json['adminCommission'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
17:    couponCode = json['couponCode'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
18:    sectionId = json['section_id'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
19:    specialDiscount = json['specialDiscount'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
20:    deliveryCharge = json['deliveryCharge'].toString().isEmpty ? "0.0" : json['deliveryCharge'] ?? '0.0';
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
21:    scheduleTime = json['scheduleTime'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
22:    tipAmount = json['tip_amount'].toString().isEmpty ? "0.0" : json['tip_amount'] ?? "0.0";
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
23:    notes = json['notes'];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
24:    author = json['author'] != null ? UserModel.fromJson(json['author']) : null;
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
25:    driver = json['driver'] != null ? UserModel.fromJson(json['driver']) : null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
26:    takeAway = json['takeAway'];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
27:    rejectedByDrivers = json['rejectedByDrivers'] ?? [];
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
28:    cashback = json['cashback'] != null ? CashbackModel.fromJson(json['cashback']) : null;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
29:    if (json['taxSetting'] != null) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
30:      taxSetting = <TaxModel>[];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\models\order_model.dart:1
31:      json['taxSetting'].forEach((v) {



TEXT_END


## 3. Firebase Firestore Field Reality Scan
TEXT_START

### Collection: sections
DOC_COUNT_SAMPLED: 17

DOC: 6285dcf511651
FIELD | id | type=String | value=6285dcf511651
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Cosmetic

DOC: 6285dd3281531
FIELD | id | type=String | value=6285dd3281531
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Fashion

DOC: 6285dd7b50f32
FIELD | id | type=String | value=6285dd7b50f32
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Flowers

DOC: 6285ddbfd9598
FIELD | id | type=String | value=6285ddbfd9598
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Restaurants

DOC: 631852d1bc978
FIELD | id | type=String | value=631852d1bc978
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Cab Service

DOC: 6319dc53314ee
FIELD | id | type=String | value=6319dc53314ee
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Food Grocery

DOC: 632309c9d549e
FIELD | id | type=String | value=632309c9d549e
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Parcel Service

DOC: 63368fb2beabb
FIELD | id | type=String | value=63368fb2beabb
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Rental Service

DOC: custom_akap_ticket
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_akap_ticket
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=AKAP Ticket
FIELD | photo | type=string | value=
FIELD | title | type=String | value=AKAP Ticket
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831273,"_nanoseconds":997000000}

DOC: custom_document_service
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_document_service
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Document Service
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Document Service
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831269,"_nanoseconds":875000000}

DOC: custom_emergency_help
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_emergency_help
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Emergency Help
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Emergency Help
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831283,"_nanoseconds":601000000}

DOC: custom_hotel_homestay
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_hotel_homestay
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Hotel / Homestay
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Hotel / Homestay
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831271,"_nanoseconds":853000000}

DOC: custom_housemaid_art
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_housemaid_art
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Housemaid / ART
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Housemaid / ART
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831278,"_nanoseconds":312000000}

DOC: custom_laundry_service
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_laundry_service
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Laundry Service
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Laundry Service
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831267,"_nanoseconds":494000000}

DOC: custom_motor_delivery
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_motor_delivery
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Motor Delivery
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Motor Delivery
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831281,"_nanoseconds":258000000}

DOC: custom_technician_service
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_technician_service
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Technician Service
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Technician Service
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831276,"_nanoseconds":119000000}

DOC: yJTddzJUxP3cOU5DpJ10
FIELD | id | type=String | value=yJTddzJUxP3cOU5DpJ10
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Home/On Demand Service
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782670577,"_nanoseconds":148000000}

FIELD_TYPE_SUMMARY:
active => {"Boolean":17}
adminCommision => {"Object":1}
cab_service_template => {"string":8,"String":1}
color => {"String":17}
commissionAmount => {"string":5,"Number":3}
commissionType => {"string":5,"String":3}
createdAt => {"Timestamp":8}
deliveryCharge => {"Object":4}
delivery_charge => {"string":8,"String":1}
dine_in_active => {"boolean":16,"Boolean":1}
enable => {"Boolean":8}
enableCashbackOffer => {"boolean":1}
id => {"String":17}
image => {"string":8}
isActive => {"Boolean":17}
isEnableCommission => {"boolean":5,"Boolean":3}
is_product_details => {"boolean":1}
name => {"String":17}
nearByRadius => {"Number":1}
order => {"Number":17}
packagingChargeEnable => {"boolean":1}
photo => {"string":8}
platformFee => {"Object":9}
referralAmount => {"String":9}
rideType => {"string":16,"String":1}
ride_type => {"string":9}
sectionImage => {"String":9,"string":8}
serviceType => {"String":9}
serviceTypeFlag => {"String":17}
tax_active => {"Boolean":15,"boolean":2}
tax_amount => {"String":8}
tax_lable => {"String":7,"string":1}
tax_type => {"String":7,"string":1}
theme => {"null":1}
title => {"String":8}
updatedAt => {"Timestamp":9}

### Collection: vendors
DOC_COUNT_SAMPLED: 40

DOC: 05vPfo6g0mVhZZVlz6mB
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.005024588787297,"_longitude":72.53156829625368}
FIELD | createdAt | type=Timestamp | value={"_seconds":1685707781,"_nanoseconds":961962000}
FIELD | id | type=String | value=05vPfo6g0mVhZZVlz6mB
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=23.005024588787297
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=72.53156829625368
FIELD | name | type=String | value=eFashion
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fe52b7f79-a6f4-4045-85d0-908ace23cac6.png?alt=media&token=46df23aa-0bc7-439b-9883-30c172e416d9
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=eFashion
FIELD | vendorName | type=String | value=eFashion
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 07RFZCxogqVjkbVTt9HE
FIELD | categoryID | type=String | value=zzq4LngLd8PWzYJfsvnjfV
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.2497683,"_longitude":69.6682639}
FIELD | createdAt | type=Timestamp | value={"_seconds":1686552239,"_nanoseconds":676000000}
FIELD | id | type=String | value=07RFZCxogqVjkbVTt9HE
FIELD | latitude | type=Number | value=23.2497683
FIELD | longitude | type=Number | value=69.6682639
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgrocery1_1680094934575.jpg?alt=media&token=4bab7658-437d-4acf-a798-861955cdfe8f
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgrocery2_1680094955582.jpg?alt=media&token=6c4c6f69-826e-408b-bfc0-9d84f1a7bf3b","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgrocery4_1680095014888.png?alt=media&token=c1fb343a-6ed1-4164-b644-109abd8062d6","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgrocery3_1680095037328.jpg?alt=media&token=12e61dec-fe90-4237-a196-f375247d5e1a"]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Food Grocery store

DOC: 0GU3JWeAcNatUktBt94j
FIELD | categoryID | type=String | value=63a2b7478c6a5
FIELD | coordinates | type=GeoPoint | value={"_latitude":4.26379,"_longitude":118.01053}
FIELD | createdAt | type=Timestamp | value={"_seconds":1685384026,"_nanoseconds":952000000}
FIELD | id | type=String | value=0GU3JWeAcNatUktBt94j
FIELD | latitude | type=Number | value=4.26379
FIELD | longitude | type=Number | value=118.01053
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Unais 

DOC: 0hB8mx1z1DeNR9CAzXfh
FIELD | categoryID | type=String | value=62ecef57887cb
FIELD | coordinates | type=GeoPoint | value={"_latitude":13.989886,"_longitude":-89.555165}
FIELD | createdAt | type=Timestamp | value={"_seconds":1684982769,"_nanoseconds":566000000}
FIELD | id | type=String | value=0hB8mx1z1DeNR9CAzXfh
FIELD | latitude | type=Number | value=13.989886
FIELD | longitude | type=Number | value=-89.555165
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F7aadf5e4-7e9c-4234-a104-324653236e75.png?alt=media&token=a8b9286c-46dc-43ea-9cbf-bb9c4d101ba1
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=LA Parrilla

DOC: 0mkKJ5MWOLiGIGrMnV4c
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":4.476583,"_longitude":97.9558996}
FIELD | createdAt | type=Timestamp | value={"_seconds":1681708811,"_nanoseconds":350000000}
FIELD | id | type=String | value=0mkKJ5MWOLiGIGrMnV4c
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=4.476583
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=97.9558996
FIELD | name | type=String | value=Rumah Mode Syar"i
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-04-17%20at%2011_1681707124603.48?alt=media&token=7aa7a8c9-9bd9-4a4d-babe-dd5e9e97c1f8
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-04-17%20at%2011_1681707758317.47?alt=media&token=bbb0cbb0-8f27-4792-badf-9873c7fd6787"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Rumah Mode Syar"i
FIELD | vendorName | type=String | value=Rumah Mode Syar"i
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 0pEI9Y7pV5lLoW7fmiBS
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.4567,"_longitude":73.2345}
FIELD | createdAt | type=Timestamp | value={"_seconds":1693217900,"_nanoseconds":981000000}
FIELD | id | type=String | value=0pEI9Y7pV5lLoW7fmiBS
FIELD | latitude | type=Number | value=22.4567
FIELD | longitude | type=Number | value=73.2345
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=ben's store

DOC: 0urLW8W7TVh1huI55egm
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":-20.659599,"_longitude":-43.785542}
FIELD | createdAt | type=Timestamp | value={"_seconds":1684502732,"_nanoseconds":547000000}
FIELD | id | type=String | value=0urLW8W7TVh1huI55egm
FIELD | latitude | type=Number | value=-20.659599
FIELD | longitude | type=Number | value=-43.785542
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=modelo Teste

DOC: 10KPhdPgfOUpkHtzT3oS
FIELD | categoryID | type=String | value=88pNxhccktxkSgIndZ8e
FIELD | coordinates | type=GeoPoint | value={"_latitude":4.721763328129186,"_longitude":9.721896368194432}
FIELD | createdAt | type=Timestamp | value={"_seconds":1680205331,"_nanoseconds":456000000}
FIELD | id | type=String | value=10KPhdPgfOUpkHtzT3oS
FIELD | latitude | type=Number | value=4.721763328129186
FIELD | longitude | type=Number | value=9.721896368194432
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F1e2106d6-b7ca-49f2-86aa-45939a9c9ee4.png?alt=media&token=b2e0a021-4b40-4497-b8f8-d578cdcd7b79
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Simo Market

DOC: 1BlB62hfbg7mX0MTIUeo
FIELD | categoryID | type=String | value=64e2e7735131c
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.022505,"_longitude":72.571365}
FIELD | createdAt | type=Timestamp | value={"_seconds":1692593620,"_nanoseconds":615000000}
FIELD | id | type=String | value=1BlB62hfbg7mX0MTIUeo
FIELD | latitude | type=Number | value=23.022505
FIELD | longitude | type=Number | value=72.571365
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fth%20(2)_1692592242822.jpg?alt=media&token=03bc2b9e-9943-4d38-b0c4-875b39ba81e9
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=D-Mart

DOC: 1ZrcQ4ysrrheSVguUkFF
FIELD | categoryID | type=String | value=62ecf0f1c144b
FIELD | coordinates | type=GeoPoint | value={"_latitude":50.86557203656718,"_longitude":4.341516879046489}
FIELD | createdAt | type=Timestamp | value={"_seconds":1687238307,"_nanoseconds":899856000}
FIELD | id | type=String | value=1ZrcQ4ysrrheSVguUkFF
FIELD | latitude | type=Number | value=50.86557203656718
FIELD | longitude | type=Number | value=4.341516879046489
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F775a8aa7-cfa6-4a8f-a13e-68448428f764.png?alt=media&token=91d81744-5829-4250-a42c-59aed6e946d4
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Koobilo Eats

DOC: 1vMlKPiniUrzybKkWiS1
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | coordinates | type=GeoPoint | value={"_latitude":24.08939540142796,"_longitude":32.899980805814266}
FIELD | createdAt | type=Timestamp | value={"_seconds":1679900463,"_nanoseconds":641000000}
FIELD | id | type=String | value=1vMlKPiniUrzybKkWiS1
FIELD | latitude | type=Number | value=24.08939540142796
FIELD | longitude | type=Number | value=32.899980805814266
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fe457b468-be6c-4b0b-8934-2ac152b9ebfa.png?alt=media&token=a5a7cae1-1442-42de-aac6-8d30ad47af39
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fburger1_1679900366923.jpg?alt=media&token=6cf46f93-2122-400d-a73a-c0da45c2dae1","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Flarge_R_1679900385492.png?alt=media&token=537d112e-3c17-4c96-b4e4-b03873d453e3","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fsmall_size_1679900409913.png?alt=media&token=41addc04-45e9-4ce5-9779-903f88d3ba71","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FM_size_1679900426769.png?alt=media&token=c54df79a-e176-4306-a721-dc04c0da6f5a","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FMedium_R_1679900449430.jpg?alt=media&token=3447b3be-e25e-4461-ab6f-2f8526de30f3"]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=ahmed store

DOC: 21MCCA6V0HwY57Q6JZkK
FIELD | categoryID | type=String | value=62ecef57887cb
FIELD | coordinates | type=GeoPoint | value={"_latitude":-1.6832573664523662,"_longitude":29.22828041017055}
FIELD | createdAt | type=Timestamp | value={"_seconds":1675701969,"_nanoseconds":420000000}
FIELD | id | type=String | value=21MCCA6V0HwY57Q6JZkK
FIELD | latitude | type=Number | value=-1.6832573664523662
FIELD | longitude | type=Number | value=29.22828041017055
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdownload_1675701683635.jpeg?alt=media&token=bbf0f661-86af-47c9-8295-96008c5edf1b
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Jay Restaurant

DOC: 22IVF6moR0lkuE076H2i
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":26.9123284,"_longitude":75.7241379}
FIELD | createdAt | type=Timestamp | value={"_seconds":1687501817,"_nanoseconds":161000000}
FIELD | id | type=String | value=22IVF6moR0lkuE076H2i
FIELD | latitude | type=Number | value=26.9123284
FIELD | longitude | type=Number | value=75.7241379
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FScreenshot%20(68)_1687439833967.png?alt=media&token=0229908b-bc2a-44e7-8268-33ecb6c40725
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=bawarchi

DOC: 2eo51PsBz8HvNlki6yFL
FIELD | categoryID | type=String | value=62ecff6b9816b
FIELD | coordinates | type=GeoPoint | value={"_latitude":21.204153889549662,"_longitude":72.80387956649065}
FIELD | createdAt | type=Timestamp | value={"_seconds":1669283238,"_nanoseconds":821000000}
FIELD | id | type=String | value=2eo51PsBz8HvNlki6yFL
FIELD | latitude | type=Number | value=21.204153889549662
FIELD | longitude | type=Number | value=72.80387956649065
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fcfa325c4-e3f4-45b7-b767-f582b0cac4ec.png?alt=media&token=b74ff4bd-5df0-4713-b9e7-a1c9e51c1817
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=Flower Basket store

DOC: 2gklzqCbIFOPJm3EwEvt
FIELD | categoryID | type=String | value=63a2b7478c6a5
FIELD | coordinates | type=GeoPoint | value={"_latitude":35.868738,"_longitude":-86.3619641}
FIELD | createdAt | type=Timestamp | value={"_seconds":1689319846,"_nanoseconds":540776000}
FIELD | id | type=String | value=2gklzqCbIFOPJm3EwEvt
FIELD | latitude | type=Number | value=35.868738
FIELD | longitude | type=Number | value=-86.3619641
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F5fcf8fb3-e680-47ea-80ee-ce40dab48b83.png?alt=media&token=25cc44be-b411-4454-ae1e-84a2ac8f3509
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=soulking

DOC: 2jnVAu4xy28EdPy9E3z8
FIELD | categoryID | type=String | value=62ecff6a8c983
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.991039737280406,"_longitude":72.62959130108356}
FIELD | createdAt | type=Timestamp | value={"_seconds":1690193032,"_nanoseconds":167309000}
FIELD | id | type=String | value=2jnVAu4xy28EdPy9E3z8
FIELD | latitude | type=Number | value=22.991039737280406
FIELD | longitude | type=Number | value=72.62959130108356
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fe2cd692c-cbd1-498e-937e-386de085aa9f.png?alt=media&token=430fcc3a-7e8f-4d52-b8ea-a85ee47efd20
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=testflower

DOC: 2q54LGrRoKv43pS3rj85
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":13,"_longitude":78.943214}
FIELD | createdAt | type=Timestamp | value={"_seconds":1690819968,"_nanoseconds":457000000}
FIELD | id | type=String | value=2q54LGrRoKv43pS3rj85
FIELD | latitude | type=Number | value=13
FIELD | longitude | type=Number | value=78.943214
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=test123

DOC: 3HoJiFJNRQsTyBchMdxH
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":21.238271177388512,"_longitude":72.87064779549837}
FIELD | createdAt | type=Timestamp | value={"_seconds":1683706258,"_nanoseconds":303364000}
FIELD | id | type=String | value=3HoJiFJNRQsTyBchMdxH
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=21.238271177388512
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=72.87064779549837
FIELD | name | type=String | value=Demo
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F3369a540-21c7-4c33-a7ff-fb8179fc6dc4.png?alt=media&token=dc5a773a-b6fc-4d03-83d0-d6f44807a6a7
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Demo
FIELD | vendorName | type=String | value=Demo
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 4OND69A1zWWLiuzQVSXU
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.9898261444636,"_longitude":72.62929927557707}
FIELD | createdAt | type=Timestamp | value={"_seconds":1691991954,"_nanoseconds":438000000}
FIELD | id | type=String | value=4OND69A1zWWLiuzQVSXU
FIELD | latitude | type=Number | value=22.9898261444636
FIELD | longitude | type=Number | value=72.62929927557707
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F2449db75-a49b-49e7-a4a6-47b907dd0bf7.png?alt=media&token=647bbff7-60a9-4b17-957e-dcad270ef8d8
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=testing

DOC: 4PGUc3sU4uH1DcfDto0I
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.982530468708102,"_longitude":72.62215320020914}
FIELD | createdAt | type=Timestamp | value={"_seconds":1691991919,"_nanoseconds":226000000}
FIELD | id | type=String | value=4PGUc3sU4uH1DcfDto0I
FIELD | latitude | type=Number | value=22.982530468708102
FIELD | longitude | type=Number | value=72.62215320020914
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fd38344f5-1672-4410-80f1-c658e8df844f.png?alt=media&token=30dfb609-b08a-4b97-a04e-bf351879cf40
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=teststore

DOC: 4bZg2TXp193BLBY214kp
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.245654990328962,"_longitude":69.65947464108467}
FIELD | createdAt | type=Timestamp | value={"_seconds":1675084546,"_nanoseconds":269000000}
FIELD | id | type=String | value=4bZg2TXp193BLBY214kp
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=23.245654990328962
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=69.65947464108467
FIELD | name | type=String | value=My Fashion 
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F51ecc4c3-81cf-4fae-bdbf-33eca64b3bbd.png?alt=media&token=dd93aab9-af9e-4be2-99de-11ec80fb09c3
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=My Fashion 
FIELD | vendorName | type=String | value=My Fashion 
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 4ihNlSh19eOiOO4211lf
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | coordinates | type=GeoPoint | value={"_latitude":29.8464876,"_longitude":31.3378551}
FIELD | createdAt | type=Timestamp | value={"_seconds":1677935687,"_nanoseconds":791222000}
FIELD | id | type=String | value=4ihNlSh19eOiOO4211lf
FIELD | latitude | type=Number | value=29.8464876
FIELD | longitude | type=Number | value=31.3378551
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fb8e7ec32-4433-4935-b64d-344f2b387c27.png?alt=media&token=4e25f980-b6fa-4b66-8965-cd45f4cf4ed3
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Volante Gourmet

DOC: 4sxXnNyfXxYFzQCC7Fxr
FIELD | categoryID | type=String | value=636e30433dd7e
FIELD | coordinates | type=GeoPoint | value={"_latitude":3.5236855,"_longitude":98.70092032}
FIELD | createdAt | type=Timestamp | value={"_seconds":1677131126,"_nanoseconds":58000000}
FIELD | id | type=String | value=4sxXnNyfXxYFzQCC7Fxr
FIELD | latitude | type=Number | value=3.5236855
FIELD | longitude | type=Number | value=98.70092032
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677127998582.43?alt=media&token=da2a64d8-e82c-4ada-a393-4863bac957c8
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128044563.43?alt=media&token=d33fee57-07a1-43a4-b1ff-04d931289299","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128052608.43?alt=media&token=12b6359e-a701-4ef4-bcf5-ce23d1fb699f","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128064951.06?alt=media&token=35b3afb7-48d3-4103-a074-797091a1e993","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128078475.06?alt=media&token=7817c3ff-a4aa-4873-b0a5-adf1594a7c66","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128087281.43?alt=media&token=21dbe17a-d2ac-420e-ba1d-4cf31224756b","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128091834.43?alt=media&token=e2172fef-33bc-41e2-ab6a-5f951d2281eb","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128110756.43?alt=media&token=626a9b48-4e80-4403-90c9-c70b3b8cf153"]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Violin Es Krim Potong Turki

DOC: 55Y7n2RQiVTxdIgoFOfU
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.022505,"_longitude":72.5713622}
FIELD | createdAt | type=Timestamp | value={"_seconds":1680130140,"_nanoseconds":852000000}
FIELD | id | type=String | value=55Y7n2RQiVTxdIgoFOfU
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=23.022505
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=72.5713622
FIELD | name | type=String | value=Clothes
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fb5b6.jpg?alt=media&token=601f72f5-5ad9-43de-aaba-8ba5c9fe916e
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fa36da850-7c3f-11ed-abb9-97f67b5fc304_1677681172840.png?alt=media&token=e41ee0b5-fb4d-41db-9d94-dea5c35d7407","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F71esLiAvuWL_1677681179293._SL1500_?alt=media&token=9933a007-6676-45fc-921f-78e9de5834aa","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fa02470c0-7c3f-11ed-9925-23a921b85fda_1677681187570.png?alt=media&token=f5ba04ed-5adc-433f-acd5-3cab73ab6d19","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F714%2BKCl7T9L_1677681198026._SY679_?alt=media&token=7fed2e4d-4412-4072-8f2f-0cf92dee2732"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Clothes
FIELD | vendorName | type=String | value=Clothes
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 5K6Cs6wJONEKsEgNIx50
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.070516163837794,"_longitude":70.13196151703596}
FIELD | createdAt | type=Timestamp | value={"_seconds":1669283239,"_nanoseconds":216000000}
FIELD | id | type=String | value=5K6Cs6wJONEKsEgNIx50
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=23.070516163837794
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=70.13196151703596
FIELD | name | type=String | value=Rich look
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F784ca1d5-17e2-43a1-929d-a64b8e2510e0.png?alt=media&token=993c4681-8d0f-483b-b425-d11f26bbdb4c
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Rich look
FIELD | vendorName | type=String | value=Rich look
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 5cptMLjjMpHNYYuNL0Vm
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":56,"_longitude":51}
FIELD | createdAt | type=Timestamp | value={"_seconds":1687439744,"_nanoseconds":956000000}
FIELD | id | type=String | value=5cptMLjjMpHNYYuNL0Vm
FIELD | latitude | type=Number | value=56
FIELD | longitude | type=Number | value=51
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FScreenshot%20(68)_1687439739531.png?alt=media&token=d814c61d-bf3b-4222-84d2-c6f1eba9be34
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=dafda

DOC: 5triGkpNJkWLKUT1Afyi
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":25.74486,"_longitude":89.275589}
FIELD | createdAt | type=Timestamp | value={"_seconds":1693052645,"_nanoseconds":214446000}
FIELD | id | type=String | value=5triGkpNJkWLKUT1Afyi
FIELD | latitude | type=Number | value=25.74486
FIELD | longitude | type=Number | value=89.275589
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F852ea29f-9af1-427c-bbf4-f0eca87f1526.png?alt=media&token=4509a55a-7629-4790-8e3c-cff846266d69
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Restaurante El Portal

DOC: 5v22ComSYa2BwfAnsOQS
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":26.9196,"_longitude":75.7878}
FIELD | createdAt | type=Timestamp | value={"_seconds":1687520405,"_nanoseconds":651000000}
FIELD | id | type=String | value=5v22ComSYa2BwfAnsOQS
FIELD | latitude | type=Number | value=26.9196
FIELD | longitude | type=Number | value=75.7878
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FScreenshot%20(68)_1687520279865.png?alt=media&token=3bbef018-d81c-492c-9849-8d45af61c788
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FScreenshot%20(68)_1687520304599.png?alt=media&token=6dceca80-64a3-4e5b-8fb5-36e5b56bd414"]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=swad mahal

DOC: 5y18JEaVzjJS3V94RBvX
FIELD | categoryID | type=String | value=63a2b7478c6a5
FIELD | coordinates | type=GeoPoint | value={"_latitude":26.2820038,"_longitude":50.2113469}
FIELD | createdAt | type=Timestamp | value={"_seconds":1686314109,"_nanoseconds":897401000}
FIELD | id | type=String | value=5y18JEaVzjJS3V94RBvX
FIELD | latitude | type=Number | value=26.2820038
FIELD | longitude | type=Number | value=50.2113469
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F2304aa7b-e0c9-48a2-b816-6dd0883f9f69.png?alt=media&token=d736ab77-39ff-444c-b74a-5c72c8bc9a9d
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=الربيعي

DOC: 68LwNdERg7wVG04r9Qd4
FIELD | categoryID | type=String | value=62ecf35007e34
FIELD | coordinates | type=GeoPoint | value={"_latitude":26.1869774860655,"_longitude":73.70809514075518}
FIELD | createdAt | type=Timestamp | value={"_seconds":1690819396,"_nanoseconds":348000000}
FIELD | id | type=String | value=68LwNdERg7wVG04r9Qd4
FIELD | latitude | type=Number | value=26.1869774860655
FIELD | longitude | type=Number | value=73.70809514075518
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fd49d991a-156a-4586-8924-7361d2aac40b.png?alt=media&token=19cf6bb8-0173-4f94-96e0-f9140fe9bf01
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=test

DOC: 6SWKA69vczMu4ikTyQBT
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":3,"_longitude":2}
FIELD | createdAt | type=Timestamp | value={"_seconds":1685431867,"_nanoseconds":369000000}
FIELD | id | type=String | value=6SWKA69vczMu4ikTyQBT
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=3
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=2
FIELD | name | type=String | value=WEDRR
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=WEDRR
FIELD | vendorName | type=String | value=WEDRR
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 6dH64iTY9lDovNHTSQqx
FIELD | categoryID | type=String | value=62ecef57887cb
FIELD | coordinates | type=GeoPoint | value={"_latitude":19.3878558,"_longitude":-99.1565188}
FIELD | createdAt | type=Timestamp | value={"_seconds":1688749784,"_nanoseconds":938822000}
FIELD | id | type=String | value=6dH64iTY9lDovNHTSQqx
FIELD | latitude | type=Number | value=19.3878558
FIELD | longitude | type=Number | value=-99.1565188
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ffc53560a-4590-43a4-9564-7ef9b8d22d3f.png?alt=media&token=c91b0f07-6009-41c9-bb31-a3a9dce91506
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=coño

DOC: 7ABZwOiL24fYBiZAgqSr
FIELD | categoryID | type=String | value=62ecef57887cb
FIELD | coordinates | type=GeoPoint | value={"_latitude":10.98766,"_longitude":17.8766}
FIELD | createdAt | type=Timestamp | value={"_seconds":1690561032,"_nanoseconds":442000000}
FIELD | id | type=String | value=7ABZwOiL24fYBiZAgqSr
FIELD | latitude | type=Number | value=10.98766
FIELD | longitude | type=Number | value=17.8766
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=hhh

DOC: 7CE6py9E6oKXS58aEik1
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | coordinates | type=GeoPoint | value={"_latitude":6.1517222,"_longitude":1.2332866}
FIELD | createdAt | type=Timestamp | value={"_seconds":1674647940,"_nanoseconds":317323000}
FIELD | id | type=String | value=7CE6py9E6oKXS58aEik1
FIELD | latitude | type=Number | value=6.1517222
FIELD | longitude | type=Number | value=1.2332866
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F635f9f6c-4c02-47af-886d-113ea52359ec.png?alt=media&token=acb7c46a-15f9-4455-910b-57179c4e5203
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=fresh food 

DOC: 7FYlQ4J3oYnFCvA9Anqi
FIELD | categoryID | type=String | value=62dc0673d235b
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.2292212,"_longitude":72.5482722}
FIELD | createdAt | type=Timestamp | value={"_seconds":1669283239,"_nanoseconds":280000000}
FIELD | id | type=String | value=7FYlQ4J3oYnFCvA9Anqi
FIELD | latitude | type=Number | value=23.2292212
FIELD | longitude | type=Number | value=72.5482722
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fas5.jpg?alt=media&token=1c68fcc7-a2dc-4a70-acd1-82f23e7d8d9f
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285da5ec476a
FIELD | title | type=String | value=The Beer Store

DOC: 7wVLUlMhrqIReAvbjqkZ
FIELD | categoryID | type=string | value=
FIELD | createdAt | type=Timestamp | value={"_seconds":1686438997,"_nanoseconds":488000000}
FIELD | id | type=String | value=7wVLUlMhrqIReAvbjqkZ
FIELD | latitude | type=string | value=
FIELD | longitude | type=string | value=
FIELD | photo | type=string | value=
FIELD | photos | type=string | value=
FIELD | section_id | type=string | value=
FIELD | title | type=string | value=

DOC: 87LYnSVsmQWThHLGOa7n
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":11,"_longitude":11}
FIELD | createdAt | type=Timestamp | value={"_seconds":1689103825,"_nanoseconds":97000000}
FIELD | id | type=String | value=87LYnSVsmQWThHLGOa7n
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=11
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=11
FIELD | name | type=String | value=nody
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=nody
FIELD | vendorName | type=String | value=nody
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 8HHqBlRHf6ThaWoSleFY
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.987776098459417,"_longitude":72.62620735913515}
FIELD | createdAt | type=Timestamp | value={"_seconds":1691387314,"_nanoseconds":598720000}
FIELD | id | type=String | value=8HHqBlRHf6ThaWoSleFY
FIELD | latitude | type=Number | value=22.987776098459417
FIELD | longitude | type=Number | value=72.62620735913515
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F8fd428f3-72e0-42eb-9264-bfd331b0dc56.png?alt=media&token=656741d5-8b24-43aa-865c-08387be35eb9
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=testing1

DOC: 8akcNIacIF7Nt4zLARpl
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.2371276503805,"_longitude":69.70752976834774}
FIELD | createdAt | type=Timestamp | value={"_seconds":1671449886,"_nanoseconds":787873000}
FIELD | id | type=String | value=8akcNIacIF7Nt4zLARpl
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=23.2371276503805
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=69.70752976834774
FIELD | name | type=String | value=FASHION STREET
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F643d1631-8e14-407c-907b-27ef1d25a943.png?alt=media&token=192fd4ab-2e44-4003-87cb-a526de11defe
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=FASHION STREET
FIELD | vendorName | type=String | value=FASHION STREET
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 8pPJpkZlhaYUkxvUAu2P
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.02,"_longitude":72.57}
FIELD | createdAt | type=Timestamp | value={"_seconds":1685607258,"_nanoseconds":311000000}
FIELD | id | type=String | value=8pPJpkZlhaYUkxvUAu2P
FIELD | latitude | type=Number | value=23.02
FIELD | longitude | type=Number | value=72.57
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=BStore

FIELD_TYPE_SUMMARY:
address => {"string":9}
author => {"String":40}
authorName => {"String":39,"string":1}
authorProfilePic => {"String":27,"string":13}
categoryID => {"array":9,"String":30,"string":1}
categoryId => {"array":9}
categoryPhoto => {"string":24}
categoryTitle => {"String":39,"string":1}
categorys => {"array":9}
closeDineTime => {"string":30,"String":10}
closetime => {"string":21,"String":5}
coordinates => {"GeoPoint":39}
createdAt => {"Timestamp":40}
deliveryCharge => {"Object":37}
description => {"String":39,"string":1}
dine_in_active => {"boolean":7,"Boolean":14}
enabledDiveInFuture => {"boolean":30,"Boolean":8}
fcmToken => {"string":7,"String":19}
filters => {"Object":27,"string":1}
g => {"Object":39}
hidephotos => {"boolean":40}
id => {"String":40}
image => {"string":9}
isActive => {"Boolean":9}
latitude => {"Number":39,"string":1}
location => {"String":39,"string":1}
logo => {"string":9}
longitude => {"Number":39,"string":1}
name => {"String":9}
openDineTime => {"string":30,"String":10}
opentime => {"string":21,"String":5}
phonenumber => {"String":40}
photo => {"String":31,"string":9}
photos => {"array":39,"string":1}
price => {"String":3}
publish => {"Boolean":9}
restaurantCost => {"number":18,"Number":6,"string":1}
restaurantMenuPhotos => {"array":24,"string":1}
reststatus => {"Boolean":29,"boolean":9}
reviewsCount => {"number":16,"Number":9}
reviewsSum => {"number":16,"Number":9}
section_id => {"String":39,"string":1}
specialDiscount => {"array":36,"string":1}
specialDiscountEnable => {"boolean":17,"Boolean":5}
step46gAllFashionVendorNullFieldPatch => {"Boolean":9}
step46gAllFashionVendorNullFieldPatchAt => {"Timestamp":9}
tax_active => {"Boolean":2,"boolean":1}
tax_amount => {"Number":2,"number":1}
tax_lable => {"String":2,"string":1}
tax_type => {"String":2,"string":1}
title => {"String":39,"string":1}
vendorCost => {"string":21,"String":4}
vendorMenuPhotos => {"array":25}
vendorName => {"String":9}
walletAmount => {"number":3}
workingHours => {"array":36,"string":1}
zoneId => {"String":9}

### Collection: vendor_products
DOC_COUNT_SAMPLED: 40

DOC: 00M6yLTF95ZjsA3E3Em8
FIELD | categoryID | type=String | value=636e30433dd7e
FIELD | id | type=String | value=00M6yLTF95ZjsA3E3Em8
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Strawberry
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ff34eabdd-48dc-4ccd-9ec7-e37a983e8a3d.png?alt=media&token=60c23f8a-86a7-4b4e-bb78-cd962071edbe
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ff34eabdd-48dc-4ccd-9ec7-e37a983e8a3d.png?alt=media&token=60c23f8a-86a7-4b4e-bb78-cd962071edbe","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ff34eabdd-48dc-4ccd-9ec7-e37a983e8a3d.png?alt=media&token=60c23f8a-86a7-4b4e-bb78-cd962071edbe"]
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=boolean | value=false

DOC: 02lRZ4NbxazUGOikcmb8
FIELD | categoryID | type=String | value=62dc0673d235b
FIELD | id | type=String | value=02lRZ4NbxazUGOikcmb8
FIELD | name | type=String | value=Budweiser
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbeer1.png?alt=media&token=9bbe8945-fa95-4201-a61f-96cbfd80bd0c
FIELD | photos | type=array | value=[]
FIELD | publish | type=boolean | value=false
FIELD | takeawayOption | type=boolean | value=false

DOC: 0BmzLzaFPW7NDSWJqAFo
FIELD | categoryID | type=String | value=64c9ee1921721
FIELD | id | type=String | value=0BmzLzaFPW7NDSWJqAFo
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Sugar
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ffdb47f20-7756-406a-a008-97cb2c9feb0d.png?alt=media&token=cd63d1e5-cf46-4811-b408-dee784f64253
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ffdb47f20-7756-406a-a008-97cb2c9feb0d.png?alt=media&token=cd63d1e5-cf46-4811-b408-dee784f64253"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=boolean | value=false

DOC: 0ElydaSumH3J1DrM0uXR
FIELD | categoryID | type=String | value=62ecf35007e34
FIELD | id | type=String | value=0ElydaSumH3J1DrM0uXR
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Coffee Body Scrub
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fed9de63f-ff6d-4707-a94e-7cd50809d5bc.png?alt=media&token=cff1485e-faf8-4c4b-935a-f2360549c45b
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fed9de63f-ff6d-4707-a94e-7cd50809d5bc.png?alt=media&token=cff1485e-faf8-4c4b-935a-f2360549c45b"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | takeawayOption | type=boolean | value=false

DOC: 0Gsy0HJ0NTViExMk5k6O
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | id | type=String | value=0Gsy0HJ0NTViExMk5k6O
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Test Product
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fkids5.png?alt=media&token=d5ebf6e6-b0ae-48cd-a900-90b91f4c6e38
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fkids5.png?alt=media&token=d5ebf6e6-b0ae-48cd-a900-90b91f4c6e38"]
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=Boolean | value=true

DOC: 0LnLKNw4QT4ta7MFcHha
FIELD | categoryID | type=String | value=628c79e14b7e4
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963779,"_nanoseconds":467000000}
FIELD | id | type=String | value=0LnLKNw4QT4ta7MFcHha
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Dior watch
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FDior.webp?alt=media&token=f80a9204-a209-472e-8793-3b81637db87d
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FDior.webp?alt=media&token=f80a9204-a209-472e-8793-3b81637db87d"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963779,"_nanoseconds":467000000}

DOC: 0UvkVonvmUBNthvU5lVJ
FIELD | categoryID | type=String | value=62ecfdfb02b2a
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963814,"_nanoseconds":423000000}
FIELD | id | type=String | value=0UvkVonvmUBNthvU5lVJ
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Watch
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963814,"_nanoseconds":423000000}

DOC: 0r2NbgqbIicPintj00NB
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | id | type=String | value=0r2NbgqbIicPintj00NB
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c392d486e9","attribute_options":["cheese","veggie"]}],"variants":[{"variant_id":"f1149d10-3752-11ee-97af-61f33120626a","variant_image":"","variant_price":"81","variant_sku":"cheese","variant_quantity":"-1"},{"variant_id":"a4a5da10-3753-11ee-a8f5-659a7a1ff004","variant_image":"","variant_price":"89","variant_sku":"veggie","variant_quantity":"-1"}]}
FIELD | name | type=String | value=Pizza
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F687595cd-de7a-4340-9338-b4e7d8c0ae3f.png?alt=media&token=a22b954c-0422-4a27-a256-f9890e5ef582
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F687595cd-de7a-4340-9338-b4e7d8c0ae3f.png?alt=media&token=a22b954c-0422-4a27-a256-f9890e5ef582"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=boolean | value=false

DOC: 1Lp01DrsCCMd4eMLWItA
FIELD | categoryID | type=String | value=63a2b7478c6a5
FIELD | id | type=String | value=1Lp01DrsCCMd4eMLWItA
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=redbucket
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=Boolean | value=true

DOC: 1Uqp7GK3Xqe1LULGlI0k
FIELD | categoryID | type=String | value=62ecfdfb47287
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963779,"_nanoseconds":798000000}
FIELD | id | type=String | value=1Uqp7GK3Xqe1LULGlI0k
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Girl Frok
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbabyfrok.jpg?alt=media&token=988d840e-1919-4c83-9f4e-2c08032828a8
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FCaptura%20de%20ecra%CC%83%202023-06-14%2C%20a%CC%80s%2017_1686760103451.28?alt=media&token=760eaf6e-7a7b-4a63-828e-71536049e175"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963779,"_nanoseconds":798000000}

DOC: 1ZKzFaMFWTOogcVKGUQk
FIELD | categoryID | type=String | value=636e30433dd7e
FIELD | id | type=String | value=1ZKzFaMFWTOogcVKGUQk
FIELD | item_attribute | type=Object | value={"attributes":[],"variants":[]}
FIELD | name | type=String | value=Apple
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F95c3b3b0-6aff-4583-a284-24fe8d41d857.png?alt=media&token=dd59f5d0-2049-461d-a9ef-e506c4f3229c
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F95c3b3b0-6aff-4583-a284-24fe8d41d857.png?alt=media&token=dd59f5d0-2049-461d-a9ef-e506c4f3229c","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ff5291f4a-4581-42cf-ae87-d1a7b541a6b0.png?alt=media&token=1e9742a7-ea6d-47cd-89a3-68a2103d1972"]
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=boolean | value=false

DOC: 25Fx1fdZRTcYDNmYRUfd
FIELD | categoryID | type=String | value=62ecfdfb02b2a
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963751,"_nanoseconds":602000000}
FIELD | id | type=String | value=25Fx1fdZRTcYDNmYRUfd
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Casual Shirt
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F63ce3d00-29b8-4746-b09f-518b2e7e1dc6.png?alt=media&token=68688ac7-647c-4255-ae3b-49a90a3eee42
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F63ce3d00-29b8-4746-b09f-518b2e7e1dc6.png?alt=media&token=68688ac7-647c-4255-ae3b-49a90a3eee42"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963751,"_nanoseconds":602000000}

DOC: 27liouMiOOi8b8koMt18
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | id | type=String | value=27liouMiOOi8b8koMt18
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=PULLA
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=boolean | value=false

DOC: 2RFFDZCQTpx844bST5xP
FIELD | categoryID | type=String | value=wxHH0kJnCExOI6sHaXvX
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963765,"_nanoseconds":44000000}
FIELD | id | type=String | value=2RFFDZCQTpx844bST5xP
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Casual Men's Shoes
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdummy-image-portrait.jpg?alt=media&token=82737a8a-c47d-4dde-b08d-9f11bdaa29aa
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdummy-image-portrait.jpg?alt=media&token=82737a8a-c47d-4dde-b08d-9f11bdaa29aa"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963765,"_nanoseconds":44000000}

DOC: 2RZcajrZo4qR7Byxudeu
FIELD | categoryID | type=String | value=62ecf35007e34
FIELD | id | type=String | value=2RZcajrZo4qR7Byxudeu
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Loreal Paris Shampoo
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F10.jpg?alt=media&token=501f66c2-e91b-4040-b147-2a69d2cc05b0
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F10.jpg?alt=media&token=501f66c2-e91b-4040-b147-2a69d2cc05b0"]
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | takeawayOption | type=boolean | value=false

DOC: 2SyKQtZyxnFItK5vLvyx
FIELD | categoryID | type=String | value=6285ebb16636c
FIELD | id | type=String | value=2SyKQtZyxnFItK5vLvyx
FIELD | name | type=String | value=Women's Dress
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FDress_20.jpg?alt=media&token=9de34734-917e-4c81-a943-0014a9878c27
FIELD | photos | type=array | value=[]
FIELD | publish | type=boolean | value=false
FIELD | takeawayOption | type=boolean | value=false

DOC: 2iaQ11YtC3DbAs1dHFcC
FIELD | categoryID | type=String | value=62ecedf41a7fe
FIELD | id | type=String | value=2iaQ11YtC3DbAs1dHFcC
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c392080ec6","attribute_options":["red","green "]},{"attribute_id":"633c38a8dad77","attribute_options":["blue"]},{"attribute_id":"633c392d486e9","attribute_options":[]},{"attribute_id":"63b5afbc6a6a1","attribute_options":[]}],"variants":[{"variant_id":"529d32c0-06c2-11ee-b826-a3dd3b0bfe27","variant_image":"","variant_price":"0","variant_sku":"green -blue","variant_quantity":"-1"}]}
FIELD | name | type=String | value=Ai
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=boolean | value=false

DOC: 2vJN86Cb20sQHmwdwD3s
FIELD | categoryID | type=String | value=11pMPqVV53qUsacuF6N1YD
FIELD | id | type=String | value=2vJN86Cb20sQHmwdwD3s
FIELD | name | type=String | value=Orange
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Forange3.jpg?alt=media&token=b71dd115-e567-4836-b4a9-1c6b1b3737d6
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 3K05tanHz8YNksr5nid3
FIELD | categoryID | type=String | value=88pNxhccktxkSgIndZ8e
FIELD | createdAt | type=Timestamp | value={"_seconds":1782935355,"_nanoseconds":166000000}
FIELD | id | type=String | value=3K05tanHz8YNksr5nid3
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Onion
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F2370b2c9-5d8c-4898-8fae-6b15963c485f.png?alt=media&token=92ca6a1c-4f8e-4273-a57f-0521dd8d7bcb
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F2370b2c9-5d8c-4898-8fae-6b15963c485f.png?alt=media&token=92ca6a1c-4f8e-4273-a57f-0521dd8d7bcb"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=Boolean | value=true
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782935355,"_nanoseconds":166000000}

DOC: 3fYiGN919ldNc3Qw2LsQ
FIELD | categoryID | type=String | value=636e30433dd7e
FIELD | createdAt | type=Timestamp | value={"_seconds":1782935343,"_nanoseconds":586000000}
FIELD | id | type=String | value=3fYiGN919ldNc3Qw2LsQ
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c38a8dad77","attribute_options":["Redf"]},{"attribute_id":"633c392080ec6","attribute_options":["M","Z"]}],"variants":[{"variant_id":"a7170010-662c-11ed-bd95-9f667b320856","variant_image":"","variant_price":"10","variant_sku":"Redf-M","variant_quantity":"5"},{"variant_id":"a7170010-662c-11ed-9524-d73ab9a1d06d","variant_image":"","variant_price":"0","variant_sku":"Redf-Z","variant_quantity":"0"}]}
FIELD | name | type=String | value=Test
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Flogo_web.png?alt=media&token=ffaa1b32-a877-4485-b2ff-b3942f9cf665
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782935343,"_nanoseconds":586000000}

DOC: 3jFPwSSeJd7yVBJAN0lb
FIELD | categoryID | type=String | value=62ecf0f1c144b
FIELD | id | type=String | value=3jFPwSSeJd7yVBJAN0lb
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c392d486e9","attribute_options":["grill","no grill"]}],"variants":[{"variant_id":"6ee15d40-3a97-11ee-b584-d346caa11021","variant_image":"https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fimages%2F6ee15d40-3a97-11ee-b584-d346caa11021.png?alt=media&token=4ad52915-30cf-4337-852e-f7824b982df5","variant_price":"69","variant_sku":"grill","variant_quantity":"20"},{"variant_id":"7cad7800-3a97-11ee-8b47-b10a97123a83","variant_image":"https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fimages%2F7cad7800-3a97-11ee-8b47-b10a97123a83.png?alt=media&token=57bf6d62-c9fc-41e7-b558-3c49ca679e92","variant_price":"70","variant_sku":"no grill","variant_quantity":"30"}]}
FIELD | name | type=String | value=Sandwich
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fea57e634-d348-437d-b336-708f9b5685f7.png?alt=media&token=3a660cc8-c09c-41f3-8b07-a6869466e5d3
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fea57e634-d348-437d-b336-708f9b5685f7.png?alt=media&token=3a660cc8-c09c-41f3-8b07-a6869466e5d3"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=Boolean | value=true

DOC: 3oCIlmcBu98TbTsgpQ5I
FIELD | categoryID | type=String | value=lNZkE309uNZB4v9jkChM
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963789,"_nanoseconds":447000000}
FIELD | id | type=String | value=3oCIlmcBu98TbTsgpQ5I
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Handbag
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F53ca6335-100b-405e-a94e-e3af2306686c.png?alt=media&token=a3c50db0-ae00-4131-89a4-de49d6b94821
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963789,"_nanoseconds":447000000}

DOC: 3zXbJK9FY45crkeTX8ss
FIELD | categoryID | type=String | value=zzq4LngLd8PWzYJfsvnjfV
FIELD | createdAt | type=Timestamp | value={"_seconds":1782935367,"_nanoseconds":430000000}
FIELD | id | type=String | value=3zXbJK9FY45crkeTX8ss
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c38a8dad77","attribute_options":["merah"]}],"variants":[{"variant_id":"5f611bd1725f08","variant_image":"https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2Fvariant_merah_1677929668911.51?alt=media&token=307ff124-fcdb-4c4d-a845-ca5d7756f71c","variant_price":"1","variant_sku":"merah","variant_quantity":"2994"}]}
FIELD | name | type=String | value=Almond Coklat
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/emart%2Fstore%2FproductImages%2F2aba5868-cda0-4640-82e8-c4c20b816b02.png?alt=media&token=a6af3daa-17ae-4dca-80d4-c1a952a55023
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/emart%2Fstore%2FproductImages%2F2aba5868-cda0-4640-82e8-c4c20b816b02.png?alt=media&token=a6af3daa-17ae-4dca-80d4-c1a952a55023"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=Boolean | value=true
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782935367,"_nanoseconds":430000000}

DOC: 45mQMRd3whkDDL5ueZSP
FIELD | categoryID | type=String | value=62ecf8cb6aeae
FIELD | id | type=String | value=45mQMRd3whkDDL5ueZSP
FIELD | name | type=String | value=Balkan 176 Vodka
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FBalkan%20176%20Vodka.webp?alt=media&token=81e8bcfe-e3f1-4556-9ab8-3f075642c57c
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 47VwCqkCx343GR75Or0v
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | id | type=String | value=47VwCqkCx343GR75Or0v
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Double Cheese Pizza
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fdcb294fb-66e3-469b-b69a-630ab3888cd3.png?alt=media&token=3fd2cc78-3e4a-44f0-abc5-3085a709f80b
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fdcb294fb-66e3-469b-b69a-630ab3888cd3.png?alt=media&token=3fd2cc78-3e4a-44f0-abc5-3085a709f80b"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=Boolean | value=true

DOC: 4EweJFqHtD5AqlATLbwt
FIELD | categoryID | type=String | value=62ecfa2615a59
FIELD | id | type=String | value=4EweJFqHtD5AqlATLbwt
FIELD | name | type=String | value=Face mask
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgarnier%20serum%20sheet%20mask.jpg?alt=media&token=cbcc2d2b-5477-4d61-a88c-1b1aaf6d9c8f
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 4QDVmkt1JsEgMM8m0LwW
FIELD | categoryID | type=String | value=62ecfa2591016
FIELD | id | type=String | value=4QDVmkt1JsEgMM8m0LwW
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=ال
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F2_1691563800544.png?alt=media&token=dfd3376f-e7b8-49a3-9e6e-5a1f9bf5169b
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F2_1691563800544.png?alt=media&token=dfd3376f-e7b8-49a3-9e6e-5a1f9bf5169b"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | takeawayOption | type=Boolean | value=true

DOC: 4do2QclirTx9cxq4zjeh
FIELD | categoryID | type=String | value=636b70cc5a600
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963806,"_nanoseconds":827000000}
FIELD | id | type=String | value=4do2QclirTx9cxq4zjeh
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Women's Top
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963806,"_nanoseconds":827000000}

DOC: 4kZpNSd9BmvVyMHd43RQ
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | id | type=String | value=4kZpNSd9BmvVyMHd43RQ
FIELD | name | type=String | value=Hamburger
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fb3824229-0ae4-4a38-83f7-eb220bd5d237.png?alt=media&token=367ce87d-7437-409d-9c0c-567b39be55cb
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=boolean | value=false

DOC: 53i1yX0x8KZ8FqIa8MAm
FIELD | categoryID | type=String | value=62ecf0f1c144b
FIELD | id | type=String | value=53i1yX0x8KZ8FqIa8MAm
FIELD | name | type=String | value=Regular Cheese Sandwich
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F9743b909-25f8-4e92-8978-ec0fe86d44d0.png?alt=media&token=82bd2c8d-c381-4087-8289-a5d9d25c5d33
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=boolean | value=false

DOC: 56u25aI2JUzgBmLwPIeh
FIELD | categoryID | type=String | value=OvjEAidyRSeuoH81pK4O
FIELD | id | type=String | value=56u25aI2JUzgBmLwPIeh
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"6472656838f79","attribute_options":["4 pics "]}],"variants":[{"variant_id":"0c632080-3aa2-11ee-bbb5-bb8ca105bff2","variant_image":"","variant_price":"0","variant_sku":"4 pics ","variant_quantity":"-1"}]}
FIELD | name | type=String | value=Chicken 🍗 Masala
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=boolean | value=false

DOC: 5oPQV6YEM7cSOLAGnSoP
FIELD | categoryID | type=String | value=62ecfdfb02b2a
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963761,"_nanoseconds":673000000}
FIELD | id | type=String | value=5oPQV6YEM7cSOLAGnSoP
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c38a8dad77","attribute_options":["Cream","White","Orange"]},{"attribute_id":"633c392080ec6","attribute_options":["L","XL"]}],"variants":[{"variant_id":"5f0e293fb81e4c","variant_image":"https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fimages%2F4770d020-8510-11ed-9acf-8f0a8d2a1175.png?alt=media&token=ca6c42f5-53df-4aae-ae6a-000695f7e7f3","variant_price":"69","variant_sku":"Cream-L","variant_quantity":"56"},{"variant_id":"5f0e293fb7fb68","variant_image":null,"variant_price":"1","variant_sku":"White-L","variant_quantity":"0"},{"variant_id":"5f0e293fb7ec5c","variant_image":"https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fimages%2F44d31ad0-8510-11ed-8cd8-c9602cf9ff0c.png?alt=media&token=d5b81437-ae6a-4752-86c9-674f40f43f80","variant_price":"59","variant_sku":"Orange-L","variant_quantity":"13"},{"variant_id":"5f0e293fb7ea68","variant_image":null,"variant_price":"89","variant_sku":"Cream-XL","variant_quantity":"9"},{"variant_id":"5f0e293fb7f954","variant_image":null,"variant_price":"1","variant_sku":"White-XL","variant_quantity":"47"},{"variant_id":"5f0e293fb80388","variant_image":null,"variant_price":"100","variant_sku":"Orange-XL","variant_quantity":"-1"}]}
FIELD | name | type=String | value=Printed T-shirts 
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F6d139083-ce38-47f4-90a3-c63549af9cf6.png?alt=media&token=6ab9e02e-0bf8-46ba-a9da-01b4b2c8b20d
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F6d139083-ce38-47f4-90a3-c63549af9cf6.png?alt=media&token=6ab9e02e-0bf8-46ba-a9da-01b4b2c8b20d","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F1109ef2b-5c79-4412-9679-5866b18bc690.png?alt=media&token=38e90baa-36b1-4a6f-8ee5-9be58ddb1d79","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F383c4bae-3d6c-49dd-990f-26174b6c2d81.png?alt=media&token=593d17fd-3820-49ee-ae90-be68d4993407"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963761,"_nanoseconds":673000000}

DOC: 626fd5a4b2402
FIELD | categoryID | type=String | value=62ecfa27888a9
FIELD | id | type=String | value=626fd5a4b2402
FIELD | name | type=String | value=Hair band accessories 
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fhair%20band.jpeg?alt=media&token=d57d0c89-d5cf-43ac-9f8f-a10940c3cd5d
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 6270c67279103
FIELD | categoryID | type=String | value=636b70cc5a600
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963807,"_nanoseconds":139000000}
FIELD | id | type=String | value=6270c67279103
FIELD | item_attribute | type=Object | value={"attributes":[],"variants":[]}
FIELD | name | type=String | value=Girl's Shirt
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F0d5360f7-fcba-44f8-8fb6-b5bbc95f55d3.png?alt=media&token=8f0b6a03-8f32-4994-9256-76c29949a093
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F0d5360f7-fcba-44f8-8fb6-b5bbc95f55d3.png?alt=media&token=8f0b6a03-8f32-4994-9256-76c29949a093"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=Boolean | value=true
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963807,"_nanoseconds":139000000}

DOC: 6270c6dc5da16
FIELD | categoryID | type=String | value=88pNxhccktxkSgIndZ8e
FIELD | id | type=String | value=6270c6dc5da16
FIELD | name | type=String | value=Lemon
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Flemon1.webp?alt=media&token=feb180fc-f996-4fe4-b7f8-b881e10d2a73
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 6270c79e51261
FIELD | categoryID | type=String | value=zzq4LngLd8PWzYJfsvnjfV
FIELD | id | type=String | value=6270c79e51261
FIELD | name | type=String | value=Potato chips
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Fpw.webp?alt=media&token=11e4ed37-56bf-4b97-b2ff-79d6411b04bf
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=Boolean | value=true

DOC: 6270c7cb95252
FIELD | categoryID | type=String | value=zzq4LngLd8PWzYJfsvnjfV
FIELD | createdAt | type=Timestamp | value={"_seconds":1782935361,"_nanoseconds":801000000}
FIELD | id | type=String | value=6270c7cb95252
FIELD | name | type=String | value=Buiscuit
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Fbuiscuits.jpg?alt=media&token=78f82920-0bdb-43e7-82e5-e2cf9ad38da2
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782935361,"_nanoseconds":801000000}

DOC: 62d15b9d2300b
FIELD | categoryID | type=String | value=62ecf81dcd06f
FIELD | id | type=String | value=62d15b9d2300b
FIELD | name | type=String | value=Pineapple Mojito
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FPineapple%20Mojito%20-%20Easy%20Peasy%20Meals.jpg?alt=media&token=8933b415-f3bc-4ef6-bc3d-d89b3e44e10b
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62d79e30290ca
FIELD | categoryID | type=String | value=62ecf81e23675
FIELD | id | type=String | value=62d79e30290ca
FIELD | name | type=String | value=Bacardi 151
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FBacardi%20151.webp?alt=media&token=d800c30a-d7c6-4b59-850d-f53d0940fd03
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62dc06ac4edf6
FIELD | categoryID | type=String | value=62ecf8cb6aeae
FIELD | id | type=String | value=62dc06ac4edf6
FIELD | name | type=String | value=Balkan 176 Vodka
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FBalkan%20176%20Vodka.webp?alt=media&token=47635236-a5d5-4a12-947c-4cf4703e31b9
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

FIELD_TYPE_SUMMARY:
addOnsPrice => {"array":40}
addOnsTitle => {"array":40}
addon_name => {"string":19,"null":2}
addon_price => {"string":19,"null":2}
brandID => {"string":17,"String":9}
calories => {"number":29,"Number":11}
categoryID => {"String":40}
createdAt => {"Timestamp":13}
description => {"String":40}
digitalProduct => {"string":12,"String":1,"null":3}
disPrice => {"String":40}
fats => {"number":31,"Number":9}
grams => {"number":22,"Number":18}
id => {"String":40}
isDigitalProduct => {"boolean":15,"Boolean":1}
item_attribute => {"null":17,"Object":9}
name => {"String":40}
nonveg => {"boolean":37,"Boolean":3}
photo => {"String":34,"string":6}
photos => {"array":33}
price => {"String":40}
product_specification => {"Object":20,"null":6}
proteins => {"number":30,"Number":10}
publish => {"boolean":6,"Boolean":34}
quantity => {"Number":39,"number":1}
reviewAttributes => {"Object":19,"null":3}
reviewsCount => {"Number":8,"number":13}
reviewsSum => {"Number":8,"number":13}
section_id => {"String":28}
size => {"array":17}
sizePrice => {"array":17}
step45cCreatedAtPatch => {"Boolean":4}
step45cCreatedAtPatchAt => {"Timestamp":4}
step46bCreatedAtPatch => {"Boolean":9}
step46bCreatedAtPatchAt => {"Timestamp":9}
takeawayOption => {"boolean":31,"Boolean":9}
updatedAt => {"Timestamp":13}
veg => {"Boolean":31,"boolean":9}
vendorID => {"String":40}

### Collection: vendor_categories
DOC_COUNT_SAMPLED: 40

DOC: 628c79e14b7e4
FIELD | id | type=String | value=628c79e14b7e4
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FWatches.png?alt=media&token=7402409e-7237-40ea-b342-e0b510187082
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Watches

DOC: 62cd5926d5186
FIELD | id | type=String | value=62cd5926d5186
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fburger.png?alt=media&token=b89d777c-109f-4235-bea3-a0ddd3b06838
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Burger

DOC: 62dc0673d235b
FIELD | id | type=String | value=62dc0673d235b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbeer.png?alt=media&token=e154fe93-8f24-42b0-9e7b-410003b10343
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Beer

DOC: 62e3735c7df56
FIELD | id | type=String | value=62e3735c7df56
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fshushi.png?alt=media&token=10b07070-2480-427c-86c2-32f28124c444
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Sushi

DOC: 62ecedf41a7fe
FIELD | id | type=String | value=62ecedf41a7fe
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Framen.png?alt=media&token=aeec11c2-c4b5-4b09-a8ea-79cbaf6f9377
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Ramen

DOC: 62eceea3c1cd9
FIELD | id | type=String | value=62eceea3c1cd9
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbar_food.png?alt=media&token=b4b985b8-6510-4656-9625-858f306347bb
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Bar Food

DOC: 62ecef0780589
FIELD | id | type=String | value=62ecef0780589
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FScreenshot_20221205-180641_YouTube_1670522454191.jpg?alt=media&token=d84eeb02-b1e6-4f30-9118-c0b286b67915
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Yemen

DOC: 62ecef57887cb
FIELD | id | type=String | value=62ecef57887cb
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fnew_maxican.png?alt=media&token=cfdd283f-5e2b-4e4f-bad1-3ebd73bf1cac
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=New Mexican

DOC: 62ecf0f1c144b
FIELD | id | type=String | value=62ecf0f1c144b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fsandwiches.png?alt=media&token=67692799-ba7e-4282-93e5-6f0a0a2ca8ad
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Sandwich

DOC: 62ecf18f51a76
FIELD | id | type=String | value=62ecf18f51a76
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmediterranean.png?alt=media&token=6701d146-77e9-43cb-a8a1-4aeafe95af1d
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Mediterranean

DOC: 62ecf35007e34
FIELD | id | type=String | value=62ecf35007e34
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fhair_Care.png?alt=media&token=42caf464-0d7b-4e0b-ad96-339b82f8e93d
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Hair care

DOC: 62ecf81cedfd9
FIELD | id | type=String | value=62ecf81cedfd9
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fsparkling.png?alt=media&token=bf562beb-6c57-41ec-8f9c-b1ba9cb15dfc
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Sparkling

DOC: 62ecf81d6e41b
FIELD | id | type=String | value=62ecf81d6e41b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fwine.png?alt=media&token=f82f203d-5b7d-42e9-88cf-20f2f8976f60
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Wine

DOC: 62ecf81dcd06f
FIELD | id | type=String | value=62ecf81dcd06f
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FCocktail.png?alt=media&token=17c89e83-8940-4fd6-81a0-d8e4e4d2e30f
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Cocktail

DOC: 62ecf81e23675
FIELD | id | type=String | value=62ecf81e23675
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FLiquor.png?alt=media&token=9cf615f1-8dee-43e6-bb6c-272bcbc46f5b
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Liquor

DOC: 62ecf8cb6aeae
FIELD | id | type=String | value=62ecf8cb6aeae
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FVodka.png?alt=media&token=255c01df-7e5c-46cc-8a32-bd39d3ef42b3
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Vodka

DOC: 62ecf8cba3ad3
FIELD | id | type=String | value=62ecf8cba3ad3
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fextra.png?alt=media&token=cc2f8c6d-1e9a-4d62-93a3-5b41d2939050
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Extra

DOC: 62ecfa2591016
FIELD | id | type=String | value=62ecfa2591016
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FHair_extensions.png?alt=media&token=77b0298b-fd1a-48a8-8aa1-cc9327f5d53c
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Hair extensions

DOC: 62ecfa25d2ced
FIELD | id | type=String | value=62ecfa25d2ced
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fwigs.png?alt=media&token=0ab955ad-0bf5-49f0-93b6-e56abf036027
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Wigs

DOC: 62ecfa2615a59
FIELD | id | type=String | value=62ecfa2615a59
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fskin_care.png?alt=media&token=4fcfe380-bc28-40e4-bc6b-f8c9377d0487
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Skin care

DOC: 62ecfa264e7d8
FIELD | id | type=String | value=62ecfa264e7d8
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmackup.png?alt=media&token=e798f095-0e4d-47ee-a913-911953025875
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Make up

DOC: 62ecfa27888a9
FIELD | id | type=String | value=62ecfa27888a9
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FAccessories.png?alt=media&token=019c5a04-d320-45bb-a4f4-f842ac67b2a5
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Accessories

DOC: 62ecfdfb02b2a
FIELD | id | type=String | value=62ecfdfb02b2a
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmen%20(2).png?alt=media&token=6a918bf3-fe17-483c-bb09-0dfe4da67fa7
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Men's wear

DOC: 62ecfdfb47287
FIELD | id | type=String | value=62ecfdfb47287
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fjwlr.png?alt=media&token=6748103c-2d5f-4e57-ad78-5372702d5c29
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Jewellery

DOC: 62ecff6a8c983
FIELD | id | type=String | value=62ecff6a8c983
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FCarnations.png?alt=media&token=c9a2a197-5cdf-4339-b292-bf21ab1a29d2
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=Carnations

DOC: 62ecff6af068d
FIELD | id | type=String | value=62ecff6af068d
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FOrchids.png?alt=media&token=1b33e20c-92fe-4d4e-afb0-829ae539fc56
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=Orchids

DOC: 62ecff6b401f7
FIELD | id | type=String | value=62ecff6b401f7
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FLilies.png?alt=media&token=c6c0f34c-876d-4c8a-8126-ed2067d8019e
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=Lilies

DOC: 62ecff6b9816b
FIELD | id | type=String | value=62ecff6b9816b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FFlowers-Basket.png?alt=media&token=9173d6bb-4856-4957-b863-2331167de127
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=Flowers Basket

DOC: 62f22bd707b80
FIELD | id | type=String | value=62f22bd707b80
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Flogo.png?alt=media&token=a7c2fa43-bba3-4626-a012-23a1dcff6c18
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Homeopathic Hospital

DOC: 63658e2a3d840
FIELD | id | type=String | value=63658e2a3d840
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fseefood-bg2.png?alt=media&token=4fdedeeb-f1bf-42b6-8bdc-dbb9213d9c8e
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=bismi

DOC: 636b70cc5a600
FIELD | id | type=String | value=636b70cc5a600
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FDress_20.jpg?alt=media&token=1477dcff-4990-4592-9f05-e31916dae15f
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Women's Wear

DOC: 636e30433dd7e
FIELD | id | type=String | value=636e30433dd7e
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Ffruits.png?alt=media&token=c11f1d6d-ab54-4b03-aac4-59371e17624c
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Fruits

DOC: 636e34286dd8d
FIELD | id | type=String | value=636e34286dd8d
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F3d-realistic-cosmetic-bottle-ads-600w-725617681.webp?alt=media&token=1eccfc60-20d7-4385-a369-c9f387f8d8f5
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=ok

DOC: 637dfc9eae109
FIELD | id | type=String | value=637dfc9eae109
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fthumb2_1669201224369.jpg?alt=media&token=74766d1b-a105-46c8-ae72-143a1c7c6640
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=testcat

DOC: 638527080321b
FIELD | id | type=String | value=638527080321b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Felectric-car-charging-at-home-clean-energy-filling-technology_1669670698003.jpg?alt=media&token=e8a7743d-6f21-484d-9fc4-5cda3962bea9
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=631852d1bc978
FIELD | title | type=String | value=Carro

DOC: 63a2b7478c6a5
FIELD | id | type=String | value=63a2b7478c6a5
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdownload%20(2)_1671608196062.jpg?alt=media&token=fb097d1b-db64-4eca-a708-2d68626fdc0b
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Food

DOC: 63aaf0142902b
FIELD | id | type=String | value=63aaf0142902b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fclassic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05_1672147010675.jpg?alt=media&token=bf036cbf-4fe3-4706-be05-2d1853f58942
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=بيتزا

DOC: 642441a252ab9
FIELD | id | type=String | value=642441a252ab9
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbbk_1680098833659.jpg?alt=media&token=fa3e78b7-20f2-4020-9cab-88bb743c080b
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Bakery

DOC: 644b996f2ff9a
FIELD | id | type=String | value=644b996f2ff9a
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdownload_1682676204853.jpg?alt=media&token=9085c061-6e73-4281-8791-f6c13fa38b9e
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=thai 

DOC: 646ed350d0543
FIELD | id | type=String | value=646ed350d0543
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Falitas-pollo-al-horno-al-estilo-asiatico_1684984770055.jpg?alt=media&token=8ba35880-4b70-4177-9149-6de6f1f41529
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Alitas

FIELD_TYPE_SUMMARY:
description => {"String":39,"string":1}
id => {"String":40}
order => {"Number":40}
photo => {"String":40}
publish => {"boolean":13,"Boolean":27}
review_attributes => {"array":40}
section_id => {"String":33,"null":7}
show_in_homepage => {"boolean":33,"Boolean":7}
title => {"String":40}
TEXT_END

## 4. Sync Risk Rules
TEXT_START
RULE_VENDOR_CREATEDAT: customer/orderBy may require createdAt.
RULE_PRODUCT_CREATEDAT: customer product query uses orderBy(createdAt), missing createdAt makes product invisible.
RULE_VENDOR_CATEGORY_ARRAYS: vendor category fields must be array-safe when app expects list.
RULE_PRODUCT_ITEM_ATTRIBUTE: incomplete item_attribute can break product card variant UI.
RULE_VENDOR_LOCATION: zoneId/latitude/longitude/coordinates must be present for nearby vendor fetch.
RULE_PUBLISH_ACTIVE: customer app often filters by publish/isActive.
TEXT_END

## Final Status
STATUS: SERVICE_47A_ADMIN_FIREBASE_CUSTOMER_SYNC_MAP_AUDITED