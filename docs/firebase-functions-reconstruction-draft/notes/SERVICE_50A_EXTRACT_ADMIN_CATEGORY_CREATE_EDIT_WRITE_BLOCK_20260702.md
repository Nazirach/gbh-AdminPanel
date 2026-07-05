# SERVICE 50A EXTRACT ADMIN CATEGORY CREATE EDIT WRITE BLOCK

Generated: 07/02/2026 12:41:37
Mode: READ ONLY.
Admin path: C:\deploy\adminpanel

Purpose: extract exact vendor_categories write blocks before applying category normalizer.


## FILE: resources\views\categories\create.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\categories\create.blade.php:1:@extends('layouts.app')
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:2:@section('content')
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:3:<div class="page-wrapper">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:4:    <div class="row page-titles">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:5:        <div class="col-md-5 align-self-center">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:6:            <h3 
class="text-themecolor">{{trans('lang.category_plural')}}</h3>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:7:        </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:8:        <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:9:            <ol class="breadcrumb">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:10:                <li class="breadcrumb-item"><a href="{{ 
route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:11:                <li class="breadcrumb-item"><a href="{!! 
route('categories') !!}">{{trans('lang.category_plural')}}</a>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:12:                </li>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:13:                <li class="breadcrumb-item 
active">{{trans('lang.category_create')}}</li>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:14:            </ol>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:15:        </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:16:    </div>
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:17:    <div class="container-fluid">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:18:        <div class="cat-edite-page max-width-box">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:19:            <div class="card  pb-4">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:20:                <div class="card-header">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:21:                    <ul class="nav nav-tabs align-items-end 
card-header-tabs w-100">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:22:                        <li role="presentation" 
class="nav-item">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:23:                            <a href="#category_information" 
aria-controls="description" role="tab" data-toggle="tab"
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:24:                                class="nav-link 
active">{{trans('lang.category_information')}}</a>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:25:                        </li>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:26:                        <li role="presentation" 
class="nav-item">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:27:                            <a href="#review_attributes" 
aria-controls="review_attributes" role="tab" data-toggle="tab"
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:28:                                
class="nav-link">{{trans('lang.reviewattribute_plural')}}</a>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:29:                        </li>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:30:                    </ul>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:31:                </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:32:                <div class="card-body">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:33:                    <div class="error_top" 
style="display:none"></div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:34:                    <div class="row vendor_payout_create" 
role="tabpanel">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:35:                        <div 
class="vendor_payout_create-inner tab-content">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:36:                            <div role="tabpanel" 
class="tab-pane active" id="category_information">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:37:                                <fieldset>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:38:                                    
<legend>{{trans('lang.category_create')}}</legend>
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:39:                                    <div class="form-group 
row width-100">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:40:                                        <label class="col-3 
control-label">{{trans('lang.category_name')}}</label>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:41:                                        <div class="col-7">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:42:                                            <input 
type="text" class="form-control cat-name">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:43:                                            <div 
class="form-text text-muted">{{ trans("lang.category_name_help") }}
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:44:                                            </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:45:                                        </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:46:                                    </div>
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:47:                                    <div class="form-group 
row width-100">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:48:                                        <label
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:49:                                            class="col-3 
control-label ">{{trans('lang.category_description')}}</label>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:50:                                        <div class="col-7">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:51:                                            <textarea 
rows="7" class="category_description form-control"
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:52:                                                
id="category_description"></textarea>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:53:                                            <div 
class="form-text text-muted">{{ trans("lang.category_description_help")
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:54:                                                }}
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:55:                                            </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:56:                                        </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:57:                                    </div>
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:58:                                    <div class="form-group 
row width-100">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:59:                                        <label class="col-3 
control-label">{{trans('lang.category_image')}}</label>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:60:                                        <div class="col-7">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:61:                                            <input 
type="file" id="category_image">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:62:                                            <div 
class="placeholder_img_thumb cat_image"></div>
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:63:                                            <div 
id="uploding_image"></div>
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:64:                                            <div 
class="form-text text-muted w-50">{{ trans("lang.category_image_help")
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:65:                                                }}
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:66:                                            </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:67:                                        </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:68:                                    </div>
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:69:                                    <div class="form-check 
width-100">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:70:                                        <input 
type="checkbox" class="item_publish" id="item_publish">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:71:                                        <label class="col-3 
control-label"
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:72:                                            
for="item_publish">{{trans('lang.item_publish')}}</label>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:73:                                    </div>
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:74:                                    <div class="form-check 
row width-100" id="show_in_home" style="display: none;">
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:75:                                        <input 
type="checkbox" id="show_in_homepage">
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:76:                                        <label class="col-3 
control-label"
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:77:                                            
for="show_in_homepage">{{trans('lang.show_in_home')}}</label>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:78:                                        <div class="form-text 
text-muted w-50">{{trans('lang.show_in_home_desc')}}<span
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:79:                                                
id="forsection"></span></div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:80:                                    </div>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:81:                                </fieldset>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:82:                            </div>
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:83:                            <div role="tabpanel" 
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
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:110:    var photo = "";
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:111:    var fileName = '';
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:112:    var id_category = "<?php echo uniqid(); ?>";
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:113:    var category_length = 1;
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:114:    var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:115:    var placeholder = 
database.collection('settings').doc('placeHolderImage');
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:116:    var storageRef = firebase.storage().ref('images');
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:117:    placeholder.get().then(async function (snapshotsimage) {
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:118:        var placeholderImageData = snapshotsimage.data();
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:119:        placeholderImage = placeholderImageData.image;
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
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:134:            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:135:        })
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:136:        
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:137:        ref_review_attributes.get().then(async function 
(snapshots) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:138:            var ra_html = '';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:139:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:140:                var data = listval.data();
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:141:                ra_html += '<div class="form-check 
width-100">';
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:142:                ra_html += '<input type="checkbox" 
id="review_attribute_' + data.id + '" value="' + data.id + '">';
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:143:                ra_html += '<label class="col-3 
control-label" for="review_attribute_' + data.id + '">' + data.title + '</label>';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:144:                ra_html += '</div>';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:145:            })
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:146:            $('#review_attributes').html(ra_html);
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:147:        })
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:148:
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:149:        $(".save-setting-btn").click(async function () {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:150:
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:151:            var title = $(".cat-name").val();
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
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:163:            if (title == '') {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:164:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:165:                $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:166:                
$(".error_top").append("<p>{{trans('lang.enter_cat_title_error')}}</p>");
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:167:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:168:            } else if (photo == '') {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:169:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:170:                $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:171:                
$(".error_top").append("<p>{{trans('lang.upload_image_error')}}</p>");
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
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:185:                    storeImageData().then(IMG => {
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:186:                        
database.collection('vendor_categories').doc(id_category).set({
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:187:                            'id': id_category,
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:188:                            'title': title,
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:189:                            'description': description,
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:190:                            'photo': IMG,
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
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:200:                        
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
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:216:                var val = 
$('#category_image').val().toLowerCase();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:217:                var ext = val.split('.')[1];
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:218:                var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:219:                var filename = 
$('#category_image').val().replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:220:                var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:221:                var filename = filename.split('.')[0] + "_" 
+ timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:222:                var uploadTask = 
storageRef.child(filename).put(theFile);
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:223:                uploadTask.on('state_changed', function 
(snapshot) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:224:                    var progress = 
(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:225:                }, function (error) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:226:                }, function () {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:227:                    
uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:228:                        
jQuery("#uploding_image").text("{{trans('lang.upload_is_completed')}}");
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:229:                        photo = downloadURL;
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:230:                        $(".cat_image").empty();
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:231:                        $(".cat_image").append('<img 
class="rounded" style="width:50px" src="' + photo + '" alt="image">');
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:232:                    });
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:233:                });
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:234:            };
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:235:        })(f);
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:236:        reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:237:    }
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:238:    //upload image with compression
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:239:    $("#category_image").resizeImg({
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:240:        callback: function (base64str) {
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:241:            var val = 
$('#category_image').val().toLowerCase();
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:242:            var ext = val.split('.')[1];
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:243:            var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:244:            var filename = 
$('#category_image').val().replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:245:            var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:246:            var filename = filename.split('.')[0] + "_" + 
timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:247:            photo = base64str;
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:248:            fileName = filename;
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:249:            $(".cat_image").empty();
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:250:            $(".cat_image").append('<img class="rounded" 
style="width:50px" src="' + photo + '" alt="image">');
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:251:            $("#category_image").val('');
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:252:        }
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:253:    });
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:254:    async function storeImageData() {
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:255:        var newPhoto = '';
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:256:        try {
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:257:            photo = 
photo.replace(/^data:image\/[a-z]+;base64,/, "")
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:258:            var uploadTask = await 
storageRef.child(fileName).putString(photo, 'base64', { contentType: 'image/jpg' });
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:259:            var downloadURL = await 
uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:260:            newPhoto = downloadURL;
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:261:            photo = downloadURL;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:262:        } catch (error) {
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:263:            console.log("ERR ===", error);
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:264:        }
> C:\deploy\adminpanel\resources\views\categories\create.blade.php:265:        return newPhoto;
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:266:    }
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:267:</script>
  C:\deploy\adminpanel\resources\views\categories\create.blade.php:268:@endsection



TEXT_END

## FILE: resources\views\categories\edit.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:1:@extends('layouts.app')
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:2:@section('content')
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:3:<div class="page-wrapper">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:4:    <div class="row page-titles">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:5:        <div class="col-md-5 align-self-center">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:6:            <h3 
class="text-themecolor">{{trans('lang.category_plural')}}</h3>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:7:        </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:8:        <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:9:            <ol class="breadcrumb">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:10:                <li class="breadcrumb-item"><a href="{{ 
route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:11:                <li class="breadcrumb-item"><a href="{!! 
route('categories') !!}">{{trans('lang.category_plural')}}</a>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:12:                </li>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:13:                <li class="breadcrumb-item 
active">{{trans('lang.category_edit')}}</li>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:14:            </ol>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:15:        </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:16:    </div>
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:17:    <div class="container-fluid">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:18:        <div class="cat-edite-page max-width-box">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:19:            <div class="card  pb-4">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:20:                <div class="card-header">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:21:                    <ul class="nav nav-tabs align-items-end 
card-header-tabs w-100">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:22:                        <li role="presentation" 
class="nav-item">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:23:                            <a href="#category_information" 
aria-controls="category_information" role="tab"
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:24:                                data-toggle="tab" 
class="nav-link active"><i class="ri-list-indefinite"></i> {{trans('lang.category_information')}}</a>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:25:                        </li>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:26:                        <li role="presentation" 
class="nav-item">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:27:                            <a href="#review_attributes" 
aria-controls="review_attributes" role="tab" data-toggle="tab"
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:28:                                class="nav-link"><i 
class="ri-list-check"></i> {{trans('lang.reviewattribute_plural')}}</a>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:29:                        </li>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:30:                    </ul>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:31:                </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:32:                <div class="card-body">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:33:                    <div class="error_top" 
style="display:none"></div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:34:                    <div class="row vendor_payout_create" 
role="tabpanel">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:35:                        <div class="vendor_payout_create-inner 
tab-content category_edit_div">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:36:                            <div role="tabpanel" 
class="tab-pane active" id="category_information">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:37:                                <fieldset>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:38:                                    
<legend>{{trans('lang.category_edit')}}</legend>
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:39:                                    <div class="form-group row 
width-100">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:40:                                        <label class="col-3 
control-label">{{trans('lang.category_name')}}</label>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:41:                                        <div class="col-7">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:42:                                            <input type="text" 
class="form-control cat-name">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:43:                                            <div 
class="form-text text-muted">{{ trans("lang.category_name_help") }}
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:44:                                            </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:45:                                        </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:46:                                    </div>
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:47:                                    <div class="form-group row 
width-100">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:48:                                        <label
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:49:                                            class="col-3 
control-label ">{{trans('lang.category_description')}}</label>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:50:                                        <div class="col-7">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:51:                                            <textarea rows="7" 
class="category_description form-control"
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:52:                                                
id="category_description"></textarea>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:53:                                            <div 
class="form-text text-muted">{{ trans("lang.category_description_help")
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:54:                                                }}
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:55:                                            </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:56:                                        </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:57:                                    </div>
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:58:                                    <div class="form-group row 
width-100">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:59:                                        <label class="col-3 
control-label">{{trans('lang.category_image')}}</label>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:60:                                        <div class="col-7">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:61:                                            <input type="file" 
id="category_image">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:62:                                            <div 
class="placeholder_img_thumb cat_image"></div>
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:63:                                            <div 
id="uploding_image"></div>
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:64:                                            <div 
class="form-text text-muted w-50">{{ trans("lang.category_image_help")
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:65:                                                }}
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:66:                                            </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:67:                                        </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:68:                                    </div>
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:69:                                    <div class="form-check 
width-100">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:70:                                        <input type="checkbox" 
class="item_publish" id="item_publish">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:71:                                        <label class="col-3 
control-label"
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:72:                                            
for="item_publish">{{trans('lang.item_publish')}}</label>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:73:                                    </div>
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:74:                                    <div class="form-check row 
width-100" id="show_in_home" style="display: none;">
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:75:                                        <input type="checkbox" 
id="show_in_homepage">
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:76:                                        <label class="col-3 
control-label"
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:77:                                            
for="show_in_homepage">{{trans('lang.show_in_home')}}</label>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:78:                                        <div class="form-text 
text-muted w-50">{{trans('lang.show_in_home_desc')}}
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:79:                                            <span 
id="forsection"></span>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:80:                                        </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:81:                                    </div>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:82:                                </fieldset>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:83:                            </div>
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:84:                            <div role="tabpanel" 
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
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:106:    var id = "<?php echo $id; ?>";
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:107:    var database = firebase.firestore();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:108:    
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:109:    var ref = 
database.collection('vendor_categories').where("id", "==", id);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:110:    var ref_review_attributes = 
database.collection('review_attributes');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:111:    var selected_review_attributes = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:112:    var category = '';
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:113:    var photo = "";
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:114:    var fileName = '';
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:115:    var catImageFile = "";
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:116:    var placeholderImage = '';
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:117:    var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:118:    var storage = firebase.storage();
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:119:    var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:120:    var order = 0;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:121:    let sectionData = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:122:
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:123:    placeholder.get().then(async function (snapshotsimage) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:124:        var placeholderImageData = snapshotsimage.data();
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:125:        placeholderImage = placeholderImageData.image;
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
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:141:                $(".cat-name").val(category.title);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:142:                order = category.order;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:143:                
$(".category_description").val(category.description);
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:144:                if (category.section_id != undefined) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:145:                    $("#section_id").val(category.section_id);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:146:                }
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:147:                photo = category.photo;
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:148:                if (photo != '' && photo != null) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:149:                    catImageFile = category.photo;
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:150:                    $(".cat_image").append('<img 
class="rounded" style="width:50px" src="' + photo + '" alt="image" onerror="this.onerror=null;this.src=\'' + placeholderImage + 
'\'">');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:151:                } else {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:152:                    $(".cat_image").append('<img 
class="rounded" style="width:50px" src="' + placeholderImage + '" alt="image">');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:153:                }
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:154:                if (category.publish) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:155:                    $(".item_publish").prop('checked', true);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:156:                }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:157:                if (category.show_in_homepage) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:158:                    $("#show_in_homepage").prop('checked', 
true);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:159:                }
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:160:                $("#forsection").text(" for " + 
sectionData.name + " section");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:161:            }
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:162:            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:163:        })
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:164:
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:165:        ref_review_attributes.get().then(async function 
(snapshots) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:166:            var ra_html = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:167:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:168:                var data = listval.data();
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:169:                ra_html += '<div class="form-check width-100" 
>';
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:170:                var checked = $.inArray(data.id, 
category.review_attributes) !== -1 ? 'checked' : '';
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:171:                ra_html += '<input type="checkbox" 
id="review_attribute_' + data.id + '" value="' + data.id + '" ' + checked + '>';
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:172:                ra_html += '<label class="col-3 control-label" 
for="review_attribute_' + data.id + '">' + data.title + '</label>';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:173:                ra_html += '</div>';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:174:            })
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:175:            $('#review_attributes').html(ra_html);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:176:        })
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:177:        
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:178:        $(".edit-setting-btn").click(async function () {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:179:            var title = $(".cat-name").val();
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
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:189:            if (title == '') {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:190:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:191:                $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:192:                
$(".error_top").append("<p>{{trans('lang.enter_cat_title_error')}}</p>");
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:193:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:194:            } else if (photo == '') {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:195:                $(".error_top").show();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:196:                $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:197:                
$(".error_top").append("<p>{{trans('lang.upload_image_error')}}</p>");
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
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:211:                    storeImageData().then(IMG => {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:212:                        
database.collection('vendor_categories').doc(id).update({
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:213:                            'title': title,
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:214:                            'description': description,
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:215:                            'photo': IMG,
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
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:224:                        
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
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:241:                var val = 
$('#category_image').val().toLowerCase();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:242:                var ext = val.split('.')[1];
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:243:                var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:244:                var filename = 
$('#category_image').val().replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:245:                var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:246:                var filename = filename.split('.')[0] + "_" + 
timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:247:                var uploadTask = 
storageRef.child(filename).put(theFile);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:248:                uploadTask.on('state_changed', function 
(snapshot) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:249:                    var progress = (snapshot.bytesTransferred 
/ snapshot.totalBytes) * 100;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:250:                }, function (error) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:251:                }, function () {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:252:                    
uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:253:                        
jQuery("#uploding_image").text("{{trans('lang.upload_is_completed')}}");
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:254:                        photo = downloadURL;
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:255:                        $(".cat_image").empty();
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:256:                        $(".cat_image").append('<img 
class="rounded" style="width:50px" src="' + photo + '" alt="image" onerror="this.onerror=null;this.src=\'' + placeholderImage + 
'\'">');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:257:                    });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:258:                });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:259:            };
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:260:        })(f);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:261:        reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:262:    }
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:263:    //upload image with compression
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:264:    $("#category_image").resizeImg({
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:265:        callback: function (base64str) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:266:            var val = $('#category_image').val().toLowerCase();
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:267:            var ext = val.split('.')[1];
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:268:            var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:269:            var filename = 
$('#category_image').val().replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:270:            var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:271:            var filename = filename.split('.')[0] + "_" + 
timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:272:            photo = base64str;
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:273:            fileName = filename;
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:274:            $(".cat_image").empty();
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:275:            $(".cat_image").append('<img class="rounded" 
style="width:50px" src="' + photo + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'" alt="image">');
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:276:            $("#category_image").val('');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:277:        }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:278:    });
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:279:    async function storeImageData() {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:280:        var newPhoto = '';
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:281:        try {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:282:            if (catImageFile != "" && photo != catImageFile) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:283:                var catOldImageUrlRef = await 
storage.refFromURL(catImageFile);
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:284:                imageBucket = catOldImageUrlRef.bucket;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:285:                var envBucket = "<?php echo 
env('FIREBASE_STORAGE_BUCKET'); ?>";
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:286:                if (imageBucket == envBucket) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:287:                    await catOldImageUrlRef.delete().then(() 
=> {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:288:                        console.log("Old file deleted!")
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:289:                    }).catch((error) => {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:290:                        console.log("ERR File delete ===", 
error);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:291:                    });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:292:                } else {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:293:                    console.log('Bucket not matched');
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:294:                }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:295:            }
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:296:            if (photo != catImageFile) {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:297:                photo = 
photo.replace(/^data:image\/[a-z]+;base64,/, "")
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:298:                var uploadTask = await 
storageRef.child(fileName).putString(photo, 'base64', { contentType: 'image/jpg' });
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:299:                var downloadURL = await 
uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:300:                newPhoto = downloadURL;
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:301:                photo = downloadURL;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:302:            } else {
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:303:                newPhoto = photo;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:304:            }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:305:        } catch (error) {
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:306:            console.log("ERR ===", error);
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:307:        }
> C:\deploy\adminpanel\resources\views\categories\edit.blade.php:308:        return newPhoto;
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:309:    }
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:310:</script>
  C:\deploy\adminpanel\resources\views\categories\edit.blade.php:311:@endsection



