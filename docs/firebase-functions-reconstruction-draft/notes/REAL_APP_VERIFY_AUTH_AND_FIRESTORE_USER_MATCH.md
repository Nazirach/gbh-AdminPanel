# VERIFY AUTH AND FIRESTORE USER MATCH

Generated: 2026-06-28T19:38:36.714Z

Mode: read-only. No Firebase write.

## Summary
```json
{
  "status": "VERIFY_AUTH_FIRESTORE_MATCH_OK",
  "email": "auditc20260628@gmail.com",
  "authFound": true,
  "authUid": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
  "firestoreByEmailCount": 1,
  "firestoreByEmailDocIds": [
    "ObO21tC9wyQq4YgxVGdTW5jD3NA2"
  ],
  "firestoreByAuthUidExists": true,
  "likelyIssue": []
}
```

## Full Report
```json
{
  "generatedAt": "2026-06-28T19:38:36.714Z",
  "mode": "read_only_verify_auth_and_firestore_user_match",
  "project_id": "erbete-putra",
  "email": "auditc20260628@gmail.com",
  "authFound": true,
  "authUser": {
    "uid": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
    "email": "auditc20260628@gmail.com",
    "emailVerified": false,
    "disabled": false,
    "providerData": [
      {
        "uid": "auditc20260628@gmail.com",
        "email": "auditc20260628@gmail.com",
        "providerId": "password"
      }
    ]
  },
  "firestoreByEmailCount": 1,
  "firestoreByEmail": [
    {
      "docId": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
      "email": "auditc20260628@gmail.com",
      "role": "customer",
      "active": true,
      "firstName": "Audit",
      "fullName": null,
      "phoneNumber": "8000000001",
      "address": "Gota, Ghatlodiya Taluka, Ahmedabad, Gujarat, 382481, India",
      "location": {
        "latitude": 23.1010002,
        "longitude": 72.5408363
      },
      "shippingAddressCount": 1,
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
        "locality",
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
  ],
  "firestoreByAuthUidExists": true,
  "firestoreByAuthUid": {
    "docId": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
    "email": "auditc20260628@gmail.com",
    "role": "customer",
    "active": true,
    "firstName": "Audit",
    "fullName": null,
    "phoneNumber": "8000000001",
    "address": "Gota, Ghatlodiya Taluka, Ahmedabad, Gujarat, 382481, India",
    "location": {
      "latitude": 23.1010002,
      "longitude": 72.5408363
    },
    "shippingAddressCount": 1,
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
      "locality",
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
  "likelyIssue": [],
  "status": "VERIFY_AUTH_FIRESTORE_MATCH_OK"
}
```

## Final Status
STATUS: VERIFY_AUTH_FIRESTORE_MATCH_OK