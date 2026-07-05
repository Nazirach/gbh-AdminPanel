# CUSTOMER HOME SERVICES SOURCE QUERY AUDIT

Generated: 06/28/2026 20:51:42

Mode: source read-only audit. No patch. No deploy. No Firebase manual write. No order creation.

## Purpose

- Home screen reached successfully.
- Explore Our Services is visible but service cards are blank.
- Need to identify exact Firestore collection/query/field used by customer home services.


## Pattern: Explore Our Services

```text

Path                                                                                                                                                LineNumber Line                                                                             
----                                                                                                                                                ---------- ----                                                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                               76   'Explore Our Services': 'استكشف خدماتنا',                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                               76   'Explore Our Services': 'Explore Our Services',                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart         48                               Text("Explore Our Services".tr, style: AppThemeD...



```

## Pattern: All Your Needs in One App

```text

Path                                                                                                                                                LineNumber Line                                                                             
----                                                                                                                                                ---------- ----                                                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                               75   'All Your Needs in One App!': 'كل احتياجاتك في تطبيق واحد!',                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                               75   'All Your Needs in One App!': 'All Your Needs in One App!',                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart         29                 Text("All Your Needs in One App!".tr, style: AppThemeData.regu...



```

## Pattern: service

```text

Path                                                                                                                                                LineNumber Line                                                                             
----                                                                                                                                                ---------- ----                                                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\main.dart                                                       2 import 'package:customer/service/fire_store_utils.dart';                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\main.dart                                                       3 import 'package:customer/service/localization_service.dart';                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\main.dart                                                      71         translations: LocalizationService(),                                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\main.dart                                                      72         locale: LocalizationService.locale,                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\main.dart                                                      73         fallbackLocale: LocalizationService.locale,                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\collection_name.dart                                  47   static const String providersServices = 'providers_services';                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\collection_name.dart                                  48   static const String favoriteService = 'favorite_service';                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                         19 import 'package:flutter/services.dart';                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                         35 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                         57   static String cabServiceType = "cab-service";                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                         58   static String parcelServiceType = "parcel-service";                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                         68   static List<TaxModel>? orderProductTaxList = []; //multivendor , e-commarce,...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                         71   static List<TaxModel>? platformTaxList = []; //multivendor , e-commarce, ond...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart                  40 import '../screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart                  41 import '../screen_ui/on_demand_service/on_demand_dashboard_screen.dart';         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart                  42 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart                  43 import '../service/send_notification.dart';                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart                  84         await FireStoreUtils.sendOrderOnDemandServiceEmail(orderModel: onDeman...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart                  93         ShowToastDialog.showToast("OnDemand Service successfully booked".tr);    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart                 150           serviceType: 'ondemand-service',                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart                 446       "customizations": {"title": "Payment for Services", "description": "Paym...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\address_list_controller.dart                        5 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart                  5 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart                   5 import 'package:customer/service/fire_store_utils.dart';                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_category_product_controller.dart                3 import 'package:customer/service/fire_store_utils.dart';                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                        19 import '../screen_ui/parcel_service/parcel_order_confirmation.dart';             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                        20 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                        39 import 'package:customer/service/fire_store_utils.dart';                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                        54 import '../screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                       447           serviceType: Constant.parcelServiceType,                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                      1239       "customizations": {"title": "Payment for Services", "description": "Paym...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_coupon_code_controller.dart                     2 import 'package:customer/service/fire_store_utils.dart';                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart                       2 import 'package:customer/screen_ui/cab_service_screens/cab_home_screen.dart';    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart                       3 import 'package:customer/screen_ui/multi_vendor_service/profile_screen/profile...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart                       4 import 'package:customer/screen_ui/multi_vendor_service/wallet_screen/wallet_s...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart                       6 import '../screen_ui/cab_service_screens/my_cab_booking_screen.dart';            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_home_controller.dart                            2 import 'package:customer/service/fire_store_utils.dart';                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_order_details_controller.dart                  11 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart               2 import 'package:customer/screen_ui/multi_vendor_service/profile_screen/profile...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart               3 import 'package:customer/screen_ui/multi_vendor_service/wallet_screen/wallet_s...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart               4 import 'package:customer/screen_ui/rental_service/rental_home_screen.dart';      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart               6 import '../screen_ui/rental_service/my_rental_booking_screen.dart';              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_review_controller.dart                          8 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                               52 import '../screen_ui/multi_vendor_service/cart_screen/oder_placing_screens.dart';
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                               53 import '../screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                               54 import '../service/cart_provider.dart';                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                               55 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                               56 import '../service/send_notification.dart';                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                              180         if (Constant.sectionConstantModel?.serviceType == 'Ecommerce Service') { 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                              813       "customizations": {"title": "Payment for Services", "description": "Paym...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cashback_controller.dart                            3 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart                 5 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\change_language_controller.dart                     3 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\chat_controller.dart                                8 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\chat_controller.dart                               12 import '../service/send_notification.dart';                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\complain_controller.dart                            4 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                          2 import '../screen_ui/multi_vendor_service/favourite_screens/favourite_screen.d...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                          3 import '../screen_ui/multi_vendor_service/home_screen/home_screen.dart';         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                          4 import '../screen_ui/multi_vendor_service/home_screen/home_screen_two.dart';     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                          5 import '../screen_ui/multi_vendor_service/order_list_screen/order_screen.dart';  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                          6 import '../screen_ui/multi_vendor_service/profile_screen/profile_screen.dart';   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                          7 import '../screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_ecommarce_controller.dart                3 import '../screen_ui/multi_vendor_service/favourite_screens/favourite_screen.d...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_ecommarce_controller.dart                4 import '../screen_ui/multi_vendor_service/order_list_screen/order_screen.dart';  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_ecommarce_controller.dart                5 import '../screen_ui/multi_vendor_service/profile_screen/profile_screen.dart';   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_ecommarce_controller.dart                6 import '../screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_booking_controller.dart                     2 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart                             8 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart          7 import '../screen_ui/multi_vendor_service/dine_in_booking/dine_in_booking_scre...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart          8 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart         13 import '../service/send_notification.dart';                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\edit_profile_controller.dart                        4 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\edit_profile_controller.dart                        6 import 'package:flutter/services.dart';                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\enter_manually_location_controller.dart             1 import 'package:customer/service/fire_store_utils.dart';                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart                           9 import '../service/fire_store_utils.dart';                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                 3 import 'package:customer/models/favorite_ondemand_service_model.dart';           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                 6 import 'package:customer/service/fire_store_utils.dart';                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                13   RxList<FavouriteOndemandServiceModel> lstFav = <FavouriteOndemandServiceMode...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                28     await FireStoreUtils.getFavouritesServiceList(FireStoreUtils.getCurrentUid...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                34   void toggleFavourite(ProviderServiceModel provider) {                          



```

## Pattern: services

```text

Path                                                                                                                                                           LineNumber Line                                                                  
----                                                                                                                                                           ---------- ----                                                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\collection_name.dart                                             47   static const String providersServices = 'providers_services';       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                                    19 import 'package:flutter/services.dart';                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart                            446       "customizations": {"title": "Payment for Services", "descript...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                                 1239       "customizations": {"title": "Payment for Services", "descript...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                                         813       "customizations": {"title": "Payment for Services", "descript...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\edit_profile_controller.dart                                   6 import 'package:flutter/services.dart';                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\gift_card_controller.dart                                    454       "customizations": {"title": "Payment for Services", "descript...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                              1242       "customizations": {"title": "Payment for Services", "descript...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart                               488       "customizations": {"title": "Payment for Services", "descript...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                                40     // Fetch provider services                                        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart                    520       "customizations": {"title": "Payment for Services", "descript...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rate_product_controller.dart                                  13 import 'package:flutter/services.dart';                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart                         525       "customizations": {"title": "Payment for Services", "descript...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\wallet_controller.dart                                       339       "customizations": {"title": "Payment for Services", "descript...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                                          28   'Sign up to explore all our services and start shopping, riding, ...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                                          76   'Explore Our Services': 'استكشف خدماتنا',                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                                         211   'Allow location access to discover beauty stores and services nea...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                                         568   'Favourite Services': 'الخدمات المفضلة',                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                                         580   'Services': 'الخدمات',                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                                         596   'Explore services': 'استكشف الخدمات',                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                                         597   'Explore services tailored for you—quick, easy, and personalized....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                                         608   'All Services': 'جميع الخدمات',                                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                                         610   'No Services Found': 'لم يتم العثور على خدمات',                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                                         631   'Most Popular services': 'الخدمات الأكثر شيوعًا',                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                                          28   'Sign up to explore all our services and start shopping, riding, ...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                                          76   'Explore Our Services': 'Explore Our Services',                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                                         565   'Favourite Services': 'Favourite Services',                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                                         577   'Services': 'Services',                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                                         593   'Explore services': 'Explore services',                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                                         594   'Explore services tailored for you—quick, easy, and personalized....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                                         605   'All Services': 'All Services',                                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                                         607   'No Services Found': 'No Services Found',                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                                         628   'Most Popular services': 'Most Popular services',                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                                         791   'Allow location access to discover beauty stores and services nea...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                           2142             .collection(CollectionName.providersServices)             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                           2147         collectionReference = fireStore.collection(CollectionName.p...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                           2190     await fireStore.collection(CollectionName.providersServices).wh...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                           2225           .collection(CollectionName.providersServices)               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                           2262             log('Error fetching provider services: $error');          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                           2541       final doc = await fireStore.collection(CollectionName.provide...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                           2565       await fireStore.collection(CollectionName.providersServices)....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                           2868         await fireStore.collection(CollectionName.providersServices...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\themes\text_field_widget.dart                                              2 import 'package:flutter/services.dart';                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\utils.dart                                                          15     // Test if location services are enabled.                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\utils.dart                                                          18       // Location services are not enabled don't continue             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\utils.dart                                                          20       // App to enable the location services.                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\auth_screens\mobile_login_screen.dart                            6 import 'package:flutter/services.dart';                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\auth_screens\sign_up_screen.dart                                 6 import 'package:flutter/services.dart';                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\auth_screens\sign_up_screen.dart                                57                       "Sign up to explore all our services and star...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\location_enable_screens\location_permission_screen.dart         50                     "Allow location access to discover beauty store...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\favourite_ondemand_screen.dart                35                   Text("Favourite Services".tr, style: TextStyle(fo...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_booking_screen.dart                 60                 // Services Section                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_booking_screen.dart                 61                 Text("Services".tr, style: AppThemeData.semiBoldTex...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_category_screen.dart                44                         Text("Explore services".tr, style: AppTheme...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_category_screen.dart                46                           "Explore services tailored for you—quick,...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_home_screen.dart                   264                                     "Most Popular services".tr,       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_home_screen.dart                   270                                     Get.to(() => ViewAllPopularServ...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_home_screen.dart                   278                               ? Center(child: Text("No Services Fou...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\provider_screen.dart                          89                             ? Center(child: Text("No Services Found...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\view_all_popular_service_screen.dart          11 class ViewAllPopularServiceScreen extends StatelessWidget {           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\view_all_popular_service_screen.dart          12   const ViewAllPopularServiceScreen({super.key});                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\view_all_popular_service_screen.dart          39                   Text("All Services".tr, style: AppThemeData.boldT...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\book_parcel_screen.dart                           8 import 'package:flutter/services.dart';                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_order_details_screen.dart                 12 import 'package:flutter/services.dart';                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart                    48                               Text("Explore Our Services".tr, style...



```

## Pattern: ServiceModel

```text

Path                                                                                                                                                    LineNumber Line                                                                         
----                                                                                                                                                    ---------- ----                                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                    13   RxList<FavouriteOndemandServiceModel> lstFav = <FavouriteOndemandService...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                    34   void toggleFavourite(ProviderServiceModel provider) {                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                    40         FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandSe...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                    49         FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandSe...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart                      18   Rxn<ProviderServiceModel> provider = Rxn<ProviderServiceModel>();          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart                      11   late ProviderServiceModel provider;                                        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart                      17   final RxList<FavouriteOndemandServiceModel> lstFav = <FavouriteOndemandS...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                         15   RxList<ProviderServiceModel> providerList = <ProviderServiceModel>[].obs;  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                         46           List<ProviderServiceModel> filteredProviders = [];                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                         49             List<ProviderServiceModel> filteredList = providerServiceList....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                         97   RxList<FavouriteOndemandServiceModel> lstFav = <FavouriteOndemandService...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                         99   void toggleFavourite(ProviderServiceModel provider) {                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                        105         FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandSe...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                        114         FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandSe...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart                       22   final Rxn<ProviderServiceModel> providerServiceModel = Rxn<ProviderServi...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart                       91       ProviderServiceModel? service = await FireStoreUtils.getCurrentProvi...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart                       93         providerServiceModel.value = service;                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart                      115     providerServiceModel.value!.reviewsCount = serviceReviewCount.value + 1; 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart                      116     providerServiceModel.value!.reviewsSum = serviceReviewSum.value + rati...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart                      138     await FireStoreUtils.updateProvider(providerServiceModel.value!);        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\provider_controller.dart                                8   RxList<ProviderServiceModel> providerList = <ProviderServiceModel>[].obs;  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_popular_service_controller.dart               10   RxList<ProviderServiceModel> providerList = <ProviderServiceModel>[].obs;  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_popular_service_controller.dart               11   RxList<ProviderServiceModel> allProviderList = <ProviderServiceModel>[]....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_popular_service_controller.dart               19   RxList<FavouriteOndemandServiceModel> lstFav = <FavouriteOndemandService...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_popular_service_controller.dart               35           List<ProviderServiceModel> filteredProviders = [];                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_popular_service_controller.dart               38             List<ProviderServiceModel> filteredList = providerServiceList....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_category_service_controller.dart                   9   RxList<ProviderServiceModel> providerList = <ProviderServiceModel>[].obs;  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_category_service_controller.dart                  29     List<ProviderServiceModel> providerServiceList = await FireStoreUtils....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_category_service_controller.dart                  34     List<ProviderServiceModel> filterByItemLimit = <ProviderServiceModel>[]; 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_category_service_controller.dart                  39         List<ProviderServiceModel> listofAllServiceByAuth = await FireStor...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\favorite_ondemand_service_model.dart                         1 class FavouriteOndemandServiceModel {                                        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\favorite_ondemand_service_model.dart                         7   FavouriteOndemandServiceModel({this.service_id, this.serviceAuthorId, th...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\favorite_ondemand_service_model.dart                         9   factory FavouriteOndemandServiceModel.fromJson(Map<String, dynamic> pars...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\favorite_ondemand_service_model.dart                        10     return FavouriteOndemandServiceModel(                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\onprovider_order_model.dart                                 11   ProviderServiceModel provider;                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\onprovider_order_model.dart                                 72        provider = provider ?? ProviderServiceModel(),                        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\onprovider_order_model.dart                                100       provider: parsedJson.containsKey('provider') ? ProviderServiceModel....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\provider_serivce_model.dart                                  4 class ProviderServiceModel {                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\provider_serivce_model.dart                                 36   ProviderServiceModel({                                                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\provider_serivce_model.dart                                 73   factory ProviderServiceModel.fromJson(Map<String, dynamic> parsedJson) {   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\provider_serivce_model.dart                                 74     return ProviderServiceModel(                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2134   static Future<List<ProviderServiceModel>> getProviderFuture({String cate...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2135     List<ProviderServiceModel> providerList = [];                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2160               ProviderServiceModel providerServiceModel = ProviderServiceM...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2163                 ":: isExpireDate(expiryDay :: ${Constant.isExpireDate(expi...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2167                 if (providerServiceModel.subscriptionPlan != null &&         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2168                     Constant.isExpireDate(expiryDay: (providerServiceModel...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2169                   if (providerServiceModel.subscriptionTotalOrders == "-1"...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2170                     providerList.add(providerServiceModel);                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2174                 providerList.add(providerServiceModel);                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2188   static Future<List<ProviderServiceModel>> getAllProviderServiceByAuthorI...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2189     List<ProviderServiceModel> providerService = [];                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2192         ProviderServiceModel orderModel = ProviderServiceModel.fromJson(el...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2220   static Future<List<ProviderServiceModel>> getProviderServiceByProviderId...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2221     List<ProviderServiceModel> providerList = [];                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2242               ProviderServiceModel providerServiceModel = ProviderServiceM...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2245                 ":: isExpireDate(expiryDay :: ${Constant.isExpireDate(expi...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2250                 if (providerServiceModel.subscriptionPlan != null &&         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2251                     Constant.isExpireDate(expiryDay: (providerServiceModel...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2252                   if (providerServiceModel.subscriptionTotalOrders == "-1"...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2253                     providerList.add(providerServiceModel);                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2257                 providerList.add(providerServiceModel);                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2282             CouponModel favouriteOndemandServiceModel = CouponModel.fromJs...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2283             offers.add(favouriteOndemandServiceModel);                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2301             CouponModel favouriteOndemandServiceModel = CouponModel.fromJs...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2302             coupon.add(favouriteOndemandServiceModel);                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2539   static Future<ProviderServiceModel?> getCurrentProvider(String uid) async {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2543         return ProviderServiceModel.fromJson(doc.data()!);                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2563   static Future<ProviderServiceModel?> updateProvider(ProviderServiceModel...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2831   static void removeFavouriteOndemandService(FavouriteOndemandServiceModel...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2841   static Future<void> setFavouriteOndemandSection(FavouriteOndemandService...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2847   static Future<List<FavouriteOndemandServiceModel>> getFavouritesServiceL...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2848     List<FavouriteOndemandServiceModel> lstFavourites = [];                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2855         lstFavourites.add(FavouriteOndemandServiceModel.fromJson(document....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2864   static Future<List<ProviderServiceModel>> getCurrentProviderService(Favo...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2865     List<ProviderServiceModel> providerService = [];                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                                    2871         providerService.add(ProviderServiceModel.fromJson(document.data())); 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\favourite_ondemand_screen.dart         85                                 return FutureBuilder<List<ProviderServiceM...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\favourite_ondemand_screen.dart        178                                 FutureBuilder<List<ProviderServiceModel>>(   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\favourite_ondemand_screen.dart        272   Widget _buildPrice(ProviderServiceModel provider, {bool isDark = false}) { 



```

## Pattern: section

