# ADD HOTEL HOMESTAY RENTAL TYPES

Generated: 2026-06-29T02:05:26.112Z

Mode: controlled Firebase write. Add/update hotel/homestay rental types only. No delete.

Project: erbete-putra
Section: custom_hotel_homestay

## Write Report
```json
[
  {
    "collection": "rental_vehicle_type",
    "id": "custom_hotel_room",
    "action": "UPSERT",
    "name": "Hotel Room",
    "sectionId": "custom_hotel_homestay",
    "isActive": true,
    "ordering": 1
  },
  {
    "collection": "rental_vehicle_type",
    "id": "custom_homestay",
    "action": "UPSERT",
    "name": "Homestay",
    "sectionId": "custom_hotel_homestay",
    "isActive": true,
    "ordering": 2
  },
  {
    "collection": "rental_vehicle_type",
    "id": "custom_guest_house",
    "action": "UPSERT",
    "name": "Guest House",
    "sectionId": "custom_hotel_homestay",
    "isActive": true,
    "ordering": 3
  },
  {
    "collection": "rental_vehicle_type",
    "id": "custom_family_stay",
    "action": "UPSERT",
    "name": "Family Stay",
    "sectionId": "custom_hotel_homestay",
    "isActive": true,
    "ordering": 4
  },
  {
    "collection": "rental_vehicle_type",
    "id": "custom_monthly_room",
    "action": "UPSERT",
    "name": "Monthly Room",
    "sectionId": "custom_hotel_homestay",
    "isActive": true,
    "ordering": 5
  }
]
```

## Verification
```json
[
  {
    "id": "custom_family_stay",
    "name": "Family Stay",
    "sectionId": "custom_hotel_homestay",
    "section_id": "custom_hotel_homestay",
    "isActive": true,
    "publish": true,
    "ordering": 4,
    "hasIcon": true
  },
  {
    "id": "custom_guest_house",
    "name": "Guest House",
    "sectionId": "custom_hotel_homestay",
    "section_id": "custom_hotel_homestay",
    "isActive": true,
    "publish": true,
    "ordering": 3,
    "hasIcon": true
  },
  {
    "id": "custom_homestay",
    "name": "Homestay",
    "sectionId": "custom_hotel_homestay",
    "section_id": "custom_hotel_homestay",
    "isActive": true,
    "publish": true,
    "ordering": 2,
    "hasIcon": true
  },
  {
    "id": "custom_hotel_room",
    "name": "Hotel Room",
    "sectionId": "custom_hotel_homestay",
    "section_id": "custom_hotel_homestay",
    "isActive": true,
    "publish": true,
    "ordering": 1,
    "hasIcon": true
  },
  {
    "id": "custom_monthly_room",
    "name": "Monthly Room",
    "sectionId": "custom_hotel_homestay",
    "section_id": "custom_hotel_homestay",
    "isActive": true,
    "publish": true,
    "ordering": 5,
    "hasIcon": true
  }
]
```

## Final Status
STATUS: HOTEL_HOMESTAY_RENTAL_TYPES_ADDED