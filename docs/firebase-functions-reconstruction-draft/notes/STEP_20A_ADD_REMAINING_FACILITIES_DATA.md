# ADD REMAINING FACILITIES DATA

Generated: 2026-06-29T11:28:22.704Z

Mode: controlled Firebase write. Add/update remaining facilities only. No delete.

Project: erbete-putra

## Write Report
```json
[
  {
    "collection": "parcel_categories",
    "id": "custom_motor_food_delivery",
    "action": "UPSERT",
    "name": "Food Delivery",
    "sectionId": "custom_motor_delivery",
    "publish": true,
    "isActive": true
  },
  {
    "collection": "parcel_categories",
    "id": "custom_motor_small_package",
    "action": "UPSERT",
    "name": "Small Package",
    "sectionId": "custom_motor_delivery",
    "publish": true,
    "isActive": true
  },
  {
    "collection": "parcel_categories",
    "id": "custom_motor_document_delivery",
    "action": "UPSERT",
    "name": "Document Delivery",
    "sectionId": "custom_motor_delivery",
    "publish": true,
    "isActive": true
  },
  {
    "collection": "parcel_categories",
    "id": "custom_motor_shop_delivery",
    "action": "UPSERT",
    "name": "Shop Delivery",
    "sectionId": "custom_motor_delivery",
    "publish": true,
    "isActive": true
  },
  {
    "collection": "parcel_categories",
    "id": "custom_motor_express_delivery",
    "action": "UPSERT",
    "name": "Express Motor Delivery",
    "sectionId": "custom_motor_delivery",
    "publish": true,
    "isActive": true
  },
  {
    "collection": "providers_services",
    "id": "custom_emergency_medical_help",
    "action": "UPSERT",
    "name": "Medical Help",
    "sectionId": "custom_emergency_help",
    "publish": true,
    "isActive": true
  },
  {
    "collection": "providers_services",
    "id": "custom_emergency_ambulance_call",
    "action": "UPSERT",
    "name": "Ambulance Call",
    "sectionId": "custom_emergency_help",
    "publish": true,
    "isActive": true
  },
  {
    "collection": "providers_services",
    "id": "custom_emergency_roadside_help",
    "action": "UPSERT",
    "name": "Roadside Help",
    "sectionId": "custom_emergency_help",
    "publish": true,
    "isActive": true
  },
  {
    "collection": "providers_services",
    "id": "custom_emergency_family_help",
    "action": "UPSERT",
    "name": "Family Emergency",
    "sectionId": "custom_emergency_help",
    "publish": true,
    "isActive": true
  },
  {
    "collection": "providers_services",
    "id": "custom_emergency_disaster_help",
    "action": "UPSERT",
    "name": "Disaster Help",
    "sectionId": "custom_emergency_help",
    "publish": true,
    "isActive": true
  },
  {
    "collection": "providers_services",
    "id": "custom_emergency_security_help",
    "action": "UPSERT",
    "name": "Security Help",
    "sectionId": "custom_emergency_help",
    "publish": true,
    "isActive": true
  }
]
```

## Verification
```json
{
  "motorDelivery": [
    {
      "id": "custom_motor_document_delivery",
      "name": "Document Delivery",
      "section_id": "custom_motor_delivery",
      "sectionId": "custom_motor_delivery",
      "publish": true,
      "isActive": true
    },
    {
      "id": "custom_motor_express_delivery",
      "name": "Express Motor Delivery",
      "section_id": "custom_motor_delivery",
      "sectionId": "custom_motor_delivery",
      "publish": true,
      "isActive": true
    },
    {
      "id": "custom_motor_food_delivery",
      "name": "Food Delivery",
      "section_id": "custom_motor_delivery",
      "sectionId": "custom_motor_delivery",
      "publish": true,
      "isActive": true
    },
    {
      "id": "custom_motor_shop_delivery",
      "name": "Shop Delivery",
      "section_id": "custom_motor_delivery",
      "sectionId": "custom_motor_delivery",
      "publish": true,
      "isActive": true
    },
    {
      "id": "custom_motor_small_package",
      "name": "Small Package",
      "section_id": "custom_motor_delivery",
      "sectionId": "custom_motor_delivery",
      "publish": true,
      "isActive": true
    }
  ],
  "emergencyHelp": [
    {
      "id": "custom_emergency_ambulance_call",
      "name": "Ambulance Call",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "publish": true,
      "isActive": true,
      "price": "450",
      "hasPhoto": true
    },
    {
      "id": "custom_emergency_disaster_help",
      "name": "Disaster Help",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "publish": true,
      "isActive": true,
      "price": "450",
      "hasPhoto": true
    },
    {
      "id": "custom_emergency_family_help",
      "name": "Family Emergency",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "publish": true,
      "isActive": true,
      "price": "450",
      "hasPhoto": true
    },
    {
      "id": "custom_emergency_medical_help",
      "name": "Medical Help",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "publish": true,
      "isActive": true,
      "price": "450",
      "hasPhoto": true
    },
    {
      "id": "custom_emergency_roadside_help",
      "name": "Roadside Help",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "publish": true,
      "isActive": true,
      "price": "450",
      "hasPhoto": true
    },
    {
      "id": "custom_emergency_security_help",
      "name": "Security Help",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "publish": true,
      "isActive": true,
      "price": "450",
      "hasPhoto": true
    }
  ]
}
```

## Final Status
STATUS: REMAINING_FACILITIES_DATA_ADDED