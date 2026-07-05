# PLATFORM FEE MODEL AUDIT

Generated: 06/28/2026 21:46:42

Mode: read-only source audit. No patch. No deploy. No Firebase write. No order creation.

## Reason

- Customer Home still blank after sections.order patch.
- Runtime parse error indicates null is being parsed as Map<String, dynamic>.
- SectionModel line found: platformFee = PlatformFeeModel.fromJson(json['platformFee']);
- Need to know required platformFee fields before controlled data patch.


## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\platform_fee_model.dart

```dart
1: class PlatformFeeModel {
2:   String? fee;
3:   bool? enable;
4: 
5:   PlatformFeeModel({this.fee, this.enable});
6: 
7:   PlatformFeeModel.fromJson(Map<String, dynamic> json) {
8:     fee = json['fee'] ?? '0.0';
9:     enable = json['enable'] ?? false;
10:   }
11: 
12:   Map<String, dynamic> toJson() {
13:     final Map<String, dynamic> data = <String, dynamic>{};
14:     data['fee'] = fee;
15:     data['enable'] = enable;
16:     return data;
17:   }
18: }
```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\admin_commission_model.dart

```dart
1: class AdminCommission {
2:   String? amount;
3:   bool? isEnabled;
4:   String? commissionType;
5: 
6:   AdminCommission({this.amount, this.isEnabled, this.commissionType});
7: 
8:   AdminCommission.fromJson(Map<String, dynamic> json) {
9:     amount = json['commission'].toString();
10:     isEnabled = json['enable'];
11:     commissionType = json['type'];
12:   }
13: 
14:   Map<String, dynamic> toJson() {
15:     final Map<String, dynamic> data = <String, dynamic>{};
16:     data['commission'] = amount;
17:     data['enable'] = isEnabled;
18:     data['type'] = commissionType;
19:     return data;
20:   }
21: }
```

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

## Final Status

STATUS: PLATFORM_FEE_MODEL_AUDITED