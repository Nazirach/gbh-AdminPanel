# ADD AKAP TICKET SERVICE DATA

Generated: 2026-06-29T02:07:40.742Z

Mode: controlled Firebase write. Add/update AKAP Ticket category/vendors only. No delete.

Project: erbete-putra
Section: custom_akap_ticket

## Write Report
```json
[
  {
    "collection": "vendor_categories",
    "id": "custom_akap_ticket_category",
    "action": "UPSERT",
    "name": "AKAP Ticket",
    "section_id": "custom_akap_ticket"
  },
  {
    "collection": "vendors",
    "id": "custom_akap_vendor_lhokseumawe_medan",
    "action": "UPSERT",
    "name": "AKAP Lhokseumawe - Medan",
    "categoryID": "custom_akap_ticket_category",
    "section_id": "custom_akap_ticket",
    "zoneId": null,
    "hasGeo": true
  },
  {
    "collection": "vendors",
    "id": "custom_akap_vendor_aceh_jakarta",
    "action": "UPSERT",
    "name": "AKAP Aceh - Jakarta",
    "categoryID": "custom_akap_ticket_category",
    "section_id": "custom_akap_ticket",
    "zoneId": null,
    "hasGeo": true
  },
  {
    "collection": "vendors",
    "id": "custom_akap_vendor_sumatra_express",
    "action": "UPSERT",
    "name": "Sumatra Express Ticket",
    "categoryID": "custom_akap_ticket_category",
    "section_id": "custom_akap_ticket",
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
    "description": "Tiket bus AKAP, travel antar kota, lintas provinsi, dan perjalanan darat jarak jauh.",
    "photo": "https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fburger.png?alt=media&token=b89d777c-109f-4235-bea3-a0ddd3b06838",
    "sectionId": "custom_akap_ticket",
    "isActive": true,
    "title": "AKAP Ticket",
    "createdAt": "2026-06-29T02:07:39.999Z",
    "section_id": "custom_akap_ticket",
    "publish": true,
    "name": "AKAP Ticket",
    "id": "custom_akap_ticket_category",
    "show_in_homepage": false,
    "order": 16,
    "updatedAt": "2026-06-29T02:07:39.999Z"
  },
  "vendors": [
    {
      "id": "custom_akap_vendor_aceh_jakarta",
      "name": "AKAP Aceh - Jakarta",
      "categoryID": "custom_akap_ticket_category",
      "section_id": "custom_akap_ticket",
      "sectionId": "custom_akap_ticket",
      "zoneId": null,
      "publish": true,
      "isActive": true,
      "hasGeo": true
    },
    {
      "id": "custom_akap_vendor_lhokseumawe_medan",
      "name": "AKAP Lhokseumawe - Medan",
      "categoryID": "custom_akap_ticket_category",
      "section_id": "custom_akap_ticket",
      "sectionId": "custom_akap_ticket",
      "zoneId": null,
      "publish": true,
      "isActive": true,
      "hasGeo": true
    },
    {
      "id": "custom_akap_vendor_sumatra_express",
      "name": "Sumatra Express Ticket",
      "categoryID": "custom_akap_ticket_category",
      "section_id": "custom_akap_ticket",
      "sectionId": "custom_akap_ticket",
      "zoneId": null,
      "publish": true,
      "isActive": true,
      "hasGeo": true
    }
  ]
}
```

## Final Status
STATUS: AKAP_TICKET_SERVICE_DATA_ADDED