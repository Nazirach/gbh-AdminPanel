# FIRESTORE BANDA ACEH VENDOR SEED PREVIEW

Generated: 07/01/2026 02:38:31
Mode: READ ONLY PREVIEW. No Firestore write.

Goal:
Create a minimal real vendor inside the valid Banda Aceh zone so APK vendor query can return data.

Target zone:
zoneId=q8OOxNm1zgyVqggkCibX
zoneName=banda aceh

Candidate vendor:
vendorId=custom_banda_aceh_restaurant_demo
title=GHALBIT Banda Aceh Food
section_id=6285ddbfd9598
sectionName=Restaurants
zoneId=q8OOxNm1zgyVqggkCibX
coordinates=GeoPoint(5.55, 95.32)
latitude=5.55
longitude=95.32
categoryID=[] or existing restaurant category id after category audit
enabledDiveInFuture=false
photo=placeholder or existing safe image

Important:
Before writing vendor seed, audit restaurant vendor_categories for section_id=6285ddbfd9598.
APK may require categoryID to match existing vendor_categories.

Final Status:
STATUS: FIRESTORE_BANDA_ACEH_VENDOR_SEED_PREVIEW_CREATED