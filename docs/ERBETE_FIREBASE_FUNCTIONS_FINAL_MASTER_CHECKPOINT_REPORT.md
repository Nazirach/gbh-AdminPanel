# ERBETE FIREBASE FUNCTIONS FINAL MASTER CHECKPOINT REPORT

Generated: 06/28/2026 17:05:47

Mode: final checkpoint only. No patch. No deploy. No delete. No commit.

## Current System Position

- deleteUser has been safely recreated as HTTPS v2 nodejs22.
- deliveryDispatch source exists locally.
- parcelDispatch is live-only/source-missing.
- rideDispatch is live-only/source-missing.
- propagateUserProfileUpdates is live-only/source-missing.
- All live-only functions must be preserved.
- Do not run firebase deploy --only functions from incomplete local source.

## Live Functions

| Function | Runtime | Trigger | Source Status | Decision |
|---|---|---|---|---|
| deleteUser | nodejs22 gcfv2 | HTTPS | recreated | keep as-is |
| deliveryDispatch | nodejs10 gcfv1 | vendor_orders/{orderID} write | source found | can be used as reference only |
| parcelDispatch | nodejs10 gcfv1 | parcel_orders/{orderID} write | live-only | do not delete/recreate yet |
| rideDispatch | nodejs10 gcfv1 | rides/{orderID} write | live-only | do not delete/recreate yet |
| propagateUserProfileUpdates | nodejs10 gcfv1 | users/{userID} update | live-only | do not delete/recreate yet |

## Completed Audit Reports

- ERBETE_DELETE_USER_AUDIT_CHECKPOINT_STEP_1_TO_4.md
- ERBETE_DELETE_USER_AUDIT_CHECKPOINT_STEP_5_FLUTTER.md
- ERBETE_DELETE_USER_FINAL_DECISION_REPORT.md
- ERBETE_DELETE_USER_RECREATE_SUCCESS_REPORT.md
- ERBETE_FIREBASE_REMAINING_NODEJS10_FUNCTIONS_AUDIT.md
- ERBETE_FIREBASE_LIVE_ONLY_FUNCTIONS_REPORT.md
- ERBETE_ORDER_TRACKING_ZIP_EXTRACT_AUDIT_REPORT.md
- ERBETE_LIVE_ONLY_FUNCTIONS_ZIP_SEARCH_FINAL_REPORT.md
- ERBETE_OLD_FUNCTION_SOURCE_TRACE_SEARCH_REPORT.md
- ERBETE_LIVE_FUNCTION_METADATA_MAP_REPORT.md
- ERBETE_DISPATCH_RECONSTRUCTION_MAP_REPORT.md
- ERBETE_DRIVER_ACTION_TRANSITION_MAP_REPORT.md
- ERBETE_USER_DISPATCH_ELIGIBILITY_MAP_REPORT.md
- ERBETE_DRIVERNEARBY_DISPATCH_SETTINGS_MAP_REPORT.md
- ERBETE_RIDE_PARCEL_DISPATCH_DRAFT_LOGIC_REPORT.md
- ERBETE_FIREBASE_FUNCTIONS_MASTER_CHECKPOINT_REPORT.md
- ERBETE_PROPAGATE_USER_PROFILE_UPDATES_RECONSTRUCTION_MAP_REPORT.md
- ERBETE_VENDOR_OWNER_LINK_MAP_REPORT.md

## Dispatch Reconstruction Summary

### deliveryDispatch

- Collection: vendor_orders
- Trigger: vendor_orders/{orderID}
- Service type: delivery-service
- Driver request field: orderRequestData
- Driver ID field in vendor order model: driverID
- Vendor ID field: vendorID
- Uses DriverNearBy.driverRadios

### rideDispatch

- Collection: rides
- Trigger: rides/{orderID}
- Service type: cab-service
- Pickup location: sourceLocation
- Destination location: destinationLocation
- Driver ID field: driverId
- Driver request field on user: ordercabRequestData
- Radius likely driverRadios unless old source proves separate cab radius

### parcelDispatch

- Collection: parcel_orders
- Trigger: parcel_orders/{orderID}
- Service type: parcel_delivery
- Pickup location: senderLatLong
- Destination location: receiverLatLong
- Driver ID field: driverId
- Radius should prefer parcelRadius
- Active reject behavior remains unconfirmed

## propagateUserProfileUpdates Reconstruction Summary

- Trigger: users/{userID}
- Event: document.update
- Purpose: update embedded snapshots in order documents when a user profile changes

### User Snapshot Targets

- vendor_orders.author where authorID == userID
- vendor_orders.driver where driverID == userID
- parcel_orders.author where authorID == userID
- parcel_orders.driver where driverId == userID
- rides.author where authorID == userID
- rides.driver where driverId == userID
- rental_orders.author where authorID == userID
- rental_orders.driver where driverId == userID

### Vendor Snapshot Rule

Wrong assumption:
- vendor_orders.vendorID == users/{userID}

Correct relationship:
- users/{userID}.vendorID = vendorID
- vendors/{vendorID}.id = vendorID
- vendors/{vendorID}.author = userID
- vendor_orders/{orderID}.vendorID = vendorID
- vendor_orders/{orderID}.vendor = embedded VendorModel

Safe vendor propagation:
- when users/{userID} changes
- find vendors where author == userID
- for each vendor.id
- update vendor_orders where vendorID == vendor.id
- update embedded vendor using VendorModel snapshot, not UserModel

## Hard Safety Rules

- Do not deploy all functions from current local source.
- Do not delete parcelDispatch.
- Do not delete rideDispatch.
- Do not delete propagateUserProfileUpdates.
- Do not recreate live-only functions until local exports are complete and reviewed.
- Keep deleteUser as-is.
- Do not treat userID as vendorID.
- Do not patch before creating source files in a controlled branch/folder.

## Recommended Next Step

Create a safe local reconstruction folder for draft source only, without exporting or deploying functions yet.

## Status

STATUS: FIREBASE_FUNCTIONS_FINAL_MASTER_CHECKPOINT_CREATED