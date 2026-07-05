/**
 * DRAFT ONLY - NOT FOR DEPLOY
 *
 * Rules:
 * - Do not export this file from live functions/index.js.
 * - Do not deploy this file.
 * - Do not replace live-only functions.
 * - Do not run firebase deploy --only functions.
 * - This draft exists only under docs/firebase-functions-reconstruction-draft.
 */

// Function draft: parcelDispatch
// Live trigger: parcel_orders/{orderID} document.write
// Runtime live: nodejs10 gcfv1
// Source status: missing/live-only

/*
Draft logic map:

1. On parcel_orders/{orderID} write.
2. Read before/after data.
3. Ignore delete/no-after.
4. Driver app evidence shows active search/accept flow.
5. Driver filter if push-dispatch is reconstructed:
   - users.role == driver
   - users.isActive == true
   - users.serviceTypes array-contains parcel_delivery
   - users.wallet_amount >= minimumDepositToRideAccept
   - users.sectionIds contains parcel_orders.sectionId
6. Pickup origin:
   - parcel_orders.senderLatLong
7. Zone logic:
   - senderZoneId / receiverZoneId
8. Radius:
   - prefer DriverNearBy.parcelRadius
9. Reject behavior:
   - still unconfirmed
10. Do not deploy until old behavior is confirmed.
*/