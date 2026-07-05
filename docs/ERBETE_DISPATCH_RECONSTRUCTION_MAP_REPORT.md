# ERBETE DISPATCH RECONSTRUCTION MAP REPORT

Generated: 06/28/2026 16:12:44

Mode: audit-only. No patch. No deploy. No delete. No commit.

## Confirmed Collection Mapping

- CollectionName.users = users
- CollectionName.vendorOrders = vendor_orders
- CollectionName.parcelOrders = parcel_orders
- CollectionName.rides = rides
- Driver app CollectionName.ridesBooking = rides

## Live Function Trigger Map

| Function | Runtime | Trigger | Collection | Source Status |
|---|---:|---|---|---|
| deleteUser | nodejs22 | HTTPS | n/a | recreated successfully |
| deliveryDispatch | nodejs10 | document.write | vendor_orders/{orderID} | source found |
| parcelDispatch | nodejs10 | document.write | parcel_orders/{orderID} | live-only/source missing |
| rideDispatch | nodejs10 | document.write | rides/{orderID} | live-only/source missing |
| propagateUserProfileUpdates | nodejs10 | document.update | users/{userID} | live-only/source missing |

## deliveryDispatch Confirmed Pattern

- Trigger collection: vendor_orders
- Trigger path: vendor_orders/{orderID}
- Dispatch status: Order Accepted / Driver Rejected
- Skip status: Order Placed, Order Cancelled, takeAway
- Driver query collection: users
- Driver filter:
  - role = driver
  - isActive = true
  - serviceTypes array-contains delivery-service
  - wallet_amount >= minimumDepositToRideAccept
- Driver field in vendor order: driverID
- Request field on user: orderRequestData
- Rejection field on order: rejectedByDrivers
- Assignment status: Driver Pending
- Accepted transition: Driver Accepted -> Order Shipped

## parcelDispatch Reconstruction Map

- Trigger collection: parcel_orders
- Trigger path: parcel_orders/{orderID}
- Flutter save function: FireStoreUtils.parcelOrderPlace(orderModel)
- Firestore write: CollectionName.parcelOrders/doc(orderModel.id).set(orderModel.toJson())
- Pickup location field: senderLatLong
- Drop location field: receiverLatLong
- Zone fields: senderZoneId, receiverZoneId
- Driver field: driverId
- Rejection field: rejectedByDrivers
- Section field: sectionId
- Status initial: Order Placed
- Probable dispatch status: Order Accepted / Driver Rejected
- Driver app listens: parcel_orders where driverId == driverId

## rideDispatch Reconstruction Map

- Trigger collection: rides
- Trigger path: rides/{orderID}
- Flutter save function: FireStoreUtils.cabOrderPlace(orderModel)
- Firestore write: CollectionName.rides/doc(orderModel.id).set(orderModel.toJson())
- Pickup location field: sourceLocation
- Drop location field: destinationLocation
- Location names: sourceLocationName, destinationLocationName
- Driver field: driverId
- Rejection field: rejectedByDrivers
- Section field: sectionId
- Ride type field: rideType
- Status initial: Order Placed
- Probable dispatch status: Order Accepted / Driver Rejected
- Driver app listens: rides where driverId == driverId

## propagateUserProfileUpdates Reconstruction Map

- Trigger collection: users
- Trigger path: users/{userID}
- Trigger event: document.update
- Purpose still not fully proven from local source.
- Likely role: propagate changed user profile data into related order/vendor/driver/customer documents.
- Must be reconstructed only after comparing user model fields and denormalized user snapshots in orders.

## Critical Safety Notes

- Do not deploy all functions from current local source.
- Do not delete parcelDispatch.
- Do not delete rideDispatch.
- Do not delete propagateUserProfileUpdates.
- Keep deleteUser as-is.
- Any future function reconstruction must be deployed only after local source contains all live exports or after a deliberate migration plan.

## Status

STATUS: DISPATCH_RECONSTRUCTION_MAP_CREATED