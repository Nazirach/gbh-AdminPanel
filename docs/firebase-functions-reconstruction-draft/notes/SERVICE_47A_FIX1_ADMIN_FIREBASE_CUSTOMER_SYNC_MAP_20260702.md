# SERVICE 47A-FIX1 ADMIN WEB FIREBASE CUSTOMER SYNC MAP

Generated: 07/02/2026 11:22:30
Mode: READ ONLY.

Admin Web: C:\deploy\adminpanel
Customer Git: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7
Firebase expected project: erbete-putra

## 1. Admin Web Source Scan
TEXT_START

  C:\deploy\adminpanel\resources\views\admin_users\index.blade.php:25:                    <div class="d-flex 
top-title-left align-self-center">
> C:\deploy\adminpanel\resources\views\admin_users\index.blade.php:26:                        <span class="icon 
mr-3"><img src="{{ asset('images/admin.png') }}"></span>
  C:\deploy\adminpanel\resources\views\admin_users\index.blade.php:27:                        <h3 
class="mb-0">{{trans('lang.admin_plural')}}</h3>
  C:\deploy\adminpanel\resources\views\admin_users\index.blade.php:28:                        <span class="counter 
ml-3 total_count">{{ $users->count() }}</span>
  C:\deploy\adminpanel\resources\views\admin_users\index.blade.php:29:                    </div>                    
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:16:                                               
 <div class="d-flex align-items-center">
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:17:                                               
     <div id="restaurantProfileImage" class="profile-image"></div>
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:18:                                               
     <h5 class="m-b-0 restaurantName ml-2"></h5>
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:19:                                               
 </div>
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:20:                                            
</div>
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:32:                                            
<label for="fileInput" class="input-group-text" style="cursor: pointer;">
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:33:                                               
 <i class="fa fa-file-image-o"></i>
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:34:                                            
</label>
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:35:                                            
<input type="file" id="fileInput" accept="image/*,video/*" style="display: none;" />
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:36:                                        </div>
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:37:
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:38:                                        <!-- 
Message input field -->
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:66:        var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:67:        var defaultUser = "{{ 
asset('images/default_user.png') }}"
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:68:        var advRef = 
database.collection('advertisements').doc(id).get().then(async function(snapshot) {
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:69:            if (snapshot.exists) {
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:70:                var advData = snapshot.data(); 
              
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:71:                var vendorId = 
advData.vendorId;
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:72:                await 
database.collection('vendors').doc(vendorId).get().then(async function(vendorSnapshot) {
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:73:                    if (vendorSnapshot.exists) 
{
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:74:                        var vendorData = 
vendorSnapshot.data();
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:75:                        if 
(vendorData.authorProfilePic != null && vendorData.authorProfilePic != '') {
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:76:                            
$('#restaurantProfileImage').html('<img src="' + vendorData.authorProfilePic + '" style="max-width: 50px;">')
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:77:                        } else {
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:78:                            
$('#restaurantProfileImage').html('<img src="' + defaultUser + '" style="max-width: 50px;">')
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:79:
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:80:                        }
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:81:                        
$('.restaurantName').html(vendorData.title);
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:92:        })
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:93:        var threadRef = 
database.collection('chat_admin').doc(id).collection("thread").orderBy("createdAt");
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:94:        threadRef.onSnapshot(snapshot => {
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:95:            const chatBox = 
document.querySelector("#chat-box ul");
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:96:            chatBox.innerHTML = '';
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:104:
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:105:                if (data.createdAt && 
data.createdAt.toDate) {
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:106:                    const date = 
data.createdAt.toDate();
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:107:                    const formattedTime = 
date.toLocaleString('en-IN', {
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:108:                        hour: '2-digit',
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:109:                        minute: '2-digit',
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:119:                    messageContent = 
data.message;
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:120:                } else if (data.messageType 
=== "image" && data.url?.url) {
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:121:                    messageContent = `<a 
href="${data.url.url}" target="_blank" rel="noopener"><img src="${data.url.url}" alt="Image" style="max-width: 100px; 
border-radius: 8px;" /></a>`;
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:122:                } else if (data.messageType 
=== "video" && data.url?.url) {
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:123:                    messageContent = `<video 
controls style="max-width: 150px; border-radius: 8px;">
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:124:                            <source 
src="${data.url.url}" type="${data.url.mime}">
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:161:                orderId: id,
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:162:                createdAt: 
firebase.firestore.FieldValue.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:163:            });
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:164:
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:165:            // Update last message in main 
chat_admin doc
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:172:                    lastSenderId: senderId,
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:173:                    createdAt: 
firebase.firestore.FieldValue.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:174:                };
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:175:
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:176:                if (!doc.exists) {
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:179:
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:180:                    const vendorDoc = await 
database.collection('vendors').doc(advData.vendorId).get();
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:181:                    vendorData = 
vendorDoc.data();
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:182:
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:183:                    Object.assign(dataToSet, {
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:186:                        customerName: "Admin",
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:187:                        customerProfileImage: 
"",
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:188:                        orderId: id,
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:189:                        restaurantId: 
vendorData.id || "",
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:190:                        restaurantName: 
vendorData.title || "",
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:191:                        
restaurantProfileImage: vendorData.photo || "",
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:192:                    });
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:193:                }
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:194:
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:237:                    const mimeType = 
file.type;
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:238:                    const messageType = 
mimeType.startsWith("image") ? "image" : "video";
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:239:
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:240:                    const senderId = "admin";
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:241:                    const messageId = 
database.collection("tmp").doc().id;
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:248:                        orderId: id,
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:249:                        createdAt: 
firebase.firestore.FieldValue.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:250:                        id: messageId,
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:251:                        url: {
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:252:                            mime: mimeType,
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:270:                        lastSenderId: 
senderId,
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:271:                        createdAt: 
firebase.firestore.FieldValue.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:272:                    };
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:273:
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:274:                    if (!doc.exists) {
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:279:                            if (advData && 
advData.vendorId) {
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:280:                                const 
vendorDoc = await database.collection("vendors").doc(advData.vendorId).get();
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:281:                                const 
vendorData = vendorDoc.data();
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:282:
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:283:                                if 
(vendorData) {
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:287:                                        
customerName: "Admin",
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:288:                                        
customerProfileImage: "",
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:289:                                        
orderId: id,
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:290:                                        
restaurantId: vendorData.id || "",
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:291:                                        
restaurantName: vendorData.title || "",
> C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:292:                                        
restaurantProfileImage: vendorData.photo || "",
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:293:                                    });
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:294:                                } else {
  C:\deploy\adminpanel\resources\views\advertisements\chat.blade.php:295:                                    
console.warn("Vendor data not found for vendorId:", advData.vendorId);
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:116:                                            
    </div>
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:117:                                            
    <div class="form-group row width-100 d-none image-div">
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:118:                                            
        <label
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:119:                                            
            class="col-3 control-label">{{ trans('lang.profile_image') }}</label>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:120:                                            
        <div class="col-7">
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:121:                                            
            <input type="file" id="profile_image"
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:122:                                            
                onchange="handleProfileSelect(event)">
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:123:                                            
            <div class="placeholder_img_thumb profile_image"></div>
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:124:                                            
            <div id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:125:                                            
            <div class="form-text text-muted w-50">
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:126:                                            
                {{ trans('lang.profile_image_help') }}
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:127:                                            
            </div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:128:                                            
        </div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:129:                                            
    </div>
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:130:                                            
    <div class="form-group row width-100 d-none image-div">
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:131:                                            
        <label
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:132:                                            
            class="col-3 control-label">{{ trans('lang.cover_image') }}</label>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:133:                                            
        <div class="col-7">
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:134:                                            
            <input type="file" id="cover_image"
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:135:                                            
                onchange="handleCoverSelect(event)">
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:136:                                            
            <div class="placeholder_img_thumb cover_image"></div>
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:137:                                            
            <div id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:138:                                            
            <div class="form-text text-muted w-50">
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:139:                                            
                {{ trans('lang.cover_image_help') }}
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:140:                                            
            </div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:141:                                            
        </div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:142:                                            
    </div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:148:                                            
            <div class="placeholder_img_thumb video_file"></div>
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:149:                                            
            <div id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:150:                                            
            <div class="form-text text-muted w-50">{!! nl2br(trans('lang.video_info')) !!}
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:151:                                            
            </div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:152:                                            
        </div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:181:
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:182:                                <div 
class="main-image rounded min-h-200" id="preview-cover"
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:183:                                    
style="background: url('') center center / cover no-repeat">
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:184:                                </div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:185:                                <!--<div 
class="video h-200">
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:198:                                    <div 
class="d-flex align-items-center justify-content-between gap-2">
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:199:                                        
<!-- Existing Profile Image -->
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:200:                                        
<div class="profile-prev-image bg--secondary me-xl-3" id="preview-profile"
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:201:                                            
style="background: url('') center center / cover no-repeat">
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:202:                                        
</div>
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:203:                                        
<div class="review-rating-demo">
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:245:        var ref = 
database.collection('advertisements');
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:246:        var profilePhoto = "";
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:247:        var profileFileName = '';
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:248:        var coverPhoto = "";
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:249:        var coverFileName = '';
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:250:        var videoData = '';
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:251:        var videoFileName = '';
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:254:        var oldVideo = '';
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:255:        var refVendor = 
database.collection('vendors');
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:256:        var storageRef = 
firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:257:        var storageVideoRef = 
firebase.storage().ref('videos');
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:258:        var section_id = 
getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:259:        var restaurant = '';
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:260:
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:261:        $('#restaurant').select2({
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:266:
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:267:        refVendor.where('section_id', '==', 
section_id).orderBy('title', 'asc').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:268:            
snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:269:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:270:                if (data.title != '') {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:323:                if (data.type == 
'restaurant_promotion') {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:324:                    
$('.image-div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:325:                    
$('.video-div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:326:                    
$('.review-rating-input').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:327:                    
$('.review-rating-demo').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:332:
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:333:                    
$('.image-div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:334:                    
$('.video-div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:335:                    
$('.review-rating-input').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:336:                    
$('.review-rating-demo').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:361:                setDate(startDate, endDate);
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:362:                if (data.coverImage != '' 
&& data.coverImage != null) {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:363:                    coverPhoto = 
data.coverImage;
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:364:                    oldCover = 
data.coverImage;
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:365:                    
$(".cover_image").append('<img class="rounded" style="width:50px" src="' + coverPhoto +
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:366:                        '" alt="image">');
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:367:                    
$("#preview-cover").css("background-image", "url('" + coverPhoto + "')");
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:368:
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:369:                }
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:370:                if (data.profileImage != '' 
&& data.profileImage != null) {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:371:                    profilePhoto = 
data.profileImage;
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:372:                    oldProfile = 
data.profileImage;
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:373:                    
$(".profile_image").append('<img class="rounded" style="width:50px" src="' + profilePhoto +
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:374:                        '" alt="image">');
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:375:                    
$("#preview-profile").css("background-image", "url('" + profilePhoto + "')");
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:376:
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:377:                }
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:378:
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:399:            var advType = $(this).val();
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:400:            
$('#preview-cover').html('').css('background-image', 'none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:401:            if (advType == 
'restaurant_promotion') {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:402:                
$('.image-div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:403:                
$('.video-div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:404:                
$('.review-rating-input').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:405:                
$('.review-rating-demo').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:409:            } else {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:410:                
$('.image-div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:411:                
$('.video-div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:412:                
$('.review-rating-input').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:413:                
$('.review-rating-demo').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:515:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:516:            } else if (advType == 
'restaurant_promotion' && profilePhoto == '') {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:517:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:518:                $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:519:                
$(".error_top").append("<p>{{ trans('lang.profile_image_help') }}</p>");
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:520:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:521:            } else if (advType == 
'restaurant_promotion' && coverPhoto == '') {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:522:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:523:                $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:524:                
$(".error_top").append("<p>{{ trans('lang.cover_image_help') }}</p>");
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:525:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:526:            } else if (advType == 
'video_promotion' && videoData == '') {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:527:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:535:                    const promises = [];
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:536:                    if (oldCover != 
coverPhoto) {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:537:                        
promises.push(storeCoverImage().then(img => coverIMG = img));
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:538:                    } else {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:539:                        coverIMG = 
coverPhoto;
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:540:                    }
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:541:                    if (oldProfile != 
profilePhoto) {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:542:                        
promises.push(storeProfileImage().then(img => profileIMG = img));
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:543:                    } else {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:544:                        profileIMG = 
profilePhoto;
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:545:                    }
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:546:                    if (oldVideo != 
videoData) {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:547:                        
promises.push(storeVideo().then(img => videoFile = img));
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:555:                            'description': 
description,
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:556:                            'coverImage': 
coverIMG,
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:557:                            'profileImage': 
profileIMG,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:558:                            'video': 
videoFile,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:559:                            'vendorId': 
vendorID,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:560:                            'priority': 
priority,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:566:                            'status': 
'approved',
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:567:                            'createdAt': 
firebase.firestore.FieldValue.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:568:                            
'paymentStatus': true,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:569:                            'isPaused': 
null,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:570:
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:589:                } else {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:590:                    
storeProfileImage().then(profileIMG => {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:591:                        
storeCoverImage().then(coverIMG => {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:592:                            
storeVideo().then(videoFile => {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:593:                                if (advType 
== 'restaurant_promotion') {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:594:                                    
videoFile = null;
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:602:                                    
'description': description,
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:603:                                    
'coverImage': coverIMG,
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:604:                                    
'profileImage': profileIMG,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:605:                                    
'video': videoFile,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:606:                                    
'vendorId': vendorID,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:607:                                    
'priority': priority,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:613:                                    
'status': 'approved',
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:614:                                    
'createdAt': firebase.firestore.FieldValue
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:615:                                        
.serverTimestamp(),
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:616:                                    
'paymentStatus': true,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:617:                                    
'isPaused': null,
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:654:
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:655:        async function storeProfileImage() {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:656:            var newPhoto = '';
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:657:            try {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:658:                if (profilePhoto != '') {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:659:
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:660:                    profilePhoto = 
profilePhoto.replace(/^data:image\/[a-z]+;base64,/, "")
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:661:                    var uploadTask = await 
storageRef.child(profileFileName).putString(profilePhoto, 'base64', {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:662:                        contentType: 
'image/jpg'
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:663:                    });
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:664:
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:665:                    var downloadURL = await 
uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:666:                    newPhoto = downloadURL;
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:667:                    profilePhoto = 
downloadURL;
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:668:                }
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:669:            } catch (error) {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:670:                console.log("ERR ===", 
error);
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:671:            }
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:672:            return newPhoto;
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:673:        }
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:674:
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:675:        function handleCoverSelect(evt) {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:686:                    var filename = 
filename.split('.')[0] + "_" + timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:687:                    coverPhoto = 
filePayload;
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:688:                    coverFileName = 
filename;
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:689:                    
$(".cover_image").empty();
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:690:                    
$(".cover_image").append('<img class="rounded" style="width:50px" src="' + coverPhoto +
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:691:                        '" alt="image">');
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:692:                    
$("#preview-cover").css("background-image", "url('" + coverPhoto + "')");
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:693:                };
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:694:            })(f);
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:695:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:709:                    var filename = 
filename.split('.')[0] + "_" + timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:710:                    profilePhoto = 
filePayload;
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:711:                    profileFileName = 
filename;
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:712:                    
$(".profile_image").empty();
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:713:                    
$(".profile_image").append('<img class="rounded" style="width:50px" src="' + profilePhoto +
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:714:                        '" alt="image">');
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:715:                    
$("#preview-profile").css("background-image", "url('" + profilePhoto + "')");
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:716:
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:717:                };
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:718:            })(f);
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:720:        }
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:721:        async function storeCoverImage() {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:722:            var newPhoto = '';
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:723:            try {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:724:                if (coverPhoto != '') {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:725:                    coverPhoto = 
coverPhoto.replace(/^data:image\/[a-z]+;base64,/, "")
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:726:                    var uploadTask = await 
storageRef.child(coverFileName).putString(coverPhoto, 'base64', {
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:727:                        contentType: 
'image/jpg'
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:728:                    });
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:729:                    var downloadURL = await 
uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:730:                    newPhoto = downloadURL;
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:731:                    coverPhoto = 
downloadURL;
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:732:
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:733:                }
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:734:            } catch (error) {
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:736:            }
> C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:737:            return newPhoto;
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:738:        }
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:739:
  C:\deploy\adminpanel\resources\views\advertisements\create.blade.php:740:        async function 
handleVideoSelect(evt) {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:99:                                               
 </div>
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:100:                                              
  <div class="form-group row width-100 d-none image-div">
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:101:                                              
      <label class="col-3 control-label">{{ trans('lang.profile_image') }}</label>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:102:                                              
      <div class="col-7">
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:103:                                              
          <input type="file" id="profile_image" onchange="handleProfileSelect(event)">
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:104:                                              
          <div class="placeholder_img_thumb profile_image"></div>
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:105:                                              
          <div id="uploding_image"></div>
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:106:                                              
          <div class="form-text text-muted w-50">{{ trans('lang.profile_image_help') }}
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:107:                                              
          </div>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:108:                                              
      </div>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:109:                                              
  </div>
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:110:                                              
  <div class="form-group row width-100 d-none image-div">
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:111:                                              
      <label class="col-3 control-label">{{ trans('lang.cover_image') }}</label>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:112:                                              
      <div class="col-7">
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:113:                                              
          <input type="file" id="cover_image" onchange="handleCoverSelect(event)">
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:114:                                              
          <div class="placeholder_img_thumb cover_image"></div>
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:115:                                              
          <div id="uploding_image"></div>
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:116:                                              
          <div class="form-text text-muted w-50">{{ trans('lang.cover_image_help') }}
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:117:                                              
          </div>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:118:                                              
      </div>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:119:                                              
  </div>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:124:                                              
          <div class="placeholder_img_thumb video_file"></div>
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:125:                                              
          <div id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:126:                                              
          <div class="form-text text-muted w-50">{!! nl2br(trans('lang.video_info')) !!}
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:127:                                              
          </div>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:128:                                              
      </div>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:149:                            <div 
class="bg--secondary rounded">
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:150:                                <!-- Existing 
Profile Banner Image -->
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:151:                                <div 
class="main-image rounded min-h-200" id="preview-cover" style="background: url('') center center / cover no-repeat">
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:152:                                </div>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:153:                                <div 
class="rounded bg-white px-3 py-4 position-relative mt-n2">
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:154:                                    <div 
class="preview-title preview-description">
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:162:                                    <div 
class="d-flex align-items-center justify-content-between gap-2">
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:163:                                        <!-- 
Existing Profile Image -->
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:164:                                        <div 
class="profile-prev-image bg--secondary me-xl-3" id="preview-profile" style="background: url('') center center / cover 
no-repeat">
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:165:                                        </div>
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:166:                                        <div 
class="review-rating-demo">
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:167:                                            
<div class="rating-text static-text" style="display: block;" id="preview-rating">
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:204:        var ref = 
database.collection('advertisements').where('id', '==', id);
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:205:        var profilePhoto = "";
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:206:        var profileFileName = '';
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:207:        var oldProfile = '';
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:208:        var coverPhoto = "";
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:209:        var coverFileName = '';
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:210:        var oldCover = '';
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:211:        var videoData = '';
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:213:        var oldVideo = '';
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:214:        var refVendor = 
database.collection('vendors');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:215:        var storage = firebase.storage();
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:216:        var storageRef = 
firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:217:        var storageVideoRef = 
firebase.storage().ref('videos');
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:218:        var section_id = 
getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:219:
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:220:
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:221:        function setDate(startDate = null, 
endDate = null) {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:245:            var advType = $(this).val();
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:246:            
$('#preview-cover').html('').css('background-image', 'none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:247:            if (advType == 
'restaurant_promotion') {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:248:                
$('.image-div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:249:                
$('.video-div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:250:                
$('.review-rating-input').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:251:                
$('.review-rating-demo').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:255:            } else {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:256:                
$('.image-div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:257:                
$('.video-div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:258:                
$('.review-rating-input').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:259:                
$('.review-rating-demo').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:302:        );
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:303:        refVendor.where('section_id', '==', 
section_id).orderBy('title', 'asc').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:304:            snapshots.docs.forEach((listval) 
=> {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:305:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:306:                if (data.title != '') {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:322:            (description == '') ? 
$('#preview-desc').html("Description"): $('#preview-desc').html(description);
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:323:            // 
$('#section_id').val(data.sectionId).trigger('change');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:324:            
$("#restaurant").val(data.vendorId).trigger('change');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:325:            getVendorData(data.vendorId);
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:326:            $('#priority').val(data.priority);
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:345:            if (data.type == 
'restaurant_promotion') {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:346:                
$('.image-div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:347:                
$('.video-div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:348:                
$('.review-rating-input').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:349:                
$('.review-rating-demo').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:354:
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:355:                
$('.image-div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:356:                
$('.video-div').removeClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:357:                
$('.review-rating-input').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:358:                
$('.review-rating-demo').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:367:            setDate(startDate, endDate);
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:368:            if (data.coverImage != '' && 
data.coverImage != null) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:369:                coverPhoto = data.coverImage;
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:370:                oldCover = data.coverImage;
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:371:                
$(".cover_image").append('<img class="rounded" style="width:50px" src="' + coverPhoto + '" alt="image">');
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:372:                
$("#preview-cover").css("background-image", "url('" + coverPhoto + "')");
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:373:
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:374:            }
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:375:            if (data.profileImage != '' && 
data.profileImage != null) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:376:                profilePhoto = 
data.profileImage;
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:377:                oldProfile = 
data.profileImage;
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:378:                
$(".profile_image").append('<img class="rounded" style="width:50px" src="' + profilePhoto + '" alt="image">');
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:379:                
$("#preview-profile").css("background-image", "url('" + profilePhoto + "')");
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:380:
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:381:            }
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:382:
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:398:        async function 
getVendorData(vendorId) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:399:            
database.collection('vendors').where('id', "==", vendorId).get().then(async function(vendorSnapshots) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:400:                if 
(vendorSnapshots.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:401:
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:402:                    vendorData = 
vendorSnapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:403:
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:404:                    var reviewsCount = 0;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:405:                    var rating = 0;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:423:            var restaurant = 
$("#restaurant").val();
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:424:            // var sectionId = 
$("#section_id").val();
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:425:            var priority = 
$('#priority').val();
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:426:            var advType = 
$('#advertisement_type').val();
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:427:            var rating = 
$("#rating").is(":checked") ? true : false;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:474:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:475:            } else if (advType == 
'restaurant_promotion' && profilePhoto == '') {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:476:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:477:                $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:478:                $(".error_top").append("<p>{{ 
trans('lang.profile_image_help') }}</p>");
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:479:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:480:            } else if (advType == 
'restaurant_promotion' && coverPhoto == '') {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:481:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:482:                $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:483:                $(".error_top").append("<p>{{ 
trans('lang.cover_image_help') }}</p>");
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:484:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:485:            } else if (advType == 
'video_promotion' && videoData == '') {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:486:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:491:                
jQuery("#data-table_processing").show();
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:492:                
storeProfileImage().then(profileIMG => {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:493:                    
storeCoverImage().then(coverIMG => {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:494:                        
storeVideo().then(videoFile => {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:495:                            if (advType == 
'restaurant_promotion') {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:496:                                videoFile = 
null;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:503:                                
'description': description,
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:504:                                'coverImage': 
coverIMG,
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:505:                                
'profileImage': profileIMG,
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:506:                                'video': 
videoFile,
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:507:                                'vendorId': 
restaurant,
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:508:                                'priority': 
priority,
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:554:                    var filename = 
filename.split('.')[0] + "_" + timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:555:                    profilePhoto = 
filePayload;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:556:                    profileFileName = 
filename;
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:557:                    
$(".profile_image").empty();
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:558:                    
$(".profile_image").append('<img class="rounded" style="width:50px" src="' + profilePhoto +
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:559:                        '" alt="image">');
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:560:                    
$("#preview-profile").css("background-image", "url('" + profilePhoto + "')");
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:561:
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:562:                };
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:563:            })(f);
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:566:
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:567:        async function storeProfileImage() {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:568:            var newPhoto = profilePhoto;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:569:            try {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:570:                if (profilePhoto != '' && 
profilePhoto != null) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:571:                    if (oldProfile != "" && 
oldProfile != null && profilePhoto != oldProfile) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:572:                        var OldImageUrlRef = 
await storage.refFromURL(oldProfile);
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:573:                        imageBucket = 
OldImageUrlRef.bucket;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:574:                        var envBucket = 
"<?php echo env('FIREBASE_STORAGE_BUCKET'); ?>";
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:575:                        if (imageBucket == 
envBucket) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:576:                            var checkProfile 
= await database.collection('advertisements').where('profileImage', '==', oldProfile).get();
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:577:                            profileSize = 
checkProfile.size;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:578:                            if (profileSize > 
1) {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:579:                                
console.log('skip copied adv');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:580:                            } else {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:581:                                await 
OldImageUrlRef.delete().then(() => {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:582:                                    
console.log("Old file deleted!")
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:583:                                
}).catch((error) => {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:584:                                    
console.log("ERR File delete ===", error);
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:591:
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:592:                    if (profilePhoto != 
oldProfile) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:593:                        profilePhoto = 
profilePhoto.replace(/^data:image\/[a-z]+;base64,/, "")
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:594:                        var uploadTask = 
await storageRef.child(profileFileName).putString(profilePhoto, 'base64', {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:595:                            contentType: 
'image/jpg'
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:596:                        });
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:597:                        var downloadURL = 
await uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:598:                        newPhoto = 
downloadURL;
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:599:                        profilePhoto = 
downloadURL;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:600:                    }
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:601:                }
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:602:            } catch (error) {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:604:            }
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:605:            return newPhoto;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:606:        }
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:607:
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:608:        function handleCoverSelect(evt) {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:619:                    var filename = 
filename.split('.')[0] + "_" + timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:620:                    coverPhoto = filePayload;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:621:                    coverFileName = filename;
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:622:                    $(".cover_image").empty();
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:623:                    
$(".cover_image").append('<img class="rounded" style="width:50px" src="' + coverPhoto +
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:624:                        '" alt="image">');
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:625:                    
$("#preview-cover").css("background-image", "url('" + coverPhoto + "')");
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:626:
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:627:                };
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:628:            })(f);
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:632:
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:633:        async function storeCoverImage() {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:634:            var newPhoto = coverPhoto;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:635:            try {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:636:                if (coverPhoto != '' && 
coverPhoto != null) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:637:                    if (oldCover != "" && 
oldCover != null && coverPhoto != oldCover) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:638:                        var OldImageUrlRef = 
await storage.refFromURL(oldCover);
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:639:                        imageBucket = 
OldImageUrlRef.bucket;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:640:                        var envBucket = 
"<?php echo env('FIREBASE_STORAGE_BUCKET'); ?>";
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:641:                        if (imageBucket == 
envBucket) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:642:                            var 
checkCoverImage = await database.collection('advertisements').where('coverImage', '==', oldCover).get();
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:643:                            coverSize = 
checkCoverImage.size;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:644:                            if (coverSize > 
1) {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:645:                                
console.log('skip copied adv');
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:646:                            } else {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:647:                                await 
OldImageUrlRef.delete().then(() => {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:648:                                    
console.log("Old file deleted!")
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:649:                                
}).catch((error) => {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:650:                                    
console.log("ERR File delete ===", error);
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:657:
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:658:                    if (coverPhoto != 
oldCover) {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:659:                        coverPhoto = 
coverPhoto.replace(/^data:image\/[a-z]+;base64,/, "")
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:660:                        var uploadTask = 
await storageRef.child(coverFileName).putString(coverPhoto, 'base64', {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:661:                            contentType: 
'image/jpg'
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:662:                        });
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:663:                        var downloadURL = 
await uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:664:                        newPhoto = 
downloadURL;
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:665:                        coverPhoto = 
downloadURL;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:666:                    }
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:667:                }
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:668:            } catch (error) {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:670:            }
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:671:            return newPhoto;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:672:        }
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:673:
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:674:        async function handleVideoSelect(evt) 
{
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:754:                        try {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:755:                            var 
OldImageUrlRef = await storage.refFromURL(oldVideo);
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:756:                            var envBucket = 
"<?php echo env('FIREBASE_STORAGE_BUCKET'); ?>";
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:757:                            if 
(OldImageUrlRef.bucket === envBucket) {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:758:                                var 
checkVideo = await database.collection('advertisements').where('video', '==', oldVideo).get();
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:759:                                videoSize = 
checkVideo.size;
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:760:                                if (videoSize 
> 1) {
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:762:                                } else {
> C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:763:                                    await 
OldImageUrlRef.delete();
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:764:                                    
console.log("Old file deleted!");
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:765:                                }
  C:\deploy\adminpanel\resources\views\advertisements\edit.blade.php:766:                            } else {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:7:                    <div class="d-flex 
top-title-left align-self-center">
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:8:                        <span class="icon 
mr-3"><img src="{{ asset('images/category.png') }}"></span>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:9:                        <h3 
class="mb-0">{{trans('lang.advertisement_plural')}} <span class="page-title"></span></h3>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:10:                        <span class="counter 
ml-3 advertisement_count"></span>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:11:                    </div>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:46:                                <li>
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:47:                                    <a 
href="{{ route('vendors.items', $id) }}"><i class="ri-shopping-basket-fill"></i>{{ trans('lang.tab_items') }}</a>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:48:                                </li>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:49:                                <li>
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:50:                                    <a 
href="{{ route('vendors.orders', $id) }}"><i class="ri-shopping-bag-line"></i>{{ trans('lang.tab_orders') }}</a>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:51:                                </li>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:52:                                <li>
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:53:                                    <a 
href="{{ route('vendors.reviews', $id) }}"><i class="ri-shield-star-fill"></i>{{ trans('lang.tab_reviews') }}</a>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:54:                                </li>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:55:                                <li>
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:56:                                    <a 
href="{{ route('vendors.coupons', $id) }}"><i class="ri-discount-percent-fill"></i>{{ trans('lang.tab_promos') }}</a>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:57:                                <li>
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:58:                                    <a 
href="{{ route('vendors.payout', $id) }}"><i class="ri-bank-card-line"></i>{{ trans('lang.tab_payouts') }}</a>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:59:                                </li>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:60:                                <li>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:61:                                    <a 
href="{{ route('payoutRequests.vendor.view', $id) }}"><i class="ri-refund-line"></i>{{ 
trans('lang.tab_payout_request') }}</a>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:64:
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:65:                            <a 
href="{{route('vendors.booktable',$id)}}"><i 
class="ri-restaurant-line"></i>{{trans('lang.dine_in_booking_history')}}</a>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:66:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:67:                        </li>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:68:                                <?php if 
(in_array('wallet-transaction', json_decode(@session('user_permissions'), true))) { ?>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:157:                            <div 
class="text-center">
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:158:                                <img 
id="toggle-status-image" alt="" class="mb-20" src="{{ asset('images/ad-pause.png') }}">
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:159:                                <h5 
class="modal-title" id="toggle-status-title">{{ trans('lang.are_you_sure_you_want_to_pause_the_request') }}</h5>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:160:                            </div>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:161:                            <div 
class="text-center mt-3" id="toggle-status-message">
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:199:                            <div 
class="text-center">
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:200:                                <img 
id="toggle-status-image" alt="" class="mb-20" src="{{ asset('images/ad-resume.png') }}">
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:201:                                <h5 
class="modal-title" id="toggle-status-title">{{ trans('lang.are_you_sure_you_want_to_resume_the_request') }}</h5>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:202:                            </div>
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:203:                            <div 
class="text-center mt-3" id="toggle-status-message">
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:223:        var id = "{{ $id }}";
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:224:        var section_id = 
getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:225:        if (id != '') {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:226:            
database.collection('vendors').where("id", "==", '<?php echo $id; ?>').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:227:                var vendorData = 
snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:228:                var wallet_route = "{{ 
route('users.walletstransaction', 'id') }}";
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:229:                
$(".wallet_transaction").attr("href", wallet_route.replace('id', 'storeID=' + vendorData.author));
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:232:                }
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:233:                if (vendorData.section_id) {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:234:                const sectionSnap = await 
database.collection('sections').doc(vendorData.section_id).get();
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:235:                if (sectionSnap.exists) {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:236:                    const sectionData = 
sectionSnap.data();
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:237:                    if 
(sectionData.dine_in_active === true) {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:246:        }
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:247:        var placeholderImage = '';
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:248:        var user_permissions = '<?php echo 
@session('user_permissions'); ?>';
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:249:        user_permissions = 
Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:250:        var checkDeletePermission = false;
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:273:            
jQuery("#data-table_processing").show();
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:274:            var placeholder = 
database.collection('settings').doc('placeHolderImage');
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:275:            placeholder.get().then(async 
function(snapshotsimage) {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:276:                var placeholderImageData = 
snapshotsimage.data();
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:277:                placeholderImage = 
placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:278:            });
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:279:            const table = 
$('#advertisementTable').DataTable({
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:280:                pageLength: 10, // Number of 
rows per page
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:321:                                if 
(!vendorDetail) return;
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:322:                                if 
(vendorDetail.section_id !== section_id) {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:323:                                    return; 
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:324:                                }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:325:                                
childData.vendorTitle = vendorDetail.title;
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:326:                                
childData.vendorImage = vendorDetail.image;
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:327:                                
childData.vendorEmail = vendorDetail.email;
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:328:                            } else {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:329:                                
childData.vendorTitle = "-";
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:330:                                
childData.vendorImage = "-";
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:331:                                
childData.vendorEmail = "-";
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:332:                            }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:333:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:464:            if ("{{ $id }}" == '') {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:465:                if (val.vendorImage != '') {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:466:                    html.push(`<td><img 
src="${val.vendorImage}" style="width:50px; height:50px; border-radius:50%;" 
onerror="this.onerror=null;this.src=\''+placeholderImage+'\'"><span>${val.vendorTitle} <br> 
${val.vendorEmail}</td></span>`);
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:467:                } else {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:468:                    html.push(`<td><img 
src="${placeholderImage}" style="width:50px; height:50px; border-radius:50%;" 
onerror="this.onerror=null;this.src=\''+placeholderImage+'\'"><span>${val.vendorTitle} <br> 
${val.vendorEmail}</td></span>`);
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:469:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:470:                }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:471:            }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:530:                    title: "-",
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:531:                    image: "",
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:532:                    email: "-",
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:533:                    section_id: "",
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:534:                }; 
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:535:            }
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:536:            const vendorRef = 
database.collection('vendors').where('id', '==', vendorid);
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:537:            const vendorSnapshot = await 
vendorRef.get();
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:538:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:539:            const vendor_userRef = 
database.collection('users').where('vendorID', '==', vendorid).where('role', '==', 'vendor');
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:540:            const vendor_userSnapshot = 
await vendor_userRef.get();
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:542:
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:543:            if (vendorSnapshot.empty) {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:544:                return {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:545:                    title: "-"
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:546:                }; 
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:550:                return {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:551:                    image: "",
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:552:                    email: "-"
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:553:                };
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:554:            }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:557:            let vendor_userData = {};
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:558:            vendorSnapshot.forEach((doc) => {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:559:                vendorData = doc.data();
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:560:            });
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:561:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:568:                title: vendorData.title || 
"-",
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:569:                image: 
vendor_userData.profilePictureURL || "",
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:570:                email: vendor_userData.email 
|| "-",
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:571:                section_id: 
vendor_userData.sectionId || "-",
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:572:            };
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:573:        }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:574:        $(document).on("click", 
"a[name='advertisements-delete']", async function(e) {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:583:                    if (videoSize > 1) {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:584:                        await 
deleteDocumentWithImage('advertisements', id);
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:585:                    } else {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:586:                        await 
deleteDocumentWithImage('advertisements', id, ['video']);
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:587:                    }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:588:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:589:                } else {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:590:                    var checkprofileSize = 
await database.collection('advertisements').where('profileImage', '==', data.profileImage).get();
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:591:                    var profileSize = 
checkprofileSize.size;
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:592:                    var checkCoverSize = 
await database.collection('advertisements').where('coverImage', '==', data.coverImage).get();
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:593:                    var coverSize = 
checkCoverSize.size;
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:594:                    let fieldsToDelete = [];
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:595:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:596:                    if (profileSize === 1) {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:597:                        
fieldsToDelete.push('profileImage');
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:598:                    }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:599:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:600:                    if (coverSize === 1) {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:601:                        
fieldsToDelete.push('coverImage');
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:602:                    }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:603:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:604:                    if 
(fieldsToDelete.length > 0) {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:605:
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:606:                        await 
deleteDocumentWithImage('advertisements', id, fieldsToDelete);
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:607:                    } else {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:608:                        await 
deleteDocumentWithImage('advertisements', id);
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:609:                    }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:610:                }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:611:            })
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:680:                                if 
(videoSize > 1) {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:681:                                    await 
deleteDocumentWithImage('advertisements', dataId);
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:682:                                } else {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:683:                                    await 
deleteDocumentWithImage('advertisements', dataId, ['video']);
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:684:                                }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:685:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:686:                            } else {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:687:                                var 
checkprofileSize = await database.collection('advertisements').where('profileImage', '==', data.profileImage).get();
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:688:                                var 
profileSize = checkprofileSize.size;
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:689:                                var 
checkCoverSize = await database.collection('advertisements').where('coverImage', '==', data.coverImage).get();
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:690:                                var 
coverSize = checkCoverSize.size;
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:691:                                let 
fieldsToDelete = [];
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:692:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:693:                                if 
(profileSize === 1) {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:694:                                    
fieldsToDelete.push('profileImage');
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:695:                                }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:696:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:697:                                if 
(coverSize === 1) {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:698:                                    
fieldsToDelete.push('coverImage');
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:699:                                }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:700:
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:701:                                if 
(fieldsToDelete.length > 0) {
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:702:
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:703:                                    await 
deleteDocumentWithImage('advertisements', dataId, fieldsToDelete);
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:704:                                } else {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:705:                                    await 
deleteDocumentWithImage('advertisements', dataId);
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:706:                                }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:707:                            }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:708:                        })
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:750:            if (!vendorId) return null;
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:751:            let vendorSnapshot = await 
database.collection('vendors')
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:752:                .where('id', '==', vendorId)
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:753:                .get();
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:754:            if (!vendorSnapshot.empty) {
> C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:755:                return 
vendorSnapshot.docs[0].data();
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:756:            }
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:757:            return null;
  C:\deploy\adminpanel\resources\views\advertisements\index.blade.php:758:        }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:22:                            
<div class="d-flex top-title-left align-self-center">
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:23:                            
    <span class="icon mr-3"><img src="{{ asset('images/category.png') }}"></span>
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:24:                            
    <h3 class="mb-0">{{ trans('lang.advertisement_requests') }}</h3>
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:25:                            
    <span class="counter ml-3 total_count"></span>
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:26:                            
</div>
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:130:
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:131:            var 
placeholderImage = '';
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:132:            var 
user_permissions = '<?php echo @session('user_permissions'); ?>';
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:133:            
user_permissions = Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:134:            var 
checkDeletePermission = false;
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:138:
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:139:            var section_id 
= getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:140:            
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:141:            
$(document).ready(function() {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:142:                var 
placeholder = database.collection('settings').doc('placeHolderImage');
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:143:                
placeholder.get().then(async function(snapshotsimage) {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:144:                    var 
placeholderImageData = snapshotsimage.data();
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:145:                    
placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:146:                });
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:147:                
$(document).on('click', '.new_request_list', function() {
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:148:                    
getNewRequests();
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:216:                           
             let vendorDetail = await getRestaurant(childData.vendorId);
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:217:                           
             if (vendorDetail.section_id !== section_id) {
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:218:                           
                 return; 
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:219:                           
             }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:220:                           
             childData.vendorTitle = vendorDetail.title;
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:221:                           
             childData.vendorImage = vendorDetail.image;
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:222:                           
             childData.vendorEmail = vendorDetail.email;
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:223:                           
         } else {
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:224:                           
             childData.vendorTitle = "-";
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:225:                           
             childData.vendorImage = "";
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:226:                           
             childData.vendorEmail = "-";
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:227:                           
         }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:228:                           
         if (searchValue) {
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:279:                           
         const endDate = childData.endDate.toDate().toLocaleDateString('en-US', options);
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:280:                           
         if(childData.vendorImage==''){
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:281:                           
             var vendorImage=placeholderImage
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:282:                           
         }else{
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:283:                           
             var vendorImage=childData.vendorImage
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:284:                           
         }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:285:                           
         records.push([
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:286:                           
             '<td class="delete-all"><input type="checkbox" id="is_open_' + childData.id + '" class="is_open" 
dataId="' + childData.id + '"><label class="col-3 control-label"\n' + 'for="is_open_' + childData.id + '" 
></label></td>',
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:287:                           
             '<td><a href="' + advertisementsView + '">' + childData.title + '</a></td>',
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:288:                           
             `<td><img src="${vendorImage}" style="width:50px; height:50px; border-radius:50%;" 
onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'">
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:289:                           
  <span>${childData.vendorTitle} <br>${childData.vendorEmail}</span></td>`,
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:290:                           
             '<td>' +
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:291:                           
             (childData.type === 'restaurant_promotion' ? '{{trans("lang.restaurant_promotion")}}' :
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:335:                           
 title: "-",
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:336:                           
 image: "",
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:337:                           
 email: "-",
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:338:                           
 section_id: "",
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:339:                        }; 
// Default values
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:340:                    }
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:341:                    const 
vendorRef = database.collection('vendors').where('id', '==', vendorid);
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:342:                    const 
vendorSnapshot = await vendorRef.get();
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:343:                    const 
vendor_userRef = database.collection('users').where('vendorID', '==', vendorid).where('role', '==', 'vendor');
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:344:                    const 
vendor_userSnapshot = await vendor_userRef.get();
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:345:                    if 
(vendorSnapshot.empty) {
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:346:                        
return {
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:347:                           
 title: "-"
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:348:                        }; 
// Default values if vendor not found
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:351:                        
return {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:352:                           
 image: "",
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:353:                           
 email: "-"
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:354:                        }; 
// Default values if vendor not found
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:355:                    }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:357:                    let 
vendor_userData = {};
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:358:                    
vendorSnapshot.forEach((doc) => {
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:359:                        
vendorData = doc.data();
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:360:                    });
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:361:                    
vendor_userSnapshot.forEach((doc) => {
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:365:                        
title: vendorData.title || "-",
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:366:                        
image: vendor_userData.profilePictureURL || "",
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:367:                        
email: vendor_userData.email || "-",
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:368:                        
section_id: vendor_userData.sectionId || "-",
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:369:                    };
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:370:                }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:371:            });
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:426:                        if 
(videoSize > 1) {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:427:                           
 await deleteDocumentWithImage('advertisements', dataId);
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:428:                        } 
else {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:429:                           
 await deleteDocumentWithImage('advertisements', dataId, ['video']);
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:430:                        }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:431:                    } else 
{
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:432:                        
var checkprofileSize = await database.collection('advertisements').where('profileImage', '==', 
data.profileImage).get();
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:433:                        
var profileSize = checkprofileSize.size;
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:434:                        
var checkCoverSize = await database.collection('advertisements').where('coverImage', '==', data.coverImage).get();
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:435:                        
var coverSize = checkCoverSize.size;
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:436:                        
let fieldsToDelete = [];
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:437:                        if 
(profileSize === 1) {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:438:                           
 fieldsToDelete.push('profileImage');
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:439:                        }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:440:                        if 
(coverSize === 1) {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:441:                           
 fieldsToDelete.push('coverImage');
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:442:                        }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:443:                        if 
(fieldsToDelete.length > 0) {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:444:                           
 await deleteDocumentWithImage('advertisements', dataId, fieldsToDelete);
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:445:                        } 
else {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:446:                           
 await deleteDocumentWithImage('advertisements', dataId);
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:447:                        }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:448:                    }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:449:                })
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:460:                        if 
(videoSize > 1) {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:461:                           
 await deleteDocumentWithImage('advertisements', id);
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:462:                        } 
else {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:463:                           
 await deleteDocumentWithImage('advertisements', id, ['video']);
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:464:                        }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:465:                    } else 
{
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:466:                        
var checkprofileSize = await database.collection('advertisements').where('profileImage', '==', 
data.profileImage).get();
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:467:                        
var profileSize = checkprofileSize.size;
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:468:                        
var checkCoverSize = await database.collection('advertisements').where('coverImage', '==', data.coverImage).get();
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:469:                        
var coverSize = checkCoverSize.size;
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:470:                        
let fieldsToDelete = [];
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:471:                        if 
(profileSize === 1) {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:472:                           
 fieldsToDelete.push('profileImage');
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:473:                        }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:474:                        if 
(coverSize === 1) {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:475:                           
 fieldsToDelete.push('coverImage');
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:476:                        }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:477:                        if 
(fieldsToDelete.length > 0) {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:478:                           
 await deleteDocumentWithImage('advertisements', id, fieldsToDelete);
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:479:                        } 
else {
> C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:480:                           
 await deleteDocumentWithImage('advertisements', id);
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:481:                        }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:482:                    }
  C:\deploy\adminpanel\resources\views\advertisements\requested_advertisement.blade.php:483:                })
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:38:                                               
 <label class="col-12 control-label"><strong>{{ trans('lang.date_created') }}
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:39:                                               
         : </strong><span id="createdAt"></span></label>
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:40:                                            
</div>
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:41:                                            
<div class="form-group row widt-100 gendetail-col advType">
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:42:                                               
 <label class="col-12 control-label"><strong>{{ trans('lang.advertisement_type') }}
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:108:                                            
<div class="row">
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:109:                                              
  <div class="preview-box col-md-3 image-div">
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:110:                                              
      <h4>{{ trans('lang.profile_image') }}</h4>
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:111:                                              
      <div id="profileImage"></div>
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:112:                                              
  </div>
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:113:                                              
  <div class="preview-box col-md-4 image-div">
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:114:                                              
      <h4>{{ trans('lang.cover_image') }}</h4>
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:115:                                              
      <div id="coverImage"></div>
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:116:                                              
  </div>
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:117:                                              
  <div class="preview-box col-md-12 video-div">
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:118:                                              
      <h4>{{ trans('lang.video') }}</h4>
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:205:                            <div 
class="text-center">
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:206:                                <img 
id="toggle-status-image" alt="" class="mb-20" src="{{ asset('images/dm-tips.png') }}">
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:207:                                <h5 
class="modal-title" id="toggle-status-title">{{ trans('lang.are_you_sure') }}</h5>
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:208:                            </div>
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:209:                            <div 
class="text-center" id="toggle-status-message">
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:235:                            <div 
class="text-center">
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:236:                                <img 
id="toggle-status-image" alt="" class="mb-20" src="{{ asset('images/ad-deny.png') }}">
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:237:                                <h5 
class="modal-title" id="toggle-status-title">{{ trans('lang.are_you_sure_to_cancel_ad') }}</h5>
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:238:                            </div>
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:239:                            <div 
class="text-center" id="toggle-status-message">
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:272:        var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:273:        var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:274:        var vendorFcm = '';
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:275:        placeholder.get().then(async 
function(snapshotsimage) {
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:276:            var placeholderImageData = 
snapshotsimage.data();
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:277:            placeholderImage = 
placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:278:        });
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:279:        var ref = 
database.collection('advertisements').where("id", "==", id);
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:280:        var advApprovedSub = '';
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:334:            }
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:335:            var date1 = 
data.createdAt.toDate().toDateString();
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:336:            var date = new Date(date1);
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:337:            var dd = 
String(date.getDate()).padStart(2, '0');
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:338:            var mm = String(date.getMonth() + 
1).padStart(2, '0'); //January is 0!
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:339:            var yyyy = date.getFullYear();
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:340:            var createdAt_val = yyyy + '-' + 
mm + '-' + dd;
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:341:            var time = 
data.createdAt.toDate().toLocaleTimeString('en-US');
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:342:            
$('#createdAt').html(createdAt_val + ' ' + time);
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:343:            (data.type == 
'restaurant_promotion') ? $('#advType').html('{{ trans('lang.restaurant_promotion') }}'): $('#advType').html('{{ 
trans('lang.video_promotion') }}');
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:344:            if (data.type == 
'restaurant_promotion') {
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:345:                
$('.video-div').addClass('d-none');
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:346:                
$('#profileImage').append('<img src="' + data.profileImage + '" style="width: 100%; height: 150px;" 
onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"> ');
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:347:                $('#coverImage').append('<img 
src="' + data.coverImage + '" style="width: 100%; height: 150px;" onerror="this.onerror=null;this.src=\'' + 
placeholderImage + '\'"> ')
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:348:
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:349:            } else {
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:350:                
$('.image-div').addClass('d-none');
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:351:                $('#video').append('<video 
width="100%" height="300px" controls="controls" src="' + data.video + '" type="video/mp4"></video>')
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:352:            }
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:353:            const options = {
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:409:        async function 
getVendorDetails(vendorId) {
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:410:            
database.collection('vendors').where('id', '==', vendorId).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:411:                if (snapshots.docs.length > 
0) {
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:412:                    var vendordata = 
snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:413:                    var vendorUserId = 
vendordata.author;
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:424:                    }
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:425:                    if (vendordata.photo != 
"" && vendordata.photo != null) {
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:426:                        
$('.resturant-img').attr('src', vendordata.photo);
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:427:                    } else {
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:428:                        
$('.resturant-img').attr('src', placeholderImage);
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:429:                    }
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:430:                    if (vendordata.title != 
"" && vendordata.title != null) {
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:431:                        
$('.vendor-title').html(vendordata.title);
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:443:                } else {
> C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:444:                    
$('.resturant-img').attr('src', placeholderImage);
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:445:                    
$('.vendor-title').html("{{ trans('lang.unknown') }}");
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:446:
  C:\deploy\adminpanel\resources\views\advertisements\view.blade.php:447:
  C:\deploy\adminpanel\resources\views\attributes\create.blade.php:6:        <div class="col-md-5 align-self-center">
> C:\deploy\adminpanel\resources\views\attributes\create.blade.php:7:          <h3 
class="text-themecolor">{{trans('lang.item_attribute_plural')}}</h3>
  C:\deploy\adminpanel\resources\views\attributes\create.blade.php:8:        </div>
  C:\deploy\adminpanel\resources\views\attributes\create.blade.php:9:
  C:\deploy\adminpanel\resources\views\attributes\create.blade.php:10:        <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\resources\views\attributes\create.blade.php:12:            <li class="breadcrumb-item"><a 
href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>			
> C:\deploy\adminpanel\resources\views\attributes\create.blade.php:13:            <li class="breadcrumb-item"><a href= 
"{!! route('attributes') !!}" >{{trans('lang.item_attribute_plural')}}</a></li>
  C:\deploy\adminpanel\resources\views\attributes\create.blade.php:14:            <li class="breadcrumb-item 
active">{{trans('lang.attribute_create')}}</li>
  C:\deploy\adminpanel\resources\views\attributes\create.blade.php:15:          </ol>
  C:\deploy\adminpanel\resources\views\attributes\create.blade.php:16:        </div>
  C:\deploy\adminpanel\resources\views\attributes\edit.blade.php:7:        <div class="col-md-5 align-self-center">
> C:\deploy\adminpanel\resources\views\attributes\edit.blade.php:8:            <h3 
class="text-themecolor">{{trans('lang.item_attribute_plural')}}</h3>
  C:\deploy\adminpanel\resources\views\attributes\edit.blade.php:9:        </div>
  C:\deploy\adminpanel\resources\views\attributes\edit.blade.php:10:        <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\resources\views\attributes\edit.blade.php:11:            <ol class="breadcrumb">
  C:\deploy\adminpanel\resources\views\attributes\edit.blade.php:12:                <li class="breadcrumb-item"><a 
href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
> C:\deploy\adminpanel\resources\views\attributes\edit.blade.php:13:                <li class="breadcrumb-item"><a 
href= "{!! route('attributes') !!}" >{{trans('lang.item_attribute_plural')}}</a></li>
  C:\deploy\adminpanel\resources\views\attributes\edit.blade.php:14:                <li class="breadcrumb-item 
active">{{trans('lang.attribute_edit')}}</li>
  C:\deploy\adminpanel\resources\views\attributes\edit.blade.php:15:            </ol>
  C:\deploy\adminpanel\resources\views\attributes\edit.blade.php:16:        </div>
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:7:        <div class="col-md-5 align-self-center">
> C:\deploy\adminpanel\resources\views\attributes\index.blade.php:8:            <h3 
class="text-themecolor">{{trans('lang.item_attribute_plural')}}</h3>
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:9:        </div>
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:10:        <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:11:            <ol class="breadcrumb">
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:24:                    <div class="d-flex 
top-title-left align-self-center">
> C:\deploy\adminpanel\resources\views\attributes\index.blade.php:25:                        <span class="icon 
mr-3"><img src="{{ asset('images/attribute.png') }}"></span>
> C:\deploy\adminpanel\resources\views\attributes\index.blade.php:26:                        <h3 
class="mb-0">{{trans('lang.item_attribute_plural')}}</h3>
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:27:                        <span class="counter ml-3 
total_count"></span>
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:28:                    </div>                    
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:29:                </div>
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:156:                val.phoneNumber = 
result[0].phoneNumber;
> C:\deploy\adminpanel\resources\views\attributes\index.blade.php:157:                val.isActive = 
result[0].isActive;
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:158:
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:159:            } else {
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:160:                val.phoneNumber = '';
> C:\deploy\adminpanel\resources\views\attributes\index.blade.php:161:                val.isActive = false;
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:162:            }
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:163:
  C:\deploy\adminpanel\resources\views\attributes\index.blade.php:164:            var getData = await getListData(val);
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:11:    <link href="{{ 
asset('assets/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
> C:\deploy\adminpanel\resources\views\auth\login.blade.php:12:    <link rel="icon" type="image/svg+xml" href="{{ 
asset('favicon.svg') }}">
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:13:    <link href="{{ asset('css/style.css') }}" 
rel="stylesheet">
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:14:    @yield('style')
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:15:    <style>
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:815:                        <div class="maritronix-mark" 
aria-hidden="true">
> C:\deploy\adminpanel\resources\views\auth\login.blade.php:816:                            <img src="{{ 
asset('images/ghalbit-maritronix-icon.svg') }}" alt="GHALBIT MARITRONIX icon">
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:817:                        </div>
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:818:                        <div 
class="maritronix-brand-copy">
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:819:                            <h1>GHALBIT MARITRONIX</h1>
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:888:                        <div class="maritronix-mark" 
aria-hidden="true">
> C:\deploy\adminpanel\resources\views\auth\login.blade.php:889:                            <img src="{{ 
asset('images/ghalbit-maritronix-icon.svg') }}" alt="GHALBIT MARITRONIX icon">
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:890:                        </div>
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:891:                        <div>
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:892:                            <h2>GHALBIT MARITRONIX</h2>
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:988:
> C:\deploy\adminpanel\resources\views\auth\login.blade.php:989:            
database.collection('sections').where('isActive', '==', true).orderBy('order').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:990:                const firstSection = 
snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:991:                const firstSectionId = 
snapshots.docs[0].id;
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:992:                const firstServiceType = 
firstSection.serviceTypeFlag;
> C:\deploy\adminpanel\resources\views\auth\login.blade.php:993:                setCookie('section_id', 
firstSectionId, 1);
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:994:                setCookie('service_type', 
firstServiceType, 1);
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:995:            });
  C:\deploy\adminpanel\resources\views\auth\login.blade.php:996:        });
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:71:                        <div class="col-7">
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:72:                            <select 
name="section_id" id="section_id" class="form-control">
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:73:                               
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:74:                                <option 
value="">{{trans('lang.select')}}</option>
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:75:                            </select>
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:145:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:146:                            <input type="checkbox" 
id="is_publish">
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:147:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:148:                            <label class="col-3 
control-label" for="is_publish">{{trans('lang.is_publish')}}</label>
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:149:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:150:                        </div>
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:151:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:158:                            <input type="file" 
id="banner_img" onChange="handleFileSelect(event)">
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:159:                            <div 
id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:160:                        </div>
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:161:                        <div 
class="placeholder_img_thumb user_image"></div>
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:162:                    </div>
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:163:                    <div class="form-group row 
width-50">
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:164:                    
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:167:                            <input type="file" 
id="web_banner_img" onChange="handleWebBannerFileSelect(event)">
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:168:                            <div 
id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:169:                        </div>
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:170:                        <div 
class="placeholder_img_thumb web_banner_image"></div>
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:171:                    </div>
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:172:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:173:                </fieldset>
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:201:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:202:    var photo = "";
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:203:    var fileName = "";
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:204:    var webPhoto="";
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:205:    var webFileName="";
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:206:    var photo_position2 = "";
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:207:    var storageRef = 
firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:208:    var ref_sections = 
database.collection('sections').orderBy('order');
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:209:    var sections_list = [];
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:210:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:214:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:215:            $("#section_id").append('<optgroup 
label="Multivendor Delivery Service"></optgroup');
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:216:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:217:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:218:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:222:                    sections_list.push(data);
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:223:                    
$('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:224:                        .attr("value", 
data.id).attr("data-service-type", data.serviceTypeFlag)
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:225:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:226:                }
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:229:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:230:            $("#section_id").append('<optgroup 
label="Ecommerce Service"><optgroup');
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:231:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:232:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:233:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:236:                    sections_list.push(data);
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:237:                    
$('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:238:                        .attr("value", 
data.id).attr("data-service-type", data.serviceTypeFlag)
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:239:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:240:                }
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:242:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:243:            $("#section_id").append('<optgroup 
label="Parcel Delivery Service"><optgroup');
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:244:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:245:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:246:                if (data.serviceTypeFlag == 
"parcel_delivery") {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:247:                    sections_list.push(data);
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:248:                    
$('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:249:                        .attr("value", 
data.id).attr("data-service-type", data.serviceTypeFlag)
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:250:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:251:                }
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:253:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:254:            $("#section_id").append('<optgroup 
label="Cab Service"><optgroup');
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:255:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:256:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:257:                if (data.serviceTypeFlag == 
"cab-service") {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:258:                    sections_list.push(data);
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:259:                    
$('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:260:                        .attr("value", 
data.id).attr("data-service-type", data.serviceTypeFlag)
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:261:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:262:                }
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:264:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:265:            $("#section_id").append('<optgroup 
label="On Demand Service"><optgroup');
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:266:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:267:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:268:                if (data.serviceTypeFlag == 
"ondemand-service") {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:270:                    sections_list.push(data);
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:271:                    
$('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:272:                        .attr("value", 
data.id).attr("data-service-type", data.serviceTypeFlag)
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:273:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:274:                    
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:284:        var redirect_type = $(this).val();
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:285:        var section_id = $("#section_id").val();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:286:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:287:        if (redirect_type == "store") {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:288:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:289:            getTypeWiseDetails('store', 
section_id);
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:290:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:291:            $('#vendor_div').show();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:292:            $('#product_div').hide();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:296:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:297:            getTypeWiseDetails('product', 
section_id);
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:298:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:299:            $('#vendor_div').hide();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:300:            $('#product_div').show();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:309:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:310:    $("#section_id").change(function () {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:311:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:312:        var section_id = $(this).val();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:313:        var service_type = 
$(this).find(':selected').data('service-type')
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:314:        
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:315:        if (service_type == "ecommerce-service" || 
service_type == "delivery-service") {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:354:                var 
filename=filename.split('.')[0]+"_"+timestamp+'.'+ext;
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:355:                photo=filePayload;
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:356:                fileName=filename;
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:357:                $(".user_image").empty();
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:358:                $(".user_image").append('<img 
class="rounded" style="width:50px" src="'+photo+'" alt="image">');
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:359:                $("#banner_img").val('');          
  };
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:360:        })(f);
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:361:        reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:375:                    var 
filename=filename.split('.')[0]+"_"+timestamp+'.'+ext;
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:376:                    webPhoto=filePayload;
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:377:                    webFileName=filename;
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:378:                    $(".web_banner_image").empty();
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:379:                    
$(".web_banner_image").append('<img class="rounded" style="width:50px" src="'+webPhoto+'" alt="image">');
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:380:                    $("#web_banner_image").val('');
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:381:                };
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:382:            })(f);
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:383:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:385:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:386:    async function storeImageData() {
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:387:        var newPhoto = '';
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:388:        try {
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:389:            if (photo != '') {
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:390:                photo = 
photo.replace(/^data:image\/[a-z]+;base64,/, "")
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:391:                var uploadTask = await 
storageRef.child(fileName).putString(photo, 'base64', { contentType: 'image/jpg' });
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:392:                var downloadURL = await 
uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:393:                newPhoto = downloadURL;
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:394:                photo = downloadURL;
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:395:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:396:            }
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:397:        } catch (error) {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:399:        }
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:400:        return newPhoto;
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:401:    }
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:402:        async function storeWebImageData() {
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:403:            var newPhoto='';
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:404:            try {
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:405:                if(webPhoto!='') {
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:406:                    
webPhoto=webPhoto.replace(/^data:image\/[a-z]+;base64,/,"")
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:407:                    var uploadTask=await 
storageRef.child(webFileName).putString(webPhoto,'base64',{contentType: 'image/jpg'});
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:408:                    var downloadURL=await 
uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:409:                    newPhoto=downloadURL;
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:410:                    webPhoto=downloadURL;
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:411:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:412:                }
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:413:            } catch(error) {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:415:            }
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:416:            return newPhoto;
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:417:        }
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:418:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:419:    $(".save-setting-btn").click(function () {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:420:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:421:        var section = $('#section_id').val();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:422:        var title = $(".title").val();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:423:        var set_order = 
parseInt($('.set_order').val());
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:424:        var is_publish = false;
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:425:        var position = $("#position").val();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:426:        var redirect_type = "";
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:427:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:457:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:458:        if ($("#is_publish").is(':checked')) {
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:459:            is_publish = true;
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:460:        }
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:461:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:462:        var storeId = $("#storeId").val();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:500:            window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:501:        }else if (photo == '') {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:502:            $(".error_top").show();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:503:            $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:504:            
$(".error_top").append("<p>{{trans('lang.please_choose_banner')}}</p>");
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:518:            
jQuery("#data-table_processing").show();
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:519:            storeImageData().then(IMG => {
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:520:                storeWebImageData().then(webIMG => 
{
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:521:                
database.collection('banner_items').doc(id).set({
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:522:                    'title': title,
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:523:                    'photo': IMG,
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:524:                    'web_banner': webIMG,
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:525:                    'id': id,
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:526:                    'set_order': set_order,
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:527:                    'is_publish': is_publish,
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:528:                    'sectionId': section,
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:529:                    'position': position ? 
position : 'top',
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:530:                    'redirect_type': redirect_type 
? redirect_type : '',
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:565:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:566:            var ref_vendors = 
database.collection('vendors').where('section_id', '==', sectionId);
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:567:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:568:            ref_vendors.get().then(async function 
(snapshots) {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:569:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:570:                snapshots.docs.forEach((listval) 
=> {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:571:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:579:            $('#productId').append($("<option 
value=''>{{trans('lang.select_product')}}</option>"));
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:580:            var ref_vendor_products = 
database.collection('vendor_products').where('section_id', '==', sectionId);
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:581:
> C:\deploy\adminpanel\resources\views\banners\create.blade.php:582:            ref_vendor_products.get().then(async 
function (snapshots) {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:583:
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:584:                snapshots.docs.forEach((listval) 
=> {
  C:\deploy\adminpanel\resources\views\banners\create.blade.php:585:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:75:                        <div class="col-7">
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:76:                            <select name="section_id" 
id="section_id" class="form-control">
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:77:                                <option 
value="">{{trans('lang.select')}}</option>
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:78:                            </select>
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:79:                            <p style="color: 
red;font-size: 13px;"> {{trans('lang.rental_parcel_cab_service_are_not')}}
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:147:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:148:                            <input type="checkbox" 
id="is_publish">
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:149:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:150:                            <label class="col-3 
control-label" for="is_publish">{{trans('lang.is_publish')}}</label>
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:151:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:152:                        </div>
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:153:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:161:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:162:                        <div 
id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:163:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:164:                        <div 
class="placeholder_img_thumb user_image"></div>
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:165:                    </div>
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:166:                    <div class="form-group row 
width-50">
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:167:                    
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:170:                            <input type="file" 
id="web_banner_img" onChange="handleWebBannerFileSelect(event)">
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:171:                            <div 
id="uploding_image"></div>
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:172:                        </div>
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:173:                        <div 
class="placeholder_img_thumb web_banner_image"></div>
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:174:                    </div>
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:175:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:176:                </fieldset>
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:205:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:206:    var photo = "";
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:207:    var fileName = "";
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:208:    var webPhoto="";
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:209:    var webFileName="";
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:210:    var oldWebFile="";
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:211:    var oldImageFile = "";
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:212:    var storageRef = 
firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:213:    var storage = firebase.storage();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:214:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:215:    var id = "<?php echo $id; ?>";
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:220:    var sections_list = [];
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:221:    var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:222:    var placeholder = 
database.collection('settings').doc('placeHolderImage');
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:223:    placeholder.get().then(async function 
(snapshotsimage) {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:224:        var placeholderImageData = 
snapshotsimage.data();
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:225:        placeholderImage = 
placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:226:    })
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:227:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:228:    $(document).ready(function () {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:230:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:231:            $("#section_id").append('<optgroup 
label="Multivendor Delivery Service"></optgroup');
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:232:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:233:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:234:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:237:                    sections_list.push(data);
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:238:                    
$('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:239:                        .attr("value", 
data.id).attr("data-service-type", data.serviceTypeFlag)
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:240:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:241:                }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:243:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:244:            $("#section_id").append('<optgroup 
label="Ecommerce Service"><optgroup');
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:245:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:246:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:247:                if (data.serviceTypeFlag == 
"ecommerce-service") {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:248:                    sections_list.push(data);
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:249:                    
$('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:250:                        .attr("value", 
data.id).attr("data-service-type", data.serviceTypeFlag)
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:251:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:252:                }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:254:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:255:            $("#section_id").append('<optgroup 
label="Parcel Delivery Service"><optgroup');
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:256:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:257:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:258:                if (data.serviceTypeFlag == 
"parcel_delivery") {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:259:                    sections_list.push(data);
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:260:                    
$('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:261:                        .attr("value", 
data.id).attr("data-service-type", data.serviceTypeFlag)
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:262:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:263:                }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:265:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:266:            $("#section_id").append('<optgroup 
label="Cab Service"><optgroup');
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:267:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:268:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:269:                if (data.serviceTypeFlag == 
"cab-service") {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:270:                    sections_list.push(data);
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:271:                    
$('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:272:                        .attr("value", 
data.id).attr("data-service-type", data.serviceTypeFlag)
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:273:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:274:                }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:276:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:277:            $("#section_id").append('<optgroup 
label="On Demand Service"><optgroup');
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:278:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:279:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:280:                if (data.serviceTypeFlag == 
"ondemand-service") {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:282:                    sections_list.push(data);
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:283:                    
$('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:284:                        .attr("value", 
data.id).attr("data-service-type", data.serviceTypeFlag)
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:285:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:286:                }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:293:            var redirect_type = $(this).val();
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:294:            var section_id = $("#section_id").val();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:295:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:296:            if (redirect_type == "store") {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:297:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:298:                getTypeWiseDetails('store', 
section_id);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:299:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:300:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:301:                $('#vendor_div').show();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:305:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:306:                getTypeWiseDetails('product', 
section_id);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:307:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:308:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:309:                $('#vendor_div').hide();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:332:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:333:            if (menuItems.is_publish) {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:334:                $("#is_publish").prop("checked", 
true);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:335:            }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:336:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:337:            if 
(menuItems.hasOwnProperty('sectionId')) {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:338:                
$('#section_id').val(menuItems.sectionId).trigger('change');
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:339:            }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:340:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:341:            photo = menuItems.photo;
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:342:            if (photo != '') {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:343:                oldImageFile = menuItems.photo;
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:344:                $(".user_image").append('<img 
class="rounded" style="width:50px" src="' + photo + '" alt="image" onerror="this.onerror=null;this.src=\'' + 
placeholderImage + '\'">');
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:345:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:346:            }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:347:            
if(menuItems.hasOwnProperty('web_banner') && menuItems.web_banner!='' && menuItems.web_banner!=null){
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:348:                webPhoto=menuItems.web_banner;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:349:                oldWebFile=menuItems.web_banner;
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:350:                $(".web_banner_image").append('<img 
class="rounded" style="width:50px" src="'+webPhoto+'" alt="image" 
onerror="this.onerror=null;this.src=\''+placeholderImage+'\'">');
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:351: 
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:352:            }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:353:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:390:            if (
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:391:                $("#section_id").val() && 
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:392:                (
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:393:                    
$("#section_id").find(':selected').data('service-type') == "ecommerce-service" || 
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:394:                    
$("#section_id").find(':selected').data('service-type') == "delivery-service" || 
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:395:                    
$("#section_id").find(':selected').data('service-type') == "ondemand-service"
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:396:                )
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:397:            ) {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:398:                
$("#position").val(menuItems.position);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:409:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:410:    $("#section_id").change(function () {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:411:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:412:        var service_type = 
$(this).find(':selected').data('service-type')
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:413:        var section_id = $(this).val();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:414:        
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:415:        if (service_type == "ecommerce-service" || 
service_type == "delivery-service") {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:416:        
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:423:            if (redirect_type == "store") {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:424:                getTypeWiseDetails('store', 
section_id);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:425:                $('#vendor_div').show();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:426:                $('#product_div').hide();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:427:                $('#external_link_div').hide();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:428:            } else if (redirect_type == "product") {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:429:                getTypeWiseDetails('product', 
section_id);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:430:                $('#vendor_div').hide();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:431:                $('#product_div').show();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:432:                $('#external_link_div').hide();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:464:				var filename = filename.split('.')[0] + "_" + 
timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:465:				photo = filePayload;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:466:				fileName = filename;
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:467:                $(".user_image").empty();
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:468:                $(".user_image").append('<img 
class="rounded" style="width:50px" src="' + photo + '" alt="image" onerror="this.onerror=null;this.src=\'' + 
placeholderImage + '\'">');
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:469:                $("#banner_img").val('');			};
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:470:		})(f);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:471:		reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:484:                    var 
filename=filename.split('.')[0]+"_"+timestamp+'.'+ext;
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:485:                    webPhoto=filePayload;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:486:                    webFileName=filename;
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:487:                    $(".web_banner_image").empty();
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:488:                    
$(".web_banner_image").append('<img class="rounded" style="width:50px" src="'+webPhoto+'" alt="image" 
onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'">');
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:489:                    $("#web_banner_image").val('');
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:490:                };
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:491:            })(f);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:492:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:496:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:497:        var section = $('#section_id').val();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:498:        var title = $(".title").val();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:499:        var set_order = 
parseInt($('.set_order').val());
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:500:        var is_publish = false;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:501:        var position = $("#position").val();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:502:        var redirect_type = "";
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:503:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:539:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:540:        if ($("#is_publish").is(':checked')) {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:541:            is_publish = true;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:542:        }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:543:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:544:        var storeId = $("#storeId").val();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:581:            window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:582:        } else if (photo == '') {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:583:            $(".error_top").show();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:584:            $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:585:            
$(".error_top").append("<p>{{trans('lang.please_choose_banner')}}</p>");
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:599:            
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:600:            storeImageData().then(IMG => {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:601:                storeWebImageData().then(webIMG => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:602:                
database.collection('banner_items').doc(id).update({
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:603:                    'title': title,
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:604:                    'photo': IMG,
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:605:                    'web_banner': webIMG,
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:606:                    'id': id,
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:607:                    'set_order': set_order,
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:608:                    'is_publish': is_publish,
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:609:                    'sectionId': section,
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:610:                    'position': position ? position 
: 'top',
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:611:                    'redirect_type': redirect_type ? 
redirect_type : '',
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:646:                
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:647:            var ref_vendors = 
database.collection('vendors').where('section_id', '==', sectionId);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:648:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:649:            ref_vendors.get().then(async function 
(snapshots) {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:650:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:651:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:652:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:668:            $('#productId').append($("<option 
value=''>{{trans('lang.select_product')}}</option>"));
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:669:            var ref_vendor_products = 
database.collection('vendor_products').where('section_id', '==', sectionId);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:670:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:671:            ref_vendor_products.get().then(async 
function (snapshots) {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:672:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:673:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:674:                    
$('#productId').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:684:    }
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:685:    async function storeImageData() {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:686:        var newPhoto = '';
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:687:        try {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:688:            if (oldImageFile != "" && photo != 
oldImageFile) {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:689:                var oldImageUrl = await 
storage.refFromURL(oldImageFile);
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:690:                imageBucket = oldImageUrl.bucket;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:691:                var envBucket = "<?php echo 
env('FIREBASE_STORAGE_BUCKET'); ?>";
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:692:                    if (imageBucket == envBucket) {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:693:                        await 
oldImageUrl.delete().then(() => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:694:                            console.log("Old file 
deleted!")
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:695:                        }).catch((error) => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:696:                            console.log("ERR File 
delete ===", error);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:701:                }
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:702:                if (photo != oldImageFile) {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:703:                    photo = 
photo.replace(/^data:image\/[a-z]+;base64,/, "")
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:704:                    var uploadTask = await 
storageRef.child(fileName).putString(photo, 'base64', { contentType: 'image/jpg' });
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:705:                    var downloadURL = await 
uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:706:                    newPhoto = downloadURL;
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:707:                    photo = downloadURL;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:708:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:709:                } else {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:710:                    newPhoto = photo;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:711:                }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:712:            } catch (error) {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:713:                console.log("ERR ===", error);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:714:            }
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:715:            return newPhoto;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:716:        }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:717:
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:718:    async function storeWebImageData() {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:719:            var newPhoto='';
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:720:            try {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:721:                if(oldWebFile!=""&& 
webPhoto!=oldWebFile) {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:722:                    var oldImageUrl=await 
storage.refFromURL(oldWebFile);
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:723:                    imageBucket=oldImageUrl.bucket;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:724:                    var envBucket="<?php echo 
env('FIREBASE_STORAGE_BUCKET'); ?>";
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:725:                    if(imageBucket==envBucket) {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:726:                        await 
oldImageUrl.delete().then(() => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:727:                            console.log("Old file 
deleted!")
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:728:                        }).catch((error) => {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:729:                            console.log("ERR File 
delete ===",error);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:734:                }
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:735:                if(webPhoto!=oldWebFile) {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:736:                    
webPhoto=webPhoto.replace(/^data:image\/[a-z]+;base64,/,"")
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:737:                    var uploadTask=await 
storageRef.child(webFileName).putString(webPhoto,'base64',{contentType: 'image/jpg'});
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:738:                    var downloadURL=await 
uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:739:                    newPhoto=downloadURL;
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:740:                    webPhoto=downloadURL;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:741:
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:742:                } else {
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:743:                    newPhoto=webPhoto;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:744:                }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:745:            } catch(error) {
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:746:                console.log("ERR ===",error);
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:747:            }
> C:\deploy\adminpanel\resources\views\banners\edit.blade.php:748:            return newPhoto;
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:749:        }
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:750:    
  C:\deploy\adminpanel\resources\views\banners\edit.blade.php:751:
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:22:                    <div class="d-flex 
top-title-left align-self-center">
> C:\deploy\adminpanel\resources\views\banners\index.blade.php:23:                        <span class="icon mr-3"><img 
src="{{ asset('images/banner.png') }}"></span>
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:24:                        <h3 
class="mb-0">{{trans('lang.menu_items')}}</h3>
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:25:                        <span class="counter ml-3 
total_count"></span>
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:26:                    </div>
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:59:                                        
<th>{{trans('lang.banner_position')}}</th>
> C:\deploy\adminpanel\resources\views\banners\index.blade.php:60:                                        
<th>{{trans('lang.item_publish')}}</th>
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:61:                                        
<th>{{trans('lang.actions')}}</th>
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:62:                                    </tr>
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:63:                                </thead>
> C:\deploy\adminpanel\resources\views\banners\index.blade.php:64:                                <tbody 
id="append_vendors">
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:65:                                </tbody>
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:66:                            </table>
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:67:                        </div>
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:79:
> C:\deploy\adminpanel\resources\views\banners\index.blade.php:80:    var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:81:    var user_permissions = '<?php echo 
@session('user_permissions') ?>';
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:82:    user_permissions = 
Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:83:    var checkDeletePermission = false;
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:95:
> C:\deploy\adminpanel\resources\views\banners\index.blade.php:96:    if(section_id){
> C:\deploy\adminpanel\resources\views\banners\index.blade.php:97:        refData = refData.where('sectionId', '==', 
section_id);
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:98:    }
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:99:    
  C:\deploy\adminpanel\resources\views\banners\index.blade.php:100:    var append_list = '';



TEXT_END

## 2. Customer App Source Scan
TEXT_START

  apps\customer_v6_7\lib\models\vendor_model.dart:9:  String? openDineTime;
> apps\customer_v6_7\lib\models\vendor_model.dart:10:  List<dynamic>? categoryID;
  apps\customer_v6_7\lib\models\vendor_model.dart:11:  String? id;
> apps\customer_v6_7\lib\models\vendor_model.dart:12:  String? categoryPhoto;
> apps\customer_v6_7\lib\models\vendor_model.dart:13:  List<dynamic>? restaurantMenuPhotos;
  apps\customer_v6_7\lib\models\vendor_model.dart:14:  List<WorkingHours>? workingHours;
  apps\customer_v6_7\lib\models\vendor_model.dart:15:  String? location;
  apps\customer_v6_7\lib\models\vendor_model.dart:16:  String? fcmToken;
  apps\customer_v6_7\lib\models\vendor_model.dart:17:  G? g;
> apps\customer_v6_7\lib\models\vendor_model.dart:18:  bool? hidephotos;
  apps\customer_v6_7\lib\models\vendor_model.dart:19:  bool? reststatus;
  apps\customer_v6_7\lib\models\vendor_model.dart:20:  Filters? filters;
  apps\customer_v6_7\lib\models\vendor_model.dart:21:  AdminCommission? adminCommission;
> apps\customer_v6_7\lib\models\vendor_model.dart:22:  String? photo;
  apps\customer_v6_7\lib\models\vendor_model.dart:23:  String? description;
  apps\customer_v6_7\lib\models\vendor_model.dart:24:  num? walletAmount;
  apps\customer_v6_7\lib\models\vendor_model.dart:25:  String? closeDineTime;
> apps\customer_v6_7\lib\models\vendor_model.dart:26:  String? zoneId;
> apps\customer_v6_7\lib\models\vendor_model.dart:27:  Timestamp? createdAt;
> apps\customer_v6_7\lib\models\vendor_model.dart:28:  double? longitude;
  apps\customer_v6_7\lib\models\vendor_model.dart:29:  bool? enabledDiveInFuture;
  apps\customer_v6_7\lib\models\vendor_model.dart:30:  String? restaurantCost;
  apps\customer_v6_7\lib\models\vendor_model.dart:31:  DeliveryCharge? deliveryCharge;
  apps\customer_v6_7\lib\models\vendor_model.dart:32:  String? authorProfilePic;
  apps\customer_v6_7\lib\models\vendor_model.dart:36:  bool? specialDiscountEnable;
> apps\customer_v6_7\lib\models\vendor_model.dart:37:  GeoPoint? coordinates;
  apps\customer_v6_7\lib\models\vendor_model.dart:38:  num? reviewsSum;
  apps\customer_v6_7\lib\models\vendor_model.dart:39:  num? reviewsCount;
> apps\customer_v6_7\lib\models\vendor_model.dart:40:  List<dynamic>? photos;
  apps\customer_v6_7\lib\models\vendor_model.dart:41:  String? title;
  apps\customer_v6_7\lib\models\vendor_model.dart:42:  List<dynamic>? categoryTitle;
> apps\customer_v6_7\lib\models\vendor_model.dart:43:  double? latitude;
  apps\customer_v6_7\lib\models\vendor_model.dart:44:  String? subscriptionPlanId;
  apps\customer_v6_7\lib\models\vendor_model.dart:45:  Timestamp? subscriptionExpiryDate;
  apps\customer_v6_7\lib\models\vendor_model.dart:46:  SubscriptionPlanModel? subscriptionPlan;
  apps\customer_v6_7\lib\models\vendor_model.dart:47:  String? subscriptionTotalOrders;
  apps\customer_v6_7\lib\models\vendor_model.dart:55:    this.openDineTime,
> apps\customer_v6_7\lib\models\vendor_model.dart:56:    this.categoryID,
  apps\customer_v6_7\lib\models\vendor_model.dart:57:    this.id,
> apps\customer_v6_7\lib\models\vendor_model.dart:58:    this.categoryPhoto,
> apps\customer_v6_7\lib\models\vendor_model.dart:59:    this.restaurantMenuPhotos,
  apps\customer_v6_7\lib\models\vendor_model.dart:60:    this.workingHours,
  apps\customer_v6_7\lib\models\vendor_model.dart:61:    this.location,
  apps\customer_v6_7\lib\models\vendor_model.dart:62:    this.fcmToken,
  apps\customer_v6_7\lib\models\vendor_model.dart:63:    this.g,
> apps\customer_v6_7\lib\models\vendor_model.dart:64:    this.hidephotos,
  apps\customer_v6_7\lib\models\vendor_model.dart:65:    this.reststatus,
  apps\customer_v6_7\lib\models\vendor_model.dart:66:    this.filters,
  apps\customer_v6_7\lib\models\vendor_model.dart:67:    this.reviewsCount,
> apps\customer_v6_7\lib\models\vendor_model.dart:68:    this.photo,
  apps\customer_v6_7\lib\models\vendor_model.dart:69:    this.description,
  apps\customer_v6_7\lib\models\vendor_model.dart:70:    this.walletAmount,
  apps\customer_v6_7\lib\models\vendor_model.dart:71:    this.closeDineTime,
> apps\customer_v6_7\lib\models\vendor_model.dart:72:    this.zoneId,
> apps\customer_v6_7\lib\models\vendor_model.dart:73:    this.createdAt,
> apps\customer_v6_7\lib\models\vendor_model.dart:74:    this.longitude,
  apps\customer_v6_7\lib\models\vendor_model.dart:75:    this.enabledDiveInFuture,
  apps\customer_v6_7\lib\models\vendor_model.dart:76:    this.restaurantCost,
  apps\customer_v6_7\lib\models\vendor_model.dart:77:    this.deliveryCharge,
  apps\customer_v6_7\lib\models\vendor_model.dart:78:    this.adminCommission,
  apps\customer_v6_7\lib\models\vendor_model.dart:83:    this.specialDiscountEnable,
> apps\customer_v6_7\lib\models\vendor_model.dart:84:    this.coordinates,
  apps\customer_v6_7\lib\models\vendor_model.dart:85:    this.reviewsSum,
> apps\customer_v6_7\lib\models\vendor_model.dart:86:    this.photos,
  apps\customer_v6_7\lib\models\vendor_model.dart:87:    this.title,
  apps\customer_v6_7\lib\models\vendor_model.dart:88:    this.categoryTitle,
> apps\customer_v6_7\lib\models\vendor_model.dart:89:    this.latitude,
  apps\customer_v6_7\lib\models\vendor_model.dart:90:    this.subscriptionPlanId,
  apps\customer_v6_7\lib\models\vendor_model.dart:91:    this.subscriptionExpiryDate,
  apps\customer_v6_7\lib\models\vendor_model.dart:92:    this.subscriptionPlan,
  apps\customer_v6_7\lib\models\vendor_model.dart:93:    this.subscriptionTotalOrders,
  apps\customer_v6_7\lib\models\vendor_model.dart:102:    openDineTime = json['openDineTime'];
> apps\customer_v6_7\lib\models\vendor_model.dart:103:    categoryID = json['categoryID'] is String ? [] : 
json['categoryID'] ?? [];
  apps\customer_v6_7\lib\models\vendor_model.dart:104:    id = json['id'];
> apps\customer_v6_7\lib\models\vendor_model.dart:105:    categoryPhoto = json['categoryPhoto'];
> apps\customer_v6_7\lib\models\vendor_model.dart:106:    restaurantMenuPhotos = json['restaurantMenuPhotos'] ?? [];
  apps\customer_v6_7\lib\models\vendor_model.dart:107:    if (json['workingHours'] != null) {
  apps\customer_v6_7\lib\models\vendor_model.dart:108:      workingHours = <WorkingHours>[];
  apps\customer_v6_7\lib\models\vendor_model.dart:109:      json['workingHours'].forEach((v) {
  apps\customer_v6_7\lib\models\vendor_model.dart:110:        workingHours!.add(WorkingHours.fromJson(v));
  apps\customer_v6_7\lib\models\vendor_model.dart:115:    g = json['g'] != null ? G.fromJson(json['g']) : null;
> apps\customer_v6_7\lib\models\vendor_model.dart:116:    hidephotos = json['hidephotos'];
  apps\customer_v6_7\lib\models\vendor_model.dart:117:    reststatus = json['reststatus'];
  apps\customer_v6_7\lib\models\vendor_model.dart:118:    filters = json['filters'] != null ? 
Filters.fromJson(json['filters']) : null;
  apps\customer_v6_7\lib\models\vendor_model.dart:119:    reviewsCount = num.parse('${json['reviewsCount'] ?? 0.0}');
> apps\customer_v6_7\lib\models\vendor_model.dart:120:    photo = json['photo'];
  apps\customer_v6_7\lib\models\vendor_model.dart:121:    description = json['description'];
  apps\customer_v6_7\lib\models\vendor_model.dart:122:    walletAmount = json['walletAmount'];
  apps\customer_v6_7\lib\models\vendor_model.dart:123:    closeDineTime = json['closeDineTime'];
> apps\customer_v6_7\lib\models\vendor_model.dart:124:    zoneId = json['zoneId'];
> apps\customer_v6_7\lib\models\vendor_model.dart:125:    // createdAt = json['createdAt'];
> apps\customer_v6_7\lib\models\vendor_model.dart:126:    longitude = double.parse(json['longitude'].toString());
  apps\customer_v6_7\lib\models\vendor_model.dart:127:    enabledDiveInFuture = json['enabledDiveInFuture'];
  apps\customer_v6_7\lib\models\vendor_model.dart:128:    restaurantCost = json['restaurantCost']?.toString();
  apps\customer_v6_7\lib\models\vendor_model.dart:129:    deliveryCharge = json['DeliveryCharge'] != null ? 
DeliveryCharge.fromJson(json['DeliveryCharge']) : null;
  apps\customer_v6_7\lib\models\vendor_model.dart:130:    adminCommission = json['adminCommission'] != null ? 
AdminCommission.fromJson(json['adminCommission']) : null;
  apps\customer_v6_7\lib\models\vendor_model.dart:140:    specialDiscountEnable = json['specialDiscountEnable'];
> apps\customer_v6_7\lib\models\vendor_model.dart:141:    coordinates = json['coordinates'];
  apps\customer_v6_7\lib\models\vendor_model.dart:142:    reviewsSum = num.parse('${json['reviewsSum'] ?? 0.0}');
> apps\customer_v6_7\lib\models\vendor_model.dart:143:    photos = json['photos'] ?? [];
  apps\customer_v6_7\lib\models\vendor_model.dart:144:    title = json['title'];
  apps\customer_v6_7\lib\models\vendor_model.dart:145:    categoryTitle = json['categoryTitle'] is String ? [] : 
json['categoryTitle'] ?? [];
> apps\customer_v6_7\lib\models\vendor_model.dart:146:    latitude = double.parse(json['latitude'].toString());
  apps\customer_v6_7\lib\models\vendor_model.dart:147:    subscriptionPlanId = json['subscriptionPlanId'];
  apps\customer_v6_7\lib\models\vendor_model.dart:148:    // subscriptionExpiryDate = json['subscriptionExpiryDate'];
  apps\customer_v6_7\lib\models\vendor_model.dart:149:    subscriptionPlan = json['subscription_plan'] != null ? 
SubscriptionPlanModel.fromJson(json['subscription_plan']) : null;
  apps\customer_v6_7\lib\models\vendor_model.dart:150:    subscriptionTotalOrders = json['subscriptionTotalOrders'];
> apps\customer_v6_7\lib\models\vendor_model.dart:151:    sectionId = json['section_id'];
  apps\customer_v6_7\lib\models\vendor_model.dart:152:    isSelfDelivery = json['isSelfDelivery'] ?? false;
> apps\customer_v6_7\lib\models\vendor_model.dart:153:    createdAt =
> apps\customer_v6_7\lib\models\vendor_model.dart:154:        json['createdAt'] is Timestamp
> apps\customer_v6_7\lib\models\vendor_model.dart:155:            ? json['createdAt']
> apps\customer_v6_7\lib\models\vendor_model.dart:156:            : json['createdAt'] != null
> apps\customer_v6_7\lib\models\vendor_model.dart:157:            ? 
Timestamp.fromMillisecondsSinceEpoch((json['createdAt']['_seconds'] ?? 0) * 1000)
  apps\customer_v6_7\lib\models\vendor_model.dart:158:            : null;
  apps\customer_v6_7\lib\models\vendor_model.dart:159:    subscriptionExpiryDate =
  apps\customer_v6_7\lib\models\vendor_model.dart:160:        json['subscriptionExpiryDate'] is Timestamp
  apps\customer_v6_7\lib\models\vendor_model.dart:161:            ? json['subscriptionExpiryDate']
  apps\customer_v6_7\lib\models\vendor_model.dart:172:    data['openDineTime'] = openDineTime;
> apps\customer_v6_7\lib\models\vendor_model.dart:173:    data['categoryID'] = categoryID;
  apps\customer_v6_7\lib\models\vendor_model.dart:174:    data['id'] = id;
> apps\customer_v6_7\lib\models\vendor_model.dart:175:    data['categoryPhoto'] = categoryPhoto;
> apps\customer_v6_7\lib\models\vendor_model.dart:176:    data['restaurantMenuPhotos'] = restaurantMenuPhotos;
  apps\customer_v6_7\lib\models\vendor_model.dart:177:    data['subscriptionPlanId'] = subscriptionPlanId;
  apps\customer_v6_7\lib\models\vendor_model.dart:178:    data['subscriptionExpiryDate'] = subscriptionExpiryDate;
  apps\customer_v6_7\lib\models\vendor_model.dart:179:    data['subscription_plan'] = subscriptionPlan?.toJson();
  apps\customer_v6_7\lib\models\vendor_model.dart:180:    data['subscriptionTotalOrders'] = subscriptionTotalOrders;
> apps\customer_v6_7\lib\models\vendor_model.dart:181:    data['section_id'] = sectionId;
  apps\customer_v6_7\lib\models\vendor_model.dart:182:    if (workingHours != null) {
  apps\customer_v6_7\lib\models\vendor_model.dart:183:      data['workingHours'] = workingHours!.map((v) => 
v.toJson()).toList();
  apps\customer_v6_7\lib\models\vendor_model.dart:184:    }
  apps\customer_v6_7\lib\models\vendor_model.dart:185:    data['location'] = location;
  apps\customer_v6_7\lib\models\vendor_model.dart:189:    }
> apps\customer_v6_7\lib\models\vendor_model.dart:190:    data['hidephotos'] = hidephotos;
  apps\customer_v6_7\lib\models\vendor_model.dart:191:    data['reststatus'] = reststatus;
  apps\customer_v6_7\lib\models\vendor_model.dart:192:    if (filters != null) {
  apps\customer_v6_7\lib\models\vendor_model.dart:193:      data['filters'] = filters!.toJson();
  apps\customer_v6_7\lib\models\vendor_model.dart:194:    }
  apps\customer_v6_7\lib\models\vendor_model.dart:195:    data['reviewsCount'] = reviewsCount;
> apps\customer_v6_7\lib\models\vendor_model.dart:196:    data['photo'] = photo;
  apps\customer_v6_7\lib\models\vendor_model.dart:197:    data['description'] = description;
  apps\customer_v6_7\lib\models\vendor_model.dart:198:    data['walletAmount'] = walletAmount;
  apps\customer_v6_7\lib\models\vendor_model.dart:199:    data['closeDineTime'] = closeDineTime;
> apps\customer_v6_7\lib\models\vendor_model.dart:200:    data['zoneId'] = zoneId;
> apps\customer_v6_7\lib\models\vendor_model.dart:201:    data['createdAt'] = createdAt;
> apps\customer_v6_7\lib\models\vendor_model.dart:202:    data['longitude'] = longitude;
  apps\customer_v6_7\lib\models\vendor_model.dart:203:    data['enabledDiveInFuture'] = enabledDiveInFuture;
  apps\customer_v6_7\lib\models\vendor_model.dart:204:    data['restaurantCost'] = restaurantCost;
  apps\customer_v6_7\lib\models\vendor_model.dart:205:    if (deliveryCharge != null) {
  apps\customer_v6_7\lib\models\vendor_model.dart:206:      data['DeliveryCharge'] = deliveryCharge!.toJson();
  apps\customer_v6_7\lib\models\vendor_model.dart:217:    data['specialDiscountEnable'] = specialDiscountEnable;
> apps\customer_v6_7\lib\models\vendor_model.dart:218:    data['coordinates'] = coordinates;
  apps\customer_v6_7\lib\models\vendor_model.dart:219:    data['reviewsSum'] = reviewsSum;
> apps\customer_v6_7\lib\models\vendor_model.dart:220:    data['photos'] = photos;
  apps\customer_v6_7\lib\models\vendor_model.dart:221:    data['title'] = title;
  apps\customer_v6_7\lib\models\vendor_model.dart:222:    data['categoryTitle'] = categoryTitle;
> apps\customer_v6_7\lib\models\vendor_model.dart:223:    data['latitude'] = latitude;
  apps\customer_v6_7\lib\models\vendor_model.dart:224:    data['isSelfDelivery'] = isSelfDelivery ?? false;
  apps\customer_v6_7\lib\models\vendor_model.dart:225:    data['packagingCharge'] = packagingCharge;
  apps\customer_v6_7\lib\models\vendor_model.dart:226:    return data;
  apps\customer_v6_7\lib\models\vendor_model.dart:227:  }
  apps\customer_v6_7\lib\models\product_model.dart:7:  bool? veg;
> apps\customer_v6_7\lib\models\product_model.dart:8:  bool? publish;
  apps\customer_v6_7\lib\models\product_model.dart:9:  List<dynamic>? addOnsTitle;
  apps\customer_v6_7\lib\models\product_model.dart:10:  int? calories;
  apps\customer_v6_7\lib\models\product_model.dart:11:  int? proteins;
  apps\customer_v6_7\lib\models\product_model.dart:12:  List<dynamic>? addOnsPrice;
  apps\customer_v6_7\lib\models\product_model.dart:13:  num? reviewsSum;
> apps\customer_v6_7\lib\models\product_model.dart:14:  bool? takeawayOption;
  apps\customer_v6_7\lib\models\product_model.dart:15:  String? name;
  apps\customer_v6_7\lib\models\product_model.dart:16:  Map<String, dynamic>? reviewAttributes;
  apps\customer_v6_7\lib\models\product_model.dart:17:  Map<String, dynamic>? productSpecification;
  apps\customer_v6_7\lib\models\product_model.dart:18:  ItemAttribute? itemAttribute;
  apps\customer_v6_7\lib\models\product_model.dart:23:  String? disPrice;
> apps\customer_v6_7\lib\models\product_model.dart:24:  List<dynamic>? photos;
  apps\customer_v6_7\lib\models\product_model.dart:25:  bool? nonveg;
> apps\customer_v6_7\lib\models\product_model.dart:26:  String? photo;
  apps\customer_v6_7\lib\models\product_model.dart:27:  String? price;
> apps\customer_v6_7\lib\models\product_model.dart:28:  String? categoryID;
  apps\customer_v6_7\lib\models\product_model.dart:29:  String? description;
> apps\customer_v6_7\lib\models\product_model.dart:30:  Timestamp? createdAt;
  apps\customer_v6_7\lib\models\product_model.dart:31:  String? sectionId;
  apps\customer_v6_7\lib\models\product_model.dart:32:  String? brandId;
  apps\customer_v6_7\lib\models\product_model.dart:33:  bool? isDigitalProduct;
  apps\customer_v6_7\lib\models\product_model.dart:34:  String? digitalProduct;
  apps\customer_v6_7\lib\models\product_model.dart:40:    this.veg,
> apps\customer_v6_7\lib\models\product_model.dart:41:    this.publish,
  apps\customer_v6_7\lib\models\product_model.dart:42:    this.addOnsTitle,
  apps\customer_v6_7\lib\models\product_model.dart:43:    this.calories,
  apps\customer_v6_7\lib\models\product_model.dart:44:    this.proteins,
  apps\customer_v6_7\lib\models\product_model.dart:45:    this.addOnsPrice,
  apps\customer_v6_7\lib\models\product_model.dart:46:    this.reviewsSum,
> apps\customer_v6_7\lib\models\product_model.dart:47:    this.takeawayOption,
  apps\customer_v6_7\lib\models\product_model.dart:48:    this.name,
  apps\customer_v6_7\lib\models\product_model.dart:49:    this.reviewAttributes,
  apps\customer_v6_7\lib\models\product_model.dart:50:    this.productSpecification,
  apps\customer_v6_7\lib\models\product_model.dart:51:    this.itemAttribute,
  apps\customer_v6_7\lib\models\product_model.dart:56:    this.disPrice,
> apps\customer_v6_7\lib\models\product_model.dart:57:    this.photos,
  apps\customer_v6_7\lib\models\product_model.dart:58:    this.nonveg,
> apps\customer_v6_7\lib\models\product_model.dart:59:    this.photo,
  apps\customer_v6_7\lib\models\product_model.dart:60:    this.price,
> apps\customer_v6_7\lib\models\product_model.dart:61:    this.categoryID,
  apps\customer_v6_7\lib\models\product_model.dart:62:    this.description,
> apps\customer_v6_7\lib\models\product_model.dart:63:    this.createdAt,
  apps\customer_v6_7\lib\models\product_model.dart:64:    this.sectionId,
  apps\customer_v6_7\lib\models\product_model.dart:65:    this.brandId,
  apps\customer_v6_7\lib\models\product_model.dart:66:    this.isDigitalProduct,
  apps\customer_v6_7\lib\models\product_model.dart:67:    this.digitalProduct,
  apps\customer_v6_7\lib\models\product_model.dart:74:    veg = json['veg'];
> apps\customer_v6_7\lib\models\product_model.dart:75:    publish = json['publish'];
  apps\customer_v6_7\lib\models\product_model.dart:76:    addOnsTitle = json['addOnsTitle'];
  apps\customer_v6_7\lib\models\product_model.dart:77:    calories = json['calories'];
  apps\customer_v6_7\lib\models\product_model.dart:78:    proteins = json['proteins'];
  apps\customer_v6_7\lib\models\product_model.dart:79:    addOnsPrice = json['addOnsPrice'];
  apps\customer_v6_7\lib\models\product_model.dart:80:    reviewsSum = json['reviewsSum'] ?? 0.0;
> apps\customer_v6_7\lib\models\product_model.dart:81:    takeawayOption = json['takeawayOption'];
  apps\customer_v6_7\lib\models\product_model.dart:82:    name = json['name'];
  apps\customer_v6_7\lib\models\product_model.dart:83:    reviewAttributes = json['reviewAttributes'];
  apps\customer_v6_7\lib\models\product_model.dart:84:    productSpecification = json['product_specification'];
> apps\customer_v6_7\lib\models\product_model.dart:85:    itemAttribute = json['item_attribute'] != null ? 
ItemAttribute.fromJson(json['item_attribute']) : null;
  apps\customer_v6_7\lib\models\product_model.dart:86:    id = json['id'];
  apps\customer_v6_7\lib\models\product_model.dart:87:    quantity = json['quantity'];
  apps\customer_v6_7\lib\models\product_model.dart:88:    grams = json['grams'];
  apps\customer_v6_7\lib\models\product_model.dart:89:    reviewsCount = json['reviewsCount'] ?? 0.0;
  apps\customer_v6_7\lib\models\product_model.dart:90:    disPrice = json['disPrice'] ?? "0";
> apps\customer_v6_7\lib\models\product_model.dart:91:    photos = json['photos'] ?? [];
  apps\customer_v6_7\lib\models\product_model.dart:92:    nonveg = json['nonveg'];
> apps\customer_v6_7\lib\models\product_model.dart:93:    photo = json['photo'];
  apps\customer_v6_7\lib\models\product_model.dart:94:    price = json['price'];
> apps\customer_v6_7\lib\models\product_model.dart:95:    categoryID = json['categoryID'];
  apps\customer_v6_7\lib\models\product_model.dart:96:    description = json['description'];
> apps\customer_v6_7\lib\models\product_model.dart:97:    createdAt = json['createdAt'];
> apps\customer_v6_7\lib\models\product_model.dart:98:    sectionId = json['section_id'];
  apps\customer_v6_7\lib\models\product_model.dart:99:    brandId = json['brandID'];
  apps\customer_v6_7\lib\models\product_model.dart:100:    isDigitalProduct = json['isDigitalProduct'];
  apps\customer_v6_7\lib\models\product_model.dart:101:    digitalProduct = json['digitalProduct'];
  apps\customer_v6_7\lib\models\product_model.dart:102:    if (json['taxSetting'] != null) {
  apps\customer_v6_7\lib\models\product_model.dart:114:    data['veg'] = veg;
> apps\customer_v6_7\lib\models\product_model.dart:115:    data['publish'] = publish;
  apps\customer_v6_7\lib\models\product_model.dart:116:    data['addOnsTitle'] = addOnsTitle;
  apps\customer_v6_7\lib\models\product_model.dart:117:    data['addOnsPrice'] = addOnsPrice;
  apps\customer_v6_7\lib\models\product_model.dart:118:    data['calories'] = calories;
  apps\customer_v6_7\lib\models\product_model.dart:119:    data['proteins'] = proteins;
  apps\customer_v6_7\lib\models\product_model.dart:120:    data['reviewsSum'] = reviewsSum;
> apps\customer_v6_7\lib\models\product_model.dart:121:    data['takeawayOption'] = takeawayOption;
  apps\customer_v6_7\lib\models\product_model.dart:122:    data['name'] = name;
  apps\customer_v6_7\lib\models\product_model.dart:123:    data['reviewAttributes'] = reviewAttributes;
  apps\customer_v6_7\lib\models\product_model.dart:124:    data['product_specification'] = productSpecification;
  apps\customer_v6_7\lib\models\product_model.dart:125:    if (itemAttribute != null) {
> apps\customer_v6_7\lib\models\product_model.dart:126:      data['item_attribute'] = itemAttribute!.toJson();
  apps\customer_v6_7\lib\models\product_model.dart:127:    }
  apps\customer_v6_7\lib\models\product_model.dart:128:    data['id'] = id;
  apps\customer_v6_7\lib\models\product_model.dart:129:    data['quantity'] = quantity;
  apps\customer_v6_7\lib\models\product_model.dart:130:    data['grams'] = grams;
  apps\customer_v6_7\lib\models\product_model.dart:132:    data['disPrice'] = disPrice;
> apps\customer_v6_7\lib\models\product_model.dart:133:    data['photos'] = photos;
  apps\customer_v6_7\lib\models\product_model.dart:134:    data['nonveg'] = nonveg;
> apps\customer_v6_7\lib\models\product_model.dart:135:    data['photo'] = photo;
  apps\customer_v6_7\lib\models\product_model.dart:136:    data['price'] = price;
> apps\customer_v6_7\lib\models\product_model.dart:137:    data['categoryID'] = categoryID;
  apps\customer_v6_7\lib\models\product_model.dart:138:    data['description'] = description;
> apps\customer_v6_7\lib\models\product_model.dart:139:    data['createdAt'] = createdAt;
> apps\customer_v6_7\lib\models\product_model.dart:140:    data['section_id'] = sectionId;
  apps\customer_v6_7\lib\models\product_model.dart:141:    data['brandID'] = brandId;
  apps\customer_v6_7\lib\models\product_model.dart:142:    data['isDigitalProduct'] = isDigitalProduct;
  apps\customer_v6_7\lib\models\product_model.dart:143:    data['digitalProduct'] = digitalProduct;
  apps\customer_v6_7\lib\models\product_model.dart:144:    if (taxSetting != null) {
  apps\customer_v6_7\lib\models\product_model.dart:204:  String? variantId;
> apps\customer_v6_7\lib\models\product_model.dart:205:  String? variantImage;
  apps\customer_v6_7\lib\models\product_model.dart:206:  String? variantPrice;
  apps\customer_v6_7\lib\models\product_model.dart:207:  String? variantQuantity;
  apps\customer_v6_7\lib\models\product_model.dart:208:  String? variantSku;
  apps\customer_v6_7\lib\models\product_model.dart:209:
> apps\customer_v6_7\lib\models\product_model.dart:210:  Variants({this.variantId, this.variantImage, 
this.variantPrice, this.variantQuantity, this.variantSku});
  apps\customer_v6_7\lib\models\product_model.dart:211:
  apps\customer_v6_7\lib\models\product_model.dart:212:  Variants.fromJson(Map<String, dynamic> json) {
  apps\customer_v6_7\lib\models\product_model.dart:213:    variantId = json['variant_id'];
> apps\customer_v6_7\lib\models\product_model.dart:214:    variantImage = json['variant_image'];
  apps\customer_v6_7\lib\models\product_model.dart:215:    variantPrice = json['variant_price'] ?? '0';
  apps\customer_v6_7\lib\models\product_model.dart:216:    variantQuantity = json['variant_quantity'] ?? '0';
  apps\customer_v6_7\lib\models\product_model.dart:217:    variantSku = json['variant_sku'];
  apps\customer_v6_7\lib\models\product_model.dart:218:  }
  apps\customer_v6_7\lib\models\product_model.dart:222:    data['variant_id'] = variantId;
> apps\customer_v6_7\lib\models\product_model.dart:223:    data['variant_image'] = variantImage;
  apps\customer_v6_7\lib\models\product_model.dart:224:    data['variant_price'] = variantPrice;
  apps\customer_v6_7\lib\models\product_model.dart:225:    data['variant_quantity'] = variantQuantity;
  apps\customer_v6_7\lib\models\product_model.dart:226:    data['variant_sku'] = variantSku;
  apps\customer_v6_7\lib\models\product_model.dart:227:    return data;
  apps\customer_v6_7\lib\models\vendor_category_model.dart:2:  List<dynamic>? reviewAttributes;
> apps\customer_v6_7\lib\models\vendor_category_model.dart:3:  String? photo;
  apps\customer_v6_7\lib\models\vendor_category_model.dart:4:  String? description;
  apps\customer_v6_7\lib\models\vendor_category_model.dart:5:  String? id;
  apps\customer_v6_7\lib\models\vendor_category_model.dart:6:  String? title;
  apps\customer_v6_7\lib\models\vendor_category_model.dart:7:
> apps\customer_v6_7\lib\models\vendor_category_model.dart:8:  VendorCategoryModel({this.reviewAttributes, this.photo, 
this.description, this.id, this.title});
  apps\customer_v6_7\lib\models\vendor_category_model.dart:9:
  apps\customer_v6_7\lib\models\vendor_category_model.dart:10:  VendorCategoryModel.fromJson(Map<String, dynamic> 
json) {
  apps\customer_v6_7\lib\models\vendor_category_model.dart:11:    reviewAttributes = json['review_attributes'] ?? [];
> apps\customer_v6_7\lib\models\vendor_category_model.dart:12:    photo = json['photo'] ?? "";
  apps\customer_v6_7\lib\models\vendor_category_model.dart:13:    description = json['description'] ?? '';
  apps\customer_v6_7\lib\models\vendor_category_model.dart:14:    id = json['id'] ?? "";
  apps\customer_v6_7\lib\models\vendor_category_model.dart:15:    title = json['title'] ?? "";
  apps\customer_v6_7\lib\models\vendor_category_model.dart:16:  }
  apps\customer_v6_7\lib\models\vendor_category_model.dart:20:    data['review_attributes'] = reviewAttributes;
> apps\customer_v6_7\lib\models\vendor_category_model.dart:21:    data['photo'] = photo;
  apps\customer_v6_7\lib\models\vendor_category_model.dart:22:    data['description'] = description;
  apps\customer_v6_7\lib\models\vendor_category_model.dart:23:    data['id'] = id;
  apps\customer_v6_7\lib\models\vendor_category_model.dart:24:    data['title'] = title;
  apps\customer_v6_7\lib\models\vendor_category_model.dart:25:    return data;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:237:        .collection(CollectionName.zone)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:238:        .where('publish', isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:239:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:240:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:241:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:242:            ZoneModel ariPortModel = 
ZoneModel.fromJson(element.data());
  apps\customer_v6_7\lib\service\fire_store_utils.dart:290:            .collection(CollectionName.sections)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:291:            .where("isActive", isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:292:            .orderBy("order", descending: false)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:293:            .get();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:294:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:295:    await Future.forEach(productsQuery.docs, (
  apps\customer_v6_7\lib\service\fire_store_utils.dart:324:        .collection(CollectionName.currency)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:325:        .where("isActive", isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:326:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:327:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:328:          if (value.docs.isNotEmpty) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:329:            currency = 
CurrencyModel.fromJson(value.docs.first.data());
  apps\customer_v6_7\lib\service\fire_store_utils.dart:363:        .where('user_id', isEqualTo: getCurrentUid())
> apps\customer_v6_7\lib\service\fire_store_utils.dart:364:        .where("section_id", isEqualTo: 
Constant.sectionConstantModel!.id)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:365:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:366:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:367:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:368:            FavouriteModel favouriteModel = 
FavouriteModel.fromJson(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:520:    List<TaxModel> taxList = [];
> apps\customer_v6_7\lib\service\fire_store_utils.dart:521:    List<Placemark> placeMarks = await 
placemarkFromCoordinates(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:522:      Constant.selectedLocation.location!.latitude ?? 0.0,
> apps\customer_v6_7\lib\service\fire_store_utils.dart:523:      Constant.selectedLocation.location!.longitude ?? 0.0,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:524:    );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:525:    await fireStore
  apps\customer_v6_7\lib\service\fire_store_utils.dart:526:        .collection(CollectionName.tax)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:527:        .where('sectionId', isEqualTo: sectionId)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:554:          .orderBy('date', descending: true)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:555:          .orderBy('createdAt', descending: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:556:          .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:557:          .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:558:            for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:559:              DineInBookingModel taxModel = 
DineInBookingModel.fromJson(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:573:          .orderBy('date', descending: true)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:574:          .orderBy('createdAt', descending: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:575:          .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:576:          .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:577:            for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:578:              DineInBookingModel taxModel = 
DineInBookingModel.fromJson(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:637:        .collection(CollectionName.vendorCategories)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:638:        .where("section_id", isEqualTo: 
Constant.sectionConstantModel!.id)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:639:        .where("show_in_homepage", isEqualTo: true)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:640:        .where('publish', isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:641:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:642:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:643:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:644:            VendorCategoryModel walletTransactionModel =
  apps\customer_v6_7\lib\service\fire_store_utils.dart:661:        .where('brandID', isEqualTo: brandId)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:662:        .where('publish', isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:663:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:664:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:665:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:666:            ProductModel walletTransactionModel = 
ProductModel.fromJson(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:681:        .collection(CollectionName.bannerItems)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:682:        .where("is_publish", isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:683:        .where("sectionId", isEqualTo: 
Constant.sectionConstantModel!.id)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:684:        .where("position", isEqualTo: "middle")
  apps\customer_v6_7\lib\service\fire_store_utils.dart:685:        .orderBy("set_order", descending: false)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:686:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:699:        .collection(CollectionName.brands)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:700:        .where("is_publish", isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:701:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:702:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:703:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:704:            BrandsModel bannerHome = 
BrandsModel.fromJson(element.data());
  apps\customer_v6_7\lib\service\fire_store_utils.dart:737:    ) {
> apps\customer_v6_7\lib\service\fire_store_utils.dart:738:      if (document.data().containsKey("categoryID") &&
> apps\customer_v6_7\lib\service\fire_store_utils.dart:739:          
document.data()['categoryID'].toString().isNotEmpty) {
> apps\customer_v6_7\lib\service\fire_store_utils.dart:740:        prodTagList.add(document.data()['categoryID']);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:741:      }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:742:    });
  apps\customer_v6_7\lib\service\fire_store_utils.dart:743:    QuerySnapshot<Map<String, dynamic>> catQuery =
  apps\customer_v6_7\lib\service\fire_store_utils.dart:744:        await fireStore
  apps\customer_v6_7\lib\service\fire_store_utils.dart:745:            .collection(CollectionName.vendorCategories)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:746:            .where('publish', isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:747:            .get();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:748:    await Future.forEach(catQuery.docs, (
  apps\customer_v6_7\lib\service\fire_store_utils.dart:749:      QueryDocumentSnapshot<Map<String, dynamic>> document,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:750:    ) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:767:        .where('user_id', isEqualTo: getCurrentUid())
> apps\customer_v6_7\lib\service\fire_store_utils.dart:768:        .where("section_id", isEqualTo: 
Constant.sectionConstantModel!.id)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:769:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:770:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:771:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:772:            FavouriteItemModel favouriteModel = 
FavouriteItemModel.fromJson(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:784:      await fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:785:          .collection(CollectionName.vendors)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:786:          .doc(vendorId)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:787:          .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:788:          .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:789:            if (value.exists) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:921:          .collection(CollectionName.settings)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:922:          .doc("placeHolderImage")
  apps\customer_v6_7\lib\service\fire_store_utils.dart:923:          .snapshots()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:924:          .listen((event) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:925:            if (event.exists && event.data() != null) {
> apps\customer_v6_7\lib\service\fire_store_utils.dart:926:              Constant.placeHolderImage = 
event.data()?["image"] ?? "";
  apps\customer_v6_7\lib\service\fire_store_utils.dart:927:            }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:928:          });
  apps\customer_v6_7\lib\service\fire_store_utils.dart:929:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:930:      fireStore
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1074:              .where("authorID", isEqualTo: 
getCurrentUid())
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1075:              .where("section_id", isEqualTo: 
Constant.sectionConstantModel!.id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1076:              .orderBy("createdAt", descending: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1077:              .get();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1078:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1079:      print("Snapshot size: ${snapshot.docs.length}");
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1080:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1116:
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1117:  static Future<VendorCategoryModel?> 
getVendorCategoryByCategoryId(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1118:    String categoryId,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1119:  ) async {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1120:    VendorCategoryModel? vendorCategoryModel;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1121:    try {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1122:      await fireStore
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1123:          .collection(CollectionName.vendorCategories)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1124:          .doc(categoryId)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1125:          .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1126:          .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1127:            if (value.exists) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1128:              vendorCategoryModel = 
_vendorCategoryModelFromSnapshot(value);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1178:    return await fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1179:        .collection(CollectionName.vendors)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1180:        .doc(vendor.id)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1181:        .set(vendor.toJson())
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1182:        .then((document) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1183:          return vendor;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1235:          .where("vendorID", isEqualTo: vendorId)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1236:          .where('publish', isEqualTo: true)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1237:          .orderBy("createdAt", descending: false)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1238:          .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1239:          .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1240:            for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1241:              ProductModel productModel = 
_productModelFromSnapshotData(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1247:              print(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1248:                "STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=$vendorId productId=${productModel.id} name=${productModel.name} categoryID=${productModel.categoryID} 
publish=${productModel.publish}",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1249:              );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1250:            }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1251:          })
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1252:          .catchError((error) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1258:          .where("vendorID", isEqualTo: vendorId)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1259:          .where("takeawayOption", isEqualTo: false)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1260:          .where('publish', isEqualTo: true)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1261:          .orderBy("createdAt", descending: false)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1262:          .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1263:          .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1264:            for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1265:              ProductModel productModel = 
_productModelFromSnapshotData(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1271:              print(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1272:                "STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=$vendorId productId=${productModel.id} name=${productModel.name} categoryID=${productModel.categoryID} 
publish=${productModel.publish}",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1273:              );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1274:            }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1275:          })
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1276:          .catchError((error) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1281:      print(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1282:        
"STEP47G_GET_PRODUCT_BY_VENDOR_ID_DELIVERY_FALLBACK_START: vendorId=$vendorId 
reason=delivery_takeawayOption_false_empty",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1283:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1284:      await fireStore
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1285:          .collection(CollectionName.vendorProducts)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1286:          .where("vendorID", isEqualTo: vendorId)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1287:          .where('publish', isEqualTo: true)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1288:          .orderBy("createdAt", descending: false)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1289:          .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1290:          .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1291:            for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1292:              ProductModel productModel = 
_productModelFromSnapshotData(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1298:              print(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1299:                
"STEP47G_GET_PRODUCT_BY_VENDOR_ID_FALLBACK_ITEM: vendorId=$vendorId productId=${productModel.id} 
name=${productModel.name} categoryID=${productModel.categoryID} publish=${productModel.publish}",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1300:              );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1301:            }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1302:          })
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1303:          .catchError((error) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1498:  static Future<VendorCategoryModel?> 
getVendorCategoryById(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1499:    String categoryId,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1500:  ) async {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1501:    VendorCategoryModel? vendorCategoryModel;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1502:    try {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1503:      await fireStore
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1504:          .collection(CollectionName.vendorCategories)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1505:          .doc(categoryId)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1506:          .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1507:          .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1508:            if (value.exists) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1509:              vendorCategoryModel = 
_vendorCategoryModelFromSnapshot(value);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1742:
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1743:  static Stream<List<VendorModel>> 
getAllNearestRestaurantByCategoryId({
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1744:    bool? isDining,
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1745:    required String categoryId,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1746:    bool ecommarce = false,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1747:  }) async* {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1748:    try {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1749:      getNearestVendorByCategoryController =
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1756:                ? fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1757:                    .collection(CollectionName.vendors)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1758:                    .where('categoryID', arrayContains: 
categoryId)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1759:                    .where("enabledDiveInFuture", 
isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1760:                : fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1761:                    .collection(CollectionName.vendors)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1762:                    .where('categoryID', arrayContains: 
categoryId);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1763:      } else {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1764:        query =
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1765:            isDining == true
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1766:                ? fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1767:                    .collection(CollectionName.vendors)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1768:                    .where('categoryID', arrayContains: 
categoryId)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1769:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1770:                      'zoneId',
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1771:                      isEqualTo: 
Constant.selectedZone!.id.toString(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1772:                    )
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1773:                    .where("enabledDiveInFuture", 
isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1774:                : fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1775:                    .collection(CollectionName.vendors)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1776:                    .where('categoryID', arrayContains: 
categoryId)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1777:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1778:                      'zoneId',
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1779:                      isEqualTo: 
Constant.selectedZone!.id.toString(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1780:                    );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1781:      }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1782:      GeoFirePoint center = Geoflutterfire().point(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1783:        latitude: 
Constant.selectedLocation.location!.latitude ?? 0.0,
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1784:        longitude: 
Constant.selectedLocation.location!.longitude ?? 0.0,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1785:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1786:      String field = 'g';
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1787:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1788:      Stream<List<DocumentSnapshot>> stream = 
Geoflutterfire()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1851:                ? fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1852:                    .collection(CollectionName.vendors)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1853:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1854:                      'section_id',
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1855:                      isEqualTo: 
Constant.sectionConstantModel!.id,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1856:                    )
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1857:                    .where("enabledDiveInFuture", 
isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1858:                : fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1859:                    .collection(CollectionName.vendors)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1860:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1861:                      'section_id',
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1862:                      isEqualTo: 
Constant.sectionConstantModel!.id,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1863:                    );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1864:      } else {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1865:        query =
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1867:                ? fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1868:                    .collection(CollectionName.vendors)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1869:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1870:                      'section_id',
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1871:                      isEqualTo: 
Constant.sectionConstantModel!.id,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1872:                    )
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1873:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1874:                      'zoneId',
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1875:                      isEqualTo: 
Constant.selectedZone?.id.toString(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1876:                    )
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1877:                    .where("enabledDiveInFuture", 
isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1878:                : fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1879:                    .collection(CollectionName.vendors)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1880:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1881:                      'section_id',
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1882:                      isEqualTo: 
Constant.sectionConstantModel!.id,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1883:                    )
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1884:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1885:                      'zoneId',
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1886:                      isEqualTo: 
Constant.selectedZone?.id.toString(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1887:                    );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1888:      }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1889:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1890:      GeoFirePoint center = Geoflutterfire().point(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1891:        latitude: 
Constant.selectedLocation.location!.latitude ?? 0.0,
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1892:        longitude: 
Constant.selectedLocation.location!.longitude ?? 0.0,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1893:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1894:      String field = 'g';
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1895:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1896:      Stream<List<DocumentSnapshot>> stream = 
Geoflutterfire()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1949:        .collection(CollectionName.vendorCategories)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1950:        .where("section_id", isEqualTo: 
Constant.sectionConstantModel!.id)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1951:        .where("show_in_homepage", isEqualTo: true)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1952:        .where('publish', isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1953:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1954:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1955:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1956:            VendorCategoryModel vendorCategoryModel =
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1987:
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1988:  static Future<List<ProductModel>> 
getProductListByCategoryId(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1989:    String categoryId,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1990:  ) async {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1991:    List<ProductModel> productList = [];
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1992:    List<ProductModel> categorybyProductList = [];
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1993:    QuerySnapshot<Map<String, dynamic>> currencyQuery =
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1995:            .collection(CollectionName.vendorProducts)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1996:            .where('categoryID', isEqualTo: categoryId)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:1997:            .where('publish', isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1998:            .get();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:1999:    await Future.forEach(currencyQuery.docs, (
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2000:      QueryDocumentSnapshot<Map<String, dynamic>> document,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2001:    ) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2051:    print(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2052:      "STEP46S_GET_ALL_PRODUCTS_QUERY_START: 
vendorId=$vendorId collection=${CollectionName.vendorProducts} filter=vendorID/publish_true",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2053:    );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2054:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2055:    QuerySnapshot<Map<String, dynamic>> productsQuery =
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2056:        await fireStore
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2057:            .collection(CollectionName.vendorProducts)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2058:            .where("section_id", isEqualTo: 
Constant.sectionConstantModel!.id)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2059:            .where('vendorID', isEqualTo: vendorId)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2060:            .where('publish', isEqualTo: true)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2061:            .orderBy('createdAt', descending: false)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2062:            .get();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2063:    await Future.forEach(productsQuery.docs, (
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2064:      QueryDocumentSnapshot<Map<String, dynamic>> document,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2065:    ) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2074:        print(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2075:          "STEP46S_GET_ALL_PRODUCTS_ITEM: 
vendorId=$vendorId productId=${document.id} name=${document.data()["name"]} publish=${document.data()["publish"]} 
categoryID=${document.data()["categoryID"]}",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2076:        );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2077:      } catch (e) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2078:        print('product**-FireStoreUtils.getAllProducts 
Parse error $e');
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2079:      }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2087:  static Future<List<VendorModel>> getAllStoresFuture({
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2088:    String? categoryId,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2089:    bool ecommarce = false,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2090:  }) async {
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2091:    List<VendorModel> vendors = [];
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2092:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2093:    try {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2094:      Query<Map<String, dynamic>> collectionReference;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2095:      if (ecommarce == true) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2096:        collectionReference =
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2097:            categoryId == null
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2098:                ? fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2099:                    .collection(CollectionName.vendors)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2100:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2101:                      "section_id",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2102:                      isEqualTo: 
Constant.sectionConstantModel!.id,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2103:                    )
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2104:                : fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2105:                    .collection(CollectionName.vendors)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2106:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2107:                      "section_id",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2108:                      isEqualTo: 
Constant.sectionConstantModel!.id,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2109:                    )
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2110:                    .where("categoryID", isEqualTo: 
categoryId);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2111:      } else {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2112:        collectionReference =
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2113:            categoryId == null
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2114:                ? fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2115:                    .collection(CollectionName.vendors)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2116:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2117:                      "section_id",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2118:                      isEqualTo: 
Constant.sectionConstantModel!.id,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2119:                    )
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2120:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2121:                      "zoneId",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2122:                      isEqualTo: 
Constant.selectedZone!.id.toString(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2123:                    )
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2124:                : fireStore
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2125:                    .collection(CollectionName.vendors)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2126:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2127:                      "section_id",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2128:                      isEqualTo: 
Constant.sectionConstantModel!.id,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2129:                    )
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2130:                    .where("categoryID", isEqualTo: 
categoryId)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2131:                    .where(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2132:                      "zoneId",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2133:                      isEqualTo: 
Constant.selectedZone!.id.toString(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2134:                    );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2135:      }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2136:      GeoFirePoint center = Geoflutterfire().point(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2137:        latitude: 
Constant.selectedLocation.location!.latitude ?? 0.0,
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2138:        longitude: 
Constant.selectedLocation.location!.longitude ?? 0.0,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2139:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2140:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2141:      String field = 'g';
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2142:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2169:              if (vendorModel.subscriptionTotalOrders == 
"-1") {
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2170:                vendors.add(vendorModel);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2171:              } else {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2172:                if ((vendorModel.subscriptionExpiryDate != 
null &&
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2173:                        
vendorModel.subscriptionExpiryDate!.toDate().isBefore(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2174:                              DateTime.now(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2178:                  if (vendorModel.subscriptionTotalOrders 
!= '0') {
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2179:                    vendors.add(vendorModel);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2180:                  }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2181:                }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2182:              }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2183:            }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2184:          } else {
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2185:            vendors.add(vendorModel);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2186:          }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2187:        }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2188:      }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2189:    } catch (e) {
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2190:      print('Error fetching vendors: $e');
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2191:    }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2192:
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2193:    return vendors;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2194:  }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2195:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2196:  static Future<NotificationModel?> 
getNotificationContent(String type) async {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2197:    NotificationModel? notificationModel;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2225:        .collection(CollectionName.vendorCategories)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2226:        .where('section_id', isEqualTo: 
Constant.sectionConstantModel!.id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2227:        .where('publish', isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2228:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2229:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2230:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2231:            print("====>${value.docs.length}");
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2307:
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2308:  static Future<Url> uploadChatImageToFireStorage(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2309:    File image,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2310:    BuildContext context,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2311:  ) async {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2312:    ShowToastDialog.showLoader("Please wait".tr);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2313:    var uniqueID = const Uuid().v4();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2314:    Reference upload = 
FirebaseStorage.instance.ref().child(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2315:      'images/$uniqueID.png',
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2316:    );
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2317:    UploadTask uploadTask = upload.putFile(image);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2318:    var storageRef = (await uploadTask.whenComplete(() 
{})).ref;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2319:    var downloadUrl = await storageRef.getDownloadURL();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2320:    var metaData = await storageRef.getMetadata();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2321:    ShowToastDialog.closeLoader();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2322:    return Url(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2323:      mime: metaData.contentType ?? 'image',
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2324:      url: downloadUrl.toString(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2325:    );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2326:  }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2327:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2353:        .collection(CollectionName.bannerItems)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2354:        .where("is_publish", isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2355:        .where("sectionId", isEqualTo: 
Constant.sectionConstantModel!.id)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2356:        .where("position", isEqualTo: "top")
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2357:        .orderBy("set_order", descending: false)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2358:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2469:        thumbnail.readAsBytesSync(),
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2470:        SettableMetadata(contentType: 'image/jpeg'),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2471:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2472:      await thumbnailUploadTask;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2473:      final String thumbnailUrl = await 
thumbnailRef.getDownloadURL();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2474:      var metaData = await thumbnailRef.getMetadata();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2631:        .collection(CollectionName.parcelCategory)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2632:        .where('publish', isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2633:        .where('sectionId', isEqualTo: 
Constant.sectionConstantModel!.id)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2634:        .orderBy('set_order', descending: false)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2635:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2636:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2729:        "{date}",
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2730:        
DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2731:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2732:      newString = newString.replaceAll(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2733:        "{sendername}",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2734:        orderModel.sender!.name.toString(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2789:        "{date}",
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2790:        
DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2791:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2792:      newString = newString.replaceAll(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2793:        "{time}",
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2794:        DateFormat('hh:mm 
a').format(orderModel.createdAt!.toDate()),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2795:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2796:      newString = newString.replaceAll(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2797:        "{pickuplocation}",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2798:        orderModel.sourceLocationName.toString(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2845:        "{date}",
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2846:        
DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2847:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2848:      newString = newString.replaceAll(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2849:        "{time}",
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2850:        DateFormat('hh:mm 
a').format(orderModel.createdAt!.toDate()),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2851:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2852:      newString = newString.replaceAll(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2853:        "{pickuplocation}",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2854:        orderModel.sourceLocationName.toString(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2873:        .where('sectionId', isEqualTo: 
Constant.sectionConstantModel!.id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2874:        .orderBy('createdAt', descending: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2875:        .snapshots()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2876:        .map((snapshot) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2877:          return snapshot.docs.map((doc) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2878:            log("===>");
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2889:        .where('sectionId', isEqualTo: 
Constant.sectionConstantModel!.id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2890:        .where("isActive", isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2891:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2892:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2893:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2894:            try {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2910:        .where("sectionId", isEqualTo: 
Constant.sectionConstantModel!.id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:2911:        .where('is_publish', isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2912:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2913:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2914:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:2915:            try {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3004:  //   List<CabOrderModel> ordersList = [];
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3005:  //   await 
fireStore.collection(CollectionName.rides).where('authorID', isEqualTo: 
FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true).get().then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3006:  //     for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3007:  //       CabOrderModel orderModel = 
CabOrderModel.fromJson(element.data());
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3008:  //       ordersList.add(orderModel);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3009:  //     }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3018:        .where('sectionId', isEqualTo: 
Constant.sectionConstantModel!.id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3019:        .orderBy('createdAt', descending: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3020:        .snapshots()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3021:        .map((query) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3022:          List<CabOrderModel> ordersList = [];
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3023:          for (var element in query.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3035:        .where("level", isEqualTo: 0)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3036:        .where("publish", isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3037:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3038:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3039:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3040:            CategoryModel orderModel = 
CategoryModel.fromJson(element.data());
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3046:
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3047:  static Future<CategoryModel?> getCategoryById(String 
categoryId) async {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3048:    CategoryModel? categoryModel;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3049:    await fireStore
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3050:        .collection(CollectionName.providerCategories)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3051:        .doc(categoryId)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3052:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3053:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3054:          if (value.exists) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3055:            categoryModel = 
CategoryModel.fromJson(value.data()!);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3061:  static Future<List<ProviderServiceModel>> 
getProviderFuture({
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3062:    String categoryId = '',
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3063:  }) async {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3064:    List<ProviderServiceModel> providerList = [];
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3065:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3066:    try {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3068:
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3069:      if (categoryId.isNotEmpty) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3070:        collectionReference = fireStore
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3071:            .collection(CollectionName.providersServices)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3072:            .where("sectionId", isEqualTo: 
Constant.sectionConstantModel!.id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3073:            .where('categoryId', isEqualTo: categoryId)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3074:            .where("publish", isEqualTo: true);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3075:      } else {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3076:        collectionReference = fireStore
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3077:            .collection(CollectionName.providersServices)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3078:            .where("sectionId", isEqualTo: 
Constant.sectionConstantModel!.id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3079:            .where("publish", isEqualTo: true);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3080:      }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3081:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3082:      GeoFirePoint center = Geoflutterfire().point(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3083:        latitude: 
Constant.selectedLocation.location!.latitude ?? 0.0,
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3084:        longitude: 
Constant.selectedLocation.location!.longitude ?? 0.0,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3085:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3086:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3087:      String field = 'g';
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3088:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3151:        .where('author', isEqualTo: authId)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3152:        .where('publish', isEqualTo: true)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3153:        .orderBy('createdAt', descending: false)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3154:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3155:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3156:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3157:            ProviderServiceModel orderModel = 
ProviderServiceModel.fromJson(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3165:
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3166:  static Future<CategoryModel?> getSubCategoryById(String 
categoryId) async {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3167:    CategoryModel? categoryModel;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3168:    await fireStore
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3169:        .collection(CollectionName.providerCategories)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3170:        .doc(categoryId)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3171:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3172:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3173:          if (value.exists) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3174:            categoryModel = 
CategoryModel.fromJson(value.data()!);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3206:          .where("sectionId", isEqualTo: 
Constant.sectionConstantModel!.id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3207:          .where("publish", isEqualTo: true);
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3208:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3209:      // Geolocation center point
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3210:      GeoFirePoint center = Geoflutterfire().point(
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3211:        latitude: 
Constant.selectedLocation.location!.latitude ?? 0.0,
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3212:        longitude: 
Constant.selectedLocation.location!.longitude ?? 0.0,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3213:      );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3214:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3215:      String field = 'g';
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3216:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3365:          "{date}",
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3366:          
DateFormat('dd-MM-yyyy').format(orderModel.createdAt.toDate()),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3367:        );
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3368:        newString = newString.replaceAll(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3369:          "{address}",
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3370:          orderModel.address!.getFullAddress(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3503:  //     // Remove null values so we only update non-null 
fields
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3504:  //     final Map<String, dynamic> updateData = {};
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3505:  //     data.forEach((key, value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3506:  //       if (value != null) {
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3507:  //         updateData[key] = value;
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3508:  //       }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3509:  //     });
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3510:  //
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3511:  //     if (updateData.isNotEmpty) {
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3512:  //       await docRef.set(updateData, SetOptions(merge: 
true));
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3513:  //       print("Order ${orderModel.id} updated 
dynamically: $updateData");
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3514:  //     } else {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3515:  //       print("No fields to update for order 
${orderModel.id}");
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3516:  //     }
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3517:  //   } catch (e) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3528:  //       .where("sectionId", isEqualTo: 
Constant.sectionConstantModel!.id.toString())
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3529:  //       .orderBy("createdAt", descending: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3530:  //       .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3531:  //       .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3532:  //         for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3533:  //           OnProviderOrderModel orderModel = 
OnProviderOrderModel.fromJson(element.data());
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3547:        )
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3548:        .orderBy("createdAt", descending: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3549:        .snapshots()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3550:        .map(
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3551:          (snapshot) =>
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3552:              snapshot.docs
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3752:        .where('sectionId', isEqualTo: 
Constant.sectionConstantModel!.id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3753:        .where("isActive", isEqualTo: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3754:        .get()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3755:        .then((value) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3756:          for (var element in value.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3757:            try {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3801:        .where('sectionId', isEqualTo: 
Constant.sectionConstantModel!.id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3802:        .orderBy('createdAt', descending: true)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3803:        .snapshots()
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3804:        .map((query) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3805:          List<RentalOrderModel> ordersList = [];
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3806:          for (var element in query.docs) {
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3955:        'id': docRef.id,
> apps\customer_v6_7\lib\service\fire_store_utils.dart:3956:        'createdAt': Timestamp.now(),
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3957:        'description': description,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3958:        'driverId': driverID,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3959:        'driverName': driverName,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:3960:        'orderId': orderId,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:4052:            .where('user_id', isEqualTo: userId)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:4053:            .where("section_id", isEqualTo: 
Constant.sectionConstantModel!.id)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:4054:            .get();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:4055:
  apps\customer_v6_7\lib\service\fire_store_utils.dart:4056:    await Future.forEach(favourites.docs, (
  apps\customer_v6_7\lib\service\fire_store_utils.dart:4057:      QueryDocumentSnapshot<Map<String, dynamic>> document,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:4079:            .where('id', isEqualTo: model.service_id)
> apps\customer_v6_7\lib\service\fire_store_utils.dart:4080:            .where('sectionId', isEqualTo: 
model.section_id)
  apps\customer_v6_7\lib\service\fire_store_utils.dart:4081:            .get();
  apps\customer_v6_7\lib\service\fire_store_utils.dart:4082:    await Future.forEach(reviewQuery.docs, (
  apps\customer_v6_7\lib\service\fire_store_utils.dart:4083:      QueryDocumentSnapshot<Map<String, dynamic>> document,
  apps\customer_v6_7\lib\service\fire_store_utils.dart:4084:    ) {
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:59:  void animateSlider() {
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:60:    if (vendorModel.value.photos != null &&
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:61:        
vendorModel.value.photos!.isNotEmpty) {
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:62:      step47gSliderTimer?.cancel();
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:63:      step47gSliderTimer = 
Timer.periodic(const Duration(seconds: 2), (
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:64:        Timer timer,
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:65:      ) {
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:66:        if (currentPage < 
vendorModel.value.photos!.length - 1) {
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:67:          currentPage++;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:68:        } else {
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:69:          currentPage.value = 0;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:70:        }
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:108:      print(
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:109:        
"STEP47D_RESTAURANT_DETAIL_VENDOR_ARG: id=${vendorModel.value.id} title=${vendorModel.value.title} 
zone=${vendorModel.value.zoneId}",
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:110:      );
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:111:    }
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:112:    animateSlider();
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:113:    statusCheck();
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:165:      await 
FireStoreUtils.getVendorCategoryById(
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:166:        element.categoryID.toString(),
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:167:      ).then((value) {
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:168:        if (value != null) {
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:169:          vendorCategoryList.add(value);
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:170:        }
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:229:  ) {
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:230:    final productCategoryId = 
normalizeCategoryKey(product.categoryID);
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:231:    final vendorCategoryId = 
normalizeCategoryKey(vendorCategoryModel.id);
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:232:
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:233:    if (productCategoryId.isEmpty || 
vendorCategoryId.isEmpty) {
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:234:      return false;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:235:    }
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:236:
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:237:    return productCategoryId == 
vendorCategoryId;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:238:  }
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:239:
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:240:  List<ProductModel> 
getProductsForCategory(
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:241:    VendorCategoryModel 
vendorCategoryModel,
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:430:      cartProductModel.name = 
productModel.name!;
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:431:      cartProductModel.photo = 
productModel.photo!;
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:432:      cartProductModel.categoryId = 
productModel.categoryID!;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:433:      cartProductModel.price = price;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:434:      cartProductModel.discountPrice = 
discountPrice;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:435:      cartProductModel.vendorID = 
vendorModel.value.id;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:436:      cartProductModel.quantity = quantity;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:454:      cartProductModel.name = 
productModel.name!;
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:455:      cartProductModel.photo = 
productModel.photo!;
> apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:456:      cartProductModel.categoryId = 
productModel.categoryID!;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:457:      cartProductModel.price = price;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:458:      cartProductModel.discountPrice = 
discountPrice;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:459:      cartProductModel.vendorID = 
vendorModel.value.id;
  apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:460:      cartProductModel.quantity = quantity;
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:9:  RxList<VendorModel> vendorList = 
<VendorModel>[].obs;
> apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:10:  RxList<VendorModel> vendorSearchList = 
<VendorModel>[].obs;
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:11:
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:12:  RxString title = "Stores".obs;
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:13:
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:14:  RxList<FavouriteModel> favouriteList = 
<FavouriteModel>[].obs;
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:26:      vendorList.value = 
argumentData['vendorList'];
> apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:27:      vendorSearchList.value = 
argumentData['vendorList'];
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:28:      title.value = argumentData['title'] ?? 
"Stores";
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:29:    }
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:30:
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:31:    await getFavouriteRestaurant();
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:45:  void dispose() {
> apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:46:    vendorSearchList.clear();
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:47:    super.dispose();
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:48:  }
  apps\customer_v6_7\lib\controllers\restaurant_list_controller.dart:49:}
  apps\customer_v6_7\lib\controllers\service_list_controller.dart:42:
> apps\customer_v6_7\lib\controllers\service_list_controller.dart:43:    currencyData.value = currency ?? 
CurrencyModel(id: "", code: "USD", decimal: 2, isactive: true, name: "US Dollar", symbol: "\$", symbolatright: false);
  apps\customer_v6_7\lib\controllers\service_list_controller.dart:44:
  apps\customer_v6_7\lib\controllers\service_list_controller.dart:45:    // Load sections
  apps\customer_v6_7\lib\controllers\service_list_controller.dart:46:    List<SectionModel> sections = await 
FireStoreUtils.getSections();
  apps\customer_v6_7\lib\controllers\service_list_controller.dart:47:
  apps\customer_v6_7\lib\controllers\service_list_controller.dart:53:for (final s in sectionList) {
> apps\customer_v6_7\lib\controllers\service_list_controller.dart:54:  print("SERVICE_LIST_DEBUG_ITEM: id=${s.id} 
name=${s.name} type=${s.serviceTypeFlag} isActive=${s.isActive}");
  apps\customer_v6_7\lib\controllers\service_list_controller.dart:55:}
  apps\customer_v6_7\lib\controllers\service_list_controller.dart:56:// END TEMP DEBUG STEP35A
  apps\customer_v6_7\lib\controllers\service_list_controller.dart:57:await 
FireStoreUtils.getSectionBannerList().then((value) {
  apps\customer_v6_7\lib\controllers\service_list_controller.dart:58:      serviceListBanner.assignAll(value);



TEXT_END


## 3. Firebase Firestore Field Reality Scan
TEXT_START

### Collection: sections
DOC_COUNT_SAMPLED: 17

DOC: 6285dcf511651
FIELD | id | type=String | value=6285dcf511651
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Cosmetic

DOC: 6285dd3281531
FIELD | id | type=String | value=6285dd3281531
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Fashion

DOC: 6285dd7b50f32
FIELD | id | type=String | value=6285dd7b50f32
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Flowers

DOC: 6285ddbfd9598
FIELD | id | type=String | value=6285ddbfd9598
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Restaurants

DOC: 631852d1bc978
FIELD | id | type=String | value=631852d1bc978
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Cab Service

DOC: 6319dc53314ee
FIELD | id | type=String | value=6319dc53314ee
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Food Grocery

DOC: 632309c9d549e
FIELD | id | type=String | value=632309c9d549e
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Parcel Service

DOC: 63368fb2beabb
FIELD | id | type=String | value=63368fb2beabb
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Rental Service

DOC: custom_akap_ticket
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_akap_ticket
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=AKAP Ticket
FIELD | photo | type=string | value=
FIELD | title | type=String | value=AKAP Ticket
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831273,"_nanoseconds":997000000}

DOC: custom_document_service
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_document_service
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Document Service
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Document Service
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831269,"_nanoseconds":875000000}

DOC: custom_emergency_help
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_emergency_help
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Emergency Help
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Emergency Help
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831283,"_nanoseconds":601000000}

DOC: custom_hotel_homestay
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_hotel_homestay
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Hotel / Homestay
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Hotel / Homestay
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831271,"_nanoseconds":853000000}

DOC: custom_housemaid_art
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_housemaid_art
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Housemaid / ART
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Housemaid / ART
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831278,"_nanoseconds":312000000}

DOC: custom_laundry_service
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_laundry_service
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Laundry Service
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Laundry Service
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831267,"_nanoseconds":494000000}

DOC: custom_motor_delivery
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_motor_delivery
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Motor Delivery
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Motor Delivery
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831281,"_nanoseconds":258000000}

DOC: custom_technician_service
FIELD | createdAt | type=Timestamp | value={"_seconds":1782694492,"_nanoseconds":371000000}
FIELD | id | type=String | value=custom_technician_service
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Technician Service
FIELD | photo | type=string | value=
FIELD | title | type=String | value=Technician Service
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782831276,"_nanoseconds":119000000}

DOC: yJTddzJUxP3cOU5DpJ10
FIELD | id | type=String | value=yJTddzJUxP3cOU5DpJ10
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Home/On Demand Service
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782670577,"_nanoseconds":148000000}

FIELD_TYPE_SUMMARY:
active => {"Boolean":17}
adminCommision => {"Object":1}
cab_service_template => {"string":8,"String":1}
color => {"String":17}
commissionAmount => {"string":5,"Number":3}
commissionType => {"string":5,"String":3}
createdAt => {"Timestamp":8}
deliveryCharge => {"Object":4}
delivery_charge => {"string":8,"String":1}
dine_in_active => {"boolean":16,"Boolean":1}
enable => {"Boolean":8}
enableCashbackOffer => {"boolean":1}
id => {"String":17}
image => {"string":8}
isActive => {"Boolean":17}
isEnableCommission => {"boolean":5,"Boolean":3}
is_product_details => {"boolean":1}
name => {"String":17}
nearByRadius => {"Number":1}
order => {"Number":17}
packagingChargeEnable => {"boolean":1}
photo => {"string":8}
platformFee => {"Object":9}
referralAmount => {"String":9}
rideType => {"string":16,"String":1}
ride_type => {"string":9}
sectionImage => {"String":9,"string":8}
serviceType => {"String":9}
serviceTypeFlag => {"String":17}
tax_active => {"Boolean":15,"boolean":2}
tax_amount => {"String":8}
tax_lable => {"String":7,"string":1}
tax_type => {"String":7,"string":1}
theme => {"null":1}
title => {"String":8}
updatedAt => {"Timestamp":9}

### Collection: vendors
DOC_COUNT_SAMPLED: 60

DOC: 05vPfo6g0mVhZZVlz6mB
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.005024588787297,"_longitude":72.53156829625368}
FIELD | createdAt | type=Timestamp | value={"_seconds":1685707781,"_nanoseconds":961962000}
FIELD | id | type=String | value=05vPfo6g0mVhZZVlz6mB
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=23.005024588787297
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=72.53156829625368
FIELD | name | type=String | value=eFashion
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fe52b7f79-a6f4-4045-85d0-908ace23cac6.png?alt=media&token=46df23aa-0bc7-439b-9883-30c172e416d9
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=eFashion
FIELD | vendorName | type=String | value=eFashion
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 07RFZCxogqVjkbVTt9HE
FIELD | categoryID | type=String | value=zzq4LngLd8PWzYJfsvnjfV
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.2497683,"_longitude":69.6682639}
FIELD | createdAt | type=Timestamp | value={"_seconds":1686552239,"_nanoseconds":676000000}
FIELD | id | type=String | value=07RFZCxogqVjkbVTt9HE
FIELD | latitude | type=Number | value=23.2497683
FIELD | longitude | type=Number | value=69.6682639
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgrocery1_1680094934575.jpg?alt=media&token=4bab7658-437d-4acf-a798-861955cdfe8f
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgrocery2_1680094955582.jpg?alt=media&token=6c4c6f69-826e-408b-bfc0-9d84f1a7bf3b","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgrocery4_1680095014888.png?alt=media&token=c1fb343a-6ed1-4164-b644-109abd8062d6","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgrocery3_1680095037328.jpg?alt=media&token=12e61dec-fe90-4237-a196-f375247d5e1a"]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Food Grocery store

DOC: 0GU3JWeAcNatUktBt94j
FIELD | categoryID | type=String | value=63a2b7478c6a5
FIELD | coordinates | type=GeoPoint | value={"_latitude":4.26379,"_longitude":118.01053}
FIELD | createdAt | type=Timestamp | value={"_seconds":1685384026,"_nanoseconds":952000000}
FIELD | id | type=String | value=0GU3JWeAcNatUktBt94j
FIELD | latitude | type=Number | value=4.26379
FIELD | longitude | type=Number | value=118.01053
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Unais 

DOC: 0hB8mx1z1DeNR9CAzXfh
FIELD | categoryID | type=String | value=62ecef57887cb
FIELD | coordinates | type=GeoPoint | value={"_latitude":13.989886,"_longitude":-89.555165}
FIELD | createdAt | type=Timestamp | value={"_seconds":1684982769,"_nanoseconds":566000000}
FIELD | id | type=String | value=0hB8mx1z1DeNR9CAzXfh
FIELD | latitude | type=Number | value=13.989886
FIELD | longitude | type=Number | value=-89.555165
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F7aadf5e4-7e9c-4234-a104-324653236e75.png?alt=media&token=a8b9286c-46dc-43ea-9cbf-bb9c4d101ba1
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=LA Parrilla

DOC: 0mkKJ5MWOLiGIGrMnV4c
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":4.476583,"_longitude":97.9558996}
FIELD | createdAt | type=Timestamp | value={"_seconds":1681708811,"_nanoseconds":350000000}
FIELD | id | type=String | value=0mkKJ5MWOLiGIGrMnV4c
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=4.476583
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=97.9558996
FIELD | name | type=String | value=Rumah Mode Syar"i
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-04-17%20at%2011_1681707124603.48?alt=media&token=7aa7a8c9-9bd9-4a4d-babe-dd5e9e97c1f8
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-04-17%20at%2011_1681707758317.47?alt=media&token=bbb0cbb0-8f27-4792-badf-9873c7fd6787"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Rumah Mode Syar"i
FIELD | vendorName | type=String | value=Rumah Mode Syar"i
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 0pEI9Y7pV5lLoW7fmiBS
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.4567,"_longitude":73.2345}
FIELD | createdAt | type=Timestamp | value={"_seconds":1693217900,"_nanoseconds":981000000}
FIELD | id | type=String | value=0pEI9Y7pV5lLoW7fmiBS
FIELD | latitude | type=Number | value=22.4567
FIELD | longitude | type=Number | value=73.2345
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=ben's store

DOC: 0urLW8W7TVh1huI55egm
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":-20.659599,"_longitude":-43.785542}
FIELD | createdAt | type=Timestamp | value={"_seconds":1684502732,"_nanoseconds":547000000}
FIELD | id | type=String | value=0urLW8W7TVh1huI55egm
FIELD | latitude | type=Number | value=-20.659599
FIELD | longitude | type=Number | value=-43.785542
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=modelo Teste

DOC: 10KPhdPgfOUpkHtzT3oS
FIELD | categoryID | type=String | value=88pNxhccktxkSgIndZ8e
FIELD | coordinates | type=GeoPoint | value={"_latitude":4.721763328129186,"_longitude":9.721896368194432}
FIELD | createdAt | type=Timestamp | value={"_seconds":1680205331,"_nanoseconds":456000000}
FIELD | id | type=String | value=10KPhdPgfOUpkHtzT3oS
FIELD | latitude | type=Number | value=4.721763328129186
FIELD | longitude | type=Number | value=9.721896368194432
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F1e2106d6-b7ca-49f2-86aa-45939a9c9ee4.png?alt=media&token=b2e0a021-4b40-4497-b8f8-d578cdcd7b79
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Simo Market

DOC: 1BlB62hfbg7mX0MTIUeo
FIELD | categoryID | type=String | value=64e2e7735131c
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.022505,"_longitude":72.571365}
FIELD | createdAt | type=Timestamp | value={"_seconds":1692593620,"_nanoseconds":615000000}
FIELD | id | type=String | value=1BlB62hfbg7mX0MTIUeo
FIELD | latitude | type=Number | value=23.022505
FIELD | longitude | type=Number | value=72.571365
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fth%20(2)_1692592242822.jpg?alt=media&token=03bc2b9e-9943-4d38-b0c4-875b39ba81e9
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=D-Mart

DOC: 1ZrcQ4ysrrheSVguUkFF
FIELD | categoryID | type=String | value=62ecf0f1c144b
FIELD | coordinates | type=GeoPoint | value={"_latitude":50.86557203656718,"_longitude":4.341516879046489}
FIELD | createdAt | type=Timestamp | value={"_seconds":1687238307,"_nanoseconds":899856000}
FIELD | id | type=String | value=1ZrcQ4ysrrheSVguUkFF
FIELD | latitude | type=Number | value=50.86557203656718
FIELD | longitude | type=Number | value=4.341516879046489
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F775a8aa7-cfa6-4a8f-a13e-68448428f764.png?alt=media&token=91d81744-5829-4250-a42c-59aed6e946d4
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Koobilo Eats

DOC: 1vMlKPiniUrzybKkWiS1
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | coordinates | type=GeoPoint | value={"_latitude":24.08939540142796,"_longitude":32.899980805814266}
FIELD | createdAt | type=Timestamp | value={"_seconds":1679900463,"_nanoseconds":641000000}
FIELD | id | type=String | value=1vMlKPiniUrzybKkWiS1
FIELD | latitude | type=Number | value=24.08939540142796
FIELD | longitude | type=Number | value=32.899980805814266
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fe457b468-be6c-4b0b-8934-2ac152b9ebfa.png?alt=media&token=a5a7cae1-1442-42de-aac6-8d30ad47af39
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fburger1_1679900366923.jpg?alt=media&token=6cf46f93-2122-400d-a73a-c0da45c2dae1","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Flarge_R_1679900385492.png?alt=media&token=537d112e-3c17-4c96-b4e4-b03873d453e3","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fsmall_size_1679900409913.png?alt=media&token=41addc04-45e9-4ce5-9779-903f88d3ba71","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FM_size_1679900426769.png?alt=media&token=c54df79a-e176-4306-a721-dc04c0da6f5a","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FMedium_R_1679900449430.jpg?alt=media&token=3447b3be-e25e-4461-ab6f-2f8526de30f3"]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=ahmed store

DOC: 21MCCA6V0HwY57Q6JZkK
FIELD | categoryID | type=String | value=62ecef57887cb
FIELD | coordinates | type=GeoPoint | value={"_latitude":-1.6832573664523662,"_longitude":29.22828041017055}
FIELD | createdAt | type=Timestamp | value={"_seconds":1675701969,"_nanoseconds":420000000}
FIELD | id | type=String | value=21MCCA6V0HwY57Q6JZkK
FIELD | latitude | type=Number | value=-1.6832573664523662
FIELD | longitude | type=Number | value=29.22828041017055
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdownload_1675701683635.jpeg?alt=media&token=bbf0f661-86af-47c9-8295-96008c5edf1b
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Jay Restaurant

DOC: 22IVF6moR0lkuE076H2i
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":26.9123284,"_longitude":75.7241379}
FIELD | createdAt | type=Timestamp | value={"_seconds":1687501817,"_nanoseconds":161000000}
FIELD | id | type=String | value=22IVF6moR0lkuE076H2i
FIELD | latitude | type=Number | value=26.9123284
FIELD | longitude | type=Number | value=75.7241379
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FScreenshot%20(68)_1687439833967.png?alt=media&token=0229908b-bc2a-44e7-8268-33ecb6c40725
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=bawarchi

DOC: 2eo51PsBz8HvNlki6yFL
FIELD | categoryID | type=String | value=62ecff6b9816b
FIELD | coordinates | type=GeoPoint | value={"_latitude":21.204153889549662,"_longitude":72.80387956649065}
FIELD | createdAt | type=Timestamp | value={"_seconds":1669283238,"_nanoseconds":821000000}
FIELD | id | type=String | value=2eo51PsBz8HvNlki6yFL
FIELD | latitude | type=Number | value=21.204153889549662
FIELD | longitude | type=Number | value=72.80387956649065
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fcfa325c4-e3f4-45b7-b767-f582b0cac4ec.png?alt=media&token=b74ff4bd-5df0-4713-b9e7-a1c9e51c1817
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=Flower Basket store

DOC: 2gklzqCbIFOPJm3EwEvt
FIELD | categoryID | type=String | value=63a2b7478c6a5
FIELD | coordinates | type=GeoPoint | value={"_latitude":35.868738,"_longitude":-86.3619641}
FIELD | createdAt | type=Timestamp | value={"_seconds":1689319846,"_nanoseconds":540776000}
FIELD | id | type=String | value=2gklzqCbIFOPJm3EwEvt
FIELD | latitude | type=Number | value=35.868738
FIELD | longitude | type=Number | value=-86.3619641
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F5fcf8fb3-e680-47ea-80ee-ce40dab48b83.png?alt=media&token=25cc44be-b411-4454-ae1e-84a2ac8f3509
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=soulking

DOC: 2jnVAu4xy28EdPy9E3z8
FIELD | categoryID | type=String | value=62ecff6a8c983
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.991039737280406,"_longitude":72.62959130108356}
FIELD | createdAt | type=Timestamp | value={"_seconds":1690193032,"_nanoseconds":167309000}
FIELD | id | type=String | value=2jnVAu4xy28EdPy9E3z8
FIELD | latitude | type=Number | value=22.991039737280406
FIELD | longitude | type=Number | value=72.62959130108356
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fe2cd692c-cbd1-498e-937e-386de085aa9f.png?alt=media&token=430fcc3a-7e8f-4d52-b8ea-a85ee47efd20
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=testflower

DOC: 2q54LGrRoKv43pS3rj85
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":13,"_longitude":78.943214}
FIELD | createdAt | type=Timestamp | value={"_seconds":1690819968,"_nanoseconds":457000000}
FIELD | id | type=String | value=2q54LGrRoKv43pS3rj85
FIELD | latitude | type=Number | value=13
FIELD | longitude | type=Number | value=78.943214
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=test123

DOC: 3HoJiFJNRQsTyBchMdxH
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":21.238271177388512,"_longitude":72.87064779549837}
FIELD | createdAt | type=Timestamp | value={"_seconds":1683706258,"_nanoseconds":303364000}
FIELD | id | type=String | value=3HoJiFJNRQsTyBchMdxH
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=21.238271177388512
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=72.87064779549837
FIELD | name | type=String | value=Demo
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F3369a540-21c7-4c33-a7ff-fb8179fc6dc4.png?alt=media&token=dc5a773a-b6fc-4d03-83d0-d6f44807a6a7
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Demo
FIELD | vendorName | type=String | value=Demo
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 4OND69A1zWWLiuzQVSXU
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.9898261444636,"_longitude":72.62929927557707}
FIELD | createdAt | type=Timestamp | value={"_seconds":1691991954,"_nanoseconds":438000000}
FIELD | id | type=String | value=4OND69A1zWWLiuzQVSXU
FIELD | latitude | type=Number | value=22.9898261444636
FIELD | longitude | type=Number | value=72.62929927557707
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F2449db75-a49b-49e7-a4a6-47b907dd0bf7.png?alt=media&token=647bbff7-60a9-4b17-957e-dcad270ef8d8
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=testing

DOC: 4PGUc3sU4uH1DcfDto0I
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.982530468708102,"_longitude":72.62215320020914}
FIELD | createdAt | type=Timestamp | value={"_seconds":1691991919,"_nanoseconds":226000000}
FIELD | id | type=String | value=4PGUc3sU4uH1DcfDto0I
FIELD | latitude | type=Number | value=22.982530468708102
FIELD | longitude | type=Number | value=72.62215320020914
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fd38344f5-1672-4410-80f1-c658e8df844f.png?alt=media&token=30dfb609-b08a-4b97-a04e-bf351879cf40
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=teststore

DOC: 4bZg2TXp193BLBY214kp
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.245654990328962,"_longitude":69.65947464108467}
FIELD | createdAt | type=Timestamp | value={"_seconds":1675084546,"_nanoseconds":269000000}
FIELD | id | type=String | value=4bZg2TXp193BLBY214kp
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=23.245654990328962
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=69.65947464108467
FIELD | name | type=String | value=My Fashion 
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F51ecc4c3-81cf-4fae-bdbf-33eca64b3bbd.png?alt=media&token=dd93aab9-af9e-4be2-99de-11ec80fb09c3
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=My Fashion 
FIELD | vendorName | type=String | value=My Fashion 
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 4ihNlSh19eOiOO4211lf
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | coordinates | type=GeoPoint | value={"_latitude":29.8464876,"_longitude":31.3378551}
FIELD | createdAt | type=Timestamp | value={"_seconds":1677935687,"_nanoseconds":791222000}
FIELD | id | type=String | value=4ihNlSh19eOiOO4211lf
FIELD | latitude | type=Number | value=29.8464876
FIELD | longitude | type=Number | value=31.3378551
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fb8e7ec32-4433-4935-b64d-344f2b387c27.png?alt=media&token=4e25f980-b6fa-4b66-8965-cd45f4cf4ed3
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Volante Gourmet

DOC: 4sxXnNyfXxYFzQCC7Fxr
FIELD | categoryID | type=String | value=636e30433dd7e
FIELD | coordinates | type=GeoPoint | value={"_latitude":3.5236855,"_longitude":98.70092032}
FIELD | createdAt | type=Timestamp | value={"_seconds":1677131126,"_nanoseconds":58000000}
FIELD | id | type=String | value=4sxXnNyfXxYFzQCC7Fxr
FIELD | latitude | type=Number | value=3.5236855
FIELD | longitude | type=Number | value=98.70092032
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677127998582.43?alt=media&token=da2a64d8-e82c-4ada-a393-4863bac957c8
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128044563.43?alt=media&token=d33fee57-07a1-43a4-b1ff-04d931289299","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128052608.43?alt=media&token=12b6359e-a701-4ef4-bcf5-ce23d1fb699f","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128064951.06?alt=media&token=35b3afb7-48d3-4103-a074-797091a1e993","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128078475.06?alt=media&token=7817c3ff-a4aa-4873-b0a5-adf1594a7c66","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128087281.43?alt=media&token=21dbe17a-d2ac-420e-ba1d-4cf31224756b","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128091834.43?alt=media&token=e2172fef-33bc-41e2-ab6a-5f951d2281eb","https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2FWhatsApp%20Image%202023-02-23%20at%2011_1677128110756.43?alt=media&token=626a9b48-4e80-4403-90c9-c70b3b8cf153"]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Violin Es Krim Potong Turki

DOC: 55Y7n2RQiVTxdIgoFOfU
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.022505,"_longitude":72.5713622}
FIELD | createdAt | type=Timestamp | value={"_seconds":1680130140,"_nanoseconds":852000000}
FIELD | id | type=String | value=55Y7n2RQiVTxdIgoFOfU
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=23.022505
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=72.5713622
FIELD | name | type=String | value=Clothes
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fb5b6.jpg?alt=media&token=601f72f5-5ad9-43de-aaba-8ba5c9fe916e
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fa36da850-7c3f-11ed-abb9-97f67b5fc304_1677681172840.png?alt=media&token=e41ee0b5-fb4d-41db-9d94-dea5c35d7407","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F71esLiAvuWL_1677681179293._SL1500_?alt=media&token=9933a007-6676-45fc-921f-78e9de5834aa","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fa02470c0-7c3f-11ed-9925-23a921b85fda_1677681187570.png?alt=media&token=f5ba04ed-5adc-433f-acd5-3cab73ab6d19","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F714%2BKCl7T9L_1677681198026._SY679_?alt=media&token=7fed2e4d-4412-4072-8f2f-0cf92dee2732"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Clothes
FIELD | vendorName | type=String | value=Clothes
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 5K6Cs6wJONEKsEgNIx50
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.070516163837794,"_longitude":70.13196151703596}
FIELD | createdAt | type=Timestamp | value={"_seconds":1669283239,"_nanoseconds":216000000}
FIELD | id | type=String | value=5K6Cs6wJONEKsEgNIx50
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=23.070516163837794
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=70.13196151703596
FIELD | name | type=String | value=Rich look
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F784ca1d5-17e2-43a1-929d-a64b8e2510e0.png?alt=media&token=993c4681-8d0f-483b-b425-d11f26bbdb4c
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Rich look
FIELD | vendorName | type=String | value=Rich look
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 5cptMLjjMpHNYYuNL0Vm
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":56,"_longitude":51}
FIELD | createdAt | type=Timestamp | value={"_seconds":1687439744,"_nanoseconds":956000000}
FIELD | id | type=String | value=5cptMLjjMpHNYYuNL0Vm
FIELD | latitude | type=Number | value=56
FIELD | longitude | type=Number | value=51
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FScreenshot%20(68)_1687439739531.png?alt=media&token=d814c61d-bf3b-4222-84d2-c6f1eba9be34
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=dafda

DOC: 5triGkpNJkWLKUT1Afyi
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":25.74486,"_longitude":89.275589}
FIELD | createdAt | type=Timestamp | value={"_seconds":1693052645,"_nanoseconds":214446000}
FIELD | id | type=String | value=5triGkpNJkWLKUT1Afyi
FIELD | latitude | type=Number | value=25.74486
FIELD | longitude | type=Number | value=89.275589
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F852ea29f-9af1-427c-bbf4-f0eca87f1526.png?alt=media&token=4509a55a-7629-4790-8e3c-cff846266d69
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Restaurante El Portal

DOC: 5v22ComSYa2BwfAnsOQS
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":26.9196,"_longitude":75.7878}
FIELD | createdAt | type=Timestamp | value={"_seconds":1687520405,"_nanoseconds":651000000}
FIELD | id | type=String | value=5v22ComSYa2BwfAnsOQS
FIELD | latitude | type=Number | value=26.9196
FIELD | longitude | type=Number | value=75.7878
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FScreenshot%20(68)_1687520279865.png?alt=media&token=3bbef018-d81c-492c-9849-8d45af61c788
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FScreenshot%20(68)_1687520304599.png?alt=media&token=6dceca80-64a3-4e5b-8fb5-36e5b56bd414"]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=swad mahal

DOC: 5y18JEaVzjJS3V94RBvX
FIELD | categoryID | type=String | value=63a2b7478c6a5
FIELD | coordinates | type=GeoPoint | value={"_latitude":26.2820038,"_longitude":50.2113469}
FIELD | createdAt | type=Timestamp | value={"_seconds":1686314109,"_nanoseconds":897401000}
FIELD | id | type=String | value=5y18JEaVzjJS3V94RBvX
FIELD | latitude | type=Number | value=26.2820038
FIELD | longitude | type=Number | value=50.2113469
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F2304aa7b-e0c9-48a2-b816-6dd0883f9f69.png?alt=media&token=d736ab77-39ff-444c-b74a-5c72c8bc9a9d
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=الربيعي

DOC: 68LwNdERg7wVG04r9Qd4
FIELD | categoryID | type=String | value=62ecf35007e34
FIELD | coordinates | type=GeoPoint | value={"_latitude":26.1869774860655,"_longitude":73.70809514075518}
FIELD | createdAt | type=Timestamp | value={"_seconds":1690819396,"_nanoseconds":348000000}
FIELD | id | type=String | value=68LwNdERg7wVG04r9Qd4
FIELD | latitude | type=Number | value=26.1869774860655
FIELD | longitude | type=Number | value=73.70809514075518
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fd49d991a-156a-4586-8924-7361d2aac40b.png?alt=media&token=19cf6bb8-0173-4f94-96e0-f9140fe9bf01
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=test

DOC: 6SWKA69vczMu4ikTyQBT
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":3,"_longitude":2}
FIELD | createdAt | type=Timestamp | value={"_seconds":1685431867,"_nanoseconds":369000000}
FIELD | id | type=String | value=6SWKA69vczMu4ikTyQBT
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=3
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=2
FIELD | name | type=String | value=WEDRR
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=WEDRR
FIELD | vendorName | type=String | value=WEDRR
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 6dH64iTY9lDovNHTSQqx
FIELD | categoryID | type=String | value=62ecef57887cb
FIELD | coordinates | type=GeoPoint | value={"_latitude":19.3878558,"_longitude":-99.1565188}
FIELD | createdAt | type=Timestamp | value={"_seconds":1688749784,"_nanoseconds":938822000}
FIELD | id | type=String | value=6dH64iTY9lDovNHTSQqx
FIELD | latitude | type=Number | value=19.3878558
FIELD | longitude | type=Number | value=-99.1565188
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ffc53560a-4590-43a4-9564-7ef9b8d22d3f.png?alt=media&token=c91b0f07-6009-41c9-bb31-a3a9dce91506
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=coño

DOC: 7ABZwOiL24fYBiZAgqSr
FIELD | categoryID | type=String | value=62ecef57887cb
FIELD | coordinates | type=GeoPoint | value={"_latitude":10.98766,"_longitude":17.8766}
FIELD | createdAt | type=Timestamp | value={"_seconds":1690561032,"_nanoseconds":442000000}
FIELD | id | type=String | value=7ABZwOiL24fYBiZAgqSr
FIELD | latitude | type=Number | value=10.98766
FIELD | longitude | type=Number | value=17.8766
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=hhh

DOC: 7CE6py9E6oKXS58aEik1
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | coordinates | type=GeoPoint | value={"_latitude":6.1517222,"_longitude":1.2332866}
FIELD | createdAt | type=Timestamp | value={"_seconds":1674647940,"_nanoseconds":317323000}
FIELD | id | type=String | value=7CE6py9E6oKXS58aEik1
FIELD | latitude | type=Number | value=6.1517222
FIELD | longitude | type=Number | value=1.2332866
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F635f9f6c-4c02-47af-886d-113ea52359ec.png?alt=media&token=acb7c46a-15f9-4455-910b-57179c4e5203
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=fresh food 

DOC: 7FYlQ4J3oYnFCvA9Anqi
FIELD | categoryID | type=String | value=62dc0673d235b
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.2292212,"_longitude":72.5482722}
FIELD | createdAt | type=Timestamp | value={"_seconds":1669283239,"_nanoseconds":280000000}
FIELD | id | type=String | value=7FYlQ4J3oYnFCvA9Anqi
FIELD | latitude | type=Number | value=23.2292212
FIELD | longitude | type=Number | value=72.5482722
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fas5.jpg?alt=media&token=1c68fcc7-a2dc-4a70-acd1-82f23e7d8d9f
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285da5ec476a
FIELD | title | type=String | value=The Beer Store

DOC: 7wVLUlMhrqIReAvbjqkZ
FIELD | categoryID | type=string | value=
FIELD | createdAt | type=Timestamp | value={"_seconds":1686438997,"_nanoseconds":488000000}
FIELD | id | type=String | value=7wVLUlMhrqIReAvbjqkZ
FIELD | latitude | type=string | value=
FIELD | longitude | type=string | value=
FIELD | photo | type=string | value=
FIELD | photos | type=string | value=
FIELD | section_id | type=string | value=
FIELD | title | type=string | value=

DOC: 87LYnSVsmQWThHLGOa7n
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":11,"_longitude":11}
FIELD | createdAt | type=Timestamp | value={"_seconds":1689103825,"_nanoseconds":97000000}
FIELD | id | type=String | value=87LYnSVsmQWThHLGOa7n
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=11
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=11
FIELD | name | type=String | value=nody
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=nody
FIELD | vendorName | type=String | value=nody
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 8HHqBlRHf6ThaWoSleFY
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.987776098459417,"_longitude":72.62620735913515}
FIELD | createdAt | type=Timestamp | value={"_seconds":1691387314,"_nanoseconds":598720000}
FIELD | id | type=String | value=8HHqBlRHf6ThaWoSleFY
FIELD | latitude | type=Number | value=22.987776098459417
FIELD | longitude | type=Number | value=72.62620735913515
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F8fd428f3-72e0-42eb-9264-bfd331b0dc56.png?alt=media&token=656741d5-8b24-43aa-865c-08387be35eb9
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=testing1

DOC: 8akcNIacIF7Nt4zLARpl
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.2371276503805,"_longitude":69.70752976834774}
FIELD | createdAt | type=Timestamp | value={"_seconds":1671449886,"_nanoseconds":787873000}
FIELD | id | type=String | value=8akcNIacIF7Nt4zLARpl
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=23.2371276503805
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=69.70752976834774
FIELD | name | type=String | value=FASHION STREET
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F643d1631-8e14-407c-907b-27ef1d25a943.png?alt=media&token=192fd4ab-2e44-4003-87cb-a526de11defe
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=FASHION STREET
FIELD | vendorName | type=String | value=FASHION STREET
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 8pPJpkZlhaYUkxvUAu2P
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.02,"_longitude":72.57}
FIELD | createdAt | type=Timestamp | value={"_seconds":1685607258,"_nanoseconds":311000000}
FIELD | id | type=String | value=8pPJpkZlhaYUkxvUAu2P
FIELD | latitude | type=Number | value=23.02
FIELD | longitude | type=Number | value=72.57
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=BStore

DOC: 959j8oMcvCHqnpoD7HqJ
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":3,"_longitude":180}
FIELD | createdAt | type=Timestamp | value={"_seconds":1680946074,"_nanoseconds":449000000}
FIELD | id | type=String | value=959j8oMcvCHqnpoD7HqJ
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=3
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=180
FIELD | name | type=String | value=Ti Soft
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fpeople-collaborating-with-tech-_1680945897278.png?alt=media&token=33c33d57-2de1-4ad2-bcff-b3d73b720f5f
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Ti Soft
FIELD | vendorName | type=String | value=Ti Soft
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: 9MJlVs7xSeA92ODFNNtr
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.991064737424697,"_longitude":72.62960102409124}
FIELD | createdAt | type=Timestamp | value={"_seconds":1692858606,"_nanoseconds":218339000}
FIELD | id | type=String | value=9MJlVs7xSeA92ODFNNtr
FIELD | latitude | type=Number | value=22.991064737424697
FIELD | longitude | type=Number | value=72.62960102409124
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F9e584189-8d46-47ea-b063-8c1ddc4e1d9a.png?alt=media&token=e3e25be3-3597-4344-a5d1-84f71f6784fc
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=test

DOC: 9TDTZJ8wxXAyLdwUNiua
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.59833412239928,"_longitude":72.38701533526181}
FIELD | createdAt | type=Timestamp | value={"_seconds":1671795568,"_nanoseconds":152000000}
FIELD | id | type=String | value=9TDTZJ8wxXAyLdwUNiua
FIELD | latitude | type=Number | value=23.59833412239928
FIELD | longitude | type=Number | value=72.38701533526181
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F0c907b2b-2f0d-4d05-b5f4-11f2574b9428.png?alt=media&token=589ccdae-3b33-49f7-b69f-d00564b15935
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Food store

DOC: 9UACE5mBsbyzlQ42fIHc
FIELD | categoryID | type=String | value=62ecf81d6e41b
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.2950125,"_longitude":70.8107031}
FIELD | createdAt | type=Timestamp | value={"_seconds":1669283239,"_nanoseconds":454000000}
FIELD | id | type=String | value=9UACE5mBsbyzlQ42fIHc
FIELD | latitude | type=Number | value=22.2950125
FIELD | longitude | type=Number | value=70.8107031
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fas2.png?alt=media&token=023c23ec-6f80-4218-a831-188b50d318e2
FIELD | photos | type=array | value=[]
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=A Wine Store

DOC: 9YVUzT5gYV1jtgegKHqd
FIELD | categoryID | type=String | value=62ecf81cedfd9
FIELD | coordinates | type=GeoPoint | value={"_latitude":-0.014213,"_longitude":109.513795}
FIELD | createdAt | type=Timestamp | value={"_seconds":1690421471,"_nanoseconds":478000000}
FIELD | id | type=String | value=9YVUzT5gYV1jtgegKHqd
FIELD | latitude | type=Number | value=-0.014213
FIELD | longitude | type=Number | value=109.513795
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Zul Amri Durrin Durrin Nafis

DOC: 9k2OzEnwi9sRGGM9eI1j
FIELD | categoryID | type=String | value=zGhiepckNthq5FILtM4Eb
FIELD | coordinates | type=GeoPoint | value={"_latitude":5.169754,"_longitude":97.133484}
FIELD | createdAt | type=Timestamp | value={"_seconds":1678371075,"_nanoseconds":579000000}
FIELD | id | type=String | value=9k2OzEnwi9sRGGM9eI1j
FIELD | latitude | type=Number | value=5.169754
FIELD | longitude | type=Number | value=97.133484
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=junior kopi

DOC: 9qkoARkRrtrxkHNNJ136
FIELD | categoryID | type=String | value=62ecf35007e34
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.28707683979903,"_longitude":70.81811182200909}
FIELD | createdAt | type=Timestamp | value={"_seconds":1669283239,"_nanoseconds":579000000}
FIELD | id | type=String | value=9qkoARkRrtrxkHNNJ136
FIELD | latitude | type=Number | value=22.28707683979903
FIELD | longitude | type=Number | value=70.81811182200909
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fhc1.jpg?alt=media&token=030be610-3edb-4281-9a85-97b5c2e53784
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=HairCare store

DOC: A51g8oAns0fr6Dn94SxH
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":7.9465,"_longitude":1.0232}
FIELD | createdAt | type=Timestamp | value={"_seconds":1688400426,"_nanoseconds":995000000}
FIELD | id | type=String | value=A51g8oAns0fr6Dn94SxH
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=7.9465
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=1.0232
FIELD | name | type=String | value=WIXWIXSTORE 
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fios1_1688285684194.png?alt=media&token=6cf04827-fc42-4902-a985-5aa2d3f557f2
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=WIXWIXSTORE 
FIELD | vendorName | type=String | value=WIXWIXSTORE 
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: AdTInXiANIlMiBe7cxPK
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | coordinates | type=GeoPoint | value={"_latitude":12.331017,"_longitude":78.3628041}
FIELD | createdAt | type=Timestamp | value={"_seconds":1677563301,"_nanoseconds":760000000}
FIELD | id | type=String | value=AdTInXiANIlMiBe7cxPK
FIELD | latitude | type=Number | value=12.331017
FIELD | longitude | type=Number | value=78.3628041
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F924898de-cd53-46a8-b92a-e4ef532a0c41.png?alt=media&token=d28ac891-4aa2-4e97-9ecc-8f8947d1f000
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=sea food

DOC: AteVKHSs46GhMvTDVPl0
FIELD | categoryID | type=String | value=64e2e7735131c
FIELD | coordinates | type=GeoPoint | value={"_latitude":31.61218,"_longitude":65.71222}
FIELD | createdAt | type=Timestamp | value={"_seconds":1692943889,"_nanoseconds":894000000}
FIELD | id | type=String | value=AteVKHSs46GhMvTDVPl0
FIELD | latitude | type=Number | value=31.61218
FIELD | longitude | type=Number | value=65.71222
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FDove_1692943714437.png?alt=media&token=985b951e-64ad-4a1d-9087-c4f4400aa3ee
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FHarsa%20Online_1692943724647.png?alt=media&token=c4f08245-bf59-4ccf-8565-d50ce68c0f06"]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=estore 

DOC: Ax8TpS20tFe2YHiSA9r1
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":23.255944065199863,"_longitude":69.67343352735043}
FIELD | createdAt | type=Timestamp | value={"_seconds":1693544017,"_nanoseconds":225883000}
FIELD | id | type=String | value=Ax8TpS20tFe2YHiSA9r1
FIELD | latitude | type=Number | value=23.255944065199863
FIELD | longitude | type=Number | value=69.67343352735043
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F9bd11580-d90b-493a-b1e9-41de847340e8.png?alt=media&token=fa4f8092-bc6c-47a0-b741-1e4eb76165ee
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Fast Food

DOC: Brtp5RD5VOdyGxA8c6vv
FIELD | categoryID | type=String | value=62ecfa2615a59
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.367202232485344,"_longitude":73.16668286919594}
FIELD | createdAt | type=Timestamp | value={"_seconds":1669283239,"_nanoseconds":662000000}
FIELD | id | type=String | value=Brtp5RD5VOdyGxA8c6vv
FIELD | latitude | type=Number | value=22.367202232485344
FIELD | longitude | type=Number | value=73.16668286919594
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F622ba0fd-4a5c-41e0-aa2f-e41e3168d4e2.png?alt=media&token=9e1f9b00-9382-4219-b7fa-45b7fcca4a1b
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Glowing skin

DOC: Butm6WX77bQkLVVPdrLG
FIELD | categoryID | type=string | value=
FIELD | createdAt | type=Timestamp | value={"_seconds":1685619541,"_nanoseconds":729000000}
FIELD | id | type=String | value=Butm6WX77bQkLVVPdrLG
FIELD | latitude | type=string | value=
FIELD | longitude | type=string | value=
FIELD | photo | type=string | value=
FIELD | photos | type=string | value=
FIELD | section_id | type=string | value=
FIELD | title | type=string | value=

DOC: C5U6AUYzRTDunjoJYdGq
FIELD | categoryID | type=String | value=63a2b7478c6a5
FIELD | coordinates | type=GeoPoint | value={"_latitude":14.7458,"_longitude":121.1315}
FIELD | createdAt | type=Timestamp | value={"_seconds":1688742290,"_nanoseconds":810000000}
FIELD | id | type=String | value=C5U6AUYzRTDunjoJYdGq
FIELD | latitude | type=Number | value=14.7458
FIELD | longitude | type=Number | value=121.1315
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FBanner_1688742155250.jpg?alt=media&token=961a0bdb-7c16-4c85-8e4f-38896f31ef98
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FLOGO_black_1688742167520.png?alt=media&token=3bbf4159-3699-4fd9-9447-8884253b6916"]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Tagumpay

DOC: CkkFyUQge0GcF8bI1APE
FIELD | categoryID | type=String | value=62ecfa2615a59
FIELD | coordinates | type=GeoPoint | value={"_latitude":-18.4335389,"_longitude":-70.2879994}
FIELD | createdAt | type=Timestamp | value={"_seconds":1689917833,"_nanoseconds":537214000}
FIELD | id | type=String | value=CkkFyUQge0GcF8bI1APE
FIELD | latitude | type=Number | value=-18.4335389
FIELD | longitude | type=Number | value=-70.2879994
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F6523f40b-1c9f-4f93-9421-b77a9e7a238e.png?alt=media&token=b9143960-e997-4a56-aa48-e5748d1fd6e6
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Refrigerante verde 3.78 LT VISTONY 

DOC: Cnu1AaDPRRbnv6quSIrg
FIELD | categoryID | type=String | value=64e2e7735131c
FIELD | coordinates | type=GeoPoint | value={"_latitude":21.764473,"_longitude":72.151932}
FIELD | createdAt | type=Timestamp | value={"_seconds":1692594504,"_nanoseconds":184000000}
FIELD | id | type=String | value=Cnu1AaDPRRbnv6quSIrg
FIELD | latitude | type=Number | value=21.764473
FIELD | longitude | type=Number | value=72.151932
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fth%20(1)_1692594321377.jpg?alt=media&token=e5cd4951-b233-482a-a24a-2b707dca90aa
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=New D-Mart

DOC: CuovNUZH6OjCYSYlCdUB
FIELD | categoryID | type=String | value=62ecff6b401f7
FIELD | coordinates | type=GeoPoint | value={"_latitude":-5.4431216,"_longitude":120.11446}
FIELD | createdAt | type=Timestamp | value={"_seconds":1683310442,"_nanoseconds":926492000}
FIELD | id | type=String | value=CuovNUZH6OjCYSYlCdUB
FIELD | latitude | type=Number | value=-5.4431216
FIELD | longitude | type=Number | value=120.11446
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fe9787c25-b5ae-4be1-97e5-2a693ec2f505.png?alt=media&token=a5602f78-a35b-4700-803a-7e3e7425fa55
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=bak

DOC: CydicJ6JtPcfKbNZh0u9
FIELD | categoryID | type=array | value=[]
FIELD | categoryId | type=array | value=[]
FIELD | categorys | type=array | value=[]
FIELD | coordinates | type=GeoPoint | value={"_latitude":22.31175092960065,"_longitude":73.21928434073925}
FIELD | createdAt | type=Timestamp | value={"_seconds":1669283241,"_nanoseconds":132000000}
FIELD | id | type=String | value=CydicJ6JtPcfKbNZh0u9
FIELD | image | type=string | value=
FIELD | isActive | type=Boolean | value=true
FIELD | latitude | type=Number | value=22.31175092960065
FIELD | logo | type=string | value=
FIELD | longitude | type=Number | value=73.21928434073925
FIELD | name | type=String | value=Style center
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fvendor-banner.png?alt=media&token=f64abb91-b017-4cc3-838c-b6ba16ed9ba5
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Style center
FIELD | vendorName | type=String | value=Style center
FIELD | zoneId | type=String | value=q8OOxNm1zgyVqggkCibX

DOC: Cyj5pPntSMhWBrsdUx0C
FIELD | categoryID | type=string | value=
FIELD | createdAt | type=Timestamp | value={"_seconds":1692195163,"_nanoseconds":616000000}
FIELD | id | type=String | value=Cyj5pPntSMhWBrsdUx0C
FIELD | latitude | type=string | value=
FIELD | longitude | type=string | value=
FIELD | photo | type=string | value=
FIELD | photos | type=string | value=
FIELD | section_id | type=string | value=
FIELD | title | type=string | value=

DOC: DQPvNopQJiYvCtTPauMv
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | coordinates | type=GeoPoint | value={"_latitude":40.4660668,"_longitude":19.491356}
FIELD | createdAt | type=Timestamp | value={"_seconds":1692044034,"_nanoseconds":170657000}
FIELD | id | type=String | value=DQPvNopQJiYvCtTPauMv
FIELD | latitude | type=Number | value=40.4660668
FIELD | longitude | type=Number | value=19.491356
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fed840fd5-50e3-4cd2-bb3e-5296bf6bbf59.png?alt=media&token=7b8bb35b-c468-4f46-9489-3afe628a2576
FIELD | photos | type=array | value=[]
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=test

FIELD_TYPE_SUMMARY:
address => {"string":12}
author => {"String":60}
authorName => {"String":59,"string":1}
authorProfilePic => {"String":42,"string":18}
categoryID => {"array":12,"String":45,"string":3}
categoryId => {"array":12}
categoryPhoto => {"string":36}
categoryTitle => {"String":57,"string":3}
categorys => {"array":12}
closeDineTime => {"string":48,"String":12}
closetime => {"string":29,"String":9}
coordinates => {"GeoPoint":57}
createdAt => {"Timestamp":60}
deliveryCharge => {"Object":55}
description => {"String":57,"string":3}
dine_in_active => {"boolean":11,"Boolean":21}
enabledDiveInFuture => {"boolean":47,"Boolean":9}
fcmToken => {"string":12,"String":27}
filters => {"Object":38,"string":3}
g => {"Object":57}
hidephotos => {"boolean":60}
id => {"String":60}
image => {"string":12}
isActive => {"Boolean":12}
latitude => {"Number":57,"string":3}
location => {"String":57,"string":3}
logo => {"string":12}
longitude => {"Number":57,"string":3}
name => {"String":12}
openDineTime => {"string":48,"String":12}
opentime => {"string":29,"String":9}
phonenumber => {"String":60}
photo => {"String":47,"string":13}
photos => {"array":57,"string":3}
price => {"String":7}
publish => {"Boolean":12}
restaurantCost => {"number":28,"Number":8,"string":4}
restaurantMenuPhotos => {"array":36,"string":4}
reststatus => {"Boolean":43,"boolean":14}
reviewsCount => {"number":24,"Number":13}
reviewsSum => {"number":24,"Number":13}
section_id => {"String":56,"string":3,"null":1}
specialDiscount => {"array":53,"string":3}
specialDiscountEnable => {"boolean":24,"Boolean":8}
step46gAllFashionVendorNullFieldPatch => {"Boolean":12}
step46gAllFashionVendorNullFieldPatchAt => {"Timestamp":12}
tax_active => {"Boolean":4,"boolean":2}
tax_amount => {"Number":4,"number":2}
tax_lable => {"String":4,"string":2}
tax_type => {"String":4,"string":2}
title => {"String":57,"string":3}
vendorCost => {"string":30,"String":4}
vendorMenuPhotos => {"array":34}
vendorName => {"String":12}
walletAmount => {"number":6}
workingHours => {"array":53,"string":3}
zoneId => {"String":12}

### Collection: vendor_products
DOC_COUNT_SAMPLED: 60

DOC: 00M6yLTF95ZjsA3E3Em8
FIELD | categoryID | type=String | value=636e30433dd7e
FIELD | id | type=String | value=00M6yLTF95ZjsA3E3Em8
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Strawberry
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ff34eabdd-48dc-4ccd-9ec7-e37a983e8a3d.png?alt=media&token=60c23f8a-86a7-4b4e-bb78-cd962071edbe
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ff34eabdd-48dc-4ccd-9ec7-e37a983e8a3d.png?alt=media&token=60c23f8a-86a7-4b4e-bb78-cd962071edbe","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ff34eabdd-48dc-4ccd-9ec7-e37a983e8a3d.png?alt=media&token=60c23f8a-86a7-4b4e-bb78-cd962071edbe"]
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=boolean | value=false

DOC: 02lRZ4NbxazUGOikcmb8
FIELD | categoryID | type=String | value=62dc0673d235b
FIELD | id | type=String | value=02lRZ4NbxazUGOikcmb8
FIELD | name | type=String | value=Budweiser
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbeer1.png?alt=media&token=9bbe8945-fa95-4201-a61f-96cbfd80bd0c
FIELD | photos | type=array | value=[]
FIELD | publish | type=boolean | value=false
FIELD | takeawayOption | type=boolean | value=false

DOC: 0BmzLzaFPW7NDSWJqAFo
FIELD | categoryID | type=String | value=64c9ee1921721
FIELD | id | type=String | value=0BmzLzaFPW7NDSWJqAFo
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Sugar
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ffdb47f20-7756-406a-a008-97cb2c9feb0d.png?alt=media&token=cd63d1e5-cf46-4811-b408-dee784f64253
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ffdb47f20-7756-406a-a008-97cb2c9feb0d.png?alt=media&token=cd63d1e5-cf46-4811-b408-dee784f64253"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=boolean | value=false

DOC: 0ElydaSumH3J1DrM0uXR
FIELD | categoryID | type=String | value=62ecf35007e34
FIELD | id | type=String | value=0ElydaSumH3J1DrM0uXR
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Coffee Body Scrub
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fed9de63f-ff6d-4707-a94e-7cd50809d5bc.png?alt=media&token=cff1485e-faf8-4c4b-935a-f2360549c45b
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fed9de63f-ff6d-4707-a94e-7cd50809d5bc.png?alt=media&token=cff1485e-faf8-4c4b-935a-f2360549c45b"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | takeawayOption | type=boolean | value=false

DOC: 0Gsy0HJ0NTViExMk5k6O
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | id | type=String | value=0Gsy0HJ0NTViExMk5k6O
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Test Product
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fkids5.png?alt=media&token=d5ebf6e6-b0ae-48cd-a900-90b91f4c6e38
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fkids5.png?alt=media&token=d5ebf6e6-b0ae-48cd-a900-90b91f4c6e38"]
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=Boolean | value=true

DOC: 0LnLKNw4QT4ta7MFcHha
FIELD | categoryID | type=String | value=628c79e14b7e4
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963779,"_nanoseconds":467000000}
FIELD | id | type=String | value=0LnLKNw4QT4ta7MFcHha
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Dior watch
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FDior.webp?alt=media&token=f80a9204-a209-472e-8793-3b81637db87d
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FDior.webp?alt=media&token=f80a9204-a209-472e-8793-3b81637db87d"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963779,"_nanoseconds":467000000}

DOC: 0UvkVonvmUBNthvU5lVJ
FIELD | categoryID | type=String | value=62ecfdfb02b2a
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963814,"_nanoseconds":423000000}
FIELD | id | type=String | value=0UvkVonvmUBNthvU5lVJ
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Watch
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963814,"_nanoseconds":423000000}

DOC: 0r2NbgqbIicPintj00NB
FIELD | categoryID | type=String | value=63aaf0142902b
FIELD | id | type=String | value=0r2NbgqbIicPintj00NB
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c392d486e9","attribute_options":["cheese","veggie"]}],"variants":[{"variant_id":"f1149d10-3752-11ee-97af-61f33120626a","variant_image":"","variant_price":"81","variant_sku":"cheese","variant_quantity":"-1"},{"variant_id":"a4a5da10-3753-11ee-a8f5-659a7a1ff004","variant_image":"","variant_price":"89","variant_sku":"veggie","variant_quantity":"-1"}]}
FIELD | name | type=String | value=Pizza
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F687595cd-de7a-4340-9338-b4e7d8c0ae3f.png?alt=media&token=a22b954c-0422-4a27-a256-f9890e5ef582
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F687595cd-de7a-4340-9338-b4e7d8c0ae3f.png?alt=media&token=a22b954c-0422-4a27-a256-f9890e5ef582"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=boolean | value=false

DOC: 1Lp01DrsCCMd4eMLWItA
FIELD | categoryID | type=String | value=63a2b7478c6a5
FIELD | id | type=String | value=1Lp01DrsCCMd4eMLWItA
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=redbucket
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=Boolean | value=true

DOC: 1Uqp7GK3Xqe1LULGlI0k
FIELD | categoryID | type=String | value=62ecfdfb47287
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963779,"_nanoseconds":798000000}
FIELD | id | type=String | value=1Uqp7GK3Xqe1LULGlI0k
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Girl Frok
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbabyfrok.jpg?alt=media&token=988d840e-1919-4c83-9f4e-2c08032828a8
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FCaptura%20de%20ecra%CC%83%202023-06-14%2C%20a%CC%80s%2017_1686760103451.28?alt=media&token=760eaf6e-7a7b-4a63-828e-71536049e175"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963779,"_nanoseconds":798000000}

DOC: 1ZKzFaMFWTOogcVKGUQk
FIELD | categoryID | type=String | value=636e30433dd7e
FIELD | id | type=String | value=1ZKzFaMFWTOogcVKGUQk
FIELD | item_attribute | type=Object | value={"attributes":[],"variants":[]}
FIELD | name | type=String | value=Apple
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F95c3b3b0-6aff-4583-a284-24fe8d41d857.png?alt=media&token=dd59f5d0-2049-461d-a9ef-e506c4f3229c
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F95c3b3b0-6aff-4583-a284-24fe8d41d857.png?alt=media&token=dd59f5d0-2049-461d-a9ef-e506c4f3229c","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Ff5291f4a-4581-42cf-ae87-d1a7b541a6b0.png?alt=media&token=1e9742a7-ea6d-47cd-89a3-68a2103d1972"]
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=boolean | value=false

DOC: 25Fx1fdZRTcYDNmYRUfd
FIELD | categoryID | type=String | value=62ecfdfb02b2a
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963751,"_nanoseconds":602000000}
FIELD | id | type=String | value=25Fx1fdZRTcYDNmYRUfd
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Casual Shirt
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F63ce3d00-29b8-4746-b09f-518b2e7e1dc6.png?alt=media&token=68688ac7-647c-4255-ae3b-49a90a3eee42
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F63ce3d00-29b8-4746-b09f-518b2e7e1dc6.png?alt=media&token=68688ac7-647c-4255-ae3b-49a90a3eee42"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963751,"_nanoseconds":602000000}

DOC: 27liouMiOOi8b8koMt18
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | id | type=String | value=27liouMiOOi8b8koMt18
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=PULLA
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=boolean | value=false

DOC: 2RFFDZCQTpx844bST5xP
FIELD | categoryID | type=String | value=wxHH0kJnCExOI6sHaXvX
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963765,"_nanoseconds":44000000}
FIELD | id | type=String | value=2RFFDZCQTpx844bST5xP
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Casual Men's Shoes
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdummy-image-portrait.jpg?alt=media&token=82737a8a-c47d-4dde-b08d-9f11bdaa29aa
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdummy-image-portrait.jpg?alt=media&token=82737a8a-c47d-4dde-b08d-9f11bdaa29aa"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963765,"_nanoseconds":44000000}

DOC: 2RZcajrZo4qR7Byxudeu
FIELD | categoryID | type=String | value=62ecf35007e34
FIELD | id | type=String | value=2RZcajrZo4qR7Byxudeu
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Loreal Paris Shampoo
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F10.jpg?alt=media&token=501f66c2-e91b-4040-b147-2a69d2cc05b0
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F10.jpg?alt=media&token=501f66c2-e91b-4040-b147-2a69d2cc05b0"]
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | takeawayOption | type=boolean | value=false

DOC: 2SyKQtZyxnFItK5vLvyx
FIELD | categoryID | type=String | value=6285ebb16636c
FIELD | id | type=String | value=2SyKQtZyxnFItK5vLvyx
FIELD | name | type=String | value=Women's Dress
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FDress_20.jpg?alt=media&token=9de34734-917e-4c81-a943-0014a9878c27
FIELD | photos | type=array | value=[]
FIELD | publish | type=boolean | value=false
FIELD | takeawayOption | type=boolean | value=false

DOC: 2iaQ11YtC3DbAs1dHFcC
FIELD | categoryID | type=String | value=62ecedf41a7fe
FIELD | id | type=String | value=2iaQ11YtC3DbAs1dHFcC
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c392080ec6","attribute_options":["red","green "]},{"attribute_id":"633c38a8dad77","attribute_options":["blue"]},{"attribute_id":"633c392d486e9","attribute_options":[]},{"attribute_id":"63b5afbc6a6a1","attribute_options":[]}],"variants":[{"variant_id":"529d32c0-06c2-11ee-b826-a3dd3b0bfe27","variant_image":"","variant_price":"0","variant_sku":"green -blue","variant_quantity":"-1"}]}
FIELD | name | type=String | value=Ai
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=boolean | value=false

DOC: 2vJN86Cb20sQHmwdwD3s
FIELD | categoryID | type=String | value=11pMPqVV53qUsacuF6N1YD
FIELD | id | type=String | value=2vJN86Cb20sQHmwdwD3s
FIELD | name | type=String | value=Orange
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Forange3.jpg?alt=media&token=b71dd115-e567-4836-b4a9-1c6b1b3737d6
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 3K05tanHz8YNksr5nid3
FIELD | categoryID | type=String | value=88pNxhccktxkSgIndZ8e
FIELD | createdAt | type=Timestamp | value={"_seconds":1782935355,"_nanoseconds":166000000}
FIELD | id | type=String | value=3K05tanHz8YNksr5nid3
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Onion
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F2370b2c9-5d8c-4898-8fae-6b15963c485f.png?alt=media&token=92ca6a1c-4f8e-4273-a57f-0521dd8d7bcb
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F2370b2c9-5d8c-4898-8fae-6b15963c485f.png?alt=media&token=92ca6a1c-4f8e-4273-a57f-0521dd8d7bcb"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=Boolean | value=true
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782935355,"_nanoseconds":166000000}

DOC: 3fYiGN919ldNc3Qw2LsQ
FIELD | categoryID | type=String | value=636e30433dd7e
FIELD | createdAt | type=Timestamp | value={"_seconds":1782935343,"_nanoseconds":586000000}
FIELD | id | type=String | value=3fYiGN919ldNc3Qw2LsQ
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c38a8dad77","attribute_options":["Redf"]},{"attribute_id":"633c392080ec6","attribute_options":["M","Z"]}],"variants":[{"variant_id":"a7170010-662c-11ed-bd95-9f667b320856","variant_image":"","variant_price":"10","variant_sku":"Redf-M","variant_quantity":"5"},{"variant_id":"a7170010-662c-11ed-9524-d73ab9a1d06d","variant_image":"","variant_price":"0","variant_sku":"Redf-Z","variant_quantity":"0"}]}
FIELD | name | type=String | value=Test
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Flogo_web.png?alt=media&token=ffaa1b32-a877-4485-b2ff-b3942f9cf665
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782935343,"_nanoseconds":586000000}

DOC: 3jFPwSSeJd7yVBJAN0lb
FIELD | categoryID | type=String | value=62ecf0f1c144b
FIELD | id | type=String | value=3jFPwSSeJd7yVBJAN0lb
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c392d486e9","attribute_options":["grill","no grill"]}],"variants":[{"variant_id":"6ee15d40-3a97-11ee-b584-d346caa11021","variant_image":"https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fimages%2F6ee15d40-3a97-11ee-b584-d346caa11021.png?alt=media&token=4ad52915-30cf-4337-852e-f7824b982df5","variant_price":"69","variant_sku":"grill","variant_quantity":"20"},{"variant_id":"7cad7800-3a97-11ee-8b47-b10a97123a83","variant_image":"https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fimages%2F7cad7800-3a97-11ee-8b47-b10a97123a83.png?alt=media&token=57bf6d62-c9fc-41e7-b558-3c49ca679e92","variant_price":"70","variant_sku":"no grill","variant_quantity":"30"}]}
FIELD | name | type=String | value=Sandwich
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fea57e634-d348-437d-b336-708f9b5685f7.png?alt=media&token=3a660cc8-c09c-41f3-8b07-a6869466e5d3
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fea57e634-d348-437d-b336-708f9b5685f7.png?alt=media&token=3a660cc8-c09c-41f3-8b07-a6869466e5d3"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=Boolean | value=true

DOC: 3oCIlmcBu98TbTsgpQ5I
FIELD | categoryID | type=String | value=lNZkE309uNZB4v9jkChM
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963789,"_nanoseconds":447000000}
FIELD | id | type=String | value=3oCIlmcBu98TbTsgpQ5I
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Handbag
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F53ca6335-100b-405e-a94e-e3af2306686c.png?alt=media&token=a3c50db0-ae00-4131-89a4-de49d6b94821
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963789,"_nanoseconds":447000000}

DOC: 3zXbJK9FY45crkeTX8ss
FIELD | categoryID | type=String | value=zzq4LngLd8PWzYJfsvnjfV
FIELD | createdAt | type=Timestamp | value={"_seconds":1782935367,"_nanoseconds":430000000}
FIELD | id | type=String | value=3zXbJK9FY45crkeTX8ss
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c38a8dad77","attribute_options":["merah"]}],"variants":[{"variant_id":"5f611bd1725f08","variant_image":"https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/images%2Fvariant_merah_1677929668911.51?alt=media&token=307ff124-fcdb-4c4d-a845-ca5d7756f71c","variant_price":"1","variant_sku":"merah","variant_quantity":"2994"}]}
FIELD | name | type=String | value=Almond Coklat
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/emart%2Fstore%2FproductImages%2F2aba5868-cda0-4640-82e8-c4c20b816b02.png?alt=media&token=a6af3daa-17ae-4dca-80d4-c1a952a55023
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/emart%2Fstore%2FproductImages%2F2aba5868-cda0-4640-82e8-c4c20b816b02.png?alt=media&token=a6af3daa-17ae-4dca-80d4-c1a952a55023"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=Boolean | value=true
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782935367,"_nanoseconds":430000000}

DOC: 45mQMRd3whkDDL5ueZSP
FIELD | categoryID | type=String | value=62ecf8cb6aeae
FIELD | id | type=String | value=45mQMRd3whkDDL5ueZSP
FIELD | name | type=String | value=Balkan 176 Vodka
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FBalkan%20176%20Vodka.webp?alt=media&token=81e8bcfe-e3f1-4556-9ab8-3f075642c57c
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 47VwCqkCx343GR75Or0v
FIELD | categoryID | type=String | value=62eceea3c1cd9
FIELD | id | type=String | value=47VwCqkCx343GR75Or0v
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Double Cheese Pizza
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fdcb294fb-66e3-469b-b69a-630ab3888cd3.png?alt=media&token=3fd2cc78-3e4a-44f0-abc5-3085a709f80b
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fdcb294fb-66e3-469b-b69a-630ab3888cd3.png?alt=media&token=3fd2cc78-3e4a-44f0-abc5-3085a709f80b"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=Boolean | value=true

DOC: 4EweJFqHtD5AqlATLbwt
FIELD | categoryID | type=String | value=62ecfa2615a59
FIELD | id | type=String | value=4EweJFqHtD5AqlATLbwt
FIELD | name | type=String | value=Face mask
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgarnier%20serum%20sheet%20mask.jpg?alt=media&token=cbcc2d2b-5477-4d61-a88c-1b1aaf6d9c8f
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 4QDVmkt1JsEgMM8m0LwW
FIELD | categoryID | type=String | value=62ecfa2591016
FIELD | id | type=String | value=4QDVmkt1JsEgMM8m0LwW
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=ال
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F2_1691563800544.png?alt=media&token=dfd3376f-e7b8-49a3-9e6e-5a1f9bf5169b
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F2_1691563800544.png?alt=media&token=dfd3376f-e7b8-49a3-9e6e-5a1f9bf5169b"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | takeawayOption | type=Boolean | value=true

DOC: 4do2QclirTx9cxq4zjeh
FIELD | categoryID | type=String | value=636b70cc5a600
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963806,"_nanoseconds":827000000}
FIELD | id | type=String | value=4do2QclirTx9cxq4zjeh
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Women's Top
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963806,"_nanoseconds":827000000}

DOC: 4kZpNSd9BmvVyMHd43RQ
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | id | type=String | value=4kZpNSd9BmvVyMHd43RQ
FIELD | name | type=String | value=Hamburger
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2Fb3824229-0ae4-4a38-83f7-eb220bd5d237.png?alt=media&token=367ce87d-7437-409d-9c0c-567b39be55cb
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=boolean | value=false

DOC: 53i1yX0x8KZ8FqIa8MAm
FIELD | categoryID | type=String | value=62ecf0f1c144b
FIELD | id | type=String | value=53i1yX0x8KZ8FqIa8MAm
FIELD | name | type=String | value=Regular Cheese Sandwich
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F9743b909-25f8-4e92-8978-ec0fe86d44d0.png?alt=media&token=82bd2c8d-c381-4087-8289-a5d9d25c5d33
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | takeawayOption | type=boolean | value=false

DOC: 56u25aI2JUzgBmLwPIeh
FIELD | categoryID | type=String | value=OvjEAidyRSeuoH81pK4O
FIELD | id | type=String | value=56u25aI2JUzgBmLwPIeh
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"6472656838f79","attribute_options":["4 pics "]}],"variants":[{"variant_id":"0c632080-3aa2-11ee-bbb5-bb8ca105bff2","variant_image":"","variant_price":"0","variant_sku":"4 pics ","variant_quantity":"-1"}]}
FIELD | name | type=String | value=Chicken 🍗 Masala
FIELD | photo | type=string | value=
FIELD | photos | type=array | value=[]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=boolean | value=false

DOC: 5oPQV6YEM7cSOLAGnSoP
FIELD | categoryID | type=String | value=62ecfdfb02b2a
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963761,"_nanoseconds":673000000}
FIELD | id | type=String | value=5oPQV6YEM7cSOLAGnSoP
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c38a8dad77","attribute_options":["Cream","White","Orange"]},{"attribute_id":"633c392080ec6","attribute_options":["L","XL"]}],"variants":[{"variant_id":"5f0e293fb81e4c","variant_image":"https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fimages%2F4770d020-8510-11ed-9acf-8f0a8d2a1175.png?alt=media&token=ca6c42f5-53df-4aae-ae6a-000695f7e7f3","variant_price":"69","variant_sku":"Cream-L","variant_quantity":"56"},{"variant_id":"5f0e293fb7fb68","variant_image":null,"variant_price":"1","variant_sku":"White-L","variant_quantity":"0"},{"variant_id":"5f0e293fb7ec5c","variant_image":"https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fimages%2F44d31ad0-8510-11ed-8cd8-c9602cf9ff0c.png?alt=media&token=d5b81437-ae6a-4752-86c9-674f40f43f80","variant_price":"59","variant_sku":"Orange-L","variant_quantity":"13"},{"variant_id":"5f0e293fb7ea68","variant_image":null,"variant_price":"89","variant_sku":"Cream-XL","variant_quantity":"9"},{"variant_id":"5f0e293fb7f954","variant_image":null,"variant_price":"1","variant_sku":"White-XL","variant_quantity":"47"},{"variant_id":"5f0e293fb80388","variant_image":null,"variant_price":"100","variant_sku":"Orange-XL","variant_quantity":"-1"}]}
FIELD | name | type=String | value=Printed T-shirts 
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F6d139083-ce38-47f4-90a3-c63549af9cf6.png?alt=media&token=6ab9e02e-0bf8-46ba-a9da-01b4b2c8b20d
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F6d139083-ce38-47f4-90a3-c63549af9cf6.png?alt=media&token=6ab9e02e-0bf8-46ba-a9da-01b4b2c8b20d","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F1109ef2b-5c79-4412-9679-5866b18bc690.png?alt=media&token=38e90baa-36b1-4a6f-8ee5-9be58ddb1d79","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F383c4bae-3d6c-49dd-990f-26174b6c2d81.png?alt=media&token=593d17fd-3820-49ee-ae90-be68d4993407"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963761,"_nanoseconds":673000000}

DOC: 626fd5a4b2402
FIELD | categoryID | type=String | value=62ecfa27888a9
FIELD | id | type=String | value=626fd5a4b2402
FIELD | name | type=String | value=Hair band accessories 
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fhair%20band.jpeg?alt=media&token=d57d0c89-d5cf-43ac-9f8f-a10940c3cd5d
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 6270c67279103
FIELD | categoryID | type=String | value=636b70cc5a600
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963807,"_nanoseconds":139000000}
FIELD | id | type=String | value=6270c67279103
FIELD | item_attribute | type=Object | value={"attributes":[],"variants":[]}
FIELD | name | type=String | value=Girl's Shirt
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F0d5360f7-fcba-44f8-8fb6-b5bbc95f55d3.png?alt=media&token=8f0b6a03-8f32-4994-9256-76c29949a093
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/emart%2Fstore%2FproductImages%2F0d5360f7-fcba-44f8-8fb6-b5bbc95f55d3.png?alt=media&token=8f0b6a03-8f32-4994-9256-76c29949a093"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=Boolean | value=true
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963807,"_nanoseconds":139000000}

DOC: 6270c6dc5da16
FIELD | categoryID | type=String | value=88pNxhccktxkSgIndZ8e
FIELD | id | type=String | value=6270c6dc5da16
FIELD | name | type=String | value=Lemon
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Flemon1.webp?alt=media&token=feb180fc-f996-4fe4-b7f8-b881e10d2a73
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 6270c79e51261
FIELD | categoryID | type=String | value=zzq4LngLd8PWzYJfsvnjfV
FIELD | id | type=String | value=6270c79e51261
FIELD | name | type=String | value=Potato chips
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Fpw.webp?alt=media&token=11e4ed37-56bf-4b97-b2ff-79d6411b04bf
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=Boolean | value=true

DOC: 6270c7cb95252
FIELD | categoryID | type=String | value=zzq4LngLd8PWzYJfsvnjfV
FIELD | createdAt | type=Timestamp | value={"_seconds":1782935361,"_nanoseconds":801000000}
FIELD | id | type=String | value=6270c7cb95252
FIELD | name | type=String | value=Buiscuit
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Fbuiscuits.jpg?alt=media&token=78f82920-0bdb-43e7-82e5-e2cf9ad38da2
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782935361,"_nanoseconds":801000000}

DOC: 62d15b9d2300b
FIELD | categoryID | type=String | value=62ecf81dcd06f
FIELD | id | type=String | value=62d15b9d2300b
FIELD | name | type=String | value=Pineapple Mojito
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FPineapple%20Mojito%20-%20Easy%20Peasy%20Meals.jpg?alt=media&token=8933b415-f3bc-4ef6-bc3d-d89b3e44e10b
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62d79e30290ca
FIELD | categoryID | type=String | value=62ecf81e23675
FIELD | id | type=String | value=62d79e30290ca
FIELD | name | type=String | value=Bacardi 151
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FBacardi%20151.webp?alt=media&token=d800c30a-d7c6-4b59-850d-f53d0940fd03
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62dc06ac4edf6
FIELD | categoryID | type=String | value=62ecf8cb6aeae
FIELD | id | type=String | value=62dc06ac4edf6
FIELD | name | type=String | value=Balkan 176 Vodka
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FBalkan%20176%20Vodka.webp?alt=media&token=47635236-a5d5-4a12-947c-4cf4703e31b9
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62e37c6bb81b1
FIELD | categoryID | type=String | value=62e3735c7df56
FIELD | id | type=String | value=62e37c6bb81b1
FIELD | name | type=String | value=Marghrita pizza
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fclasic_cheese%20pizza.jpg?alt=media&token=6d7b230d-d41e-4f24-940a-1c6b3b7c71aa
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62e37db62f77b
FIELD | categoryID | type=String | value=62cd5926d5186
FIELD | id | type=String | value=62e37db62f77b
FIELD | name | type=String | value=cheese burger
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fburger.jpg?alt=media&token=075f6928-9244-4040-a36b-3bedd1dc0a31
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=Boolean | value=true

DOC: 62e37dfc15c00
FIELD | categoryID | type=String | value=62e3735c7df56
FIELD | id | type=String | value=62e37dfc15c00
FIELD | name | type=String | value=thin crust pizza
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fclasicvegpizza.webp?alt=media&token=f1ce4bbe-2b33-4abb-b449-cc9b89b53741
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62e3c9f411e08
FIELD | categoryID | type=String | value=zGhiepckNthq5FILtM4Eb
FIELD | createdAt | type=Timestamp | value={"_seconds":1782935362,"_nanoseconds":224000000}
FIELD | id | type=String | value=62e3c9f411e08
FIELD | name | type=String | value=Butter milk
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbuttermilk2.webp?alt=media&token=de0c1c7d-8bb8-4333-9679-c0b8f148ffa0
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=Boolean | value=true
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782935362,"_nanoseconds":224000000}

DOC: 62e8afaebf1e2
FIELD | categoryID | type=String | value=62dc0673d235b
FIELD | id | type=String | value=62e8afaebf1e2
FIELD | name | type=String | value=Budweiser
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbeer3.jpg?alt=media&token=5a3539de-6363-4be3-bafa-188d775c0f3e
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=Boolean | value=true

DOC: 62f3bd3c2392c
FIELD | categoryID | type=String | value=62dc0673d235b
FIELD | id | type=String | value=62f3bd3c2392c
FIELD | name | type=String | value=Budweiser
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbeer3.jpg?alt=media&token=f37de9a9-3700-4c85-8bb0-99da1371f465
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62f3bd9a60009
FIELD | categoryID | type=String | value=62ecf8cb6aeae
FIELD | id | type=String | value=62f3bd9a60009
FIELD | name | type=String | value=Balkan 176 Vodka
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FBalkan%20176%20Vodka.webp?alt=media&token=48688e0c-6ec5-4a41-9fbf-4b3f56fa6080
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62f3bdbd1794d
FIELD | categoryID | type=String | value=62ecf81d6e41b
FIELD | id | type=String | value=62f3bdbd1794d
FIELD | name | type=String | value=Damilano wine
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FWine8.webp?alt=media&token=235408a0-2286-4a84-8c1c-c9d2b4d44dc6
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62f3bdea78caa
FIELD | categoryID | type=String | value=62ecf81dcd06f
FIELD | id | type=String | value=62f3bdea78caa
FIELD | name | type=String | value=pineaple coctail
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fcoctail%20prduct.jpg?alt=media&token=31f45905-e68a-4c0f-997f-11a24d400538
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62f3be1a0d2af
FIELD | categoryID | type=String | value=62dc0673d235b
FIELD | id | type=String | value=62f3be1a0d2af
FIELD | name | type=String | value=Heineken
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbeer5.jpg?alt=media&token=1723018a-69ef-4e4d-b67e-00114fe205f2
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 62mA69JlyfOid27lWJ01
FIELD | categoryID | type=String | value=zGhiepckNthq5FILtM4Eb
FIELD | createdAt | type=Timestamp | value={"_seconds":1782935390,"_nanoseconds":531000000}
FIELD | id | type=String | value=62mA69JlyfOid27lWJ01
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c392d486e9","attribute_options":["pancong","penuh"]}],"variants":[{"variant_id":"4e1dfca0-c88f-11ed-91a3-c3d8f5143202","variant_image":"","variant_price":"3000","variant_sku":"pancong","variant_quantity":"49"},{"variant_id":"521ec460-c88f-11ed-a7d3-5756c9de3f93","variant_image":"","variant_price":"5000","variant_sku":"penuh","variant_quantity":"50"}]}
FIELD | name | type=String | value=Kopi
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/emart%2Fstore%2FproductImages%2F06e549a5-9cdb-407e-a875-c1b6df5d477c.png?alt=media&token=44919df0-4492-4a94-935d-ff510fa47f7c
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/erbete-putra.appspot.com/o/emart%2Fstore%2FproductImages%2F06e549a5-9cdb-407e-a875-c1b6df5d477c.png?alt=media&token=44919df0-4492-4a94-935d-ff510fa47f7c"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782935390,"_nanoseconds":531000000}

DOC: 63323dabae309
FIELD | categoryID | type=String | value=6285ebb16636c
FIELD | id | type=String | value=63323dabae309
FIELD | name | type=String | value=Vestido Longo
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F1607481832386c7359a92c5fa7d801ccab8f31144e_thumbnail_600x.jpg?alt=media&token=169ced1f-8ed3-4640-99ad-3ad1748dfd18
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=boolean | value=false

DOC: 633c3ee3359f5
FIELD | categoryID | type=String | value=628c79e14b7e4
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963786,"_nanoseconds":74000000}
FIELD | id | type=String | value=633c3ee3359f5
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Simple watch
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F61epn29QG0L._AC_SS450_.jpg?alt=media&token=49dd47ba-a044-46bc-b0a7-1b23e70e4f61
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F61epn29QG0L._AC_SS450_.jpg?alt=media&token=49dd47ba-a044-46bc-b0a7-1b23e70e4f61","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fthumb3_1669192558400.jpg?alt=media&token=604776e9-f92b-4326-a0d4-699f96471629"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963786,"_nanoseconds":74000000}

DOC: 633ece3f95e0d
FIELD | categoryID | type=String | value=628c79e14b7e4
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963786,"_nanoseconds":524000000}
FIELD | id | type=String | value=633ece3f95e0d
FIELD | item_attribute | type=Object | value={"attributes":[{"attribute_id":"633c38a8dad77","attribute_options":["White","Green"]},{"attribute_id":"633c392080ec6","attribute_options":["Small","Medium"]},{"attribute_id":"633c392d486e9","attribute_options":["Rectange"]}],"variants":[{"variant_id":"5efefd71b47e58","variant_image":null,"variant_price":"40","variant_sku":"White-Small-Rectange","variant_quantity":"30"},{"variant_id":"5efefd71b472a0","variant_image":null,"variant_price":"30","variant_sku":"Green-Small-Rectange","variant_quantity":"30"},{"variant_id":"5efefd71b483c4","variant_image":null,"variant_price":"20","variant_sku":"White-Medium-Rectange","variant_quantity":"18"},{"variant_id":"5efefd71b489f0","variant_image":null,"variant_price":"20","variant_sku":"Green-Medium-Rectange","variant_quantity":"6"}]}
FIELD | name | type=String | value=Noise colorfit caliber smartwatch
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FRf1E2Jn3.jpg?alt=media&token=38f3acb9-2238-438d-b897-29de0a5bb7d0
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FRf1E2Jn3.jpg?alt=media&token=38f3acb9-2238-438d-b897-29de0a5bb7d0","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdownload%20(5).jpg?alt=media&token=bfabb0e0-bcff-4d41-a7b4-bf38a5187558","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FRBmKaXrm.jpg?alt=media&token=7328ab0d-5d21-4900-8100-993ce1619257","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fimages.jpg?alt=media&token=10143413-582c-4a5e-a6a9-2a89e1bedb58"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963786,"_nanoseconds":524000000}

DOC: 633fbd0ba2032
FIELD | categoryID | type=String | value=6285ebb16636c
FIELD | id | type=String | value=633fbd0ba2032
FIELD | name | type=String | value=dress
FIELD | photo | type=string | value=
FIELD | publish | type=boolean | value=false
FIELD | takeawayOption | type=boolean | value=false

DOC: 633fc886c16f6
FIELD | categoryID | type=String | value=62ecf35007e34
FIELD | id | type=String | value=633fc886c16f6
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=test
FIELD | photo | type=string | value=
FIELD | publish | type=boolean | value=false
FIELD | takeawayOption | type=boolean | value=false

DOC: 633ff58b7dfff
FIELD | categoryID | type=String | value=62ecfdfb02b2a
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963765,"_nanoseconds":391000000}
FIELD | id | type=String | value=633ff58b7dfff
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=test
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmen-img.png?alt=media&token=55571275-b348-4c02-8bbe-c53835df0f5c
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmen-img.png?alt=media&token=55571275-b348-4c02-8bbe-c53835df0f5c"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963765,"_nanoseconds":391000000}

DOC: 633ffb3a3cf5f
FIELD | categoryID | type=String | value=62ecfdfb02b2a
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963765,"_nanoseconds":733000000}
FIELD | id | type=String | value=633ffb3a3cf5f
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=style
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmens-3.png?alt=media&token=9361c149-5b4a-4286-8282-16fde1f5d907
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmens-3.png?alt=media&token=9361c149-5b4a-4286-8282-16fde1f5d907"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963765,"_nanoseconds":733000000}

DOC: 633ffbbc6b586
FIELD | categoryID | type=String | value=62ecfdfb02b2a
FIELD | createdAt | type=Timestamp | value={"_seconds":1782963766,"_nanoseconds":48000000}
FIELD | id | type=String | value=633ffbbc6b586
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=style
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmens-3.png?alt=media&token=7b75fd3a-3c82-4d0c-8aed-7adddf6c18e6
FIELD | photos | type=array | value=["https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmens-3.png?alt=media&token=7b75fd3a-3c82-4d0c-8aed-7adddf6c18e6","https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdummy-image-portrait.jpg?alt=media&token=c34ae80f-743c-4fa0-8e2d-08f6b77b5914"]
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | takeawayOption | type=boolean | value=false
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782963766,"_nanoseconds":48000000}

DOC: 635b617e3dc64
FIELD | categoryID | type=String | value=62ecf35007e34
FIELD | id | type=String | value=635b617e3dc64
FIELD | item_attribute | type=null | value=null
FIELD | name | type=String | value=Hair Oil
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F7.jpg?alt=media&token=d0bd1b05-d906-4f48-86f9-9bda8bd159f8
FIELD | publish | type=Boolean | value=true
FIELD | takeawayOption | type=Boolean | value=true

FIELD_TYPE_SUMMARY:
addOnsPrice => {"array":60}
addOnsTitle => {"array":60}
addon_name => {"string":24,"null":2}
addon_price => {"string":24,"null":2}
brandID => {"string":19,"String":14}
calories => {"number":47,"Number":13}
categoryID => {"String":60}
createdAt => {"Timestamp":20}
description => {"String":60}
digitalProduct => {"string":13,"String":1,"null":3}
disPrice => {"String":60}
fats => {"number":50,"Number":10}
grams => {"number":40,"Number":20}
id => {"String":60}
isDigitalProduct => {"boolean":16,"Boolean":1}
item_attribute => {"null":23,"Object":11}
name => {"String":60}
nonveg => {"boolean":56,"Boolean":4}
photo => {"String":52,"string":8}
photos => {"array":39}
price => {"String":60}
productImages => {"array":1,"String":1}
product_specification => {"Object":25,"null":7}
proteins => {"number":48,"Number":12}
publish => {"boolean":8,"Boolean":52}
quantity => {"Number":59,"number":1}
reviewAttributes => {"Object":24,"null":3}
reviewsCount => {"Number":11,"number":15}
reviewsSum => {"Number":11,"number":15}
section_id => {"String":34}
size => {"array":32}
sizePrice => {"array":32}
step45cCreatedAtPatch => {"Boolean":6}
step45cCreatedAtPatchAt => {"Timestamp":6}
step46bCreatedAtPatch => {"Boolean":14}
step46bCreatedAtPatchAt => {"Timestamp":14}
takeawayOption => {"boolean":47,"Boolean":13}
updatedAt => {"Timestamp":20}
value => {"array":1}
veg => {"Boolean":49,"boolean":11}
vendorID => {"String":60}

### Collection: vendor_categories
DOC_COUNT_SAMPLED: 56

DOC: 628c79e14b7e4
FIELD | id | type=String | value=628c79e14b7e4
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FWatches.png?alt=media&token=7402409e-7237-40ea-b342-e0b510187082
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Watches

DOC: 62cd5926d5186
FIELD | id | type=String | value=62cd5926d5186
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fburger.png?alt=media&token=b89d777c-109f-4235-bea3-a0ddd3b06838
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Burger

DOC: 62dc0673d235b
FIELD | id | type=String | value=62dc0673d235b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbeer.png?alt=media&token=e154fe93-8f24-42b0-9e7b-410003b10343
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Beer

DOC: 62e3735c7df56
FIELD | id | type=String | value=62e3735c7df56
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fshushi.png?alt=media&token=10b07070-2480-427c-86c2-32f28124c444
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Sushi

DOC: 62ecedf41a7fe
FIELD | id | type=String | value=62ecedf41a7fe
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Framen.png?alt=media&token=aeec11c2-c4b5-4b09-a8ea-79cbaf6f9377
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Ramen

DOC: 62eceea3c1cd9
FIELD | id | type=String | value=62eceea3c1cd9
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbar_food.png?alt=media&token=b4b985b8-6510-4656-9625-858f306347bb
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Bar Food

DOC: 62ecef0780589
FIELD | id | type=String | value=62ecef0780589
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FScreenshot_20221205-180641_YouTube_1670522454191.jpg?alt=media&token=d84eeb02-b1e6-4f30-9118-c0b286b67915
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Yemen

DOC: 62ecef57887cb
FIELD | id | type=String | value=62ecef57887cb
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fnew_maxican.png?alt=media&token=cfdd283f-5e2b-4e4f-bad1-3ebd73bf1cac
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=New Mexican

DOC: 62ecf0f1c144b
FIELD | id | type=String | value=62ecf0f1c144b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fsandwiches.png?alt=media&token=67692799-ba7e-4282-93e5-6f0a0a2ca8ad
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Sandwich

DOC: 62ecf18f51a76
FIELD | id | type=String | value=62ecf18f51a76
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmediterranean.png?alt=media&token=6701d146-77e9-43cb-a8a1-4aeafe95af1d
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Mediterranean

DOC: 62ecf35007e34
FIELD | id | type=String | value=62ecf35007e34
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fhair_Care.png?alt=media&token=42caf464-0d7b-4e0b-ad96-339b82f8e93d
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Hair care

DOC: 62ecf81cedfd9
FIELD | id | type=String | value=62ecf81cedfd9
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fsparkling.png?alt=media&token=bf562beb-6c57-41ec-8f9c-b1ba9cb15dfc
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Sparkling

DOC: 62ecf81d6e41b
FIELD | id | type=String | value=62ecf81d6e41b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fwine.png?alt=media&token=f82f203d-5b7d-42e9-88cf-20f2f8976f60
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Wine

DOC: 62ecf81dcd06f
FIELD | id | type=String | value=62ecf81dcd06f
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FCocktail.png?alt=media&token=17c89e83-8940-4fd6-81a0-d8e4e4d2e30f
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Cocktail

DOC: 62ecf81e23675
FIELD | id | type=String | value=62ecf81e23675
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FLiquor.png?alt=media&token=9cf615f1-8dee-43e6-bb6c-272bcbc46f5b
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Liquor

DOC: 62ecf8cb6aeae
FIELD | id | type=String | value=62ecf8cb6aeae
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FVodka.png?alt=media&token=255c01df-7e5c-46cc-8a32-bd39d3ef42b3
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Vodka

DOC: 62ecf8cba3ad3
FIELD | id | type=String | value=62ecf8cba3ad3
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fextra.png?alt=media&token=cc2f8c6d-1e9a-4d62-93a3-5b41d2939050
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Extra

DOC: 62ecfa2591016
FIELD | id | type=String | value=62ecfa2591016
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FHair_extensions.png?alt=media&token=77b0298b-fd1a-48a8-8aa1-cc9327f5d53c
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Hair extensions

DOC: 62ecfa25d2ced
FIELD | id | type=String | value=62ecfa25d2ced
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fwigs.png?alt=media&token=0ab955ad-0bf5-49f0-93b6-e56abf036027
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Wigs

DOC: 62ecfa2615a59
FIELD | id | type=String | value=62ecfa2615a59
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fskin_care.png?alt=media&token=4fcfe380-bc28-40e4-bc6b-f8c9377d0487
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Skin care

DOC: 62ecfa264e7d8
FIELD | id | type=String | value=62ecfa264e7d8
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmackup.png?alt=media&token=e798f095-0e4d-47ee-a913-911953025875
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Make up

DOC: 62ecfa27888a9
FIELD | id | type=String | value=62ecfa27888a9
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FAccessories.png?alt=media&token=019c5a04-d320-45bb-a4f4-f842ac67b2a5
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=Accessories

DOC: 62ecfdfb02b2a
FIELD | id | type=String | value=62ecfdfb02b2a
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmen%20(2).png?alt=media&token=6a918bf3-fe17-483c-bb09-0dfe4da67fa7
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Men's wear

DOC: 62ecfdfb47287
FIELD | id | type=String | value=62ecfdfb47287
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fjwlr.png?alt=media&token=6748103c-2d5f-4e57-ad78-5372702d5c29
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Jewellery

DOC: 62ecff6a8c983
FIELD | id | type=String | value=62ecff6a8c983
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FCarnations.png?alt=media&token=c9a2a197-5cdf-4339-b292-bf21ab1a29d2
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=Carnations

DOC: 62ecff6af068d
FIELD | id | type=String | value=62ecff6af068d
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FOrchids.png?alt=media&token=1b33e20c-92fe-4d4e-afb0-829ae539fc56
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=Orchids

DOC: 62ecff6b401f7
FIELD | id | type=String | value=62ecff6b401f7
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FLilies.png?alt=media&token=c6c0f34c-876d-4c8a-8126-ed2067d8019e
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=Lilies

DOC: 62ecff6b9816b
FIELD | id | type=String | value=62ecff6b9816b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FFlowers-Basket.png?alt=media&token=9173d6bb-4856-4957-b863-2331167de127
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd7b50f32
FIELD | title | type=String | value=Flowers Basket

DOC: 62f22bd707b80
FIELD | id | type=String | value=62f22bd707b80
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Flogo.png?alt=media&token=a7c2fa43-bba3-4626-a012-23a1dcff6c18
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=null | value=null
FIELD | title | type=String | value=Homeopathic Hospital

DOC: 63658e2a3d840
FIELD | id | type=String | value=63658e2a3d840
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fseefood-bg2.png?alt=media&token=4fdedeeb-f1bf-42b6-8bdc-dbb9213d9c8e
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=bismi

DOC: 636b70cc5a600
FIELD | id | type=String | value=636b70cc5a600
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FDress_20.jpg?alt=media&token=1477dcff-4990-4592-9f05-e31916dae15f
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Women's Wear

DOC: 636e30433dd7e
FIELD | id | type=String | value=636e30433dd7e
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Ffruits.png?alt=media&token=c11f1d6d-ab54-4b03-aac4-59371e17624c
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Fruits

DOC: 636e34286dd8d
FIELD | id | type=String | value=636e34286dd8d
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2F3d-realistic-cosmetic-bottle-ads-600w-725617681.webp?alt=media&token=1eccfc60-20d7-4385-a369-c9f387f8d8f5
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=ok

DOC: 637dfc9eae109
FIELD | id | type=String | value=637dfc9eae109
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fthumb2_1669201224369.jpg?alt=media&token=74766d1b-a105-46c8-ae72-143a1c7c6640
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dcf511651
FIELD | title | type=String | value=testcat

DOC: 638527080321b
FIELD | id | type=String | value=638527080321b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Felectric-car-charging-at-home-clean-energy-filling-technology_1669670698003.jpg?alt=media&token=e8a7743d-6f21-484d-9fc4-5cda3962bea9
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=631852d1bc978
FIELD | title | type=String | value=Carro

DOC: 63a2b7478c6a5
FIELD | id | type=String | value=63a2b7478c6a5
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdownload%20(2)_1671608196062.jpg?alt=media&token=fb097d1b-db64-4eca-a708-2d68626fdc0b
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Food

DOC: 63aaf0142902b
FIELD | id | type=String | value=63aaf0142902b
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fclassic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05_1672147010675.jpg?alt=media&token=bf036cbf-4fe3-4706-be05-2d1853f58942
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=بيتزا

DOC: 642441a252ab9
FIELD | id | type=String | value=642441a252ab9
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbbk_1680098833659.jpg?alt=media&token=fa3e78b7-20f2-4020-9cab-88bb743c080b
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Bakery

DOC: 644b996f2ff9a
FIELD | id | type=String | value=644b996f2ff9a
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fdownload_1682676204853.jpg?alt=media&token=9085c061-6e73-4281-8791-f6c13fa38b9e
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=thai 

DOC: 646ed350d0543
FIELD | id | type=String | value=646ed350d0543
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Falitas-pollo-al-horno-al-estilo-asiatico_1684984770055.jpg?alt=media&token=8ba35880-4b70-4177-9149-6de6f1f41529
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Alitas

DOC: 6478464d29935
FIELD | id | type=String | value=6478464d29935
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fzip-icon_1685603940993.png?alt=media&token=7fd5feaf-5817-4805-bf3b-24ece6c1c32f
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Digital

DOC: 6489e77d20754
FIELD | id | type=String | value=6489e77d20754
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fbeer-mug_1686759371944.png?alt=media&token=95899145-5bfd-4514-bb82-2de22ce05d97
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Cerveza

DOC: 648c25621d331
FIELD | id | type=String | value=648c25621d331
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgomart_1686906280346.png?alt=media&token=6d2b34e9-7a79-4215-afbc-b375b49e998b
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=Bancos

DOC: 64c9074ae6709
FIELD | id | type=String | value=64c9074ae6709
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fpotato-chips_1690896313395.jpeg?alt=media&token=8856bebd-fda9-477f-85a5-7e4f53bbb11c
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Chips

DOC: 64c9ee1921721
FIELD | id | type=String | value=64c9ee1921721
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fchips-lede_1690955352475.webp?alt=media&token=155a5969-10df-422c-ae56-2d949b32e338
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=food

DOC: 64ca436005cfd
FIELD | id | type=String | value=64ca436005cfd
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fmen_1_1690977151456.png?alt=media&token=1e0c362f-7c04-4801-9534-8e37d26096c5
FIELD | publish | type=boolean | value=false
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Watch

DOC: 64e2e7735131c
FIELD | id | type=String | value=64e2e7735131c
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fgrocery_1692592063335.jpg?alt=media&token=885a1333-6f21-49ca-b6fd-fe9c0c52620f
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=grocery

DOC: 64e38bac3e16c
FIELD | id | type=String | value=64e38bac3e16c
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FSANTA%20MARTA_1692634095327.png?alt=media&token=95756e83-2b32-4f7a-915d-31c862f43be7
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285ddbfd9598
FIELD | title | type=String | value=A Donde Ir

DOC: 88pNxhccktxkSgIndZ8e
FIELD | id | type=String | value=88pNxhccktxkSgIndZ8e
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Fcategories%2Fvegetables.png?alt=media&token=8e5ba80c-76d8-4da5-9bea-5a6d66c544a2
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Vegetables

DOC: OvjEAidyRSeuoH81pK4O
FIELD | id | type=String | value=OvjEAidyRSeuoH81pK4O
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Fcategories%2Fmeat.png?alt=media&token=5793ae4d-22e5-4fb7-ae4c-4177292146c4
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Meat

DOC: custom_akap_ticket_category
FIELD | createdAt | type=Timestamp | value={"_seconds":1782698859,"_nanoseconds":999000000}
FIELD | id | type=String | value=custom_akap_ticket_category
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=AKAP Ticket
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fburger.png?alt=media&token=b89d777c-109f-4235-bea3-a0ddd3b06838
FIELD | publish | type=Boolean | value=true
FIELD | sectionId | type=String | value=custom_akap_ticket
FIELD | section_id | type=String | value=custom_akap_ticket
FIELD | title | type=String | value=AKAP Ticket
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782698859,"_nanoseconds":999000000}

DOC: custom_laundry_category
FIELD | createdAt | type=Timestamp | value={"_seconds":1782698127,"_nanoseconds":967000000}
FIELD | id | type=String | value=custom_laundry_category
FIELD | isActive | type=Boolean | value=true
FIELD | name | type=String | value=Laundry Service
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fburger.png?alt=media&token=b89d777c-109f-4235-bea3-a0ddd3b06838
FIELD | publish | type=Boolean | value=true
FIELD | sectionId | type=String | value=custom_laundry_service
FIELD | section_id | type=String | value=custom_laundry_service
FIELD | title | type=String | value=Laundry Service
FIELD | updatedAt | type=Timestamp | value={"_seconds":1782698127,"_nanoseconds":967000000}

DOC: lNZkE309uNZB4v9jkChM
FIELD | id | type=String | value=lNZkE309uNZB4v9jkChM
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2FBags.png?alt=media&token=0d95ca40-4bdc-4133-aae0-12cc3effbfd8
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Bags

DOC: wxHH0kJnCExOI6sHaXvX
FIELD | id | type=String | value=wxHH0kJnCExOI6sHaXvX
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/images%2Fshoes.png?alt=media&token=2d323fc4-595e-43fa-9672-81712df12369
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6285dd3281531
FIELD | title | type=String | value=Shoes

DOC: zGhiepckNthq5FILtM4Eb
FIELD | id | type=String | value=zGhiepckNthq5FILtM4Eb
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Fcategories%2Fdrinks.png?alt=media&token=6fc9a3cb-6eea-4ec0-bfcd-996a8e96d593
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Drinks

DOC: zzq4LngLd8PWzYJfsvnjfV
FIELD | id | type=String | value=zzq4LngLd8PWzYJfsvnjfV
FIELD | photo | type=String | value=https://firebasestorage.googleapis.com/v0/b/gromart-5dd93.appspot.com/o/images%2Fcategories%2Fsnacks.png?alt=media&token=2f351210-9fee-4092-917a-27a04ad840fc
FIELD | publish | type=Boolean | value=true
FIELD | section_id | type=String | value=6319dc53314ee
FIELD | title | type=String | value=Snacks

FIELD_TYPE_SUMMARY:
createdAt => {"Timestamp":2}
description => {"String":54,"string":2}
id => {"String":56}
isActive => {"Boolean":2}
name => {"String":2}
order => {"Number":56}
photo => {"String":56}
publish => {"boolean":14,"Boolean":42}
review_attributes => {"array":56}
sectionId => {"String":2}
section_id => {"String":49,"null":7}
show_in_homepage => {"boolean":40,"Boolean":16}
title => {"String":56}
updatedAt => {"Timestamp":2}
TEXT_END

## 4. Sync Risk Rules
TEXT_START
RULE_PRODUCT_CREATEDAT: Customer product query uses orderBy(createdAt). Missing createdAt makes product invisible.
RULE_VENDOR_LOCATION: Vendor list/nearby fetch needs zoneId, latitude, longitude, coordinates.
RULE_VENDOR_CATEGORY_ARRAYS: categoryID/categoryId/categorys must be type-safe.
RULE_PRODUCT_ITEM_ATTRIBUTE: incomplete item_attribute can break product card variant UI.
RULE_PUBLISH_ACTIVE: Customer app filters publish/isActive.
RULE_ADMIN_SOURCE: Admin Web must write the same field names/types expected by Customer App.
TEXT_END

## Final Status
STATUS: SERVICE_47A_FIX1_ADMIN_FIREBASE_CUSTOMER_SYNC_MAP_AUDITED