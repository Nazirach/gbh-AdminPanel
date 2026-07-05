# SERVICE 40A BUILD INSTALL REPROOF FROM LATEST SOURCE

Generated: 07/01/2026 23:34:30
Mode: CLEAN BUILD + INSTALL + APK TIME PROOF.

OLD_APK_TIME: 07/01/2026 18:41:26
OLD_APK_SIZE: 228159874

## source marker verify
TEXT_START
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:24:  Rx<PageController> pageController = PageController().obs;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:25:  Timer? step47gSliderTimer;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:26:  RxInt currentPage = 0.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:27:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:28:  RxBool isVag = false.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:29:  RxBool isNonVag = false.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:45:    super.onInit();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:46:    print("STEP47D_RESTAURANT_DETAIL_ONINIT_ENTER");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:47:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:48:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:49:  void animateSlider() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:50:    if (vendorModel.value.photos != null &&
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:51:        vendorModel.value.photos!.isNotEmpty) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:52:      step47gSliderTimer?.cancel();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:53:      step47gSliderTimer = Timer.periodic(const Duration(seconds: 2), (
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:54:        Timer timer,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:55:      ) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:56:        if (currentPage < vendorModel.value.photos!.length - 1) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:57:          currentPage++;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:70:          } catch (e) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:71:            print("STEP47G_PAGECONTROLLER_ANIMATE_SKIP: $e");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:72:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:73:        } else if (pageController.value.hasClients &&
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:74:            pageController.value.positions.length > 1) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:75:          print(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:93:    print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:94:      "STEP47D_RESTAURANT_DETAIL_ARGUMENTS: type=${argumentData.runtimeType} value=$argumentData",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:95:    );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:96:    if (argumentData != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:97:      vendorModel.value = argumentData['vendorModel'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:98:      print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:99:        "STEP47D_RESTAURANT_DETAIL_VENDOR_ARG: id=${vendorModel.value.id} title=${vendorModel.value.title} zone=${vendorModel.value.zoneId}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:100:      );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:101:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:102:    animateSlider();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:103:    statusCheck();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:116:    print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:117:      "STEP47D_RESTAURANT_DETAIL_BEFORE_PRODUCT_LOAD: vendorId=${vendorModel.value.id} title=${vendorModel.value.title}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:118:    );
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:119:    await FireStoreUtils.getProductByVendorId(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:120:      vendorModel.value.id.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:121:    ).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:122:      if ((Constant.isSubscriptionModelApplied == true ||
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:123:              vendorModel.value.adminCommission?.isEnabled == true) &&
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:128:          print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:129:            "STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: vendorId=${vendorModel.value.id} count=${productList.length} allCount=${allProductList.length}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:130:          );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:131:        } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:132:          int selectedProduct =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:133:              value.length <
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:147:        print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:148:          "STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: vendorId=${vendorModel.value.id} count=${productList.length} allCount=${allProductList.length}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:149:        );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:150:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:151:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:152:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:551:  @override
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:552:  void onClose() {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:553:    print("STEP47G_RESTAURANT_DETAIL_ONCLOSE");
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:554:    step47gSliderTimer?.cancel();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:555:    if (pageController.value.hasClients == false) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:556:      pageController.value.dispose();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:557:    }
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:558:    super.onClose();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:559:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:560:}
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1219:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1220:  static Future<List<ProductModel>> getProductByVendorId(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1221:    String vendorId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1222:  ) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1223:    String selectedFoodType = Preferences.getString(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1224:      Preferences.foodDeliveryType,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1227:    List<ProductModel> list = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1228:    log("GetProductByVendorId :: $selectedFoodType");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1229:    print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1230:      "STEP47D_GET_PRODUCT_BY_VENDOR_ID_START: vendorId=$vendorId selectedFoodType=$selectedFoodType collection=${CollectionName.vendorProducts}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1231:    );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1232:    if (selectedFoodType == "TakeAway") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1233:      await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1234:          .collection(CollectionName.vendorProducts)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1247:              print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1248:                "STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=$vendorId productId=${productModel.id} name=${productModel.name} categoryID=${productModel.categoryID} publish=${productModel.publish}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1249:              );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1250:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1251:          })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1252:          .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1258:          .where("vendorID", isEqualTo: vendorId)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1259:          .where("takeawayOption", isEqualTo: false)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1260:          .where('publish', isEqualTo: true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1261:          .orderBy("createdAt", descending: false)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1262:          .get()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1263:          .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1271:              print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1272:                "STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=$vendorId productId=${productModel.id} name=${productModel.name} categoryID=${productModel.categoryID} publish=${productModel.publish}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1273:              );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1274:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1275:          })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1276:          .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1281:      print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1282:        "STEP47G_GET_PRODUCT_BY_VENDOR_ID_DELIVERY_FALLBACK_START: vendorId=$vendorId reason=delivery_takeawayOption_false_empty",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1283:      );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1284:      await fireStore
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1285:          .collection(CollectionName.vendorProducts)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1286:          .where("vendorID", isEqualTo: vendorId)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1298:              print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1299:                "STEP47G_GET_PRODUCT_BY_VENDOR_ID_FALLBACK_ITEM: vendorId=$vendorId productId=${productModel.id} name=${productModel.name} categoryID=${productModel.categoryID} publish=${productModel.publish}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1300:              );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1301:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1302:          })
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1303:          .catchError((error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1304:            print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1305:              "STEP47G_GET_PRODUCT_BY_VENDOR_ID_FALLBACK_ERROR: vendorId=$vendorId error=$error",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1306:            );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1307:            log(error.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1308:          });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1309:      print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1310:        "STEP47G_GET_PRODUCT_BY_VENDOR_ID_DELIVERY_FALLBACK_RESULT: vendorId=$vendorId count=${list.length}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1311:      );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1312:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1313:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1314:    print(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1315:      "STEP47D_GET_PRODUCT_BY_VENDOR_ID_RESULT: vendorId=$vendorId count=${list.length}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1316:    );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1317:    return list;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1318:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1319:
TEXT_END

