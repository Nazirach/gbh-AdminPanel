# AI-4 WEBSITE PANEL READ ONLY PREVIEW AUDIT

## Status
RUNNING

## Tujuan
Membaca struktur lama homepage, footer, CMS, dan preview publik tanpa mengubah data apa pun.

## Mode
READ_ONLY_ONLY

## Area Yang Dibaca
- routes/web.php
- app/Http/Controllers/HomeController.php
- app/Http/Controllers/SettingsController.php
- app/Http/Controllers/CmsController.php
- resources/views/homepage_Template
- resources/views/footerTemplate
- resources/views/cms
- resources/views/dashboard
- public assets terkait website

## Area Yang Tidak Disentuh
- Admin panel
- Vendor panel
- Store panel
- Order
- Payment
- Firebase
- Flutter
- Cron
- Wallet
- Payout
- Tax
- Dispatch

---


## 1. Route Website Lama

```text

  routes\web.php:24:Auth::routes();
  routes\web.php:25:
> routes\web.php:26:Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
> routes\web.php:27:Route::get('/dashboard/{id?}/{type?}', [App\Http\Controllers\HomeController::class, 
'index'])->name('dashboard');
  routes\web.php:28:
  routes\web.php:29://customers
  routes\web.php:30:Route::middleware(['permission:users,users'])->group(function () {
  routes\web.php:31:    Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users');
  routes\web.php:316:    });
  routes\web.php:317:    Route::middleware(['permission:global-setting,settings.app.globals'])->group(function () {
> routes\web.php:318:        Route::get('app/globals', [App\Http\Controllers\SettingsController::class, 
'globals'])->name('settings.app.globals');
  routes\web.php:319:    });
  routes\web.php:320:    Route::middleware(['permission:app-banners-setting,settings.app.banners'])->group(function () {
> routes\web.php:321:        Route::get('app/banners', [App\Http\Controllers\SettingsController::class, 
'banners'])->name('settings.app.banners');
  routes\web.php:322:    });
  routes\web.php:323:    Route::middleware(['permission:radius,settings.app.radiusConfiguration'])->group(function () {
> routes\web.php:324:        Route::get('app/radiusConfiguration', [App\Http\Controllers\SettingsController::class, 
'radiosConfiguration'])->name('settings.app.radiusConfiguration');
  routes\web.php:325:    });
  routes\web.php:326:    
Route::middleware(['permission:scheduleOrderNotification,settings.app.scheduleOrderNotification'])->group(function () {
> routes\web.php:327:        Route::get('app/scheduleOrderNotification', [App\Http\Controllers\SettingsController::class, 
'scheduleOrderNotification'])->name('settings.app.scheduleOrderNotification');
  routes\web.php:328:    });
> routes\web.php:329:    Route::get('mobile/globals', [App\Http\Controllers\SettingsController::class, 
'mobileGlobals'])->name('settings.mobile.globals');
  routes\web.php:330:    Route::middleware(['permission:payment-method,payment-method'])->group(function () {
> routes\web.php:331:        Route::get('payment/stripe', [App\Http\Controllers\SettingsController::class, 
'stripe'])->name('payment.stripe');
> routes\web.php:332:        Route::get('payment/razorpay', [App\Http\Controllers\SettingsController::class, 
'razorpay'])->name('payment.razorpay');
> routes\web.php:333:        Route::get('payment/cod', [App\Http\Controllers\SettingsController::class, 
'cod'])->name('payment.cod');
> routes\web.php:334:        Route::get('payment/paypal', [App\Http\Controllers\SettingsController::class, 
'paypal'])->name('payment.paypal');
> routes\web.php:335:        Route::get('payment/wallet', [App\Http\Controllers\SettingsController::class, 
'wallet'])->name('payment.wallet');
> routes\web.php:336:        Route::get('payment/payfast', [App\Http\Controllers\SettingsController::class, 
'payfast'])->name('payment.payfast');
> routes\web.php:337:        Route::get('payment/paystack', [App\Http\Controllers\SettingsController::class, 
'paystack'])->name('payment.paystack');
> routes\web.php:338:        Route::get('payment/flutterwave', [App\Http\Controllers\SettingsController::class, 
'flutterwave'])->name('payment.flutterwave');
> routes\web.php:339:        Route::get('payment/mercadopago', [App\Http\Controllers\SettingsController::class, 
'mercadopago'])->name('payment.mercadopago');
> routes\web.php:340:        Route::get('payment/xendit', [App\Http\Controllers\SettingsController::class, 
'xendit'])->name('payment.xendit');
> routes\web.php:341:        Route::get('payment/midtrans', [App\Http\Controllers\SettingsController::class, 
'midTrans'])->name('payment.midTrans');
> routes\web.php:342:        Route::get('payment/orangepay', [App\Http\Controllers\SettingsController::class, 
'orangePay'])->name('payment.orangePay');
  routes\web.php:343:    });
  routes\web.php:344:    Route::middleware(['permission:delivery-charge,settings.app.deliveryCharge'])->group(function () {
> routes\web.php:345:        Route::get('app/deliveryCharge', [App\Http\Controllers\SettingsController::class, 
'deliveryCharge'])->name('settings.app.deliveryCharge');
  routes\web.php:346:    });
  routes\web.php:347:    Route::middleware(['permission:openai-settings,settings.app.openai-settings'])->group(function () {
> routes\web.php:348:        Route::get('app/openai-settings', [App\Http\Controllers\SettingsController::class, 
'openaiSettings'])->name('settings.app.openai-settings');
  routes\web.php:349:    });
  routes\web.php:350:    Route::middleware(['permission:document-verification,settings.app.documentVerification'])->group(function 
() {
> routes\web.php:351:        Route::get('app/documentVerification', [App\Http\Controllers\SettingsController::class, 
'documentVerification'])->name('settings.app.documentVerification');
  routes\web.php:352:    });
  routes\web.php:353:    Route::middleware(['permission:settings-maintenance,settings.app.maintenance'])->group(function () {
> routes\web.php:354:        Route::get('app/maintenance', [App\Http\Controllers\SettingsController::class, 
'maintenanceSettings'])->name('settings.app.maintenance');
  routes\web.php:355:    });
  routes\web.php:356:    Route::middleware(['permission:language,language'])->group(function () {
> routes\web.php:357:        Route::get('app/languages', [App\Http\Controllers\SettingsController::class, 
'languages'])->name('settings.app.languages');
  routes\web.php:358:    });
  routes\web.php:359:    Route::middleware(['permission:language,language.create'])->group(function () {
> routes\web.php:360:        Route::get('app/languages/create', [App\Http\Controllers\SettingsController::class, 
'languagescreate'])->name('settings.app.languages.create');
  routes\web.php:361:    });
  routes\web.php:362:    Route::middleware(['permission:language,language.edit'])->group(function () {
> routes\web.php:363:        Route::get('app/languages/edit/{id}', [App\Http\Controllers\SettingsController::class, 
'languagesedit'])->name('settings.app.languages.edit');
  routes\web.php:364:    });
  routes\web.php:365:    Route::middleware(['permission:cab-promo,cab.promo'])->group(function () {
> routes\web.php:366:        Route::get('promos', [App\Http\Controllers\SettingsController::class, 
'promos'])->name('settings.promos');
  routes\web.php:367:    });
  routes\web.php:368:    Route::middleware(['permission:cab-promo,cab.promo.create'])->group(function () {
> routes\web.php:369:        Route::get('promos/create', [App\Http\Controllers\SettingsController::class, 
'promosCreate'])->name('settings.promos.create');
  routes\web.php:370:    });
  routes\web.php:371:    Route::middleware(['permission:cab-promo,cab.promo.edit'])->group(function () {
> routes\web.php:372:        Route::get('promos/edit/{id}', [App\Http\Controllers\SettingsController::class, 
'promosEdit'])->name('settings.promos.edit');
  routes\web.php:373:    });
  routes\web.php:374:    Route::middleware(['permission:special-offer,setting.specialOffer'])->group(function () {
> routes\web.php:375:        Route::get('app/specialOffer', [App\Http\Controllers\SettingsController::class, 
'specialOffer'])->name('settings.app.specialoffer');
  routes\web.php:376:    });
  routes\web.php:377:    Route::middleware(['permission:business-model,business-model'])->group(function () {
> routes\web.php:378:        Route::get('app/businessModel', [App\Http\Controllers\SettingsController::class, 
'businessModel'])->name('businessModel');
  routes\web.php:379:    });
  routes\web.php:380:});
  routes\web.php:381:
  routes\web.php:382:Route::middleware(['permission:make,make'])->group(function () {
  routes\web.php:447:});
  routes\web.php:448:
> routes\web.php:449:Route::middleware(['permission:home-page,homepageTemplate'])->group(function () {
> routes\web.php:450:    Route::get('/homepageTemplate', [App\Http\Controllers\SettingsController::class, 
'homepageTemplate'])->name('homepageTemplate');
  routes\web.php:451:});
  routes\web.php:452:
  routes\web.php:453:Route::middleware(['permission:rental-vehicle-type,rental-vehicle-type'])->group(function () {
> routes\web.php:454:    Route::get('rentalvehicleType', [App\Http\Controllers\SettingsController::class, 
'rentalvehicleType'])->name('rentalvehicleType');
  routes\web.php:455:});
  routes\web.php:456:Route::middleware(['permission:rental-vehicle-type,rental-vehicle-type.edit'])->group(function () {
> routes\web.php:457:    Route::get('rentalvehicleType/edit/{id}', [App\Http\Controllers\SettingsController::class, 
'rentalvehicleTypeEdit'])->name('rentalvehicleType.edit');
  routes\web.php:458:});
  routes\web.php:459:Route::middleware(['permission:rental-vehicle-type,rental-vehicle-type.create'])->group(function () {
> routes\web.php:460:    Route::get('rentalvehicleType/create', [App\Http\Controllers\SettingsController::class, 
'rentalvehicleTypeCreate'])->name('rentalvehicleType.create');
  routes\web.php:461:});
  routes\web.php:462:
  routes\web.php:463:Route::middleware(['permission:complaints,complaints'])->group(function () {
> routes\web.php:464:    Route::get('complaints', [App\Http\Controllers\SettingsController::class, 
'complaints'])->name('complaints');
  routes\web.php:465:});
  routes\web.php:466:Route::middleware(['permission:complaints,complaints.edit'])->group(function () {
> routes\web.php:467:    Route::get('complaints/edit/{id}', [App\Http\Controllers\SettingsController::class, 
'complaintsEdit'])->name('complaints.edit');
  routes\web.php:468:});
  routes\web.php:469:
  routes\web.php:470:Route::middleware(['permission:sos-rides,sos.rides'])->group(function () {
> routes\web.php:471:    Route::get('sos', [App\Http\Controllers\SettingsController::class, 'sos'])->name('sos');
  routes\web.php:472:});
  routes\web.php:473:Route::middleware(['permission:sos-rides,sos.rides.edit'])->group(function () {
> routes\web.php:474:    Route::get('sos/edit/{id}', [App\Http\Controllers\SettingsController::class, 'sosEdit'])->name('sos.edit');
  routes\web.php:475:});
  routes\web.php:476:
  routes\web.php:477:Route::middleware(['permission:general-notifications,notification.send'])->group(function () {
  routes\web.php:478:    Route::get('/notification/send', [App\Http\Controllers\NotificationController::class, 
'send'])->name('notification/send');
  routes\web.php:534:
  routes\web.php:535:Route::middleware(['permission:rental-discount,rental-discount'])->group(function () {
> routes\web.php:536:    Route::get('/rentaldiscount', [App\Http\Controllers\SettingsController::class, 
'rentalDiscount'])->name('rentaldiscount');
  routes\web.php:537:});
  routes\web.php:538:Route::middleware(['permission:rental-discount,rental-discount.edit'])->group(function () {
> routes\web.php:539:    Route::get('/rentaldiscount/edit/{id}', [App\Http\Controllers\SettingsController::class, 
'rentalDiscountEdit'])->name('rentaldiscount.edit');
  routes\web.php:540:});
  routes\web.php:541:Route::middleware(['permission:rental-discount,rental-discount.create'])->group(function () {
> routes\web.php:542:    Route::get('/rentaldiscount/create', [App\Http\Controllers\SettingsController::class, 
'rentalDiscountCreate'])->name('rentaldiscount.create');
  routes\web.php:543:});
  routes\web.php:544:
  routes\web.php:545:Route::middleware(['permission:rental-package,rental-package'])->group(function () {
  routes\web.php:546:    Route::get('rental-package', [App\Http\Controllers\RentalController::class, 
'rentalPackage'])->name('rental-package');
  routes\web.php:562:
  routes\web.php:563:Route::middleware(['permission:rental-vehicle,rental-vehicle'])->group(function () {
> routes\web.php:564:    Route::get('rentalvehicle', [App\Http\Controllers\SettingsController::class, 
'rentalvehicle'])->name('rentalvehicle');
  routes\web.php:565:});
  routes\web.php:566:Route::middleware(['permission:rental-vehicle,rental-vehicle.view'])->group(function () {
> routes\web.php:567:    Route::get('/rentalvehicle/view/{id}', [App\Http\Controllers\SettingsController::class, 
'rentalVehicleView'])->name('drivers.vehicle');
  routes\web.php:568:});
> routes\web.php:569:Route::middleware(['permission:footer,footerTemplate'])->group(function () {
> routes\web.php:570:    Route::get('footerTemplate', [App\Http\Controllers\SettingsController::class, 
'footerTemplate'])->name('footerTemplate');
  routes\web.php:571:});
  routes\web.php:572:Route::post('complaint_notification', [App\Http\Controllers\RideController::class, 
'complaintNotification'])->name('complaint_notification');
> routes\web.php:573:Route::middleware(['permission:cms,cms'])->group(function () {
> routes\web.php:574:    Route::get('cms', [App\Http\Controllers\CmsController::class, 'index'])->name('cms');
  routes\web.php:575:});
  routes\web.php:576:
> routes\web.php:577:Route::middleware(['permission:cms,cms.edit'])->group(function () {
> routes\web.php:578:    Route::get('/cms/edit/{id}', [App\Http\Controllers\CmsController::class, 'edit'])->name('cms.edit');
  routes\web.php:579:});
> routes\web.php:580:Route::middleware(['permission:cms,cms.create'])->group(function () {
> routes\web.php:581:    Route::get('/cms/create', [App\Http\Controllers\CmsController::class, 'create'])->name('cms.create');
  routes\web.php:582:});
  routes\web.php:583:Route::post('/firebase/config', [App\Http\Controllers\FirebaseController::class, 
'config'])->name('firebase.config');
  routes\web.php:584:Route::middleware(['permission:dynamic-notifications,dynamic-notification.index'])->group(function () {
  routes\web.php:585:    Route::get('dynamic-notification', [App\Http\Controllers\DynamicNotificationController::class, 
'index'])->name('dynamic-notification.index');
  routes\web.php:601:
  routes\web.php:602:Route::middleware(['permission:email-template,email-templates.index'])->group(function () {
> routes\web.php:603:    Route::get('email-templates', [App\Http\Controllers\SettingsController::class, 
'emailTemplatesIndex'])->name('email-templates.index');
  routes\web.php:604:});
  routes\web.php:605:Route::middleware(['permission:email-template,email-templates.edit'])->group(function () {
> routes\web.php:606:    Route::get('email-templates/save/{id?}', [App\Http\Controllers\SettingsController::class, 
'emailTemplatesSave'])->name('email-templates.save');
  routes\web.php:607:});
> routes\web.php:608:Route::get('email-templates/delete/{id}', [App\Http\Controllers\SettingsController::class, 
'emailTemplatesDelete'])->name('email-templates.delete');
  routes\web.php:609:
  routes\web.php:610:Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');
  routes\web.php:611:
  routes\web.php:612:Route::middleware(['permission:report,' . ((str_contains(Request::url(), 'report/')) ? explode("report/", 
Request::url())[1] : Request::url())])->group(function () {
  routes\web.php:748:});
  routes\web.php:749:
> routes\web.php:750:Route::post('store-firebase-service', 
[App\Http\Controllers\HomeController::class,'storeFirebaseService'])->name('store-firebase-service');
  routes\web.php:751:Route::post('pay-to-user', [App\Http\Controllers\UserController::class,'payToUser'])->name('pay.user');
  routes\web.php:752:Route::post('check-payout-status', 
[App\Http\Controllers\UserController::class,'checkPayoutStatus'])->name('check.payout.status');
  routes\web.php:753:
  routes\web.php:754:Route::middleware(['permission:subscription-plans,subscription-plans'])->group(function () {
  routes\web.php:916:    Route::get('/worker/chat/{id}', [App\Http\Controllers\OnDemandServiceController::class, 
'workerChat'])->name('ondemand.workers.chat');
  routes\web.php:917:});
> routes\web.php:918:// AI4_WEBSITE_PANEL_ROUTE
  routes\web.php:919:Route::middleware(['auth'])->prefix('website-panel')->name('website-panel.')->group(function () {
  routes\web.php:920:    Route::get('/', [\App\Http\Controllers\WebsitePanelController::class, 'index'])->name('index');
  routes\web.php:921:    Route::get('/homepage', [\App\Http\Controllers\WebsitePanelController::class, 
'homepage'])->name('homepage');
  routes\web.php:922:    Route::get('/footer', [\App\Http\Controllers\WebsitePanelController::class, 'footer'])->name('footer');
> routes\web.php:923:    Route::get('/cms', [\App\Http\Controllers\WebsitePanelController::class, 'cms'])->name('cms');
  routes\web.php:924:    Route::get('/preview', [\App\Http\Controllers\WebsitePanelController::class, 'preview'])->name('preview');
  routes\web.php:925:});
  routes\web.php:926:
> routes\web.php:927:// AI4_WEBSITE_PANEL_ROUTE
  routes\web.php:928:// AI4 local scaffolding route: isolated from auth role middleware during development.
  routes\web.php:929:Route::withoutMiddleware([\App\Http\Middleware\CheckUserRoleMiddleware::class])
  routes\web.php:930:    ->prefix('website-panel')
  routes\web.php:931:    ->name('website-panel.')
  routes\web.php:934:        Route::get('/homepage', [\App\Http\Controllers\WebsitePanelController::class, 
'homepage'])->name('homepage');
  routes\web.php:935:        Route::get('/footer', [\App\Http\Controllers\WebsitePanelController::class, 'footer'])->name('footer');
> routes\web.php:936:        Route::get('/cms', [\App\Http\Controllers\WebsitePanelController::class, 'cms'])->name('cms');
  routes\web.php:937:        Route::get('/preview', [\App\Http\Controllers\WebsitePanelController::class, 
'preview'])->name('preview');
  routes\web.php:938:    });
  routes\web.php:939:




## Controller: .\app\Http\Controllers\HomeController.php
```text

  app\Http\Controllers\HomeController.php:10:
> app\Http\Controllers\HomeController.php:11:	public function __construct()
  app\Http\Controllers\HomeController.php:12:	{
  app\Http\Controllers\HomeController.php:13:		$this->middleware('auth');
  app\Http\Controllers\HomeController.php:14:	}
  app\Http\Controllers\HomeController.php:15:
> app\Http\Controllers\HomeController.php:16:	public function index($id = null, $type = null)
  app\Http\Controllers\HomeController.php:17:	{
  app\Http\Controllers\HomeController.php:18:		$id = $id ?? @$_COOKIE['section_id'];
  app\Http\Controllers\HomeController.php:19:		$type = $type ?? @$_COOKIE['service_type'];
  app\Http\Controllers\HomeController.php:22:			case "cab-service":
> app\Http\Controllers\HomeController.php:23:				return view('dashboard.cab', compact('id','type'));
  app\Http\Controllers\HomeController.php:24:			case "delivery-service":
> app\Http\Controllers\HomeController.php:25:				return view('dashboard.delivery', compact('id','type'));
  app\Http\Controllers\HomeController.php:26:			case "ecommerce-service":
> app\Http\Controllers\HomeController.php:27:				return view('dashboard.ecommerce', compact('id','type'));
  app\Http\Controllers\HomeController.php:28:			case "parcel_delivery":
> app\Http\Controllers\HomeController.php:29:				return view('dashboard.parcel', compact('id','type'));
  app\Http\Controllers\HomeController.php:30:			case "rental-service":
> app\Http\Controllers\HomeController.php:31:				return view('dashboard.rental', compact('id','type'));
  app\Http\Controllers\HomeController.php:32:			case "ondemand-service":
> app\Http\Controllers\HomeController.php:33:				return view('dashboard.ondemand', compact('id','type'));
  app\Http\Controllers\HomeController.php:34:			default:
> app\Http\Controllers\HomeController.php:35:				return view('dashboard.delivery', compact('id','type'));
  app\Http\Controllers\HomeController.php:36:		}
  app\Http\Controllers\HomeController.php:37:	}
  app\Http\Controllers\HomeController.php:38:
