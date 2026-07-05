# FIRESTORE BANDA ACEH ZONE PATCH PREVIEW

Generated: 07/01/2026 02:34:05
Mode: READ ONLY PREVIEW. No Firestore write.

Target zone:
zoneId=q8OOxNm1zgyVqggkCibX
name=banda aceh

Problem:
Existing zone has only one point and wrong coordinates.
pointCount=1
latitude=60.79465073254031
longitude=0.4784531796845526

This is not a valid service polygon for Banda Aceh.

Proposed Safe Patch:
Use a simple rectangular Banda Aceh service area polygon.

Approximate polygon points:
1: lat=5.45 lng=95.20
2: lat=5.45 lng=95.45
3: lat=5.70 lng=95.45
4: lat=5.70 lng=95.20

Center:
latitude=5.55
longitude=95.32

Fields to update:
name = banda aceh
latitude = 5.55
longitude = 95.32
area = GeoPoint polygon with 4 points
publish = true

Important:
After this zone patch, rerun vendor zoneId simulation.
Only vendors inside this valid Aceh polygon should be backfilled.

Final Status:
STATUS: FIRESTORE_BANDA_ACEH_ZONE_PATCH_PREVIEW_CREATED