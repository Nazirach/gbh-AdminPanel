# ERBETE USER DISPATCH ELIGIBILITY MAP REPORT

Generated: 06/28/2026 16:29:56

Mode: audit-only. No patch. No deploy. No delete. No commit.

## Confirmed User Fields

Firestore collection:
- users/{userID}

Confirmed dispatch-related fields:
- id
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
- rideType
- ownerId
- isOwner

## Confirmed JSON Mapping

| Dart Field | Firestore Field | Notes |
|---|---|---|
| walletAmount | wallet_amount | numeric wallet balance |
| serviceTypes | serviceTypes | list of section serviceTypeFlag values |
| sectionIds | sectionIds | list of selected section ids |
| zoneId | zoneId | driver zone |
| location | location | object with latitude and longitude |
| fcmToken | fcmToken | notification token |
| orderRequestData | orderRequestData | vendor delivery dispatch/request field |
| orderCabRequestData | ordercabRequestData | ride/cab dispatch/request field |
| inProgressOrderID | inProgressOrderID | active accepted order ids |
| vehicleDetails | vehicleDetails | per-section vehicle data |

## Confirmed Service Type Flags

| Flow | Driver serviceTypes value | Notes |
|---|---|---|
| deliveryDispatch | delivery-service | vendor/ecommerce delivery |
| rideDispatch | cab-service | cab/ride flow |
| parcelDispatch | parcel_delivery | parcel section flag; do not use parcel-service for driver filtering |
| rental | rental-service | observed but outside current reconstruction target |

## Important Parcel Finding

- customer Constant.parcelServiceType is parcel-service.
- sectionModel.serviceTypeFlag for parcel navigation is parcel_delivery.
- driver serviceTypes is derived from selected section.serviceTypeFlag.
- Therefore parcelDispatch driver query should use serviceTypes array-contains parcel_delivery.

## Dispatch Eligibility Baseline

### deliveryDispatch

- role == driver
- isActive == true
- serviceTypes contains delivery-service
- wallet_amount >= minimumDepositToRideAccept
- location exists
- fcmToken exists
- sectionIds contains order.section_id
- zoneId matches order/address zone if zone is used
- vendorID should be empty/not set for general drivers

### rideDispatch

- role == driver
- isActive == true
- serviceTypes contains cab-service
- wallet_amount >= minimumDepositToRideAccept
- location exists
- fcmToken exists
- sectionIds contains order.sectionId
- zoneId should match pickup/source zone if zone is used
- dispatch request field: ordercabRequestData

### parcelDispatch

- role == driver
- isActive == true
- serviceTypes contains parcel_delivery
- wallet_amount >= minimumDepositToRideAccept
- location exists
- fcmToken exists
- sectionIds contains order.sectionId
- zoneId should match senderZoneId or receiverZoneId
- active driver accept path appears search-based; reject behavior still unconfirmed

## Safety Decision

- Do not patch functions yet.
- Do not deploy functions yet.
- Do not delete live-only functions.
- parcelDispatch must not use parcel-service for driver filtering unless live data proves otherwise.

## Status

STATUS: USER_DISPATCH_ELIGIBILITY_MAP_CREATED