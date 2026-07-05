# PATCH TEST CUSTOMER SHIPPING ADDRESS TO DEMO INDIA

Generated: 2026-06-28T18:56:09.396Z

Mode: controlled Firebase write. Only target customer user document updated.

## Summary
```json
{
  "status": "TEST_CUSTOMER_SHIPPING_ADDRESS_PATCHED_TO_DEMO_INDIA",
  "targetEmail": "auditc20260628@gmail.com",
  "userDocId": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
  "beforeFirstShippingAddress": {
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
  },
  "afterFirstShippingAddress": {
    "isDefault": true,
    "address": "Gota, Ghatlodiya Taluka, Ahmedabad, Gujarat, 382481, India",
    "addressAs": "Home",
    "locality": "Gota, Ahmedabad, Gujarat, India",
    "location": {
      "latitude": 23.1010002,
      "longitude": 72.5408363
    },
    "id": "1c586194-f290-4da1-a39f-3a5209d9e435",
    "landmark": ""
  },
  "afterMainLocation": {
    "address": "Gota, Ghatlodiya Taluka, Ahmedabad, Gujarat, 382481, India",
    "locality": "Gota, Ahmedabad, Gujarat, India",
    "location": {
      "latitude": 23.1010002,
      "longitude": 72.5408363
    },
    "coordinates": {
      "latitude": 23.1010002,
      "longitude": 72.5408363
    },
    "latitude": 23.1010002,
    "longitude": 72.5408363
  }
}
```

## Full Report
```json
{
  "generatedAt": "2026-06-28T18:56:09.396Z",
  "mode": "controlled_write_patch_test_customer_shipping_address_to_demo_india",
  "project_id": "erbete-putra",
  "targetEmail": "auditc20260628@gmail.com",
  "before": {
    "userDocId": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
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
    ]
  },
  "after": {
    "userDocId": "ObO21tC9wyQq4YgxVGdTW5jD3NA2",
    "address": "Gota, Ghatlodiya Taluka, Ahmedabad, Gujarat, 382481, India",
    "locality": "Gota, Ahmedabad, Gujarat, India",
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
    "shippingAddress": [
      {
        "isDefault": true,
        "address": "Gota, Ghatlodiya Taluka, Ahmedabad, Gujarat, 382481, India",
        "addressAs": "Home",
        "locality": "Gota, Ahmedabad, Gujarat, India",
        "location": {
          "latitude": 23.1010002,
          "longitude": 72.5408363
        },
        "id": "1c586194-f290-4da1-a39f-3a5209d9e435",
        "landmark": ""
      }
    ]
  },
  "status": "TEST_CUSTOMER_SHIPPING_ADDRESS_PATCHED_TO_DEMO_INDIA"
}
```

## Final Status
STATUS: TEST_CUSTOMER_SHIPPING_ADDRESS_PATCHED_TO_DEMO_INDIA