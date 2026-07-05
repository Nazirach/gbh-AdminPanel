# FLUTTER PRODUCT LOADER SOURCE AUDIT

Generated: 07/01/2026 05:32:31
Mode: READ ONLY.


## File: .\lib\service\fire_store_utils.dart
TEXT_START

LINE: 227
    List<ZoneModel> airPortList = [];
    await fireStore
        .collection(CollectionName.zone)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            ZoneModel ariPortModel = ZoneModel.fromJson(element.data());
            airPortList.add(ariPortModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });

LINE: 489
        .collection(CollectionName.vendorCategories)
        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
        .where("show_in_homepage", isEqualTo: true)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            VendorCategoryModel walletTransactionModel = VendorCategoryModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });

LINE: 503
    return list;
  }

  static Future<List<ProductModel>> getProductListByBrandId(String brandId) async {
    List<ProductModel> list = [];
    await fireStore
        .collection(CollectionName.vendorProducts)
        .where('brandID', isEqualTo: brandId)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            ProductModel walletTransactionModel = ProductModel.fromJson(element.data());
            list.add(walletTransactionModel);

LINE: 504
  }

  static Future<List<ProductModel>> getProductListByBrandId(String brandId) async {
    List<ProductModel> list = [];
    await fireStore
        .collection(CollectionName.vendorProducts)
        .where('brandID', isEqualTo: brandId)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            ProductModel walletTransactionModel = ProductModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }

LINE: 506
  static Future<List<ProductModel>> getProductListByBrandId(String brandId) async {
    List<ProductModel> list = [];
    await fireStore
        .collection(CollectionName.vendorProducts)
        .where('brandID', isEqualTo: brandId)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            ProductModel walletTransactionModel = ProductModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }
        })
        .catchError((error) {

LINE: 508
    await fireStore
        .collection(CollectionName.vendorProducts)
        .where('brandID', isEqualTo: brandId)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            ProductModel walletTransactionModel = ProductModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });

LINE: 512
        .get()
        .then((value) {
          for (var element in value.docs) {
            ProductModel walletTransactionModel = ProductModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });
    return list;
  }

  static Future<List<BannerModel>> getHomeBottomBanner() async {

LINE: 526
    List<BannerModel> bannerList = [];
    await fireStore
        .collection(CollectionName.bannerItems)
        .where("is_publish", isEqualTo: true)
        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
        .where("position", isEqualTo: "middle")
        .orderBy("set_order", descending: false)
        .get()
        .then((value) {
          for (var element in value.docs) {
            BannerModel bannerHome = BannerModel.fromJson(element.data());
            bannerList.add(bannerHome);
          }
        });

LINE: 542

  static Future<List<BrandsModel>> getBrandList() async {
    List<BrandsModel> brandList = [];
    await fireStore.collection(CollectionName.brands).where("is_publish", isEqualTo: true).get().then((value) {
      for (var element in value.docs) {
        BrandsModel bannerHome = BrandsModel.fromJson(element.data());
        brandList.add(bannerHome);
      }
    });
    return brandList;
  }

  static Future<bool?> setBookedOrder(DineInBookingModel orderModel) async {
    bool isAdded = false;

LINE: 570
  static Future<List> getVendorCuisines(String id) async {
    List tagList = [];
    List prodTagList = [];
    QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.vendorProducts).where('vendorID', isEqualTo: id).get();
    await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      if (document.data().containsKey("categoryID") && document.data()['categoryID'].toString().isNotEmpty) {
        prodTagList.add(document.data()['categoryID']);
      }
    });
    QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(CollectionName.vendorCategories).where('publish', isEqualTo: true).get();
    await Future.forEach(catQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      Map<String, dynamic> catDoc = document.data();
      if (catDoc.containsKey("id") && catDoc['id'].toString().isNotEmpty && catDoc.containsKey("title") && catDoc['title'].toString().isNotEmpty && prodTagList.contains(catDoc['id'])) {
        tagList.add(catDoc['title']);

LINE: 572
    List prodTagList = [];
    QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.vendorProducts).where('vendorID', isEqualTo: id).get();
    await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      if (document.data().containsKey("categoryID") && document.data()['categoryID'].toString().isNotEmpty) {
        prodTagList.add(document.data()['categoryID']);
      }
    });
    QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(CollectionName.vendorCategories).where('publish', isEqualTo: true).get();
    await Future.forEach(catQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      Map<String, dynamic> catDoc = document.data();
      if (catDoc.containsKey("id") && catDoc['id'].toString().isNotEmpty && catDoc.containsKey("title") && catDoc['title'].toString().isNotEmpty && prodTagList.contains(catDoc['id'])) {
        tagList.add(catDoc['title']);
      }
    });

