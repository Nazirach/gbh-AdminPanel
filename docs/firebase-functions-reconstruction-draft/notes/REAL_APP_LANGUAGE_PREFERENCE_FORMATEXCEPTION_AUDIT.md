# LANGUAGE PREFERENCE FORMATEXCEPTION AUDIT

Generated: 06/28/2026 22:41:21

Mode: read-only. No patch. No Firebase write. No order creation.

## Suspected Cause

- Fashion blank screen produced FormatException: Unexpected end of input.
- constant.dart has Constant.getLanguage() that runs jsonDecode(Preferences.getString(Preferences.languageCodeKey)).
- If language preference is empty string, jsonDecode('') will throw the same FormatException.


## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
```dart
26: import 'package:mailer/smtp_server.dart';
27: import 'package:url_launcher/url_launcher.dart';
28: import 'package:uuid/uuid.dart';
29: import '../models/cart_product_model.dart';
30: import '../models/coupon_model.dart';
31: import '../models/email_template_model.dart';
32: import '../models/language_model.dart';
33: import '../models/mail_setting.dart';
34: import '../models/section_model.dart';
35: import '../service/fire_store_utils.dart';
36: import '../themes/show_toast_dialog.dart';
37: import '../widget/permission_dialog.dart';
38: import 'package:http/http.dart' as http;
39: 
40: RxList<CartProductModel> cartItem = <CartProductModel>[].obs;
41: 
42: class Constant {

227:       onTap();
228:     }
229:   }
230: 
231:   static bool get isRtl {
232:     final locale = Get.locale ?? Get.deviceLocale ?? const Locale('en');
233:     return Bidi.isRtlLanguage(locale.languageCode);
234:   }
235: 
236:   static bool isExpire(VendorModel venderModel) {
237:     bool isPlanExpire = false;
238:     if (venderModel.subscriptionPlan?.id != null) {
239:       if (venderModel.subscriptionExpiryDate == null) {
240:         if (venderModel.subscriptionPlan?.expiryDay == '-1') {
241:           isPlanExpire = false;
242:         } else {
243:           isPlanExpire = true;

545:   }
546: 
547:   static DateTime stringToDate(String openDineTime) {
548:     return DateFormat('HH:mm').parse(DateFormat('HH:mm').format(DateFormat("hh:mm a").parse((Intl.getCurrentLocale() == "en_US") ? openDineTime : openDineTime.toLowerCase())));
549:   }
550: 
551:   static LanguageModel getLanguage() {
552:     final String user = Preferences.getString(Preferences.languageCodeKey);
553:     Map<String, dynamic> userMap = jsonDecode(user);
554:     return LanguageModel.fromJson(userMap);
555:   }
556: 
557:   static String orderId({String orderId = ''}) {
558:     return "#$orderId";
559:     //return "#${(orderId).substring(orderId.length - 10)}";
560:   }
561: 

546: 
547:   static DateTime stringToDate(String openDineTime) {
548:     return DateFormat('HH:mm').parse(DateFormat('HH:mm').format(DateFormat("hh:mm a").parse((Intl.getCurrentLocale() == "en_US") ? openDineTime : openDineTime.toLowerCase())));
549:   }
550: 
551:   static LanguageModel getLanguage() {
552:     final String user = Preferences.getString(Preferences.languageCodeKey);
553:     Map<String, dynamic> userMap = jsonDecode(user);
554:     return LanguageModel.fromJson(userMap);
555:   }
556: 
557:   static String orderId({String orderId = ''}) {
558:     return "#$orderId";
559:     //return "#${(orderId).substring(orderId.length - 10)}";
560:   }
561: 
562:   static bool isPointInPolygon(LatLng point, List<GeoPoint> polygon) {

547:   static DateTime stringToDate(String openDineTime) {
548:     return DateFormat('HH:mm').parse(DateFormat('HH:mm').format(DateFormat("hh:mm a").parse((Intl.getCurrentLocale() == "en_US") ? openDineTime : openDineTime.toLowerCase())));
549:   }
550: 
551:   static LanguageModel getLanguage() {
552:     final String user = Preferences.getString(Preferences.languageCodeKey);
553:     Map<String, dynamic> userMap = jsonDecode(user);
554:     return LanguageModel.fromJson(userMap);
555:   }
556: 
557:   static String orderId({String orderId = ''}) {
558:     return "#$orderId";
559:     //return "#${(orderId).substring(orderId.length - 10)}";
560:   }
561: 
562:   static bool isPointInPolygon(LatLng point, List<GeoPoint> polygon) {
563:     int crossings = 0;

548:     return DateFormat('HH:mm').parse(DateFormat('HH:mm').format(DateFormat("hh:mm a").parse((Intl.getCurrentLocale() == "en_US") ? openDineTime : openDineTime.toLowerCase())));
549:   }
550: 
551:   static LanguageModel getLanguage() {
552:     final String user = Preferences.getString(Preferences.languageCodeKey);
553:     Map<String, dynamic> userMap = jsonDecode(user);
554:     return LanguageModel.fromJson(userMap);
555:   }
556: 
557:   static String orderId({String orderId = ''}) {
558:     return "#$orderId";
559:     //return "#${(orderId).substring(orderId.length - 10)}";
560:   }
561: 
562:   static bool isPointInPolygon(LatLng point, List<GeoPoint> polygon) {
563:     int crossings = 0;
564:     for (int i = 0; i < polygon.length; i++) {

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart
```dart
190:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
191:   Rx<Xendit> xenditModel = Xendit().obs;
192: 
193:   Future<void> getPaymentSettings() async {
194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));

191:   Rx<Xendit> xenditModel = Xendit().obs;
192: 
193:   Future<void> getPaymentSettings() async {
194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));

192: 
193:   Future<void> getPaymentSettings() async {
194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));

