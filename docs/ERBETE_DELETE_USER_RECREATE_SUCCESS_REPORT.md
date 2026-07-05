# ERBETE DELETE USER RECREATE SUCCESS REPORT

Generated: 06/28/2026 14:50:53

## Final Result

- Firebase project: erbete-putra
- Function: deleteUser
- Region: us-central1
- Old live trigger: callable
- Old runtime: nodejs10
- New live trigger: https
- New version: v2
- New runtime: nodejs22
- Function URL: https://us-central1-erbete-putra.cloudfunctions.net/deleteUser

## Actions Completed

1. Confirmed local source uses functions.https.onRequest.
2. Confirmed local source has __SAFE_TEST_DO_NOT_DELETE__ bypass.
3. Confirmed live function was callable old trigger.
4. Deleted old callable deleteUser function.
5. Recreated deleteUser as HTTP/HTTPS function.
6. Ran safe-test with __SAFE_TEST_DO_NOT_DELETE__.
7. Verified live function list after recreate.

## Safe Test Result

- Request body used data.uid = __SAFE_TEST_DO_NOT_DELETE__
- Response status: True
- Response message: SAFE_TEST_OK: endpoint reached, Firebase Auth delete bypassed.
- No real Firebase Auth user was deleted during safe-test.

## Why This Fix Was Needed

- Flutter Driver App actively posts to Cloud Function deleteUser using HTTP.
- Live Firebase previously had deleteUser as callable.
- Firebase rejected direct callable-to-HTTP trigger change.
- Delete/recreate was required to keep the same endpoint name /deleteUser.

## Current Delete User Map

- Driver App deleteDriver(driverId) -> FireStoreUtils.deleteDriverId(driverId) -> HTTP deleteUser -> Firebase Auth delete.
- Store Panel /api/delete-user -> MySQL users/vendor_users delete.
- Website Panel /api/delete-user -> MySQL users/vendor_users delete.
- Customer/Vendor apps contain delete functions, but UI caller was not proven during audit.

## Remaining Notes

- Do not test with real UID unless a controlled test user is created.
- Other functions remain old nodejs10 v1: deliveryDispatch, parcelDispatch, propagateUserProfileUpdates, rideDispatch.
- Cleanup policy prompt appeared during deploy; monitor Artifact Registry cleanup if needed.

## Status

STATUS: DELETE_USER_RECREATE_SUCCESS

Larangan lanjutan:
- Jangan test UID user asli.
- Jangan git add .
- Jangan commit/push sebelum review perubahan.