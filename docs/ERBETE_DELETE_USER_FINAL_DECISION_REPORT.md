# ERBETE DELETE USER FINAL DECISION REPORT

Generated: 06/28/2026 14:40:13

Mode: decision-only. No patch. No delete. No deploy. No safe test.

## Audit Summary

- Firebase Function local source: deleteUser is HTTP onRequest.
- Firebase live function: deleteUser is still callable old trigger.
- Previous deploy failed because Firebase does not allow callable -> HTTP trigger change directly.
- Admin Panel: no direct delete-user route found in quick check.
- Store Panel: POST /api/delete-user deletes MySQL users and vendor_users.
- Website Panel: POST /api/delete-user deletes MySQL users and vendor_users.
- Customer App: has deleteUserFromServer and FireStoreUtils.deleteUser, but UI caller not proven.
- Vendor App: has deleteUserFromServer and FireStoreUtils.deleteUser, but UI caller not proven.
- Driver App: active caller found. owner_home_controller.dart deleteDriver(driverId) calls FireStoreUtils.deleteDriverId(driverId), which POSTs to Cloud Function deleteUser.

## Technical Decision

Recommended option: OPTION A - Delete and recreate Firebase Function deleteUser as HTTP onRequest.

Reason:
- Existing Flutter source already points to /deleteUser.
- Driver App actively depends on /deleteUser HTTP POST.
- Creating a new function name would require Flutter patch and APK rebuild.
- Keeping the same function name minimizes app-side change.

## Risk

- Short downtime during delete/recreate.
- Must not test with a real UID.
- Must safe-test only with __SAFE_TEST_DO_NOT_DELETE__.

## Next Safe Execution Plan

1. Confirm local function source is still HTTP onRequest.
2. Delete live callable deleteUser only after confirmation.
3. Deploy deleteUser as HTTP onRequest.
4. Run safe test using __SAFE_TEST_DO_NOT_DELETE__.
5. Record response and status.

## Status

STATUS: DELETE_USER_FINAL_DECISION_REPORT_CREATED

Larangan:
- Belum menjalankan firebase functions:delete.
- Belum deploy ulang.
- Belum safe test.
- Jangan test UID asli.
- Jangan git add .
- Jangan commit/push.