# SERVICE 17 RUNTIME DATA SOURCE AUDIT

Tanggal: 2026-07-01  
Mode: BASELINE-SAFE AUDIT ONLY  
Workspace source audited: `C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer`

## Executive Summary

Audit source Flutter menunjukkan bahwa 17 service user app sudah dipetakan ke 6 family `serviceTypeFlag` yang berbeda:

- `delivery-service`
- `ecommerce-service`
- `cab-service`
- `rental-service`
- `parcel_delivery`
- `ondemand-service`

Routing inti berada di:
- `lib/screen_ui/service_home_screen/service_list_screen.dart`
- `lib/controllers/service_list_controller.dart`

Konten kaya pada layar user tidak berasal dari satu collection tunggal. Ia dibentuk dari kombinasi:
- `sections`
- `settings/AppHomeBanners`
- `advertisements`
- `vendors`
- `vendor_categories`
- `vendor_products`
- `coupons`
- `rides`
- `parcel_categories`
- `parcel_orders`
- `rental_vehicle_type`
- `rental_packages`
- `rental_orders`
- `providers_services`
- `providers_workers`
- `provider_orders`

Kesimpulan audit source:
- masalah “screen hanya terasa vendor/menu saja” **bukan** karena routing dasar salah
- penyebab paling mungkin adalah kekosongan data family, filter `sectionId/section_id`, `zoneId`, mismatch collection, atau admin module tertentu belum seeded

Jika data tidak ditemukan dari source, nilai ditandai `UNKNOWN_SOURCE_NOT_FOUND`.

---

## Source Files Audited

### Wajib
- `lib/controllers/service_list_controller.dart`
- `lib/screen_ui/service_home_screen/service_list_screen.dart`
- `lib/service/fire_store_utils.dart`
- `lib/constant/collection_name.dart`

### Temuan routing utama

Di `service_list_screen.dart`:
- tap tile service -> `controller.onServiceTap(context, section)`

Di `service_list_controller.dart`:
- `ecommerce-service` -> `DashBoardEcommerceScreen`
- `cab-service` -> `CabDashboardScreen`
- `rental-service` -> `RentalDashboardScreen`
- `parcel_delivery` -> `ParcelDashboardScreen`
- `ondemand-service` -> `OnDemandDashboardScreen`
- default termasuk `delivery-service` -> `DashBoardScreen`

### Temuan source collection name

Di `collection_name.dart` ditemukan collection penting:
- `sections`
- `settings`
- `advertisements`
- `banner_items`
- `vendors`
- `vendor_categories`
- `vendor_products`
- `coupons`
- `vendor_orders`
- `rides`
- `vehicle_type`
- `popular_destinations`
- `parcel_categories`
- `parcel_weight`
- `parcel_orders`
- `parcel_coupons`
- `rental_vehicle_type`
- `rental_packages`
- `rental_orders`
- `rental_coupons`
- `provider_categories`
- `providers_services`
- `providers_workers`
- `provider_orders`
- `providers_coupons`
- `zone`

---

## Per Family Data Source

### 1. delivery-service
Destination:
- `DashBoardScreen`

Primary collections from source:
- `sections`
- `settings`
- `advertisements`
- `vendors`
- `vendor_categories`
- `vendor_products`
- `coupons`
- `vendor_orders`
- `story`
- `zone`

Typical filters seen in source family patterns:
- `section_id`
- `zoneId`
- `publish`
- `isActive`
- `categoryID`

Expected user content:
- service banners
- categories
- vendor/store cards
- item/product list
- coupons
- advertisements
- stories
- nearest/popular/new-arrival vendors

Primary risks:
- `RISK_ZONE_FILTER`
- `RISK_SECTION_ID_MISMATCH`
- `RISK_INDEX_REQUIRED`
- `RISK_ADMIN_MODULE_NOT_SEEDED`
- `RISK_SCREEN_ONLY_VENDOR`

### 2. ecommerce-service
Destination:
- `DashBoardEcommerceScreen`

