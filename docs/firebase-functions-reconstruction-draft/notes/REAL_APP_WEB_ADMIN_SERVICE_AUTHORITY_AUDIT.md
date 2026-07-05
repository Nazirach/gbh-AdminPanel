# WEB ADMIN SERVICE AUTHORITY AUDIT

Generated: 06/29/2026 00:17:25

Mode: read-only. No patch. No Firebase write. No deploy. No build.

## Purpose

- Audit whether Web Admin controls which services appear in Customer APK.
- Find admin pages/routes/controllers for sections/services.
- Check whether admin supports new code service flag: ondemand-service.
- Compare admin authority fields: isActive, order, serviceType, serviceTypeFlag, sectionImage, platformFee.

## Project Info
```text
admin: C:\deploy\adminpanel

git rev-parse --show-toplevel:
C:/deploy/adminpanel


git branch --show-current:
main


git log -1 --oneline:
0832f52 Support legacy tax scope in tax report


git status --short:
 M app/Providers/AppServiceProvider.php
 M resources/views/layouts/app.blade.php
 M resources/views/reports/tax-reports.blade.php
?? TODO.md
?? docs/ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
?? docs/ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
?? docs/ADMIN_STORE_WEBSITE_SAFE_DELETE_USER_CONNECTION_TEST_FINAL_REPORT.md
?? docs/DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
?? docs/DELETE_USER_CLOUD_FUNCTION_HITS.csv
?? docs/DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
?? docs/DELETE_USER_FLOW_EXCERPTS.txt
?? docs/DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv
?? docs/DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv
?? docs/DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
?? docs/DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
?? docs/DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
?? docs/DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
?? docs/ERBETE_APP_PACKAGE_DISCOVERY_REPORT.txt
?? docs/ERBETE_APP_PACKAGE_DISCOVERY_SUMMARY.md
?? docs/ERBETE_CLOUD_FUNCTION_DELETE_USER_AUDIT.md
?? docs/ERBETE_CLOUD_FUNCTION_DELETE_USER_DEPLOY_MANUAL_PLAN.md
?? docs/ERBETE_CLOUD_FUNCTION_DELETE_USER_ONREQUEST_PATCH_REPORT.md
?? docs/ERBETE_CLOUD_FUNCTION_DELETE_USER_ONREQUEST_RECHECK_REPORT.md
?? docs/ERBETE_CLOUD_FUNCTION_DELETE_USER_QUICK_VERIFY.md
?? docs/ERBETE_CLOUD_FUNCTION_INDEX_BACKUP_REPORT.md
?? docs/ERBETE_CUSTOMER_APP_DETAIL_AUDIT.md
?? docs/ERBETE_DELETE_USER_AUDIT_CHECKPOINT_STEP_1_TO_4.md
?? docs/ERBETE_DELETE_USER_AUDIT_CHECKPOINT_STEP_5_FLUTTER.md
?? docs/ERBETE_DELETE_USER_AUDIT_STEP_1_FUNCTION_ONLY.md
?? docs/ERBETE_DELETE_USER_AUDIT_STEP_2_ADMIN_PANEL_ONLY.md
?? docs/ERBETE_DELETE_USER_DECISION_MAP.md
?? docs/ERBETE_DELETE_USER_DEPLOY_EXECUTION_REPORT.md
?? docs/ERBETE_DELETE_USER_DEPLOY_RETRY_AFTER_ADMIN_INIT_PATCH.md
?? docs/ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
?? docs/ERBETE_DELETE_USER_FINAL_DECISION_REPORT.md
?? docs/ERBETE_DELETE_USER_PATCH_PLAN.md
?? docs/ERBETE_DELETE_USER_RECREATE_SUCCESS_REPORT.md
?? docs/ERBETE_DELETE_USER_ROBUST_KNOWN_ROOTS_AUDIT.md
?? docs/ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
?? docs/ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
?? docs/ERBETE_DELETE_USER_TARGETED_KNOWN_ROOTS_AUDIT.md
?? docs/ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
?? docs/ERBETE_DELETE_USER_UNIFIED_AUDIT.md
?? docs/ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
?? docs/ERBETE_DISPATCH_RECONSTRUCTION_MAP_REPORT.md
?? docs/ERBETE_DRIVERNEARBY_DISPATCH_SETTINGS_MAP_REPORT.md
?? docs/ERBETE_DRIVER_ACTION_TRANSITION_MAP_REPORT.md
?? docs/ERBETE_DRIVER_APP_DETAIL_AUDIT.md
?? docs/ERBETE_E2E_SIMULATION_MASTER_PLAN.md
?? docs/ERBETE_ECOSYSTEM_GIT_APP_MAP.md
?? docs/ERBETE_FIREBASERC_PROJECT_FIX_REPORT.md
?? docs/ERBETE_FIREBASE_ADMIN_INIT_PATCH_REPORT.md
?? docs/ERBETE_FIREBASE_CONFIG_PREDEPLOY_AUDIT.md
?? docs/ERBETE_FIREBASE_FUNCTIONS_FINAL_MASTER_CHECKPOINT_REPORT.md
?? docs/ERBETE_FIREBASE_FUNCTIONS_MASTER_CHECKPOINT_REPORT.md
?? docs/ERBETE_FIREBASE_LIVE_ONLY_FUNCTIONS_REPORT.md
?? docs/ERBETE_FIREBASE_PROJECT_PREDEPLOY_CHECK_V2.md
?? docs/ERBETE_FIREBASE_REMAINING_NODEJS10_FUNCTIONS_AUDIT.md
?? docs/ERBETE_FUNCTIONS_LINT_AFTER_NPM_CI.md
?? docs/ERBETE_FUNCTIONS_LINT_PREDEPLOY_CHECK.md
?? docs/ERBETE_FUNCTIONS_NPM_CI_REPORT.md
?? docs/ERBETE_FUNCTIONS_NPM_STATE_AUDIT.md
?? docs/ERBETE_FUNCTIONS_SOURCE_LOCATION_AUDIT.md
?? docs/ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT.md
?? docs/ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
?? docs/ERBETE_LIVE_FUNCTION_METADATA_MAP_REPORT.md
?? docs/ERBETE_LIVE_ONLY_FUNCTIONS_ZIP_SEARCH_FINAL_REPORT.md
?? docs/ERBETE_OLD_FUNCTION_SOURCE_TRACE_SEARCH_REPORT.md
?? docs/ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
?? docs/ERBETE_ORDER_TRACKING_ZIP_EXTRACT_AUDIT_REPORT.md
?? docs/ERBETE_PRECISION_SOURCE_LOCATOR.md
?? docs/ERBETE_PREDEPLOY_AFTER_FIREBASERC_FIX.md
?? docs/ERBETE_PROJECT_ROOT_LOCATOR_FOR_DELETE_USER_AUDIT.md
?? docs/ERBETE_PROPAGATE_USER_PROFILE_UPDATES_RECONSTRUCTION_MAP_REPORT.md
?? docs/ERBETE_RESTAURANT_STORE_WEBSITE_CONNECTION_FIX.md
?? docs/ERBETE_RIDE_PARCEL_DISPATCH_DRAFT_LOGIC_REPORT.md
?? docs/ERBETE_USER_DISPATCH_ELIGIBILITY_MAP_REPORT.md
?? docs/ERBETE_VENDOR_APP_DETAIL_AUDIT.md
?? docs/ERBETE_VENDOR_OWNER_LINK_MAP_REPORT.md
?? docs/ERBETE_WEB_APP_FUNCTION_CONNECTION_RAW.txt
?? docs/ERBETE_WEB_APP_UNIFIED_FUNCTION_MAP_DRAFT.md
?? docs/FIREBASE_APP_COLLECTION_SYNC_MAP_DRAFT.md
?? docs/FIREBASE_APP_CORE_COLLECTION_MAP.md
?? docs/FIREBASE_COLLECTION_USAGE_CUSTOMER_RAW.txt
?? docs/FIREBASE_COLLECTION_USAGE_DRIVER_RAW.txt
?? docs/FIREBASE_COLLECTION_USAGE_VENDOR_RAW.txt
?? docs/FIRESTORE_SETTINGS_VERSION_URL_CHECKLIST.md
?? docs/FIRESTORE_USAGE_ADMIN_RAW.txt
?? docs/FIRESTORE_USAGE_STORE_RAW.txt
?? docs/GIT_BASELINE_AUDIT_RAW.txt
?? docs/GLOBAL_BLADE_WEBSITE_SETTINGS_EXCERPTS.txt
?? docs/GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
?? docs/LARAVEL_ROOT_CANDIDATES_FULL.txt
?? docs/LOCAL_GIT_REPOSITORY_DISCOVERY_REPORT.txt
?? docs/MODULE_SELECTOR_DARK_THEME_FIX_REPORT.md
?? docs/MODULE_SELECTOR_ICON_FINAL_VERIFY_REPORT.md
?? docs/MODULE_SELECTOR_ICON_VISIBILITY_FIX_REPORT.md
?? docs/MODULE_SELECTOR_IMAGE_FALLBACK_FIX_REPORT.md
?? docs/MODULE_SELECTOR_IMAGE_FALLBACK_VERIFY_REPORT.md
?? docs/MODULE_SELECTOR_UI_VERIFY_REPORT.md
?? docs/POWER_SHELL_DELETE_USER_ENDPOINT_DISCOVERY.ps1
?? docs/RECOVERY_EXTRACT_STATUS_REPORT.txt
?? docs/STORE_PANEL_API_ROUTE_LOAD_REPORT.md
?? docs/STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
?? docs/STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
?? docs/STORE_PANEL_FIRESTORE_BOOT_GUARD_CORRECT_TARGET_REPORT.md
?? docs/STORE_PANEL_FIRESTORE_BOOT_GUARD_REPORT.md
?? docs/STORE_WEBSITE_PANEL_AUDIT_START.md
?? docs/STORE_WEBSITE_PANEL_BUILD_READINESS_BASELINE_SAFE.ps1
?? docs/STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
?? docs/STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
?? docs/STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
?? docs/STORE_WEBSITE_RUNTIME_FIREBASE_GUARD_AND_LOGIN_INIT_REPORT.md
?? docs/TAX_REPORT_DEBUG_FIX_REPORT.md
?? docs/TAX_REPORT_TABLE_AND_DATERANGEPICKER_FIX_REPORT.md
?? docs/TAX_REPORT_TABLE_HEADER_CONTRAST_REPORT.md
?? docs/TAX_REPORT_TABLE_HEADER_FINAL_VISUAL_FIX_REPORT.md
?? docs/TAX_REPORT_UI_DATE_INPUT_VERIFY_REPORT.md
?? docs/URL_VALUE_DISCOVERY_REPORT.md
?? docs/URL_VALUE_SEARCH_HITS.csv
?? docs/WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
?? docs/WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
?? docs/WEBSITE_PANEL_FIREBASE_AND_PLACEHOLDER_IMAGE_RUNTIME_PATCH_REPORT.md
?? docs/WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_ENDPOINT_HITS.csv
?? docs/WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_REPORT.md
?? docs/WEBSITE_PANEL_PUBLIC_VENDOR_ASSET_RESTORE_REPORT.md
?? docs/WEBSITE_SETTINGS_FIELD_HITS.csv
?? docs/WEBSITE_SETTINGS_FIELD_MAPPING_REPORT.md
?? docs/WEBSITE_SETTINGS_GIT_STATUS.txt
?? docs/WEBSITE_STORE_URL_USAGE_HITS.csv
?? docs/WEB_PANEL_CORE_COLLECTION_USAGE_MAP.md
?? docs/_bb_tmp_candidates_full.ps1
?? docs/_bb_tmp_delete_user_flow_excerpt_audit.ps1
?? docs/_bb_tmp_final_copy_confirmed_roots.ps1
?? docs/_bb_tmp_find_url_values.ps1
?? docs/_bb_tmp_global_blade_excerpt_audit.ps1
?? docs/_bb_tmp_pwsh_wrapper.ps1
?? docs/_bb_tmp_quick_receiver_search.ps1
?? docs/_bb_tmp_quick_receiver_search_exec.ps1
?? docs/_bb_tmp_quick_receiver_search_findings.txt
?? docs/_bb_tmp_recover_extract_store_website.ps1
?? docs/_bb_tmp_recovery_extract_status.ps1
?? docs/_bb_tmp_robocopy_final_sync.ps1
?? docs/_bb_tmp_website_settings_audit_final.ps1
?? docs/_bb_tmp_website_settings_field_hits.ps1
?? docs/_bb_tmp_website_store_url_usage_hits.ps1
?? docs/firebase-functions-list-live.json
?? docs/firebase-functions-reconstruction-draft/

```

