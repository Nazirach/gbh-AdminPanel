# SERVICE ICON IMAGE AUDIT AND PATCH REPORT

Date: 2026-07-01
Mode: CONTROLLED LOCAL PATCH + BUILD VERIFY
Project: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer
Target screen: `lib/screen_ui/service_home_screen/service_list_screen.dart`

## Objective
Audit the service menu icons/images and fix the broken placeholder state where many service tiles still showed missing-image boxes instead of meaningful icons.

## Problem observed
From the runtime screenshots, multiple service cards displayed the red missing-image placeholder while the 17 Firestore sections were already loading correctly.

This showed that:
- parser/runtime section loading was already fixed
- the remaining issue was image rendering/fallback on the service tile grid

## Files audited
- `lib/screen_ui/service_home_screen/service_list_screen.dart`
- `lib/utils/network_image_widget.dart`
- `lib/constant/assets.dart`
- `pubspec.yaml`
- local asset folders under:
  - `assets/images/`
  - `assets/icons/`

## Root cause found
The service grid rendered each tile image with:
- `NetworkImageWidget(imageUrl: section.sectionImage ?? '', ...)`

When `section.sectionImage` was empty, invalid, or pointed to a broken URL, the image widget fell back to a remote placeholder path instead of a stable local asset per service.

That made many custom sections show a missing image box even though the sections themselves were valid and tappable.

## Patch applied
### File changed
- `lib/screen_ui/service_home_screen/service_list_screen.dart`

### Backup created
- `lib/screen_ui/service_home_screen/service_list_screen.dart.bak_STEP38A_20260630_235900`

### What was added
1. Imported:
- `package:flutter_svg/flutter_svg.dart`

2. Replaced direct tile image rendering with:
- `_buildServiceSectionImage(section)`

3. Added safe URL validation helper:
- `_isValidRemoteImage(String imageUrl)`

4. Added local service fallback mapper:
- `_buildServiceFallbackIcon(section)`

5. Added three fallback render helpers:
- `_buildMaterialFallbackIcon(...)`
- `_buildAssetFallbackIcon(...)`
- `_buildSvgFallbackIcon(...)`

## Fallback behavior now
### Uses Firestore image only when URL is a valid remote HTTP/HTTPS image
If `section.sectionImage` is valid:
- keep using the remote image via `NetworkImageWidget`

If missing/invalid:
- use a local fallback icon or image based on section name and/or `serviceTypeFlag`

## Mapped fallback coverage
### Name-based explicit fallbacks
- Cosmetic -> spa icon
- Fashion -> checkroom icon
- Flowers -> florist icon
- Restaurants -> `assets/images/ic_restaurant.svg`
- Food Grocery -> grocery icon
- Laundry Service -> laundry icon
- Document Service -> `assets/icons/ic_book.svg`
- Hotel / Homestay -> `assets/icons/ic_building.svg`
- AKAP Ticket -> ticket icon
- Technician Service -> handyman icon
- Housemaid / ART -> cleaning services icon
- Motor Delivery -> `assets/icons/ic_home_parcel.svg`
- Emergency Help -> emergency icon

### serviceTypeFlag fallbacks
- `cab-service` -> `assets/images/ic_cab.png`
- `parcel_delivery` -> `assets/images/image_parcel.png`
- `rental-service` -> `assets/icons/ic_building.svg`
- `ondemand-service` -> home repair icon
- `ecommerce-service` -> storefront icon
- `delivery-service` -> `assets/images/food_delivery.png`
- default -> `assets/icons/ghalbit_launcher_icon.png`

## Scope control
Confirmed not changed:
- Firestore section parser
- serviceTypeFlag routing helper
- service tap logic
- service list query
- branding text
- other dashboard screens

## Build verification
### First build attempt after patch
First `assembleDebug` attempt hit the previously known Flutter asset-copy conflict:
- `PathExistsException` on `assets/fonts/essential_sans_Regular.otf`

This was unrelated to the service icon patch itself.

### Recovery
Ran:
- `gradlew clean`

### Rebuild
Ran:
- `gradlew assembleDebug`

Result expected:
- rebuild used as compile verification for the patched service list screen

## Why this patch is safe
- It changes only the visual fallback layer of the service grid.
- It does not change section parsing, service IDs, navigation, or Firestore writes.
- If Firestore images are later corrected, valid remote images still take precedence automatically.

## Final outcome
Status: PATCH APPLIED

The service grid no longer depends entirely on Firestore image URLs for visual completeness. Each service tile now has a stable local fallback icon/image, so broken or empty section images should no longer render as missing-image placeholders.