Primary collections from source:
- `sections`
- `settings`
- `advertisements`
- `vendors`
- `vendor_categories`
- `vendor_products`
- `coupons`
- `brands`
- `zone`

Typical filters:
- `section_id`
- `zoneId`
- `publish`
- `isActive`
- `categoryID`

Expected user content:
- service banners
- categories
- brands
- products
- stores
- ads
- coupons

Primary risks:
- `RISK_SECTION_ID_MISMATCH`
- `RISK_ZONE_FILTER`
- `RISK_COLLECTION_MISMATCH`
- `RISK_ADMIN_MODULE_NOT_SEEDED`

### 3. cab-service
Destination:
- `CabDashboardScreen`

Primary collections from source:
- `rides`
- `vehicle_type`
- `popular_destinations`
- `users`
- `zone`

Typical filters:
- `driverId`
- `authorID`
- `createdAt`
- service-specific booking filters

Expected user content:
- cab home
- vehicle types
- popular destinations
- booking flow
- ride history

Primary risks:
- `RISK_DATA_EMPTY`
- `RISK_COLLECTION_MISMATCH`
- `RISK_ADMIN_MODULE_NOT_SEEDED`

### 4. rental-service
Destination:
- `RentalDashboardScreen`

Primary collections from source:
- `rental_vehicle_type`
- `rental_packages`
- `rental_orders`
- `rental_coupons`
- `sections`

Typical filters:
- `sectionId`
- `vehicleTypeId`
- `isActive`
- `authorID`
- `createdAt`

Expected user content:
- rental home
- rental vehicle/service types
- packages
- booking/history
- coupons

Primary risks:
- `RISK_SECTION_ID_MISMATCH`
- `RISK_DATA_EMPTY`
- `RISK_ADMIN_MODULE_NOT_SEEDED`

### 5. parcel_delivery
Destination:
- `ParcelDashboardScreen`

Primary collections from source:
- `parcel_categories`
- `parcel_weight`
- `parcel_orders`
- `parcel_coupons`
- `sections`

Typical filters:
- `sectionId`
- `authorID`
- `createdAt`
- `isActive`

Expected user content:
- parcel categories
- weight options
- booking flow
- order history
- coupons

Primary risks:
- `RISK_SECTION_ID_MISMATCH`
- `RISK_DATA_EMPTY`
- `RISK_ADMIN_MODULE_NOT_SEEDED`

### 6. ondemand-service
Destination:
- `OnDemandDashboardScreen`

Primary collections from source:
- `provider_categories`
- `providers_services`
- `providers_workers`
- `providers_coupons`
- `provider_orders`
- `sections`

Typical filters seen explicitly in source:
- `sectionId`
- `categoryId`
- `publish`
- `author`
- `providerId`
- `authorID`
- `createdAt`

Expected user content:
- provider categories
- service catalog
- worker/provider cards
- coupons
- booking/history

Primary risks:
- `RISK_SECTION_ID_MISMATCH`
- `RISK_COLLECTION_MISMATCH`
- `RISK_DATA_EMPTY`
- `RISK_ADMIN_MODULE_NOT_SEEDED`

---

## Firestore Collection Map

| Collection | Seen in source | Role in runtime |
|---|---|---|
| `sections` | yes | daftar 17 service, section metadata, family flag |
| `settings` | yes | app banners, global config |
| `advertisements` | yes | ads/promo blocks |
| `vendors` | yes | store/vendor listing |
| `vendor_categories` | yes | category content |
| `vendor_products` | yes | products/items |
| `coupons` | yes | promo/coupon |
| `vendor_orders` | yes | order history / operational data |
| `rides` | yes | cab runtime |
| `vehicle_type` | yes | cab vehicle options |
| `popular_destinations` | yes | cab destination quick picks |
| `parcel_categories` | yes | parcel service categories |
| `parcel_weight` | yes | parcel weight options |
| `parcel_orders` | yes | parcel booking/history |
| `parcel_coupons` | yes | parcel coupons |
| `rental_vehicle_type` | yes | rental type/source |
| `rental_packages` | yes | rental packages |
| `rental_orders` | yes | rental order/history |
| `rental_coupons` | yes | rental coupons |
| `provider_categories` | yes | on-demand categories |
| `providers_services` | yes | on-demand service catalog |
| `providers_workers` | yes | on-demand workers |
| `provider_orders` | yes | on-demand booking/history |
| `providers_coupons` | yes | on-demand coupons |
| `zone` | yes | geographic filtering |