193:   Future<void> getPaymentSettings() async {
194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 

194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {

195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;

198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {

199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
216:       } else if (payPalModel.value.isEnabled == true) {

201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
216:       } else if (payPalModel.value.isEnabled == true) {
217:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
216:       } else if (payPalModel.value.isEnabled == true) {
217:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
218:       } else if (payStackModel.value.isEnable == true) {

278:       await Stripe.instance.presentPaymentSheet().then((value) {
279:         ShowToastDialog.showToast("Payment successfully".tr);
280:         placeOrder();
281:       });
282:     } on StripeException catch (e) {
283:       var lo1 = jsonEncode(e);
284:       var lo2 = jsonDecode(lo1);
285:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
286:       ShowToastDialog.showToast(lom.error.message);
287:     } catch (e) {
288:       ShowToastDialog.showToast(e.toString());
289:     }
290:   }
291: 
292:   Future createStripeIntent({required String amount}) async {
293:     try {
294:       Map<String, dynamic> body = {

307:       var response = await http.post(
308:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
309:         body: body,
310:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
311:       );
312: 
313:       return jsonDecode(response.body);
314:     } catch (e) {
315:       log(e.toString());
316:     }
317:   }
318: 
319:   //mercadoo
320:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
321:     ShowToastDialog.showLoader("Please wait".tr);
322:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
323: 

337:       // Automatically return after payment is approved
338:     });
339: 
340:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
341: 
342:     if (response.statusCode == 200 || response.statusCode == 201) {
343:       final data = jsonDecode(response.body);
344:       ShowToastDialog.closeLoader();
345:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
346:         if (value) {
347:           ShowToastDialog.showToast("Payment Successful!!".tr);
348:           placeOrder();
349:         } else {
350:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
351:         }
352:       });
353:     } else {

446:       "customizations": {"title": "Payment for Services", "description": "Payment for XYZ services"},
447:     });
448: 
449:     final response = await http.post(url, headers: headers, body: body);
450: 
451:     if (response.statusCode == 200) {
452:       final data = jsonDecode(response.body);
453:       ShowToastDialog.closeLoader();
454:       Get.to(MercadoPagoScreen(initialURl: data['data']['link']))!.then((value) {
455:         if (value) {
456:           ShowToastDialog.showToast("Payment Successful!!".tr);
457:           placeOrder();
458:         } else {
459:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
460:         }
461:       });
462:     } else {

504:     final response = await http.post(
505:       Uri.parse(getChecksum),
506:       headers: {},
507:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString()},
508:     );
509: 
510:     final data = jsonDecode(response.body);
511:     await verifyCheckSum(checkSum: data["code"], amount: amount, orderId: orderId).then((value) {
512:       initiatePayment(amount: amount, orderId: orderId).then((value) {
513:         String callback = "";
514:         if (paytmModel.value.isSandboxEnabled == true) {
515:           callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
516:         } else {
517:           callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
518:         }
519: 
520:         GetPaymentTxtTokenModel result = value;

563:     String getChecksum = "${Constant.globalUrl}payments/validatechecksum";
564:     final response = await http.post(
565:       Uri.parse(getChecksum),
566:       headers: {},
567:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString(), "checksum_value": checkSum},
568:     );
569:     final data = jsonDecode(response.body);
570:     return data['status'];
571:   }
572: 
573:   Future<GetPaymentTxtTokenModel> initiatePayment({required double amount, required orderId}) async {
574:     String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";
575:     String callback = "";
576:     if (paytmModel.value.isSandboxEnabled == true) {
577:       callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
578:     } else {
579:       callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";

590:         "callback_url": callback,
591:         "custId": FireStoreUtils.getCurrentUid(),
592:         "issandbox": paytmModel.value.isSandboxEnabled == true ? "1" : "2",
593:       },
594:     );
595:     log(response.body);
596:     final data = jsonDecode(response.body);
597:     if (data["body"]["txnToken"] == null || data["body"]["txnToken"].toString().isEmpty) {
598:       Get.back();
599:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
600:     }
601:     return GetPaymentTxtTokenModel.fromJson(data);
602:   }
603: 
604:   ///RazorPay payment function
605:   final Razorpay razorPay = Razorpay();
606: 

678:         'usage_limit': 2,
679:         "callbacks": {"finish": "https://www.google.com?merchant_order_id=$ordersId"},
680:       }),
681:     );
682: 
683:     if (response.statusCode == 200 || response.statusCode == 201) {
684:       final responseData = jsonDecode(response.body);
685:       return responseData['payment_url'];
686:     } else {
687:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
688:       return '';
689:     }
690:   }
691: 
692:   String generateBasicAuthHeader(String apiKey) {
693:     String credentials = '$apiKey:';
694:     String base64Encoded = base64Encode(utf8.encode(credentials));

732:       Uri.parse(apiUrl),
733:       headers: <String, String>{'Authorization': "Basic ${orangeMoneyModel.value.auth ?? ''}", 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'},
734:       body: requestBody,
735:     );
736: 
737:     if (response.statusCode == 200) {
738:       Map<String, dynamic> responseData = jsonDecode(response.body);
739: 
740:       accessToken = responseData['access_token'] ?? '';
741:       if (accessToken.isEmpty) {
742:         ShowToastDialog.showToast("Failed to get access token".tr);
743:         return '';
744:       }
745: 
746:       return await webpayment(context: context, amountData: amount, currency: currency, orderIdData: orderId);
747:     } else {
748:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);

775:       Uri.parse(apiUrl),
776:       headers: <String, String>{'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
777:       body: json.encode(requestBody),
778:     );
779: 
780:     if (response.statusCode == 201) {
781:       Map<String, dynamic> responseData = jsonDecode(response.body);
782:       if (responseData['message'] == 'OK') {
783:         payToken = responseData['pay_token'] ?? '';
784:         return responseData['payment_url'] ?? '';
785:       } else {
786:         return '';
787:       }
788:     } else {
789:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
790:       return '';
791:     }

833:   //     body: requestBody,
834:   //   );
835:   //
836:   //   // Handle the response
837:   //
838:   //   if (response.statusCode == 200) {
839:   //     Map<String, dynamic> responseData = jsonDecode(response.body);
840:   //
841:   //     accessToken = responseData['access_token'];
842:   //     // ignore: use_build_context_synchronously
843:   //     return await webpayment(context: context, amountData: amount, currency: currency, orderIdData: orderId);
844:   //   } else {
845:   //     ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
846:   //     return '';
847:   //   }
848:   // }
849:   //

872:   //     headers: <String, String>{'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
873:   //     body: json.encode(requestBody),
874:   //   );
875:   //
876:   //   // Handle the response
877:   //   if (response.statusCode == 201) {
878:   //     Map<String, dynamic> responseData = jsonDecode(response.body);
879:   //     if (responseData['message'] == 'OK') {
880:   //       payToken = responseData['pay_token'];
881:   //       return responseData['payment_url'];
882:   //     } else {
883:   //       return '';
884:   //     }
885:   //   } else {
886:   //     ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
887:   //     return '';
888:   //   }

931:     });
932: 
933:     try {
934:       final response = await http.post(Uri.parse(url), headers: headers, body: body);
935: 
936:       if (response.statusCode == 200 || response.statusCode == 201) {
937:         XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
938:         return model;
939:       } else {
940:         return XenditModel();
941:       }
942:     } catch (e) {
943:       return XenditModel();
944:     }
945:   }
946: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart
```dart
980:   Rx<MidTrans> midTransModel = MidTrans().obs;
981:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
982:   Rx<Xendit> xenditModel = Xendit().obs;
983: 
984:   Future<void> getPaymentSettings() async {
985:     await FireStoreUtils.getPaymentSettingsData().then((value) {
986:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
987:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
988:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
989:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
990:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));

981:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
982:   Rx<Xendit> xenditModel = Xendit().obs;
983: 
984:   Future<void> getPaymentSettings() async {
985:     await FireStoreUtils.getPaymentSettingsData().then((value) {
986:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
987:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
988:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
989:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
990:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));

982:   Rx<Xendit> xenditModel = Xendit().obs;
983: 
984:   Future<void> getPaymentSettings() async {
985:     await FireStoreUtils.getPaymentSettingsData().then((value) {
986:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
987:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
988:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
989:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
990:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
998:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));

983: 
984:   Future<void> getPaymentSettings() async {
985:     await FireStoreUtils.getPaymentSettingsData().then((value) {
986:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
987:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
988:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
989:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
990:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
998:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
999: 

984:   Future<void> getPaymentSettings() async {
985:     await FireStoreUtils.getPaymentSettingsData().then((value) {
986:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
987:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
988:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
989:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
990:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
998:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
999: 
1000:       if (walletSettingModel.value.isEnabled == true) {

985:     await FireStoreUtils.getPaymentSettingsData().then((value) {
986:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
987:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
988:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
989:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
990:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
998:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
999: 
1000:       if (walletSettingModel.value.isEnabled == true) {
1001:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

986:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
987:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
988:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
989:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
990:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
998:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
999: 
1000:       if (walletSettingModel.value.isEnabled == true) {
1001:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1002:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

987:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
988:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
989:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
990:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
998:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
999: 
1000:       if (walletSettingModel.value.isEnabled == true) {
1001:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1002:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1003:         selectedPaymentMethod.value = PaymentGateway.cod.name;

988:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
989:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
990:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
998:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
999: 
1000:       if (walletSettingModel.value.isEnabled == true) {
1001:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1002:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1003:         selectedPaymentMethod.value = PaymentGateway.cod.name;
1004:       } else if (stripeModel.value.isEnabled == true) {

989:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
990:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
998:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
999: 
1000:       if (walletSettingModel.value.isEnabled == true) {
1001:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1002:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1003:         selectedPaymentMethod.value = PaymentGateway.cod.name;
1004:       } else if (stripeModel.value.isEnabled == true) {
1005:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

990:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
998:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
999: 
1000:       if (walletSettingModel.value.isEnabled == true) {
1001:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1002:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1003:         selectedPaymentMethod.value = PaymentGateway.cod.name;
1004:       } else if (stripeModel.value.isEnabled == true) {
1005:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
1006:       } else if (payPalModel.value.isEnabled == true) {

991:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
998:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
999: 
1000:       if (walletSettingModel.value.isEnabled == true) {
1001:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1002:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1003:         selectedPaymentMethod.value = PaymentGateway.cod.name;
1004:       } else if (stripeModel.value.isEnabled == true) {
1005:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
1006:       } else if (payPalModel.value.isEnabled == true) {
1007:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

992:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
993:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
994:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
995:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
996:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
997:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
998:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
999: 
1000:       if (walletSettingModel.value.isEnabled == true) {
1001:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1002:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1003:         selectedPaymentMethod.value = PaymentGateway.cod.name;
1004:       } else if (stripeModel.value.isEnabled == true) {
1005:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
1006:       } else if (payPalModel.value.isEnabled == true) {
1007:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
1008:       } else if (payStackModel.value.isEnable == true) {

1067:       await Stripe.instance.presentPaymentSheet().then((value) {
1068:         ShowToastDialog.showToast("Payment successfully".tr);
1069:         completeOrder();
1070:       });
1071:     } on StripeException catch (e) {
1072:       var lo1 = jsonEncode(e);
1073:       var lo2 = jsonDecode(lo1);
1074:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
1075:       ShowToastDialog.showToast(lom.error.message);
1076:     } catch (e) {
1077:       ShowToastDialog.showToast(e.toString());
1078:     }
1079:   }
1080: 
1081:   Future createStripeIntent({required String amount}) async {
1082:     try {
1083:       Map<String, dynamic> body = {

1096:       var response = await http.post(
1097:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
1098:         body: body,
1099:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
1100:       );
1101: 
1102:       return jsonDecode(response.body);
1103:     } catch (e) {
1104:       log(e.toString());
1105:     }
1106:   }
1107: 
1108:   //mercadoo
1109:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
1110:     ShowToastDialog.showLoader("Please wait".tr);
1111:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
1112: 

1126:       // Automatically return after payment is approved
1127:     });
1128: 
1129:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
1130: 
1131:     if (response.statusCode == 200 || response.statusCode == 201) {
1132:       final data = jsonDecode(response.body);
1133:       ShowToastDialog.closeLoader();
1134:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
1135:         if (value) {
1136:           ShowToastDialog.showToast("Payment Successful!!".tr);
1137:           completeOrder();
1138:         } else {
1139:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
1140:         }
1141:       });
1142:     } else {

1239:       "customizations": {"title": "Payment for Services", "description": "Payment for XYZ services"},
1240:     });
1241: 
1242:     final response = await http.post(url, headers: headers, body: body);
1243: 
1244:     if (response.statusCode == 200) {
1245:       final data = jsonDecode(response.body);
1246:       ShowToastDialog.closeLoader();
1247:       Get.to(MercadoPagoScreen(initialURl: data['data']['link']))!.then((value) {
1248:         if (value) {
1249:           ShowToastDialog.showToast("Payment Successful!!".tr);
1250:           completeOrder();
1251:         } else {
1252:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
1253:         }
1254:       });
1255:     } else {

1297:     // final response = await http.post(
1298:     //   Uri.parse(getChecksum),
1299:     //   headers: {},
1300:     //   body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString()},
1301:     // );
1302:     //
1303:     // final data = jsonDecode(response.body);
1304:     // await verifyCheckSum(checkSum: data["code"], amount: amount, orderId: orderId).then((value) {
1305:     //   initiatePayment(amount: amount, orderId: orderId).then((value) {
1306:     //     String callback = "";
1307:     //     if (paytmModel.value.isSandboxEnabled == true) {
1308:     //       callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
1309:     //     } else {
1310:     //       callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
1311:     //     }
1312:     //
1313:     //     GetPaymentTxtTokenModel result = value;

1356:     String getChecksum = "${Constant.globalUrl}payments/validatechecksum";
1357:     final response = await http.post(
1358:       Uri.parse(getChecksum),
1359:       headers: {},
1360:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString(), "checksum_value": checkSum},
1361:     );
1362:     final data = jsonDecode(response.body);
1363:     return data['status'];
1364:   }
1365: 
1366:   Future<GetPaymentTxtTokenModel> initiatePayment({required double amount, required orderId}) async {
1367:     String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";
1368:     String callback = "";
1369:     if (paytmModel.value.isSandboxEnabled == true) {
1370:       callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
1371:     } else {
1372:       callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";

1383:         "callback_url": callback,
1384:         "custId": FireStoreUtils.getCurrentUid(),
1385:         "issandbox": paytmModel.value.isSandboxEnabled == true ? "1" : "2",
1386:       },
1387:     );
1388:     log(response.body);
1389:     final data = jsonDecode(response.body);
1390:     if (data["body"]["txnToken"] == null || data["body"]["txnToken"].toString().isEmpty) {
1391:       Get.back();
1392:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
1393:     }
1394:     return GetPaymentTxtTokenModel.fromJson(data);
1395:   }
1396: 
1397:   ///RazorPay payment function
1398:   final Razorpay razorPay = Razorpay();
1399: 

1471:         'usage_limit': 2,
1472:         "callbacks": {"finish": "https://www.google.com?merchant_order_id=$ordersId"},
1473:       }),
1474:     );
1475: 
1476:     if (response.statusCode == 200 || response.statusCode == 201) {
1477:       final responseData = jsonDecode(response.body);
1478:       return responseData['payment_url'];
1479:     } else {
1480:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
1481:       return '';
1482:     }
1483:   }
1484: 
1485:   String generateBasicAuthHeader(String apiKey) {
1486:     String credentials = '$apiKey:';
1487:     String base64Encoded = base64Encode(utf8.encode(credentials));

1523:       body: requestBody,
1524:     );
1525: 
1526:     // Handle the response
1527: 
1528:     if (response.statusCode == 200) {
1529:       Map<String, dynamic> responseData = jsonDecode(response.body);
1530: 
1531:       accessToken = responseData['access_token'];
1532:       // ignore: use_build_context_synchronously
1533:       return await webpayment(context: context, amountData: amount, currency: currency, orderIdData: orderId);
1534:     } else {
1535:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
1536:       return '';
1537:     }
1538:   }
1539: 

1558:       headers: <String, String>{'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
1559:       body: json.encode(requestBody),
1560:     );
1561: 
1562:     // Handle the response
1563:     if (response.statusCode == 201) {
1564:       Map<String, dynamic> responseData = jsonDecode(response.body);
1565:       if (responseData['message'] == 'OK') {
1566:         payToken = responseData['pay_token'];
1567:         return responseData['payment_url'];
1568:       } else {
1569:         return '';
1570:       }
1571:     } else {
1572:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
1573:       return '';
1574:     }

1617:     });
1618: 
1619:     try {
1620:       final response = await http.post(Uri.parse(url), headers: headers, body: body);
1621: 
1622:       if (response.statusCode == 200 || response.statusCode == 201) {
1623:         XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
1624:         return model;
1625:       } else {
1626:         return XenditModel();
1627:       }
1628:     } catch (e) {
1629:       return XenditModel();
1630:     }
1631:   }
1632: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_order_details_controller.dart
```dart
117:     final src = cabOrder.value.sourceLocation;
118:     final dest = cabOrder.value.destinationLocation;
119: 
120:     final url = "https://maps.googleapis.com/maps/api/directions/json?origin=${src!.latitude},${src.longitude}&destination=${dest!.latitude},${dest.longitude}&key=$googleApiKey";
121: 
122:     final response = await http.get(Uri.parse(url));
123:     final data = jsonDecode(response.body);
124: 
125:     if (data["routes"].isNotEmpty) {
126:       final points = data["routes"][0]["overview_polyline"]["points"];
127:       final polylinePoints = PolylinePoints.decodePolyline(points);
128: 
129:       final polylineCoords = polylinePoints.map((p) => gmap.LatLng(p.latitude, p.longitude)).toList();
130: 
131:       // ignore: invalid_use_of_protected_member
132:       googlePolylines.value = {gmap.Polyline(polylineId: const gmap.PolylineId("google_route"), color: AppThemeData.onDemandDark100, width: 5, points: polylineCoords)};
133:     }

