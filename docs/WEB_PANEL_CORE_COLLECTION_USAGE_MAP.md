# WEB PANEL CORE COLLECTION USAGE MAP

Generated: 06/28/2026 04:49:02

## ADMIN_PANEL

- Path: C:\deploy\adminpanel

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\chat.blade.php
LINE: 72
TEXT: await database.collection('vendors').doc(vendorId).get().then(async function(vendorSnapshot) {
NEXT: if (vendorSnapshot.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\chat.blade.php
LINE: 85
TEXT: await database.collection('users').doc(receiverId).get().then(async function(userSnapshot) {
NEXT: if (userSnapshot.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\chat.blade.php
LINE: 180
TEXT: const vendorDoc = await database.collection('vendors').doc(advData.vendorId).get();
NEXT: vendorData = vendorDoc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\chat.blade.php
LINE: 280
TEXT: const vendorDoc = await database.collection("vendors").doc(advData.vendorId).get();
NEXT: const vendorData = vendorDoc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\create.blade.php
LINE: 255
TEXT: var refVendor = database.collection('vendors');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\edit.blade.php
LINE: 214
TEXT: var refVendor = database.collection('vendors');
NEXT: var storage = firebase.storage();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\edit.blade.php
LINE: 399
TEXT: database.collection('vendors').where('id', "==", vendorId).get().then(async function(vendorSnapshots) {
NEXT: if (vendorSnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\index.blade.php
LINE: 226
TEXT: database.collection('vendors').where("id", "==", '<?php echo $id; ?>').get().then(async function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\index.blade.php
LINE: 274
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\index.blade.php
LINE: 536
TEXT: const vendorRef = database.collection('vendors').where('id', '==', vendorid);
NEXT: const vendorSnapshot = await vendorRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\index.blade.php
LINE: 539
TEXT: const vendor_userRef = database.collection('users').where('vendorID', '==', vendorid).where('role', '==', 'vendor');
NEXT: const vendor_userSnapshot = await vendor_userRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\index.blade.php
LINE: 721
TEXT: await database.collection('users').where('vendorID', '==', data.vendorId).where('role', '==', 'vendor').get().then(async function(snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\index.blade.php
LINE: 751
TEXT: let vendorSnapshot = await database.collection('vendors')
NEXT: .where('id', '==', vendorId)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\requested_advertisement.blade.php
LINE: 142
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\requested_advertisement.blade.php
LINE: 341
TEXT: const vendorRef = database.collection('vendors').where('id', '==', vendorid);
NEXT: const vendorSnapshot = await vendorRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\requested_advertisement.blade.php
LINE: 343
TEXT: const vendor_userRef = database.collection('users').where('vendorID', '==', vendorid).where('role', '==', 'vendor');
NEXT: const vendor_userSnapshot = await vendor_userRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\view.blade.php
LINE: 273
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var vendorFcm = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\view.blade.php
LINE: 410
TEXT: database.collection('vendors').where('id', '==', vendorId).get().then(async function(snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\advertisements\view.blade.php
LINE: 414
TEXT: await database.collection('users').doc(vendorUserId).get().then(async function(snapshots) {
NEXT: if (snapshots.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\auth\login.blade.php
LINE: 229
TEXT: database.collection('settings').doc("globalSettings").get().then(async function(snapshots) {
NEXT: var globalSettings = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\banners\create.blade.php
LINE: 566
TEXT: var ref_vendors = database.collection('vendors').where('section_id', '==', sectionId);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\banners\edit.blade.php
LINE: 222
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\banners\edit.blade.php
LINE: 647
TEXT: var ref_vendors = database.collection('vendors').where('section_id', '==', sectionId);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\banners\index.blade.php
LINE: 102
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\bookTable\edit.blade.php
LINE: 222
TEXT: database.collection('users').where('id', '==', auth).get().then(function (snapshots) {
NEXT: if (snapshots.length && type == '') {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\bookTable\index.blade.php
LINE: 195
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\bookTable\index.blade.php
LINE: 243
TEXT: database.collection('vendors').where('id', '==', vendorId).get().then(function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\bookTable\index.blade.php
LINE: 424
TEXT: database.collection('users').where('id', '==', auth).get().then(function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\bookTable\index.blade.php
LINE: 467
TEXT: database.collection('users').where('id', '==', auth).get().then(function(snapshots) {
NEXT: if (snapshots.docs.length) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\brands\edit.blade.php
LINE: 63
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\brands\index.blade.php
LINE: 111
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\bulk_import_products\edit.blade.php
LINE: 451
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\bulk_import_products\edit.blade.php
LINE: 467
TEXT: var refAdminCommission = database.collection('settings').doc("AdminCommission");
NEXT: refAdminCommission.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\bulk_import_products\edit.blade.php
LINE: 570
TEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");
NEXT: digitalProductRef.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\bulk_import_products\index.blade.php
LINE: 149
TEXT: var placeholder=database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\categories\create.blade.php
LINE: 115
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\categories\edit.blade.php
LINE: 117
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storage = firebase.storage();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\categories\index.blade.php
LINE: 120
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\complaints\edit.blade.php
LINE: 182
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\complaints\edit.blade.php
LINE: 197
TEXT: var alovelaceDocumentRef = database.collection('vendor_orders').doc();
NEXT: if (alovelaceDocumentRef.id) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\complaints\edit.blade.php
LINE: 247
TEXT: var user = await database.collection('users').where("id", "==", customerId).get().then(async function (usersnapshots) {
NEXT: if(!usersnapshots.empty){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\complaints\edit.blade.php
LINE: 277
TEXT: var driver = database.collection('users').where("id", "==", ride.driverId);
NEXT: driver.get().then(async function (snapshotsnew) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\complaints\edit.blade.php
LINE: 315
TEXT: var driver = database.collection('users').where("id", '==', ride.riderId);
NEXT: driver.get().then(async function (snapshotsnew) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\coupons\create.blade.php
LINE: 162
TEXT: database.collection('vendors').where('section_id', '==', section_id).get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\coupons\edit.blade.php
LINE: 157
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storage = firebase.storage();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\coupons\edit.blade.php
LINE: 180
TEXT: await database.collection('vendors').where('section_id', '==', section_id).get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\coupons\index.blade.php
LINE: 211
TEXT: const storeDocs = await database.collection('vendors').get();
NEXT: storeDocs.forEach(doc => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\coupons\index.blade.php
LINE: 345
TEXT: const vendorSnap = await database.collection('vendors').where('id', '==', vendorId).get();
NEXT: if (!vendorSnap.empty) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\cab.blade.php
LINE: 315
TEXT: var currency = db.collection('settings');
NEXT: var intercity_enabled = false;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\cab.blade.php
LINE: 331
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\cab.blade.php
LINE: 433
TEXT: ref = db.collection('users').where('role', '==', 'customer');
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\cab.blade.php
LINE: 463
TEXT: ref = db.collection('users').where('role', '==', 'driver').where('isOwner','==',false);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\cab.blade.php
LINE: 1188
TEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\cab.blade.php
LINE: 1189
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\cab.blade.php
LINE: 1193
TEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\cab.blade.php
LINE: 1194
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\cab.blade.php
LINE: 1198
TEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\cab.blade.php
LINE: 1199
TEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: ])

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 326
TEXT: var currency = db.collection('settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 342
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 458
TEXT: let ordersQuery = db.collection('vendor_orders').where('status', 'in', ["Order Completed"]).where('section_id','==',active_id);
NEXT: if (filterType) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 464
TEXT: ? db.collection('vendor_orders')
NEXT: .where('status', 'in', ["Order Completed"])

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 757
TEXT: let query = db.collection('vendor_orders').where('status', 'in', statusArray).where('section_id','==',active_id);
NEXT: if (startTS && endTS) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1296
TEXT: let refVendor = db.collection('vendors').where('section_id', '==', active_id).orderBy('reviewsCount', 'desc').limit(5);
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1309
TEXT: ref = db.collection('vendor_orders').where('section_id','==',active_id)
NEXT: .where('status', 'in', ["Order Placed", "Order Accepted", "Driver Pending", "Driver Accepted", "Order Shipped", "In Transit"]);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1324
TEXT: ref = db.collection('users').where('role', '==', 'driver').where('serviceType', '==', active_type);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1375
TEXT: db.collection('vendor_orders').where('section_id','==',active_id).orderBy('createdAt', 'desc').get(),
NEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1376
TEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('isOwner','==',false).where('serviceType', '==', active_type).orderBy('createdAt', 'desc').get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1377
TEXT: db.collection('users').where("role", "==", "driver").where('isOwner','==',false).where('serviceType', '==', active_type).orderBy('createdAt', 'desc').get(),
NEXT: db.collection('vendors').where('section_id', '==', active_id).get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1378
TEXT: db.collection('vendors').where('section_id', '==', active_id).get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1381
TEXT: db.collection('vendor_orders').where('section_id','==',active_id).orderBy('createdAt', 'desc').where('createdAt', '<=', endThisTS).get(),
NEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1382
TEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('isOwner','==',false).where('serviceType', '==', active_type).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy('createdAt', 'desc').get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1383
TEXT: db.collection('users').where("role", "==", "driver").where('isOwner','==',false).where('serviceType', '==', active_type).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy('createdAt', 'desc').get(),
NEXT: db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1384
TEXT: db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1387
TEXT: startLastTS ? db.collection('vendor_orders').where('section_id','==',active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1388
TEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('isOwner','==',false).where('serviceType', '==', active_type).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy('createdAt', 'desc').get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1389
TEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('isOwner','==',false).where('serviceType', '==', active_type).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy('createdAt', 'desc').get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] })

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\delivery.blade.php
LINE: 1390
TEXT: startLastTS ? db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] })
NEXT: ])

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 297
TEXT: var currency = db.collection('settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 313
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 431
TEXT: let ordersQuery = db.collection('vendor_orders')
NEXT: .where('status', 'in', ["Order Completed"])

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 441
TEXT: ? db.collection('vendor_orders')
NEXT: .where('status', 'in', ["Order Completed"])

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 836
TEXT: let query = db.collection('vendor_orders')
NEXT: .where('status', 'in', statusArray)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 878
TEXT: ref = db.collection('vendors').where('section_id', '==', active_id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 894
TEXT: ref = db.collection('vendor_orders')
NEXT: .where('vendor.section_id', '==', active_id)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 1356
TEXT: db.collection('vendor_orders').where('section_id', '==', active_id).orderBy('createdAt').get(),
NEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 1357
TEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),
NEXT: db.collection('vendors').where('section_id', '==', active_id).get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 1358
TEXT: db.collection('vendors').where('section_id', '==', active_id).get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 1361
TEXT: db.collection('vendor_orders').where('section_id', '==', active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy('createdAt').get(),
NEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 1362
TEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),
NEXT: db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 1363
TEXT: db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 1366
TEXT: startLastTS ? db.collection('vendor_orders').where('section_id', '==', active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy('createdAt').get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 1367
TEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] })

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ecommerce.blade.php
LINE: 1368
TEXT: startLastTS ? db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] })
NEXT: ])

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ondemand.blade.php
LINE: 345
TEXT: var currency = db.collection('settings');
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ondemand.blade.php
LINE: 361
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ondemand.blade.php
LINE: 480
TEXT: ref = db.collection('users').where('role', '==', 'provider').where('section_id', '==', active_id);
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ondemand.blade.php
LINE: 691
TEXT: db.collection('users').where("role", "==", "provider").where('section_id', 'in', [active_id, '']).orderBy('createdAt', 'desc').get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ondemand.blade.php
LINE: 697
TEXT: db.collection('users').where("role", "==", "provider").where('section_id', 'in', [active_id, '']).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy('createdAt', 'desc').get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\ondemand.blade.php
LINE: 703
TEXT: startLastTS ? db.collection('users').where("role", "==", "provider").where('section_id', 'in', [active_id, '']).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy('createdAt', 'desc').get() : Promise.resolve({ docs: [] }),
NEXT: ])

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\parcel.blade.php
LINE: 311
TEXT: var currency = db.collection('settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\parcel.blade.php
LINE: 327
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\parcel.blade.php
LINE: 425
TEXT: ref = db.collection('users').where('role', '==', 'customer');
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\parcel.blade.php
LINE: 449
TEXT: ref = db.collection('users').where('role', '==', 'driver').where('sectionId', '==', active_id).where('isOwner','==',false);
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\parcel.blade.php
LINE: 1008
TEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt",'desc').get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\parcel.blade.php
LINE: 1009
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt",'desc').get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\parcel.blade.php
LINE: 1013
TEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt",'desc').get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\parcel.blade.php
LINE: 1014
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt",'desc').get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\parcel.blade.php
LINE: 1018
TEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt",'desc').get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\parcel.blade.php
LINE: 1019
TEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt",'desc').get() : Promise.resolve({ docs: [] }),
NEXT: ])

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\rental.blade.php
LINE: 311
TEXT: var currency = db.collection('settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\rental.blade.php
LINE: 327
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\rental.blade.php
LINE: 424
TEXT: ref = db.collection('users').where('role', '==', 'customer');
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\rental.blade.php
LINE: 446
TEXT: ref = db.collection('users').where('role', '==', 'driver').where('isOwner','==',false);
NEXT: if (typeof active_id !== 'undefined' && active_id) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\rental.blade.php
LINE: 864
TEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\rental.blade.php
LINE: 865
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\rental.blade.php
LINE: 869
TEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\rental.blade.php
LINE: 870
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\rental.blade.php
LINE: 874
TEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\dashboard\rental.blade.php
LINE: 875
TEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: ])

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\create.blade.php
LINE: 151
TEXT: var refVendor = database.collection('vendors');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\create.blade.php
LINE: 160
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\create.blade.php
LINE: 183
TEXT: let vendorRef = await database.collection('vendors').doc(vendorId).get();
NEXT: vendorData = vendorRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\create.blade.php
LINE: 195
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function(snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\create.blade.php
LINE: 265
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\edit.blade.php
LINE: 157
TEXT: var refVendor = database.collection('vendors');
NEXT: var section_id = getCookie('section_id') || '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\edit.blade.php
LINE: 162
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\edit.blade.php
LINE: 163
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var sectionIds = [];

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\edit.blade.php
LINE: 296
TEXT: database.collection('users').doc(id).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\index.blade.php
LINE: 175
TEXT: database.collection('vendors').where("id", "==", '{{ $id }}').get().then(async function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\index.blade.php
LINE: 193
TEXT: ref = database.collection('users').where("role", "==", "driver").where("vendorID", "==", id);
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\index.blade.php
LINE: 195
TEXT: ref = database.collection('users').where("role", "==", "driver");
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\index.blade.php
LINE: 217
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\index.blade.php
LINE: 288
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\index.blade.php
LINE: 461
TEXT: const totalOrderSnapShot = await database.collection('vendor_orders').where('driverID', '==', childData.id).get();
NEXT: const orders = totalOrderSnapShot.size;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\index.blade.php
LINE: 607
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\index.blade.php
LINE: 613
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\index.blade.php
LINE: 672
TEXT: const vendorRef = database.collection('vendors').where('id', '==', vendorid);
NEXT: const vendorSnapshot = await vendorRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\deliveryman\index.blade.php
LINE: 675
TEXT: const vendor_userRef = database.collection('users').where('vendorID', '==', vendorid).where('role', '==', 'vendor');
NEXT: const vendor_userSnapshot = await vendor_userRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\destinations\create.blade.php
LINE: 142
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\destinations\edit.blade.php
LINE: 148
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\destinations\index.blade.php
LINE: 101
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\create.blade.php
LINE: 80
TEXT: var alldriver = database.collection('users').where('role', '==', 'driver');
NEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\create.blade.php
LINE: 81
TEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');
NEXT: $(document).ready(function () {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\create.blade.php
LINE: 160
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true, isActive: true });
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\create.blade.php
LINE: 162
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\create.blade.php
LINE: 168
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\create.blade.php
LINE: 170
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\create.blade.php
LINE: 177
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false , isActive: false});
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\create.blade.php
LINE: 179
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\edit.blade.php
LINE: 82
TEXT: var alldriver = database.collection('users').where('role', '==', 'driver');
NEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\edit.blade.php
LINE: 83
TEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');
NEXT: var enableFront = false;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\edit.blade.php
LINE: 219
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true, isActive: true });
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\edit.blade.php
LINE: 221
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\edit.blade.php
LINE: 227
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\edit.blade.php
LINE: 229
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\edit.blade.php
LINE: 236
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\edit.blade.php
LINE: 238
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 88
TEXT: var alldriver = database.collection('users').where('role', '==', 'driver');
NEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 89
TEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');
NEXT: var user_permissions = '<?php echo @session("user_permissions") ?>';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 311
TEXT: let driverSnapshots = await database.collection('users').where('role', '==', 'driver').where('isDocumentVerify', '==', false).get();
NEXT: if (driverSnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 322
TEXT: let vendorSnapshots = await database.collection('users').where('role', '==', 'vendor').where('isDocumentVerify', '==', false).get();
NEXT: if (vendorSnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 359
TEXT: await database.collection('users').where('role', '==', 'driver').where('isDocumentVerify', '==', false).get().then(async function (snapshotsdriver) {
NEXT: if (snapshotsdriver.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 372
TEXT: await database.collection('users').where('role', '==', 'vendor').where('isDocumentVerify', '==', false).get().then(async function (snapshotsvendor) {
NEXT: if (snapshotsvendor.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 404
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true, isActive: true });
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 406
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 412
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 414
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 421
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\documents\index.blade.php
LINE: 423
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\chat.blade.php
LINE: 73
TEXT: database.collection('users').doc(id).get().then(async function(userSnapshot) {
NEXT: if (userSnapshot.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\chat.blade.php
LINE: 308
TEXT: const userDoc = await database.collection("users").doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\create.blade.php
LINE: 206
TEXT: var refZone = database.collection('zone').where('publish', '==', true);
NEXT: var refCarMake = database.collection('car_make');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\create.blade.php
LINE: 230
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\create.blade.php
LINE: 250
TEXT: let documentVerify = await database.collection('settings').doc('document_verification_settings').get();
NEXT: let documentSettings = documentVerify.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\create.blade.php
LINE: 601
TEXT: geoFirestore.collection('users').doc(id).set({
NEXT: 'appIdentifier': 'web',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\document_list.blade.php
LINE: 71
TEXT: var allDriver = database.collection('users').where('role','==','driver');
NEXT: var ref = database.collection('users').where("id", "==", id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\document_list.blade.php
LINE: 72
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var docsRef = database.collection('documents').where('enable', '==', true).where('type','==','driver');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\document_list.blade.php
LINE: 296
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': true, isActive: true });
NEXT: }else{

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\document_list.blade.php
LINE: 300
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\document_list.blade.php
LINE: 305
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\document_upload.blade.php
LINE: 37
TEXT: var allVendor = database.collection('users').where('role', '==', 'driver');
NEXT: var driverRef= database.collection('users').where('id','==',id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\document_upload.blade.php
LINE: 38
TEXT: var driverRef= database.collection('users').where('id','==',id);
NEXT: var database = firebase.firestore();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\document_upload.blade.php
LINE: 51
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\document_upload.blade.php
LINE: 337
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': true, isActive:true });
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\document_upload.blade.php
LINE: 341
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\document_upload.blade.php
LINE: 346
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\edit.blade.php
LINE: 230
TEXT: var refZone = database.collection('zone').where('publish', '==', true);
NEXT: var refCarMake = database.collection('car_make');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\edit.blade.php
LINE: 238
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\edit.blade.php
LINE: 244
TEXT: var currency = database.collection('settings');
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\edit.blade.php
LINE: 299
TEXT: let userRef = await database.collection('users').doc(id).get();
NEXT: let user = userRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\edit.blade.php
LINE: 787
TEXT: database.collection('users').doc(id).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\edit.blade.php
LINE: 854
TEXT: await database.collection('vendor_orders').where('driverID', '==', id).get().then(async function (orderSnapshots) {
NEXT: count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 163
TEXT: ref = database.collection('users')
NEXT: .where("role", "==", "driver")

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 186
TEXT: var ref = database.collection('users')
NEXT: .where("role", "==", "driver")

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 193
TEXT: var alldriver = database.collection('users')
NEXT: .where("role", "==", "driver")

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 199
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 279
TEXT: const fallbackQuery = database.collection('users')
NEXT: .where("role", "==", "driver");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 520
TEXT: database.collection('vendor_orders').where('driverID', '==', listval.id).where("status", "in", ["Order Completed"]).get().then(async function(orderSnapshots) {
NEXT: var count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 522
TEXT: database.collection('users').doc(listval.id).update({
NEXT: 'orderCompleted': count_order_complete

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 679
TEXT: const ordersSnapshot = await database.collection('vendor_orders').where('driverID', '==', driverId).get();
NEXT: totalOrders += ordersSnapshot.docs.length;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 693
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 697
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 706
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 710
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 727
TEXT: const car_info = database.collection('users').doc(dataId).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php
LINE: 807
TEXT: const car_info = database.collection('users').doc(id).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\view.blade.php
LINE: 256
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\view.blade.php
LINE: 263
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\view.blade.php
LINE: 269
TEXT: var currency = database.collection('settings');
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\view.blade.php
LINE: 366
TEXT: const ordersSnapshot = await database.collection('vendor_orders').where('driverID', '==', dirver.id).get();
NEXT: totalOrders += ordersSnapshot.docs.length;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\view.blade.php
LINE: 378
TEXT: database.collection('zone').doc(dirver.zoneId).get().then((zoneSnap) => {
NEXT: if (zoneSnap.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\view.blade.php
LINE: 490
TEXT: database.collection('users').where('id', '==', id).get().then(async function (snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\view.blade.php
LINE: 499
TEXT: database.collection('users').doc(id).update({
NEXT: 'wallet_amount': newWalletAmount

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers\view.blade.php
LINE: 503
TEXT: database.collection('wallet').doc(tempId).set({
NEXT: 'amount': parseFloat(amount),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers_payouts\create.blade.php
LINE: 94
TEXT: var emailSetting = database.collection('settings').doc('emailSetting');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers_payouts\create.blade.php
LINE: 131
TEXT: database.collection('users').where('role', '==', 'driver').get().then(async function(snapshots) {
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers_payouts\create.blade.php
LINE: 175
TEXT: database.collection('users').doc(driverID).update({
NEXT: 'wallet_amount': price

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers_payouts\create.blade.php
LINE: 246
TEXT: await database.collection('users').where('id', "==", driverId).get().then(async function(vendorSnapshots) {
NEXT: var driverData = vendorSnapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers_payouts\create.blade.php
LINE: 257
TEXT: const doc = await database.collection('users').doc(driverID).get();
NEXT: const data = doc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\drivers_payouts\index.blade.php
LINE: 414
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php
LINE: 163
TEXT: database.collection('vendors').where("id", "==", '{{ $id }}').get().then(async function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php
LINE: 170
TEXT: ref = database.collection('users').where("role", "==", "employee").where("vendorID", "==", id);
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php
LINE: 172
TEXT: ref = database.collection('users').where("role", "==", "employee");
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php
LINE: 193
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php
LINE: 258
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php
LINE: 577
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php
LINE: 583
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php
LINE: 641
TEXT: database.collection('settings').doc("Version").get().then(function(snapshot) {
NEXT: var settingData = snapshot.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php
LINE: 666
TEXT: const vendorRef = database.collection('vendors').where('id', '==', vendorid);
NEXT: const vendorSnapshot = await vendorRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php
LINE: 669
TEXT: const vendor_userRef = database.collection('users').where('vendorID', '==', vendorid).where('role', '==', 'vendor');
NEXT: const vendor_userSnapshot = await vendor_userRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\create.blade.php
LINE: 165
TEXT: var refZone = database.collection('zone').where('publish', '==', true);
NEXT: var refCarMake = database.collection('car_make');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\create.blade.php
LINE: 168
TEXT: var refOwner = database.collection('users').where('isOwner', '==', true).where('role', '==', 'driver');
NEXT: var refCabVehicle = database.collection('vehicle_type');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\create.blade.php
LINE: 204
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\create.blade.php
LINE: 253
TEXT: let userRef = await database.collection('users').doc(ownerId).get();
NEXT: let ownerData = userRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\create.blade.php
LINE: 591
TEXT: geoFirestore.collection('users').doc(id).set({
NEXT: 'appIdentifier': 'web',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\edit.blade.php
LINE: 150
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\edit.blade.php
LINE: 158
TEXT: var refZone = database.collection('zone').where('publish', '==', true);
NEXT: var refCarMake = database.collection('car_make');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\edit.blade.php
LINE: 166
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\edit.blade.php
LINE: 172
TEXT: var currency = database.collection('settings');
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\edit.blade.php
LINE: 218
TEXT: let userRef = await database.collection('users').doc(id).get();
NEXT: let user = userRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\edit.blade.php
LINE: 267
TEXT: let ownerRef = await database.collection('users').doc(ownerId).get();
NEXT: let ownerData = ownerRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\edit.blade.php
LINE: 700
TEXT: database.collection('users').doc(id).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\edit.blade.php
LINE: 767
TEXT: await database.collection('vendor_orders').where('driverID', '==', id).get().then(async function (orderSnapshots) {
NEXT: count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 149
TEXT: ref = database.collection('users').where("role", "in", ["customer"]);
NEXT: if ($('#daterange span').html() != '{{ trans('lang.select_range') }}' && daterangepicker) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 168
TEXT: var ref = database.collection('users')
NEXT: .where('isOwner', '==', false)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 176
TEXT: var alldriver = database.collection('users').where("role", "==", "driver").orderBy('createdAt', 'desc');
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 178
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 428
TEXT: database.collection('vendor_orders').where('driverID', '==', listval.id).where("status", "in", ["Order Completed"]).get().then(async function(orderSnapshots) {
NEXT: var count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 430
TEXT: database.collection('users').doc(listval.id).update({
NEXT: 'orderCompleted': count_order_complete

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 552
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 556
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 565
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 569
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 586
TEXT: const car_info = database.collection('users').doc(dataId).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\index.blade.php
LINE: 667
TEXT: const car_info = database.collection('users').doc(id).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\view.blade.php
LINE: 230
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\view.blade.php
LINE: 236
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\view.blade.php
LINE: 242
TEXT: var currency = database.collection('settings');
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\view.blade.php
LINE: 341
TEXT: database.collection('zone').doc(dirver.zoneId).get().then((zoneSnap) => {
NEXT: if (zoneSnap.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\view.blade.php
LINE: 438
TEXT: database.collection('users').where('id', '==', id).get().then(async function (snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\view.blade.php
LINE: 447
TEXT: database.collection('users').doc(id).update({
NEXT: 'wallet_amount': newWalletAmount

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\fleet_drivers\view.blade.php
LINE: 451
TEXT: database.collection('wallet').doc(tempId).set({
NEXT: 'amount': parseFloat(amount),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\footerTemplate\index.blade.php
LINE: 117
TEXT: var ref = database.collection('settings').doc('footerTemplate');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\footerTemplate\index.blade.php
LINE: 133
TEXT: database.collection('settings').doc('footerTemplate').set({"footerTemplate": ""});

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\footerTemplate\index.blade.php
LINE: 212
TEXT: database.collection('settings').doc('footerTemplate').update({'footerTemplate': footerTemplate}).then(function (result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\gift_card\index.blade.php
LINE: 99
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\gift_card\save.blade.php
LINE: 126
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\homepage_Template\index.blade.php
LINE: 125
TEXT: var ref = database.collection('settings').doc('homepageTemplate');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\homepage_Template\index.blade.php
LINE: 210
TEXT: database.collection('settings').doc('homepageTemplate').update({'homepageTemplate':homepageTemplate}).then(function(result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\create.blade.php
LINE: 477
TEXT: var subscriptionBusinessModel = database.collection('settings').doc("vendor");
NEXT: subscriptionBusinessModel.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\create.blade.php
LINE: 592
TEXT: database.collection('vendors').where('section_id', '==', section_id).orderBy('title').where('title','!=', '').get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\create.blade.php
LINE: 653
TEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");
NEXT: digitalProductRef.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\create.blade.php
LINE: 783
TEXT: var vendorRef = await database.collection('vendors').doc(set_vendor_id).get();
NEXT: var vendorData = vendorRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\create.blade.php
LINE: 791
TEXT: await database.collection('users').where('id', '==', userId).get().then(async function(snapshots) {
NEXT: var data = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\create.blade.php
LINE: 1194
TEXT: database.collection('settings').doc('globalSettings').get().then(async function(snapshots) {
NEXT: let globalTax = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\create.blade.php
LINE: 1206
TEXT: database.collection('tax').where('enable','==',true).where('scope','==','product').where('country','==',countryName).where('sectionId','==',section_id).get().then(async function(snapshots) {
NEXT: if(snapshots.docs.length > 0){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\create.blade.php
LINE: 1249
TEXT: database.collection('settings').doc('globalSettings').get().then(async function(snapshots) {
NEXT: let globalTax = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\create.blade.php
LINE: 1261
TEXT: database.collection('tax').where('enable','==',true).where('scope','==','product').where('country','==',countryName).where('sectionId','==',section_id).get().then(async function(snapshots) {
NEXT: if(snapshots.docs.length > 0){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\create.blade.php
LINE: 1298
TEXT: database.collection('vendors').doc(selected_vendor).get().then(async function(snapshot) {
NEXT: if (snapshot.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\edit.blade.php
LINE: 450
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var allowed_file_size = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\edit.blade.php
LINE: 580
TEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");
NEXT: digitalProductRef.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\edit.blade.php
LINE: 596
TEXT: database.collection('vendors').where('section_id', '==', section_id).orderBy('title').where('title', '!=', '').get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\edit.blade.php
LINE: 1377
TEXT: database.collection('settings').doc('globalSettings').get().then(async function(snapshots) {
NEXT: let globalTax = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\edit.blade.php
LINE: 1389
TEXT: database.collection('tax').where('enable','==',true).where('scope','==','product').where('country','==',countryName).where('sectionId','==',section_id).get().then(async function(snapshots) {
NEXT: if(snapshots.docs.length > 0){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\edit.blade.php
LINE: 1428
TEXT: await database.collection('vendors').doc(selected_vendor).get().then(async function(snapshot) {
NEXT: if (snapshot.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\index.blade.php
LINE: 202
TEXT: let globalTaxSnapshot = await database.collection('settings').doc('globalSettings').get();
NEXT: let globalTax = globalTaxSnapshot.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\index.blade.php
LINE: 234
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\index.blade.php
LINE: 259
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\index.blade.php
LINE: 467
TEXT: const vendorDocs = await database.collection('vendors').get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\index.blade.php
LINE: 1052
TEXT: await database.collection('vendors').where("id", "==", vendor).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\view.blade.php
LINE: 168
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\items\view.blade.php
LINE: 214
TEXT: await database.collection('vendors').get().then( async function(snapshots){
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\layouts\app.blade.php
LINE: 269
TEXT: var ref = database.collection('settings').doc("globalSettings");
NEXT: ref.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\layouts\app.blade.php
LINE: 278
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\layouts\app.blade.php
LINE: 300
TEXT: var languages_list = database.collection('settings').doc('languages');
NEXT: languages_list.get().then(async function (snapshotslang) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\layouts\app.blade.php
LINE: 336
TEXT: var version = database.collection('settings').doc("Version");
NEXT: version.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\layouts\app.blade.php
LINE: 340
TEXT: database.collection('settings').doc('Version').set({});
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\layouts\app.blade.php
LINE: 371
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\layouts\app.blade.php
LINE: 427
TEXT: var googleMapKeySnapshotsHeader = await database.collection('settings').doc("googleMapKey").get();
NEXT: var placeholderImageHeaderData = googleMapKeySnapshotsHeader.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\layouts\app.blade.php
LINE: 467
TEXT: database.collection('settings').doc("notification_setting").get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\layouts\app.blade.php
LINE: 771
TEXT: var snapshots = await database.collection('zone').where("publish","==",true).get();
NEXT: if(snapshots.docs.length > 0){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\cab.blade.php
LINE: 234
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\cab.blade.php
LINE: 278
TEXT: database.collection('users').where('role', '==', 'driver').where('sectionId','==',section_id)/* .where('serviceType', '==', 'cab-service') */.where('location', '!=', null).get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\cab.blade.php
LINE: 778
TEXT: database.collection("users").doc(driver.id).get().then((doc) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\cab.blade.php
LINE: 810
TEXT: return database.collection("users").doc(userId).get().then((doc) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\cab.blade.php
LINE: 828
TEXT: return database.collection("users").doc(driverId).get().then((doc) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\multivendor.blade.php
LINE: 105
TEXT: await database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\multivendor.blade.php
LINE: 114
TEXT: await database.collection('vendor_orders').where('status', '==', 'In Transit').get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\multivendor.blade.php
LINE: 129
TEXT: database.collection('users').where('role', '==', 'driver').where('serviceType', '==', 'delivery-service').where('location', '!=', null).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\multivendor.blade.php
LINE: 400
TEXT: database.collection("users").doc(driver.id).get().then((doc) => {
NEXT: let data = doc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\multivendor.blade.php
LINE: 416
TEXT: return database.collection("users").doc(userId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\multivendor.blade.php
LINE: 425
TEXT: return database.collection("users").doc(driverId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\parcel.blade.php
LINE: 88
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\parcel.blade.php
LINE: 111
TEXT: database.collection('users').where('role', '==', 'driver').where('serviceType', '==', 'parcel_delivery').where('sectionId', '==', section_id).where('location', '!=', null).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\parcel.blade.php
LINE: 330
TEXT: database.collection("users").doc(driver.id).get().then((doc) => {
NEXT: var data = doc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\parcel.blade.php
LINE: 344
TEXT: return database.collection("users").doc(userId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\parcel.blade.php
LINE: 351
TEXT: return database.collection("users").doc(driverId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\rental.blade.php
LINE: 88
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\rental.blade.php
LINE: 109
TEXT: database.collection('users').where('role', '==', 'driver').where('serviceType', '==', 'rental-service').where('sectionId', '==', section_id).where('location', '!=', null).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\rental.blade.php
LINE: 332
TEXT: database.collection("users").doc(driver.id).get().then((doc) => {
NEXT: let data = doc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\rental.blade.php
LINE: 346
TEXT: return database.collection("users").doc(userId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\map\rental.blade.php
LINE: 353
TEXT: return database.collection("users").doc(driverId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\notification\index.blade.php
LINE: 110
TEXT: var refData = database.collection('notifications');
NEXT: var ref = refData.orderBy('createdAt', 'desc');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\notification\index.blade.php
LINE: 256
TEXT: database.collection('notifications').doc(dataId).delete().then(function () {
NEXT: setTimeout(function () {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\notification\index.blade.php
LINE: 310
TEXT: database.collection('notifications').doc(id).delete().then(function () {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\notification\send.blade.php
LINE: 85
TEXT: var ref = database.collection('notifications').where("id", "==", id);
NEXT: var users = database.collection('users').where("fcmToken", "!=", "");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\notification\send.blade.php
LINE: 86
TEXT: var users = database.collection('users').where("fcmToken", "!=", "");
NEXT: var pagesize = 20;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\notification\send.blade.php
LINE: 160
TEXT: database.collection('notifications').doc(id).set({
NEXT: id: id,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\on-board\index.blade.php
LINE: 80
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\on-board\save.blade.php
LINE: 197
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 632
TEXT: var subscriptionBusinessModel = database.collection('settings').doc("vendor");
NEXT: subscriptionBusinessModel.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 673
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1210
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(adminCommission_val),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1225
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(orderPayableAmount),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1240
TEXT: database.collection('users').where('id', '==', providerAuthor).get().then(async function (snapshotsnew) {
NEXT: var providerData = snapshotsnew.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1251
TEXT: database.collection('users').doc(providerAuthor).update({
NEXT: 'wallet_amount': parseFloat(newProviderWallet)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1266
TEXT: database.collection('users').where('id', '==', providerAuthor).get().then(async function (snapshotsnew) {
NEXT: var providerData = snapshotsnew.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1278
TEXT: database.collection('users').doc(providerAuthor).update({
NEXT: 'wallet_amount': parseFloat(newProviderWallet)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1309
TEXT: await database.collection('users').doc(providerAuthor).update({'subscriptionTotalOrders':subscriptionTotalOrders.toString()});
NEXT: let providerSnapshot = await database.collection('providers_services').where('author', '==', providerAuthor).get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1374
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(orderPayableAmount),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1388
TEXT: database.collection('users').where('id', '==', orderCustomerId).get().then(async function (snapshotsnew) {
NEXT: var customerData = snapshotsnew.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1397
TEXT: database.collection('users').doc(orderCustomerId).update({
NEXT: 'wallet_amount': parseFloat(newCustomerWallet)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1849
TEXT: await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1866
TEXT: await database.collection('users').where('id', '==', custId).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1899
TEXT: await database.collection('users').where('id', '==', author).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\index.blade.php
LINE: 992
TEXT: await database.collection('users').where('id', '==', providerId).get().then(async function(snapshots) {
NEXT: var providerData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\bookings\print.blade.php
LINE: 293
TEXT: var provider = database.collection('users').where("id", "==",order.provider.author);
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\categories\create.blade.php
LINE: 102
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\categories\edit.blade.php
LINE: 97
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\categories\index.blade.php
LINE: 99
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\coupons\create.blade.php
LINE: 165
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\coupons\create.blade.php
LINE: 181
TEXT: await database.collection('users').where('id', '==', provider_id).get().then(async function(snapshot) {
NEXT: var provider_data = snapshot.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\coupons\edit.blade.php
LINE: 156
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var sectionId = getCookie('section_id');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\coupons\edit.blade.php
LINE: 181
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',sectionId).get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\coupons\edit.blade.php
LINE: 322
TEXT: await database.collection('users').where('id', '==', provider_id).get().then(async function(snapshot) {
NEXT: var provider_data = snapshot.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\coupons\index.blade.php
LINE: 233
TEXT: const storeDocs = await database.collection('users').get();
NEXT: storeDocs.forEach(doc => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\coupons\index.blade.php
LINE: 508
TEXT: await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
NEXT: var providerData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\services\create.blade.php
LINE: 209
TEXT: var author = database.collection('users').orderBy('createdAt', 'desc');
NEXT: var categories = database.collection('provider_categories').where('publish', '==', true);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\services\create.blade.php
LINE: 216
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var provider_id = "{{ @$_GET['id'] }}";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\services\create.blade.php
LINE: 234
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\services\create.blade.php
LINE: 244
TEXT: var subscriptionBusinessModel = database.collection('settings').doc("vendor");
NEXT: subscriptionBusinessModel.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\services\create.blade.php
LINE: 252
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\services\create.blade.php
LINE: 531
TEXT: await database.collection('users').doc(providerId).update({
NEXT: 'adminCommission': commissionObj,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\services\create.blade.php
LINE: 588
TEXT: await database.collection('users').where('id', '==', provider_id).get().then(async function(snapshot) {
NEXT: var provider_data = snapshot.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\services\edit.blade.php
LINE: 199
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var allowed_file_size = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\services\edit.blade.php
LINE: 208
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\services\index.blade.php
LINE: 195
TEXT: var refProvider = database.collection('users');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\services\index.blade.php
LINE: 638
TEXT: await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
NEXT: var providerData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\workers\create.blade.php
LINE: 183
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\workers\create.blade.php
LINE: 201
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function (snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\workers\edit.blade.php
LINE: 180
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var allowed_file_size = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\workers\edit.blade.php
LINE: 189
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\workers\edit.blade.php
LINE: 240
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function (snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\workers\index.blade.php
LINE: 234
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\workers\index.blade.php
LINE: 247
TEXT: var userRef = database.collection('users');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\workers\index.blade.php
LINE: 584
TEXT: let providerDoc = await database.collection('users').doc(providerId).get();
NEXT: if (providerDoc.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\OnDemandService\workers\index.blade.php
LINE: 616
TEXT: await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
NEXT: var providerData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 583
TEXT: var subscriptionBusinessModel = database.collection('settings').doc("vendor");
NEXT: subscriptionBusinessModel.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 591
TEXT: var ref = database.collection('vendor_orders').where("id", "==", oid);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 594
TEXT: var ref = database.collection('vendor_orders').where("id", "==", id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 644
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 682
TEXT: var refDriverNearBy = database.collection('settings').doc("DriverNearBy");
NEXT: refDriverNearBy.get().then(async function(snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 691
TEXT: var scheduleOrderNotificationRef = database.collection('settings').doc("scheduleOrderNotification");
NEXT: scheduleOrderNotificationRef.get().then(async function(snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 698
TEXT: var refGlobal = database.collection('settings').doc("globalSettings");
NEXT: refGlobal.get().then(async function(

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 813
TEXT: database.collection('zone').where('publish', '==', true)/* .where('sectionId', '==', order.vendor.section_id) */.orderBy('name', 'asc').get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1094
TEXT: database.collection('vendor_orders').where('author.id', '==', userId).get().then(async function(snapshots) {
NEXT: if (snapshots.docs.length == 1) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1146
TEXT: var vendor = database.collection('vendors').where("id", "==", order.vendorID);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1250
TEXT: database.collection('users').where('role', '==', 'driver').where('vendorID', '==', vendorID).where('isActive', '==', true).get().then(async function(snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1318
TEXT: await database.collection('users').where('id', '==', deliveryman).get().then(async function(snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1335
TEXT: await database.collection('users').doc(deliveryman).update({
NEXT: 'orderRequestData': orderRequestData,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1353
TEXT: database.collection('vendor_orders').doc(id).update(updatedData).then(async function(result) {
NEXT: status = updatedData.status;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1367
TEXT: database.collection('vendor_orders').doc(id).update({
NEXT: 'status': status,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1374
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(orderBasePrice),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1389
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(orderTaxAmountVendor),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1403
TEXT: database.collection('users').where('id', '==', vendorAuthor).get().then(async function(snapshotsnew) {
NEXT: var vendordata = snapshotsnew.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1408
TEXT: await database.collection('vendors').doc(vendordata.vendorID).update({
NEXT: 'subscriptionTotalOrders': subscriptionTotalOrders.toString()

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1420
TEXT: database.collection('users').doc(vendorAuthor).update({
NEXT: 'wallet_amount': parseFloat(newVendorWallet)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1556
TEXT: database.collection('vendor_orders').doc(id).update({
NEXT: 'status': orderStatus,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1594
TEXT: var driver = database.collection('users').where("id", "==", driverId);
NEXT: await driver.get().then(async function(snapshotsdriver) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1618
TEXT: await database.collection('users').doc(driverdata.id).update({
NEXT: 'wallet_amount': parseFloat(driverWallet)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1627
TEXT: await database.collection('vendor_orders').doc(id).update({
NEXT: 'payment_shared': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1632
TEXT: database.collection('users').doc(referralBy).get().then(async function(snapshots) {
NEXT: var refUserInfo = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1642
TEXT: database.collection('users').doc(referralBy).update({
NEXT: 'wallet_amount': refUserWallet

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1648
TEXT: database.collection('wallet').doc(id_random).set({
NEXT: 'amount': referralAmount,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1682
TEXT: database.collection('wallet').doc(walletId).set({
NEXT: 'amount': parseFloat(orderPaytableAmount),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1693
TEXT: database.collection('users').where("id", "==", orderCustomerId).get().then(async function(userSnapshots) {
NEXT: if (userSnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1701
TEXT: database.collection('users').doc(orderCustomerId).update({
NEXT: 'wallet_amount': parseFloat(newWalletAmount)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1760
TEXT: database.collection('wallet').doc(walletId).set({
NEXT: 'amount': parseFloat(orderPaytableAmount),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1771
TEXT: database.collection('users').where("id", "==", orderCustomerId).get().then(async function(userSnapshots) {
NEXT: if (userSnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 1780
TEXT: database.collection('users').doc(orderCustomerId).update({
NEXT: 'wallet_amount': parseFloat(newWalletAmount)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 2376
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 2427
TEXT: const vendorDoc = await database.collection('users').doc(vendorId).get();
NEXT: if (vendorDoc.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 2438
TEXT: await database.collection('wallet').doc(walletId).set({
NEXT: amount: vendorBaseAmount,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 2451
TEXT: await database.collection('wallet').doc(walletTaxId).set({
NEXT: amount: vendorTaxAmount,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 2467
TEXT: const customerDoc = await database.collection('users').doc(customerId).get();
NEXT: if (customerDoc.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 2478
TEXT: await database.collection('wallet').doc(walletId).set({
NEXT: amount: customerAmount,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 2492
TEXT: const customerDoc = await database.collection('users').doc(customerId).get();
NEXT: if (customerDoc.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 2499
TEXT: await database.collection('users').doc(orderData.driverID).get().then(async function(snapshot) {
NEXT: let newOrderRequestData = [];

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 2515
TEXT: await database.collection('users').doc(driverData.id).update({
NEXT: 'inProgressOrderID': inProgressOrderID,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 2522
TEXT: await database.collection('vendor_orders').doc(orderData.id).update({
NEXT: 'status': 'Order Cancelled',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\edit.blade.php
LINE: 2528
TEXT: await database.collection('vendor_orders').doc(orderData.id).update({
NEXT: 'status': 'Order Cancelled'

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 300
TEXT: var refData = database.collection('vendor_orders').where('isPosOrder','==',false);
NEXT: if (section_id) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 416
TEXT: var initialRef = database.collection('vendor_orders');
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1166
TEXT: let snapshot1 = await database.collection("users")
NEXT: .where("role", "==", "driver")

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1172
TEXT: let snapshot2 = await database.collection("users")
NEXT: .where("role", "==", "driver")

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1186
TEXT: const driverRef = database.collection("users").doc(driverId);
NEXT: batch.update(driverRef, {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1196
TEXT: await database.collection('vendor_orders').doc(orderId).delete();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1223
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1247
TEXT: await database.collection('users').where('id', '==', userId).get().then(async function(snapshots) {
NEXT: var userData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1375
TEXT: let orderRef = await database.collection('vendor_orders').doc(orderId).get();
NEXT: let orderData = orderRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1379
TEXT: let driverNearByRef = await database.collection("settings").doc('DriverNearBy').get();
NEXT: let driverNearByData = driverNearByRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1396
TEXT: let driverSnapshots = await database.collection("users")
NEXT: .where('role', '==', "driver")

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1467
TEXT: let orderRef = await database.collection('vendor_orders').doc(orderId).get();
NEXT: let orderData = orderRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1470
TEXT: let driverNearByRef = await database.collection("settings").doc('DriverNearBy').get();
NEXT: let driverNearByData = driverNearByRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1486
TEXT: let driverRef = database.collection('users').doc(driverId);
NEXT: let orderRef = database.collection('vendor_orders').doc(orderId);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\index.blade.php
LINE: 1487
TEXT: let orderRef = database.collection('vendor_orders').doc(orderId);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\owner_index.blade.php
LINE: 204
TEXT: const ownedDriversSnapshot = await database.collection('users').where('role', '==', 'driver').where('ownerId', '==', vendorID).get();
NEXT: const ownedDriverIds = ownedDriversSnapshot.docs.map(doc => doc.data().id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\owner_index.blade.php
LINE: 656
TEXT: database.collection('vendor_orders').doc(dataId).delete().then(function() {
NEXT: setTimeout(function() {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\owner_index.blade.php
LINE: 681
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\owner_index.blade.php
LINE: 695
TEXT: await database.collection('users').where('id', '==', userId).get().then(async function(snapshots) {
NEXT: var userData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\owner_index.blade.php
LINE: 705
TEXT: database.collection('vendor_orders').doc(id).delete().then(function(result) {
NEXT: window.location.href = '{{ url()->current() }}';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\print.blade.php
LINE: 209
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\print.blade.php
LINE: 217
TEXT: var ref = database.collection('vendor_orders').where("id", "==", id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\orders\print.blade.php
LINE: 302
TEXT: var vendor = database.collection('vendors').where("id", "==", order.vendorID);
NEXT: vendor.get().then(async function (snapshotsnew) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\order_reviews\edit.blade.php
LINE: 129
TEXT: await database.collection('vendors').get().then( async function(snapshots){
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\order_reviews\edit.blade.php
LINE: 147
TEXT: await database.collection('users').where("role","in",["customer","driver"]).get().then( async function(snapshots){
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\order_reviews\edit.blade.php
LINE: 165
TEXT: await database.collection('vendor_orders').where("id","==",review.orderid).get().then( async function(snapshots){
NEXT: var order = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\order_reviews\index.blade.php
LINE: 303
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\order_reviews\index.blade.php
LINE: 607
TEXT: await database.collection('users').where("id","==",userID).get().then( async function(snapshotss){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\order_reviews\index.blade.php
LINE: 640
TEXT: await database.collection('vendors').where("id","==",vendorID).get().then( async function(snapshotss){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\order_transactions\index.blade.php
LINE: 304
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\order_transactions\index.blade.php
LINE: 322
TEXT: await database.collection('vendors').where("id", "==", vendorId).get().then(async function (snapshotss) {
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\order_transactions\index.blade.php
LINE: 339
TEXT: await database.collection('vendor_orders').where("id", "==", orderId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\create.blade.php
LINE: 214
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\create.blade.php
LINE: 237
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\create.blade.php
LINE: 257
TEXT: let documentVerify = await database.collection('settings').doc('document_verification_settings').get();
NEXT: let documentSettings = documentVerify.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\create.blade.php
LINE: 411
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'appIdentifier': 'web',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\documentIndex.blade.php
LINE: 72
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\documentIndex.blade.php
LINE: 299
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': true, isActive: true });
NEXT: }else{

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\documentIndex.blade.php
LINE: 303
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\documentIndex.blade.php
LINE: 308
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\documentUpload.blade.php
LINE: 37
TEXT: var allVendor = database.collection('users').where('role', '==', 'driver');
NEXT: var driverRef= database.collection('users').where('id','==',id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\documentUpload.blade.php
LINE: 38
TEXT: var driverRef= database.collection('users').where('id','==',id);
NEXT: var database = firebase.firestore();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\documentUpload.blade.php
LINE: 51
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\documentUpload.blade.php
LINE: 337
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': true, isActive:true });
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\documentUpload.blade.php
LINE: 341
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\documentUpload.blade.php
LINE: 346
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 137
TEXT: ref = database.collection('users').where("role", "in", ["customer"]);
NEXT: if ($('#daterange span').html() != '{{ trans('lang.select_range') }}' && daterangepicker) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 157
TEXT: var ref = database.collection('users').where("role", "==", "driver").where('ownerId','==', id).orderBy('createdAt', 'desc');
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 159
TEXT: var alldriver = database.collection('users').where("role", "==", "driver").where('ownerId','==', id).orderBy('createdAt', 'desc');
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 161
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 183
TEXT: let userRef = database.collection('users').doc(id);
NEXT: let userDoc = await userRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 461
TEXT: database.collection('vendor_orders').where('driverID', '==', listval.id).where("status", "in", ["Order Completed"]).get().then(async function(orderSnapshots) {
NEXT: var count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 463
TEXT: database.collection('users').doc(listval.id).update({
NEXT: 'orderCompleted': count_order_complete

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 597
TEXT: await database.collection('vendor_orders').where('driverID', '==', driver).get().then(async function(orderSnapshots) {
NEXT: count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 616
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 620
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 629
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 633
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 650
TEXT: const car_info = database.collection('users').doc(dataId).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\driver_list.blade.php
LINE: 742
TEXT: const car_info = database.collection('users').doc(id).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\edit.blade.php
LINE: 239
TEXT: database.collection('users').where("id", "==", id).get().then(function(snapshot) {
NEXT: if (!snapshot.empty) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\edit.blade.php
LINE: 257
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\edit.blade.php
LINE: 271
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\edit.blade.php
LINE: 302
TEXT: let userRef = await database.collection('users').doc(id).get();
NEXT: let user = userRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\edit.blade.php
LINE: 502
TEXT: await database.collection('users').doc(ownerId).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\edit.blade.php
LINE: 516
TEXT: await geoFirestore.collection('vendors').doc(store_id).update({
NEXT: 'authorName': userFirstName +' ' +userLastName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\edit.blade.php
LINE: 560
TEXT: const userRef = database.collection('users').doc(ownerId);
NEXT: const userDoc = await userRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\edit.blade.php
LINE: 566
TEXT: database.collection('users').doc(ownerId).update({
NEXT: 'subscriptionExpiryDate': subscriptionPlanExpiryDate,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\index.blade.php
LINE: 168
TEXT: var ref = database.collection('users').where("role", "==", "driver").where('isOwner','==',true).orderBy('createdAt', 'desc');
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\index.blade.php
LINE: 200
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\index.blade.php
LINE: 571
TEXT: await database.collection('vendors').where('author', '==', userId).get().then(async function (restaurantSnapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\index.blade.php
LINE: 620
TEXT: await database.collection('wallet').where('user_id', '==', userId).get().then(async function (snapshotsItem) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\index.blade.php
LINE: 626
TEXT: database.collection('wallet').doc(item_data.id).delete().then(function () {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\index.blade.php
LINE: 633
TEXT: const driversSnapshot = await database.collection('users').where('ownerId', '==', userId).get();
NEXT: driversSnapshot.forEach((doc) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\index.blade.php
LINE: 680
TEXT: database.collection('users').doc(id).update({'active': true});
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\index.blade.php
LINE: 682
TEXT: database.collection('users').doc(id).update({'active': false});
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\view.blade.php
LINE: 249
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\view.blade.php
LINE: 256
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\view.blade.php
LINE: 262
TEXT: var currency = database.collection('settings');
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\view.blade.php
LINE: 323
TEXT: let ownedDriversSnapshot = await database.collection('users').where('role','==',"driver").where('ownerId', '==', dirver.id).get();
NEXT: $('.total_drivers').html(ownedDriversSnapshot.docs.length);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\view.blade.php
LINE: 343
TEXT: const ordersSnapshot = await database.collection('vendor_orders').where('driverID', '==', driverdata.id).get();
NEXT: totalOrders += ordersSnapshot.docs.length;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\view.blade.php
LINE: 440
TEXT: database.collection('users').where('id', '==', id).get().then(async function (snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\view.blade.php
LINE: 449
TEXT: database.collection('users').doc(id).update({
NEXT: 'wallet_amount': newWalletAmount

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\view.blade.php
LINE: 453
TEXT: database.collection('wallet').doc(tempId).set({
NEXT: 'amount': parseFloat(amount),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\wallet_transaction.blade.php
LINE: 99
TEXT: var refData = database.collection('wallet');
NEXT: var search = jQuery("#search").val();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\wallet_transaction.blade.php
LINE: 102
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\wallet_transaction.blade.php
LINE: 136
TEXT: var username = database.collection('users').where('id', '==', id);
NEXT: username.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\wallet_transaction.blade.php
LINE: 564
TEXT: database.collection('wallet').doc(dataId).delete().then(function() {
NEXT: setTimeout(function() {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\wallet_transaction.blade.php
LINE: 577
TEXT: database.collection('wallet').doc(id).delete().then(function() {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners\wallet_transaction.blade.php
LINE: 583
TEXT: await database.collection('users').where("id", "==", user).get().then(async function(snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners_payouts\create.blade.php
LINE: 94
TEXT: var emailSetting = database.collection('settings').doc('emailSetting');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners_payouts\create.blade.php
LINE: 114
TEXT: const snapshot = await database.collection('users').doc(driverID).get();
NEXT: if (snapshot.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners_payouts\create.blade.php
LINE: 150
TEXT: database.collection('users').where('role', '==', 'driver').get().then(async function(snapshots) {
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners_payouts\create.blade.php
LINE: 198
TEXT: database.collection('users').doc(driverID).update({
NEXT: 'wallet_amount': price

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners_payouts\create.blade.php
LINE: 269
TEXT: await database.collection('users').where('id', "==", driverId).get().then(async function(vendorSnapshots) {
NEXT: var driverData = vendorSnapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\owners_payouts\index.blade.php
LINE: 410
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\parcel_category\edit.blade.php
LINE: 80
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\parcel_category\index.blade.php
LINE: 100
TEXT: var alldriver = database.collection('users').where("role", "==", "driver");
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\parcel_category\index.blade.php
LINE: 106
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\parcel_coupons\edit.blade.php
LINE: 141
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\parcel_orders\edit.blade.php
LINE: 339
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\parcel_orders\edit.blade.php
LINE: 639
TEXT: database.collection('wallet').doc(walletId).set({
NEXT: 'amount': parseFloat(orderPaytableAmount),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\parcel_orders\index.blade.php
LINE: 718
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\parcel_orders\owner_index.blade.php
LINE: 206
TEXT: const ownedDriversSnapshot = await database.collection('users')
NEXT: .where('role', '==', 'driver')

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\parcel_orders\owner_index.blade.php
LINE: 633
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\parcel_weight\index.blade.php
LINE: 201
TEXT: var alovelaceDocumentRef = database.collection('vendor_orders').doc();
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payments\driver_index.blade.php
LINE: 76
TEXT: var ref = database.collection('users').where('role', '==', 'driver');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payments\driver_index.blade.php
LINE: 416
TEXT: await database.collection('users').where('id', '==', driverID).get().then(async function(driverSnapshots) {
NEXT: var driver = [];

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payments\index.blade.php
LINE: 79
TEXT: var ref = database.collection('vendors');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payments\index.blade.php
LINE: 409
TEXT: await database.collection('users').where('vendorID', '==', vendorID).where('role','==','vendor').get().then(async function (vendorSnapshots) {
NEXT: var vendor = [];

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payments\provider_index.blade.php
LINE: 77
TEXT: var ref = database.collection('users').where('role','==','provider');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payments\provider_index.blade.php
LINE: 395
TEXT: await database.collection('users').where('id', '==', providerID).get().then(async function (providerSnapshots) {
NEXT: var provider = [];

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 217
TEXT: database.collection('users').where("id", "==", id).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 470
TEXT: var snapshots = await database.collection('users').doc(driverId).get();
NEXT: if(snapshots.exists){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 563
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 673
TEXT: await database.collection('settings').get().then(async function (snapshots) {
NEXT: snapshots.forEach((doc) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 696
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 714
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 771
TEXT: database.collection('users').where("id", "==", auth).get().then(function (resultdriver) {
NEXT: if (resultdriver.docs.length) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 783
TEXT: database.collection('users').doc(driver.id).update({'wallet_amount': price}).then(async function (result) {
NEXT: var wId = database.collection('temp').doc().id;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 785
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(priceadd),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 492
TEXT: database.collection('users').where("id", "==", id).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1016
TEXT: var snapshots = await database.collection('users').doc(driverId).get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1248
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1476
TEXT: await database.collection('settings').get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1520
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1548
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1688
TEXT: database.collection('users').where("id", "==", auth).get().then(function (resultdriver) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1712
TEXT: database.collection('users').doc(driver.id).update({'wallet_amount': price}).then(async function (result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1716
TEXT: database.collection('wallet').doc(wId).set({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 467
TEXT: var snapshots = await database.collection('users').doc(driverId).get();
NEXT: if(snapshots.exists){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 562
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 671
TEXT: await database.collection('settings').get().then(async function (snapshots) {
NEXT: snapshots.forEach((doc) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 696
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 714
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 771
TEXT: database.collection('users').where("id", "==", auth).get().then(function (resultdriver) {
NEXT: if (resultdriver.docs.length) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 783
TEXT: database.collection('users').doc(driver.id).update({'wallet_amount': price}).then(async function (result) {
NEXT: var wId = database.collection('temp').doc().id;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 785
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(priceadd),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\index.blade.php
LINE: 231
TEXT: database.collection('users').where("id", "==", id).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\index.blade.php
LINE: 481
TEXT: var snapshots = await database.collection('users').doc(driverId).get();
NEXT: if(snapshots.exists){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\index.blade.php
LINE: 574
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\index.blade.php
LINE: 683
TEXT: await database.collection('settings').get().then(async function (snapshots) {
NEXT: snapshots.forEach((doc) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\index.blade.php
LINE: 705
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\index.blade.php
LINE: 718
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\index.blade.php
LINE: 775
TEXT: database.collection('users').where("id", "==", auth).get().then(function (resultdriver) {
NEXT: if (resultdriver.docs.length) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\index.blade.php
LINE: 787
TEXT: database.collection('users').doc(driver.id).update({'wallet_amount': price}).then(async function (result) {
NEXT: var wId = database.collection('temp').doc().id;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\owner\index.blade.php
LINE: 789
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(priceadd),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 872
TEXT: var snapshots = await database.collection('users').doc(providerId).get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1045
TEXT: await database.collection('users').where("id", "==", providerId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1339
TEXT: await database.collection('users').where("id", "==", vendorId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1373
TEXT: await database.collection('settings').get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1458
TEXT: database.collection('users').where("vendorID", "==", auth).get().then(function (resultprovider) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1482
TEXT: database.collection('users').doc(provider.id).update({'wallet_amount': price}).then(async function (result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1486
TEXT: database.collection('wallet').doc(wId).set({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1589
TEXT: await database.collection('users').where("id", "==", provider).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\index.blade.php
LINE: 917
TEXT: var snapshots = await database.collection('users').doc(providerId).get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1089
TEXT: await database.collection('users').where("id", "==", providerId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1383
TEXT: await database.collection('users').where("id", "==", proivderId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1417
TEXT: await database.collection('settings').get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1501
TEXT: database.collection('users').where("vendorID", "==", auth).get().then(function (resultprovider) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1525
TEXT: database.collection('users').doc(provider.id).update({'wallet_amount': price}).then(async function (result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1529
TEXT: database.collection('wallet').doc(wId).set({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1633
TEXT: await database.collection('users').where("id", "==", provider).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 273
TEXT: var refVendor = database.collection('vendors').where('section_id', '==', section_id);
NEXT: var refUsers = database.collection('users');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 274
TEXT: var refUsers = database.collection('users');
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 303
TEXT: var refGlobal = database.collection('settings').doc("globalSettings");
NEXT: refGlobal.get().then(async function(

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 400
TEXT: database.collection('settings').doc('placeHolderImage').get(),
NEXT: database.collection('settings').doc('DeliveryCharge').get(),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 401
TEXT: database.collection('settings').doc('DeliveryCharge').get(),
NEXT: database.collection('currencies').where('isActive', '==', true).get()

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 615
TEXT: const vendorSnap = await database.collection('vendors').doc(state.selectedVendorId).get();
NEXT: if (vendorSnap.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 636
TEXT: database.collection('tax').where('country', '==', vendorCountry).where('enable', '==', true).where('scope', 'in', scopes).where('sectionId', '==', section_id).get().then(snapshot => {
NEXT: snapshot.forEach(doc => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 1007
TEXT: const doc = await database.collection('vendors').doc(vendorId).get();
NEXT: if (doc.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 1691
TEXT: var id_order = database.collection('vendor_orders').doc().id;
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 1693
TEXT: var userSnapshot = await database.collection('users').doc(selectedUser).get();
NEXT: var userDetails = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 1707
TEXT: const vendorSnap = await database.collection('vendors').doc(orderVendorID).get();
NEXT: if (vendorSnap.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 1814
TEXT: await database.collection('vendor_orders').doc(id_order).set(
NEXT: orderData

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 2012
TEXT: await database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(orderBasePrice).toFixed(config.decimal_degits),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 2029
TEXT: await database.collection('wallet').doc(wId2).set({
NEXT: 'amount': parseFloat(orderTaxAmount).toFixed(config.decimal_degits),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 2043
TEXT: const snapshotsnew = await database.collection('users').where('id', '==', vendorAuthor).get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 2050
TEXT: await database.collection('vendors')
NEXT: .doc(vendorAuthor)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\index.blade.php
LINE: 2060
TEXT: await database.collection('users')
NEXT: .doc(vendorAuthor)

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\order_index.blade.php
LINE: 90
TEXT: var refData = database.collection('vendor_orders').where('section_id', '==', section_id).where('isPosOrder','==',true);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\order_index.blade.php
LINE: 416
TEXT: await database.collection('users').where("id", "==", id).get().then(async function (snapshotsorder) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\order_index.blade.php
LINE: 435
TEXT: database.collection('vendor_orders').doc(dataId).delete().then(function () {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\order_index.blade.php
LINE: 457
TEXT: database.collection('vendor_orders').doc(id).delete().then(function (result) {
NEXT: window.location.href = '{{ url()->current() }}';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\order_index.blade.php
LINE: 466
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function (snapshots) {
NEXT: if (!snapshots.empty) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\pos\order_index.blade.php
LINE: 490
TEXT: await database.collection('users').where('id', '==', userId).get().then(async function (snapshots) {
NEXT: var user = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\privacy_policy\index.blade.php
LINE: 113
TEXT: var ref = database.collection('settings').doc('privacyPolicy');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\privacy_policy\index.blade.php
LINE: 194
TEXT: database.collection('settings').doc('privacyPolicy').update({ 'privacy_policy': privacy_policy }).then(function (result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\chat.blade.php
LINE: 73
TEXT: database.collection('users').doc(id).get().then(async function(userSnapshot) {
NEXT: if (userSnapshot.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\chat.blade.php
LINE: 203
TEXT: const userDoc = await database.collection('users').doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\chat.blade.php
LINE: 308
TEXT: const userDoc = await database.collection("users").doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\create.blade.php
LINE: 212
TEXT: var autoAprroveVendor = database.collection('settings').doc("vendor");
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\create.blade.php
LINE: 228
TEXT: let businessModelRef = await database.collection('settings').doc("vendor").get();
NEXT: businessModelData = businessModelRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\create.blade.php
LINE: 250
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\create.blade.php
LINE: 362
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'section_id': section_id,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\edit.blade.php
LINE: 209
TEXT: var autoAprroveVendor = database.collection('settings').doc("vendor");
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\edit.blade.php
LINE: 218
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\edit.blade.php
LINE: 220
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\edit.blade.php
LINE: 230
TEXT: var currency = database.collection('settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\edit.blade.php
LINE: 401
TEXT: await database.collection('users').doc(id).update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php
LINE: 100
TEXT: var ref = database.collection('users').where("role", "==", "provider");
NEXT: if(section_id){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php
LINE: 147
TEXT: ref = database.collection('users').where("role", "in", ["provider"]);
NEXT: if(section_id){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php
LINE: 176
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php
LINE: 551
TEXT: await database.collection('wallet').where('user_id', '==', userId).get().then(async function (snapshotsItem) {
NEXT: if (snapshotsItem.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php
LINE: 555
TEXT: database.collection('wallet').doc(item_data.id).delete().then(function () {
NEXT: });

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php
LINE: 593
TEXT: await database.collection('settings').doc("Version").get().then(function(snapshot) {
NEXT: var settingData=snapshot.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php
LINE: 654
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php
LINE: 658
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\view.blade.php
LINE: 500
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var sectionId = null;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\view.blade.php
LINE: 505
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\view.blade.php
LINE: 511
TEXT: var currency = database.collection('settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\view.blade.php
LINE: 583
TEXT: database.collection('settings').doc("vendor").get().then(async function(snapshots) {
NEXT: var businessModelSettings = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\view.blade.php
LINE: 952
TEXT: await database.collection('users').doc(userId).update({
NEXT: 'subscription_plan': planData,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\view.blade.php
LINE: 968
TEXT: await database.collection('vendors').doc(vendorId).update({
NEXT: 'subscription_plan': planData,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\view.blade.php
LINE: 1160
TEXT: database.collection('users').where('id', '==', id).get().then(async function(snapshot) {
NEXT: var data = snapshot.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\providers\view.blade.php
LINE: 1196
TEXT: await database.collection('users').doc(id).update({
NEXT: 'subscription_plan.orderLimit': order_limit,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\provider_payouts\create.blade.php
LINE: 162
TEXT: var emailSetting = database.collection('settings').doc('emailSetting');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\provider_payouts\create.blade.php
LINE: 197
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\provider_payouts\create.blade.php
LINE: 251
TEXT: database.collection('users').where("id", "==", ProviderID).get().then(function(snapshotss) {
NEXT: if (snapshotss.docs.length) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\provider_payouts\create.blade.php
LINE: 254
TEXT: database.collection('users').doc(userdata.id).update({
NEXT: 'wallet_amount': price

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\provider_payouts\create.blade.php
LINE: 347
TEXT: await database.collection('users').where("id", "==", providerId).get().then(async function(snapshotss) {
NEXT: if (snapshotss.docs.length) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\provider_payouts\create.blade.php
LINE: 362
TEXT: await database.collection('users').where('id', "==", providerUser).get().then(async function(providerSnapshots) {
NEXT: if (providerSnapshots.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\provider_payouts\index.blade.php
LINE: 403
TEXT: database.collection('users').where('id', '==', providerId).get().then(function (snapshots) {
NEXT: var providerData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\provider_payouts\index.blade.php
LINE: 467
TEXT: await database.collection('users').where("id", "==", provider).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rentalDiscount\edit.blade.php
LINE: 135
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rentalVehicle\index.blade.php
LINE: 88
TEXT: var refData = database.collection('users').where('serviceType', '==', 'rental-service').where('sectionId','==',$section_id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rentalVehicle\index.blade.php
LINE: 91
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rentalVehicle\index.blade.php
LINE: 127
TEXT: const querySnapshot = await  database.collection('users').where('serviceType', '==', 'rental-service').where('sectionId','==',$section_id).get();
NEXT: if (!querySnapshot || querySnapshot.empty) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rentalVehicle\view.blade.php
LINE: 85
TEXT: var ref = database.collection('users').where("id", "==", id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rentalVehicle\view.blade.php
LINE: 88
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(function (snap) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rentalvehicleType\edit.blade.php
LINE: 105
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rentalvehicleType\index.blade.php
LINE: 83
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rental_orders\edit.blade.php
LINE: 367
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rental_orders\edit.blade.php
LINE: 388
TEXT: var alovelaceDocumentRef = database.collection('vendor_orders').doc();
NEXT: if (alovelaceDocumentRef.id) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rental_orders\edit.blade.php
LINE: 412
TEXT: var driver = database.collection('users').where("id", "==", order.driver.id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rental_orders\index.blade.php
LINE: 583
TEXT: await database.collection('users').where('id', '==', driverID).get().then(async function (snapshots) {
NEXT: var driverData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rental_orders\owner_index.blade.php
LINE: 237
TEXT: const ownedDriversSnapshot = await database.collection('users')
NEXT: .where('role', '==', 'driver')

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rental_orders\owner_index.blade.php
LINE: 488
TEXT: await database.collection('users').where('id', '==', driverID).get().then(async function (snapshots) {
NEXT: var driverData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rental_packages\index.blade.php
LINE: 102
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\reports\sales-reports.blade.php
LINE: 128
TEXT: var vendorsRef = database.collection('vendors').orderBy('title').orderBy('createdAt');
NEXT: var driverUserRef = database.collection('users').where('role', '==', 'driver').orderBy('firstName').orderBy('createdAt');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\reports\sales-reports.blade.php
LINE: 129
TEXT: var driverUserRef = database.collection('users').where('role', '==', 'driver').orderBy('firstName').orderBy('createdAt');
NEXT: var customerRef = database.collection('users').where('role', '==', 'customer').orderBy('firstName').orderBy('createdAt');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\reports\sales-reports.blade.php
LINE: 130
TEXT: var customerRef = database.collection('users').where('role', '==', 'customer').orderBy('firstName').orderBy('createdAt');
NEXT: var categoryRef = database.collection('vendor_categories').orderBy('title');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\reports\sales-reports.blade.php
LINE: 132
TEXT: var paymentMethodRef = database.collection('settings').doc('payment');
NEXT: var providerRef = database.collection('users').where('role', '==', 'provider').orderBy('firstName').orderBy('createdAt');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\reports\sales-reports.blade.php
LINE: 133
TEXT: var providerRef = database.collection('users').where('role', '==', 'provider').orderBy('firstName').orderBy('createdAt');
NEXT: var workerRef = database.collection('providers_workers').orderBy('firstName');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\reports\sales-reports.blade.php
LINE: 182
TEXT: await database.collection('vendors').orderBy('title').where('section_id', '==', section_id).get().then(function (snapShots) {
NEXT: $('.vendors').empty();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\reports\sales-reports.blade.php
LINE: 214
TEXT: await database.collection('users').where('role', '==', 'driver').orderBy('firstName').where('serviceType', '==', service_type).get().then(function (snapShots) {
NEXT: $('.driver').empty();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\reports\sales-reports.blade.php
LINE: 699
TEXT: ordersRef = database.collection('vendor_orders').where('status', 'in', ["Order Completed"]).where('section_id', '==', section_id).orderBy('createdAt', 'desc');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\reports\tax-reports.blade.php
LINE: 110
TEXT: var refTaxes = database.collection('tax').where('enable', '==', true).where('sectionId','==',section_id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\edit.blade.php
LINE: 341
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\edit.blade.php
LINE: 362
TEXT: var alovelaceDocumentRef = database.collection('vendor_orders').doc();
NEXT: if (alovelaceDocumentRef.id) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\edit.blade.php
LINE: 568
TEXT: var driver = database.collection('users').where("id", "==", driverId);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\edit.blade.php
LINE: 684
TEXT: var vendor = database.collection('users').where("driverID", "==", driverID);
NEXT: var vendorWallet = 0;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\edit.blade.php
LINE: 688
TEXT: var driver = database.collection('users').where("id", "==", driverId);
NEXT: await driver.get().then(async function (snapshotsdriver) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\edit.blade.php
LINE: 703
TEXT: await database.collection('users').doc(driverdata.id).update({
NEXT: 'wallet_amount': driverWallet

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\index.blade.php
LINE: 242
TEXT: var alldriver = database.collection('users').where("id", "==", id).orderBy('createdAt', 'desc');
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\index.blade.php
LINE: 340
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\index.blade.php
LINE: 589
TEXT: database.collection('users').doc(listval.id).update({'orderCompleted': count_order_complete}).then(function (result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\index.blade.php
LINE: 757
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\owner_index.blade.php
LINE: 174
TEXT: const ownedDriversSnapshot = await database.collection('users')
NEXT: .where('role', '==', 'driver')

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\owner_index.blade.php
LINE: 223
TEXT: var alldriver = database.collection('users').where("id", "==", id).orderBy('createdAt', 'desc');
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\owner_index.blade.php
LINE: 301
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\owner_index.blade.php
LINE: 347
TEXT: database.collection('users').doc(listval.id).update({'orderCompleted': count_order_complete}).then(function (result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\rides\owner_index.blade.php
LINE: 479
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php
LINE: 294
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var htmlTemplate = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php
LINE: 303
TEXT: var refDriver = database.collection('settings').doc("DriverNearBy");
NEXT: refDriver.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php
LINE: 289
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php
LINE: 299
TEXT: var refDriver = database.collection('settings').doc("DriverNearBy");
NEXT: refDriver.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php
LINE: 95
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php
LINE: 315
TEXT: await database.collection('vendors').where('section_id', '==', sectionId).get().then(async function (vendorsnapshots) {
NEXT: if (vendorsnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php
LINE: 320
TEXT: const snaps = await database.collection('vendors').where('id', '==', vendorID).get();
NEXT: await deleteDocumentWithImage('vendors',snaps.docs[0].id,'photo','photos','authorProfilePic');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php
LINE: 322
TEXT: database.collection('vendors').doc(item_data.id).delete().then(async function () {
NEXT: await database.collection('order_transactions').where('vendorId', '==', vendorID).get().then(async function (ordertransactionsanpshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php
LINE: 341
TEXT: await database.collection('users').where('vendorID', '==', vendorID).get().then(async function (userssanpshots) {
NEXT: if (userssanpshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php
LINE: 358
TEXT: database.collection('users').doc(item_data.id).delete().then(function () {
NEXT: });

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php
LINE: 369
TEXT: await database.collection('vendor_orders').where('vendorID', '==', vendorID).get().then(async function (vendorordersanpshots) {
NEXT: if (vendorordersanpshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php
LINE: 373
TEXT: database.collection('vendor_orders').doc(item_data.id).delete().then(function () {
NEXT: });

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\adminCommission.blade.php
LINE: 65
TEXT: var ref = database.collection('settings').doc("AdminCommission");
NEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\adminCommission.blade.php
LINE: 66
TEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\adminCommission.blade.php
LINE: 88
TEXT: database.collection('settings').doc("AdminCommission").update({'isEnabled':checkboxValue,'fix_commission':howmuch,'commissionType':commission_type}).then(function(result) {
NEXT: window.location.href = '{{ url("settings/app/adminCommission")}}';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\banners.blade.php
LINE: 51
TEXT: var appHomeBanners = database.collection('settings').doc("AppHomeBanners");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\banners.blade.php
LINE: 61
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\banners.blade.php
LINE: 100
TEXT: database.collection('settings').doc("AppHomeBanners").update({
NEXT: 'banners': banners,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\businessModel.blade.php
LINE: 199
TEXT: var restaurant = database.collection('settings').doc("vendor");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\businessModel.blade.php
LINE: 293
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id', '==', sectionId).orderBy('firstName',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\businessModel.blade.php
LINE: 315
TEXT: database.collection('vendors').where('section_id', '==', sectionId).orderBy('title',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\businessModel.blade.php
LINE: 353
TEXT: database.collection('settings').doc('vendor').set({});

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\businessModel.blade.php
LINE: 393
TEXT: database.collection('settings').doc("vendor").update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\businessModel.blade.php
LINE: 467
TEXT: return await database.collection('vendors').where('section_id',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\businessModel.blade.php
LINE: 475
TEXT: return await database.collection('users').where('role', '==',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\businessModel.blade.php
LINE: 493
TEXT: database.collection('users').where('id', 'in',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\businessModel.blade.php
LINE: 507
TEXT: database.collection('vendors').where('id', 'in',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 240
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 242
TEXT: var ref = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 244
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 246
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 248
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 250
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 252
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 254
TEXT: // var parcelPayStack = database.collection('settings').doc('parcelPayStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 256
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 258
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 260
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 262
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 264
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\cod.blade.php
LINE: 479
TEXT: database.collection('settings').doc("CODSettings").update({'isEnabled': isCODEnabled}).then(function (result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\deliveryCharge.blade.php
LINE: 63
TEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");
NEXT: var driverNearBy = database.collection('settings').doc("DriverNearBy");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\deliveryCharge.blade.php
LINE: 64
TEXT: var driverNearBy = database.collection('settings').doc("DriverNearBy");
NEXT: $(document).ready(function () {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\deliveryCharge.blade.php
LINE: 70
TEXT: database.collection('settings').doc('DeliveryCharge').set({
NEXT: 'vendor_can_modify': '',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\deliveryCharge.blade.php
LINE: 97
TEXT: database.collection('settings').doc("DeliveryCharge").update({
NEXT: 'vendor_can_modify': checkboxValue,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\documentVerificationSetting.blade.php
LINE: 46
TEXT: var ref = database.collection('settings').doc("document_verification_settings");
NEXT: $(document).ready(function(){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\documentVerificationSetting.blade.php
LINE: 52
TEXT: database.collection('settings').doc('document_verification_settings').set({});
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\documentVerificationSetting.blade.php
LINE: 73
TEXT: database.collection('settings').doc("document_verification_settings").update({
NEXT: 'isDriverVerification':enableDriver,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 323
TEXT: var ref = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 325
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 327
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 329
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 331
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 333
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 335
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 337
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 339
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 341
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 343
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 345
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 363
TEXT: database.collection('settings').doc('flutterWave').set({});

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\flutterwave.blade.php
LINE: 633
TEXT: database.collection('settings').doc("flutterWave").update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 442
TEXT: var ref = database.collection('settings').doc("globalSettings");
NEXT: var mapKey = database.collection('settings').doc("googleMapKey");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 443
TEXT: var mapKey = database.collection('settings').doc("googleMapKey");
NEXT: var refPlaceholderImage = database.collection('settings').doc("placeHolderImage");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 444
TEXT: var refPlaceholderImage = database.collection('settings').doc("placeHolderImage");
NEXT: var contactUs = database.collection('settings').doc("ContactUs");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 445
TEXT: var contactUs = database.collection('settings').doc("ContactUs");
NEXT: var version = database.collection('settings').doc("Version");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 446
TEXT: var version = database.collection('settings').doc("Version");
NEXT: var story = database.collection('settings').doc("story");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 447
TEXT: var story = database.collection('settings').doc("story");
NEXT: var vendor = database.collection('settings').doc("vendor");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 448
TEXT: var vendor = database.collection('settings').doc("vendor");
NEXT: var provider = database.collection('settings').doc("provider");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 449
TEXT: var provider = database.collection('settings').doc("provider");
NEXT: var DriverNearByRef = database.collection('settings').doc("DriverNearBy");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 450
TEXT: var DriverNearByRef = database.collection('settings').doc("DriverNearBy");
NEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 451
TEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");
NEXT: var refCurrency = database.collection('currencies').where('isActive', '==', true);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 453
TEXT: var refEmailSetting = database.collection('settings').doc("emailSetting");
NEXT: var refNotificationSetting = database.collection('settings').doc("notification_setting");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 454
TEXT: var refNotificationSetting = database.collection('settings').doc("notification_setting");
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 456
TEXT: var homepagethemeRef = database.collection('settings').doc("home_page_theme");
NEXT: var services = database.collection('sections').where('isActive', '==', true).orderBy('order');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 793
TEXT: database.collection('settings').doc("globalSettings").update({
NEXT: 'website_color': website_color,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 822
TEXT: database.collection('settings').doc('placeHolderImage').update({
NEXT: 'image': placeholderphoto

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 825
TEXT: database.collection('settings').doc("ContactUs").update({
NEXT: 'Address': contact_us_address,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 830
TEXT: database.collection('settings').doc("vendor").update({
NEXT: 'auto_approve_vendor': auto_approve_vendor,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 834
TEXT: database.collection('settings').doc("provider").update({
NEXT: 'auto_approve_provider': auto_approve_provider,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 837
TEXT: database.collection('settings').doc("story").update({
NEXT: 'isEnabled': store_can_upload_story,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 841
TEXT: database.collection('settings').doc("Version").update({
NEXT: 'app_version': app_version,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 848
TEXT: database.collection('settings').doc("googleMapKey").update({
NEXT: 'key': googleApiKey,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 851
TEXT: database.collection('settings').doc("DriverNearBy").update({
NEXT: 'minimumDepositToRideAccept': minimumDepositToRideAccept,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 860
TEXT: database.collection('settings').doc("digitalProduct").update({
NEXT: 'fileSize': fileSize,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 863
TEXT: database.collection('settings').doc("notification_setting").update({
NEXT: 'senderId': senderId,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\global.blade.php
LINE: 867
TEXT: database.collection('settings').doc("emailSetting").update({
NEXT: 'fromName': fromName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\maintenance_settings.blade.php
LINE: 56
TEXT: var ref = database.collection('settings').doc("maintenance_settings");
NEXT: $(document).ready(function(){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\maintenance_settings.blade.php
LINE: 62
TEXT: database.collection('settings').doc('maintenance_settings').set({});
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\maintenance_settings.blade.php
LINE: 92
TEXT: database.collection('settings').doc("maintenance_settings").update({
NEXT: 'isMaintenanceModeForCustomer':enableCust,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 299
TEXT: var ref = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 301
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 303
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 305
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 307
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 309
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 311
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 313
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 315
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 317
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 319
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 321
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 337
TEXT: database.collection('settings').doc('MercadoPago').set({});

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\mercadopago.blade.php
LINE: 563
TEXT: database.collection('settings').doc("MercadoPago").update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 279
TEXT: var ref = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 281
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 283
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 285
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 287
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 289
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 291
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 293
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 295
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 297
TEXT: var stripe = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 299
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 301
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\midTrans.blade.php
LINE: 531
TEXT: database.collection('settings').doc('midTransSettings').delete({}).then(function(result) {});

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\openaiSettings.blade.php
LINE: 49
TEXT: var ref_openai_settings = database.collection('settings').doc("openai_settings");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\openaiSettings.blade.php
LINE: 60
TEXT: database.collection('settings').doc('openai_settings').set({
NEXT: 'status': '',

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\openaiSettings.blade.php
LINE: 85
TEXT: database.collection('settings').doc("openai_settings").update({
NEXT: 'status': status,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 389
TEXT: var ref = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 391
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 393
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 395
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 397
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 399
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 401
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 403
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 405
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 407
TEXT: var stripe = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 409
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\orangePay.blade.php
LINE: 411
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 339
TEXT: var ref = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 341
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 343
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 345
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 347
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 349
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 351
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 353
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 355
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 357
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 359
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 361
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 377
TEXT: database.collection('settings').doc('payFastSettings').set({});

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\payfast.blade.php
LINE: 633
TEXT: database.collection('settings').doc("payFastSettings").update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 296
TEXT: var ref = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 298
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 300
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 302
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 304
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 306
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 308
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 310
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 312
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 314
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 316
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 318
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paypal.blade.php
LINE: 570
TEXT: database.collection('settings').doc("paypalSettings").update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 327
TEXT: var ref = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 329
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 331
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 333
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 335
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 337
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 339
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 341
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 343
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 345
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 347
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 349
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 365
TEXT: database.collection('settings').doc('payStack').set({});

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\paystack.blade.php
LINE: 613
TEXT: database.collection('settings').doc("payStack").update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\radiosConfiguration.blade.php
LINE: 116
TEXT: var refDriver = database.collection('settings').doc("DriverNearBy");
NEXT: $(document).ready(function() {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\radiosConfiguration.blade.php
LINE: 167
TEXT: database.collection('settings').doc("DriverNearBy").update({
NEXT: 'distanceType': distance_type,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 299
TEXT: var ref = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 301
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 303
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 305
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 307
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 309
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 311
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 313
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 315
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 317
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 319
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 321
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\razorpay.blade.php
LINE: 573
TEXT: database.collection('settings').doc("razorpaySettings").update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\schedule_notification.blade.php
LINE: 64
TEXT: var ref=database.collection('settings').doc("scheduleOrderNotification");
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\schedule_notification.blade.php
LINE: 71
TEXT: database.collection('settings').doc('scheduleOrderNotification').set({'notifyTime': '','timeUnit':''});
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\schedule_notification.blade.php
LINE: 93
TEXT: database.collection('settings').doc("scheduleOrderNotification").update({'notifyTime': time,'timeUnit':timeUnit}).then(function(result) {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\specialDiscountOffer.blade.php
LINE: 40
TEXT: var ref = database.collection('settings').doc("specialDiscountOffer");
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\specialDiscountOffer.blade.php
LINE: 47
TEXT: database.collection('settings').doc('specialDiscountOffer').set({});
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\specialDiscountOffer.blade.php
LINE: 59
TEXT: database.collection('settings').doc("specialDiscountOffer").update({'isEnable': checkboxValue}).then(function (result) {
NEXT: window.location.href = '{{ url("settings/app/specialOffer")}}';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 299
TEXT: var ref = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 301
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 303
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 305
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 307
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 309
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 311
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 313
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 315
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 317
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 319
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 321
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\stripe.blade.php
LINE: 565
TEXT: database.collection('settings').doc("stripeSettings").update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 225
TEXT: var ref = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 227
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 229
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 231
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 233
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 235
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 237
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 239
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 241
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 243
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 245
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 247
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\wallet.blade.php
LINE: 467
TEXT: database.collection('settings').doc("walletSettings").update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 277
TEXT: var ref = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 279
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 281
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 283
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 285
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 287
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 289
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 291
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 293
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 295
TEXT: var stripe = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 297
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 299
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 529
TEXT: database.collection('settings').doc('xenditSettings').delete({}).then(function(result) {});

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 531
TEXT: database.collection('settings').doc('midTransSettings').delete({}).then(function(result) {});

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\app\xendit.blade.php
LINE: 533
TEXT: database.collection('settings').doc('orangePaySettings').delete({}).then(function(result) {});

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\currencies\create.blade.php
LINE: 236
TEXT: var globalSettingsRef = database.collection('settings').doc("globalSettings");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\languages\create.blade.php
LINE: 170
TEXT: var ref = database.collection('settings').doc('languages');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\languages\create.blade.php
LINE: 192
TEXT: database.collection('settings').doc('languages').set({ 'list': '' });

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\languages\create.blade.php
LINE: 284
TEXT: database.collection('settings').doc('languages').update({ 'list': languages }).then(function (result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\languages\edit.blade.php
LINE: 165
TEXT: var ref = database.collection('settings').doc('languages');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\languages\edit.blade.php
LINE: 173
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\languages\edit.blade.php
LINE: 343
TEXT: database.collection('settings').doc('languages').update({ 'list': languages }).then(function (result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\languages\index.blade.php
LINE: 120
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\languages\index.blade.php
LINE: 124
TEXT: var ref = database.collection('settings').doc('languages');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\languages\index.blade.php
LINE: 408
TEXT: database.collection('settings').doc('languages').update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\languages\index.blade.php
LINE: 418
TEXT: database.collection('settings').doc('languages').update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\languages\index.blade.php
LINE: 452
TEXT: database.collection('settings').doc('languages').update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\mobile\globals.blade.php
LINE: 53
TEXT: var ref = database.collection('settings');
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\mobile\globals.blade.php
LINE: 68
TEXT: database.collection('settings').doc('googleMapKey').update({'key':mapKey}).then(function(result) {
NEXT: window.location.href = '{!! url()->current() !!}';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\settings\promos\edit.blade.php
LINE: 136
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storage = firebase.storage();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\sos\edit.blade.php
LINE: 211
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\sos\edit.blade.php
LINE: 226
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then( async function(snapshots){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\sos\edit.blade.php
LINE: 234
TEXT: var alovelaceDocumentRef = database.collection('vendor_orders').doc();
NEXT: if(alovelaceDocumentRef.id){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\sos\edit.blade.php
LINE: 340
TEXT: var driver = database.collection('users').where("id","==",driverdata.driver.id);
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 842
TEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");
NEXT: var deliveryChargeFlag = false;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 873
TEXT: var driverNearBy = database.collection('settings').doc("DriverNearBy");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 875
TEXT: database.collection('settings').doc("story").get().then(async function(snapshots) {
NEXT: var story_data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 883
TEXT: var selfDeliveryRef = database.collection('settings').doc("globalSettings");
NEXT: selfDeliveryRef.get().then(async function(settingSnapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 928
TEXT: database.collection('zone').where('publish', '==', true).orderBy('name', 'asc').get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 977
TEXT: database.collection('users').where('role', '==', 'vendor').where('sectionId', '==', section_id).orderBy('firstName', 'asc').get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 1004
TEXT: database.collection('users').where('id', '==', ownerId).get().then(async function(snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 1021
TEXT: var emailSetting = database.collection('settings').doc('emailSetting');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 1033
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 1384
TEXT: database.collection('users').doc(user_id).update({
NEXT: 'section_id': section_id,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 1392
TEXT: geoFirestore.collection('vendors').doc(vendor_id).set({
NEXT: 'section_id': section_id,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 1429
TEXT: await database.collection('users').doc(user_id).update({
NEXT: 'section_id': section_id

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 1434
TEXT: geoFirestore.collection('vendors').doc(vendor_id).update({
NEXT: 'deliveryCharge': deliveryCharge

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 1565
TEXT: database.collection('vendors').doc(id).update({
NEXT: 'specialDiscount': specialDiscount

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
LINE: 2142
TEXT: await database.collection('users').doc(selectedOwnerId).get().then(async function(
NEXT: snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 822
TEXT: var ref = database.collection('vendors').where("id", "==", id);
NEXT: var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 848
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 849
TEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");
NEXT: var deliveryChargeFlag = false;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 886
TEXT: var driverNearBy = database.collection('settings').doc("DriverNearBy");

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 908
TEXT: database.collection('settings').doc("story").get().then(async function(snapshots) {
NEXT: var story_data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 917
TEXT: var selfDeliveryRef = database.collection('settings').doc("globalSettings");
NEXT: selfDeliveryRef.get().then(async function(settingSnapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 956
TEXT: database.collection('zone').where('publish', '==', true).orderBy('name', 'asc').get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 1311
TEXT: await database.collection('users').where("id", "==", vendor.author).get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 1695
TEXT: geoFirestore.collection('vendors').doc(id).update({

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 1751
TEXT: geoFirestore.collection('vendors').doc(id).update({
NEXT: 'deliveryCharge': deliveryCharge

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 1769
TEXT: geoFirestore.collection('vendors').doc(id).update({
NEXT: 'deliveryCharge': deliveryCharge

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 2254
TEXT: database.collection('vendors').doc(id).update({
NEXT: 'specialDiscount': specialDiscount

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
LINE: 2624
TEXT: database.collection('vendors').doc(id).update({
NEXT: 'workingHours': workingHours

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 216
TEXT: var refData = database.collection('vendors').where('section_id', '==', active_id);
NEXT: var ref = refData.orderBy('createdAt', 'desc');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 222
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 606
TEXT: await database.collection('users').doc(id).get().then((snapshots) => {
NEXT: let data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 624
TEXT: await database.collection('vendor_orders').where('vendorID', '==', id).get().then(async function(productSnapshots) {
NEXT: order_total = productSnapshots.docs.length;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 657
TEXT: await database.collection('users').where('vendorID', '==', storeId).where('role', '==', 'vendor').get().then(async function(userssanpshots) {
NEXT: if (userssanpshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 667
TEXT: await database.collection('settings').doc("Version").get().then(function(snapshot) {
NEXT: var settingData = snapshot.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 710
TEXT: var orderSnapshot = await database.collection('vendor_orders').where('vendorID', '==', storeId).get();
NEXT: if (!orderSnapshot.empty) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 746
TEXT: const driverSnapshots = await database.collection('users').where('role', '==', 'driver').where('vendorID', '==', storeId).get();
NEXT: if (!driverSnapshots.empty) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 759
TEXT: await database.collection('users').where("id", "==", author).get().then(async function(snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 804
TEXT: await database.collection('users').doc(author).get().then(async function(snapshotsusers) {
NEXT: userData = snapshotsusers.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 807
TEXT: await database.collection('vendors').doc(id).get().then(async function(snapshotsvendors) {
NEXT: vendorData = snapshotsvendors.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 873
TEXT: await database.collection('users').doc(user_id).set(userData).then(async function(result) {
NEXT: await geoFirestore.collection('vendors').doc(vendor_id).set(vendorData).then(async function(result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php
LINE: 874
TEXT: await geoFirestore.collection('vendors').doc(vendor_id).set(vendorData).then(async function(result) {
NEXT: if(vendorProducts.length > 0){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 718
TEXT: var ref = database.collection('vendors').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 724
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var sectionId = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 792
TEXT: database.collection('settings').doc("vendor").get().then(async function(snapshots) {
NEXT: var businessModelSettings = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1124
TEXT: database.collection('zone').where('id', '==', vendor.zoneId).get().then(
NEXT: async function(zoneSnapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1160
TEXT: await database.collection('users').where("id", "==", vendor.author).get().then(
NEXT: async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1225
TEXT: database.collection('vendors').doc(id).update({
NEXT: 'title': vendorname,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1243
TEXT: database.collection('users').where('id', '==', vendorId).get().then(async function(snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1304
TEXT: await database.collection('vendor_orders').where('vendorID', '==', '<?php echo $id; ?>').get().then(
NEXT: async function(orderSnapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1323
TEXT: await database.collection('vendor_orders').where('vendorID', '==', '<?php echo $id; ?>').where('status',
NEXT: 'in', ["Order Completed"]).get().then(async function(orderSnapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1394
TEXT: database.collection('users').where('id', '==', vendorOwnerId).get().then(async function(snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1406
TEXT: database.collection('users').doc(vendorOwnerId).update({
NEXT: 'wallet_amount': newWalletAmount

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1410
TEXT: database.collection('wallet').doc(tempId).set({
NEXT: 'amount': parseFloat(amount),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1773
TEXT: await database.collection('users').doc(vendorOwnerId).update({
NEXT: 'subscription_plan': planData,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1786
TEXT: await database.collection('vendors').doc(vendorId).update({
NEXT: 'subscription_plan': planData,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1796
TEXT: await database.collection('vendors').doc(vendorId).update({
NEXT: 'subscription_plan': planData,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1839
TEXT: database.collection('vendors').where('id', '==', id).get().then(async function(snapshot) {
NEXT: var data = snapshot.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1877
TEXT: await database.collection('users').doc(vendorOwnerId).update({
NEXT: 'subscription_plan.orderLimit': order_limit,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\view.blade.php
LINE: 1881
TEXT: await database.collection('vendors').doc("{{ $id }}").update({
NEXT: 'subscription_plan.orderLimit': order_limit,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\subscription_plans\current_subscriber.blade.php
LINE: 75
TEXT: var subscriberListRef = database.collection('users').where('subscriptionPlanId', '==', planId);
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\subscription_plans\current_subscriber.blade.php
LINE: 292
TEXT: await database.collection('vendors').where('id', '==', vendorid).get().then(async function(snapshots) {
NEXT: if (snapshots.docs.length) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\subscription_plans\history.blade.php
LINE: 208
TEXT: var ref = database.collection('vendors').where("id", "==", storeID);
NEXT: await ref.get().then(async function(querysnapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\subscription_plans\history.blade.php
LINE: 450
TEXT: await database.collection('users').doc(id).get().then(async function(snapshot) {
NEXT: if (snapshot && snapshot.data()) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\subscription_plans\history.blade.php
LINE: 463
TEXT: await database.collection('users').doc(id).get().then(async function(snapshot) {
NEXT: if (snapshot && snapshot.data()) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\subscription_plans\index.blade.php
LINE: 122
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\subscription_plans\index.blade.php
LINE: 434
TEXT: await database.collection('users').where('subscriptionPlanId', '==', id).get()
NEXT: .then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\subscription_plans\save.blade.php
LINE: 196
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\support_history\inbox.blade.php
LINE: 93
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\support_history\inbox.blade.php
LINE: 217
TEXT: snap = await database.collection('users').doc(id).get();
NEXT: }else{

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\support_history\inbox.blade.php
LINE: 271
TEXT: userSnap = await database.collection("users").doc(activeChatId).get();
NEXT: }else{

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\support_history\index.blade.php
LINE: 94
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\support_history\index.blade.php
LINE: 274
TEXT: await database.collection('users').doc(id).get().then(async function(snapshot) {
NEXT: if (snapshot && snapshot.data()) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\taxes\create.blade.php
LINE: 151
TEXT: var globalSettingsRef = database.collection('settings').doc("globalSettings");
NEXT: var newcountriesjs = '<?php echo json_encode($newcountriesjs); ?>';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\taxes\create.blade.php
LINE: 256
TEXT: database.collection('tax').doc(id).set({
NEXT: 'title': title,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\taxes\edit.blade.php
LINE: 150
TEXT: var ref = database.collection('tax').where("id", "==", id);
NEXT: var append_list = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\taxes\edit.blade.php
LINE: 247
TEXT: database.collection('tax').doc(id).update({
NEXT: 'title': title,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\taxes\index.blade.php
LINE: 87
TEXT: var ref = database.collection('tax').orderBy('title');
NEXT: var section_id = getCookie('section_id') || null;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\taxes\index.blade.php
LINE: 89
TEXT: var ref = database.collection('tax').orderBy('title');
NEXT: if (section_id) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\taxes\index.blade.php
LINE: 224
TEXT: database.collection('tax').doc(dataId).delete().then(function () {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\taxes\index.blade.php
LINE: 239
TEXT: database.collection('tax').doc(id).update({
NEXT: 'enable': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\taxes\index.blade.php
LINE: 244
TEXT: database.collection('tax').doc(id).update({
NEXT: 'enable': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\taxes\index.blade.php
LINE: 253
TEXT: database.collection('tax').doc(id).delete().then(function (result) {
NEXT: window.location.href = '{{ url()->current() }}';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\terms_conditions\index.blade.php
LINE: 111
TEXT: var ref = database.collection('settings').doc('termsAndConditions');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\terms_conditions\index.blade.php
LINE: 194
TEXT: database.collection('settings').doc('termsAndConditions').update({'terms_and_condition':terms_and_conditions}).then(function(result) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\transactions\create.blade.php
LINE: 88
TEXT: await database.collection('vendor_orders').where('driverID', '==', driverID).where("status", "in", ["Order Completed"]).get().then(async function(orderSnapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\transactions\create.blade.php
LINE: 115
TEXT: database.collection('users').where('role', '==', 'driver').get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\transactions\index.blade.php
LINE: 177
TEXT: var refData = database.collection('wallet');
NEXT: var search = jQuery("#search").val();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\transactions\index.blade.php
LINE: 180
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\transactions\index.blade.php
LINE: 212
TEXT: ref = database.collection('users').doc(id);
NEXT: await ref.get().then(async function(querysnapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\transactions\index.blade.php
LINE: 288
TEXT: var username = database.collection('users').where('id', '==', id);
NEXT: username.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\transactions\index.blade.php
LINE: 741
TEXT: database.collection('wallet').doc(dataId).delete().then(function() {
NEXT: setTimeout(function() {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\transactions\index.blade.php
LINE: 754
TEXT: database.collection('wallet').doc(id).delete().then(function() {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\transactions\index.blade.php
LINE: 760
TEXT: await database.collection('users').where("id", "==", user).get().then(async function(snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\transactions\index.blade.php
LINE: 769
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\chat.blade.php
LINE: 71
TEXT: database.collection('users').doc(id).get().then(async function(userSnapshot) {
NEXT: if (userSnapshot.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\chat.blade.php
LINE: 202
TEXT: const userDoc = await database.collection('users').doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\chat.blade.php
LINE: 309
TEXT: const userDoc = await database.collection("users").doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\create.blade.php
LINE: 155
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\create.blade.php
LINE: 237
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\edit.blade.php
LINE: 203
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\edit.blade.php
LINE: 211
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\edit.blade.php
LINE: 217
TEXT: var currency = database.collection('settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\edit.blade.php
LINE: 291
TEXT: var orderRef = database.collection('vendor_orders').where("authorID", "==", id).where('section_id', '==', section_id);
NEXT: orderRef.get().then(async function (snapshotsorder) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\edit.blade.php
LINE: 343
TEXT: database.collection('users').doc(id).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php
LINE: 95
TEXT: var ref = database.collection('users').where("role", "in", ["customer"]).orderBy('createdAt', 'desc');
NEXT: var user_permissions = '<?php echo @session('user_permissions') ?>';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php
LINE: 142
TEXT: ref = database.collection('users').where("role", "in", ["customer"]);
NEXT: if ($('#daterange span').html() != '{{trans("lang.select_range")}}' && daterangepicker) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php
LINE: 165
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php
LINE: 482
TEXT: await database.collection('wallet').where('user_id', '==', userId).get().then(async function(snapshotsItem) {
NEXT: if (snapshotsItem.docs.length > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php
LINE: 486
TEXT: database.collection('wallet').doc(item_data.id).delete().then(function() {
NEXT: });

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php
LINE: 492
TEXT: await database.collection('settings').doc("Version").get().then(function (snapshot) {
NEXT: var settingData = snapshot.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php
LINE: 545
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php
LINE: 549
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\view.blade.php
LINE: 185
TEXT: var ref = database.collection('users').where("id", "==", id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\view.blade.php
LINE: 189
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\view.blade.php
LINE: 195
TEXT: var currency = database.collection('settings');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\view.blade.php
LINE: 329
TEXT: database.collection('users').where('id', '==', id).get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\view.blade.php
LINE: 342
TEXT: database.collection('users').doc(id).update({
NEXT: 'wallet_amount': newWalletAmount

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\view.blade.php
LINE: 346
TEXT: database.collection('wallet').doc(tempId).set({
NEXT: 'amount': parseFloat(amount),

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\users\view.blade.php
LINE: 407
TEXT: database.collection('vendor_orders').where('authorID', '==', id).where('section_id', '==', section_id).get().then(async function (orderSnapshots) {
NEXT: var paymentData = orderSnapshots.docs;

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vehicleType\edit.blade.php
LINE: 295
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vehicleType\index.blade.php
LINE: 84
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\chat.blade.php
LINE: 73
TEXT: database.collection('users').doc(id).get().then(async function(userSnapshot) {
NEXT: if (userSnapshot.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\chat.blade.php
LINE: 203
TEXT: const userDoc = await database.collection('users').doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\chat.blade.php
LINE: 308
TEXT: const userDoc = await database.collection("users").doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\create.blade.php
LINE: 224
TEXT: var emailSetting=database.collection('settings').doc('emailSetting');
NEXT: let businessModelData = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\create.blade.php
LINE: 230
TEXT: let businessModelRef = await database.collection('settings').doc("vendor").get();
NEXT: businessModelData = businessModelRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\create.blade.php
LINE: 244
TEXT: let documentVerify = await database.collection('settings').doc('document_verification_settings').get();
NEXT: let documentSettings = documentVerify.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\create.blade.php
LINE: 258
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\create.blade.php
LINE: 378
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\document_list.blade.php
LINE: 71
TEXT: var allDriver = database.collection('users').where('role','==','vendor');
NEXT: var ref = database.collection('users').where("id", "==", id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\document_list.blade.php
LINE: 72
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var docsRef = database.collection('documents').where('enable', '==', true).where('type','==','vendor');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\document_list.blade.php
LINE: 296
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': true, isActive: true });
NEXT: }else{

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\document_list.blade.php
LINE: 300
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\document_list.blade.php
LINE: 305
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\document_upload.blade.php
LINE: 36
TEXT: var allVendor = database.collection('users').where('role', '==', 'vendor');
NEXT: var driverRef= database.collection('users').where('id','==',id);

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\document_upload.blade.php
LINE: 37
TEXT: var driverRef= database.collection('users').where('id','==',id);
NEXT: var database = firebase.firestore();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\document_upload.blade.php
LINE: 50
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\document_upload.blade.php
LINE: 338
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': true, isActive:true });
NEXT: } else {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\document_upload.blade.php
LINE: 342
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\document_upload.blade.php
LINE: 347
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\edit.blade.php
LINE: 231
TEXT: database.collection('users').where("id", "==", id).get().then(function(snapshot) {
NEXT: if (!snapshot.empty) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\edit.blade.php
LINE: 251
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\edit.blade.php
LINE: 266
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\edit.blade.php
LINE: 304
TEXT: await database.collection('users').where("id", "==",id).get().then(async function (snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\edit.blade.php
LINE: 429
TEXT: await database.collection('users').doc(ownerId).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\edit.blade.php
LINE: 439
TEXT: await geoFirestore.collection('vendors').doc(store_id).update({
NEXT: 'authorName': userFirstName +' ' +userLastName,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\edit.blade.php
LINE: 484
TEXT: const userRef = database.collection('users').doc(ownerId);
NEXT: const userDoc = await userRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\edit.blade.php
LINE: 490
TEXT: database.collection('users').doc(ownerId).update({
NEXT: 'subscriptionExpiryDate': subscriptionPlanExpiryDate,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php
LINE: 180
TEXT: ref = database.collection('users').where("role", "==", "vendor");
NEXT: if(section_id){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php
LINE: 200
TEXT: var ref = database.collection('users').where("role", "==", "vendor");
NEXT: if(section_id){

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php
LINE: 222
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php
LINE: 673
TEXT: let vendorRef = await database.collection('vendors').doc(vendorId).get();
NEXT: let vendorData = vendorRef.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php
LINE: 712
TEXT: await database.collection('wallet').where('user_id', '==', userId).get().then(async function (snapshotsItem) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php
LINE: 718
TEXT: database.collection('wallet').doc(item_data.id).delete().then(function () {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php
LINE: 755
TEXT: database.collection('settings').doc("Version").get().then(function(snapshot) {
NEXT: var settingData=snapshot.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php
LINE: 816
TEXT: database.collection('users').doc(id).update({'active': true}).then(function (result) {
NEXT: });

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php
LINE: 819
TEXT: database.collection('users').doc(id).update({'active': false}).then(function (result) {
NEXT: });

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors_payouts\create.blade.php
LINE: 169
TEXT: var emailSetting = database.collection('settings').doc('emailSetting');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors_payouts\create.blade.php
LINE: 197
TEXT: await database.collection('vendor_orders').where('vendor.id', '==', vendorID).where("status", "in", ["Order Completed"]).get().then(async function (orderSnapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors_payouts\create.blade.php
LINE: 299
TEXT: database.collection('vendors').where('section_id', '==', section_id).get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors_payouts\create.blade.php
LINE: 360
TEXT: database.collection('users').where("vendorID", "==", vendorID).where('role','==','vendor').get().then(function (snapshotss) {
NEXT: if (snapshotss.docs.length) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors_payouts\create.blade.php
LINE: 363
TEXT: database.collection('users').doc(userdata.id).update({'wallet_amount': price}).then(async function (result) {
NEXT: if (currencyAtRight) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors_payouts\create.blade.php
LINE: 452
TEXT: await database.collection('users').where("vendorID", "==", vendorID).where('role','==','vendor').get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs.length) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors_payouts\create.blade.php
LINE: 469
TEXT: await database.collection('vendors').where('id', "==", vendorUser).get().then(async function (vendorSnapshots) {
NEXT: var vendorData = vendorSnapshots.docs[0].data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors_payouts\create.blade.php
LINE: 481
TEXT: await database.collection('users').where('vendorID', "==", vendorUser).where('role','==','vendor').get().then(async function (vendorSnapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors_payouts\index.blade.php
LINE: 686
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors_payouts\index.blade.php
LINE: 872
TEXT: await database.collection('vendors').where("id", "==", vendor).get().then(async function(snapshotss) {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php
LINE: 182
TEXT: var ref = database.collection('zone');
NEXT: $(document).ready(function() {

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php
LINE: 214
TEXT: database.collection('zone').doc(id).set({
NEXT: 'id': id,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php
LINE: 299
TEXT: database.collection('zone').doc(id).set({
NEXT: 'id': id,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php
LINE: 339
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php
LINE: 183
TEXT: var ref = database.collection('zone').where("id", "==", id);
NEXT: var default_lat = getCookie('default_latitude');

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php
LINE: 193
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php
LINE: 303
TEXT: database.collection('zone').doc(id).set({
NEXT: 'id': id,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php
LINE: 402
TEXT: database.collection('zone').doc(id).set({
NEXT: 'id': id,

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php
LINE: 89
TEXT: var ref = database.collection('zone');
NEXT: var append_list = '';

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php
LINE: 184
TEXT: database.collection('zone').doc(dataId).delete().then(function () {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php
LINE: 197
TEXT: database.collection('zone').doc(id).update({
NEXT: 'publish': true

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php
LINE: 202
TEXT: database.collection('zone').doc(id).update({
NEXT: 'publish': false

FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php
LINE: 211
TEXT: database.collection('zone').doc(id).delete().then(function (result) {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\cabScheduleRide.js
LINE: 66
TEXT: .collection("users")
NEXT: .where('role', '==', "driver")

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\cabScheduleRide.js
LINE: 108
TEXT: const ownerDoc = await firestore.collection("users").doc(driver.ownerId).get();
NEXT: if (ownerDoc.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\cabScheduleRide.js
LINE: 128
TEXT: const zoneDoc = await firestore.collection('zone').doc(driver.zoneId).get();
NEXT: if (zoneDoc.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\cabScheduleRide.js
LINE: 171
TEXT: await firestore.collection('users').doc(driver.id).update({ ordercabRequestData: orderData });

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\cabScheduleRide.js
LINE: 181
TEXT: await firestore.collection('users').doc(driver.id).update({ ordercabRequestData: null });
NEXT: rejectedByDrivers.push(driver.id);

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\cabScheduleRide.js
LINE: 215
TEXT: const snapshot = await firestore.collection("settings").doc('DriverNearBy').get();
NEXT: return snapshot.data();

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 17
TEXT: const timingSnapshot = await firestore.collection('settings').doc("DriverNearBy").get();
NEXT: if (!timingSnapshot.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 28
TEXT: const orderPlacedSnapshot = await firestore.collection('vendor_orders').where('status', '==', 'Order Placed').get();
NEXT: for (const doc of orderPlacedSnapshot.docs) {

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 56
TEXT: .collection('vendor_orders')
NEXT: .where('status', '==', 'Order Accepted')

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 105
TEXT: const walletSnap = await firestore.collection('wallet')
NEXT: .where('user_id', '==', vendorId)

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 125
TEXT: const vendorRef = firestore.collection('users').doc(vendorId);
NEXT: const vendorSnap = await vendorRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 139
TEXT: await firestore.collection('wallet').doc(baseRevId).set({
NEXT: amount: vendorBase,

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 154
TEXT: await firestore.collection('wallet').doc(taxRevId).set({
NEXT: amount: vendorTax,

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 173
TEXT: const custSnap = await firestore.collection('users').doc(customerId).get();
NEXT: if (custSnap.exists) customerFcm = custSnap.data().fcmToken || null;

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 176
TEXT: const vendSnap = await firestore.collection('users').doc(vendorId).get();
NEXT: if (vendSnap.exists) vendorFcm = vendSnap.data().fcmToken || null;

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 289
TEXT: const customerRef = firestore.collection('users').doc(customerId);
NEXT: const snap = await customerRef.get();

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 298
TEXT: await firestore.collection('wallet').doc(wid).set({
NEXT: amount: finalRefund,

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 317
TEXT: const custSnap = await firestore.collection('users').doc(customerId).get();
NEXT: if (custSnap.exists) customerFcm = custSnap.data().fcmToken || null;

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorOrderAutoCancel.js
LINE: 320
TEXT: const vendSnap = await firestore.collection('users').doc(orderData.vendor?.author).get();
NEXT: if (vendSnap.exists) vendorFcm = vendSnap.data().fcmToken || null;

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorScheduledOrderNotification.js
LINE: 21
TEXT: const timingSnapshot = await firestore.collection('settings').doc("scheduleOrderNotification").get();
NEXT: if (!timingSnapshot.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorScheduledOrderNotification.js
LINE: 34
TEXT: const ordersSnapshot = await firestore.collection('vendor_orders').where('status', '==', 'Order Placed').where('scheduleTime','!=',null).get();

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorScheduledOrderNotification.js
LINE: 59
TEXT: await firestore.collection("vendor_orders").doc(data.id).update({
NEXT: notificationSent: true

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\multivendorScheduledOrderNotification.js
LINE: 79
TEXT: const vendorDoc = await firestore.collection('users').doc(vendorUserId).get();

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\onDemandOrderAutoCancel.js
LINE: 105
TEXT: const userRef= await db.collection('users').where('id','==',userId).get();
NEXT: 

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\onDemandOrderAutoCancel.js
LINE: 118
TEXT: db.collection('users').doc(userId).update({'wallet_amount': newWalletAmount}).then(async function (result) {
NEXT: var walletId = db.collection("tmp").doc().id;

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\onDemandOrderAutoCancel.js
LINE: 120
TEXT: await db.collection('wallet').doc(walletId).set({
NEXT: 'amount': parseFloat(refundAmount),

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\onDemandOrderAutoCancel.js
LINE: 136
TEXT: await db.collection('wallet').doc(walletId).set({
NEXT: 'amount': parseFloat(refundAmount),

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\onDemandOrderAutoCancel.js
LINE: 149
TEXT: const providerRef= await db.collection('users').where('id','==',providerId).get();
NEXT: if(providerRef.size > 0) {

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\onDemandOrderAutoCancel.js
LINE: 157
TEXT: db.collection('users').doc(providerId).update({'wallet_amount': newWalletAmount}).then(async function (result) {
NEXT: return null

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\onDemandOrderAutoCancel.js
LINE: 188
TEXT: await db.collection('wallet').doc(walletId).set({
NEXT: 'amount': parseFloat(adminCommision),

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\parcelOrderAutoCancel.js
LINE: 51
TEXT: const customerDoc = await firestore.collection('users').doc(customerId).get();
NEXT: if (customerDoc.exists) {

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\parcelOrderAutoCancel.js
LINE: 63
TEXT: await firestore.collection('wallet').doc(walletId).set({
NEXT: amount: totalPrice,

FILE: C:\deploy\adminpanel\Admin Panel\storage\app\firebase\rentalOrderAutoCancel.js
LINE: 47
TEXT: const customerDoc = await firestore.collection('users').doc(customerId).get();
NEXT: if (!customerDoc.exists) return;

FILE: C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php
LINE: 72
TEXT: await database.collection('vendors').doc(vendorId).get().then(async function(vendorSnapshot) {
NEXT: if (vendorSnapshot.exists) {

FILE: C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php
LINE: 85
TEXT: await database.collection('users').doc(receiverId).get().then(async function(userSnapshot) {
NEXT: if (userSnapshot.exists) {

FILE: C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php
LINE: 180
TEXT: const vendorDoc = await database.collection('vendors').doc(advData.vendorId).get();
NEXT: vendorData = vendorDoc.data();

FILE: C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php
LINE: 280
TEXT: const vendorDoc = await database.collection("vendors").doc(advData.vendorId).get();
NEXT: const vendorData = vendorDoc.data();

FILE: C:\deploy\adminpanel\resources\views\advertisements\create.blade.php
LINE: 255
TEXT: var refVendor = database.collection('vendors');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php
LINE: 214
TEXT: var refVendor = database.collection('vendors');
NEXT: var storage = firebase.storage();

FILE: C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php
LINE: 399
TEXT: database.collection('vendors').where('id', "==", vendorId).get().then(async function(vendorSnapshots) {
NEXT: if (vendorSnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\advertisements\index.blade.php
LINE: 226
TEXT: database.collection('vendors').where("id", "==", '<?php echo $id; ?>').get().then(async function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\advertisements\index.blade.php
LINE: 274
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\advertisements\index.blade.php
LINE: 536
TEXT: const vendorRef = database.collection('vendors').where('id', '==', vendorid);
NEXT: const vendorSnapshot = await vendorRef.get();

FILE: C:\deploy\adminpanel\resources\views\advertisements\index.blade.php
LINE: 539
TEXT: const vendor_userRef = database.collection('users').where('vendorID', '==', vendorid).where('role', '==', 'vendor');
NEXT: const vendor_userSnapshot = await vendor_userRef.get();

FILE: C:\deploy\adminpanel\resources\views\advertisements\index.blade.php
LINE: 721
TEXT: await database.collection('users').where('vendorID', '==', data.vendorId).where('role', '==', 'vendor').get().then(async function(snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\advertisements\index.blade.php
LINE: 751
TEXT: let vendorSnapshot = await database.collection('vendors')
NEXT: .where('id', '==', vendorId)

FILE: C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php
LINE: 142
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php
LINE: 341
TEXT: const vendorRef = database.collection('vendors').where('id', '==', vendorid);
NEXT: const vendorSnapshot = await vendorRef.get();

FILE: C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php
LINE: 343
TEXT: const vendor_userRef = database.collection('users').where('vendorID', '==', vendorid).where('role', '==', 'vendor');
NEXT: const vendor_userSnapshot = await vendor_userRef.get();

FILE: C:\deploy\adminpanel\resources\views\advertisements\view.blade.php
LINE: 273
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var vendorFcm = '';

FILE: C:\deploy\adminpanel\resources\views\advertisements\view.blade.php
LINE: 410
TEXT: database.collection('vendors').where('id', '==', vendorId).get().then(async function(snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\advertisements\view.blade.php
LINE: 414
TEXT: await database.collection('users').doc(vendorUserId).get().then(async function(snapshots) {
NEXT: if (snapshots.exists) {

FILE: C:\deploy\adminpanel\resources\views\auth\login.blade.php
LINE: 980
TEXT: database.collection('settings').doc("globalSettings").get().then(async function(snapshots) {
NEXT: var globalSettings = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\banners\create.blade.php
LINE: 566
TEXT: var ref_vendors = database.collection('vendors').where('section_id', '==', sectionId);

FILE: C:\deploy\adminpanel\resources\views\banners\edit.blade.php
LINE: 222
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\banners\edit.blade.php
LINE: 647
TEXT: var ref_vendors = database.collection('vendors').where('section_id', '==', sectionId);

FILE: C:\deploy\adminpanel\resources\views\banners\index.blade.php
LINE: 102
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\bookTable\edit.blade.php
LINE: 222
TEXT: database.collection('users').where('id', '==', auth).get().then(function (snapshots) {
NEXT: if (snapshots.length && type == '') {

FILE: C:\deploy\adminpanel\resources\views\bookTable\index.blade.php
LINE: 195
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\bookTable\index.blade.php
LINE: 243
TEXT: database.collection('vendors').where('id', '==', vendorId).get().then(function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\bookTable\index.blade.php
LINE: 424
TEXT: database.collection('users').where('id', '==', auth).get().then(function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\bookTable\index.blade.php
LINE: 467
TEXT: database.collection('users').where('id', '==', auth).get().then(function(snapshots) {
NEXT: if (snapshots.docs.length) {

FILE: C:\deploy\adminpanel\resources\views\brands\edit.blade.php
LINE: 63
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\brands\index.blade.php
LINE: 111
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\bulk_import_products\edit.blade.php
LINE: 451
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\bulk_import_products\edit.blade.php
LINE: 467
TEXT: var refAdminCommission = database.collection('settings').doc("AdminCommission");
NEXT: refAdminCommission.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\bulk_import_products\edit.blade.php
LINE: 570
TEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");
NEXT: digitalProductRef.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\bulk_import_products\index.blade.php
LINE: 149
TEXT: var placeholder=database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\categories\create.blade.php
LINE: 115
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\resources\views\categories\edit.blade.php
LINE: 117
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storage = firebase.storage();

FILE: C:\deploy\adminpanel\resources\views\categories\index.blade.php
LINE: 123
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\complaints\edit.blade.php
LINE: 182
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\complaints\edit.blade.php
LINE: 197
TEXT: var alovelaceDocumentRef = database.collection('vendor_orders').doc();
NEXT: if (alovelaceDocumentRef.id) {

FILE: C:\deploy\adminpanel\resources\views\complaints\edit.blade.php
LINE: 247
TEXT: var user = await database.collection('users').where("id", "==", customerId).get().then(async function (usersnapshots) {
NEXT: if(!usersnapshots.empty){

FILE: C:\deploy\adminpanel\resources\views\complaints\edit.blade.php
LINE: 277
TEXT: var driver = database.collection('users').where("id", "==", ride.driverId);
NEXT: driver.get().then(async function (snapshotsnew) {

FILE: C:\deploy\adminpanel\resources\views\complaints\edit.blade.php
LINE: 315
TEXT: var driver = database.collection('users').where("id", '==', ride.riderId);
NEXT: driver.get().then(async function (snapshotsnew) {

FILE: C:\deploy\adminpanel\resources\views\coupons\create.blade.php
LINE: 162
TEXT: database.collection('vendors').where('section_id', '==', section_id).get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\coupons\edit.blade.php
LINE: 157
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storage = firebase.storage();

FILE: C:\deploy\adminpanel\resources\views\coupons\edit.blade.php
LINE: 180
TEXT: await database.collection('vendors').where('section_id', '==', section_id).get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\coupons\index.blade.php
LINE: 211
TEXT: const storeDocs = await database.collection('vendors').get();
NEXT: storeDocs.forEach(doc => {

FILE: C:\deploy\adminpanel\resources\views\coupons\index.blade.php
LINE: 345
TEXT: const vendorSnap = await database.collection('vendors').where('id', '==', vendorId).get();
NEXT: if (!vendorSnap.empty) {

FILE: C:\deploy\adminpanel\resources\views\dashboard\cab.blade.php
LINE: 315
TEXT: var currency = db.collection('settings');
NEXT: var intercity_enabled = false;

FILE: C:\deploy\adminpanel\resources\views\dashboard\cab.blade.php
LINE: 331
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\dashboard\cab.blade.php
LINE: 433
TEXT: ref = db.collection('users').where('role', '==', 'customer');
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\dashboard\cab.blade.php
LINE: 463
TEXT: ref = db.collection('users').where('role', '==', 'driver').where('isOwner','==',false);

FILE: C:\deploy\adminpanel\resources\views\dashboard\cab.blade.php
LINE: 1188
TEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\cab.blade.php
LINE: 1189
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\cab.blade.php
LINE: 1193
TEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\cab.blade.php
LINE: 1194
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\cab.blade.php
LINE: 1198
TEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\resources\views\dashboard\cab.blade.php
LINE: 1199
TEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: ])

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 789
TEXT: var currency = db.collection('settings');

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 805
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 921
TEXT: let ordersQuery = withSectionFilter(db.collection('vendor_orders').where('status', 'in', ["Order Completed"]), active_id);
NEXT: if (filterType) {

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 927
TEXT: ? db.collection('vendor_orders')
NEXT: .where('status', 'in', ["Order Completed"])

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1219
TEXT: let query = withSectionFilter(db.collection('vendor_orders').where('status', 'in', statusArray), active_id);
NEXT: if (startTS && endTS) {

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1758
TEXT: let refVendor = withSectionFilter(db.collection('vendors'), active_id).orderBy('reviewsCount', 'desc').limit(5);
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1771
TEXT: ref = withSectionFilter(db.collection('vendor_orders'), active_id)
NEXT: .where('status', 'in', ["Order Placed", "Order Accepted", "Driver Pending", "Driver Accepted", "Order Shipped", "In Transit"]);

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1786
TEXT: ref = withServiceTypeFilter(db.collection('users').where('role', '==', 'driver'), active_type);

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1837
TEXT: withSectionFilter(db.collection('vendor_orders'), active_id).orderBy('createdAt', 'desc').get(),
NEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1838
TEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),
NEXT: withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).orderBy('createdAt', 'desc').get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1839
TEXT: withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).orderBy('createdAt', 'desc').get(),
NEXT: withSectionFilter(db.collection('vendors'), active_id).get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1840
TEXT: withSectionFilter(db.collection('vendors'), active_id).get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1843
TEXT: withSectionFilter(db.collection('vendor_orders'), active_id).orderBy('createdAt', 'desc').where('createdAt', '<=', endThisTS).get(),
NEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1844
TEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),
NEXT: withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy('createdAt', 'desc').get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1845
TEXT: withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy('createdAt', 'desc').get(),
NEXT: withSectionFilter(db.collection('vendors'), active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1846
TEXT: withSectionFilter(db.collection('vendors'), active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1849
TEXT: startLastTS ? withSectionFilter(db.collection('vendor_orders'), active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1850
TEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy('createdAt', 'desc').get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1851
TEXT: startLastTS ? withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy('createdAt', 'desc').get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? withSectionFilter(db.collection('vendors'), active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] })

FILE: C:\deploy\adminpanel\resources\views\dashboard\delivery.blade.php
LINE: 1852
TEXT: startLastTS ? withSectionFilter(db.collection('vendors'), active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] })
NEXT: ])

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 297
TEXT: var currency = db.collection('settings');

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 313
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 431
TEXT: let ordersQuery = db.collection('vendor_orders')
NEXT: .where('status', 'in', ["Order Completed"])

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 441
TEXT: ? db.collection('vendor_orders')
NEXT: .where('status', 'in', ["Order Completed"])

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 836
TEXT: let query = db.collection('vendor_orders')
NEXT: .where('status', 'in', statusArray)

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 878
TEXT: ref = db.collection('vendors').where('section_id', '==', active_id);

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 894
TEXT: ref = db.collection('vendor_orders')
NEXT: .where('vendor.section_id', '==', active_id)

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 1356
TEXT: db.collection('vendor_orders').where('section_id', '==', active_id).orderBy('createdAt').get(),
NEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 1357
TEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),
NEXT: db.collection('vendors').where('section_id', '==', active_id).get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 1358
TEXT: db.collection('vendors').where('section_id', '==', active_id).get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 1361
TEXT: db.collection('vendor_orders').where('section_id', '==', active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy('createdAt').get(),
NEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 1362
TEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),
NEXT: db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 1363
TEXT: db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 1366
TEXT: startLastTS ? db.collection('vendor_orders').where('section_id', '==', active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy('createdAt').get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 1367
TEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] })

FILE: C:\deploy\adminpanel\resources\views\dashboard\ecommerce.blade.php
LINE: 1368
TEXT: startLastTS ? db.collection('vendors').where('section_id', '==', active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] })
NEXT: ])

FILE: C:\deploy\adminpanel\resources\views\dashboard\ondemand.blade.php
LINE: 345
TEXT: var currency = db.collection('settings');
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\dashboard\ondemand.blade.php
LINE: 361
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\dashboard\ondemand.blade.php
LINE: 480
TEXT: ref = db.collection('users').where('role', '==', 'provider').where('section_id', '==', active_id);
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\dashboard\ondemand.blade.php
LINE: 691
TEXT: db.collection('users').where("role", "==", "provider").where('section_id', 'in', [active_id, '']).orderBy('createdAt', 'desc').get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\ondemand.blade.php
LINE: 697
TEXT: db.collection('users').where("role", "==", "provider").where('section_id', 'in', [active_id, '']).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy('createdAt', 'desc').get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\ondemand.blade.php
LINE: 703
TEXT: startLastTS ? db.collection('users').where("role", "==", "provider").where('section_id', 'in', [active_id, '']).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy('createdAt', 'desc').get() : Promise.resolve({ docs: [] }),
NEXT: ])

FILE: C:\deploy\adminpanel\resources\views\dashboard\parcel.blade.php
LINE: 311
TEXT: var currency = db.collection('settings');

FILE: C:\deploy\adminpanel\resources\views\dashboard\parcel.blade.php
LINE: 327
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\dashboard\parcel.blade.php
LINE: 425
TEXT: ref = db.collection('users').where('role', '==', 'customer');
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\dashboard\parcel.blade.php
LINE: 449
TEXT: ref = db.collection('users').where('role', '==', 'driver').where('sectionId', '==', active_id).where('isOwner','==',false);
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\dashboard\parcel.blade.php
LINE: 1008
TEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt",'desc').get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\parcel.blade.php
LINE: 1009
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt",'desc').get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\parcel.blade.php
LINE: 1013
TEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt",'desc').get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\parcel.blade.php
LINE: 1014
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt",'desc').get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\parcel.blade.php
LINE: 1018
TEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt",'desc').get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\resources\views\dashboard\parcel.blade.php
LINE: 1019
TEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt",'desc').get() : Promise.resolve({ docs: [] }),
NEXT: ])

FILE: C:\deploy\adminpanel\resources\views\dashboard\rental.blade.php
LINE: 311
TEXT: var currency = db.collection('settings');

FILE: C:\deploy\adminpanel\resources\views\dashboard\rental.blade.php
LINE: 327
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\dashboard\rental.blade.php
LINE: 424
TEXT: ref = db.collection('users').where('role', '==', 'customer');
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\dashboard\rental.blade.php
LINE: 446
TEXT: ref = db.collection('users').where('role', '==', 'driver').where('isOwner','==',false);
NEXT: if (typeof active_id !== 'undefined' && active_id) {

FILE: C:\deploy\adminpanel\resources\views\dashboard\rental.blade.php
LINE: 864
TEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\rental.blade.php
LINE: 865
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\rental.blade.php
LINE: 869
TEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),
NEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\rental.blade.php
LINE: 870
TEXT: db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\resources\views\dashboard\rental.blade.php
LINE: 874
TEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\resources\views\dashboard\rental.blade.php
LINE: 875
TEXT: startLastTS ? db.collection('users').where("role", "==", "driver").where('sectionId', '==', active_id).where('isOwner','==',false).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: ])

FILE: C:\deploy\adminpanel\resources\views\deliveryman\create.blade.php
LINE: 151
TEXT: var refVendor = database.collection('vendors');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\resources\views\deliveryman\create.blade.php
LINE: 160
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\deliveryman\create.blade.php
LINE: 183
TEXT: let vendorRef = await database.collection('vendors').doc(vendorId).get();
NEXT: vendorData = vendorRef.data();

FILE: C:\deploy\adminpanel\resources\views\deliveryman\create.blade.php
LINE: 195
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function(snapshot) {

FILE: C:\deploy\adminpanel\resources\views\deliveryman\create.blade.php
LINE: 265
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\resources\views\deliveryman\edit.blade.php
LINE: 157
TEXT: var refVendor = database.collection('vendors');
NEXT: var section_id = getCookie('section_id') || '';

FILE: C:\deploy\adminpanel\resources\views\deliveryman\edit.blade.php
LINE: 162
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\deliveryman\edit.blade.php
LINE: 163
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var sectionIds = [];

FILE: C:\deploy\adminpanel\resources\views\deliveryman\edit.blade.php
LINE: 296
TEXT: database.collection('users').doc(id).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\resources\views\deliveryman\index.blade.php
LINE: 175
TEXT: database.collection('vendors').where("id", "==", '{{ $id }}').get().then(async function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\deliveryman\index.blade.php
LINE: 193
TEXT: ref = database.collection('users').where("role", "==", "driver").where("vendorID", "==", id);
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\deliveryman\index.blade.php
LINE: 195
TEXT: ref = database.collection('users').where("role", "==", "driver");
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\deliveryman\index.blade.php
LINE: 217
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\deliveryman\index.blade.php
LINE: 288
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\deliveryman\index.blade.php
LINE: 461
TEXT: const totalOrderSnapShot = await database.collection('vendor_orders').where('driverID', '==', childData.id).get();
NEXT: const orders = totalOrderSnapShot.size;

FILE: C:\deploy\adminpanel\resources\views\deliveryman\index.blade.php
LINE: 607
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\resources\views\deliveryman\index.blade.php
LINE: 613
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\resources\views\deliveryman\index.blade.php
LINE: 672
TEXT: const vendorRef = database.collection('vendors').where('id', '==', vendorid);
NEXT: const vendorSnapshot = await vendorRef.get();

FILE: C:\deploy\adminpanel\resources\views\deliveryman\index.blade.php
LINE: 675
TEXT: const vendor_userRef = database.collection('users').where('vendorID', '==', vendorid).where('role', '==', 'vendor');
NEXT: const vendor_userSnapshot = await vendor_userRef.get();

FILE: C:\deploy\adminpanel\resources\views\destinations\create.blade.php
LINE: 142
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\destinations\edit.blade.php
LINE: 148
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\destinations\index.blade.php
LINE: 101
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\documents\create.blade.php
LINE: 80
TEXT: var alldriver = database.collection('users').where('role', '==', 'driver');
NEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');

FILE: C:\deploy\adminpanel\resources\views\documents\create.blade.php
LINE: 81
TEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');
NEXT: $(document).ready(function () {

FILE: C:\deploy\adminpanel\resources\views\documents\create.blade.php
LINE: 160
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true, isActive: true });
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\documents\create.blade.php
LINE: 162
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\documents\create.blade.php
LINE: 168
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\documents\create.blade.php
LINE: 170
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\documents\create.blade.php
LINE: 177
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false , isActive: false});
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\documents\create.blade.php
LINE: 179
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\documents\edit.blade.php
LINE: 82
TEXT: var alldriver = database.collection('users').where('role', '==', 'driver');
NEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');

FILE: C:\deploy\adminpanel\resources\views\documents\edit.blade.php
LINE: 83
TEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');
NEXT: var enableFront = false;

FILE: C:\deploy\adminpanel\resources\views\documents\edit.blade.php
LINE: 219
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true, isActive: true });
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\documents\edit.blade.php
LINE: 221
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\documents\edit.blade.php
LINE: 227
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\documents\edit.blade.php
LINE: 229
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\documents\edit.blade.php
LINE: 236
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\documents\edit.blade.php
LINE: 238
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 88
TEXT: var alldriver = database.collection('users').where('role', '==', 'driver');
NEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 89
TEXT: var allvendor = database.collection('users').where('role', '==', 'vendor');
NEXT: var user_permissions = '<?php echo @session("user_permissions") ?>';

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 311
TEXT: let driverSnapshots = await database.collection('users').where('role', '==', 'driver').where('isDocumentVerify', '==', false).get();
NEXT: if (driverSnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 322
TEXT: let vendorSnapshots = await database.collection('users').where('role', '==', 'vendor').where('isDocumentVerify', '==', false).get();
NEXT: if (vendorSnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 359
TEXT: await database.collection('users').where('role', '==', 'driver').where('isDocumentVerify', '==', false).get().then(async function (snapshotsdriver) {
NEXT: if (snapshotsdriver.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 372
TEXT: await database.collection('users').where('role', '==', 'vendor').where('isDocumentVerify', '==', false).get().then(async function (snapshotsvendor) {
NEXT: if (snapshotsvendor.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 404
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true, isActive: true });
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 406
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': true });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 412
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 414
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 421
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\documents\index.blade.php
LINE: 423
TEXT: await database.collection('users').doc(driver.id).update({ 'isDocumentVerify': false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\drivers\chat.blade.php
LINE: 73
TEXT: database.collection('users').doc(id).get().then(async function(userSnapshot) {
NEXT: if (userSnapshot.exists) {

FILE: C:\deploy\adminpanel\resources\views\drivers\chat.blade.php
LINE: 308
TEXT: const userDoc = await database.collection("users").doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\resources\views\drivers\create.blade.php
LINE: 215
TEXT: var refZone = database.collection('zone').where('publish', '==', true);
NEXT: var refCarMake = database.collection('car_make');

FILE: C:\deploy\adminpanel\resources\views\drivers\create.blade.php
LINE: 250
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\resources\views\drivers\create.blade.php
LINE: 270
TEXT: let documentVerify = await database.collection('settings').doc('document_verification_settings').get();
NEXT: let documentSettings = documentVerify.exists ? documentVerify.data() : null;

FILE: C:\deploy\adminpanel\resources\views\drivers\create.blade.php
LINE: 621
TEXT: geoFirestore.collection('users').doc(id).set({
NEXT: 'appIdentifier': 'web',

FILE: C:\deploy\adminpanel\resources\views\drivers\document_list.blade.php
LINE: 71
TEXT: var allDriver = database.collection('users').where('role','==','driver');
NEXT: var ref = database.collection('users').where("id", "==", id);

FILE: C:\deploy\adminpanel\resources\views\drivers\document_list.blade.php
LINE: 72
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var docsRef = database.collection('documents').where('enable', '==', true).where('type','==','driver');

FILE: C:\deploy\adminpanel\resources\views\drivers\document_list.blade.php
LINE: 296
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': true, isActive: true });
NEXT: }else{

FILE: C:\deploy\adminpanel\resources\views\drivers\document_list.blade.php
LINE: 300
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\drivers\document_list.blade.php
LINE: 305
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\drivers\document_upload.blade.php
LINE: 37
TEXT: var allVendor = database.collection('users').where('role', '==', 'driver');
NEXT: var driverRef= database.collection('users').where('id','==',id);

FILE: C:\deploy\adminpanel\resources\views\drivers\document_upload.blade.php
LINE: 38
TEXT: var driverRef= database.collection('users').where('id','==',id);
NEXT: var database = firebase.firestore();

FILE: C:\deploy\adminpanel\resources\views\drivers\document_upload.blade.php
LINE: 51
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\drivers\document_upload.blade.php
LINE: 337
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': true, isActive:true });
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\drivers\document_upload.blade.php
LINE: 341
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\drivers\document_upload.blade.php
LINE: 346
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\drivers\edit.blade.php
LINE: 230
TEXT: var refZone = database.collection('zone').where('publish', '==', true);
NEXT: var refCarMake = database.collection('car_make');

FILE: C:\deploy\adminpanel\resources\views\drivers\edit.blade.php
LINE: 238
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\drivers\edit.blade.php
LINE: 244
TEXT: var currency = database.collection('settings');
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\resources\views\drivers\edit.blade.php
LINE: 299
TEXT: let userRef = await database.collection('users').doc(id).get();
NEXT: let user = userRef.data();

FILE: C:\deploy\adminpanel\resources\views\drivers\edit.blade.php
LINE: 787
TEXT: database.collection('users').doc(id).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\resources\views\drivers\edit.blade.php
LINE: 854
TEXT: await database.collection('vendor_orders').where('driverID', '==', id).get().then(async function (orderSnapshots) {
NEXT: count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 300
TEXT: let query = database.collection('users')
NEXT: .where("role", "==", "driver");

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 393
TEXT: .collection('users')
NEXT: .where("role", "==", "driver")

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 418
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 686
TEXT: database.collection('vendor_orders').where('driverID', '==', listval.id).where("status", "in", ["Order Completed"]).get().then(async function(orderSnapshots) {
NEXT: var count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 688
TEXT: database.collection('users').doc(listval.id).update({
NEXT: 'orderCompleted': count_order_complete

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 836
TEXT: const ordersSnapshot = await database.collection('vendor_orders').where('driverID', '==', driverId).get();
NEXT: totalOrders += ordersSnapshot.docs.length;

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 850
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': true

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 854
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': false

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 863
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 867
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 884
TEXT: const car_info = database.collection('users').doc(dataId).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\resources\views\drivers\index.blade.php
LINE: 964
TEXT: const car_info = database.collection('users').doc(id).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\resources\views\drivers\view.blade.php
LINE: 256
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\resources\views\drivers\view.blade.php
LINE: 263
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\drivers\view.blade.php
LINE: 269
TEXT: var currency = database.collection('settings');
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\resources\views\drivers\view.blade.php
LINE: 366
TEXT: const ordersSnapshot = await database.collection('vendor_orders').where('driverID', '==', dirver.id).get();
NEXT: totalOrders += ordersSnapshot.docs.length;

FILE: C:\deploy\adminpanel\resources\views\drivers\view.blade.php
LINE: 378
TEXT: database.collection('zone').doc(dirver.zoneId).get().then((zoneSnap) => {
NEXT: if (zoneSnap.exists) {

FILE: C:\deploy\adminpanel\resources\views\drivers\view.blade.php
LINE: 490
TEXT: database.collection('users').where('id', '==', id).get().then(async function (snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\drivers\view.blade.php
LINE: 499
TEXT: database.collection('users').doc(id).update({
NEXT: 'wallet_amount': newWalletAmount

FILE: C:\deploy\adminpanel\resources\views\drivers\view.blade.php
LINE: 503
TEXT: database.collection('wallet').doc(tempId).set({
NEXT: 'amount': parseFloat(amount),

FILE: C:\deploy\adminpanel\resources\views\drivers_payouts\create.blade.php
LINE: 94
TEXT: var emailSetting = database.collection('settings').doc('emailSetting');

FILE: C:\deploy\adminpanel\resources\views\drivers_payouts\create.blade.php
LINE: 131
TEXT: database.collection('users').where('role', '==', 'driver').get().then(async function(snapshots) {
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\drivers_payouts\create.blade.php
LINE: 175
TEXT: database.collection('users').doc(driverID).update({
NEXT: 'wallet_amount': price

FILE: C:\deploy\adminpanel\resources\views\drivers_payouts\create.blade.php
LINE: 246
TEXT: await database.collection('users').where('id', "==", driverId).get().then(async function(vendorSnapshots) {
NEXT: var driverData = vendorSnapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\drivers_payouts\create.blade.php
LINE: 257
TEXT: const doc = await database.collection('users').doc(driverID).get();
NEXT: const data = doc.data();

FILE: C:\deploy\adminpanel\resources\views\drivers_payouts\index.blade.php
LINE: 414
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\employee\index.blade.php
LINE: 163
TEXT: database.collection('vendors').where("id", "==", '{{ $id }}').get().then(async function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\employee\index.blade.php
LINE: 170
TEXT: ref = database.collection('users').where("role", "==", "employee").where("vendorID", "==", id);
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\employee\index.blade.php
LINE: 172
TEXT: ref = database.collection('users').where("role", "==", "employee");
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\employee\index.blade.php
LINE: 193
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\employee\index.blade.php
LINE: 258
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\employee\index.blade.php
LINE: 577
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\resources\views\employee\index.blade.php
LINE: 583
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\resources\views\employee\index.blade.php
LINE: 641
TEXT: database.collection('settings').doc("Version").get().then(function(snapshot) {
NEXT: var settingData = snapshot.data();

FILE: C:\deploy\adminpanel\resources\views\employee\index.blade.php
LINE: 666
TEXT: const vendorRef = database.collection('vendors').where('id', '==', vendorid);
NEXT: const vendorSnapshot = await vendorRef.get();

FILE: C:\deploy\adminpanel\resources\views\employee\index.blade.php
LINE: 669
TEXT: const vendor_userRef = database.collection('users').where('vendorID', '==', vendorid).where('role', '==', 'vendor');
NEXT: const vendor_userSnapshot = await vendor_userRef.get();

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\create.blade.php
LINE: 165
TEXT: var refZone = database.collection('zone').where('publish', '==', true);
NEXT: var refCarMake = database.collection('car_make');

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\create.blade.php
LINE: 168
TEXT: var refOwner = database.collection('users').where('isOwner', '==', true).where('role', '==', 'driver');
NEXT: var refCabVehicle = database.collection('vehicle_type');

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\create.blade.php
LINE: 204
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\create.blade.php
LINE: 253
TEXT: let userRef = await database.collection('users').doc(ownerId).get();
NEXT: let ownerData = userRef.data();

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\create.blade.php
LINE: 591
TEXT: geoFirestore.collection('users').doc(id).set({
NEXT: 'appIdentifier': 'web',

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\edit.blade.php
LINE: 150
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\edit.blade.php
LINE: 158
TEXT: var refZone = database.collection('zone').where('publish', '==', true);
NEXT: var refCarMake = database.collection('car_make');

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\edit.blade.php
LINE: 166
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\edit.blade.php
LINE: 172
TEXT: var currency = database.collection('settings');
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\edit.blade.php
LINE: 218
TEXT: let userRef = await database.collection('users').doc(id).get();
NEXT: let user = userRef.data();

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\edit.blade.php
LINE: 267
TEXT: let ownerRef = await database.collection('users').doc(ownerId).get();
NEXT: let ownerData = ownerRef.data();

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\edit.blade.php
LINE: 700
TEXT: database.collection('users').doc(id).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\edit.blade.php
LINE: 767
TEXT: await database.collection('vendor_orders').where('driverID', '==', id).get().then(async function (orderSnapshots) {
NEXT: count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 149
TEXT: ref = database.collection('users').where("role", "in", ["customer"]);
NEXT: if ($('#daterange span').html() != '{{ trans('lang.select_range') }}' && daterangepicker) {

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 168
TEXT: var ref = database.collection('users')
NEXT: .where('isOwner', '==', false)

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 176
TEXT: var alldriver = database.collection('users').where("role", "==", "driver").orderBy('createdAt', 'desc');
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 178
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 428
TEXT: database.collection('vendor_orders').where('driverID', '==', listval.id).where("status", "in", ["Order Completed"]).get().then(async function(orderSnapshots) {
NEXT: var count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 430
TEXT: database.collection('users').doc(listval.id).update({
NEXT: 'orderCompleted': count_order_complete

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 552
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': true

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 556
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': false

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 565
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 569
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 586
TEXT: const car_info = database.collection('users').doc(dataId).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\index.blade.php
LINE: 667
TEXT: const car_info = database.collection('users').doc(id).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\view.blade.php
LINE: 230
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\view.blade.php
LINE: 236
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\view.blade.php
LINE: 242
TEXT: var currency = database.collection('settings');
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\view.blade.php
LINE: 341
TEXT: database.collection('zone').doc(dirver.zoneId).get().then((zoneSnap) => {
NEXT: if (zoneSnap.exists) {

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\view.blade.php
LINE: 438
TEXT: database.collection('users').where('id', '==', id).get().then(async function (snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\view.blade.php
LINE: 447
TEXT: database.collection('users').doc(id).update({
NEXT: 'wallet_amount': newWalletAmount

FILE: C:\deploy\adminpanel\resources\views\fleet_drivers\view.blade.php
LINE: 451
TEXT: database.collection('wallet').doc(tempId).set({
NEXT: 'amount': parseFloat(amount),

FILE: C:\deploy\adminpanel\resources\views\footerTemplate\index.blade.php
LINE: 117
TEXT: var ref = database.collection('settings').doc('footerTemplate');

FILE: C:\deploy\adminpanel\resources\views\footerTemplate\index.blade.php
LINE: 133
TEXT: database.collection('settings').doc('footerTemplate').set({"footerTemplate": ""});

FILE: C:\deploy\adminpanel\resources\views\footerTemplate\index.blade.php
LINE: 212
TEXT: database.collection('settings').doc('footerTemplate').update({'footerTemplate': footerTemplate}).then(function (result) {

FILE: C:\deploy\adminpanel\resources\views\gift_card\index.blade.php
LINE: 99
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\gift_card\save.blade.php
LINE: 126
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\homepage_Template\index.blade.php
LINE: 125
TEXT: var ref = database.collection('settings').doc('homepageTemplate');

FILE: C:\deploy\adminpanel\resources\views\homepage_Template\index.blade.php
LINE: 210
TEXT: database.collection('settings').doc('homepageTemplate').update({'homepageTemplate':homepageTemplate}).then(function(result) {

FILE: C:\deploy\adminpanel\resources\views\items\create.blade.php
LINE: 477
TEXT: var subscriptionBusinessModel = database.collection('settings').doc("vendor");
NEXT: subscriptionBusinessModel.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\items\create.blade.php
LINE: 592
TEXT: database.collection('vendors').where('section_id', '==', section_id).orderBy('title').where('title','!=', '').get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\items\create.blade.php
LINE: 653
TEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");
NEXT: digitalProductRef.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\items\create.blade.php
LINE: 783
TEXT: var vendorRef = await database.collection('vendors').doc(set_vendor_id).get();
NEXT: var vendorData = vendorRef.data();

FILE: C:\deploy\adminpanel\resources\views\items\create.blade.php
LINE: 791
TEXT: await database.collection('users').where('id', '==', userId).get().then(async function(snapshots) {
NEXT: var data = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\items\create.blade.php
LINE: 1194
TEXT: database.collection('settings').doc('globalSettings').get().then(async function(snapshots) {
NEXT: let globalTax = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\items\create.blade.php
LINE: 1206
TEXT: database.collection('tax').where('enable','==',true).where('scope','==','product').where('country','==',countryName).where('sectionId','==',section_id).get().then(async function(snapshots) {
NEXT: if(snapshots.docs.length > 0){

FILE: C:\deploy\adminpanel\resources\views\items\create.blade.php
LINE: 1249
TEXT: database.collection('settings').doc('globalSettings').get().then(async function(snapshots) {
NEXT: let globalTax = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\items\create.blade.php
LINE: 1261
TEXT: database.collection('tax').where('enable','==',true).where('scope','==','product').where('country','==',countryName).where('sectionId','==',section_id).get().then(async function(snapshots) {
NEXT: if(snapshots.docs.length > 0){

FILE: C:\deploy\adminpanel\resources\views\items\create.blade.php
LINE: 1298
TEXT: database.collection('vendors').doc(selected_vendor).get().then(async function(snapshot) {
NEXT: if (snapshot.exists) {

FILE: C:\deploy\adminpanel\resources\views\items\edit.blade.php
LINE: 450
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var allowed_file_size = '';

FILE: C:\deploy\adminpanel\resources\views\items\edit.blade.php
LINE: 580
TEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");
NEXT: digitalProductRef.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\items\edit.blade.php
LINE: 596
TEXT: database.collection('vendors').where('section_id', '==', section_id).orderBy('title').where('title', '!=', '').get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\items\edit.blade.php
LINE: 1377
TEXT: database.collection('settings').doc('globalSettings').get().then(async function(snapshots) {
NEXT: let globalTax = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\items\edit.blade.php
LINE: 1389
TEXT: database.collection('tax').where('enable','==',true).where('scope','==','product').where('country','==',countryName).where('sectionId','==',section_id).get().then(async function(snapshots) {
NEXT: if(snapshots.docs.length > 0){

FILE: C:\deploy\adminpanel\resources\views\items\edit.blade.php
LINE: 1428
TEXT: await database.collection('vendors').doc(selected_vendor).get().then(async function(snapshot) {
NEXT: if (snapshot.exists) {

FILE: C:\deploy\adminpanel\resources\views\items\index.blade.php
LINE: 205
TEXT: let globalTaxSnapshot = await database.collection('settings').doc('globalSettings').get();
NEXT: let globalTax = globalTaxSnapshot.data();

FILE: C:\deploy\adminpanel\resources\views\items\index.blade.php
LINE: 237
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\items\index.blade.php
LINE: 262
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\items\index.blade.php
LINE: 476
TEXT: const vendorDocs = await database.collection('vendors').get();

FILE: C:\deploy\adminpanel\resources\views\items\index.blade.php
LINE: 1061
TEXT: await database.collection('vendors').where("id", "==", vendor).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\items\view.blade.php
LINE: 168
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\items\view.blade.php
LINE: 214
TEXT: await database.collection('vendors').get().then( async function(snapshots){
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\layouts\app.blade.php
LINE: 948
TEXT: var ref = database.collection('settings').doc("globalSettings");
NEXT: ref.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\layouts\app.blade.php
LINE: 988
TEXT: var languages_list = database.collection('settings').doc('languages');
NEXT: languages_list.get().then(async function (snapshotslang) {

FILE: C:\deploy\adminpanel\resources\views\layouts\app.blade.php
LINE: 1024
TEXT: var version = database.collection('settings').doc("Version");
NEXT: version.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\layouts\app.blade.php
LINE: 1028
TEXT: database.collection('settings').doc('Version').set({});
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\layouts\app.blade.php
LINE: 1059
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\layouts\app.blade.php
LINE: 1175
TEXT: const googleMapKeySnapshot = await window.firebaseDb.collection('settings').doc('googleMapKey').get();
NEXT: const googleMapKeyData = googleMapKeySnapshot.exists ? googleMapKeySnapshot.data() : null;

FILE: C:\deploy\adminpanel\resources\views\layouts\app.blade.php
LINE: 1270
TEXT: database.collection('settings').doc("notification_setting").get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\layouts\app.blade.php
LINE: 1573
TEXT: var snapshots = await database.collection('zone').where("publish","==",true).get();
NEXT: if(snapshots.docs.length > 0){

FILE: C:\deploy\adminpanel\resources\views\map\cab.blade.php
LINE: 234
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\map\cab.blade.php
LINE: 278
TEXT: database.collection('users').where('role', '==', 'driver').where('sectionId','==',section_id)/* .where('serviceType', '==', 'cab-service') */.where('location', '!=', null).get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\map\cab.blade.php
LINE: 778
TEXT: database.collection("users").doc(driver.id).get().then((doc) => {

FILE: C:\deploy\adminpanel\resources\views\map\cab.blade.php
LINE: 810
TEXT: return database.collection("users").doc(userId).get().then((doc) => {

FILE: C:\deploy\adminpanel\resources\views\map\cab.blade.php
LINE: 828
TEXT: return database.collection("users").doc(driverId).get().then((doc) => {

FILE: C:\deploy\adminpanel\resources\views\map\multivendor.blade.php
LINE: 205
TEXT: await database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\map\multivendor.blade.php
LINE: 214
TEXT: await database.collection('vendor_orders').where('status', '==', 'In Transit').get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\map\multivendor.blade.php
LINE: 229
TEXT: database.collection('users').where('role', '==', 'driver').where('serviceType', '==', 'delivery-service').where('location', '!=', null).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\map\multivendor.blade.php
LINE: 535
TEXT: database.collection("users").doc(driver.id).get().then((doc) => {
NEXT: let data = doc.data();

FILE: C:\deploy\adminpanel\resources\views\map\multivendor.blade.php
LINE: 593
TEXT: const vendorSnapshot = await database.collection('vendors').get();
NEXT: if (!vendorSnapshot || vendorSnapshot.empty) {

FILE: C:\deploy\adminpanel\resources\views\map\multivendor.blade.php
LINE: 661
TEXT: return database.collection("users").doc(userId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\resources\views\map\multivendor.blade.php
LINE: 670
TEXT: return database.collection("users").doc(driverId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\resources\views\map\parcel.blade.php
LINE: 88
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\map\parcel.blade.php
LINE: 111
TEXT: database.collection('users').where('role', '==', 'driver').where('serviceType', '==', 'parcel_delivery').where('sectionId', '==', section_id).where('location', '!=', null).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\map\parcel.blade.php
LINE: 330
TEXT: database.collection("users").doc(driver.id).get().then((doc) => {
NEXT: var data = doc.data();

FILE: C:\deploy\adminpanel\resources\views\map\parcel.blade.php
LINE: 344
TEXT: return database.collection("users").doc(userId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\resources\views\map\parcel.blade.php
LINE: 351
TEXT: return database.collection("users").doc(driverId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\resources\views\map\rental.blade.php
LINE: 88
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\map\rental.blade.php
LINE: 109
TEXT: database.collection('users').where('role', '==', 'driver').where('serviceType', '==', 'rental-service').where('sectionId', '==', section_id).where('location', '!=', null).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\map\rental.blade.php
LINE: 332
TEXT: database.collection("users").doc(driver.id).get().then((doc) => {
NEXT: let data = doc.data();

FILE: C:\deploy\adminpanel\resources\views\map\rental.blade.php
LINE: 346
TEXT: return database.collection("users").doc(userId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\resources\views\map\rental.blade.php
LINE: 353
TEXT: return database.collection("users").doc(driverId).get().then((doc) => {
NEXT: return doc.data();

FILE: C:\deploy\adminpanel\resources\views\notification\index.blade.php
LINE: 110
TEXT: var refData = database.collection('notifications');
NEXT: var ref = refData.orderBy('createdAt', 'desc');

FILE: C:\deploy\adminpanel\resources\views\notification\index.blade.php
LINE: 256
TEXT: database.collection('notifications').doc(dataId).delete().then(function () {
NEXT: setTimeout(function () {

FILE: C:\deploy\adminpanel\resources\views\notification\index.blade.php
LINE: 310
TEXT: database.collection('notifications').doc(id).delete().then(function () {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\resources\views\notification\send.blade.php
LINE: 85
TEXT: var ref = database.collection('notifications').where("id", "==", id);
NEXT: var users = database.collection('users').where("fcmToken", "!=", "");

FILE: C:\deploy\adminpanel\resources\views\notification\send.blade.php
LINE: 86
TEXT: var users = database.collection('users').where("fcmToken", "!=", "");
NEXT: var pagesize = 20;

FILE: C:\deploy\adminpanel\resources\views\notification\send.blade.php
LINE: 160
TEXT: database.collection('notifications').doc(id).set({
NEXT: id: id,

FILE: C:\deploy\adminpanel\resources\views\on-board\index.blade.php
LINE: 80
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\on-board\save.blade.php
LINE: 197
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 632
TEXT: var subscriptionBusinessModel = database.collection('settings').doc("vendor");
NEXT: subscriptionBusinessModel.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 673
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1210
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(adminCommission_val),

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1225
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(orderPayableAmount),

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1240
TEXT: database.collection('users').where('id', '==', providerAuthor).get().then(async function (snapshotsnew) {
NEXT: var providerData = snapshotsnew.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1251
TEXT: database.collection('users').doc(providerAuthor).update({
NEXT: 'wallet_amount': parseFloat(newProviderWallet)

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1266
TEXT: database.collection('users').where('id', '==', providerAuthor).get().then(async function (snapshotsnew) {
NEXT: var providerData = snapshotsnew.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1278
TEXT: database.collection('users').doc(providerAuthor).update({
NEXT: 'wallet_amount': parseFloat(newProviderWallet)

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1309
TEXT: await database.collection('users').doc(providerAuthor).update({'subscriptionTotalOrders':subscriptionTotalOrders.toString()});
NEXT: let providerSnapshot = await database.collection('providers_services').where('author', '==', providerAuthor).get();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1374
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(orderPayableAmount),

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1388
TEXT: database.collection('users').where('id', '==', orderCustomerId).get().then(async function (snapshotsnew) {
NEXT: var customerData = snapshotsnew.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1397
TEXT: database.collection('users').doc(orderCustomerId).update({
NEXT: 'wallet_amount': parseFloat(newCustomerWallet)

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1849
TEXT: await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1866
TEXT: await database.collection('users').where('id', '==', custId).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\edit.blade.php
LINE: 1899
TEXT: await database.collection('users').where('id', '==', author).get().then(async function (snapshots) {
NEXT: if (snapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\index.blade.php
LINE: 992
TEXT: await database.collection('users').where('id', '==', providerId).get().then(async function(snapshots) {
NEXT: var providerData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\bookings\print.blade.php
LINE: 293
TEXT: var provider = database.collection('users').where("id", "==",order.provider.author);
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\categories\create.blade.php
LINE: 102
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\categories\edit.blade.php
LINE: 97
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\categories\index.blade.php
LINE: 99
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\coupons\create.blade.php
LINE: 165
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\coupons\create.blade.php
LINE: 181
TEXT: await database.collection('users').where('id', '==', provider_id).get().then(async function(snapshot) {
NEXT: var provider_data = snapshot.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\coupons\edit.blade.php
LINE: 156
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var sectionId = getCookie('section_id');

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\coupons\edit.blade.php
LINE: 181
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',sectionId).get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\coupons\edit.blade.php
LINE: 322
TEXT: await database.collection('users').where('id', '==', provider_id).get().then(async function(snapshot) {
NEXT: var provider_data = snapshot.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\coupons\index.blade.php
LINE: 233
TEXT: const storeDocs = await database.collection('users').get();
NEXT: storeDocs.forEach(doc => {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\coupons\index.blade.php
LINE: 508
TEXT: await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
NEXT: var providerData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\create.blade.php
LINE: 209
TEXT: var author = database.collection('users').orderBy('createdAt', 'desc');
NEXT: var categories = database.collection('provider_categories').where('publish', '==', true);

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\create.blade.php
LINE: 216
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var provider_id = "{{ @$_GET['id'] }}";

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\create.blade.php
LINE: 234
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\create.blade.php
LINE: 244
TEXT: var subscriptionBusinessModel = database.collection('settings').doc("vendor");
NEXT: subscriptionBusinessModel.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\create.blade.php
LINE: 252
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\create.blade.php
LINE: 531
TEXT: await database.collection('users').doc(providerId).update({
NEXT: 'adminCommission': commissionObj,

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\create.blade.php
LINE: 588
TEXT: await database.collection('users').where('id', '==', provider_id).get().then(async function(snapshot) {
NEXT: var provider_data = snapshot.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\edit.blade.php
LINE: 199
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var allowed_file_size = '';

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\edit.blade.php
LINE: 208
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\index.blade.php
LINE: 195
TEXT: var refProvider = database.collection('users');

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\index.blade.php
LINE: 638
TEXT: await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
NEXT: var providerData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\create.blade.php
LINE: 183
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\create.blade.php
LINE: 201
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function (snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\edit.blade.php
LINE: 180
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var allowed_file_size = '';

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\edit.blade.php
LINE: 189
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\edit.blade.php
LINE: 240
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function (snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\index.blade.php
LINE: 234
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\index.blade.php
LINE: 247
TEXT: var userRef = database.collection('users');

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\index.blade.php
LINE: 584
TEXT: let providerDoc = await database.collection('users').doc(providerId).get();
NEXT: if (providerDoc.exists) {

FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\index.blade.php
LINE: 616
TEXT: await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
NEXT: var providerData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 846
TEXT: var subscriptionBusinessModel = database.collection('settings').doc("vendor");
NEXT: subscriptionBusinessModel.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 854
TEXT: var ref = database.collection('vendor_orders').where("id", "==", oid);

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 857
TEXT: var ref = database.collection('vendor_orders').where("id", "==", id);

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 911
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 949
TEXT: var refDriverNearBy = database.collection('settings').doc("DriverNearBy");
NEXT: refDriverNearBy.get().then(async function(snapshot) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 958
TEXT: var scheduleOrderNotificationRef = database.collection('settings').doc("scheduleOrderNotification");
NEXT: scheduleOrderNotificationRef.get().then(async function(snapshot) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 965
TEXT: var refGlobal = database.collection('settings').doc("globalSettings");
NEXT: refGlobal.get().then(async function(

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1082
TEXT: snapshots = await database.collection('vendor_orders')
NEXT: .where(firebase.firestore.FieldPath.documentId(), '==', fallbackOrderId)

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1123
TEXT: database.collection('zone').where('publish', '==', true)/* .where('sectionId', '==', order.vendor.section_id) */.orderBy('name', 'asc').get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1408
TEXT: database.collection('vendor_orders').where('author.id', '==', userId).get().then(async function(snapshots) {
NEXT: if (snapshots.docs.length == 1) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1460
TEXT: var vendor = database.collection('vendors').where("id", "==", order.vendorID);

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1564
TEXT: database.collection('users').where('role', '==', 'driver').where('vendorID', '==', vendorID).where('isActive', '==', true).get().then(async function(snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1632
TEXT: await database.collection('users').where('id', '==', deliveryman).get().then(async function(snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1649
TEXT: await database.collection('users').doc(deliveryman).update({
NEXT: 'orderRequestData': orderRequestData,

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1667
TEXT: database.collection('vendor_orders').doc(id).update(updatedData).then(async function(result) {
NEXT: status = updatedData.status;

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1681
TEXT: database.collection('vendor_orders').doc(id).update({
NEXT: 'status': status,

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1688
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(orderBasePrice),

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1703
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(orderTaxAmountVendor),

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1717
TEXT: database.collection('users').where('id', '==', vendorAuthor).get().then(async function(snapshotsnew) {
NEXT: if (!snapshotsnew || !snapshotsnew.docs || !snapshotsnew.docs.length) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1727
TEXT: await database.collection('vendors').doc(vendordata.vendorID).update({
NEXT: 'subscriptionTotalOrders': subscriptionTotalOrders.toString()

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1739
TEXT: database.collection('users').doc(vendorAuthor).update({
NEXT: 'wallet_amount': parseFloat(newVendorWallet)

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1875
TEXT: database.collection('vendor_orders').doc(id).update({
NEXT: 'status': orderStatus,

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1913
TEXT: var driver = database.collection('users').where("id", "==", driverId);
NEXT: await driver.get().then(async function(snapshotsdriver) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1941
TEXT: await database.collection('users').doc(driverdata.id).update({
NEXT: 'wallet_amount': parseFloat(driverWallet)

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1950
TEXT: await database.collection('vendor_orders').doc(id).update({
NEXT: 'payment_shared': true

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1955
TEXT: database.collection('users').doc(referralBy).get().then(async function(snapshots) {
NEXT: var refUserInfo = getSafeFirestoreData(snapshots);

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1965
TEXT: database.collection('users').doc(referralBy).update({
NEXT: 'wallet_amount': refUserWallet

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 1971
TEXT: database.collection('wallet').doc(id_random).set({
NEXT: 'amount': referralAmount,

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2005
TEXT: database.collection('wallet').doc(walletId).set({
NEXT: 'amount': parseFloat(orderPaytableAmount),

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2016
TEXT: database.collection('users').where("id", "==", orderCustomerId).get().then(async function(userSnapshots) {
NEXT: if (userSnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2024
TEXT: database.collection('users').doc(orderCustomerId).update({
NEXT: 'wallet_amount': parseFloat(newWalletAmount)

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2083
TEXT: database.collection('wallet').doc(walletId).set({
NEXT: 'amount': parseFloat(orderPaytableAmount),

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2094
TEXT: database.collection('users').where("id", "==", orderCustomerId).get().then(async function(userSnapshots) {
NEXT: if (userSnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2103
TEXT: database.collection('users').doc(orderCustomerId).update({
NEXT: 'wallet_amount': parseFloat(newWalletAmount)

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2702
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2758
TEXT: const vendorDoc = await database.collection('users').doc(vendorId).get();
NEXT: if (vendorDoc.exists) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2769
TEXT: await database.collection('wallet').doc(walletId).set({
NEXT: amount: vendorBaseAmount,

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2782
TEXT: await database.collection('wallet').doc(walletTaxId).set({
NEXT: amount: vendorTaxAmount,

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2798
TEXT: const customerDoc = await database.collection('users').doc(customerId).get();
NEXT: if (customerDoc.exists) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2809
TEXT: await database.collection('wallet').doc(walletId).set({
NEXT: amount: customerAmount,

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2823
TEXT: const customerDoc = await database.collection('users').doc(customerId).get();
NEXT: if (customerDoc.exists) {

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2830
TEXT: await database.collection('users').doc(orderData.driverID).get().then(async function(snapshot) {
NEXT: let newOrderRequestData = [];

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2846
TEXT: await database.collection('users').doc(driverData.id).update({
NEXT: 'inProgressOrderID': inProgressOrderID,

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2853
TEXT: await database.collection('vendor_orders').doc(orderData.id).update({
NEXT: 'status': 'Order Cancelled',

FILE: C:\deploy\adminpanel\resources\views\orders\edit.blade.php
LINE: 2859
TEXT: await database.collection('vendor_orders').doc(orderData.id).update({
NEXT: 'status': 'Order Cancelled'

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 303
TEXT: var refData = database.collection('vendor_orders');
NEXT: if (section_id) {

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 419
TEXT: var initialRef = database.collection('vendor_orders');
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1227
TEXT: let snapshot1 = await database.collection("users")
NEXT: .where("role", "==", "driver")

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1233
TEXT: let snapshot2 = await database.collection("users")
NEXT: .where("role", "==", "driver")

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1247
TEXT: const driverRef = database.collection("users").doc(driverId);
NEXT: batch.update(driverRef, {

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1257
TEXT: await database.collection('vendor_orders').doc(orderId).delete();

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1284
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1308
TEXT: await database.collection('users').where('id', '==', userId).get().then(async function(snapshots) {
NEXT: var userData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1437
TEXT: let orderRef = await database.collection('vendor_orders').doc(orderId).get();
NEXT: let orderData = orderRef.data();

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1441
TEXT: let driverNearByRef = await database.collection("settings").doc('DriverNearBy').get();
NEXT: let driverNearByData = driverNearByRef.data();

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1458
TEXT: let driverSnapshots = await database.collection("users")
NEXT: .where('role', '==', "driver")

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1529
TEXT: let orderRef = await database.collection('vendor_orders').doc(orderId).get();
NEXT: let orderData = orderRef.data();

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1532
TEXT: let driverNearByRef = await database.collection("settings").doc('DriverNearBy').get();
NEXT: let driverNearByData = driverNearByRef.data();

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1548
TEXT: let driverRef = database.collection('users').doc(driverId);
NEXT: let orderRef = database.collection('vendor_orders').doc(orderId);

FILE: C:\deploy\adminpanel\resources\views\orders\index.blade.php
LINE: 1549
TEXT: let orderRef = database.collection('vendor_orders').doc(orderId);

FILE: C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php
LINE: 204
TEXT: const ownedDriversSnapshot = await database.collection('users').where('role', '==', 'driver').where('ownerId', '==', vendorID).get();
NEXT: const ownedDriverIds = ownedDriversSnapshot.docs.map(doc => doc.data().id);

FILE: C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php
LINE: 656
TEXT: database.collection('vendor_orders').doc(dataId).delete().then(function() {
NEXT: setTimeout(function() {

FILE: C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php
LINE: 681
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function(snapshots) {
NEXT: var vendorData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php
LINE: 695
TEXT: await database.collection('users').where('id', '==', userId).get().then(async function(snapshots) {
NEXT: var userData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php
LINE: 705
TEXT: database.collection('vendor_orders').doc(id).delete().then(function(result) {
NEXT: window.location.href = '{{ url()->current() }}';

FILE: C:\deploy\adminpanel\resources\views\orders\print.blade.php
LINE: 209
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\orders\print.blade.php
LINE: 217
TEXT: var ref = database.collection('vendor_orders').where("id", "==", id);

FILE: C:\deploy\adminpanel\resources\views\orders\print.blade.php
LINE: 302
TEXT: var vendor = database.collection('vendors').where("id", "==", order.vendorID);
NEXT: vendor.get().then(async function (snapshotsnew) {

FILE: C:\deploy\adminpanel\resources\views\order_reviews\edit.blade.php
LINE: 129
TEXT: await database.collection('vendors').get().then( async function(snapshots){
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\order_reviews\edit.blade.php
LINE: 147
TEXT: await database.collection('users').where("role","in",["customer","driver"]).get().then( async function(snapshots){
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\order_reviews\edit.blade.php
LINE: 165
TEXT: await database.collection('vendor_orders').where("id","==",review.orderid).get().then( async function(snapshots){
NEXT: var order = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\order_reviews\index.blade.php
LINE: 303
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\order_reviews\index.blade.php
LINE: 607
TEXT: await database.collection('users').where("id","==",userID).get().then( async function(snapshotss){

FILE: C:\deploy\adminpanel\resources\views\order_reviews\index.blade.php
LINE: 640
TEXT: await database.collection('vendors').where("id","==",vendorID).get().then( async function(snapshotss){

FILE: C:\deploy\adminpanel\resources\views\order_transactions\index.blade.php
LINE: 304
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\order_transactions\index.blade.php
LINE: 322
TEXT: await database.collection('vendors').where("id", "==", vendorId).get().then(async function (snapshotss) {
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\order_transactions\index.blade.php
LINE: 339
TEXT: await database.collection('vendor_orders').where("id", "==", orderId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\owners\create.blade.php
LINE: 214
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\resources\views\owners\create.blade.php
LINE: 237
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\resources\views\owners\create.blade.php
LINE: 257
TEXT: let documentVerify = await database.collection('settings').doc('document_verification_settings').get();
NEXT: let documentSettings = documentVerify.data();

FILE: C:\deploy\adminpanel\resources\views\owners\create.blade.php
LINE: 411
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'appIdentifier': 'web',

FILE: C:\deploy\adminpanel\resources\views\owners\documentIndex.blade.php
LINE: 72
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\owners\documentIndex.blade.php
LINE: 299
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': true, isActive: true });
NEXT: }else{

FILE: C:\deploy\adminpanel\resources\views\owners\documentIndex.blade.php
LINE: 303
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\owners\documentIndex.blade.php
LINE: 308
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\owners\documentUpload.blade.php
LINE: 37
TEXT: var allVendor = database.collection('users').where('role', '==', 'driver');
NEXT: var driverRef= database.collection('users').where('id','==',id);

FILE: C:\deploy\adminpanel\resources\views\owners\documentUpload.blade.php
LINE: 38
TEXT: var driverRef= database.collection('users').where('id','==',id);
NEXT: var database = firebase.firestore();

FILE: C:\deploy\adminpanel\resources\views\owners\documentUpload.blade.php
LINE: 51
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\owners\documentUpload.blade.php
LINE: 337
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': true, isActive:true });
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\owners\documentUpload.blade.php
LINE: 341
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\owners\documentUpload.blade.php
LINE: 346
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 137
TEXT: ref = database.collection('users').where("role", "in", ["customer"]);
NEXT: if ($('#daterange span').html() != '{{ trans('lang.select_range') }}' && daterangepicker) {

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 157
TEXT: var ref = database.collection('users').where("role", "==", "driver").where('ownerId','==', id).orderBy('createdAt', 'desc');
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 159
TEXT: var alldriver = database.collection('users').where("role", "==", "driver").where('ownerId','==', id).orderBy('createdAt', 'desc');
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 161
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 183
TEXT: let userRef = database.collection('users').doc(id);
NEXT: let userDoc = await userRef.get();

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 461
TEXT: database.collection('vendor_orders').where('driverID', '==', listval.id).where("status", "in", ["Order Completed"]).get().then(async function(orderSnapshots) {
NEXT: var count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 463
TEXT: database.collection('users').doc(listval.id).update({
NEXT: 'orderCompleted': count_order_complete

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 597
TEXT: await database.collection('vendor_orders').where('driverID', '==', driver).get().then(async function(orderSnapshots) {
NEXT: count_order_complete = orderSnapshots.docs.length;

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 616
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': true

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 620
TEXT: database.collection('users').doc(id).update({
NEXT: 'isActive': false

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 629
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 633
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 650
TEXT: const car_info = database.collection('users').doc(dataId).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\resources\views\owners\driver_list.blade.php
LINE: 742
TEXT: const car_info = database.collection('users').doc(id).get()
NEXT: .then(async function(querySnapshot) {

FILE: C:\deploy\adminpanel\resources\views\owners\edit.blade.php
LINE: 239
TEXT: database.collection('users').where("id", "==", id).get().then(function(snapshot) {
NEXT: if (!snapshot.empty) {

FILE: C:\deploy\adminpanel\resources\views\owners\edit.blade.php
LINE: 257
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\resources\views\owners\edit.blade.php
LINE: 271
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\resources\views\owners\edit.blade.php
LINE: 302
TEXT: let userRef = await database.collection('users').doc(id).get();
NEXT: let user = userRef.data();

FILE: C:\deploy\adminpanel\resources\views\owners\edit.blade.php
LINE: 502
TEXT: await database.collection('users').doc(ownerId).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\resources\views\owners\edit.blade.php
LINE: 516
TEXT: await geoFirestore.collection('vendors').doc(store_id).update({
NEXT: 'authorName': userFirstName +' ' +userLastName,

FILE: C:\deploy\adminpanel\resources\views\owners\edit.blade.php
LINE: 560
TEXT: const userRef = database.collection('users').doc(ownerId);
NEXT: const userDoc = await userRef.get();

FILE: C:\deploy\adminpanel\resources\views\owners\edit.blade.php
LINE: 566
TEXT: database.collection('users').doc(ownerId).update({
NEXT: 'subscriptionExpiryDate': subscriptionPlanExpiryDate,

FILE: C:\deploy\adminpanel\resources\views\owners\index.blade.php
LINE: 168
TEXT: var ref = database.collection('users').where("role", "==", "driver").where('isOwner','==',true).orderBy('createdAt', 'desc');
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\owners\index.blade.php
LINE: 200
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\owners\index.blade.php
LINE: 571
TEXT: await database.collection('vendors').where('author', '==', userId).get().then(async function (restaurantSnapshots) {

FILE: C:\deploy\adminpanel\resources\views\owners\index.blade.php
LINE: 620
TEXT: await database.collection('wallet').where('user_id', '==', userId).get().then(async function (snapshotsItem) {

FILE: C:\deploy\adminpanel\resources\views\owners\index.blade.php
LINE: 626
TEXT: database.collection('wallet').doc(item_data.id).delete().then(function () {

FILE: C:\deploy\adminpanel\resources\views\owners\index.blade.php
LINE: 633
TEXT: const driversSnapshot = await database.collection('users').where('ownerId', '==', userId).get();
NEXT: driversSnapshot.forEach((doc) => {

FILE: C:\deploy\adminpanel\resources\views\owners\index.blade.php
LINE: 680
TEXT: database.collection('users').doc(id).update({'active': true});
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\owners\index.blade.php
LINE: 682
TEXT: database.collection('users').doc(id).update({'active': false});
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\owners\view.blade.php
LINE: 249
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\owners\view.blade.php
LINE: 256
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\owners\view.blade.php
LINE: 262
TEXT: var currency = database.collection('settings');
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\resources\views\owners\view.blade.php
LINE: 323
TEXT: let ownedDriversSnapshot = await database.collection('users').where('role','==',"driver").where('ownerId', '==', dirver.id).get();
NEXT: $('.total_drivers').html(ownedDriversSnapshot.docs.length);

FILE: C:\deploy\adminpanel\resources\views\owners\view.blade.php
LINE: 343
TEXT: const ordersSnapshot = await database.collection('vendor_orders').where('driverID', '==', driverdata.id).get();
NEXT: totalOrders += ordersSnapshot.docs.length;

FILE: C:\deploy\adminpanel\resources\views\owners\view.blade.php
LINE: 440
TEXT: database.collection('users').where('id', '==', id).get().then(async function (snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\owners\view.blade.php
LINE: 449
TEXT: database.collection('users').doc(id).update({
NEXT: 'wallet_amount': newWalletAmount

FILE: C:\deploy\adminpanel\resources\views\owners\view.blade.php
LINE: 453
TEXT: database.collection('wallet').doc(tempId).set({
NEXT: 'amount': parseFloat(amount),

FILE: C:\deploy\adminpanel\resources\views\owners\wallet_transaction.blade.php
LINE: 99
TEXT: var refData = database.collection('wallet');
NEXT: var search = jQuery("#search").val();

FILE: C:\deploy\adminpanel\resources\views\owners\wallet_transaction.blade.php
LINE: 102
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\owners\wallet_transaction.blade.php
LINE: 136
TEXT: var username = database.collection('users').where('id', '==', id);
NEXT: username.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\owners\wallet_transaction.blade.php
LINE: 564
TEXT: database.collection('wallet').doc(dataId).delete().then(function() {
NEXT: setTimeout(function() {

FILE: C:\deploy\adminpanel\resources\views\owners\wallet_transaction.blade.php
LINE: 577
TEXT: database.collection('wallet').doc(id).delete().then(function() {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\resources\views\owners\wallet_transaction.blade.php
LINE: 583
TEXT: await database.collection('users').where("id", "==", user).get().then(async function(snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\owners_payouts\create.blade.php
LINE: 94
TEXT: var emailSetting = database.collection('settings').doc('emailSetting');

FILE: C:\deploy\adminpanel\resources\views\owners_payouts\create.blade.php
LINE: 114
TEXT: const snapshot = await database.collection('users').doc(driverID).get();
NEXT: if (snapshot.exists) {

FILE: C:\deploy\adminpanel\resources\views\owners_payouts\create.blade.php
LINE: 150
TEXT: database.collection('users').where('role', '==', 'driver').get().then(async function(snapshots) {
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\owners_payouts\create.blade.php
LINE: 198
TEXT: database.collection('users').doc(driverID).update({
NEXT: 'wallet_amount': price

FILE: C:\deploy\adminpanel\resources\views\owners_payouts\create.blade.php
LINE: 269
TEXT: await database.collection('users').where('id', "==", driverId).get().then(async function(vendorSnapshots) {
NEXT: var driverData = vendorSnapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\owners_payouts\index.blade.php
LINE: 410
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\parcel_category\edit.blade.php
LINE: 80
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\parcel_category\index.blade.php
LINE: 100
TEXT: var alldriver = database.collection('users').where("role", "==", "driver");
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\resources\views\parcel_category\index.blade.php
LINE: 106
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\parcel_coupons\edit.blade.php
LINE: 141
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\parcel_orders\edit.blade.php
LINE: 339
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\parcel_orders\edit.blade.php
LINE: 639
TEXT: database.collection('wallet').doc(walletId).set({
NEXT: 'amount': parseFloat(orderPaytableAmount),

FILE: C:\deploy\adminpanel\resources\views\parcel_orders\index.blade.php
LINE: 718
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\parcel_orders\owner_index.blade.php
LINE: 206
TEXT: const ownedDriversSnapshot = await database.collection('users')
NEXT: .where('role', '==', 'driver')

FILE: C:\deploy\adminpanel\resources\views\parcel_orders\owner_index.blade.php
LINE: 633
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\parcel_weight\index.blade.php
LINE: 201
TEXT: var alovelaceDocumentRef = database.collection('vendor_orders').doc();
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\payments\driver_index.blade.php
LINE: 76
TEXT: var ref = database.collection('users').where('role', '==', 'driver');

FILE: C:\deploy\adminpanel\resources\views\payments\driver_index.blade.php
LINE: 416
TEXT: await database.collection('users').where('id', '==', driverID).get().then(async function(driverSnapshots) {
NEXT: var driver = [];

FILE: C:\deploy\adminpanel\resources\views\payments\index.blade.php
LINE: 79
TEXT: var ref = database.collection('vendors');

FILE: C:\deploy\adminpanel\resources\views\payments\index.blade.php
LINE: 409
TEXT: await database.collection('users').where('vendorID', '==', vendorID).where('role','==','vendor').get().then(async function (vendorSnapshots) {
NEXT: var vendor = [];

FILE: C:\deploy\adminpanel\resources\views\payments\provider_index.blade.php
LINE: 77
TEXT: var ref = database.collection('users').where('role','==','provider');

FILE: C:\deploy\adminpanel\resources\views\payments\provider_index.blade.php
LINE: 395
TEXT: await database.collection('users').where('id', '==', providerID).get().then(async function (providerSnapshots) {
NEXT: var provider = [];

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 217
TEXT: database.collection('users').where("id", "==", id).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 470
TEXT: var snapshots = await database.collection('users').doc(driverId).get();
NEXT: if(snapshots.exists){

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 563
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 673
TEXT: await database.collection('settings').get().then(async function (snapshots) {
NEXT: snapshots.forEach((doc) => {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 696
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 714
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 771
TEXT: database.collection('users').where("id", "==", auth).get().then(function (resultdriver) {
NEXT: if (resultdriver.docs.length) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 783
TEXT: database.collection('users').doc(driver.id).update({'wallet_amount': price}).then(async function (result) {
NEXT: var wId = database.collection('temp').doc().id;

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\disbursement_index.blade.php
LINE: 785
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(priceadd),

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 492
TEXT: database.collection('users').where("id", "==", id).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1016
TEXT: var snapshots = await database.collection('users').doc(driverId).get();

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1248
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1476
TEXT: await database.collection('settings').get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1520
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1548
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1688
TEXT: database.collection('users').where("id", "==", auth).get().then(function (resultdriver) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1712
TEXT: database.collection('users').doc(driver.id).update({'wallet_amount': price}).then(async function (result) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\drivers\index.blade.php
LINE: 1716
TEXT: database.collection('wallet').doc(wId).set({

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 467
TEXT: var snapshots = await database.collection('users').doc(driverId).get();
NEXT: if(snapshots.exists){

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 562
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 671
TEXT: await database.collection('settings').get().then(async function (snapshots) {
NEXT: snapshots.forEach((doc) => {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 696
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 714
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 771
TEXT: database.collection('users').where("id", "==", auth).get().then(function (resultdriver) {
NEXT: if (resultdriver.docs.length) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 783
TEXT: database.collection('users').doc(driver.id).update({'wallet_amount': price}).then(async function (result) {
NEXT: var wId = database.collection('temp').doc().id;

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\disbursement_index.blade.php
LINE: 785
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(priceadd),

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\index.blade.php
LINE: 231
TEXT: database.collection('users').where("id", "==", id).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\index.blade.php
LINE: 481
TEXT: var snapshots = await database.collection('users').doc(driverId).get();
NEXT: if(snapshots.exists){

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\index.blade.php
LINE: 574
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\index.blade.php
LINE: 683
TEXT: await database.collection('settings').get().then(async function (snapshots) {
NEXT: snapshots.forEach((doc) => {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\index.blade.php
LINE: 705
TEXT: await database.collection('users').where("id", "==", driver).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\index.blade.php
LINE: 718
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\index.blade.php
LINE: 775
TEXT: database.collection('users').where("id", "==", auth).get().then(function (resultdriver) {
NEXT: if (resultdriver.docs.length) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\index.blade.php
LINE: 787
TEXT: database.collection('users').doc(driver.id).update({'wallet_amount': price}).then(async function (result) {
NEXT: var wId = database.collection('temp').doc().id;

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\owner\index.blade.php
LINE: 789
TEXT: database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(priceadd),

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 872
TEXT: var snapshots = await database.collection('users').doc(providerId).get();

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1045
TEXT: await database.collection('users').where("id", "==", providerId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1339
TEXT: await database.collection('users').where("id", "==", vendorId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1373
TEXT: await database.collection('settings').get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1458
TEXT: database.collection('users').where("vendorID", "==", auth).get().then(function (resultprovider) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1482
TEXT: database.collection('users').doc(provider.id).update({'wallet_amount': price}).then(async function (result) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1486
TEXT: database.collection('wallet').doc(wId).set({

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\disbursement_index.blade.php
LINE: 1589
TEXT: await database.collection('users').where("id", "==", provider).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\index.blade.php
LINE: 917
TEXT: var snapshots = await database.collection('users').doc(providerId).get();

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1089
TEXT: await database.collection('users').where("id", "==", providerId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1383
TEXT: await database.collection('users').where("id", "==", proivderId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1417
TEXT: await database.collection('settings').get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1501
TEXT: database.collection('users').where("vendorID", "==", auth).get().then(function (resultprovider) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1525
TEXT: database.collection('users').doc(provider.id).update({'wallet_amount': price}).then(async function (result) {

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1529
TEXT: database.collection('wallet').doc(wId).set({

FILE: C:\deploy\adminpanel\resources\views\payoutRequests\provider\index.blade.php
LINE: 1633
TEXT: await database.collection('users').where("id", "==", provider).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 273
TEXT: var refVendor = database.collection('vendors').where('section_id', '==', section_id);
NEXT: var refUsers = database.collection('users');

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 274
TEXT: var refUsers = database.collection('users');
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 303
TEXT: var refGlobal = database.collection('settings').doc("globalSettings");
NEXT: refGlobal.get().then(async function(

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 400
TEXT: database.collection('settings').doc('placeHolderImage').get(),
NEXT: database.collection('settings').doc('DeliveryCharge').get(),

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 401
TEXT: database.collection('settings').doc('DeliveryCharge').get(),
NEXT: database.collection('currencies').where('isActive', '==', true).get()

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 615
TEXT: const vendorSnap = await database.collection('vendors').doc(state.selectedVendorId).get();
NEXT: if (vendorSnap.exists) {

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 636
TEXT: database.collection('tax').where('country', '==', vendorCountry).where('enable', '==', true).where('scope', 'in', scopes).where('sectionId', '==', section_id).get().then(snapshot => {
NEXT: snapshot.forEach(doc => {

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 1007
TEXT: const doc = await database.collection('vendors').doc(vendorId).get();
NEXT: if (doc.exists) {

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 1691
TEXT: var id_order = database.collection('vendor_orders').doc().id;
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 1693
TEXT: var userSnapshot = await database.collection('users').doc(selectedUser).get();
NEXT: var userDetails = '';

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 1707
TEXT: const vendorSnap = await database.collection('vendors').doc(orderVendorID).get();
NEXT: if (vendorSnap.exists) {

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 1814
TEXT: await database.collection('vendor_orders').doc(id_order).set(
NEXT: orderData

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 2012
TEXT: await database.collection('wallet').doc(wId).set({
NEXT: 'amount': parseFloat(orderBasePrice).toFixed(config.decimal_degits),

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 2029
TEXT: await database.collection('wallet').doc(wId2).set({
NEXT: 'amount': parseFloat(orderTaxAmount).toFixed(config.decimal_degits),

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 2043
TEXT: const snapshotsnew = await database.collection('users').where('id', '==', vendorAuthor).get();

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 2050
TEXT: await database.collection('vendors')
NEXT: .doc(vendorAuthor)

FILE: C:\deploy\adminpanel\resources\views\pos\index.blade.php
LINE: 2060
TEXT: await database.collection('users')
NEXT: .doc(vendorAuthor)

FILE: C:\deploy\adminpanel\resources\views\pos\order_index.blade.php
LINE: 90
TEXT: var refData = database.collection('vendor_orders').where('section_id', '==', section_id).where('isPosOrder','==',true);

FILE: C:\deploy\adminpanel\resources\views\pos\order_index.blade.php
LINE: 416
TEXT: await database.collection('users').where("id", "==", id).get().then(async function (snapshotsorder) {

FILE: C:\deploy\adminpanel\resources\views\pos\order_index.blade.php
LINE: 435
TEXT: database.collection('vendor_orders').doc(dataId).delete().then(function () {

FILE: C:\deploy\adminpanel\resources\views\pos\order_index.blade.php
LINE: 457
TEXT: database.collection('vendor_orders').doc(id).delete().then(function (result) {
NEXT: window.location.href = '{{ url()->current() }}';

FILE: C:\deploy\adminpanel\resources\views\pos\order_index.blade.php
LINE: 466
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function (snapshots) {
NEXT: if (!snapshots.empty) {

FILE: C:\deploy\adminpanel\resources\views\pos\order_index.blade.php
LINE: 490
TEXT: await database.collection('users').where('id', '==', userId).get().then(async function (snapshots) {
NEXT: var user = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\privacy_policy\index.blade.php
LINE: 113
TEXT: var ref = database.collection('settings').doc('privacyPolicy');

FILE: C:\deploy\adminpanel\resources\views\privacy_policy\index.blade.php
LINE: 194
TEXT: database.collection('settings').doc('privacyPolicy').update({ 'privacy_policy': privacy_policy }).then(function (result) {

FILE: C:\deploy\adminpanel\resources\views\providers\chat.blade.php
LINE: 73
TEXT: database.collection('users').doc(id).get().then(async function(userSnapshot) {
NEXT: if (userSnapshot.exists) {

FILE: C:\deploy\adminpanel\resources\views\providers\chat.blade.php
LINE: 203
TEXT: const userDoc = await database.collection('users').doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\resources\views\providers\chat.blade.php
LINE: 308
TEXT: const userDoc = await database.collection("users").doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\resources\views\providers\create.blade.php
LINE: 212
TEXT: var autoAprroveVendor = database.collection('settings').doc("vendor");
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\resources\views\providers\create.blade.php
LINE: 228
TEXT: let businessModelRef = await database.collection('settings').doc("vendor").get();
NEXT: businessModelData = businessModelRef.data();

FILE: C:\deploy\adminpanel\resources\views\providers\create.blade.php
LINE: 250
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\resources\views\providers\create.blade.php
LINE: 362
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'section_id': section_id,

FILE: C:\deploy\adminpanel\resources\views\providers\edit.blade.php
LINE: 209
TEXT: var autoAprroveVendor = database.collection('settings').doc("vendor");
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\resources\views\providers\edit.blade.php
LINE: 218
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\resources\views\providers\edit.blade.php
LINE: 220
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\resources\views\providers\edit.blade.php
LINE: 230
TEXT: var currency = database.collection('settings');

FILE: C:\deploy\adminpanel\resources\views\providers\edit.blade.php
LINE: 401
TEXT: await database.collection('users').doc(id).update({

FILE: C:\deploy\adminpanel\resources\views\providers\index.blade.php
LINE: 100
TEXT: var ref = database.collection('users').where("role", "==", "provider");
NEXT: if(section_id){

FILE: C:\deploy\adminpanel\resources\views\providers\index.blade.php
LINE: 147
TEXT: ref = database.collection('users').where("role", "in", ["provider"]);
NEXT: if(section_id){

FILE: C:\deploy\adminpanel\resources\views\providers\index.blade.php
LINE: 176
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\providers\index.blade.php
LINE: 551
TEXT: await database.collection('wallet').where('user_id', '==', userId).get().then(async function (snapshotsItem) {
NEXT: if (snapshotsItem.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\providers\index.blade.php
LINE: 555
TEXT: database.collection('wallet').doc(item_data.id).delete().then(function () {
NEXT: });

FILE: C:\deploy\adminpanel\resources\views\providers\index.blade.php
LINE: 593
TEXT: await database.collection('settings').doc("Version").get().then(function(snapshot) {
NEXT: var settingData=snapshot.data();

FILE: C:\deploy\adminpanel\resources\views\providers\index.blade.php
LINE: 654
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\resources\views\providers\index.blade.php
LINE: 658
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\resources\views\providers\view.blade.php
LINE: 500
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var sectionId = null;

FILE: C:\deploy\adminpanel\resources\views\providers\view.blade.php
LINE: 505
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\providers\view.blade.php
LINE: 511
TEXT: var currency = database.collection('settings');

FILE: C:\deploy\adminpanel\resources\views\providers\view.blade.php
LINE: 583
TEXT: database.collection('settings').doc("vendor").get().then(async function(snapshots) {
NEXT: var businessModelSettings = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\providers\view.blade.php
LINE: 952
TEXT: await database.collection('users').doc(userId).update({
NEXT: 'subscription_plan': planData,

FILE: C:\deploy\adminpanel\resources\views\providers\view.blade.php
LINE: 968
TEXT: await database.collection('vendors').doc(vendorId).update({
NEXT: 'subscription_plan': planData,

FILE: C:\deploy\adminpanel\resources\views\providers\view.blade.php
LINE: 1160
TEXT: database.collection('users').where('id', '==', id).get().then(async function(snapshot) {
NEXT: var data = snapshot.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\providers\view.blade.php
LINE: 1196
TEXT: await database.collection('users').doc(id).update({
NEXT: 'subscription_plan.orderLimit': order_limit,

FILE: C:\deploy\adminpanel\resources\views\provider_payouts\create.blade.php
LINE: 162
TEXT: var emailSetting = database.collection('settings').doc('emailSetting');

FILE: C:\deploy\adminpanel\resources\views\provider_payouts\create.blade.php
LINE: 197
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\provider_payouts\create.blade.php
LINE: 251
TEXT: database.collection('users').where("id", "==", ProviderID).get().then(function(snapshotss) {
NEXT: if (snapshotss.docs.length) {

FILE: C:\deploy\adminpanel\resources\views\provider_payouts\create.blade.php
LINE: 254
TEXT: database.collection('users').doc(userdata.id).update({
NEXT: 'wallet_amount': price

FILE: C:\deploy\adminpanel\resources\views\provider_payouts\create.blade.php
LINE: 347
TEXT: await database.collection('users').where("id", "==", providerId).get().then(async function(snapshotss) {
NEXT: if (snapshotss.docs.length) {

FILE: C:\deploy\adminpanel\resources\views\provider_payouts\create.blade.php
LINE: 362
TEXT: await database.collection('users').where('id', "==", providerUser).get().then(async function(providerSnapshots) {
NEXT: if (providerSnapshots.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\provider_payouts\index.blade.php
LINE: 403
TEXT: database.collection('users').where('id', '==', providerId).get().then(function (snapshots) {
NEXT: var providerData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\provider_payouts\index.blade.php
LINE: 467
TEXT: await database.collection('users').where("id", "==", provider).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\rentalDiscount\edit.blade.php
LINE: 135
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\rentalVehicle\index.blade.php
LINE: 88
TEXT: var refData = database.collection('users').where('serviceType', '==', 'rental-service').where('sectionId','==',$section_id);

FILE: C:\deploy\adminpanel\resources\views\rentalVehicle\index.blade.php
LINE: 91
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\rentalVehicle\index.blade.php
LINE: 127
TEXT: const querySnapshot = await  database.collection('users').where('serviceType', '==', 'rental-service').where('sectionId','==',$section_id).get();
NEXT: if (!querySnapshot || querySnapshot.empty) {

FILE: C:\deploy\adminpanel\resources\views\rentalVehicle\view.blade.php
LINE: 85
TEXT: var ref = database.collection('users').where("id", "==", id);

FILE: C:\deploy\adminpanel\resources\views\rentalVehicle\view.blade.php
LINE: 88
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(function (snap) {

FILE: C:\deploy\adminpanel\resources\views\rentalvehicleType\edit.blade.php
LINE: 105
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\rentalvehicleType\index.blade.php
LINE: 83
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\rental_orders\edit.blade.php
LINE: 367
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\rental_orders\edit.blade.php
LINE: 388
TEXT: var alovelaceDocumentRef = database.collection('vendor_orders').doc();
NEXT: if (alovelaceDocumentRef.id) {

FILE: C:\deploy\adminpanel\resources\views\rental_orders\edit.blade.php
LINE: 412
TEXT: var driver = database.collection('users').where("id", "==", order.driver.id);

FILE: C:\deploy\adminpanel\resources\views\rental_orders\index.blade.php
LINE: 583
TEXT: await database.collection('users').where('id', '==', driverID).get().then(async function (snapshots) {
NEXT: var driverData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\rental_orders\owner_index.blade.php
LINE: 237
TEXT: const ownedDriversSnapshot = await database.collection('users')
NEXT: .where('role', '==', 'driver')

FILE: C:\deploy\adminpanel\resources\views\rental_orders\owner_index.blade.php
LINE: 488
TEXT: await database.collection('users').where('id', '==', driverID).get().then(async function (snapshots) {
NEXT: var driverData = snapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\rental_packages\index.blade.php
LINE: 102
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php
LINE: 128
TEXT: var vendorsRef = database.collection('vendors').orderBy('title').orderBy('createdAt');
NEXT: var driverUserRef = database.collection('users').where('role', '==', 'driver').orderBy('firstName').orderBy('createdAt');

FILE: C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php
LINE: 129
TEXT: var driverUserRef = database.collection('users').where('role', '==', 'driver').orderBy('firstName').orderBy('createdAt');
NEXT: var customerRef = database.collection('users').where('role', '==', 'customer').orderBy('firstName').orderBy('createdAt');

FILE: C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php
LINE: 130
TEXT: var customerRef = database.collection('users').where('role', '==', 'customer').orderBy('firstName').orderBy('createdAt');
NEXT: var categoryRef = database.collection('vendor_categories').orderBy('title');

FILE: C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php
LINE: 132
TEXT: var paymentMethodRef = database.collection('settings').doc('payment');
NEXT: var providerRef = database.collection('users').where('role', '==', 'provider').orderBy('firstName').orderBy('createdAt');

FILE: C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php
LINE: 133
TEXT: var providerRef = database.collection('users').where('role', '==', 'provider').orderBy('firstName').orderBy('createdAt');
NEXT: var workerRef = database.collection('providers_workers').orderBy('firstName');

FILE: C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php
LINE: 182
TEXT: await database.collection('vendors').orderBy('title').where('section_id', '==', section_id).get().then(function (snapShots) {
NEXT: $('.vendors').empty();

FILE: C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php
LINE: 214
TEXT: await database.collection('users').where('role', '==', 'driver').orderBy('firstName').where('serviceType', '==', service_type).get().then(function (snapShots) {
NEXT: $('.driver').empty();

FILE: C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php
LINE: 699
TEXT: ordersRef = database.collection('vendor_orders').where('status', 'in', ["Order Completed"]).where('section_id', '==', section_id).orderBy('createdAt', 'desc');

FILE: C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php
LINE: 225
TEXT: var refTaxes = database.collection('tax').where('enable', '==', true).where('sectionId','==',section_id);

FILE: C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php
LINE: 380
TEXT: let fallbackSnapshot = await database.collection('tax')
NEXT: .where('enable', '==', true)

FILE: C:\deploy\adminpanel\resources\views\rides\edit.blade.php
LINE: 341
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\rides\edit.blade.php
LINE: 362
TEXT: var alovelaceDocumentRef = database.collection('vendor_orders').doc();
NEXT: if (alovelaceDocumentRef.id) {

FILE: C:\deploy\adminpanel\resources\views\rides\edit.blade.php
LINE: 568
TEXT: var driver = database.collection('users').where("id", "==", driverId);

FILE: C:\deploy\adminpanel\resources\views\rides\edit.blade.php
LINE: 684
TEXT: var vendor = database.collection('users').where("driverID", "==", driverID);
NEXT: var vendorWallet = 0;

FILE: C:\deploy\adminpanel\resources\views\rides\edit.blade.php
LINE: 688
TEXT: var driver = database.collection('users').where("id", "==", driverId);
NEXT: await driver.get().then(async function (snapshotsdriver) {

FILE: C:\deploy\adminpanel\resources\views\rides\edit.blade.php
LINE: 703
TEXT: await database.collection('users').doc(driverdata.id).update({
NEXT: 'wallet_amount': driverWallet

FILE: C:\deploy\adminpanel\resources\views\rides\index.blade.php
LINE: 242
TEXT: var alldriver = database.collection('users').where("id", "==", id).orderBy('createdAt', 'desc');
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\resources\views\rides\index.blade.php
LINE: 340
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\rides\index.blade.php
LINE: 589
TEXT: database.collection('users').doc(listval.id).update({'orderCompleted': count_order_complete}).then(function (result) {

FILE: C:\deploy\adminpanel\resources\views\rides\index.blade.php
LINE: 757
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\rides\owner_index.blade.php
LINE: 174
TEXT: const ownedDriversSnapshot = await database.collection('users')
NEXT: .where('role', '==', 'driver')

FILE: C:\deploy\adminpanel\resources\views\rides\owner_index.blade.php
LINE: 223
TEXT: var alldriver = database.collection('users').where("id", "==", id).orderBy('createdAt', 'desc');
NEXT: var placeholderImage = '';

FILE: C:\deploy\adminpanel\resources\views\rides\owner_index.blade.php
LINE: 301
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\rides\owner_index.blade.php
LINE: 347
TEXT: database.collection('users').doc(listval.id).update({'orderCompleted': count_order_complete}).then(function (result) {

FILE: C:\deploy\adminpanel\resources\views\rides\owner_index.blade.php
LINE: 479
TEXT: await database.collection('users').where("id", "==", driverId).get().then(async function (snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\section\create.blade.php
LINE: 294
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var htmlTemplate = "";

FILE: C:\deploy\adminpanel\resources\views\section\create.blade.php
LINE: 303
TEXT: var refDriver = database.collection('settings').doc("DriverNearBy");
NEXT: refDriver.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\section\edit.blade.php
LINE: 289
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\resources\views\section\edit.blade.php
LINE: 299
TEXT: var refDriver = database.collection('settings').doc("DriverNearBy");
NEXT: refDriver.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\section\index.blade.php
LINE: 95
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\section\index.blade.php
LINE: 315
TEXT: await database.collection('vendors').where('section_id', '==', sectionId).get().then(async function (vendorsnapshots) {
NEXT: if (vendorsnapshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\section\index.blade.php
LINE: 320
TEXT: const snaps = await database.collection('vendors').where('id', '==', vendorID).get();
NEXT: await deleteDocumentWithImage('vendors',snaps.docs[0].id,'photo','photos','authorProfilePic');

FILE: C:\deploy\adminpanel\resources\views\section\index.blade.php
LINE: 322
TEXT: database.collection('vendors').doc(item_data.id).delete().then(async function () {
NEXT: await database.collection('order_transactions').where('vendorId', '==', vendorID).get().then(async function (ordertransactionsanpshots) {

FILE: C:\deploy\adminpanel\resources\views\section\index.blade.php
LINE: 341
TEXT: await database.collection('users').where('vendorID', '==', vendorID).get().then(async function (userssanpshots) {
NEXT: if (userssanpshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\section\index.blade.php
LINE: 358
TEXT: database.collection('users').doc(item_data.id).delete().then(function () {
NEXT: });

FILE: C:\deploy\adminpanel\resources\views\section\index.blade.php
LINE: 369
TEXT: await database.collection('vendor_orders').where('vendorID', '==', vendorID).get().then(async function (vendorordersanpshots) {
NEXT: if (vendorordersanpshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\section\index.blade.php
LINE: 373
TEXT: database.collection('vendor_orders').doc(item_data.id).delete().then(function () {
NEXT: });

FILE: C:\deploy\adminpanel\resources\views\settings\app\adminCommission.blade.php
LINE: 65
TEXT: var ref = database.collection('settings').doc("AdminCommission");
NEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");

FILE: C:\deploy\adminpanel\resources\views\settings\app\adminCommission.blade.php
LINE: 66
TEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");

FILE: C:\deploy\adminpanel\resources\views\settings\app\adminCommission.blade.php
LINE: 88
TEXT: database.collection('settings').doc("AdminCommission").update({'isEnabled':checkboxValue,'fix_commission':howmuch,'commissionType':commission_type}).then(function(result) {
NEXT: window.location.href = '{{ url("settings/app/adminCommission")}}';

FILE: C:\deploy\adminpanel\resources\views\settings\app\banners.blade.php
LINE: 51
TEXT: var appHomeBanners = database.collection('settings').doc("AppHomeBanners");

FILE: C:\deploy\adminpanel\resources\views\settings\app\banners.blade.php
LINE: 61
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\settings\app\banners.blade.php
LINE: 100
TEXT: database.collection('settings').doc("AppHomeBanners").update({
NEXT: 'banners': banners,

FILE: C:\deploy\adminpanel\resources\views\settings\app\businessModel.blade.php
LINE: 199
TEXT: var restaurant = database.collection('settings').doc("vendor");

FILE: C:\deploy\adminpanel\resources\views\settings\app\businessModel.blade.php
LINE: 293
TEXT: database.collection('users').where('role', '==', 'provider').where('section_id', '==', sectionId).orderBy('firstName',

FILE: C:\deploy\adminpanel\resources\views\settings\app\businessModel.blade.php
LINE: 315
TEXT: database.collection('vendors').where('section_id', '==', sectionId).orderBy('title',

FILE: C:\deploy\adminpanel\resources\views\settings\app\businessModel.blade.php
LINE: 353
TEXT: database.collection('settings').doc('vendor').set({});

FILE: C:\deploy\adminpanel\resources\views\settings\app\businessModel.blade.php
LINE: 393
TEXT: database.collection('settings').doc("vendor").update({

FILE: C:\deploy\adminpanel\resources\views\settings\app\businessModel.blade.php
LINE: 467
TEXT: return await database.collection('vendors').where('section_id',

FILE: C:\deploy\adminpanel\resources\views\settings\app\businessModel.blade.php
LINE: 475
TEXT: return await database.collection('users').where('role', '==',

FILE: C:\deploy\adminpanel\resources\views\settings\app\businessModel.blade.php
LINE: 493
TEXT: database.collection('users').where('id', 'in',

FILE: C:\deploy\adminpanel\resources\views\settings\app\businessModel.blade.php
LINE: 507
TEXT: database.collection('vendors').where('id', 'in',

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 240
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 242
TEXT: var ref = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 244
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 246
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 248
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 250
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 252
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 254
TEXT: // var parcelPayStack = database.collection('settings').doc('parcelPayStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 256
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 258
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 260
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 262
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 264
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\cod.blade.php
LINE: 479
TEXT: database.collection('settings').doc("CODSettings").update({'isEnabled': isCODEnabled}).then(function (result) {

FILE: C:\deploy\adminpanel\resources\views\settings\app\deliveryCharge.blade.php
LINE: 63
TEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");
NEXT: var driverNearBy = database.collection('settings').doc("DriverNearBy");

FILE: C:\deploy\adminpanel\resources\views\settings\app\deliveryCharge.blade.php
LINE: 64
TEXT: var driverNearBy = database.collection('settings').doc("DriverNearBy");
NEXT: $(document).ready(function () {

FILE: C:\deploy\adminpanel\resources\views\settings\app\deliveryCharge.blade.php
LINE: 70
TEXT: database.collection('settings').doc('DeliveryCharge').set({
NEXT: 'vendor_can_modify': '',

FILE: C:\deploy\adminpanel\resources\views\settings\app\deliveryCharge.blade.php
LINE: 97
TEXT: database.collection('settings').doc("DeliveryCharge").update({
NEXT: 'vendor_can_modify': checkboxValue,

FILE: C:\deploy\adminpanel\resources\views\settings\app\documentVerificationSetting.blade.php
LINE: 46
TEXT: var ref = database.collection('settings').doc("document_verification_settings");
NEXT: $(document).ready(function(){

FILE: C:\deploy\adminpanel\resources\views\settings\app\documentVerificationSetting.blade.php
LINE: 52
TEXT: database.collection('settings').doc('document_verification_settings').set({});
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\settings\app\documentVerificationSetting.blade.php
LINE: 73
TEXT: database.collection('settings').doc("document_verification_settings").update({
NEXT: 'isDriverVerification':enableDriver,

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 323
TEXT: var ref = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 325
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 327
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 329
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 331
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 333
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 335
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 337
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 339
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 341
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 343
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 345
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 363
TEXT: database.collection('settings').doc('flutterWave').set({});

FILE: C:\deploy\adminpanel\resources\views\settings\app\flutterwave.blade.php
LINE: 633
TEXT: database.collection('settings').doc("flutterWave").update({

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 537
TEXT: var ref = database.collection('settings').doc("globalSettings");
NEXT: var mapKey = database.collection('settings').doc("googleMapKey");

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 538
TEXT: var mapKey = database.collection('settings').doc("googleMapKey");
NEXT: var refPlaceholderImage = database.collection('settings').doc("placeHolderImage");

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 539
TEXT: var refPlaceholderImage = database.collection('settings').doc("placeHolderImage");
NEXT: var contactUs = database.collection('settings').doc("ContactUs");

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 540
TEXT: var contactUs = database.collection('settings').doc("ContactUs");
NEXT: var version = database.collection('settings').doc("Version");

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 541
TEXT: var version = database.collection('settings').doc("Version");
NEXT: var story = database.collection('settings').doc("story");

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 542
TEXT: var story = database.collection('settings').doc("story");
NEXT: var vendor = database.collection('settings').doc("vendor");

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 543
TEXT: var vendor = database.collection('settings').doc("vendor");
NEXT: var provider = database.collection('settings').doc("provider");

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 544
TEXT: var provider = database.collection('settings').doc("provider");
NEXT: var DriverNearByRef = database.collection('settings').doc("DriverNearBy");

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 545
TEXT: var DriverNearByRef = database.collection('settings').doc("DriverNearBy");
NEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 546
TEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");
NEXT: var refCurrency = database.collection('currencies').where('isActive', '==', true);

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 548
TEXT: var refEmailSetting = database.collection('settings').doc("emailSetting");
NEXT: var refNotificationSetting = database.collection('settings').doc("notification_setting");

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 549
TEXT: var refNotificationSetting = database.collection('settings').doc("notification_setting");
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 551
TEXT: var homepagethemeRef = database.collection('settings').doc("home_page_theme");
NEXT: var services = database.collection('sections').where('isActive', '==', true).orderBy('order');

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 923
TEXT: database.collection('settings').doc("globalSettings").update({
NEXT: 'website_color': website_color,

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 952
TEXT: database.collection('settings').doc('placeHolderImage').update({
NEXT: 'image': placeholderphoto

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 955
TEXT: database.collection('settings').doc("ContactUs").update({
NEXT: 'Address': contact_us_address,

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 960
TEXT: database.collection('settings').doc("vendor").update({
NEXT: 'auto_approve_vendor': auto_approve_vendor,

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 964
TEXT: database.collection('settings').doc("provider").update({
NEXT: 'auto_approve_provider': auto_approve_provider,

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 967
TEXT: database.collection('settings').doc("story").update({
NEXT: 'isEnabled': store_can_upload_story,

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 971
TEXT: database.collection('settings').doc("Version").update({
NEXT: 'app_version': app_version,

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 978
TEXT: database.collection('settings').doc("googleMapKey").update({
NEXT: 'key': googleApiKey,

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 981
TEXT: database.collection('settings').doc("DriverNearBy").update({
NEXT: 'minimumDepositToRideAccept': minimumDepositToRideAccept,

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 990
TEXT: database.collection('settings').doc("digitalProduct").update({
NEXT: 'fileSize': fileSize,

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 993
TEXT: database.collection('settings').doc("notification_setting").update({
NEXT: 'senderId': senderId,

FILE: C:\deploy\adminpanel\resources\views\settings\app\global.blade.php
LINE: 997
TEXT: database.collection('settings').doc("emailSetting").update({
NEXT: 'fromName': fromName,

FILE: C:\deploy\adminpanel\resources\views\settings\app\maintenance_settings.blade.php
LINE: 56
TEXT: var ref = database.collection('settings').doc("maintenance_settings");
NEXT: $(document).ready(function(){

FILE: C:\deploy\adminpanel\resources\views\settings\app\maintenance_settings.blade.php
LINE: 62
TEXT: database.collection('settings').doc('maintenance_settings').set({});
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\settings\app\maintenance_settings.blade.php
LINE: 92
TEXT: database.collection('settings').doc("maintenance_settings").update({
NEXT: 'isMaintenanceModeForCustomer':enableCust,

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 299
TEXT: var ref = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 301
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 303
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 305
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 307
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 309
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 311
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 313
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 315
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 317
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 319
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 321
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 337
TEXT: database.collection('settings').doc('MercadoPago').set({});

FILE: C:\deploy\adminpanel\resources\views\settings\app\mercadopago.blade.php
LINE: 563
TEXT: database.collection('settings').doc("MercadoPago").update({

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 279
TEXT: var ref = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 281
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 283
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 285
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 287
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 289
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 291
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 293
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 295
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 297
TEXT: var stripe = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 299
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 301
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\midTrans.blade.php
LINE: 531
TEXT: database.collection('settings').doc('midTransSettings').delete({}).then(function(result) {});

FILE: C:\deploy\adminpanel\resources\views\settings\app\openaiSettings.blade.php
LINE: 49
TEXT: var ref_openai_settings = database.collection('settings').doc("openai_settings");

FILE: C:\deploy\adminpanel\resources\views\settings\app\openaiSettings.blade.php
LINE: 60
TEXT: database.collection('settings').doc('openai_settings').set({
NEXT: 'status': '',

FILE: C:\deploy\adminpanel\resources\views\settings\app\openaiSettings.blade.php
LINE: 85
TEXT: database.collection('settings').doc("openai_settings").update({
NEXT: 'status': status,

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 389
TEXT: var ref = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 391
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 393
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 395
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 397
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 399
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 401
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 403
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 405
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 407
TEXT: var stripe = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 409
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\orangePay.blade.php
LINE: 411
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 339
TEXT: var ref = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 341
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 343
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 345
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 347
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 349
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 351
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 353
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 355
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 357
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 359
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 361
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 377
TEXT: database.collection('settings').doc('payFastSettings').set({});

FILE: C:\deploy\adminpanel\resources\views\settings\app\payfast.blade.php
LINE: 633
TEXT: database.collection('settings').doc("payFastSettings").update({

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 296
TEXT: var ref = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 298
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 300
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 302
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 304
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 306
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 308
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 310
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 312
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 314
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 316
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 318
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paypal.blade.php
LINE: 570
TEXT: database.collection('settings').doc("paypalSettings").update({

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 327
TEXT: var ref = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 329
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 331
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 333
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 335
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 337
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 339
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 341
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 343
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 345
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 347
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 349
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 365
TEXT: database.collection('settings').doc('payStack').set({});

FILE: C:\deploy\adminpanel\resources\views\settings\app\paystack.blade.php
LINE: 613
TEXT: database.collection('settings').doc("payStack").update({

FILE: C:\deploy\adminpanel\resources\views\settings\app\radiosConfiguration.blade.php
LINE: 116
TEXT: var refDriver = database.collection('settings').doc("DriverNearBy");
NEXT: $(document).ready(function() {

FILE: C:\deploy\adminpanel\resources\views\settings\app\radiosConfiguration.blade.php
LINE: 167
TEXT: database.collection('settings').doc("DriverNearBy").update({
NEXT: 'distanceType': distance_type,

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 299
TEXT: var ref = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 301
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 303
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 305
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 307
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 309
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 311
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 313
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 315
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 317
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 319
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 321
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\razorpay.blade.php
LINE: 573
TEXT: database.collection('settings').doc("razorpaySettings").update({

FILE: C:\deploy\adminpanel\resources\views\settings\app\schedule_notification.blade.php
LINE: 64
TEXT: var ref=database.collection('settings').doc("scheduleOrderNotification");
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\settings\app\schedule_notification.blade.php
LINE: 71
TEXT: database.collection('settings').doc('scheduleOrderNotification').set({'notifyTime': '','timeUnit':''});
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\settings\app\schedule_notification.blade.php
LINE: 93
TEXT: database.collection('settings').doc("scheduleOrderNotification").update({'notifyTime': time,'timeUnit':timeUnit}).then(function(result) {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\resources\views\settings\app\specialDiscountOffer.blade.php
LINE: 40
TEXT: var ref = database.collection('settings').doc("specialDiscountOffer");
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\resources\views\settings\app\specialDiscountOffer.blade.php
LINE: 47
TEXT: database.collection('settings').doc('specialDiscountOffer').set({});
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\settings\app\specialDiscountOffer.blade.php
LINE: 59
TEXT: database.collection('settings').doc("specialDiscountOffer").update({'isEnable': checkboxValue}).then(function (result) {
NEXT: window.location.href = '{{ url("settings/app/specialOffer")}}';

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 299
TEXT: var ref = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 301
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 303
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 305
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 307
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 309
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 311
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 313
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 315
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 317
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 319
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 321
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\stripe.blade.php
LINE: 565
TEXT: database.collection('settings').doc("stripeSettings").update({

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 225
TEXT: var ref = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 227
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 229
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 231
TEXT: var stripeData = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 233
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 235
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 237
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 239
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 241
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 243
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 245
TEXT: var xenditSettings = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 247
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\wallet.blade.php
LINE: 467
TEXT: database.collection('settings').doc("walletSettings").update({

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 277
TEXT: var ref = database.collection('settings').doc('xendit_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 279
TEXT: var codData = database.collection('settings').doc('CODSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 281
TEXT: var razorpayData = database.collection('settings').doc('razorpaySettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 283
TEXT: var paypalData = database.collection('settings').doc('paypalSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 285
TEXT: var walletData = database.collection('settings').doc('walletSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 287
TEXT: var payFastSettings = database.collection('settings').doc('payFastSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 289
TEXT: var payStackSettings = database.collection('settings').doc('payStack');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 291
TEXT: var flutterWaveSettings = database.collection('settings').doc('flutterWave');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 293
TEXT: var MercadopagoSettings = database.collection('settings').doc('MercadoPago');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 295
TEXT: var stripe = database.collection('settings').doc('stripeSettings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 297
TEXT: var orangePay = database.collection('settings').doc('orange_money_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 299
TEXT: var midTrans = database.collection('settings').doc('midtrans_settings');

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 529
TEXT: database.collection('settings').doc('xenditSettings').delete({}).then(function(result) {});

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 531
TEXT: database.collection('settings').doc('midTransSettings').delete({}).then(function(result) {});

FILE: C:\deploy\adminpanel\resources\views\settings\app\xendit.blade.php
LINE: 533
TEXT: database.collection('settings').doc('orangePaySettings').delete({}).then(function(result) {});

FILE: C:\deploy\adminpanel\resources\views\settings\currencies\create.blade.php
LINE: 236
TEXT: var globalSettingsRef = database.collection('settings').doc("globalSettings");

FILE: C:\deploy\adminpanel\resources\views\settings\languages\create.blade.php
LINE: 170
TEXT: var ref = database.collection('settings').doc('languages');

FILE: C:\deploy\adminpanel\resources\views\settings\languages\create.blade.php
LINE: 192
TEXT: database.collection('settings').doc('languages').set({ 'list': '' });

FILE: C:\deploy\adminpanel\resources\views\settings\languages\create.blade.php
LINE: 284
TEXT: database.collection('settings').doc('languages').update({ 'list': languages }).then(function (result) {

FILE: C:\deploy\adminpanel\resources\views\settings\languages\edit.blade.php
LINE: 165
TEXT: var ref = database.collection('settings').doc('languages');

FILE: C:\deploy\adminpanel\resources\views\settings\languages\edit.blade.php
LINE: 173
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\settings\languages\edit.blade.php
LINE: 343
TEXT: database.collection('settings').doc('languages').update({ 'list': languages }).then(function (result) {

FILE: C:\deploy\adminpanel\resources\views\settings\languages\index.blade.php
LINE: 120
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\settings\languages\index.blade.php
LINE: 124
TEXT: var ref = database.collection('settings').doc('languages');

FILE: C:\deploy\adminpanel\resources\views\settings\languages\index.blade.php
LINE: 408
TEXT: database.collection('settings').doc('languages').update({

FILE: C:\deploy\adminpanel\resources\views\settings\languages\index.blade.php
LINE: 418
TEXT: database.collection('settings').doc('languages').update({

FILE: C:\deploy\adminpanel\resources\views\settings\languages\index.blade.php
LINE: 452
TEXT: database.collection('settings').doc('languages').update({

FILE: C:\deploy\adminpanel\resources\views\settings\mobile\globals.blade.php
LINE: 53
TEXT: var ref = database.collection('settings');
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\settings\mobile\globals.blade.php
LINE: 68
TEXT: database.collection('settings').doc('googleMapKey').update({'key':mapKey}).then(function(result) {
NEXT: window.location.href = '{!! url()->current() !!}';

FILE: C:\deploy\adminpanel\resources\views\settings\promos\edit.blade.php
LINE: 136
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storage = firebase.storage();

FILE: C:\deploy\adminpanel\resources\views\sos\edit.blade.php
LINE: 211
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\sos\edit.blade.php
LINE: 226
TEXT: var ref_place = database.collection('settings').doc("placeHolderImage");
NEXT: ref_place.get().then( async function(snapshots){

FILE: C:\deploy\adminpanel\resources\views\sos\edit.blade.php
LINE: 234
TEXT: var alovelaceDocumentRef = database.collection('vendor_orders').doc();
NEXT: if(alovelaceDocumentRef.id){

FILE: C:\deploy\adminpanel\resources\views\sos\edit.blade.php
LINE: 340
TEXT: var driver = database.collection('users').where("id","==",driverdata.driver.id);
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 842
TEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");
NEXT: var deliveryChargeFlag = false;

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 873
TEXT: var driverNearBy = database.collection('settings').doc("DriverNearBy");

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 875
TEXT: database.collection('settings').doc("story").get().then(async function(snapshots) {
NEXT: var story_data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 883
TEXT: var selfDeliveryRef = database.collection('settings').doc("globalSettings");
NEXT: selfDeliveryRef.get().then(async function(settingSnapshots) {

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 928
TEXT: database.collection('zone').where('publish', '==', true).orderBy('name', 'asc').get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 977
TEXT: database.collection('users').where('role', '==', 'vendor').where('sectionId', '==', section_id).orderBy('firstName', 'asc').get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 1004
TEXT: database.collection('users').where('id', '==', ownerId).get().then(async function(snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 1021
TEXT: var emailSetting = database.collection('settings').doc('emailSetting');

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 1033
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 1384
TEXT: database.collection('users').doc(user_id).update({
NEXT: 'section_id': section_id,

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 1392
TEXT: geoFirestore.collection('vendors').doc(vendor_id).set({
NEXT: 'section_id': section_id,

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 1429
TEXT: await database.collection('users').doc(user_id).update({
NEXT: 'section_id': section_id

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 1434
TEXT: geoFirestore.collection('vendors').doc(vendor_id).update({
NEXT: 'deliveryCharge': deliveryCharge

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 1565
TEXT: database.collection('vendors').doc(id).update({
NEXT: 'specialDiscount': specialDiscount

FILE: C:\deploy\adminpanel\resources\views\stores\create.blade.php
LINE: 2142
TEXT: await database.collection('users').doc(selectedOwnerId).get().then(async function(
NEXT: snapshot) {

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 822
TEXT: var ref = database.collection('vendors').where("id", "==", id);
NEXT: var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 848
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 849
TEXT: var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");
NEXT: var deliveryChargeFlag = false;

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 886
TEXT: var driverNearBy = database.collection('settings').doc("DriverNearBy");

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 908
TEXT: database.collection('settings').doc("story").get().then(async function(snapshots) {
NEXT: var story_data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 917
TEXT: var selfDeliveryRef = database.collection('settings').doc("globalSettings");
NEXT: selfDeliveryRef.get().then(async function(settingSnapshots) {

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 956
TEXT: database.collection('zone').where('publish', '==', true).orderBy('name', 'asc').get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 1311
TEXT: await database.collection('users').where("id", "==", vendor.author).get().then(async function(snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 1695
TEXT: geoFirestore.collection('vendors').doc(id).update({

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 1751
TEXT: geoFirestore.collection('vendors').doc(id).update({
NEXT: 'deliveryCharge': deliveryCharge

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 1769
TEXT: geoFirestore.collection('vendors').doc(id).update({
NEXT: 'deliveryCharge': deliveryCharge

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 2254
TEXT: database.collection('vendors').doc(id).update({
NEXT: 'specialDiscount': specialDiscount

FILE: C:\deploy\adminpanel\resources\views\stores\edit.blade.php
LINE: 2624
TEXT: database.collection('vendors').doc(id).update({
NEXT: 'workingHours': workingHours

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 232
TEXT: ? database.collection('vendors').where('section_id', '==', active_id)
NEXT: : database.collection('vendors');

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 233
TEXT: : database.collection('vendors');

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 244
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: 

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 635
TEXT: await database.collection('users').doc(id).get().then((snapshots) => {
NEXT: let data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 653
TEXT: await database.collection('vendor_orders').where('vendorID', '==', id).get().then(async function(productSnapshots) {
NEXT: order_total = productSnapshots.docs.length;

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 686
TEXT: await database.collection('users').where('vendorID', '==', storeId).where('role', '==', 'vendor').get().then(async function(userssanpshots) {
NEXT: if (userssanpshots.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 696
TEXT: await database.collection('settings').doc("Version").get().then(function(snapshot) {
NEXT: var settingData = snapshot.data();

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 739
TEXT: var orderSnapshot = await database.collection('vendor_orders').where('vendorID', '==', storeId).get();
NEXT: if (!orderSnapshot.empty) {

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 775
TEXT: const driverSnapshots = await database.collection('users').where('role', '==', 'driver').where('vendorID', '==', storeId).get();
NEXT: if (!driverSnapshots.empty) {

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 788
TEXT: await database.collection('users').where("id", "==", author).get().then(async function(snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 833
TEXT: await database.collection('users').doc(author).get().then(async function(snapshotsusers) {
NEXT: userData = snapshotsusers.data();

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 836
TEXT: await database.collection('vendors').doc(id).get().then(async function(snapshotsvendors) {
NEXT: vendorData = snapshotsvendors.data();

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 902
TEXT: await database.collection('users').doc(user_id).set(userData).then(async function(result) {
NEXT: await geoFirestore.collection('vendors').doc(vendor_id).set(vendorData).then(async function(result) {

FILE: C:\deploy\adminpanel\resources\views\stores\index.blade.php
LINE: 903
TEXT: await geoFirestore.collection('vendors').doc(vendor_id).set(vendorData).then(async function(result) {
NEXT: if(vendorProducts.length > 0){

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 718
TEXT: var ref = database.collection('vendors').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 724
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var sectionId = '';

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 792
TEXT: database.collection('settings').doc("vendor").get().then(async function(snapshots) {
NEXT: var businessModelSettings = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1126
TEXT: database.collection('zone').where('id', '==', vendor.zoneId).get().then(
NEXT: async function(zoneSnapshots) {

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1162
TEXT: await database.collection('users').where("id", "==", vendor.author).get().then(
NEXT: async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1227
TEXT: database.collection('vendors').doc(id).update({
NEXT: 'title': vendorname,

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1245
TEXT: database.collection('users').where('id', '==', vendorId).get().then(async function(snapshot) {
NEXT: if (snapshot.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1306
TEXT: await database.collection('vendor_orders').where('vendorID', '==', '<?php echo $id; ?>').get().then(
NEXT: async function(orderSnapshots) {

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1325
TEXT: await database.collection('vendor_orders').where('vendorID', '==', '<?php echo $id; ?>').where('status',
NEXT: 'in', ["Order Completed"]).get().then(async function(orderSnapshots) {

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1397
TEXT: database.collection('users').where('id', '==', vendorOwnerId).get().then(async function(snapshot) {

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1409
TEXT: database.collection('users').doc(vendorOwnerId).update({
NEXT: 'wallet_amount': newWalletAmount

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1413
TEXT: database.collection('wallet').doc(tempId).set({
NEXT: 'amount': parseFloat(amount),

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1782
TEXT: await database.collection('users').doc(vendorOwnerId).update({
NEXT: 'subscription_plan': planData,

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1795
TEXT: await database.collection('vendors').doc(vendorId).update({
NEXT: 'subscription_plan': planData,

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1805
TEXT: await database.collection('vendors').doc(vendorId).update({
NEXT: 'subscription_plan': planData,

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1848
TEXT: database.collection('vendors').where('id', '==', id).get().then(async function(snapshot) {
NEXT: var data = snapshot.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1886
TEXT: await database.collection('users').doc(vendorOwnerId).update({
NEXT: 'subscription_plan.orderLimit': order_limit,

FILE: C:\deploy\adminpanel\resources\views\stores\view.blade.php
LINE: 1890
TEXT: await database.collection('vendors').doc("{{ $id }}").update({
NEXT: 'subscription_plan.orderLimit': order_limit,

FILE: C:\deploy\adminpanel\resources\views\subscription_plans\current_subscriber.blade.php
LINE: 75
TEXT: var subscriberListRef = database.collection('users').where('subscriptionPlanId', '==', planId);
NEXT: var currentCurrency = '';

FILE: C:\deploy\adminpanel\resources\views\subscription_plans\current_subscriber.blade.php
LINE: 292
TEXT: await database.collection('vendors').where('id', '==', vendorid).get().then(async function(snapshots) {
NEXT: if (snapshots.docs.length) {

FILE: C:\deploy\adminpanel\resources\views\subscription_plans\history.blade.php
LINE: 208
TEXT: var ref = database.collection('vendors').where("id", "==", storeID);
NEXT: await ref.get().then(async function(querysnapshots) {

FILE: C:\deploy\adminpanel\resources\views\subscription_plans\history.blade.php
LINE: 450
TEXT: await database.collection('users').doc(id).get().then(async function(snapshot) {
NEXT: if (snapshot && snapshot.data()) {

FILE: C:\deploy\adminpanel\resources\views\subscription_plans\history.blade.php
LINE: 463
TEXT: await database.collection('users').doc(id).get().then(async function(snapshot) {
NEXT: if (snapshot && snapshot.data()) {

FILE: C:\deploy\adminpanel\resources\views\subscription_plans\index.blade.php
LINE: 122
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\subscription_plans\index.blade.php
LINE: 434
TEXT: await database.collection('users').where('subscriptionPlanId', '==', id).get()
NEXT: .then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\subscription_plans\save.blade.php
LINE: 196
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\resources\views\support_history\inbox.blade.php
LINE: 93
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\support_history\inbox.blade.php
LINE: 217
TEXT: snap = await database.collection('users').doc(id).get();
NEXT: }else{

FILE: C:\deploy\adminpanel\resources\views\support_history\inbox.blade.php
LINE: 271
TEXT: userSnap = await database.collection("users").doc(activeChatId).get();
NEXT: }else{

FILE: C:\deploy\adminpanel\resources\views\support_history\index.blade.php
LINE: 94
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\support_history\index.blade.php
LINE: 274
TEXT: await database.collection('users').doc(id).get().then(async function(snapshot) {
NEXT: if (snapshot && snapshot.data()) {

FILE: C:\deploy\adminpanel\resources\views\taxes\create.blade.php
LINE: 151
TEXT: var globalSettingsRef = database.collection('settings').doc("globalSettings");
NEXT: var newcountriesjs = '<?php echo json_encode($newcountriesjs); ?>';

FILE: C:\deploy\adminpanel\resources\views\taxes\create.blade.php
LINE: 256
TEXT: database.collection('tax').doc(id).set({
NEXT: 'title': title,

FILE: C:\deploy\adminpanel\resources\views\taxes\edit.blade.php
LINE: 150
TEXT: var ref = database.collection('tax').where("id", "==", id);
NEXT: var append_list = '';

FILE: C:\deploy\adminpanel\resources\views\taxes\edit.blade.php
LINE: 247
TEXT: database.collection('tax').doc(id).update({
NEXT: 'title': title,

FILE: C:\deploy\adminpanel\resources\views\taxes\index.blade.php
LINE: 87
TEXT: var ref = database.collection('tax').orderBy('title');
NEXT: var section_id = getCookie('section_id') || null;

FILE: C:\deploy\adminpanel\resources\views\taxes\index.blade.php
LINE: 89
TEXT: var ref = database.collection('tax').orderBy('title');
NEXT: if (section_id) {

FILE: C:\deploy\adminpanel\resources\views\taxes\index.blade.php
LINE: 224
TEXT: database.collection('tax').doc(dataId).delete().then(function () {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\resources\views\taxes\index.blade.php
LINE: 239
TEXT: database.collection('tax').doc(id).update({
NEXT: 'enable': true

FILE: C:\deploy\adminpanel\resources\views\taxes\index.blade.php
LINE: 244
TEXT: database.collection('tax').doc(id).update({
NEXT: 'enable': false

FILE: C:\deploy\adminpanel\resources\views\taxes\index.blade.php
LINE: 253
TEXT: database.collection('tax').doc(id).delete().then(function (result) {
NEXT: window.location.href = '{{ url()->current() }}';

FILE: C:\deploy\adminpanel\resources\views\terms_conditions\index.blade.php
LINE: 111
TEXT: var ref = database.collection('settings').doc('termsAndConditions');

FILE: C:\deploy\adminpanel\resources\views\terms_conditions\index.blade.php
LINE: 194
TEXT: database.collection('settings').doc('termsAndConditions').update({'terms_and_condition':terms_and_conditions}).then(function(result) {

FILE: C:\deploy\adminpanel\resources\views\transactions\create.blade.php
LINE: 88
TEXT: await database.collection('vendor_orders').where('driverID', '==', driverID).where("status", "in", ["Order Completed"]).get().then(async function(orderSnapshots) {

FILE: C:\deploy\adminpanel\resources\views\transactions\create.blade.php
LINE: 115
TEXT: database.collection('users').where('role', '==', 'driver').get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\transactions\index.blade.php
LINE: 177
TEXT: var refData = database.collection('wallet');
NEXT: var search = jQuery("#search").val();

FILE: C:\deploy\adminpanel\resources\views\transactions\index.blade.php
LINE: 180
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\transactions\index.blade.php
LINE: 212
TEXT: ref = database.collection('users').doc(id);
NEXT: await ref.get().then(async function(querysnapshots) {

FILE: C:\deploy\adminpanel\resources\views\transactions\index.blade.php
LINE: 288
TEXT: var username = database.collection('users').where('id', '==', id);
NEXT: username.get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\transactions\index.blade.php
LINE: 741
TEXT: database.collection('wallet').doc(dataId).delete().then(function() {
NEXT: setTimeout(function() {

FILE: C:\deploy\adminpanel\resources\views\transactions\index.blade.php
LINE: 754
TEXT: database.collection('wallet').doc(id).delete().then(function() {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\resources\views\transactions\index.blade.php
LINE: 760
TEXT: await database.collection('users').where("id", "==", user).get().then(async function(snapshotss) {
NEXT: if (snapshotss.docs[0]) {

FILE: C:\deploy\adminpanel\resources\views\transactions\index.blade.php
LINE: 769
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\users\chat.blade.php
LINE: 71
TEXT: database.collection('users').doc(id).get().then(async function(userSnapshot) {
NEXT: if (userSnapshot.exists) {

FILE: C:\deploy\adminpanel\resources\views\users\chat.blade.php
LINE: 202
TEXT: const userDoc = await database.collection('users').doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\resources\views\users\chat.blade.php
LINE: 309
TEXT: const userDoc = await database.collection("users").doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\resources\views\users\create.blade.php
LINE: 155
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\resources\views\users\create.blade.php
LINE: 237
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\resources\views\users\edit.blade.php
LINE: 203
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\resources\views\users\edit.blade.php
LINE: 211
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\users\edit.blade.php
LINE: 217
TEXT: var currency = database.collection('settings');

FILE: C:\deploy\adminpanel\resources\views\users\edit.blade.php
LINE: 300
TEXT: var orderRef = database.collection('vendor_orders').where("authorID", "==", id).where('section_id', '==', section_id);
NEXT: orderRef.get().then(async function (snapshotsorder) {

FILE: C:\deploy\adminpanel\resources\views\users\edit.blade.php
LINE: 352
TEXT: database.collection('users').doc(id).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\resources\views\users\index.blade.php
LINE: 98
TEXT: var ref = database.collection('users').where("role", "in", ["customer"]).orderBy('createdAt', 'desc');
NEXT: var user_permissions = '<?php echo @session('user_permissions') ?>';

FILE: C:\deploy\adminpanel\resources\views\users\index.blade.php
LINE: 145
TEXT: ref = database.collection('users').where("role", "in", ["customer"]);
NEXT: if ($('#daterange span').html() != '{{trans("lang.select_range")}}' && daterangepicker) {

FILE: C:\deploy\adminpanel\resources\views\users\index.blade.php
LINE: 168
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function(snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\users\index.blade.php
LINE: 468
TEXT: await database.collection('wallet').where('user_id', '==', userId).get().then(async function(snapshotsItem) {
NEXT: if (snapshotsItem.docs.length > 0) {

FILE: C:\deploy\adminpanel\resources\views\users\index.blade.php
LINE: 472
TEXT: database.collection('wallet').doc(item_data.id).delete().then(function() {
NEXT: });

FILE: C:\deploy\adminpanel\resources\views\users\index.blade.php
LINE: 478
TEXT: await database.collection('settings').doc("Version").get().then(function (snapshot) {
NEXT: var settingData = snapshot.data();

FILE: C:\deploy\adminpanel\resources\views\users\index.blade.php
LINE: 531
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': true

FILE: C:\deploy\adminpanel\resources\views\users\index.blade.php
LINE: 535
TEXT: database.collection('users').doc(id).update({
NEXT: 'active': false

FILE: C:\deploy\adminpanel\resources\views\users\view.blade.php
LINE: 185
TEXT: var ref = database.collection('users').where("id", "==", id);

FILE: C:\deploy\adminpanel\resources\views\users\view.blade.php
LINE: 189
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\users\view.blade.php
LINE: 195
TEXT: var currency = database.collection('settings');

FILE: C:\deploy\adminpanel\resources\views\users\view.blade.php
LINE: 329
TEXT: database.collection('users').where('id', '==', id).get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\resources\views\users\view.blade.php
LINE: 342
TEXT: database.collection('users').doc(id).update({
NEXT: 'wallet_amount': newWalletAmount

FILE: C:\deploy\adminpanel\resources\views\users\view.blade.php
LINE: 346
TEXT: database.collection('wallet').doc(tempId).set({
NEXT: 'amount': parseFloat(amount),

FILE: C:\deploy\adminpanel\resources\views\users\view.blade.php
LINE: 407
TEXT: database.collection('vendor_orders').where('authorID', '==', id).where('section_id', '==', section_id).get().then(async function (orderSnapshots) {
NEXT: var paymentData = orderSnapshots.docs;

FILE: C:\deploy\adminpanel\resources\views\vehicleType\edit.blade.php
LINE: 295
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');

FILE: C:\deploy\adminpanel\resources\views\vehicleType\index.blade.php
LINE: 84
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\vendors\chat.blade.php
LINE: 73
TEXT: database.collection('users').doc(id).get().then(async function(userSnapshot) {
NEXT: if (userSnapshot.exists) {

FILE: C:\deploy\adminpanel\resources\views\vendors\chat.blade.php
LINE: 203
TEXT: const userDoc = await database.collection('users').doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\resources\views\vendors\chat.blade.php
LINE: 308
TEXT: const userDoc = await database.collection("users").doc(id).get();
NEXT: const userData = userDoc.data();

FILE: C:\deploy\adminpanel\resources\views\vendors\create.blade.php
LINE: 224
TEXT: var emailSetting=database.collection('settings').doc('emailSetting');
NEXT: let businessModelData = '';

FILE: C:\deploy\adminpanel\resources\views\vendors\create.blade.php
LINE: 230
TEXT: let businessModelRef = await database.collection('settings').doc("vendor").get();
NEXT: businessModelData = businessModelRef.data();

FILE: C:\deploy\adminpanel\resources\views\vendors\create.blade.php
LINE: 244
TEXT: let documentVerify = await database.collection('settings').doc('document_verification_settings').get();
NEXT: let documentSettings = documentVerify.data();

FILE: C:\deploy\adminpanel\resources\views\vendors\create.blade.php
LINE: 258
TEXT: var globalSettingsRef = database.collection('settings').doc('globalSettings');
NEXT: globalSettingsRef.get().then(async function (snapshot) {

FILE: C:\deploy\adminpanel\resources\views\vendors\create.blade.php
LINE: 378
TEXT: database.collection('users').doc(user_id).set({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php
LINE: 71
TEXT: var allDriver = database.collection('users').where('role','==','vendor');
NEXT: var ref = database.collection('users').where("id", "==", id);

FILE: C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php
LINE: 72
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var docsRef = database.collection('documents').where('enable', '==', true).where('type','==','vendor');

FILE: C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php
LINE: 296
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': true, isActive: true });
NEXT: }else{

FILE: C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php
LINE: 300
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php
LINE: 305
TEXT: await database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php
LINE: 36
TEXT: var allVendor = database.collection('users').where('role', '==', 'vendor');
NEXT: var driverRef= database.collection('users').where('id','==',id);

FILE: C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php
LINE: 37
TEXT: var driverRef= database.collection('users').where('id','==',id);
NEXT: var database = firebase.firestore();

FILE: C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php
LINE: 50
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php
LINE: 338
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': true, isActive:true });
NEXT: } else {

FILE: C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php
LINE: 342
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php
LINE: 347
TEXT: await database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
NEXT: }

FILE: C:\deploy\adminpanel\resources\views\vendors\edit.blade.php
LINE: 231
TEXT: database.collection('users').where("id", "==", id).get().then(function(snapshot) {
NEXT: if (!snapshot.empty) {

FILE: C:\deploy\adminpanel\resources\views\vendors\edit.blade.php
LINE: 251
TEXT: var ref = database.collection('users').where("id", "==", id);
NEXT: var photo = "";

FILE: C:\deploy\adminpanel\resources\views\vendors\edit.blade.php
LINE: 266
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: var storageRef = firebase.storage().ref('images');

FILE: C:\deploy\adminpanel\resources\views\vendors\edit.blade.php
LINE: 304
TEXT: await database.collection('users').where("id", "==",id).get().then(async function (snapshots) {
NEXT: snapshots.docs.forEach((listval) => {

FILE: C:\deploy\adminpanel\resources\views\vendors\edit.blade.php
LINE: 429
TEXT: await database.collection('users').doc(ownerId).update({
NEXT: 'firstName': userFirstName,

FILE: C:\deploy\adminpanel\resources\views\vendors\edit.blade.php
LINE: 439
TEXT: await geoFirestore.collection('vendors').doc(store_id).update({
NEXT: 'authorName': userFirstName +' ' +userLastName,

FILE: C:\deploy\adminpanel\resources\views\vendors\edit.blade.php
LINE: 484
TEXT: const userRef = database.collection('users').doc(ownerId);
NEXT: const userDoc = await userRef.get();

FILE: C:\deploy\adminpanel\resources\views\vendors\edit.blade.php
LINE: 490
TEXT: database.collection('users').doc(ownerId).update({
NEXT: 'subscriptionExpiryDate': subscriptionPlanExpiryDate,

FILE: C:\deploy\adminpanel\resources\views\vendors\index.blade.php
LINE: 183
TEXT: ref = database.collection('users').where("role", "==", "vendor");
NEXT: if(section_id){

FILE: C:\deploy\adminpanel\resources\views\vendors\index.blade.php
LINE: 203
TEXT: var ref = database.collection('users').where("role", "==", "vendor");
NEXT: if(section_id){

FILE: C:\deploy\adminpanel\resources\views\vendors\index.blade.php
LINE: 225
TEXT: var placeholder = database.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\resources\views\vendors\index.blade.php
LINE: 679
TEXT: let vendorRef = await database.collection('vendors').doc(vendorId).get();
NEXT: if (vendorRef.exists) {

FILE: C:\deploy\adminpanel\resources\views\vendors\index.blade.php
LINE: 684
TEXT: let vendorQuery = await database.collection('vendors').where('author', '==', vendorId).limit(1).get();
NEXT: if (!vendorQuery.empty) {

FILE: C:\deploy\adminpanel\resources\views\vendors\index.blade.php
LINE: 728
TEXT: await database.collection('wallet').where('user_id', '==', userId).get().then(async function (snapshotsItem) {

FILE: C:\deploy\adminpanel\resources\views\vendors\index.blade.php
LINE: 734
TEXT: database.collection('wallet').doc(item_data.id).delete().then(function () {

FILE: C:\deploy\adminpanel\resources\views\vendors\index.blade.php
LINE: 771
TEXT: database.collection('settings').doc("Version").get().then(function(snapshot) {
NEXT: var settingData=snapshot.data();

FILE: C:\deploy\adminpanel\resources\views\vendors\index.blade.php
LINE: 832
TEXT: database.collection('users').doc(id).update({'active': true}).then(function (result) {
NEXT: });

FILE: C:\deploy\adminpanel\resources\views\vendors\index.blade.php
LINE: 835
TEXT: database.collection('users').doc(id).update({'active': false}).then(function (result) {
NEXT: });

FILE: C:\deploy\adminpanel\resources\views\vendors_payouts\create.blade.php
LINE: 169
TEXT: var emailSetting = database.collection('settings').doc('emailSetting');

FILE: C:\deploy\adminpanel\resources\views\vendors_payouts\create.blade.php
LINE: 197
TEXT: await database.collection('vendor_orders').where('vendor.id', '==', vendorID).where("status", "in", ["Order Completed"]).get().then(async function (orderSnapshots) {

FILE: C:\deploy\adminpanel\resources\views\vendors_payouts\create.blade.php
LINE: 299
TEXT: database.collection('vendors').where('section_id', '==', section_id).get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\resources\views\vendors_payouts\create.blade.php
LINE: 360
TEXT: database.collection('users').where("vendorID", "==", vendorID).where('role','==','vendor').get().then(function (snapshotss) {
NEXT: if (snapshotss.docs.length) {

FILE: C:\deploy\adminpanel\resources\views\vendors_payouts\create.blade.php
LINE: 363
TEXT: database.collection('users').doc(userdata.id).update({'wallet_amount': price}).then(async function (result) {
NEXT: if (currencyAtRight) {

FILE: C:\deploy\adminpanel\resources\views\vendors_payouts\create.blade.php
LINE: 452
TEXT: await database.collection('users').where("vendorID", "==", vendorID).where('role','==','vendor').get().then(async function (snapshotss) {
NEXT: if (snapshotss.docs.length) {

FILE: C:\deploy\adminpanel\resources\views\vendors_payouts\create.blade.php
LINE: 469
TEXT: await database.collection('vendors').where('id', "==", vendorUser).get().then(async function (vendorSnapshots) {
NEXT: var vendorData = vendorSnapshots.docs[0].data();

FILE: C:\deploy\adminpanel\resources\views\vendors_payouts\create.blade.php
LINE: 481
TEXT: await database.collection('users').where('vendorID', "==", vendorUser).where('role','==','vendor').get().then(async function (vendorSnapshots) {

FILE: C:\deploy\adminpanel\resources\views\vendors_payouts\index.blade.php
LINE: 686
TEXT: await database.collection('vendors').where('id', '==', vendorId).get().then(async function(snapshots) {

FILE: C:\deploy\adminpanel\resources\views\vendors_payouts\index.blade.php
LINE: 872
TEXT: await database.collection('vendors').where("id", "==", vendor).get().then(async function(snapshotss) {

FILE: C:\deploy\adminpanel\resources\views\zone\create.blade.php
LINE: 182
TEXT: var ref = database.collection('zone');
NEXT: $(document).ready(function() {

FILE: C:\deploy\adminpanel\resources\views\zone\create.blade.php
LINE: 231
TEXT: database.collection('zone').doc(id).set({
NEXT: 'id': id,

FILE: C:\deploy\adminpanel\resources\views\zone\create.blade.php
LINE: 245
TEXT: database.collection('zone').doc(id).set({
NEXT: 'id': id,

FILE: C:\deploy\adminpanel\resources\views\zone\create.blade.php
LINE: 447
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\zone\edit.blade.php
LINE: 183
TEXT: var ref = database.collection('zone').where("id", "==", id);
NEXT: var default_lat = getCookie('default_latitude');

FILE: C:\deploy\adminpanel\resources\views\zone\edit.blade.php
LINE: 345
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\resources\views\zone\edit.blade.php
LINE: 494
TEXT: database.collection('zone').doc(id).set({
NEXT: 'id': id,

FILE: C:\deploy\adminpanel\resources\views\zone\index.blade.php
LINE: 89
TEXT: var ref = database.collection('zone');
NEXT: var append_list = '';

FILE: C:\deploy\adminpanel\resources\views\zone\index.blade.php
LINE: 184
TEXT: database.collection('zone').doc(dataId).delete().then(function () {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\resources\views\zone\index.blade.php
LINE: 197
TEXT: database.collection('zone').doc(id).update({
NEXT: 'publish': true

FILE: C:\deploy\adminpanel\resources\views\zone\index.blade.php
LINE: 202
TEXT: database.collection('zone').doc(id).update({
NEXT: 'publish': false

FILE: C:\deploy\adminpanel\resources\views\zone\index.blade.php
LINE: 211
TEXT: database.collection('zone').doc(id).delete().then(function (result) {
NEXT: window.location.reload();

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 549
TEXT: var ref = database.collection('settings').doc("globalSettings");
NEXT: var mapKey = database.collection('settings').doc("googleMapKey");

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 550
TEXT: var mapKey = database.collection('settings').doc("googleMapKey");
NEXT: var refPlaceholderImage = database.collection('settings').doc("placeHolderImage");

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 551
TEXT: var refPlaceholderImage = database.collection('settings').doc("placeHolderImage");
NEXT: var contactUs = database.collection('settings').doc("ContactUs");

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 552
TEXT: var contactUs = database.collection('settings').doc("ContactUs");
NEXT: var version = database.collection('settings').doc("Version");

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 553
TEXT: var version = database.collection('settings').doc("Version");
NEXT: var story = database.collection('settings').doc("story");

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 554
TEXT: var story = database.collection('settings').doc("story");
NEXT: var vendor = database.collection('settings').doc("vendor");

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 555
TEXT: var vendor = database.collection('settings').doc("vendor");
NEXT: var provider = database.collection('settings').doc("provider");

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 556
TEXT: var provider = database.collection('settings').doc("provider");
NEXT: var DriverNearByRef = database.collection('settings').doc("DriverNearBy");

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 557
TEXT: var DriverNearByRef = database.collection('settings').doc("DriverNearBy");
NEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 558
TEXT: var digitalProductRef = database.collection('settings').doc("digitalProduct");
NEXT: var refCurrency = database.collection('currencies').where('isActive', '==', true);

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 560
TEXT: var refEmailSetting = database.collection('settings').doc("emailSetting");
NEXT: var refNotificationSetting = database.collection('settings').doc("notification_setting");

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 561
TEXT: var refNotificationSetting = database.collection('settings').doc("notification_setting");
NEXT: 

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 563
TEXT: var homepagethemeRef = database.collection('settings').doc("home_page_theme");
NEXT: var services = database.collection('sections').where('isActive', '==', true).orderBy('order');

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 935
TEXT: database.collection('settings').doc("globalSettings").update({
NEXT: 'website_color': website_color,

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 964
TEXT: database.collection('settings').doc('placeHolderImage').update({
NEXT: 'image': placeholderphoto

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 967
TEXT: database.collection('settings').doc("ContactUs").update({
NEXT: 'Address': contact_us_address,

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 972
TEXT: database.collection('settings').doc("vendor").update({
NEXT: 'auto_approve_vendor': auto_approve_vendor,

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 976
TEXT: database.collection('settings').doc("provider").update({
NEXT: 'auto_approve_provider': auto_approve_provider,

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 979
TEXT: database.collection('settings').doc("story").update({
NEXT: 'isEnabled': store_can_upload_story,

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 983
TEXT: database.collection('settings').doc("Version").update({
NEXT: 'app_version': app_version,

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 990
TEXT: database.collection('settings').doc("googleMapKey").update({
NEXT: 'key': googleApiKey,

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 993
TEXT: database.collection('settings').doc("DriverNearBy").update({
NEXT: 'minimumDepositToRideAccept': minimumDepositToRideAccept,

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 1002
TEXT: database.collection('settings').doc("digitalProduct").update({
NEXT: 'fileSize': fileSize,

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 1005
TEXT: database.collection('settings').doc("notification_setting").update({
NEXT: 'senderId': senderId,

FILE: C:\deploy\adminpanel\storage\framework\views\251fa4289df128ed054a96909fbfb709.php
LINE: 1009
TEXT: database.collection('settings').doc("emailSetting").update({
NEXT: 'fromName': fromName,

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 795
TEXT: var currency = db.collection('settings');

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 811
TEXT: var placeholder = db.collection('settings').doc('placeHolderImage');
NEXT: placeholder.get().then(async function (snapshotsimage) {

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 927
TEXT: let ordersQuery = withSectionFilter(db.collection('vendor_orders').where('status', 'in', ["Order Completed"]), active_id);
NEXT: if (filterType) {

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 933
TEXT: ? db.collection('vendor_orders')
NEXT: .where('status', 'in', ["Order Completed"])

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1225
TEXT: let query = withSectionFilter(db.collection('vendor_orders').where('status', 'in', statusArray), active_id);
NEXT: if (startTS && endTS) {

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1764
TEXT: let refVendor = withSectionFilter(db.collection('vendors'), active_id).orderBy('reviewsCount', 'desc').limit(5);
NEXT: 

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1777
TEXT: ref = withSectionFilter(db.collection('vendor_orders'), active_id)
NEXT: .where('status', 'in', ["Order Placed", "Order Accepted", "Driver Pending", "Driver Accepted", "Order Shipped", "In Transit"]);

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1792
TEXT: ref = withServiceTypeFilter(db.collection('users').where('role', '==', 'driver'), active_type);

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1843
TEXT: withSectionFilter(db.collection('vendor_orders'), active_id).orderBy('createdAt', 'desc').get(),
NEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1844
TEXT: db.collection('users').where("role", "==", "customer").orderBy("createdAt").get(),
NEXT: withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).orderBy('createdAt', 'desc').get(),

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1845
TEXT: withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).orderBy('createdAt', 'desc').get(),
NEXT: withSectionFilter(db.collection('vendors'), active_id).get(),

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1846
TEXT: withSectionFilter(db.collection('vendors'), active_id).get(),

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1849
TEXT: withSectionFilter(db.collection('vendor_orders'), active_id).orderBy('createdAt', 'desc').where('createdAt', '<=', endThisTS).get(),
NEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1850
TEXT: db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy("createdAt").get(),
NEXT: withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy('createdAt', 'desc').get(),

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1851
TEXT: withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).orderBy('createdAt', 'desc').get(),
NEXT: withSectionFilter(db.collection('vendors'), active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).get(),

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1852
TEXT: withSectionFilter(db.collection('vendors'), active_id).where('createdAt', '>=', startThisTS).where('createdAt', '<=', endThisTS).get(),

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1855
TEXT: startLastTS ? withSectionFilter(db.collection('vendor_orders'), active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1856
TEXT: startLastTS ? db.collection('users').where("role", "==", "customer").where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy("createdAt").get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy('createdAt', 'desc').get() : Promise.resolve({ docs: [] }),

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1857
TEXT: startLastTS ? withServiceTypeFilter(db.collection('users').where("role", "==", "driver").where('isOwner','==',false), active_type).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).orderBy('createdAt', 'desc').get() : Promise.resolve({ docs: [] }),
NEXT: startLastTS ? withSectionFilter(db.collection('vendors'), active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] })

FILE: C:\deploy\adminpanel\storage\framework\views\61966cffdcc958229ee29e4cbd509381.php
LINE: 1858
TEXT: startLastTS ? withSectionFilter(db.collection('vendors'), active_id).where('createdAt', '>=', startLastTS).where('createdAt', '<=', endLastTS).get() : Promise.resolve({ docs: [] })
NEXT: ])

FILE: C:\deploy\adminpanel\storage\framework\views\a917058a6309c2ff4c91bb27ef2afc67.php
LINE: 948
TEXT: var ref = database.collection('settings').doc("globalSettings");
NEXT: ref.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\storage\framework\views\a917058a6309c2ff4c91bb27ef2afc67.php
LINE: 988
TEXT: var languages_list = database.collection('settings').doc('languages');
NEXT: languages_list.get().then(async function (snapshotslang) {

FILE: C:\deploy\adminpanel\storage\framework\views\a917058a6309c2ff4c91bb27ef2afc67.php
LINE: 1024
TEXT: var version = database.collection('settings').doc("Version");
NEXT: version.get().then(async function (snapshots) {

FILE: C:\deploy\adminpanel\storage\framework\views\a917058a6309c2ff4c91bb27ef2afc67.php
LINE: 1028
TEXT: database.collection('settings').doc('Version').set({});
NEXT: }

FILE: C:\deploy\adminpanel\storage\framework\views\a917058a6309c2ff4c91bb27ef2afc67.php
LINE: 1059
TEXT: database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\storage\framework\views\a917058a6309c2ff4c91bb27ef2afc67.php
LINE: 1175
TEXT: const googleMapKeySnapshot = await window.firebaseDb.collection('settings').doc('googleMapKey').get();
NEXT: const googleMapKeyData = googleMapKeySnapshot.exists ? googleMapKeySnapshot.data() : null;

FILE: C:\deploy\adminpanel\storage\framework\views\a917058a6309c2ff4c91bb27ef2afc67.php
LINE: 1270
TEXT: database.collection('settings').doc("notification_setting").get().then(async function (snapshots) {
NEXT: var data = snapshots.data();

FILE: C:\deploy\adminpanel\storage\framework\views\a917058a6309c2ff4c91bb27ef2afc67.php
LINE: 1573
TEXT: var snapshots = await database.collection('zone').where("publish","==",true).get();
NEXT: if(snapshots.docs.length > 0){

FILE: C:\deploy\adminpanel\storage\framework\views\dcb16fa2a98df213dcb6f801bc40a542.php
LINE: 1008
TEXT: database.collection('settings').doc("globalSettings").get().then(async function(snapshots) {
NEXT: var globalSettings = snapshots.data();

## STORE_PANEL

- Path: C:\deploy\storepanel

## Kesimpulan Sementara

- File ini membandingkan collection inti mobile app terhadap web/panel.
- Jika collection sama ditemukan di app dan panel, berarti fungsi berpotensi sudah tersambung.
- Jika tidak ditemukan di panel, fungsi kemungkinan hanya berjalan di mobile app atau lewat API lain.
- Belum boleh patch sebelum dibuat unified function map final.