# FLUTTER RESTAURANT PAGECONTROLLER AUDIT

Generated: 07/01/2026 12:50:49
Mode: READ ONLY.


## File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart
TEXT_START

LINE: 24
  Rx<TextEditingController> searchEditingController =
      TextEditingController().obs;

  RxBool isLoading = true.obs;
  Rx<PageController> pageController = PageController().obs;
  RxInt currentPage = 0.obs;

  RxBool isVag = false.obs;
  RxBool isNonVag = false.obs;
  RxBool isMenuOpen = false.obs;

  RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
  RxList<FavouriteItemModel> favouriteItemList = <FavouriteItemModel>[].obs;
  RxList<ProductModel> allProductList = <ProductModel>[].obs;
  RxList<ProductModel> productList = <ProductModel>[].obs;

LINE: 57
        } else {
          currentPage.value = 0;
        }

        if (pageController.value.hasClients) {
          pageController.value.animateToPage(
            currentPage.value,
            duration: const Duration(milliseconds: 300),
            curve: Curves.easeIn,
          );
        }
      });
    }
  }


LINE: 58
          currentPage.value = 0;
        }

        if (pageController.value.hasClients) {
          pageController.value.animateToPage(
            currentPage.value,
            duration: const Duration(milliseconds: 300),
            curve: Curves.easeIn,
          );
        }
      });
    }
  }

  Rx<VendorModel> vendorModel = VendorModel().obs;
TEXT_END

## File: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart
TEXT_START

LINE: 165
                                  ),
                                ),
                              ],
                            )
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

LINE: 167
                              ],
                            )
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

LINE: 433
                                              color: isDark ? AppThemeData.grey50 : AppThemeData.grey900,
                                            ),
                                          ),
                                          const SizedBox(height: 10),
                                          CouponListView(controller: controller),
                                        ],
                                      ),
                                  const SizedBox(height: 20),
                                  Text(
                                    "Menu".tr,
                                    textAlign: TextAlign.start,
                                    maxLines: 1,
                                    style: TextStyle(
                                      fontSize: 16,
                                      overflow: TextOverflow.ellipsis,

LINE: 451
                                    ),
                                  ),
                                  const SizedBox(height: 10),
                                  TextFieldWidget(
                                    controller: controller.searchEditingController.value,
                                    hintText: 'Search the item and more...'.tr,
                                    onchange: (value) {
                                      controller.searchProduct(value);
                                    },
                                    prefix: Padding(padding: const EdgeInsets.all(12), child: SvgPicture.asset("assets/icons/ic_search.svg")),
                                  ),
                                  const SizedBox(height: 10),
                                  Constant.sectionConstantModel!.isProductDetails == false
                                      ? SizedBox()
                                      : Row(

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
TEXT_END

## Counts
TEXT_START
COUNT_PageController: 48
COUNT_PageView: 22
COUNT_SmoothPageIndicator: 0
TEXT_END

Final Status:
STATUS: FLUTTER_RESTAURANT_PAGECONTROLLER_AUDITED