138:     final src = cabOrder.value.sourceLocation;
139:     final dest = cabOrder.value.destinationLocation;
140: 
141:     final url = "http://router.project-osrm.org/route/v1/driving/${src!.longitude},${src.latitude};${dest!.longitude},${dest.latitude}?overview=full&geometries=geojson";
142: 
143:     final response = await http.get(Uri.parse(url));
144:     final data = jsonDecode(response.body);
145: 
146:     if (data["routes"].isNotEmpty) {
147:       final coords = data["routes"][0]["geometry"]["coordinates"] as List<dynamic>;
148: 
149:       osmPolyline.value = coords.map((c) => osm.LatLng(c[1].toDouble(), c[0].toDouble())).toList();
150:     }
151:   }
152: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart
```dart
120:             vendorModel.value = value;
121:           }
122:         });
123:       }
124:       calculatePrice();
125:     });
126:     selectedFoodType.value = Preferences.getString(Preferences.foodDeliveryType, defaultValue: "Delivery");
127: 
128:     await FireStoreUtils.getUserProfile(FireStoreUtils.getCurrentUid()).then((value) {
129:       if (value != null) {
130:         userModel.value = value;
131:       }
132:     });
133: 
134:     await FireStoreUtils.getDeliveryCharge().then((value) {
135:       if (value != null) {
136:         deliveryChargeModel.value = value;

551:   Rx<Xendit> xenditModel = Xendit().obs;
552:   RxBool isLoading = true.obs;
553: 
554:   Future<void> getPaymentSettings() async {
555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));

552:   RxBool isLoading = true.obs;
553: 
554:   Future<void> getPaymentSettings() async {
555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));

553: 
554:   Future<void> getPaymentSettings() async {
555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));

554:   Future<void> getPaymentSettings() async {
555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 

555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {

556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;

559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {

560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
577:       } else if (payPalModel.value.isEnabled == true) {

562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
577:       } else if (payPalModel.value.isEnabled == true) {
578:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
577:       } else if (payPalModel.value.isEnabled == true) {
578:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
579:       } else if (payStackModel.value.isEnable == true) {

639:       await Stripe.instance.presentPaymentSheet().then((value) {
640:         ShowToastDialog.showToast("Payment successfully".tr);
641:         placeOrder();
642:       });
643:     } on StripeException catch (e) {
644:       var lo1 = jsonEncode(e);
645:       var lo2 = jsonDecode(lo1);
646:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
647:       ShowToastDialog.showToast(lom.error.message);
648:     } catch (e) {
649:       ShowToastDialog.showToast(e.toString());
650:     }
651:   }
652: 
653:   Future createStripeIntent({required String amount}) async {
654:     try {
655:       Map<String, dynamic> body = {

668:       var response = await http.post(
669:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
670:         body: body,
671:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
672:       );
673: 
674:       return jsonDecode(response.body);
675:     } catch (e) {
676:       log(e.toString());
677:     }
678:   }
679: 
680:   //mercadoo
681:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
682:     ShowToastDialog.showLoader("Please wait".tr);
683:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
684: 

696:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
697:       "auto_return": "approved",
698:       // Automatically return after payment is approved
699:     });
700: 
701:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
702:     final data = jsonDecode(response.body);
703: 
704:     if (response.statusCode == 200 || response.statusCode == 201) {
705:       print("MercadoPago Preference Created: $data");
706:       ShowToastDialog.closeLoader();
707:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
708:         if (value) {
709:           ShowToastDialog.showToast("Payment Successful!!".tr);
710:           placeOrder();
711:         } else {
712:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);

813:       "customizations": {"title": "Payment for Services", "description": "Payment for XYZ services"},
814:     });
815: 
816:     final response = await http.post(url, headers: headers, body: body);
817: 
818:     if (response.statusCode == 200) {
819:       final data = jsonDecode(response.body);
820:       ShowToastDialog.closeLoader();
821:       Get.to(MercadoPagoScreen(initialURl: data['data']['link']))!.then((value) {
822:         if (value) {
823:           ShowToastDialog.showToast("Payment Successful!!".tr);
824:           placeOrder();
825:         } else {
826:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
827:         }
828:       });
829:     } else {

869:     final response = await http.post(
870:       Uri.parse(getChecksum),
871:       headers: {},
872:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString()},
873:     );
874: 
875:     final data = jsonDecode(response.body);
876:     await verifyCheckSum(checkSum: data["code"], amount: amount, orderId: orderId).then((value) {
877:       initiatePayment(amount: amount, orderId: orderId).then((value) {
878:         String callback = "";
879:         if (paytmModel.value.isSandboxEnabled == true) {
880:           callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
881:         } else {
882:           callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
883:         }
884: 
885:         GetPaymentTxtTokenModel result = value;

928:     String getChecksum = "${Constant.globalUrl}payments/validatechecksum";
929:     final response = await http.post(
930:       Uri.parse(getChecksum),
931:       headers: {},
932:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString(), "checksum_value": checkSum},
933:     );
934:     final data = jsonDecode(response.body);
935:     return data['status'];
936:   }
937: 
938:   Future<GetPaymentTxtTokenModel> initiatePayment({required double amount, required orderId}) async {
939:     String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";
940:     String callback = "";
941:     if (paytmModel.value.isSandboxEnabled == true) {
942:       callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
943:     } else {
944:       callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";

955:         "callback_url": callback,
956:         "custId": FireStoreUtils.getCurrentUid(),
957:         "issandbox": paytmModel.value.isSandboxEnabled == true ? "1" : "2",
958:       },
959:     );
960:     log(response.body);
961:     final data = jsonDecode(response.body);
962:     if (data["body"]["txnToken"] == null || data["body"]["txnToken"].toString().isEmpty) {
963:       Get.back();
964:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
965:     }
966:     return GetPaymentTxtTokenModel.fromJson(data);
967:   }
968: 
969:   ///RazorPay payment function
970:   final Razorpay razorPay = Razorpay();
971: 

1040:         'usage_limit': 2,
1041:         "callbacks": {"finish": "https://www.google.com?merchant_order_id=$ordersId"},
1042:       }),
1043:     );
1044: 
1045:     if (response.statusCode == 200 || response.statusCode == 201) {
1046:       final responseData = jsonDecode(response.body);
1047:       return responseData['payment_url'];
1048:     } else {
1049:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
1050:       return '';
1051:     }
1052:   }
1053: 
1054:   String generateBasicAuthHeader(String apiKey) {
1055:     String credentials = '$apiKey:';
1056:     String base64Encoded = base64Encode(utf8.encode(credentials));

1092:       body: requestBody,
1093:     );
1094: 
1095:     // Handle the response
1096: 
1097:     if (response.statusCode == 200) {
1098:       Map<String, dynamic> responseData = jsonDecode(response.body);
1099: 
1100:       accessToken = responseData['access_token'];
1101:       // ignore: use_build_context_synchronously
1102:       return await webpayment(context: context, amountData: amount, currency: currency, orderIdData: orderId);
1103:     } else {
1104:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
1105:       return '';
1106:     }
1107:   }
1108: 

1127:       headers: <String, String>{'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
1128:       body: json.encode(requestBody),
1129:     );
1130: 
1131:     // Handle the response
1132:     if (response.statusCode == 201) {
1133:       Map<String, dynamic> responseData = jsonDecode(response.body);
1134:       if (responseData['message'] == 'OK') {
1135:         payToken = responseData['pay_token'];
1136:         return responseData['payment_url'];
1137:       } else {
1138:         return '';
1139:       }
1140:     } else {
1141:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
1142:       return '';
1143:     }

1186:     });
1187: 
1188:     try {
1189:       final response = await http.post(Uri.parse(url), headers: headers, body: body);
1190: 
1191:       if (response.statusCode == 200 || response.statusCode == 201) {
1192:         XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
1193:         return model;
1194:       } else {
1195:         return XenditModel();
1196:       }
1197:     } catch (e) {
1198:       return XenditModel();
1199:     }
1200:   }
1201: 
1202:   bool isSelectedDateRestaurantOpen({required DateTime selectedDateTime}) {

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\change_language_controller.dart
```dart
1: import 'package:customer/constant/constant.dart';
2: import 'package:customer/models/language_model.dart';
3: import '../service/fire_store_utils.dart';
4: import 'package:customer/utils/preferences.dart';
5: import 'package:get/get.dart';
6: 
7: import '../constant/collection_name.dart';
8: 
9: class ChangeLanguageController extends GetxController {
10:   Rx<LanguageModel> selectedLanguage = LanguageModel().obs;
11:   RxList<LanguageModel> languageList = <LanguageModel>[].obs;
12:   RxBool isLoading = true.obs;

3: import '../service/fire_store_utils.dart';
4: import 'package:customer/utils/preferences.dart';
5: import 'package:get/get.dart';
6: 
7: import '../constant/collection_name.dart';
8: 
9: class ChangeLanguageController extends GetxController {
10:   Rx<LanguageModel> selectedLanguage = LanguageModel().obs;
11:   RxList<LanguageModel> languageList = <LanguageModel>[].obs;
12:   RxBool isLoading = true.obs;
13: 
14:   @override
15:   void onInit() {
16:     // TODO: implement onInit
17:     getLanguage();
18: 
19:     super.onInit();

4: import 'package:customer/utils/preferences.dart';
5: import 'package:get/get.dart';
6: 
7: import '../constant/collection_name.dart';
8: 
9: class ChangeLanguageController extends GetxController {
10:   Rx<LanguageModel> selectedLanguage = LanguageModel().obs;
11:   RxList<LanguageModel> languageList = <LanguageModel>[].obs;
12:   RxBool isLoading = true.obs;
13: 
14:   @override
15:   void onInit() {
16:     // TODO: implement onInit
17:     getLanguage();
18: 
19:     super.onInit();
20:   }

5: import 'package:get/get.dart';
6: 
7: import '../constant/collection_name.dart';
8: 
9: class ChangeLanguageController extends GetxController {
10:   Rx<LanguageModel> selectedLanguage = LanguageModel().obs;
11:   RxList<LanguageModel> languageList = <LanguageModel>[].obs;
12:   RxBool isLoading = true.obs;
13: 
14:   @override
15:   void onInit() {
16:     // TODO: implement onInit
17:     getLanguage();
18: 
19:     super.onInit();
20:   }
21: 

11:   RxList<LanguageModel> languageList = <LanguageModel>[].obs;
12:   RxBool isLoading = true.obs;
13: 
14:   @override
15:   void onInit() {
16:     // TODO: implement onInit
17:     getLanguage();
18: 
19:     super.onInit();
20:   }
21: 
22:   Future<void> getLanguage() async {
23:     await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("languages").get().then((event) {
24:       if (event.exists) {
25:         List languageListTemp = event.data()!["list"];
26:         for (var element in languageListTemp) {
27:           LanguageModel languageModel = LanguageModel.fromJson(element);

16:     // TODO: implement onInit
17:     getLanguage();
18: 
19:     super.onInit();
20:   }
21: 
22:   Future<void> getLanguage() async {
23:     await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("languages").get().then((event) {
24:       if (event.exists) {
25:         List languageListTemp = event.data()!["list"];
26:         for (var element in languageListTemp) {
27:           LanguageModel languageModel = LanguageModel.fromJson(element);
28:           if (languageModel.isActive == true) {
29:             languageList.add(languageModel);
30:           }
31:         }
32: 

17:     getLanguage();
18: 
19:     super.onInit();
20:   }
21: 
22:   Future<void> getLanguage() async {
23:     await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("languages").get().then((event) {
24:       if (event.exists) {
25:         List languageListTemp = event.data()!["list"];
26:         for (var element in languageListTemp) {
27:           LanguageModel languageModel = LanguageModel.fromJson(element);
28:           if (languageModel.isActive == true) {
29:             languageList.add(languageModel);
30:           }
31:         }
32: 
33:         if (Preferences.getString(Preferences.languageCodeKey).toString().isNotEmpty) {

19:     super.onInit();
20:   }
21: 
22:   Future<void> getLanguage() async {
23:     await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("languages").get().then((event) {
24:       if (event.exists) {
25:         List languageListTemp = event.data()!["list"];
26:         for (var element in languageListTemp) {
27:           LanguageModel languageModel = LanguageModel.fromJson(element);
28:           if (languageModel.isActive == true) {
29:             languageList.add(languageModel);
30:           }
31:         }
32: 
33:         if (Preferences.getString(Preferences.languageCodeKey).toString().isNotEmpty) {
34:           LanguageModel pref = Constant.getLanguage();
35:           for (var element in languageList) {

20:   }
21: 
22:   Future<void> getLanguage() async {
23:     await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("languages").get().then((event) {
24:       if (event.exists) {
25:         List languageListTemp = event.data()!["list"];
26:         for (var element in languageListTemp) {
27:           LanguageModel languageModel = LanguageModel.fromJson(element);
28:           if (languageModel.isActive == true) {
29:             languageList.add(languageModel);
30:           }
31:         }
32: 
33:         if (Preferences.getString(Preferences.languageCodeKey).toString().isNotEmpty) {
34:           LanguageModel pref = Constant.getLanguage();
35:           for (var element in languageList) {
36:             if (element.slug == pref.slug) {

21: 
22:   Future<void> getLanguage() async {
23:     await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("languages").get().then((event) {
24:       if (event.exists) {
25:         List languageListTemp = event.data()!["list"];
26:         for (var element in languageListTemp) {
27:           LanguageModel languageModel = LanguageModel.fromJson(element);
28:           if (languageModel.isActive == true) {
29:             languageList.add(languageModel);
30:           }
31:         }
32: 
33:         if (Preferences.getString(Preferences.languageCodeKey).toString().isNotEmpty) {
34:           LanguageModel pref = Constant.getLanguage();
35:           for (var element in languageList) {
36:             if (element.slug == pref.slug) {
37:               selectedLanguage.value = element;

22:   Future<void> getLanguage() async {
23:     await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("languages").get().then((event) {
24:       if (event.exists) {
25:         List languageListTemp = event.data()!["list"];
26:         for (var element in languageListTemp) {
27:           LanguageModel languageModel = LanguageModel.fromJson(element);
28:           if (languageModel.isActive == true) {
29:             languageList.add(languageModel);
30:           }
31:         }
32: 
33:         if (Preferences.getString(Preferences.languageCodeKey).toString().isNotEmpty) {
34:           LanguageModel pref = Constant.getLanguage();
35:           for (var element in languageList) {
36:             if (element.slug == pref.slug) {
37:               selectedLanguage.value = element;
38:             }

23:     await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("languages").get().then((event) {
24:       if (event.exists) {
25:         List languageListTemp = event.data()!["list"];
26:         for (var element in languageListTemp) {
27:           LanguageModel languageModel = LanguageModel.fromJson(element);
28:           if (languageModel.isActive == true) {
29:             languageList.add(languageModel);
30:           }
31:         }
32: 
33:         if (Preferences.getString(Preferences.languageCodeKey).toString().isNotEmpty) {
34:           LanguageModel pref = Constant.getLanguage();
35:           for (var element in languageList) {
36:             if (element.slug == pref.slug) {
37:               selectedLanguage.value = element;
38:             }
39:           }

27:           LanguageModel languageModel = LanguageModel.fromJson(element);
28:           if (languageModel.isActive == true) {
29:             languageList.add(languageModel);
30:           }
31:         }
32: 
33:         if (Preferences.getString(Preferences.languageCodeKey).toString().isNotEmpty) {
34:           LanguageModel pref = Constant.getLanguage();
35:           for (var element in languageList) {
36:             if (element.slug == pref.slug) {
37:               selectedLanguage.value = element;
38:             }
39:           }
40:         }
41:       }
42:     });
43: 

28:           if (languageModel.isActive == true) {
29:             languageList.add(languageModel);
30:           }
31:         }
32: 
33:         if (Preferences.getString(Preferences.languageCodeKey).toString().isNotEmpty) {
34:           LanguageModel pref = Constant.getLanguage();
35:           for (var element in languageList) {
36:             if (element.slug == pref.slug) {
37:               selectedLanguage.value = element;
38:             }
39:           }
40:         }
41:       }
42:     });
43: 
44:     isLoading.value = false;

29:             languageList.add(languageModel);
30:           }
31:         }
32: 
33:         if (Preferences.getString(Preferences.languageCodeKey).toString().isNotEmpty) {
34:           LanguageModel pref = Constant.getLanguage();
35:           for (var element in languageList) {
36:             if (element.slug == pref.slug) {
37:               selectedLanguage.value = element;
38:             }
39:           }
40:         }
41:       }
42:     });
43: 
44:     isLoading.value = false;
45:   }

31:         }
32: 
33:         if (Preferences.getString(Preferences.languageCodeKey).toString().isNotEmpty) {
34:           LanguageModel pref = Constant.getLanguage();
35:           for (var element in languageList) {
36:             if (element.slug == pref.slug) {
37:               selectedLanguage.value = element;
38:             }
39:           }
40:         }
41:       }
42:     });
43: 
44:     isLoading.value = false;
45:   }
46: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart
```dart
62: 
63:   RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
64: 
65:   Future<void> getData() async {
66:     isLoading.value = true;
67:     getCartData();
68:     selectedOrderTypeValue.value = Preferences.getString(Preferences.foodDeliveryType, defaultValue: "Delivery");
69:     await getZone();
70:     FireStoreUtils.getAllNearestRestaurant().listen((event) async {
71:       popularRestaurantList.clear();
72:       newArrivalRestaurantList.clear();
73:       allNearestRestaurant.clear();
74:       advertisementList.clear();
75: 
76:       allNearestRestaurant.addAll(event);
77:       newArrivalRestaurantList.addAll(event);
78:       popularRestaurantList.addAll(event);

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\gift_card_controller.dart
```dart
175:   Rx<MidTrans> midTransModel = MidTrans().obs;
176:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
177:   Rx<Xendit> xenditModel = Xendit().obs;
178: 
179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));

176:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
177:   Rx<Xendit> xenditModel = Xendit().obs;
178: 
179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));

177:   Rx<Xendit> xenditModel = Xendit().obs;
178: 
179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));

178: 
179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {

179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {

181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {

183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {

185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {
201:         selectedPaymentMethod.value = PaymentGateway.payStack.name;

186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {
201:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
202:       } else if (mercadoPagoModel.value.isEnabled == true) {

187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {
201:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
202:       } else if (mercadoPagoModel.value.isEnabled == true) {
203:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;

321:       await Stripe.instance.presentPaymentSheet().then((value) {
322:         ShowToastDialog.showToast("Payment successfully".tr);
323:         placeOrder();
324:       });
325:     } on StripeException catch (e) {
326:       var lo1 = jsonEncode(e);
327:       var lo2 = jsonDecode(lo1);
328:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
329:       ShowToastDialog.showToast(lom.error.message);
330:     } catch (e) {
331:       ShowToastDialog.showToast(e.toString());
332:     }
333:   }
334: 
335:   Future createStripeIntent({required String amount}) async {
336:     try {
337:       Map<String, dynamic> body = {

350:       var response = await http.post(
351:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
352:         body: body,
353:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
354:       );
355: 
356:       return jsonDecode(response.body);
357:     } catch (e) {
358:       print(e.toString());
359:     }
360:   }
361: 
362:   //mercadoo
363:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
364:     ShowToastDialog.showLoader("Please wait".tr);
365:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
366: 

379:       "auto_return": "approved", // Automatically return after payment is approved
380:     });
381: 
382:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
383: 
384:     if (response.statusCode == 200 || response.statusCode == 201) {
385:       final data = jsonDecode(response.body);
386:       ShowToastDialog.closeLoader();
387:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
388:         if (value) {
389:           ShowToastDialog.showToast("Payment Successful!!".tr);
390:           placeOrder();
391:         } else {
392:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
393:         }
394:       });
395:     } else {

454:       "customizations": {"title": "Payment for Services", "description": "Payment for XYZ services"},
455:     });
456: 
457:     final response = await http.post(url, headers: headers, body: body);
458: 
459:     if (response.statusCode == 200) {
460:       final data = jsonDecode(response.body);
461:       ShowToastDialog.closeLoader();
462:       Get.to(MercadoPagoScreen(initialURl: data['data']['link']))!.then((value) {
463:         if (value) {
464:           ShowToastDialog.showToast("Payment Successful!!".tr);
465:           placeOrder();
466:         } else {
467:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
468:         }
469:       });
470:     } else {

550:     final response = await http.post(
551:       Uri.parse(getChecksum),
552:       headers: {},
553:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString()},
554:     );
555: 
556:     final data = jsonDecode(response.body);
557:     await verifyCheckSum(checkSum: data["code"], amount: amount, orderId: orderId).then((value) {
558:       initiatePayment(amount: amount, orderId: orderId).then((value) {
559:         String callback = "";
560:         if (paytmModel.value.isSandboxEnabled == true) {
561:           callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
562:         } else {
563:           callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
564:         }
565: 
566:         GetPaymentTxtTokenModel result = value;

608:     String getChecksum = "${Constant.globalUrl}payments/validatechecksum";
609:     final response = await http.post(
610:       Uri.parse(getChecksum),
611:       headers: {},
612:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString(), "checksum_value": checkSum},
613:     );
614:     final data = jsonDecode(response.body);
615:     return data['status'];
616:   }
617: 
618:   Future<GetPaymentTxtTokenModel> initiatePayment({required double amount, required orderId}) async {
619:     String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";
620:     String callback = "";
621:     if (paytmModel.value.isSandboxEnabled == true) {
622:       callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
623:     } else {
624:       callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";

635:         "callback_url": callback,
636:         "custId": FireStoreUtils.getCurrentUid(),
637:         "issandbox": paytmModel.value.isSandboxEnabled == true ? "1" : "2",
638:       },
639:     );
640:     print(response.body);
641:     final data = jsonDecode(response.body);
642:     if (data["body"]["txnToken"] == null || data["body"]["txnToken"].toString().isEmpty) {
643:       Get.back();
644:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
645:     }
646:     return GetPaymentTxtTokenModel.fromJson(data);
647:   }
648: 
649:   ///RazorPay payment function
650:   final Razorpay razorPay = Razorpay();
651: 

718:         'usage_limit': 2,
719:         "callbacks": {"finish": "https://www.google.com?merchant_order_id=$ordersId"},
720:       }),
721:     );
722: 
723:     if (response.statusCode == 200 || response.statusCode == 201) {
724:       final responseData = jsonDecode(response.body);
725:       return responseData['payment_url'];
726:     } else {
727:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
728:       return '';
729:     }
730:   }
731: 
732:   String generateBasicAuthHeader(String apiKey) {
733:     String credentials = '$apiKey:';
734:     String base64Encoded = base64Encode(utf8.encode(credentials));

770:       body: requestBody,
771:     );
772: 
773:     // Handle the response
774: 
775:     if (response.statusCode == 200) {
776:       Map<String, dynamic> responseData = jsonDecode(response.body);
777: 
778:       accessToken = responseData['access_token'];
779:       // ignore: use_build_context_synchronously
780:       return await webpayment(context: context, amountData: amount, currency: currency, orderIdData: orderId);
781:     } else {
782:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
783:       return '';
784:     }
785:   }
786: 

805:       headers: <String, String>{'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
806:       body: json.encode(requestBody),
807:     );
808: 
809:     // Handle the response
810:     if (response.statusCode == 201) {
811:       Map<String, dynamic> responseData = jsonDecode(response.body);
812:       if (responseData['message'] == 'OK') {
813:         payToken = responseData['pay_token'];
814:         return responseData['payment_url'];
815:       } else {
816:         return '';
817:       }
818:     } else {
819:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
820:       return '';
821:     }

864:     });
865: 
866:     try {
867:       final response = await http.post(Uri.parse(url), headers: headers, body: body);
868: 
869:       if (response.statusCode == 200 || response.statusCode == 201) {
870:         XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
871:         return model;
872:       } else {
873:         return XenditModel();
874:       }
875:     } catch (e) {
876:       return XenditModel();
877:     }
878:   }
879: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart
```dart
983:   Rx<MidTrans> midTransModel = MidTrans().obs;
984:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
985:   Rx<Xendit> xenditModel = Xendit().obs;
986: 
987:   Future<void> getPaymentSettings() async {
988:     await FireStoreUtils.getPaymentSettingsData().then((value) {
989:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
990:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
991:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
992:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
993:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));

984:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
985:   Rx<Xendit> xenditModel = Xendit().obs;
986: 
987:   Future<void> getPaymentSettings() async {
988:     await FireStoreUtils.getPaymentSettingsData().then((value) {
989:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
990:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
991:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
992:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
993:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));

985:   Rx<Xendit> xenditModel = Xendit().obs;
986: 
987:   Future<void> getPaymentSettings() async {
988:     await FireStoreUtils.getPaymentSettingsData().then((value) {
989:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
990:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
991:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
992:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
993:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
1001:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));

986: 
987:   Future<void> getPaymentSettings() async {
988:     await FireStoreUtils.getPaymentSettingsData().then((value) {
989:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
990:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
991:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
992:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
993:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
1001:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
1002: 

987:   Future<void> getPaymentSettings() async {
988:     await FireStoreUtils.getPaymentSettingsData().then((value) {
989:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
990:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
991:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
992:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
993:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
1001:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
1002: 
1003:       if (walletSettingModel.value.isEnabled == true) {

988:     await FireStoreUtils.getPaymentSettingsData().then((value) {
989:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
990:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
991:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
992:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
993:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
1001:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
1002: 
1003:       if (walletSettingModel.value.isEnabled == true) {
1004:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

989:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
990:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
991:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
992:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
993:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
1001:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
1002: 
1003:       if (walletSettingModel.value.isEnabled == true) {
1004:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1005:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

990:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
991:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
992:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
993:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
1001:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
1002: 
1003:       if (walletSettingModel.value.isEnabled == true) {
1004:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1005:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1006:         selectedPaymentMethod.value = PaymentGateway.cod.name;

991:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
992:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
993:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
1001:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
1002: 
1003:       if (walletSettingModel.value.isEnabled == true) {
1004:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1005:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1006:         selectedPaymentMethod.value = PaymentGateway.cod.name;
1007:       } else if (stripeModel.value.isEnabled == true) {

992:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
993:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
1001:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
1002: 
1003:       if (walletSettingModel.value.isEnabled == true) {
1004:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1005:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1006:         selectedPaymentMethod.value = PaymentGateway.cod.name;
1007:       } else if (stripeModel.value.isEnabled == true) {
1008:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

993:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
1001:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
1002: 
1003:       if (walletSettingModel.value.isEnabled == true) {
1004:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1005:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1006:         selectedPaymentMethod.value = PaymentGateway.cod.name;
1007:       } else if (stripeModel.value.isEnabled == true) {
1008:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
1009:       } else if (payPalModel.value.isEnabled == true) {

994:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
1001:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
1002: 
1003:       if (walletSettingModel.value.isEnabled == true) {
1004:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1005:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1006:         selectedPaymentMethod.value = PaymentGateway.cod.name;
1007:       } else if (stripeModel.value.isEnabled == true) {
1008:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
1009:       } else if (payPalModel.value.isEnabled == true) {
1010:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

995:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
996:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
997:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
998:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
999:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
1000:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
1001:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
1002: 
1003:       if (walletSettingModel.value.isEnabled == true) {
1004:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
1005:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
1006:         selectedPaymentMethod.value = PaymentGateway.cod.name;
1007:       } else if (stripeModel.value.isEnabled == true) {
1008:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
1009:       } else if (payPalModel.value.isEnabled == true) {
1010:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
1011:       } else if (payStackModel.value.isEnable == true) {

1070:       await Stripe.instance.presentPaymentSheet().then((value) {
1071:         ShowToastDialog.showToast("Payment successfully".tr);
1072:         completeOrder();
1073:       });
1074:     } on StripeException catch (e) {
1075:       var lo1 = jsonEncode(e);
1076:       var lo2 = jsonDecode(lo1);
1077:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
1078:       ShowToastDialog.showToast(lom.error.message);
1079:     } catch (e) {
1080:       ShowToastDialog.showToast(e.toString());
1081:     }
1082:   }
1083: 
1084:   Future createStripeIntent({required String amount}) async {
1085:     try {
1086:       Map<String, dynamic> body = {

1099:       var response = await http.post(
1100:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
1101:         body: body,
1102:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
1103:       );
1104: 
1105:       return jsonDecode(response.body);
1106:     } catch (e) {
1107:       log(e.toString());
1108:     }
1109:   }
1110: 
1111:   //mercadoo
1112:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
1113:     ShowToastDialog.showLoader("Please wait".tr);
1114:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
1115: 

1129:       // Automatically return after payment is approved
1130:     });
1131: 
1132:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
1133: 
1134:     if (response.statusCode == 200 || response.statusCode == 201) {
1135:       final data = jsonDecode(response.body);
1136:       ShowToastDialog.closeLoader();
1137:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
1138:         if (value) {
1139:           ShowToastDialog.showToast("Payment Successful!!".tr);
1140:           completeOrder();
1141:         } else {
1142:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
1143:         }
1144:       });
1145:     } else {

1242:       "customizations": {"title": "Payment for Services", "description": "Payment for XYZ services"},
1243:     });
1244: 
1245:     final response = await http.post(url, headers: headers, body: body);
1246: 
1247:     if (response.statusCode == 200) {
1248:       final data = jsonDecode(response.body);
1249:       ShowToastDialog.closeLoader();
1250:       Get.to(MercadoPagoScreen(initialURl: data['data']['link']))!.then((value) {
1251:         if (value) {
1252:           ShowToastDialog.showToast("Payment Successful!!".tr);
1253:           completeOrder();
1254:         } else {
1255:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
1256:         }
1257:       });
1258:     } else {

1300:     // final response = await http.post(
1301:     //   Uri.parse(getChecksum),
1302:     //   headers: {},
1303:     //   body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString()},
1304:     // );
1305:     //
1306:     // final data = jsonDecode(response.body);
1307:     // await verifyCheckSum(checkSum: data["code"], amount: amount, orderId: orderId).then((value) {
1308:     //   initiatePayment(amount: amount, orderId: orderId).then((value) {
1309:     //     String callback = "";
1310:     //     if (paytmModel.value.isSandboxEnabled == true) {
1311:     //       callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
1312:     //     } else {
1313:     //       callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
1314:     //     }
1315:     //
1316:     //     GetPaymentTxtTokenModel result = value;

1359:     String getChecksum = "${Constant.globalUrl}payments/validatechecksum";
1360:     final response = await http.post(
1361:       Uri.parse(getChecksum),
1362:       headers: {},
1363:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString(), "checksum_value": checkSum},
1364:     );
1365:     final data = jsonDecode(response.body);
1366:     return data['status'];
1367:   }
1368: 
1369:   Future<GetPaymentTxtTokenModel> initiatePayment({required double amount, required orderId}) async {
1370:     String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";
1371:     String callback = "";
1372:     if (paytmModel.value.isSandboxEnabled == true) {
1373:       callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
1374:     } else {
1375:       callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";

1386:         "callback_url": callback,
1387:         "custId": FireStoreUtils.getCurrentUid(),
1388:         "issandbox": paytmModel.value.isSandboxEnabled == true ? "1" : "2",
1389:       },
1390:     );
1391:     log(response.body);
1392:     final data = jsonDecode(response.body);
1393:     if (data["body"]["txnToken"] == null || data["body"]["txnToken"].toString().isEmpty) {
1394:       Get.back();
1395:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
1396:     }
1397:     return GetPaymentTxtTokenModel.fromJson(data);
1398:   }
1399: 
1400:   ///RazorPay payment function
1401:   final Razorpay razorPay = Razorpay();
1402: 

1474:         'usage_limit': 2,
1475:         "callbacks": {"finish": "https://www.google.com?merchant_order_id=$ordersId"},
1476:       }),
1477:     );
1478: 
1479:     if (response.statusCode == 200 || response.statusCode == 201) {
1480:       final responseData = jsonDecode(response.body);
1481:       return responseData['payment_url'];
1482:     } else {
1483:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
1484:       return '';
1485:     }
1486:   }
1487: 
1488:   String generateBasicAuthHeader(String apiKey) {
1489:     String credentials = '$apiKey:';
1490:     String base64Encoded = base64Encode(utf8.encode(credentials));

1526:       body: requestBody,
1527:     );
1528: 
1529:     // Handle the response
1530: 
1531:     if (response.statusCode == 200) {
1532:       Map<String, dynamic> responseData = jsonDecode(response.body);
1533: 
1534:       accessToken = responseData['access_token'];
1535:       // ignore: use_build_context_synchronously
1536:       return await webpayment(context: context, amountData: amount, currency: currency, orderIdData: orderId);
1537:     } else {
1538:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
1539:       return '';
1540:     }
1541:   }
1542: 

1561:       headers: <String, String>{'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
1562:       body: json.encode(requestBody),
1563:     );
1564: 
1565:     // Handle the response
1566:     if (response.statusCode == 201) {
1567:       Map<String, dynamic> responseData = jsonDecode(response.body);
1568:       if (responseData['message'] == 'OK') {
1569:         payToken = responseData['pay_token'];
1570:         return responseData['payment_url'];
1571:       } else {
1572:         return '';
1573:       }
1574:     } else {
1575:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
1576:       return '';
1577:     }

1620:     });
1621: 
1622:     try {
1623:       final response = await http.post(Uri.parse(url), headers: headers, body: body);
1624: 
1625:       if (response.statusCode == 200 || response.statusCode == 201) {
1626:         XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
1627:         return model;
1628:       } else {
1629:         return XenditModel();
1630:       }
1631:     } catch (e) {
1632:       return XenditModel();
1633:     }
1634:   }
1635: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart
```dart
229:       });
230:     }
231:   }
232: 
233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));

230:     }
231:   }
232: 
233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));

231:   }
232: 
233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));

232: 
233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 

233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {

234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;

237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {

238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
255:       } else if (payPalModel.value.isEnabled == true) {

240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
255:       } else if (payPalModel.value.isEnabled == true) {
256:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
255:       } else if (payPalModel.value.isEnabled == true) {
256:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
257:       } else if (payStackModel.value.isEnable == true) {

316:       await Stripe.instance.presentPaymentSheet().then((value) {
317:         ShowToastDialog.showToast("Payment successfully".tr);
318:         completeOrder();
319:       });
320:     } on StripeException catch (e) {
321:       var lo1 = jsonEncode(e);
322:       var lo2 = jsonDecode(lo1);
323:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
324:       ShowToastDialog.showToast(lom.error.message);
325:     } catch (e) {
326:       ShowToastDialog.showToast(e.toString());
327:     }
328:   }
329: 
330:   Future createStripeIntent({required String amount}) async {
331:     try {
332:       Map<String, dynamic> body = {

345:       var response = await http.post(
346:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
347:         body: body,
348:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
349:       );
350: 
351:       return jsonDecode(response.body);
352:     } catch (e) {
353:       log(e.toString());
354:     }
355:   }
356: 
357:   //mercadoo
358:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
359:     ShowToastDialog.showLoader("Please wait".tr);
360:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
361: 

375:       // Automatically return after payment is approved
376:     });
377: 
378:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
379: 
380:     if (response.statusCode == 200 || response.statusCode == 201) {
381:       final data = jsonDecode(response.body);
382:       ShowToastDialog.closeLoader();
383:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
384:         if (value) {
385:           ShowToastDialog.showToast("Payment Successful!!".tr);
386:           completeOrder();
387:         } else {
388:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
389:         }
390:       });
391:     } else {

488:       "customizations": {"title": "Payment for Services", "description": "Payment for XYZ services"},
489:     });
490: 
491:     final response = await http.post(url, headers: headers, body: body);
492: 
493:     if (response.statusCode == 200) {
494:       final data = jsonDecode(response.body);
495:       ShowToastDialog.closeLoader();
496:       Get.to(MercadoPagoScreen(initialURl: data['data']['link']))!.then((value) {
497:         if (value) {
498:           ShowToastDialog.showToast("Payment Successful!!".tr);
499:           completeOrder();
500:         } else {
501:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
502:         }
503:       });
504:     } else {

546:     // final response = await http.post(
547:     //   Uri.parse(getChecksum),
548:     //   headers: {},
549:     //   body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString()},
550:     // );
551:     //
552:     // final data = jsonDecode(response.body);
553:     // await verifyCheckSum(checkSum: data["code"], amount: amount, orderId: orderId).then((value) {
554:     //   initiatePayment(amount: amount, orderId: orderId).then((value) {
555:     //     String callback = "";
556:     //     if (paytmModel.value.isSandboxEnabled == true) {
557:     //       callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
558:     //     } else {
559:     //       callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
560:     //     }
561:     //
562:     //     GetPaymentTxtTokenModel result = value;

605:     String getChecksum = "${Constant.globalUrl}payments/validatechecksum";
606:     final response = await http.post(
607:       Uri.parse(getChecksum),
608:       headers: {},
609:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString(), "checksum_value": checkSum},
610:     );
611:     final data = jsonDecode(response.body);
612:     return data['status'];
613:   }
614: 
615:   Future<GetPaymentTxtTokenModel> initiatePayment({required double amount, required orderId}) async {
616:     String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";
617:     String callback = "";
618:     if (paytmModel.value.isSandboxEnabled == true) {
619:       callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
620:     } else {
621:       callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";

632:         "callback_url": callback,
633:         "custId": FireStoreUtils.getCurrentUid(),
634:         "issandbox": paytmModel.value.isSandboxEnabled == true ? "1" : "2",
635:       },
636:     );
637:     log(response.body);
638:     final data = jsonDecode(response.body);
639:     if (data["body"]["txnToken"] == null || data["body"]["txnToken"].toString().isEmpty) {
640:       Get.back();
641:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
642:     }
643:     return GetPaymentTxtTokenModel.fromJson(data);
644:   }
645: 
646:   ///RazorPay payment function
647:   final Razorpay razorPay = Razorpay();
648: 

