# RESTAURANT DETAIL PRODUCT CALL PATH AUDIT

Generated: 07/01/2026 13:18:05
Mode: READ ONLY.


## File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart
TEXT_START

LINE: 10
import 'package:customer/models/coupon_model.dart';
import 'package:customer/models/favourite_item_model.dart';
import 'package:customer/models/favourite_model.dart';
import 'package:customer/models/product_model.dart';
import 'package:customer/models/vendor_category_model.dart';
import 'package:customer/models/vendor_model.dart';
import '../models/attributes_model.dart';
import '../service/cart_provider.dart';
import '../service/fire_store_utils.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';

class RestaurantDetailsController extends GetxController {
  Rx<TextEditingController> searchEditingController =
      TextEditingController().obs;


LINE: 33
  RxBool isMenuOpen = false.obs;

  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  RxList<FavouriteItemModel> favouriteItemList = <FavouriteItemModel>[].obs;
  RxList<ProductModel> allProductList = <ProductModel>[].obs;
  RxList<ProductModel> productList = <ProductModel>[].obs;
  RxList<VendorCategoryModel> vendorCategoryList = <VendorCategoryModel>[].obs;

  RxList<CouponModel> couponList = <CouponModel>[].obs;

  @override
  void onInit() {
    // TODO: implement onInit
    getArgument();

    super.onInit();
  }

LINE: 34

  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  RxList<FavouriteItemModel> favouriteItemList = <FavouriteItemModel>[].obs;
  RxList<ProductModel> allProductList = <ProductModel>[].obs;
  RxList<ProductModel> productList = <ProductModel>[].obs;
  RxList<VendorCategoryModel> vendorCategoryList = <VendorCategoryModel>[].obs;

  RxList<CouponModel> couponList = <CouponModel>[].obs;

  @override
  void onInit() {
    // TODO: implement onInit
    getArgument();

    super.onInit();
  }


LINE: 35
  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  RxList<FavouriteItemModel> favouriteItemList = <FavouriteItemModel>[].obs;
  RxList<ProductModel> allProductList = <ProductModel>[].obs;
  RxList<ProductModel> productList = <ProductModel>[].obs;
  RxList<VendorCategoryModel> vendorCategoryList = <VendorCategoryModel>[].obs;

  RxList<CouponModel> couponList = <CouponModel>[].obs;

  @override
  void onInit() {
    // TODO: implement onInit
    getArgument();

    super.onInit();
  }

