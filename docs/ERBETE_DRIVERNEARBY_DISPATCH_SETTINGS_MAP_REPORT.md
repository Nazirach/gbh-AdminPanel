# ERBETE DRIVERNEARBY DISPATCH SETTINGS MAP REPORT

Generated: 06/28/2026 16:36:30

Mode: audit-only. No patch. No deploy. No delete. No commit.

## Firestore Settings Document

- Collection: settings
- Document: DriverNearBy

## Confirmed Fields Used by Customer App

- distanceType
- enableOTPTripStart
- enableOTPTripStartForRental
- selectedMapType
- mapType

## Confirmed Fields Used by Driver App

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

## Confirmed Fields Used by deliveryDispatch

- minimumDepositToRideAccept
- driverOrderAcceptRejectDuration
- orderAutoCancelDuration
- driverRadios
- distanceType
- singleOrderReceive

## deliveryDispatch Behavior

- Reads settings/DriverNearBy through getDriverNearByData()
- Uses minimumDepositToRideAccept for wallet_amount filter
- Uses driverOrderAcceptRejectDuration for driver accept/reject timeout label and timeout logic
- Uses orderAutoCancelDuration to set vendor_orders.orderAutoCancelAt if no driver is found
- Uses driverRadios as dispatch radius
- Converts radius from miles to km when distanceType == miles
- Uses singleOrderReceive to skip busy drivers with orderRequestData or inProgressOrderID

## Reconstruction Impact

### deliveryDispatch

- Use driverRadios
- Use delivery-service
- Use orderRequestData

### rideDispatch

- Likely use driverRadios unless old live source proves a separate cab radius
- Use cab-service
- Use ordercabRequestData
- Use singleOrderReceive with ordercabRequestData and inProgressOrderID

### parcelDispatch

- Driver app search uses parcelRadius
- Use parcel_delivery for serviceTypes filter
- Do not blindly use parcel-service
- Do not blindly use driverRadios for parcel if parcelRadius is available
- Reject behavior remains unconfirmed from driver source

## Safety Decision

- Do not patch functions yet.
- Do not deploy functions yet.
- Do not delete live-only functions.
- Keep parcel radius handling conservative.

## Status

STATUS: DRIVERNEARBY_DISPATCH_SETTINGS_MAP_CREATED