720:         'usage_limit': 2,
721:         "callbacks": {"finish": "https://www.google.com?merchant_order_id=$ordersId"},
722:       }),
723:     );
724: 
725:     if (response.statusCode == 200 || response.statusCode == 201) {
726:       final responseData = jsonDecode(response.body);
727:       return responseData['payment_url'];
728:     } else {
729:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
730:       return '';
731:     }
732:   }
733: 
734:   String generateBasicAuthHeader(String apiKey) {
735:     String credentials = '$apiKey:';
736:     String base64Encoded = base64Encode(utf8.encode(credentials));

772:       body: requestBody,
773:     );
774: 
775:     // Handle the response
776: 
777:     if (response.statusCode == 200) {
778:       Map<String, dynamic> responseData = jsonDecode(response.body);
779: 
780:       accessToken = responseData['access_token'];
781:       // ignore: use_build_context_synchronously
782:       return await webpayment(context: context, amountData: amount, currency: currency, orderIdData: orderId);
783:     } else {
784:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
785:       return '';
786:     }
787:   }
788: 

807:       headers: <String, String>{'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
808:       body: json.encode(requestBody),
809:     );
810: 
811:     // Handle the response
812:     if (response.statusCode == 201) {
813:       Map<String, dynamic> responseData = jsonDecode(response.body);
814:       if (responseData['message'] == 'OK') {
815:         payToken = responseData['pay_token'];
816:         return responseData['payment_url'];
817:       } else {
818:         return '';
819:       }
820:     } else {
821:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
822:       return '';
823:     }

