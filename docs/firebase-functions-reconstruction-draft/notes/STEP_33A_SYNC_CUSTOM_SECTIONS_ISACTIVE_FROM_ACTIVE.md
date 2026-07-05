# SYNC CUSTOM SECTIONS isActive FROM active

Generated: 2026-06-30T14:54:45.240Z
Mode: controlled Firebase write. Collection: sections. Target: custom section docs only.
Project: erbete-putra

## Before
```json
[
  {
    "id": "custom_laundry_service",
    "name": "Laundry Service",
    "active": true,
    "isActive": false,
    "serviceTypeFlag": "delivery-service"
  },
  {
    "id": "custom_document_service",
    "name": "Document Service",
    "active": true,
    "isActive": false,
    "serviceTypeFlag": "parcel_delivery"
  },
  {
    "id": "custom_hotel_homestay",
    "name": "Hotel / Homestay",
    "active": true,
    "isActive": false,
    "serviceTypeFlag": "rental-service"
  },
  {
    "id": "custom_akap_ticket",
    "name": "AKAP Ticket",
    "active": true,
    "isActive": false,
    "serviceTypeFlag": "ecommerce-service"
  },
  {
    "id": "custom_technician_service",
    "name": "Technician Service",
    "active": true,
    "isActive": false,
    "serviceTypeFlag": "ondemand-service"
  },
  {
    "id": "custom_housemaid_art",
    "name": "Housemaid / ART",
    "active": true,
    "isActive": false,
    "serviceTypeFlag": "ondemand-service"
  },
  {
    "id": "custom_motor_delivery",
    "name": "Motor Delivery",
    "active": true,
    "isActive": false,
    "serviceTypeFlag": "parcel_delivery"
  },
  {
    "id": "custom_emergency_help",
    "name": "Emergency Help",
    "active": true,
    "isActive": false,
    "serviceTypeFlag": "ondemand-service"
  }
]
```

## Writes
```json
[
  {
    "id": "custom_laundry_service",
    "isActive": true,
    "active": true
  },
  {
    "id": "custom_document_service",
    "isActive": true,
    "active": true
  },
  {
    "id": "custom_hotel_homestay",
    "isActive": true,
    "active": true
  },
  {
    "id": "custom_akap_ticket",
    "isActive": true,
    "active": true
  },
  {
    "id": "custom_technician_service",
    "isActive": true,
    "active": true
  },
  {
    "id": "custom_housemaid_art",
    "isActive": true,
    "active": true
  },
  {
    "id": "custom_motor_delivery",
    "isActive": true,
    "active": true
  },
  {
    "id": "custom_emergency_help",
    "isActive": true,
    "active": true
  }
]
```

## After
```json
[
  {
    "id": "custom_laundry_service",
    "name": "Laundry Service",
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "delivery-service"
  },
  {
    "id": "custom_document_service",
    "name": "Document Service",
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "parcel_delivery"
  },
  {
    "id": "custom_hotel_homestay",
    "name": "Hotel / Homestay",
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "rental-service"
  },
  {
    "id": "custom_akap_ticket",
    "name": "AKAP Ticket",
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "ecommerce-service"
  },
  {
    "id": "custom_technician_service",
    "name": "Technician Service",
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "ondemand-service"
  },
  {
    "id": "custom_housemaid_art",
    "name": "Housemaid / ART",
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "ondemand-service"
  },
  {
    "id": "custom_motor_delivery",
    "name": "Motor Delivery",
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "parcel_delivery"
  },
  {
    "id": "custom_emergency_help",
    "name": "Emergency Help",
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "ondemand-service"
  }
]
```

## APK Active Query Result
```json
[
  {
    "id": "yJTddzJUxP3cOU5DpJ10",
    "name": "Home/On Demand Service",
    "order": 9,
    "active": null,
    "isActive": true,
    "serviceTypeFlag": "ondemand-service"
  },
  {
    "id": "custom_laundry_service",
    "name": "Laundry Service",
    "order": 10,
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "delivery-service"
  },
  {
    "id": "custom_document_service",
    "name": "Document Service",
    "order": 11,
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "parcel_delivery"
  },
  {
    "id": "custom_hotel_homestay",
    "name": "Hotel / Homestay",
    "order": 12,
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "rental-service"
  },
  {
    "id": "custom_akap_ticket",
    "name": "AKAP Ticket",
    "order": 13,
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "ecommerce-service"
  },
  {
    "id": "custom_technician_service",
    "name": "Technician Service",
    "order": 14,
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "ondemand-service"
  },
  {
    "id": "custom_housemaid_art",
    "name": "Housemaid / ART",
    "order": 15,
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "ondemand-service"
  },
  {
    "id": "custom_motor_delivery",
    "name": "Motor Delivery",
    "order": 16,
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "parcel_delivery"
  },
  {
    "id": "custom_emergency_help",
    "name": "Emergency Help",
    "order": 17,
    "active": true,
    "isActive": true,
    "serviceTypeFlag": "ondemand-service"
  }
]
```

## Final Status
STATUS: CUSTOM_SECTIONS_ISACTIVE_SYNCED_FROM_ACTIVE