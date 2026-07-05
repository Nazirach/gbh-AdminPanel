# FIRESTORE COUPONS INDEX REQUIRED

Generated: 07/01/2026 01:26:55
Mode: read only. No patch.

Source report: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\STEP_41B_RECHECK_APK_RUNTIME_LOG_AFTER_INDEX.md

## Finding
```text
Latest runtime log is clean for sections and vendors.
Remaining Firestore index issue is coupons.

Collection: coupons
Query pattern:
- where expiresAt >= <current time>
- where isEnabled == true
- where isPublic == true
- orderBy expiresAt
- orderBy __name__
```

## Index Create Links
```text
https://console.firebase.google.com/v1/r/project/erbete-putra/firestore/indexes?create_composite=Ckxwcm9qZWN0cy9lcmJldGUtcHV0cmEvZGF0YWJhc2VzLyhkZWZhdWx0KS9jb2xsZWN0aW9uR3JvdXBzL2NvdXBvbnMvaW5kZXhlcy9fEAEaDQoJaXNFbmFibGVkEAEaDAoIaXNQdWJsaWMQARoNCglleHBpcmVzQXQQARoMCghfX25hbWVfXxAB
```

## Related Errors
```text
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\STEP_41B_RECHECK_APK_RUNTIME_LOG_AFTER_INDEX.md:69:07-01 01:19:17.324 W/Firestore(24352): (25.1.4) [Firestore]: Listen for Query(target=Query(coupons where expiresAt>=time(1782843557,1171000) and isEnabled==true and isPublic==true order by expiresAt, __name__);limitType=LIMIT_TO_FIRST) failed: Status{code=FAILED_PRECONDITION, description=The query requires an index. You can create it here: https://console.firebase.google.com/v1/r/project/erbete-putra/firestore/indexes?create_composite=Ckxwcm9qZWN0cy9lcmJldGUtcHV0cmEvZGF0YWJhc2VzLyhkZWZhdWx0KS9jb2xsZWN0aW9uR3JvdXBzL2NvdXBvbnMvaW5kZXhlcy9fEAEaDQoJaXNFbmFibGVkEAEaDAoIaXNQdWJsaWMQARoNCglleHBpcmVzQXQQARoMCghfX25hbWVfXxAB, cause=null}
```

## Final Status
STATUS: FIRESTORE_COUPONS_INDEX_LINK_EXTRACTED