866:     });
867: 
868:     try {
869:       final response = await http.post(Uri.parse(url), headers: headers, body: body);
870: 
871:       if (response.statusCode == 200 || response.statusCode == 201) {
872:         XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
873:         return model;
874:       } else {
875:         return XenditModel();
876:       }
877:     } catch (e) {
878:       return XenditModel();
879:     }
880:   }
881: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\osm_search_place_controller.dart
```dart
22: 
23:   Future<void> fetchAddress(text) async {
24:     log(":: fetchAddress :: $text");
25:     try {
26:       String locale = 'en';
27:       SharedPreferences sp = await SharedPreferences.getInstance();
28:       if (sp.getString("languageCode") != null || sp.getString("languageCode")?.isNotEmpty == true) {
29:         locale = sp.getString("languageCode") ?? "en";
30:       }
31:       suggestionsList.value = await addressSuggestion(text, locale: locale);
32:     } catch (e) {
33:       log(e.toString());
34:     }
35:   }
36: }

23:   Future<void> fetchAddress(text) async {
24:     log(":: fetchAddress :: $text");
25:     try {
26:       String locale = 'en';
27:       SharedPreferences sp = await SharedPreferences.getInstance();
28:       if (sp.getString("languageCode") != null || sp.getString("languageCode")?.isNotEmpty == true) {
29:         locale = sp.getString("languageCode") ?? "en";
30:       }
31:       suggestionsList.value = await addressSuggestion(text, locale: locale);
32:     } catch (e) {
33:       log(e.toString());
34:     }
35:   }
36: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
```dart
214:   Rx<MidTrans> midTransModel = MidTrans().obs;
215:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
216:   Rx<Xendit> xenditModel = Xendit().obs;
217: 
218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));

215:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
216:   Rx<Xendit> xenditModel = Xendit().obs;
217: 
218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));

216:   Rx<Xendit> xenditModel = Xendit().obs;
217: 
218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));

217: 
218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 

218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {

219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;

222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {

223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
240:       } else if (payPalModel.value.isEnabled == true) {

225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
240:       } else if (payPalModel.value.isEnabled == true) {
241:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
240:       } else if (payPalModel.value.isEnabled == true) {
241:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
242:       } else if (payStackModel.value.isEnable == true) {

301:       await Stripe.instance.presentPaymentSheet().then((value) {
302:         ShowToastDialog.showToast("Payment successfully".tr);
303:         placeOrder();
304:       });
305:     } on StripeException catch (e) {
306:       var lo1 = jsonEncode(e);
307:       var lo2 = jsonDecode(lo1);
308:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
309:       ShowToastDialog.showToast(lom.error.message);
310:     } catch (e) {
311:       ShowToastDialog.showToast(e.toString());
312:     }
313:   }
314: 
315:   Future createStripeIntent({required String amount}) async {
316:     try {
317:       Map<String, dynamic> body = {

330:       var response = await http.post(
331:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
332:         body: body,
333:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
334:       );
335: 
336:       return jsonDecode(response.body);
337:     } catch (e) {
338:       log(e.toString());
339:     }
340:   }
341: 
342:   //mercadoo
343:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
344:     ShowToastDialog.showLoader("Please wait".tr);
345:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
346: 

360:       // Automatically return after payment is approved
361:     });
362: 
363:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
364: 
365:     if (response.statusCode == 200 || response.statusCode == 201) {
366:       final data = jsonDecode(response.body);
367:       ShowToastDialog.closeLoader();
368:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
369:         if (value) {
370:           ShowToastDialog.showToast("Payment Successful!!".tr);
371:           placeOrder();
372:         } else {
373:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
374:         }
375:       });
376:     } else {

520:       "customizations": {"title": "Payment for Services", "description": "Payment for XYZ services"},
521:     });
522: 
523:     final response = await http.post(url, headers: headers, body: body);
524: 
525:     if (response.statusCode == 200) {
526:       final data = jsonDecode(response.body);
527:       ShowToastDialog.closeLoader();
528:       Get.to(MercadoPagoScreen(initialURl: data['data']['link']))!.then((value) async {
529:         bool isVerified = await verifyFlutterWavePayment(_ref!);
530: 
531:         if (isVerified) {
532:           ShowToastDialog.showToast("Payment Successful!!".tr);
533:           placeOrder();
534:         } else {
535:           ShowToastDialog.showToast("Payment Unsuccessful!!".tr);
536:           Get.back();

546:     try {
547:       final url = Uri.parse("https://api.flutterwave.com/v3/transactions/verify_by_reference?tx_ref=$txRef");
548:       final headers = {'Authorization': 'Bearer ${flutterWaveModel.value.secretKey}', 'Content-Type': 'application/json'};
549: 
550:       final response = await http.get(url, headers: headers);
551:       if (response.statusCode == 200) {
552:         final data = jsonDecode(response.body);
553:         if (data['status'] == 'success' && data['data']['status'] == 'successful') {
554:           return true; // âœ… Payment confirmed
555:         }
556:       }
557:       return false; // âŒ Payment not verified
558:     } catch (e) {
559:       debugPrint("Error verifying payment: $e");
560:       return false;
561:     }
562:   }

600:     final response = await http.post(
601:       Uri.parse(getChecksum),
602:       headers: {},
603:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString()},
604:     );
605: 
606:     final data = jsonDecode(response.body);
607:     await verifyCheckSum(checkSum: data["code"], amount: amount, orderId: orderId).then((value) {
608:       initiatePayment(amount: amount, orderId: orderId).then((value) {
609:         String callback = "";
610:         if (paytmModel.value.isSandboxEnabled == true) {
611:           callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
612:         } else {
613:           callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
614:         }
615: 
616:         GetPaymentTxtTokenModel result = value;

659:     String getChecksum = "${Constant.globalUrl}payments/validatechecksum";
660:     final response = await http.post(
661:       Uri.parse(getChecksum),
662:       headers: {},
663:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString(), "checksum_value": checkSum},
664:     );
665:     final data = jsonDecode(response.body);
666:     return data['status'];
667:   }
668: 
669:   Future<GetPaymentTxtTokenModel> initiatePayment({required double amount, required String orderId}) async {
670:     String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";
671: 
672:     String callback =
673:         (paytmModel.value.isSandboxEnabled ?? false) ? "https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId" : "https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
674: 
675:     print("INITIATE PAYMENT CALL:");

691:         "issandbox": (paytmModel.value.isSandboxEnabled ?? false) ? "1" : "0",
692:       },
693:     );
694: 
695:     log("Paytm Initiate Response: ${response.body}");
696: 
697:     final data = jsonDecode(response.body);
698:     if (data["body"]["txnToken"] == null || data["body"]["txnToken"].toString().isEmpty) {
699:       Get.back();
700:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
701:     }
702: 
703:     return GetPaymentTxtTokenModel.fromJson(data);
704:   }
705: 
706:   // Future<GetPaymentTxtTokenModel> initiatePayment({required double amount, required orderId}) async {
707:   //   String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";

723:   //       "callback_url": callback,
724:   //       "custId": FireStoreUtils.getCurrentUid(),
725:   //       "issandbox": paytmModel.value.isSandboxEnabled == true ? "1" : "2",
726:   //     },
727:   //   );
728:   //   log(response.body);
729:   //   final data = jsonDecode(response.body);
730:   //   if (data["body"]["txnToken"] == null || data["body"]["txnToken"].toString().isEmpty) {
731:   //     Get.back();
732:   //     ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
733:   //   }
734:   //   return GetPaymentTxtTokenModel.fromJson(data);
735:   // }
736: 
737:   ///RazorPay payment function
738:   final Razorpay razorPay = Razorpay();
739: 

811:         'usage_limit': 2,
812:         "callbacks": {"finish": "https://www.google.com?merchant_order_id=$ordersId"},
813:       }),
814:     );
815: 
816:     if (response.statusCode == 200 || response.statusCode == 201) {
817:       final responseData = jsonDecode(response.body);
818:       return responseData['payment_url'];
819:     } else {
820:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
821:       return '';
822:     }
823:   }
824: 
825:   String generateBasicAuthHeader(String apiKey) {
826:     String credentials = '$apiKey:';
827:     String base64Encoded = base64Encode(utf8.encode(credentials));

883:     );
884: 
885:     debugPrint('ðŸ” Response Code: ${response.statusCode}');
886:     debugPrint('ðŸ“¨ Response Body: ${response.body}');
887: 
888:     if (response.statusCode == 200) {
889:       final Map<String, dynamic> responseData = jsonDecode(response.body);
890:       accessToken = responseData['access_token'];
891:       debugPrint('âœ… Access Token Received: $accessToken');
892: 
893:       return await webpayment(context: context, amountData: amount, currency: currency, orderIdData: orderId);
894:     } else {
895:       debugPrint('âŒ Failed to fetch access token.');
896:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
897:       return '';
898:     }
899:   }