## flutter clean
TEXT_START

ΓöîΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÉ
Γöé A new version of Flutter is available!                  Γöé
Γöé                                                         Γöé
Γöé To update to the latest version, run "flutter upgrade". Γöé
ΓööΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÿ
Deleting build...                                                   8.9s
Deleting .dart_tool...                                              28ms
Deleting ephemeral...                                                1ms
Deleting Generated.xcconfig...                                       1ms
Deleting flutter_export_environment.sh...                            0ms
Deleting .flutter-plugins-dependencies...                            0ms
TEXT_END

## flutter pub get
TEXT_START
Resolving dependencies...
Downloading packages...
  _flutterfire_internals 1.3.59 (1.3.73 available)
  camera 0.11.4 (0.12.0+1 available)
  camera_android_camerax 0.6.30 (0.7.3 available)
  camera_avfoundation 0.9.23+2 (0.10.1 available)
  camera_platform_interface 2.12.0 (2.13.0 available)
  camera_web 0.3.5+3 (0.3.5+4 available)
  characters 1.4.0 (1.4.1 available)
  cloud_firestore 5.6.12 (6.6.0 available)
  cloud_firestore_platform_interface 6.6.12 (8.0.3 available)
  cloud_firestore_web 4.4.12 (5.6.0 available)
  code_assets 1.0.0 (1.2.1 available)
  cross_file 0.3.5+2 (0.3.5+3 available)
  dart_either 1.0.0 (2.1.0 available)
  dbus 0.7.12 (0.7.14 available)
  dio 5.9.2 (5.10.0 available)
  dio_web_adapter 2.1.2 (2.2.0 available)
  firebase_app_check 0.3.2+10 (0.4.5 available)
  firebase_app_check_platform_interface 0.1.1+10 (0.4.1 available)
  firebase_app_check_web 0.2.0+14 (0.2.5 available)
  firebase_auth 5.7.0 (6.5.4 available)
  firebase_auth_platform_interface 7.7.3 (9.0.3 available)
  firebase_auth_web 5.15.3 (6.2.3 available)
  firebase_core 3.15.2 (4.11.0 available)
  firebase_core_platform_interface 6.0.3 (7.1.0 available)
  firebase_core_web 2.24.1 (3.9.0 available)
  firebase_database 11.3.10 (12.4.4 available)
  firebase_database_platform_interface 0.2.6+10 (0.4.0+3 available)
  firebase_database_web 0.2.6+16 (0.2.7+10 available)
  firebase_messaging 15.2.10 (16.4.1 available)
  firebase_messaging_platform_interface 4.6.10 (4.9.0 available)
  firebase_messaging_web 3.10.10 (4.2.1 available)
  firebase_storage 12.4.10 (13.4.3 available)
  firebase_storage_platform_interface 5.2.10 (6.0.3 available)
  firebase_storage_web 3.10.17 (3.11.9 available)
  flutter_local_notifications 21.0.0 (22.0.1 available)
  flutter_local_notifications_linux 8.0.0 (8.0.1 available)
  flutter_local_notifications_platform_interface 11.0.0 (12.0.0 available)
  flutter_local_notifications_windows 3.0.0 (3.1.1 available)
  flutter_map 8.2.2 (8.3.1 available)
  flutter_osm_plugin 1.4.3 (1.4.6 available)
  flutter_osm_web 1.4.2 (1.4.4 available)
  flutter_plugin_android_lifecycle 2.0.34 (2.0.35 available)
  flutter_stripe 12.5.0 (13.0.0 available)
  flutter_svg 2.2.4 (2.3.0 available)
  geocoding_android 4.0.1 (5.0.1 available)
  geocoding_platform_interface 3.2.0 (5.0.0 available)
  geolocator 14.0.2 (14.0.3 available)
  geolocator_android 5.0.2 (5.0.3 available)
  geolocator_apple 2.3.13 (2.3.14 available)
  geolocator_linux 0.2.4 (0.2.6 available)
  geolocator_platform_interface 4.2.6 (4.2.8 available)
  geolocator_web 4.1.3 (4.1.4 available)
