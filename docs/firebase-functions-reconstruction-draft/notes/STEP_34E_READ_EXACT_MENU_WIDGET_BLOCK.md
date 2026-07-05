# EXACT MENU WIDGET BLOCK

Generated: 06/30/2026 22:08:27
Mode: read-only. No patch.

File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart

## Lines 145-210
```dart
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
STATUS: EXACT_MENU_WIDGET_BLOCK_READ