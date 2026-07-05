# SERVICE 48C-FIX1 ADMIN WRITE PATH FINDER LITE

Generated: 07/02/2026 12:19:22
Mode: READ ONLY.
Admin Web path: C:\deploy\adminpanel

Purpose: find exact Admin Web files that create/update vendors, vendor_products, vendor_categories, sections, orders.


## DIR: resources\views\vendors
TEXT_START
FILE_COUNT: 6

### CANDIDATE_FILE: resources\views\vendors\chat.blade.php
SCORE: 17
TAGS: firebase.firestore,.collection,.set,.add,.update,createdAt
MATCHES:

  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:53:                </div>
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:54:                 <div class="form-group col-12 text-center 
btm-btn">
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:55:                    <a href="{!! route('users.support') !!}" 
class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:56:                </div>
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:57:            </div>
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:58:        </div>
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:59:    </div>
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:60:@endsection
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:61:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:62:@section('scripts')
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:63:    <script 
src="https://cdnjs.cloudflare.com/ajax/libs/printThis/1.15.0/printThis.js"></script>
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:66:        var senderId = "admin";
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:67:        var receiverId = '';
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:68:        var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:69:        var defaultUser = "{{ asset('images/default_user.png') }}"
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:70:        var vendorFcm = '';
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:71:        let lastMessageDate = null;
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:72:
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:73:        database.collection('users').doc(id).get().then(async 
function(userSnapshot) {
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:74:            if (userSnapshot.exists) {
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:75:                var userData = userSnapshot.data();
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:76:                if (userData.profilePic != null && 
userData.profilePic != '') {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:77:                    $('#userProfile').html('<img src="' + 
userData.profilePic + '" style="max-width: 50px;">')
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:78:                } else {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:79:                    $('#userProfile').html('<img src="' + 
defaultUser + '" style="max-width: 50px;">')
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:80:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:81:                }
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:82:                if (userData.hasOwnProperty('fcmToken') && 
userData.fcmToken != null && userData.fcmToken != '') {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:83:                    vendorFcm = userData.fcmToken;
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:88:        })
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:89:
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:90:        var threadRef = 
database.collection('chat').doc(id).collection("thread").orderBy("createdAt");  
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:91:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:92:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:93:        threadRef.onSnapshot(snapshot => {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:94:            const chatBox = document.querySelector("#chat-box ul");
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:95:            chatBox.innerHTML = '';
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:96:            lastMessageDate = null; 
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:97:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:98:            snapshot.forEach(doc => {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:99:                const data = doc.data();
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:100:                if (data.senderId !== "admin" && !data.seen) {
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:101:                    doc.ref.update({ seen: true });
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:102:                }
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:103:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:104:                const isAdmin = data.senderId === "admin";
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:105:                let messageContent = "";
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:106:                
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:107:                if (data.messageType === "text") {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:108:                    messageContent = data.message;
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:109:                } else if (data.messageType === "image" && 
data.url?.url) {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:122:                let currentDateStr = "";
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:123:
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:124:                if (data.createdAt?.toDate) {
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:125:                    const dateObj = data.createdAt.toDate();
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:126:                    
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:127:                    const day = 
String(dateObj.getDate()).padStart(2, "0");
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:128:                    const month = dateObj.toLocaleString("en-US", 
{ month: "short" });
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:129:                    const year = dateObj.getFullYear();
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:130:                    currentDateStr = `${day} ${month} ${year}`;
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:131:                    
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:132:                    let hours = dateObj.getHours();
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:133:                    const minutes = 
String(dateObj.getMinutes()).padStart(2, "0");
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:174:            if (!message) return;
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:175:
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:176:            
database.collection("chat").doc(id).collection("thread").add({
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:177:                id: database.collection("tmp").doc().id,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:178:                message: message,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:179:                senderId: senderId,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:180:                receiverId: receiverId,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:181:                messageType: "text",
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:182:                url: null,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:183:                videoThumbnail: "",
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:184:                seen: false,
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:185:                createdAt: 
firebase.firestore.FieldValue.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:186:            });
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:187:
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:188:            const chatDocRef = 
database.collection("chat").doc(id);
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:189:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:190:            chatDocRef.get().then(async (doc) => {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:191:                const dataToSet = {                   
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:192:                    lastMessage: message,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:193:                    lastSenderId: "admin",
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:194:                    receiverId: receiverId,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:195:                    senderId: "admin",
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:196:                    lastMessageType : "text",
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:197:                    createdAt: 
firebase.firestore.FieldValue.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:198:                    sender_receiver_id: ["admin", receiverId] 
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:199:                };
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:200:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:201:                if (!doc.exists) {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:202:
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:203:                    const userDoc = await 
database.collection('users').doc(id).get();
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:204:                    const userData = userDoc.data();
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:205:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:206:                    Object.assign(dataToSet, {                    
    
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:207:                        'receiverId': id,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:208:                        'senderId': "admin",                      
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:209:                        'lastSenderId' : "admin",
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:210:                        'createdAt': 
firebase.firestore.FieldValue.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:211:                        'lastMessage': message,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:212:                        'chatType' : "vendor",
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:213:                        'type': "adminchat",
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:214:                        'lastMessageType' : "text",
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:215:                        sender_receiver_id: ["admin", id] 
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:216:                    });
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:217:                }
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:218:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:219:                // Create or merge fields
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:220:                chatDocRef.set(dataToSet, {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:221:                    merge: true
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:222:                }).then(async () => {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:223:                    var title = '{{ 
trans('lang.new_message_from_admin') }}';
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:224:                    var body = '{{ 
trans('lang.you_have_received_new_message_from_admin') }}';
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:225:                    var fcmtoken = vendorFcm;
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:226:                    var data = {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:227:                        'type': 'admin_chat',
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:228:                        'vendorId': receiverId
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:229:                    }
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:230:                    var sent = await sendNotification(fcmtoken, 
title, body, data);
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:231:                    if (sent) {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:232:                        console.log('notification sent');
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:233:                    }
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:234:                });
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:235:            });
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:236:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:256:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:257:                    const senderId = "admin";
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:258:                    const messageId = 
database.collection("tmp").doc().id;
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:259:                    var conversationMessage = '';
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:260:                    if (mimeType.includes("image")) {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:261:                        conversationMessage = "sent an image";
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:262:                    } else if (mimeType.includes("video")) {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:263:                        conversationMessage = "sent a video";
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:264:                    } else if (mimeType.includes("audio")) {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:265:                        conversationMessage = "sent a voice 
message";
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:266:                    }  
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:270:                        senderId: senderId,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:271:                        receiverId: receiverId,
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:272:                        createdAt: 
firebase.firestore.FieldValue.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:273:                        id: messageId,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:274:                        seen: false,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:275:                        url: {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:276:                            mime: mimeType,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:277:                            url: downloadURL
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:278:                        }
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:279:                    };
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:280:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:288:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:289:                    // Save message
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:290:                    await 
database.collection("chat").doc(id).collection("thread").add(messageData);
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:291:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:292:                    // Handle chat doc creation or update
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:293:                    const chatDocRef = 
database.collection("chat").doc(id);
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:294:                    const doc = await chatDocRef.get();
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:295:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:296:                    const dataToSet = {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:297:                        lastMessage: conversationMessage,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:298:                        lastSenderId: "admin",
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:299:                        createdAt: 
firebase.firestore.FieldValue.serverTimestamp(),                      
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:300:                        receiverId: receiverId,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:301:                        senderId: "admin",
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:302:                        lastMessageType : messageType,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:303:                        sender_receiver_id: ["admin", receiverId] 
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:304:                    };
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:305:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:306:                    if (!doc.exists) {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:307:                        try {
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:308:                            const userDoc = await 
database.collection("users").doc(id).get();
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:309:                            const userData = userDoc.data();
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:310:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:311:                            if (userData) {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:312:                                Object.assign(dataToSet, {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:313:                                    'receiverId': id,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:314:                                    'senderId': "admin",          
            
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:315:                                    'lastSenderId' : "admin",
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:316:                                    'createdAt': 
firebase.firestore.FieldValue.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:317:                                    'lastMessage': 
conversationMessage,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:318:                                    'chatType' : "vendor",
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:319:                                    'type': "adminchat",
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:320:                                    'lastMessageType' : 
messageType,
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:321:                                    sender_receiver_id: ["admin", 
id] 
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:322:                                });
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:323:                            } else {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:324:                                console.warn("data not found for 
id:", userData.id);
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:330:                    }
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:331:
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:332:                    await chatDocRef.set(dataToSet, {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:333:                        merge: true
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:334:                    }).then(async () => {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:335:                        var title = '{{ 
trans('lang.new_message_from_admin') }}';
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:336:                        var body = '{{ 
trans('lang.you_have_received_new_message_from_admin') }}';
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:337:                        var fcmtoken = vendorFcm;
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:338:                        var data = {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:339:                            'type': 'admin_chat',
> C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:340:                            'vendorId': receiverId
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:341:                        }
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:342:                        var sent = await 
sendNotification(fcmtoken, title, body, data);
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:343:                        if (sent) {
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:344:                            console.log('notification sent');
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:345:                        }
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:346:
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:347:                    });
  C:\deploy\adminpanel\resources\views\vendors\chat.blade.php:348:                    jQuery("#overlay").hide();




### CANDIDATE_FILE: resources\views\vendors\create.blade.php
SCORE: 14
TAGS: vendors,firebase.firestore,.collection,.set,createdAt
MATCHES:

  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:23:            <ol class="breadcrumb">
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:24:                <li class="breadcrumb-item"><a href="{{ 
route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:25:                <li class="breadcrumb-item"><a href="{!! 
route('vendors') !!}">{{trans('lang.vendors')}}</a>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:26:                </li>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:27:                <li class="breadcrumb-item 
active">{{trans('lang.createe_vendor')}}</li>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:28:            </ol>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:29:        </div>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:30:        </div>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:31:        
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:32:            <div class="card-body">
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:33:                <div class="error_top"></div>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:140:                        <fieldset>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:141:                            
<legend>{{trans('lang.bankdetails')}}</legend>
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:142:                            <div class="form-group row 
width-100" style="display: none;" id="companyDriverShowDiv">
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:143:                                <div class="col-12">
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:144:                                    <h6><a href="#">{{ 
trans("lang.driver_add_by_company_info") }}</a>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:145:                                    </h6>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:146:                                </div>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:147:                            </div>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:148:                            <div class="form-group row" 
id="companyDriverHideDiv">
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:149:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:150:                                <div class="form-group row 
width-100">
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:197:                {{trans('lang.save')}}
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:198:            </button>
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:199:            <a href="{!! route('vendors') !!}" class="btn 
btn-default"><i class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:200:        </div>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:201:    
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:202:</div>
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:203:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:204:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:205:@endsection
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:206:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:207:@section('scripts')
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:208:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:209:<script type="text/javascript">
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:210:    var database = firebase.firestore();
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
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:220:    var vendor_id = database.collection("tmp").doc().id;
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:221:    var 
email_templates=database.collection('email_templates').where('type','==','new_vendor_signup');
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:222:    var emailTemplatesData=null;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:223:    var adminEmail='';
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:224:    var 
emailSetting=database.collection('settings').doc('emailSetting');
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:225:    let businessModelData = '';
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:226:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:227:    let isAutoVerify = false;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:228:    $(document).ready(async function() {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:229:
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:230:        let businessModelRef = await 
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
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:244:        let documentVerify = await 
database.collection('settings').doc('document_verification_settings').get();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:245:        let documentSettings = documentVerify.data();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:246:        if(documentSettings.isStoreVerification === false){
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:247:            isAutoVerify = true;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:248:        }
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:249:        
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:250:        jQuery("#country_selector").select2({
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:251:            templateResult: formatState,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:252:            templateSelection: formatState2,
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:256:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:257:        // --- ADD THIS BLOCK TO SET DEFAULT COUNTRY CODE ---
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:258:        var globalSettingsRef = 
database.collection('settings').doc('globalSettings');
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:259:        globalSettingsRef.get().then(async function (snapshot) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:260:            var globalSettings = snapshot.data();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:261:            if (globalSettings && 
globalSettings.defaultCountryCode) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:262:                var defaultPhoneCode = 
globalSettings.defaultCountryCode.replace('+', '').trim();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:263:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:264:                // Find the option with matching phoneCode
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:265:                var $option = $("#country_selector 
option").filter(function() {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:266:                    return $(this).val() === defaultPhoneCode;
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
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:403:                                window.location.href = '{{ 
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
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:543:    async function getSubscriptionDetails(subscriptionId) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:544:        var data='';
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:545:        await 
database.collection('subscription_plans').where('id','==',subscriptionId).get().then(async function(
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:546:            snapshot) {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:547:            data=snapshot.docs[0].data();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:548:            var currentDate=new Date();
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:549:            if(data.expiryDay!='-1') {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:550:                
currentDate.setDate(currentDate.getDate()+parseInt(data.expiryDay));
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:551:                
data.expiryDate=firebase.firestore.Timestamp.fromDate(currentDate);
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:552:            } else {
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:553:                data.expiryDate=null;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:554:            }
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:555:
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:556:        })
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:557:        return data;
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:558:    }
  C:\deploy\adminpanel\resources\views\vendors\create.blade.php:559:    async function addSubscriptionHistory(historyData) {
> C:\deploy\adminpanel\resources\views\vendors\create.blade.php:560:        var id_order=database.collection('tmp').doc().id;
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




### CANDIDATE_FILE: resources\views\vendors\document_list.blade.php
SCORE: 13
TAGS: vendors,firebase.firestore,.collection,.update
MATCHES:

  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:9:                <ol class="breadcrumb">
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:10:                    <li class="breadcrumb-item"><a 
href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:11:                    <li class="breadcrumb-item"><a 
href="{!! route('vendors') !!}">{{trans('lang.vendor_list')}}</a></li>
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:12:                    <li class="breadcrumb-item 
active">{{trans('lang.vendor_document_details')}}</li>
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:13:                </ol>
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:14:            </div>
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:15:        </div>
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:16:        <div class="container-fluid">
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:17:            <div class="row">
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:18:                <div class="col-12">
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:19:                    <div class="card">
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:68:<script>
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:69:    var id = "<?php echo $id;?>";
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:70:    var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:71:    var allDriver = 
database.collection('users').where('role','==','vendor');
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:72:    var ref = database.collection('users').where("id", 
"==", id);
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:73:    var docsRef = 
database.collection('documents').where('enable', '==', true).where('type','==','vendor');
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:74:    var docref = 
database.collection('documents_verify').doc(id);
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:75:    var back_photo = '';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:76:    var front_photo = '';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:77:    var backFileName = '';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:78:    var frontFileName = '';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:79:    var backFileOld = '';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:80:    var frontFileOld = '';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:81:    var fcmToken = "";
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:82:    $(document).ready(async function () {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:113:                documents.forEach((ele) => {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:114:                    var doc = ele.data();
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:115:                    var docRefs = 
database.collection('documents_verify').doc(id);
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:116:                    docRefs.get().then(async function 
(docrefSnapshot) {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:117:                        var docRef = 
docrefSnapshot.data() && docrefSnapshot.data().documents ? docrefSnapshot.data().documents.filter(docId => docId.documentId == 
doc.id)[0] : [];
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:118:                        var trhtml = '';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:119:                        trhtml += '<tr>';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:120:                        if (docRef && 
docRef.hasOwnProperty('backImage') && docRef.hasOwnProperty('frontImage') ) {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:121:                            if (docRef.backImage != '' 
&& docRef.frontImage != '' && docRef.backImage!=null && docRef.frontImage != null  && doc.backSide && doc.frontSide  ) {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:122:                                                         
   trhtml += '<td>' + doc.title + '&nbsp;&nbsp;<a href="#" class="badge badge-info" data-toggle="modal" data-target="#exampleModal" 
data-image="' + docRef.frontImage + '" data-id="front" class="open-image">{{trans('lang.view_front_image')}}</a>&nbsp;<a href="#" 
class="badge badge-info" data-toggle="modal" data-target="#exampleModal"  data-image="' + docRef.backImage + '" data-id="back" 
class="open-image">{{trans('lang.view_back_image')}}</a></td>';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:123:                            } else if (docRef.backImage 
!= '' && docRef.backImage != null  && doc.backSide) {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:145:                        trhtml += '<td 
class="action-btn">';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:146:
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:147:                        var ownerDocumentUploadUrl = "{{ 
route('vendors.document.upload', ['ownerId' => ':ownerId', 'id' => ':id']) }}";
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:148:                         ownerDocumentUploadUrl = 
ownerDocumentUploadUrl.replace(':ownerId', id.trim()).replace(':id', doc.id.trim());
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:149:
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:150:                        trhtml += '<a href="' + 
ownerDocumentUploadUrl + '" data-id="' + doc.id + '"><i class="mdi mdi-lead-pencil" title="{{trans('lang.edit')}}"></i></a>&nbsp;';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:151:                        if (status !== 'pending') {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:152:                            if (status == "rejected") {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:153:                                trhtml += '&nbsp;<a 
href="javascript:void(0);" class="btn btn-sm btn-success direct-click-btn verify-doc" id="approve-doc" data-title="' + doc.title + 
'"  data-id="' + doc.id + '">{{trans('lang.approve')}}</a>';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:154:                            } else if (status == 
"approved") {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:155:                                trhtml += '&nbsp;<a 
href="javascript:void(0);" class="btn btn-sm btn-danger direct-click-btn verify-doc" id="disapprove-doc" data-title="' + doc.title 
+ '"  data-id="' + doc.id + '">{{trans('lang.reject')}}</a>';
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:186:        var docId = $(this).attr('data-id');
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:187:        var docTitle = $(this).attr('data-title');
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:188:        var docRefsTmp = 
database.collection('documents_verify').doc(id);
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:189:        docRefsTmp.get().then(async function 
(docrefSnapshot) {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:190:            var keydataId = docrefSnapshot.data() && 
docrefSnapshot.data().documents ? docrefSnapshot.data().documents.findIndex((doc) => doc.documentId == docId) : 0;
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:191:            
database.collection('documents_verify').doc(id)
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:192:                .get().then((doc) => {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:193:                var objects = doc.data().documents;
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:194:                var objectToupdate = objects[keydataId];
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:195:                objectToupdate.status = status;
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:196:                objects[keydataId] = objectToupdate;
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:197:                
database.collection('documents_verify').doc(id).update({
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:198:                    documents: objects
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:199:                }).then(async function () {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:200:                    var enableDocIds = await getDocId();
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:201:                    await ref.get().then( async 
function(snapshotsVendor){
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:202:                        if (snapshotsVendor.docs.length 
> 0) {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:203:                            var verification = await 
vendorDocVerification(enableDocIds, snapshotsVendor);
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:204:                            if(verification){
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:205:                                if (status == 
"rejected") {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:280:    async function getDocId(){
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:281:        var enableDocIds = [];
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:282:        await 
database.collection('documents').where('enable', "==", true).where('type', '==', 'vendor').get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:283:            await snapshots.forEach((doc) => {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:284:                enableDocIds.push(doc.data().id);
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:285:            });
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:286:        });
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:287:        return enableDocIds;
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:288:    }
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:289:    async function vendorDocVerification(enableDocIds, 
snapshotsVendor){
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:290:        var isCompleted = false;
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:291:        await Promise.all(snapshotsVendor.docs.map(async 
(vendor) => {
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:292:            await 
database.collection('documents_verify').doc(vendor.id).get().then( async function(docrefSnapshot){
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:293:                if(docrefSnapshot.data() && 
docrefSnapshot.data().documents.length > 0){
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:294:                    var vendorDocId = await 
docrefSnapshot.data().documents.filter((doc) => doc.status == 'approved').map((docData) => docData.documentId);
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:295:                    if(vendorDocId.length >= 
enableDocIds.length){
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:296:                        await 
database.collection('users').doc(vendor.id).update({'isDocumentVerify': true, isActive: true });
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:297:                    }else{
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:298:                        await 
enableDocIds.forEach(async(docId) => {
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:299:                            
if(!vendorDocId.includes(docId)){
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:300:                                await 
database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:301:                            }
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:302:                        });
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:303:                    }
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:304:                }else{
> C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:305:                    await 
database.collection('users').doc(vendor.id).update({'isDocumentVerify': false, isActive: false });
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:306:                }
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:307:            });
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:308:            isCompleted = true;
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:309:        }));
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:310:        return isCompleted;
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:311:    }
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:312:</script>
  C:\deploy\adminpanel\resources\views\vendors\document_list.blade.php:313:@endsection




### CANDIDATE_FILE: resources\views\vendors\document_upload.blade.php
SCORE: 16
TAGS: vendors,firebase.firestore,.collection,.set,.update
MATCHES:

  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:9:            <ol class="breadcrumb">
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:10:                <li class="breadcrumb-item"><a href="{{ 
route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:11:                <li class="breadcrumb-item"><a 
href="{!! route('vendors') !!}">{{trans('lang.vendor_list')}}</a>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:12:                </li>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:13:                <li class="breadcrumb-item 
active">{{trans('lang.upload_document')}}</li>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:14:            </ol>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:15:        </div>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:16:    </div>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:17:    <div class="container-fluid">
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:18:        <div class="card  pb-4">
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:19:            <div class="card-body">
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:25:                <div class="form-group col-12 
text-center btm-btn">
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:26:                    <button type="button" class="btn 
btn-primary save-form-btn"><i class="fa fa-save"></i> {{ trans('lang.save')}} </button>
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:27:                    <a href="{{ 
route('vendors.document', $ownerId) }}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel')}}</a> </div>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:28:            </div>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:29:        </div>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:30:    </div>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:31:    @endsection
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:32:    @section('scripts')
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:33:    <script>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:34:        var docId = "{{$id}}";
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:35:        var id = "{{$ownerId}}";
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:36:        var allVendor = 
database.collection('users').where('role', '==', 'vendor');
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:37:        var driverRef= 
database.collection('users').where('id','==',id);
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:38:        var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:39:        var storageRef = 
firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:40:        var storage = firebase.storage();
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:41:        var docref = 
database.collection('documents_verify').doc(id);
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:42:        var requestUrl = 
"{{request()->is('vendors/document-list/*')}}";
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:43:        var back_photo = '';
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:44:        var front_photo = '';
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:45:        var backFileName = '';
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:46:        var frontFileName = '';
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:47:        var backFileOld = '';
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:48:        var frontFileOld = '';
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:49:        var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:50:        var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:51:        placeholder.get().then(async function 
(snapshotsimage) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:52:            var placeholderImageData = 
snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:53:            placeholderImage = 
placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:54:        })
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:55:        $(document).ready(function () {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:56:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:57:            var html = '';
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:58:            var docRef = 
database.collection('documents').doc(docId.trim());
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:59:            var vendorDocRef = 
database.collection('documents_verify').doc(id);
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:60:            docRef.get().then(async function (Snapshot) 
{
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:61:                var docRef = Snapshot.data();
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:62:                vendorDocRef.get().then(async function 
(docrefSnapshot) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:63:                    var vendorDocRef = 
docrefSnapshot.data() && docrefSnapshot.data().documents ? docrefSnapshot.data().documents.filter((doc) => doc.documentId.trim() == 
docId.trim())[0] : [];
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:64:                    var keydata = docrefSnapshot.data() 
&& docrefSnapshot.data().documents ? docrefSnapshot.data().documents.findIndex((doc) => doc.documentId.trim() == docId.trim()) : '';
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:65:                    if (docRef.enable) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:66:                        html += '<fieldset><legend>' + 
docRef.title + '</legend>';
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:67:                        if (docRef.backSide) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:208:            var backSide = $("#backSide").val();
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:209:            var frontSide = $("#frontSide").val();
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:210:             var document_list_view = "{{ 
route('vendors.document', ':id') }}";
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:211:                document_list_view = 
document_list_view.replace(':id', id);
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:212:
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:213:            if (backSide && back_photo == "") {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:214:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:215:                $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:216:                
$(".error_top").append("<p>{{trans('lang.document_back_side_help')}}</p>");
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:217:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:218:            } else if (frontSide && front_photo == "") 
{
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:225:                storeImageData().then(IMG => {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:226:                    if (isAdd == "true") {
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:227:                        
database.collection('documents_verify').doc(id).set({
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:228:                            id: id,
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:229:                            type: type,
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:230:                            documents: 
firebase.firestore.FieldValue.arrayUnion({
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:231:                                backImage: 
IMG.back_img ? IMG.back_img : '',
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:232:                                documentId: 
docId.trim(),
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:233:                                frontImage: 
IMG.front_img ? IMG.front_img : '',
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:234:                                status: status,
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:235:                            })
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:236:                        }, { merge: true }).then(async 
function (result) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:237:                            var enableDocIds = await 
getDocId();
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:238:                            await 
driverRef.get().then(async function (snapshotsvendor) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:260:                        });
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:261:                    } else {
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:262:                        
database.collection('documents_verify').doc(id)
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:263:                            .get().then((doc) => {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:264:                                var objects = 
doc.data().documents;
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:265:                                var objectToupdate = 
objects[keydata];
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:266:                                
objectToupdate.backImage = IMG.back_img ? IMG.back_img : '';
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:267:                                
objectToupdate.documentId = docId.trim();
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:268:                                
objectToupdate.frontImage = IMG.front_img ? IMG.front_img : '';
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:269:                                objectToupdate.status 
= status;
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:270:                                objects[keydata] = 
objectToupdate;
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:271:                                
database.collection('documents_verify').doc(id).update({
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:272:                                    documents: objects
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:273:                                }).then(async function 
() {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:274:                                    var enableDocIds = 
await getDocId();
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:275:                                    await 
driverRef.get().then(async function (snapshotsvendor) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:276:                                        if 
(snapshotsvendor.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:277:                                            var 
verification = await vendorDocVerification(enableDocIds, snapshotsvendor);
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:278:                                            if 
(verification) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:279:                                                
jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:322:        async function getDocId() {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:323:            var enableDocIds = [];
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:324:            await 
database.collection('documents').where('type', '==', 'vendor').where('enable', "==", true).get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:325:                await snapshots.forEach((doc) => {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:326:                    enableDocIds.push(doc.data().id);
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:327:                });
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:328:            });
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:329:            return enableDocIds;
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:330:        }
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:331:        async function 
vendorDocVerification(enableDocIds, snapshotsvendor) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:332:            var isCompleted = false;
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:333:            await 
Promise.all(snapshotsvendor.docs.map(async (vendor) => {
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:334:                await 
database.collection('documents_verify').doc(vendor.id).get().then(async function (docrefSnapshot) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:335:                    if (docrefSnapshot.data() && 
docrefSnapshot.data().documents.length > 0) {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:336:                        var vendorDocId = await 
docrefSnapshot.data().documents.filter((doc) => doc.status == 'approved').map((docData) => docData.documentId);
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:337:                        if (vendorDocId.length >= 
enableDocIds.length) {
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:338:                            await 
database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': true, isActive:true });
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:339:                        } else {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:340:                            await 
enableDocIds.forEach(async (docId) => {
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:341:                                if 
(!vendorDocId.includes(docId)) {
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:342:                                    await 
database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:343:                                }
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:344:                            });
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:345:                        }
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:346:                    } else {
> C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:347:                        await 
database.collection('users').doc(vendor.id).update({ 'isDocumentVerify': false, isActive: false });
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:348:                    }
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:349:                });
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:350:                isCompleted = true;
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:351:            }));
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:352:            return isCompleted;
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:353:        }
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:354:    </script>
  C:\deploy\adminpanel\resources\views\vendors\document_upload.blade.php:355:    @endsection




### CANDIDATE_FILE: resources\views\vendors\edit.blade.php
SCORE: 14
TAGS: vendors,firebase.firestore,.collection,.update,createdAt
MATCHES:

  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:23:            <ol class="breadcrumb">
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:24:                <li class="breadcrumb-item"><a href="{{ 
route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:25:                <li class="breadcrumb-item"><a href="{!! 
route('vendors') !!}">{{trans('lang.vendors')}}</a>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:26:                </li>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:27:                <li class="breadcrumb-item 
active">{{trans('lang.edit_vendor')}}</li>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:28:            </ol>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:29:        </div>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:30:    </div>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:31:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:32:    <div class="container-fluid">
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:33:        <div class="row">
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:38:                        <ul>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:39:                            <li class="active vendorRouteLi" 
style="display:none;">
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:40:                                <a href="{{ route('vendors.edit', 
$id) }}"> <i class="ti-user"></i> {{ trans('lang.profile') }}</a>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:41:                            </li>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:42:                            <li class="vendorRouteLi" 
style="display:none;">
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:43:                                <a class="vendorRoute"> <i 
class="ri-shopping-bag-2-fill"></i> {{ trans('lang.vendor') }}</a>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:44:                            </li>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:45:                        </ul>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:46:                    </div>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:47:                    <div class="error_top"></div>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:48:                    <div class="row vendor_payout_create">
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:211:                {{trans('lang.save')}}
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:212:            </button>
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:213:            <a href="{!! route('vendors') !!}" class="btn 
btn-default"><i class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:214:        </div>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:215:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:216:    </div>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:217:</div>
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:218:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:219:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:220:@endsection
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:221:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:229:    var store_id = null;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:230:    var subscriptionPlanId = '';
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:231:    database.collection('users').where("id", "==", 
id).get().then(function(snapshot) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:232:        if (!snapshot.empty) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:233:            snapshot.forEach(function(doc) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:234:                var data = doc.data(); 
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:235:                if (data.hasOwnProperty('subscriptionPlanId') && 
data.subscriptionPlanId != null && data.subscriptionPlanId != '') {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:236:                    subscriptionPlanId = data.subscriptionPlanId;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:237:                    $(".change_expiry_date_div").show(); 
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:238:                } else {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:239:                   
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
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:250:    var database = firebase.firestore();  
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:251:    var ref = database.collection('users').where("id", "==", id); 
 
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:252:    var photo = "";
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:253:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:254:    var vendorOwnerId = "";
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:255:    var vendorOwnerOnline = false;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:256:    var photocount = 0;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:257:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:258:    var ownerPhoto = '';
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:259:    var ownerFileName = '';
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:264:    
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:265:    var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:266:    var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:267:    var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:268:    var storage = firebase.storage();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:269:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:270:    placeholder.get().then(async function (snapshotsimage) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:271:        var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:272:        placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:273:    })
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:274:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:302:                    $('#change_expiry_date').val(formattedDate);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:303:                }
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:304:                await database.collection('users').where("id", 
"==",id).get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:305:                    snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:306:                        var user = listval.data();
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:307:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:308:                        ownerId = user.id;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:309:                        ownerPhoto = user.profilePictureURL
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:310:                        $(".user_first_name").val(user.firstName);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:311:                        $(".user_last_name").val(user.lastName);
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:312:                        
$(".user_email").val(shortEmail(user.email)).prop('disabled',true);
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
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:383:         
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:384:            if (change_expiry_date != '' && change_expiry_date != 
null) {
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:385:                var subscriptionPlanExpiryDate = 
firebase.firestore.Timestamp.fromDate(new Date(
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:386:                    change_expiry_date));
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:387:            } else {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:388:                var subscriptionPlanExpiryDate=null;
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:389:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:390:            }
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:391:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:392:
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:393:            if (userFirstName == '') {
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
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:482:        try {
  C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:483:
> C:\deploy\adminpanel\resources\views\vendors\edit.blade.php:484:            const userRef = 
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




### CANDIDATE_FILE: resources\views\vendors\index.blade.php
SCORE: 18
TAGS: vendors,vendor_products,firebase.firestore,.collection,.update,createdAt
MATCHES:

  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:7:        <div class="col-md-5 align-self-center">
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:8:            <h3 class="text-themecolor">
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:9:                @if (request()->is('vendors/approved'))
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:10:                    @php $type = 'approved'; @endphp
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:11:                    {{ trans('lang.approved_vendors') }}
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:12:                @elseif(request()->is('vendors/pending'))
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:13:                    @php $type = 'pending'; @endphp
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:14:                    {{ trans('lang.approval_pending_vendors') }}
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:15:                @else
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:16:                    @php $type = 'all'; @endphp
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:17:                    {{ trans('lang.all_vendors') }}
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:18:                @endif
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:19:            </h3>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:20:        </div>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:21:        <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:22:            <ol class="breadcrumb">
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:23:                <li class="breadcrumb-item"><a href="{{ 
route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:24:                <li class="breadcrumb-item 
active">{{trans('lang.vendor_list')}}</li>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:25:            </ol>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:69:                    <div class="card-header-right d-flex 
align-items-center">
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:70:                        <div class="card-header-btn mr-3">        
           
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:71:                            <a class="btn-primary btn 
rounded-full" href="{!! route('vendors.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.createe_vendor')}}</a>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:72:                        </div>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:73:                    </div>     
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:74:                                  
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:75:                 </div>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:76:                 <div class="card-body">
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:77:                         <div class="table-responsive m-t-10">
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:78:                            <table id="userTable"
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:79:                                   class="display nowrap table 
table-hover table-striped table-bordered table table-striped"
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:82:                                <tr>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:83:                                    
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:84:                                    <?php if (($type == 
"approved" && in_array('approve.vendors.delete', json_decode(@session('user_permissions'), true))) 
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:85:                                    || ($type == "pending" && 
in_array('pending.vendors.delete', json_decode(@session('user_permissions'), true))) 
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:86:                                    || ($type == "all" && 
in_array('vendors.delete', json_decode(@session('user_permissions'), true)))) { ?>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:87:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:88:                                    <th class="delete-all"><input 
type="checkbox" id="is_active"><label class="col-3 control-label" for="is_active"><a id="deleteAll"
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:89:                                    class="do_not_delete" 
href="javascript:void(0)"><i class="mdi mdi-delete"></i> {{trans('lang.all')}}</a></label></th>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:90:                                    <?php } ?>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:91:                                    
<th>{{trans('lang.vendor_info')}}</th>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:92:                                    
<th>{{trans('lang.store')}}</th>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:93:                                    
<th>{{trans('lang.contact_info')}}</th>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:94:                                    
<th>{{trans('lang.current_plan')}}</th>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:96:                                    
<th>{{trans('lang.date')}}</th>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:97:                                    
<th>{{trans('lang.active')}}</th>
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:98:                                    <?php if (($type == 
"approved" && in_array('approve.vendors.delete', json_decode(@session('user_permissions'), true))) 
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:99:                                    || ($type == "pending" && 
in_array('pending.vendors.delete', json_decode(@session('user_permissions'), true))) 
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:100:                                    || ($type == "all" && 
in_array('vendors.delete', json_decode(@session('user_permissions'), true)))) { ?>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:101:                                        
<th>{{trans('lang.actions')}}</th>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:102:                                    <?php }?>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:103:                                </tr>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:104:                                </thead>  
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:105:                                <tbody id="append_list1">
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:106:                                </tbody>                         
    
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:107:                            </table>
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:108:                        </div>
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
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:134:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:135:    if (
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:136:        (type == 'pending' && 
$.inArray('pending.vendors.delete', user_permissions) >= 0) ||
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:137:        (type == 'approved' && 
$.inArray('approve.vendors.delete', user_permissions) >= 0) ||
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:138:        (type == 'all' && $.inArray('vendors.delete', 
user_permissions) >= 0)
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:139:    ) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:140:        checkDeletePermission = true;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:141:    }
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:142:    if ($.inArray('vendors.chat', user_permissions) >= 0)
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:143:    {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:144:        checkChatPermission = true;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:145:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:146:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:147:    $('.status_selector').select2({
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:148:        placeholder: '{{trans("lang.status")}}',  
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:149:        minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:150:        allowClear: true 
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:181:        var status = $('.status_selector').val();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:182:        var daterangepicker = 
$('#daterange').data('daterangepicker');
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:183:        ref = database.collection('users').where("role", "==", 
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
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:191:                var fromDate = 
firebase.firestore.Timestamp.fromDate(new Date(from));
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:192:                ref = ref.where('createdAt', '>=', fromDate);
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:193:                var toDate = 
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
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:203:    var ref = database.collection('users').where("role", "==", 
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
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:223:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:224:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:225:    var placeholder = 
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
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:278:                    console.error("No data found in Firestore.");
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:279:                    $('#data-table_processing').hide(); // Hide 
loader
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:280:                    callback({
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:281:                        draw: data.draw,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:282:                        recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:283:                        recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:284:                        data: [] // No data
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:285:                    });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:286:                    return;
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
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:435:                callback({
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:436:                    draw: data.draw,
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:437:                    recordsTotal: totalRecords, // Total number 
of records in Firestore
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:438:                    recordsFiltered: totalRecords, // Number of 
records after filtering (if any)
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:439:                    filteredData: filteredRecords,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:440:                    data: records // The actual data to display 
in the table
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:441:                });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:442:            }).catch(function (error) {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:443:                console.error("Error fetching data from 
Firestore:", error);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:444:                $('#data-table_processing').hide(); // Hide 
loader
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:445:                callback({
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:446:                    draw: data.draw,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:447:                    recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:448:                    recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:449:                    data: [] // No data due to error
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:450:                });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:451:            });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:535:            //document verification status icon add new code 
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:536:async function getDocumentStatusIcon(driverId) {
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:537:    const docSnap = await 
database.collection('documents_verify').doc(driverId).get();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:538:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:539:    if (!docSnap.exists) return '';                     // no 
verification record → no icon
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:540:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:541:    const docs = docSnap.data().documents || [];
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:542:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:543:    // Count approved / rejected
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:544:    const approved = docs.filter(d => d.status === 
'approved').length;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:545:    const rejected = docs.filter(d => d.status === 
'rejected').length;
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:565:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:566:    var route1 = '';
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:567:    var route1 =  '{{route("vendors.edit", ":id")}}';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:568:    route1 = route1.replace(':id', val.id);    
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:569:    
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:570:    var vendorEdit = '{{route("vendors.edit", ":id")}}';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:571:    vendorEdit = vendorEdit.replace(':id', val.id);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:572:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:573:    var vendorView = '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:574:    if(val.vendorData){
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:575:        vendorView = '{{ route('stores.view', ':id') }}';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:576:        vendorView = vendorView.replace(':id', 
val.vendorData.id);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:577:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:578:    
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:579:    var trroute1 = '{{route("users.walletstransaction", 
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
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:648:    var chatViewRoute = "{{ route('vendors.chat', ':id') 
}}".replace(':id', val.id);
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:649:    var unreadHtml = '';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:650:    var action='<span class="action-btn">';
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:651:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:652:    if(val.isAutoVerify !== true){
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:653:        var document_list_view = "{{ route('vendors.document', 
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
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:703:            $('#userTable .is_open:checked').each(function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:704:                var dataId = $(this).attr('dataId');
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:705:                var VendorId = $(this).attr('data-vendorid');
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:706:                deleteDocumentWithImage('users', dataId, 
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
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:724:});
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:725:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:726:async function deleteUserData(userId,vendorId) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:727:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:728:    await database.collection('wallet').where('user_id', '==', 
userId).get().then(async function (snapshotsItem) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:729:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:730:        if (snapshotsItem.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:731:            snapshotsItem.docs.forEach((temData) => {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:732:                var item_data = temData.data();
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:733:
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:734:                
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
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:746:                    await 
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
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:762:                
database.collection('favorite_vendor').doc(item_data.id).delete().then(function () {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:763:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:764:                });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:765:            });
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:766:        }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:767:        })
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:768:    }
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:769:
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:770:      //delete vendor from mysql
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:771:      
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
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:810:$(document).on("click", "a[name='user-delete']", function (e) {
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:811:    var id = this.id;
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:812:    var VendorId = $(this).attr('data-vendorid');
  C:\deploy\adminpanel\resources\views\vendors\index.blade.php:813:    jQuery("#data-table_processing").show();
> C:\deploy\adminpanel\resources\views\vendors\index.blade.php:814:    deleteDocumentWithImage('users', id, 'profilePictureURL')
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



TEXT_END

## DIR: resources\views\items
TEXT_START
FILE_COUNT: 4

### CANDIDATE_FILE: resources\views\items\create.blade.php
SCORE: 24
TAGS: vendors,vendor_products,vendor_categories,sections,firebase.firestore,.collection,.set,createdAt
MATCHES:

  C:\deploy\adminpanel\resources\views\items\create.blade.php:17:                    if ($id != '') { ?>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:18:                    <li class="breadcrumb-item"><a
> C:\deploy\adminpanel\resources\views\items\create.blade.php:19:                            href="{{ route('vendors.items', $id) 
}}">{{ trans('lang.item_plural') }}</a>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:20:                    </li>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:21:                    <?php } else { ?>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:22:                    <li class="breadcrumb-item"><a href="{!! 
route('items') !!}">{{ trans('lang.item_plural') }}</a></li>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:23:                    <?php } ?>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:24:                    <li class="breadcrumb-item active">{{ 
trans('lang.item_create') }}</li>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:25:                </ol>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:26:            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:27:        </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:159:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:160:                                    <div class="form-group row 
width-100" id="attributes_div">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:161:                                        <label class="col-3 
control-label">{{ trans('lang.item_attribute_id') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:162:                                        <div class="col-7">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:163:                                            <select 
id='item_attribute' class="form-control chosen-select" required multiple="multiple" onchange="selectAttribute();"></select>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:164:                                        </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:165:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:166:                                    <div class="form-group row 
width-100">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:167:                                        <div 
class="item_attributes" id="item_attributes"></div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:168:                                        <div 
class="item_variants" id="item_variants"></div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:169:                                        <input type="hidden" 
id="attributes" value="" />
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:387:                    </button>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:388:                    <?php if ($id != '') { ?>
> C:\deploy\adminpanel\resources\views\items\create.blade.php:389:                    <a href="{{ route('vendors.items', $id) }}" 
class="btn btn-default"><i
  C:\deploy\adminpanel\resources\views\items\create.blade.php:390:                            class="fa fa-undo"></i>{{ 
trans('lang.cancel') }}</a>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:391:                    <?php } else { ?>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:392:                    <a href="{!! route('items') !!}" class="btn 
btn-default"><i
  C:\deploy\adminpanel\resources\views\items\create.blade.php:393:                            class="fa fa-undo"></i>{{ 
trans('lang.cancel') }}</a>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:394:                    <?php } ?>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:395:                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:396:            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:397:        </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:415:    <script type="text/javascript">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:416:        
> C:\deploy\adminpanel\resources\views\items\create.blade.php:417:        var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:418:        var vendor_id = "{{ $id }}";
  C:\deploy\adminpanel\resources\views\items\create.blade.php:419:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:420:        var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:421:        var photo = "";
  C:\deploy\adminpanel\resources\views\items\create.blade.php:422:        var digital_product_file = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:423:        var digital_product_file_name = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:424:        var digital_product_ext = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:425:        var addOnesTitle = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:426:        var addOnesPrice = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:427:        var categories_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:428:        var brand_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:437:        var productImagesCount = 0;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:438:        var allowed_file_size = '';
> C:\deploy\adminpanel\resources\views\items\create.blade.php:439:        var vendor_section_id = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:440:        
> C:\deploy\adminpanel\resources\views\items\create.blade.php:441:        var sections_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:442:        var itemLimit = '-1';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:443:        var createdItem = 0;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:444:        var subscriptionModel = false;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:445:        var commissionModel = false;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:446:        var vendorId = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:447:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:448:        var ref_sections = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:449:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:450:        ref_sections.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:451:            await snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:452:                var data = listval.data();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:453:                sections_list.push(data);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:454:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:455:            
> C:\deploy\adminpanel\resources\views\items\create.blade.php:456:            var result = sections_list.find(function(e) {
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
> C:\deploy\adminpanel\resources\views\items\create.blade.php:477:        var subscriptionBusinessModel = 
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:512:            if (sectionData.serviceTypeFlag == 
"ecommerce-service" || sectionData.serviceTypeFlag == "delivery-service") {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:513:                $("#attributes_div").show();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:514:                $("#item_attribute_chosen").css({
  C:\deploy\adminpanel\resources\views\items\create.blade.php:515:                    'width': '100%'
  C:\deploy\adminpanel\resources\views\items\create.blade.php:516:                });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:517:            }else{
> C:\deploy\adminpanel\resources\views\items\create.blade.php:518:                
$("#item_attribute").val('').trigger("chosen:updated");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:519:                $("#attributes_div").hide();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:520:                $("#item_attributes").html('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:521:                $("#item_variants").html('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:522:                $("#attributes").val('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:523:                $("#variants").val('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:524:                $("#is_digital_product").prop('checked', false);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:525:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:526:        });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:527:        
  C:\deploy\adminpanel\resources\views\items\create.blade.php:528:        var reataurantIDDirec = "<?php echo $id; ?>";
  C:\deploy\adminpanel\resources\views\items\create.blade.php:574:                    selected_section = selected_section;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:575:                } else {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:576:                    selected_section = vendor_section_id;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:577:                }
> C:\deploy\adminpanel\resources\views\items\create.blade.php:578:                var section_info = $.map(sections_list, 
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
> C:\deploy\adminpanel\resources\views\items\create.blade.php:611:                        var section_info = $.map(sections_list, 
function(section, i) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:612:                            if (section.id == data.section_id) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:613:                                return section;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:614:                            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:615:                        });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:616:                        if (section_info.length > 0 && 
(section_info[0].serviceTypeFlag == "ecommerce-service" || section_info[0].serviceTypeFlag == "delivery-service")) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:617:                            $("#attributes_div").show();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:618:                            $("#item_attribute_chosen").css({
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
> C:\deploy\adminpanel\resources\views\items\create.blade.php:653:            var digitalProductRef = 
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
> C:\deploy\adminpanel\resources\views\items\create.blade.php:661:            var attributes = 
database.collection('vendor_attributes');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:662:            attributes.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:663:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:664:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:665:                    attributes_list.push(data);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:666:                    
$('#item_attribute').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\create.blade.php:667:                        .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:668:                        .text(data.title));
  C:\deploy\adminpanel\resources\views\items\create.blade.php:669:                })
> C:\deploy\adminpanel\resources\views\items\create.blade.php:670:                $("#item_attribute").show().chosen({
  C:\deploy\adminpanel\resources\views\items\create.blade.php:671:                    "placeholder_text": "{{ 
trans('lang.select_attribute') }}"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:672:                });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:673:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:674:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:675:            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:676:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:677:            $(".save-form-btn").click(async function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:678:                
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:723:                });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:724:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:725:                var id = database.collection('temp').doc().id;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:726:                
  C:\deploy\adminpanel\resources\views\items\create.blade.php:727:                if (name == '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:728:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:729:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:730:                    $(".error_top").append("<p>{{ 
trans('lang.enter_item_name_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:731:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:732:                } else if (price == '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:733:                    $(".error_top").show();
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
> C:\deploy\adminpanel\resources\views\items\create.blade.php:791:                    await 
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:817:                    var priceerror = 0;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:818:                    
> C:\deploy\adminpanel\resources\views\items\create.blade.php:819:                    if ($("#item_attribute").val().length > 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:820:                        if ($('#attributes').val().length > 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:821:                            var attributes = 
$.parseJSON($('#attributes').val());
  C:\deploy\adminpanel\resources\views\items\create.blade.php:822:                        } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:823:                            alert('Please add your attribute 
value');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:824:                            return false;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:825:                        }
> C:\deploy\adminpanel\resources\views\items\create.blade.php:826:                        if ($("#item_attribute").val().length !== 
attributes.length) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:827:                            alert('Please add your attribute 
value');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:828:                            return false;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:829:                        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:830:                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:831:                    
  C:\deploy\adminpanel\resources\views\items\create.blade.php:832:                    if ($('#variants').val().length > 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:833:                        var variantsSet = 
$.parseJSON($('#variants').val());
  C:\deploy\adminpanel\resources\views\items\create.blade.php:834:                        await storeVariantImageData().then(async 
(vIMG) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:877:                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:878:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:879:                    var item_attribute = null;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:880:                    if (attributes.length > 0 && variants.length 
> 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:881:                        if (quantityerror > 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:882:                            alert(
  C:\deploy\adminpanel\resources\views\items\create.blade.php:883:                                'Please add your variants 
quantity it should be -1 or greater than -1'
  C:\deploy\adminpanel\resources\views\items\create.blade.php:884:                            );
  C:\deploy\adminpanel\resources\views\items\create.blade.php:885:                            return false;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:886:                        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:887:                        if (priceerror > 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:889:                            return false;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:890:                        }
> C:\deploy\adminpanel\resources\views\items\create.blade.php:891:                        var item_attribute = {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:892:                            'attributes': attributes,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:893:                            'variants': variants
  C:\deploy\adminpanel\resources\views\items\create.blade.php:894:                        };
  C:\deploy\adminpanel\resources\views\items\create.blade.php:895:                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:896:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:897:                    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:898:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:899:                    await storeDigitalImageData().then(async 
(DigitalImg) => {
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
> C:\deploy\adminpanel\resources\views\items\create.blade.php:927:                                'item_attribute': item_attribute,
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
> C:\deploy\adminpanel\resources\views\items\create.blade.php:938:                                            "{{ 
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1192:            change_categories(selected_vendor);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1193:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1194:            
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1247:            change_categories(selected_vendor);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1248:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1249:            
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1323:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1324:       
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1325:        function selectAttribute(item_attribute = '') {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1326:            if (item_attribute) {




### CANDIDATE_FILE: resources\views\items\edit.blade.php
SCORE: 23
TAGS: vendors,vendor_products,vendor_categories,sections,firebase.firestore,.collection,.update
MATCHES:

  C:\deploy\adminpanel\resources\views\items\edit.blade.php:10:                    <li class="breadcrumb-item"><a 
href="index.php">{{ trans('lang.dashboard') }}</a></li>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:11:                    <?php if (isset($_GET['eid']) && $_GET['eid'] != 
'') { ?>
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:12:                    <li class="breadcrumb-item"><a href="{{ 
route('vendors.items', $_GET['eid']) }}">{{ trans('lang.item_plural') }}</a></li>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:13:                    <?php } else { ?>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:14:                    <li class="breadcrumb-item"><a href="{!! 
route('items') !!}">{{ trans('lang.item_plural') }}</a></li>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:15:                    <?php } ?>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:16:                    <li class="breadcrumb-item active">{{ 
trans('lang.item_edit') }}</li>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:17:                </ol>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:18:            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:19:        </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:20:        <div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:149:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:150:                                    <div class="form-group row 
width-100" id="attributes_div">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:151:                                        <label class="col-3 
control-label">{{ trans('lang.item_attribute_id') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:152:                                        <div class="col-7">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:153:                                            <select 
id='item_attribute' class="form-control chosen-select" required multiple="multiple" onchange="selectAttribute();"></select>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:154:                                        </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:155:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:156:                                    <div class="form-group row 
width-100">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:157:                                        <div 
class="item_attributes" id="item_attributes"></div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:158:                                        <div class="item_variants" 
id="item_variants"></div>
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:190:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:191:                            <div class="form-group row width-100" 
id="attributes_div" style="display:none">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:192:                                <label class="col-3 
control-label">{{ trans('lang.item_attribute_id') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:193:                                <div class="col-7">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:194:                                    <select id='item_attribute' 
class="form-control chosen-select" required multiple="multiple" style="display: none;"></select>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:195:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:196:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:197:                            
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:198:                            <div class="form-group row width-100">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:199:                                <label class="col-3 
control-label">{{ trans('lang.item_image') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:200:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:201:                                    <input type="file" 
id="product_image">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:202:                                    <div 
class="placeholder_img_thumb product_image"></div>
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:389:                    </button>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:390:                    <?php if (isset($_GET['eid']) && $_GET['eid'] 
!= '') { ?>
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:391:                    <a href="{{ route('vendors.items', 
$_GET['eid']) }}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:392:                    <?php } else { ?>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:393:                    <a href="{!! route('items') !!}" class="btn 
btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:394:                    <?php } ?>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:395:                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:396:            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:397:        </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:398:    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:399:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:415:    <script type="text/javascript">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:416:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:417:        var section_id = getCookie('section_id') || null;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:418:        var vendor_id = "{{ $id }}";
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:419:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:420:        var database = firebase.firestore();
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:443:        var digital_product_ext = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:444:        var productImagesCount = 0;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:445:        var vendors = [];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:446:        var sections_list = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:447:        var placeholderImage = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:448:        var product = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:449:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:450:        var placeholder = 
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:494:            if (sectionData.serviceTypeFlag == "ecommerce-service" 
|| sectionData.serviceTypeFlag == "delivery-service") {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:495:                $("#attributes_div").show();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:496:                $("#item_attribute_chosen").css({
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:497:                    'width': '100%'
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:498:                });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:499:            }else{
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:500:                
$("#item_attribute").val('').trigger("chosen:updated");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:501:                $("#attributes_div").hide();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:502:                $("#item_attributes").html('');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:503:                $("#item_variants").html('');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:504:                $("#attributes").val('');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:505:                $("#variants").val('');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:506:                $("#is_digital_product").prop('checked', false);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:507:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:508:        });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:509:        
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:510:        $(document).ready(function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:566:            jQuery(document).on("click", "#is_digital_product", 
function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:567:                var selected_section = 
$('#item_vendor').find('option:selected').attr('data-section-id');
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:568:                var section_info = $.map(sections_list, 
function(section, i) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:569:                    if (section.id == selected_section) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:570:                        return section;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:571:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:572:                });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:573:                if (jQuery(this).is(':checked') && 
section_info.length > 0 && (section_info[0].serviceTypeFlag == "ecommerce-service")) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:574:                    $("#upload_file_div").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:575:                } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:576:                    $("#upload_file_div").hide();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:578:            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:579:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:580:            var digitalProductRef = 
database.collection('settings').doc("digitalProduct");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:581:            digitalProductRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:582:                var digitalProductData = snapshots.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:583:                allowed_file_size = digitalProductData.fileSize;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:584:                $(".max_file_size").text('{{ 
trans('lang.item_upload_file_max') }}' + allowed_file_size + 'Mb');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:585:            })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:586:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:587:           
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:588:            
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:589:            ref_sections.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:590:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:591:                    var data = listval.data();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:592:                    sections_list.push(data);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:593:                })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:594:            })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:595:            
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:596:            database.collection('vendors').where('section_id', 
'==', section_id).orderBy('title').where('title', '!=', '').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:597:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:598:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:599:                    vendor_list.push(data);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:600:                    vendors.push(data);
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
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:642:                if (product.item_attribute != null) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:643:                    $("#attributes_div").show();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:644:                    $.each(product.item_attribute.attributes, 
function(index, attribute) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:645:                        
selected_attributes.push(attribute.attribute_id);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:646:                    });
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:647:                    
$('#attributes').val(JSON.stringify(product.item_attribute.attributes));
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:648:                    
$('#variants').val(JSON.stringify(product.item_attribute.variants));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:649:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:650:                
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:651:                var attributes = 
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
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:662:                            $('#item_attribute').append(option);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:663:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:664:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:665:                    snapshots.docs.forEach(doc => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:666:                        let data = doc.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:667:                        if ($.inArray(data.id, selected_attributes) 
=== -1) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:668:                            let option = '<option value="' + 
data.id + '">' + data.title + '</option>';
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:669:                            $('#item_attribute').append(option);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:670:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:671:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:672:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:673:                    $("#item_attribute").show().chosen({
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:674:                        "placeholder_text": "{{ 
trans('lang.select_attribute') }}"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:675:                    });
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:676:                    if (product.item_attribute) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:677:                        $("#item_attribute").attr("onChange", 
"selectAttribute('" + btoa(JSON.stringify(product.item_attribute)) + "')");
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:678:                        
selectAttribute(btoa(JSON.stringify(product.item_attribute)));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:679:                    } else {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:680:                        $("#item_attribute").attr("onChange", 
"selectAttribute()");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:681:                        selectAttribute();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:682:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:683:                });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:684:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:685:                $("#item_name").val(product.name);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:686:                $("#item_price").val(product.price);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:687:                $("#item_quantity").val(product.quantity);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:688:                $("#item_discount").val(product.disPrice);
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:886:                    //start-item attribute
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:887:                    var error = 0;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:888:                    var item_attribute = null;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:889:                    var quantityerror = 0;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:890:                    var priceerror = 0;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:891:                    var attributes = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:892:                    var variants = [];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:893:                    if ($("#item_attribute").val().length > 0) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:894:                        if ($('#attributes').val().length > 0) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:895:                            var attributes = 
$.parseJSON($('#attributes').val());
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:896:                        } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:897:                            alert('Please add your attribute 
value');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:898:                            return false;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:899:                        }
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:900:                        if ($("#item_attribute").val().length !== 
attributes.length) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:901:                            alert('Please add your attribute 
value');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:902:                            return false;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:903:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:904:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:905:                    
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:906:                    if ($('#variants').val().length > 0) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:907:                        var variantsSet = 
$.parseJSON($('#variants').val());
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:908:                        await storeVariantImageData().then(async 
(vIMG) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:961:                            return false;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:962:                        }
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:963:                        var item_attribute = {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:964:                            'attributes': attributes,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:965:                            'variants': variants
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:966:                        };
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:967:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:968:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:969:                    if ($.isEmptyObject(product_specification)) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:970:                        product_specification = null;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:971:                    }
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
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1002:                                'item_attribute': item_attribute,
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
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1010:                                    window.location.href = "{{ 
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1375:            await change_categories(selected_vendor);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1376:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1377:            
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
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1449:        function selectAttribute(item_attribute = '') {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1450:            if (item_attribute) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1451:                var item_attribute = 
$.parseJSON(atob(item_attribute));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1452:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1453:            var html = '';




### CANDIDATE_FILE: resources\views\items\index.blade.php
SCORE: 21
TAGS: vendors,vendor_products,vendor_categories,sections,orders,.collection,.update
MATCHES:

  C:\deploy\adminpanel\resources\views\items\index.blade.php:58:                        </li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:59:                        <li class="active">
> C:\deploy\adminpanel\resources\views\items\index.blade.php:60:                            <a 
href="{{route('vendors.items',$id)}}"><i class="ri-shopping-basket-fill"></i>{{trans('lang.tab_items')}}</a>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:61:                        </li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:62:                        <li>
> C:\deploy\adminpanel\resources\views\items\index.blade.php:63:                            <a 
href="{{route('vendors.orders',$id)}}"><i class="ri-shopping-bag-line"></i>{{trans('lang.tab_orders')}}</a>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:64:                        </li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:65:                        <li>
> C:\deploy\adminpanel\resources\views\items\index.blade.php:66:                            <a 
href="{{route('vendors.reviews',$id)}}"><i class="ri-shield-star-fill"></i>{{trans('lang.tab_reviews')}}</a>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:67:                        </li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:68:                        <li>
> C:\deploy\adminpanel\resources\views\items\index.blade.php:69:                            <a 
href="{{route('vendors.coupons',$id)}}"><i class="ri-discount-percent-fill"></i>{{trans('lang.tab_promos')}}</a>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:70:                        <li>
> C:\deploy\adminpanel\resources\views\items\index.blade.php:71:                            <a 
href="{{route('vendors.payout',$id)}}"><i class="ri-bank-card-line"></i>{{trans('lang.tab_payouts')}}</a>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:72:                        </li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:73:                        <li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:74:                            <a 
href="{{route('payoutRequests.vendor.view',$id)}}"><i class="ri-refund-line"></i>{{trans('lang.tab_payout_request')}}</a>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:75:                        </li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:76:                        <li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:77:                            <a class="wallet_transaction"><i 
class="ri-wallet-line"></i>{{trans('lang.wallet_transaction')}}</a>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:78:                        </li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:79:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:80:                        <li class="dine_in_future" 
style="display:none;">
> C:\deploy\adminpanel\resources\views\items\index.blade.php:81:                            <a 
href="{{route('vendors.booktable',$id)}}"><i class="ri-restaurant-line"></i>{{trans('lang.dine_in_booking_history')}}</a>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:82:                        </li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:83:                        <?php
  C:\deploy\adminpanel\resources\views\items\index.blade.php:84:                        $subscription =  
route("subscription.subscriptionPlanHistory", ":id");
  C:\deploy\adminpanel\resources\views\items\index.blade.php:85:                        $subscription =  str_replace(":id", 
"storeID=" . $id, $subscription);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:86:                        ?>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:87:                        <li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:88:                            <a href="{{ $subscription }}"><i 
class="ri-chat-history-fill"></i>{{trans('lang.subscription_history')}}</a>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:89:                        </li>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:146:                                    
<th>{{trans('lang.item_category_id')}}</th>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:147:                                   
> C:\deploy\adminpanel\resources\views\items\index.blade.php:148:                                    
<th>{{trans('lang.item_publish')}}</th>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:149:                                    
<th>{{trans('lang.actions')}}</th>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:150:                                </tr>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:151:                                </thead>  
  C:\deploy\adminpanel\resources\views\items\index.blade.php:152:                                <tbody id="append_list1">
  C:\deploy\adminpanel\resources\views\items\index.blade.php:153:                                </tbody>                           
  
  C:\deploy\adminpanel\resources\views\items\index.blade.php:154:                            </table>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:155:                        </div>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:156:                    </div>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:169:<script type="text/javascript">
  C:\deploy\adminpanel\resources\views\items\index.blade.php:170:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:171:    var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:172:    var user_permissions = '<?php echo 
@session('user_permissions') ?>';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:173:    user_permissions = Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:174:    var checkDeletePermission = false;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:175:    if ($.inArray('items.delete', user_permissions) >= 0) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:176:        checkDeletePermission = true;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:177:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:178:    
  C:\deploy\adminpanel\resources\views\items\index.blade.php:179:    const urlParams = new URLSearchParams(location.search);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:184:            var brandID = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:185:        }
> C:\deploy\adminpanel\resources\views\items\index.blade.php:186:        if (key == 'categoryID') {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:187:            var categoryID = value;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:188:        } else {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:189:            var categoryID = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:190:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:191:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:192:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:193:    if (!window.firebaseClientReady || !window.firebaseDb) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:194:        console.warn('Firebase client is not ready. Please check 
Firebase configuration.');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:195:    } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:196:    var database = window.firebaseDb;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:197:    var currentCurrency = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:198:    var currencyAtRight = false;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:199:    var decimal_degits = 0;
> C:\deploy\adminpanel\resources\views\items\index.blade.php:200:    var ref_sections = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
> C:\deploy\adminpanel\resources\views\items\index.blade.php:201:    var vendorID = "{{$id}}";
  C:\deploy\adminpanel\resources\views\items\index.blade.php:202:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:203:    let globalTaxScope = null;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:204:    (async function() {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:205:            let globalTaxSnapshot = await 
database.collection('settings').doc('globalSettings').get();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:206:            let globalTax = globalTaxSnapshot.data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:207:            globalTaxScope = globalTax.taxScope;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:208:        })();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:209:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:210:    <?php if ($id != '') { ?>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:211:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:212:        $('.sectionDiv').hide();
> C:\deploy\adminpanel\resources\views\items\index.blade.php:213:        getStoreNameFunction(vendorID);
> C:\deploy\adminpanel\resources\views\items\index.blade.php:214:        var ref = 
database.collection('vendor_products').where('vendorID', '==', vendorID);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:215:    
  C:\deploy\adminpanel\resources\views\items\index.blade.php:216:    <?php } else { ?>            
  C:\deploy\adminpanel\resources\views\items\index.blade.php:217:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:218:        $('.sectionDiv').show();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:219:        
  C:\deploy\adminpanel\resources\views\items\index.blade.php:220:        if (brandID != '' && brandID != undefined) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:221:            
> C:\deploy\adminpanel\resources\views\items\index.blade.php:222:            var ref = 
database.collection('vendor_products').where('brandID', '==', brandID).where('section_id', '==', section_id);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:223:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:224:        } else if (categoryID != '' && categoryID != undefined) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:225:            
> C:\deploy\adminpanel\resources\views\items\index.blade.php:226:            var ref = 
database.collection('vendor_products').where('categoryID', '==', categoryID).where('section_id', '==', section_id);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:227:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:228:        } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:229:            
> C:\deploy\adminpanel\resources\views\items\index.blade.php:230:            var ref = 
database.collection('vendor_products').where('section_id', '==', section_id);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:231:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:232:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:233:    <?php } ?>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:234:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:235:    async function getStoreNameFunction(vendorId) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:236:        var vendorName = '';
> C:\deploy\adminpanel\resources\views\items\index.blade.php:237:        await database.collection('vendors').where('id', '==', 
vendorId).get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:238:            if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:239:                var vendorData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:240:                vendorName = vendorData.title;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:241:                
$('.page-title').html("{{trans('lang.item_plural')}} - " + vendorName);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:242:               
> C:\deploy\adminpanel\resources\views\items\index.blade.php:243:                var wallet_route = 
"{{route('users.walletstransaction','id')}}";
  C:\deploy\adminpanel\resources\views\items\index.blade.php:244:                $(".wallet_transaction").attr("href", 
wallet_route.replace('id', 'storeID=' + vendorData.author));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:245:            }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:246:        });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:247:        return vendorName;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:248:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:249:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:250:    var refCurrency = 
database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:251:    var append_list = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:252:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:253:    refCurrency.get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:254:        var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:255:        currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:256:        currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:257:        if (currencyData.decimal_degits) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:258:            decimal_degits = currencyData.decimal_degits;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:260:    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:261:    var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\items\index.blade.php:262:    var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:263:    placeholder.get().then(async function (snapshotsimage) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:264:        var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:265:        placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:266:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:267:    })
  C:\deploy\adminpanel\resources\views\items\index.blade.php:268:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:269:    
database.collection('vendor_categories').where('section_id','==',section_id).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:270:        snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:271:            var data=listval.data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:272:            $('.category_selector').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\index.blade.php:273:                .attr("value",data.id)
  C:\deploy\adminpanel\resources\views\items\index.blade.php:274:                .text(data.title));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:275:        })
  C:\deploy\adminpanel\resources\views\items\index.blade.php:276:    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:277:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:286:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:287:        if (category) {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:288:            refData=refData.where('categoryID','==',category);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:289:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:290:         ref=refData;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:291:        $('#itemTable').DataTable().ajax.reload(); 
  C:\deploy\adminpanel\resources\views\items\index.blade.php:292:    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:293:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:294:    $(document).ready(async function () {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:295:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:296:        if (section_id) {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:297:            let sectionSnap = await 
database.collection('sections').doc(section_id).get();
> C:\deploy\adminpanel\resources\views\items\index.blade.php:298:            let sectionData = sectionSnap.exists ? 
sectionSnap.data() : null;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:299:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:300:            if (sectionData && sectionData.dine_in_active === 
true) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:301:                $(".dine_in_future").show();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:302:            }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:303:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:304:            if (sectionData && sectionData.is_product_details === 
true) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:305:                $(".item_type_selector_div").show();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:306:            }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:307:        } else {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:308:            console.warn('section_id cookie is empty; skipping 
section detail lookup on items page.');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:309:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:310:        
  C:\deploy\adminpanel\resources\views\items\index.blade.php:311:        $('.item_type_selector').select2({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:312:            placeholder: "{{trans('lang.type')}}",  
  C:\deploy\adminpanel\resources\views\items\index.blade.php:313:            minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:314:            allowClear: true  
  C:\deploy\adminpanel\resources\views\items\index.blade.php:315:        });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:316:        $('.category_selector').select2({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:339:        });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:340:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:341:        ref_sections.get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:342:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:343:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:344:                if (data.serviceTypeFlag == "delivery-service" || 
data.serviceTypeFlag == "ecommerce-service") {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:345:                    $('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\index.blade.php:346:                        .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\items\index.blade.php:347:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:348:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:349:                }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:350:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:351:            })
> C:\deploy\adminpanel\resources\views\items\index.blade.php:352:            $('#section_id').val(section_id);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:353:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:354:        })
  C:\deploy\adminpanel\resources\views\items\index.blade.php:355:        $(document.body).on('change', '#selected_search', function 
() {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:356:            if (jQuery(this).val() == 'brand') {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:357:                database.collection('brands').get().then(async 
function (snapshots) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:358:                    snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:359:                        var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:360:                        
$('#brand_search_dropdown').append($("<option></option").attr("value", data.id).text(data.title));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:361:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:362:                    });                });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:363:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:364:                jQuery('#brand_search_dropdown').show();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:365:                jQuery('#search').hide();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:367:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:368:            } else if (jQuery(this).val() == 'category') {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:369:                var section_id = getCookie('section_id');
> C:\deploy\adminpanel\resources\views\items\index.blade.php:370:                if (section_id != '') {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:371:                    var ref_category = 
database.collection('vendor_categories').where('section_id', '==', section_id);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:372:                } else {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:373:                    var ref_category = 
database.collection('vendor_categories');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:374:                }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:375:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:376:                ref_category.get().then(async function (snapshots) 
{
  C:\deploy\adminpanel\resources\views\items\index.blade.php:377:                    snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:378:                        var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:379:                        
$('#category_search_dropdown').append($("<option></option").attr("value", data.id).text(data.title));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:380:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:381:                    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:421:                { key: 'category', header: 
"{{trans('lang.item_category_id')}}" }, 
  C:\deploy\adminpanel\resources\views\items\index.blade.php:422:               
> C:\deploy\adminpanel\resources\views\items\index.blade.php:423:                { key: 'publish', header: 
"{{trans('lang.item_publish')}}" },
  C:\deploy\adminpanel\resources\views\items\index.blade.php:424:               
  C:\deploy\adminpanel\resources\views\items\index.blade.php:425:            ],
  C:\deploy\adminpanel\resources\views\items\index.blade.php:426:            
  C:\deploy\adminpanel\resources\views\items\index.blade.php:427:            fileName: "{{trans('lang.item_table')}}",
  C:\deploy\adminpanel\resources\views\items\index.blade.php:428:        };
  C:\deploy\adminpanel\resources\views\items\index.blade.php:429:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:430:        const table = $('#itemTable').DataTable({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:431:            pageLength: 10, // Number of rows per page
  C:\deploy\adminpanel\resources\views\items\index.blade.php:474:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:475:                    @if ($id == '')
> C:\deploy\adminpanel\resources\views\items\index.blade.php:476:                        const vendorDocs = await 
database.collection('vendors').get();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:477:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:478:                    vendorDocs.forEach(doc => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:479:                        storeNames[doc.id] = doc.data().title;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:480:                    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:481:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:482:                    @endif
  C:\deploy\adminpanel\resources\views\items\index.blade.php:483:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:484:                    var categoryNames = {};
> C:\deploy\adminpanel\resources\views\items\index.blade.php:485:                    const categoryDocs = await 
database.collection('vendor_categories').get();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:486:                    categoryDocs.forEach(doc => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:487:                        categoryNames[doc.id] = doc.data().title;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:488:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:489:                    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:490:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:491:                    var sectionNames = {};
> C:\deploy\adminpanel\resources\views\items\index.blade.php:492:                    const sectionDocs = await 
database.collection('sections').get();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:493:                    sectionDocs.forEach(doc => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:494:                        sectionNames[doc.id] = doc.data().name;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:495:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:496:                    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:497:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:498:                    var brandNames = {};
> C:\deploy\adminpanel\resources\views\items\index.blade.php:499:                    const brandDocs = await 
database.collection('brands').get();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:500:                    brandDocs.forEach(doc => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:501:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:502:                        brandNames[doc.id] = doc.data().title;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:503:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:504:                    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:505:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:506:                    let records = [];
  C:\deploy\adminpanel\resources\views\items\index.blade.php:507:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:529:                        childData.finalPrice = 
parseInt(finalPrice);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:530:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:531:                        childData.store = 
storeNames[childData.vendorID] || '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:532:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:533:                        childData.category = 
categoryNames[childData.categoryID] || '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:534:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:535:                        childData.section = 
sectionNames[childData.section_id] || '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:536:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:537:                        if (childData.hasOwnProperty('brandID') && 
childData.brandID != '' && childData.brandID != null) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:538:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:539:                            childData.brand = 
brandNames[childData.brandID] || '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:540:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:541:                        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:542:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:543:                        if (searchValue) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:626:                    callback({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:627:                        draw: data.draw,
> C:\deploy\adminpanel\resources\views\items\index.blade.php:628:                        recordsTotal: totalRecords, // Total 
number of records in Firestore
  C:\deploy\adminpanel\resources\views\items\index.blade.php:629:                        recordsFiltered: totalRecords, // Number 
of records after filtering (if any)
  C:\deploy\adminpanel\resources\views\items\index.blade.php:630:                        filteredData: filteredRecords,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:631:                        data: records // The actual data to 
display in the table
  C:\deploy\adminpanel\resources\views\items\index.blade.php:632:                    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:633:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:634:                }).catch(function (error) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:635:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:636:                    console.error("Error fetching data from 
Firestore:", error);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:637:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:638:                    $('#data-table_processing').hide(); // Hide 
loader
  C:\deploy\adminpanel\resources\views\items\index.blade.php:639:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:640:                    callback({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:641:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:642:                        draw: data.draw,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:643:                        recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:644:                        recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:658:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:659:               orderable: false,
> C:\deploy\adminpanel\resources\views\items\index.blade.php:660:               targets: (vendorID == '') ? 
((checkDeletePermission) ? [0, 5, 6] : [4, 5]) : ((checkDeletePermission) ? [0, 4, 5] : [3, 4])
  C:\deploy\adminpanel\resources\views\items\index.blade.php:661:            },
  C:\deploy\adminpanel\resources\views\items\index.blade.php:662:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:663:            {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:664:                type: 'formatted-num',
  C:\deploy\adminpanel\resources\views\items\index.blade.php:665:                targets: (checkDeletePermission) ? [2] : [1]
  C:\deploy\adminpanel\resources\views\items\index.blade.php:666:            }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:667:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:668:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:797:    var vendorroute = '{{route("stores.view",":id")}}';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:798:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:799:    vendorroute = vendorroute.replace(':id', val.vendorID);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:800:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:801:    if (checkDeletePermission) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:802:        html.push('<input type="checkbox" id="is_open_' + id + '" 
class="is_open" dataId="' + id + '"><label class="col-3 control-label"\n' +  'for="is_open_' + id + '" ></label>');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:803:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:804:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:805:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:806:    if (val.photo != '') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:807:        html.push('<img class="rounded" style="width:50px" src="' 
+ val.photo + '" alt="image" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"> ' + ' <a href="' + route1 + '" 
class="redirecttopage left_space"> ' + val.name + tax_titles + '</a>');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:812:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:813:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:814:    if (val.item_attribute && val.item_attribute.variants && 
val.item_attribute.variants.length > 0) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:815:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:816:    let originalVariantPrices = val.item_attribute.variants
  C:\deploy\adminpanel\resources\views\items\index.blade.php:817:        .map(v => parseFloat(v.variant_price))
  C:\deploy\adminpanel\resources\views\items\index.blade.php:818:        .filter(price => !isNaN(price) && price > 0);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:819:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:820:    if (originalVariantPrices.length > 0) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:821:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:822:        const displayMin = Math.min(...originalVariantPrices);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:823:        const displayMax = Math.max(...originalVariantPrices);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:824:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:886:    var caregoryroute = '{{route("categories.edit",":id")}}';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:887:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:888:    caregoryroute = caregoryroute.replace(':id', val.categoryID);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:889:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:890:    if (val.category == '') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:891:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:892:        caregoryroute = "Javascript:void(0)";
  C:\deploy\adminpanel\resources\views\items\index.blade.php:893:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:894:        category = '{{trans("lang.unknown")}}'
  C:\deploy\adminpanel\resources\views\items\index.blade.php:895:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:896:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:901:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:902:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:903:    if (val.publish) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:904:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:905:        html.push('<label class="switch"><input type="checkbox" 
checked id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:906:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:907:    } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:908:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:909:        html.push('<label class="switch"><input type="checkbox" 
id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:910:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:911:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:912:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:913:    var actionHtml = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:914:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:915:    actionHtml = actionHtml + '<span class="action-btn"><a href="' 
+ route1 + '" class="link-td" data-toggle="tooltip" title="{{trans("lang.edit")}}"><i class="mdi mdi-lead-pencil"></i></a>';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:916:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:917:    if (checkDeletePermission) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:931:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:932:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:933:$(document).on("click", "input[name='isActive']", function (e) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:934:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:935:    var ischeck = $(this).is(':checked');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:936:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:937:    var id = this.id;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:938:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:939:    if (ischeck) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:940:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:941:        database.collection('vendor_products').doc(id).update({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:942:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:943:            'publish': true
  C:\deploy\adminpanel\resources\views\items\index.blade.php:944:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:945:        }).then(function (result) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:946:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:947:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:948:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:949:        });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:950:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:951:    } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:952:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:953:        database.collection('vendor_products').doc(id).update({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:954:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:955:            'publish': false
  C:\deploy\adminpanel\resources\views\items\index.blade.php:956:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:957:        }).then(function (result) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:958:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:959:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:960:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:961:        });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:962:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:963:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:991:                var dataId = $(this).attr('dataId');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:992:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:993:                deleteDocumentWithImage('vendor_products', dataId, 
'photo', 'photos')
  C:\deploy\adminpanel\resources\views\items\index.blade.php:994:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:995:                .then(() => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:996:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:997:                    return deleteProductData(dataId);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:998:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:999:                })
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1000:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1001:                .then(() => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1033:    var productsection = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1034:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:1035:    await database.collection('sections').where("id", "==", 
section).get().then(async function (snapshotss) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1036:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1037:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1038:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1039:        if (snapshotss.docs[0]) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1040:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1041:            var section_data = snapshotss.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1042:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1043:            productsection = section_data.name;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1059:    var productvendor = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1060:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:1061:    await database.collection('vendors').where("id", "==", 
vendor).get().then(async function (snapshotss) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1062:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:1063:        var vendorroute = '{{route("vendors.edit",":id")}}';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1064:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1065:        vendorroute = vendorroute.replace(':id', vendor);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1066:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1067:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1068:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1069:        if (snapshotss.docs[0]) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1070:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1071:            var vendor_data = snapshotss.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1087:    var productCategory = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1088:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:1089:    await database.collection('vendor_categories').where("id", 
"==", category).get().then(async function (snapshotss) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1090:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1091:        var caregoryroute = '{{route("categories.edit",":id")}}';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1092:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1093:        caregoryroute = caregoryroute.replace(':id', category);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1094:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1095:        if (snapshotss.docs[0]) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1096:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1097:            var category_data = snapshotss.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1113:    var productBrand = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1114:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:1115:    await database.collection('brands').where("id", "==", 
brand).get().then(async function (snapshotss) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1116:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1117:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1118:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1119:        if (snapshotss.docs[0]) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1120:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1121:            var brand_data = snapshotss.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1122:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1123:            productBrand = brand_data.title;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1141:    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1142:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:1143:    deleteDocumentWithImage('vendor_products', id, 'photo', 
'photos')
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1144:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1145:    .then(() => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1146:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1147:        return deleteProductData(id);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1148:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1149:    })
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1150:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1151:    .then(() => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1171:function clickLink(value) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1172:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:1173:    setCookie('section_id', value, 30);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1174:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1175:    location.reload();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1176:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1177:}
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1178:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1179:async function deleteProductData(productId) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1180:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:1181:    await 
database.collection('favorite_item').where('product_id', '==', productId).get().then(async function (snapshotsItem) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1182:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1183:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1184:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1185:        if (snapshotsItem.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1186:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1187:            snapshotsItem.docs.forEach((temData) => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1188:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1189:                var item_data = temData.data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1191:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1192:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:1193:                
database.collection('favorite_item').doc(item_data.id).delete().then(function () {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1194:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1195:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1196:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1197:                });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1198:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1199:            });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1200:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1201:        }




### CANDIDATE_FILE: resources\views\items\view.blade.php
SCORE: 20
TAGS: vendors,vendor_products,vendor_categories,sections,firebase.firestore,.collection
MATCHES:

  C:\deploy\adminpanel\resources\views\items\view.blade.php:145:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:146:var id = "<?php echo $id;?>";
> C:\deploy\adminpanel\resources\views\items\view.blade.php:147:var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\items\view.blade.php:148:var ref = 
database.collection('vendor_products').where("id","==",id);
> C:\deploy\adminpanel\resources\views\items\view.blade.php:149:var ref_sections = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:150:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:151:var categories_list = [];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:152:var brand_list=[];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:153:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:154:var attributes_list = [];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:155:var vendor_list=[];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:156:var photo ="";
  C:\deploy\adminpanel\resources\views\items\view.blade.php:157:var addOnesTitle = [];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:163:var productImagesCount = 0;
  C:\deploy\adminpanel\resources\views\items\view.blade.php:164:
> C:\deploy\adminpanel\resources\views\items\view.blade.php:165:var vendors=[];
> C:\deploy\adminpanel\resources\views\items\view.blade.php:166:var sections_list=[];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:167:var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\items\view.blade.php:168:var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:169:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:170:placeholder.get().then( async function(snapshotsimage){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:171:    var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:172:    placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\items\view.blade.php:173:})
  C:\deploy\adminpanel\resources\views\items\view.blade.php:174:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:175:$(document).ready(function(){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:176:  
  C:\deploy\adminpanel\resources\views\items\view.blade.php:195:  ref.get().then( async function(snapshots){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:196:    var product = snapshots.docs[0].data();
> C:\deploy\adminpanel\resources\views\items\view.blade.php:197:      if(getCookie('section_id') != ""){
> C:\deploy\adminpanel\resources\views\items\view.blade.php:198:        var vendorsDb = 
database.collection('vendor_categories').where('section_id','==',getCookie('section_id'));
> C:\deploy\adminpanel\resources\views\items\view.blade.php:199:          var brand = 
database.collection('brands').where('sectionId','==',getCookie('section_id'));
  C:\deploy\adminpanel\resources\views\items\view.blade.php:200:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:201:      }else{
> C:\deploy\adminpanel\resources\views\items\view.blade.php:202:        var vendorsDb = database.collection('vendor_categories');
> C:\deploy\adminpanel\resources\views\items\view.blade.php:203:          var brand = database.collection('brands');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:204:      }
> C:\deploy\adminpanel\resources\views\items\view.blade.php:205:     await ref_sections.get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\items\view.blade.php:206:          snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\view.blade.php:207:              var data = listval.data();
> C:\deploy\adminpanel\resources\views\items\view.blade.php:208:              sections_list.push(data);
> C:\deploy\adminpanel\resources\views\items\view.blade.php:209:              if(data.id == product.section_id){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:210:                  $('#section').text(data.name);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:211:              }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:212:          })
  C:\deploy\adminpanel\resources\views\items\view.blade.php:213:      });
> C:\deploy\adminpanel\resources\views\items\view.blade.php:214: await database.collection('vendors').get().then( async 
function(snapshots){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:215:   snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\view.blade.php:216:              var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:217:              vendor_list.push(data);
> C:\deploy\adminpanel\resources\views\items\view.blade.php:218:              vendors.push(data);
> C:\deploy\adminpanel\resources\views\items\view.blade.php:219:                if(data.id == product.vendorID){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:220:                    $('#item_vendor').text(data.title);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:221:                }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:222:        })
  C:\deploy\adminpanel\resources\views\items\view.blade.php:223:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:224:}); 
  C:\deploy\adminpanel\resources\views\items\view.blade.php:225:
> C:\deploy\adminpanel\resources\views\items\view.blade.php:226:await vendorsDb.get().then( async function(snapshots){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:227:  
  C:\deploy\adminpanel\resources\views\items\view.blade.php:228:   snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\view.blade.php:229:              var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:230:                categories_list.push(data);
> C:\deploy\adminpanel\resources\views\items\view.blade.php:231:                if(data.id == product.categoryID){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:232:                    $('#item_category').text(data.title);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:233:                }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:234:      })
  C:\deploy\adminpanel\resources\views\items\view.blade.php:235:});
  C:\deploy\adminpanel\resources\views\items\view.blade.php:236:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:237:  await brand.get().then( async function(snapshots){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:238:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:239:      snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\view.blade.php:288:})
  C:\deploy\adminpanel\resources\views\items\view.blade.php:289:
> C:\deploy\adminpanel\resources\views\items\view.blade.php:290:function selectAttribute(item_attribute=''){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:291:	
> C:\deploy\adminpanel\resources\views\items\view.blade.php:292:	if(item_attribute){
> C:\deploy\adminpanel\resources\views\items\view.blade.php:293:		var item_attribute = $.parseJSON(atob(item_attribute));
  C:\deploy\adminpanel\resources\views\items\view.blade.php:294:	}
  C:\deploy\adminpanel\resources\views\items\view.blade.php:295:	
  C:\deploy\adminpanel\resources\views\items\view.blade.php:296:	var html = '';
> C:\deploy\adminpanel\resources\views\items\view.blade.php:297:	$("#item_attribute").find('option:selected').each(function(){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:298:		var $this = $(this);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:299:		var selected_options = [];
> C:\deploy\adminpanel\resources\views\items\view.blade.php:300:	  	if(item_attribute){
> C:\deploy\adminpanel\resources\views\items\view.blade.php:301:	  		$.each(item_attribute.attributes, function( index, attribute ) 
{
  C:\deploy\adminpanel\resources\views\items\view.blade.php:302:	  			if($this.val() == attribute.attribute_id){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:303:	  	 	  		selected_options.push(attribute.attribute_options);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:304:	  	 		}
  C:\deploy\adminpanel\resources\views\items\view.blade.php:305:	  		});
  C:\deploy\adminpanel\resources\views\items\view.blade.php:306:	  	}
  C:\deploy\adminpanel\resources\views\items\view.blade.php:307:	  	html += '<div class="row" id="attr_'+$this.val()+'">';
  C:\deploy\adminpanel\resources\views\items\view.blade.php:308:			html += '<div class="col-md-3">';
  C:\deploy\adminpanel\resources\views\items\view.blade.php:309:				html += '<label>'+$this.text()+'</label>';
  C:\deploy\adminpanel\resources\views\items\view.blade.php:310:			html += '</div>';
  C:\deploy\adminpanel\resources\views\items\view.blade.php:311:			html += '<div class="col-lg-9">';
> C:\deploy\adminpanel\resources\views\items\view.blade.php:312:				html += '<input type="text" class="form-control" 
id="attribute_options_'+$this.val()+'" value="'+selected_options+'" placeholder="Add attribute values" data-role="tagsinput" 
onchange="variants_update(\''+btoa(JSON.stringify(item_attribute))+'\')">';
  C:\deploy\adminpanel\resources\views\items\view.blade.php:313:			html += '</div>';
  C:\deploy\adminpanel\resources\views\items\view.blade.php:314:		html += '</div>';	
  C:\deploy\adminpanel\resources\views\items\view.blade.php:315:	});
> C:\deploy\adminpanel\resources\views\items\view.blade.php:316:	$("#item_attributes").html(html);	
> C:\deploy\adminpanel\resources\views\items\view.blade.php:317:	$("#item_attributes input[data-role=tagsinput]").tagsinput();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:318:	
> C:\deploy\adminpanel\resources\views\items\view.blade.php:319:	if($("#item_attribute").val().length == 0){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:320:		$("#attributes").val('');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:321:		$("#variants").val('');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:322:		$("#item_variants").html('');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:323:	}
  C:\deploy\adminpanel\resources\views\items\view.blade.php:324:}
  C:\deploy\adminpanel\resources\views\items\view.blade.php:325:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:326:</script>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:327:@endsection



TEXT_END

## DIR: resources\views\categories
TEXT_START
FILE_COUNT: 3

### CANDIDATE_FILE: resources\views\categories\create.blade.php
SCORE: 16
TAGS: vendor_categories,sections,firebase.firestore,.collection,.set
MATCHES:

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
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:103:<script type="text/javascript">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:104:
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:105:    var section_id = getCookie('section_id') || '';
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:106:    var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:107:    var ref = database.collection('vendor_categories');
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:108:    
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:109:    var ref_review_attributes = 
database.collection('review_attributes');
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:110:    var photo = "";
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:111:    var fileName = '';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:112:    var id_category = "<?php echo uniqid(); ?>";
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:113:    var category_length = 1;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:114:    var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:115:    var placeholder = 
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
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:172:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:173:            } else {
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:174:                var count_vendor_categories = 0;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:175:                if (show_in_homepage) {
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:176:                    await 
database.collection('vendor_categories').where('show_in_homepage', "==", true).where("section_id", "==", 
section_id).get().then(async function (snapshots) {
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:177:                        count_vendor_categories = 
snapshots.docs.length;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:178:                    });
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:179:                }
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:180:                if (count_vendor_categories >= 5) {
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




### CANDIDATE_FILE: resources\views\categories\edit.blade.php
SCORE: 16
TAGS: vendor_categories,sections,firebase.firestore,.collection,.update
MATCHES:

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
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:103:<script type="text/javascript">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:104:
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:105:    var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:106:    var id = "<?php echo $id; ?>";
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:107:    var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:108:    
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:109:    var ref = 
database.collection('vendor_categories').where("id", "==", id);
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:110:    var ref_review_attributes = 
database.collection('review_attributes');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:111:    var selected_review_attributes = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:112:    var category = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:113:    var photo = "";
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:114:    var fileName = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:115:    var catImageFile = "";
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:116:    var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:117:    var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:118:    var storage = firebase.storage();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:119:    var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:120:    var order = 0;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:121:    let sectionData = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:122:
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:123:    placeholder.get().then(async function (snapshotsimage) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:124:        var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:125:        placeholderImage = placeholderImageData.image;
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
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:198:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:199:            } else {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:200:                var count_vendor_categories = 0;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:201:                if (show_in_homepage) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:202:                    await 
database.collection('vendor_categories').where('show_in_homepage', "==", true).where("section_id", "==", section_id).where("id", 
"!=", id).get().then(async function (snapshots) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:203:                        count_vendor_categories = 
snapshots.docs.length;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:204:                    });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:205:                }
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:206:                if (count_vendor_categories >= 5) {
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




### CANDIDATE_FILE: resources\views\categories\index.blade.php
SCORE: 16
TAGS: vendor_products,vendor_categories,sections,.collection,.update
MATCHES:

  C:\deploy\adminpanel\resources\views\categories\index.blade.php:64:                                  
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:65:                                    
<th>{{trans('lang.item')}}</th>
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:66:                                    <th> 
{{trans('lang.item_publish')}}</th>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:67:                                    
<th>{{trans('lang.actions')}}</th>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:68:                                </tr>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:69:                                </thead>  
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:70:                                <tbody id="append_list1">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:71:                                </tbody>                       
      
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:72:                            </table>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:73:                        </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:74:                    </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:87:<script type="text/javascript">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:88:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:89:    var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:90:    var user_permissions = '<?php echo 
@session('user_permissions') ?>';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:91:    user_permissions = 
Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:92:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:93:    var checkDeletePermission = false;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:94:    if ($.inArray('categories.delete', user_permissions) >= 0) 
{
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:95:        checkDeletePermission = true;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:96:    }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:97:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:106:    var start = null;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:107:    var user_number = [];
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:108:    var ref = database.collection('vendor_categories');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:109:    
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:110:    if(section_id){
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:111:        ref = ref.where('section_id','==',section_id);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:112:    }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:113:    
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:114:    var append_list = '';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:115:    var placeholderImage = '';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:116:    
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:117:    let selected_gender = "";
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:118:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:119:    $(document).ready(function () {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:121:        jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:122:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:123:        var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:124:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:125:        placeholder.get().then(async function 
(snapshotsimage) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:126:            var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:127:            placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:128:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:129:        })
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:130:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:131:        $('.sections').select2({
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:132:            placeholder: "{{trans('lang.select')}} 
{{trans('lang.section_plural')}}",  
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:133:            minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:134:            allowClear: true 
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:135:        });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:136:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:137:        $('select').on("select2:unselecting", function(e) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:138:            var self = $(this);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:139:            setTimeout(function() {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:175:                    if (querySnapshot.empty) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:176:                        $('.total_count').text(0);
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:177:                        console.error("No data found in 
Firestore.");
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:178:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:179:                        $('#data-table_processing').hide(); 
// Hide loader
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:180:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:181:                        callback({
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:182:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:183:                            draw: data.draw,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:184:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:185:                            recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:207:                     
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:208:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:209:                        var totalProducts = await 
getProductTotal(childData.id, childData.section_id);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:210:                      
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:211:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:212:                        childData.totalProducts = 
totalProducts ? totalProducts : 0;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:213:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:214:                        if (searchValue) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:215:                            if (
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:216:                                (childData.title && 
childData.title.toString().toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:217:                                (childData.totalProducts && 
childData.totalProducts.toString().includes(searchValue))
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:275:                    callback({
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:276:                        draw: data.draw,
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:277:                        recordsTotal: totalRecords, // Total 
number of records in Firestore
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:278:                        recordsFiltered: totalRecords, // 
Number of records after filtering (if any)
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:279:                        data: records // The actual data to 
display in the table
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:280:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:281:                    });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:282:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:283:                }).catch(function (error) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:284:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:285:                    console.error("Error fetching data from 
Firestore:", error);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:286:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:287:                    $('#data-table_processing').hide(); // 
Hide loader
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:288:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:289:                    callback({
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:290:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:291:                        draw: data.draw,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:292:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:293:                        recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:388:  
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:389:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:390:        var categoryId = val.id;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:391:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:392:        var url = '{{url("items?categoryID=id")}}';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:393:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:394:        url = url.replace("id", categoryId);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:395:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:396:        html.push('<td ><a href="' + url + '">' + 
val.totalProducts + '</a></td>');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:397:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:398:        if (val.publish) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:399:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:400:            html.push('<td><label class="switch"><input 
type="checkbox" checked id="' + val.id + '" name="isSwitch"><span class="slider round"></span></label></td>');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:401:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:402:        } else {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:403:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:404:            html.push('<td><label class="switch"><input 
type="checkbox" id="' + val.id + '" name="isSwitch"><span class="slider round"></span></label></td>');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:405:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:406:        }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:426:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:427:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:428:    /* toggal publish action code start*/
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:429:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:430:    $(document).on("click", "input[name='isSwitch']", 
function (e) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:431:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:432:        var ischeck = $(this).is(':checked');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:433:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:434:        var id = this.id;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:435:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:436:        if (ischeck) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:437:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:438:            
database.collection('vendor_categories').doc(id).update({
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:439:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:440:                'publish': true
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:441:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:442:            }).then(function (result) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:443:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:444:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:445:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:446:            });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:447:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:448:        } else {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:449:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:450:            
database.collection('vendor_categories').doc(id).update({
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:451:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:452:                'publish': false
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:453:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:454:            }).then(function (result) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:455:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:456:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:457:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:458:            });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:459:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:460:        }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:464:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:465:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:466:    /*toggal publish action code end*/
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:467:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:468:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:469:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:470:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:471:async function getProductTotal(id) {
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:472:    const productSnapshots = await 
database.collection('vendor_products').where('categoryID', '==', id).get();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:473:    return productSnapshots.docs.length;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:474:}
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:475:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:476:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:477:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:478:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:479:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:480:    $(document).on("click", "a[name='category-delete']", 
async function (e) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:482:        var id = this.id;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:483:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:484:        await 
deleteDocumentWithImage('vendor_categories',id,'photo');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:485:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:486:        window.location.href = '{{ route("categories")}}';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:487:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:488:    });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:489:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:490:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:491:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:492:    function clickLink(value) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:493:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:494:        setCookie('section_id', value, 30);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:495:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:496:        location.reload();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:497:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:498:    }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:499:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:500:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:501:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:502:    function clickpage(value) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:532:                    var dataId = $(this).attr('dataId');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:533:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:534:                    await 
deleteDocumentWithImage('vendor_categories',dataId,'photo');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:535:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:536:                    window.location.reload();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:537:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:538:                });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:539:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:540:            }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:541:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:542:        } else {



TEXT_END

## DIR: resources\views\orders
TEXT_START
FILE_COUNT: 4

### CANDIDATE_FILE: resources\views\orders\edit.blade.php
SCORE: 26
TAGS: vendors,vendor_products,sections,orders,firebase.firestore,.collection,.set,.update,createdAt,zoneId
MATCHES:

  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:25:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:26:                    <?php if (isset($_GET['eid']) && $_GET['eid'] 
!= '') { ?>
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:27:                    <li class="breadcrumb-item"><a href="{{ 
route('vendors.orders', $_GET['eid']) }}">{{ trans('lang.order_plural') }}</a>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:28:                    </li>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:29:                    <?php } else { ?>
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:30:                    <li class="breadcrumb-item"><a href="{!! 
route('orders') !!}">{{ trans('lang.order_plural') }}</a>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:31:                    </li>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:32:                    <?php } ?>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:33:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:34:                    <li class="breadcrumb-item">{{ 
trans('lang.order_edit') }}</li>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:35:                </ol>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:36:            </div>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:37:        </div>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:38:        <?php if (isset($oid) && $oid != '') { ?>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:49:        <?php } ?>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:50:        <div class="card-body">
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:51:            <?php if(in_array('orders.print', 
json_decode(@session('user_permissions'),true))){ ?>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:52:            <?php if (isset($_GET['id']) && $_GET['id'] != '') { ?>
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:53:            <div class="text-right print-btn"><a href="{{ 
route('vendors.orderprint', $id) }}">
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:54:                    <button type="button" class="fa 
fa-print"></button>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:55:                </a></div>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:56:            <?php } ?>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:57:            <div class="col-md-12">
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:58:                <div class="print-top non-printable mt-3">
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:59:                    <div class="text-right print-btn non-printable">
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:60:                        <button type="button" class="fa fa-print 
non-printable" onclick="printDiv('printableArea')"></button>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:61:                    </div>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:86:                                                    <div 
class="form-group row widt-100 gendetail-col">
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:87:                                                        <label 
class="col-12 control-label"><strong>{{ trans('lang.date_created') }}
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:88:                                                                : 
</strong><span id="createdAt"></span></label>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:89:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:90:                                                    </div>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:91:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:92:                                                    <div 
class="form-group row widt-100 gendetail-col payment_method">
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:93:                                                        <label 
class="col-12 control-label"><strong>{{ trans('lang.payment_methods') }}
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:94:                                                                : 
</strong><span id="payment_method"></span></label>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:95:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:96:                                                    </div>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:324:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:325:            <?php if (isset($_GET['eid']) && $_GET['eid'] != '') { 
?>
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:326:            <a href="{{ route('vendors.orders', $_GET['eid']) }}" 
class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:327:            <?php } elseif ($oid != '') { ?>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:328:            <a href="{!! route('orderReview') !!}" class="btn 
btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:329:            <?php } else { ?>
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:330:            <a href="{!! route('orders') !!}" class="btn 
btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:331:            </a>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:332:            <?php } ?>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:333:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:334:        </div>
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:335:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:336:        <div class="modal fade" id="orderTrakingModal" 
tabindex="-1" role="dialog" aria-labelledby="orderTrakingModalLabel" aria-hidden="true">
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:337:            <div class="modal-dialog" role="document">
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:338:                <div class="modal-content">
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:788:        var tip_amount = 0;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:789:        var vendorname = '';
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:790:        var vendorId = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:791:        var userId = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:792:        var order_sectionId = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:793:        var add_reff_amount = false;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:794:        var referralAmount = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:795:        var referralBy = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:796:        var page_size = 5;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:797:        var vendorAuthor = '';
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:798:        var subscriptionTotalOrders = -1;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:799:        var subscriptionModel = false;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:800:        var commissionBusinessModel = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:801:        var commissionModel = false;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:802:        var paymentMethod = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:803:
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:804:        var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:805:
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:806:        function getSafeFirestoreData(snapshot, fallback) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:807:            fallback = fallback || {};
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:808:            if (!snapshot) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:809:                return fallback;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:810:            }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:811:            if (typeof snapshot.exists !== 'undefined' && 
!snapshot.exists) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:812:                return fallback;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:813:            }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:814:            if (typeof snapshot.data !== 'function') {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:844:            console.log('[ORDER_EDIT_TRACE]', label, payload);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:845:        }
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:846:        var subscriptionBusinessModel = 
database.collection('settings').doc("vendor");
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:847:        subscriptionBusinessModel.get().then(async 
function(snapshots) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:848:            var subscriptionSetting = 
getSafeFirestoreData(snapshots);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:849:            if (subscriptionSetting.subscription_model == true) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:850:                subscriptionModel = true;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:851:            }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:852:        });
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:853:        if (oid != '') {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:854:            var ref = 
database.collection('vendor_orders').where("id", "==", oid);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:855:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:856:        } else {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:857:            var ref = 
database.collection('vendor_orders').where("id", "==", id);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:858:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:859:        }
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:860:        var ref_review_attributes = 
database.collection('review_attributes');
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:861:        var selected_review_attributes = '';
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:862:        var refUserReview = 
database.collection('items_review').where('orderid', '==', oid);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:863:        var append_procucts_list = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:864:        var append_procucts_total = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:865:        var total_price = 0;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:866:        var currentCurrency = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:867:        var currencyAtRight = false;
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:868:        var refCurrency = 
database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:869:        var orderPreviousStatus = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:870:        var orderCustomerId = '';
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:871:        var orderTakeAwayOption = false;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:872:        var manfcmTokenVendor = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:873:        var manname = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:874:        var decimal_degits = 0;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:875:        var service_type = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:876:        var delivery_enable = false;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:877:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:878:        var basePrice = 0;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:879:        var orderBasePrice = 0;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:892:                return;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:893:            }
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:894:            currencyData = getSafeFirestoreData(snapshots.docs[0]);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:895:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:896:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:897:            if (currencyData.decimal_degits) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:898:                decimal_degits = currencyData.decimal_degits;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:899:            }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:900:        });
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:901:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:902:        var user_permissions = '<?php echo 
@session('user_permissions'); ?>';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:904:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:905:        var checkPrintPermission = false;
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:906:        if ($.inArray('orders.print', user_permissions) >= 0) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:907:            checkPrintPermission = true;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:908:        }
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:909:        var geoFirestore = new GeoFirestore(database);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:910:        var place_image = '';
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:911:        var ref_place = 
database.collection('settings').doc("placeHolderImage");
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:912:        ref_place.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:913:
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:914:            var placeHolderImage = getSafeFirestoreData(snapshots);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:915:            place_image = placeHolderImage.image;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:916:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:917:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:918:        });
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:919:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:920:        var orderPaytableAmount = 0;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:921:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:922:        var restaurantRejectedSubject = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:934:        var dineinAcceptedSubject = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:935:        var dineinAcceptedMessage = '';
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:936:        var scheduleOrderSubject = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:937:        var scheduleOrderMessage = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:938:        var storeOrderInTransitSubject = "";
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:939:        var storeOrderInTransitMsg = "";
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:940:        var selfDeliveryOrderAssignSubject = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:941:        var selfDeliveryOrderAssignMsg = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:942:        var selfDeliveryDriverCancelledSub = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:943:        var selfDeliveryDriverCancelledMsg = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:944:        var selfDeliveryCustomerCancelledSub = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:947:        var isSelfDeliveryByVendor = false;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:948:        var singleOrderReceive = false;
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:949:        var refDriverNearBy = 
database.collection('settings').doc("DriverNearBy");
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:950:        refDriverNearBy.get().then(async function(snapshot) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:951:            var data = getSafeFirestoreData(snapshot);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:952:            if (data.singleOrderReceive) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:953:                singleOrderReceive = true;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:954:            }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:955:        })
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:956:        
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:957:        var scheduleOrderAcceptData = {};
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:958:        var scheduleOrderNotificationRef = 
database.collection('settings').doc("scheduleOrderNotification");
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:959:        scheduleOrderNotificationRef.get().then(async 
function(snapshot) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:960:            var data = getSafeFirestoreData(snapshot);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:961:            scheduleOrderAcceptData.notifyTime = data.notifyTime;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:962:            scheduleOrderAcceptData.timeUnit = data.timeUnit;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:963:        })
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:964:        
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:965:        var refGlobal = 
database.collection('settings').doc("globalSettings");
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:966:        refGlobal.get().then(async function(
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:967:            settingSnapshots) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:968:            var settingData = 
getSafeFirestoreData(settingSnapshots);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:969:            if (Object.keys(settingData).length) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:970:                if (settingData.isSelfDelivery) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:971:                    isSelfDeliveryGlobally = true;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:972:                }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:973:            }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:974:        })
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:975:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:976:        let taxBreakdownGrouped = {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:982:        };
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:983:
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:984:        
database.collection('dynamic_notification').get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:985:            if (snapshot.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:986:                snapshot.docs.map(async (listval) => {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:987:                    val = getSafeFirestoreData(listval);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:988:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:989:                    if (val.type == "restaurant_rejected") {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:990:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:991:                        restaurantRejectedSubject = val.subject;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:992:                        restaurantRejectedMessage = val.message;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:993:                    } else if (val.type == "restaurant_accepted") {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:994:                        restaurantAcceptedSubject = val.subject;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:995:                        restaurantAcceptedMessage = val.message;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1014:                        dineinAcceptedMessage = val.message;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1015:                    } else if (val.type == "schedule_order") {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1016:                        scheduleOrderSubject = val.subject;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1017:                        scheduleOrderMessage = val.message;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1018:                    } else if (val.type == "assign_order") {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1019:                        selfDeliveryOrderAssignSubject = 
val.subject;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1020:                        selfDeliveryOrderAssignMsg = val.message;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1021:                    } else if (val.type == "driver_cancelled") {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1022:                        selfDeliveryDriverCancelledSub = 
val.subject;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1023:                        selfDeliveryDriverCancelledMsg = 
val.message;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1024:                    } else if (val.type == 
"restaurant_cancelled") {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1072:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1073:            ref.get().then(async function(snapshots) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1074:                traceOrderEdit('vendor_orders query result', {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1075:                    requestedOrderId: oid != '' ? oid : id,
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1076:                    docsLength: snapshots && snapshots.docs ? 
snapshots.docs.length : 0
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1077:                });
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1078:
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1079:                if ((!snapshots || !snapshots.docs || 
!snapshots.docs.length) && firebase.firestore.FieldPath) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1080:                    var fallbackOrderId = oid != '' ? oid : id;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1081:
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1082:                    snapshots = await 
database.collection('vendor_orders')
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1083:                        
.where(firebase.firestore.FieldPath.documentId(), '==', fallbackOrderId)
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1084:                        .get();
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1085:
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1086:                    traceOrderEdit('vendor_orders document id 
fallback result', {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1087:                        requestedOrderId: fallbackOrderId,
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1088:                        docsLength: snapshots && snapshots.docs ? 
snapshots.docs.length : 0
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1089:                    });
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1090:                }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1091:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1092:                if (!snapshots || !snapshots.docs || 
!snapshots.docs.length) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1093:                    console.warn('Order edit data missing; 
section skipped safely.');
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1094:                    hideOrderEditLoader();
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1095:                    return;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1096:                }
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1097:                vendorOrder = 
getSafeFirestoreData(snapshots.docs[0]);
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1098:                await getDeliverymanList(vendorOrder.vendorID);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1099:                getUserReview(vendorOrder);
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1100:                var order = 
getSafeFirestoreData(snapshots.docs[0]);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1101:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1102:                traceOrderEdit('order shape', {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1103:                    firestoreDocId: snapshots.docs[0] ? 
snapshots.docs[0].id : null,
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1104:                    keys: getObjectKeysSafe(order),
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1105:                    hasAuthor: !!order.author,
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1106:                    authorKeys: getObjectKeysSafe(order.author),
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1107:                    hasAddress: !!order.address,
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1108:                    addressKeys: getObjectKeysSafe(order.address),
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1109:                    hasVendor: !!order.vendor,
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1110:                    vendorKeys: getObjectKeysSafe(order.vendor),
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1111:                    hasVendorID: !!order.vendorID,
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1112:                    hasDriver: !!order.driver,
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1113:                    driverKeys: getObjectKeysSafe(order.driver),
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1114:                    hasProducts: !!order.products,
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1115:                    productsIsArray: 
Array.isArray(order.products),
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1116:                    productsLength: Array.isArray(order.products) 
? order.products.length : 0,
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1117:                    hasCreatedAt: !!order.createdAt,
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1118:                    hasPaymentMethod: !!order.payment_method || 
!!order.paymentMethod,
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1119:                    hasStatus: !!order.status
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1120:                });
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1121:                packagingChargeEnable = 
order.packagingChargeEnable;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1122:                orderCustomerId = order.authorID;
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1123:                database.collection('zone').where('publish', 
'==', true)/* .where('sectionId', '==', order.vendor.section_id) */.orderBy('name', 'asc').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1124:                    snapshots.docs.forEach((listval) => {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1125:                        var data = getSafeFirestoreData(listval);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1126:                        $('#zone').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1127:                            .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1128:                            .text(data.name));
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1129:                    })
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1130:                });
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1131:                
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1132:                if (order.vendor.section_id != undefined && 
order.vendor.section_id != '') {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1133:                    await 
database.collection('sections').doc(order.vendor.section_id).get().then(async function(snapshot) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1134:                        var sectionData = 
getSafeFirestoreData(snapshot);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1135:                        if (!Object.keys(sectionData).length) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1136:                            console.warn('Order edit data 
missing; section skipped safely.');
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1137:                            return;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1138:                        }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1139:                        service_type = 
sectionData.serviceTypeFlag;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1140:                        delivery_enable = 
sectionData.dine_in_active;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1141:                        if (sectionData.adminCommision != null && 
sectionData.adminCommision != '') {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1142:                            if 
(sectionData.adminCommision.enable) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1208:                }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1209:
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1210:                if (order.createdAt) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1211:                    if (order.createdAt._seconds != undefined) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1212:                        var date = new 
Date(order.createdAt._seconds * 1000);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1213:                        var time = 
date.toLocaleTimeString('en-US');
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1214:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1215:                    } else {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1216:                        var date1 = 
order.createdAt.toDate().toString();
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1217:                        var date = new Date(date1);
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1218:                        var time = 
order.createdAt.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1219:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1220:                    }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1221:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1222:                    var dd = String(date.getDate()).padStart(2, 
'0');
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1223:                    var mm = String(date.getMonth() + 
1).padStart(2, '0'); //January is 0!
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1224:                    var yyyy = date.getFullYear();
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1225:                    var createdAt_val = yyyy + '-' + mm + '-' + 
dd;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1226:
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1227:                    $('#createdAt').text(createdAt_val + ' ' + 
time);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1228:                }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1229:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1230:                var payment_method = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1231:                if (order.payment_method) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1232:                    paymentMethod = order.payment_method;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1233:                    if (order.payment_method == "stripe") {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1234:                        image = '{{ 
asset('images/payment/stripe.png') }}';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1235:                        payment_method = '<img alt="image" src="' 
+ image + '" onerror="this.onerror=null;this.src=\'' + place_image + '\'" width="30%" height="30%">';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1306:                    $('#order_type').text('{{ 
trans('lang.order_takeaway') }}');
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1307:                    $('.payment_method').hide();
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1308:                    orderTakeAwayOption = true;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1309:                } else {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1310:                    $('#order_type').text('{{ 
trans('lang.order_delivery') }}');
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1311:                    $('.payment_method').show();
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1312:                }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1313:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1314:                if (service_type != undefined && service_type != 
'' && service_type == "ecommerce-service") {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1315:                    $('#order_placed').hide();
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1316:                    $('#order_accepted').show();
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1347:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1348:                if ((order.driver != '' && order.driver != 
undefined) && (order.takeAway == false)) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1349:                    var route_view = '{{ route('drivers.view', 
':id') }}';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1350:                    route_view = route_view.replace(':id', 
order.driver.id);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1351:                    $('#driver-view').attr('data-url', 
route_view);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1352:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1353:                    
$('#driver_carName').text(order.driver.carName);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1354:                    
$('#driver_carNumber').text(order.driver.carNumber);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1355:                    $('#driver_email').html('<a href="mailto:' + 
order.driver.email + '">' + shortEmail(order.driver.email) + '</a>');
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1356:                    if (order.driver.phoneNumber.includes('+')) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1357:                        $('#driver_phone').text('+' + 
EditPhoneNumber(order.driver.phoneNumber.slice(1)));
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1384:                customername = order.author.firstName;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1385:
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1386:                vendorId = order.vendor.id;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1387:                old_order_status = order.status;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1388:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1389:                userId = order.author.id;
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1390:                order_sectionId = order.section_id;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1391:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1392:                if (order_sectionId != '' && order_sectionId != 
undefined) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1393:                    
database.collection('sections').doc(order_sectionId).get().then(async function(snapshots) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1394:                        var secInfo = 
getSafeFirestoreData(snapshots);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1395:                        if (secInfo != undefined) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1396:                            referralAmount = 
parseFloat(secInfo.referralAmount);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1397:                        }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1398:                    });
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1399:                }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1400:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1401:                if (userId != '' && userId != undefined) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1402:                    
database.collection('referral').doc(userId).get().then(async function(snapshots) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1403:                        var refInfo = 
getSafeFirestoreData(snapshots);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1404:                        if (refInfo != undefined) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1405:                            referralBy = refInfo.referralBy;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1406:                        }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1407:                    });
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1408:                    
database.collection('vendor_orders').where('author.id', '==', userId).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1409:                        if (snapshots.docs.length == 1) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1410:                            add_reff_amount = true;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1411:                        }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1412:                    });
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1413:                }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1414:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1415:                if (order.payment_shared != undefined) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1416:                    payment_shared = order.payment_shared;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1457:                var price = 0;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1458:
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1459:                if (order.vendorID) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1460:                    var vendor = 
database.collection('vendors').where("id", "==", order.vendorID);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1461:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1462:                    await vendor.get().then(async 
function(snapshotsnew) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1463:                        if (snapshotsnew.docs.length > 0) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1464:                            var vendordata = 
getSafeFirestoreData(snapshotsnew.docs[0]);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1465:                            if 
(vendordata.hasOwnProperty('isSelfDelivery') && vendordata.isSelfDelivery) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1466:                                isSelfDeliveryByVendor = true;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1467:                            }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1468:                            if (subscriptionModel || 
commissionModel) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1469:                                if 
(vendordata.hasOwnProperty('subscriptionTotalOrders') &&
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1470:                                    
vendordata.subscriptionTotalOrders != null && vendordata
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1471:                                    .subscriptionTotalOrders != 
'') {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1472:                                    subscriptionTotalOrders = 
vendordata
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1473:                                        .subscriptionTotalOrders;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1474:                                }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1475:                            }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1476:                            if (vendordata.id) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1477:                                var route_view = '{{ 
route('stores.view', ':id') }}';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1478:                                route_view = 
route_view.replace(':id', vendordata.id);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1479:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1480:                                
$('#resturant-view').attr('data-url', route_view);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1481:                            }
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1549:                    var ra_html = '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1550:                    snapshots.docs.forEach((listval) => {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1551:                        var data = getSafeFirestoreData(listval);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1552:                        ra_html += '<div class="row"><div 
class="form-check width-100" style="padding-left: 19.25rem;">';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1553:                        var checked = $.inArray(data.id, 
order.review_attributes) !== -1 ? 'checked' : '';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1554:                        ra_html += '<input type="checkbox" 
id="review_attribute_' + data.id + '" value="' + data.id + '" ' + checked + '>';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1555:                        ra_html += '<label class="col-3 
control-label" for="review_attribute_' + data.id + '">' + data.title + '</label>';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1556:                        ra_html += '</div></div>';
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1557:                    })
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1558:                    $('#review_attributes').html(ra_html);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1559:                })
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1561:
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1562:            })
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1563:            async function getDeliverymanList(vendorID) {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1564:                database.collection('users').where('role', '==', 
'driver').where('vendorID', '==', vendorID).where('isActive', '==', true).get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1565:                    if (snapshot.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1566:                        snapshot.docs.forEach((listval) => {
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1567:                            var data = 
getSafeFirestoreData(listval);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1568:                            if (singleOrderReceive) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1569:                                let option = 
$("<option></option>")
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1570:                                    .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1571:                                    .attr("fcm", data.fcmToken);
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1572:                                if 
(data.hasOwnProperty('inProgressOrderID') &&
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1573:                                    data.inProgressOrderID !== 
null &&
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1574:                                    data.inProgressOrderID !== '' 
&&
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1575:                                    data.inProgressOrderID.length 
> 0) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1625:                    return false;
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1626:                }
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1627:                if (isSelfDeliveryByVendor && 
isSelfDeliveryGlobally && !orderTakeAwayOption) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1628:                    var deliveryman = 
$('#deliveryman_list').val();
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1629:                    var orderRequestData = [];
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1630:                    var inProgressOrderID = [];
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1631:                    var driverData = '';
> C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1632:                    await 
database.collection('users').where('id', '==', deliveryman).get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\orders\edit.blade.php:1633:                        if (snapshot.docs.length > 0) {




### CANDIDATE_FILE: resources\views\orders\index.blade.php
SCORE: 25
TAGS: vendors,sections,orders,firebase.firestore,.collection,.set,.add,.update,createdAt,zoneId
MATCHES:

  C:\deploy\adminpanel\resources\views\orders\index.blade.php:64:                            <ul>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:65:                                <li>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:66:                                    <a href="{{ 
route('drivers.view', $_GET['driverId']) }}"><i class="ri-list-indefinite"></i>{{ trans('lang.tab_basic') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:67:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:68:                                <li class="vehicle_tab" 
style="display:none">
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:69:                                    <a href="{{ 
route('drivers.vehicle', $_GET['driverId']) }}"><i class="ri-car-line"></i>{{ trans('lang.vehicle') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:70:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:71:                                <li class="active">
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:72:                                    <a href="{{ route('orders', 
'driverId=' . $_GET['driverId']) }}"><i class="ri-shopping-bag-line"></i> {{ trans('lang.order_plural') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:73:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:74:                                <li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:75:                                    <a href="{{ 
route('driver.payouts', $_GET['driverId']) }}"><i class="ri-bank-card-line"></i>{{ trans('lang.tab_payouts') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:76:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:77:                                <li>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:78:                                    <a href="{{ 
route('payoutRequests.drivers.view', $_GET['driverId']) }}" class="vendor_payout"><i class="ri-refund-line"></i>{{ 
trans('lang.tab_payout_request') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:79:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:80:                                <li>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:81:                                    <a href="{{ 
route('users.walletstransaction', $_GET['driverId']) }}" class="wallet_transaction"><i class="ri-wallet-line"></i>{{ 
trans('lang.wallet_transaction') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:82:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:83:                            </ul>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:84:                        </div>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:85:                        <?php } ?>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:86:                        <?php if (isset($_GET['userId'])) { ?>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:87:                        <div class="menu-tab">
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:88:                            <ul>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:89:                                <li><a href="{{ 
route('users.view', $_GET['userId']) }}"><i class="ri-list-indefinite"></i>{{ trans('lang.tab_basic') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:90:                                </li>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:91:                                <li class="active"><a href="{{ 
route('orders', 'userId=' . $_GET['userId']) }}"><i class="ri-shopping-bag-line"></i>{{ trans('lang.tab_orders') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:92:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:93:                                <li>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:94:                                    <a href="{{ 
route('users.walletstransaction', $_GET['userId']) }}"><i class="ri-wallet-line"></i>{{ trans('lang.wallet_transaction') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:95:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:96:                            </ul>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:97:                        </div>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:98:                        <?php } ?>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:99:                        <div class="menu-tab vendorMenuTab d-none">
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:100:                            <ul>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:101:                                <li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:102:                                    <a href="{{ 
route('stores.view', $id) }}"><i class="ri-list-indefinite"></i>{{ trans('lang.tab_basic') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:103:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:104:                                <li>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:105:                                    <a href="{{ 
route('vendors.items', $id) }}"><i class="ri-shopping-basket-fill"></i>{{ trans('lang.tab_items') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:106:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:107:                                <li class="active">
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:108:                                    <a href="{{ 
route('vendors.orders', $id) }}"><i class="ri-shopping-bag-line"></i> {{ trans('lang.tab_orders') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:109:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:110:                                <li>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:111:                                    <a href="{{ 
route('vendors.reviews', $id) }}"><i class="ri-shield-star-fill"></i>{{ trans('lang.tab_reviews') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:112:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:113:                                <li>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:114:                                    <a href="{{ 
route('vendors.coupons', $id) }}"><i class="ri-discount-percent-fill"></i>{{ trans('lang.tab_promos') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:115:                                <li>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:116:                                    <a href="{{ 
route('vendors.payout', $id) }}"><i class="ri-bank-card-line"></i>{{ trans('lang.tab_payouts') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:117:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:118:                                <li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:119:                                    <a href="{{ 
route('payoutRequests.vendor.view', $id) }}"><i class="ri-refund-line"></i>{{ trans('lang.tab_payout_request') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:120:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:121:                                <li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:122:                                    <a 
class="wallet_transaction_vendor"><i class="ri-wallet-line"></i>{{ trans('lang.wallet_transaction') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:123:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:124:                                <li class="dine_in_future" 
style="display:none;">
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:125:                                    <a href="{{ 
route('vendors.booktable', $id) }}"><i class="ri-restaurant-line"></i>{{ trans('lang.dine_in_booking_history') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:126:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:127:                                <?php
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:128:                                $subscription = 
route('subscription.subscriptionPlanHistory', ':id');
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:129:                                $subscription = 
str_replace(':id', 'storeID=' . $id, $subscription);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:130:                                ?>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:131:                                <li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:132:                                    <a href="{{ $subscription 
}}"><i class="ri-chat-history-fill"></i>{{ trans('lang.subscription_history') }}</a>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:133:                                </li>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:152:                                                        <div 
class="card-box-with-content">
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:153:                                                            <h4 
class="text-dark-2 mb-1 h4 order_count" id="order_count"></h4>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:154:                                                            <p 
class="mb-0 small text-dark-2">{{ trans('lang.dashboard_total_orders') }}</p>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:155:                                                        </div>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:156:                                                        <span 
class="box-icon ab"><img src="{{ asset('images/total_orders.png') }}"></span>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:157:                                                    </div>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:158:                                                </div>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:159:                                            </div>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:160:                                            <div class="col-md-3">
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:161:                                                <div class="card 
card-box-with-icon bg--5">
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:162:                                                    <div 
class="card-body d-flex justify-content-between align-items-center">
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:163:                                                        <div 
class="card-box-with-content">
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:164:                                                            <h4 
class="text-dark-2 mb-1 h4 placed_count" id="placed_count"></h4>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:212:                                        <thead>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:213:                                            <tr>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:214:                                                <?php if 
(in_array('orders.delete', json_decode(@session('user_permissions'), true))) { ?>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:215:                                                <th 
class="delete-all"><input type="checkbox" id="is_active"><label class="col-3 control-label" for="is_active"><a id="deleteAll" 
class="do_not_delete" href="javascript:void(0)"><i class="mdi mdi-delete"></i> {{ trans('lang.all') }}</a></label></th>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:216:                                                <?php } ?>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:217:                                                <th>{{ 
trans('lang.order_id') }}</th>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:218:                                                
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:219:                                                @if($id == '')
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:220:                                                    <th>{{ 
trans('lang.vendor') }}</th>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:221:                                                @endif
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:222:                                                
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:240:                                                
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:241:                                                <th>{{ 
trans('lang.date') }}</th>
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:242:                                                <th>{{ 
trans('lang.vendors_payout_amount') }}</th>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:243:                                                <th>{{ 
trans('lang.order_type') }}</th>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:244:                                                <th>{{ 
trans('lang.order_order_status_id') }}</th>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:245:                                                <th>{{ 
trans('lang.actions') }}</th>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:246:                                            </tr>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:247:                                        </thead>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:248:                                        <tbody id="append_list1">
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:249:                                        </tbody>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:250:                                    </table>
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:287:    <script type="text/javascript">
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:288:
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:289:        var section_id = getCookie('section_id') || null;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:290:        var service_type = getCookie('service_type') || null;    
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:291:        
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:292:        var user_permissions = '<?php echo 
@session('user_permissions'); ?>';
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:293:        user_permissions = 
Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:294:        var checkDeletePermission = false;
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:295:        if ($.inArray('orders.delete', user_permissions) >= 0) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:296:            checkDeletePermission = true;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:297:        }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:298:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:299:        if (!window.firebaseClientReady || !window.firebaseDb) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:300:            console.warn('Firebase client is not ready. Please 
check Firebase configuration.');
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:301:        } else {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:302:        var database = window.firebaseDb;
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:303:        var refData = database.collection('vendor_orders');
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:304:        if (section_id) {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:305:            refData = refData.where('section_id', '==', 
section_id);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:306:        }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:307:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:308:        var append_list = '';
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:309:        var currentCurrency = '';
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:310:        var currencyAtRight = false;
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:311:        var refCurrency = 
database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:312:        
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:313:        var decimal_degits = 0;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:314:        refCurrency.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:315:            var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:316:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:317:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:318:            if (currencyData.decimal_degits) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:319:                decimal_degits = currencyData.decimal_degits;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:324:        user_permissions = 
Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:325:        var checkPrintPermission = false;
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:326:        if ($.inArray('orders.print', user_permissions) >= 0) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:327:            checkPrintPermission = true;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:328:        }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:329:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:330:        var order_status = jQuery('#order_status').val();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:331:        var search = jQuery("#search").val();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:332:        
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:333:        var vendorID = "{{ $id }}";
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:334:        var userID = "{{ request()->get('userId', '') }}";
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:335:        var driverID = "{{ request()->get('driverId', '') }}";
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:336:        
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:337:        var ref = '';
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:338:        $(document.body).on('change', '#order_status', function() 
{
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:339:            order_status = jQuery(this).val();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:340:        });
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:341:        $(document.body).on('keyup', '#search', function() {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:346:            
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:347:            const getUserName = getUserNameFunction(userID);
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:348:            ref = refData.orderBy('createdAt', 
'desc').where('authorID', '==', userID);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:349:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:350:        } else if (driverID) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:351:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:352:            const getUserName = getUserNameFunction(driverID);
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:353:            var wallet_route = "{{ 
route('users.walletstransaction', 'id') }}";
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:354:            $(".wallet_transaction").attr("href", 
wallet_route.replace('id', 'driverID=' + driverID));
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:355:            
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:356:            if(service_type !== 'delivery-service' && 
service_type !== 'parcel_delivery'){
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:357:                $('.vehicle_tab').show();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:358:            }else{
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:359:                $('.vehicle_tab').hide();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:360:            }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:361:
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:362:            ref = refData.orderBy('createdAt', 
'desc').where('driverID', '==', driverID);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:363:
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:364:        } else if (vendorID != '') {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:365:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:366:            $('.vendorMenuTab').removeClass('d-none');
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:367:            const getStoreName = getStoreNameFunction(vendorID);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:368:            
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:369:            ref = refData.orderBy('createdAt', 
'desc').where('vendorID', '==', vendorID);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:370:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:371:        } else {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:372:            
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:373:            ref = refData.orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:374:        }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:375:
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:376:        const sectionsRef = 
window.firebaseDb.collection('sections');
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:377:        $('.status_selector').select2({
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:378:            placeholder: '{{ trans('lang.status') }}',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:379:            minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:380:            allowClear: true
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:381:        });
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:382:        $('.order_type_selector').select2({
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:383:            placeholder: '{{ trans('lang.order_type') }}',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:384:            minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:417:        setDate();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:418:        
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:419:        var initialRef = database.collection('vendor_orders');
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:420:        
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:421:        $('select').change(async function() {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:422:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:423:            var status = $('.status_selector').val();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:424:            var orderType = $('.order_type_selector').val();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:425:            var daterangepicker = 
$('#daterange').data('daterangepicker');
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:426:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:427:            var refData = initialRef;  
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:429:                refData = refData.where('status', '==', status);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:430:            }
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:431:            if (section_id) {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:432:                refData = refData.where('section_id', '==', 
section_id);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:433:            }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:434:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:435:            if (orderType) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:436:                refData = (orderType == 'takeaway')
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:437:                    ? refData.where('takeAway', '==', true)
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:438:                    : refData.where('takeAway', '==', false);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:439:            }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:440:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:442:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:443:                var from = 
moment(daterangepicker.startDate).toDate();
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:444:                var to = moment(daterangepicker.endDate).add(1, 
'day').toDate(); // FIX
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:445:
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:446:                var fromDate = 
firebase.firestore.Timestamp.fromDate(from);
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:447:                var toDate = 
firebase.firestore.Timestamp.fromDate(to);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:448:
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:449:                refData = refData.where('createdAt', '>=', 
fromDate);
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:450:                refData = refData.where('createdAt', '<', 
toDate); // FIX
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:451:            }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:452:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:453:            ref = refData;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:454:            $('#orderTable').DataTable().ajax.reload(null, false);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:455:        });
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:456:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:457:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:458:        $(function () {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:520:                
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:521:                var columns = [];
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:522:                if (vendorID != '') {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:523:                    columns = [
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:524:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:525:                            key: 'id',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:526:                            header: "{{ trans('lang.order_id') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:527:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:528:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:529:                            key: 'driverName',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:530:                            header: "{{ 
trans('lang.driver_plural') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:535:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:536:                        {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:537:                            key: 'createdAt',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:538:                            header: "{{ trans('lang.date') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:539:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:540:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:541:                            key: 'amount',
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:542:                            header: "{{ 
trans('lang.vendors_payout_amount') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:543:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:544:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:545:                            key: 'orderType',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:546:                            header: "{{ trans('lang.order_type') 
}}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:547:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:548:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:549:                            key: 'status',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:550:                            header: "{{ 
trans('lang.order_order_status_id') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:566:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:567:                        {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:568:                            key: 'createdAt',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:569:                            header: "{{ trans('lang.date') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:570:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:571:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:572:                            key: 'amount',
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:573:                            header: "{{ 
trans('lang.vendors_payout_amount') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:574:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:575:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:576:                            key: 'orderType',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:577:                            header: "{{ trans('lang.order_type') 
}}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:578:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:579:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:580:                            key: 'status',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:581:                            header: "{{ 
trans('lang.order_order_status_id') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:597:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:598:                        {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:599:                            key: 'createdAt',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:600:                            header: "{{ trans('lang.date') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:601:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:602:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:603:                            key: 'amount',
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:604:                            header: "{{ 
trans('lang.vendors_payout_amount') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:605:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:606:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:607:                            key: 'orderType',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:608:                            header: "{{ trans('lang.order_type') 
}}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:609:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:610:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:611:                            key: 'status',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:612:                            header: "{{ 
trans('lang.order_order_status_id') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:632:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:633:                        {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:634:                            key: 'createdAt',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:635:                            header: "{{ trans('lang.date') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:636:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:637:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:638:                            key: 'amount',
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:639:                            header: "{{ 
trans('lang.vendors_payout_amount') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:640:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:641:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:642:                            key: 'orderType',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:643:                            header: "{{ trans('lang.order_type') 
}}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:644:                        },
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:645:                        {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:646:                            key: 'status',
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:647:                            header: "{{ 
trans('lang.order_order_status_id') }}"
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:657:                if (service_type === "ecommerce-service") {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:658:                    if (checkDeletePermission) {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:659:                        if (vendorID !== "") dateIndex = 3;
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:660:                        else if (vendorID !== "" || driverID || 
userID) dateIndex = 3;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:661:                        else dateIndex = 4;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:662:                    } else {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:663:                        if (vendorID !== "") dateIndex = 2;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:664:                        else if (driverID || userID) dateIndex = 
2;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:665:                        else dateIndex = 3;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:666:                    }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:667:                } else {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:668:                    if (checkDeletePermission) {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:669:                        if (vendorID !== "") dateIndex = 4;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:670:                        else if (driverID || userID) dateIndex = 
4;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:671:                        else dateIndex = 5;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:672:                    } else {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:673:                        if (vendorID !== "") dateIndex = 3;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:674:                        else if (driverID || userID) dateIndex = 
3;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:675:                        else dateIndex = 4;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:676:                    }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:677:                }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:678:                
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:679:                var nonOrderableTargets = [];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:680:                if (service_type === "ecommerce-service") {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:681:                    if (vendorID !== "") {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:682:                        nonOrderableTargets = 
checkDeletePermission ? [0, 6, 7] : [5, 6];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:683:                    } else if (driverID || userID) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:684:                        nonOrderableTargets = 
checkDeletePermission ? [0, 6, 7] : [5, 6];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:685:                    } else {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:686:                        nonOrderableTargets = 
checkDeletePermission ? [0, 7, 8] : [6, 7];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:687:                    }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:688:                } else {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:689:                    if (vendorID !== "") {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:690:                        nonOrderableTargets = 
checkDeletePermission ? [0, 7, 8] : [6, 7];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:691:                    } else if (driverID || userID) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:692:                        nonOrderableTargets = 
checkDeletePermission ? [0, 7, 8] : [6, 7];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:693:                    } else {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:694:                        nonOrderableTargets = 
checkDeletePermission ? [0, 8, 9] : [7, 8];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:695:                    }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:696:                }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:697:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:711:                        var orderableColumns = [];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:712:                        if(service_type == "ecommerce-service"){
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:713:                            if (vendorID != '') {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:714:                                orderableColumns = 
(checkDeletePermission) ? ['', 'id', 'clientName', 'createdAt', 'amount', 'orderType', 'status', ''] : ['id', 'clientName', 
'createdAt', 'amount', 'orderType', 'status', '']; 
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:715:                            } else if (driverID) {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:716:                                orderableColumns = 
(checkDeletePermission) ? ['', 'id', 'storeName', 'clientName', 'createdAt', 'amount', 'orderType', 'status', ''] : ['id', 
'storeName',  'clientName', 'createdAt', 'amount', 'orderType', 'status', '']; 
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:717:                            } else if (userID) {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:718:                                orderableColumns = 
(checkDeletePermission) ? ['', 'id', 'storeName', 'createdAt', 'amount', 'orderType', 'status', ''] : ['id', 'storeName', 
'createdAt', 'amount', 'orderType', 'status', ''];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:719:                            } else {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:720:                                orderableColumns = 
(checkDeletePermission) ? ['', 'id', 'storeName', 'clientName', 'createdAt', 'amount', 'orderType', 'status', ''] : ['id', 
'storeName', 'clientName', 'createdAt', 'amount', 'orderType', 'status', ''];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:721:                            }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:722:                        }else{
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:723:                            if (vendorID != '') {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:724:                                orderableColumns = 
(checkDeletePermission) ? ['', 'id', 'driverName', 'clientName', 'createdAt', 'amount', 'orderType', 'status', ''] : ['id', 
'driverName', 'clientName', 'createdAt', 'amount', 'orderType', 'status', '']; 
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:725:                            } else if (driverID) {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:726:                                orderableColumns = 
(checkDeletePermission) ? ['', 'id', 'storeName', 'clientName', 'createdAt', 'amount', 'orderType', 'status', ''] : ['id', 
'storeName',  'clientName', 'createdAt', 'amount', 'orderType', 'status', '']; 
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:727:                            } else if (userID) {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:728:                                orderableColumns = 
(checkDeletePermission) ? ['', 'id', 'storeName', 'driverName', 'createdAt', 'amount', 'orderType', 'status', ''] : ['id', 
'storeName', 'driverName', 'createdAt', 'amount', 'orderType', 'status', ''];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:729:                            } else {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:730:                                orderableColumns = 
(checkDeletePermission) ? ['', 'id', 'storeName',  'driverName', 'clientName', 'createdAt', 'amount', 'orderType', 'status', ''] : 
['id', 'storeName', 'driverName', 'clientName', 'createdAt', 'amount', 'orderType', 'status', ''];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:731:                            }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:732:                        }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:733:                        
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:734:                        const orderByField = 
orderableColumns[orderColumnIndex]; 
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:735:                        if (searchValue.length >= 3 || 
searchValue.length === 0) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:736:                            $('#data-table_processing').show();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:737:                        }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:738:
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:741:                            if (querySnapshot.empty) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:742:                                $('.total_count').text(0);
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:743:                                console.error("No data found in 
Firestore.");
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:744:                                
$('#data-table_processing').hide(); // Hide loader
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:745:                                callback({
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:746:                                    draw: data.draw,
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:747:                                    recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:748:                                    recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:749:                                    data: [] // No data
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:750:                                });
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:751:                                return;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:755:                            let sectionNames = {};
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:756:                            // Fetch section names
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:757:                            const sectionDocs = await 
sectionsRef.get();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:758:                            sectionDocs.forEach(doc => {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:759:                                sectionNames[doc.id] = 
doc.data().name;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:760:                            });
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:761:                            querySnapshot.docs.map(async doc => {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:762:                                let childData = doc.data();
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:763:                                childData.id = doc.id; // Ensure 
the document ID is included in the data
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:764:                                childData.sectionName = 
sectionNames[childData.section_id] || 'N/A';
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:765:                                var driverName = '';
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:766:                                if 
(childData.hasOwnProperty("driver") && childData.driver != null) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:767:                                    var driverId = 
childData.driver.id;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:768:                                    driverName = 
childData.driver.firstName + ' ' + childData.driver.lastName;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:769:                                    childData.driverName = 
driverName;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:770:                                }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:771:                                if 
(childData.hasOwnProperty('vendor') && childData.vendor != null) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:772:                                    childData.storeName = 
childData.vendor.title;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:786:                                    var date = '';
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:787:                                    var time = '';
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:788:                                    if 
(childData.hasOwnProperty("createdAt")) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:789:                                        try {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:790:                                            var 
formattedCreatedAt = formatOrderDateValue(childData.createdAt);
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:791:                                            date = 
formattedCreatedAt.date;
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:792:                                            time = 
formattedCreatedAt.time;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:793:                                        } catch (err) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:794:                                        }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:795:                                    }
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:796:                                    var createdAt = date + '<br> 
' + time;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:797:                                    if (
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:798:                                        (childData.id && 
childData.id.toString().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:799:                                        (childData.storeName && 
childData.storeName.toLowerCase().toString().includes(searchValue))/*  ||
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:800:                                        (childData.sectionName && 
childData.sectionName.toString().includes(searchValue)) */ ||
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:801:                                        (childData.driverName && 
childData.driverName.toString().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:802:                                        (childData.clientName && 
childData.clientName.toString().includes(searchValue)) ||
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:803:                                        (createdAt && 
createdAt.toString().toLowerCase().indexOf(searchValue) > -1) ||
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:804:                                        (childData.orderType && 
childData.orderType.toLowerCase().toString().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:805:                                        (childData.status && 
childData.status.toLowerCase().toString().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:806:                                        (childData.amount && 
childData.amount.toString().toLowerCase().includes(searchValue))
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:807:                                    ) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:808:                                        
filteredRecords.push(childData);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:809:                                    }
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:810:                                } else {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:811:                                    
filteredRecords.push(childData);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:815:                                let aValue = a[orderByField];
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:816:                                let bValue = b[orderByField];
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:817:                                if (orderByField === 'createdAt' 
&& a[orderByField] != '' && b[orderByField] != '' && a[orderByField] != null && b[orderByField] != null) {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:818:                                    aValue = 
normalizeOrderDateValue(a[orderByField]);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:819:                                    bValue = 
normalizeOrderDateValue(b[orderByField]);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:820:                                } else if (orderByField === 
'amount') {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:821:                                    aValue = a[orderByField] ? 
parseFloat(String(a[orderByField]).replace(/[^0-9.]/g, '')) || 0 : 0;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:822:                                    bValue = b[orderByField] ? 
parseFloat(String(b[orderByField]).replace(/[^0-9.]/g, '')) || 0 : 0;
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:823:                                } else {
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:824:                                    aValue = a[orderByField] ? 
a[orderByField].toString().toLowerCase().trim() : '';
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:825:                                    bValue = b[orderByField] ? 
b[orderByField].toString().toLowerCase().trim() : ''
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:848:                            callback({
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:849:                                draw: data.draw,
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:850:                                recordsTotal: totalRecords, // 
Total number of records in Firestore
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:851:                                recordsFiltered: totalRecords, // 
Number of records after filtering (if any)
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:852:                                filteredData: filteredRecords,
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:853:                                data: records // The actual data 
to display in the table
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:854:                            });
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:855:                        }).catch(function(error) {
> C:\deploy\adminpanel\resources\views\orders\index.blade.php:856:                            console.error("Error fetching data 
from Firestore:", error);
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:857:                            $('#data-table_processing').hide(); 
// Hide loader
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:858:                            callback({
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:859:                                draw: data.draw,
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:860:                                recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:861:                                recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:862:                                data: [] // No data due to error
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:863:                            });
  C:\deploy\adminpanel\resources\views\orders\index.blade.php:864:                        });




### CANDIDATE_FILE: resources\views\orders\owner_index.blade.php
SCORE: 15
TAGS: vendors,sections,orders,firebase.firestore,.collection,createdAt
MATCHES:

  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:63:                                </li>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:64:                                <li class="active">
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:65:                                    <a 
href="{{route('orders.owner',$id)}}"><i class="ri-shopping-bag-line"></i>{{trans('lang.order_plural')}}</a>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:66:                                </li>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:67:                                <li>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:68:                                    <a 
href="{{route('owners.payouts',$id)}}" class="payout"><i class="ri-bank-card-line"></i>{{trans('lang.tab_payouts')}}</a>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:69:                                </li>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:70:                                <li>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:71:                                    <a 
href="{{route('payoutRequests.owners.view',$id)}}" class="vendor_payout"><i 
class="ri-refund-line"></i>{{trans('lang.tab_payout_request')}}</a>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:72:                                </li>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:73:                                <li>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:93:                                        <thead>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:94:                                            <tr>
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:95:                                                <?php if 
(in_array('orders.delete', json_decode(@session('user_permissions'), true))) { ?>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:96:                                                <th 
class="delete-all"><input type="checkbox" id="is_active"><label class="col-3 control-label" for="is_active"><a id="deleteAll" 
class="do_not_delete" href="javascript:void(0)"><i class="mdi mdi-delete"></i> {{ trans('lang.all') }}</a></label></th>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:97:                                                <?php } ?>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:98:                                                <th>{{ 
trans('lang.order_id') }}</th>   
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:99:                                                <th>{{ 
trans('lang.section') }}</th>         
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:100:                                                <th>{{ 
trans('lang.driver_name') }}</th>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:101:                                                <th>{{ 
trans('lang.order_user_id') }}</th>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:102:                                                <th>{{ 
trans('lang.date') }}</th>
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:103:                                                <th>{{ 
trans('lang.vendors_payout_amount') }}</th>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:104:                                                <th>{{ 
trans('lang.order_type') }}</th>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:105:                                                <th>{{ 
trans('lang.order_order_status_id') }}</th>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:106:                                                <th>{{ 
trans('lang.actions') }}</th>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:107:                                            </tr>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:108:                                        </thead>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:109:                                        <tbody 
id="append_list1">
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:110:                                        </tbody>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:111:                                    </table>
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:123:    <script type="text/javascript">
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:124:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:125:        var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:126:        var service_type = getCookie('service_type') || '';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:127:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:128:        var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:129:        var user_permissions = '<?php echo 
@session('user_permissions'); ?>';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:130:        user_permissions = 
Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:131:        
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:132:        var checkDeletePermission = false;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:133:        var checkPrintPermission = false;
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:134:        if ($.inArray('orders.delete', user_permissions) >= 
0) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:135:            checkDeletePermission = true;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:136:        }
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:137:        if ($.inArray('orders.print', user_permissions) >= 
0) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:138:            checkPrintPermission = true;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:139:        }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:140:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:141:        var decimal_degits = 0;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:142:        var append_list = '';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:143:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:144:        var currentCurrency = '';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:145:        var currencyAtRight = false;
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:146:        var refCurrency = 
database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:147:        refCurrency.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:148:            var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:149:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:150:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:151:            if (currencyData.decimal_degits) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:152:                decimal_degits = 
currencyData.decimal_degits;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:153:            }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:154:        });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:155:        
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:156:        var vendorID = "{{ $id }}";
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:157:        var orderStatus = "{{ request()->get('status', '') 
}}";
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:158:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:159:        const sectionsRef = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:160:        $('.status_selector').select2({
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:161:            placeholder: '{{ trans('lang.status') }}',
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:162:            minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:163:            allowClear: true
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:164:        });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:165:        
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:166:        $('.allModules').select2({
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:167:            placeholder: "{{ trans('lang.select') }} {{ 
trans('lang.section_plural') }}",
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:200:            $('#data-table_processing').show();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:201:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:202:            const getUserName = 
getUserNameFunction(vendorID);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:203:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:204:            const ownedDriversSnapshot = await 
database.collection('users').where('role', '==', 'driver').where('ownerId', '==', vendorID).get();
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:205:            const ownedDriverIds = 
ownedDriversSnapshot.docs.map(doc => doc.data().id);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:206:            if (ownedDriverIds.length === 0) {
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:207:                console.log("No drivers found");
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:208:                return;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:209:            }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:210:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:211:            function chunkArray(arr, size = 10) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:212:                const result = [];
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:213:                for (let i = 0; i < arr.length; i += size) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:214:                    result.push(arr.slice(i, i + size));
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:215:                }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:218:            const driverChunks = chunkArray(ownedDriverIds);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:219:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:220:            async function 
getOrdersFromCollection(collectionName) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:221:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:222:                const status = $('.status_selector').val();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:223:                const daterange = 
$('#daterange').data('daterangepicker');
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:224:                
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:225:                let orders = [];
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:226:                for (const chunk of driverChunks) {
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:227:                    let colRef = 
database.collection(collectionName);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:228:                    if(status){
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:229:                        colRef = colRef.where('status', 
'==', status);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:230:                    }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:231:                    if(daterange && $('#daterange 
span').html() !== '{{ trans('lang.select_range') }}'){
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:232:                        const from = 
firebase.firestore.Timestamp.fromDate(daterange.startDate.toDate());
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:233:                        const to   = 
firebase.firestore.Timestamp.fromDate(daterange.endDate.toDate());
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:234:                        colRef = colRef.where('createdAt', 
'>=', from).where('createdAt', '<=', to);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:235:                    }
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:236:                    colRef = colRef.where('driverId', 'in', 
chunk).orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:237:                    const snapshot = await colRef.get();;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:238:                    
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:239:                    snapshot.docs.forEach(doc => {
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:240:                        orders.push({ 
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:241:                            id: doc.id,
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:242:                            ...doc.data(),
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:243:                            collection: collectionName
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:244:                        });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:245:                    });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:246:                }
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:247:                return orders;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:248:            }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:249:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:250:            var rides  = await 
getOrdersFromCollection('rides');
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:251:            var rental = await 
getOrdersFromCollection('rental_orders');
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:252:            var parcel = await 
getOrdersFromCollection('parcel_orders');
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:253:            var allOrders = [...rides, ...rental, 
...parcel];
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:254:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:255:            $('select').change(async function() {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:256:                $("#data-table_processing").show();
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:257:                rides  = await 
getOrdersFromCollection('rides');
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:258:                rental = await 
getOrdersFromCollection('rental_orders');
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:259:                parcel = await 
getOrdersFromCollection('parcel_orders');
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:260:                allOrders = [...rides, ...rental, 
...parcel];
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:261:                
$('#orderTable').DataTable().ajax.reload(null, false);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:262:                $("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:263:            });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:264:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:265:            $('#daterange').on('apply.daterangepicker 
cancel.daterangepicker', async function() {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:266:                $("#data-table_processing").show();
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:267:                rides  = await 
getOrdersFromCollection('rides');
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:268:                rental = await 
getOrdersFromCollection('rental_orders');
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:269:                parcel = await 
getOrdersFromCollection('parcel_orders');
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:270:                allOrders = [...rides, ...rental, 
...parcel];
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:271:                
$('#orderTable').DataTable().ajax.reload(null, false);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:272:                $("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:273:            });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:274:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:275:            $(document.body).on('click', '.redirecttopage', 
function() {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:276:                var url = $(this).attr('data-url');
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:277:                window.location.href = url;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:278:            });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:311:                },
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:312:                {
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:313:                    key: 'createdAt',
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:314:                    header: "{{ trans('lang.date') }}"
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:315:                },
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:316:                {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:317:                    key: 'amount',
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:318:                    header: "{{ 
trans('lang.vendors_payout_amount') }}"
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:319:                },
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:320:                {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:321:                    key: 'orderType',
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:322:                    header: "{{ trans('lang.order_type') }}"
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:323:                },
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:324:                {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:325:                    key: 'status',
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:326:                    header: "{{ 
trans('lang.order_order_status_id') }}"
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:344:                    const orderDirection = 
data.order[0].dir;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:345:                    
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:346:                    var orderableColumns = 
(checkDeletePermission) ? ['', 'id', 'sectionName', 'driverName', 'clientName', 'createdAt', 'amount', 'orderType', 'status', ''] : 
['id', 'sectionName', 'driverName', 'clientName', 'createdAt', 'amount', 'orderType', 'status', '']; // Ensure this matches the 
actual column names
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:347:                    
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:348:                    const orderByField = 
orderableColumns[orderColumnIndex]; // Adjust the index to match your table
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:349:                    if (searchValue.length >= 3 || 
searchValue.length === 0) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:350:                        $('#data-table_processing').show();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:351:                    }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:352:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:353:                    if (!allOrders || allOrders.length === 
0) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:354:                        $('.total_count').text(0);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:355:                        $('#data-table_processing').hide();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:356:                        callback({
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:357:                            draw: data.draw,
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:358:                            recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:359:                            recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:360:                            data: []
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:361:                        });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:368:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:369:                    // Load section names (same as old code)
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:370:                    const sectionDocs = await 
sectionsRef.get();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:371:                    sectionDocs.forEach(doc => {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:372:                        sectionNames[doc.id] = 
doc.data().name;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:373:                    });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:374:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:375:                    allOrders.map(childData => {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:376:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:377:                        childData.sectionName = 
sectionNames[childData.sectionId] || 'N/A';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:378:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:379:                        var driverName = '';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:380:                        if 
(childData.hasOwnProperty("driver") && childData.driver != null) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:381:                            driverName = 
childData.driver.firstName + ' ' + childData.driver.lastName;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:382:                            childData.driverName = 
driverName;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:383:                        }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:406:                            var time = '';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:407:                            try {
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:408:                                if (childData.createdAt) {
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:409:                                    date = 
childData.createdAt.toDate().toDateString();
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:410:                                    time = 
childData.createdAt.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:411:                                }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:412:                            } catch (err) {}
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:413:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:414:                            var createdAt = date + '<br> ' 
+ time;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:415:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:416:                            if (
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:417:                                (childData.id && 
childData.id.toString().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:418:                                (childData.sectionName && 
childData.sectionName.toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:419:                                (childData.driverName && 
childData.driverName.toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:420:                                (childData.clientName && 
childData.clientName.toLowerCase().includes(searchValue)) ||
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:421:                                (createdAt && 
createdAt.toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:422:                                (childData.orderType && 
childData.orderType.toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:423:                                (childData.status && 
childData.status.toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:424:                                (childData.amount && 
childData.amount.toString().toLowerCase().includes(searchValue))
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:425:                            ) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:426:                                
filteredRecords.push(childData);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:427:                            }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:428:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:429:                        } else {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:436:                        let bValue = b[orderByField];
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:437:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:438:                        if (orderByField === 'createdAt') {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:439:                            aValue = aValue ? 
aValue.toDate().getTime() : 0;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:440:                            bValue = bValue ? 
bValue.toDate().getTime() : 0;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:441:                        } else if (orderByField === 
'amount') {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:442:                            aValue = parseFloat(aValue) || 
0;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:443:                            bValue = parseFloat(bValue) || 
0;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:444:                        } else {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:445:                            aValue = aValue ? 
aValue.toString().toLowerCase() : '';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:446:                            bValue = bValue ? 
bValue.toString().toLowerCase() : '';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:554:            var html = [];
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:555:            var id = val.id;
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:556:            var vendorID = val.vendorID;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:557:            var user_id = val.authorID;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:558:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:559:            var order_view = '#';    
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:560:            if(val.driver){
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:561:                let serviceTypes = val.driver.serviceTypes 
|| (val.driver.serviceType ? [val.driver.serviceType] : []);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:562:                if 
(serviceTypes.includes("parcel_delivery") && service_type == "parcel_delivery") {
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:563:                    order_view = '{{ 
route('parcel_orders.edit', ':id') }}';    
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:564:                }else 
if(serviceTypes.includes("rental-service") && service_type == "rental-service"){
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:565:                    order_view = '{{ 
route('rental_orders.edit', ':id') }}';    
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:566:                }else 
if(serviceTypes.includes("cab-service") && service_type == "cab-service"){
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:567:                    order_view = '{{ route('rides.edit', 
':id') }}';    
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:568:                }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:569:                order_view = order_view.replace(':id', id);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:570:                order_view = order_view + '?eid={{ $id }}';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:571:            }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:572:            
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:573:            var printRoute = '{{ 
route('vendors.orderprint', ':id') }}';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:574:            printRoute = printRoute.replace(':id', id);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:575:            printRoute = printRoute + '?eid={{ $id }}';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:576:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:577:            var driver_view = '{{ route('drivers.view', 
':id') }}';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:578:            driver_view = driver_view.replace(':id', 
val.driver.id);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:579:
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:580:            var customer_view = '{{ route('users.view', 
':id') }}';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:581:            customer_view = customer_view.replace(':id', 
user_id);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:582:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:583:            if (checkDeletePermission) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:584:                html.push('<td class="delete-all"><input 
type="checkbox" id="is_open_' + id + '" class="is_open" dataId="' + id + '"><label class="col-3 control-label"\n' + 'for="is_open_' 
+ id + '" ></label></td>');
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:585:            }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:586:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:587:            html.push('<a data-url="' + order_view + '" 
href="' + order_view + '" class="redirecttopage">' + val.id + '</a>');
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:588:        
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:595:            var date = '';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:596:            var time = '';
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:597:            if (val.hasOwnProperty("createdAt")) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:598:                try {
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:599:                    date = 
val.createdAt.toDate().toDateString();
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:600:                    time = 
val.createdAt.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:601:                } catch (err) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:602:                }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:603:                html.push('<td class="dt-time">' + date + 
'<br> ' + time + '</td>');
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:604:            } else {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:605:                html.push('');
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:606:            }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:607:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:608:            html.push('<td class="text-green">' + 
val.amount + '</td>');
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:635:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:636:            var actionHtml = '';
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:637:            actionHtml = actionHtml + '<span 
class="action-btn"><?php if (in_array('orders.print', json_decode(@session('user_permissions'),true))) { ?><a href="' + printRoute 
+ '" data-toggle="tooltip" title="{{trans('lang.print')}}"><i class="mdi mdi-printer" style="font-size:20px;"></i></a><?php } ?><a 
href="' + order_view + '" data-toggle="tooltip" title="{{trans('lang.edit')}}"><i class="mdi mdi-lead-pencil"></i></a> ';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:638:            if (checkDeletePermission) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:639:                actionHtml = actionHtml + '<a id="' + 
val.id + '" class="delete-btn" name="order-delete" href="javascript:void(0)" data-toggle="tooltip" 
title="{{trans('lang.delete')}}"><i class="mdi mdi-delete"></i></a>';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:640:            }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:641:            actionHtml = actionHtml + '</span>';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:642:            html.push(actionHtml);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:643:            return html;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:644:        }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:645:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:654:                    $('#orderTable 
.is_open:checked').each(function() {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:655:                        var dataId = $(this).attr('dataId');
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:656:                        
database.collection('vendor_orders').doc(dataId).delete().then(function() {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:657:                            setTimeout(function() {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:658:                                window.location.reload();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:659:                            }, 5000);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:660:                        });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:661:                    });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:662:                }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:663:            } else {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:664:                alert("{{ trans('lang.select_delete_alert') 
}}");
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:668:        async function getSectionName(sectionId) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:669:            var sectionName = '';
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:670:            await 
database.collection('sections').where("id", "==", sectionId).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:671:                if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:672:                    var data = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:673:                    sectionName = data.name;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:674:                }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:675:            });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:676:            return sectionName;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:677:        }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:678:        
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:679:        async function getStoreNameFunction(vendorId) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:680:            var vendorName = '';
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:681:            await 
database.collection('vendors').where('id', '==', vendorId).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:682:                var vendorData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:683:                vendorName = vendorData.title;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:684:                $(".orderTitle").text(' - ' + vendorName);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:685:                if (vendorData.dine_in_active == true) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:686:                    $(".dine_in_future").show();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:687:                }
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:688:                var wallet_route = "{{ 
route('users.walletstransaction', 'id') }}";
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:689:                
$(".wallet_transaction_vendor").attr("href", wallet_route.replace('id', 'storeID=' + vendorData.author));
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:690:            });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:691:            return vendorName;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:692:        }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:693:        async function getUserNameFunction(userId) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:694:            var userName = '';
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:695:            await database.collection('users').where('id', 
'==', userId).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:696:                var userData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:697:                userName = userData.firstName + " " + 
userData.lastName;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:698:                $(".orderTitle").text(' - ' + userName);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:699:            });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:700:            return userName;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:701:        }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:702:        $(document).on("click", "a[name='order-delete']", 
function(e) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:703:            var id = this.id;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:704:            jQuery("#data-table_processing").show();
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:705:            
database.collection('vendor_orders').doc(id).delete().then(function(result) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:706:                window.location.href = '{{ url()->current() 
}}';
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:707:            });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:708:        });
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:709:        function clickpage(value) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:710:            setCookie('pagesizes', value, 30);
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:711:            location.reload();
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:712:        }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:713:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:848:            }
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:849:            
> C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:850:            // Convert Firestore timestamps to JS Date
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:851:            var startTime = snapshotsProducts.startTime ? 
snapshotsProducts.startTime.toDate() : null;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:852:            var endTime = snapshotsProducts.endTime ? 
snapshotsProducts.endTime.toDate() : null;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:853:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:854:            var totalMinutesUsed = 0;
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:855:
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:856:            // Total minutes difference
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:857:            if (startTime && endTime) {
  C:\deploy\adminpanel\resources\views\orders\owner_index.blade.php:858:                totalMinutesUsed = Math.floor((endTime - 
startTime) / (1000 * 60));




### CANDIDATE_FILE: resources\views\orders\print.blade.php
SCORE: 13
TAGS: vendors,orders,firebase.firestore,.collection,createdAt
MATCHES:

  C:\deploy\adminpanel\resources\views\orders\print.blade.php:15:                <?php if (isset($_GET['eid']) && $_GET['eid'] != 
'') { ?>
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:16:                    <li class="breadcrumb-item"><a
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:17:                                
href="{{route('vendors.orders',$_GET['eid'])}}">{{trans('lang.order_plural')}}</a></li>
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:18:                <?php } else { ?>
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:19:                    <li class="breadcrumb-item"><a href="{!! 
route('orders') !!}">{{trans('lang.order_plural')}}</a>
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:20:                    </li>
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:21:                <?php } ?>
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:22:
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:23:                <li 
class="breadcrumb-item">{{trans('lang.print_order')}}</li>
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:24:            </ol>
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:25:        </div>
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:26:    </div>
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:27:    <div class="container-fluid">
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:207:        
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:208:        var place_image = '';
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:209:        var ref_place = 
database.collection('settings').doc("placeHolderImage");
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:210:        ref_place.get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:211:            var placeHolderImage = snapshots.data();
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:212:            place_image = placeHolderImage.image;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:213:        });
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:214:        
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:215:        var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:216:        
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:217:        var ref = 
database.collection('vendor_orders').where("id", "==", id);
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:218:
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:219:        var currentCurrency = '';
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:220:        var currencyAtRight = false;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:221:        var decimal_degits = 0;
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:222:        var refCurrency = 
database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:223:        var currencyData = '';
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:224:        var packagingChargeEnable = false;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:225:
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:226:        refCurrency.get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:227:            currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:228:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:229:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:230:            if (currencyData.decimal_degits) {
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:258:            $(".orderId").text(id);
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:259:
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:260:            var date = order.createdAt.toDate().toDateString();
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:261:            var time = 
order.createdAt.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:262:            $(".orderDate").text(date + " " + time);
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:263:
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:264:            var billingAddressstring = '';
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:265:
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:266:            if (order.address.hasOwnProperty('address') ) {
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:267:            billingAddressstring = billingAddressstring + 
order.address.address;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:268:            }
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:269:           
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:299:            }
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:300:
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:301:            if (order.vendorID) {
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:302:                var vendor = 
database.collection('vendors').where("id", "==", order.vendorID);
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:303:                vendor.get().then(async function (snapshotsnew) {
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:304:                    var vendordata = snapshotsnew.docs[0].data();
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:305:                    if (vendordata.title) {
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:306:                        $('.storeName').html(vendordata.title);
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:307:                    }
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:308:                    if(vendordata.phonenumber.includes('+')){
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:309:                        $('.storePhone').text('+' + 
EditPhoneNumber(vendordata.phonenumber.slice(1)));
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:310:                    }else{
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:362:                }
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:363:
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:364:                html = html + '</div><div 
class="orders-tracking"><h6>' + val.name + '</h6><div class="orders-tracking-item-details">';
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:365:                if (extra_count > 1 || product.size) {
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:366:                    html = html + 
'<strong>{{trans("lang.extras")}} :</strong>';
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:367:                }
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:368:                if (extra_count > 1) {
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:369:                    html = html + '<div 
class="extra"><span>{{trans("lang.extras")}} :</span><span class="ext-item">' + extra_html + '</span></div>';
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:370:                }
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:371:                if (product.size) {
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:372:                    html = html + '<div 
class="type"><span>{{trans("lang.type")}} :</span><span class="ext-size">' + product.size + '</span></div>';
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:429:          var extras = snapshotsProducts.extras;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:430:          var extras_price = snapshotsProducts.extras_price;
> C:\deploy\adminpanel\resources\views\orders\print.blade.php:431:          var rejectedByDrivers = 
snapshotsProducts.rejectedByDrivers;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:432:          var takeAway = snapshotsProducts.takeAway;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:433:          var notes = snapshotsProducts.notes;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:434:          var tax_amount = snapshotsProducts.vendor.tax_amount;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:435:          var status = snapshotsProducts.status;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:436:          var products = snapshotsProducts.products;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:437:          var specialDiscount = snapshotsProducts.specialDiscount;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:438:          var intRegex = /^\d+$/;
  C:\deploy\adminpanel\resources\views\orders\print.blade.php:439:          var floatRegex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/;



TEXT_END

## DIR: resources\views\sections
TEXT_START
DIR_NOT_FOUND
TEXT_END

## DIR: resources\views\stores
TEXT_START
FILE_COUNT: 4

### CANDIDATE_FILE: resources\views\stores\create.blade.php
SCORE: 27
TAGS: vendors,vendor_categories,sections,orders,firebase.firestore,.collection,.set,.update,createdAt,zoneId,coordinates
MATCHES:

  C:\deploy\adminpanel\resources\views\stores\create.blade.php:48:                                    <label class="col-3 
control-label">{{ trans('lang.owner_vendor') }}</label>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:49:                                    <div class="col-7">
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:50:                                        <select 
id='store_vendors' class="form-control" required>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:51:                                            <option value="">{{ 
trans('lang.select_owner_vendor') }}</option>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:52:                                        </select>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:53:                                        <div class="form-text 
text-muted">
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:54:                                            {{ 
trans('lang.vendor_help') }}
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:55:                                        </div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:56:                                    </div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:57:                                </div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:58:                                
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:109:                                <div class="form-group row 
width-100">
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:110:                                    <div class="col-12">
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:111:                                        <h6>{{ 
trans('lang.know_your_cordinates') }} <a target="_blank" href="https://www.latlong.net/">{{ 
trans('lang.latitude_and_longitude_finder') }}</a></h6>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:112:                                    </div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:113:                                </div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:114:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:115:                                <div class="form-group row 
width-50">
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:116:                                    <label class="col-3 
control-label">{{ trans('lang.vendor_latitude') }}</label>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:117:                                    <div class="col-7">
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:118:                                        <input 
class="form-control vendor_latitude" type="number" min="-90" max="90" onkeypress="return chkAlphabets3(event,'error3')">
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:119:                                        <div id="error3" 
class="err"></div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:120:                                        <div class="form-text 
text-muted">
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:121:                                            {{ 
trans('lang.vendor_latitude_help') }}
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:122:                                        </div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:123:                                    </div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:124:                                </div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:125:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:126:                                <div class="form-group row 
width-50">
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:127:                                    <label class="col-3 
control-label">{{ trans('lang.vendor_longitude') }}</label>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:128:                                    <div class="col-7">
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:129:                                        <input 
class="form-control vendor_longitude" type="number" min="-180" max="180" onkeypress="return chkAlphabets3(event,'error4')">
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:130:                                        <div id="error4" 
class="err"></div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:131:                                        <div class="form-text 
text-muted">
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:132:                                            {{ 
trans('lang.vendor_longitude_help') }}
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:133:                                        </div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:134:                                    </div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:135:                                </div>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:136:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:137:                                <div class="form-group row 
width-100">
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:138:                                    <label class="col-3 
control-label ">{{ trans('lang.vendor_description') }}</label>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:139:                                    <div class="col-7">
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:140:                                        <textarea rows="7" 
class="vendor_description form-control" id="vendor_description"></textarea>
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:815:    <script type="text/javascript">
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:816:
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:817:        var section_id = getCookie('section_id') || null;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:818:        var service_type = getCookie('service_type') || null;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:819:
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:820:        var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:821:        var photo = "";
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:822:        var menuPhotoCount = 0;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:823:        var restaurantMenuPhotos = "";
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:824:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:825:        var vendorOwnerId = "";
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:826:        var vendorOwnerOnline = false;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:827:        var photocount = 0;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:828:        var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:836:        var story_thumbnail_filename = '';
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:837:
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:838:        var ref_sections = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:839:        var createdAt = 
firebase.firestore.FieldValue.serverTimestamp();
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:840:        var sections_list = [];
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:841:        var categories_list = [];
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:842:        var ref_deliverycharge = 
database.collection('settings').doc("DeliveryCharge");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:843:        var deliveryChargeFlag = false;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:844:        var workingHours = [];
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:845:        var timeslotworkSunday = [];
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:846:        var timeslotworkMonday = [];
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:847:        var timeslotworkTuesday = [];
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:848:        var timeslotworkWednesday = [];
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:849:        var timeslotworkFriday = [];
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:850:        var timeslotworkSaturday = [];
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:870:        var storyRef = firebase.storage().ref('Story');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:871:        var storyImagesRef = 
firebase.storage().ref('Story/images');
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:872:        var vendor_id = database.collection("tmp").doc().id;
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:873:        var driverNearBy = 
database.collection('settings').doc("DriverNearBy");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:874:
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:875:        
database.collection('settings').doc("story").get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:876:            var story_data = snapshots.data();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:877:            if (story_data.isEnabled) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:878:                story_isEnabled = true;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:879:            }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:880:            storevideoDuration = story_data.videoDuration;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:881:        });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:882:        var isSelfDelivery = false;
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:883:        var selfDeliveryRef = 
database.collection('settings').doc("globalSettings");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:884:        selfDeliveryRef.get().then(async 
function(settingSnapshots) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:885:            if (settingSnapshots.data()) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:886:                var settingData = settingSnapshots.data();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:887:                if (settingData.isSelfDelivery) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:888:                    isSelfDelivery = true;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:889:                }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:890:            }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:891:        })
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:892:
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:893:        var sectionRef = 
database.collection('sections').doc(section_id);
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:894:        sectionRef.get().then(async function(sectionSnapshots) {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:895:            if (sectionSnapshots.data()) {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:896:                sectionData = sectionSnapshots.data();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:897:                adminCommission = sectionData.adminCommision;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:898:                if (service_type == "ecommerce-service") {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:899:                    $("#delivery_charges_div").hide();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:900:                } else {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:901:                    $("#delivery_charges_div").show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:902:                }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:903:                if (service_type == "delivery-service" && 
story_isEnabled == true) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:904:                    $('#story_upload_div').show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:926:            
$(".distance-type").text(driverNearByData.distanceType);      
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:927:        })
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:928:        database.collection('zone').where('publish', '==', 
true).orderBy('name', 'asc').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:929:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:930:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:931:                var area = [];
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:932:                data.area.forEach((location) => {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:933:                    area.push({
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:934:                        'latitude': location.latitude,
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:935:                        'longitude': location.longitude
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:936:                    });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:937:                });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:938:                $('#zone').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:939:                    .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:940:                    .attr("data-area", JSON.stringify(area))
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:941:                    .text(data.name));
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:942:            })
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:943:        });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:945:        var currentCurrency = '';
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:946:        var currencyAtRight = false;
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:947:        var refCurrency = 
database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:948:        refCurrency.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:949:            var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:950:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:951:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:952:        });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:953:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:954:        var packagingChargeEnable = false;
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:955:        var sectionRef = 
database.collection('sections').doc(section_id);
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:956:        sectionRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:957:            var sectionData = snapshots.data();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:958:            if (sectionData.packagingChargeEnable) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:959:                packagingChargeEnable = true;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:960:                
$('.packagingChargeEnable').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:961:                $('#packagingChargeDiv').show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:962:            }else{
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:963:                $('.packagingChargeEnable').addClass('d-none');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:967:        });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:968:
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:969:        ref_sections.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:970:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:971:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:972:                if (data.serviceTypeFlag == "delivery-service" 
|| data.serviceTypeFlag == "ecommerce-service") {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:973:                    sections_list.push(data);
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:974:                }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:975:            })
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:976:        })
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:977:        database.collection('users').where('role', '==', 
'vendor').where('sectionId', '==', section_id).orderBy('firstName', 'asc').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:978:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:979:                var data = listval.data();
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:980:                if ((data.vendorID == "" || data.vendorID == 
null) && data.firstName != "") {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:981:                    
$('#store_vendors').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:982:                        .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:983:                        .text(data.firstName + " " + 
data.lastName));
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:984:                }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:985:            })
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:986:        });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:987:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:988:        $('#vendor_cuisines').empty();
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:989:        
database.collection('vendor_categories').where('publish', '==', true).where('section_id', '==', section_id).get().then(async 
function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:990:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:991:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:992:                categories_list.push(data);
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:993:                
$('#vendor_cuisines').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:994:                    .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:995:                    .text(data.title));
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:996:            });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:997:            $("#vendor_cuisines").show().chosen({
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1000:        });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1001:        
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1002:        $('#store_vendors').on('change', function() {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1003:            ownerId = $(this).val();
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1004:            database.collection('users').where('id', '==', 
ownerId).get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1005:                if (snapshot.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1006:                    var data = snapshot.docs[0].data();
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1007:                    if (data.hasOwnProperty('section_id') && 
data.section_id != null && data.section_id != '') {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1008:                        
$('#section_id').val(data.section_id).prop('disabled', true).trigger('change');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1009:                    } else {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1010:                        
$('#section_id').val('').prop('disabled', false);
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1011:                    }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1012:                }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1013:            })
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1014:        })
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1015:        var email_templates = 
database.collection('email_templates').where('type', '==', 'new_vendor_signup');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1016:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1017:        var emailTemplatesData = null;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1018:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1019:        var adminEmail = '';
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1020:
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1021:        var emailSetting = 
database.collection('settings').doc('emailSetting');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1022:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1023:        $(document).ready(async function() {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1024:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1025:            jQuery("#country_selector").select2({
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1026:                templateResult: formatState,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1027:                templateSelection: formatState2,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1028:                placeholder: "Select Country",
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1029:                allowClear: true
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1031:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1032:            // --- ADD THIS BLOCK TO SET DEFAULT COUNTRY CODE 
---
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1033:            var globalSettingsRef = 
database.collection('settings').doc('globalSettings');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1034:            globalSettingsRef.get().then(async function 
(snapshot) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1035:                var globalSettings = snapshot.data();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1036:                if (globalSettings && 
globalSettings.defaultCountryCode) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1037:                    var defaultPhoneCode = 
globalSettings.defaultCountryCode.replace('+', '').trim();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1038:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1039:                    // Find the option with matching phoneCode
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1040:                    var $option = $("#country_selector 
option").filter(function() {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1041:                        return $(this).val() === 
defaultPhoneCode;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1098:            var vendorOwner = $("#vendor_owners 
option:selected").val();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1099:            var address = $(".vendor_address").val();
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1100:            var latitude = 
parseFloat($(".vendor_latitude").val());
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1101:            var longitude = 
parseFloat($(".vendor_longitude").val());
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1102:            var description = $(".vendor_description").val();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1103:            var country_code = '+' + 
$("#country_selector").val();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1104:            var phonenumber = $(".vendor_phone").val();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1105:            
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1106:            var enabledDiveInFuture = 
$("#dine_in_feature").is(':checked');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1107:            var restaurantCost = $(".vendor_cost").val();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1108:            var vendor_active = false;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1109:            if ($("#is_active").is(':checked')) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1112:            var enable_self_delivery = 
$("#enable_self_delivery").is(':checked');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1113:            var packagingCharge = $('#packagingCharge').val();
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1114:            var selectedOwnerId = $("#store_vendors 
option:selected").val();
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1115:            var zoneId = $('#zone option:selected').val();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1116:            var zoneArea = $('#zone 
option:selected').data('area');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1117:            var isInZone = false;
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1118:            if (zoneId && zoneArea) {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1119:                isInZone = checkLocationInZone(zoneArea, 
longitude, latitude);
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1120:            }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1121:            if (selectedOwnerId && selectedOwnerId != '' && 
selectedOwnerId != null && selectedOwnerId != undefined) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1122:                var vendorData = await 
getOwnerDetails(selectedOwnerId);
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1123:                if (vendorData != undefined && vendorData != 
null && vendorData != "") {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1124:                    var user_name = vendorData.firstName + " " 
+ vendorData.lastName;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1125:                    var subscriptionPlanId = 
vendorData.subscriptionPlanId ? vendorData.subscriptionPlanId : null;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1126:                    var subscription_plan = 
vendorData.subscription_plan ? vendorData.subscription_plan : null;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1127:                    var subscriptionOrderLimit = 
vendorData.subscription_plan ? vendorData.subscription_plan.orderLimit : null;
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1303:                $(".error_top").append("<p>{{ 
trans('lang.vendor_address_error') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1304:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1305:            }else if (zoneId == '') {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1306:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1307:                $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1308:                $(".error_top").append("<p>{{ 
trans('lang.select_zone_help') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1309:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1310:            } else if (isNaN(latitude)) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1311:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1312:                $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1313:                $(".error_top").append("<p>{{ 
trans('lang.vendor_lattitude_error') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1314:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1315:            } else if (latitude < -90 || latitude > 90) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1316:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1317:                $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1318:                $(".error_top").append("<p>{{ 
trans('lang.vendor_lattitude_limit_error') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1319:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1320:            } else if (isNaN(longitude)) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1321:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1322:                $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1323:                $(".error_top").append("<p>{{ 
trans('lang.vendor_longitude_error') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1324:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1325:            } else if (longitude < -180 || longitude > 180) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1326:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1327:                $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1328:                $(".error_top").append("<p>{{ 
trans('lang.vendor_longitude_limit_error') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1329:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1330:            } else if (description == '') {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1331:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1332:                $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1333:                $(".error_top").append("<p>{{ 
trans('lang.vendor_description_error') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1334:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1335:            }else if (isInZone == false) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1336:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1359:                    } else {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1360:                        await storeStoryImageData().then(async 
(IMG) => {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1361:                            
database.collection('story').doc(vendor_id).set({
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1362:                                'createdAt': new Date(),
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1363:                                'sectionID': section_id,
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1364:                                'vendorID': vendor_id,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1365:                                'videoThumbnail': 
IMG.storyThumbnailImage,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1366:                                'videoUrl': story_vedios,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1367:                            });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1368:                        }).catch(err => {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1369:                            
jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1370:                            $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1371:                            $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1372:                            $(".error_top").append("<p>" + err 
+ "</p>");
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1382:                    await storeGalleryImageData().then(async 
(GalleryIMG) => {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1383:                        await storeMenuImageData().then(async 
(MenuIMG) => {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1384:                            
database.collection('users').doc(user_id).update({
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1385:                                'section_id': section_id,
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1386:                                'vendorID': vendor_id,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1387:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1388:                            }).then(function(result) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1389:
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1390:                                coordinates = new 
firebase.firestore.GeoPoint(latitude, longitude);
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1391:
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1392:                                
geoFirestore.collection('vendors').doc(vendor_id).set({
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1393:                                    'section_id': section_id,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1394:                                    'title': vendorname,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1395:                                    'description': description,
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1396:                                    'latitude': latitude,
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1397:                                    'longitude': longitude,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1398:                                    'location': address,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1399:                                    'photo': 
(Array.isArray(GalleryIMG) && GalleryIMG.length > 0) ? GalleryIMG[0] : null,
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1400:                                    'categoryID': cuisines,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1401:                                    'phonenumber': country_code 
+ phonenumber,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1402:                                    'categoryTitle': 
categoryTitle,
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1403:                                    'coordinates': coordinates,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1404:                                    'id': vendor_id,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1405:                                    'filters': filters_new,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1406:                                    'photos': GalleryIMG,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1407:                                    'author': user_id,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1408:                                    'authorName': name,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1409:                                    'authorProfilePic': 
IMG.ownerImage,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1410:                                    'hidephotos': false,
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1411:                                    'createdAt': createdAt,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1412:                                    'enabledDiveInFuture': 
enabledDiveInFuture,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1413:                                    'specialDiscountEnable': 
enabledSpecialOffer,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1414:                                    'restaurantMenuPhotos': 
MenuIMG,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1415:                                    'restaurantCost': 
restaurantCost,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1416:                                    'openDineTime': 
openDineTime,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1417:                                    'closeDineTime': 
closeDineTime,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1418:                                    'workingHours': 
workingHours,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1419:                                    'specialDiscount': 
specialDiscount,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1421:                                    'subscriptionPlanId': 
subscriptionPlanId,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1422:                                    'subscriptionExpiryDate': 
subscriptionExpiryDate,
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1423:                                    'subscriptionTotalOrders': 
subscriptionOrderLimit,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1424:                                    'adminCommission': 
adminCommission,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1425:                                    'isSelfDelivery': 
enable_self_delivery,
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1426:                                    'zoneId': zoneId,
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1427:                                    'packagingCharge': 
packagingCharge ? packagingCharge : '0',
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1428:                                }).then(async function(result) {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1429:                                    await 
database.collection('users').doc(user_id).update({
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1430:                                        'section_id': section_id
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1431:                                    })
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1432:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1433:                                    if (deliveryChargeFlag) {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1434:                                        
geoFirestore.collection('vendors').doc(vendor_id).update({
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1435:                                            'deliveryCharge': 
deliveryCharge
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1436:                                        }).then(async 
function(result) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1437:                                            
window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1438:                                        });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1439:                                    } else {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1440:                                        window.location.href = 
'{{ route('stores') }}';
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1441:                                    }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1442:                                });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1563:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1564:
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1565:            database.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1566:                'specialDiscount': specialDiscount
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1567:            }).then(function(result) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1568:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1569:            });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1570:        }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1571:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1572:        function addMoreFunctionButton(day1, day2, count) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1573:            var discount = $("#discount" + day2 + count).val();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1916:            }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1917:            jQuery("#story_vedios").html(newhtml);
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1918:            deleteStoryfromCollection();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1919:        });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1920:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1921:        $(document).on("click", ".remove-story-thumbnail", 
function() {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1922:            var photo_remove = $(this).attr('data-img');
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1923:            $("#story_thumbnail").empty();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1924:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1925:            story_thumbnail = '';
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1926:            deleteStoryfromCollection();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1927:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1928:        });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1929:
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1930:        function deleteStoryfromCollection() {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1931:            if (story_vedios.length == 0 && story_thumbnail == 
'') {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1932:                database.collection('story').where('vendorID', 
'==', vendor_id).get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1933:                    if (snapshot.docs.length > 0) {
> C:\deploy\adminpanel\resources\views\stores\create.blade.php:1934:                        
database.collection('story').doc(vendor_id).delete();
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1935:                    }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1936:                });
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1937:            }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1938:        }
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1939:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1940:        function handleStoryThumbnailFileSelect(evt) {
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1941:
  C:\deploy\adminpanel\resources\views\stores\create.blade.php:1942:            var f = evt.target.files[0];




### CANDIDATE_FILE: resources\views\stores\edit.blade.php
SCORE: 25
TAGS: vendors,vendor_categories,sections,firebase.firestore,.collection,.set,.update,createdAt,zoneId,coordinates
MATCHES:

  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:91:                                    <div class="form-group row 
width-100">
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:92:                                        <div class="col-12">
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:93:                                            <h6>*{{ 
trans('lang.dont_know_your_coordinates') }} <a target="_blank" href="https://www.latlong.net/">{{ 
trans('lang.latitude_and_longitude_finder') }} </a></h6>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:94:                                        </div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:95:                                    </div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:96:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:97:                                    <div class="form-group row 
width-50">
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:98:                                        <label class="col-3 
control-label">{{ trans('lang.vendor_latitude') }}</label>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:99:                                        <div class="col-7">
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:100:                                            <input type="text" 
class="form-control vendor_latitude" onkeypress="return chkAlphabets3(event,'error3')">
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:101:                                            <div id="error3" 
class="err"></div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:102:                                            <div class="form-text 
text-muted">
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:103:                                                {{ 
trans('lang.vendor_latitude_help') }}
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:104:                                            </div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:105:                                        </div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:106:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:107:                                    </div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:108:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:109:                                    <div class="form-group row 
width-50">
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:110:                                        <label class="col-3 
control-label">{{ trans('lang.vendor_longitude') }}</label>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:111:                                        <div class="col-7">
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:112:                                            <input type="text" 
class="form-control vendor_longitude" onkeypress="return chkAlphabets3(event,'error4')">
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:113:                                            <div id="error4" 
class="err"></div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:114:                                            <div class="form-text 
text-muted">
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:115:                                                {{ 
trans('lang.vendor_longitude_help') }}
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:116:                                            </div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:117:                                        </div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:118:                                    </div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:119:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:120:                                    <div class="form-group row 
width-100">
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:121:                                        <label class="col-3 
control-label ">{{ trans('lang.vendor_description') }}</label>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:122:                                        <div class="col-7">
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:123:                                            <textarea rows="7" 
class="vendor_description form-control" id="vendor_description"></textarea>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:805:                    {{ trans('lang.save') }}
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:806:                </button>
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:807:                <a href="{!! route('vendors') !!}" class="btn 
btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:808:            </div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:809:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:810:        </div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:811:    </div>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:812:@endsection
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:813:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:814:@section('scripts')
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:815:    <script 
src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"></script>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:817:    <script type="text/javascript">
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:818:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:819:        var section_id = getCookie('section_id') || null;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:820:        var id = "<?php echo $id; ?>";
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:821:        var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:822:        var ref = database.collection('vendors').where("id", "==", 
id);
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:823:        var ref_sections = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:824:        var photo = "";
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:825:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:826:        var vendorOwnerId = "";
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:827:        var vendorOwnerOnline = false;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:828:        var photocount = 0;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:829:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:830:        var ownerOldImageFile = '';
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:831:        var ownerId = '';
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:843:        var menuImageToDelete = [];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:844:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:845:        var sections_list = [];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:846:        var categories_list = [];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:847:        var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:848:        var placeholder = 
database.collection('settings').doc('placeHolderImage');
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:849:        var ref_deliverycharge = 
database.collection('settings').doc("DeliveryCharge");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:850:        var deliveryChargeFlag = false;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:851:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:852:        var workingHours = [];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:853:        var timeslotworkSunday = [];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:854:        var timeslotworkMonday = [];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:855:        var timeslotworkTuesday = [];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:856:        var timeslotworkWednesday = [];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:857:        var timeslotworkFriday = [];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:883:        var currentCurrency = '';
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:884:        var currencyAtRight = false;
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:885:        var refCurrency = 
database.collection('currencies').where('isActive', '==', true);
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:886:        var driverNearBy = 
database.collection('settings').doc("DriverNearBy");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:887:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:888:        refCurrency.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:889:            var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:890:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:891:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:892:        });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:893:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:894:        var packagingChargeEnable = false;
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:895:        var sectionRef = 
database.collection('sections').doc(section_id);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:896:        sectionRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:897:            var sectionData = snapshots.data();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:898:            if (sectionData.packagingChargeEnable) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:899:                packagingChargeEnable = true;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:900:            }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:901:        });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:902:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:903:        placeholder.get().then(async function(snapshotsimage) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:906:        })
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:907:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:908:        
database.collection('settings').doc("story").get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:909:            var story_data = snapshots.data();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:910:            if (story_data.isEnabled) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:911:                story_isEnabled = true;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:912:            }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:913:            storevideoDuration = story_data.videoDuration;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:914:        });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:915:        
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:916:        var isSelfDelivery = false;
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:917:        var selfDeliveryRef = 
database.collection('settings').doc("globalSettings");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:918:        selfDeliveryRef.get().then(async 
function(settingSnapshots) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:919:            if (settingSnapshots.data()) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:920:                var settingData = settingSnapshots.data();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:921:                if (settingData.isSelfDelivery) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:922:                    isSelfDelivery = true;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:923:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:924:                }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:925:            }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:954:            }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:955:        });
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:956:        database.collection('zone').where('publish', '==', 
true).orderBy('name', 'asc').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:957:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:958:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:959:                var area = [];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:960:                data.area.forEach((location) => {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:961:                    area.push({
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:962:                        'latitude': location.latitude,
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:963:                        'longitude': location.longitude
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:964:                    });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:965:                });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:966:                $('#zone').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:967:                    .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:968:                    .attr("data-area", JSON.stringify(area))
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:969:                    .text(data.name));
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:970:            })
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:971:        });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:976:        $(document).ready(function() {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:977:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:978:            ref_sections.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:979:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:980:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:981:                    if (data.serviceTypeFlag == "delivery-service" 
|| data.serviceTypeFlag == "ecommerce-service") {
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:982:                        sections_list.push(data);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:983:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:984:                    }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:985:                })
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:986:            })
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:987:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:988:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:989:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:990:            ref.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:999:                    
$(".commission_fix").val(vendor.adminCommission.commission);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1000:                }
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1001:                $(".vendor_latitude").val(vendor.latitude);
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1002:                $(".vendor_longitude").val(vendor.longitude);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1003:                $(".vendor_description").val(vendor.description);
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1004:                if (vendor.section_id != undefined) {
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1005:                    $("#section_id").val(vendor.section_id);
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1006:                    var selected_section = vendor.section_id;
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1007:                    sections_list.forEach((section) => {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1008:                        if (section.id == selected_section) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1009:                            if (section.dine_in_active == true) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1010:                                $("#is_dine_in_feature").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1011:                                $("#services_feature").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1012:                                dine_in_active = true;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1013:                            }else{
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1014:                                $("#services_feature").hide();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1015:                            }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1028:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1029:                }
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1030:                if (vendor.hasOwnProperty('zoneId') && 
vendor.zoneId != '') {
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1031:                    $("#zone").val(vendor.zoneId);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1032:                }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1033:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1034:                if (vendor.opentime) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1035:                    vendor.opentime = moment(vendor.opentime, 
'hh:mm A').format('HH:mm');
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1036:                }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1037:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1038:                if (vendor.closetime) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1039:                    vendor.closetime = moment(vendor.closetime, 
'hh:mm A').format('HH:mm');
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1115:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1116:                if (vendor.author != null && vendor.author != '') 
{
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1117:                    var route1 = '{{ route('vendors.edit', ':id') 
}}';
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1118:                    route1 = route1.replace(':id', vendor.author);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1119:                    $('.profileRoute').attr('href', route1);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1120:                }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1121:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1122:                if (vendor.hasOwnProperty('restaurantMenuPhotos') 
&& vendor.restaurantMenuPhotos != null) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1123:                    vendor_menu_photos = 
vendor.restaurantMenuPhotos;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1124:                    vendor.restaurantMenuPhotos.forEach((photo) 
=> {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1125:                        menuPhotoCount++;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1301:                }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1302:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1303:                vendorOwnerOnline = vendor.isActive;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1304:                if (vendor.hasOwnProperty('enabledDiveInFuture') 
&& vendor.enabledDiveInFuture == true) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1305:                    $(".divein_div").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1306:                }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1307:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1308:                vendorOwnerOnline = vendor.isActive;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1309:                photo = vendor.photo;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1310:                vendorOwnerId = vendor.author;
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1311:                await database.collection('users').where("id", 
"==", vendor.author).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1312:                    snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1313:                        var user = listval.data();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1314:                        ownerId = user.id;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1315:                    })
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1316:                });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1317:                var selected_category = [];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1318:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1319:                if (vendor.hasOwnProperty('categoryID') && 
vendor.categoryID != null && vendor.categoryID !== '') {
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1320:                    let categoryIDs = 
Array.isArray(vendor.categoryID) ? vendor.categoryID : [vendor.categoryID];
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1321:                    $.each(categoryIDs, function(index, catId) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1322:                        selected_category.push(catId);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1323:                    });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1324:                }
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1325:                await 
database.collection('vendor_categories').where('publish', '==', true).where('section_id', '==', vendor.section_id).get().then(async 
function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1326:                    if ($("#vendor_cuisines").data('chosen')) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1327:                        $('#vendor_cuisines').chosen('destroy');
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1328:                    }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1329:                    snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1330:                        var data = listval.data();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1331:                        var selected = '';
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1332:                        if ($.inArray(data.id, selected_category) 
!== -1) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1333:                            var selected = 'selected="selected"';
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1391:            })
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1392:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1393:            async function getRestaurantStory(vendorId) {
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1394:                await 
database.collection('story').where('vendorID', '==', vendorId).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1395:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1396:                    if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1397:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1398:                        var story_data = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1399:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1400:                        story_vedios = story_data.videoUrl;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1401:                        story_thumbnail = 
story_data.videoThumbnail;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1402:                        story_thumbnail_oldfile = 
story_data.videoThumbnail;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1414:                }).get();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1415:                var address = $(".vendor_address").val();
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1416:                var latitude = 
parseFloat($(".vendor_latitude").val());
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1417:                var longitude = 
parseFloat($(".vendor_longitude").val());
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1418:                var description = $(".vendor_description").val();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1419:                var phonenumber = $(".vendor_phone").val();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1420:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1421:                var enabledDiveInFuture = 
$("#dine_in_feature").is(':checked');
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1422:                var change_expiry_date = 
$('#change_expiry_date').val();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1423:                var enable_self_delivery = 
$("#enable_self_delivery").is(':checked');
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1424:                var packagingCharge = $('#packagingCharge').val();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1425:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1426:                var zoneId = $('#zone option:selected').val();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1427:                var zoneArea = $('#zone 
option:selected').data('area');
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1428:                var isInZone = false;
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1429:                if (zoneId && zoneArea) {
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1430:                    isInZone = checkLocationInZone(zoneArea, 
longitude, latitude);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1431:                }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1432:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1433:                if (change_expiry_date != '' && 
change_expiry_date != null) {
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1434:                    var subscriptionPlanExpiryDate = 
firebase.firestore.Timestamp.fromDate(new Date(
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1435:                        change_expiry_date));
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1436:                } else {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1437:                    var subscriptionPlanExpiryDate = null;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1438:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1439:                }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1440:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1441:                var commissionType = $("#commission_type").val();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1442:                var fixCommission = $(".commission_fix").val();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1638:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1639:                    jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1640:                }else if (zoneId == '') {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1641:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1642:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1643:                    $(".error_top").append("<p>{{ 
trans('lang.select_zone_help') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1644:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1645:                    jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1646:                } else if (isNaN(latitude)) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1647:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1648:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1649:                    $(".error_top").append("<p>{{ 
trans('lang.vendor_lattitude_error') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1650:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1651:                    jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1652:                } else if (latitude < -90 || latitude > 90) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1653:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1654:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1655:                    $(".error_top").append("<p>{{ 
trans('lang.vendor_lattitude_limit_error') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1656:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1657:                    jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1658:                } else if (isNaN(longitude)) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1659:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1660:                    $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1661:                    $(".error_top").append("<p>{{ 
trans('lang.vendor_longitude_error') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1662:                    window.scrollTo(0, 0);                        
                
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1663:                    jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1664:                } else if (longitude < -180 || longitude > 180) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1665:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1666:                    $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1667:                    $(".error_top").append("<p>{{ 
trans('lang.vendor_longitude_limit_error') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1668:                    window.scrollTo(0, 0);                        
                
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1669:                    jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1670:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1671:                } else if (isInZone == false) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1672:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1673:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1674:                    $(".error_top").append("<p>{{ 
trans('lang.invalid_location_zone') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1675:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1689:                    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1690:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1691:                    coordinates = new 
firebase.firestore.GeoPoint(latitude, longitude);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1692:                    await storeImageData().then(async (IMG) => {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1693:                        await storeGalleryImageData().then(async 
(GalleryIMG) => {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1694:                            await storeMenuImageData().then(async 
(MenuIMG) => {
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1695:                                
geoFirestore.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1696:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1697:                                    'title': vendorname,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1698:                                    'description': description,
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1699:                                    'latitude': latitude,
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1700:                                    'longitude': longitude,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1701:                                    'location': address,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1702:                                    'photo': 
(Array.isArray(GalleryIMG) && GalleryIMG.length > 0) ? GalleryIMG[0] : null,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1703:                                    'photos': GalleryIMG,
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1704:                                    'categoryID': cuisines,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1705:                                    'phonenumber': phonenumber,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1706:                                    'categoryTitle': 
categoryTitle,
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1707:                                    'coordinates': coordinates,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1708:                                    'filters': filters_new,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1709:                                    'enabledDiveInFuture': 
enabledDiveInFuture,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1710:                                    'specialDiscountEnable': 
enabledSpecialOffer,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1711:                                    'restaurantMenuPhotos': 
MenuIMG,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1712:                                    'restaurantCost': 
restaurantCost,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1713:                                    'openDineTime': openDineTime,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1714:                                    'closeDineTime': 
closeDineTime,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1715:                                    'specialDiscount': 
specialDiscount,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1717:                                    'adminCommission': 
adminCommission,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1718:                                    'isSelfDelivery': 
enable_self_delivery,
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1719:                                    'zoneId': zoneId,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1720:                                    'packagingCharge': 
packagingCharge ? packagingCharge : '0'
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1721:                                }).then(function(result) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1722:                                    if (story_vedios.length > 0 
|| story_thumbnail != '') {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1723:                                        if (story_vedios.length > 
0 && story_thumbnail == '') {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1724:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1725:                                            
$(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1726:                                            
$(".error_top").html("");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1727:                                            
$(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1738:                                            return false;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1739:                                        } else {
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1740:                                            
database.collection('story').doc(id).set({
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1741:                                                    'createdAt': 
new Date(),
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1742:                                                    'sectionID': 
section_id,
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1743:                                                    'vendorID': 
id,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1744:                                                    
'videoThumbnail': IMG.storyThumbnailImage,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1745:                                                    'videoUrl': 
story_vedios,
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1746:                                                })
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1747:                                                
.then(function(result) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1748:                                                    
jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1749:                                                    if 
(deliveryChargeFlag) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1750:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1751:                                                        
geoFirestore.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1752:                                                            
'deliveryCharge': deliveryCharge
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1753:                                                        
}).then(function(result) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1754:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1755:                                                            
window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1756:                                                        });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1757:                                                    } else {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1758:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1759:                                                        
window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1767:                                        if (deliveryChargeFlag) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1768:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1769:                                            
geoFirestore.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1770:                                                'deliveryCharge': 
deliveryCharge
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1771:                                            
}).then(function(result) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1772:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1773:                                                
window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1774:                                            });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1775:                                        } else {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1776:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1777:                                            window.location.href 
= '{{ route('stores') }}';
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1982:            }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1983:            jQuery("#story_vedios").html(newhtml);
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1984:            deleteStoryfromCollection();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1985:        });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1986:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1987:        $(document).on("click", ".remove-story-thumbnail", 
function() {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1988:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1989:            var rests = ["0CwIcsoYhSxYba9DlwuE", 
"NjYpnm5IhQi0GeeVKXiX", "NjYpnm5IhQi0GeeVKXiX", "XrDAfl3rOWZS11lEIPkI", "a4rYm0HQHskPDGXAlWEt", "wkSUMpzIxl6KmDIKuDVQ"];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1990:            if (jQuery.inArray(id, rests) != -1) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1991:                alert(doNotUpdateAlert);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1992:                return false;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1996:            $("#story_thumbnail").empty();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1997:            story_thumbnail = '';
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1998:            deleteStoryfromCollection();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:1999:        });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2000:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2001:        function deleteStoryfromCollection() {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2002:            if (story_vedios.length == 0 && story_thumbnail == 
'') {
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2003:                database.collection('story').where('vendorID', 
'==', id).get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2004:                    if (snapshot.docs.length > 0) {
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2005:                        
database.collection('story').doc(id).delete();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2006:                    }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2007:                });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2008:            }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2009:        }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2010:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2011:        function handleStoryThumbnailFileSelect(evt) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2012:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2013:            var rests = ["0CwIcsoYhSxYba9DlwuE", 
"NjYpnm5IhQi0GeeVKXiX", "NjYpnm5IhQi0GeeVKXiX", "XrDAfl3rOWZS11lEIPkI", "a4rYm0HQHskPDGXAlWEt", "wkSUMpzIxl6KmDIKuDVQ"];
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2252:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2253:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2254:            database.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2255:                'specialDiscount': specialDiscount
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2256:            }).then(function(result) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2257:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2258:            });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2259:        }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2260:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2261:        function addMoreFunctionButton(day1, day2, count) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2262:            var discount = $("#discount" + day2 + count).val();
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2622:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2623:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2624:            database.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2625:                'workingHours': workingHours
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2626:            }).then(function(result) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2627:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2628:            });
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2629:        }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2630:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2631:        function updatehoursFunctionButton(day, rowCount, 
dayCount, buttonElement) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2632:
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2839:            for (j = 0; j < area.length; j++) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2840:                var geopoint = area[j];
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2841:                vertices_x.push(geopoint.longitude);
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2842:                vertices_y.push(geopoint.latitude);
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2843:            }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2844:            var points_polygon = (vertices_x.length) - 1;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2845:            if (is_in_polygon(points_polygon, vertices_x, 
vertices_y, address_lng, address_lat)) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2846:                return true;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2847:            } else {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2848:                return false;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2849:            }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2850:        }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2851:
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2852:        function is_in_polygon($points_polygon, $vertices_x, 
$vertices_y, $longitude_x, $latitude_y) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2853:            $i = $j = $c = $point = 0;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2854:            for ($i = 0, $j = $points_polygon; $i < 
$points_polygon; $j = $i++) {
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2855:                $point = $i;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2856:                if ($point == $points_polygon)
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2857:                    $point = 0;
> C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2858:                if ((($vertices_y[$point] > $latitude_y != 
($vertices_y[$j] > $latitude_y)) && ($longitude_x < ($vertices_x[$j] - $vertices_x[$point]) * ($latitude_y - $vertices_y[$point]) / 
($vertices_y[$j] - $vertices_y[$point]) + $vertices_x[$point])))
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2859:                    $c = !$c;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2860:            }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2861:            return $c;
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2862:        }
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2863:    </script>
  C:\deploy\adminpanel\resources\views\stores\edit.blade.php:2864:@endsection




