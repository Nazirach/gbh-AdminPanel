# FIX RUNTIME MENU COUNT LOG BUILD ERROR

Generated: 06/29/2026 08:25:37
Mode: local code patch only. No Firebase write.

Problem: SectionModel has no getter order.
Fix: removed s.order from STEP13F debug logs.

Controller backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart.bak_13H_20260629_082536
Firestore backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart.bak_13H_20260629_082536

## Verification
```text
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:49:    print('STEP13F_SECTION_COUNT controller sections=' + sections.length.toString() + ' sectionList=' + sectionList.length.toString());
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:50:    for (final s in sectionList) { print('STEP13F_SECTION_ITEM name=' + (s.name ?? '').toString() + ' flag=' + (s.serviceTypeFlag ?? '').toString()); }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:51:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:39:import '../models/gift_cards_order_model.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:40:import '../models/inbox_model.dart';
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:45:import '../models/order_model.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:46:import '../models/parcel_category.dart';
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:277:    print('STEP13F_FIRESTORE_SECTIONS_COUNT count=' + sections.length.toString());
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:278:    for (final s in sections) { print('STEP13F_FIRESTORE_SECTION_ITEM name=' + (s.name ?? '').toString() + ' flag=' + (s.serviceTypeFlag ?? '').toString()); }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:279:    return sections;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:289:    print('STEP13F_FIRESTORE_SECTIONS_COUNT count=' + sections.length.toString());
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:290:    for (final s in sections) { print('STEP13F_FIRESTORE_SECTION_ITEM name=' + (s.name ?? '').toString() + ' flag=' + (s.serviceTypeFlag ?? '').toString()); }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:291:    return sections;
```

## Final Status
STATUS: RUNTIME_MENU_COUNT_LOG_BUILD_ERROR_FIXED