```text

Path                                                                                                                                               LineNumber Line                                                                              
----                                                                                                                                               ---------- ----                                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\collection_name.dart                                  6   static const String sections = "sections";                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                        34 import '../models/section_model.dart';                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                        54   static SectionModel? sectionConstantModel;                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                        73   static List sectionColor = [                                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                       313     if (sectionConstantModel!.adminCommision!.isEnabled == true) {                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                       315         if (sectionConstantModel!.adminCommision!.commissionType!.toLowerCase()...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                       316             sectionConstantModel!.adminCommision!.commissionType?.toLowerCase()...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                       317           commission = (double.parse(price) + (double.parse(price) * double.par...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                       319           commission = (double.parse(price) + double.parse(sectionConstantModel...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                      259       sectionId: Constant.sectionConstantModel?.id ?? '',                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                      256           (Constant.sectionConstantModel?.markerIcon?.isNotEmpty ?? false)        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                      257               ? await Constant().getBytesFromUrl(Constant.sectionConstantModel!...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                      276                 imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                      293                 imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                      493         Constant.sectionConstantModel!.adminCommision != null && Constant.secti...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                      494             ? Constant.sectionConstantModel!.adminCommision!.commissionType.toS...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                      497         Constant.sectionConstantModel!.adminCommision != null && Constant.secti...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                      498             ? Constant.sectionConstantModel!.adminCommision!.amount.toString()    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                      508     orderModel.sectionId = Constant.sectionConstantModel!.id;                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             180         if (Constant.sectionConstantModel?.serviceType == 'Ecommerce Service') {  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             181           deliveryCharges.value = double.parse(Constant.sectionConstantModel?.d...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             197     if (Constant.sectionConstantModel?.packagingChargeEnable == true) {           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             200     if (Constant.sectionConstantModel?.platformFee?.enable == true) {             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             290     if (Constant.sectionConstantModel!.packagingChargeEnable == true && packagi...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             403     if ((Constant.isSubscriptionModelApplied == true || Constant.sectionConstan...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             431         Constant.sectionConstantModel?.adminCommision?.isEnabled == false         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             435             : Constant.sectionConstantModel?.adminCommision?.amount.toString();   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             437         Constant.sectionConstantModel?.adminCommision?.isEnabled == false         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             441             : Constant.sectionConstantModel?.adminCommision?.commissionType;      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             447     orderModel.sectionId = Constant.sectionConstantModel?.id;                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                             464     orderModel.packagingChargeEnable = Constant.sectionConstantModel?.packaging...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                        18     if (Constant.sectionConstantModel!.theme == "theme_2") {                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart               41           section_id: provider.sectionId,                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart               50           section_id: provider.sectionId,                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart               55         FireStoreUtils.setFavouriteOndemandSection(favouriteModel);               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                   267           (Constant.sectionConstantModel?.markerIcon?.isNotEmpty ?? false)        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                   268               ? await Constant().getBytesFromUrl(Constant.sectionConstantModel!...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                   287                 imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                   304                 imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                   498         Constant.sectionConstantModel!.adminCommision != null && Constant.secti...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                   499             ? Constant.sectionConstantModel!.adminCommision!.commissionType.toS...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                   502         Constant.sectionConstantModel!.adminCommision != null && Constant.secti...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                   503             ? Constant.sectionConstantModel!.adminCommision!.amount.toString()    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                   513     orderModel.sectionId = Constant.sectionConstantModel!.id;                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart                160           sectionId: Constant.sectionConstantModel!.id,                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart                171               Constant.sectionConstantModel?.adminCommision?.isEnabled == false...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart                173               Constant.sectionConstantModel?.adminCommision?.isEnabled == false   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart                175                   : providerUser?.adminCommissionModel?.commissionType ?? Const...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart                192           sectionId: Constant.sectionConstantModel!.id,                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart                202               Constant.sectionConstantModel?.adminCommision?.isEnabled == false...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart                204               Constant.sectionConstantModel?.adminCommision?.isEnabled == false   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart                206                   : providerUser?.adminCommissionModel?.commissionType ?? Const...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                    56               if (Constant.isSubscriptionModelApplied == true || Constant.secti...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                   106           section_id: provider.sectionId,                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                   115           section_id: provider.sectionId,                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                   120         FireStoreUtils.setFavouriteOndemandSection(favouriteModel);               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart        156       parcelOrder.value.adminCommission = Constant.sectionConstantModel?.adminC...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart        157       parcelOrder.value.adminCommissionType = Constant.sectionConstantModel?.ad...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart                      142     rentalOrderModel.sectionId = Constant.sectionConstantModel!.id;               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart                      153     rentalOrderModel.adminCommission = Constant.sectionConstantModel!.adminComm...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart                      154     rentalOrderModel.adminCommissionType = Constant.sectionConstantModel!.admin...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                       1 import 'package:customer/models/section_model.dart';                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      28   var sectionList = <SectionModel>[].obs;                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      45     // Load sections                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      46     List<SectionModel> sections = await FireStoreUtils.getSections();             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      48     sectionList.assignAll(sections);                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      50     await FireStoreUtils.getSectionBannerList().then((value) {                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      66   Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) as...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      69       Constant.sectionConstantModel = sectionModel;                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      70       AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceF...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      78           if (sectionModel.serviceType == 'Ecommerce Service') {                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      81           await _navigate(sectionModel);                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      88         await _navigate(sectionModel);                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      96   Future<void> _navigate(SectionModel sectionModel) async {                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      97     await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((va...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                     103         if (sectionModel.packagingChargeEnable == true) {                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                     106         if (sectionModel.platformFee?.enable == true) {                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                     107           Constant.platformFeeModel = sectionModel.platformFee;                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                     113     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.ser...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                     115         showAlertDialog(Get.context!, UserModel(), sectionModel);                 



```

## Pattern: home

```text

Path                                                                                                                                              LineNumber Line                                                                               
----                                                                                                                                              ---------- ----                                                                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\main.dart                                                   125         home: GetBuilder<GlobalSettingController>(                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart                     2 import 'package:customer/screen_ui/cab_service_screens/cab_home_screen.dart';      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart                    17       pageList.value = [CabHomeScreen(), const MyCabBookingScreen(), const Profi...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart                    19       pageList.value = [CabHomeScreen(), const MyCabBookingScreen(), const Walle...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_home_controller.dart                          5 class CabHomeController extends GetxController {                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_home_controller.dart                          7   RxList<BannerModel> bannerTopHome = <BannerModel>[].obs;                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_home_controller.dart                         17     await FireStoreUtils.getHomeTopBanner().then((value) {                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_home_controller.dart                         18       bannerTopHome.value = value;                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart             4 import 'package:customer/screen_ui/rental_service/rental_home_screen.dart';        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart            18       pageList.value = [RentalHomeScreen(), MyRentalBookingScreen(), const Profi...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart            20       pageList.value = [RentalHomeScreen(), MyRentalBookingScreen(), const Walle...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                        3 import '../screen_ui/multi_vendor_service/home_screen/home_screen.dart';           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                        4 import '../screen_ui/multi_vendor_service/home_screen/home_screen_two.dart';       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                       20         pageList.value = [const HomeScreen(), const FavouriteScreen(), const Ord...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                       22         pageList.value = [const HomeScreen(), const FavouriteScreen(), const Wal...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                       26         pageList.value = [const HomeScreenTwo(), const FavouriteScreen(), const ...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                       28         pageList.value = [const HomeScreenTwo(), const FavouriteScreen(), const ...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_ecommarce_controller.dart              2 import 'package:customer/screen_ui/ecommarce/home_e_commerce_screen.dart';         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_ecommarce_controller.dart             18       pageList.value = [const HomeECommerceScreen(), const FavouriteScreen(), co...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_ecommarce_controller.dart             20       pageList.value = [const HomeECommerceScreen(), const FavouriteScreen(), co...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart                          66     await FireStoreUtils.getHomeVendorCategory().then((value) {                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart                          70     await FireStoreUtils.getHomeBottomBanner().then((value) {                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\enter_manually_location_controller.dart          12   List saveAsList = ['Home', 'Work', 'Hotel', 'other'].obs;                        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\enter_manually_location_controller.dart          13   RxString selectedSaveAs = "Home".obs;                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\enter_manually_location_controller.dart          71       case 'Home':                                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\enter_manually_location_controller.dart          72         return 'Home'.tr;                                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart                        20 class FoodHomeController extends GetxController {                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart                        89       await FireStoreUtils.getHomeCoupon().then((value) {                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart                       145     await FireStoreUtils.getHomeVendorCategory().then((value) {                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart                       153     await FireStoreUtils.getHomeTopBanner().then((value) {                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart                       157     await FireStoreUtils.getHomeBottomBanner().then((value) {                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart                  15 class HomeECommerceController extends GetxController {                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart                 102     await FireStoreUtils.getHomeVendorCategory().then((value) {                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart                 105     await FireStoreUtils.getHomePageShowCategory().then((value) {                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart                 109     await FireStoreUtils.getHomeTopBanner().then((value) {                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart                 113     await FireStoreUtils.getHomeBottomBanner().then((value) {                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_parcel_controller.dart                       6 class HomeParcelController extends GetxController {                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_parcel_controller.dart                       9   RxList<BannerModel> bannerTopHome = <BannerModel>[].obs;                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_parcel_controller.dart                      23       await FireStoreUtils.getHomeTopBanner().then((value) {                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_parcel_controller.dart                      24         bannerTopHome.value = value;                                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_parcel_controller.dart                      33       bannerTopHome.clear();                                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                   61 class IntercityHomeController extends GetxController {                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\login_controller.dart                            12 import '../screen_ui/service_home_screen/service_list_screen.dart';                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart                          9 import 'food_home_controller.dart';                                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart                         16   FoodHomeController homeController = Get.find<FoodHomeController>();              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart                         37       for (var element in homeController.allNearestRestaurant) {                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart                         64       for (var element in homeController.allNearestRestaurant) {                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart                         94           int index = homeController.allNearestRestaurant.indexWhere(              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart                        100               "vendorModel": homeController.allNearestRestaurant[index],           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_dashboard_controller.dart               8 import '../screen_ui/on_demand_service/on_demand_home_screen.dart';                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_dashboard_controller.dart              18       pageList.value = [OnDemandHomeScreen(), FavouriteOndemandScreen(), const M...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_dashboard_controller.dart              20       pageList.value = [OnDemandHomeScreen(), FavouriteOndemandScreen(), const M...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                   11 class OnDemandHomeController extends GetxController {                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                   13   RxList<BannerModel> bannerTopHome = <BannerModel>[].obs;                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                   31     FireStoreUtils.getHomeTopBanner().then((value) {                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                   32       bannerTopHome.value = value;                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\otp_verification_controller.dart                 10 import '../screen_ui/service_home_screen/service_list_screen.dart';                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_dashboard_controller.dart                  4 import 'package:customer/screen_ui/parcel_service/home_parcel_screen.dart';        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_dashboard_controller.dart                 16       pageList.value = [const HomeParcelScreen(), const MyBookingScreen(), const...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_dashboard_controller.dart                 18       pageList.value = [const HomeParcelScreen(), const MyBookingScreen(), const...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\provider_controller.dart                          1 import 'package:customer/controllers/on_demand_home_controller.dart';              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\provider_controller.dart                         13   Rx<OnDemandHomeController> onDemandHomeController = Get.put(OnDemandHomeContro...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart                      36 class RentalHomeController extends GetxController {                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\sign_up_controller.dart                          12 import '../screen_ui/service_home_screen/service_list_screen.dart';                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\splash_controller.dart                            8 import 'package:customer/screen_ui/service_home_screen/service_list_screen.dart';  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_popular_service_controller.dart          2 import 'package:customer/controllers/on_demand_home_controller.dart';              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_popular_service_controller.dart         13   Rx<OnDemandHomeController> onDemandHomeController = Get.find<OnDemandHomeContr...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_popular_service_controller.dart         15   final OnDemandHomeController onDemandController = Get.find<OnDemandHomeControl...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_category_service_controller.dart             2 import 'package:customer/controllers/on_demand_home_controller.dart';              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_category_service_controller.dart            12   Rx<OnDemandHomeController> onDemandHomeController = Get.find<OnDemandHomeContr...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart                                             82   'Home': 'الرئيسية',                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart                                             82   'Home': 'Home',                                                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                               277     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").ge...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                               478   static Future<List<VendorCategoryModel>> getHomeVendorCategory() async {         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                               483         .where("show_in_homepage", isEqualTo: true)                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                               517   static Future<List<BannerModel>> getHomeBottomBanner() async {                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                               528             BannerModel bannerHome = BannerModel.fromJson(element.data());         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                               529             bannerList.add(bannerHome);                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                               539         BrandsModel bannerHome = BrandsModel.fromJson(element.data());             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                               540         brandList.add(bannerHome);                                                 



```

## Pattern: HomeScreen

```text

Path                                                                                                                                                  LineNumber Line                                                                           
----                                                                                                                                                  ---------- ----                                                                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart                        17       pageList.value = [CabHomeScreen(), const MyCabBookingScreen(), const P...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart                        19       pageList.value = [CabHomeScreen(), const MyCabBookingScreen(), const W...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart                18       pageList.value = [RentalHomeScreen(), MyRentalBookingScreen(), const P...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart                20       pageList.value = [RentalHomeScreen(), MyRentalBookingScreen(), const W...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                           20         pageList.value = [const HomeScreen(), const FavouriteScreen(), const...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                           22         pageList.value = [const HomeScreen(), const FavouriteScreen(), const...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                           26         pageList.value = [const HomeScreenTwo(), const FavouriteScreen(), co...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_controller.dart                           28         pageList.value = [const HomeScreenTwo(), const FavouriteScreen(), co...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_dashboard_controller.dart                  18       pageList.value = [OnDemandHomeScreen(), FavouriteOndemandScreen(), con...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_dashboard_controller.dart                  20       pageList.value = [OnDemandHomeScreen(), FavouriteOndemandScreen(), con...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_home_screen.dart               17 class CabHomeScreen extends StatelessWidget {                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_home_screen.dart               18   const CabHomeScreen({super.key});                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_home_screen.dart              112                                         Get.to(() => IntercityHomeScreen());   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\Intercity_home_screen.dart         37 class IntercityHomeScreen extends StatelessWidget {                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\Intercity_home_screen.dart         38   const IntercityHomeScreen({super.key});                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_home_screen.dart           30 class OnDemandHomeScreen extends StatelessWidget {                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_home_screen.dart           31   const OnDemandHomeScreen({super.key});                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_home_screen.dart                 24 class RentalHomeScreen extends StatelessWidget {                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_home_screen.dart                 25   const RentalHomeScreen({super.key});                                         



```

## Pattern: collection

```text

Path                                                                                                                                      LineNumber Line                                                                                       
----                                                                                                                                      ---------- ----                                                                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\collection_name.dart                         1 class CollectionName {                                                                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart               8 import 'package:customer/constant/collection_name.dart';                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart             134     FireStoreUtils.fireStore.collection(CollectionName.users).doc(FireStoreUtils.getCurr...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart             143           final rideDoc = await FireStoreUtils.fireStore.collection(CollectionName.rides...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart             151         FireStoreUtils.fireStore.collection(CollectionName.rides).doc(validRideId).snaps...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart             159             FireStoreUtils.fireStore.collection(CollectionName.users).doc(currentOrder.v...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_review_controller.dart                5 import '../constant/collection_name.dart';                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_review_controller.dart              104       final docRef = FireStoreUtils.fireStore.collection(CollectionName.itemsReview).doc();
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\change_language_controller.dart           7 import '../constant/collection_name.dart';                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\change_language_controller.dart          23     await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("languages")....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart                 3 import 'package:customer/constant/collection_name.dart';                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart                71             await FireStoreUtils.fireStore.collection(CollectionName.vendors).doc(value....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\global_setting_controller.dart            8 import '../constant/collection_name.dart';                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\global_setting_controller.dart           21     FireStoreUtils.fireStore.collection(CollectionName.currencies).where("isActive", isE...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart            9 import 'package:customer/constant/collection_name.dart';                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart          145     FireStoreUtils.fireStore.collection(CollectionName.users).doc(FireStoreUtils.getCurr...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart          154           final rideDoc = await FireStoreUtils.fireStore.collection(CollectionName.rides...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart          162         FireStoreUtils.fireStore.collection(CollectionName.rides).doc(validRideId).snaps...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart          170             FireStoreUtils.fireStore.collection(CollectionName.users).doc(currentOrder.v...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\live_tracking_controller.dart             3 import 'package:customer/constant/collection_name.dart';                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\live_tracking_controller.dart            62     orderSub = FireStoreUtils.fireStore.collection(CollectionName.vendorOrders).doc(orde...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\live_tracking_controller.dart            68         driverSub = FireStoreUtils.fireStore.collection(CollectionName.users).doc(orderM...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart          4 import '../constant/collection_name.dart';                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart        123       id: ratingModel.value?.id ?? firestore.collection(CollectionName.itemsReview).doc(...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart        150       id: ratingModel.value?.id ?? firestore.collection(CollectionName.itemsReview).doc(...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart             4 import '../constant/collection_name.dart';                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart           108       final docRef = FireStoreUtils.fireStore.collection(CollectionName.itemsReview).doc();
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\xenditModel.dart                            150   String? collectionType;                                                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\xenditModel.dart                            156   AvailableBanks({this.bankCode, this.collectionType, this.transferAmount, this.bankBran...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\xenditModel.dart                            160     collectionType = json['collection_type'];                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\xenditModel.dart                            170     data['collection_type'] = collectionType;                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                         6 import 'package:customer/constant/collection_name.dart';                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       120         .collection(CollectionName.users)                                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       140         .collection(CollectionName.users)                                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       159         .collection(CollectionName.providersWorkers)                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       177         .collection(CollectionName.users)                                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       193     await fireStore.collection(CollectionName.settings).doc('maintenance_settings').get(...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       203         .collection(CollectionName.onBoarding)                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       221         .collection(CollectionName.zone)                                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       238       await fireStore.collection(CollectionName.referral).doc(ratingModel.id).set(rating...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       249       await fireStore.collection(CollectionName.referral).where("referralCode", isEqualT...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       263     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(Colle...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       277     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       287     await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: tru...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       298         .collection(CollectionName.advertisements)                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       318     await fireStore.collection(CollectionName.favoriteVendor).where('user_id', isEqualTo...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       324     log("CollectionName.favoriteRestaurant :: ${favouriteList.length}");                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       330     await fireStore.collection(CollectionName.emailTemplates).where('type', isEqualTo: t...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       344           .collection(CollectionName.cashback)                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       367     return await fireStore.collection("chat_driver").doc(inboxModel.orderId).set(inboxMo...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       373     return await fireStore.collection("chat_driver").doc(conversationModel.orderId).coll...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       379     return await fireStore.collection("chat_store").doc(inboxModel.orderId).set(inboxMod...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       385     return await fireStore.collection("chat_store").doc(conversationModel.orderId).colle...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       391     return await fireStore.collection("chat_worker").doc(inboxModel.orderId).set(inboxMo...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       397     return await fireStore.collection("chat_worker").doc(conversationModel.orderId).coll...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       403     return await fireStore.collection("chat_provider").doc(inboxModel.orderId).set(inbox...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       409     return await fireStore.collection("chat_provider").doc(conversationModel.orderId).co...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       418         .collection(CollectionName.tax)                                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       441           .collection(CollectionName.bookedTable)                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       458           .collection(CollectionName.bookedTable)                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       481         .collection(CollectionName.vendorCategories)                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       501         .collection(CollectionName.vendorProducts)                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       520         .collection(CollectionName.bannerItems)                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       537     await fireStore.collection(CollectionName.brands).where("is_publish", isEqualTo: tru...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       549         .collection(CollectionName.bookedTable)                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       565     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(Colle...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       571     QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(Collection...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       583     await fireStore.collection(CollectionName.favoriteItem).where('user_id', isEqualTo: ...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       595       await fireStore.collection(CollectionName.vendors).doc(vendorId).get().then((value) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       610       await fireStore.collection(CollectionName.vendorProducts).doc(productId).get().the...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       624     QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(Colle...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       639         .collection(CollectionName.wallet)                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       654       final restaurantSnap = await fireStore.collection(CollectionName.settings).doc('ve...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       662       fireStore.collection(CollectionName.settings).doc("DriverNearBy").snapshots().list...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       670       final globalSettingsSnap = await fireStore.collection(CollectionName.settings).doc...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       683       fireStore.collection(CollectionName.settings).doc("googleMapKey").snapshots().list...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       688       fireStore.collection(CollectionName.settings).doc("placeHolderImage").snapshots()....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       694       fireStore.collection(CollectionName.settings).doc("notification_setting").snapshot...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       701       final cashbackSnap = await fireStore.collection(CollectionName.settings).doc("cash...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart                       709       final driverNearBySnap = await fireStore.collection(CollectionName.settings).doc("...



```

