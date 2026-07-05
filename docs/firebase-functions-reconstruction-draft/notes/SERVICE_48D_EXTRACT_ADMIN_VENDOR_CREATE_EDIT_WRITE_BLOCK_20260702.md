# SERVICE 48D EXTRACT ADMIN VENDOR CREATE EDIT WRITE BLOCK

Generated: 07/02/2026 12:23:29
Mode: READ ONLY.
Admin path: C:\deploy\adminpanel

Purpose: extract exact JavaScript write blocks before applying Admin Web control-center normalizer.


## FILE: resources\views\vendors\create.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:204:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:205:@endsection
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:206:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:207:@section('scripts')
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:208:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:209:<script type="text/javascript">
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:210:    var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:211:   
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:212:    var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:213:    var vendorOwnerId = "";
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:214:    var vendorOwnerOnline = false;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:215:    var ownerphoto = '';
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:216:    var ownerFileName = '';
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:217:    var storageRef = firebase.storage().ref('images'); 
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:218:
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:219:    var createdAt = 
firebase.firestore.FieldValue.serverTimestamp();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:220:    var vendor_id = database.collection("tmp").doc().id;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:221:    var 
email_templates=database.collection('email_templates').where('type','==','new_vendor_signup');
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:222:    var emailTemplatesData=null;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:223:    var adminEmail='';
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:224:    var 
emailSetting=database.collection('settings').doc('emailSetting');
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:225:    let businessModelData = '';
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:226:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:227:    let isAutoVerify = false;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:228:    $(document).ready(async function() {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:229:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:230:        let businessModelRef = await 
database.collection('settings').doc("vendor").get();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:231:        businessModelData = businessModelRef.data();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:232:        if(businessModelData.subscription_model){
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:233:            
$(".subscription-plans-wrapper").removeClass('d-none');
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:234:            
database.collection('subscription_plans').where('isEnable','==',true).where('sectionId','==',section_id).get().then(async 
function(snapshots) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:235:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:236:                    var data=listval.data();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:237:                    
$('#subscription_plan').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:238:                        .attr("value",data.id)
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:239:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:240:                });
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:241:            });
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:242:        }
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:243:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:244:        let documentVerify = await 
database.collection('settings').doc('document_verification_settings').get();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:245:        let documentSettings = documentVerify.data();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:246:        if(documentSettings.isStoreVerification === false){
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:247:            isAutoVerify = true;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:248:        }
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:249:        
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:250:        jQuery("#country_selector").select2({
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:251:            templateResult: formatState,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:252:            templateSelection: formatState2,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:253:            placeholder: "Select Country",
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:254:            allowClear: true
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:255:        });
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:256:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:257:        // --- ADD THIS BLOCK TO SET DEFAULT COUNTRY CODE ---
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:258:        var globalSettingsRef = 
database.collection('settings').doc('globalSettings');
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:259:        globalSettingsRef.get().then(async function (snapshot) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:260:            var globalSettings = snapshot.data();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:261:            if (globalSettings && 
globalSettings.defaultCountryCode) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:262:                var defaultPhoneCode = 
globalSettings.defaultCountryCode.replace('+', '').trim();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:370:                'otherDetails': otherDetails,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:371:            };
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:372:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:373:           
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:374:            
firebase.auth().createUserWithEmailAndPassword(email, password)
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:375:                .then(async function (firebaseUser) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:376:                    user_id = firebaseUser.user.uid;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:377:                    await storeImageData().then(async (IMG) => {
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:378:                        
database.collection('users').doc(user_id).set({ 
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:379:                            'firstName': userFirstName,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:380:                            'lastName': userLastName,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:381:                            'email': email,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:382:                            'phoneNumber': 
country_code+userPhone,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:383:                            'profilePictureURL': IMG.ownerImage,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:384:                            'role': 'vendor',
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:385:                            'id': user_id,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:386:                            'active': vendor_active,
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:387:                            'vendorID': null,
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:388:                            'createdAt': createdAt,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:389:                            'userBankDetails': userBankDetails,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:390:                            'isDocumentVerify': false,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:391:                            'isAutoVerify':isAutoVerify,
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:392:                            'sectionId' : section_id,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:393:                            'subscription_plan': 
subscriptionData!=null? subscriptionData:null,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:394:                            'subscriptionPlanId': 
subscriptionData!=null? subscriptionData.id:null,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:395:                            'subscriptionExpiryDate': 
subscriptionData!=null? subscriptionData.expiryDate:null
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:396:                        }).then(async function (result) { 
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:397:                            if(subscriptionData!=null) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:398:                                
historyData={'subscriptionData': subscriptionData,'userId': user_id,'expire_date': subscriptionData.expiryDate}
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:399:                                await 
addSubscriptionHistory(historyData);
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:400:                            }
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:401:                            var isSendMail = await 
sendRegistrationEmail(user_id, name, email, userPhone);
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:402:                            if (isSendMail) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:403:                                window.location.href = '{{ 
route("vendors")}}';
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:404:                            }
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:405:                        });
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:406:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:407:                    }).catch(err => {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:408:                        jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:409:                        $(".error_top").show();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:410:                        $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:411:                        $(".error_top").append("<p>" + err + 
"</p>");
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:412:                        window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:413:                    });
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:414:                });
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:415:        }
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:416:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:417:    });
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:418:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:419:    function formatState(state) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:420:        if (!state.id) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:553:                data.expiryDate=null;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:554:            }
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:555:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:556:        })
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:557:        return data;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:558:    }
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:559:    async function addSubscriptionHistory(historyData) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:560:        var id_order=database.collection('tmp').doc().id;
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:561:        var 
createdAt=firebase.firestore.FieldValue.serverTimestamp();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:562:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:563:        var userId=historyData.userId;
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:564:        await 
database.collection('subscription_history').doc(id_order).set({
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:565:            'id': id_order,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:566:            'user_id': historyData.userId,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:567:            'expiry_date': historyData.expire_date,
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:568:            'createdAt': createdAt,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:569:            'subscription_plan': historyData.subscriptionData,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:570:            'payment_type': 'cod'
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:571:        })
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:572:    }
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:573:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:574:</script>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:575:@endsection



TEXT_END

## FILE: resources\views\vendors\edit.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:235:                if (data.hasOwnProperty('subscriptionPlanId') && 
data.subscriptionPlanId != null && data.subscriptionPlanId != '') {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:236:                    subscriptionPlanId = data.subscriptionPlanId;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:237:                    $(".change_expiry_date_div").show(); 
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:238:                } else {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:239:                   
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:240:                    $(".change_expiry_date_div").hide(); 
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:241:                }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:242:
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:243:                if (data.hasOwnProperty('vendorID') && 
data.vendorID != null && data.vendorID != '') {
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:244:                    store_id = data.vendorID;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:245:                }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:246:                
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:247:            });
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:248:        }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:249:    });
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:250:    var database = firebase.firestore();  
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:251:    var ref = database.collection('users').where("id", "==", id); 
 
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:252:    var photo = "";
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:253:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:254:    var vendorOwnerId = "";
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:255:    var vendorOwnerOnline = false;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:256:    var photocount = 0;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:257:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:258:    var ownerPhoto = '';
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:259:    var ownerFileName = '';
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:260:    var ownerOldImageFile = '';
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:261:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:262:    var ownerId = '';
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:263:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:264:    
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:265:    var placeholderImage = '';
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:266:    var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:267:    var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:268:    var storage = firebase.storage();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:269:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:270:    placeholder.get().then(async function (snapshotsimage) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:271:        var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:272:        placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:329:                            $(".uploaded_image_owner").show();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:330:                        }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:331:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:332:                        if (user.active) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:333:                            vendor_active = true;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:334:                            $("#is_active").prop("checked", true);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:335:                        }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:336:
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:337:                        if (user.vendorID != null && 
user.vendorID != '') {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:338:                            $('.vendorRouteLi').show();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:339:                            var route1 = '{{ route('stores.edit', 
':id') }}';
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:340:                            route1 = route1.replace(':id', 
user.vendorID);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:341:                            $('.vendorRoute').attr('href', 
route1);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:342:                        }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:343:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:344:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:345:                        if (user.userBankDetails) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:346:                            if (user.userBankDetails.bankName != 
undefined) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:347:                                
$("#bankName").val(user.userBankDetails.bankName);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:348:                            }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:349:                            if (user.userBankDetails.branchName 
!= undefined) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:350:                                
$("#branchName").val(user.userBankDetails.branchName);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:351:                            }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:352:                            if (user.userBankDetails.holderName 
!= undefined) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:353:                                
$("#holderName").val(user.userBankDetails.holderName);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:354:                            }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:355:                            if 
(user.userBankDetails.accountNumber != undefined) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:356:                                
$("#accountNumber").val(user.userBankDetails.accountNumber);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:357:                            }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:358:                            if (user.userBankDetails.otherDetails 
!= undefined) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:359:                                
$("#otherDetails").val(user.userBankDetails.otherDetails);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:360:                            }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:361:                        }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:362:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:363:                    })
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:364:                });
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:365:            }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:366:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:367:            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:368:        })
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:421:                    'accountNumber': accountNumber,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:422:                    'accountNumber': accountNumber,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:423:                    'otherDetails': otherDetails,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:424:                };
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:425:                await storeImageData().then(async (IMG) => {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:426:                    updateSubscriptionHistory(ownerId,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:427:                            
subscriptionPlanExpiryDate,store_id).then(
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:428:                            async function() {
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:429:                        await 
database.collection('users').doc(ownerId).update({
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:430:                            'firstName': userFirstName,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:431:                            'lastName': userLastName,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:432:                            'email': email,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:433:                            'phoneNumber': userPhone,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:434:                            'profilePictureURL': IMG.ownerImage,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:435:                            'active': vendor_active,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:436:                            'userBankDetails': userBankDetails
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:437:                        }).then(async function (result) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:438:                            if (store_id != null) {
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:439:                                await 
geoFirestore.collection('vendors').doc(store_id).update({
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:440:                                    'authorName': userFirstName 
+' ' +userLastName,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:441:                                    'authorProfilePic': 
IMG.ownerImage,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:442:                                    'subscriptionExpiryDate': 
subscriptionPlanExpiryDate,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:443:                                });
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:444:                            }            
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:445:                            
jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:446:                            Swal.fire('Update Complete!',`User 
updated.`,'success');
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:447:                        });
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:448:                    });
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:449:                });
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:450:             }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:451:                
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:452:        })
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:453:    });
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:454:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:455:    function formatState(state) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:456:        if (!state.id) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:457:            return state.text;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:458:        }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:459:        var baseUrl = "<?php echo 
URL::to('/');?>/scss/icons/flag-icon-css/flags";
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:460:        var $state = $(
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:461:            '<span><img src="' + baseUrl + '/' + 
newcountriesjs[state.element.value].toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:462:        );
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:463:        return $state;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:464:    }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:465:    function formatState2(state) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:466:        if (!state.id) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:467:            return state.text;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:482:        try {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:483:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:484:            const userRef = 
database.collection('users').doc(ownerId);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:485:            const userDoc = await userRef.get();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:486:            const data = userDoc.data();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:487:            
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:488:            if (data.subscriptionPlanId != "" && 
data.subscriptionPlanId != null) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:489:                
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:490:                database.collection('users').doc(ownerId).update({
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:491:                    'subscriptionExpiryDate': 
subscriptionPlanExpiryDate,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:492:                });
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:493:            }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:494:            
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:495:            const lastSubscriptionHistory = await 
database.collection('subscription_history').where('user_id','==',ownerId).orderBy('createdAt','desc').get();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:496:            if(lastSubscriptionHistory && 
lastSubscriptionHistory.docs && lastSubscriptionHistory.docs.length > 0){
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:497:                const subscriptionData = 
lastSubscriptionHistory.docs[0].data();
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:498:                
database.collection('subscription_history').doc(subscriptionData.id).update({
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:499:                    'expiry_date': subscriptionPlanExpiryDate,
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:500:                });
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:501:            }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:502:            
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:503:        } catch (error) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:504:            console.error("Error updating subscription history:", 
error);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:505:        }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:506:    }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:507:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:508:    $(document).on("click", ".remove-btn", function () {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:509:        var id = $(this).attr('data-id');
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:510:        var photo_remove = $(this).attr('data-img');
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:511:        $("#photo_" + id).remove();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:512:        var status = $(this).attr('data-status');
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:513:        if (status == "old") {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:514:            
galleryImageToDelete.push(firebase.storage().refFromURL(photo_remove));
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:515:        }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:516:        index = vendor_photos.indexOf(photo_remove);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:517:        if (index > -1) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:518:            vendor_photos.splice(index, 1);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:519:        }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:520:        index = new_added_vendor_photos.indexOf(photo_remove);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:521:        if (index > -1) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:522:            new_added_vendor_photos.splice(index, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:523:            new_added_vendor_photos_filename.splice(index, 1);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:524:        }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:525:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:526:    });



