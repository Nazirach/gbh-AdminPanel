# REAL SERVICE HOME SCREEN BLOCK

Generated: 06/30/2026 22:14:41
Mode: read-only. No patch.

File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart

## Lines 1-260
```dart
   1: import 'package:customer/constant/constant.dart';
   2: import 'package:flutter/material.dart';
   3: import 'package:get/get.dart';
   4: import '../../controllers/service_list_controller.dart';
   5: import '../../controllers/theme_controller.dart';
   6: import '../../themes/app_them_data.dart';
   7: import '../../utils/network_image_widget.dart';
   8: 
   9: class ServiceListScreen extends StatelessWidget {
  10:   const ServiceListScreen({super.key});
  11: 
  12:   @override
  13:   Widget build(BuildContext context) {
  14:     final themeController = Get.find<ThemeController>();
  15:     return GetX(
  16:       init: ServiceListController(),
  17:       builder: (controller) {
  18:         return Scaffold(
  19:           appBar: AppBar(
  20:             elevation: 0,
  21:             automaticallyImplyLeading: false,
  22:             titleSpacing: 20,
  23:             centerTitle: false,
  24:             title: Column(
  25:               mainAxisAlignment: MainAxisAlignment.start,
  26:               crossAxisAlignment: CrossAxisAlignment.start,
  27:               children: [
  28:                 Text("GHALBIT MARITRONIX".tr, style: AppThemeData.semiBoldTextStyle(fontSize: 22, color: themeController.isDark.value ? AppThemeData.grey50 : AppThemeData.grey900)),
  29:                 Text("All Your Needs in One App!".tr, style: AppThemeData.regularTextStyle(fontSize: 14, color: themeController.isDark.value ? AppThemeData.grey100 : AppThemeData.grey700)),
  30:               ],
  31:             ),
  32:           ),
  33:           body:
  34:               controller.isLoading.value
  35:                   ? const Center(child: CircularProgressIndicator())
  36:                   : SingleChildScrollView(
  37:                     child: Column(
  38:                       crossAxisAlignment: CrossAxisAlignment.start,
  39:                       children: [
  40:                         const SizedBox(height: 12),
  41:                         controller.serviceListBanner.isEmpty ? SizedBox() : BannerView(bannerList: controller.serviceListBanner),
  42:                         const SizedBox(height: 12),
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
  97: class BannerView extends StatelessWidget {
  98:   final List<dynamic> bannerList;
  99:   final RxInt currentPage = 0.obs;
 100:   final ScrollController scrollController = ScrollController();
 101: 
 102:   BannerView({super.key, required this.bannerList});
 103: 
 104:   void onScroll(BuildContext context) {
 105:     if (scrollController.hasClients && bannerList.isNotEmpty) {
 106:       final screenWidth = MediaQuery.of(context).size.width;
 107:       final itemWidth = screenWidth * 0.8 + 10; // 80% width + spacing
 108:       final offset = scrollController.offset;
 109:       final index = (offset / itemWidth).round();
 110: 
 111:       if (index != currentPage.value && index < bannerList.length) {
 112:         currentPage.value = index;
 113:       }
 114:     }
 115:   }
 116: 
 117:   @override
 118:   Widget build(BuildContext context) {
 119:     scrollController.addListener(() => onScroll(context));
 120: 
 121:     return Padding(
 122:       padding: const EdgeInsets.symmetric(horizontal: 16),
 123:       child: Column(
 124:         children: [
 125:           SizedBox(
 126:             height: 168,
 127:             child: ListView.separated(
 128:               controller: scrollController,
 129:               scrollDirection: Axis.horizontal,
 130:               itemCount: bannerList.length,
 131:               separatorBuilder: (_, __) => const SizedBox(width: 12),
 132:               itemBuilder: (context, index) {
 133:                 return ClipRRect(
 134:                   borderRadius: BorderRadius.circular(12),
 135:                   child: SizedBox(width: MediaQuery.of(context).size.width * 0.8, child: NetworkImageWidget(imageUrl: bannerList[index].toString(), fit: BoxFit.fill, showShimmer: false)),
 136:                 );
 137:               },
 138:             ),
 139:           ),
 140:           const SizedBox(height: 8),
 141:           Obx(() {
 142:             return Row(
 143:               children: List.generate(bannerList.length, (index) {
 144:                 final isSelected = currentPage.value == index;
 145:                 return Expanded(child: Container(height: 4, decoration: BoxDecoration(color: isSelected ? AppThemeData.grey300 : AppThemeData.grey100, borderRadius: BorderRadius.circular(5))));
 146:               }),
 147:             );
 148:           }),
 149:         ],
 150:       ),
 151:     );
 152:   }
 153: }
```

## Final Status
STATUS: REAL_SERVICE_HOME_SCREEN_BLOCK_READ