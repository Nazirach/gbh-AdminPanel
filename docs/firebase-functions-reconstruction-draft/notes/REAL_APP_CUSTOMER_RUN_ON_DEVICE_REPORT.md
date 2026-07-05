# REAL APP CUSTOMER RUN ON DEVICE REPORT

Generated: 06/28/2026 18:40:16

Mode: run-customer-app only. No patch. No deploy. No source edit. No Firebase manual write.

## Target

- App: customer
- Device: Infinix X6853
- Device ID: 115413747T003958
- Purpose: create audit customer account from real app

## Audit Customer Account

- Name: Audit Customer 20260628_182846
- Email: audit.customer.20260628_182846@erbete-test.local
- Password: Audit@2026Test!
- Phone: 080000000001

## Command To Run

```powershell
cd "C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer"
flutter run -d 115413747T003958
```

## Trial Rule

- Register/login only the audit customer.
- Do not create paid order yet.
- After registration, check Firestore users document for the new audit account.

## Status

STATUS: CUSTOMER_RUN_ON_DEVICE_STARTED