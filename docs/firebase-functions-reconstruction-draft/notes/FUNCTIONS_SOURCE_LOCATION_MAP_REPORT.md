# FUNCTIONS SOURCE LOCATION MAP REPORT

Generated: 06/28/2026 17:14:18

Mode: location-map only. No patch. No deploy. No delete. No commit.

## Purpose

This report records the discovered Firebase Functions source locations so future work does not modify the wrong folder.

## Active Patched Working Source

- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions

Evidence:
- index.js contains exports.deliveryDispatch = delivery.dispatch;
- index.js contains exports.deleteUser = functions.https.onRequest(...)
- products/delivery.js exists
- delivery.js size: 11314 bytes

## Old ZIP Extract Sources

- C:\deploy\zip_audit\c_project_Order_Tracking_SAFE_EXTRACT\Order Tracking Firebase Function\functions
- C:\deploy\zip_audit\Order_Tracking_Firebase_Function_SAFE_EXTRACT\Order Tracking Firebase Function\functions

Evidence:
- index.js contains exports.deliveryDispatch = delivery.dispatch
- index.js contains exports.deleteUser = functions.https.onCall(...)
- These are old ZIP extracts and should be treated as reference only.

## Safe Draft Folder

- C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft

Purpose:
- non-deploy draft skeletons only
- no live exports
- no firebase deploy

## Decision

- Do not patch the old ZIP extract folders.
- Do not deploy from the old ZIP extract folders.
- Do not export draft files into live index.js yet.
- Keep live-only functions untouched.
- Use the patched working source only after a separate review step.

## Status

STATUS: FUNCTIONS_SOURCE_LOCATION_MAP_CREATED