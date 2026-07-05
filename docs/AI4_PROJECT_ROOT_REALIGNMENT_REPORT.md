# AI4-0021 PROJECT ROOT REALIGNMENT REPORT

## Mode
READ_ONLY_ROOT_REALIGNMENT

## Kesimpulan Awal
Project runtime nyata Website Panel berada di C:\deploy\adminpanel.
Git ecosystem/fresh clone hanya dipakai sebagai dokumentasi koordinasi, bukan root runtime utama.

## Lokasi Aktif
```text

Path                
----                
C:\deploy\adminpanel



```

## File Penting Website Panel
```text
```

## Route Website Panel
```text
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="refresh" content="0;url='http://localhost'" />

        <title>Redirecting to http://localhost</title>
    </head>
    <body>
        Redirecting to <a href="http://localhost">http://localhost</a>.
    </body>
</html><!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="refresh" content="0;url='http://localhost'" />

        <title>Redirecting to http://localhost</title>
    </head>
    <body>
        Redirecting to <a href="http://localhost">http://localhost</a>.
    </body>
</html>
  GET|HEAD       website-panel ................................................. website-panel.index ΓÇ║ WebsitePanelController@index
  GET|HEAD       website-panel/cms ................................................. website-panel.cms ΓÇ║ WebsitePanelController@cms
  GET|HEAD       website-panel/footer ........................................ website-panel.footer ΓÇ║ WebsitePanelController@footer
  GET|HEAD       website-panel/homepage .................................. website-panel.homepage ΓÇ║ WebsitePanelController@homepage
  GET|HEAD       website-panel/legacy-map ............................. website-panel.legacy-map ΓÇ║ WebsitePanelController@legacyMap
  GET|HEAD       website-panel/preview ..................................... website-panel.preview ΓÇ║ WebsitePanelController@preview

                                                                                                                 Showing [6] routes


```

## Git Status Runtime Project
```text
 M app/Providers/AppServiceProvider.php
 M resources/views/categories/create.blade.php
 M resources/views/categories/edit.blade.php
 M resources/views/items/create.blade.php
 M resources/views/items/edit.blade.php
 M resources/views/layouts/app.blade.php
 M resources/views/reports/tax-reports.blade.php
 M resources/views/vendors/create.blade.php
 M resources/views/vendors/edit.blade.php
 M routes/web.php
?? "Admin Panel.zip"
?? TODO.md
?? TODO_SERVICE_57D_VENDOR_APK_DEPENDENCY_COMPAT_PATCH.md
?? app/Http/Controllers/WebsitePanelController.php
?? docs/ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
?? docs/ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
?? docs/ADMIN_STORE_WEBSITE_SAFE_DELETE_USER_CONNECTION_TEST_FINAL_REPORT.md
?? docs/AI4_GIT_COMMIT_CANDIDATE_AUDIT.md
?? docs/AI4_GIT_STATUS_REPORT.md
?? docs/AI4_GIT_TO_BUKU_BESAR.ps1
?? docs/AI4_PROJECT_ROOT_REALIGNMENT_REPORT.md
?? docs/AI4_WEBSITE_PANEL_DIRECTION_MAP.md
?? docs/AI4_WEBSITE_PANEL_FINAL_VALIDATION_REPORT.md
?? docs/AI4_WEBSITE_PANEL_HOMEPAGE_REFINEMENT_REPORT.md
?? docs/AI4_WEBSITE_PANEL_PREVIEW_SOURCE_REFINEMENT_REPORT.md
?? docs/AI4_WEBSITE_PANEL_READ_ONLY_LEGACY_PREVIEW_REPORT.md
?? docs/AI4_WEBSITE_PANEL_READ_ONLY_PREVIEW_AUDIT.md
?? docs/AI4_WEBSITE_PANEL_ROUTE_HYGIENE_AUDIT.md
?? docs/AI4_WEBSITE_PANEL_SAFE_TOUCH_MAP.md
?? docs/AI4_WEBSITE_PANEL_SCAFFOLDING_REPORT.md
?? docs/AI4_WEB_APP_BASELINE_AUDIT_REPORT.md
?? docs/BUKU_BESAR_AI4_WEB_APP.md
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
?? docs/SECTION_ACTIVE_ISACTIVE_SYNC_FINAL_REPORT.md
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
?? docs/ecosystem-sync-20260702/
?? docs/firebase-functions-list-live.json
?? docs/firebase-functions-reconstruction-draft/
?? public/ai4-website-panel/
?? resources/views/layouts/website_panel.blade.php
?? resources/views/website_panel/
?? vendor_partial_backup_61D_20260705_010536/

```

