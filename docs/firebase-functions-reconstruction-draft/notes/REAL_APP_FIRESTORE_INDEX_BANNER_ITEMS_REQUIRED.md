# FIRESTORE INDEX REQUIRED - BANNER ITEMS

Generated: 06/28/2026 22:07:51

## Cause

- Cab Service screen triggered FireStoreUtils.getHomeTopBanner.
- Firestore returned FAILED_PRECONDITION because composite index is missing.
- This is not a data write issue and not an app crash root. It is a required Firestore index.

## Required Index

Collection group / collection: banner_items

Fields:
- is_publish: Ascending
- position: Ascending
- sectionId: Ascending
- set_order: Ascending
- __name__: Ascending

## Firebase Console Link

https://console.firebase.google.com/v1/r/project/erbete-putra/firestore/indexes?create_composite=ClFwcm9qZWN0cy9lcmJldGUtcHV0cmEvZGF0YWJhc2VzLyhkZWZhdWx0KS9jb2xsZWN0aW9uR3JvdXBzL2Jhbm5lcl9pdGVtcy9pbmRleGVzL18QARoOCgppc19wdWJsaXNoEAEaDAoIcG9zaXRpb24QARoNCglzZWN0aW9uSWQQARoNCglzZXRfb3JkZXIQARoMCghfX25hbWVfXxAB,

STATUS: INDEX_LINK_FOUND_AND_OPENED

## Manual Action

In Firebase Console, click Create index / Save index.
Wait until index status becomes Enabled.

## Final Status

STATUS: FIRESTORE_BANNER_ITEMS_INDEX_REQUIRED_REPORTED