## Pattern: where

```text

Path                                                                                                                                                LineNumber Line                                                                             
----                                                                                                                                                ---------- ----                                                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart                 28           adsList.where(                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                       560       markers.removeWhere((marker) => marker.markerId == markerId);              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                       594     markers.removeWhere((marker) => marker.markerId == markerId);                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                       902       osmMarker.removeWhere((marker) => marker.point == departureLatLongOsm.va...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                       904       markers.removeWhere((marker) => marker.markerId.value == 'Departure');     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                       918       osmMarker.removeWhere((marker) => marker.point == destinationLatLongOsm....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                       920       markers.removeWhere((marker) => marker.markerId.value == 'Destination');   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart        166                     var contains = timeSlotList.where((element) => element.tim...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart        168                       var index = timeSlotList.indexWhere((element) => element...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart        179                     var contains = timeSlotList.where((element) => element.tim...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart                         114     return favouriteFoodList.where((food) {                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_controller.dart                         121     return favouriteFoodVendor.where((food) {                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                38       var contain = lstFav.where((element) => element.service_id == provider.id);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                47         lstFav.removeWhere((item) => item.service_id == provider.id);            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\favourite_ondemmand_controller.dart                66     CategoryModel? cat = categories.firstWhereOrNull((element) => element.id =...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart                         111         storyList.addAll(stories.where((story) => nearestIds.contains(story.ve...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart                         148         List<String> usedCategoryIds = Constant.restaurantList!.expand((vendor...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart                         149         vendorCategoryModel.value = vendorCategoryModel.where((category) => us...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\global_setting_controller.dart                     21     FireStoreUtils.fireStore.collection(CollectionName.currencies).where("isAc...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart                    67       List<String> usedCategoryIds = allNearestRestaurant.expand((vendor) => v...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart                    68       vendorCategoryModel.value = vendorCategoryModel.where((category) => used...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                    563       markers.removeWhere((marker) => marker.markerId == markerId);              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                    597     markers.removeWhere((marker) => marker.markerId == markerId);                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                    905       osmMarker.removeWhere((marker) => marker.point == departureLatLongOsm.va...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                    907       markers.removeWhere((marker) => marker.markerId.value == 'Departure');     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                    921       osmMarker.removeWhere((marker) => marker.point == destinationLatLongOsm....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart                    923       markers.removeWhere((marker) => marker.markerId.value == 'Destination');   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\login_controller.dart                              58             final defaultAddress = userModel.shippingAddress!.firstWhere((e) =...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\login_controller.dart                             118                     final defaultAddress = userModel.shippingAddress!.firstWhe...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\login_controller.dart                             184                     final defaultAddress = userModel.shippingAddress!.firstWhe...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\map_view_controller.dart                           94           int index = homeController.allNearestRestaurant.indexWhere(            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart               56         return orders.where((order) => ["Order Placed", "Order Accepted", "Ord...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart               59         return orders.where((order) => ["Order Completed"].contains(order.stat...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart               62         return orders.where((order) => ["Order Rejected", "Order Cancelled", "...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart                     95         return cabOrder.where((order) => ["Order Placed", "Driver Pending"].co...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart                     98         return cabOrder.where((order) => ["Driver Accepted", "Order Shipped", ...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart                    101         return cabOrder.where((order) => ["Order Completed"].contains(order.st...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart                    104         return cabOrder.where((order) => ["Order Rejected", "Order Cancelled",...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart                 163         return rentalOrders.where((order) => ["Order Placed", "Order Accepted"...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart                 166         return rentalOrders.where((order) => ["Driver Accepted", "Order Shippe...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart                 169         return rentalOrders.where((order) => ["Order Completed"].contains(orde...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart                 172         return rentalOrders.where((order) => ["Order Rejected", "Order Cancell...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                     49             List<ProviderServiceModel> filteredList = providerServiceList.wher...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                     88     CategoryModel? cat = categories.firstWhereOrNull((element) => element.id =...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                    103       var contain = lstFav.where((element) => element.service_id == provider.id);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart                    112         lstFav.removeWhere((item) => item.service_id == provider.id);            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\order_controller.dart                              29         rejectedList.value = allList.where((p0) => p0.status == Constant.order...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\order_controller.dart                              32                 .where(                                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\order_controller.dart                              37         deliveredList.value = allList.where((p0) => p0.status == Constant.orde...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\order_controller.dart                              38         cancelledList.value = allList.where((p0) => p0.status == Constant.orde...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\otp_verification_controller.dart                  106         final defaultAddress = userModel.shippingAddress!.firstWhere((e) => e....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart                  55         return parcelOrder.where((order) => ["Order Placed"].contains(order.st...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart                  58         return parcelOrder.where((order) => ["Order Accepted", "Driver Accepte...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart                  61         return parcelOrder.where((order) => ["Order Completed"].contains(order...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart                  64         return parcelOrder.where((order) => ["Order Rejected", "Order Cancelle...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart              148       return parcelCategory.firstWhere((cat) => cat.title?.toLowerCase().trim(...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                119     vendorCategoryList.value = vendorCategoryList.where((element) => seen.add(...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                129       productList.value = allProductList.where((p0) => p0.name!.toLowerCase()....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                136       productList.value = allProductList.where((p0) => p0.nonveg == true || p0...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                138       productList.value = allProductList.where((p0) => p0.nonveg == false).toL...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                140       productList.value = allProductList.where((p0) => p0.nonveg == true).toLi...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                142       productList.value = allProductList.where((p0) => p0.nonveg == true || p0...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                147     return productList.where((p0) => p0.categoryID == vendorCategoryModel.id)....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                222       if (productModel.itemAttribute!.variants!.where((element) => element.var...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                225           productModel.itemAttribute!.variants!.where((element) => element.var...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                279           (Constant.taxScope == "order" ? [] : Constant.taxProductList?.where(...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                293           (Constant.taxScope == "order" ? [] : Constant.taxProductList?.where(...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                       99         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      100         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxM...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      101         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => ta...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      104           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxMo...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart                      108           Constant.platformTaxList = value.where((TaxModel taxModel) => taxMod...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\sign_up_controller.dart                           105           if (userModel.value.shippingAddress!.where((element) => element.isDe...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\sign_up_controller.dart                           106             Constant.selectedLocation = userModel.value.shippingAddress!.where...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\sign_up_controller.dart                           146               if (userModel.value.shippingAddress!.where((element) => element....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\sign_up_controller.dart                           147                 Constant.selectedLocation = userModel.value.shippingAddress!.w...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\splash_controller.dart                             57                     if (userModel.shippingAddress!.where((element) => element....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\splash_controller.dart                             58                       Constant.selectedLocation = userModel.shippingAddress!.w...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart                  25       List<String> usedCategoryIds = Constant.restaurantList!.expand((vendor) ...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\view_all_category_controller.dart                  26       vendorCategoryModel.value = vendorCategoryModel.where((category) => used...



```

## Firestore / Constant Matches

```text

Path                                                                                                                                           LineNumber Line                                                                                                      
----                                                                                                                                           ---------- ----                                                                                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\main.dart                                                 63         debugShowCheckedModeBanner: false,                                                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\collection_name.dart                              1 class CollectionName {                                                                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\collection_name.dart                              6   static const String sections = "sections";                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\collection_name.dart                             21   static const String bannerItems = "banner_items";                                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\collection_name.dart                             26   static const String settings = "settings";                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\collection_name.dart                             30   static const String vendorCategories = "vendor_categories";                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                    42 class Constant {                                                                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                    51   static MailSettings? mailSettings;                                                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                    54   static SectionModel? sectionConstantModel;                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   185     for (var element in Constant.zoneList) {                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   186       if (Constant.isPointInPolygon(LatLng(latitude, longLatitude), element.area!)) {                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   198     for (var element in Constant.zoneList) {                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   199       if (Constant.isPointInPolygon(LatLng(latitude, longLatitude), element.area!)) {                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   313     if (sectionConstantModel!.adminCommision!.isEnabled == true) {                                        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   315         if (sectionConstantModel!.adminCommision!.commissionType!.toLowerCase() == "Percent".toLowerCas...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   316             sectionConstantModel!.adminCommision!.commissionType?.toLowerCase() == "Percentage".toLower...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   317           commission = (double.parse(price) + (double.parse(price) * double.parse(sectionConstantModel!...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   319           commission = (double.parse(price) + double.parse(sectionConstantModel!.adminCommision!.amount...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   579     mailSettings!.host.toString(),                                                                        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   580     username: mailSettings!.userName.toString(),                                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   581     password: mailSettings!.password.toString(),                                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   589     if (mailSettings == null) return;                                                                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   591       recipients!.add(mailSettings!.userName.toString());                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   595           ..from = Address(mailSettings!.userName.toString(), mailSettings!.fromName.toString())          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   693             productTaxAmount += Constant.calculateTax(amount: discountedItemAmount.toString(), taxModel...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   695             productTaxAmount += Constant.calculateTax(amount: discountedItemAmount.toString(), taxModel...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   704         orderTaxAmount += Constant.calculateTax(amount: (subTotal - totalDiscount).toString(), taxModel...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   720         driverDeliveryTaxAmount += Constant.calculateTax(amount: deliveryCharges.toString(), taxModel: ...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   727         packagingTaxAmount += Constant.calculateTax(amount: packagingCharge.toString(), taxModel: taxEl...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   734         platformTaxAmount += Constant.calculateTax(amount: platformFee.toString(), taxModel: taxElement); 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   764       newString = newString.replaceAll("{username}", "${Constant.userModel!.firstName} ${Constant.userM...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   876       newString = newString.replaceAll("{newwalletbalance}.", amountShow(amount: Constant.userModel!.wa...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   881       await sendMail(subject: subjectNewString, isAdmin: emailTemplateModel.isSendToAdmin, body: newStr...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart                                   958             return "${tax.title} (${Constant.amountShow(amount: tax.tax)})";                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart             16 import '../constant/constant.dart';                                                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart             69     getPaymentSettings();                                                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart             83       if (onDemandOrderModel.value?.status == Constant.orderPlaced) {                                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart             90           await SendNotification.sendFcmMessage(Constant.bookingPlaced, providerUser.fcmToken ?? '', pa...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart             97           id: Constant.getUuid(),                                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            127           id: Constant.getUuid(),                                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            149           id: Constant.getUuid(),                                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            193   Future<void> getPaymentSettings() async {                                                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            195     await FireStoreUtils.getPaymentSettingsData().then((value) {                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            196       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSetti...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            197       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSetti...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            201       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            202       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSe...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            203       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpa...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            204       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSett...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            205       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orange...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            206       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings))); 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            207       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferenc...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            208       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Pref...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            237       Stripe.instance.applySettings();                                                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            299         "shipping[name]": Constant.userModel?.fullName(),                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            334       "payer": {"email": Constant.userModel?.email},                                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            335       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            405       userModel: Constant.userModel!,                                                                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            443       "redirect_url": "${Constant.globalUrl}payment/success",                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            445       "customer": {"email": Constant.userModel?.email.toString(), "phonenumber": Constant.userModel?.ph...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            485     PayStackURLGen.getPayHTML(payFastSettingData: payFastModel.value, amount: amount.toString(), userMo...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            502     String getChecksum = "${Constant.globalUrl}payments/getpaytmchecksum";                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            563     String getChecksum = "${Constant.globalUrl}payments/validatechecksum";                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            574     String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart            617       'prefill': {'contact': Constant.userModel?.phoneNumber, 'email': Constant.userModel?.email},        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\address_list_controller.dart                   4 import '../constant/constant.dart';                                                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\address_list_controller.dart                  37         Constant.selectedLocation = shippingAddressList.first;                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart             1 import 'package:customer/constant/constant.dart';                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\advertisement_list_controller.dart            42     if (Constant.userModel != null) {                                                                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart              1 import 'package:customer/constant/constant.dart';                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart             36         if (Constant.isSubscriptionModelApplied == true || vendor.adminCommission?.isEnabled == true) {   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart             37           if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                   14 import '../constant/constant.dart';                                                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                   30   final Rx<TextEditingController> senderCountryCodeController = TextEditingController(text: Constant.de...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                   31   final Rx<TextEditingController> senderCountryISOCodeController = TextEditingController(text: Constant...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                   38   final Rx<TextEditingController> receiverCountryCodeController = TextEditingController(text: Constant....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                   39   final Rx<TextEditingController> receiverISOCountryCodeController = TextEditingController(text: Consta...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                  195       if (Constant.selectedMapType == 'osm') {                                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                  225       id: Constant.getUuid(),                                                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                  259       sectionId: Constant.sectionConstantModel?.id ?? '',                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                  260       taxSetting: Constant.orderProductTaxList,                                                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                  261       platformFee: Constant.platformFeeModel?.fee ?? '0.0',                                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                  262       platformTax: Constant.platformTaxList,                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                  293     final url = Uri.parse('https://maps.googleapis.com/maps/api/directions/json?origin=$origin&destinat...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                  307         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart                  332         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                    8 import 'package:customer/constant/collection_name.dart';                                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                    9 import 'package:customer/constant/constant.dart';                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  115     if (Constant.selectedMapType == 'osm') {                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  132     await getPaymentSettings();                                                                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  134     FireStoreUtils.fireStore.collection(CollectionName.users).doc(FireStoreUtils.getCurrentUid()).snaps...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  143           final rideDoc = await FireStoreUtils.fireStore.collection(CollectionName.rides).doc(id).get();  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  151         FireStoreUtils.fireStore.collection(CollectionName.rides).doc(validRideId).snapshots().listen((...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  158           if (status == Constant.driverAccepted || status == Constant.orderInTransit) {                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  159             FireStoreUtils.fireStore.collection(CollectionName.users).doc(currentOrder.value.driverId)....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  169           if (status == Constant.orderPlaced || status == Constant.driverPending || status == Constant....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  171           } else if (status == Constant.driverAccepted || status == Constant.orderInTransit) {            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  177           } else if (status == Constant.orderCompleted) {                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  186         if (Constant.currentLocation != null) {                                                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  187           setDepartureMarker(Constant.currentLocation!.latitude, Constant.currentLocation!.longitude);    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  212       if (Constant.selectedMapType == 'osm') {                                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  216         if (order.status == Constant.driverAccepted) {                                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  219         } else if (order.status == Constant.orderInTransit) {                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  226         if (order.status == Constant.driverAccepted) {                                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  228         } else if (order.status == Constant.orderInTransit) {                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  253       final departureBytes = await Constant().getBytesFromAsset('assets/images/location_black3x.png', 50);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  254       final destinationBytes = await Constant().getBytesFromAsset('assets/images/location_orange3x.png'...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  256           (Constant.sectionConstantModel?.markerIcon?.isNotEmpty ?? false)                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  257               ? await Constant().getBytesFromUrl(Constant.sectionConstantModel!.markerIcon!, width: 120)  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  258               : await Constant().getBytesFromAsset('assets/images/ic_cab.png', 50);                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  264       if (Constant.selectedMapType == 'osm') {                                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  265         if (order.status == Constant.driverAccepted) {                                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  276                 imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  277                 placeholder: (context, url) => Constant.loader(),                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  282         } else if (order.status == Constant.orderInTransit) {                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  293                 imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  294                 placeholder: (context, url) => Constant.loader(),                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  301         if (order.status == Constant.driverAccepted) {                                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  311         } else if (order.status == Constant.orderInTransit) {                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  336       '&mode=driving&key=${Constant.mapAPIKey}',                                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  374     for (var taxElement in Constant.orderProductTaxList ?? []) {                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  375       orderTaxAmount.value += Constant.calculateTax(amount: (subTotal.value - discount.value).toString(...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  379     if (double.parse(Constant.platformFeeModel?.fee ?? '0.0') > 0.0) {                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  380       for (var taxElement in Constant.platformTaxList ?? []) {                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  381         platformTaxAmount.value += Constant.calculateTax(amount: Constant.platformFeeModel?.fee ?? '0.0...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  386     totalAmount.value = (subTotal.value - discount.value) + double.parse(Constant.platformFeeModel?.fee...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  400       discount.value = Constant.calculateDiscount(amount: subTotal.value.toString(), offerModel: select...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  403     for (var taxElement in Constant.orderProductTaxList ?? []) {                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  404       orderTaxAmount.value += Constant.calculateTax(amount: (subTotal.value - discount.value).toString(...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  408     if (double.parse(Constant.platformFeeModel?.fee ?? '0.0') > 0.0) {                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  409       for (var taxElement in Constant.platformTaxList ?? []) {                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  410         platformTaxAmount.value += Constant.calculateTax(amount: Constant.platformFeeModel?.fee ?? '0.0...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  415     totalAmount.value = (subTotal.value - discount.value) + double.parse(Constant.platformFeeModel?.fee...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  437           id: Constant.getUuid(),                                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  447           serviceType: Constant.parcelServiceType,                                                        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  466       latitude: Constant.selectedMapType == 'osm' ? departureLatLongOsm.value.latitude : departureLatLo...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  467       longitude: Constant.selectedMapType == 'osm' ? departureLatLongOsm.value.longitude : departureLat...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  471       latitude: Constant.selectedMapType == 'osm' ? destinationLatLongOsm.value.latitude : destinationL...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  472       longitude: Constant.selectedMapType == 'osm' ? destinationLatLongOsm.value.longitude : destinatio...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  493         Constant.sectionConstantModel!.adminCommision != null && Constant.sectionConstantModel!.adminCo...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  494             ? Constant.sectionConstantModel!.adminCommision!.commissionType.toString()                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  497         Constant.sectionConstantModel!.adminCommision != null && Constant.sectionConstantModel!.adminCo...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  498             ? Constant.sectionConstantModel!.adminCommision!.amount.toString()                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  508     orderModel.sectionId = Constant.sectionConstantModel!.id;                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  511     orderModel.status = Constant.orderPlaced;                                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  513     orderModel.taxSetting = Constant.orderProductTaxList;                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  514     orderModel.platformFee = Constant.platformFeeModel?.fee;                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  515     orderModel.platformTax = Constant.platformTaxList;                                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  536     if (Constant.selectedMapType == 'osm') {                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  544     if (Constant.selectedMapType == 'osm') {                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  552     if (Constant.selectedMapType == 'osm') {                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  609     if (Constant.selectedMapType == 'osm') {                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  652       '&mode=driving&key=${Constant.mapAPIKey}',                                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  679         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  712         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {                                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  854       if (Constant.selectedMapType == 'osm') {                                                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  901     if (Constant.selectedMapType == 'osm') {                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  917     if (Constant.selectedMapType == 'osm') {                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  943     final url = Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Con...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  984   Future<void> getPaymentSettings() async {                                                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  985     await FireStoreUtils.getPaymentSettingsData().then((value) {                                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  986       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSetti...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  987       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSetti...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  991       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  992       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSe...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  993       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpa...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  994       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSett...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  995       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orange...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  996       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings))); 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  997       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferenc...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                  998       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Pref...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                 1027       Stripe.instance.applySettings();                                                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                 1124       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                 1232       "redirect_url": "${Constant.globalUrl}payment/success",                                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                 1295     // String getChecksum = "${Constant.globalUrl}payments/getpaytmchecksum";                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                 1356     String getChecksum = "${Constant.globalUrl}payments/validatechecksum";                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart                 1367     String initiateURL = "${Constant.globalUrl}payments/initiatepaytmpayment";                            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart                  1 import 'package:customer/constant/constant.dart';                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart                 16     if (Constant.walletSetting == false) {                                                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_home_controller.dart                       1 import 'package:customer/models/banner_model.dart';                                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_home_controller.dart                       7   RxList<BannerModel> bannerTopHome = <BannerModel>[].obs;                                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_home_controller.dart                      17     await FireStoreUtils.getHomeTopBanner().then((value) {                                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_home_controller.dart                      18       bannerTopHome.value = value;                                                                        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_order_details_controller.dart              2 import 'package:customer/constant/constant.dart';                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_order_details_controller.dart             28   final String googleApiKey = Constant.mapAPIKey;                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_order_details_controller.dart             86       orderTaxAmount.value += Constant.calculateTax(amount: (subTotal.value - discount.value).toString(...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_order_details_controller.dart             92         platformTaxAmount.value += Constant.calculateTax(amount: cabOrder.value.platformFee ?? '0.0', t...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart          1 import 'package:customer/constant/constant.dart';                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart         17     if (Constant.walletSetting == false) {                                                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_review_controller.dart                     5 import '../constant/collection_name.dart';                                                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_review_controller.dart                     9 import '../constant/constant.dart';                                                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_review_controller.dart                    93         uname: "${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}",            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_review_controller.dart                    94         profile: Constant.userModel?.profilePictureURL,                                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_review_controller.dart                   104       final docRef = FireStoreUtils.fireStore.collection(CollectionName.itemsReview).doc();               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_review_controller.dart                   112         customerId: Constant.userModel?.id,                                                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_review_controller.dart                   113         uname: "${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}",            
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_review_controller.dart                   114         profile: Constant.userModel?.profilePictureURL,                                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                           7 import 'package:customer/constant/constant.dart';                                                         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         107     selectedAddress.value = Constant.selectedLocation;                                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         109     getPaymentSettings();                                                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         173           Constant.getDistance(                                                                           
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         180         if (Constant.sectionConstantModel?.serviceType == 'Ecommerce Service') {                          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         181           deliveryCharges.value = double.parse(Constant.sectionConstantModel?.deliveryCharge ?? '0.0');   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         182         } else if (vendorModel.value.isSelfDelivery == true && Constant.isSelfDeliveryFeature == true) {  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         197     if (Constant.sectionConstantModel?.packagingChargeEnable == true) {                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         200     if (Constant.sectionConstantModel?.platformFee?.enable == true) {                                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         201       platformFee.value = Constant.calculatePlatFormMeModel(platFromFeeModel: Constant.platformFeeModel); 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         204     log("TaxScope :: ${Constant.taxScope}");                                                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         218       couponAmount.value = Constant.calculateDiscount(amount: subTotal.value.toString(), offerModel: se...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         222     if (vendorModel.value.specialDiscountEnable == true && Constant.specialDiscountOffer == true) {       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         255     if (Constant.taxScope == "product") {                                                                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         267             productTaxAmount.value += Constant.calculateTax(amount: discountedItemAmount.toString(), ta...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         269             productTaxAmount.value += Constant.calculateTax(amount: discountedItemAmount.toString(), ta...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         276     if (Constant.taxScope == "order") {                                                                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         277       for (var taxElement in Constant.orderProductTaxList ?? []) {                                        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         278         orderTaxAmount.value += Constant.calculateTax(amount: (subTotal.value - totalDiscount).toString...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         284       for (var taxElement in Constant.driverDeliveryTaxList ?? []) {                                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         285         driverDeliveryTaxAmount.value += Constant.calculateTax(amount: deliveryCharges.value.toString()...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         290     if (Constant.sectionConstantModel!.packagingChargeEnable == true && packagingCharge.value > 0) {      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                         291       for (var taxElement in Constant.packagingTaxList ?? []) {                                           



```

