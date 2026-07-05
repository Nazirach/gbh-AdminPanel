# FOCUSED AUDIT SERVICE LIST SHORT

Generated: 06/29/2026 08:14:54

Mode: read-only. No patch. No Firebase write.

## service_list_screen.dart
```text
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:4:import '../../controllers/service_list_controller.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:5:import '../../controllers/theme_controller.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:6:import '../../themes/app_them_data.dart';
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:7:import '../../utils/network_image_widget.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:8:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:9:class ServiceListScreen extends StatelessWidget {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:10:  const ServiceListScreen({super.key});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:11:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:12:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:33:          body:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:34:              controller.isLoading.value
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:35:                  ? const Center(child: CircularProgressIndicator())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:36:                  : SingleChildScrollView(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:37:                    child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:38:                      crossAxisAlignment: CrossAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:39:                      children: [
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:40:                        const SizedBox(height: 12),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:41:                        controller.serviceListBanner.isEmpty ? SizedBox() : BannerView(bannerList: controller.serviceListBanner),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:42:                        const SizedBox(height: 12),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:43:                        Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:44:                          padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:45:                          child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:46:                            crossAxisAlignment: CrossAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:47:                            children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:48:                              Text("Explore Our Services".tr, style: AppThemeData.semiBoldTextStyle(fontSize: 20, color: themeController.isDark.value ? AppThemeData.grey50 : AppThemeData.grey900)),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:49:                              const SizedBox(height: 12),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:50:                              GridView.builder(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:51:                                itemCount: controller.sectionList.length,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:52:                                physics: const NeverScrollableScrollPhysics(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:53:                                shrinkWrap: true,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:54:                                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 12, crossAxisSpacing: 12, mainAxisExtent: 130),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:55:                                itemBuilder: (context, index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:56:                                  final section = controller.sectionList[index];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:57:                                  return GestureDetector(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:58:                                    onTap: () => controller.onServiceTap(context, section),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:59:                                    child: Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:60:                                      decoration: BoxDecoration(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:61:                                        gradient: LinearGradient(colors: Constant.sectionColor[index % Constant.sectionColor.length], begin: Alignment.topCenter, end: Alignment.bottomCenter),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:62:                                        borderRadius: BorderRadius.circular(12),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:63:                                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:75:                                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:76:                                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:77:                                          const Spacer(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:78:                                          NetworkImageWidget(imageUrl: section.sectionImage ?? '', width: 80, height: 60, fit: BoxFit.contain, showShimmer: false),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:79:                                        ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:80:                                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:81:                                    ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:82:                                  );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:83:                                },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:122:      padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:123:      child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:124:        children: [
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:125:          SizedBox(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:126:            height: 168,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:127:            child: ListView.separated(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:128:              controller: scrollController,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:129:              scrollDirection: Axis.horizontal,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:130:              itemCount: bannerList.length,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:131:              separatorBuilder: (_, __) => const SizedBox(width: 12),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:132:              itemBuilder: (context, index) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:133:                return ClipRRect(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:134:                  borderRadius: BorderRadius.circular(12),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:135:                  child: SizedBox(width: MediaQuery.of(context).size.width * 0.8, child: NetworkImageWidget(imageUrl: bannerList[index].toString(), fit: BoxFit.fill, showShimmer: false)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:136:                );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:137:              },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:138:            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:139:          ),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:140:          const SizedBox(height: 8),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:141:          Obx(() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:142:            return Row(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:143:              children: List.generate(bannerList.length, (index) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:144:                final isSelected = currentPage.value == index;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:145:                return Expanded(child: Container(height: 4, decoration: BoxDecoration(color: isSelected ? AppThemeData.grey300 : AppThemeData.grey100, borderRadius: BorderRadius.circular(5))));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:146:              }),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:147:            );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:148:          }),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:149:        ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:150:      ),
```

## service_list_controller.dart
```text
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:12:import 'package:customer/models/currency_model.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:13:import 'package:customer/themes/app_them_data.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:14:import 'package:customer/themes/round_button_fill.dart';
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:15:import 'package:customer/themes/show_toast_dialog.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:16:import 'package:customer/utils/notification_service.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:17:import 'package:customer/utils/preferences.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:18:import 'package:firebase_auth/firebase_auth.dart' as auth;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:19:import 'package:flutter/material.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:20:import 'package:get/get.dart';
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:21:import '../screen_ui/auth_screens/login_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:22:import '../screen_ui/multi_vendor_service/dash_board_screens/dash_board_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:23:import '../screen_ui/on_demand_service/on_demand_dashboard_screen.dart';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:24:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:25:class ServiceListController extends GetxController {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:26:  var isLoading = false.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:27:  var serviceListBanner = <dynamic>[].obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:28:  var sectionList = <SectionModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:29:  var currencyData = CurrencyModel().obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:30:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:31:  @override
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:32:  void onInit() {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:33:    super.onInit();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:34:    loadData();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:35:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:36:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:37:  Future<void> loadData() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:38:    isLoading.value = true;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:39:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:40:    // fetch currency
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:41:    CurrencyModel? currency = await FireStoreUtils.getCurrency();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:42:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:43:    currencyData.value = currency ?? CurrencyModel(id: "", code: "USD", decimal: 2, isactive: true, name: "US Dollar", symbol: "\$", symbolatright: false);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:44:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:45:    // Load sections
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:46:    List<SectionModel> sections = await FireStoreUtils.getSections();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:47:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:48:    sectionList.assignAll(sections);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:49:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:50:    await FireStoreUtils.getSectionBannerList().then((value) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:51:      serviceListBanner.assignAll(value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:52:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:53:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:54:    await getZone();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:55:    isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:56:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:57:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:58:  Future<void> getZone() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:59:    await FireStoreUtils.getZone().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:60:      if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:61:        Constant.zoneList = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:65:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:66:  Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:67:    try {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:68:      ShowToastDialog.showLoader("Please wait...".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:69:      Constant.sectionConstantModel = sectionModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:70:      AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:71:      if (auth.FirebaseAuth.instance.currentUser != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:72:        String uid = auth.FirebaseAuth.instance.currentUser!.uid;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:73:        UserModel? user = await FireStoreUtils.getUserProfile(uid);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:74:        if (user != null && user.role == Constant.userRoleCustomer) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:75:          user.fcmToken = await NotificationService.getToken();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:76:          await FireStoreUtils.updateUser(user);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:77:          ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:78:          if (sectionModel.serviceType == 'Ecommerce Service') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:79:            await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:80:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:81:          await _navigate(sectionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:82:        } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:83:          ShowToastDialog.closeLoader();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:84:          Get.offAll(() => const LoginScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:85:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:86:      } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:87:        ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:88:        await _navigate(sectionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:89:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:90:    } catch (e) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:91:      print("Error during service tap: $e");
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:92:      ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:93:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:94:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:95:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:96:  Future<void> _navigate(SectionModel sectionModel) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:97:    await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:98:      if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:112:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:113:    if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:114:      if (cartItem.isNotEmpty) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:115:        showAlertDialog(Get.context!, UserModel(), sectionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:116:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:117:        if (sectionModel.serviceTypeFlag == "ecommerce-service") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:118:          Get.to(DashBoardEcommerceScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:119:        } else if (sectionModel.serviceTypeFlag == "cab-service") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:120:          Get.to(CabDashboardScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:121:        } else if (sectionModel.serviceTypeFlag == "rental-service") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:147:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:148:  final CartProvider cartProvider = CartProvider();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:149:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:150:  void showAlertDialog(BuildContext context, UserModel user, SectionModel sectionModel) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:151:    Get.defaultDialog(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:152:      title: "Alert!".tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:153:      content: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:154:        mainAxisSize: MainAxisSize.min,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:155:        children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:156:          Text("If you select this Section/Service, your previously added items will be removed from the cart.".tr, textAlign: TextAlign.center),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:157:          const SizedBox(height: 20),
```