### CANDIDATE_FILE: resources\views\stores\index.blade.php
SCORE: 27
TAGS: vendors,vendor_products,vendor_categories,sections,orders,firebase.firestore,.collection,.set,createdAt,coordinates
MATCHES:

  C:\deploy\adminpanel\resources\views\stores\index.blade.php:205:        var checkDeletePermission = false;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:206:        var checkCopyPermission = false;
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:207:        var active_id = getCookie('section_id');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:208:if (!active_id) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:209:    
database.collection('sections').where('isActive','==',true).orderBy('order').limit(1).get().then(function(snapshot) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:210:        if (!snapshot.empty) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:211:            var sectionData = snapshot.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:212:            var sectionId = sectionData.id || snapshot.docs[0].id;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:213:            var sectionType = sectionData.serviceTypeFlag || '';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:214:            setCookie('section_id', sectionId, 1);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:215:            setCookie('service_type', sectionType, 1);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:216:            window.location.reload();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:217:        }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:218:    });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:219:}
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:220:        var createdAt = 
firebase.firestore.FieldValue.serverTimestamp();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:221:
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:222:        if ($.inArray('stores.delete', user_permissions) >= 0) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:223:            checkDeletePermission = true;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:224:        }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:225:        if ($.inArray('stores.copy', user_permissions) >= 0) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:226:            checkCopyPermission = true;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:227:        }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:228:        $(document).on('click', '#create_vendor .close, 
#create_vendor [data-dismiss="modal"], #create_vendor [data-bs-dismiss="modal"]', function () {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:230:        });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:231:        var refData = active_id
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:232:            ? database.collection('vendors').where('section_id', 
'==', active_id)
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:233:            : database.collection('vendors');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:234:
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:235:        if (!active_id) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:236:            console.warn('section_id cookie is empty; loading all 
stores without section filter.');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:237:        }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:238:
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:239:        var ref = refData.orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:240:        var userData = [];
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:241:        var vendorData = [];
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:242:        var vendorProducts = [];
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:243:        var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:244:        var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:245:        
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:246:        placeholder.get().then(async function(snapshotsimage) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:247:            var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:248:            placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:249:        })
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:250:        var categoryRef = active_id
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:251:            ? 
database.collection('vendor_categories').where('section_id', '==', active_id).where('publish', '==', true)
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:252:            : 
database.collection('vendor_categories').where('publish', '==', true);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:253:
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:254:        categoryRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:255:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:256:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:257:                
$('.cuisine_selector').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:258:                    .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:259:                    .text(data.title));
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:260:            })
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:270:
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:271:            if (cuisineValue) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:272:                refData = refData.where('categoryID', 
'array-contains', cuisineValue);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:273:            }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:274:            ref = refData;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:275:            $('#storeTable').DataTable().ajax.reload();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:276:        });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:277:
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:278:        $(document).on('click', '.dt-button-collection 
.dt-button', function() {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:279:            $('.dt-button-collection').hide();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:280:            $('.dt-button-background').hide();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:299:                },
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:300:                {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:301:                    key: 'createdAt',
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:302:                    header: "{{ trans('lang.date') }}"
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:303:                },
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:304:                {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:305:                    key: 'items',
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:306:                    header: "{{ trans('lang.item') }}"
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:307:                },
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:308:                {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:309:                    key: 'orders',
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:310:                    header: "{{ trans('lang.order_plural') }}"
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:311:                },
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:312:            ],
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:313:            fileName: "{{ trans('lang.vendor_table') }}",
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:314:        };
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:315:        $(document).ready(function() {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:316:            $('.cuisine_selector').select2({
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:317:                placeholder: "{{ trans('lang.select_categoty') 
}}",
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:338:                    const orderColumnIndex = data.order[0].column;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:339:                    const orderDirection = data.order[0].dir;
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:340:                    const orderableColumns = 
(checkDeletePermission) ? ['', '', 'title',  'phonenumber', 'createdAt', 'items', 'orders'] : ['', 'title',  'phonenumber', 
'createdAt', 'items', 'orders']; // Ensure this matches the actual column names
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:341:                    const orderByField = 
orderableColumns[orderColumnIndex]; // Adjust the index to match your table
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:342:                    if (searchValue.length >= 3 || 
searchValue.length === 0) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:343:                        $('#data-table_processing').show();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:344:                    }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:345:                    await ref.get().then(async 
function(querySnapshot) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:346:                        if (querySnapshot.empty) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:347:                            $('.total_count').text(0);
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:348:                            console.error("No data found in 
Firestore.");
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:349:                            $('#data-table_processing').hide(); 
// Hide loader
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:350:                            callback({
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:351:                                draw: data.draw,
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:352:                                recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:353:                                recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:354:                                data: [] // No data
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:355:                            });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:356:                            return;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:367:                            childData.id = doc.id; // Ensure the 
document ID is included in the data
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:368:                            if (childData.id) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:369:                                childData.orders = await 
getTotalOrders(childData.id);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:370:                                childData.items = await 
getTotalProduct(childData.id);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:371:                            } else {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:372:                                childData.orders = 0;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:373:                                childData.items = 0;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:374:                                childData.foods = 0;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:375:                            }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:376:                            if (searchValue) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:377:                                var date = '';
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:378:                                var time = '';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:379:                                if 
(childData.hasOwnProperty("createdAt")) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:380:                                    try {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:381:                                        date = 
childData.createdAt.toDate().toDateString();
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:382:                                        time = 
childData.createdAt.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:383:                                    } catch (err) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:384:                                    }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:385:                                }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:386:                                var createdAt = date + '<br> ' + 
time;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:387:                                if (
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:388:                                    (childData.title && 
childData.title.toLowerCase().toString().includes(searchValue)) ||
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:389:                                    (createdAt && 
createdAt.toString().toLowerCase().indexOf(searchValue) > -1) ||
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:390:                                    (childData.email && 
childData.email.toLowerCase().toString().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:391:                                    (childData.phone && 
childData.phone.toLowerCase().toString().includes(searchValue)) 
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:392:                                   
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:393:                                ) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:394:                                    if (childData.title != '') {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:395:                                        
filteredRecords.push(childData);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:396:                                    }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:397:                                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:405:                            let aValue = a[orderByField] ? 
a[orderByField].toString().toLowerCase().trim() : '';
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:406:                            let bValue = b[orderByField] ? 
b[orderByField].toString().toLowerCase().trim() : '';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:407:                            if (orderByField === 'createdAt') {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:408:                                try {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:409:                                    aValue = a[orderByField] ? 
new Date(a[orderByField].toDate()).getTime() : 0;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:410:                                    bValue = b[orderByField] ? 
new Date(b[orderByField].toDate()).getTime() : 0;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:411:                                } catch (err) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:412:                                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:413:                            }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:414:                            if (orderByField === 'items') {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:415:                                aValue = a[orderByField] ? 
parseFloat(String(a[orderByField]).replace(/[^0-9.]/g, '')) || 0 : 0;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:416:                                bValue = b[orderByField] ? 
parseFloat(String(b[orderByField]).replace(/[^0-9.]/g, '')) || 0 : 0;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:417:                            }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:418:                            if (orderByField === 'orders') {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:419:                                aValue = a[orderByField] ? 
parseFloat(String(a[orderByField]).replace(/[^0-9.]/g, '')) || 0 : 0;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:420:                                bValue = b[orderByField] ? 
parseFloat(String(b[orderByField]).replace(/[^0-9.]/g, '')) || 0 : 0;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:421:                            }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:422:                            if (orderDirection === 'asc') {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:423:                                return (aValue > bValue) ? 1 : -1;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:424:                            } else {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:425:                                return (aValue < bValue) ? 1 : -1;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:426:                            }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:433:                        const today = new Date().setHours(0, 0, 
0, 0);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:434:                        await 
Promise.all(filteredRecords.map(async (childData) => {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:435:                            var isActive = false;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:436:                            if (childData.author) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:437:                                const user_id = childData.author;
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:438:                                isActive = await 
vendorStatus(user_id);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:439:                            }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:440:                            if (isActive) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:441:                                active_rest += 1;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:442:                            } else {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:443:                                inactive_rest += 1;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:444:                            }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:445:                            if (childData.createdAt && new 
Date(childData.createdAt.seconds * 1000).setHours(0, 0, 0, 0) === today) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:446:                                new_joined_rest += 1;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:447:                            }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:448:                        }));
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:449:                        $('.rest_count').text(totalRecords);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:450:                        $('.rest_active_count').text(active_rest);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:451:                        
$('.rest_inactive_count').text(inactive_rest);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:452:                        
$('.new_joined_rest').text(new_joined_rest);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:453:                        const paginatedRecords = 
filteredRecords.slice(start, start + length);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:462:                        callback({
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:463:                            draw: data.draw,
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:464:                            recordsTotal: totalRecords, // Total 
number of records in Firestore
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:465:                            recordsFiltered: totalRecords, // 
Number of records after filtering (if any)
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:466:                            filteredData: filteredRecords,
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:467:                            data: records // The actual data to 
display in the table
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:468:                        });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:469:                    }).catch(function(error) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:470:                        console.error("Error fetching data from 
Firestore:", error);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:471:                        $('#data-table_processing').hide(); // 
Hide loader
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:472:                        callback({
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:473:                            draw: data.draw,
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:474:                            recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:475:                            recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:476:                            data: [] // No data due to error
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:477:                        });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:478:                    });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:573:            var actionHtml = '';
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:574:            actionHtml = actionHtml + '<span class="action-btn">';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:575:            var payoutRequests = '{{ 
route('users.walletstransaction', ':id') }}';
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:576:            payoutRequests = payoutRequests.replace(':id', 
'storeID=' + val.author);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:577:            actionHtml = actionHtml+'<a href="' + payoutRequests 
+ '" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.wallet_history') }}"><i class="mdi mdi-wallet" ></i></a>';
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:578:          
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:579:            if (checkCopyPermission) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:580:                actionHtml = actionHtml + '<a 
href="javascript:void(0)" vendor_id="' + val.id + '" author="' + val.author + '" name="vendor-clone" data-toggle="tooltip" 
data-bs-original-title="{{ trans('lang.copy') }}"><i class="mdi mdi-content-copy"></i></a>';
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:581:            }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:582:            actionHtml = actionHtml + '<a href="' + route_view + 
'" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.view') }}"><i class="mdi mdi-eye"></i></a><a href="' + route1 + '" 
data-toggle="tooltip" data-bs-original-title="{{ trans('lang.edit') }}"><i class="mdi mdi-lead-pencil"></i></a>';
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:583:            if (checkDeletePermission) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:608:            var date = '';
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:609:            var time = '';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:610:            if (val.hasOwnProperty("createdAt")) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:611:                try {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:612:                    date = val.createdAt.toDate().toDateString();
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:613:                    time = 
val.createdAt.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:614:                } catch (err) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:615:                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:616:                html.push('<span class="dt-time">' + date + '<br> 
' + time + '</span>');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:617:            } else {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:618:                html.push('');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:619:            }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:620:            
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:621:            var vendorId = val.id;
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:622:            var url = '{{ route('vendors.items', ':id') }}';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:623:            url1 = url.replace(":id", vendorId);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:624:            html.push((val.items > 0 ? '<a  href="' + url1 + '">' 
+ val.items + '</a>' : val.items));
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:625:            
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:626:            var url = '{{ route('vendors.orders', ':id') }}';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:627:            url2 = url.replace(":id", vendorId);
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:628:            html.push((val.orders > 0 ? '<a  href="' + url2 + 
'">' + val.orders + '</a>' : val.orders));
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:629:           
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:630:            var active = val.isActive;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:631:            return html;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:632:        }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:633:        async function vendorStatus(id) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:634:            let status = true;
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:635:            await 
database.collection('users').doc(id).get().then((snapshots) => {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:636:                let data = snapshots.data();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:637:                if (data) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:638:                    status = data.active;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:639:                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:640:            });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:641:            return status;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:642:        }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:643:      
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:644:        async function getTotalProduct(id) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:645:            var totalProduct = '';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:646:            await 
database.collection('vendor_products').where('vendorID', '==', id).get().then(async function(productSnapshots) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:647:                totalProduct = productSnapshots.docs.length;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:648:            });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:649:            return totalProduct;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:650:        }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:651:        async function getTotalOrders(id) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:652:            var order_total = '';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:653:            await 
database.collection('vendor_orders').where('vendorID', '==', id).get().then(async function(productSnapshots) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:654:                order_total = productSnapshots.docs.length;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:655:            });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:656:            return order_total;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:657:        }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:658:        $("#is_active").click(function() {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:659:            $("#storeTable .is_open").prop('checked', 
$(this).prop('checked'));
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:660:        });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:661:        $("#deleteAll").click(async function() {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:666:                            var dataId = $(this).attr('dataId');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:667:                            var author = $(this).attr('author');
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:668:                            await 
deleteDocumentWithImage('vendors', dataId, 'photo', ['vendorMenuPhotos', 'photos'])
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:669:                                .then(() => {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:670:                                    const getStoreName = 
deleteStoreData(dataId);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:671:                                    setTimeout(function() {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:672:                                        window.location.reload();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:673:                                    }, 7000);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:674:                                })
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:675:                                .catch((error) => {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:676:                                    console.error('Error deleting 
document with image:', error);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:684:        });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:685:        async function deleteStoreData(storeId) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:686:            await database.collection('users').where('vendorID', 
'==', storeId).where('role', '==', 'vendor').get().then(async function(userssanpshots) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:687:                if (userssanpshots.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:688:                    var projectId = '<?php echo 
env('FIREBASE_PROJECT_ID'); ?>';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:689:                    var item_data = userssanpshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:690:                    var dataObject = {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:691:                        "data": {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:692:                            "uid": item_data.id
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:693:                        }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:694:                    };
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:695:                    //delete vendor from mysql
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:696:                    await 
database.collection('settings').doc("Version").get().then(function(snapshot) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:697:                        var settingData = snapshot.data();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:698:                        if (settingData && settingData.storeUrl) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:699:                            var siteurl = settingData.storeUrl + 
"/api/delete-user";
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:700:                            var dataObject = {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:701:                                "uuid": item_data.id
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:702:                            };
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:703:                            jQuery.ajax({
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:704:                                url: siteurl,
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:722:                        success: async function(data) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:723:                            console.log('Delete user success:', 
data.result);
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:724:                            await 
deleteDocumentWithImage('users', item_data.id, 'profilePictureURL');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:725:                        },
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:726:                        error: function(xhr, status, error) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:727:                            var responseText = 
JSON.parse(xhr.responseText);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:728:                            console.log('Delete user error:', 
responseText.error);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:729:                        }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:730:                    });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:731:                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:732:            });
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:733:            var productSnapshot = await 
database.collection('vendor_products').where('vendorID', '==', storeId).get();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:734:            if (!productSnapshot.empty) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:735:                for (const doc of productSnapshot.docs) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:736:                    await 
deleteDocumentWithImage('vendor_products', doc.id, 'photo', 'photos');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:737:                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:738:            }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:739:            var orderSnapshot = await 
database.collection('vendor_orders').where('vendorID', '==', storeId).get();
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:740:            if (!orderSnapshot.empty) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:741:                for (const doc of orderSnapshot.docs) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:742:                    await 
deleteDocumentWithImage('vendor_orders', doc.id);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:743:                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:744:            }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:745:            var reviewSnapshot = await 
database.collection('items_review').where('VendorId', '==', storeId).get();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:746:            if (!reviewSnapshot.empty) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:747:                for (const doc of reviewSnapshot.docs) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:748:                    await deleteDocumentWithImage('items_review', 
doc.id, '', 'photos');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:749:                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:750:            }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:751:            var couponSnapshot = await 
database.collection('coupons').where('vendorID', '==', storeId).get();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:752:            if (!couponSnapshot.empty) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:753:                for (const doc of couponSnapshot.docs) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:754:                    await deleteDocumentWithImage('coupons', 
doc.id, 'image');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:755:                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:756:            }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:757:            var payoutSnapshot = await 
database.collection('payouts').where('vendorID', '==', storeId).get();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:758:            if (!payoutSnapshot.empty) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:759:                for (const doc of payoutSnapshot.docs) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:760:                    await 
database.collection('payouts').doc(doc.id).delete()
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:761:                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:762:            }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:763:            const storySnapshot = await 
database.collection('story').where('vendorID', '==', storeId).get();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:764:            if (!storySnapshot.empty) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:765:                for (const doc of storySnapshot.docs) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:766:                    await deleteDocumentWithImage('story', 
doc.id, 'videoThumbnail', 'videoUrl');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:767:                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:768:            }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:769:            const snapshots = await 
database.collection('advertisements').where('vendorId', '==', storeId).get();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:770:            if (!snapshots.empty) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:771:                for (const doc of snapshots.docs) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:772:                    await 
deleteDocumentWithImage('advertisements', doc.id);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:773:                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:774:            }
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:775:            const driverSnapshots = await 
database.collection('users').where('role', '==', 'driver').where('vendorID', '==', storeId).get();
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:776:            if (!driverSnapshots.empty) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:777:                for (const doc of driverSnapshots.docs) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:778:                    await deleteDocumentWithImage('users', 
doc.id, 'profilePictureURL');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:779:                }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:780:            }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:781:        }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:782:        $(document.body).on('click', '.redirecttopage', 
function() {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:783:            var url = $(this).attr('data-url');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:784:            window.location.href = url;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:785:        });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:786:        async function userPhone(author) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:787:            var userPhones = '';
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:788:            await database.collection('users').where("id", "==", 
author).get().then(async function(snapshotss) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:789:                if (snapshotss.docs[0]) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:790:                    var user = snapshotss.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:791:                    userPhones = user.phoneNumber;
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:792:                    if (user.isActive) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:793:                        jQuery(".active_vendor_" + author + " 
span").addClass('badge-danger');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:794:                        jQuery(".active_vendor_" + author + " 
span").text('No');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:795:                    } else {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:796:                        jQuery(".active_vendor_" + author + " 
span").addClass('badge-success');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:797:                        jQuery(".active_vendor_" + author + " 
span").text('Yes');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:798:                    }
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:799:                } else {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:800:                    jQuery(".phone_" + author).html('');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:813:            var author = $(this).attr('author');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:814:            jQuery("#data-table_processing").show();
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:815:            await deleteDocumentWithImage('vendors', id, 'photo', 
['vendorMenuPhotos', 'photos'])
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:816:                .then(() => {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:817:                    return deleteStoreData(id);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:818:                })
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:819:                .then(() => {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:820:                    setTimeout(function() {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:821:                        window.location.reload();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:822:                    }, 7000);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:823:                })
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:831:            var id = $(this).attr('vendor_id');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:832:            var author = $(this).attr('author');
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:833:            await 
database.collection('users').doc(author).get().then(async function(snapshotsusers) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:834:                userData = snapshotsusers.data();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:835:            });
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:836:            await 
database.collection('vendors').doc(id).get().then(async function(snapshotsvendors) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:837:                vendorData = snapshotsvendors.data();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:838:            });
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:839:            await 
database.collection('vendor_products').where('vendorID', '==', id).get().then(async function(snapshotsproducts) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:840:                vendorProducts = [];
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:841:                snapshotsproducts.docs.forEach(async (product) => 
{
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:842:                    vendorProducts.push(product.data());
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:843:                });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:844:            });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:845:            if (userData && vendorData) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:846:                jQuery("#create_vendor").modal('show');
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:847:                
jQuery("#vendor_title_lable").text(vendorData.title);
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:850:        });
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:851:        $(document).on("click", "#create_vendor_submit", async 
function(e) {
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:852:            var vendor_id = database.collection("tmp").doc().id;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:853:            if (userData && vendorData) {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:854:                var vendor_title = jQuery("#vendor_title").val();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:855:                var userFirstName = jQuery("#user_name").val();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:856:                var userLastName = 
jQuery("#user_last_name").val();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:857:                var email = jQuery("#user_email").val();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:858:                var password = jQuery("#user_password").val();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:859:                if (userFirstName == '') {
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:860:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:890:                        userData.lastName = userLastName;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:891:                        userData.id = user_id;
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:892:                        userData.vendorID = vendor_id;
> C:\deploy\adminpanel\resources\views\stores\index.blade.php:893:                        userData.createdAt = createdAt;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:894:                        userData.wallet_amount = 0;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:895:                        vendorData.author = user_id;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:896:                        vendorData.authorName = userFirstName + ' 
' + userLastName;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:897:                        vendorData.title = vendor_title;
  C:\deploy\adminpanel\resources\views\stores\index.blade.php:898:                        vendorData.id = vendor_id;




### CANDIDATE_FILE: resources\views\stores\view.blade.php
SCORE: 30
TAGS: vendors,vendor_products,vendor_categories,sections,orders,firebase.firestore,.collection,.set,.update,createdAt,zoneId
MATCHES:

  C:\deploy\adminpanel\resources\views\stores\view.blade.php:49:                        </li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:50:                        <li>
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:51:                            <a href="{{ route('vendors.items', $id) 
}}"><i
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:52:                                    
class="ri-shopping-basket-fill"></i>{{ trans('lang.tab_items') }}</a>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:53:                        </li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:54:                        <li>
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:55:                            <a href="{{ route('vendors.orders', 
$id) }}"><i class="ri-shopping-bag-line"></i>
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:56:                                {{ trans('lang.tab_orders') }}</a>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:57:                        </li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:58:                        <li>
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:59:                            <a href="{{ route('vendors.reviews', 
$id) }}"><i
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:60:                                    
class="ri-shield-star-fill"></i>{{ trans('lang.tab_reviews') }}</a>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:61:                        </li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:62:                        <li>
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:63:                            <a href="{{ route('vendors.coupons', 
$id) }}"><i
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:64:                                    
class="ri-discount-percent-fill"></i>{{ trans('lang.tab_promos') }}</a>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:65:                        <li>
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:66:                            <a href="{{ route('vendors.payout', 
$id) }}"><i
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:67:                                    
class="ri-bank-card-line"></i>{{ trans('lang.tab_payouts') }}</a>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:68:                        </li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:69:                        <li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:70:                            <a href="{{ 
route('payoutRequests.vendor.view', $id) }}"><i
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:71:                                    class="ri-refund-line"></i>{{ 
trans('lang.tab_payout_request') }}</a>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:72:                        </li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:73:                        <li class="dine_in_future" 
style="display:none;">
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:74:                            <a href="{{ route('vendors.booktable', 
$id) }}"><i
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:75:                                    
class="ri-restaurant-line"></i>{{ trans('lang.dine_in_booking_history') }}</a>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:76:                        </li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:77:                        <?php if (in_array('wallet-transaction', 
json_decode(@session('user_permissions'),true))) { ?>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:78:                        <li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:79:                            <a class="wallet_transaction"><i
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:80:                                    class="ri-wallet-line"></i>{{ 
trans('lang.wallet_transaction') }}</a>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:81:                        </li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:82:                        <?php }?>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:112:                            <div class="card-body d-flex 
justify-content-between align-items-center">
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:113:                                <div class="card-box-with-content">
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:114:                                    <h4 class="text-dark-2 mb-1 h4 
rest_count" id="total_orders">0</h4>
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:115:                                    <p class="mb-0 small 
text-dark-2">{{ trans('lang.dashboard_total_orders') }}</p>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:116:                                </div>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:117:                                <span class="box-icon ab"><img 
src="{{ asset('images/total_order.png') }}"></span>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:118:                            </div>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:119:                        </div>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:120:                    </div>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:121:                    <div class="col-md-3">
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:122:                        <div class="card card-box-with-icon bg--2">
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:123:                            <div class="card-body d-flex 
justify-content-between align-items-center">
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:715:        var id = "{{ $id }}";
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:716:        var serviceType = getCookie('service_type');
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:717:        var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:718:        var ref = database.collection('vendors').where("id", "==", 
id);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:719:        var photo = "";
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:720:        var vendorOwnerId = "";
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:721:        var vendorOwnerOnline = false;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:722:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:723:        var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:724:        var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:725:        var sectionId = '';
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:726:        placeholder.get().then(async function(snapshotsimage) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:727:            var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:728:            placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:729:        })
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:730:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:731:        var currentCurrency = '';
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:732:        var currencyAtRight = false;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:733:        var decimal_degits = 0;
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:734:        var refCurrency = 
database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:735:        refCurrency.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:736:            var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:737:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:738:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:739:            if (currencyData.decimal_degits) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:740:                decimal_degits = currencyData.decimal_degits;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:741:            }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:742:        });
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:748:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:749:                var vendor = snapshots.docs[0].data();
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:750:                sectionId = vendor.section_id;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:751:                if (vendor.hasOwnProperty('adminCommission') && 
vendor.adminCommission != null && vendor
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:752:                    .adminCommission != '') {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:753:                    if (vendor.adminCommission.type == 
"percentage") {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:754:                        AdminCommission = 
vendor.adminCommission.commission + '' + '%';
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:755:                    } else {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:756:                        if (currencyAtRight) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:757:                            AdminCommission = 
vendor.adminCommission.commission.toFixed(decimal_degits) +
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:758:                                currentCurrency;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:764:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:765:                }
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:766:                database.collection('sections').where('id', '==', 
vendor.section_id).get().then((
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:767:                    querySnapshot) => {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:768:                        var commissionSetting = 
querySnapshot.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:769:                        if 
(commissionSetting.adminCommision.enable == true) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:770:                            commisionModel = true;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:771:                        }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:772:                        if (AdminCommission == '') {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:773:                            if 
(commissionSetting.adminCommision.type == "percentage") {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:774:                                AdminCommission = 
commissionSetting.adminCommision.commission + '' + '%';
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:790:                    });
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:791:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:792:                
database.collection('settings').doc("vendor").get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:793:                    var businessModelSettings = snapshots.data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:794:                    if 
(businessModelSettings.hasOwnProperty('subscription_model') &&
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:795:                        businessModelSettings.subscription_model 
== true) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:796:                        subscriptionModel = true;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:797:                    }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:798:                });
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:799:            }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:800:        });
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:802:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:803:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:804:        var email_templates = 
database.collection('email_templates').where('type', '==', 'wallet_topup');
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:805:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:806:        var emailTemplatesData = null;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:807:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:808:        $(document).ready(async function() {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:809:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:810:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:811:            await email_templates.get().then(async 
function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:812:                emailTemplatesData = snapshots.docs.length > 0 ? 
snapshots.docs[0].data() : null;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:819:            }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:820:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:821:            var orders = await getTotalOrders();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:822:            var items = await getTotalItems();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:823:            var earnings = await getTotalEarnings();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:824:            var payment = await getTotalpayment();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:825:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:826:            var remaining = earnings - payment;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:827:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:828:            if (currencyAtRight) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:829:                remaining_with_currency = 
parseFloat(remaining).toFixed(decimal_degits) + "" + currentCurrency;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:849:                    
$(".vendor_cuisines").text(categoryTitleString);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:850:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:851:                    var wallet_route = "{{ 
route('users.walletstransaction', 'id') }}";
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:852:                    wallet_route = wallet_route.replace('id', 
'storeID=' + vendor.author);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:853:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:854:                    $(".wallet_transaction").attr("href", 
wallet_route.replace('id', 'storeID=' +
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:855:                        vendor.author));
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:856:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:857:                    $(".vendor_name").text(vendor.title);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:858:                    $(".itemTitle").text(' - ' + vendor.title);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:859:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:934:                            .itemLimit);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:935:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:936:                        
$('.available_order_limit').html((vendor.subscriptionTotalOrders == '-1') ?
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:937:                            "{{ trans('lang.unlimited') }}" : 
vendor.subscriptionTotalOrders);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:938:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:939:                        var snapshot = await 
database.collection('vendor_products').where(
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:940:                            'vendorID', '==', id).get();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:941:                        var totalProductCount = snapshot.size;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:942:                        if (vendor.subscription_plan.itemLimit == 
'-1') {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:943:                            
$('.available_item_limit').html("Unlimited");
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:944:                        } else {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:945:                            availableItemLimit = 
parseInt(vendor.subscription_plan.itemLimit) -
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:946:                                parseInt(totalProductCount);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:947:                            if (availableItemLimit < 0) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:948:                                $('.available_item_limit').html(0);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1065:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1066:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1067:                    await 
database.collection('vendor_categories').get().then(async function(
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1068:                        snapshots) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1069:                        snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1070:                            var data = listval.data();
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1071:                            if (data.id == vendor.categoryID) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1072:                                
$(".vendor_cuisines").text(data.title);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1073:                            }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1074:                        })
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1075:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1076:                        var categoryTitleString = 
Array.isArray(categoryTitles) ?
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1077:                            (categoryTitles.length > 0 ? 
categoryTitles.join(', ') :
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1078:                                'No categories available') :
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1079:                            (typeof categoryTitles === 'string' 
&& categoryTitles
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1085:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1086:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1087:                    await 
database.collection('sections').where('isActive', '==', true).orderBy('order').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1088:                        snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1089:                            var data = listval.data();
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1090:                            if (data.id == vendor.section_id) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1091:                                
$(".vendor_section").text(data.name);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1092:                                if (data.serviceTypeFlag ==
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1093:                                    "delivery-service") {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1094:                                    
$('.multivendor_status_div').removeClass(
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1095:                                        'd-none');
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1096:                                } else {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1097:                                    
$('.multivendor_status_div').html('');
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1098:                                }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1107:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1108:                    $(".vendor_address").text(vendor.location);
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1109:                    $(".vendor_latitude").text(vendor.latitude);
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1110:                    $(".vendor_longitude").text(vendor.longitude);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1111:                    
$(".vendor_description").text(vendor.description);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1112:                   
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1113:                    let profilePic = vendor.authorProfilePic;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1114:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1115:                    if (!profilePic || profilePic.trim() === "" 
|| profilePic === "null") {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1116:                        profilePic = placeholderImage;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1117:                    }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1118:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1123:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1124:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1125:                    if (vendor.hasOwnProperty('zoneId') && 
vendor.zoneId) {
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1126:                        database.collection('zone').where('id', 
'==', vendor.zoneId).get().then(
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1127:                            async function(zoneSnapshots) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1128:                                if (!zoneSnapshots.empty) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1129:                                    var zoneData = 
zoneSnapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1130:                                    var zoneTitle = zoneData.name 
|| 'Unknown Zone';
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1131:                                    
$(".zone_name").text(zoneTitle);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1132:                                } else {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1133:                                    $(".zone_name").text("Not 
found Zone");
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1134:                                }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1142:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1143:                    if (
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1144:                        vendor.hasOwnProperty('latitude') &&
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1145:                        vendor.hasOwnProperty('longitude') &&
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1146:                        !isNaN(vendor.latitude) &&
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1147:                        !isNaN(vendor.longitude) &&
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1148:                        vendor.latitude !== null &&
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1149:                        vendor.longitude !== null
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1150:                    ) {
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1151:                        var lat = vendor.latitude;
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1152:                        var lng = vendor.longitude;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1153:                        var mapSrc =
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1154:                            
`https://maps.google.com/maps?width=600&height=225&hl=en&q=${lat},${lng}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1155:                        $(".gmap_iframe").attr("src", mapSrc);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1156:                    } else {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1157:                        $(".mapouter").html("<p>Location data not 
available for this vendor.</p>");
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1158:                    }
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1159:                    vendorOwnerOnline = vendor.isActive;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1160:                    photo = vendor.photo;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1161:                    vendorOwnerId = vendor.author;
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1162:                    await 
database.collection('users').where("id", "==", vendor.author).get().then(
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1163:                        async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1164:                            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1165:                                var user = listval.data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1166:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1167:                                
$(".vendor_email").html(shortEmail(user.email));
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1168:                                if 
(user.phoneNumber.includes('+')) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1169:                                    
$(".vendor_phoneNumber").html('+' +
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1170:                                        
EditPhoneNumber(user.phoneNumber.slice(
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1178:                        });
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1179:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1180:                    await 
database.collection('vendor_categories').get().then(async function(
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1181:                        snapshots) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1182:                        snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1183:                            var data = listval.data();
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1184:                            if (data.id == vendor.categoryID) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1185:                                $('#vendor_cuisines').append($(
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1186:                                        "<option 
selected></option>")
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1187:                                    .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1188:                                    .text(data.title));
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1189:                            } else {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1190:                                $('#vendor_cuisines').append($(
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1191:                                        "<option></option>")
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1192:                                    .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1218:                var cuisines = $("#vendor_cuisines 
option:selected").val();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1219:                var address = $(".vendor_address").val();
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1220:                var latitude = 
parseFloat($(".vendor_latitude").val());
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1221:                var longitude = 
parseFloat($(".vendor_longitude").val());
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1222:                var description = $(".vendor_description").val();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1223:                var zoneName = $(".zone_name").val();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1224:                var phonenumber = $(".vendor_phone").val();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1225:                var categoryTitle = $("#vendor_cuisines 
option:selected").text();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1226:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1227:                database.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1228:                    'title': vendorname,
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1229:                    'description': description,
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1230:                    'latitude': latitude,
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1231:                    'longitude': longitude,
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1232:                    'location': address,
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1233:                    'photo': photo,
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1234:                    'categoryID': cuisines,
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1235:                    'phonenumber': phonenumber,
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1236:                    'categoryTitle': categoryTitle
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1237:                }).then(function(result) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1238:                    window.location.href = '{{ route('stores') 
}}';
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1239:                });
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1240:            })
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1241:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1242:        })
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1243:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1244:        async function getWalletBalance(vendorId) {
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1245:            database.collection('users').where('id', '==', 
vendorId).get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1246:                if (snapshot.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1247:                    restaurant = snapshot.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1248:                    var wallet_balance = 0;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1249:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1250:                    if 
(restaurant.hasOwnProperty('wallet_amount') && restaurant.wallet_amount != null && !
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1251:                        isNaN(restaurant.wallet_amount)) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1252:                        wallet_balance = restaurant.wallet_amount;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1253:                    }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1302:        }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1303:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1304:        async function getTotalOrders() {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1305:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1306:            await 
database.collection('vendor_orders').where('vendorID', '==', '<?php echo $id; ?>').get().then(
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1307:            async function(orderSnapshots) {
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1308:                    var paymentData = orderSnapshots.docs;
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1309:                    $("#total_orders").text(paymentData.length);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1310:                })
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1311:        }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1312:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1313:        async function getTotalItems() {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1314:
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1315:            await 
database.collection('vendor_products').where('vendorID', '==', '<?php echo $id; ?>').get().then(
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1316:            async function(orderSnapshots) {
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1317:                    var itemsData = orderSnapshots.docs;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1318:                    $("#total_items").text(itemsData.length);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1319:                })
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1320:        }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1321:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1322:        async function getTotalEarnings() {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1323:            var totalEarning = 0;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1324:            var adminCommission = 0;
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1325:            await 
database.collection('vendor_orders').where('vendorID', '==', '<?php echo $id; ?>').where('status',
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1326:                'in', ["Order Completed"]).get().then(async 
function(orderSnapshots) {
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1327:                var paymentData = orderSnapshots.docs;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1328:                paymentData.forEach((order) => {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1329:                    var orderData = order.data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1330:                    var price = 0;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1331:                    if (orderData.adminCommission != undefined) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1332:                        var commission = 
parseInt(orderData.adminCommission);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1333:                        adminCommission = commission + 
adminCommission;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1334:                    }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1335:                    const orderProducts = 
Array.isArray(orderData.products) ? orderData.products : [];
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1364:            var total_price = 0;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1365:            var remaining = 0;
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1366:            await 
database.collection('payouts').where('vendorID', '==', '<?php echo $id; ?>').get().then(
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1367:            async function(payoutSnapshots) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1368:                    payoutSnapshots.docs.forEach((payout) => {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1369:                        var payoutData = payout.data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1370:                        if (payoutData.amount && 
parseFloat(payoutData.amount) != undefined &&
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1371:                            parseFloat(payoutData.amount) != '' 
&& parseFloat(payoutData.amount) != NaN
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1372:                            ) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1373:                            paid_price = parseFloat(paid_price) + 
parseFloat(payoutData.amount);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1374:                        }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1388:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1389:        $("#add-wallet-btn").click(function() {
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1390:            var date = 
firebase.firestore.FieldValue.serverTimestamp();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1391:            var amount = $('#amount').val();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1392:            if (amount == '' || amount <= 0) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1393:                $('#wallet_error').text('{{ 
trans('lang.add_wallet_amount_error') }}');
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1394:                return false;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1395:            }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1396:            var note = $('#note').val();
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1397:            database.collection('users').where('id', '==', 
vendorOwnerId).get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1398:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1399:                if (snapshot.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1400:                    var data = snapshot.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1401:                    var walletAmount = 0;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1402:                    if (data.hasOwnProperty('wallet_amount') && 
!isNaN(data.wallet_amount) && data
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1403:                        .wallet_amount != null) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1404:                        walletAmount = data.wallet_amount;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1405:                    }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1407:                    user_id = data.id;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1408:                    var newWalletAmount = 
parseFloat(walletAmount) + parseFloat(amount);
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1409:                    
database.collection('users').doc(vendorOwnerId).update({
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1410:                        'wallet_amount': newWalletAmount
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1411:                    }).then(function(result) {
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1412:                        var tempId = 
database.collection("tmp").doc().id;
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1413:                        
database.collection('wallet').doc(tempId).set({
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1414:                            'amount': parseFloat(amount),
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1415:                            'date': date,
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1416:                            'isTopUp': true,
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1417:                            'id': tempId,
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1418:                            'order_id': '',
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1419:                            'payment_method': 'Wallet',
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1420:                            'payment_status': 'success',
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1421:                            'user_id': user_id,
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1503:            $('#default-plan').html('');
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1504:            var activeSubscriptionId = '';
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1505:            var snapshots = await 
database.collection('subscription_history').where('user_id', '==', vendorOwnerId)
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1506:                .orderBy('createdAt', 'desc').get();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1507:            if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1508:                var data = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1509:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1510:                activeSubscriptionId = data.subscription_plan.id;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1511:            }
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1512:            
database.collection('subscription_plans').where('isEnable', '==', true).where('sectionId', '==', sectionId)
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1513:                .get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1514:                    let plans = [];
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1515:                    snapshots.docs.map(doc => {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1516:                        let data = doc.data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1517:                        plans.push({
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1518:                            ...data
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1519:                        }); // Include document ID if needed
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1520:                    });
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1559:                                });
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1560:                                html +=
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1561:                                    `<li><span class="mdi 
mdi-check"></span>{{ trans('lang.unlimited') }} {{ trans('lang.orders') }}</li>`
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1562:                                html +=
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1563:                                    `<li><span class="mdi 
mdi-check"></span>{{ trans('lang.unlimited') }} {{ trans('lang.products') }}</li>`
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1564:                                html += `</ul>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1565:                                        </div>`;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1566:                                var buttonText = (activeClass == 
'') ?
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1567:                                    "{{ trans('lang.select_plan') 
}}" :
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1568:                                    "{{ trans('lang.renew_plan') 
}}";
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1569:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1610:                                    ${features.qrCodeGenerate? 
`<li><span class="mdi mdi-check"></span>${translations.generateQrCode}</li>`:`<li><span class="mdi mdi-close" 
style="color:red;"></span>${translations.generateQrCode}</li>`}
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1611:                                    ${features.ownerMobileApp? 
`<li><span class="mdi mdi-check"></span>${translations.mobileAppAccess}</li>`:`<li><span class="mdi mdi-close" 
style="color:red;"></span>${translations.mobileAppAccess}</li>`}     
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1612:                                    <li><span class="mdi 
mdi-check"></span>${data.orderLimit==-1? "{{ trans('lang.unlimited') }}":data.orderLimit} {{ trans('lang.orders') }}</li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1613:                                    <li><span class="mdi 
mdi-check"></span>${data.itemLimit==-1? "{{ trans('lang.unlimited') }}":data.itemLimit} {{ trans('lang.products') }}</li>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1614:                                </ul>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1615:                                </div>`;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1616:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1617:                                html += `<div 
class="pricing-card-btm">
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1618:                                        <a 
href="javascript:void(0)" onClick="chooseSubscriptionPlan('${data.id}')" class="btn rounded-full">${buttonText}</a>
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1619:                                    </div>`;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1620:
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1630:            $("#plan_id").val(planId);
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1631:            var activePlan = '';
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1632:            var snapshots = await 
database.collection('subscription_history').where('user_id', '==', vendorOwnerId)
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1633:                .orderBy('createdAt', 'desc').get();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1634:            if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1635:                var data = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1636:                activePlan = data.subscription_plan;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1637:            }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1638:            var choosedPlan = '';
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1639:            var snapshot = await 
database.collection('subscription_plans').doc(planId).get();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1640:            if (snapshot.exists) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1641:                choosedPlan = snapshot.data();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1642:            }
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1643:            let html = '';
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1644:            let choosedPlan_price;
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1645:            if (parseInt(choosedPlan.price) != 0) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1646:                choosedPlan_price = currencyAtRight ? 
parseFloat(choosedPlan.price).toFixed(decimal_degits) +
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1647:                    currentCurrency :
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1767:            if (planId != undefined && planId != '' && planId != 
null) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1768:                var userId = id;
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1769:                var vendorId = id;
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1770:                var id_order = 
database.collection('tmp').doc().id;
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1771:                var snapshot = await 
database.collection('subscription_plans').doc(planId).get();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1772:                if (snapshot.exists) {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1773:                    var planData = snapshot.data();
> C:\deploy\adminpanel\resources\views\stores\view.blade.php:1774:                    var createdAt = 
firebase.firestore.FieldValue.serverTimestamp();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1775:                    if (planData.expiryDay == "-1") {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1776:                        var expiryDay = null
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1777:                    } else {
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1778:                        var currentDate = new Date();
  C:\deploy\adminpanel\resources\views\stores\view.blade.php:1779:                        currentDate.setDate(currentDate.getDate() 
+ parseInt(planData.expiryDay));



TEXT_END

## DIR: resources\views\reports
TEXT_START
FILE_COUNT: 2

### CANDIDATE_FILE: resources\views\reports\sales-reports.blade.php
SCORE: 17
TAGS: vendors,vendor_categories,orders,firebase.firestore,.collection,createdAt
MATCHES:

  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:24:                                
<legend>{{trans('lang.reports_sale')}}</legend>
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:25:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:26:                                <div class="form-group 
row width-50 vendors_div">
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:27:                                    <label class="col-3 
control-label">{{trans('lang.select_vendor')}}</label>
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:28:                                    <div class="col-7">
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:29:                                        <select 
class="form-control vendors">
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:30:                                            <option 
value="">{{trans('lang.all')}}</option>
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:31:                                        </select>
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:32:                                    </div>
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:33:                                </div>
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:34:                                <div class="form-group 
row width-50 driver_div">
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:35:                                    <label class="col-3 
control-label">{{trans('lang.select_driver')}}</label>
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:36:                                    <div class="col-7">
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:37:                                        <select 
class="form-control driver">
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:124:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:125:    <script>
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:126:        var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:127:        var refCurrency = 
database.collection('currencies').where('isActive', '==', true).limit('1');
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:128:        var vendorsRef = 
database.collection('vendors').orderBy('title').orderBy('createdAt');
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:129:        var driverUserRef = 
database.collection('users').where('role', '==', 'driver').orderBy('firstName').orderBy('createdAt');
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:130:        var customerRef = 
database.collection('users').where('role', '==', 'customer').orderBy('firstName').orderBy('createdAt');
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:131:        var categoryRef = 
database.collection('vendor_categories').orderBy('title');
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:132:        var paymentMethodRef = 
database.collection('settings').doc('payment');
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:133:        var providerRef = 
database.collection('users').where('role', '==', 'provider').orderBy('firstName').orderBy('createdAt');
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:134:        var workerRef = 
database.collection('providers_workers').orderBy('firstName');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:135:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:136:        var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:137:        var service_type = getCookie('service_type') || 
'';
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:138:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:139:        setDate();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:140:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:141:        async function setDate() {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:142:            var start = moment().subtract(29, 'days');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:143:            var end = moment();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:144:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:165:            
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:166:            if (service_type == 'cab-service' || 
service_type == 'parcel_delivery' || service_type == 'rental-service') {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:167:                $('.vendors_div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:168:                $('.category_div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:169:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:170:            }else if(service_type=='ondemand-service'){
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:171:                $('.vendors_div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:172:                $('.category_div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:173:                $('.driver_div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:174:                $('.provider_div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:175:                $('.worker_div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:176:            }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:177:            else {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:178:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:179:                $('.vendors_div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:180:                $('.category_div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:181:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:182:                await 
database.collection('vendors').orderBy('title').where('section_id', '==', section_id).get().then(function (snapShots) {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:183:                    $('.vendors').empty();
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:184:                    $('.vendors').html('<option 
value="">{{trans("lang.all")}}</option>');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:185:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:186:                    if (snapShots.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:187:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:188:                        snapShots.docs.forEach((listval) 
=> {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:189:                            var data = listval.data();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:190:                            
arraySectionVendor.push(data.id);
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:191:                            
$('.vendors').append('<option value="' + data.id + '">' + data.title + '</option>');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:192:                        });
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:193:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:194:                    }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:195:                });
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:196:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:197:                await 
database.collection('vendor_categories').orderBy('title').where('section_id', '==', section_id).get().then(function (snapShots) {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:198:                    $('.category').empty();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:199:                    $('.category').html('<option 
value="">{{trans("lang.all")}}</option>');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:200:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:201:                    if (snapShots.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:202:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:203:                        snapShots.docs.forEach((listval) 
=> {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:204:                            var data = listval.data();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:205:                            
arraySectionCategory.push(data.id);
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:212:            }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:213:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:214:            await 
database.collection('users').where('role', '==', 'driver').orderBy('firstName').where('serviceType', '==', 
service_type).get().then(function (snapShots) {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:215:                $('.driver').empty();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:216:                $('.driver').html('<option 
value="">{{trans("lang.all")}}</option>');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:217:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:218:                if (snapShots.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:219:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:220:                    snapShots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:221:                        var data = listval.data();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:222:                        arraySectionDriver.push(data.id);
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:332:        }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:333:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:334:        async function getReportData(orderSnapshots, 
service_type) {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:335:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:336:            var orderData = [];
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:337:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:338:            await 
Promise.all(orderSnapshots.docs.map(async (order) => {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:339:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:340:                var orderObj = order.data();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:341:                var orderId = orderObj.id;
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:342:                var finalOrderObject = {};
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:343:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:344:                finalOrderObject['Order ID'] = orderId;
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:345:                var driverData = ((orderObj.driver && 
orderObj.driver != null) ? orderObj.driver : '');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:346:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:395:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:396:                var userData = ((orderObj.author && 
orderObj.author != null) ? orderObj.author : '');
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:397:                var date = orderObj.createdAt.toDate();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:398:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:399:                var distanceType = 
((orderObj.distanceType && orderObj.distanceType != "" && orderObj.distanceType != null) ? orderObj.distanceType : "");
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:400:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:401:                finalOrderObject['User Name'] = 
((userData.firstName) ? ((userData.lastName) ? userData.firstName + ' ' + userData.lastName : userData.firstName) : "");
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:402:                finalOrderObject['User Email'] = 
((userData.email) ? shortEmail(userData.email) : "");
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:403:                finalOrderObject['User Phone'] = 
((userData.phoneNumber) ? (userData.phoneNumber.includes('+') ? EditPhoneNumber(userData.phoneNumber.slice(1)) : '(+) ' + 
EditPhoneNumber(userData.phoneNumber)) : '');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:404:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:405:                finalOrderObject['Date'] = 
moment(date).format('ddd MMM DD YYYY h:mm:ss A');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:627:        $(document).on('click', 
'.download-sales-report', function () {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:628:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:629:            var vendors = $(".vendors :selected").val();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:630:            var driver = $(".driver :selected").val();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:631:            var customer = $(".customer 
:selected").val();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:632:            var provider = $(".providers 
:selected").val();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:633:            var worker = $(".workers :selected").val();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:634:            var category = $(".category 
:selected").val();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:635:            var payment_method = $(".payment_method 
:selected").val();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:636:            var fileFormat = $(".file_format 
:selected").val();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:637:            let start_date = 
moment($('#reportrange').data('daterangepicker').startDate).toDate();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:650:                jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:651:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:652:                var ordersRef = "";
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:653:                var headerArray = [];
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:654:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:655:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:656:                if (service_type == 'cab-service') {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:657:                    ordersRef = 
database.collection('rides').where('status', 'in', ["Order Completed"]).orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:658:                    headerArray = ['Order ID', 'From', 
'To', 'Driver Name', 'Driver Email', 'Driver Phone', 'Vehicle Name', 'Vehicle Make', 'Vehicle Number', 'User Name', 'User Email', 
'User Phone', 'Date', 'Payment Method', 'Total', 'Admin Commission'];
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:659:                    if (driver == "") {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:660:                        ordersRef = 
ordersRef.where('driver.service_type', '==', service_type)
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:661:                    }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:662:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:663:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:664:                } else if (service_type == 
'parcel_delivery') {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:665:                    ordersRef = 
database.collection('parcel_orders').where('status', 'in', ["Order Completed"]).orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:666:                    headerArray = ['Order ID', 'From', 
'To', 'Driver Name', 'Driver Email', 'Driver Phone', 'Vehicle Name', 'Vehicle Make', 'Vehicle Number', 'User Name', 'User Email', 
'User Phone', 'Date', 'Payment Method', 'Total', 'Admin Commission'];
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:667:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:668:                    if (driver == "") {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:669:                        ordersRef = 
ordersRef.where('driver.service_type', '==', service_type)
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:670:                    }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:671:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:672:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:673:                } else if (service_type == 
'rental-service') {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:674:                    ordersRef = 
database.collection('rental_orders').where('status', 'in', ["Order Completed"]).orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:675:                    headerArray = ['Order ID', 'From', 
'To', 'Driver Name', 'Driver Email', 'Driver Phone', 'Vehicle Name', 'Vehicle Make', 'Vehicle Number', 'User Name', 'User Email', 
'User Phone', 'Date', 'Payment Method', 'Total', 'Admin Commission'];
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:676:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:677:                    if (driver == "") {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:678:                        ordersRef = 
ordersRef.where('driver.service_type', '==', service_type)
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:679:                    }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:680:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:681:                } else if (service_type == 
'ondemand-service') {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:682:                    ordersRef = 
database.collection('provider_orders').where('status', 'in', ["Order 
Completed"]).where('sectionId','==',section_id).orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:683:                   
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:684:                    if(provider!=''){
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:685:                            ordersRef = 
ordersRef.where('provider.author', '==', provider);
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:686:                    }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:687:                    if (worker != "") {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:688:                        ordersRef = 
ordersRef.where('workerId', '==', worker);
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:689:                    }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:690:                    if (customer != "") {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:691:                        ordersRef = 
ordersRef.where('authorID', '==', customer);
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:692:                    }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:693:                    headerArray = ['Order ID', 
'Provider', 'Provider Phone', 'Worker Name', 'Worker Phone', 'Service Name','User Name', 'User Email', 'User Phone', 'Date', 
'Payment Method', 'Total', 'Admin Commission'];
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:694:                }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:695:                else {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:696:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:697:                    headerArray = ['Order ID', 'Vendor 
Name', 'Category', 'Driver Name', 'Driver Email', 'Driver Phone', 'User Name', 'User Email', 'User Phone', 'Date', 'Payment 
Method', 'Total', 'Admin Commission'];
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:698:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:699:                    ordersRef = 
database.collection('vendor_orders').where('status', 'in', ["Order Completed"]).where('section_id', '==', 
section_id).orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:700:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:701:                    if (vendors != "") {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:702:                        ordersRef = 
ordersRef.where('vendorID', '==', vendors)
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:703:                    }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:704:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:705:                    if (category != "") {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:706:                        ordersRef = 
ordersRef.where('vendor.categoryID', '==', category)
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:707:                    }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:708:                }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:709:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:710:                if (driver != "") {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:711:                    ordersRef = 
ordersRef.where('driverID', '==', driver)
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:712:                }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:713:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:714:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:715:                if (customer != "") {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:716:                    ordersRef = 
ordersRef.where('authorID', '==', customer)
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:717:                }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:718:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:719:                if (start_date != "") {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:720:                    ordersRef = 
ordersRef.where('createdAt', '>=', start_date)
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:721:                }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:722:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:723:                if (end_date != "") {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:724:                    ordersRef = 
ordersRef.where('createdAt', '<=', end_date)
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:725:                }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:726:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:727:                if (fileFormat == 'xls' || fileFormat == 
'csv') {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:728:                    headers = headerArray;
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:729:                    var script = 
document.createElement("script");
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:730:                    script.setAttribute("src", 
"https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js");
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:731:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:732:                    var head = document.head;
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:749:                }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:750:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:751:                ordersRef.get().then(async function 
(orderSnapshots) {
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:752:
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:753:                    if (orderSnapshots.docs.length > 0) {
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:754:                        var reportData = await 
getReportData(orderSnapshots, service_type);
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:755:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:756:                        generateReport(reportData, 
headers, fileFormat);
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:757:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:758:                        
jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:759:                        setDate();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:760:                        
$('.file_format').val('').trigger('change');
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:761:                        
$('.section_id').val('').trigger('change');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:762:                        
$('.driver').val('').trigger('change');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:763:                        
$('.customer').val('').trigger('change');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:764:                        
$('.providers').val('').trigger('change');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:765:                        
$('.workers').val('').trigger('change');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:766:                        
$('.service').val('').trigger('change');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:767:                        
$('.status').val('').trigger('change');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:768:                        
$('.payment_method').val('').trigger('change');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:769:                        
$('.payment_status').val('').trigger('change');
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:793:       async function getWorkerData(workerId){
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:794:            var workerData='';
> C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:795:            await 
database.collection('providers_workers').get().then(async function(snapshot){
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:796:                if(snapshot.docs.length>0){
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:797:                    workerData=snapshot.docs[0].data();
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:798:                }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:799:            })
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:800:            return workerData;
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:801:       }
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:802:
  C:\deploy\adminpanel\resources\views\reports\sales-reports.blade.php:803:    </script>




### CANDIDATE_FILE: resources\views\reports\tax-reports.blade.php
SCORE: 13
TAGS: vendors,orders,firebase.firestore,.collection,createdAt
MATCHES:

  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:192:<script>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:193:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:194:    var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:195:    var service_type = getCookie('service_type') || '';
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:196:    var ordersCollection = 
getOrdersCollectionByService(service_type);
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:197:    var ordersSectionField = 
getOrdersSectionField(service_type);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:198:    
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:199:    var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:200:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:201:    /* TAX_REPORT_SAFE_TRACE */
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:202:    function isTaxReportDebugEnabled() {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:203:        try {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:204:            return new 
URLSearchParams(window.location.search).get('debug_tax_report') === '1';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:205:        } catch (error) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:206:            return false;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:207:        }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:216:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:217:    traceTaxReport('initial context', {
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:218:        sectionIdPresent: !!section_id,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:219:        serviceType: service_type || null,
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:220:        ordersCollection: ordersCollection || null,
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:221:        ordersSectionField: ordersSectionField || null
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:222:    });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:223:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:224:    var refCurrency = 
database.collection('currencies').where('isActive', '==', true).limit('1');
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:225:    var refTaxes = 
database.collection('tax').where('enable', '==', true).where('sectionId','==',section_id);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:226:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:227:    var decimal_degits = 0;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:228:    var symbolAtRight = false;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:229:    var currentCurrency = '';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:230:    refCurrency.get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:231:        var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:232:        currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:233:        decimal_degits = currencyData.decimalDigits;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:378:        /* TAX_DROPDOWN_DEBUG_GUARD_FIX */
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:379:        if (!$('#all_taxes option').length) {
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:380:            let fallbackSnapshot = await 
database.collection('tax')
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:381:                .where('enable', '==', true)
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:382:                .where('sectionId', '==', section_id)
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:383:                .get();
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:384:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:385:            if (isTaxReportDebugEnabled()) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:386:                traceTaxReport('tax dropdown fallback 
used', {
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:387:                    sectionId: section_id || null,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:388:                    count: fallbackSnapshot.size
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:389:                });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:390:            }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:391:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:392:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:393:            if (fallbackSnapshot.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:394:                $('#all_taxes').empty();
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:395:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:441:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:442:        /* TAX_REPORT_REQUIRE_SECTION_GUARD */
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:443:        if (!section_id) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:444:            $("#tax_report_table_container").html(
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:445:                '<div class="alert alert-warning 
mb-0">Please select a section first before generating the tax report.</div>'
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:446:            );
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:447:            Swal.fire({ icon: 'warning', text: 'Please 
select a section first before generating the tax report.' });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:448:            traceTaxReport('blocked missing section', {
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:449:                sectionIdPresent: !!section_id,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:450:                serviceType: service_type || null,
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:451:                ordersCollection: ordersCollection || null,
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:452:                ordersSectionField: ordersSectionField || 
null
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:453:            });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:454:            return;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:455:        }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:456:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:457:        if (!ordersCollection || !ordersSectionField) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:458:            $("#tax_report_table_container").html(
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:459:                '<div class="alert alert-warning 
mb-0">Order report context is incomplete. Please reselect section and try again.</div>'
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:460:            );
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:461:            Swal.fire({ icon: 'warning', text: 'Order 
report context is incomplete. Please reselect section and try again.' });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:462:            traceTaxReport('blocked incomplete order 
context', {
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:463:                sectionIdPresent: !!section_id,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:464:                serviceType: service_type || null,
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:465:                ordersCollection: ordersCollection || null,
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:466:                ordersSectionField: ordersSectionField || 
null
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:467:            });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:468:            return;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:469:        }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:470:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:471:        $("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:472:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:473:        try {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:474:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:475:            traceTaxReport('generate query context', {
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:476:                sectionIdPresent: !!section_id,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:477:                serviceType: service_type || null,
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:478:                ordersCollection: ordersCollection || null,
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:479:                ordersSectionField: ordersSectionField || 
null,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:480:                startDate: start_date,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:481:                endDate: end_date,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:482:                taxMethod: taxMethod,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:483:                selectedTaxes: selectedTaxes
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:484:            });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:485:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:486:            // Orders
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:487:            let ordersRef = 
database.collection(ordersCollection)
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:488:                .where('status', '==', 'Order Completed')
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:489:                .where(ordersSectionField, '==', 
section_id)
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:490:                .where('createdAt', '>=', start_date)
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:491:                .where('createdAt', '<=', end_date)
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:492:                .orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:493:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:494:            // Subscriptions
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:495:            let subsRef = 
database.collection('subscription_history')
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:496:                
.where('subscription_plan.type','==','paid')
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:497:                .where('createdAt', '>=', start_date)
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:498:                .where('createdAt', '<=', end_date)
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:499:                .orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:500:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:501:            let [ordersSnap, subsSnap] = await 
Promise.all([
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:502:                ordersRef.get(),
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:503:                subsRef.get()
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:504:            ]);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:505:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:506:            let orders = ordersSnap.docs.map(d => 
d.data());
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:507:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:508:            // Get active subscriptions
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:509:            let subscriptions = [];
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:510:            subsSnap.docs.forEach(d => {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:511:                let sub = d.data();
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:512:                if (!sub.createdAt || !sub.expiry_date) 
return;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:513:                subscriptions.push(sub);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:514:            });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:515:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:516:            let allTaxesSnapshot = await refTaxes.get();
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:517:            let allTaxes = allTaxesSnapshot.docs.map(d => 
d.data());
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:518:            let totals = 
calculateTotalsWithBreakdown(orders, subscriptions, allTaxes, taxMethod, selectedTaxes);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:519:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:520:            window.reportData = {
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:521:                orders: orders,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:522:                subscriptions: subscriptions,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:523:                allTaxes: allTaxes
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:524:            };
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:525:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:526:            let html = '<div class="d-flex 
justify-content-between align-items-center mb-2">';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:527:                html += '<h4 class="mb-0">Tax Report 
List</h4>';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:528:                    html += '<button id="download_report" 
class="btn btn-primary">Download Report</button>';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:529:            html += '</div>';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:546:                rows = [
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:547:                    { key: 'adminCommission', label: 
'Admin Commission' },
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:548:                    { key: 'vendorSubscription', label: 
'Vendor Subscription' },
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:549:                    { key: 'platformFee', label: 'Platform 
Fee' }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:550:                ];
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:551:            }else{
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:552:                rows = [
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:553:                    { key: 'adminCommission', label: 
'Admin Commission' },
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:554:                    { key: 'platformFee', label: 'Platform 
Fee' }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:555:                ];
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:556:            }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:589:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:590:    // Calculate totals including subscription history and 
filter
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:591:    function calculateTotalsWithBreakdown(orders, 
subscriptions, allTaxes, taxMethod, selectedTaxes) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:592:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:593:        let totals = {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:594:            adminCommission:    { amount: 0, taxes: {} },
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:595:            vendorSubscription: { amount: 0, taxes: {} },
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:596:            platformFee:        { amount: 0, taxes: {} }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:597:        };
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:598:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:599:        // Split by scope
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:600:        let adminSelectedTaxes = [];
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:601:        let vendorSelectedTaxes = [];
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:602:        allTaxes.forEach(t => {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:603:            if (!t.enable) return;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:604:            if (selectedTaxes.includes(t.id)) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:605:                if (t.scope === 'admin_commission') 
adminSelectedTaxes.push(t.id);
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:606:                else if (t.scope === 
'vendor_subscription') vendorSelectedTaxes.push(t.id);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:607:            }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:608:        });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:609:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:610:        orders.forEach(order => {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:611:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:612:            const orderData = normalizeOrder(service_type, 
order);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:613:            
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:614:            let commissionBase = Math.max(0, 
orderData.subtotal - orderData.discount);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:615:            
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:616:            // Admin Commission
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:617:            let adminCommission = 0;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:618:            let adminCommissionTypeRaw = 
orderData.adminCommissionType;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:698:            if (!sub.subscription_plan || 
!sub.subscription_plan.price) return;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:699:            let price = 
parseFloat(sub.subscription_plan.price);
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:700:            totals.vendorSubscription.amount += price;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:701:            (allTaxes || []).forEach(tax => {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:702:                if (!tax.enable) return;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:703:                if (tax.scope !== 'vendor_subscription') 
return;
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:704:                if (taxMethod === 'individual' && 
vendorSelectedTaxes.length && !vendorSelectedTaxes.includes(tax.id)) return;
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:705:                applyTax(totals.vendorSubscription, price, 
tax);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:706:            });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:707:        });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:708:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:709:        return totals;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:710:    }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:711:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:712:    function buildTaxSummary(taxes) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:713:        let percentTaxes = [];
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:968:    $(document).on('click', '.history-view', function() {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:969:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:970:        let source = $(this).data('source'); // 
adminCommission, vendorSubscription, platformFee
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:971:        /* TAX_REPORT_DATE_RANGE_GUARD_FIX */
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:972:        let { startDate: sd, endDate: ed } = 
getTaxReportStartEnd();
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:973:        let startDate = sd.format('MMMM D, YYYY');
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:974:        let endDate = ed.format('MMMM D, YYYY');
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:975:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:976:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:977:        // Show search criteria
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:978:        let filterHtml = `<strong>Date:</strong> 
${startDate} - ${endDate}<br>
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:979:        <strong>Income Source:</strong> ${source === 
'adminCommission' ? 'Admin Commission' : source === 'vendorSubscription' ? 'Vendor Subscription' : 'Platform Fee'}`;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:980:        $('#filterData').html(filterHtml);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:981:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:982:        let html = '<table class="table table-bordered">';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:983:        
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:984:        let count = 1;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:985:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:986:        if (source === 'adminCommission') {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:987:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:988:            html += '<tr><th>No</th><th>Order 
ID</th><th>Order Date</th><th>Admin Commission</th><th>Tax Amount</th></tr>';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:989:            
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:990:            window.reportData.orders.forEach(order => {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:991:                
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:992:                const orderData = 
normalizeOrder(service_type, order);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:993:            
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:994:                let commissionBase = Math.max(0, 
orderData.subtotal - orderData.discount);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:995:                
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:996:                // Admin Commission
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:997:                let adminCommission = 0;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:998:                let adminCommissionTypeRaw = 
orderData.adminCommissionType;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1066:                            <td>${count++}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1067:                            <td>${order.id}</td>
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1068:                            
<td>${order.createdAt.toDate().toDateString()}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1069:                            
<td>$${adminCommission.toFixed(2)}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1070:                            
<td>${buildTaxSummary(taxes)}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1071:                        </tr>`;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1072:            });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1073:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1074:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1075:        } else if (source === 'vendorSubscription') {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1076:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1077:            html += '<tr><th>No</th><th>Order 
ID</th><th>Order Date</th><th>Subscription Price</th><th>Tax Amount</th></tr>';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1078:            
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1079:            window.reportData.subscriptions.forEach(sub 
=> {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1080:                if (!sub.subscription_plan || 
!sub.subscription_plan.price) return;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1081:                let price = 
parseFloat(sub.subscription_plan.price);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1082:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1083:                let taxes = {};
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1092:                            <td>${count++}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1093:                            <td>${sub.id}</td>
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1094:                            
<td>${sub.createdAt.toDate().toDateString()}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1095:                            <td>$${price.toFixed(2)}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1096:                            
<td>${buildTaxSummary(taxes)}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1097:                        </tr>`;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1098:            });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1099:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1100:        } else if (source === 'platformFee') {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1101:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1102:            html += '<tr><th>No</th><th>Order 
ID</th><th>Order Date</th><th>Platform Fee</th><th>Tax Amount</th></tr>';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1103:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1104:            window.reportData.orders.forEach(order => {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1105:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1106:                const orderData = 
normalizeOrder(service_type, order);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1107:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1108:                let platformAmount = 
parseFloat(orderData.platformFee || 0);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1109:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1110:                let taxes = {};
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1111:                if (platformAmount > 0) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1112:                    (orderData.platformTax || 
[]).forEach(tax => {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1118:                            <td>${count++}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1119:                            <td>${order.id}</td>
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1120:                            
<td>${order.createdAt.toDate().toDateString()}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1121:                            
<td>$${platformAmount.toFixed(2)}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1122:                            
<td>${buildTaxSummary(taxes)}</td>
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1123:                        </tr>`;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1124:            });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1125:        }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1126:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1127:        html += '</table>';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1128:        
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1132:    });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1133:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1134:    function getOrdersCollectionByService(serviceType) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1135:        switch(serviceType) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1136:            case 'cab-service': return 'rides';
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1137:            case 'parcel_delivery': return 
'parcel_orders';
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1138:            case 'rental-service': return 'rental_orders';
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1139:            case 'ondemand-service': return 
'provider_orders';
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1140:            case 'delivery-service': return 
'vendor_orders';
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1141:            default: return 'vendor_orders';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1142:        }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1143:    }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1144:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1145:    function getOrdersSectionField(serviceType) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1146:        switch(serviceType) {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1147:            case 'delivery-service':
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1148:            case 'ecommerce-service':
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1149:                return 'section_id';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1150:            case 'cab-service':
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1151:            case 'parcel_delivery':
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1152:            case 'rental-service':
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1153:            case 'ondemand-service':
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1154:            default:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1155:                return 'sectionId';
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1156:        }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1157:    }
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1261:            default: {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1262:
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1263:                let orderSubtotal = 0;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1264:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1265:                (order.products || []).forEach(p => {
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1266:                    const price = 
parseFloat(p.discountPrice ?? p.price);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1267:                    const extras = 
parseFloat(p.extras_price || 0);
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1268:                    const qty = parseInt(p.quantity || 1);
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1269:                    orderSubtotal += (price + extras) * 
qty;
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1270:                });
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1271:
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1272:                return {
> C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1273:                    subtotal: orderSubtotal,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1274:                    discount: (order.discount || 0) + 
(order.specialDiscount?.special_discount || 0),
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1275:                    taxSetting: order.taxSetting || [],
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1276:                    platformFee: order.platformFee || 0,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1277:                    platformTax: order.platformTax || [],
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1278:                    adminCommission: 
order.adminCommission || 0,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1279:                    adminCommissionType: 
order.adminCommissionType,
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1280:                    isCommissionIncluded: true
  C:\deploy\adminpanel\resources\views\reports\tax-reports.blade.php:1281:                };



TEXT_END

## DIR: routes
TEXT_START
FILE_COUNT: 4

### CANDIDATE_FILE: routes\web.php
SCORE: 5
TAGS: vendors,orders
MATCHES:

  C:\deploy\adminpanel\routes\web.php:28:
  C:\deploy\adminpanel\routes\web.php:29://customers
> C:\deploy\adminpanel\routes\web.php:30:Route::middleware(['permission:users,users'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:31:    Route::get('/users', [App\Http\Controllers\UserController::class, 
'index'])->name('users');
  C:\deploy\adminpanel\routes\web.php:32:});
> C:\deploy\adminpanel\routes\web.php:33:Route::middleware(['permission:users,users.create'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:34:    Route::get('/users/create', [App\Http\Controllers\UserController::class, 
'create'])->name('users.create');
  C:\deploy\adminpanel\routes\web.php:35:});
> C:\deploy\adminpanel\routes\web.php:36:Route::middleware(['permission:users,users.edit'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:37:    Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 
'edit'])->name('users.edit');
  C:\deploy\adminpanel\routes\web.php:38:});