TEXT_END

## FILE: resources\views\vendors\index.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:115:</div>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:116:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:117:@endsection
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:118:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:119:@section('scripts')
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:120:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:121:<script type="text/javascript">
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:122:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:123:    var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:124:    if (!window.firebaseClientReady || !window.firebaseDb) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:125:        console.warn('Firebase client is not ready. Please check 
Firebase configuration.');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:126:    } else {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:127:    var database = window.firebaseDb;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:128:    var type = "{{ $type }}";
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:129:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:130:    var user_permissions = '<?php echo 
@session('user_permissions')?>';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:131:    user_permissions = 
Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:132:    var checkDeletePermission = false;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:133:    var checkChatPermission = false;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:134:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:135:    if (
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:136:        (type == 'pending' && 
$.inArray('pending.vendors.delete', user_permissions) >= 0) ||
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:137:        (type == 'approved' && 
$.inArray('approve.vendors.delete', user_permissions) >= 0) ||
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:138:        (type == 'all' && $.inArray('vendors.delete', 
user_permissions) >= 0)
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:139:    ) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:140:        checkDeletePermission = true;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:141:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:142:    if ($.inArray('vendors.chat', user_permissions) >= 0)
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:143:    {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:144:        checkChatPermission = true;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:145:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:146:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:147:    $('.status_selector').select2({
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:148:        placeholder: '{{trans("lang.status")}}',  
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:149:        minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:150:        allowClear: true 
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:151:    });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:176:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:177:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:178:    setDate(); 
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:179:    
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:180:    $('.filteredRecords').change(async function() {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:181:        var status = $('.status_selector').val();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:182:        var daterangepicker = 
$('#daterange').data('daterangepicker');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:183:        ref = database.collection('users').where("role", "==", 
"vendor");
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:184:        if(section_id){           
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:185:            ref = ref.where('section_id', 'in', [section_id, 
'']);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:186:        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:187:        if ($('#daterange span').html() != 
'{{trans("lang.select_range")}}' && daterangepicker) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:188:            var from = 
moment(daterangepicker.startDate).toDate();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:189:            var to = moment(daterangepicker.endDate).toDate();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:190:            if (from && to) { 
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:191:                var fromDate = 
firebase.firestore.Timestamp.fromDate(new Date(from));
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:192:                ref = ref.where('createdAt', '>=', fromDate);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:193:                var toDate = 
firebase.firestore.Timestamp.fromDate(new Date(to));
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:194:                ref = ref.where('createdAt', '<=', toDate);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:195:            }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:196:        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:197:        if (status) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:198:            ref = (status == "active") ? ref.where('active', 
'==', true) : ref.where('active', '==', false);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:199:        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:200:        $('#userTable').DataTable().ajax.reload();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:201:    });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:202:    
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:203:    var ref = database.collection('users').where("role", "==", 
"vendor");
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:204:    if(section_id){       
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:205:        ref = ref.where('section_id', 'in', [section_id, '']);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:206:    }
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:207:    ref = ref.orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:208:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:209:    var placeholderImage = '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:210:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:211:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:212:$(document).ready(function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:213:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:214:    $(document.body).on('click', '.redirecttopage', function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:215:        var url = $(this).attr('data-url');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:216:        window.location.href = url;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:217:    });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:218:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:219:    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:220:    $('body').tooltip({
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:221:        selector: '[data-toggle="tooltip"]'
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:222:    });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:223:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:224:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:225:    var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:226:    placeholder.get().then(async function (snapshotsimage) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:227:        var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:228:        placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:229:    })
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:230:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:231:    $(document).on('click', '.dt-button-collection .dt-button', 
function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:232:        $('.dt-button-collection').hide();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:233:        $('.dt-button-background').hide();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:234:    });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:235:    $(document).on('click', function (event) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:241:    var fieldConfig = {        
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:242:        columns: [
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:243:            { key: 'name', header: 
"{{trans('lang.vendor_info')}}" },
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:244:            { key: 'storeName', header: 
"{{trans('lang.store')}}" }, 
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:245:            { key: 'contactInfo', header: 
"{{trans('lang.contact_info')}}" }, 
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:246:            { key: 'activePlanName', header: 
"{{trans('lang.active_subscription_plan')}}" },    
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:247:            { key: 'exportExpiryDate', header: 
"{{trans('lang.plan_expire_at')}}" },  
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:248:            { key: 'active', header: "{{trans('lang.active')}}" 
},
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:249:            { key: 'createdAt', header: "{{trans('lang.date')}}" 
},
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:250:        ],
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:251:        fileName: "{{trans('lang.vendor_list')}}",
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:252:    };
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:253:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:254:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:255:    const table = $('#userTable').DataTable({
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:256:        pageLength: 10, // Number of rows per page
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:257:        processing: false, // Show processing indicator
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:258:        serverSide: true, // Enable server-side processing
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:259:        responsive: true,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:260:        ajax: async function (data, callback, settings) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:261:            const start = data.start;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:262:            const length = data.length;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:263:            const searchValue = data.search.value.toLowerCase();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:264:            const orderColumnIndex = data.order[0].column;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:265:            const orderDirection = data.order[0].dir;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:266:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:267:          const orderableColumns = (checkDeletePermission) ? 
['', 'name', 'storeName', 'contactInfo', 'subscription_plan.name', 'subscriptionExpiryDate', 'createdAt', '', ''] : ['name', 
'storeName', 'contactInfo', 'subscription_plan.name', 'subscriptionExpiryDate', 'createdAt', '', ''];
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:268:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:269:            const orderByField = 
orderableColumns[orderColumnIndex]; // Adjust the index to match your table
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:270:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:271:            if (searchValue.length >= 3 || searchValue.length 
=== 0) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:272:                $('#data-table_processing').show();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:273:            }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:274:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:275:            await ref.get().then(async function (querySnapshot) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:276:                if (querySnapshot.empty) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:277:                    $('.total_count').text(0);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:278:                    console.error("No data found in Firestore.");
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:279:                    $('#data-table_processing').hide(); // Hide 
loader
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:280:                    callback({
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:281:                        draw: data.draw,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:282:                        recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:283:                        recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:284:                        data: [] // No data
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:285:                    });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:286:                    return;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:287:                }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:288:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:289:                let records = [];
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:290:                let filteredRecords = [];
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:291:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:292:                await Promise.all(querySnapshot.docs.map(async 
(doc) => {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:293:                    let childData = doc.data();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:294:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:295:                    const isDocVerified = 
childData.isDocumentVerify === true;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:300:                        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:301:                    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:302:                    if (type === 'approved') {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:303:                            if (!isDocVerified && 
!isAutoVerified) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:304:                            return;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:305:                        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:306:                    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:307:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:308:                    let sid = childData.section_id;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:309:                    if (
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:310:                        section_id && !(
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:311:                            sid === section_id ||
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:312:                            sid === null ||
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:313:                            sid === '' ||
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:314:                            sid === undefined
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:315:                        )
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:316:                    ) {                       
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:317:                        return;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:318:                    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:319:                    childData.id = doc.id; // Ensure the 
document ID is included in the data
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:320:                    childData.name = childData.firstName + ' ' + 
childData.lastName;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:321:                    
if(childData.hasOwnProperty('subscription_plan') && childData.subscription_plan && childData.subscription_plan.name) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:322:                        childData.activePlanName = 
childData.subscription_plan.name;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:323:                    }else {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:324:                        childData.activePlanName = '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:325:                    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:326:                    var date='';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:327:                    var time='';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:328:                    
if(childData.hasOwnProperty("subscriptionExpiryDate")) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:329:                        try {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:330:                            
date=childData.subscriptionExpiryDate.toDate().toDateString();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:331:                            
time=childData.subscriptionExpiryDate.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:332:                        } catch(err) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:333:                        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:334:                    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:335:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:336:                    childData.vendorData = childData.vendorID ? 
await getUserStoreInfo(childData.vendorID) : ''
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:337:                    childData.expiryDate=date+' '+time;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:338:                    childData.phone = (childData.phoneNumber != 
'' && childData.phoneNumber != null && childData.phoneNumber.slice(0, 1) == '+') ? childData.phoneNumber.slice(1) : 
childData.phoneNumber;     
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:339:                    childData.maskedPhone = 
EditPhoneNumber(childData.phone);                       
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:340:                    childData.hasPlusSign = 
childData.phoneNumber.startsWith('+');                        
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:341:                    childData.exportPhone = 
childData.hasPlusSign ? `+${childData.maskedPhone}` : childData.maskedPhone;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:342:                    childData.contactInfo = 
shortEmail(childData.email) + '<br>' + (childData.hasPlusSign ? `+${childData.maskedPhone}` : childData.maskedPhone);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:343:                    if (childData.subscriptionExpiryDate) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:344:                        childData.exportExpiryDate =
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:345:                            
childData.subscriptionExpiryDate.toDate().toLocaleDateString() + ' ' +
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:346:                            
childData.subscriptionExpiryDate.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:347:                    } else {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:348:                        childData.exportExpiryDate = '-';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:349:                    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:350:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:351:                    if (searchValue) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:352:                        var date = '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:353:                        var time = '';
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:354:                        if 
(childData.hasOwnProperty("createdAt")) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:355:                            try {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:356:                                date = 
childData.createdAt.toDate().toDateString();
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:357:                                time = 
childData.createdAt.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:358:                            } catch (err) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:359:                            }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:360:                        }
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:361:                        var createdAt = date + ' ' + time;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:362:                        if (
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:363:                            (childData.name && 
childData.name.toString().toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:364:                            (childData.vendorData && 
childData.vendorData.title && childData.vendorData.title.toString().toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:365:                            (childData.email && 
childData.email.toString().toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:366:                            
(childData.expiryDate&&childData.expiryDate.toString().toLowerCase().indexOf(searchValue)>-1)||
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:367:                            
(childData.hasOwnProperty('activePlanName')&&childData.activePlanName.toLowerCase().toString().includes(searchValue))||
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:368:                            (createdAt && 
createdAt.toString().toLowerCase().indexOf(searchValue) > -1) || (childData.phoneNumber && 
childData.phoneNumber.toString().toLowerCase().includes(searchValue))
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:369:                        ) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:370:                            filteredRecords.push(childData);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:371:                        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:372:                    } else {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:373:                        filteredRecords.push(childData);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:374:                    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:375:                }));
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:376:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:377:                filteredRecords.sort((a, b) => {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:378:                    let aValue = a[orderByField] ;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:379:                    let bValue = b[orderByField] ;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:380:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:381:                   if (orderByField === 'contactInfo') {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:382:                        aValue = a.contactInfo ? 
a.contactInfo.toString().toLowerCase().trim() : '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:383:                        bValue = b.contactInfo ? 
b.contactInfo.toString().toLowerCase().trim() : '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:384:                    } else if (orderByField === 
'subscriptionExpiryDate') {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:385:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:386:                        aValue=a[orderByField]? new 
Date(a[orderByField].toDate()).getTime():0;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:387:                        bValue=b[orderByField]? new 
Date(b[orderByField].toDate()).getTime():0;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:388:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:389:                    } else if (orderByField === 'createdAt' && 
a[orderByField] != '' && b[orderByField] != '' && a[orderByField] != null && b[orderByField] != null) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:390:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:391:                        /*  aValue = a[orderByField] ? new 
Date(a[orderByField].toDate()).getTime() : 0;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:392:                            bValue = b[orderByField] ? new 
Date(b[orderByField].toDate()).getTime() : 0; */
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:393:                        function normalizeDate(v) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:394:                            if (!v) return 0;                    
         
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:395:                            if (typeof v.toDate === "function") {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:396:                                return new 
Date(v.toDate()).getTime();  
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:397:                            }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:398:                            if (v instanceof Date) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:399:                                return v.getTime();              
      
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:400:                            }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:401:                            if (typeof v === "string" || typeof 
v === "number") {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:402:                                return new Date(v).getTime();    
     
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:403:                            }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:404:                            return 0;  
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:405:                        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:406:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:407:                    aValue = normalizeDate(a[orderByField]);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:408:                    bValue = normalizeDate(b[orderByField]);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:409:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:410:                    }  else{
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:411:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:412:                        aValue = a[orderByField] ? 
a[orderByField].toString().toLowerCase().trim() : '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:413:                        bValue = b[orderByField] ? 
b[orderByField].toString().toLowerCase().trim() : ''
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:414:                    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:415:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:416:                    if (orderDirection === 'asc') {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:417:                        return (aValue > bValue) ? 1 : -1;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:574:    if(val.vendorData){
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:575:        vendorView = '{{ route('stores.view', ':id') }}';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:576:        vendorView = vendorView.replace(':id', 
val.vendorData.id);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:577:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:578:    
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:579:    var trroute1 = '{{route("users.walletstransaction", 
":id")}}';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:580:    trroute1 = trroute1.replace(':id', id);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:581:    if(checkDeletePermission){
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:582:    html.push('<td class="delete-all"><input type="checkbox" 
id="is_open_' + id + '" class="is_open" dataId="' + id + '" data-vendorid="'+val.vendorID+'"><label class="col-3 control-label"\n' +
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:583:        'for="is_open_' + id + '" ></label></td>');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:584:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:585:    
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:586:    var verified = await getDocumentStatusIcon(val.id);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:587:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:588:    if(val.isAutoVerify === true){
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:589:        verified += ' <i class="mdi mdi-check-circle 
verified-icon" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.auto_approved') }}"></i>';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:590:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:591:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:592:    if (val.profilePictureURL == '') {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:593:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:594:        html.push('<img class="rounded" style="width:50px" 
src="' + placeholderImage + '" alt="image">  <a id="userName_' + id + '"  href="'+vendorEdit+'" class="redirecttopage left_space">' 
+ val.firstName + ' ' + val.lastName + '</a>' + verified);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:595:    } else {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:596:        if(val.profilePictureURL){
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:597:            photo=val.profilePictureURL;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:598:        }else{
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:599:            photo=placeholderImage;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:600:        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:601:        html.push('<img class="rounded" style="width:50px" 
src="' + photo + '" alt="image" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'">  <a id="userName_' + id + '"  
href="'+vendorEdit+'" class="redirecttopage left_space">' + val.firstName + ' ' + val.lastName + '</a>' + verified);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:602:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:603:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:604:    if(val.vendorData){
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:605:        html.push('<a href="'+vendorView+'" 
class="redirecttopage left_space">' + val.vendorData.title + '</a>');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:606:    }else{
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:607:        html.push('');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:608:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:609:    
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:610:    html.push(val.contactInfo);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:623:            html.push('{{trans("lang.unlimited")}}');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:624:        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:625:    } else {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:626:        html.push('');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:627:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:628:    
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:629:    var date = '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:630:    var time = '';
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:631:    if (val.hasOwnProperty("createdAt")) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:632:        try {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:633:            date = val.createdAt.toDate().toDateString();
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:634:            time = 
val.createdAt.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:635:        } catch (err) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:636:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:637:        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:638:        html.push('<td class="dt-time"><span class="wrap-word">' 
+ date + '<br> ' + time + '</span></td>');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:639:    } else {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:640:        html.push('');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:641:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:642:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:643:    if (val.active) {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:644:        html.push('<label class="switch"><input type="checkbox" 
checked id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:645:    } else {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:646:        html.push('<label class="switch"><input type="checkbox" 
id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:647:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:648:    var chatViewRoute = "{{ route('vendors.chat', ':id') 
}}".replace(':id', val.id);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:649:    var unreadHtml = '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:650:    var action='<span class="action-btn">';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:651:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:652:    if(val.isAutoVerify !== true){
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:653:        var document_list_view = "{{ route('vendors.document', 
':id') }}";
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:654:        document_list_view = document_list_view.replace(':id', 
val.id);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:655:        action+='<a href="' + document_list_view + '" 
data-toggle="tooltip" data-bs-original-title="{{ trans('lang.document') }}"><i class="fa fa-file"></i></a>';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:656:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:657:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:658:    var 
planRoute="{{route('subscription.subscriptionPlanHistory',':id')}}";
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:659:    planRoute=planRoute.replace(':id',val.id);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:660:    if(val.hasOwnProperty('subscription_plan')) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:661:        action+='<a id="'+val.id+'"  href="'+planRoute+'" 
data-toggle="tooltip" data-bs-original-title="{{ trans('lang.subscription_plans') }}"><i class="mdi mdi-crown"></i></a>';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:662:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:663:    action+='<a id="'+val.id+'"  href="'+route1+'" 
data-toggle="tooltip" data-bs-original-title="{{ trans('lang.edit') }}"><i class="mdi mdi-lead-pencil"></i></a>';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:664:    if(checkDeletePermission) {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:665:        action=action+'<a id="'+val.id+'" 
data-vendorid="'+val.vendorID+'" class="delete-btn" name="user-delete" href="javascript:void(0)" data-toggle="tooltip" 
data-bs-original-title="{{ trans('lang.delete') }}"><i class="mdi mdi-delete"></i></a>';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:666:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:667:    if(checkChatPermission){
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:668:    action = action + '<a href="' + chatViewRoute + '" 
class="chat-message" style="position: relative; display: inline-block;">' +
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:669:                '<i class="mdi mdi-wechat mdi-24px"></i>' + 
unreadHtml +
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:670:                '</a>';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:671:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:672:    action=action+'</span>';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:673:    html.push(action);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:674:    return html;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:675:}
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:676:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:677:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:678:async function getUserStoreInfo(vendorId) {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:679:    let vendorRef = await 
database.collection('vendors').doc(vendorId).get();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:680:    if (vendorRef.exists) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:681:        return vendorRef.data();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:682:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:683:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:684:    let vendorQuery = await 
database.collection('vendors').where('author', '==', vendorId).limit(1).get();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:685:    if (!vendorQuery.empty) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:686:        let vendorData = vendorQuery.docs[0].data();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:687:        vendorData.id = vendorQuery.docs[0].id;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:688:        return vendorData;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:689:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:690:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:691:    return '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:692:}
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:693:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:694:$("#is_active").click(function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:695:    $("#userTable .is_open").prop('checked', 
$(this).prop('checked'));
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:696:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:697:});
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:698:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:699:$("#deleteAll").click(function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:700:    if ($('#userTable .is_open:checked').length) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:701:        if (confirm("{{trans('lang.selected_delete_alert')}}")) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:702:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:703:            $('#userTable .is_open:checked').each(function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:704:                var dataId = $(this).attr('dataId');
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:705:                var VendorId = $(this).attr('data-vendorid');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:706:                deleteDocumentWithImage('users', dataId, 
'profilePictureURL')
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:707:                .then(() => {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:708:                    return deleteUserData(dataId, VendorId);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:709:                })
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:710:                .then(result => {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:711:                    setTimeout(function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:712:                        window.location.reload();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:713:                    }, 7000);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:714:                })
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:715:                .catch(error => {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:716:                    console.error("Error occurred:", error);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:717:                });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:718:            });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:719:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:720:        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:721:    } else {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:722:        alert("{{trans('lang.select_delete_alert')}}");
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:723:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:724:});
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:725:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:726:async function deleteUserData(userId,vendorId) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:727:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:728:    await database.collection('wallet').where('user_id', '==', 
userId).get().then(async function (snapshotsItem) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:729:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:730:        if (snapshotsItem.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:731:            snapshotsItem.docs.forEach((temData) => {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:732:                var item_data = temData.data();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:733:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:734:                
database.collection('wallet').doc(item_data.id).delete().then(function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:735:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:736:                });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:737:            });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:738:        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:739:    });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:740:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:741:    if(vendorId != '' && vendorId != null){
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:742:       await 
deleteDocumentWithImage('vendors',vendorId,'photo',['vendorMenuPhotos','photos']);
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:743:        await 
database.collection('vendor_products').where('vendorID','==',vendorId).get().then(async function (snapshotsItem) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:744:             if (snapshotsItem.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:745:                for (const listval of snapshotsItem.docs) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:746:                    await 
deleteDocumentWithImage('vendor_products', listval.id, 'photo', 'photos');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:747:                }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:748:             }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:749:        })
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:750:        await database.collection('story').where('vendorID', 
'==', vendorId).get().then(async function (snapshotsItem) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:751:                if (snapshotsItem.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:752:                    for (const temData of snapshotsItem.docs) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:753:                        await deleteDocumentWithImage('story', 
temData.id,'videoThumbnail','videoUrl');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:754:                    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:755:                }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:756:            });
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:757:        await 
database.collection('favorite_vendor').where('store_id','==',vendorId).get().then(async function (snapshotsItem) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:758:             if (snapshotsItem.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:759:            snapshotsItem.docs.forEach((temData) => {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:760:                var item_data = temData.data();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:761:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:762:                
database.collection('favorite_vendor').doc(item_data.id).delete().then(function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:763:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:764:                });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:765:            });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:766:        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:767:        })
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:768:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:769:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:770:      //delete vendor from mysql
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:771:      
database.collection('settings').doc("Version").get().then(function(snapshot) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:772:            var settingData=snapshot.data();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:773:            if(settingData&&settingData.storeUrl) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:774:                var 
siteurl=settingData.storeUrl+"/api/delete-user";
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:775:                var dataObject={"uuid": userId};
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:776:                jQuery.ajax({
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:777:                    url: siteurl,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:778:                    method: 'POST',
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:779:                    contentType: "application/json; 
charset=utf-8",
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:780:                    data: JSON.stringify(dataObject),
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:781:                    success: function(data) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:782:                        console.log('Delete user from sql 
success:',data);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:783:                    },
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:784:                    error: function(error) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:785:                        console.log('Delete user from sql 
error:',error.responseJSON.message);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:804:            console.log('Delete user error:', 
responseText.error);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:805:        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:806:    });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:807:}
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:808:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:809:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:810:$(document).on("click", "a[name='user-delete']", function (e) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:811:    var id = this.id;
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:812:    var VendorId = $(this).attr('data-vendorid');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:813:    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:814:    deleteDocumentWithImage('users', id, 'profilePictureURL')
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:815:    .then(() => {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:816:        return deleteUserData(id, VendorId);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:817:    })
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:818:    .then(result => {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:819:        setTimeout(function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:820:            window.location.reload();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:821:        }, 7000);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:822:    })
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:823:    .catch(error => {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:824:        console.error("Error occurred:", error);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:825:    });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:826:});
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:827:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:828:$(document).on("click", "input[name='isActive']", function (e) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:829:    var ischeck = $(this).is(':checked');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:830:    var id = this.id;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:831:    if (ischeck) {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:832:        database.collection('users').doc(id).update({'active': 
true}).then(function (result) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:833:        });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:834:    } else {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:835:        database.collection('users').doc(id).update({'active': 
false}).then(function (result) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:836:        });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:837:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:838:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:839:});
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:840:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:841:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:842:</script>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:843:@endsection
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:844:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:845:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:846:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:847:



TEXT_END

## FILE: resources\views\items\create.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\items\create.blade.php:170:                                        <input type="hidden" 
id="variants" value="" />
  C:\deploy\adminpanel\resources\views\items\create.blade.php:171:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:172:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:173:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:174:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:175:                            <div class="form-check row width-50 
mb-3" id="is_digital_div" style="display: none;">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:176:                                <input type="checkbox" 
class="is_digital_product" id="is_digital_product">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:177:                                <label class="col-3 control-label"
> C:\deploy\adminpanel\resources\views\items\create.blade.php:178:                                    for="item_publish">{{ 
trans('lang.item_is_digital') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:179:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:180:                            <div class="form-group row width-50" 
id="upload_file_div" style="display: none;">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:181:                                <label class="col-3 
control-label">{{ trans('lang.item_upload_file') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:182:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:183:                                    <input type="file" 
onChange="handleZipUpload(event)" id="digital_product_file">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:184:                                    <div id="uploding_zip" 
class="placeholder_img_thumb mt-2"></div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:185:                                    <div class="form-text 
text-muted max_file_size"></div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:186:                                    <div class="form-text 
text-muted">{{ trans('lang.item_upload_file_ext') }}</div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:187:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:188:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:189:                            <div class="form-group row width-50 
brandDiv" style="display: none;">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:190:                                <label class="col-3 
control-label">{{ trans('lang.brand') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:191:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:192:                                    <select id='brand' 
class="form-control" required>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:193:                                        <option value="">{{ 
trans('lang.select_brand') }}</option>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:194:                                    </select>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:195:                                    <div class="form-text 
text-muted">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:196:                                        {{ 
trans('lang.brand_help') }}
  C:\deploy\adminpanel\resources\views\items\create.blade.php:197:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:198:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:199:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:200:                            <div class="form-group row width-100">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:201:                                <label class="col-3 
