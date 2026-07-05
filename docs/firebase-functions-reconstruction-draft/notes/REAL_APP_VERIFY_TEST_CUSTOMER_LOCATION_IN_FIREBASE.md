# VERIFY TEST CUSTOMER LOCATION IN FIREBASE

Generated: 2026-06-28T18:52:11.420Z

Mode: read-only. No patch. No Firebase write.

## Summary
```json
{
  "status": "VERIFY_LOCATION_DATA_LOOKS_OK",
  "targetEmail": "auditc20260628@gmail.com",
  "userFound": true,
  "expectedDemoCoordinate": {
    "lat": 23.1010002,
    "lng": 72.5408363
  },
  "nearbyChecks": {
    "userHasAddress": true,
    "userHasLocation": true,
    "userHasCoordinates": true,
    "userHasShippingAddress": true,
    "ondemandActive": true,
    "nearByRadius": 10000
  },
  "likelyIssue": [],
  "userCoordinateCandidates": [
    {
      "source": "user.latitude/longitude",
      "lat": 23.1010002,
      "lng": 72.5408363,
      "distanceKmToDemo": 0
    },
    {
      "source": "user.location GeoPoint",
      "lat": 23.1010002,
      "lng": 72.5408363,
      "distanceKmToDemo": 0
    },
    {
      "source": "user.coordinates",
      "lat": 23.1010002,
      "lng": 72.5408363,
      "distanceKmToDemo": 0
    },
    {
      "source": "shippingAddress[0].location",
      "lat": 5.5312283,
      "lng": 95.3299574,
      "address": "Audit House 01",
      "distanceKmToDemo": 3127.9064
    }
  ]
}
```

## User Document
```json
{
  "id": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
  "email": "auditc20260628@gmail.com",
  "name": "Audit",
  "role": "customer",
  "address": "Demo India Location, Ahmedabad, Gujarat, India",
  "location": {
    "latitude": 23.1010002,
    "longitude": 72.5408363
  },
  "coordinates": {
    "latitude": 23.1010002,
    "longitude": 72.5408363
  },
  "latitude": 23.1010002,
  "longitude": 72.5408363,
  "zoneId": "",
  "demoLocationMode": true,
  "demoLocationCountry": "India",
  "shippingAddressType": "array",
  "shippingAddressCount": 1,
  "shippingAddress": [
    {
      "isDefault": true,
      "address": "Audit House 01",
      "addressAs": "Home",
      "locality": "G8JH+FXM, Batoh, Kecamatan Lueng Bata, Kota Banda Aceh, Aceh, 23122, Indonesia, ID",
      "location": {
        "latitude": 5.5312283,
        "longitude": 95.3299574
      },
      "id": "1c586194-f290-4da1-a39f-3a5209d9e435",
      "landmark": ""
    }
  ],
  "selectedLatLngCandidates": [
    {
      "source": "user.latitude/longitude",
      "lat": 23.1010002,
      "lng": 72.5408363,
      "distanceKmToDemo": 0
    },
    {
      "source": "user.location GeoPoint",
      "lat": 23.1010002,
      "lng": 72.5408363,
      "distanceKmToDemo": 0
    },
    {
      "source": "user.coordinates",
      "lat": 23.1010002,
      "lng": 72.5408363,
      "distanceKmToDemo": 0
    },
    {
      "source": "shippingAddress[0].location",
      "lat": 5.5312283,
      "lng": 95.3299574,
      "address": "Audit House 01",
      "distanceKmToDemo": 3127.9064
    }
  ],
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
```

## Demo Worker Document
```json
{
  "id": "1pkVNTOvlxVDKnr7jpkPNAwivv42",
  "name": "Tracy",
  "email": "tpenvarne3@godaddy.com",
  "section_id": null,
  "providerId": "JWn65LjrIWb5Gpw31ozXFSZxiYC3",
  "location": null,
  "coordinates": {
    "value": {
      "latitude": 23.1010002,
      "longitude": 72.5408363
    }
  },
  "latitude": 23.1010002,
  "longitude": 72.5408363,
  "address": "Gota, Ghatlodiya Taluka, Ahmedabad, Gujarat, 382481, India",
  "keys": [
    "active",
    "address",
    "coordinates",
    "createdAt",
    "email",
    "firstName",
    "g",
    "id",
    "lastName",
    "latitude",
    "longitude",
    "online",
    "phoneNumber",
    "profilePictureURL",
    "providerId",
    "reviewsCount",
    "reviewsSum",
    "salary",
    "updatedAt"
  ]
}
```

