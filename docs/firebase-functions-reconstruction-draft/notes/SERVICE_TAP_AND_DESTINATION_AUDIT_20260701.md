# SERVICE TAP AND DESTINATION AUDIT - 2026-07-01

## Scope
Audit fungsi tap tile service dan screen tujuan untuk seluruh 17 service aktif pada Flutter customer app.

Project source:
`C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer`

## Status
- Parser section sudah pulih dan memuat 17 section.
- Tile service screen sudah memanggil satu titik tap yang seragam.
- Routing sekarang tersentral di `ServiceListController._goToServiceRoute()`.
- Audit ini memverifikasi destination root screen per `serviceTypeFlag` untuk semua 17 service.

## Source Entry Points
### Tap source
File: `lib/screen_ui/service_home_screen/service_list_screen.dart`
- `onTap: () => controller.onServiceTap(context, section)`

### Routing source
File: `lib/controllers/service_list_controller.dart`
- `onServiceTap(BuildContext context, SectionModel sectionModel)`
- `_goToServiceRoute(SectionModel sectionModel)`
- `showAlertDialog(...)` setelah cart clear juga memanggil `_goToServiceRoute(sectionModel)`

## Routing Matrix by serviceTypeFlag
File: `lib/controllers/service_list_controller.dart`

- `ecommerce-service` -> `DashBoardEcommerceScreen`
- `cab-service` -> `CabDashboardScreen`
- `rental-service` -> `RentalDashboardScreen`
- `parcel_delivery` -> `ParcelDashboardScreen`
- `ondemand-service` -> `OnDemandDashboardScreen`
- default termasuk `delivery-service` -> `DashBoardScreen`

## Root Dashboard Verification
### 1. delivery-service
Destination class: `DashBoardScreen`
File: `lib/screen_ui/multi_vendor_service/dash_board_screens/dash_board_screen.dart`
Controller: `DashBoardController`
Controller file: `lib/controllers/dash_board_controller.dart`
Root page list:
- `HomeScreen` atau `HomeScreenTwo` (bergantung `Constant.sectionConstantModel!.theme`)
- `FavouriteScreen`
- `WalletScreen` (jika wallet aktif)
- `OrderScreen`
- `ProfileScreen`

### 2. ecommerce-service
Destination class: `DashBoardEcommerceScreen`
File: `lib/screen_ui/ecommarce/dash_board_e_commerce_screen.dart`
Controller: `DashBoardEcommerceController`
Controller file: `lib/controllers/dash_board_ecommarce_controller.dart`
Root page list:
- `HomeECommerceScreen`
- `FavouriteScreen`
- `WalletScreen` (jika wallet aktif)
- `OrderScreen`
- `ProfileScreen`

### 3. cab-service
Destination class: `CabDashboardScreen`
File: `lib/screen_ui/cab_service_screens/cab_dashboard_screen.dart`
Controller: `CabDashboardController`
Controller file: `lib/controllers/cab_dashboard_controller.dart`
Root page list:
- `CabHomeScreen`
- `MyCabBookingScreen`
- `WalletScreen` (jika wallet aktif)
- `ProfileScreen`

### 4. rental-service
Destination class: `RentalDashboardScreen`
File: `lib/screen_ui/rental_service/rental_dashboard_screen.dart`
Controller: `CabRentalDashboardControllers`
Controller file: `lib/controllers/cab_rental_dashboard_controllers.dart`
Root page list:
- `RentalHomeScreen`
- `MyRentalBookingScreen`
- `WalletScreen` (jika wallet aktif)
- `ProfileScreen`

### 5. parcel_delivery
Destination class: `ParcelDashboardScreen`
File: `lib/screen_ui/parcel_service/parcel_dashboard_screen.dart`
Controller: `ParcelDashboardController`
Controller file: `lib/controllers/parcel_dashboard_controller.dart`
Root page list:
- `HomeParcelScreen`
- `MyBookingScreen`
- `WalletScreen` (jika wallet aktif)
- `ProfileScreen`

### 6. ondemand-service
Destination class: `OnDemandDashboardScreen`
File: `lib/screen_ui/on_demand_service/on_demand_dashboard_screen.dart`
Controller: `OnDemandDashboardController`
Controller file: `lib/controllers/on_demand_dashboard_controller.dart`
Root page list:
- `OnDemandHomeScreen`
- `FavouriteOndemandScreen`
- `MyBookingOnDemandScreen`
- `WalletScreen` (jika wallet aktif)
- `ProfileScreen`