> app\Http\Controllers\HomeController.php:39:	public function storeFirebaseService(Request $request)
  app\Http\Controllers\HomeController.php:40:	{
  app\Http\Controllers\HomeController.php:41:		if (!empty($request->serviceJson) && 
!Storage::disk('local')->has('firebase/credentials.json')) {
  app\Http\Controllers\HomeController.php:42:			Storage::disk('local')->put('firebase/credentials.json', 
file_get_contents(base64_decode($request->serviceJson)));



```

## Controller: .\app\Http\Controllers\SettingsController.php
```text

  app\Http\Controllers\SettingsController.php:8:
> app\Http\Controllers\SettingsController.php:9:    public function __construct()
  app\Http\Controllers\SettingsController.php:10:    {
  app\Http\Controllers\SettingsController.php:11:        $this->middleware('auth');
  app\Http\Controllers\SettingsController.php:12:    }
  app\Http\Controllers\SettingsController.php:13:
> app\Http\Controllers\SettingsController.php:14:    public function social()
  app\Http\Controllers\SettingsController.php:15:    {
> app\Http\Controllers\SettingsController.php:16:        return view("settings.app.social");
  app\Http\Controllers\SettingsController.php:17:    }
  app\Http\Controllers\SettingsController.php:18:
> app\Http\Controllers\SettingsController.php:19:    public function globals()
  app\Http\Controllers\SettingsController.php:20:    {
> app\Http\Controllers\SettingsController.php:21:        return view("settings.app.global");
  app\Http\Controllers\SettingsController.php:22:    }
  app\Http\Controllers\SettingsController.php:23:
> app\Http\Controllers\SettingsController.php:24:    public function cod()
  app\Http\Controllers\SettingsController.php:25:    {
> app\Http\Controllers\SettingsController.php:26:        return view('settings.app.cod');
  app\Http\Controllers\SettingsController.php:27:    }
  app\Http\Controllers\SettingsController.php:28:
> app\Http\Controllers\SettingsController.php:29:    public function stripe()
  app\Http\Controllers\SettingsController.php:30:    {
> app\Http\Controllers\SettingsController.php:31:        return view('settings.app.stripe');
  app\Http\Controllers\SettingsController.php:32:    }
  app\Http\Controllers\SettingsController.php:33:
> app\Http\Controllers\SettingsController.php:34:    public function mobileGlobals()
  app\Http\Controllers\SettingsController.php:35:    {
> app\Http\Controllers\SettingsController.php:36:        return view('settings.mobile.globals');
  app\Http\Controllers\SettingsController.php:37:    }
  app\Http\Controllers\SettingsController.php:38:
> app\Http\Controllers\SettingsController.php:39:    public function razorpay()
  app\Http\Controllers\SettingsController.php:40:    {
> app\Http\Controllers\SettingsController.php:41:        return view('settings.app.razorpay');
  app\Http\Controllers\SettingsController.php:42:    }
  app\Http\Controllers\SettingsController.php:43:
> app\Http\Controllers\SettingsController.php:44:    public function paypal()
  app\Http\Controllers\SettingsController.php:45:    {
> app\Http\Controllers\SettingsController.php:46:        return view('settings.app.paypal');
  app\Http\Controllers\SettingsController.php:47:    }
  app\Http\Controllers\SettingsController.php:48:
> app\Http\Controllers\SettingsController.php:49:    public function radiosConfiguration()
  app\Http\Controllers\SettingsController.php:50:    {
> app\Http\Controllers\SettingsController.php:51:        return view("settings.app.radiosConfiguration");
  app\Http\Controllers\SettingsController.php:52:    }
  app\Http\Controllers\SettingsController.php:53:
> app\Http\Controllers\SettingsController.php:54:    public function wallet()
  app\Http\Controllers\SettingsController.php:55:    {
> app\Http\Controllers\SettingsController.php:56:        return view('settings.app.wallet');
  app\Http\Controllers\SettingsController.php:57:    }
  app\Http\Controllers\SettingsController.php:58:
  app\Http\Controllers\SettingsController.php:59:
> app\Http\Controllers\SettingsController.php:60:    public function payfast()
  app\Http\Controllers\SettingsController.php:61:    {
> app\Http\Controllers\SettingsController.php:62:        return view('settings.app.payfast');
  app\Http\Controllers\SettingsController.php:63:    }
  app\Http\Controllers\SettingsController.php:64:
> app\Http\Controllers\SettingsController.php:65:    public function paystack()
  app\Http\Controllers\SettingsController.php:66:    {
> app\Http\Controllers\SettingsController.php:67:        return view('settings.app.paystack');
  app\Http\Controllers\SettingsController.php:68:    }
  app\Http\Controllers\SettingsController.php:69:
> app\Http\Controllers\SettingsController.php:70:    public function mercadopago()
  app\Http\Controllers\SettingsController.php:71:    {
> app\Http\Controllers\SettingsController.php:72:        return view('settings.app.mercadopago');
  app\Http\Controllers\SettingsController.php:73:    }
  app\Http\Controllers\SettingsController.php:74:
> app\Http\Controllers\SettingsController.php:75:    public function flutterwave()
  app\Http\Controllers\SettingsController.php:76:    {
> app\Http\Controllers\SettingsController.php:77:        return view('settings.app.flutterwave');
  app\Http\Controllers\SettingsController.php:78:    }
  app\Http\Controllers\SettingsController.php:79:
> app\Http\Controllers\SettingsController.php:80:    public function xendit()
  app\Http\Controllers\SettingsController.php:81:    {
> app\Http\Controllers\SettingsController.php:82:        return view('settings.app.xendit');
  app\Http\Controllers\SettingsController.php:83:    }
  app\Http\Controllers\SettingsController.php:84:
> app\Http\Controllers\SettingsController.php:85:    public function midTrans()
  app\Http\Controllers\SettingsController.php:86:    {
> app\Http\Controllers\SettingsController.php:87:        return view('settings.app.midTrans');
  app\Http\Controllers\SettingsController.php:88:    }
  app\Http\Controllers\SettingsController.php:89:
> app\Http\Controllers\SettingsController.php:90:    public function orangePay()
  app\Http\Controllers\SettingsController.php:91:    {
> app\Http\Controllers\SettingsController.php:92:        return view('settings.app.orangePay');
  app\Http\Controllers\SettingsController.php:93:    }
  app\Http\Controllers\SettingsController.php:94:
> app\Http\Controllers\SettingsController.php:95:    public function deliveryCharge()
  app\Http\Controllers\SettingsController.php:96:    {
> app\Http\Controllers\SettingsController.php:97:        return view('settings.app.deliveryCharge');
  app\Http\Controllers\SettingsController.php:98:    }
  app\Http\Controllers\SettingsController.php:99:
> app\Http\Controllers\SettingsController.php:100:    public function openaiSettings()
  app\Http\Controllers\SettingsController.php:101:    {
> app\Http\Controllers\SettingsController.php:102:        return view("settings.app.openaiSettings");
  app\Http\Controllers\SettingsController.php:103:    }
  app\Http\Controllers\SettingsController.php:104:
> app\Http\Controllers\SettingsController.php:105:    public function languages()
  app\Http\Controllers\SettingsController.php:106:    {
> app\Http\Controllers\SettingsController.php:107:        return view('settings.languages.index');
  app\Http\Controllers\SettingsController.php:108:    }
  app\Http\Controllers\SettingsController.php:109:
> app\Http\Controllers\SettingsController.php:110:    public function languagesedit($id)
  app\Http\Controllers\SettingsController.php:111:    {
> app\Http\Controllers\SettingsController.php:112:        return view('settings.languages.edit')->with('id', $id);
  app\Http\Controllers\SettingsController.php:113:    }
  app\Http\Controllers\SettingsController.php:114:
> app\Http\Controllers\SettingsController.php:115:    public function languagescreate()
  app\Http\Controllers\SettingsController.php:116:    {
> app\Http\Controllers\SettingsController.php:117:        return view('settings.languages.create');
  app\Http\Controllers\SettingsController.php:118:    }
  app\Http\Controllers\SettingsController.php:119:
> app\Http\Controllers\SettingsController.php:120:    public function carMake()
  app\Http\Controllers\SettingsController.php:121:    {
> app\Http\Controllers\SettingsController.php:122:        return view('settings.carMake.index');
  app\Http\Controllers\SettingsController.php:123:    }
  app\Http\Controllers\SettingsController.php:124:
> app\Http\Controllers\SettingsController.php:125:    public function carMakeEdit($id)
  app\Http\Controllers\SettingsController.php:126:    {
> app\Http\Controllers\SettingsController.php:127:        return view('settings.carMake.edit')->with('id', $id);
  app\Http\Controllers\SettingsController.php:128:    }
  app\Http\Controllers\SettingsController.php:129:
> app\Http\Controllers\SettingsController.php:130:    public function carMakeCreate()
  app\Http\Controllers\SettingsController.php:131:    {
> app\Http\Controllers\SettingsController.php:132:        return view('settings.carMake.create');
  app\Http\Controllers\SettingsController.php:133:    }
  app\Http\Controllers\SettingsController.php:134:
> app\Http\Controllers\SettingsController.php:135:    public function carModel()
  app\Http\Controllers\SettingsController.php:136:    {
> app\Http\Controllers\SettingsController.php:137:        return view('settings.carModel.index');
  app\Http\Controllers\SettingsController.php:138:    }
  app\Http\Controllers\SettingsController.php:139:
> app\Http\Controllers\SettingsController.php:140:    public function carModelEdit($id)
  app\Http\Controllers\SettingsController.php:141:    {
> app\Http\Controllers\SettingsController.php:142:        return view('settings.carModel.edit')->with('id', $id);
  app\Http\Controllers\SettingsController.php:143:    }
  app\Http\Controllers\SettingsController.php:144:
> app\Http\Controllers\SettingsController.php:145:    public function carModelCreate()
  app\Http\Controllers\SettingsController.php:146:    {
> app\Http\Controllers\SettingsController.php:147:        return view('settings.carModel.create');
  app\Http\Controllers\SettingsController.php:148:    }
  app\Http\Controllers\SettingsController.php:149:
> app\Http\Controllers\SettingsController.php:150:    public function vehicleType()
  app\Http\Controllers\SettingsController.php:151:    {
> app\Http\Controllers\SettingsController.php:152:        return view('settings.vehicleType.index');
  app\Http\Controllers\SettingsController.php:153:    }
  app\Http\Controllers\SettingsController.php:154:
  app\Http\Controllers\SettingsController.php:155:
> app\Http\Controllers\SettingsController.php:156:    public function vehicleTypeEdit($id)
  app\Http\Controllers\SettingsController.php:157:    {
> app\Http\Controllers\SettingsController.php:158:        return view('settings.vehicleType.edit')->with('id', $id);
  app\Http\Controllers\SettingsController.php:159:    }
  app\Http\Controllers\SettingsController.php:160:
> app\Http\Controllers\SettingsController.php:161:    public function vehicleTypeCreate()
  app\Http\Controllers\SettingsController.php:162:    {
> app\Http\Controllers\SettingsController.php:163:        return view('settings.vehicleType.create');
  app\Http\Controllers\SettingsController.php:164:    }
  app\Http\Controllers\SettingsController.php:165:
> app\Http\Controllers\SettingsController.php:166:    public function rentalvehicleType()
  app\Http\Controllers\SettingsController.php:167:    {
> app\Http\Controllers\SettingsController.php:168:        return view('rentalvehicleType.index');
  app\Http\Controllers\SettingsController.php:169:    }
  app\Http\Controllers\SettingsController.php:170:
> app\Http\Controllers\SettingsController.php:171:    public function rentalvehicleTypeEdit($id)
  app\Http\Controllers\SettingsController.php:172:    {
> app\Http\Controllers\SettingsController.php:173:        return view('rentalvehicleType.edit')->with('id', $id);
  app\Http\Controllers\SettingsController.php:174:    }
  app\Http\Controllers\SettingsController.php:175:
> app\Http\Controllers\SettingsController.php:176:    public function rentalvehicleTypeCreate()
  app\Http\Controllers\SettingsController.php:177:    {
> app\Http\Controllers\SettingsController.php:178:        return view('rentalvehicleType.create');
  app\Http\Controllers\SettingsController.php:179:    }
  app\Http\Controllers\SettingsController.php:180:
> app\Http\Controllers\SettingsController.php:181:    public function promos()
  app\Http\Controllers\SettingsController.php:182:    {
> app\Http\Controllers\SettingsController.php:183:        return view('settings.promos.index');
  app\Http\Controllers\SettingsController.php:184:    }
  app\Http\Controllers\SettingsController.php:185:
> app\Http\Controllers\SettingsController.php:186:    public function promosEdit($id)
  app\Http\Controllers\SettingsController.php:187:    {
> app\Http\Controllers\SettingsController.php:188:        return view('settings.promos.edit')->with('id', $id);
  app\Http\Controllers\SettingsController.php:189:    }
  app\Http\Controllers\SettingsController.php:190:
> app\Http\Controllers\SettingsController.php:191:    public function promosCreate()
  app\Http\Controllers\SettingsController.php:192:    {
> app\Http\Controllers\SettingsController.php:193:        return view('settings.promos.create');
  app\Http\Controllers\SettingsController.php:194:    }
  app\Http\Controllers\SettingsController.php:195:
> app\Http\Controllers\SettingsController.php:196:    public function complaints()
  app\Http\Controllers\SettingsController.php:197:    {
> app\Http\Controllers\SettingsController.php:198:        return view('complaints.index');
  app\Http\Controllers\SettingsController.php:199:    }
  app\Http\Controllers\SettingsController.php:200:
> app\Http\Controllers\SettingsController.php:201:    public function complaintsEdit($id)
  app\Http\Controllers\SettingsController.php:202:    {
> app\Http\Controllers\SettingsController.php:203:        return view('complaints.edit')->with('id', $id);
  app\Http\Controllers\SettingsController.php:204:
  app\Http\Controllers\SettingsController.php:205:    }
  app\Http\Controllers\SettingsController.php:206:
> app\Http\Controllers\SettingsController.php:207:    public function sos()
  app\Http\Controllers\SettingsController.php:208:    {
> app\Http\Controllers\SettingsController.php:209:        return view('sos.index');
  app\Http\Controllers\SettingsController.php:210:    }
  app\Http\Controllers\SettingsController.php:211:
> app\Http\Controllers\SettingsController.php:212:    public function sosEdit($id)
  app\Http\Controllers\SettingsController.php:213:    {
> app\Http\Controllers\SettingsController.php:214:        return view('sos.edit')->with('id', $id);
  app\Http\Controllers\SettingsController.php:215:
  app\Http\Controllers\SettingsController.php:216:    }
  app\Http\Controllers\SettingsController.php:217:
> app\Http\Controllers\SettingsController.php:218:    public function specialOffer()
  app\Http\Controllers\SettingsController.php:219:    {
> app\Http\Controllers\SettingsController.php:220:        return view('settings.app.specialDiscountOffer');
  app\Http\Controllers\SettingsController.php:221:    }
  app\Http\Controllers\SettingsController.php:222:
> app\Http\Controllers\SettingsController.php:223:    public function menuItems()
  app\Http\Controllers\SettingsController.php:224:    {
> app\Http\Controllers\SettingsController.php:225:        return view('settings.menu_items.index');
  app\Http\Controllers\SettingsController.php:226:    }
  app\Http\Controllers\SettingsController.php:227:
> app\Http\Controllers\SettingsController.php:228:    public function menuItems2()
  app\Http\Controllers\SettingsController.php:229:    {
> app\Http\Controllers\SettingsController.php:230:        return view('settings.menu_items.index_newbackup');
  app\Http\Controllers\SettingsController.php:231:    }
  app\Http\Controllers\SettingsController.php:232:
> app\Http\Controllers\SettingsController.php:233:    public function menuItemsCreate()
  app\Http\Controllers\SettingsController.php:234:    {
> app\Http\Controllers\SettingsController.php:235:        return view('settings.menu_items.create');
  app\Http\Controllers\SettingsController.php:236:    }
  app\Http\Controllers\SettingsController.php:237:
> app\Http\Controllers\SettingsController.php:238:    public function menuItemsEdit($id)
  app\Http\Controllers\SettingsController.php:239:    {
> app\Http\Controllers\SettingsController.php:240:        return view('settings.menu_items.edit')->with('id', $id);
  app\Http\Controllers\SettingsController.php:241:    }
  app\Http\Controllers\SettingsController.php:242:
> app\Http\Controllers\SettingsController.php:243:    public function rentalDiscount()
  app\Http\Controllers\SettingsController.php:244:    {
> app\Http\Controllers\SettingsController.php:245:        return view('rentalDiscount.index');
  app\Http\Controllers\SettingsController.php:246:    }
  app\Http\Controllers\SettingsController.php:247:
> app\Http\Controllers\SettingsController.php:248:    public function rentalDiscountEdit($id)
  app\Http\Controllers\SettingsController.php:249:    {
> app\Http\Controllers\SettingsController.php:250:        return view('rentalDiscount.edit')->with('id', $id);
  app\Http\Controllers\SettingsController.php:251:    }
  app\Http\Controllers\SettingsController.php:252:
> app\Http\Controllers\SettingsController.php:253:    public function rentalDiscountCreate()
  app\Http\Controllers\SettingsController.php:254:    {
> app\Http\Controllers\SettingsController.php:255:        return view('rentalDiscount.create');
  app\Http\Controllers\SettingsController.php:256:    }
  app\Http\Controllers\SettingsController.php:257:
> app\Http\Controllers\SettingsController.php:258:    public function homepageTemplate()
  app\Http\Controllers\SettingsController.php:259:    {
> app\Http\Controllers\SettingsController.php:260:        return view('homepage_Template.index');
  app\Http\Controllers\SettingsController.php:261:    }
  app\Http\Controllers\SettingsController.php:262:
> app\Http\Controllers\SettingsController.php:263:    public function rentalvehicle()
  app\Http\Controllers\SettingsController.php:264:    {
> app\Http\Controllers\SettingsController.php:265:        return view('rentalVehicle.index');
  app\Http\Controllers\SettingsController.php:266:    }
  app\Http\Controllers\SettingsController.php:267:
> app\Http\Controllers\SettingsController.php:268:    public function rentalVehicleView($id)
  app\Http\Controllers\SettingsController.php:269:    {
> app\Http\Controllers\SettingsController.php:270:        return view('rentalVehicle.view')->with('id', $id);
  app\Http\Controllers\SettingsController.php:271:    }
  app\Http\Controllers\SettingsController.php:272:
> app\Http\Controllers\SettingsController.php:273:    public function footerTemplate()
  app\Http\Controllers\SettingsController.php:274:    {
> app\Http\Controllers\SettingsController.php:275:        return view('footerTemplate.index');
  app\Http\Controllers\SettingsController.php:276:    }
  app\Http\Controllers\SettingsController.php:277:
> app\Http\Controllers\SettingsController.php:278:    public function emailTemplatesIndex()
  app\Http\Controllers\SettingsController.php:279:    {
> app\Http\Controllers\SettingsController.php:280:        return view('email_templates.index');
  app\Http\Controllers\SettingsController.php:281:    }
  app\Http\Controllers\SettingsController.php:282:
> app\Http\Controllers\SettingsController.php:283:    public function emailTemplatesSave($id = '')
  app\Http\Controllers\SettingsController.php:284:    {
  app\Http\Controllers\SettingsController.php:285:
> app\Http\Controllers\SettingsController.php:286:        return view('email_templates.save')->with('id', $id);
  app\Http\Controllers\SettingsController.php:287:    }
  app\Http\Controllers\SettingsController.php:288:
> app\Http\Controllers\SettingsController.php:289:    public function banners()
  app\Http\Controllers\SettingsController.php:290:    {
> app\Http\Controllers\SettingsController.php:291:        return view("settings.app.banners");
  app\Http\Controllers\SettingsController.php:292:    }
> app\Http\Controllers\SettingsController.php:293:    public function businessModel()
  app\Http\Controllers\SettingsController.php:294:    {
> app\Http\Controllers\SettingsController.php:295:        return view('settings.app.businessModel');
  app\Http\Controllers\SettingsController.php:296:    }
> app\Http\Controllers\SettingsController.php:297:    public function documentVerification()
  app\Http\Controllers\SettingsController.php:298:    {
> app\Http\Controllers\SettingsController.php:299:        return view('settings.app.documentVerificationSetting');
  app\Http\Controllers\SettingsController.php:300:    }
> app\Http\Controllers\SettingsController.php:301:    public function scheduleOrderNotification()
  app\Http\Controllers\SettingsController.php:302:    {
> app\Http\Controllers\SettingsController.php:303:        return view('settings.app.schedule_notification');
  app\Http\Controllers\SettingsController.php:304:    }
> app\Http\Controllers\SettingsController.php:305:    public function maintenanceSettings()
  app\Http\Controllers\SettingsController.php:306:    {
> app\Http\Controllers\SettingsController.php:307:        return view('settings.app.maintenance_settings');
  app\Http\Controllers\SettingsController.php:308:    }
  app\Http\Controllers\SettingsController.php:309:}



```

## Controller: .\app\Http\Controllers\CmsController.php
```text

  app\Http\Controllers\CmsController.php:5:
> app\Http\Controllers\CmsController.php:6:class CmsController extends Controller
  app\Http\Controllers\CmsController.php:7:{
  app\Http\Controllers\CmsController.php:8:
> app\Http\Controllers\CmsController.php:9:    public function __construct()
  app\Http\Controllers\CmsController.php:10:    {
  app\Http\Controllers\CmsController.php:11:        $this->middleware('auth');
  app\Http\Controllers\CmsController.php:12:    }
  app\Http\Controllers\CmsController.php:13:
> app\Http\Controllers\CmsController.php:14:    public function index()
  app\Http\Controllers\CmsController.php:15:    {
> app\Http\Controllers\CmsController.php:16:        return view('cms.index');
  app\Http\Controllers\CmsController.php:17:    }
> app\Http\Controllers\CmsController.php:18:    public function Edit($id)
  app\Http\Controllers\CmsController.php:19:    {
> app\Http\Controllers\CmsController.php:20:        return view('cms.edit')->with('id',$id);
  app\Http\Controllers\CmsController.php:21:    }
  app\Http\Controllers\CmsController.php:22:
> app\Http\Controllers\CmsController.php:23:    public function Create()
  app\Http\Controllers\CmsController.php:24:    {
> app\Http\Controllers\CmsController.php:25:        return view('cms.create');
  app\Http\Controllers\CmsController.php:26:    }
  app\Http\Controllers\CmsController.php:27:
  app\Http\Controllers\CmsController.php:28:}



```

## Controller: .\app\Http\Controllers\WebsitePanelController.php
```text

  app\Http\Controllers\WebsitePanelController.php:9:    // AI4_WEB_APP_PATCH
> app\Http\Controllers\WebsitePanelController.php:10:    public function index()
  app\Http\Controllers\WebsitePanelController.php:11:    {
> app\Http\Controllers\WebsitePanelController.php:12:        return view('website_panel.index');
  app\Http\Controllers\WebsitePanelController.php:13:    }
  app\Http\Controllers\WebsitePanelController.php:14:
  app\Http\Controllers\WebsitePanelController.php:15:    // AI4_WEB_APP_PATCH
> app\Http\Controllers\WebsitePanelController.php:16:    public function homepage()
  app\Http\Controllers\WebsitePanelController.php:17:    {
> app\Http\Controllers\WebsitePanelController.php:18:        return view('website_panel.homepage');
  app\Http\Controllers\WebsitePanelController.php:19:    }
  app\Http\Controllers\WebsitePanelController.php:20:
  app\Http\Controllers\WebsitePanelController.php:21:    // AI4_WEB_APP_PATCH
> app\Http\Controllers\WebsitePanelController.php:22:    public function footer()
  app\Http\Controllers\WebsitePanelController.php:23:    {
> app\Http\Controllers\WebsitePanelController.php:24:        return view('website_panel.footer');
  app\Http\Controllers\WebsitePanelController.php:25:    }
  app\Http\Controllers\WebsitePanelController.php:26:
  app\Http\Controllers\WebsitePanelController.php:27:    // AI4_WEB_APP_PATCH
> app\Http\Controllers\WebsitePanelController.php:28:    public function cms()
  app\Http\Controllers\WebsitePanelController.php:29:    {
> app\Http\Controllers\WebsitePanelController.php:30:        return view('website_panel.cms');
  app\Http\Controllers\WebsitePanelController.php:31:    }
  app\Http\Controllers\WebsitePanelController.php:32:
  app\Http\Controllers\WebsitePanelController.php:33:    // AI4_WEB_APP_PATCH
> app\Http\Controllers\WebsitePanelController.php:34:    public function preview()
  app\Http\Controllers\WebsitePanelController.php:35:    {
> app\Http\Controllers\WebsitePanelController.php:36:        return view('website_panel.preview');
  app\Http\Controllers\WebsitePanelController.php:37:    }
  app\Http\Controllers\WebsitePanelController.php:38:}