TEXT_END

## FILE: resources\views\categories\index.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\categories\index.blade.php:1:@extends('layouts.app')
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:2:@section('content')
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:3:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:4:<div class="page-wrapper">
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:5:    <div class="row page-titles">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:6:        <div class="col-md-5 align-self-center">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:7:            <h3 
class="text-themecolor">{{trans('lang.category_plural')}}</h3>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:8:        </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:9:        <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:10:            <ol class="breadcrumb">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:11:                <li class="breadcrumb-item"><a href="{{ 
route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:12:                <li class="breadcrumb-item 
active">{{trans('lang.category_table')}}</li>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:13:            </ol>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:14:        </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:15:        <div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:16:        </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:17:    </div>
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:18:    <div class="container-fluid">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:19:       
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:20:       <div class="admin-top-section"> 
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:21:        <div class="row">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:22:            <div class="col-12">
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:23:                <div class="d-flex top-title-section pb-4 
justify-content-between">
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:24:                    <div class="d-flex top-title-left 
align-self-center">
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:25:                        <span class="icon mr-3"><img src="{{ 
asset('images/category.png') }}"></span>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:26:                        <h3 
class="mb-0">{{trans('lang.category_plural')}}</h3>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:27:                        <span class="counter ml-3 
total_count"></span>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:28:                    </div>  
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:29:                    <div class="d-flex top-title-right 
align-self-center"> 
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:30:                    
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:31:                    </div>                   
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:32:                </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:33:            </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:34:        </div> 
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:35:    
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:36:       </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:37:       <div class="table-list">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:38:       <div class="row">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:39:           <div class="col-12">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:40:               <div class="card border">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:41:                 <div class="card-header d-flex 
justify-content-between align-items-center border-0">
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:42:                   <div class="card-header-title">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:43:                    <h3 class="text-dark-2 mb-2 
h4">{{trans('lang.category_table')}}</h3>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:44:                    <p class="mb-0 
text-dark-2">{{trans('lang.category_table_text')}}</p>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:45:                   </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:46:                   <div class="card-header-right d-flex 
align-items-center">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:47:                    <div class="card-header-btn mr-3">         
            
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:48:                        <a class="btn-primary btn 
rounded-full" href="{!! route('categories.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.category_create')}}</a>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:49:                     </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:50:                   </div>                
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:51:                 </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:52:                 <div class="card-body">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:53:                         <div class="table-responsive m-t-10">
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:54:                            <table id="categoryTable"
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:55:                                   class="display nowrap table 
table-hover table-striped table-bordered table table-striped"
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:56:                                   cellspacing="0" 
width="100%">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:57:                                <thead>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:58:                                <tr>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:59:                                    <?php if 
(in_array('categories.delete', json_decode(@session('user_permissions'),true))) { ?>
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:60:                                    <th 
class="delete-all"><input type="checkbox" id="is_active"><label class="col-3 control-label" for="is_active"><a id="deleteAll"
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:61:                                    class="do_not_delete" 
href="javascript:void(0)"><i class="mdi mdi-delete"></i> {{trans('lang.all')}}</a></label></th>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:62:                                    <?php } ?>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:63:                                    
<th>{{trans('lang.category_info')}}</th>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:64:                                  
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:65:                                    
<th>{{trans('lang.item')}}</th>
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:66:                                    <th> 
{{trans('lang.item_publish')}}</th>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:67:                                    
<th>{{trans('lang.actions')}}</th>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:68:                                </tr>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:69:                                </thead>  
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:70:                                <tbody id="append_list1">
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:71:                                </tbody>                       
      
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:72:                            </table>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:73:                        </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:74:                    </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:75:                </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:76:            </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:77:        </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:78:        </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:79:    </div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:80:</div>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:81:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:82:@endsection
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:83:@section('scripts')
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:84:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:85:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:86:
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
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:98:    if (!window.firebaseClientReady || !window.firebaseDb) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:99:        console.warn('Firebase client is not ready. Please 
check Firebase configuration.');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:100:    } else {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:101:    var database = window.firebaseDb;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:102:    var offest = 1;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:103:    var pagesize = 10;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:104:    var end = null;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:105:    var endarray = [];
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:106:    var start = null;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:107:    var user_number = [];
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:108:    var ref = database.collection('vendor_categories');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:109:    
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:110:    if(section_id){
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:111:        ref = ref.where('section_id','==',section_id);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:112:    }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:113:    
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:114:    var append_list = '';
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:115:    var placeholderImage = '';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:116:    
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:117:    let selected_gender = "";
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:118:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:119:    $(document).ready(function () {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:120:        var inx = parseInt(offest) * parseInt(pagesize);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:121:        jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:122:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:123:        var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:124:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:125:        placeholder.get().then(async function 
(snapshotsimage) {
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:126:            var placeholderImageData = snapshotsimage.data();
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:127:            placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:128:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:129:        })
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:130:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:131:        $('.sections').select2({
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:132:            placeholder: "{{trans('lang.select')}} 
{{trans('lang.section_plural')}}",  
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:133:            minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:134:            allowClear: true 
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:135:        });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:136:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:137:        $('select').on("select2:unselecting", function(e) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:138:            var self = $(this);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:139:            setTimeout(function() {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:140:                self.select2('close');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:141:            }, 0);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:142:        });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:143:         
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:144:        //start
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:145:        const table = $('#categoryTable').DataTable({
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:146:            pageLength: 10, // Number of rows per page
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:147:            processing: false, // Show processing indicator
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:148:            serverSide: true, // Enable server-side processing
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:149:            responsive: true,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:150:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:151:            ajax: async function (data, callback, settings) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:152:                const start = data.start;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:153:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:154:                const length = data.length;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:155:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:156:                const searchValue = 
data.search.value.toLowerCase();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:157:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:158:                const orderColumnIndex = data.order[0].column;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:159:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:160:                const orderDirection = data.order[0].dir;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:161:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:162:               const orderableColumns = 
(checkDeletePermission) ? ['', 'title', 'totalProducts', '', ''] : ['title', 'totalProducts', '', ''];
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:163:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:164:                const orderByField = 
orderableColumns[orderColumnIndex]; // Adjust the index to match your table
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:165:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:166:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:167:                if (searchValue.length >= 3 || 
searchValue.length === 0) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:168:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:169:                    $('#data-table_processing').show();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:170:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:171:                }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:172:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:173:                await ref.get().then(async function 
(querySnapshot) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:174:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:175:                    if (querySnapshot.empty) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:176:                        $('.total_count').text(0);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:177:                        console.error("No data found in 
Firestore.");
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:178:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:179:                        $('#data-table_processing').hide(); 
// Hide loader
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:180:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:181:                        callback({
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:182:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:183:                            draw: data.draw,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:184:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:185:                            recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:186:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:187:                            recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:188:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:189:                            data: [] // No data
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:190:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:191:                        });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:192:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:193:                        return;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:194:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:195:                    }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:196:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:197:                    let records = [];
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:198:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:199:                    let filteredRecords = [];
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:200:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:201:                    await 
Promise.all(querySnapshot.docs.map(async (doc) => {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:202:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:203:                        let childData = doc.data();
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:204:                        childData.id = doc.id; // Ensure the 
document ID is included in the data
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:205:                        var sectionName = '';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:206:
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
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:216:                                (childData.title && 
childData.title.toString().toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:217:                                (childData.totalProducts && 
childData.totalProducts.toString().includes(searchValue))
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:218:                               
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:219:                            ) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:220:                                
filteredRecords.push(childData);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:221:                            }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:222:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:223:                        } else {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:224:                            filteredRecords.push(childData);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:225:                        }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:226:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:227:                    }));
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:228:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:229:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:230:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:231:                    filteredRecords.sort((a, b) => {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:232:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:233:                        let aValue = a[orderByField] ? 
a[orderByField].toString().toLowerCase() : '';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:234:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:235:                        let bValue = b[orderByField] ? 
b[orderByField].toString().toLowerCase() : '';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:236:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:237:                        if (orderByField === 'totalProducts') 
{
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:238:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:239:                            aValue = a[orderByField] ? 
parseInt(a[orderByField]) : 0;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:240:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:241:                            bValue = b[orderByField] ? 
parseInt(b[orderByField]) : 0;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:242:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:243:                        }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:244:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:245:                        if (orderDirection === 'asc') {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:246:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:247:                            return (aValue > bValue) ? 1 : -1;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:248:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:249:                        } else {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:250:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:251:                            return (aValue < bValue) ? 1 : -1;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:265:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:266:                        records.push(getData);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:267:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:268:                    }));
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:269:                     $(function () {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:270:                                
$('[data-toggle="tooltip"]').tooltip();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:271:                            });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:272:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:273:                    $('#data-table_processing').hide(); // 
Hide loader
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:274:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:275:                    callback({
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:276:                        draw: data.draw,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:277:                        recordsTotal: totalRecords, // Total 
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
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:285:                    console.error("Error fetching data from 
Firestore:", error);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:286:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:287:                    $('#data-table_processing').hide(); // 
Hide loader
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:288:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:289:                    callback({
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:290:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:291:                        draw: data.draw,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:292:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:293:                        recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:294:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:295:                        recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:296:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:297:                        data: [] // No data due to error
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:298:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:299:                    });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:300:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:301:                });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:302:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:303:            },
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:304:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:305:            order: (checkDeletePermission) ? [1, 'asc'] : [0, 
'asc'],
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:306:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:307:            columnDefs: [
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:308:                {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:309:                    orderable: false,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:310:                    targets: (checkDeletePermission==true) ? 
[0,3,4] : [2,3]
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:311:                },
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:312:            ],
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:313:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:314:            "language": datatableLang,
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:315:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:316:        });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:317:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:318:        table.columns.adjust().draw();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:319:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:320:        function debounce(func, wait) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:321:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:322:            let timeout;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:359:    });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:360:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:361:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:362:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:363:    async function buildHTML(val) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:364:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:365:        var html = [];
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:366:        newdate = '';
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:367:        var id = val.id;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:368:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:369:        var route1 = '{{route("categories.edit",":id")}}';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:370:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:371:        route1 = route1.replace(':id', id);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:372:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:373:        if (checkDeletePermission) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:374:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:375:            html.push('<td class="delete-all"><input 
type="checkbox" id="is_open_' + id + '" class="is_open" dataId="' + id + '"><label class="col-3 control-label"\n' + 'for="is_open_' 
+ id + '" ></label></td>  ');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:376:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:377:        }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:378:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:379:        if (val.photo == '') {
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:380:            html.push('<td><img class="rounded" 
style="width:50px" src="' + placeholderImage + '" alt="image"></td>  <a href="' + route1 + '" class="left_space">' + val.title + 
'</a>');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:381:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:382:        } else {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:383:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:384:            html.push('<td><img class="rounded" 
style="width:50px" src="' + val.photo + '" alt="image" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></td>  <a 
href="' + route1 + '" class="left_space">' + val.title + '</a>');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:385:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:386:        }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:387:
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
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:400:            html.push('<td><label class="switch"><input 
type="checkbox" checked id="' + val.id + '" name="isSwitch"><span class="slider round"></span></label></td>');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:401:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:402:        } else {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:403:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:404:            html.push('<td><label class="switch"><input 
type="checkbox" id="' + val.id + '" name="isSwitch"><span class="slider round"></span></label></td>');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:405:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:406:        }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:407:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:408:        var action = '';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:409:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:410:        action = action + '<span class="action-btn"><a 
href="' + route1 + '" data-toggle="tooltip" title="{{trans("lang.edit")}}"><i class="mdi mdi-lead-pencil"></i></a>';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:411:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:412:        if (checkDeletePermission) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:413:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:414:            action = action + '<a id="' + val.id + '" 
name="category-delete" class="delete-btn" href="javascript:void(0)" data-toggle="tooltip" title="{{trans("lang.delete")}}"><i 
class="mdi mdi-delete"></i></a>';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:415:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:416:        }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:417:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:418:        action = action + '</span>';
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:419:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:420:        html.push(action)
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:421:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:422:        return html;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:423:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:424:    }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:425:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:426:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:427:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:428:    /* toggal publish action code start*/
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:429:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:430:    $(document).on("click", "input[name='isSwitch']", 
function (e) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:431:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:432:        var ischeck = $(this).is(':checked');
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:433:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:434:        var id = this.id;
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
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:461:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:462:    });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:463:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:464:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:465:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:466:    /*toggal publish action code end*/
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:467:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:468:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:469:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:470:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:471:async function getProductTotal(id) {
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:472:    const productSnapshots = await 
database.collection('vendor_products').where('categoryID', '==', id).get();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:473:    return productSnapshots.docs.length;
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:474:}
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:475:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:476:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:477:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:478:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:479:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:480:    $(document).on("click", "a[name='category-delete']", 
async function (e) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:481:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:482:        var id = this.id;
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
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:503:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:504:        setCookie('pagesizes', value, 30);
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:505:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:506:        location.reload();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:507:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:508:    }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:509:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:510:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:511:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:512:    $("#is_active").click(function () {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:513:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:514:        $("#categoryTable .is_open").prop('checked', 
$(this).prop('checked'));
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:515:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:516:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:517:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:518:    });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:519:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:520:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:521:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:522:    $("#deleteAll").click(function () {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:523:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:524:        if ($('#categoryTable .is_open:checked').length) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:525:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:526:            if 
(confirm("{{trans('lang.selected_delete_alert')}}")) {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:527:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:528:                jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:529:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:530:                $('#categoryTable 
.is_open:checked').each(async function () {
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:531:
> C:\deploy\adminpanel\resources\views\categories\index.blade.php:532:                    var dataId = $(this).attr('dataId');
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
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:543:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:544:            alert("{{trans('lang.select_delete_alert')}}");
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:545:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:546:        }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:547:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:548:    });
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:549:
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:550:    }
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:551:</script>
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:552:@endsection
  C:\deploy\adminpanel\resources\views\categories\index.blade.php:553:



TEXT_END

## FILE: resources\views\vendor_categories\create.blade.php
TEXT_START
FILE_NOT_FOUND
TEXT_END

## FILE: resources\views\vendor_categories\edit.blade.php
TEXT_START
FILE_NOT_FOUND
TEXT_END

## FILE: resources\views\vendor_categories\index.blade.php
TEXT_START
FILE_NOT_FOUND
TEXT_END

## Patch Target Decision
TEXT_START
TARGET_CATEGORY_CREATE_EDIT: locate actual vendor_categories create/edit files.
REQUIRED_CATEGORY_FIELDS: id, title/name, section_id, photo safe string, publish, createdAt, updatedAt.
TEXT_END

STATUS: SERVICE_50A_ADMIN_CATEGORY_WRITE_BLOCK_EXTRACTED