# SERVICE 56C-LOCAL VENDOR PATH INSPECTION

Generated: 07/02/2026 15:40:41
Mode: READ ONLY.

Target path:
$vendorPath

Purpose: inspect whether this path is Vendor APK, Vendor Web / Store Panel, or another component before asking Codex to patch.

PATH_EXISTS: True

## Root Files
TEXT_START

Mode   Length LastWriteTime         Name                         
----   ------ -------------         ----                         
d-----        6/28/2026 6:30:33 PM  .dart_tool                   
d-----        6/28/2026 6:30:34 PM  android                      
d-----        6/12/2026 2:13:33 AM  assets                       
d-----        6/12/2026 2:13:33 AM  ios                          
d-----        6/12/2026 2:13:34 AM  lib                          
d-----        6/12/2026 2:13:34 AM  test                         
-a---- 39502  6/28/2026 6:30:33 PM  .flutter-plugins-dependencies
-a---- 709    4/22/2026 10:08:26 AM .gitignore                   
-a---- 1114   4/22/2026 10:08:26 AM .metadata                    
-a---- 1420   4/22/2026 10:08:26 AM analysis_options.yaml        
-a---- 184    4/22/2026 10:08:26 AM devtools_options.yaml        
-a---- 457    4/22/2026 10:08:26 AM firebase.json                
-a---- 65896  6/28/2026 6:30:33 PM  pubspec.lock                 
-a---- 4838   4/22/2026 10:08:26 AM pubspec.yaml                 
-a---- 549    4/22/2026 10:08:26 AM README.md                    



TEXT_END

## Project Type Markers
TEXT_START
ios : True
package.json : False
android : True
routes_web_php : False
firebase_options_dart : True
composer.json : False
pubspec.yaml : True
lib : True
TEXT_END

PROJECT_TYPE_GUESS: FLUTTER_APP_PROBABLY_VENDOR_APK