## fire_store_utils.dart
```text
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:206:    List<OnBoardingModel> onBoardingModel = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:207:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:208:        .collection(CollectionName.onBoarding)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:209:        .where("type", isEqualTo: "customer")
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:210:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:211:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:212:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:213:            OnBoardingModel documentModel = OnBoardingModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:214:            onBoardingModel.add(documentModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:215:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:216:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:217:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:224:    List<ZoneModel> airPortList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:225:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:226:        .collection(CollectionName.zone)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:227:        .where('publish', isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:228:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:229:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:230:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:231:            ZoneModel ariPortModel = ZoneModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:232:            airPortList.add(ariPortModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:233:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:234:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:235:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:251:  static Future<ReferralModel?> getReferralUserByCode(String referralCode) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:252:    ReferralModel? referralModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:253:    try {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:254:      await fireStore.collection(CollectionName.referral).where("referralCode", isEqualTo: referralCode).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:255:        if (value.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:256:          referralModel = ReferralModel.fromJson(value.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:257:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:258:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:259:    } catch (e, s) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:260:      print('FireStoreUtils.firebaseCreateNewUser $e $s');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:261:      return null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:262:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:263:    return referralModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:264:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:265:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:266:  static Future<List<SectionModel>> getSections() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:267:    List<SectionModel> sections = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:268:    QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:269:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:270:    await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:271:      try {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:272:        sections.add(SectionModel.fromJson(document.data()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:273:      } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:274:        print('**-FireStoreUtils.getSection Parse error $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:275:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:276:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:277:    return sections;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:278:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:279:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:280:  static Future<List<dynamic>> getSectionBannerList() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:289:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:290:  static Future<CurrencyModel?> getCurrency() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:291:    CurrencyModel? currency;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:292:    await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: true).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:293:      if (value.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:294:        currency = CurrencyModel.fromJson(value.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:295:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:296:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:297:    return currency;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:298:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:299:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:300:  static Future<List<AdvertisementModel>> getAllAdvertisement() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:301:    List<AdvertisementModel> advertisementList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:302:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:303:        .collection(CollectionName.advertisements)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:304:        .where('status', isEqualTo: 'approved')
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:305:        .where('paymentStatus', isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:306:        .where('startDate', isLessThanOrEqualTo: DateTime.now())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:307:        .where('endDate', isGreaterThan: DateTime.now())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:308:        .orderBy('priority', descending: false)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:309:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:310:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:311:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:312:            AdvertisementModel advertisementModel = AdvertisementModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:313:            if (advertisementModel.isPaused == null || advertisementModel.isPaused == false) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:314:              advertisementList.add(advertisementModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:315:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:316:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:320:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:321:  static Future<List<FavouriteModel>> getFavouriteRestaurant() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:322:    List<FavouriteModel> favouriteList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:323:    await fireStore.collection(CollectionName.favoriteVendor).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:324:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:325:        FavouriteModel favouriteModel = FavouriteModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:326:        favouriteList.add(favouriteModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:327:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:328:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:329:    log("CollectionName.favoriteRestaurant :: ${favouriteList.length}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:330:    return favouriteList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:331:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:332:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:333:  static Future<EmailTemplateModel?> getEmailTemplates(String type) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:334:    EmailTemplateModel? emailTemplateModel;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:335:    await fireStore.collection(CollectionName.emailTemplates).where('type', isEqualTo: type).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:336:      print("------>");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:337:      if (value.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:338:        print(value.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:339:        emailTemplateModel = EmailTemplateModel.fromJson(value.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:340:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:341:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:342:    return emailTemplateModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:343:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:347:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:348:      await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:349:          .collection(CollectionName.cashback)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:350:          .where('isEnabled', isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:351:          .where('startDate', isLessThanOrEqualTo: Timestamp.now())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:352:          .where('endDate', isGreaterThanOrEqualTo: Timestamp.now())
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:353:          .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:354:          .then((event) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:355:            if (event.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:356:              for (var element in event.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:357:                CashbackModel cashbackModel = CashbackModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:358:                if (cashbackModel.customerIds == null || cashbackModel.customerIds?.contains(FireStoreUtils.getCurrentUid()) == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:359:                  cashbackList.add(cashbackModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:360:                }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:421:    List<Placemark> placeMarks = await placemarkFromCoordinates(Constant.selectedLocation.location!.latitude ?? 0.0, Constant.selectedLocation.location!.longitude ?? 0.0);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:422:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:423:        .collection(CollectionName.tax)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:424:        .where('sectionId', isEqualTo: sectionId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:425:        .where('country', isEqualTo: placeMarks.first.country)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:426:        .where('enable', isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:427:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:428:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:429:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:430:            TaxModel taxModel = TaxModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:431:            taxList.add(taxModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:432:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:433:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:434:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:444:    if (isUpcoming) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:445:      await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:446:          .collection(CollectionName.bookedTable)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:447:          .where('authorID', isEqualTo: getCurrentUid())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:448:          .where('date', isGreaterThan: Timestamp.now())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:449:          .orderBy('date', descending: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:450:          .orderBy('createdAt', descending: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:451:          .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:452:          .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:453:            for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:454:              DineInBookingModel taxModel = DineInBookingModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:455:              list.add(taxModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:456:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:457:          })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:458:          .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:461:    } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:462:      await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:463:          .collection(CollectionName.bookedTable)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:464:          .where('authorID', isEqualTo: getCurrentUid())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:465:          .where('date', isLessThan: Timestamp.now())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:466:          .orderBy('date', descending: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:467:          .orderBy('createdAt', descending: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:468:          .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:469:          .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:470:            for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:471:              DineInBookingModel taxModel = DineInBookingModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:472:              list.add(taxModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:473:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:474:          })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:475:          .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:484:    List<VendorCategoryModel> list = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:485:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:486:        .collection(CollectionName.vendorCategories)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:487:        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:488:        .where("show_in_homepage", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:489:        .where('publish', isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:490:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:491:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:492:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:493:            VendorCategoryModel walletTransactionModel = VendorCategoryModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:494:            list.add(walletTransactionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:495:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:496:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:497:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:504:    List<ProductModel> list = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:505:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:506:        .collection(CollectionName.vendorProducts)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:507:        .where('brandID', isEqualTo: brandId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:508:        .where('publish', isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:509:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:510:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:511:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:512:            ProductModel walletTransactionModel = ProductModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:513:            list.add(walletTransactionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:514:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:515:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:516:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:523:    List<BannerModel> bannerList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:524:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:525:        .collection(CollectionName.bannerItems)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:526:        .where("is_publish", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:527:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:528:        .where("position", isEqualTo: "middle")
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:529:        .orderBy("set_order", descending: false)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:530:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:531:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:532:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:533:            BannerModel bannerHome = BannerModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:534:            bannerList.add(bannerHome);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:535:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:536:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:537:    return bannerList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:539:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:540:  static Future<List<BrandsModel>> getBrandList() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:541:    List<BrandsModel> brandList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:542:    await fireStore.collection(CollectionName.brands).where("is_publish", isEqualTo: true).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:543:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:544:        BrandsModel bannerHome = BrandsModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:545:        brandList.add(bannerHome);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:546:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:547:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:548:    return brandList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:549:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:550:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:567:  static Future<List> getVendorCuisines(String id) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:568:    List tagList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:569:    List prodTagList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:570:    QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.vendorProducts).where('vendorID', isEqualTo: id).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:571:    await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:572:      if (document.data().containsKey("categoryID") && document.data()['categoryID'].toString().isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:573:        prodTagList.add(document.data()['categoryID']);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:574:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:575:    });
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:576:    QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(CollectionName.vendorCategories).where('publish', isEqualTo: true).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:577:    await Future.forEach(catQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:578:      Map<String, dynamic> catDoc = document.data();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:579:      if (catDoc.containsKey("id") && catDoc['id'].toString().isNotEmpty && catDoc.containsKey("title") && catDoc['title'].toString().isNotEmpty && prodTagList.contains(catDoc['id'])) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:580:        tagList.add(catDoc['title']);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:581:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:582:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:583:    return tagList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:584:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:585:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:586:  static Future<List<FavouriteItemModel>> getFavouriteItem() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:587:    List<FavouriteItemModel> favouriteList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:588:    await fireStore.collection(CollectionName.favoriteItem).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:589:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:590:        FavouriteItemModel favouriteModel = FavouriteItemModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:591:        favouriteList.add(favouriteModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:592:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:593:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:594:    return favouriteList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:595:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:596:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:626:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:627:  static Future<List<GiftCardsModel>> getGiftCard() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:628:    List<GiftCardsModel> giftCardModelList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:629:    QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.giftCards).where("isEnable", isEqualTo: true).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:630:    await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:631:      try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:632:        log(document.data().toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:633:        giftCardModelList.add(GiftCardsModel.fromJson(document.data()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:634:      } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:635:        debugPrint('FireStoreUtils.get Currency Parse error $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:636:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:637:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:773:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:774:  static Future<List<GiftCardsOrderModel>> getGiftHistory() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:775:    List<GiftCardsOrderModel> giftCardsOrderList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:776:    await fireStore.collection(CollectionName.giftPurchases).where("userid", isEqualTo: FireStoreUtils.getCurrentUid()).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:777:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:778:        GiftCardsOrderModel giftCardsOrderModel = GiftCardsOrderModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:779:        giftCardsOrderList.add(giftCardsOrderModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:780:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:781:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:782:    return giftCardsOrderList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:783:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:784:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:792:      final snapshot =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:793:          await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:794:              .collection(CollectionName.vendorOrders)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:795:              .where("authorID", isEqualTo: getCurrentUid())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:796:              .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:797:              .orderBy("createdAt", descending: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:798:              .get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:799:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:800:      print("Snapshot size: ${snapshot.docs.length}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:801:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:802:      for (var element in snapshot.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:803:        OrderModel order = OrderModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:804:        print("Order fetched: ${order.id}"); // or other fields
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:805:        list.add(order);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:818:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:819:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:820:        .collection(CollectionName.itemsReview)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:821:        .where('orderid', isEqualTo: orderId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:822:        .where('productId', isEqualTo: productID)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:823:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:824:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:825:          if (value.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:826:            ratingModel = RatingModel.fromJson(value.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:827:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:828:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:829:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:830:          log(error.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:920:    if (selectedFoodType == "TakeAway") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:921:      await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:922:          .collection(CollectionName.vendorProducts)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:923:          .where("vendorID", isEqualTo: vendorId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:924:          .where('publish', isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:925:          .orderBy("createdAt", descending: false)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:926:          .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:927:          .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:928:            for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:929:              ProductModel productModel = ProductModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:930:              list.add(productModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:931:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:932:          })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:933:          .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:936:    } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:937:      await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:938:          .collection(CollectionName.vendorProducts)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:939:          .where("vendorID", isEqualTo: vendorId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:940:          .where("takeawayOption", isEqualTo: false)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:941:          .where('publish', isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:942:          .orderBy("createdAt", descending: false)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:943:          .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:944:          .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:945:            for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:946:              ProductModel productModel = ProductModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:947:              list.add(productModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:948:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:949:          })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:950:          .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:975:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:976:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:977:        .collection(CollectionName.coupons)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:978:        .where("vendorID", isEqualTo: vendorId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:979:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:980:        .where("isEnabled", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:981:        .where("isPublic", isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:982:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:983:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:984:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:985:            CouponModel taxModel = CouponModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:986:            coupon.add(taxModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:987:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:988:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:989:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:998:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:999:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1000:        .collection(CollectionName.coupons)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1001:        .where("vendorID", isEqualTo: vendorId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1002:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1003:        .where("isEnabled", isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1004:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1005:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1006:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1007:            CouponModel taxModel = CouponModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1008:            coupon.add(taxModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1009:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1010:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1011:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1037:    List<CashbackRedeemModel> redeemedDocs = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1038:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1039:    try {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1040:      await fireStore.collection(CollectionName.cashbackRedeem).where('userId', isEqualTo: FireStoreUtils.getCurrentUid()).where('cashbackId', isEqualTo: cashbackId).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1041:        redeemedDocs =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1042:            value.docs.map((doc) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1043:              return CashbackRedeemModel.fromJson(doc.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1044:            }).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1045:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1046:    } catch (error, stackTrace) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1047:      log('Error fetching redeemed cashback data: $error', stackTrace: stackTrace);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1048:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1086:    List<CouponModel> couponList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1087:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1088:        .collection(CollectionName.coupons)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1089:        .where("vendorID", isEqualTo: vendorId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1090:        .where("isEnabled", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1091:        .where("isPublic", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1092:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1093:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1094:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1095:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1096:            CouponModel favouriteModel = CouponModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1097:            couponList.add(favouriteModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1098:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1099:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1100:    return couponList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1128:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1129:  static Future<List<RatingModel>> getVendorReviews(String vendorId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1130:    List<RatingModel> ratingList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1131:    await fireStore.collection(CollectionName.itemsReview).where('VendorId', isEqualTo: vendorId).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1132:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1133:        RatingModel giftCardsOrderModel = RatingModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1134:        ratingList.add(giftCardsOrderModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1135:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1136:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1137:    return ratingList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1138:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1139:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1247:      if (ecommarce == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1248:        query =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1249:            isDining == true
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1250:                ? fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where("enabledDiveInFuture", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1251:                : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1252:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1253:        query =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1254:            isDining == true
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1255:                ? fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1256:                    .collection(CollectionName.vendors)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1257:                    .where('categoryID', arrayContains: categoryId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1258:                    .where('zoneId', isEqualTo: Constant.selectedZone!.id.toString())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1259:                    .where("enabledDiveInFuture", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1260:                : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where('zoneId', isEqualTo: Constant.selectedZone!.id.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1261:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1262:      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1263:      String field = 'g';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1264:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1265:      Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1266:          .collection(collectionRef: query)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1267:          .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1268:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1304:      if (ecommarce == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1305:        query =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1306:            isDining == true
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1307:                ? fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where("enabledDiveInFuture", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1308:                : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1309:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1310:        query =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1311:            isDining == true
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1312:                ? fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1313:                    .collection(CollectionName.vendors)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1314:                    .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1315:                    .where('zoneId', isEqualTo: Constant.selectedZone?.id.toString())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1316:                    .where("enabledDiveInFuture", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1317:                : fireStore.collection(CollectionName.vendors).where('section_id', isEqualTo: Constant.sectionConstantModel!.id).where('zoneId', isEqualTo: Constant.selectedZone?.id.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1318:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1319:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1320:      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1321:      String field = 'g';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1322:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1323:      Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1324:          .collection(collectionRef: query)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1325:          .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1356:    List<VendorCategoryModel> vendorCategoryList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1357:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1358:        .collection(CollectionName.vendorCategories)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1359:        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1360:        .where("show_in_homepage", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1361:        .where('publish', isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1362:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1363:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1364:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1365:            VendorCategoryModel vendorCategoryModel = VendorCategoryModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1366:            vendorCategoryList.add(vendorCategoryModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1367:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1368:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1369:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1377:    log("FireStoreUtils.getCurrentUid() :: ${FireStoreUtils.getCurrentUid()}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1378:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1379:        .collection(CollectionName.wallet)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1380:        .where('user_id', isEqualTo: FireStoreUtils.getCurrentUid())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1381:        .orderBy('date', descending: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1382:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1383:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1384:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1385:            WalletTransactionModel walletTransactionModel = WalletTransactionModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1386:            walletTransactionList.add(walletTransactionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1387:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1388:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1389:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1395:  static Future<List<ProductModel>> getProductListByCategoryId(String categoryId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1396:    List<ProductModel> productList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1397:    List<ProductModel> categorybyProductList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1398:    QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.vendorProducts).where('categoryID', isEqualTo: categoryId).where('publish', isEqualTo: true).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1399:    await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1400:      try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1401:        productList.add(ProductModel.fromJson(document.data()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1402:      } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1403:        print('FireStoreUtils.getCurrencys Parse error $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1404:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1405:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1406:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1411:      await getAllProducts(vendor!.id.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1412:        if (Constant.isSubscriptionModelApplied == true || vendor.adminCommission?.isEnabled == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1413:          if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1414:            if (vendor.subscriptionPlan?.itemLimit == '-1') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1415:              allProduct.addAll(value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1416:            } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1417:              int selectedProduct = value.length < int.parse(vendor.subscriptionPlan?.itemLimit ?? '0') ? (value.isEmpty ? 0 : (value.length)) : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1418:              allProduct.addAll(value.sublist(0, selectedProduct));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1419:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1420:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1421:        } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1422:          allProduct.addAll(value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1423:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1424:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1425:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1440:    QuerySnapshot<Map<String, dynamic>> productsQuery =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1441:        await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1442:            .collection(CollectionName.vendorProducts)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1443:            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1444:            .where('vendorID', isEqualTo: vendorId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1445:            .where('publish', isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1446:            .orderBy('createdAt', descending: false)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1447:            .get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1448:    await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1449:      try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1450:        products.add(ProductModel.fromJson(document.data()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1451:      } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1452:        print('product**-FireStoreUtils.getAllProducts Parse error $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1453:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1454:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1463:      if (ecommarce == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1464:        collectionReference =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1465:            categoryId == null
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1466:                ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1467:                : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1468:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1469:        collectionReference =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1470:            categoryId == null
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1471:                ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("zoneId", isEqualTo: Constant.selectedZone!.id.toString())
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1472:                : fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1473:                    .collection(CollectionName.vendors)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1474:                    .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1475:                    .where("categoryID", isEqualTo: categoryId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1476:                    .where("zoneId", isEqualTo: Constant.selectedZone!.id.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1477:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1478:      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1479:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1480:      String field = 'g';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1481:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1482:      List<DocumentSnapshot> documentList =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1483:          await Geoflutterfire()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1484:              .collection(collectionRef: collectionReference)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1516:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1517:  static Future<NotificationModel?> getNotificationContent(String type) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1518:    NotificationModel? notificationModel;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1519:    await fireStore.collection(CollectionName.dynamicNotification).where('type', isEqualTo: type).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1520:      print("------>");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1521:      if (value.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1522:        print(value.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1523:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1524:        notificationModel = NotificationModel.fromJson(value.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1525:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1526:        notificationModel = NotificationModel(id: "", message: "Notification setup is pending", subject: "setup notification", type: "");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1527:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1533:    List<VendorCategoryModel> list = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1534:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1535:        .collection(CollectionName.vendorCategories)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1536:        .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1537:        .where('publish', isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1538:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1539:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1540:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1541:            print("====>${value.docs.length}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1542:            VendorCategoryModel walletTransactionModel = VendorCategoryModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1543:            list.add(walletTransactionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1544:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1545:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1557:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1558:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1559:  static Future removeFavouriteRestaurant(FavouriteModel favouriteModel) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1560:    await fireStore.collection(CollectionName.favoriteVendor).where("store_id", isEqualTo: favouriteModel.restaurantId).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1561:      value.docs.forEach((element) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1562:        await fireStore.collection(CollectionName.favoriteVendor).doc(element.id).delete();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1563:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1564:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1565:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1566:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1567:  static Future<void> setFavouriteRestaurant(FavouriteModel favouriteModel) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1568:    favouriteModel.sectionId = Constant.sectionConstantModel!.id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1573:  static Future<void> removeFavouriteItem(FavouriteItemModel favouriteModel) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1574:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1575:      final favoriteCollection = fireStore.collection(CollectionName.favoriteItem);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1576:      final querySnapshot = await favoriteCollection.where("product_id", isEqualTo: favouriteModel.productId).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1577:      for (final doc in querySnapshot.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1578:        await favoriteCollection.doc(doc.id).delete();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1579:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1580:    } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1581:      print("Error removing favourite item: $e");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1582:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1583:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1584:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1603:    List<CouponModel> list = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1604:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1605:        .collection(CollectionName.coupons)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1606:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1607:        .where("isEnabled", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1608:        .where("isPublic", isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1609:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1610:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1611:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1612:            CouponModel walletTransactionModel = CouponModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1613:            list.add(walletTransactionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1614:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1615:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1616:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1623:    List<BannerModel> bannerList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1624:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1625:        .collection(CollectionName.bannerItems)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1626:        .where("is_publish", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1627:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1628:        .where("position", isEqualTo: "top")
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1629:        .orderBy("set_order", descending: false)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1630:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1631:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1632:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1633:            BannerModel bannerHome = BannerModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1634:            bannerList.add(bannerHome);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1635:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1636:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1637:    return bannerList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1639:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1640:  static Future<List<StoryModel>> getStory() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1641:    List<StoryModel> storyList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1642:    await fireStore.collection(CollectionName.story).where('sectionID', isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1643:      print("Number of Stories Fetched: ${value.docs.length}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1644:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1645:        StoryModel walletTransactionModel = StoryModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1646:        storyList.add(walletTransactionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1647:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1648:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1649:    return storyList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1650:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1651:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1652:  static Future<GiftCardsOrderModel?> checkRedeemCode(String giftCode) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1653:    GiftCardsOrderModel? giftCardsOrderModel;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1654:    await fireStore.collection(CollectionName.giftPurchases).where("giftCode", isEqualTo: giftCode).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1655:      if (value.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1656:        giftCardsOrderModel = GiftCardsOrderModel.fromJson(value.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1657:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1658:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1659:    return giftCardsOrderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1660:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1661:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1662:  static Future<void> sendTopUpMail({required String amount, required String paymentMethod, required String tractionId}) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1703:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1704:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1705:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1706:  static Future<OrderModel?> getOrderByOrderId(String orderId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1707:    OrderModel? orderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1708:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1709:      await fireStore.collection(CollectionName.vendorOrders).doc(orderId).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1710:        if (value.data() != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1711:          orderModel = OrderModel.fromJson(value.data()!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1712:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1713:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1714:    } catch (e, s) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1722:    List<CouponModel> ordersList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1723:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1724:        .collection(CollectionName.promos)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1725:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1726:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1727:        .where("isEnabled", isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1728:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1729:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1730:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1731:            CouponModel bannerHome = CouponModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1732:            ordersList.add(bannerHome);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1733:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1734:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1735:    return ordersList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1739:    List<CouponModel> ordersList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1740:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1741:        .collection(CollectionName.parcelCoupons)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1742:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1743:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1744:        .where("isEnabled", isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1745:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1746:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1747:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1748:            CouponModel bannerHome = CouponModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1749:            ordersList.add(bannerHome);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1750:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1751:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1752:    return ordersList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1756:    List<CouponModel> ordersList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1757:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1758:        .collection(CollectionName.rentalCoupons)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1759:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1760:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1761:        .where("isEnabled", isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1762:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1763:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1764:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1765:            CouponModel bannerHome = CouponModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1766:            ordersList.add(bannerHome);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1767:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1768:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1769:    return ordersList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1823:    List<ParcelCategory> parcelCategoryList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1824:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1825:        .collection(CollectionName.parcelCategory)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1826:        .where('publish', isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1827:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1828:        .orderBy('set_order', descending: false)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1829:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1830:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1831:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1832:            try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1833:              ParcelCategory category = ParcelCategory.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1834:              parcelCategoryList.add(category);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1835:            } catch (e, stackTrace) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1836:              print('getParcelServiceCategory parse error: ${element.id} $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1975:  static Stream<List<ParcelOrderModel>> listenParcelOrders() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1976:    return fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1977:        .collection(CollectionName.parcelOrders)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1978:        .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1979:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1980:        .orderBy('createdAt', descending: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1981:        .snapshots()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1982:        .map((snapshot) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1983:          return snapshot.docs.map((doc) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1984:            log("===>");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1985:            print(doc.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1986:            return ParcelOrderModel.fromJson(doc.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1987:          }).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1988:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1990:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1991:  static Future<List<VehicleType>> getVehicleType() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1992:    List<VehicleType> vehicleTypeList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1993:    await fireStore.collection(CollectionName.vehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1994:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1995:        try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1996:          VehicleType category = VehicleType.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1997:          vehicleTypeList.add(category);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1998:        } catch (e, stackTrace) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1999:          print('getVehicleType error: ${element.id} $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2000:          print(stackTrace);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2001:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2006:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2007:  static Future<List<PopularDestination>> getPopularDestination() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2008:    List<PopularDestination> popularDestination = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2009:    await fireStore.collection(CollectionName.popularDestinations).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where('is_publish', isEqualTo: true).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2010:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2011:        try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2012:          PopularDestination category = PopularDestination.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2013:          popularDestination.add(category);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2014:        } catch (e, stackTrace) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2015:          print('Get PopularDestination error: ${element.id} $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2016:          print(stackTrace);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2017:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2032:    await fireStore.collection(CollectionName.rentalOrders).doc(orderModel.id).set(orderModel.toJson());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2033:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2034:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2035:  static Future<CabOrderModel?> getCabOrderById(String orderId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2036:    CabOrderModel? orderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2037:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2038:      final doc = await fireStore.collection(CollectionName.rides).doc(orderId).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2039:      if (doc.data() != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2040:        final model = CabOrderModel.fromJson(doc.data()!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2041:        if (model.rideType == "ride") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2042:          orderModel = model;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2043:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2044:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2045:    } catch (e, s) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2046:      print('getCabOrderById error: $e\n$s');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2047:      return null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2048:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2049:    return orderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2050:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2051:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2052:  static Future<CabOrderModel?> getIntercityOrder(String orderId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2053:    CabOrderModel? orderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2054:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2060:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2061:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2062:    } catch (e, s) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2063:      print('getCabOrderById error: $e\n$s');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2064:      return null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2065:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2066:    return orderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2067:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2068:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2069:  static Future<UserModel?> getDriver(String userId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2070:    UserModel? userModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2071:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2084:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2085:  // static Future<List<CabOrderModel>> getCabDriverOrders() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2086:  //   List<CabOrderModel> ordersList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2087:  //   await fireStore.collection(CollectionName.rides).where('authorID', isEqualTo: FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2088:  //     for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2089:  //       CabOrderModel orderModel = CabOrderModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2090:  //       ordersList.add(orderModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2091:  //     }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2092:  //   });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2093:  //   return ordersList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2094:  // }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2095:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2096:  static Stream<List<CabOrderModel>> getCabDriverOrders() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2097:    return fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2098:        .collection(CollectionName.rides)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2099:        .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2100:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2101:        .orderBy('createdAt', descending: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2102:        .snapshots()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2103:        .map((query) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2104:          List<CabOrderModel> ordersList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2105:          for (var element in query.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2106:            ordersList.add(CabOrderModel.fromJson(element.data()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2107:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2108:          return ordersList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2109:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2113:    List<CategoryModel> categoryList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2114:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2115:        .collection(CollectionName.providerCategories)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2116:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2117:        .where("level", isEqualTo: 0)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2118:        .where("publish", isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2119:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2120:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2121:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2122:            CategoryModel orderModel = CategoryModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2123:            categoryList.add(orderModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2124:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2125:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2126:    return categoryList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2145:      if (categoryId.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2146:        collectionReference = fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2147:            .collection(CollectionName.providersServices)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2148:            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2149:            .where('categoryId', isEqualTo: categoryId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2150:            .where("publish", isEqualTo: true);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2151:      } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2152:        collectionReference = fireStore.collection(CollectionName.providersServices).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where("publish", isEqualTo: true);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2153:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2154:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2155:      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2156:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2157:      String field = 'g';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2158:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2159:      await Geoflutterfire()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2160:          .collection(collectionRef: collectionReference)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2192:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2193:  static Future<List<ProviderServiceModel>> getAllProviderServiceByAuthorId(String authId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2194:    List<ProviderServiceModel> providerService = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2195:    await fireStore.collection(CollectionName.providersServices).where('author', isEqualTo: authId).where('publish', isEqualTo: true).orderBy('createdAt', descending: false).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2196:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2197:        ProviderServiceModel orderModel = ProviderServiceModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2198:        providerService.add(orderModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2199:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2200:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2201:    return providerService;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2202:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2203:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2213:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2214:  static Future<List<RatingModel>> getReviewByProviderServiceId(String serviceId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2215:    List<RatingModel> providerReview = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2216:    await fireStore.collection(CollectionName.itemsReview).where('productId', isEqualTo: serviceId).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2217:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2218:        RatingModel orderModel = RatingModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2219:        providerReview.add(orderModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2220:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2221:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2222:    return providerReview;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2223:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2224:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2228:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2229:      final collectionReference = fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2230:          .collection(CollectionName.providersServices)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2231:          .where("author", isEqualTo: providerId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2232:          .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2233:          .where("publish", isEqualTo: true);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2234:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2235:      // Geolocation center point
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2236:      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2237:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2238:      String field = 'g';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2239:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2240:      // Query within radius
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2241:      await Geoflutterfire()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2277:    List<CouponModel> offers = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2278:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2279:        .collection(CollectionName.providersCoupons)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2280:        .where('providerId', isEqualTo: providerId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2281:        .where("isEnabled", isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2282:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2283:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2284:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2285:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2286:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2287:            CouponModel favouriteOndemandServiceModel = CouponModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2288:            offers.add(favouriteOndemandServiceModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2289:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2290:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2291:    return offers;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2295:    List<CouponModel> coupon = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2296:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2297:        .collection(CollectionName.providersCoupons)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2298:        .where('providerId', isEqualTo: providerId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2299:        .where('isEnabled', isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2300:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2301:        .where('isPublic', isEqualTo: true)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2302:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2303:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2304:        .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2305:          for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2306:            CouponModel favouriteOndemandServiceModel = CouponModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2307:            coupon.add(favouriteOndemandServiceModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2308:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2309:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2310:    return coupon;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2453:  //   List<OnProviderOrderModel> ordersList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2454:  //   await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2455:  //       .collection(CollectionName.providerOrders)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2456:  //       .where("authorID", isEqualTo: FireStoreUtils.getCurrentUid())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2457:  //       .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id.toString())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2458:  //       .orderBy("createdAt", descending: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2459:  //       .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2460:  //       .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2461:  //         for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2462:  //           OnProviderOrderModel orderModel = OnProviderOrderModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2463:  //           ordersList.add(orderModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2464:  //         }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2465:  //       });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2466:  //   return ordersList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2469:  static Stream<List<OnProviderOrderModel>> getProviderOrdersStream() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2470:    return fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2471:        .collection(CollectionName.providerOrders)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2472:        .where("authorID", isEqualTo: getCurrentUid())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2473:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id.toString())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2474:        .orderBy("createdAt", descending: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2475:        .snapshots()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2476:        .map((snapshot) => snapshot.docs.map((doc) => OnProviderOrderModel.fromJson(doc.data())).toList());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2477:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2478:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2479:  static Future<WorkerModel?> getWorker(String id) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2480:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2481:      DocumentSnapshot<Map<String, dynamic>> doc = await fireStore.collection(CollectionName.providersWorkers).doc(id).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2482:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2489:    return null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2490:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2491:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2492:  static Future<OnProviderOrderModel?> getProviderOrderById(String orderId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2493:    OnProviderOrderModel? orderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2494:    await fireStore.collection(CollectionName.providerOrders).doc(orderId).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2495:      if (value.exists) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2496:        orderModel = OnProviderOrderModel.fromJson(value.data()!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2497:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2498:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2499:    return orderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2500:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2504:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2505:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2506:        .collection(CollectionName.itemsReview)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2507:        .where('orderid', isEqualTo: orderId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2508:        .where('VendorId', isEqualTo: providerId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2509:        .limit(1)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2510:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2511:        .then((snapshot) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2512:          if (snapshot.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2513:            ratingModel = RatingModel.fromJson(snapshot.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2514:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2515:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2516:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2517:          print('Error fetching review for provider: $error');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2525:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2526:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2527:        .collection(CollectionName.itemsReview)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2528:        .where('orderid', isEqualTo: orderId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2529:        .where('driverId', isEqualTo: workerId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2530:        .limit(1)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2531:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2532:        .then((snapshot) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2533:          if (snapshot.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2534:            ratingModel = RatingModel.fromJson(snapshot.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2535:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2536:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2537:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2538:          print('Error fetching review by worker ID: $error');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2625:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2626:  static Future<List<RentalVehicleType>> getRentalVehicleType() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2627:    List<RentalVehicleType> vehicleTypeList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2628:    await fireStore.collection(CollectionName.rentalVehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2629:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2630:        try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2631:          RentalVehicleType category = RentalVehicleType.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2632:          vehicleTypeList.add(category);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2633:        } catch (e, stackTrace) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2634:          print('getVehicleType error: ${element.id} $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2635:          print(stackTrace);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2636:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2641:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2642:  static Future<List<RentalPackageModel>> getRentalPackage(String vehicleId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2643:    List<RentalPackageModel> rentalPackageList = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2644:    await fireStore.collection(CollectionName.rentalPackages).where("vehicleTypeId", isEqualTo: vehicleId).orderBy("ordering", descending: false).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2645:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2646:        try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2647:          log('Rental Package Data: ${element.data()}');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2648:          RentalPackageModel category = RentalPackageModel.fromJson(element.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2649:          rentalPackageList.add(category);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2650:        } catch (e, stackTrace) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2651:          print('getVehicleType error: ${element.id} $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2652:          print(stackTrace);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2659:  static Stream<List<RentalOrderModel>> getRentalOrders() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2660:    return fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2661:        .collection(CollectionName.rentalOrders)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2662:        .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2663:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2664:        .orderBy('createdAt', descending: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2665:        .snapshots()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2666:        .map((query) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2667:          List<RentalOrderModel> ordersList = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2668:          for (var element in query.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2669:            ordersList.add(RentalOrderModel.fromJson(element.data()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2670:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2671:          return ordersList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2672:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2675:  static Future<bool?> checkReferralCodeValidOrNot(String referralCode) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2676:    bool? isExit;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2677:    try {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2678:      await fireStore.collection(CollectionName.referral).where("referralCode", isEqualTo: referralCode).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2679:        if (value.size > 0) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2680:          isExit = true;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2681:        } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2682:          isExit = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2683:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2684:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2685:    } catch (e, s) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2686:      print('FireStoreUtils.firebaseCreateNewUser $e $s');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2689:    return isExit;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2690:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2691:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2692:  static Future<RentalOrderModel?> getRentalOrderById(String orderId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2693:    RentalOrderModel? orderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2694:    await fireStore.collection(CollectionName.rentalOrders).doc(orderId).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2695:      if (value.exists) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2696:        orderModel = RentalOrderModel.fromJson(value.data()!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2697:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2698:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2699:    return orderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2700:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2704:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2705:    await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2706:        .collection(CollectionName.itemsReview)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2707:        .where('orderid', isEqualTo: orderId)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2708:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2709:        .then((snapshot) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2710:          if (snapshot.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2711:            ratingModel = RatingModel.fromJson(snapshot.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2712:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2713:        })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2714:        .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2715:          print('Error fetching review for provider: $error');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2718:    return ratingModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2719:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2720:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2721:  static Future<dynamic> getOrderByIdFromAllCollections(String orderId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2722:    final List<String> collections = [CollectionName.parcelOrders, CollectionName.rentalOrders, CollectionName.providerOrders, CollectionName.rides, CollectionName.vendorOrders];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2723:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2724:    for (String collection in collections) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2725:      try {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2726:        final snapshot = await fireStore.collection(collection).where('id', isEqualTo: orderId).limit(1).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2727:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2728:        if (snapshot.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2729:          final data = snapshot.docs.first.data();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2730:          data['collection_name'] = collection;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2731:          return data;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2732:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2733:      } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2734:        log("Error fetching from $collection => $e");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2757:  static Future<bool> getSOS(String orderId) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2758:    return fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2759:        .collection(CollectionName.sos)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2760:        .where('orderId', isEqualTo: orderId)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2761:        .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2762:        .then((querySnapshot) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2763:          bool isAdded = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2764:          for (var element in querySnapshot.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2765:            if (element['orderId'] == orderId) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2766:              isAdded = true;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2767:              break;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2768:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2809:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2810:  static Future<bool> isRideComplainAdded(String orderId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2811:    try {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2812:      QuerySnapshot querySnapshot = await fireStore.collection(CollectionName.complaints).where('orderId', isEqualTo: orderId).limit(1).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2813:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2814:      return querySnapshot.docs.isNotEmpty;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2815:    } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2816:      print("Error checking ride complain: $e");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2817:      return false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2818:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2819:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2820:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2821:  static Future<Map<String, dynamic>?> getRideComplainData(String orderId) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2822:    try {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2823:      QuerySnapshot querySnapshot = await fireStore.collection(CollectionName.complaints).where('orderId', isEqualTo: orderId).limit(1).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2824:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2825:      if (querySnapshot.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2826:        return querySnapshot.docs.first.data() as Map<String, dynamic>;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2827:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2828:        return null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2829:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2830:    } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2831:      print("Error fetching ride complain data: $e");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2834:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2835:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2836:  static void removeFavouriteOndemandService(FavouriteOndemandServiceModel favouriteModel) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2837:    fireStore.collection(CollectionName.favoriteService).where("user_id", isEqualTo: favouriteModel.user_id).where("service_id", isEqualTo: favouriteModel.service_id).get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2838:      for (var element in value.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2839:        fireStore.collection(CollectionName.favoriteService).doc(element.id).delete().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2840:          print("Remove Success!");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2841:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2842:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2843:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2844:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2845:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2853:    List<FavouriteOndemandServiceModel> lstFavourites = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2854:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2855:    QuerySnapshot<Map<String, dynamic>> favourites =
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2856:        await fireStore.collection(CollectionName.favoriteService).where('user_id', isEqualTo: userId).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2857:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2858:    await Future.forEach(favourites.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2859:      try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2860:        lstFavourites.add(FavouriteOndemandServiceModel.fromJson(document.data()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2861:      } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2862:        print('FavouriteModel.getCurrencys Parse error $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2863:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2864:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2870:    List<ProviderServiceModel> providerService = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2871:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2872:    QuerySnapshot<Map<String, dynamic>> reviewQuery =
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2873:        await fireStore.collection(CollectionName.providersServices).where('id', isEqualTo: model.service_id).where('sectionId', isEqualTo: model.section_id).get();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2874:    await Future.forEach(reviewQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2875:      try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2876:        providerService.add(ProviderServiceModel.fromJson(document.data()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2877:      } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2878:        print('FireStoreUtils.getReviewByProviderServiceId Parse error ${document.id} $e');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2879:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2880:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2881:    return providerService;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2890:        .collection(CollectionName.chat)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2891:        .doc(currentUserId)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2892:        .collection("thread")
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2893:        .where('senderId', isEqualTo: Constant.adminType)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2894:        .where('seen', isEqualTo: false)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2895:        .snapshots()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2896:        .listen(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2897:          (querySnapshot) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2898:            for (final doc in querySnapshot.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2899:              try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2900:                await doc.reference.update({'seen': true});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2901:              } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2902:                log(e.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2920:        .collection(CollectionName.chat)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2921:        .doc(orderId)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2922:        .collection("thread")
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2923:        .where('senderId', isNotEqualTo: FireStoreUtils.getCurrentUid())
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2924:        .where('seen', isEqualTo: false)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2925:        .snapshots()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2926:        .listen(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2927:          (querySnapshot) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2928:            for (final doc in querySnapshot.docs) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2929:              try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2930:                await doc.reference.update({'seen': true});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2931:              } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2932:                log(e.toString());
```

## section_model.dart
```text
```

## Final Status
STATUS: FOCUSED_SERVICE_LIST_SHORT_AUDIT_CREATED