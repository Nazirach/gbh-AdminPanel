# ERBETE FIREBASE FUNCTIONS MASTER CHECKPOINT REPORT

Generated: 06/28/2026 16:41:36

Mode: master checkpoint only. No patch. No deploy. No delete. No commit.

## Current Safe Position

- deleteUser has been safely recreated as HTTPS v2 nodejs22.
- deliveryDispatch source exists locally.
- parcelDispatch is live-only/source-missing.
- rideDispatch is live-only/source-missing.
- propagateUserProfileUpdates is live-only/source-missing.
- Do not run firebase deploy --only functions from incomplete local source.
- Do not delete live-only functions.

## Live Firebase Functions

| Function | Runtime | Trigger | Status | Source Status |
|---|---|---|---|---|
| deleteUser | nodejs22 gcfv2 | HTTPS | active | recreated successfully |
| deliveryDispatch | nodejs10 gcfv1 | vendor_orders/{orderID} document.write | active | source found |
| parcelDispatch | nodejs10 gcfv1 | parcel_orders/{orderID} document.write | active | source missing/live-only |
| rideDispatch | nodejs10 gcfv1 | rides/{orderID} document.write | active | source missing/live-only |
| propagateUserProfileUpdates | nodejs10 gcfv1 | users/{userID} document.update | active | source missing/live-only |

## Completed Reports

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

## Confirmed Collection Map

| Logical Flow | Firestore Collection |
|---|---|
| users | users |
| vendor delivery orders | vendor_orders |
| parcel orders | parcel_orders |
| ride/cab orders | rides |
| settings | settings |
| DriverNearBy document | settings/DriverNearBy |

## Confirmed Service Type Map

| Flow | Driver serviceTypes value |
|---|---|
| deliveryDispatch | delivery-service |
| rideDispatch | cab-service |
| parcelDispatch | parcel_delivery |
| rental | rental-service |

Important:
- parcelDispatch must not use parcel-service for driver filtering.
- parcel-service appears as customer payload/service label.
- parcel_delivery is the real section serviceTypeFlag used in driver serviceTypes.

## Confirmed User Dispatch Fields

- role
- isActive
- active
- fcmToken
- wallet_amount
- location
- zoneId
- sectionIds
- serviceTypes
- orderRequestData
- ordercabRequestData
- inProgressOrderID
- vendorID
- vehicleDetails

## Confirmed DriverNearBy Fields

- minimumDepositToRideAccept
- ownerMinimumDepositToRideAccept
- minimumAmountToWithdrawal
- driverLocationUpdate
- singleOrderReceive
- selectedMapType
- mapType
- auto_approve_driver
- enableOTPTripStart
- enableOTPTripStartForRental
- parcelRadius
- rentalRadius
- driverOrderAcceptRejectDuration
- orderAutoCancelDuration
- driverRadios
- distanceType

## deliveryDispatch Confirmed Logic

- Trigger: vendor_orders/{orderID}
- Process status: Order Accepted / Driver Rejected
- Skip status: Order Placed / Order Cancelled
- Skip takeAway orders
- Query users where:
  - role == driver
  - isActive == true
  - serviceTypes array-contains delivery-service
  - wallet_amount >= minimumDepositToRideAccept
- Match sectionIds against order.section_id
- Match zoneId when applicable
- Use driverRadios as radius
- Use orderRequestData
- Use inProgressOrderID for busy check

## rideDispatch Draft Logic

- Trigger: rides/{orderID}
- Service filter: cab-service
- Pickup location: sourceLocation
- Destination location: destinationLocation
- Driver field: driverId
- User request field: ordercabRequestData
- Busy check: ordercabRequestData and inProgressOrderID
- Radius: likely driverRadios unless old source proves separate cab radius

## parcelDispatch Draft Logic

- Trigger: parcel_orders/{orderID}
- Service filter: parcel_delivery
- Pickup location: senderLatLong
- Destination location: receiverLatLong
- Driver field: driverId
- Radius: prefer parcelRadius
- Reject behavior: still unconfirmed
- Current evidence suggests driver app has active parcel search/accept flow

## Remaining Unknowns

- Exact old rideDispatch source behavior.
- Exact old parcelDispatch source behavior.
- Exact old propagateUserProfileUpdates behavior.
- Whether parcelDispatch live function pushes driver assignment or only supports search-based flow.
- Whether rideDispatch has a separate cab radius not found in current source.

## Hard Safety Rules

- Do not deploy all functions from current local source.
- Do not delete parcelDispatch.
- Do not delete rideDispatch.
- Do not delete propagateUserProfileUpdates.
- Do not recreate live-only functions until local exports are complete and reviewed.
- Keep deleteUser as-is.

## Recommended Next Step

Before patching, inspect propagateUserProfileUpdates behavior by mapping user snapshots inside order/vendor/driver/customer documents.

## Status

STATUS: FIREBASE_FUNCTIONS_MASTER_CHECKPOINT_CREATED