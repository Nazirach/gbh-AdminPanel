# PREVIOUS AUDIT HISTORY MAP

Generated: 06/28/2026 17:19:23

Mode: documentation-only. No patch. No deploy. No delete. No commit.

## Purpose

This document records the previous audit history so any new session can understand the full project trail before touching Firebase Functions source.

## Core Safety Rule

- Audit first.
- Do not patch before map is complete.
- Do not deploy incomplete functions.
- Do not delete live-only functions.
- Keep deleteUser as-is.
- Do not assume userID equals vendorID.

## Previous Audit Timeline

### 1. deleteUser Audit

- Audited old deleteUser behavior.
- Found mismatch between mobile app HTTP POST usage and old Firebase callable onCall function.
- Confirmed mobile app sends HTTP body with uid/data.uid.
- Final decision: recreate deleteUser as HTTPS onRequest.
- Old deleteUser was deleted only after decision and recreated safely.
- New deleteUser uses nodejs22 gcfv2 HTTPS.
- Safe test uid __SAFE_TEST_DO_NOT_DELETE__ returns SAFE_TEST_OK.
- Current decision: keep deleteUser as-is.

### 2. Live Firebase Function Metadata Audit

- Live functions were mapped.
- deleteUser: nodejs22 gcfv2 HTTPS, source recreated.
- deliveryDispatch: nodejs10 gcfv1, vendor_orders/{orderID}, source found.
- parcelDispatch: nodejs10 gcfv1, parcel_orders/{orderID}, live-only/source missing.
- rideDispatch: nodejs10 gcfv1, rides/{orderID}, live-only/source missing.
- propagateUserProfileUpdates: nodejs10 gcfv1, users/{userID}, live-only/source missing.
- gcloud was not available, Firebase CLI/JSON fallback was used.

### 3. ZIP and Source Search Audit

- Order Tracking Firebase Function ZIP was extracted safely.
- ZIP contained deliveryDispatch and old deleteUser only.
- ZIP did not contain parcelDispatch.
- ZIP did not contain rideDispatch.
- ZIP did not contain propagateUserProfileUpdates.
- Firebase Import Export Collections ZIP checked.
- Firebase Indexing ZIP checked.
- Firestore Demo Authentication User Import ZIP checked.
- Missing functions remained live-only/orphan.

### 4. deliveryDispatch Source Audit

- deliveryDispatch source found in products/delivery.js.
- Trigger: vendor_orders/{orderID}.
- Reads settings/DriverNearBy.
- Uses minimumDepositToRideAccept.
- Uses driverOrderAcceptRejectDuration.
- Uses orderAutoCancelDuration.
- Uses driverRadios.
- Uses distanceType.
- Uses singleOrderReceive.
- Driver filter uses:
  - role == driver
  - isActive == true
  - serviceTypes array-contains delivery-service
  - wallet_amount >= minimumDepositToRideAccept
- Driver request field: orderRequestData.
- Busy check: orderRequestData and inProgressOrderID.
- Vendor order driver ID field: driverID.
- Vendor order vendor ID field: vendorID.

### 5. Flutter Collection Map Audit

- users collection confirmed.
- vendor_orders collection confirmed.
- parcel_orders collection confirmed.
- rides collection confirmed.
- settings/DriverNearBy confirmed.
- CollectionName.vendors = vendors confirmed in customer, driver, and vendor apps.

### 6. Driver Action Transition Audit

- Ride accept flow confirmed in cab_home_controller.
- Ride accept sets Driver Accepted, driverId, driver object, and updates inProgressOrderID.
- Ride reject sets Driver Rejected and appends rejectedByDrivers.
- Ride driver request field is ordercabRequestData.
- Parcel accept flow confirmed in parcel_search_controller.
- Parcel accept sets Driver Accepted, driverId, driver object.
- Parcel pickup sets Order In Transit.
- Parcel completion sets Order Completed.
- Parcel reject behavior remains unconfirmed.

### 7. Service Type Audit

- deliveryDispatch serviceTypes value: delivery-service.
- rideDispatch serviceTypes value: cab-service.
- parcelDispatch serviceTypes value: parcel_delivery.
- rental serviceTypes value: rental-service.
- Important correction: parcel-service exists as customer label/constant, but driver serviceTypes uses parcel_delivery.
- parcelDispatch must not blindly use parcel-service.

### 8. DriverNearBy Settings Audit

- Customer app reads distanceType, enableOTPTripStart, enableOTPTripStartForRental, selectedMapType, mapType.
- Driver app reads minimumDepositToRideAccept, ownerMinimumDepositToRideAccept, minimumAmountToWithdrawal, driverLocationUpdate, singleOrderReceive, selectedMapType, mapType, auto_approve_driver, enableOTPTripStart, enableOTPTripStartForRental, parcelRadius, rentalRadius.
- deliveryDispatch reads minimumDepositToRideAccept, driverOrderAcceptRejectDuration, orderAutoCancelDuration, driverRadios, distanceType, singleOrderReceive.
- deliveryDispatch uses driverRadios.
- parcelDispatch should prefer parcelRadius if reconstructed.