## Home Files Context


### C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart

```dart
1: const Map<String, String> arAR = {
2:   'Letâ€™s Get Started': 'Ù„Ù†Ø¨Ø¯Ø£',
3:   'Skip': 'ØªØ®Ø·ÙŠ',
4:   'Next': 'Ø§Ù„ØªØ§Ù„ÙŠ',
5:   'Log in to explore your all in one vendor app favourites and shop effortlessly.': 'Ù‚Ù… Ø¨ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ù„Ø§Ø³ØªÙƒØ´Ø§Ù Ù…ÙØ¶Ù„Ø§ØªÙƒ ÙÙŠ ØªØ·Ø¨ÙŠÙ‚ Ø§Ù„Ø¨Ø§Ø¦Ø¹ Ø§Ù„Ø´Ø§Ù…Ù„ ÙˆØ§Ù„ØªØ³ÙˆÙ‚ Ø¨Ø³Ù‡ÙˆÙ„Ø©.',
6:   'Email Address*': 'Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ*',
7:   'jerome014@gmail.com': 'jerome014@gmail.com',
8:   'Password*': 'ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±*',
9:   'Enter password': 'Ø£Ø¯Ø®Ù„ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±',
10:   'Forgot Password': 'Ù‡Ù„ Ù†Ø³ÙŠØª ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±ØŸ',
11:   'Log in': 'ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„',
12:   'or continue with': 'Ø£Ùˆ Ø§Ù„Ù…ØªØ§Ø¨Ø¹Ø© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù…',
13:   'Mobile number': 'Ø±Ù‚Ù… Ø§Ù„Ø¬ÙˆØ§Ù„',
14:   'with Google': 'Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¬ÙˆØ¬Ù„',
15:   'with Apple': 'Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¢Ø¨Ù„',
16:   "Didn't have an account? ": 'Ù„ÙŠØ³ Ù„Ø¯ÙŠÙƒ Ø­Ø³Ø§Ø¨ØŸ ',
17:   'Sign up': 'Ø¥Ù†Ø´Ø§Ø¡ Ø­Ø³Ø§Ø¨',
18:   'Please enter a valid email address': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø¹Ù†ÙˆØ§Ù† Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØµØ§Ù„Ø­',
19:   'Please enter your password': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±',
20:   'Logging in...': 'Ø¬Ø§Ø±Ù ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„...',
21:   'This user is disabled. Please contact admin.': 'ØªÙ… ØªØ¹Ø·ÙŠÙ„ Ù‡Ø°Ø§ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…. ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©.',
22:   'This user does not exist in the customer app.': 'Ù‡Ø°Ø§ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯ ÙÙŠ ØªØ·Ø¨ÙŠÙ‚ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡.',
23:   'No user found for that email.': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ù…Ø³ØªØ®Ø¯Ù… Ø¨Ù‡Ø°Ø§ Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ.',
24:   'Wrong password provided.': 'ØªÙ… Ø¥Ø¯Ø®Ø§Ù„ ÙƒÙ„Ù…Ø© Ù…Ø±ÙˆØ± ØºÙŠØ± ØµØ­ÙŠØ­Ø©.',
25:   'Invalid email.': 'Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØºÙŠØ± ØµØ§Ù„Ø­.',
26:   'Login failed. Please try again.': 'ÙØ´Ù„ ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„. ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.',
27:   'please wait...': 'ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø§Ù†ØªØ¸Ø§Ø±...',
28:   'Sign up to explore all our services and start shopping, riding, and more.': 'Ù‚Ù… Ø¨Ø¥Ù†Ø´Ø§Ø¡ Ø­Ø³Ø§Ø¨ Ù„Ø§Ø³ØªÙƒØ´Ø§Ù Ø¬Ù…ÙŠØ¹ Ø®Ø¯Ù…Ø§ØªÙ†Ø§ ÙˆØ§Ø¨Ø¯Ø£ Ø§Ù„ØªØ³ÙˆÙ‚ ÙˆØ§Ù„ØªÙ†Ù‚Ù„ ÙˆØ§Ù„Ù…Ø²ÙŠØ¯.',
29:   'First Name*': 'Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø£ÙˆÙ„*',
30:   'Jerome': 'Ø¬ÙŠØ±ÙˆÙ…',
31:   'KM': 'ÙƒÙ…',
32:   'Last Name*': 'Ø§Ø³Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø©*',
33:   'Bell': 'Ø¨ÙŠÙ„',
34:   'Mobile Number*': 'Ø±Ù‚Ù… Ø§Ù„Ø¬ÙˆØ§Ù„*',
35:   'Enter Mobile number': 'Ø£Ø¯Ø®Ù„ Ø±Ù‚Ù… Ø§Ù„Ø¬ÙˆØ§Ù„',
36:   'Confirm Password*': 'ØªØ£ÙƒÙŠØ¯ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±*',
37:   'Enter confirm password': 'Ø£Ø¯Ø®Ù„ ØªØ£ÙƒÙŠØ¯ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±',
38:   'Referral Code': 'Ø±Ù…Ø² Ø§Ù„Ø¥Ø­Ø§Ù„Ø©',
39:   'Enter referral code': 'Ø£Ø¯Ø®Ù„ Ø±Ù…Ø² Ø§Ù„Ø¥Ø­Ø§Ù„Ø©',
40:   'Already have an account?': 'Ù‡Ù„ Ù„Ø¯ÙŠÙƒ Ø­Ø³Ø§Ø¨ Ø¨Ø§Ù„ÙØ¹Ù„ØŸ',
41:   'Creating account...': 'Ø¬Ø§Ø±Ù Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„Ø­Ø³Ø§Ø¨...',
42:   'signup_failed': 'ÙØ´Ù„ Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„Ø­Ø³Ø§Ø¨',
43:   'Please enter first name': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø£ÙˆÙ„',
44:   'Please enter last name': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø§Ø³Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø©',
45:   'Please enter a valid phone number': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø±Ù‚Ù… Ù‡Ø§ØªÙ ØµØ§Ù„Ø­',
46:   'Password must be at least 6 characters': 'ÙŠØ¬Ø¨ Ø£Ù† ØªÙƒÙˆÙ† ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ù…ÙƒÙˆÙ†Ø© Ù…Ù† 6 Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„',
47:   'Password and Confirm password do not match': 'ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± ÙˆØªØ£ÙƒÙŠØ¯ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± ØºÙŠØ± Ù…ØªØ·Ø§Ø¨Ù‚ÙŠÙ†',
48:   'Email already in use': 'Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ù…Ø³ØªØ®Ø¯Ù… Ø¨Ø§Ù„ÙØ¹Ù„',
49:   'Password is too weak': 'ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø¶Ø¹ÙŠÙØ© Ø¬Ø¯Ù‹Ø§',
50:   'Invalid email address': 'Ø¹Ù†ÙˆØ§Ù† Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØºÙŠØ± ØµØ§Ù„Ø­',
51:   'something_went_wrong': 'Ø­Ø¯Ø« Ø®Ø·Ø£ Ù…Ø§',
52:   'Enter your registered email to receive a reset link.': 'Ø£Ø¯Ø®Ù„ Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ø§Ù„Ù…Ø³Ø¬Ù„ Ù„ØªÙ„Ù‚ÙŠ Ø±Ø§Ø¨Ø· Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ¹ÙŠÙŠÙ†.',
53:   'Send Link': 'Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ø§Ø¨Ø·',
54:   'Remember Password?': 'ØªØªØ°ÙƒØ± ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±ØŸ',
55:   'Please enter your email address.': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø¹Ù†ÙˆØ§Ù† Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ.',
56:   'Please enter a valid email address.': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø¹Ù†ÙˆØ§Ù† Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØµØ§Ù„Ø­.',
57:   "reset_password_link_sent": "ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø±Ø§Ø¨Ø· Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹ÙŠÙŠÙ† ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø¥Ù„Ù‰ @email",
58:   'Use your mobile number to Log in easily and securely.': 'Ø§Ø³ØªØ®Ø¯Ù… Ø±Ù‚Ù… Ø¬ÙˆØ§Ù„Ùƒ Ù„ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¨Ø³Ù‡ÙˆÙ„Ø© ÙˆØ£Ù…Ø§Ù†.',
59:   'Send Code': 'Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ù…Ø²',
60:   'Email address': 'Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ',
61:   'Please enter a valid 10-digit mobile number': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø±Ù‚Ù… Ø¬ÙˆØ§Ù„ ØµØ§Ù„Ø­ Ù…ÙƒÙˆÙ† Ù…Ù† 10 Ø£Ø±Ù‚Ø§Ù…',
62:   'Sending OTP...': 'Ø¬Ø§Ø±Ù Ø¥Ø±Ø³Ø§Ù„ Ø±Ù…Ø² Ø§Ù„ØªØ­Ù‚Ù‚...',
63:   'Invalid phone number': 'Ø±Ù‚Ù… Ù‡Ø§ØªÙ ØºÙŠØ± ØµØ§Ù„Ø­',
64:   'OTP verification failed': 'ÙØ´Ù„ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø±Ù…Ø² OTP',
65:   'Something went wrong. Please try again.': 'Ø­Ø¯Ø« Ø®Ø·Ø£ Ù…Ø§. ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.',
66:   'Enter the OTP sent to your mobile': 'Ø£Ø¯Ø®Ù„ Ø±Ù…Ø² Ø§Ù„ØªØ­Ù‚Ù‚ Ø§Ù„Ù…Ø±Ø³Ù„ Ø¥Ù„Ù‰ Ø¬ÙˆØ§Ù„Ùƒ',
67:   'Resend OTP': 'Ø¥Ø¹Ø§Ø¯Ø© Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ù…Ø²',
68:   'Verify': 'ØªØ­Ù‚Ù‚',
69:   'OTP sent': 'ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ù…Ø²',
70:   'Enter valid 6-digit OTP': 'Ø£Ø¯Ø®Ù„ Ø±Ù…Ø² ØªØ­Ù‚Ù‚ ØµØ­ÙŠØ­ Ù…ÙƒÙˆÙ† Ù…Ù† 6 Ø£Ø±Ù‚Ø§Ù…',
71:   'Verifying OTP...': 'Ø¬Ø§Ø±Ù Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø±Ù…Ø²...',
72:   'This user is disabled': 'ØªÙ… ØªØ¹Ø·ÙŠÙ„ Ù‡Ø°Ø§ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…',
73:   'Invalid OTP or Verification Failed': 'Ø±Ù…Ø² ØªØ­Ù‚Ù‚ ØºÙŠØ± ØµØ§Ù„Ø­ Ø£Ùˆ ÙØ´Ù„ Ø§Ù„ØªØ­Ù‚Ù‚',
74:   'eMart': 'Ø¥ÙŠ Ù…Ø§Ø±Øª',
75:   'All Your Needs in One App!': 'ÙƒÙ„ Ø§Ø­ØªÙŠØ§Ø¬Ø§ØªÙƒ ÙÙŠ ØªØ·Ø¨ÙŠÙ‚ ÙˆØ§Ø­Ø¯!',
76:   'Explore Our Services': 'Ø§Ø³ØªÙƒØ´Ù Ø®Ø¯Ù…Ø§ØªÙ†Ø§',
77:   'Alert!': 'ØªÙ†Ø¨ÙŠÙ‡!',
78:   'Alert': 'ØªÙ†Ø¨ÙŠÙ‡',
79:   'If you select this Section/Service, your previously added items will be removed from the cart.': 'Ø¥Ø°Ø§ Ù‚Ù…Øª Ø¨Ø§Ø®ØªÙŠØ§Ø± Ù‡Ø°Ø§ Ø§Ù„Ù‚Ø³Ù…/Ø§Ù„Ø®Ø¯Ù…Ø©ØŒ Ø³ÙŠØªÙ… Ø¥Ø²Ø§Ù„Ø© Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø§Ù„ØªÙŠ Ø£Ø¶ÙØªÙ‡Ø§ Ù…Ø³Ø¨Ù‚Ù‹Ø§ Ù…Ù† Ø³Ù„Ø© Ø§Ù„ØªØ³ÙˆÙ‚.',
80:   'Cancel': 'Ø¥Ù„ØºØ§Ø¡',
81:   'OK': 'Ù…ÙˆØ§ÙÙ‚',
82:   'Home': 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©',
83:   'My Bookings': 'Ø­Ø¬ÙˆØ²Ø§ØªÙŠ',
84:   'Favourites': 'Ø§Ù„Ù…ÙØ¶Ù„Ø©',
85:   'Orders': 'Ø§Ù„Ø·Ù„Ø¨Ø§Øª',
86:   'Profile': 'Ø§Ù„Ù…Ù„Ù Ø§Ù„Ø´Ø®ØµÙŠ',
87:   'Wallet': 'Ø§Ù„Ù…Ø­ÙØ¸Ø©',
88:   'Service is unavailable at the selected address.': 'Ø§Ù„Ø®Ø¯Ù…Ø© ØºÙŠØ± Ù…ØªÙˆÙØ±Ø© ÙÙŠ Ø§Ù„Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ù…Ø­Ø¯Ø¯.',
89:   'Pickup Location': 'Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù…',
90:   'Destination Location': 'Ù…ÙˆÙ‚Ø¹ Ø§Ù„ÙˆØ¬Ù‡Ø©',
91:   'Continue': 'Ù…ØªØ§Ø¨Ø¹Ø©',
92:   'Please select source location': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø§Ù†Ø·Ù„Ø§Ù‚',
93:   'Please select destination location': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ù…ÙˆÙ‚Ø¹ Ø§Ù„ÙˆØ¬Ù‡Ø©',
94:   'Select Your Vehicle Type': 'Ø§Ø®ØªØ± Ù†ÙˆØ¹ Ø§Ù„Ù…Ø±ÙƒØ¨Ø©',
95:   "pay_amount": "Ø§Ø¯ÙØ¹ @amount",
96:   'Please select a vehicle type first.': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ù†ÙˆØ¹ Ø§Ù„Ù…Ø±ÙƒØ¨Ø© Ø£ÙˆÙ„Ø§Ù‹.',
97:   'Select Payment Method': 'Ø§Ø®ØªØ± Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹',
98:   'Preferred Payment': 'Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ù…ÙØ¶Ù„Ø©',
99:   'Other Payment Options': 'Ø®ÙŠØ§Ø±Ø§Øª Ø¯ÙØ¹ Ø£Ø®Ø±Ù‰',
100:   'Please select a payment method': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹',
101:   'Insufficient wallet balance. Please select another payment method.': 'Ø±ØµÙŠØ¯ Ø§Ù„Ù…Ø­ÙØ¸Ø© ØºÙŠØ± ÙƒØ§ÙÙ. ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ø·Ø±ÙŠÙ‚Ø© Ø¯ÙØ¹ Ø£Ø®Ø±Ù‰.',
102:   'Promo code': 'Ø±Ù…Ø² ØªØ±ÙˆÙŠØ¬ÙŠ',
103:   'Promo Code': 'Ø±Ù…Ø² ØªØ±ÙˆÙŠØ¬ÙŠ',
104:   'Apply promo code': 'ØªØ·Ø¨ÙŠÙ‚ Ø§Ù„Ø±Ù…Ø² Ø§Ù„ØªØ±ÙˆÙŠØ¬ÙŠ',
105:   'This offer not eligible for this booking': 'Ù‡Ø°Ø§ Ø§Ù„Ø¹Ø±Ø¶ ØºÙŠØ± ØµØ§Ù„Ø­ Ù„Ù‡Ø°Ø§ Ø§Ù„Ø­Ø¬Ø²',
106:   'View All': 'Ø¹Ø±Ø¶ Ø§Ù„ÙƒÙ„',
107:   'Write coupon Code': 'Ø§ÙƒØªØ¨ Ø±Ù…Ø² Ø§Ù„Ù‚Ø³ÙŠÙ…Ø©',
108:   'Redeem now': 'Ø§Ø³ØªØ±Ø¯ Ø§Ù„Ø¢Ù†',
109:   'Please enter a coupon code': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø±Ù…Ø² Ø§Ù„Ù‚Ø³ÙŠÙ…Ø©',
110:   'Coupon applied successfully': 'ØªÙ… ØªØ·Ø¨ÙŠÙ‚ Ø§Ù„Ù‚Ø³ÙŠÙ…Ø© Ø¨Ù†Ø¬Ø§Ø­',
111:   'This coupon code has been expired': 'Ø§Ù†ØªÙ‡Øª ØµÙ„Ø§Ø­ÙŠØ© Ø±Ù…Ø² Ø§Ù„Ù‚Ø³ÙŠÙ…Ø©',
112:   'Invalid coupon code': 'Ø±Ù…Ø² Ù‚Ø³ÙŠÙ…Ø© ØºÙŠØ± ØµØ§Ù„Ø­',
113:   'Order Summary': 'Ù…Ù„Ø®Øµ Ø§Ù„Ø·Ù„Ø¨',
114:   'Subtotal': 'Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹ Ø§Ù„ÙØ±Ø¹ÙŠ',
115:   'SubTotal': 'Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹ Ø§Ù„ÙØ±Ø¹ÙŠ',
116:   'Discount': 'Ø§Ù„Ø®ØµÙ…',
117:   'Order Total': 'Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ø·Ù„Ø¨',
118:   'Confirm Booking': 'ØªØ£ÙƒÙŠØ¯ Ø§Ù„Ø­Ø¬Ø²',
119:   'Waiting for driver....': 'ÙÙŠ Ø§Ù†ØªØ¸Ø§Ø± Ø§Ù„Ø³Ø§Ø¦Ù‚....',
120:   'Cancel Ride': 'Ø¥Ù„ØºØ§Ø¡ Ø§Ù„Ø±Ø­Ù„Ø©',
121:   'Ride cancelled successfully': 'ØªÙ… Ø¥Ù„ØºØ§Ø¡ Ø§Ù„Ø±Ø­Ù„Ø© Ø¨Ù†Ø¬Ø§Ø­',
122:   'Failed to cancel ride': 'ÙØ´Ù„ Ø¥Ù„ØºØ§Ø¡ Ø§Ù„Ø±Ø­Ù„Ø©',
123:   'Otp :': 'Ø±Ù…Ø² Ø§Ù„ØªØ­Ù‚Ù‚:',
124:   'SOS': 'Ù†Ø¬Ø¯Ø©',
125:   'Please wait...': 'ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø§Ù†ØªØ¸Ø§Ø±...',
126:   'Your SOS request has been submitted to admin': 'ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø·Ù„Ø¨ Ø§Ù„Ù†Ø¬Ø¯Ø© Ø¥Ù„Ù‰ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©',
127:   'Your SOS request is already submitted': 'ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø·Ù„Ø¨ Ø§Ù„Ù†Ø¬Ø¯Ø© Ø¨Ø§Ù„ÙØ¹Ù„',
128:   'Pay Now': 'Ø§Ø¯ÙØ¹ Ø§Ù„Ø¢Ù†',
129:   'Something went wrong, please contact admin.': 'Ø­Ø¯Ø« Ø®Ø·Ø£ Ù…Ø§ØŒ ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©.',
130:   'Please select payment method': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹',
131:   'Driver at Pickup': 'Ø§Ù„Ø³Ø§Ø¦Ù‚ ÙÙŠ Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù…',
132:   'Driver Location': 'Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø³Ø§Ø¦Ù‚',
133:   'Payment method changed': 'ØªÙ… ØªØºÙŠÙŠØ± Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹',
134:   'Payment successfully': 'ØªÙ… Ø§Ù„Ø¯ÙØ¹ Ø¨Ù†Ø¬Ø§Ø­',
135:   'Payment Successful!!': 'ØªÙ… Ø§Ù„Ø¯ÙØ¹ Ø¨Ù†Ø¬Ø§Ø­!!',
136:   'Payment UnSuccessful!!': 'ÙØ´Ù„ Ø§Ù„Ø¯ÙØ¹!!',
137:   'Payment Failed': 'ÙØ´Ù„ Ø§Ù„Ø¯ÙØ¹',
138:   'Payment Processing!! via': 'Ø¬Ø§Ø±Ù Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ø¯ÙØ¹!! Ø¹Ø¨Ø±',
139:   'Payment Failed!!': 'ÙØ´Ù„ Ø§Ù„Ø¯ÙØ¹!!',
140:   'Coupon': 'Ù‚Ø³ÙŠÙ…Ø©',
141:   'Coupon not found': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø§Ù„Ù‚Ø³ÙŠÙ…Ø©',
142:   'Tap To Apply': 'Ø§Ø¶ØºØ· Ù„Ù„ØªØ·Ø¨ÙŠÙ‚',
143:   'My Booking': 'Ø­Ø¬ÙˆØ²Ø§ØªÙŠ',
144:   'Login': 'ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„',
145:   'Where are you going for?': 'Ø¥Ù„Ù‰ Ø£ÙŠÙ† ØªØ±ÙŠØ¯ Ø§Ù„Ø°Ù‡Ø§Ø¨ØŸ',
146:   'Ride': 'Ø±Ø­Ù„Ø©',
147:   'City rides, 24x7 availability': 'Ø±Ø­Ù„Ø§Øª Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ø¯ÙŠÙ†Ø©ØŒ Ù…ØªØ§Ø­Ø© 24/7',
148:   'Intercity/Outstation': 'Ø¨ÙŠÙ† Ø§Ù„Ù…Ø¯Ù† / Ø®Ø§Ø±Ø¬ Ø§Ù„Ù…Ø¯ÙŠÙ†Ø©',
149:   'Long trips, prepaid options': 'Ø±Ø­Ù„Ø§Øª Ø·ÙˆÙŠÙ„Ø©ØŒ Ø®ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ù…Ø³Ø¨Ù‚',
150:   'Every Ride. Every Driver. Verified.': 'ÙƒÙ„ Ø±Ø­Ù„Ø©. ÙƒÙ„ Ø³Ø§Ø¦Ù‚. Ù…ÙˆØ«ÙˆÙ‚.',
151:   'All drivers go through ID checks and background verification for your safety.': 'Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø³Ø§Ø¦Ù‚ÙŠÙ† ÙŠØ®Ø¶Ø¹ÙˆÙ† Ù„ÙØ­ÙˆØµØ§Øª Ø§Ù„Ù‡ÙˆÙŠØ© ÙˆØ§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø®Ù„ÙÙŠØ© Ù„Ø¶Ù…Ø§Ù† Ø³Ù„Ø§Ù…ØªÙƒ.',
152:   'Ride Details': 'ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø±Ø­Ù„Ø©',
153:   'Order Id:': 'Ø±Ù‚Ù… Ø§Ù„Ø·Ù„Ø¨:',
154:   'Booking Date:': 'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø­Ø¬Ø²:',
155:   'Ride & Fare Summary': 'Ù…Ù„Ø®Øµ Ø§Ù„Ø±Ø­Ù„Ø© ÙˆØ§Ù„ØªÙƒÙ„ÙØ©',
156:   'Add Review': 'Ø¥Ø¶Ø§ÙØ© ØªÙ‚ÙŠÙŠÙ…',
157:   'Complain': 'Ø´ÙƒÙˆÙ‰',
158:   'Distance': 'Ø§Ù„Ù…Ø³Ø§ÙØ©',
159:   'Duration': 'Ø§Ù„Ù…Ø¯Ø©',
160:   'Update Review': 'ØªØ­Ø¯ÙŠØ« Ø§Ù„ØªÙ‚ÙŠÙŠÙ…',
161:   'How is your trip?': 'ÙƒÙŠÙ ÙƒØ§Ù†Øª Ø±Ø­Ù„ØªÙƒØŸ',
162:   'Your feedback will help us improve \n driving experience better': 'Ø³ØªØ³Ø§Ø¹Ø¯Ù†Ø§ Ù…Ù„Ø§Ø­Ø¸Ø§ØªÙƒ Ø¹Ù„Ù‰ ØªØ­Ø³ÙŠÙ† \n ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø¨Ø´ÙƒÙ„ Ø£ÙØ¶Ù„',
163:   'Rate for': 'Ù‚ÙŠÙ‘Ù…',
164:   'Type comment....': 'Ø§ÙƒØªØ¨ ØªØ¹Ù„ÙŠÙ‚....',
165:   'Please provide rating and comment': 'ÙŠØ±Ø¬Ù‰ ØªÙ‚Ø¯ÙŠÙ… Ø§Ù„ØªÙ‚ÙŠÙŠÙ… ÙˆØ§Ù„ØªØ¹Ù„ÙŠÙ‚',
166:   'Submit in...': 'Ø¥Ø±Ø³Ø§Ù„ Ø®Ù„Ø§Ù„...',
167:   'Title': 'Ø§Ù„Ø¹Ù†ÙˆØ§Ù†',
168:   'Save': 'Ø­ÙØ¸',
169:   'Type Description....': 'Ø§ÙƒØªØ¨ Ø§Ù„ÙˆØµÙ....',
170:   'Order data not found': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø·Ù„Ø¨',
171:   'Failed to load complaint': 'ÙØ´Ù„ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø´ÙƒÙˆÙ‰',
172:   'Please enter complaint title': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø´ÙƒÙˆÙ‰',
173:   'Please enter complaint description': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ ÙˆØµÙ Ø§Ù„Ø´ÙƒÙˆÙ‰',
174:   'Your complaint has been submitted to admin': 'ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø´ÙƒÙˆÙ‰ Ø¥Ù„Ù‰ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©',
175:   'Your complaint is already submitted': 'ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø´ÙƒÙˆÙ‰ Ø¨Ø§Ù„ÙØ¹Ù„',
176:   'Something went wrong, please try again': 'Ø­Ø¯Ø« Ø®Ø·Ø£ Ù…Ø§ØŒ ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰',
177:   'Popular Destinations': 'ÙˆØ¬Ù‡Ø§Øª Ø´Ø§Ø¦Ø¹Ø©',
178:   'Ride History': 'Ø³Ø¬Ù„ Ø§Ù„Ø±Ø­Ù„Ø§Øª',
179:   'No order found': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø·Ù„Ø¨',
180:   'You do not have sufficient wallet balance': 'Ù„ÙŠØ³ Ù„Ø¯ÙŠÙƒ Ø±ØµÙŠØ¯ ÙƒØ§ÙÙ ÙÙŠ Ø§Ù„Ù…Ø­ÙØ¸Ø©',
181:   "new_tab": "Ø¬Ø¯ÙŠØ¯",
182:   "on_going_tab": "Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°",
183:   "completed_tab": "Ù…ÙƒØªÙ…Ù„",
184:   "cancelled_tab": "Ù…Ù„ØºÙŠ",
185:   'New': 'Ø¬Ø¯ÙŠØ¯',
186:   'On Going': 'Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°',
187:   'Completed': 'Ù…ÙƒØªÙ…Ù„',
188:   'Cancelled': 'Ù…Ù„ØºÙŠ',
189:   'My Addresses': 'Ø¹Ù†Ø§ÙˆÙŠÙ†ÙŠ',
190:   'Allows users to view, manage, add, or edit delivery addresses': 'ÙŠØªÙŠØ­ Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ø¹Ø±Ø¶ ÙˆØ¥Ø¯Ø§Ø±Ø© ÙˆØ¥Ø¶Ø§ÙØ© Ø£Ùˆ ØªØ¹Ø¯ÙŠÙ„ Ø¹Ù†Ø§ÙˆÙŠÙ† Ø§Ù„ØªÙˆØµÙŠÙ„',
191:   'Address not found': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø¹Ù†ÙˆØ§Ù†',
192:   'Default': 'Ø§ÙØªØ±Ø§Ø¶ÙŠ',
193:   'Add New Address': 'Ø¥Ø¶Ø§ÙØ© Ø¹Ù†ÙˆØ§Ù† Ø¬Ø¯ÙŠØ¯',
194:   'Edit Address': 'ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ø¹Ù†ÙˆØ§Ù†',
195:   'Add a New Address': 'Ø¥Ø¶Ø§ÙØ© Ø¹Ù†ÙˆØ§Ù† Ø¬Ø¯ÙŠØ¯',
196:   'Enter your location details so we can deliver your orders quickly and accurately.': 'Ø£Ø¯Ø®Ù„ ØªÙØ§ØµÙŠÙ„ Ù…ÙˆÙ‚Ø¹Ùƒ Ø­ØªÙ‰ Ù†ØªÙ…ÙƒÙ† Ù…Ù† ØªÙˆØµÙŠÙ„ Ø·Ù„Ø¨Ø§ØªÙƒ Ø¨Ø³Ø±Ø¹Ø© ÙˆØ¯Ù‚Ø©.',
197:   'Set as Default Address': 'ØªØ¹ÙŠÙŠÙ† ÙƒØ¹Ù†ÙˆØ§Ù† Ø§ÙØªØ±Ø§Ø¶ÙŠ',
198:   'Choose Location': 'Ø§Ø®ØªØ± Ø§Ù„Ù…ÙˆÙ‚Ø¹',
199:   'Flat/House/Floor/Building*': 'Ø´Ù‚Ø©/Ù…Ù†Ø²Ù„/Ø·Ø§Ø¨Ù‚/Ù…Ø¨Ù†Ù‰*',
200:   'Area/Sector/Locality*': 'Ø§Ù„Ù…Ù†Ø·Ù‚Ø©/Ø§Ù„Ù‚Ø·Ø§Ø¹/Ø§Ù„Ø­ÙŠ*',
201:   'Nearby Landmark': 'Ù…Ø¹Ù„Ù… Ù‚Ø±ÙŠØ¨',
202:   'Save Address As': 'Ø­ÙØ¸ Ø§Ù„Ø¹Ù†ÙˆØ§Ù† Ø¨Ø§Ø³Ù…',
203:   'Enter address details': 'Ø£Ø¯Ø®Ù„ ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø¹Ù†ÙˆØ§Ù†',
204:   'Enter area/locality': 'Ø£Ø¯Ø®Ù„ Ø§Ù„Ù…Ù†Ø·Ù‚Ø© / Ø§Ù„Ø­ÙŠ',
205:   'Add a landmark': 'Ø£Ø¶Ù Ù…Ø¹Ù„Ù…Ù‹Ø§',
206:   'Save Address': 'Ø­ÙØ¸ Ø§Ù„Ø¹Ù†ÙˆØ§Ù†',
207:   'Please select Location': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù…ÙˆÙ‚Ø¹',
208:   'Please Enter Flat / House / Floor / Building': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø´Ù‚Ø© / Ù…Ù†Ø²Ù„ / Ø·Ø§Ø¨Ù‚ / Ù…Ø¨Ù†Ù‰',
209:   'Please Enter Area / Sector / Locality': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø§Ù„Ù…Ù†Ø·Ù‚Ø© / Ø§Ù„Ù‚Ø·Ø§Ø¹ / Ø§Ù„Ø­ÙŠ',
210:   'Enable Location for a Personalized Experience': 'Ù‚Ù… Ø¨ØªÙØ¹ÙŠÙ„ Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ ØªØ¬Ø±Ø¨Ø© Ù…Ø®ØµØµØ©',
211:   'Allow location access to discover beauty stores and services near you.': 'Ø§Ø³Ù…Ø­ Ø¨Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ù„Ø§ÙƒØªØ´Ø§Ù Ù…ØªØ§Ø¬Ø± ÙˆØ®Ø¯Ù…Ø§Øª Ø§Ù„ØªØ¬Ù…ÙŠÙ„ Ø§Ù„Ù‚Ø±ÙŠØ¨Ø© Ù…Ù†Ùƒ.',
212:   'Use current location': 'Ø§Ø³ØªØ®Ø¯Ù… Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø­Ø§Ù„ÙŠ',
213:   'Set from map': 'ØªØ­Ø¯ÙŠØ¯ Ù…Ù† Ø§Ù„Ø®Ø±ÙŠØ·Ø©',
214:   'Enter Manually location': 'Ø¥Ø¯Ø®Ø§Ù„ Ø§Ù„Ù…ÙˆÙ‚Ø¹ ÙŠØ¯ÙˆÙŠÙ‹Ø§',
215:   'Search the store, item and more...': 'Ø§Ø¨Ø­Ø« Ø¹Ù† Ø§Ù„Ù…ØªØ¬Ø± Ø£Ùˆ Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„Ù…Ø²ÙŠØ¯...',
```
```dart
1: const Map<String, String> arAR = {
2:   'Letâ€™s Get Started': 'Ù„Ù†Ø¨Ø¯Ø£',
3:   'Skip': 'ØªØ®Ø·ÙŠ',
4:   'Next': 'Ø§Ù„ØªØ§Ù„ÙŠ',
5:   'Log in to explore your all in one vendor app favourites and shop effortlessly.': 'Ù‚Ù… Ø¨ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ù„Ø§Ø³ØªÙƒØ´Ø§Ù Ù…ÙØ¶Ù„Ø§ØªÙƒ ÙÙŠ ØªØ·Ø¨ÙŠÙ‚ Ø§Ù„Ø¨Ø§Ø¦Ø¹ Ø§Ù„Ø´Ø§Ù…Ù„ ÙˆØ§Ù„ØªØ³ÙˆÙ‚ Ø¨Ø³Ù‡ÙˆÙ„Ø©.',
6:   'Email Address*': 'Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ*',
7:   'jerome014@gmail.com': 'jerome014@gmail.com',
8:   'Password*': 'ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±*',
9:   'Enter password': 'Ø£Ø¯Ø®Ù„ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±',
10:   'Forgot Password': 'Ù‡Ù„ Ù†Ø³ÙŠØª ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±ØŸ',
11:   'Log in': 'ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„',
12:   'or continue with': 'Ø£Ùˆ Ø§Ù„Ù…ØªØ§Ø¨Ø¹Ø© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù…',
13:   'Mobile number': 'Ø±Ù‚Ù… Ø§Ù„Ø¬ÙˆØ§Ù„',
14:   'with Google': 'Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¬ÙˆØ¬Ù„',
15:   'with Apple': 'Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¢Ø¨Ù„',
16:   "Didn't have an account? ": 'Ù„ÙŠØ³ Ù„Ø¯ÙŠÙƒ Ø­Ø³Ø§Ø¨ØŸ ',
17:   'Sign up': 'Ø¥Ù†Ø´Ø§Ø¡ Ø­Ø³Ø§Ø¨',
18:   'Please enter a valid email address': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø¹Ù†ÙˆØ§Ù† Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØµØ§Ù„Ø­',
19:   'Please enter your password': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±',
20:   'Logging in...': 'Ø¬Ø§Ø±Ù ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„...',
21:   'This user is disabled. Please contact admin.': 'ØªÙ… ØªØ¹Ø·ÙŠÙ„ Ù‡Ø°Ø§ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…. ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©.',
22:   'This user does not exist in the customer app.': 'Ù‡Ø°Ø§ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯ ÙÙŠ ØªØ·Ø¨ÙŠÙ‚ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡.',
23:   'No user found for that email.': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ù…Ø³ØªØ®Ø¯Ù… Ø¨Ù‡Ø°Ø§ Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ.',
24:   'Wrong password provided.': 'ØªÙ… Ø¥Ø¯Ø®Ø§Ù„ ÙƒÙ„Ù…Ø© Ù…Ø±ÙˆØ± ØºÙŠØ± ØµØ­ÙŠØ­Ø©.',
25:   'Invalid email.': 'Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØºÙŠØ± ØµØ§Ù„Ø­.',
26:   'Login failed. Please try again.': 'ÙØ´Ù„ ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„. ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.',
27:   'please wait...': 'ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø§Ù†ØªØ¸Ø§Ø±...',
28:   'Sign up to explore all our services and start shopping, riding, and more.': 'Ù‚Ù… Ø¨Ø¥Ù†Ø´Ø§Ø¡ Ø­Ø³Ø§Ø¨ Ù„Ø§Ø³ØªÙƒØ´Ø§Ù Ø¬Ù…ÙŠØ¹ Ø®Ø¯Ù…Ø§ØªÙ†Ø§ ÙˆØ§Ø¨Ø¯Ø£ Ø§Ù„ØªØ³ÙˆÙ‚ ÙˆØ§Ù„ØªÙ†Ù‚Ù„ ÙˆØ§Ù„Ù…Ø²ÙŠØ¯.',
29:   'First Name*': 'Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø£ÙˆÙ„*',
30:   'Jerome': 'Ø¬ÙŠØ±ÙˆÙ…',
31:   'KM': 'ÙƒÙ…',
32:   'Last Name*': 'Ø§Ø³Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø©*',
33:   'Bell': 'Ø¨ÙŠÙ„',
34:   'Mobile Number*': 'Ø±Ù‚Ù… Ø§Ù„Ø¬ÙˆØ§Ù„*',
35:   'Enter Mobile number': 'Ø£Ø¯Ø®Ù„ Ø±Ù‚Ù… Ø§Ù„Ø¬ÙˆØ§Ù„',
36:   'Confirm Password*': 'ØªØ£ÙƒÙŠØ¯ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±*',
37:   'Enter confirm password': 'Ø£Ø¯Ø®Ù„ ØªØ£ÙƒÙŠØ¯ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±',
38:   'Referral Code': 'Ø±Ù…Ø² Ø§Ù„Ø¥Ø­Ø§Ù„Ø©',
39:   'Enter referral code': 'Ø£Ø¯Ø®Ù„ Ø±Ù…Ø² Ø§Ù„Ø¥Ø­Ø§Ù„Ø©',
40:   'Already have an account?': 'Ù‡Ù„ Ù„Ø¯ÙŠÙƒ Ø­Ø³Ø§Ø¨ Ø¨Ø§Ù„ÙØ¹Ù„ØŸ',
41:   'Creating account...': 'Ø¬Ø§Ø±Ù Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„Ø­Ø³Ø§Ø¨...',
42:   'signup_failed': 'ÙØ´Ù„ Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„Ø­Ø³Ø§Ø¨',
43:   'Please enter first name': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø£ÙˆÙ„',
44:   'Please enter last name': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø§Ø³Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø©',
45:   'Please enter a valid phone number': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø±Ù‚Ù… Ù‡Ø§ØªÙ ØµØ§Ù„Ø­',
46:   'Password must be at least 6 characters': 'ÙŠØ¬Ø¨ Ø£Ù† ØªÙƒÙˆÙ† ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ù…ÙƒÙˆÙ†Ø© Ù…Ù† 6 Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„',
47:   'Password and Confirm password do not match': 'ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± ÙˆØªØ£ÙƒÙŠØ¯ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± ØºÙŠØ± Ù…ØªØ·Ø§Ø¨Ù‚ÙŠÙ†',
48:   'Email already in use': 'Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ù…Ø³ØªØ®Ø¯Ù… Ø¨Ø§Ù„ÙØ¹Ù„',
49:   'Password is too weak': 'ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø¶Ø¹ÙŠÙØ© Ø¬Ø¯Ù‹Ø§',
50:   'Invalid email address': 'Ø¹Ù†ÙˆØ§Ù† Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØºÙŠØ± ØµØ§Ù„Ø­',
51:   'something_went_wrong': 'Ø­Ø¯Ø« Ø®Ø·Ø£ Ù…Ø§',
52:   'Enter your registered email to receive a reset link.': 'Ø£Ø¯Ø®Ù„ Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ø§Ù„Ù…Ø³Ø¬Ù„ Ù„ØªÙ„Ù‚ÙŠ Ø±Ø§Ø¨Ø· Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ¹ÙŠÙŠÙ†.',
53:   'Send Link': 'Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ø§Ø¨Ø·',
54:   'Remember Password?': 'ØªØªØ°ÙƒØ± ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±ØŸ',
55:   'Please enter your email address.': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø¹Ù†ÙˆØ§Ù† Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ.',
56:   'Please enter a valid email address.': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø¹Ù†ÙˆØ§Ù† Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØµØ§Ù„Ø­.',
57:   "reset_password_link_sent": "ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø±Ø§Ø¨Ø· Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹ÙŠÙŠÙ† ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ø¥Ù„Ù‰ @email",
58:   'Use your mobile number to Log in easily and securely.': 'Ø§Ø³ØªØ®Ø¯Ù… Ø±Ù‚Ù… Ø¬ÙˆØ§Ù„Ùƒ Ù„ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¨Ø³Ù‡ÙˆÙ„Ø© ÙˆØ£Ù…Ø§Ù†.',
59:   'Send Code': 'Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ù…Ø²',
60:   'Email address': 'Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ',
61:   'Please enter a valid 10-digit mobile number': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø±Ù‚Ù… Ø¬ÙˆØ§Ù„ ØµØ§Ù„Ø­ Ù…ÙƒÙˆÙ† Ù…Ù† 10 Ø£Ø±Ù‚Ø§Ù…',
62:   'Sending OTP...': 'Ø¬Ø§Ø±Ù Ø¥Ø±Ø³Ø§Ù„ Ø±Ù…Ø² Ø§Ù„ØªØ­Ù‚Ù‚...',
63:   'Invalid phone number': 'Ø±Ù‚Ù… Ù‡Ø§ØªÙ ØºÙŠØ± ØµØ§Ù„Ø­',
64:   'OTP verification failed': 'ÙØ´Ù„ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø±Ù…Ø² OTP',
65:   'Something went wrong. Please try again.': 'Ø­Ø¯Ø« Ø®Ø·Ø£ Ù…Ø§. ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.',
66:   'Enter the OTP sent to your mobile': 'Ø£Ø¯Ø®Ù„ Ø±Ù…Ø² Ø§Ù„ØªØ­Ù‚Ù‚ Ø§Ù„Ù…Ø±Ø³Ù„ Ø¥Ù„Ù‰ Ø¬ÙˆØ§Ù„Ùƒ',
67:   'Resend OTP': 'Ø¥Ø¹Ø§Ø¯Ø© Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ù…Ø²',
68:   'Verify': 'ØªØ­Ù‚Ù‚',
69:   'OTP sent': 'ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ù…Ø²',
70:   'Enter valid 6-digit OTP': 'Ø£Ø¯Ø®Ù„ Ø±Ù…Ø² ØªØ­Ù‚Ù‚ ØµØ­ÙŠØ­ Ù…ÙƒÙˆÙ† Ù…Ù† 6 Ø£Ø±Ù‚Ø§Ù…',
71:   'Verifying OTP...': 'Ø¬Ø§Ø±Ù Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø±Ù…Ø²...',
72:   'This user is disabled': 'ØªÙ… ØªØ¹Ø·ÙŠÙ„ Ù‡Ø°Ø§ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…',
73:   'Invalid OTP or Verification Failed': 'Ø±Ù…Ø² ØªØ­Ù‚Ù‚ ØºÙŠØ± ØµØ§Ù„Ø­ Ø£Ùˆ ÙØ´Ù„ Ø§Ù„ØªØ­Ù‚Ù‚',
74:   'eMart': 'Ø¥ÙŠ Ù…Ø§Ø±Øª',
75:   'All Your Needs in One App!': 'ÙƒÙ„ Ø§Ø­ØªÙŠØ§Ø¬Ø§ØªÙƒ ÙÙŠ ØªØ·Ø¨ÙŠÙ‚ ÙˆØ§Ø­Ø¯!',
76:   'Explore Our Services': 'Ø§Ø³ØªÙƒØ´Ù Ø®Ø¯Ù…Ø§ØªÙ†Ø§',
77:   'Alert!': 'ØªÙ†Ø¨ÙŠÙ‡!',
78:   'Alert': 'ØªÙ†Ø¨ÙŠÙ‡',
79:   'If you select this Section/Service, your previously added items will be removed from the cart.': 'Ø¥Ø°Ø§ Ù‚Ù…Øª Ø¨Ø§Ø®ØªÙŠØ§Ø± Ù‡Ø°Ø§ Ø§Ù„Ù‚Ø³Ù…/Ø§Ù„Ø®Ø¯Ù…Ø©ØŒ Ø³ÙŠØªÙ… Ø¥Ø²Ø§Ù„Ø© Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø§Ù„ØªÙŠ Ø£Ø¶ÙØªÙ‡Ø§ Ù…Ø³Ø¨Ù‚Ù‹Ø§ Ù…Ù† Ø³Ù„Ø© Ø§Ù„ØªØ³ÙˆÙ‚.',
80:   'Cancel': 'Ø¥Ù„ØºØ§Ø¡',
81:   'OK': 'Ù…ÙˆØ§ÙÙ‚',
82:   'Home': 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©',
83:   'My Bookings': 'Ø­Ø¬ÙˆØ²Ø§ØªÙŠ',
84:   'Favourites': 'Ø§Ù„Ù…ÙØ¶Ù„Ø©',
85:   'Orders': 'Ø§Ù„Ø·Ù„Ø¨Ø§Øª',
86:   'Profile': 'Ø§Ù„Ù…Ù„Ù Ø§Ù„Ø´Ø®ØµÙŠ',
87:   'Wallet': 'Ø§Ù„Ù…Ø­ÙØ¸Ø©',
88:   'Service is unavailable at the selected address.': 'Ø§Ù„Ø®Ø¯Ù…Ø© ØºÙŠØ± Ù…ØªÙˆÙØ±Ø© ÙÙŠ Ø§Ù„Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ù…Ø­Ø¯Ø¯.',
89:   'Pickup Location': 'Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù…',
90:   'Destination Location': 'Ù…ÙˆÙ‚Ø¹ Ø§Ù„ÙˆØ¬Ù‡Ø©',
91:   'Continue': 'Ù…ØªØ§Ø¨Ø¹Ø©',
92:   'Please select source location': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø§Ù†Ø·Ù„Ø§Ù‚',
93:   'Please select destination location': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ù…ÙˆÙ‚Ø¹ Ø§Ù„ÙˆØ¬Ù‡Ø©',
94:   'Select Your Vehicle Type': 'Ø§Ø®ØªØ± Ù†ÙˆØ¹ Ø§Ù„Ù…Ø±ÙƒØ¨Ø©',
95:   "pay_amount": "Ø§Ø¯ÙØ¹ @amount",
96:   'Please select a vehicle type first.': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ù†ÙˆØ¹ Ø§Ù„Ù…Ø±ÙƒØ¨Ø© Ø£ÙˆÙ„Ø§Ù‹.',
97:   'Select Payment Method': 'Ø§Ø®ØªØ± Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹',
98:   'Preferred Payment': 'Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ù…ÙØ¶Ù„Ø©',
99:   'Other Payment Options': 'Ø®ÙŠØ§Ø±Ø§Øª Ø¯ÙØ¹ Ø£Ø®Ø±Ù‰',
100:   'Please select a payment method': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹',
101:   'Insufficient wallet balance. Please select another payment method.': 'Ø±ØµÙŠØ¯ Ø§Ù„Ù…Ø­ÙØ¸Ø© ØºÙŠØ± ÙƒØ§ÙÙ. ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ø·Ø±ÙŠÙ‚Ø© Ø¯ÙØ¹ Ø£Ø®Ø±Ù‰.',
102:   'Promo code': 'Ø±Ù…Ø² ØªØ±ÙˆÙŠØ¬ÙŠ',
103:   'Promo Code': 'Ø±Ù…Ø² ØªØ±ÙˆÙŠØ¬ÙŠ',
104:   'Apply promo code': 'ØªØ·Ø¨ÙŠÙ‚ Ø§Ù„Ø±Ù…Ø² Ø§Ù„ØªØ±ÙˆÙŠØ¬ÙŠ',
105:   'This offer not eligible for this booking': 'Ù‡Ø°Ø§ Ø§Ù„Ø¹Ø±Ø¶ ØºÙŠØ± ØµØ§Ù„Ø­ Ù„Ù‡Ø°Ø§ Ø§Ù„Ø­Ø¬Ø²',
106:   'View All': 'Ø¹Ø±Ø¶ Ø§Ù„ÙƒÙ„',
107:   'Write coupon Code': 'Ø§ÙƒØªØ¨ Ø±Ù…Ø² Ø§Ù„Ù‚Ø³ÙŠÙ…Ø©',
108:   'Redeem now': 'Ø§Ø³ØªØ±Ø¯ Ø§Ù„Ø¢Ù†',
109:   'Please enter a coupon code': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø±Ù…Ø² Ø§Ù„Ù‚Ø³ÙŠÙ…Ø©',
110:   'Coupon applied successfully': 'ØªÙ… ØªØ·Ø¨ÙŠÙ‚ Ø§Ù„Ù‚Ø³ÙŠÙ…Ø© Ø¨Ù†Ø¬Ø§Ø­',
111:   'This coupon code has been expired': 'Ø§Ù†ØªÙ‡Øª ØµÙ„Ø§Ø­ÙŠØ© Ø±Ù…Ø² Ø§Ù„Ù‚Ø³ÙŠÙ…Ø©',
112:   'Invalid coupon code': 'Ø±Ù…Ø² Ù‚Ø³ÙŠÙ…Ø© ØºÙŠØ± ØµØ§Ù„Ø­',
113:   'Order Summary': 'Ù…Ù„Ø®Øµ Ø§Ù„Ø·Ù„Ø¨',
114:   'Subtotal': 'Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹ Ø§Ù„ÙØ±Ø¹ÙŠ',
115:   'SubTotal': 'Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹ Ø§Ù„ÙØ±Ø¹ÙŠ',
116:   'Discount': 'Ø§Ù„Ø®ØµÙ…',
117:   'Order Total': 'Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ø·Ù„Ø¨',
118:   'Confirm Booking': 'ØªØ£ÙƒÙŠØ¯ Ø§Ù„Ø­Ø¬Ø²',
119:   'Waiting for driver....': 'ÙÙŠ Ø§Ù†ØªØ¸Ø§Ø± Ø§Ù„Ø³Ø§Ø¦Ù‚....',
120:   'Cancel Ride': 'Ø¥Ù„ØºØ§Ø¡ Ø§Ù„Ø±Ø­Ù„Ø©',
121:   'Ride cancelled successfully': 'ØªÙ… Ø¥Ù„ØºØ§Ø¡ Ø§Ù„Ø±Ø­Ù„Ø© Ø¨Ù†Ø¬Ø§Ø­',
122:   'Failed to cancel ride': 'ÙØ´Ù„ Ø¥Ù„ØºØ§Ø¡ Ø§Ù„Ø±Ø­Ù„Ø©',
123:   'Otp :': 'Ø±Ù…Ø² Ø§Ù„ØªØ­Ù‚Ù‚:',
124:   'SOS': 'Ù†Ø¬Ø¯Ø©',
125:   'Please wait...': 'ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø§Ù†ØªØ¸Ø§Ø±...',
126:   'Your SOS request has been submitted to admin': 'ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø·Ù„Ø¨ Ø§Ù„Ù†Ø¬Ø¯Ø© Ø¥Ù„Ù‰ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©',
127:   'Your SOS request is already submitted': 'ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø·Ù„Ø¨ Ø§Ù„Ù†Ø¬Ø¯Ø© Ø¨Ø§Ù„ÙØ¹Ù„',
128:   'Pay Now': 'Ø§Ø¯ÙØ¹ Ø§Ù„Ø¢Ù†',
129:   'Something went wrong, please contact admin.': 'Ø­Ø¯Ø« Ø®Ø·Ø£ Ù…Ø§ØŒ ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©.',
130:   'Please select payment method': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹',
131:   'Driver at Pickup': 'Ø§Ù„Ø³Ø§Ø¦Ù‚ ÙÙŠ Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù…',
132:   'Driver Location': 'Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø³Ø§Ø¦Ù‚',
133:   'Payment method changed': 'ØªÙ… ØªØºÙŠÙŠØ± Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹',
134:   'Payment successfully': 'ØªÙ… Ø§Ù„Ø¯ÙØ¹ Ø¨Ù†Ø¬Ø§Ø­',
135:   'Payment Successful!!': 'ØªÙ… Ø§Ù„Ø¯ÙØ¹ Ø¨Ù†Ø¬Ø§Ø­!!',
136:   'Payment UnSuccessful!!': 'ÙØ´Ù„ Ø§Ù„Ø¯ÙØ¹!!',
137:   'Payment Failed': 'ÙØ´Ù„ Ø§Ù„Ø¯ÙØ¹',
138:   'Payment Processing!! via': 'Ø¬Ø§Ø±Ù Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ø¯ÙØ¹!! Ø¹Ø¨Ø±',
139:   'Payment Failed!!': 'ÙØ´Ù„ Ø§Ù„Ø¯ÙØ¹!!',
140:   'Coupon': 'Ù‚Ø³ÙŠÙ…Ø©',
141:   'Coupon not found': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø§Ù„Ù‚Ø³ÙŠÙ…Ø©',
142:   'Tap To Apply': 'Ø§Ø¶ØºØ· Ù„Ù„ØªØ·Ø¨ÙŠÙ‚',
143:   'My Booking': 'Ø­Ø¬ÙˆØ²Ø§ØªÙŠ',
144:   'Login': 'ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„',
145:   'Where are you going for?': 'Ø¥Ù„Ù‰ Ø£ÙŠÙ† ØªØ±ÙŠØ¯ Ø§Ù„Ø°Ù‡Ø§Ø¨ØŸ',
146:   'Ride': 'Ø±Ø­Ù„Ø©',
147:   'City rides, 24x7 availability': 'Ø±Ø­Ù„Ø§Øª Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ø¯ÙŠÙ†Ø©ØŒ Ù…ØªØ§Ø­Ø© 24/7',
148:   'Intercity/Outstation': 'Ø¨ÙŠÙ† Ø§Ù„Ù…Ø¯Ù† / Ø®Ø§Ø±Ø¬ Ø§Ù„Ù…Ø¯ÙŠÙ†Ø©',
149:   'Long trips, prepaid options': 'Ø±Ø­Ù„Ø§Øª Ø·ÙˆÙŠÙ„Ø©ØŒ Ø®ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ù…Ø³Ø¨Ù‚',
150:   'Every Ride. Every Driver. Verified.': 'ÙƒÙ„ Ø±Ø­Ù„Ø©. ÙƒÙ„ Ø³Ø§Ø¦Ù‚. Ù…ÙˆØ«ÙˆÙ‚.',
151:   'All drivers go through ID checks and background verification for your safety.': 'Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø³Ø§Ø¦Ù‚ÙŠÙ† ÙŠØ®Ø¶Ø¹ÙˆÙ† Ù„ÙØ­ÙˆØµØ§Øª Ø§Ù„Ù‡ÙˆÙŠØ© ÙˆØ§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø®Ù„ÙÙŠØ© Ù„Ø¶Ù…Ø§Ù† Ø³Ù„Ø§Ù…ØªÙƒ.',
152:   'Ride Details': 'ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø±Ø­Ù„Ø©',
153:   'Order Id:': 'Ø±Ù‚Ù… Ø§Ù„Ø·Ù„Ø¨:',
154:   'Booking Date:': 'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø­Ø¬Ø²:',
155:   'Ride & Fare Summary': 'Ù…Ù„Ø®Øµ Ø§Ù„Ø±Ø­Ù„Ø© ÙˆØ§Ù„ØªÙƒÙ„ÙØ©',
156:   'Add Review': 'Ø¥Ø¶Ø§ÙØ© ØªÙ‚ÙŠÙŠÙ…',
157:   'Complain': 'Ø´ÙƒÙˆÙ‰',
158:   'Distance': 'Ø§Ù„Ù…Ø³Ø§ÙØ©',
159:   'Duration': 'Ø§Ù„Ù…Ø¯Ø©',
160:   'Update Review': 'ØªØ­Ø¯ÙŠØ« Ø§Ù„ØªÙ‚ÙŠÙŠÙ…',
161:   'How is your trip?': 'ÙƒÙŠÙ ÙƒØ§Ù†Øª Ø±Ø­Ù„ØªÙƒØŸ',
162:   'Your feedback will help us improve \n driving experience better': 'Ø³ØªØ³Ø§Ø¹Ø¯Ù†Ø§ Ù…Ù„Ø§Ø­Ø¸Ø§ØªÙƒ Ø¹Ù„Ù‰ ØªØ­Ø³ÙŠÙ† \n ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© Ø¨Ø´ÙƒÙ„ Ø£ÙØ¶Ù„',
163:   'Rate for': 'Ù‚ÙŠÙ‘Ù…',
164:   'Type comment....': 'Ø§ÙƒØªØ¨ ØªØ¹Ù„ÙŠÙ‚....',
165:   'Please provide rating and comment': 'ÙŠØ±Ø¬Ù‰ ØªÙ‚Ø¯ÙŠÙ… Ø§Ù„ØªÙ‚ÙŠÙŠÙ… ÙˆØ§Ù„ØªØ¹Ù„ÙŠÙ‚',
166:   'Submit in...': 'Ø¥Ø±Ø³Ø§Ù„ Ø®Ù„Ø§Ù„...',
167:   'Title': 'Ø§Ù„Ø¹Ù†ÙˆØ§Ù†',
168:   'Save': 'Ø­ÙØ¸',
169:   'Type Description....': 'Ø§ÙƒØªØ¨ Ø§Ù„ÙˆØµÙ....',
170:   'Order data not found': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø·Ù„Ø¨',
171:   'Failed to load complaint': 'ÙØ´Ù„ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø´ÙƒÙˆÙ‰',
172:   'Please enter complaint title': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø´ÙƒÙˆÙ‰',
173:   'Please enter complaint description': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ ÙˆØµÙ Ø§Ù„Ø´ÙƒÙˆÙ‰',
174:   'Your complaint has been submitted to admin': 'ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø´ÙƒÙˆÙ‰ Ø¥Ù„Ù‰ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©',
175:   'Your complaint is already submitted': 'ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø´ÙƒÙˆÙ‰ Ø¨Ø§Ù„ÙØ¹Ù„',
176:   'Something went wrong, please try again': 'Ø­Ø¯Ø« Ø®Ø·Ø£ Ù…Ø§ØŒ ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰',
177:   'Popular Destinations': 'ÙˆØ¬Ù‡Ø§Øª Ø´Ø§Ø¦Ø¹Ø©',
178:   'Ride History': 'Ø³Ø¬Ù„ Ø§Ù„Ø±Ø­Ù„Ø§Øª',
179:   'No order found': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø·Ù„Ø¨',
180:   'You do not have sufficient wallet balance': 'Ù„ÙŠØ³ Ù„Ø¯ÙŠÙƒ Ø±ØµÙŠØ¯ ÙƒØ§ÙÙ ÙÙŠ Ø§Ù„Ù…Ø­ÙØ¸Ø©',
181:   "new_tab": "Ø¬Ø¯ÙŠØ¯",
182:   "on_going_tab": "Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°",
183:   "completed_tab": "Ù…ÙƒØªÙ…Ù„",
184:   "cancelled_tab": "Ù…Ù„ØºÙŠ",
185:   'New': 'Ø¬Ø¯ÙŠØ¯',
186:   'On Going': 'Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°',
187:   'Completed': 'Ù…ÙƒØªÙ…Ù„',
188:   'Cancelled': 'Ù…Ù„ØºÙŠ',
189:   'My Addresses': 'Ø¹Ù†Ø§ÙˆÙŠÙ†ÙŠ',
190:   'Allows users to view, manage, add, or edit delivery addresses': 'ÙŠØªÙŠØ­ Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ø¹Ø±Ø¶ ÙˆØ¥Ø¯Ø§Ø±Ø© ÙˆØ¥Ø¶Ø§ÙØ© Ø£Ùˆ ØªØ¹Ø¯ÙŠÙ„ Ø¹Ù†Ø§ÙˆÙŠÙ† Ø§Ù„ØªÙˆØµÙŠÙ„',
191:   'Address not found': 'Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø¹Ù†ÙˆØ§Ù†',
192:   'Default': 'Ø§ÙØªØ±Ø§Ø¶ÙŠ',
193:   'Add New Address': 'Ø¥Ø¶Ø§ÙØ© Ø¹Ù†ÙˆØ§Ù† Ø¬Ø¯ÙŠØ¯',
194:   'Edit Address': 'ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ø¹Ù†ÙˆØ§Ù†',
195:   'Add a New Address': 'Ø¥Ø¶Ø§ÙØ© Ø¹Ù†ÙˆØ§Ù† Ø¬Ø¯ÙŠØ¯',
196:   'Enter your location details so we can deliver your orders quickly and accurately.': 'Ø£Ø¯Ø®Ù„ ØªÙØ§ØµÙŠÙ„ Ù…ÙˆÙ‚Ø¹Ùƒ Ø­ØªÙ‰ Ù†ØªÙ…ÙƒÙ† Ù…Ù† ØªÙˆØµÙŠÙ„ Ø·Ù„Ø¨Ø§ØªÙƒ Ø¨Ø³Ø±Ø¹Ø© ÙˆØ¯Ù‚Ø©.',
197:   'Set as Default Address': 'ØªØ¹ÙŠÙŠÙ† ÙƒØ¹Ù†ÙˆØ§Ù† Ø§ÙØªØ±Ø§Ø¶ÙŠ',
198:   'Choose Location': 'Ø§Ø®ØªØ± Ø§Ù„Ù…ÙˆÙ‚Ø¹',
199:   'Flat/House/Floor/Building*': 'Ø´Ù‚Ø©/Ù…Ù†Ø²Ù„/Ø·Ø§Ø¨Ù‚/Ù…Ø¨Ù†Ù‰*',
200:   'Area/Sector/Locality*': 'Ø§Ù„Ù…Ù†Ø·Ù‚Ø©/Ø§Ù„Ù‚Ø·Ø§Ø¹/Ø§Ù„Ø­ÙŠ*',
201:   'Nearby Landmark': 'Ù…Ø¹Ù„Ù… Ù‚Ø±ÙŠØ¨',
202:   'Save Address As': 'Ø­ÙØ¸ Ø§Ù„Ø¹Ù†ÙˆØ§Ù† Ø¨Ø§Ø³Ù…',
203:   'Enter address details': 'Ø£Ø¯Ø®Ù„ ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø¹Ù†ÙˆØ§Ù†',
204:   'Enter area/locality': 'Ø£Ø¯Ø®Ù„ Ø§Ù„Ù…Ù†Ø·Ù‚Ø© / Ø§Ù„Ø­ÙŠ',
205:   'Add a landmark': 'Ø£Ø¶Ù Ù…Ø¹Ù„Ù…Ù‹Ø§',
206:   'Save Address': 'Ø­ÙØ¸ Ø§Ù„Ø¹Ù†ÙˆØ§Ù†',
207:   'Please select Location': 'ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù…ÙˆÙ‚Ø¹',
208:   'Please Enter Flat / House / Floor / Building': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø´Ù‚Ø© / Ù…Ù†Ø²Ù„ / Ø·Ø§Ø¨Ù‚ / Ù…Ø¨Ù†Ù‰',
209:   'Please Enter Area / Sector / Locality': 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø§Ù„Ù…Ù†Ø·Ù‚Ø© / Ø§Ù„Ù‚Ø·Ø§Ø¹ / Ø§Ù„Ø­ÙŠ',
210:   'Enable Location for a Personalized Experience': 'Ù‚Ù… Ø¨ØªÙØ¹ÙŠÙ„ Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ ØªØ¬Ø±Ø¨Ø© Ù…Ø®ØµØµØ©',
211:   'Allow location access to discover beauty stores and services near you.': 'Ø§Ø³Ù…Ø­ Ø¨Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ù„Ø§ÙƒØªØ´Ø§Ù Ù…ØªØ§Ø¬Ø± ÙˆØ®Ø¯Ù…Ø§Øª Ø§Ù„ØªØ¬Ù…ÙŠÙ„ Ø§Ù„Ù‚Ø±ÙŠØ¨Ø© Ù…Ù†Ùƒ.',
212:   'Use current location': 'Ø§Ø³ØªØ®Ø¯Ù… Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø­Ø§Ù„ÙŠ',
213:   'Set from map': 'ØªØ­Ø¯ÙŠØ¯ Ù…Ù† Ø§Ù„Ø®Ø±ÙŠØ·Ø©',
214:   'Enter Manually location': 'Ø¥Ø¯Ø®Ø§Ù„ Ø§Ù„Ù…ÙˆÙ‚Ø¹ ÙŠØ¯ÙˆÙŠÙ‹Ø§',
215:   'Search the store, item and more...': 'Ø§Ø¨Ø­Ø« Ø¹Ù† Ø§Ù„Ù…ØªØ¬Ø± Ø£Ùˆ Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„Ù…Ø²ÙŠØ¯...',
216:   'Category': 'Ø§Ù„ÙØ¦Ø©',
```

