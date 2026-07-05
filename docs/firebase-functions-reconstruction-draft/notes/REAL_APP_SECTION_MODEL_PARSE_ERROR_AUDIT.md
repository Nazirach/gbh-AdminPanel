# SECTION MODEL PARSE ERROR AUDIT

Generated: 06/28/2026 21:42:26

Mode: read-only source audit. No patch. No deploy. No Firebase write. No order creation.

## Current Runtime Error

- FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'

## Purpose

- Identify which SectionModel field expects Map<String, dynamic> but Firestore has null/missing value.


## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart

```dart
1: import 'package:customer/models/admin_commission_model.dart';
2: import 'package:customer/models/platform_fee_model.dart';
3: 
4: class SectionModel {
5:   String? referralAmount;
6:   String? serviceType;
7:   String? color;
8:   String? name;
9:   String? sectionImage;
10:   String? markerIcon;
11:   String? id;
12:   bool? isActive;
13:   bool? dineInActive;
14:   bool? isProductDetails;
15:   String? serviceTypeFlag;
16:   String? deliveryCharge;
17:   String? rideType;
18:   String? theme;
19:   int? nearByRadius;

1: import 'package:customer/models/admin_commission_model.dart';
2: import 'package:customer/models/platform_fee_model.dart';
3: 
4: class SectionModel {
5:   String? referralAmount;
6:   String? serviceType;
7:   String? color;
8:   String? name;
9:   String? sectionImage;
10:   String? markerIcon;
11:   String? id;
12:   bool? isActive;
13:   bool? dineInActive;
14:   bool? isProductDetails;
15:   String? serviceTypeFlag;
16:   String? deliveryCharge;
17:   String? rideType;
18:   String? theme;
19:   int? nearByRadius;
20:   AdminCommission? adminCommision;
21:   PlatformFeeModel? platformFee;
22:   bool? packagingChargeEnable;

1: import 'package:customer/models/admin_commission_model.dart';
2: import 'package:customer/models/platform_fee_model.dart';
3: 
4: class SectionModel {
5:   String? referralAmount;
6:   String? serviceType;
7:   String? color;
8:   String? name;
9:   String? sectionImage;
10:   String? markerIcon;
11:   String? id;
12:   bool? isActive;
13:   bool? dineInActive;
14:   bool? isProductDetails;
15:   String? serviceTypeFlag;
16:   String? deliveryCharge;
17:   String? rideType;
18:   String? theme;
19:   int? nearByRadius;
20:   AdminCommission? adminCommision;
21:   PlatformFeeModel? platformFee;
22:   bool? packagingChargeEnable;
23: 
24:   SectionModel({
25:     this.referralAmount,
26:     this.serviceType,
27:     this.color,

12:   bool? isActive;
13:   bool? dineInActive;
14:   bool? isProductDetails;
15:   String? serviceTypeFlag;
16:   String? deliveryCharge;
17:   String? rideType;
18:   String? theme;
19:   int? nearByRadius;
20:   AdminCommission? adminCommision;
21:   PlatformFeeModel? platformFee;
22:   bool? packagingChargeEnable;
23: 
24:   SectionModel({
25:     this.referralAmount,
26:     this.serviceType,
27:     this.color,
28:     this.name,
29:     this.sectionImage,
30:     this.markerIcon,
31:     this.id,
32:     this.isActive,
33:     this.theme,
34:     this.adminCommision,
35:     this.dineInActive,
36:     this.deliveryCharge,
37:     this.nearByRadius,
38:     this.isProductDetails,

16:   String? deliveryCharge;
17:   String? rideType;
18:   String? theme;
19:   int? nearByRadius;
20:   AdminCommission? adminCommision;
21:   PlatformFeeModel? platformFee;
22:   bool? packagingChargeEnable;
23: 
24:   SectionModel({
25:     this.referralAmount,
26:     this.serviceType,
27:     this.color,
28:     this.name,
29:     this.sectionImage,
30:     this.markerIcon,
31:     this.id,
32:     this.isActive,
33:     this.theme,
34:     this.adminCommision,
35:     this.dineInActive,
36:     this.deliveryCharge,
37:     this.nearByRadius,
38:     this.isProductDetails,
39:     this.serviceTypeFlag,
40:     this.rideType,
41:     this.platformFee,
42:     this.packagingChargeEnable,

21:   PlatformFeeModel? platformFee;
22:   bool? packagingChargeEnable;
23: 
24:   SectionModel({
25:     this.referralAmount,
26:     this.serviceType,
27:     this.color,
28:     this.name,
29:     this.sectionImage,
30:     this.markerIcon,
31:     this.id,
32:     this.isActive,
33:     this.theme,
34:     this.adminCommision,
35:     this.dineInActive,
36:     this.deliveryCharge,
37:     this.nearByRadius,
38:     this.isProductDetails,
39:     this.serviceTypeFlag,
40:     this.rideType,
41:     this.platformFee,
42:     this.packagingChargeEnable,
43:   });
44: 
45:   SectionModel.fromJson(Map<String, dynamic> json) {
46:     referralAmount = json['referralAmount'] ?? '';
47:     serviceType = json['serviceType'] ?? '';

26:     this.serviceType,
27:     this.color,
28:     this.name,
29:     this.sectionImage,
30:     this.markerIcon,
31:     this.id,
32:     this.isActive,
33:     this.theme,
34:     this.adminCommision,
35:     this.dineInActive,
36:     this.deliveryCharge,
37:     this.nearByRadius,
38:     this.isProductDetails,
39:     this.serviceTypeFlag,
40:     this.rideType,
41:     this.platformFee,
42:     this.packagingChargeEnable,
43:   });
44: 
45:   SectionModel.fromJson(Map<String, dynamic> json) {
46:     referralAmount = json['referralAmount'] ?? '';
47:     serviceType = json['serviceType'] ?? '';
48:     color = json['color'];
49:     name = json['name'];
50:     sectionImage = json['sectionImage'];
51:     markerIcon = json['markerIcon'];
52:     id = json['id'];

37:     this.nearByRadius,
38:     this.isProductDetails,
39:     this.serviceTypeFlag,
40:     this.rideType,
41:     this.platformFee,
42:     this.packagingChargeEnable,
43:   });
44: 
45:   SectionModel.fromJson(Map<String, dynamic> json) {
46:     referralAmount = json['referralAmount'] ?? '';
47:     serviceType = json['serviceType'] ?? '';
48:     color = json['color'];
49:     name = json['name'];
50:     sectionImage = json['sectionImage'];
51:     markerIcon = json['markerIcon'];
52:     id = json['id'];
53:     adminCommision = json.containsKey('adminCommision') ? AdminCommission.fromJson(json['adminCommision']) : null;
54:     isActive = json['isActive'];
55:     theme = json['theme'] ?? "theme_2";
56:     dineInActive = json['dine_in_active'] ?? false;
57:     isProductDetails = json['is_product_details'] ?? false;
58:     serviceTypeFlag = json['serviceTypeFlag'] ?? '';
59:     deliveryCharge = json['delivery_charge'] ?? '';
60:     rideType = json['rideType'] ?? 'ride';
61: 
62:     // ðŸ‘‡ Safe parsing for number (handles NaN, double, int)
63:     final rawRadius = json['nearByRadius'];

42:     this.packagingChargeEnable,
43:   });
44: 
45:   SectionModel.fromJson(Map<String, dynamic> json) {
46:     referralAmount = json['referralAmount'] ?? '';
47:     serviceType = json['serviceType'] ?? '';
48:     color = json['color'];
49:     name = json['name'];
50:     sectionImage = json['sectionImage'];
51:     markerIcon = json['markerIcon'];
52:     id = json['id'];
53:     adminCommision = json.containsKey('adminCommision') ? AdminCommission.fromJson(json['adminCommision']) : null;
54:     isActive = json['isActive'];
55:     theme = json['theme'] ?? "theme_2";
56:     dineInActive = json['dine_in_active'] ?? false;
57:     isProductDetails = json['is_product_details'] ?? false;
58:     serviceTypeFlag = json['serviceTypeFlag'] ?? '';
59:     deliveryCharge = json['delivery_charge'] ?? '';
60:     rideType = json['rideType'] ?? 'ride';
61: 
62:     // ðŸ‘‡ Safe parsing for number (handles NaN, double, int)
63:     final rawRadius = json['nearByRadius'];
64:     if (rawRadius == null || rawRadius is! num || rawRadius.isNaN) {
65:       nearByRadius = 5000;
66:     } else {
67:       nearByRadius = rawRadius.toInt();
68:     }

45:   SectionModel.fromJson(Map<String, dynamic> json) {
46:     referralAmount = json['referralAmount'] ?? '';
47:     serviceType = json['serviceType'] ?? '';
48:     color = json['color'];
49:     name = json['name'];
50:     sectionImage = json['sectionImage'];
51:     markerIcon = json['markerIcon'];
52:     id = json['id'];
53:     adminCommision = json.containsKey('adminCommision') ? AdminCommission.fromJson(json['adminCommision']) : null;
54:     isActive = json['isActive'];
55:     theme = json['theme'] ?? "theme_2";
56:     dineInActive = json['dine_in_active'] ?? false;
57:     isProductDetails = json['is_product_details'] ?? false;
58:     serviceTypeFlag = json['serviceTypeFlag'] ?? '';
59:     deliveryCharge = json['delivery_charge'] ?? '';
60:     rideType = json['rideType'] ?? 'ride';
61: 
62:     // ðŸ‘‡ Safe parsing for number (handles NaN, double, int)
63:     final rawRadius = json['nearByRadius'];
64:     if (rawRadius == null || rawRadius is! num || rawRadius.isNaN) {
65:       nearByRadius = 5000;
66:     } else {
67:       nearByRadius = rawRadius.toInt();
68:     }
69:     platformFee = PlatformFeeModel.fromJson(json['platformFee']);
70:     packagingChargeEnable = json['packagingChargeEnable'] ?? false;
71:   }

61: 
62:     // ðŸ‘‡ Safe parsing for number (handles NaN, double, int)
63:     final rawRadius = json['nearByRadius'];
64:     if (rawRadius == null || rawRadius is! num || rawRadius.isNaN) {
65:       nearByRadius = 5000;
66:     } else {
67:       nearByRadius = rawRadius.toInt();
68:     }
69:     platformFee = PlatformFeeModel.fromJson(json['platformFee']);
70:     packagingChargeEnable = json['packagingChargeEnable'] ?? false;
71:   }
72: 
73:   Map<String, dynamic> toJson() {
74:     final Map<String, dynamic> data = <String, dynamic>{};
75:     data['referralAmount'] = referralAmount;
76:     data['serviceType'] = serviceType;
77:     data['color'] = color;
78:     data['name'] = name;
79:     data['sectionImage'] = sectionImage;
80:     data['markerIcon'] = markerIcon;
81:     data['rideType'] = rideType;
82:     data['theme'] = theme;
83:     if (adminCommision != null) {
84:       data['adminCommision'] = adminCommision!.toJson();
85:     }
86:     data['id'] = id;
87:     data['isActive'] = isActive;

65:       nearByRadius = 5000;
66:     } else {
67:       nearByRadius = rawRadius.toInt();
68:     }
69:     platformFee = PlatformFeeModel.fromJson(json['platformFee']);
70:     packagingChargeEnable = json['packagingChargeEnable'] ?? false;
71:   }
72: 
73:   Map<String, dynamic> toJson() {
74:     final Map<String, dynamic> data = <String, dynamic>{};
75:     data['referralAmount'] = referralAmount;
76:     data['serviceType'] = serviceType;
77:     data['color'] = color;
78:     data['name'] = name;
79:     data['sectionImage'] = sectionImage;
80:     data['markerIcon'] = markerIcon;
81:     data['rideType'] = rideType;
82:     data['theme'] = theme;
83:     if (adminCommision != null) {
84:       data['adminCommision'] = adminCommision!.toJson();
85:     }
86:     data['id'] = id;
87:     data['isActive'] = isActive;
88:     data['dine_in_active'] = dineInActive;
89:     data['is_product_details'] = isProductDetails;
90:     data['serviceTypeFlag'] = serviceTypeFlag;
91:     data['delivery_charge'] = deliveryCharge;

66:     } else {
67:       nearByRadius = rawRadius.toInt();
68:     }
69:     platformFee = PlatformFeeModel.fromJson(json['platformFee']);
70:     packagingChargeEnable = json['packagingChargeEnable'] ?? false;
71:   }
72: 
73:   Map<String, dynamic> toJson() {
74:     final Map<String, dynamic> data = <String, dynamic>{};
75:     data['referralAmount'] = referralAmount;
76:     data['serviceType'] = serviceType;
77:     data['color'] = color;
78:     data['name'] = name;
79:     data['sectionImage'] = sectionImage;
80:     data['markerIcon'] = markerIcon;
81:     data['rideType'] = rideType;
82:     data['theme'] = theme;
83:     if (adminCommision != null) {
84:       data['adminCommision'] = adminCommision!.toJson();
85:     }
86:     data['id'] = id;
87:     data['isActive'] = isActive;
88:     data['dine_in_active'] = dineInActive;
89:     data['is_product_details'] = isProductDetails;
90:     data['serviceTypeFlag'] = serviceTypeFlag;
91:     data['delivery_charge'] = deliveryCharge;
92:     data['nearByRadius'] = nearByRadius;

71:   }
72: 
73:   Map<String, dynamic> toJson() {
74:     final Map<String, dynamic> data = <String, dynamic>{};
75:     data['referralAmount'] = referralAmount;
76:     data['serviceType'] = serviceType;
77:     data['color'] = color;
78:     data['name'] = name;
79:     data['sectionImage'] = sectionImage;
80:     data['markerIcon'] = markerIcon;
81:     data['rideType'] = rideType;
82:     data['theme'] = theme;
83:     if (adminCommision != null) {
84:       data['adminCommision'] = adminCommision!.toJson();
85:     }
86:     data['id'] = id;
87:     data['isActive'] = isActive;
88:     data['dine_in_active'] = dineInActive;
89:     data['is_product_details'] = isProductDetails;
90:     data['serviceTypeFlag'] = serviceTypeFlag;
91:     data['delivery_charge'] = deliveryCharge;
92:     data['nearByRadius'] = nearByRadius;
93: 
94:     if (platformFee?.enable == true) {
95:       data['platformFee'] = platformFee?.toJson();
96:     }
97:     data['packagingChargeEnable'] = packagingChargeEnable;

75:     data['referralAmount'] = referralAmount;
76:     data['serviceType'] = serviceType;
77:     data['color'] = color;
78:     data['name'] = name;
79:     data['sectionImage'] = sectionImage;
80:     data['markerIcon'] = markerIcon;
81:     data['rideType'] = rideType;
82:     data['theme'] = theme;
83:     if (adminCommision != null) {
84:       data['adminCommision'] = adminCommision!.toJson();
85:     }
86:     data['id'] = id;
87:     data['isActive'] = isActive;
88:     data['dine_in_active'] = dineInActive;
89:     data['is_product_details'] = isProductDetails;
90:     data['serviceTypeFlag'] = serviceTypeFlag;
91:     data['delivery_charge'] = deliveryCharge;
92:     data['nearByRadius'] = nearByRadius;
93: 
94:     if (platformFee?.enable == true) {
95:       data['platformFee'] = platformFee?.toJson();
96:     }
97:     data['packagingChargeEnable'] = packagingChargeEnable;
98: 
99:     return data;
100:   }
101: }

76:     data['serviceType'] = serviceType;
77:     data['color'] = color;
78:     data['name'] = name;
79:     data['sectionImage'] = sectionImage;
80:     data['markerIcon'] = markerIcon;
81:     data['rideType'] = rideType;
82:     data['theme'] = theme;
83:     if (adminCommision != null) {
84:       data['adminCommision'] = adminCommision!.toJson();
85:     }
86:     data['id'] = id;
87:     data['isActive'] = isActive;
88:     data['dine_in_active'] = dineInActive;
89:     data['is_product_details'] = isProductDetails;
90:     data['serviceTypeFlag'] = serviceTypeFlag;
91:     data['delivery_charge'] = deliveryCharge;
92:     data['nearByRadius'] = nearByRadius;
93: 
94:     if (platformFee?.enable == true) {
95:       data['platformFee'] = platformFee?.toJson();
96:     }
97:     data['packagingChargeEnable'] = packagingChargeEnable;
98: 
99:     return data;
100:   }
101: }

87:     data['isActive'] = isActive;
88:     data['dine_in_active'] = dineInActive;
89:     data['is_product_details'] = isProductDetails;
90:     data['serviceTypeFlag'] = serviceTypeFlag;
91:     data['delivery_charge'] = deliveryCharge;
92:     data['nearByRadius'] = nearByRadius;
93: 
94:     if (platformFee?.enable == true) {
95:       data['platformFee'] = platformFee?.toJson();
96:     }
97:     data['packagingChargeEnable'] = packagingChargeEnable;
98: 
99:     return data;
100:   }
101: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart

```dart
61: import '../models/payment_model/xendit.dart';
62: import '../models/popular_destination.dart';
63: import '../models/product_model.dart';
64: import '../models/provider_serivce_model.dart';
65: import '../models/rating_model.dart';
66: import '../models/referral_model.dart';
67: import '../models/rental_vehicle_type.dart';
68: import '../models/review_attribute_model.dart';
69: import '../models/section_model.dart';
70: import '../models/story_model.dart';
71: import '../models/tax_model.dart';
72: import '../models/vehicle_type.dart';
73: import '../models/vendor_category_model.dart';
74: import '../models/vendor_model.dart';
75: import '../models/wallet_transaction_model.dart';
76: import '../models/worker_model.dart';
77: import '../screen_ui/multi_vendor_service/chat_screens/ChatVideoContainer.dart';
78: import '../themes/app_them_data.dart';
79: import '../themes/show_toast_dialog.dart';
80: import '../utils/preferences.dart';
81: import '../widget/geoflutterfire/src/geoflutterfire.dart';
82: import '../widget/geoflutterfire/src/models/point.dart';
83: import 'package:http/http.dart' as http;
84: 
85: enum FirebaseEnv { defaultDb, staging }
86: 
87: /// Change this to switch between default / staging

137:   static Future<UserModel?> getUserProfile(String uuid) async {
138:     UserModel? userModel;
139:     await fireStore
140:         .collection(CollectionName.users)
141:         .doc(uuid)
142:         .get()
143:         .then((value) {
144:           if (value.exists) {
145:             userModel = UserModel.fromJson(value.data()!);
146:           }
147:         })
148:         .catchError((error) {
149:           log("Failed to update user: $error");
150:           userModel = null;
151:         });
152:     return userModel;
153:   }
154: 
155:   static Future<UserModel?> getUserForChat(String uuid) async {
156:     UserModel? userModel;
157: 
158:     await fireStore
159:         .collection(CollectionName.providersWorkers)
160:         .doc(uuid)
161:         .get()
162:         .then((value) {
163:           if (value.exists) {

156:     UserModel? userModel;
157: 
158:     await fireStore
159:         .collection(CollectionName.providersWorkers)
160:         .doc(uuid)
161:         .get()
162:         .then((value) {
163:           if (value.exists) {
164:             userModel = UserModel.fromJson(value.data()!);
165:           }
166:         })
167:         .catchError((error) {
168:           log("Failed to update user: $error");
169:           userModel = null;
170:         });
171:     return userModel;
172:   }
173: 
174:   static Future<bool> updateUser(UserModel userModel) async {
175:     bool isUpdate = false;
176:     await fireStore
177:         .collection(CollectionName.users)
178:         .doc(userModel.id)
179:         .set(userModel.toJson())
180:         .whenComplete(() {
181:           Constant.userModel = userModel;
182:           isUpdate = true;

171:     return userModel;
172:   }
173: 
174:   static Future<bool> updateUser(UserModel userModel) async {
175:     bool isUpdate = false;
176:     await fireStore
177:         .collection(CollectionName.users)
178:         .doc(userModel.id)
179:         .set(userModel.toJson())
180:         .whenComplete(() {
181:           Constant.userModel = userModel;
182:           isUpdate = true;
183:         })
184:         .catchError((error) {
185:           log("Failed to update user: $error");
186:           isUpdate = false;
187:         });
188:     return isUpdate;
189:   }
190: 
191:   static Future<bool> isMaintenanceMode() async {
192:     bool isMaintenance = false;
193:     await fireStore.collection(CollectionName.settings).doc('maintenance_settings').get().then((value) async {
194:       isMaintenance = value.data()?['isMaintenanceModeForCustomer'] == true;
195:       log("isMaintenance :: $isMaintenance");
196:     });
197:     return isMaintenance;

200:   static Future<List<OnBoardingModel>> getOnBoardingList() async {
201:     List<OnBoardingModel> onBoardingModel = [];
202:     await fireStore
203:         .collection(CollectionName.onBoarding)
204:         .where("type", isEqualTo: "customer")
205:         .get()
206:         .then((value) {
207:           for (var element in value.docs) {
208:             OnBoardingModel documentModel = OnBoardingModel.fromJson(element.data());
209:             onBoardingModel.add(documentModel);
210:           }
211:         })
212:         .catchError((error) {
213:           log(error.toString());
214:         });
215:     return onBoardingModel;
216:   }
217: 
218:   static Future<List<ZoneModel>?> getZone() async {
219:     List<ZoneModel> airPortList = [];
220:     await fireStore
221:         .collection(CollectionName.zone)
222:         .where('publish', isEqualTo: true)
223:         .get()
224:         .then((value) {
225:           for (var element in value.docs) {
226:             ZoneModel ariPortModel = ZoneModel.fromJson(element.data());

218:   static Future<List<ZoneModel>?> getZone() async {
219:     List<ZoneModel> airPortList = [];
220:     await fireStore
221:         .collection(CollectionName.zone)
222:         .where('publish', isEqualTo: true)
223:         .get()
224:         .then((value) {
225:           for (var element in value.docs) {
226:             ZoneModel ariPortModel = ZoneModel.fromJson(element.data());
227:             airPortList.add(ariPortModel);
228:           }
229:         })
230:         .catchError((error) {
231:           log(error.toString());
232:         });
233:     return airPortList;
234:   }
235: 
236:   static Future<String?> referralAdd(ReferralModel ratingModel) async {
237:     try {
238:       await fireStore.collection(CollectionName.referral).doc(ratingModel.id).set(ratingModel.toJson());
239:     } catch (e, s) {
240:       print('FireStoreUtils.referralAdd $e $s');
241:       return "Couldn't review".tr;
242:     }
243:     return null;
244:   }

230:         .catchError((error) {
231:           log(error.toString());
232:         });
233:     return airPortList;
234:   }
235: 
236:   static Future<String?> referralAdd(ReferralModel ratingModel) async {
237:     try {
238:       await fireStore.collection(CollectionName.referral).doc(ratingModel.id).set(ratingModel.toJson());
239:     } catch (e, s) {
240:       print('FireStoreUtils.referralAdd $e $s');
241:       return "Couldn't review".tr;
242:     }
243:     return null;
244:   }
245: 
246:   static Future<ReferralModel?> getReferralUserByCode(String referralCode) async {
247:     ReferralModel? referralModel;
248:     try {
249:       await fireStore.collection(CollectionName.referral).where("referralCode", isEqualTo: referralCode).get().then((value) {
250:         if (value.docs.isNotEmpty) {
251:           referralModel = ReferralModel.fromJson(value.docs.first.data());
252:         }
253:       });
254:     } catch (e, s) {
255:       print('FireStoreUtils.firebaseCreateNewUser $e $s');
256:       return null;

243:     return null;
244:   }
245: 
246:   static Future<ReferralModel?> getReferralUserByCode(String referralCode) async {
247:     ReferralModel? referralModel;
248:     try {
249:       await fireStore.collection(CollectionName.referral).where("referralCode", isEqualTo: referralCode).get().then((value) {
250:         if (value.docs.isNotEmpty) {
251:           referralModel = ReferralModel.fromJson(value.docs.first.data());
252:         }
253:       });
254:     } catch (e, s) {
255:       print('FireStoreUtils.firebaseCreateNewUser $e $s');
256:       return null;
257:     }
258:     return referralModel;
259:   }
260: 
261:   static Future<List<SectionModel>> getSections() async {
262:     List<SectionModel> sections = [];
263:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
264: 
265:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
266:       try {
267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');

253:       });
254:     } catch (e, s) {
255:       print('FireStoreUtils.firebaseCreateNewUser $e $s');
256:       return null;
257:     }
258:     return referralModel;
259:   }
260: 
261:   static Future<List<SectionModel>> getSections() async {
262:     List<SectionModel> sections = [];
263:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
264: 
265:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
266:       try {
267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];

254:     } catch (e, s) {
255:       print('FireStoreUtils.firebaseCreateNewUser $e $s');
256:       return null;
257:     }
258:     return referralModel;
259:   }
260: 
261:   static Future<List<SectionModel>> getSections() async {
262:     List<SectionModel> sections = [];
263:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
264: 
265:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
266:       try {
267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];
280:       }

255:       print('FireStoreUtils.firebaseCreateNewUser $e $s');
256:       return null;
257:     }
258:     return referralModel;
259:   }
260: 
261:   static Future<List<SectionModel>> getSections() async {
262:     List<SectionModel> sections = [];
263:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
264: 
265:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
266:       try {
267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];
280:       }
281:     });

257:     }
258:     return referralModel;
259:   }
260: 
261:   static Future<List<SectionModel>> getSections() async {
262:     List<SectionModel> sections = [];
263:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
264: 
265:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
266:       try {
267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];
280:       }
281:     });
282:     return sections;
283:   }

259:   }
260: 
261:   static Future<List<SectionModel>> getSections() async {
262:     List<SectionModel> sections = [];
263:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
264: 
265:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
266:       try {
267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];
280:       }
281:     });
282:     return sections;
283:   }
284: 
285:   static Future<CurrencyModel?> getCurrency() async {

261:   static Future<List<SectionModel>> getSections() async {
262:     List<SectionModel> sections = [];
263:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
264: 
265:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
266:       try {
267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];
280:       }
281:     });
282:     return sections;
283:   }
284: 
285:   static Future<CurrencyModel?> getCurrency() async {
286:     CurrencyModel? currency;
287:     await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: true).get().then((value) {

264: 
265:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
266:       try {
267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];
280:       }
281:     });
282:     return sections;
283:   }
284: 
285:   static Future<CurrencyModel?> getCurrency() async {
286:     CurrencyModel? currency;
287:     await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: true).get().then((value) {
288:       if (value.docs.isNotEmpty) {
289:         currency = CurrencyModel.fromJson(value.docs.first.data());
290:       }

267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];
280:       }
281:     });
282:     return sections;
283:   }
284: 
285:   static Future<CurrencyModel?> getCurrency() async {
286:     CurrencyModel? currency;
287:     await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: true).get().then((value) {
288:       if (value.docs.isNotEmpty) {
289:         currency = CurrencyModel.fromJson(value.docs.first.data());
290:       }
291:     });
292:     return currency;
293:   }

268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];
280:       }
281:     });
282:     return sections;
283:   }
284: 
285:   static Future<CurrencyModel?> getCurrency() async {
286:     CurrencyModel? currency;
287:     await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: true).get().then((value) {
288:       if (value.docs.isNotEmpty) {
289:         currency = CurrencyModel.fromJson(value.docs.first.data());
290:       }
291:     });
292:     return currency;
293:   }
294: 

271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];
280:       }
281:     });
282:     return sections;
283:   }
284: 
285:   static Future<CurrencyModel?> getCurrency() async {
286:     CurrencyModel? currency;
287:     await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: true).get().then((value) {
288:       if (value.docs.isNotEmpty) {
289:         currency = CurrencyModel.fromJson(value.docs.first.data());
290:       }
291:     });
292:     return currency;
293:   }
294: 
295:   static Future<List<AdvertisementModel>> getAllAdvertisement() async {
296:     List<AdvertisementModel> advertisementList = [];
297:     await fireStore

274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];
280:       }
281:     });
282:     return sections;
283:   }
284: 
285:   static Future<CurrencyModel?> getCurrency() async {
286:     CurrencyModel? currency;
287:     await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: true).get().then((value) {
288:       if (value.docs.isNotEmpty) {
289:         currency = CurrencyModel.fromJson(value.docs.first.data());
290:       }
291:     });
292:     return currency;
293:   }
294: 
295:   static Future<List<AdvertisementModel>> getAllAdvertisement() async {
296:     List<AdvertisementModel> advertisementList = [];
297:     await fireStore
298:         .collection(CollectionName.advertisements)
299:         .where('status', isEqualTo: 'approved')
300:         .where('paymentStatus', isEqualTo: true)

281:     });
282:     return sections;
283:   }
284: 
285:   static Future<CurrencyModel?> getCurrency() async {
286:     CurrencyModel? currency;
287:     await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: true).get().then((value) {
288:       if (value.docs.isNotEmpty) {
289:         currency = CurrencyModel.fromJson(value.docs.first.data());
290:       }
291:     });
292:     return currency;
293:   }
294: 
295:   static Future<List<AdvertisementModel>> getAllAdvertisement() async {
296:     List<AdvertisementModel> advertisementList = [];
297:     await fireStore
298:         .collection(CollectionName.advertisements)
299:         .where('status', isEqualTo: 'approved')
300:         .where('paymentStatus', isEqualTo: true)
301:         .where('startDate', isLessThanOrEqualTo: DateTime.now())
302:         .where('endDate', isGreaterThan: DateTime.now())
303:         .orderBy('priority', descending: false)
304:         .get()
305:         .then((value) {
306:           for (var element in value.docs) {
307:             AdvertisementModel advertisementModel = AdvertisementModel.fromJson(element.data());

299:         .where('status', isEqualTo: 'approved')
300:         .where('paymentStatus', isEqualTo: true)
301:         .where('startDate', isLessThanOrEqualTo: DateTime.now())
302:         .where('endDate', isGreaterThan: DateTime.now())
303:         .orderBy('priority', descending: false)
304:         .get()
305:         .then((value) {
306:           for (var element in value.docs) {
307:             AdvertisementModel advertisementModel = AdvertisementModel.fromJson(element.data());
308:             if (advertisementModel.isPaused == null || advertisementModel.isPaused == false) {
309:               advertisementList.add(advertisementModel);
310:             }
311:           }
312:         });
313:     return advertisementList;
314:   }
315: 
316:   static Future<List<FavouriteModel>> getFavouriteRestaurant() async {
317:     List<FavouriteModel> favouriteList = [];
318:     await fireStore.collection(CollectionName.favoriteVendor).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
319:       for (var element in value.docs) {
320:         FavouriteModel favouriteModel = FavouriteModel.fromJson(element.data());
321:         favouriteList.add(favouriteModel);
322:       }
323:     });
324:     log("CollectionName.favoriteRestaurant :: ${favouriteList.length}");
325:     return favouriteList;

310:             }
311:           }
312:         });
313:     return advertisementList;
314:   }
315: 
316:   static Future<List<FavouriteModel>> getFavouriteRestaurant() async {
317:     List<FavouriteModel> favouriteList = [];
318:     await fireStore.collection(CollectionName.favoriteVendor).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
319:       for (var element in value.docs) {
320:         FavouriteModel favouriteModel = FavouriteModel.fromJson(element.data());
321:         favouriteList.add(favouriteModel);
322:       }
323:     });
324:     log("CollectionName.favoriteRestaurant :: ${favouriteList.length}");
325:     return favouriteList;
326:   }
327: 
328:   static Future<EmailTemplateModel?> getEmailTemplates(String type) async {
329:     EmailTemplateModel? emailTemplateModel;
330:     await fireStore.collection(CollectionName.emailTemplates).where('type', isEqualTo: type).get().then((value) {
331:       print("------>");
332:       if (value.docs.isNotEmpty) {
333:         print(value.docs.first.data());
334:         emailTemplateModel = EmailTemplateModel.fromJson(value.docs.first.data());
335:       }
336:     });

312:         });
313:     return advertisementList;
314:   }
315: 
316:   static Future<List<FavouriteModel>> getFavouriteRestaurant() async {
317:     List<FavouriteModel> favouriteList = [];
318:     await fireStore.collection(CollectionName.favoriteVendor).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
319:       for (var element in value.docs) {
320:         FavouriteModel favouriteModel = FavouriteModel.fromJson(element.data());
321:         favouriteList.add(favouriteModel);
322:       }
323:     });
324:     log("CollectionName.favoriteRestaurant :: ${favouriteList.length}");
325:     return favouriteList;
326:   }
327: 
328:   static Future<EmailTemplateModel?> getEmailTemplates(String type) async {
329:     EmailTemplateModel? emailTemplateModel;
330:     await fireStore.collection(CollectionName.emailTemplates).where('type', isEqualTo: type).get().then((value) {
331:       print("------>");
332:       if (value.docs.isNotEmpty) {
333:         print(value.docs.first.data());
334:         emailTemplateModel = EmailTemplateModel.fromJson(value.docs.first.data());
335:       }
336:     });
337:     return emailTemplateModel;
338:   }

