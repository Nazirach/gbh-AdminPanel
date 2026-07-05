# ERBETE LIVE FUNCTION METADATA MAP REPORT

Generated: 06/28/2026 15:55:26

Mode: audit-only. No patch. No deploy. No delete. No commit.

## Source

- firebase functions:list --project erbete-putra --json
- JSON saved at: C:\deploy\adminpanel\docs\firebase-functions-list-live.json

## deleteUser

- Platform: gcfv2
- Runtime: nodejs22
- Trigger: https
- Region: us-central1
- State: ACTIVE
- URI: https://us-central1-erbete-putra.cloudfunctions.net/deleteUser
- Status: already recreated successfully

## deliveryDispatch

- Platform: gcfv1
- Runtime: nodejs10
- Trigger: Firestore document.write
- Resource: vendor_orders/{orderID}
- Hash: 3d7a9859555807164feb330f45f934a2b79b52de
- Source status: local source found

## parcelDispatch

- Platform: gcfv1
- Runtime: nodejs10
- Trigger: Firestore document.write
- Resource: parcel_orders/{orderID}
- Hash: 3d7a9859555807164feb330f45f934a2b79b52de
- Source status: source not found locally

## rideDispatch

- Platform: gcfv1
- Runtime: nodejs10
- Trigger: Firestore document.write
- Resource: rides/{orderID}
- Hash: 3d7a9859555807164feb330f45f934a2b79b52de
- Source status: source not found locally

## propagateUserProfileUpdates

- Platform: gcfv1
- Runtime: nodejs10
- Trigger: Firestore document.update
- Resource: users/{userID}
- Hash: 3d7a9859555807164feb330f45f934a2b79b52de
- Source status: source not found locally

## Critical Finding

- deliveryDispatch, parcelDispatch, rideDispatch, and propagateUserProfileUpdates share the same Firebase Functions hash.
- They also share the same sourceUploadUrl in the functions:list JSON.
- This strongly indicates they were deployed together from one old source package.
- The current local source does not contain all four v1 function exports.

## Safe Decision

- Keep deleteUser as-is.
- Do not deploy all functions from the current local source.
- Do not delete parcelDispatch.
- Do not delete rideDispatch.
- Do not delete propagateUserProfileUpdates.
- Future reconstruction must follow the live trigger map:
  - vendor_orders/{orderID}
  - parcel_orders/{orderID}
  - rides/{orderID}
  - users/{userID}

## Status

STATUS: LIVE_FUNCTION_METADATA_MAP_CREATED