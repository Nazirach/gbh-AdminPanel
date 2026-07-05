# SERVICE TYPEFLAG RUNTIME VERIFICATION - 2026-07-01

## Objective
Melanjutkan audit tap + destination untuk 17 service ke tahap verifikasi runtime yang aman dan jujur.

## Current Runtime Status
- Android device terdeteksi: `115413747T003958`
- App package aktif pada logcat: `com.erbete.customer`
- Service grid sudah menampilkan seluruh icon service.
- Source routing sebelumnya sudah dipastikan konsisten melalui `ServiceListController._goToServiceRoute()`.

## What Was Verified This Session
### 1. Device/runtime availability
- `adb devices` berhasil dan device dalam status `device`.
- `adb logcat -d` menunjukkan package customer masih hidup di device.

### 2. Customer app structure
Customer app path:
`C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer`

Folder inti yang terkonfirmasi:
- `android`
- `assets`
- `lib`
- `ios`
- `build`

### 3. Runtime routing families already backed by source
- `delivery-service` -> `DashBoardScreen`
- `ecommerce-service` -> `DashBoardEcommerceScreen`
- `cab-service` -> `CabDashboardScreen`
- `rental-service` -> `RentalDashboardScreen`
- `parcel_delivery` -> `ParcelDashboardScreen`
- `ondemand-service` -> `OnDemandDashboardScreen`

## 17 Service Runtime Verification Matrix
| No | Section | serviceTypeFlag | Expected destination | Expected root home |
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

## Honest Limitation in This Session
Belum dilakukan automation tap 17 tile satu per satu dari device pada sesi ini.
Jadi status runtime di bawah ini harus dibaca sebagai:
- **routing source verified**
- **device available**
- **expected destination verified from code**
- **manual tap-per-tile runtime still needs execution**

Ini lebih aman daripada mengklaim semua tap sudah terbuka satu per satu padahal belum di-trigger langsung.

## Recommended Manual Runtime Order
Agar efisien, cukup uji per family dulu:

1. **delivery-service**
   - sample: Restaurants
   - expected: `DashBoardScreen`

2. **ecommerce-service**
   - sample: Fashion
   - expected: `DashBoardEcommerceScreen`

3. **cab-service**
   - sample: Cab Service
   - expected: `CabDashboardScreen`

4. **rental-service**
   - sample: Rental Service
   - expected: `RentalDashboardScreen`

5. **parcel_delivery**
   - sample: Parcel Service
   - expected: `ParcelDashboardScreen`

6. **ondemand-service**
   - sample: Home/On Demand Service
   - expected: `OnDemandDashboardScreen`

Jika keenam family ini benar, maka 17 service lain yang share family route praktis ikut tervalidasi dari sisi router.

## Recommended Full 17-Service Tap Checklist
Untuk tiap tile service, catat 4 hal:
1. tile bisa di-tap
2. screen berpindah
3. family dashboard sesuai `serviceTypeFlag`
4. home root terasa sesuai konteks bisnis

## Risk Notes
1. **Semantic mismatch risk**
   Walau router benar, beberapa section yang share family mungkin secara bisnis masih terasa terlalu generik.

2. **Theme-dependent delivery landing**
   `delivery-service` bisa mendarat ke `HomeScreen` atau `HomeScreenTwo` bergantung theme aktif.

3. **No per-tile runtime evidence yet**
   Sesi ini belum menghasilkan bukti tap runtime satu per satu untuk semua 17 tile.

## Practical Conclusion
- Dari sisi source: **siap**
- Dari sisi device readiness: **siap**
- Dari sisi icon visibility: **siap**
- Dari sisi tap runtime 17-per-17: **belum final, perlu eksekusi manual atau automation berikutnya**

## Best Next Step
Lanjutkan ke:
**runtime tap verification per family serviceTypeFlag**, lalu bila perlu baru diperluas ke seluruh 17 tile.
