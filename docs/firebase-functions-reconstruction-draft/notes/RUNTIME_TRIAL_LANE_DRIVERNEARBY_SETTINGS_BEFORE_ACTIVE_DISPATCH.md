# DRIVERNEARBY SETTINGS BEFORE ACTIVE DISPATCH

Generated: 06/28/2026 18:02:28

Mode: settings-record only. No patch. No deploy. No Firestore write. No delete. No commit.

## Source

- Firestore collection: pengaturan
- Firestore document: DriverNearBy
- Console label shown: Pengemudi di Dekatnya
- Read method: Firebase Console screenshot/manual inspection

## Recorded Settings Used By deliveryDispatch

- minimumDepositToRideAccept: 100
- driverOrderAcceptRejectDuration: 120
- orderAutoCancelDuration: NOT_FOUND
- driverRadios: 30
- distanceType: NOT_FOUND
- singleOrderReceive: NOT_FOUND

## Other Visible DriverNearBy Settings

- minimumAmountToWithdrawal / Jumlah Minimum yang Dapat Ditarik: 50
- aktifkanOTPparcelReceive: BENAR
- aktifkanOTPTripStart: BENAR

## Dispatch Impact Meaning

- minimumDepositToRideAccept=100 means driver wallet_amount must be >= 100.
- driverRadios=30 means deliveryDispatch radius is 30, unless distanceType changes conversion.
- driverOrderAcceptRejectDuration=120 means driver response window is 120 seconds/minutes depending source interpretation.
- orderAutoCancelDuration is NOT_FOUND, so timeout auto-cancel behavior must be treated carefully.
- distanceType is NOT_FOUND, so source fallback likely uses kilometers/default.
- singleOrderReceive is NOT_FOUND, so source fallback likely false.

## Current Trial Position

- deleteUser safe test succeeded.
- deliveryDispatch NO-OP test completed.
- DriverNearBy settings are now partially recorded from Console.
- deliveryDispatch active status test is still not approved.
- Candidate driver impact must be audited before Order Accepted test.

## Status

STATUS: DRIVERNEARBY_REAL_SETTINGS_RECORDED_BEFORE_ACTIVE_DISPATCH