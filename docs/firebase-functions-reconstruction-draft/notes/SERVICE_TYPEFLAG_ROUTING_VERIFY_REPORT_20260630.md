# SERVICE TYPEFLAG ROUTING VERIFY REPORT

Date: 2026-06-30
Mode: SOURCE + RUNTIME VERIFICATION (NO PATCH)
Project: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer
Device baseline: 115413747T003958
Package: com.erbete.customer

## Objective
Verify routing behavior for each `serviceTypeFlag` used by the customer app service menu, based on:
- source code in `lib/controllers/service_list_controller.dart`
- successful runtime baseline where 17 active sections were parsed and assigned into `sectionList`
- existence of each destination dashboard screen class

## Files inspected
- `lib/controllers/service_list_controller.dart`
- `lib/screen_ui/ecommarce/dash_board_e_commerce_screen.dart`
- `lib/screen_ui/multi_vendor_service/dash_board_screens/dash_board_screen.dart`
- `lib/screen_ui/cab_service_screens/cab_dashboard_screen.dart`
- `lib/screen_ui/rental_service/rental_dashboard_screen.dart`
- `lib/screen_ui/parcel_service/parcel_dashboard_screen.dart`
- `lib/screen_ui/on_demand_service/on_demand_dashboard_screen.dart`
- Existing runtime verification notes from 2026-06-30

## Git/repo status
Attempted to check git state for the Flutter customer source path.
Result:
- `fatal: not a git repository (or any of the parent directories): .git`

Conclusion:
- The inspected customer source folder is not currently a standalone git repository at that path, so this report is based on source state on disk.

## Verified destination screens exist
The following destination screens are present in source:
- `DashBoardEcommerceScreen`
- `DashBoardScreen`
- `CabDashboardScreen`
- `RentalDashboardScreen`
- `ParcelDashboardScreen`
- `OnDemandDashboardScreen`

## Exact routing logic found in `_navigate(SectionModel sectionModel)`
### Branch A
If:
- `sectionModel.serviceTypeFlag == "ecommerce-service"`
- OR `sectionModel.serviceTypeFlag == "delivery-service"`

Then:
- if cart is not empty: `showAlertDialog(...)`
- else:
  - `ecommerce-service` -> `DashBoardEcommerceScreen`
  - `cab-service` -> `CabDashboardScreen`
  - `rental-service` -> `RentalDashboardScreen`
  - `parcel_delivery` -> `ParcelDashboardScreen`
  - `ondemand-service` -> `OnDemandDashboardScreen`
  - default -> `DashBoardScreen`

### Branch B
Else:
- `ecommerce-service` -> `DashBoardEcommerceScreen`
- `cab-service` -> `CabDashboardScreen`
- `rental-service` -> `RentalDashboardScreen`
- `parcel_delivery` -> `ParcelDashboardScreen`
- `ondemand-service` -> `OnDemandDashboardScreen`
- default -> `DashBoardScreen`

## Important source finding
Inside Branch A, these checks are unreachable in practice:
- `cab-service`
- `rental-service`
- `parcel_delivery`
- `ondemand-service`

Reason:
Branch A only executes when `serviceTypeFlag` is already limited to:
- `ecommerce-service`
- `delivery-service`

So the extra `else if` cases inside that block can never be hit.

## Alert/cart-clearing routing found in `showAlertDialog(...)`
When cart is not empty and user confirms OK:
- `ecommerce-service` -> `Get.off(() => DashBoardEcommerceScreen())`
- all other service types -> `Get.to(() => DashBoardScreen())`

This means cart-confirmation flow does **not** preserve dedicated routes for:
- `cab-service`
- `rental-service`
- `parcel_delivery`
- `ondemand-service`

## Runtime section mapping baseline (17 active sections)
The latest successful runtime baseline confirmed 17 active sections in the customer app. Based on the runtime section list already verified, the effective routing map is:

