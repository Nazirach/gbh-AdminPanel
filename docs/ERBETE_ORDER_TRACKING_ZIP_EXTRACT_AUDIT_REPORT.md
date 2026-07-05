# ERBETE ORDER TRACKING ZIP EXTRACT AUDIT REPORT

Generated: 06/28/2026 15:32:46

Mode: audit-only. No patch. No deploy. No delete. No commit.

## ZIP Tested

- Path: C:\Users\Hp\Documents\codecanyon-tqXbj9mA-emart-multiservicemultipurpose-food-grocery-pharmacy-flower-delivery-flutter-app\eMart_V6.7_Source_Code\Order Tracking Firebase Function.zip
- Extract result: EXTRACT_OK
- Extract destination: C:\deploy\zip_audit\Order_Tracking_Firebase_Function_SAFE_EXTRACT

## index.js Found

- Requires firebase-functions
- Requires firebase-admin
- Requires serviceAccountKey.json
- Exports deliveryDispatch = delivery.dispatch
- Exports deleteUser = functions.https.onCall(...)

## Missing From This ZIP

- parcelDispatch: NOT FOUND
- rideDispatch: NOT FOUND
- propagateUserProfileUpdates: NOT FOUND

## Conclusion

- ZIP is readable and can be extracted.
- ZIP is not corrupted.
- ZIP does not contain the three live-only Firebase Functions.
- Live functions likely came from another source copy, manual deploy, or older/modified project folder.

## Status

STATUS: ORDER_TRACKING_ZIP_EXTRACT_OK_BUT_MISSING_LIVE_FUNCTION_SOURCES

Larangan:
- Jangan deploy all functions dari ZIP ini.
- Jangan delete parcelDispatch/rideDispatch/propagateUserProfileUpdates.
- Jangan git add .
- Jangan commit/push.