## 17 Service Verification Matrix
| No | Section Name | serviceTypeFlag | Tap destination class | Root landing/home screen |
|---|---|---|---|---|
| 1 | Cosmetic | delivery-service | DashBoardScreen | HomeScreen / HomeScreenTwo |
| 2 | Fashion | ecommerce-service | DashBoardEcommerceScreen | HomeECommerceScreen |
| 3 | Flowers | delivery-service | DashBoardScreen | HomeScreen / HomeScreenTwo |
| 4 | Restaurants | delivery-service | DashBoardScreen | HomeScreen / HomeScreenTwo |
| 5 | Cab Service | cab-service | CabDashboardScreen | CabHomeScreen |
| 6 | Food Grocery | delivery-service | DashBoardScreen | HomeScreen / HomeScreenTwo |
| 7 | Parcel Service | parcel_delivery | ParcelDashboardScreen | HomeParcelScreen |
| 8 | Rental Service | rental-service | RentalDashboardScreen | RentalHomeScreen |
| 9 | Home/On Demand Service | ondemand-service | OnDemandDashboardScreen | OnDemandHomeScreen |
| 10 | Laundry Service | delivery-service | DashBoardScreen | HomeScreen / HomeScreenTwo |
| 11 | Document Service | parcel_delivery | ParcelDashboardScreen | HomeParcelScreen |
| 12 | Hotel / Homestay | rental-service | RentalDashboardScreen | RentalHomeScreen |
| 13 | AKAP Ticket | ecommerce-service | DashBoardEcommerceScreen | HomeECommerceScreen |
| 14 | Technician Service | ondemand-service | OnDemandDashboardScreen | OnDemandHomeScreen |
| 15 | Housemaid / ART | ondemand-service | OnDemandDashboardScreen | OnDemandHomeScreen |
| 16 | Motor Delivery | parcel_delivery | ParcelDashboardScreen | HomeParcelScreen |
| 17 | Emergency Help | ondemand-service | OnDemandDashboardScreen | OnDemandHomeScreen |

## Findings
1. Tap tile sudah seragam dan hanya punya satu pintu masuk.
2. Routing drift antar normal tap vs cart-clear flow sudah ditutup karena keduanya sekarang memakai `_goToServiceRoute()`.
3. Seluruh 17 service aktif kini punya `serviceTypeFlag` yang terpetakan ke root dashboard yang valid.
4. Tidak semua service punya dashboard unik per nama section; beberapa share root berdasarkan family service.

## Interpretation
### Berjalan normal secara routing
Ya, dari sisi source routing, semua 17 service sekarang punya jalur tujuan yang jelas dan konsisten.

### Share-dashboard groups
- `delivery-service`: Cosmetic, Flowers, Restaurants, Food Grocery, Laundry Service
- `ecommerce-service`: Fashion, AKAP Ticket
- `parcel_delivery`: Parcel Service, Document Service, Motor Delivery
- `rental-service`: Rental Service, Hotel / Homestay
- `ondemand-service`: Home/On Demand Service, Technician Service, Housemaid / ART, Emergency Help
- `cab-service`: Cab Service

## Residual Risks
1. **Semantic mismatch risk**
   Beberapa section secara bisnis mungkin butuh home yang lebih spesifik, tetapi saat ini tetap share dashboard family yang sama. Ini tidak memutus tap, tetapi bisa membuat isi home terasa generik.

2. **Theme-dependent home for delivery-service**
   `delivery-service` tidak selalu mendarat di class home yang sama karena dipengaruhi `Constant.sectionConstantModel!.theme`:
   - `theme_2` -> `HomeScreen`
   - selain itu -> `HomeScreenTwo`

3. **Source audit only**
   Audit ini memverifikasi source path dan destination root screen. Belum menguji interaksi runtime satu per satu di device untuk 17 tap berurutan.

## Conclusion
Dari sisi source code Flutter, fungsi tap + screen tujuan untuk seluruh 17 service **sudah terhubung konsisten** melalui router tunggal berdasarkan `serviceTypeFlag`.

Kesimpulan praktis:
- **Tap parser**: OK
- **Tap handler**: OK
- **serviceTypeFlag routing**: OK
- **Destination root dashboard mapping**: OK
- **Kemungkinan masalah tersisa**: lebih ke konten/home khusus tiap family service, bukan ke fungsi tap dasar.

## Recommended Next Step
Lanjutkan ke **runtime verification per serviceTypeFlag** pada emulator/device dengan checklist berikut:
1. Tap tiap tile service
2. Pastikan screen tujuan benar family-nya
3. Catat home root yang terbuka
4. Catat jika ada section yang secara bisnis terasa salah family walau routing technically sukses