## On Demand Section
```json
{
  "id": "yJTddzJUxP3cOU5DpJ10",
  "name": "Home/On Demand Service",
  "serviceTypeFlag": "ondemand-service",
  "isActive": true,
  "order": 9,
  "nearByRadius": 10000,
  "keys": [
    "adminCommision",
    "cab_service_template",
    "color",
    "delivery_charge",
    "dine_in_active",
    "enableCashbackOffer",
    "id",
    "isActive",
    "is_product_details",
    "name",
    "nearByRadius",
    "order",
    "packagingChargeEnable",
    "platformFee",
    "referralAmount",
    "rideType",
    "sectionImage",
    "serviceType",
    "serviceTypeFlag",
    "tax_active",
    "theme",
    "updatedAt"
  ]
}
```

## Full Report
```json
{
  "generatedAt": "2026-06-28T18:52:11.420Z",
  "mode": "read_only_verify_test_customer_location_in_firebase",
  "project_id": "erbete-putra",
  "targetEmail": "auditc20260628@gmail.com",
  "expectedDemoCoordinate": {
    "lat": 23.1010002,
    "lng": 72.5408363
  },
  "userFound": true,
  "user": {
    "id": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
    "email": "auditc20260628@gmail.com",
    "name": "Audit",
    "role": "customer",
    "address": "Demo India Location, Ahmedabad, Gujarat, India",
    "location": {
      "latitude": 23.1010002,
      "longitude": 72.5408363
    },
    "coordinates": {
      "latitude": 23.1010002,
      "longitude": 72.5408363
    },
    "latitude": 23.1010002,
    "longitude": 72.5408363,
    "zoneId": "",
    "demoLocationMode": true,
    "demoLocationCountry": "India",
    "shippingAddressType": "array",
    "shippingAddressCount": 1,
    "shippingAddress": [
      {
        "isDefault": true,
        "address": "Audit House 01",
        "addressAs": "Home",
        "locality": "G8JH+FXM, Batoh, Kecamatan Lueng Bata, Kota Banda Aceh, Aceh, 23122, Indonesia, ID",
        "location": {
          "latitude": 5.5312283,
          "longitude": 95.3299574
        },
        "id": "1c586194-f290-4da1-a39f-3a5209d9e435",
        "landmark": ""
      }
    ],
    "selectedLatLngCandidates": [
      {
        "source": "user.latitude/longitude",
        "lat": 23.1010002,
        "lng": 72.5408363,
        "distanceKmToDemo": 0
      },
      {
        "source": "user.location GeoPoint",
        "lat": 23.1010002,
        "lng": 72.5408363,
        "distanceKmToDemo": 0
      },
      {
        "source": "user.coordinates",
        "lat": 23.1010002,
        "lng": 72.5408363,
        "distanceKmToDemo": 0
      },
      {
        "source": "shippingAddress[0].location",
        "lat": 5.5312283,
        "lng": 95.3299574,
        "address": "Audit House 01",
        "distanceKmToDemo": 3127.9064
      }
    ],
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
  "demoWorker": {
    "id": "1pkVNTOvlxVDKnr7jpkPNAwivv42",
    "name": "Tracy",
    "email": "tpenvarne3@godaddy.com",
    "section_id": null,
    "providerId": "JWn65LjrIWb5Gpw31ozXFSZxiYC3",
    "location": null,
    "coordinates": {
      "value": {
        "latitude": 23.1010002,
        "longitude": 72.5408363
      }
    },
    "latitude": 23.1010002,
    "longitude": 72.5408363,
    "address": "Gota, Ghatlodiya Taluka, Ahmedabad, Gujarat, 382481, India",
    "keys": [
      "active",
      "address",
      "coordinates",
      "createdAt",
      "email",
      "firstName",
      "g",
      "id",
      "lastName",
      "latitude",
      "longitude",
      "online",
      "phoneNumber",
      "profilePictureURL",
      "providerId",
      "reviewsCount",
      "reviewsSum",
      "salary",
      "updatedAt"
    ]
  },
  "ondemandSection": {
    "id": "yJTddzJUxP3cOU5DpJ10",
    "name": "Home/On Demand Service",
    "serviceTypeFlag": "ondemand-service",
    "isActive": true,
    "order": 9,
    "nearByRadius": 10000,
    "keys": [
      "adminCommision",
      "cab_service_template",
      "color",
      "delivery_charge",
      "dine_in_active",
      "enableCashbackOffer",
      "id",
      "isActive",
      "is_product_details",
      "name",
      "nearByRadius",
      "order",
      "packagingChargeEnable",
      "platformFee",
      "referralAmount",
      "rideType",
      "sectionImage",
      "serviceType",
      "serviceTypeFlag",
      "tax_active",
      "theme",
      "updatedAt"
    ]
  },
  "nearbyChecks": {
    "userHasAddress": true,
    "userHasLocation": true,
    "userHasCoordinates": true,
    "userHasShippingAddress": true,
    "ondemandActive": true,
    "nearByRadius": 10000
  },
  "likelyIssue": [],
  "status": "VERIFY_LOCATION_DATA_LOOKS_OK"
}
```

## Final Status
STATUS: VERIFY_LOCATION_DATA_LOOKS_OK