930:     );
931: 
932:     debugPrint('ðŸ” Response Code: ${response.statusCode}');
933:     debugPrint('ðŸ“¨ Response Body: ${response.body}');
934: 
935:     if (response.statusCode == 201) {
936:       final Map<String, dynamic> responseData = jsonDecode(response.body);
937:       if (responseData['message'] == 'OK') {
938:         payToken = responseData['pay_token'];
939:         debugPrint('âœ… Payment Token: $payToken');
940:         debugPrint('ðŸŒ Payment URL: ${responseData['payment_url']}');
941:         return responseData['payment_url'];
942:       } else {
943:         debugPrint('âš ï¸ Unexpected message: ${responseData['message']}');
944:         return '';
945:       }
946:     } else {

994:     });
995: 
996:     try {
997:       final response = await http.post(Uri.parse(url), headers: headers, body: body);
998: 
999:       if (response.statusCode == 200 || response.statusCode == 201) {
1000:         XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
1001:         return model;
1002:       } else {
1003:         return XenditModel();
1004:       }
1005:     } catch (e) {
1006:       return XenditModel();
1007:     }
1008:   }
1009: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart
```dart
198:   Rx<MidTrans> midTransModel = MidTrans().obs;
199:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
200:   Rx<Xendit> xenditModel = Xendit().obs;
201: 
202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));

199:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
200:   Rx<Xendit> xenditModel = Xendit().obs;
201: 
202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));

200:   Rx<Xendit> xenditModel = Xendit().obs;
201: 
202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));

201: 
202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 

202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {

203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;

206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {

207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
224:       } else if (payPalModel.value.isEnabled == true) {

209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
224:       } else if (payPalModel.value.isEnabled == true) {
225:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
224:       } else if (payPalModel.value.isEnabled == true) {
225:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
226:       } else if (payStackModel.value.isEnable == true) {

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart
```dart
266:   Rx<MidTrans> midTransModel = MidTrans().obs;
267:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
268:   Rx<Xendit> xenditModel = Xendit().obs;
269: 
270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));

267:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
268:   Rx<Xendit> xenditModel = Xendit().obs;
269: 
270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));

268:   Rx<Xendit> xenditModel = Xendit().obs;
269: 
270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));

269: 
270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 

270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {

271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;

274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {

275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
292:       } else if (payPalModel.value.isEnabled == true) {

277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
292:       } else if (payPalModel.value.isEnabled == true) {
293:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
292:       } else if (payPalModel.value.isEnabled == true) {
293:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
294:       } else if (payStackModel.value.isEnable == true) {

353:       await Stripe.instance.presentPaymentSheet().then((value) {
354:         ShowToastDialog.showToast("Payment successfully".tr);
355:         completeOrder();
356:       });
357:     } on StripeException catch (e) {
358:       var lo1 = jsonEncode(e);
359:       var lo2 = jsonDecode(lo1);
360:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
361:       ShowToastDialog.showToast(lom.error.message);
362:     } catch (e) {
363:       ShowToastDialog.showToast(e.toString());
364:     }
365:   }
366: 
367:   Future createStripeIntent({required String amount}) async {
368:     try {
369:       Map<String, dynamic> body = {

382:       var response = await http.post(
383:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
384:         body: body,
385:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
386:       );
387: 
388:       return jsonDecode(response.body);
389:     } catch (e) {
390:       log(e.toString());
391:     }
392:   }
393: 
394:   //mercadoo
395:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
396:     ShowToastDialog.showLoader("Please wait".tr);
397:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
398: 

412:       // Automatically return after payment is approved
413:     });
414: 
415:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
416: 
417:     if (response.statusCode == 200 || response.statusCode == 201) {
418:       final data = jsonDecode(response.body);
419:       ShowToastDialog.closeLoader();
420:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
421:         if (value) {
422:           ShowToastDialog.showToast("Payment Successful!!".tr);
423:           completeOrder();
424:         } else {
425:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
426:         }
427:       });
428:     } else {

525:       "customizations": {"title": "Payment for Services", "description": "Payment for XYZ services"},
526:     });
527: 
528:     final response = await http.post(url, headers: headers, body: body);
529: 
530:     if (response.statusCode == 200) {
531:       final data = jsonDecode(response.body);
532:       ShowToastDialog.closeLoader();
533:       Get.to(MercadoPagoScreen(initialURl: data['data']['link']))!.then((value) {
534:         if (value) {
535:           ShowToastDialog.showToast("Payment Successful!!".tr);
536:           completeOrder();
537:         } else {
538:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
539:         }
540:       });
541:     } else {

583:     // final response = await http.post(
584:     //   Uri.parse(getChecksum),
585:     //   headers: {},
586:     //   body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString()},
587:     // );
588:     //
589:     // final data = jsonDecode(response.body);
590:     // await verifyCheckSum(checkSum: data["code"], amount: amount, orderId: orderId).then((value) {
591:     //   initiatePayment(amount: amount, orderId: orderId).then((value) {
592:     //     String callback = "";
593:     //     if (paytmModel.value.isSandboxEnabled == true) {
594:     //       callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
595:     //     } else {
596:     //       callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
597:     //     }
598:     //
599:     //     GetPaymentTxtTokenModel result = value;

642:     String getChecksum = "${Constant.globalUrl}payments/validatechecksum";
643:     final response = await http.post(
644:       Uri.parse(getChecksum),
645:       headers: {},
646:       body: {"mid": paytmModel.value.paytmMID.toString(), "order_id": orderId, "key_secret": paytmModel.value.pAYTMMERCHANTKEY.toString(), "checksum_value": checkSum},
647:     );
648:     final data = jsonDecode(response.body);
649:     return data['status'];
650:   }
651: 
652:   Future<GetPaymentTxtTokenModel> initiatePayment({required double amount, required orderId}) async {
653:     String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";
654:     String callback = "";
655:     if (paytmModel.value.isSandboxEnabled == true) {
656:       callback = "${callback}https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";
657:     } else {
658:       callback = "${callback}https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=$orderId";

669:         "callback_url": callback,
670:         "custId": FireStoreUtils.getCurrentUid(),
671:         "issandbox": paytmModel.value.isSandboxEnabled == true ? "1" : "2",
672:       },
673:     );
674:     log(response.body);
675:     final data = jsonDecode(response.body);
676:     if (data["body"]["txnToken"] == null || data["body"]["txnToken"].toString().isEmpty) {
677:       Get.back();
678:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
679:     }
680:     return GetPaymentTxtTokenModel.fromJson(data);
681:   }
682: 
683:   ///RazorPay payment function
684:   final Razorpay razorPay = Razorpay();
685: 

757:         'usage_limit': 2,
758:         "callbacks": {"finish": "https://www.google.com?merchant_order_id=$ordersId"},
759:       }),
760:     );
761: 
762:     if (response.statusCode == 200 || response.statusCode == 201) {
763:       final responseData = jsonDecode(response.body);
764:       return responseData['payment_url'];
765:     } else {
766:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
767:       return '';
768:     }
769:   }
770: 
771:   String generateBasicAuthHeader(String apiKey) {
772:     String credentials = '$apiKey:';
773:     String base64Encoded = base64Encode(utf8.encode(credentials));

809:       body: requestBody,
810:     );
811: 
812:     // Handle the response
813: 
814:     if (response.statusCode == 200) {
815:       Map<String, dynamic> responseData = jsonDecode(response.body);
816: 
817:       accessToken = responseData['access_token'];
818:       // ignore: use_build_context_synchronously
819:       return await webpayment(context: context, amountData: amount, currency: currency, orderIdData: orderId);
820:     } else {
821:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
822:       return '';
823:     }
824:   }
825: 

844:       headers: <String, String>{'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
845:       body: json.encode(requestBody),
846:     );
847: 
848:     // Handle the response
849:     if (response.statusCode == 201) {
850:       Map<String, dynamic> responseData = jsonDecode(response.body);
851:       if (responseData['message'] == 'OK') {
852:         payToken = responseData['pay_token'];
853:         return responseData['payment_url'];
854:       } else {
855:         return '';
856:       }
857:     } else {
858:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
859:       return '';
860:     }

901:     });
902: 
903:     try {
904:       final response = await http.post(Uri.parse(url), headers: headers, body: body);
905: 
906:       if (response.statusCode == 200 || response.statusCode == 201) {
907:         XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
908:         return model;
909:       } else {
910:         return XenditModel();
911:       }
912:     } catch (e) {
913:       return XenditModel();
914:     }
915:   }
916: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\splash_controller.dart
```dart
1: import 'dart:async';
2: import 'dart:convert';
3: import 'dart:developer';
4: import 'package:customer/constant/constant.dart';
5: import 'package:customer/models/language_model.dart';
6: import 'package:customer/models/user_model.dart';
7: import 'package:customer/screen_ui/maintenance_mode_screen/maintenance_mode_screen.dart';
8: import 'package:customer/screen_ui/service_home_screen/service_list_screen.dart';
9: import 'package:customer/service/localization_service.dart';
10: import 'package:customer/utils/notification_service.dart';
11: import 'package:customer/utils/preferences.dart';
12: import 'package:firebase_auth/firebase_auth.dart';
13: import 'package:get/get.dart';
14: import '../screen_ui/auth_screens/login_screen.dart';
15: import '../screen_ui/location_enable_screens/location_permission_screen.dart';

20:   @override
21:   void onInit() {
22:     Timer(const Duration(seconds: 3), () => redirectScreen());
23:     super.onInit();
24:   }
25: 
26:   Future<void> getLanguage() async {
27:     final jsonString = Preferences.getString(Preferences.languageCodeKey);
28:     if (jsonString != '' && jsonString.isNotEmpty) {
29:       final Map<String, dynamic> jsonData = jsonDecode(jsonString);
30:       final model = LanguageModel.fromJson(jsonData);
31:       LocalizationService().changeLocale(model.slug!);
32:     } else {
33:       LocalizationService().changeLocale('en');
34:     }
35:   }
36: 

21:   void onInit() {
22:     Timer(const Duration(seconds: 3), () => redirectScreen());
23:     super.onInit();
24:   }
25: 
26:   Future<void> getLanguage() async {
27:     final jsonString = Preferences.getString(Preferences.languageCodeKey);
28:     if (jsonString != '' && jsonString.isNotEmpty) {
29:       final Map<String, dynamic> jsonData = jsonDecode(jsonString);
30:       final model = LanguageModel.fromJson(jsonData);
31:       LocalizationService().changeLocale(model.slug!);
32:     } else {
33:       LocalizationService().changeLocale('en');
34:     }
35:   }
36: 
37:   Future<void> redirectScreen() async {

23:     super.onInit();
24:   }
25: 
26:   Future<void> getLanguage() async {
27:     final jsonString = Preferences.getString(Preferences.languageCodeKey);
28:     if (jsonString != '' && jsonString.isNotEmpty) {
29:       final Map<String, dynamic> jsonData = jsonDecode(jsonString);
30:       final model = LanguageModel.fromJson(jsonData);
31:       LocalizationService().changeLocale(model.slug!);
32:     } else {
33:       LocalizationService().changeLocale('en');
34:     }
35:   }
36: 
37:   Future<void> redirectScreen() async {
38:     getLanguage();
39:     if (await FireStoreUtils.isMaintenanceMode() == true) {

24:   }
25: 
26:   Future<void> getLanguage() async {
27:     final jsonString = Preferences.getString(Preferences.languageCodeKey);
28:     if (jsonString != '' && jsonString.isNotEmpty) {
29:       final Map<String, dynamic> jsonData = jsonDecode(jsonString);
30:       final model = LanguageModel.fromJson(jsonData);
31:       LocalizationService().changeLocale(model.slug!);
32:     } else {
33:       LocalizationService().changeLocale('en');
34:     }
35:   }
36: 
37:   Future<void> redirectScreen() async {
38:     getLanguage();
39:     if (await FireStoreUtils.isMaintenanceMode() == true) {
40:       Get.offAll(() => MaintenanceModeScreen());

32:     } else {
33:       LocalizationService().changeLocale('en');
34:     }
35:   }
36: 
37:   Future<void> redirectScreen() async {
38:     getLanguage();
39:     if (await FireStoreUtils.isMaintenanceMode() == true) {
40:       Get.offAll(() => MaintenanceModeScreen());
41:       return;
42:     } else {
43:       if (Preferences.getBoolean(Preferences.isFinishOnBoardingKey) == false) {
44:         Get.offAll(const OnboardingScreen());
45:       } else {
46:         bool isLogin = await FireStoreUtils.isLogin();
47:         if (isLogin == true) {
48:           await FireStoreUtils.getUserProfile(FireStoreUtils.getCurrentUid()).then((value) async {

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\wallet_controller.dart
```dart
67:   Rx<MidTrans> midTransModel = MidTrans().obs;
68:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
69:   Rx<Xendit> xenditModel = Xendit().obs;
70: 
71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));

68:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
69:   Rx<Xendit> xenditModel = Xendit().obs;
70: 
71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 

69:   Rx<Xendit> xenditModel = Xendit().obs;
70: 
71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();

70: 
71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';

71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();

72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();

73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 

75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 
90:       razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
91:       razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);

76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 
90:       razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
91:       razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
92:       razorPay.on(Razorpay.EVENT_PAYMENT_ERROR, handlePaymentError);

77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 
90:       razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
91:       razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
92:       razorPay.on(Razorpay.EVENT_PAYMENT_ERROR, handlePaymentError);
93:     });

168:       await Stripe.instance.presentPaymentSheet().then((value) {
169:         ShowToastDialog.showToast("Payment successfully".tr);
170:         walletTopUp();
171:       });
172:     } on StripeException catch (e) {
173:       var lo1 = jsonEncode(e);
174:       var lo2 = jsonDecode(lo1);
175:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
176:       ShowToastDialog.showToast(lom.error.message);
177:     } catch (e) {
178:       ShowToastDialog.showToast(e.toString());
179:     }
180:   }
181: 
182:   Future createStripeIntent({required String amount}) async {
183:     try {
184:       Map<String, dynamic> body = {

197:       var response = await http.post(
198:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
199:         body: body,
200:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
201:       );
202: 
203:       return jsonDecode(response.body);
204:     } catch (e) {
205:       log(e.toString());
206:     }
207:   }
208: 
209:   //mercadoo
210:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
211:     ShowToastDialog.showLoader("Please wait".tr);
212:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
213: 

226:       "auto_return": "approved", // Automatically return after payment is approved
227:     });
228: 
229:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
230: 
231:     if (response.statusCode == 200 || response.statusCode == 201) {
232:       final data = jsonDecode(response.body);
233:       ShowToastDialog.closeLoader();
234:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
235:         if (value) {
236:           ShowToastDialog.showToast("Payment Successful!!".tr);
237:           walletTopUp();
238:         } else {
239:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
240:         }
241:       });
242:     } else {

339:       "customizations": {"title": "Payment for Services", "description": "Payment for XYZ services"},
340:     });
341: 
342:     final response = await http.post(url, headers: headers, body: body);
343: 
344:     if (response.statusCode == 200) {
345:       final data = jsonDecode(response.body);
346:       ShowToastDialog.closeLoader();
347:       Get.to(MercadoPagoScreen(initialURl: data['data']['link']))!.then((value) {
348:         if (value) {
349:           ShowToastDialog.showToast("Payment Successful!!".tr);
350:           walletTopUp();
351:         } else {
352:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
353:         }
354:       });
355:     } else {

460:         'usage_limit': 2,
461:         "callbacks": {"finish": "https://www.google.com?merchant_order_id=$ordersId"},
462:       }),
463:     );
464: 
465:     if (response.statusCode == 200 || response.statusCode == 201) {
466:       final responseData = jsonDecode(response.body);
467:       return responseData['payment_url'];
468:     } else {
469:       ShowToastDialog.showToast("something went wrong, please contact admin.".tr);
470:       return '';
471:     }
472:   }
473: 
474:   String generateBasicAuthHeader(String apiKey) {
475:     String credentials = '$apiKey:';
476:     String base64Encoded = base64Encode(utf8.encode(credentials));

509:       Uri.parse(apiUrl),
510:       headers: <String, String>{'Authorization': "Basic ${orangeMoneyModel.value.auth!}", 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'},
511:       body: requestBody,
512:     );
513: 
514:     if (response.statusCode == 200) {
515:       Map<String, dynamic> responseData = jsonDecode(response.body);
516: 
517:       accessToken = responseData['access_token'];
518:       return await webpayment(context: context, amountData: amount, currency: currency, orderIdData: orderId);
519:     } else {
520:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
521:       return '';
522:     }
523:   }
524: 
525:   Future webpayment({required String orderIdData, required BuildContext context, required String currency, required String amountData}) async {

545:     );
546:     print(response.statusCode);
547:     print(response.body);
548: 
549:     // Handle the response
550:     if (response.statusCode == 201) {
551:       Map<String, dynamic> responseData = jsonDecode(response.body);
552:       if (responseData['message'] == 'OK') {
553:         payToken = responseData['pay_token'];
554:         return responseData['payment_url'];
555:       } else {
556:         return '';
557:       }
558:     } else {
559:       ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
560:       return '';
561:     }

