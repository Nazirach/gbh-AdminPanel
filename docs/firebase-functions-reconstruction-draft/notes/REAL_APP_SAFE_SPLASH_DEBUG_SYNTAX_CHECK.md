# SAFE SPLASH DEBUG SYNTAX CHECK

Generated: 06/29/2026 02:11:04

Mode: read-only. No patch.

## Splash Controller Lines 45-100
```dart
   45:       LocalizationService().changeLocale('en');
   46:     }
   47:   }
   48: 
   49:   Future<void> redirectScreen() async {
   50:     getLanguage();
   51:     final maintenanceMode = await splashDebugTimeout<bool>('isMaintenanceMode', FireStoreUtils.isMaintenanceMode(), seconds: 12) ?? false;
   52:   if (maintenanceMode == true) {
   53:       Get.offAll(() => MaintenanceModeScreen());
   54:       return;
   55:     } else {
   56:       if (Preferences.getBoolean(Preferences.isFinishOnBoardingKey) == false) {
   57:         Get.offAll(const OnboardingScreen());
   58:       } else {
   59:         bool isLogin = await splashDebugTimeout<bool>('isLogin', FireStoreUtils.isLogin(), seconds: 12) ?? false;
   60:         if (isLogin == true) {
   61:           log('SPLASH_DEBUG_BEFORE: getUserProfile');
   62:         await splashDebugTimeout('getUserProfile_then_chain', FireStoreUtils.getUserProfile(FireStoreUtils.getCurrentUid()).then((value) async {
   63:             if (value != null) {
   64:               UserModel userModel = value;
   65:               log(userModel.toJson().toString());
   66:               if (userModel.role == Constant.userRoleCustomer) {
   67:                 if (userModel.active == true) {
   68:                   userModel.fcmToken = await NotificationService.getToken();
   69:                   await FireStoreUtils.updateUser(userModel);
   70:                   if (userModel.shippingAddress != null && userModel.shippingAddress!.isNotEmpty) {
   71:                     if (userModel.shippingAddress!.where((element) => element.isDefault == true).isNotEmpty) {
   72:                       Constant.selectedLocation = userModel.shippingAddress!.where((element) => element.isDefault == true).single;
   73:                     } else {
   74:                       Constant.selectedLocation = userModel.shippingAddress!.first;
   75:                     }
   76:                     Get.offAll(const ServiceListScreen());
   77:                   } else {
   78:                     Get.offAll(const LocationPermissionScreen());
   79:                   }
   80:                 } else {
   81:                   await FirebaseAuth.instance.signOut();
   82:                   Get.offAll(const LoginScreen());
   83:                 }
   84:               } else {
   85:                 await FirebaseAuth.instance.signOut();
   86:                 Get.offAll(const LoginScreen());
   87:               }
   88:             }
   89:           });
   90:         } else {
   91:           await FirebaseAuth.instance.signOut();
   92:           Get.offAll(const LoginScreen());
   93:         }
   94:       }
   95:     }
   96:   }
   97: }
```

## Dart Analyze Output
```text
Analyzing splash_controller.dart...
  error - splash_controller.dart:89:13 - Expected to find ')'. - expected_token
1 issue found.
EXIT_CODE: 3
```

## Final Status
STATUS: SPLASH_DEBUG_PATCH_SYNTAX_ERROR