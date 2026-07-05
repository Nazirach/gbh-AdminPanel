# SERVICE 44B PRODUCT CARD NULL ASSERTION SOURCE AUDIT

Generated: 07/02/2026 01:05:01
Mode: READ ONLY.


## File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart
TEXT_START

LINE: 3
import 'package:badges/badges.dart' as badges;
import 'package:customer/constant/constant.dart';
import 'package:customer/controllers/restaurant_details_controller.dart';
import 'package:customer/models/cart_product_model.dart';
import 'package:customer/models/coupon_model.dart';
import 'package:customer/models/favourite_item_model.dart';
import 'package:customer/models/favourite_model.dart';
import 'package:customer/models/product_model.dart';
import 'package:customer/models/vendor_category_model.dart';
import 'package:customer/models/vendor_model.dart';
import 'package:customer/themes/app_them_data.dart';

LINE: 240
                    background: Stack(
                      children: [
                        controller.vendorModel.value.photos == null ||
                                controller.vendorModel.value.photos!.isEmpty
                            ? Stack(
                              children: [
                                NetworkImageWidget(
                                  imageUrl:
                                      controller.vendorModel.value.photo
                                          .toString(),
                                  fit: BoxFit.cover,
                                  width: Responsive.width(100, context),

LINE: 270
                              controller: controller.pageController.value,
                              scrollDirection: Axis.horizontal,
                              itemCount:
                                  controller.vendorModel.value.photos!.length,
                              padEnds: false,
                              pageSnapping: true,
                              allowImplicitScrolling: true,
                              itemBuilder: (BuildContext context, int index) {
                                String image =
                                    controller.vendorModel.value.photos![index];
                                return Stack(
                                  children: [

LINE: 276
                              allowImplicitScrolling: true,
                              itemBuilder: (BuildContext context, int index) {
                                String image =
                                    controller.vendorModel.value.photos![index];
                                return Stack(
                                  children: [
                                    NetworkImageWidget(
                                      imageUrl: image.toString(),
                                      fit: BoxFit.cover,
                                      width: Responsive.width(100, context),
                                      height: Responsive.height(40, context),
                                    ),

LINE: 309
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: List.generate(
                              controller.vendorModel.value.photos!.length,
                              (index) {
                                return Obx(
                                  () => Container(
                                    margin: const EdgeInsets.only(right: 5),
                                    alignment: Alignment.centerLeft,
                                    height: 9,
                                    width: 9,
                                    decoration: BoxDecoration(

LINE: 505
                                    ],
                                  ),
                                  Constant
                                              .sectionConstantModel!
                                              .serviceTypeFlag ==
                                          "ecommerce-service"
                                      ? SizedBox()
                                      : Row(
                                        children: [
                                          Text(
                                            controller.isOpen.value
                                                ? "Open".tr

LINE: 546
                                              if (controller
                                                  .vendorModel
                                                  .value
                                                  .workingHours!
                                                  .isEmpty) {
                                                ShowToastDialog.showToast(
                                                  "Timing is not added by store"
                                                      .tr,
                                                );
                                              } else {
                                                timeShowBottomSheet(
                                                  context,

LINE: 589
                                          (controller
                                                      .vendorModel
                                                      .value
                                                      .openDineTime !=
                                                  null &&
                                              controller
                                                  .vendorModel
                                                  .value
                                                  .openDineTime!
                                                  .isNotEmpty)
                                      ? Column(
                                        crossAxisAlignment:

LINE: 594
                                              controller
                                                  .vendorModel
                                                  .value
                                                  .openDineTime!
                                                  .isNotEmpty)
                                      ? Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          const SizedBox(height: 20),
                                          Text(
                                            "Also applicable on table booking"

LINE: 746
                                            ),
                                          ),
                                          const SizedBox(height: 10),
                                          CouponListView(
                                            controller: controller,
                                          ),
                                        ],
                                      ),
                                  const SizedBox(height: 20),
                                  Text(
                                    "Menu".tr,
                                    textAlign: TextAlign.start,

LINE: 753
                                      ),
                                  const SizedBox(height: 20),
                                  Text(
                                    "Menu".tr,
                                    textAlign: TextAlign.start,
                                    maxLines: 1,
                                    style: TextStyle(
                                      fontSize: 16,
                                      overflow: TextOverflow.ellipsis,
                                      fontFamily: AppThemeData.semiBold,
                                      fontWeight: FontWeight.w600,
                                      color:

LINE: 786
                                  ),
                                  const SizedBox(height: 10),
                                  Constant
                                              .sectionConstantModel!
                                              .isProductDetails ==
                                          false
                                      ? SizedBox()
                                      : Row(
                                        children: [
                                          InkWell(
                                            onTap: () {
                                              if (controller.isVag.value ==

LINE: 987
                              ),
                            ),
                            const SizedBox(height: 20),
                            ProductListView(controller: controller),
                          ],
                        ),
                      ),
                    ),
          ),
          // floatingActionButton: PopupMenuButton(
          //   offset: const Offset(0, -260),
          //   onOpened: () {

LINE: 993
                      ),
                    ),
          ),
          // floatingActionButton: PopupMenuButton(
          //   offset: const Offset(0, -260),
          //   onOpened: () {
          //     controller.isMenuOpen.value = true;
          //   },
          //   onCanceled: () {
          //     controller.isMenuOpen.value = false;
          //   },
          //   onSelected: (value) {

LINE: 996
          // floatingActionButton: PopupMenuButton(
          //   offset: const Offset(0, -260),
          //   onOpened: () {
          //     controller.isMenuOpen.value = true;
          //   },
          //   onCanceled: () {
          //     controller.isMenuOpen.value = false;
          //   },
          //   onSelected: (value) {
          //     controller.isMenuOpen.value = false;
          //   },
          //   color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,

LINE: 999
          //     controller.isMenuOpen.value = true;
          //   },
          //   onCanceled: () {
          //     controller.isMenuOpen.value = false;
          //   },
          //   onSelected: (value) {
          //     controller.isMenuOpen.value = false;
          //   },
          //   color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
          //   shape: const RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(16.0))),
          //   itemBuilder: (context) {
          //     return List.generate(controller.vendorCategoryList.length, (index) {

LINE: 1002
          //     controller.isMenuOpen.value = false;
          //   },
          //   onSelected: (value) {
          //     controller.isMenuOpen.value = false;
          //   },
          //   color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
          //   shape: const RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(16.0))),
          //   itemBuilder: (context) {
          //     return List.generate(controller.vendorCategoryList.length, (index) {
          //       VendorCategoryModel vendorCategoryModel = controller.vendorCategoryList[index];
          //       return PopupMenuItem(
          //         value: index,

LINE: 1009
          //   itemBuilder: (context) {
          //     return List.generate(controller.vendorCategoryList.length, (index) {
          //       VendorCategoryModel vendorCategoryModel = controller.vendorCategoryList[index];
          //       return PopupMenuItem(
          //         value: index,
          //         onTap: () {},
          //         child: SizedBox(
          //           width: 230,
          //           child: Text(
          //             vendorCategoryModel.title.toString(),
          //             textAlign: TextAlign.start,
          //             maxLines: 1,

LINE: 1040
          //         borderRadius: BorderRadius.circular(120),
          //       ),
          //     ),
          //     child: controller.isMenuOpen.value
          //         ? Icon(
          //             Icons.close,
          //             color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
          //           )
          //         : Column(
          //             mainAxisSize: MainAxisSize.min,
          //             mainAxisAlignment: MainAxisAlignment.center,
          //             crossAxisAlignment: CrossAxisAlignment.center,

LINE: 1052
          //             children: [
          //               SvgPicture.asset("assets/icons/ic_book.svg"),
          //               Text(
          //                 "Menu",
          //                 textAlign: TextAlign.start,
          //                 maxLines: 1,
          //                 style: TextStyle(
          //                   fontSize: 12,
          //                   overflow: TextOverflow.ellipsis,
          //                   fontFamily: AppThemeData.medium,
          //                   fontWeight: FontWeight.w500,
          //                   color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,

LINE: 1074

  Future timeShowBottomSheet(
    BuildContext context,
    RestaurantDetailsController productModel,
  ) {
    return showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      isDismissible: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(30)),
      ),

LINE: 1118
                          ),
                        ),
                        Expanded(
                          child: ListView.builder(
                            shrinkWrap: true,
                            physics: const BouncingScrollPhysics(),
                            itemCount:
                                productModel
                                    .vendorModel
                                    .value
                                    .workingHours!
                                    .length,

LINE: 1122
                            shrinkWrap: true,
                            physics: const BouncingScrollPhysics(),
                            itemCount:
                                productModel
                                    .vendorModel
                                    .value
                                    .workingHours!
                                    .length,
                            itemBuilder: (context, dayIndex) {
                              WorkingHours workingHours =
                                  productModel
                                      .vendorModel

LINE: 1125
                                productModel
                                    .vendorModel
                                    .value
                                    .workingHours!
                                    .length,
                            itemBuilder: (context, dayIndex) {
                              WorkingHours workingHours =
                                  productModel
                                      .vendorModel
                                      .value
                                      .workingHours![dayIndex];
                              return Padding(

LINE: 1129
                                    .length,
                            itemBuilder: (context, dayIndex) {
                              WorkingHours workingHours =
                                  productModel
                                      .vendorModel
                                      .value
                                      .workingHours![dayIndex];
                              return Padding(
                                padding: const EdgeInsets.symmetric(
                                  vertical: 10,
                                ),
                                child: Column(

LINE: 1132
                                  productModel
                                      .vendorModel
                                      .value
                                      .workingHours![dayIndex];
                              return Padding(
                                padding: const EdgeInsets.symmetric(
                                  vertical: 10,
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(

LINE: 1157
                                    ),
                                    const SizedBox(height: 10),
                                    workingHours.timeslot == null ||
                                            workingHours.timeslot!.isEmpty
                                        ? const SizedBox()
                                        : ListView.builder(
                                          shrinkWrap: true,
                                          physics:
                                              const NeverScrollableScrollPhysics(),
                                          itemCount:
                                              workingHours.timeslot!.length,
                                          itemBuilder: (context, timeIndex) {

LINE: 1159
                                    workingHours.timeslot == null ||
                                            workingHours.timeslot!.isEmpty
                                        ? const SizedBox()
                                        : ListView.builder(
                                          shrinkWrap: true,
                                          physics:
                                              const NeverScrollableScrollPhysics(),
                                          itemCount:
                                              workingHours.timeslot!.length,
                                          itemBuilder: (context, timeIndex) {
                                            Timeslot timeSlotModel =
                                                workingHours

LINE: 1164
                                          physics:
                                              const NeverScrollableScrollPhysics(),
                                          itemCount:
                                              workingHours.timeslot!.length,
                                          itemBuilder: (context, timeIndex) {
                                            Timeslot timeSlotModel =
                                                workingHours
                                                    .timeslot![timeIndex];
                                            return Padding(
                                              padding: const EdgeInsets.all(
                                                8.0,
                                              ),

LINE: 1168
                                          itemBuilder: (context, timeIndex) {
                                            Timeslot timeSlotModel =
                                                workingHours
                                                    .timeslot![timeIndex];
                                            return Padding(
                                              padding: const EdgeInsets.all(
                                                8.0,
                                              ),
                                              child: Row(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: [

LINE: 1284
  }
}

class CouponListView extends StatelessWidget {
  final RestaurantDetailsController controller;

  const CouponListView({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    final themeController = Get.find<ThemeController>();
    final isDark = themeController.isDark.value;

LINE: 1287
class CouponListView extends StatelessWidget {
  final RestaurantDetailsController controller;

  const CouponListView({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    final themeController = Get.find<ThemeController>();
    final isDark = themeController.isDark.value;
    return SizedBox(
      height: Responsive.height(9, context),
      child: ListView.builder(

LINE: 1295
    final isDark = themeController.isDark.value;
    return SizedBox(
      height: Responsive.height(9, context),
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        itemCount: controller.couponList.length,
        itemBuilder: (BuildContext context, int index) {
          CouponModel offerModel = controller.couponList[index];
          return Padding(
            padding: const EdgeInsets.only(right: 10),
            child: Container(
              clipBehavior: Clip.antiAlias,

LINE: 1399
                                const SizedBox(width: 5),
                                Text(
                                  Constant.timestampToDateTime(
                                    offerModel.expiresAt!,
                                  ),
                                  style: TextStyle(
                                    fontSize: 12,
                                    color:
                                        isDark
                                            ? AppThemeData.grey400
                                            : AppThemeData.grey500,
                                    fontFamily: AppThemeData.semiBold,

LINE: 1428
  }
}

class ProductListView extends StatelessWidget {
  final RestaurantDetailsController controller;

  const ProductListView({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    final themeController = Get.find<ThemeController>();
    final isDark = themeController.isDark.value;

LINE: 1431
class ProductListView extends StatelessWidget {
  final RestaurantDetailsController controller;

  const ProductListView({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    final themeController = Get.find<ThemeController>();
    final isDark = themeController.isDark.value;
    return Container(
      color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
      padding: const EdgeInsets.symmetric(horizontal: 16),

LINE: 1440
    return Container(
      color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: ListView.builder(
        shrinkWrap: true,
        padding: EdgeInsets.zero,
        itemCount: controller.vendorCategoryList.length,
        physics: const NeverScrollableScrollPhysics(),
        itemBuilder: (context, index) {
          VendorCategoryModel vendorCategoryModel =
              controller.vendorCategoryList[index];
          final categoryProducts = controller.getProductsForCategory(

LINE: 1451
          final categoryProducts = controller.getProductsForCategory(
            vendorCategoryModel,
          );
          return ExpansionTile(
            childrenPadding: EdgeInsets.zero,
            tilePadding: EdgeInsets.zero,
            shape: const Border(),
            initiallyExpanded: true,
            title: Text(
              "${vendorCategoryModel.title.toString()} (${categoryProducts.length})",
              style: TextStyle(
                fontSize: 18,

LINE: 1469
              Obx(() {
                final reactiveCategoryProducts = controller
                    .getProductsForCategory(vendorCategoryModel);
                return ListView.builder(
                  itemCount: reactiveCategoryProducts.length,
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  padding: EdgeInsets.zero,
                  itemBuilder: (context, index) {
                    ProductModel productModel = reactiveCategoryProducts[index];

                    String price = "0.0";

LINE: 1475
                  physics: const NeverScrollableScrollPhysics(),
                  padding: EdgeInsets.zero,
                  itemBuilder: (context, index) {
                    ProductModel productModel = reactiveCategoryProducts[index];

                    String price = "0.0";
                    String disPrice = "0.0";
                    List<String> selectedVariants = [];
                    List<String> selectedIndexVariants = [];
                    List<String> selectedIndexArray = [];
                    if (productModel.itemAttribute != null) {
                      if (productModel.itemAttribute!.attributes!.isNotEmpty) {

LINE: 1482
                    List<String> selectedVariants = [];
                    List<String> selectedIndexVariants = [];
                    List<String> selectedIndexArray = [];
                    if (productModel.itemAttribute != null) {
                      if (productModel.itemAttribute!.attributes!.isNotEmpty) {
                        for (var element
                            in productModel.itemAttribute!.attributes!) {
                          if (element.attributeOptions!.isNotEmpty) {
                            selectedVariants.add(
                              productModel
                                  .itemAttribute!
                                  .attributes![productModel

LINE: 1483
                    List<String> selectedIndexVariants = [];
                    List<String> selectedIndexArray = [];
                    if (productModel.itemAttribute != null) {
                      if (productModel.itemAttribute!.attributes!.isNotEmpty) {
                        for (var element
                            in productModel.itemAttribute!.attributes!) {
                          if (element.attributeOptions!.isNotEmpty) {
                            selectedVariants.add(
                              productModel
                                  .itemAttribute!
                                  .attributes![productModel
                                      .itemAttribute!

LINE: 1485
                    if (productModel.itemAttribute != null) {
                      if (productModel.itemAttribute!.attributes!.isNotEmpty) {
                        for (var element
                            in productModel.itemAttribute!.attributes!) {
                          if (element.attributeOptions!.isNotEmpty) {
                            selectedVariants.add(
                              productModel
                                  .itemAttribute!
                                  .attributes![productModel
                                      .itemAttribute!
                                      .attributes!
                                      .indexOf(element)]

LINE: 1486
                      if (productModel.itemAttribute!.attributes!.isNotEmpty) {
                        for (var element
                            in productModel.itemAttribute!.attributes!) {
                          if (element.attributeOptions!.isNotEmpty) {
                            selectedVariants.add(
                              productModel
                                  .itemAttribute!
                                  .attributes![productModel
                                      .itemAttribute!
                                      .attributes!
                                      .indexOf(element)]
                                  .attributeOptions![0]

LINE: 1488
                            in productModel.itemAttribute!.attributes!) {
                          if (element.attributeOptions!.isNotEmpty) {
                            selectedVariants.add(
                              productModel
                                  .itemAttribute!
                                  .attributes![productModel
                                      .itemAttribute!
                                      .attributes!
                                      .indexOf(element)]
                                  .attributeOptions![0]
                                  .toString(),
                            );

LINE: 1489
                          if (element.attributeOptions!.isNotEmpty) {
                            selectedVariants.add(
                              productModel
                                  .itemAttribute!
                                  .attributes![productModel
                                      .itemAttribute!
                                      .attributes!
                                      .indexOf(element)]
                                  .attributeOptions![0]
                                  .toString(),
                            );
                            selectedIndexVariants.add(

LINE: 1490
                            selectedVariants.add(
                              productModel
                                  .itemAttribute!
                                  .attributes![productModel
                                      .itemAttribute!
                                      .attributes!
                                      .indexOf(element)]
                                  .attributeOptions![0]
                                  .toString(),
                            );
                            selectedIndexVariants.add(
                              '${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',

LINE: 1491
                              productModel
                                  .itemAttribute!
                                  .attributes![productModel
                                      .itemAttribute!
                                      .attributes!
                                      .indexOf(element)]
                                  .attributeOptions![0]
                                  .toString(),
                            );
                            selectedIndexVariants.add(
                              '${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
                            );

LINE: 1492
                                  .itemAttribute!
                                  .attributes![productModel
                                      .itemAttribute!
                                      .attributes!
                                      .indexOf(element)]
                                  .attributeOptions![0]
                                  .toString(),
                            );
                            selectedIndexVariants.add(
                              '${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
                            );
                            selectedIndexArray.add(

LINE: 1494
                                      .itemAttribute!
                                      .attributes!
                                      .indexOf(element)]
                                  .attributeOptions![0]
                                  .toString(),
                            );
                            selectedIndexVariants.add(
                              '${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
                            );
                            selectedIndexArray.add(
                              '${productModel.itemAttribute!.attributes!.indexOf(element)}_0',
                            );

LINE: 1498
                                  .toString(),
                            );
                            selectedIndexVariants.add(
                              '${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
                            );
                            selectedIndexArray.add(
                              '${productModel.itemAttribute!.attributes!.indexOf(element)}_0',
                            );
                          }
                        }
                      }
                      if (productModel.itemAttribute!.variants!

LINE: 1501
                              '${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
                            );
                            selectedIndexArray.add(
                              '${productModel.itemAttribute!.attributes!.indexOf(element)}_0',
                            );
                          }
                        }
                      }
                      if (productModel.itemAttribute!.variants!
                          .where(
                            (element) =>
                                element.variantSku ==

LINE: 1506
                          }
                        }
                      }
                      if (productModel.itemAttribute!.variants!
                          .where(
                            (element) =>
                                element.variantSku ==
                                selectedVariants.join('-'),
                          )
                          .isNotEmpty) {
                        price = Constant.productCommissionPrice(
                          controller.vendorModel.value,

LINE: 1515
                          .isNotEmpty) {
                        price = Constant.productCommissionPrice(
                          controller.vendorModel.value,
                          productModel.itemAttribute!.variants!
                                  .where(
                                    (element) =>
                                        element.variantSku ==
                                        selectedVariants.join('-'),
                                  )
                                  .first
                                  .variantPrice ??
                              '0',

LINE: 1530
                    } else {
                      price = Constant.productCommissionPrice(
                        controller.vendorModel.value,
                        productModel.price.toString(),
                      );
                      disPrice =
                          double.parse(productModel.disPrice.toString()) <= 0
                              ? "0"
                              : Constant.productCommissionPrice(
                                controller.vendorModel.value,
                                productModel.disPrice.toString(),
                              );

LINE: 1533
                        productModel.price.toString(),
                      );
                      disPrice =
                          double.parse(productModel.disPrice.toString()) <= 0
                              ? "0"
                              : Constant.productCommissionPrice(
                                controller.vendorModel.value,
                                productModel.disPrice.toString(),
                              );
                    }
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 20),

LINE: 1537
                              ? "0"
                              : Constant.productCommissionPrice(
                                controller.vendorModel.value,
                                productModel.disPrice.toString(),
                              );
                    }
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 20),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [

LINE: 1552
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Constant
                                            .sectionConstantModel!
                                            .isProductDetails ==
                                        false
                                    ? SizedBox()
                                    : Row(
                                      children: [
                                        productModel.nonveg == true
                                            ? SvgPicture.asset(
                                              "assets/icons/ic_nonveg.svg",

LINE: 1558
                                    ? SizedBox()
                                    : Row(
                                      children: [
                                        productModel.nonveg == true
                                            ? SvgPicture.asset(
                                              "assets/icons/ic_nonveg.svg",
                                            )
                                            : SvgPicture.asset(
                                              "assets/icons/ic_veg.svg",
                                            ),
                                        const SizedBox(width: 5),
                                        Text(

LINE: 1567
                                            ),
                                        const SizedBox(width: 5),
                                        Text(
                                          productModel.nonveg == true
                                              ? "Non Veg.".tr
                                              : "Pure veg.".tr,
                                          style: TextStyle(
                                            color:
                                                productModel.nonveg == true
                                                    ? AppThemeData.danger300
                                                    : AppThemeData.success400,
                                            fontFamily: AppThemeData.semiBold,

LINE: 1572
                                              : "Pure veg.".tr,
                                          style: TextStyle(
                                            color:
                                                productModel.nonveg == true
                                                    ? AppThemeData.danger300
                                                    : AppThemeData.success400,
                                            fontFamily: AppThemeData.semiBold,
                                            fontWeight: FontWeight.w600,
                                          ),
                                        ),
                                      ],
                                    ),

LINE: 1583
                                    ),
                                const SizedBox(height: 5),
                                Text(
                                  productModel.name.toString(),
                                  style: TextStyle(
                                    fontSize: 18,
                                    color:
                                        isDark
                                            ? AppThemeData.grey50
                                            : AppThemeData.grey900,
                                    fontFamily: AppThemeData.semiBold,
                                    fontWeight: FontWeight.w600,

LINE: 1653
                                    ),
                                    const SizedBox(width: 5),
                                    Text(
                                      "${Constant.calculateReview(reviewCount: productModel.reviewsCount!.toStringAsFixed(0), reviewSum: productModel.reviewsSum.toString())} (${productModel.reviewsCount!.toStringAsFixed(0)})",
                                      style: TextStyle(
                                        color:
                                            isDark
                                                ? AppThemeData.grey50
                                                : AppThemeData.grey900,
                                        fontFamily: AppThemeData.regular,
                                        fontWeight: FontWeight.w500,
                                      ),

LINE: 1666
                                  ],
                                ),
                                Text(
                                  "${productModel.description}",
                                  maxLines: 2,
                                  style: TextStyle(
                                    overflow: TextOverflow.ellipsis,
                                    color:
                                        isDark
                                            ? AppThemeData.grey50
                                            : AppThemeData.grey900,
                                    fontFamily: AppThemeData.regular,

LINE: 1687
                                        return infoDialog(
                                          controller,
                                          isDark,
                                          productModel,
                                        );
                                      },
                                    );
                                  },
                                  child: Row(
                                    children: [
                                      Icon(
                                        Icons.info,

LINE: 1730
                            child: Stack(
                              children: [
                                NetworkImageWidget(
                                  imageUrl: productModel.photo.toString(),
                                  fit: BoxFit.cover,
                                  height: Responsive.height(16, context),
                                  width: Responsive.width(34, context),
                                ),
                                Container(
                                  height: Responsive.height(16, context),
                                  width: Responsive.width(34, context),
                                  decoration: BoxDecoration(

LINE: 1757
                                      if (controller.favouriteItemList
                                          .where(
                                            (p0) =>
                                                p0.productId == productModel.id,
                                          )
                                          .isNotEmpty) {
                                        FavouriteItemModel
                                        favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId:
                                              controller.vendorModel.value.id,
                                          userId:

LINE: 1762
                                          .isNotEmpty) {
                                        FavouriteItemModel
                                        favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId:
                                              controller.vendorModel.value.id,
                                          userId:
                                              FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList
                                            .removeWhere(
                                              (item) =>

LINE: 1772
                                            .removeWhere(
                                              (item) =>
                                                  item.productId ==
                                                  productModel.id,
                                            );
                                        await FireStoreUtils.removeFavouriteItem(
                                          favouriteModel,
                                        );
                                      } else {
                                        FavouriteItemModel
                                        favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,

LINE: 1780
                                      } else {
                                        FavouriteItemModel
                                        favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId:
                                              controller.vendorModel.value.id,
                                          userId:
                                              FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.add(
                                          favouriteModel,
                                        );

LINE: 1801
                                                  .where(
                                                    (p0) =>
                                                        p0.productId ==
                                                        productModel.id,
                                                  )
                                                  .isNotEmpty
                                              ? SvgPicture.asset(
                                                "assets/icons/ic_like_fill.svg",
                                              )
                                              : SvgPicture.asset(
                                                "assets/icons/ic_like.svg",
                                              ),

LINE: 1822
                                      right: 20,
                                      child:
                                          selectedVariants.isNotEmpty ||
                                                  (productModel.addOnsTitle !=
                                                          null &&
                                                      productModel
                                                          .addOnsTitle!
                                                          .isNotEmpty)
                                              ? RoundedButtonFill(
                                                title: "Add".tr,
                                                width: 10,
                                                height: 4,

LINE: 1824
                                          selectedVariants.isNotEmpty ||
                                                  (productModel.addOnsTitle !=
                                                          null &&
                                                      productModel
                                                          .addOnsTitle!
                                                          .isNotEmpty)
                                              ? RoundedButtonFill(
                                                title: "Add".tr,
                                                width: 10,
                                                height: 4,
                                                color:
                                                    isDark

LINE: 1825
                                                  (productModel.addOnsTitle !=
                                                          null &&
                                                      productModel
                                                          .addOnsTitle!
                                                          .isNotEmpty)
                                              ? RoundedButtonFill(
                                                title: "Add".tr,
                                                width: 10,
                                                height: 4,
                                                color:
                                                    isDark
                                                        ? AppThemeData.grey900

LINE: 1848
                                                  controller.selectedAddOns
                                                      .clear();
                                                  controller.quantity.value = 1;
                                                  if (productModel
                                                          .itemAttribute !=
                                                      null) {
                                                    if (productModel
                                                        .itemAttribute!
                                                        .attributes!
                                                        .isNotEmpty) {
                                                      for (var element
                                                          in productModel

LINE: 1849
                                                      .clear();
                                                  controller.quantity.value = 1;
                                                  if (productModel
                                                          .itemAttribute !=
                                                      null) {
                                                    if (productModel
                                                        .itemAttribute!
                                                        .attributes!
                                                        .isNotEmpty) {
                                                      for (var element
                                                          in productModel
                                                              .itemAttribute!

LINE: 1851
                                                  if (productModel
                                                          .itemAttribute !=
                                                      null) {
                                                    if (productModel
                                                        .itemAttribute!
                                                        .attributes!
                                                        .isNotEmpty) {
                                                      for (var element
                                                          in productModel
                                                              .itemAttribute!
                                                              .attributes!) {
                                                        if (element

LINE: 1852
                                                          .itemAttribute !=
                                                      null) {
                                                    if (productModel
                                                        .itemAttribute!
                                                        .attributes!
                                                        .isNotEmpty) {
                                                      for (var element
                                                          in productModel
                                                              .itemAttribute!
                                                              .attributes!) {
                                                        if (element
                                                            .attributeOptions!

LINE: 1853
                                                      null) {
                                                    if (productModel
                                                        .itemAttribute!
                                                        .attributes!
                                                        .isNotEmpty) {
                                                      for (var element
                                                          in productModel
                                                              .itemAttribute!
                                                              .attributes!) {
                                                        if (element
                                                            .attributeOptions!
                                                            .isNotEmpty) {

LINE: 1856
                                                        .attributes!
                                                        .isNotEmpty) {
                                                      for (var element
                                                          in productModel
                                                              .itemAttribute!
                                                              .attributes!) {
                                                        if (element
                                                            .attributeOptions!
                                                            .isNotEmpty) {
                                                          controller.selectedVariants.add(
                                                            productModel
                                                                .itemAttribute!

LINE: 1857
                                                        .isNotEmpty) {
                                                      for (var element
                                                          in productModel
                                                              .itemAttribute!
                                                              .attributes!) {
                                                        if (element
                                                            .attributeOptions!
                                                            .isNotEmpty) {
                                                          controller.selectedVariants.add(
                                                            productModel
                                                                .itemAttribute!
                                                                .attributes![productModel

LINE: 1858
                                                      for (var element
                                                          in productModel
                                                              .itemAttribute!
                                                              .attributes!) {
                                                        if (element
                                                            .attributeOptions!
                                                            .isNotEmpty) {
                                                          controller.selectedVariants.add(
                                                            productModel
                                                                .itemAttribute!
                                                                .attributes![productModel
                                                                    .itemAttribute!

LINE: 1860
                                                              .itemAttribute!
                                                              .attributes!) {
                                                        if (element
                                                            .attributeOptions!
                                                            .isNotEmpty) {
                                                          controller.selectedVariants.add(
                                                            productModel
                                                                .itemAttribute!
                                                                .attributes![productModel
                                                                    .itemAttribute!
                                                                    .attributes!
                                                                    .indexOf(

LINE: 1863
                                                            .attributeOptions!
                                                            .isNotEmpty) {
                                                          controller.selectedVariants.add(
                                                            productModel
                                                                .itemAttribute!
                                                                .attributes![productModel
                                                                    .itemAttribute!
                                                                    .attributes!
                                                                    .indexOf(
                                                                      element,
                                                                    )]
                                                                .attributeOptions![0]

LINE: 1864
                                                            .isNotEmpty) {
                                                          controller.selectedVariants.add(
                                                            productModel
                                                                .itemAttribute!
                                                                .attributes![productModel
                                                                    .itemAttribute!
                                                                    .attributes!
                                                                    .indexOf(
                                                                      element,
                                                                    )]
                                                                .attributeOptions![0]
                                                                .toString(),

LINE: 1865
                                                          controller.selectedVariants.add(
                                                            productModel
                                                                .itemAttribute!
                                                                .attributes![productModel
                                                                    .itemAttribute!
                                                                    .attributes!
                                                                    .indexOf(
                                                                      element,
                                                                    )]
                                                                .attributeOptions![0]
                                                                .toString(),
                                                          );

LINE: 1866
                                                            productModel
                                                                .itemAttribute!
                                                                .attributes![productModel
                                                                    .itemAttribute!
                                                                    .attributes!
                                                                    .indexOf(
                                                                      element,
                                                                    )]
                                                                .attributeOptions![0]
                                                                .toString(),
                                                          );
                                                          controller

LINE: 1867
                                                                .itemAttribute!
                                                                .attributes![productModel
                                                                    .itemAttribute!
                                                                    .attributes!
                                                                    .indexOf(
                                                                      element,
                                                                    )]
                                                                .attributeOptions![0]
                                                                .toString(),
                                                          );
                                                          controller
                                                              .selectedIndexVariants

LINE: 1871
                                                                    .indexOf(
                                                                      element,
                                                                    )]
                                                                .attributeOptions![0]
                                                                .toString(),
                                                          );
                                                          controller
                                                              .selectedIndexVariants
                                                              .add(
                                                                '${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
                                                              );
                                                          controller

LINE: 1877
                                                          controller
                                                              .selectedIndexVariants
                                                              .add(
                                                                '${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
                                                              );
                                                          controller
                                                              .selectedIndexArray
                                                              .add(
                                                                '${productModel.itemAttribute!.attributes!.indexOf(element)}_0',
                                                              );
                                                        }
                                                      }

LINE: 1882
                                                          controller
                                                              .selectedIndexArray
                                                              .add(
                                                                '${productModel.itemAttribute!.attributes!.indexOf(element)}_0',
                                                              );
                                                        }
                                                      }
                                                    }
                                                    final bool
                                                    productIsInList = cartItem.any(
                                                      (product) =>
                                                          product.id ==

LINE: 1891
                                                    productIsInList = cartItem.any(
                                                      (product) =>
                                                          product.id ==
                                                          "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
                                                    );

                                                    if (productIsInList) {
                                                      CartProductModel element =
                                                          cartItem.firstWhere(
                                                            (product) =>
                                                                product.id ==
                                                                "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",

LINE: 1895
                                                    );

                                                    if (productIsInList) {
                                                      CartProductModel element =
                                                          cartItem.firstWhere(
                                                            (product) =>
                                                                product.id ==
                                                                "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
                                                          );
                                                      controller
                                                              .quantity
                                                              .value =

LINE: 1899
                                                          cartItem.firstWhere(
                                                            (product) =>
                                                                product.id ==
                                                                "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
                                                          );
                                                      controller
                                                              .quantity
                                                              .value =
                                                          element.quantity!;
                                                      if (element.extras !=
                                                          null) {
                                                        for (var element

LINE: 1904
                                                      controller
                                                              .quantity
                                                              .value =
                                                          element.quantity!;
                                                      if (element.extras !=
                                                          null) {
                                                        for (var element
                                                            in element
                                                                .extras!) {
                                                          controller
                                                              .selectedAddOns
                                                              .add(element);

LINE: 1905
                                                              .quantity
                                                              .value =
                                                          element.quantity!;
                                                      if (element.extras !=
                                                          null) {
                                                        for (var element
                                                            in element
                                                                .extras!) {
                                                          controller
                                                              .selectedAddOns
                                                              .add(element);
                                                        }

LINE: 1909
                                                          null) {
                                                        for (var element
                                                            in element
                                                                .extras!) {
                                                          controller
                                                              .selectedAddOns
                                                              .add(element);
                                                        }
                                                      }
                                                    }
                                                  } else {
                                                    if (cartItem

LINE: 1921
                                                        .where(
                                                          (product) =>
                                                              product.id ==
                                                              "${productModel.id}",
                                                        )
                                                        .isNotEmpty) {
                                                      CartProductModel element =
                                                          cartItem.firstWhere(
                                                            (product) =>
                                                                product.id ==
                                                                "${productModel.id}",
                                                          );

LINE: 1924
                                                              "${productModel.id}",
                                                        )
                                                        .isNotEmpty) {
                                                      CartProductModel element =
                                                          cartItem.firstWhere(
                                                            (product) =>
                                                                product.id ==
                                                                "${productModel.id}",
                                                          );
                                                      controller
                                                              .quantity
                                                              .value =

LINE: 1928
                                                          cartItem.firstWhere(
                                                            (product) =>
                                                                product.id ==
                                                                "${productModel.id}",
                                                          );
                                                      controller
                                                              .quantity
                                                              .value =
                                                          element.quantity!;
                                                      if (element.extras !=
                                                          null) {
                                                        for (var element

LINE: 1933
                                                      controller
                                                              .quantity
                                                              .value =
                                                          element.quantity!;
                                                      if (element.extras !=
                                                          null) {
                                                        for (var element
                                                            in element
                                                                .extras!) {
                                                          controller
                                                              .selectedAddOns
                                                              .add(element);

LINE: 1934
                                                              .quantity
                                                              .value =
                                                          element.quantity!;
                                                      if (element.extras !=
                                                          null) {
                                                        for (var element
                                                            in element
                                                                .extras!) {
                                                          controller
                                                              .selectedAddOns
                                                              .add(element);
                                                        }

LINE: 1938
                                                          null) {
                                                        for (var element
                                                            in element
                                                                .extras!) {
                                                          controller
                                                              .selectedAddOns
                                                              .add(element);
                                                        }
                                                      }
                                                    }
                                                  }
                                                  controller.update();

LINE: 1948
                                                  }
                                                  controller.update();
                                                  controller.calculatePrice(
                                                    productModel,
                                                  );
                                                  productDetailsBottomSheet(
                                                    context,
                                                    productModel,
                                                  );
                                                },
                                              )
                                              : Obx(

LINE: 1952
                                                  );
                                                  productDetailsBottomSheet(
                                                    context,
                                                    productModel,
                                                  );
                                                },
                                              )
                                              : Obx(
                                                () =>
                                                    cartItem
                                                            .where(
                                                              (p0) =>

LINE: 1962
                                                            .where(
                                                              (p0) =>
                                                                  p0.id ==
                                                                  productModel
                                                                      .id,
                                                            )
                                                            .isNotEmpty
                                                        ? Container(
                                                          width:
                                                              Responsive.width(
                                                                100,
                                                                context,

LINE: 2002
                                                              InkWell(
                                                                onTap: () {
                                                                  controller.addToCart(
                                                                    productModel:
                                                                        productModel,
                                                                    price:
                                                                        price,
                                                                    discountPrice:
                                                                        disPrice,
                                                                    isIncrement:
                                                                        false,
                                                                    quantity:

LINE: 2003
                                                                onTap: () {
                                                                  controller.addToCart(
                                                                    productModel:
                                                                        productModel,
                                                                    price:
                                                                        price,
                                                                    discountPrice:
                                                                        disPrice,
                                                                    isIncrement:
                                                                        false,
                                                                    quantity:
                                                                        cartItem

LINE: 2017
                                                                                p0,
                                                                              ) =>
                                                                                  p0.id ==
                                                                                  productModel.id,
                                                                            )
                                                                            .first
                                                                            .quantity! -
                                                                        1,
                                                                  );
                                                                },
                                                                child: Icon(
                                                                  Icons.remove,

LINE: 2020
                                                                                  productModel.id,
                                                                            )
                                                                            .first
                                                                            .quantity! -
                                                                        1,
                                                                  );
                                                                },
                                                                child: Icon(
                                                                  Icons.remove,
                                                                  color:
                                                                      isDark
                                                                          ? AppThemeData

LINE: 2045
                                                                      .where(
                                                                        (p0) =>
                                                                            p0.id ==
                                                                            productModel.id,
                                                                      )
                                                                      .first
                                                                      .quantity
                                                                      .toString(),
                                                                  textAlign:
                                                                      TextAlign
                                                                          .start,
                                                                  maxLines: 1,

LINE: 2081
                                                                                      p0,
                                                                                    ) =>
                                                                                        p0.id ==
                                                                                        productModel.id,
                                                                                  )
                                                                                  .first
                                                                                  .quantity ??
                                                                              0) <
                                                                          (productModel.quantity ??
                                                                              0) ||
                                                                      (productModel.quantity ??
                                                                              0) ==

LINE: 2086
                                                                                  .first
                                                                                  .quantity ??
                                                                              0) <
                                                                          (productModel.quantity ??
                                                                              0) ||
                                                                      (productModel.quantity ??
                                                                              0) ==
                                                                          -1) {
                                                                    controller.addToCart(
                                                                      productModel:
                                                                          productModel,
                                                                      price:

LINE: 2088
                                                                              0) <
                                                                          (productModel.quantity ??
                                                                              0) ||
                                                                      (productModel.quantity ??
                                                                              0) ==
                                                                          -1) {
                                                                    controller.addToCart(
                                                                      productModel:
                                                                          productModel,
                                                                      price:
                                                                          price,
                                                                      discountPrice:

LINE: 2092
                                                                              0) ==
                                                                          -1) {
                                                                    controller.addToCart(
                                                                      productModel:
                                                                          productModel,
                                                                      price:
                                                                          price,
                                                                      discountPrice:
                                                                          disPrice,
                                                                      isIncrement:
                                                                          true,
                                                                      quantity:

LINE: 2093
                                                                          -1) {
                                                                    controller.addToCart(
                                                                      productModel:
                                                                          productModel,
                                                                      price:
                                                                          price,
                                                                      discountPrice:
                                                                          disPrice,
                                                                      isIncrement:
                                                                          true,
                                                                      quantity:
                                                                          cartItem

LINE: 2107
                                                                                  p0,
                                                                                ) =>
                                                                                    p0.id ==
                                                                                    productModel.id,
                                                                              )
                                                                              .first
                                                                              .quantity! +
                                                                          1,
                                                                    );
                                                                  } else {
                                                                    ShowToastDialog.showToast(
                                                                      "Out of stock"

LINE: 2110
                                                                                    productModel.id,
                                                                              )
                                                                              .first
                                                                              .quantity! +
                                                                          1,
                                                                    );
                                                                  } else {
                                                                    ShowToastDialog.showToast(
                                                                      "Out of stock"
                                                                          .tr,
                                                                    );
                                                                  }

LINE: 2148
                                                                  .primary300,
                                                          onPress: () async {
                                                            if (1 <=
                                                                    (productModel
                                                                            .quantity ??
                                                                        0) ||
                                                                (productModel
                                                                            .quantity ??
                                                                        0) ==
                                                                    -1) {
                                                              controller.addToCart(
                                                                productModel:

LINE: 2151
                                                                    (productModel
                                                                            .quantity ??
                                                                        0) ||
                                                                (productModel
                                                                            .quantity ??
                                                                        0) ==
                                                                    -1) {
                                                              controller.addToCart(
                                                                productModel:
                                                                    productModel,
                                                                price: price,
                                                                discountPrice:

LINE: 2156
                                                                        0) ==
                                                                    -1) {
                                                              controller.addToCart(
                                                                productModel:
                                                                    productModel,
                                                                price: price,
                                                                discountPrice:
                                                                    disPrice,
                                                                isIncrement:
                                                                    true,
                                                                quantity: 1,
                                                              );

LINE: 2157
                                                                    -1) {
                                                              controller.addToCart(
                                                                productModel:
                                                                    productModel,
                                                                price: price,
                                                                discountPrice:
                                                                    disPrice,
                                                                isIncrement:
                                                                    true,
                                                                quantity: 1,
                                                              );
                                                            } else {

LINE: 2193

  Future productDetailsBottomSheet(
    BuildContext context,
    ProductModel productModel,
  ) {
    return showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      isDismissible: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(30)),
      ),

LINE: 2208
            heightFactor: 0.85,
            child: StatefulBuilder(
              builder: (context1, setState) {
                return ProductDetailsView(productModel: productModel);
              },
            ),
          ),
    );
  }

  Dialog infoDialog(
    RestaurantDetailsController controller,

LINE: 2218
  Dialog infoDialog(
    RestaurantDetailsController controller,
    isDark,
    ProductModel productModel,
  ) {
    return Dialog(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      insetPadding: const EdgeInsets.all(10),
      clipBehavior: Clip.antiAliasWithSaveLayer,
      backgroundColor: isDark ? AppThemeData.surfaceDark : AppThemeData.surface,
      child: Padding(
        padding: const EdgeInsets.all(30),

LINE: 2253
                        ),
                      ),
                      Text(
                        productModel.description.toString(),
                        textAlign: TextAlign.start,
                        style: TextStyle(
                          fontFamily: AppThemeData.regular,
                          fontWeight: FontWeight.w400,
                          color:
                              isDark
                                  ? AppThemeData.grey50
                                  : AppThemeData.grey900,

LINE: 2267
                    ],
                  ),
                ),
                productModel.grams == 0 &&
                        Constant.sectionConstantModel!.isProductDetails == false
                    ? SizedBox.shrink()
                    : Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(

LINE: 2268
                  ),
                ),
                productModel.grams == 0 &&
                        Constant.sectionConstantModel!.isProductDetails == false
                    ? SizedBox.shrink()
                    : Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Text(

LINE: 2290
                            ),
                          ),
                          Text(
                            productModel.grams.toString(),
                            textAlign: TextAlign.start,
                            style: TextStyle(
                              fontFamily: AppThemeData.bold,
                              color:
                                  isDark
                                      ? AppThemeData.grey50
                                      : AppThemeData.grey900,
                              fontSize: 16,

LINE: 2304
                        ],
                      ),
                    ),
                productModel.calories == 0 &&
                        Constant.sectionConstantModel!.isProductDetails == false
                    ? SizedBox.shrink()
                    : Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(

LINE: 2305
                      ),
                    ),
                productModel.calories == 0 &&
                        Constant.sectionConstantModel!.isProductDetails == false
                    ? SizedBox.shrink()
                    : Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Text(

LINE: 2327
                            ),
                          ),
                          Text(
                            productModel.calories.toString(),
                            textAlign: TextAlign.start,
                            style: TextStyle(
                              fontFamily: AppThemeData.bold,
                              color:
                                  isDark
                                      ? AppThemeData.grey50
                                      : AppThemeData.grey900,
                              fontSize: 16,

LINE: 2341
                        ],
                      ),
                    ),
                productModel.proteins == 0 &&
                        Constant.sectionConstantModel!.isProductDetails == false
                    ? SizedBox.shrink()
                    : Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(

LINE: 2342
                      ),
                    ),
                productModel.proteins == 0 &&
                        Constant.sectionConstantModel!.isProductDetails == false
                    ? SizedBox.shrink()
                    : Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Text(

LINE: 2364
                            ),
                          ),
                          Text(
                            productModel.proteins.toString(),
                            textAlign: TextAlign.start,
                            style: TextStyle(
                              fontFamily: AppThemeData.bold,
                              color:
                                  isDark
                                      ? AppThemeData.grey50
                                      : AppThemeData.grey900,
                              fontSize: 16,

LINE: 2378
                        ],
                      ),
                    ),
                productModel.fats == 0 &&
                        Constant.sectionConstantModel!.isProductDetails == false
                    ? SizedBox.shrink()
                    : Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(

LINE: 2379
                      ),
                    ),
                productModel.fats == 0 &&
                        Constant.sectionConstantModel!.isProductDetails == false
                    ? SizedBox.shrink()
                    : Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Text(

LINE: 2401
                            ),
                          ),
                          Text(
                            productModel.fats.toString(),
                            textAlign: TextAlign.start,
                            style: TextStyle(
                              fontFamily: AppThemeData.bold,
                              color:
                                  isDark
                                      ? AppThemeData.grey50
                                      : AppThemeData.grey900,
                              fontSize: 16,

LINE: 2416
                      ),
                    ),

                productModel.productSpecification != null &&
                        productModel.productSpecification!.isNotEmpty
                    ? Padding(
                      padding: const EdgeInsets.only(top: 10),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "Specification".tr,

LINE: 2417
                    ),

                productModel.productSpecification != null &&
                        productModel.productSpecification!.isNotEmpty
                    ? Padding(
                      padding: const EdgeInsets.only(top: 10),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "Specification".tr,
                            textAlign: TextAlign.start,

LINE: 2437
                            ),
                          ),
                          SizedBox(height: 8),
                          ListView.builder(
                            itemCount:
                                productModel.productSpecification!.length,
                            shrinkWrap: true,
                            padding: EdgeInsets.zero,
                            physics: const NeverScrollableScrollPhysics(),
                            itemBuilder: (context, index) {
                              return Padding(
                                padding: const EdgeInsets.only(bottom: 10),

LINE: 2439
                          SizedBox(height: 8),
                          ListView.builder(
                            itemCount:
                                productModel.productSpecification!.length,
                            shrinkWrap: true,
                            padding: EdgeInsets.zero,
                            physics: const NeverScrollableScrollPhysics(),
                            itemBuilder: (context, index) {
                              return Padding(
                                padding: const EdgeInsets.only(bottom: 10),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,

LINE: 2450
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      productModel.productSpecification!.keys
                                          .elementAt(index),
                                      textAlign: TextAlign.start,
                                      style: TextStyle(
                                        fontFamily: AppThemeData.regular,
                                        color:
                                            isDark
                                                ? AppThemeData.grey300
                                                : AppThemeData.grey600,

LINE: 2463
                                      ),
                                    ),
                                    Text(
                                      productModel.productSpecification!.values
                                          .elementAt(index),
                                      textAlign: TextAlign.start,
                                      style: TextStyle(
                                        fontFamily: AppThemeData.bold,
                                        color:
                                            isDark
                                                ? AppThemeData.grey50
                                                : AppThemeData.grey900,

LINE: 2485
                    )
                    : const SizedBox(),

                productModel.brandId != null && productModel.brandId!.isNotEmpty
                    ? Padding(
                      padding: const EdgeInsets.only(top: 10),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "Brand".tr,
                            textAlign: TextAlign.start,

LINE: 2506
                          ),
                          SizedBox(height: 5),
                          Text(
                            controller.getBrandName(productModel.brandId!),
                            textAlign: TextAlign.start,
                            style: TextStyle(
                              fontFamily: AppThemeData.semiBold,
                              color:
                                  isDark
                                      ? AppThemeData.grey50
                                      : AppThemeData.grey900,
                              fontSize: 16,

LINE: 2540
}

class ProductDetailsView extends StatelessWidget {
  final ProductModel productModel;

  const ProductDetailsView({super.key, required this.productModel});

  @override
  Widget build(BuildContext context) {
    final themeController = Get.find<ThemeController>();
    final isDark = themeController.isDark.value;
    return GetX(

LINE: 2542
class ProductDetailsView extends StatelessWidget {
  final ProductModel productModel;

  const ProductDetailsView({super.key, required this.productModel});

  @override
  Widget build(BuildContext context) {
    final themeController = Get.find<ThemeController>();
    final isDark = themeController.isDark.value;
    return GetX(
      init: RestaurantDetailsController(),
      builder: (controller) {

LINE: 2575
                          child: Stack(
                            children: [
                              NetworkImageWidget(
                                imageUrl: productModel.photo.toString(),
                                height: Responsive.height(11, context),
                                width: Responsive.width(22, context),
                                fit: BoxFit.cover,
                              ),
                              Container(
                                height: Responsive.height(11, context),
                                width: Responsive.width(22, context),
                                decoration: BoxDecoration(

LINE: 2606
                                children: [
                                  Expanded(
                                    child: Text(
                                      productModel.name.toString(),
                                      textAlign: TextAlign.start,
                                      maxLines: 1,
                                      style: TextStyle(
                                        fontSize: 16,
                                        overflow: TextOverflow.ellipsis,
                                        fontFamily: AppThemeData.semiBold,
                                        fontWeight: FontWeight.w600,
                                        color:

LINE: 2626
                                      if (controller.favouriteItemList
                                          .where(
                                            (p0) =>
                                                p0.productId == productModel.id,
                                          )
                                          .isNotEmpty) {
                                        FavouriteItemModel
                                        favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId:
                                              controller.vendorModel.value.id,
                                          userId:

LINE: 2631
                                          .isNotEmpty) {
                                        FavouriteItemModel
                                        favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId:
                                              controller.vendorModel.value.id,
                                          userId:
                                              FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList
                                            .removeWhere(
                                              (item) =>

LINE: 2641
                                            .removeWhere(
                                              (item) =>
                                                  item.productId ==
                                                  productModel.id,
                                            );
                                        await FireStoreUtils.removeFavouriteItem(
                                          favouriteModel,
                                        );
                                      } else {
                                        FavouriteItemModel
                                        favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,

LINE: 2649
                                      } else {
                                        FavouriteItemModel
                                        favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId:
                                              controller.vendorModel.value.id,
                                          userId:
                                              FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.add(
                                          favouriteModel,
                                        );

LINE: 2670
                                                  .where(
                                                    (p0) =>
                                                        p0.productId ==
                                                        productModel.id,
                                                  )
                                                  .isNotEmpty
                                              ? SvgPicture.asset(
                                                "assets/icons/ic_like_fill.svg",
                                              )
                                              : SvgPicture.asset(
                                                "assets/icons/ic_like.svg",
                                                colorFilter:

LINE: 2689
                                ],
                              ),
                              Text(
                                productModel.description.toString(),
                                textAlign: TextAlign.start,
                                style: TextStyle(
                                  fontSize: 12,
                                  fontFamily: AppThemeData.regular,
                                  fontWeight: FontWeight.w400,
                                  color:
                                      isDark
                                          ? AppThemeData.grey50

LINE: 2709
                  ),
                ),
                const SizedBox(height: 10),
                productModel.itemAttribute == null ||
                        productModel.itemAttribute!.attributes!.isEmpty
                    ? const SizedBox()
                    : ListView.builder(
                      itemCount: productModel.itemAttribute!.attributes!.length,
                      shrinkWrap: true,
                      padding: EdgeInsets.zero,
                      physics: const NeverScrollableScrollPhysics(),
                      itemBuilder: (context, index) {

LINE: 2710
                ),
                const SizedBox(height: 10),
                productModel.itemAttribute == null ||
                        productModel.itemAttribute!.attributes!.isEmpty
                    ? const SizedBox()
                    : ListView.builder(
                      itemCount: productModel.itemAttribute!.attributes!.length,
                      shrinkWrap: true,
                      padding: EdgeInsets.zero,
                      physics: const NeverScrollableScrollPhysics(),
                      itemBuilder: (context, index) {
                        String title = "";

LINE: 2712
                productModel.itemAttribute == null ||
                        productModel.itemAttribute!.attributes!.isEmpty
                    ? const SizedBox()
                    : ListView.builder(
                      itemCount: productModel.itemAttribute!.attributes!.length,
                      shrinkWrap: true,
                      padding: EdgeInsets.zero,
                      physics: const NeverScrollableScrollPhysics(),
                      itemBuilder: (context, index) {
                        String title = "";
                        for (var element in controller.attributesList) {
                          if (productModel

LINE: 2713
                        productModel.itemAttribute!.attributes!.isEmpty
                    ? const SizedBox()
                    : ListView.builder(
                      itemCount: productModel.itemAttribute!.attributes!.length,
                      shrinkWrap: true,
                      padding: EdgeInsets.zero,
                      physics: const NeverScrollableScrollPhysics(),
                      itemBuilder: (context, index) {
                        String title = "";
                        for (var element in controller.attributesList) {
                          if (productModel
                                  .itemAttribute!

LINE: 2720
                      itemBuilder: (context, index) {
                        String title = "";
                        for (var element in controller.attributesList) {
                          if (productModel
                                  .itemAttribute!
                                  .attributes![index]
                                  .attributeId ==
                              element.id) {
                            title = element.title.toString();
                          }
                        }
                        return Padding(

LINE: 2721
                        String title = "";
                        for (var element in controller.attributesList) {
                          if (productModel
                                  .itemAttribute!
                                  .attributes![index]
                                  .attributeId ==
                              element.id) {
                            title = element.title.toString();
                          }
                        }
                        return Padding(
                          padding: const EdgeInsets.symmetric(

LINE: 2722
                        for (var element in controller.attributesList) {
                          if (productModel
                                  .itemAttribute!
                                  .attributes![index]
                                  .attributeId ==
                              element.id) {
                            title = element.title.toString();
                          }
                        }
                        return Padding(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 16,

LINE: 2749
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  productModel
                                          .itemAttribute!
                                          .attributes![index]
                                          .attributeOptions!
                                          .isNotEmpty
                                      ? Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [

LINE: 2750
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  productModel
                                          .itemAttribute!
                                          .attributes![index]
                                          .attributeOptions!
                                          .isNotEmpty
                                      ? Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Padding(

LINE: 2751
                                children: [
                                  productModel
                                          .itemAttribute!
                                          .attributes![index]
                                          .attributeOptions!
                                          .isNotEmpty
                                      ? Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Padding(
                                            padding: const EdgeInsets.symmetric(

LINE: 2752
                                  productModel
                                          .itemAttribute!
                                          .attributes![index]
                                          .attributeOptions!
                                          .isNotEmpty
                                      ? Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Padding(
                                            padding: const EdgeInsets.symmetric(
                                              horizontal: 10,

LINE: 2814
                                      runSpacing: 6.0,
                                      children:
                                          List.generate(
                                            productModel
                                                .itemAttribute!
                                                .attributes![index]
                                                .attributeOptions!
                                                .length,
                                            (i) {
                                              return InkWell(
                                                onTap: () async {
                                                  if (controller

LINE: 2815
                                      children:
                                          List.generate(
                                            productModel
                                                .itemAttribute!
                                                .attributes![index]
                                                .attributeOptions!
                                                .length,
                                            (i) {
                                              return InkWell(
                                                onTap: () async {
                                                  if (controller
                                                      .selectedIndexVariants

LINE: 2816
                                          List.generate(
                                            productModel
                                                .itemAttribute!
                                                .attributes![index]
                                                .attributeOptions!
                                                .length,
                                            (i) {
                                              return InkWell(
                                                onTap: () async {
                                                  if (controller
                                                      .selectedIndexVariants
                                                      .where(

LINE: 2817
                                            productModel
                                                .itemAttribute!
                                                .attributes![index]
                                                .attributeOptions!
                                                .length,
                                            (i) {
                                              return InkWell(
                                                onTap: () async {
                                                  if (controller
                                                      .selectedIndexVariants
                                                      .where(
                                                        (element) =>

LINE: 2834
                                                    controller.selectedVariants
                                                        .insert(
                                                          index,
                                                          productModel
                                                              .itemAttribute!
                                                              .attributes![index]
                                                              .attributeOptions![i]
                                                              .toString(),
                                                        );
                                                    controller
                                                        .selectedIndexVariants
                                                        .add(

LINE: 2835
                                                        .insert(
                                                          index,
                                                          productModel
                                                              .itemAttribute!
                                                              .attributes![index]
                                                              .attributeOptions![i]
                                                              .toString(),
                                                        );
                                                    controller
                                                        .selectedIndexVariants
                                                        .add(
                                                          '$index _${productModel.itemAttribute!.attributes![index].attributeOptions![i].toString()}',

LINE: 2836
                                                          index,
                                                          productModel
                                                              .itemAttribute!
                                                              .attributes![index]
                                                              .attributeOptions![i]
                                                              .toString(),
                                                        );
                                                    controller
                                                        .selectedIndexVariants
                                                        .add(
                                                          '$index _${productModel.itemAttribute!.attributes![index].attributeOptions![i].toString()}',
                                                        );

LINE: 2837
                                                          productModel
                                                              .itemAttribute!
                                                              .attributes![index]
                                                              .attributeOptions![i]
                                                              .toString(),
                                                        );
                                                    controller
                                                        .selectedIndexVariants
                                                        .add(
                                                          '$index _${productModel.itemAttribute!.attributes![index].attributeOptions![i].toString()}',
                                                        );
                                                    controller

LINE: 2843
                                                    controller
                                                        .selectedIndexVariants
                                                        .add(
                                                          '$index _${productModel.itemAttribute!.attributes![index].attributeOptions![i].toString()}',
                                                        );
                                                    controller
                                                        .selectedIndexArray
                                                        .add('${index}_$i');
                                                  } else {
                                                    controller
                                                        .selectedIndexArray
                                                        .remove(

LINE: 2852
                                                    controller
                                                        .selectedIndexArray
                                                        .remove(
                                                          '${index}_${productModel.itemAttribute!.attributes![index].attributeOptions?.indexOf(controller.selectedIndexVariants.where((element) => element.contains('$index _')).first.replaceAll('$index _', ''))}',
                                                        );
                                                    controller.selectedVariants
                                                        .removeAt(index);
                                                    controller
                                                        .selectedIndexVariants
                                                        .remove(
                                                          controller
                                                              .selectedIndexVariants

LINE: 2874
                                                    controller.selectedVariants
                                                        .insert(
                                                          index,
                                                          productModel
                                                              .itemAttribute!
                                                              .attributes![index]
                                                              .attributeOptions![i]
                                                              .toString(),
                                                        );
                                                    controller
                                                        .selectedIndexVariants
                                                        .add(

LINE: 2875
                                                        .insert(
                                                          index,
                                                          productModel
                                                              .itemAttribute!
                                                              .attributes![index]
                                                              .attributeOptions![i]
                                                              .toString(),
                                                        );
                                                    controller
                                                        .selectedIndexVariants
                                                        .add(
                                                          '$index _${productModel.itemAttribute!.attributes![index].attributeOptions![i].toString()}',

LINE: 2876
                                                          index,
                                                          productModel
                                                              .itemAttribute!
                                                              .attributes![index]
                                                              .attributeOptions![i]
                                                              .toString(),
                                                        );
                                                    controller
                                                        .selectedIndexVariants
                                                        .add(
                                                          '$index _${productModel.itemAttribute!.attributes![index].attributeOptions![i].toString()}',
                                                        );

LINE: 2877
                                                          productModel
                                                              .itemAttribute!
                                                              .attributes![index]
                                                              .attributeOptions![i]
                                                              .toString(),
                                                        );
                                                    controller
                                                        .selectedIndexVariants
                                                        .add(
                                                          '$index _${productModel.itemAttribute!.attributes![index].attributeOptions![i].toString()}',
                                                        );
                                                    controller

LINE: 2883
                                                    controller
                                                        .selectedIndexVariants
                                                        .add(
                                                          '$index _${productModel.itemAttribute!.attributes![index].attributeOptions![i].toString()}',
                                                        );
                                                    controller
                                                        .selectedIndexArray
                                                        .add('${index}_$i');
                                                  }

                                                  final bool
                                                  productIsInList = cartItem.any(

LINE: 2894
                                                  productIsInList = cartItem.any(
                                                    (product) =>
                                                        product.id ==
                                                        "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
                                                  );
                                                  if (productIsInList) {
                                                    CartProductModel
                                                    element = cartItem.firstWhere(
                                                      (product) =>
                                                          product.id ==
                                                          "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
                                                    );

LINE: 2897
                                                        "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
                                                  );
                                                  if (productIsInList) {
                                                    CartProductModel
                                                    element = cartItem.firstWhere(
                                                      (product) =>
                                                          product.id ==
                                                          "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
                                                    );
                                                    controller.quantity.value =
                                                        element.quantity!;
                                                  } else {

LINE: 2901
                                                    element = cartItem.firstWhere(
                                                      (product) =>
                                                          product.id ==
                                                          "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
                                                    );
                                                    controller.quantity.value =
                                                        element.quantity!;
                                                  } else {
                                                    controller.quantity.value =
                                                        1;
                                                  }


LINE: 2904
                                                          "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
                                                    );
                                                    controller.quantity.value =
                                                        element.quantity!;
                                                  } else {
                                                    controller.quantity.value =
                                                        1;
                                                  }

                                                  controller.update();
                                                  controller.calculatePrice(
                                                    productModel,

LINE: 2912

                                                  controller.update();
                                                  controller.calculatePrice(
                                                    productModel,
                                                  );
                                                },
                                                child: Chip(
                                                  shape:
                                                      const RoundedRectangleBorder(
                                                        side: BorderSide(
                                                          color:
                                                              Colors

LINE: 2935
                                                        MainAxisSize.min,
                                                    children: [
                                                      Text(
                                                        productModel
                                                            .itemAttribute!
                                                            .attributes![index]
                                                            .attributeOptions![i]
                                                            .toString(),
                                                        style: TextStyle(
                                                          overflow:
                                                              TextOverflow
                                                                  .ellipsis,

LINE: 2936
                                                    children: [
                                                      Text(
                                                        productModel
                                                            .itemAttribute!
                                                            .attributes![index]
                                                            .attributeOptions![i]
                                                            .toString(),
                                                        style: TextStyle(
                                                          overflow:
                                                              TextOverflow
                                                                  .ellipsis,
                                                          fontFamily:

LINE: 2937
                                                      Text(
                                                        productModel
                                                            .itemAttribute!
                                                            .attributes![index]
                                                            .attributeOptions![i]
                                                            .toString(),
                                                        style: TextStyle(
                                                          overflow:
                                                              TextOverflow
                                                                  .ellipsis,
                                                          fontFamily:
                                                              AppThemeData

LINE: 2938
                                                        productModel
                                                            .itemAttribute!
                                                            .attributes![index]
                                                            .attributeOptions![i]
                                                            .toString(),
                                                        style: TextStyle(
                                                          overflow:
                                                              TextOverflow
                                                                  .ellipsis,
                                                          fontFamily:
                                                              AppThemeData
                                                                  .medium,

LINE: 2951
                                                              FontWeight.w500,
                                                          color:
                                                              controller.selectedVariants.contains(
                                                                    productModel
                                                                        .itemAttribute!
                                                                        .attributes![index]
                                                                        .attributeOptions![i]
                                                                        .toString(),
                                                                  )
                                                                  ? Colors.white
                                                                  : isDark
                                                                  ? AppThemeData

LINE: 2952
                                                          color:
                                                              controller.selectedVariants.contains(
                                                                    productModel
                                                                        .itemAttribute!
                                                                        .attributes![index]
                                                                        .attributeOptions![i]
                                                                        .toString(),
                                                                  )
                                                                  ? Colors.white
                                                                  : isDark
                                                                  ? AppThemeData
                                                                      .greyDark800

LINE: 2953
                                                              controller.selectedVariants.contains(
                                                                    productModel
                                                                        .itemAttribute!
                                                                        .attributes![index]
                                                                        .attributeOptions![i]
                                                                        .toString(),
                                                                  )
                                                                  ? Colors.white
                                                                  : isDark
                                                                  ? AppThemeData
                                                                      .greyDark800
                                                                  : AppThemeData

LINE: 2954
                                                                    productModel
                                                                        .itemAttribute!
                                                                        .attributes![index]
                                                                        .attributeOptions![i]
                                                                        .toString(),
                                                                  )
                                                                  ? Colors.white
                                                                  : isDark
                                                                  ? AppThemeData
                                                                      .greyDark800
                                                                  : AppThemeData
                                                                      .grey800,

LINE: 2969
                                                  ),
                                                  backgroundColor:
                                                      controller.selectedVariants.contains(
                                                            productModel
                                                                .itemAttribute!
                                                                .attributes![index]
                                                                .attributeOptions![i]
                                                                .toString(),
                                                          )
                                                          ? AppThemeData
                                                              .primary300
                                                          : isDark

LINE: 2970
                                                  backgroundColor:
                                                      controller.selectedVariants.contains(
                                                            productModel
                                                                .itemAttribute!
                                                                .attributes![index]
                                                                .attributeOptions![i]
                                                                .toString(),
                                                          )
                                                          ? AppThemeData
                                                              .primary300
                                                          : isDark
                                                          ? AppThemeData.grey800

LINE: 2971
                                                      controller.selectedVariants.contains(
                                                            productModel
                                                                .itemAttribute!
                                                                .attributes![index]
                                                                .attributeOptions![i]
                                                                .toString(),
                                                          )
                                                          ? AppThemeData
                                                              .primary300
                                                          : isDark
                                                          ? AppThemeData.grey800
                                                          : AppThemeData

LINE: 2972
                                                            productModel
                                                                .itemAttribute!
                                                                .attributes![index]
                                                                .attributeOptions![i]
                                                                .toString(),
                                                          )
                                                          ? AppThemeData
                                                              .primary300
                                                          : isDark
                                                          ? AppThemeData.grey800
                                                          : AppThemeData
                                                              .grey100,

LINE: 2998
                        );
                      },
                    ),
                productModel.addOnsTitle == null ||
                        productModel.addOnsTitle!.isEmpty
                    ? const SizedBox()
                    : Padding(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 5,
                      ),
                      child: Container(

LINE: 2999
                      },
                    ),
                productModel.addOnsTitle == null ||
                        productModel.addOnsTitle!.isEmpty
                    ? const SizedBox()
                    : Padding(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 5,
                      ),
                      child: Container(
                        decoration: ShapeDecoration(

LINE: 3043
                                padding: EdgeInsets.symmetric(vertical: 10),
                                child: Divider(),
                              ),
                              ListView.builder(
                                itemCount: productModel.addOnsTitle!.length,
                                physics: const NeverScrollableScrollPhysics(),
                                shrinkWrap: true,
                                padding: EdgeInsets.zero,
                                itemBuilder: (context, index) {
                                  String title =
                                      productModel.addOnsTitle![index];
                                  String price =

LINE: 3044
                                child: Divider(),
                              ),
                              ListView.builder(
                                itemCount: productModel.addOnsTitle!.length,
                                physics: const NeverScrollableScrollPhysics(),
                                shrinkWrap: true,
                                padding: EdgeInsets.zero,
                                itemBuilder: (context, index) {
                                  String title =
                                      productModel.addOnsTitle![index];
                                  String price =
                                      productModel.addOnsPrice![index];

LINE: 3050
                                padding: EdgeInsets.zero,
                                itemBuilder: (context, index) {
                                  String title =
                                      productModel.addOnsTitle![index];
                                  String price =
                                      productModel.addOnsPrice![index];
                                  return Padding(
                                    padding: const EdgeInsets.symmetric(
                                      horizontal: 10,
                                      vertical: 5,
                                    ),
                                    child: Row(

LINE: 3052
                                  String title =
                                      productModel.addOnsTitle![index];
                                  String price =
                                      productModel.addOnsPrice![index];
                                  return Padding(
                                    padding: const EdgeInsets.symmetric(
                                      horizontal: 10,
                                      vertical: 5,
                                    ),
                                    child: Row(
                                      children: [
                                        Expanded(

LINE: 3109
                                              activeColor:
                                                  AppThemeData.primary300,
                                              onChanged: (value) {
                                                if (value != null) {
                                                  if (value == true) {
                                                    controller.selectedAddOns
                                                        .add(title);
                                                  } else {
                                                    controller.selectedAddOns
                                                        .remove(title);
                                                  }
                                                  controller.update();

LINE: 3195
                          ),
                          InkWell(
                            onTap: () {
                              if (productModel.itemAttribute == null) {
                                if (controller.quantity.value <
                                        (productModel.quantity ?? 0) ||
                                    (productModel.quantity ?? 0) == -1) {
                                  controller.quantity.value += 1;
                                  controller.update();
                                } else {
                                  ShowToastDialog.showToast("Out of stock".tr);
                                }

LINE: 3197
                            onTap: () {
                              if (productModel.itemAttribute == null) {
                                if (controller.quantity.value <
                                        (productModel.quantity ?? 0) ||
                                    (productModel.quantity ?? 0) == -1) {
                                  controller.quantity.value += 1;
                                  controller.update();
                                } else {
                                  ShowToastDialog.showToast("Out of stock".tr);
                                }
                              } else {
                                int totalQuantity = int.parse(

LINE: 3198
                              if (productModel.itemAttribute == null) {
                                if (controller.quantity.value <
                                        (productModel.quantity ?? 0) ||
                                    (productModel.quantity ?? 0) == -1) {
                                  controller.quantity.value += 1;
                                  controller.update();
                                } else {
                                  ShowToastDialog.showToast("Out of stock".tr);
                                }
                              } else {
                                int totalQuantity = int.parse(
                                  productModel.itemAttribute!.variants!

LINE: 3206
                                }
                              } else {
                                int totalQuantity = int.parse(
                                  productModel.itemAttribute!.variants!
                                      .where(
                                        (element) =>
                                            element.variantSku ==
                                            controller.selectedVariants.join(
                                              '-',
                                            ),
                                      )
                                      .first

LINE: 3244
                    flex: 2,
                    child: RoundedButtonFill(
                      title:
                          "${'Add item'.tr} ${Constant.amountShow(amount: controller.calculatePrice(productModel))}"
                              .tr,
                      height: 5.5,
                      color: AppThemeData.primary300,
                      textColor: AppThemeData.grey50,
                      fontSizes: 16,
                      onPress: () async {
                        if (productModel.itemAttribute == null) {
                          await controller.addToCart(

LINE: 3251
                      textColor: AppThemeData.grey50,
                      fontSizes: 16,
                      onPress: () async {
                        if (productModel.itemAttribute == null) {
                          await controller.addToCart(
                            productModel: productModel,
                            price: Constant.productCommissionPrice(
                              controller.vendorModel.value,
                              productModel.price.toString(),
                            ),
                            discountPrice:
                                double.parse(

LINE: 3253
                      onPress: () async {
                        if (productModel.itemAttribute == null) {
                          await controller.addToCart(
                            productModel: productModel,
                            price: Constant.productCommissionPrice(
                              controller.vendorModel.value,
                              productModel.price.toString(),
                            ),
                            discountPrice:
                                double.parse(
                                          productModel.disPrice.toString(),
                                        ) <=

LINE: 3256
                            productModel: productModel,
                            price: Constant.productCommissionPrice(
                              controller.vendorModel.value,
                              productModel.price.toString(),
                            ),
                            discountPrice:
                                double.parse(
                                          productModel.disPrice.toString(),
                                        ) <=
                                        0
                                    ? "0"
                                    : Constant.productCommissionPrice(

LINE: 3260
                            ),
                            discountPrice:
                                double.parse(
                                          productModel.disPrice.toString(),
                                        ) <=
                                        0
                                    ? "0"
                                    : Constant.productCommissionPrice(
                                      controller.vendorModel.value,
                                      productModel.disPrice.toString(),
                                    ),
                            isIncrement: true,

LINE: 3266
                                    ? "0"
                                    : Constant.productCommissionPrice(
                                      controller.vendorModel.value,
                                      productModel.disPrice.toString(),
                                    ),
                            isIncrement: true,
                            quantity: controller.quantity.value,
                          );
                        } else {
                          String variantPrice = "0";
                          if (productModel.itemAttribute!.variants!.any(
                            (e) =>

LINE: 3273
                          );
                        } else {
                          String variantPrice = "0";
                          if (productModel.itemAttribute!.variants!.any(
                            (e) =>
                                e.variantSku ==
                                controller.selectedVariants.join('-'),
                          )) {
                            variantPrice = Constant.productCommissionPrice(
                              controller.vendorModel.value,
                              productModel.itemAttribute!.variants!
                                      .firstWhere(

LINE: 3280
                          )) {
                            variantPrice = Constant.productCommissionPrice(
                              controller.vendorModel.value,
                              productModel.itemAttribute!.variants!
                                      .firstWhere(
                                        (e) =>
                                            e.variantSku ==
                                            controller.selectedVariants.join(
                                              '-',
                                            ),
                                      )
                                      .variantPrice ??

LINE: 3295

                          Map<String, String> mapData = {};
                          for (var element
                              in productModel.itemAttribute!.attributes!) {
                            mapData.addEntries([
                              MapEntry(
                                controller.attributesList
                                    .firstWhere(
                                      (e) => e.id == element.attributeId,
                                    )
                                    .title
                                    .toString(),

LINE: 3304
                                    )
                                    .title
                                    .toString(),
                                controller.selectedVariants[productModel
                                    .itemAttribute!
                                    .attributes!
                                    .indexOf(element)],
                              ),
                            ]);
                          }

                          VariantInfo variantInfo = VariantInfo(

LINE: 3305
                                    .title
                                    .toString(),
                                controller.selectedVariants[productModel
                                    .itemAttribute!
                                    .attributes!
                                    .indexOf(element)],
                              ),
                            ]);
                          }

                          VariantInfo variantInfo = VariantInfo(
                            variantPrice:

LINE: 3306
                                    .toString(),
                                controller.selectedVariants[productModel
                                    .itemAttribute!
                                    .attributes!
                                    .indexOf(element)],
                              ),
                            ]);
                          }

                          VariantInfo variantInfo = VariantInfo(
                            variantPrice:
                                productModel.itemAttribute!.variants!

LINE: 3314

                          VariantInfo variantInfo = VariantInfo(
                            variantPrice:
                                productModel.itemAttribute!.variants!
                                    .firstWhere(
                                      (e) =>
                                          e.variantSku ==
                                          controller.selectedVariants.join('-'),
                                    )
                                    .variantPrice ??
                                '0',
                            variantSku: controller.selectedVariants.join('-'),

LINE: 3325
                            variantSku: controller.selectedVariants.join('-'),
                            variantOptions: mapData,
                            variantImage:
                                productModel.itemAttribute!.variants!
                                    .firstWhere(
                                      (e) =>
                                          e.variantSku ==
                                          controller.selectedVariants.join('-'),
                                    )
                                    .variantImage ??
                                '',
                            variantId:

LINE: 3334
                                    .variantImage ??
                                '',
                            variantId:
                                productModel.itemAttribute!.variants!
                                    .firstWhere(
                                      (e) =>
                                          e.variantSku ==
                                          controller.selectedVariants.join('-'),
                                    )
                                    .variantId ??
                                '0',
                          );

LINE: 3345
                          );

                          await controller.addToCart(
                            productModel: productModel,
                            price: variantPrice,
                            discountPrice: "0",
                            isIncrement: true,
                            variantInfo: variantInfo,
                            quantity: controller.quantity.value,
                          );
                        }
                        controller.update();
TEXT_END

## File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart
TEXT_START

LINE: 29
  }

  void animateSlider() {
    if (widget.vendorModel.photos != null && widget.vendorModel.photos!.isNotEmpty) {
      if (widget.vendorModel.photos!.length > 1) {
        Timer.periodic(const Duration(seconds: 2), (Timer timer) {
          if (currentPage < widget.vendorModel.photos!.length - 1) {
            currentPage++;
          } else {
            currentPage = 0;
          }


LINE: 30

  void animateSlider() {
    if (widget.vendorModel.photos != null && widget.vendorModel.photos!.isNotEmpty) {
      if (widget.vendorModel.photos!.length > 1) {
        Timer.periodic(const Duration(seconds: 2), (Timer timer) {
          if (currentPage < widget.vendorModel.photos!.length - 1) {
            currentPage++;
          } else {
            currentPage = 0;
          }

          if (pageController.hasClients) {

LINE: 32
    if (widget.vendorModel.photos != null && widget.vendorModel.photos!.isNotEmpty) {
      if (widget.vendorModel.photos!.length > 1) {
        Timer.periodic(const Duration(seconds: 2), (Timer timer) {
          if (currentPage < widget.vendorModel.photos!.length - 1) {
            currentPage++;
          } else {
            currentPage = 0;
          }

          if (pageController.hasClients) {
            pageController.animateToPage(
              currentPage,

LINE: 54
  Widget build(BuildContext context) {
    return SizedBox(
      height: Responsive.height(20, context),
      child: widget.vendorModel.photos == null || widget.vendorModel.photos!.isEmpty
          ? NetworkImageWidget(
              imageUrl: widget.vendorModel.photo.toString(),
              fit: BoxFit.cover,
              height: Responsive.height(20, context),
              width: Responsive.width(100, context),
            )
          : PageView.builder(
              physics: const BouncingScrollPhysics(),

LINE: 66
              controller: pageController,
              scrollDirection: Axis.horizontal,
              allowImplicitScrolling: true,
              itemCount: widget.vendorModel.photos!.length,
              padEnds: false,
              pageSnapping: true,
              itemBuilder: (BuildContext context, int index) {
                String image = widget.vendorModel.photos![index];
                return NetworkImageWidget(
                  imageUrl: image.toString(),
                  fit: BoxFit.cover,
                  height: Responsive.height(20, context),

LINE: 70
              padEnds: false,
              pageSnapping: true,
              itemBuilder: (BuildContext context, int index) {
                String image = widget.vendorModel.photos![index];
                return NetworkImageWidget(
                  imageUrl: image.toString(),
                  fit: BoxFit.cover,
                  height: Responsive.height(20, context),
                  width: Responsive.width(100, context),
                );
              },
            ),
TEXT_END

## File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\product_model.dart
TEXT_START

LINE: 4
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:customer/models/tax_model.dart';

class ProductModel {
  int? fats;
  String? vendorID;
  bool? veg;
  bool? publish;
  List<dynamic>? addOnsTitle;
  int? calories;
  int? proteins;
  List<dynamic>? addOnsPrice;

LINE: 37
  String? digitalProduct;
  List<TaxModel>? taxSetting;

  ProductModel({
    this.fats,
    this.vendorID,
    this.veg,
    this.publish,
    this.addOnsTitle,
    this.calories,
    this.proteins,
    this.addOnsPrice,

LINE: 71
    this.taxSetting,
  });

  ProductModel.fromJson(Map<String, dynamic> json) {
    fats = json['fats'];
    vendorID = json['vendorID'];
    veg = json['veg'];
    publish = json['publish'];
    addOnsTitle = json['addOnsTitle'];
    calories = json['calories'];
    proteins = json['proteins'];
    addOnsPrice = json['addOnsPrice'];

LINE: 85
    name = json['name'];
    reviewAttributes = json['reviewAttributes'];
    productSpecification = json['product_specification'];
    itemAttribute = json['item_attribute'] != null ? ItemAttribute.fromJson(json['item_attribute']) : null;
    id = json['id'];
    quantity = json['quantity'];
    grams = json['grams'];
    reviewsCount = json['reviewsCount'] ?? 0.0;
    disPrice = json['disPrice'] ?? "0";
    photos = json['photos'] ?? [];
    nonveg = json['nonveg'];
    photo = json['photo'];

LINE: 102
    brandId = json['brandID'];
    isDigitalProduct = json['isDigitalProduct'];
    digitalProduct = json['digitalProduct'];
    if (json['taxSetting'] != null) {
      taxSetting = <TaxModel>[];
      json['taxSetting'].forEach((v) {
        taxSetting!.add(TaxModel.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {

LINE: 105
    if (json['taxSetting'] != null) {
      taxSetting = <TaxModel>[];
      json['taxSetting'].forEach((v) {
        taxSetting!.add(TaxModel.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['fats'] = fats;
    data['vendorID'] = vendorID;

LINE: 125
    data['name'] = name;
    data['reviewAttributes'] = reviewAttributes;
    data['product_specification'] = productSpecification;
    if (itemAttribute != null) {
      data['item_attribute'] = itemAttribute!.toJson();
    }
    data['id'] = id;
    data['quantity'] = quantity;
    data['grams'] = grams;
    data['reviewsCount'] = reviewsCount;
    data['disPrice'] = disPrice;
    data['photos'] = photos;

LINE: 126
    data['reviewAttributes'] = reviewAttributes;
    data['product_specification'] = productSpecification;
    if (itemAttribute != null) {
      data['item_attribute'] = itemAttribute!.toJson();
    }
    data['id'] = id;
    data['quantity'] = quantity;
    data['grams'] = grams;
    data['reviewsCount'] = reviewsCount;
    data['disPrice'] = disPrice;
    data['photos'] = photos;
    data['nonveg'] = nonveg;

LINE: 144
    data['brandID'] = brandId;
    data['isDigitalProduct'] = isDigitalProduct;
    data['digitalProduct'] = digitalProduct;
    if (taxSetting != null) {
      data['taxSetting'] = taxSetting!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class ItemAttribute {
  List<Attributes>? attributes;

LINE: 145
    data['isDigitalProduct'] = isDigitalProduct;
    data['digitalProduct'] = digitalProduct;
    if (taxSetting != null) {
      data['taxSetting'] = taxSetting!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class ItemAttribute {
  List<Attributes>? attributes;
  List<Variants>? variants;

LINE: 158
  ItemAttribute({this.attributes, this.variants});

  ItemAttribute.fromJson(Map<String, dynamic> json) {
    if (json['attributes'] != null) {
      attributes = <Attributes>[];
      json['attributes'].forEach((v) {
        attributes!.add(Attributes.fromJson(v));
      });
    }
    if (json['variants'] != null) {
      variants = <Variants>[];
      json['variants'].forEach((v) {

LINE: 161
    if (json['attributes'] != null) {
      attributes = <Attributes>[];
      json['attributes'].forEach((v) {
        attributes!.add(Attributes.fromJson(v));
      });
    }
    if (json['variants'] != null) {
      variants = <Variants>[];
      json['variants'].forEach((v) {
        variants!.add(Variants.fromJson(v));
      });
    }

LINE: 164
        attributes!.add(Attributes.fromJson(v));
      });
    }
    if (json['variants'] != null) {
      variants = <Variants>[];
      json['variants'].forEach((v) {
        variants!.add(Variants.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {

LINE: 167
    if (json['variants'] != null) {
      variants = <Variants>[];
      json['variants'].forEach((v) {
        variants!.add(Variants.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    if (attributes != null) {
      data['attributes'] = attributes!.map((v) => v.toJson()).toList();

LINE: 174

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    if (attributes != null) {
      data['attributes'] = attributes!.map((v) => v.toJson()).toList();
    }
    if (variants != null) {
      data['variants'] = variants!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

LINE: 175
  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    if (attributes != null) {
      data['attributes'] = attributes!.map((v) => v.toJson()).toList();
    }
    if (variants != null) {
      data['variants'] = variants!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}


LINE: 177
    if (attributes != null) {
      data['attributes'] = attributes!.map((v) => v.toJson()).toList();
    }
    if (variants != null) {
      data['variants'] = variants!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Attributes {
  String? attributeId;

LINE: 178
      data['attributes'] = attributes!.map((v) => v.toJson()).toList();
    }
    if (variants != null) {
      data['variants'] = variants!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Attributes {
  String? attributeId;
  List<String>? attributeOptions;
TEXT_END

## File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart
TEXT_START

LINE: 30

  RxBool isVag = false.obs;
  RxBool isNonVag = false.obs;
  RxBool isMenuOpen = false.obs;

  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  RxList<FavouriteItemModel> favouriteItemList = <FavouriteItemModel>[].obs;
  RxList<ProductModel> allProductList = <ProductModel>[].obs;
  RxList<ProductModel> productList = <ProductModel>[].obs;
  RxList<VendorCategoryModel> vendorCategoryList = <VendorCategoryModel>[].obs;

  RxList<CouponModel> couponList = <CouponModel>[].obs;

LINE: 34

  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  RxList<FavouriteItemModel> favouriteItemList = <FavouriteItemModel>[].obs;
  RxList<ProductModel> allProductList = <ProductModel>[].obs;
  RxList<ProductModel> productList = <ProductModel>[].obs;
  RxList<VendorCategoryModel> vendorCategoryList = <VendorCategoryModel>[].obs;

  RxList<CouponModel> couponList = <CouponModel>[].obs;

  @override
  void onInit() {
    super.onInit();

LINE: 35
  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  RxList<FavouriteItemModel> favouriteItemList = <FavouriteItemModel>[].obs;
  RxList<ProductModel> allProductList = <ProductModel>[].obs;
  RxList<ProductModel> productList = <ProductModel>[].obs;
  RxList<VendorCategoryModel> vendorCategoryList = <VendorCategoryModel>[].obs;

  RxList<CouponModel> couponList = <CouponModel>[].obs;

  @override
  void onInit() {
    super.onInit();
    resetStep47gPageController();

LINE: 60
  }

  void animateSlider() {
    if (vendorModel.value.photos != null &&
        vendorModel.value.photos!.isNotEmpty) {
      step47gSliderTimer?.cancel();
      step47gSliderTimer = Timer.periodic(const Duration(seconds: 2), (
        Timer timer,
      ) {
        if (currentPage < vendorModel.value.photos!.length - 1) {
          currentPage++;
        } else {

LINE: 61

  void animateSlider() {
    if (vendorModel.value.photos != null &&
        vendorModel.value.photos!.isNotEmpty) {
      step47gSliderTimer?.cancel();
      step47gSliderTimer = Timer.periodic(const Duration(seconds: 2), (
        Timer timer,
      ) {
        if (currentPage < vendorModel.value.photos!.length - 1) {
          currentPage++;
        } else {
          currentPage.value = 0;

LINE: 66
      step47gSliderTimer = Timer.periodic(const Duration(seconds: 2), (
        Timer timer,
      ) {
        if (currentPage < vendorModel.value.photos!.length - 1) {
          currentPage++;
        } else {
          currentPage.value = 0;
        }

        if (pageController.value.hasClients &&
            pageController.value.positions.length == 1) {
          try {

LINE: 106
    print(
      "STEP47D_RESTAURANT_DETAIL_ARGUMENTS: type=${argumentData.runtimeType} value=$argumentData",
    );
    if (argumentData != null) {
      vendorModel.value = argumentData['vendorModel'];
      print(
        "STEP47D_RESTAURANT_DETAIL_VENDOR_ARG: id=${vendorModel.value.id} title=${vendorModel.value.title} zone=${vendorModel.value.zoneId}",
      );
    }
    animateSlider();
    statusCheck();


LINE: 134
    ).then((value) {
      if ((Constant.isSubscriptionModelApplied == true ||
              vendorModel.value.adminCommission?.isEnabled == true) &&
          vendorModel.value.subscriptionPlan != null) {
        if (vendorModel.value.subscriptionPlan?.itemLimit == '-1') {
          allProductList.value = value;
          productList.value = value;
          print(
            "STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: vendorId=${vendorModel.value.id} count=${productList.length} allCount=${allProductList.length}",
          );
        } else {
          int selectedProduct =

LINE: 168
      await FireStoreUtils.getVendorCategoryById(
        element.categoryID.toString(),
      ).then((value) {
        if (value != null) {
          vendorCategoryList.add(value);
        }
      });
    }

    await FireStoreUtils.getBrandList().then((value) {
      brandList.value = value;
    });

LINE: 195
      productList.value =
          allProductList
              .where(
                (p0) => p0.name!.toLowerCase().contains(name.toLowerCase()),
              )
              .toList();
    }
    update();
  }

  void filterRecord() {
    if (isVag.value == true && isNonVag.value == true) {

LINE: 227
  }

  bool isProductMatchedWithCategory(
    ProductModel product,
    VendorCategoryModel vendorCategoryModel,
  ) {
    final productCategoryId = normalizeCategoryKey(product.categoryID);
    final vendorCategoryId = normalizeCategoryKey(vendorCategoryModel.id);

    if (productCategoryId.isEmpty || vendorCategoryId.isEmpty) {
      return false;
    }

LINE: 240
    return productCategoryId == vendorCategoryId;
  }

  List<ProductModel> getProductsForCategory(
    VendorCategoryModel vendorCategoryModel,
  ) {
    return productList
        .where((p0) => isProductMatchedWithCategory(p0, vendorCategoryModel))
        .toList();
  }

  Future<List<ProductModel>> getProductByCategory(

LINE: 248
        .toList();
  }

  Future<List<ProductModel>> getProductByCategory(
    VendorCategoryModel vendorCategoryModel,
  ) async {
    return getProductsForCategory(vendorCategoryModel);
  }

  Future<void> getFavouriteList() async {
    if (Constant.userModel != null) {
      await FireStoreUtils.getFavouriteRestaurant().then((value) {

LINE: 255
  }

  Future<void> getFavouriteList() async {
    if (Constant.userModel != null) {
      await FireStoreUtils.getFavouriteRestaurant().then((value) {
        favouriteList.value = value;
      });

      await FireStoreUtils.getFavouriteItem().then((value) {
        favouriteItemList.value = value;
      });


LINE: 282
    var date = DateFormat('dd-MM-yyyy').format(now);
    for (var element in vendorModel.value.workingHours ?? []) {
      if (day == element.day.toString()) {
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = step46oSafeParseRestaurantWorkingDateTime(
              date,
              element.from,
            );
            var end = step46oSafeParseRestaurantWorkingDateTime(
              date,
              element.to,

LINE: 283
    for (var element in vendorModel.value.workingHours ?? []) {
      if (day == element.day.toString()) {
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = step46oSafeParseRestaurantWorkingDateTime(
              date,
              element.from,
            );
            var end = step46oSafeParseRestaurantWorkingDateTime(
              date,
              element.to,
            );

LINE: 331

  RxInt quantity = 1.obs;

  String calculatePrice(ProductModel productModel) {
    String mainPrice = "0";
    String variantPrice = "0";
    String adOnsPrice = "0";

    if (productModel.itemAttribute != null) {
      if (productModel.itemAttribute!.variants!
          .where((element) => element.variantSku == selectedVariants.join('-'))
          .isNotEmpty) {

LINE: 336
    String variantPrice = "0";
    String adOnsPrice = "0";

    if (productModel.itemAttribute != null) {
      if (productModel.itemAttribute!.variants!
          .where((element) => element.variantSku == selectedVariants.join('-'))
          .isNotEmpty) {
        variantPrice = Constant.productCommissionPrice(
          vendorModel.value,
          productModel.itemAttribute!.variants!
                  .where(
                    (element) =>

LINE: 337
    String adOnsPrice = "0";

    if (productModel.itemAttribute != null) {
      if (productModel.itemAttribute!.variants!
          .where((element) => element.variantSku == selectedVariants.join('-'))
          .isNotEmpty) {
        variantPrice = Constant.productCommissionPrice(
          vendorModel.value,
          productModel.itemAttribute!.variants!
                  .where(
                    (element) =>
                        element.variantSku == selectedVariants.join('-'),

LINE: 342
          .isNotEmpty) {
        variantPrice = Constant.productCommissionPrice(
          vendorModel.value,
          productModel.itemAttribute!.variants!
                  .where(
                    (element) =>
                        element.variantSku == selectedVariants.join('-'),
                  )
                  .first
                  .variantPrice ??
              '0',
        );

LINE: 355
    } else {
      String price = Constant.productCommissionPrice(
        vendorModel.value,
        productModel.price.toString(),
      );
      String disPrice =
          double.parse(productModel.disPrice.toString()) <= 0
              ? "0"
              : Constant.productCommissionPrice(
                vendorModel.value,
                productModel.disPrice.toString(),
              );

LINE: 358
        productModel.price.toString(),
      );
      String disPrice =
          double.parse(productModel.disPrice.toString()) <= 0
              ? "0"
              : Constant.productCommissionPrice(
                vendorModel.value,
                productModel.disPrice.toString(),
              );
      if (double.parse(disPrice) <= 0) {
        variantPrice = price;
      } else {

LINE: 362
              ? "0"
              : Constant.productCommissionPrice(
                vendorModel.value,
                productModel.disPrice.toString(),
              );
      if (double.parse(disPrice) <= 0) {
        variantPrice = price;
      } else {
        variantPrice = disPrice;
      }
    }


LINE: 371
      }
    }

    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {
      if (selectedAddOns.contains(productModel.addOnsTitle![i]) == true) {
        adOnsPrice =
            (double.parse(adOnsPrice.toString()) +
                    double.parse(
                      Constant.productCommissionPrice(
                        vendorModel.value,
                        productModel.addOnsPrice![i].toString(),
                      ),

LINE: 372
    }

    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {
      if (selectedAddOns.contains(productModel.addOnsTitle![i]) == true) {
        adOnsPrice =
            (double.parse(adOnsPrice.toString()) +
                    double.parse(
                      Constant.productCommissionPrice(
                        vendorModel.value,
                        productModel.addOnsPrice![i].toString(),
                      ),
                    ))

LINE: 378
                    double.parse(
                      Constant.productCommissionPrice(
                        vendorModel.value,
                        productModel.addOnsPrice![i].toString(),
                      ),
                    ))
                .toString();
      }
    }
    adOnsPrice = (quantity.value * double.parse(adOnsPrice)).toString();
    mainPrice =
        ((double.parse(variantPrice.toString()) *

LINE: 395

  Future<void> getAttributeData() async {
    await FireStoreUtils.getAttributes().then((value) {
      if (value != null) {
        attributesList.value = value;
      }
    });
  }

  Future<void> addToCart({
    required ProductModel productModel,
    required String price,

LINE: 402
  }

  Future<void> addToCart({
    required ProductModel productModel,
    required String price,
    required String discountPrice,
    required bool isIncrement,
    required int quantity,
    VariantInfo? variantInfo,
  }) async {
    CartProductModel cartProductModel = CartProductModel();


LINE: 409
    required int quantity,
    VariantInfo? variantInfo,
  }) async {
    CartProductModel cartProductModel = CartProductModel();

    String adOnsPrice = "0";
    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {
      if (selectedAddOns.contains(productModel.addOnsTitle![i]) == true &&
          productModel.addOnsPrice![i] != '0') {
        adOnsPrice =
            (double.parse(adOnsPrice.toString()) +
                    double.parse(

LINE: 412
    CartProductModel cartProductModel = CartProductModel();

    String adOnsPrice = "0";
    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {
      if (selectedAddOns.contains(productModel.addOnsTitle![i]) == true &&
          productModel.addOnsPrice![i] != '0') {
        adOnsPrice =
            (double.parse(adOnsPrice.toString()) +
                    double.parse(
                      Constant.productCommissionPrice(
                        vendorModel.value,
                        productModel.addOnsPrice![i].toString(),

LINE: 413

    String adOnsPrice = "0";
    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {
      if (selectedAddOns.contains(productModel.addOnsTitle![i]) == true &&
          productModel.addOnsPrice![i] != '0') {
        adOnsPrice =
            (double.parse(adOnsPrice.toString()) +
                    double.parse(
                      Constant.productCommissionPrice(
                        vendorModel.value,
                        productModel.addOnsPrice![i].toString(),
                      ),

LINE: 414
    String adOnsPrice = "0";
    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {
      if (selectedAddOns.contains(productModel.addOnsTitle![i]) == true &&
          productModel.addOnsPrice![i] != '0') {
        adOnsPrice =
            (double.parse(adOnsPrice.toString()) +
                    double.parse(
                      Constant.productCommissionPrice(
                        vendorModel.value,
                        productModel.addOnsPrice![i].toString(),
                      ),
                    ))

LINE: 420
                    double.parse(
                      Constant.productCommissionPrice(
                        vendorModel.value,
                        productModel.addOnsPrice![i].toString(),
                      ),
                    ))
                .toString();
      }
    }

    if (variantInfo != null) {
      cartProductModel.id =

LINE: 427
      }
    }

    if (variantInfo != null) {
      cartProductModel.id =
          "${productModel.id!}~${variantInfo.variantId.toString()}";
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;

LINE: 428
    }

    if (variantInfo != null) {
      cartProductModel.id =
          "${productModel.id!}~${variantInfo.variantId.toString()}";
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;

LINE: 429

    if (variantInfo != null) {
      cartProductModel.id =
          "${productModel.id!}~${variantInfo.variantId.toString()}";
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = variantInfo;

LINE: 430
    if (variantInfo != null) {
      cartProductModel.id =
          "${productModel.id!}~${variantInfo.variantId.toString()}";
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;

LINE: 431
      cartProductModel.id =
          "${productModel.id!}~${variantInfo.variantId.toString()}";
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;

LINE: 432
          "${productModel.id!}~${variantInfo.variantId.toString()}";
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =

LINE: 433
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"

LINE: 434
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []

LINE: 435
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList

LINE: 436
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(

LINE: 437
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>

LINE: 438
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>
                        productModel.taxSetting?.any(

LINE: 439
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>
                        productModel.taxSetting?.any(
                          (productTax) => productTax.id == activeTax.id,

LINE: 440
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>
                        productModel.taxSetting?.any(
                          (productTax) => productTax.id == activeTax.id,
                        ) ??

LINE: 446
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>
                        productModel.taxSetting?.any(
                          (productTax) => productTax.id == activeTax.id,
                        ) ??
                        false,
                  )
                  .toList())!;
    } else {
      cartProductModel.id = productModel.id!;
      cartProductModel.name = productModel.name!;

LINE: 451
                        ) ??
                        false,
                  )
                  .toList())!;
    } else {
      cartProductModel.id = productModel.id!;
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;

LINE: 453
                  )
                  .toList())!;
    } else {
      cartProductModel.id = productModel.id!;
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = VariantInfo();

LINE: 454
                  .toList())!;
    } else {
      cartProductModel.id = productModel.id!;
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = VariantInfo();
      cartProductModel.extrasPrice = adOnsPrice;

LINE: 455
    } else {
      cartProductModel.id = productModel.id!;
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = VariantInfo();
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;

LINE: 456
      cartProductModel.id = productModel.id!;
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = VariantInfo();
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =

LINE: 457
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = VariantInfo();
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"

LINE: 458
      cartProductModel.photo = productModel.photo!;
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = VariantInfo();
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []

LINE: 459
      cartProductModel.categoryId = productModel.categoryID!;
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = VariantInfo();
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList

LINE: 460
      cartProductModel.price = price;
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = VariantInfo();
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(

LINE: 461
      cartProductModel.discountPrice = discountPrice;
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = VariantInfo();
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>

LINE: 462
      cartProductModel.vendorID = vendorModel.value.id;
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = VariantInfo();
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>
                        productModel.taxSetting?.any(

LINE: 463
      cartProductModel.quantity = quantity;
      cartProductModel.variantInfo = VariantInfo();
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>
                        productModel.taxSetting?.any(
                          (productTax) => productTax.id == activeTax.id,

LINE: 464
      cartProductModel.variantInfo = VariantInfo();
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>
                        productModel.taxSetting?.any(
                          (productTax) => productTax.id == activeTax.id,
                        ) ??

LINE: 470
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>
                        productModel.taxSetting?.any(
                          (productTax) => productTax.id == activeTax.id,
                        ) ??
                        false,
                  )
                  .toList())!;
    }

    if (isIncrement) {

LINE: 475
                        ) ??
                        false,
                  )
                  .toList())!;
    }

    if (isIncrement) {
      await cartProvider.addToCart(Get.context!, cartProductModel, quantity);
    } else {
      await cartProvider.removeFromCart(cartProductModel, quantity);
    }
    log("===> new ${cartItem.length}");

LINE: 479
    }

    if (isIncrement) {
      await cartProvider.addToCart(Get.context!, cartProductModel, quantity);
    } else {
      await cartProvider.removeFromCart(cartProductModel, quantity);
    }
    log("===> new ${cartItem.length}");
    update();
  }

  @override

LINE: 481
    if (isIncrement) {
      await cartProvider.addToCart(Get.context!, cartProductModel, quantity);
    } else {
      await cartProvider.removeFromCart(cartProductModel, quantity);
    }
    log("===> new ${cartItem.length}");
    update();
  }

  @override
  void onClose() {
    print("STEP47G_RESTAURANT_DETAIL_ONCLOSE");
TEXT_END

## Counts
TEXT_START
COUNT_productModel_bang: 152
COUNT_ProductModel: 449
TEXT_END

STATUS: SERVICE_44B_PRODUCT_CARD_NULL_ASSERTION_SOURCE_AUDITED