# ERBETE VENDOR OWNER LINK MAP REPORT

Generated: 06/28/2026 17:04:33

Mode: audit-only. No patch. No deploy. No delete. No commit.

## Purpose

This report locks the relationship between users, vendors, and vendor_orders so propagateUserProfileUpdates is not reconstructed with the wrong vendorID assumption.

## Confirmed Collection

- CollectionName.vendors = vendors
- Confirmed in customer app
- Confirmed in driver app
- Confirmed in vendor app

## Confirmed Vendor Model Fields

- VendorModel.id
- VendorModel.author
- VendorModel.authorName
- VendorModel.authorProfilePic
- VendorModel.fcmToken
- VendorModel.title
- VendorModel.photo
- VendorModel.walletAmount
- VendorModel.zoneId
- VendorModel.sectionId / section_id

## Confirmed Vendor Creation Link

- A new vendor document is created under vendors with an auto document id.
- Constant.userModel.vendorID is set to that vendor document id.
- VendorModel.author is set to Constant.userModel.id.

## Confirmed Relationship

### User

- users/{userID}.vendorID = vendorID

### Vendor

- vendors/{vendorID}.id = vendorID
- vendors/{vendorID}.author = userID

### Vendor Order

- vendor_orders/{orderID}.vendorID = vendorID
- vendor_orders/{orderID}.vendor = embedded VendorModel

## Impact on propagateUserProfileUpdates

Wrong assumption:

- vendor_orders.vendorID == users/{userID}

Correct relationship:

- users/{userID} changes
- find vendors where author == userID
- for each matching vendor.id
- update vendor_orders where vendorID == vendor.id
- update embedded vendor with the VendorModel snapshot, not UserModel

## Safe Propagation Rule

When users/{userID} changes:

- update embedded author where authorID == userID
- update embedded driver where driverID == userID or driverId == userID
- only update embedded vendor through vendors.author == userID and vendor_orders.vendorID == vendor.id

## Safety Decision

- Do not patch propagateUserProfileUpdates yet.
- Do not deploy any reconstructed function yet.
- Do not delete the live propagateUserProfileUpdates function.
- Do not update vendor_orders.vendor by treating userID as vendorID.

## Status

STATUS: VENDOR_OWNER_LINK_MAP_CREATED