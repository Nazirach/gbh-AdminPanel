# ERBETE RIDE AND PARCEL DISPATCH DRAFT LOGIC REPORT

Generated: 06/28/2026 16:39:09

Mode: draft-only. No patch. No deploy. No delete. No commit.

## Purpose

This document describes a conservative reconstruction draft for the missing live-only Firebase functions:

- rideDispatch
- parcelDispatch

This is not executable code. This is a controlled logic map before any patch.

## Shared Dispatch Foundations

- Source settings document: settings/DriverNearBy
- Driver collection: users
- Base driver filters:
  - role == driver
  - isActive == true
  - wallet_amount >= minimumDepositToRideAccept
  - fcmToken exists
  - location exists
  - sectionIds contains order section id
- Busy-driver handling:
  - if singleOrderReceive is true, skip driver with pending request or active inProgressOrderID
- Rejected driver handling:
  - skip driver when rejectedByDrivers contains driver id

## rideDispatch Draft

### Live Trigger

- Function: rideDispatch
- Trigger: rides/{orderID}
- Event: document.write
- Runtime live: nodejs10 gcfv1
- Local source: missing/live-only

### Firestore Order Fields

- Collection: rides
- Order id: orderID
- Status field: status
- Initial status: Order Placed
- Dispatch status candidates: Order Accepted / Driver Rejected
- Driver accepted status: Driver Accepted
- Completed status: Order Completed
- Pickup field: sourceLocation
- Destination field: destinationLocation
- Section field: sectionId
- Driver field: driverId
- Rejected list: rejectedByDrivers
- Driver request field on user: ordercabRequestData
- In-progress field on user: inProgressOrderID

### Driver Filter

- users.role == driver
- users.isActive == true
- users.serviceTypes array-contains cab-service
- users.wallet_amount >= minimumDepositToRideAccept
- users.sectionIds contains rides.sectionId
- users.zoneId should match pickup/source zone if zone check is used

### Radius

- Use driverRadios unless an old source proves a separate cab radius.
- If distanceType == miles, convert radius into km.
- Distance origin should be ride sourceLocation.

### Assignment Draft

- Set ride status to Driver Pending
- Set driver.ordercabRequestData to the ride order model
- Send FCM to driver
- After driverOrderAcceptRejectDuration:
  - if ride still Driver Pending:
    - clear driver.ordercabRequestData
    - append driver id to rides.rejectedByDrivers
    - set ride status back to dispatchable status

### Accepted Transition

- Driver app already sets:
  - ride.status = Driver Accepted
  - ride.driverId = driver id
  - driver.inProgressOrderID add order id
- Function should not override accepted ride unless exact old behavior is confirmed.

## parcelDispatch Draft

### Live Trigger

- Function: parcelDispatch
- Trigger: parcel_orders/{orderID}
- Event: document.write
- Runtime live: nodejs10 gcfv1
- Local source: missing/live-only

### Firestore Order Fields

- Collection: parcel_orders
- Order id: orderID
- Status field: status
- Initial status: Order Placed
- Driver accepted status: Driver Accepted
- Transit status: Order In Transit
- Completed status: Order Completed
- Pickup field: senderLatLong
- Destination field: receiverLatLong
- Sender zone: senderZoneId
- Receiver zone: receiverZoneId
- Section field: sectionId
- Driver field: driverId
- Rejected list: rejectedByDrivers

### Driver Filter

- users.role == driver
- users.isActive == true
- users.serviceTypes array-contains parcel_delivery
- users.wallet_amount >= minimumDepositToRideAccept
- users.sectionIds contains parcel_orders.sectionId
- users.zoneId should match senderZoneId or applicable pickup zone if zone check is used

### Radius

- Prefer parcelRadius because driver app parcel search uses parcelRadius.
- Do not blindly use driverRadios for parcel.
- Distance origin should be senderLatLong.

### Assignment Draft

- Current driver app shows active parcel search/accept flow.
- Confirmed accept path sets:
  - parcel.status = Driver Accepted
  - parcel.driverId = current driver id
  - parcel.driver = current user model
- Active reject flow is not confirmed.
- Therefore parcelDispatch should remain conservative until exact live behavior is proven.

## High-Risk Unknowns

- Exact old rideDispatch timeout behavior is not available locally.
- Exact old parcelDispatch assignment/reject behavior is not available locally.
- parcelDispatch may have been search-based rather than push-assignment based.
- Do not deploy reconstructed functions without first creating local source and reviewing all exports.

## Safety Decision

- Do not patch source yet.
- Do not deploy functions yet.
- Do not delete live-only functions.
- Do not run firebase deploy --only functions from incomplete source.
- Keep this as draft logic only.

## Status

STATUS: RIDE_PARCEL_DISPATCH_DRAFT_LOGIC_CREATED