LINE: 573
    QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.vendorProducts).where('vendorID', isEqualTo: id).get();
    await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      if (document.data().containsKey("categoryID") && document.data()['categoryID'].toString().isNotEmpty) {
        prodTagList.add(document.data()['categoryID']);
      }
    });
    QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(CollectionName.vendorCategories).where('publish', isEqualTo: true).get();
    await Future.forEach(catQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      Map<String, dynamic> catDoc = document.data();
      if (catDoc.containsKey("id") && catDoc['id'].toString().isNotEmpty && catDoc.containsKey("title") && catDoc['title'].toString().isNotEmpty && prodTagList.contains(catDoc['id'])) {
        tagList.add(catDoc['title']);
      }
    });
    return tagList;

LINE: 576
        prodTagList.add(document.data()['categoryID']);
      }
    });
    QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(CollectionName.vendorCategories).where('publish', isEqualTo: true).get();
    await Future.forEach(catQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      Map<String, dynamic> catDoc = document.data();
      if (catDoc.containsKey("id") && catDoc['id'].toString().isNotEmpty && catDoc.containsKey("title") && catDoc['title'].toString().isNotEmpty && prodTagList.contains(catDoc['id'])) {
        tagList.add(catDoc['title']);
      }
    });
    return tagList;
  }

  static Future<List<FavouriteItemModel>> getFavouriteItem() async {

LINE: 597
    return favouriteList;
  }

  static Future<VendorModel?> getVendorById(String vendorId) async {
    VendorModel? vendorModel;
    try {
      await fireStore.collection(CollectionName.vendors).doc(vendorId).get().then((value) {
        if (value.exists) {
          vendorModel = VendorModel.fromJson(value.data()!);
        }
      });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;

LINE: 600
  static Future<VendorModel?> getVendorById(String vendorId) async {
    VendorModel? vendorModel;
    try {
      await fireStore.collection(CollectionName.vendors).doc(vendorId).get().then((value) {
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

LINE: 612
    return vendorModel;
  }

  static Future<ProductModel?> getProductById(String productId) async {
    ProductModel? vendorCategoryModel;
    try {
      await fireStore.collection(CollectionName.vendorProducts).doc(productId).get().then((value) {
        if (value.exists) {
          vendorCategoryModel = ProductModel.fromJson(value.data()!);
        }
      });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;

LINE: 613
  }

  static Future<ProductModel?> getProductById(String productId) async {
    ProductModel? vendorCategoryModel;
    try {
      await fireStore.collection(CollectionName.vendorProducts).doc(productId).get().then((value) {
        if (value.exists) {
          vendorCategoryModel = ProductModel.fromJson(value.data()!);
        }
      });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;
    }

LINE: 615
  static Future<ProductModel?> getProductById(String productId) async {
    ProductModel? vendorCategoryModel;
    try {
      await fireStore.collection(CollectionName.vendorProducts).doc(productId).get().then((value) {
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

LINE: 617
    try {
      await fireStore.collection(CollectionName.vendorProducts).doc(productId).get().then((value) {
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

LINE: 835
    return ratingModel;
  }

  static Future<VendorCategoryModel?> getVendorCategoryByCategoryId(String categoryId) async {
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore.collection(CollectionName.vendorCategories).doc(categoryId).get().then((value) {
        if (value.exists) {
          vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
        }
      });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;

LINE: 838
  static Future<VendorCategoryModel?> getVendorCategoryByCategoryId(String categoryId) async {
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore.collection(CollectionName.vendorCategories).doc(categoryId).get().then((value) {
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

LINE: 887
    });
  }

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

LINE: 890
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

LINE: 916
    return referralModel;
  }

  static Future<List<ProductModel>> getProductByVendorId(String vendorId) async {
    String selectedFoodType = Preferences.getString(Preferences.foodDeliveryType, defaultValue: "Delivery");
    List<ProductModel> list = [];
    log("GetProductByVendorId :: $selectedFoodType");
    if (selectedFoodType == "TakeAway") {
      await fireStore
          .collection(CollectionName.vendorProducts)
          .where("vendorID", isEqualTo: vendorId)
          .where('publish', isEqualTo: true)
          .orderBy("createdAt", descending: false)
          .get()

LINE: 918

  static Future<List<ProductModel>> getProductByVendorId(String vendorId) async {
    String selectedFoodType = Preferences.getString(Preferences.foodDeliveryType, defaultValue: "Delivery");
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

LINE: 919
  static Future<List<ProductModel>> getProductByVendorId(String vendorId) async {
    String selectedFoodType = Preferences.getString(Preferences.foodDeliveryType, defaultValue: "Delivery");
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

LINE: 922
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

LINE: 923
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

LINE: 924
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

LINE: 929
          .get()
          .then((value) {
            for (var element in value.docs) {
              ProductModel productModel = ProductModel.fromJson(element.data());
              list.add(productModel);
            }
          })
          .catchError((error) {
            log(error.toString());
          });
    } else {
      await fireStore
          .collection(CollectionName.vendorProducts)
          .where("vendorID", isEqualTo: vendorId)

LINE: 930
          .then((value) {
            for (var element in value.docs) {
              ProductModel productModel = ProductModel.fromJson(element.data());
              list.add(productModel);
            }
          })
          .catchError((error) {
            log(error.toString());
          });
    } else {
      await fireStore
          .collection(CollectionName.vendorProducts)
          .where("vendorID", isEqualTo: vendorId)
          .where("takeawayOption", isEqualTo: false)

LINE: 938
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

LINE: 939
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

LINE: 941
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
            log(error.toString());

LINE: 946
          .get()
          .then((value) {
            for (var element in value.docs) {
              ProductModel productModel = ProductModel.fromJson(element.data());
              list.add(productModel);
            }
          })
          .catchError((error) {
            log(error.toString());
          });
    }

    return list;
  }

LINE: 947
          .then((value) {
            for (var element in value.docs) {
              ProductModel productModel = ProductModel.fromJson(element.data());
              list.add(productModel);
            }
          })
          .catchError((error) {
            log(error.toString());
          });
    }

    return list;
  }


LINE: 973
    return deliveryCharge;
  }

  static Future<List<CouponModel>> getAllVendorPublicCoupons(String vendorId) async {
    List<CouponModel> coupon = [];

    await fireStore
        .collection(CollectionName.coupons)
        .where("vendorID", isEqualTo: vendorId)
        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
        .where("isEnabled", isEqualTo: true)
        .where("isPublic", isEqualTo: true)
        .get()
        .then((value) {

LINE: 978

    await fireStore
        .collection(CollectionName.coupons)
        .where("vendorID", isEqualTo: vendorId)
        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
        .where("isEnabled", isEqualTo: true)
        .where("isPublic", isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            CouponModel taxModel = CouponModel.fromJson(element.data());
            coupon.add(taxModel);
          }
        })

LINE: 996
    return coupon;
  }

  static Future<List<CouponModel>> getAllVendorCoupons(String vendorId) async {
    List<CouponModel> coupon = [];

    await fireStore
        .collection(CollectionName.coupons)
        .where("vendorID", isEqualTo: vendorId)
        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
        .where("isEnabled", isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {

LINE: 1001

    await fireStore
        .collection(CollectionName.coupons)
        .where("vendorID", isEqualTo: vendorId)
        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
        .where("isEnabled", isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            CouponModel taxModel = CouponModel.fromJson(element.data());
            coupon.add(taxModel);
          }
        })
        .catchError((error) {

LINE: 1085
    return isAdded;
  }

  static Future<List<CouponModel>> getOfferByVendorId(String vendorId) async {
    List<CouponModel> couponList = [];
    await fireStore
        .collection(CollectionName.coupons)
        .where("vendorID", isEqualTo: vendorId)
        .where("isEnabled", isEqualTo: true)
        .where("isPublic", isEqualTo: true)
        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
        .get()
        .then((value) {
          for (var element in value.docs) {

LINE: 1089
    List<CouponModel> couponList = [];
    await fireStore
        .collection(CollectionName.coupons)
        .where("vendorID", isEqualTo: vendorId)
        .where("isEnabled", isEqualTo: true)
        .where("isPublic", isEqualTo: true)
        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
        .get()
        .then((value) {
          for (var element in value.docs) {
            CouponModel favouriteModel = CouponModel.fromJson(element.data());
            couponList.add(favouriteModel);
          }
        });

LINE: 1114
    return attributeList;
  }

  static Future<VendorCategoryModel?> getVendorCategoryById(String categoryId) async {
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore.collection(CollectionName.vendorCategories).doc(categoryId).get().then((value) {
        if (value.exists) {
          vendorCategoryModel = VendorCategoryModel.fromJson(value.data()!);
        }
      });
    } catch (e, s) {
      log('FireStoreUtils.firebaseCreateNewUser $e $s');
      return null;

LINE: 1117
  static Future<VendorCategoryModel?> getVendorCategoryById(String categoryId) async {
    VendorCategoryModel? vendorCategoryModel;
    try {
      await fireStore.collection(CollectionName.vendorCategories).doc(categoryId).get().then((value) {
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

LINE: 1129
    return vendorCategoryModel;
  }

  static Future<List<RatingModel>> getVendorReviews(String vendorId) async {
    List<RatingModel> ratingList = [];
    await fireStore.collection(CollectionName.itemsReview).where('VendorId', isEqualTo: vendorId).get().then((value) {
      for (var element in value.docs) {
        RatingModel giftCardsOrderModel = RatingModel.fromJson(element.data());
        ratingList.add(giftCardsOrderModel);
      }
    });
    return ratingList;
  }


LINE: 1131

  static Future<List<RatingModel>> getVendorReviews(String vendorId) async {
    List<RatingModel> ratingList = [];
    await fireStore.collection(CollectionName.itemsReview).where('VendorId', isEqualTo: vendorId).get().then((value) {
      for (var element in value.docs) {
        RatingModel giftCardsOrderModel = RatingModel.fromJson(element.data());
        ratingList.add(giftCardsOrderModel);
      }
    });
    return ratingList;
  }

  static Future getPaymentSettingsData() async {
    await fireStore.collection(CollectionName.settings).doc("payFastSettings").get().then((value) async {

LINE: 1242

  static StreamController<List<VendorModel>>? getNearestVendorByCategoryController;

  static Stream<List<VendorModel>> getAllNearestRestaurantByCategoryId({bool? isDining, required String categoryId, bool ecommarce = false}) async* {
    try {
      getNearestVendorByCategoryController = StreamController<List<VendorModel>>.broadcast();
      List<VendorModel> vendorList = [];
      Query<Map<String, dynamic>> query;
      if (ecommarce == true) {
        query =
            isDining == true
                ? fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where("enabledDiveInFuture", isEqualTo: true)
                : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId);
      } else {

LINE: 1250
      if (ecommarce == true) {
        query =
            isDining == true
                ? fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where("enabledDiveInFuture", isEqualTo: true)
                : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId);
      } else {
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where('zoneId', isEqualTo: Constant.selectedZone!.id.toString())
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where('zoneId', isEqualTo: Constant.selectedZone!.id.toString());

LINE: 1251
        query =
            isDining == true
                ? fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where("enabledDiveInFuture", isEqualTo: true)
                : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId);
      } else {
        query =
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where('zoneId', isEqualTo: Constant.selectedZone!.id.toString())
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where('zoneId', isEqualTo: Constant.selectedZone!.id.toString());
      }

LINE: 1257
            isDining == true
                ? fireStore
                    .collection(CollectionName.vendors)
                    .where('categoryID', arrayContains: categoryId)
                    .where('zoneId', isEqualTo: Constant.selectedZone!.id.toString())
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where('zoneId', isEqualTo: Constant.selectedZone!.id.toString());
      }
      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
      String field = 'g';

      Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
          .collection(collectionRef: query)
          .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);

LINE: 1260
                    .where('categoryID', arrayContains: categoryId)
                    .where('zoneId', isEqualTo: Constant.selectedZone!.id.toString())
                    .where("enabledDiveInFuture", isEqualTo: true)
                : fireStore.collection(CollectionName.vendors).where('categoryID', arrayContains: categoryId).where('zoneId', isEqualTo: Constant.selectedZone!.id.toString());
      }
      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);
      String field = 'g';

      Stream<List<DocumentSnapshot>> stream = Geoflutterfire()
          .collection(collectionRef: query)
          .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true);

      stream.listen((List<DocumentSnapshot> documentList) async {
        vendorList.clear();

LINE: 1361
        .collection(CollectionName.vendorCategories)
        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
        .where("show_in_homepage", isEqualTo: true)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            VendorCategoryModel vendorCategoryModel = VendorCategoryModel.fromJson(element.data());
            vendorCategoryList.add(vendorCategoryModel);
          }
        })
        .catchError((error) {
          log(error.toString());
        });

LINE: 1395
    return walletTransactionList;
  }

  static Future<List<ProductModel>> getProductListByCategoryId(String categoryId) async {
    List<ProductModel> productList = [];
    List<ProductModel> categorybyProductList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.vendorProducts).where('categoryID', isEqualTo: categoryId).where('publish', isEqualTo: true).get();
    await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      try {
        productList.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('FireStoreUtils.getCurrencys Parse error $e');
      }
    });

LINE: 1396
  }

  static Future<List<ProductModel>> getProductListByCategoryId(String categoryId) async {
    List<ProductModel> productList = [];
    List<ProductModel> categorybyProductList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.vendorProducts).where('categoryID', isEqualTo: categoryId).where('publish', isEqualTo: true).get();
    await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      try {
        productList.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('FireStoreUtils.getCurrencys Parse error $e');
      }
    });


LINE: 1397

  static Future<List<ProductModel>> getProductListByCategoryId(String categoryId) async {
    List<ProductModel> productList = [];
    List<ProductModel> categorybyProductList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.vendorProducts).where('categoryID', isEqualTo: categoryId).where('publish', isEqualTo: true).get();
    await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      try {
        productList.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('FireStoreUtils.getCurrencys Parse error $e');
      }
    });

    List<VendorModel?> vendorList = await getAllStoresFuture();

LINE: 1398
  static Future<List<ProductModel>> getProductListByCategoryId(String categoryId) async {
    List<ProductModel> productList = [];
    List<ProductModel> categorybyProductList = [];
    QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.vendorProducts).where('categoryID', isEqualTo: categoryId).where('publish', isEqualTo: true).get();
    await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      try {
        productList.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('FireStoreUtils.getCurrencys Parse error $e');
      }
    });

    List<VendorModel?> vendorList = await getAllStoresFuture();
    List<ProductModel> allProduct = <ProductModel>[];

LINE: 1401
    QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.vendorProducts).where('categoryID', isEqualTo: categoryId).where('publish', isEqualTo: true).get();
    await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
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

LINE: 1408
    });

    List<VendorModel?> vendorList = await getAllStoresFuture();
    List<ProductModel> allProduct = <ProductModel>[];

    for (var vendor in vendorList) {
      await getAllProducts(vendor!.id.toString()).then((value) {
        if (Constant.isSubscriptionModelApplied == true || vendor.adminCommission?.isEnabled == true) {
          if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {
            if (vendor.subscriptionPlan?.itemLimit == '-1') {
              allProduct.addAll(value);
            } else {
              int selectedProduct = value.length < int.parse(vendor.subscriptionPlan?.itemLimit ?? '0') ? (value.isEmpty ? 0 : (value.length)) : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');
              allProduct.addAll(value.sublist(0, selectedProduct));

LINE: 1411
    List<ProductModel> allProduct = <ProductModel>[];

    for (var vendor in vendorList) {
      await getAllProducts(vendor!.id.toString()).then((value) {
        if (Constant.isSubscriptionModelApplied == true || vendor.adminCommission?.isEnabled == true) {
          if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {
            if (vendor.subscriptionPlan?.itemLimit == '-1') {
              allProduct.addAll(value);
            } else {
              int selectedProduct = value.length < int.parse(vendor.subscriptionPlan?.itemLimit ?? '0') ? (value.isEmpty ? 0 : (value.length)) : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');
              allProduct.addAll(value.sublist(0, selectedProduct));
            }
          }
        } else {

LINE: 1427
      });
    }

    for (var element in productList) {
      bool productIsInList = allProduct.any((product) => product.id == element.id);
      if (productIsInList) {
        categorybyProductList.add(element);
      }
    }

    return categorybyProductList;
  }

  static Future<List<ProductModel>> getAllProducts(String vendorId) async {

LINE: 1430
    for (var element in productList) {
      bool productIsInList = allProduct.any((product) => product.id == element.id);
      if (productIsInList) {
        categorybyProductList.add(element);
      }
    }

    return categorybyProductList;
  }

  static Future<List<ProductModel>> getAllProducts(String vendorId) async {
    List<ProductModel> products = [];

    QuerySnapshot<Map<String, dynamic>> productsQuery =

LINE: 1434
      }
    }

    return categorybyProductList;
  }

  static Future<List<ProductModel>> getAllProducts(String vendorId) async {
    List<ProductModel> products = [];

    QuerySnapshot<Map<String, dynamic>> productsQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
            .where('vendorID', isEqualTo: vendorId)

LINE: 1437
    return categorybyProductList;
  }

  static Future<List<ProductModel>> getAllProducts(String vendorId) async {
    List<ProductModel> products = [];

    QuerySnapshot<Map<String, dynamic>> productsQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
            .where('vendorID', isEqualTo: vendorId)
            .where('publish', isEqualTo: true)
            .orderBy('createdAt', descending: false)
            .get();

LINE: 1438
  }

  static Future<List<ProductModel>> getAllProducts(String vendorId) async {
    List<ProductModel> products = [];

    QuerySnapshot<Map<String, dynamic>> productsQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
            .where('vendorID', isEqualTo: vendorId)
            .where('publish', isEqualTo: true)
            .orderBy('createdAt', descending: false)
            .get();
    await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {

LINE: 1442

    QuerySnapshot<Map<String, dynamic>> productsQuery =
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
            .where('vendorID', isEqualTo: vendorId)
            .where('publish', isEqualTo: true)
            .orderBy('createdAt', descending: false)
            .get();
    await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      try {
        products.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('product**-FireStoreUtils.getAllProducts Parse error $e');

LINE: 1444
        await fireStore
            .collection(CollectionName.vendorProducts)
            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
            .where('vendorID', isEqualTo: vendorId)
            .where('publish', isEqualTo: true)
            .orderBy('createdAt', descending: false)
            .get();
    await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      try {
        products.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('product**-FireStoreUtils.getAllProducts Parse error $e');
      }
    });

LINE: 1445
            .collection(CollectionName.vendorProducts)
            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
            .where('vendorID', isEqualTo: vendorId)
            .where('publish', isEqualTo: true)
            .orderBy('createdAt', descending: false)
            .get();
    await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      try {
        products.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('product**-FireStoreUtils.getAllProducts Parse error $e');
      }
    });
    return products;

LINE: 1450
            .get();
    await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
      try {
        products.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('product**-FireStoreUtils.getAllProducts Parse error $e');
      }
    });
    return products;
  }

  static Future<List<VendorModel>> getAllStoresFuture({String? categoryId, bool ecommarce = false}) async {
    List<VendorModel> vendors = [];


LINE: 1452
      try {
        products.add(ProductModel.fromJson(document.data()));
      } catch (e) {
        print('product**-FireStoreUtils.getAllProducts Parse error $e');
      }
    });
    return products;
  }

  static Future<List<VendorModel>> getAllStoresFuture({String? categoryId, bool ecommarce = false}) async {
    List<VendorModel> vendors = [];

    try {
      Query<Map<String, dynamic>> collectionReference;

LINE: 1458
    return products;
  }

  static Future<List<VendorModel>> getAllStoresFuture({String? categoryId, bool ecommarce = false}) async {
    List<VendorModel> vendors = [];

    try {
      Query<Map<String, dynamic>> collectionReference;
      if (ecommarce == true) {
        collectionReference =
            categoryId == null
                ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
                : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
      } else {

LINE: 1465
      Query<Map<String, dynamic>> collectionReference;
      if (ecommarce == true) {
        collectionReference =
            categoryId == null
                ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
                : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
      } else {
        collectionReference =
            categoryId == null
                ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("zoneId", isEqualTo: Constant.selectedZone!.id.toString())
                : fireStore
                    .collection(CollectionName.vendors)
                    .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
                    .where("categoryID", isEqualTo: categoryId)

LINE: 1467
        collectionReference =
            categoryId == null
                ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
                : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
      } else {
        collectionReference =
            categoryId == null
                ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("zoneId", isEqualTo: Constant.selectedZone!.id.toString())
                : fireStore
                    .collection(CollectionName.vendors)
                    .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
                    .where("categoryID", isEqualTo: categoryId)
                    .where("zoneId", isEqualTo: Constant.selectedZone!.id.toString());
      }

LINE: 1470
                : fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("categoryID", isEqualTo: categoryId);
      } else {
        collectionReference =
            categoryId == null
                ? fireStore.collection(CollectionName.vendors).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).where("zoneId", isEqualTo: Constant.selectedZone!.id.toString())
                : fireStore
                    .collection(CollectionName.vendors)
                    .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
                    .where("categoryID", isEqualTo: categoryId)
                    .where("zoneId", isEqualTo: Constant.selectedZone!.id.toString());
      }
      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);

      String field = 'g';

LINE: 1475
                : fireStore
                    .collection(CollectionName.vendors)
                    .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
                    .where("categoryID", isEqualTo: categoryId)
                    .where("zoneId", isEqualTo: Constant.selectedZone!.id.toString());
      }
      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);

      String field = 'g';

      List<DocumentSnapshot> documentList =
          await Geoflutterfire()
              .collection(collectionRef: collectionReference)
              .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)

LINE: 1537
    await fireStore
        .collection(CollectionName.vendorCategories)
        .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
        .where('publish', isEqualTo: true)
        .get()
        .then((value) {
          for (var element in value.docs) {
            print("====>${value.docs.length}");
            VendorCategoryModel walletTransactionModel = VendorCategoryModel.fromJson(element.data());
            list.add(walletTransactionModel);
          }
        })
        .catchError((error) {
          log(error.toString());

LINE: 1626
    List<BannerModel> bannerList = [];
    await fireStore
        .collection(CollectionName.bannerItems)
        .where("is_publish", isEqualTo: true)
        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
        .where("position", isEqualTo: "top")
        .orderBy("set_order", descending: false)
        .get()
        .then((value) {
          for (var element in value.docs) {
            BannerModel bannerHome = BannerModel.fromJson(element.data());
            bannerList.add(bannerHome);
          }
        });

LINE: 1826
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

LINE: 2009

  static Future<List<PopularDestination>> getPopularDestination() async {
    List<PopularDestination> popularDestination = [];
    await fireStore.collection(CollectionName.popularDestinations).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where('is_publish', isEqualTo: true).get().then((value) {
      for (var element in value.docs) {
        try {
          PopularDestination category = PopularDestination.fromJson(element.data());
          popularDestination.add(category);
        } catch (e, stackTrace) {
          print('Get PopularDestination error: ${element.id} $e');
          print(stackTrace);
        }
      }
    });

LINE: 2118
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
    return categoryList;
  }


LINE: 2129
    return categoryList;
  }

  static Future<CategoryModel?> getCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore.collection(CollectionName.providerCategories).doc(categoryId).get().then((value) {
      if (value.exists) {
        categoryModel = CategoryModel.fromJson(value.data()!);
      }
    });
    return categoryModel;
  }

  static Future<List<ProviderServiceModel>> getProviderFuture({String categoryId = ''}) async {

LINE: 2131

  static Future<CategoryModel?> getCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore.collection(CollectionName.providerCategories).doc(categoryId).get().then((value) {
      if (value.exists) {
        categoryModel = CategoryModel.fromJson(value.data()!);
      }
    });
    return categoryModel;
  }

  static Future<List<ProviderServiceModel>> getProviderFuture({String categoryId = ''}) async {
    List<ProviderServiceModel> providerList = [];


LINE: 2139
    return categoryModel;
  }

  static Future<List<ProviderServiceModel>> getProviderFuture({String categoryId = ''}) async {
    List<ProviderServiceModel> providerList = [];

    try {
      Query<Map<String, dynamic>> collectionReference;

      if (categoryId.isNotEmpty) {
        collectionReference = fireStore
            .collection(CollectionName.providersServices)
            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
            .where('categoryId', isEqualTo: categoryId)

LINE: 2145
    try {
      Query<Map<String, dynamic>> collectionReference;

      if (categoryId.isNotEmpty) {
        collectionReference = fireStore
            .collection(CollectionName.providersServices)
            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
            .where('categoryId', isEqualTo: categoryId)
            .where("publish", isEqualTo: true);
      } else {
        collectionReference = fireStore.collection(CollectionName.providersServices).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where("publish", isEqualTo: true);
      }

      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);

LINE: 2149
        collectionReference = fireStore
            .collection(CollectionName.providersServices)
            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
            .where('categoryId', isEqualTo: categoryId)
            .where("publish", isEqualTo: true);
      } else {
        collectionReference = fireStore.collection(CollectionName.providersServices).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where("publish", isEqualTo: true);
      }

      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);

      String field = 'g';

      await Geoflutterfire()

LINE: 2150
            .collection(CollectionName.providersServices)
            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
            .where('categoryId', isEqualTo: categoryId)
            .where("publish", isEqualTo: true);
      } else {
        collectionReference = fireStore.collection(CollectionName.providersServices).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where("publish", isEqualTo: true);
      }

      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);

      String field = 'g';

      await Geoflutterfire()
          .collection(collectionRef: collectionReference)

