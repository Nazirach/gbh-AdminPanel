# PATCHED DELIVERY SOURCE REVIEW REPORT

Generated: 06/28/2026 17:17:14

Mode: review-only. No patch. No deploy. No delete. No commit.

## Source File

- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\products\delivery.js

## File Metadata

- Length: 11314
- LastWriteTime: 04/22/2026 13:52:08

## Matched Evidence

### Pattern: require(
- LINE 1: const { onDocumentWritten } = require("firebase-functions/v2/firestore");
- LINE 2: const { defineString } = require('firebase-functions/params');
- LINE 3: const { getFirestore } = require("firebase-admin/firestore");
- LINE 4: const admin = require("firebase-admin");

### Pattern: exports.dispatch
- LINE 16: exports.dispatch = onDocumentWritten({

### Pattern: onDocumentWritten
- LINE 1: const { onDocumentWritten } = require("firebase-functions/v2/firestore");
- LINE 16: exports.dispatch = onDocumentWritten({

### Pattern: vendor_orders/{orderID}
- LINE 17: document: "vendor_orders/{orderID}"

### Pattern: Order Accepted
- LINE 59: if (orderData.status === "Order Accepted" || orderData.status === "Driver Rejected") {
- LINE 180: status: 'Order Accepted',

### Pattern: Driver Rejected
- LINE 59: if (orderData.status === "Order Accepted" || orderData.status === "Driver Rejected") {

### Pattern: Driver Pending
- LINE 160: await documentRef.set({ status: "Driver Pending" }, { merge: true });
- LINE 168: if (latestOrder && latestOrder.status === "Driver Pending") {

### Pattern: Driver Accepted
- LINE 208: if (orderData.status === "Driver Accepted") {

### Pattern: Order Shipped
- LINE 209: await documentRef.set({ status: "Order Shipped" }, { merge: true });

### Pattern: settings
- LINE 231: const snapshot = await firestore.collection("settings").doc('DriverNearBy').get();

### Pattern: DriverNearBy
- LINE 63: const driverNearByData = await getDriverNearByData(firestore);
- LINE 77: if (driverNearByData !== undefined) {
- LINE 78: minimumDepositToRideAccept = parseInt(driverNearByData.minimumDepositToRideAccept || 0);
- LINE 79: orderAcceptRejectDuration = parseInt(driverNearByData.driverOrderAcceptRejectDuration || 0);
- LINE 80: orderAutoCancelDuration = parseInt(driverNearByData.orderAutoCancelDuration || 0);
- LINE 81: kDistanceRadiusForDispatch = parseInt(driverNearByData.driverRadios || 50);
- LINE 82: if (driverNearByData.distanceType === 'miles') {
- LINE 85: singleOrderReceive = Boolean(driverNearByData.singleOrderReceive);
- LINE 230: async function getDriverNearByData(firestore) {
- LINE 231: const snapshot = await firestore.collection("settings").doc('DriverNearBy').get();

### Pattern: minimumDepositToRideAccept
- LINE 65: let minimumDepositToRideAccept = 0;
- LINE 78: minimumDepositToRideAccept = parseInt(driverNearByData.minimumDepositToRideAccept || 0);
- LINE 88: console.log('Config: minDeposit:', minimumDepositToRideAccept, 'acceptDuration:', orderAcceptRejectDuration);
- LINE 94: .where('wallet_amount', '>=', minimumDepositToRideAccept)

### Pattern: driverOrderAcceptRejectDuration
- LINE 79: orderAcceptRejectDuration = parseInt(driverNearByData.driverOrderAcceptRejectDuration || 0);

### Pattern: orderAutoCancelDuration
- LINE 67: let orderAutoCancelDuration = 0;
- LINE 80: orderAutoCancelDuration = parseInt(driverNearByData.orderAutoCancelDuration || 0);
- LINE 200: const futureTime = new Date(Date.now() + orderAutoCancelDuration * 60 * 1000);

### Pattern: driverRadios
- LINE 81: kDistanceRadiusForDispatch = parseInt(driverNearByData.driverRadios || 50);

### Pattern: distanceType
- LINE 82: if (driverNearByData.distanceType === 'miles') {

### Pattern: singleOrderReceive
- LINE 69: let singleOrderReceive = false;
- LINE 85: singleOrderReceive = Boolean(driverNearByData.singleOrderReceive);
- LINE 134: if (singleOrderReceive === true) {

### Pattern: serviceTypes
- LINE 93: .where('serviceTypes', 'array-contains', 'delivery-service')

### Pattern: delivery-service
- LINE 93: .where('serviceTypes', 'array-contains', 'delivery-service')

### Pattern: orderRequestData
- LINE 135: const hasPendingOrder = Array.isArray(driver.orderRequestData) && driver.orderRequestData.length > 0;
- LINE 173: if (dData?.orderRequestData) {
- LINE 174: const filteredRequests = dData.orderRequestData.filter(oid => oid !== orderId);
- LINE 175: await firestore.collection('users').doc(driverId).update({ orderRequestData: filteredRequests });
- LINE 188: let currentRequests = driver.orderRequestData || [];
- LINE 193: await firestore.collection('users').doc(driverId).update({ orderRequestData: currentRequests });

### Pattern: inProgressOrderID
- LINE 136: const hasAcceptedOrder = Array.isArray(driver.inProgressOrderID) && driver.inProgressOrderID.length > 0;

### Pattern: rejectedByDrivers
- LINE 62: const rejectedByDrivers = orderData.rejectedByDrivers || [];
- LINE 121: if (driver.location && !rejectedByDrivers.includes(driverId)) {
- LINE 178: rejectedByDrivers.push(driverId);
- LINE 181: rejectedByDrivers: rejectedByDrivers

### Pattern: sectionIds
- LINE 110: if (!driver.sectionIds?.includes(orderData.section_id)) {

### Pattern: zoneId
- LINE 73: zone_id = await getUserZoneId(firestore, orderData.address.location.longitude, orderData.address.location.latitude);
- LINE 116: if (driver.zoneId && zone_id !== null && driver.zoneId !== zone_id) {
- LINE 235: async function getUserZoneId(firestore, address_lng, address_lat) {

### Pattern: wallet_amount
- LINE 94: .where('wallet_amount', '>=', minimumDepositToRideAccept)

### Pattern: fcmToken
- LINE 107: if (driver.vendorID || !driver.fcmToken) continue;
- LINE 154: token: driver.fcmToken

## Decision

- deliveryDispatch source is reference only.
- Do not edit delivery.js yet.
- Do not deploy.
- Use this review to align rideDispatch and parcelDispatch drafts carefully.

## Status

STATUS: PATCHED_DELIVERY_SOURCE_REVIEW_CREATED