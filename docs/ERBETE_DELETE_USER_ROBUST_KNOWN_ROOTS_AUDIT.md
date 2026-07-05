# ERBETE DELETE USER ROBUST KNOWN ROOTS AUDIT

Generated: 06/28/2026 14:04:04

Mode: audit-only. No patch. No delete. No deploy. No commit.

## ROOT: C:\deploy\adminpanel
- Exists: True
- Files scanned: 5002
- File: Admin Panel\public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 369
  - Pattern: onCall
  - Text: var cbCalled, onCalled = false;

- File: Admin Panel\public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 378
  - Pattern: onCall
  - Text: onCalled = true;

- File: Admin Panel\public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 387
  - Pattern: onCall
  - Text: ok(!onCalled, 'nodeSelected should not fire');

- File: Admin Panel\public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 395
  - Pattern: onCall
  - Text: var cbCalled, onCalled = false;

- File: Admin Panel\public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 404
  - Pattern: onCall
  - Text: onCalled = true;

- File: Admin Panel\public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 414
  - Pattern: onCall
  - Text: ok(!onCalled, 'nodeSelected should not fire');

- File: Admin Panel\public\assets\plugins\tinymce\tinymce.min.js
  - Line: 2
  - Pattern: onRequest
  - Text: !function(e,t){"use strict";function n(e,t){for(var n,r=[],i=0;i<e.length;++i){if(n=s[e[i]]||o(e[i]),!n)throw"module definition dependecy not found: "+e[i];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid modu ...

- File: Admin Panel\public\js\bootstrap.min.js
  - Line: 6
  - Pattern: onCall
  - Text: !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstr ...

- File: Admin Panel\resources\views\deliveryman\index.blade.php
  - Line: 656
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\deliveryman\index.blade.php
  - Line: 656
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\drivers\index.blade.php
  - Line: 784
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\drivers\index.blade.php
  - Line: 784
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\employee\index.blade.php
  - Line: 627
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\employee\index.blade.php
  - Line: 644
  - Pattern: delete-user
  - Text: var siteurl = settingData.storeUrl + "/api/delete-user";

- File: Admin Panel\resources\views\employee\index.blade.php
  - Line: 644
  - Pattern: api/delete-user
  - Text: var siteurl = settingData.storeUrl + "/api/delete-user";

- File: Admin Panel\resources\views\employee\index.blade.php
  - Line: 627
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\fleet_drivers\index.blade.php
  - Line: 644
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\fleet_drivers\index.blade.php
  - Line: 644
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\OnDemandService\workers\index.blade.php
  - Line: 550
  - Pattern: deleteUser
  - Text: var deleteUser = deleteUserData(dataId);

- File: Admin Panel\resources\views\OnDemandService\workers\index.blade.php
  - Line: 563
  - Pattern: deleteUser
  - Text: var deleteUser = deleteUserData(id);

- File: Admin Panel\resources\views\OnDemandService\workers\index.blade.php
  - Line: 593
  - Pattern: deleteUser
  - Text: async function deleteUserData(userId) {

- File: Admin Panel\resources\views\OnDemandService\workers\index.blade.php
  - Line: 602
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\OnDemandService\workers\index.blade.php
  - Line: 602
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\owners\driver_list.blade.php
  - Line: 719
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\owners\driver_list.blade.php
  - Line: 719
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\owners\index.blade.php
  - Line: 600
  - Pattern: deleteUser
  - Text: return deleteUserData(dataId, VendorId);

- File: Admin Panel\resources\views\owners\index.blade.php
  - Line: 618
  - Pattern: deleteUser
  - Text: async function deleteUserData(userId,vendorId) {

- File: Admin Panel\resources\views\owners\index.blade.php
  - Line: 643
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\owners\index.blade.php
  - Line: 664
  - Pattern: deleteUser
  - Text: return deleteUserData(id, VendorId);

- File: Admin Panel\resources\views\owners\index.blade.php
  - Line: 643
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\providers\index.blade.php
  - Line: 507
  - Pattern: deleteUser
  - Text: return deleteUserData(dataId);

- File: Admin Panel\resources\views\providers\index.blade.php
  - Line: 523
  - Pattern: deleteUser
  - Text: async function deleteUserData(userId) {

- File: Admin Panel\resources\views\providers\index.blade.php
  - Line: 535
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\providers\index.blade.php
  - Line: 620
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\providers\index.blade.php
  - Line: 639
  - Pattern: deleteUser
  - Text: return deleteUserData(id);

- File: Admin Panel\resources\views\providers\index.blade.php
  - Line: 596
  - Pattern: delete-user
  - Text: var siteurl=settingData.providerUrl+"/api/delete-user";

- File: Admin Panel\resources\views\providers\index.blade.php
  - Line: 596
  - Pattern: api/delete-user
  - Text: var siteurl=settingData.providerUrl+"/api/delete-user";

- File: Admin Panel\resources\views\providers\index.blade.php
  - Line: 535
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\providers\index.blade.php
  - Line: 620
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\section\index.blade.php
  - Line: 352
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\section\index.blade.php
  - Line: 352
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\stores\index.blade.php
  - Line: 689
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\stores\index.blade.php
  - Line: 670
  - Pattern: delete-user
  - Text: var siteurl = settingData.storeUrl + "/api/delete-user";

- File: Admin Panel\resources\views\stores\index.blade.php
  - Line: 670
  - Pattern: api/delete-user
  - Text: var siteurl = settingData.storeUrl + "/api/delete-user";

- File: Admin Panel\resources\views\stores\index.blade.php
  - Line: 689
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\users\index.blade.php
  - Line: 471
  - Pattern: deleteUser
  - Text: const getStoreName = deleteUserData(dataId);

- File: Admin Panel\resources\views\users\index.blade.php
  - Line: 481
  - Pattern: deleteUser
  - Text: async function deleteUserData(userId) {

- File: Admin Panel\resources\views\users\index.blade.php
  - Line: 519
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\users\index.blade.php
  - Line: 536
  - Pattern: deleteUser
  - Text: const getStoreName = deleteUserData(id);

- File: Admin Panel\resources\views\users\index.blade.php
  - Line: 495
  - Pattern: delete-user
  - Text: var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: Admin Panel\resources\views\users\index.blade.php
  - Line: 495
  - Pattern: api/delete-user
  - Text: var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: Admin Panel\resources\views\users\index.blade.php
  - Line: 519
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\vendors\index.blade.php
  - Line: 692
  - Pattern: deleteUser
  - Text: return deleteUserData(dataId, VendorId);

- File: Admin Panel\resources\views\vendors\index.blade.php
  - Line: 710
  - Pattern: deleteUser
  - Text: async function deleteUserData(userId,vendorId) {

- File: Admin Panel\resources\views\vendors\index.blade.php
  - Line: 779
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: Admin Panel\resources\views\vendors\index.blade.php
  - Line: 800
  - Pattern: deleteUser
  - Text: return deleteUserData(id, VendorId);

- File: Admin Panel\resources\views\vendors\index.blade.php
  - Line: 758
  - Pattern: delete-user
  - Text: var siteurl=settingData.storeUrl+"/api/delete-user";

- File: Admin Panel\resources\views\vendors\index.blade.php
  - Line: 758
  - Pattern: api/delete-user
  - Text: var siteurl=settingData.storeUrl+"/api/delete-user";

- File: Admin Panel\resources\views\vendors\index.blade.php
  - Line: 779
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 14
  - Pattern: deleteUser
  - Text: - Name: deleteUserFromDb

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 15
  - Pattern: deleteUser
  - Text: - Action: ApiController@deleteUserFromDb

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 20
  - Pattern: deleteUser
  - Text: - Route::post('/delete-user', ApiController::deleteUserFromDb)

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 21
  - Pattern: deleteUser
  - Text: - Method deleteUserFromDb tersedia di ApiController.php

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 7
  - Pattern: delete-user
  - Text: - Memastikan Admin Panel sebagai caller masih memiliki jalur pemanggilan /api/delete-user.

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 8
  - Pattern: delete-user
  - Text: - Memastikan Store Panel dan Website Panel menjadi receiver delete-user.

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 13
  - Pattern: delete-user
  - Text: - POST api/delete-user

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 20
  - Pattern: delete-user
  - Text: - Route::post('/delete-user', ApiController::deleteUserFromDb)

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 28
  - Pattern: delete-user
  - Text: - File caller users/stores/vendors/employee masih memanggil /api/delete-user.

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 46
  - Pattern: delete-user
  - Text: 4. Verifikasi route api/delete-user.

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 7
  - Pattern: api/delete-user
  - Text: - Memastikan Admin Panel sebagai caller masih memiliki jalur pemanggilan /api/delete-user.

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 13
  - Pattern: api/delete-user
  - Text: - POST api/delete-user

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 28
  - Pattern: api/delete-user
  - Text: - File caller users/stores/vendors/employee masih memanggil /api/delete-user.

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 46
  - Pattern: api/delete-user
  - Text: 4. Verifikasi route api/delete-user.

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 14
  - Pattern: deleteUserFromDb
  - Text: - Name: deleteUserFromDb

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 15
  - Pattern: deleteUserFromDb
  - Text: - Action: ApiController@deleteUserFromDb

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 20
  - Pattern: deleteUserFromDb
  - Text: - Route::post('/delete-user', ApiController::deleteUserFromDb)

- File: docs\ADMIN_DELETE_USER_CALLER_AUDIT_PROGRESS_REPORT.md
  - Line: 21
  - Pattern: deleteUserFromDb
  - Text: - Method deleteUserFromDb tersedia di ApiController.php

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 29
  - Pattern: deleteUser
  - Text: POST api/delete-user -> ApiController@deleteUserFromDb

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 32
  - Pattern: deleteUser
  - Text: POST api/delete-user -> ApiController@deleteUserFromDb

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 99
  - Pattern: deleteUser
  - Text: -> Laravel ApiController::deleteUserFromDb

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 5
  - Pattern: delete-user
  - Text: Jalur delete-user lokal sudah berhasil diuji dan divalidasi pada Store Panel dan Website Panel.

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 29
  - Pattern: delete-user
  - Text: POST api/delete-user -> ApiController@deleteUserFromDb

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 32
  - Pattern: delete-user
  - Text: POST api/delete-user -> ApiController@deleteUserFromDb

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 49
  - Pattern: delete-user
  - Text: ## Alur Endpoint delete-user

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 62
  - Pattern: delete-user
  - Text: POST http://127.0.0.1:8001/api/delete-user

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 79
  - Pattern: delete-user
  - Text: POST http://127.0.0.1:8002/api/delete-user

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 110
  - Pattern: delete-user
  - Text: - Route delete-user terkonfirmasi POST-only

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 29
  - Pattern: api/delete-user
  - Text: POST api/delete-user -> ApiController@deleteUserFromDb

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 32
  - Pattern: api/delete-user
  - Text: POST api/delete-user -> ApiController@deleteUserFromDb

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 62
  - Pattern: api/delete-user
  - Text: POST http://127.0.0.1:8001/api/delete-user

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 79
  - Pattern: api/delete-user
  - Text: POST http://127.0.0.1:8002/api/delete-user

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 29
  - Pattern: deleteUserFromDb
  - Text: POST api/delete-user -> ApiController@deleteUserFromDb

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 32
  - Pattern: deleteUserFromDb
  - Text: POST api/delete-user -> ApiController@deleteUserFromDb

- File: docs\ADMIN_STORE_WEBSITE_DELETE_USER_DB_SYNC_FINAL_REPORT.md
  - Line: 99
  - Pattern: deleteUserFromDb
  - Text: -> Laravel ApiController::deleteUserFromDb

- File: docs\ADMIN_STORE_WEBSITE_SAFE_DELETE_USER_CONNECTION_TEST_FINAL_REPORT.md
  - Line: 4
  - Pattern: delete-user
  - Text: Uji koneksi aman Admin Panel ke Store Panel dan Website Panel untuk endpoint delete-user sudah berhasil.

- File: docs\ADMIN_STORE_WEBSITE_SAFE_DELETE_USER_CONNECTION_TEST_FINAL_REPORT.md
  - Line: 8
  - Pattern: delete-user
  - Text: - Store Panel: http://127.0.0.1:8001/api/delete-user

- File: docs\ADMIN_STORE_WEBSITE_SAFE_DELETE_USER_CONNECTION_TEST_FINAL_REPORT.md
  - Line: 9
  - Pattern: delete-user
  - Text: - Website Panel: http://127.0.0.1:8002/api/delete-user

- File: docs\ADMIN_STORE_WEBSITE_SAFE_DELETE_USER_CONNECTION_TEST_FINAL_REPORT.md
  - Line: 42
  - Pattern: delete-user
  - Text: Invoke-RestMethod -Method Post -Uri "http://127.0.0.1:8001/api/delete-user" -ContentType "application/json" -Body '{"uuid":"__SAFE_TEST_DO_NOT_DELETE__"}'

- File: docs\ADMIN_STORE_WEBSITE_SAFE_DELETE_USER_CONNECTION_TEST_FINAL_REPORT.md
  - Line: 51
  - Pattern: delete-user
  - Text: Invoke-RestMethod -Method Post -Uri "http://127.0.0.1:8002/api/delete-user" -ContentType "application/json" -Body '{"uuid":"__SAFE_TEST_DO_NOT_DELETE__"}'

- File: docs\ADMIN_STORE_WEBSITE_SAFE_DELETE_USER_CONNECTION_TEST_FINAL_REPORT.md
  - Line: 8
  - Pattern: api/delete-user
  - Text: - Store Panel: http://127.0.0.1:8001/api/delete-user

- File: docs\ADMIN_STORE_WEBSITE_SAFE_DELETE_USER_CONNECTION_TEST_FINAL_REPORT.md
  - Line: 9
  - Pattern: api/delete-user
  - Text: - Website Panel: http://127.0.0.1:8002/api/delete-user

- File: docs\ADMIN_STORE_WEBSITE_SAFE_DELETE_USER_CONNECTION_TEST_FINAL_REPORT.md
  - Line: 42
  - Pattern: api/delete-user
  - Text: Invoke-RestMethod -Method Post -Uri "http://127.0.0.1:8001/api/delete-user" -ContentType "application/json" -Body '{"uuid":"__SAFE_TEST_DO_NOT_DELETE__"}'

- File: docs\ADMIN_STORE_WEBSITE_SAFE_DELETE_USER_CONNECTION_TEST_FINAL_REPORT.md
  - Line: 51
  - Pattern: api/delete-user
  - Text: Invoke-RestMethod -Method Post -Uri "http://127.0.0.1:8002/api/delete-user" -ContentType "application/json" -Body '{"uuid":"__SAFE_TEST_DO_NOT_DELETE__"}'

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 27
  - Pattern: deleteUser
  - Text: - ApiController@deleteUserFromDb

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 47
  - Pattern: deleteUser
  - Text: - ApiController@deleteUserFromDb

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 71
  - Pattern: deleteUser
  - Text: - Action: ApiController@deleteUserFromDb

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 85
  - Pattern: deleteUser
  - Text: - Action: ApiController@deleteUserFromDb

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 117
  - Pattern: deleteUser
  - Text: -> ApiController@deleteUserFromDb

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 122
  - Pattern: deleteUser
  - Text: -> ApiController@deleteUserFromDb

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 4
  - Pattern: delete-user
  - Text: Audit jalur delete-user antara Admin Panel, Store Panel, dan Website Panel sudah selesai sampai tahap verifikasi route.

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 10
  - Pattern: delete-user
  - Text: - Route POST api/delete-user tersedia di panel receiver.

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 22
  - Pattern: delete-user
  - Text: - websiteUrl + "/api/delete-user"

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 26
  - Pattern: delete-user
  - Text: - POST api/delete-user

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 42
  - Pattern: delete-user
  - Text: - storeUrl + "/api/delete-user"

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 46
  - Pattern: delete-user
  - Text: - POST api/delete-user

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 70
  - Pattern: delete-user
  - Text: - POST api/delete-user berhasil terbaca

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 84
  - Pattern: delete-user
  - Text: - POST api/delete-user berhasil terbaca

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 90
  - Pattern: delete-user
  - Text: - route:list menampilkan redirect HTML ke http://localhost/set-location, tetapi route api/delete-user tetap berhasil tampil.

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 96
  - Pattern: delete-user
  - Text: Caller delete-user ditemukan pada:

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 112
  - Pattern: delete-user
  - Text: Peta kerja delete-user sudah kembali terbaca:

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 116
  - Pattern: delete-user
  - Text: -> Website Panel POST api/delete-user

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 121
  - Pattern: delete-user
  - Text: -> Store Panel POST api/delete-user

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 124
  - Pattern: delete-user
  - Text: Dengan ini, koneksi dasar Admin -> Store/Website untuk jalur delete-user sudah terverifikasi secara struktur dan route.

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 10
  - Pattern: api/delete-user
  - Text: - Route POST api/delete-user tersedia di panel receiver.

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 22
  - Pattern: api/delete-user
  - Text: - websiteUrl + "/api/delete-user"

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 26
  - Pattern: api/delete-user
  - Text: - POST api/delete-user

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 42
  - Pattern: api/delete-user
  - Text: - storeUrl + "/api/delete-user"

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 46
  - Pattern: api/delete-user
  - Text: - POST api/delete-user

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 70
  - Pattern: api/delete-user
  - Text: - POST api/delete-user berhasil terbaca

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 84
  - Pattern: api/delete-user
  - Text: - POST api/delete-user berhasil terbaca

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 90
  - Pattern: api/delete-user
  - Text: - route:list menampilkan redirect HTML ke http://localhost/set-location, tetapi route api/delete-user tetap berhasil tampil.

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 116
  - Pattern: api/delete-user
  - Text: -> Website Panel POST api/delete-user

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 121
  - Pattern: api/delete-user
  - Text: -> Store Panel POST api/delete-user

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 27
  - Pattern: deleteUserFromDb
  - Text: - ApiController@deleteUserFromDb

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 47
  - Pattern: deleteUserFromDb
  - Text: - ApiController@deleteUserFromDb

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 71
  - Pattern: deleteUserFromDb
  - Text: - Action: ApiController@deleteUserFromDb

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 85
  - Pattern: deleteUserFromDb
  - Text: - Action: ApiController@deleteUserFromDb

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 117
  - Pattern: deleteUserFromDb
  - Text: -> ApiController@deleteUserFromDb

- File: docs\DELETE_USER_ADMIN_STORE_WEBSITE_CONNECTION_MAP_FINAL_REPORT.md
  - Line: 122
  - Pattern: deleteUserFromDb
  - Text: -> ApiController@deleteUserFromDb

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 19
  - Pattern: deleteUser
  - Text: - apakah ada Cloud Function `deleteUser` tambahan

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 83
  - Pattern: deleteUser
  - Text: > Catatan: semua pemanggilan delete-user berjalan dari sisi client (Blade -> JS) dengan `jQuery.ajax` dan juga memanggil Cloud Function `deleteUser`.

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 85
  - Pattern: deleteUser
  - Text: | module | file | base URL field | endpoint yang dibangun | payload JSON | field id/uuid | kapan dipanggil | Cloud Function deleteUser | error handling | fallback jika URL kosong |

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 87
  - Pattern: deleteUser
  - Text: | employee | resources/views/employee/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": driverId}` | `driverId` (Firebase doc id untuk user role employee/driver) | dipanggil di `deleteDriverData(dri ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 88
  - Pattern: deleteUser
  - Text: | providers | resources/views/providers/index.blade.php | `settings/Version.providerUrl` | `providerUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (users doc id untuk role provider) | dipanggil di `deleteUserData(userId)` setelah ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 89
  - Pattern: deleteUser
  - Text: | stores | resources/views/stores/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": item_data.id}` | `item_data.id` (uid user role vendor yang terkait storeId) | dipanggil di `deleteStoreData(storeI ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 90
  - Pattern: deleteUser
  - Text: | users | resources/views/users/index.blade.php | `settings/Version.websiteUrl` | `websiteUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase doc id untuk role customer) | dipanggil di `deleteUserData(userId)` setelah delete ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 91
  - Pattern: deleteUser
  - Text: | vendors | resources/views/vendors/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase doc id untuk role vendor) | dipanggil di `deleteUserData(userId, VendorId)` setela ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 99
  - Pattern: deleteUser
  - Text: 3) Panggil Cloud Function `deleteUser`:

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 100
  - Pattern: deleteUser
  - Text: - `https://us-central1-${projectId}.cloudfunctions.net/deleteUser`

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 120
  - Pattern: deleteUser
  - Text: - Delete Firestore dilakukan sebelum memastikan `delete-user` (API) dan `deleteUser` (Cloud Function) sukses.

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 4
  - Pattern: delete-user
  - Text: Audit read-only detail flow endpoint **`/api/delete-user`** pada semua file pemakai untuk menghapus user lintas module:

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 83
  - Pattern: delete-user
  - Text: > Catatan: semua pemanggilan delete-user berjalan dari sisi client (Blade -> JS) dengan `jQuery.ajax` dan juga memanggil Cloud Function `deleteUser`.

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 87
  - Pattern: delete-user
  - Text: | employee | resources/views/employee/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": driverId}` | `driverId` (Firebase doc id untuk user role employee/driver) | dipanggil di `deleteDriverData(dri ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 88
  - Pattern: delete-user
  - Text: | providers | resources/views/providers/index.blade.php | `settings/Version.providerUrl` | `providerUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (users doc id untuk role provider) | dipanggil di `deleteUserData(userId)` setelah ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 89
  - Pattern: delete-user
  - Text: | stores | resources/views/stores/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": item_data.id}` | `item_data.id` (uid user role vendor yang terkait storeId) | dipanggil di `deleteStoreData(storeI ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 90
  - Pattern: delete-user
  - Text: | users | resources/views/users/index.blade.php | `settings/Version.websiteUrl` | `websiteUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase doc id untuk role customer) | dipanggil di `deleteUserData(userId)` setelah delete ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 91
  - Pattern: delete-user
  - Text: | vendors | resources/views/vendors/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase doc id untuk role vendor) | dipanggil di `deleteUserData(userId, VendorId)` setela ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 96
  - Pattern: delete-user
  - Text: 2) Panggil endpoint eksternal delete-user untuk MySQL/server:

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 97
  - Pattern: delete-user
  - Text: - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 120
  - Pattern: delete-user
  - Text: - Delete Firestore dilakukan sebelum memastikan `delete-user` (API) dan `deleteUser` (Cloud Function) sukses.

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 4
  - Pattern: api/delete-user
  - Text: Audit read-only detail flow endpoint **`/api/delete-user`** pada semua file pemakai untuk menghapus user lintas module:

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 87
  - Pattern: api/delete-user
  - Text: | employee | resources/views/employee/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": driverId}` | `driverId` (Firebase doc id untuk user role employee/driver) | dipanggil di `deleteDriverData(dri ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 88
  - Pattern: api/delete-user
  - Text: | providers | resources/views/providers/index.blade.php | `settings/Version.providerUrl` | `providerUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (users doc id untuk role provider) | dipanggil di `deleteUserData(userId)` setelah ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 89
  - Pattern: api/delete-user
  - Text: | stores | resources/views/stores/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": item_data.id}` | `item_data.id` (uid user role vendor yang terkait storeId) | dipanggil di `deleteStoreData(storeI ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 90
  - Pattern: api/delete-user
  - Text: | users | resources/views/users/index.blade.php | `settings/Version.websiteUrl` | `websiteUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase doc id untuk role customer) | dipanggil di `deleteUserData(userId)` setelah delete ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 91
  - Pattern: api/delete-user
  - Text: | vendors | resources/views/vendors/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase doc id untuk role vendor) | dipanggil di `deleteUserData(userId, VendorId)` setela ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 97
  - Pattern: api/delete-user
  - Text: - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 87
  - Pattern: cloudFunctions
  - Text: | employee | resources/views/employee/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": driverId}` | `driverId` (Firebase doc id untuk user role employee/driver) | dipanggil di `deleteDriverData(dri ...

