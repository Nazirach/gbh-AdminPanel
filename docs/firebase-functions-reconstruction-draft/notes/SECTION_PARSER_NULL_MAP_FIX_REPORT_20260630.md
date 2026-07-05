# SECTION PARSER NULL MAP FIX REPORT

Date: 2026-06-30
Mode: CONTROLLED LOCAL PATCH + RUNTIME VERIFY
Project: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer
Device: 115413747T003958
Package: com.erbete.customer

## Objective
Fix the runtime parser failure:
`FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'`

without redesigning the app, changing Firebase data, or broad refactoring.

## Files inspected
- `lib/models/section_model.dart`
- `lib/models/admin_commission_model.dart`
- `lib/models/platform_fee_model.dart`
- `lib/service/fire_store_utils.dart`
- `lib/controllers/service_list_controller.dart`

## Root cause found
`FireStoreUtils.getSections()` parses each Firestore section document directly with:
- `SectionModel.fromJson(document.data())`

Inside `SectionModel.fromJson`, two nested parser fields were still vulnerable when incoming custom sections contained missing or non-map values:
- `adminCommision`
- `platformFee`

The earlier patch checked only for null on the raw fields, but still relied on `Map<String, dynamic>.from(...)` directly. A safer pattern is to first verify the raw value is actually a Map before passing it into nested `fromJson`.

## Backup created before edit
- `lib/models/section_model.dart.bak_STEP36C_20260630_230000`

## Patch applied
File changed:
- `lib/models/section_model.dart`

Safe pattern added:
- `final rawAdminCommission = json['adminCommision'];`
- `final rawPlatformFee = json['platformFee'];`

Nested parsing changed to:
- `adminCommision = rawAdminCommission is Map ? AdminCommission.fromJson(Map<String, dynamic>.from(rawAdminCommission)) : null;`
- `platformFee = rawPlatformFee is Map ? PlatformFeeModel.fromJson(Map<String, dynamic>.from(rawPlatformFee)) : PlatformFeeModel();`

## Build verification
### First build attempt
First `assembleDebug` run was blocked by a stale/case-sensitive asset copy issue involving:
- `assets/fonts/essential_sans_regular.otf`

### Recovery
Ran:
- `gradlew clean`

### Final build
Ran:
- `gradlew assembleDebug`

Result:
- Debug APK produced successfully.
- APK path:
  - `build/app/outputs/flutter-apk/app-debug.apk`

## Device install
Ran:
- `adb install -r ...app-debug.apk`

Result:
- `Success`

## Runtime verification
Cleared logcat, launched the app, then captured fresh logs.

### Required proof found
- `SERVICE_LIST_DEBUG: raw sections count=17`
- `SERVICE_LIST_DEBUG: sectionList assigned count=17`

### Required custom sections confirmed in runtime logs
- Laundry Service
- Document Service
- Hotel / Homestay
- AKAP Ticket
- Technician Service
- Housemaid / ART
- Motor Delivery
- Emergency Help

### Parse error count after fix
Filtered count for:
- `FireStoreUtils.getSection Parse error`

Result:
- `0`

## Screenshot proof
Saved screenshot after scrolling the service menu:
- `C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\service_list_after_scroll_20260630.png`

## Final outcome
Status: SUCCESS

The section parser no longer drops the 8 custom sections.
Runtime now shows all 17 active sections assigned into `sectionList`, and no `FireStoreUtils.getSection Parse error` remains in the fresh device log.
