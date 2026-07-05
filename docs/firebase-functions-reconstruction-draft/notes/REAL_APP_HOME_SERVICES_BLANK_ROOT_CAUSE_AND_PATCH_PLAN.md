# HOME SERVICES BLANK ROOT CAUSE AND PATCH PLAN

Generated: 06/28/2026 21:21:03

## Status

STATUS: ROOT_CAUSE_CONFIRMED

## Root Cause

- Customer Home screen shows Explore Our Services but service cards are blank.
- App query reads Firestore collection sections with:
  - isActive == true
  - orderBy order ascending
- Firestore read-only audit found:
  - sections_total_count: 8
  - sections_active_ordered_count: 0
- All 8 section documents have isActive true.
- All 8 section documents are missing field order.
- Because app uses orderBy('order'), Firestore excludes documents without order field.

## Existing Sections

1. Cosmetic
2. Fashion
3. Flowers
4. Restaurants
5. Cab Service
6. Food Grocery
7. Parcel Service
8. Rental Service

## Safe Minimal Fix Plan

- Add numeric order field to each existing sections document.
- Do not change name.
- Do not change serviceType.
- Do not change sectionImage.
- Do not change isActive.
- Do not create new section documents.
- Do not create order.
- Do not open driver/vendor app.

## Proposed Order Values

- Cosmetic: 1
- Fashion: 2
- Flowers: 3
- Restaurants: 4
- Cab Service: 5
- Food Grocery: 6
- Parcel Service: 7
- Rental Service: 8

## Next Step

- Run a controlled Firestore data patch only after confirmation.
- After patch, rerun read-only query.
- Then reopen/capture customer Home screen.

## Final Safety

No Firebase write has been performed by this plan.