---

## Admin Module Dependency Map

Walau audit ini fokus Flutter source, collection yang dipakai jelas bergantung pada admin panel modules berikut:

### Shared foundation
- `Section` / service management
- global settings / banners

### Delivery + Ecommerce family
- vendors/stores
- categories
- items/products
- coupons
- advertisements
- orders

### Cab family
- rides
- vehicle type
- popular destinations
- drivers

### Parcel family
- parcel category
- parcel weight
- parcel orders
- parcel coupons

### Rental family
- rental vehicle type
- rental package
- rental orders
- rental coupons

### On-demand family
- provider categories
- provider services
- provider workers
- provider orders
- provider coupons

---

## 17 Service Runtime Matrix

Catatan:
- `section id` tidak tersedia dari source statis yang dibaca di audit ini
- maka diisi `UNKNOWN_SOURCE_NOT_FOUND`

| No | Service name | Section id | serviceTypeFlag | Destination screen | Primary collections | Required fields from source | Expected user content | Likely empty reason | Risks |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Cosmetic | UNKNOWN_SOURCE_NOT_FOUND | delivery-service | `DashBoardScreen` | `vendors`, `vendor_categories`, `vendor_products`, `coupons`, `advertisements`, `sections`, `settings` | `section_id`, `zoneId`, `publish`, `isActive`, `categoryID` | banner, categories, vendors, items, coupons, ads | delivery data for section empty or zone-filtered | `RISK_ZONE_FILTER`, `RISK_SECTION_ID_MISMATCH`, `RISK_SCREEN_ONLY_VENDOR` |
| 2 | Fashion | UNKNOWN_SOURCE_NOT_FOUND | ecommerce-service | `DashBoardEcommerceScreen` | `vendors`, `vendor_categories`, `vendor_products`, `coupons`, `advertisements`, `brands`, `sections` | `section_id`, `zoneId`, `publish`, `isActive`, `categoryID` | categories, brands, products, stores, ads | ecommerce records missing for active section | `RISK_SECTION_ID_MISMATCH`, `RISK_COLLECTION_MISMATCH` |
| 3 | Flowers | UNKNOWN_SOURCE_NOT_FOUND | delivery-service | `DashBoardScreen` | same as delivery | `section_id`, `zoneId`, `publish`, `isActive`, `categoryID` | banner, categories, vendors, items, ads | no vendors/products mapped to this section | `RISK_ZONE_FILTER`, `RISK_ADMIN_MODULE_NOT_SEEDED` |
| 4 | Restaurants | UNKNOWN_SOURCE_NOT_FOUND | delivery-service | `DashBoardScreen` | same as delivery | `section_id`, `zoneId`, `publish`, `isActive`, `categoryID` | story, categories, restaurants, promos | delivery query/index/zone issue | `RISK_INDEX_REQUIRED`, `RISK_ZONE_FILTER` |
| 5 | Cab Service | UNKNOWN_SOURCE_NOT_FOUND | cab-service | `CabDashboardScreen` | `rides`, `vehicle_type`, `popular_destinations`, `users` | `driverId`, `authorID`, `createdAt` | vehicle type, destination, booking, rides | cab collections not seeded | `RISK_DATA_EMPTY`, `RISK_ADMIN_MODULE_NOT_SEEDED` |
| 6 | Food Grocery | UNKNOWN_SOURCE_NOT_FOUND | delivery-service | `DashBoardScreen` | same as delivery | `section_id`, `zoneId`, `publish`, `isActive`, `categoryID` | groceries, stores, categories, ads | products/vendors not linked to grocery section | `RISK_SECTION_ID_MISMATCH`, `RISK_ZONE_FILTER` |
| 7 | Parcel Service | UNKNOWN_SOURCE_NOT_FOUND | parcel_delivery | `ParcelDashboardScreen` | `parcel_categories`, `parcel_weight`, `parcel_orders`, `parcel_coupons` | `sectionId`, `authorID`, `createdAt`, `isActive` | parcel category, weight, booking, history | parcel section exists but data family empty | `RISK_DATA_EMPTY`, `RISK_ADMIN_MODULE_NOT_SEEDED` |
| 8 | Rental Service | UNKNOWN_SOURCE_NOT_FOUND | rental-service | `RentalDashboardScreen` | `rental_vehicle_type`, `rental_packages`, `rental_orders`, `rental_coupons` | `sectionId`, `vehicleTypeId`, `authorID`, `createdAt`, `isActive` | rental types, packages, booking | rental family not seeded | `RISK_DATA_EMPTY`, `RISK_SECTION_ID_MISMATCH` |
| 9 | Home/On Demand Service | UNKNOWN_SOURCE_NOT_FOUND | ondemand-service | `OnDemandDashboardScreen` | `provider_categories`, `providers_services`, `providers_workers`, `provider_orders`, `providers_coupons` | `sectionId`, `categoryId`, `publish`, `author`, `providerId`, `authorID` | providers, services, workers, coupons, booking | provider family empty or wrong sectionId | `RISK_SECTION_ID_MISMATCH`, `RISK_COLLECTION_MISMATCH` |
| 10 | Laundry Service | UNKNOWN_SOURCE_NOT_FOUND | delivery-service | `DashBoardScreen` | same as delivery | `section_id`, `zoneId`, `publish`, `isActive`, `categoryID` | laundry vendors/items/promo | data exists in section but no linked vendors | `RISK_SCREEN_ONLY_VENDOR`, `RISK_ADMIN_MODULE_NOT_SEEDED` |
| 11 | Document Service | UNKNOWN_SOURCE_NOT_FOUND | parcel_delivery | `ParcelDashboardScreen` | `parcel_categories`, `parcel_weight`, `parcel_orders` | `sectionId`, `authorID`, `createdAt` | document parcel flow | no parcel category/weight seeded | `RISK_DATA_EMPTY`, `RISK_ADMIN_MODULE_NOT_SEEDED` |
| 12 | Hotel / Homestay | UNKNOWN_SOURCE_NOT_FOUND | rental-service | `RentalDashboardScreen` | `rental_vehicle_type`, `rental_packages`, `rental_orders` | `sectionId`, `vehicleTypeId`, `authorID`, `createdAt` | rental/hospitality packages | semantic mismatch or no seeded rental package | `RISK_DATA_EMPTY`, `RISK_COLLECTION_MISMATCH` |
| 13 | AKAP Ticket | UNKNOWN_SOURCE_NOT_FOUND | ecommerce-service | `DashBoardEcommerceScreen` | `vendors`, `vendor_categories`, `vendor_products`, `brands`, `advertisements` | `section_id`, `zoneId`, `publish`, `isActive` | stores/products/banner | ecommerce family reused but business data not seeded | `RISK_COLLECTION_MISMATCH`, `RISK_ADMIN_MODULE_NOT_SEEDED` |
| 14 | Technician Service | UNKNOWN_SOURCE_NOT_FOUND | ondemand-service | `OnDemandDashboardScreen` | `provider_categories`, `providers_services`, `providers_workers`, `provider_orders` | `sectionId`, `categoryId`, `publish`, `authorID` | technicians, services, booking | no services/providers for section | `RISK_DATA_EMPTY`, `RISK_SECTION_ID_MISMATCH` |
| 15 | Housemaid / ART | UNKNOWN_SOURCE_NOT_FOUND | ondemand-service | `OnDemandDashboardScreen` | `provider_categories`, `providers_services`, `providers_workers`, `provider_orders` | `sectionId`, `categoryId`, `publish`, `authorID` | providers/workers/booking | provider worker data empty | `RISK_DATA_EMPTY`, `RISK_ADMIN_MODULE_NOT_SEEDED` |
| 16 | Motor Delivery | UNKNOWN_SOURCE_NOT_FOUND | parcel_delivery | `ParcelDashboardScreen` | `parcel_categories`, `parcel_weight`, `parcel_orders` | `sectionId`, `authorID`, `createdAt` | motor delivery parcel flow | parcel family data not partitioned for section | `RISK_SECTION_ID_MISMATCH`, `RISK_DATA_EMPTY` |
| 17 | Emergency Help | UNKNOWN_SOURCE_NOT_FOUND | ondemand-service | `OnDemandDashboardScreen` | `provider_categories`, `providers_services`, `providers_workers`, `provider_orders` | `sectionId`, `categoryId`, `publish`, `authorID` | service cards, providers, booking | emergency section mapped to ondemand but provider data absent | `RISK_COLLECTION_MISMATCH`, `RISK_DATA_EMPTY` |

