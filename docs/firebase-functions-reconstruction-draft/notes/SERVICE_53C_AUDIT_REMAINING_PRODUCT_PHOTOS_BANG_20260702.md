# SERVICE 53C AUDIT REMAINING PRODUCT PHOTOS BANG

Generated: 07/02/2026 14:22:20
Mode: READ ONLY.

Goal: locate remaining photos! usages that can still trigger null-check red screen.


## ROOT: customer_git
C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7
TEXT_START

  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:285:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:286:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:287:  void animateSlider() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:288:    if (vendorModel.value.photos != null &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:289:        vendorModel.value.photos!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:290:      Timer.periodic(const Duration(seconds: 2), (Timer timer) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:291:        if (currentPage < vendorModel.value.photos!.length) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:292:          currentPage++;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:293:        } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:294:          currentPage.value = 0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:295:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:296:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:297:        if (pageController.value.hasClients) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:298:          pageController.value.animateToPage(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:299:            currentPage.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:300:            duration: const Duration(milliseconds: 300),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\dine_in_restaurant_details
_controller.dart:301:            curve: Curves.easeIn,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:98:  }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:99:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:100:  void animateSlider() {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:101:    if (vendorModel.value.photos != null &&
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:102:        vendorModel.value.photos!.isNotEmpty) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:103:      step47gSliderTimer?.cancel();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:104:      step47gSliderTimer = Timer.periodic(const Duration(seconds: 2), (
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:105:        Timer timer,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:106:      ) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:107:        if (currentPage < vendorModel.value.photos!.length - 1) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:108:          currentPage++;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:109:        } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:110:          currentPage.value = 0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:111:        }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:112:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:113:        if (pageController.value.hasClients &&
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:114:            pageController.value.positions.length == 1) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:115:          try {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:116:            pageController.value.animateToPage(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_control
ler.dart:117:              currentPage.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:110:                  ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:111:                  flexibleSpace: FlexibleSpaceBar(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:112:                    background: Stack(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:113:                      children: [
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:114:                        controller.vendorModel.value.photos == null || 
controller.vendorModel.value.photos!.isEmpty
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:115:                            ? Stack(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:116:                              children: [
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:117:                                NetworkImageWidget(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:118:                                  imageUrl: controller.vendorModel.value.photo.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:119:                                  fit: BoxFit.cover,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:120:                                  width: Responsive.width(100, context),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:121:                                  height: Responsive.height(40, context),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:122:                                ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:123:                                Container(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:124:                                  decoration: BoxDecoration(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:130:                            : PageView.builder(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:131:                              physics: const BouncingScrollPhysics(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:132:                              controller: controller.pageController.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:133:                              scrollDirection: Axis.horizontal,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:134:                              itemCount: controller.vendorModel.value.photos!.length,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:135:                              padEnds: false,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:136:                              pageSnapping: true,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:137:                              onPageChanged: (value) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:138:                                controller.currentPage.value = value;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:139:                              },
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:140:                              itemBuilder: (BuildContext context, int index) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:141:                                String image = controller.vendorModel.value.photos![index];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:142:                                return Stack(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:143:                                  children: [
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:144:                                    NetworkImageWidget(imageUrl: image.toString(), fit: 
BoxFit.cover, width: Responsive.width(100, context), height: Responsive.height(40, context)),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:145:                                    Container(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:146:                                      decoration: BoxDecoration(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:147:                                        gradient: LinearGradient(begin: const 
Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:148:                                      ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:149:                                    ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:150:                                  ],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:151:                                );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:157:                          left: 0,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:158:                          child: Row(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:159:                            mainAxisAlignment: MainAxisAlignment.center,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:160:                            crossAxisAlignment: CrossAxisAlignment.center,
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:161:                            children: 
List.generate(controller.vendorModel.value.photos!.length, (index) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:162:                              return Obx(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:163:                                () => Container(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:164:                                  margin: const EdgeInsets.only(right: 5),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:165:                                  alignment: Alignment.centerLeft,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:166:                                  height: 9,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:167:                                  width: 9,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:168:                                  decoration: BoxDecoration(shape: BoxShape.circle, color: 
controller.currentPage.value == index ? AppThemeData.primary300 : AppThemeData.grey300),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:169:                                ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:170:                              );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:171:                            }),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:458:                                        ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:459:                                      ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:460:                                    ],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:461:                                  ),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:462:                                  controller.vendorModel.value.restaurantMenuPhotos == 
null || controller.vendorModel.value.restaurantMenuPhotos!.isEmpty
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:463:                                      ? const SizedBox()
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:464:                                      : Column(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:465:                                        crossAxisAlignment: CrossAxisAlignment.start,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:466:                                        children: [
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:467:                                          const SizedBox(height: 20),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:468:                                          Text(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:469:                                            "Menu".tr,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:470:                                            textAlign: TextAlign.start,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:471:                                            maxLines: 1,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:472:                                            style: TextStyle(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:479:                                          ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:480:                                          SizedBox(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:481:                                            height: Responsive.height(12, context),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:482:                                            child: ListView.builder(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:483:                                              itemCount: 
controller.vendorModel.value.restaurantMenuPhotos!.length,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:484:                                              scrollDirection: Axis.horizontal,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:485:                                              padding: EdgeInsets.zero,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:486:                                              itemBuilder: (context, index) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:487:                                                return InkWell(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:488:                                                  onTap: () {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:489:                                                    Get.to(FullScreenImageViewer(imageUrl: 
controller.vendorModel.value.restaurantMenuPhotos![index]));
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:490:                                                  },
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:491:                                                  child: Padding(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:492:                                                    padding: const EdgeInsets.all(6.0),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:493:                                                    child: ClipRRect(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:494:                                                      borderRadius: 
BorderRadius.circular(10),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:495:                                                      child: NetworkImageWidget(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:496:                                                        imageUrl: 
controller.vendorModel.value.restaurantMenuPhotos![index],
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:497:                                                        height: Responsive.height(12, 
context),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:498:                                                        width: Responsive.height(12, 
context),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:499:                                                        fit: BoxFit.fill,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:500:                                                      ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:501:                                                    ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:502:                                                  ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:503:                                                );
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:504:                                              },
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:505:                                            ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\dine_in
_screeen\dine_in_details_screen.dart:506:                                          ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:277:                  flexibleSpace: FlexibleSpaceBar(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:278:                    background: Stack(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:279:                      children: [
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:280:                        controller.vendorModel.value.photos == null ||
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:281:                                controller.vendorModel.value.photos!.isEmpty
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:282:                            ? Stack(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:283:                              children: [
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:284:                                NetworkImageWidget(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:285:                                  imageUrl:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:286:                                      controller.vendorModel.value.photo
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:287:                                          .toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:288:                                  fit: BoxFit.cover,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:289:                                  width: Responsive.width(100, context),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:290:                                  height: Responsive.height(40, context),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:291:                                ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:307:                              physics: const BouncingScrollPhysics(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:308:                              controller: controller.pageController.value,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:309:                              scrollDirection: Axis.horizontal,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:310:                              itemCount:
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:311:                                  controller.vendorModel.value.photos!.length,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:312:                              padEnds: false,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:313:                              pageSnapping: true,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:314:                              allowImplicitScrolling: true,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:315:                              itemBuilder: (BuildContext context, int index) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:316:                                String image =
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:317:                                    
controller.vendorModel.value.photos![index];
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:318:                                return Stack(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:319:                                  children: [
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:320:                                    NetworkImageWidget(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:321:                                      imageUrl: image.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:322:                                      fit: BoxFit.cover,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:323:                                      width: Responsive.width(100, context),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:324:                                      height: Responsive.height(40, context),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:325:                                    ),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:326:                                    Container(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:327:                                      decoration: BoxDecoration(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:346:                          child: Row(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:347:                            mainAxisAlignment: MainAxisAlignment.center,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:348:                            crossAxisAlignment: CrossAxisAlignment.center,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:349:                            children: List.generate(
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:350:                              controller.vendorModel.value.photos!.length,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:351:                              (index) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:352:                                return Obx(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:353:                                  () => Container(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:354:                                    margin: const EdgeInsets.only(right: 5),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:355:                                    alignment: Alignment.centerLeft,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:356:                                    height: 9,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:357:                                    width: 9,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:358:                                    decoration: BoxDecoration(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:359:                                      shape: BoxShape.circle,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaur
ant_details_screen\restaurant_details_screen.dart:360:                                      color:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:66: 
   super.initState();
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:67: 
 }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:68:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:69: 
 void animateSlider() {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:70: 
   if (widget.vendorModel.photos != null && widget.vendorModel.photos!.isNotEmpty) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:71: 
     if (widget.vendorModel.photos!.length > 1) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:72: 
       Timer.periodic(const Duration(seconds: 2), (Timer timer) {
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:73: 
         if (currentPage < widget.vendorModel.photos!.length - 1) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:74: 
           currentPage++;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:75: 
         } else {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:76: 
           currentPage = 0;
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:77: 
         }
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:78:
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:79: 
         if (pageController.hasClients) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:80: 
           pageController.animateToPage(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:81: 
             currentPage,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:82: 
             duration: const Duration(milliseconds: 300),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:83: 
             curve: Curves.easeIn,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:91: 
 @override
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:92: 
 Widget build(BuildContext context) {
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:93: 
   return SizedBox(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:94: 
     height: Responsive.height(20, context),
> Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:95: 
     child: widget.vendorModel.photos == null || widget.vendorModel.photos!.isEmpty
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:96: 
         ? NetworkImageWidget(
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:97: 
             imageUrl: widget.vendorModel.photo.toString(),
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:98: 
             fit: BoxFit.cover,
  Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:99: 
             height: Responsive.height(20, context),
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:100:  
            width: Responsive.width(100, context),
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:101:  
          )
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:102:  
        : PageView.builder(
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:103:  
            physics: const BouncingScrollPhysics(),
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:104:  
            controller: pageController,
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:105:  
            scrollDirection: Axis.horizontal,
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:106:  
            allowImplicitScrolling: true,
> 
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:107:  
            itemCount: widget.vendorModel.photos!.length,
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:108:  
            padEnds: false,
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:109:  
            pageSnapping: true,
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:110:  
            itemBuilder: (BuildContext context, int index) {
> 
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:111:  
              String image = widget.vendorModel.photos![index];
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:112:  
              return NetworkImageWidget(
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:113:  
                imageUrl: image.toString(),
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:114:  
                fit: BoxFit.cover,
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:115:  
                height: Responsive.height(20, context),
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:116:  
                width: Responsive.width(100, context),
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:117:  
              );
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:118:  
            },
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:119:  
          ),
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:120:  
  );
  
Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\widget\restaurant_image_view.dart:121:  
}



TEXT_END

## ROOT: runtime_customer
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer
TEXT_START

  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:285:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:286:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:287:  void animateSlider() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:288:    if (vendorModel.value.photos != null &&
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:289:        vendorModel.value.photos!.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:290:      Timer.periodic(const Duration(seconds: 2), (Timer timer) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:291:        if (currentPage < vendorModel.value.photos!.length) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:292:          currentPage++;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:293:        } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:294:          currentPage.value = 0;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:295:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:296:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:297:        if (pageController.value.hasClients) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:298:          pageController.value.animateToPage(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:299:            currentPage.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:300:            duration: const Duration(milliseconds: 300),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_detail
s_controller.dart:301:            curve: Curves.easeIn,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:98:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:99:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:100:  void animateSlider() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:101:    if (vendorModel.value.photos != null &&
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:102:        vendorModel.value.photos!.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:103:      step47gSliderTimer?.cancel();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:104:      step47gSliderTimer = Timer.periodic(const Duration(seconds: 2), (
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:105:        Timer timer,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:106:      ) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:107:        if (currentPage < vendorModel.value.photos!.length - 1) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:108:          currentPage++;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:109:        } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:110:          currentPage.value = 0;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:111:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:112:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:113:        if (pageController.value.hasClients &&
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:114:            pageController.value.positions.length == 1) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:115:          try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:116:            pageController.value.animateToPage(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_contro
ller.dart:117:              currentPage.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:110:                  ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:111:                  flexibleSpace: FlexibleSpaceBar(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:112:                    background: Stack(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:113:                      children: [
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:114:                        controller.vendorModel.value.photos == null || 
controller.vendorModel.value.photos!.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:115:                            ? Stack(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:116:                              children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:117:                                NetworkImageWidget(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:118:                                  imageUrl: controller.vendorModel.value.photo.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:119:                                  fit: BoxFit.cover,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:120:                                  width: Responsive.width(100, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:121:                                  height: Responsive.height(40, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:122:                                ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:123:                                Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:124:                                  decoration: BoxDecoration(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:130:                            : PageView.builder(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:131:                              physics: const BouncingScrollPhysics(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:132:                              controller: controller.pageController.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:133:                              scrollDirection: Axis.horizontal,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:134:                              itemCount: controller.vendorModel.value.photos!.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:135:                              padEnds: false,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:136:                              pageSnapping: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:137:                              onPageChanged: (value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:138:                                controller.currentPage.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:139:                              },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:140:                              itemBuilder: (BuildContext context, int index) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:141:                                String image = 
controller.vendorModel.value.photos![index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:142:                                return Stack(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:143:                                  children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:144:                                    NetworkImageWidget(imageUrl: image.toString(), fit: 
BoxFit.cover, width: Responsive.width(100, context), height: Responsive.height(40, context)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:145:                                    Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:146:                                      decoration: BoxDecoration(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:147:                                        gradient: LinearGradient(begin: const 
Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:148:                                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:149:                                    ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:150:                                  ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:151:                                );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:157:                          left: 0,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:158:                          child: Row(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:159:                            mainAxisAlignment: MainAxisAlignment.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:160:                            crossAxisAlignment: CrossAxisAlignment.center,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:161:                            children: 
List.generate(controller.vendorModel.value.photos!.length, (index) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:162:                              return Obx(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:163:                                () => Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:164:                                  margin: const EdgeInsets.only(right: 5),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:165:                                  alignment: Alignment.centerLeft,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:166:                                  height: 9,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:167:                                  width: 9,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:168:                                  decoration: BoxDecoration(shape: BoxShape.circle, 
color: controller.currentPage.value == index ? AppThemeData.primary300 : AppThemeData.grey300),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:169:                                ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:170:                              );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:171:                            }),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:458:                                        ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:459:                                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:460:                                    ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:461:                                  ),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:462:                                  controller.vendorModel.value.restaurantMenuPhotos == 
null || controller.vendorModel.value.restaurantMenuPhotos!.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:463:                                      ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:464:                                      : Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:465:                                        crossAxisAlignment: CrossAxisAlignment.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:466:                                        children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:467:                                          const SizedBox(height: 20),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:468:                                          Text(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:469:                                            "Menu".tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:470:                                            textAlign: TextAlign.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:471:                                            maxLines: 1,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:472:                                            style: TextStyle(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:479:                                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:480:                                          SizedBox(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:481:                                            height: Responsive.height(12, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:482:                                            child: ListView.builder(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:483:                                              itemCount: 
controller.vendorModel.value.restaurantMenuPhotos!.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:484:                                              scrollDirection: Axis.horizontal,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:485:                                              padding: EdgeInsets.zero,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:486:                                              itemBuilder: (context, index) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:487:                                                return InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:488:                                                  onTap: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:489:                                                    
Get.to(FullScreenImageViewer(imageUrl: controller.vendorModel.value.restaurantMenuPhotos![index]));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:490:                                                  },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:491:                                                  child: Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:492:                                                    padding: const EdgeInsets.all(6.0),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:493:                                                    child: ClipRRect(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:494:                                                      borderRadius: 
BorderRadius.circular(10),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:495:                                                      child: NetworkImageWidget(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:496:                                                        imageUrl: 
controller.vendorModel.value.restaurantMenuPhotos![index],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:497:                                                        height: Responsive.height(12, 
context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:498:                                                        width: Responsive.height(12, 
context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:499:                                                        fit: BoxFit.fill,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:500:                                                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:501:                                                    ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:502:                                                  ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:503:                                                );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:504:                                              },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:505:                                            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_i
n_screeen\dine_in_details_screen.dart:506:                                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:277:                  flexibleSpace: FlexibleSpaceBar(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:278:                    background: Stack(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:279:                      children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:280:                        controller.vendorModel.value.photos == null ||
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:281:                                controller.vendorModel.value.photos!.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:282:                            ? Stack(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:283:                              children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:284:                                NetworkImageWidget(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:285:                                  imageUrl:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:286:                                      controller.vendorModel.value.photo
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:287:                                          .toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:288:                                  fit: BoxFit.cover,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:289:                                  width: Responsive.width(100, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:290:                                  height: Responsive.height(40, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:291:                                ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:307:                              physics: const BouncingScrollPhysics(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:308:                              controller: controller.pageController.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:309:                              scrollDirection: Axis.horizontal,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:310:                              itemCount:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:311:                                  
controller.vendorModel.value.photos!.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:312:                              padEnds: false,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:313:                              pageSnapping: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:314:                              allowImplicitScrolling: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:315:                              itemBuilder: (BuildContext context, int index) 
{
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:316:                                String image =
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:317:                                    
controller.vendorModel.value.photos![index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:318:                                return Stack(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:319:                                  children: [
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:320:                                    NetworkImageWidget(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:321:                                      imageUrl: image.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:322:                                      fit: BoxFit.cover,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:323:                                      width: Responsive.width(100, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:324:                                      height: Responsive.height(40, context),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:325:                                    ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:326:                                    Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:327:                                      decoration: BoxDecoration(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:346:                          child: Row(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:347:                            mainAxisAlignment: MainAxisAlignment.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:348:                            crossAxisAlignment: CrossAxisAlignment.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:349:                            children: List.generate(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:350:                              controller.vendorModel.value.photos!.length,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:351:                              (index) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:352:                                return Obx(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:353:                                  () => Container(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:354:                                    margin: const EdgeInsets.only(right: 5),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:355:                                    alignment: Alignment.centerLeft,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:356:                                    height: 9,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:357:                                    width: 9,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:358:                                    decoration: BoxDecoration(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:359:                                      shape: BoxShape.circle,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restau
rant_details_screen\restaurant_details_screen.dart:360:                                      color:
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:66:  
  super.initState();
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:67:  
}
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:68:
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:69:  
void animateSlider() {
> 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:70:  
  if (widget.vendorModel.photos != null && widget.vendorModel.photos!.isNotEmpty) {
> 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:71:  
    if (widget.vendorModel.photos!.length > 1) {
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:72:  
      Timer.periodic(const Duration(seconds: 2), (Timer timer) {
> 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:73:  
        if (currentPage < widget.vendorModel.photos!.length - 1) {
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:74:  
          currentPage++;
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:75:  
        } else {
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:76:  
          currentPage = 0;
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:77:  
        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:78:
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:79:  
        if (pageController.hasClients) {
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:80:  
          pageController.animateToPage(
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:81:  
            currentPage,
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:82:  
            duration: const Duration(milliseconds: 300),
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:83:  
            curve: Curves.easeIn,
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:91:  
@override
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:92:  
Widget build(BuildContext context) {
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:93:  
  return SizedBox(
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:94:  
    height: Responsive.height(20, context),
> 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:95:  
    child: widget.vendorModel.photos == null || widget.vendorModel.photos!.isEmpty
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:96:  
        ? NetworkImageWidget(
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:97:  
            imageUrl: widget.vendorModel.photo.toString(),
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:98:  
            fit: BoxFit.cover,
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:99:  
            height: Responsive.height(20, context),
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:100: 
             width: Responsive.width(100, context),
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:101: 
           )
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:102: 
         : PageView.builder(
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:103: 
             physics: const BouncingScrollPhysics(),
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:104: 
             controller: pageController,
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:105: 
             scrollDirection: Axis.horizontal,
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:106: 
             allowImplicitScrolling: true,
> 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:107: 
             itemCount: widget.vendorModel.photos!.length,
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:108: 
             padEnds: false,
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:109: 
             pageSnapping: true,
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:110: 
             itemBuilder: (BuildContext context, int index) {
> 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:111: 
               String image = widget.vendorModel.photos![index];
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:112: 
               return NetworkImageWidget(
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:113: 
                 imageUrl: image.toString(),
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:114: 
                 fit: BoxFit.cover,
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:115: 
                 height: Responsive.height(20, context),
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:116: 
                 width: Responsive.width(100, context),
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:117: 
               );
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:118: 
             },
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:119: 
           ),
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:120: 
   );
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:121: 
 }



TEXT_END

## Final Status
STATUS: SERVICE_53C_REMAINING_PHOTOS_BANG_RISK_FOUND