### C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart

```dart
1: const Map<String, String> enUS = {
2:   'Letâ€™s Get Started': 'Letâ€™s Get Started',
3:   'Skip': 'Skip',
4:   'Next': 'Next',
5:   'Log in to explore your all in one vendor app favourites and shop effortlessly.': 'Log in to explore your all in one vendor app favourites and shop effortlessly.',
6:   'Email Address*': 'Email Address*',
7:   'jerome014@gmail.com': 'jerome014@gmail.com',
8:   'Password*': 'Password*',
9:   'Enter password': 'Enter password',
10:   'Forgot Password': 'Forgot Password',
11:   'Log in': 'Log in',
12:   'or continue with': 'or continue with',
13:   'Mobile number': 'Mobile number',
14:   'with Google': 'with Google',
15:   'with Apple': 'with Apple',
16:   "Didn't have an account? ": "Didn't have an account? ",
17:   'Sign up': 'Sign up',
18:   'Please enter a valid email address': 'Please enter a valid email address',
19:   'Please enter your password': 'Please enter your password',
20:   'Logging in...': 'Logging in...',
21:   'This user is disabled. Please contact admin.': 'This user is disabled. Please contact admin.',
22:   'This user does not exist in the customer app.': 'This user does not exist in the customer app.',
23:   'No user found for that email.': 'No user found for that email.',
24:   'Wrong password provided.': 'Wrong password provided.',
25:   'Invalid email.': 'Invalid email.',
26:   'Login failed. Please try again.': 'Login failed. Please try again.',
27:   'please wait...': 'please wait...',
28:   'Sign up to explore all our services and start shopping, riding, and more.': 'Sign up to explore all our services and start shopping, riding, and more.',
29:   'First Name*': 'First Name*',
30:   'Jerome': 'Jerome',
31:   'KM': 'KM',
32:   'Last Name*': 'Last Name*',
33:   'Bell': 'Bell',
34:   'Mobile Number*': 'Mobile Number*',
35:   'Enter Mobile number': 'Enter Mobile number',
36:   'Confirm Password*': 'Confirm Password*',
37:   'Enter confirm password': 'Enter confirm password',
38:   'Referral Code': 'Referral Code',
39:   'Enter referral code': 'Enter referral code',
40:   'Already have an account?': 'Already have an account?',
41:   'Creating account...': 'Creating account...',
42:   'signup_failed': 'Signup failed',
43:   'Please enter first name': 'Please enter first name',
44:   'Please enter last name': 'Please enter last name',
45:   'Please enter a valid phone number': 'Please enter a valid phone number',
46:   'Password must be at least 6 characters': 'Password must be at least 6 characters',
47:   'Password and Confirm password do not match': 'Password and Confirm password do not match',
48:   'Email already in use': 'Email already in use',
49:   'Password is too weak': 'Password is too weak',
50:   'Invalid email address': 'Invalid email address',
51:   'something_went_wrong': 'Something went wrong',
52:   'Enter your registered email to receive a reset link.': 'Enter your registered email to receive a reset link.',
53:   'Send Link': 'Send Link',
54:   'Remember Password?': 'Remember Password?',
55:   'Please enter your email address.': 'Please enter your email address.',
56:   'Please enter a valid email address.': 'Please enter a valid email address.',
57:   "reset_password_link_sent": "Reset password link sent to @email",
58:   'Use your mobile number to Log in easily and securely.': 'Use your mobile number to Log in easily and securely.',
59:   'Send Code': 'Send Code',
60:   'Email address': 'Email address',
61:   'Please enter a valid 10-digit mobile number': 'Please enter a valid 10-digit mobile number',
62:   'Sending OTP...': 'Sending OTP...',
63:   'Invalid phone number': 'Invalid phone number',
64:   'OTP verification failed': 'OTP verification failed',
65:   'Something went wrong. Please try again.': 'Something went wrong. Please try again.',
66:   'Enter the OTP sent to your mobile': 'Enter the OTP sent to your mobile',
67:   'Resend OTP': 'Resend OTP',
68:   'Verify': 'Verify',
69:   'OTP sent': 'OTP sent',
70:   'Enter valid 6-digit OTP': 'Enter valid 6-digit OTP',
71:   'Verifying OTP...': 'Verifying OTP...',
72:   'This user is disabled': 'This user is disabled',
73:   'Invalid OTP or Verification Failed': 'Invalid OTP or Verification Failed',
74:   'eMart': 'eMart',
75:   'All Your Needs in One App!': 'All Your Needs in One App!',
76:   'Explore Our Services': 'Explore Our Services',
77:   'Alert!': 'Alert!',
78:   'Alert': 'Alert',
79:   'If you select this Section/Service, your previously added items will be removed from the cart.': 'If you select this Section/Service, your previously added items will be removed from the cart.',
80:   'Cancel': 'Cancel',
81:   'OK': 'OK',
82:   'Home': 'Home',
83:   'My Bookings': 'My Bookings',
84:   'Favourites': 'Favourites',
85:   'Orders': 'Orders',
86:   'Profile': 'Profile',
87:   'Wallet': 'Wallet',
88:   'Service is unavailable at the selected address.': 'Service is unavailable at the selected address.',
89:   'Pickup Location': 'Pickup Location',
90:   'Destination Location': 'Destination Location',
91:   'Continue': 'Continue',
92:   'Please select source location': 'Please select source location',
93:   'Please select destination location': 'Please select destination location',
94:   'Select Your Vehicle Type': 'Select Your Vehicle Type',
95:   "pay_amount": "Pay @amount",
96:   'Please select a vehicle type first.': 'Please select a vehicle type first.',
97:   'Select Payment Method': 'Select Payment Method',
98:   'Preferred Payment': 'Preferred Payment',
99:   'Other Payment Options': 'Other Payment Options',
100:   'Please select a payment method': 'Please select a payment method',
101:   'Insufficient wallet balance. Please select another payment method.': 'Insufficient wallet balance. Please select another payment method.',
102:   'Promo code': 'Promo code',
103:   'Promo Code': 'Promo Code',
104:   'Apply promo code': 'Apply promo code',
105:   'This offer not eligible for this booking': 'This offer not eligible for this booking',
106:   'View All': 'View All',
107:   'Write coupon Code': 'Write coupon Code',
108:   'Redeem now': 'Redeem now',
109:   'Please enter a coupon code': 'Please enter a coupon code',
110:   'Coupon applied successfully': 'Coupon applied successfully',
111:   'This coupon code has been expired': 'This coupon code has been expired',
112:   'Invalid coupon code': 'Invalid coupon code',
113:   'Order Summary': 'Order Summary',
114:   'Subtotal': 'Subtotal',
115:   'SubTotal': 'SubTotal',
116:   'Discount': 'Discount',
117:   'Order Total': 'Order Total',
118:   'Confirm Booking': 'Confirm Booking',
119:   'Waiting for driver....': 'Waiting for driver....',
120:   'Cancel Ride': 'Cancel Ride',
121:   'Ride cancelled successfully': 'Ride cancelled successfully',
122:   'Failed to cancel ride': 'Failed to cancel ride',
123:   'Otp :': 'Otp :',
124:   'SOS': 'SOS',
125:   'Please wait...': 'Please wait...',
126:   'Your SOS request has been submitted to admin': 'Your SOS request has been submitted to admin',
127:   'Your SOS request is already submitted': 'Your SOS request is already submitted',
128:   'Pay Now': 'Pay Now',
129:   'Something went wrong, please contact admin.': 'Something went wrong, please contact admin.',
130:   'Please select payment method': 'Please select payment method',
131:   'Driver at Pickup': 'Driver at Pickup',
132:   'Driver Location': 'Driver Location',
133:   'Payment method changed': 'Payment method changed',
134:   'Payment successfully': 'Payment successfully',
135:   'Payment Successful!!': 'Payment Successful!!',
136:   'Payment UnSuccessful!!': 'Payment UnSuccessful!!',
137:   'Payment Failed': 'Payment Failed',
138:   'Payment Processing!! via': 'Payment Processing!! via',
139:   'Payment Failed!!': 'Payment Failed!!',
140:   'Coupon': 'Coupon',
141:   'Coupon not found': 'Coupon not found',
142:   'Tap To Apply': 'Tap To Apply',
143:   'My Booking': 'My Booking',
144:   'Login': 'Login',
145:   'Where are you going for?': 'Where are you going for?',
146:   'Ride': 'Ride',
147:   'City rides, 24x7 availability': 'City rides, 24x7 availability',
148:   'Intercity/Outstation': 'Intercity/Outstation',
149:   'Long trips, prepaid options': 'Long trips, prepaid options',
150:   'Every Ride. Every Driver. Verified.': 'Every Ride. Every Driver. Verified.',
151:   'All drivers go through ID checks and background verification for your safety.': 'All drivers go through ID checks and background verification for your safety.',
152:   'Ride Details': 'Ride Details',
153:   'Order Id:': 'Order Id:',
154:   'Booking Date:': 'Booking Date:',
155:   'Ride & Fare Summary': 'Ride & Fare Summary',
156:   'Add Review': 'Add Review',
157:   'Complain': 'Complain',
158:   'Distance': 'Distance',
159:   'Duration': 'Duration',
160:   'Update Review': 'Update Review',
161:   'How is your trip?': 'How is your trip?',
162:   'Your feedback will help us improve \n driving experience better': 'Your feedback will help us improve \n driving experience better',
163:   'Rate for': 'Rate for',
164:   'Type comment....': 'Type comment....',
165:   'Please provide rating and comment': 'Please provide rating and comment',
166:   'Submit in...': 'Submit in...',
167:   'Title': 'Title',
168:   'Save': 'Save',
169:   'Type Description....': 'Type Description....',
170:   'Order data not found': 'Order data not found',
171:   'Failed to load complaint': 'Failed to load complaint',
172:   'Please enter complaint title': 'Please enter complaint title',
173:   'Please enter complaint description': 'Please enter complaint description',
174:   'Your complaint has been submitted to admin': 'Your complaint has been submitted to admin',
175:   'Your complaint is already submitted': 'Your complaint is already submitted',
176:   'Something went wrong, please try again': 'Something went wrong, please try again',
177:   'Popular Destinations': 'Popular Destinations',
178:   'Ride History': 'Ride History',
179:   'No order found': 'No order found',
180:   'You do not have sufficient wallet balance': 'You do not have sufficient wallet balance',
181:   "new_tab": "New",
182:   "on_going_tab": "On Going",
183:   "completed_tab": "Completed",
184:   "cancelled_tab": "Cancelled",
185:   'New': 'New',
186:   'On Going': 'On Going',
187:   'Completed': 'Completed',
188:   'Cancelled': 'Cancelled',
189:   'My Addresses': 'My Addresses',
190:   'Allows users to view, manage, add, or edit delivery addresses': 'Allows users to view, manage, add, or edit delivery addresses',
191:   'Address not found': 'Address not found',
192:   'Default': 'Default',
193:   'Add New Address': 'Add New Address',
194:   'Edit Address': 'Edit Address',
195:   'Add a New Address': 'Add a New Address',
196:   'Enter your location details so we can deliver your orders quickly and accurately.': 'Enter your location details so we can deliver your orders quickly and accurately.',
197:   'Set as Default Address': 'Set as Default Address',
198:   'Choose Location': 'Choose Location',
199:   'Flat/House/Floor/Building*': 'Flat/House/Floor/Building*',
200:   'Area/Sector/Locality*': 'Area/Sector/Locality*',
201:   'Nearby Landmark': 'Nearby Landmark',
202:   'Save Address As': 'Save Address As',
203:   'Enter address details': 'Enter address details',
204:   'Enter area/locality': 'Enter area/locality',
205:   'Add a landmark': 'Add a landmark',
206:   'Save Address': 'Save Address',
207:   'Please select Location': 'Please select Location',
208:   'Please Enter Flat / House / Floor / Building': 'Please Enter Flat / House / Floor / Building',
209:   'Please Enter Area / Sector / Locality': 'Please Enter Area / Sector / Locality',
210:   'Search the store, item and more...': 'Search the store, item and more...',
211:   'Category': 'Category',
212:   'Highlights for you': 'Highlights for you',
213:   'New Arrivals': 'New Arrivals',
214:   'View All Arrivals': 'View All Arrivals',
215:   'Top Brands': 'Top Brands',
```
```dart
1: const Map<String, String> enUS = {
2:   'Letâ€™s Get Started': 'Letâ€™s Get Started',
3:   'Skip': 'Skip',
4:   'Next': 'Next',
5:   'Log in to explore your all in one vendor app favourites and shop effortlessly.': 'Log in to explore your all in one vendor app favourites and shop effortlessly.',
6:   'Email Address*': 'Email Address*',
7:   'jerome014@gmail.com': 'jerome014@gmail.com',
8:   'Password*': 'Password*',
9:   'Enter password': 'Enter password',
10:   'Forgot Password': 'Forgot Password',
11:   'Log in': 'Log in',
12:   'or continue with': 'or continue with',
13:   'Mobile number': 'Mobile number',
14:   'with Google': 'with Google',
15:   'with Apple': 'with Apple',
16:   "Didn't have an account? ": "Didn't have an account? ",
17:   'Sign up': 'Sign up',
18:   'Please enter a valid email address': 'Please enter a valid email address',
19:   'Please enter your password': 'Please enter your password',
20:   'Logging in...': 'Logging in...',
21:   'This user is disabled. Please contact admin.': 'This user is disabled. Please contact admin.',
22:   'This user does not exist in the customer app.': 'This user does not exist in the customer app.',
23:   'No user found for that email.': 'No user found for that email.',
24:   'Wrong password provided.': 'Wrong password provided.',
25:   'Invalid email.': 'Invalid email.',
26:   'Login failed. Please try again.': 'Login failed. Please try again.',
27:   'please wait...': 'please wait...',
28:   'Sign up to explore all our services and start shopping, riding, and more.': 'Sign up to explore all our services and start shopping, riding, and more.',
29:   'First Name*': 'First Name*',
30:   'Jerome': 'Jerome',
31:   'KM': 'KM',
32:   'Last Name*': 'Last Name*',
33:   'Bell': 'Bell',
34:   'Mobile Number*': 'Mobile Number*',
35:   'Enter Mobile number': 'Enter Mobile number',
36:   'Confirm Password*': 'Confirm Password*',
37:   'Enter confirm password': 'Enter confirm password',
38:   'Referral Code': 'Referral Code',
39:   'Enter referral code': 'Enter referral code',
40:   'Already have an account?': 'Already have an account?',
41:   'Creating account...': 'Creating account...',
42:   'signup_failed': 'Signup failed',
43:   'Please enter first name': 'Please enter first name',
44:   'Please enter last name': 'Please enter last name',
45:   'Please enter a valid phone number': 'Please enter a valid phone number',
46:   'Password must be at least 6 characters': 'Password must be at least 6 characters',
47:   'Password and Confirm password do not match': 'Password and Confirm password do not match',
48:   'Email already in use': 'Email already in use',
49:   'Password is too weak': 'Password is too weak',
50:   'Invalid email address': 'Invalid email address',
51:   'something_went_wrong': 'Something went wrong',
52:   'Enter your registered email to receive a reset link.': 'Enter your registered email to receive a reset link.',
53:   'Send Link': 'Send Link',
54:   'Remember Password?': 'Remember Password?',
55:   'Please enter your email address.': 'Please enter your email address.',
56:   'Please enter a valid email address.': 'Please enter a valid email address.',
57:   "reset_password_link_sent": "Reset password link sent to @email",
58:   'Use your mobile number to Log in easily and securely.': 'Use your mobile number to Log in easily and securely.',
59:   'Send Code': 'Send Code',
60:   'Email address': 'Email address',
61:   'Please enter a valid 10-digit mobile number': 'Please enter a valid 10-digit mobile number',
62:   'Sending OTP...': 'Sending OTP...',
63:   'Invalid phone number': 'Invalid phone number',
64:   'OTP verification failed': 'OTP verification failed',
65:   'Something went wrong. Please try again.': 'Something went wrong. Please try again.',
66:   'Enter the OTP sent to your mobile': 'Enter the OTP sent to your mobile',
67:   'Resend OTP': 'Resend OTP',
68:   'Verify': 'Verify',
69:   'OTP sent': 'OTP sent',
70:   'Enter valid 6-digit OTP': 'Enter valid 6-digit OTP',
71:   'Verifying OTP...': 'Verifying OTP...',
72:   'This user is disabled': 'This user is disabled',
73:   'Invalid OTP or Verification Failed': 'Invalid OTP or Verification Failed',
74:   'eMart': 'eMart',
75:   'All Your Needs in One App!': 'All Your Needs in One App!',
76:   'Explore Our Services': 'Explore Our Services',
77:   'Alert!': 'Alert!',
78:   'Alert': 'Alert',
79:   'If you select this Section/Service, your previously added items will be removed from the cart.': 'If you select this Section/Service, your previously added items will be removed from the cart.',
80:   'Cancel': 'Cancel',
81:   'OK': 'OK',
82:   'Home': 'Home',
83:   'My Bookings': 'My Bookings',
84:   'Favourites': 'Favourites',
85:   'Orders': 'Orders',
86:   'Profile': 'Profile',
87:   'Wallet': 'Wallet',
88:   'Service is unavailable at the selected address.': 'Service is unavailable at the selected address.',
89:   'Pickup Location': 'Pickup Location',
90:   'Destination Location': 'Destination Location',
91:   'Continue': 'Continue',
92:   'Please select source location': 'Please select source location',
93:   'Please select destination location': 'Please select destination location',
94:   'Select Your Vehicle Type': 'Select Your Vehicle Type',
95:   "pay_amount": "Pay @amount",
96:   'Please select a vehicle type first.': 'Please select a vehicle type first.',
97:   'Select Payment Method': 'Select Payment Method',
98:   'Preferred Payment': 'Preferred Payment',
99:   'Other Payment Options': 'Other Payment Options',
100:   'Please select a payment method': 'Please select a payment method',
101:   'Insufficient wallet balance. Please select another payment method.': 'Insufficient wallet balance. Please select another payment method.',
102:   'Promo code': 'Promo code',
103:   'Promo Code': 'Promo Code',
104:   'Apply promo code': 'Apply promo code',
105:   'This offer not eligible for this booking': 'This offer not eligible for this booking',
106:   'View All': 'View All',
107:   'Write coupon Code': 'Write coupon Code',
108:   'Redeem now': 'Redeem now',
109:   'Please enter a coupon code': 'Please enter a coupon code',
110:   'Coupon applied successfully': 'Coupon applied successfully',
111:   'This coupon code has been expired': 'This coupon code has been expired',
112:   'Invalid coupon code': 'Invalid coupon code',
113:   'Order Summary': 'Order Summary',
114:   'Subtotal': 'Subtotal',
115:   'SubTotal': 'SubTotal',
116:   'Discount': 'Discount',
117:   'Order Total': 'Order Total',
118:   'Confirm Booking': 'Confirm Booking',
119:   'Waiting for driver....': 'Waiting for driver....',
120:   'Cancel Ride': 'Cancel Ride',
121:   'Ride cancelled successfully': 'Ride cancelled successfully',
122:   'Failed to cancel ride': 'Failed to cancel ride',
123:   'Otp :': 'Otp :',
124:   'SOS': 'SOS',
125:   'Please wait...': 'Please wait...',
126:   'Your SOS request has been submitted to admin': 'Your SOS request has been submitted to admin',
127:   'Your SOS request is already submitted': 'Your SOS request is already submitted',
128:   'Pay Now': 'Pay Now',
129:   'Something went wrong, please contact admin.': 'Something went wrong, please contact admin.',
130:   'Please select payment method': 'Please select payment method',
131:   'Driver at Pickup': 'Driver at Pickup',
132:   'Driver Location': 'Driver Location',
133:   'Payment method changed': 'Payment method changed',
134:   'Payment successfully': 'Payment successfully',
135:   'Payment Successful!!': 'Payment Successful!!',
136:   'Payment UnSuccessful!!': 'Payment UnSuccessful!!',
137:   'Payment Failed': 'Payment Failed',
138:   'Payment Processing!! via': 'Payment Processing!! via',
139:   'Payment Failed!!': 'Payment Failed!!',
140:   'Coupon': 'Coupon',
141:   'Coupon not found': 'Coupon not found',
142:   'Tap To Apply': 'Tap To Apply',
143:   'My Booking': 'My Booking',
144:   'Login': 'Login',
145:   'Where are you going for?': 'Where are you going for?',
146:   'Ride': 'Ride',
147:   'City rides, 24x7 availability': 'City rides, 24x7 availability',
148:   'Intercity/Outstation': 'Intercity/Outstation',
149:   'Long trips, prepaid options': 'Long trips, prepaid options',
150:   'Every Ride. Every Driver. Verified.': 'Every Ride. Every Driver. Verified.',
151:   'All drivers go through ID checks and background verification for your safety.': 'All drivers go through ID checks and background verification for your safety.',
152:   'Ride Details': 'Ride Details',
153:   'Order Id:': 'Order Id:',
154:   'Booking Date:': 'Booking Date:',
155:   'Ride & Fare Summary': 'Ride & Fare Summary',
156:   'Add Review': 'Add Review',
157:   'Complain': 'Complain',
158:   'Distance': 'Distance',
159:   'Duration': 'Duration',
160:   'Update Review': 'Update Review',
161:   'How is your trip?': 'How is your trip?',
162:   'Your feedback will help us improve \n driving experience better': 'Your feedback will help us improve \n driving experience better',
163:   'Rate for': 'Rate for',
164:   'Type comment....': 'Type comment....',
165:   'Please provide rating and comment': 'Please provide rating and comment',
166:   'Submit in...': 'Submit in...',
167:   'Title': 'Title',
168:   'Save': 'Save',
169:   'Type Description....': 'Type Description....',
170:   'Order data not found': 'Order data not found',
171:   'Failed to load complaint': 'Failed to load complaint',
172:   'Please enter complaint title': 'Please enter complaint title',
173:   'Please enter complaint description': 'Please enter complaint description',
174:   'Your complaint has been submitted to admin': 'Your complaint has been submitted to admin',
175:   'Your complaint is already submitted': 'Your complaint is already submitted',
176:   'Something went wrong, please try again': 'Something went wrong, please try again',
177:   'Popular Destinations': 'Popular Destinations',
178:   'Ride History': 'Ride History',
179:   'No order found': 'No order found',
180:   'You do not have sufficient wallet balance': 'You do not have sufficient wallet balance',
181:   "new_tab": "New",
182:   "on_going_tab": "On Going",
183:   "completed_tab": "Completed",
184:   "cancelled_tab": "Cancelled",
185:   'New': 'New',
186:   'On Going': 'On Going',
187:   'Completed': 'Completed',
188:   'Cancelled': 'Cancelled',
189:   'My Addresses': 'My Addresses',
190:   'Allows users to view, manage, add, or edit delivery addresses': 'Allows users to view, manage, add, or edit delivery addresses',
191:   'Address not found': 'Address not found',
192:   'Default': 'Default',
193:   'Add New Address': 'Add New Address',
194:   'Edit Address': 'Edit Address',
195:   'Add a New Address': 'Add a New Address',
196:   'Enter your location details so we can deliver your orders quickly and accurately.': 'Enter your location details so we can deliver your orders quickly and accurately.',
197:   'Set as Default Address': 'Set as Default Address',
198:   'Choose Location': 'Choose Location',
199:   'Flat/House/Floor/Building*': 'Flat/House/Floor/Building*',
200:   'Area/Sector/Locality*': 'Area/Sector/Locality*',
201:   'Nearby Landmark': 'Nearby Landmark',
202:   'Save Address As': 'Save Address As',
203:   'Enter address details': 'Enter address details',
204:   'Enter area/locality': 'Enter area/locality',
205:   'Add a landmark': 'Add a landmark',
206:   'Save Address': 'Save Address',
207:   'Please select Location': 'Please select Location',
208:   'Please Enter Flat / House / Floor / Building': 'Please Enter Flat / House / Floor / Building',
209:   'Please Enter Area / Sector / Locality': 'Please Enter Area / Sector / Locality',
210:   'Search the store, item and more...': 'Search the store, item and more...',
211:   'Category': 'Category',
212:   'Highlights for you': 'Highlights for you',
213:   'New Arrivals': 'New Arrivals',
214:   'View All Arrivals': 'View All Arrivals',
215:   'Top Brands': 'Top Brands',
216:   'Brand': 'Brand',
```

### C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart

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
28:                 Text("eMart".tr, style: AppThemeData.semiBoldTextStyle(fontSize: 22, color: themeController.isDark.value ? AppThemeData.grey50 : AppThemeData.grey900)),
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
28:                 Text("eMart".tr, style: AppThemeData.semiBoldTextStyle(fontSize: 22, color: themeController.isDark.value ? AppThemeData.grey50 : AppThemeData.grey900)),
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

STATUS: CUSTOMER_HOME_SERVICES_SOURCE_QUERY_AUDITED