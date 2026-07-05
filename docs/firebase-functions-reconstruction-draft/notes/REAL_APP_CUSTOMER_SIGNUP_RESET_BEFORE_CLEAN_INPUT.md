# CUSTOMER SIGNUP RESET BEFORE CLEAN INPUT

Generated: 06/28/2026 19:12:06

Mode: adb app-data reset for audit test only. No patch. No deploy. No Firebase manual write.

## Reason

- First signup autofill inserted email with literal %40 instead of @.
- Mobile number was truncated.
- Password fields were not confirmed.
- Resetting local app state avoids submitting corrupted signup form.

## New Clean Audit Customer

- First Name: Audit
- Last Name: Customer
- Email: auditc20260628@gmail.com
- Phone: 8000000001
- Password: Audit2026Test

## Status

STATUS: CUSTOMER_SIGNUP_FORM_RESET_STARTED