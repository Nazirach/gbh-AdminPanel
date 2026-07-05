# SERVICE 46E PATCH FASHION VENDOR NULL FIELDS

Generated: 2026-07-02T04:02:21.819Z
Mode: FIRESTORE DATA PATCH.
SectionId: 6285dd3281531
ZoneId: q8OOxNm1zgyVqggkCibX

FASHION_VENDOR_COUNT: 60

PATCHED_VENDOR: aceh_clone_6285dd3281531_05vPfo6g0mVhZZVlz6mB
TITLE: eFashion
BEFORE_ZONE: q8OOxNm1zgyVqggkCibX
BEFORE_LATITUDE: 5.55
BEFORE_LONGITUDE: 95.326
BEFORE_COORDINATES: {"_latitude":5.55,"_longitude":95.326}
BEFORE_CATEGORY_ID: 62ecfdfb02b2a
PATCH_KEYS: isActive,categoryID,categoryId,categorys,logo,name,step46eVendorNullFieldPatch,step46eVendorNullFieldPatchAt

PATCHED_VENDOR: aceh_clone_6285dd3281531_0mkKJ5MWOLiGIGrMnV4c
TITLE: Rumah Mode Syar"i
BEFORE_ZONE: q8OOxNm1zgyVqggkCibX
BEFORE_LATITUDE: 5.544
BEFORE_LONGITUDE: 95.32
BEFORE_COORDINATES: {"_latitude":5.544,"_longitude":95.32}
BEFORE_CATEGORY_ID: 636b70cc5a600
PATCH_KEYS: isActive,categoryID,categoryId,categorys,logo,name,step46eVendorNullFieldPatch,step46eVendorNullFieldPatchAt

PATCHED_VENDOR: aceh_clone_6285dd3281531_3HoJiFJNRQsTyBchMdxH
TITLE: Demo
BEFORE_ZONE: q8OOxNm1zgyVqggkCibX
BEFORE_LATITUDE: 5.55
BEFORE_LONGITUDE: 95.314
BEFORE_COORDINATES: {"_latitude":5.55,"_longitude":95.314}
BEFORE_CATEGORY_ID: 62ecfdfb02b2a
PATCH_KEYS: isActive,categoryID,categoryId,categorys,logo,name,step46eVendorNullFieldPatch,step46eVendorNullFieldPatchAt

## Verify after patch
VERIFY_VENDOR | id=aceh_clone_6285dd3281531_05vPfo6g0mVhZZVlz6mB | title=eFashion | zoneId=q8OOxNm1zgyVqggkCibX | latitude=5.55 | longitude=95.326 | hasCoordinates=true | categoryIDIsArray=true | categoryIdIsArray=true | categorysIsArray=true | risks=none
VERIFY_VENDOR | id=aceh_clone_6285dd3281531_0mkKJ5MWOLiGIGrMnV4c | title=Rumah Mode Syar"i | zoneId=q8OOxNm1zgyVqggkCibX | latitude=5.544 | longitude=95.32 | hasCoordinates=true | categoryIDIsArray=true | categoryIdIsArray=true | categorysIsArray=true | risks=none
VERIFY_VENDOR | id=aceh_clone_6285dd3281531_3HoJiFJNRQsTyBchMdxH | title=Demo | zoneId=q8OOxNm1zgyVqggkCibX | latitude=5.55 | longitude=95.314 | hasCoordinates=true | categoryIDIsArray=true | categoryIdIsArray=true | categorysIsArray=true | risks=none

## Totals
CLONE_VENDOR_COUNT: 3
PATCHED_VENDOR_COUNT: 3
SKIPPED_SOURCE_VENDOR_COUNT: 57
VERIFY_CLONE_VENDOR_COUNT: 3
VERIFY_VENDOR_RISK_COUNT: 0

## Final Status
STATUS: SERVICE_46E_FASHION_VENDOR_NULL_FIELDS_PATCH_PASS