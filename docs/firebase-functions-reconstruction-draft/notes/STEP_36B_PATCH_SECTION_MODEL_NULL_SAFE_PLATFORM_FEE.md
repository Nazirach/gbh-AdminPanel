# SECTION MODEL NULL SAFE PLATFORM FEE PATCH

Generated: 06/30/2026 22:37:48
Mode: local patch only.

File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart
Backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart.bak_STEP36B_20260630_223748

## Verification
```text
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:51:    markerIcon = json['markerIcon'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:52:    id = json['id'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:53:    adminCommision = (json.containsKey('adminCommision') && json['adminCommision'] != null) ? AdminCommission.fromJson(Map<String, dynamic>.from(json['adminCommision'])) : null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:54:    isActive = json['isActive'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:55:    theme = json['theme'] ?? "theme_2";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:56:    dineInActive = json['dine_in_active'] ?? false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:57:    isProductDetails = json['is_product_details'] ?? false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:67:      nearByRadius = rawRadius.toInt();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:68:    }
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:69:    platformFee = json['platformFee'] != null ? PlatformFeeModel.fromJson(Map<String, dynamic>.from(json['platformFee'])) : PlatformFeeModel();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:70:    packagingChargeEnable = json['packagingChargeEnable'] ?? false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:71:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:72:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:73:  Map<String, dynamic> toJson() {
```

## Final Status
STATUS: SECTION_MODEL_NULL_SAFE_PLATFORM_FEE_PATCHED