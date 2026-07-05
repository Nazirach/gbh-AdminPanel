# ADD TECHNICIAN SERVICE DATA

Generated: 2026-06-29T11:23:09.459Z

Mode: controlled Firebase write. Add/update technician on-demand services only. No delete.

Project: erbete-putra
Section: custom_technician_service

## Write Report
```json
[
  {
    "collection": "providers_services",
    "id": "custom_technician_ac_service",
    "action": "UPSERT",
    "name": "AC Service",
    "sectionId": "custom_technician_service",
    "publish": true,
    "isActive": true,
    "ordering": 1
  },
  {
    "collection": "providers_services",
    "id": "custom_technician_electrical",
    "action": "UPSERT",
    "name": "Electrical Repair",
    "sectionId": "custom_technician_service",
    "publish": true,
    "isActive": true,
    "ordering": 2
  },
  {
    "collection": "providers_services",
    "id": "custom_technician_plumbing",
    "action": "UPSERT",
    "name": "Plumbing Service",
    "sectionId": "custom_technician_service",
    "publish": true,
    "isActive": true,
    "ordering": 3
  },
  {
    "collection": "providers_services",
    "id": "custom_technician_electronics",
    "action": "UPSERT",
    "name": "Electronics Repair",
    "sectionId": "custom_technician_service",
    "publish": true,
    "isActive": true,
    "ordering": 4
  },
  {
    "collection": "providers_services",
    "id": "custom_technician_home_maintenance",
    "action": "UPSERT",
    "name": "Home Maintenance",
    "sectionId": "custom_technician_service",
    "publish": true,
    "isActive": true,
    "ordering": 5
  }
]
```

## Verification
```json
[
  {
    "id": "custom_technician_ac_service",
    "name": "AC Service",
    "sectionId": "custom_technician_service",
    "section_id": "custom_technician_service",
    "publish": true,
    "isActive": true,
    "price": "450",
    "hasPhoto": true
  },
  {
    "id": "custom_technician_electrical",
    "name": "Electrical Repair",
    "sectionId": "custom_technician_service",
    "section_id": "custom_technician_service",
    "publish": true,
    "isActive": true,
    "price": "450",
    "hasPhoto": true
  },
  {
    "id": "custom_technician_electronics",
    "name": "Electronics Repair",
    "sectionId": "custom_technician_service",
    "section_id": "custom_technician_service",
    "publish": true,
    "isActive": true,
    "price": "450",
    "hasPhoto": true
  },
  {
    "id": "custom_technician_home_maintenance",
    "name": "Home Maintenance",
    "sectionId": "custom_technician_service",
    "section_id": "custom_technician_service",
    "publish": true,
    "isActive": true,
    "price": "450",
    "hasPhoto": true
  },
  {
    "id": "custom_technician_plumbing",
    "name": "Plumbing Service",
    "sectionId": "custom_technician_service",
    "section_id": "custom_technician_service",
    "publish": true,
    "isActive": true,
    "price": "450",
    "hasPhoto": true
  }
]
```

## Final Status
STATUS: TECHNICIAN_SERVICE_DATA_ADDED