## Marker AI-4 di routes/web.php
```text

  routes\web.php:917:});
> routes\web.php:918:// AI4_WEBSITE_PANEL_ROUTE
  routes\web.php:919:// AI4 local scaffolding route: isolated from auth role middleware during development.
  routes\web.php:920:Route::withoutMiddleware([\App\Http\Middleware\CheckUserRoleMiddleware::class])
> routes\web.php:921:    ->prefix('website-panel')
> routes\web.php:922:    ->name('website-panel.')
  routes\web.php:923:    ->group(function () {
  routes\web.php:924:        Route::get('/', [\App\Http\Controllers\WebsitePanelController::class, 'index'])->name('index');
  routes\web.php:931:
> routes\web.php:932:// AI4_WEBSITE_PANEL_LEGACY_MAP_ROUTE
  routes\web.php:933:Route::withoutMiddleware([\App\Http\Middleware\CheckUserRoleMiddleware::class])
> routes\web.php:934:    ->get('/website-panel/legacy-map', [\App\Http\Controllers\WebsitePanelController::class, 'legacyMap'])
> routes\web.php:935:    ->name('website-panel.legacy-map');



```

## HTTP Check
```text
HTTP/1.1 200 OK
Host: 127.0.0.1:8014
Connection: close
X-Powered-By: PHP/8.2.30
Set-Cookie: XSRF-TOKEN-AK=41497a6153794359616132494c6d4346594c68574e4545334d57463668373445437168575a3338; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-AD=6572626574652d70757472612e66697265626173656170702e636f6d; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-DU=68747470733a2f2f6572626574652d70757472612d64656661756c742d727464622e617369612d736f75746865617374312e666972656261736564617461626173652e617070; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-PI=6572626574652d7075747261; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-SB=6572626574652d70757472612e61707073706f742e636f6d; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-MS=363230333433313732323533; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-AI=313a3632303334333137323235333a7765623a61376163623163646439393863303935343134383734; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-MI=472d38464e5243574a343636; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Content-Type: text/html; charset=UTF-8
Cache-Control: no-cache, private
Date: Sun, 05 Jul 2026 20:23:09 GMT
Set-Cookie: XSRF-TOKEN=eyJpdiI6Im9pcWprOFhta2d6VUhiMWRVM08vYlE9PSIsInZhbHVlIjoiUWxEWGxPNXFsNEhLanZGYzFqUWlmbk5SWVNMSXJ6S2kvMDBjRG9RNzlOLzNyZ0lqbnRuc3BqQndOMzB1ZmxGNUFuR1pzTFVNWVpaa282aEF3a2l6TkdUYlh2eGJkRlVCNHFHOTY1biszNjZ3aVNjU0ppZ21pbVNkRFVKVkMyNVoiLCJtYWMiOiJlMGIyODI5ZjIwOWQyYTU5MTAyMjZjM2FkNjRkMGFiZDIwNjhkZjU4MTVhMWY4M2Y0MmRmMzhlMGJkYjA5MTM0IiwidGFnIjoiIn0%3D; expires=Sun, 05 Jul 2026 22:23:09 GMT; Max-Age=7200; path=/; samesite=lax
Set-Cookie: e_mart_session=eyJpdiI6ImpEa08rOUtZbjJYT0JqNXdXZWtXQ0E9PSIsInZhbHVlIjoidUNtMVpnNkNaUHR1ZStxMGk0UmhLelRUS3ZCbk1RMllqY3FiT3VNaTJvU21ReEVjWGlFL3p0MkdGaE1ST3NDRGJIMHhsS2w0TUg5MkF1WXZtTU43YjBoYlNMSmR1NHIvSUlLSGVUcXBQTHROS3VpU08xNUdHK3RlQ3pNdERSdzQiLCJtYWMiOiI1OTVkMDk3NTU4YWUyNzg0MDJmZjc1ZjlhZTRjZjcxYjhmMTIwMjkyOGM2MWVlMDk5NzhhMTI3ZmE2MjY4NTI4IiwidGFnIjoiIn0%3D; expires=Sun, 05 Jul 2026 22:23:09 GMT; Max-Age=7200; path=/; httponly; samesite=lax


HTTP/1.1 200 OK
Host: 127.0.0.1:8014
Connection: close
X-Powered-By: PHP/8.2.30
Set-Cookie: XSRF-TOKEN-AK=41497a6153794359616132494c6d4346594c68574e4545334d57463668373445437168575a3338; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-AD=6572626574652d70757472612e66697265626173656170702e636f6d; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-DU=68747470733a2f2f6572626574652d70757472612d64656661756c742d727464622e617369612d736f75746865617374312e666972656261736564617461626173652e617070; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-PI=6572626574652d7075747261; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-SB=6572626574652d70757472612e61707073706f742e636f6d; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-MS=363230333433313732323533; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-AI=313a3632303334333137323235333a7765623a61376163623163646439393863303935343134383734; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-MI=472d38464e5243574a343636; expires=Sun, 05 Jul 2026 21:23:09 GMT; Max-Age=3600; path=/
Content-Type: text/html; charset=UTF-8
Cache-Control: no-cache, private
Date: Sun, 05 Jul 2026 20:23:10 GMT
Set-Cookie: XSRF-TOKEN=eyJpdiI6ImIwczJUSnZzNTdCSWVocURVbDFYTXc9PSIsInZhbHVlIjoiVWNPVkczcTNCMVRVYXg1YXpYMDJVdVJvNmc1OEhHc0VYeVNhbmNvcEdSUUlWRlQvTmQ0Y3RyQ0k5OFFhOGF1bVZhM01mM0ljaVRTckQ2NTJhaEQ0VnR3ZlgxUHRNQlh2OVEzQzh6Z0twdWZDWHlTUi9nZVhCb1I0LytPN2I4dzUiLCJtYWMiOiJmZDBlNzhmZDQzY2MxN2UzMjY0MDI5MmE5YzRmOGIyZDcxMmI4NTYwYTJhMmQ1NDNiODAxOGM5MGZjMmM1NWVkIiwidGFnIjoiIn0%3D; expires=Sun, 05 Jul 2026 22:23:10 GMT; Max-Age=7200; path=/; samesite=lax
Set-Cookie: e_mart_session=eyJpdiI6IlZwd0Q3Vkp1WmdLSWpUdHVTTU0rd3c9PSIsInZhbHVlIjoiMVgyVm5nWEFFanN0N1ErWGh0anMrcHhTc2RQdUFpNERVODJSdW1sa0NSSjlXTitmcGYwdS9sdDYzN2tYbG5ZWmMzZCtGZlJJb3MzUTZZRFZGdmFwWXNFVUxQSU9tN2g2dEhSMHRrckFmNlgrLzFPNzFWeEhFcUdSaUlZMVJJMGwiLCJtYWMiOiIxYTY2YmI2YjQwNmFkNjhhNDgyMDYyMTUyNmU3NDBiNTEwOGE2MzQ2MDlmYzFkNDgzYTBiODBmODYyNjY5YWYyIiwidGFnIjoiIn0%3D; expires=Sun, 05 Jul 2026 22:23:10 GMT; Max-Age=7200; path=/; httponly; samesite=lax


HTTP/1.1 200 OK
Host: 127.0.0.1:8014
Connection: close
X-Powered-By: PHP/8.2.30
Set-Cookie: XSRF-TOKEN-AK=41497a6153794359616132494c6d4346594c68574e4545334d57463668373445437168575a3338; expires=Sun, 05 Jul 2026 21:23:10 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-AD=6572626574652d70757472612e66697265626173656170702e636f6d; expires=Sun, 05 Jul 2026 21:23:10 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-DU=68747470733a2f2f6572626574652d70757472612d64656661756c742d727464622e617369612d736f75746865617374312e666972656261736564617461626173652e617070; expires=Sun, 05 Jul 2026 21:23:10 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-PI=6572626574652d7075747261; expires=Sun, 05 Jul 2026 21:23:10 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-SB=6572626574652d70757472612e61707073706f742e636f6d; expires=Sun, 05 Jul 2026 21:23:10 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-MS=363230333433313732323533; expires=Sun, 05 Jul 2026 21:23:10 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-AI=313a3632303334333137323235333a7765623a61376163623163646439393863303935343134383734; expires=Sun, 05 Jul 2026 21:23:10 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-MI=472d38464e5243574a343636; expires=Sun, 05 Jul 2026 21:23:10 GMT; Max-Age=3600; path=/
Content-Type: text/html; charset=UTF-8
Cache-Control: no-cache, private
Date: Sun, 05 Jul 2026 20:23:10 GMT
Set-Cookie: XSRF-TOKEN=eyJpdiI6InhlVTZNOEdUbjBpVmRuVnNZam54TFE9PSIsInZhbHVlIjoiRDRJQU9lSXBQR1FhaFFjSkZQZ2lhTkNxcWxhUjYyUElSMW5FQThZWUVrbHFZTHIyNFZaOFJLNFMxd3VlT2RFZnRnM3JVUlh4S2dEWUNOUFpkSFFrc1N6cjkwRkRIV3BadTVDeDM5NlRsT3F0QzBWTHV0ckYrZklPOTdKZVQ1QUciLCJtYWMiOiI3YmE0ZjgzM2YyMGEwZjg2Yjc5Yjg4MDkyMGQ4OGZhNThhMzM2ODc3ZjRhNThlOGMzNmRiYWNlMGY5M2QyMjQ5IiwidGFnIjoiIn0%3D; expires=Sun, 05 Jul 2026 22:23:10 GMT; Max-Age=7200; path=/; samesite=lax
Set-Cookie: e_mart_session=eyJpdiI6ImNlTjZjaWlpdkExSVRSZFh4RTBVSWc9PSIsInZhbHVlIjoiblQ1NWZNaGtZdjVLamJ4b1hkN0FLeVRnSGlFd1F6MXRaaFZNMlAxRnNyUGpzb2lKOHAwcFhxY21ZMlJqTi9RSndDR2VKY0JtaW92YkxlSUtyWTNpRU9XTW5Zd3J1Y2t2SHBpVHVuQTlOU2lPY3lrQjNoeUJMUXFHZWRSRDh5VGwiLCJtYWMiOiI2MDExYjAwYmQwZWJiYTUxYWRlYjdmNjg4YTA3MDRmOGE5YWM5YmZjNWE1NzdkZTMzMzc1OTQ2ZWYwZWNhZmY0IiwidGFnIjoiIn0%3D; expires=Sun, 05 Jul 2026 22:23:10 GMT; Max-Age=7200; path=/; httponly; samesite=lax


HTTP/1.1 200 OK
Host: 127.0.0.1:8014
Connection: close
X-Powered-By: PHP/8.2.30
Set-Cookie: XSRF-TOKEN-AK=41497a6153794359616132494c6d4346594c68574e4545334d57463668373445437168575a3338; expires=Sun, 05 Jul 2026 21:23:11 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-AD=6572626574652d70757472612e66697265626173656170702e636f6d; expires=Sun, 05 Jul 2026 21:23:11 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-DU=68747470733a2f2f6572626574652d70757472612d64656661756c742d727464622e617369612d736f75746865617374312e666972656261736564617461626173652e617070; expires=Sun, 05 Jul 2026 21:23:11 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-PI=6572626574652d7075747261; expires=Sun, 05 Jul 2026 21:23:11 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-SB=6572626574652d70757472612e61707073706f742e636f6d; expires=Sun, 05 Jul 2026 21:23:11 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-MS=363230333433313732323533; expires=Sun, 05 Jul 2026 21:23:11 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-AI=313a3632303334333137323235333a7765623a61376163623163646439393863303935343134383734; expires=Sun, 05 Jul 2026 21:23:11 GMT; Max-Age=3600; path=/
Set-Cookie: XSRF-TOKEN-MI=472d38464e5243574a343636; expires=Sun, 05 Jul 2026 21:23:11 GMT; Max-Age=3600; path=/
Content-Type: text/html; charset=UTF-8
Cache-Control: no-cache, private
Date: Sun, 05 Jul 2026 20:23:11 GMT
Set-Cookie: XSRF-TOKEN=eyJpdiI6IlRkZW15dXJ0TlVmVHBlOHRoaXA1K0E9PSIsInZhbHVlIjoiNm5qZzBBZ2h6aDk3SFR3Zk1aSUhUOXR4Z2Yrd3d3SkdtcE1mS0hybGlMUVI2R3JSWVJoN1ZGYklxa1haK0N3NnRsUm5peVBkV0RGaFVQcmVDdEFCRjEvM3BGZWhrMjNEOEFqaWtHRDZFdnoxYTlFNjlOajRoTi9Wa0Nkdk5kb1MiLCJtYWMiOiJkMDE5NjFjNzM5ZWYyN2U3ZDBmNzg3ZjkyYzI4OTFhN2FkYzYyNzNmNGEyZDIxY2ViMDMxOGIxMDU5YWU0YjM0IiwidGFnIjoiIn0%3D; expires=Sun, 05 Jul 2026 22:23:11 GMT; Max-Age=7200; path=/; samesite=lax
Set-Cookie: e_mart_session=eyJpdiI6ImtRWGtOQnFaWVB3OE1oS0VQamhpd2c9PSIsInZhbHVlIjoiMmgxNzFBTkNIbC81U2VyemM5WTNtbjVzQmk3QXZidkhYa2k2NUdhVFNzbDBEU01zc1ZUYi9NYWFVL1lwMEFONng4Z2RkK0JkWCthaHR3ZHVJRDNHZzJNTEVnMnZDR2l0QWxsYk5rZ3BLNnlyUDVVODZieWZiMHZ0RzFEZ0ZRN2ciLCJtYWMiOiJlYzA2OGZjZjdhNzVlYjdiMmY3YTJhM2Y0YmRmMWQxZmE5MDk4Yjc2ODZlM2E0ZDRiMGU2MGI1YjM4NjJjN2IxIiwidGFnIjoiIn0%3D; expires=Sun, 05 Jul 2026 22:23:11 GMT; Max-Age=7200; path=/; httponly; samesite=lax


```

