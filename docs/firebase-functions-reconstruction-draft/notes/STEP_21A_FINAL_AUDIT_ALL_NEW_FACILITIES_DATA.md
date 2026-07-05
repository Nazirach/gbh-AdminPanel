# FINAL AUDIT ALL NEW FACILITIES DATA

Generated: 2026-06-29T11:33:19.459Z
Mode: read-only. No Firebase write.
Project: erbete-putra

## Counts
```json
{
  "sectionsFound": 8,
  "vendor_categories": 2,
  "vendors": 6,
  "parcel_categories": 10,
  "rental_vehicle_type": 5,
  "providers_services": 17
}
```

## Full Result
```json
{
  "sections": [
    {
      "id": "custom_laundry_service",
      "exists": true,
      "data": {
        "name": "Laundry Service",
        "serviceTypeFlag": "delivery-service",
        "order": 10,
        "isActive": true,
        "active": true
      }
    },
    {
      "id": "custom_document_service",
      "exists": true,
      "data": {
        "name": "Document Service",
        "serviceTypeFlag": "parcel_delivery",
        "order": 11,
        "isActive": true,
        "active": true
      }
    },
    {
      "id": "custom_hotel_homestay",
      "exists": true,
      "data": {
        "name": "Hotel / Homestay",
        "serviceTypeFlag": "rental-service",
        "order": 12,
        "isActive": true,
        "active": true
      }
    },
    {
      "id": "custom_akap_ticket",
      "exists": true,
      "data": {
        "name": "AKAP Ticket",
        "serviceTypeFlag": "ecommerce-service",
        "order": 13,
        "isActive": true,
        "active": true
      }
    },
    {
      "id": "custom_technician_service",
      "exists": true,
      "data": {
        "name": "Technician Service",
        "serviceTypeFlag": "ondemand-service",
        "order": 14,
        "isActive": true,
        "active": true
      }
    },
    {
      "id": "custom_housemaid_art",
      "exists": true,
      "data": {
        "name": "Housemaid / ART",
        "serviceTypeFlag": "ondemand-service",
        "order": 15,
        "isActive": true,
        "active": true
      }
    },
    {
      "id": "custom_motor_delivery",
      "exists": true,
      "data": {
        "name": "Motor Delivery",
        "serviceTypeFlag": "parcel_delivery",
        "order": 16,
        "isActive": true,
        "active": true
      }
    },
    {
      "id": "custom_emergency_help",
      "exists": true,
      "data": {
        "name": "Emergency Help",
        "serviceTypeFlag": "ondemand-service",
        "order": 17,
        "isActive": true,
        "active": true
      }
    }
  ],
  "vendor_categories": [
    {
      "id": "custom_laundry_category",
      "name": "Laundry Service",
      "sectionId": "custom_laundry_service",
      "section_id": "custom_laundry_service",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_akap_ticket_category",
      "name": "AKAP Ticket",
      "sectionId": "custom_akap_ticket",
      "section_id": "custom_akap_ticket",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    }
  ],
  "vendors": [
    {
      "id": "custom_laundry_vendor_express_care",
      "name": "Express Care Laundry",
      "sectionId": "custom_laundry_service",
      "section_id": "custom_laundry_service",
      "categoryID": "custom_laundry_category",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_laundry_vendor_fresh_wash",
      "name": "Fresh Wash Laundry",
      "sectionId": "custom_laundry_service",
      "section_id": "custom_laundry_service",
      "categoryID": "custom_laundry_category",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_laundry_vendor_gota_clean",
      "name": "Gota Clean Laundry",
      "sectionId": "custom_laundry_service",
      "section_id": "custom_laundry_service",
      "categoryID": "custom_laundry_category",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_akap_vendor_aceh_jakarta",
      "name": "AKAP Aceh - Jakarta",
      "sectionId": "custom_akap_ticket",
      "section_id": "custom_akap_ticket",
      "categoryID": "custom_akap_ticket_category",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_akap_vendor_lhokseumawe_medan",
      "name": "AKAP Lhokseumawe - Medan",
      "sectionId": "custom_akap_ticket",
      "section_id": "custom_akap_ticket",
      "categoryID": "custom_akap_ticket_category",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_akap_vendor_sumatra_express",
      "name": "Sumatra Express Ticket",
      "sectionId": "custom_akap_ticket",
      "section_id": "custom_akap_ticket",
      "categoryID": "custom_akap_ticket_category",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    }
  ],
  "parcel_categories": [
    {
      "id": "custom_document_bank",
      "name": "Bank / Finance Document",
      "sectionId": "custom_document_service",
      "section_id": "custom_document_service",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_document_express",
      "name": "Express Document",
      "sectionId": "custom_document_service",
      "section_id": "custom_document_service",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_document_legal",
      "name": "Legal Document",
      "sectionId": "custom_document_service",
      "section_id": "custom_document_service",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_document_office",
      "name": "Office Document",
      "sectionId": "custom_document_service",
      "section_id": "custom_document_service",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_document_personal",
      "name": "Personal Document",
      "sectionId": "custom_document_service",
      "section_id": "custom_document_service",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_motor_document_delivery",
      "name": "Document Delivery",
      "sectionId": "custom_motor_delivery",
      "section_id": "custom_motor_delivery",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_motor_express_delivery",
      "name": "Express Motor Delivery",
      "sectionId": "custom_motor_delivery",
      "section_id": "custom_motor_delivery",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_motor_food_delivery",
      "name": "Food Delivery",
      "sectionId": "custom_motor_delivery",
      "section_id": "custom_motor_delivery",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_motor_shop_delivery",
      "name": "Shop Delivery",
      "sectionId": "custom_motor_delivery",
      "section_id": "custom_motor_delivery",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_motor_small_package",
      "name": "Small Package",
      "sectionId": "custom_motor_delivery",
      "section_id": "custom_motor_delivery",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    }
  ],
  "rental_vehicle_type": [
    {
      "id": "custom_family_stay",
      "name": "Family Stay",
      "sectionId": "custom_hotel_homestay",
      "section_id": "custom_hotel_homestay",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_guest_house",
      "name": "Guest House",
      "sectionId": "custom_hotel_homestay",
      "section_id": "custom_hotel_homestay",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_homestay",
      "name": "Homestay",
      "sectionId": "custom_hotel_homestay",
      "section_id": "custom_hotel_homestay",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_hotel_room",
      "name": "Hotel Room",
      "sectionId": "custom_hotel_homestay",
      "section_id": "custom_hotel_homestay",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    },
    {
      "id": "custom_monthly_room",
      "name": "Monthly Room",
      "sectionId": "custom_hotel_homestay",
      "section_id": "custom_hotel_homestay",
      "categoryID": null,
      "publish": true,
      "isActive": true,
      "hasGeo": false,
      "hasPhoto": true
    }
  ],
  "providers_services": [
    {
      "id": "custom_technician_ac_service",
      "name": "AC Service",
      "sectionId": "custom_technician_service",
      "section_id": "custom_technician_service",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_technician_electrical",
      "name": "Electrical Repair",
      "sectionId": "custom_technician_service",
      "section_id": "custom_technician_service",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_technician_electronics",
      "name": "Electronics Repair",
      "sectionId": "custom_technician_service",
      "section_id": "custom_technician_service",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_technician_home_maintenance",
      "name": "Home Maintenance",
      "sectionId": "custom_technician_service",
      "section_id": "custom_technician_service",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_technician_plumbing",
      "name": "Plumbing Service",
      "sectionId": "custom_technician_service",
      "section_id": "custom_technician_service",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_art_baby_sitter",
      "name": "Baby Sitter",
      "sectionId": "custom_housemaid_art",
      "section_id": "custom_housemaid_art",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_art_cooking_help",
      "name": "Cooking Helper",
      "sectionId": "custom_housemaid_art",
      "section_id": "custom_housemaid_art",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_art_daily_cleaning",
      "name": "Daily House Cleaning",
      "sectionId": "custom_housemaid_art",
      "section_id": "custom_housemaid_art",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_art_elderly_care",
      "name": "Elderly Care",
      "sectionId": "custom_housemaid_art",
      "section_id": "custom_housemaid_art",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_art_full_day",
      "name": "Full Day ART",
      "sectionId": "custom_housemaid_art",
      "section_id": "custom_housemaid_art",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_art_weekly_cleaning",
      "name": "Weekly Cleaning",
      "sectionId": "custom_housemaid_art",
      "section_id": "custom_housemaid_art",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_emergency_ambulance_call",
      "name": "Ambulance Call",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_emergency_disaster_help",
      "name": "Disaster Help",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_emergency_family_help",
      "name": "Family Emergency",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_emergency_medical_help",
      "name": "Medical Help",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_emergency_roadside_help",
      "name": "Roadside Help",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    },
    {
      "id": "custom_emergency_security_help",
      "name": "Security Help",
      "sectionId": "custom_emergency_help",
      "section_id": "custom_emergency_help",
      "categoryID": "GHJsFdDfnyzAEihxxC0D",
      "publish": true,
      "isActive": true,
      "hasGeo": true,
      "hasPhoto": true
    }
  ]
}
```

## Final Status
STATUS: FINAL_NEW_FACILITIES_AUDIT_CREATED