---

## Most Likely Missing Data Per Service

### delivery-service cluster
Most likely missing:
- vendors linked by `section_id`
- vendor categories linked by `section_id`
- vendor products linked by `section_id`
- zone-compatible vendor data

### ecommerce-service cluster
Most likely missing:
- vendor/store data seeded under ecommerce section
- product/category relations for ecommerce section
- brand/product linkage

### cab-service
Most likely missing:
- vehicle types
- popular destinations
- rides history / driver availability data

### rental-service
Most likely missing:
- rental vehicle type records using correct `sectionId`
- rental package data tied to correct vehicle type

### parcel_delivery
Most likely missing:
- parcel category
- parcel weight
- parcel orders under current section

### ondemand-service
Most likely missing:
- provider categories
- providers/services with `publish == true`
- workers or bookable services for current section

---

## Likely Empty Reasons by Risk Type

### `RISK_DATA_EMPTY`
Collection ada di source, tetapi dokumen family untuk section tersebut kemungkinan belum ada.

### `RISK_ZONE_FILTER`
Data ada, tetapi tersaring oleh `zoneId` atau geo query.

### `RISK_SECTION_ID_MISMATCH`
Source family campuran memakai:
- `section_id`
- `sectionId`

Ini sangat rawan membuat screen terlihat kosong walau dokumen sebenarnya ada.