## Pattern Hit Summary


## Route Search

### ROUTE FILE: C:\deploy\adminpanel\routes\web.php
```php
9: | routes are loaded by the RouteServiceProvider within a group which
158: Route::middleware(['permission:section-service,section-service.list'])->group(function () {
159: Route::get('/section', [App\Http\Controllers\SectionController::class, 'index'])->name('section');
161: Route::middleware(['permission:section-service,section.service.edit'])->group(function () {
162: Route::get('/section/edit/{id}', [App\Http\Controllers\SectionController::class, 'edit'])->name('section.edit');
164: Route::middleware(['permission:section-service,section.service.save'])->group(function () {
165: Route::get('/section/create', [App\Http\Controllers\SectionController::class, 'create'])->name('section.create');
179: Route::middleware(['permission:parcel-categories,parcel.categories'])->group(function () {
180: Route::get('/parcelCategory', [App\Http\Controllers\ParcelController::class, 'index'])->name('parcelCategory');
182: Route::middleware(['permission:parcel-categories,parcel.categories.create'])->group(function () {
183: Route::get('/parcelCategory/create', [App\Http\Controllers\ParcelController::class, 'create'])->name('parcelCategory.create');
185: Route::middleware(['permission:parcel-categories,parcel.categories.edit'])->group(function () {
186: Route::get('/parcelCategory/edit/{id}', [App\Http\Controllers\ParcelController::class, 'edit'])->name('parcelCategory.edit');
189: Route::middleware(['permission:parcel-weight,parcel.weight'])->group(function () {
190: Route::get('/parcel_weight', [App\Http\Controllers\ParcelController::class, 'parcelWeight'])->name('parcel_weight');
193: Route::middleware(['permission:parcel-coupons,parcel.coupons'])->group(function () {
194: Route::get('/parcel_coupons', [App\Http\Controllers\ParcelController::class, 'parcelCoupons'])->name('parcel_coupons');
196: Route::middleware(['permission:parcel-coupons,parcel.coupons.edit'])->group(function () {
197: Route::get('/parcel_coupons/edit/{id}', [App\Http\Controllers\ParcelController::class, 'parcelCouponsEdit'])->name('parcel_coupons.edit');
199: Route::middleware(['permission:parcel-coupons,parcel.coupons.create'])->group(function () {
200: Route::get('/parcel_coupons/create', [App\Http\Controllers\ParcelController::class, 'parcelCouponsCreate'])->name('parcel_coupons.create');
203: Route::middleware(['permission:parcel-orders,parcel.orders'])->group(function () {
204: Route::get('/parcel_orders', [App\Http\Controllers\ParcelController::class, 'parcelOrders'])->name('parcel_orders');
206: Route::get('/parcel_orders/{id}', [App\Http\Controllers\ParcelController::class, 'parcelOrders'])->name('parcel_orders.driver');
207: Route::middleware(['permission:parcel-orders,parcel.orders.edit'])->group(function () {
208: Route::get('/parcel_orders/edit/{id}', [App\Http\Controllers\ParcelController::class, 'parcelOrderEdit'])->name('parcel_orders.edit');
297: Route::middleware(['permission:parcel-service-god-eye,parcel-service-map'])->group(function () {
298: Route::get('/map/parcel', [App\Http\Controllers\MapController::class, 'parcel'])->name('map.parcel');
300: Route::middleware(['permission:rental-plural-god-eye,rental-plural-map'])->group(function () {
301: Route::get('/map/rental', [App\Http\Controllers\MapController::class, 'rental'])->name('map.rental');
303: Route::middleware(['permission:cab-service-god-eye,cab-service-map'])->group(function () {
304: Route::get('/map/cab', [App\Http\Controllers\MapController::class, 'cab'])->name('map.cab');
365: Route::middleware(['permission:cab-promo,cab.promo'])->group(function () {
368: Route::middleware(['permission:cab-promo,cab.promo.create'])->group(function () {
371: Route::middleware(['permission:cab-promo,cab.promo.edit'])->group(function () {
402: Route::middleware(['permission:cab-vehicle-type,cab-vehicle-type'])->group(function () {
405: Route::middleware(['permission:cab-vehicle-type,cab-vehicle-type.create'])->group(function () {
408: Route::middleware(['permission:cab-vehicle-type,cab-vehicle-type.edit'])->group(function () {
453: Route::middleware(['permission:rental-vehicle-type,rental-vehicle-type'])->group(function () {
454: Route::get('rentalvehicleType', [App\Http\Controllers\SettingsController::class, 'rentalvehicleType'])->name('rentalvehicleType');
456: Route::middleware(['permission:rental-vehicle-type,rental-vehicle-type.edit'])->group(function () {
457: Route::get('rentalvehicleType/edit/{id}', [App\Http\Controllers\SettingsController::class, 'rentalvehicleTypeEdit'])->name('rentalvehicleType.edit');
459: Route::middleware(['permission:rental-vehicle-type,rental-vehicle-type.create'])->group(function () {
460: Route::get('rentalvehicleType/create', [App\Http\Controllers\SettingsController::class, 'rentalvehicleTypeCreate'])->name('rentalvehicleType.create');
535: Route::middleware(['permission:rental-discount,rental-discount'])->group(function () {
536: Route::get('/rentaldiscount', [App\Http\Controllers\SettingsController::class, 'rentalDiscount'])->name('rentaldiscount');
538: Route::middleware(['permission:rental-discount,rental-discount.edit'])->group(function () {
539: Route::get('/rentaldiscount/edit/{id}', [App\Http\Controllers\SettingsController::class, 'rentalDiscountEdit'])->name('rentaldiscount.edit');
541: Route::middleware(['permission:rental-discount,rental-discount.create'])->group(function () {
542: Route::get('/rentaldiscount/create', [App\Http\Controllers\SettingsController::class, 'rentalDiscountCreate'])->name('rentaldiscount.create');
545: Route::middleware(['permission:rental-package,rental-package'])->group(function () {
546: Route::get('rental-package', [App\Http\Controllers\RentalController::class, 'rentalPackage'])->name('rental-package');
548: Route::middleware(['permission:rental-package,rental-package.create'])->group(function () {
549: Route::get('rental-package/create', [App\Http\Controllers\RentalController::class, 'rentalPackageCreate'])->name('rental-package.create');
551: Route::middleware(['permission:rental-package,rental-package.edit'])->group(function () {
552: Route::get('rental-package/edit/{id}', [App\Http\Controllers\RentalController::class, 'rentalPackageEdit'])->name('rental-package.edit');
555: Route::middleware(['permission:rental-orders,rental-orders'])->group(function () {
556: Route::get('/rental_orders', [App\Http\Controllers\RentalController::class, 'rentalOrders'])->name('rental_orders');
558: Route::get('/rental_orders/{id}', [App\Http\Controllers\RentalController::class, 'rentalOrders'])->name('rental_orders.driver');
559: Route::middleware(['permission:rental-orders,rental-orders.edit'])->group(function () {
560: Route::get('/rental_orders/edit/{id}', [App\Http\Controllers\RentalController::class, 'rentalOrderEdit'])->name('rental_orders.edit');
563: Route::middleware(['permission:rental-vehicle,rental-vehicle'])->group(function () {
564: Route::get('rentalvehicle', [App\Http\Controllers\SettingsController::class, 'rentalvehicle'])->name('rentalvehicle');
566: Route::middleware(['permission:rental-vehicle,rental-vehicle.view'])->group(function () {
567: Route::get('/rentalvehicle/view/{id}', [App\Http\Controllers\SettingsController::class, 'rentalVehicleView'])->name('drivers.vehicle');
664: Route::middleware(['permission:ondemand-categories,ondemand.categories'])->group(function () {
665: Route::get('/ondemand-categories', [App\Http\Controllers\OnDemandServiceController::class, 'Category'])->name('ondemandcategory');
667: Route::middleware(['permission:ondemand-categories,ondemand.categories.create'])->group(function () {
668: Route::get('/ondemand-categories/create', [App\Http\Controllers\OnDemandServiceController::class, 'CategoryCreate'])->name('ondemandcategory.create');
670: Route::middleware(['permission:ondemand-categories,ondemand.categories.edit'])->group(function () {
671: Route::get('/ondemand-categories/edit/{id}', [App\Http\Controllers\OnDemandServiceController::class, 'CategoryEdit'])->name('ondemandcategory.edit');
687: Route::middleware(['permission:ondemand-coupons,ondemand.coupons'])->group(function () {
688: Route::get('/ondemand-coupons/{id?}', [App\Http\Controllers\OnDemandServiceController::class, 'Coupons'])->name('ondemand.coupons');
690: Route::middleware(['permission:ondemand-coupons,ondemand.coupons.create'])->group(function () {
691: Route::get('/ondemand-coupon/create', [App\Http\Controllers\OnDemandServiceController::class, 'CouponCreate'])->name('ondemand.coupons.create');
693: Route::middleware(['permission:ondemand-coupons,ondemand.coupons.edit'])->group(function () {
694: Route::get('/ondemand-coupons/edit/{id}', [App\Http\Controllers\OnDemandServiceController::class, 'CouponEdit'])->name('ondemand.coupons.edit');
696: Route::middleware(['permission:ondemand-services,ondemand.services.index'])->group(function () {
697: Route::get('/ondemand-services/{id?}', [App\Http\Controllers\OnDemandServiceController::class, 'Services'])->name('ondemand.services.index');
699: Route::middleware(['permission:ondemand-services,ondemand.services.create'])->group(function () {
700: Route::get('/ondemand-service/create', [App\Http\Controllers\OnDemandServiceController::class, 'ServicesCreate'])->name('ondemand.services.create');
702: Route::middleware(['permission:ondemand-services,ondemand.services.edit'])->group(function () {
703: Route::get('/ondemand-services/edit/{id}', [App\Http\Controllers\OnDemandServiceController::class, 'ServicesEdit'])->name('ondemand.services.edit');
705: Route::middleware(['permission:ondemand-bookings,ondemand.bookings.index'])->group(function () {
706: Route::get('/ondemand-bookings/{id?}', [App\Http\Controllers\OnDemandServiceController::class, 'Bookings'])->name('ondemand.bookings.index');
708: Route::middleware(['permission:ondemand-bookings,ondemand.bookings.edit'])->group(function () {
709: Route::get('/ondemand-bookings/edit/{id}', [App\Http\Controllers\OnDemandServiceController::class, 'BookingsEdit'])->name('ondemand.bookings.edit');
711: Route::middleware(['permission:ondemand-bookings,ondemand.bookings.print'])->group(function () {
712: Route::get('/ondemand-bookings/print/{id}', [App\Http\Controllers\OnDemandServiceController::class, 'BookingsPrint'])->name('ondemand.bookings.print');
714: Route::middleware(['permission:ondemand-workers,ondemand.workers.index'])->group(function () {
715: Route::get('/ondemand-workers/{id?}', [App\Http\Controllers\OnDemandServiceController::class, 'Workers'])->name('ondemand.workers.index');
717: Route::middleware(['permission:ondemand-workers,ondemand.workers.create'])->group(function () {
718: Route::get('/ondemand-worker/create', [App\Http\Controllers\OnDemandServiceController::class, 'WorkersCreate'])->name('ondemand.workers.create');
720: Route::middleware(['permission:ondemand-workers,ondemand.workers.edit'])->group(function () {
721: Route::get('/ondemand-worker/edit/{id}', [App\Http\Controllers\OnDemandServiceController::class, 'WorkersEdit'])->name('ondemand.workers.edit');
750: Route::post('store-firebase-service', [App\Http\Controllers\HomeController::class,'storeFirebaseService'])->name('store-firebase-service');
857: Route::get('owner/rentalorders/{id}', [App\Http\Controllers\RentalController::class, 'rentalOrdersOwner'])->name('rental.orders.owner');
861: Route::get('owner/parcelorders/{id}', [App\Http\Controllers\ParcelController::class, 'parcelOrdersOwners'])->name('parcel_orders.owner');
915: Route::middleware(['permission:ondemand-workers,ondemand.workers.chat'])->group(function () {
916: Route::get('/worker/chat/{id}', [App\Http\Controllers\OnDemandServiceController::class, 'workerChat'])->name('ondemand.workers.chat');
```

