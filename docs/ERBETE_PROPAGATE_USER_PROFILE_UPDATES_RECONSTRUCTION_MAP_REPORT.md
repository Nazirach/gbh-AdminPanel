# ERBETE PROPAGATE USER PROFILE UPDATES RECONSTRUCTION MAP REPORT

Generated: 06/28/2026 16:57:23

Mode: audit/reconstruction-map only. No patch. No deploy. No delete. No commit.

## Live Function

- Function: propagateUserProfileUpdates
- Trigger: users/{userID}
- Event: document.update
- Runtime live: nodejs10 gcfv1
- Local source: missing/live-only

## Purpose Hypothesis

The function likely propagates changes from users/{userID} into embedded user snapshots stored inside order documents.

This is needed because order documents store copied user objects such as:
- author
- driver
- vendor, only for vendor_orders/order_model.dart

## Confirmed Embedded User/Object Fields

| Collection | Model | Embedded author | Embedded driver | Embedded vendor | ID Fields |
|---|---|---:|---:|---:|---|
| vendor_orders | order_model.dart | yes | yes | yes | authorID, driverID, vendorID |
| parcel_orders | parcel_order_model.dart | yes | yes | no | authorID, driverId |
| rides | cab_order_model.dart | yes | yes | no | authorID, driverId |
| rental_orders | rental_order_model.dart | yes | yes | no | authorID, driverId |

## Case-Sensitive ID Field Map

### vendor_orders

- Customer model uses driverID, not driverId.
- Driver model uses driverID, not driverId.
- vendorID exists.
- authorID exists.

### parcel_orders

- Uses driverId.
- Uses authorID.
- No vendorID.

### rides

- Uses driverId.
- Uses authorID.
- No vendorID.

### rental_orders

- Uses driverId.
- Uses authorID.
- No vendorID.

## Likely Propagation Targets

When users/{userID} changes:

### vendor_orders

- where authorID == userID: update embedded author
- where driverID == userID: update embedded driver
- where vendorID == userID: possible update embedded vendor, but vendor is VendorModel and needs separate verification

### parcel_orders

- where authorID == userID: update embedded author
- where driverId == userID: update embedded driver

### rides

- where authorID == userID: update embedded author
- where driverId == userID: update embedded driver

### rental_orders

- where authorID == userID: update embedded author
- where driverId == userID: update embedded driver

## Important Safety Notes

- Do not assume vendorID maps directly to users/{userID} without checking VendorModel ownership/source.
- Do not patch propagateUserProfileUpdates yet.
- Do not deploy any reconstructed function yet.
- Do not delete the live propagateUserProfileUpdates function.
- Current source is missing; this report is a reconstruction map, not executable code.

## Remaining Verification

- Check VendorModel structure and vendor ownership fields.
- Check whether vendor documents are stored in vendors collection or users collection.
- Check whether embedded vendor in vendor_orders is VendorModel from vendors, not UserModel from users.
- Check if propagateUserProfileUpdates should exclude volatile fields like location, wallet_amount, orderRequestData, and inProgressOrderID.

## Status

STATUS: PROPAGATE_USER_PROFILE_UPDATES_RECONSTRUCTION_MAP_CREATED