## Keputusan Kerja
- Semua patch Website Panel dilakukan di C:\deploy\adminpanel.
- Git ecosystem/fresh clone hanya dipakai untuk dokumentasi koordinasi AI lintas worker.
- Tidak ada source yang diubah pada audit ini.
- Area tidak disentuh: Firebase, Flutter, vendor, store, order, payment, tax, cron, wallet, payout, dispatch.

## File Penting Website Panel - Repair
```text
ADA     routes/web.php
ADA     app/Http/Controllers/WebsitePanelController.php
ADA     resources/views/layouts/website_panel.blade.php
ADA     resources/views/website_panel/index.blade.php
ADA     resources/views/website_panel/homepage.blade.php
ADA     resources/views/website_panel/footer.blade.php
ADA     resources/views/website_panel/cms.blade.php
ADA     resources/views/website_panel/preview.blade.php
ADA     resources/views/website_panel/legacy_map.blade.php
ADA     resources/views/website_panel/partials/sidebar.blade.php
ADA     resources/views/website_panel/partials/topbar.blade.php
ADA     public/ai4-website-panel/css/website-panel.css
ADA     public/ai4-website-panel/js/website-panel.js
ADA     docs/BUKU_BESAR_AI4_WEB_APP.md
ADA     docs/AI4_WEBSITE_PANEL_HOMEPAGE_REFINEMENT_REPORT.md
ADA     docs/AI4_WEBSITE_PANEL_PREVIEW_SOURCE_REFINEMENT_REPORT.md

```

## Repair Note
Bagian File Penting Website Panel dilengkapi ulang karena pipeline foreach PowerShell 5.1 gagal.
Tidak ada source code aplikasi yang diubah.
