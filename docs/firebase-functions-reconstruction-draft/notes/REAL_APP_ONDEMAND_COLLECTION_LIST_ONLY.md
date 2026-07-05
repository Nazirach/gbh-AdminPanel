# ONDEMAND COLLECTION LIST ONLY

Generated: 06/29/2026 00:44:48

Mode: read-only. No patch. No Firebase write.

## Collection Names Found
```text
```text
currencies
favorite_service
provider_categories
providers_services
providers_workers
sections
settings
tmp
users
```

## Final Status
STATUS: ONDEMAND_EXACT_COLLECTION_NAMES_AUDIT_FINISHED
```

## Key On Demand Collection Context
```text
206: 94:     var ref = database.collection('provider_categories');
207: 95:     var ref_category = database.collection('provider_categories');
215: 94:     var ref = database.collection('provider_categories');
216: 95:     var ref_category = database.collection('provider_categories');
220: 99:     var id_category = database.collection("tmp").doc().id;
225: 94:     var ref = database.collection('provider_categories');
226: 95:     var ref_category = database.collection('provider_categories');
230: 99:     var id_category = database.collection("tmp").doc().id;
237: 99:     var id_category = database.collection("tmp").doc().id;
240: 102:     var placeholder = database.collection('settings').doc('placeHolderImage');
247: 99:     var id_category = database.collection("tmp").doc().id;
250: 102:     var placeholder = database.collection('settings').doc('placeHolderImage');
256: 99:     var id_category = database.collection("tmp").doc().id;
259: 102:     var placeholder = database.collection('settings').doc('placeHolderImage');
347: 149:                     database.collection('provider_categories').doc(id_category).set({
357: 149:                     database.collection('provider_categories').doc(id_category).set({
626: 90:     var ref_category = database.collection('provider_categories');
628: 92:     var ref = database.collection('provider_categories').doc(id);
635: 90:     var ref_category = database.collection('provider_categories');
637: 92:     var ref = database.collection('provider_categories').doc(id);
642: 97:     var placeholder = database.collection('settings').doc('placeHolderImage');
645: 90:     var ref_category = database.collection('provider_categories');
647: 92:     var ref = database.collection('provider_categories').doc(id);
652: 97:     var placeholder = database.collection('settings').doc('placeHolderImage');
656: 92:     var ref = database.collection('provider_categories').doc(id);
661: 97:     var placeholder = database.collection('settings').doc('placeHolderImage');
670: 97:     var placeholder = database.collection('settings').doc('placeHolderImage');
901: 167:                     database.collection('provider_categories').doc(id).update({
1037: 91:         var ref = database.collection('provider_categories');
1047: 91:         var ref = database.collection('provider_categories');
1057: 91:         var ref = database.collection('provider_categories');
1065: 99:             var placeholder = database.collection('settings').doc('placeHolderImage');
1070: 99:             var placeholder = database.collection('settings').doc('placeHolderImage');
1104: 177:             var snapshots = await database.collection('provider_categories').where("parentCategoryId", "==", categoryId).get();
1114: 177:             var snapshots = await database.collection('provider_categories').where("parentCategoryId", "==", categoryId).get();
1158: 233:             database.collection('provider_categories').doc(id).update({
1164: 239:             await deleteDocumentWithImage('provider_categories',id,'image');
1171: 239:             await deleteDocumentWithImage('provider_categories',id,'image');
1180: 239:             await deleteDocumentWithImage('provider_categories',id,'image');
1207: 251:                         await deleteDocumentWithImage('provider_categories',dataId,'image');
1215: 251:                         await deleteDocumentWithImage('provider_categories',dataId,'image');
1224: 251:                         await deleteDocumentWithImage('provider_categories',dataId,'image');
1602: 209:         var author = database.collection('users').orderBy('createdAt', 'desc');
1603: 210:         var categories = database.collection('provider_categories').where('publish', '==', true);
1612: 209:         var author = database.collection('users').orderBy('createdAt', 'desc');
1613: 210:         var categories = database.collection('provider_categories').where('publish', '==', true);
1619: 216:         var placeholder = database.collection('settings').doc('placeHolderImage');
1621: 210:         var categories = database.collection('provider_categories').where('publish', '==', true);
1627: 216:         var placeholder = database.collection('settings').doc('placeHolderImage');
1637: 216:         var placeholder = database.collection('settings').doc('placeHolderImage');
1646: 216:         var placeholder = database.collection('settings').doc('placeHolderImage');
1656: 216:         var placeholder = database.collection('settings').doc('placeHolderImage');
1666: 216:         var placeholder = database.collection('settings').doc('placeHolderImage');
1676: 216:         var placeholder = database.collection('settings').doc('placeHolderImage');
1702: 234:         database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
1712: 234:         database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
1723: 244:         var subscriptionBusinessModel = database.collection('settings').doc("vendor");
1734: 252:             database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function(snapshots) {
1742: 252:             database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function(snapshots) {
1756: 263:             database.collection('sections').where('serviceTypeFlag', '==', 'ondemand-service').orderBy('order').get().then(async function(snapshots) {
1764: 263:             database.collection('sections').where('serviceTypeFlag', '==', 'ondemand-service').orderBy('order').get().then(async function(snapshots) {
2053: 382:                 var id = database.collection("tmp").doc().id;
2063: 382:                 var id = database.collection("tmp").doc().id;
2073: 382:                 var id = database.collection("tmp").doc().id;
2471: 526:                             database.collection('providers_services').doc(id).set(objects).then(async function(result) {
2474: 529:                                     await database.collection('sections').doc(section_id).get().then(async function(snapshot) {
2476: 531:                                         await database.collection('users').doc(providerId).update({
2479: 526:                             database.collection('providers_services').doc(id).set(objects).then(async function(result) {
2482: 529:                                     await database.collection('sections').doc(section_id).get().then(async function(snapshot) {
2484: 531:                                         await database.collection('users').doc(providerId).update({
2491: 529:                                     await database.collection('sections').doc(section_id).get().then(async function(snapshot) {
2493: 531:                                         await database.collection('users').doc(providerId).update({
2502: 531:                                         await database.collection('users').doc(providerId).update({
2871: 194:         var providers_services = database.collection('providers_services').doc(Id);
2872: 195:         var categories = database.collection('provider_categories').where('publish', '==', true);
2876: 199:         var placeholder = database.collection('settings').doc('placeHolderImage');
2881: 194:         var providers_services = database.collection('providers_services').doc(Id);
2882: 195:         var categories = database.collection('provider_categories').where('publish', '==', true);
2886: 199:         var placeholder = database.collection('settings').doc('placeHolderImage');
2890: 194:         var providers_services = database.collection('providers_services').doc(Id);
2891: 195:         var categories = database.collection('provider_categories').where('publish', '==', true);
2895: 199:         var placeholder = database.collection('settings').doc('placeHolderImage');
2904: 199:         var placeholder = database.collection('settings').doc('placeHolderImage');
2913: 199:         var placeholder = database.collection('settings').doc('placeHolderImage');
2926: 208:         database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
3781: 38:                                         <a href="{{route('ondemand.bookings.index',$id)}}"><img src="{{ asset('images/booking.png') }}"> {{trans('lang.booking_plural')}}</a>
3788: 38:                                         <a href="{{route('ondemand.bookings.index',$id)}}"><img src="{{ asset('images/booking.png') }}"> {{trans('lang.booking_plural')}}</a>
3796: 38:                                         <a href="{{route('ondemand.bookings.index',$id)}}"><img src="{{ asset('images/booking.png') }}"> {{trans('lang.booking_plural')}}</a>
4032: 170:             var ref = database.collection('providers_services').where('sectionId', '==', section_id).where('author', '==', id).orderBy('createdAt', 'desc');
4036: 174:             var ref = database.collection('providers_services').where('sectionId', '==', section_id).orderBy('createdAt', 'desc');
4041: 170:             var ref = database.collection('providers_services').where('sectionId', '==', section_id).where('author', '==', id).orderBy('createdAt', 'desc');
4045: 174:             var ref = database.collection('providers_services').where('sectionId', '==', section_id).orderBy('createdAt', 'desc');
4052: 174:             var ref = database.collection('providers_services').where('sectionId', '==', section_id).orderBy('createdAt', 'desc');
4063: 182:         var refCurrency = database.collection('currencies').where('isActive', '==', true);
4074: 193:         var ctegoryRef = database.collection('provider_categories');
4075: 194:         var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');
4076: 195:         var refProvider = database.collection('users');
4078: 197:         database.collection('provider_categories').where('sectionId','==',section_id).get().then(async function(snapshots) {
4084: 193:         var ctegoryRef = database.collection('provider_categories');
4085: 194:         var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');
4086: 195:         var refProvider = database.collection('users');
4088: 197:         database.collection('provider_categories').where('sectionId','==',section_id).get().then(async function(snapshots) {
4094: 193:         var ctegoryRef = database.collection('provider_categories');
4095: 194:         var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');
4096: 195:         var refProvider = database.collection('users');
4098: 197:         database.collection('provider_categories').where('sectionId','==',section_id).get().then(async function(snapshots) {
4104: 194:         var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');
4105: 195:         var refProvider = database.collection('users');
4107: 197:         database.collection('provider_categories').where('sectionId','==',section_id).get().then(async function(snapshots) {
4115: 197:         database.collection('provider_categories').where('sectionId','==',section_id).get().then(async function(snapshots) {
4892: 605:             database.collection('providers_services').doc(id).update({
4899: 605:             database.collection('providers_services').doc(id).update({
4999: 638:             await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
5009: 638:             await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
5019: 638:             await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
5029: 638:             await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
5037: 646:             await database.collection('favorite_service').where('service_id', '==', serviceId).get().then(async function(snapshotsItem) {
5039: 638:             await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
5047: 646:             await database.collection('favorite_service').where('service_id', '==', serviceId).get().then(async function(snapshotsItem) {
5182: 178:     var refCurrency = database.collection('currencies').where('isActive', '==', true);
```

## Final Status
STATUS: ONDEMAND_COLLECTION_LIST_ONLY_EXTRACTED