LINE: 2152
            .where('categoryId', isEqualTo: categoryId)
            .where("publish", isEqualTo: true);
      } else {
        collectionReference = fireStore.collection(CollectionName.providersServices).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where("publish", isEqualTo: true);
      }

      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);

      String field = 'g';

      await Geoflutterfire()
          .collection(collectionRef: collectionReference)
          .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)
          .first

LINE: 2195

  static Future<List<ProviderServiceModel>> getAllProviderServiceByAuthorId(String authId) async {
    List<ProviderServiceModel> providerService = [];
    await fireStore.collection(CollectionName.providersServices).where('author', isEqualTo: authId).where('publish', isEqualTo: true).orderBy('createdAt', descending: false).get().then((value) {
      for (var element in value.docs) {
        ProviderServiceModel orderModel = ProviderServiceModel.fromJson(element.data());
        providerService.add(orderModel);
      }
    });
    return providerService;
  }

  static Future<CategoryModel?> getSubCategoryById(String categoryId) async {
    CategoryModel? categoryModel;

LINE: 2204
    return providerService;
  }

  static Future<CategoryModel?> getSubCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore.collection(CollectionName.providerCategories).doc(categoryId).get().then((value) {
      if (value.exists) {
        categoryModel = CategoryModel.fromJson(value.data()!);
      }
    });
    return categoryModel;
  }

  static Future<List<RatingModel>> getReviewByProviderServiceId(String serviceId) async {

LINE: 2206

  static Future<CategoryModel?> getSubCategoryById(String categoryId) async {
    CategoryModel? categoryModel;
    await fireStore.collection(CollectionName.providerCategories).doc(categoryId).get().then((value) {
      if (value.exists) {
        categoryModel = CategoryModel.fromJson(value.data()!);
      }
    });
    return categoryModel;
  }

  static Future<List<RatingModel>> getReviewByProviderServiceId(String serviceId) async {
    List<RatingModel> providerReview = [];
    await fireStore.collection(CollectionName.itemsReview).where('productId', isEqualTo: serviceId).get().then((value) {

LINE: 2233
          .collection(CollectionName.providersServices)
          .where("author", isEqualTo: providerId)
          .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
          .where("publish", isEqualTo: true);

      // Geolocation center point
      GeoFirePoint center = Geoflutterfire().point(latitude: Constant.selectedLocation.location!.latitude ?? 0.0, longitude: Constant.selectedLocation.location!.longitude ?? 0.0);

      String field = 'g';

      // Query within radius
      await Geoflutterfire()
          .collection(collectionRef: collectionReference)
          .within(center: center, radius: double.parse(Constant.sectionConstantModel!.nearByRadius.toString()), field: field, strictMode: true)

LINE: 2508
    await fireStore
        .collection(CollectionName.itemsReview)
        .where('orderid', isEqualTo: orderId)
        .where('VendorId', isEqualTo: providerId)
        .limit(1)
        .get()
        .then((snapshot) {
          if (snapshot.docs.isNotEmpty) {
            ratingModel = RatingModel.fromJson(snapshot.docs.first.data());
          }
        })
        .catchError((error) {
          print('Error fetching review for provider: $error');
        });
TEXT_END

## File: .\lib\controllers\restaurant_details_controller.dart
TEXT_START

LINE: 33

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

LINE: 84
    animateSlider();
    statusCheck();

    await getProduct();

    isLoading.value = false;
    await getFavouriteList();

    update();
  }

  RxList<BrandsModel> brandList = <BrandsModel>[].obs;

  Future<void> getProduct() async {

LINE: 94

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

LINE: 95
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

LINE: 102
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

LINE: 103
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

LINE: 114
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

LINE: 115
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

LINE: 118
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

LINE: 119
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

LINE: 123
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

LINE: 125

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

LINE: 146

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

LINE: 147
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

LINE: 151
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

LINE: 152
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

LINE: 163

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

LINE: 164
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

LINE: 168
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

LINE: 169
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

LINE: 171
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

LINE: 172
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

LINE: 174
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

LINE: 175
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

LINE: 181
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

LINE: 184
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


LINE: 185
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

LINE: 199
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

LINE: 266

  RxInt quantity = 1.obs;

  String calculatePrice(ProductModel productModel) {
    String mainPrice = "0";
    String variantPrice = "0";
    String adOnsPrice = "0";

    if (productModel.itemAttribute != null) {
      if (productModel.itemAttribute!.variants!
          .where((element) => element.variantSku == selectedVariants.join('-'))
          .isNotEmpty) {
        variantPrice = Constant.productCommissionPrice(
          vendorModel.value,

LINE: 271
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
                        element.variantSku == selectedVariants.join('-'),
                  )

LINE: 272
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
                  )
                  .first

LINE: 277
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

LINE: 290
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

LINE: 293
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
        variantPrice = disPrice;
      }

LINE: 297
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

LINE: 306
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
                    ))
                .toString();

LINE: 307
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
                .toString();
      }

LINE: 313
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

LINE: 337
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

    String adOnsPrice = "0";
    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {

LINE: 344
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
                      Constant.productCommissionPrice(
                        vendorModel.value,

LINE: 347
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
                      ),
                    ))

LINE: 348

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
                .toString();

LINE: 349
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
                .toString();
      }