```

## View Folder: .\resources\views\homepage_Template
```text

FullName                                                               Length LastWriteTime        
--------                                                               ------ -------------        
C:\deploy\adminpanel\resources\views\homepage_Template\index.blade.php   3078 4/16/2026 12:06:24 PM



```

## View Folder: .\resources\views\footerTemplate
```text

FullName                                                            Length LastWriteTime        
--------                                                            ------ -------------        
C:\deploy\adminpanel\resources\views\footerTemplate\index.blade.php   3820 4/16/2026 12:04:08 PM



```

## View Folder: .\resources\views\cms
```text

FullName                                                  Length LastWriteTime        
--------                                                  ------ -------------        
C:\deploy\adminpanel\resources\views\cms\create.blade.php   7085 4/16/2026 11:06:46 AM
C:\deploy\adminpanel\resources\views\cms\edit.blade.php     8100 4/16/2026 11:06:58 AM
C:\deploy\adminpanel\resources\views\cms\index.blade.php    8039 4/16/2026 11:07:08 AM



```

## View Folder: .\resources\views\dashboard
```text

FullName                                                           Length LastWriteTime        
--------                                                           ------ -------------        
C:\deploy\adminpanel\resources\views\dashboard\cab.blade.php        64245 4/2/2026 3:18:16 PM  
C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php   90816 6/24/2026 6:45:29 AM 
C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php  68910 4/20/2026 4:17:50 PM 
C:\deploy\adminpanel\resources\views\dashboard\ondemand.blade.php   71961 4/16/2026 11:42:32 AM
C:\deploy\adminpanel\resources\views\dashboard\parcel.blade.php     67969 4/15/2026 12:54:04 PM
C:\deploy\adminpanel\resources\views\dashboard\rental.blade.php     75641 4/22/2026 10:36:38 AM



