# REAL APP TRANSACTION TRIAL START PLAN

Generated: 06/28/2026 18:28:47

Mode: real-app-trial. No patch. No deploy. No source edit. No live function delete.

## Purpose

Start a controlled real application trial using new audit-only accounts, then create a test order and observe which Firebase Functions and Firestore paths are triggered.

## Test Accounts To Create In App

### Customer
- Name: Audit Customer 20260628_182846
- Email: audit.customer.20260628_182846@erbete-test.local
- Password: Audit@2026Test!
- Phone: 080000000001

### Driver
- Name: Audit Driver 20260628_182846
- Email: audit.driver.20260628_182846@erbete-test.local
- Password: Audit@2026Test!
- Phone: 080000000002
- Service type target: delivery-service
- Wallet target: >= 100

### Vendor
- Name: Audit Vendor 20260628_182846
- Email: audit.vendor.20260628_182846@erbete-test.local
- Password: Audit@2026Test!
- Phone: 080000000003
- Store name: Audit Store 20260628_182846

## Trial Rules

- Use only audit accounts above.
- Do not use real customer, real vendor, or real driver accounts.
- Do not create real paid order.
- Use COD/cash/test payment if available.
- Do not use Order Accepted manually until driver impact is confirmed.
- Watch Firestore after every action.

## Expected App Folders

- C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer
- C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver
- C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor

## Status

STATUS: REAL_APP_TRANSACTION_TRIAL_PLAN_CREATED