- File: docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md
  - Line: 100
  - Pattern: cloudFunctions
  - Text: - `https://us-central1-${projectId}.cloudfunctions.net/deleteUser`

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 4
  - Pattern: delete-user
  - Text: Mencari receiver endpoint /api/delete-user secara cepat di project lokal, dengan exclude vendor/node_modules/build/dist/.git.

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 23
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 24
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 25
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php:670 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 26
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php:495 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 27
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:758 => var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 28
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 29
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 30
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\resources\views\stores\index.blade.php:699 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 31
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\resources\views\users\index.blade.php:481 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 32
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\resources\views\vendors\index.blade.php:774 => var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 36
  - Pattern: delete-user
  - Text: Jika receiver route candidates kosong, maka di project lokal ini belum ditemukan definisi route penerima /api/delete-user. Yang ditemukan kemungkinan hanya caller.

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 4
  - Pattern: api/delete-user
  - Text: Mencari receiver endpoint /api/delete-user secara cepat di project lokal, dengan exclude vendor/node_modules/build/dist/.git.

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 23
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 24
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 25
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php:670 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 26
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php:495 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 27
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:758 => var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 28
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 29
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 30
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\resources\views\stores\index.blade.php:699 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 31
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\resources\views\users\index.blade.php:481 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 32
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\resources\views\vendors\index.blade.php:774 => var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md
  - Line: 36
  - Pattern: api/delete-user
  - Text: Jika receiver route candidates kosong, maka di project lokal ini belum ditemukan definisi route penerima /api/delete-user. Yang ditemukan kemungkinan hanya caller.

- File: docs\DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
  - Line: 4
  - Pattern: deleteUser
  - Text: Delete-user lintas sistem (Firestore/Client → endpoint eksternal `/api/delete-user` → SQL `vendor_users.uuid` → Cloud Function `deleteUser` → Firebase Auth) dipicu dari Admin Panel dengan:

- File: docs\DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
  - Line: 4
  - Pattern: delete-user
  - Text: Delete-user lintas sistem (Firestore/Client → endpoint eksternal `/api/delete-user` → SQL `vendor_users.uuid` → Cloud Function `deleteUser` → Firebase Auth) dipicu dari Admin Panel dengan:

- File: docs\DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
  - Line: 6
  - Pattern: delete-user
  - Text: - Endpoint eksternal `/api/delete-user` terlihat dipanggil tanpa kontrol auth/token yang jelas dari sisi client

- File: docs\DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
  - Line: 27
  - Pattern: delete-user
  - Text: - Tidak test POST `/api/delete-user` dengan uuid asli

- File: docs\DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
  - Line: 32
  - Pattern: delete-user
  - Text: 2) Apakah receiver `/api/delete-user` boleh diberi token auth (internal token) atau verifikasi Firebase ID token?

- File: docs\DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
  - Line: 33
  - Pattern: delete-user
  - Text: 3) Apakah `providerUrl` memang punya backend/receiver sendiri untuk `/api/delete-user`, atau harus dinonaktifkan sementara?

- File: docs\DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
  - Line: 4
  - Pattern: api/delete-user
  - Text: Delete-user lintas sistem (Firestore/Client → endpoint eksternal `/api/delete-user` → SQL `vendor_users.uuid` → Cloud Function `deleteUser` → Firebase Auth) dipicu dari Admin Panel dengan:

- File: docs\DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
  - Line: 6
  - Pattern: api/delete-user
  - Text: - Endpoint eksternal `/api/delete-user` terlihat dipanggil tanpa kontrol auth/token yang jelas dari sisi client

- File: docs\DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
  - Line: 27
  - Pattern: api/delete-user
  - Text: - Tidak test POST `/api/delete-user` dengan uuid asli

- File: docs\DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
  - Line: 32
  - Pattern: api/delete-user
  - Text: 2) Apakah receiver `/api/delete-user` boleh diberi token auth (internal token) atau verifikasi Firebase ID token?