```

## View Folder: .\resources\views\layouts
```text

FullName                                                             Length LastWriteTime        
--------                                                             ------ -------------        
C:\deploy\adminpanel\resources\views\layouts\ai_sidebar.blade.php     11207 3/13/2026 7:15:08 PM 
C:\deploy\adminpanel\resources\views\layouts\app.blade.php            68237 6/27/2026 6:40:36 PM 
C:\deploy\adminpanel\resources\views\layouts\footer.blade.php           102 11/28/2025 5:43:44 PM
C:\deploy\adminpanel\resources\views\layouts\header.blade.php         21022 6/24/2026 1:28:45 AM 
C:\deploy\adminpanel\resources\views\layouts\header.blade.php.bak     16050 4/22/2026 4:10:02 PM 
C:\deploy\adminpanel\resources\views\layouts\menu.blade.php           40000 6/23/2026 2:15:52 AM 
C:\deploy\adminpanel\resources\views\layouts\website_panel.blade.php    753 7/6/2026 2:05:04 AM  



```

## View Folder: .\resources\views\website_panel
```text

FullName                                                                      Length LastWriteTime      
--------                                                                      ------ -------------      
C:\deploy\adminpanel\resources\views\website_panel\cms.blade.php                 481 7/6/2026 2:05:04 AM
C:\deploy\adminpanel\resources\views\website_panel\footer.blade.php              449 7/6/2026 2:05:04 AM
C:\deploy\adminpanel\resources\views\website_panel\homepage.blade.php            462 7/6/2026 2:05:04 AM
C:\deploy\adminpanel\resources\views\website_panel\index.blade.php              1053 7/6/2026 2:05:04 AM
C:\deploy\adminpanel\resources\views\website_panel\preview.blade.php             479 7/6/2026 2:05:04 AM
C:\deploy\adminpanel\resources\views\website_panel\partials\sidebar.blade.php    489 7/6/2026 2:05:04 AM
C:\deploy\adminpanel\resources\views\website_panel\partials\topbar.blade.php     253 7/6/2026 2:05:04 AM