| Section name | serviceTypeFlag | Expected route target | Status |
|---|---|---|---|
| Cosmetic | delivery-service | DashBoardScreen | OK |
| Fashion | ecommerce-service | DashBoardEcommerceScreen | OK |
| Flowers | delivery-service | DashBoardScreen | OK |
| Restaurants | delivery-service | DashBoardScreen | OK |
| Cab Service | cab-service | CabDashboardScreen | OK |
| Food Grocery | delivery-service | DashBoardScreen | OK |
| Parcel Service | parcel_delivery | ParcelDashboardScreen | OK |
| Rental Service | rental-service | RentalDashboardScreen | OK |
| Home/On Demand Service | ondemand-service | OnDemandDashboardScreen | OK |
| Laundry Service | delivery-service | DashBoardScreen | OK |
| Document Service | parcel_delivery | ParcelDashboardScreen | OK |
| Hotel / Homestay | rental-service | RentalDashboardScreen | OK |
| AKAP Ticket | ecommerce-service | DashBoardEcommerceScreen | OK |
| Technician Service | ondemand-service | OnDemandDashboardScreen | OK |
| Housemaid / ART | ondemand-service | OnDemandDashboardScreen | OK |
| Motor Delivery | parcel_delivery | ParcelDashboardScreen | OK |
| Emergency Help | ondemand-service | OnDemandDashboardScreen | OK |

## serviceTypeFlag routing verification summary
### 1. `delivery-service`
Observed intention:
- goes to `DashBoardScreen`

Status:
- verified by source
- normal/default multi-vendor delivery dashboard route

### 2. `ecommerce-service`
Observed intention:
- goes to `DashBoardEcommerceScreen`

Status:
- verified by source
- dedicated ecommerce dashboard exists

### 3. `cab-service`
Observed intention:
- goes to `CabDashboardScreen`

Status:
- verified by source
- dedicated cab dashboard exists

### 4. `rental-service`
Observed intention:
- goes to `RentalDashboardScreen`

Status:
- verified by source
- dedicated rental dashboard exists

### 5. `parcel_delivery`
Observed intention:
- goes to `ParcelDashboardScreen`

Status:
- verified by source
- dedicated parcel dashboard exists

### 6. `ondemand-service`
Observed intention:
- goes to `OnDemandDashboardScreen`

Status:
- verified by source
- dedicated on-demand dashboard exists

## Main functional risk still present
Routing is correct **when `_navigate()` goes directly into the non-cart path**.

However, when cart is not empty and `showAlertDialog()` is used:
- `ecommerce-service` stays correct
- all other service types fall back to `DashBoardScreen`

This can produce wrong behavior for:
- `cab-service`
- `rental-service`
- `parcel_delivery`
- `ondemand-service`

Depending on how cart state is reached in the real app, users may be routed to the wrong dashboard after confirming cart clear.

## Final conclusion
### What is already correct
- Every serviceTypeFlag currently used by the 17 active sections has a matching dashboard screen in source.
- The intended direct routing matrix is complete.
- There is no missing destination screen for the active custom sections.

### What is still wrong
- `showAlertDialog()` only preserves `ecommerce-service` and sends everything else to `DashBoardScreen`.
- Branch A in `_navigate()` contains unreachable conditions for non-delivery/non-ecommerce service types.

## Recommendation for the next safe patch
Patch only `lib/controllers/service_list_controller.dart`:
1. Extract a single helper such as `navigateToSectionDashboard(sectionModel)`.
2. Reuse that helper both:
   - in `_navigate()`
   - in `showAlertDialog()` after cart clear
3. Keep the existing cart warning behavior.
4. Remove unreachable service-type checks inside the `ecommerce-service || delivery-service` block, or centralize them into the helper to avoid drift.

## Decision
Verification status: PARTIAL PASS

Meaning:
- serviceTypeFlag routing table exists and is complete
- but cart-confirmation flow still contains a route inconsistency that can misroute non-delivery services