- File: docs\DELETE_USER_SECURITY_EXECUTIVE_SUMMARY.md
  - Line: 33
  - Pattern: api/delete-user
  - Text: 3) Apakah `providerUrl` memang punya backend/receiver sendiri untuk `/api/delete-user`, atau harus dinonaktifkan sementara?

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 12
  - Pattern: deleteUser
  - Text: - Cloud Function **deleteUser**

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 30
  - Pattern: deleteUser
  - Text: → Cloud Function `deleteUser`

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 33
  - Pattern: deleteUser
  - Text: Catatan: delete flow terlihat melibatkan kombinasi delete Firestore (client-side) lalu pemanggilan endpoint eksternal (`/api/delete-user` + Cloud Function `deleteUser`) secara async.

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 4
  - Pattern: delete-user
  - Text: Menjadikan delete-user lintas Admin/Store/Website/Firebase lebih aman, terkendali, dan tidak mudah menyebabkan data pecah.

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 26
  - Pattern: delete-user
  - Text: → `/api/delete-user` (dibangun client-side)

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 33
  - Pattern: delete-user
  - Text: Catatan: delete flow terlihat melibatkan kombinasi delete Firestore (client-side) lalu pemanggilan endpoint eksternal (`/api/delete-user` + Cloud Function `deleteUser`) secara async.

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 39
  - Pattern: delete-user
  - Text: | R1 | Dynamic URL dari Firestore settings/Version | High | Request delete bisa diarahkan ke host yang salah / gagal sinkron | Admin Panel membangun `storeUrl/websiteUrl/providerUrl + "/api/delete-user"` | PHASE 1: caller guard (trim, schem ...

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 40
  - Pattern: delete-user
  - Text: | R2 | Receiver tanpa auth/token terlihat | High | Endpoint delete-user dapat dieksekusi tanpa kontrol akses end-to-end | Temuan audit: external /api/delete-user terlihat dipanggil tanpa token/header auth dari client | PHASE 3: receiver waj ...

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 42
  - Pattern: delete-user
  - Text: | R4 | uuid mismatch (uuid/uid semantic) | Medium/High | SQL delete tidak match vendor_users.uuid | Audit: payload `{uuid: ...}` pada `/api/delete-user` vs payload Cloud Function `{data:{uid: ...}}` | PHASE 5: receiver enforce mapping/valid ...

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 53
  - Pattern: delete-user
  - Text: - Blok kosong/null (jangan build URL seperti `"/api/delete-user"`)

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 64
  - Pattern: delete-user
  - Text: - Store/Website `/api/delete-user` perlu auth

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 75
  - Pattern: delete-user
  - Text: - Jangan simpan URL kosong jika fitur delete-user butuh aktif

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 26
  - Pattern: api/delete-user
  - Text: → `/api/delete-user` (dibangun client-side)

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 33
  - Pattern: api/delete-user
  - Text: Catatan: delete flow terlihat melibatkan kombinasi delete Firestore (client-side) lalu pemanggilan endpoint eksternal (`/api/delete-user` + Cloud Function `deleteUser`) secara async.

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 39
  - Pattern: api/delete-user
  - Text: | R1 | Dynamic URL dari Firestore settings/Version | High | Request delete bisa diarahkan ke host yang salah / gagal sinkron | Admin Panel membangun `storeUrl/websiteUrl/providerUrl + "/api/delete-user"` | PHASE 1: caller guard (trim, schem ...

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 40
  - Pattern: api/delete-user
  - Text: | R2 | Receiver tanpa auth/token terlihat | High | Endpoint delete-user dapat dieksekusi tanpa kontrol akses end-to-end | Temuan audit: external /api/delete-user terlihat dipanggil tanpa token/header auth dari client | PHASE 3: receiver waj ...

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 42
  - Pattern: api/delete-user
  - Text: | R4 | uuid mismatch (uuid/uid semantic) | Medium/High | SQL delete tidak match vendor_users.uuid | Audit: payload `{uuid: ...}` pada `/api/delete-user` vs payload Cloud Function `{data:{uid: ...}}` | PHASE 5: receiver enforce mapping/valid ...

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 53
  - Pattern: api/delete-user
  - Text: - Blok kosong/null (jangan build URL seperti `"/api/delete-user"`)

- File: docs\DELETE_USER_SECURITY_PATCH_PLAN_FINAL.md
  - Line: 64
  - Pattern: api/delete-user
  - Text: - Store/Website `/api/delete-user` perlu auth

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 32
  - Pattern: deleteUser
  - Text: Catatan: Cloud Function `deleteUser` juga dipanggil oleh client (terlihat dari audit flow).

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 44
  - Pattern: deleteUser
  - Text: - `routes/api.php` → `Route::post('/delete-user', [ApiController::class, 'deleteUserFromDb'])`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 45
  - Pattern: deleteUser
  - Text: - `app/Http/Controllers/ApiController.php` → implementasi `deleteUserFromDb`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 48
  - Pattern: deleteUser
  - Text: - `routes/api.php` → `Route::post('/delete-user', [ApiController::class, 'deleteUserFromDb'])`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 49
  - Pattern: deleteUser
  - Text: - `app/Http/Controllers/ApiController.php` → implementasi `deleteUserFromDb`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 80
  - Pattern: deleteUser
  - Text: - Cloud Function `deleteUser` (jika dipanggil) tetap dapat menghapus di sistem lain → potensi orphan data / mismatch kondisi

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 6
  - Pattern: delete-user
  - Text: 2) Receiver mana yang cocok untuk endpoint **/api/delete-user**:

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 30
  - Pattern: delete-user
  - Text: **Admin Panel** → Firestore `settings/Version` → **storeUrl/websiteUrl/providerUrl** → `/api/delete-user` → (Store/Website receiver) → SQL `vendor_users.uuid` → hapus: `users` (via user_id dari vendor_users) + `vendor_users`.

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 35
  - Pattern: delete-user
  - Text: - `employee/index.blade.php` → `settings/Version.storeUrl` → `{storeUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 36
  - Pattern: delete-user
  - Text: - `stores/index.blade.php` → `settings/Version.storeUrl` → `{storeUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 37
  - Pattern: delete-user
  - Text: - `vendors/index.blade.php` → `settings/Version.storeUrl` → `{storeUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 38
  - Pattern: delete-user
  - Text: - `users/index.blade.php` → `settings/Version.websiteUrl` → `{websiteUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 39
  - Pattern: delete-user
  - Text: - `providers/index.blade.php` → `settings/Version.providerUrl` → `{providerUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 44
  - Pattern: delete-user
  - Text: - `routes/api.php` → `Route::post('/delete-user', [ApiController::class, 'deleteUserFromDb'])`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 46
  - Pattern: delete-user
  - Text: - URL efektif: **`/api/delete-user`** (base dari `storeUrl`)

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 48
  - Pattern: delete-user
  - Text: - `routes/api.php` → `Route::post('/delete-user', [ApiController::class, 'deleteUserFromDb'])`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 50
  - Pattern: delete-user
  - Text: - URL efektif: **`/api/delete-user`** (base dari `websiteUrl`)

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 57
  - Pattern: delete-user
  - Text: - `POST {baseUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 73
  - Pattern: delete-user
  - Text: - API `/api/delete-user` gagal (4xx/5xx) atau menghapus data di sistem yang tidak diharapkan (tergantung implementasi receiver)

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 86
  - Pattern: delete-user
  - Text: - receiver `providerUrl/api/delete-user` belum terlihat di ZIP asli yang terkonfirmasi (Store/Website hanya yang ditemukan).

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 90
  - Pattern: delete-user
  - Text: - cari repo/deploy target provider yang memiliki route `/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 94
  - Pattern: delete-user
  - Text: - receiver `/api/delete-user` idealnya memakai auth/authorization, bukan hanya percaya `uuid`.

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 100
  - Pattern: delete-user
  - Text: - PATCH 2: Standard error handler `delete-user` agar semua module mem-parsing response dengan konsisten

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 112
  - Pattern: delete-user
  - Text: - Receiver matching Store/Website (ZIP asli) sudah terkonfirmasi untuk endpoint `/api/delete-user`.

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 115
  - Pattern: delete-user
  - Text: - Jangan test POST `/api/delete-user` dengan uuid asli.

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 6
  - Pattern: api/delete-user
  - Text: 2) Receiver mana yang cocok untuk endpoint **/api/delete-user**:

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 30
  - Pattern: api/delete-user
  - Text: **Admin Panel** → Firestore `settings/Version` → **storeUrl/websiteUrl/providerUrl** → `/api/delete-user` → (Store/Website receiver) → SQL `vendor_users.uuid` → hapus: `users` (via user_id dari vendor_users) + `vendor_users`.

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 35
  - Pattern: api/delete-user
  - Text: - `employee/index.blade.php` → `settings/Version.storeUrl` → `{storeUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 36
  - Pattern: api/delete-user
  - Text: - `stores/index.blade.php` → `settings/Version.storeUrl` → `{storeUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 37
  - Pattern: api/delete-user
  - Text: - `vendors/index.blade.php` → `settings/Version.storeUrl` → `{storeUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 38
  - Pattern: api/delete-user
  - Text: - `users/index.blade.php` → `settings/Version.websiteUrl` → `{websiteUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 39
  - Pattern: api/delete-user
  - Text: - `providers/index.blade.php` → `settings/Version.providerUrl` → `{providerUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 46
  - Pattern: api/delete-user
  - Text: - URL efektif: **`/api/delete-user`** (base dari `storeUrl`)

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 50
  - Pattern: api/delete-user
  - Text: - URL efektif: **`/api/delete-user`** (base dari `websiteUrl`)

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 57
  - Pattern: api/delete-user
  - Text: - `POST {baseUrl}/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 73
  - Pattern: api/delete-user
  - Text: - API `/api/delete-user` gagal (4xx/5xx) atau menghapus data di sistem yang tidak diharapkan (tergantung implementasi receiver)

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 86
  - Pattern: api/delete-user
  - Text: - receiver `providerUrl/api/delete-user` belum terlihat di ZIP asli yang terkonfirmasi (Store/Website hanya yang ditemukan).

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 90
  - Pattern: api/delete-user
  - Text: - cari repo/deploy target provider yang memiliki route `/api/delete-user`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 94
  - Pattern: api/delete-user
  - Text: - receiver `/api/delete-user` idealnya memakai auth/authorization, bukan hanya percaya `uuid`.

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 112
  - Pattern: api/delete-user
  - Text: - Receiver matching Store/Website (ZIP asli) sudah terkonfirmasi untuk endpoint `/api/delete-user`.

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 115
  - Pattern: api/delete-user
  - Text: - Jangan test POST `/api/delete-user` dengan uuid asli.

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 44
  - Pattern: deleteUserFromDb
  - Text: - `routes/api.php` → `Route::post('/delete-user', [ApiController::class, 'deleteUserFromDb'])`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 45
  - Pattern: deleteUserFromDb
  - Text: - `app/Http/Controllers/ApiController.php` → implementasi `deleteUserFromDb`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 48
  - Pattern: deleteUserFromDb
  - Text: - `routes/api.php` → `Route::post('/delete-user', [ApiController::class, 'deleteUserFromDb'])`

- File: docs\DELETE_USER_URL_RECEIVER_MATCHING_REPORT.md
  - Line: 49
  - Pattern: deleteUserFromDb
  - Text: - `app/Http/Controllers/ApiController.php` → implementasi `deleteUserFromDb`

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 18
  - Pattern: deleteUser
  - Text: - Audit ini hanya mencari source Cloud Function deleteUser.

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_DEPLOY_MANUAL_PLAN.md
  - Line: 17
  - Pattern: deleteUser
  - Text: - deleteUser sudah menjadi functions.https.onRequest.

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_DEPLOY_MANUAL_PLAN.md
  - Line: 39
  - Pattern: deleteUser
  - Text: firebase deploy --only functions:deleteUser --project erbete-putra

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_DEPLOY_MANUAL_PLAN.md
  - Line: 48
  - Pattern: deleteUser
  - Text: Invoke-RestMethod -Method Post -Uri "https://us-central1-erbete-putra.cloudfunctions.net/deleteUser" -ContentType "application/json" -Body $body

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_DEPLOY_MANUAL_PLAN.md
  - Line: 18
  - Pattern: onCall
  - Text: - onCall sudah tidak ada.

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_DEPLOY_MANUAL_PLAN.md
  - Line: 17
  - Pattern: onRequest
  - Text: - deleteUser sudah menjadi functions.https.onRequest.

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_DEPLOY_MANUAL_PLAN.md
  - Line: 17
  - Pattern: functions.https
  - Text: - deleteUser sudah menjadi functions.https.onRequest.

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_DEPLOY_MANUAL_PLAN.md
  - Line: 48
  - Pattern: cloudFunctions
  - Text: Invoke-RestMethod -Method Post -Uri "https://us-central1-erbete-putra.cloudfunctions.net/deleteUser" -ContentType "application/json" -Body $body

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_ONREQUEST_PATCH_REPORT.md
  - Line: 24
  - Pattern: onCall
  - Text: - NO_ONCALL: FAIL

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_ONREQUEST_PATCH_REPORT.md
  - Line: 1
  - Pattern: onRequest
  - Text: # ERBETE CLOUD FUNCTION DELETE USER ONREQUEST PATCH REPORT

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_ONREQUEST_PATCH_REPORT.md
  - Line: 23
  - Pattern: onRequest
  - Text: - HAS_ONREQUEST: OK

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_ONREQUEST_RECHECK_REPORT.md
  - Line: 19
  - Pattern: onCall
  - Text: - NO_ONCALL: OK

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_ONREQUEST_RECHECK_REPORT.md
  - Line: 1
  - Pattern: onRequest
  - Text: # ERBETE CLOUD FUNCTION DELETE USER ONREQUEST RECHECK REPORT

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_ONREQUEST_RECHECK_REPORT.md
  - Line: 18
  - Pattern: onRequest
  - Text: - HAS_ONREQUEST: OK

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_QUICK_VERIFY.md
  - Line: 14
  - Pattern: onCall
  - Text: - NO_ONCALL: OK

- File: docs\ERBETE_CLOUD_FUNCTION_DELETE_USER_QUICK_VERIFY.md
  - Line: 13
  - Pattern: onRequest
  - Text: - HAS_ONREQUEST: OK

- File: docs\ERBETE_CUSTOMER_APP_DETAIL_AUDIT.md
  - Line: 377
  - Pattern: deleteUser
  - Text: NEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_CUSTOMER_APP_DETAIL_AUDIT.md
  - Line: 381
  - Pattern: deleteUser
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_CUSTOMER_APP_DETAIL_AUDIT.md
  - Line: 377
  - Pattern: cloudFunctions
  - Text: NEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_CUSTOMER_APP_DETAIL_AUDIT.md
  - Line: 381
  - Pattern: cloudFunctions
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 14
  - Pattern: deleteUser
  - Text: - Customer App memakai websiteUrl + /api/delete-user sebelum menjalankan FireStoreUtils.deleteUser.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 15
  - Pattern: deleteUser
  - Text: - Restaurant/Vendor App memakai storeUrl + /api/delete-user sebelum menjalankan FireStoreUtils.deleteUser.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 16
  - Pattern: deleteUser
  - Text: - Driver App memiliki jalur delete langsung ke FirebaseAuth currentUser.delete dan juga indikasi Cloud Function deleteUser.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 17
  - Pattern: deleteUser
  - Text: - Cloud Function deleteUser muncul sebagai endpoint https://us-central1-\.cloudfunctions.net/deleteUser.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 35
  - Pattern: deleteUser
  - Text: TEXT: TEXT: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 43
  - Pattern: deleteUser
  - Text: PREV: TEXT: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 53
  - Pattern: deleteUser
  - Text: TEXT: PREV: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 61
  - Pattern: deleteUser
  - Text: PREV: PREV: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 71
  - Pattern: deleteUser
  - Text: TEXT: TEXT: log("deleteUserFromServer :: ${response.body}");

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 80
  - Pattern: deleteUser
  - Text: TEXT: TEXT: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 81
  - Pattern: deleteUser
  - Text: NEXT: NEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 88
  - Pattern: deleteUser
  - Text: PREV: TEXT: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 89
  - Pattern: deleteUser
  - Text: TEXT: NEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 98
  - Pattern: deleteUser
  - Text: TEXT: PREV: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 99
  - Pattern: deleteUser
  - Text: NEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 106
  - Pattern: deleteUser
  - Text: PREV: PREV: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 107
  - Pattern: deleteUser
  - Text: TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 116
  - Pattern: deleteUser
  - Text: TEXT: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 134
  - Pattern: deleteUser
  - Text: TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 143
  - Pattern: deleteUser
  - Text: TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 152
  - Pattern: deleteUser
  - Text: TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 161
  - Pattern: deleteUser
  - Text: TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 170
  - Pattern: deleteUser
  - Text: TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 188
  - Pattern: deleteUser
  - Text: TEXT: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 206
  - Pattern: deleteUser
  - Text: TEXT: TEXT: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 207
  - Pattern: deleteUser
  - Text: NEXT: NEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 214
  - Pattern: deleteUser
  - Text: PREV: TEXT: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 215
  - Pattern: deleteUser
  - Text: TEXT: NEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 224
  - Pattern: deleteUser
  - Text: TEXT: PREV: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 225
  - Pattern: deleteUser
  - Text: NEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 232
  - Pattern: deleteUser
  - Text: PREV: PREV: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 233
  - Pattern: deleteUser
  - Text: TEXT: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 242
  - Pattern: deleteUser
  - Text: TEXT: TEXT: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 250
  - Pattern: deleteUser
  - Text: PREV: TEXT: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 260
  - Pattern: deleteUser
  - Text: TEXT: PREV: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 268
  - Pattern: deleteUser
  - Text: PREV: PREV: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 278
  - Pattern: deleteUser
  - Text: TEXT: TEXT: log("deleteUserFromServer :: ${response.body}");

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 287
  - Pattern: deleteUser
  - Text: TEXT: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 322
  - Pattern: deleteUser
  - Text: 5. Firebase Auth dihapus melalui Cloud Function deleteUser, bukan dari client langsung.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 334
  - Pattern: deleteUser
  - Text: - Jangan jalankan Cloud Function deleteUser manual.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 339
  - Pattern: deleteUser
  - Text: - Audit isi fungsi deleteUser Cloud Function.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 14
  - Pattern: delete-user
  - Text: - Customer App memakai websiteUrl + /api/delete-user sebelum menjalankan FireStoreUtils.deleteUser.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 15
  - Pattern: delete-user
  - Text: - Restaurant/Vendor App memakai storeUrl + /api/delete-user sebelum menjalankan FireStoreUtils.deleteUser.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 36
  - Pattern: delete-user
  - Text: NEXT: NEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 44
  - Pattern: delete-user
  - Text: TEXT: NEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 54
  - Pattern: delete-user
  - Text: NEXT: TEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 62
  - Pattern: delete-user
  - Text: TEXT: TEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 243
  - Pattern: delete-user
  - Text: NEXT: NEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 251
  - Pattern: delete-user
  - Text: TEXT: NEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 261
  - Pattern: delete-user
  - Text: NEXT: TEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 269
  - Pattern: delete-user
  - Text: TEXT: TEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 318
  - Pattern: delete-user
  - Text: - Customer App ke websiteUrl/api/delete-user

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 319
  - Pattern: delete-user
  - Text: - Restaurant/Vendor App ke storeUrl/api/delete-user

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 340
  - Pattern: delete-user
  - Text: - Audit Laravel route /api/delete-user di Store dan Website.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 341
  - Pattern: delete-user
  - Text: - Baru setelah itu buat patch satu jalur delete-user.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 14
  - Pattern: api/delete-user
  - Text: - Customer App memakai websiteUrl + /api/delete-user sebelum menjalankan FireStoreUtils.deleteUser.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 15
  - Pattern: api/delete-user
  - Text: - Restaurant/Vendor App memakai storeUrl + /api/delete-user sebelum menjalankan FireStoreUtils.deleteUser.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 36
  - Pattern: api/delete-user
  - Text: NEXT: NEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 44
  - Pattern: api/delete-user
  - Text: TEXT: NEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 54
  - Pattern: api/delete-user
  - Text: NEXT: TEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 62
  - Pattern: api/delete-user
  - Text: TEXT: TEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 243
  - Pattern: api/delete-user
  - Text: NEXT: NEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 251
  - Pattern: api/delete-user
  - Text: TEXT: NEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 261
  - Pattern: api/delete-user
  - Text: NEXT: TEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 269
  - Pattern: api/delete-user
  - Text: TEXT: TEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 318
  - Pattern: api/delete-user
  - Text: - Customer App ke websiteUrl/api/delete-user

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 319
  - Pattern: api/delete-user
  - Text: - Restaurant/Vendor App ke storeUrl/api/delete-user

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 340
  - Pattern: api/delete-user
  - Text: - Audit Laravel route /api/delete-user di Store dan Website.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 17
  - Pattern: cloudFunctions
  - Text: - Cloud Function deleteUser muncul sebagai endpoint https://us-central1-\.cloudfunctions.net/deleteUser.

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 116
  - Pattern: cloudFunctions
  - Text: TEXT: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 188
  - Pattern: cloudFunctions
  - Text: TEXT: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_DECISION_MAP.md
  - Line: 287
  - Pattern: cloudFunctions
  - Text: TEXT: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_DEPLOY_EXECUTION_REPORT.md
  - Line: 5
  - Pattern: deleteUser
  - Text: Mode: deploy functions:deleteUser only.

- File: docs\ERBETE_DELETE_USER_DEPLOY_EXECUTION_REPORT.md
  - Line: 9
  - Pattern: deleteUser
  - Text: Approval: SETUJU DEPLOY functions:deleteUser SAJA KE erbete-putra

- File: docs\ERBETE_DELETE_USER_DEPLOY_EXECUTION_REPORT.md
  - Line: 27
  - Pattern: cloudFunctions
  - Text: [1m[37m===[39m Deploying to 'erbete-putra'...[22m  [36m[1mi [22m[39m deploying [1mfunctions[22m Running command: npm --prefix "$RESOURCE_DIR" run lint  > lint > eslint .  [32m[1m+ [22m[39m [32m[1mfunctions:[22m[39m Finishe ...

- File: docs\ERBETE_DELETE_USER_DEPLOY_RETRY_AFTER_ADMIN_INIT_PATCH.md
  - Line: 5
  - Pattern: deleteUser
  - Text: Mode: deploy functions:deleteUser only.

- File: docs\ERBETE_DELETE_USER_DEPLOY_RETRY_AFTER_ADMIN_INIT_PATCH.md
  - Line: 31
  - Pattern: deleteUser
  - Text: [1m[37m===[39m Deploying to 'erbete-putra'...[22m  [36m[1mi [22m[39m deploying [1mfunctions[22m Running command: npm --prefix "$RESOURCE_DIR" run lint  > lint > eslint .  [32m[1m+ [22m[39m [32m[1mfunctions:[22m[39m Finishe ...

- File: docs\ERBETE_DELETE_USER_DEPLOY_RETRY_AFTER_ADMIN_INIT_PATCH.md
  - Line: 25
  - Pattern: onRequest
  - Text: - has onRequest: YES

- File: docs\ERBETE_DELETE_USER_DEPLOY_RETRY_AFTER_ADMIN_INIT_PATCH.md
  - Line: 31
  - Pattern: cloudFunctions
  - Text: [1m[37m===[39m Deploying to 'erbete-putra'...[22m  [36m[1mi [22m[39m deploying [1mfunctions[22m Running command: npm --prefix "$RESOURCE_DIR" run lint  > lint > eslint .  [32m[1m+ [22m[39m [32m[1mfunctions:[22m[39m Finishe ...

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 15
  - Pattern: deleteUser
  - Text: - Lalu memanggil FireStoreUtils.deleteUser.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 16
  - Pattern: deleteUser
  - Text: - FireStoreUtils.deleteUser mengarah ke Cloud Function deleteUser.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 20
  - Pattern: deleteUser
  - Text: - Lalu memanggil FireStoreUtils.deleteUser.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 21
  - Pattern: deleteUser
  - Text: - FireStoreUtils.deleteUser mengarah ke Cloud Function deleteUser.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 25
  - Pattern: deleteUser
  - Text: - Juga memiliki indikasi pemanggilan Cloud Function deleteUser.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 29
  - Pattern: deleteUser
  - Text: - Controller deleteUserFromDb memvalidasi uuid pada vendor_users.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 34
  - Pattern: deleteUser
  - Text: - exports.deleteUser memakai functions.https.onCall.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 35
  - Pattern: deleteUser
  - Text: - Function menjalankan admin.auth().deleteUser(data.uid).

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 40
  - Pattern: deleteUser
  - Text: - App terlihat memanggil endpoint cloudfunctions.net/deleteUser memakai http.post.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 89
  - Pattern: deleteUser
  - Text: 1. Perbaiki Cloud Function deleteUser.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 14
  - Pattern: delete-user
  - Text: - Memanggil websiteUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 19
  - Pattern: delete-user
  - Text: - Memanggil storeUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 28
  - Pattern: delete-user
  - Text: - Memiliki Laravel API POST /api/delete-user.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 73
  - Pattern: delete-user
  - Text: - Customer ke websiteUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 74
  - Pattern: delete-user
  - Text: - Restaurant/Vendor ke storeUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 83
  - Pattern: delete-user
  - Text: - Jangan ubah app delete-user sebelum memilih onCall atau onRequest.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 14
  - Pattern: api/delete-user
  - Text: - Memanggil websiteUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 19
  - Pattern: api/delete-user
  - Text: - Memanggil storeUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 28
  - Pattern: api/delete-user
  - Text: - Memiliki Laravel API POST /api/delete-user.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 73
  - Pattern: api/delete-user
  - Text: - Customer ke websiteUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 74
  - Pattern: api/delete-user
  - Text: - Restaurant/Vendor ke storeUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 29
  - Pattern: deleteUserFromDb
  - Text: - Controller deleteUserFromDb memvalidasi uuid pada vendor_users.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 34
  - Pattern: onCall
  - Text: - exports.deleteUser memakai functions.https.onCall.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 41
  - Pattern: onCall
  - Text: - Source function memakai functions.https.onCall.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 42
  - Pattern: onCall
  - Text: - onCall seharusnya dipanggil dengan Firebase callable client SDK, bukan HTTP POST biasa.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 64
  - Pattern: onCall
  - Text: - Ubah app agar memakai callable SDK sesuai onCall; atau

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 83
  - Pattern: onCall
  - Text: - Jangan ubah app delete-user sebelum memilih onCall atau onRequest.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 65
  - Pattern: onRequest
  - Text: - Ubah Cloud Function menjadi onRequest agar cocok dengan http.post.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 83
  - Pattern: onRequest
  - Text: - Jangan ubah app delete-user sebelum memilih onCall atau onRequest.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 34
  - Pattern: functions.https
  - Text: - exports.deleteUser memakai functions.https.onCall.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 41
  - Pattern: functions.https
  - Text: - Source function memakai functions.https.onCall.

- File: docs\ERBETE_DELETE_USER_FINAL_CONTROL_DECISION.md
  - Line: 40
  - Pattern: cloudFunctions
  - Text: - App terlihat memanggil endpoint cloudfunctions.net/deleteUser memakai http.post.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 19
  - Pattern: deleteUser
  - Text: 1. App memanggil Cloud Function deleteUser memakai HTTP POST.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 48
  - Pattern: deleteUser
  - Text: Gunakan Pilihan B: Cloud Function deleteUser menjadi functions.https.onRequest.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 65
  - Pattern: deleteUser
  - Text: 3. App menjalankan FireStoreUtils.deleteUser:

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 67
  - Pattern: deleteUser
  - Text: - panggil Cloud Function deleteUser.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 69
  - Pattern: deleteUser
  - Text: 4. Cloud Function deleteUser menghapus Firebase Auth:

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 72
  - Pattern: deleteUser
  - Text: - jalankan admin.auth().deleteUser(uid).

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 87
  - Pattern: deleteUser
  - Text: - Buat patch deleteUser onRequest.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 58
  - Pattern: delete-user
  - Text: - Customer App ke websiteUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 59
  - Pattern: delete-user
  - Text: - Vendor App ke storeUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 58
  - Pattern: api/delete-user
  - Text: - Customer App ke websiteUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 59
  - Pattern: api/delete-user
  - Text: - Vendor App ke storeUrl/api/delete-user.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 20
  - Pattern: onCall
  - Text: 2. Source Cloud Function memakai functions.https.onCall.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 36
  - Pattern: onRequest
  - Text: ### Pilihan B: Ubah Cloud Function menjadi onRequest

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 48
  - Pattern: onRequest
  - Text: Gunakan Pilihan B: Cloud Function deleteUser menjadi functions.https.onRequest.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 87
  - Pattern: onRequest
  - Text: - Buat patch deleteUser onRequest.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 20
  - Pattern: functions.https
  - Text: 2. Source Cloud Function memakai functions.https.onCall.

- File: docs\ERBETE_DELETE_USER_PATCH_PLAN.md
  - Line: 48
  - Pattern: functions.https
  - Text: Gunakan Pilihan B: Cloud Function deleteUser menjadi functions.https.onRequest.

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 10
  - Pattern: deleteUser
  - Text: - deleteUser local trigger: functions.https.onRequest

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 11
  - Pattern: deleteUser
  - Text: - deleteUser local safe test UID: __SAFE_TEST_DO_NOT_DELETE__

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 71
  - Pattern: deleteUser
  - Text: {   "status": "success",   "result": [     {       "platform": "gcfv1",       "id": "deleteUser",       "project": "erbete-putra",       "region": "us-central1",       "callableTrigger": {},       "entryPoint": "deleteUser",       "runtime" ...

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 79
  - Pattern: deleteUser
  - Text: 3. Deploy hanya boleh diarahkan ke functions:deleteUser, bukan semua functions.

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 80
  - Pattern: deleteUser
  - Text: 4. Deploy akan mengubah deleteUser dari callable menjadi HTTP request handler.

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 87
  - Pattern: deleteUser
  - Text: firebase deploy --only functions:deleteUser --project erbete-putra

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 92
  - Pattern: deleteUser
  - Text: Invoke-RestMethod -Method Post -Uri "https://us-central1-erbete-putra.cloudfunctions.net/deleteUser" -ContentType "application/json" -Body $body

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 13
  - Pattern: onCall
  - Text: - onCall removed locally: Yes

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 65
  - Pattern: onCall
  - Text: - has onCall: NO

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 10
  - Pattern: onRequest
  - Text: - deleteUser local trigger: functions.https.onRequest

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 64
  - Pattern: onRequest
  - Text: - has onRequest: YES

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 10
  - Pattern: functions.https
  - Text: - deleteUser local trigger: functions.https.onRequest

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 71
  - Pattern: cloudFunctions
  - Text: {   "status": "success",   "result": [     {       "platform": "gcfv1",       "id": "deleteUser",       "project": "erbete-putra",       "region": "us-central1",       "callableTrigger": {},       "entryPoint": "deleteUser",       "runtime" ...

- File: docs\ERBETE_DELETE_USER_RUNTIME_DECISION_REPORT.md
  - Line: 92
  - Pattern: cloudFunctions
  - Text: Invoke-RestMethod -Method Post -Uri "https://us-central1-erbete-putra.cloudfunctions.net/deleteUser" -ContentType "application/json" -Body $body

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 9
  - Pattern: deleteUser
  - Text: Mengaudit semua pemanggilan deleteUser / delete-user di source Flutter, Laravel, Firebase Functions, dan konfigurasi terkait.

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 18
  - Pattern: deleteUser
  - Text: - deleteUser

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 28
  - Pattern: deleteUser
  - Text: - deleteUserFromDb

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 40
  - Pattern: deleteUser
  - Text: Jika mayoritas app/panel memakai HTTP POST ke /deleteUser atau /api/delete-user:

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 43
  - Pattern: deleteUser
  - Text: Jika mayoritas app memakai Firebase callable SDK / httpsCallable('deleteUser'):

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 47
  - Pattern: deleteUser
  - Text: - Rekomendasi paling aman biasanya membuat function baru deleteUserHttp dan menjaga deleteUser lama sampai semua app dipatch.

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 9
  - Pattern: delete-user
  - Text: Mengaudit semua pemanggilan deleteUser / delete-user di source Flutter, Laravel, Firebase Functions, dan konfigurasi terkait.

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 19
  - Pattern: delete-user
  - Text: - delete-user

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 27
  - Pattern: delete-user
  - Text: - api/delete-user

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 40
  - Pattern: delete-user
  - Text: Jika mayoritas app/panel memakai HTTP POST ke /deleteUser atau /api/delete-user:

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 27
  - Pattern: api/delete-user
  - Text: - api/delete-user

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 40
  - Pattern: api/delete-user
  - Text: Jika mayoritas app/panel memakai HTTP POST ke /deleteUser atau /api/delete-user:

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 28
  - Pattern: deleteUserFromDb
  - Text: - deleteUserFromDb

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 20
  - Pattern: httpsCallable
  - Text: - httpsCallable

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 25
  - Pattern: httpsCallable
  - Text: - functions.httpsCallable

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 26
  - Pattern: httpsCallable
  - Text: - HttpsCallable

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 43
  - Pattern: httpsCallable
  - Text: Jika mayoritas app memakai Firebase callable SDK / httpsCallable('deleteUser'):

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 21
  - Pattern: onCall
  - Text: - onCall

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 44
  - Pattern: onCall
  - Text: - Lebih aman mengembalikan Cloud Function ke onCall agar tidak perlu patch banyak app.

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 22
  - Pattern: onRequest
  - Text: - onRequest

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 41
  - Pattern: onRequest
  - Text: - Lebih masuk akal mempertahankan onRequest, tetapi perlu endpoint baru atau delete/recreate function lama.

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 25
  - Pattern: functions.https
  - Text: - functions.httpsCallable

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 24
  - Pattern: FirebaseFunctions
  - Text: - FirebaseFunctions

- File: docs\ERBETE_DELETE_USER_SOURCE_CALL_AUDIT.md
  - Line: 23
  - Pattern: cloudFunctions
  - Text: - cloudFunctions

- File: docs\ERBETE_DELETE_USER_TARGETED_KNOWN_ROOTS_AUDIT.md
  - Line: 18
  - Pattern: delete-user
  - Text: - Jika Laravel panels hanya memakai /api/delete-user, itu jalur MySQL lokal.

- File: docs\ERBETE_DELETE_USER_TARGETED_KNOWN_ROOTS_AUDIT.md
  - Line: 18
  - Pattern: api/delete-user
  - Text: - Jika Laravel panels hanya memakai /api/delete-user, itu jalur MySQL lokal.

- File: docs\ERBETE_DELETE_USER_TARGETED_KNOWN_ROOTS_AUDIT.md
  - Line: 19
  - Pattern: onRequest
  - Text: - Jika Firebase Function hanya onRequest lokal, live callable masih perlu keputusan.

- File: docs\ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
  - Line: 9
  - Pattern: deleteUser
  - Text: Firebase menolak perubahan deleteUser dari callable menjadi HTTPS onRequest tanpa delete function lama.

- File: docs\ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
  - Line: 13
  - Pattern: deleteUser
  - Text: {   "status": "success",   "result": [     {       "platform": "gcfv1",       "id": "deleteUser",       "project": "erbete-putra",       "region": "us-central1",       "callableTrigger": {},       "entryPoint": "deleteUser",       "runtime" ...

- File: docs\ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
  - Line: 24
  - Pattern: deleteUser
  - Text: A. Delete function lama deleteUser lalu deploy ulang deleteUser sebagai HTTPS.

- File: docs\ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
  - Line: 25
  - Pattern: deleteUser
  - Text: - Kelebihan: endpoint tetap /deleteUser.

- File: docs\ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
  - Line: 28
  - Pattern: deleteUser
  - Text: B. Buat function baru deleteUserHttp lalu patch aplikasi agar memanggil endpoint baru.

- File: docs\ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
  - Line: 30
  - Pattern: deleteUser
  - Text: - Risiko: perlu patch aplikasi/panel yang memanggil deleteUser.

- File: docs\ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
  - Line: 35
  - Pattern: deleteUser
  - Text: Audit dulu semua pemanggilan deleteUser di Flutter/Laravel agar keputusan tidak merusak alur app.

- File: docs\ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
  - Line: 18
  - Pattern: onCall
  - Text: - has onCall: NO

- File: docs\ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
  - Line: 9
  - Pattern: onRequest
  - Text: Firebase menolak perubahan deleteUser dari callable menjadi HTTPS onRequest tanpa delete function lama.

- File: docs\ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
  - Line: 17
  - Pattern: onRequest
  - Text: - has onRequest: YES

- File: docs\ERBETE_DELETE_USER_TRIGGER_CHANGE_DECISION.md
  - Line: 13
  - Pattern: cloudFunctions
  - Text: {   "status": "success",   "result": [     {       "platform": "gcfv1",       "id": "deleteUser",       "project": "erbete-putra",       "region": "us-central1",       "callableTrigger": {},       "entryPoint": "deleteUser",       "runtime" ...

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT.md
  - Line: 40
  - Pattern: deleteUser
  - Text: - Jangan jalankan Cloud Function deleteUser.

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 131
  - Pattern: deleteUser
  - Text: TEXT: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 137
  - Pattern: deleteUser
  - Text: PREV: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 145
  - Pattern: deleteUser
  - Text: TEXT: log("deleteUserFromServer :: ${response.body}");

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 235
  - Pattern: deleteUser
  - Text: TEXT: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 236
  - Pattern: deleteUser
  - Text: NEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 241
  - Pattern: deleteUser
  - Text: PREV: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 242
  - Pattern: deleteUser
  - Text: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 269
  - Pattern: deleteUser
  - Text: TEXT: static Future<bool?> deleteUser() async {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 283
  - Pattern: deleteUser
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 324
  - Pattern: deleteUser
  - Text: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 338
  - Pattern: deleteUser
  - Text: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 352
  - Pattern: deleteUser
  - Text: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 366
  - Pattern: deleteUser
  - Text: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 380
  - Pattern: deleteUser
  - Text: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 603
  - Pattern: deleteUser
  - Text: TEXT: static Future<bool?> deleteUser() async {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 624
  - Pattern: deleteUser
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 665
  - Pattern: deleteUser
  - Text: TEXT: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 666
  - Pattern: deleteUser
  - Text: NEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 671
  - Pattern: deleteUser
  - Text: PREV: await controller.deleteUserFromServer();

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 672
  - Pattern: deleteUser
  - Text: TEXT: await FireStoreUtils.deleteUser().then((value) {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 880
  - Pattern: deleteUser
  - Text: TEXT: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 886
  - Pattern: deleteUser
  - Text: PREV: Future<bool> deleteUserFromServer() async {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 894
  - Pattern: deleteUser
  - Text: TEXT: log("deleteUserFromServer :: ${response.body}");

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 963
  - Pattern: deleteUser
  - Text: TEXT: static Future<bool?> deleteUser() async {

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 977
  - Pattern: deleteUser
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 1012
  - Pattern: deleteUser
  - Text: - Jangan jalankan Cloud Function deleteUser.

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 132
  - Pattern: delete-user
  - Text: NEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 138
  - Pattern: delete-user
  - Text: TEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 881
  - Pattern: delete-user
  - Text: NEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 887
  - Pattern: delete-user
  - Text: TEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 132
  - Pattern: api/delete-user
  - Text: NEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 138
  - Pattern: api/delete-user
  - Text: TEXT: var url = '${Constant.websiteUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 881
  - Pattern: api/delete-user
  - Text: NEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 887
  - Pattern: api/delete-user
  - Text: TEXT: var url = '${Constant.storeUrl}/api/delete-user';

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 283
  - Pattern: cloudFunctions
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 624
  - Pattern: cloudFunctions
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DELETE_USER_UNIFIED_AUDIT_V2.md
  - Line: 977
  - Pattern: cloudFunctions
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DRIVER_APP_DETAIL_AUDIT.md
  - Line: 494
  - Pattern: deleteUser
  - Text: NEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DRIVER_APP_DETAIL_AUDIT.md
  - Line: 498
  - Pattern: deleteUser
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DRIVER_APP_DETAIL_AUDIT.md
  - Line: 494
  - Pattern: cloudFunctions
  - Text: NEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_DRIVER_APP_DETAIL_AUDIT.md
  - Line: 498
  - Pattern: cloudFunctions
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_ECOSYSTEM_GIT_APP_MAP.md
  - Line: 71
  - Pattern: deleteUser
  - Text: - Vendor app memiliki referensi Cloud Function deleteUser berbasis Firebase projectId.

- File: docs\ERBETE_ECOSYSTEM_GIT_APP_MAP.md
  - Line: 64
  - Pattern: delete-user
  - Text: - Store Panel API: POST http://127.0.0.1:8001/api/delete-user

- File: docs\ERBETE_ECOSYSTEM_GIT_APP_MAP.md
  - Line: 65
  - Pattern: delete-user
  - Text: - Website Panel API: POST http://127.0.0.1:8002/api/delete-user

- File: docs\ERBETE_ECOSYSTEM_GIT_APP_MAP.md
  - Line: 70
  - Pattern: delete-user
  - Text: - Jalur Laravel lokal delete-user hanya menyentuh MySQL emart.

- File: docs\ERBETE_ECOSYSTEM_GIT_APP_MAP.md
  - Line: 64
  - Pattern: api/delete-user
  - Text: - Store Panel API: POST http://127.0.0.1:8001/api/delete-user

- File: docs\ERBETE_ECOSYSTEM_GIT_APP_MAP.md
  - Line: 65
  - Pattern: api/delete-user
  - Text: - Website Panel API: POST http://127.0.0.1:8002/api/delete-user

- File: docs\ERBETE_FIREBASE_ADMIN_INIT_PATCH_REPORT.md
  - Line: 20
  - Pattern: onRequest
  - Text: - has onRequest: YES

- File: docs\ERBETE_FIREBASE_CONFIG_PREDEPLOY_AUDIT.md
  - Line: 101
  - Pattern: deleteUser
  - Text: // PATCH: changed deleteUser to HTTP request handler

- File: docs\ERBETE_FIREBASE_CONFIG_PREDEPLOY_AUDIT.md
  - Line: 103
  - Pattern: deleteUser
  - Text: exports.deleteUser = functions.https.onRequest(async (req, res) => {

- File: docs\ERBETE_FIREBASE_CONFIG_PREDEPLOY_AUDIT.md
  - Line: 135
  - Pattern: deleteUser
  - Text: await admin.auth().deleteUser(cleanUid);

- File: docs\ERBETE_FIREBASE_CONFIG_PREDEPLOY_AUDIT.md
  - Line: 143
  - Pattern: deleteUser
  - Text: console.error('deleteUser error:', error);

- File: docs\ERBETE_FIREBASE_CONFIG_PREDEPLOY_AUDIT.md
  - Line: 162
  - Pattern: deleteUser
  - Text: [90mΓöîΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓö ...

- File: docs\ERBETE_FIREBASE_CONFIG_PREDEPLOY_AUDIT.md
  - Line: 103
  - Pattern: onRequest
  - Text: exports.deleteUser = functions.https.onRequest(async (req, res) => {

- File: docs\ERBETE_FIREBASE_CONFIG_PREDEPLOY_AUDIT.md
  - Line: 103
  - Pattern: functions.https
  - Text: exports.deleteUser = functions.https.onRequest(async (req, res) => {

- File: docs\ERBETE_FIREBASE_PROJECT_PREDEPLOY_CHECK_V2.md
  - Line: 19
  - Pattern: deleteUser
  - Text: [90mΓöîΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓö ...

- File: docs\ERBETE_FUNCTIONS_SOURCE_LOCATION_AUDIT.md
  - Line: 46
  - Pattern: deleteUser
  - Text: - Jika folder functions tidak ditemukan, berarti source Cloud Function deleteUser belum ada di workspace lokal.

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT.md
  - Line: 14
  - Pattern: delete-user
  - Text: - Tujuan audit ini adalah memastikan Store/Website memiliki route POST /api/delete-user dan controller yang sama/berbeda.

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT.md
  - Line: 14
  - Pattern: api/delete-user
  - Text: - Tujuan audit ini adalah memastikan Store/Website memiliki route POST /api/delete-user dan controller yang sama/berbeda.

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 203
  - Pattern: deleteUser
  - Text: NEXT: public function deleteUserFromDb(Request $request) {

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 209
  - Pattern: deleteUser
  - Text: TEXT: public function deleteUserFromDb(Request $request) {

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 2013
  - Pattern: deleteUser
  - Text: TEXT: Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 2271
  - Pattern: deleteUser
  - Text: NEXT: public function deleteUserFromDb(Request $request) {

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 2277
  - Pattern: deleteUser
  - Text: TEXT: public function deleteUserFromDb(Request $request) {

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 4368
  - Pattern: deleteUser
  - Text: TEXT: Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 2013
  - Pattern: delete-user
  - Text: TEXT: Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 4368
  - Pattern: delete-user
  - Text: TEXT: Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 7791
  - Pattern: delete-user
  - Text: - Audit ini hanya mencari route dan controller delete-user Laravel.

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 7792
  - Pattern: delete-user
  - Text: - Fokus utama: apakah Store/Website punya POST /api/delete-user dan apakah controller-nya menghapus MySQL users/vendor_users.

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 7792
  - Pattern: api/delete-user
  - Text: - Fokus utama: apakah Store/Website punya POST /api/delete-user dan apakah controller-nya menghapus MySQL users/vendor_users.

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 203
  - Pattern: deleteUserFromDb
  - Text: NEXT: public function deleteUserFromDb(Request $request) {

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 209
  - Pattern: deleteUserFromDb
  - Text: TEXT: public function deleteUserFromDb(Request $request) {

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 2013
  - Pattern: deleteUserFromDb
  - Text: TEXT: Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 2271
  - Pattern: deleteUserFromDb
  - Text: NEXT: public function deleteUserFromDb(Request $request) {

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 2277
  - Pattern: deleteUserFromDb
  - Text: TEXT: public function deleteUserFromDb(Request $request) {

- File: docs\ERBETE_LARAVEL_DELETE_USER_ROUTE_AUDIT_V2.md
  - Line: 4368
  - Pattern: deleteUserFromDb
  - Text: TEXT: Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 93
  - Pattern: deleteUser
  - Text: NEXT: exports.deleteUser = functions.https.onCall(async (data, context) => {

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 100
  - Pattern: deleteUser
  - Text: TEXT: exports.deleteUser = functions.https.onCall(async (data, context) => {

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 102
  - Pattern: deleteUser
  - Text: NEXT: await admin.auth().deleteUser(data.uid);

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 112
  - Pattern: deleteUser
  - Text: PREV: exports.deleteUser = functions.https.onCall(async (data, context) => {

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 114
  - Pattern: deleteUser
  - Text: TEXT: await admin.auth().deleteUser(data.uid);

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 1172
  - Pattern: deleteUser
  - Text: - Jika exports.deleteUser/admin.auth().deleteUser ditemukan, function ini bisa menjadi kandidat penghapus Firebase Auth resmi.

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 1173
  - Pattern: deleteUser
  - Text: - Jika tidak ditemukan, berarti endpoint deleteUser yang dipanggil app belum ada source-nya di folder ini.

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 93
  - Pattern: onCall
  - Text: NEXT: exports.deleteUser = functions.https.onCall(async (data, context) => {

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 100
  - Pattern: onCall
  - Text: TEXT: exports.deleteUser = functions.https.onCall(async (data, context) => {

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 112
  - Pattern: onCall
  - Text: PREV: exports.deleteUser = functions.https.onCall(async (data, context) => {

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 93
  - Pattern: functions.https
  - Text: NEXT: exports.deleteUser = functions.https.onCall(async (data, context) => {

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 100
  - Pattern: functions.https
  - Text: TEXT: exports.deleteUser = functions.https.onCall(async (data, context) => {

- File: docs\ERBETE_ORDER_TRACKING_FUNCTION_DELETE_USER_AUDIT.md
  - Line: 112
  - Pattern: functions.https
  - Text: PREV: exports.deleteUser = functions.https.onCall(async (data, context) => {

- File: docs\ERBETE_PREDEPLOY_AFTER_FIREBASERC_FIX.md
  - Line: 59
  - Pattern: deleteUser
  - Text: {   "status": "success",   "result": [     {       "platform": "gcfv1",       "id": "deleteUser",       "project": "erbete-putra",       "region": "us-central1",       "callableTrigger": {},       "entryPoint": "deleteUser",       "runtime" ...

- File: docs\ERBETE_PREDEPLOY_AFTER_FIREBASERC_FIX.md
  - Line: 62
  - Pattern: deleteUser
  - Text: [90mΓöîΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓö ...

- File: docs\ERBETE_PREDEPLOY_AFTER_FIREBASERC_FIX.md
  - Line: 73
  - Pattern: deleteUser
  - Text: - Deploy deleteUser dapat mengubah runtime deleteUser.

- File: docs\ERBETE_PREDEPLOY_AFTER_FIREBASERC_FIX.md
  - Line: 54
  - Pattern: onCall
  - Text: - has onCall: NO

- File: docs\ERBETE_PREDEPLOY_AFTER_FIREBASERC_FIX.md
  - Line: 53
  - Pattern: onRequest
  - Text: - has onRequest: YES

- File: docs\ERBETE_PREDEPLOY_AFTER_FIREBASERC_FIX.md
  - Line: 59
  - Pattern: cloudFunctions
  - Text: {   "status": "success",   "result": [     {       "platform": "gcfv1",       "id": "deleteUser",       "project": "erbete-putra",       "region": "us-central1",       "callableTrigger": {},       "entryPoint": "deleteUser",       "runtime" ...

- File: docs\ERBETE_PROJECT_ROOT_LOCATOR_FOR_DELETE_USER_AUDIT.md
  - Line: 23
  - Pattern: deleteUser
  - Text: ## Package Name And deleteUser Hits

- File: docs\ERBETE_PROJECT_ROOT_LOCATOR_FOR_DELETE_USER_AUDIT.md
  - Line: 31
  - Pattern: deleteUser
  - Text: - Package/deleteUser related hits: 0

- File: docs\ERBETE_VENDOR_APP_DETAIL_AUDIT.md
  - Line: 200
  - Pattern: deleteUser
  - Text: NEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_VENDOR_APP_DETAIL_AUDIT.md
  - Line: 204
  - Pattern: deleteUser
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_VENDOR_APP_DETAIL_AUDIT.md
  - Line: 200
  - Pattern: cloudFunctions
  - Text: NEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_VENDOR_APP_DETAIL_AUDIT.md
  - Line: 204
  - Pattern: cloudFunctions
  - Text: TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

- File: docs\ERBETE_WEB_APP_UNIFIED_FUNCTION_MAP_DRAFT.md
  - Line: 17
  - Pattern: deleteUser
  - Text: | Target | users | vendors | vendor_orders | settings | tax | wallet | zone | sections | notifications | Firestore | RealtimeDB | delete-user | deleteUser | cloudfunctions | api |

- File: docs\ERBETE_WEB_APP_UNIFIED_FUNCTION_MAP_DRAFT.md
  - Line: 37
  - Pattern: deleteUser
  - Text: | Delete User | users, vendor_users, /api/delete-user, deleteUser | App/Cloud Function | Laravel API/MySQL | Terbelah, wajib dikunci sebelum patch |

- File: docs\ERBETE_WEB_APP_UNIFIED_FUNCTION_MAP_DRAFT.md
  - Line: 17
  - Pattern: delete-user
  - Text: | Target | users | vendors | vendor_orders | settings | tax | wallet | zone | sections | notifications | Firestore | RealtimeDB | delete-user | deleteUser | cloudfunctions | api |

- File: docs\ERBETE_WEB_APP_UNIFIED_FUNCTION_MAP_DRAFT.md
  - Line: 37
  - Pattern: delete-user
  - Text: | Delete User | users, vendor_users, /api/delete-user, deleteUser | App/Cloud Function | Laravel API/MySQL | Terbelah, wajib dikunci sebelum patch |

- File: docs\ERBETE_WEB_APP_UNIFIED_FUNCTION_MAP_DRAFT.md
  - Line: 43
  - Pattern: delete-user
  - Text: - MySQL emart dipakai oleh Laravel panel untuk fungsi lokal tertentu, terutama jalur delete-user.

- File: docs\ERBETE_WEB_APP_UNIFIED_FUNCTION_MAP_DRAFT.md
  - Line: 37
  - Pattern: api/delete-user
  - Text: | Delete User | users, vendor_users, /api/delete-user, deleteUser | App/Cloud Function | Laravel API/MySQL | Terbelah, wajib dikunci sebelum patch |

- File: docs\ERBETE_WEB_APP_UNIFIED_FUNCTION_MAP_DRAFT.md
  - Line: 17
  - Pattern: cloudFunctions
  - Text: | Target | users | vendors | vendor_orders | settings | tax | wallet | zone | sections | notifications | Firestore | RealtimeDB | delete-user | deleteUser | cloudfunctions | api |

- File: docs\FIREBASE_APP_COLLECTION_SYNC_MAP_DRAFT.md
  - Line: 8068
  - Pattern: deleteUser
  - Text: LINE 11049: TEXT: Future<bool> deleteUserFromServer() async {

- File: docs\FIREBASE_APP_COLLECTION_SYNC_MAP_DRAFT.md
  - Line: 8074
  - Pattern: deleteUser
  - Text: LINE 11056: TEXT: log("deleteUserFromServer :: ${response.body}");

- File: docs\FIREBASE_APP_COLLECTION_SYNC_MAP_DRAFT.md
  - Line: 19817
  - Pattern: deleteUser
  - Text: LINE 11049: TEXT: Future<bool> deleteUserFromServer() async {

- File: docs\FIREBASE_APP_COLLECTION_SYNC_MAP_DRAFT.md
  - Line: 19823
  - Pattern: deleteUser
  - Text: LINE 11056: TEXT: log("deleteUserFromServer :: ${response.body}");

- File: docs\FIREBASE_APP_COLLECTION_SYNC_MAP_DRAFT.md
  - Line: 31566
  - Pattern: deleteUser
  - Text: LINE 11049: TEXT: Future<bool> deleteUserFromServer() async {

- File: docs\FIREBASE_APP_COLLECTION_SYNC_MAP_DRAFT.md
  - Line: 31572
  - Pattern: deleteUser
  - Text: LINE 11056: TEXT: log("deleteUserFromServer :: ${response.body}");

- File: docs\FIREBASE_APP_COLLECTION_SYNC_MAP_DRAFT.md
  - Line: 35265
  - Pattern: deleteUser
  - Text: - Belum boleh menjalankan deleteUser Firebase / Cloud Function.

- File: docs\FIRESTORE_SETTINGS_VERSION_URL_CHECKLIST.md
  - Line: 36
  - Pattern: delete-user
  - Text: https://contoh-store.com/api/delete-user

- File: docs\FIRESTORE_SETTINGS_VERSION_URL_CHECKLIST.md
  - Line: 40
  - Pattern: delete-user
  - Text: https://contoh-website.com/api/delete-user

- File: docs\FIRESTORE_SETTINGS_VERSION_URL_CHECKLIST.md
  - Line: 44
  - Pattern: delete-user
  - Text: https://contoh-provider.com/api/delete-user

- File: docs\FIRESTORE_SETTINGS_VERSION_URL_CHECKLIST.md
  - Line: 47
  - Pattern: delete-user
  - Text: Jangan test POST **/api/delete-user** dengan UUID asli karena dapat menghapus data.

- File: docs\FIRESTORE_SETTINGS_VERSION_URL_CHECKLIST.md
  - Line: 36
  - Pattern: api/delete-user
  - Text: https://contoh-store.com/api/delete-user

- File: docs\FIRESTORE_SETTINGS_VERSION_URL_CHECKLIST.md
  - Line: 40
  - Pattern: api/delete-user
  - Text: https://contoh-website.com/api/delete-user

- File: docs\FIRESTORE_SETTINGS_VERSION_URL_CHECKLIST.md
  - Line: 44
  - Pattern: api/delete-user
  - Text: https://contoh-provider.com/api/delete-user

- File: docs\FIRESTORE_SETTINGS_VERSION_URL_CHECKLIST.md
  - Line: 47
  - Pattern: api/delete-user
  - Text: Jangan test POST **/api/delete-user** dengan UUID asli karena dapat menghapus data.

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 15
  - Pattern: delete-user
  - Text: 8) Koneksi `storeUrl/websiteUrl` dengan endpoint `/api/delete-user`.

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 150
  - Pattern: delete-user
  - Text: ## 10. Hubungan `storeUrl` dengan delete-user

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 156
  - Pattern: delete-user
  - Text: - line 644: `var siteurl = settingData.storeUrl + "/api/delete-user";`

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 160
  - Pattern: delete-user
  - Text: - line 699: `var siteurl = settingData.storeUrl + "/api/delete-user";`

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 164
  - Pattern: delete-user
  - Text: - line 774: `var siteurl=settingData.storeUrl+"/api/delete-user";`

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 168
  - Pattern: delete-user
  - Text: ### 10.2 File yang memakai `websiteUrl` (untuk konteks delete-user)

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 171
  - Pattern: delete-user
  - Text: - line 481: `var siteurl = settingData.websiteUrl + "/api/delete-user";`

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 175
  - Pattern: delete-user
  - Text: - Dampak: endpoint delete-user dibangun dari base yang salah, misalnya `"/api/delete-user"` menuju domain yang tidak valid.

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 176
  - Pattern: delete-user
  - Text: - Potensi: delete-user gagal, UI tetap menampilkan state sukses/gagal tergantung implementasi response handling di luar baris hits.

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 179
  - Pattern: delete-user
  - Text: - Dampak: endpoint delete-user untuk konteks pengguna (users panel) gagal.

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 191
  - Pattern: delete-user
  - Text: 6) **Cross-panel delete-user**

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 195
  - Pattern: delete-user
  - Text: 1) Audit lanjutan (read-only) pada area request delete-user di masing-masing file (employee/stores/vendors/users):

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 15
  - Pattern: api/delete-user
  - Text: 8) Koneksi `storeUrl/websiteUrl` dengan endpoint `/api/delete-user`.

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 156
  - Pattern: api/delete-user
  - Text: - line 644: `var siteurl = settingData.storeUrl + "/api/delete-user";`

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 160
  - Pattern: api/delete-user
  - Text: - line 699: `var siteurl = settingData.storeUrl + "/api/delete-user";`

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 164
  - Pattern: api/delete-user
  - Text: - line 774: `var siteurl=settingData.storeUrl+"/api/delete-user";`

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 171
  - Pattern: api/delete-user
  - Text: - line 481: `var siteurl = settingData.websiteUrl + "/api/delete-user";`

- File: docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md
  - Line: 175
  - Pattern: api/delete-user
  - Text: - Dampak: endpoint delete-user dibangun dari base yang salah, misalnya `"/api/delete-user"` menuju domain yang tidak valid.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 4
  - Pattern: delete-user
  - Text: Tujuan tahap ini adalah memastikan `routes/api.php` benar-benar dimuat oleh Laravel dan apakah route `api/delete-user` tersedia.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 7
  - Pattern: delete-user
  - Text: - `routes/api.php` di project ini **tidak** berisi route `delete-user`.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 9
  - Pattern: delete-user
  - Text: - Karena `delete-user` tidak ditemukan di `routes/api.php`, tidak perlu patch `RouteServiceProvider` untuk menambahkan prefix `api` (prefix sudah ada di `RouteServiceProvider`).

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 15
  - Pattern: delete-user
  - Text: 2) `php artisan route:list --path=api/delete-user`

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 22
  - Pattern: delete-user
  - Text: - Tidak ada route `api/delete-user`.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 24
  - Pattern: delete-user
  - Text: 4) `php artisan route:list | findstr /i "delete-user"`

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 31
  - Pattern: delete-user
  - Text: - Tidak ada route `delete-user`.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 39
  - Pattern: delete-user
  - Text: - (Dibaca hanya untuk konteks; tidak relevan dengan `api/delete-user`.)

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 42
  - Pattern: delete-user
  - Text: - Route yang dimaksud `api/delete-user` **tidak ada** di `routes/api.php` saat ini.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 43
  - Pattern: delete-user
  - Text: - Karena itu, Laravel route:list memang tidak menemukan `api/delete-user`.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 4
  - Pattern: api/delete-user
  - Text: Tujuan tahap ini adalah memastikan `routes/api.php` benar-benar dimuat oleh Laravel dan apakah route `api/delete-user` tersedia.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 15
  - Pattern: api/delete-user
  - Text: 2) `php artisan route:list --path=api/delete-user`

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 22
  - Pattern: api/delete-user
  - Text: - Tidak ada route `api/delete-user`.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 39
  - Pattern: api/delete-user
  - Text: - (Dibaca hanya untuk konteks; tidak relevan dengan `api/delete-user`.)

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 42
  - Pattern: api/delete-user
  - Text: - Route yang dimaksud `api/delete-user` **tidak ada** di `routes/api.php` saat ini.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT.md
  - Line: 43
  - Pattern: api/delete-user
  - Text: - Karena itu, Laravel route:list memang tidak menemukan `api/delete-user`.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 11
  - Pattern: deleteUser
  - Text: - `Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');`

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 15
  - Pattern: deleteUser
  - Text: - `deleteUserFromDb(Request $request)`

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 44
  - Pattern: deleteUser
  - Text: - controller method `deleteUserFromDb` ada

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 11
  - Pattern: delete-user
  - Text: - `Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');`

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 33
  - Pattern: delete-user
  - Text: ## Hasil `php artisan route:list --path=api` dan pencarian `delete-user`

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 38
  - Pattern: delete-user
  - Text: - Namun dari pemeriksaan file langsung, `routes/api.php` pada **target storepanel** memang sudah memiliki `delete-user`.

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 42
  - Pattern: delete-user
  - Text: - Target `C:\deploy\storepanel` sebenarnya **memiliki** route `api/delete-user`:

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 43
  - Pattern: delete-user
  - Text: - `routes/api.php` mendefinisikan `/delete-user`

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 42
  - Pattern: api/delete-user
  - Text: - Target `C:\deploy\storepanel` sebenarnya **memiliki** route `api/delete-user`:

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 11
  - Pattern: deleteUserFromDb
  - Text: - `Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');`

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 15
  - Pattern: deleteUserFromDb
  - Text: - `deleteUserFromDb(Request $request)`

- File: docs\STORE_PANEL_API_ROUTE_LOAD_REPORT_CORRECT_TARGET.md
  - Line: 44
  - Pattern: deleteUserFromDb
  - Text: - controller method `deleteUserFromDb` ada

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 12
  - Pattern: deleteUser
  - Text: - Name: deleteUserFromDb

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 13
  - Pattern: deleteUser
  - Text: - Action: ApiController@deleteUserFromDb

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 20
  - Pattern: deleteUser
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 71
  - Pattern: deleteUser
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 4
  - Pattern: delete-user
  - Text: Store Panel berhasil diverifikasi sampai route API penting api/delete-user terbaca oleh Laravel.

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 11
  - Pattern: delete-user
  - Text: - POST api/delete-user

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 17
  - Pattern: delete-user
  - Text: php artisan route:list --path=api/delete-user

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 20
  - Pattern: delete-user
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 68
  - Pattern: delete-user
  - Text: Store Panel sudah siap dari sisi route receiver api/delete-user.

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 71
  - Pattern: delete-user
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 75
  - Pattern: delete-user
  - Text: - pastikan C:\deploy\websitepanel\routes\api.php juga memiliki route api/delete-user

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 4
  - Pattern: api/delete-user
  - Text: Store Panel berhasil diverifikasi sampai route API penting api/delete-user terbaca oleh Laravel.

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 11
  - Pattern: api/delete-user
  - Text: - POST api/delete-user

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 17
  - Pattern: api/delete-user
  - Text: php artisan route:list --path=api/delete-user

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 20
  - Pattern: api/delete-user
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 68
  - Pattern: api/delete-user
  - Text: Store Panel sudah siap dari sisi route receiver api/delete-user.

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 71
  - Pattern: api/delete-user
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 75
  - Pattern: api/delete-user
  - Text: - pastikan C:\deploy\websitepanel\routes\api.php juga memiliki route api/delete-user

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 12
  - Pattern: deleteUserFromDb
  - Text: - Name: deleteUserFromDb

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 13
  - Pattern: deleteUserFromDb
  - Text: - Action: ApiController@deleteUserFromDb

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 20
  - Pattern: deleteUserFromDb
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\STORE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 71
  - Pattern: deleteUserFromDb
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_CORRECT_TARGET_REPORT.md
  - Line: 89
  - Pattern: deleteUser
  - Text: - `Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');`

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_CORRECT_TARGET_REPORT.md
  - Line: 90
  - Pattern: deleteUser
  - Text: - `C:\deploy\storepanel\app\Http\Controllers\ApiController.php` berisi method `deleteUserFromDb`.

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_CORRECT_TARGET_REPORT.md
  - Line: 74
  - Pattern: delete-user
  - Text: ### 3) `php artisan route:list --path=api/delete-user`

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_CORRECT_TARGET_REPORT.md
  - Line: 86
  - Pattern: delete-user
  - Text: ## Catatan tentang `delete-user` route (untuk konteks)

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_CORRECT_TARGET_REPORT.md
  - Line: 89
  - Pattern: delete-user
  - Text: - `Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');`

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_CORRECT_TARGET_REPORT.md
  - Line: 74
  - Pattern: api/delete-user
  - Text: ### 3) `php artisan route:list --path=api/delete-user`

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_CORRECT_TARGET_REPORT.md
  - Line: 89
  - Pattern: deleteUserFromDb
  - Text: - `Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');`

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_CORRECT_TARGET_REPORT.md
  - Line: 90
  - Pattern: deleteUserFromDb
  - Text: - `C:\deploy\storepanel\app\Http\Controllers\ApiController.php` berisi method `deleteUserFromDb`.

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_REPORT.md
  - Line: 75
  - Pattern: delete-user
  - Text: ### 2) `php artisan route:list --path=api/delete-user`

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_REPORT.md
  - Line: 81
  - Pattern: delete-user
  - Text: Catatan: Meski berhasil boot (artinya guard berfungsi), route `api/delete-user` tidak cocok dengan kondisi route matching di aplikasi saat ini.

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_REPORT.md
  - Line: 75
  - Pattern: api/delete-user
  - Text: ### 2) `php artisan route:list --path=api/delete-user`

- File: docs\STORE_PANEL_FIRESTORE_BOOT_GUARD_REPORT.md
  - Line: 81
  - Pattern: api/delete-user
  - Text: Catatan: Meski berhasil boot (artinya guard berfungsi), route `api/delete-user` tidak cocok dengan kondisi route matching di aplikasi saat ini.

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 134
  - Pattern: deleteUser
  - Text: - delete men-trigger penghapusan Firestore documents + memanggil endpoint eksternal (storeUrl) dan Cloud Function deleteUser (detail ada di laporan delete-user sebelumnya)

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 170
  - Pattern: deleteUser
  - Text: - Ini mengindikasikan minimal ada **website/store backend terpisah** yang menerima endpoint deleteUser.

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 181
  - Pattern: deleteUser
  - Text: - admin panel delete vendor => Firestore delete + external delete-user + Cloud Function deleteUser

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 134
  - Pattern: delete-user
  - Text: - delete men-trigger penghapusan Firestore documents + memanggil endpoint eksternal (storeUrl) dan Cloud Function deleteUser (detail ada di laporan delete-user sebelumnya)

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 156
  - Pattern: delete-user
  - Text: - Namun di context admin panel delete-user sudah ada field setting yang relevan secara deduktif:

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 157
  - Pattern: delete-user
  - Text: - doc `settings/Version` berisi `storeUrl` (dipakai untuk `/api/delete-user`)

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 169
  - Pattern: delete-user
  - Text: - Dari temuan delete-user, admin panel menyimpan `settings/Version.storeUrl` dan memanggil endpoint eksternal `{storeUrl}/api/delete-user`.

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 179
  - Pattern: delete-user
  - Text: - `POST /api/delete-user` dan payload `{"uuid": ...}`

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 181
  - Pattern: delete-user
  - Text: - admin panel delete vendor => Firestore delete + external delete-user + Cloud Function deleteUser

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 157
  - Pattern: api/delete-user
  - Text: - doc `settings/Version` berisi `storeUrl` (dipakai untuk `/api/delete-user`)

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 169
  - Pattern: api/delete-user
  - Text: - Dari temuan delete-user, admin panel menyimpan `settings/Version.storeUrl` dan memanggil endpoint eksternal `{storeUrl}/api/delete-user`.

- File: docs\STORE_WEBSITE_PANEL_AUDIT_START.md
  - Line: 179
  - Pattern: api/delete-user
  - Text: - `POST /api/delete-user` dan payload `{"uuid": ...}`

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 33
  - Pattern: deleteUser
  - Text: - C:\deploy\storepanel\routes\api.php:20 => Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 34
  - Pattern: deleteUser
  - Text: - C:\deploy\storepanel\app\Http\Controllers\ApiController.php:13 => public function deleteUserFromDb(Request $request) {

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 37
  - Pattern: deleteUser
  - Text: - C:\deploy\websitepanel\routes\api.php:19 => Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 38
  - Pattern: deleteUser
  - Text: - C:\deploy\websitepanel\app\Http\Controllers\ApiController.php:13 => public function deleteUserFromDb(Request $request) {

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 33
  - Pattern: delete-user
  - Text: - C:\deploy\storepanel\routes\api.php:20 => Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 37
  - Pattern: delete-user
  - Text: - C:\deploy\websitepanel\routes\api.php:19 => Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 62
  - Pattern: delete-user
  - Text: - Tidak test POST /api/delete-user.

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 62
  - Pattern: api/delete-user
  - Text: - Tidak test POST /api/delete-user.

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 33
  - Pattern: deleteUserFromDb
  - Text: - C:\deploy\storepanel\routes\api.php:20 => Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 34
  - Pattern: deleteUserFromDb
  - Text: - C:\deploy\storepanel\app\Http\Controllers\ApiController.php:13 => public function deleteUserFromDb(Request $request) {

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 37
  - Pattern: deleteUserFromDb
  - Text: - C:\deploy\websitepanel\routes\api.php:19 => Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_FINAL_REPORT.md
  - Line: 38
  - Pattern: deleteUserFromDb
  - Text: - C:\deploy\websitepanel\app\Http\Controllers\ApiController.php:13 => public function deleteUserFromDb(Request $request) {

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 5
  - Pattern: delete-user
  - Text: - Store Panel (receiver `/api/delete-user`)

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 6
  - Pattern: delete-user
  - Text: - Website Panel (receiver `/api/delete-user`)

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 29
  - Pattern: delete-user
  - Text: Yang harus ada untuk receiver delete-user:

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 34
  - Pattern: delete-user
  - Text: - route `Route::post('/delete-user', ...)`

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 46
  - Pattern: delete-user
  - Text: Yang harus ada untuk receiver delete-user:

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 51
  - Pattern: delete-user
  - Text: - route `Route::post('/delete-user', ...)`

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 88
  - Pattern: delete-user
  - Text: - Store Panel: `POST /api/delete-user`

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 89
  - Pattern: delete-user
  - Text: - Website Panel: `POST /api/delete-user`

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 99
  - Pattern: delete-user
  - Text: - receiver `/api/delete-user` belum auth-protected (perlu audit saat source panel tersedia)

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 126
  - Pattern: delete-user
  - Text: - Tidak test delete-user dengan uuid asli ✅

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 5
  - Pattern: api/delete-user
  - Text: - Store Panel (receiver `/api/delete-user`)

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 6
  - Pattern: api/delete-user
  - Text: - Website Panel (receiver `/api/delete-user`)

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 88
  - Pattern: api/delete-user
  - Text: - Store Panel: `POST /api/delete-user`

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 89
  - Pattern: api/delete-user
  - Text: - Website Panel: `POST /api/delete-user`

- File: docs\STORE_WEBSITE_PANEL_BUILD_READINESS_REPORT.md
  - Line: 99
  - Pattern: api/delete-user
  - Text: - receiver `/api/delete-user` belum auth-protected (perlu audit saat source panel tersedia)

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 124
  - Pattern: deleteUser
  - Text: - `https://us-central1-${projectId}.cloudfunctions.net/deleteUser`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 159
  - Pattern: deleteUser
  - Text: - Ada dual path delete: endpoint `{storeUrl}/api/delete-user` dan Cloud Function `deleteUser`.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 199
  - Pattern: deleteUser
  - Text: - Cloud Function `deleteUser`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 13
  - Pattern: delete-user
  - Text: - Koneksi lintas panel via `storeUrl` / endpoint `.../api/delete-user`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 119
  - Pattern: delete-user
  - Text: - `siteurl = settingData.storeUrl + "/api/delete-user"`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 127
  - Pattern: delete-user
  - Text: ## 10. Temuan `storeUrl` dan `/api/delete-user`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 132
  - Pattern: delete-user
  - Text: - `POST {storeUrl}/api/delete-user`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 136
  - Pattern: delete-user
  - Text: - **Website Panel** kemungkinan berada di service yang menerima endpoint `/api/delete-user`.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 159
  - Pattern: delete-user
  - Text: - Ada dual path delete: endpoint `{storeUrl}/api/delete-user` dan Cloud Function `deleteUser`.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 165
  - Pattern: delete-user
  - Text: - Temukan implementasi route/controller untuk `POST /api/delete-user` di repo terkait.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 173
  - Pattern: delete-user
  - Text: - cari file/route yang mengandung `/api/delete-user`, `storeUrl`, `website`, dan `Version`.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 198
  - Pattern: delete-user
  - Text: - `settings/Version.storeUrl + "/api/delete-user"`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 202
  - Pattern: delete-user
  - Text: - **Belum ditemukan secara pasti kode “Website Panel”** (controller/route implementasi `/api/delete-user`) karena audit lintas repo belum dijalankan pada tahap ini.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 203
  - Pattern: delete-user
  - Text: - Namun endpoint `/api/delete-user` jelas disebut sebagai target untuk sinkronisasi penghapusan.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 209
  - Pattern: delete-user
  - Text: - Cari implementasi backend `POST /api/delete-user` di repo terkait (kemungkinan `emart-panel-safe` atau repo website lain) menggunakan keyword route dan handler yang sama.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 13
  - Pattern: api/delete-user
  - Text: - Koneksi lintas panel via `storeUrl` / endpoint `.../api/delete-user`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 119
  - Pattern: api/delete-user
  - Text: - `siteurl = settingData.storeUrl + "/api/delete-user"`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 127
  - Pattern: api/delete-user
  - Text: ## 10. Temuan `storeUrl` dan `/api/delete-user`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 132
  - Pattern: api/delete-user
  - Text: - `POST {storeUrl}/api/delete-user`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 136
  - Pattern: api/delete-user
  - Text: - **Website Panel** kemungkinan berada di service yang menerima endpoint `/api/delete-user`.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 159
  - Pattern: api/delete-user
  - Text: - Ada dual path delete: endpoint `{storeUrl}/api/delete-user` dan Cloud Function `deleteUser`.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 165
  - Pattern: api/delete-user
  - Text: - Temukan implementasi route/controller untuk `POST /api/delete-user` di repo terkait.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 173
  - Pattern: api/delete-user
  - Text: - cari file/route yang mengandung `/api/delete-user`, `storeUrl`, `website`, dan `Version`.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 198
  - Pattern: api/delete-user
  - Text: - `settings/Version.storeUrl + "/api/delete-user"`

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 202
  - Pattern: api/delete-user
  - Text: - **Belum ditemukan secara pasti kode “Website Panel”** (controller/route implementasi `/api/delete-user`) karena audit lintas repo belum dijalankan pada tahap ini.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 203
  - Pattern: api/delete-user
  - Text: - Namun endpoint `/api/delete-user` jelas disebut sebagai target untuk sinkronisasi penghapusan.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 209
  - Pattern: api/delete-user
  - Text: - Cari implementasi backend `POST /api/delete-user` di repo terkait (kemungkinan `emart-panel-safe` atau repo website lain) menggunakan keyword route dan handler yang sama.

- File: docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md
  - Line: 124
  - Pattern: cloudFunctions
  - Text: - `https://us-central1-${projectId}.cloudfunctions.net/deleteUser`

- File: docs\STORE_WEBSITE_RUNTIME_FIREBASE_GUARD_AND_LOGIN_INIT_REPORT.md
  - Line: 56
  - Pattern: delete-user
  - Text: - Route delete-user sudah terverifikasi.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 41
  - Pattern: deleteUser
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:87 => | employee | resources/views/employee/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": driverId}` | `driverId` (Fireb ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 42
  - Pattern: deleteUser
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:89 => | stores | resources/views/stores/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": item_data.id}` | `item_data.id` (u ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 43
  - Pattern: deleteUser
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:91 => | vendors | resources/views/vendors/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase do ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 95
  - Pattern: deleteUser
  - Text: - C:\deploy\adminpanel\docs\STORE_WEBSITE_PANEL_AUDIT_START.md:134 => - delete men-trigger penghapusan Firestore documents + memanggil endpoint eksternal (storeUrl) dan Cloud Function deleteUser (detail ada di laporan delete-user sebelumnya ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 118
  - Pattern: deleteUser
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:90 => | users | resources/views/users/index.blade.php | `settings/Version.websiteUrl` | `websiteUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase do ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 172
  - Pattern: deleteUser
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:118 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:90 => | users | resources/views/users/index.blade.php | `settings/Version.websiteUrl` | `websiteUrl + ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 200
  - Pattern: deleteUser
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:88 => | providers | resources/views/providers/index.blade.php | `settings/Version.providerUrl` | `providerUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (u ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 236
  - Pattern: deleteUser
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:200 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:88 => | providers | resources/views/providers/index.blade.php | `settings/Version.providerUrl` | `pro ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 9
  - Pattern: delete-user
  - Text: Agar bisa mengetahui receiver backend untuk /api/delete-user.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 28
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 35
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php:670 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 37
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:758 => var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 41
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:87 => | employee | resources/views/employee/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": driverId}` | `driverId` (Fireb ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 42
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:89 => | stores | resources/views/stores/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": item_data.id}` | `item_data.id` (u ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 43
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:91 => | vendors | resources/views/vendors/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase do ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 44
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 47
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:27 => 644	                    var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 49
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:143 => 699	                            var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 51
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:254 => 774	                var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 52
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:6 => "C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php","644","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 53
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:13 => "C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php","670","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 54
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:15 => "C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php","758","var siteurl=settingData.storeUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 55
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:21 => "C:\deploy\adminpanel\resources\views\employee\index.blade.php","644","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 56
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:28 => "C:\deploy\adminpanel\resources\views\stores\index.blade.php","699","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 57
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:30 => "C:\deploy\adminpanel\resources\views\vendors\index.blade.php","774","var siteurl=settingData.storeUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 58
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:4 => "C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php","644","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-use ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 59
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:6 => "C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php","670","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 60
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:8 => "C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php","758","var siteurl=settingData.storeUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 61
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:12 => "C:\deploy\adminpanel\resources\views\employee\index.blade.php","644","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 62
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:14 => "C:\deploy\adminpanel\resources\views\stores\index.blade.php","699","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 63
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:16 => "C:\deploy\adminpanel\resources\views\vendors\index.blade.php","774","var siteurl=settingData.storeUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 64
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:23 => - C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 65
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:25 => - C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php:670 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 66
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:27 => - C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:758 => var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 67
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:28 => - C:\deploy\adminpanel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 68
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:30 => - C:\deploy\adminpanel\resources\views\stores\index.blade.php:699 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 69
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:32 => - C:\deploy\adminpanel\resources\views\vendors\index.blade.php:774 => var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 75
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:15 => 8) Koneksi `storeUrl/websiteUrl` dengan endpoint `/api/delete-user`.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 83
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:150 => ## 10. Hubungan `storeUrl` dengan delete-user

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 87
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:156 => - line 644: `var siteurl = settingData.storeUrl + "/api/delete-user";`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 89
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:160 => - line 699: `var siteurl = settingData.storeUrl + "/api/delete-user";`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 91
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:164 => - line 774: `var siteurl=settingData.storeUrl+"/api/delete-user";`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 95
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\STORE_WEBSITE_PANEL_AUDIT_START.md:134 => - delete men-trigger penghapusan Firestore documents + memanggil endpoint eksternal (storeUrl) dan Cloud Function deleteUser (detail ada di laporan delete-user sebelumnya ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 96
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\STORE_WEBSITE_PANEL_AUDIT_START.md:157 => - doc `settings/Version` berisi `storeUrl` (dipakai untuk `/api/delete-user`)

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 99
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\STORE_WEBSITE_PANEL_AUDIT_START.md:169 => - Dari temuan delete-user, admin panel menyimpan `settings/Version.storeUrl` dan memanggil endpoint eksternal `{storeUrl}/api/delete-user`.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 104
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md:13 => - Koneksi lintas panel via `storeUrl` / endpoint `.../api/delete-user`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 116
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php:495 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 118
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:90 => | users | resources/views/users/index.blade.php | `settings/Version.websiteUrl` | `websiteUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase do ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 119
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 122
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:198 => 481	                var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 123
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:14 => "C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php","495","var siteurl = settingData.websiteUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 124
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:29 => "C:\deploy\adminpanel\resources\views\users\index.blade.php","481","var siteurl = settingData.websiteUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 125
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:7 => "C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php","495","var siteurl = settingData.websiteUrl + ""/api/delete-user"";","delete-user ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 126
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:15 => "C:\deploy\adminpanel\resources\views\users\index.blade.php","481","var siteurl = settingData.websiteUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 127
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:26 => - C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php:495 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 128
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:31 => - C:\deploy\adminpanel\resources\views\users\index.blade.php:481 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 134
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:15 => 8) Koneksi `storeUrl/websiteUrl` dengan endpoint `/api/delete-user`.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 140
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:168 => ### 10.2 File yang memakai `websiteUrl` (untuk konteks delete-user)

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 142
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:171 => - line 481: `var siteurl = settingData.websiteUrl + "/api/delete-user";`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 152
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:44 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 154
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:75 => - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:15 => 8) Koneksi `storeUrl/websiteUrl` dengan endpoint `/api/delete-user`.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 170
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:116 => - C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php:495 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 172
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:118 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:90 => | users | resources/views/users/index.blade.php | `settings/Version.websiteUrl` | `websiteUrl + ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 173
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:119 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 176
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:122 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:198 => 481	                var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 177
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:123 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:14 => "C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php","495","var siteurl = sett ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 178
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:124 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:29 => "C:\deploy\adminpanel\resources\views\users\index.blade.php","481","var siteurl = settingData.webs ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 179
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:125 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:7 => "C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php","495","var siteu ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 180
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:126 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:15 => "C:\deploy\adminpanel\resources\views\users\index.blade.php","481","var siteurl = settin ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 181
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:127 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:26 => - C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php:495 => var siteurl = set ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 182
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:128 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:31 => - C:\deploy\adminpanel\resources\views\users\index.blade.php:481 => var siteurl = settingData.web ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 194
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 200
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:88 => | providers | resources/views/providers/index.blade.php | `settings/Version.providerUrl` | `providerUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (u ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 201
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 204
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:87 => 596	                            var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 205
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:11 => "C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php","596","var siteurl=settingData.providerUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 206
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:26 => "C:\deploy\adminpanel\resources\views\providers\index.blade.php","596","var siteurl=settingData.providerUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 207
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:5 => "C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php","596","var siteurl=settingData.providerUrl+""/api/delete-user"";","delete-use ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 208
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:13 => "C:\deploy\adminpanel\resources\views\providers\index.blade.php","596","var siteurl=settingData.providerUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 209
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:24 => - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 210
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:29 => - C:\deploy\adminpanel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 218
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:44 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 220
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:119 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 222
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:152 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:44 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/provider ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 224
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:173 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:119 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/provide ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 230
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:194 => - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 236
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:200 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:88 => | providers | resources/views/providers/index.blade.php | `settings/Version.providerUrl` | `pro ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 237
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:201 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 240
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:204 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:87 => 596	                            var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 241
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:205 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:11 => "C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php","596","var siteurl=se ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 242
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:206 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:26 => "C:\deploy\adminpanel\resources\views\providers\index.blade.php","596","var siteurl=settingData.pr ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 243
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:207 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:5 => "C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php","596","var s ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 244
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:208 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:13 => "C:\deploy\adminpanel\resources\views\providers\index.blade.php","596","var siteurl=sett ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 245
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:209 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:24 => - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=s ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 246
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:210 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:29 => - C:\deploy\adminpanel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.p ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 254
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:218 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:44 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/provider ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 256
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:220 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:119 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/provide ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 258
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:222 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:152 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:44 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_C ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 260
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:224 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:173 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:119 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_ ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 266
  - Pattern: delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:230 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:194 => - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.pr ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 403
  - Pattern: delete-user
  - Text: 4. Baru audit receiver /api/delete-user pada repo tersebut.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 9
  - Pattern: api/delete-user
  - Text: Agar bisa mengetahui receiver backend untuk /api/delete-user.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 28
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 35
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php:670 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 37
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:758 => var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 41
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:87 => | employee | resources/views/employee/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": driverId}` | `driverId` (Fireb ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 42
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:89 => | stores | resources/views/stores/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": item_data.id}` | `item_data.id` (u ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 43
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:91 => | vendors | resources/views/vendors/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase do ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 44
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 47
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:27 => 644	                    var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 49
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:143 => 699	                            var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 51
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:254 => 774	                var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 52
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:6 => "C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php","644","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 53
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:13 => "C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php","670","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 54
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:15 => "C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php","758","var siteurl=settingData.storeUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 55
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:21 => "C:\deploy\adminpanel\resources\views\employee\index.blade.php","644","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 56
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:28 => "C:\deploy\adminpanel\resources\views\stores\index.blade.php","699","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 57
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:30 => "C:\deploy\adminpanel\resources\views\vendors\index.blade.php","774","var siteurl=settingData.storeUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 58
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:4 => "C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php","644","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-use ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 59
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:6 => "C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php","670","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 60
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:8 => "C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php","758","var siteurl=settingData.storeUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 61
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:12 => "C:\deploy\adminpanel\resources\views\employee\index.blade.php","644","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 62
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:14 => "C:\deploy\adminpanel\resources\views\stores\index.blade.php","699","var siteurl = settingData.storeUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 63
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:16 => "C:\deploy\adminpanel\resources\views\vendors\index.blade.php","774","var siteurl=settingData.storeUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 64
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:23 => - C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 65
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:25 => - C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php:670 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 66
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:27 => - C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:758 => var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 67
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:28 => - C:\deploy\adminpanel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 68
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:30 => - C:\deploy\adminpanel\resources\views\stores\index.blade.php:699 => var siteurl = settingData.storeUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 69
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:32 => - C:\deploy\adminpanel\resources\views\vendors\index.blade.php:774 => var siteurl=settingData.storeUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 75
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:15 => 8) Koneksi `storeUrl/websiteUrl` dengan endpoint `/api/delete-user`.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 87
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:156 => - line 644: `var siteurl = settingData.storeUrl + "/api/delete-user";`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 89
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:160 => - line 699: `var siteurl = settingData.storeUrl + "/api/delete-user";`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 91
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:164 => - line 774: `var siteurl=settingData.storeUrl+"/api/delete-user";`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 96
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\STORE_WEBSITE_PANEL_AUDIT_START.md:157 => - doc `settings/Version` berisi `storeUrl` (dipakai untuk `/api/delete-user`)

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 99
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\STORE_WEBSITE_PANEL_AUDIT_START.md:169 => - Dari temuan delete-user, admin panel menyimpan `settings/Version.storeUrl` dan memanggil endpoint eksternal `{storeUrl}/api/delete-user`.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 104
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md:13 => - Koneksi lintas panel via `storeUrl` / endpoint `.../api/delete-user`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 116
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php:495 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 118
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:90 => | users | resources/views/users/index.blade.php | `settings/Version.websiteUrl` | `websiteUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (Firebase do ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 119
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 122
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:198 => 481	                var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 123
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:14 => "C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php","495","var siteurl = settingData.websiteUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 124
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:29 => "C:\deploy\adminpanel\resources\views\users\index.blade.php","481","var siteurl = settingData.websiteUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 125
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:7 => "C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php","495","var siteurl = settingData.websiteUrl + ""/api/delete-user"";","delete-user ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 126
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:15 => "C:\deploy\adminpanel\resources\views\users\index.blade.php","481","var siteurl = settingData.websiteUrl + ""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 127
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:26 => - C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php:495 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 128
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:31 => - C:\deploy\adminpanel\resources\views\users\index.blade.php:481 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 134
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:15 => 8) Koneksi `storeUrl/websiteUrl` dengan endpoint `/api/delete-user`.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 142
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:171 => - line 481: `var siteurl = settingData.websiteUrl + "/api/delete-user";`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 152
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:44 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 154
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:75 => - C:\deploy\adminpanel\docs\GLOBAL_BLADE_WEBSITE_STORE_SETTINGS_DETAIL_REPORT.md:15 => 8) Koneksi `storeUrl/websiteUrl` dengan endpoint `/api/delete-user`.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 170
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:116 => - C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php:495 => var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 172
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:118 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:90 => | users | resources/views/users/index.blade.php | `settings/Version.websiteUrl` | `websiteUrl + ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 173
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:119 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 176
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:122 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:198 => 481	                var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 177
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:123 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:14 => "C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php","495","var siteurl = sett ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 178
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:124 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:29 => "C:\deploy\adminpanel\resources\views\users\index.blade.php","481","var siteurl = settingData.webs ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 179
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:125 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:7 => "C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php","495","var siteu ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 180
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:126 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:15 => "C:\deploy\adminpanel\resources\views\users\index.blade.php","481","var siteurl = settin ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 181
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:127 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:26 => - C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php:495 => var siteurl = set ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 182
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:128 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:31 => - C:\deploy\adminpanel\resources\views\users\index.blade.php:481 => var siteurl = settingData.web ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 194
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 200
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:88 => | providers | resources/views/providers/index.blade.php | `settings/Version.providerUrl` | `providerUrl + "/api/delete-user"` | `{"uuid": userId}` | `userId` (u ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 201
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 204
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:87 => 596	                            var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 205
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:11 => "C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php","596","var siteurl=settingData.providerUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 206
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:26 => "C:\deploy\adminpanel\resources\views\providers\index.blade.php","596","var siteurl=settingData.providerUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 207
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:5 => "C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php","596","var siteurl=settingData.providerUrl+""/api/delete-user"";","delete-use ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 208
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:13 => "C:\deploy\adminpanel\resources\views\providers\index.blade.php","596","var siteurl=settingData.providerUrl+""/api/delete-user"";","delete-user"

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 209
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:24 => - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 210
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:29 => - C:\deploy\adminpanel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 218
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:44 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 220
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:119 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 222
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:152 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:44 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/provider ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 224
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:173 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:119 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/provide ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 230
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:194 => - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 236
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:200 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:88 => | providers | resources/views/providers/index.blade.php | `settings/Version.providerUrl` | `pro ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 237
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:201 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/providerUrl + "/api/delete-user"`

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 240
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:204 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_EXCERPTS.txt:87 => 596	                            var siteurl=settingData.providerUrl+"/api/delete-user";

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 241
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:205 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:11 => "C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php","596","var siteurl=se ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 242
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:206 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv:26 => "C:\deploy\adminpanel\resources\views\providers\index.blade.php","596","var siteurl=settingData.pr ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 243
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:207 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:5 => "C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php","596","var s ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 244
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:208 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv:13 => "C:\deploy\adminpanel\resources\views\providers\index.blade.php","596","var siteurl=sett ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 245
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:209 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:24 => - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=s ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 246
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:210 => - C:\deploy\adminpanel\docs\DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT.md:29 => - C:\deploy\adminpanel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.p ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 254
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:218 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:44 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/provider ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 256
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:220 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:119 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:97 => - `storeUrl/websiteUrl/provide ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 258
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:222 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:152 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:44 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_C ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 260
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:224 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:173 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:119 => - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_ ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 266
  - Pattern: api/delete-user
  - Text: - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:230 => - C:\deploy\adminpanel\docs\URL_VALUE_DISCOVERY_REPORT.md:194 => - C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.pr ...

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 403
  - Pattern: api/delete-user
  - Text: 4. Baru audit receiver /api/delete-user pada repo tersebut.

- File: docs\URL_VALUE_DISCOVERY_REPORT.md
  - Line: 41
  - Pattern: cloudFunctions
  - Text: - C:\deploy\adminpanel\docs\DELETE_USER_FLOW_CROSS_MODULE_AUDIT_REPORT.md:87 => | employee | resources/views/employee/index.blade.php | `settings/Version.storeUrl` | `storeUrl + "/api/delete-user"` | `{"uuid": driverId}` | `driverId` (Fireb ...

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 4
  - Pattern: deleteUser
  - Text: Mencari kode Website Panel / Store Panel yang menerima endpoint **POST /api/delete-user** (atau variasinya yang terkait `deleteUser`/`delete_user`) sehingga sinkron dengan logika penghapusan user dari Admin Panel Store.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 19
  - Pattern: deleteUser
  - Text: `delete-user`, `/api/delete-user`, `api/delete-user`, `deleteUser`, `delete_user`, `destroyUser`, `removeUser`, `uuid`, `storeUrl`, `store_url`, `Version`, `website`

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 23
  - Pattern: deleteUser
  - Text: - Namun, Admin Panel **mengirim request eksternal** ke endpoint `{$settings.storeUrl}/api/delete-user` dan juga memanggil **Cloud Function** `deleteUser` saat proses delete store/vendor.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 29
  - Pattern: deleteUser
  - Text: - **Tidak ada** route `delete-user` / `deleteUser` / `delete_user` di `routes/api.php`.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 57
  - Pattern: deleteUser
  - Text: ### Cloud Function call (terkait deleteUser)

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 60
  - Pattern: deleteUser
  - Text: - `https://us-central1-${projectId}.cloudfunctions.net/deleteUser`

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 76
  - Pattern: deleteUser
  - Text: 3. Memanggil Cloud Function `deleteUser` (kemungkinan menghapus Firebase Auth / atau operasi lain yang terkait).

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 85
  - Pattern: deleteUser
  - Text: - `Route::post('/api/delete-user'` atau `post('/delete-user'` atau `deleteUser`

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 4
  - Pattern: delete-user
  - Text: Mencari kode Website Panel / Store Panel yang menerima endpoint **POST /api/delete-user** (atau variasinya yang terkait `deleteUser`/`delete_user`) sehingga sinkron dengan logika penghapusan user dari Admin Panel Store.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 19
  - Pattern: delete-user
  - Text: `delete-user`, `/api/delete-user`, `api/delete-user`, `deleteUser`, `delete_user`, `destroyUser`, `removeUser`, `uuid`, `storeUrl`, `store_url`, `Version`, `website`

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 22
  - Pattern: delete-user
  - Text: - **Tidak ditemukan route API** di `routes/api.php` maupun `routes/web.php` yang secara eksplisit mendefinisikan `POST /api/delete-user`.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 23
  - Pattern: delete-user
  - Text: - Namun, Admin Panel **mengirim request eksternal** ke endpoint `{$settings.storeUrl}/api/delete-user` dan juga memanggil **Cloud Function** `deleteUser` saat proses delete store/vendor.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 25
  - Pattern: delete-user
  - Text: ## 6. Apakah routes/api.php ada dan apa isinya terkait delete-user

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 29
  - Pattern: delete-user
  - Text: - **Tidak ada** route `delete-user` / `deleteUser` / `delete_user` di `routes/api.php`.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 35
  - Pattern: delete-user
  - Text: ## 8. Apakah endpoint POST /api/delete-user ditemukan

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 38
  - Pattern: delete-user
  - Text: - Tetapi endpoint **dipanggil** dari Admin Panel melalui `settings/Version.storeUrl + '/api/delete-user'`.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 51
  - Pattern: delete-user
  - Text: - `siteurl = settingData.storeUrl + "/api/delete-user"`

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 75
  - Pattern: delete-user
  - Text: 2. Memanggil endpoint eksternal `storeUrl + /api/delete-user` untuk delete user (kemungkinan ke MySQL/user via storeUrl).

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 85
  - Pattern: delete-user
  - Text: - `Route::post('/api/delete-user'` atau `post('/delete-user'` atau `deleteUser`

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 4
  - Pattern: api/delete-user
  - Text: Mencari kode Website Panel / Store Panel yang menerima endpoint **POST /api/delete-user** (atau variasinya yang terkait `deleteUser`/`delete_user`) sehingga sinkron dengan logika penghapusan user dari Admin Panel Store.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 19
  - Pattern: api/delete-user
  - Text: `delete-user`, `/api/delete-user`, `api/delete-user`, `deleteUser`, `delete_user`, `destroyUser`, `removeUser`, `uuid`, `storeUrl`, `store_url`, `Version`, `website`

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 22
  - Pattern: api/delete-user
  - Text: - **Tidak ditemukan route API** di `routes/api.php` maupun `routes/web.php` yang secara eksplisit mendefinisikan `POST /api/delete-user`.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 23
  - Pattern: api/delete-user
  - Text: - Namun, Admin Panel **mengirim request eksternal** ke endpoint `{$settings.storeUrl}/api/delete-user` dan juga memanggil **Cloud Function** `deleteUser` saat proses delete store/vendor.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 35
  - Pattern: api/delete-user
  - Text: ## 8. Apakah endpoint POST /api/delete-user ditemukan

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 38
  - Pattern: api/delete-user
  - Text: - Tetapi endpoint **dipanggil** dari Admin Panel melalui `settings/Version.storeUrl + '/api/delete-user'`.

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 51
  - Pattern: api/delete-user
  - Text: - `siteurl = settingData.storeUrl + "/api/delete-user"`

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 75
  - Pattern: api/delete-user
  - Text: 2. Memanggil endpoint eksternal `storeUrl + /api/delete-user` untuk delete user (kemungkinan ke MySQL/user via storeUrl).

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 85
  - Pattern: api/delete-user
  - Text: - `Route::post('/api/delete-user'` atau `post('/delete-user'` atau `deleteUser`

- File: docs\WEBSITE_PANEL_DELETE_USER_ENDPOINT_AUDIT_REPORT.md
  - Line: 60
  - Pattern: cloudFunctions
  - Text: - `https://us-central1-${projectId}.cloudfunctions.net/deleteUser`

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 12
  - Pattern: deleteUser
  - Text: - Name: deleteUserFromDb

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 13
  - Pattern: deleteUser
  - Text: - Action: ApiController@deleteUserFromDb

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 20
  - Pattern: deleteUser
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 58
  - Pattern: deleteUser
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 4
  - Pattern: delete-user
  - Text: Website Panel berhasil diverifikasi sampai route API penting api/delete-user terbaca oleh Laravel.

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 11
  - Pattern: delete-user
  - Text: - POST api/delete-user

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 17
  - Pattern: delete-user
  - Text: php artisan route:list --path=api/delete-user

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 20
  - Pattern: delete-user
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 35
  - Pattern: delete-user
  - Text: POST api/delete-user

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 38
  - Pattern: delete-user
  - Text: Selama route:list muncul banyak HTML redirect ke http://localhost/set-location, tetapi route api/delete-user tetap berhasil tampil.

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 55
  - Pattern: delete-user
  - Text: Website Panel sudah siap dari sisi route receiver api/delete-user.

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 58
  - Pattern: delete-user
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 60
  - Pattern: delete-user
  - Text: Dengan ini, Store Panel dan Website Panel sama-sama sudah memiliki receiver delete-user yang dapat diverifikasi.

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 4
  - Pattern: api/delete-user
  - Text: Website Panel berhasil diverifikasi sampai route API penting api/delete-user terbaca oleh Laravel.

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 11
  - Pattern: api/delete-user
  - Text: - POST api/delete-user

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 17
  - Pattern: api/delete-user
  - Text: php artisan route:list --path=api/delete-user

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 20
  - Pattern: api/delete-user
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 35
  - Pattern: api/delete-user
  - Text: POST api/delete-user

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 38
  - Pattern: api/delete-user
  - Text: Selama route:list muncul banyak HTML redirect ke http://localhost/set-location, tetapi route api/delete-user tetap berhasil tampil.

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 55
  - Pattern: api/delete-user
  - Text: Website Panel sudah siap dari sisi route receiver api/delete-user.

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 58
  - Pattern: api/delete-user
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 12
  - Pattern: deleteUserFromDb
  - Text: - Name: deleteUserFromDb

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 13
  - Pattern: deleteUserFromDb
  - Text: - Action: ApiController@deleteUserFromDb

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 20
  - Pattern: deleteUserFromDb
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\WEBSITE_PANEL_DELETE_USER_ROUTE_VERIFIED_REPORT.md
  - Line: 58
  - Pattern: deleteUserFromDb
  - Text: POST api/delete-user ... deleteUserFromDb -> ApiController@deleteUserFromDb

- File: docs\WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_REPORT.md
  - Line: 6
  - Pattern: deleteUser
  - Text: - variasi string: `delete-user`, `deleteUser`, `delete_user`, `destroyUser`, `removeUser`

- File: docs\WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_REPORT.md
  - Line: 5
  - Pattern: delete-user
  - Text: - `POST /api/delete-user`

- File: docs\WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_REPORT.md
  - Line: 6
  - Pattern: delete-user
  - Text: - variasi string: `delete-user`, `deleteUser`, `delete_user`, `destroyUser`, `removeUser`

- File: docs\WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_REPORT.md
  - Line: 41
  - Pattern: delete-user
  - Text: ## 7. Hasil pencarian endpoint delete-user

- File: docs\WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_REPORT.md
  - Line: 67
  - Pattern: delete-user
  - Text: - `Route::post('/delete-user'` / `router.post('/api/delete-user'`

- File: docs\WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_REPORT.md
  - Line: 5
  - Pattern: api/delete-user
  - Text: - `POST /api/delete-user`

- File: docs\WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_REPORT.md
  - Line: 67
  - Pattern: api/delete-user
  - Text: - `Route::post('/delete-user'` / `router.post('/api/delete-user'`

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 369
  - Pattern: onCall
  - Text: var cbCalled, onCalled = false;

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 378
  - Pattern: onCall
  - Text: onCalled = true;

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 387
  - Pattern: onCall
  - Text: ok(!onCalled, 'nodeSelected should not fire');

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 395
  - Pattern: onCall
  - Text: var cbCalled, onCalled = false;

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 404
  - Pattern: onCall
  - Text: onCalled = true;

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 414
  - Pattern: onCall
  - Text: ok(!onCalled, 'nodeSelected should not fire');

- File: public\assets\plugins\tinymce\tinymce.min.js
  - Line: 2
  - Pattern: onRequest
  - Text: !function(e,t){"use strict";function n(e,t){for(var n,r=[],i=0;i<e.length;++i){if(n=s[e[i]]||o(e[i]),!n)throw"module definition dependecy not found: "+e[i];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid modu ...

- File: public\js\bootstrap.min.js
  - Line: 6
  - Pattern: onCall
  - Text: !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstr ...

- File: resources\views\deliveryman\index.blade.php
  - Line: 656
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\deliveryman\index.blade.php
  - Line: 656
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\drivers\index.blade.php
  - Line: 941
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\drivers\index.blade.php
  - Line: 941
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\employee\index.blade.php
  - Line: 627
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\employee\index.blade.php
  - Line: 644
  - Pattern: delete-user
  - Text: var siteurl = settingData.storeUrl + "/api/delete-user";

- File: resources\views\employee\index.blade.php
  - Line: 644
  - Pattern: api/delete-user
  - Text: var siteurl = settingData.storeUrl + "/api/delete-user";

- File: resources\views\employee\index.blade.php
  - Line: 627
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\fleet_drivers\index.blade.php
  - Line: 644
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\fleet_drivers\index.blade.php
  - Line: 644
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\OnDemandService\workers\index.blade.php
  - Line: 550
  - Pattern: deleteUser
  - Text: var deleteUser = deleteUserData(dataId);

- File: resources\views\OnDemandService\workers\index.blade.php
  - Line: 563
  - Pattern: deleteUser
  - Text: var deleteUser = deleteUserData(id);

- File: resources\views\OnDemandService\workers\index.blade.php
  - Line: 593
  - Pattern: deleteUser
  - Text: async function deleteUserData(userId) {

- File: resources\views\OnDemandService\workers\index.blade.php
  - Line: 602
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\OnDemandService\workers\index.blade.php
  - Line: 602
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\owners\driver_list.blade.php
  - Line: 719
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\owners\driver_list.blade.php
  - Line: 719
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\owners\index.blade.php
  - Line: 600
  - Pattern: deleteUser
  - Text: return deleteUserData(dataId, VendorId);

- File: resources\views\owners\index.blade.php
  - Line: 618
  - Pattern: deleteUser
  - Text: async function deleteUserData(userId,vendorId) {

- File: resources\views\owners\index.blade.php
  - Line: 643
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\owners\index.blade.php
  - Line: 664
  - Pattern: deleteUser
  - Text: return deleteUserData(id, VendorId);

- File: resources\views\owners\index.blade.php
  - Line: 643
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\providers\index.blade.php
  - Line: 507
  - Pattern: deleteUser
  - Text: return deleteUserData(dataId);

- File: resources\views\providers\index.blade.php
  - Line: 523
  - Pattern: deleteUser
  - Text: async function deleteUserData(userId) {

- File: resources\views\providers\index.blade.php
  - Line: 535
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\providers\index.blade.php
  - Line: 620
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\providers\index.blade.php
  - Line: 639
  - Pattern: deleteUser
  - Text: return deleteUserData(id);

- File: resources\views\providers\index.blade.php
  - Line: 596
  - Pattern: delete-user
  - Text: var siteurl=settingData.providerUrl+"/api/delete-user";

- File: resources\views\providers\index.blade.php
  - Line: 596
  - Pattern: api/delete-user
  - Text: var siteurl=settingData.providerUrl+"/api/delete-user";

- File: resources\views\providers\index.blade.php
  - Line: 535
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\providers\index.blade.php
  - Line: 620
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\section\index.blade.php
  - Line: 352
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\section\index.blade.php
  - Line: 352
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\stores\index.blade.php
  - Line: 718
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\stores\index.blade.php
  - Line: 699
  - Pattern: delete-user
  - Text: var siteurl = settingData.storeUrl + "/api/delete-user";

- File: resources\views\stores\index.blade.php
  - Line: 699
  - Pattern: api/delete-user
  - Text: var siteurl = settingData.storeUrl + "/api/delete-user";

- File: resources\views\stores\index.blade.php
  - Line: 718
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\users\index.blade.php
  - Line: 457
  - Pattern: deleteUser
  - Text: const getStoreName = deleteUserData(dataId);

- File: resources\views\users\index.blade.php
  - Line: 467
  - Pattern: deleteUser
  - Text: async function deleteUserData(userId) {

- File: resources\views\users\index.blade.php
  - Line: 505
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\users\index.blade.php
  - Line: 522
  - Pattern: deleteUser
  - Text: const getStoreName = deleteUserData(id);

- File: resources\views\users\index.blade.php
  - Line: 481
  - Pattern: delete-user
  - Text: var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: resources\views\users\index.blade.php
  - Line: 481
  - Pattern: api/delete-user
  - Text: var siteurl = settingData.websiteUrl + "/api/delete-user";

- File: resources\views\users\index.blade.php
  - Line: 505
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\vendors\index.blade.php
  - Line: 708
  - Pattern: deleteUser
  - Text: return deleteUserData(dataId, VendorId);

- File: resources\views\vendors\index.blade.php
  - Line: 726
  - Pattern: deleteUser
  - Text: async function deleteUserData(userId,vendorId) {

- File: resources\views\vendors\index.blade.php
  - Line: 795
  - Pattern: deleteUser
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- File: resources\views\vendors\index.blade.php
  - Line: 816
  - Pattern: deleteUser
  - Text: return deleteUserData(id, VendorId);

- File: resources\views\vendors\index.blade.php
  - Line: 774
  - Pattern: delete-user
  - Text: var siteurl=settingData.storeUrl+"/api/delete-user";

- File: resources\views\vendors\index.blade.php
  - Line: 774
  - Pattern: api/delete-user
  - Text: var siteurl=settingData.storeUrl+"/api/delete-user";

- File: resources\views\vendors\index.blade.php
  - Line: 795
  - Pattern: cloudFunctions
  - Text: url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',

- Root matches: 1052
- Status: ROOT_AUDIT_DONE

## ROOT: C:\deploy\storepanel
- Exists: True
- Files scanned: 2147
- File: app\Http\Controllers\ApiController.php
  - Line: 13
  - Pattern: deleteUser
  - Text: public function deleteUserFromDb(Request $request) {

- File: app\Http\Controllers\ApiController.php
  - Line: 13
  - Pattern: deleteUserFromDb
  - Text: public function deleteUserFromDb(Request $request) {

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 369
  - Pattern: onCall
  - Text: var cbCalled, onCalled = false;

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 378
  - Pattern: onCall
  - Text: onCalled = true;

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 387
  - Pattern: onCall
  - Text: ok(!onCalled, 'nodeSelected should not fire');

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 395
  - Pattern: onCall
  - Text: var cbCalled, onCalled = false;

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 404
  - Pattern: onCall
  - Text: onCalled = true;

- File: public\assets\plugins\bootstrap-treeview-master\tests\tests.js
  - Line: 414
  - Pattern: onCall
  - Text: ok(!onCalled, 'nodeSelected should not fire');

## Summary

- Total files scanned: 7149
- Total matches: 1060

STATUS: ROBUST_KNOWN_ROOTS_AUDIT_FOUND_MATCHES

## Catatan

Jika Order Tracking Firebase Function tidak memunculkan onRequest/deleteUser, berarti audit belum membaca root function dengan benar.
Jika Laravel panel tidak memunculkan api/delete-user, berarti route/controller delete user mungkin berada di source lain atau belum ada di copy C:\deploy.
Jika Flutter belum ditemukan, perlu locator khusus untuk pubspec.yaml dengan drive scan terbatas.

Larangan:
- Belum patch source.
- Belum delete function.
- Belum deploy ulang.
- Belum safe test.
- Jangan test UID user asli.
- Jangan git add .
- Jangan commit/push.