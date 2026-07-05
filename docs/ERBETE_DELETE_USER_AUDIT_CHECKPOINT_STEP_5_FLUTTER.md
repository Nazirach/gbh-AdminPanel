# ERBETE DELETE USER AUDIT CHECKPOINT STEP 5 FLUTTER

Generated: 06/28/2026 14:39:09

Mode: checkpoint-only. No patch. No delete. No deploy. No commit.

## Source Flutter

- Root: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7
- Apps found: customer, driver, vendor

## Customer App

- Has deleteUserFromServer(): YES
- deleteUserFromServer endpoint: Constant.websiteUrl + /api/delete-user
- Purpose: Website Panel MySQL users/vendor_users delete
- Has FireStoreUtils.deleteUser(): YES
- FireStoreUtils.deleteUser deletes Firestore users/currentUid, then calls Cloud Function deleteUser
- Cloud Function request body: data.uid
- UI caller found: NO, not yet proven

## Driver App

- Has deleteUser(): YES
- deleteUser uses FirebaseAuth.instance.currentUser?.delete() for current logged-in driver
- Has deleteDriverId(uid): YES
- deleteDriverId endpoint: https://us-central1-projectId.cloudfunctions.net/deleteUser
- deleteDriverId request body: data.uid
- Active caller found: YES
- Caller: owner_home_controller.dart deleteDriver(driverId)
- Flow: deleteDriver(driverId) -> deleteDriverId(driverId) -> Cloud Function deleteUser -> delete Firestore users/driverId

## Vendor App

- Has deleteUserFromServer(): YES
- deleteUserFromServer endpoint: Constant.storeUrl + /api/delete-user
- Purpose: Store Panel MySQL users/vendor_users delete
- Has FireStoreUtils.deleteUser(): YES
- FireStoreUtils.deleteUser deletes vendor-related Firestore data, users/currentUid, then calls Cloud Function deleteUser
- Cloud Function request body: data.uid
- UI caller found: NO, not yet proven

## Critical Finding

- Driver App actively depends on Cloud Function deleteUser as HTTP POST.
- Current live Firebase deleteUser is still callable old trigger.
- Local Function source is already patched to HTTP onRequest.
- Deploy failed because Firebase does not allow callable -> HTTP trigger change without deleting/recreating the function.

## Status

STATUS: DELETE_USER_AUDIT_STEP_5_FLUTTER_CHECKPOINT_CREATED

Larangan:
- Belum patch Flutter.
- Belum delete Firebase Function.
- Belum deploy ulang.
- Belum safe test.
- Jangan test UID user asli.
- Jangan git add .
- Jangan commit/push.