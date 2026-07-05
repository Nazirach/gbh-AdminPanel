# ERBETE OLD FUNCTION SOURCE TRACE SEARCH REPORT

Generated: 06/28/2026 15:50:31

Mode: audit-only. No patch. No deploy. No delete. No commit.

## Search Scope

- C:\Users\Hp\Documents\Codex
- C:\Users\Hp\Documents\codecanyon-tqXbj9mA-emart-multiservicemultipurpose-food-grocery-pharmacy-flower-delivery-flutter-app
- C:\project\eMart_V6.7_Source_Code
- C:\deploy\zip_audit

## Function Index Files Found

- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\index.js
- C:\deploy\zip_audit\c_project_Order_Tracking_SAFE_EXTRACT\Order Tracking Firebase Function\functions\index.js
- C:\deploy\zip_audit\Order_Tracking_Firebase_Function_SAFE_EXTRACT\Order Tracking Firebase Function\functions\index.js

## Confirmed Exports Found

- deliveryDispatch
- deleteUser

## Missing Exports

- parcelDispatch: NOT FOUND
- rideDispatch: NOT FOUND
- propagateUserProfileUpdates: NOT FOUND

## Current Firebase Function Map

- deleteUser: live, v2 https nodejs22, already recreated successfully
- deliveryDispatch: live, v1 document.write nodejs10, source found
- parcelDispatch: live, v1 document.write nodejs10, source not found
- rideDispatch: live, v1 document.write nodejs10, source not found
- propagateUserProfileUpdates: live, v1 document.update nodejs10, source not found

## Conclusion

- The checked local folders and extracted ZIPs do not contain source for parcelDispatch, rideDispatch, or propagateUserProfileUpdates.
- These three functions should be treated as live-only/orphan functions until original source is found.
- Do not deploy all functions from the current local source.
- Do not delete the three live-only functions.

## Status

STATUS: LIVE_ONLY_ORPHAN_FUNCTIONS_CONFIRMED_BY_LOCAL_SOURCE_TRACE

Larangan:
- Jangan firebase deploy --only functions dari source saat ini.
- Jangan delete parcelDispatch.
- Jangan delete rideDispatch.
- Jangan delete propagateUserProfileUpdates.
- Jangan git add .
- Jangan commit/push sebelum review.