326:   }
327: 
328:   static Future<EmailTemplateModel?> getEmailTemplates(String type) async {
329:     EmailTemplateModel? emailTemplateModel;
330:     await fireStore.collection(CollectionName.emailTemplates).where('type', isEqualTo: type).get().then((value) {
331:       print("------>");
332:       if (value.docs.isNotEmpty) {
333:         print(value.docs.first.data());
334:         emailTemplateModel = EmailTemplateModel.fromJson(value.docs.first.data());
335:       }
336:     });
337:     return emailTemplateModel;
338:   }
339: 
340:   static Future<List<CashbackModel>> getCashbackList() async {
341:     List<CashbackModel> cashbackList = [];
342:     try {
343:       await fireStore
344:           .collection(CollectionName.cashback)
345:           .where('isEnabled', isEqualTo: true)
346:           .where('startDate', isLessThanOrEqualTo: Timestamp.now())
347:           .where('endDate', isGreaterThanOrEqualTo: Timestamp.now())
348:           .get()
349:           .then((event) {
350:             if (event.docs.isNotEmpty) {
351:               for (var element in event.docs) {
352:                 CashbackModel cashbackModel = CashbackModel.fromJson(element.data());

344:           .collection(CollectionName.cashback)
345:           .where('isEnabled', isEqualTo: true)
346:           .where('startDate', isLessThanOrEqualTo: Timestamp.now())
347:           .where('endDate', isGreaterThanOrEqualTo: Timestamp.now())
348:           .get()
349:           .then((event) {
350:             if (event.docs.isNotEmpty) {
351:               for (var element in event.docs) {
352:                 CashbackModel cashbackModel = CashbackModel.fromJson(element.data());
353:                 if (cashbackModel.customerIds == null || cashbackModel.customerIds?.contains(FireStoreUtils.getCurrentUid()) == true) {
354:                   cashbackList.add(cashbackModel);
355:                 }
356:               }
357:             }
358:           });
359:     } catch (error, stackTrace) {
360:       log('Error fetching redeemed cashback data: $error', stackTrace: stackTrace);
361:     }
362: 
363:     return cashbackList;
364:   }
365: 
366:   static Future addDriverInbox(InboxModel inboxModel) async {
367:     return await fireStore.collection("chat_driver").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
368:       return inboxModel;
369:     });
370:   }

359:     } catch (error, stackTrace) {
360:       log('Error fetching redeemed cashback data: $error', stackTrace: stackTrace);
361:     }
362: 
363:     return cashbackList;
364:   }
365: 
366:   static Future addDriverInbox(InboxModel inboxModel) async {
367:     return await fireStore.collection("chat_driver").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
368:       return inboxModel;
369:     });
370:   }
371: 
372:   static Future addDriverChat(ConversationModel conversationModel) async {
373:     return await fireStore.collection("chat_driver").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
374:       return conversationModel;
375:     });
376:   }
377: 
378:   static Future addRestaurantInbox(InboxModel inboxModel) async {
379:     return await fireStore.collection("chat_store").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
380:       return inboxModel;
381:     });
382:   }
383: 
384:   static Future addRestaurantChat(ConversationModel conversationModel) async {
385:     return await fireStore.collection("chat_store").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {

365: 
366:   static Future addDriverInbox(InboxModel inboxModel) async {
367:     return await fireStore.collection("chat_driver").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
368:       return inboxModel;
369:     });
370:   }
371: 
372:   static Future addDriverChat(ConversationModel conversationModel) async {
373:     return await fireStore.collection("chat_driver").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
374:       return conversationModel;
375:     });
376:   }
377: 
378:   static Future addRestaurantInbox(InboxModel inboxModel) async {
379:     return await fireStore.collection("chat_store").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
380:       return inboxModel;
381:     });
382:   }
383: 
384:   static Future addRestaurantChat(ConversationModel conversationModel) async {
385:     return await fireStore.collection("chat_store").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
386:       return conversationModel;
387:     });
388:   }
389: 
390:   static Future addWorkerInbox(InboxModel inboxModel) async {
391:     return await fireStore.collection("chat_worker").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {

371: 
372:   static Future addDriverChat(ConversationModel conversationModel) async {
373:     return await fireStore.collection("chat_driver").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
374:       return conversationModel;
375:     });
376:   }
377: 
378:   static Future addRestaurantInbox(InboxModel inboxModel) async {
379:     return await fireStore.collection("chat_store").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
380:       return inboxModel;
381:     });
382:   }
383: 
384:   static Future addRestaurantChat(ConversationModel conversationModel) async {
385:     return await fireStore.collection("chat_store").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
386:       return conversationModel;
387:     });
388:   }
389: 
390:   static Future addWorkerInbox(InboxModel inboxModel) async {
391:     return await fireStore.collection("chat_worker").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
392:       return inboxModel;
393:     });
394:   }
395: 
396:   static Future addWorkerChat(ConversationModel conversationModel) async {
397:     return await fireStore.collection("chat_worker").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {

377: 
378:   static Future addRestaurantInbox(InboxModel inboxModel) async {
379:     return await fireStore.collection("chat_store").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
380:       return inboxModel;
381:     });
382:   }
383: 
384:   static Future addRestaurantChat(ConversationModel conversationModel) async {
385:     return await fireStore.collection("chat_store").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
386:       return conversationModel;
387:     });
388:   }
389: 
390:   static Future addWorkerInbox(InboxModel inboxModel) async {
391:     return await fireStore.collection("chat_worker").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
392:       return inboxModel;
393:     });
394:   }
395: 
396:   static Future addWorkerChat(ConversationModel conversationModel) async {
397:     return await fireStore.collection("chat_worker").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
398:       return conversationModel;
399:     });
400:   }
401: 
402:   static Future addProviderInbox(InboxModel inboxModel) async {
403:     return await fireStore.collection("chat_provider").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {

383: 
384:   static Future addRestaurantChat(ConversationModel conversationModel) async {
385:     return await fireStore.collection("chat_store").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
386:       return conversationModel;
387:     });
388:   }
389: 
390:   static Future addWorkerInbox(InboxModel inboxModel) async {
391:     return await fireStore.collection("chat_worker").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
392:       return inboxModel;
393:     });
394:   }
395: 
396:   static Future addWorkerChat(ConversationModel conversationModel) async {
397:     return await fireStore.collection("chat_worker").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
398:       return conversationModel;
399:     });
400:   }
401: 
402:   static Future addProviderInbox(InboxModel inboxModel) async {
403:     return await fireStore.collection("chat_provider").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
404:       return inboxModel;
405:     });
406:   }
407: 
408:   static Future addProviderChat(ConversationModel conversationModel) async {
409:     return await fireStore.collection("chat_provider").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {

389: 
390:   static Future addWorkerInbox(InboxModel inboxModel) async {
391:     return await fireStore.collection("chat_worker").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
392:       return inboxModel;
393:     });
394:   }
395: 
396:   static Future addWorkerChat(ConversationModel conversationModel) async {
397:     return await fireStore.collection("chat_worker").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
398:       return conversationModel;
399:     });
400:   }
401: 
402:   static Future addProviderInbox(InboxModel inboxModel) async {
403:     return await fireStore.collection("chat_provider").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
404:       return inboxModel;
405:     });
406:   }
407: 
408:   static Future addProviderChat(ConversationModel conversationModel) async {
409:     return await fireStore.collection("chat_provider").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
410:       return conversationModel;
411:     });
412:   }
413: 
414:   static Future<List<TaxModel>?> getTaxList(String? sectionId) async {
415:     List<TaxModel> taxList = [];

395: 
396:   static Future addWorkerChat(ConversationModel conversationModel) async {
397:     return await fireStore.collection("chat_worker").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
398:       return conversationModel;
399:     });
400:   }
401: 
402:   static Future addProviderInbox(InboxModel inboxModel) async {
403:     return await fireStore.collection("chat_provider").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
404:       return inboxModel;
405:     });
406:   }
407: 
408:   static Future addProviderChat(ConversationModel conversationModel) async {
409:     return await fireStore.collection("chat_provider").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
410:       return conversationModel;
411:     });
412:   }
413: 
414:   static Future<List<TaxModel>?> getTaxList(String? sectionId) async {
415:     List<TaxModel> taxList = [];
416:     List<Placemark> placeMarks = await placemarkFromCoordinates(Constant.selectedLocation.location!.latitude ?? 0.0, Constant.selectedLocation.location!.longitude ?? 0.0);
417:     await fireStore
418:         .collection(CollectionName.tax)
419:         .where('sectionId', isEqualTo: sectionId)
420:         .where('country', isEqualTo: placeMarks.first.country)
421:         .where('enable', isEqualTo: true)

401: 
402:   static Future addProviderInbox(InboxModel inboxModel) async {
403:     return await fireStore.collection("chat_provider").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
404:       return inboxModel;
405:     });
406:   }
407: 
408:   static Future addProviderChat(ConversationModel conversationModel) async {
409:     return await fireStore.collection("chat_provider").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
410:       return conversationModel;
411:     });
412:   }
413: 
414:   static Future<List<TaxModel>?> getTaxList(String? sectionId) async {
415:     List<TaxModel> taxList = [];
416:     List<Placemark> placeMarks = await placemarkFromCoordinates(Constant.selectedLocation.location!.latitude ?? 0.0, Constant.selectedLocation.location!.longitude ?? 0.0);
417:     await fireStore
418:         .collection(CollectionName.tax)
419:         .where('sectionId', isEqualTo: sectionId)
420:         .where('country', isEqualTo: placeMarks.first.country)
421:         .where('enable', isEqualTo: true)
422:         .get()
423:         .then((value) {
424:           for (var element in value.docs) {
425:             TaxModel taxModel = TaxModel.fromJson(element.data());
426:             taxList.add(taxModel);
427:           }

406:   }
407: 
408:   static Future addProviderChat(ConversationModel conversationModel) async {
409:     return await fireStore.collection("chat_provider").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
410:       return conversationModel;
411:     });
412:   }
413: 
414:   static Future<List<TaxModel>?> getTaxList(String? sectionId) async {
415:     List<TaxModel> taxList = [];
416:     List<Placemark> placeMarks = await placemarkFromCoordinates(Constant.selectedLocation.location!.latitude ?? 0.0, Constant.selectedLocation.location!.longitude ?? 0.0);
417:     await fireStore
418:         .collection(CollectionName.tax)
419:         .where('sectionId', isEqualTo: sectionId)
420:         .where('country', isEqualTo: placeMarks.first.country)
421:         .where('enable', isEqualTo: true)
422:         .get()
423:         .then((value) {
424:           for (var element in value.docs) {
425:             TaxModel taxModel = TaxModel.fromJson(element.data());
426:             taxList.add(taxModel);
427:           }
428:         })
429:         .catchError((error) {
430:           log(error.toString());
431:         });
432: 

411:     });
412:   }
413: 
414:   static Future<List<TaxModel>?> getTaxList(String? sectionId) async {
415:     List<TaxModel> taxList = [];
416:     List<Placemark> placeMarks = await placemarkFromCoordinates(Constant.selectedLocation.location!.latitude ?? 0.0, Constant.selectedLocation.location!.longitude ?? 0.0);
417:     await fireStore
418:         .collection(CollectionName.tax)
419:         .where('sectionId', isEqualTo: sectionId)
420:         .where('country', isEqualTo: placeMarks.first.country)
421:         .where('enable', isEqualTo: true)
422:         .get()
423:         .then((value) {
424:           for (var element in value.docs) {
425:             TaxModel taxModel = TaxModel.fromJson(element.data());
426:             taxList.add(taxModel);
427:           }
428:         })
429:         .catchError((error) {
430:           log(error.toString());
431:         });
432: 
433:     return taxList;
434:   }
435: 
436:   static Future<List<DineInBookingModel>> getDineInBooking(bool isUpcoming) async {
437:     List<DineInBookingModel> list = [];

417:     await fireStore
418:         .collection(CollectionName.tax)
419:         .where('sectionId', isEqualTo: sectionId)
420:         .where('country', isEqualTo: placeMarks.first.country)
421:         .where('enable', isEqualTo: true)
422:         .get()
423:         .then((value) {
424:           for (var element in value.docs) {
425:             TaxModel taxModel = TaxModel.fromJson(element.data());
426:             taxList.add(taxModel);
427:           }
428:         })
429:         .catchError((error) {
430:           log(error.toString());
431:         });
432: 
433:     return taxList;
434:   }
435: 
436:   static Future<List<DineInBookingModel>> getDineInBooking(bool isUpcoming) async {
437:     List<DineInBookingModel> list = [];
438: 
439:     if (isUpcoming) {
440:       await fireStore
441:           .collection(CollectionName.bookedTable)
442:           .where('authorID', isEqualTo: getCurrentUid())
443:           .where('date', isGreaterThan: Timestamp.now())

441:           .collection(CollectionName.bookedTable)
442:           .where('authorID', isEqualTo: getCurrentUid())
443:           .where('date', isGreaterThan: Timestamp.now())
444:           .orderBy('date', descending: true)
445:           .orderBy('createdAt', descending: true)
446:           .get()
447:           .then((value) {
448:             for (var element in value.docs) {
449:               DineInBookingModel taxModel = DineInBookingModel.fromJson(element.data());
450:               list.add(taxModel);
451:             }
452:           })
453:           .catchError((error) {
454:             log(error.toString());
455:           });
456:     } else {
457:       await fireStore
458:           .collection(CollectionName.bookedTable)
459:           .where('authorID', isEqualTo: getCurrentUid())
460:           .where('date', isLessThan: Timestamp.now())
461:           .orderBy('date', descending: true)
462:           .orderBy('createdAt', descending: true)
463:           .get()
464:           .then((value) {
465:             for (var element in value.docs) {
466:               DineInBookingModel taxModel = DineInBookingModel.fromJson(element.data());
467:               list.add(taxModel);

458:           .collection(CollectionName.bookedTable)
459:           .where('authorID', isEqualTo: getCurrentUid())
460:           .where('date', isLessThan: Timestamp.now())
461:           .orderBy('date', descending: true)
462:           .orderBy('createdAt', descending: true)
463:           .get()
464:           .then((value) {
465:             for (var element in value.docs) {
466:               DineInBookingModel taxModel = DineInBookingModel.fromJson(element.data());
467:               list.add(taxModel);
468:             }
469:           })
470:           .catchError((error) {
471:             log(error.toString());
472:           });
473:     }
474: 
475:     return list;
476:   }
477: 
478:   static Future<List<VendorCategoryModel>> getHomeVendorCategory() async {
479:     List<VendorCategoryModel> list = [];
480:     await fireStore
481:         .collection(CollectionName.vendorCategories)
482:         .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
483:         .where("show_in_homepage", isEqualTo: true)
484:         .where('publish', isEqualTo: true)

474: 
475:     return list;
476:   }
477: 
478:   static Future<List<VendorCategoryModel>> getHomeVendorCategory() async {
479:     List<VendorCategoryModel> list = [];
480:     await fireStore
481:         .collection(CollectionName.vendorCategories)
482:         .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
483:         .where("show_in_homepage", isEqualTo: true)
484:         .where('publish', isEqualTo: true)
485:         .get()
486:         .then((value) {
487:           for (var element in value.docs) {
488:             VendorCategoryModel walletTransactionModel = VendorCategoryModel.fromJson(element.data());
489:             list.add(walletTransactionModel);
490:           }
491:         })
492:         .catchError((error) {
493:           log(error.toString());
494:         });
495:     return list;
496:   }
497: 
498:   static Future<List<ProductModel>> getProductListByBrandId(String brandId) async {
499:     List<ProductModel> list = [];
500:     await fireStore

480:     await fireStore
481:         .collection(CollectionName.vendorCategories)
482:         .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
483:         .where("show_in_homepage", isEqualTo: true)
484:         .where('publish', isEqualTo: true)
485:         .get()
486:         .then((value) {
487:           for (var element in value.docs) {
488:             VendorCategoryModel walletTransactionModel = VendorCategoryModel.fromJson(element.data());
489:             list.add(walletTransactionModel);
490:           }
491:         })
492:         .catchError((error) {
493:           log(error.toString());
494:         });
495:     return list;
496:   }
497: 
498:   static Future<List<ProductModel>> getProductListByBrandId(String brandId) async {
499:     List<ProductModel> list = [];
500:     await fireStore
501:         .collection(CollectionName.vendorProducts)
502:         .where('brandID', isEqualTo: brandId)
503:         .where('publish', isEqualTo: true)
504:         .get()
505:         .then((value) {
506:           for (var element in value.docs) {

499:     List<ProductModel> list = [];
500:     await fireStore
501:         .collection(CollectionName.vendorProducts)
502:         .where('brandID', isEqualTo: brandId)
503:         .where('publish', isEqualTo: true)
504:         .get()
505:         .then((value) {
506:           for (var element in value.docs) {
507:             ProductModel walletTransactionModel = ProductModel.fromJson(element.data());
508:             list.add(walletTransactionModel);
509:           }
510:         })
511:         .catchError((error) {
512:           log(error.toString());
513:         });
514:     return list;
515:   }
516: 
517:   static Future<List<BannerModel>> getHomeBottomBanner() async {
518:     List<BannerModel> bannerList = [];
519:     await fireStore
520:         .collection(CollectionName.bannerItems)
521:         .where("is_publish", isEqualTo: true)
522:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
523:         .where("position", isEqualTo: "middle")
524:         .orderBy("set_order", descending: false)
525:         .get()

514:     return list;
515:   }
516: 
517:   static Future<List<BannerModel>> getHomeBottomBanner() async {
518:     List<BannerModel> bannerList = [];
519:     await fireStore
520:         .collection(CollectionName.bannerItems)
521:         .where("is_publish", isEqualTo: true)
522:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
523:         .where("position", isEqualTo: "middle")
524:         .orderBy("set_order", descending: false)
525:         .get()
526:         .then((value) {
527:           for (var element in value.docs) {
528:             BannerModel bannerHome = BannerModel.fromJson(element.data());
529:             bannerList.add(bannerHome);
530:           }
531:         });
532:     return bannerList;
533:   }
534: 
535:   static Future<List<BrandsModel>> getBrandList() async {
536:     List<BrandsModel> brandList = [];
537:     await fireStore.collection(CollectionName.brands).where("is_publish", isEqualTo: true).get().then((value) {
538:       for (var element in value.docs) {
539:         BrandsModel bannerHome = BrandsModel.fromJson(element.data());
540:         brandList.add(bannerHome);

520:         .collection(CollectionName.bannerItems)
521:         .where("is_publish", isEqualTo: true)
522:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
523:         .where("position", isEqualTo: "middle")
524:         .orderBy("set_order", descending: false)
525:         .get()
526:         .then((value) {
527:           for (var element in value.docs) {
528:             BannerModel bannerHome = BannerModel.fromJson(element.data());
529:             bannerList.add(bannerHome);
530:           }
531:         });
532:     return bannerList;
533:   }
534: 
535:   static Future<List<BrandsModel>> getBrandList() async {
536:     List<BrandsModel> brandList = [];
537:     await fireStore.collection(CollectionName.brands).where("is_publish", isEqualTo: true).get().then((value) {
538:       for (var element in value.docs) {
539:         BrandsModel bannerHome = BrandsModel.fromJson(element.data());
540:         brandList.add(bannerHome);
541:       }
542:     });
543:     return brandList;
544:   }
545: 
546:   static Future<bool?> setBookedOrder(DineInBookingModel orderModel) async {

531:         });
532:     return bannerList;
533:   }
534: 
535:   static Future<List<BrandsModel>> getBrandList() async {
536:     List<BrandsModel> brandList = [];
537:     await fireStore.collection(CollectionName.brands).where("is_publish", isEqualTo: true).get().then((value) {
538:       for (var element in value.docs) {
539:         BrandsModel bannerHome = BrandsModel.fromJson(element.data());
540:         brandList.add(bannerHome);
541:       }
542:     });
543:     return brandList;
544:   }
545: 
546:   static Future<bool?> setBookedOrder(DineInBookingModel orderModel) async {
547:     bool isAdded = false;
548:     await fireStore
549:         .collection(CollectionName.bookedTable)
550:         .doc(orderModel.id)
551:         .set(orderModel.toJson())
552:         .then((value) {
553:           isAdded = true;
554:         })
555:         .catchError((error) {
556:           log("Failed to update user: $error");
557:           isAdded = false;

543:     return brandList;
544:   }
545: 
546:   static Future<bool?> setBookedOrder(DineInBookingModel orderModel) async {
547:     bool isAdded = false;
548:     await fireStore
549:         .collection(CollectionName.bookedTable)
550:         .doc(orderModel.id)
551:         .set(orderModel.toJson())
552:         .then((value) {
553:           isAdded = true;
554:         })
555:         .catchError((error) {
556:           log("Failed to update user: $error");
557:           isAdded = false;
558:         });
559:     return isAdded;
560:   }
561: 
562:   static Future<List> getVendorCuisines(String id) async {
563:     List tagList = [];
564:     List prodTagList = [];
565:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.vendorProducts).where('vendorID', isEqualTo: id).get();
566:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
567:       if (document.data().containsKey("categoryID") && document.data()['categoryID'].toString().isNotEmpty) {
568:         prodTagList.add(document.data()['categoryID']);
569:       }

557:           isAdded = false;
558:         });
559:     return isAdded;
560:   }
561: 
562:   static Future<List> getVendorCuisines(String id) async {
563:     List tagList = [];
564:     List prodTagList = [];
565:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.vendorProducts).where('vendorID', isEqualTo: id).get();
566:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
567:       if (document.data().containsKey("categoryID") && document.data()['categoryID'].toString().isNotEmpty) {
568:         prodTagList.add(document.data()['categoryID']);
569:       }
570:     });
571:     QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(CollectionName.vendorCategories).where('publish', isEqualTo: true).get();
572:     await Future.forEach(catQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
573:       Map<String, dynamic> catDoc = document.data();
574:       if (catDoc.containsKey("id") && catDoc['id'].toString().isNotEmpty && catDoc.containsKey("title") && catDoc['title'].toString().isNotEmpty && prodTagList.contains(catDoc['id'])) {
575:         tagList.add(catDoc['title']);
576:       }
577:     });
578:     return tagList;
579:   }
580: 
581:   static Future<List<FavouriteItemModel>> getFavouriteItem() async {
582:     List<FavouriteItemModel> favouriteList = [];
583:     await fireStore.collection(CollectionName.favoriteItem).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {

558:         });
559:     return isAdded;
560:   }
561: 
562:   static Future<List> getVendorCuisines(String id) async {
563:     List tagList = [];
564:     List prodTagList = [];
565:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.vendorProducts).where('vendorID', isEqualTo: id).get();
566:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
567:       if (document.data().containsKey("categoryID") && document.data()['categoryID'].toString().isNotEmpty) {
568:         prodTagList.add(document.data()['categoryID']);
569:       }
570:     });
571:     QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(CollectionName.vendorCategories).where('publish', isEqualTo: true).get();
572:     await Future.forEach(catQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
573:       Map<String, dynamic> catDoc = document.data();
574:       if (catDoc.containsKey("id") && catDoc['id'].toString().isNotEmpty && catDoc.containsKey("title") && catDoc['title'].toString().isNotEmpty && prodTagList.contains(catDoc['id'])) {
575:         tagList.add(catDoc['title']);
576:       }
577:     });
578:     return tagList;
579:   }
580: 
581:   static Future<List<FavouriteItemModel>> getFavouriteItem() async {
582:     List<FavouriteItemModel> favouriteList = [];
583:     await fireStore.collection(CollectionName.favoriteItem).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
584:       for (var element in value.docs) {

563:     List tagList = [];
564:     List prodTagList = [];
565:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.vendorProducts).where('vendorID', isEqualTo: id).get();
566:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
567:       if (document.data().containsKey("categoryID") && document.data()['categoryID'].toString().isNotEmpty) {
568:         prodTagList.add(document.data()['categoryID']);
569:       }
570:     });
571:     QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(CollectionName.vendorCategories).where('publish', isEqualTo: true).get();
572:     await Future.forEach(catQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
573:       Map<String, dynamic> catDoc = document.data();
574:       if (catDoc.containsKey("id") && catDoc['id'].toString().isNotEmpty && catDoc.containsKey("title") && catDoc['title'].toString().isNotEmpty && prodTagList.contains(catDoc['id'])) {
575:         tagList.add(catDoc['title']);
576:       }
577:     });
578:     return tagList;
579:   }
580: 
581:   static Future<List<FavouriteItemModel>> getFavouriteItem() async {
582:     List<FavouriteItemModel> favouriteList = [];
583:     await fireStore.collection(CollectionName.favoriteItem).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
584:       for (var element in value.docs) {
585:         FavouriteItemModel favouriteModel = FavouriteItemModel.fromJson(element.data());
586:         favouriteList.add(favouriteModel);
587:       }
588:     });
589:     return favouriteList;

564:     List prodTagList = [];
565:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.vendorProducts).where('vendorID', isEqualTo: id).get();
566:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
567:       if (document.data().containsKey("categoryID") && document.data()['categoryID'].toString().isNotEmpty) {
568:         prodTagList.add(document.data()['categoryID']);
569:       }
570:     });
571:     QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(CollectionName.vendorCategories).where('publish', isEqualTo: true).get();
572:     await Future.forEach(catQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
573:       Map<String, dynamic> catDoc = document.data();
574:       if (catDoc.containsKey("id") && catDoc['id'].toString().isNotEmpty && catDoc.containsKey("title") && catDoc['title'].toString().isNotEmpty && prodTagList.contains(catDoc['id'])) {
575:         tagList.add(catDoc['title']);
576:       }
577:     });
578:     return tagList;
579:   }
580: 
581:   static Future<List<FavouriteItemModel>> getFavouriteItem() async {
582:     List<FavouriteItemModel> favouriteList = [];
583:     await fireStore.collection(CollectionName.favoriteItem).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
584:       for (var element in value.docs) {
585:         FavouriteItemModel favouriteModel = FavouriteItemModel.fromJson(element.data());
586:         favouriteList.add(favouriteModel);
587:       }
588:     });
589:     return favouriteList;
590:   }

565:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.vendorProducts).where('vendorID', isEqualTo: id).get();
566:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
567:       if (document.data().containsKey("categoryID") && document.data()['categoryID'].toString().isNotEmpty) {
568:         prodTagList.add(document.data()['categoryID']);
569:       }
570:     });
571:     QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(CollectionName.vendorCategories).where('publish', isEqualTo: true).get();
572:     await Future.forEach(catQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
573:       Map<String, dynamic> catDoc = document.data();
574:       if (catDoc.containsKey("id") && catDoc['id'].toString().isNotEmpty && catDoc.containsKey("title") && catDoc['title'].toString().isNotEmpty && prodTagList.contains(catDoc['id'])) {
575:         tagList.add(catDoc['title']);
576:       }
577:     });
578:     return tagList;
579:   }
580: 
581:   static Future<List<FavouriteItemModel>> getFavouriteItem() async {
582:     List<FavouriteItemModel> favouriteList = [];
583:     await fireStore.collection(CollectionName.favoriteItem).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
584:       for (var element in value.docs) {
585:         FavouriteItemModel favouriteModel = FavouriteItemModel.fromJson(element.data());
586:         favouriteList.add(favouriteModel);
587:       }
588:     });
589:     return favouriteList;
590:   }
591: 