```

## Public Assets Terkait Website
```text

Name              FullName                                      LastWriteTime       
----              --------                                      -------------       
ai4-website-panel C:\deploy\adminpanel\public\ai4-website-panel 7/6/2026 2:02:00 AM 
assets            C:\deploy\adminpanel\public\assets            6/14/2026 5:46:32 PM
css               C:\deploy\adminpanel\public\css               6/24/2026 1:28:45 AM
flags             C:\deploy\adminpanel\public\flags             6/14/2026 5:46:36 PM
images            C:\deploy\adminpanel\public\images            6/23/2026 2:19:40 AM
js                C:\deploy\adminpanel\public\js                6/14/2026 5:46:37 PM
scss              C:\deploy\adminpanel\public\scss              6/14/2026 5:46:37 PM
storage           C:\deploy\adminpanel\public\storage           6/19/2026 4:08:33 PM



```

## Validasi Route Website Panel AI-4
```text
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="refresh" content="0;url='http://localhost'" />

        <title>Redirecting to http://localhost</title>
    </head>
    <body>
        Redirecting to <a href="http://localhost">http://localhost</a>.
    </body>
</html><!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="refresh" content="0;url='http://localhost'" />

        <title>Redirecting to http://localhost</title>
    </head>
    <body>
        Redirecting to <a href="http://localhost">http://localhost</a>.
    </body>
</html>
  GET|HEAD       website-panel ................................................. website-panel.index ΓÇ║ WebsitePanelController@index
  GET|HEAD       website-panel/cms ................................................. website-panel.cms ΓÇ║ WebsitePanelController@cms
  GET|HEAD       website-panel/footer ........................................ website-panel.footer ΓÇ║ WebsitePanelController@footer
  GET|HEAD       website-panel/homepage .................................. website-panel.homepage ΓÇ║ WebsitePanelController@homepage
  GET|HEAD       website-panel/preview ..................................... website-panel.preview ΓÇ║ WebsitePanelController@preview

                                                                                                                 Showing [5] routes


```

## Kesimpulan Sementara
Audit ini hanya membaca struktur lama.
Belum ada patch.
Belum ada fitur simpan.
Belum ada perubahan data.
Belum ada perubahan admin/vendor/Firebase/Flutter.

## Status
READ_ONLY_AUDIT_DONE