LINE: 355
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

LINE: 363
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
      cartProductModel.variantInfo = variantInfo;
      cartProductModel.extrasPrice = adOnsPrice;

LINE: 364

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
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;

LINE: 365
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
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =

LINE: 366
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

LINE: 367
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

LINE: 368
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

LINE: 369
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

LINE: 370
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

LINE: 371
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

LINE: 372
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

LINE: 373
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
                        ) ??

LINE: 374
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
                        ) ??
                        false,

LINE: 375
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
                        false,
                  )

LINE: 378
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

LINE: 381
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
      cartProductModel.categoryId = productModel.categoryID!;

LINE: 388
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
      cartProductModel.extrasPrice = adOnsPrice;
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;

LINE: 389
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
      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
      cartProductModel.taxSetting =

LINE: 390
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

LINE: 391
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

LINE: 392
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

LINE: 393
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

LINE: 394
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

LINE: 395
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

LINE: 396
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

LINE: 397
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
                        ) ??

LINE: 398
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
                        ) ??
                        false,

LINE: 399
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
                        false,
                  )

LINE: 402
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


LINE: 405
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
    } else {

LINE: 414
    }

    if (isIncrement) {
      await cartProvider.addToCart(Get.context!, cartProductModel, quantity);
    } else {
      await cartProvider.removeFromCart(cartProductModel, quantity);
    }
    log("===> new ${cartItem.length}");
    update();
  }
}

// TEMP SAFE PATCH STEP46O - restaurant details working hours parser
String step46oNormalizeRestaurantTimeText(dynamic raw) {

LINE: 416
    if (isIncrement) {
      await cartProvider.addToCart(Get.context!, cartProductModel, quantity);
    } else {
      await cartProvider.removeFromCart(cartProductModel, quantity);
    }
    log("===> new ${cartItem.length}");
    update();
  }
}

// TEMP SAFE PATCH STEP46O - restaurant details working hours parser
String step46oNormalizeRestaurantTimeText(dynamic raw) {
  String value = (raw ?? '').toString().trim();

TEXT_END

## File: .\lib\screen_ui\multi_vendor_service\restaurant_details_screen.dart
TEXT_START
FILE_NOT_FOUND
TEXT_END

Final Status:
STATUS: FLUTTER_PRODUCT_LOADER_SOURCE_AUDITED