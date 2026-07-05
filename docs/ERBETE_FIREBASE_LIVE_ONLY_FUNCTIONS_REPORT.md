# ERBETE FIREBASE LIVE-ONLY FUNCTIONS REPORT

Generated: 06/28/2026 15:18:18

Mode: audit-only. No patch. No delete. No deploy. No commit.

## Finding

Search in C:\Users\Hp\Documents\Codex did not find local source exports for:

- parcelDispatch
- rideDispatch
- propagateUserProfileUpdates

Current local functions/index.js only clearly exposes:

- deleteUser
- deliveryDispatch

Live Firebase still shows additional functions:

- parcelDispatch
- rideDispatch
- propagateUserProfileUpdates

## Risk

- Do not run firebase deploy --only functions from this source folder.
- Do not delete live functions without finding their original source.
- These functions may be live-only/orphan from an older source copy.

## Safe Recommendation

1. Freeze deleteUser work as completed.
2. Do not touch parcelDispatch, rideDispatch, or propagateUserProfileUpdates yet.
3. Search backups/zips/old project folders for original source.
4. If original source cannot be found, export live metadata/logs before any replacement plan.

## Status

STATUS: LIVE_ONLY_FUNCTIONS_SOURCE_NOT_FOUND

Larangan:
- Belum patch.
- Belum deploy.
- Belum delete function.
- Jangan git add .
- Jangan commit/push.