## Search Summary
TEXT_START
SEARCHABLE_FILE_COUNT: 244
FirebaseFirestore : 4
firebase.firestore : 0
collection( : 155
vendor_products : 1
vendor_categories : 1
vendors : 20
orders : 201
createdAt : 121
updatedAt : 9
vendorID : 151
categoryID : 29
publish : 42
takeawayOption : 6
photo : 93
photos : 37
restaurantMenuPhotos : 6
store.yourdomain.com : 0
Store Panel : 0
Vendor Web : 0
STORE_PANEL : 0
VENDOR_PANEL : 0
TEXT_END

## Important Matches Limited
TEXT_START

  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\analysis_options.yaml:15:  # included 
above or to enable additional rules. A list of all available lints
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\analysis_options.yaml:16:  # and their 
documentation is published at https://dart.dev/lints.
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\analysis_options.yaml:17:  #
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\analysis_options.yaml:18:  # Instead of 
disabling a lint rule for the entire project in the
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\analysis_options.yaml:19:  # section 
below, it can also be suppressed for a single line of code
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:2:description: "A new Flutter 
project."
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:3:# The following line 
prevents the package from being accidentally published to
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:4:# pub.dev using `flutter 
pub publish`. This is preferred for private packages.
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:5:publish_to: 'none' # Remove 
this line if you wish to publish to pub.dev
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:6:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:7:# The following defines the 
version and build number for your application.
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:8:# A version number is three 
numbers separated by dots, like 1.2.43
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:12:# In Android, build-name 
is used as versionName while build-number used as versionCode.
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:13:# Read more about Android 
versioning at https://developer.android.com/studio/publish/versioning
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:14:# In iOS, build-name is 
used as CFBundleShortVersionString while build-number is used as CFBundleVersion.
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:15:# Read more about iOS 
versioning at
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\pubspec.yaml:16:# 
https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\view_adver
tisement_screen.dart:46:                    ShowToastDialog.showLoader("Please wait".tr);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\view_adver
tisement_screen.dart:47:                    VendorModel? vendorModel = await 
FireStoreUtils.getVendorById(controller.advertisementModel.value.vendorId.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\view_adver
tisement_screen.dart:48:                    ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\view_adver
tisement_screen.dart:49:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\view_adver
tisement_screen.dart:50:                    Get.to(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\view_adver
tisement_screen.dart:114:                            buildRow(label: 'Ad Type:'.tr, value: controller.advertisementModel.value.type 
== 'restaurant_promotion' ? 'Store Promotion'.tr : 'Video Promotion'.tr, isDarkMode: isDark),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\view_adver
tisement_screen.dart:115:                            buildRow(label: 'Ad Created Date:'.tr, value: DateFormat('MMM d, 
yyyy').format(controller.advertisementModel.value.createdAt!.toDate()), isDarkMode: isDark),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\view_adver
tisement_screen.dart:116:                            buildRow(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\view_adver
tisement_screen.dart:117:                              label: 'Duration:'.tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\view_adver
tisement_screen.dart:118:                              value:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:203:                      ShowToastDialog.showLoader("Please wait".tr);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:204:                      await FireStoreUtils.removeStory(Constant.userModel!.vendorID.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:205:                        ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:206:                        ShowToastDialog.showToast("Story remove successfully".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:207:                        controller.getStory();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:259:                        StoryModel storyModel = StoryModel(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:260:                          vendorID: Constant.userModel!.vendorID,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:261:                          videoThumbnail: thumbnailUrl,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:262:                          videoUrl: mediaFilesURLs,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:263:                          createdAt: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:264:                          sectionID: Constant.userModel!.sectionId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:265:                        );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen.d
art:266:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:44:              ShowToastDialog.showLoader("Please wait".tr);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:45:              VendorModel? vendorModel = await FireStoreUtils.getVendorById(Constant.userModel!.vendorID.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:46:              ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:47:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:48:              Get.to(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:102:                                      Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:103:                                        Constant.timestampToDate(inboxModel.createdAt!),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:104:                                        textAlign: TextAlign.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:105:                                        style: TextStyle(fontFamily: AppThemeData.regular, fontSize: 16, color: isDark ? 
AppThemeData.grey400 : AppThemeData.grey500),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:106:                                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:136:        // orderBy is compulsory to enable pagination
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:137:        query: FireStoreUtils.fireStore.collection(CollectionName.chatAdmin).where("restaurantId", isEqualTo: 
FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:138:        //Change types customerId
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:139:        initialLoader: Constant.loader(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dar
t:140:        // to fetch real-time data
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:74:  
                  onEmpty: Constant.showEmptyView(message: "No conversion found".tr, isDark: isDark),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:75:  
                  query: 
FireStoreUtils.fireStore.collection(CollectionName.chat).doc(controller.orderId.value).collection("thread").orderBy('createdAt', 
descending: true),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:76:  
                  isLive: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:77:  
                  viewType: ViewType.list,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:78:  
                ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:198: 
                 Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:199: 
                   DateFormat('MMM d, yyyy hh:mm 
aa').format(DateTime.fromMillisecondsSinceEpoch(data.createdAt!.millisecondsSinceEpoch)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:200: 
                   style: const TextStyle(color: Colors.grey, fontSize: 12),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:201: 
                 ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:202: 
               ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:254: 
                 Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:255: 
                   DateFormat('MMM d, yyyy hh:mm 
aa').format(DateTime.fromMillisecondsSinceEpoch(data.createdAt!.millisecondsSinceEpoch)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:256: 
                   style: const TextStyle(color: Colors.grey, fontSize: 12),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:257: 
                 ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart:258: 
               ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:38:        query: FireStoreUtils.fireStore
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:39:            .collection(CollectionName.chat)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:40:            .where("sender_receiver_id", arrayContains: FireStoreUtils.getCurrentUid())
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:41:            .where('chatType', isEqualTo: Constant.userRoleVendor)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:42:            .where('type', isEqualTo: 'orderChat')
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:43:            .orderBy('createdAt', descending: true),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:44:        //item builder type is compulsory.
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:45:        physics: const BouncingScrollPhysics(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:46:        itemBuilder: (context, documentSnapshots, index) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:108:                                      Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:109:                                        Constant.timestampToDate(inboxModel.createdAt!),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:110:                                        textAlign: TextAlign.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:111:                                        style: TextStyle(fontFamily: AppThemeData.regular, fontSize: 16, color: isDark ? 
AppThemeData.grey400 : AppThemeData.grey500),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:112:                                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:177://               UserModel? restaurantUser = await FireStoreUtils.getUserProfile(inboxModel.restaurantId.toString());
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:178://               VendorModel? vendorModel = await FireStoreUtils.getVendorById(restaurantUser!.vendorID.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:179://               ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:180:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:181://               Get.to(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:225://                                 Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:226://                                   Constant.timestampToDate(inboxModel.createdAt!),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:227://                                   textAlign: TextAlign.start,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:228://                                   style: TextStyle(fontFamily: AppThemeData.regular, fontSize: 16, color: isDark ? 
AppThemeData.grey400 : AppThemeData.grey500),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:229://                                 ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:250://         // orderBy is compulsory to enable pagination
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:251://         query: FireStoreUtils.fireStore.collection('chat_store').where("restaurantId", isEqualTo: 
FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:252://         //Change types customerId
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:253://         initialLoader: Constant.loader(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scree
n.dart:254://         // to fetch real-time data
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_
screen.dart:114:                        )
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_
screen.dart:115:                      : controller.userModel.value.vendorID == null || controller.userModel.value.vendorID!.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_
screen.dart:116:                      ? Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_
screen.dart:117:                          padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_
screen.dart:118:                          child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_
screen.dart:287:                          Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_
screen.dart:288:                            Constant.timestampToDateTime(orderModel.createdAt!),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_
screen.dart:289:                            style: TextStyle(color: isDark ? AppThemeData.grey300 : AppThemeData.grey600, 
fontFamily: AppThemeData.medium, fontWeight: FontWeight.w500),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_
screen.dart:290:                          ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_
screen.dart:291:                        ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.d
art:35:            actions: [
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.d
art:36:              ((Constant.userModel?.isAutoVerify == false && Constant.userModel?.isDocumentVerify == false) || 
(Constant.userModel?.vendorID == null || Constant.userModel?.vendorID?.isEmpty == true))
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.d
art:37:                  ? SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.d
art:38:                  : InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.d
art:39:                      splashColor: Colors.transparent,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.d
art:103:                )
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.d
art:104:              : (Constant.userModel?.vendorID?.isEmpty == true || Constant.userModel?.vendorID == null)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.d
art:105:              ? Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.d
art:106:                  padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen.d
art:107:                  child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.d
art:39:                ? Constant.loader()
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.d
art:40:                : Constant.userModel?.vendorID == null || Constant.userModel?.vendorID?.isEmpty == true
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.d
art:41:                    ? Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.d
art:42:                        padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.d
art:43:                        child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.d
art:143:            onPressed: () {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.d
art:144:              if (Constant.userModel?.vendorID == null || Constant.userModel?.vendorID == '') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.d
art:145:                ShowToastDialog.showToast("Please add your restaurant details before creating a employee role.".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.d
art:146:              } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_role_screens\role_screen.d
art:147:                Get.to(const AddEditRoleScreen())!.then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\employee_list_scre
en.dart:40:                onTap: () async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\employee_list_scre
en.dart:41:                  if (Constant.userModel?.vendorID?.isEmpty == true || Constant.userModel?.vendorID == null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\employee_list_scre
en.dart:42:                    ShowToastDialog.showToast("Please add your restaurant details before creating a employee user.".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\employee_list_scre
en.dart:43:                  } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\employee_list_scre
en.dart:44:                    ShowToastDialog.showLoader("Please wait".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\employee_list_scre
en.dart:75:              ? Constant.loader()
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\employee_list_scre
en.dart:76:              : (Constant.userModel?.vendorID?.isEmpty == true || Constant.userModel?.vendorID == null)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\employee_list_scre
en.dart:77:              ? Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\employee_list_scre
en.dart:78:                  padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\employee_list_scre
en.dart:79:                  child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:85:                        physics: const BouncingScrollPhysics(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:86:                        query: FireStoreUtils.fireStore.collection(CollectionName.chat).doc(FireStoreUtils.getCurrentUi
d()).collection('thread').orderBy('createdAt', descending: true),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:87:                        isLive: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:88:                        shrinkWrap: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:89:                        reverse: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:277:                      Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:278:                        Constant.dateAndTimeFormatTimestamp(data.createdAt),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:279:                        style: TextStyle(fontFamily: AppThemeData.regular, fontSize: 12, color: isDark ? 
AppThemeData.grey100 : AppThemeData.grey800),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:280:                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:281:                      data.seen == true
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:365:                      Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:366:                        Constant.dateAndTimeFormatTimestamp(data.createdAt),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:367:                        style: TextStyle(fontFamily: AppThemeData.regular, fontSize: 12, color: isDark ? 
AppThemeData.grey100 : AppThemeData.grey800),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:368:                      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_sc
reen.dart:369:                    ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:168:  
                      )
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:169:  
                    : controller.userModel.value.vendorID == null || controller.userModel.value.vendorID!.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:170:  
                    ? Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:171:  
                        padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:172:  
                        child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:556:  
                  Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:557:  
                    Constant.timestampToDateTime(orderModel.createdAt!),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:558:  
                    style: TextStyle(color: isDark ? AppThemeData.grey100 : AppThemeData.grey800, fontSize: 14, fontWeight: 
FontWeight.w500, fontFamily: AppThemeData.semiBold),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:559:  
                  ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:560:  
                ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:674:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:675:  
                              await 
FireStoreUtils.fireStore.collection(CollectionName.wallet).doc(historyModel.id).set(historyModel.toJson());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:676:  
                              await FireStoreUtils.updateUserWallet(amount: finalAmount.toString(), userId: 
orderModel.author!.id.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:677:  
                            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:678:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1134: 
                   Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1135: 
                     Constant.timestampToDateTime(orderModel.createdAt!),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1136: 
                     style: TextStyle(color: isDark ? AppThemeData.grey100 : AppThemeData.grey800, fontSize: 14, fontWeight: 
FontWeight.w500, fontFamily: AppThemeData.semiBold),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1137: 
                   ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1138: 
                 ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1256:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1257: 
                             await 
FireStoreUtils.fireStore.collection(CollectionName.wallet).doc(historyModel.id).set(historyModel.toJson());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1258: 
                             await FireStoreUtils.updateUserWallet(amount: finalAmount.toString(), userId: 
orderModel.author!.id.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1259: 
                           }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1260:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1294:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1295: 
                           await 
FireStoreUtils.fireStore.collection(CollectionName.wallet).doc(historyTaxModel.id).set(historyTaxModel.toJson());
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1296: 
                           await 
FireStoreUtils.fireStore.collection(CollectionName.wallet).doc(historyModel.id).set(historyModel.toJson());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1297: 
                           double finalAmountdata = finalAmount + totalTaxAmount;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1298: 
                           await FireStoreUtils.updateUserWallet(amount: (-finalAmountdata).toString(), userId: 
FireStoreUtils.getCurrentUid().toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1299: 
                           await controller.getOrder();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1378: 
                               UserModel? restaurant = await FireStoreUtils.getUserProfile(orderModel.vendor!.author.toString());
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1379: 
                               // VendorModel? vendorModel = await FireStoreUtils.getVendorById(orderModel.vendorID.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1380: 
                               ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1381:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1382: 
                               Get.to(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1674: 
                   Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1675: 
                     Constant.timestampToDateTime(orderModel.createdAt!),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1676: 
                     style: TextStyle(color: isDark ? AppThemeData.grey100 : AppThemeData.grey800, fontSize: 14, fontWeight: 
FontWeight.w500, fontFamily: AppThemeData.semiBold),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1677: 
                   ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart:1678: 
                 ],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:225:                                                controller.productList[index].id = Constant.getUuid();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:226:                                                controller.productList[index].vendorID = Constant.userModel!.vendorID;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:227:                                                controller.productList[index].createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:228:                                                controller.productList[index].sectionId = Constant.selectedSection?.id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:229:                                                await FireStoreUtils.updateProduct(controller.productList[index]);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:230:                                                await controller.getVendorProduct();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:335:              productModel.id = Constant.getUuid();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:336:              productModel.vendorID = Constant.userModel!.vendorID;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:337:              productModel.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:338:              productModel.taxSetting = selected;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:339:              await FireStoreUtils.updateProduct(productModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scree
n.dart:340:              await controller.getVendorProduct();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:39:              (controller.userModel.value.isDocumentVerify == false && controller.userModel.value.isAutoVerify == false) ||
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:40:                      (controller.userModel.value.vendorID == null || controller.userModel.value.vendorID!.isEmpty)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:41:                  ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:42:                  : InkWell(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:43:                      onTap: () {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:113:                )
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:114:              : controller.userModel.value.vendorID == null || controller.userModel.value.vendorID!.isEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:115:              ? Padding(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:116:                  padding: const EdgeInsets.symmetric(horizontal: 16),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:117:                  child: Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:425:                                              Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:426:                                                "Publish".tr,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:427:                                                textAlign: TextAlign.center,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:428:                                                style: TextStyle(color: isDark ? AppThemeData.grey100 : 
AppThemeData.grey800, fontSize: 16, fontFamily: AppThemeData.bold),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:429:                                              ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:433:                                                  activeTrackColor: AppThemeData.primary300,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:434:                                                  value: controller.productList[index].publish ?? false,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:435:                                                  onChanged: (value) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:436:                                                    controller.updateList(index, controller.productList[index].publish!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:437:                                                  },
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:438:                                                ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_screen
.dart:439:                                              ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
158:                                        (controller.userModel.value.isAutoVerify == false && 
controller.userModel.value.isDocumentVerify == false) ||
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
159:                                                (controller.userModel.value.vendorID == null || 
controller.userModel.value.vendorID!.isEmpty)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
160:                                            ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
161:                                            : Constant.storyEnable == false
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
162:                                            ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
188:                                              (controller.userModel.value.isAutoVerify == false && 
controller.userModel.value.isDocumentVerify == false) ||
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
189:                                                  (controller.userModel.value.vendorID == null || 
controller.userModel.value.vendorID!.isEmpty)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
190:                                              ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
191:                                              : Constant.storyEnable == false
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
192:                                              ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
242:                                        (Constant.userModel?.isAutoVerify == false && Constant.userModel?.isDocumentVerify == 
false) ||
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
243:                                                (controller.userModel.value.vendorID == null || 
controller.userModel.value.vendorID!.isEmpty)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
244:                                            ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
245:                                            : Constant.getEmployeeRolePermission(module: "Manage Products") == true
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
246:                                            ? cardDecoration(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
275:                                            : (Constant.userModel?.isAutoVerify == false && 
Constant.userModel?.isDocumentVerify == false) ||
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
276:                                                  (controller.userModel.value.vendorID == null || 
controller.userModel.value.vendorID?.isEmpty == true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
277:                                            ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
278:                                            : (Constant.getEmployeeRolePermission(module: "Working Hours") == true)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
279:                                            ? cardDecoration(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
446:                          (Constant.userModel?.isAutoVerify == false && Constant.userModel?.isDocumentVerify == false) ||
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
447:                                  (controller.userModel.value.vendorID == null || controller.userModel.value.vendorID!.isEmpty) 
||
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
448:                                  ((Constant.getEmployeeRolePermission(module: "Add Dine in") == false) && 
(Constant.getEmployeeRolePermission(module: "Dine in Request") == false))
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
449:                              ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
450:                              : Constant.selectedSection!.dineInActive == true &&
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
583:                          (Constant.userModel?.isAutoVerify == false && Constant.userModel?.isDocumentVerify == false) ||
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
584:                                  (controller.userModel.value.vendorID == null || controller.userModel.value.vendorID!.isEmpty)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
585:                              ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
586:                              : ((Constant.getEmployeeRolePermission(module: "Offers") == true) || 
(Constant.getEmployeeRolePermission(module: "Special Discounts") == true))
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
587:                              ? Column(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
1105:                    child: Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
1106:                      Constant.userModel!.vendorID != null && Constant.userModel!.vendorID!.isNotEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
1107:                          ? "${Constant.vendorAdminCommission?.commissionType == 'Percent' || 
Constant.vendorAdminCommission?.commissionType == 'percentage' ? "${Constant.vendorAdminCommission?.amount} %" : 
"${Constant.amountShow(amount: Constant.vendorAdminCommission?.amount)} "}${'Flat'.tr} ${"admin commission will be charged from 
customer billing orders and the admin charge will be earned after the order is accepted by the store.".tr}"
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
1108:                          : "${Constant.selectedSection!.adminCommision!.commissionType == 'Percent' || 
Constant.selectedSection!.adminCommision!.commissionType == 'percentage' ? "${Constant.selectedSection!.adminCommision!.amount} %" 
: "${Constant.amountShow(amount: Constant.selectedSection!.adminCommision!.amount)} Flat"} ${"admin commission will be charged from 
customer billing orders and the admin charge will be earned after the order is accepted by the store.".tr}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart:
1109:                      style: const TextStyle(fontFamily: AppThemeData.medium, fontSize: 9, color: AppThemeData.grey400),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\subscription_plan_screen\subscripti
on_history_screen.dart:153:                                      Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\subscription_plan_screen\subscripti
on_history_screen.dart:154:                                        
Constant.timestampToDateTime(subscriptionHistoryModel.subscriptionPlan!.createdAt!),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\subscription_plan_screen\subscripti
on_history_screen.dart:155:                                        textAlign: TextAlign.end,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\subscription_plan_screen\subscripti
on_history_screen.dart:156:                                        maxLines: 2,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\subscription_plan_screen\subscripti
on_history_screen.dart:157:                                        style: TextStyle(fontSize: 14, fontFamily: AppThemeData.medium, 
color: isDark ? AppThemeData.grey50 : AppThemeData.grey800),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\subscription_plan_screen\subscripti
on_plan_screen.dart:373:                            child: Text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\subscription_plan_screen\subscripti
on_plan_screen.dart:374:                              // Constant.userModel!.vendorID != null && 
Constant.userModel!.vendorID!.isNotEmpty
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\subscription_plan_screen\subscripti
on_plan_screen.dart:375:                              //     ? "Pay a commission of 
${Constant.vendorAdminCommission?.commissionType == 'Percent' ? "${Constant.vendorAdminCommission?.amount} %" : 
"${Constant.amountShow(amount: Constant.vendorAdminCommission?.amount)} Flat"} on each order"
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\subscription_plan_screen\subscripti
on_plan_screen.dart:376:                              //         .tr
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\subscription_plan_screen\subscripti
on_plan_screen.dart:377:                              //     :
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\wallet_screen\wallet_screen.dart:11
8:                                  (controller.userModel.value.isDocumentVerify == false && 
controller.userModel.value.isAutoVerify == false) ||
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\wallet_screen\wallet_screen.dart:11
9:                                          (controller.userModel.value.vendorID == null || 
controller.userModel.value.vendorID!.isEmpty)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\wallet_screen\wallet_screen.dart:12
0:                                      ? const SizedBox()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\wallet_screen\wallet_screen.dart:12
1:                                      : Expanded(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\wallet_screen\wallet_screen.dart:12
2:                                          child: RoundedButtonFill(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\wallet_screen\wallet_screen.dart:59
9:                            amount: controller.amountTextFieldController.value.text,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\wallet_screen\wallet_screen.dart:60
0:                            vendorID: controller.userModel.value.vendorID,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\wallet_screen\wallet_screen.dart:60
1:                            paymentStatus: "Pending",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\wallet_screen\wallet_screen.dart:60
2:                            paidDate: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\wallet_screen\wallet_screen.dart:60
3:                            id: Constant.getUuid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\collection_name.dart:30:  
static const String brands = "brands";
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\collection_name.dart:31:  
static const String vendorCategories = "vendor_categories";
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\collection_name.dart:32:  
static const String vendorProducts = "vendor_products";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\collection_name.dart:33:  
static const String vendors = "vendors";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\collection_name.dart:34:  
static const String wallet = "wallet";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\collection_name.dart:35:  
static const String withdrawMethod = "withdraw_method";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:152:      model.id = uuId;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:153:      model.vendorId = Constant.userModel?.vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:154:      model.title = advertisementTitleController.value.text.trim();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:155:      model.description = descriptionController.value.text.trim();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:156:      model.startDate = Timestamp.fromDate(DateTime(startValidityDate.value.year, startValidityDate.value.month, 
startValidityDate.value.day, 0, 0, 0));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:170:        model.priority = advertisementModel.value.priority ?? 'N/A';
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:171:        model.createdAt = advertisementModel.value.createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:172:        model.paymentStatus = advertisementModel.value.paymentStatus ?? false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:173:        model.pauseNote = advertisementModel.value.pauseNote ?? '';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:174:        model.canceledNote = advertisementModel.value.canceledNote ?? '';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:181:        model.priority = 'N/A';
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:182:        model.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:183:        model.paymentStatus = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:184:      }
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:185:      model.updatedAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:186:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:187:      AdvertisementModel modeldata = await FireStoreUtils.firebaseCreateAdvertisement(model);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_advertisement_controller
.dart:188:      if (modeldata.id != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:6
9:      // Load vendor model to get sectionId + zoneId.
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:7
0:      if (Constant.userModel?.vendorID != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:7
1:        await FireStoreUtils.getVendorById(Constant.userModel!.vendorID!).then((v) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:7
2:          if (v != null) vendorModel.value = v;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:7
3:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:7
4:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:1
32:          driverModel.value.fcmToken = '';
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:1
33:          driverModel.value.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:1
34:          driverModel.value.appIdentifier = Platform.isAndroid ? 'android' : 'ios';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:1
35:          driverModel.value.provider = 'email';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:1
36:        } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:1
78:    driverModel.value.zoneId = vendorModel.value.zoneId;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:1
79:    driverModel.value.vendorID = Constant.userModel?.vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:1
80:    driverModel.value.isAutoVerify = Constant.userModel?.isAutoVerify;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:1
81:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_driver_controller.dart:1
82:    // Multi-section fields (driver app format).
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:51:    }
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:52:    if (Constant.userModel!.vendorID != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:53:      await FireStoreUtils.getVendorById(Constant.userModel!.vendorID.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:54:        if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:55:          vendorModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:56:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:106:        couponModel.value.isPublic = isPublic.value;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:107:        couponModel.value.vendorID = Constant.userModel!.vendorID.toString();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:108:        couponModel.value.description = titleController.value.text;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:109:        couponModel.value.sectionId = vendorModel.value.sectionId;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:110:        couponModel.value.createdAt = couponModel.value.createdAt ?? Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:111:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:112:        await FireStoreUtils.setCoupon(couponModel.value)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:113:            .then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:158:  //     couponModel.value.isPublic = isPublic.value;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:159:  //     couponModel.value.vendorID = Constant.userModel!.vendorID.toString();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:160:  //     couponModel.value.description = titleController.value.text;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:161:  //     couponModel.value.createdAt = couponModel.value.createdAt ?? Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:162:  //     await FireStoreUtils.setCoupon(couponModel.value).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:163:  //       ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller.d
art:164:  //       Get.back(result: true);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_role_controller.dar
t:51:      employeeRoleModel.value.permissions = permissionList;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_role_controller.dar
t:52:      employeeRoleModel.value.vendorId = Constant.userModel?.vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_role_controller.dar
t:53:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_role_controller.dar
t:54:      await FireStoreUtils.setEmployeeRole(employeeRoleModel.value).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_role_controller.dar
t:55:        ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_employee_controller.dart
:102:          employeeModel.value.countryISOCode = countryISOCodeEditingController.value.text.trim();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_employee_controller.dart
:103:          employeeModel.value.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_employee_controller.dart
:104:          employeeModel.value.appIdentifier = Platform.isAndroid ? 'android' : 'ios';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_employee_controller.dart
:105:          employeeModel.value.provider = 'email';
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_employee_controller.dart
:106:          employeeModel.value.vendorID = Constant.userModel?.vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_employee_controller.dart
:107:          employeeModel.value.id = credential.user?.uid;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_employee_controller.dart
:108:          employeeModel.value.sectionId = Constant.userModel?.sectionId;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_employee_controller.dart
:109:        } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
65:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
66:  RxBool isPublish = true.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
67:  RxBool isPureVeg = true.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
68:  RxBool isNonVeg = false.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
69:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
128:  Future<void> getArgument() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
129:    if (Constant.userModel!.vendorID != null && Constant.userModel!.vendorID!.isNotEmpty) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
130:      await FireStoreUtils.getVendorById(Constant.userModel!.vendorID.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
131:        if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
132:          vendorModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
133:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
144:    print(Constant.userModel!.sectionId);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
145:    print(vendorModel.value.categoryID);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
146:    await FireStoreUtils.getVendorCategoryById(Constant.userModel!.sectionId.toString()).then((value) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
147:      if (vendorModel.value.categoryID!.isNotEmpty) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
148:        vendorCategoryList.value = value.where((category) => vendorModel.value.categoryID!.contains(category.id)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
149:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
150:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
151:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
169:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
170:      isPublish.value = productModel.value.publish ?? false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
171:      productTitleController.value.text = productModel.value.name.toString();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
172:      productDescriptionController.value.text = productModel.value.description.toString();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
173:      regularPriceController.value.text = productModel.value.price.toString();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
182:      isNonVeg.value = productModel.value.nonveg ?? false;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
183:      takeAway.value = productModel.value.takeawayOption ?? false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
184:      if (productModel.value.productSpecification != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
185:        productModel.value.productSpecification!.forEach((key, value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
186:          specificationList.add(ProductSpecificationModel(lable: key, value: value));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
217:      for (var element in vendorCategoryList) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
218:        if (element.id == productModel.value.categoryID) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
219:          selectedProductCategory.value = element;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
220:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
221:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
293:      if (productModel.value.id == null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
294:        productModel.value.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
295:        productModel.value.id = Constant.getUuid();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
296:      } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
297:        productModel.value.createdAt = productModel.value.createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
298:        productModel.value.id = productModel.value.id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
299:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
300:      productModel.value.photo = images.isNotEmpty ? images.first : "";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
312:      productModel.value.nonveg = isNonVeg.value;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
313:      productModel.value.publish = isPublish.value;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
314:      productModel.value.vendorID = Constant.userModel!.vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
315:      productModel.value.sectionId = vendorModel.value.sectionId;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
316:      productModel.value.categoryID = selectedProductCategory.value.id.toString();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
317:      productModel.value.itemAttribute =
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
318:          ((itemAttributes.value!.attributes == null || itemAttributes.value!.attributes!.isEmpty) && 
(itemAttributes.value!.variants == null || itemAttributes.value!.variants!.isEmpty))
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
319:          ? null
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
322:      productModel.value.addOnsPrice = listAddPrice;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
323:      productModel.value.takeawayOption = takeAway.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
324:      productModel.value.productSpecification = specification;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
325:      productModel.value.brandId = selectedBrands.value.id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
326:      productModel.value.taxSetting = List.from(selectedTaxes);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
423:              for (var element in vendorCategoryList) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
424:                if (element.id == aiVariationDataModel.data!.categoryId) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
425:                  selectedProductCategory.value = element;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
426:                }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
427:              }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
559:      for (var element in vendorCategoryList) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
560:        if (element.id == aiVariationDataModel.categoryId) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
561:          selectedProductCategory.value = element;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
562:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart:
563:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:98:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:99:      if (Constant.userModel?.vendorID != null && Constant.userModel?.vendorID?.isNotEmpty == true) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:100:        await FireStoreUtils.getVendorById(Constant.userModel!.vendorID.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:101:          if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:102:            vendorModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:103:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:125:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:126:            if (vendorModel.value.categoryID!.isNotEmpty) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:127:              selectedCategories.value = vendorCategoryList.where((category) => 
vendorModel.value.categoryID!.contains(category.id)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:128:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:129:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:130:            vendorModel.value.filters!.toJson().forEach((key, value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:188:          vendorModel.value = VendorModel();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:189:          vendorModel.value.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:190:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:191:        for (int i = 0; i < images.length; i++) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:192:          if (images[i].runtimeType == XFile) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:198:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:199:        vendorModel.value.id = Constant.userModel?.vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:200:        vendorModel.value.author = Constant.userModel!.id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:201:        vendorModel.value.authorName = Constant.userModel!.firstName;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:202:        vendorModel.value.authorProfilePic = Constant.userModel!.profilePictureURL;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:203:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:204:        vendorModel.value.categoryID = selectedCategories.map((e) => e.id ?? '').toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:205:        vendorModel.value.categoryTitle = selectedCategories.map((e) => e.title ?? '').toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:206:        vendorModel.value.g = G(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:207:          geohash: Geoflutterfire().point(latitude: selectedLocation!.latitude, longitude: selectedLocation!.longitude).hash,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:236:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:237:        if (Constant.userModel!.vendorID!.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:238:          await FireStoreUtils.updateVendor(vendorModel.value).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:239:            ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.da
rt:240:            ShowToastDialog.showToast("Store details save successfully".tr);
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_story_controller.dart:33: 
   // Fetch story
> 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_story_controller.dart:34: 
   final value = await FireStoreUtils.getStory(Constant.userModel!.vendorID.toString());
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_story_controller.dart:35: 
   if (value != null) {
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_story_controller.dart:36: 
     storyModel.value = value;
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_story_controller.dart:37:
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_story_controller.dart:47: 
   // Fetch video duration from settings
> 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_story_controller.dart:48: 
   final settingsSnapshot = await FireStoreUtils.fireStore.collection(CollectionName.settings).doc('story').get();
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_story_controller.dart:49: 
   if (settingsSnapshot.exists) {
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_story_controller.dart:50: 
     videoDuration.value = double.parse(settingsSnapshot.data()!['videoDuration'].toString());
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_story_controller.dart:51: 
   }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\admin_product_controller.dar
t:31:  Future<void> getAdminProducts() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\admin_product_controller.dar
t:32:    if (Constant.userModel?.vendorID != null && Constant.userModel?.vendorID?.isNotEmpty == true) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\admin_product_controller.dar
t:33:      await FireStoreUtils.getVendorById(Constant.userModel!.vendorID.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\admin_product_controller.dar
t:34:        if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\admin_product_controller.dar
t:35:          vendorModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\admin_product_controller.dar
t:36:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\advertisement_list_controlle
r.dart:78:  Future<void> getVendor() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\advertisement_list_controlle
r.dart:79:    await FireStoreUtils.getVendorById(Constant.userModel?.vendorID ?? '').then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\advertisement_list_controlle
r.dart:80:      if (value?.id?.isNotEmpty == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\advertisement_list_controlle
r.dart:81:        venderModel.value = value!;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\advertisement_list_controlle
r.dart:82:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\change_language_controller.d
art:22:  Future<void> getLanguage() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\change_language_controller.d
art:23:    await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("languages").get().then((event) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\change_language_controller.d
art:24:      if (event.exists) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\change_language_controller.d
art:25:        List languageListTemp = event.data()!["list"];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\change_language_controller.d
art:26:        for (var element in languageListTemp) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\chat_controller.dart:75:    
  receiverId: receivedId.value,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\chat_controller.dart:76:    
  createdAt: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\chat_controller.dart:77:    
  orderId: orderId.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\chat_controller.dart:78:    
  lastMessage: messageController.value.text,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\chat_controller.dart:79:    
  lastMessageType: messageType,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\chat_controller.dart:89:    
  receiverId: receivedId.value,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\chat_controller.dart:90:    
  createdAt: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\chat_controller.dart:91:    
  url: url,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\chat_controller.dart:92:    
  orderId: orderId.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\chat_controller.dart:93:    
  messageType: messageType,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dash_board_controller.dart:5
1:  Future<void> getVendor() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dash_board_controller.dart:5
2:    if (Constant.userModel?.vendorID != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dash_board_controller.dart:5
3:      await FireStoreUtils.getVendorById(Constant.userModel!.vendorID.toString()).then((value) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dash_board_controller.dart:5
4:        if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dash_board_controller.dart:5
5:          vendorModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dash_board_controller.dart:5
6:          Constant.vendorAdminCommission = value.adminCommission;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:32:  Future<void> getData() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:33:    await FireStoreUtils.getVendorById(Constant.userModel!.vendorID.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:34:      if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:35:        vendorModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:36:        priceController.value.text = vendorModel.value.restaurantCost ?? '';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:46:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:47:        images.addAll(vendorModel.value.restaurantMenuPhotos ?? []);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:48:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:49:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:50:    isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:67:    vendorModel.value.closeDineTime = endDateDateController.value.text;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:68:    vendorModel.value.restaurantMenuPhotos = images;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:69:    await FireStoreUtils.updateVendor(vendorModel.value).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:70:      ShowToastDialog.showToast("Dine In Details save".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.da
rt:71:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_order_controller.dar
t:31:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_order_controller.dar
t:32:    if (Constant.userModel!.vendorID != null && Constant.userModel!.vendorID!.isNotEmpty) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_order_controller.dar
t:33:      await FireStoreUtils.getVendorById(Constant.userModel!.vendorID.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_order_controller.dar
t:34:        if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_order_controller.dar
t:35:          vendorModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_order_controller.dar
t:36:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\global_setting_controller.da
rt:20:  Future<void> getCurrentCurrency() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\global_setting_controller.da
rt:21:    FireStoreUtils.fireStore.collection(CollectionName.currencies).where("isActive", isEqualTo: 
true).snapshots().listen((event) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\global_setting_controller.da
rt:22:      if (event.docs.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\global_setting_controller.da
rt:23:        Constant.currencyModel = CurrencyModel.fromJson(event.docs.first.data());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\global_setting_controller.da
rt:24:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\help_support_controller.dart
:51:      receiverId: 'admin',
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\help_support_controller.dart
:52:      createdAt: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\help_support_controller.dart
:53:      orderId: null,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\help_support_controller.dart
:54:      lastMessage: messageController.value.text,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\help_support_controller.dart
:55:      lastMessageType: messageType,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\help_support_controller.dart
:65:      receiverId: Constant.adminType,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\help_support_controller.dart
:66:      createdAt: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\help_support_controller.dart
:67:      url: url,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\help_support_controller.dart
:68:      orderId: null,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\help_support_controller.dart
:69:      messageType: messageType,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart:46:    
});
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart:47:    
if (userModel.value.vendorID != null && userModel.value.vendorID!.isNotEmpty) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart:48:    
  await FireStoreUtils.getVendorById(userModel.value.vendorID!).then((vender) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart:49:    
    if (vender?.id != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart:50:    
      vendermodel.value = vender!;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart:51:    
    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart:71:  
Future<void> getOrder() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart:72:    
FireStoreUtils.fireStore.collection(CollectionName.vendorOrders).where('vendorID', isEqualTo: 
Constant.userModel!.vendorID).orderBy('createdAt', descending: true).snapshots().listen((
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart:73:    
  event,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart:74:    
) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart:75:    
  allOrderList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\login_controller.dart:119:  
          await FireStoreUtils.updateUser(userModel);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\login_controller.dart:120:  
          VendorModel? vendor = await FireStoreUtils.getVendorById(userModel.vendorID!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\login_controller.dart:121:  
          bool isPlanExpire = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\login_controller.dart:122:  
          if (vendor?.subscriptionPlan?.id != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\login_controller.dart:123:  
            if (vendor?.subscriptionExpiryDate == null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\offer_controller.dart:18:  
Future<void> getOffers() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\offer_controller.dart:19:   
 print("vendor id:${Constant.userModel!.vendorID}");
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\offer_controller.dart:20:   
 await FireStoreUtils.getOffer(Constant.userModel!.vendorID.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\offer_controller.dart:21:   
   offerList.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\offer_controller.dart:22:   
 });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\offer_controller.dart:23:   
 isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\order_details_controller.dar
t:320:    bytes += generator.text(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\order_details_controller.dar
t:321:      'Date: ${DateFormat('MMM d yyyy, h:mm:ss 
a').format(DateTime.fromMicrosecondsSinceEpoch(orderModel.value.vendor!.createdAt!.microsecondsSinceEpoch)).toString()} ',
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\order_details_controller.dar
t:322:      styles: const PosStyles(align: PosAlign.left),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\order_details_controller.dar
t:323:    );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\order_details_controller.dar
t:324:    bytes += generator.row([
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\payment_controller.dart:94:// 
        if (stripeModel.value.isEnabled == true) {
> 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\payment_controller.dart:95:// 
          Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\payment_controller.dart:96:// 
          Stripe.merchantIdentifier = 'Foodie Restaurant'.tr;
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\payment_controller.dart:97:// 
          Stripe.instance.applySettings();
  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\payment_controller.dart:98:// 
        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\payment_controller.dart:539:
//         id: Constant.getUuid(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\payment_controller.dart:540:
//         createdAt: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\payment_controller.dart:541:
//         expiryDate: userModel.value.subscriptionExpiryDate,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\payment_controller.dart:542:
//         subscriptionPlan: userModel.value.subscriptionPlan,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\payment_controller.dart:543:
//         paymentType: selectedPaymentMethod.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:37:  Future<void> getProduct() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:38:    if (userModel.value.vendorID != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:39:      await FireStoreUtils.getVendorById(userModel.value.vendorID ?? '').then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:40:        if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:41:          vendorModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:42:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:51:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:52:  Future<void> updateList(int index, bool isPublish) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:53:    ProductModel productModel = productList[index];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:54:    if (isPublish == true) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:55:      productModel.publish = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:56:    } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:57:      productModel.publish = true;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:58:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:59:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart
:60:    productList.removeAt(index);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_rating_view_controll
er.dart:45:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_rating_view_controll
er.dart:46:      await FireStoreUtils.getVendorCategoryByCategoryId(productModel.value.categoryID.toString()).then((value) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_rating_view_controll
er.dart:47:        if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_rating_view_controll
er.dart:48:          vendorCategoryModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_rating_view_controll
er.dart:49:          for (var element in vendorCategoryModel.value.reviewAttributes!) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\signup_controller.dart:74:  
    userModel.value.isDocumentVerify = Constant.isStoreVerification == true ? false : true;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\signup_controller.dart:75:  
    userModel.value.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\signup_controller.dart:76:  
    userModel.value.appIdentifier = Platform.isAndroid ? 'android' : 'ios';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\signup_controller.dart:77:  
    userModel.value.isAutoVerify = Constant.isStoreVerification == false ? true : false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\signup_controller.dart:78:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\signup_controller.dart:127: 
         userModel.value.appIdentifier = Platform.isAndroid ? 'android' : 'ios';
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\signup_controller.dart:128: 
         userModel.value.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\signup_controller.dart:129: 
         userModel.value.provider = 'email';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\signup_controller.dart:130: 
         userModel.value.isAutoVerify = Constant.isStoreVerification == false ? true : false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\signup_controller.dart:131:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\special_discount_controller.
dart:25:  Future<void> getVendor() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\special_discount_controller.
dart:26:    await FireStoreUtils.getVendorById(Constant.userModel!.vendorID.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\special_discount_controller.
dart:27:      if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\special_discount_controller.
dart:28:        vendorModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\special_discount_controller.
dart:29:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\splash_controller.dart:40:  
                await FireStoreUtils.updateUser(Constant.userModel!);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\splash_controller.dart:41:  
                // VendorModel? vendor = await FireStoreUtils.getVendorById(Constant.userModel!.vendorID!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\splash_controller.dart:42:  
                bool isPlanExpire = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\splash_controller.dart:43:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\splash_controller.dart:44:  
                if (Constant.userModel?.subscriptionPlan?.id != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\splash_controller.dart:85:  
                await FireStoreUtils.updateUser(Constant.userModel!);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\splash_controller.dart:86:  
                VendorModel? vendor = await FireStoreUtils.getVendorById(Constant.userModel!.vendorID!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\splash_controller.dart:87:  
                bool isPlanExpire = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\splash_controller.dart:88:  
                if (vendor?.subscriptionPlan?.id != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\splash_controller.dart:89:  
                  if (vendor?.subscriptionExpiryDate == null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:65:  Future<void> getInitPlanSettings() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:66:    await FireStoreUtils.fireStore.collection(CollectionName.settings).doc('vendor').get().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:67:      Constant.autoApproveVendor = value.data()!['auto_approve_vendor'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:68:      Constant.autoApproveStore = value.data()!['auto_approve_store'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:69:      Constant.isSubscriptionModelApplied = value.data()!['subscription_model'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:80:      }
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:81:      if (userModel.value.vendorID != null && userModel.value.vendorID!.isNotEmpty) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:82:        await FireStoreUtils.getVendorById(userModel.value.vendorID.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:83:          if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:84:            vendorModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:85:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:148:      if (stripeModel.value.isEnabled == true) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:149:        Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:150:        Stripe.merchantIdentifier = 'eMart Store'.tr;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:151:        Stripe.instance.applySettings();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:152:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:568:    userModel.value.subscriptionPlan = selectedSubscriptionPlan.value;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:569:    userModel.value.subscriptionPlan?.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:570:    userModel.value.subscriptionExpiryDate = selectedSubscriptionPlan.value.expiryDay == '-1'
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:571:        ? null
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:572:        : Constant().addDayInTimestamp(days: selectedSubscriptionPlan.value.expiryDay, date: Timestamp.now());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:575:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:576:    if (userModel.value.vendorID != null && userModel.value.vendorID!.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:577:      print("====>");
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:578:      VendorModel? vendorModel = await FireStoreUtils.getVendorById(userModel.value.vendorID.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:579:      if (vendorModel != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:580:        vendorModel.subscriptionPlanId = selectedSubscriptionPlan.value.id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:581:        vendorModel.subscriptionPlan = selectedSubscriptionPlan.value;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:582:        vendorModel.subscriptionPlan?.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:583:        vendorModel.subscriptionExpiryDate = selectedSubscriptionPlan.value.expiryDay == '-1'
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:584:            ? null
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:585:            : Constant().addDayInTimestamp(days: selectedSubscriptionPlan.value.expiryDay, date: Timestamp.now());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:594:      id: Constant.getUuid(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:595:      createdAt: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:596:      expiryDate: userModel.value.subscriptionExpiryDate,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:597:      subscriptionPlan: userModel.value.subscriptionPlan,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart
:598:      paymentType: selectedPaymentMethod.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\view_advertisement_controlle
r.dart:22:    }
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\view_advertisement_controlle
r.dart:23:    if (Constant.userModel?.vendorID != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\view_advertisement_controlle
r.dart:24:      vendorModel.value = await FireStoreUtils.getVendorById(Constant.userModel!.vendorID!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\view_advertisement_controlle
r.dart:25:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\view_advertisement_controlle
r.dart:26:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\view_advertisement_controlle
r.dart:27:}
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:177: 
 Future<void> getPaymentMethod() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:178: 
   await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((user) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:179: 
     try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:180: 
       razorPayModel.value = RazorPayModel.fromJson(user.data() ?? {});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:181: 
     } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:185:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:186: 
   await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("paypalSettings").get().then((paypalData) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:187: 
     try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:188: 
       paypalDataModel.value = PayPalModel.fromJson(paypalData.data() ?? {});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:189: 
     } catch (error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:193:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:194: 
   await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((paypalData) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:195: 
     try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:196: 
       stripeSettingData.value = StripeModel.fromJson(paypalData.data() ?? {});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:197: 
     } catch (error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:201:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:202: 
   await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((paypalData) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:203: 
     try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:204: 
       flutterWaveSettingData.value = FlutterWaveModel.fromJson(paypalData.data() ?? {});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart:205: 
     } catch (error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:82:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:83:    await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((user) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:84:      try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:85:        razorPayModel.value = RazorPayModel.fromJson(user.data() ?? {});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:86:      } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:90:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:91:    await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("paypalSettings").get().then((paypalData) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:92:      try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:93:        paypalDataModel.value = PayPalModel.fromJson(paypalData.data() ?? {});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:94:      } catch (error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:98:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:99:    await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((paypalData) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:100:      try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:101:        stripeSettingData.value = StripeModel.fromJson(paypalData.data() ?? {});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:102:      } catch (error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:106:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:107:    await FireStoreUtils.fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((paypalData) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:108:      try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:109:        flutterWaveSettingData.value = FlutterWaveModel.fromJson(paypalData.data() ?? {});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contro
ller.dart:110:      } catch (error) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\working_hours_controller.dar
t:21:  Future<void> getVendor() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\working_hours_controller.dar
t:22:    await FireStoreUtils.getVendorById(Constant.userModel!.vendorID.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\working_hours_controller.dar
t:23:      if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\working_hours_controller.dar
t:24:        vendorModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\working_hours_controller.dar
t:25:        if (vendorModel.value.workingHours == null || vendorModel.value.workingHours!.isEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_ar.dart:245:  "Dine in 
Requests": "طلبات تناول الطعام",
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_ar.dart:246:  "createdAt": 
"تاريخ الإنشاء",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_ar.dart:247:  "Type message 
here....": "اكتب الرسالة هنا....",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_ar.dart:248:  "text": "نص",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_ar.dart:249:  "image": "صورة",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_ar.dart:441:  "Delete": "حذف",
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_ar.dart:442:  "Publish": 
"نشر",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_ar.dart:443:  "Store 
Information": "معلومات المتجر",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_ar.dart:444:  "Restaurant 
Profile": "ملف المطعم",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_ar.dart:445:  "Edit Profile": 
"تعديل الملف الشخصي",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_en.dart:246:  'Dine in 
Requests': 'Dine in Requests',
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_en.dart:247:  "createdAt": 
"createdAt",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_en.dart:248:  "Type message 
here....": "Type message here....",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_en.dart:249:  "text": "text",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_en.dart:250:  "image": 
"image",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_en.dart:442:  "Delete": 
"Delete",
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_en.dart:443:  "Publish": 
"Publish",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_en.dart:444:  'Store 
Information': 'Store Information',
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_en.dart:445:  "Restaurant 
Profile": "Restaurant Profile",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\lang\app_en.dart:446:  "Edit Profile": 
"Edit Profile",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:4:  
String? coverImage;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:5:  
Timestamp? createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:6:  
String? description;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:7:  
Timestamp? endDate;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:8:  
String? id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:17:  
String? type;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:18:  
String? vendorId;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:19:  
String? video;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:20:  
bool? isPaused;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:21:  
Timestamp? updatedAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:22:  
String? canceledNote;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:23:  
String? pauseNote;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:24:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:26:    
this.coverImage,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:27:    
this.createdAt,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:28:    
this.description,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:29:    
this.endDate,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:30:    
this.id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:39:    
this.type,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:40:    
this.vendorId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:41:    
this.video,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:42:    
this.isPaused,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:43:    
this.updatedAt,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:44:    
this.canceledNote,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:45:    
this.pauseNote,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:46:  
});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:50:    
  coverImage: json['coverImage'],
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:51:    
  createdAt: json['createdAt'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:52:    
  description: json['description'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:53:    
  endDate: json['endDate'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:54:    
  id: json['id'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:63:    
  type: json['type'],
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:64:    
  vendorId: json['vendorId'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:65:    
  video: json['video'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:66:    
  isPaused: json['isPaused'],
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:67:    
  updatedAt: json['updatedAt'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:68:    
  canceledNote: json['canceledNote'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:69:    
  pauseNote: json['pauseNote'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:70:    
);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:75:    
  'coverImage': coverImage,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:76:    
  'createdAt': createdAt,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:77:    
  'description': description,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:78:    
  'endDate': endDate,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:79:    
  'id': id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:88:    
  'type': type,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:89:    
  'vendorId': vendorId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:90:    
  'video': video,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:91:    
  'isPaused': isPaused,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:92:    
  'updatedAt': updatedAt,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:93:    
  'canceledNote': canceledNote,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:94:    
  'pauseNote': pauseNote,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\advertisement_model.dart:95:    
};
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:31:cl
ass AIVariationData {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:32:  
String? categoryId;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:33:  
String? categoryName;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:34:  
bool? isNonveg;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:35:  
ItemAttribute? itemAttribute;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:36:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:37:  
AIVariationData({this.categoryId, this.categoryName, this.isNonveg, this.itemAttribute});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:38:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:39:  
AIVariationData.fromJson(Map<String, dynamic> json) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:40:  
  categoryId = json['category_id'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:41:  
  categoryName = json['category_name'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:42:  
  isNonveg = json['is_nonveg'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:43:  
  itemAttribute = json['item_attribute'] != null
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:49:  
  final Map<String, dynamic> data = <String, dynamic>{};
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:50:  
  data['category_id'] = categoryId;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:51:  
  data['category_name'] = categoryName;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:52:  
  data['is_nonveg'] = isNonveg;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\ai_variant_data_model.dart:53:  
  if (itemAttribute != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:4:  String? 
title;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:5:  bool? 
isPublish;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:6:  String? 
redirect_type;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:7:  String? 
redirect_id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:8:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:9:  
BannerModel({this.setOrder, this.photo, this.title, this.redirect_type, this.redirect_id, this.isPublish});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:10:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:11:  
BannerModel.fromJson(Map<String, dynamic> json) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:12:    
setOrder = json['set_order'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:14:    title = 
json['title'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:15:    
isPublish = json['is_publish'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:16:    
redirect_type = json['redirect_type'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:17:    
redirect_id = json['redirect_id'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:18:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:24:    
data['title'] = title;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:25:    
data['is_publish'] = isPublish;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:26:    
data['redirect_type'] = redirect_type;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:27:    
data['redirect_id'] = redirect_id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\BannerModel.dart:28:    return 
data;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:5:  String? 
title;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:6:  bool? 
isPublish;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:7:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:8:  
BrandsModel(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:9:      
{this.photo, this.sectionId, this.id, this.title, this.isPublish});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:10:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:11:  
BrandsModel.fromJson(Map<String, dynamic> json) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:12:    photo 
= json['photo'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:15:    title 
= json['title'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:16:    
isPublish = json['is_publish'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:17:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:18:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:19:  
Map<String, dynamic> toJson() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:24:    
data['title'] = title;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:25:    
data['is_publish'] = isPublish;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:26:    return 
data;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:27:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\brands_model.dart:28:}
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:6:  
String? id;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:7:  
String? categoryId;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:8:  
String? name;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:9:  
String? photo;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:10:  
String? price;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:11:  
String? discountPrice;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:12:  
String? vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:13:  
int? quantity;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:14:  
String? extrasPrice;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:15:  
List<dynamic>? extras;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:18:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:19:  
CartProductModel({this.id, this.categoryId, this.name, this.photo, this.price, this.discountPrice, this.vendorID, this.quantity, 
this.extrasPrice, this.variantInfo, this.extras, this.taxSetting});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:20:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:21:  
CartProductModel.fromJson(Map<String, dynamic> json) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:22:    
id = json['id'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:23:    
categoryId = json['category_id'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:24:    
name = json['name'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:25:    
photo = json['photo'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:26:    
price = json['price'] ?? "0.0";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:27:    
discountPrice = json['discountPrice'] ?? "0.0";
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:28:    
vendorID = json['vendorID'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:29:    
quantity = json['quantity'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:30:    
extrasPrice = json['extras_price'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:31:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:55:    
data['id'] = id;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:56:    
data['category_id'] = categoryId;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:57:    
data['name'] = name;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:58:    
data['photo'] = photo;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:59:    
data['price'] = price;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:60:    
data['discountPrice'] = discountPrice;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:61:    
data['vendorID'] = vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:62:    
data['quantity'] = quantity;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:63:    
data['extras_price'] = extrasPrice;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\cart_product_model.dart:64:    
data['extras'] = extras;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:11:  
Url? url;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:12:  
Timestamp? createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:13:  
bool? seen;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:14:  
int? recordingTimer;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:15:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:16:  
ConversationModel({this.id, this.senderId, this.receiverId, this.orderId, this.message, this.messageType, this.videoThumbnail, 
this.url, this.createdAt, this.seen, this.recordingTimer});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:17:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:18:  
factory ConversationModel.fromJson(Map<String, dynamic> parsedJson) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:19:    
return ConversationModel(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:31:     
     : Url(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:32:     
 createdAt: parsedJson['createdAt'] ?? Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:33:     
 seen: parsedJson['seen'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:34:     
 recordingTimer: parsedJson['recordingTimer'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:35:    
);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:47:     
 'url': url?.toJson(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:48:     
 'createdAt': createdAt,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:49:     
 if (seen != null) 'seen': seen,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:50:     
 'recordingTimer': recordingTimer,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\conversation_model.dart:51:    
};
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:9:  
Timestamp? expiresAt;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:10:  
Timestamp? createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:11:  String? 
description;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:12:  String? 
sectionId;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:13:  bool? 
isPublic;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:14:  String? 
vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:15:  bool? 
isEnabled;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:16:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:17:  
CouponModel({this.discountType, this.id, this.code, this.discount, this.image, this.expiresAt, this.description, this.isPublic, 
this.vendorID, this.isEnabled,this.createdAt,this.sectionId});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:18:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:19:  
CouponModel.fromJson(Map<String, dynamic> json) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:20:    
discountType = json['discountType'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:27:    
isPublic = json['isPublic'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:28:    
vendorID = json['vendorID'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:29:    
isEnabled = json['isEnabled'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:30:    
createdAt = json['createdAt'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:31:    
sectionId = json['section_id'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:32:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:33:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:43:    
data['isPublic'] = isPublic;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:44:    
data['vendorID'] = vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:45:    
data['isEnabled'] = isEnabled;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:46:    
data['createdAt'] = createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:47:    
data['section_id'] = sectionId;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:48:    return 
data;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\coupon_model.dart:49:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:3:class 
CurrencyModel {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:4:  
Timestamp? createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:5:  String? 
symbol;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:6:  String? 
code;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:7:  bool? 
enable;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:11:  
String? id;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:12:  
Timestamp? updatedAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:13:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:14:  
CurrencyModel({this.createdAt, this.symbol, this.code, this.enable, this.symbolAtRight, this.name, this.decimalDigits, this.id, 
this.updatedAt});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:15:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:16:  
CurrencyModel.fromJson(Map<String, dynamic> json) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:17:    
createdAt = json['createdAt'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:18:    
symbol = json['symbol'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:19:    code 
= json['code'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:20:    
enable = json['enable'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:24:    id = 
json['id'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:25:    
updatedAt = json['updatedAt'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:26:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:27:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:28:  
Map<String, dynamic> toJson() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:29:    
final Map<String, dynamic> data = <String, dynamic>{};
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:30:    
data['createdAt'] = createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:31:    
data['symbol'] = symbol;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:32:    
data['code'] = code;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:33:    
data['enable'] = enable;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:37:    
data['id'] = id;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:38:    
data['updatedAt'] = updatedAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:39:    
return data;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:40:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\currency_model.dart:41:}
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:12:  
String? guestEmail;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:13:  
String? vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:14:  
String? occasion;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:15:  
String? authorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:16:  
String? specialRequest;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:20:  
bool? firstVisit;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:21:  
Timestamp? createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:22:  
String? guestLastName;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:23:  
String? discountType;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:24:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:32:  
  this.guestEmail,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:33:  
  this.vendorID,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:34:  
  this.occasion,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:35:  
  this.authorID,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:36:  
  this.specialRequest,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:40:  
  this.firstVisit,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:41:  
  this.createdAt,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:42:  
  this.guestLastName,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:43:  
  this.discountType,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:44:  
});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:54:  
  guestEmail = json['guestEmail'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:55:  
  vendorID = json['vendorID'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:56:  
  occasion = json['occasion'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:57:  
  authorID = json['authorID'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:58:  
  specialRequest = json['specialRequest'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:62:  
  firstVisit = json['firstVisit'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:63:  
  createdAt = json['createdAt'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:64:  
  guestLastName = json['guestLastName'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:65:  
  discountType = json['discountType'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:66:  
}
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:78:  
  data['guestEmail'] = guestEmail;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:79:  
  data['vendorID'] = vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:80:  
  data['occasion'] = occasion;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:81:  
  data['authorID'] = authorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:82:  
  data['specialRequest'] = specialRequest;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:88:  
  data['firstVisit'] = firstVisit;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:89:  
  data['createdAt'] = createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:90:  
  data['guestLastName'] = guestLastName;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:91:  
  data['discountType'] = discountType;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\dine_in_booking_model.dart:92:  
  return data;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:6:  
List<PermissionModel>? permissions;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:7:  
String? vendorId;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:8:  
bool? isEnable;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:9:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:10:  
EmployeeRoleModel({
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:13:    
this.permissions,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:14:    
this.vendorId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:15:    
this.isEnable,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:16:  
});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:17:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:22:    
  permissions: json['permissions'] != null ? (json['permissions'] as List).map((e) => PermissionModel.fromJson(e)).toList() : null,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:23:    
  vendorId: json['vendorId'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:24:    
  isEnable: json['isEnable'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:25:    
);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:26:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:32:    
  'permissions': permissions?.map((e) => e.toJson()).toList(),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:33:    
  'vendorId': vendorId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:34:    
  'isEnable': isEnable,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:35:    
};
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\employee_role_model.dart:36:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:8:  String? 
orderId;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:9:  Timestamp? 
createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:10:  String? 
chatType;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:11:  String? 
lastMessageType;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:12:  String? 
type;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:14:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:15:  
InboxModel({this.senderId, this.lastMessage, this.orderId, this.receiverId, this.lastSenderId, this.createdAt, this.chatType, 
this.lastMessageType, this.type, this.senderReceiverId});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:16:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:17:  factory 
InboxModel.fromJson(Map<String, dynamic> parsedJson) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:18:    return 
InboxModel(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:23:      
lastSenderId: parsedJson['lastSenderId'] ?? '',
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:24:      
createdAt: parsedJson['createdAt'] ?? Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:25:      
chatType: parsedJson['chatType'] ?? '',
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:26:      
lastMessageType: parsedJson['lastMessageType'],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:27:      
senderReceiverId: List<String>.from(parsedJson['sender_receiver_id'] ?? []),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:38:      
'lastSenderId': lastSenderId,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:39:      
'createdAt': createdAt,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:40:      if 
(chatType != null) 'chatType': chatType,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:41:      
'lastMessageType': lastMessageType,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\inbox_model.dart:42:      
'sender_receiver_id': senderReceiverId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:11:  String? 
couponId;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:12:  String? 
vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:13:  String? 
driverID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:14:  num? 
discount;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:15:  String? 
authorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:16:  String? 
estimatedTimeToPrepare;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:17:  
Timestamp? createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:18:  
Timestamp? triggerDelivery;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:19:  String? 
paymentMethod;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:20:  
List<CartProductModel>? products;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:52:    
this.couponId,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:53:    
this.vendorID,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:54:    
this.driverID,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:55:    
this.discount,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:56:    
this.authorID,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:57:    
this.estimatedTimeToPrepare,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:58:    
this.createdAt,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:59:    
this.triggerDelivery,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:60:    
this.paymentMethod,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:61:    
this.products,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:94:    
couponId = json['couponId'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:95:    
vendorID = json['vendorID'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:96:    
driverID = json['driverID'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:97:    
discount = json['discount'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:98:    
authorID = json['authorID'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:99:    
estimatedTimeToPrepare = json['estimatedTimeToPrepare'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:100:    
createdAt = json['createdAt'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:101:    
courierCompanyName = json['courierCompanyName'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:102:    
courierTrackingId = json['courierTrackingId'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:103:    
triggerDelivery = json['triggerDelevery'] ?? Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:166:    
data['couponId'] = couponId;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:167:    
data['vendorID'] = vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:168:    
data['driverID'] = driverID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:169:    
data['discount'] = discount;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:170:    
data['authorID'] = authorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:171:    
data['estimatedTimeToPrepare'] = estimatedTimeToPrepare;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:172:    
data['createdAt'] = createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:173:    
data['triggerDelivery'] = triggerDelivery;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:174:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart:175:    
data['payment_method'] = paymentMethod;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:5:  int? 
fats;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:6:  String? 
vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:7:  bool? 
veg;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:8:  bool? 
publish;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:9:  
List<dynamic>? addOnsTitle;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:10:  int? 
calories;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:11:  int? 
proteins;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:13:  num? 
reviewsSum;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:14:  bool? 
takeawayOption;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:15:  String? 
name;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:16:  
Map<String, dynamic>? reviewAttributes;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:17:  
Map<String, dynamic>? productSpecification;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:27:  String? 
price;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:28:  String? 
categoryID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:29:  String? 
description;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:30:  
Timestamp? createdAt;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:31:  String? 
sectionId;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:32:  String? 
brandId;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:33:  bool? 
isDigitalProduct;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:39:    
this.fats,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:40:    
this.vendorID,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:41:    
this.veg,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:42:    
this.publish,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:43:    
this.addOnsTitle,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:44:    
this.calories,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:45:    
this.proteins,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:47:    
this.reviewsSum,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:48:    
this.takeawayOption,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:49:    
this.name,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:50:    
this.reviewAttributes,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:51:    
this.productSpecification,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:61:    
this.price,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:62:    
this.categoryID,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:63:    
this.description,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:64:    
this.createdAt,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:65:    
this.sectionId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:66:    
this.brandId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:67:    
this.isDigitalProduct,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:73:    fats 
= json['fats'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:74:    
vendorID = json['vendorID'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:75:    veg = 
json['veg'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:76:    
publish = json['publish'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:77:    
addOnsTitle = json['addOnsTitle'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:78:    
calories = json['calories'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:79:    
proteins = json['proteins'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:81:    
reviewsSum = json['reviewsSum'] ?? 0.0;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:82:    
takeawayOption = json['takeawayOption'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:83:    name 
= json['name'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:84:    
reviewAttributes = json['reviewAttributes'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:85:    
productSpecification = json['product_specification'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:95:    price 
= json['price'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:96:    
categoryID = json['categoryID'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:97:    
description = json['description'];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:98:    
createdAt = json['createdAt'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:99:    
sectionId = json['section_id'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:100:    
brandId = json['brandID'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:101:    
isDigitalProduct = json['isDigitalProduct'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:113:    
data['fats'] = fats;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:114:    
data['vendorID'] = vendorID;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:115:    
data['veg'] = veg;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:116:    
data['publish'] = publish;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:117:    
data['addOnsTitle'] = addOnsTitle;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:118:    
data['addOnsPrice'] = addOnsPrice;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:119:    
data['calories'] = calories;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:121:    
data['reviewsSum'] = reviewsSum;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:122:    
data['takeawayOption'] = takeawayOption;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:123:    
data['name'] = name;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:124:    
data['reviewAttributes'] = reviewAttributes;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart:125:    
data['product_specification'] = productSpecification;



TEXT_END

## Candidate Write Files
TEXT_START

Path                                                                                                                                
----                                                                                                                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\add_adver...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_advertisement_screen\advertise...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_restaurant_screen\add_restaura...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\add_story_screen\add_story_screen....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\admin_inbox_screen.dart 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\chat_screen.dart        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\chat_screens\restaurant_inbox_scre...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\driver_screens\driver_list_screen....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_role_screens\role_screen....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\add_employee_scre...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\employee_screens\employee_list_scr...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\help_support_screen\help_support_s...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart         
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\add_product_screen...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\admin_product_scre...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\product_screens\product_list_scree...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\special_discount_screen\special_di...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\app\subscription_plan_screen\subscript...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\constant.dart                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_edit_coupon_controller....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_product_controller.dart   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_restaurant_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\add_story_controller.dart     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\admin_product_controller.dart 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\change_language_controller....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\dine_in_create_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\global_setting_controller.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\home_controller.dart          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_list_controller.dart  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\product_rating_view_control...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\special_discount_controller...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\subscription_controller.dart  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\wallet_controller.dart        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\withdraw_method_setup_contr...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\controller\working_hours_controller.dart 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\driver_document_model.dart        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\order_model.dart                  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\product_model.dart                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\vendor_model.dart                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\models\zone_model.dart                   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\payment\xenditModel.dart                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\utils\fire_store_utils.dart              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\widget\geoflutterfire\src\geoflutterfi...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\widget\geoflutterfire\src\collection\b...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\widget\geoflutterfire\src\utils\math.dart



TEXT_END

## Final Decision
DECISION: THIS_PATH_IS_VENDOR_APK_NOT_VENDOR_WEB
Meaning: this path can be audited later for Vendor APK sync, but it is not the missing Store Panel / Vendor Web source.
RECOMMENDED_NEXT_SERVICE: SERVICE_57A_VENDOR_APK_SYNC_AUDIT
STATUS: SERVICE_56C_LOCAL_VENDOR_PATH_IS_VENDOR_APK