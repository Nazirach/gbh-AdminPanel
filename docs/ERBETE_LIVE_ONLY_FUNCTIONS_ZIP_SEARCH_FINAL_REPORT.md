# ERBETE LIVE-ONLY FUNCTIONS ZIP SEARCH FINAL REPORT

Generated: 06/28/2026 15:45:50

Mode: audit-only. No patch. No deploy. No delete. No commit.

## Target Live-Only Functions

- parcelDispatch
- rideDispatch
- propagateUserProfileUpdates

## ZIP / Folder Checked

- C:\project\eMart_V6.7_Source_Code
- C:\project\eMart_V6.7_Source_Code\Order Tracking Firebase Function.zip
- C:\project\eMart_V6.7_Source_Code\Firebase Import Export Collections.zip
- C:\project\eMart_V6.7_Source_Code\Firebase Indexing.zip
- C:\project\eMart_V6.7_Source_Code\Firestore Demo Authentication User Import.zip
- C:\Users\Hp\Documents\codecanyon-tqXbj9mA-emart-multiservicemultipurpose-food-grocery-pharmacy-flower-delivery-flutter-app\eMart_V6.7_Source_Code\Order Tracking Firebase Function.zip
- C:\Users\Hp\Documents\Codex\2026-06-10\files-mentioned-by-the-user-base\work\codecanyon-emart.zip

## Confirmed Findings

- ZIP files are readable and can be extracted.
- No evidence of ZIP corruption.
- Order Tracking Firebase Function.zip contains deliveryDispatch and old callable deleteUser.
- Order Tracking Firebase Function.zip does not contain parcelDispatch, rideDispatch, or propagateUserProfileUpdates.
- Other Firebase ZIPs checked do not contain parcelDispatch, rideDispatch, or propagateUserProfileUpdates.
- C:\project\eMart_V6.7_Source_Code mainly contains Flutter app folders and Firebase config files, not the missing Firebase Functions source.

## Live Firebase State Reminder

- deleteUser is already recreated successfully as v2 https nodejs22.
- deliveryDispatch remains live as v1 document.write nodejs10.
- parcelDispatch remains live as v1 document.write nodejs10.
- rideDispatch remains live as v1 document.write nodejs10.
- propagateUserProfileUpdates remains live as v1 document.update nodejs10.

## Conclusion

- The missing live-only function sources were not found in the checked eMart V6.7 package or Firebase utility ZIPs.
- parcelDispatch, rideDispatch, and propagateUserProfileUpdates likely came from another old source copy, manual deploy, or a modified functions folder not present in the checked package.
- Do not run firebase deploy --only functions from the current source because it may not represent all live functions.

## Status

STATUS: LIVE_ONLY_FUNCTION_SOURCES_NOT_FOUND_IN_CHECKED_ZIPS

Larangan:
- Jangan deploy all functions.
- Jangan delete parcelDispatch.
- Jangan delete rideDispatch.
- Jangan delete propagateUserProfileUpdates.
- Jangan git add .
- Jangan commit/push sebelum review.