### `RISK_COLLECTION_MISMATCH`
Nama service bisnis tertentu dipetakan ke family generik yang benar secara teknis, tetapi data bisnisnya belum berada di collection family yang dipakai screen tersebut.

### `RISK_INDEX_REQUIRED`
Khusus family delivery/ecommerce, query vendor + section + zone + ordering sangat berpotensi membutuhkan index komposit.

### `RISK_ADMIN_MODULE_NOT_SEEDED`
Admin module route ada, tetapi belum ada record cukup untuk mengisi screen user.

### `RISK_SCREEN_ONLY_VENDOR`
User masuk ke dashboard family delivery/ecommerce, tetapi data pendukung lain seperti categories/banner/coupons/ads kosong sehingga yang tersisa hanya vendor list.

---

## Recommended Next Audit Order

Urutan audit runtime paling efisien:

1. **delivery-service**
   - karena dipakai oleh paling banyak service
   - risiko terbesar: `section_id`, `zoneId`, index

2. **ondemand-service**
   - karena sangat bergantung pada `sectionId`, `categoryId`, `publish`

3. **parcel_delivery**
   - lebih kecil, mudah diverifikasi apakah `parcel_categories` dan `parcel_weight` benar-benar ada

4. **rental-service**
   - cek `rental_vehicle_type` dan `rental_packages`

5. **ecommerce-service**
   - cek brands + products + stores khusus ecommerce

6. **cab-service**
   - cek vehicle type + destinations + rides

---

## Conclusion

Dari source Flutter:
- 17 service sudah punya route family yang valid
- data runtime kaya berasal dari banyak collection, bukan satu screen tunggal
- risiko kosong paling besar ada pada mismatch field section, filter zone, dan family collection yang belum diisi admin

Makna praktis:
- jika satu service terasa kosong, audit berikutnya harus fokus ke **collection family** dan **field filter** yang dipakai family tersebut
- bukan kembali ke parser atau tap handler dasar