575:         tagList.add(catDoc['title']);
576:       }
577:     });
578:     return tagList;
579:   }
580: 
581:   static Future<List<FavouriteItemModel>> getFavouriteItem() async {
582:     List<FavouriteItemModel> favouriteList = [];
583:     await fireStore.collection(CollectionName.favoriteItem).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
584:       for (var element in value.docs) {
585:         FavouriteItemModel favouriteModel = FavouriteItemModel.fromJson(element.data());
586:         favouriteList.add(favouriteModel);
587:       }
588:     });
589:     return favouriteList;
590:   }
591: 
592:   static Future<VendorModel?> getVendorById(String vendorId) async {
593:     VendorModel? vendorModel;
594:     try {
595:       await fireStore.collection(CollectionName.vendors).doc(vendorId).get().then((value) {
596:         if (value.exists) {
597:           vendorModel = VendorModel.fromJson(value.data()!);
598:         }
599:       });
600:     } catch (e, s) {
601:       log('FireStoreUtils.firebaseCreateNewUser $e $s');

577:     });
578:     return tagList;
579:   }
580: 
581:   static Future<List<FavouriteItemModel>> getFavouriteItem() async {
582:     List<FavouriteItemModel> favouriteList = [];
583:     await fireStore.collection(CollectionName.favoriteItem).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
584:       for (var element in value.docs) {
585:         FavouriteItemModel favouriteModel = FavouriteItemModel.fromJson(element.data());
586:         favouriteList.add(favouriteModel);
587:       }
588:     });
589:     return favouriteList;
590:   }
591: 
592:   static Future<VendorModel?> getVendorById(String vendorId) async {
593:     VendorModel? vendorModel;
594:     try {
595:       await fireStore.collection(CollectionName.vendors).doc(vendorId).get().then((value) {
596:         if (value.exists) {
597:           vendorModel = VendorModel.fromJson(value.data()!);
598:         }
599:       });
600:     } catch (e, s) {
601:       log('FireStoreUtils.firebaseCreateNewUser $e $s');
602:       return null;
603:     }

589:     return favouriteList;
590:   }
591: 
592:   static Future<VendorModel?> getVendorById(String vendorId) async {
593:     VendorModel? vendorModel;
594:     try {
595:       await fireStore.collection(CollectionName.vendors).doc(vendorId).get().then((value) {
596:         if (value.exists) {
597:           vendorModel = VendorModel.fromJson(value.data()!);
598:         }
599:       });
600:     } catch (e, s) {
601:       log('FireStoreUtils.firebaseCreateNewUser $e $s');
602:       return null;
603:     }
604:     return vendorModel;
605:   }
606: 
607:   static Future<ProductModel?> getProductById(String productId) async {
608:     ProductModel? vendorCategoryModel;
609:     try {
610:       await fireStore.collection(CollectionName.vendorProducts).doc(productId).get().then((value) {
611:         if (value.exists) {
612:           vendorCategoryModel = ProductModel.fromJson(value.data()!);
613:         }
614:       });
615:     } catch (e, s) {

604:     return vendorModel;
605:   }
606: 
607:   static Future<ProductModel?> getProductById(String productId) async {
608:     ProductModel? vendorCategoryModel;
609:     try {
610:       await fireStore.collection(CollectionName.vendorProducts).doc(productId).get().then((value) {
611:         if (value.exists) {
612:           vendorCategoryModel = ProductModel.fromJson(value.data()!);
613:         }
614:       });
615:     } catch (e, s) {
616:       log('FireStoreUtils.firebaseCreateNewUser $e $s');
617:       return null;
618:     }
619:     return vendorCategoryModel;
620:   }
621: 
622:   static Future<List<GiftCardsModel>> getGiftCard() async {
623:     List<GiftCardsModel> giftCardModelList = [];
624:     QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.giftCards).where("isEnable", isEqualTo: true).get();
625:     await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
626:       try {
627:         log(document.data().toString());
628:         giftCardModelList.add(GiftCardsModel.fromJson(document.data()));
629:       } catch (e) {
630:         debugPrint('FireStoreUtils.get Currency Parse error $e');

616:       log('FireStoreUtils.firebaseCreateNewUser $e $s');
617:       return null;
618:     }
619:     return vendorCategoryModel;
620:   }
621: 
622:   static Future<List<GiftCardsModel>> getGiftCard() async {
623:     List<GiftCardsModel> giftCardModelList = [];
624:     QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.giftCards).where("isEnable", isEqualTo: true).get();
625:     await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
626:       try {
627:         log(document.data().toString());
628:         giftCardModelList.add(GiftCardsModel.fromJson(document.data()));
629:       } catch (e) {
630:         debugPrint('FireStoreUtils.get Currency Parse error $e');
631:       }
632:     });
633:     return giftCardModelList;
634:   }
635: 
636:   static Future<bool?> setWalletTransaction(WalletTransactionModel walletTransactionModel) async {
637:     bool isAdded = false;
638:     await fireStore
639:         .collection(CollectionName.wallet)
640:         .doc(walletTransactionModel.id)
641:         .set(walletTransactionModel.toJson())
642:         .then((value) {

617:       return null;
618:     }
619:     return vendorCategoryModel;
620:   }
621: 
622:   static Future<List<GiftCardsModel>> getGiftCard() async {
623:     List<GiftCardsModel> giftCardModelList = [];
624:     QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.giftCards).where("isEnable", isEqualTo: true).get();
625:     await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
626:       try {
627:         log(document.data().toString());
628:         giftCardModelList.add(GiftCardsModel.fromJson(document.data()));
629:       } catch (e) {
630:         debugPrint('FireStoreUtils.get Currency Parse error $e');
631:       }
632:     });
633:     return giftCardModelList;
634:   }
635: 
636:   static Future<bool?> setWalletTransaction(WalletTransactionModel walletTransactionModel) async {
637:     bool isAdded = false;
638:     await fireStore
639:         .collection(CollectionName.wallet)
640:         .doc(walletTransactionModel.id)
641:         .set(walletTransactionModel.toJson())
642:         .then((value) {
643:           isAdded = true;

620:   }
621: 
622:   static Future<List<GiftCardsModel>> getGiftCard() async {
623:     List<GiftCardsModel> giftCardModelList = [];
624:     QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.giftCards).where("isEnable", isEqualTo: true).get();
625:     await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
626:       try {
627:         log(document.data().toString());
628:         giftCardModelList.add(GiftCardsModel.fromJson(document.data()));
629:       } catch (e) {
630:         debugPrint('FireStoreUtils.get Currency Parse error $e');
631:       }
632:     });
633:     return giftCardModelList;
634:   }
635: 
636:   static Future<bool?> setWalletTransaction(WalletTransactionModel walletTransactionModel) async {
637:     bool isAdded = false;
638:     await fireStore
639:         .collection(CollectionName.wallet)
640:         .doc(walletTransactionModel.id)
641:         .set(walletTransactionModel.toJson())
642:         .then((value) {
643:           isAdded = true;
644:         })
645:         .catchError((error) {
646:           log("Failed to update user: $error");

633:     return giftCardModelList;
634:   }
635: 
636:   static Future<bool?> setWalletTransaction(WalletTransactionModel walletTransactionModel) async {
637:     bool isAdded = false;
638:     await fireStore
639:         .collection(CollectionName.wallet)
640:         .doc(walletTransactionModel.id)
641:         .set(walletTransactionModel.toJson())
642:         .then((value) {
643:           isAdded = true;
644:         })
645:         .catchError((error) {
646:           log("Failed to update user: $error");
647:           isAdded = false;
648:         });
649:     return isAdded;
650:   }
651: 
652:   static Future<void> getSettings() async {
653:     try {
654:       final restaurantSnap = await fireStore.collection(CollectionName.settings).doc('vendor').get();
655: 
656:       if (restaurantSnap.exists && restaurantSnap.data() != null) {
657:         Constant.isSubscriptionModelApplied = restaurantSnap.data()?['subscription_model'] ?? false;
658:       } else {
659:         Constant.isSubscriptionModelApplied = false;

746:         Constant.storyEnable = storySnap.data()?['isEnabled'] ?? false;
747:       } else {
748:         Constant.storyEnable = false;
749:       }
750: 
751:       final emailSnap = await fireStore.collection(CollectionName.settings).doc("emailSetting").get();
752: 
753:       if (emailSnap.exists && emailSnap.data() != null) {
754:         Constant.mailSettings = MailSettings.fromJson(emailSnap.data()!);
755:       }
756: 
757:       final specialDiscountSnap = await fireStore.collection(CollectionName.settings).doc("specialDiscountOffer").get();
758: 
759:       if (specialDiscountSnap.exists && specialDiscountSnap.data() != null) {
760:         Constant.specialDiscountOffer = specialDiscountSnap.data()?["isEnable"] ?? false;
761:       } else {
762:         Constant.specialDiscountOffer = false;
763:       }
764:     } catch (e) {
765:       log("getSettings() Error: $e");
766:     }
767:   }
768: 
769:   static Future<List<GiftCardsOrderModel>> getGiftHistory() async {
770:     List<GiftCardsOrderModel> giftCardsOrderList = [];
771:     await fireStore.collection(CollectionName.giftPurchases).where("userid", isEqualTo: FireStoreUtils.getCurrentUid()).get().then((value) {
772:       for (var element in value.docs) {

765:       log("getSettings() Error: $e");
766:     }
767:   }
768: 
769:   static Future<List<GiftCardsOrderModel>> getGiftHistory() async {
770:     List<GiftCardsOrderModel> giftCardsOrderList = [];
771:     await fireStore.collection(CollectionName.giftPurchases).where("userid", isEqualTo: FireStoreUtils.getCurrentUid()).get().then((value) {
772:       for (var element in value.docs) {
773:         GiftCardsOrderModel giftCardsOrderModel = GiftCardsOrderModel.fromJson(element.data());
774:         giftCardsOrderList.add(giftCardsOrderModel);
775:       }
776:     });
777:     return giftCardsOrderList;
778:   }
779: 
780:   static Future<List<OrderModel>> getAllOrder() async {
781:     List<OrderModel> list = [];
782: 
783:     print("Current UID: ${getCurrentUid()}");
784:     print("Section ID: ${Constant.sectionConstantModel?.id}");
785: 
786:     try {
787:       final snapshot =
788:           await fireStore
789:               .collection(CollectionName.vendorOrders)
790:               .where("authorID", isEqualTo: getCurrentUid())
791:               .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)

776:     });
777:     return giftCardsOrderList;
778:   }
779: 
780:   static Future<List<OrderModel>> getAllOrder() async {
781:     List<OrderModel> list = [];
782: 
783:     print("Current UID: ${getCurrentUid()}");
784:     print("Section ID: ${Constant.sectionConstantModel?.id}");
785: 
786:     try {
787:       final snapshot =
788:           await fireStore
789:               .collection(CollectionName.vendorOrders)
790:               .where("authorID", isEqualTo: getCurrentUid())
791:               .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
792:               .orderBy("createdAt", descending: true)
793:               .get();
794: 
795:       print("Snapshot size: ${snapshot.docs.length}");
796: 
797:       for (var element in snapshot.docs) {
798:         OrderModel order = OrderModel.fromJson(element.data());
799:         print("Order fetched: ${order.id}"); // or other fields
800:         list.add(order);
801:       }
802: 

783:     print("Current UID: ${getCurrentUid()}");
784:     print("Section ID: ${Constant.sectionConstantModel?.id}");
785: 
786:     try {
787:       final snapshot =
788:           await fireStore
789:               .collection(CollectionName.vendorOrders)
790:               .where("authorID", isEqualTo: getCurrentUid())
791:               .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
792:               .orderBy("createdAt", descending: true)
793:               .get();
794: 
795:       print("Snapshot size: ${snapshot.docs.length}");
796: 
797:       for (var element in snapshot.docs) {
798:         OrderModel order = OrderModel.fromJson(element.data());
799:         print("Order fetched: ${order.id}"); // or other fields
800:         list.add(order);
801:       }
802: 
803:       print("Total Orders added to list: ${list.length}");
804:     } catch (e) {
805:       print("Error fetching orders: $e");
806:     }
807: 
808:     return list;
809:   }

790:               .where("authorID", isEqualTo: getCurrentUid())
791:               .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
792:               .orderBy("createdAt", descending: true)
793:               .get();
794: 
795:       print("Snapshot size: ${snapshot.docs.length}");
796: 
797:       for (var element in snapshot.docs) {
798:         OrderModel order = OrderModel.fromJson(element.data());
799:         print("Order fetched: ${order.id}"); // or other fields
800:         list.add(order);
801:       }
802: 
803:       print("Total Orders added to list: ${list.length}");
804:     } catch (e) {
805:       print("Error fetching orders: $e");
806:     }
807: 
808:     return list;
809:   }
810: 
811:   static Future<RatingModel?> getOrderReviewsByID(String orderId, String productID) async {
812:     RatingModel? ratingModel;
813: 
814:     await fireStore
815:         .collection(CollectionName.itemsReview)
816:         .where('orderid', isEqualTo: orderId)

813: 
814:     await fireStore
815:         .collection(CollectionName.itemsReview)
816:         .where('orderid', isEqualTo: orderId)
817:         .where('productId', isEqualTo: productID)
818:         .get()
819:         .then((value) {
820:           if (value.docs.isNotEmpty) {
821:             ratingModel = RatingModel.fromJson(value.docs.first.data());
822:           }
823:         })
824:         .catchError((error) {
825:           log(error.toString());
826:         });
827:     return ratingModel;
828:   }
829: 
830:   static Future<VendorCategoryModel?> getVendorCategoryByCategoryId(String categoryId) async {
831:     VendorCategoryModel? vendorCategoryModel;
832:     try {
833:       await fireStore.collection(CollectionName.vendorCategories).doc(categoryId).get().then((value) {
834:         if (value.exists) {
835:           vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
836:         }
837:       });
838:     } catch (e, s) {
839:       log('FireStoreUtils.firebaseCreateNewUser $e $s');

827:     return ratingModel;
828:   }
829: 
830:   static Future<VendorCategoryModel?> getVendorCategoryByCategoryId(String categoryId) async {
831:     VendorCategoryModel? vendorCategoryModel;
832:     try {
833:       await fireStore.collection(CollectionName.vendorCategories).doc(categoryId).get().then((value) {
834:         if (value.exists) {
835:           vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
836:         }
837:       });
838:     } catch (e, s) {
839:       log('FireStoreUtils.firebaseCreateNewUser $e $s');
840:       return null;
841:     }
842:     return vendorCategoryModel;
843:   }
844: 
845:   static Future<ReviewAttributeModel?> getVendorReviewAttribute(String attributeId) async {
846:     ReviewAttributeModel? vendorCategoryModel;
847:     try {
848:       await fireStore.collection(CollectionName.reviewAttributes).doc(attributeId).get().then((value) {
849:         if (value.exists) {
850:           vendorCategoryModel = ReviewAttributeModel.fromJson(value.data()!);
851:         }
852:       });
853:     } catch (e, s) {

842:     return vendorCategoryModel;
843:   }
844: 
845:   static Future<ReviewAttributeModel?> getVendorReviewAttribute(String attributeId) async {
846:     ReviewAttributeModel? vendorCategoryModel;
847:     try {
848:       await fireStore.collection(CollectionName.reviewAttributes).doc(attributeId).get().then((value) {
849:         if (value.exists) {
850:           vendorCategoryModel = ReviewAttributeModel.fromJson(value.data()!);
851:         }
852:       });
853:     } catch (e, s) {
854:       log('FireStoreUtils.firebaseCreateNewUser $e $s');
855:       return null;
856:     }
857:     return vendorCategoryModel;
858:   }
859: 
860:   // static Future<bool?> setRatingModel(RatingModel ratingModel) async {
861:   //   bool isAdded = false;
862:   //   await fireStore
863:   //       .collection(CollectionName.itemsReview)
864:   //       .doc(ratingModel.id)
865:   //       .set(ratingModel.toJson())
866:   //       .then((value) {
867:   //         isAdded = true;
868:   //       })

857:     return vendorCategoryModel;
858:   }
859: 
860:   // static Future<bool?> setRatingModel(RatingModel ratingModel) async {
861:   //   bool isAdded = false;
862:   //   await fireStore
863:   //       .collection(CollectionName.itemsReview)
864:   //       .doc(ratingModel.id)
865:   //       .set(ratingModel.toJson())
866:   //       .then((value) {
867:   //         isAdded = true;
868:   //       })
869:   //       .catchError((error) {
870:   //         log("Failed to update user: $error");
871:   //         isAdded = false;
872:   //       });
873:   //   return isAdded;
874:   // }
875: 
876:   static Future<VendorModel?> updateVendor(VendorModel vendor) async {
877:     return await fireStore.collection(CollectionName.vendors).doc(vendor.id).set(vendor.toJson()).then((document) {
878:       return vendor;
879:     });
880:   }
881: 
882:   static Future<bool?> setProduct(ProductModel orderModel) async {
883:     bool isAdded = false;

869:   //       .catchError((error) {
870:   //         log("Failed to update user: $error");
871:   //         isAdded = false;
872:   //       });
873:   //   return isAdded;
874:   // }
875: 
876:   static Future<VendorModel?> updateVendor(VendorModel vendor) async {
877:     return await fireStore.collection(CollectionName.vendors).doc(vendor.id).set(vendor.toJson()).then((document) {
878:       return vendor;
879:     });
880:   }
881: 
882:   static Future<bool?> setProduct(ProductModel orderModel) async {
883:     bool isAdded = false;
884:     await fireStore
885:         .collection(CollectionName.vendorProducts)
886:         .doc(orderModel.id)
887:         .set(orderModel.toJson())
888:         .then((value) {
889:           isAdded = true;
890:         })
891:         .catchError((error) {
892:           log("Failed to update user: $error");
893:           isAdded = false;
894:         });
895:     return isAdded;

879:     });
880:   }
881: 
882:   static Future<bool?> setProduct(ProductModel orderModel) async {
883:     bool isAdded = false;
884:     await fireStore
885:         .collection(CollectionName.vendorProducts)
886:         .doc(orderModel.id)
887:         .set(orderModel.toJson())
888:         .then((value) {
889:           isAdded = true;
890:         })
891:         .catchError((error) {
892:           log("Failed to update user: $error");
893:           isAdded = false;
894:         });
895:     return isAdded;
896:   }
897: 
898:   static Future<ReferralModel?> getReferralUserBy() async {
899:     ReferralModel? referralModel;
900:     try {
901:       await fireStore.collection(CollectionName.referral).doc(getCurrentUid()).get().then((value) {
902:         referralModel = ReferralModel.fromJson(value.data()!);
903:       });
904:     } catch (e, s) {
905:       print('FireStoreUtils.firebaseCreateNewUser $e $s');

894:         });
895:     return isAdded;
896:   }
897: 
898:   static Future<ReferralModel?> getReferralUserBy() async {
899:     ReferralModel? referralModel;
900:     try {
901:       await fireStore.collection(CollectionName.referral).doc(getCurrentUid()).get().then((value) {
902:         referralModel = ReferralModel.fromJson(value.data()!);
903:       });
904:     } catch (e, s) {
905:       print('FireStoreUtils.firebaseCreateNewUser $e $s');
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

916:       await fireStore
917:           .collection(CollectionName.vendorProducts)
918:           .where("vendorID", isEqualTo: vendorId)
919:           .where('publish', isEqualTo: true)
920:           .orderBy("createdAt", descending: false)
921:           .get()
922:           .then((value) {
923:             for (var element in value.docs) {
924:               ProductModel productModel = ProductModel.fromJson(element.data());
925:               list.add(productModel);
926:             }
927:           })
928:           .catchError((error) {
929:             log(error.toString());
930:           });
931:     } else {
932:       await fireStore
933:           .collection(CollectionName.vendorProducts)
934:           .where("vendorID", isEqualTo: vendorId)
935:           .where("takeawayOption", isEqualTo: false)
936:           .where('publish', isEqualTo: true)
937:           .orderBy("createdAt", descending: false)
938:           .get()
939:           .then((value) {
940:             for (var element in value.docs) {
941:               ProductModel productModel = ProductModel.fromJson(element.data());
942:               list.add(productModel);

933:           .collection(CollectionName.vendorProducts)
934:           .where("vendorID", isEqualTo: vendorId)
935:           .where("takeawayOption", isEqualTo: false)
936:           .where('publish', isEqualTo: true)
937:           .orderBy("createdAt", descending: false)
938:           .get()
939:           .then((value) {
940:             for (var element in value.docs) {
941:               ProductModel productModel = ProductModel.fromJson(element.data());
942:               list.add(productModel);
943:             }
944:           })
945:           .catchError((error) {
946:             log(error.toString());
947:           });
948:     }
949: 
950:     return list;
951:   }
952: 
953:   static Future<DeliveryCharge?> getDeliveryCharge() async {
954:     DeliveryCharge? deliveryCharge;
955:     try {
956:       await fireStore.collection(CollectionName.settings).doc("DeliveryCharge").get().then((value) {
957:         if (value.exists) {
958:           deliveryCharge = DeliveryCharge.fromJson(value.data()!);
959:         }

950:     return list;
951:   }
952: 
953:   static Future<DeliveryCharge?> getDeliveryCharge() async {
954:     DeliveryCharge? deliveryCharge;
955:     try {
956:       await fireStore.collection(CollectionName.settings).doc("DeliveryCharge").get().then((value) {
957:         if (value.exists) {
958:           deliveryCharge = DeliveryCharge.fromJson(value.data()!);
959:         }
960:       });
961:     } catch (e, s) {
962:       log('FireStoreUtils.firebaseCreateNewUser $e $s');
963:       return null;
964:     }
965:     return deliveryCharge;
966:   }
967: 
968:   static Future<List<CouponModel>> getAllVendorPublicCoupons(String vendorId) async {
969:     List<CouponModel> coupon = [];
970: 
971:     await fireStore
972:         .collection(CollectionName.coupons)
973:         .where("vendorID", isEqualTo: vendorId)
974:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
975:         .where("isEnabled", isEqualTo: true)
976:         .where("isPublic", isEqualTo: true)

972:         .collection(CollectionName.coupons)
973:         .where("vendorID", isEqualTo: vendorId)
974:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
975:         .where("isEnabled", isEqualTo: true)
976:         .where("isPublic", isEqualTo: true)
977:         .get()
978:         .then((value) {
979:           for (var element in value.docs) {
980:             CouponModel taxModel = CouponModel.fromJson(element.data());
981:             coupon.add(taxModel);
982:           }
983:         })
984:         .catchError((error) {
985:           log(error.toString());
986:         });
987:     print("coupon :::::::::::::::::${coupon.length}");
988:     return coupon;
989:   }
990: 
991:   static Future<List<CouponModel>> getAllVendorCoupons(String vendorId) async {
992:     List<CouponModel> coupon = [];
993: 
994:     await fireStore
995:         .collection(CollectionName.coupons)
996:         .where("vendorID", isEqualTo: vendorId)
997:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
998:         .where("isEnabled", isEqualTo: true)

994:     await fireStore
995:         .collection(CollectionName.coupons)
996:         .where("vendorID", isEqualTo: vendorId)
997:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
998:         .where("isEnabled", isEqualTo: true)
999:         .get()
1000:         .then((value) {
1001:           for (var element in value.docs) {
1002:             CouponModel taxModel = CouponModel.fromJson(element.data());
1003:             coupon.add(taxModel);
1004:           }
1005:         })
1006:         .catchError((error) {
1007:           log(error.toString());
1008:         });
1009:     print("coupon :::::::::::::::::${coupon.length}");
1010:     return coupon;
1011:   }
1012: 
1013:   static Future<List<CashbackModel>> getAllCashbak() async {
1014:     List<CashbackModel> cashbackList = [];
1015:     await fireStore
1016:         .collection(CollectionName.cashback)
1017:         .get()
1018:         .then((value) {
1019:           cashbackList =
1020:               value.docs.map((doc) {

1013:   static Future<List<CashbackModel>> getAllCashbak() async {
1014:     List<CashbackModel> cashbackList = [];
1015:     await fireStore
1016:         .collection(CollectionName.cashback)
1017:         .get()
1018:         .then((value) {
1019:           cashbackList =
1020:               value.docs.map((doc) {
1021:                 return CashbackModel.fromJson(doc.data());
1022:               }).toList();
1023:         })
1024:         .catchError((error) {
1025:           log(error.toString());
1026:         });
1027: 
1028:     return cashbackList;
1029:   }
1030: 
1031:   static Future<List<CashbackRedeemModel>> getRedeemedCashbacks(String cashbackId) async {
1032:     List<CashbackRedeemModel> redeemedDocs = [];
1033: 
1034:     try {
1035:       await fireStore.collection(CollectionName.cashbackRedeem).where('userId', isEqualTo: FireStoreUtils.getCurrentUid()).where('cashbackId', isEqualTo: cashbackId).get().then((value) {
1036:         redeemedDocs =
1037:             value.docs.map((doc) {
1038:               return CashbackRedeemModel.fromJson(doc.data());
1039:             }).toList();

1030: 
1031:   static Future<List<CashbackRedeemModel>> getRedeemedCashbacks(String cashbackId) async {
1032:     List<CashbackRedeemModel> redeemedDocs = [];
1033: 
1034:     try {
1035:       await fireStore.collection(CollectionName.cashbackRedeem).where('userId', isEqualTo: FireStoreUtils.getCurrentUid()).where('cashbackId', isEqualTo: cashbackId).get().then((value) {
1036:         redeemedDocs =
1037:             value.docs.map((doc) {
1038:               return CashbackRedeemModel.fromJson(doc.data());
1039:             }).toList();
1040:       });
1041:     } catch (error, stackTrace) {
1042:       log('Error fetching redeemed cashback data: $error', stackTrace: stackTrace);
1043:     }
1044: 
1045:     return redeemedDocs;
1046:   }
1047: 
1048:   static Future<bool?> setCashbackRedeemModel(CashbackRedeemModel cashbackRedeemModel) async {
1049:     bool isAdded = false;
1050:     await fireStore
1051:         .collection(CollectionName.cashbackRedeem)
1052:         .doc(cashbackRedeemModel.id)
1053:         .set(cashbackRedeemModel.toJson())
1054:         .then((value) {
1055:           isAdded = true;
1056:         })

1045:     return redeemedDocs;
1046:   }
1047: 
1048:   static Future<bool?> setCashbackRedeemModel(CashbackRedeemModel cashbackRedeemModel) async {
1049:     bool isAdded = false;
1050:     await fireStore
1051:         .collection(CollectionName.cashbackRedeem)
1052:         .doc(cashbackRedeemModel.id)
1053:         .set(cashbackRedeemModel.toJson())
1054:         .then((value) {
1055:           isAdded = true;
1056:         })
1057:         .catchError((error) {
1058:           log("Failed to update user: $error");
1059:           isAdded = false;
1060:         });
1061:     return isAdded;
1062:   }
1063: 
1064:   static Future<bool?> setOrder(OrderModel orderModel) async {
1065:     bool isAdded = false;
1066:     await fireStore
1067:         .collection(CollectionName.vendorOrders)
1068:         .doc(orderModel.id)
1069:         .set(orderModel.toJson())
1070:         .then((value) {
1071:           isAdded = true;

1061:     return isAdded;
1062:   }
1063: 
1064:   static Future<bool?> setOrder(OrderModel orderModel) async {
1065:     bool isAdded = false;
1066:     await fireStore
1067:         .collection(CollectionName.vendorOrders)
1068:         .doc(orderModel.id)
1069:         .set(orderModel.toJson())
1070:         .then((value) {
1071:           isAdded = true;
1072:         })
1073:         .catchError((error) {
1074:           log("Failed to update user: $error");
1075:           isAdded = false;
1076:         });
1077:     return isAdded;
1078:   }
1079: 
1080:   static Future<List<CouponModel>> getOfferByVendorId(String vendorId) async {
1081:     List<CouponModel> couponList = [];
1082:     await fireStore
1083:         .collection(CollectionName.coupons)
1084:         .where("vendorID", isEqualTo: vendorId)
1085:         .where("isEnabled", isEqualTo: true)
1086:         .where("isPublic", isEqualTo: true)
1087:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())

1083:         .collection(CollectionName.coupons)
1084:         .where("vendorID", isEqualTo: vendorId)
1085:         .where("isEnabled", isEqualTo: true)
1086:         .where("isPublic", isEqualTo: true)
1087:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1088:         .get()
1089:         .then((value) {
1090:           for (var element in value.docs) {
1091:             CouponModel favouriteModel = CouponModel.fromJson(element.data());
1092:             couponList.add(favouriteModel);
1093:           }
1094:         });
1095:     return couponList;
1096:   }
1097: 
1098:   static Future<List<AttributesModel>?> getAttributes() async {
1099:     List<AttributesModel> attributeList = [];
1100:     await fireStore.collection(CollectionName.vendorAttributes).get().then((value) {
1101:       for (var element in value.docs) {
1102:         AttributesModel favouriteModel = AttributesModel.fromJson(element.data());
1103:         attributeList.add(favouriteModel);
1104:       }
1105:     });
1106:     return attributeList;
1107:   }
1108: 
1109:   static Future<VendorCategoryModel?> getVendorCategoryById(String categoryId) async {

1094:         });
1095:     return couponList;
1096:   }
1097: 
1098:   static Future<List<AttributesModel>?> getAttributes() async {
1099:     List<AttributesModel> attributeList = [];
1100:     await fireStore.collection(CollectionName.vendorAttributes).get().then((value) {
1101:       for (var element in value.docs) {
1102:         AttributesModel favouriteModel = AttributesModel.fromJson(element.data());
1103:         attributeList.add(favouriteModel);
1104:       }
1105:     });
1106:     return attributeList;
1107:   }
1108: 
1109:   static Future<VendorCategoryModel?> getVendorCategoryById(String categoryId) async {
1110:     VendorCategoryModel? vendorCategoryModel;
1111:     try {
1112:       await fireStore.collection(CollectionName.vendorCategories).doc(categoryId).get().then((value) {
1113:         if (value.exists) {
1114:           vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
1115:         }
1116:       });
1117:     } catch (e, s) {
1118:       log('FireStoreUtils.firebaseCreateNewUser $e $s');
1119:       return null;
1120:     }

1106:     return attributeList;
1107:   }
1108: 
1109:   static Future<VendorCategoryModel?> getVendorCategoryById(String categoryId) async {
1110:     VendorCategoryModel? vendorCategoryModel;
1111:     try {
1112:       await fireStore.collection(CollectionName.vendorCategories).doc(categoryId).get().then((value) {
1113:         if (value.exists) {
1114:           vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
1115:         }
1116:       });
1117:     } catch (e, s) {
1118:       log('FireStoreUtils.firebaseCreateNewUser $e $s');
1119:       return null;
1120:     }
1121:     return vendorCategoryModel;
1122:   }
1123: 
1124:   static Future<List<RatingModel>> getVendorReviews(String vendorId) async {
1125:     List<RatingModel> ratingList = [];
1126:     await fireStore.collection(CollectionName.itemsReview).where('VendorId', isEqualTo: vendorId).get().then((value) {
1127:       for (var element in value.docs) {
1128:         RatingModel giftCardsOrderModel = RatingModel.fromJson(element.data());
1129:         ratingList.add(giftCardsOrderModel);
1130:       }
1131:     });
1132:     return ratingList;

1120:     }
1121:     return vendorCategoryModel;
1122:   }
1123: 
1124:   static Future<List<RatingModel>> getVendorReviews(String vendorId) async {
1125:     List<RatingModel> ratingList = [];
1126:     await fireStore.collection(CollectionName.itemsReview).where('VendorId', isEqualTo: vendorId).get().then((value) {
1127:       for (var element in value.docs) {
1128:         RatingModel giftCardsOrderModel = RatingModel.fromJson(element.data());
1129:         ratingList.add(giftCardsOrderModel);
1130:       }
1131:     });
1132:     return ratingList;
1133:   }
1134: 
1135:   static Future getPaymentSettingsData() async {
1136:     await fireStore.collection(CollectionName.settings).doc("payFastSettings").get().then((value) async {
1137:       if (value.exists) {
1138:         PayFastModel payFastModel = PayFastModel.fromJson(value.data()!);
1139:         await Preferences.setString(Preferences.payFastSettings, jsonEncode(payFastModel.toJson()));
1140:       }
1141:     });
1142:     await fireStore.collection(CollectionName.settings).doc("MercadoPago").get().then((value) async {
1143:       if (value.exists) {
1144:         MercadoPagoModel mercadoPagoModel = MercadoPagoModel.fromJson(value.data()!);
1145:         await Preferences.setString(Preferences.mercadoPago, jsonEncode(mercadoPagoModel.toJson()));
1146:       }

1130:       }
1131:     });
1132:     return ratingList;
1133:   }
1134: 
1135:   static Future getPaymentSettingsData() async {
1136:     await fireStore.collection(CollectionName.settings).doc("payFastSettings").get().then((value) async {
1137:       if (value.exists) {
1138:         PayFastModel payFastModel = PayFastModel.fromJson(value.data()!);
1139:         await Preferences.setString(Preferences.payFastSettings, jsonEncode(payFastModel.toJson()));
1140:       }
1141:     });
1142:     await fireStore.collection(CollectionName.settings).doc("MercadoPago").get().then((value) async {
1143:       if (value.exists) {
1144:         MercadoPagoModel mercadoPagoModel = MercadoPagoModel.fromJson(value.data()!);
1145:         await Preferences.setString(Preferences.mercadoPago, jsonEncode(mercadoPagoModel.toJson()));
1146:       }
1147:     });
1148:     await fireStore.collection(CollectionName.settings).doc("paypalSettings").get().then((value) async {
1149:       if (value.exists) {
1150:         PayPalModel payPalModel = PayPalModel.fromJson(value.data()!);
1151:         await Preferences.setString(Preferences.paypalSettings, jsonEncode(payPalModel.toJson()));
1152:       }
1153:     });
1154:     await fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((value) async {
1155:       if (value.exists) {
1156:         StripeModel stripeModel = StripeModel.fromJson(value.data()!);

1131:     });
1132:     return ratingList;
1133:   }
1134: 
1135:   static Future getPaymentSettingsData() async {
1136:     await fireStore.collection(CollectionName.settings).doc("payFastSettings").get().then((value) async {
1137:       if (value.exists) {
1138:         PayFastModel payFastModel = PayFastModel.fromJson(value.data()!);
1139:         await Preferences.setString(Preferences.payFastSettings, jsonEncode(payFastModel.toJson()));
1140:       }
1141:     });
1142:     await fireStore.collection(CollectionName.settings).doc("MercadoPago").get().then((value) async {
1143:       if (value.exists) {
1144:         MercadoPagoModel mercadoPagoModel = MercadoPagoModel.fromJson(value.data()!);
1145:         await Preferences.setString(Preferences.mercadoPago, jsonEncode(mercadoPagoModel.toJson()));
1146:       }
1147:     });
1148:     await fireStore.collection(CollectionName.settings).doc("paypalSettings").get().then((value) async {
1149:       if (value.exists) {
1150:         PayPalModel payPalModel = PayPalModel.fromJson(value.data()!);
1151:         await Preferences.setString(Preferences.paypalSettings, jsonEncode(payPalModel.toJson()));
1152:       }
1153:     });
1154:     await fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((value) async {
1155:       if (value.exists) {
1156:         StripeModel stripeModel = StripeModel.fromJson(value.data()!);
1157:         await Preferences.setString(Preferences.stripeSettings, jsonEncode(stripeModel.toJson()));

1136:     await fireStore.collection(CollectionName.settings).doc("payFastSettings").get().then((value) async {
1137:       if (value.exists) {
1138:         PayFastModel payFastModel = PayFastModel.fromJson(value.data()!);
1139:         await Preferences.setString(Preferences.payFastSettings, jsonEncode(payFastModel.toJson()));
1140:       }
1141:     });
1142:     await fireStore.collection(CollectionName.settings).doc("MercadoPago").get().then((value) async {
1143:       if (value.exists) {
1144:         MercadoPagoModel mercadoPagoModel = MercadoPagoModel.fromJson(value.data()!);
1145:         await Preferences.setString(Preferences.mercadoPago, jsonEncode(mercadoPagoModel.toJson()));
1146:       }
1147:     });
1148:     await fireStore.collection(CollectionName.settings).doc("paypalSettings").get().then((value) async {
1149:       if (value.exists) {
1150:         PayPalModel payPalModel = PayPalModel.fromJson(value.data()!);
1151:         await Preferences.setString(Preferences.paypalSettings, jsonEncode(payPalModel.toJson()));
1152:       }
1153:     });
1154:     await fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((value) async {
1155:       if (value.exists) {
1156:         StripeModel stripeModel = StripeModel.fromJson(value.data()!);
1157:         await Preferences.setString(Preferences.stripeSettings, jsonEncode(stripeModel.toJson()));
1158:       }
1159:     });
1160:     await fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((value) async {
1161:       if (value.exists) {
1162:         FlutterWaveModel flutterWaveModel = FlutterWaveModel.fromJson(value.data()!);

1137:       if (value.exists) {
1138:         PayFastModel payFastModel = PayFastModel.fromJson(value.data()!);
1139:         await Preferences.setString(Preferences.payFastSettings, jsonEncode(payFastModel.toJson()));
1140:       }
1141:     });
1142:     await fireStore.collection(CollectionName.settings).doc("MercadoPago").get().then((value) async {
1143:       if (value.exists) {
1144:         MercadoPagoModel mercadoPagoModel = MercadoPagoModel.fromJson(value.data()!);
1145:         await Preferences.setString(Preferences.mercadoPago, jsonEncode(mercadoPagoModel.toJson()));
1146:       }
1147:     });
1148:     await fireStore.collection(CollectionName.settings).doc("paypalSettings").get().then((value) async {
1149:       if (value.exists) {
1150:         PayPalModel payPalModel = PayPalModel.fromJson(value.data()!);
1151:         await Preferences.setString(Preferences.paypalSettings, jsonEncode(payPalModel.toJson()));
1152:       }
1153:     });
1154:     await fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((value) async {
1155:       if (value.exists) {
1156:         StripeModel stripeModel = StripeModel.fromJson(value.data()!);
1157:         await Preferences.setString(Preferences.stripeSettings, jsonEncode(stripeModel.toJson()));
1158:       }
1159:     });
1160:     await fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((value) async {
1161:       if (value.exists) {
1162:         FlutterWaveModel flutterWaveModel = FlutterWaveModel.fromJson(value.data()!);
1163:         await Preferences.setString(Preferences.flutterWave, jsonEncode(flutterWaveModel.toJson()));

1142:     await fireStore.collection(CollectionName.settings).doc("MercadoPago").get().then((value) async {
1143:       if (value.exists) {
1144:         MercadoPagoModel mercadoPagoModel = MercadoPagoModel.fromJson(value.data()!);
1145:         await Preferences.setString(Preferences.mercadoPago, jsonEncode(mercadoPagoModel.toJson()));
1146:       }
1147:     });
1148:     await fireStore.collection(CollectionName.settings).doc("paypalSettings").get().then((value) async {
1149:       if (value.exists) {
1150:         PayPalModel payPalModel = PayPalModel.fromJson(value.data()!);
1151:         await Preferences.setString(Preferences.paypalSettings, jsonEncode(payPalModel.toJson()));
1152:       }
1153:     });
1154:     await fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((value) async {
1155:       if (value.exists) {
1156:         StripeModel stripeModel = StripeModel.fromJson(value.data()!);
1157:         await Preferences.setString(Preferences.stripeSettings, jsonEncode(stripeModel.toJson()));
1158:       }
1159:     });
1160:     await fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((value) async {
1161:       if (value.exists) {
1162:         FlutterWaveModel flutterWaveModel = FlutterWaveModel.fromJson(value.data()!);
1163:         await Preferences.setString(Preferences.flutterWave, jsonEncode(flutterWaveModel.toJson()));
1164:       }
1165:     });
1166:     await fireStore.collection(CollectionName.settings).doc("payStack").get().then((value) async {
1167:       if (value.exists) {
1168:         PayStackModel payStackModel = PayStackModel.fromJson(value.data()!);

1143:       if (value.exists) {
1144:         MercadoPagoModel mercadoPagoModel = MercadoPagoModel.fromJson(value.data()!);
1145:         await Preferences.setString(Preferences.mercadoPago, jsonEncode(mercadoPagoModel.toJson()));
1146:       }
1147:     });
1148:     await fireStore.collection(CollectionName.settings).doc("paypalSettings").get().then((value) async {
1149:       if (value.exists) {
1150:         PayPalModel payPalModel = PayPalModel.fromJson(value.data()!);
1151:         await Preferences.setString(Preferences.paypalSettings, jsonEncode(payPalModel.toJson()));
1152:       }
1153:     });
1154:     await fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((value) async {
1155:       if (value.exists) {
1156:         StripeModel stripeModel = StripeModel.fromJson(value.data()!);
1157:         await Preferences.setString(Preferences.stripeSettings, jsonEncode(stripeModel.toJson()));
1158:       }
1159:     });
1160:     await fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((value) async {
1161:       if (value.exists) {
1162:         FlutterWaveModel flutterWaveModel = FlutterWaveModel.fromJson(value.data()!);
1163:         await Preferences.setString(Preferences.flutterWave, jsonEncode(flutterWaveModel.toJson()));
1164:       }
1165:     });
1166:     await fireStore.collection(CollectionName.settings).doc("payStack").get().then((value) async {
1167:       if (value.exists) {
1168:         PayStackModel payStackModel = PayStackModel.fromJson(value.data()!);
1169:         await Preferences.setString(Preferences.payStack, jsonEncode(payStackModel.toJson()));

1148:     await fireStore.collection(CollectionName.settings).doc("paypalSettings").get().then((value) async {
1149:       if (value.exists) {
1150:         PayPalModel payPalModel = PayPalModel.fromJson(value.data()!);
1151:         await Preferences.setString(Preferences.paypalSettings, jsonEncode(payPalModel.toJson()));
1152:       }
1153:     });
1154:     await fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((value) async {
1155:       if (value.exists) {
1156:         StripeModel stripeModel = StripeModel.fromJson(value.data()!);
1157:         await Preferences.setString(Preferences.stripeSettings, jsonEncode(stripeModel.toJson()));
1158:       }
1159:     });
1160:     await fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((value) async {
1161:       if (value.exists) {
1162:         FlutterWaveModel flutterWaveModel = FlutterWaveModel.fromJson(value.data()!);
1163:         await Preferences.setString(Preferences.flutterWave, jsonEncode(flutterWaveModel.toJson()));
1164:       }
1165:     });
1166:     await fireStore.collection(CollectionName.settings).doc("payStack").get().then((value) async {
1167:       if (value.exists) {
1168:         PayStackModel payStackModel = PayStackModel.fromJson(value.data()!);
1169:         await Preferences.setString(Preferences.payStack, jsonEncode(payStackModel.toJson()));
1170:       }
1171:     });
1172:     await fireStore.collection(CollectionName.settings).doc("PaytmSettings").get().then((value) async {
1173:       if (value.exists) {
1174:         PaytmModel paytmModel = PaytmModel.fromJson(value.data()!);

1149:       if (value.exists) {
1150:         PayPalModel payPalModel = PayPalModel.fromJson(value.data()!);
1151:         await Preferences.setString(Preferences.paypalSettings, jsonEncode(payPalModel.toJson()));
1152:       }
1153:     });
1154:     await fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((value) async {
1155:       if (value.exists) {
1156:         StripeModel stripeModel = StripeModel.fromJson(value.data()!);
1157:         await Preferences.setString(Preferences.stripeSettings, jsonEncode(stripeModel.toJson()));
1158:       }
1159:     });
1160:     await fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((value) async {
1161:       if (value.exists) {
1162:         FlutterWaveModel flutterWaveModel = FlutterWaveModel.fromJson(value.data()!);
1163:         await Preferences.setString(Preferences.flutterWave, jsonEncode(flutterWaveModel.toJson()));
1164:       }
1165:     });
1166:     await fireStore.collection(CollectionName.settings).doc("payStack").get().then((value) async {
1167:       if (value.exists) {
1168:         PayStackModel payStackModel = PayStackModel.fromJson(value.data()!);
1169:         await Preferences.setString(Preferences.payStack, jsonEncode(payStackModel.toJson()));
1170:       }
1171:     });
1172:     await fireStore.collection(CollectionName.settings).doc("PaytmSettings").get().then((value) async {
1173:       if (value.exists) {
1174:         PaytmModel paytmModel = PaytmModel.fromJson(value.data()!);
1175:         await Preferences.setString(Preferences.paytmSettings, jsonEncode(paytmModel.toJson()));

1154:     await fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((value) async {
1155:       if (value.exists) {
1156:         StripeModel stripeModel = StripeModel.fromJson(value.data()!);
1157:         await Preferences.setString(Preferences.stripeSettings, jsonEncode(stripeModel.toJson()));
1158:       }
1159:     });
1160:     await fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((value) async {
1161:       if (value.exists) {
1162:         FlutterWaveModel flutterWaveModel = FlutterWaveModel.fromJson(value.data()!);
1163:         await Preferences.setString(Preferences.flutterWave, jsonEncode(flutterWaveModel.toJson()));
1164:       }
1165:     });
1166:     await fireStore.collection(CollectionName.settings).doc("payStack").get().then((value) async {
1167:       if (value.exists) {
1168:         PayStackModel payStackModel = PayStackModel.fromJson(value.data()!);
1169:         await Preferences.setString(Preferences.payStack, jsonEncode(payStackModel.toJson()));
1170:       }
1171:     });
1172:     await fireStore.collection(CollectionName.settings).doc("PaytmSettings").get().then((value) async {
1173:       if (value.exists) {
1174:         PaytmModel paytmModel = PaytmModel.fromJson(value.data()!);
1175:         await Preferences.setString(Preferences.paytmSettings, jsonEncode(paytmModel.toJson()));
1176:       }
1177:     });
1178:     await fireStore.collection(CollectionName.settings).doc("walletSettings").get().then((value) async {
1179:       if (value.exists) {
1180:         WalletSettingModel walletSettingModel = WalletSettingModel.fromJson(value.data()!);

1155:       if (value.exists) {
1156:         StripeModel stripeModel = StripeModel.fromJson(value.data()!);
1157:         await Preferences.setString(Preferences.stripeSettings, jsonEncode(stripeModel.toJson()));
1158:       }
1159:     });
1160:     await fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((value) async {
1161:       if (value.exists) {
1162:         FlutterWaveModel flutterWaveModel = FlutterWaveModel.fromJson(value.data()!);
1163:         await Preferences.setString(Preferences.flutterWave, jsonEncode(flutterWaveModel.toJson()));
1164:       }
1165:     });
1166:     await fireStore.collection(CollectionName.settings).doc("payStack").get().then((value) async {
1167:       if (value.exists) {
1168:         PayStackModel payStackModel = PayStackModel.fromJson(value.data()!);
1169:         await Preferences.setString(Preferences.payStack, jsonEncode(payStackModel.toJson()));
1170:       }
1171:     });
1172:     await fireStore.collection(CollectionName.settings).doc("PaytmSettings").get().then((value) async {
1173:       if (value.exists) {
1174:         PaytmModel paytmModel = PaytmModel.fromJson(value.data()!);
1175:         await Preferences.setString(Preferences.paytmSettings, jsonEncode(paytmModel.toJson()));
1176:       }
1177:     });
1178:     await fireStore.collection(CollectionName.settings).doc("walletSettings").get().then((value) async {
1179:       if (value.exists) {
1180:         WalletSettingModel walletSettingModel = WalletSettingModel.fromJson(value.data()!);
1181:         await Preferences.setString(Preferences.walletSettings, jsonEncode(walletSettingModel.toJson()));

1160:     await fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((value) async {
1161:       if (value.exists) {
1162:         FlutterWaveModel flutterWaveModel = FlutterWaveModel.fromJson(value.data()!);
1163:         await Preferences.setString(Preferences.flutterWave, jsonEncode(flutterWaveModel.toJson()));
1164:       }
1165:     });
1166:     await fireStore.collection(CollectionName.settings).doc("payStack").get().then((value) async {
1167:       if (value.exists) {
1168:         PayStackModel payStackModel = PayStackModel.fromJson(value.data()!);
1169:         await Preferences.setString(Preferences.payStack, jsonEncode(payStackModel.toJson()));
1170:       }
1171:     });
1172:     await fireStore.collection(CollectionName.settings).doc("PaytmSettings").get().then((value) async {
1173:       if (value.exists) {
1174:         PaytmModel paytmModel = PaytmModel.fromJson(value.data()!);
1175:         await Preferences.setString(Preferences.paytmSettings, jsonEncode(paytmModel.toJson()));
1176:       }
1177:     });
1178:     await fireStore.collection(CollectionName.settings).doc("walletSettings").get().then((value) async {
1179:       if (value.exists) {
1180:         WalletSettingModel walletSettingModel = WalletSettingModel.fromJson(value.data()!);
1181:         await Preferences.setString(Preferences.walletSettings, jsonEncode(walletSettingModel.toJson()));
1182:       }
1183:     });
1184:     await fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((value) async {
1185:       if (value.exists) {
1186:         RazorPayModel razorPayModel = RazorPayModel.fromJson(value.data()!);

1161:       if (value.exists) {
1162:         FlutterWaveModel flutterWaveModel = FlutterWaveModel.fromJson(value.data()!);
1163:         await Preferences.setString(Preferences.flutterWave, jsonEncode(flutterWaveModel.toJson()));
1164:       }
1165:     });
1166:     await fireStore.collection(CollectionName.settings).doc("payStack").get().then((value) async {
1167:       if (value.exists) {
1168:         PayStackModel payStackModel = PayStackModel.fromJson(value.data()!);
1169:         await Preferences.setString(Preferences.payStack, jsonEncode(payStackModel.toJson()));
1170:       }
1171:     });
1172:     await fireStore.collection(CollectionName.settings).doc("PaytmSettings").get().then((value) async {
1173:       if (value.exists) {
1174:         PaytmModel paytmModel = PaytmModel.fromJson(value.data()!);
1175:         await Preferences.setString(Preferences.paytmSettings, jsonEncode(paytmModel.toJson()));
1176:       }
1177:     });
1178:     await fireStore.collection(CollectionName.settings).doc("walletSettings").get().then((value) async {
1179:       if (value.exists) {
1180:         WalletSettingModel walletSettingModel = WalletSettingModel.fromJson(value.data()!);
1181:         await Preferences.setString(Preferences.walletSettings, jsonEncode(walletSettingModel.toJson()));
1182:       }
1183:     });
1184:     await fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((value) async {
1185:       if (value.exists) {
1186:         RazorPayModel razorPayModel = RazorPayModel.fromJson(value.data()!);
1187:         await Preferences.setString(Preferences.razorpaySettings, jsonEncode(razorPayModel.toJson()));

1166:     await fireStore.collection(CollectionName.settings).doc("payStack").get().then((value) async {
1167:       if (value.exists) {
1168:         PayStackModel payStackModel = PayStackModel.fromJson(value.data()!);
1169:         await Preferences.setString(Preferences.payStack, jsonEncode(payStackModel.toJson()));
1170:       }
1171:     });
1172:     await fireStore.collection(CollectionName.settings).doc("PaytmSettings").get().then((value) async {
1173:       if (value.exists) {
1174:         PaytmModel paytmModel = PaytmModel.fromJson(value.data()!);
1175:         await Preferences.setString(Preferences.paytmSettings, jsonEncode(paytmModel.toJson()));
1176:       }
1177:     });
1178:     await fireStore.collection(CollectionName.settings).doc("walletSettings").get().then((value) async {
1179:       if (value.exists) {
1180:         WalletSettingModel walletSettingModel = WalletSettingModel.fromJson(value.data()!);
1181:         await Preferences.setString(Preferences.walletSettings, jsonEncode(walletSettingModel.toJson()));
1182:       }
1183:     });
1184:     await fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((value) async {
1185:       if (value.exists) {
1186:         RazorPayModel razorPayModel = RazorPayModel.fromJson(value.data()!);
1187:         await Preferences.setString(Preferences.razorpaySettings, jsonEncode(razorPayModel.toJson()));
1188:       }
1189:     });
1190:     await fireStore.collection(CollectionName.settings).doc("CODSettings").get().then((value) async {
1191:       if (value.exists) {
1192:         CodSettingModel codSettingModel = CodSettingModel.fromJson(value.data()!);

1167:       if (value.exists) {
1168:         PayStackModel payStackModel = PayStackModel.fromJson(value.data()!);
1169:         await Preferences.setString(Preferences.payStack, jsonEncode(payStackModel.toJson()));
1170:       }
1171:     });
1172:     await fireStore.collection(CollectionName.settings).doc("PaytmSettings").get().then((value) async {
1173:       if (value.exists) {
1174:         PaytmModel paytmModel = PaytmModel.fromJson(value.data()!);
1175:         await Preferences.setString(Preferences.paytmSettings, jsonEncode(paytmModel.toJson()));
1176:       }
1177:     });
1178:     await fireStore.collection(CollectionName.settings).doc("walletSettings").get().then((value) async {
1179:       if (value.exists) {
1180:         WalletSettingModel walletSettingModel = WalletSettingModel.fromJson(value.data()!);
1181:         await Preferences.setString(Preferences.walletSettings, jsonEncode(walletSettingModel.toJson()));
1182:       }
1183:     });
1184:     await fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((value) async {
1185:       if (value.exists) {
1186:         RazorPayModel razorPayModel = RazorPayModel.fromJson(value.data()!);
1187:         await Preferences.setString(Preferences.razorpaySettings, jsonEncode(razorPayModel.toJson()));
1188:       }
1189:     });
1190:     await fireStore.collection(CollectionName.settings).doc("CODSettings").get().then((value) async {
1191:       if (value.exists) {
1192:         CodSettingModel codSettingModel = CodSettingModel.fromJson(value.data()!);
1193:         await Preferences.setString(Preferences.codSettings, jsonEncode(codSettingModel.toJson()));

1172:     await fireStore.collection(CollectionName.settings).doc("PaytmSettings").get().then((value) async {
1173:       if (value.exists) {
1174:         PaytmModel paytmModel = PaytmModel.fromJson(value.data()!);
1175:         await Preferences.setString(Preferences.paytmSettings, jsonEncode(paytmModel.toJson()));
1176:       }
1177:     });
1178:     await fireStore.collection(CollectionName.settings).doc("walletSettings").get().then((value) async {
1179:       if (value.exists) {
1180:         WalletSettingModel walletSettingModel = WalletSettingModel.fromJson(value.data()!);
1181:         await Preferences.setString(Preferences.walletSettings, jsonEncode(walletSettingModel.toJson()));
1182:       }
1183:     });
1184:     await fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((value) async {
1185:       if (value.exists) {
1186:         RazorPayModel razorPayModel = RazorPayModel.fromJson(value.data()!);
1187:         await Preferences.setString(Preferences.razorpaySettings, jsonEncode(razorPayModel.toJson()));
1188:       }
1189:     });
1190:     await fireStore.collection(CollectionName.settings).doc("CODSettings").get().then((value) async {
1191:       if (value.exists) {
1192:         CodSettingModel codSettingModel = CodSettingModel.fromJson(value.data()!);
1193:         await Preferences.setString(Preferences.codSettings, jsonEncode(codSettingModel.toJson()));
1194:       }
1195:     });
1196: 
1197:     await fireStore.collection(CollectionName.settings).doc("midtrans_settings").get().then((value) async {
1198:       if (value.exists) {

1173:       if (value.exists) {
1174:         PaytmModel paytmModel = PaytmModel.fromJson(value.data()!);
1175:         await Preferences.setString(Preferences.paytmSettings, jsonEncode(paytmModel.toJson()));
1176:       }
1177:     });
1178:     await fireStore.collection(CollectionName.settings).doc("walletSettings").get().then((value) async {
1179:       if (value.exists) {
1180:         WalletSettingModel walletSettingModel = WalletSettingModel.fromJson(value.data()!);
1181:         await Preferences.setString(Preferences.walletSettings, jsonEncode(walletSettingModel.toJson()));
1182:       }
1183:     });
1184:     await fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((value) async {
1185:       if (value.exists) {
1186:         RazorPayModel razorPayModel = RazorPayModel.fromJson(value.data()!);
1187:         await Preferences.setString(Preferences.razorpaySettings, jsonEncode(razorPayModel.toJson()));
1188:       }
1189:     });
1190:     await fireStore.collection(CollectionName.settings).doc("CODSettings").get().then((value) async {
1191:       if (value.exists) {
1192:         CodSettingModel codSettingModel = CodSettingModel.fromJson(value.data()!);
1193:         await Preferences.setString(Preferences.codSettings, jsonEncode(codSettingModel.toJson()));
1194:       }
1195:     });
1196: 
1197:     await fireStore.collection(CollectionName.settings).doc("midtrans_settings").get().then((value) async {
1198:       if (value.exists) {
1199:         MidTrans midTrans = MidTrans.fromJson(value.data()!);

1178:     await fireStore.collection(CollectionName.settings).doc("walletSettings").get().then((value) async {
1179:       if (value.exists) {
1180:         WalletSettingModel walletSettingModel = WalletSettingModel.fromJson(value.data()!);
1181:         await Preferences.setString(Preferences.walletSettings, jsonEncode(walletSettingModel.toJson()));
1182:       }
1183:     });
1184:     await fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((value) async {
1185:       if (value.exists) {
1186:         RazorPayModel razorPayModel = RazorPayModel.fromJson(value.data()!);
1187:         await Preferences.setString(Preferences.razorpaySettings, jsonEncode(razorPayModel.toJson()));
1188:       }
1189:     });
1190:     await fireStore.collection(CollectionName.settings).doc("CODSettings").get().then((value) async {
1191:       if (value.exists) {
1192:         CodSettingModel codSettingModel = CodSettingModel.fromJson(value.data()!);
1193:         await Preferences.setString(Preferences.codSettings, jsonEncode(codSettingModel.toJson()));
1194:       }
1195:     });
1196: 
1197:     await fireStore.collection(CollectionName.settings).doc("midtrans_settings").get().then((value) async {
1198:       if (value.exists) {
1199:         MidTrans midTrans = MidTrans.fromJson(value.data()!);
1200:         await Preferences.setString(Preferences.midTransSettings, jsonEncode(midTrans.toJson()));
1201:       }
1202:     });
1203: 
1204:     await fireStore.collection(CollectionName.settings).doc("orange_money_settings").get().then((value) async {

1179:       if (value.exists) {
1180:         WalletSettingModel walletSettingModel = WalletSettingModel.fromJson(value.data()!);
1181:         await Preferences.setString(Preferences.walletSettings, jsonEncode(walletSettingModel.toJson()));
1182:       }
1183:     });
1184:     await fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((value) async {
1185:       if (value.exists) {
1186:         RazorPayModel razorPayModel = RazorPayModel.fromJson(value.data()!);
1187:         await Preferences.setString(Preferences.razorpaySettings, jsonEncode(razorPayModel.toJson()));
1188:       }
1189:     });
1190:     await fireStore.collection(CollectionName.settings).doc("CODSettings").get().then((value) async {
1191:       if (value.exists) {
1192:         CodSettingModel codSettingModel = CodSettingModel.fromJson(value.data()!);
1193:         await Preferences.setString(Preferences.codSettings, jsonEncode(codSettingModel.toJson()));
1194:       }
1195:     });
1196: 
1197:     await fireStore.collection(CollectionName.settings).doc("midtrans_settings").get().then((value) async {
1198:       if (value.exists) {
1199:         MidTrans midTrans = MidTrans.fromJson(value.data()!);
1200:         await Preferences.setString(Preferences.midTransSettings, jsonEncode(midTrans.toJson()));
1201:       }
1202:     });
1203: 
1204:     await fireStore.collection(CollectionName.settings).doc("orange_money_settings").get().then((value) async {
1205:       if (value.exists) {

1184:     await fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((value) async {
1185:       if (value.exists) {
1186:         RazorPayModel razorPayModel = RazorPayModel.fromJson(value.data()!);
1187:         await Preferences.setString(Preferences.razorpaySettings, jsonEncode(razorPayModel.toJson()));
1188:       }
1189:     });
1190:     await fireStore.collection(CollectionName.settings).doc("CODSettings").get().then((value) async {
1191:       if (value.exists) {
1192:         CodSettingModel codSettingModel = CodSettingModel.fromJson(value.data()!);
1193:         await Preferences.setString(Preferences.codSettings, jsonEncode(codSettingModel.toJson()));
1194:       }
1195:     });
1196: 
1197:     await fireStore.collection(CollectionName.settings).doc("midtrans_settings").get().then((value) async {
1198:       if (value.exists) {
1199:         MidTrans midTrans = MidTrans.fromJson(value.data()!);
1200:         await Preferences.setString(Preferences.midTransSettings, jsonEncode(midTrans.toJson()));
1201:       }
1202:     });
1203: 
1204:     await fireStore.collection(CollectionName.settings).doc("orange_money_settings").get().then((value) async {
1205:       if (value.exists) {
1206:         OrangeMoney orangeMoney = OrangeMoney.fromJson(value.data()!);
1207:         await Preferences.setString(Preferences.orangeMoneySettings, jsonEncode(orangeMoney.toJson()));
1208:       }
1209:     });
1210: 

1185:       if (value.exists) {
1186:         RazorPayModel razorPayModel = RazorPayModel.fromJson(value.data()!);
1187:         await Preferences.setString(Preferences.razorpaySettings, jsonEncode(razorPayModel.toJson()));
1188:       }
1189:     });
1190:     await fireStore.collection(CollectionName.settings).doc("CODSettings").get().then((value) async {
1191:       if (value.exists) {
1192:         CodSettingModel codSettingModel = CodSettingModel.fromJson(value.data()!);
1193:         await Preferences.setString(Preferences.codSettings, jsonEncode(codSettingModel.toJson()));
1194:       }
1195:     });
1196: 
1197:     await fireStore.collection(CollectionName.settings).doc("midtrans_settings").get().then((value) async {
1198:       if (value.exists) {
1199:         MidTrans midTrans = MidTrans.fromJson(value.data()!);
1200:         await Preferences.setString(Preferences.midTransSettings, jsonEncode(midTrans.toJson()));
1201:       }
1202:     });
1203: 
1204:     await fireStore.collection(CollectionName.settings).doc("orange_money_settings").get().then((value) async {
1205:       if (value.exists) {
1206:         OrangeMoney orangeMoney = OrangeMoney.fromJson(value.data()!);
1207:         await Preferences.setString(Preferences.orangeMoneySettings, jsonEncode(orangeMoney.toJson()));
1208:       }
1209:     });
1210: 
1211:     await fireStore.collection(CollectionName.settings).doc("xendit_settings").get().then((value) async {

1191:       if (value.exists) {
1192:         CodSettingModel codSettingModel = CodSettingModel.fromJson(value.data()!);
1193:         await Preferences.setString(Preferences.codSettings, jsonEncode(codSettingModel.toJson()));
1194:       }
1195:     });
1196: 
1197:     await fireStore.collection(CollectionName.settings).doc("midtrans_settings").get().then((value) async {
1198:       if (value.exists) {
1199:         MidTrans midTrans = MidTrans.fromJson(value.data()!);
1200:         await Preferences.setString(Preferences.midTransSettings, jsonEncode(midTrans.toJson()));
1201:       }
1202:     });
1203: 
1204:     await fireStore.collection(CollectionName.settings).doc("orange_money_settings").get().then((value) async {
1205:       if (value.exists) {
1206:         OrangeMoney orangeMoney = OrangeMoney.fromJson(value.data()!);
1207:         await Preferences.setString(Preferences.orangeMoneySettings, jsonEncode(orangeMoney.toJson()));
1208:       }
1209:     });
1210: 
1211:     await fireStore.collection(CollectionName.settings).doc("xendit_settings").get().then((value) async {
1212:       if (value.exists) {
1213:         Xendit xendit = Xendit.fromJson(value.data()!);
1214:         await Preferences.setString(Preferences.xenditSettings, jsonEncode(xendit.toJson()));
1215:       }
1216:     });
1217:   }

1192:         CodSettingModel codSettingModel = CodSettingModel.fromJson(value.data()!);
1193:         await Preferences.setString(Preferences.codSettings, jsonEncode(codSettingModel.toJson()));
1194:       }
1195:     });
1196: 
1197:     await fireStore.collection(CollectionName.settings).doc("midtrans_settings").get().then((value) async {
1198:       if (value.exists) {
1199:         MidTrans midTrans = MidTrans.fromJson(value.data()!);
1200:         await Preferences.setString(Preferences.midTransSettings, jsonEncode(midTrans.toJson()));
1201:       }
1202:     });
1203: 
1204:     await fireStore.collection(CollectionName.settings).doc("orange_money_settings").get().then((value) async {
1205:       if (value.exists) {
1206:         OrangeMoney orangeMoney = OrangeMoney.fromJson(value.data()!);
1207:         await Preferences.setString(Preferences.orangeMoneySettings, jsonEncode(orangeMoney.toJson()));
1208:       }
1209:     });
1210: 
1211:     await fireStore.collection(CollectionName.settings).doc("xendit_settings").get().then((value) async {
1212:       if (value.exists) {
1213:         Xendit xendit = Xendit.fromJson(value.data()!);
1214:         await Preferences.setString(Preferences.xenditSettings, jsonEncode(xendit.toJson()));
1215:       }
1216:     });
1217:   }
1218: 

1198:       if (value.exists) {
1199:         MidTrans midTrans = MidTrans.fromJson(value.data()!);
1200:         await Preferences.setString(Preferences.midTransSettings, jsonEncode(midTrans.toJson()));
1201:       }
1202:     });
1203: 
1204:     await fireStore.collection(CollectionName.settings).doc("orange_money_settings").get().then((value) async {
1205:       if (value.exists) {
1206:         OrangeMoney orangeMoney = OrangeMoney.fromJson(value.data()!);
1207:         await Preferences.setString(Preferences.orangeMoneySettings, jsonEncode(orangeMoney.toJson()));
1208:       }
1209:     });
1210: 
1211:     await fireStore.collection(CollectionName.settings).doc("xendit_settings").get().then((value) async {
1212:       if (value.exists) {
1213:         Xendit xendit = Xendit.fromJson(value.data()!);
1214:         await Preferences.setString(Preferences.xenditSettings, jsonEncode(xendit.toJson()));
1215:       }
1216:     });
1217:   }
1218: 
1219:   static Future<bool?> updateUserWallet({required String amount, required String userId}) async {
1220:     bool isAdded = false;
1221:     await getUserProfile(userId).then((value) async {
1222:       if (value != null) {
1223:         UserModel userModel = value;
1224:         print("Old Wallet Amount: ${userModel.walletAmount}");

1199:         MidTrans midTrans = MidTrans.fromJson(value.data()!);
1200:         await Preferences.setString(Preferences.midTransSettings, jsonEncode(midTrans.toJson()));
1201:       }
1202:     });
1203: 
1204:     await fireStore.collection(CollectionName.settings).doc("orange_money_settings").get().then((value) async {
1205:       if (value.exists) {
1206:         OrangeMoney orangeMoney = OrangeMoney.fromJson(value.data()!);
1207:         await Preferences.setString(Preferences.orangeMoneySettings, jsonEncode(orangeMoney.toJson()));
1208:       }
1209:     });
1210: 
1211:     await fireStore.collection(CollectionName.settings).doc("xendit_settings").get().then((value) async {
1212:       if (value.exists) {
1213:         Xendit xendit = Xendit.fromJson(value.data()!);
1214:         await Preferences.setString(Preferences.xenditSettings, jsonEncode(xendit.toJson()));
1215:       }
1216:     });
1217:   }
1218: 
1219:   static Future<bool?> updateUserWallet({required String amount, required String userId}) async {
1220:     bool isAdded = false;
1221:     await getUserProfile(userId).then((value) async {
1222:       if (value != null) {
1223:         UserModel userModel = value;
1224:         print("Old Wallet Amount: ${userModel.walletAmount}");
1225:         print("Amount to Add: $amount");

1205:       if (value.exists) {
1206:         OrangeMoney orangeMoney = OrangeMoney.fromJson(value.data()!);
1207:         await Preferences.setString(Preferences.orangeMoneySettings, jsonEncode(orangeMoney.toJson()));
1208:       }
1209:     });
1210: 
1211:     await fireStore.collection(CollectionName.settings).doc("xendit_settings").get().then((value) async {
1212:       if (value.exists) {
1213:         Xendit xendit = Xendit.fromJson(value.data()!);
1214:         await Preferences.setString(Preferences.xenditSettings, jsonEncode(xendit.toJson()));
1215:       }
1216:     });
1217:   }
1218: 
1219:   static Future<bool?> updateUserWallet({required String amount, required String userId}) async {
1220:     bool isAdded = false;
1221:     await getUserProfile(userId).then((value) async {
1222:       if (value != null) {
1223:         UserModel userModel = value;
1224:         print("Old Wallet Amount: ${userModel.walletAmount}");
1225:         print("Amount to Add: $amount");
1226:         userModel.walletAmount = double.parse(userModel.walletAmount.toString()) + double.parse(amount);
1227:         await FireStoreUtils.updateUser(userModel).then((value) {
1228:           isAdded = value;
1229:         });
1230:       }
1231:     });

1206:         OrangeMoney orangeMoney = OrangeMoney.fromJson(value.data()!);
1207:         await Preferences.setString(Preferences.orangeMoneySettings, jsonEncode(orangeMoney.toJson()));
1208:       }
1209:     });
1210: 
1211:     await fireStore.collection(CollectionName.settings).doc("xendit_settings").get().then((value) async {
1212:       if (value.exists) {
1213:         Xendit xendit = Xendit.fromJson(value.data()!);
1214:         await Preferences.setString(Preferences.xenditSettings, jsonEncode(xendit.toJson()));
1215:       }
1216:     });
1217:   }
1218: 
1219:   static Future<bool?> updateUserWallet({required String amount, required String userId}) async {
1220:     bool isAdded = false;
1221:     await getUserProfile(userId).then((value) async {
1222:       if (value != null) {
1223:         UserModel userModel = value;
1224:         print("Old Wallet Amount: ${userModel.walletAmount}");
1225:         print("Amount to Add: $amount");
1226:         userModel.walletAmount = double.parse(userModel.walletAmount.toString()) + double.parse(amount);
1227:         await FireStoreUtils.updateUser(userModel).then((value) {
1228:           isAdded = value;
1229:         });
1230:       }
1231:     });
1232:     return isAdded;

1233:   }
1234: 
1235:   static StreamController<List<VendorModel>>? getNearestVendorByCategoryController;
1236: 
1237:   static Stream<List<VendorModel>> getAllNearestRestaurantByCategoryId({bool? isDining, required String categoryId, bool ecommarce = false}) async* {
1238:     try {
1239:       getNearestVendorByCategoryController = StreamController<List<VendorModel>>.broadcast();
1240:       List<VendorModel> vendorList = [];
1241:       Query<Map<String, dynamic>> query;
1242:       if (ecommarce == true) {
1243:         query =
1244:             isDining == true
1245:                 ? fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where("enabledDiveInFuture", isEqualTo: true)
1246:                 : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId);
1247:       } else {
1248:         query =
1249:             isDining == true
1250:                 ? fireStore
1251:                     .collection(CollectionName.vendors)
1252:                     .where('categoryID', arrayContains: categoryId)
1253:                     .where('zoneId', isEqualTo: Constant.selectedZone!.id.toString())
1254:                     .where("enabledDiveInFuture", isEqualTo: true)
1255:                 : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where('zoneId', isEqualTo: Constant.selectedZone!.id.toString());
1256:       }
1257:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1258:       String field = 'g';
1259: 

1254:                     .where("enabledDiveInFuture", isEqualTo: true)
1255:                 : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where('zoneId', isEqualTo: Constant.selectedZone!.id.toString());
1256:       }
1257:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1258:       String field = 'g';
1259: 
1260:       Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
1261:           .collection(collectionRef: query)
1262:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
1263: 
1264:       stream.listen((List<DocumentSnapshot> documentList) async {
1265:         vendorList.clear();
1266:         for (var document in documentList) {
1267:           final data = document.data() as Map<String, dynamic>;
1268:           VendorModel vendorModel = VendorModel.fromJson(data);
1269:           if ((Constant.isSubscriptionModelApplied == true || vendorModel.adminCommission?.isEnabled == true) && vendorModel.subscriptionPlan != null) {
1270:             if (vendorModel.subscriptionTotalOrders == "-1") {
1271:               vendorList.add(vendorModel);
1272:             } else {
1273:               if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == '-1') {
1274:                 if (vendorModel.subscriptionTotalOrders != '0') {
1275:                   vendorList.add(vendorModel);
1276:                 }
1277:               }
1278:             }
1279:           } else {
1280:             vendorList.add(vendorModel);

1259: 
1260:       Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
1261:           .collection(collectionRef: query)
1262:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
1263: 
1264:       stream.listen((List<DocumentSnapshot> documentList) async {
1265:         vendorList.clear();
1266:         for (var document in documentList) {
1267:           final data = document.data() as Map<String, dynamic>;
1268:           VendorModel vendorModel = VendorModel.fromJson(data);
1269:           if ((Constant.isSubscriptionModelApplied == true || vendorModel.adminCommission?.isEnabled == true) && vendorModel.subscriptionPlan != null) {
1270:             if (vendorModel.subscriptionTotalOrders == "-1") {
1271:               vendorList.add(vendorModel);
1272:             } else {
1273:               if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == '-1') {
1274:                 if (vendorModel.subscriptionTotalOrders != '0') {
1275:                   vendorList.add(vendorModel);
1276:                 }
1277:               }
1278:             }
1279:           } else {
1280:             vendorList.add(vendorModel);
1281:           }
1282:         }
1283:         getNearestVendorByCategoryController!.sink.add(vendorList);
1284:       });
1285: 

1260:       Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
1261:           .collection(collectionRef: query)
1262:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
1263: 
1264:       stream.listen((List<DocumentSnapshot> documentList) async {
1265:         vendorList.clear();
1266:         for (var document in documentList) {
1267:           final data = document.data() as Map<String, dynamic>;
1268:           VendorModel vendorModel = VendorModel.fromJson(data);
1269:           if ((Constant.isSubscriptionModelApplied == true || vendorModel.adminCommission?.isEnabled == true) && vendorModel.subscriptionPlan != null) {
1270:             if (vendorModel.subscriptionTotalOrders == "-1") {
1271:               vendorList.add(vendorModel);
1272:             } else {
1273:               if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == '-1') {
1274:                 if (vendorModel.subscriptionTotalOrders != '0') {
1275:                   vendorList.add(vendorModel);
1276:                 }
1277:               }
1278:             }
1279:           } else {
1280:             vendorList.add(vendorModel);
1281:           }
1282:         }
1283:         getNearestVendorByCategoryController!.sink.add(vendorList);
1284:       });
1285: 
1286:       yield* getNearestVendorByCategoryController!.stream;

1261:           .collection(collectionRef: query)
1262:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
1263: 
1264:       stream.listen((List<DocumentSnapshot> documentList) async {
1265:         vendorList.clear();
1266:         for (var document in documentList) {
1267:           final data = document.data() as Map<String, dynamic>;
1268:           VendorModel vendorModel = VendorModel.fromJson(data);
1269:           if ((Constant.isSubscriptionModelApplied == true || vendorModel.adminCommission?.isEnabled == true) && vendorModel.subscriptionPlan != null) {
1270:             if (vendorModel.subscriptionTotalOrders == "-1") {
1271:               vendorList.add(vendorModel);
1272:             } else {
1273:               if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == '-1') {
1274:                 if (vendorModel.subscriptionTotalOrders != '0') {
1275:                   vendorList.add(vendorModel);
1276:                 }
1277:               }
1278:             }
1279:           } else {
1280:             vendorList.add(vendorModel);
1281:           }
1282:         }
1283:         getNearestVendorByCategoryController!.sink.add(vendorList);
1284:       });
1285: 
1286:       yield* getNearestVendorByCategoryController!.stream;
1287:     } catch (e) {

1290:   }
1291: 
1292:   static StreamController<List<VendorModel>>? getNearestVendorController;
1293: 
1294:   static Stream<List<VendorModel>> getAllNearestRestaurant({bool? isDining, bool ecommarce = false}) async* {
1295:     try {
1296:       getNearestVendorController = StreamController<List<VendorModel>>.broadcast();
1297:       List<VendorModel> vendorList = [];
1298:       Query<Map<String, dynamic>> query;
1299:       if (ecommarce == true) {
1300:         query =
1301:             isDining == true
1302:                 ? fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where("enabledDiveInFuture", isEqualTo: true)
1303:                 : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id);
1304:       } else {
1305:         query =
1306:             isDining == true
1307:                 ? fireStore
1308:                     .collection(CollectionName.vendors)
1309:                     .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
1310:                     .where('zoneId', isEqualTo: Constant.selectedZone?.id.toString())
1311:                     .where("enabledDiveInFuture", isEqualTo: true)
1312:                 : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where('zoneId', isEqualTo: Constant.selectedZone?.id.toString());
1313:       }
1314: 
1315:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1316:       String field = 'g';

1294:   static Stream<List<VendorModel>> getAllNearestRestaurant({bool? isDining, bool ecommarce = false}) async* {
1295:     try {
1296:       getNearestVendorController = StreamController<List<VendorModel>>.broadcast();
1297:       List<VendorModel> vendorList = [];
1298:       Query<Map<String, dynamic>> query;
1299:       if (ecommarce == true) {
1300:         query =
1301:             isDining == true
1302:                 ? fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where("enabledDiveInFuture", isEqualTo: true)
1303:                 : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id);
1304:       } else {
1305:         query =
1306:             isDining == true
1307:                 ? fireStore
1308:                     .collection(CollectionName.vendors)
1309:                     .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
1310:                     .where('zoneId', isEqualTo: Constant.selectedZone?.id.toString())
1311:                     .where("enabledDiveInFuture", isEqualTo: true)
1312:                 : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where('zoneId', isEqualTo: Constant.selectedZone?.id.toString());
1313:       }
1314: 
1315:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1316:       String field = 'g';
1317: 
1318:       Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
1319:           .collection(collectionRef: query)
1320:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);

1295:     try {
1296:       getNearestVendorController = StreamController<List<VendorModel>>.broadcast();
1297:       List<VendorModel> vendorList = [];
1298:       Query<Map<String, dynamic>> query;
1299:       if (ecommarce == true) {
1300:         query =
1301:             isDining == true
1302:                 ? fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where("enabledDiveInFuture", isEqualTo: true)
1303:                 : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id);
1304:       } else {
1305:         query =
1306:             isDining == true
1307:                 ? fireStore
1308:                     .collection(CollectionName.vendors)
1309:                     .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
1310:                     .where('zoneId', isEqualTo: Constant.selectedZone?.id.toString())
1311:                     .where("enabledDiveInFuture", isEqualTo: true)
1312:                 : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where('zoneId', isEqualTo: Constant.selectedZone?.id.toString());
1313:       }
1314: 
1315:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1316:       String field = 'g';
1317: 
1318:       Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
1319:           .collection(collectionRef: query)
1320:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
1321: 

1301:             isDining == true
1302:                 ? fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where("enabledDiveInFuture", isEqualTo: true)
1303:                 : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id);
1304:       } else {
1305:         query =
1306:             isDining == true
1307:                 ? fireStore
1308:                     .collection(CollectionName.vendors)
1309:                     .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
1310:                     .where('zoneId', isEqualTo: Constant.selectedZone?.id.toString())
1311:                     .where("enabledDiveInFuture", isEqualTo: true)
1312:                 : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where('zoneId', isEqualTo: Constant.selectedZone?.id.toString());
1313:       }
1314: 
1315:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1316:       String field = 'g';
1317: 
1318:       Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
1319:           .collection(collectionRef: query)
1320:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
1321: 
1322:       stream.listen((List<DocumentSnapshot> documentList) async {
1323:         vendorList.clear();
1324:         for (var document in documentList) {
1325:           final data = document.data() as Map<String, dynamic>;
1326:           VendorModel vendorModel = VendorModel.fromJson(data);
1327:           if ((Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel!.adminCommision?.isEnabled == true) && vendorModel.subscriptionPlan != null) {

1304:       } else {
1305:         query =
1306:             isDining == true
1307:                 ? fireStore
1308:                     .collection(CollectionName.vendors)
1309:                     .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
1310:                     .where('zoneId', isEqualTo: Constant.selectedZone?.id.toString())
1311:                     .where("enabledDiveInFuture", isEqualTo: true)
1312:                 : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where('zoneId', isEqualTo: Constant.selectedZone?.id.toString());
1313:       }
1314: 
1315:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1316:       String field = 'g';
1317: 
1318:       Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
1319:           .collection(collectionRef: query)
1320:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
1321: 
1322:       stream.listen((List<DocumentSnapshot> documentList) async {
1323:         vendorList.clear();
1324:         for (var document in documentList) {
1325:           final data = document.data() as Map<String, dynamic>;
1326:           VendorModel vendorModel = VendorModel.fromJson(data);
1327:           if ((Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel!.adminCommision?.isEnabled == true) && vendorModel.subscriptionPlan != null) {
1328:             if (vendorModel.subscriptionTotalOrders == "-1") {
1329:               vendorList.add(vendorModel);
1330:             } else {

1312:                 : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where('zoneId', isEqualTo: Constant.selectedZone?.id.toString());
1313:       }
1314: 
1315:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1316:       String field = 'g';
1317: 
1318:       Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
1319:           .collection(collectionRef: query)
1320:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
1321: 
1322:       stream.listen((List<DocumentSnapshot> documentList) async {
1323:         vendorList.clear();
1324:         for (var document in documentList) {
1325:           final data = document.data() as Map<String, dynamic>;
1326:           VendorModel vendorModel = VendorModel.fromJson(data);
1327:           if ((Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel!.adminCommision?.isEnabled == true) && vendorModel.subscriptionPlan != null) {
1328:             if (vendorModel.subscriptionTotalOrders == "-1") {
1329:               vendorList.add(vendorModel);
1330:             } else {
1331:               if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == "-1") {
1332:                 if (vendorModel.subscriptionTotalOrders != '0') {
1333:                   vendorList.add(vendorModel);
1334:                 }
1335:               }
1336:             }
1337:           } else {
1338:             vendorList.add(vendorModel);

1317: 
1318:       Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
1319:           .collection(collectionRef: query)
1320:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
1321: 
1322:       stream.listen((List<DocumentSnapshot> documentList) async {
1323:         vendorList.clear();
1324:         for (var document in documentList) {
1325:           final data = document.data() as Map<String, dynamic>;
1326:           VendorModel vendorModel = VendorModel.fromJson(data);
1327:           if ((Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel!.adminCommision?.isEnabled == true) && vendorModel.subscriptionPlan != null) {
1328:             if (vendorModel.subscriptionTotalOrders == "-1") {
1329:               vendorList.add(vendorModel);
1330:             } else {
1331:               if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == "-1") {
1332:                 if (vendorModel.subscriptionTotalOrders != '0') {
1333:                   vendorList.add(vendorModel);
1334:                 }
1335:               }
1336:             }
1337:           } else {
1338:             vendorList.add(vendorModel);
1339:           }
1340:         }
1341:         getNearestVendorController!.sink.add(vendorList);
1342:       });
1343: 

1318:       Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
1319:           .collection(collectionRef: query)
1320:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
1321: 
1322:       stream.listen((List<DocumentSnapshot> documentList) async {
1323:         vendorList.clear();
1324:         for (var document in documentList) {
1325:           final data = document.data() as Map<String, dynamic>;
1326:           VendorModel vendorModel = VendorModel.fromJson(data);
1327:           if ((Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel!.adminCommision?.isEnabled == true) && vendorModel.subscriptionPlan != null) {
1328:             if (vendorModel.subscriptionTotalOrders == "-1") {
1329:               vendorList.add(vendorModel);
1330:             } else {
1331:               if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == "-1") {
1332:                 if (vendorModel.subscriptionTotalOrders != '0') {
1333:                   vendorList.add(vendorModel);
1334:                 }
1335:               }
1336:             }
1337:           } else {
1338:             vendorList.add(vendorModel);
1339:           }
1340:         }
1341:         getNearestVendorController!.sink.add(vendorList);
1342:       });
1343: 
1344:       yield* getNearestVendorController!.stream;

1319:           .collection(collectionRef: query)
1320:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
1321: 
1322:       stream.listen((List<DocumentSnapshot> documentList) async {
1323:         vendorList.clear();
1324:         for (var document in documentList) {
1325:           final data = document.data() as Map<String, dynamic>;
1326:           VendorModel vendorModel = VendorModel.fromJson(data);
1327:           if ((Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel!.adminCommision?.isEnabled == true) && vendorModel.subscriptionPlan != null) {
1328:             if (vendorModel.subscriptionTotalOrders == "-1") {
1329:               vendorList.add(vendorModel);
1330:             } else {
1331:               if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == "-1") {
1332:                 if (vendorModel.subscriptionTotalOrders != '0') {
1333:                   vendorList.add(vendorModel);
1334:                 }
1335:               }
1336:             }
1337:           } else {
1338:             vendorList.add(vendorModel);
1339:           }
1340:         }
1341:         getNearestVendorController!.sink.add(vendorList);
1342:       });
1343: 
1344:       yield* getNearestVendorController!.stream;
1345:     } catch (e) {

1346:       print(e);
1347:     }
1348:   }
1349: 
1350:   static Future<List<VendorCategoryModel>> getHomePageShowCategory() async {
1351:     List<VendorCategoryModel> vendorCategoryList = [];
1352:     await fireStore
1353:         .collection(CollectionName.vendorCategories)
1354:         .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1355:         .where("show_in_homepage", isEqualTo: true)
1356:         .where('publish', isEqualTo: true)
1357:         .get()
1358:         .then((value) {
1359:           for (var element in value.docs) {
1360:             VendorCategoryModel vendorCategoryModel = VendorCategoryModel.fromJson(element.data());
1361:             vendorCategoryList.add(vendorCategoryModel);
1362:           }
1363:         })
1364:         .catchError((error) {
1365:           log(error.toString());
1366:         });
1367:     return vendorCategoryList;
1368:   }
1369: 
1370:   static Future<List<WalletTransactionModel>?> getWalletTransaction() async {
1371:     List<WalletTransactionModel> walletTransactionList = [];
1372:     log("FireStoreUtils.getCurrentUid() :: ${FireStoreUtils.getCurrentUid()}");

1352:     await fireStore
1353:         .collection(CollectionName.vendorCategories)
1354:         .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1355:         .where("show_in_homepage", isEqualTo: true)
1356:         .where('publish', isEqualTo: true)
1357:         .get()
1358:         .then((value) {
1359:           for (var element in value.docs) {
1360:             VendorCategoryModel vendorCategoryModel = VendorCategoryModel.fromJson(element.data());
1361:             vendorCategoryList.add(vendorCategoryModel);
1362:           }
1363:         })
1364:         .catchError((error) {
1365:           log(error.toString());
1366:         });
1367:     return vendorCategoryList;
1368:   }
1369: 
1370:   static Future<List<WalletTransactionModel>?> getWalletTransaction() async {
1371:     List<WalletTransactionModel> walletTransactionList = [];
1372:     log("FireStoreUtils.getCurrentUid() :: ${FireStoreUtils.getCurrentUid()}");
1373:     await fireStore
1374:         .collection(CollectionName.wallet)
1375:         .where('user_id', isEqualTo: FireStoreUtils.getCurrentUid())
1376:         .orderBy('date', descending: true)
1377:         .get()
1378:         .then((value) {

1372:     log("FireStoreUtils.getCurrentUid() :: ${FireStoreUtils.getCurrentUid()}");
1373:     await fireStore
1374:         .collection(CollectionName.wallet)
1375:         .where('user_id', isEqualTo: FireStoreUtils.getCurrentUid())
1376:         .orderBy('date', descending: true)
1377:         .get()
1378:         .then((value) {
1379:           for (var element in value.docs) {
1380:             WalletTransactionModel walletTransactionModel = WalletTransactionModel.fromJson(element.data());
1381:             walletTransactionList.add(walletTransactionModel);
1382:           }
1383:         })
1384:         .catchError((error) {
1385:           log(error.toString());
1386:         });
1387:     return walletTransactionList;
1388:   }
1389: 
1390:   static Future<List<ProductModel>> getProductListByCategoryId(String categoryId) async {
1391:     List<ProductModel> productList = [];
1392:     List<ProductModel> categorybyProductList = [];
1393:     QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.vendorProducts).where('categoryID', isEqualTo: categoryId).where('publish', isEqualTo: true).get();
1394:     await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
1395:       try {
1396:         productList.add(ProductModel.fromJson(document.data()));
1397:       } catch (e) {
1398:         print('FireStoreUtils.getCurrencys Parse error $e');

1385:           log(error.toString());
1386:         });
1387:     return walletTransactionList;
1388:   }
1389: 
1390:   static Future<List<ProductModel>> getProductListByCategoryId(String categoryId) async {
1391:     List<ProductModel> productList = [];
1392:     List<ProductModel> categorybyProductList = [];
1393:     QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.vendorProducts).where('categoryID', isEqualTo: categoryId).where('publish', isEqualTo: true).get();
1394:     await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
1395:       try {
1396:         productList.add(ProductModel.fromJson(document.data()));
1397:       } catch (e) {
1398:         print('FireStoreUtils.getCurrencys Parse error $e');
1399:       }
1400:     });
1401: 
1402:     List<VendorModel?> vendorList = await getAllStoresFuture();
1403:     List<ProductModel> allProduct = <ProductModel>[];
1404: 
1405:     for (var vendor in vendorList) {
1406:       await getAllProducts(vendor!.id.toString()).then((value) {
1407:         if (Constant.isSubscriptionModelApplied == true || vendor.adminCommission?.isEnabled == true) {
1408:           if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {
1409:             if (vendor.subscriptionPlan?.itemLimit == '-1') {
1410:               allProduct.addAll(value);
1411:             } else {

1386:         });
1387:     return walletTransactionList;
1388:   }
1389: 
1390:   static Future<List<ProductModel>> getProductListByCategoryId(String categoryId) async {
1391:     List<ProductModel> productList = [];
1392:     List<ProductModel> categorybyProductList = [];
1393:     QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.vendorProducts).where('categoryID', isEqualTo: categoryId).where('publish', isEqualTo: true).get();
1394:     await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
1395:       try {
1396:         productList.add(ProductModel.fromJson(document.data()));
1397:       } catch (e) {
1398:         print('FireStoreUtils.getCurrencys Parse error $e');
1399:       }
1400:     });
1401: 
1402:     List<VendorModel?> vendorList = await getAllStoresFuture();
1403:     List<ProductModel> allProduct = <ProductModel>[];
1404: 
1405:     for (var vendor in vendorList) {
1406:       await getAllProducts(vendor!.id.toString()).then((value) {
1407:         if (Constant.isSubscriptionModelApplied == true || vendor.adminCommission?.isEnabled == true) {
1408:           if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {
1409:             if (vendor.subscriptionPlan?.itemLimit == '-1') {
1410:               allProduct.addAll(value);
1411:             } else {
1412:               int selectedProduct = value.length < int.parse(vendor.subscriptionPlan?.itemLimit ?? '0') ? (value.isEmpty ? 0 : (value.length)) : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');

1388:   }
1389: 
1390:   static Future<List<ProductModel>> getProductListByCategoryId(String categoryId) async {
1391:     List<ProductModel> productList = [];
1392:     List<ProductModel> categorybyProductList = [];
1393:     QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.vendorProducts).where('categoryID', isEqualTo: categoryId).where('publish', isEqualTo: true).get();
1394:     await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
1395:       try {
1396:         productList.add(ProductModel.fromJson(document.data()));
1397:       } catch (e) {
1398:         print('FireStoreUtils.getCurrencys Parse error $e');
1399:       }
1400:     });
1401: 
1402:     List<VendorModel?> vendorList = await getAllStoresFuture();
1403:     List<ProductModel> allProduct = <ProductModel>[];
1404: 
1405:     for (var vendor in vendorList) {
1406:       await getAllProducts(vendor!.id.toString()).then((value) {
1407:         if (Constant.isSubscriptionModelApplied == true || vendor.adminCommission?.isEnabled == true) {
1408:           if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {
1409:             if (vendor.subscriptionPlan?.itemLimit == '-1') {
1410:               allProduct.addAll(value);
1411:             } else {
1412:               int selectedProduct = value.length < int.parse(vendor.subscriptionPlan?.itemLimit ?? '0') ? (value.isEmpty ? 0 : (value.length)) : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');
1413:               allProduct.addAll(value.sublist(0, selectedProduct));
1414:             }

1399:       }
1400:     });
1401: 
1402:     List<VendorModel?> vendorList = await getAllStoresFuture();
1403:     List<ProductModel> allProduct = <ProductModel>[];
1404: 
1405:     for (var vendor in vendorList) {
1406:       await getAllProducts(vendor!.id.toString()).then((value) {
1407:         if (Constant.isSubscriptionModelApplied == true || vendor.adminCommission?.isEnabled == true) {
1408:           if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {
1409:             if (vendor.subscriptionPlan?.itemLimit == '-1') {
1410:               allProduct.addAll(value);
1411:             } else {
1412:               int selectedProduct = value.length < int.parse(vendor.subscriptionPlan?.itemLimit ?? '0') ? (value.isEmpty ? 0 : (value.length)) : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');
1413:               allProduct.addAll(value.sublist(0, selectedProduct));
1414:             }
1415:           }
1416:         } else {
1417:           allProduct.addAll(value);
1418:         }
1419:       });
1420:     }
1421: 
1422:     for (var element in productList) {
1423:       bool productIsInList = allProduct.any((product) => product.id == element.id);
1424:       if (productIsInList) {
1425:         categorybyProductList.add(element);

1427:     }
1428: 
1429:     return categorybyProductList;
1430:   }
1431: 
1432:   static Future<List<ProductModel>> getAllProducts(String vendorId) async {
1433:     List<ProductModel> products = [];
1434: 
1435:     QuerySnapshot<Map<String, dynamic>> productsQuery =
1436:         await fireStore
1437:             .collection(CollectionName.vendorProducts)
1438:             .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1439:             .where('vendorID', isEqualTo: vendorId)
1440:             .where('publish', isEqualTo: true)
1441:             .orderBy('createdAt', descending: false)
1442:             .get();
1443:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
1444:       try {
1445:         products.add(ProductModel.fromJson(document.data()));
1446:       } catch (e) {
1447:         print('product**-FireStoreUtils.getAllProducts Parse error $e');
1448:       }
1449:     });
1450:     return products;
1451:   }
1452: 
1453:   static Future<List<VendorModel>> getAllStoresFuture({String? categoryId, bool ecommarce = false}) async {

1430:   }
1431: 
1432:   static Future<List<ProductModel>> getAllProducts(String vendorId) async {
1433:     List<ProductModel> products = [];
1434: 
1435:     QuerySnapshot<Map<String, dynamic>> productsQuery =
1436:         await fireStore
1437:             .collection(CollectionName.vendorProducts)
1438:             .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1439:             .where('vendorID', isEqualTo: vendorId)
1440:             .where('publish', isEqualTo: true)
1441:             .orderBy('createdAt', descending: false)
1442:             .get();
1443:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
1444:       try {
1445:         products.add(ProductModel.fromJson(document.data()));
1446:       } catch (e) {
1447:         print('product**-FireStoreUtils.getAllProducts Parse error $e');
1448:       }
1449:     });
1450:     return products;
1451:   }
1452: 
1453:   static Future<List<VendorModel>> getAllStoresFuture({String? categoryId, bool ecommarce = false}) async {
1454:     List<VendorModel> vendors = [];
1455: 
1456:     try {

1435:     QuerySnapshot<Map<String, dynamic>> productsQuery =
1436:         await fireStore
1437:             .collection(CollectionName.vendorProducts)
1438:             .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1439:             .where('vendorID', isEqualTo: vendorId)
1440:             .where('publish', isEqualTo: true)
1441:             .orderBy('createdAt', descending: false)
1442:             .get();
1443:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
1444:       try {
1445:         products.add(ProductModel.fromJson(document.data()));
1446:       } catch (e) {
1447:         print('product**-FireStoreUtils.getAllProducts Parse error $e');
1448:       }
1449:     });
1450:     return products;
1451:   }
1452: 
1453:   static Future<List<VendorModel>> getAllStoresFuture({String? categoryId, bool ecommarce = false}) async {
1454:     List<VendorModel> vendors = [];
1455: 
1456:     try {
1457:       Query<Map<String, dynamic>> collectionReference;
1458:       if (ecommarce == true) {
1459:         collectionReference =
1460:             categoryId == null
1461:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)

1437:             .collection(CollectionName.vendorProducts)
1438:             .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1439:             .where('vendorID', isEqualTo: vendorId)
1440:             .where('publish', isEqualTo: true)
1441:             .orderBy('createdAt', descending: false)
1442:             .get();
1443:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
1444:       try {
1445:         products.add(ProductModel.fromJson(document.data()));
1446:       } catch (e) {
1447:         print('product**-FireStoreUtils.getAllProducts Parse error $e');
1448:       }
1449:     });
1450:     return products;
1451:   }
1452: 
1453:   static Future<List<VendorModel>> getAllStoresFuture({String? categoryId, bool ecommarce = false}) async {
1454:     List<VendorModel> vendors = [];
1455: 
1456:     try {
1457:       Query<Map<String, dynamic>> collectionReference;
1458:       if (ecommarce == true) {
1459:         collectionReference =
1460:             categoryId == null
1461:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1462:                 : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
1463:       } else {

1449:     });
1450:     return products;
1451:   }
1452: 
1453:   static Future<List<VendorModel>> getAllStoresFuture({String? categoryId, bool ecommarce = false}) async {
1454:     List<VendorModel> vendors = [];
1455: 
1456:     try {
1457:       Query<Map<String, dynamic>> collectionReference;
1458:       if (ecommarce == true) {
1459:         collectionReference =
1460:             categoryId == null
1461:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1462:                 : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
1463:       } else {
1464:         collectionReference =
1465:             categoryId == null
1466:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("zoneId", isEqualTo: Constant.selectedZone!.id.toString())
1467:                 : fireStore
1468:                     .collection(CollectionName.vendors)
1469:                     .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1470:                     .where("categoryID", isEqualTo: categoryId)
1471:                     .where("zoneId", isEqualTo: Constant.selectedZone!.id.toString());
1472:       }
1473:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1474: 
1475:       String field = 'g';

1453:   static Future<List<VendorModel>> getAllStoresFuture({String? categoryId, bool ecommarce = false}) async {
1454:     List<VendorModel> vendors = [];
1455: 
1456:     try {
1457:       Query<Map<String, dynamic>> collectionReference;
1458:       if (ecommarce == true) {
1459:         collectionReference =
1460:             categoryId == null
1461:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1462:                 : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
1463:       } else {
1464:         collectionReference =
1465:             categoryId == null
1466:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("zoneId", isEqualTo: Constant.selectedZone!.id.toString())
1467:                 : fireStore
1468:                     .collection(CollectionName.vendors)
1469:                     .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1470:                     .where("categoryID", isEqualTo: categoryId)
1471:                     .where("zoneId", isEqualTo: Constant.selectedZone!.id.toString());
1472:       }
1473:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1474: 
1475:       String field = 'g';
1476: 
1477:       List<DocumentSnapshot> documentList =
1478:           await Geoflutterfire()
1479:               .collection(collectionRef: collectionReference)

1454:     List<VendorModel> vendors = [];
1455: 
1456:     try {
1457:       Query<Map<String, dynamic>> collectionReference;
1458:       if (ecommarce == true) {
1459:         collectionReference =
1460:             categoryId == null
1461:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1462:                 : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
1463:       } else {
1464:         collectionReference =
1465:             categoryId == null
1466:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("zoneId", isEqualTo: Constant.selectedZone!.id.toString())
1467:                 : fireStore
1468:                     .collection(CollectionName.vendors)
1469:                     .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1470:                     .where("categoryID", isEqualTo: categoryId)
1471:                     .where("zoneId", isEqualTo: Constant.selectedZone!.id.toString());
1472:       }
1473:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1474: 
1475:       String field = 'g';
1476: 
1477:       List<DocumentSnapshot> documentList =
1478:           await Geoflutterfire()
1479:               .collection(collectionRef: collectionReference)
1480:               .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)

1458:       if (ecommarce == true) {
1459:         collectionReference =
1460:             categoryId == null
1461:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1462:                 : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
1463:       } else {
1464:         collectionReference =
1465:             categoryId == null
1466:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("zoneId", isEqualTo: Constant.selectedZone!.id.toString())
1467:                 : fireStore
1468:                     .collection(CollectionName.vendors)
1469:                     .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1470:                     .where("categoryID", isEqualTo: categoryId)
1471:                     .where("zoneId", isEqualTo: Constant.selectedZone!.id.toString());
1472:       }
1473:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1474: 
1475:       String field = 'g';
1476: 
1477:       List<DocumentSnapshot> documentList =
1478:           await Geoflutterfire()
1479:               .collection(collectionRef: collectionReference)
1480:               .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
1481:               .first; // Fetch the data once as a Future
1482: 
1483:       if (documentList.isNotEmpty) {
1484:         for (var document in documentList) {

1461:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1462:                 : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
1463:       } else {
1464:         collectionReference =
1465:             categoryId == null
1466:                 ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("zoneId", isEqualTo: Constant.selectedZone!.id.toString())
1467:                 : fireStore
1468:                     .collection(CollectionName.vendors)
1469:                     .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1470:                     .where("categoryID", isEqualTo: categoryId)
1471:                     .where("zoneId", isEqualTo: Constant.selectedZone!.id.toString());
1472:       }
1473:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1474: 
1475:       String field = 'g';
1476: 
1477:       List<DocumentSnapshot> documentList =
1478:           await Geoflutterfire()
1479:               .collection(collectionRef: collectionReference)
1480:               .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
1481:               .first; // Fetch the data once as a Future
1482: 
1483:       if (documentList.isNotEmpty) {
1484:         for (var document in documentList) {
1485:           final data = document.data() as Map<String, dynamic>;
1486:           VendorModel vendorModel = VendorModel.fromJson(data);
1487: 

1472:       }
1473:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
1474: 
1475:       String field = 'g';
1476: 
1477:       List<DocumentSnapshot> documentList =
1478:           await Geoflutterfire()
1479:               .collection(collectionRef: collectionReference)
1480:               .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
1481:               .first; // Fetch the data once as a Future
1482: 
1483:       if (documentList.isNotEmpty) {
1484:         for (var document in documentList) {
1485:           final data = document.data() as Map<String, dynamic>;
1486:           VendorModel vendorModel = VendorModel.fromJson(data);
1487: 
1488:           if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
1489:             if (vendorModel.subscriptionPlan != null && Constant.isExpire(vendorModel) == false) {
1490:               if (vendorModel.subscriptionTotalOrders == "-1") {
1491:                 vendors.add(vendorModel);
1492:               } else {
1493:                 if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == "-1") {
1494:                   if (vendorModel.subscriptionTotalOrders != '0') {
1495:                     vendors.add(vendorModel);
1496:                   }
1497:                 }
1498:               }

1477:       List<DocumentSnapshot> documentList =
1478:           await Geoflutterfire()
1479:               .collection(collectionRef: collectionReference)
1480:               .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
1481:               .first; // Fetch the data once as a Future
1482: 
1483:       if (documentList.isNotEmpty) {
1484:         for (var document in documentList) {
1485:           final data = document.data() as Map<String, dynamic>;
1486:           VendorModel vendorModel = VendorModel.fromJson(data);
1487: 
1488:           if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
1489:             if (vendorModel.subscriptionPlan != null && Constant.isExpire(vendorModel) == false) {
1490:               if (vendorModel.subscriptionTotalOrders == "-1") {
1491:                 vendors.add(vendorModel);
1492:               } else {
1493:                 if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == "-1") {
1494:                   if (vendorModel.subscriptionTotalOrders != '0') {
1495:                     vendors.add(vendorModel);
1496:                   }
1497:                 }
1498:               }
1499:             }
1500:           } else {
1501:             vendors.add(vendorModel);
1502:           }
1503:         }

1478:           await Geoflutterfire()
1479:               .collection(collectionRef: collectionReference)
1480:               .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
1481:               .first; // Fetch the data once as a Future
1482: 
1483:       if (documentList.isNotEmpty) {
1484:         for (var document in documentList) {
1485:           final data = document.data() as Map<String, dynamic>;
1486:           VendorModel vendorModel = VendorModel.fromJson(data);
1487: 
1488:           if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
1489:             if (vendorModel.subscriptionPlan != null && Constant.isExpire(vendorModel) == false) {
1490:               if (vendorModel.subscriptionTotalOrders == "-1") {
1491:                 vendors.add(vendorModel);
1492:               } else {
1493:                 if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == "-1") {
1494:                   if (vendorModel.subscriptionTotalOrders != '0') {
1495:                     vendors.add(vendorModel);
1496:                   }
1497:                 }
1498:               }
1499:             }
1500:           } else {
1501:             vendors.add(vendorModel);
1502:           }
1503:         }
1504:       }

1480:               .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
1481:               .first; // Fetch the data once as a Future
1482: 
1483:       if (documentList.isNotEmpty) {
1484:         for (var document in documentList) {
1485:           final data = document.data() as Map<String, dynamic>;
1486:           VendorModel vendorModel = VendorModel.fromJson(data);
1487: 
1488:           if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
1489:             if (vendorModel.subscriptionPlan != null && Constant.isExpire(vendorModel) == false) {
1490:               if (vendorModel.subscriptionTotalOrders == "-1") {
1491:                 vendors.add(vendorModel);
1492:               } else {
1493:                 if ((vendorModel.subscriptionExpiryDate != null && vendorModel.subscriptionExpiryDate!.toDate().isBefore(DateTime.now()) == false) || vendorModel.subscriptionPlan?.expiryDay == "-1") {
1494:                   if (vendorModel.subscriptionTotalOrders != '0') {
1495:                     vendors.add(vendorModel);
1496:                   }
1497:                 }
1498:               }
1499:             }
1500:           } else {
1501:             vendors.add(vendorModel);
1502:           }
1503:         }
1504:       }
1505:     } catch (e) {
1506:       print('Error fetching vendors: $e');

1511: 
1512:   static Future<NotificationModel?> getNotificationContent(String type) async {
1513:     NotificationModel? notificationModel;
1514:     await fireStore.collection(CollectionName.dynamicNotification).where('type', isEqualTo: type).get().then((value) {
1515:       print("------>");
1516:       if (value.docs.isNotEmpty) {
1517:         print(value.docs.first.data());
1518: 
1519:         notificationModel = NotificationModel.fromJson(value.docs.first.data());
1520:       } else {
1521:         notificationModel = NotificationModel(id: "", message: "Notification setup is pending", subject: "setup notification", type: "");
1522:       }
1523:     });
1524:     return notificationModel;
1525:   }
1526: 
1527:   static Future<List<VendorCategoryModel>> getVendorCategory() async {
1528:     List<VendorCategoryModel> list = [];
1529:     await fireStore
1530:         .collection(CollectionName.vendorCategories)
1531:         .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
1532:         .where('publish', isEqualTo: true)
1533:         .get()
1534:         .then((value) {
1535:           for (var element in value.docs) {
1536:             print("====>${value.docs.length}");
1537:             VendorCategoryModel walletTransactionModel = VendorCategoryModel.fromJson(element.data());

1523:     });
1524:     return notificationModel;
1525:   }
1526: 
1527:   static Future<List<VendorCategoryModel>> getVendorCategory() async {
1528:     List<VendorCategoryModel> list = [];
1529:     await fireStore
1530:         .collection(CollectionName.vendorCategories)
1531:         .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
1532:         .where('publish', isEqualTo: true)
1533:         .get()
1534:         .then((value) {
1535:           for (var element in value.docs) {
1536:             print("====>${value.docs.length}");
1537:             VendorCategoryModel walletTransactionModel = VendorCategoryModel.fromJson(element.data());
1538:             list.add(walletTransactionModel);
1539:           }
1540:         })
1541:         .catchError((error) {
1542:           log(error.toString());
1543:         });
1544:     return list;
1545:   }
1546: 
1547:   static Future<GiftCardsOrderModel> placeGiftCardOrder(GiftCardsOrderModel giftCardsOrderModel) async {
1548:     print("=====>");
1549:     print(giftCardsOrderModel.toJson());

1529:     await fireStore
1530:         .collection(CollectionName.vendorCategories)
1531:         .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
1532:         .where('publish', isEqualTo: true)
1533:         .get()
1534:         .then((value) {
1535:           for (var element in value.docs) {
1536:             print("====>${value.docs.length}");
1537:             VendorCategoryModel walletTransactionModel = VendorCategoryModel.fromJson(element.data());
1538:             list.add(walletTransactionModel);
1539:           }
1540:         })
1541:         .catchError((error) {
1542:           log(error.toString());
1543:         });
1544:     return list;
1545:   }
1546: 
1547:   static Future<GiftCardsOrderModel> placeGiftCardOrder(GiftCardsOrderModel giftCardsOrderModel) async {
1548:     print("=====>");
1549:     print(giftCardsOrderModel.toJson());
1550:     await fireStore.collection(CollectionName.giftPurchases).doc(giftCardsOrderModel.id).set(giftCardsOrderModel.toJson());
1551:     return giftCardsOrderModel;
1552:   }
1553: 
1554:   static Future removeFavouriteRestaurant(FavouriteModel favouriteModel) async {
1555:     await fireStore.collection(CollectionName.favoriteVendor).where("store_id", isEqualTo: favouriteModel.restaurantId).get().then((value) {

1541:         .catchError((error) {
1542:           log(error.toString());
1543:         });
1544:     return list;
1545:   }
1546: 
1547:   static Future<GiftCardsOrderModel> placeGiftCardOrder(GiftCardsOrderModel giftCardsOrderModel) async {
1548:     print("=====>");
1549:     print(giftCardsOrderModel.toJson());
1550:     await fireStore.collection(CollectionName.giftPurchases).doc(giftCardsOrderModel.id).set(giftCardsOrderModel.toJson());
1551:     return giftCardsOrderModel;
1552:   }
1553: 
1554:   static Future removeFavouriteRestaurant(FavouriteModel favouriteModel) async {
1555:     await fireStore.collection(CollectionName.favoriteVendor).where("store_id", isEqualTo: favouriteModel.restaurantId).get().then((value) {
1556:       value.docs.forEach((element) async {
1557:         await fireStore.collection(CollectionName.favoriteVendor).doc(element.id).delete();
1558:       });
1559:     });
1560:   }
1561: 
1562:   static Future<void> setFavouriteRestaurant(FavouriteModel favouriteModel) async {
1563:     favouriteModel.sectionId = Constant.sectionConstantModel!.id;
1564:     log("setFavouriteRestaurant :: ${favouriteModel.toJson()}");
1565:     await fireStore.collection(CollectionName.favoriteVendor).add(favouriteModel.toJson());
1566:   }
1567: 

1542:           log(error.toString());
1543:         });
1544:     return list;
1545:   }
1546: 
1547:   static Future<GiftCardsOrderModel> placeGiftCardOrder(GiftCardsOrderModel giftCardsOrderModel) async {
1548:     print("=====>");
1549:     print(giftCardsOrderModel.toJson());
1550:     await fireStore.collection(CollectionName.giftPurchases).doc(giftCardsOrderModel.id).set(giftCardsOrderModel.toJson());
1551:     return giftCardsOrderModel;
1552:   }
1553: 
1554:   static Future removeFavouriteRestaurant(FavouriteModel favouriteModel) async {
1555:     await fireStore.collection(CollectionName.favoriteVendor).where("store_id", isEqualTo: favouriteModel.restaurantId).get().then((value) {
1556:       value.docs.forEach((element) async {
1557:         await fireStore.collection(CollectionName.favoriteVendor).doc(element.id).delete();
1558:       });
1559:     });
1560:   }
1561: 
1562:   static Future<void> setFavouriteRestaurant(FavouriteModel favouriteModel) async {
1563:     favouriteModel.sectionId = Constant.sectionConstantModel!.id;
1564:     log("setFavouriteRestaurant :: ${favouriteModel.toJson()}");
1565:     await fireStore.collection(CollectionName.favoriteVendor).add(favouriteModel.toJson());
1566:   }
1567: 
1568:   static Future<void> removeFavouriteItem(FavouriteItemModel favouriteModel) async {

1555:     await fireStore.collection(CollectionName.favoriteVendor).where("store_id", isEqualTo: favouriteModel.restaurantId).get().then((value) {
1556:       value.docs.forEach((element) async {
1557:         await fireStore.collection(CollectionName.favoriteVendor).doc(element.id).delete();
1558:       });
1559:     });
1560:   }
1561: 
1562:   static Future<void> setFavouriteRestaurant(FavouriteModel favouriteModel) async {
1563:     favouriteModel.sectionId = Constant.sectionConstantModel!.id;
1564:     log("setFavouriteRestaurant :: ${favouriteModel.toJson()}");
1565:     await fireStore.collection(CollectionName.favoriteVendor).add(favouriteModel.toJson());
1566:   }
1567: 
1568:   static Future<void> removeFavouriteItem(FavouriteItemModel favouriteModel) async {
1569:     try {
1570:       final favoriteCollection = fireStore.collection(CollectionName.favoriteItem);
1571:       final querySnapshot = await favoriteCollection.where("product_id", isEqualTo: favouriteModel.productId).get();
1572:       for (final doc in querySnapshot.docs) {
1573:         await favoriteCollection.doc(doc.id).delete();
1574:       }
1575:     } catch (e) {
1576:       print("Error removing favourite item: $e");
1577:     }
1578:   }
1579: 
1580:   static Future<void> setFavouriteItem(FavouriteItemModel favouriteModel) async {
1581:     favouriteModel.sectionId = Constant.sectionConstantModel!.id;

1556:       value.docs.forEach((element) async {
1557:         await fireStore.collection(CollectionName.favoriteVendor).doc(element.id).delete();
1558:       });
1559:     });
1560:   }
1561: 
1562:   static Future<void> setFavouriteRestaurant(FavouriteModel favouriteModel) async {
1563:     favouriteModel.sectionId = Constant.sectionConstantModel!.id;
1564:     log("setFavouriteRestaurant :: ${favouriteModel.toJson()}");
1565:     await fireStore.collection(CollectionName.favoriteVendor).add(favouriteModel.toJson());
1566:   }
1567: 
1568:   static Future<void> removeFavouriteItem(FavouriteItemModel favouriteModel) async {
1569:     try {
1570:       final favoriteCollection = fireStore.collection(CollectionName.favoriteItem);
1571:       final querySnapshot = await favoriteCollection.where("product_id", isEqualTo: favouriteModel.productId).get();
1572:       for (final doc in querySnapshot.docs) {
1573:         await favoriteCollection.doc(doc.id).delete();
1574:       }
1575:     } catch (e) {
1576:       print("Error removing favourite item: $e");
1577:     }
1578:   }
1579: 
1580:   static Future<void> setFavouriteItem(FavouriteItemModel favouriteModel) async {
1581:     favouriteModel.sectionId = Constant.sectionConstantModel!.id;
1582:     await fireStore.collection(CollectionName.favoriteItem).add(favouriteModel.toJson());

1557:         await fireStore.collection(CollectionName.favoriteVendor).doc(element.id).delete();
1558:       });
1559:     });
1560:   }
1561: 
1562:   static Future<void> setFavouriteRestaurant(FavouriteModel favouriteModel) async {
1563:     favouriteModel.sectionId = Constant.sectionConstantModel!.id;
1564:     log("setFavouriteRestaurant :: ${favouriteModel.toJson()}");
1565:     await fireStore.collection(CollectionName.favoriteVendor).add(favouriteModel.toJson());
1566:   }
1567: 
1568:   static Future<void> removeFavouriteItem(FavouriteItemModel favouriteModel) async {
1569:     try {
1570:       final favoriteCollection = fireStore.collection(CollectionName.favoriteItem);
1571:       final querySnapshot = await favoriteCollection.where("product_id", isEqualTo: favouriteModel.productId).get();
1572:       for (final doc in querySnapshot.docs) {
1573:         await favoriteCollection.doc(doc.id).delete();
1574:       }
1575:     } catch (e) {
1576:       print("Error removing favourite item: $e");
1577:     }
1578:   }
1579: 
1580:   static Future<void> setFavouriteItem(FavouriteItemModel favouriteModel) async {
1581:     favouriteModel.sectionId = Constant.sectionConstantModel!.id;
1582:     await fireStore.collection(CollectionName.favoriteItem).add(favouriteModel.toJson());
1583:   }

1573:         await favoriteCollection.doc(doc.id).delete();
1574:       }
1575:     } catch (e) {
1576:       print("Error removing favourite item: $e");
1577:     }
1578:   }
1579: 
1580:   static Future<void> setFavouriteItem(FavouriteItemModel favouriteModel) async {
1581:     favouriteModel.sectionId = Constant.sectionConstantModel!.id;
1582:     await fireStore.collection(CollectionName.favoriteItem).add(favouriteModel.toJson());
1583:   }
1584: 
1585:   static Future<Url> uploadChatImageToFireStorage(File image, BuildContext context) async {
1586:     ShowToastDialog.showLoader("Please wait".tr);
1587:     var uniqueID = const Uuid().v4();
1588:     Reference upload = FirebaseStorage.instance.ref().child('images/$uniqueID.png');
1589:     UploadTask uploadTask = upload.putFile(image);
1590:     var storageRef = (await uploadTask.whenComplete(() {})).ref;
1591:     var downloadUrl = await storageRef.getDownloadURL();
1592:     var metaData = await storageRef.getMetadata();
1593:     ShowToastDialog.closeLoader();
1594:     return Url(mime: metaData.contentType ?? 'image', url: downloadUrl.toString());
1595:   }
1596: 
1597:   static Future<List<CouponModel>> getHomeCoupon() async {
1598:     List<CouponModel> list = [];
1599:     await fireStore

1574:       }
1575:     } catch (e) {
1576:       print("Error removing favourite item: $e");
1577:     }
1578:   }
1579: 
1580:   static Future<void> setFavouriteItem(FavouriteItemModel favouriteModel) async {
1581:     favouriteModel.sectionId = Constant.sectionConstantModel!.id;
1582:     await fireStore.collection(CollectionName.favoriteItem).add(favouriteModel.toJson());
1583:   }
1584: 
1585:   static Future<Url> uploadChatImageToFireStorage(File image, BuildContext context) async {
1586:     ShowToastDialog.showLoader("Please wait".tr);
1587:     var uniqueID = const Uuid().v4();
1588:     Reference upload = FirebaseStorage.instance.ref().child('images/$uniqueID.png');
1589:     UploadTask uploadTask = upload.putFile(image);
1590:     var storageRef = (await uploadTask.whenComplete(() {})).ref;
1591:     var downloadUrl = await storageRef.getDownloadURL();
1592:     var metaData = await storageRef.getMetadata();
1593:     ShowToastDialog.closeLoader();
1594:     return Url(mime: metaData.contentType ?? 'image', url: downloadUrl.toString());
1595:   }
1596: 
1597:   static Future<List<CouponModel>> getHomeCoupon() async {
1598:     List<CouponModel> list = [];
1599:     await fireStore
1600:         .collection(CollectionName.coupons)

1599:     await fireStore
1600:         .collection(CollectionName.coupons)
1601:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1602:         .where("isEnabled", isEqualTo: true)
1603:         .where("isPublic", isEqualTo: true)
1604:         .get()
1605:         .then((value) {
1606:           for (var element in value.docs) {
1607:             CouponModel walletTransactionModel = CouponModel.fromJson(element.data());
1608:             list.add(walletTransactionModel);
1609:           }
1610:         })
1611:         .catchError((error) {
1612:           log(error.toString());
1613:         });
1614:     return list;
1615:   }
1616: 
1617:   static Future<List<BannerModel>> getHomeTopBanner() async {
1618:     List<BannerModel> bannerList = [];
1619:     await fireStore
1620:         .collection(CollectionName.bannerItems)
1621:         .where("is_publish", isEqualTo: true)
1622:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1623:         .where("position", isEqualTo: "top")
1624:         .orderBy("set_order", descending: false)
1625:         .get()

1614:     return list;
1615:   }
1616: 
1617:   static Future<List<BannerModel>> getHomeTopBanner() async {
1618:     List<BannerModel> bannerList = [];
1619:     await fireStore
1620:         .collection(CollectionName.bannerItems)
1621:         .where("is_publish", isEqualTo: true)
1622:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1623:         .where("position", isEqualTo: "top")
1624:         .orderBy("set_order", descending: false)
1625:         .get()
1626:         .then((value) {
1627:           for (var element in value.docs) {
1628:             BannerModel bannerHome = BannerModel.fromJson(element.data());
1629:             bannerList.add(bannerHome);
1630:           }
1631:         });
1632:     return bannerList;
1633:   }
1634: 
1635:   static Future<List<StoryModel>> getStory() async {
1636:     List<StoryModel> storyList = [];
1637:     await fireStore.collection(CollectionName.story).where('sectionID', isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
1638:       print("Number of Stories Fetched: ${value.docs.length}");
1639:       for (var element in value.docs) {
1640:         StoryModel walletTransactionModel = StoryModel.fromJson(element.data());

1620:         .collection(CollectionName.bannerItems)
1621:         .where("is_publish", isEqualTo: true)
1622:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1623:         .where("position", isEqualTo: "top")
1624:         .orderBy("set_order", descending: false)
1625:         .get()
1626:         .then((value) {
1627:           for (var element in value.docs) {
1628:             BannerModel bannerHome = BannerModel.fromJson(element.data());
1629:             bannerList.add(bannerHome);
1630:           }
1631:         });
1632:     return bannerList;
1633:   }
1634: 
1635:   static Future<List<StoryModel>> getStory() async {
1636:     List<StoryModel> storyList = [];
1637:     await fireStore.collection(CollectionName.story).where('sectionID', isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
1638:       print("Number of Stories Fetched: ${value.docs.length}");
1639:       for (var element in value.docs) {
1640:         StoryModel walletTransactionModel = StoryModel.fromJson(element.data());
1641:         storyList.add(walletTransactionModel);
1642:       }
1643:     });
1644:     return storyList;
1645:   }
1646: 

1629:             bannerList.add(bannerHome);
1630:           }
1631:         });
1632:     return bannerList;
1633:   }
1634: 
1635:   static Future<List<StoryModel>> getStory() async {
1636:     List<StoryModel> storyList = [];
1637:     await fireStore.collection(CollectionName.story).where('sectionID', isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
1638:       print("Number of Stories Fetched: ${value.docs.length}");
1639:       for (var element in value.docs) {
1640:         StoryModel walletTransactionModel = StoryModel.fromJson(element.data());
1641:         storyList.add(walletTransactionModel);
1642:       }
1643:     });
1644:     return storyList;
1645:   }
1646: 
1647:   static Future<GiftCardsOrderModel?> checkRedeemCode(String giftCode) async {
1648:     GiftCardsOrderModel? giftCardsOrderModel;
1649:     await fireStore.collection(CollectionName.giftPurchases).where("giftCode", isEqualTo: giftCode).get().then((value) {
1650:       if (value.docs.isNotEmpty) {
1651:         giftCardsOrderModel = GiftCardsOrderModel.fromJson(value.docs.first.data());
1652:       }
1653:     });
1654:     return giftCardsOrderModel;
1655:   }

1632:     return bannerList;
1633:   }
1634: 
1635:   static Future<List<StoryModel>> getStory() async {
1636:     List<StoryModel> storyList = [];
1637:     await fireStore.collection(CollectionName.story).where('sectionID', isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
1638:       print("Number of Stories Fetched: ${value.docs.length}");
1639:       for (var element in value.docs) {
1640:         StoryModel walletTransactionModel = StoryModel.fromJson(element.data());
1641:         storyList.add(walletTransactionModel);
1642:       }
1643:     });
1644:     return storyList;
1645:   }
1646: 
1647:   static Future<GiftCardsOrderModel?> checkRedeemCode(String giftCode) async {
1648:     GiftCardsOrderModel? giftCardsOrderModel;
1649:     await fireStore.collection(CollectionName.giftPurchases).where("giftCode", isEqualTo: giftCode).get().then((value) {
1650:       if (value.docs.isNotEmpty) {
1651:         giftCardsOrderModel = GiftCardsOrderModel.fromJson(value.docs.first.data());
1652:       }
1653:     });
1654:     return giftCardsOrderModel;
1655:   }
1656: 
1657:   static Future<void> sendTopUpMail({required String amount, required String paymentMethod, required String tractionId}) async {
1658:     EmailTemplateModel? emailTemplateModel = await FireStoreUtils.getEmailTemplates(Constant.walletTopup);

1643:     });
1644:     return storyList;
1645:   }
1646: 
1647:   static Future<GiftCardsOrderModel?> checkRedeemCode(String giftCode) async {
1648:     GiftCardsOrderModel? giftCardsOrderModel;
1649:     await fireStore.collection(CollectionName.giftPurchases).where("giftCode", isEqualTo: giftCode).get().then((value) {
1650:       if (value.docs.isNotEmpty) {
1651:         giftCardsOrderModel = GiftCardsOrderModel.fromJson(value.docs.first.data());
1652:       }
1653:     });
1654:     return giftCardsOrderModel;
1655:   }
1656: 
1657:   static Future<void> sendTopUpMail({required String amount, required String paymentMethod, required String tractionId}) async {
1658:     EmailTemplateModel? emailTemplateModel = await FireStoreUtils.getEmailTemplates(Constant.walletTopup);
1659: 
1660:     String newString = emailTemplateModel!.message.toString();
1661:     newString = newString.replaceAll("{username}", Constant.userModel!.firstName.toString() + Constant.userModel!.lastName.toString());
1662:     newString = newString.replaceAll("{date}", DateFormat('yyyy-MM-dd').format(Timestamp.now().toDate()));
1663:     newString = newString.replaceAll("{amount}", Constant.amountShow(amount: amount));
1664:     newString = newString.replaceAll("{paymentmethod}", paymentMethod.toString());
1665:     newString = newString.replaceAll("{transactionid}", tractionId.toString());
1666:     newString = newString.replaceAll("{newwalletbalance}.", Constant.amountShow(amount: Constant.userModel!.walletAmount.toString()));
1667:     await Constant.sendMail(subject: emailTemplateModel.subject, isAdmin: emailTemplateModel.isSendToAdmin, body: newString, recipients: [Constant.userModel!.email]);
1668:   }
1669: 

1698:     }
1699:   }
1700: 
1701:   static Future<OrderModel?> getOrderByOrderId(String orderId) async {
1702:     OrderModel? orderModel;
1703:     try {
1704:       await fireStore.collection(CollectionName.vendorOrders).doc(orderId).get().then((value) {
1705:         if (value.data() != null) {
1706:           orderModel = OrderModel.fromJson(value.data()!);
1707:         }
1708:       });
1709:     } catch (e, s) {
1710:       print('FireStoreUtils.firebaseCreateNewUser $e $s');
1711:       return null;
1712:     }
1713:     return orderModel;
1714:   }
1715: 
1716:   static Future<List<CouponModel>> getCabCoupon() async {
1717:     List<CouponModel> ordersList = [];
1718:     await fireStore
1719:         .collection(CollectionName.promos)
1720:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1721:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1722:         .where("isEnabled", isEqualTo: true)
1723:         .get()
1724:         .then((value) {

1712:     }
1713:     return orderModel;
1714:   }
1715: 
1716:   static Future<List<CouponModel>> getCabCoupon() async {
1717:     List<CouponModel> ordersList = [];
1718:     await fireStore
1719:         .collection(CollectionName.promos)
1720:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1721:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1722:         .where("isEnabled", isEqualTo: true)
1723:         .get()
1724:         .then((value) {
1725:           for (var element in value.docs) {
1726:             CouponModel bannerHome = CouponModel.fromJson(element.data());
1727:             ordersList.add(bannerHome);
1728:           }
1729:         });
1730:     return ordersList;
1731:   }
1732: 
1733:   static Future<List<CouponModel>> getParcelCoupon() async {
1734:     List<CouponModel> ordersList = [];
1735:     await fireStore
1736:         .collection(CollectionName.parcelCoupons)
1737:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1738:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())

1718:     await fireStore
1719:         .collection(CollectionName.promos)
1720:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1721:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1722:         .where("isEnabled", isEqualTo: true)
1723:         .get()
1724:         .then((value) {
1725:           for (var element in value.docs) {
1726:             CouponModel bannerHome = CouponModel.fromJson(element.data());
1727:             ordersList.add(bannerHome);
1728:           }
1729:         });
1730:     return ordersList;
1731:   }
1732: 
1733:   static Future<List<CouponModel>> getParcelCoupon() async {
1734:     List<CouponModel> ordersList = [];
1735:     await fireStore
1736:         .collection(CollectionName.parcelCoupons)
1737:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1738:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1739:         .where("isEnabled", isEqualTo: true)
1740:         .get()
1741:         .then((value) {
1742:           for (var element in value.docs) {
1743:             CouponModel bannerHome = CouponModel.fromJson(element.data());
1744:             ordersList.add(bannerHome);

1729:         });
1730:     return ordersList;
1731:   }
1732: 
1733:   static Future<List<CouponModel>> getParcelCoupon() async {
1734:     List<CouponModel> ordersList = [];
1735:     await fireStore
1736:         .collection(CollectionName.parcelCoupons)
1737:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1738:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1739:         .where("isEnabled", isEqualTo: true)
1740:         .get()
1741:         .then((value) {
1742:           for (var element in value.docs) {
1743:             CouponModel bannerHome = CouponModel.fromJson(element.data());
1744:             ordersList.add(bannerHome);
1745:           }
1746:         });
1747:     return ordersList;
1748:   }
1749: 
1750:   static Future<List<CouponModel>> getRentalCoupon() async {
1751:     List<CouponModel> ordersList = [];
1752:     await fireStore
1753:         .collection(CollectionName.rentalCoupons)
1754:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1755:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())

1735:     await fireStore
1736:         .collection(CollectionName.parcelCoupons)
1737:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1738:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1739:         .where("isEnabled", isEqualTo: true)
1740:         .get()
1741:         .then((value) {
1742:           for (var element in value.docs) {
1743:             CouponModel bannerHome = CouponModel.fromJson(element.data());
1744:             ordersList.add(bannerHome);
1745:           }
1746:         });
1747:     return ordersList;
1748:   }
1749: 
1750:   static Future<List<CouponModel>> getRentalCoupon() async {
1751:     List<CouponModel> ordersList = [];
1752:     await fireStore
1753:         .collection(CollectionName.rentalCoupons)
1754:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1755:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1756:         .where("isEnabled", isEqualTo: true)
1757:         .get()
1758:         .then((value) {
1759:           for (var element in value.docs) {
1760:             CouponModel bannerHome = CouponModel.fromJson(element.data());
1761:             ordersList.add(bannerHome);

1746:         });
1747:     return ordersList;
1748:   }
1749: 
1750:   static Future<List<CouponModel>> getRentalCoupon() async {
1751:     List<CouponModel> ordersList = [];
1752:     await fireStore
1753:         .collection(CollectionName.rentalCoupons)
1754:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1755:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1756:         .where("isEnabled", isEqualTo: true)
1757:         .get()
1758:         .then((value) {
1759:           for (var element in value.docs) {
1760:             CouponModel bannerHome = CouponModel.fromJson(element.data());
1761:             ordersList.add(bannerHome);
1762:           }
1763:         });
1764:     return ordersList;
1765:   }
1766: 
1767:   static Future<bool?> deleteUser() async {
1768:     bool? isDelete;
1769:     try {
1770:       await fireStore.collection(CollectionName.users).doc(FireStoreUtils.getCurrentUid()).delete();
1771: 
1772:       // delete user  from firebase auth

1752:     await fireStore
1753:         .collection(CollectionName.rentalCoupons)
1754:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1755:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1756:         .where("isEnabled", isEqualTo: true)
1757:         .get()
1758:         .then((value) {
1759:           for (var element in value.docs) {
1760:             CouponModel bannerHome = CouponModel.fromJson(element.data());
1761:             ordersList.add(bannerHome);
1762:           }
1763:         });
1764:     return ordersList;
1765:   }
1766: 
1767:   static Future<bool?> deleteUser() async {
1768:     bool? isDelete;
1769:     try {
1770:       await fireStore.collection(CollectionName.users).doc(FireStoreUtils.getCurrentUid()).delete();
1771: 
1772:       // delete user  from firebase auth
1773:       await deleteAuthUser(FireStoreUtils.getCurrentUid());
1774:       isDelete = true;
1775:     } catch (e, s) {
1776:       log('FireStoreUtils.firebaseCreateNewUser $e $s');
1777:       return false;
1778:     }

1814:     }
1815:   }
1816: 
1817:   static Future<List<ParcelCategory>> getParcelServiceCategory() async {
1818:     List<ParcelCategory> parcelCategoryList = [];
1819:     await fireStore
1820:         .collection(CollectionName.parcelCategory)
1821:         .where('publish', isEqualTo: true)
1822:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
1823:         .orderBy('set_order', descending: false)
1824:         .get()
1825:         .then((value) {
1826:           for (var element in value.docs) {
1827:             try {
1828:               ParcelCategory category = ParcelCategory.fromJson(element.data());
1829:               parcelCategoryList.add(category);
1830:             } catch (e, stackTrace) {
1831:               print('getParcelServiceCategory parse error: ${element.id} $e');
1832:               print(stackTrace);
1833:             }
1834:           }
1835:         });
1836:     return parcelCategoryList;
1837:   }
1838: 
1839:   static Future<List<ParcelWeightModel>> getParcelWeight() async {
1840:     List<ParcelWeightModel> parcelWeightList = [];

1820:         .collection(CollectionName.parcelCategory)
1821:         .where('publish', isEqualTo: true)
1822:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
1823:         .orderBy('set_order', descending: false)
1824:         .get()
1825:         .then((value) {
1826:           for (var element in value.docs) {
1827:             try {
1828:               ParcelCategory category = ParcelCategory.fromJson(element.data());
1829:               parcelCategoryList.add(category);
1830:             } catch (e, stackTrace) {
1831:               print('getParcelServiceCategory parse error: ${element.id} $e');
1832:               print(stackTrace);
1833:             }
1834:           }
1835:         });
1836:     return parcelCategoryList;
1837:   }
1838: 
1839:   static Future<List<ParcelWeightModel>> getParcelWeight() async {
1840:     List<ParcelWeightModel> parcelWeightList = [];
1841:     await fireStore.collection(CollectionName.parcelWeight).get().then((value) {
1842:       for (var element in value.docs) {
1843:         try {
1844:           ParcelWeightModel category = ParcelWeightModel.fromJson(element.data());
1845:           parcelWeightList.add(category);
1846:         } catch (e, stackTrace) {

1836:     return parcelCategoryList;
1837:   }
1838: 
1839:   static Future<List<ParcelWeightModel>> getParcelWeight() async {
1840:     List<ParcelWeightModel> parcelWeightList = [];
1841:     await fireStore.collection(CollectionName.parcelWeight).get().then((value) {
1842:       for (var element in value.docs) {
1843:         try {
1844:           ParcelWeightModel category = ParcelWeightModel.fromJson(element.data());
1845:           parcelWeightList.add(category);
1846:         } catch (e, stackTrace) {
1847:           print('getParcelWeight parse error: ${element.id} $e');
1848:           print(stackTrace);
1849:         }
1850:       }
1851:     });
1852:     return parcelWeightList;
1853:   }
1854: 
1855:   static Future<bool> setParcelOrder(ParcelOrderModel orderModel, double totalAmount) async {
1856:     // try {
1857:     //   final firestore = FirebaseFirestore.instance;
1858:     //   final isNew = orderModel.id.isEmpty;
1859:     //
1860:     //   final docRef = firestore.collection(CollectionName.parcelOrders).doc(isNew ? null : orderModel.id);
1861:     //   if (isNew) {
1862:     //     orderModel.id = docRef.id;

1881:     //     await FireStoreUtils.setWalletTransaction(transactionModel).then((value) async {
1882:     //       if (value == true) {
1883:     //         await FireStoreUtils.updateUserWallet(amount: "-$totalAmount", userId: FireStoreUtils.getCurrentUid());
1884:     //       }
1885:     //     });
1886:     //   }
1887:     //
1888:     //   // Set the parcel order in Firestore
1889:     //   await firestore.collection(CollectionName.parcelOrders).doc(orderModel.id).set(orderModel.toJson());
1890:     //
1891:     //   return true;
1892:     // } catch (e) {
1893:     //   debugPrint("Failed to place parcel order: $e");
1894:     //   return false;
1895:     // }
1896:     return true;
1897:   }
1898: 
1899:   static Future<void> sendParcelBookEmail({required ParcelOrderModel orderModel}) async {
1900:     try {
1901:       EmailTemplateModel? emailTemplateModel = await FireStoreUtils.getEmailTemplates(Constant.newParcelBook);
1902: 
1903:       String newString = emailTemplateModel!.message.toString();
1904:       newString = newString.replaceAll("{passengername}", "${Constant.userModel!.firstName} ${Constant.userModel!.lastName}");
1905:       newString = newString.replaceAll("{parcelid}", orderModel.id.toString());
1906:       newString = newString.replaceAll("{date}", DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()));
1907:       newString = newString.replaceAll("{sendername}", orderModel.sender!.name.toString());

1914:       await Constant.sendMail(subject: subjectNewString, isAdmin: emailTemplateModel.isSendToAdmin, body: newString, recipients: [Constant.userModel!.email]);
1915:     } catch (e) {
1916:       log("SIGNUP :: 22 :::::: $e");
1917:     }
1918:   }
1919: 
1920:   static Future<void> sendCabBookEmail({required CabOrderModel orderModel}) async {
1921:     try {
1922:       final sid = orderModel.sectionId ?? '';
1923:       String vType = '';
1924:       String brand = '';
1925:       String carModel = '';
1926:       String plate = '';
1927:       if (orderModel.driver?.vehicleDetails?.containsKey(sid) == true) {
1928:         final vehicle = orderModel.driver?.vehicleDetails?[sid];
1929:         vType = vehicle['vehicleType']?.toString() ?? '';
1930:         brand = vehicle['carBrand']?.toString() ?? '';
1931:         carModel = vehicle['carModel']?.toString() ?? '';
1932:         plate = vehicle['carPlateNumber']?.toString() ?? '';
1933:       }
1934:       EmailTemplateModel? emailTemplateModel = await FireStoreUtils.getEmailTemplates(Constant.newCabRideBook);
1935:       String newString = emailTemplateModel!.message.toString();
1936:       newString = newString.replaceAll("{passengername}", orderModel.author?.fullName() ?? '');
1937:       newString = newString.replaceAll("{rideid}", orderModel.id.toString());
1938:       newString = newString.replaceAll("{date}", DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()));
1939:       newString = newString.replaceAll("{time}", DateFormat('hh:mm a').format(orderModel.createdAt!.toDate()));
1940:       newString = newString.replaceAll("{pickuplocation}", orderModel.sourceLocationName.toString());

1966:       log("SIGNUP :: 22 :::::: $e");
1967:     }
1968:   }
1969: 
1970:   static Stream<List<ParcelOrderModel>> listenParcelOrders() {
1971:     return fireStore
1972:         .collection(CollectionName.parcelOrders)
1973:         .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
1974:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
1975:         .orderBy('createdAt', descending: true)
1976:         .snapshots()
1977:         .map((snapshot) {
1978:           return snapshot.docs.map((doc) {
1979:             log("===>");
1980:             print(doc.data());
1981:             return ParcelOrderModel.fromJson(doc.data());
1982:           }).toList();
1983:         });
1984:   }
1985: 
1986:   static Future<List<VehicleType>> getVehicleType() async {
1987:     List<VehicleType> vehicleTypeList = [];
1988:     await fireStore.collection(CollectionName.vehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
1989:       for (var element in value.docs) {
1990:         try {
1991:           VehicleType category = VehicleType.fromJson(element.data());
1992:           vehicleTypeList.add(category);

1973:         .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
1974:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
1975:         .orderBy('createdAt', descending: true)
1976:         .snapshots()
1977:         .map((snapshot) {
1978:           return snapshot.docs.map((doc) {
1979:             log("===>");
1980:             print(doc.data());
1981:             return ParcelOrderModel.fromJson(doc.data());
1982:           }).toList();
1983:         });
1984:   }
1985: 
1986:   static Future<List<VehicleType>> getVehicleType() async {
1987:     List<VehicleType> vehicleTypeList = [];
1988:     await fireStore.collection(CollectionName.vehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
1989:       for (var element in value.docs) {
1990:         try {
1991:           VehicleType category = VehicleType.fromJson(element.data());
1992:           vehicleTypeList.add(category);
1993:         } catch (e, stackTrace) {
1994:           print('getVehicleType error: ${element.id} $e');
1995:           print(stackTrace);
1996:         }
1997:       }
1998:     });
1999:     return vehicleTypeList;

1980:             print(doc.data());
1981:             return ParcelOrderModel.fromJson(doc.data());
1982:           }).toList();
1983:         });
1984:   }
1985: 
1986:   static Future<List<VehicleType>> getVehicleType() async {
1987:     List<VehicleType> vehicleTypeList = [];
1988:     await fireStore.collection(CollectionName.vehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
1989:       for (var element in value.docs) {
1990:         try {
1991:           VehicleType category = VehicleType.fromJson(element.data());
1992:           vehicleTypeList.add(category);
1993:         } catch (e, stackTrace) {
1994:           print('getVehicleType error: ${element.id} $e');
1995:           print(stackTrace);
1996:         }
1997:       }
1998:     });
1999:     return vehicleTypeList;
2000:   }
2001: 
2002:   static Future<List<PopularDestination>> getPopularDestination() async {
2003:     List<PopularDestination> popularDestination = [];
2004:     await fireStore.collection(CollectionName.popularDestinations).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where('is_publish', isEqualTo: true).get().then((value) {
2005:       for (var element in value.docs) {
2006:         try {

1983:         });
1984:   }
1985: 
1986:   static Future<List<VehicleType>> getVehicleType() async {
1987:     List<VehicleType> vehicleTypeList = [];
1988:     await fireStore.collection(CollectionName.vehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
1989:       for (var element in value.docs) {
1990:         try {
1991:           VehicleType category = VehicleType.fromJson(element.data());
1992:           vehicleTypeList.add(category);
1993:         } catch (e, stackTrace) {
1994:           print('getVehicleType error: ${element.id} $e');
1995:           print(stackTrace);
1996:         }
1997:       }
1998:     });
1999:     return vehicleTypeList;
2000:   }
2001: 
2002:   static Future<List<PopularDestination>> getPopularDestination() async {
2003:     List<PopularDestination> popularDestination = [];
2004:     await fireStore.collection(CollectionName.popularDestinations).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where('is_publish', isEqualTo: true).get().then((value) {
2005:       for (var element in value.docs) {
2006:         try {
2007:           PopularDestination category = PopularDestination.fromJson(element.data());
2008:           popularDestination.add(category);
2009:         } catch (e, stackTrace) {

1996:         }
1997:       }
1998:     });
1999:     return vehicleTypeList;
2000:   }
2001: 
2002:   static Future<List<PopularDestination>> getPopularDestination() async {
2003:     List<PopularDestination> popularDestination = [];
2004:     await fireStore.collection(CollectionName.popularDestinations).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where('is_publish', isEqualTo: true).get().then((value) {
2005:       for (var element in value.docs) {
2006:         try {
2007:           PopularDestination category = PopularDestination.fromJson(element.data());
2008:           popularDestination.add(category);
2009:         } catch (e, stackTrace) {
2010:           print('Get PopularDestination error: ${element.id} $e');
2011:           print(stackTrace);
2012:         }
2013:       }
2014:     });
2015:     return popularDestination;
2016:   }
2017: 
2018:   static Future cabOrderPlace(CabOrderModel orderModel) async {
2019:     await fireStore.collection(CollectionName.rides).doc(orderModel.id).set(orderModel.toJson());
2020:   }
2021: 
2022:   static Future parcelOrderPlace(ParcelOrderModel orderModel) async {

1999:     return vehicleTypeList;
2000:   }
2001: 
2002:   static Future<List<PopularDestination>> getPopularDestination() async {
2003:     List<PopularDestination> popularDestination = [];
2004:     await fireStore.collection(CollectionName.popularDestinations).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where('is_publish', isEqualTo: true).get().then((value) {
2005:       for (var element in value.docs) {
2006:         try {
2007:           PopularDestination category = PopularDestination.fromJson(element.data());
2008:           popularDestination.add(category);
2009:         } catch (e, stackTrace) {
2010:           print('Get PopularDestination error: ${element.id} $e');
2011:           print(stackTrace);
2012:         }
2013:       }
2014:     });
2015:     return popularDestination;
2016:   }
2017: 
2018:   static Future cabOrderPlace(CabOrderModel orderModel) async {
2019:     await fireStore.collection(CollectionName.rides).doc(orderModel.id).set(orderModel.toJson());
2020:   }
2021: 
2022:   static Future parcelOrderPlace(ParcelOrderModel orderModel) async {
2023:     await fireStore.collection(CollectionName.parcelOrders).doc(orderModel.id).set(orderModel.toJson());
2024:   }
2025: 

2011:           print(stackTrace);
2012:         }
2013:       }
2014:     });
2015:     return popularDestination;
2016:   }
2017: 
2018:   static Future cabOrderPlace(CabOrderModel orderModel) async {
2019:     await fireStore.collection(CollectionName.rides).doc(orderModel.id).set(orderModel.toJson());
2020:   }
2021: 
2022:   static Future parcelOrderPlace(ParcelOrderModel orderModel) async {
2023:     await fireStore.collection(CollectionName.parcelOrders).doc(orderModel.id).set(orderModel.toJson());
2024:   }
2025: 
2026:   static Future rentalOrderPlace(RentalOrderModel orderModel) async {
2027:     await fireStore.collection(CollectionName.rentalOrders).doc(orderModel.id).set(orderModel.toJson());
2028:   }
2029: 
2030:   static Future<CabOrderModel?> getCabOrderById(String orderId) async {
2031:     CabOrderModel? orderModel;
2032:     try {
2033:       final doc = await fireStore.collection(CollectionName.rides).doc(orderId).get();
2034:       if (doc.data() != null) {
2035:         final model = CabOrderModel.fromJson(doc.data()!);
2036:         if (model.rideType == "ride") {
2037:           orderModel = model;

2015:     return popularDestination;
2016:   }
2017: 
2018:   static Future cabOrderPlace(CabOrderModel orderModel) async {
2019:     await fireStore.collection(CollectionName.rides).doc(orderModel.id).set(orderModel.toJson());
2020:   }
2021: 
2022:   static Future parcelOrderPlace(ParcelOrderModel orderModel) async {
2023:     await fireStore.collection(CollectionName.parcelOrders).doc(orderModel.id).set(orderModel.toJson());
2024:   }
2025: 
2026:   static Future rentalOrderPlace(RentalOrderModel orderModel) async {
2027:     await fireStore.collection(CollectionName.rentalOrders).doc(orderModel.id).set(orderModel.toJson());
2028:   }
2029: 
2030:   static Future<CabOrderModel?> getCabOrderById(String orderId) async {
2031:     CabOrderModel? orderModel;
2032:     try {
2033:       final doc = await fireStore.collection(CollectionName.rides).doc(orderId).get();
2034:       if (doc.data() != null) {
2035:         final model = CabOrderModel.fromJson(doc.data()!);
2036:         if (model.rideType == "ride") {
2037:           orderModel = model;
2038:         }
2039:       }
2040:     } catch (e, s) {
2041:       print('getCabOrderById error: $e\n$s');

2019:     await fireStore.collection(CollectionName.rides).doc(orderModel.id).set(orderModel.toJson());
2020:   }
2021: 
2022:   static Future parcelOrderPlace(ParcelOrderModel orderModel) async {
2023:     await fireStore.collection(CollectionName.parcelOrders).doc(orderModel.id).set(orderModel.toJson());
2024:   }
2025: 
2026:   static Future rentalOrderPlace(RentalOrderModel orderModel) async {
2027:     await fireStore.collection(CollectionName.rentalOrders).doc(orderModel.id).set(orderModel.toJson());
2028:   }
2029: 
2030:   static Future<CabOrderModel?> getCabOrderById(String orderId) async {
2031:     CabOrderModel? orderModel;
2032:     try {
2033:       final doc = await fireStore.collection(CollectionName.rides).doc(orderId).get();
2034:       if (doc.data() != null) {
2035:         final model = CabOrderModel.fromJson(doc.data()!);
2036:         if (model.rideType == "ride") {
2037:           orderModel = model;
2038:         }
2039:       }
2040:     } catch (e, s) {
2041:       print('getCabOrderById error: $e\n$s');
2042:       return null;
2043:     }
2044:     return orderModel;
2045:   }

2027:     await fireStore.collection(CollectionName.rentalOrders).doc(orderModel.id).set(orderModel.toJson());
2028:   }
2029: 
2030:   static Future<CabOrderModel?> getCabOrderById(String orderId) async {
2031:     CabOrderModel? orderModel;
2032:     try {
2033:       final doc = await fireStore.collection(CollectionName.rides).doc(orderId).get();
2034:       if (doc.data() != null) {
2035:         final model = CabOrderModel.fromJson(doc.data()!);
2036:         if (model.rideType == "ride") {
2037:           orderModel = model;
2038:         }
2039:       }
2040:     } catch (e, s) {
2041:       print('getCabOrderById error: $e\n$s');
2042:       return null;
2043:     }
2044:     return orderModel;
2045:   }
2046: 
2047:   static Future<CabOrderModel?> getIntercityOrder(String orderId) async {
2048:     CabOrderModel? orderModel;
2049:     try {
2050:       final doc = await fireStore.collection(CollectionName.rides).doc(orderId).get();
2051:       if (doc.data() != null) {
2052:         final model = CabOrderModel.fromJson(doc.data()!);
2053:         if (model.rideType == "intercity") {

2044:     return orderModel;
2045:   }
2046: 
2047:   static Future<CabOrderModel?> getIntercityOrder(String orderId) async {
2048:     CabOrderModel? orderModel;
2049:     try {
2050:       final doc = await fireStore.collection(CollectionName.rides).doc(orderId).get();
2051:       if (doc.data() != null) {
2052:         final model = CabOrderModel.fromJson(doc.data()!);
2053:         if (model.rideType == "intercity") {
2054:           orderModel = model;
2055:         }
2056:       }
2057:     } catch (e, s) {
2058:       print('getCabOrderById error: $e\n$s');
2059:       return null;
2060:     }
2061:     return orderModel;
2062:   }
2063: 
2064:   static Future<UserModel?> getDriver(String userId) async {
2065:     UserModel? userModel;
2066: 
2067:     try {
2068:       final doc = await fireStore.collection(CollectionName.users).doc(userId).get();
2069: 
2070:       if (doc.data() != null) {

2063: 
2064:   static Future<UserModel?> getDriver(String userId) async {
2065:     UserModel? userModel;
2066: 
2067:     try {
2068:       final doc = await fireStore.collection(CollectionName.users).doc(userId).get();
2069: 
2070:       if (doc.data() != null) {
2071:         userModel = UserModel.fromJson(doc.data()!);
2072:       }
2073:     } catch (e) {
2074:       log("getDriver error: $e");
2075:     }
2076: 
2077:     return userModel;
2078:   }
2079: 
2080:   // static Future<List<CabOrderModel>> getCabDriverOrders() async {
2081:   //   List<CabOrderModel> ordersList = [];
2082:   //   await fireStore.collection(CollectionName.rides).where('authorID', isEqualTo: FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true).get().then((value) {
2083:   //     for (var element in value.docs) {
2084:   //       CabOrderModel orderModel = CabOrderModel.fromJson(element.data());
2085:   //       ordersList.add(orderModel);
2086:   //     }
2087:   //   });
2088:   //   return ordersList;
2089:   // }

2076: 
2077:     return userModel;
2078:   }
2079: 
2080:   // static Future<List<CabOrderModel>> getCabDriverOrders() async {
2081:   //   List<CabOrderModel> ordersList = [];
2082:   //   await fireStore.collection(CollectionName.rides).where('authorID', isEqualTo: FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true).get().then((value) {
2083:   //     for (var element in value.docs) {
2084:   //       CabOrderModel orderModel = CabOrderModel.fromJson(element.data());
2085:   //       ordersList.add(orderModel);
2086:   //     }
2087:   //   });
2088:   //   return ordersList;
2089:   // }
2090: 
2091:   static Stream<List<CabOrderModel>> getCabDriverOrders() {
2092:     return fireStore
2093:         .collection(CollectionName.rides)
2094:         .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
2095:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
2096:         .orderBy('createdAt', descending: true)
2097:         .snapshots()
2098:         .map((query) {
2099:           List<CabOrderModel> ordersList = [];
2100:           for (var element in query.docs) {
2101:             ordersList.add(CabOrderModel.fromJson(element.data()));
2102:           }

2087:   //   });
2088:   //   return ordersList;
2089:   // }
2090: 
2091:   static Stream<List<CabOrderModel>> getCabDriverOrders() {
2092:     return fireStore
2093:         .collection(CollectionName.rides)
2094:         .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
2095:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
2096:         .orderBy('createdAt', descending: true)
2097:         .snapshots()
2098:         .map((query) {
2099:           List<CabOrderModel> ordersList = [];
2100:           for (var element in query.docs) {
2101:             ordersList.add(CabOrderModel.fromJson(element.data()));
2102:           }
2103:           return ordersList;
2104:         });
2105:   }
2106: 
2107:   static Future<List<CategoryModel>> getOnDemandCategory() async {
2108:     List<CategoryModel> categoryList = [];
2109:     await fireStore
2110:         .collection(CollectionName.providerCategories)
2111:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
2112:         .where("level", isEqualTo: 0)
2113:         .where("publish", isEqualTo: true)

2093:         .collection(CollectionName.rides)
2094:         .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
2095:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
2096:         .orderBy('createdAt', descending: true)
2097:         .snapshots()
2098:         .map((query) {
2099:           List<CabOrderModel> ordersList = [];
2100:           for (var element in query.docs) {
2101:             ordersList.add(CabOrderModel.fromJson(element.data()));
2102:           }
2103:           return ordersList;
2104:         });
2105:   }
2106: 
2107:   static Future<List<CategoryModel>> getOnDemandCategory() async {
2108:     List<CategoryModel> categoryList = [];
2109:     await fireStore
2110:         .collection(CollectionName.providerCategories)
2111:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
2112:         .where("level", isEqualTo: 0)
2113:         .where("publish", isEqualTo: true)
2114:         .get()
2115:         .then((value) {
2116:           for (var element in value.docs) {
2117:             CategoryModel orderModel = CategoryModel.fromJson(element.data());
2118:             categoryList.add(orderModel);
2119:           }

2103:           return ordersList;
2104:         });
2105:   }
2106: 
2107:   static Future<List<CategoryModel>> getOnDemandCategory() async {
2108:     List<CategoryModel> categoryList = [];
2109:     await fireStore
2110:         .collection(CollectionName.providerCategories)
2111:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
2112:         .where("level", isEqualTo: 0)
2113:         .where("publish", isEqualTo: true)
2114:         .get()
2115:         .then((value) {
2116:           for (var element in value.docs) {
2117:             CategoryModel orderModel = CategoryModel.fromJson(element.data());
2118:             categoryList.add(orderModel);
2119:           }
2120:         });
2121:     return categoryList;
2122:   }
2123: 
2124:   static Future<CategoryModel?> getCategoryById(String categoryId) async {
2125:     CategoryModel? categoryModel;
2126:     await fireStore.collection(CollectionName.providerCategories).doc(categoryId).get().then((value) {
2127:       if (value.exists) {
2128:         categoryModel = CategoryModel.fromJson(value.data()!);
2129:       }

2109:     await fireStore
2110:         .collection(CollectionName.providerCategories)
2111:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
2112:         .where("level", isEqualTo: 0)
2113:         .where("publish", isEqualTo: true)
2114:         .get()
2115:         .then((value) {
2116:           for (var element in value.docs) {
2117:             CategoryModel orderModel = CategoryModel.fromJson(element.data());
2118:             categoryList.add(orderModel);
2119:           }
2120:         });
2121:     return categoryList;
2122:   }
2123: 
2124:   static Future<CategoryModel?> getCategoryById(String categoryId) async {
2125:     CategoryModel? categoryModel;
2126:     await fireStore.collection(CollectionName.providerCategories).doc(categoryId).get().then((value) {
2127:       if (value.exists) {
2128:         categoryModel = CategoryModel.fromJson(value.data()!);
2129:       }
2130:     });
2131:     return categoryModel;
2132:   }
2133: 
2134:   static Future<List<ProviderServiceModel>> getProviderFuture({String categoryId = ''}) async {
2135:     List<ProviderServiceModel> providerList = [];

2120:         });
2121:     return categoryList;
2122:   }
2123: 
2124:   static Future<CategoryModel?> getCategoryById(String categoryId) async {
2125:     CategoryModel? categoryModel;
2126:     await fireStore.collection(CollectionName.providerCategories).doc(categoryId).get().then((value) {
2127:       if (value.exists) {
2128:         categoryModel = CategoryModel.fromJson(value.data()!);
2129:       }
2130:     });
2131:     return categoryModel;
2132:   }
2133: 
2134:   static Future<List<ProviderServiceModel>> getProviderFuture({String categoryId = ''}) async {
2135:     List<ProviderServiceModel> providerList = [];
2136: 
2137:     try {
2138:       Query<Map<String, dynamic>> collectionReference;
2139: 
2140:       if (categoryId.isNotEmpty) {
2141:         collectionReference = fireStore
2142:             .collection(CollectionName.providersServices)
2143:             .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
2144:             .where('categoryId', isEqualTo: categoryId)
2145:             .where("publish", isEqualTo: true);
2146:       } else {

2130:     });
2131:     return categoryModel;
2132:   }
2133: 
2134:   static Future<List<ProviderServiceModel>> getProviderFuture({String categoryId = ''}) async {
2135:     List<ProviderServiceModel> providerList = [];
2136: 
2137:     try {
2138:       Query<Map<String, dynamic>> collectionReference;
2139: 
2140:       if (categoryId.isNotEmpty) {
2141:         collectionReference = fireStore
2142:             .collection(CollectionName.providersServices)
2143:             .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
2144:             .where('categoryId', isEqualTo: categoryId)
2145:             .where("publish", isEqualTo: true);
2146:       } else {
2147:         collectionReference = fireStore.collection(CollectionName.providersServices).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where("publish", isEqualTo: true);
2148:       }
2149: 
2150:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
2151: 
2152:       String field = 'g';
2153: 
2154:       await Geoflutterfire()
2155:           .collection(collectionRef: collectionReference)
2156:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)

2135:     List<ProviderServiceModel> providerList = [];
2136: 
2137:     try {
2138:       Query<Map<String, dynamic>> collectionReference;
2139: 
2140:       if (categoryId.isNotEmpty) {
2141:         collectionReference = fireStore
2142:             .collection(CollectionName.providersServices)
2143:             .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
2144:             .where('categoryId', isEqualTo: categoryId)
2145:             .where("publish", isEqualTo: true);
2146:       } else {
2147:         collectionReference = fireStore.collection(CollectionName.providersServices).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where("publish", isEqualTo: true);
2148:       }
2149: 
2150:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
2151: 
2152:       String field = 'g';
2153: 
2154:       await Geoflutterfire()
2155:           .collection(collectionRef: collectionReference)
2156:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
2157:           .first
2158:           .then((documentList) {
2159:             for (var document in documentList) {
2160:               ProviderServiceModel providerServiceModel = ProviderServiceModel.fromJson(document.data() as Map<String, dynamic>);
2161: 

2139: 
2140:       if (categoryId.isNotEmpty) {
2141:         collectionReference = fireStore
2142:             .collection(CollectionName.providersServices)
2143:             .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
2144:             .where('categoryId', isEqualTo: categoryId)
2145:             .where("publish", isEqualTo: true);
2146:       } else {
2147:         collectionReference = fireStore.collection(CollectionName.providersServices).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where("publish", isEqualTo: true);
2148:       }
2149: 
2150:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
2151: 
2152:       String field = 'g';
2153: 
2154:       await Geoflutterfire()
2155:           .collection(collectionRef: collectionReference)
2156:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
2157:           .first
2158:           .then((documentList) {
2159:             for (var document in documentList) {
2160:               ProviderServiceModel providerServiceModel = ProviderServiceModel.fromJson(document.data() as Map<String, dynamic>);
2161: 
2162:               log(
2163:                 ":: isExpireDate(expiryDay :: ${Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate)}",
2164:               );
2165: 

2148:       }
2149: 
2150:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
2151: 
2152:       String field = 'g';
2153: 
2154:       await Geoflutterfire()
2155:           .collection(collectionRef: collectionReference)
2156:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
2157:           .first
2158:           .then((documentList) {
2159:             for (var document in documentList) {
2160:               ProviderServiceModel providerServiceModel = ProviderServiceModel.fromJson(document.data() as Map<String, dynamic>);
2161: 
2162:               log(
2163:                 ":: isExpireDate(expiryDay :: ${Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate)}",
2164:               );
2165: 
2166:               if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
2167:                 if (providerServiceModel.subscriptionPlan != null &&
2168:                     Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate) == false) {
2169:                   if (providerServiceModel.subscriptionTotalOrders == "-1" || providerServiceModel.subscriptionTotalOrders != '0') {
2170:                     providerList.add(providerServiceModel);
2171:                   }
2172:                 }
2173:               } else {
2174:                 providerList.add(providerServiceModel);

2152:       String field = 'g';
2153: 
2154:       await Geoflutterfire()
2155:           .collection(collectionRef: collectionReference)
2156:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
2157:           .first
2158:           .then((documentList) {
2159:             for (var document in documentList) {
2160:               ProviderServiceModel providerServiceModel = ProviderServiceModel.fromJson(document.data() as Map<String, dynamic>);
2161: 
2162:               log(
2163:                 ":: isExpireDate(expiryDay :: ${Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate)}",
2164:               );
2165: 
2166:               if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
2167:                 if (providerServiceModel.subscriptionPlan != null &&
2168:                     Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate) == false) {
2169:                   if (providerServiceModel.subscriptionTotalOrders == "-1" || providerServiceModel.subscriptionTotalOrders != '0') {
2170:                     providerList.add(providerServiceModel);
2171:                   }
2172:                 }
2173:               } else {
2174:                 providerList.add(providerServiceModel);
2175:               }
2176:             }
2177:           })
2178:           .catchError((error) {

2158:           .then((documentList) {
2159:             for (var document in documentList) {
2160:               ProviderServiceModel providerServiceModel = ProviderServiceModel.fromJson(document.data() as Map<String, dynamic>);
2161: 
2162:               log(
2163:                 ":: isExpireDate(expiryDay :: ${Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate)}",
2164:               );
2165: 
2166:               if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
2167:                 if (providerServiceModel.subscriptionPlan != null &&
2168:                     Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate) == false) {
2169:                   if (providerServiceModel.subscriptionTotalOrders == "-1" || providerServiceModel.subscriptionTotalOrders != '0') {
2170:                     providerList.add(providerServiceModel);
2171:                   }
2172:                 }
2173:               } else {
2174:                 providerList.add(providerServiceModel);
2175:               }
2176:             }
2177:           })
2178:           .catchError((error) {
2179:             log('Error fetching providers: $error');
2180:           });
2181:     } catch (e) {
2182:       log('Error in getProviderFuture: $e');
2183:     }
2184: 

2184: 
2185:     return providerList;
2186:   }
2187: 
2188:   static Future<List<ProviderServiceModel>> getAllProviderServiceByAuthorId(String authId) async {
2189:     List<ProviderServiceModel> providerService = [];
2190:     await fireStore.collection(CollectionName.providersServices).where('author', isEqualTo: authId).where('publish', isEqualTo: true).orderBy('createdAt', descending: false).get().then((value) {
2191:       for (var element in value.docs) {
2192:         ProviderServiceModel orderModel = ProviderServiceModel.fromJson(element.data());
2193:         providerService.add(orderModel);
2194:       }
2195:     });
2196:     return providerService;
2197:   }
2198: 
2199:   static Future<CategoryModel?> getSubCategoryById(String categoryId) async {
2200:     CategoryModel? categoryModel;
2201:     await fireStore.collection(CollectionName.providerCategories).doc(categoryId).get().then((value) {
2202:       if (value.exists) {
2203:         categoryModel = CategoryModel.fromJson(value.data()!);
2204:       }
2205:     });
2206:     return categoryModel;
2207:   }
2208: 
2209:   static Future<List<RatingModel>> getReviewByProviderServiceId(String serviceId) async {
2210:     List<RatingModel> providerReview = [];

2195:     });
2196:     return providerService;
2197:   }
2198: 
2199:   static Future<CategoryModel?> getSubCategoryById(String categoryId) async {
2200:     CategoryModel? categoryModel;
2201:     await fireStore.collection(CollectionName.providerCategories).doc(categoryId).get().then((value) {
2202:       if (value.exists) {
2203:         categoryModel = CategoryModel.fromJson(value.data()!);
2204:       }
2205:     });
2206:     return categoryModel;
2207:   }
2208: 
2209:   static Future<List<RatingModel>> getReviewByProviderServiceId(String serviceId) async {
2210:     List<RatingModel> providerReview = [];
2211:     await fireStore.collection(CollectionName.itemsReview).where('productId', isEqualTo: serviceId).get().then((value) {
2212:       for (var element in value.docs) {
2213:         RatingModel orderModel = RatingModel.fromJson(element.data());
2214:         providerReview.add(orderModel);
2215:       }
2216:     });
2217:     return providerReview;
2218:   }
2219: 
2220:   static Future<List<ProviderServiceModel>> getProviderServiceByProviderId({required String providerId}) async {
2221:     List<ProviderServiceModel> providerList = [];

2205:     });
2206:     return categoryModel;
2207:   }
2208: 
2209:   static Future<List<RatingModel>> getReviewByProviderServiceId(String serviceId) async {
2210:     List<RatingModel> providerReview = [];
2211:     await fireStore.collection(CollectionName.itemsReview).where('productId', isEqualTo: serviceId).get().then((value) {
2212:       for (var element in value.docs) {
2213:         RatingModel orderModel = RatingModel.fromJson(element.data());
2214:         providerReview.add(orderModel);
2215:       }
2216:     });
2217:     return providerReview;
2218:   }
2219: 
2220:   static Future<List<ProviderServiceModel>> getProviderServiceByProviderId({required String providerId}) async {
2221:     List<ProviderServiceModel> providerList = [];
2222: 
2223:     try {
2224:       final collectionReference = fireStore
2225:           .collection(CollectionName.providersServices)
2226:           .where("author", isEqualTo: providerId)
2227:           .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
2228:           .where("publish", isEqualTo: true);
2229: 
2230:       // Geolocation center point
2231:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);

2219: 
2220:   static Future<List<ProviderServiceModel>> getProviderServiceByProviderId({required String providerId}) async {
2221:     List<ProviderServiceModel> providerList = [];
2222: 
2223:     try {
2224:       final collectionReference = fireStore
2225:           .collection(CollectionName.providersServices)
2226:           .where("author", isEqualTo: providerId)
2227:           .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
2228:           .where("publish", isEqualTo: true);
2229: 
2230:       // Geolocation center point
2231:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
2232: 
2233:       String field = 'g';
2234: 
2235:       // Query within radius
2236:       await Geoflutterfire()
2237:           .collection(collectionRef: collectionReference)
2238:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
2239:           .first
2240:           .then((documentList) {
2241:             for (var document in documentList) {
2242:               ProviderServiceModel providerServiceModel = ProviderServiceModel.fromJson(document.data() as Map<String, dynamic>);
2243: 
2244:               log(
2245:                 ":: isExpireDate(expiryDay :: ${Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate)}",

2230:       // Geolocation center point
2231:       GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
2232: 
2233:       String field = 'g';
2234: 
2235:       // Query within radius
2236:       await Geoflutterfire()
2237:           .collection(collectionRef: collectionReference)
2238:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
2239:           .first
2240:           .then((documentList) {
2241:             for (var document in documentList) {
2242:               ProviderServiceModel providerServiceModel = ProviderServiceModel.fromJson(document.data() as Map<String, dynamic>);
2243: 
2244:               log(
2245:                 ":: isExpireDate(expiryDay :: ${Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate)}",
2246:               );
2247: 
2248:               //Subscription & Commission check
2249:               if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
2250:                 if (providerServiceModel.subscriptionPlan != null &&
2251:                     Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate) == false) {
2252:                   if (providerServiceModel.subscriptionTotalOrders == "-1" || providerServiceModel.subscriptionTotalOrders != '0') {
2253:                     providerList.add(providerServiceModel);
2254:                   }
2255:                 }
2256:               } else {

2234: 
2235:       // Query within radius
2236:       await Geoflutterfire()
2237:           .collection(collectionRef: collectionReference)
2238:           .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
2239:           .first
2240:           .then((documentList) {
2241:             for (var document in documentList) {
2242:               ProviderServiceModel providerServiceModel = ProviderServiceModel.fromJson(document.data() as Map<String, dynamic>);
2243: 
2244:               log(
2245:                 ":: isExpireDate(expiryDay :: ${Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate)}",
2246:               );
2247: 
2248:               //Subscription & Commission check
2249:               if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
2250:                 if (providerServiceModel.subscriptionPlan != null &&
2251:                     Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate) == false) {
2252:                   if (providerServiceModel.subscriptionTotalOrders == "-1" || providerServiceModel.subscriptionTotalOrders != '0') {
2253:                     providerList.add(providerServiceModel);
2254:                   }
2255:                 }
2256:               } else {
2257:                 providerList.add(providerServiceModel);
2258:               }
2259:             }
2260:           })

2240:           .then((documentList) {
2241:             for (var document in documentList) {
2242:               ProviderServiceModel providerServiceModel = ProviderServiceModel.fromJson(document.data() as Map<String, dynamic>);
2243: 
2244:               log(
2245:                 ":: isExpireDate(expiryDay :: ${Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate)}",
2246:               );
2247: 
2248:               //Subscription & Commission check
2249:               if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
2250:                 if (providerServiceModel.subscriptionPlan != null &&
2251:                     Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate) == false) {
2252:                   if (providerServiceModel.subscriptionTotalOrders == "-1" || providerServiceModel.subscriptionTotalOrders != '0') {
2253:                     providerList.add(providerServiceModel);
2254:                   }
2255:                 }
2256:               } else {
2257:                 providerList.add(providerServiceModel);
2258:               }
2259:             }
2260:           })
2261:           .catchError((error) {
2262:             log('Error fetching provider services: $error');
2263:           });
2264:     } catch (e) {
2265:       log('Error in getProviderServiceByProviderId: $e');
2266:     }

2241:             for (var document in documentList) {
2242:               ProviderServiceModel providerServiceModel = ProviderServiceModel.fromJson(document.data() as Map<String, dynamic>);
2243: 
2244:               log(
2245:                 ":: isExpireDate(expiryDay :: ${Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate)}",
2246:               );
2247: 
2248:               //Subscription & Commission check
2249:               if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
2250:                 if (providerServiceModel.subscriptionPlan != null &&
2251:                     Constant.isExpireDate(expiryDay: (providerServiceModel.subscriptionPlan?.expiryDay == '-1'), subscriptionExpiryDate: providerServiceModel.subscriptionExpiryDate) == false) {
2252:                   if (providerServiceModel.subscriptionTotalOrders == "-1" || providerServiceModel.subscriptionTotalOrders != '0') {
2253:                     providerList.add(providerServiceModel);
2254:                   }
2255:                 }
2256:               } else {
2257:                 providerList.add(providerServiceModel);
2258:               }
2259:             }
2260:           })
2261:           .catchError((error) {
2262:             log('Error fetching provider services: $error');
2263:           });
2264:     } catch (e) {
2265:       log('Error in getProviderServiceByProviderId: $e');
2266:     }
2267: 

2269:   }
2270: 
2271:   static Future<List<CouponModel>> getProviderCoupon(String providerId) async {
2272:     List<CouponModel> offers = [];
2273:     await fireStore
2274:         .collection(CollectionName.providersCoupons)
2275:         .where('providerId', isEqualTo: providerId)
2276:         .where("isEnabled", isEqualTo: true)
2277:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
2278:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
2279:         .get()
2280:         .then((value) {
2281:           for (var element in value.docs) {
2282:             CouponModel favouriteOndemandServiceModel = CouponModel.fromJson(element.data());
2283:             offers.add(favouriteOndemandServiceModel);
2284:           }
2285:         });
2286:     return offers;
2287:   }
2288: 
2289:   static Future<List<CouponModel>> getProviderCouponAfterExpire(String providerId) async {
2290:     List<CouponModel> coupon = [];
2291:     await fireStore
2292:         .collection(CollectionName.providersCoupons)
2293:         .where('providerId', isEqualTo: providerId)
2294:         .where('isEnabled', isEqualTo: true)
2295:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)

2274:         .collection(CollectionName.providersCoupons)
2275:         .where('providerId', isEqualTo: providerId)
2276:         .where("isEnabled", isEqualTo: true)
2277:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
2278:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
2279:         .get()
2280:         .then((value) {
2281:           for (var element in value.docs) {
2282:             CouponModel favouriteOndemandServiceModel = CouponModel.fromJson(element.data());
2283:             offers.add(favouriteOndemandServiceModel);
2284:           }
2285:         });
2286:     return offers;
2287:   }
2288: 
2289:   static Future<List<CouponModel>> getProviderCouponAfterExpire(String providerId) async {
2290:     List<CouponModel> coupon = [];
2291:     await fireStore
2292:         .collection(CollectionName.providersCoupons)
2293:         .where('providerId', isEqualTo: providerId)
2294:         .where('isEnabled', isEqualTo: true)
2295:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
2296:         .where('isPublic', isEqualTo: true)
2297:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
2298:         .get()
2299:         .then((value) {
2300:           for (var element in value.docs) {

2287:   }
2288: 
2289:   static Future<List<CouponModel>> getProviderCouponAfterExpire(String providerId) async {
2290:     List<CouponModel> coupon = [];
2291:     await fireStore
2292:         .collection(CollectionName.providersCoupons)
2293:         .where('providerId', isEqualTo: providerId)
2294:         .where('isEnabled', isEqualTo: true)
2295:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
2296:         .where('isPublic', isEqualTo: true)
2297:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
2298:         .get()
2299:         .then((value) {
2300:           for (var element in value.docs) {
2301:             CouponModel favouriteOndemandServiceModel = CouponModel.fromJson(element.data());
2302:             coupon.add(favouriteOndemandServiceModel);
2303:           }
2304:         });
2305:     return coupon;
2306:   }
2307: 
2308:   static Future<OnProviderOrderModel> onDemandOrderPlace(OnProviderOrderModel orderModel, double totalAmount) async {
2309:     DocumentReference documentReference;
2310:     if (orderModel.id.isEmpty) {
2311:       documentReference = fireStore.collection(CollectionName.providerOrders).doc();
2312:       orderModel.id = documentReference.id;
2313:     } else {

2293:         .where('providerId', isEqualTo: providerId)
2294:         .where('isEnabled', isEqualTo: true)
2295:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
2296:         .where('isPublic', isEqualTo: true)
2297:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
2298:         .get()
2299:         .then((value) {
2300:           for (var element in value.docs) {
2301:             CouponModel favouriteOndemandServiceModel = CouponModel.fromJson(element.data());
2302:             coupon.add(favouriteOndemandServiceModel);
2303:           }
2304:         });
2305:     return coupon;
2306:   }
2307: 
2308:   static Future<OnProviderOrderModel> onDemandOrderPlace(OnProviderOrderModel orderModel, double totalAmount) async {
2309:     DocumentReference documentReference;
2310:     if (orderModel.id.isEmpty) {
2311:       documentReference = fireStore.collection(CollectionName.providerOrders).doc();
2312:       orderModel.id = documentReference.id;
2313:     } else {
2314:       documentReference = fireStore.collection(CollectionName.providerOrders).doc(orderModel.id);
2315:     }
2316:     await documentReference.set(orderModel.toJson());
2317: 
2318:     return orderModel;
2319:   }

2308:   static Future<OnProviderOrderModel> onDemandOrderPlace(OnProviderOrderModel orderModel, double totalAmount) async {
2309:     DocumentReference documentReference;
2310:     if (orderModel.id.isEmpty) {
2311:       documentReference = fireStore.collection(CollectionName.providerOrders).doc();
2312:       orderModel.id = documentReference.id;
2313:     } else {
2314:       documentReference = fireStore.collection(CollectionName.providerOrders).doc(orderModel.id);
2315:     }
2316:     await documentReference.set(orderModel.toJson());
2317: 
2318:     return orderModel;
2319:   }
2320: 
2321:   static Future<void> sendOrderOnDemandServiceEmail({required OnProviderOrderModel orderModel}) async {
2322:     try {
2323:       String firstHTML = """
2324:        <table style="width: 100%; border-collapse: collapse; border: 1px solid rgb(0, 0, 0);">
2325:     <thead>
2326:         <tr>
2327:             <th style="text-align: left; border: 1px solid rgb(0, 0, 0);">Product Name<br></th>
2328:             <th style="text-align: left; border: 1px solid rgb(0, 0, 0);">Quantity<br></th>
2329:             <th style="text-align: left; border: 1px solid rgb(0, 0, 0);">Price<br></th>
2330:             <th style="text-align: left; border: 1px solid rgb(0, 0, 0);">Total<br></th>
2331:         </tr>
2332:     </thead>
2333:     <tbody>
2334:     """;

2401: 
2402:   static Future<void> updateOnDemandOrder(OnProviderOrderModel orderModel) async {
2403:     if (orderModel.id.isEmpty) {
2404:       throw Exception("Order ID cannot be empty");
2405:     }
2406: 
2407:     try {
2408:       final docRef = fireStore.collection(CollectionName.providerOrders).doc(orderModel.id);
2409:       await docRef.set(orderModel.toJson(), SetOptions(merge: true));
2410:     } catch (e) {
2411:       print("Error updating OnDemand order: $e");
2412:       rethrow;
2413:     }
2414:   }
2415: 
2416:   // static Future<void> updateOnDemandOrder(OnProviderOrderModel orderModel) async {
2417:   //   if (orderModel.id.isEmpty) {
2418:   //     throw Exception("Order ID cannot be empty");
2419:   //   }
2420:   //
2421:   //   try {
2422:   //     final docRef = fireStore.collection(CollectionName.providerOrders).doc(orderModel.id);
2423:   //
2424:   //     // Convert model to map
2425:   //     final Map<String, dynamic> data = orderModel.toJson();
2426:   //
2427:   //     // Remove null values so we only update non-null fields

2417:   //   if (orderModel.id.isEmpty) {
2418:   //     throw Exception("Order ID cannot be empty");
2419:   //   }
2420:   //
2421:   //   try {
2422:   //     final docRef = fireStore.collection(CollectionName.providerOrders).doc(orderModel.id);
2423:   //
2424:   //     // Convert model to map
2425:   //     final Map<String, dynamic> data = orderModel.toJson();
2426:   //
2427:   //     // Remove null values so we only update non-null fields
2428:   //     final Map<String, dynamic> updateData = {};
2429:   //     data.forEach((key, value) {
2430:   //       if (value != null) {
2431:   //         updateData[key] = value;
2432:   //       }
2433:   //     });
2434:   //
2435:   //     if (updateData.isNotEmpty) {
2436:   //       await docRef.set(updateData, SetOptions(merge: true));
2437:   //       print("Order ${orderModel.id} updated dynamically: $updateData");
2438:   //     } else {
2439:   //       print("No fields to update for order ${orderModel.id}");
2440:   //     }
2441:   //   } catch (e) {
2442:   //     print("Error updating OnDemand order: $e");
2443:   //     rethrow;

2420:   //
2421:   //   try {
2422:   //     final docRef = fireStore.collection(CollectionName.providerOrders).doc(orderModel.id);
2423:   //
2424:   //     // Convert model to map
2425:   //     final Map<String, dynamic> data = orderModel.toJson();
2426:   //
2427:   //     // Remove null values so we only update non-null fields
2428:   //     final Map<String, dynamic> updateData = {};
2429:   //     data.forEach((key, value) {
2430:   //       if (value != null) {
2431:   //         updateData[key] = value;
2432:   //       }
2433:   //     });
2434:   //
2435:   //     if (updateData.isNotEmpty) {
2436:   //       await docRef.set(updateData, SetOptions(merge: true));
2437:   //       print("Order ${orderModel.id} updated dynamically: $updateData");
2438:   //     } else {
2439:   //       print("No fields to update for order ${orderModel.id}");
2440:   //     }
2441:   //   } catch (e) {
2442:   //     print("Error updating OnDemand order: $e");
2443:   //     rethrow;
2444:   //   }
2445:   // }
2446: 

2444:   //   }
2445:   // }
2446: 
2447:   // static Future<List<OnProviderOrderModel>> getProviderOrders() async {
2448:   //   List<OnProviderOrderModel> ordersList = [];
2449:   //   await fireStore
2450:   //       .collection(CollectionName.providerOrders)
2451:   //       .where("authorID", isEqualTo: FireStoreUtils.getCurrentUid())
2452:   //       .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id.toString())
2453:   //       .orderBy("createdAt", descending: true)
2454:   //       .get()
2455:   //       .then((value) {
2456:   //         for (var element in value.docs) {
2457:   //           OnProviderOrderModel orderModel = OnProviderOrderModel.fromJson(element.data());
2458:   //           ordersList.add(orderModel);
2459:   //         }
2460:   //       });
2461:   //   return ordersList;
2462:   // }
2463: 
2464:   static Stream<List<OnProviderOrderModel>> getProviderOrdersStream() {
2465:     return fireStore
2466:         .collection(CollectionName.providerOrders)
2467:         .where("authorID", isEqualTo: getCurrentUid())
2468:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id.toString())
2469:         .orderBy("createdAt", descending: true)
2470:         .snapshots()

2449:   //   await fireStore
2450:   //       .collection(CollectionName.providerOrders)
2451:   //       .where("authorID", isEqualTo: FireStoreUtils.getCurrentUid())
2452:   //       .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id.toString())
2453:   //       .orderBy("createdAt", descending: true)
2454:   //       .get()
2455:   //       .then((value) {
2456:   //         for (var element in value.docs) {
2457:   //           OnProviderOrderModel orderModel = OnProviderOrderModel.fromJson(element.data());
2458:   //           ordersList.add(orderModel);
2459:   //         }
2460:   //       });
2461:   //   return ordersList;
2462:   // }
2463: 
2464:   static Stream<List<OnProviderOrderModel>> getProviderOrdersStream() {
2465:     return fireStore
2466:         .collection(CollectionName.providerOrders)
2467:         .where("authorID", isEqualTo: getCurrentUid())
2468:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id.toString())
2469:         .orderBy("createdAt", descending: true)
2470:         .snapshots()
2471:         .map((snapshot) => snapshot.docs.map((doc) => OnProviderOrderModel.fromJson(doc.data())).toList());
2472:   }
2473: 
2474:   static Future<WorkerModel?> getWorker(String id) async {
2475:     try {

2460:   //       });
2461:   //   return ordersList;
2462:   // }
2463: 
2464:   static Stream<List<OnProviderOrderModel>> getProviderOrdersStream() {
2465:     return fireStore
2466:         .collection(CollectionName.providerOrders)
2467:         .where("authorID", isEqualTo: getCurrentUid())
2468:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id.toString())
2469:         .orderBy("createdAt", descending: true)
2470:         .snapshots()
2471:         .map((snapshot) => snapshot.docs.map((doc) => OnProviderOrderModel.fromJson(doc.data())).toList());
2472:   }
2473: 
2474:   static Future<WorkerModel?> getWorker(String id) async {
2475:     try {
2476:       DocumentSnapshot<Map<String, dynamic>> doc = await fireStore.collection(CollectionName.providersWorkers).doc(id).get();
2477: 
2478:       if (doc.exists && doc.data() != null) {
2479:         return WorkerModel.fromJson(doc.data()!);
2480:       }
2481:     } catch (e) {
2482:       print("FireStoreUtils.getWorker error: $e");
2483:     }
2484:     return null;
2485:   }
2486: 

2463: 
2464:   static Stream<List<OnProviderOrderModel>> getProviderOrdersStream() {
2465:     return fireStore
2466:         .collection(CollectionName.providerOrders)
2467:         .where("authorID", isEqualTo: getCurrentUid())
2468:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id.toString())
2469:         .orderBy("createdAt", descending: true)
2470:         .snapshots()
2471:         .map((snapshot) => snapshot.docs.map((doc) => OnProviderOrderModel.fromJson(doc.data())).toList());
2472:   }
2473: 
2474:   static Future<WorkerModel?> getWorker(String id) async {
2475:     try {
2476:       DocumentSnapshot<Map<String, dynamic>> doc = await fireStore.collection(CollectionName.providersWorkers).doc(id).get();
2477: 
2478:       if (doc.exists && doc.data() != null) {
2479:         return WorkerModel.fromJson(doc.data()!);
2480:       }
2481:     } catch (e) {
2482:       print("FireStoreUtils.getWorker error: $e");
2483:     }
2484:     return null;
2485:   }
2486: 
2487:   static Future<OnProviderOrderModel?> getProviderOrderById(String orderId) async {
2488:     OnProviderOrderModel? orderModel;
2489:     await fireStore.collection(CollectionName.providerOrders).doc(orderId).get().then((value) {

2468:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id.toString())
2469:         .orderBy("createdAt", descending: true)
2470:         .snapshots()
2471:         .map((snapshot) => snapshot.docs.map((doc) => OnProviderOrderModel.fromJson(doc.data())).toList());
2472:   }
2473: 
2474:   static Future<WorkerModel?> getWorker(String id) async {
2475:     try {
2476:       DocumentSnapshot<Map<String, dynamic>> doc = await fireStore.collection(CollectionName.providersWorkers).doc(id).get();
2477: 
2478:       if (doc.exists && doc.data() != null) {
2479:         return WorkerModel.fromJson(doc.data()!);
2480:       }
2481:     } catch (e) {
2482:       print("FireStoreUtils.getWorker error: $e");
2483:     }
2484:     return null;
2485:   }
2486: 
2487:   static Future<OnProviderOrderModel?> getProviderOrderById(String orderId) async {
2488:     OnProviderOrderModel? orderModel;
2489:     await fireStore.collection(CollectionName.providerOrders).doc(orderId).get().then((value) {
2490:       if (value.exists) {
2491:         orderModel = OnProviderOrderModel.fromJson(value.data()!);
2492:       }
2493:     });
2494:     return orderModel;

2471:         .map((snapshot) => snapshot.docs.map((doc) => OnProviderOrderModel.fromJson(doc.data())).toList());
2472:   }
2473: 
2474:   static Future<WorkerModel?> getWorker(String id) async {
2475:     try {
2476:       DocumentSnapshot<Map<String, dynamic>> doc = await fireStore.collection(CollectionName.providersWorkers).doc(id).get();
2477: 
2478:       if (doc.exists && doc.data() != null) {
2479:         return WorkerModel.fromJson(doc.data()!);
2480:       }
2481:     } catch (e) {
2482:       print("FireStoreUtils.getWorker error: $e");
2483:     }
2484:     return null;
2485:   }
2486: 
2487:   static Future<OnProviderOrderModel?> getProviderOrderById(String orderId) async {
2488:     OnProviderOrderModel? orderModel;
2489:     await fireStore.collection(CollectionName.providerOrders).doc(orderId).get().then((value) {
2490:       if (value.exists) {
2491:         orderModel = OnProviderOrderModel.fromJson(value.data()!);
2492:       }
2493:     });
2494:     return orderModel;
2495:   }
2496: 
2497:   static Future<RatingModel?> getReviewsByProviderID(String orderId, String providerId) async {

2483:     }
2484:     return null;
2485:   }
2486: 
2487:   static Future<OnProviderOrderModel?> getProviderOrderById(String orderId) async {
2488:     OnProviderOrderModel? orderModel;
2489:     await fireStore.collection(CollectionName.providerOrders).doc(orderId).get().then((value) {
2490:       if (value.exists) {
2491:         orderModel = OnProviderOrderModel.fromJson(value.data()!);
2492:       }
2493:     });
2494:     return orderModel;
2495:   }
2496: 
2497:   static Future<RatingModel?> getReviewsByProviderID(String orderId, String providerId) async {
2498:     RatingModel? ratingModel;
2499: 
2500:     await fireStore
2501:         .collection(CollectionName.itemsReview)
2502:         .where('orderid', isEqualTo: orderId)
2503:         .where('VendorId', isEqualTo: providerId)
2504:         .limit(1)
2505:         .get()
2506:         .then((snapshot) {
2507:           if (snapshot.docs.isNotEmpty) {
2508:             ratingModel = RatingModel.fromJson(snapshot.docs.first.data());
2509:           }

2500:     await fireStore
2501:         .collection(CollectionName.itemsReview)
2502:         .where('orderid', isEqualTo: orderId)
2503:         .where('VendorId', isEqualTo: providerId)
2504:         .limit(1)
2505:         .get()
2506:         .then((snapshot) {
2507:           if (snapshot.docs.isNotEmpty) {
2508:             ratingModel = RatingModel.fromJson(snapshot.docs.first.data());
2509:           }
2510:         })
2511:         .catchError((error) {
2512:           print('Error fetching review for provider: $error');
2513:         });
2514: 
2515:     return ratingModel;
2516:   }
2517: 
2518:   static Future<RatingModel?> getReviewsByWorkerID(String orderId, String workerId) async {
2519:     RatingModel? ratingModel;
2520: 
2521:     await fireStore
2522:         .collection(CollectionName.itemsReview)
2523:         .where('orderid', isEqualTo: orderId)
2524:         .where('driverId', isEqualTo: workerId)
2525:         .limit(1)
2526:         .get()

2521:     await fireStore
2522:         .collection(CollectionName.itemsReview)
2523:         .where('orderid', isEqualTo: orderId)
2524:         .where('driverId', isEqualTo: workerId)
2525:         .limit(1)
2526:         .get()
2527:         .then((snapshot) {
2528:           if (snapshot.docs.isNotEmpty) {
2529:             ratingModel = RatingModel.fromJson(snapshot.docs.first.data());
2530:           }
2531:         })
2532:         .catchError((error) {
2533:           print('Error fetching review by worker ID: $error');
2534:         });
2535: 
2536:     return ratingModel;
2537:   }
2538: 
2539:   static Future<ProviderServiceModel?> getCurrentProvider(String uid) async {
2540:     try {
2541:       final doc = await fireStore.collection(CollectionName.providersServices).doc(uid).get();
2542:       if (doc.exists && doc.data() != null) {
2543:         return ProviderServiceModel.fromJson(doc.data()!);
2544:       }
2545:     } catch (e, stackTrace) {
2546:       print('Error fetching current provider: $e');
2547:       print(stackTrace);

2535: 
2536:     return ratingModel;
2537:   }
2538: 
2539:   static Future<ProviderServiceModel?> getCurrentProvider(String uid) async {
2540:     try {
2541:       final doc = await fireStore.collection(CollectionName.providersServices).doc(uid).get();
2542:       if (doc.exists && doc.data() != null) {
2543:         return ProviderServiceModel.fromJson(doc.data()!);
2544:       }
2545:     } catch (e, stackTrace) {
2546:       print('Error fetching current provider: $e');
2547:       print(stackTrace);
2548:     }
2549:     return null;
2550:   }
2551: 
2552:   static Future<RatingModel?> updateReviewById(RatingModel ratingProduct) async {
2553:     try {
2554:       await fireStore.collection(CollectionName.itemsReview).doc(ratingProduct.id).set(ratingProduct.toJson());
2555:       return ratingProduct;
2556:     } catch (e, stackTrace) {
2557:       print('Error updating review: $e');
2558:       print(stackTrace);
2559:       return null;
2560:     }
2561:   }

2546:       print('Error fetching current provider: $e');
2547:       print(stackTrace);
2548:     }
2549:     return null;
2550:   }
2551: 
2552:   static Future<RatingModel?> updateReviewById(RatingModel ratingProduct) async {
2553:     try {
2554:       await fireStore.collection(CollectionName.itemsReview).doc(ratingProduct.id).set(ratingProduct.toJson());
2555:       return ratingProduct;
2556:     } catch (e, stackTrace) {
2557:       print('Error updating review: $e');
2558:       print(stackTrace);
2559:       return null;
2560:     }
2561:   }
2562: 
2563:   static Future<ProviderServiceModel?> updateProvider(ProviderServiceModel provider) async {
2564:     try {
2565:       await fireStore.collection(CollectionName.providersServices).doc(provider.id).set(provider.toJson());
2566:       return provider;
2567:     } catch (e, stackTrace) {
2568:       print('Error updating provider: $e');
2569:       print(stackTrace);
2570:       return null;
2571:     }
2572:   }

2557:       print('Error updating review: $e');
2558:       print(stackTrace);
2559:       return null;
2560:     }
2561:   }
2562: 
2563:   static Future<ProviderServiceModel?> updateProvider(ProviderServiceModel provider) async {
2564:     try {
2565:       await fireStore.collection(CollectionName.providersServices).doc(provider.id).set(provider.toJson());
2566:       return provider;
2567:     } catch (e, stackTrace) {
2568:       print('Error updating provider: $e');
2569:       print(stackTrace);
2570:       return null;
2571:     }
2572:   }
2573: 
2574:   static Future<WorkerModel?> updateWorker(WorkerModel worker) async {
2575:     try {
2576:       await fireStore.collection(CollectionName.providersWorkers).doc(worker.id).set(worker.toJson());
2577:       return worker;
2578:     } catch (e, stackTrace) {
2579:       print('Error updating worker: $e');
2580:       print(stackTrace);
2581:       return null;
2582:     }
2583:   }

2568:       print('Error updating provider: $e');
2569:       print(stackTrace);
2570:       return null;
2571:     }
2572:   }
2573: 
2574:   static Future<WorkerModel?> updateWorker(WorkerModel worker) async {
2575:     try {
2576:       await fireStore.collection(CollectionName.providersWorkers).doc(worker.id).set(worker.toJson());
2577:       return worker;
2578:     } catch (e, stackTrace) {
2579:       print('Error updating worker: $e');
2580:       print(stackTrace);
2581:       return null;
2582:     }
2583:   }
2584: 
2585:   static Future<ParcelOrderModel?> getParcelOrder(String orderId) async {
2586:     try {
2587:       final doc = await fireStore.collection(CollectionName.parcelOrders).doc(orderId).get();
2588:       if (doc.exists && doc.data() != null) {
2589:         return ParcelOrderModel.fromJson(doc.data()!);
2590:       }
2591:     } catch (e, stackTrace) {
2592:       print('Error fetching current provider: $e');
2593:       print(stackTrace);
2594:     }

2581:       return null;
2582:     }
2583:   }
2584: 
2585:   static Future<ParcelOrderModel?> getParcelOrder(String orderId) async {
2586:     try {
2587:       final doc = await fireStore.collection(CollectionName.parcelOrders).doc(orderId).get();
2588:       if (doc.exists && doc.data() != null) {
2589:         return ParcelOrderModel.fromJson(doc.data()!);
2590:       }
2591:     } catch (e, stackTrace) {
2592:       print('Error fetching current provider: $e');
2593:       print(stackTrace);
2594:     }
2595:     return null;
2596:   }
2597: 
2598:   static Stream<UserModel?> driverStream(String userId) {
2599:     return fireStore.collection(CollectionName.users).doc(userId).snapshots().map((doc) {
2600:       if (doc.data() != null) {
2601:         return UserModel.fromJson(doc.data()!);
2602:       }
2603:       return null;
2604:     });
2605:   }
2606: 
2607:   static Future<void> updateCabOrder(CabOrderModel orderModel) async {

2593:       print(stackTrace);
2594:     }
2595:     return null;
2596:   }
2597: 
2598:   static Stream<UserModel?> driverStream(String userId) {
2599:     return fireStore.collection(CollectionName.users).doc(userId).snapshots().map((doc) {
2600:       if (doc.data() != null) {
2601:         return UserModel.fromJson(doc.data()!);
2602:       }
2603:       return null;
2604:     });
2605:   }
2606: 
2607:   static Future<void> updateCabOrder(CabOrderModel orderModel) async {
2608:     if (orderModel.id!.isEmpty) {
2609:       throw Exception("Order ID cannot be empty");
2610:     }
2611: 
2612:     try {
2613:       final docRef = fireStore.collection(CollectionName.rides).doc(orderModel.id);
2614:       await docRef.set(orderModel.toJson(), SetOptions(merge: true));
2615:     } catch (e) {
2616:       print("Error updating OnDemand order: $e");
2617:       rethrow;
2618:     }
2619:   }

2606: 
2607:   static Future<void> updateCabOrder(CabOrderModel orderModel) async {
2608:     if (orderModel.id!.isEmpty) {
2609:       throw Exception("Order ID cannot be empty");
2610:     }
2611: 
2612:     try {
2613:       final docRef = fireStore.collection(CollectionName.rides).doc(orderModel.id);
2614:       await docRef.set(orderModel.toJson(), SetOptions(merge: true));
2615:     } catch (e) {
2616:       print("Error updating OnDemand order: $e");
2617:       rethrow;
2618:     }
2619:   }
2620: 
2621:   static Future<List<RentalVehicleType>> getRentalVehicleType() async {
2622:     List<RentalVehicleType> vehicleTypeList = [];
2623:     await fireStore.collection(CollectionName.rentalVehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
2624:       for (var element in value.docs) {
2625:         try {
2626:           RentalVehicleType category = RentalVehicleType.fromJson(element.data());
2627:           vehicleTypeList.add(category);
2628:         } catch (e, stackTrace) {
2629:           print('getVehicleType error: ${element.id} $e');
2630:           print(stackTrace);
2631:         }
2632:       }

2615:     } catch (e) {
2616:       print("Error updating OnDemand order: $e");
2617:       rethrow;
2618:     }
2619:   }
2620: 
2621:   static Future<List<RentalVehicleType>> getRentalVehicleType() async {
2622:     List<RentalVehicleType> vehicleTypeList = [];
2623:     await fireStore.collection(CollectionName.rentalVehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
2624:       for (var element in value.docs) {
2625:         try {
2626:           RentalVehicleType category = RentalVehicleType.fromJson(element.data());
2627:           vehicleTypeList.add(category);
2628:         } catch (e, stackTrace) {
2629:           print('getVehicleType error: ${element.id} $e');
2630:           print(stackTrace);
2631:         }
2632:       }
2633:     });
2634:     return vehicleTypeList;
2635:   }
2636: 
2637:   static Future<List<RentalPackageModel>> getRentalPackage(String vehicleId) async {
2638:     List<RentalPackageModel> rentalPackageList = [];
2639:     await fireStore.collection(CollectionName.rentalPackages).where("vehicleTypeId", isEqualTo: vehicleId).orderBy("ordering", descending: false).get().then((value) {
2640:       for (var element in value.docs) {
2641:         try {

2618:     }
2619:   }
2620: 
2621:   static Future<List<RentalVehicleType>> getRentalVehicleType() async {
2622:     List<RentalVehicleType> vehicleTypeList = [];
2623:     await fireStore.collection(CollectionName.rentalVehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
2624:       for (var element in value.docs) {
2625:         try {
2626:           RentalVehicleType category = RentalVehicleType.fromJson(element.data());
2627:           vehicleTypeList.add(category);
2628:         } catch (e, stackTrace) {
2629:           print('getVehicleType error: ${element.id} $e');
2630:           print(stackTrace);
2631:         }
2632:       }
2633:     });
2634:     return vehicleTypeList;
2635:   }
2636: 
2637:   static Future<List<RentalPackageModel>> getRentalPackage(String vehicleId) async {
2638:     List<RentalPackageModel> rentalPackageList = [];
2639:     await fireStore.collection(CollectionName.rentalPackages).where("vehicleTypeId", isEqualTo: vehicleId).orderBy("ordering", descending: false).get().then((value) {
2640:       for (var element in value.docs) {
2641:         try {
2642:           log('Rental Package Data: ${element.data()}');
2643:           RentalPackageModel category = RentalPackageModel.fromJson(element.data());
2644:           rentalPackageList.add(category);

2635:   }
2636: 
2637:   static Future<List<RentalPackageModel>> getRentalPackage(String vehicleId) async {
2638:     List<RentalPackageModel> rentalPackageList = [];
2639:     await fireStore.collection(CollectionName.rentalPackages).where("vehicleTypeId", isEqualTo: vehicleId).orderBy("ordering", descending: false).get().then((value) {
2640:       for (var element in value.docs) {
2641:         try {
2642:           log('Rental Package Data: ${element.data()}');
2643:           RentalPackageModel category = RentalPackageModel.fromJson(element.data());
2644:           rentalPackageList.add(category);
2645:         } catch (e, stackTrace) {
2646:           print('getVehicleType error: ${element.id} $e');
2647:           print(stackTrace);
2648:         }
2649:       }
2650:     });
2651:     return rentalPackageList;
2652:   }
2653: 
2654:   static Stream<List<RentalOrderModel>> getRentalOrders() {
2655:     return fireStore
2656:         .collection(CollectionName.rentalOrders)
2657:         .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
2658:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
2659:         .orderBy('createdAt', descending: true)
2660:         .snapshots()
2661:         .map((query) {

2650:     });
2651:     return rentalPackageList;
2652:   }
2653: 
2654:   static Stream<List<RentalOrderModel>> getRentalOrders() {
2655:     return fireStore
2656:         .collection(CollectionName.rentalOrders)
2657:         .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
2658:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
2659:         .orderBy('createdAt', descending: true)
2660:         .snapshots()
2661:         .map((query) {
2662:           List<RentalOrderModel> ordersList = [];
2663:           for (var element in query.docs) {
2664:             ordersList.add(RentalOrderModel.fromJson(element.data()));
2665:           }
2666:           return ordersList;
2667:         });
2668:   }
2669: 
2670:   static Future<bool?> checkReferralCodeValidOrNot(String referralCode) async {
2671:     bool? isExit;
2672:     try {
2673:       await fireStore.collection(CollectionName.referral).where("referralCode", isEqualTo: referralCode).get().then((value) {
2674:         if (value.size > 0) {
2675:           isExit = true;
2676:         } else {

2656:         .collection(CollectionName.rentalOrders)
2657:         .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
2658:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
2659:         .orderBy('createdAt', descending: true)
2660:         .snapshots()
2661:         .map((query) {
2662:           List<RentalOrderModel> ordersList = [];
2663:           for (var element in query.docs) {
2664:             ordersList.add(RentalOrderModel.fromJson(element.data()));
2665:           }
2666:           return ordersList;
2667:         });
2668:   }
2669: 
2670:   static Future<bool?> checkReferralCodeValidOrNot(String referralCode) async {
2671:     bool? isExit;
2672:     try {
2673:       await fireStore.collection(CollectionName.referral).where("referralCode", isEqualTo: referralCode).get().then((value) {
2674:         if (value.size > 0) {
2675:           isExit = true;
2676:         } else {
2677:           isExit = false;
2678:         }
2679:       });
2680:     } catch (e, s) {
2681:       print('FireStoreUtils.firebaseCreateNewUser $e $s');
2682:       return false;

2683:     }
2684:     return isExit;
2685:   }
2686: 
2687:   static Future<RentalOrderModel?> getRentalOrderById(String orderId) async {
2688:     RentalOrderModel? orderModel;
2689:     await fireStore.collection(CollectionName.rentalOrders).doc(orderId).get().then((value) {
2690:       if (value.exists) {
2691:         orderModel = RentalOrderModel.fromJson(value.data()!);
2692:       }
2693:     });
2694:     return orderModel;
2695:   }
2696: 
2697:   static Future<RatingModel?> getReviewsbyID(String orderId) async {
2698:     RatingModel? ratingModel;
2699: 
2700:     await fireStore
2701:         .collection(CollectionName.itemsReview)
2702:         .where('orderid', isEqualTo: orderId)
2703:         .get()
2704:         .then((snapshot) {
2705:           if (snapshot.docs.isNotEmpty) {
2706:             ratingModel = RatingModel.fromJson(snapshot.docs.first.data());
2707:           }
2708:         })
2709:         .catchError((error) {

2698:     RatingModel? ratingModel;
2699: 
2700:     await fireStore
2701:         .collection(CollectionName.itemsReview)
2702:         .where('orderid', isEqualTo: orderId)
2703:         .get()
2704:         .then((snapshot) {
2705:           if (snapshot.docs.isNotEmpty) {
2706:             ratingModel = RatingModel.fromJson(snapshot.docs.first.data());
2707:           }
2708:         })
2709:         .catchError((error) {
2710:           print('Error fetching review for provider: $error');
2711:         });
2712: 
2713:     return ratingModel;
2714:   }
2715: 
2716:   static Future<dynamic> getOrderByIdFromAllCollections(String orderId) async {
2717:     final List<String> collections = [CollectionName.parcelOrders, CollectionName.rentalOrders, CollectionName.providerOrders, CollectionName.rides, CollectionName.vendorOrders];
2718: 
2719:     for (String collection in collections) {
2720:       try {
2721:         final snapshot = await fireStore.collection(collection).where('id', isEqualTo: orderId).limit(1).get();
2722: 
2723:         if (snapshot.docs.isNotEmpty) {
2724:           final data = snapshot.docs.first.data();

2732: 
2733:     log("No order found with ID $orderId");
2734:     return null;
2735:   }
2736: 
2737:   static Future<void> setSos(String orderId, UserLocation userLocation) {
2738:     DocumentReference documentReference = fireStore.collection(CollectionName.sos).doc();
2739: 
2740:     Map<String, dynamic> sosMap = {'id': documentReference.id, 'orderId': orderId, 'status': "Initiated", 'latLong': userLocation.toJson()};
2741: 
2742:     return documentReference
2743:         .set(sosMap)
2744:         .then((_) {
2745:           print("SOS request created successfully for order: $orderId");
2746:         })
2747:         .catchError((error) {
2748:           print("Failed to create SOS request: $error");
2749:         });
2750:   }
2751: 
2752:   static Future<bool> getSOS(String orderId) {
2753:     return fireStore
2754:         .collection(CollectionName.sos)
2755:         .where('orderId', isEqualTo: orderId)
2756:         .get()
2757:         .then((querySnapshot) {
2758:           bool isAdded = false;

2777:     required String driverID,
2778:     required String driverName,
2779:     required String customerID,
2780:     required String customerName,
2781:   }) async {
2782:     try {
2783:       DocumentReference docRef = fireStore.collection(CollectionName.complaints).doc();
2784: 
2785:       Map<String, dynamic> complaintData = {
2786:         'id': docRef.id,
2787:         'createdAt': Timestamp.now(),
2788:         'description': description,
2789:         'driverId': driverID,
2790:         'driverName': driverName,
2791:         'orderId': orderId,
2792:         'customerName': customerName,
2793:         'customerId': customerID,
2794:         'status': "Initiated",
2795:         'title': title,
2796:       };
2797: 
2798:       await docRef.set(complaintData);
2799:     } catch (e) {
2800:       print("Error adding ride complain: $e");
2801:       rethrow;
2802:     }
2803:   }

2808: 
2809:       return querySnapshot.docs.isNotEmpty;
2810:     } catch (e) {
2811:       print("Error checking ride complain: $e");
2812:       return false;
2813:     }
2814:   }
2815: 
2816:   static Future<Map<String, dynamic>?> getRideComplainData(String orderId) async {
2817:     try {
2818:       QuerySnapshot querySnapshot = await fireStore.collection(CollectionName.complaints).where('orderId', isEqualTo: orderId).limit(1).get();
2819: 
2820:       if (querySnapshot.docs.isNotEmpty) {
2821:         return querySnapshot.docs.first.data() as Map<String, dynamic>;
2822:       } else {
2823:         return null;
2824:       }
2825:     } catch (e) {
2826:       print("Error fetching ride complain data: $e");
2827:       return null;
2828:     }
2829:   }
2830: 
2831:   static void removeFavouriteOndemandService(FavouriteOndemandServiceModel favouriteModel) {
2832:     fireStore.collection(CollectionName.favoriteService).where("user_id", isEqualTo: favouriteModel.user_id).where("service_id", isEqualTo: favouriteModel.service_id).get().then((value) {
2833:       for (var element in value.docs) {
2834:         fireStore.collection(CollectionName.favoriteService).doc(element.id).delete().then((value) {

2813:     }
2814:   }
2815: 
2816:   static Future<Map<String, dynamic>?> getRideComplainData(String orderId) async {
2817:     try {
2818:       QuerySnapshot querySnapshot = await fireStore.collection(CollectionName.complaints).where('orderId', isEqualTo: orderId).limit(1).get();
2819: 
2820:       if (querySnapshot.docs.isNotEmpty) {
2821:         return querySnapshot.docs.first.data() as Map<String, dynamic>;
2822:       } else {
2823:         return null;
2824:       }
2825:     } catch (e) {
2826:       print("Error fetching ride complain data: $e");
2827:       return null;
2828:     }
2829:   }
2830: 
2831:   static void removeFavouriteOndemandService(FavouriteOndemandServiceModel favouriteModel) {
2832:     fireStore.collection(CollectionName.favoriteService).where("user_id", isEqualTo: favouriteModel.user_id).where("service_id", isEqualTo: favouriteModel.service_id).get().then((value) {
2833:       for (var element in value.docs) {
2834:         fireStore.collection(CollectionName.favoriteService).doc(element.id).delete().then((value) {
2835:           print("Remove Success!");
2836:         });
2837:       }
2838:     });
2839:   }

2833:       for (var element in value.docs) {
2834:         fireStore.collection(CollectionName.favoriteService).doc(element.id).delete().then((value) {
2835:           print("Remove Success!");
2836:         });
2837:       }
2838:     });
2839:   }
2840: 
2841:   static Future<void> setFavouriteOndemandSection(FavouriteOndemandServiceModel favouriteModel) async {
2842:     await fireStore.collection(CollectionName.favoriteService).add(favouriteModel.toJson()).then((value) {
2843:       print("===FAVOURITE ADDED=== ${favouriteModel.toJson()}");
2844:     });
2845:   }
2846: 
2847:   static Future<List<FavouriteOndemandServiceModel>> getFavouritesServiceList(String userId) async {
2848:     List<FavouriteOndemandServiceModel> lstFavourites = [];
2849: 
2850:     QuerySnapshot<Map<String, dynamic>> favourites =
2851:         await fireStore.collection(CollectionName.favoriteService).where('user_id', isEqualTo: userId).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get();
2852: 
2853:     await Future.forEach(favourites.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2854:       try {
2855:         lstFavourites.add(FavouriteOndemandServiceModel.fromJson(document.data()));
2856:       } catch (e) {
2857:         print('FavouriteModel.getCurrencys Parse error $e');
2858:       }
2859:     });

2834:         fireStore.collection(CollectionName.favoriteService).doc(element.id).delete().then((value) {
2835:           print("Remove Success!");
2836:         });
2837:       }
2838:     });
2839:   }
2840: 
2841:   static Future<void> setFavouriteOndemandSection(FavouriteOndemandServiceModel favouriteModel) async {
2842:     await fireStore.collection(CollectionName.favoriteService).add(favouriteModel.toJson()).then((value) {
2843:       print("===FAVOURITE ADDED=== ${favouriteModel.toJson()}");
2844:     });
2845:   }
2846: 
2847:   static Future<List<FavouriteOndemandServiceModel>> getFavouritesServiceList(String userId) async {
2848:     List<FavouriteOndemandServiceModel> lstFavourites = [];
2849: 
2850:     QuerySnapshot<Map<String, dynamic>> favourites =
2851:         await fireStore.collection(CollectionName.favoriteService).where('user_id', isEqualTo: userId).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get();
2852: 
2853:     await Future.forEach(favourites.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2854:       try {
2855:         lstFavourites.add(FavouriteOndemandServiceModel.fromJson(document.data()));
2856:       } catch (e) {
2857:         print('FavouriteModel.getCurrencys Parse error $e');
2858:       }
2859:     });
2860: 

2835:           print("Remove Success!");
2836:         });
2837:       }
2838:     });
2839:   }
2840: 
2841:   static Future<void> setFavouriteOndemandSection(FavouriteOndemandServiceModel favouriteModel) async {
2842:     await fireStore.collection(CollectionName.favoriteService).add(favouriteModel.toJson()).then((value) {
2843:       print("===FAVOURITE ADDED=== ${favouriteModel.toJson()}");
2844:     });
2845:   }
2846: 
2847:   static Future<List<FavouriteOndemandServiceModel>> getFavouritesServiceList(String userId) async {
2848:     List<FavouriteOndemandServiceModel> lstFavourites = [];
2849: 
2850:     QuerySnapshot<Map<String, dynamic>> favourites =
2851:         await fireStore.collection(CollectionName.favoriteService).where('user_id', isEqualTo: userId).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get();
2852: 
2853:     await Future.forEach(favourites.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2854:       try {
2855:         lstFavourites.add(FavouriteOndemandServiceModel.fromJson(document.data()));
2856:       } catch (e) {
2857:         print('FavouriteModel.getCurrencys Parse error $e');
2858:       }
2859:     });
2860: 
2861:     return lstFavourites;

2842:     await fireStore.collection(CollectionName.favoriteService).add(favouriteModel.toJson()).then((value) {
2843:       print("===FAVOURITE ADDED=== ${favouriteModel.toJson()}");
2844:     });
2845:   }
2846: 
2847:   static Future<List<FavouriteOndemandServiceModel>> getFavouritesServiceList(String userId) async {
2848:     List<FavouriteOndemandServiceModel> lstFavourites = [];
2849: 
2850:     QuerySnapshot<Map<String, dynamic>> favourites =
2851:         await fireStore.collection(CollectionName.favoriteService).where('user_id', isEqualTo: userId).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get();
2852: 
2853:     await Future.forEach(favourites.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2854:       try {
2855:         lstFavourites.add(FavouriteOndemandServiceModel.fromJson(document.data()));
2856:       } catch (e) {
2857:         print('FavouriteModel.getCurrencys Parse error $e');
2858:       }
2859:     });
2860: 
2861:     return lstFavourites;
2862:   }
2863: 
2864:   static Future<List<ProviderServiceModel>> getCurrentProviderService(FavouriteOndemandServiceModel model) async {
2865:     List<ProviderServiceModel> providerService = [];
2866: 
2867:     QuerySnapshot<Map<String, dynamic>> reviewQuery =
2868:         await fireStore.collection(CollectionName.providersServices).where('id', isEqualTo: model.service_id).where('sectionId', isEqualTo: model.section_id).get();

2843:       print("===FAVOURITE ADDED=== ${favouriteModel.toJson()}");
2844:     });
2845:   }
2846: 
2847:   static Future<List<FavouriteOndemandServiceModel>> getFavouritesServiceList(String userId) async {
2848:     List<FavouriteOndemandServiceModel> lstFavourites = [];
2849: 
2850:     QuerySnapshot<Map<String, dynamic>> favourites =
2851:         await fireStore.collection(CollectionName.favoriteService).where('user_id', isEqualTo: userId).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get();
2852: 
2853:     await Future.forEach(favourites.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2854:       try {
2855:         lstFavourites.add(FavouriteOndemandServiceModel.fromJson(document.data()));
2856:       } catch (e) {
2857:         print('FavouriteModel.getCurrencys Parse error $e');
2858:       }
2859:     });
2860: 
2861:     return lstFavourites;
2862:   }
2863: 
2864:   static Future<List<ProviderServiceModel>> getCurrentProviderService(FavouriteOndemandServiceModel model) async {
2865:     List<ProviderServiceModel> providerService = [];
2866: 
2867:     QuerySnapshot<Map<String, dynamic>> reviewQuery =
2868:         await fireStore.collection(CollectionName.providersServices).where('id', isEqualTo: model.service_id).where('sectionId', isEqualTo: model.section_id).get();
2869:     await Future.forEach(reviewQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {

2845:   }
2846: 
2847:   static Future<List<FavouriteOndemandServiceModel>> getFavouritesServiceList(String userId) async {
2848:     List<FavouriteOndemandServiceModel> lstFavourites = [];
2849: 
2850:     QuerySnapshot<Map<String, dynamic>> favourites =
2851:         await fireStore.collection(CollectionName.favoriteService).where('user_id', isEqualTo: userId).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get();
2852: 
2853:     await Future.forEach(favourites.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2854:       try {
2855:         lstFavourites.add(FavouriteOndemandServiceModel.fromJson(document.data()));
2856:       } catch (e) {
2857:         print('FavouriteModel.getCurrencys Parse error $e');
2858:       }
2859:     });
2860: 
2861:     return lstFavourites;
2862:   }
2863: 
2864:   static Future<List<ProviderServiceModel>> getCurrentProviderService(FavouriteOndemandServiceModel model) async {
2865:     List<ProviderServiceModel> providerService = [];
2866: 
2867:     QuerySnapshot<Map<String, dynamic>> reviewQuery =
2868:         await fireStore.collection(CollectionName.providersServices).where('id', isEqualTo: model.service_id).where('sectionId', isEqualTo: model.section_id).get();
2869:     await Future.forEach(reviewQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2870:       try {
2871:         providerService.add(ProviderServiceModel.fromJson(document.data()));

2847:   static Future<List<FavouriteOndemandServiceModel>> getFavouritesServiceList(String userId) async {
2848:     List<FavouriteOndemandServiceModel> lstFavourites = [];
2849: 
2850:     QuerySnapshot<Map<String, dynamic>> favourites =
2851:         await fireStore.collection(CollectionName.favoriteService).where('user_id', isEqualTo: userId).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get();
2852: 
2853:     await Future.forEach(favourites.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2854:       try {
2855:         lstFavourites.add(FavouriteOndemandServiceModel.fromJson(document.data()));
2856:       } catch (e) {
2857:         print('FavouriteModel.getCurrencys Parse error $e');
2858:       }
2859:     });
2860: 
2861:     return lstFavourites;
2862:   }
2863: 
2864:   static Future<List<ProviderServiceModel>> getCurrentProviderService(FavouriteOndemandServiceModel model) async {
2865:     List<ProviderServiceModel> providerService = [];
2866: 
2867:     QuerySnapshot<Map<String, dynamic>> reviewQuery =
2868:         await fireStore.collection(CollectionName.providersServices).where('id', isEqualTo: model.service_id).where('sectionId', isEqualTo: model.section_id).get();
2869:     await Future.forEach(reviewQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2870:       try {
2871:         providerService.add(ProviderServiceModel.fromJson(document.data()));
2872:       } catch (e) {
2873:         print('FireStoreUtils.getReviewByProviderServiceId Parse error ${document.id} $e');

2859:     });
2860: 
2861:     return lstFavourites;
2862:   }
2863: 
2864:   static Future<List<ProviderServiceModel>> getCurrentProviderService(FavouriteOndemandServiceModel model) async {
2865:     List<ProviderServiceModel> providerService = [];
2866: 
2867:     QuerySnapshot<Map<String, dynamic>> reviewQuery =
2868:         await fireStore.collection(CollectionName.providersServices).where('id', isEqualTo: model.service_id).where('sectionId', isEqualTo: model.section_id).get();
2869:     await Future.forEach(reviewQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2870:       try {
2871:         providerService.add(ProviderServiceModel.fromJson(document.data()));
2872:       } catch (e) {
2873:         print('FireStoreUtils.getReviewByProviderServiceId Parse error ${document.id} $e');
2874:       }
2875:     });
2876:     return providerService;
2877:   }
2878: 
2879:   static late StreamSubscription<QuerySnapshot> adminChatSeenSubscription;
2880: 
2881:   static void setSeen() {
2882:     final currentUserId = FireStoreUtils.getCurrentUid();
2883: 
2884:     adminChatSeenSubscription = fireStore
2885:         .collection(CollectionName.chat)

2860: 
2861:     return lstFavourites;
2862:   }
2863: 
2864:   static Future<List<ProviderServiceModel>> getCurrentProviderService(FavouriteOndemandServiceModel model) async {
2865:     List<ProviderServiceModel> providerService = [];
2866: 
2867:     QuerySnapshot<Map<String, dynamic>> reviewQuery =
2868:         await fireStore.collection(CollectionName.providersServices).where('id', isEqualTo: model.service_id).where('sectionId', isEqualTo: model.section_id).get();
2869:     await Future.forEach(reviewQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2870:       try {
2871:         providerService.add(ProviderServiceModel.fromJson(document.data()));
2872:       } catch (e) {
2873:         print('FireStoreUtils.getReviewByProviderServiceId Parse error ${document.id} $e');
2874:       }
2875:     });
2876:     return providerService;
2877:   }
2878: 
2879:   static late StreamSubscription<QuerySnapshot> adminChatSeenSubscription;
2880: 
2881:   static void setSeen() {
2882:     final currentUserId = FireStoreUtils.getCurrentUid();
2883: 
2884:     adminChatSeenSubscription = fireStore
2885:         .collection(CollectionName.chat)
2886:         .doc(currentUserId)

2861:     return lstFavourites;
2862:   }
2863: 
2864:   static Future<List<ProviderServiceModel>> getCurrentProviderService(FavouriteOndemandServiceModel model) async {
2865:     List<ProviderServiceModel> providerService = [];
2866: 
2867:     QuerySnapshot<Map<String, dynamic>> reviewQuery =
2868:         await fireStore.collection(CollectionName.providersServices).where('id', isEqualTo: model.service_id).where('sectionId', isEqualTo: model.section_id).get();
2869:     await Future.forEach(reviewQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2870:       try {
2871:         providerService.add(ProviderServiceModel.fromJson(document.data()));
2872:       } catch (e) {
2873:         print('FireStoreUtils.getReviewByProviderServiceId Parse error ${document.id} $e');
2874:       }
2875:     });
2876:     return providerService;
2877:   }
2878: 
2879:   static late StreamSubscription<QuerySnapshot> adminChatSeenSubscription;
2880: 
2881:   static void setSeen() {
2882:     final currentUserId = FireStoreUtils.getCurrentUid();
2883: 
2884:     adminChatSeenSubscription = fireStore
2885:         .collection(CollectionName.chat)
2886:         .doc(currentUserId)
2887:         .collection("thread")

2863: 
2864:   static Future<List<ProviderServiceModel>> getCurrentProviderService(FavouriteOndemandServiceModel model) async {
2865:     List<ProviderServiceModel> providerService = [];
2866: 
2867:     QuerySnapshot<Map<String, dynamic>> reviewQuery =
2868:         await fireStore.collection(CollectionName.providersServices).where('id', isEqualTo: model.service_id).where('sectionId', isEqualTo: model.section_id).get();
2869:     await Future.forEach(reviewQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
2870:       try {
2871:         providerService.add(ProviderServiceModel.fromJson(document.data()));
2872:       } catch (e) {
2873:         print('FireStoreUtils.getReviewByProviderServiceId Parse error ${document.id} $e');
2874:       }
2875:     });
2876:     return providerService;
2877:   }
2878: 
2879:   static late StreamSubscription<QuerySnapshot> adminChatSeenSubscription;
2880: 
2881:   static void setSeen() {
2882:     final currentUserId = FireStoreUtils.getCurrentUid();
2883: 
2884:     adminChatSeenSubscription = fireStore
2885:         .collection(CollectionName.chat)
2886:         .doc(currentUserId)
2887:         .collection("thread")
2888:         .where('senderId', isEqualTo: Constant.adminType)
2889:         .where('seen', isEqualTo: false)

2936: 
2937:   static void stopSeenForOrderListener() {
2938:     orderChatSeenSubscription.cancel();
2939:   }
2940: 
2941:   static Future<ConversationModel> addChat(ConversationModel conversationModel) async {
2942:     final chatCollection = fireStore.collection(CollectionName.chat);
2943:     final docId = (conversationModel.receiverId?.contains('admin') == false) ? conversationModel.orderId : conversationModel.senderId;
2944:     await chatCollection.doc(docId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson());
2945:     return conversationModel;
2946:   }
2947: 
2948:   static Future<InboxModel> addInbox(InboxModel inboxModel) async {
2949:     final collection = fireStore.collection(CollectionName.chat);
2950:     final docId = (inboxModel.senderReceiverId?.contains('admin') == false) ? inboxModel.orderId : inboxModel.senderId;
2951:     await collection.doc(docId).set(inboxModel.toJson());
2952:     return inboxModel;
2953:   }
2954: }

2943:     final docId = (conversationModel.receiverId?.contains('admin') == false) ? conversationModel.orderId : conversationModel.senderId;
2944:     await chatCollection.doc(docId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson());
2945:     return conversationModel;
2946:   }
2947: 
2948:   static Future<InboxModel> addInbox(InboxModel inboxModel) async {
2949:     final collection = fireStore.collection(CollectionName.chat);
2950:     final docId = (inboxModel.senderReceiverId?.contains('admin') == false) ? inboxModel.orderId : inboxModel.senderId;
2951:     await collection.doc(docId).set(inboxModel.toJson());
2952:     return inboxModel;
2953:   }
2954: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart

```dart
43:                         Padding(
44:                           padding: const EdgeInsets.symmetric(horizontal: 16),
45:                           child: Column(
46:                             crossAxisAlignment: CrossAxisAlignment.start,
47:                             children: [
48:                               Text("Explore Our Services".tr, style: AppThemeData.semiBoldTextStyle(fontSize: 20, color: themeController.isDark.value ? AppThemeData.grey50 : AppThemeData.grey900)),
49:                               const SizedBox(height: 12),
50:                               GridView.builder(
51:                                 itemCount: controller.sectionList.length,
52:                                 physics: const NeverScrollableScrollPhysics(),
53:                                 shrinkWrap: true,
54:                                 gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 12, crossAxisSpacing: 12, mainAxisExtent: 130),
55:                                 itemBuilder: (context, index) {
56:                                   final section = controller.sectionList[index];
57:                                   return GestureDetector(
58:                                     onTap: () => controller.onServiceTap(context, section),
59:                                     child: Container(
60:                                       decoration: BoxDecoration(
61:                                         gradient: LinearGradient(colors: Constant.sectionColor[index % Constant.sectionColor.length], begin: Alignment.topCenter, end: Alignment.bottomCenter),
62:                                         borderRadius: BorderRadius.circular(12),
63:                                       ),
64:                                       child: Column(
65:                                         crossAxisAlignment: CrossAxisAlignment.center,
66:                                         children: [
67:                                           Padding(
68:                                             padding: const EdgeInsets.only(top: 10, left: 5, right: 5),
69:                                             child: Text(

48:                               Text("Explore Our Services".tr, style: AppThemeData.semiBoldTextStyle(fontSize: 20, color: themeController.isDark.value ? AppThemeData.grey50 : AppThemeData.grey900)),
49:                               const SizedBox(height: 12),
50:                               GridView.builder(
51:                                 itemCount: controller.sectionList.length,
52:                                 physics: const NeverScrollableScrollPhysics(),
53:                                 shrinkWrap: true,
54:                                 gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 12, crossAxisSpacing: 12, mainAxisExtent: 130),
55:                                 itemBuilder: (context, index) {
56:                                   final section = controller.sectionList[index];
57:                                   return GestureDetector(
58:                                     onTap: () => controller.onServiceTap(context, section),
59:                                     child: Container(
60:                                       decoration: BoxDecoration(
61:                                         gradient: LinearGradient(colors: Constant.sectionColor[index % Constant.sectionColor.length], begin: Alignment.topCenter, end: Alignment.bottomCenter),
62:                                         borderRadius: BorderRadius.circular(12),
63:                                       ),
64:                                       child: Column(
65:                                         crossAxisAlignment: CrossAxisAlignment.center,
66:                                         children: [
67:                                           Padding(
68:                                             padding: const EdgeInsets.only(top: 10, left: 5, right: 5),
69:                                             child: Text(
70:                                               section.name ?? '',
71:                                               textAlign: TextAlign.center,
72:                                               maxLines: 2,
73:                                               overflow: TextOverflow.ellipsis,
74:                                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: AppThemeData.grey900),

50:                               GridView.builder(
51:                                 itemCount: controller.sectionList.length,
52:                                 physics: const NeverScrollableScrollPhysics(),
53:                                 shrinkWrap: true,
54:                                 gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 12, crossAxisSpacing: 12, mainAxisExtent: 130),
55:                                 itemBuilder: (context, index) {
56:                                   final section = controller.sectionList[index];
57:                                   return GestureDetector(
58:                                     onTap: () => controller.onServiceTap(context, section),
59:                                     child: Container(
60:                                       decoration: BoxDecoration(
61:                                         gradient: LinearGradient(colors: Constant.sectionColor[index % Constant.sectionColor.length], begin: Alignment.topCenter, end: Alignment.bottomCenter),
62:                                         borderRadius: BorderRadius.circular(12),
63:                                       ),
64:                                       child: Column(
65:                                         crossAxisAlignment: CrossAxisAlignment.center,
66:                                         children: [
67:                                           Padding(
68:                                             padding: const EdgeInsets.only(top: 10, left: 5, right: 5),
69:                                             child: Text(
70:                                               section.name ?? '',
71:                                               textAlign: TextAlign.center,
72:                                               maxLines: 2,
73:                                               overflow: TextOverflow.ellipsis,
74:                                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: AppThemeData.grey900),
75:                                             ),
76:                                           ),

53:                                 shrinkWrap: true,
54:                                 gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 12, crossAxisSpacing: 12, mainAxisExtent: 130),
55:                                 itemBuilder: (context, index) {
56:                                   final section = controller.sectionList[index];
57:                                   return GestureDetector(
58:                                     onTap: () => controller.onServiceTap(context, section),
59:                                     child: Container(
60:                                       decoration: BoxDecoration(
61:                                         gradient: LinearGradient(colors: Constant.sectionColor[index % Constant.sectionColor.length], begin: Alignment.topCenter, end: Alignment.bottomCenter),
62:                                         borderRadius: BorderRadius.circular(12),
63:                                       ),
64:                                       child: Column(
65:                                         crossAxisAlignment: CrossAxisAlignment.center,
66:                                         children: [
67:                                           Padding(
68:                                             padding: const EdgeInsets.only(top: 10, left: 5, right: 5),
69:                                             child: Text(
70:                                               section.name ?? '',
71:                                               textAlign: TextAlign.center,
72:                                               maxLines: 2,
73:                                               overflow: TextOverflow.ellipsis,
74:                                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: AppThemeData.grey900),
75:                                             ),
76:                                           ),
77:                                           const Spacer(),
78:                                           NetworkImageWidget(imageUrl: section.sectionImage ?? '', width: 80, height: 60, fit: BoxFit.contain, showShimmer: false),
79:                                         ],

62:                                         borderRadius: BorderRadius.circular(12),
63:                                       ),
64:                                       child: Column(
65:                                         crossAxisAlignment: CrossAxisAlignment.center,
66:                                         children: [
67:                                           Padding(
68:                                             padding: const EdgeInsets.only(top: 10, left: 5, right: 5),
69:                                             child: Text(
70:                                               section.name ?? '',
71:                                               textAlign: TextAlign.center,
72:                                               maxLines: 2,
73:                                               overflow: TextOverflow.ellipsis,
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
87:                         ),
88:                       ],

70:                                               section.name ?? '',
71:                                               textAlign: TextAlign.center,
72:                                               maxLines: 2,
73:                                               overflow: TextOverflow.ellipsis,
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
87:                         ),
88:                       ],
89:                     ),
90:                   ),
91:         );
92:       },
93:     );
94:   }
95: }
96: 

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart

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
49: 
50:     await FireStoreUtils.getSectionBannerList().then((value) {
51:       serviceListBanner.assignAll(value);
52:     });
53: 
54:     await getZone();
55:     isLoading.value = false;
56:   }
57: 
58:   Future<void> getZone() async {
59:     await FireStoreUtils.getZone().then((value) {
60:       if (value != null) {
61:         Constant.zoneList = value;
62:       }
63:     });

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
49: 
50:     await FireStoreUtils.getSectionBannerList().then((value) {
51:       serviceListBanner.assignAll(value);
52:     });
53: 
54:     await getZone();
55:     isLoading.value = false;
56:   }
57: 
58:   Future<void> getZone() async {
59:     await FireStoreUtils.getZone().then((value) {
60:       if (value != null) {
61:         Constant.zoneList = value;
62:       }
63:     });
64:   }

40:     // fetch currency
41:     CurrencyModel? currency = await FireStoreUtils.getCurrency();
42: 
43:     currencyData.value = currency ?? CurrencyModel(id: "", code: "USD", decimal: 2, isactive: true, name: "US Dollar", symbol: "\$", symbolatright: false);
44: 
45:     // Load sections
46:     List<SectionModel> sections = await FireStoreUtils.getSections();
47: 
48:     sectionList.assignAll(sections);
49: 
50:     await FireStoreUtils.getSectionBannerList().then((value) {
51:       serviceListBanner.assignAll(value);
52:     });
53: 
54:     await getZone();
55:     isLoading.value = false;
56:   }
57: 
58:   Future<void> getZone() async {
59:     await FireStoreUtils.getZone().then((value) {
60:       if (value != null) {
61:         Constant.zoneList = value;
62:       }
63:     });
64:   }
65: 
66:   Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {

42: 
43:     currencyData.value = currency ?? CurrencyModel(id: "", code: "USD", decimal: 2, isactive: true, name: "US Dollar", symbol: "\$", symbolatright: false);
44: 
45:     // Load sections
46:     List<SectionModel> sections = await FireStoreUtils.getSections();
47: 
48:     sectionList.assignAll(sections);
49: 
50:     await FireStoreUtils.getSectionBannerList().then((value) {
51:       serviceListBanner.assignAll(value);
52:     });
53: 
54:     await getZone();
55:     isLoading.value = false;
56:   }
57: 
58:   Future<void> getZone() async {
59:     await FireStoreUtils.getZone().then((value) {
60:       if (value != null) {
61:         Constant.zoneList = value;
62:       }
63:     });
64:   }
65: 
66:   Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {
67:     try {
68:       ShowToastDialog.showLoader("Please wait...".tr);

58:   Future<void> getZone() async {
59:     await FireStoreUtils.getZone().then((value) {
60:       if (value != null) {
61:         Constant.zoneList = value;
62:       }
63:     });
64:   }
65: 
66:   Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {
67:     try {
68:       ShowToastDialog.showLoader("Please wait...".tr);
69:       Constant.sectionConstantModel = sectionModel;
70:       AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
71:       if (auth.FirebaseAuth.instance.currentUser != null) {
72:         String uid = auth.FirebaseAuth.instance.currentUser!.uid;
73:         UserModel? user = await FireStoreUtils.getUserProfile(uid);
74:         if (user != null && user.role == Constant.userRoleCustomer) {
75:           user.fcmToken = await NotificationService.getToken();
76:           await FireStoreUtils.updateUser(user);
77:           ShowToastDialog.closeLoader();
78:           if (sectionModel.serviceType == 'Ecommerce Service') {
79:             await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
80:           }
81:           await _navigate(sectionModel);
82:         } else {
83:           ShowToastDialog.closeLoader();
84:           Get.offAll(() => const LoginScreen());

61:         Constant.zoneList = value;
62:       }
63:     });
64:   }
65: 
66:   Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {
67:     try {
68:       ShowToastDialog.showLoader("Please wait...".tr);
69:       Constant.sectionConstantModel = sectionModel;
70:       AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
71:       if (auth.FirebaseAuth.instance.currentUser != null) {
72:         String uid = auth.FirebaseAuth.instance.currentUser!.uid;
73:         UserModel? user = await FireStoreUtils.getUserProfile(uid);
74:         if (user != null && user.role == Constant.userRoleCustomer) {
75:           user.fcmToken = await NotificationService.getToken();
76:           await FireStoreUtils.updateUser(user);
77:           ShowToastDialog.closeLoader();
78:           if (sectionModel.serviceType == 'Ecommerce Service') {
79:             await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
80:           }
81:           await _navigate(sectionModel);
82:         } else {
83:           ShowToastDialog.closeLoader();
84:           Get.offAll(() => const LoginScreen());
85:         }
86:       } else {
87:         ShowToastDialog.closeLoader();

62:       }
63:     });
64:   }
65: 
66:   Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {
67:     try {
68:       ShowToastDialog.showLoader("Please wait...".tr);
69:       Constant.sectionConstantModel = sectionModel;
70:       AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
71:       if (auth.FirebaseAuth.instance.currentUser != null) {
72:         String uid = auth.FirebaseAuth.instance.currentUser!.uid;
73:         UserModel? user = await FireStoreUtils.getUserProfile(uid);
74:         if (user != null && user.role == Constant.userRoleCustomer) {
75:           user.fcmToken = await NotificationService.getToken();
76:           await FireStoreUtils.updateUser(user);
77:           ShowToastDialog.closeLoader();
78:           if (sectionModel.serviceType == 'Ecommerce Service') {
79:             await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
80:           }
81:           await _navigate(sectionModel);
82:         } else {
83:           ShowToastDialog.closeLoader();
84:           Get.offAll(() => const LoginScreen());
85:         }
86:       } else {
87:         ShowToastDialog.closeLoader();
88:         await _navigate(sectionModel);

70:       AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
71:       if (auth.FirebaseAuth.instance.currentUser != null) {
72:         String uid = auth.FirebaseAuth.instance.currentUser!.uid;
73:         UserModel? user = await FireStoreUtils.getUserProfile(uid);
74:         if (user != null && user.role == Constant.userRoleCustomer) {
75:           user.fcmToken = await NotificationService.getToken();
76:           await FireStoreUtils.updateUser(user);
77:           ShowToastDialog.closeLoader();
78:           if (sectionModel.serviceType == 'Ecommerce Service') {
79:             await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
80:           }
81:           await _navigate(sectionModel);
82:         } else {
83:           ShowToastDialog.closeLoader();
84:           Get.offAll(() => const LoginScreen());
85:         }
86:       } else {
87:         ShowToastDialog.closeLoader();
88:         await _navigate(sectionModel);
89:       }
90:     } catch (e) {
91:       print("Error during service tap: $e");
92:       ShowToastDialog.closeLoader();
93:     }
94:   }
95: 
96:   Future<void> _navigate(SectionModel sectionModel) async {

73:         UserModel? user = await FireStoreUtils.getUserProfile(uid);
74:         if (user != null && user.role == Constant.userRoleCustomer) {
75:           user.fcmToken = await NotificationService.getToken();
76:           await FireStoreUtils.updateUser(user);
77:           ShowToastDialog.closeLoader();
78:           if (sectionModel.serviceType == 'Ecommerce Service') {
79:             await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
80:           }
81:           await _navigate(sectionModel);
82:         } else {
83:           ShowToastDialog.closeLoader();
84:           Get.offAll(() => const LoginScreen());
85:         }
86:       } else {
87:         ShowToastDialog.closeLoader();
88:         await _navigate(sectionModel);
89:       }
90:     } catch (e) {
91:       print("Error during service tap: $e");
92:       ShowToastDialog.closeLoader();
93:     }
94:   }
95: 
96:   Future<void> _navigate(SectionModel sectionModel) async {
97:     await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
98:       if (value != null) {
99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();

80:           }
81:           await _navigate(sectionModel);
82:         } else {
83:           ShowToastDialog.closeLoader();
84:           Get.offAll(() => const LoginScreen());
85:         }
86:       } else {
87:         ShowToastDialog.closeLoader();
88:         await _navigate(sectionModel);
89:       }
90:     } catch (e) {
91:       print("Error during service tap: $e");
92:       ShowToastDialog.closeLoader();
93:     }
94:   }
95: 
96:   Future<void> _navigate(SectionModel sectionModel) async {
97:     await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
98:       if (value != null) {
99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
100:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
101:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
102: 
103:         if (sectionModel.packagingChargeEnable == true) {
104:           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
105:         }
106:         if (sectionModel.platformFee?.enable == true) {

88:         await _navigate(sectionModel);
89:       }
90:     } catch (e) {
91:       print("Error during service tap: $e");
92:       ShowToastDialog.closeLoader();
93:     }
94:   }
95: 
96:   Future<void> _navigate(SectionModel sectionModel) async {
97:     await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
98:       if (value != null) {
99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
100:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
101:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
102: 
103:         if (sectionModel.packagingChargeEnable == true) {
104:           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
105:         }
106:         if (sectionModel.platformFee?.enable == true) {
107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {

89:       }
90:     } catch (e) {
91:       print("Error during service tap: $e");
92:       ShowToastDialog.closeLoader();
93:     }
94:   }
95: 
96:   Future<void> _navigate(SectionModel sectionModel) async {
97:     await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
98:       if (value != null) {
99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
100:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
101:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
102: 
103:         if (sectionModel.packagingChargeEnable == true) {
104:           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
105:         }
106:         if (sectionModel.platformFee?.enable == true) {
107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);

95: 
96:   Future<void> _navigate(SectionModel sectionModel) async {
97:     await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
98:       if (value != null) {
99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
100:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
101:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
102: 
103:         if (sectionModel.packagingChargeEnable == true) {
104:           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
105:         }
106:         if (sectionModel.platformFee?.enable == true) {
107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {

98:       if (value != null) {
99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
100:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
101:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
102: 
103:         if (sectionModel.packagingChargeEnable == true) {
104:           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
105:         }
106:         if (sectionModel.platformFee?.enable == true) {
107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());

99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
100:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
101:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
102: 
103:         if (sectionModel.packagingChargeEnable == true) {
104:           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
105:         }
106:         if (sectionModel.platformFee?.enable == true) {
107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {

105:         }
106:         if (sectionModel.platformFee?.enable == true) {
107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {

107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());

109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());

111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());
136:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
137:         Get.to(RentalDashboardScreen());

113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());
136:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
137:         Get.to(RentalDashboardScreen());
138:       } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
139:         Get.to(ParcelDashboardScreen());

115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());
136:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
137:         Get.to(RentalDashboardScreen());
138:       } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
139:         Get.to(ParcelDashboardScreen());
140:       } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
141:         Get.to(OnDemandDashboardScreen());

117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());
136:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
137:         Get.to(RentalDashboardScreen());
138:       } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
139:         Get.to(ParcelDashboardScreen());
140:       } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
141:         Get.to(OnDemandDashboardScreen());
142:       } else {
143:         Get.to(() => DashBoardScreen());

124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());
136:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
137:         Get.to(RentalDashboardScreen());
138:       } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
139:         Get.to(ParcelDashboardScreen());
140:       } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
141:         Get.to(OnDemandDashboardScreen());
142:       } else {
143:         Get.to(() => DashBoardScreen());
144:       }
145:     }
146:   }
147: 
148:   final CartProvider cartProvider = CartProvider();
149: 
150:   void showAlertDialog(BuildContext context, UserModel user, SectionModel sectionModel) {

126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());
136:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
137:         Get.to(RentalDashboardScreen());
138:       } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
139:         Get.to(ParcelDashboardScreen());
140:       } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
141:         Get.to(OnDemandDashboardScreen());
142:       } else {
143:         Get.to(() => DashBoardScreen());
144:       }
145:     }
146:   }
147: 
148:   final CartProvider cartProvider = CartProvider();
149: 
150:   void showAlertDialog(BuildContext context, UserModel user, SectionModel sectionModel) {
151:     Get.defaultDialog(
152:       title: "Alert!".tr,

128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());
136:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
137:         Get.to(RentalDashboardScreen());
138:       } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
139:         Get.to(ParcelDashboardScreen());
140:       } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
141:         Get.to(OnDemandDashboardScreen());
142:       } else {
143:         Get.to(() => DashBoardScreen());
144:       }
145:     }
146:   }
147: 
148:   final CartProvider cartProvider = CartProvider();
149: 
150:   void showAlertDialog(BuildContext context, UserModel user, SectionModel sectionModel) {
151:     Get.defaultDialog(
152:       title: "Alert!".tr,
153:       content: Column(
154:         mainAxisSize: MainAxisSize.min,

130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());
136:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
137:         Get.to(RentalDashboardScreen());
138:       } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
139:         Get.to(ParcelDashboardScreen());
140:       } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
141:         Get.to(OnDemandDashboardScreen());
142:       } else {
143:         Get.to(() => DashBoardScreen());
144:       }
145:     }
146:   }
147: 
148:   final CartProvider cartProvider = CartProvider();
149: 
150:   void showAlertDialog(BuildContext context, UserModel user, SectionModel sectionModel) {
151:     Get.defaultDialog(
152:       title: "Alert!".tr,
153:       content: Column(
154:         mainAxisSize: MainAxisSize.min,
155:         children: [
156:           Text("If you select this Section/Service, your previously added items will be removed from the cart.".tr, textAlign: TextAlign.center),

132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());
136:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
137:         Get.to(RentalDashboardScreen());
138:       } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
139:         Get.to(ParcelDashboardScreen());
140:       } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
141:         Get.to(OnDemandDashboardScreen());
142:       } else {
143:         Get.to(() => DashBoardScreen());
144:       }
145:     }
146:   }
147: 
148:   final CartProvider cartProvider = CartProvider();
149: 
150:   void showAlertDialog(BuildContext context, UserModel user, SectionModel sectionModel) {
151:     Get.defaultDialog(
152:       title: "Alert!".tr,
153:       content: Column(
154:         mainAxisSize: MainAxisSize.min,
155:         children: [
156:           Text("If you select this Section/Service, your previously added items will be removed from the cart.".tr, textAlign: TextAlign.center),
157:           const SizedBox(height: 20),
158:           Row(

142:       } else {
143:         Get.to(() => DashBoardScreen());
144:       }
145:     }
146:   }
147: 
148:   final CartProvider cartProvider = CartProvider();
149: 
150:   void showAlertDialog(BuildContext context, UserModel user, SectionModel sectionModel) {
151:     Get.defaultDialog(
152:       title: "Alert!".tr,
153:       content: Column(
154:         mainAxisSize: MainAxisSize.min,
155:         children: [
156:           Text("If you select this Section/Service, your previously added items will be removed from the cart.".tr, textAlign: TextAlign.center),
157:           const SizedBox(height: 20),
158:           Row(
159:             children: [
160:               Expanded(
161:                 child: RoundedButtonFill(
162:                   height: 5.5,
163:                   title: "Cancel".tr,
164:                   onPress: () {
165:                     Get.back();
166:                   },
167:                   color: AppThemeData.grey900,
168:                   textColor: AppThemeData.surface,

148:   final CartProvider cartProvider = CartProvider();
149: 
150:   void showAlertDialog(BuildContext context, UserModel user, SectionModel sectionModel) {
151:     Get.defaultDialog(
152:       title: "Alert!".tr,
153:       content: Column(
154:         mainAxisSize: MainAxisSize.min,
155:         children: [
156:           Text("If you select this Section/Service, your previously added items will be removed from the cart.".tr, textAlign: TextAlign.center),
157:           const SizedBox(height: 20),
158:           Row(
159:             children: [
160:               Expanded(
161:                 child: RoundedButtonFill(
162:                   height: 5.5,
163:                   title: "Cancel".tr,
164:                   onPress: () {
165:                     Get.back();
166:                   },
167:                   color: AppThemeData.grey900,
168:                   textColor: AppThemeData.surface,
169:                 ),
170:               ),
171:               const SizedBox(width: 12),
172:               Expanded(
173:                 child: RoundedButtonFill(
174:                   title: "OK".tr,

172:               Expanded(
173:                 child: RoundedButtonFill(
174:                   title: "OK".tr,
175:                   height: 5.5,
176:                   onPress: () async {
177:                     DatabaseHelper.instance.deleteAllCartProducts();
178:                     cartProvider.clearDatabase();
179:                     Get.back();
180:                     if (sectionModel.serviceTypeFlag == "ecommerce-service") {
181:                       Get.off(() => DashBoardEcommerceScreen());
182:                     } else {
183:                       Get.to(() => DashBoardScreen());
184:                     }
185:                   },
186:                   color: AppThemeData.primary300,
187:                   textColor: AppThemeData.surface,
188:                 ),
189:               ),
190:             ],
191:           ),
192:         ],
193:       ),
194:       actions: [], // ðŸ‘ˆ keep this empty since we put buttons in content
195:     );
196:   }
197: }

```

## Final Status

STATUS: SECTION_MODEL_PARSE_ERROR_AUDITED