control-label">{{ trans('lang.item_image') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:202:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:203:                                    <input type="file" 
id="product_image">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:204:                                    <div 
class="placeholder_img_thumb product_image"></div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:205:                                    <div 
id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:206:                                    <div class="form-text 
text-muted">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:207:                                        {{ 
trans('lang.item_image_help') }}
  C:\deploy\adminpanel\resources\views\items\create.blade.php:208:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:209:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:210:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:211:                            <div class="form-check width-100">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:212:                                <input type="checkbox" 
class="item_publish" id="item_publish">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:213:                                <label class="col-3 control-label"
> C:\deploy\adminpanel\resources\views\items\create.blade.php:214:                                    for="item_publish">{{ 
trans('lang.item_publish') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:215:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:216:                            <div class="form-check width-100 
food_delivery_div d-none">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:217:                                <input type="checkbox" 
class="item_nonveg" id="item_nonveg">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:218:                                <label class="col-3 
control-label" for="item_nonveg">{{ trans('lang.non_veg') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:219:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:220:                            <div class="form-check width-100 
food_delivery_take_away d-none">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:221:                                <input type="checkbox" 
class="item_take_away_option" id="item_take_away_option">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:222:                                <label class="col-3 control-label"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:223:                                    
for="item_take_away_option">{{ trans('lang.item_take_away') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:224:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:225:                        </fieldset>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:226:                        <fieldset class="product-taxes d-none">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:227:                            <legend>{{ trans('lang.tax_settings') 
}}</legend>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:228:                            <div class="form-group row">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:229:                                <label class="col-3 
control-label">{{ trans('lang.select_taxes') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:230:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:231:                                    <select id="taxes" 
class="form-control chosen-select" multiple="multiple"></select>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:232:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:233:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:234:                        </fieldset>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:235:                        <fieldset class="food_delivery_div 
ingredients-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:236:                            <legend>{{ trans('lang.ingredients') 
}}</legend>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:237:                            @if (isset($openai_settings) && 
data_get($openai_settings, 'status') == true)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:238:                            <div class="width-100 text-right">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:239:                                <button type="button" class="btn 
bg-white text-primary generate_btn_wrapper opacity-1 pl-1 mb-2 ingredients_auto_fill"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:240:                                    data-error="{{ 
trans('lang.ai_ingredients_error') }}"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:241:                                    data-lang="{{ 
App::getLocale() }}"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:242:                                    data-route="{{ 
route('ai.ingredients-auto-fill') }}">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:409:        <script src="{{ 
asset('js/AI/variation-setup-auto-fill.js') }}"></script>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:410:        <script src="{{ asset('js/AI/ai-sidebar.js') }}"></script>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:411:        <script src="{{ 
asset('js/AI/compressor/image-compressor.js')}}"></script>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:412:        <script src="{{ 
asset('js/AI/compressor/compressor.min.js')}}"></script>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:413:    @endif
  C:\deploy\adminpanel\resources\views\items\create.blade.php:414:    
  C:\deploy\adminpanel\resources\views\items\create.blade.php:415:    <script type="text/javascript">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:416:        
> C:\deploy\adminpanel\resources\views\items\create.blade.php:417:        var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:418:        var vendor_id = "{{ $id }}";
  C:\deploy\adminpanel\resources\views\items\create.blade.php:419:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:420:        var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:421:        var photo = "";
  C:\deploy\adminpanel\resources\views\items\create.blade.php:422:        var digital_product_file = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:423:        var digital_product_file_name = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:424:        var digital_product_ext = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:425:        var addOnesTitle = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:426:        var addOnesPrice = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:427:        var categories_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:428:        var brand_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:429:        var attributes_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:430:        var vendor_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:431:        var product_specification = {};
  C:\deploy\adminpanel\resources\views\items\create.blade.php:432:        var photos = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:433:        var product_image_filename = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:434:        var variant_photos = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:435:        var variant_filename = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:436:        var variant_vIds = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:437:        var productImagesCount = 0;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:438:        var allowed_file_size = '';
> C:\deploy\adminpanel\resources\views\items\create.blade.php:439:        var vendor_section_id = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:440:        
  C:\deploy\adminpanel\resources\views\items\create.blade.php:441:        var sections_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:442:        var itemLimit = '-1';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:443:        var createdItem = 0;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:444:        var subscriptionModel = false;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:445:        var commissionModel = false;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:446:        var vendorId = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:447:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:448:        var ref_sections = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:449:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:450:        ref_sections.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:451:            await snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:452:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:453:                sections_list.push(data);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:454:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:455:            
  C:\deploy\adminpanel\resources\views\items\create.blade.php:456:            var result = sections_list.find(function(e) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:457:                return e.id === section_id;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:458:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:459:            if (result && result.serviceTypeFlag == 
"delivery-service") {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:460:                
$('.food_delivery_take_away').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:461:                if (result && result.is_product_details) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:462:                    $('.food_delivery_div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:463:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:464:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:465:        });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:466:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:467:        var refCurrency = 
database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:468:        refCurrency.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:469:            var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:470:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:471:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:472:            if (currencyData.decimal_degits) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:473:                decimal_degits = currencyData.decimal_degits;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:474:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:475:        });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:476:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:477:        var subscriptionBusinessModel = 
database.collection('settings').doc("vendor");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:478:        subscriptionBusinessModel.get().then(async 
function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:479:            var subscriptionSetting = snapshots.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:480:            if (subscriptionSetting.subscription_model == true) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:481:                subscriptionModel = true;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:482:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:483:        });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:484:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:485:        var sectionData = '';
> C:\deploy\adminpanel\resources\views\items\create.blade.php:486:        var sectionRef = 
database.collection('sections').doc(section_id);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:487:        sectionRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:488:            sectionData = snapshots.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:489:            if (sectionData.adminCommision.enable == true) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:490:                commissionModel = true;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:491:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:492:            if(sectionData.serviceTypeFlag == 
"ecommerce-service"){
  C:\deploy\adminpanel\resources\views\items\create.blade.php:493:                $(".brandDiv").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:494:                $("#is_digital_div").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:495:                $("#upload_file_div").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:496:            }else{
  C:\deploy\adminpanel\resources\views\items\create.blade.php:497:                $("#is_digital_product").prop('checked', false);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:498:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:499:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:500:            if (sectionData.serviceTypeFlag == 
"delivery-service") {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:501:                
$('.food_delivery_take_away').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:502:            } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:503:                $('.food_delivery_take_away').addClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:504:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:505:            
  C:\deploy\adminpanel\resources\views\items\create.blade.php:506:            if (sectionData.is_product_details) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:507:                $(".food_delivery_div").removeClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:508:            } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:509:                $(".food_delivery_div").addClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:510:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:511:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:512:            if (sectionData.serviceTypeFlag == 
"ecommerce-service" || sectionData.serviceTypeFlag == "delivery-service") {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:513:                $("#attributes_div").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:514:                $("#item_attribute_chosen").css({
  C:\deploy\adminpanel\resources\views\items\create.blade.php:568:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:569:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:570:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:571:            jQuery(document).on("click", "#is_digital_product", 
function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:572:                var selected_section = 
$('#item_vendor').find('option:selected').attr('data-section-id');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:573:                if (selected_section) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:574:                    selected_section = selected_section;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:575:                } else {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:576:                    selected_section = vendor_section_id;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:577:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:578:                var section_info = $.map(sections_list, 
function(section, i) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:579:                    if (section.id == selected_section) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:580:                        return section;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:581:                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:582:                });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:583:                if (jQuery(this).is(':checked') && 
section_info.length > 0 && (section_info[0].serviceTypeFlag == "ecommerce-service")) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:584:                    $("#upload_file_div").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:585:                } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:586:                    $("#upload_file_div").hide();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:587:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:588:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:589:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:590:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:591:            
> C:\deploy\adminpanel\resources\views\items\create.blade.php:592:            database.collection('vendors').where('section_id', 
'==', section_id).orderBy('title').where('title','!=', '').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:593:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:594:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:595:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:596:                    vendor_list.push(data);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:597:                    
$('#item_vendor').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\create.blade.php:598:                        .attr("value", data.id)
> C:\deploy\adminpanel\resources\views\items\create.blade.php:599:                        .attr("data-lat", data.latitude)
> C:\deploy\adminpanel\resources\views\items\create.blade.php:600:                        .attr("data-long", data.longitude)
> C:\deploy\adminpanel\resources\views\items\create.blade.php:601:                        .attr("data-section-id", data.section_id)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:602:                        .attr("data-user-id", data.author)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:603:                        .text(data.title));
  C:\deploy\adminpanel\resources\views\items\create.blade.php:604:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:605:                    if (reataurantIDDirec == data.id) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:606:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:607:                        vendor_section_id = data.section_id;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:608:                        localStorage.setItem('vendor_section_id', 
vendor_section_id);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:609:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:610:                        
$(".vendor_name_heading").html(data.title);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:611:                        var section_info = $.map(sections_list, 
function(section, i) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:612:                            if (section.id == data.section_id) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:613:                                return section;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:614:                            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:615:                        });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:616:                        if (section_info.length > 0 && 
(section_info[0].serviceTypeFlag == "ecommerce-service" || section_info[0].serviceTypeFlag == "delivery-service")) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:617:                            $("#attributes_div").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:618:                            $("#item_attribute_chosen").css({
  C:\deploy\adminpanel\resources\views\items\create.blade.php:619:                                'width': '100%'
  C:\deploy\adminpanel\resources\views\items\create.blade.php:620:                            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:621:                        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:622:                        if (section_info.length > 0 && 
(section_info[0].serviceTypeFlag == "ecommerce-service")) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:623:                            $("#is_digital_div").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:624:                        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:625:                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:626:                    if (reataurantIDDirec && reataurantIDDirec 
!== '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:627:                        change_categories(reataurantIDDirec);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:628:                        
$(".vendor_name_heading").html($('#item_vendor option[value="' + reataurantIDDirec + '"]').text());
  C:\deploy\adminpanel\resources\views\items\create.blade.php:629:                        
$(".item_vendor_id").val(reataurantIDDirec).val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:630:                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:631:                })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:632:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:633:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:634:            var vendorsCatRef = 
database.collection('vendor_categories').where('section_id', '==', section_id);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:635:            vendorsCatRef.where('publish', '==', 
true).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:636:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:637:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:638:                    categories_list.push(data);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:639:                })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:640:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:641:            
> C:\deploy\adminpanel\resources\views\items\create.blade.php:642:            var brandRef = 
database.collection('brands').where('sectionId', '==', section_id);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:643:            brandRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:644:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:645:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:646:                    brand_list.push(data);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:647:                    $('#brand').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\create.blade.php:648:                        .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:649:                        .text(data.title));
  C:\deploy\adminpanel\resources\views\items\create.blade.php:650:                })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:651:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:652:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:653:            var digitalProductRef = 