603:     });
604: 
605:     try {
606:       final response = await http.post(Uri.parse(url), headers: headers, body: body);
607: 
608:       if (response.statusCode == 200 || response.statusCode == 201) {
609:         XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
610:         return model;
611:       } else {
612:         return XenditModel();
613:       }
614:     } catch (e) {
615:       return XenditModel();
616:     }
617:   }
618: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart
```dart
282:   'Track Order': 'ØªØªØ¨Ø¹ Ø§Ù„Ø·Ù„Ø¨',
283:   'Payment Option': 'Ø®ÙŠØ§Ø± Ø§Ù„Ø¯ÙØ¹',
284:   'Cashback Offers': 'Ø¹Ø±ÙˆØ¶ Ø§Ù„Ø§Ø³ØªØ±Ø¯Ø§Ø¯ Ø§Ù„Ù†Ù‚Ø¯ÙŠ',
285:   'Min spent': 'Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ Ù„Ù„Ø¥Ù†ÙØ§Ù‚',
286:   'Maximum cashback up to': 'Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ù‚ØµÙ‰ Ù„Ù„Ø§Ø³ØªØ±Ø¯Ø§Ø¯ Ø­ØªÙ‰',
287:   'Valid till': 'ØµØ§Ù„Ø­ Ø­ØªÙ‰',
288:   'Change Language': 'ØªØºÙŠÙŠØ± Ø§Ù„Ù„ØºØ©',
289:   'Select your preferred language for a personalized app experience.': 'Ø§Ø®ØªØ± Ù„ØºØªÙƒ Ø§Ù„Ù…ÙØ¶Ù„Ø© Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ ØªØ¬Ø±Ø¨Ø© Ù…Ø®ØµØµØ©.',
290:   'No Conversion found': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ù…Ø­Ø§Ø¯Ø«Ø©',
291:   'Type message here....': 'Ø§ÙƒØªØ¨ Ø±Ø³Ø§Ù„ØªÙƒ Ù‡Ù†Ø§....',
292:   'Send Media': 'Ø¥Ø±Ø³Ø§Ù„ ÙˆØ³Ø§Ø¦Ø·',
293:   'Choose image from gallery': 'Ø§Ø®ØªØ± ØµÙˆØ±Ø© Ù…Ù† Ø§Ù„Ù…Ø¹Ø±Ø¶',
294:   'Choose video from gallery': 'Ø§Ø®ØªØ± ÙÙŠØ¯ÙŠÙˆ Ù…Ù† Ø§Ù„Ù…Ø¹Ø±Ø¶',
295:   'Take a picture': 'Ø§Ù„ØªÙ‚Ø§Ø· ØµÙˆØ±Ø©',
296:   'sent a message': 'Ø£Ø±Ø³Ù„ Ø±Ø³Ø§Ù„Ø©',
297:   'Sent a video': 'Ø£Ø±Ø³Ù„ ÙÙŠØ¯ÙŠÙˆ',
298:   'Sent a audio': 'Ø£Ø±Ø³Ù„ ØªØ³Ø¬ÙŠÙ„ ØµÙˆØªÙŠ',

283:   'Payment Option': 'Ø®ÙŠØ§Ø± Ø§Ù„Ø¯ÙØ¹',
284:   'Cashback Offers': 'Ø¹Ø±ÙˆØ¶ Ø§Ù„Ø§Ø³ØªØ±Ø¯Ø§Ø¯ Ø§Ù„Ù†Ù‚Ø¯ÙŠ',
285:   'Min spent': 'Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ Ù„Ù„Ø¥Ù†ÙØ§Ù‚',
286:   'Maximum cashback up to': 'Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ù‚ØµÙ‰ Ù„Ù„Ø§Ø³ØªØ±Ø¯Ø§Ø¯ Ø­ØªÙ‰',
287:   'Valid till': 'ØµØ§Ù„Ø­ Ø­ØªÙ‰',
288:   'Change Language': 'ØªØºÙŠÙŠØ± Ø§Ù„Ù„ØºØ©',
289:   'Select your preferred language for a personalized app experience.': 'Ø§Ø®ØªØ± Ù„ØºØªÙƒ Ø§Ù„Ù…ÙØ¶Ù„Ø© Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ ØªØ¬Ø±Ø¨Ø© Ù…Ø®ØµØµØ©.',
290:   'No Conversion found': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ù…Ø­Ø§Ø¯Ø«Ø©',
291:   'Type message here....': 'Ø§ÙƒØªØ¨ Ø±Ø³Ø§Ù„ØªÙƒ Ù‡Ù†Ø§....',
292:   'Send Media': 'Ø¥Ø±Ø³Ø§Ù„ ÙˆØ³Ø§Ø¦Ø·',
293:   'Choose image from gallery': 'Ø§Ø®ØªØ± ØµÙˆØ±Ø© Ù…Ù† Ø§Ù„Ù…Ø¹Ø±Ø¶',
294:   'Choose video from gallery': 'Ø§Ø®ØªØ± ÙÙŠØ¯ÙŠÙˆ Ù…Ù† Ø§Ù„Ù…Ø¹Ø±Ø¶',
295:   'Take a picture': 'Ø§Ù„ØªÙ‚Ø§Ø· ØµÙˆØ±Ø©',
296:   'sent a message': 'Ø£Ø±Ø³Ù„ Ø±Ø³Ø§Ù„Ø©',
297:   'Sent a video': 'Ø£Ø±Ø³Ù„ ÙÙŠØ¯ÙŠÙˆ',
298:   'Sent a audio': 'Ø£Ø±Ø³Ù„ ØªØ³Ø¬ÙŠÙ„ ØµÙˆØªÙŠ',
299:   'Driver Inbox': 'ØµÙ†Ø¯ÙˆÙ‚ ÙˆØ§Ø±Ø¯ Ø§Ù„Ø³Ø§Ø¦Ù‚',

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart
```dart
277:   'Track Order': 'Track Order',
278:   'Payment Option': 'Payment Option',
279:   'Cashback Offers': 'Cashback Offers',
280:   'Min spent': 'Min spent',
281:   'Maximum cashback up to': 'Maximum cashback up to',
282:   'Valid till': 'Valid till',
283:   'Change Language': 'Change Language',
284:   'Select your preferred language for a personalized app experience.': 'Select your preferred language for a personalized app experience.',
285:   'No Conversion found': 'No Conversion found',
286:   'Type message here....': 'Type message here....',
287:   'Send Media': 'Send Media',
288:   'Choose image from gallery': 'Choose image from gallery',
289:   'Choose video from gallery': 'Choose video from gallery',
290:   'Take a picture': 'Take a picture',
291:   'sent a message': 'sent a message',
292:   'Sent a video': 'Sent a video',
293:   'Sent a audio': 'Sent a audio',

