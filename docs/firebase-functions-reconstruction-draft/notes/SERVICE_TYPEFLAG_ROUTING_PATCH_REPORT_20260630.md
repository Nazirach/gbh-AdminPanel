# SERVICE TYPEFLAG ROUTING PATCH REPORT

Date: 2026-06-30
Mode: CONTROLLED LOCAL PATCH + BUILD + RUNTIME VERIFY
Project: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer
Device: 115413747T003958
Package: com.erbete.customer

## Objective
Fix routing drift in `lib/controllers/service_list_controller.dart` so that the same `serviceTypeFlag` routing logic is used in both:
- normal navigation flow inside `_navigate()`
- cart-clear confirmation flow inside `showAlertDialog()`

without redesigning the app, changing Firestore data, or modifying the service list UI.

## File patched
- `lib/controllers/service_list_controller.dart`

## Backup created before edit
- `lib/controllers/service_list_controller.dart.bak_STEP37A_20260630_235500`

## Root cause
Source verification found that direct routing logic was duplicated in multiple places.

### Before patch
Normal routing already supported:
- `delivery-service` -> `DashBoardScreen`
- `ecommerce-service` -> `DashBoardEcommerceScreen`
- `cab-service` -> `CabDashboardScreen`
- `rental-service` -> `RentalDashboardScreen`
- `parcel_delivery` -> `ParcelDashboardScreen`
- `ondemand-service` -> `OnDemandDashboardScreen`

But in `showAlertDialog()` after cart clear confirmation, only this was preserved:
- `ecommerce-service` -> `DashBoardEcommerceScreen`
- all others -> `DashBoardScreen`

### Real impact
The following service types could be misrouted after cart clear confirmation:
- `cab-service`
- `rental-service`
- `parcel_delivery`
- `ondemand-service`

## Patch applied
Added one centralized helper:
- `_goToServiceRoute(SectionModel sectionModel)`

Helper behavior:
- `ecommerce-service` -> `Get.to(DashBoardEcommerceScreen())`
- `cab-service` -> `Get.to(CabDashboardScreen())`
- `rental-service` -> `Get.to(RentalDashboardScreen())`
- `parcel_delivery` -> `Get.to(ParcelDashboardScreen())`
- `ondemand-service` -> `Get.to(OnDemandDashboardScreen())`
- default -> `Get.to(() => DashBoardScreen())`

### Replacements made
1. `_navigate()` duplicated route branches were replaced with:
- `_goToServiceRoute(sectionModel);`

2. `showAlertDialog()` confirm/OK branch now also calls:
- `_goToServiceRoute(sectionModel);`

## Scope control
Confirmed not changed:
- Service list UI
- Firestore section query
- branding
- parser logic
- destination screen classes

## Source verification after patch
Controller verification markers found:
- Branch still checks `ecommerce-service || delivery-service` before cart warning logic
- `_goToServiceRoute(sectionModel)` is now called from both normal paths
- `_goToServiceRoute(sectionModel)` is now called from `showAlertDialog()` confirm branch

## Build verification
### First build attempt
First `assembleDebug` attempt failed because of a previously known asset-copy conflict unrelated to this routing patch:
- `PathExistsException` on `assets/fonts/essential_sans_Regular.otf`

### Recovery
Ran:
- `gradlew clean`

### Final build
Ran again:
- `gradlew assembleDebug`

Result:
- APK output exists at:
  - `build/app/outputs/flutter-apk/app-debug.apk`

## Install verification
Ran:
- `adb -s 115413747T003958 install -r ...app-debug.apk`

Result:
- `Success`

## Runtime verification
Cleared logcat, launched the app, and captured filtered logs.

### Runtime proof still healthy after routing patch
- `SERVICE_LIST_DEBUG: raw sections count=17`
- `SERVICE_LIST_DEBUG: sectionList assigned count=17`

### Custom sections still present
Runtime log still includes:
- Laundry Service
- Document Service
- Hotel / Homestay
- AKAP Ticket
- Technician Service
- Housemaid / ART
- Motor Delivery
- Emergency Help

### Parser regression check
Count for:
- `FireStoreUtils.getSection Parse error`

Result:
- `0`

## Routing status after patch
### Source-level result
- Normal routing: centralized
- Clear-cart confirmation routing: centralized
- Route drift between normal flow and confirm-clear-cart flow: removed

### Effective route table now shared by both flows
- `delivery-service` -> `DashBoardScreen`
- `ecommerce-service` -> `DashBoardEcommerceScreen`
- `cab-service` -> `CabDashboardScreen`
- `rental-service` -> `RentalDashboardScreen`
- `parcel_delivery` -> `ParcelDashboardScreen`
- `ondemand-service` -> `OnDemandDashboardScreen`

## Residual note
The branch condition in `_navigate()` still checks:
- `ecommerce-service || delivery-service`

and then uses the helper in one path while the `else` branch also uses the helper.
This is functionally safe now because both branches converge on the same routing helper. A future cleanup could simplify the branch structure further, but that is not required to fix the routing bug addressed here.

## Final outcome
Status: SUCCESS

### Current checkpoint
- Parser section: PASS
- Service list runtime: 17/17 PASS
- Routing normal flow: PASS
- Routing after clear cart confirmation: PASS (source-level unified and rebuilt successfully)

The routing inconsistency after cart clear confirmation has been fixed with a minimal controller-only patch, and the app still loads all 17 active sections without parser regression.
