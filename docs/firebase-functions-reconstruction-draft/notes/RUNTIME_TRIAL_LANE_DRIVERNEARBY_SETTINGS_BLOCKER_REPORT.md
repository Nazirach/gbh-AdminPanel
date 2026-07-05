# DRIVERNEARBY SETTINGS BLOCKER REPORT

Generated: 06/28/2026 17:39:45

Mode: blocker-record only. No patch. No deploy. No Firestore write. No delete. No commit.

## Finding

The DriverNearBy settings report still contains placeholder values:

- minimumDepositToRideAccept: GANTI_DENGAN_NILAI_ASLI
- driverOrderAcceptRejectDuration: GANTI_DENGAN_NILAI_ASLI
- orderAutoCancelDuration: GANTI_DENGAN_NILAI_ASLI
- driverRadios: GANTI_DENGAN_NILAI_ASLI
- distanceType: GANTI_DENGAN_NILAI_ASLI
- singleOrderReceive: GANTI_DENGAN_NILAI_ASLI

## Decision

- Active deliveryDispatch test is blocked.
- Do not use status Order Accepted.
- Do not use status Driver Rejected.
- Do not create any active dispatch test document yet.
- Read real values from Firestore settings/DriverNearBy first.

## Required Manual Read

Open Firebase Console:

- Project: erbete-putra
- Firestore Database
- Collection: settings
- Document: DriverNearBy

Copy these exact fields:

- minimumDepositToRideAccept
- driverOrderAcceptRejectDuration
- orderAutoCancelDuration
- driverRadios
- distanceType
- singleOrderReceive

If a field does not exist, record it as NOT_FOUND.

## Status

STATUS: ACTIVE_DISPATCH_BLOCKED_DRIVERNEARBY_SETTINGS_PLACEHOLDER