database.collection('settings').doc("digitalProduct");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:654:            digitalProductRef.get().then(async 
function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:655:                var digitalProductData = snapshots.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:656:                allowed_file_size = digitalProductData.fileSize;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:657:                $(".max_file_size").text('{{ 
trans('lang.item_upload_file_max') }}' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:658:                    allowed_file_size + 'Mb');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:659:            })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:660:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:661:            var attributes = 
database.collection('vendor_attributes');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:662:            attributes.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:663:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:664:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:665:                    attributes_list.push(data);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:666:                    
$('#item_attribute').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\create.blade.php:667:                        .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:668:                        .text(data.title));
  C:\deploy\adminpanel\resources\views\items\create.blade.php:669:                })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:670:                $("#item_attribute").show().chosen({
  C:\deploy\adminpanel\resources\views\items\create.blade.php:676:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:677:            $(".save-form-btn").click(async function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:678:                
  C:\deploy\adminpanel\resources\views\items\create.blade.php:679:                var name = $("#item_name").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:680:                var price = $("#item_price").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:681:                var item_quantity = $("#item_quantity").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:682:                var set_vendor_id = vendor_id ? vendor_id : 
$("#item_vendor option:selected").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:683:                var category = $("#item_category").val();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:684:                var section_id = 
$('#item_category').find('option:selected').attr('section_id');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:685:                var brand = $("#brand").val() || '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:686:                var itemCalories = 
parseInt($(".item_calories").val());
  C:\deploy\adminpanel\resources\views\items\create.blade.php:687:                var itemGrams = parseInt($(".item_grams").val());
  C:\deploy\adminpanel\resources\views\items\create.blade.php:688:                var itemProteins = 
parseInt($(".item_proteins").val());
  C:\deploy\adminpanel\resources\views\items\create.blade.php:689:                var itemFats = parseInt($(".item_fats").val());
  C:\deploy\adminpanel\resources\views\items\create.blade.php:690:                var description = $("#item_description").val();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:691:                var itemPublish = 
$(".item_publish").is(":checked");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:692:                var nonveg = $(".item_nonveg").is(":checked");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:693:                var veg = !nonveg;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:694:                var itemTakeaway = 
$(".item_take_away_option").is(":checked");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:695:                var discount = $("#item_discount").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:696:                var is_digital_product = 
$("#is_digital_product").is(":checked");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:697:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:698:                if (discount == '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:699:                    discount = "0";
  C:\deploy\adminpanel\resources\views\items\create.blade.php:700:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:701:                if (!itemCalories) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:702:                    itemCalories = 0;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:703:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:704:                if (!itemGrams) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:705:                    itemGrams = 0;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:706:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:707:                if (!itemFats) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:708:                    itemFats = 0;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:709:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:710:                if (!itemProteins) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:711:                    itemProteins = 0;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:712:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:713:                if (photos != '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:714:                    photo = photos[0]
  C:\deploy\adminpanel\resources\views\items\create.blade.php:715:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:716:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:717:                let selectedTaxes = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:718:                $('#taxes option:selected').each(function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:719:                    let taxData = $(this).attr('data-tax');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:775:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:776:                } else if (is_digital_product == true && 
digital_product_file == '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:777:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:778:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:779:                    $(".error_top").append("<p>{{ 
trans('lang.upload_digital_file_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:780:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:781:                } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:782:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:783:                    var vendorRef = await 
database.collection('vendors').doc(set_vendor_id).get();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:784:                    var vendorData = vendorRef.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:785:                    var userId = vendorData.author;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:786:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:787:                    
database.collection('vendor_products').where('vendorID', '==', set_vendor_id).get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:788:                        createdItem = snapshot.docs.length;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:789:                    })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:790:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:791:                    await 
database.collection('users').where('id', '==', userId).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:792:                        var data = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:793:                        if (subscriptionModel || commissionModel) 
{
  C:\deploy\adminpanel\resources\views\items\create.blade.php:794:                            if 
(data.hasOwnProperty('subscription_plan') && data
  C:\deploy\adminpanel\resources\views\items\create.blade.php:795:                                .subscription_plan != null && data
  C:\deploy\adminpanel\resources\views\items\create.blade.php:796:                                .subscription_plan != '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:797:                                itemLimit = 
data.subscription_plan.itemLimit;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:798:                            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:799:                        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:800:                    });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:801:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:802:                    if (!(parseInt(itemLimit) == -1 || 
parseInt(createdItem) < parseInt(itemLimit))) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:803:                      $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:804:                        $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:805:                        $(".error_top").append(
  C:\deploy\adminpanel\resources\views\items\create.blade.php:806:                            "<p>{{ 
trans('lang.create_item_limit_exceed') }}</p>"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:807:                        );
  C:\deploy\adminpanel\resources\views\items\create.blade.php:808:                        window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:809:                        return false;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:810:                    } 
  C:\deploy\adminpanel\resources\views\items\create.blade.php:811:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:812:                    $(".error_top").hide();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:813:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:814:                    var attributes = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:815:                    var variants = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:901:                            if (IMG.length > 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:902:                                photo = IMG[0];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:903:                            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:904:                            var objects = {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:905:                                'name': name,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:906:                                'price': price.toString(),
  C:\deploy\adminpanel\resources\views\items\create.blade.php:907:                                'quantity': 
parseInt(item_quantity),
  C:\deploy\adminpanel\resources\views\items\create.blade.php:908:                                'disPrice': discount.toString(),
> C:\deploy\adminpanel\resources\views\items\create.blade.php:909:                                'vendorID': set_vendor_id,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:910:                                'categoryID': category,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:911:                                'brandID': brand,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:912:                                'section_id': section_id,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:913:                                'photo': photo,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:914:                                'calories': itemCalories,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:915:                                "grams": itemGrams,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:916:                                'proteins': itemProteins,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:917:                                'fats': itemFats,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:918:                                'description': description,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:919:                                'publish': itemPublish,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:920:                                'nonveg': nonveg,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:921:                                'veg': veg,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:922:                                'addOnsTitle': addOnesTitle,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:923:                                'addOnsPrice': addOnesPrice,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:924:                                'takeawayOption': itemTakeaway,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:925:                                'product_specification': 
product_specification,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:926:                                'id': id,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:927:                                'item_attribute': item_attribute,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:928:                                'photos': IMG,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:929:                                'isDigitalProduct': 
is_digital_product,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:930:                                'digitalProduct': DigitalImg,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:931:                                'createdAt': 
firebase.firestore.FieldValue.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\items\create.blade.php:932:                                'taxSetting': selectedTaxes,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:933:                            };
> C:\deploy\adminpanel\resources\views\items\create.blade.php:934:                            
database.collection('vendor_products').doc(id)
> C:\deploy\adminpanel\resources\views\items\create.blade.php:935:                                
.set(objects).then(function(result) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:936:                                    if (reataurantIDDirec) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:937:                                        window.location.href =
  C:\deploy\adminpanel\resources\views\items\create.blade.php:938:                                            "{{ 
route('vendors.items', $id) }}";
  C:\deploy\adminpanel\resources\views\items\create.blade.php:939:                                    } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:940:                                        window.location.href =
  C:\deploy\adminpanel\resources\views\items\create.blade.php:941:                                            '{{ route('items') 
}}';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:942:                                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:943:                                });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:944:                        }).catch(err => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:945:                            
jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:946:                            $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:947:                            $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:948:                            $(".error_top").append("<p>" + err + 
"</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:949:                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:950:                        });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:951:                    }).catch(err => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:952:                        jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:953:                        $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:954:                        $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:955:                        $(".error_top").append("<p>" + err + 
"</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:956:                        window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:957:                    });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:958:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:959:                
  C:\deploy\adminpanel\resources\views\items\create.blade.php:960:            })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:961:        })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:962:        var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:963:        function handleFileSelect(evt) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1188:         if (item_vendor_id) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1189:                var selected_vendor = item_vendor_id;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1190:         var vendor_name = 
$(this).find('option:selected').text();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1191:            $(".vendor_name_heading").html(vendor_name);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1192:            change_categories(selected_vendor);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1193:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1194:            
database.collection('settings').doc('globalSettings').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1195:                let globalTax = snapshots.data();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1196:                let vendorLatitude = $("#item_vendor 
option:selected").data('lat');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1197:                let vendorLongitude = $("#item_vendor 
option:selected").data('long');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1198:                let countryName = 
getCookie('vendorCountryName_'+selected_vendor);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1199:                if (!countryName && (vendorLatitude && 
vendorLongitude)) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1200:                    countryName = await 
getCountryFromLatLng(vendorLatitude,vendorLongitude);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1201:                    
setCookie('vendorCountryName_'+selected_vendor, countryName, 365);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1202:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1203:                if(globalTax.taxScope == "product" && 
countryName){
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1204:                    $(".product-taxes").removeClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1205:                    $('#taxes').chosen('destroy').empty();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1206:                    database.collection('tax').where('enable','==
',true).where('scope','==','product').where('country','==',countryName).where('sectionId','==',section_id).get().then(async 
function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1207:                        if(snapshots.docs.length > 0){
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1208:                            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1209:                                var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1210:                                let taxText = data.title + ' (';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1211:                                if (data.type === 'percentage') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1212:                                    taxText += data.tax + '%';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1213:                                } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1214:                                    if (currencyAtRight) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1215:                                        taxText += 
parseFloat(data.tax).toFixed(decimal_degits) + ' ' + currentCurrency;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1216:                                    } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1217:                                        taxText += 
currentCurrency + parseFloat(data.tax).toFixed(decimal_degits);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1218:                                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1219:                                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1220:                                taxText += ')';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1221:                                $('#taxes').append(
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1222:                                    $('<option></option>')
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1223:                                        .attr('value', data.id)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1224:                                        .attr('data-tax', 
encodeURIComponent(JSON.stringify(data)))
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1225:                                        .text(taxText)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1226:                                );
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1227:                            })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1228:                            $('#taxes').chosen({
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1229:                                width: '100%',
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1230:                                placeholder_text_multiple: '{{ 
trans('lang.select_taxes') }}',
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1231:                            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1232:                        }else{
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1233:                            
$(".product-taxes").addClass('d-none');        
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1234:                        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1243:        $("#item_vendor").change(function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1244:            var selected_vendor = this.value || '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1245:            var vendor_name = 
$(this).find('option:selected').text();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1246:            $(".vendor_name_heading").html(vendor_name);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1247:            change_categories(selected_vendor);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1248:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1249:            
database.collection('settings').doc('globalSettings').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1250:                let globalTax = snapshots.data();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1251:                let vendorLatitude = $("#item_vendor 
option:selected").data('lat');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1252:                let vendorLongitude = $("#item_vendor 
option:selected").data('long');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1253:                let countryName = 
getCookie('vendorCountryName_'+selected_vendor);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1254:                if (!countryName && (vendorLatitude && 
vendorLongitude)) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1255:                    countryName = await 
getCountryFromLatLng(vendorLatitude,vendorLongitude);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1256:                    
setCookie('vendorCountryName_'+selected_vendor, countryName, 365);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1257:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1258:                if(globalTax.taxScope == "product" && 
countryName){
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1259:                    $(".product-taxes").removeClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1260:                    $('#taxes').chosen('destroy').empty();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1261:                    database.collection('tax').where('enable','==
',true).where('scope','==','product').where('country','==',countryName).where('sectionId','==',section_id).get().then(async 
function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1262:                        if(snapshots.docs.length > 0){
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1263:                            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1264:                                var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1265:                                let taxText = data.title + ' (';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1266:                                if (data.type === 'percentage') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1267:                                    taxText += data.tax + '%';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1268:                                } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1269:                                    if (currencyAtRight) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1270:                                        taxText += 
parseFloat(data.tax).toFixed(decimal_degits) + ' ' + currentCurrency;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1271:                                    } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1272:                                        taxText += 
currentCurrency + parseFloat(data.tax).toFixed(decimal_degits);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1273:                                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1274:                                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1275:                                taxText += ')';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1276:                                $('#taxes').append(
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1277:                                    $('<option></option>')
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1278:                                        .attr('value', data.id)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1279:                                        .attr('data-tax', 
encodeURIComponent(JSON.stringify(data)))
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1280:                                        .text(taxText)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1281:                                );
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1282:                            })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1283:                            $('#taxes').chosen({
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1284:                                width: '100%',
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1285:                                placeholder_text_multiple: '{{ 
trans('lang.select_taxes') }}',
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1286:                            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1287:                        }else{
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1288:                            
$(".product-taxes").addClass('d-none');        
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1289:                        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1290:                    });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1291:                }else{
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1292:                    $(".product-taxes").addClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1293:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1294:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1295:        });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1296:        
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1297:        function change_categories(selected_vendor) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1298:            
database.collection('vendors').doc(selected_vendor).get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1299:                if (snapshot.exists) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1300:                    var data = snapshot.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1301:                   
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1302:                    var categoryIDs = data.categoryID || [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1303:                    $('#item_category').empty();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1304:                    
$('#item_category').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1305:                        .attr("value", "").text("{{ 
trans('lang.select_category') }}")); //new line added
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1306:                    var matched = 0; //new line added
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1307:                    categories_list.forEach((val) => {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1308:                        if (categoryIDs.includes(val.id)) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1309:                            
$('#item_category').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1310:                                .attr("value", val.id)
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1311:                                .attr("section_id", 
val.section_id)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1312:                                .text(val.title));
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1313:                            matched++; //new line added
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1314:                        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1315:                    })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1316:                    if (matched === 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1317:                        $('#item_category').append($("<option 
disabled></option>")
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1318:                            .text("{{ 
trans('lang.no_categories_found') }}"));
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1319:                    } //new line added
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1320:                    $('#item_category').trigger('change');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1321:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1322:            })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1323:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1324:       
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1325:        function selectAttribute(item_attribute = '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1326:            if (item_attribute) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1327:                var item_attribute = 
$.parseJSON(atob(item_attribute));
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1328:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1329:            var html = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1330:            
$("#item_attribute").find('option:selected').each(function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1331:                var $this = $(this);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1332:                var selected_options = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1333:                if (item_attribute) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1334:                    $.each(item_attribute.attributes, 
function(index, attribute) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1335:                        if ($this.val() == 
attribute.attribute_id) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1336:                            
selected_options.push(attribute.attribute_options);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1337:                        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1338:                    });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1339:                }