### 9. rideDispatch Draft Logic Audit

- Trigger should be rides/{orderID}.
- Service type should be cab-service.
- Pickup field: sourceLocation.
- Destination field: destinationLocation.
- Driver ID field: driverId.
- Driver request field: ordercabRequestData.
- Radius likely driverRadios unless old live source proves otherwise.

### 10. parcelDispatch Draft Logic Audit

- Trigger should be parcel_orders/{orderID}.
- Service type should be parcel_delivery.
- Pickup field: senderLatLong.
- Destination field: receiverLatLong.
- Driver ID field: driverId.
- Zone fields: senderZoneId and receiverZoneId.
- Radius should prefer parcelRadius.
- Active driver search/accept flow exists in app.
- Push-dispatch behavior remains unconfirmed.
- Reject behavior remains unconfirmed.

### 11. Embedded User/Object Model Audit

- vendor_orders/order_model stores embedded author, driver, and vendor.
- parcel_orders/parcel_order_model stores embedded author and driver.
- rides/cab_order_model stores embedded author and driver.
- rental_orders/rental_order_model stores embedded author and driver.
- Case-sensitive ID map:
  - vendor_orders uses authorID, driverID, vendorID.
  - parcel_orders uses authorID, driverId.
  - rides uses authorID, driverId.
  - rental_orders uses authorID, driverId.

### 12. propagateUserProfileUpdates Reconstruction Audit

- Live trigger: users/{userID} document.update.
- Source missing/live-only.
- Likely purpose: update embedded snapshots in order documents when user profile changes.
- User snapshot targets:
  - vendor_orders.author where authorID == userID
  - vendor_orders.driver where driverID == userID
  - parcel_orders.author where authorID == userID
  - parcel_orders.driver where driverId == userID
  - rides.author where authorID == userID
  - rides.driver where driverId == userID
  - rental_orders.author where authorID == userID
  - rental_orders.driver where driverId == userID

### 13. Vendor Owner Link Audit

- users/{userID}.vendorID = vendorID.
- vendors/{vendorID}.id = vendorID.
- vendors/{vendorID}.author = userID.
- vendor_orders/{orderID}.vendorID = vendorID.
- vendor_orders/{orderID}.vendor = embedded VendorModel.
- Wrong assumption: vendor_orders.vendorID == users/{userID}.
- Correct rule:
  - when users/{userID} changes
  - find vendors where author == userID
  - for each vendor.id
  - update vendor_orders where vendorID == vendor.id
  - update embedded vendor using VendorModel snapshot, not UserModel

### 14. Source Location Audit

- Active patched working source:
  - C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions
- Old ZIP extracts:
  - C:\deploy\zip_audit\c_project_Order_Tracking_SAFE_EXTRACT\Order Tracking Firebase Function\functions
  - C:\deploy\zip_audit\Order_Tracking_Firebase_Function_SAFE_EXTRACT\Order Tracking Firebase Function\functions
- Safe draft folder:
  - C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft

### 15. Patched Working Source Review

- package.json node engine: 22.
- firebase-admin: 13.7.0.
- firebase-functions: 7.2.3.
- index.js exports deliveryDispatch.
- index.js exports deleteUser.
- index.js does not export rideDispatch.
- index.js does not export parcelDispatch.
- index.js does not export propagateUserProfileUpdates.
- deleteUser is onRequest.
- deleteUser is not onCall.

## Existing Main Reports

- ERBETE_FIREBASE_FUNCTIONS_FINAL_MASTER_CHECKPOINT_REPORT.md
- ERBETE_VENDOR_OWNER_LINK_MAP_REPORT.md
- ERBETE_PROPAGATE_USER_PROFILE_UPDATES_RECONSTRUCTION_MAP_REPORT.md
- ERBETE_RIDE_PARCEL_DISPATCH_DRAFT_LOGIC_REPORT.md
- ERBETE_DRIVERNEARBY_DISPATCH_SETTINGS_MAP_REPORT.md
- ERBETE_USER_DISPATCH_ELIGIBILITY_MAP_REPORT.md
- ERBETE_DRIVER_ACTION_TRANSITION_MAP_REPORT.md
- ERBETE_DISPATCH_RECONSTRUCTION_MAP_REPORT.md
- ERBETE_LIVE_FUNCTION_METADATA_MAP_REPORT.md
- ERBETE_DELETE_USER_RECREATE_SUCCESS_REPORT.md

## Final Decision Before Any Patch

- Do not deploy yet.
- Do not export draft functions yet.
- Do not delete live-only functions.
- Do not touch deleteUser.
- Review delivery.js in detail before implementing draft logic.
- Keep all reconstruction under docs until a separate implementation decision.

## Status

STATUS: PREVIOUS_AUDIT_HISTORY_MAP_CREATED