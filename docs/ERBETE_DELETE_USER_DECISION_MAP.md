# ERBETE DELETE USER DECISION MAP

Generated: 06/28/2026 05:14:41

## Status

- Audit source: docs/ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
- Mode: audit-only.
- Belum patch.
- Belum hapus user asli.

## Temuan Utama

- Customer App memakai websiteUrl + /api/delete-user sebelum menjalankan FireStoreUtils.deleteUser.
- Restaurant/Vendor App memakai storeUrl + /api/delete-user sebelum menjalankan FireStoreUtils.deleteUser.
- Driver App memiliki jalur delete langsung ke FirebaseAuth currentUser.delete dan juga indikasi Cloud Function deleteUser.
- Cloud Function deleteUser muncul sebagai endpoint https://us-central1-\.cloudfunctions.net/deleteUser.
- Laravel/MySQL memakai tabel users dan vendor_users untuk jalur delete lokal.

## Bukti Terpilih

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 11
PREV: - Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer
PREV: - Files scanned: 348
TEXT: - Hits found: 40
NEXT: 
NEXT: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\change_password_controller.dart
NEXT: LINE: 17

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 131
PREV: LINE: 41
PREV: PREV: // Delete user API
TEXT: TEXT: Future<bool> deleteUserFromServer() async {
NEXT: NEXT: var url = '${Constant.websiteUrl}/api/delete-user';
NEXT: NEXT: try {
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 132
PREV: PREV: // Delete user API
PREV: TEXT: Future<bool> deleteUserFromServer() async {
TEXT: NEXT: var url = '${Constant.websiteUrl}/api/delete-user';
NEXT: NEXT: try {
NEXT: 
NEXT: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\my_profile_controller.dart

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 137
PREV: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\my_profile_controller.dart
PREV: LINE: 42
TEXT: PREV: Future<bool> deleteUserFromServer() async {
NEXT: TEXT: var url = '${Constant.websiteUrl}/api/delete-user';
NEXT: NEXT: try {
NEXT: NEXT: var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 138
PREV: LINE: 42
PREV: PREV: Future<bool> deleteUserFromServer() async {
TEXT: TEXT: var url = '${Constant.websiteUrl}/api/delete-user';
NEXT: NEXT: try {
NEXT: NEXT: var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 145
PREV: LINE: 45
PREV: PREV: var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});
TEXT: TEXT: log("deleteUserFromServer :: ${response.body}");
NEXT: NEXT: return response.statusCode == 200;
NEXT: NEXT: } catch (e) {
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 235
PREV: LINE: 297
PREV: PREV: ShowToastDialog.showLoader("Please wait...".tr);
TEXT: TEXT: await controller.deleteUserFromServer();
NEXT: NEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 236
PREV: PREV: ShowToastDialog.showLoader("Please wait...".tr);
PREV: TEXT: await controller.deleteUserFromServer();
TEXT: NEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: 
NEXT: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 241
PREV: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart
PREV: LINE: 298
TEXT: PREV: await controller.deleteUserFromServer();
NEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: NEXT: if (value == true) {

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 242
PREV: LINE: 298
PREV: PREV: await controller.deleteUserFromServer();
TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: NEXT: if (value == true) {
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 283
PREV: LINE: 1795
PREV: PREV: final projectId = DefaultFirebaseOptions.currentPlatform.projectId;
TEXT: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');
NEXT: NEXT:
NEXT: NEXT: final response = await http.post(
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 291
PREV: - Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver
PREV: - Files scanned: 334
TEXT: - Hits found: 48
NEXT: 
NEXT: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\auth_screen\otp_screen.dart
NEXT: LINE: 179

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 324
PREV: LINE: 686
PREV: PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: NEXT: if (value == true) {
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 338
PREV: LINE: 734
PREV: PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: NEXT: if (value == true) {
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 352
PREV: LINE: 614
PREV: PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: NEXT: if (value == true) {
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 366
PREV: LINE: 659
PREV: PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: NEXT: if (value == true) {
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 380
PREV: LINE: 682
PREV: PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: NEXT: if (value == true) {
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 610
PREV: LINE: 915
PREV: PREV: // delete user  from firebase auth
TEXT: TEXT: await FirebaseAuth.instance.currentUser?.delete().then((value) {
NEXT: NEXT: isDelete = true;
NEXT: NEXT: });
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 624
PREV: LINE: 1598
PREV: PREV: final projectId = DefaultFirebaseOptions.currentPlatform.projectId;
TEXT: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');
NEXT: NEXT:
NEXT: NEXT: final response = await http.post(
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 632
PREV: - Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor
PREV: - Files scanned: 242
TEXT: - Hits found: 50
NEXT: 
NEXT: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\otp_screen.dart
NEXT: LINE: 90

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 665
PREV: LINE: 930
PREV: PREV: ShowToastDialog.showLoader("Please wait".tr);
TEXT: TEXT: await controller.deleteUserFromServer();
NEXT: NEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 666
PREV: PREV: ShowToastDialog.showLoader("Please wait".tr);
PREV: TEXT: await controller.deleteUserFromServer();
TEXT: NEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: 
NEXT: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 671
PREV: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\profile_screen\profile_screen.dart
PREV: LINE: 931
TEXT: PREV: await controller.deleteUserFromServer();
NEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: NEXT: if (value == true) {

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 672
PREV: LINE: 931
PREV: PREV: await controller.deleteUserFromServer();
TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {
NEXT: NEXT: ShowToastDialog.closeLoader();
NEXT: NEXT: if (value == true) {
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 880
PREV: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\profile_controller.dart
PREV: LINE: 71
TEXT: TEXT: Future<bool> deleteUserFromServer() async {
NEXT: NEXT: var url = '${Constant.storeUrl}/api/delete-user';
NEXT: NEXT: try {
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 881
PREV: LINE: 71
PREV: TEXT: Future<bool> deleteUserFromServer() async {
TEXT: NEXT: var url = '${Constant.storeUrl}/api/delete-user';
NEXT: NEXT: try {
NEXT: 
NEXT: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\profile_controller.dart

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 886
PREV: FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\profile_controller.dart
PREV: LINE: 72
TEXT: PREV: Future<bool> deleteUserFromServer() async {
NEXT: TEXT: var url = '${Constant.storeUrl}/api/delete-user';
NEXT: NEXT: try {
NEXT: NEXT: var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 887
PREV: LINE: 72
PREV: PREV: Future<bool> deleteUserFromServer() async {
TEXT: TEXT: var url = '${Constant.storeUrl}/api/delete-user';
NEXT: NEXT: try {
NEXT: NEXT: var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 894
PREV: LINE: 75
PREV: PREV: var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});
TEXT: TEXT: log("deleteUserFromServer :: ${response.body}");
NEXT: NEXT: if (response.statusCode == 200) {
NEXT: NEXT: return true;
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 977
PREV: LINE: 1346
PREV: PREV: final projectId = DefaultFirebaseOptions.currentPlatform.projectId;
TEXT: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');
NEXT: NEXT:
NEXT: NEXT: final response = await http.post(
NEXT: 

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 987
PREV: ## MySQL Local Check
PREV: 
TEXT: ### users table
NEXT: 
NEXT: Field	Type	Null	Key	Default	Extra
NEXT: id	bigint(20) unsigned	NO	PRI	NULL	auto_increment

FILE: C:\deploy\adminpanel\docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
LINE: 1000
PREV: role_id	bigint(20) unsigned	YES		NULL
PREV: 
TEXT: ### vendor_users table
NEXT: 
NEXT: Field	Type	Null	Key	Default	Extra
NEXT: id	int(255)	NO	PRI	NULL	auto_increment

## Keputusan Kendali yang Disarankan

### Jalur resmi sementara: HYBRID TERKENDALI

Urutan aman yang harus dikunci:

1. Validasi user login dan UID Firebase.
2. Kirim uuid ke Laravel API sesuai jenis app:
   - Customer App ke websiteUrl/api/delete-user
   - Restaurant/Vendor App ke storeUrl/api/delete-user
3. Laravel API menghapus relasi MySQL users/vendor_users jika datanya ada.
4. Firestore menghapus dokumen users/vendors/wallet terkait sesuai role.
5. Firebase Auth dihapus melalui Cloud Function deleteUser, bukan dari client langsung.

## Risiko

- Jika client langsung memanggil currentUser.delete, user bisa hilang dari Firebase Auth tetapi data Firestore/MySQL masih tertinggal.
- Jika Laravel API gagal tetapi Firestore/Auth tetap dihapus, data MySQL menjadi yatim.
- Jika Cloud Function gagal tetapi Firestore/MySQL sudah dihapus, akun Auth bisa tersisa.

## Larangan Saat Ini

- Jangan patch dulu.
- Jangan hapus user asli.
- Jangan jalankan Cloud Function deleteUser manual.
- Jangan git add/commit/push.

## Langkah Berikutnya

- Audit isi fungsi deleteUser Cloud Function.
- Audit Laravel route /api/delete-user di Store dan Website.
- Baru setelah itu buat patch satu jalur delete-user.