TEXT_END

## FILE: resources\views\items\edit.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\items\edit.blade.php:159:                                        <input type="hidden" 
id="attributes" value="" />
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:160:                                        <input type="hidden" 
id="variants" value="" />
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:161:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:162:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:163:                            </div>  
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:164:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:165:                            <div class="form-check row width-50 
mb-3" id="is_digital_div" style="display: none;">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:166:                                <input type="checkbox" 
class="is_digital_product" id="is_digital_product">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:167:                                <label class="col-3 control-label" 
for="item_publish">{{ trans('lang.item_is_digital') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:168:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:169:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:170:                            <div class="form-group row width-50" 
id="upload_file_div" style="display: none;">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:171:                                <label class="col-3 
control-label">{{ trans('lang.item_upload_file') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:172:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:173:                                    <input type="file" 
onChange="handleZipUpload(event)" id="digital_product_file">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:174:                                    <div id="uploding_zip" 
class="placeholder_img_thumb"></div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:175:                                    <div class="form-text 
text-muted max_file_size"></div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:176:                                    <div class="form-text 
text-muted">{{ trans('lang.item_upload_file_ext') }}</div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:177:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:178:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:179:                           
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:180:                            <div class="form-group row width-50 
brandDiv" style="display: none;">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:181:                                <label class="col-3 
control-label">{{ trans('lang.brand') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:182:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:183:                                    <select id='brand' 
class="form-control" required>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:184:                                        <option value="">{{ 
trans('lang.select_brand') }}</option>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:185:                                    </select>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:186:                                    <div class="form-text 
text-muted">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:187:                                        {{ trans('lang.brand_help') 
}}
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:188:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:189:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:190:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:191:                            <div class="form-group row width-100" 
id="attributes_div" style="display:none">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:192:                                <label class="col-3 
control-label">{{ trans('lang.item_attribute_id') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:193:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:194:                                    <select id='item_attribute' 
class="form-control chosen-select" required multiple="multiple" style="display: none;"></select>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:195:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:202:                                    <div 
class="placeholder_img_thumb product_image"></div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:203:                                    <div id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:204:                                    <div class="form-text 
text-muted">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:205:                                        {{ 
trans('lang.item_image_help') }}
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:206:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:207:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:208:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:209:                            <div class="form-check width-100">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:210:                                <input type="checkbox" 
class="item_publish" id="item_publish">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:211:                                <label class="col-3 control-label" 
for="item_publish">{{ trans('lang.item_publish') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:212:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:213:                            <div class="form-check width-100 
item_delivery_div d-none">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:214:                                <input type="checkbox" 
class="item_nonveg" id="item_nonveg">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:215:                                <label class="col-3 control-label" 
for="item_nonveg">{{ trans('lang.non_veg') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:216:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:217:                            <div class="form-check width-100 
item_delivery_take_away d-none">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:218:                                <input type="checkbox" 
class="item_take_away_option" id="item_take_away_option">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:219:                                <label class="col-3 control-label" 
for="item_take_away_option">{{ trans('lang.item_take_away') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:220:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:221:                        </fieldset>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:222:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:223:                        <fieldset class="product-taxes d-none">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:224:                            <legend>{{ trans('lang.tax_settings') 
}}</legend>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:225:                            <div class="form-group row">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:226:                                <label class="col-3 
control-label">{{ trans('lang.select_taxes') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:227:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:228:                                    <select id="taxes" 
class="form-control chosen-select" multiple="multiple"></select>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:229:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:230:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:231:                        </fieldset>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:232:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:233:                        <fieldset class="item_delivery_div 
ingredients-wrapper d-none">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:234:                             <legend>{{ trans('lang.ingredients') 
}}</legend>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:235:                            @if (isset($openai_settings) && 
data_get($openai_settings, 'status') == true)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:236:                            <div class="width-100 text-right">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:237:                                <button type="button" class="btn 
bg-white text-primary generate_btn_wrapper opacity-1 pl-1 mb-2 ingredients_auto_fill"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:238:                                    data-error="{{ 
trans('lang.ai_ingredients_error') }}"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:239:                                    data-lang="{{ App::getLocale() 
}}"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:409:        <script src="{{ asset('js/AI/variation-setup-auto-fill.js') 
}}"></script>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:410:        <script src="{{ asset('js/AI/ai-sidebar.js') }}"></script>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:411:        <script src="{{ 
asset('js/AI/compressor/image-compressor.js')}}"></script>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:412:        <script src="{{ 
asset('js/AI/compressor/compressor.min.js')}}"></script>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:413:    @endif
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:414:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:415:    <script type="text/javascript">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:416:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:417:        var section_id = getCookie('section_id') || null;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:418:        var vendor_id = "{{ $id }}";
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:419:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:420:        var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:421:        var ref = 
database.collection('vendor_products').where("id", "==", vendor_id);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:422:        var ref_sections = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:423:        var storage = firebase.storage();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:424:        var categories_list = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:425:        var brand_list = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:426:        var attributes_list = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:427:        var vendor_list = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:428:        var photo = "";
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:429:        var addOnesTitle = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:430:        var addOnesPrice = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:431:        var product_specification = {};
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:432:        var photos = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:433:        var new_added_photos = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:434:        var new_added_photos_filename = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:435:        var photosToDelete = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:436:        var variant_photos = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:437:        var variant_filename = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:438:        var variantImageToDelete = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:439:        var variant_vIds = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:440:        var digital_product_file = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:441:        var digital_product_file_name = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:442:        var digital_product_old_file = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:443:        var digital_product_ext = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:444:        var productImagesCount = 0;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:445:        var vendors = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:446:        var sections_list = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:447:        var placeholderImage = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:448:        var product = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:449:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:450:        var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:451:        var allowed_file_size = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:452:        placeholder.get().then(async function(snapshotsimage) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:453:            var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:454:            placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:455:        })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:456:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:457:        var refCurrency = 
database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:458:        refCurrency.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:459:            var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:460:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:461:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:462:            if (currencyData.decimal_degits) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:463:                decimal_degits = currencyData.decimal_degits;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:464:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:465:        });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:466:        
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:467:        var sectionData = '';
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:468:        var sectionRef = 
database.collection('sections').doc(section_id);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:469:        sectionRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:470:            sectionData = snapshots.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:471:            if (sectionData.adminCommision.enable == true) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:472:                commissionModel = true;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:473:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:474:            if(sectionData.serviceTypeFlag == "ecommerce-service"){
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:475:                $(".brandDiv").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:476:                $("#is_digital_div").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:477:                $("#upload_file_div").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:478:            }else{
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:479:                $("#is_digital_product").prop('checked', false);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:480:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:481:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:482:            if (sectionData.serviceTypeFlag == "delivery-service") {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:483:                $('.item_delivery_take_away').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:484:            } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:485:                $('.item_delivery_take_away').addClass('d-none');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:486:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:487:            
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:488:            if (sectionData.is_product_details) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:489:                $(".item_delivery_div").removeClass('d-none');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:490:            } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:491:                $(".item_delivery_div").addClass('d-none');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:492:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:493:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:494:            if (sectionData.serviceTypeFlag == "ecommerce-service" 
|| sectionData.serviceTypeFlag == "delivery-service") {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:495:                $("#attributes_div").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:496:                $("#item_attribute_chosen").css({
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:588:            
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:589:            ref_sections.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:590:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:591:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:592:                    sections_list.push(data);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:593:                })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:594:            })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:595:            
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:596:            database.collection('vendors').where('section_id', 
'==', section_id).orderBy('title').where('title', '!=', '').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:597:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:598:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:599:                    vendor_list.push(data);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:600:                    vendors.push(data);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:601:                    $('#item_vendor').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:602:                        .attr("value", data.id)
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:603:                        .attr("data-lat", data.latitude)
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:604:                        .attr("data-long", data.longitude)
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:605:                        .attr("data-section-id", data.section_id)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:606:                        .text(data.title));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:607:                })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:608:            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:609:            
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:610:            
database.collection('vendor_categories').where('publish', '==', true).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:611:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:612:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:613:                    categories_list.push(data);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:614:                })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:615:            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:616:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:617:            var brandRef = 
database.collection('brands').where('sectionId', '==', section_id);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:618:            brandRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:619:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:620:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:621:                    brand_list.push(data);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:622:                    $('#brand').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:623:                        .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:624:                        .text(data.title));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:625:                })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:626:            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:627:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:628:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:629:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:630:            ref.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:631:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:632:                product = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:633:                
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:634:                
$('#item_vendor').val(product.vendorID).trigger('change');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:635:                $('#brand').val(product.brandID);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:636:                
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:637:                await change_categories(product.vendorID, 
product.categoryID);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:638:                
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:639:                $('#item_category').val(product.categoryID);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:640:                
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:641:                var selected_attributes = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:642:                if (product.item_attribute != null) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:643:                    $("#attributes_div").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:644:                    $.each(product.item_attribute.attributes, 
function(index, attribute) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:645:                        
selected_attributes.push(attribute.attribute_id);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:646:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:647:                    
$('#attributes').val(JSON.stringify(product.item_attribute.attributes));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:648:                    
$('#variants').val(JSON.stringify(product.item_attribute.variants));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:649:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:650:                
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:651:                var attributes = 
database.collection('vendor_attributes');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:652:                attributes.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:653:                    
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:654:                    let attributeMap = {};
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:655:                    snapshots.docs.forEach(doc => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:656:                        attributeMap[doc.id] = doc.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:657:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:658:                    selected_attributes.forEach(attrId => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:659:                        if (attributeMap[attrId]) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:660:                            let data = attributeMap[attrId];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:661:                            let option = '<option value="' + 
data.id + '" selected="selected">' + data.title + '</option>';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:662:                            $('#item_attribute').append(option);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:663:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:664:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:665:                    snapshots.docs.forEach(doc => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:666:                        let data = doc.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:667:                        if ($.inArray(data.id, selected_attributes) 
=== -1) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:697:                    $(".item_proteins").val(product.proteins)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:698:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:699:                if (product.hasOwnProperty("fats")) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:700:                    $(".item_fats").val(product.fats);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:701:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:702:                
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:703:                $("#item_description").val(product.description);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:704:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:705:                if (product.publish) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:706:                    $(".item_publish").prop('checked', true);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:707:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:708:                if (product.nonveg) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:709:                    $(".item_nonveg").prop('checked', true);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:710:                }
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:711:                if (product.takeawayOption) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:712:                    $(".item_take_away_option").prop('checked', 
true);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:713:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:714:                if (product.hasOwnProperty("isDigitalProduct") && 
product.hasOwnProperty("digitalProduct")) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:715:                    if (product.isDigitalProduct) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:716:                        $("#is_digital_product").prop('checked', 
true);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:717:                        $("#is_digital_div").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:718:                        $("#upload_file_div").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:719:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:720:                    if (product.digitalProduct) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:721:                        var documentType = 
(product.digitalProduct).split("?")[0];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:722:                        ext = documentType.split(".").pop();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:723:                        if (ext == 'zip') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:724:                            $("#uploding_zip").html('<span 
class="image-item zip-file mt-2"><span class="" data-itemid="' + product.id + '" data-file="' + product.digitalProduct + 
'"></span><a href="' + product.digitalProduct + '" download><i class="fa fa-file-text" style="font-size:45px"></i></a></span>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:725:                        } else if (ext == 'pdf') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:726:                            $("#uploding_zip").html('<span 
class="image-item zip-file mt-2"><span class="" data-itemid="' + product.id + '" data-file="' + product.digitalProduct + 
'"></span><a href="' + product.digitalProduct + '"><i class="fa fa-file-text" style="font-size:45px"></i></a></span>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:727:                        } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:728:                            $("#uploding_zip").html('<span 
class="image-item zip-file mt-2"><span class="" data-itemid="' + product.id + '" data-file="' + product.digitalProduct + 
'"></span><img width="100px" height="auto" src="' + product.digitalProduct + '" onerror="this.onerror=null;this.src=\'' + 
placeholderImage + '\'"></span>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:729:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:730:                        digital_product_file = 
product.digitalProduct;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:731:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:732:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:733:                if (product.hasOwnProperty('addOnsTitle')) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:734:                    product.addOnsTitle.forEach((element, index) => 
{
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:735:                        $(".add_ons_list").append('<div class="row" 
style="margin-top:5px;" id="add_ones_list_iteam_' + index + '"><div class="col-5"><input class="form-control" type="text" value="' 
+ element + '" disabled ></div><div class="col-5"><input class="form-control" type="text" value="' + product.addOnsPrice[index] + 
'" disabled ></div><div class="col-2"><button class="btn" type="button" onclick="deleteAddOnesSingle(' + index +
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:736:                            ')"><span class="fa 
fa-trash"></span></button></div></div>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:737:                    })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:738:                    addOnesTitle = product.addOnsTitle;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:739:                    addOnesPrice = product.addOnsPrice;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:780:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:781:            $(".edit-form-btn").click(async function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:782:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:783:                var name = $("#item_name").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:784:                var price = $("#item_price").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:785:                var item_quantity = $("#item_quantity").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:786:                var set_vendor_id = $("#item_vendor 
option:selected").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:787:                var category = $("#item_category 
option:selected").val();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:788:                var section_id = 
$('#item_category').find('option:selected').attr('section_id');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:789:                var brand = $("#brand option:selected").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:790:                var itemCalories = 
parseInt($(".item_calories").val());
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:791:                var itemGrams = parseInt($(".item_grams").val());
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:792:                var itemProteins = 
parseInt($(".item_proteins").val());
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:793:                var itemFats = parseInt($(".item_fats").val());
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:794:                var description = $("#item_description").val();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:795:                var itemPublish = $(".item_publish").is(":checked");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:796:                var nonveg = $(".item_nonveg").is(":checked");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:797:                var veg = !nonveg;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:798:                var itemTakeaway = 
$(".item_take_away_option").is(":checked");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:799:                var discount = $("#item_discount").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:800:                var is_digital_product = 
$("#is_digital_product").is(":checked");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:801:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:802:                if (discount == '') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:803:                    discount = "0";
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:804:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:805:                if (!itemCalories) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:806:                    itemCalories = 0;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:807:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:808:                if (!itemGrams) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:809:                    itemGrams = 0;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:810:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:811:                if (!itemFats) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:812:                    itemFats = 0;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:813:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:814:                if (!itemProteins) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:815:                    itemProteins = 0;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:816:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:817:                if ((photo == '' || photo == null) && photos.length 
> 0) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:818:                    photo = photos[0];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:819:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:820:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:821:                let selectedTaxes = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:822:                $('#taxes option:selected').each(function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:823:                    let taxData = $(this).attr('data-tax');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:977:                            if (IMG.length > 0) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:978:                                photo = IMG[0];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:979:                            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:980:                            var objects = {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:981:                                'name': name,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:982:                                'price': price.toString(),
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:983:                                'quantity': parseInt(item_quantity),
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:984:                                'disPrice': discount,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:985:                                'vendorID': set_vendor_id,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:986:                                'categoryID': category,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:987:                                'brandID': brand,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:988:                                'section_id': section_id,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:989:                                'photo': photo,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:990:                                'calories': itemCalories,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:991:                                "grams": itemGrams,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:992:                                'proteins': itemProteins,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:993:                                'fats': itemFats,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:994:                                'description': description,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:995:                                'publish': itemPublish,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:996:                                'nonveg': nonveg,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:997:                                'veg': veg,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:998:                                'addOnsTitle': addOnesTitle,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:999:                                'addOnsPrice': addOnesPrice,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1000:                                'takeawayOption': itemTakeaway,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1001:                                'product_specification': 
product_specification,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1002:                                'item_attribute': item_attribute,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1003:                                'photos': IMG,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1004:                                'isDigitalProduct': 
is_digital_product,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1005:                                'digitalProduct': DigitalImg ? 
DigitalImg : '',
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1006:                                'taxSetting': selectedTaxes,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1007:                            };
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1008:                            
database.collection('vendor_products').doc(vendor_id).update(objects).then(function(result) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1009:                                <?php if (isset($_GET['eid']) && 
$_GET['eid'] != '') { ?>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1010:                                    window.location.href = "{{ 
route('vendors.items', $_GET['eid']) }}";
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1011:                                <?php } else { ?>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1012:                                    window.location.href = '{{ 
route('items') }}';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1013:                                <?php } ?>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1014:                            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1015:                        }).catch(err => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1016:                            
jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1017:                            $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1018:                            $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1019:                            $(".error_top").append("<p>" + err + 
"</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1020:                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1021:                        });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1022:                    }).catch(err => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1023:                        jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1024:                        $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1025:                        $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1026:                        $(".error_top").append("<p>" + err + 
"</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1027:                        window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1028:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1029:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1030:            })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1031:        })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1032:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1033:        var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1034:        function handleFileSelect(evt) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1035:            var f = evt.target.files[0];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1036:            var reader = new FileReader();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1297:        });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1298:        $(document).on("click", ".delete-btn", function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1299:            if ($(this).hasClass('delete-zip')) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1300:                var fileurl = jQuery(this).data('file');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1301:                var itemid = jQuery(this).data('itemid');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1302:                itemid = itemid.toString();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1303:                if (fileurl) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1304:                    
firebase.storage().refFromURL(fileurl).delete();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1305:                    
database.collection('vendor_products').doc(itemid).update({
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1306:                        'digitalProduct': ''
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1307:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1308:                    digital_product_file = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1309:                    jQuery("#uploding_zip").html('');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1310:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1311:            } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1312:                var id = $(this).attr('data-id');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1313:                var photo_remove = $(this).attr('data-img');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1314:                $("#photo_" + id).remove();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1315:                index = photos.indexOf(photo_remove);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1316:                if (index > -1) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1317:                    photos.splice(index, 1); // 2nd parameter 
means remove one item only
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1318:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1319:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1320:        });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1321:        function addOneFunction() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1322:            $("#add_ones_div").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1323:            $(".save_add_one_btn").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1324:        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1325:        function addProductSpecificationFunction() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1326:            $("#add_product_specification_div").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1327:            $(".save_product_specification_btn").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1328:        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1329:        function saveAddOneFunction() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1330:            var optiontitle = $(".add_ons_title").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1331:            var optionPricevalue = $(".add_ons_price").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1332:            var optionPrice = $(".add_ons_price").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1333:            $(".add_ons_price").val('');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1371:        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1372:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1373:        $("#item_vendor").change(async function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1374:            var selected_vendor = this.value;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1375:            await change_categories(selected_vendor);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1376:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1377:            
database.collection('settings').doc('globalSettings').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1378:                let globalTax = snapshots.data();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1379:                let vendorLatitude = $("#item_vendor 
option:selected").data('lat');
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1380:                let vendorLongitude = $("#item_vendor 
option:selected").data('long');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1381:                let countryName = 
getCookie('vendorCountryName_'+selected_vendor);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1382:                if (!countryName && (vendorLatitude && 
vendorLongitude)) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1383:                    countryName = await 
getCountryFromLatLng(vendorLatitude,vendorLongitude);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1384:                    
setCookie('vendorCountryName_'+selected_vendor, countryName, 365);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1385:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1386:                if(globalTax.taxScope == "product" && countryName){
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1387:                    $(".product-taxes").removeClass('d-none');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1388:                    $('#taxes').chosen('destroy').empty();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1389:                    database.collection('tax').where('enable','==',
true).where('scope','==','product').where('country','==',countryName).where('sectionId','==',section_id).get().then(async 
function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1390:                        if(snapshots.docs.length > 0){
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1391:                            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1392:                                var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1393:                                let taxText = data.title + ' (';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1394:                                if (data.type === 'percentage') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1395:                                    taxText += data.tax + '%';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1396:                                } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1397:                                    if (currencyAtRight) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1398:                                        taxText += 
parseFloat(data.tax).toFixed(decimal_degits) + ' ' + currentCurrency;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1399:                                    } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1400:                                        taxText += currentCurrency 
+ parseFloat(data.tax).toFixed(decimal_degits);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1401:                                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1402:                                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1403:                                taxText += ')';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1404:                                let isSelected = 
product.taxSetting ? product.taxSetting.some(t => t.id === data.id) : '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1405:                                    $('#taxes').append(
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1406:                                        $('<option></option>')
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1407:                                            .attr('value', data.id)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1408:                                            .attr('data-tax', 
encodeURIComponent(JSON.stringify(data)))
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1409:                                            .text(taxText)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1410:                                            .prop('selected', 
isSelected)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1411:                                    );
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1412:                            })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1413:                            $('#taxes').chosen({
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1414:                                width: '100%',
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1415:                                placeholder_text_multiple: '{{ 
trans('lang.select_taxes') }}',
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1416:                            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1417:                        }else{
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1420:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1421:                }else{
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1422:                    $(".product-taxes").addClass('d-none');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1423:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1424:            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1425:        });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1426:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1427:        async function change_categories(selected_vendor, 
selected_category = null) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1428:            await 
database.collection('vendors').doc(selected_vendor).get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1429:                if (snapshot.exists) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1430:                    var data = snapshot.data();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1431:                    var categoryIDs = [];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1432:                    categoryIDs = data.categoryID;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1433:                    $('#item_category').empty();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1434:                    categories_list.forEach((val) => {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1435:                        if (categoryIDs.includes(val.id)) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1436:                            
$('#item_category').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1437:                                .attr("value", val.id)
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1438:                                .attr("section_id", val.section_id)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1439:                                .text(val.title));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1440:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1441:                    })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1442:                    if (selected_category) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1443:                        $('#item_category').val(selected_category);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1444:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1445:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1446:            })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1447:        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1448:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1449:        function selectAttribute(item_attribute = '') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1450:            if (item_attribute) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1451:                var item_attribute = 
$.parseJSON(atob(item_attribute));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1452:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1453:            var html = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1454:            
$("#item_attribute").find('option:selected').each(function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1455:                var $this = $(this);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1456:                var selected_options = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1457:                if (item_attribute) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1458:                    $.each(item_attribute.attributes, 
function(index, attribute) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1459:                        if ($this.val() == attribute.attribute_id) 
{
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1460:                            
selected_options.push(attribute.attribute_options);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1461:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1462:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1463:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1464:                html += '<div class="row" id="attr_' + $this.val() 
+ '">';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1465:                html += '<div class="col-md-3">';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1466:                html += '<label>' + $this.text() + '</label>';



TEXT_END

## FILE: resources\views\categories\create.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\categories\create.blade.php:62:                                            <div 
class="placeholder_img_thumb cat_image"></div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:63:                                            <div 
id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:64:                                            <div 
class="form-text text-muted w-50">{{ trans("lang.category_image_help")
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:65:                                                }}
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:66:                                            </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:67:                                        </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:68:                                    </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:69:                                    <div class="form-check 
width-100">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:70:                                        <input 
type="checkbox" class="item_publish" id="item_publish">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:71:                                        <label class="col-3 
control-label"
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:72:                                            
for="item_publish">{{trans('lang.item_publish')}}</label>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:73:                                    </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:74:                                    <div class="form-check 
row width-100" id="show_in_home" style="display: none;">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:75:                                        <input 
type="checkbox" id="show_in_homepage">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:76:                                        <label class="col-3 
control-label"
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:77:                                            
for="show_in_homepage">{{trans('lang.show_in_home')}}</label>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:78:                                        <div class="form-text 
text-muted w-50">{{trans('lang.show_in_home_desc')}}<span
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:79:                                                
id="forsection"></span></div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:80:                                    </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:81:                                </fieldset>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:82:                            </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:83:                            <div role="tabpanel" 
class="tab-pane" id="review_attributes">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:84:                            </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:85:                        </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:86:                    </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:87:                </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:88:                <div class="form-group col-12 text-center 
btm-btn">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:89:                    <button type="button" class="btn 
btn-primary save-setting-btn"><i class="fa fa-save"></i>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:90:                        {{trans('lang.save')}}
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:91:                    </button>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:92:                    <a href="{!! route('categories') !!}" 
class="btn btn-default"><i
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:93:                            class="fa 
fa-undo"></i>{{trans('lang.cancel')}}</a>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:94:                </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:95:            </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:96:        </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:97:    </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:98:</div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:99:@endsection
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:100:
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:101:@section('scripts')
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:102:
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:103:<script type="text/javascript">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:104:
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:105:    var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:106:    var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:107:    var ref = database.collection('vendor_categories');
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:108:    
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:109:    var ref_review_attributes = 
database.collection('review_attributes');
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:110:    var photo = "";
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:111:    var fileName = '';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:112:    var id_category = "<?php echo uniqid(); ?>";
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:113:    var category_length = 1;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:114:    var placeholderImage = '';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:115:    var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:116:    var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:117:    placeholder.get().then(async function (snapshotsimage) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:118:        var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:119:        placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:120:    })
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:121:    $(document).ready(function () {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:122:
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:123:        jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:124:
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:125:        
database.collection('sections').doc(section_id).get().then(async function (snapshot) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:126:            let sectionData = snapshot.data();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:127:            if (sectionData.serviceTypeFlag == 
"ecommerce-service" || sectionData.serviceTypeFlag == "delivery-service") {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:128:                $("#show_in_home").show();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:129:            }
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:130:        });
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:131:        
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:132:        ref.get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:133:            category_length = snapshots.size + 1;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:134:            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:135:        })
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:136:        
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:137:        ref_review_attributes.get().then(async function 
(snapshots) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:138:            var ra_html = '';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:139:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:140:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:141:                ra_html += '<div class="form-check 
width-100">';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:142:                ra_html += '<input type="checkbox" 
id="review_attribute_' + data.id + '" value="' + data.id + '">';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:143:                ra_html += '<label class="col-3 
control-label" for="review_attribute_' + data.id + '">' + data.title + '</label>';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:144:                ra_html += '</div>';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:145:            })
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:146:            $('#review_attributes').html(ra_html);
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:147:        })
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:148:
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:149:        $(".save-setting-btn").click(async function () {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:150:
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:151:            var title = $(".cat-name").val();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:152:            var description = 
$(".category_description").val();
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:153:            var itemPublish = 
$(".item_publish").is(":checked");
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:154:            var show_in_homepage = 
$("#show_in_homepage").is(":checked");
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:155:            
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:156:            var review_attributes = [];
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:157:            $('#review_attributes input').each(function () {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:158:                if ($(this).is(':checked')) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:159:                    review_attributes.push($(this).val());
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:160:                }
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:161:            });
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:162:
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:163:            if (title == '') {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:164:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:165:                $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:166:                
$(".error_top").append("<p>{{trans('lang.enter_cat_title_error')}}</p>");
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:167:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:168:            } else if (photo == '') {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:169:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:170:                $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:171:                
$(".error_top").append("<p>{{trans('lang.upload_image_error')}}</p>");
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:172:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:173:            } else {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:174:                var count_vendor_categories = 0;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:175:                if (show_in_homepage) {
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:176:                    await 
database.collection('vendor_categories').where('show_in_homepage', "==", true).where("section_id", "==", 
section_id).get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:177:                        count_vendor_categories = 
snapshots.docs.length;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:178:                    });
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:179:                }
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:180:                if (count_vendor_categories >= 5) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:181:                    
alert("{{trans('lang.max_category_alert')}}");
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:182:                    return false;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:183:                } else {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:184:                    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:185:                    storeImageData().then(IMG => {
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:186:                        
database.collection('vendor_categories').doc(id_category).set({
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:187:                            'id': id_category,
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:188:                            'title': title,
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:189:                            'description': description,
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:190:                            'photo': IMG,
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:191:                            'order': 
parseInt(category_length),
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:192:                            'section_id': section_id,
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:193:                            'review_attributes': 
review_attributes,
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:194:                            'publish': itemPublish,
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:195:                            'show_in_homepage': 
show_in_homepage
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:196:                        }).then(function (result) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:197:                            window.location.href = '{{ 
route("categories")}}';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:198:                        });
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:199:                    }).catch(function (error) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:200:                        
jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:201:                        $(".error_top").show();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:202:                        $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:203:                        $(".error_top").append("<p>" + error 
+ "</p>");
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:204:                    })
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:205:                }
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:206:            }
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:207:        });
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:208:    });
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:209:    function handleFileSelect(evt) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:210:        var f = evt.target.files[0];
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:211:        var reader = new FileReader();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:212:        reader.onload = (function (theFile) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:213:            return function (e) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:214:                var filePayload = e.target.result;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:215:                var hash = CryptoJS.SHA256(Math.random() + 
CryptoJS.SHA256(filePayload));
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:216:                var val = 
$('#category_image').val().toLowerCase();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:217:                var ext = val.split('.')[1];
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:218:                var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:219:                var filename = 
$('#category_image').val().replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:220:                var timestamp = Number(new Date());
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:221:                var filename = filename.split('.')[0] + "_" 
+ timestamp + '.' + ext;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:222:                var uploadTask = 
storageRef.child(filename).put(theFile);



TEXT_END

## FILE: resources\views\categories\edit.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:62:                                            <div 
class="placeholder_img_thumb cat_image"></div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:63:                                            <div 
id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:64:                                            <div 
class="form-text text-muted w-50">{{ trans("lang.category_image_help")
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:65:                                                }}
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:66:                                            </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:67:                                        </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:68:                                    </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:69:                                    <div class="form-check 
width-100">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:70:                                        <input type="checkbox" 
class="item_publish" id="item_publish">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:71:                                        <label class="col-3 
control-label"
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:72:                                            
for="item_publish">{{trans('lang.item_publish')}}</label>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:73:                                    </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:74:                                    <div class="form-check row 
width-100" id="show_in_home" style="display: none;">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:75:                                        <input type="checkbox" 
id="show_in_homepage">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:76:                                        <label class="col-3 
control-label"
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:77:                                            
for="show_in_homepage">{{trans('lang.show_in_home')}}</label>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:78:                                        <div class="form-text 
text-muted w-50">{{trans('lang.show_in_home_desc')}}
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:79:                                            <span 
id="forsection"></span>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:80:                                        </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:81:                                    </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:82:                                </fieldset>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:83:                            </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:84:                            <div role="tabpanel" 
class="tab-pane" id="review_attributes">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:85:                            </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:86:                        </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:87:                    </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:88:                </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:89:                <div class="form-group col-12 text-center 
btm-btn">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:90:                    <button type="button" class="btn 
btn-primary edit-setting-btn"><i class="fa fa-save"></i>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:91:                        {{trans('lang.save')}}
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:92:                    </button>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:93:                    <a href="{!! route('categories') !!}" 
class="btn btn-default"><i
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:94:                            class="fa 
fa-undo"></i>{{trans('lang.cancel')}}</a>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:95:                </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:96:            </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:97:        </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:98:    </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:99:</div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:100:@endsection
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:101:@section('scripts')
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:102:
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:103:<script type="text/javascript">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:104:
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:105:    var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:106:    var id = "<?php echo $id; ?>";
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:107:    var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:108:    
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:109:    var ref = 
database.collection('vendor_categories').where("id", "==", id);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:110:    var ref_review_attributes = 
database.collection('review_attributes');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:111:    var selected_review_attributes = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:112:    var category = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:113:    var photo = "";
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:114:    var fileName = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:115:    var catImageFile = "";
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:116:    var placeholderImage = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:117:    var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:118:    var storage = firebase.storage();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:119:    var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:120:    var order = 0;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:121:    let sectionData = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:122:
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:123:    placeholder.get().then(async function (snapshotsimage) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:124:        var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:125:        placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:126:    })
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:127:    $(document).ready(function () {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:128:
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:129:        jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:130:        
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:131:        
database.collection('sections').doc(section_id).get().then(async function (snapshot) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:132:            sectionData = snapshot.data();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:133:            if (sectionData.serviceTypeFlag == 
"ecommerce-service" || sectionData.serviceTypeFlag == "delivery-service") {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:134:                $("#show_in_home").show();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:135:            }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:136:        });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:137:
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:138:        ref.get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:139:            if(snapshots.docs.length>0){
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:140:                category = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:141:                $(".cat-name").val(category.title);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:142:                order = category.order;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:143:                
$(".category_description").val(category.description);
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:144:                if (category.section_id != undefined) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:145:                    $("#section_id").val(category.section_id);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:146:                }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:147:                photo = category.photo;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:148:                if (photo != '' && photo != null) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:149:                    catImageFile = category.photo;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:150:                    $(".cat_image").append('<img 
class="rounded" style="width:50px" src="' + photo + '" alt="image" onerror="this.onerror=null;this.src=\'' + placeholderImage + 
'\'">');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:151:                } else {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:152:                    $(".cat_image").append('<img 
class="rounded" style="width:50px" src="' + placeholderImage + '" alt="image">');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:153:                }
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:154:                if (category.publish) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:155:                    $(".item_publish").prop('checked', true);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:156:                }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:157:                if (category.show_in_homepage) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:158:                    $("#show_in_homepage").prop('checked', 
true);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:159:                }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:160:                $("#forsection").text(" for " + 
sectionData.name + " section");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:161:            }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:162:            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:163:        })
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:164:
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:165:        ref_review_attributes.get().then(async function 
(snapshots) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:166:            var ra_html = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:167:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:168:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:169:                ra_html += '<div class="form-check width-100" 
>';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:170:                var checked = $.inArray(data.id, 
category.review_attributes) !== -1 ? 'checked' : '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:171:                ra_html += '<input type="checkbox" 
id="review_attribute_' + data.id + '" value="' + data.id + '" ' + checked + '>';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:172:                ra_html += '<label class="col-3 control-label" 
for="review_attribute_' + data.id + '">' + data.title + '</label>';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:173:                ra_html += '</div>';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:174:            })
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:175:            $('#review_attributes').html(ra_html);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:176:        })
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:177:        
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:178:        $(".edit-setting-btn").click(async function () {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:179:            var title = $(".cat-name").val();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:180:            var description = $(".category_description").val();
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:181:            var itemPublish = 
$(".item_publish").is(":checked");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:182:            var show_in_homepage = 
$("#show_in_homepage").is(":checked");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:183:            var review_attributes = [];
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:184:            $('#review_attributes input').each(function () {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:185:                if ($(this).is(':checked')) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:186:                    review_attributes.push($(this).val());
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:187:                }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:188:            });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:189:            if (title == '') {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:190:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:191:                $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:192:                
$(".error_top").append("<p>{{trans('lang.enter_cat_title_error')}}</p>");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:193:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:194:            } else if (photo == '') {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:195:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:196:                $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:197:                
$(".error_top").append("<p>{{trans('lang.upload_image_error')}}</p>");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:198:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:199:            } else {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:200:                var count_vendor_categories = 0;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:201:                if (show_in_homepage) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:202:                    await 
database.collection('vendor_categories').where('show_in_homepage', "==", true).where("section_id", "==", section_id).where("id", 
"!=", id).get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:203:                        count_vendor_categories = 
snapshots.docs.length;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:204:                    });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:205:                }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:206:                if (count_vendor_categories >= 5) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:207:                    
alert("{{trans('lang.already_five_categories_are_active_for_show_in_homepage')}}");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:208:                    return false;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:209:                } else {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:210:                    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:211:                    storeImageData().then(IMG => {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:212:                        
database.collection('vendor_categories').doc(id).update({
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:213:                            'title': title,
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:214:                            'description': description,
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:215:                            'photo': IMG,
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:216:                            'review_attributes': 
review_attributes,
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:217:                            'publish': itemPublish,
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:218:                            'show_in_homepage': 
show_in_homepage,
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:219:                            'order': parseInt(order),
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:220:                        }).then(function (result) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:221:                            window.location.href = '{{ 
route("categories")}}';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:222:                        });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:223:                    }).catch(err => {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:224:                        
jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:225:                        $(".error_top").show();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:226:                        $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:227:                        $(".error_top").append("<p>" + err + 
"</p>");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:228:                        window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:229:                    });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:230:                }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:231:            }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:232:        });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:233:    });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:234:    function handleFileSelect(evt) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:235:        var f = evt.target.files[0];
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:236:        var reader = new FileReader();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:237:        reader.onload = (function (theFile) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:238:            return function (e) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:239:                var filePayload = e.target.result;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:240:                var hash = CryptoJS.SHA256(Math.random() + 
CryptoJS.SHA256(filePayload));
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:241:                var val = 
$('#category_image').val().toLowerCase();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:242:                var ext = val.split('.')[1];
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:243:                var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:244:                var filename = 
$('#category_image').val().replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:245:                var timestamp = Number(new Date());



TEXT_END

## Patch Target Decision
TEXT_START
TARGET_1_VENDOR_CREATE: resources/views/vendors/create.blade.php
TARGET_2_VENDOR_EDIT: resources/views/vendors/edit.blade.php
TARGET_3_PRODUCT_CREATE_EDIT: resources/views/items/create.blade.php and edit.blade.php
TARGET_4_CATEGORY_CREATE_EDIT: resources/views/categories/create.blade.php and edit.blade.php
TEXT_END

STATUS: SERVICE_48D_ADMIN_VENDOR_WRITE_BLOCK_EXTRACTED