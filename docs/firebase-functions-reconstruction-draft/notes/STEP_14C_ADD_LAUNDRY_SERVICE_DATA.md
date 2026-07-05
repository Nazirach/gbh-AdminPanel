# ADD LAUNDRY SERVICE DATA

Generated: 2026-06-29T01:55:28.584Z

Mode: controlled Firebase write. Add/update Laundry category/vendors only. No delete.

Project: erbete-putra
Section: custom_laundry_service

## Write Report
```json
[
  {
    "collection": "vendor_categories",
    "id": "custom_laundry_category",
    "action": "UPSERT",
    "name": "Laundry Service",
    "section_id": "custom_laundry_service"
  },
  {
    "collection": "vendors",
    "id": "custom_laundry_vendor_gota_clean",
    "action": "UPSERT",
    "name": "Gota Clean Laundry",
    "categoryID": "custom_laundry_category",
    "section_id": "custom_laundry_service",
    "zoneId": null,
    "hasGeo": true
  },
  {
    "collection": "vendors",
    "id": "custom_laundry_vendor_fresh_wash",
    "action": "UPSERT",
    "name": "Fresh Wash Laundry",
    "categoryID": "custom_laundry_category",
    "section_id": "custom_laundry_service",
    "zoneId": null,
    "hasGeo": true
  },
  {
    "collection": "vendors",
    "id": "custom_laundry_vendor_express_care",
    "action": "UPSERT",
    "name": "Express Care Laundry",
    "categoryID": "custom_laundry_category",
    "section_id": "custom_laundry_service",
    "zoneId": null,
    "hasGeo": true
  }
]
```

## Verification
```json
{
  "category": {
    "review_attributes": [
      "63493c00b14d6",
      "63a3e8de933f7"
    ],
    "description": "Laundry kiloan, express, dry cleaning, setrika, cuci sepatu, dan cuci karpet.",
    "photo": "https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fburger.png?alt=media&token=b89d777c-109f-4235-bea3-a0ddd3b06838",
    "sectionId": "custom_laundry_service",
    "isActive": true,
    "title": "Laundry Service",
    "createdAt": "2026-06-29T01:55:27.967Z",
    "section_id": "custom_laundry_service",
    "publish": true,
    "name": "Laundry Service",
    "id": "custom_laundry_category",
    "show_in_homepage": false,
    "order": 16,
    "updatedAt": "2026-06-29T01:55:27.967Z"
  },
  "vendors": [
    {
      "id": "custom_laundry_vendor_express_care",
      "name": "Express Care Laundry",
      "categoryID": "custom_laundry_category",
      "section_id": "custom_laundry_service",
      "sectionId": "custom_laundry_service",
      "zoneId": null,
      "publish": true,
      "isActive": true,
      "hasGeo": true
    },
    {
      "id": "custom_laundry_vendor_fresh_wash",
      "name": "Fresh Wash Laundry",
      "categoryID": "custom_laundry_category",
      "section_id": "custom_laundry_service",
      "sectionId": "custom_laundry_service",
      "zoneId": null,
      "publish": true,
      "isActive": true,
      "hasGeo": true
    },
    {
      "id": "custom_laundry_vendor_gota_clean",
      "name": "Gota Clean Laundry",
      "categoryID": "custom_laundry_category",
      "section_id": "custom_laundry_service",
      "sectionId": "custom_laundry_service",
      "zoneId": null,
      "publish": true,
      "isActive": true,
      "hasGeo": true
    }
  ]
}
```

## Final Status
STATUS: LAUNDRY_SERVICE_DATA_ADDED