  void animateSlider() {

LINE: 40

  RxList<CouponModel> couponList = <CouponModel>[].obs;

  @override
  void onInit() {
    // TODO: implement onInit
    getArgument();

    super.onInit();
  }

  void animateSlider() {
    if (vendorModel.value.photos != null &&
        vendorModel.value.photos!.isNotEmpty) {
      Timer.periodic(const Duration(seconds: 2), (Timer timer) {
        if (currentPage < vendorModel.value.photos!.length - 1) {
          currentPage++;

LINE: 41
  RxList<CouponModel> couponList = <CouponModel>[].obs;

  @override
  void onInit() {
    // TODO: implement onInit
    getArgument();

    super.onInit();
  }

  void animateSlider() {
    if (vendorModel.value.photos != null &&
        vendorModel.value.photos!.isNotEmpty) {
      Timer.periodic(const Duration(seconds: 2), (Timer timer) {
        if (currentPage < vendorModel.value.photos!.length - 1) {
          currentPage++;
        } else {

LINE: 42

  @override
  void onInit() {
    // TODO: implement onInit
    getArgument();

    super.onInit();
  }

  void animateSlider() {
    if (vendorModel.value.photos != null &&
        vendorModel.value.photos!.isNotEmpty) {
      Timer.periodic(const Duration(seconds: 2), (Timer timer) {
        if (currentPage < vendorModel.value.photos!.length - 1) {
          currentPage++;
        } else {
          currentPage.value = 0;

LINE: 44
  void onInit() {
    // TODO: implement onInit
    getArgument();

    super.onInit();
  }

  void animateSlider() {
    if (vendorModel.value.photos != null &&
        vendorModel.value.photos!.isNotEmpty) {
      Timer.periodic(const Duration(seconds: 2), (Timer timer) {
        if (currentPage < vendorModel.value.photos!.length - 1) {
          currentPage++;
        } else {
          currentPage.value = 0;
        }


LINE: 48
    super.onInit();
  }

  void animateSlider() {
    if (vendorModel.value.photos != null &&
        vendorModel.value.photos!.isNotEmpty) {
      Timer.periodic(const Duration(seconds: 2), (Timer timer) {
        if (currentPage < vendorModel.value.photos!.length - 1) {
          currentPage++;
        } else {
          currentPage.value = 0;
        }

        if (pageController.value.hasClients &&
            pageController.value.positions.length == 1) {
          pageController.value.animateToPage(
            currentPage.value,

LINE: 49
  }

  void animateSlider() {
    if (vendorModel.value.photos != null &&
        vendorModel.value.photos!.isNotEmpty) {
      Timer.periodic(const Duration(seconds: 2), (Timer timer) {
        if (currentPage < vendorModel.value.photos!.length - 1) {
          currentPage++;
        } else {
          currentPage.value = 0;
        }

        if (pageController.value.hasClients &&
            pageController.value.positions.length == 1) {
          pageController.value.animateToPage(
            currentPage.value,
            duration: const Duration(milliseconds: 300),

LINE: 51
  void animateSlider() {
    if (vendorModel.value.photos != null &&
        vendorModel.value.photos!.isNotEmpty) {
      Timer.periodic(const Duration(seconds: 2), (Timer timer) {
        if (currentPage < vendorModel.value.photos!.length - 1) {
          currentPage++;
        } else {
          currentPage.value = 0;
        }

        if (pageController.value.hasClients &&
            pageController.value.positions.length == 1) {
          pageController.value.animateToPage(
            currentPage.value,
            duration: const Duration(milliseconds: 300),
            curve: Curves.easeIn,
          );

LINE: 74
      });
    }
  }

  Rx<VendorModel> vendorModel = VendorModel().obs;

  final CartProvider cartProvider = CartProvider();

  Future<void> getArgument() async {
    cartProvider.cartStream.listen((event) async {
      cartItem.clear();
      cartItem.addAll(event);
    });
    dynamic argumentData = Get.arguments;
    if (argumentData != null) {
      vendorModel.value = argumentData['vendorModel'];
    }

LINE: 78
  Rx<VendorModel> vendorModel = VendorModel().obs;

  final CartProvider cartProvider = CartProvider();

  Future<void> getArgument() async {
    cartProvider.cartStream.listen((event) async {
      cartItem.clear();
      cartItem.addAll(event);
    });
    dynamic argumentData = Get.arguments;
    if (argumentData != null) {
      vendorModel.value = argumentData['vendorModel'];
    }
    animateSlider();
    statusCheck();

    await getProduct();

LINE: 83
    cartProvider.cartStream.listen((event) async {
      cartItem.clear();
      cartItem.addAll(event);
    });
    dynamic argumentData = Get.arguments;
    if (argumentData != null) {
      vendorModel.value = argumentData['vendorModel'];
    }
    animateSlider();
    statusCheck();

    await getProduct();

    isLoading.value = false;
    await getFavouriteList();

    update();

LINE: 85
      cartItem.addAll(event);
    });
    dynamic argumentData = Get.arguments;
    if (argumentData != null) {
      vendorModel.value = argumentData['vendorModel'];
    }
    animateSlider();
    statusCheck();

    await getProduct();

    isLoading.value = false;
    await getFavouriteList();

    update();
  }


LINE: 101

  RxList<BrandsModel> brandList = <BrandsModel>[].obs;

  Future<void> getProduct() async {
    await FireStoreUtils.getProductByVendorId(
      vendorModel.value.id.toString(),
    ).then((value) {
      if ((Constant.isSubscriptionModelApplied == true ||
              vendorModel.value.adminCommission?.isEnabled == true) &&
          vendorModel.value.subscriptionPlan != null) {
        if (vendorModel.value.subscriptionPlan?.itemLimit == '-1') {
          allProductList.value = value;
          productList.value = value;
        } else {
          int selectedProduct =
              value.length <
                      int.parse(

LINE: 102
  RxList<BrandsModel> brandList = <BrandsModel>[].obs;

  Future<void> getProduct() async {
    await FireStoreUtils.getProductByVendorId(
      vendorModel.value.id.toString(),
    ).then((value) {
      if ((Constant.isSubscriptionModelApplied == true ||
              vendorModel.value.adminCommission?.isEnabled == true) &&
          vendorModel.value.subscriptionPlan != null) {
        if (vendorModel.value.subscriptionPlan?.itemLimit == '-1') {
          allProductList.value = value;
          productList.value = value;
        } else {
          int selectedProduct =
              value.length <
                      int.parse(
                        vendorModel.value.subscriptionPlan?.itemLimit ?? '0',

LINE: 105
    await FireStoreUtils.getProductByVendorId(
      vendorModel.value.id.toString(),
    ).then((value) {
      if ((Constant.isSubscriptionModelApplied == true ||
              vendorModel.value.adminCommission?.isEnabled == true) &&
          vendorModel.value.subscriptionPlan != null) {
        if (vendorModel.value.subscriptionPlan?.itemLimit == '-1') {
          allProductList.value = value;
          productList.value = value;
        } else {
          int selectedProduct =
              value.length <
                      int.parse(
                        vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                      )
                  ? (value.isEmpty ? 0 : (value.length))
                  : int.parse(

LINE: 106
      vendorModel.value.id.toString(),
    ).then((value) {
      if ((Constant.isSubscriptionModelApplied == true ||
              vendorModel.value.adminCommission?.isEnabled == true) &&
          vendorModel.value.subscriptionPlan != null) {
        if (vendorModel.value.subscriptionPlan?.itemLimit == '-1') {
          allProductList.value = value;
          productList.value = value;
        } else {
          int selectedProduct =
              value.length <
                      int.parse(
                        vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                      )
                  ? (value.isEmpty ? 0 : (value.length))
                  : int.parse(
                    vendorModel.value.subscriptionPlan?.itemLimit ?? '0',

LINE: 107
    ).then((value) {
      if ((Constant.isSubscriptionModelApplied == true ||
              vendorModel.value.adminCommission?.isEnabled == true) &&
          vendorModel.value.subscriptionPlan != null) {
        if (vendorModel.value.subscriptionPlan?.itemLimit == '-1') {
          allProductList.value = value;
          productList.value = value;
        } else {
          int selectedProduct =
              value.length <
                      int.parse(
                        vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                      )
                  ? (value.isEmpty ? 0 : (value.length))
                  : int.parse(
                    vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                  );

LINE: 108
      if ((Constant.isSubscriptionModelApplied == true ||
              vendorModel.value.adminCommission?.isEnabled == true) &&
          vendorModel.value.subscriptionPlan != null) {
        if (vendorModel.value.subscriptionPlan?.itemLimit == '-1') {
          allProductList.value = value;
          productList.value = value;
        } else {
          int selectedProduct =
              value.length <
                      int.parse(
                        vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                      )
                  ? (value.isEmpty ? 0 : (value.length))
                  : int.parse(
                    vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                  );
          allProductList.value = value.sublist(0, selectedProduct);

LINE: 109
              vendorModel.value.adminCommission?.isEnabled == true) &&
          vendorModel.value.subscriptionPlan != null) {
        if (vendorModel.value.subscriptionPlan?.itemLimit == '-1') {
          allProductList.value = value;
          productList.value = value;
        } else {
          int selectedProduct =
              value.length <
                      int.parse(
                        vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                      )
                  ? (value.isEmpty ? 0 : (value.length))
                  : int.parse(
                    vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                  );
          allProductList.value = value.sublist(0, selectedProduct);
          productList.value = value.sublist(0, selectedProduct);

LINE: 114
        } else {
          int selectedProduct =
              value.length <
                      int.parse(
                        vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                      )
                  ? (value.isEmpty ? 0 : (value.length))
                  : int.parse(
                    vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                  );
          allProductList.value = value.sublist(0, selectedProduct);
          productList.value = value.sublist(0, selectedProduct);
        }
      } else {
        allProductList.value = value;
        productList.value = value;
      }

LINE: 118
                        vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                      )
                  ? (value.isEmpty ? 0 : (value.length))
                  : int.parse(
                    vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                  );
          allProductList.value = value.sublist(0, selectedProduct);
          productList.value = value.sublist(0, selectedProduct);
        }
      } else {
        allProductList.value = value;
        productList.value = value;
      }
    });

    for (var element in productList) {
      await FireStoreUtils.getVendorCategoryById(

LINE: 120
                  ? (value.isEmpty ? 0 : (value.length))
                  : int.parse(
                    vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                  );
          allProductList.value = value.sublist(0, selectedProduct);
          productList.value = value.sublist(0, selectedProduct);
        }
      } else {
        allProductList.value = value;
        productList.value = value;
      }
    });

    for (var element in productList) {
      await FireStoreUtils.getVendorCategoryById(
        element.categoryID.toString(),
      ).then((value) {

LINE: 121
                  : int.parse(
                    vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
                  );
          allProductList.value = value.sublist(0, selectedProduct);
          productList.value = value.sublist(0, selectedProduct);
        }
      } else {
        allProductList.value = value;
        productList.value = value;
      }
    });

    for (var element in productList) {
      await FireStoreUtils.getVendorCategoryById(
        element.categoryID.toString(),
      ).then((value) {
        if (value != null) {

LINE: 124
          allProductList.value = value.sublist(0, selectedProduct);
          productList.value = value.sublist(0, selectedProduct);
        }
      } else {
        allProductList.value = value;
        productList.value = value;
      }
    });

    for (var element in productList) {
      await FireStoreUtils.getVendorCategoryById(
        element.categoryID.toString(),
      ).then((value) {
        if (value != null) {
          vendorCategoryList.add(value);
        }
      });

LINE: 125
          productList.value = value.sublist(0, selectedProduct);
        }
      } else {
        allProductList.value = value;
        productList.value = value;
      }
    });

    for (var element in productList) {
      await FireStoreUtils.getVendorCategoryById(
        element.categoryID.toString(),
      ).then((value) {
        if (value != null) {
          vendorCategoryList.add(value);
        }
      });
    }

LINE: 129
        productList.value = value;
      }
    });

    for (var element in productList) {
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

LINE: 130
      }
    });

    for (var element in productList) {
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


LINE: 131
    });

    for (var element in productList) {
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

    var seen = <String>{};

LINE: 134
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

    var seen = <String>{};
    vendorCategoryList.value =
        vendorCategoryList
            .where((element) => seen.add(element.id.toString()))

LINE: 144
      brandList.value = value;
    });

    var seen = <String>{};
    vendorCategoryList.value =
        vendorCategoryList
            .where((element) => seen.add(element.id.toString()))
            .toList();
  }

  void searchProduct(String name) {
    if (name.isEmpty) {
      productList.clear();
      productList.addAll(allProductList);
    } else {
      isVag.value = false;
      isNonVag.value = false;

LINE: 145
    });

    var seen = <String>{};
    vendorCategoryList.value =
        vendorCategoryList
            .where((element) => seen.add(element.id.toString()))
            .toList();
  }

  void searchProduct(String name) {
    if (name.isEmpty) {
      productList.clear();
      productList.addAll(allProductList);
    } else {
      isVag.value = false;
      isNonVag.value = false;
      productList.value =

LINE: 152
  }

  void searchProduct(String name) {
    if (name.isEmpty) {
      productList.clear();
      productList.addAll(allProductList);
    } else {
      isVag.value = false;
      isNonVag.value = false;
      productList.value =
          allProductList
              .where(
                (p0) => p0.name!.toLowerCase().contains(name.toLowerCase()),
              )
              .toList();
    }
    update();

LINE: 153

  void searchProduct(String name) {
    if (name.isEmpty) {
      productList.clear();
      productList.addAll(allProductList);
    } else {
      isVag.value = false;
      isNonVag.value = false;
      productList.value =
          allProductList
              .where(
                (p0) => p0.name!.toLowerCase().contains(name.toLowerCase()),
              )
              .toList();
    }
    update();
  }

LINE: 157
      productList.addAll(allProductList);
    } else {
      isVag.value = false;
      isNonVag.value = false;
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
      productList.value =

LINE: 158
    } else {
      isVag.value = false;
      isNonVag.value = false;
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
      productList.value =
          allProductList

LINE: 169
  }

  void filterRecord() {
    if (isVag.value == true && isNonVag.value == true) {
      productList.value =
          allProductList
              .where((p0) => p0.nonveg == true || p0.nonveg == false)
              .toList();
    } else if (isVag.value == true && isNonVag.value == false) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == false).toList();
    } else if (isVag.value == false && isNonVag.value == true) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == true).toList();
    } else if (isVag.value == false && isNonVag.value == false) {
      productList.value =
          allProductList

LINE: 170

  void filterRecord() {
    if (isVag.value == true && isNonVag.value == true) {
      productList.value =
          allProductList
              .where((p0) => p0.nonveg == true || p0.nonveg == false)
              .toList();
    } else if (isVag.value == true && isNonVag.value == false) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == false).toList();
    } else if (isVag.value == false && isNonVag.value == true) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == true).toList();
    } else if (isVag.value == false && isNonVag.value == false) {
      productList.value =
          allProductList
              .where((p0) => p0.nonveg == true || p0.nonveg == false)

LINE: 174
          allProductList
              .where((p0) => p0.nonveg == true || p0.nonveg == false)
              .toList();
    } else if (isVag.value == true && isNonVag.value == false) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == false).toList();
    } else if (isVag.value == false && isNonVag.value == true) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == true).toList();
    } else if (isVag.value == false && isNonVag.value == false) {
      productList.value =
          allProductList
              .where((p0) => p0.nonveg == true || p0.nonveg == false)
              .toList();
    }
  }


LINE: 175
              .where((p0) => p0.nonveg == true || p0.nonveg == false)
              .toList();
    } else if (isVag.value == true && isNonVag.value == false) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == false).toList();
    } else if (isVag.value == false && isNonVag.value == true) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == true).toList();
    } else if (isVag.value == false && isNonVag.value == false) {
      productList.value =
          allProductList
              .where((p0) => p0.nonveg == true || p0.nonveg == false)
              .toList();
    }
  }

  Future<List<ProductModel>> getProductByCategory(

LINE: 177
    } else if (isVag.value == true && isNonVag.value == false) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == false).toList();
    } else if (isVag.value == false && isNonVag.value == true) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == true).toList();
    } else if (isVag.value == false && isNonVag.value == false) {
      productList.value =
          allProductList
              .where((p0) => p0.nonveg == true || p0.nonveg == false)
              .toList();
    }
  }

  Future<List<ProductModel>> getProductByCategory(
    VendorCategoryModel vendorCategoryModel,
  ) async {

LINE: 178
      productList.value =
          allProductList.where((p0) => p0.nonveg == false).toList();
    } else if (isVag.value == false && isNonVag.value == true) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == true).toList();
    } else if (isVag.value == false && isNonVag.value == false) {
      productList.value =
          allProductList
              .where((p0) => p0.nonveg == true || p0.nonveg == false)
              .toList();
    }
  }

  Future<List<ProductModel>> getProductByCategory(
    VendorCategoryModel vendorCategoryModel,
  ) async {
    return productList

LINE: 180
    } else if (isVag.value == false && isNonVag.value == true) {
      productList.value =
          allProductList.where((p0) => p0.nonveg == true).toList();
    } else if (isVag.value == false && isNonVag.value == false) {
      productList.value =
          allProductList
              .where((p0) => p0.nonveg == true || p0.nonveg == false)
              .toList();
    }
  }

  Future<List<ProductModel>> getProductByCategory(
    VendorCategoryModel vendorCategoryModel,
  ) async {
    return productList
        .where((p0) => p0.categoryID == vendorCategoryModel.id)
        .toList();

LINE: 181
      productList.value =
          allProductList.where((p0) => p0.nonveg == true).toList();
    } else if (isVag.value == false && isNonVag.value == false) {
      productList.value =
          allProductList
              .where((p0) => p0.nonveg == true || p0.nonveg == false)
              .toList();
    }
  }

  Future<List<ProductModel>> getProductByCategory(
    VendorCategoryModel vendorCategoryModel,
  ) async {
    return productList
        .where((p0) => p0.categoryID == vendorCategoryModel.id)
        .toList();
  }

LINE: 187
              .toList();
    }
  }

  Future<List<ProductModel>> getProductByCategory(
    VendorCategoryModel vendorCategoryModel,
  ) async {
    return productList
        .where((p0) => p0.categoryID == vendorCategoryModel.id)
        .toList();
  }

  Future<void> getFavouriteList() async {
    if (Constant.userModel != null) {
      await FireStoreUtils.getFavouriteRestaurant().then((value) {
        favouriteList.value = value;
      });

LINE: 188
    }
  }

  Future<List<ProductModel>> getProductByCategory(
    VendorCategoryModel vendorCategoryModel,
  ) async {
    return productList
        .where((p0) => p0.categoryID == vendorCategoryModel.id)
        .toList();
  }

  Future<void> getFavouriteList() async {
    if (Constant.userModel != null) {
      await FireStoreUtils.getFavouriteRestaurant().then((value) {
        favouriteList.value = value;
      });


LINE: 190

  Future<List<ProductModel>> getProductByCategory(
    VendorCategoryModel vendorCategoryModel,
  ) async {
    return productList
        .where((p0) => p0.categoryID == vendorCategoryModel.id)
        .toList();
  }

  Future<void> getFavouriteList() async {
    if (Constant.userModel != null) {
      await FireStoreUtils.getFavouriteRestaurant().then((value) {
        favouriteList.value = value;
      });

      await FireStoreUtils.getFavouriteItem().then((value) {
        favouriteItemList.value = value;

LINE: 191
  Future<List<ProductModel>> getProductByCategory(
    VendorCategoryModel vendorCategoryModel,
  ) async {
    return productList
        .where((p0) => p0.categoryID == vendorCategoryModel.id)
        .toList();
  }

  Future<void> getFavouriteList() async {
    if (Constant.userModel != null) {
      await FireStoreUtils.getFavouriteRestaurant().then((value) {
        favouriteList.value = value;
      });

      await FireStoreUtils.getFavouriteItem().then((value) {
        favouriteItemList.value = value;
      });

LINE: 206
        favouriteItemList.value = value;
      });

      await FireStoreUtils.getOfferByVendorId(
        vendorModel.value.id.toString(),
      ).then((value) {
        couponList.value = value;
      });
    }
    await getAttributeData();
    update();
  }

  RxBool isOpen = false.obs;

  void statusCheck() {
    final now = DateTime.now();

LINE: 221
  void statusCheck() {
    final now = DateTime.now();
    var day = DateFormat('EEEE', 'en_US').format(now);
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
            );
            if (isCurrentDateInRange(start, end)) {

LINE: 282
      if (productModel.itemAttribute!.variants!
          .where((element) => element.variantSku == selectedVariants.join('-'))
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
      }
    } else {
      String price = Constant.productCommissionPrice(

LINE: 295
        );
      }
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
      if (double.parse(disPrice) <= 0) {
        variantPrice = price;
      } else {

LINE: 302
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
        variantPrice = disPrice;
      }
    }

    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {
      if (selectedAddOns.contains(productModel.addOnsTitle![i]) == true) {
        adOnsPrice =

LINE: 318
        adOnsPrice =
            (double.parse(adOnsPrice.toString()) +
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
                    double.parse(quantity.value.toString())) +
                double.parse(adOnsPrice.toString()))
            .toString();

LINE: 360
        adOnsPrice =
            (double.parse(adOnsPrice.toString()) +
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
          "${productModel.id!}~${variantInfo.variantId.toString()}";
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;

LINE: 373
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
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(

LINE: 376
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
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>
                        productModel.taxSetting?.any(
                          (productTax) => productTax.id == activeTax.id,

LINE: 384
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
                        false,
                  )
                  .toList())!;
    } else {
      cartProductModel.id = productModel.id!;
      cartProductModel.name = productModel.name!;
      cartProductModel.photo = productModel.photo!;

LINE: 397
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
      cartProductModel.taxSetting =
          (Constant.taxScope == "order"
              ? []
              : Constant.taxProductList
                  ?.where(

LINE: 400
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
              : Constant.taxProductList
                  ?.where(
                    (activeTax) =>
                        productModel.taxSetting?.any(
                          (productTax) => productTax.id == activeTax.id,

LINE: 408
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
                        false,
                  )
                  .toList())!;
    }

    if (isIncrement) {
      await cartProvider.addToCart(Get.context!, cartProductModel, quantity);
TEXT_END

## File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart
TEXT_START

LINE: 9
import 'package:customer/models/coupon_model.dart';
import 'package:customer/models/favourite_item_model.dart';
import 'package:customer/models/favourite_model.dart';
import 'package:customer/models/product_model.dart';
import 'package:customer/models/vendor_category_model.dart';
import 'package:customer/models/vendor_model.dart';
import 'package:customer/themes/app_them_data.dart';
import 'package:customer/themes/responsive.dart';
import 'package:customer/themes/round_button_fill.dart';
import 'package:customer/themes/text_field_widget.dart';
import 'package:customer/utils/network_image_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';

import '../../../controllers/theme_controller.dart';

LINE: 79
                        child: Icon(Icons.arrow_back, color: isDark ? AppThemeData.grey50 : AppThemeData.grey50),
                      ),
                      const Expanded(child: SizedBox()),
                      Visibility(
                        visible: (controller.vendorModel.value.isSelfDelivery == true && Constant.isSelfDeliveryFeature == true),
                        child: Row(
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
                              decoration: BoxDecoration(
                                color: AppThemeData.primary300,
                                borderRadius: BorderRadius.circular(120), // Optional
                              ),
                              child: Row(
                                children: [
                                  SvgPicture.asset("assets/icons/ic_free_delivery.svg"),
                                  const SizedBox(width: 5),

LINE: 102
                        ),
                      ),
                      InkWell(
                        onTap: () async {
                          if (controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty) {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.removeWhere((item) => item.restaurantId == controller.vendorModel.value.id);
                            await FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
                          } else {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.add(favouriteModel);
                            await FireStoreUtils.setFavouriteRestaurant(favouriteModel);
                          }
                        },
                        child: Obx(
                          () =>
                              controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty

LINE: 103
                      ),
                      InkWell(
                        onTap: () async {
                          if (controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty) {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.removeWhere((item) => item.restaurantId == controller.vendorModel.value.id);
                            await FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
                          } else {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.add(favouriteModel);
                            await FireStoreUtils.setFavouriteRestaurant(favouriteModel);
                          }
                        },
                        child: Obx(
                          () =>
                              controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty
                                  ? SvgPicture.asset("assets/icons/ic_like_fill.svg", colorFilter: const ColorFilter.mode(AppThemeData.grey50, BlendMode.srcIn))

LINE: 104
                      InkWell(
                        onTap: () async {
                          if (controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty) {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.removeWhere((item) => item.restaurantId == controller.vendorModel.value.id);
                            await FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
                          } else {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.add(favouriteModel);
                            await FireStoreUtils.setFavouriteRestaurant(favouriteModel);
                          }
                        },
                        child: Obx(
                          () =>
                              controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty
                                  ? SvgPicture.asset("assets/icons/ic_like_fill.svg", colorFilter: const ColorFilter.mode(AppThemeData.grey50, BlendMode.srcIn))
                                  : SvgPicture.asset("assets/icons/ic_like.svg"),

LINE: 107
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.removeWhere((item) => item.restaurantId == controller.vendorModel.value.id);
                            await FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
                          } else {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.add(favouriteModel);
                            await FireStoreUtils.setFavouriteRestaurant(favouriteModel);
                          }
                        },
                        child: Obx(
                          () =>
                              controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty
                                  ? SvgPicture.asset("assets/icons/ic_like_fill.svg", colorFilter: const ColorFilter.mode(AppThemeData.grey50, BlendMode.srcIn))
                                  : SvgPicture.asset("assets/icons/ic_like.svg"),
                        ),
                      ),
                      const SizedBox(width: 10),

LINE: 114
                          }
                        },
                        child: Obx(
                          () =>
                              controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty
                                  ? SvgPicture.asset("assets/icons/ic_like_fill.svg", colorFilter: const ColorFilter.mode(AppThemeData.grey50, BlendMode.srcIn))
                                  : SvgPicture.asset("assets/icons/ic_like.svg"),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Obx(
                        () => badges.Badge(
                          showBadge: cartItem.isEmpty ? false : true,
                          badgeContent: Text(
                            "${cartItem.length}",
                            style: TextStyle(
                              fontSize: 14,

LINE: 149
                  ),
                  flexibleSpace: FlexibleSpaceBar(
                    background: Stack(
                      children: [
                        controller.vendorModel.value.photos == null || controller.vendorModel.value.photos!.isEmpty
                            ? Stack(
                              children: [
                                NetworkImageWidget(
                                  imageUrl: controller.vendorModel.value.photo.toString(),
                                  fit: BoxFit.cover,
                                  width: Responsive.width(100, context),
                                  height: Responsive.height(40, context),
                                ),
                                Container(
                                  decoration: BoxDecoration(
                                    gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
                                  ),

LINE: 153
                        controller.vendorModel.value.photos == null || controller.vendorModel.value.photos!.isEmpty
                            ? Stack(
                              children: [
                                NetworkImageWidget(
                                  imageUrl: controller.vendorModel.value.photo.toString(),
                                  fit: BoxFit.cover,
                                  width: Responsive.width(100, context),
                                  height: Responsive.height(40, context),
                                ),
                                Container(
                                  decoration: BoxDecoration(
                                    gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
                                  ),
                                ),
                              ],
                            )
                            : PageView.builder(

LINE: 169
                            : PageView.builder(
                              physics: const BouncingScrollPhysics(),
                              controller: controller.pageController.value,
                              scrollDirection: Axis.horizontal,
                              itemCount: controller.vendorModel.value.photos!.length,
                              padEnds: false,
                              pageSnapping: true,
                              allowImplicitScrolling: true,
                              itemBuilder: (BuildContext context, int index) {
                                String image = controller.vendorModel.value.photos![index];
                                return Stack(
                                  children: [
                                    NetworkImageWidget(imageUrl: image.toString(), fit: BoxFit.cover, width: Responsive.width(100, context), height: Responsive.height(40, context)),
                                    Container(
                                      decoration: BoxDecoration(
                                        gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
                                      ),

LINE: 174
                              padEnds: false,
                              pageSnapping: true,
                              allowImplicitScrolling: true,
                              itemBuilder: (BuildContext context, int index) {
                                String image = controller.vendorModel.value.photos![index];
                                return Stack(
                                  children: [
                                    NetworkImageWidget(imageUrl: image.toString(), fit: BoxFit.cover, width: Responsive.width(100, context), height: Responsive.height(40, context)),
                                    Container(
                                      decoration: BoxDecoration(
                                        gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
                                      ),
                                    ),
                                  ],
                                );
                              },
                            ),

LINE: 194
                          left: 0,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: List.generate(controller.vendorModel.value.photos!.length, (index) {
                              return Obx(
                                () => Container(
                                  margin: const EdgeInsets.only(right: 5),
                                  alignment: Alignment.centerLeft,
                                  height: 9,
                                  width: 9,
                                  decoration: BoxDecoration(shape: BoxShape.circle, color: controller.currentPage.value == index ? AppThemeData.primary300 : AppThemeData.grey300),
                                ),
                              );
                            }),
                          ),
                        ),

LINE: 240
                                          mainAxisAlignment: MainAxisAlignment.start,
                                          crossAxisAlignment: CrossAxisAlignment.start,
                                          children: [
                                            Text(
                                              controller.vendorModel.value.title.toString(),
                                              textAlign: TextAlign.start,
                                              maxLines: 1,
                                              style: TextStyle(
                                                fontSize: 22,
                                                overflow: TextOverflow.ellipsis,
                                                fontFamily: AppThemeData.semiBold,
                                                fontWeight: FontWeight.w600,
                                                color: isDark ? AppThemeData.grey50 : AppThemeData.grey900,
                                              ),
                                            ),
                                            SizedBox(
                                              width: Responsive.width(78, context),

LINE: 254
                                            ),
                                            SizedBox(
                                              width: Responsive.width(78, context),
                                              child: Text(
                                                controller.vendorModel.value.location.toString(),
                                                textAlign: TextAlign.start,
                                                style: TextStyle(fontFamily: AppThemeData.medium, fontWeight: FontWeight.w500, color: isDark ? AppThemeData.grey400 : AppThemeData.grey400),
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                      Column(
                                        children: [
                                          Container(
                                            decoration: ShapeDecoration(
                                              color: isDark ? AppThemeData.primary600 : AppThemeData.primary50,

LINE: 277
                                                  SvgPicture.asset("assets/icons/ic_star.svg", colorFilter: ColorFilter.mode(AppThemeData.primary300, BlendMode.srcIn)),
                                                  const SizedBox(width: 5),
                                                  Text(
                                                    Constant.calculateReview(
                                                      reviewCount: controller.vendorModel.value.reviewsCount.toString(),
                                                      reviewSum: controller.vendorModel.value.reviewsSum.toString(),
                                                    ),
                                                    style: TextStyle(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ),
                                          InkWell(
                                            onTap: () {
                                              Get.to(const ReviewListScreen(), arguments: {"vendorModel": controller.vendorModel.value});
                                            },

LINE: 278
                                                  const SizedBox(width: 5),
                                                  Text(
                                                    Constant.calculateReview(
                                                      reviewCount: controller.vendorModel.value.reviewsCount.toString(),
                                                      reviewSum: controller.vendorModel.value.reviewsSum.toString(),
                                                    ),
                                                    style: TextStyle(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ),
                                          InkWell(
                                            onTap: () {
                                              Get.to(const ReviewListScreen(), arguments: {"vendorModel": controller.vendorModel.value});
                                            },
                                            child: Text(

LINE: 288
                                            ),
                                          ),
                                          InkWell(
                                            onTap: () {
                                              Get.to(const ReviewListScreen(), arguments: {"vendorModel": controller.vendorModel.value});
                                            },
                                            child: Text(
                                              "${controller.vendorModel.value.reviewsCount} ${'Ratings'.tr}",
                                              style: TextStyle(decoration: TextDecoration.underline, color: isDark ? AppThemeData.grey200 : AppThemeData.grey700, fontFamily: AppThemeData.regular),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                  Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service"
                                      ? SizedBox()

LINE: 291
                                            onTap: () {
                                              Get.to(const ReviewListScreen(), arguments: {"vendorModel": controller.vendorModel.value});
                                            },
                                            child: Text(
                                              "${controller.vendorModel.value.reviewsCount} ${'Ratings'.tr}",
                                              style: TextStyle(decoration: TextDecoration.underline, color: isDark ? AppThemeData.grey200 : AppThemeData.grey700, fontFamily: AppThemeData.regular),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                  Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service"
                                      ? SizedBox()
                                      : Row(
                                        children: [
                                          Text(

LINE: 318
                                          ),
                                          Padding(padding: const EdgeInsets.symmetric(horizontal: 10), child: Icon(Icons.circle, size: 5, color: isDark ? AppThemeData.grey400 : AppThemeData.grey500)),
                                          InkWell(
                                            onTap: () {
                                              if (controller.vendorModel.value.workingHours!.isEmpty) {
                                                ShowToastDialog.showToast("Timing is not added by store".tr);
                                              } else {
                                                timeShowBottomSheet(context, controller);
                                              }
                                            },
                                            child: Text(
                                              "View Timings".tr,
                                              textAlign: TextAlign.start,
                                              maxLines: 1,
                                              style: TextStyle(
                                                fontSize: 14,
                                                decoration: TextDecoration.underline,

LINE: 341
                                            ),
                                          ),
                                        ],
                                      ),
                                  controller.vendorModel.value.dineInActive == true || (controller.vendorModel.value.openDineTime != null && controller.vendorModel.value.openDineTime!.isNotEmpty)
                                      ? Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          const SizedBox(height: 20),
                                          Text(
                                            "Also applicable on table booking".tr,
                                            textAlign: TextAlign.start,
                                            maxLines: 1,
                                            style: TextStyle(
                                              fontSize: 16,
                                              overflow: TextOverflow.ellipsis,
                                              fontFamily: AppThemeData.semiBold,

LINE: 361
                                          ),
                                          const SizedBox(height: 10),
                                          InkWell(
                                            onTap: () {
                                              Get.to(const DineInDetailsScreen(), arguments: {"vendorModel": controller.vendorModel.value});
                                            },
                                            child: Container(
                                              height: 80,
                                              clipBehavior: Clip.antiAlias,
                                              decoration: ShapeDecoration(
                                                color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
                                                shape: RoundedRectangleBorder(
                                                  side: BorderSide(width: 1, color: isDark ? AppThemeData.grey900 : AppThemeData.grey50),
                                                  borderRadius: BorderRadius.circular(16),
                                                ),
                                              ),
                                              child: Padding(

LINE: 548
                                ],
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
          //     controller.isMenuOpen.value = true;
          //   },
          //   onCanceled: () {
          //     controller.isMenuOpen.value = false;

LINE: 568
          //   },
          //   color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
          //   shape: const RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(16.0))),
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
          //             style: TextStyle(
          //               fontSize: 14,

LINE: 569
          //   color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
          //   shape: const RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(16.0))),
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
          //             style: TextStyle(
          //               fontSize: 14,
          //               overflow: TextOverflow.ellipsis,

LINE: 576
          //         onTap: () {},
          //         child: SizedBox(
          //           width: 230,
          //           child: Text(
          //             vendorCategoryModel.title.toString(),
          //             textAlign: TextAlign.start,
          //             maxLines: 1,
          //             style: TextStyle(
          //               fontSize: 14,
          //               overflow: TextOverflow.ellipsis,
          //               fontFamily: AppThemeData.semiBold,
          //               fontWeight: FontWeight.w600,
          //               color: isDark ? AppThemeData.grey100 : AppThemeData.grey800,
          //             ),
          //           ),
          //         ),
          //       );

LINE: 668
                        Expanded(
                          child: ListView.builder(
                            shrinkWrap: true,
                            physics: const BouncingScrollPhysics(),
                            itemCount: productModel.vendorModel.value.workingHours!.length,
                            itemBuilder: (context, dayIndex) {
                              WorkingHours workingHours = productModel.vendorModel.value.workingHours![dayIndex];
                              return Padding(
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      "${workingHours.day}",
                                      textAlign: TextAlign.start,
                                      maxLines: 1,
                                      style: TextStyle(

LINE: 670
                            shrinkWrap: true,
                            physics: const BouncingScrollPhysics(),
                            itemCount: productModel.vendorModel.value.workingHours!.length,
                            itemBuilder: (context, dayIndex) {
                              WorkingHours workingHours = productModel.vendorModel.value.workingHours![dayIndex];
                              return Padding(
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      "${workingHours.day}",
                                      textAlign: TextAlign.start,
                                      maxLines: 1,
                                      style: TextStyle(
                                        fontSize: 16,
                                        overflow: TextOverflow.ellipsis,

LINE: 842
    );
  }
}

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
      child: ListView.builder(

LINE: 845

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
      child: ListView.builder(
        shrinkWrap: true,
        padding: EdgeInsets.zero,
        itemCount: controller.vendorCategoryList.length,

LINE: 857
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: ListView.builder(
        shrinkWrap: true,
        padding: EdgeInsets.zero,
        itemCount: controller.vendorCategoryList.length,
        physics: const NeverScrollableScrollPhysics(),
        itemBuilder: (context, index) {
          VendorCategoryModel vendorCategoryModel = controller.vendorCategoryList[index];
          return ExpansionTile(
            childrenPadding: EdgeInsets.zero,
            tilePadding: EdgeInsets.zero,
            shape: const Border(),
            initiallyExpanded: true,
            title: Text(
              "${vendorCategoryModel.title.toString()} (${controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList().length})",
              style: TextStyle(fontSize: 18, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
            ),

LINE: 860
        padding: EdgeInsets.zero,
        itemCount: controller.vendorCategoryList.length,
        physics: const NeverScrollableScrollPhysics(),
        itemBuilder: (context, index) {
          VendorCategoryModel vendorCategoryModel = controller.vendorCategoryList[index];
          return ExpansionTile(
            childrenPadding: EdgeInsets.zero,
            tilePadding: EdgeInsets.zero,
            shape: const Border(),
            initiallyExpanded: true,
            title: Text(
              "${vendorCategoryModel.title.toString()} (${controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList().length})",
              style: TextStyle(fontSize: 18, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
            ),
            children: [
              Obx(
                () => ListView.builder(

LINE: 867
            tilePadding: EdgeInsets.zero,
            shape: const Border(),
            initiallyExpanded: true,
            title: Text(
              "${vendorCategoryModel.title.toString()} (${controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList().length})",
              style: TextStyle(fontSize: 18, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
            ),
            children: [
              Obx(
                () => ListView.builder(
                  itemCount: controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList().length,
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  padding: EdgeInsets.zero,
                  itemBuilder: (context, index) {
                    ProductModel productModel = controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList()[index];


LINE: 873
            ),
            children: [
              Obx(
                () => ListView.builder(
                  itemCount: controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList().length,
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  padding: EdgeInsets.zero,
                  itemBuilder: (context, index) {
                    ProductModel productModel = controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList()[index];

                    String price = "0.0";
                    String disPrice = "0.0";
                    List<String> selectedVariants = [];
                    List<String> selectedIndexVariants = [];
                    List<String> selectedIndexArray = [];
                    if (productModel.itemAttribute != null) {

LINE: 878
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  padding: EdgeInsets.zero,
                  itemBuilder: (context, index) {
                    ProductModel productModel = controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList()[index];

                    String price = "0.0";
                    String disPrice = "0.0";
                    List<String> selectedVariants = [];
                    List<String> selectedIndexVariants = [];
                    List<String> selectedIndexArray = [];
                    if (productModel.itemAttribute != null) {
                      if (productModel.itemAttribute!.attributes!.isNotEmpty) {
                        for (var element in productModel.itemAttribute!.attributes!) {
                          if (element.attributeOptions!.isNotEmpty) {
                            selectedVariants.add(productModel.itemAttribute!.attributes![productModel.itemAttribute!.attributes!.indexOf(element)].attributeOptions![0].toString());
                            selectedIndexVariants.add('${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}');

LINE: 897
                        }
                      }
                      if (productModel.itemAttribute!.variants!.where((element) => element.variantSku == selectedVariants.join('-')).isNotEmpty) {
                        price = Constant.productCommissionPrice(
                          controller.vendorModel.value,
                          productModel.itemAttribute!.variants!.where((element) => element.variantSku == selectedVariants.join('-')).first.variantPrice ?? '0',
                        );
                        disPrice = "0";
                      }
                    } else {
                      price = Constant.productCommissionPrice(controller.vendorModel.value, productModel.price.toString());
                      disPrice = double.parse(productModel.disPrice.toString()) <= 0 ? "0" : Constant.productCommissionPrice(controller.vendorModel.value, productModel.disPrice.toString());
                    }
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 20),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,

LINE: 903
                        );
                        disPrice = "0";
                      }
                    } else {
                      price = Constant.productCommissionPrice(controller.vendorModel.value, productModel.price.toString());
                      disPrice = double.parse(productModel.disPrice.toString()) <= 0 ? "0" : Constant.productCommissionPrice(controller.vendorModel.value, productModel.disPrice.toString());
                    }
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 20),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,

LINE: 904
                        disPrice = "0";
                      }
                    } else {
                      price = Constant.productCommissionPrice(controller.vendorModel.value, productModel.price.toString());
                      disPrice = double.parse(productModel.disPrice.toString()) <= 0 ? "0" : Constant.productCommissionPrice(controller.vendorModel.value, productModel.disPrice.toString());
                    }
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 20),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [

LINE: 1034
                                    onTap: () async {
                                      if (controller.favouriteItemList.where((p0) => p0.productId == productModel.id).isNotEmpty) {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.removeWhere((item) => item.productId == productModel.id);
                                        await FireStoreUtils.removeFavouriteItem(favouriteModel);
                                      } else {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.add(favouriteModel);


LINE: 1042
                                        await FireStoreUtils.removeFavouriteItem(favouriteModel);
                                      } else {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.add(favouriteModel);

                                        await FireStoreUtils.setFavouriteItem(favouriteModel);
                                      }
                                    },
                                    child: Obx(
                                      () =>
                                          controller.favouriteItemList.where((p0) => p0.productId == productModel.id).isNotEmpty
                                              ? SvgPicture.asset("assets/icons/ic_like_fill.svg")
                                              : SvgPicture.asset("assets/icons/ic_like.svg"),

LINE: 1509
                                    onTap: () async {
                                      if (controller.favouriteItemList.where((p0) => p0.productId == productModel.id).isNotEmpty) {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.removeWhere((item) => item.productId == productModel.id);
                                        await FireStoreUtils.removeFavouriteItem(favouriteModel);
                                      } else {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.add(favouriteModel);


LINE: 1517
                                        await FireStoreUtils.removeFavouriteItem(favouriteModel);
                                      } else {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.add(favouriteModel);

                                        await FireStoreUtils.setFavouriteItem(favouriteModel);
                                      }
                                    },
                                    child: Obx(
                                      () =>
                                          controller.favouriteItemList.where((p0) => p0.productId == productModel.id).isNotEmpty
                                              ? SvgPicture.asset("assets/icons/ic_like_fill.svg")
                                              : SvgPicture.asset("assets/icons/ic_like.svg", colorFilter: const ColorFilter.mode(AppThemeData.grey500, BlendMode.srcIn)),

LINE: 1741
                                            ),
                                          ),
                                        ),
                                        Text(
                                          Constant.amountShow(amount: Constant.productCommissionPrice(controller.vendorModel.value, price)),
                                          textAlign: TextAlign.start,
                                          maxLines: 1,
                                          style: TextStyle(
                                            fontSize: 16,
                                            overflow: TextOverflow.ellipsis,
                                            fontFamily: AppThemeData.medium,
                                            fontWeight: FontWeight.w500,
                                            color: isDark ? AppThemeData.grey100 : AppThemeData.grey800,
                                          ),
                                        ),
                                        const SizedBox(width: 10),
                                        Obx(

LINE: 1866
                      onPress: () async {
                        if (productModel.itemAttribute == null) {
                          await controller.addToCart(
                            productModel: productModel,
                            price: Constant.productCommissionPrice(controller.vendorModel.value, productModel.price.toString()),
                            discountPrice: double.parse(productModel.disPrice.toString()) <= 0 ? "0" : Constant.productCommissionPrice(controller.vendorModel.value, productModel.disPrice.toString()),
                            isIncrement: true,
                            quantity: controller.quantity.value,
                          );
                        } else {
                          String variantPrice = "0";
                          if (productModel.itemAttribute!.variants!.any((e) => e.variantSku == controller.selectedVariants.join('-'))) {
                            variantPrice = Constant.productCommissionPrice(
                              controller.vendorModel.value,
                              productModel.itemAttribute!.variants!.firstWhere((e) => e.variantSku == controller.selectedVariants.join('-')).variantPrice ?? '0',
                            );
                          }

LINE: 1867
                        if (productModel.itemAttribute == null) {
                          await controller.addToCart(
                            productModel: productModel,
                            price: Constant.productCommissionPrice(controller.vendorModel.value, productModel.price.toString()),
                            discountPrice: double.parse(productModel.disPrice.toString()) <= 0 ? "0" : Constant.productCommissionPrice(controller.vendorModel.value, productModel.disPrice.toString()),
                            isIncrement: true,
                            quantity: controller.quantity.value,
                          );
                        } else {
                          String variantPrice = "0";
                          if (productModel.itemAttribute!.variants!.any((e) => e.variantSku == controller.selectedVariants.join('-'))) {
                            variantPrice = Constant.productCommissionPrice(
                              controller.vendorModel.value,
                              productModel.itemAttribute!.variants!.firstWhere((e) => e.variantSku == controller.selectedVariants.join('-')).variantPrice ?? '0',
                            );
                          }


LINE: 1875
                        } else {
                          String variantPrice = "0";
                          if (productModel.itemAttribute!.variants!.any((e) => e.variantSku == controller.selectedVariants.join('-'))) {
                            variantPrice = Constant.productCommissionPrice(
                              controller.vendorModel.value,
                              productModel.itemAttribute!.variants!.firstWhere((e) => e.variantSku == controller.selectedVariants.join('-')).variantPrice ?? '0',
                            );
                          }

                          Map<String, String> mapData = {};
                          for (var element in productModel.itemAttribute!.attributes!) {
                            mapData.addEntries([
                              MapEntry(
                                controller.attributesList.firstWhere((e) => e.id == element.attributeId).title.toString(),
                                controller.selectedVariants[productModel.itemAttribute!.attributes!.indexOf(element)],
                              ),
                            ]);
TEXT_END

## File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart
TEXT_START

LINE: 9
import 'package:customer/models/coupon_model.dart';
import 'package:customer/models/favourite_item_model.dart';
import 'package:customer/models/favourite_model.dart';
import 'package:customer/models/product_model.dart';
import 'package:customer/models/vendor_category_model.dart';
import 'package:customer/models/vendor_model.dart';
import 'package:customer/themes/app_them_data.dart';
import 'package:customer/themes/responsive.dart';
import 'package:customer/themes/round_button_fill.dart';
import 'package:customer/themes/text_field_widget.dart';
import 'package:customer/utils/network_image_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';

import '../../../controllers/theme_controller.dart';

LINE: 79
                        child: Icon(Icons.arrow_back, color: isDark ? AppThemeData.grey50 : AppThemeData.grey50),
                      ),
                      const Expanded(child: SizedBox()),
                      Visibility(
                        visible: (controller.vendorModel.value.isSelfDelivery == true && Constant.isSelfDeliveryFeature == true),
                        child: Row(
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
                              decoration: BoxDecoration(
                                color: AppThemeData.primary300,
                                borderRadius: BorderRadius.circular(120), // Optional
                              ),
                              child: Row(
                                children: [
                                  SvgPicture.asset("assets/icons/ic_free_delivery.svg"),
                                  const SizedBox(width: 5),

LINE: 102
                        ),
                      ),
                      InkWell(
                        onTap: () async {
                          if (controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty) {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.removeWhere((item) => item.restaurantId == controller.vendorModel.value.id);
                            await FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
                          } else {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.add(favouriteModel);
                            await FireStoreUtils.setFavouriteRestaurant(favouriteModel);
                          }
                        },
                        child: Obx(
                          () =>
                              controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty

LINE: 103
                      ),
                      InkWell(
                        onTap: () async {
                          if (controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty) {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.removeWhere((item) => item.restaurantId == controller.vendorModel.value.id);
                            await FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
                          } else {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.add(favouriteModel);
                            await FireStoreUtils.setFavouriteRestaurant(favouriteModel);
                          }
                        },
                        child: Obx(
                          () =>
                              controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty
                                  ? SvgPicture.asset("assets/icons/ic_like_fill.svg", colorFilter: const ColorFilter.mode(AppThemeData.grey50, BlendMode.srcIn))

LINE: 104
                      InkWell(
                        onTap: () async {
                          if (controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty) {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.removeWhere((item) => item.restaurantId == controller.vendorModel.value.id);
                            await FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
                          } else {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.add(favouriteModel);
                            await FireStoreUtils.setFavouriteRestaurant(favouriteModel);
                          }
                        },
                        child: Obx(
                          () =>
                              controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty
                                  ? SvgPicture.asset("assets/icons/ic_like_fill.svg", colorFilter: const ColorFilter.mode(AppThemeData.grey50, BlendMode.srcIn))
                                  : SvgPicture.asset("assets/icons/ic_like.svg"),

LINE: 107
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.removeWhere((item) => item.restaurantId == controller.vendorModel.value.id);
                            await FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
                          } else {
                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
                            controller.favouriteList.add(favouriteModel);
                            await FireStoreUtils.setFavouriteRestaurant(favouriteModel);
                          }
                        },
                        child: Obx(
                          () =>
                              controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty
                                  ? SvgPicture.asset("assets/icons/ic_like_fill.svg", colorFilter: const ColorFilter.mode(AppThemeData.grey50, BlendMode.srcIn))
                                  : SvgPicture.asset("assets/icons/ic_like.svg"),
                        ),
                      ),
                      const SizedBox(width: 10),

LINE: 114
                          }
                        },
                        child: Obx(
                          () =>
                              controller.favouriteList.where((p0) => p0.restaurantId == controller.vendorModel.value.id).isNotEmpty
                                  ? SvgPicture.asset("assets/icons/ic_like_fill.svg", colorFilter: const ColorFilter.mode(AppThemeData.grey50, BlendMode.srcIn))
                                  : SvgPicture.asset("assets/icons/ic_like.svg"),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Obx(
                        () => badges.Badge(
                          showBadge: cartItem.isEmpty ? false : true,
                          badgeContent: Text(
                            "${cartItem.length}",
                            style: TextStyle(
                              fontSize: 14,

LINE: 149
                  ),
                  flexibleSpace: FlexibleSpaceBar(
                    background: Stack(
                      children: [
                        controller.vendorModel.value.photos == null || controller.vendorModel.value.photos!.isEmpty
                            ? Stack(
                              children: [
                                NetworkImageWidget(
                                  imageUrl: controller.vendorModel.value.photo.toString(),
                                  fit: BoxFit.cover,
                                  width: Responsive.width(100, context),
                                  height: Responsive.height(40, context),
                                ),
                                Container(
                                  decoration: BoxDecoration(
                                    gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
                                  ),

LINE: 153
                        controller.vendorModel.value.photos == null || controller.vendorModel.value.photos!.isEmpty
                            ? Stack(
                              children: [
                                NetworkImageWidget(
                                  imageUrl: controller.vendorModel.value.photo.toString(),
                                  fit: BoxFit.cover,
                                  width: Responsive.width(100, context),
                                  height: Responsive.height(40, context),
                                ),
                                Container(
                                  decoration: BoxDecoration(
                                    gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
                                  ),
                                ),
                              ],
                            )
                            : PageView.builder(

LINE: 169
                            : PageView.builder(
                              physics: const BouncingScrollPhysics(),
                              controller: controller.pageController.value,
                              scrollDirection: Axis.horizontal,
                              itemCount: controller.vendorModel.value.photos!.length,
                              padEnds: false,
                              pageSnapping: true,
                              allowImplicitScrolling: true,
                              itemBuilder: (BuildContext context, int index) {
                                String image = controller.vendorModel.value.photos![index];
                                return Stack(
                                  children: [
                                    NetworkImageWidget(imageUrl: image.toString(), fit: BoxFit.cover, width: Responsive.width(100, context), height: Responsive.height(40, context)),
                                    Container(
                                      decoration: BoxDecoration(
                                        gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
                                      ),

LINE: 174
                              padEnds: false,
                              pageSnapping: true,
                              allowImplicitScrolling: true,
                              itemBuilder: (BuildContext context, int index) {
                                String image = controller.vendorModel.value.photos![index];
                                return Stack(
                                  children: [
                                    NetworkImageWidget(imageUrl: image.toString(), fit: BoxFit.cover, width: Responsive.width(100, context), height: Responsive.height(40, context)),
                                    Container(
                                      decoration: BoxDecoration(
                                        gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
                                      ),
                                    ),
                                  ],
                                );
                              },
                            ),

LINE: 194
                          left: 0,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: List.generate(controller.vendorModel.value.photos!.length, (index) {
                              return Obx(
                                () => Container(
                                  margin: const EdgeInsets.only(right: 5),
                                  alignment: Alignment.centerLeft,
                                  height: 9,
                                  width: 9,
                                  decoration: BoxDecoration(shape: BoxShape.circle, color: controller.currentPage.value == index ? AppThemeData.primary300 : AppThemeData.grey300),
                                ),
                              );
                            }),
                          ),
                        ),

LINE: 240
                                          mainAxisAlignment: MainAxisAlignment.start,
                                          crossAxisAlignment: CrossAxisAlignment.start,
                                          children: [
                                            Text(
                                              controller.vendorModel.value.title.toString(),
                                              textAlign: TextAlign.start,
                                              maxLines: 1,
                                              style: TextStyle(
                                                fontSize: 22,
                                                overflow: TextOverflow.ellipsis,
                                                fontFamily: AppThemeData.semiBold,
                                                fontWeight: FontWeight.w600,
                                                color: isDark ? AppThemeData.grey50 : AppThemeData.grey900,
                                              ),
                                            ),
                                            SizedBox(
                                              width: Responsive.width(78, context),

LINE: 254
                                            ),
                                            SizedBox(
                                              width: Responsive.width(78, context),
                                              child: Text(
                                                controller.vendorModel.value.location.toString(),
                                                textAlign: TextAlign.start,
                                                style: TextStyle(fontFamily: AppThemeData.medium, fontWeight: FontWeight.w500, color: isDark ? AppThemeData.grey400 : AppThemeData.grey400),
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                      Column(
                                        children: [
                                          Container(
                                            decoration: ShapeDecoration(
                                              color: isDark ? AppThemeData.primary600 : AppThemeData.primary50,

LINE: 277
                                                  SvgPicture.asset("assets/icons/ic_star.svg", colorFilter: ColorFilter.mode(AppThemeData.primary300, BlendMode.srcIn)),
                                                  const SizedBox(width: 5),
                                                  Text(
                                                    Constant.calculateReview(
                                                      reviewCount: controller.vendorModel.value.reviewsCount.toString(),
                                                      reviewSum: controller.vendorModel.value.reviewsSum.toString(),
                                                    ),
                                                    style: TextStyle(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ),
                                          InkWell(
                                            onTap: () {
                                              Get.to(const ReviewListScreen(), arguments: {"vendorModel": controller.vendorModel.value});
                                            },

LINE: 278
                                                  const SizedBox(width: 5),
                                                  Text(
                                                    Constant.calculateReview(
                                                      reviewCount: controller.vendorModel.value.reviewsCount.toString(),
                                                      reviewSum: controller.vendorModel.value.reviewsSum.toString(),
                                                    ),
                                                    style: TextStyle(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ),
                                          InkWell(
                                            onTap: () {
                                              Get.to(const ReviewListScreen(), arguments: {"vendorModel": controller.vendorModel.value});
                                            },
                                            child: Text(

LINE: 288
                                            ),
                                          ),
                                          InkWell(
                                            onTap: () {
                                              Get.to(const ReviewListScreen(), arguments: {"vendorModel": controller.vendorModel.value});
                                            },
                                            child: Text(
                                              "${controller.vendorModel.value.reviewsCount} ${'Ratings'.tr}",
                                              style: TextStyle(decoration: TextDecoration.underline, color: isDark ? AppThemeData.grey200 : AppThemeData.grey700, fontFamily: AppThemeData.regular),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                  Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service"
                                      ? SizedBox()

LINE: 291
                                            onTap: () {
                                              Get.to(const ReviewListScreen(), arguments: {"vendorModel": controller.vendorModel.value});
                                            },
                                            child: Text(
                                              "${controller.vendorModel.value.reviewsCount} ${'Ratings'.tr}",
                                              style: TextStyle(decoration: TextDecoration.underline, color: isDark ? AppThemeData.grey200 : AppThemeData.grey700, fontFamily: AppThemeData.regular),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                  Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service"
                                      ? SizedBox()
                                      : Row(
                                        children: [
                                          Text(

LINE: 318
                                          ),
                                          Padding(padding: const EdgeInsets.symmetric(horizontal: 10), child: Icon(Icons.circle, size: 5, color: isDark ? AppThemeData.grey400 : AppThemeData.grey500)),
                                          InkWell(
                                            onTap: () {
                                              if (controller.vendorModel.value.workingHours!.isEmpty) {
                                                ShowToastDialog.showToast("Timing is not added by store".tr);
                                              } else {
                                                timeShowBottomSheet(context, controller);
                                              }
                                            },
                                            child: Text(
                                              "View Timings".tr,
                                              textAlign: TextAlign.start,
                                              maxLines: 1,
                                              style: TextStyle(
                                                fontSize: 14,
                                                decoration: TextDecoration.underline,

LINE: 341
                                            ),
                                          ),
                                        ],
                                      ),
                                  controller.vendorModel.value.dineInActive == true || (controller.vendorModel.value.openDineTime != null && controller.vendorModel.value.openDineTime!.isNotEmpty)
                                      ? Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          const SizedBox(height: 20),
                                          Text(
                                            "Also applicable on table booking".tr,
                                            textAlign: TextAlign.start,
                                            maxLines: 1,
                                            style: TextStyle(
                                              fontSize: 16,
                                              overflow: TextOverflow.ellipsis,
                                              fontFamily: AppThemeData.semiBold,

LINE: 361
                                          ),
                                          const SizedBox(height: 10),
                                          InkWell(
                                            onTap: () {
                                              Get.to(const DineInDetailsScreen(), arguments: {"vendorModel": controller.vendorModel.value});
                                            },
                                            child: Container(
                                              height: 80,
                                              clipBehavior: Clip.antiAlias,
                                              decoration: ShapeDecoration(
                                                color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
                                                shape: RoundedRectangleBorder(
                                                  side: BorderSide(width: 1, color: isDark ? AppThemeData.grey900 : AppThemeData.grey50),
                                                  borderRadius: BorderRadius.circular(16),
                                                ),
                                              ),
                                              child: Padding(

LINE: 548
                                ],
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
          //     controller.isMenuOpen.value = true;
          //   },
          //   onCanceled: () {
          //     controller.isMenuOpen.value = false;

LINE: 568
          //   },
          //   color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
          //   shape: const RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(16.0))),
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
          //             style: TextStyle(
          //               fontSize: 14,

LINE: 569
          //   color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
          //   shape: const RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(16.0))),
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
          //             style: TextStyle(
          //               fontSize: 14,
          //               overflow: TextOverflow.ellipsis,

LINE: 576
          //         onTap: () {},
          //         child: SizedBox(
          //           width: 230,
          //           child: Text(
          //             vendorCategoryModel.title.toString(),
          //             textAlign: TextAlign.start,
          //             maxLines: 1,
          //             style: TextStyle(
          //               fontSize: 14,
          //               overflow: TextOverflow.ellipsis,
          //               fontFamily: AppThemeData.semiBold,
          //               fontWeight: FontWeight.w600,
          //               color: isDark ? AppThemeData.grey100 : AppThemeData.grey800,
          //             ),
          //           ),
          //         ),
          //       );

LINE: 668
                        Expanded(
                          child: ListView.builder(
                            shrinkWrap: true,
                            physics: const BouncingScrollPhysics(),
                            itemCount: productModel.vendorModel.value.workingHours!.length,
                            itemBuilder: (context, dayIndex) {
                              WorkingHours workingHours = productModel.vendorModel.value.workingHours![dayIndex];
                              return Padding(
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      "${workingHours.day}",
                                      textAlign: TextAlign.start,
                                      maxLines: 1,
                                      style: TextStyle(

LINE: 670
                            shrinkWrap: true,
                            physics: const BouncingScrollPhysics(),
                            itemCount: productModel.vendorModel.value.workingHours!.length,
                            itemBuilder: (context, dayIndex) {
                              WorkingHours workingHours = productModel.vendorModel.value.workingHours![dayIndex];
                              return Padding(
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      "${workingHours.day}",
                                      textAlign: TextAlign.start,
                                      maxLines: 1,
                                      style: TextStyle(
                                        fontSize: 16,
                                        overflow: TextOverflow.ellipsis,

LINE: 842
    );
  }
}

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
      child: ListView.builder(

LINE: 845

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
      child: ListView.builder(
        shrinkWrap: true,
        padding: EdgeInsets.zero,
        itemCount: controller.vendorCategoryList.length,

LINE: 857
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: ListView.builder(
        shrinkWrap: true,
        padding: EdgeInsets.zero,
        itemCount: controller.vendorCategoryList.length,
        physics: const NeverScrollableScrollPhysics(),
        itemBuilder: (context, index) {
          VendorCategoryModel vendorCategoryModel = controller.vendorCategoryList[index];
          return ExpansionTile(
            childrenPadding: EdgeInsets.zero,
            tilePadding: EdgeInsets.zero,
            shape: const Border(),
            initiallyExpanded: true,
            title: Text(
              "${vendorCategoryModel.title.toString()} (${controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList().length})",
              style: TextStyle(fontSize: 18, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
            ),

LINE: 860
        padding: EdgeInsets.zero,
        itemCount: controller.vendorCategoryList.length,
        physics: const NeverScrollableScrollPhysics(),
        itemBuilder: (context, index) {
          VendorCategoryModel vendorCategoryModel = controller.vendorCategoryList[index];
          return ExpansionTile(
            childrenPadding: EdgeInsets.zero,
            tilePadding: EdgeInsets.zero,
            shape: const Border(),
            initiallyExpanded: true,
            title: Text(
              "${vendorCategoryModel.title.toString()} (${controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList().length})",
              style: TextStyle(fontSize: 18, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
            ),
            children: [
              Obx(
                () => ListView.builder(

LINE: 867
            tilePadding: EdgeInsets.zero,
            shape: const Border(),
            initiallyExpanded: true,
            title: Text(
              "${vendorCategoryModel.title.toString()} (${controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList().length})",
              style: TextStyle(fontSize: 18, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
            ),
            children: [
              Obx(
                () => ListView.builder(
                  itemCount: controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList().length,
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  padding: EdgeInsets.zero,
                  itemBuilder: (context, index) {
                    ProductModel productModel = controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList()[index];


LINE: 873
            ),
            children: [
              Obx(
                () => ListView.builder(
                  itemCount: controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList().length,
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  padding: EdgeInsets.zero,
                  itemBuilder: (context, index) {
                    ProductModel productModel = controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList()[index];

                    String price = "0.0";
                    String disPrice = "0.0";
                    List<String> selectedVariants = [];
                    List<String> selectedIndexVariants = [];
                    List<String> selectedIndexArray = [];
                    if (productModel.itemAttribute != null) {

LINE: 878
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  padding: EdgeInsets.zero,
                  itemBuilder: (context, index) {
                    ProductModel productModel = controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList()[index];

                    String price = "0.0";
                    String disPrice = "0.0";
                    List<String> selectedVariants = [];
                    List<String> selectedIndexVariants = [];
                    List<String> selectedIndexArray = [];
                    if (productModel.itemAttribute != null) {
                      if (productModel.itemAttribute!.attributes!.isNotEmpty) {
                        for (var element in productModel.itemAttribute!.attributes!) {
                          if (element.attributeOptions!.isNotEmpty) {
                            selectedVariants.add(productModel.itemAttribute!.attributes![productModel.itemAttribute!.attributes!.indexOf(element)].attributeOptions![0].toString());
                            selectedIndexVariants.add('${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}');

LINE: 897
                        }
                      }
                      if (productModel.itemAttribute!.variants!.where((element) => element.variantSku == selectedVariants.join('-')).isNotEmpty) {
                        price = Constant.productCommissionPrice(
                          controller.vendorModel.value,
                          productModel.itemAttribute!.variants!.where((element) => element.variantSku == selectedVariants.join('-')).first.variantPrice ?? '0',
                        );
                        disPrice = "0";
                      }
                    } else {
                      price = Constant.productCommissionPrice(controller.vendorModel.value, productModel.price.toString());
                      disPrice = double.parse(productModel.disPrice.toString()) <= 0 ? "0" : Constant.productCommissionPrice(controller.vendorModel.value, productModel.disPrice.toString());
                    }
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 20),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,

LINE: 903
                        );
                        disPrice = "0";
                      }
                    } else {
                      price = Constant.productCommissionPrice(controller.vendorModel.value, productModel.price.toString());
                      disPrice = double.parse(productModel.disPrice.toString()) <= 0 ? "0" : Constant.productCommissionPrice(controller.vendorModel.value, productModel.disPrice.toString());
                    }
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 20),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,

LINE: 904
                        disPrice = "0";
                      }
                    } else {
                      price = Constant.productCommissionPrice(controller.vendorModel.value, productModel.price.toString());
                      disPrice = double.parse(productModel.disPrice.toString()) <= 0 ? "0" : Constant.productCommissionPrice(controller.vendorModel.value, productModel.disPrice.toString());
                    }
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 20),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [

LINE: 1034
                                    onTap: () async {
                                      if (controller.favouriteItemList.where((p0) => p0.productId == productModel.id).isNotEmpty) {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.removeWhere((item) => item.productId == productModel.id);
                                        await FireStoreUtils.removeFavouriteItem(favouriteModel);
                                      } else {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.add(favouriteModel);


LINE: 1042
                                        await FireStoreUtils.removeFavouriteItem(favouriteModel);
                                      } else {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.add(favouriteModel);

                                        await FireStoreUtils.setFavouriteItem(favouriteModel);
                                      }
                                    },
                                    child: Obx(
                                      () =>
                                          controller.favouriteItemList.where((p0) => p0.productId == productModel.id).isNotEmpty
                                              ? SvgPicture.asset("assets/icons/ic_like_fill.svg")
                                              : SvgPicture.asset("assets/icons/ic_like.svg"),

LINE: 1509
                                    onTap: () async {
                                      if (controller.favouriteItemList.where((p0) => p0.productId == productModel.id).isNotEmpty) {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.removeWhere((item) => item.productId == productModel.id);
                                        await FireStoreUtils.removeFavouriteItem(favouriteModel);
                                      } else {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.add(favouriteModel);


LINE: 1517
                                        await FireStoreUtils.removeFavouriteItem(favouriteModel);
                                      } else {
                                        FavouriteItemModel favouriteModel = FavouriteItemModel(
                                          productId: productModel.id,
                                          storeId: controller.vendorModel.value.id,
                                          userId: FireStoreUtils.getCurrentUid(),
                                        );
                                        controller.favouriteItemList.add(favouriteModel);

                                        await FireStoreUtils.setFavouriteItem(favouriteModel);
                                      }
                                    },
                                    child: Obx(
                                      () =>
                                          controller.favouriteItemList.where((p0) => p0.productId == productModel.id).isNotEmpty
                                              ? SvgPicture.asset("assets/icons/ic_like_fill.svg")
                                              : SvgPicture.asset("assets/icons/ic_like.svg", colorFilter: const ColorFilter.mode(AppThemeData.grey500, BlendMode.srcIn)),

LINE: 1741
                                            ),
                                          ),
                                        ),
                                        Text(
                                          Constant.amountShow(amount: Constant.productCommissionPrice(controller.vendorModel.value, price)),
                                          textAlign: TextAlign.start,
                                          maxLines: 1,
                                          style: TextStyle(
                                            fontSize: 16,
                                            overflow: TextOverflow.ellipsis,
                                            fontFamily: AppThemeData.medium,
                                            fontWeight: FontWeight.w500,
                                            color: isDark ? AppThemeData.grey100 : AppThemeData.grey800,
                                          ),
                                        ),
                                        const SizedBox(width: 10),
                                        Obx(

LINE: 1866
                      onPress: () async {
                        if (productModel.itemAttribute == null) {
                          await controller.addToCart(
                            productModel: productModel,
                            price: Constant.productCommissionPrice(controller.vendorModel.value, productModel.price.toString()),
                            discountPrice: double.parse(productModel.disPrice.toString()) <= 0 ? "0" : Constant.productCommissionPrice(controller.vendorModel.value, productModel.disPrice.toString()),
                            isIncrement: true,
                            quantity: controller.quantity.value,
                          );
                        } else {
                          String variantPrice = "0";
                          if (productModel.itemAttribute!.variants!.any((e) => e.variantSku == controller.selectedVariants.join('-'))) {
                            variantPrice = Constant.productCommissionPrice(
                              controller.vendorModel.value,
                              productModel.itemAttribute!.variants!.firstWhere((e) => e.variantSku == controller.selectedVariants.join('-')).variantPrice ?? '0',
                            );
                          }

LINE: 1867
                        if (productModel.itemAttribute == null) {
                          await controller.addToCart(
                            productModel: productModel,
                            price: Constant.productCommissionPrice(controller.vendorModel.value, productModel.price.toString()),
                            discountPrice: double.parse(productModel.disPrice.toString()) <= 0 ? "0" : Constant.productCommissionPrice(controller.vendorModel.value, productModel.disPrice.toString()),
                            isIncrement: true,
                            quantity: controller.quantity.value,
                          );
                        } else {
                          String variantPrice = "0";
                          if (productModel.itemAttribute!.variants!.any((e) => e.variantSku == controller.selectedVariants.join('-'))) {
                            variantPrice = Constant.productCommissionPrice(
                              controller.vendorModel.value,
                              productModel.itemAttribute!.variants!.firstWhere((e) => e.variantSku == controller.selectedVariants.join('-')).variantPrice ?? '0',
                            );
                          }


LINE: 1875
                        } else {
                          String variantPrice = "0";
                          if (productModel.itemAttribute!.variants!.any((e) => e.variantSku == controller.selectedVariants.join('-'))) {
                            variantPrice = Constant.productCommissionPrice(
                              controller.vendorModel.value,
                              productModel.itemAttribute!.variants!.firstWhere((e) => e.variantSku == controller.selectedVariants.join('-')).variantPrice ?? '0',
                            );
                          }

                          Map<String, String> mapData = {};
                          for (var element in productModel.itemAttribute!.attributes!) {
                            mapData.addEntries([
                              MapEntry(
                                controller.attributesList.firstWhere((e) => e.id == element.attributeId).title.toString(),
                                controller.selectedVariants[productModel.itemAttribute!.attributes!.indexOf(element)],
                              ),
                            ]);
TEXT_END

## File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
TEXT_START

LINE: 26
import '../constant/constant.dart';
import '../models/attributes_model.dart';
import '../models/cab_order_model.dart';
import '../models/cashback_redeem_model.dart';
import '../models/category_model.dart';
import '../models/coupon_model.dart';
import '../models/currency_model.dart';
import '../models/favorite_ondemand_service_model.dart';
import '../models/gift_cards_model.dart';
import '../models/advertisement_model.dart';
import '../models/banner_model.dart';
import '../models/cashback_model.dart';
import '../models/conversation_model.dart';
import '../models/dine_in_booking_model.dart';
import '../models/email_template_model.dart';
import '../models/favourite_item_model.dart';
import '../models/favourite_model.dart';

LINE: 46
import '../models/notification_model.dart';
import '../models/on_boarding_model.dart';
import '../models/onprovider_order_model.dart';
import '../models/order_model.dart';
import '../models/parcel_category.dart';
import '../models/parcel_order_model.dart';
import '../models/parcel_weight_model.dart';
import '../models/payment_model/cod_setting_model.dart';
import '../models/payment_model/flutter_wave_model.dart';
import '../models/payment_model/mercado_pago_model.dart';
import '../models/payment_model/mid_trans.dart';
import '../models/payment_model/orange_money.dart';
import '../models/payment_model/pay_fast_model.dart';
import '../models/payment_model/pay_stack_model.dart';
import '../models/payment_model/paypal_model.dart';
import '../models/payment_model/paytm_model.dart';
import '../models/payment_model/razorpay_model.dart';

LINE: 73
import '../models/section_model.dart';
import '../models/story_model.dart';
import '../models/tax_model.dart';
import '../models/vehicle_type.dart';
import '../models/vendor_category_model.dart';
import '../models/vendor_model.dart';
import '../models/wallet_transaction_model.dart';
import '../models/worker_model.dart';
import '../screen_ui/multi_vendor_service/chat_screens/ChatVideoContainer.dart';
import '../themes/app_them_data.dart';
import '../themes/show_toast_dialog.dart';
import '../utils/preferences.dart';
import '../widget/geoflutterfire/src/geoflutterfire.dart';
import '../widget/geoflutterfire/src/models/point.dart';
import 'package:http/http.dart' as http;

enum FirebaseEnv { defaultDb, staging }

LINE: 592

    return list;
  }

  static Future<List<VendorCategoryModel>> getHomeVendorCategory() async {
    List<VendorCategoryModel> list = [];
    await fireStore
        .collection(CollectionName.vendorCategories)
        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
        .where("show_in_homepage", isEqualTo: true)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            VendorCategoryModel walletTransactionModel =
                VendorCategoryModel.fromJson(element.data());
            list.add(walletTransactionModel);

LINE: 593
    return list;
  }

  static Future<List<VendorCategoryModel>> getHomeVendorCategory() async {
    List<VendorCategoryModel> list = [];
    await fireStore
        .collection(CollectionName.vendorCategories)
        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
        .where("show_in_homepage", isEqualTo: true)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            VendorCategoryModel walletTransactionModel =
                VendorCategoryModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }

LINE: 602
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            VendorCategoryModel walletTransactionModel =
                VendorCategoryModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });
    return list;
  }

  static Future<List<ProductModel>> getProductListByBrandId(
    String brandId,

LINE: 603
        .get()
        .then((value) {
          for (var element in value.docs) {
            VendorCategoryModel walletTransactionModel =
                VendorCategoryModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });
    return list;
  }

  static Future<List<ProductModel>> getProductListByBrandId(
    String brandId,
  ) async {

LINE: 613
        });
    return list;
  }

  static Future<List<ProductModel>> getProductListByBrandId(
    String brandId,
  ) async {
    List<ProductModel> list = [];
    await fireStore
        .collection(CollectionName.vendorProducts)
        .where('brandID', isEqualTo: brandId)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            ProductModel walletTransactionModel = ProductModel.fromJson(
              element.data(),

LINE: 618
    String brandId,
  ) async {
    List<ProductModel> list = [];
    await fireStore
        .collection(CollectionName.vendorProducts)
        .where('brandID', isEqualTo: brandId)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            ProductModel walletTransactionModel = ProductModel.fromJson(
              element.data(),
            );
            list.add(walletTransactionModel);
          }
        })
        .catchError((error) {

LINE: 690
    List tagList = [];
    List prodTagList = [];
    QuerySnapshot<Map<String, dynamic>> productsQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where('vendorID', isEqualTo: id)
            .get();
    await Future.forEach(productsQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      if (document.data().containsKey("categoryID") &&
          document.data()['categoryID'].toString().isNotEmpty) {
        prodTagList.add(document.data()['categoryID']);
      }
    });
    QuerySnapshot<Map<String, dynamic>> catQuery =
        await fireStore

LINE: 696
            .get();
    await Future.forEach(productsQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      if (document.data().containsKey("categoryID") &&
          document.data()['categoryID'].toString().isNotEmpty) {
        prodTagList.add(document.data()['categoryID']);
      }
    });
    QuerySnapshot<Map<String, dynamic>> catQuery =
        await fireStore
            .collection(CollectionName.vendorCategories)
            .where('publish', isEqualTo: true)
            .get();
    await Future.forEach(catQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {

LINE: 697
    await Future.forEach(productsQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      if (document.data().containsKey("categoryID") &&
          document.data()['categoryID'].toString().isNotEmpty) {
        prodTagList.add(document.data()['categoryID']);
      }
    });
    QuerySnapshot<Map<String, dynamic>> catQuery =
        await fireStore
            .collection(CollectionName.vendorCategories)
            .where('publish', isEqualTo: true)
            .get();
    await Future.forEach(catQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      Map<String, dynamic> catDoc = document.data();

LINE: 698
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      if (document.data().containsKey("categoryID") &&
          document.data()['categoryID'].toString().isNotEmpty) {
        prodTagList.add(document.data()['categoryID']);
      }
    });
    QuerySnapshot<Map<String, dynamic>> catQuery =
        await fireStore
            .collection(CollectionName.vendorCategories)
            .where('publish', isEqualTo: true)
            .get();
    await Future.forEach(catQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      Map<String, dynamic> catDoc = document.data();
      if (catDoc.containsKey("id") &&

LINE: 739
        });
    return favouriteList;
  }

  static Future<VendorModel?> getVendorById(String vendorId) async {
    VendorModel? vendorModel;
    try {
      await fireStore
          .collection(CollectionName.vendors)
          .doc(vendorId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorModel = VendorModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {

LINE: 740
    return favouriteList;
  }

  static Future<VendorModel?> getVendorById(String vendorId) async {
    VendorModel? vendorModel;
    try {
      await fireStore
          .collection(CollectionName.vendors)
          .doc(vendorId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorModel = VendorModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');

LINE: 748
          .doc(vendorId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorModel = VendorModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorModel;
  }

  static Future<ProductModel?> getProductById(String productId) async {
    ProductModel? vendorCategoryModel;
    try {

LINE: 755
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorModel;
  }

  static Future<ProductModel?> getProductById(String productId) async {
    ProductModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.vendorProducts)
          .doc(productId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = ProductModel.fromJson(value.data()!);

LINE: 759
    return vendorModel;
  }

  static Future<ProductModel?> getProductById(String productId) async {
    ProductModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.vendorProducts)
          .doc(productId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = ProductModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');

LINE: 762
  static Future<ProductModel?> getProductById(String productId) async {
    ProductModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.vendorProducts)
          .doc(productId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = ProductModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorCategoryModel;

LINE: 767
          .doc(productId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = ProductModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorCategoryModel;
  }

  static Future<List<GiftCardsModel>> getGiftCard() async {
    List<GiftCardsModel> giftCardModelList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery =

LINE: 774
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorCategoryModel;
  }

  static Future<List<GiftCardsModel>> getGiftCard() async {
    List<GiftCardsModel> giftCardModelList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery =
        await fireStore
            .collection(CollectionName.giftCards)
            .where("isEnable", isEqualTo: true)
            .get();
    await Future.forEach(currencyQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {

LINE: 1072
        });
    return ratingModel;
  }

  static Future<VendorCategoryModel?> getVendorCategoryByCategoryId(
    String categoryId,
  ) async {
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.vendorCategories)
          .doc(categoryId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
            }

LINE: 1073
    return ratingModel;
  }

  static Future<VendorCategoryModel?> getVendorCategoryByCategoryId(
    String categoryId,
  ) async {
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.vendorCategories)
          .doc(categoryId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
            }
          });

LINE: 1075

  static Future<VendorCategoryModel?> getVendorCategoryByCategoryId(
    String categoryId,
  ) async {
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.vendorCategories)
          .doc(categoryId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');

LINE: 1079
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.vendorCategories)
          .doc(categoryId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorCategoryModel;
  }

LINE: 1083
          .doc(categoryId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorCategoryModel;
  }

  static Future<ReviewAttributeModel?> getVendorReviewAttribute(
    String attributeId,
  ) async {

LINE: 1090
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorCategoryModel;
  }

  static Future<ReviewAttributeModel?> getVendorReviewAttribute(
    String attributeId,
  ) async {
    ReviewAttributeModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.reviewAttributes)
          .doc(attributeId)
          .get()
          .then((value) {

LINE: 1096

  static Future<ReviewAttributeModel?> getVendorReviewAttribute(
    String attributeId,
  ) async {
    ReviewAttributeModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.reviewAttributes)
          .doc(attributeId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = ReviewAttributeModel.fromJson(
                value.data()!,
              );
            }
          });

LINE: 1104
          .doc(attributeId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = ReviewAttributeModel.fromJson(
                value.data()!,
              );
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorCategoryModel;
  }

  // static Future<bool?> setRatingModel(RatingModel ratingModel) async {

LINE: 1113
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorCategoryModel;
  }

  // static Future<bool?> setRatingModel(RatingModel ratingModel) async {
  //   bool isAdded = false;
  //   await fireStore
  //       .collection(CollectionName.itemsReview)
  //       .doc(ratingModel.id)
  //       .set(ratingModel.toJson())
  //       .then((value) {
  //         isAdded = true;
  //       })
  //       .catchError((error) {

LINE: 1132
  //       });
  //   return isAdded;
  // }

  static Future<VendorModel?> updateVendor(VendorModel vendor) async {
    return await fireStore
        .collection(CollectionName.vendors)
        .doc(vendor.id)
        .set(vendor.toJson())
        .then((document) {
          return vendor;
        });
  }

  static Future<bool?> setProduct(ProductModel orderModel) async {
    bool isAdded = false;
    await fireStore

LINE: 1145

  static Future<bool?> setProduct(ProductModel orderModel) async {
    bool isAdded = false;
    await fireStore
        .collection(CollectionName.vendorProducts)
        .doc(orderModel.id)
        .set(orderModel.toJson())
        .then((value) {
          isAdded = true;
        })
        .catchError((error) {
          log("Failed to update user: $error");
          isAdded = false;
        });
    return isAdded;
  }


LINE: 1175
    }
    return referralModel;
  }

  static Future<List<ProductModel>> getProductByVendorId(
    String vendorId,
  ) async {
    String selectedFoodType = Preferences.getString(
      Preferences.foodDeliveryType,
      defaultValue: "Delivery",
    );
    List<ProductModel> list = [];
    log("GetProductByVendorId :: $selectedFoodType");
    if (selectedFoodType == "TakeAway") {
      await fireStore
          .collection(CollectionName.vendorProducts)
          .where("vendorID", isEqualTo: vendorId)

LINE: 1183
      Preferences.foodDeliveryType,
      defaultValue: "Delivery",
    );
    List<ProductModel> list = [];
    log("GetProductByVendorId :: $selectedFoodType");
    if (selectedFoodType == "TakeAway") {
      await fireStore
          .collection(CollectionName.vendorProducts)
          .where("vendorID", isEqualTo: vendorId)
          .where('publish', isEqualTo: true)
          .orderBy("createdAt", descending: false)
          .get()
          .then((value) {
            for (var element in value.docs) {
              ProductModel productModel = ProductModel.fromJson(element.data());
              list.add(productModel);
            }

LINE: 1186
    List<ProductModel> list = [];
    log("GetProductByVendorId :: $selectedFoodType");
    if (selectedFoodType == "TakeAway") {
      await fireStore
          .collection(CollectionName.vendorProducts)
          .where("vendorID", isEqualTo: vendorId)
          .where('publish', isEqualTo: true)
          .orderBy("createdAt", descending: false)
          .get()
          .then((value) {
            for (var element in value.docs) {
              ProductModel productModel = ProductModel.fromJson(element.data());
              list.add(productModel);
            }
          })
          .catchError((error) {
            log(error.toString());

LINE: 1202
            log(error.toString());
          });
    } else {
      await fireStore
          .collection(CollectionName.vendorProducts)
          .where("vendorID", isEqualTo: vendorId)
          .where("takeawayOption", isEqualTo: false)
          .where('publish', isEqualTo: true)
          .orderBy("createdAt", descending: false)
          .get()
          .then((value) {
            for (var element in value.docs) {
              ProductModel productModel = ProductModel.fromJson(element.data());
              list.add(productModel);
            }
          })
          .catchError((error) {

LINE: 1400
    });
    return attributeList;
  }

  static Future<VendorCategoryModel?> getVendorCategoryById(
    String categoryId,
  ) async {
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.vendorCategories)
          .doc(categoryId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
            }

LINE: 1401
    return attributeList;
  }

  static Future<VendorCategoryModel?> getVendorCategoryById(
    String categoryId,
  ) async {
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.vendorCategories)
          .doc(categoryId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
            }
          });

LINE: 1403

  static Future<VendorCategoryModel?> getVendorCategoryById(
    String categoryId,
  ) async {
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.vendorCategories)
          .doc(categoryId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');

LINE: 1407
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore
          .collection(CollectionName.vendorCategories)
          .doc(categoryId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorCategoryModel;
  }

LINE: 1411
          .doc(categoryId)
          .get()
          .then((value) {
            if (value.exists) {
              vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
            }
          });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorCategoryModel;
  }

  static Future<List<RatingModel>> getVendorReviews(String vendorId) async {
    List<RatingModel> ratingList = [];
    await fireStore

LINE: 1418
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }
    return vendorCategoryModel;
  }

  static Future<List<RatingModel>> getVendorReviews(String vendorId) async {
    List<RatingModel> ratingList = [];
    await fireStore
        .collection(CollectionName.itemsReview)
        .where('VendorId', isEqualTo: vendorId)
        .get()
        .then((value) {
          for (var element in value.docs) {
            RatingModel giftCardsOrderModel = RatingModel.fromJson(
              element.data(),

LINE: 1642
    });
    return isAdded;
  }

  static StreamController<List<VendorModel>>?
  getNearestVendorByCategoryController;

  static Stream<List<VendorModel>> getAllNearestRestaurantByCategoryId({
    bool? isDining,
    required String categoryId,
    bool ecommarce = false,
  }) async* {
    try {
      getNearestVendorByCategoryController =
          StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;

LINE: 1643
    return isAdded;
  }

  static StreamController<List<VendorModel>>?
  getNearestVendorByCategoryController;

  static Stream<List<VendorModel>> getAllNearestRestaurantByCategoryId({
    bool? isDining,
    required String categoryId,
    bool ecommarce = false,
  }) async* {
    try {
      getNearestVendorByCategoryController =
          StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;
      if (ecommarce == true) {

LINE: 1645

  static StreamController<List<VendorModel>>?
  getNearestVendorByCategoryController;

  static Stream<List<VendorModel>> getAllNearestRestaurantByCategoryId({
    bool? isDining,
    required String categoryId,
    bool ecommarce = false,
  }) async* {
    try {
      getNearestVendorByCategoryController =
          StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;
      if (ecommarce == true) {
        query =
            isDining == true

LINE: 1647
  getNearestVendorByCategoryController;

  static Stream<List<VendorModel>> getAllNearestRestaurantByCategoryId({
    bool? isDining,
    required String categoryId,
    bool ecommarce = false,
  }) async* {
    try {
      getNearestVendorByCategoryController =
          StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;
      if (ecommarce == true) {
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)

LINE: 1651
    required String categoryId,
    bool ecommarce = false,
  }) async* {
    try {
      getNearestVendorByCategoryController =
          StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;
      if (ecommarce == true) {
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore
                    .collection(CollectionName.vendors)

LINE: 1652
    bool ecommarce = false,
  }) async* {
    try {
      getNearestVendorByCategoryController =
          StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;
      if (ecommarce == true) {
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId);

LINE: 1653
  }) async* {
    try {
      getNearestVendorByCategoryController =
          StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;
      if (ecommarce == true) {
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId);
      } else {

LINE: 1660
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId);
      } else {
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where(
                      'zoneId',

LINE: 1664
                    .where('categoryID', arrayContains: categoryId)
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId);
      } else {
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where(
                      'zoneId',
                      isEqualTo: Constant.selectedZone!.id.toString(),
                    )
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore

LINE: 1670
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where(
                      'zoneId',
                      isEqualTo: Constant.selectedZone!.id.toString(),
                    )
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where(
                      'zoneId',
                      isEqualTo: Constant.selectedZone!.id.toString(),
                    );

LINE: 1678
                    )
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where(
                      'zoneId',
                      isEqualTo: Constant.selectedZone!.id.toString(),
                    );
      }
      GeoFirePoint center = Geoflutterfire().point(
        latitude: Constant.selectedLocation.location!.latitude ?? 0.0,
        longitude: Constant.selectedLocation.location!.longitude ?? 0.0,
      );
      String field = 'g';

      Stream<List<DocumentSnapshot>> stream = Geoflutterfire()

LINE: 1705
      stream.listen((List<DocumentSnapshot> documentList) async {
        vendorList.clear();
        for (var document in documentList) {
          final data = document.data() as Map<String, dynamic>;
          VendorModel vendorModel = VendorModel.fromJson(data);
          if ((Constant.isSubscriptionModelApplied == true ||
                  vendorModel.adminCommission?.isEnabled == true) &&
              vendorModel.subscriptionPlan != null) {
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == '-1') {

LINE: 1707
        for (var document in documentList) {
          final data = document.data() as Map<String, dynamic>;
          VendorModel vendorModel = VendorModel.fromJson(data);
          if ((Constant.isSubscriptionModelApplied == true ||
                  vendorModel.adminCommission?.isEnabled == true) &&
              vendorModel.subscriptionPlan != null) {
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == '-1') {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);

LINE: 1708
          final data = document.data() as Map<String, dynamic>;
          VendorModel vendorModel = VendorModel.fromJson(data);
          if ((Constant.isSubscriptionModelApplied == true ||
                  vendorModel.adminCommission?.isEnabled == true) &&
              vendorModel.subscriptionPlan != null) {
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == '-1') {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }

LINE: 1709
          VendorModel vendorModel = VendorModel.fromJson(data);
          if ((Constant.isSubscriptionModelApplied == true ||
                  vendorModel.adminCommission?.isEnabled == true) &&
              vendorModel.subscriptionPlan != null) {
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == '-1') {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }

LINE: 1710
          if ((Constant.isSubscriptionModelApplied == true ||
                  vendorModel.adminCommission?.isEnabled == true) &&
              vendorModel.subscriptionPlan != null) {
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == '-1') {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }

LINE: 1712
              vendorModel.subscriptionPlan != null) {
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == '-1') {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }
          } else {
            vendorList.add(vendorModel);

LINE: 1713
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == '-1') {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }
          } else {
            vendorList.add(vendorModel);
          }

LINE: 1717
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == '-1') {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }
          } else {
            vendorList.add(vendorModel);
          }
        }
        getNearestVendorByCategoryController!.sink.add(vendorList);
      });


LINE: 1718
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == '-1') {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }
          } else {
            vendorList.add(vendorModel);
          }
        }
        getNearestVendorByCategoryController!.sink.add(vendorList);
      });

      yield* getNearestVendorByCategoryController!.stream;

LINE: 1719
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == '-1') {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }
          } else {
            vendorList.add(vendorModel);
          }
        }
        getNearestVendorByCategoryController!.sink.add(vendorList);
      });

      yield* getNearestVendorByCategoryController!.stream;
    } catch (e) {

LINE: 1724
                }
              }
            }
          } else {
            vendorList.add(vendorModel);
          }
        }
        getNearestVendorByCategoryController!.sink.add(vendorList);
      });

      yield* getNearestVendorByCategoryController!.stream;
    } catch (e) {
      print(e);
    }
  }

  static StreamController<List<VendorModel>>? getNearestVendorController;

LINE: 1727
          } else {
            vendorList.add(vendorModel);
          }
        }
        getNearestVendorByCategoryController!.sink.add(vendorList);
      });

      yield* getNearestVendorByCategoryController!.stream;
    } catch (e) {
      print(e);
    }
  }

  static StreamController<List<VendorModel>>? getNearestVendorController;

  static Stream<List<VendorModel>> getAllNearestRestaurant({
    bool? isDining,

LINE: 1730
        }
        getNearestVendorByCategoryController!.sink.add(vendorList);
      });

      yield* getNearestVendorByCategoryController!.stream;
    } catch (e) {
      print(e);
    }
  }

  static StreamController<List<VendorModel>>? getNearestVendorController;

  static Stream<List<VendorModel>> getAllNearestRestaurant({
    bool? isDining,
    bool ecommarce = false,
  }) async* {
    try {

LINE: 1736
      print(e);
    }
  }

  static StreamController<List<VendorModel>>? getNearestVendorController;

  static Stream<List<VendorModel>> getAllNearestRestaurant({
    bool? isDining,
    bool ecommarce = false,
  }) async* {
    try {
      getNearestVendorController =
          StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;
      if (ecommarce == true) {
        query =

LINE: 1738
  }

  static StreamController<List<VendorModel>>? getNearestVendorController;

  static Stream<List<VendorModel>> getAllNearestRestaurant({
    bool? isDining,
    bool ecommarce = false,
  }) async* {
    try {
      getNearestVendorController =
          StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;
      if (ecommarce == true) {
        query =
            isDining == true
                ? fireStore

LINE: 1744
    bool ecommarce = false,
  }) async* {
    try {
      getNearestVendorController =
          StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;
      if (ecommarce == true) {
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where(
                      'section_id',
                      isEqualTo: Constant.sectionConstantModel!.id,
                    )
                    .where("enabledDiveInFuture", isEqualTo: true)

LINE: 1745
  }) async* {
    try {
      getNearestVendorController =
          StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;
      if (ecommarce == true) {
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where(
                      'section_id',
                      isEqualTo: Constant.sectionConstantModel!.id,
                    )
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore

LINE: 1810
      stream.listen((List<DocumentSnapshot> documentList) async {
        vendorList.clear();
        for (var document in documentList) {
          final data = document.data() as Map<String, dynamic>;
          VendorModel vendorModel = VendorModel.fromJson(data);
          if ((Constant.isSubscriptionModelApplied == true ||
                  Constant.sectionConstantModel!.adminCommision?.isEnabled ==
                      true) &&
              vendorModel.subscriptionPlan != null) {
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||

LINE: 1814
          VendorModel vendorModel = VendorModel.fromJson(data);
          if ((Constant.isSubscriptionModelApplied == true ||
                  Constant.sectionConstantModel!.adminCommision?.isEnabled ==
                      true) &&
              vendorModel.subscriptionPlan != null) {
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == "-1") {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }

LINE: 1815
          if ((Constant.isSubscriptionModelApplied == true ||
                  Constant.sectionConstantModel!.adminCommision?.isEnabled ==
                      true) &&
              vendorModel.subscriptionPlan != null) {
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == "-1") {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }

LINE: 1816
                  Constant.sectionConstantModel!.adminCommision?.isEnabled ==
                      true) &&
              vendorModel.subscriptionPlan != null) {
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == "-1") {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }

LINE: 1818
              vendorModel.subscriptionPlan != null) {
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == "-1") {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }
          } else {
            vendorList.add(vendorModel);

LINE: 1819
            if (vendorModel.subscriptionTotalOrders == "-1") {
              vendorList.add(vendorModel);
            } else {
              if ((vendorModel.subscriptionExpiryDate != null &&
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == "-1") {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }
          } else {
            vendorList.add(vendorModel);
          }

LINE: 1823
                      vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == "-1") {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }
          } else {
            vendorList.add(vendorModel);
          }
        }
        getNearestVendorController!.sink.add(vendorList);
      });


LINE: 1824
                            DateTime.now(),
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == "-1") {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }
          } else {
            vendorList.add(vendorModel);
          }
        }
        getNearestVendorController!.sink.add(vendorList);
      });

      yield* getNearestVendorController!.stream;

LINE: 1825
                          ) ==
                          false) ||
                  vendorModel.subscriptionPlan?.expiryDay == "-1") {
                if (vendorModel.subscriptionTotalOrders != '0') {
                  vendorList.add(vendorModel);
                }
              }
            }
          } else {
            vendorList.add(vendorModel);
          }
        }
        getNearestVendorController!.sink.add(vendorList);
      });

      yield* getNearestVendorController!.stream;
    } catch (e) {

LINE: 1830
                }
              }
            }
          } else {
            vendorList.add(vendorModel);
          }
        }
        getNearestVendorController!.sink.add(vendorList);
      });

      yield* getNearestVendorController!.stream;
    } catch (e) {
      print(e);
    }
  }

  static Future<List<VendorCategoryModel>> getHomePageShowCategory() async {

LINE: 1842
      print(e);
    }
  }

  static Future<List<VendorCategoryModel>> getHomePageShowCategory() async {
    List<VendorCategoryModel> vendorCategoryList = [];
    await fireStore
        .collection(CollectionName.vendorCategories)
        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
        .where("show_in_homepage", isEqualTo: true)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            VendorCategoryModel vendorCategoryModel =
                VendorCategoryModel.fromJson(element.data());
            vendorCategoryList.add(vendorCategoryModel);

LINE: 1843
    }
  }

  static Future<List<VendorCategoryModel>> getHomePageShowCategory() async {
    List<VendorCategoryModel> vendorCategoryList = [];
    await fireStore
        .collection(CollectionName.vendorCategories)
        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
        .where("show_in_homepage", isEqualTo: true)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            VendorCategoryModel vendorCategoryModel =
                VendorCategoryModel.fromJson(element.data());
            vendorCategoryList.add(vendorCategoryModel);
          }

LINE: 1852
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            VendorCategoryModel vendorCategoryModel =
                VendorCategoryModel.fromJson(element.data());
            vendorCategoryList.add(vendorCategoryModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });
    return vendorCategoryList;
  }

  static Future<List<WalletTransactionModel>?> getWalletTransaction() async {
    List<WalletTransactionModel> walletTransactionList = [];

LINE: 1853
        .get()
        .then((value) {
          for (var element in value.docs) {
            VendorCategoryModel vendorCategoryModel =
                VendorCategoryModel.fromJson(element.data());
            vendorCategoryList.add(vendorCategoryModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });
    return vendorCategoryList;
  }

  static Future<List<WalletTransactionModel>?> getWalletTransaction() async {
    List<WalletTransactionModel> walletTransactionList = [];
    log("FireStoreUtils.getCurrentUid() :: ${FireStoreUtils.getCurrentUid()}");

LINE: 1854
        .then((value) {
          for (var element in value.docs) {
            VendorCategoryModel vendorCategoryModel =
                VendorCategoryModel.fromJson(element.data());
            vendorCategoryList.add(vendorCategoryModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });
    return vendorCategoryList;
  }

  static Future<List<WalletTransactionModel>?> getWalletTransaction() async {
    List<WalletTransactionModel> walletTransactionList = [];
    log("FireStoreUtils.getCurrentUid() :: ${FireStoreUtils.getCurrentUid()}");
    await fireStore

LINE: 1860
        })
        .catchError((error) {
          log(error.toString());
        });
    return vendorCategoryList;
  }

  static Future<List<WalletTransactionModel>?> getWalletTransaction() async {
    List<WalletTransactionModel> walletTransactionList = [];
    log("FireStoreUtils.getCurrentUid() :: ${FireStoreUtils.getCurrentUid()}");
    await fireStore
        .collection(CollectionName.wallet)
        .where('user_id', isEqualTo: FireStoreUtils.getCurrentUid())
        .orderBy('date', descending: true)
        .get()
        .then((value) {
          for (var element in value.docs) {

LINE: 1884
        });
    return walletTransactionList;
  }

  static Future<List<ProductModel>> getProductListByCategoryId(
    String categoryId,
  ) async {
    List<ProductModel> productList = [];
    List<ProductModel> categorybyProductList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where('categoryID', isEqualTo: categoryId)
            .where('publish', isEqualTo: true)
            .get();
    await Future.forEach(currencyQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,

LINE: 1885
    return walletTransactionList;
  }

  static Future<List<ProductModel>> getProductListByCategoryId(
    String categoryId,
  ) async {
    List<ProductModel> productList = [];
    List<ProductModel> categorybyProductList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where('categoryID', isEqualTo: categoryId)
            .where('publish', isEqualTo: true)
            .get();
    await Future.forEach(currencyQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {

LINE: 1887

  static Future<List<ProductModel>> getProductListByCategoryId(
    String categoryId,
  ) async {
    List<ProductModel> productList = [];
    List<ProductModel> categorybyProductList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where('categoryID', isEqualTo: categoryId)
            .where('publish', isEqualTo: true)
            .get();
    await Future.forEach(currencyQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      try {
        productList.add(ProductModel.fromJson(document.data()));

LINE: 1888
  static Future<List<ProductModel>> getProductListByCategoryId(
    String categoryId,
  ) async {
    List<ProductModel> productList = [];
    List<ProductModel> categorybyProductList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where('categoryID', isEqualTo: categoryId)
            .where('publish', isEqualTo: true)
            .get();
    await Future.forEach(currencyQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      try {
        productList.add(ProductModel.fromJson(document.data()));
      } catch (e) {

LINE: 1891
    List<ProductModel> productList = [];
    List<ProductModel> categorybyProductList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where('categoryID', isEqualTo: categoryId)
            .where('publish', isEqualTo: true)
            .get();
    await Future.forEach(currencyQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      try {
        productList.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('FireStoreUtils.getCurrencys Parse error $e');
      }
    });

LINE: 1892
    List<ProductModel> categorybyProductList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where('categoryID', isEqualTo: categoryId)
            .where('publish', isEqualTo: true)
            .get();
    await Future.forEach(currencyQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      try {
        productList.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('FireStoreUtils.getCurrencys Parse error $e');
      }
    });


LINE: 1899
    await Future.forEach(currencyQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      try {
        productList.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('FireStoreUtils.getCurrencys Parse error $e');
      }
    });

    List<VendorModel?> vendorList = await getAllStoresFuture();
    List<ProductModel> allProduct = <ProductModel>[];

    for (var vendor in vendorList) {
      await getAllProducts(vendor!.id.toString()).then((value) {
        if (Constant.isSubscriptionModelApplied == true ||
            vendor.adminCommission?.isEnabled == true) {

LINE: 1905
        print('FireStoreUtils.getCurrencys Parse error $e');
      }
    });

    List<VendorModel?> vendorList = await getAllStoresFuture();
    List<ProductModel> allProduct = <ProductModel>[];

    for (var vendor in vendorList) {
      await getAllProducts(vendor!.id.toString()).then((value) {
        if (Constant.isSubscriptionModelApplied == true ||
            vendor.adminCommission?.isEnabled == true) {
          if (vendor.subscriptionPlan != null &&
              Constant.isExpire(vendor) == false) {
            if (vendor.subscriptionPlan?.itemLimit == '-1') {
              allProduct.addAll(value);
            } else {
              int selectedProduct =

LINE: 1906
      }
    });

    List<VendorModel?> vendorList = await getAllStoresFuture();
    List<ProductModel> allProduct = <ProductModel>[];

    for (var vendor in vendorList) {
      await getAllProducts(vendor!.id.toString()).then((value) {
        if (Constant.isSubscriptionModelApplied == true ||
            vendor.adminCommission?.isEnabled == true) {
          if (vendor.subscriptionPlan != null &&
              Constant.isExpire(vendor) == false) {
            if (vendor.subscriptionPlan?.itemLimit == '-1') {
              allProduct.addAll(value);
            } else {
              int selectedProduct =
                  value.length <

LINE: 1909
    List<VendorModel?> vendorList = await getAllStoresFuture();
    List<ProductModel> allProduct = <ProductModel>[];

    for (var vendor in vendorList) {
      await getAllProducts(vendor!.id.toString()).then((value) {
        if (Constant.isSubscriptionModelApplied == true ||
            vendor.adminCommission?.isEnabled == true) {
          if (vendor.subscriptionPlan != null &&
              Constant.isExpire(vendor) == false) {
            if (vendor.subscriptionPlan?.itemLimit == '-1') {
              allProduct.addAll(value);
            } else {
              int selectedProduct =
                  value.length <
                          int.parse(vendor.subscriptionPlan?.itemLimit ?? '0')
                      ? (value.isEmpty ? 0 : (value.length))
                      : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');

LINE: 1915
            vendor.adminCommission?.isEnabled == true) {
          if (vendor.subscriptionPlan != null &&
              Constant.isExpire(vendor) == false) {
            if (vendor.subscriptionPlan?.itemLimit == '-1') {
              allProduct.addAll(value);
            } else {
              int selectedProduct =
                  value.length <
                          int.parse(vendor.subscriptionPlan?.itemLimit ?? '0')
                      ? (value.isEmpty ? 0 : (value.length))
                      : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');
              allProduct.addAll(value.sublist(0, selectedProduct));
            }
          }
        } else {
          allProduct.addAll(value);
        }

LINE: 1922
                  value.length <
                          int.parse(vendor.subscriptionPlan?.itemLimit ?? '0')
                      ? (value.isEmpty ? 0 : (value.length))
                      : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');
              allProduct.addAll(value.sublist(0, selectedProduct));
            }
          }
        } else {
          allProduct.addAll(value);
        }
      });
    }

    for (var element in productList) {
      bool productIsInList = allProduct.any(
        (product) => product.id == element.id,
      );

LINE: 1926
              allProduct.addAll(value.sublist(0, selectedProduct));
            }
          }
        } else {
          allProduct.addAll(value);
        }
      });
    }

    for (var element in productList) {
      bool productIsInList = allProduct.any(
        (product) => product.id == element.id,
      );
      if (productIsInList) {
        categorybyProductList.add(element);
      }
    }

LINE: 1931
        }
      });
    }

    for (var element in productList) {
      bool productIsInList = allProduct.any(
        (product) => product.id == element.id,
      );
      if (productIsInList) {
        categorybyProductList.add(element);
      }
    }

    return categorybyProductList;
  }

  static Future<List<ProductModel>> getAllProducts(String vendorId) async {

LINE: 1932
      });
    }

    for (var element in productList) {
      bool productIsInList = allProduct.any(
        (product) => product.id == element.id,
      );
      if (productIsInList) {
        categorybyProductList.add(element);
      }
    }

    return categorybyProductList;
  }

  static Future<List<ProductModel>> getAllProducts(String vendorId) async {
    List<ProductModel> products = [];

LINE: 1936
      bool productIsInList = allProduct.any(
        (product) => product.id == element.id,
      );
      if (productIsInList) {
        categorybyProductList.add(element);
      }
    }

    return categorybyProductList;
  }

  static Future<List<ProductModel>> getAllProducts(String vendorId) async {
    List<ProductModel> products = [];
    print(
      "STEP46S_GET_ALL_PRODUCTS_QUERY_START: vendorId=$vendorId collection=${CollectionName.vendorProducts} filter=vendorID/publish_true",
    );


LINE: 1940
        categorybyProductList.add(element);
      }
    }

    return categorybyProductList;
  }

  static Future<List<ProductModel>> getAllProducts(String vendorId) async {
    List<ProductModel> products = [];
    print(
      "STEP46S_GET_ALL_PRODUCTS_QUERY_START: vendorId=$vendorId collection=${CollectionName.vendorProducts} filter=vendorID/publish_true",
    );

    QuerySnapshot<Map<String, dynamic>> productsQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)

LINE: 1943

    return categorybyProductList;
  }

  static Future<List<ProductModel>> getAllProducts(String vendorId) async {
    List<ProductModel> products = [];
    print(
      "STEP46S_GET_ALL_PRODUCTS_QUERY_START: vendorId=$vendorId collection=${CollectionName.vendorProducts} filter=vendorID/publish_true",
    );

    QuerySnapshot<Map<String, dynamic>> productsQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
            .where('vendorID', isEqualTo: vendorId)
            .where('publish', isEqualTo: true)
            .orderBy('createdAt', descending: false)

LINE: 1946

  static Future<List<ProductModel>> getAllProducts(String vendorId) async {
    List<ProductModel> products = [];
    print(
      "STEP46S_GET_ALL_PRODUCTS_QUERY_START: vendorId=$vendorId collection=${CollectionName.vendorProducts} filter=vendorID/publish_true",
    );

    QuerySnapshot<Map<String, dynamic>> productsQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
            .where('vendorID', isEqualTo: vendorId)
            .where('publish', isEqualTo: true)
            .orderBy('createdAt', descending: false)
            .get();
    await Future.forEach(productsQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,

LINE: 1951
    );

    QuerySnapshot<Map<String, dynamic>> productsQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
            .where('vendorID', isEqualTo: vendorId)
            .where('publish', isEqualTo: true)
            .orderBy('createdAt', descending: false)
            .get();
    await Future.forEach(productsQuery.docs, (
      QueryDocumentSnapshot<Map<String, dynamic>> document,
    ) {
      try {
        products.add(ProductModel.fromJson(document.data()));
        print(
          "STEP46S_GET_ALL_PRODUCTS_ITEM: vendorId=$vendorId productId=${document.id} name=${document.data()["name"]} publish=${document.data()["publish"]} categoryID=${document.data()["categoryID"]}",

LINE: 1963
    ) {
      try {
        products.add(ProductModel.fromJson(document.data()));
        print(
          "STEP46S_GET_ALL_PRODUCTS_ITEM: vendorId=$vendorId productId=${document.id} name=${document.data()["name"]} publish=${document.data()["publish"]} categoryID=${document.data()["categoryID"]}",
        );
      } catch (e) {
        print('product**-FireStoreUtils.getAllProducts Parse error $e');
      }
    });
    print(
      "STEP46S_GET_ALL_PRODUCTS_QUERY_RESULT: vendorId=$vendorId count=${products.length}",
    );
    return products;
  }

  static Future<List<VendorModel>> getAllStoresFuture({

LINE: 1966
        print(
          "STEP46S_GET_ALL_PRODUCTS_ITEM: vendorId=$vendorId productId=${document.id} name=${document.data()["name"]} publish=${document.data()["publish"]} categoryID=${document.data()["categoryID"]}",
        );
      } catch (e) {
        print('product**-FireStoreUtils.getAllProducts Parse error $e');
      }
    });
    print(
      "STEP46S_GET_ALL_PRODUCTS_QUERY_RESULT: vendorId=$vendorId count=${products.length}",
    );
    return products;
  }

  static Future<List<VendorModel>> getAllStoresFuture({
    String? categoryId,
    bool ecommarce = false,
  }) async {

LINE: 1975
    );
    return products;
  }

  static Future<List<VendorModel>> getAllStoresFuture({
    String? categoryId,
    bool ecommarce = false,
  }) async {
    List<VendorModel> vendors = [];

    try {
      Query<Map<String, dynamic>> collectionReference;
      if (ecommarce == true) {
        collectionReference =
            categoryId == null
                ? fireStore
                    .collection(CollectionName.vendors)

LINE: 1976
    return products;
  }

  static Future<List<VendorModel>> getAllStoresFuture({
    String? categoryId,
    bool ecommarce = false,
  }) async {
    List<VendorModel> vendors = [];

    try {
      Query<Map<String, dynamic>> collectionReference;
      if (ecommarce == true) {
        collectionReference =
            categoryId == null
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where(

LINE: 1979
  static Future<List<VendorModel>> getAllStoresFuture({
    String? categoryId,
    bool ecommarce = false,
  }) async {
    List<VendorModel> vendors = [];

    try {
      Query<Map<String, dynamic>> collectionReference;
      if (ecommarce == true) {
        collectionReference =
            categoryId == null
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where(
                      "section_id",
                      isEqualTo: Constant.sectionConstantModel!.id,
                    )

LINE: 1985
    try {
      Query<Map<String, dynamic>> collectionReference;
      if (ecommarce == true) {
        collectionReference =
            categoryId == null
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where(
                      "section_id",
                      isEqualTo: Constant.sectionConstantModel!.id,
                    )
                : fireStore
                    .collection(CollectionName.vendors)
                    .where(
                      "section_id",
                      isEqualTo: Constant.sectionConstantModel!.id,
                    )

LINE: 1998
                    .where(
                      "section_id",
                      isEqualTo: Constant.sectionConstantModel!.id,
                    )
                    .where("categoryID", isEqualTo: categoryId);
      } else {
        collectionReference =
            categoryId == null
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where(
                      "section_id",
                      isEqualTo: Constant.sectionConstantModel!.id,
                    )
                    .where(
                      "zoneId",
                      isEqualTo: Constant.selectedZone!.id.toString(),

LINE: 2001
                    )
                    .where("categoryID", isEqualTo: categoryId);
      } else {
        collectionReference =
            categoryId == null
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where(
                      "section_id",
                      isEqualTo: Constant.sectionConstantModel!.id,
                    )
                    .where(
                      "zoneId",
                      isEqualTo: Constant.selectedZone!.id.toString(),
                    )
                : fireStore
                    .collection(CollectionName.vendors)

LINE: 2018
                    .where(
                      "section_id",
                      isEqualTo: Constant.sectionConstantModel!.id,
                    )
                    .where("categoryID", isEqualTo: categoryId)
                    .where(
                      "zoneId",
                      isEqualTo: Constant.selectedZone!.id.toString(),
                    );
      }
      GeoFirePoint center = Geoflutterfire().point(
        latitude: Constant.selectedLocation.location!.latitude ?? 0.0,
        longitude: Constant.selectedLocation.location!.longitude ?? 0.0,
      );

      String field = 'g';


LINE: 2047

      if (documentList.isNotEmpty) {
        for (var document in documentList) {
          final data = document.data() as Map<String, dynamic>;
          VendorModel vendorModel = VendorModel.fromJson(data);

          if (Constant.isSubscriptionModelApplied == true ||
              Constant.sectionConstantModel?.adminCommision?.isEnabled ==
                  true) {
            if (vendorModel.subscriptionPlan != null &&
                Constant.isExpire(vendorModel) == false) {
              if (vendorModel.subscriptionTotalOrders == "-1") {
                vendors.add(vendorModel);
              } else {
                if ((vendorModel.subscriptionExpiryDate != null &&
                        vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                              DateTime.now(),

LINE: 2052

          if (Constant.isSubscriptionModelApplied == true ||
              Constant.sectionConstantModel?.adminCommision?.isEnabled ==
                  true) {
            if (vendorModel.subscriptionPlan != null &&
                Constant.isExpire(vendorModel) == false) {
              if (vendorModel.subscriptionTotalOrders == "-1") {
                vendors.add(vendorModel);
              } else {
                if ((vendorModel.subscriptionExpiryDate != null &&
                        vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                              DateTime.now(),
                            ) ==
                            false) ||
                    vendorModel.subscriptionPlan?.expiryDay == "-1") {
                  if (vendorModel.subscriptionTotalOrders != '0') {
                    vendors.add(vendorModel);

LINE: 2053
          if (Constant.isSubscriptionModelApplied == true ||
              Constant.sectionConstantModel?.adminCommision?.isEnabled ==
                  true) {
            if (vendorModel.subscriptionPlan != null &&
                Constant.isExpire(vendorModel) == false) {
              if (vendorModel.subscriptionTotalOrders == "-1") {
                vendors.add(vendorModel);
              } else {
                if ((vendorModel.subscriptionExpiryDate != null &&
                        vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                              DateTime.now(),
                            ) ==
                            false) ||
                    vendorModel.subscriptionPlan?.expiryDay == "-1") {
                  if (vendorModel.subscriptionTotalOrders != '0') {
                    vendors.add(vendorModel);
                  }

LINE: 2054
              Constant.sectionConstantModel?.adminCommision?.isEnabled ==
                  true) {
            if (vendorModel.subscriptionPlan != null &&
                Constant.isExpire(vendorModel) == false) {
              if (vendorModel.subscriptionTotalOrders == "-1") {
                vendors.add(vendorModel);
              } else {
                if ((vendorModel.subscriptionExpiryDate != null &&
                        vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                              DateTime.now(),
                            ) ==
                            false) ||
                    vendorModel.subscriptionPlan?.expiryDay == "-1") {
                  if (vendorModel.subscriptionTotalOrders != '0') {
                    vendors.add(vendorModel);
                  }
                }

LINE: 2055
                  true) {
            if (vendorModel.subscriptionPlan != null &&
                Constant.isExpire(vendorModel) == false) {
              if (vendorModel.subscriptionTotalOrders == "-1") {
                vendors.add(vendorModel);
              } else {
                if ((vendorModel.subscriptionExpiryDate != null &&
                        vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                              DateTime.now(),
                            ) ==
                            false) ||
                    vendorModel.subscriptionPlan?.expiryDay == "-1") {
                  if (vendorModel.subscriptionTotalOrders != '0') {
                    vendors.add(vendorModel);
                  }
                }
              }

LINE: 2057
                Constant.isExpire(vendorModel) == false) {
              if (vendorModel.subscriptionTotalOrders == "-1") {
                vendors.add(vendorModel);
              } else {
                if ((vendorModel.subscriptionExpiryDate != null &&
                        vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                              DateTime.now(),
                            ) ==
                            false) ||
                    vendorModel.subscriptionPlan?.expiryDay == "-1") {
                  if (vendorModel.subscriptionTotalOrders != '0') {
                    vendors.add(vendorModel);
                  }
                }
              }
            }
          } else {

LINE: 2058
              if (vendorModel.subscriptionTotalOrders == "-1") {
                vendors.add(vendorModel);
              } else {
                if ((vendorModel.subscriptionExpiryDate != null &&
                        vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                              DateTime.now(),
                            ) ==
                            false) ||
                    vendorModel.subscriptionPlan?.expiryDay == "-1") {
                  if (vendorModel.subscriptionTotalOrders != '0') {
                    vendors.add(vendorModel);
                  }
                }
              }
            }
          } else {
            vendors.add(vendorModel);

LINE: 2062
                        vendorModel.subscriptionExpiryDate!.toDate().isBefore(
                              DateTime.now(),
                            ) ==
                            false) ||
                    vendorModel.subscriptionPlan?.expiryDay == "-1") {
                  if (vendorModel.subscriptionTotalOrders != '0') {
                    vendors.add(vendorModel);
                  }
                }
              }
            }
          } else {
            vendors.add(vendorModel);
          }
        }
      }
    } catch (e) {

LINE: 2063
                              DateTime.now(),
                            ) ==
                            false) ||
                    vendorModel.subscriptionPlan?.expiryDay == "-1") {
                  if (vendorModel.subscriptionTotalOrders != '0') {
                    vendors.add(vendorModel);
                  }
                }
              }
            }
          } else {
            vendors.add(vendorModel);
          }
        }
      }
    } catch (e) {
      print('Error fetching vendors: $e');

LINE: 2064
                            ) ==
                            false) ||
                    vendorModel.subscriptionPlan?.expiryDay == "-1") {
                  if (vendorModel.subscriptionTotalOrders != '0') {
                    vendors.add(vendorModel);
                  }
                }
              }
            }
          } else {
            vendors.add(vendorModel);
          }
        }
      }
    } catch (e) {
      print('Error fetching vendors: $e');
    }

LINE: 2070
                }
              }
            }
          } else {
            vendors.add(vendorModel);
          }
        }
      }
    } catch (e) {
      print('Error fetching vendors: $e');
    }

    return vendors;
  }

  static Future<NotificationModel?> getNotificationContent(String type) async {
    NotificationModel? notificationModel;

LINE: 2107
        });
    return notificationModel;
  }

  static Future<List<VendorCategoryModel>> getVendorCategory() async {
    List<VendorCategoryModel> list = [];
    await fireStore
        .collection(CollectionName.vendorCategories)
        .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            print("====>${value.docs.length}");
            VendorCategoryModel walletTransactionModel =
                VendorCategoryModel.fromJson(element.data());
            list.add(walletTransactionModel);

LINE: 2108
    return notificationModel;
  }

  static Future<List<VendorCategoryModel>> getVendorCategory() async {
    List<VendorCategoryModel> list = [];
    await fireStore
        .collection(CollectionName.vendorCategories)
        .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            print("====>${value.docs.length}");
            VendorCategoryModel walletTransactionModel =
                VendorCategoryModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }

LINE: 2117
        .get()
        .then((value) {
          for (var element in value.docs) {
            print("====>${value.docs.length}");
            VendorCategoryModel walletTransactionModel =
                VendorCategoryModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });
    return list;
  }

  static Future<GiftCardsOrderModel> placeGiftCardOrder(
    GiftCardsOrderModel giftCardsOrderModel,

LINE: 2118
        .then((value) {
          for (var element in value.docs) {
            print("====>${value.docs.length}");
            VendorCategoryModel walletTransactionModel =
                VendorCategoryModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });
    return list;
  }

  static Future<GiftCardsOrderModel> placeGiftCardOrder(
    GiftCardsOrderModel giftCardsOrderModel,
  ) async {

LINE: 2513
      return false;
    }
  }

  static Future<List<ParcelCategory>> getParcelServiceCategory() async {
    List<ParcelCategory> parcelCategoryList = [];
    await fireStore
        .collection(CollectionName.parcelCategory)
        .where('publish', isEqualTo: true)
        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
        .orderBy('set_order', descending: false)
        .get()
        .then((value) {
          for (var element in value.docs) {
            try {
              ParcelCategory category = ParcelCategory.fromJson(element.data());
              parcelCategoryList.add(category);

LINE: 2514
    }
  }

  static Future<List<ParcelCategory>> getParcelServiceCategory() async {
    List<ParcelCategory> parcelCategoryList = [];
    await fireStore
        .collection(CollectionName.parcelCategory)
        .where('publish', isEqualTo: true)
        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
        .orderBy('set_order', descending: false)
        .get()
        .then((value) {
          for (var element in value.docs) {
            try {
              ParcelCategory category = ParcelCategory.fromJson(element.data());
              parcelCategoryList.add(category);
            } catch (e, stackTrace) {

LINE: 2516

  static Future<List<ParcelCategory>> getParcelServiceCategory() async {
    List<ParcelCategory> parcelCategoryList = [];
    await fireStore
        .collection(CollectionName.parcelCategory)
        .where('publish', isEqualTo: true)
        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
        .orderBy('set_order', descending: false)
        .get()
        .then((value) {
          for (var element in value.docs) {
            try {
              ParcelCategory category = ParcelCategory.fromJson(element.data());
              parcelCategoryList.add(category);
            } catch (e, stackTrace) {
              print('getParcelServiceCategory parse error: ${element.id} $e');
              print(stackTrace);

LINE: 2524
        .get()
        .then((value) {
          for (var element in value.docs) {
            try {
              ParcelCategory category = ParcelCategory.fromJson(element.data());
              parcelCategoryList.add(category);
            } catch (e, stackTrace) {
              print('getParcelServiceCategory parse error: ${element.id} $e');
              print(stackTrace);
            }
          }
        });
    return parcelCategoryList;
  }

  static Future<List<ParcelWeightModel>> getParcelWeight() async {
    List<ParcelWeightModel> parcelWeightList = [];

LINE: 2525
        .then((value) {
          for (var element in value.docs) {
            try {
              ParcelCategory category = ParcelCategory.fromJson(element.data());
              parcelCategoryList.add(category);
            } catch (e, stackTrace) {
              print('getParcelServiceCategory parse error: ${element.id} $e');
              print(stackTrace);
            }
          }
        });
    return parcelCategoryList;
  }

  static Future<List<ParcelWeightModel>> getParcelWeight() async {
    List<ParcelWeightModel> parcelWeightList = [];
    await fireStore.collection(CollectionName.parcelWeight).get().then((value) {

LINE: 2527
            try {
              ParcelCategory category = ParcelCategory.fromJson(element.data());
              parcelCategoryList.add(category);
            } catch (e, stackTrace) {
              print('getParcelServiceCategory parse error: ${element.id} $e');
              print(stackTrace);
            }
          }
        });
    return parcelCategoryList;
  }

  static Future<List<ParcelWeightModel>> getParcelWeight() async {
    List<ParcelWeightModel> parcelWeightList = [];
    await fireStore.collection(CollectionName.parcelWeight).get().then((value) {
      for (var element in value.docs) {
        try {

LINE: 2532
              print(stackTrace);
            }
          }
        });
    return parcelCategoryList;
  }

  static Future<List<ParcelWeightModel>> getParcelWeight() async {
    List<ParcelWeightModel> parcelWeightList = [];
    await fireStore.collection(CollectionName.parcelWeight).get().then((value) {
      for (var element in value.docs) {
        try {
          ParcelWeightModel category = ParcelWeightModel.fromJson(
            element.data(),
          );
          parcelWeightList.add(category);
        } catch (e, stackTrace) {

LINE: 2540
    List<ParcelWeightModel> parcelWeightList = [];
    await fireStore.collection(CollectionName.parcelWeight).get().then((value) {
      for (var element in value.docs) {
        try {
          ParcelWeightModel category = ParcelWeightModel.fromJson(
            element.data(),
          );
          parcelWeightList.add(category);
        } catch (e, stackTrace) {
          print('getParcelWeight parse error: ${element.id} $e');
          print(stackTrace);
        }
      }
    });
    return parcelWeightList;
  }


LINE: 2543
        try {
          ParcelWeightModel category = ParcelWeightModel.fromJson(
            element.data(),
          );
          parcelWeightList.add(category);
        } catch (e, stackTrace) {
          print('getParcelWeight parse error: ${element.id} $e');
          print(stackTrace);
        }
      }
    });
    return parcelWeightList;
  }

  static Future<bool> setParcelOrder(
    ParcelOrderModel orderModel,
    double totalAmount,

LINE: 2780
        .get()
        .then((value) {
          for (var element in value.docs) {
            try {
              VehicleType category = VehicleType.fromJson(element.data());
              vehicleTypeList.add(category);
            } catch (e, stackTrace) {
              print('getVehicleType error: ${element.id} $e');
              print(stackTrace);
            }
          }
        });
    return vehicleTypeList;
  }

  static Future<List<PopularDestination>> getPopularDestination() async {
    List<PopularDestination> popularDestination = [];

LINE: 2781
        .then((value) {
          for (var element in value.docs) {
            try {
              VehicleType category = VehicleType.fromJson(element.data());
              vehicleTypeList.add(category);
            } catch (e, stackTrace) {
              print('getVehicleType error: ${element.id} $e');
              print(stackTrace);
            }
          }
        });
    return vehicleTypeList;
  }

  static Future<List<PopularDestination>> getPopularDestination() async {
    List<PopularDestination> popularDestination = [];
    await fireStore

LINE: 2801
        .get()
        .then((value) {
          for (var element in value.docs) {
            try {
              PopularDestination category = PopularDestination.fromJson(
                element.data(),
              );
              popularDestination.add(category);
            } catch (e, stackTrace) {
              print('Get PopularDestination error: ${element.id} $e');
              print(stackTrace);
            }
          }
        });
    return popularDestination;
  }


LINE: 2804
            try {
              PopularDestination category = PopularDestination.fromJson(
                element.data(),
              );
              popularDestination.add(category);
            } catch (e, stackTrace) {
              print('Get PopularDestination error: ${element.id} $e');
              print(stackTrace);
            }
          }
        });
    return popularDestination;
  }

  static Future cabOrderPlace(CabOrderModel orderModel) async {
    await fireStore
        .collection(CollectionName.rides)

LINE: 2915
          return ordersList;
        });
  }

  static Future<List<CategoryModel>> getOnDemandCategory() async {
    List<CategoryModel> categoryList = [];
    await fireStore
        .collection(CollectionName.providerCategories)
        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
        .where("level", isEqualTo: 0)
        .where("publish", isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            CategoryModel orderModel = CategoryModel.fromJson(element.data());
            categoryList.add(orderModel);
          }

LINE: 2916
        });
  }

  static Future<List<CategoryModel>> getOnDemandCategory() async {
    List<CategoryModel> categoryList = [];
    await fireStore
        .collection(CollectionName.providerCategories)
        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
        .where("level", isEqualTo: 0)
        .where("publish", isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            CategoryModel orderModel = CategoryModel.fromJson(element.data());
            categoryList.add(orderModel);
          }
        });

LINE: 2925
        .where("publish", isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            CategoryModel orderModel = CategoryModel.fromJson(element.data());
            categoryList.add(orderModel);
          }
        });
    return categoryList;
  }

  static Future<CategoryModel?> getCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore
        .collection(CollectionName.providerCategories)
        .doc(categoryId)
        .get()

LINE: 2926
        .get()
        .then((value) {
          for (var element in value.docs) {
            CategoryModel orderModel = CategoryModel.fromJson(element.data());
            categoryList.add(orderModel);
          }
        });
    return categoryList;
  }

  static Future<CategoryModel?> getCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore
        .collection(CollectionName.providerCategories)
        .doc(categoryId)
        .get()
        .then((value) {

LINE: 2929
            CategoryModel orderModel = CategoryModel.fromJson(element.data());
            categoryList.add(orderModel);
          }
        });
    return categoryList;
  }

  static Future<CategoryModel?> getCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore
        .collection(CollectionName.providerCategories)
        .doc(categoryId)
        .get()
        .then((value) {
          if (value.exists) {
            categoryModel = CategoryModel.fromJson(value.data()!);
          }

LINE: 2932
        });
    return categoryList;
  }

  static Future<CategoryModel?> getCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore
        .collection(CollectionName.providerCategories)
        .doc(categoryId)
        .get()
        .then((value) {
          if (value.exists) {
            categoryModel = CategoryModel.fromJson(value.data()!);
          }
        });
    return categoryModel;
  }

LINE: 2933
    return categoryList;
  }

  static Future<CategoryModel?> getCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore
        .collection(CollectionName.providerCategories)
        .doc(categoryId)
        .get()
        .then((value) {
          if (value.exists) {
            categoryModel = CategoryModel.fromJson(value.data()!);
          }
        });
    return categoryModel;
  }


LINE: 2936
  static Future<CategoryModel?> getCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore
        .collection(CollectionName.providerCategories)
        .doc(categoryId)
        .get()
        .then((value) {
          if (value.exists) {
            categoryModel = CategoryModel.fromJson(value.data()!);
          }
        });
    return categoryModel;
  }

  static Future<List<ProviderServiceModel>> getProviderFuture({
    String categoryId = '',
  }) async {

LINE: 2940
        .doc(categoryId)
        .get()
        .then((value) {
          if (value.exists) {
            categoryModel = CategoryModel.fromJson(value.data()!);
          }
        });
    return categoryModel;
  }

  static Future<List<ProviderServiceModel>> getProviderFuture({
    String categoryId = '',
  }) async {
    List<ProviderServiceModel> providerList = [];

    try {
      Query<Map<String, dynamic>> collectionReference;

LINE: 2943
          if (value.exists) {
            categoryModel = CategoryModel.fromJson(value.data()!);
          }
        });
    return categoryModel;
  }

  static Future<List<ProviderServiceModel>> getProviderFuture({
    String categoryId = '',
  }) async {
    List<ProviderServiceModel> providerList = [];

    try {
      Query<Map<String, dynamic>> collectionReference;

      if (categoryId.isNotEmpty) {
        collectionReference = fireStore

LINE: 2947
    return categoryModel;
  }

  static Future<List<ProviderServiceModel>> getProviderFuture({
    String categoryId = '',
  }) async {
    List<ProviderServiceModel> providerList = [];

    try {
      Query<Map<String, dynamic>> collectionReference;

      if (categoryId.isNotEmpty) {
        collectionReference = fireStore
            .collection(CollectionName.providersServices)
            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
            .where('categoryId', isEqualTo: categoryId)
            .where("publish", isEqualTo: true);

LINE: 2954

    try {
      Query<Map<String, dynamic>> collectionReference;

      if (categoryId.isNotEmpty) {
        collectionReference = fireStore
            .collection(CollectionName.providersServices)
            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
            .where('categoryId', isEqualTo: categoryId)
            .where("publish", isEqualTo: true);
      } else {
        collectionReference = fireStore
            .collection(CollectionName.providersServices)
            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
            .where("publish", isEqualTo: true);
      }


LINE: 2958
      if (categoryId.isNotEmpty) {
        collectionReference = fireStore
            .collection(CollectionName.providersServices)
            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
            .where('categoryId', isEqualTo: categoryId)
            .where("publish", isEqualTo: true);
      } else {
        collectionReference = fireStore
            .collection(CollectionName.providersServices)
            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
            .where("publish", isEqualTo: true);
      }

      GeoFirePoint center = Geoflutterfire().point(
        latitude: Constant.selectedLocation.location!.latitude ?? 0.0,
        longitude: Constant.selectedLocation.location!.longitude ?? 0.0,
      );

LINE: 3051
        });
    return providerService;
  }

  static Future<CategoryModel?> getSubCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore
        .collection(CollectionName.providerCategories)
        .doc(categoryId)
        .get()
        .then((value) {
          if (value.exists) {
            categoryModel = CategoryModel.fromJson(value.data()!);
          }
        });
    return categoryModel;
  }

LINE: 3052
    return providerService;
  }

  static Future<CategoryModel?> getSubCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore
        .collection(CollectionName.providerCategories)
        .doc(categoryId)
        .get()
        .then((value) {
          if (value.exists) {
            categoryModel = CategoryModel.fromJson(value.data()!);
          }
        });
    return categoryModel;
  }


LINE: 3055
  static Future<CategoryModel?> getSubCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore
        .collection(CollectionName.providerCategories)
        .doc(categoryId)
        .get()
        .then((value) {
          if (value.exists) {
            categoryModel = CategoryModel.fromJson(value.data()!);
          }
        });
    return categoryModel;
  }

  static Future<List<RatingModel>> getReviewByProviderServiceId(
    String serviceId,
  ) async {

LINE: 3059
        .doc(categoryId)
        .get()
        .then((value) {
          if (value.exists) {
            categoryModel = CategoryModel.fromJson(value.data()!);
          }
        });
    return categoryModel;
  }

  static Future<List<RatingModel>> getReviewByProviderServiceId(
    String serviceId,
  ) async {
    List<RatingModel> providerReview = [];
    await fireStore
        .collection(CollectionName.itemsReview)
        .where('productId', isEqualTo: serviceId)

LINE: 3062
          if (value.exists) {
            categoryModel = CategoryModel.fromJson(value.data()!);
          }
        });
    return categoryModel;
  }

  static Future<List<RatingModel>> getReviewByProviderServiceId(
    String serviceId,
  ) async {
    List<RatingModel> providerReview = [];
    await fireStore
        .collection(CollectionName.itemsReview)
        .where('productId', isEqualTo: serviceId)
        .get()
        .then((value) {
          for (var element in value.docs) {

LINE: 3643
        .get()
        .then((value) {
          for (var element in value.docs) {
            try {
              RentalVehicleType category = RentalVehicleType.fromJson(
                element.data(),
              );
              vehicleTypeList.add(category);
            } catch (e, stackTrace) {
              print('getVehicleType error: ${element.id} $e');
              print(stackTrace);
            }
          }
        });
    return vehicleTypeList;
  }


LINE: 3646
            try {
              RentalVehicleType category = RentalVehicleType.fromJson(
                element.data(),
              );
              vehicleTypeList.add(category);
            } catch (e, stackTrace) {
              print('getVehicleType error: ${element.id} $e');
              print(stackTrace);
            }
          }
        });
    return vehicleTypeList;
  }

  static Future<List<RentalPackageModel>> getRentalPackage(
    String vehicleId,
  ) async {

LINE: 3669
        .then((value) {
          for (var element in value.docs) {
            try {
              log('Rental Package Data: ${element.data()}');
              RentalPackageModel category = RentalPackageModel.fromJson(
                element.data(),
              );
              rentalPackageList.add(category);
            } catch (e, stackTrace) {
              print('getVehicleType error: ${element.id} $e');
              print(stackTrace);
            }
          }
        });
    return rentalPackageList;
  }


LINE: 3672
              log('Rental Package Data: ${element.data()}');
              RentalPackageModel category = RentalPackageModel.fromJson(
                element.data(),
              );
              rentalPackageList.add(category);
            } catch (e, stackTrace) {
              print('getVehicleType error: ${element.id} $e');
              print(stackTrace);
            }
          }
        });
    return rentalPackageList;
  }

  static Stream<List<RentalOrderModel>> getRentalOrders() {
    return fireStore
        .collection(CollectionName.rentalOrders)
TEXT_END

## Counts
TEXT_START
COUNT_getAllProducts: 4
COUNT_getProductByVendorId: 4
COUNT_ProductListView: 3
COUNT_productList: 63
TEXT_END

Final Status:
STATUS: RESTAURANT_DETAIL_PRODUCT_CALL_PATH_AUDITED