278:   'Payment Option': 'Payment Option',
279:   'Cashback Offers': 'Cashback Offers',
280:   'Min spent': 'Min spent',
281:   'Maximum cashback up to': 'Maximum cashback up to',
282:   'Valid till': 'Valid till',
283:   'Change Language': 'Change Language',
284:   'Select your preferred language for a personalized app experience.': 'Select your preferred language for a personalized app experience.',
285:   'No Conversion found': 'No Conversion found',
286:   'Type message here....': 'Type message here....',
287:   'Send Media': 'Send Media',
288:   'Choose image from gallery': 'Choose image from gallery',
289:   'Choose video from gallery': 'Choose video from gallery',
290:   'Take a picture': 'Take a picture',
291:   'sent a message': 'sent a message',
292:   'Sent a video': 'Sent a video',
293:   'Sent a audio': 'Sent a audio',
294:   'Driver Inbox': 'Driver Inbox',

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\cart_product_model.dart
```dart
30:     extrasPrice = json['extras_price'];
31: 
32:     extras =
33:         json['extras'] == "null" || json['extras'] == null
34:             ? null
35:             : "String" == json['extras'].runtimeType.toString()
36:             ? List<dynamic>.from(jsonDecode(json['extras']))
37:             : List<dynamic>.from(json['extras']);
38: 
39:     variantInfo =
40:         json['variant_info'] == "null" || json['variant_info'] == null
41:             ? null
42:             : "String" == json['variant_info'].runtimeType.toString()
43:             ? VariantInfo.fromJson(jsonDecode(json['variant_info']))
44:             : VariantInfo.fromJson(json['variant_info']);
45: 
46:     taxSetting =

37:             : List<dynamic>.from(json['extras']);
38: 
39:     variantInfo =
40:         json['variant_info'] == "null" || json['variant_info'] == null
41:             ? null
42:             : "String" == json['variant_info'].runtimeType.toString()
43:             ? VariantInfo.fromJson(jsonDecode(json['variant_info']))
44:             : VariantInfo.fromJson(json['variant_info']);
45: 
46:     taxSetting =
47:         json['taxSetting'] == null
48:             ? []
49:             : json['taxSetting'] is String
50:             ? (jsonDecode(json['taxSetting']) as List).map((e) => TaxModel.fromJson(e)).toList()
51:             : json['taxSetting'] is List
52:             ? (json['taxSetting'] as List).map((e) => TaxModel.fromJson(e)).toList()
53:             : [];

44:             : VariantInfo.fromJson(json['variant_info']);
45: 
46:     taxSetting =
47:         json['taxSetting'] == null
48:             ? []
49:             : json['taxSetting'] is String
50:             ? (jsonDecode(json['taxSetting']) as List).map((e) => TaxModel.fromJson(e)).toList()
51:             : json['taxSetting'] is List
52:             ? (json['taxSetting'] as List).map((e) => TaxModel.fromJson(e)).toList()
53:             : [];
54:   }
55: 
56:   Map<String, dynamic> toJson() {
57:     final Map<String, dynamic> data = <String, dynamic>{};
58:     data['id'] = id;
59:     data['category_id'] = categoryId;
60:     data['name'] = name;

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\language_model.dart
```dart
1: class LanguageModel {
2:   bool? isActive;
3:   String? slug;
4:   String? title;
5:   String? image;
6:   bool? isRtl;
7: 
8:   LanguageModel({this.isActive, this.slug, this.title, this.isRtl, this.image});
9: 
10:   LanguageModel.fromJson(Map<String, dynamic> json) {
11:     isActive = json['isActive'];

2:   bool? isActive;
3:   String? slug;
4:   String? title;
5:   String? image;
6:   bool? isRtl;
7: 
8:   LanguageModel({this.isActive, this.slug, this.title, this.isRtl, this.image});
9: 
10:   LanguageModel.fromJson(Map<String, dynamic> json) {
11:     isActive = json['isActive'];
12:     slug = json['slug'];
13:     title = json['title'];
14:     isRtl = json['is_rtl'];
15:     image = json['image'];
16:   }
17: 
18:   Map<String, dynamic> toJson() {

4:   String? title;
5:   String? image;
6:   bool? isRtl;
7: 
8:   LanguageModel({this.isActive, this.slug, this.title, this.isRtl, this.image});
9: 
10:   LanguageModel.fromJson(Map<String, dynamic> json) {
11:     isActive = json['isActive'];
12:     slug = json['slug'];
13:     title = json['title'];
14:     isRtl = json['is_rtl'];
15:     image = json['image'];
16:   }
17: 
18:   Map<String, dynamic> toJson() {
19:     final Map<String, dynamic> data = <String, dynamic>{};
20:     data['isActive'] = isActive;

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\paystack\paystack_url_genrater.dart
```dart
14:       "amount": amount,
15:       "currency": currency,
16:     }, headers: {
17:       "Authorization": "Bearer $secretKey",
18:     });
19:     debugPrint(response.body);
20:     final data = jsonDecode(response.body);
21:     if (!data["status"]) {
22:       return null;
23:     }
24:     return PayStackUrlModel.fromJson(data);
25:   }
26: 
27:   static Future<bool> verifyTransaction({
28:     required String reference,
29:     required String secretKey,
30:     required String amount,

36: 
37:     var response = await http.get(Uri.parse(url), headers: {
38:       "Authorization": "Bearer $secretKey",
39:     });
40: 
41:     debugPrint(response.body);
42:     final data = jsonDecode(response.body);
43:     if (data["status"] == true) {
44:       if (data["message"] == "Verification successful") {}
45:     }
46: 
47:     return data["status"];
48: 
49:     //PayPalClientSettleModel.fromJson(data);
50:   }
51: 
52:   static Future<String> getPayHTML({required String amount, required PayFastModel payFastSettingData, required UserModel userModel}) async {

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\orangePayScreen.dart
```dart
81:         Uri.parse(apiUrl),
82:         headers: {'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
83:         body: json.encode(requestBody),
84:       );
85: 
86:       if (response.statusCode == 201) {
87:         Map<String, dynamic> responseData = jsonDecode(response.body);
88:         debugPrint('ðŸ” Transaction Status: ${responseData['status']}');
89:         return responseData['status'];
90:       } else {
91:         return '';
92:       }
93:     } catch (e) {
94:       debugPrint('âš ï¸ Transaction check error: $e');
95:       return '';
96:     }
97:   }

252: //           'Accept': 'application/json',
253: //         },
254: //         body: json.encode(requestBody));
255: //
256: //     // Handle the response
257: //     if (response.statusCode == 201) {
258: //       Map<String, dynamic> responseData = jsonDecode(response.body);
259: //       return responseData['status'];
260: //     } else {
261: //       return '';
262: //     }
263: //   }
264: //
265: //   @override
266: //   Widget build(BuildContext context) {
267: //     // ignore: deprecated_member_use
268: //     return WillPopScope(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\rozorpayConroller.dart
```dart
26:       },
27:     );
28: 
29:     if (response.statusCode == 500) {
30:       return null;
31:     } else {
32:       final data = jsonDecode(response.body);
33:       print(data);
34: 
35:       return CreateRazorPayOrderModel.fromJson(data);
36:     }
37:   }
38: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\xenditScreen.dart
```dart
143: 
144:     // Making the POST request
145:     var response = await http.get(url, headers: headers);
146: 
147:     // Checking the response status
148:     if (response.statusCode == 200) {
149:       XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
150:       return model;
151:     } else {
152:       return XenditModel();
153:     }
154:   }
155: 
156:   String generateBasicAuthHeader(String apiKey) {
157:     String credentials = '$apiKey:';
158:     String base64Encoded = base64Encode(utf8.encode(credentials));
159:     return 'Basic $base64Encoded';

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

6: import 'package:customer/utils/preferences.dart';
7: import 'package:flutter/material.dart';
8: import 'package:get/get.dart';
9: import '../../../controllers/theme_controller.dart';
10: import '../../../service/localization_service.dart';
11: 
12: class ChangeLanguageScreen extends StatelessWidget {
13:   const ChangeLanguageScreen({super.key});
14: 
15:   @override
16:   Widget build(BuildContext context) {
17:     final themeController = Get.find<ThemeController>();
18:     final isDark = themeController.isDark.value;
19:     return GetX(
20:       init: ChangeLanguageController(),
21:       builder: (controller) {
22:         return Scaffold(

7: import 'package:flutter/material.dart';
8: import 'package:get/get.dart';
9: import '../../../controllers/theme_controller.dart';
10: import '../../../service/localization_service.dart';
11: 
12: class ChangeLanguageScreen extends StatelessWidget {
13:   const ChangeLanguageScreen({super.key});
14: 
15:   @override
16:   Widget build(BuildContext context) {
17:     final themeController = Get.find<ThemeController>();
18:     final isDark = themeController.isDark.value;
19:     return GetX(
20:       init: ChangeLanguageController(),
21:       builder: (controller) {
22:         return Scaffold(
23:           appBar: AppBar(backgroundColor: isDark ? AppThemeData.surfaceDark : AppThemeData.surface, centerTitle: false, titleSpacing: 0),

14: 
15:   @override
16:   Widget build(BuildContext context) {
17:     final themeController = Get.find<ThemeController>();
18:     final isDark = themeController.isDark.value;
19:     return GetX(
20:       init: ChangeLanguageController(),
21:       builder: (controller) {
22:         return Scaffold(
23:           appBar: AppBar(backgroundColor: isDark ? AppThemeData.surfaceDark : AppThemeData.surface, centerTitle: false, titleSpacing: 0),
24:           body:
25:               controller.isLoading.value
26:                   ? Constant.loader()
27:                   : Padding(
28:                     padding: const EdgeInsets.symmetric(horizontal: 16),
29:                     child: Column(
30:                       crossAxisAlignment: CrossAxisAlignment.start,

27:                   : Padding(
28:                     padding: const EdgeInsets.symmetric(horizontal: 16),
29:                     child: Column(
30:                       crossAxisAlignment: CrossAxisAlignment.start,
31:                       children: [
32:                         Text(
33:                           "Change Language".tr,
34:                           style: TextStyle(fontSize: 24, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w500),
35:                         ),
36:                         Text(
37:                           "Select your preferred language for a personalized app experience.".tr,
38:                           style: TextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontFamily: AppThemeData.regular, fontWeight: FontWeight.w400),
39:                         ),
40:                         const SizedBox(height: 20),
41:                         Expanded(
42:                           child: GridView.count(
43:                             crossAxisCount: 2,

31:                       children: [
32:                         Text(
33:                           "Change Language".tr,
34:                           style: TextStyle(fontSize: 24, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w500),
35:                         ),
36:                         Text(
37:                           "Select your preferred language for a personalized app experience.".tr,
38:                           style: TextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontFamily: AppThemeData.regular, fontWeight: FontWeight.w400),
39:                         ),
40:                         const SizedBox(height: 20),
41:                         Expanded(
42:                           child: GridView.count(
43:                             crossAxisCount: 2,
44:                             childAspectRatio: (1.1 / 1),
45:                             crossAxisSpacing: 5,
46:                             mainAxisSpacing: 1,
47:                             children:

42:                           child: GridView.count(
43:                             crossAxisCount: 2,
44:                             childAspectRatio: (1.1 / 1),
45:                             crossAxisSpacing: 5,
46:                             mainAxisSpacing: 1,
47:                             children:
48:                                 controller.languageList
49:                                     .map(
50:                                       (data) => Obx(
51:                                         () => GestureDetector(
52:                                           onTap: () async {
53:                                             LocalizationService().changeLocale(data.slug.toString());
54:                                             await Preferences.setString(Preferences.languageCodeKey, jsonEncode(data));
55:                                             controller.selectedLanguage.value = data;
56:                                           },
57:                                           child: Container(
58:                                             padding: const EdgeInsets.all(16),

48:                                 controller.languageList
49:                                     .map(
50:                                       (data) => Obx(
51:                                         () => GestureDetector(
52:                                           onTap: () async {
53:                                             LocalizationService().changeLocale(data.slug.toString());
54:                                             await Preferences.setString(Preferences.languageCodeKey, jsonEncode(data));
55:                                             controller.selectedLanguage.value = data;
56:                                           },
57:                                           child: Container(
58:                                             padding: const EdgeInsets.all(16),
59:                                             child: Column(
60:                                               children: [
61:                                                 NetworkImageWidget(imageUrl: data.image.toString(), height: 80, width: 80),
62:                                                 // SvgPicture.network(
63:                                                 //   data.image.toString(),
64:                                                 //   height: 80,

49:                                     .map(
50:                                       (data) => Obx(
51:                                         () => GestureDetector(
52:                                           onTap: () async {
53:                                             LocalizationService().changeLocale(data.slug.toString());
54:                                             await Preferences.setString(Preferences.languageCodeKey, jsonEncode(data));
55:                                             controller.selectedLanguage.value = data;
56:                                           },
57:                                           child: Container(
58:                                             padding: const EdgeInsets.all(16),
59:                                             child: Column(
60:                                               children: [
61:                                                 NetworkImageWidget(imageUrl: data.image.toString(), height: 80, width: 80),
62:                                                 // SvgPicture.network(
63:                                                 //   data.image.toString(),
64:                                                 //   height: 80,
65:                                                 //   width: 80,

69:                                                 const SizedBox(height: 5),
70:                                                 Text(
71:                                                   "${data.title}",
72:                                                   style: TextStyle(
73:                                                     fontSize: 16,
74:                                                     color:
75:                                                         controller.selectedLanguage.value.slug == data.slug
76:                                                             ? AppThemeData.primary300
77:                                                             : isDark
78:                                                             ? AppThemeData.grey400
79:                                                             : AppThemeData.grey500,
80:                                                     fontFamily: AppThemeData.medium,
81:                                                     fontWeight: FontWeight.w400,
82:                                                   ),
83:                                                 ),
84:                                               ],
85:                                             ),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart
```dart
10: import 'package:in_app_review/in_app_review.dart';
11: import '../../../controllers/theme_controller.dart';
12: import '../../../service/fire_store_utils.dart';
13: import '../../../themes/show_toast_dialog.dart';
14: import '../../auth_screens/login_screen.dart';
15: import '../cashback_screen/cashback_offers_list.dart';
16: import '../change langauge/change_language_screen.dart';
17: import '../chat_screens/driver_inbox_screen.dart';
18: import '../chat_screens/restaurant_inbox_screen.dart';
19: import '../dine_in_booking/dine_in_booking_screen.dart';
20: import '../dine_in_screeen/dine_in_screen.dart';
21: import '../edit_profile_screen/edit_profile_screen.dart';
22: import '../gift_card/gift_card_screen.dart';
23: import '../refer_friend_screen/refer_friend_screen.dart';
24: import 'package:firebase_auth/firebase_auth.dart';
25: import 'package:flutter/cupertino.dart';
26: import 'package:flutter/material.dart';

130:                             width: Responsive.width(100, context),
131:                             decoration: ShapeDecoration(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8))),
132:                             child: Padding(
133:                               padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
134:                               child: Column(
135:                                 children: [
136:                                   cardDecoration(isDark, controller, "assets/icons/ic_change_language.svg", "Change Language".tr, () {
137:                                     Get.to(const ChangeLanguageScreen());
138:                                   }),
139:                                   cardDecoration(isDark, controller, "assets/icons/ic_light_dark.svg", "Dark Mode".tr, () {}),
140:                                 ],
141:                               ),
142:                             ),
143:                           ),
144:                           const SizedBox(height: 10),
145:                           Text(
146:                             "Social".tr,

131:                             decoration: ShapeDecoration(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8))),
132:                             child: Padding(
133:                               padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
134:                               child: Column(
135:                                 children: [
136:                                   cardDecoration(isDark, controller, "assets/icons/ic_change_language.svg", "Change Language".tr, () {
137:                                     Get.to(const ChangeLanguageScreen());
138:                                   }),
139:                                   cardDecoration(isDark, controller, "assets/icons/ic_light_dark.svg", "Dark Mode".tr, () {}),
140:                                 ],
141:                               ),
142:                             ),
143:                           ),
144:                           const SizedBox(height: 10),
145:                           Text(
146:                             "Social".tr,
147:                             style: TextStyle(fontSize: 12, color: isDark ? AppThemeData.grey400 : AppThemeData.grey500, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w500),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
```dart
906:       return null;
907:     }
908:     return referralModel;
909:   }
910: 
911:   static Future<List<ProductModel>> getProductByVendorId(String vendorId) async {
912:     String selectedFoodType = Preferences.getString(Preferences.foodDeliveryType, defaultValue: "Delivery");
913:     List<ProductModel> list = [];
914:     log("GetProductByVendorId :: $selectedFoodType");
915:     if (selectedFoodType == "TakeAway") {
916:       await fireStore
917:           .collection(CollectionName.vendorProducts)
918:           .where("vendorID", isEqualTo: vendorId)
919:           .where('publish', isEqualTo: true)
920:           .orderBy("createdAt", descending: false)
921:           .get()
922:           .then((value) {

1799:         }),
1800:       );
1801: 
1802:       print("Response [${response.statusCode}]: ${response.body}");
1803: 
1804:       if (response.statusCode == 200) {
1805:         final decoded = jsonDecode(response.body);
1806:         return decoded['result']?['success'] == true || decoded['success'] == true;
1807:       } else {
1808:         print("Ã¢Å¡Â Ã¯Â¸Â Cloud Function failed: ${response.body}");
1809:         return false;
1810:       }
1811:     } catch (e) {
1812:       print("Ã¢ÂÅ’ Error deleting driver: $e");
1813:       return false;
1814:     }
1815:   }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\localization_service.dart
```dart
11: 
12:   // Keys and their translations
13:   // Translations are separated maps in `lang` file
14:   @override
15:   Map<String, Map<String, String>> get keys => {'en_US': enUS, 'ar_AR': arAR};
16: 
17:   // Gets locale from language, and updates the locale
18:   void changeLocale(String lang) {
19:     Get.updateLocale(Locale(lang));
20:   }
21: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart
```dart
30:       var iosInitializationSettings = const DarwinInitializationSettings();
31:       final InitializationSettings initializationSettings = InitializationSettings(android: initializationSettingsAndroid, iOS: iosInitializationSettings);
32:       await flutterLocalNotificationsPlugin.initialize(
33:         settings: initializationSettings,
34:         onDidReceiveNotificationResponse: (response) {
35:           if (response.payload != null) {
36:             final data = jsonDecode(response.payload!);
37:             final String type = data['type'] ?? '';
38:             final String role = data['chatType'] ?? '';
39:             handleMessageClick(type: type, role: role, isBgApp: false);
40:           }
41:         },
42:       );
43:       setupInteractedMessage();
44:     }
45:   }
46: 

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\preferences.dart
```dart
3: class Preferences {
4:   static const isFinishOnBoardingKey = "isFinishOnBoardingKey";
5:   static const isLogin = "isLogin";
6:   static const accessToken = "accessToken";
7:   static const userData = "userData";
8:   static const themKey = "themKey";
9:   static const languageCodeKey = 'languageCodeKey';
10:   static const zipcode = 'zipcode';
11:   static const foodDeliveryType = "foodDeliveryType";
12:   static const payFastSettings = "payFastSettings";
13:   static const mercadoPago = "MercadoPago";
14:   static const paypalSettings = "paypalSettings";
15:   static const stripeSettings = "stripeSettings";
16:   static const flutterWave = "flutterWave";
17:   static const payStack = "payStack";
18:   static const paytmSettings = "PaytmSettings";
19:   static const walletSettings = "walletSettings";

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\place_picker\location_picker_screen.dart
```dart
71:                         child: Padding(padding: const EdgeInsets.all(10), child: Icon(Icons.arrow_back_ios_new_outlined, color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900)),
72:                       ),
73:                     ),
74:                     SizedBox(height: 20),
75:                     GestureDetector(
76:                       onTap: () async {
77:                         Prediction? p = await PlacesAutocomplete.show(context: context, apiKey: Constant.mapAPIKey, mode: Mode.overlay, language: "en");
78:                         if (p != null) {
79:                           final detail = await _places.getDetailsByPlaceId(p.placeId!);
80:                           final lat = detail.result.geometry!.location.lat;
81:                           final lng = detail.result.geometry!.location.lng;
82:                           final LatLng pos = LatLng(lat, lng);
83:                           controller.selectedLocation.value = pos;
84:                           controller.mapController?.animateCamera(CameraUpdate.newLatLngZoom(pos, 15));
85:                           controller.getAddressFromLatLng(pos);
86:                         }
87:                       },

```

## Final Status

STATUS: LANGUAGE_PREFERENCE_FORMATEXCEPTION_AUDITED