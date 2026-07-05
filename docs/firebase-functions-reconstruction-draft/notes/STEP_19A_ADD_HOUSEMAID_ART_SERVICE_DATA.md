# ADD HOUSEMAID ART SERVICE DATA

Generated: 2026-06-29T11:25:42.224Z

Mode: controlled Firebase write. Add/update housemaid/ART on-demand services only. No delete.

Project: erbete-putra
Section: custom_housemaid_art

## Write Report
```json
[
  {
    "collection": "providers_services",
    "id": "custom_art_daily_cleaning",
    "action": "UPSERT",
    "name": "Daily House Cleaning",
    "sectionId": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "ordering": 1
  },
  {
    "collection": "providers_services",
    "id": "custom_art_weekly_cleaning",
    "action": "UPSERT",
    "name": "Weekly Cleaning",
    "sectionId": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "ordering": 2
  },
  {
    "collection": "providers_services",
    "id": "custom_art_cooking_help",
    "action": "UPSERT",
    "name": "Cooking Helper",
    "sectionId": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "ordering": 3
  },
  {
    "collection": "providers_services",
    "id": "custom_art_baby_sitter",
    "action": "UPSERT",
    "name": "Baby Sitter",
    "sectionId": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "ordering": 4
  },
  {
    "collection": "providers_services",
    "id": "custom_art_elderly_care",
    "action": "UPSERT",
    "name": "Elderly Care",
    "sectionId": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "ordering": 5
  },
  {
    "collection": "providers_services",
    "id": "custom_art_full_day",
    "action": "UPSERT",
    "name": "Full Day ART",
    "sectionId": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "ordering": 6
  }
]
```

## Verification
```json
[
  {
    "id": "custom_art_baby_sitter",
    "name": "Baby Sitter",
    "sectionId": "custom_housemaid_art",
    "section_id": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "price": "450",
    "hasPhoto": true
  },
  {
    "id": "custom_art_cooking_help",
    "name": "Cooking Helper",
    "sectionId": "custom_housemaid_art",
    "section_id": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "price": "450",
    "hasPhoto": true
  },
  {
    "id": "custom_art_daily_cleaning",
    "name": "Daily House Cleaning",
    "sectionId": "custom_housemaid_art",
    "section_id": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "price": "450",
    "hasPhoto": true
  },
  {
    "id": "custom_art_elderly_care",
    "name": "Elderly Care",
    "sectionId": "custom_housemaid_art",
    "section_id": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "price": "450",
    "hasPhoto": true
  },
  {
    "id": "custom_art_full_day",
    "name": "Full Day ART",
    "sectionId": "custom_housemaid_art",
    "section_id": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "price": "450",
    "hasPhoto": true
  },
  {
    "id": "custom_art_weekly_cleaning",
    "name": "Weekly Cleaning",
    "sectionId": "custom_housemaid_art",
    "section_id": "custom_housemaid_art",
    "publish": true,
    "isActive": true,
    "price": "450",
    "hasPhoto": true
  }
]
```

## Final Status
STATUS: HOUSEMAID_ART_SERVICE_DATA_ADDED