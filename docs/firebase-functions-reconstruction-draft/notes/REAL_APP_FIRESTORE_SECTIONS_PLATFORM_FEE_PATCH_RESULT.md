# FIRESTORE SECTIONS PLATFORM FEE PATCH RESULT

Generated: 06/28/2026 21:49:08

Mode: controlled Firebase write. Patch only sections.platformFee when missing/null. No deploy. No app patch. No order creation. No driver/vendor app.

## Basis

- Customer Home still blank after sections.order patch.
- Runtime error: Null is not a subtype of Map<String, dynamic>.
- SectionModel parses platformFee with PlatformFeeModel.fromJson(json['platformFee']) without null guard.
- PlatformFeeModel requires fields: fee and enable.
- Safe default: platformFee = { fee: '0.0', enable: false }.

## Patch Result

```text
STATUS: FIREBASE_ADMIN_MODULAR_INITIALIZED
project_id: erbete-putra

sections_active_ordered_count_before_platform_fee_patch: 8

## PLATFORM FEE PATCH PLAN PER DOCUMENT
{"action":"PATCH_PLATFORM_FEE_DEFAULT_ONLY","id":"6285dcf511651","name":"Cosmetic","order":1,"previousPlatformFee":"undefined","newPlatformFee":{"fee":"0.0","enable":false},"isActive":true,"serviceType":"Multivendor Delivery Service","sectionImage":"[HAS_VALUE]"}
{"action":"PATCH_PLATFORM_FEE_DEFAULT_ONLY","id":"6285dd3281531","name":"Fashion","order":2,"previousPlatformFee":"undefined","newPlatformFee":{"fee":"0.0","enable":false},"isActive":true,"serviceType":"Ecommerce Service","sectionImage":"[HAS_VALUE]"}
{"action":"PATCH_PLATFORM_FEE_DEFAULT_ONLY","id":"6285dd7b50f32","name":"Flowers","order":3,"previousPlatformFee":"undefined","newPlatformFee":{"fee":"0.0","enable":false},"isActive":true,"serviceType":"Multivendor Delivery Service","sectionImage":"[HAS_VALUE]"}
{"action":"PATCH_PLATFORM_FEE_DEFAULT_ONLY","id":"6285ddbfd9598","name":"Restaurants","order":4,"previousPlatformFee":"undefined","newPlatformFee":{"fee":"0.0","enable":false},"isActive":true,"serviceType":"Multivendor Delivery Service","sectionImage":"[HAS_VALUE]"}
{"action":"PATCH_PLATFORM_FEE_DEFAULT_ONLY","id":"631852d1bc978","name":"Cab Service","order":5,"previousPlatformFee":"undefined","newPlatformFee":{"fee":"0.0","enable":false},"isActive":true,"serviceType":"Cab Service","sectionImage":"[HAS_VALUE]"}
{"action":"PATCH_PLATFORM_FEE_DEFAULT_ONLY","id":"6319dc53314ee","name":"Food Grocery","order":6,"previousPlatformFee":"undefined","newPlatformFee":{"fee":"0.0","enable":false},"isActive":true,"serviceType":"Multivendor Delivery Service","sectionImage":"[HAS_VALUE]"}
{"action":"PATCH_PLATFORM_FEE_DEFAULT_ONLY","id":"632309c9d549e","name":"Parcel Service","order":7,"previousPlatformFee":"undefined","newPlatformFee":{"fee":"0.0","enable":false},"isActive":true,"serviceType":"Parcel Delivery Service","sectionImage":"[HAS_VALUE]"}
{"action":"PATCH_PLATFORM_FEE_DEFAULT_ONLY","id":"63368fb2beabb","name":"Rental Service","order":8,"previousPlatformFee":"undefined","newPlatformFee":{"fee":"0.0","enable":false},"isActive":true,"serviceType":"Rental Service","sectionImage":"[HAS_VALUE]"}

patch_count: 8
skipped_count: 0
STATUS: PLATFORM_FEE_PATCH_COMMITTED

## VERIFY AFTER PATCH
sections_active_ordered_count_after_platform_fee_patch: 8
{"index":0,"id":"6285dcf511651","name":"Cosmetic","order":1,"orderType":"number","isActive":true,"serviceType":"Multivendor Delivery Service","platformFee":{"fee":"0.0","enable":false},"platformFeeType":"object","sectionImage":"[HAS_VALUE]"}
{"index":1,"id":"6285dd3281531","name":"Fashion","order":2,"orderType":"number","isActive":true,"serviceType":"Ecommerce Service","platformFee":{"fee":"0.0","enable":false},"platformFeeType":"object","sectionImage":"[HAS_VALUE]"}
{"index":2,"id":"6285dd7b50f32","name":"Flowers","order":3,"orderType":"number","isActive":true,"serviceType":"Multivendor Delivery Service","platformFee":{"fee":"0.0","enable":false},"platformFeeType":"object","sectionImage":"[HAS_VALUE]"}
{"index":3,"id":"6285ddbfd9598","name":"Restaurants","order":4,"orderType":"number","isActive":true,"serviceType":"Multivendor Delivery Service","platformFee":{"fee":"0.0","enable":false},"platformFeeType":"object","sectionImage":"[HAS_VALUE]"}
{"index":4,"id":"631852d1bc978","name":"Cab Service","order":5,"orderType":"number","isActive":true,"serviceType":"Cab Service","platformFee":{"fee":"0.0","enable":false},"platformFeeType":"object","sectionImage":"[HAS_VALUE]"}
{"index":5,"id":"6319dc53314ee","name":"Food Grocery","order":6,"orderType":"number","isActive":true,"serviceType":"Multivendor Delivery Service","platformFee":{"fee":"0.0","enable":false},"platformFeeType":"object","sectionImage":"[HAS_VALUE]"}
{"index":6,"id":"632309c9d549e","name":"Parcel Service","order":7,"orderType":"number","isActive":true,"serviceType":"Parcel Delivery Service","platformFee":{"fee":"0.0","enable":false},"platformFeeType":"object","sectionImage":"[HAS_VALUE]"}
{"index":7,"id":"63368fb2beabb","name":"Rental Service","order":8,"orderType":"number","isActive":true,"serviceType":"Rental Service","platformFee":{"fee":"0.0","enable":false},"platformFeeType":"object","sectionImage":"[HAS_VALUE]"}

```

## Expected Success

- STATUS: PLATFORM_FEE_PATCH_COMMITTED or NOTHING_TO_PATCH
- sections_active_ordered_count_after_platform_fee_patch should be 8
- Every active ordered section should show platformFee object.
- Customer Home should show service cards after refresh/reopen.

## Final Status

STATUS: FIRESTORE_SECTIONS_PLATFORM_FEE_PATCH_COMMAND_FINISHED