> C:\deploy\adminpanel\routes\web.php:39:Route::middleware(['permission:users,users.view'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:40:    Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 
'view'])->name('users.view');
  C:\deploy\adminpanel\routes\web.php:41:});
> C:\deploy\adminpanel\routes\web.php:42:Route::get('/users/profile', [App\Http\Controllers\UserController::class, 
'profile'])->name('users.profile');
> C:\deploy\adminpanel\routes\web.php:43:Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 
'update'])->name('users.profile.update');
  C:\deploy\adminpanel\routes\web.php:44:
> C:\deploy\adminpanel\routes\web.php:45://vendors
> C:\deploy\adminpanel\routes\web.php:46:Route::middleware(['permission:vendors,vendors'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:47:    Route::get('/vendors', [App\Http\Controllers\VendorController::class, 
'index'])->name('vendors');
  C:\deploy\adminpanel\routes\web.php:48:});
> C:\deploy\adminpanel\routes\web.php:49:Route::middleware(['permission:approve_vendors,approve.vendors.list'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:50:    Route::get('/vendors/approved', [App\Http\Controllers\VendorController::class, 
'index'])->name('vendors.approved');
  C:\deploy\adminpanel\routes\web.php:51:});
> C:\deploy\adminpanel\routes\web.php:52:Route::middleware(['permission:pending_vendors,pending.vendors.list'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:53:    Route::get('/vendors/pending', [App\Http\Controllers\VendorController::class, 
'index'])->name('vendors.pending');
  C:\deploy\adminpanel\routes\web.php:54:});
