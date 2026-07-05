# PATCH TEST CUSTOMER LOCATION TO DEMO INDIA

Generated: 2026-06-28T18:25:42.554Z

Mode: controlled Firebase write. Only target customer user document updated.

## Summary
```json
{
  "status": "TEST_CUSTOMER_LOCATION_PATCHED_TO_DEMO_INDIA",
  "targetEmail": "auditc20260628@gmail.com",
  "userDocId": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
  "selectedCoordinate": {
    "lat": 23.1010002,
    "lng": 72.5408363,
    "address": "Demo India Location, Ahmedabad, Gujarat, India"
  },
  "before": {
    "id": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
    "email": "auditc20260628@gmail.com",
    "name": "Audit",
    "role": "customer",
    "address": null,
    "location": null,
    "coordinates": null,
    "latitude": null,
    "longitude": null,
    "zoneId": null,
    "demoLocationMode": null,
    "keys": [
      "active",
      "appIdentifier",
      "countryCode",
      "countryISOCode",
      "createdAt",
      "email",
      "fcmToken",
      "firstName",
      "id",
      "inProgressOrderID",
      "isActive",
      "isDocumentVerify",
      "lastName",
      "phoneNumber",
      "profilePictureURL",
      "provider",
      "reviewsCount",
      "reviewsSum",
      "role",
      "rotation",
      "sectionIds",
      "shippingAddress",
      "wallet_amount",
      "zoneId"
    ]
  },
  "after": {
    "id": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
    "email": "auditc20260628@gmail.com",
    "name": "Audit",
    "role": "customer",
    "address": "Demo India Location, Ahmedabad, Gujarat, India",
    "location": {
      "_latitude": 23.1010002,
      "_longitude": 72.5408363
    },
    "coordinates": {
      "latitude": 23.1010002,
      "longitude": 72.5408363
    },
    "latitude": 23.1010002,
    "longitude": 72.5408363,
    "zoneId": null,
    "demoLocationMode": true,
    "keys": [
      "active",
      "address",
      "appIdentifier",
      "coordinates",
      "countryCode",
      "countryISOCode",
      "createdAt",
      "demoLocationCountry",
      "demoLocationMode",
      "demoLocationSource",
      "email",
      "fcmToken",
      "firstName",
      "id",
      "inProgressOrderID",
      "isActive",
      "isDocumentVerify",
      "lastName",
      "latitude",
      "location",
      "longitude",
      "phoneNumber",
      "profilePictureURL",
      "provider",
      "reviewsCount",
      "reviewsSum",
      "role",
      "rotation",
      "sectionIds",
      "shippingAddress",
      "updatedAt",
      "wallet_amount",
      "zoneId"
    ]
  }
}
```

## Full Report
```json
{
  "generatedAt": "2026-06-28T18:25:42.554Z",
  "mode": "controlled_write_patch_test_customer_location_to_demo_india",
  "project_id": "erbete-putra",
  "targetEmail": "auditc20260628@gmail.com",
  "selectedCoordinate": {
    "lat": 23.1010002,
    "lng": 72.5408363,
    "address": "Demo India Location, Ahmedabad, Gujarat, India"
  },
  "safety": {
    "onlyOneUserDocument": true,
    "noDelete": true,
    "noFullImport": true,
    "noDeviceGpsChange": true
  },
  "before": {
    "id": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
    "email": "auditc20260628@gmail.com",
    "name": "Audit",
    "role": "customer",
    "address": null,
    "location": null,
    "coordinates": null,
    "latitude": null,
    "longitude": null,
    "zoneId": null,
    "demoLocationMode": null,
    "keys": [
      "active",
      "appIdentifier",
      "countryCode",
      "countryISOCode",
      "createdAt",
      "email",
      "fcmToken",
      "firstName",
      "id",
      "inProgressOrderID",
      "isActive",
      "isDocumentVerify",
      "lastName",
      "phoneNumber",
      "profilePictureURL",
      "provider",
      "reviewsCount",
      "reviewsSum",
      "role",
      "rotation",
      "sectionIds",
      "shippingAddress",
      "wallet_amount",
      "zoneId"
    ]
  },
  "after": {
    "id": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
    "email": "auditc20260628@gmail.com",
    "name": "Audit",
    "role": "customer",
    "address": "Demo India Location, Ahmedabad, Gujarat, India",
    "location": {
      "_latitude": 23.1010002,
      "_longitude": 72.5408363
    },
    "coordinates": {
      "latitude": 23.1010002,
      "longitude": 72.5408363
    },
    "latitude": 23.1010002,
    "longitude": 72.5408363,
    "zoneId": null,
    "demoLocationMode": true,
    "keys": [
      "active",
      "address",
      "appIdentifier",
      "coordinates",
      "countryCode",
      "countryISOCode",
      "createdAt",
      "demoLocationCountry",
      "demoLocationMode",
      "demoLocationSource",
      "email",
      "fcmToken",
      "firstName",
      "id",
      "inProgressOrderID",
      "isActive",
      "isDocumentVerify",
      "lastName",
      "latitude",
      "location",
      "longitude",
      "phoneNumber",
      "profilePictureURL",
      "provider",
      "reviewsCount",
      "reviewsSum",
      "role",
      "rotation",
      "sectionIds",
      "shippingAddress",
      "updatedAt",
      "wallet_amount",
      "zoneId"
    ]
  },
  "status": "TEST_CUSTOMER_LOCATION_PATCHED_TO_DEMO_INDIA"
}
```

## Final Status
STATUS: TEST_CUSTOMER_LOCATION_PATCHED_TO_DEMO_INDIA