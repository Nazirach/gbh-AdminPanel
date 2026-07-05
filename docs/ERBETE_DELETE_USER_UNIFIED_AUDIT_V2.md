# ERBETE DELETE USER UNIFIED AUDIT V2

Generated: 06/28/2026 05:12:51

Mode: audit-only. No patch. No delete. No build. No commit.

## CUSTOMER_APP

- Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer
- Files scanned: 348
- Hits found: 40

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\change_password_controller.dart
LINE: 17
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await FirebaseAuth.instance.sendPasswordResetEmail(email: emailEditingController.value.text.trim());
NEXT: ShowToastDialog.closeLoader();
NEXT: ShowToastDialog.showToast('${'Reset Password link sent your'.tr} ${emailEditingController.value.text} ${'email'.tr}');

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\change_password_controller.dart
LINE: 21
PREV: Get.back();
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'user-not-found') {
NEXT: ShowToastDialog.showToast('No user found for that email.'.tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\forgot_password_controller.dart
LINE: 25
PREV: ShowToastDialog.showLoader("Please wait...".tr);
TEXT: await FirebaseAuth.instance.sendPasswordResetEmail(email: email);
NEXT: ShowToastDialog.closeLoader();
NEXT: ShowToastDialog.showToast(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\forgot_password_controller.dart
LINE: 31
PREV: Get.back();
TEXT: } on FirebaseAuthException catch (e) {
NEXT: ShowToastDialog.closeLoader();
NEXT: if (e.code == 'user-not-found') {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\global_setting_controller.dart
LINE: 37
PREV: log(":::::::TOKEN:::::: $token");
TEXT: if (FirebaseAuth.instance.currentUser != null) {
NEXT: await FireStoreUtils.getUserProfile(FireStoreUtils.getCurrentUid()).then((value) {
NEXT: if (value != null) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\login_controller.dart
LINE: 51
TEXT: final credential = await FirebaseAuth.instance.signInWithEmailAndPassword(email: email, password: password);
NEXT: 
NEXT: final userModel = await FireStoreUtils.getUserProfile(credential.user!.uid);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\login_controller.dart
LINE: 70
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast("This user is disabled. Please contact admin.".tr);
NEXT: Get.offAll(() => const LoginScreen());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\login_controller.dart
LINE: 75
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast("This user does not exist in the customer app.".tr);
NEXT: Get.offAll(() => const LoginScreen());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\login_controller.dart
LINE: 79
PREV: }
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'user-not-found') {
NEXT: ShowToastDialog.showToast("No user found for that email.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\login_controller.dart
LINE: 130
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast("This user is disabled. Please contact admin.".tr);
NEXT: Get.offAll(() => const LoginScreen());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\login_controller.dart
LINE: 201
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast("This user is disabled. Please contact admin.".tr);
NEXT: Get.offAll(() => const LoginScreen());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\login_controller.dart
LINE: 257
PREV: final credential = GoogleAuthProvider.credential(idToken: googleAuth.idToken);
TEXT: final userCredential = await FirebaseAuth.instance.signInWithCredential(credential);
NEXT: 
NEXT: return userCredential;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\login_controller.dart
LINE: 260
PREV: return userCredential;
TEXT: } on FirebaseAuthException catch (e) {
NEXT: debugPrint("Firebase Google Sign-In Error: ${e.code} ${e.message}");
NEXT: ShowToastDialog.showToast(e.message?.tr ?? "Firebase authentication failed.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\login_controller.dart
LINE: 286
TEXT: UserCredential userCredential = await FirebaseAuth.instance.signInWithCredential(oauthCredential);
NEXT: return {"appleCredential": appleCredential, "userCredential": userCredential};
NEXT: } catch (e) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\mobile_login_controller.dart
LINE: 14
TEXT: final FirebaseAuth _auth = FirebaseAuth.instance;
NEXT: 
NEXT: /// Send OTP to the entered phone number

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\mobile_login_controller.dart
LINE: 35
PREV: },
TEXT: verificationFailed: (FirebaseAuthException e) {
NEXT: ShowToastDialog.closeLoader();
NEXT: if (e.code == 'invalid-phone-number') {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart
LINE: 73
TEXT: if (FirebaseAuth.instance.currentUser != null) {
NEXT: await FireStoreUtils.getUserProfile(FireStoreUtils.getCurrentUid()).then((user) {
NEXT: if (user != null) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\my_profile_controller.dart
LINE: 41
PREV: // Delete user API
TEXT: Future<bool> deleteUserFromServer() async {
NEXT: var url = '${Constant.websiteUrl}/api/delete-user';
NEXT: try {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\my_profile_controller.dart
LINE: 42
PREV: Future<bool> deleteUserFromServer() async {
TEXT: var url = '${Constant.websiteUrl}/api/delete-user';
NEXT: try {
NEXT: var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\my_profile_controller.dart
LINE: 45
PREV: var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});
TEXT: log("deleteUserFromServer :: ${response.body}");
NEXT: return response.statusCode == 200;
NEXT: } catch (e) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\otp_verification_controller.dart
LINE: 25
TEXT: final FirebaseAuth _auth = FirebaseAuth.instance;
NEXT: 
NEXT: @override

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\otp_verification_controller.dart
LINE: 40
PREV: Future<bool> sendOTP() async {
TEXT: await FirebaseAuth.instance.verifyPhoneNumber(
NEXT: phoneNumber: countryCode.value + phoneNumber.value,
NEXT: verificationCompleted: (PhoneAuthCredential credential) {},

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\otp_verification_controller.dart
LINE: 43
PREV: verificationCompleted: (PhoneAuthCredential credential) {},
TEXT: verificationFailed: (FirebaseAuthException e) {},
NEXT: codeSent: (String verificationId0, int? resendToken0) async {
NEXT: verificationId.value = verificationId0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\service_list_controller.dart
LINE: 83
PREV: AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
TEXT: if (auth.FirebaseAuth.instance.currentUser != null) {
NEXT: String uid = auth.FirebaseAuth.instance.currentUser!.uid;
NEXT: UserModel? user = await FireStoreUtils.getUserProfile(uid);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\service_list_controller.dart
LINE: 84
PREV: if (auth.FirebaseAuth.instance.currentUser != null) {
TEXT: String uid = auth.FirebaseAuth.instance.currentUser!.uid;
NEXT: UserModel? user = await FireStoreUtils.getUserProfile(uid);
NEXT: if (user != null && user.role == Constant.userRoleCustomer) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\sign_up_controller.dart
LINE: 33
PREV: final RxBool isLoading = false.obs;
TEXT: final auth.FirebaseAuth firebaseAuth = auth.FirebaseAuth.instance;
NEXT: 
NEXT: RxString type = "email".obs;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\sign_up_controller.dart
LINE: 118
PREV: try {
TEXT: final credential = await FirebaseAuth.instance.createUserWithEmailAndPassword(email: emailEditingController.value.text.trim(), password: passwordEditingController.value.text.trim());
NEXT: if (credential.user != null) {
NEXT: userModel.value.id = credential.user!.uid;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\sign_up_controller.dart
LINE: 157
PREV: }
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'weak-password') {
NEXT: ShowToastDialog.showToast("The password provided is too weak.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\splash_controller.dart
LINE: 67
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\splash_controller.dart
LINE: 71
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\splash_controller.dart
LINE: 77
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart
LINE: 265
PREV: Constant.userModel = null;
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart
LINE: 297
PREV: ShowToastDialog.showLoader("Please wait...".tr);
TEXT: await controller.deleteUserFromServer();
NEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: ShowToastDialog.closeLoader();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart
LINE: 298
PREV: await controller.deleteUserFromServer();
TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: ShowToastDialog.closeLoader();
NEXT: if (value == true) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 103
PREV: static String getCurrentUid() {
TEXT: return auth.FirebaseAuth.instance.currentUser!.uid;
NEXT: }
NEXT: 

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 108
PREV: bool isLogin = false;
TEXT: if (auth.FirebaseAuth.instance.currentUser != null) {
NEXT: isLogin = await userExistOrNot(auth.FirebaseAuth.instance.currentUser!.uid);
NEXT: } else {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 109
PREV: if (auth.FirebaseAuth.instance.currentUser != null) {
TEXT: isLogin = await userExistOrNot(auth.FirebaseAuth.instance.currentUser!.uid);
NEXT: } else {
NEXT: isLogin = false;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1770
TEXT: static Future<bool?> deleteUser() async {
NEXT: bool? isDelete;
NEXT: try {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1787
PREV: try {
TEXT: final user = auth.FirebaseAuth.instance.currentUser;
NEXT: if (user == null) {
NEXT: print("❌ No user is logged in.");

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1795
PREV: final projectId = DefaultFirebaseOptions.currentPlatform.projectId;
TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');
NEXT: 
NEXT: final response = await http.post(

## DRIVER_APP

- Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver
- Files scanned: 334
- Hits found: 48

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\auth_screen\otp_screen.dart
LINE: 179
PREV: String fcmToken = await NotificationService.getToken();
TEXT: await FirebaseAuth.instance.signInWithCredential(credential).then((value) async {
NEXT: if (value.additionalUserInfo!.isNewUser) {
NEXT: UserModel userModel = UserModel();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\auth_screen\otp_screen.dart
LINE: 223
PREV: ShowToastDialog.showToast("This user is disable please contact to administrator".tr);
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\auth_screen\otp_screen.dart
LINE: 227
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: ShowToastDialog.showToast("Account already created in other application. You are not able login this application.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\cab_screen\cab_dashboard_screen.dart
LINE: 656
PREV: await FireStoreUtils.updateUser(Constant.userModel!);
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\cab_screen\cab_dashboard_screen.dart
LINE: 686
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: ShowToastDialog.closeLoader();
NEXT: if (value == true) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\dash_board_screen\dash_board_screen.dart
LINE: 704
PREV: await FireStoreUtils.updateUser(Constant.userModel!);
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\dash_board_screen\dash_board_screen.dart
LINE: 734
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: ShowToastDialog.closeLoader();
NEXT: if (value == true) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\owner_screen\owner_dashboard_screen.dart
LINE: 584
PREV: await FireStoreUtils.updateUser(Constant.userModel!);
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\owner_screen\owner_dashboard_screen.dart
LINE: 614
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: ShowToastDialog.closeLoader();
NEXT: if (value == true) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\parcel_screen\parcel_dashboard_screen.dart
LINE: 629
PREV: await FireStoreUtils.updateUser(Constant.userModel!);
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\parcel_screen\parcel_dashboard_screen.dart
LINE: 659
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: ShowToastDialog.closeLoader();
NEXT: if (value == true) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\rental_service\rental_dashboard_screen.dart
LINE: 652
PREV: await FireStoreUtils.updateUser(Constant.userModel!);
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\rental_service\rental_dashboard_screen.dart
LINE: 682
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: ShowToastDialog.closeLoader();
NEXT: if (value == true) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\change_password_controller.dart
LINE: 19
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await FirebaseAuth.instance.sendPasswordResetEmail(
NEXT: email: emailEditingController.value.text.trim(),
NEXT: );

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\change_password_controller.dart
LINE: 27
PREV: Get.offAll(DashBoardScreen());
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'user-not-found') {
NEXT: ShowToastDialog.showToast('No user found for that email.'.tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\driver_create_controller.dart
LINE: 269
PREV: );
TEXT: FirebaseAuth secondaryAuth = FirebaseAuth.instanceFor(app: secondaryApp);
NEXT: 
NEXT: final credential = await secondaryAuth.createUserWithEmailAndPassword(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\driver_create_controller.dart
LINE: 285
PREV: }
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'weak-password') {
NEXT: ShowToastDialog.showToast("The password provided is too weak.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\forgot_password_controller.dart
LINE: 12
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await FirebaseAuth.instance.sendPasswordResetEmail(
NEXT: email: emailEditingController.value.text,
NEXT: );

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\forgot_password_controller.dart
LINE: 18
PREV: Get.back();
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'user-not-found') {
NEXT: ShowToastDialog.showToast('No user found for that email.'.tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\global_setting_controller.dart
LINE: 39
PREV: log(":::::::TOKEN:::::: $token");
TEXT: if (FirebaseAuth.instance.currentUser != null) {
NEXT: await FireStoreUtils.getUserProfile(FireStoreUtils.getCurrentUid()).then((value) {
NEXT: if (value != null) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\login_controller.dart
LINE: 40
PREV: try {
TEXT: final credential = await FirebaseAuth.instance.signInWithEmailAndPassword(
NEXT: email: emailEditingController.value.text.toLowerCase().trim(),
NEXT: password: passwordEditingController.value.text.trim(),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\login_controller.dart
LINE: 54
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast(
NEXT: "This user is disable please contact to administrator".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\login_controller.dart
LINE: 59
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast(
NEXT: "This user is not created in driver application.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\login_controller.dart
LINE: 63
PREV: }
TEXT: } on FirebaseAuthException catch (e) {
NEXT: print(e.code);
NEXT: if (e.code == 'user-not-found') {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\login_controller.dart
LINE: 109
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast(
NEXT: "This user is disable please contact to administrator"

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\login_controller.dart
LINE: 115
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: }
NEXT: } else {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\login_controller.dart
LINE: 173
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast(
NEXT: "This user is disable please contact to administrator"

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\login_controller.dart
LINE: 179
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: }
NEXT: } else {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\login_controller.dart
LINE: 227
PREV: final userCredential =
TEXT: await FirebaseAuth.instance.signInWithCredential(credential);
NEXT: 
NEXT: return userCredential;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\login_controller.dart
LINE: 230
PREV: return userCredential;
TEXT: } on FirebaseAuthException catch (e) {
NEXT: debugPrint("Firebase Google Sign-In Error: ${e.code} ${e.message}");
NEXT: ShowToastDialog.showToast(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\login_controller.dart
LINE: 296
PREV: UserCredential userCredential =
TEXT: await FirebaseAuth.instance.signInWithCredential(oauthCredential);
NEXT: return {
NEXT: "appleCredential": appleCredential,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\otp_controller.dart
LINE: 35
PREV: Future<bool> sendOTP() async {
TEXT: await FirebaseAuth.instance.verifyPhoneNumber(
NEXT: phoneNumber: countryCode.value + phoneNumber.value,
NEXT: verificationCompleted: (PhoneAuthCredential credential) {},

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\otp_controller.dart
LINE: 38
PREV: verificationCompleted: (PhoneAuthCredential credential) {},
TEXT: verificationFailed: (FirebaseAuthException e) {},
NEXT: codeSent: (String verificationId0, int? resendToken0) async {
NEXT: verificationId.value = verificationId0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\phone_number_controller.dart
LINE: 16
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await FirebaseAuth.instance
NEXT: .verifyPhoneNumber(
NEXT: phoneNumber: countryCodeEditingController.value.text + phoneNUmberEditingController.value.text,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\phone_number_controller.dart
LINE: 20
PREV: verificationCompleted: (PhoneAuthCredential credential) {},
TEXT: verificationFailed: (FirebaseAuthException e) {
NEXT: debugPrint("FirebaseAuthException--->${e.message}");
NEXT: ShowToastDialog.closeLoader();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\phone_number_controller.dart
LINE: 21
PREV: verificationFailed: (FirebaseAuthException e) {
TEXT: debugPrint("FirebaseAuthException--->${e.message}");
NEXT: ShowToastDialog.closeLoader();
NEXT: if (e.code == 'invalid-phone-number') {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\signup_controller.dart
LINE: 219
PREV: try {
TEXT: final credential = await FirebaseAuth.instance.createUserWithEmailAndPassword(
NEXT: email: emailEditingController.value.text.trim(),
NEXT: password: passwordEditingController.value.text.trim(),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\signup_controller.dart
LINE: 229
PREV: }
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'weak-password') {
NEXT: ShowToastDialog.showToast("The password provided is too weak.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\splash_controller.dart
LINE: 48
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\splash_controller.dart
LINE: 52
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\splash_controller.dart
LINE: 58
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\utils\fire_store_utils.dart
LINE: 81
PREV: static String getCurrentUid() {
TEXT: return FirebaseAuth.instance.currentUser!.uid;
NEXT: }
NEXT: 

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\utils\fire_store_utils.dart
LINE: 86
PREV: bool isLogin = false;
TEXT: if (FirebaseAuth.instance.currentUser != null) {
NEXT: isLogin = await userExistOrNot(FirebaseAuth.instance.currentUser!.uid);
NEXT: } else {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\utils\fire_store_utils.dart
LINE: 87
PREV: if (FirebaseAuth.instance.currentUser != null) {
TEXT: isLogin = await userExistOrNot(FirebaseAuth.instance.currentUser!.uid);
NEXT: } else {
NEXT: isLogin = false;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\utils\fire_store_utils.dart
LINE: 909
TEXT: static Future<bool?> deleteUser() async {
NEXT: bool? isDelete;
NEXT: try {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\utils\fire_store_utils.dart
LINE: 915
PREV: // delete user  from firebase auth
TEXT: await FirebaseAuth.instance.currentUser?.delete().then((value) {
NEXT: isDelete = true;
NEXT: });

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\utils\fire_store_utils.dart
LINE: 1590
PREV: try {
TEXT: final user = FirebaseAuth.instance.currentUser;
NEXT: if (user == null) {
NEXT: print("❌ No user is logged in.");

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\utils\fire_store_utils.dart
LINE: 1598
PREV: final projectId = DefaultFirebaseOptions.currentPlatform.projectId;
TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');
NEXT: 
NEXT: final response = await http.post(

## RESTAURANT_APP

- Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor
- Files scanned: 242
- Hits found: 50

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\otp_screen.dart
LINE: 90
PREV: String fcmToken = await NotificationService.getToken();
TEXT: await FirebaseAuth.instance
NEXT: .signInWithCredential(credential)
NEXT: .then((value) async {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\otp_screen.dart
LINE: 149
PREV: ShowToastDialog.showToast("This user is disable please contact to administrator".tr);
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\otp_screen.dart
LINE: 153
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: ShowToastDialog.showToast("This user is not created in Store application.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart
LINE: 899
PREV: Constant.userModel = null;
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.closeLoader();
NEXT: Get.offAll(const LoginScreen());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart
LINE: 930
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await controller.deleteUserFromServer();
NEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: ShowToastDialog.closeLoader();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart
LINE: 931
PREV: await controller.deleteUserFromServer();
TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: ShowToastDialog.closeLoader();
NEXT: if (value == true) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\add_driver_controller.dart
LINE: 125
PREV: FirebaseApp secondaryApp = await Firebase.initializeApp(name: 'SecondaryApp', options: Firebase.app().options);
TEXT: FirebaseAuth secondaryAuth = FirebaseAuth.instanceFor(app: secondaryApp);
NEXT: 
NEXT: final credential = await secondaryAuth.createUserWithEmailAndPassword(email: emailEditingController.value.text.trim(), password: passwordEditingController.value.text.trim());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\add_driver_controller.dart
LINE: 152
PREV: });
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'weak-password') {
NEXT: ShowToastDialog.showToast("The password provided is too weak.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\add_employee_controller.dart
LINE: 83
TEXT: FirebaseAuth secondaryAuth = FirebaseAuth.instanceFor(app: secondaryApp);
NEXT: 
NEXT: final credential = await secondaryAuth.createUserWithEmailAndPassword(email: emailEditingController.value.text.trim(), password: passwordEditingController.value.text.trim());

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\add_employee_controller.dart
LINE: 123
PREV: });
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'weak-password') {
NEXT: ShowToastDialog.showToast("The password provided is too weak.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\change_password_controller.dart
LINE: 17
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await FirebaseAuth.instance.sendPasswordResetEmail(email: emailEditingController.value.text.trim());
NEXT: ShowToastDialog.closeLoader();
NEXT: ShowToastDialog.showToast('${'Reset Password link sent your'.tr} ${emailEditingController.value.text} ${'email'.tr}');

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\change_password_controller.dart
LINE: 21
PREV: Get.back();
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'user-not-found') {
NEXT: ShowToastDialog.showToast('No user found for that email.'.tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\forgot_password_controller.dart
LINE: 12
PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: await FirebaseAuth.instance.sendPasswordResetEmail(email: emailEditingController.value.text);
NEXT: ShowToastDialog.closeLoader();
NEXT: ShowToastDialog.showToast('${'Reset Password link sent your'.tr} ${emailEditingController.value.text} ${'email'.tr}');

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\forgot_password_controller.dart
LINE: 16
PREV: Get.back();
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'user-not-found') {
NEXT: ShowToastDialog.showToast('No user found for that email.'.tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\global_setting_controller.dart
LINE: 35
PREV: String token = await NotificationService.getToken();
TEXT: if (FirebaseAuth.instance.currentUser != null) {
NEXT: await FireStoreUtils.getUserProfile(FireStoreUtils.getCurrentUid()).then((value) {
NEXT: if (value != null) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 43
PREV: try {
TEXT: final credential = await FirebaseAuth.instance.signInWithEmailAndPassword(
NEXT: email: emailEditingControllerOwner.value.text.toLowerCase().trim(),
NEXT: password: passwordEditingControllerOwner.value.text.trim(),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 89
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast("This user is disable please contact to administrator".tr);
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 93
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast("This user is not created in store application.".tr);
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 97
PREV: }
TEXT: } on FirebaseAuthException catch (e) {
NEXT: print(e.code);
NEXT: if (e.code == 'user-not-found') {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 113
PREV: try {
TEXT: final credential = await FirebaseAuth.instance.signInWithEmailAndPassword(
NEXT: email: emailEditingControllerEmployee.value.text.toLowerCase().trim(),
NEXT: password: passwordEditingControllerEmployee.value.text.trim(),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 157
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast("This user is disable please contact to administrator".tr);
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 161
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast("This user is not created in restaurant application.".tr);
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 165
PREV: }
TEXT: } on FirebaseAuthException catch (e) {
NEXT: print(e.code);
NEXT: if (e.code == 'user-not-found') {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 238
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast("This user is disable please contact to administrator".tr);
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 242
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: // ShowToastDialog.showToast("This user is disable please contact to administrator".tr);
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 325
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: ShowToastDialog.showToast("This user is disable please contact to administrator".tr);
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 329
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: // ShowToastDialog.showToast("This user is disable please contact to administrator".tr);
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 371
PREV: final credential = GoogleAuthProvider.credential(idToken: googleAuth.idToken);
TEXT: final userCredential = await FirebaseAuth.instance.signInWithCredential(credential);
NEXT: 
NEXT: return userCredential;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 374
PREV: return userCredential;
TEXT: } on FirebaseAuthException catch (e) {
NEXT: debugPrint("Firebase Google Sign-In Error: ${e.code} ${e.message}");
NEXT: ShowToastDialog.showToast(e.message ?? "Firebase authentication failed.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\login_controller.dart
LINE: 408
PREV: // not match the nonce in `appleCredential.identityToken`, sign in will fail.
TEXT: UserCredential userCredential = await FirebaseAuth.instance.signInWithCredential(oauthCredential);
NEXT: return {"appleCredential": appleCredential, "userCredential": userCredential};
NEXT: } catch (e) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\otp_controller.dart
LINE: 35
PREV: Future<bool> sendOTP() async {
TEXT: await FirebaseAuth.instance.verifyPhoneNumber(
NEXT: phoneNumber: countryCode.value + phoneNumber.value,
NEXT: verificationCompleted: (PhoneAuthCredential credential) {},

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\otp_controller.dart
LINE: 38
PREV: verificationCompleted: (PhoneAuthCredential credential) {},
TEXT: verificationFailed: (FirebaseAuthException e) {},
NEXT: codeSent: (String verificationId0, int? resendToken0) async {
NEXT: verificationId.value = verificationId0;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\phone_number_controller.dart
LINE: 16
PREV: ShowToastDialog.showLoader("please wait...".tr);
TEXT: await FirebaseAuth.instance
NEXT: .verifyPhoneNumber(
NEXT: phoneNumber: countryCodeEditingController.value.text + phoneNUmberEditingController.value.text,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\phone_number_controller.dart
LINE: 20
PREV: verificationCompleted: (PhoneAuthCredential credential) {},
TEXT: verificationFailed: (FirebaseAuthException e) {
NEXT: debugPrint("FirebaseAuthException--->${e.message}");
NEXT: ShowToastDialog.closeLoader();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\phone_number_controller.dart
LINE: 21
PREV: verificationFailed: (FirebaseAuthException e) {
TEXT: debugPrint("FirebaseAuthException--->${e.message}");
NEXT: ShowToastDialog.closeLoader();
NEXT: if (e.code == 'invalid-phone-number') {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\profile_controller.dart
LINE: 71
TEXT: Future<bool> deleteUserFromServer() async {
NEXT: var url = '${Constant.storeUrl}/api/delete-user';
NEXT: try {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\profile_controller.dart
LINE: 72
PREV: Future<bool> deleteUserFromServer() async {
TEXT: var url = '${Constant.storeUrl}/api/delete-user';
NEXT: try {
NEXT: var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\profile_controller.dart
LINE: 75
PREV: var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});
TEXT: log("deleteUserFromServer :: ${response.body}");
NEXT: if (response.statusCode == 200) {
NEXT: return true;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\signup_controller.dart
LINE: 114
PREV: try {
TEXT: final credential = await FirebaseAuth.instance.createUserWithEmailAndPassword(email: emailEditingController.value.text.trim(), password: passwordEditingController.value.text.trim());
NEXT: if (credential.user != null) {
NEXT: userModel.value.id = credential.user!.uid;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\signup_controller.dart
LINE: 166
PREV: }
TEXT: } on FirebaseAuthException catch (e) {
NEXT: if (e.code == 'weak-password') {
NEXT: ShowToastDialog.showToast("The password provided is too weak.".tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\splash_controller.dart
LINE: 79
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\splash_controller.dart
LINE: 121
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\splash_controller.dart
LINE: 125
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\splash_controller.dart
LINE: 131
PREV: } else {
TEXT: await FirebaseAuth.instance.signOut();
NEXT: Get.offAll(const LoginScreen());
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\utils\fire_store_utils.dart
LINE: 82
PREV: static String getCurrentUid() {
TEXT: return FirebaseAuth.instance.currentUser!.uid;
NEXT: }
NEXT: 

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\utils\fire_store_utils.dart
LINE: 91
PREV: bool isLogin = false;
TEXT: if (FirebaseAuth.instance.currentUser?.uid != null) {
NEXT: isLogin = await userExistOrNot(FirebaseAuth.instance.currentUser!.uid);
NEXT: } else {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\utils\fire_store_utils.dart
LINE: 92
PREV: if (FirebaseAuth.instance.currentUser?.uid != null) {
TEXT: isLogin = await userExistOrNot(FirebaseAuth.instance.currentUser!.uid);
NEXT: } else {
NEXT: isLogin = false;

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\utils\fire_store_utils.dart
LINE: 1297
TEXT: static Future<bool?> deleteUser() async {
NEXT: try {
NEXT: if (Constant.userModel?.vendorID != null && Constant.userModel?.vendorID?.isNotEmpty == true) {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\utils\fire_store_utils.dart
LINE: 1338
PREV: try {
TEXT: final user = FirebaseAuth.instance.currentUser;
NEXT: if (user == null) {
NEXT: print("❌ No user is logged in.");

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\utils\fire_store_utils.dart
LINE: 1346
PREV: final projectId = DefaultFirebaseOptions.currentPlatform.projectId;
TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');
NEXT: 
NEXT: final response = await http.post(

## ADMIN_PANEL

- Path: C:\deploy\adminpanel
- Files scanned: 4755
## MySQL Local Check

### users table

Field	Type	Null	Key	Default	Extra
id	bigint(20) unsigned	NO	PRI	NULL	auto_increment
name	varchar(255)	NO		NULL	
email	varchar(255)	NO		NULL	
email_verified_at	timestamp	YES		NULL	
password	varchar(255)	NO		NULL	
remember_token	varchar(100)	YES		NULL	
created_at	timestamp	YES		NULL	
updated_at	timestamp	YES		NULL	
role_id	bigint(20) unsigned	YES		NULL	

### vendor_users table

Field	Type	Null	Key	Default	Extra
id	int(255)	NO	PRI	NULL	auto_increment
user_id	varchar(255)	NO		NULL	
uuid	varchar(255)	NO		NULL	
email	varchar(255)	NO		NULL	

## Keputusan Kendali

- Belum patch.
- Jangan hapus user asli.
- Jangan jalankan Cloud Function deleteUser.
- Jangan git add/commit/push.
- Setelah V2 lengkap, tentukan satu jalur resmi delete user.