> C:\deploy\adminpanel\routes\web.php:55:Route::middleware(['permission:vendors,vendors.create'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:56:    Route::get('/vendors/create', [App\Http\Controllers\VendorController::class, 
'create'])->name('vendors.create'); 
  C:\deploy\adminpanel\routes\web.php:57:});
> C:\deploy\adminpanel\routes\web.php:58:Route::middleware(['permission:vendors,vendors.edit'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:59:    Route::get('/vendor/edit/{id}', [App\Http\Controllers\VendorController::class, 
'edit'])->name('vendors.edit');
  C:\deploy\adminpanel\routes\web.php:60:});
> C:\deploy\adminpanel\routes\web.php:61:Route::middleware(['permission:vendors-document,vendor.document.list'])->group(function () 
{
> C:\deploy\adminpanel\routes\web.php:62:    Route::get('vendors/document-list/{id}', 
[App\Http\Controllers\VendorController::class, 'DocumentList'])->name('vendors.document');
  C:\deploy\adminpanel\routes\web.php:63:});
> C:\deploy\adminpanel\routes\web.php:64:Route::middleware(['permission:vendors-document,vendor.document.edit'])->group(function () 
{
> C:\deploy\adminpanel\routes\web.php:65:    Route::get('/vendors/document/upload/{ownerId}/{id}', 
[App\Http\Controllers\VendorController::class, 'DocumentUpload'])->name('vendors.document.upload');
  C:\deploy\adminpanel\routes\web.php:66:});
  C:\deploy\adminpanel\routes\web.php:67:
  C:\deploy\adminpanel\routes\web.php:68:
  C:\deploy\adminpanel\routes\web.php:69:Route::middleware(['permission:stores,stores'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:70:    Route::get('/stores', [App\Http\Controllers\StoreController::class, 
'index'])->name('stores');
  C:\deploy\adminpanel\routes\web.php:71:});
  C:\deploy\adminpanel\routes\web.php:72:Route::middleware(['permission:stores,stores.create'])->group(function () { 
  C:\deploy\adminpanel\routes\web.php:73:    Route::get('/stores/create', [App\Http\Controllers\StoreController::class, 
'create'])->name('stores.create');
  C:\deploy\adminpanel\routes\web.php:80:});
  C:\deploy\adminpanel\routes\web.php:81:
> C:\deploy\adminpanel\routes\web.php:82://drivers
> C:\deploy\adminpanel\routes\web.php:83:Route::middleware(['permission:drivers,drivers'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:84:    Route::get('/drivers', [App\Http\Controllers\DriverController::class, 
'index'])->name('drivers');
  C:\deploy\adminpanel\routes\web.php:85:});
> C:\deploy\adminpanel\routes\web.php:86:Route::middleware(['permission:approve_drivers,approve.driver.list'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:87:    Route::get('/drivers/approved', [App\Http\Controllers\DriverController::class, 
'index'])->name('drivers.approved');
  C:\deploy\adminpanel\routes\web.php:88:});
> C:\deploy\adminpanel\routes\web.php:89:Route::middleware(['permission:pending_drivers,pending.driver.list'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:90:    Route::get('/drivers/pending', [App\Http\Controllers\DriverController::class, 
'index'])->name('drivers.pending');
  C:\deploy\adminpanel\routes\web.php:91:});
> C:\deploy\adminpanel\routes\web.php:92:Route::middleware(['permission:drivers,drivers.edit'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:93:    Route::get('/drivers/edit/{id}', [App\Http\Controllers\DriverController::class, 
'edit'])->name('drivers.edit');
  C:\deploy\adminpanel\routes\web.php:94:});