! google_api_headers 5.1.0 (overridden) (5.3.3 available)
  google_maps_flutter 2.17.0 (2.17.1 available)
  google_maps_flutter_android 2.19.6 (2.19.12 available)
  google_maps_flutter_ios 2.18.1 (2.18.4 available)
  google_maps_flutter_web 0.6.2 (0.6.2+3 available)
  google_sign_in_android 7.2.10 (7.2.14 available)
  googleapis_auth 2.0.0 (2.3.2 available)
  hooks 1.0.2 (2.0.2 available)
! http 1.6.0 (overridden)
  image 4.8.0 (4.9.1 available)
  image_picker 1.2.1 (1.2.3 available)
  image_picker_android 0.8.13+16 (0.8.13+19 available)
  in_app_review 2.0.11 (2.0.12 available)
  intl 0.20.2 (0.20.3 available)
  json_annotation 4.11.0 (4.12.0 available)
  latlong2 0.9.1 (0.10.1 available)
  matcher 0.12.17 (0.12.20 available)
  material_color_utilities 0.11.1 (0.13.0 available)
  meta 1.17.0 (1.18.3 available)
  mgrs_dart 2.0.0 (3.0.0 available)
  native_toolchain_c 0.17.6 (0.19.2 available)
  objective_c 9.3.0 (9.4.1 available)
  package_config 2.2.0 (3.0.0 available)