### ROUTE FILE: C:\deploy\adminpanel\routes\api.php
```php
12: | routes are loaded by the RouteServiceProvider within a group which
```

## Important Admin Source Context

## Candidate Admin Files For Service/Section Management

```text
```

## Blade Form Field Audit

```text
C:\deploy\adminpanel\resources\views\admin_users\create.blade.php:39: <input type="text" class=" col-6 form-control" name="name">
C:\deploy\adminpanel\resources\views\admin_users\create.blade.php:48: <input type="password" class=" col-6 form-control" name="password">
C:\deploy\adminpanel\resources\views\admin_users\create.blade.php:57: <input type="password" class=" col-6 form-control" name="confirm_password">
C:\deploy\adminpanel\resources\views\admin_users\create.blade.php:66: <input type="text" class=" col-6 form-control" name="email">
C:\deploy\adminpanel\resources\views\admin_users\create.blade.php:76: <select class=" col-6 form-control" name="role">
C:\deploy\adminpanel\resources\views\admin_users\edit.blade.php:39: <input type="text" class=" col-6 form-control" name="name"
C:\deploy\adminpanel\resources\views\admin_users\edit.blade.php:49: <input type="password" class=" col-6 form-control" name="old_password">
C:\deploy\adminpanel\resources\views\admin_users\edit.blade.php:58: <input type="password" class=" col-6 form-control" name="password">
C:\deploy\adminpanel\resources\views\admin_users\edit.blade.php:67: <input type="password" class=" col-6 form-control" name="confirm_password">
C:\deploy\adminpanel\resources\views\admin_users\edit.blade.php:77: value="<?php echo $user->email; ?>" name="email">
C:\deploy\adminpanel\resources\views\admin_users\edit.blade.php:87: <select class=" col-6 form-control" name="role" >
C:\deploy\adminpanel\resources\views\admin_users\index.blade.php:38: <div class="card border">
C:\deploy\adminpanel\resources\views\admin_users\index.blade.php:39: <div class="card-header d-flex justify-content-between align-items-center border-0">
C:\deploy\adminpanel\resources\views\admin_users\index.blade.php:53: class="display nowrap table table-hover table-striped table-bordered table table-striped"
C:\deploy\adminpanel\resources\views\admin_users\index.blade.php:132: order: [],
C:\deploy\adminpanel\resources\views\admin_users\index.blade.php:134: { orderable: false, targets: (checkDeletePermission==true) ? [0, 4] : [3] },
C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:93: var threadRef = database.collection('chat_admin').doc(id).collection("thread").orderBy("createdAt");
C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:121: messageContent = `<a href="${data.url.url}" target="_blank" rel="noopener"><img src="${data.url.url}" alt="Image" style="max-width: 100px; border-radius: 8px;" /></a>`;
C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:123: messageContent = `<video controls style="max-width: 150px; border-radius: 8px;">
C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:161: orderId: id,
C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:188: orderId: id,
C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:248: orderId: id,
C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:289: orderId: id,
C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:105: <input type="checkbox" id="review" name="review" value="review"
C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:111: <input type="checkbox" id="rating" name="rating" value="rating"
C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:267: refVendor.where('section_id', '==', section_id).orderBy('title', 'asc').get().then(async function(snapshots) {
C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:92: <input type="checkbox" id="review" name="review" value="review">
C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:96: <input type="checkbox" id="rating" name="rating" value="rating">
C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:303: refVendor.where('section_id', '==', section_id).orderBy('title', 'asc').get().then(async function(snapshots) {
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:50: <a href="{{ route('vendors.orders', $id) }}"><i class="ri-shopping-bag-line"></i>{{ trans('lang.tab_orders') }}</a>
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:99: <div class="card border">
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:100: <div class="card-header d-flex justify-content-between align-items-center border-0">
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:117: <table id="advertisementTable" class="display nowrap table table-hover table-striped table-bordered table table-striped" cellspacing="0" width="100%">
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:170: <input type="text" placeholder="{{ trans('lang.your_note_here') }}" name="pause_reason" class="form-control" id="pause_reason">
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:288: const orderColumnIndex = data.order[0].column;
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:289: const orderDirection = data.order[0].dir;
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:291: const orderableColumns = (checkDeletePermission) ? ['', 'title', 'type', 'duration', 'status', 'priority', ''] : ['title', 'type', 'duration', 'status', 'priority']; // Ensure this matches the actual column names
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:293: const orderableColumns = (checkDeletePermission) ? ['', 'title', 'rest_info', 'type', 'duration', 'status', 'priority', ''] : ['title', 'rest_info', 'type', 'duration', 'status', 'priority']; // Ensure this matches the actual column names
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:295: const orderByField = orderableColumns[orderColumnIndex]; // Adjust the index to match your table
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:371: let aValue = a[orderByField] ? a[orderByField].toString().toLowerCase() : '';
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:372: let bValue = b[orderByField] ? b[orderByField].toString().toLowerCase() : '';
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:374: if (orderByField === "rest_info") {
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:378: if (orderDirection === 'asc') {
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:412: order: (checkDeletePermission) ? [1, 'asc'] : [0, 'asc'],
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:414: orderable: false,
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:466: html.push(`<td><img src="${val.vendorImage}" style="width:50px; height:50px; border-radius:50%;" onerror="this.onerror=null;this.src=\''+placeholderImage+'\'"><span>${val.vendorTitle} <br> ${val.vendorEmail}</td></span>`);
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:468: html.push(`<td><img src="${placeholderImage}" style="width:50px; height:50px; border-radius:50%;" onerror="this.onerror=null;this.src=\''+placeholderImage+'\'"><span>${val.vendorTitle} <br> ${val.vendorEmail}</td></span>`);
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:507: '" class="do_not_delete" name="advertisements-delete" href="javascript:void(0)" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.delete') }}"><i class="mdi mdi-delete"></i></a><?php } ?>';
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:509: '"  name="advertisements-copy" href="javascript:void(0)"><i class="fa fa-copy"></i></a>';
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:519: action = action + '<a href="javascript:void(0)" name="pause-btn" id="' + val.id + '" data-status="' + val.isPaused + '"  data-bs-toggle="tooltip" data-bs-placement="top" title="' + tooltipTxt + '"><i class="' + actionClass + '"></i></a>'
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:574: $(document).on("click", "a[name='advertisements-delete']", async function(e) {
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:615: $(document).on("click", "a[name='pause-btn']", async function(e) {
C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:658: $(document).on('click', 'a[name="advertisements-copy"]', async function() {
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:38: <div class="card border">
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:39: <div class="card-header d-flex justify-content-between align-items-center border-0">
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:63: <table id="newRequestTable" class="display nowrap table table-hover table-striped table-bordered table table-striped" cellspacing="0" width="100%">
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:80: <table id="updateRequestTable" class="display nowrap table table-hover table-striped table-bordered table table-striped" cellspacing="0" width="100%">
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:97: <table id="canceledRequestTable" class="display nowrap table table-hover table-striped table-bordered table table-striped" cellspacing="0" width="100%">
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:189: const orderColumnIndex = data.order[0].column;
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:190: const orderDirection = data.order[0].dir;
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:191: const orderableColumns = (checkDeletePermission) ? ['', 'title', 'rest_info', 'type', 'duration', ''] : ['title', 'rest_info', 'type', 'duration', '']; // Ensure this matches the actual column names
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:192: const orderByField = orderableColumns[orderColumnIndex];
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:244: let aValue = a[orderByField] ? a[orderByField].toString().toLowerCase().trim() : '';
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:245: let bValue = b[orderByField] ? b[orderByField].toString().toLowerCase().trim() : '';
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:246: if (orderByField === "rest_info") {
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:250: if (orderDirection === 'asc') {
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:288: `<td><img src="${vendorImage}" style="width:50px; height:50px; border-radius:50%;" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'">
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:295: '<span class="action-btn"><a href="'+chatRoute+'"><i class="fa fa-commenting" data-toggle="tooltip" data-bs-original-title="Chat"></i></a><a href="' + advertisementsView + '" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.view') }}"><i class="mdi mdi-eye"></i></a><a href="' + route1 + '"><i class="mdi mdi-lead-pencil" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.edit') }}"></i></a><?php if(in_array('category.delete', json_decode(@session('user_permissions'),true))){ ?> <a id="' + childData.id + '" name="advertisements-delete" class="delete-btn" href="javascript:void(0)"><i class="mdi mdi-delete"></i></a><?php } ?></span>'
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:317: order: (checkDeletePermission) ? [1, 'asc'] : [0, 'asc'],
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:319: orderable: false,
C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:452: $(document).on("click", "a[name='advertisements-delete']", async function(e) {
C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:23: <div class="order_detail" id="order_detail">
C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:24: <div class="order_detail-top">
C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:26: <div class="order_edit-genrl col-lg-7 col-md-12">
C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:32: <div class="order_detail-top-box">
C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:99: <div class="address order_detail-top-box">
C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:127: <div class="order_addre-edit col-lg-5 col-md-12">
C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:129: <div class="order_addre-edit driver_details_hide">
C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:135: <div class="address order_detail-top-box">
C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:140: <label class="switch"> <input type="checkbox" name="update_pay_status" id="update_pay_status"><span class="slider round"></span></label>
C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:248: <input type="text" placeholder="{{ trans('lang.your_note_here') }}" name="cancel_reason" class="form-control" id="cancel_reason">
C:\deploy\adminpanel\resources\views\attributes\index.blade.php:37: <div class="card border">
C:\deploy\adminpanel\resources\views\attributes\index.blade.php:38: <div class="card-header d-flex justify-content-between align-items-center border-0">
C:\deploy\adminpanel\resources\views\attributes\index.blade.php:52: class="display nowrap table table-hover table-striped table-bordered table table-striped"
C:\deploy\adminpanel\resources\views\attributes\index.blade.php:127: order: [],
C:\deploy\adminpanel\resources\views\attributes\index.blade.php:136: orderable: false,
C:\deploy\adminpanel\resources\views\attributes\index.blade.php:140: order: [0, "asc"],
C:\deploy\adminpanel\resources\views\attributes\index.blade.php:157: val.isActive = result[0].isActive;
C:\deploy\adminpanel\resources\views\attributes\index.blade.php:161: val.isActive = false;
C:\deploy\adminpanel\resources\views\attributes\index.blade.php:182: html=html+'<a id="' + val.id + '" name="attribute-delete" class="delete-btn" href="javascript:void(0)" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.delete') }}"><i class="mdi mdi-delete"></i></a>';
C:\deploy\adminpanel\resources\views\attributes\index.blade.php:192: $(document).on("click", "a[name='attribute-delete']", function(e) {
C:\deploy\adminpanel\resources\views\auth\passwords\confirm.blade.php:20: <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
C:\deploy\adminpanel\resources\views\auth\passwords\email.blade.php:24: <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
C:\deploy\adminpanel\resources\views\auth\passwords\reset.blade.php:14: <input type="hidden" name="token" value="{{ $token }}">
C:\deploy\adminpanel\resources\views\auth\passwords\reset.blade.php:20: <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
C:\deploy\adminpanel\resources\views\auth\passwords\reset.blade.php:34: <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
C:\deploy\adminpanel\resources\views\auth\passwords\reset.blade.php:48: <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
C:\deploy\adminpanel\resources\views\auth\login.blade.php:6: <meta name="viewport" content="width=device-width, initial-scale=1">
C:\deploy\adminpanel\resources\views\auth\login.blade.php:7: <meta name="csrf-token" content="{{ csrf_token() }}">
C:\deploy\adminpanel\resources\views\auth\login.blade.php:21: --mtx-border: rgba(69, 182, 255, 0.26);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:22: --mtx-border-strong: rgba(73, 205, 255, 0.45);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:32: box-sizing: border-box;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:83: border: 1px solid rgba(73, 205, 255, 0.22);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:84: border-radius: 34px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:137: border-radius: 24px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:160: border-radius: 18px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:161: border: 1px solid rgba(255, 255, 255, 0.22);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:185: border-radius: 999px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:186: border: 1px solid rgba(73, 205, 255, 0.26);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:199: border-radius: 999px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:235: border-radius: 24px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:237: border: 1px solid rgba(93, 206, 255, 0.18);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:275: border-radius: 14px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:277: border: 1px solid rgba(65, 201, 255, 0.32);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:354: border-radius: 999px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:373: border: 2px solid rgba(86, 220, 255, 0.44);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:410: border-radius: 28px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:411: border: 1px solid rgba(73, 205, 255, 0.18);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:419: border-radius: 20px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:420: border: 1px solid rgba(73, 205, 255, 0.12);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:427: border-radius: 16px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:434: border: 1px solid rgba(73, 205, 255, 0.22);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:476: border-radius: 30px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:477: border: 1px solid var(--mtx-border);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:495: border-radius: 20px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:534: border-radius: 16px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:535: border: 1px solid rgba(255, 104, 104, 0.32);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:569: border-radius: 16px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:570: border: 1px solid rgba(74, 174, 255, 0.22);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:575: transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:584: border-color: var(--mtx-border-strong);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:594: border: 0;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:641: border: 0;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:642: border-radius: 18px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:663: border-radius: 20px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:664: border: 1px solid rgba(68, 177, 255, 0.18);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:675: border-radius: 18px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:680: border: 1px solid rgba(73, 205, 255, 0.22);
C:\deploy\adminpanel\resources\views\auth\login.blade.php:726: border-radius: 28px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:795: border-radius: 26px;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:915: <input id="email" type="email" name="email"
C:\deploy\adminpanel\resources\views\auth\login.blade.php:929: <input id="password" type="password" name="password"
C:\deploy\adminpanel\resources\views\auth\login.blade.php:944: <input type="checkbox" name="remember" id="remember"
C:\deploy\adminpanel\resources\views\auth\login.blade.php:989: database.collection('sections').where('isActive', '==', true).orderBy('order').get().then(async function(snapshots) {
C:\deploy\adminpanel\resources\views\auth\login.blade.php:992: const firstServiceType = firstSection.serviceTypeFlag;
C:\deploy\adminpanel\resources\views\auth\login.blade.php:994: setCookie('service_type', firstServiceType, 1);
C:\deploy\adminpanel\resources\views\auth\register.blade.php:18: <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
C:\deploy\adminpanel\resources\views\auth\register.blade.php:32: <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
C:\deploy\adminpanel\resources\views\auth\register.blade.php:46: <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
C:\deploy\adminpanel\resources\views\auth\register.blade.php:60: <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
C:\deploy\adminpanel\resources\views\banners\create.blade.php:58: <label class="col-3 control-label">{{trans('lang.set_order')}}</label>
C:\deploy\adminpanel\resources\views\banners\create.blade.php:62: <input type="number" class="form-control set_order" min="0">
C:\deploy\adminpanel\resources\views\banners\create.blade.php:72: <select name="section_id" id="section_id" class="form-control">
C:\deploy\adminpanel\resources\views\banners\create.blade.php:85: <select name="position" id="position" class="form-control">
C:\deploy\adminpanel\resources\views\banners\create.blade.php:95: <input type="radio" class="redirect_type" value="store" name="redirect_type" id="store">
C:\deploy\adminpanel\resources\views\banners\create.blade.php:100: <input type="radio" class="redirect_type" value="product" name="redirect_type" id="product">
C:\deploy\adminpanel\resources\views\banners\create.blade.php:106: <input type="radio" class="redirect_type" value="external_link" name="redirect_type" id="external">
C:\deploy\adminpanel\resources\views\banners\create.blade.php:115: <select name="storeId" id="storeId" class="form-control">
C:\deploy\adminpanel\resources\views\banners\create.blade.php:124: <select name="productId" id="productId" class="form-control">
C:\deploy\adminpanel\resources\views\banners\create.blade.php:205: var webFileName="";
C:\deploy\adminpanel\resources\views\banners\create.blade.php:208: var ref_sections = database.collection('sections').orderBy('order');
C:\deploy\adminpanel\resources\views\banners\create.blade.php:220: if (data.serviceTypeFlag == "delivery-service") {
C:\deploy\adminpanel\resources\views\banners\create.blade.php:224: .attr("value", data.id).attr("data-service-type", data.serviceTypeFlag)
C:\deploy\adminpanel\resources\views\banners\create.blade.php:234: if (data.serviceTypeFlag == "ecommerce-service") {
C:\deploy\adminpanel\resources\views\banners\create.blade.php:238: .attr("value", data.id).attr("data-service-type", data.serviceTypeFlag)
C:\deploy\adminpanel\resources\views\banners\create.blade.php:246: if (data.serviceTypeFlag == "parcel_delivery") {
C:\deploy\adminpanel\resources\views\banners\create.blade.php:249: .attr("value", data.id).attr("data-service-type", data.serviceTypeFlag)
C:\deploy\adminpanel\resources\views\banners\create.blade.php:257: if (data.serviceTypeFlag == "cab-service") {
C:\deploy\adminpanel\resources\views\banners\create.blade.php:260: .attr("value", data.id).attr("data-service-type", data.serviceTypeFlag)
C:\deploy\adminpanel\resources\views\banners\create.blade.php:268: if (data.serviceTypeFlag == "ondemand-service") {
C:\deploy\adminpanel\resources\views\banners\create.blade.php:272: .attr("value", data.id).attr("data-service-type", data.serviceTypeFlag)
C:\deploy\adminpanel\resources\views\banners\create.blade.php:282: $("input[name='redirect_type']:radio").change(function () {
C:\deploy\adminpanel\resources\views\banners\create.blade.php:351: var docName=val.split('fakepath')[1];
C:\deploy\adminpanel\resources\views\banners\create.blade.php:352: var filename=(f.name).replace(/C:\\fakepath\\/i,'')
C:\deploy\adminpanel\resources\views\banners\create.blade.php:354: var filename=filename.split('.')[0]+"_"+timestamp+'.'+ext;
C:\deploy\adminpanel\resources\views\banners\create.blade.php:356: fileName=filename;
C:\deploy\adminpanel\resources\views\banners\create.blade.php:372: var docName=val.split('fakepath')[1];
C:\deploy\adminpanel\resources\views\banners\create.blade.php:373: var filename=(f.name).replace(/C:\\fakepath\\/i,'')
C:\deploy\adminpanel\resources\views\banners\create.blade.php:375: var filename=filename.split('.')[0]+"_"+timestamp+'.'+ext;
C:\deploy\adminpanel\resources\views\banners\create.blade.php:377: webFileName=filename;
C:\deploy\adminpanel\resources\views\banners\create.blade.php:423: var set_order = parseInt($('.set_order').val());
C:\deploy\adminpanel\resources\views\banners\create.blade.php:476: } else if (isNaN(set_order)) {
C:\deploy\adminpanel\resources\views\banners\create.blade.php:479: $(".error_top").append("<p>{{trans('lang.set_order_error')}}</p>");
C:\deploy\adminpanel\resources\views\banners\create.blade.php:526: 'set_order': set_order,
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:62: <label class="col-3 control-label">{{trans('lang.set_order')}}</label>
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:66: <input type="number" class="form-control set_order" min="0">
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:76: <select name="section_id" id="section_id" class="form-control">
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:87: <select name="position" id="position" class="form-control">
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:97: <input type="radio" class="redirect_type" value="store" name="redirect_type" id="store">
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:102: <input type="radio" class="redirect_type" value="product" name="redirect_type" id="product">
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:108: <input type="radio" class="redirect_type" value="external_link" name="redirect_type">
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:117: <select name="storeId" id="storeId" class="form-control">
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:126: <select name="productId" id="productId" class="form-control">
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:209: var webFileName="";
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:219: var ref_sections = database.collection('sections').orderBy('order');
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:236: if (data.serviceTypeFlag == "delivery-service") {
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:239: .attr("value", data.id).attr("data-service-type", data.serviceTypeFlag)
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:247: if (data.serviceTypeFlag == "ecommerce-service") {
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:250: .attr("value", data.id).attr("data-service-type", data.serviceTypeFlag)
C:\deploy\adminpanel\resources\views\banners\edit.blade.php:258: if (data.serviceTypeFlag == "parcel_delivery") {
```

## Controller / Firestore Write Audit

```text
C:\deploy\adminpanel\app\Console\Commands\MultivendorOrderAutoCancel.php:7: class MultivendorOrderAutoCancel extends Command
C:\deploy\adminpanel\app\Console\Commands\MultivendorOrderAutoCancel.php:14: protected $signature = 'app:multivendor-order-auto-cancel';
C:\deploy\adminpanel\app\Console\Commands\MultivendorOrderAutoCancel.php:21: protected $description = 'Executes the multivendorOrderAutoCancel.js file';
C:\deploy\adminpanel\app\Console\Commands\MultivendorOrderAutoCancel.php:33: $command = $node_path . ' --no-experimental-fetch --max-old-space-size=1024 ' . storage_path('app/firebase/multivendorOrderAutoCancel.js');
C:\deploy\adminpanel\app\Console\Commands\MultivendorOrderAutoCancel.php:37: \Log::info('Multivendor Order Auto Cancel Output: ' . $output);
C:\deploy\adminpanel\app\Console\Commands\MultivendorOrderAutoCancel.php:39: $this->info('Multivendor Order Auto Cancel process executed.');
C:\deploy\adminpanel\app\Console\Commands\MultivendorOrderAutoCancel.php:43: \Log::info('Multivendor Order Auto Cancel Output: Node path is not defined');
C:\deploy\adminpanel\app\Console\Commands\MultivendorScheduledOrderNotification.php:7: class MultivendorScheduledOrderNotification extends Command
C:\deploy\adminpanel\app\Console\Commands\MultivendorScheduledOrderNotification.php:14: protected $signature = 'app:multivendor-scheduled-order-notification';
C:\deploy\adminpanel\app\Console\Commands\MultivendorScheduledOrderNotification.php:21: protected $description = 'Executes the multivendorScheduledOrderNotification.js file';
C:\deploy\adminpanel\app\Console\Commands\MultivendorScheduledOrderNotification.php:33: $command = $node_path . ' --no-experimental-fetch --max-old-space-size=1024 ' . storage_path('app/firebase/multivendorScheduledOrderNotification.js');
C:\deploy\adminpanel\app\Console\Commands\MultivendorScheduledOrderNotification.php:37: \Log::info('Multivendor Scheduled Order Notification Output: ' . $output);
C:\deploy\adminpanel\app\Console\Commands\MultivendorScheduledOrderNotification.php:39: $this->info('Multivendor Scheduled Order Notification Process executed.');
C:\deploy\adminpanel\app\Console\Commands\MultivendorScheduledOrderNotification.php:43: \Log::info('Multivendor Scheduled Order Notification Output: Node path is not defined');
C:\deploy\adminpanel\app\Console\Commands\OndemandOrderAutoCancel.php:7: class OndemandOrderAutoCancel extends Command
C:\deploy\adminpanel\app\Console\Commands\OndemandOrderAutoCancel.php:14: protected $signature = 'app:ondemand-order-auto-cancel';
C:\deploy\adminpanel\app\Console\Commands\OndemandOrderAutoCancel.php:21: protected $description = 'Executes the onDemandOrderAutoCancel.js file';
C:\deploy\adminpanel\app\Console\Commands\OndemandOrderAutoCancel.php:33: $command = $node_path.' '.storage_path('app/firebase/onDemandOrderAutoCancel.js');
C:\deploy\adminpanel\app\Console\Commands\OndemandOrderAutoCancel.php:38: \Log::info('On demand Order AutoCancel Output: ' . $output);
C:\deploy\adminpanel\app\Console\Commands\OndemandOrderAutoCancel.php:40: $this->info('On demand Order AutoCancel process executed.');
C:\deploy\adminpanel\app\Console\Commands\OndemandOrderAutoCancel.php:45: \Log::info('On demand Order AutoCancel Output: Node path is not defined');
C:\deploy\adminpanel\app\Console\Commands\ParcelOrderAutoCancel.php:7: class ParcelOrderAutoCancel extends Command
C:\deploy\adminpanel\app\Console\Commands\ParcelOrderAutoCancel.php:14: protected $signature = 'app:parcel-order-auto-cancel';
C:\deploy\adminpanel\app\Console\Commands\ParcelOrderAutoCancel.php:21: protected $description = 'Executes the parcelOrderAutoCancel.js file to cancel parcel orders';
C:\deploy\adminpanel\app\Console\Commands\ParcelOrderAutoCancel.php:33: $command = $node_path . ' --no-experimental-fetch --max-old-space-size=1024 ' . storage_path('app/firebase/parcelOrderAutoCancel.js');
C:\deploy\adminpanel\app\Console\Commands\ParcelOrderAutoCancel.php:37: \Log::info('Parcel Order Auto Cancel Output: ' . $output);
C:\deploy\adminpanel\app\Console\Commands\ParcelOrderAutoCancel.php:39: $this->info('Parcel Order Auto Cancel process executed.');
C:\deploy\adminpanel\app\Console\Commands\ParcelOrderAutoCancel.php:43: \Log::info('Parcel Order Auto Cancel Output: Node path is not defined');
C:\deploy\adminpanel\app\Console\Commands\RentalOrderAutoCancel.php:7: class RentalOrderAutoCancel extends Command
C:\deploy\adminpanel\app\Console\Commands\RentalOrderAutoCancel.php:14: protected $signature = 'app:rental-order-auto-cancel';
C:\deploy\adminpanel\app\Console\Commands\RentalOrderAutoCancel.php:21: protected $description = 'Executes the rentalOrderAutoCancel.js file to cancel rental orders';
C:\deploy\adminpanel\app\Console\Commands\RentalOrderAutoCancel.php:33: $command = $node_path . ' --no-experimental-fetch --max-old-space-size=1024 ' . storage_path('app/firebase/rentalOrderAutoCancel.js');
C:\deploy\adminpanel\app\Console\Commands\RentalOrderAutoCancel.php:37: \Log::info('Rental Order Auto Cancel Output: ' . $output);
C:\deploy\adminpanel\app\Console\Commands\RentalOrderAutoCancel.php:39: $this->info('Rental Order Auto Cancel process executed.');
C:\deploy\adminpanel\app\Console\Commands\RentalOrderAutoCancel.php:43: \Log::info('Rental Order Auto Cancel Output: Node path is not defined');
C:\deploy\adminpanel\app\Console\Kernel.php:17: $schedule->command('app:multivendor-order-auto-cancel')->everyMinute();
C:\deploy\adminpanel\app\Console\Kernel.php:18: $schedule->command('app:multivendor-scheduled-order-notification')->everyMinute();
C:\deploy\adminpanel\app\Console\Kernel.php:19: $schedule->command('app:parcel-order-auto-cancel')->everyFiveMinutes();
C:\deploy\adminpanel\app\Console\Kernel.php:20: $schedule->command('app:rental-order-auto-cancel')->everyFiveMinutes();
C:\deploy\adminpanel\app\Console\Kernel.php:21: $schedule->command('app:ondemand-order-auto-cancel')->daily();
C:\deploy\adminpanel\app\Helpers\FirestoreHelper.php:7: class FirestoreHelper
C:\deploy\adminpanel\app\Helpers\FirestoreHelper.php:13: return "https://firestore.googleapis.com/v1/projects/{$projectId}/databases/{$projectDb}/documents";
C:\deploy\adminpanel\app\Helpers\FirestoreHelper.php:16: /** Convert Firestore REST fields → clean PHP array */
C:\deploy\adminpanel\app\Helpers\FirestoreHelper.php:58: /** Convert PHP array → Firestore REST fields */
C:\deploy\adminpanel\app\Helpers\FirestoreHelper.php:91: private static function getFirestoreValue($value)
C:\deploy\adminpanel\app\Helpers\FirestoreHelper.php:102: return ['arrayValue' => ['values' => array_map(fn($v) => self::getFirestoreValue($v), $value)]];
C:\deploy\adminpanel\app\Helpers\FirestoreHelper.php:144: // Detect Firestore-compatible value type
C:\deploy\adminpanel\app\Helpers\FirestoreHelper.php:145: $firestoreValue = self::getFirestoreValue($value);
C:\deploy\adminpanel\app\Helpers\FirestoreHelper.php:148: // Firestore operator mapping
C:\deploy\adminpanel\app\Helpers\FirestoreHelper.php:170: 'value' => $firestoreValue,
C:\deploy\adminpanel\app\Helpers\FirestoreHelper.php:179: logger()->error('Firestore query failed', [
C:\deploy\adminpanel\app\Http\Controllers\OrderController.php:9: class OrderController extends Controller
C:\deploy\adminpanel\app\Http\Controllers\OrderController.php:20: return view("orders.index")->with('id', $id)->with('service_type', $service_type);
C:\deploy\adminpanel\app\Http\Controllers\OrderController.php:25: return view('orders.edit')->with('id', $id)->with('oid', $oid);
C:\deploy\adminpanel\app\Http\Controllers\OrderController.php:30: return view('orders.edit')->with('oid', $oid)->with('id', $id);
C:\deploy\adminpanel\app\Http\Controllers\OrderController.php:108: public function orderprint($id = '')
C:\deploy\adminpanel\app\Http\Controllers\OrderController.php:110: return view('orders.print')->with('id', $id);
C:\deploy\adminpanel\app\Http\Controllers\OrderController.php:113: public function ownerOrderList($id = '')
C:\deploy\adminpanel\app\Http\Controllers\OrderController.php:115: return view("orders.owner_index")->with('id', $id);
C:\deploy\adminpanel\app\Http\Controllers\OrderReviewController.php:6: class OrderReviewController extends Controller
C:\deploy\adminpanel\app\Http\Controllers\OrderReviewController.php:17: return view("order_reviews.index")->with('id',$id);
C:\deploy\adminpanel\app\Http\Controllers\OrderReviewController.php:23: return view("order_reviews.create");
C:\deploy\adminpanel\app\Http\Controllers\OrderReviewController.php:29: return view("order_reviews.edit")->with('id',$id);
C:\deploy\adminpanel\app\Http\Controllers\ParcelController.php:48: public function parcelOrders($id = '')
C:\deploy\adminpanel\app\Http\Controllers\ParcelController.php:50: return view("parcel_orders.index")->with('id', $id);
C:\deploy\adminpanel\app\Http\Controllers\ParcelController.php:53: public function parcelOrderEdit($id)
C:\deploy\adminpanel\app\Http\Controllers\ParcelController.php:55: return view('parcel_orders.edit')->with('id', $id);
C:\deploy\adminpanel\app\Http\Controllers\ParcelController.php:58: public function parcelOrdersOwners($id = '')
C:\deploy\adminpanel\app\Http\Controllers\ParcelController.php:60: return view("parcel_orders.owner_index")->with('id', $id);
C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:21: $paytmParams["ORDERID"] = $input['order_id'];
C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:40: $paytmParams["ORDERID"] = $input['order_id'];
C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:47: $orderId=$input['order_id'];
C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:48: $body= array('mid'=>$mid,'orderId'=>$orderId);
C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:78: "orderId" => $inputs['order_id'],
C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:101: $url = "https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=".$inputs['mid']."&orderId=".$inputs['order_id'];
C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:104: $url = "https://securegw.paytm.in/theia/api/v1/initiateTransaction?mid=".$inputs['mid']."&orderId=".$inputs['order_id'];
C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:194: return view("order_transactions.index")->with('id',$id);
C:\deploy\adminpanel\app\Http\Controllers\POSController.php:18: public function posOrder(){
C:\deploy\adminpanel\app\Http\Controllers\POSController.php:19: return view("pos.order_index");
C:\deploy\adminpanel\app\Http\Controllers\ProductController.php:102: $cart['taxSetting'] = $cart['taxScope'] == "order" ? $cart['taxesByScope']['order'] : [];
C:\deploy\adminpanel\app\Http\Controllers\ProductController.php:241: 'order' => [],
C:\deploy\adminpanel\app\Http\Controllers\ProductController.php:313: // ORDER-LEVEL TAX
C:\deploy\adminpanel\app\Http\Controllers\ProductController.php:314: if ($cart['taxScope'] === 'order') {
C:\deploy\adminpanel\app\Http\Controllers\ProductController.php:315: /*$orderTaxable = max(0, $itemSubtotal - $totalDiscount);*/
C:\deploy\adminpanel\app\Http\Controllers\ProductController.php:316: $orderTaxable = max(0,($itemSubtotal + $adminCommissionTotal) - $totalDiscount);
C:\deploy\adminpanel\app\Http\Controllers\ProductController.php:317: foreach ($cart['taxesByScope']['order'] ?? [] as $tax) {
C:\deploy\adminpanel\app\Http\Controllers\ProductController.php:319: $taxAmount = $this->applyTax($orderTaxable, $tax);
C:\deploy\adminpanel\app\Http\Controllers\ProductController.php:321: $cart['taxBreakdownGrouped']['order'][$tax['title']] =
C:\deploy\adminpanel\app\Http\Controllers\ProductController.php:322: ($cart['taxBreakdownGrouped']['order'][$tax['title']] ?? 0) + $taxAmount;
C:\deploy\adminpanel\app\Http\Controllers\RazorPayController.php:17: public function createOrderid(Request $request)
C:\deploy\adminpanel\app\Http\Controllers\RazorPayController.php:30: $order  = $client->order->create([
C:\deploy\adminpanel\app\Http\Controllers\RazorPayController.php:36: $attributes = $this->getProtectedValue($order,'attributes');
C:\deploy\adminpanel\app\Http\Controllers\RentalController.php:13: public function rentalOrders($id = '')
C:\deploy\adminpanel\app\Http\Controllers\RentalController.php:15: return view("rental_orders.index")->with('id', $id);
C:\deploy\adminpanel\app\Http\Controllers\RentalController.php:18: public function rentalOrderEdit($id)
C:\deploy\adminpanel\app\Http\Controllers\RentalController.php:20: return view('rental_orders.edit')->with('id', $id);
C:\deploy\adminpanel\app\Http\Controllers\RentalController.php:37: public function rentalOrdersOwner($id = '')
C:\deploy\adminpanel\app\Http\Controllers\RentalController.php:39: return view("rental_orders.owner_index")->with('id', $id);
C:\deploy\adminpanel\app\Http\Controllers\RideController.php:45: $orderStatus = $request->orderStatus;
C:\deploy\adminpanel\app\Http\Controllers\RideController.php:47: if(Storage::disk('local')->has('firebase/credentials.json') && ($orderStatus == "Resolved" || $orderStatus == "Under Investigation")){
C:\deploy\adminpanel\app\Http\Controllers\RideController.php:66: 'title' => "Your Complaint has been ".$orderStatus,
C:\deploy\adminpanel\app\Http\Controllers\SettingsController.php:301: public function scheduleOrderNotification()
C:\deploy\adminpanel\app\Providers\AppServiceProvider.php:7: use App\Helpers\FirestoreHelper;
C:\deploy\adminpanel\app\Providers\AppServiceProvider.php:49: // Boot guard: if Firebase project id is missing/invalid, skip Firestore read.
C:\deploy\adminpanel\app\Providers\AppServiceProvider.php:52: $openai_settings = FirestoreHelper::getDocument('settings/openai_settings') ?? [];
C:\deploy\adminpanel\app\Providers\AppServiceProvider.php:54: // Boot must be resilient to cURL/SSL/Firestore errors.
```

## Quick Conclusion Template

- If ondemand-service is missing in admin forms/options, admin cannot create/show the new service properly.
- If admin has sections CRUD but options are old, Firebase remains old even though Customer APK supports newer service flags.
- If admin writes sections without platformFee/order, Customer Home can become blank or incomplete.

## Final Status

STATUS: WEB_ADMIN_SERVICE_AUTHORITY_AUDIT_FINISHED