> C:\deploy\adminpanel\routes\web.php:95:Route::middleware(['permission:drivers,drivers.create'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:96:    Route::get('/drivers/create', [App\Http\Controllers\DriverController::class, 
'create'])->name('drivers.create');
  C:\deploy\adminpanel\routes\web.php:97:});
> C:\deploy\adminpanel\routes\web.php:98:Route::middleware(['permission:drivers,drivers.view'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:99:    Route::get('/drivers/view/{id}', [App\Http\Controllers\DriverController::class, 
'view'])->name('drivers.view');
  C:\deploy\adminpanel\routes\web.php:100:});
> C:\deploy\adminpanel\routes\web.php:101:Route::middleware(['permission:drivers-document,driver.document.list'])->group(function 
() {
> C:\deploy\adminpanel\routes\web.php:102:    Route::get('drivers/document-list/{id}', 
[App\Http\Controllers\DriverController::class, 'DocumentList'])->name('drivers.document');
  C:\deploy\adminpanel\routes\web.php:103:});
> C:\deploy\adminpanel\routes\web.php:104:Route::middleware(['permission:drivers-document,driver.document.edit'])->group(function 
() {
> C:\deploy\adminpanel\routes\web.php:105:    Route::get('/drivers/document/upload/{driverId}/{id}', 
[App\Http\Controllers\DriverController::class, 'DocumentUpload'])->name('drivers.document.upload');
  C:\deploy\adminpanel\routes\web.php:106:});