! package_info_plus 9.0.1 (overridden) (10.2.0 available)
  package_info_plus_platform_interface 3.2.1 (4.1.0 available)
  path_provider 2.1.5 (2.1.6 available)
  path_provider_linux 2.2.1 (2.2.2 available)
  path_provider_platform_interface 2.1.2 (2.1.3 available)
  permission_handler 12.0.1 (12.0.3 available)
  permission_handler_apple 9.4.7 (9.4.10 available)
  pin_code_fields 9.3.0 (9.4.0 available)
  proj4dart 2.1.0 (3.0.0 available)
  punycoder 0.2.2 (0.3.0 available)
  qr 3.0.2 (4.0.0 available)
  razorpay_flutter 1.4.4 (1.4.5 available)
  routing_client_dart 0.5.5 (1.0.8 available)
  share_plus 12.0.2 (13.2.0 available)
  share_plus_platform_interface 6.1.0 (7.1.0 available)
  shared_preferences_android 2.4.23 (2.4.26 available)
  sign_in_with_apple 7.0.1 (8.1.0 available)
  sqflite 2.4.2 (2.4.3 available)
  sqflite_android 2.4.2+3 (2.4.3 available)
  sqflite_common 2.5.6 (2.5.11 available)
  sqflite_darwin 2.4.2 (2.4.3+1 available)
  sqflite_platform_interface 2.4.0 (2.4.1 available)
  stripe_android 12.5.0 (13.0.0 available)
  stripe_ios 12.5.0 (13.0.0 available)
  stripe_platform_interface 12.5.0 (13.0.0 available)
  synchronized 3.4.0 (3.4.1 available)
  test_api 0.7.7 (0.7.13 available)
  timezone 0.11.0 (0.11.1 available)
  unicode 0.3.1 (1.1.9 available)
  url_launcher_android 6.3.29 (6.3.32 available)
  url_launcher_web 2.4.2 (2.4.3 available)
  vector_graphics 1.1.21 (1.2.2 available)
  vector_graphics_compiler 1.2.0 (1.2.6 available)
  vector_math 2.2.0 (2.4.0 available)
  video_player_android 2.9.5 (2.10.0 available)
  video_player_avfoundation 2.9.4 (2.10.0 available)
  video_player_platform_interface 6.6.0 (6.8.0 available)
  vm_service 15.0.2 (15.2.0 available)
! webview_flutter 4.9.0 (overridden) (4.14.0 available)
  webview_flutter_android 3.16.9 (4.13.0 available)
  webview_flutter_wkwebview 3.24.3 (3.26.0 available)
  win32 5.15.0 (6.3.0 available)
  xml 6.6.1 (7.0.1 available)
Got dependencies!
117 packages have newer versions incompatible with dependency constraints.
Try `flutter pub outdated` for more information.
TEXT_END

## dart format
TEXT_START
Formatted 2 files (0 changed) in 0.18 seconds.
TEXT_END

## flutter build apk --debug
TEXT_START
Running Gradle task 'assembleDebug'...                          
lib/controllers/restaurant_details_controller.dart:554:5: Error: Undefined name 'step47gSliderTimer'.
    step47gSliderTimer?.cancel();
    ^^^^^^^^^^^^^^^^^^
lib/controllers/restaurant_details_controller.dart:555:9: Error: Undefined name 'pageController'.
    if (pageController.value.hasClients == false) {
        ^^^^^^^^^^^^^^
lib/controllers/restaurant_details_controller.dart:556:7: Error: Undefined name 'pageController'.
      pageController.value.dispose();
      ^^^^^^^^^^^^^^
lib/controllers/restaurant_details_controller.dart:558:5: Error: Expected identifier, but got 'super'.
    super.onClose();
    ^^^^^
Target kernel_snapshot_program failed: Exception
System.Management.Automation.RemoteException
System.Management.Automation.RemoteException
FAILURE: Build failed with an exception.
System.Management.Automation.RemoteException
* What went wrong:
Execution failed for task ':app:compileFlutterBuildDebug'.
> Process 'command 'C:\src\Flutter\bin\flutter.bat'' finished with non-zero exit value 1
System.Management.Automation.RemoteException
* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.
System.Management.Automation.RemoteException
BUILD FAILED in 2m 49s
Running Gradle task 'assembleDebug'...                            170.5s
Gradle task assembleDebug failed with exit code 1
TEXT_END

APK_BUILD_NOT_TRUSTED_OR_FAILED
STATUS: SERVICE_40A_BUILD_INSTALL_REPROOF_FAILED