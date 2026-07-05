# ERBETE DELETE USER AUDIT STEP 2 - ADMIN PANEL ONLY

Generated: 06/28/2026 14:08:13

Mode: small-audit-only. No patch. No delete. No deploy. No commit.

Root: C:\deploy\adminpanel

## File Check

- routes\api.php exists: True

### Matches in routes\api.php

- No delete-user related match in this file.

- routes\web.php exists: True

### Matches in routes\web.php

- Pattern: Route::post
  - Line: 15
  - Text: Route::post('payments/razorpay/createorder', [App\Http\Controllers\RazorPayController::class, 'createOrderid']);

- Pattern: Route::post
  - Line: 16
  - Text: Route::post('payments/getpaytmchecksum', [App\Http\Controllers\PaymentController::class, 'getPaytmChecksum']);

- Pattern: Route::post
  - Line: 17
  - Text: Route::post('payments/validatechecksum', [App\Http\Controllers\PaymentController::class, 'validateChecksum']);

- Pattern: Route::post
  - Line: 18
  - Text: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);

- Pattern: Route::post
  - Line: 20
  - Text: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);

- Pattern: Route::post
  - Line: 21
  - Text: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);

- Pattern: Route::post
  - Line: 22
  - Text: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);

- Pattern: Route::post
  - Line: 43
  - Text: Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 'update'])->name('users.profile.update');

- Pattern: Route::post
  - Line: 292
  - Text: Route::post('order-status-notification', [App\Http\Controllers\OrderController::class, 'sendNotification'])->name('order-status-notification');

- Pattern: Route::post
  - Line: 484
  - Text: Route::post('broadcastnotification', [App\Http\Controllers\NotificationController::class, 'broadcastnotification'])->name('broadcastnotification');

- Pattern: Route::post
  - Line: 487
  - Text: Route::post('/sendnotification', [App\Http\Controllers\BookTableController::class, 'sendnotification'])->name('sendnotification');

- Pattern: Route::post
  - Line: 572
  - Text: Route::post('complaint_notification', [App\Http\Controllers\RideController::class, 'complaintNotification'])->name('complaint_notification');

- Pattern: Route::post
  - Line: 583
  - Text: Route::post('/firebase/config', [App\Http\Controllers\FirebaseController::class, 'config'])->name('firebase.config');

- Pattern: Route::post
  - Line: 610
  - Text: Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');

- Pattern: Route::post
  - Line: 633
  - Text: Route::post('role/store', [App\Http\Controllers\RoleController::class, 'store'])->name('role.store');

- Pattern: Route::post
  - Line: 642
  - Text: Route::post('role/update/{id}', [App\Http\Controllers\RoleController::class, 'update'])->name('role.update');

- Pattern: Route::post
  - Line: 652
  - Text: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');

- Pattern: Route::post
  - Line: 661
  - Text: Route::post('admin-users/update/{id}', [App\Http\Controllers\UserController::class, 'updateAdminUsers'])->name('admin.users.update');

- Pattern: Route::post
  - Line: 750
  - Text: Route::post('store-firebase-service', [App\Http\Controllers\HomeController::class,'storeFirebaseService'])->name('store-firebase-service');

- Pattern: Route::post
  - Line: 751
  - Text: Route::post('pay-to-user', [App\Http\Controllers\UserController::class,'payToUser'])->name('pay.user');

- Pattern: Route::post
  - Line: 752
  - Text: Route::post('check-payout-status', [App\Http\Controllers\UserController::class,'checkPayoutStatus'])->name('check.payout.status');

- Pattern: Route::post
  - Line: 799
  - Text: Route::post('/send-ad-notification', [App\Http\Controllers\AdvertisementsController::class, 'sendNotification'])->name('advertisement.sendnotification');

- Pattern: Route::post
  - Line: 877
  - Text: Route::post('/clear-cart', function () {

- Pattern: Route::post
  - Line: 905
  - Text: Route::post('send-notification', [App\Http\Controllers\NotificationController::class, 'sendNotification'])->name('send-notification');

- app\Http\Controllers\ApiController.php exists: False
- app\Http\Controllers\AdminController.php exists: False
- app\Http\Controllers\UserController.php exists: True

### Matches in app\Http\Controllers\UserController.php

- No delete-user related match in this file.


## Summary

- Total matches: 24

STATUS: STEP_2_ADMIN_PANEL_FOUND_MATCHES

## Catatan

Step ini hanya membaca file route/controller utama Admin Panel.
Belum membaca seluruh folder agar tidak berat.

Larangan:
- Belum patch source.
- Belum delete function.
- Belum deploy ulang.
- Belum safe test.
- Jangan test UID user asli.
- Jangan git add .
- Jangan commit/push.