> C:\deploy\adminpanel\routes\web.php:107:Route::middleware(['permission:fleet-drivers,fleet.drivers'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:108:    Route::get('/fleet-drivers', [App\Http\Controllers\DriverController::class, 
'fleetDrivers'])->name('fleet.drivers');
  C:\deploy\adminpanel\routes\web.php:109:});
> C:\deploy\adminpanel\routes\web.php:110:Route::middleware(['permission:fleet-drivers,fleet.drivers.create'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:111:    Route::get('/fleet-drivers/create', [App\Http\Controllers\DriverController::class, 
'fleetDriversCreate'])->name('fleet.drivers.create');
  C:\deploy\adminpanel\routes\web.php:112:});
> C:\deploy\adminpanel\routes\web.php:113:Route::middleware(['permission:fleet-drivers,fleet.drivers.edit'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:114:    Route::get('/fleet-drivers/edit/{id}', [App\Http\Controllers\DriverController::class, 
'fleetDriversEdit'])->name('fleet.drivers.edit');
  C:\deploy\adminpanel\routes\web.php:115:});
> C:\deploy\adminpanel\routes\web.php:116:Route::middleware(['permission:fleet-drivers,fleet.drivers.view'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:117:    Route::get('/fleet-drivers/view/{id}', [App\Http\Controllers\DriverController::class, 
'fleetDriversview'])->name('fleet.drivers.view');
  C:\deploy\adminpanel\routes\web.php:118:});
  C:\deploy\adminpanel\routes\web.php:119:
  C:\deploy\adminpanel\routes\web.php:120:Route::middleware(['permission:coupons,coupons'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:121:    Route::get('/coupon/{id}', [App\Http\Controllers\CouponController::class, 
'index'])->name('vendors.coupons');
  C:\deploy\adminpanel\routes\web.php:122:});
  C:\deploy\adminpanel\routes\web.php:123:Route::middleware(['permission:items,items'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:124:    Route::get('/items/{id}', [App\Http\Controllers\ProductController::class, 
'index'])->name('vendors.items');
  C:\deploy\adminpanel\routes\web.php:125:});
  C:\deploy\adminpanel\routes\web.php:126:Route::middleware(['permission:items,items.create'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:127:    Route::get('/item/create/{id}', [App\Http\Controllers\ProductController::class, 
'create']);
  C:\deploy\adminpanel\routes\web.php:128:});
  C:\deploy\adminpanel\routes\web.php:129:Route::middleware(['permission:deliveryman,deliveryman.create'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:130:    Route::get('/deliveryman/create/{id}', 
[App\Http\Controllers\DeliverymanController::class, 'create']);
  C:\deploy\adminpanel\routes\web.php:131:});
  C:\deploy\adminpanel\routes\web.php:132:Route::middleware(['permission:coupons,coupons.create'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:138:});
  C:\deploy\adminpanel\routes\web.php:139:
> C:\deploy\adminpanel\routes\web.php:140:Route::middleware(['permission:orders,orders'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:141:    Route::get('/orders/{id}', [App\Http\Controllers\OrderController::class, 
'index'])->name('vendors.orders');
  C:\deploy\adminpanel\routes\web.php:142:});
> C:\deploy\adminpanel\routes\web.php:143:Route::get('/reviews/{id}', [App\Http\Controllers\OrderReviewController::class, 
'index'])->name('vendors.reviews');
  C:\deploy\adminpanel\routes\web.php:144:Route::get('/vendorFilters', [App\Http\Controllers\VendorFiltersController::class, 
'index'])->name('vendorFilters');
  C:\deploy\adminpanel\routes\web.php:145:Route::get('/vendorFilters/create', [App\Http\Controllers\VendorFiltersController::class, 
'create'])->name('vendorFilters.create');
  C:\deploy\adminpanel\routes\web.php:146:Route::get('/vendorFilters/edit/{id}', 
[App\Http\Controllers\VendorFiltersController::class, 'edit'])->name('vendorFilters.edit');
  C:\deploy\adminpanel\routes\web.php:147:
  C:\deploy\adminpanel\routes\web.php:148:Route::middleware(['permission:categories,categories'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:149:    Route::get('/categories', [App\Http\Controllers\CategoryController::class, 
'index'])->name('categories');
  C:\deploy\adminpanel\routes\web.php:150:});
  C:\deploy\adminpanel\routes\web.php:151:Route::middleware(['permission:categories,categories.edit'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:201:});
  C:\deploy\adminpanel\routes\web.php:202:
> C:\deploy\adminpanel\routes\web.php:203:Route::middleware(['permission:parcel-orders,parcel.orders'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:204:    Route::get('/parcel_orders', [App\Http\Controllers\ParcelController::class, 
'parcelOrders'])->name('parcel_orders');
  C:\deploy\adminpanel\routes\web.php:205:});
> C:\deploy\adminpanel\routes\web.php:206:Route::get('/parcel_orders/{id}', [App\Http\Controllers\ParcelController::class, 
'parcelOrders'])->name('parcel_orders.driver');
> C:\deploy\adminpanel\routes\web.php:207:Route::middleware(['permission:parcel-orders,parcel.orders.edit'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:208:    Route::get('/parcel_orders/edit/{id}', [App\Http\Controllers\ParcelController::class, 
'parcelOrderEdit'])->name('parcel_orders.edit');
  C:\deploy\adminpanel\routes\web.php:209:});
  C:\deploy\adminpanel\routes\web.php:210:
> C:\deploy\adminpanel\routes\web.php:211:Route::get('/rides/{id}', [App\Http\Controllers\RideController::class, 
'index'])->name('drivers.ride');
> C:\deploy\adminpanel\routes\web.php:212:Route::get('/rides/{driverId}', [App\Http\Controllers\RideController::class, 
'index'])->name('drivers.rides');
  C:\deploy\adminpanel\routes\web.php:213:Route::get('/ride/{sosId}', [App\Http\Controllers\RideController::class, 
'index2'])->name('ride');
  C:\deploy\adminpanel\routes\web.php:214:
  C:\deploy\adminpanel\routes\web.php:215:Route::middleware(['permission:rides,rides'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:216:    Route::get('/rides', [App\Http\Controllers\RideController::class, 
'index'])->name('rides');
  C:\deploy\adminpanel\routes\web.php:217:});
  C:\deploy\adminpanel\routes\web.php:218:Route::get('/rides/view/{id}', [App\Http\Controllers\RideController::class, 
'view'])->name('rides.view');
  C:\deploy\adminpanel\routes\web.php:219:Route::middleware(['permission:rides,rides.edit'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:220:    Route::get('/rides/edit/{id}', [App\Http\Controllers\RideController::class, 
'edit'])->name('rides.edit');
  C:\deploy\adminpanel\routes\web.php:221:});
  C:\deploy\adminpanel\routes\web.php:222:
> C:\deploy\adminpanel\routes\web.php:223:Route::middleware(['permission:orders,orders'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:224:    Route::get('/orders/', [App\Http\Controllers\OrderController::class, 
'index'])->name('orders');
  C:\deploy\adminpanel\routes\web.php:225:});
> C:\deploy\adminpanel\routes\web.php:226:Route::middleware(['permission:orders,orders.edit'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:227:    Route::get('/orders/edit/{id}', [App\Http\Controllers\OrderController::class, 
'edit'])->name('orders.edit');
  C:\deploy\adminpanel\routes\web.php:228:});
> C:\deploy\adminpanel\routes\web.php:229:Route::get('/orders/review/{oid}', [App\Http\Controllers\OrderController::class, 
'review'])->name('orders.review');
  C:\deploy\adminpanel\routes\web.php:230:Route::get('/orderReview', [App\Http\Controllers\OrderReviewController::class, 
'index'])->name('orderReview');
  C:\deploy\adminpanel\routes\web.php:231:Route::get('/orderReview/edit/{id}', [App\Http\Controllers\OrderReviewController::class, 
'edit'])->name('orderReview.edit');
  C:\deploy\adminpanel\routes\web.php:232:
  C:\deploy\adminpanel\routes\web.php:233:Route::middleware(['permission:coupons,coupons'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:234:    Route::get('/coupons', [App\Http\Controllers\CouponController::class, 
'index'])->name('coupons');
  C:\deploy\adminpanel\routes\web.php:235:});
  C:\deploy\adminpanel\routes\web.php:236:Route::middleware(['permission:coupons,coupons.edit'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:237:    Route::get('/coupons/edit/{id}', [App\Http\Controllers\CouponController::class, 
'edit'])->name('coupons.edit');
  C:\deploy\adminpanel\routes\web.php:247:
  C:\deploy\adminpanel\routes\web.php:248:Route::middleware(['permission:stores-payout,stores.payout'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:249:    Route::get('vendorsPayouts', [App\Http\Controllers\VendorsPayoutController::class, 
'index'])->name('vendorsPayouts');
  C:\deploy\adminpanel\routes\web.php:250:});
  C:\deploy\adminpanel\routes\web.php:251:Route::middleware(['permission:stores-payout,stores.payout.create'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:252:    Route::get('vendorsPayouts/create', 
[App\Http\Controllers\VendorsPayoutController::class, 'create'])->name('vendorsPayouts.create');
  C:\deploy\adminpanel\routes\web.php:253:});
  C:\deploy\adminpanel\routes\web.php:254:Route::middleware(['permission:stores-payout,stores.payout'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:255:    Route::get('/vendorsPayouts/{id}', 
[App\Http\Controllers\VendorsPayoutController::class, 'index'])->name('vendors.payout');
  C:\deploy\adminpanel\routes\web.php:256:});
  C:\deploy\adminpanel\routes\web.php:257:Route::middleware(['permission:stores-payout,stores.payout.create'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:258:    Route::get('/vendorsPayouts/create/{id}', 
[App\Http\Controllers\VendorsPayoutController::class, 'create']);
  C:\deploy\adminpanel\routes\web.php:259:});
  C:\deploy\adminpanel\routes\web.php:260:
> C:\deploy\adminpanel\routes\web.php:261:Route::middleware(['permission:drivers-payment,drivers.payment'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:262:    Route::get('driverpayments', [App\Http\Controllers\AdminPaymentsController::class, 
'driverIndex'])->name('driver.driverpayments');
  C:\deploy\adminpanel\routes\web.php:263:});
> C:\deploy\adminpanel\routes\web.php:264:Route::middleware(['permission:drivers-payout,drivers.payout.create'])->group(function () 
{
> C:\deploy\adminpanel\routes\web.php:265:    Route::get('driversPayouts/create', 
[App\Http\Controllers\DriversPayoutController::class, 'create'])->name('driversPayouts.create');
  C:\deploy\adminpanel\routes\web.php:266:});
> C:\deploy\adminpanel\routes\web.php:267:Route::middleware(['permission:drivers-payout,drivers.payout.create'])->group(function () 
{
> C:\deploy\adminpanel\routes\web.php:268:    Route::get('driversPayouts/create/{id}', 
[App\Http\Controllers\DriversPayoutController::class, 'create']);
  C:\deploy\adminpanel\routes\web.php:269:});
> C:\deploy\adminpanel\routes\web.php:270:Route::middleware(['permission:drivers-payout,drivers.payout'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:271:    Route::get('driversPayouts', [App\Http\Controllers\DriversPayoutController::class, 
'index'])->name('driversPayouts');
  C:\deploy\adminpanel\routes\web.php:272:}); 
> C:\deploy\adminpanel\routes\web.php:273:Route::middleware(['permission:drivers-payout,drivers.payout'])->group(function () {
> C:\deploy\adminpanel\routes\web.php:274:    Route::get('driversPayouts/{id}', 
[App\Http\Controllers\DriversPayoutController::class, 'index'])->name('driver.payouts');
  C:\deploy\adminpanel\routes\web.php:275:});
  C:\deploy\adminpanel\routes\web.php:276:
  C:\deploy\adminpanel\routes\web.php:277:Route::middleware(['permission:owners-payout,owners.payout'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:278:    Route::get('ownersPayouts/{id}', [App\Http\Controllers\OwnersPayoutController::class, 
'index'])->name('owners.payouts');
  C:\deploy\adminpanel\routes\web.php:279:});
  C:\deploy\adminpanel\routes\web.php:280:Route::middleware(['permission:owners-payout,owners.payout.create'])->group(function () {
  C:\deploy\adminpanel\routes\web.php:281:    Route::get('ownersPayouts/create', 
[App\Http\Controllers\OwnersPayoutController::class, 'create'])->name('ownersPayouts.create');
  C:\deploy\adminpanel\routes\web.php:282:});



TEXT_END

## DIR: app\Http
TEXT_START
FILE_COUNT: 77
TEXT_END

## DIR: app\Models
TEXT_START
FILE_COUNT: 3
TEXT_END

## DIR: app\Services
TEXT_START
DIR_NOT_FOUND
TEXT_END

## Patch Priority
TEXT_START
PRIORITY_1: product create/update must write createdAt and updatedAt.
PRIORITY_2: vendor create/update must write zoneId, coordinates, latitude, longitude, publish, isActive, createdAt, updatedAt.
PRIORITY_3: category create/update must write section_id, publish, createdAt, updatedAt.
PRIORITY_4: reader apps must be null-safe but should not define the data contract.
TEXT_END

STATUS: SERVICE_48C_FIX1_ADMIN_WRITE_PATH_FINDER_LITE_DONE