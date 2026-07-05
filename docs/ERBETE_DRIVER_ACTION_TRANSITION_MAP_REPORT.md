# ERBETE DRIVER ACTION TRANSITION MAP REPORT

Generated: 06/28/2026 16:18:45

Mode: audit-only. No patch. No deploy. No delete. No commit.

## Ride / Cab Driver Action Flow

Source file:
- driver/lib/controllers/cab_home_controller.dart

### acceptOrder()

- Adds order id to driver.inProgressOrderID
- Clears driver.orderCabRequestData
- Updates order.status to Driver Accepted
- Sets order.driverId to driver id
- Sets order.driver to driver model
- Persists order through FireStoreUtils.setCabOrder()
- FireStoreUtils.setCabOrder() writes to rides via CollectionName.ridesBooking with SetOptions(merge: true)

### rejectOrder()

- Updates order.status to Driver Rejected
- Adds driver id into order.rejectedByDrivers
- Clears driver.orderCabRequestData
- Clears driver.inProgressOrderID
- Persists order through FireStoreUtils.setCabOrder()

### completeRide()

- Updates order.status to Order Completed
- Clears driver.inProgressOrderID
- Clears driver.orderCabRequestData
- Persists order through FireStoreUtils.setCabOrder()

## Parcel Driver Action Flow

Source files:
- driver/lib/controllers/parcel_search_controller.dart
- driver/lib/controllers/parcel_home_controller.dart

### acceptParcelBooking()

- Updates parcel.status to Driver Accepted
- Sets parcel.driver to current user model
- Sets parcel.driverId to current user id
- Sets parcel.receiverPickupDateTime to now
- Persists parcel through FireStoreUtils.setParcelOrder()
- FireStoreUtils.setParcelOrder() writes to parcel_orders

### pickupParcel()

- Updates parcel.status to Order In Transit
- Persists parcel through FireStoreUtils.setParcelOrder()

### completeParcel()

- Updates parcel.status to Order Completed
- Persists parcel through FireStoreUtils.setParcelOrder()
- Sends parcel completed notification

### Parcel Reject Finding

- No active rejectParcelBooking function was confirmed in the inspected output.
- Do not assume parcel rejection logic unless a later source search proves it.
- parcelDispatch reconstruction should be conservative around Driver Rejected behavior.

## Function Reconstruction Impact

### rideDispatch

- Can safely model dispatch around:
  - Order Placed
  - Driver Pending
  - Driver Accepted
  - Driver Rejected
  - Order In Transit
  - Order Completed
- Driver assignment field: driverId
- Driver request field on user: orderCabRequestData
- In-progress user field: inProgressOrderID

### parcelDispatch

- Can safely model dispatch around:
  - Order Placed
  - Driver Accepted
  - Order In Transit
  - Order Completed
- Driver assignment field: driverId
- Confirmed active accept path uses direct search/accept flow from driver app.
- Driver Rejected behavior remains unconfirmed for parcel.

## Safety Decision

- Do not patch functions yet.
- Do not deploy functions yet.
- Do not delete live-only functions.
- Next audit should inspect serviceTypes and user model fields for dispatch eligibility.

## Status

STATUS: DRIVER_ACTION_TRANSITION_MAP_CREATED