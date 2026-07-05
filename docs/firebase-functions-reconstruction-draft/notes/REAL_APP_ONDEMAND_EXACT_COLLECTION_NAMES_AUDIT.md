# ONDEMAND EXACT COLLECTION NAMES AUDIT

Generated: 06/29/2026 00:43:20

Mode: read-only. No patch. No Firebase write.

## Files Checked
```text
C:\deploy\adminpanel\resources\views\OnDemandService\categories\create.blade.php
C:\deploy\adminpanel\resources\views\OnDemandService\categories\edit.blade.php
C:\deploy\adminpanel\resources\views\OnDemandService\categories\index.blade.php
C:\deploy\adminpanel\resources\views\OnDemandService\services\create.blade.php
C:\deploy\adminpanel\resources\views\OnDemandService\services\edit.blade.php
C:\deploy\adminpanel\resources\views\OnDemandService\services\index.blade.php
C:\deploy\adminpanel\resources\views\OnDemandService\workers\create.blade.php
C:\deploy\adminpanel\resources\views\OnDemandService\workers\edit.blade.php
C:\deploy\adminpanel\resources\views\OnDemandService\workers\index.blade.php
C:\deploy\adminpanel\app\Http\Controllers\OnDemandServiceController.php
```

## Exact Context

### FILE: C:\deploy\adminpanel\resources\views\OnDemandService\categories\create.blade.php
```text
3: <div class="page-wrapper">
4:     <div class="row page-titles">
5:         <div class="col-md-5 align-self-center">
6:             <h3 class="text-themecolor">{{trans('lang.category_plural')}}</h3>
7:         </div>
8:         <div class="col-md-7 align-self-center">
9:             <ol class="breadcrumb">
10:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
11:                 <li class="breadcrumb-item"><a
12:                         href="{!! route('ondemandcategory') !!}">{{trans('lang.category_plural')}}</a>

9:             <ol class="breadcrumb">
10:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
11:                 <li class="breadcrumb-item"><a
12:                         href="{!! route('ondemandcategory') !!}">{{trans('lang.category_plural')}}</a>
13:                 </li>
14:                 <li class="breadcrumb-item active">{{trans('lang.category_create')}}</li>
15:             </ol>
16:         </div>
17:     </div>
18:     <div class="container-fluid">

11:                 <li class="breadcrumb-item"><a
12:                         href="{!! route('ondemandcategory') !!}">{{trans('lang.category_plural')}}</a>
13:                 </li>
14:                 <li class="breadcrumb-item active">{{trans('lang.category_create')}}</li>
15:             </ol>
16:         </div>
17:     </div>
18:     <div class="container-fluid">
19:         <div class="cat-edite-page max-width-box">
20:             <div class="card  pb-4">

21:                 <div class="card-header">
22:                     <ul class="nav nav-tabs align-items-end card-header-tabs w-100">
23:                         <li role="presentation" class="nav-item">
24:                             <a href="#category_information" aria-controls="description" role="tab" data-toggle="tab"
25:                                 class="nav-link active">{{trans('lang.category_create')}}</a>
26:                         </li>
27:                     </ul>
28:                 </div>
29:                 <div class="card-body">
30:                     <div class="error_top" style="display:none"></div>

22:                     <ul class="nav nav-tabs align-items-end card-header-tabs w-100">
23:                         <li role="presentation" class="nav-item">
24:                             <a href="#category_information" aria-controls="description" role="tab" data-toggle="tab"
25:                                 class="nav-link active">{{trans('lang.category_create')}}</a>
26:                         </li>
27:                     </ul>
28:                 </div>
29:                 <div class="card-body">
30:                     <div class="error_top" style="display:none"></div>
31:                     <div class="row vendor_payout_create" role="tabpanel">

30:                     <div class="error_top" style="display:none"></div>
31:                     <div class="row vendor_payout_create" role="tabpanel">
32:                         <div class="vendor_payout_create-inner tab-content">
33:                             <div role="tabpanel" class="tab-pane active" id="category_information">
34:                                 <fieldset>
35:                                     <legend>{{trans('lang.category_create')}}</legend>
36:                                     <div class="form-group row width-50">
37:                                         <label class="col-3 control-label">{{trans('lang.category_name')}}</label>
38:                                         <div class="col-7">
39:                                             <input type="text" class="form-control cat-name">

32:                         <div class="vendor_payout_create-inner tab-content">
33:                             <div role="tabpanel" class="tab-pane active" id="category_information">
34:                                 <fieldset>
35:                                     <legend>{{trans('lang.category_create')}}</legend>
36:                                     <div class="form-group row width-50">
37:                                         <label class="col-3 control-label">{{trans('lang.category_name')}}</label>
38:                                         <div class="col-7">
39:                                             <input type="text" class="form-control cat-name">
40:                                             <div class="form-text text-muted">{{ trans("lang.category_name_help") }}
41:                                             </div>

34:                                 <fieldset>
35:                                     <legend>{{trans('lang.category_create')}}</legend>
36:                                     <div class="form-group row width-50">
37:                                         <label class="col-3 control-label">{{trans('lang.category_name')}}</label>
38:                                         <div class="col-7">
39:                                             <input type="text" class="form-control cat-name">
40:                                             <div class="form-text text-muted">{{ trans("lang.category_name_help") }}
41:                                             </div>
42:                                         </div>
43:                                     </div>

37:                                         <label class="col-3 control-label">{{trans('lang.category_name')}}</label>
38:                                         <div class="col-7">
39:                                             <input type="text" class="form-control cat-name">
40:                                             <div class="form-text text-muted">{{ trans("lang.category_name_help") }}
41:                                             </div>
42:                                         </div>
43:                                     </div>
44:                                     <div class="form-group row width-50">
45:                                         <label class="col-3 control-label ">{{trans('lang.select_parent_category')}}</label>
46:                                         <div class="col-7">

42:                                         </div>
43:                                     </div>
44:                                     <div class="form-group row width-50">
45:                                         <label class="col-3 control-label ">{{trans('lang.select_parent_category')}}</label>
46:                                         <div class="col-7">
47:                                             <select name="parent_category_id" id="parent_category_id"
48:                                                 class="form-control">
49:                                                 <option value="">{{trans('lang.select_category')}}</option>
50:                                             </select>
51:                                         </div>

44:                                     <div class="form-group row width-50">
45:                                         <label class="col-3 control-label ">{{trans('lang.select_parent_category')}}</label>
46:                                         <div class="col-7">
47:                                             <select name="parent_category_id" id="parent_category_id"
48:                                                 class="form-control">
49:                                                 <option value="">{{trans('lang.select_category')}}</option>
50:                                             </select>
51:                                         </div>
52:                                     </div>
53:                                     <div class="form-group row width-100">

46:                                         <div class="col-7">
47:                                             <select name="parent_category_id" id="parent_category_id"
48:                                                 class="form-control">
49:                                                 <option value="">{{trans('lang.select_category')}}</option>
50:                                             </select>
51:                                         </div>
52:                                     </div>
53:                                     <div class="form-group row width-100">
54:                                         <label class="col-3 control-label">{{trans('lang.category_image')}}</label>
55:                                         <div class="col-7">

51:                                         </div>
52:                                     </div>
53:                                     <div class="form-group row width-100">
54:                                         <label class="col-3 control-label">{{trans('lang.category_image')}}</label>
55:                                         <div class="col-7">
56:                                             <input type="file" id="category_image" onChange="handleFileSelect(event)">
57:                                             <div class="placeholder_img_thumb cat_image"></div>
58:                                             <div id="uploding_image"></div>
59:                                             <div class="form-text text-muted w-50">{{ trans("lang.category_image_help")
60:                                                 }}

53:                                     <div class="form-group row width-100">
54:                                         <label class="col-3 control-label">{{trans('lang.category_image')}}</label>
55:                                         <div class="col-7">
56:                                             <input type="file" id="category_image" onChange="handleFileSelect(event)">
57:                                             <div class="placeholder_img_thumb cat_image"></div>
58:                                             <div id="uploding_image"></div>
59:                                             <div class="form-text text-muted w-50">{{ trans("lang.category_image_help")
60:                                                 }}
61:                                             </div>
62:                                         </div>

56:                                             <input type="file" id="category_image" onChange="handleFileSelect(event)">
57:                                             <div class="placeholder_img_thumb cat_image"></div>
58:                                             <div id="uploding_image"></div>
59:                                             <div class="form-text text-muted w-50">{{ trans("lang.category_image_help")
60:                                                 }}
61:                                             </div>
62:                                         </div>
63:                                     </div>
64:                                     <div class="form-check width-100">
65:                                         <input type="checkbox" class="item_publish" id="item_publish">

75:                     <button type="button" class="btn btn-primary save-setting-btn"><i class="fa fa-save"></i>
76:                         {{trans('lang.save')}}
77:                     </button>
78:                     <a href="{!! route('ondemandcategory') !!}" class="btn btn-default"><i
79:                             class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
80:                 </div>
81:             </div>
82:         </div>
83:     </div>
84: </div>

89: 
90: <script type="text/javascript">
91: 
92:     var section_id = getCookie('section_id') || '';
93:     var database = firebase.firestore();
94:     var ref = database.collection('provider_categories');
95:     var ref_category = database.collection('provider_categories');
96:     
97:     var photo = "";
98:     var fileName = '';

91: 
92:     var section_id = getCookie('section_id') || '';
93:     var database = firebase.firestore();
94:     var ref = database.collection('provider_categories');
95:     var ref_category = database.collection('provider_categories');
96:     
97:     var photo = "";
98:     var fileName = '';
99:     var id_category = database.collection("tmp").doc().id;
100:     var category_length = 1;

92:     var section_id = getCookie('section_id') || '';
93:     var database = firebase.firestore();
94:     var ref = database.collection('provider_categories');
95:     var ref_category = database.collection('provider_categories');
96:     
97:     var photo = "";
98:     var fileName = '';
99:     var id_category = database.collection("tmp").doc().id;
100:     var category_length = 1;
101:     var placeholderImage = '';

96:     
97:     var photo = "";
98:     var fileName = '';
99:     var id_category = database.collection("tmp").doc().id;
100:     var category_length = 1;
101:     var placeholderImage = '';
102:     var placeholder = database.collection('settings').doc('placeHolderImage');
103:     placeholder.get().then(async function (snapshotsimage) {
104:         var placeholderImageData = snapshotsimage.data();
105:         placeholderImage = placeholderImageData.image;

97:     var photo = "";
98:     var fileName = '';
99:     var id_category = database.collection("tmp").doc().id;
100:     var category_length = 1;
101:     var placeholderImage = '';
102:     var placeholder = database.collection('settings').doc('placeHolderImage');
103:     placeholder.get().then(async function (snapshotsimage) {
104:         var placeholderImageData = snapshotsimage.data();
105:         placeholderImage = placeholderImageData.image;
106:     })

99:     var id_category = database.collection("tmp").doc().id;
100:     var category_length = 1;
101:     var placeholderImage = '';
102:     var placeholder = database.collection('settings').doc('placeHolderImage');
103:     placeholder.get().then(async function (snapshotsimage) {
104:         var placeholderImageData = snapshotsimage.data();
105:         placeholderImage = placeholderImageData.image;
106:     })
107:     $(document).ready(function () {
108: 

106:     })
107:     $(document).ready(function () {
108: 
109:         ref_category.where('parentCategoryId', '==', null).where('sectionId', '==', section_id).get().then(async function (snapshots) {
110:             if (snapshots.docs.length > 0) {
111:                 $('#parent_category_id').html('<option value="">{{trans("lang.select_category")}}</option>');
112:                 snapshots.docs.forEach((listval) => {
113:                     var data = listval.data();
114:                     $('#parent_category_id').append($("<option></option>")
115:                         .attr("value", data.id)

108: 
109:         ref_category.where('parentCategoryId', '==', null).where('sectionId', '==', section_id).get().then(async function (snapshots) {
110:             if (snapshots.docs.length > 0) {
111:                 $('#parent_category_id').html('<option value="">{{trans("lang.select_category")}}</option>');
112:                 snapshots.docs.forEach((listval) => {
113:                     var data = listval.data();
114:                     $('#parent_category_id').append($("<option></option>")
115:                         .attr("value", data.id)
116:                         .text(data.title));
117:                 });

111:                 $('#parent_category_id').html('<option value="">{{trans("lang.select_category")}}</option>');
112:                 snapshots.docs.forEach((listval) => {
113:                     var data = listval.data();
114:                     $('#parent_category_id').append($("<option></option>")
115:                         .attr("value", data.id)
116:                         .text(data.title));
117:                 });
118:             } else {
119:                 $('#parent_category_id').html('<option value="">{{trans("lang.select_category")}}</option>');
120:             }

116:                         .text(data.title));
117:                 });
118:             } else {
119:                 $('#parent_category_id').html('<option value="">{{trans("lang.select_category")}}</option>');
120:             }
121:         });
122:         
123:         jQuery("#data-table_processing").show();
124:         ref.get().then(async function (snapshots) {
125:             category_length = snapshots.size + 1;

122:         
123:         jQuery("#data-table_processing").show();
124:         ref.get().then(async function (snapshots) {
125:             category_length = snapshots.size + 1;
126:             jQuery("#data-table_processing").hide();
127:         })
128: 
129:         $(".save-setting-btn").click(async function () {
130: 
131:             var title = $(".cat-name").val();

130: 
131:             var title = $(".cat-name").val();
132:             var itemPublish = $(".item_publish").is(":checked");
133:             var parentCategoryId = $('#parent_category_id').val();
134:             var level = parentCategoryId == "" ? 0 : 1;
135:             
136:             if (title == '') {
137:                 $(".error_top").show();
138:                 $(".error_top").html("");
139:                 $(".error_top").append("<p>{{trans('lang.enter_cat_title_error')}}</p>");

131:             var title = $(".cat-name").val();
132:             var itemPublish = $(".item_publish").is(":checked");
133:             var parentCategoryId = $('#parent_category_id').val();
134:             var level = parentCategoryId == "" ? 0 : 1;
135:             
136:             if (title == '') {
137:                 $(".error_top").show();
138:                 $(".error_top").html("");
139:                 $(".error_top").append("<p>{{trans('lang.enter_cat_title_error')}}</p>");
140:                 window.scrollTo(0, 0);

146:             } else {
147:                 jQuery("#data-table_processing").show();
148:                 storeImageData().then(IMG => {
149:                     database.collection('provider_categories').doc(id_category).set({
150:                         'id': id_category,
151:                         'title': title,
152:                         'publish': itemPublish,
153:                         'image': IMG,
154:                         'parentCategoryId': parentCategoryId ? parentCategoryId : null,
155:                         'level': parseInt(level),

147:                 jQuery("#data-table_processing").show();
148:                 storeImageData().then(IMG => {
149:                     database.collection('provider_categories').doc(id_category).set({
150:                         'id': id_category,
151:                         'title': title,
152:                         'publish': itemPublish,
153:                         'image': IMG,
154:                         'parentCategoryId': parentCategoryId ? parentCategoryId : null,
155:                         'level': parseInt(level),
156:                         'sectionId': section_id

151:                         'title': title,
152:                         'publish': itemPublish,
153:                         'image': IMG,
154:                         'parentCategoryId': parentCategoryId ? parentCategoryId : null,
155:                         'level': parseInt(level),
156:                         'sectionId': section_id
157:                     }).then(function (result) {
158:                         window.location.href = '{{ route("ondemandcategory")}}';
159:                     });
160:                 }).catch(err => {

153:                         'image': IMG,
154:                         'parentCategoryId': parentCategoryId ? parentCategoryId : null,
155:                         'level': parseInt(level),
156:                         'sectionId': section_id
157:                     }).then(function (result) {
158:                         window.location.href = '{{ route("ondemandcategory")}}';
159:                     });
160:                 }).catch(err => {
161:                     jQuery("#data-table_processing").hide();
162:                     $(".error_top").show();

155:                         'level': parseInt(level),
156:                         'sectionId': section_id
157:                     }).then(function (result) {
158:                         window.location.href = '{{ route("ondemandcategory")}}';
159:                     });
160:                 }).catch(err => {
161:                     jQuery("#data-table_processing").hide();
162:                     $(".error_top").show();
163:                     $(".error_top").html("");
164:                     $(".error_top").append("<p>" + err + "</p>");

190:             return function (e) {
191:                 var filePayload = e.target.result;
192:                 var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
193:                 var val = $('#category_image').val().toLowerCase();
194:                 var ext = val.split('.')[1];
195:                 var docName = val.split('fakepath')[1];
196:                 var filename = $('#category_image').val().replace(/C:\\fakepath\\/i, '')
197:                 var timestamp = Number(new Date());
198:                 var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
199:                 photo = filePayload;

193:                 var val = $('#category_image').val().toLowerCase();
194:                 var ext = val.split('.')[1];
195:                 var docName = val.split('fakepath')[1];
196:                 var filename = $('#category_image').val().replace(/C:\\fakepath\\/i, '')
197:                 var timestamp = Number(new Date());
198:                 var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
199:                 photo = filePayload;
200:                 fileName = filename;
201:                 $(".cat_image").empty();
202:                 $(".cat_image").append('<img class="rounded" style="width:50px" src="' + photo + '" alt="image">');

```

### FILE: C:\deploy\adminpanel\resources\views\OnDemandService\categories\edit.blade.php
```text
3: <div class="page-wrapper">
4:     <div class="row page-titles">
5:         <div class="col-md-5 align-self-center">
6:             <h3 class="text-themecolor">{{trans('lang.category_plural')}}</h3>
7:         </div>
8:         <div class="col-md-7 align-self-center">
9:             <ol class="breadcrumb">
10:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
11:                 <li class="breadcrumb-item"><a
12:                         href="{!! route('ondemandcategory') !!}">{{trans('lang.category_plural')}}</a></li>

9:             <ol class="breadcrumb">
10:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
11:                 <li class="breadcrumb-item"><a
12:                         href="{!! route('ondemandcategory') !!}">{{trans('lang.category_plural')}}</a></li>
13:                 <li class="breadcrumb-item active">{{trans('lang.category_edit')}}</li>
14:             </ol>
15:         </div>
16:     </div>
17:     <div class="container-fluid">
18:         <div class="cat-edite-page max-width-box">

10:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
11:                 <li class="breadcrumb-item"><a
12:                         href="{!! route('ondemandcategory') !!}">{{trans('lang.category_plural')}}</a></li>
13:                 <li class="breadcrumb-item active">{{trans('lang.category_edit')}}</li>
14:             </ol>
15:         </div>
16:     </div>
17:     <div class="container-fluid">
18:         <div class="cat-edite-page max-width-box">
19:             <div class="card  pb-4">

20:                 <div class="card-header">
21:                     <ul class="nav nav-tabs align-items-end card-header-tabs w-100">
22:                         <li role="presentation" class="nav-item">
23:                             <a href="#category_information" aria-controls="category_information" role="tab"
24:                                 data-toggle="tab" class="nav-link active">{{trans('lang.category_edit')}}</a>
25:                         </li>
26:                     </ul>
27:                 </div>
28:                 <div class="card-body">
29:                     <div class="error_top" style="display:none"></div>

21:                     <ul class="nav nav-tabs align-items-end card-header-tabs w-100">
22:                         <li role="presentation" class="nav-item">
23:                             <a href="#category_information" aria-controls="category_information" role="tab"
24:                                 data-toggle="tab" class="nav-link active">{{trans('lang.category_edit')}}</a>
25:                         </li>
26:                     </ul>
27:                 </div>
28:                 <div class="card-body">
29:                     <div class="error_top" style="display:none"></div>
30:                     <div class="row vendor_payout_create" role="tabpanel">

29:                     <div class="error_top" style="display:none"></div>
30:                     <div class="row vendor_payout_create" role="tabpanel">
31:                         <div class="vendor_payout_create-inner tab-content">
32:                             <div role="tabpanel" class="tab-pane active" id="category_information">
33:                                 <fieldset>
34:                                     <legend>{{trans('lang.category_edit')}}</legend>
35:                                     <div class="form-group row width-50">
36:                                         <label class="col-3 control-label">{{trans('lang.category_name')}}</label>
37:                                         <div class="col-7">
38:                                             <input type="text" class="form-control cat-name">

31:                         <div class="vendor_payout_create-inner tab-content">
32:                             <div role="tabpanel" class="tab-pane active" id="category_information">
33:                                 <fieldset>
34:                                     <legend>{{trans('lang.category_edit')}}</legend>
35:                                     <div class="form-group row width-50">
36:                                         <label class="col-3 control-label">{{trans('lang.category_name')}}</label>
37:                                         <div class="col-7">
38:                                             <input type="text" class="form-control cat-name">
39:                                             <div class="form-text text-muted">{{ trans("lang.category_name_help") }}
40:                                             </div>

33:                                 <fieldset>
34:                                     <legend>{{trans('lang.category_edit')}}</legend>
35:                                     <div class="form-group row width-50">
36:                                         <label class="col-3 control-label">{{trans('lang.category_name')}}</label>
37:                                         <div class="col-7">
38:                                             <input type="text" class="form-control cat-name">
39:                                             <div class="form-text text-muted">{{ trans("lang.category_name_help") }}
40:                                             </div>
41:                                         </div>
42:                                     </div>

36:                                         <label class="col-3 control-label">{{trans('lang.category_name')}}</label>
37:                                         <div class="col-7">
38:                                             <input type="text" class="form-control cat-name">
39:                                             <div class="form-text text-muted">{{ trans("lang.category_name_help") }}
40:                                             </div>
41:                                         </div>
42:                                     </div>
43:                                     <div class="form-group row width-50">
44:                                         <label class="col-3 control-label ">{{trans('lang.select_parent_category')}}</label>
45:                                         <div class="col-7">

41:                                         </div>
42:                                     </div>
43:                                     <div class="form-group row width-50">
44:                                         <label class="col-3 control-label ">{{trans('lang.select_parent_category')}}</label>
45:                                         <div class="col-7">
46:                                             <select name="parent_category_id" id="parent_category_id"
47:                                                 class="form-control">
48:                                                 <option value="">{{trans('lang.select_category')}}</option>
49:                                             </select>
50:                                         </div>

43:                                     <div class="form-group row width-50">
44:                                         <label class="col-3 control-label ">{{trans('lang.select_parent_category')}}</label>
45:                                         <div class="col-7">
46:                                             <select name="parent_category_id" id="parent_category_id"
47:                                                 class="form-control">
48:                                                 <option value="">{{trans('lang.select_category')}}</option>
49:                                             </select>
50:                                         </div>
51:                                     </div>
52:                                     <div class="form-group row width-100">

45:                                         <div class="col-7">
46:                                             <select name="parent_category_id" id="parent_category_id"
47:                                                 class="form-control">
48:                                                 <option value="">{{trans('lang.select_category')}}</option>
49:                                             </select>
50:                                         </div>
51:                                     </div>
52:                                     <div class="form-group row width-100">
53:                                         <label class="col-3 control-label">{{trans('lang.category_image')}}</label>
54:                                         <input type="file" onChange="handleFileSelectowner(event)" class="col-7">

50:                                         </div>
51:                                     </div>
52:                                     <div class="form-group row width-100">
53:                                         <label class="col-3 control-label">{{trans('lang.category_image')}}</label>
54:                                         <input type="file" onChange="handleFileSelectowner(event)" class="col-7">
55:                                         <div id="uploding_category_image"></div>
56:                                         <div class="category_image_div" style="display:none;padding:15px;">
57:                                             <img id="category_image" src="" width="150px" height="150px;">
58:                                         </div>
59:                                         <div class="form-text text-muted w-50">{{ trans("lang.category_image_help")}}

52:                                     <div class="form-group row width-100">
53:                                         <label class="col-3 control-label">{{trans('lang.category_image')}}</label>
54:                                         <input type="file" onChange="handleFileSelectowner(event)" class="col-7">
55:                                         <div id="uploding_category_image"></div>
56:                                         <div class="category_image_div" style="display:none;padding:15px;">
57:                                             <img id="category_image" src="" width="150px" height="150px;">
58:                                         </div>
59:                                         <div class="form-text text-muted w-50">{{ trans("lang.category_image_help")}}
60:                                         </div>
61:                                     </div>

53:                                         <label class="col-3 control-label">{{trans('lang.category_image')}}</label>
54:                                         <input type="file" onChange="handleFileSelectowner(event)" class="col-7">
55:                                         <div id="uploding_category_image"></div>
56:                                         <div class="category_image_div" style="display:none;padding:15px;">
57:                                             <img id="category_image" src="" width="150px" height="150px;">
58:                                         </div>
59:                                         <div class="form-text text-muted w-50">{{ trans("lang.category_image_help")}}
60:                                         </div>
61:                                     </div>
62:                                     <div class="form-check width-100">

54:                                         <input type="file" onChange="handleFileSelectowner(event)" class="col-7">
55:                                         <div id="uploding_category_image"></div>
56:                                         <div class="category_image_div" style="display:none;padding:15px;">
57:                                             <img id="category_image" src="" width="150px" height="150px;">
58:                                         </div>
59:                                         <div class="form-text text-muted w-50">{{ trans("lang.category_image_help")}}
60:                                         </div>
61:                                     </div>
62:                                     <div class="form-check width-100">
63:                                         <input type="checkbox" class="item_publish" id="item_publish">

56:                                         <div class="category_image_div" style="display:none;padding:15px;">
57:                                             <img id="category_image" src="" width="150px" height="150px;">
58:                                         </div>
59:                                         <div class="form-text text-muted w-50">{{ trans("lang.category_image_help")}}
60:                                         </div>
61:                                     </div>
62:                                     <div class="form-check width-100">
63:                                         <input type="checkbox" class="item_publish" id="item_publish">
64:                                         <label class="col-3 control-label"
65:                                             for="item_publish">{{trans('lang.item_publish')}}</label>

73:                     <button type="button" class="btn btn-primary edit-setting-btn"><i class="fa fa-save"></i>
74:                         {{trans('lang.save')}}
75:                     </button>
76:                     <a href="{!! route('ondemandcategory') !!}" class="btn btn-default"><i
77:                             class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
78:                 </div>
79:             </div>
80:         </div>
81:     </div>
82: </div>

87: 
88:     var id = "<?php echo $id;?>";
89:     var database = firebase.firestore();
90:     var ref_category = database.collection('provider_categories');
91:     
92:     var ref = database.collection('provider_categories').doc(id);
93:     var category = '';
94:     var photo = "";
95:     var category_image = '';
96:     var placeholderImage = '';

89:     var database = firebase.firestore();
90:     var ref_category = database.collection('provider_categories');
91:     
92:     var ref = database.collection('provider_categories').doc(id);
93:     var category = '';
94:     var photo = "";
95:     var category_image = '';
96:     var placeholderImage = '';
97:     var placeholder = database.collection('settings').doc('placeHolderImage');
98:     var photo = "";

90:     var ref_category = database.collection('provider_categories');
91:     
92:     var ref = database.collection('provider_categories').doc(id);
93:     var category = '';
94:     var photo = "";
95:     var category_image = '';
96:     var placeholderImage = '';
97:     var placeholder = database.collection('settings').doc('placeHolderImage');
98:     var photo = "";
99:     var fileName = "";

92:     var ref = database.collection('provider_categories').doc(id);
93:     var category = '';
94:     var photo = "";
95:     var category_image = '';
96:     var placeholderImage = '';
97:     var placeholder = database.collection('settings').doc('placeHolderImage');
98:     var photo = "";
99:     var fileName = "";
100:     var oldImageFile = '';
101:     var order = 0;

94:     var photo = "";
95:     var category_image = '';
96:     var placeholderImage = '';
97:     var placeholder = database.collection('settings').doc('placeHolderImage');
98:     var photo = "";
99:     var fileName = "";
100:     var oldImageFile = '';
101:     var order = 0;
102:     placeholder.get().then(async function (snapshotsimage) {
103:         var placeholderImageData = snapshotsimage.data();

109:         jQuery("#data-table_processing").show();
110: 
111:         ref.get().then(async function (snapshots) {
112:             var category = snapshots.data();
113:             
114:             if(category.sectionId){
115:                 ref_category.where('parentCategoryId', '==', null).where('sectionId', '==', category.sectionId).get().then(async function (snapshots) {
116:                     if (snapshots.docs.length > 0) {
117:                         $('#parent_category_id').html('<option value="">{{trans("lang.select_category")}}</option>');
118:                         snapshots.docs.forEach((listval) => {

111:         ref.get().then(async function (snapshots) {
112:             var category = snapshots.data();
113:             
114:             if(category.sectionId){
115:                 ref_category.where('parentCategoryId', '==', null).where('sectionId', '==', category.sectionId).get().then(async function (snapshots) {
116:                     if (snapshots.docs.length > 0) {
117:                         $('#parent_category_id').html('<option value="">{{trans("lang.select_category")}}</option>');
118:                         snapshots.docs.forEach((listval) => {
119:                             var data = listval.data();
120:                             if (data.id != category.id) {

112:             var category = snapshots.data();
113:             
114:             if(category.sectionId){
115:                 ref_category.where('parentCategoryId', '==', null).where('sectionId', '==', category.sectionId).get().then(async function (snapshots) {
116:                     if (snapshots.docs.length > 0) {
117:                         $('#parent_category_id').html('<option value="">{{trans("lang.select_category")}}</option>');
118:                         snapshots.docs.forEach((listval) => {
119:                             var data = listval.data();
120:                             if (data.id != category.id) {
121:                                 if (category.parentCategoryId == data.id) {

114:             if(category.sectionId){
115:                 ref_category.where('parentCategoryId', '==', null).where('sectionId', '==', category.sectionId).get().then(async function (snapshots) {
116:                     if (snapshots.docs.length > 0) {
117:                         $('#parent_category_id').html('<option value="">{{trans("lang.select_category")}}</option>');
118:                         snapshots.docs.forEach((listval) => {
119:                             var data = listval.data();
120:                             if (data.id != category.id) {
121:                                 if (category.parentCategoryId == data.id) {
122:                                     $('#parent_category_id').append($("<option selected></option>")
123:                                         .attr("value", data.id)

117:                         $('#parent_category_id').html('<option value="">{{trans("lang.select_category")}}</option>');
118:                         snapshots.docs.forEach((listval) => {
119:                             var data = listval.data();
120:                             if (data.id != category.id) {
121:                                 if (category.parentCategoryId == data.id) {
122:                                     $('#parent_category_id').append($("<option selected></option>")
123:                                         .attr("value", data.id)
124:                                         .text(data.title));
125:                                 } else {
126:                                     $('#parent_category_id').append($("<option></option>")

118:                         snapshots.docs.forEach((listval) => {
119:                             var data = listval.data();
120:                             if (data.id != category.id) {
121:                                 if (category.parentCategoryId == data.id) {
122:                                     $('#parent_category_id').append($("<option selected></option>")
123:                                         .attr("value", data.id)
124:                                         .text(data.title));
125:                                 } else {
126:                                     $('#parent_category_id').append($("<option></option>")
127:                                         .attr("value", data.id)

119:                             var data = listval.data();
120:                             if (data.id != category.id) {
121:                                 if (category.parentCategoryId == data.id) {
122:                                     $('#parent_category_id').append($("<option selected></option>")
123:                                         .attr("value", data.id)
124:                                         .text(data.title));
125:                                 } else {
126:                                     $('#parent_category_id').append($("<option></option>")
127:                                         .attr("value", data.id)
128:                                         .text(data.title));

123:                                         .attr("value", data.id)
124:                                         .text(data.title));
125:                                 } else {
126:                                     $('#parent_category_id').append($("<option></option>")
127:                                         .attr("value", data.id)
128:                                         .text(data.title));
129:                                 }
130:                             }
131:                         });
132:                     } else {

130:                             }
131:                         });
132:                     } else {
133:                         $('#parent_category_id').html('<option value="">{{trans("lang.select_category")}}</option>');
134:                     }
135:                 });
136:             }
137:             
138:             $(".cat-name").val(category.title);
139:             if (category.publish) {

135:                 });
136:             }
137:             
138:             $(".cat-name").val(category.title);
139:             if (category.publish) {
140:                 $(".item_publish").prop('checked', true);
141:             }
142:             if (category.image != '') {
143:                 photo = category.image;
144:                 oldImageFile = category.image;

136:             }
137:             
138:             $(".cat-name").val(category.title);
139:             if (category.publish) {
140:                 $(".item_publish").prop('checked', true);
141:             }
142:             if (category.image != '') {
143:                 photo = category.image;
144:                 oldImageFile = category.image;
145:                 $("#category_image").attr('src', category.image);

139:             if (category.publish) {
140:                 $(".item_publish").prop('checked', true);
141:             }
142:             if (category.image != '') {
143:                 photo = category.image;
144:                 oldImageFile = category.image;
145:                 $("#category_image").attr('src', category.image);
146:                 category_image = category.image;
147:             } else {
148:                 $("#category_image").attr('src', placeholderImage);

140:                 $(".item_publish").prop('checked', true);
141:             }
142:             if (category.image != '') {
143:                 photo = category.image;
144:                 oldImageFile = category.image;
145:                 $("#category_image").attr('src', category.image);
146:                 category_image = category.image;
147:             } else {
148:                 $("#category_image").attr('src', placeholderImage);
149:             }

141:             }
142:             if (category.image != '') {
143:                 photo = category.image;
144:                 oldImageFile = category.image;
145:                 $("#category_image").attr('src', category.image);
146:                 category_image = category.image;
147:             } else {
148:                 $("#category_image").attr('src', placeholderImage);
149:             }
150:             $(".category_image_div").show();

142:             if (category.image != '') {
143:                 photo = category.image;
144:                 oldImageFile = category.image;
145:                 $("#category_image").attr('src', category.image);
146:                 category_image = category.image;
147:             } else {
148:                 $("#category_image").attr('src', placeholderImage);
149:             }
150:             $(".category_image_div").show();
151:             jQuery("#data-table_processing").hide();

143:                 photo = category.image;
144:                 oldImageFile = category.image;
145:                 $("#category_image").attr('src', category.image);
146:                 category_image = category.image;
147:             } else {
148:                 $("#category_image").attr('src', placeholderImage);
149:             }
150:             $(".category_image_div").show();
151:             jQuery("#data-table_processing").hide();
152:         });

145:                 $("#category_image").attr('src', category.image);
146:                 category_image = category.image;
147:             } else {
148:                 $("#category_image").attr('src', placeholderImage);
149:             }
150:             $(".category_image_div").show();
151:             jQuery("#data-table_processing").hide();
152:         });
153: 
154:         $(".edit-setting-btn").click(async function () {

147:             } else {
148:                 $("#category_image").attr('src', placeholderImage);
149:             }
150:             $(".category_image_div").show();
151:             jQuery("#data-table_processing").hide();
152:         });
153: 
154:         $(".edit-setting-btn").click(async function () {
155:             var title = $(".cat-name").val();
156:             var itemPublish = $(".item_publish").is(":checked");

154:         $(".edit-setting-btn").click(async function () {
155:             var title = $(".cat-name").val();
156:             var itemPublish = $(".item_publish").is(":checked");
157:             var parentCategoryId = $('#parent_category_id').val();
158:             var level = parentCategoryId == "" ? 0 : 1;
159:             
160:             if (title == '') {
161:                 $(".error_top").show();
162:                 $(".error_top").html("");
163:                 $(".error_top").append("<p>{{trans('lang.enter_cat_title_error')}}</p>");

155:             var title = $(".cat-name").val();
156:             var itemPublish = $(".item_publish").is(":checked");
157:             var parentCategoryId = $('#parent_category_id').val();
158:             var level = parentCategoryId == "" ? 0 : 1;
159:             
160:             if (title == '') {
161:                 $(".error_top").show();
162:                 $(".error_top").html("");
163:                 $(".error_top").append("<p>{{trans('lang.enter_cat_title_error')}}</p>");
164:                 window.scrollTo(0, 0);

164:                 window.scrollTo(0, 0);
165:             } else {
166:                 await storeImageData().then(IMG => {
167:                     database.collection('provider_categories').doc(id).update({
168:                         'title': title,
169:                         'publish': itemPublish,
170:                         'image': IMG,
171:                         'parentCategoryId': parentCategoryId ? parentCategoryId : null,
172:                         'level': parseInt(level),
173:                     }).then(function (result) {

168:                         'title': title,
169:                         'publish': itemPublish,
170:                         'image': IMG,
171:                         'parentCategoryId': parentCategoryId ? parentCategoryId : null,
172:                         'level': parseInt(level),
173:                     }).then(function (result) {
174:                         window.location.href = '{{ route("ondemandcategory")}}';
175:                     });
176:                 }).catch(err => {
177:                     jQuery("#data-table_processing").hide();

171:                         'parentCategoryId': parentCategoryId ? parentCategoryId : null,
172:                         'level': parseInt(level),
173:                     }).then(function (result) {
174:                         window.location.href = '{{ route("ondemandcategory")}}';
175:                     });
176:                 }).catch(err => {
177:                     jQuery("#data-table_processing").hide();
178:                     $(".error_top").show();
179:                     $(".error_top").html("");
180:                     $(".error_top").append("<p>" + err + "</p>");

200:                 var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
201:                 photo = filePayload;
202:                 fileName = filename;
203:                 $("#category_image").attr('src', photo);
204:                 $(".category_image_div").show();
205:             };
206:         })(f);
207:         reader.readAsDataURL(f);
208:     }
209:     async function storeImageData() {

201:                 photo = filePayload;
202:                 fileName = filename;
203:                 $("#category_image").attr('src', photo);
204:                 $(".category_image_div").show();
205:             };
206:         })(f);
207:         reader.readAsDataURL(f);
208:     }
209:     async function storeImageData() {
210:         var newPhoto = '';

```

### FILE: C:\deploy\adminpanel\resources\views\OnDemandService\categories\index.blade.php
```text
3: <div class="page-wrapper">
4:     <div class="row page-titles">
5:         <div class="col-md-5 align-self-center">
6:             <h3 class="text-themecolor">{{trans('lang.ondemand_plural')}} - {{trans('lang.category_plural')}}</h3>
7:         </div>
8:         <div class="col-md-7 align-self-center">
9:             <ol class="breadcrumb">
10:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
11:                 <li class="breadcrumb-item active">{{trans('lang.ondemand_plural')}}</li>
12:             </ol>

20:             <div class="col-12">
21:                 <div class="d-flex top-title-section pb-4 justify-content-between">
22:                     <div class="d-flex top-title-left align-self-center">
23:                         <span class="icon mr-3"><img src="{{ asset('images/category.png') }}"></span>
24:                         <h3 class="mb-0">{{trans('lang.ondemand_plural')}}</h3>
25:                         <span class="counter ml-3 total_count"></span>
26:                     </div>
27:                 </div>
28:             </div>
29:         </div> 

35:                  <div class="card-header d-flex justify-content-between align-items-center border-0">
36:                    <div class="card-header-title">
37:                     <h3 class="text-dark-2 mb-2 h4">{{trans('lang.ondemand_plural')}}</h3>
38:                     <p class="mb-0 text-dark-2">{{trans('lang.ondemand_category_table_text')}}</p>
39:                    </div>
40:                    <div class="card-header-right d-flex align-items-center">
41:                     <div class="card-header-btn mr-3"> 
42:                         <a class="btn-primary btn rounded-full" href="{!! route('ondemandcategory.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.category_create')}}</a>
43:                      </div>
44:                    </div>                

39:                    </div>
40:                    <div class="card-header-right d-flex align-items-center">
41:                     <div class="card-header-btn mr-3"> 
42:                         <a class="btn-primary btn rounded-full" href="{!! route('ondemandcategory.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.category_create')}}</a>
43:                      </div>
44:                    </div>                
45:                  </div>
46:                  <div class="card-body">
47:                          <div class="table-responsive m-t-10">
48:                             <table id="categoryTable" class="display nowrap table table-hover table-striped table-bordered table table-striped" cellspacing="0" width="100%">

45:                  </div>
46:                  <div class="card-body">
47:                          <div class="table-responsive m-t-10">
48:                             <table id="categoryTable" class="display nowrap table table-hover table-striped table-bordered table table-striped" cellspacing="0" width="100%">
49:                                 <thead>
50:                                 <tr>
51:                                 <?php if (in_array('ondemand.categories.delete', json_decode(@session('user_permissions'),true))) { ?>
52:                                 <th class="delete-all">
53:                                     <input type="checkbox" id="is_active">
54:                                     <label class="col-3 control-label" for="is_active">

56:                                     </label>
57:                                 </th>
58:                                 <?php }?>
59:                                 <th>{{trans('lang.category_info')}}</th>
60:                                 <th>{{trans('lang.item_publish')}}</th>
61:                                 <th>{{trans('lang.actions')}}</th>
62:                                 </tr>
63:                                 </thead>
64:                                 <tbody id="append_list1">
65:                                 </tbody>

78: 
79:     <script type="text/javascript">
80: 
81:         var section_id = getCookie('section_id') || '';
82:         var user_permissions = '<?php echo @session('user_permissions') ?>';
83:         user_permissions = Object.values(JSON.parse(user_permissions));
84:         var checkDeletePermission = false;
85:         if ($.inArray('ondemand.categories.delete', user_permissions) >= 0) {
86:             checkDeletePermission = true;
87:         }

88:         var database = firebase.firestore();
89:         var pagesize = 10;
90:         var user_number = [];
91:         var ref = database.collection('provider_categories');
92:         if(section_id){
93:             ref = ref.where('sectionId', '==', section_id);
94:         }
95:         var placeholderImage = '';
96:         var append_list = '';
97:         $(document).ready(function () {

89:         var pagesize = 10;
90:         var user_number = [];
91:         var ref = database.collection('provider_categories');
92:         if(section_id){
93:             ref = ref.where('sectionId', '==', section_id);
94:         }
95:         var placeholderImage = '';
96:         var append_list = '';
97:         $(document).ready(function () {
98:             jQuery("#data-table_processing").show();

90:         var user_number = [];
91:         var ref = database.collection('provider_categories');
92:         if(section_id){
93:             ref = ref.where('sectionId', '==', section_id);
94:         }
95:         var placeholderImage = '';
96:         var append_list = '';
97:         $(document).ready(function () {
98:             jQuery("#data-table_processing").show();
99:             var placeholder = database.collection('settings').doc('placeHolderImage');

96:         var append_list = '';
97:         $(document).ready(function () {
98:             jQuery("#data-table_processing").show();
99:             var placeholder = database.collection('settings').doc('placeHolderImage');
100:             placeholder.get().then(async function (snapshotsimage) {
101:                 var placeholderImageData = snapshotsimage.data();
102:                 placeholderImage = placeholderImageData.image;
103:             })
104:             append_list = document.getElementById('append_list1');
105:             append_list.innerHTML = '';

117:                         jQuery("#data-table_paginate").hide();
118:                     }
119:                 }
120:                 var table = $('#categoryTable').DataTable({
121:                     columnDefs: [{
122:                         targets: (checkDeletePermission==true) ? 2 :1,
123:                         type: 'date',
124:                         render: function (data) {
125:                             return data;
126:                         }

158:                         'id':categories_data[i].id,
159:                         'image':categories_data[i].image,
160:                         'level':categories_data[i].level,
161:                         'parentCategoryId':categories_data[i].parentCategoryId,
162:                         'publish':categories_data[i].publish,
163:                         'title':'<p class="font-weight-bold">'+categories_data[i].title+'</p>',
164:                     });
165:                     var children = await getChildCategories(categories_data[i].id, 0, 1);
166:                     if(children.length > 0){
167:                         for(var j = 0; j < children.length ; j++){

173:             var html = await getListData(categories_list);
174:             return html;
175:         }
176:         async function getChildCategories(categoryId, level, depth = 0) {
177:             var snapshots = await database.collection('provider_categories').where("parentCategoryId", "==", categoryId).get();
178:             var sub_categories_data = [];
179:             snapshots.docs.forEach((listval) => {
180:                 var datas = listval.data();
181:                 sub_categories_data.push(datas);
182:             });

174:             return html;
175:         }
176:         async function getChildCategories(categoryId, level, depth = 0) {
177:             var snapshots = await database.collection('provider_categories').where("parentCategoryId", "==", categoryId).get();
178:             var sub_categories_data = [];
179:             snapshots.docs.forEach((listval) => {
180:                 var datas = listval.data();
181:                 sub_categories_data.push(datas);
182:             });
183:             var sub_html = "";

190:                     'id':sub_categories_data[i].id,
191:                     'image':sub_categories_data[i].image,
192:                     'level':sub_categories_data[i].level,
193:                     'parentCategoryId':sub_categories_data[i].parentCategoryId,
194:                     'publish':sub_categories_data[i].publish,
195:                     'title':sub_html + sub_categories_data[i].title,
196:                 });
197:             }
198:             return sub_categories_list;
199:         }

202:             for(var i = 0; i < categories.length ; i++){
203:                 var val = categories[i];
204:                 var id = val.id;
205:                 var route1 = '{{route("ondemandcategory.edit",":id")}}';
206:                 route1 = route1.replace(':id', id);
207:                 if (checkDeletePermission) {
208:                     html += '<tr><td class="delete-all"><input type="checkbox" id="is_open_' + id + '" class="is_open" dataId="' + id + '"><label class="col-3 control-label"\n' +
209:                         'for="is_open_' + id + '" ></label></td>';
210:                 }
211:                 if (val.image == '') {

220:                 }
221:                 html += '<td><span class="action-btn"><a href="' + route1 + '" data-toggle="tooltip" title="{{trans("lang.edit")}}"><i class="mdi mdi-lead-pencil"></i></a>';
222:                 if (checkDeletePermission) {
223:                     html += '<a id="' + val.id + '" name="category-delete"  class="delete-btn" href="javascript:void(0)" data-toggle="tooltip" title="{{trans("lang.delete")}}"><i class="mdi mdi-delete"></i></a></span>';
224:                 }
225:                 html += '</td></tr>';
226:             }
227:             return html;
228:         }
229:         $(document).on("click", "input[name='isSwitch']", function(e) {

230:             var ischeck = $(this).is(':checked');
231:             var id = this.id;
232:             var publish = ischeck ? true : false;
233:             database.collection('provider_categories').doc(id).update({
234:                 'publish': publish
235:             });
236:         });
237:         $(document).on("click", "a[name='category-delete']", async function (e) {
238:             var id = this.id;
239:             await deleteDocumentWithImage('provider_categories',id,'image');

234:                 'publish': publish
235:             });
236:         });
237:         $(document).on("click", "a[name='category-delete']", async function (e) {
238:             var id = this.id;
239:             await deleteDocumentWithImage('provider_categories',id,'image');
240:             window.location.reload();
241:         });
242:         $("#is_active").click(function () {
243:             $("#categoryTable .is_open").prop('checked', $(this).prop('checked'));

236:         });
237:         $(document).on("click", "a[name='category-delete']", async function (e) {
238:             var id = this.id;
239:             await deleteDocumentWithImage('provider_categories',id,'image');
240:             window.location.reload();
241:         });
242:         $("#is_active").click(function () {
243:             $("#categoryTable .is_open").prop('checked', $(this).prop('checked'));
244:         });
245:         $("#deleteAll").click(function () {

240:             window.location.reload();
241:         });
242:         $("#is_active").click(function () {
243:             $("#categoryTable .is_open").prop('checked', $(this).prop('checked'));
244:         });
245:         $("#deleteAll").click(function () {
246:             if ($('#categoryTable .is_open:checked').length) {
247:                 if (confirm("{{trans('lang.selected_delete_alert')}}")) {
248:                     jQuery("#data-table_processing").show();
249:                     $('#categoryTable .is_open:checked').each(async function () {

243:             $("#categoryTable .is_open").prop('checked', $(this).prop('checked'));
244:         });
245:         $("#deleteAll").click(function () {
246:             if ($('#categoryTable .is_open:checked').length) {
247:                 if (confirm("{{trans('lang.selected_delete_alert')}}")) {
248:                     jQuery("#data-table_processing").show();
249:                     $('#categoryTable .is_open:checked').each(async function () {
250:                         var dataId = $(this).attr('dataId');
251:                         await deleteDocumentWithImage('provider_categories',dataId,'image');
252:                         window.location.reload();

246:             if ($('#categoryTable .is_open:checked').length) {
247:                 if (confirm("{{trans('lang.selected_delete_alert')}}")) {
248:                     jQuery("#data-table_processing").show();
249:                     $('#categoryTable .is_open:checked').each(async function () {
250:                         var dataId = $(this).attr('dataId');
251:                         await deleteDocumentWithImage('provider_categories',dataId,'image');
252:                         window.location.reload();
253:                     });
254:                 }
255:             } else {

248:                     jQuery("#data-table_processing").show();
249:                     $('#categoryTable .is_open:checked').each(async function () {
250:                         var dataId = $(this).attr('dataId');
251:                         await deleteDocumentWithImage('provider_categories',dataId,'image');
252:                         window.location.reload();
253:                     });
254:                 }
255:             } else {
256:                 alert("{{trans('lang.select_delete_alert')}}");
257:             }

```

### FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\create.blade.php
```text
18:     <div class="page-wrapper">
19:         <div class="row page-titles">
20:             <div class="col-md-5 align-self-center">
21:                 <h3 class="text-themecolor">{{ trans('lang.service_plural') }}</h3>
22:             </div>
23:             <div class="col-md-7 align-self-center">
24:                 <ol class="breadcrumb">
25:                     <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{ trans('lang.dashboard') }}</a></li>
26:                     @if (!isset($_GET['id']))
27:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index') !!}">{{ trans('lang.service_plural') }}</a></li>

23:             <div class="col-md-7 align-self-center">
24:                 <ol class="breadcrumb">
25:                     <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{ trans('lang.dashboard') }}</a></li>
26:                     @if (!isset($_GET['id']))
27:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index') !!}">{{ trans('lang.service_plural') }}</a></li>
28:                     @else
29:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index', @$_GET['id']) !!}">{{ trans('lang.service_plural') }}</a></li>
30:                     @endif
31:                     <li class="breadcrumb-item active">{{ trans('lang.service_create') }}</li>
32:                 </ol>

24:                 <ol class="breadcrumb">
25:                     <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{ trans('lang.dashboard') }}</a></li>
26:                     @if (!isset($_GET['id']))
27:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index') !!}">{{ trans('lang.service_plural') }}</a></li>
28:                     @else
29:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index', @$_GET['id']) !!}">{{ trans('lang.service_plural') }}</a></li>
30:                     @endif
31:                     <li class="breadcrumb-item active">{{ trans('lang.service_create') }}</li>
32:                 </ol>
33:             </div>

26:                     @if (!isset($_GET['id']))
27:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index') !!}">{{ trans('lang.service_plural') }}</a></li>
28:                     @else
29:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index', @$_GET['id']) !!}">{{ trans('lang.service_plural') }}</a></li>
30:                     @endif
31:                     <li class="breadcrumb-item active">{{ trans('lang.service_create') }}</li>
32:                 </ol>
33:             </div>
34:         </div>
35:         <div>

28:                     @else
29:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index', @$_GET['id']) !!}">{{ trans('lang.service_plural') }}</a></li>
30:                     @endif
31:                     <li class="breadcrumb-item active">{{ trans('lang.service_create') }}</li>
32:                 </ol>
33:             </div>
34:         </div>
35:         <div>
36:             <div class="card-body">
37:                 <div class="error_top" style="display:none"></div>

38:                 <div class="row vendor_payout_create">
39:                     <div class="vendor_payout_create-inner">
40:                         <fieldset>
41:                             <legend>{{ trans('lang.service_information') }}</legend>
42:                             <div class="form-group row width-50">
43:                                 <input type="hidden" class="form-control author_name">
44:                                 <input type="hidden" class="form-control author_profile">
45:                                 <label class="col-3 control-label">{{ trans('lang.service_name') }}</label>
46:                                 <div class="col-7">
47:                                     <input type="text" class="form-control service_name" required>

42:                             <div class="form-group row width-50">
43:                                 <input type="hidden" class="form-control author_name">
44:                                 <input type="hidden" class="form-control author_profile">
45:                                 <label class="col-3 control-label">{{ trans('lang.service_name') }}</label>
46:                                 <div class="col-7">
47:                                     <input type="text" class="form-control service_name" required>
48:                                     <div class="form-text text-muted">
49:                                         {{ trans('lang.service_name_help') }}
50:                                     </div>
51:                                 </div>

44:                                 <input type="hidden" class="form-control author_profile">
45:                                 <label class="col-3 control-label">{{ trans('lang.service_name') }}</label>
46:                                 <div class="col-7">
47:                                     <input type="text" class="form-control service_name" required>
48:                                     <div class="form-text text-muted">
49:                                         {{ trans('lang.service_name_help') }}
50:                                     </div>
51:                                 </div>
52:                             </div>
53:                             @if (!isset($_GET['id']))

46:                                 <div class="col-7">
47:                                     <input type="text" class="form-control service_name" required>
48:                                     <div class="form-text text-muted">
49:                                         {{ trans('lang.service_name_help') }}
50:                                     </div>
51:                                 </div>
52:                             </div>
53:                             @if (!isset($_GET['id']))
54:                                 <div class="form-group row width-50">
55:                                     <label class="col-3 control-label">{{ trans('lang.provider') }}</label>

50:                                     </div>
51:                                 </div>
52:                             </div>
53:                             @if (!isset($_GET['id']))
54:                                 <div class="form-group row width-50">
55:                                     <label class="col-3 control-label">{{ trans('lang.provider') }}</label>
56:                                     <div class="col-7">
57:                                         <select id="provider_select" class="form-control">
58:                                             <option value="">{{ trans('lang.select_provider') }}</option>
59:                                         </select>

52:                             </div>
53:                             @if (!isset($_GET['id']))
54:                                 <div class="form-group row width-50">
55:                                     <label class="col-3 control-label">{{ trans('lang.provider') }}</label>
56:                                     <div class="col-7">
57:                                         <select id="provider_select" class="form-control">
58:                                             <option value="">{{ trans('lang.select_provider') }}</option>
59:                                         </select>
60:                                         <div class="form-text text-muted">
61:                                             {{ trans('lang.provider_help') }}

54:                                 <div class="form-group row width-50">
55:                                     <label class="col-3 control-label">{{ trans('lang.provider') }}</label>
56:                                     <div class="col-7">
57:                                         <select id="provider_select" class="form-control">
58:                                             <option value="">{{ trans('lang.select_provider') }}</option>
59:                                         </select>
60:                                         <div class="form-text text-muted">
61:                                             {{ trans('lang.provider_help') }}
62:                                         </div>
63:                                     </div>

55:                                     <label class="col-3 control-label">{{ trans('lang.provider') }}</label>
56:                                     <div class="col-7">
57:                                         <select id="provider_select" class="form-control">
58:                                             <option value="">{{ trans('lang.select_provider') }}</option>
59:                                         </select>
60:                                         <div class="form-text text-muted">
61:                                             {{ trans('lang.provider_help') }}
62:                                         </div>
63:                                     </div>
64:                                 </div>

58:                                             <option value="">{{ trans('lang.select_provider') }}</option>
59:                                         </select>
60:                                         <div class="form-text text-muted">
61:                                             {{ trans('lang.provider_help') }}
62:                                         </div>
63:                                     </div>
64:                                 </div>
65:                             @endif
66:                             <div class="form-group row width-50">
67:                                 <label class="col-3 control-label ">{{ trans('lang.select_section') }}</label>

66:                             <div class="form-group row width-50">
67:                                 <label class="col-3 control-label ">{{ trans('lang.select_section') }}</label>
68:                                 <div class="col-7">
69:                                     <select name="section_id" class="form-control" id="section_id">
70:                                         <option value="">{{ trans('lang.select_section') }}</option>
71:                                     </select>
72:                                 </div>
73:                             </div>
74:                             <div class="form-group row width-50">
75:                                 <label class="col-3 control-label">{{ trans('lang.item_category_id') }}</label>

72:                                 </div>
73:                             </div>
74:                             <div class="form-group row width-50">
75:                                 <label class="col-3 control-label">{{ trans('lang.item_category_id') }}</label>
76:                                 <div class="col-7">
77:                                     <select id='item_category' class="form-control" required>
78:                                         <option value="">{{ trans('lang.select_category') }}</option>
79:                                     </select>
80:                                     <div class="form-text text-muted">
81:                                         {{ trans('lang.item_category_id_help') }}

74:                             <div class="form-group row width-50">
75:                                 <label class="col-3 control-label">{{ trans('lang.item_category_id') }}</label>
76:                                 <div class="col-7">
77:                                     <select id='item_category' class="form-control" required>
78:                                         <option value="">{{ trans('lang.select_category') }}</option>
79:                                     </select>
80:                                     <div class="form-text text-muted">
81:                                         {{ trans('lang.item_category_id_help') }}
82:                                     </div>
83:                                 </div>

75:                                 <label class="col-3 control-label">{{ trans('lang.item_category_id') }}</label>
76:                                 <div class="col-7">
77:                                     <select id='item_category' class="form-control" required>
78:                                         <option value="">{{ trans('lang.select_category') }}</option>
79:                                     </select>
80:                                     <div class="form-text text-muted">
81:                                         {{ trans('lang.item_category_id_help') }}
82:                                     </div>
83:                                 </div>
84:                             </div>

78:                                         <option value="">{{ trans('lang.select_category') }}</option>
79:                                     </select>
80:                                     <div class="form-text text-muted">
81:                                         {{ trans('lang.item_category_id_help') }}
82:                                     </div>
83:                                 </div>
84:                             </div>
85:                             <div class="form-group row width-50">
86:                                 <label class="col-3 control-label">{{ trans('lang.sub_category_id') }}</label>
87:                                 <div class="col-7">

83:                                 </div>
84:                             </div>
85:                             <div class="form-group row width-50">
86:                                 <label class="col-3 control-label">{{ trans('lang.sub_category_id') }}</label>
87:                                 <div class="col-7">
88:                                     <select id='sub_category' class="form-control" required>
89:                                         <option value="">{{ trans('lang.select_sub_category') }}</option>
90:                                     </select>
91:                                     <div class="form-text text-muted">
92:                                         {{ trans('lang.select_sub_category') }}

85:                             <div class="form-group row width-50">
86:                                 <label class="col-3 control-label">{{ trans('lang.sub_category_id') }}</label>
87:                                 <div class="col-7">
88:                                     <select id='sub_category' class="form-control" required>
89:                                         <option value="">{{ trans('lang.select_sub_category') }}</option>
90:                                     </select>
91:                                     <div class="form-text text-muted">
92:                                         {{ trans('lang.select_sub_category') }}
93:                                     </div>
94:                                 </div>

86:                                 <label class="col-3 control-label">{{ trans('lang.sub_category_id') }}</label>
87:                                 <div class="col-7">
88:                                     <select id='sub_category' class="form-control" required>
89:                                         <option value="">{{ trans('lang.select_sub_category') }}</option>
90:                                     </select>
91:                                     <div class="form-text text-muted">
92:                                         {{ trans('lang.select_sub_category') }}
93:                                     </div>
94:                                 </div>
95:                             </div>

89:                                         <option value="">{{ trans('lang.select_sub_category') }}</option>
90:                                     </select>
91:                                     <div class="form-text text-muted">
92:                                         {{ trans('lang.select_sub_category') }}
93:                                     </div>
94:                                 </div>
95:                             </div>
96:                             <div class="form-group row width-50">
97:                                 <label class="col-3 control-label">{{ trans('lang.price') }}</label>
98:                                 <div class="col-7">

94:                                 </div>
95:                             </div>
96:                             <div class="form-group row width-50">
97:                                 <label class="col-3 control-label">{{ trans('lang.price') }}</label>
98:                                 <div class="col-7">
99:                                     <input type="number" class="form-control price" required>
100:                                     <div class="form-text text-muted">
101:                                         {{ trans('lang.item_price_help') }}
102:                                     </div>
103:                                 </div>

96:                             <div class="form-group row width-50">
97:                                 <label class="col-3 control-label">{{ trans('lang.price') }}</label>
98:                                 <div class="col-7">
99:                                     <input type="number" class="form-control price" required>
100:                                     <div class="form-text text-muted">
101:                                         {{ trans('lang.item_price_help') }}
102:                                     </div>
103:                                 </div>
104:                             </div>
105:                             <div class="form-group row width-50">

98:                                 <div class="col-7">
99:                                     <input type="number" class="form-control price" required>
100:                                     <div class="form-text text-muted">
101:                                         {{ trans('lang.item_price_help') }}
102:                                     </div>
103:                                 </div>
104:                             </div>
105:                             <div class="form-group row width-50">
106:                                 <label class="col-3 control-label">{{ trans('lang.item_discount') }}</label>
107:                                 <div class="col-7">

112:                                 </div>
113:                             </div>
114:                             <div class="form-group row width-50">
115:                                 <label class="col-3 control-label">{{ trans('lang.price_unit') }}</label>
116:                                 <div class="col-7">
117:                                     <select id='price_unit' name="price_unit" class="form-control" required>
118:                                         <option value="Hourly">{{ trans('lang.hourly') }}</option>
119:                                         <option value="Fixed">{{ trans('lang.fixed') }}</option>
120:                                     </select>
121:                                 </div>

114:                             <div class="form-group row width-50">
115:                                 <label class="col-3 control-label">{{ trans('lang.price_unit') }}</label>
116:                                 <div class="col-7">
117:                                     <select id='price_unit' name="price_unit" class="form-control" required>
118:                                         <option value="Hourly">{{ trans('lang.hourly') }}</option>
119:                                         <option value="Fixed">{{ trans('lang.fixed') }}</option>
120:                                     </select>
121:                                 </div>
122:                             </div>
123:                             <div class="form-group row width-50">

123:                             <div class="form-group row width-50">
124:                                 <label class="col-3 control-label">{{ trans('lang.item_image') }}</label>
125:                                 <div class="col-7">
126:                                     <input type="file" id="service_image" required>
127:                                     <div class="placeholder_img_thumb service_image"></div>
128:                                     <div id="uploding_image"></div>
129:                                     <div class="form-text text-muted">
130:                                         {{ trans('lang.item_image_help') }}
131:                                     </div>
132:                                 </div>

124:                                 <label class="col-3 control-label">{{ trans('lang.item_image') }}</label>
125:                                 <div class="col-7">
126:                                     <input type="file" id="service_image" required>
127:                                     <div class="placeholder_img_thumb service_image"></div>
128:                                     <div id="uploding_image"></div>
129:                                     <div class="form-text text-muted">
130:                                         {{ trans('lang.item_image_help') }}
131:                                     </div>
132:                                 </div>
133:                             </div>

188:                     <button type="button" class="btn btn-primary  save-form-btn"><i class="fa fa-save"></i>
189:                         {{ trans('lang.save') }}
190:                     </button>
191:                     @if (!isset($_GET['id']))
192:                         <a href="{!! route('ondemand.services.index') !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
193:                     @else
194:                         <a href="{!! route('ondemand.services.index', $_GET['id']) !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
195:                     @endif
196:                 </div>
197:             </div>

189:                         {{ trans('lang.save') }}
190:                     </button>
191:                     @if (!isset($_GET['id']))
192:                         <a href="{!! route('ondemand.services.index') !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
193:                     @else
194:                         <a href="{!! route('ondemand.services.index', $_GET['id']) !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
195:                     @endif
196:                 </div>
197:             </div>
198:         </div>

191:                     @if (!isset($_GET['id']))
192:                         <a href="{!! route('ondemand.services.index') !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
193:                     @else
194:                         <a href="{!! route('ondemand.services.index', $_GET['id']) !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
195:                     @endif
196:                 </div>
197:             </div>
198:         </div>
199:     </div>
200: @endsection

206:         var authorName = '';
207:         var createdAt = firebase.firestore.FieldValue.serverTimestamp();
208:         var photos = [];
209:         var author = database.collection('users').orderBy('createdAt', 'desc');
210:         var categories = database.collection('provider_categories').where('publish', '==', true);
211:         var googleApiKey = '';
212:         var photos = [];
213:         var serviceImageFileName = [];
214:         var serviceImageCount = 0;
215:         var placeholderImage = '';

207:         var createdAt = firebase.firestore.FieldValue.serverTimestamp();
208:         var photos = [];
209:         var author = database.collection('users').orderBy('createdAt', 'desc');
210:         var categories = database.collection('provider_categories').where('publish', '==', true);
211:         var googleApiKey = '';
212:         var photos = [];
213:         var serviceImageFileName = [];
214:         var serviceImageCount = 0;
215:         var placeholderImage = '';
216:         var placeholder = database.collection('settings').doc('placeHolderImage');

210:         var categories = database.collection('provider_categories').where('publish', '==', true);
211:         var googleApiKey = '';
212:         var photos = [];
213:         var serviceImageFileName = [];
214:         var serviceImageCount = 0;
215:         var placeholderImage = '';
216:         var placeholder = database.collection('settings').doc('placeHolderImage');
217:         var provider_id = "{{ @$_GET['id'] }}";
218:         var providerName = '';
219:         var providerPic = '';

211:         var googleApiKey = '';
212:         var photos = [];
213:         var serviceImageFileName = [];
214:         var serviceImageCount = 0;
215:         var placeholderImage = '';
216:         var placeholder = database.collection('settings').doc('placeHolderImage');
217:         var provider_id = "{{ @$_GET['id'] }}";
218:         var providerName = '';
219:         var providerPic = '';
220:         var providerPhone = '';

213:         var serviceImageFileName = [];
214:         var serviceImageCount = 0;
215:         var placeholderImage = '';
216:         var placeholder = database.collection('settings').doc('placeHolderImage');
217:         var provider_id = "{{ @$_GET['id'] }}";
218:         var providerName = '';
219:         var providerPic = '';
220:         var providerPhone = '';
221:         var productImagesCount = 0;
222:         var mapType = 'ONLINE';

214:         var serviceImageCount = 0;
215:         var placeholderImage = '';
216:         var placeholder = database.collection('settings').doc('placeHolderImage');
217:         var provider_id = "{{ @$_GET['id'] }}";
218:         var providerName = '';
219:         var providerPic = '';
220:         var providerPhone = '';
221:         var productImagesCount = 0;
222:         var mapType = 'ONLINE';
223:         var itemLimit = '-1';

215:         var placeholderImage = '';
216:         var placeholder = database.collection('settings').doc('placeHolderImage');
217:         var provider_id = "{{ @$_GET['id'] }}";
218:         var providerName = '';
219:         var providerPic = '';
220:         var providerPhone = '';
221:         var productImagesCount = 0;
222:         var mapType = 'ONLINE';
223:         var itemLimit = '-1';
224:         var createdItem = 0;

216:         var placeholder = database.collection('settings').doc('placeHolderImage');
217:         var provider_id = "{{ @$_GET['id'] }}";
218:         var providerName = '';
219:         var providerPic = '';
220:         var providerPhone = '';
221:         var productImagesCount = 0;
222:         var mapType = 'ONLINE';
223:         var itemLimit = '-1';
224:         var createdItem = 0;
225:         var subscriptionModel = false;

217:         var provider_id = "{{ @$_GET['id'] }}";
218:         var providerName = '';
219:         var providerPic = '';
220:         var providerPhone = '';
221:         var productImagesCount = 0;
222:         var mapType = 'ONLINE';
223:         var itemLimit = '-1';
224:         var createdItem = 0;
225:         var subscriptionModel = false;
226:         var commissionModel = false;

230:         var subscriptionTotalOrders = '';
231:         var subscriptionTotalOrders = '';
232:         var isSectionIdExist = false;
233:         var section_id = getCookie('section_id');
234:         database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
235:             var data = snapshots.data();
236:             if (data && data.selectedMapType && data.selectedMapType == "osm") {
237:                 mapType = "OFFLINE"
238:             }
239:         });

231:         var subscriptionTotalOrders = '';
232:         var isSectionIdExist = false;
233:         var section_id = getCookie('section_id');
234:         database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
235:             var data = snapshots.data();
236:             if (data && data.selectedMapType && data.selectedMapType == "osm") {
237:                 mapType = "OFFLINE"
238:             }
239:         });
240:         placeholder.get().then(async function(snapshotsimage) {

241:             var placeholderImageData = snapshotsimage.data();
242:             placeholderImage = placeholderImageData.image;
243:         })
244:         var subscriptionBusinessModel = database.collection('settings').doc("vendor");
245:         subscriptionBusinessModel.get().then(async function(snapshots) {
246:             var subscriptionSetting = snapshots.data();
247:             if (subscriptionSetting.subscription_model == true) {
248:                 subscriptionModel = true;
249:             }
250:         });

249:             }
250:         });
251:         $(document).ready(function() {
252:             database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function(snapshots) {
253:                 snapshots.docs.forEach((listval) => {
254:                     var data = listval.data();
255:                     $('#provider_select').append($("<option></option>")
256:                         .attr("value", data.id)
257:                         .text(data.firstName + ' ' + data.lastName)
258:                         .attr("data-authorName", data.firstName + ' ' + data.lastName)

252:             database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function(snapshots) {
253:                 snapshots.docs.forEach((listval) => {
254:                     var data = listval.data();
255:                     $('#provider_select').append($("<option></option>")
256:                         .attr("value", data.id)
257:                         .text(data.firstName + ' ' + data.lastName)
258:                         .attr("data-authorName", data.firstName + ' ' + data.lastName)
259:                         .attr("data-authorpic", data.profilePictureURL)
260:                         .attr("data-authorphone", data.phoneNumber));
261:                 })

260:                         .attr("data-authorphone", data.phoneNumber));
261:                 })
262:             });
263:             database.collection('sections').where('serviceTypeFlag', '==', 'ondemand-service').orderBy('order').get().then(async function(snapshots) {
264:                 snapshots.docs.forEach((listval) => {
265:                     var data = listval.data();
266:                     $('#section_id').append($("<option></option>")
267:                         .attr("value", data.id)
268:                         .attr("data-type", data.serviceTypeFlag)
269:                         .text(data.name + ' (' + data.serviceType + ')'));

263:             database.collection('sections').where('serviceTypeFlag', '==', 'ondemand-service').orderBy('order').get().then(async function(snapshots) {
264:                 snapshots.docs.forEach((listval) => {
265:                     var data = listval.data();
266:                     $('#section_id').append($("<option></option>")
267:                         .attr("value", data.id)
268:                         .attr("data-type", data.serviceTypeFlag)
269:                         .text(data.name + ' (' + data.serviceType + ')'));
270:                 });
271:             });
272:             if (provider_id != '') {

265:                     var data = listval.data();
266:                     $('#section_id').append($("<option></option>")
267:                         .attr("value", data.id)
268:                         .attr("data-type", data.serviceTypeFlag)
269:                         .text(data.name + ' (' + data.serviceType + ')'));
270:                 });
271:             });
272:             if (provider_id != '') {
273:                 getProviderInfo(provider_id);
274:             }

266:                     $('#section_id').append($("<option></option>")
267:                         .attr("value", data.id)
268:                         .attr("data-type", data.serviceTypeFlag)
269:                         .text(data.name + ' (' + data.serviceType + ')'));
270:                 });
271:             });
272:             if (provider_id != '') {
273:                 getProviderInfo(provider_id);
274:             }
275:             $('#provider_select').on('change', function() {

269:                         .text(data.name + ' (' + data.serviceType + ')'));
270:                 });
271:             });
272:             if (provider_id != '') {
273:                 getProviderInfo(provider_id);
274:             }
275:             $('#provider_select').on('change', function() {
276:                 var providerId = $(this).val();
277:                 getProviderInfo(providerId);
278:             })

270:                 });
271:             });
272:             if (provider_id != '') {
273:                 getProviderInfo(provider_id);
274:             }
275:             $('#provider_select').on('change', function() {
276:                 var providerId = $(this).val();
277:                 getProviderInfo(providerId);
278:             })
279:             $('#section_id').on('change', function() {

272:             if (provider_id != '') {
273:                 getProviderInfo(provider_id);
274:             }
275:             $('#provider_select').on('change', function() {
276:                 var providerId = $(this).val();
277:                 getProviderInfo(providerId);
278:             })
279:             $('#section_id').on('change', function() {
280:                 var section_id = $(this).val();
281:                 if (section_id) {

273:                 getProviderInfo(provider_id);
274:             }
275:             $('#provider_select').on('change', function() {
276:                 var providerId = $(this).val();
277:                 getProviderInfo(providerId);
278:             })
279:             $('#section_id').on('change', function() {
280:                 var section_id = $(this).val();
281:                 if (section_id) {
282:                     categories.where('parentCategoryId', '==', null).where('sectionId', '==', section_id).get().then(async function(snapshots) {

274:             }
275:             $('#provider_select').on('change', function() {
276:                 var providerId = $(this).val();
277:                 getProviderInfo(providerId);
278:             })
279:             $('#section_id').on('change', function() {
280:                 var section_id = $(this).val();
281:                 if (section_id) {
282:                     categories.where('parentCategoryId', '==', null).where('sectionId', '==', section_id).get().then(async function(snapshots) {
283:                         if (snapshots.docs.length > 0) {

276:                 var providerId = $(this).val();
277:                 getProviderInfo(providerId);
278:             })
279:             $('#section_id').on('change', function() {
280:                 var section_id = $(this).val();
281:                 if (section_id) {
282:                     categories.where('parentCategoryId', '==', null).where('sectionId', '==', section_id).get().then(async function(snapshots) {
283:                         if (snapshots.docs.length > 0) {
284:                             $('#item_category').html('<option value="">{{ trans('lang.select_category') }}</option>');
285:                             snapshots.docs.forEach((listval) => {

277:                 getProviderInfo(providerId);
278:             })
279:             $('#section_id').on('change', function() {
280:                 var section_id = $(this).val();
281:                 if (section_id) {
282:                     categories.where('parentCategoryId', '==', null).where('sectionId', '==', section_id).get().then(async function(snapshots) {
283:                         if (snapshots.docs.length > 0) {
284:                             $('#item_category').html('<option value="">{{ trans('lang.select_category') }}</option>');
285:                             snapshots.docs.forEach((listval) => {
286:                                 var data = listval.data();

278:             })
279:             $('#section_id').on('change', function() {
280:                 var section_id = $(this).val();
281:                 if (section_id) {
282:                     categories.where('parentCategoryId', '==', null).where('sectionId', '==', section_id).get().then(async function(snapshots) {
283:                         if (snapshots.docs.length > 0) {
284:                             $('#item_category').html('<option value="">{{ trans('lang.select_category') }}</option>');
285:                             snapshots.docs.forEach((listval) => {
286:                                 var data = listval.data();
287:                                 $('#item_category').append($("<option></option>")

279:             $('#section_id').on('change', function() {
280:                 var section_id = $(this).val();
281:                 if (section_id) {
282:                     categories.where('parentCategoryId', '==', null).where('sectionId', '==', section_id).get().then(async function(snapshots) {
283:                         if (snapshots.docs.length > 0) {
284:                             $('#item_category').html('<option value="">{{ trans('lang.select_category') }}</option>');
285:                             snapshots.docs.forEach((listval) => {
286:                                 var data = listval.data();
287:                                 $('#item_category').append($("<option></option>")
288:                                     .attr("value", data.id)

281:                 if (section_id) {
282:                     categories.where('parentCategoryId', '==', null).where('sectionId', '==', section_id).get().then(async function(snapshots) {
283:                         if (snapshots.docs.length > 0) {
284:                             $('#item_category').html('<option value="">{{ trans('lang.select_category') }}</option>');
285:                             snapshots.docs.forEach((listval) => {
286:                                 var data = listval.data();
287:                                 $('#item_category').append($("<option></option>")
288:                                     .attr("value", data.id)
289:                                     .text(data.title));
290:                             });

284:                             $('#item_category').html('<option value="">{{ trans('lang.select_category') }}</option>');
285:                             snapshots.docs.forEach((listval) => {
286:                                 var data = listval.data();
287:                                 $('#item_category').append($("<option></option>")
288:                                     .attr("value", data.id)
289:                                     .text(data.title));
290:                             });
291:                         } else {
292:                             $('#item_category').html('<option value="">{{ trans('lang.select_category') }}</option>');
293:                         }

289:                                     .text(data.title));
290:                             });
291:                         } else {
292:                             $('#item_category').html('<option value="">{{ trans('lang.select_category') }}</option>');
293:                         }
294:                     });
295:                 } else {
296:                     $('#item_category').html('<option value="">{{ trans('lang.select_category') }}</option>');
297:                 }
298:                 $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');

293:                         }
294:                     });
295:                 } else {
296:                     $('#item_category').html('<option value="">{{ trans('lang.select_category') }}</option>');
297:                 }
298:                 $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
299:             })
300:             $('#item_category').on('change', function() {
301:                 var categoryId = $(this).val();
302:                 if (categoryId) {

295:                 } else {
296:                     $('#item_category').html('<option value="">{{ trans('lang.select_category') }}</option>');
297:                 }
298:                 $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
299:             })
300:             $('#item_category').on('change', function() {
301:                 var categoryId = $(this).val();
302:                 if (categoryId) {
303:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {
304:                         if (snapshots.docs.length > 0) {

297:                 }
298:                 $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
299:             })
300:             $('#item_category').on('change', function() {
301:                 var categoryId = $(this).val();
302:                 if (categoryId) {
303:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {
304:                         if (snapshots.docs.length > 0) {
305:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
306:                             snapshots.docs.forEach((listval) => {

298:                 $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
299:             })
300:             $('#item_category').on('change', function() {
301:                 var categoryId = $(this).val();
302:                 if (categoryId) {
303:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {
304:                         if (snapshots.docs.length > 0) {
305:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
306:                             snapshots.docs.forEach((listval) => {
307:                                 var data = listval.data();

299:             })
300:             $('#item_category').on('change', function() {
301:                 var categoryId = $(this).val();
302:                 if (categoryId) {
303:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {
304:                         if (snapshots.docs.length > 0) {
305:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
306:                             snapshots.docs.forEach((listval) => {
307:                                 var data = listval.data();
308:                                 $('#sub_category').append($("<option></option>")

300:             $('#item_category').on('change', function() {
301:                 var categoryId = $(this).val();
302:                 if (categoryId) {
303:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {
304:                         if (snapshots.docs.length > 0) {
305:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
306:                             snapshots.docs.forEach((listval) => {
307:                                 var data = listval.data();
308:                                 $('#sub_category').append($("<option></option>")
309:                                     .attr("value", data.id)

302:                 if (categoryId) {
303:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {
304:                         if (snapshots.docs.length > 0) {
305:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
306:                             snapshots.docs.forEach((listval) => {
307:                                 var data = listval.data();
308:                                 $('#sub_category').append($("<option></option>")
309:                                     .attr("value", data.id)
310:                                     .text(data.title));
311:                             });

305:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
306:                             snapshots.docs.forEach((listval) => {
307:                                 var data = listval.data();
308:                                 $('#sub_category').append($("<option></option>")
309:                                     .attr("value", data.id)
310:                                     .text(data.title));
311:                             });
312:                         } else {
313:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
314:                         }

310:                                     .text(data.title));
311:                             });
312:                         } else {
313:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
314:                         }
315:                     });
316:                 } else {
317:                     $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
318:                 }
319:             })

314:                         }
315:                     });
316:                 } else {
317:                     $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
318:                 }
319:             })
320:             function initialize(id) {
321:                 if (mapType == "OFFLINE") {
322:                     var input = document.getElementById('address');
323:                     var autocompleteList = document.getElementById('autocomplete-list');

333:                                 autocompleteList.innerHTML = '';
334:                                 data.forEach(place => {
335:                                     var item = document.createElement('div');
336:                                     item.classList.add('autocomplete-item');
337:                                     item.innerText = place.display_name;
338:                                     item.onclick = function() {
339:                                         input.value = place.display_name;
340:                                         input.setAttribute('data-latitude', place.lat);
341:                                         input.setAttribute('data-longitude', place.lon);
342:                                         if (place.address) {

379:                 initialize(id);
380:             });
381:             $(".save-form-btn").click(async function() {
382:                 var id = database.collection("tmp").doc().id;
383:                 var name = $(".service_name").val();
384:                 var price = $(".price").val();
385:                 var discount = $(".item_discount").val();
386:                 var category = $("#item_category option:selected").val();
387:                 var sub_category = $("#sub_category option:selected").val();
388:                 var description = $("#item_description").val();

380:             });
381:             $(".save-form-btn").click(async function() {
382:                 var id = database.collection("tmp").doc().id;
383:                 var name = $(".service_name").val();
384:                 var price = $(".price").val();
385:                 var discount = $(".item_discount").val();
386:                 var category = $("#item_category option:selected").val();
387:                 var sub_category = $("#sub_category option:selected").val();
388:                 var description = $("#item_description").val();
389:                 var itemPublish = $(".item_publish").is(":checked");

381:             $(".save-form-btn").click(async function() {
382:                 var id = database.collection("tmp").doc().id;
383:                 var name = $(".service_name").val();
384:                 var price = $(".price").val();
385:                 var discount = $(".item_discount").val();
386:                 var category = $("#item_category option:selected").val();
387:                 var sub_category = $("#sub_category option:selected").val();
388:                 var description = $("#item_description").val();
389:                 var itemPublish = $(".item_publish").is(":checked");
390:                 var price_unit = $("#price_unit option:selected").val();

383:                 var name = $(".service_name").val();
384:                 var price = $(".price").val();
385:                 var discount = $(".item_discount").val();
386:                 var category = $("#item_category option:selected").val();
387:                 var sub_category = $("#sub_category option:selected").val();
388:                 var description = $("#item_description").val();
389:                 var itemPublish = $(".item_publish").is(":checked");
390:                 var price_unit = $("#price_unit option:selected").val();
391:                 var address = $("#address").val();
392:                 var startTime = $("#start_Time").val();

384:                 var price = $(".price").val();
385:                 var discount = $(".item_discount").val();
386:                 var category = $("#item_category option:selected").val();
387:                 var sub_category = $("#sub_category option:selected").val();
388:                 var description = $("#item_description").val();
389:                 var itemPublish = $(".item_publish").is(":checked");
390:                 var price_unit = $("#price_unit option:selected").val();
391:                 var address = $("#address").val();
392:                 var startTime = $("#start_Time").val();
393:                 var endTime = $("#end_Time").val();

387:                 var sub_category = $("#sub_category option:selected").val();
388:                 var description = $("#item_description").val();
389:                 var itemPublish = $(".item_publish").is(":checked");
390:                 var price_unit = $("#price_unit option:selected").val();
391:                 var address = $("#address").val();
392:                 var startTime = $("#start_Time").val();
393:                 var endTime = $("#end_Time").val();
394:                 var longitude = parseFloat($('#address').attr('data-longitude'));
395:                 var latitude = parseFloat($('#address').attr('data-latitude'));
396:                 var selectedOption = $('#provider_select').find("option:selected");

393:                 var endTime = $("#end_Time").val();
394:                 var longitude = parseFloat($('#address').attr('data-longitude'));
395:                 var latitude = parseFloat($('#address').attr('data-latitude'));
396:                 var selectedOption = $('#provider_select').find("option:selected");
397:                 var providerUserId = $("#provider_select").val();
398:                 if (parseInt(itemLimit) == -1 || parseInt(createdItem) < parseInt(itemLimit)) {
399:                     if (provider_id != '') {
400:                         var providerId = provider_id;
401:                         var authorName = providerName;
402:                         var authorProfilePic = providerPic;

394:                 var longitude = parseFloat($('#address').attr('data-longitude'));
395:                 var latitude = parseFloat($('#address').attr('data-latitude'));
396:                 var selectedOption = $('#provider_select').find("option:selected");
397:                 var providerUserId = $("#provider_select").val();
398:                 if (parseInt(itemLimit) == -1 || parseInt(createdItem) < parseInt(itemLimit)) {
399:                     if (provider_id != '') {
400:                         var providerId = provider_id;
401:                         var authorName = providerName;
402:                         var authorProfilePic = providerPic;
403:                         var authorPhone = providerPhone;

396:                 var selectedOption = $('#provider_select').find("option:selected");
397:                 var providerUserId = $("#provider_select").val();
398:                 if (parseInt(itemLimit) == -1 || parseInt(createdItem) < parseInt(itemLimit)) {
399:                     if (provider_id != '') {
400:                         var providerId = provider_id;
401:                         var authorName = providerName;
402:                         var authorProfilePic = providerPic;
403:                         var authorPhone = providerPhone;
404:                     } else {
405:                         var providerId = $("#provider_select").val();

397:                 var providerUserId = $("#provider_select").val();
398:                 if (parseInt(itemLimit) == -1 || parseInt(createdItem) < parseInt(itemLimit)) {
399:                     if (provider_id != '') {
400:                         var providerId = provider_id;
401:                         var authorName = providerName;
402:                         var authorProfilePic = providerPic;
403:                         var authorPhone = providerPhone;
404:                     } else {
405:                         var providerId = $("#provider_select").val();
406:                         var authorName = selectedOption.attr("data-authorname");

398:                 if (parseInt(itemLimit) == -1 || parseInt(createdItem) < parseInt(itemLimit)) {
399:                     if (provider_id != '') {
400:                         var providerId = provider_id;
401:                         var authorName = providerName;
402:                         var authorProfilePic = providerPic;
403:                         var authorPhone = providerPhone;
404:                     } else {
405:                         var providerId = $("#provider_select").val();
406:                         var authorName = selectedOption.attr("data-authorname");
407:                         var authorProfilePic = selectedOption.attr("data-authorpic");

399:                     if (provider_id != '') {
400:                         var providerId = provider_id;
401:                         var authorName = providerName;
402:                         var authorProfilePic = providerPic;
403:                         var authorPhone = providerPhone;
404:                     } else {
405:                         var providerId = $("#provider_select").val();
406:                         var authorName = selectedOption.attr("data-authorname");
407:                         var authorProfilePic = selectedOption.attr("data-authorpic");
408:                         var authorPhone = selectedOption.attr("data-authorphone");

400:                         var providerId = provider_id;
401:                         var authorName = providerName;
402:                         var authorProfilePic = providerPic;
403:                         var authorPhone = providerPhone;
404:                     } else {
405:                         var providerId = $("#provider_select").val();
406:                         var authorName = selectedOption.attr("data-authorname");
407:                         var authorProfilePic = selectedOption.attr("data-authorpic");
408:                         var authorPhone = selectedOption.attr("data-authorphone");
409:                     }

402:                         var authorProfilePic = providerPic;
403:                         var authorPhone = providerPhone;
404:                     } else {
405:                         var providerId = $("#provider_select").val();
406:                         var authorName = selectedOption.attr("data-authorname");
407:                         var authorProfilePic = selectedOption.attr("data-authorpic");
408:                         var authorPhone = selectedOption.attr("data-authorphone");
409:                     }
410:                     var section_id = $("#section_id").val();
411:                     $("input:checkbox[name=days]:checked").each(function() {

407:                         var authorProfilePic = selectedOption.attr("data-authorpic");
408:                         var authorPhone = selectedOption.attr("data-authorphone");
409:                     }
410:                     var section_id = $("#section_id").val();
411:                     $("input:checkbox[name=days]:checked").each(function() {
412:                         days.push($(this).val());
413:                     });
414:                     if (discount == '') {
415:                         discount = "0";
416:                     }

417:                     if (name == '') {
418:                         $(".error_top").show();
419:                         $(".error_top").html("");
420:                         $(".error_top").append("<p>{{ trans('lang.insert_service_name_error') }}</p>");
421:                         window.scrollTo(0, 0);
422:                     } else if (section_id == '') {
423:                         $(".error_top").show();
424:                         $(".error_top").html("");
425:                         $(".error_top").append("<p>{{ trans('lang.select_section_error') }}</p>");
426:                         window.scrollTo(0, 0);

419:                         $(".error_top").html("");
420:                         $(".error_top").append("<p>{{ trans('lang.insert_service_name_error') }}</p>");
421:                         window.scrollTo(0, 0);
422:                     } else if (section_id == '') {
423:                         $(".error_top").show();
424:                         $(".error_top").html("");
425:                         $(".error_top").append("<p>{{ trans('lang.select_section_error') }}</p>");
426:                         window.scrollTo(0, 0);
427:                     } else if (category == '') {
428:                         $(".error_top").show();

424:                         $(".error_top").html("");
425:                         $(".error_top").append("<p>{{ trans('lang.select_section_error') }}</p>");
426:                         window.scrollTo(0, 0);
427:                     } else if (category == '') {
428:                         $(".error_top").show();
429:                         $(".error_top").html("");
430:                         $(".error_top").append("<p>{{ trans('lang.select_service_category_error') }}</p>");
431:                         window.scrollTo(0, 0);
432:                     } else if (sub_category == '') {
433:                         $(".error_top").show();

427:                     } else if (category == '') {
428:                         $(".error_top").show();
429:                         $(".error_top").html("");
430:                         $(".error_top").append("<p>{{ trans('lang.select_service_category_error') }}</p>");
431:                         window.scrollTo(0, 0);
432:                     } else if (sub_category == '') {
433:                         $(".error_top").show();
434:                         $(".error_top").html("");
435:                         $(".error_top").append("<p>{{ trans('lang.select_service_sub_category_error') }}</p>");
436:                         window.scrollTo(0, 0);

429:                         $(".error_top").html("");
430:                         $(".error_top").append("<p>{{ trans('lang.select_service_category_error') }}</p>");
431:                         window.scrollTo(0, 0);
432:                     } else if (sub_category == '') {
433:                         $(".error_top").show();
434:                         $(".error_top").html("");
435:                         $(".error_top").append("<p>{{ trans('lang.select_service_sub_category_error') }}</p>");
436:                         window.scrollTo(0, 0);
437:                     } else if (providerId == '') {
438:                         $(".error_top").show();

432:                     } else if (sub_category == '') {
433:                         $(".error_top").show();
434:                         $(".error_top").html("");
435:                         $(".error_top").append("<p>{{ trans('lang.select_service_sub_category_error') }}</p>");
436:                         window.scrollTo(0, 0);
437:                     } else if (providerId == '') {
438:                         $(".error_top").show();
439:                         $(".error_top").html("");
440:                         $(".error_top").append("<p>{{ trans('lang.select_service_provider_error') }}</p>");
441:                         window.scrollTo(0, 0);

434:                         $(".error_top").html("");
435:                         $(".error_top").append("<p>{{ trans('lang.select_service_sub_category_error') }}</p>");
436:                         window.scrollTo(0, 0);
437:                     } else if (providerId == '') {
438:                         $(".error_top").show();
439:                         $(".error_top").html("");
440:                         $(".error_top").append("<p>{{ trans('lang.select_service_provider_error') }}</p>");
441:                         window.scrollTo(0, 0);
442:                     } else if (price == '') {
443:                         $(".error_top").show();

437:                     } else if (providerId == '') {
438:                         $(".error_top").show();
439:                         $(".error_top").html("");
440:                         $(".error_top").append("<p>{{ trans('lang.select_service_provider_error') }}</p>");
441:                         window.scrollTo(0, 0);
442:                     } else if (price == '') {
443:                         $(".error_top").show();
444:                         $(".error_top").html("");
445:                         $(".error_top").append("<p>{{ trans('lang.insert_service_price_error') }}</p>");
446:                         window.scrollTo(0, 0);

439:                         $(".error_top").html("");
440:                         $(".error_top").append("<p>{{ trans('lang.select_service_provider_error') }}</p>");
441:                         window.scrollTo(0, 0);
442:                     } else if (price == '') {
443:                         $(".error_top").show();
444:                         $(".error_top").html("");
445:                         $(".error_top").append("<p>{{ trans('lang.insert_service_price_error') }}</p>");
446:                         window.scrollTo(0, 0);
447:                     } else if (parseInt(price) < parseInt(discount)) {
448:                         $(".error_top").show();

442:                     } else if (price == '') {
443:                         $(".error_top").show();
444:                         $(".error_top").html("");
445:                         $(".error_top").append("<p>{{ trans('lang.insert_service_price_error') }}</p>");
446:                         window.scrollTo(0, 0);
447:                     } else if (parseInt(price) < parseInt(discount)) {
448:                         $(".error_top").show();
449:                         $(".error_top").html("");
450:                         $(".error_top").append("<p>{{ trans('lang.price_should_not_less_then_discount_error') }}</p>");
451:                         window.scrollTo(0, 0);

444:                         $(".error_top").html("");
445:                         $(".error_top").append("<p>{{ trans('lang.insert_service_price_error') }}</p>");
446:                         window.scrollTo(0, 0);
447:                     } else if (parseInt(price) < parseInt(discount)) {
448:                         $(".error_top").show();
449:                         $(".error_top").html("");
450:                         $(".error_top").append("<p>{{ trans('lang.price_should_not_less_then_discount_error') }}</p>");
451:                         window.scrollTo(0, 0);
452:                     } else if (photos == '') {
453:                         $(".error_top").show();

447:                     } else if (parseInt(price) < parseInt(discount)) {
448:                         $(".error_top").show();
449:                         $(".error_top").html("");
450:                         $(".error_top").append("<p>{{ trans('lang.price_should_not_less_then_discount_error') }}</p>");
451:                         window.scrollTo(0, 0);
452:                     } else if (photos == '') {
453:                         $(".error_top").show();
454:                         $(".error_top").html("");
455:                         $(".error_top").append("<p>{{ trans('lang.image_required') }}</p>");
456:                         window.scrollTo(0, 0);

457:                     } else if (description == '') {
458:                         $(".error_top").show();
459:                         $(".error_top").html("");
460:                         $(".error_top").append("<p>{{ trans('lang.insert_service_description_error') }}</p>");
461:                         window.scrollTo(0, 0);
462:                     } else if (isNaN(latitude) || isNaN(longitude)) {
463:                         $(".error_top").show();
464:                         $(".error_top").html("");
465:                         $(".error_top").append("<p>{{ trans('lang.service_select_address_error') }}</p>");
466:                         window.scrollTo(0, 0);

462:                     } else if (isNaN(latitude) || isNaN(longitude)) {
463:                         $(".error_top").show();
464:                         $(".error_top").html("");
465:                         $(".error_top").append("<p>{{ trans('lang.service_select_address_error') }}</p>");
466:                         window.scrollTo(0, 0);
467:                     } else if (days.length == 0) {
468:                         $(".error_top").show();
469:                         $(".error_top").html("");
470:                         $(".error_top").append("<p>{{ trans('lang.service_select_days_error') }}</p>");
471:                         window.scrollTo(0, 0);

467:                     } else if (days.length == 0) {
468:                         $(".error_top").show();
469:                         $(".error_top").html("");
470:                         $(".error_top").append("<p>{{ trans('lang.service_select_days_error') }}</p>");
471:                         window.scrollTo(0, 0);
472:                     } else if (startTime == '' || endTime == '') {
473:                         $(".error_top").show();
474:                         $(".error_top").html("");
475:                         $(".error_top").append("<p>{{ trans('lang.service_select_time_error') }}</p>");
476:                         window.scrollTo(0, 0);

472:                     } else if (startTime == '' || endTime == '') {
473:                         $(".error_top").show();
474:                         $(".error_top").html("");
475:                         $(".error_top").append("<p>{{ trans('lang.service_select_time_error') }}</p>");
476:                         window.scrollTo(0, 0);
477:                     } else if (startTime > endTime) {
478:                         $(".error_top").show();
479:                         $(".error_top").html("");
480:                         $(".error_top").append("<p>{{ trans('lang.start_time_grater_than_endtime_error') }}</p>");
481:                         window.scrollTo(0, 0);

490: 
491:                             var objects = {
492:                                 "address": address,
493:                                 'author': providerId,
494:                                 'authorName': authorName,
495:                                 'authorProfilePic': authorProfilePic,
496:                                 'categoryId': category,
497:                                 'createdAt': createdAt,
498:                                 'days': days,
499:                                 'description': description,

493:                                 'author': providerId,
494:                                 'authorName': authorName,
495:                                 'authorProfilePic': authorProfilePic,
496:                                 'categoryId': category,
497:                                 'createdAt': createdAt,
498:                                 'days': days,
499:                                 'description': description,
500:                                 'disPrice': discount,
501:                                 'id': id,
502:                                 'latitude': latitude,

497:                                 'createdAt': createdAt,
498:                                 'days': days,
499:                                 'description': description,
500:                                 'disPrice': discount,
501:                                 'id': id,
502:                                 'latitude': latitude,
503:                                 'longitude': longitude,
504:                                 'phoneNumber': authorPhone,
505:                                 'photos': IMG,
506:                                 'price': price,

503:                                 'longitude': longitude,
504:                                 'phoneNumber': authorPhone,
505:                                 'photos': IMG,
506:                                 'price': price,
507:                                 'priceUnit': price_unit,
508:                                 'publish': itemPublish,
509:                                 'reviewsCount': 0,
510:                                 'reviewsSum': 0,
511:                                 'sectionId': section_id,
512:                                 'startTime': startTime,

504:                                 'phoneNumber': authorPhone,
505:                                 'photos': IMG,
506:                                 'price': price,
507:                                 'priceUnit': price_unit,
508:                                 'publish': itemPublish,
509:                                 'reviewsCount': 0,
510:                                 'reviewsSum': 0,
511:                                 'sectionId': section_id,
512:                                 'startTime': startTime,
513:                                 'endTime': endTime,

508:                                 'publish': itemPublish,
509:                                 'reviewsCount': 0,
510:                                 'reviewsSum': 0,
511:                                 'sectionId': section_id,
512:                                 'startTime': startTime,
513:                                 'endTime': endTime,
514:                                 'subCategoryId': sub_category,
515:                                 'title': name,
516:                                 'coordinates': new firebase.firestore.GeoPoint(latitude, longitude),
517:                                 'g' : {

511:                                 'sectionId': section_id,
512:                                 'startTime': startTime,
513:                                 'endTime': endTime,
514:                                 'subCategoryId': sub_category,
515:                                 'title': name,
516:                                 'coordinates': new firebase.firestore.GeoPoint(latitude, longitude),
517:                                 'g' : {
518:                                     'geohash' : encodeGeohash(latitude, longitude),
519:                                     'geopoint' : new firebase.firestore.GeoPoint(latitude, longitude)
520:                                 },

523:                                 'subscriptionExpiryDate': subscriptionExpiryDate,
524:                                 'subscriptionTotalOrders': subscriptionTotalOrders
525:                             };
526:                             database.collection('providers_services').doc(id).set(objects).then(async function(result) {
527:                                 if (!isSectionIdExist) {
528:                                     var commissionObj = null;
529:                                     await database.collection('sections').doc(section_id).get().then(async function(snapshot) {
530:                                         commissionObj = snapshot.data().adminCommision;
531:                                         await database.collection('users').doc(providerId).update({
532:                                             'adminCommission': commissionObj,

526:                             database.collection('providers_services').doc(id).set(objects).then(async function(result) {
527:                                 if (!isSectionIdExist) {
528:                                     var commissionObj = null;
529:                                     await database.collection('sections').doc(section_id).get().then(async function(snapshot) {
530:                                         commissionObj = snapshot.data().adminCommision;
531:                                         await database.collection('users').doc(providerId).update({
532:                                             'adminCommission': commissionObj,
533:                                             'section_id': section_id
534:                                         });
535:                                     });

528:                                     var commissionObj = null;
529:                                     await database.collection('sections').doc(section_id).get().then(async function(snapshot) {
530:                                         commissionObj = snapshot.data().adminCommision;
531:                                         await database.collection('users').doc(providerId).update({
532:                                             'adminCommission': commissionObj,
533:                                             'section_id': section_id
534:                                         });
535:                                     });
536:                                 }
537:                                 if (provider_id == '') {

530:                                         commissionObj = snapshot.data().adminCommision;
531:                                         await database.collection('users').doc(providerId).update({
532:                                             'adminCommission': commissionObj,
533:                                             'section_id': section_id
534:                                         });
535:                                     });
536:                                 }
537:                                 if (provider_id == '') {
538:                                     window.location.href = '{{ route('ondemand.services.index') }}';
539:                                 } else {

534:                                         });
535:                                     });
536:                                 }
537:                                 if (provider_id == '') {
538:                                     window.location.href = '{{ route('ondemand.services.index') }}';
539:                                 } else {
540:                                     window.location.href = '{{ route('ondemand.services.index', @$_GET['id']) }}';
541:                                 }
542:                             });
543:                         }).catch(err => {

535:                                     });
536:                                 }
537:                                 if (provider_id == '') {
538:                                     window.location.href = '{{ route('ondemand.services.index') }}';
539:                                 } else {
540:                                     window.location.href = '{{ route('ondemand.services.index', @$_GET['id']) }}';
541:                                 }
542:                             });
543:                         }).catch(err => {
544:                             jQuery("#data-table_processing").hide();

537:                                 if (provider_id == '') {
538:                                     window.location.href = '{{ route('ondemand.services.index') }}';
539:                                 } else {
540:                                     window.location.href = '{{ route('ondemand.services.index', @$_GET['id']) }}';
541:                                 }
542:                             });
543:                         }).catch(err => {
544:                             jQuery("#data-table_processing").hide();
545:                             $(".error_top").show();
546:                             $(".error_top").html("");

552:                     $(".error_top").show();
553:                     $(".error_top").html("");
554:                     $(".error_top").append(
555:                         "<p>{{ trans('lang.create_service_limit_exceed') }}</p>"
556:                     );
557:                     window.scrollTo(0, 0);
558:                 }
559:             })
560:         })
561:         var storageRef = firebase.storage().ref('images');

```

### FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\edit.blade.php
```text
19:     <div class="page-wrapper">
20:         <div class="row page-titles">
21:             <div class="col-md-5 align-self-center">
22:                 <h3 class="text-themecolor">{{ trans('lang.service_plural') }}</h3>
23:             </div>
24:             <div class="col-md-7 align-self-center">
25:                 <ol class="breadcrumb">
26:                     <li class="breadcrumb-item"><a href="{!! route('dashboard') !!}">{{ trans('lang.dashboard') }}</a></li>
27:                     @if (!isset($_GET['id']))
28:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index') !!}">{{ trans('lang.service_plural') }}</a>

24:             <div class="col-md-7 align-self-center">
25:                 <ol class="breadcrumb">
26:                     <li class="breadcrumb-item"><a href="{!! route('dashboard') !!}">{{ trans('lang.dashboard') }}</a></li>
27:                     @if (!isset($_GET['id']))
28:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index') !!}">{{ trans('lang.service_plural') }}</a>
29:                         </li>
30:                     @else
31:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index', @$_GET['id']) !!}">{{ trans('lang.service_plural') }}</a>
32:                         </li>
33:                     @endif

25:                 <ol class="breadcrumb">
26:                     <li class="breadcrumb-item"><a href="{!! route('dashboard') !!}">{{ trans('lang.dashboard') }}</a></li>
27:                     @if (!isset($_GET['id']))
28:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index') !!}">{{ trans('lang.service_plural') }}</a>
29:                         </li>
30:                     @else
31:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index', @$_GET['id']) !!}">{{ trans('lang.service_plural') }}</a>
32:                         </li>
33:                     @endif
34:                     <li class="breadcrumb-item active">{{ trans('lang.service_edit') }}</li>

28:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index') !!}">{{ trans('lang.service_plural') }}</a>
29:                         </li>
30:                     @else
31:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index', @$_GET['id']) !!}">{{ trans('lang.service_plural') }}</a>
32:                         </li>
33:                     @endif
34:                     <li class="breadcrumb-item active">{{ trans('lang.service_edit') }}</li>
35:                 </ol>
36:             </div>
37:         </div>

31:                         <li class="breadcrumb-item"><a href="{!! route('ondemand.services.index', @$_GET['id']) !!}">{{ trans('lang.service_plural') }}</a>
32:                         </li>
33:                     @endif
34:                     <li class="breadcrumb-item active">{{ trans('lang.service_edit') }}</li>
35:                 </ol>
36:             </div>
37:         </div>
38:         <div>
39:             <div class="card-body">
40:                 <div class="error_top" style="display:none"></div>

39:             <div class="card-body">
40:                 <div class="error_top" style="display:none"></div>
41:                 <div class="row vendor_payout_create">
42:                     <div class="vendor_payout_create-inner service_detail_div">
43:                         <fieldset>
44:                             <legend>{{ trans('lang.service_information') }}</legend>
45:                             <div class="form-group row width-50">
46:                                 <input type="hidden" class="form-control author_name">
47:                                 <input type="hidden" class="form-control author_profile">
48:                                 <label class="col-3 control-label">{{ trans('lang.service_name') }}</label>

41:                 <div class="row vendor_payout_create">
42:                     <div class="vendor_payout_create-inner service_detail_div">
43:                         <fieldset>
44:                             <legend>{{ trans('lang.service_information') }}</legend>
45:                             <div class="form-group row width-50">
46:                                 <input type="hidden" class="form-control author_name">
47:                                 <input type="hidden" class="form-control author_profile">
48:                                 <label class="col-3 control-label">{{ trans('lang.service_name') }}</label>
49:                                 <div class="col-7">
50:                                     <input type="text" class="form-control service_name" required>

45:                             <div class="form-group row width-50">
46:                                 <input type="hidden" class="form-control author_name">
47:                                 <input type="hidden" class="form-control author_profile">
48:                                 <label class="col-3 control-label">{{ trans('lang.service_name') }}</label>
49:                                 <div class="col-7">
50:                                     <input type="text" class="form-control service_name" required>
51:                                     <div class="form-text text-muted">
52:                                         {{ trans('lang.service_name_help') }}
53:                                     </div>
54:                                 </div>

47:                                 <input type="hidden" class="form-control author_profile">
48:                                 <label class="col-3 control-label">{{ trans('lang.service_name') }}</label>
49:                                 <div class="col-7">
50:                                     <input type="text" class="form-control service_name" required>
51:                                     <div class="form-text text-muted">
52:                                         {{ trans('lang.service_name_help') }}
53:                                     </div>
54:                                 </div>
55:                             </div>
56:                             <div class="form-group row width-50">

49:                                 <div class="col-7">
50:                                     <input type="text" class="form-control service_name" required>
51:                                     <div class="form-text text-muted">
52:                                         {{ trans('lang.service_name_help') }}
53:                                     </div>
54:                                 </div>
55:                             </div>
56:                             <div class="form-group row width-50">
57:                                 <label class="col-3 control-label">{{ trans('lang.item_category_id') }}</label>
58:                                 <div class="col-7">

54:                                 </div>
55:                             </div>
56:                             <div class="form-group row width-50">
57:                                 <label class="col-3 control-label">{{ trans('lang.item_category_id') }}</label>
58:                                 <div class="col-7">
59:                                     <select id='item_category' name="item_category" class="form-control item_category" required>
60:                                         <option value="">{{ trans('lang.select_category') }}</option>
61:                                     </select>
62:                                     <div class="form-text text-muted">
63:                                         {{ trans('lang.item_category_id_help') }}

56:                             <div class="form-group row width-50">
57:                                 <label class="col-3 control-label">{{ trans('lang.item_category_id') }}</label>
58:                                 <div class="col-7">
59:                                     <select id='item_category' name="item_category" class="form-control item_category" required>
60:                                         <option value="">{{ trans('lang.select_category') }}</option>
61:                                     </select>
62:                                     <div class="form-text text-muted">
63:                                         {{ trans('lang.item_category_id_help') }}
64:                                     </div>
65:                                 </div>

57:                                 <label class="col-3 control-label">{{ trans('lang.item_category_id') }}</label>
58:                                 <div class="col-7">
59:                                     <select id='item_category' name="item_category" class="form-control item_category" required>
60:                                         <option value="">{{ trans('lang.select_category') }}</option>
61:                                     </select>
62:                                     <div class="form-text text-muted">
63:                                         {{ trans('lang.item_category_id_help') }}
64:                                     </div>
65:                                 </div>
66:                             </div>

60:                                         <option value="">{{ trans('lang.select_category') }}</option>
61:                                     </select>
62:                                     <div class="form-text text-muted">
63:                                         {{ trans('lang.item_category_id_help') }}
64:                                     </div>
65:                                 </div>
66:                             </div>
67:                             <div class="form-group row width-50">
68:                                 <label class="col-3 control-label">{{ trans('lang.sub_category_id') }}</label>
69:                                 <div class="col-7">

65:                                 </div>
66:                             </div>
67:                             <div class="form-group row width-50">
68:                                 <label class="col-3 control-label">{{ trans('lang.sub_category_id') }}</label>
69:                                 <div class="col-7">
70:                                     <select id='sub_category' name="sub_category" class="form-control sub_category" required>
71:                                         <option value="">{{ trans('lang.select_sub_category') }}</option>
72:                                     </select>
73:                                     <div class="form-text text-muted">
74:                                         {{ trans('lang.sub_category_id_help') }}

67:                             <div class="form-group row width-50">
68:                                 <label class="col-3 control-label">{{ trans('lang.sub_category_id') }}</label>
69:                                 <div class="col-7">
70:                                     <select id='sub_category' name="sub_category" class="form-control sub_category" required>
71:                                         <option value="">{{ trans('lang.select_sub_category') }}</option>
72:                                     </select>
73:                                     <div class="form-text text-muted">
74:                                         {{ trans('lang.sub_category_id_help') }}
75:                                     </div>
76:                                 </div>

68:                                 <label class="col-3 control-label">{{ trans('lang.sub_category_id') }}</label>
69:                                 <div class="col-7">
70:                                     <select id='sub_category' name="sub_category" class="form-control sub_category" required>
71:                                         <option value="">{{ trans('lang.select_sub_category') }}</option>
72:                                     </select>
73:                                     <div class="form-text text-muted">
74:                                         {{ trans('lang.sub_category_id_help') }}
75:                                     </div>
76:                                 </div>
77:                             </div>

71:                                         <option value="">{{ trans('lang.select_sub_category') }}</option>
72:                                     </select>
73:                                     <div class="form-text text-muted">
74:                                         {{ trans('lang.sub_category_id_help') }}
75:                                     </div>
76:                                 </div>
77:                             </div>
78:                             <div class="form-group row width-50">
79:                                 <label class="col-3 control-label">{{ trans('lang.price') }}</label>
80:                                 <div class="col-7">

76:                                 </div>
77:                             </div>
78:                             <div class="form-group row width-50">
79:                                 <label class="col-3 control-label">{{ trans('lang.price') }}</label>
80:                                 <div class="col-7">
81:                                     <input type="number" class="form-control price" required>
82:                                     <div class="form-text text-muted">
83:                                         {{ trans('lang.item_price_help') }}
84:                                     </div>
85:                                 </div>

78:                             <div class="form-group row width-50">
79:                                 <label class="col-3 control-label">{{ trans('lang.price') }}</label>
80:                                 <div class="col-7">
81:                                     <input type="number" class="form-control price" required>
82:                                     <div class="form-text text-muted">
83:                                         {{ trans('lang.item_price_help') }}
84:                                     </div>
85:                                 </div>
86:                             </div>
87:                             <div class="form-group row width-50">

80:                                 <div class="col-7">
81:                                     <input type="number" class="form-control price" required>
82:                                     <div class="form-text text-muted">
83:                                         {{ trans('lang.item_price_help') }}
84:                                     </div>
85:                                 </div>
86:                             </div>
87:                             <div class="form-group row width-50">
88:                                 <label class="col-3 control-label">{{ trans('lang.item_discount') }}</label>
89:                                 <div class="col-7">

94:                                 </div>
95:                             </div>
96:                             <div class="form-group row width-50">
97:                                 <label class="col-3 control-label">{{ trans('lang.price_unit') }}</label>
98:                                 <div class="col-7">
99:                                     <select id='price_unit' name="price_unit" class="form-control price_unit" required>
100:                                         <option value="Hourly">{{ trans('lang.hourly') }}</option>
101:                                         <option value="Fixed">{{ trans('lang.fixed') }}</option>
102:                                     </select>
103:                                 </div>

96:                             <div class="form-group row width-50">
97:                                 <label class="col-3 control-label">{{ trans('lang.price_unit') }}</label>
98:                                 <div class="col-7">
99:                                     <select id='price_unit' name="price_unit" class="form-control price_unit" required>
100:                                         <option value="Hourly">{{ trans('lang.hourly') }}</option>
101:                                         <option value="Fixed">{{ trans('lang.fixed') }}</option>
102:                                     </select>
103:                                 </div>
104:                             </div>
105:                             <div class="form-group row width-50">

105:                             <div class="form-group row width-50">
106:                                 <label class="col-3 control-label">{{ trans('lang.item_image') }}</label>
107:                                 <div class="col-7">
108:                                     <input type="file" id="service_image">
109:                                     <div class="placeholder_img_thumb service_image"></div>
110:                                     <div id="uploding_image"></div>
111:                                     <div class="form-text text-muted">
112:                                         {{ trans('lang.item_image_help') }}
113:                                     </div>
114:                                 </div>

106:                                 <label class="col-3 control-label">{{ trans('lang.item_image') }}</label>
107:                                 <div class="col-7">
108:                                     <input type="file" id="service_image">
109:                                     <div class="placeholder_img_thumb service_image"></div>
110:                                     <div id="uploding_image"></div>
111:                                     <div class="form-text text-muted">
112:                                         {{ trans('lang.item_image_help') }}
113:                                     </div>
114:                                 </div>
115:                             </div>

170:                     <button type="button" class="btn btn-primary  edit-form-btn"><i class="fa fa-save"></i>
171:                         {{ trans('lang.save') }}
172:                     </button>
173:                     @if (!isset($_GET['id']))
174:                         <a href="{!! route('ondemand.services.index') !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
175:                     @else
176:                         <a href="{!! route('ondemand.services.index', @$_GET['id']) !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
177:                     @endif
178:                 </div>
179:             </div>

171:                         {{ trans('lang.save') }}
172:                     </button>
173:                     @if (!isset($_GET['id']))
174:                         <a href="{!! route('ondemand.services.index') !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
175:                     @else
176:                         <a href="{!! route('ondemand.services.index', @$_GET['id']) !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
177:                     @endif
178:                 </div>
179:             </div>
180:         </div>

173:                     @if (!isset($_GET['id']))
174:                         <a href="{!! route('ondemand.services.index') !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
175:                     @else
176:                         <a href="{!! route('ondemand.services.index', @$_GET['id']) !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
177:                     @endif
178:                 </div>
179:             </div>
180:         </div>
181:     </div>
182: @endsection

191:         var new_added_photos = [];
192:         var new_added_photos_filename = [];
193:         var photosToDelete = [];
194:         var providers_services = database.collection('providers_services').doc(Id);
195:         var categories = database.collection('provider_categories').where('publish', '==', true);
196:         var googleApiKey = '';
197:         var serviceImagesCount = 0;
198:         var placeholderImage = '';
199:         var placeholder = database.collection('settings').doc('placeHolderImage');
200:         var allowed_file_size = '';

192:         var new_added_photos_filename = [];
193:         var photosToDelete = [];
194:         var providers_services = database.collection('providers_services').doc(Id);
195:         var categories = database.collection('provider_categories').where('publish', '==', true);
196:         var googleApiKey = '';
197:         var serviceImagesCount = 0;
198:         var placeholderImage = '';
199:         var placeholder = database.collection('settings').doc('placeHolderImage');
200:         var allowed_file_size = '';
201:         var idOfProviderDetailPage = "{{ @$_GET['id'] }}";

194:         var providers_services = database.collection('providers_services').doc(Id);
195:         var categories = database.collection('provider_categories').where('publish', '==', true);
196:         var googleApiKey = '';
197:         var serviceImagesCount = 0;
198:         var placeholderImage = '';
199:         var placeholder = database.collection('settings').doc('placeHolderImage');
200:         var allowed_file_size = '';
201:         var idOfProviderDetailPage = "{{ @$_GET['id'] }}";
202:         var new_added_photos = [];
203:         var new_added_photos_filename = [];

196:         var googleApiKey = '';
197:         var serviceImagesCount = 0;
198:         var placeholderImage = '';
199:         var placeholder = database.collection('settings').doc('placeHolderImage');
200:         var allowed_file_size = '';
201:         var idOfProviderDetailPage = "{{ @$_GET['id'] }}";
202:         var new_added_photos = [];
203:         var new_added_photos_filename = [];
204:         var photosToDelete = [];
205:         var product_image_filename = [];

198:         var placeholderImage = '';
199:         var placeholder = database.collection('settings').doc('placeHolderImage');
200:         var allowed_file_size = '';
201:         var idOfProviderDetailPage = "{{ @$_GET['id'] }}";
202:         var new_added_photos = [];
203:         var new_added_photos_filename = [];
204:         var photosToDelete = [];
205:         var product_image_filename = [];
206:         var productImagesCount = 0;
207:         var mapType = 'ONLINE';

205:         var product_image_filename = [];
206:         var productImagesCount = 0;
207:         var mapType = 'ONLINE';
208:         database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
209:             var data = snapshots.data();
210:             if (data && data.selectedMapType && data.selectedMapType == "osm") {
211:                 mapType = "OFFLINE"
212:             }
213:         });
214:         placeholder.get().then(async function(snapshotsimage) {

216:             placeholderImage = placeholderImageData.image;
217:         })
218:         $(document).ready(function() {
219:             if (idOfProviderDetailPage != '') {
220:                 $('.provider-div').css('display', 'none');
221:             }
222:             providers_services.get().then(async function(snapshots) {
223:                 var serviceData = snapshots.data();
224:                 if (serviceData != undefined) {
225:                     $(".service_name").val(serviceData.title)

217:         })
218:         $(document).ready(function() {
219:             if (idOfProviderDetailPage != '') {
220:                 $('.provider-div').css('display', 'none');
221:             }
222:             providers_services.get().then(async function(snapshots) {
223:                 var serviceData = snapshots.data();
224:                 if (serviceData != undefined) {
225:                     $(".service_name").val(serviceData.title)
226:                     $(".price").val(serviceData.price)

219:             if (idOfProviderDetailPage != '') {
220:                 $('.provider-div').css('display', 'none');
221:             }
222:             providers_services.get().then(async function(snapshots) {
223:                 var serviceData = snapshots.data();
224:                 if (serviceData != undefined) {
225:                     $(".service_name").val(serviceData.title)
226:                     $(".price").val(serviceData.price)
227:                     $(".item_discount").val(serviceData.disPrice)
228:                     $("#item_description").val(serviceData.description);

220:                 $('.provider-div').css('display', 'none');
221:             }
222:             providers_services.get().then(async function(snapshots) {
223:                 var serviceData = snapshots.data();
224:                 if (serviceData != undefined) {
225:                     $(".service_name").val(serviceData.title)
226:                     $(".price").val(serviceData.price)
227:                     $(".item_discount").val(serviceData.disPrice)
228:                     $("#item_description").val(serviceData.description);
229:                     $("#address").val(serviceData.address);

221:             }
222:             providers_services.get().then(async function(snapshots) {
223:                 var serviceData = snapshots.data();
224:                 if (serviceData != undefined) {
225:                     $(".service_name").val(serviceData.title)
226:                     $(".price").val(serviceData.price)
227:                     $(".item_discount").val(serviceData.disPrice)
228:                     $("#item_description").val(serviceData.description);
229:                     $("#address").val(serviceData.address);
230:                     $('#address').val(serviceData.address).attr('data-latitude', serviceData.latitude).attr('data-longitude', serviceData.longitude);

222:             providers_services.get().then(async function(snapshots) {
223:                 var serviceData = snapshots.data();
224:                 if (serviceData != undefined) {
225:                     $(".service_name").val(serviceData.title)
226:                     $(".price").val(serviceData.price)
227:                     $(".item_discount").val(serviceData.disPrice)
228:                     $("#item_description").val(serviceData.description);
229:                     $("#address").val(serviceData.address);
230:                     $('#address').val(serviceData.address).attr('data-latitude', serviceData.latitude).attr('data-longitude', serviceData.longitude);
231:                     $("#start_Time").val(serviceData.startTime);

223:                 var serviceData = snapshots.data();
224:                 if (serviceData != undefined) {
225:                     $(".service_name").val(serviceData.title)
226:                     $(".price").val(serviceData.price)
227:                     $(".item_discount").val(serviceData.disPrice)
228:                     $("#item_description").val(serviceData.description);
229:                     $("#address").val(serviceData.address);
230:                     $('#address').val(serviceData.address).attr('data-latitude', serviceData.latitude).attr('data-longitude', serviceData.longitude);
231:                     $("#start_Time").val(serviceData.startTime);
232:                     $("#end_Time").val(serviceData.endTime);

224:                 if (serviceData != undefined) {
225:                     $(".service_name").val(serviceData.title)
226:                     $(".price").val(serviceData.price)
227:                     $(".item_discount").val(serviceData.disPrice)
228:                     $("#item_description").val(serviceData.description);
229:                     $("#address").val(serviceData.address);
230:                     $('#address').val(serviceData.address).attr('data-latitude', serviceData.latitude).attr('data-longitude', serviceData.longitude);
231:                     $("#start_Time").val(serviceData.startTime);
232:                     $("#end_Time").val(serviceData.endTime);
233:                     $("input:checkbox[name=days]").each(function(index) {

225:                     $(".service_name").val(serviceData.title)
226:                     $(".price").val(serviceData.price)
227:                     $(".item_discount").val(serviceData.disPrice)
228:                     $("#item_description").val(serviceData.description);
229:                     $("#address").val(serviceData.address);
230:                     $('#address').val(serviceData.address).attr('data-latitude', serviceData.latitude).attr('data-longitude', serviceData.longitude);
231:                     $("#start_Time").val(serviceData.startTime);
232:                     $("#end_Time").val(serviceData.endTime);
233:                     $("input:checkbox[name=days]").each(function(index) {
234:                         var val = $(this).val();

226:                     $(".price").val(serviceData.price)
227:                     $(".item_discount").val(serviceData.disPrice)
228:                     $("#item_description").val(serviceData.description);
229:                     $("#address").val(serviceData.address);
230:                     $('#address').val(serviceData.address).attr('data-latitude', serviceData.latitude).attr('data-longitude', serviceData.longitude);
231:                     $("#start_Time").val(serviceData.startTime);
232:                     $("#end_Time").val(serviceData.endTime);
233:                     $("input:checkbox[name=days]").each(function(index) {
234:                         var val = $(this).val();
235:                         if (serviceData.days.includes(val)) {

227:                     $(".item_discount").val(serviceData.disPrice)
228:                     $("#item_description").val(serviceData.description);
229:                     $("#address").val(serviceData.address);
230:                     $('#address').val(serviceData.address).attr('data-latitude', serviceData.latitude).attr('data-longitude', serviceData.longitude);
231:                     $("#start_Time").val(serviceData.startTime);
232:                     $("#end_Time").val(serviceData.endTime);
233:                     $("input:checkbox[name=days]").each(function(index) {
234:                         var val = $(this).val();
235:                         if (serviceData.days.includes(val)) {
236:                             $(this).prop('checked', true);

228:                     $("#item_description").val(serviceData.description);
229:                     $("#address").val(serviceData.address);
230:                     $('#address').val(serviceData.address).attr('data-latitude', serviceData.latitude).attr('data-longitude', serviceData.longitude);
231:                     $("#start_Time").val(serviceData.startTime);
232:                     $("#end_Time").val(serviceData.endTime);
233:                     $("input:checkbox[name=days]").each(function(index) {
234:                         var val = $(this).val();
235:                         if (serviceData.days.includes(val)) {
236:                             $(this).prop('checked', true);
237:                         }

229:                     $("#address").val(serviceData.address);
230:                     $('#address').val(serviceData.address).attr('data-latitude', serviceData.latitude).attr('data-longitude', serviceData.longitude);
231:                     $("#start_Time").val(serviceData.startTime);
232:                     $("#end_Time").val(serviceData.endTime);
233:                     $("input:checkbox[name=days]").each(function(index) {
234:                         var val = $(this).val();
235:                         if (serviceData.days.includes(val)) {
236:                             $(this).prop('checked', true);
237:                         }
238:                     });

232:                     $("#end_Time").val(serviceData.endTime);
233:                     $("input:checkbox[name=days]").each(function(index) {
234:                         var val = $(this).val();
235:                         if (serviceData.days.includes(val)) {
236:                             $(this).prop('checked', true);
237:                         }
238:                     });
239:                     if (serviceData.hasOwnProperty('priceUnit')) {
240:                         $('#price_unit').val(serviceData.priceUnit).trigger('change');
241:                     }

236:                             $(this).prop('checked', true);
237:                         }
238:                     });
239:                     if (serviceData.hasOwnProperty('priceUnit')) {
240:                         $('#price_unit').val(serviceData.priceUnit).trigger('change');
241:                     }
242:                     if (serviceData.publish) {
243:                         $("#item_publish").prop('checked', true);
244:                     }
245:                     if (serviceData.photos.length > 0) {

237:                         }
238:                     });
239:                     if (serviceData.hasOwnProperty('priceUnit')) {
240:                         $('#price_unit').val(serviceData.priceUnit).trigger('change');
241:                     }
242:                     if (serviceData.publish) {
243:                         $("#item_publish").prop('checked', true);
244:                     }
245:                     if (serviceData.photos.length > 0) {
246:                         photos = serviceData.photos;

239:                     if (serviceData.hasOwnProperty('priceUnit')) {
240:                         $('#price_unit').val(serviceData.priceUnit).trigger('change');
241:                     }
242:                     if (serviceData.publish) {
243:                         $("#item_publish").prop('checked', true);
244:                     }
245:                     if (serviceData.photos.length > 0) {
246:                         photos = serviceData.photos;
247:                     }
248:                     if (photos.length > 0) {

242:                     if (serviceData.publish) {
243:                         $("#item_publish").prop('checked', true);
244:                     }
245:                     if (serviceData.photos.length > 0) {
246:                         photos = serviceData.photos;
247:                     }
248:                     if (photos.length > 0) {
249:                         photos.forEach((element, index) => {
250:                             $(".service_image").append('<span class="image-item" id="photo_' + index + '"><span class="remove-btn" data-id="' + index + '" data-img="' + photos[index] + '" data-status="old"><i class="fa fa-remove"></i></span><img class="rounded" width="50px" id="" height="auto" src="' + photos[index] + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>');
251:                         })

243:                         $("#item_publish").prop('checked', true);
244:                     }
245:                     if (serviceData.photos.length > 0) {
246:                         photos = serviceData.photos;
247:                     }
248:                     if (photos.length > 0) {
249:                         photos.forEach((element, index) => {
250:                             $(".service_image").append('<span class="image-item" id="photo_' + index + '"><span class="remove-btn" data-id="' + index + '" data-img="' + photos[index] + '" data-status="old"><i class="fa fa-remove"></i></span><img class="rounded" width="50px" id="" height="auto" src="' + photos[index] + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>');
251:                         })
252:                     } else {

247:                     }
248:                     if (photos.length > 0) {
249:                         photos.forEach((element, index) => {
250:                             $(".service_image").append('<span class="image-item" id="photo_' + index + '"><span class="remove-btn" data-id="' + index + '" data-img="' + photos[index] + '" data-status="old"><i class="fa fa-remove"></i></span><img class="rounded" width="50px" id="" height="auto" src="' + photos[index] + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>');
251:                         })
252:                     } else {
253:                         $(".service_image").append('<span class="image-item" id="photo_1"><img class="rounded" style="width:50px" src="' + placeholderImage + '" alt="image">');
254:                     }
255:                     await categories.where('parentCategoryId', '==', null).where('sectionId', '==', serviceData.sectionId).get().then(async function(snapshots) {
256:                         snapshots.docs.forEach((listval) => {

250:                             $(".service_image").append('<span class="image-item" id="photo_' + index + '"><span class="remove-btn" data-id="' + index + '" data-img="' + photos[index] + '" data-status="old"><i class="fa fa-remove"></i></span><img class="rounded" width="50px" id="" height="auto" src="' + photos[index] + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>');
251:                         })
252:                     } else {
253:                         $(".service_image").append('<span class="image-item" id="photo_1"><img class="rounded" style="width:50px" src="' + placeholderImage + '" alt="image">');
254:                     }
255:                     await categories.where('parentCategoryId', '==', null).where('sectionId', '==', serviceData.sectionId).get().then(async function(snapshots) {
256:                         snapshots.docs.forEach((listval) => {
257:                             var data = listval.data();
258:                             $('#item_category').append($("<option></option>")
259:                                 .attr("value", data.id)

252:                     } else {
253:                         $(".service_image").append('<span class="image-item" id="photo_1"><img class="rounded" style="width:50px" src="' + placeholderImage + '" alt="image">');
254:                     }
255:                     await categories.where('parentCategoryId', '==', null).where('sectionId', '==', serviceData.sectionId).get().then(async function(snapshots) {
256:                         snapshots.docs.forEach((listval) => {
257:                             var data = listval.data();
258:                             $('#item_category').append($("<option></option>")
259:                                 .attr("value", data.id)
260:                                 .text(data.title));
261:                         });

255:                     await categories.where('parentCategoryId', '==', null).where('sectionId', '==', serviceData.sectionId).get().then(async function(snapshots) {
256:                         snapshots.docs.forEach((listval) => {
257:                             var data = listval.data();
258:                             $('#item_category').append($("<option></option>")
259:                                 .attr("value", data.id)
260:                                 .text(data.title));
261:                         });
262:                     });
263:                     $('#item_category').val(serviceData.categoryId);
264:                     await categories.where('parentCategoryId', '==', serviceData.categoryId).get().then(async function(snapshots) {

260:                                 .text(data.title));
261:                         });
262:                     });
263:                     $('#item_category').val(serviceData.categoryId);
264:                     await categories.where('parentCategoryId', '==', serviceData.categoryId).get().then(async function(snapshots) {
265:                         if (snapshots.docs.length > 0) {
266:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
267:                             snapshots.docs.forEach((listval) => {
268:                                 var data = listval.data();
269:                                 $('#sub_category').append($("<option></option>")

261:                         });
262:                     });
263:                     $('#item_category').val(serviceData.categoryId);
264:                     await categories.where('parentCategoryId', '==', serviceData.categoryId).get().then(async function(snapshots) {
265:                         if (snapshots.docs.length > 0) {
266:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
267:                             snapshots.docs.forEach((listval) => {
268:                                 var data = listval.data();
269:                                 $('#sub_category').append($("<option></option>")
270:                                     .attr("value", data.id)

263:                     $('#item_category').val(serviceData.categoryId);
264:                     await categories.where('parentCategoryId', '==', serviceData.categoryId).get().then(async function(snapshots) {
265:                         if (snapshots.docs.length > 0) {
266:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
267:                             snapshots.docs.forEach((listval) => {
268:                                 var data = listval.data();
269:                                 $('#sub_category').append($("<option></option>")
270:                                     .attr("value", data.id)
271:                                     .text(data.title));
272:                             });

266:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
267:                             snapshots.docs.forEach((listval) => {
268:                                 var data = listval.data();
269:                                 $('#sub_category').append($("<option></option>")
270:                                     .attr("value", data.id)
271:                                     .text(data.title));
272:                             });
273:                         }
274:                     });
275:                     $('#sub_category').val(serviceData.subCategoryId)

272:                             });
273:                         }
274:                     });
275:                     $('#sub_category').val(serviceData.subCategoryId)
276:                 } else {
277:                     $('.edit-form-btn').hide();
278:                     $('.service_detail_div').html('<h5 class="text-danger text-center font-weight-bold">{{ trans('lang.service_unknown_deleted') }}</h5>')
279:                 }
280:             });
281:             $('#item_category').on('change', function() {

275:                     $('#sub_category').val(serviceData.subCategoryId)
276:                 } else {
277:                     $('.edit-form-btn').hide();
278:                     $('.service_detail_div').html('<h5 class="text-danger text-center font-weight-bold">{{ trans('lang.service_unknown_deleted') }}</h5>')
279:                 }
280:             });
281:             $('#item_category').on('change', function() {
282:                 var categoryId = $(this).val();
283:                 if (categoryId) {
284:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {

278:                     $('.service_detail_div').html('<h5 class="text-danger text-center font-weight-bold">{{ trans('lang.service_unknown_deleted') }}</h5>')
279:                 }
280:             });
281:             $('#item_category').on('change', function() {
282:                 var categoryId = $(this).val();
283:                 if (categoryId) {
284:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {
285:                         if (snapshots.docs.length > 0) {
286:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
287:                             snapshots.docs.forEach((listval) => {

279:                 }
280:             });
281:             $('#item_category').on('change', function() {
282:                 var categoryId = $(this).val();
283:                 if (categoryId) {
284:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {
285:                         if (snapshots.docs.length > 0) {
286:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
287:                             snapshots.docs.forEach((listval) => {
288:                                 var data = listval.data();

280:             });
281:             $('#item_category').on('change', function() {
282:                 var categoryId = $(this).val();
283:                 if (categoryId) {
284:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {
285:                         if (snapshots.docs.length > 0) {
286:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
287:                             snapshots.docs.forEach((listval) => {
288:                                 var data = listval.data();
289:                                 $('#sub_category').append($("<option></option>")

281:             $('#item_category').on('change', function() {
282:                 var categoryId = $(this).val();
283:                 if (categoryId) {
284:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {
285:                         if (snapshots.docs.length > 0) {
286:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
287:                             snapshots.docs.forEach((listval) => {
288:                                 var data = listval.data();
289:                                 $('#sub_category').append($("<option></option>")
290:                                     .attr("value", data.id)

283:                 if (categoryId) {
284:                     categories.where('parentCategoryId', '==', categoryId).get().then(async function(snapshots) {
285:                         if (snapshots.docs.length > 0) {
286:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
287:                             snapshots.docs.forEach((listval) => {
288:                                 var data = listval.data();
289:                                 $('#sub_category').append($("<option></option>")
290:                                     .attr("value", data.id)
291:                                     .text(data.title));
292:                             });

286:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
287:                             snapshots.docs.forEach((listval) => {
288:                                 var data = listval.data();
289:                                 $('#sub_category').append($("<option></option>")
290:                                     .attr("value", data.id)
291:                                     .text(data.title));
292:                             });
293:                         } else {
294:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
295:                         }

291:                                     .text(data.title));
292:                             });
293:                         } else {
294:                             $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
295:                         }
296:                     });
297:                 } else {
298:                     $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
299:                 }
300:             })

295:                         }
296:                     });
297:                 } else {
298:                     $('#sub_category').html('<option value="">{{ trans('lang.select_sub_category') }}</option>');
299:                 }
300:             })
301:             function initialize(id) {
302:                 if (mapType == "OFFLINE") {
303:                     var input = document.getElementById('address');
304:                     var autocompleteList = document.getElementById('autocomplete-list');

314:                                 autocompleteList.innerHTML = '';
315:                                 data.forEach(place => {
316:                                     var item = document.createElement('div');
317:                                     item.classList.add('autocomplete-item');
318:                                     item.innerText = place.display_name;
319:                                     item.onclick = function() {
320:                                         input.value = place.display_name;
321:                                         input.setAttribute('data-latitude', place.lat);
322:                                         input.setAttribute('data-longitude', place.lon);
323:                                         if (place.address) {

361:             });
362:             $(".edit-form-btn").click(async function() {
363:                 var days = [];
364:                 var name = $(".service_name").val();
365:                 var price = $(".price").val();
366:                 var discount = $(".item_discount").val();
367:                 var category = $("#item_category option:selected").val();
368:                 var sub_category = $("#sub_category option:selected").val();
369:                 var description = $("#item_description").val();
370:                 var itemPublish = $(".item_publish").is(":checked");

362:             $(".edit-form-btn").click(async function() {
363:                 var days = [];
364:                 var name = $(".service_name").val();
365:                 var price = $(".price").val();
366:                 var discount = $(".item_discount").val();
367:                 var category = $("#item_category option:selected").val();
368:                 var sub_category = $("#sub_category option:selected").val();
369:                 var description = $("#item_description").val();
370:                 var itemPublish = $(".item_publish").is(":checked");
371:                 var price_unit = $("#price_unit option:selected").val();

364:                 var name = $(".service_name").val();
365:                 var price = $(".price").val();
366:                 var discount = $(".item_discount").val();
367:                 var category = $("#item_category option:selected").val();
368:                 var sub_category = $("#sub_category option:selected").val();
369:                 var description = $("#item_description").val();
370:                 var itemPublish = $(".item_publish").is(":checked");
371:                 var price_unit = $("#price_unit option:selected").val();
372:                 var address = $("#address").val();
373:                 var startTime = $("#start_Time").val();

365:                 var price = $(".price").val();
366:                 var discount = $(".item_discount").val();
367:                 var category = $("#item_category option:selected").val();
368:                 var sub_category = $("#sub_category option:selected").val();
369:                 var description = $("#item_description").val();
370:                 var itemPublish = $(".item_publish").is(":checked");
371:                 var price_unit = $("#price_unit option:selected").val();
372:                 var address = $("#address").val();
373:                 var startTime = $("#start_Time").val();
374:                 var endTime = $("#end_Time").val();

368:                 var sub_category = $("#sub_category option:selected").val();
369:                 var description = $("#item_description").val();
370:                 var itemPublish = $(".item_publish").is(":checked");
371:                 var price_unit = $("#price_unit option:selected").val();
372:                 var address = $("#address").val();
373:                 var startTime = $("#start_Time").val();
374:                 var endTime = $("#end_Time").val();
375:                 var longitude = parseFloat($('#address').attr('data-longitude'));
376:                 var latitude = parseFloat($('#address').attr('data-latitude'));
377:                 $("input:checkbox[name=days]:checked").each(function() {

386:                 if (name == '') {
387:                     $(".error_top").show();
388:                     $(".error_top").html("");
389:                     $(".error_top").append("<p>{{ trans('lang.insert_service_name_error') }}</p>");
390:                     window.scrollTo(0, 0);
391:                 } else if (category == '') {
392:                     $(".error_top").show();
393:                     $(".error_top").html("");
394:                     $(".error_top").append("<p>{{ trans('lang.select_service_category_error') }}</p>");
395:                     window.scrollTo(0, 0);

388:                     $(".error_top").html("");
389:                     $(".error_top").append("<p>{{ trans('lang.insert_service_name_error') }}</p>");
390:                     window.scrollTo(0, 0);
391:                 } else if (category == '') {
392:                     $(".error_top").show();
393:                     $(".error_top").html("");
394:                     $(".error_top").append("<p>{{ trans('lang.select_service_category_error') }}</p>");
395:                     window.scrollTo(0, 0);
396:                 } else if (sub_category == '') {
397:                     $(".error_top").show();

391:                 } else if (category == '') {
392:                     $(".error_top").show();
393:                     $(".error_top").html("");
394:                     $(".error_top").append("<p>{{ trans('lang.select_service_category_error') }}</p>");
395:                     window.scrollTo(0, 0);
396:                 } else if (sub_category == '') {
397:                     $(".error_top").show();
398:                     $(".error_top").html("");
399:                     $(".error_top").append("<p>{{ trans('lang.select_service_sub_category_error') }}</p>");
400:                     window.scrollTo(0, 0);

393:                     $(".error_top").html("");
394:                     $(".error_top").append("<p>{{ trans('lang.select_service_category_error') }}</p>");
395:                     window.scrollTo(0, 0);
396:                 } else if (sub_category == '') {
397:                     $(".error_top").show();
398:                     $(".error_top").html("");
399:                     $(".error_top").append("<p>{{ trans('lang.select_service_sub_category_error') }}</p>");
400:                     window.scrollTo(0, 0);
401:                 } else if (price == '') {
402:                     $(".error_top").show();

396:                 } else if (sub_category == '') {
397:                     $(".error_top").show();
398:                     $(".error_top").html("");
399:                     $(".error_top").append("<p>{{ trans('lang.select_service_sub_category_error') }}</p>");
400:                     window.scrollTo(0, 0);
401:                 } else if (price == '') {
402:                     $(".error_top").show();
403:                     $(".error_top").html("");
404:                     $(".error_top").append("<p>{{ trans('lang.insert_service_price_error') }}</p>");
405:                     window.scrollTo(0, 0);

398:                     $(".error_top").html("");
399:                     $(".error_top").append("<p>{{ trans('lang.select_service_sub_category_error') }}</p>");
400:                     window.scrollTo(0, 0);
401:                 } else if (price == '') {
402:                     $(".error_top").show();
403:                     $(".error_top").html("");
404:                     $(".error_top").append("<p>{{ trans('lang.insert_service_price_error') }}</p>");
405:                     window.scrollTo(0, 0);
406:                 } else if (parseInt(price) < parseInt(discount)) {
407:                     $(".error_top").show();

401:                 } else if (price == '') {
402:                     $(".error_top").show();
403:                     $(".error_top").html("");
404:                     $(".error_top").append("<p>{{ trans('lang.insert_service_price_error') }}</p>");
405:                     window.scrollTo(0, 0);
406:                 } else if (parseInt(price) < parseInt(discount)) {
407:                     $(".error_top").show();
408:                     $(".error_top").html("");
409:                     $(".error_top").append("<p>{{ trans('lang.price_should_not_less_then_discount_error') }}</p>");
410:                     window.scrollTo(0, 0);

403:                     $(".error_top").html("");
404:                     $(".error_top").append("<p>{{ trans('lang.insert_service_price_error') }}</p>");
405:                     window.scrollTo(0, 0);
406:                 } else if (parseInt(price) < parseInt(discount)) {
407:                     $(".error_top").show();
408:                     $(".error_top").html("");
409:                     $(".error_top").append("<p>{{ trans('lang.price_should_not_less_then_discount_error') }}</p>");
410:                     window.scrollTo(0, 0);
411:                 } else if (description == '') {
412:                     $(".error_top").show();

406:                 } else if (parseInt(price) < parseInt(discount)) {
407:                     $(".error_top").show();
408:                     $(".error_top").html("");
409:                     $(".error_top").append("<p>{{ trans('lang.price_should_not_less_then_discount_error') }}</p>");
410:                     window.scrollTo(0, 0);
411:                 } else if (description == '') {
412:                     $(".error_top").show();
413:                     $(".error_top").html("");
414:                     $(".error_top").append("<p>{{ trans('lang.insert_service_description_error') }}</p>");
415:                     window.scrollTo(0, 0);

411:                 } else if (description == '') {
412:                     $(".error_top").show();
413:                     $(".error_top").html("");
414:                     $(".error_top").append("<p>{{ trans('lang.insert_service_description_error') }}</p>");
415:                     window.scrollTo(0, 0);
416:                 } else if (isNaN(latitude) || isNaN(longitude)) {
417:                     $(".error_top").show();
418:                     $(".error_top").html("");
419:                     $(".error_top").append("<p>{{ trans('lang.service_select_address_error') }}</p>");
420:                     window.scrollTo(0, 0);

416:                 } else if (isNaN(latitude) || isNaN(longitude)) {
417:                     $(".error_top").show();
418:                     $(".error_top").html("");
419:                     $(".error_top").append("<p>{{ trans('lang.service_select_address_error') }}</p>");
420:                     window.scrollTo(0, 0);
421:                 } else if (days.length == 0) {
422:                     $(".error_top").show();
423:                     $(".error_top").html("");
424:                     $(".error_top").append("<p>{{ trans('lang.service_select_days_error') }}</p>");
425:                     window.scrollTo(0, 0);

421:                 } else if (days.length == 0) {
422:                     $(".error_top").show();
423:                     $(".error_top").html("");
424:                     $(".error_top").append("<p>{{ trans('lang.service_select_days_error') }}</p>");
425:                     window.scrollTo(0, 0);
426:                 } else if (startTime == '' || endTime == '') {
427:                     $(".error_top").show();
428:                     $(".error_top").html("");
429:                     $(".error_top").append("<p>{{ trans('lang.service_select_time_error') }}</p>");
430:                     window.scrollTo(0, 0);

426:                 } else if (startTime == '' || endTime == '') {
427:                     $(".error_top").show();
428:                     $(".error_top").html("");
429:                     $(".error_top").append("<p>{{ trans('lang.service_select_time_error') }}</p>");
430:                     window.scrollTo(0, 0);
431:                 } else if (startTime > endTime) {
432:                     $(".error_top").show();
433:                     $(".error_top").html("");
434:                     $(".error_top").append("<p>{{ trans('lang.start_time_grater_than_endtime_error') }}</p>");
435:                     window.scrollTo(0, 0);

435:                     window.scrollTo(0, 0);
436:                 } else {
437:                     await storeImageData().then(async (IMG) => {
438:                         geoFirestore.collection('providers_services').doc(Id).update({
439:                             "address": address,
440:                             'categoryId': category,
441:                             'days': days,
442:                             'description': description,
443:                             'disPrice': discount,
444:                             'latitude': latitude,

437:                     await storeImageData().then(async (IMG) => {
438:                         geoFirestore.collection('providers_services').doc(Id).update({
439:                             "address": address,
440:                             'categoryId': category,
441:                             'days': days,
442:                             'description': description,
443:                             'disPrice': discount,
444:                             'latitude': latitude,
445:                             'longitude': longitude,
446:                             'photos': IMG,

440:                             'categoryId': category,
441:                             'days': days,
442:                             'description': description,
443:                             'disPrice': discount,
444:                             'latitude': latitude,
445:                             'longitude': longitude,
446:                             'photos': IMG,
447:                             'price': price,
448:                             'priceUnit': price_unit,
449:                             'publish': itemPublish,

444:                             'latitude': latitude,
445:                             'longitude': longitude,
446:                             'photos': IMG,
447:                             'price': price,
448:                             'priceUnit': price_unit,
449:                             'publish': itemPublish,
450:                             'startTime': startTime,
451:                             'endTime': endTime,
452:                             'subCategoryId': sub_category,
453:                             'title': name,

445:                             'longitude': longitude,
446:                             'photos': IMG,
447:                             'price': price,
448:                             'priceUnit': price_unit,
449:                             'publish': itemPublish,
450:                             'startTime': startTime,
451:                             'endTime': endTime,
452:                             'subCategoryId': sub_category,
453:                             'title': name,
454:                             'coordinates': new firebase.firestore.GeoPoint(latitude, longitude),

449:                             'publish': itemPublish,
450:                             'startTime': startTime,
451:                             'endTime': endTime,
452:                             'subCategoryId': sub_category,
453:                             'title': name,
454:                             'coordinates': new firebase.firestore.GeoPoint(latitude, longitude),
455:                             'g' : {
456:                                 'geohash' : encodeGeohash(latitude, longitude),
457:                                 'geopoint' : new firebase.firestore.GeoPoint(latitude, longitude)
458:                             }

457:                                 'geopoint' : new firebase.firestore.GeoPoint(latitude, longitude)
458:                             }
459:                         }).then(function(result) {
460:                             if (idOfProviderDetailPage != '') {
461:                                 window.location.href = '{{ route('ondemand.services.index', @$_GET['id']) }}';
462:                             } else {
463:                                 window.location.href = '{{ route('ondemand.services.index') }}';
464:                             }
465:                         });
466:                     }).catch(err => {

458:                             }
459:                         }).then(function(result) {
460:                             if (idOfProviderDetailPage != '') {
461:                                 window.location.href = '{{ route('ondemand.services.index', @$_GET['id']) }}';
462:                             } else {
463:                                 window.location.href = '{{ route('ondemand.services.index') }}';
464:                             }
465:                         });
466:                     }).catch(err => {
467:                         jQuery("#data-table_processing").hide();

460:                             if (idOfProviderDetailPage != '') {
461:                                 window.location.href = '{{ route('ondemand.services.index', @$_GET['id']) }}';
462:                             } else {
463:                                 window.location.href = '{{ route('ondemand.services.index') }}';
464:                             }
465:                         });
466:                     }).catch(err => {
467:                         jQuery("#data-table_processing").hide();
468:                         $(".error_top").show();
469:                         $(".error_top").html("");

474:             })
475:         });
476:         var storageRef = firebase.storage().ref('images');
477:         $("#service_image").resizeImg({
478:             callback: function(base64str) {
479:                 var val = $('#service_image').val().toLowerCase();
480:                 var ext = val.split('.')[1];
481:                 var docName = val.split('fakepath')[1];
482:                 var filename = $('#service_image').val().replace(/C:\\fakepath\\/i, '')
483:                 var timestamp = Number(new Date());

476:         var storageRef = firebase.storage().ref('images');
477:         $("#service_image").resizeImg({
478:             callback: function(base64str) {
479:                 var val = $('#service_image').val().toLowerCase();
480:                 var ext = val.split('.')[1];
481:                 var docName = val.split('fakepath')[1];
482:                 var filename = $('#service_image').val().replace(/C:\\fakepath\\/i, '')
483:                 var timestamp = Number(new Date());
484:                 var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
485:                 serviceImagesCount++;

479:                 var val = $('#service_image').val().toLowerCase();
480:                 var ext = val.split('.')[1];
481:                 var docName = val.split('fakepath')[1];
482:                 var filename = $('#service_image').val().replace(/C:\\fakepath\\/i, '')
483:                 var timestamp = Number(new Date());
484:                 var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
485:                 serviceImagesCount++;
486:                 photos_html = '<span class="image-item" id="photo_' + serviceImagesCount + '"><span class="remove-btn" data-id="' + serviceImagesCount + '" data-img="' + base64str + '" data-status="new"><i class="fa fa-remove"></i></span><img class="rounded" width="50px" id="" height="auto" src="' + base64str + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>'
487:                 $(".service_image").append(photos_html);
488:                 new_added_photos.push(base64str);

482:                 var filename = $('#service_image').val().replace(/C:\\fakepath\\/i, '')
483:                 var timestamp = Number(new Date());
484:                 var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
485:                 serviceImagesCount++;
486:                 photos_html = '<span class="image-item" id="photo_' + serviceImagesCount + '"><span class="remove-btn" data-id="' + serviceImagesCount + '" data-img="' + base64str + '" data-status="new"><i class="fa fa-remove"></i></span><img class="rounded" width="50px" id="" height="auto" src="' + base64str + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>'
487:                 $(".service_image").append(photos_html);
488:                 new_added_photos.push(base64str);
489:                 new_added_photos_filename.push(filename);
490:                 $("#service_image").val('');
491:             }

483:                 var timestamp = Number(new Date());
484:                 var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
485:                 serviceImagesCount++;
486:                 photos_html = '<span class="image-item" id="photo_' + serviceImagesCount + '"><span class="remove-btn" data-id="' + serviceImagesCount + '" data-img="' + base64str + '" data-status="new"><i class="fa fa-remove"></i></span><img class="rounded" width="50px" id="" height="auto" src="' + base64str + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>'
487:                 $(".service_image").append(photos_html);
488:                 new_added_photos.push(base64str);
489:                 new_added_photos_filename.push(filename);
490:                 $("#service_image").val('');
491:             }
492:         });

484:                 var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
485:                 serviceImagesCount++;
486:                 photos_html = '<span class="image-item" id="photo_' + serviceImagesCount + '"><span class="remove-btn" data-id="' + serviceImagesCount + '" data-img="' + base64str + '" data-status="new"><i class="fa fa-remove"></i></span><img class="rounded" width="50px" id="" height="auto" src="' + base64str + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>'
487:                 $(".service_image").append(photos_html);
488:                 new_added_photos.push(base64str);
489:                 new_added_photos_filename.push(filename);
490:                 $("#service_image").val('');
491:             }
492:         });
493:         $(document).on("click", ".remove-btn", function() {

487:                 $(".service_image").append(photos_html);
488:                 new_added_photos.push(base64str);
489:                 new_added_photos_filename.push(filename);
490:                 $("#service_image").val('');
491:             }
492:         });
493:         $(document).on("click", ".remove-btn", function() {
494:             var id = $(this).attr('data-id');
495:             var photo_remove = $(this).attr('data-img');
496:             var status = $(this).attr('data-status');

```

### FILE: C:\deploy\adminpanel\resources\views\OnDemandService\services\index.blade.php
```text
5: <div class="page-wrapper">
6:     <div class="row page-titles">
7:         <div class="col-md-5 align-self-center">
8:             <h3 class="text-themecolor">{{trans('lang.ondemand_plural')}} - {{trans('lang.service_plural')}}</h3>
9:         </div>
10:         <div class="col-md-7 align-self-center">
11:             <ol class="breadcrumb">
12:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
13:                 <li class="breadcrumb-item active">{{trans('lang.service_plural')}}</li>
14:             </ol>

10:         <div class="col-md-7 align-self-center">
11:             <ol class="breadcrumb">
12:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
13:                 <li class="breadcrumb-item active">{{trans('lang.service_plural')}}</li>
14:             </ol>
15:         </div>
16:         <div>
17:         </div>
18:     </div>
19:     <div class="container-fluid">

25: 
26:                             <div class="menu-tab tabDiv">
27:                                 <ul>
28:                                     <li><a href="{{route('providers.view', $id)}}"><img src="{{ asset('images/provider.png') }}"> {{trans('lang.tab_basic')}}</a>
29:                                     </li>
30:                                     <li class="active"><a
31:                                                 href="{{route('ondemand.services.index', $id)}}"><img src="{{ asset('images/service.png') }}"> {{trans('lang.services')}}</a>
32:                                     </li>
33:                                     <li>
34:                                     <li><a href="{{route('ondemand.workers.index', $id)}}"><img src="{{ asset('images/worker.png') }}"> {{trans('lang.workers')}}</a>

28:                                     <li><a href="{{route('providers.view', $id)}}"><img src="{{ asset('images/provider.png') }}"> {{trans('lang.tab_basic')}}</a>
29:                                     </li>
30:                                     <li class="active"><a
31:                                                 href="{{route('ondemand.services.index', $id)}}"><img src="{{ asset('images/service.png') }}"> {{trans('lang.services')}}</a>
32:                                     </li>
33:                                     <li>
34:                                     <li><a href="{{route('ondemand.workers.index', $id)}}"><img src="{{ asset('images/worker.png') }}"> {{trans('lang.workers')}}</a>
35:                                     </li>
36:                                     <li>
37:                                     <li>

31:                                                 href="{{route('ondemand.services.index', $id)}}"><img src="{{ asset('images/service.png') }}"> {{trans('lang.services')}}</a>
32:                                     </li>
33:                                     <li>
34:                                     <li><a href="{{route('ondemand.workers.index', $id)}}"><img src="{{ asset('images/worker.png') }}"> {{trans('lang.workers')}}</a>
35:                                     </li>
36:                                     <li>
37:                                     <li>
38:                                         <a href="{{route('ondemand.bookings.index',$id)}}"><img src="{{ asset('images/booking.png') }}"> {{trans('lang.booking_plural')}}</a>
39:                                     </li>
40:                                     <li>

35:                                     </li>
36:                                     <li>
37:                                     <li>
38:                                         <a href="{{route('ondemand.bookings.index',$id)}}"><img src="{{ asset('images/booking.png') }}"> {{trans('lang.booking_plural')}}</a>
39:                                     </li>
40:                                     <li>
41:                                     <li><a href="{{route('ondemand.coupons', $id)}}"><img src="{{ asset('images/coupon.png') }}"> {{trans('lang.coupon_plural')}}</a>
42:                                     </li>
43:                                     <li>
44:                                         <a href="{{route('providerPayouts.payout', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payouts')}}</a>

38:                                         <a href="{{route('ondemand.bookings.index',$id)}}"><img src="{{ asset('images/booking.png') }}"> {{trans('lang.booking_plural')}}</a>
39:                                     </li>
40:                                     <li>
41:                                     <li><a href="{{route('ondemand.coupons', $id)}}"><img src="{{ asset('images/coupon.png') }}"> {{trans('lang.coupon_plural')}}</a>
42:                                     </li>
43:                                     <li>
44:                                         <a href="{{route('providerPayouts.payout', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payouts')}}</a>
45:                                     </li>
46:                                     <li>
47:                                         <a href="{{route('payoutRequests.providers', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payout_request')}}</a>

41:                                     <li><a href="{{route('ondemand.coupons', $id)}}"><img src="{{ asset('images/coupon.png') }}"> {{trans('lang.coupon_plural')}}</a>
42:                                     </li>
43:                                     <li>
44:                                         <a href="{{route('providerPayouts.payout', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payouts')}}</a>
45:                                     </li>
46:                                     <li>
47:                                         <a href="{{route('payoutRequests.providers', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payout_request')}}</a>
48:                                     </li>
49:                                     <li>
50:                                         <a href="{{route('users.walletstransaction',$id)}}"

44:                                         <a href="{{route('providerPayouts.payout', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payouts')}}</a>
45:                                     </li>
46:                                     <li>
47:                                         <a href="{{route('payoutRequests.providers', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payout_request')}}</a>
48:                                     </li>
49:                                     <li>
50:                                         <a href="{{route('users.walletstransaction',$id)}}"
51:                                            class="wallet_transaction"><img src="{{ asset('images/wallet.png') }}"> {{trans('lang.wallet_transaction')}}</a>
52:                                     </li>
53:                                     <?php 

48:                                     </li>
49:                                     <li>
50:                                         <a href="{{route('users.walletstransaction',$id)}}"
51:                                            class="wallet_transaction"><img src="{{ asset('images/wallet.png') }}"> {{trans('lang.wallet_transaction')}}</a>
52:                                     </li>
53:                                     <?php 
54:                     
55:                                     $subscription =  route("subscription.subscriptionPlanHistory", ":id");
56:                                     $subscription =  str_replace(":id", "providerID=" . $id, $subscription);
57:                                     ?>

53:                                     <?php 
54:                     
55:                                     $subscription =  route("subscription.subscriptionPlanHistory", ":id");
56:                                     $subscription =  str_replace(":id", "providerID=" . $id, $subscription);
57:                                     ?>
58:                                     <li> 
59:                                         <a href="{{ $subscription }}"><img src="{{ asset('images/subscription.png') }}"> {{trans('lang.subscription_history')}}</a>
60:                                     </li>
61:                                 </ul>
62:                             </div>

56:                                     $subscription =  str_replace(":id", "providerID=" . $id, $subscription);
57:                                     ?>
58:                                     <li> 
59:                                         <a href="{{ $subscription }}"><img src="{{ asset('images/subscription.png') }}"> {{trans('lang.subscription_history')}}</a>
60:                                     </li>
61:                                 </ul>
62:                             </div>
63: 
64:                         </div>
65:                     @endif

65:                     @endif
66:                 <div class="d-flex top-title-section pb-4 justify-content-between">
67:                     <div class="d-flex top-title-left align-self-center">
68:                         <span class="icon mr-3"><img src="{{ asset('images/service.png') }}"></span>
69:                         <h3 class="mb-0">{{trans('lang.service_plural')}}</h3>
70:                         <span class="counter ml-3 total_count"></span>
71:                     </div>
72: 
73:                     <div class="d-flex top-title-right align-self-center">
74: 

66:                 <div class="d-flex top-title-section pb-4 justify-content-between">
67:                     <div class="d-flex top-title-left align-self-center">
68:                         <span class="icon mr-3"><img src="{{ asset('images/service.png') }}"></span>
69:                         <h3 class="mb-0">{{trans('lang.service_plural')}}</h3>
70:                         <span class="counter ml-3 total_count"></span>
71:                     </div>
72: 
73:                     <div class="d-flex top-title-right align-self-center">
74: 
75:                             <div class="select-box pl-3">

81:                             </div>
82: 
83:                             <div class="select-box pl-3">
84:                                 <select class="form-control category_selector">
85:                                     <option value=""  selected>{{trans("lang.category_plural")}}</option>
86:                                 </select>
87:                             </div>
88:                     </div>
89:                    
90:                 </div>

82: 
83:                             <div class="select-box pl-3">
84:                                 <select class="form-control category_selector">
85:                                     <option value=""  selected>{{trans("lang.category_plural")}}</option>
86:                                 </select>
87:                             </div>
88:                     </div>
89:                    
90:                 </div>
91:             </div>

98:                <div class="card border">
99:                  <div class="card-header d-flex justify-content-between align-items-center border-0">
100:                    <div class="card-header-title">
101:                     <h3 class="text-dark-2 mb-2 h4">{{trans('lang.service_plural')}}</h3>
102:                     <p class="mb-0 text-dark-2">{{trans('lang.service_table_text')}}</p>
103:                    </div>
104:                    <div class="card-header-right d-flex align-items-center">
105:                     <div class="card-header-btn mr-3"> 
106:                     @if($id=='')
107:                         <a class="btn-primary btn rounded-full" href="{!! route('ondemand.services.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.service_create')}}</a>

99:                  <div class="card-header d-flex justify-content-between align-items-center border-0">
100:                    <div class="card-header-title">
101:                     <h3 class="text-dark-2 mb-2 h4">{{trans('lang.service_plural')}}</h3>
102:                     <p class="mb-0 text-dark-2">{{trans('lang.service_table_text')}}</p>
103:                    </div>
104:                    <div class="card-header-right d-flex align-items-center">
105:                     <div class="card-header-btn mr-3"> 
106:                     @if($id=='')
107:                         <a class="btn-primary btn rounded-full" href="{!! route('ondemand.services.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.service_create')}}</a>
108:                     @else

104:                    <div class="card-header-right d-flex align-items-center">
105:                     <div class="card-header-btn mr-3"> 
106:                     @if($id=='')
107:                         <a class="btn-primary btn rounded-full" href="{!! route('ondemand.services.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.service_create')}}</a>
108:                     @else
109:                     <a class="btn-primary btn rounded-full" href="{!! route('ondemand.services.create','id='.$id) !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.service_create')}}</a>
110:                     @endif
111:                      </div>
112:                    </div>                
113:                  </div>

106:                     @if($id=='')
107:                         <a class="btn-primary btn rounded-full" href="{!! route('ondemand.services.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.service_create')}}</a>
108:                     @else
109:                     <a class="btn-primary btn rounded-full" href="{!! route('ondemand.services.create','id='.$id) !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.service_create')}}</a>
110:                     @endif
111:                      </div>
112:                    </div>                
113:                  </div>
114:                  <div class="card-body">
115:                          <div class="table-responsive m-t-10">

113:                  </div>
114:                  <div class="card-body">
115:                          <div class="table-responsive m-t-10">
116:                             <table id="serviceTable" class="display nowrap table table-hover table-striped table-bordered table table-striped" cellspacing="0" width="100%">
117:                                 <thead>
118:                                 <tr>
119:                                 <?php if (in_array('ondemand.services.delete', json_decode(@session('user_permissions'),true))) { ?>
120:                                         <th class="delete-all"><input type="checkbox" id="is_active"><label
121:                                                     class="col-3 control-label" for="is_active"
122:                                             ><a id="deleteAll" class="do_not_delete"

116:                             <table id="serviceTable" class="display nowrap table table-hover table-striped table-bordered table table-striped" cellspacing="0" width="100%">
117:                                 <thead>
118:                                 <tr>
119:                                 <?php if (in_array('ondemand.services.delete', json_decode(@session('user_permissions'),true))) { ?>
120:                                         <th class="delete-all"><input type="checkbox" id="is_active"><label
121:                                                     class="col-3 control-label" for="is_active"
122:                                             ><a id="deleteAll" class="do_not_delete"
123:                                                 href="javascript:void(0)"><i
124:                                                             class="fa fa-trash"></i> {{trans('lang.all')}}</a></label>
125:                                         </th>

125:                                         </th>
126:                                         <?php } ?>
127:                                         <th>{{trans('lang.name')}}</th>
128:                                         <th>{{trans('lang.ondemand_category')}}</th>
129:                                        @unless($id != '')
130:                                         <th>{{trans('lang.provider')}}</th>
131:                                         @endunless
132:                                         <th>{{trans('lang.price')}}</th>
133:                                         <th>{{trans('lang.publish')}}</th>
134:                                         <th>{{trans('lang.actions')}}</th>

127:                                         <th>{{trans('lang.name')}}</th>
128:                                         <th>{{trans('lang.ondemand_category')}}</th>
129:                                        @unless($id != '')
130:                                         <th>{{trans('lang.provider')}}</th>
131:                                         @endunless
132:                                         <th>{{trans('lang.price')}}</th>
133:                                         <th>{{trans('lang.publish')}}</th>
134:                                         <th>{{trans('lang.actions')}}</th>
135:                                 </tr>
136:                                 </thead>

129:                                        @unless($id != '')
130:                                         <th>{{trans('lang.provider')}}</th>
131:                                         @endunless
132:                                         <th>{{trans('lang.price')}}</th>
133:                                         <th>{{trans('lang.publish')}}</th>
134:                                         <th>{{trans('lang.actions')}}</th>
135:                                 </tr>
136:                                 </thead>
137:                                 <tbody id="append_list1">
138:                                 </tbody>

152: @section('scripts')
153:     <script type="text/javascript">
154: 
155:         var section_id = getCookie('section_id') || '';
156:         var id = "{{$id}}";
157:         var user_permissions = '<?php echo @session('user_permissions') ?>';
158:         user_permissions = Object.values(JSON.parse(user_permissions));
159:         var checkDeletePermission = false;
160:         if ($.inArray('ondemand.services.delete', user_permissions) >= 0) {
161:             checkDeletePermission = true;

157:         var user_permissions = '<?php echo @session('user_permissions') ?>';
158:         user_permissions = Object.values(JSON.parse(user_permissions));
159:         var checkDeletePermission = false;
160:         if ($.inArray('ondemand.services.delete', user_permissions) >= 0) {
161:             checkDeletePermission = true;
162:         }
163: 
164:         var database = firebase.firestore();
165:         
166:         if (id != '') {

165:         
166:         if (id != '') {
167:             var wallet_route = "{{route('users.walletstransaction','id')}}";
168:             $(".wallet_transaction").attr("href", wallet_route.replace('id', 'providerID=' + id));
169:             $('.tabDiv').show();
170:             var ref = database.collection('providers_services').where('sectionId', '==', section_id).where('author', '==', id).orderBy('createdAt', 'desc');
171: 
172:         } else {
173:             $('.tabDiv').show();
174:             var ref = database.collection('providers_services').where('sectionId', '==', section_id).orderBy('createdAt', 'desc');

167:             var wallet_route = "{{route('users.walletstransaction','id')}}";
168:             $(".wallet_transaction").attr("href", wallet_route.replace('id', 'providerID=' + id));
169:             $('.tabDiv').show();
170:             var ref = database.collection('providers_services').where('sectionId', '==', section_id).where('author', '==', id).orderBy('createdAt', 'desc');
171: 
172:         } else {
173:             $('.tabDiv').show();
174:             var ref = database.collection('providers_services').where('sectionId', '==', section_id).orderBy('createdAt', 'desc');
175: 
176:         }       

171: 
172:         } else {
173:             $('.tabDiv').show();
174:             var ref = database.collection('providers_services').where('sectionId', '==', section_id).orderBy('createdAt', 'desc');
175: 
176:         }       
177: 
178:         var currentCurrency = '';
179:         var currencyAtRight = false;
180:         var decimal_degits = 0;

179:         var currencyAtRight = false;
180:         var decimal_degits = 0;
181: 
182:         var refCurrency = database.collection('currencies').where('isActive', '==', true);
183:         refCurrency.get().then(async function (snapshots) {
184:             var currencyData = snapshots.docs[0].data();
185:             currentCurrency = currencyData.symbol;
186:             currencyAtRight = currencyData.symbolAtRight;
187: 
188:             if (currencyData.decimal_degits) {

190:             }
191:         });
192: 
193:         var ctegoryRef = database.collection('provider_categories');
194:         var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');
195:         var refProvider = database.collection('users');
196: 
197:         database.collection('provider_categories').where('sectionId','==',section_id).get().then(async function(snapshots) {
198:             snapshots.docs.forEach((listval) => {
199:                 var data=listval.data();

191:         });
192: 
193:         var ctegoryRef = database.collection('provider_categories');
194:         var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');
195:         var refProvider = database.collection('users');
196: 
197:         database.collection('provider_categories').where('sectionId','==',section_id).get().then(async function(snapshots) {
198:             snapshots.docs.forEach((listval) => {
199:                 var data=listval.data();
200:                 $('.category_selector').append($("<option></option>")

192: 
193:         var ctegoryRef = database.collection('provider_categories');
194:         var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');
195:         var refProvider = database.collection('users');
196: 
197:         database.collection('provider_categories').where('sectionId','==',section_id).get().then(async function(snapshots) {
198:             snapshots.docs.forEach((listval) => {
199:                 var data=listval.data();
200:                 $('.category_selector').append($("<option></option>")
201:                     .attr("value",data.id)

194:         var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');
195:         var refProvider = database.collection('users');
196: 
197:         database.collection('provider_categories').where('sectionId','==',section_id).get().then(async function(snapshots) {
198:             snapshots.docs.forEach((listval) => {
199:                 var data=listval.data();
200:                 $('.category_selector').append($("<option></option>")
201:                     .attr("value",data.id)
202:                     .text(data.title));
203:             })

197:         database.collection('provider_categories').where('sectionId','==',section_id).get().then(async function(snapshots) {
198:             snapshots.docs.forEach((listval) => {
199:                 var data=listval.data();
200:                 $('.category_selector').append($("<option></option>")
201:                     .attr("value",data.id)
202:                     .text(data.title));
203:             })
204:         });
205: 
206:         var initialRef=ref;

206:         var initialRef=ref;
207:         $('select').change(async function() {
208:             var status = $('.status_selector').val();
209:             var category = $('.category_selector').val();
210:             refData = initialRef;
211:         
212:             if (status) {
213:                 refData = (status == "active") ? refData.where('publish', '==', true) : refData.where('publish', '==', false);
214:             }
215:             if (category) {

212:             if (status) {
213:                 refData = (status == "active") ? refData.where('publish', '==', true) : refData.where('publish', '==', false);
214:             }
215:             if (category) {
216:                 refData=refData.where('categoryId','==',category);
217:             }
218:             ref=refData;
219:             $('#serviceTable').DataTable().ajax.reload(); 
220:         });
221: 

213:                 refData = (status == "active") ? refData.where('publish', '==', true) : refData.where('publish', '==', false);
214:             }
215:             if (category) {
216:                 refData=refData.where('categoryId','==',category);
217:             }
218:             ref=refData;
219:             $('#serviceTable').DataTable().ajax.reload(); 
220:         });
221: 
222:         $(document).ready(function () {

216:                 refData=refData.where('categoryId','==',category);
217:             }
218:             ref=refData;
219:             $('#serviceTable').DataTable().ajax.reload(); 
220:         });
221: 
222:         $(document).ready(function () {
223: 
224:             $('.status_selector').select2({
225:                 placeholder: '{{trans("lang.status")}}',  

227:                 allowClear: true 
228:             });
229: 
230:             $('.category_selector').select2({
231:                 placeholder: "{{trans('lang.category')}}",  
232:                 minimumResultsForSearch: Infinity,
233:                 allowClear: true  
234:             });
235: 
236:             $('select').on("select2:unselecting", function(e) {

228:             });
229: 
230:             $('.category_selector').select2({
231:                 placeholder: "{{trans('lang.category')}}",  
232:                 minimumResultsForSearch: Infinity,
233:                 allowClear: true  
234:             });
235: 
236:             $('select').on("select2:unselecting", function(e) {
237:                 var self = $(this);

243: 
244:             jQuery("#data-table_processing").show();
245:             if (id !== '') {
246:                 getProviderNameForFilter(id);
247:             }
248: 
249:             var fieldConfig = {
250:                 columns: [
251:                     { key: 'title', header: "{{ trans('lang.name')}}" }, 
252:                     { key: 'categoryName', header: "{{ trans('lang.ondemand_category')}}" }, 

249:             var fieldConfig = {
250:                 columns: [
251:                     { key: 'title', header: "{{ trans('lang.name')}}" }, 
252:                     { key: 'categoryName', header: "{{ trans('lang.ondemand_category')}}" }, 
253:                     { key: 'sectionName', header: "{{trans('lang.section')}}" },
254:                     { key: 'providerName', header: "{{trans('lang.provider')}}" },
255:                     { key: 'finalPrice', header: "{{trans('lang.price')}}" },
256:                     
257:                 ],
258:                 fileName: "{{trans('lang.service_table')}}",

251:                     { key: 'title', header: "{{ trans('lang.name')}}" }, 
252:                     { key: 'categoryName', header: "{{ trans('lang.ondemand_category')}}" }, 
253:                     { key: 'sectionName', header: "{{trans('lang.section')}}" },
254:                     { key: 'providerName', header: "{{trans('lang.provider')}}" },
255:                     { key: 'finalPrice', header: "{{trans('lang.price')}}" },
256:                     
257:                 ],
258:                 fileName: "{{trans('lang.service_table')}}",
259:             };
260: 

252:                     { key: 'categoryName', header: "{{ trans('lang.ondemand_category')}}" }, 
253:                     { key: 'sectionName', header: "{{trans('lang.section')}}" },
254:                     { key: 'providerName', header: "{{trans('lang.provider')}}" },
255:                     { key: 'finalPrice', header: "{{trans('lang.price')}}" },
256:                     
257:                 ],
258:                 fileName: "{{trans('lang.service_table')}}",
259:             };
260: 
261:             const table = $('#serviceTable').DataTable({

255:                     { key: 'finalPrice', header: "{{trans('lang.price')}}" },
256:                     
257:                 ],
258:                 fileName: "{{trans('lang.service_table')}}",
259:             };
260: 
261:             const table = $('#serviceTable').DataTable({
262:                 pageLength: 10, // Number of rows per page
263:                 processing: false, // Show processing indicator
264:                 serverSide: true, // Enable server-side processing

258:                 fileName: "{{trans('lang.service_table')}}",
259:             };
260: 
261:             const table = $('#serviceTable').DataTable({
262:                 pageLength: 10, // Number of rows per page
263:                 processing: false, // Show processing indicator
264:                 serverSide: true, // Enable server-side processing
265:                 responsive: true,
266:                 ajax: async function (data, callback, settings) {
267:                     const start = data.start;

279:                     // Name
280:                     orderableColumns.push('title');
281: 
282:                     // Category
283:                     orderableColumns.push('categoryName');
284: 
285:                     // Provider column only when id == ''
286:                     if (id === '') {
287:                         orderableColumns.push('providerName');
288:                     }

280:                     orderableColumns.push('title');
281: 
282:                     // Category
283:                     orderableColumns.push('categoryName');
284: 
285:                     // Provider column only when id == ''
286:                     if (id === '') {
287:                         orderableColumns.push('providerName');
288:                     }
289: 

282:                     // Category
283:                     orderableColumns.push('categoryName');
284: 
285:                     // Provider column only when id == ''
286:                     if (id === '') {
287:                         orderableColumns.push('providerName');
288:                     }
289: 
290:                     // Price
291:                     orderableColumns.push('finalPrice');

284: 
285:                     // Provider column only when id == ''
286:                     if (id === '') {
287:                         orderableColumns.push('providerName');
288:                     }
289: 
290:                     // Price
291:                     orderableColumns.push('finalPrice');
292: 
293:                     // Publish + Action (not orderable)

287:                         orderableColumns.push('providerName');
288:                     }
289: 
290:                     // Price
291:                     orderableColumns.push('finalPrice');
292: 
293:                     // Publish + Action (not orderable)
294:                     orderableColumns.push('');
295:                     orderableColumns.push('');
296: 

288:                     }
289: 
290:                     // Price
291:                     orderableColumns.push('finalPrice');
292: 
293:                     // Publish + Action (not orderable)
294:                     orderableColumns.push('');
295:                     orderableColumns.push('');
296: 
297:                     const orderByField = orderableColumns[orderColumnIndex]; // Adjust the index to match your table

315:                         let records = [];
316:                         let filteredRecords = [];
317:                         let sectionNames = {};
318:                         let categoryName = {};
319:                         let providerNames = {};
320:                         // Fetch section names
321:                         const sectionDocs = await ref_sections.get();
322:                         sectionDocs.forEach(doc => {
323:                             sectionNames[doc.id] = doc.data().name;
324:                         });

316:                         let filteredRecords = [];
317:                         let sectionNames = {};
318:                         let categoryName = {};
319:                         let providerNames = {};
320:                         // Fetch section names
321:                         const sectionDocs = await ref_sections.get();
322:                         sectionDocs.forEach(doc => {
323:                             sectionNames[doc.id] = doc.data().name;
324:                         });
325: 

323:                             sectionNames[doc.id] = doc.data().name;
324:                         });
325: 
326:                         const categoryDocs = await ctegoryRef.get();
327:                         categoryDocs.forEach(doc => {
328:                             categoryName[doc.id] = doc.data().title;
329:                         });
330: 
331:                         const providerDocs = await refProvider.get();
332:                         providerDocs.forEach(doc => {

324:                         });
325: 
326:                         const categoryDocs = await ctegoryRef.get();
327:                         categoryDocs.forEach(doc => {
328:                             categoryName[doc.id] = doc.data().title;
329:                         });
330: 
331:                         const providerDocs = await refProvider.get();
332:                         providerDocs.forEach(doc => {
333:                             providerNames[doc.id] = doc.data().firstName + ' ' + doc.data().lastName;

325: 
326:                         const categoryDocs = await ctegoryRef.get();
327:                         categoryDocs.forEach(doc => {
328:                             categoryName[doc.id] = doc.data().title;
329:                         });
330: 
331:                         const providerDocs = await refProvider.get();
332:                         providerDocs.forEach(doc => {
333:                             providerNames[doc.id] = doc.data().firstName + ' ' + doc.data().lastName;
334:                         });

328:                             categoryName[doc.id] = doc.data().title;
329:                         });
330: 
331:                         const providerDocs = await refProvider.get();
332:                         providerDocs.forEach(doc => {
333:                             providerNames[doc.id] = doc.data().firstName + ' ' + doc.data().lastName;
334:                         });
335:                         await Promise.all(querySnapshot.docs.map(async (doc) => {
336:                             let childData = doc.data();
337:                             childData.id = doc.id; // Ensure the document ID is included in the data              

329:                         });
330: 
331:                         const providerDocs = await refProvider.get();
332:                         providerDocs.forEach(doc => {
333:                             providerNames[doc.id] = doc.data().firstName + ' ' + doc.data().lastName;
334:                         });
335:                         await Promise.all(querySnapshot.docs.map(async (doc) => {
336:                             let childData = doc.data();
337:                             childData.id = doc.id; // Ensure the document ID is included in the data              
338:                             childData.sectionName = sectionNames[childData.sectionId] || '';

330: 
331:                         const providerDocs = await refProvider.get();
332:                         providerDocs.forEach(doc => {
333:                             providerNames[doc.id] = doc.data().firstName + ' ' + doc.data().lastName;
334:                         });
335:                         await Promise.all(querySnapshot.docs.map(async (doc) => {
336:                             let childData = doc.data();
337:                             childData.id = doc.id; // Ensure the document ID is included in the data              
338:                             childData.sectionName = sectionNames[childData.sectionId] || '';
339:                             childData.categoryName = categoryName[childData.categoryId] || '';

336:                             let childData = doc.data();
337:                             childData.id = doc.id; // Ensure the document ID is included in the data              
338:                             childData.sectionName = sectionNames[childData.sectionId] || '';
339:                             childData.categoryName = categoryName[childData.categoryId] || '';
340:                             if(childData.hasOwnProperty('author')){
341:                                 childData.providerName = providerNames[childData.author] || '';
342:                             }else{
343:                                 childData.providerName = '';
344:                             }
345: 

338:                             childData.sectionName = sectionNames[childData.sectionId] || '';
339:                             childData.categoryName = categoryName[childData.categoryId] || '';
340:                             if(childData.hasOwnProperty('author')){
341:                                 childData.providerName = providerNames[childData.author] || '';
342:                             }else{
343:                                 childData.providerName = '';
344:                             }
345: 
346:                             if(childData.hasOwnProperty('disPrice') && childData.disPrice != '0'){
347:                                 childData.finalPrice = childData.disPrice;

340:                             if(childData.hasOwnProperty('author')){
341:                                 childData.providerName = providerNames[childData.author] || '';
342:                             }else{
343:                                 childData.providerName = '';
344:                             }
345: 
346:                             if(childData.hasOwnProperty('disPrice') && childData.disPrice != '0'){
347:                                 childData.finalPrice = childData.disPrice;
348:                             }else{
349:                                 childData.finalPrice = childData.price;

343:                                 childData.providerName = '';
344:                             }
345: 
346:                             if(childData.hasOwnProperty('disPrice') && childData.disPrice != '0'){
347:                                 childData.finalPrice = childData.disPrice;
348:                             }else{
349:                                 childData.finalPrice = childData.price;
350:                             }
351:                             if (searchValue) {
352:                             

344:                             }
345: 
346:                             if(childData.hasOwnProperty('disPrice') && childData.disPrice != '0'){
347:                                 childData.finalPrice = childData.disPrice;
348:                             }else{
349:                                 childData.finalPrice = childData.price;
350:                             }
351:                             if (searchValue) {
352:                             
353:                                 if (

346:                             if(childData.hasOwnProperty('disPrice') && childData.disPrice != '0'){
347:                                 childData.finalPrice = childData.disPrice;
348:                             }else{
349:                                 childData.finalPrice = childData.price;
350:                             }
351:                             if (searchValue) {
352:                             
353:                                 if (
354:                                     (childData.title && childData.title.toLowerCase().toString().includes(searchValue)) ||
355:                                     (childData.categoryName && childData.categoryName.toLowerCase().toString().includes(searchValue)) ||

352:                             
353:                                 if (
354:                                     (childData.title && childData.title.toLowerCase().toString().includes(searchValue)) ||
355:                                     (childData.categoryName && childData.categoryName.toLowerCase().toString().includes(searchValue)) ||
356:                                     (childData.sectionName && childData.sectionName.toString().toLowerCase().includes(searchValue)) ||
357:                                     (childData.providerName && childData.providerName.toString().toLowerCase().includes(searchValue)) ||
358:                                     (childData.finalPrice && childData.finalPrice.toString().toLowerCase().includes(searchValue))
359: 
360:                                 ) {
361:                                     filteredRecords.push(childData);

354:                                     (childData.title && childData.title.toLowerCase().toString().includes(searchValue)) ||
355:                                     (childData.categoryName && childData.categoryName.toLowerCase().toString().includes(searchValue)) ||
356:                                     (childData.sectionName && childData.sectionName.toString().toLowerCase().includes(searchValue)) ||
357:                                     (childData.providerName && childData.providerName.toString().toLowerCase().includes(searchValue)) ||
358:                                     (childData.finalPrice && childData.finalPrice.toString().toLowerCase().includes(searchValue))
359: 
360:                                 ) {
361:                                     filteredRecords.push(childData);
362:                                 }
363:                             } else {

355:                                     (childData.categoryName && childData.categoryName.toLowerCase().toString().includes(searchValue)) ||
356:                                     (childData.sectionName && childData.sectionName.toString().toLowerCase().includes(searchValue)) ||
357:                                     (childData.providerName && childData.providerName.toString().toLowerCase().includes(searchValue)) ||
358:                                     (childData.finalPrice && childData.finalPrice.toString().toLowerCase().includes(searchValue))
359: 
360:                                 ) {
361:                                     filteredRecords.push(childData);
362:                                 }
363:                             } else {
364:                                 filteredRecords.push(childData);

369:                             let aValue = a[orderByField] ? a[orderByField].toString().toLowerCase().trim() : '';
370:                             let bValue = b[orderByField] ? b[orderByField].toString().toLowerCase().trim() : '';
371:                         
372:                             if(orderByField === 'finalPrice') {
373:                                 aValue = a[orderByField] ? parseFloat(a[orderByField]) : 0.0;
374:                                 bValue = b[orderByField] ? parseFloat(b[orderByField]) : 0.0;
375: 
376:                             }
377: 
378:                             if (orderDirection === 'asc') {

502:             }, 300));
503:         });
504: var id = "{{$id}}";
505: var showProviderColumn = (id === '');
506:         async function buildHTML(val) {
507: 
508:             var html = [];
509: 
510:             newdate = '';
511:             var id = val.id;

509: 
510:             newdate = '';
511:             var id = val.id;
512:             var categoryId = val.categoryId;
513:             var idOfProviderDetailPage = "{{$id}}";
514:             var route1 = '{{route("ondemand.services.edit",":id")}}';
515:             var route2 = '{{route("ondemandcategory.edit",":id")}}';
516:             if (idOfProviderDetailPage != '') {
517:                 route1 = route1.replace(':id', val.id + "?id=" + idOfProviderDetailPage);
518:             } else {

510:             newdate = '';
511:             var id = val.id;
512:             var categoryId = val.categoryId;
513:             var idOfProviderDetailPage = "{{$id}}";
514:             var route1 = '{{route("ondemand.services.edit",":id")}}';
515:             var route2 = '{{route("ondemandcategory.edit",":id")}}';
516:             if (idOfProviderDetailPage != '') {
517:                 route1 = route1.replace(':id', val.id + "?id=" + idOfProviderDetailPage);
518:             } else {
519:                 route1 = route1.replace(':id', id);

511:             var id = val.id;
512:             var categoryId = val.categoryId;
513:             var idOfProviderDetailPage = "{{$id}}";
514:             var route1 = '{{route("ondemand.services.edit",":id")}}';
515:             var route2 = '{{route("ondemandcategory.edit",":id")}}';
516:             if (idOfProviderDetailPage != '') {
517:                 route1 = route1.replace(':id', val.id + "?id=" + idOfProviderDetailPage);
518:             } else {
519:                 route1 = route1.replace(':id', id);
520:             }

512:             var categoryId = val.categoryId;
513:             var idOfProviderDetailPage = "{{$id}}";
514:             var route1 = '{{route("ondemand.services.edit",":id")}}';
515:             var route2 = '{{route("ondemandcategory.edit",":id")}}';
516:             if (idOfProviderDetailPage != '') {
517:                 route1 = route1.replace(':id', val.id + "?id=" + idOfProviderDetailPage);
518:             } else {
519:                 route1 = route1.replace(':id', id);
520:             }
521: 

513:             var idOfProviderDetailPage = "{{$id}}";
514:             var route1 = '{{route("ondemand.services.edit",":id")}}';
515:             var route2 = '{{route("ondemandcategory.edit",":id")}}';
516:             if (idOfProviderDetailPage != '') {
517:                 route1 = route1.replace(':id', val.id + "?id=" + idOfProviderDetailPage);
518:             } else {
519:                 route1 = route1.replace(':id', id);
520:             }
521: 
522:             route2 = route2.replace(':id', categoryId);

514:             var route1 = '{{route("ondemand.services.edit",":id")}}';
515:             var route2 = '{{route("ondemandcategory.edit",":id")}}';
516:             if (idOfProviderDetailPage != '') {
517:                 route1 = route1.replace(':id', val.id + "?id=" + idOfProviderDetailPage);
518:             } else {
519:                 route1 = route1.replace(':id', id);
520:             }
521: 
522:             route2 = route2.replace(':id', categoryId);
523: 

519:                 route1 = route1.replace(':id', id);
520:             }
521: 
522:             route2 = route2.replace(':id', categoryId);
523: 
524:             if (checkDeletePermission) {
525:                 html.push('<td class="delete-all"><input type="checkbox" id="is_open_' + id + '" class="is_open" dataId="' + id + '"><label class="col-3 control-label"\n' + 'for="is_open_' + id + '" ></label></td>'); 
526:             }
527: 
528:             html.push('<a href="' + route1 + '">' + val.title + '</a>');

527: 
528:             html.push('<a href="' + route1 + '">' + val.title + '</a>');
529: 
530:             html.push('<a href="' + route2 + '">' + val.categoryName + '</a>');
531:           
532:           
533:             if (val.hasOwnProperty("author")) {
534:                 var providerView = '{{route("providers.view",":id")}}';
535:                 providerView = providerView.replace(':id', val.author);
536:                 

531:           
532:           
533:             if (val.hasOwnProperty("author")) {
534:                 var providerView = '{{route("providers.view",":id")}}';
535:                 providerView = providerView.replace(':id', val.author);
536:                 
537:                 // if (val.providerName == "") {
538:                 //     providerView = "javascript:void(0)";
539:                 //     providerName = "{{trans('lang.unknown')}}"
540:                 // }

532:           
533:             if (val.hasOwnProperty("author")) {
534:                 var providerView = '{{route("providers.view",":id")}}';
535:                 providerView = providerView.replace(':id', val.author);
536:                 
537:                 // if (val.providerName == "") {
538:                 //     providerView = "javascript:void(0)";
539:                 //     providerName = "{{trans('lang.unknown')}}"
540:                 // }
541:                 // html.push('<a href="' + providerView + '">' + val.providerName + '</a>');

534:                 var providerView = '{{route("providers.view",":id")}}';
535:                 providerView = providerView.replace(':id', val.author);
536:                 
537:                 // if (val.providerName == "") {
538:                 //     providerView = "javascript:void(0)";
539:                 //     providerName = "{{trans('lang.unknown')}}"
540:                 // }
541:                 // html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
542:                 if (showProviderColumn) {
543:         if (val.author && val.providerName) {

535:                 providerView = providerView.replace(':id', val.author);
536:                 
537:                 // if (val.providerName == "") {
538:                 //     providerView = "javascript:void(0)";
539:                 //     providerName = "{{trans('lang.unknown')}}"
540:                 // }
541:                 // html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
542:                 if (showProviderColumn) {
543:         if (val.author && val.providerName) {
544:             var provRoute = '{{ route("providers.view", ":id") }}'.replace(':id', val.author);

536:                 
537:                 // if (val.providerName == "") {
538:                 //     providerView = "javascript:void(0)";
539:                 //     providerName = "{{trans('lang.unknown')}}"
540:                 // }
541:                 // html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
542:                 if (showProviderColumn) {
543:         if (val.author && val.providerName) {
544:             var provRoute = '{{ route("providers.view", ":id") }}'.replace(':id', val.author);
545:             html.push('<td><a href="' + provRoute + '">' + val.providerName + '</a></td>');

538:                 //     providerView = "javascript:void(0)";
539:                 //     providerName = "{{trans('lang.unknown')}}"
540:                 // }
541:                 // html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
542:                 if (showProviderColumn) {
543:         if (val.author && val.providerName) {
544:             var provRoute = '{{ route("providers.view", ":id") }}'.replace(':id', val.author);
545:             html.push('<td><a href="' + provRoute + '">' + val.providerName + '</a></td>');
546:         } else {
547:             html.push('<td>-</td>');

539:                 //     providerName = "{{trans('lang.unknown')}}"
540:                 // }
541:                 // html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
542:                 if (showProviderColumn) {
543:         if (val.author && val.providerName) {
544:             var provRoute = '{{ route("providers.view", ":id") }}'.replace(':id', val.author);
545:             html.push('<td><a href="' + provRoute + '">' + val.providerName + '</a></td>');
546:         } else {
547:             html.push('<td>-</td>');
548:         }

540:                 // }
541:                 // html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
542:                 if (showProviderColumn) {
543:         if (val.author && val.providerName) {
544:             var provRoute = '{{ route("providers.view", ":id") }}'.replace(':id', val.author);
545:             html.push('<td><a href="' + provRoute + '">' + val.providerName + '</a></td>');
546:         } else {
547:             html.push('<td>-</td>');
548:         }
549:     }

541:                 // html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
542:                 if (showProviderColumn) {
543:         if (val.author && val.providerName) {
544:             var provRoute = '{{ route("providers.view", ":id") }}'.replace(':id', val.author);
545:             html.push('<td><a href="' + provRoute + '">' + val.providerName + '</a></td>');
546:         } else {
547:             html.push('<td>-</td>');
548:         }
549:     }
550:             } else {

542:                 if (showProviderColumn) {
543:         if (val.author && val.providerName) {
544:             var provRoute = '{{ route("providers.view", ":id") }}'.replace(':id', val.author);
545:             html.push('<td><a href="' + provRoute + '">' + val.providerName + '</a></td>');
546:         } else {
547:             html.push('<td>-</td>');
548:         }
549:     }
550:             } else {
551:                 html.push('<td></td>');

551:                 html.push('<td></td>');
552:             }
553:             
554:             if (val.disPrice == "0"){
555:                 if (val.priceUnit == "Hourly") {
556:                     if (currencyAtRight) {
557:                         html.push('<td data-html="true" data-order="' + val.price + '">' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '/hr</td>');
558:                     }else {
559:                         html.push('<td data-html="true" data-order="' + val.price + '">' + currentCurrency + parseFloat(val.price).toFixed(decimal_degits) + '/hr</td>');
560:                     }

552:             }
553:             
554:             if (val.disPrice == "0"){
555:                 if (val.priceUnit == "Hourly") {
556:                     if (currencyAtRight) {
557:                         html.push('<td data-html="true" data-order="' + val.price + '">' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '/hr</td>');
558:                     }else {
559:                         html.push('<td data-html="true" data-order="' + val.price + '">' + currentCurrency + parseFloat(val.price).toFixed(decimal_degits) + '/hr</td>');
560:                     }
561:                 } else {

554:             if (val.disPrice == "0"){
555:                 if (val.priceUnit == "Hourly") {
556:                     if (currencyAtRight) {
557:                         html.push('<td data-html="true" data-order="' + val.price + '">' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '/hr</td>');
558:                     }else {
559:                         html.push('<td data-html="true" data-order="' + val.price + '">' + currentCurrency + parseFloat(val.price).toFixed(decimal_degits) + '/hr</td>');
560:                     }
561:                 } else {
562:                     if (currencyAtRight) {
563:                         html.push('<td data-html="true" data-order="' + val.price + '">' + parseFloat(val.price).toFixed(decimal_degits) +  '' + currentCurrency + '</td>');

556:                     if (currencyAtRight) {
557:                         html.push('<td data-html="true" data-order="' + val.price + '">' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '/hr</td>');
558:                     }else {
559:                         html.push('<td data-html="true" data-order="' + val.price + '">' + currentCurrency + parseFloat(val.price).toFixed(decimal_degits) + '/hr</td>');
560:                     }
561:                 } else {
562:                     if (currencyAtRight) {
563:                         html.push('<td data-html="true" data-order="' + val.price + '">' + parseFloat(val.price).toFixed(decimal_degits) +  '' + currentCurrency + '</td>');
564:                     }else {
565:                         html.push('<td data-html="true" data-order="' + val.price + '">' + currentCurrency + parseFloat(val.price).toFixed(decimal_degits) + '</td>');

560:                     }
561:                 } else {
562:                     if (currencyAtRight) {
563:                         html.push('<td data-html="true" data-order="' + val.price + '">' + parseFloat(val.price).toFixed(decimal_degits) +  '' + currentCurrency + '</td>');
564:                     }else {
565:                         html.push('<td data-html="true" data-order="' + val.price + '">' + currentCurrency + parseFloat(val.price).toFixed(decimal_degits) + '</td>');
566:                     }
567:                 }
568:             }else {
569:                 if (val.priceUnit == "Hourly") {

562:                     if (currencyAtRight) {
563:                         html.push('<td data-html="true" data-order="' + val.price + '">' + parseFloat(val.price).toFixed(decimal_degits) +  '' + currentCurrency + '</td>');
564:                     }else {
565:                         html.push('<td data-html="true" data-order="' + val.price + '">' + currentCurrency + parseFloat(val.price).toFixed(decimal_degits) + '</td>');
566:                     }
567:                 }
568:             }else {
569:                 if (val.priceUnit == "Hourly") {
570:                     if (currencyAtRight) {
571:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + parseFloat(val.disPrice).toFixed(decimal_degits) + '' + currentCurrency + '/hr  <s>' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '/hr</s></td>');

566:                     }
567:                 }
568:             }else {
569:                 if (val.priceUnit == "Hourly") {
570:                     if (currencyAtRight) {
571:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + parseFloat(val.disPrice).toFixed(decimal_degits) + '' + currentCurrency + '/hr  <s>' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '/hr</s></td>');
572:                     } else {
573:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + '' + currentCurrency + parseFloat(val.disPrice).toFixed(decimal_degits) + '/hr  <s>' + currentCurrency + '' + parseFloat(val.price).toFixed(decimal_degits) + '/hr</s> </td>');
574:                     }
575:                 } else {

568:             }else {
569:                 if (val.priceUnit == "Hourly") {
570:                     if (currencyAtRight) {
571:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + parseFloat(val.disPrice).toFixed(decimal_degits) + '' + currentCurrency + '/hr  <s>' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '/hr</s></td>');
572:                     } else {
573:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + '' + currentCurrency + parseFloat(val.disPrice).toFixed(decimal_degits) + '/hr  <s>' + currentCurrency + '' + parseFloat(val.price).toFixed(decimal_degits) + '/hr</s> </td>');
574:                     }
575:                 } else {
576:                     if (currencyAtRight) {
577:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + parseFloat(val.disPrice).toFixed(decimal_degits) + '' + currentCurrency + '  <s>' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '</s></td>');

570:                     if (currencyAtRight) {
571:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + parseFloat(val.disPrice).toFixed(decimal_degits) + '' + currentCurrency + '/hr  <s>' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '/hr</s></td>');
572:                     } else {
573:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + '' + currentCurrency + parseFloat(val.disPrice).toFixed(decimal_degits) + '/hr  <s>' + currentCurrency + '' + parseFloat(val.price).toFixed(decimal_degits) + '/hr</s> </td>');
574:                     }
575:                 } else {
576:                     if (currencyAtRight) {
577:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + parseFloat(val.disPrice).toFixed(decimal_degits) + '' + currentCurrency + '  <s>' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '</s></td>');
578:                     } else {
579:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + '' + currentCurrency + parseFloat(val.disPrice).toFixed(decimal_degits) + ' <s>' + currentCurrency + '' + parseFloat(val.price).toFixed(decimal_degits) + '</s> </td>');

574:                     }
575:                 } else {
576:                     if (currencyAtRight) {
577:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + parseFloat(val.disPrice).toFixed(decimal_degits) + '' + currentCurrency + '  <s>' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '</s></td>');
578:                     } else {
579:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + '' + currentCurrency + parseFloat(val.disPrice).toFixed(decimal_degits) + ' <s>' + currentCurrency + '' + parseFloat(val.price).toFixed(decimal_degits) + '</s> </td>');
580:                     }
581:                 }
582:             }
583: 

576:                     if (currencyAtRight) {
577:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + parseFloat(val.disPrice).toFixed(decimal_degits) + '' + currentCurrency + '  <s>' + parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '</s></td>');
578:                     } else {
579:                         html.push('<td data-html="true" data-order="' + val.disPrice + '">' + '' + currentCurrency + parseFloat(val.disPrice).toFixed(decimal_degits) + ' <s>' + currentCurrency + '' + parseFloat(val.price).toFixed(decimal_degits) + '</s> </td>');
580:                     }
581:                 }
582:             }
583: 
584: 
585:             if (val.publish) {

583: 
584: 
585:             if (val.publish) {
586:                 html.push('<label class="switch"><input type="checkbox" checked id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
587:             } else {
588:                 html.push('<label class="switch"><input type="checkbox" id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
589:             }
590: 
591:             var actionHtml = '';
592:             actionHtml = actionHtml + '<span class="action-btn"><a href="' + route1 + '" data-toggle="tooltip" title="{{trans("lang.edit")}}"><i class="mdi mdi-lead-pencil"></i></a>';

585:             if (val.publish) {
586:                 html.push('<label class="switch"><input type="checkbox" checked id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
587:             } else {
588:                 html.push('<label class="switch"><input type="checkbox" id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
589:             }
590: 
591:             var actionHtml = '';
592:             actionHtml = actionHtml + '<span class="action-btn"><a href="' + route1 + '" data-toggle="tooltip" title="{{trans("lang.edit")}}"><i class="mdi mdi-lead-pencil"></i></a>';
593:             if (checkDeletePermission) {
594:                 actionHtml = actionHtml + '<a id="' + val.id + '" name="service-delete" class="delete-btn" href="javascript:void(0)" data-toggle="tooltip" title="{{trans("lang.delete")}}"><i class="mdi mdi-delete"></i></a>';

591:             var actionHtml = '';
592:             actionHtml = actionHtml + '<span class="action-btn"><a href="' + route1 + '" data-toggle="tooltip" title="{{trans("lang.edit")}}"><i class="mdi mdi-lead-pencil"></i></a>';
593:             if (checkDeletePermission) {
594:                 actionHtml = actionHtml + '<a id="' + val.id + '" name="service-delete" class="delete-btn" href="javascript:void(0)" data-toggle="tooltip" title="{{trans("lang.delete")}}"><i class="mdi mdi-delete"></i></a>';
595:             }
596:             actionHtml = actionHtml + '</span>';
597:             html.push(actionHtml);
598:             return html;
599:         }       
600: 

598:             return html;
599:         }       
600: 
601:         $(document).on("click", "input[name='isActive']", function (e) {
602:             var ischeck = $(this).is(':checked');
603:             var id = this.id;
604:             var publish = ischeck ? true : false;
605:             database.collection('providers_services').doc(id).update({
606:                 'publish': publish
607:             });

602:             var ischeck = $(this).is(':checked');
603:             var id = this.id;
604:             var publish = ischeck ? true : false;
605:             database.collection('providers_services').doc(id).update({
606:                 'publish': publish
607:             });
608:         });
609: 
610:         $(document).on("click", "a[name='service-delete']", async function (e) {
611:             var id = this.id;

607:             });
608:         });
609: 
610:         $(document).on("click", "a[name='service-delete']", async function (e) {
611:             var id = this.id;
612:             await deleteDocumentWithImage('providers_services',id,'','photos');
613:             deleteServiceData(id);
614:             window.location.reload();
615:         });
616: 

609: 
610:         $(document).on("click", "a[name='service-delete']", async function (e) {
611:             var id = this.id;
612:             await deleteDocumentWithImage('providers_services',id,'','photos');
613:             deleteServiceData(id);
614:             window.location.reload();
615:         });
616: 
617:         $("#is_active").click(function () {
618:             $("#serviceTable .is_open").prop('checked', $(this).prop('checked'));

610:         $(document).on("click", "a[name='service-delete']", async function (e) {
611:             var id = this.id;
612:             await deleteDocumentWithImage('providers_services',id,'','photos');
613:             deleteServiceData(id);
614:             window.location.reload();
615:         });
616: 
617:         $("#is_active").click(function () {
618:             $("#serviceTable .is_open").prop('checked', $(this).prop('checked'));
619:         });

615:         });
616: 
617:         $("#is_active").click(function () {
618:             $("#serviceTable .is_open").prop('checked', $(this).prop('checked'));
619:         });
620: 
621:         $("#deleteAll").click(function () {
622:             if ($('#serviceTable .is_open:checked').length) {
623:                 if (confirm("{{trans('lang.selected_delete_alert')}}")) {
624:                     jQuery("#data-table_processing").show();

619:         });
620: 
621:         $("#deleteAll").click(function () {
622:             if ($('#serviceTable .is_open:checked').length) {
623:                 if (confirm("{{trans('lang.selected_delete_alert')}}")) {
624:                     jQuery("#data-table_processing").show();
625:                     $('#serviceTable .is_open:checked').each(async function () {
626:                         var dataId = $(this).attr('dataId');
627:                         await deleteDocumentWithImage('providers_services',dataId,'','photos');
628:                         deleteServiceData(dataId);

622:             if ($('#serviceTable .is_open:checked').length) {
623:                 if (confirm("{{trans('lang.selected_delete_alert')}}")) {
624:                     jQuery("#data-table_processing").show();
625:                     $('#serviceTable .is_open:checked').each(async function () {
626:                         var dataId = $(this).attr('dataId');
627:                         await deleteDocumentWithImage('providers_services',dataId,'','photos');
628:                         deleteServiceData(dataId);
629:                         window.location.reload();
630:                     });
631:                 }

624:                     jQuery("#data-table_processing").show();
625:                     $('#serviceTable .is_open:checked').each(async function () {
626:                         var dataId = $(this).attr('dataId');
627:                         await deleteDocumentWithImage('providers_services',dataId,'','photos');
628:                         deleteServiceData(dataId);
629:                         window.location.reload();
630:                     });
631:                 }
632:             } else {
633:                 alert("{{trans('lang.select_delete_alert')}}");

625:                     $('#serviceTable .is_open:checked').each(async function () {
626:                         var dataId = $(this).attr('dataId');
627:                         await deleteDocumentWithImage('providers_services',dataId,'','photos');
628:                         deleteServiceData(dataId);
629:                         window.location.reload();
630:                     });
631:                 }
632:             } else {
633:                 alert("{{trans('lang.select_delete_alert')}}");
634:             }

634:             }
635:         });
636: 
637:         async function getProviderNameForFilter(providerId) {
638:             await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
639:                 var providerData = snapshots.docs[0].data();
640:                 providerName = providerData.firstName + ' ' + providerData.lastName;
641:                 $('.PageTitle').html("{{trans('lang.service_plural')}} - " + providerName);
642:             });
643: 

635:         });
636: 
637:         async function getProviderNameForFilter(providerId) {
638:             await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
639:                 var providerData = snapshots.docs[0].data();
640:                 providerName = providerData.firstName + ' ' + providerData.lastName;
641:                 $('.PageTitle').html("{{trans('lang.service_plural')}} - " + providerName);
642:             });
643: 
644:         }

636: 
637:         async function getProviderNameForFilter(providerId) {
638:             await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
639:                 var providerData = snapshots.docs[0].data();
640:                 providerName = providerData.firstName + ' ' + providerData.lastName;
641:                 $('.PageTitle').html("{{trans('lang.service_plural')}} - " + providerName);
642:             });
643: 
644:         }
645:         async function deleteServiceData(serviceId){

637:         async function getProviderNameForFilter(providerId) {
638:             await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
639:                 var providerData = snapshots.docs[0].data();
640:                 providerName = providerData.firstName + ' ' + providerData.lastName;
641:                 $('.PageTitle').html("{{trans('lang.service_plural')}} - " + providerName);
642:             });
643: 
644:         }
645:         async function deleteServiceData(serviceId){
646:             await database.collection('favorite_service').where('service_id', '==', serviceId).get().then(async function(snapshotsItem) {

638:             await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
639:                 var providerData = snapshots.docs[0].data();
640:                 providerName = providerData.firstName + ' ' + providerData.lastName;
641:                 $('.PageTitle').html("{{trans('lang.service_plural')}} - " + providerName);
642:             });
643: 
644:         }
645:         async function deleteServiceData(serviceId){
646:             await database.collection('favorite_service').where('service_id', '==', serviceId).get().then(async function(snapshotsItem) {
647: 

```

### FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\create.blade.php
```text
22:     <div class="row page-titles">
23: 
24:         <div class="col-md-5 align-self-center">
25:             <h3 class="text-themecolor">{{trans('lang.worker_plural')}}</h3>
26:         </div>
27:         <div class="col-md-7 align-self-center">
28:             <ol class="breadcrumb">
29:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
30: 
31: 

29:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
30: 
31: 
32:                 <li class="breadcrumb-item"><a href="{!! route('ondemand.workers.index') !!}">{{trans('lang.worker_table')}}</a>
33:                 </li>
34: 
35:                 <li class="breadcrumb-item">{{trans('lang.worker_create')}}</li>
36:             </ol>
37:         </div>
38:     </div>

32:                 <li class="breadcrumb-item"><a href="{!! route('ondemand.workers.index') !!}">{{trans('lang.worker_table')}}</a>
33:                 </li>
34: 
35:                 <li class="breadcrumb-item">{{trans('lang.worker_create')}}</li>
36:             </ol>
37:         </div>
38:     </div>
39: 
40:     <div class="card-body">
41:         <div class="error_top"></div>

42:         <div class="row vendor_payout_create">
43:             <div class="vendor_payout_create-inner">
44:                 <fieldset>
45:                     <legend>{{trans('lang.worker_create')}}</legend>
46: 
47:                     <div class="form-group row width-50">
48:                         <input type="hidden" class="form-control author_profile">
49:                         <label class="col-3 control-label">{{trans('lang.first_name')}}</label>
50:                         <div class="col-7">
51:                             <input type="text" class="form-control first_name">

114:                         </div>
115:                     </div>
116: 
117:                     @if(!isset($_GET['id']))
118:                     <div class="form-group row width-50">
119:                         <label class="col-3 control-label">{{trans('lang.provider')}}</label>
120:                         <div class="col-7">
121:                             <select id="provider_select" class="form-control">
122:                                 <option value="">{{trans('lang.select_provider')}}</option>
123:                             </select>

116: 
117:                     @if(!isset($_GET['id']))
118:                     <div class="form-group row width-50">
119:                         <label class="col-3 control-label">{{trans('lang.provider')}}</label>
120:                         <div class="col-7">
121:                             <select id="provider_select" class="form-control">
122:                                 <option value="">{{trans('lang.select_provider')}}</option>
123:                             </select>
124:                         </div>
125:                     </div>

118:                     <div class="form-group row width-50">
119:                         <label class="col-3 control-label">{{trans('lang.provider')}}</label>
120:                         <div class="col-7">
121:                             <select id="provider_select" class="form-control">
122:                                 <option value="">{{trans('lang.select_provider')}}</option>
123:                             </select>
124:                         </div>
125:                     </div>
126:                     @endif
127: 

119:                         <label class="col-3 control-label">{{trans('lang.provider')}}</label>
120:                         <div class="col-7">
121:                             <select id="provider_select" class="form-control">
122:                                 <option value="">{{trans('lang.select_provider')}}</option>
123:                             </select>
124:                         </div>
125:                     </div>
126:                     @endif
127: 
128:                     <div class="form-group row width-50">

148:         <button type="button" class="btn btn-primary save-form-btn"><i class="fa fa-save"></i>
149:             {{trans('lang.save')}}
150:         </button>
151:          @if(!isset($_GET['id']))
152:         <a href="{!! route('ondemand.workers.index') !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
153:         @else
154:         <a href="{!! route('ondemand.workers.index',$_GET['id']) !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
155:         @endif
156:     </div>
157: </div>

149:             {{trans('lang.save')}}
150:         </button>
151:          @if(!isset($_GET['id']))
152:         <a href="{!! route('ondemand.workers.index') !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
153:         @else
154:         <a href="{!! route('ondemand.workers.index',$_GET['id']) !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
155:         @endif
156:     </div>
157: </div>
158: </div>

151:          @if(!isset($_GET['id']))
152:         <a href="{!! route('ondemand.workers.index') !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
153:         @else
154:         <a href="{!! route('ondemand.workers.index',$_GET['id']) !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
155:         @endif
156:     </div>
157: </div>
158: </div>
159: </div>
160: 

171:     var currencyAtRight = false;
172:     var decimal_degits = 0;
173:     var createdAt = firebase.firestore.FieldValue.serverTimestamp();
174:     var workerImagesCount = 0;
175:     var ownerphoto = '';
176:     var ownerFileName = '';
177:     var photo = "";
178:     var refCurrency = database.collection('currencies').where('isActive', '==', true);
179:     var provider_id="{{@$_GET['id']}}";
180:     var section_id = getCookie('section_id');

175:     var ownerphoto = '';
176:     var ownerFileName = '';
177:     var photo = "";
178:     var refCurrency = database.collection('currencies').where('isActive', '==', true);
179:     var provider_id="{{@$_GET['id']}}";
180:     var section_id = getCookie('section_id');
181: 
182:     var mapType = 'ONLINE';
183:     database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
184:         var data = snapshots.data();

176:     var ownerFileName = '';
177:     var photo = "";
178:     var refCurrency = database.collection('currencies').where('isActive', '==', true);
179:     var provider_id="{{@$_GET['id']}}";
180:     var section_id = getCookie('section_id');
181: 
182:     var mapType = 'ONLINE';
183:     database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
184:         var data = snapshots.data();
185:         if (data && data.selectedMapType && data.selectedMapType == "osm") {

177:     var photo = "";
178:     var refCurrency = database.collection('currencies').where('isActive', '==', true);
179:     var provider_id="{{@$_GET['id']}}";
180:     var section_id = getCookie('section_id');
181: 
182:     var mapType = 'ONLINE';
183:     database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
184:         var data = snapshots.data();
185:         if (data && data.selectedMapType && data.selectedMapType == "osm") {
186:             mapType = "OFFLINE"

180:     var section_id = getCookie('section_id');
181: 
182:     var mapType = 'ONLINE';
183:     database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
184:         var data = snapshots.data();
185:         if (data && data.selectedMapType && data.selectedMapType == "osm") {
186:             mapType = "OFFLINE"
187:         }
188:     });
189: 

198: 
199:     $(document).ready(function () {
200: 
201:         database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function (snapshots) {
202:             snapshots.docs.forEach((listval) => {
203:                 var data = listval.data();
204:                 $('#provider_select').append($("<option></option>")
205:                     .attr("value", data.id)
206:                     .text(data.firstName + ' ' + data.lastName));
207:             })

201:         database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function (snapshots) {
202:             snapshots.docs.forEach((listval) => {
203:                 var data = listval.data();
204:                 $('#provider_select').append($("<option></option>")
205:                     .attr("value", data.id)
206:                     .text(data.firstName + ' ' + data.lastName));
207:             })
208:         });
209: 
210:         $(".save-form-btn").click(async function () {

209: 
210:         $(".save-form-btn").click(async function () {
211: 
212:             var id = database.collection("tmp").doc().id;
213:             var userFirstName = $(".first_name").val();
214:             var userLastName = $(".last_name").val();
215:             var email = $(".email").val();
216:             var password = $(".password").val();
217:             var userPhone = $(".phone").val();
218:             var salary = $(".salary").val();

221:             var longitude = parseFloat($('#address').attr('data-longitude'));
222:             var itemPublish = $(".item_publish").is(":checked");
223:             var authorProfilePic = $('.author_profile').val();
224:             var providerId =  (provider_id!='') ? provider_id : $("#provider_select").val() ;
225: 
226:             if (userFirstName == '') {
227:                 $(".error_top").show();
228:                 $(".error_top").html("");
229:                 $(".error_top").append("<p>{{trans('lang.enter_worker_first_name_error')}}</p>");
230:                 window.scrollTo(0, 0);

226:             if (userFirstName == '') {
227:                 $(".error_top").show();
228:                 $(".error_top").html("");
229:                 $(".error_top").append("<p>{{trans('lang.enter_worker_first_name_error')}}</p>");
230:                 window.scrollTo(0, 0);
231:             } else if (userLastName == '') {
232:                 $(".error_top").show();
233:                 $(".error_top").html("");
234:                 $(".error_top").append("<p>{{trans('lang.enter_worker_last_name_error')}}</p>");
235:                 window.scrollTo(0, 0);

231:             } else if (userLastName == '') {
232:                 $(".error_top").show();
233:                 $(".error_top").html("");
234:                 $(".error_top").append("<p>{{trans('lang.enter_worker_last_name_error')}}</p>");
235:                 window.scrollTo(0, 0);
236:             } else if (email == '') {
237:                 $(".error_top").show();
238:                 $(".error_top").html("");
239:                 $(".error_top").append("<p>{{trans('lang.enter_worker_email_error')}}</p>");
240:                 window.scrollTo(0, 0);

236:             } else if (email == '') {
237:                 $(".error_top").show();
238:                 $(".error_top").html("");
239:                 $(".error_top").append("<p>{{trans('lang.enter_worker_email_error')}}</p>");
240:                 window.scrollTo(0, 0);
241:             } else if (password == '') {
242:                 $(".error_top").show();
243:                 $(".error_top").html("");
244:                 $(".error_top").append("<p>{{trans('lang.enter_worker_password_error')}}</p>");
245:                 window.scrollTo(0, 0);

241:             } else if (password == '') {
242:                 $(".error_top").show();
243:                 $(".error_top").html("");
244:                 $(".error_top").append("<p>{{trans('lang.enter_worker_password_error')}}</p>");
245:                 window.scrollTo(0, 0);
246:             } else if (userPhone == '') {
247:                 $(".error_top").show();
248:                 $(".error_top").html("");
249:                 $(".error_top").append("<p>{{trans('lang.enter_worker_userphone_error')}}</p>");
250:                 window.scrollTo(0, 0);

246:             } else if (userPhone == '') {
247:                 $(".error_top").show();
248:                 $(".error_top").html("");
249:                 $(".error_top").append("<p>{{trans('lang.enter_worker_userphone_error')}}</p>");
250:                 window.scrollTo(0, 0);
251:             } else if (salary == '') {
252:                 $(".error_top").show();
253:                 $(".error_top").html("");
254:                 $(".error_top").append("<p>{{trans('lang.enter_worker_salary_error')}}</p>");
255:                 window.scrollTo(0, 0);

251:             } else if (salary == '') {
252:                 $(".error_top").show();
253:                 $(".error_top").html("");
254:                 $(".error_top").append("<p>{{trans('lang.enter_worker_salary_error')}}</p>");
255:                 window.scrollTo(0, 0);
256:             } else if (isNaN(latitude) || isNaN(longitude)) {
257:                 $(".error_top").show();
258:                 $(".error_top").html("");
259:                 $(".error_top").append("<p>{{trans('lang.enter_worker_address_error')}}</p>");
260:                 window.scrollTo(0, 0);

256:             } else if (isNaN(latitude) || isNaN(longitude)) {
257:                 $(".error_top").show();
258:                 $(".error_top").html("");
259:                 $(".error_top").append("<p>{{trans('lang.enter_worker_address_error')}}</p>");
260:                 window.scrollTo(0, 0);
261:             } else if (providerId == '') {
262:                 $(".error_top").show();
263:                 $(".error_top").html("");
264:                 $(".error_top").append("<p>{{trans('lang.select_service_provider_error')}}</p>");
265:                 window.scrollTo(0, 0);

258:                 $(".error_top").html("");
259:                 $(".error_top").append("<p>{{trans('lang.enter_worker_address_error')}}</p>");
260:                 window.scrollTo(0, 0);
261:             } else if (providerId == '') {
262:                 $(".error_top").show();
263:                 $(".error_top").html("");
264:                 $(".error_top").append("<p>{{trans('lang.select_service_provider_error')}}</p>");
265:                 window.scrollTo(0, 0);
266:             } else {
267:                 jQuery("#data-table_processing").show();

261:             } else if (providerId == '') {
262:                 $(".error_top").show();
263:                 $(".error_top").html("");
264:                 $(".error_top").append("<p>{{trans('lang.select_service_provider_error')}}</p>");
265:                 window.scrollTo(0, 0);
266:             } else {
267:                 jQuery("#data-table_processing").show();
268:                 firebase.auth().createUserWithEmailAndPassword(email, password)
269:                     .then(async function (firebaseUser) {
270:                         user_id = firebaseUser.user.uid;

269:                     .then(async function (firebaseUser) {
270:                         user_id = firebaseUser.user.uid;
271:                         await storeImageData().then(async (IMG) => {
272:                             geoFirestore.collection('providers_workers').doc(user_id).set({
273:                                 'firstName': userFirstName,
274:                                 'lastName': userLastName,
275:                                 'email': email,
276:                                 'phoneNumber': userPhone,
277:                                 'email': email,
278:                                 'salary': salary,

286:                                 'latitude': latitude,
287:                                 'longitude': longitude,
288:                                 'online': false,
289:                                 'providerId': providerId,
290:                                 coordinates: new firebase.firestore.GeoPoint(latitude, longitude),
291:                             }).then(function (result) {
292:                                 if(provider_id==''){
293:                                      window.location.href = '{{ route("ondemand.workers.index")}}';
294:                                 }else{
295:                                     window.location.href = '{{ route("ondemand.workers.index",@$_GET['id'])}}';

289:                                 'providerId': providerId,
290:                                 coordinates: new firebase.firestore.GeoPoint(latitude, longitude),
291:                             }).then(function (result) {
292:                                 if(provider_id==''){
293:                                      window.location.href = '{{ route("ondemand.workers.index")}}';
294:                                 }else{
295:                                     window.location.href = '{{ route("ondemand.workers.index",@$_GET['id'])}}';
296:                                 }
297:                             });
298:                         }).catch(err => {

290:                                 coordinates: new firebase.firestore.GeoPoint(latitude, longitude),
291:                             }).then(function (result) {
292:                                 if(provider_id==''){
293:                                      window.location.href = '{{ route("ondemand.workers.index")}}';
294:                                 }else{
295:                                     window.location.href = '{{ route("ondemand.workers.index",@$_GET['id'])}}';
296:                                 }
297:                             });
298:                         }).catch(err => {
299:                             jQuery("#data-table_processing").hide();

292:                                 if(provider_id==''){
293:                                      window.location.href = '{{ route("ondemand.workers.index")}}';
294:                                 }else{
295:                                     window.location.href = '{{ route("ondemand.workers.index",@$_GET['id'])}}';
296:                                 }
297:                             });
298:                         }).catch(err => {
299:                             jQuery("#data-table_processing").hide();
300:                             $(".error_top").show();
301:                             $(".error_top").html("");

332:                         autocompleteList.innerHTML = '';
333:                         data.forEach(place => {
334:                             var item = document.createElement('div');
335:                             item.classList.add('autocomplete-item');
336:                             item.innerText = place.display_name;
337:                             item.onclick = function() {
338:                                 input.value = place.display_name;
339:                                 input.setAttribute('data-latitude', place.lat);
340:                                 input.setAttribute('data-longitude', place.lon);
341:                                 if (place.address) {

```

### FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\edit.blade.php
```text
21:     <div class="row page-titles">
22: 
23:         <div class="col-md-5 align-self-center">
24:             <h3 class="text-themecolor">{{trans('lang.worker_plural')}}</h3>
25:         </div>
26:         <div class="col-md-7 align-self-center">
27:             <ol class="breadcrumb">
28:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
29: 
30:                 @if(!isset($_GET['id']))

27:             <ol class="breadcrumb">
28:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
29: 
30:                 @if(!isset($_GET['id']))
31:                 <li class="breadcrumb-item"><a href="{!! route('ondemand.workers.index') !!}">{{trans('lang.worker_table')}}</a>
32:                 </li>
33:                 @else
34:                 <li class="breadcrumb-item"><a href="{!! route('ondemand.workers.index',@$_GET['id']) !!}">{{trans('lang.worker_table')}}</a>
35:                 </li>
36:                 @endif

28:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
29: 
30:                 @if(!isset($_GET['id']))
31:                 <li class="breadcrumb-item"><a href="{!! route('ondemand.workers.index') !!}">{{trans('lang.worker_table')}}</a>
32:                 </li>
33:                 @else
34:                 <li class="breadcrumb-item"><a href="{!! route('ondemand.workers.index',@$_GET['id']) !!}">{{trans('lang.worker_table')}}</a>
35:                 </li>
36:                 @endif
37: 

31:                 <li class="breadcrumb-item"><a href="{!! route('ondemand.workers.index') !!}">{{trans('lang.worker_table')}}</a>
32:                 </li>
33:                 @else
34:                 <li class="breadcrumb-item"><a href="{!! route('ondemand.workers.index',@$_GET['id']) !!}">{{trans('lang.worker_table')}}</a>
35:                 </li>
36:                 @endif
37: 
38:                 <li class="breadcrumb-item">{{trans('lang.worker_edit')}}</li>
39:             </ol>
40:         </div>

35:                 </li>
36:                 @endif
37: 
38:                 <li class="breadcrumb-item">{{trans('lang.worker_edit')}}</li>
39:             </ol>
40:         </div>
41:     </div>
42: 
43:     <div class="card-body">
44:         <div class="error_top"></div>

45:         <div class="row vendor_payout_create">
46:             <div class="vendor_payout_create-inner">
47:                 <fieldset>
48:                     <legend>{{trans('lang.worker_edit')}}</legend>
49: 
50:                     <div class="form-group row width-50">
51:                         <input type="hidden" class="form-control author_profile">
52:                         <label class="col-3 control-label">{{trans('lang.first_name')}}</label>
53:                         <div class="col-7">
54:                             <input type="text" class="form-control first_name">

107: 
108:                         </div>
109:                     </div>
110:                     @if(!isset($_GET['id']))
111:                         <div class="form-group row width-50">
112:                             <label class="col-3 control-label">{{trans('lang.provider')}}</label>
113:                             <div class="col-7">
114:                                 <select id="provider_select" class="form-control">
115:                                     <option value="">{{trans('lang.select_provider')}}</option>
116:                                 </select>

109:                     </div>
110:                     @if(!isset($_GET['id']))
111:                         <div class="form-group row width-50">
112:                             <label class="col-3 control-label">{{trans('lang.provider')}}</label>
113:                             <div class="col-7">
114:                                 <select id="provider_select" class="form-control">
115:                                     <option value="">{{trans('lang.select_provider')}}</option>
116:                                 </select>
117:                                 <div class="form-text text-muted">
118:                                     {{ trans("lang.coupon_provider_help") }}

111:                         <div class="form-group row width-50">
112:                             <label class="col-3 control-label">{{trans('lang.provider')}}</label>
113:                             <div class="col-7">
114:                                 <select id="provider_select" class="form-control">
115:                                     <option value="">{{trans('lang.select_provider')}}</option>
116:                                 </select>
117:                                 <div class="form-text text-muted">
118:                                     {{ trans("lang.coupon_provider_help") }}
119:                                 </div>
120:                             </div>

112:                             <label class="col-3 control-label">{{trans('lang.provider')}}</label>
113:                             <div class="col-7">
114:                                 <select id="provider_select" class="form-control">
115:                                     <option value="">{{trans('lang.select_provider')}}</option>
116:                                 </select>
117:                                 <div class="form-text text-muted">
118:                                     {{ trans("lang.coupon_provider_help") }}
119:                                 </div>
120:                             </div>
121:                         </div>

115:                                     <option value="">{{trans('lang.select_provider')}}</option>
116:                                 </select>
117:                                 <div class="form-text text-muted">
118:                                     {{ trans("lang.coupon_provider_help") }}
119:                                 </div>
120:                             </div>
121:                         </div>
122:                     @endif
123: 
124:                     <div class="form-group row width-50">

143:         <button type="button" class="btn btn-primary edit-form-btn"><i class="fa fa-save"></i>
144:             {{trans('lang.save')}}
145:         </button>
146:         @if(!isset($_GET['id']))
147:         <a href="{!! route('ondemand.workers.index') !!}" class="btn btn-default"><i
148:                 class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
149:         @else
150:          <a href="{!! route('ondemand.workers.index',@$_GET['id']) !!}" class="btn btn-default"><i
151:                 class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
152:         @endif

144:             {{trans('lang.save')}}
145:         </button>
146:         @if(!isset($_GET['id']))
147:         <a href="{!! route('ondemand.workers.index') !!}" class="btn btn-default"><i
148:                 class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
149:         @else
150:          <a href="{!! route('ondemand.workers.index',@$_GET['id']) !!}" class="btn btn-default"><i
151:                 class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
152:         @endif
153:     </div>

147:         <a href="{!! route('ondemand.workers.index') !!}" class="btn btn-default"><i
148:                 class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
149:         @else
150:          <a href="{!! route('ondemand.workers.index',@$_GET['id']) !!}" class="btn btn-default"><i
151:                 class="fa fa-undo"></i>{{trans('lang.cancel')}}</a>
152:         @endif
153:     </div>
154: </div>
155: </div>
156: </div>

169:     var decimal_degits = 0;
170:     var createdAt = firebase.firestore.FieldValue.serverTimestamp();
171:     var id = "<?php echo $id; ?>";
172:     var workersRef = database.collection('providers_workers').doc(id);
173:     var workerImagesCount = 0;
174:     var ownerphoto = '';
175:     var ownerFileName = '';
176:     var ownerOldImageFile = '';
177:     var photo = "";
178:     var refCurrency = database.collection('currencies').where('isActive', '==', true);

170:     var createdAt = firebase.firestore.FieldValue.serverTimestamp();
171:     var id = "<?php echo $id; ?>";
172:     var workersRef = database.collection('providers_workers').doc(id);
173:     var workerImagesCount = 0;
174:     var ownerphoto = '';
175:     var ownerFileName = '';
176:     var ownerOldImageFile = '';
177:     var photo = "";
178:     var refCurrency = database.collection('currencies').where('isActive', '==', true);
179:     var placeholderImage = '';

175:     var ownerFileName = '';
176:     var ownerOldImageFile = '';
177:     var photo = "";
178:     var refCurrency = database.collection('currencies').where('isActive', '==', true);
179:     var placeholderImage = '';
180:     var placeholder = database.collection('settings').doc('placeHolderImage');
181:     var allowed_file_size = '';
182:     var ownerId = '';
183:     var storage = firebase.storage();
184:     var storageRef = firebase.storage().ref('images');

177:     var photo = "";
178:     var refCurrency = database.collection('currencies').where('isActive', '==', true);
179:     var placeholderImage = '';
180:     var placeholder = database.collection('settings').doc('placeHolderImage');
181:     var allowed_file_size = '';
182:     var ownerId = '';
183:     var storage = firebase.storage();
184:     var storageRef = firebase.storage().ref('images');
185:     var idOfProviderDetailPage="{{@$_GET['id']}}";
186:     var mapType = 'ONLINE';

182:     var ownerId = '';
183:     var storage = firebase.storage();
184:     var storageRef = firebase.storage().ref('images');
185:     var idOfProviderDetailPage="{{@$_GET['id']}}";
186:     var mapType = 'ONLINE';
187:     var section_id = getCookie('section_id');
188: 
189:     database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
190:         var data = snapshots.data();
191:         if (data && data.selectedMapType && data.selectedMapType == "osm") {

184:     var storageRef = firebase.storage().ref('images');
185:     var idOfProviderDetailPage="{{@$_GET['id']}}";
186:     var mapType = 'ONLINE';
187:     var section_id = getCookie('section_id');
188: 
189:     database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
190:         var data = snapshots.data();
191:         if (data && data.selectedMapType && data.selectedMapType == "osm") {
192:             mapType = "OFFLINE"
193:         }

186:     var mapType = 'ONLINE';
187:     var section_id = getCookie('section_id');
188: 
189:     database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
190:         var data = snapshots.data();
191:         if (data && data.selectedMapType && data.selectedMapType == "osm") {
192:             mapType = "OFFLINE"
193:         }
194:     });
195:     placeholder.get().then(async function (snapshotsimage) {

208: 
209:     $(document).ready(function () {
210: 
211:         workersRef.get().then(async function (snapshots) {
212: 
213:             var workerData = snapshots.data();
214: 
215:             $(".first_name").val(workerData.firstName)
216:             $(".last_name").val(workerData.lastName)
217:             $(".email").val(shortEmail(workerData.email))

210: 
211:         workersRef.get().then(async function (snapshots) {
212: 
213:             var workerData = snapshots.data();
214: 
215:             $(".first_name").val(workerData.firstName)
216:             $(".last_name").val(workerData.lastName)
217:             $(".email").val(shortEmail(workerData.email))
218:             if(workerData.phoneNumber.includes('+')){
219:                 $(".phone").val('+' + EditPhoneNumber(workerData.phoneNumber.slice(1)));

212: 
213:             var workerData = snapshots.data();
214: 
215:             $(".first_name").val(workerData.firstName)
216:             $(".last_name").val(workerData.lastName)
217:             $(".email").val(shortEmail(workerData.email))
218:             if(workerData.phoneNumber.includes('+')){
219:                 $(".phone").val('+' + EditPhoneNumber(workerData.phoneNumber.slice(1)));
220:             }else{
221:                 $(".phone").val(EditPhoneNumber(workerData.phoneNumber));

213:             var workerData = snapshots.data();
214: 
215:             $(".first_name").val(workerData.firstName)
216:             $(".last_name").val(workerData.lastName)
217:             $(".email").val(shortEmail(workerData.email))
218:             if(workerData.phoneNumber.includes('+')){
219:                 $(".phone").val('+' + EditPhoneNumber(workerData.phoneNumber.slice(1)));
220:             }else{
221:                 $(".phone").val(EditPhoneNumber(workerData.phoneNumber));
222:             }

214: 
215:             $(".first_name").val(workerData.firstName)
216:             $(".last_name").val(workerData.lastName)
217:             $(".email").val(shortEmail(workerData.email))
218:             if(workerData.phoneNumber.includes('+')){
219:                 $(".phone").val('+' + EditPhoneNumber(workerData.phoneNumber.slice(1)));
220:             }else{
221:                 $(".phone").val(EditPhoneNumber(workerData.phoneNumber));
222:             }
223:             $("#address").val(workerData.address);

215:             $(".first_name").val(workerData.firstName)
216:             $(".last_name").val(workerData.lastName)
217:             $(".email").val(shortEmail(workerData.email))
218:             if(workerData.phoneNumber.includes('+')){
219:                 $(".phone").val('+' + EditPhoneNumber(workerData.phoneNumber.slice(1)));
220:             }else{
221:                 $(".phone").val(EditPhoneNumber(workerData.phoneNumber));
222:             }
223:             $("#address").val(workerData.address);
224:             $('#address').val(workerData.address).attr('data-latitude', workerData.latitude).attr('data-longitude', workerData.longitude);

216:             $(".last_name").val(workerData.lastName)
217:             $(".email").val(shortEmail(workerData.email))
218:             if(workerData.phoneNumber.includes('+')){
219:                 $(".phone").val('+' + EditPhoneNumber(workerData.phoneNumber.slice(1)));
220:             }else{
221:                 $(".phone").val(EditPhoneNumber(workerData.phoneNumber));
222:             }
223:             $("#address").val(workerData.address);
224:             $('#address').val(workerData.address).attr('data-latitude', workerData.latitude).attr('data-longitude', workerData.longitude);
225:             $(".salary").val(workerData.salary);

218:             if(workerData.phoneNumber.includes('+')){
219:                 $(".phone").val('+' + EditPhoneNumber(workerData.phoneNumber.slice(1)));
220:             }else{
221:                 $(".phone").val(EditPhoneNumber(workerData.phoneNumber));
222:             }
223:             $("#address").val(workerData.address);
224:             $('#address').val(workerData.address).attr('data-latitude', workerData.latitude).attr('data-longitude', workerData.longitude);
225:             $(".salary").val(workerData.salary);
226:             ownerId = workerData.author;
227:             if (workerData.active) {

220:             }else{
221:                 $(".phone").val(EditPhoneNumber(workerData.phoneNumber));
222:             }
223:             $("#address").val(workerData.address);
224:             $('#address').val(workerData.address).attr('data-latitude', workerData.latitude).attr('data-longitude', workerData.longitude);
225:             $(".salary").val(workerData.salary);
226:             ownerId = workerData.author;
227:             if (workerData.active) {
228:                 $("#item_publish").prop('checked', true);
229:             }

221:                 $(".phone").val(EditPhoneNumber(workerData.phoneNumber));
222:             }
223:             $("#address").val(workerData.address);
224:             $('#address').val(workerData.address).attr('data-latitude', workerData.latitude).attr('data-longitude', workerData.longitude);
225:             $(".salary").val(workerData.salary);
226:             ownerId = workerData.author;
227:             if (workerData.active) {
228:                 $("#item_publish").prop('checked', true);
229:             }
230:             if (workerData.profilePictureURL != '') {

222:             }
223:             $("#address").val(workerData.address);
224:             $('#address').val(workerData.address).attr('data-latitude', workerData.latitude).attr('data-longitude', workerData.longitude);
225:             $(".salary").val(workerData.salary);
226:             ownerId = workerData.author;
227:             if (workerData.active) {
228:                 $("#item_publish").prop('checked', true);
229:             }
230:             if (workerData.profilePictureURL != '') {
231:                 ownerOldImageFile = workerData.profilePictureURL;

223:             $("#address").val(workerData.address);
224:             $('#address').val(workerData.address).attr('data-latitude', workerData.latitude).attr('data-longitude', workerData.longitude);
225:             $(".salary").val(workerData.salary);
226:             ownerId = workerData.author;
227:             if (workerData.active) {
228:                 $("#item_publish").prop('checked', true);
229:             }
230:             if (workerData.profilePictureURL != '') {
231:                 ownerOldImageFile = workerData.profilePictureURL;
232:                 ownerphoto = workerData.profilePictureURL;

224:             $('#address').val(workerData.address).attr('data-latitude', workerData.latitude).attr('data-longitude', workerData.longitude);
225:             $(".salary").val(workerData.salary);
226:             ownerId = workerData.author;
227:             if (workerData.active) {
228:                 $("#item_publish").prop('checked', true);
229:             }
230:             if (workerData.profilePictureURL != '') {
231:                 ownerOldImageFile = workerData.profilePictureURL;
232:                 ownerphoto = workerData.profilePictureURL;
233:                 $(".uploaded_image_owner").html('<img id="uploaded_image_owner" src="' + ownerphoto + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'" width="150px" height="150px;">');

227:             if (workerData.active) {
228:                 $("#item_publish").prop('checked', true);
229:             }
230:             if (workerData.profilePictureURL != '') {
231:                 ownerOldImageFile = workerData.profilePictureURL;
232:                 ownerphoto = workerData.profilePictureURL;
233:                 $(".uploaded_image_owner").html('<img id="uploaded_image_owner" src="' + ownerphoto + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'" width="150px" height="150px;">');
234:             } else {
235:                 $(".uploaded_image_owner").html('<img id="uploaded_image_owner" src="' + placeholderImage + '"  width="150px" height="150px;">');
236:             }

228:                 $("#item_publish").prop('checked', true);
229:             }
230:             if (workerData.profilePictureURL != '') {
231:                 ownerOldImageFile = workerData.profilePictureURL;
232:                 ownerphoto = workerData.profilePictureURL;
233:                 $(".uploaded_image_owner").html('<img id="uploaded_image_owner" src="' + ownerphoto + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'" width="150px" height="150px;">');
234:             } else {
235:                 $(".uploaded_image_owner").html('<img id="uploaded_image_owner" src="' + placeholderImage + '"  width="150px" height="150px;">');
236:             }
237: 

229:             }
230:             if (workerData.profilePictureURL != '') {
231:                 ownerOldImageFile = workerData.profilePictureURL;
232:                 ownerphoto = workerData.profilePictureURL;
233:                 $(".uploaded_image_owner").html('<img id="uploaded_image_owner" src="' + ownerphoto + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'" width="150px" height="150px;">');
234:             } else {
235:                 $(".uploaded_image_owner").html('<img id="uploaded_image_owner" src="' + placeholderImage + '"  width="150px" height="150px;">');
236:             }
237: 
238:             $(".uploaded_image_owner").show();

237: 
238:             $(".uploaded_image_owner").show();
239: 
240:             database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function (snapshots) {
241:                 snapshots.docs.forEach((listval) => {
242:                     var data = listval.data();
243:                     if (workerData.providerId == data.id) {
244:                         $('#provider_select').append($("<option selected></option>")
245:                             .attr("value", data.id)
246:                             .text(data.firstName + ' ' + data.lastName));

240:             database.collection('users').where('role', '==', 'provider').where('section_id','==',section_id).get().then(async function (snapshots) {
241:                 snapshots.docs.forEach((listval) => {
242:                     var data = listval.data();
243:                     if (workerData.providerId == data.id) {
244:                         $('#provider_select').append($("<option selected></option>")
245:                             .attr("value", data.id)
246:                             .text(data.firstName + ' ' + data.lastName));
247:                     } else {
248:                         $('#provider_select').append($("<option></option>")
249:                             .attr("value", data.id)

241:                 snapshots.docs.forEach((listval) => {
242:                     var data = listval.data();
243:                     if (workerData.providerId == data.id) {
244:                         $('#provider_select').append($("<option selected></option>")
245:                             .attr("value", data.id)
246:                             .text(data.firstName + ' ' + data.lastName));
247:                     } else {
248:                         $('#provider_select').append($("<option></option>")
249:                             .attr("value", data.id)
250:                             .text(data.firstName + ' ' + data.lastName));

245:                             .attr("value", data.id)
246:                             .text(data.firstName + ' ' + data.lastName));
247:                     } else {
248:                         $('#provider_select').append($("<option></option>")
249:                             .attr("value", data.id)
250:                             .text(data.firstName + ' ' + data.lastName));
251:                     }
252:                 })
253:             });
254:         });

266:             var authorProfilePic = $('.author_profile').val();
267:             var longitude = parseFloat($('#address').attr('data-longitude'));
268:             var latitude = parseFloat($('#address').attr('data-latitude'));
269:             var providerId = (idOfProviderDetailPage!='') ? idOfProviderDetailPage : $("#provider_select").val();
270: 
271:             if (userFirstName == '') {
272:                 $(".error_top").show();
273:                 $(".error_top").html("");
274:                 $(".error_top").append("<p>{{trans('lang.enter_worker_first_name_error')}}</p>");
275:                 window.scrollTo(0, 0);

271:             if (userFirstName == '') {
272:                 $(".error_top").show();
273:                 $(".error_top").html("");
274:                 $(".error_top").append("<p>{{trans('lang.enter_worker_first_name_error')}}</p>");
275:                 window.scrollTo(0, 0);
276:             } else if (userLastName == '') {
277:                 $(".error_top").show();
278:                 $(".error_top").html("");
279:                 $(".error_top").append("<p>{{trans('lang.enter_worker_last_name_error')}}</p>");
280:                 window.scrollTo(0, 0);

276:             } else if (userLastName == '') {
277:                 $(".error_top").show();
278:                 $(".error_top").html("");
279:                 $(".error_top").append("<p>{{trans('lang.enter_worker_last_name_error')}}</p>");
280:                 window.scrollTo(0, 0);
281:             } else if (email == '') {
282:                 $(".error_top").show();
283:                 $(".error_top").html("");
284:                 $(".error_top").append("<p>{{trans('lang.enter_worker_email_error')}}</p>");
285:                 window.scrollTo(0, 0);

281:             } else if (email == '') {
282:                 $(".error_top").show();
283:                 $(".error_top").html("");
284:                 $(".error_top").append("<p>{{trans('lang.enter_worker_email_error')}}</p>");
285:                 window.scrollTo(0, 0);
286:             } else if (userPhone == '') {
287:                 $(".error_top").show();
288:                 $(".error_top").html("");
289:                 $(".error_top").append("<p>{{trans('lang.enter_worker_userphone_error')}}</p>");
290:                 window.scrollTo(0, 0);

286:             } else if (userPhone == '') {
287:                 $(".error_top").show();
288:                 $(".error_top").html("");
289:                 $(".error_top").append("<p>{{trans('lang.enter_worker_userphone_error')}}</p>");
290:                 window.scrollTo(0, 0);
291:             } else if (salary == '') {
292:                 $(".error_top").show();
293:                 $(".error_top").html("");
294:                 $(".error_top").append("<p>{{trans('lang.enter_worker_salary_error')}}</p>");
295:                 window.scrollTo(0, 0);

291:             } else if (salary == '') {
292:                 $(".error_top").show();
293:                 $(".error_top").html("");
294:                 $(".error_top").append("<p>{{trans('lang.enter_worker_salary_error')}}</p>");
295:                 window.scrollTo(0, 0);
296:             } else if (isNaN(latitude) || isNaN(longitude)) {
297:                 $(".error_top").show();
298:                 $(".error_top").html("");
299:                 $(".error_top").append("<p>{{trans('lang.enter_worker_address_error')}}</p>");
300:                 window.scrollTo(0, 0);

296:             } else if (isNaN(latitude) || isNaN(longitude)) {
297:                 $(".error_top").show();
298:                 $(".error_top").html("");
299:                 $(".error_top").append("<p>{{trans('lang.enter_worker_address_error')}}</p>");
300:                 window.scrollTo(0, 0);
301:             } else {
302:                 jQuery("#data-table_processing").show();
303: 
304:                 await storeImageData().then(async (IMG) => {
305: 

303: 
304:                 await storeImageData().then(async (IMG) => {
305: 
306:                     geoFirestore.collection('providers_workers').doc(id).update({
307:                         'firstName': userFirstName,
308:                         'lastName': userLastName,
309:                         'email': email,
310:                         'phoneNumber': userPhone,
311:                         'email': email,
312:                         'salary': salary,

315:                         'active': itemPublish,
316:                         'latitude': latitude,
317:                         'longitude': longitude,
318:                         'providerId': providerId,
319:                         coordinates: new firebase.firestore.GeoPoint(latitude, longitude),
320: 
321:                     }).then(function (result) {
322:                         if(idOfProviderDetailPage!=''){
323:                             window.location.href = '{{ route("ondemand.workers.index",@$_GET['id'])}}';
324:                         }else{

319:                         coordinates: new firebase.firestore.GeoPoint(latitude, longitude),
320: 
321:                     }).then(function (result) {
322:                         if(idOfProviderDetailPage!=''){
323:                             window.location.href = '{{ route("ondemand.workers.index",@$_GET['id'])}}';
324:                         }else{
325:                         window.location.href = '{{ route("ondemand.workers.index")}}';
326:                         }
327:                     });
328: 

320: 
321:                     }).then(function (result) {
322:                         if(idOfProviderDetailPage!=''){
323:                             window.location.href = '{{ route("ondemand.workers.index",@$_GET['id'])}}';
324:                         }else{
325:                         window.location.href = '{{ route("ondemand.workers.index")}}';
326:                         }
327:                     });
328: 
329:                 }).catch(err => {

322:                         if(idOfProviderDetailPage!=''){
323:                             window.location.href = '{{ route("ondemand.workers.index",@$_GET['id'])}}';
324:                         }else{
325:                         window.location.href = '{{ route("ondemand.workers.index")}}';
326:                         }
327:                     });
328: 
329:                 }).catch(err => {
330:                     jQuery("#data-table_processing").hide();
331:                     $(".error_top").show();

354:                             autocompleteList.innerHTML = '';
355:                             data.forEach(place => {
356:                                 var item = document.createElement('div');
357:                                 item.classList.add('autocomplete-item');
358:                                 item.innerText = place.display_name;
359:                                 item.onclick = function() {
360:                                     input.value = place.display_name;
361:                                     input.setAttribute('data-latitude', place.lat);
362:                                     input.setAttribute('data-longitude', place.lon);
363:                                     if (place.address) {

```

### FILE: C:\deploy\adminpanel\resources\views\OnDemandService\workers\index.blade.php
```text
5: <div class="page-wrapper">
6:     <div class="row page-titles">
7:         <div class="col-md-5 align-self-center">
8:             <h3 class="text-themecolor">{{trans('lang.ondemand_plural')}} - {{trans('lang.worker_plural')}}</h3>
9:         </div>
10:         <div class="col-md-7 align-self-center">
11:             <ol class="breadcrumb">
12:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
13:                 <li class="breadcrumb-item active">{{trans('lang.worker_plural')}}</li>
14:             </ol>

10:         <div class="col-md-7 align-self-center">
11:             <ol class="breadcrumb">
12:                 <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
13:                 <li class="breadcrumb-item active">{{trans('lang.worker_plural')}}</li>
14:             </ol>
15:         </div>
16:         <div>
17:         </div>
18:     </div>
19:     <div class="container-fluid">

25: 
26:                         <div class="menu-tab tabDiv">
27:                             <ul>
28:                                 <li ><a href="{{route('providers.view', $id)}}"><img src="{{ asset('images/provider.png') }}"> {{trans('lang.tab_basic')}}</a>
29:                                 </li>
30:                                 <li><a href="{{route('ondemand.services.index', $id)}}"><img src="{{ asset('images/service.png') }}"> {{trans('lang.services')}}</a></li>
31:                                 <li>
32:                                 <li class="active"><a href="{{route('ondemand.workers.index', $id)}}"><img src="{{ asset('images/worker.png') }}"> {{trans('lang.workers')}}</a></li>
33:                                 <li>
34:                                 <li><a href="{{route('ondemand.bookings.index',$id)}}"><img src="{{ asset('images/booking.png') }}"> {{trans('lang.booking_plural')}}</a></li>

27:                             <ul>
28:                                 <li ><a href="{{route('providers.view', $id)}}"><img src="{{ asset('images/provider.png') }}"> {{trans('lang.tab_basic')}}</a>
29:                                 </li>
30:                                 <li><a href="{{route('ondemand.services.index', $id)}}"><img src="{{ asset('images/service.png') }}"> {{trans('lang.services')}}</a></li>
31:                                 <li>
32:                                 <li class="active"><a href="{{route('ondemand.workers.index', $id)}}"><img src="{{ asset('images/worker.png') }}"> {{trans('lang.workers')}}</a></li>
33:                                 <li>
34:                                 <li><a href="{{route('ondemand.bookings.index',$id)}}"><img src="{{ asset('images/booking.png') }}"> {{trans('lang.booking_plural')}}</a></li>
35:                                 <li>
36:                                 <li><a href="{{route('ondemand.coupons', $id)}}"><img src="{{ asset('images/coupon.png') }}"> {{trans('lang.coupon_plural')}}</a></li>

29:                                 </li>
30:                                 <li><a href="{{route('ondemand.services.index', $id)}}"><img src="{{ asset('images/service.png') }}"> {{trans('lang.services')}}</a></li>
31:                                 <li>
32:                                 <li class="active"><a href="{{route('ondemand.workers.index', $id)}}"><img src="{{ asset('images/worker.png') }}"> {{trans('lang.workers')}}</a></li>
33:                                 <li>
34:                                 <li><a href="{{route('ondemand.bookings.index',$id)}}"><img src="{{ asset('images/booking.png') }}"> {{trans('lang.booking_plural')}}</a></li>
35:                                 <li>
36:                                 <li><a href="{{route('ondemand.coupons', $id)}}"><img src="{{ asset('images/coupon.png') }}"> {{trans('lang.coupon_plural')}}</a></li>
37:                                  <li>
38:                                     <a href="{{route('providerPayouts.payout', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payouts')}}</a>

31:                                 <li>
32:                                 <li class="active"><a href="{{route('ondemand.workers.index', $id)}}"><img src="{{ asset('images/worker.png') }}"> {{trans('lang.workers')}}</a></li>
33:                                 <li>
34:                                 <li><a href="{{route('ondemand.bookings.index',$id)}}"><img src="{{ asset('images/booking.png') }}"> {{trans('lang.booking_plural')}}</a></li>
35:                                 <li>
36:                                 <li><a href="{{route('ondemand.coupons', $id)}}"><img src="{{ asset('images/coupon.png') }}"> {{trans('lang.coupon_plural')}}</a></li>
37:                                  <li>
38:                                     <a href="{{route('providerPayouts.payout', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payouts')}}</a>
39:                                 </li>
40:                                 <li>

33:                                 <li>
34:                                 <li><a href="{{route('ondemand.bookings.index',$id)}}"><img src="{{ asset('images/booking.png') }}"> {{trans('lang.booking_plural')}}</a></li>
35:                                 <li>
36:                                 <li><a href="{{route('ondemand.coupons', $id)}}"><img src="{{ asset('images/coupon.png') }}"> {{trans('lang.coupon_plural')}}</a></li>
37:                                  <li>
38:                                     <a href="{{route('providerPayouts.payout', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payouts')}}</a>
39:                                 </li>
40:                                 <li>
41:                                     <a href="{{route('payoutRequests.providers', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payout_request')}}</a>
42:                                 </li>

35:                                 <li>
36:                                 <li><a href="{{route('ondemand.coupons', $id)}}"><img src="{{ asset('images/coupon.png') }}"> {{trans('lang.coupon_plural')}}</a></li>
37:                                  <li>
38:                                     <a href="{{route('providerPayouts.payout', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payouts')}}</a>
39:                                 </li>
40:                                 <li>
41:                                     <a href="{{route('payoutRequests.providers', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payout_request')}}</a>
42:                                 </li>
43:                                 <li>
44:                                     <a href="{{route('users.walletstransaction',$id)}}"

38:                                     <a href="{{route('providerPayouts.payout', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payouts')}}</a>
39:                                 </li>
40:                                 <li>
41:                                     <a href="{{route('payoutRequests.providers', $id)}}"><img src="{{ asset('images/payment.png') }}"> {{trans('lang.tab_payout_request')}}</a>
42:                                 </li>
43:                                 <li>
44:                                     <a href="{{route('users.walletstransaction',$id)}}"
45:                                            class="wallet_transaction"><img src="{{ asset('images/wallet.png') }}">  {{trans('lang.wallet_transaction')}}</a>
46:                                 </li>
47:                                 <?php 

42:                                 </li>
43:                                 <li>
44:                                     <a href="{{route('users.walletstransaction',$id)}}"
45:                                            class="wallet_transaction"><img src="{{ asset('images/wallet.png') }}">  {{trans('lang.wallet_transaction')}}</a>
46:                                 </li>
47:                                 <?php 
48:                     
49:                                     $subscription =  route("subscription.subscriptionPlanHistory", ":id");
50:                                     $subscription =  str_replace(":id", "providerID=" . $id, $subscription);
51:                                     ?>

47:                                 <?php 
48:                     
49:                                     $subscription =  route("subscription.subscriptionPlanHistory", ":id");
50:                                     $subscription =  str_replace(":id", "providerID=" . $id, $subscription);
51:                                     ?>
52:                                 <li> 
53:                                     <a href="{{ $subscription }}"><img src="{{ asset('images/subscription.png') }}"> {{trans('lang.subscription_history')}}</a>
54:                                 </li>
55:                             </ul>
56:                         </div>

50:                                     $subscription =  str_replace(":id", "providerID=" . $id, $subscription);
51:                                     ?>
52:                                 <li> 
53:                                     <a href="{{ $subscription }}"><img src="{{ asset('images/subscription.png') }}"> {{trans('lang.subscription_history')}}</a>
54:                                 </li>
55:                             </ul>
56:                         </div>
57: 
58:                     </div>
59:                 @endif

59:                 @endif
60:                 <div class="d-flex top-title-section pb-4 justify-content-between">
61:                     <div class="d-flex top-title-left align-self-center">
62:                         <span class="icon mr-3"><img src="{{ asset('images/worker.png') }}"></span>
63:                         <h3 class="mb-0">{{trans('lang.worker_plural')}}</h3>
64:                         <span class="counter ml-3 total_count"></span>
65:                     </div>
66:                     <div class="d-flex top-title-right align-self-center">
67:                                 <div class="select-box pl-3">
68:                                     <select class="form-control status_selector filteredRecords">

60:                 <div class="d-flex top-title-section pb-4 justify-content-between">
61:                     <div class="d-flex top-title-left align-self-center">
62:                         <span class="icon mr-3"><img src="{{ asset('images/worker.png') }}"></span>
63:                         <h3 class="mb-0">{{trans('lang.worker_plural')}}</h3>
64:                         <span class="counter ml-3 total_count"></span>
65:                     </div>
66:                     <div class="d-flex top-title-right align-self-center">
67:                                 <div class="select-box pl-3">
68:                                     <select class="form-control status_selector filteredRecords">
69:                                         <option value="">{{trans("lang.status")}}</option>

88:                <div class="card border">
89:                  <div class="card-header d-flex justify-content-between align-items-center border-0">
90:                    <div class="card-header-title">
91:                     <h3 class="text-dark-2 mb-2 h4">{{trans('lang.worker_plural')}}</h3>
92:                     <p class="mb-0 text-dark-2">{{trans('lang.worker_table_text')}}</p>
93:                    </div>
94:                    <div class="card-header-right d-flex align-items-center">
95:                     <div class="card-header-btn mr-3"> 
96:                     @if($id=='')
97:                         <a class="btn-primary btn rounded-full" href="{!! route('ondemand.workers.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.worker_create')}}</a>

89:                  <div class="card-header d-flex justify-content-between align-items-center border-0">
90:                    <div class="card-header-title">
91:                     <h3 class="text-dark-2 mb-2 h4">{{trans('lang.worker_plural')}}</h3>
92:                     <p class="mb-0 text-dark-2">{{trans('lang.worker_table_text')}}</p>
93:                    </div>
94:                    <div class="card-header-right d-flex align-items-center">
95:                     <div class="card-header-btn mr-3"> 
96:                     @if($id=='')
97:                         <a class="btn-primary btn rounded-full" href="{!! route('ondemand.workers.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.worker_create')}}</a>
98:                     @else

94:                    <div class="card-header-right d-flex align-items-center">
95:                     <div class="card-header-btn mr-3"> 
96:                     @if($id=='')
97:                         <a class="btn-primary btn rounded-full" href="{!! route('ondemand.workers.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.worker_create')}}</a>
98:                     @else
99:                     <a class="btn-primary btn rounded-full" href="{!! route('ondemand.workers.create','id='.$id) !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.worker_create')}}</a>
100:                     @endif
101:                      </div>
102:                    </div>                
103:                  </div>

96:                     @if($id=='')
97:                         <a class="btn-primary btn rounded-full" href="{!! route('ondemand.workers.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.worker_create')}}</a>
98:                     @else
99:                     <a class="btn-primary btn rounded-full" href="{!! route('ondemand.workers.create','id='.$id) !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.worker_create')}}</a>
100:                     @endif
101:                      </div>
102:                    </div>                
103:                  </div>
104:                  <div class="card-body">
105:                          <div class="table-responsive m-t-10">

103:                  </div>
104:                  <div class="card-body">
105:                          <div class="table-responsive m-t-10">
106:                             <table id="workerTable" class="display nowrap table table-hover table-striped table-bordered table table-striped" cellspacing="0" width="100%">
107:                                 <thead>
108:                                 <tr>
109:                                 <?php if (in_array('ondemand.workers.delete', json_decode(@session('user_permissions'),true))) { ?>
110:                                         <th class="delete-all"><input type="checkbox" id="is_active"><label
111:                                                     class="col-3 control-label" for="is_active"
112:                                             ><a id="deleteAll" class="do_not_delete"

106:                             <table id="workerTable" class="display nowrap table table-hover table-striped table-bordered table table-striped" cellspacing="0" width="100%">
107:                                 <thead>
108:                                 <tr>
109:                                 <?php if (in_array('ondemand.workers.delete', json_decode(@session('user_permissions'),true))) { ?>
110:                                         <th class="delete-all"><input type="checkbox" id="is_active"><label
111:                                                     class="col-3 control-label" for="is_active"
112:                                             ><a id="deleteAll" class="do_not_delete"
113:                                                 href="javascript:void(0)"><i
114:                                                             class="fa fa-trash"></i> {{trans('lang.all')}}</a></label></th>
115:                                             <?php }?>

113:                                                 href="javascript:void(0)"><i
114:                                                             class="fa fa-trash"></i> {{trans('lang.all')}}</a></label></th>
115:                                             <?php }?>
116:                                         <th>{{trans('lang.worker_info')}}</th>
117:                                         <th>{{trans('lang.email')}}</th>
118:                                         <th>{{trans('lang.salary')}}</th>
119:                                         <th>{{trans('lang.provider')}}</th>
120:                                         <th>{{trans('lang.onoff')}}</th>
121:                                         <th>{{trans('lang.status')}}</th>
122:                                         <th>{{trans('lang.actions')}}</th>

116:                                         <th>{{trans('lang.worker_info')}}</th>
117:                                         <th>{{trans('lang.email')}}</th>
118:                                         <th>{{trans('lang.salary')}}</th>
119:                                         <th>{{trans('lang.provider')}}</th>
120:                                         <th>{{trans('lang.onoff')}}</th>
121:                                         <th>{{trans('lang.status')}}</th>
122:                                         <th>{{trans('lang.actions')}}</th>
123:                                 </tr>
124:                                 </thead>
125:                                 <tbody id="append_list1">

145:     var checkDeletePermission = false;
146:     var checkChatPermission = false;
147:     var id="{{$id}}";
148:     if ($.inArray('ondemand.workers.delete', user_permissions) >= 0) {
149:             checkDeletePermission = true;
150:     }
151:     if (($.inArray('ondemand.workers.chat', user_permissions) >= 0)) {
152:         checkChatPermission = true;
153:     }
154:     $('.status_selector').select2({

148:     if ($.inArray('ondemand.workers.delete', user_permissions) >= 0) {
149:             checkDeletePermission = true;
150:     }
151:     if (($.inArray('ondemand.workers.chat', user_permissions) >= 0)) {
152:         checkChatPermission = true;
153:     }
154:     $('.status_selector').select2({
155:         placeholder: '{{trans("lang.status")}}',  
156:         minimumResultsForSearch: Infinity,
157:         allowClear: true 

184:     $('.filteredRecords').change(async function() {
185:         var status = $('.status_selector').val();
186:         var daterangepicker = $('#daterange').data('daterangepicker');
187:         ref = database.collection('providers_workers');
188:         if (status) {
189:             ref = (status == "active") ? ref.where('active', '==', true) : ref.where('active', '==', false);
190:         }
191:         if(id!=''){           
192:             ref = ref.where('providerId','==',id).orderBy('createdAt', 'desc');
193:         }else{

189:             ref = (status == "active") ? ref.where('active', '==', true) : ref.where('active', '==', false);
190:         }
191:         if(id!=''){           
192:             ref = ref.where('providerId','==',id).orderBy('createdAt', 'desc');
193:         }else{
194:             ref = ref.orderBy('createdAt', 'desc');
195:         }
196:         if ($('#daterange span').html() != '{{trans("lang.select_range")}}' && daterangepicker) {
197:             var from = moment(daterangepicker.startDate).toDate();
198:             var to = moment(daterangepicker.endDate).toDate();

203:                 ref = ref.where('createdAt', '<=', toDate);
204:             }
205:         }       
206:         $('#workerTable').DataTable().ajax.reload();
207:     });
208:     
209:     if(id!=''){
210:         var wallet_route = "{{route('users.walletstransaction','id')}}";
211:         $(".wallet_transaction").attr("href", wallet_route.replace('id', 'providerID='+id));
212: 

208:     
209:     if(id!=''){
210:         var wallet_route = "{{route('users.walletstransaction','id')}}";
211:         $(".wallet_transaction").attr("href", wallet_route.replace('id', 'providerID='+id));
212: 
213:          $('.tabDiv').show();
214:          ref = database.collection('providers_workers').where('providerId','==',id).orderBy('createdAt', 'desc');
215:     }else{
216:          $('.tabDiv').hide();
217:          ref = database.collection('providers_workers').orderBy('createdAt', 'desc');

211:         $(".wallet_transaction").attr("href", wallet_route.replace('id', 'providerID='+id));
212: 
213:          $('.tabDiv').show();
214:          ref = database.collection('providers_workers').where('providerId','==',id).orderBy('createdAt', 'desc');
215:     }else{
216:          $('.tabDiv').hide();
217:          ref = database.collection('providers_workers').orderBy('createdAt', 'desc');
218:     }
219: 
220:     var currentCurrency = '';

214:          ref = database.collection('providers_workers').where('providerId','==',id).orderBy('createdAt', 'desc');
215:     }else{
216:          $('.tabDiv').hide();
217:          ref = database.collection('providers_workers').orderBy('createdAt', 'desc');
218:     }
219: 
220:     var currentCurrency = '';
221:     var currencyAtRight = false;
222:     var decimal_degits = 0;
223: 

221:     var currencyAtRight = false;
222:     var decimal_degits = 0;
223: 
224:     var refCurrency = database.collection('currencies').where('isActive', '==', true);
225:     refCurrency.get().then(async function (snapshots) {
226:         var currencyData = snapshots.docs[0].data();
227:         currentCurrency = currencyData.symbol;
228:         currencyAtRight = currencyData.symbolAtRight;
229:         if (currencyData.decimal_degits) {
230:             decimal_degits = currencyData.decimal_degits;

231:         }
232:     });
233: 
234:     var placeholder = database.collection('settings').doc('placeHolderImage');
235:     placeholder.get().then(async function (snapshotsimage) {
236:         var placeholderImageData = snapshotsimage.data();
237:         placeholderImage = placeholderImageData.image;
238:     })
239: 
240:     $(document).ready(function () {

239: 
240:     $(document).ready(function () {
241:         if(id!=''){
242:             getProviderNameForFilter(id);
243:         }
244:         jQuery("#data-table_processing").show();
245: 
246: 
247:         var userRef = database.collection('users');
248: 

244:         jQuery("#data-table_processing").show();
245: 
246: 
247:         var userRef = database.collection('users');
248: 
249:         var fieldConfig = {
250:             columns: [
251:                 { key: 'name', header: "{{ trans('lang.worker_info')}}" }, 
252:                 { key: 'email', header: "{{ trans('lang.email')}}" }, 
253:                 { key: 'salary', header: "{{trans('lang.salary')}}" },

248: 
249:         var fieldConfig = {
250:             columns: [
251:                 { key: 'name', header: "{{ trans('lang.worker_info')}}" }, 
252:                 { key: 'email', header: "{{ trans('lang.email')}}" }, 
253:                 { key: 'salary', header: "{{trans('lang.salary')}}" },
254:                 { key: 'providerName', header: "{{trans('lang.provider')}}" },
255:                 { key: 'online', header: "{{trans('lang.status')}}" }, 
256:             ],
257:             fileName: "{{trans('lang.worker_list')}}",

251:                 { key: 'name', header: "{{ trans('lang.worker_info')}}" }, 
252:                 { key: 'email', header: "{{ trans('lang.email')}}" }, 
253:                 { key: 'salary', header: "{{trans('lang.salary')}}" },
254:                 { key: 'providerName', header: "{{trans('lang.provider')}}" },
255:                 { key: 'online', header: "{{trans('lang.status')}}" }, 
256:             ],
257:             fileName: "{{trans('lang.worker_list')}}",
258:         };
259: 
260:         const table = $('#workerTable').DataTable({

254:                 { key: 'providerName', header: "{{trans('lang.provider')}}" },
255:                 { key: 'online', header: "{{trans('lang.status')}}" }, 
256:             ],
257:             fileName: "{{trans('lang.worker_list')}}",
258:         };
259: 
260:         const table = $('#workerTable').DataTable({
261:             pageLength: 10, // Number of rows per page
262:             processing: false, // Show processing indicator
263:             serverSide: true, // Enable server-side processing

257:             fileName: "{{trans('lang.worker_list')}}",
258:         };
259: 
260:         const table = $('#workerTable').DataTable({
261:             pageLength: 10, // Number of rows per page
262:             processing: false, // Show processing indicator
263:             serverSide: true, // Enable server-side processing
264:             responsive: true,
265:             ajax: async function (data, callback, settings) {
266:                 const start = data.start;

268:                 const searchValue = data.search.value.toLowerCase();
269:                 const orderColumnIndex = data.order[0].column;
270:                 const orderDirection = data.order[0].dir;
271:                 var orderableColumns = (checkDeletePermission) ? ['', 'name', 'email', 'salary', 'providerName', 'online', '', ''] : ['name', 'email', 'salary', 'providerName', '', '', '']; // Ensure this matches the actual column names
272:                 const orderByField = orderableColumns[orderColumnIndex]; // Adjust the index to match your table
273:                 if (searchValue.length >= 3 || searchValue.length === 0) {
274:                     $('#data-table_processing').show();
275:                 }
276:                 await ref.get().then(async function (querySnapshot) {
277:                     if (querySnapshot.empty) {

299:                     await Promise.all(querySnapshot.docs.map(async (doc) => {
300:                         let childData = doc.data();
301:                         childData.id = doc.id; // Ensure the document ID is included in the data
302:                         if (childData.hasOwnProperty("providerId")) {
303:                             childData.providerName = userNames[childData.providerId] || '';
304:                         } else {
305:                             childData.providerName = '';
306:                         }
307:                         childData.name = childData.firstName + ' ' + childData.lastName;
308: 

300:                         let childData = doc.data();
301:                         childData.id = doc.id; // Ensure the document ID is included in the data
302:                         if (childData.hasOwnProperty("providerId")) {
303:                             childData.providerName = userNames[childData.providerId] || '';
304:                         } else {
305:                             childData.providerName = '';
306:                         }
307:                         childData.name = childData.firstName + ' ' + childData.lastName;
308: 
309:                         let on_status = '';

302:                         if (childData.hasOwnProperty("providerId")) {
303:                             childData.providerName = userNames[childData.providerId] || '';
304:                         } else {
305:                             childData.providerName = '';
306:                         }
307:                         childData.name = childData.firstName + ' ' + childData.lastName;
308: 
309:                         let on_status = '';
310:                         if(childData.online == true){
311:                             on_status = "Online";

320:                                 (childData.name && childData.name.toLowerCase().toString().includes(searchValue)) ||
321:                                 (childData.email && childData.email.toLowerCase().toString().includes(searchValue)) ||
322:                                 (childData.salary && childData.salary.toString().toLowerCase().includes(searchValue)) ||
323:                                 (childData.providerName && childData.providerName.toString().toLowerCase().includes(searchValue)) ||
324:                                 (on_status && on_status.toString().toLowerCase().includes(searchValue))
325: 
326:                             ) {
327:                                 filteredRecords.push(childData);
328:                             }
329:                         } else {

447:         var html = [];
448: 
449:         var id = val.id;
450:         var idOfProviderDetailPage="<?php echo $id;?>";
451:         var route1 = '{{route("ondemand.workers.edit",":id")}}';
452:         if(idOfProviderDetailPage!=''){
453:             route1 = route1.replace(':id', val.id+"?id="+idOfProviderDetailPage);
454:         }else{ 
455:             route1 = route1.replace(':id', val.id);
456:         }

448: 
449:         var id = val.id;
450:         var idOfProviderDetailPage="<?php echo $id;?>";
451:         var route1 = '{{route("ondemand.workers.edit",":id")}}';
452:         if(idOfProviderDetailPage!=''){
453:             route1 = route1.replace(':id', val.id+"?id="+idOfProviderDetailPage);
454:         }else{ 
455:             route1 = route1.replace(':id', val.id);
456:         }
457: 

449:         var id = val.id;
450:         var idOfProviderDetailPage="<?php echo $id;?>";
451:         var route1 = '{{route("ondemand.workers.edit",":id")}}';
452:         if(idOfProviderDetailPage!=''){
453:             route1 = route1.replace(':id', val.id+"?id="+idOfProviderDetailPage);
454:         }else{ 
455:             route1 = route1.replace(':id', val.id);
456:         }
457: 
458:         var salary = 0;

450:         var idOfProviderDetailPage="<?php echo $id;?>";
451:         var route1 = '{{route("ondemand.workers.edit",":id")}}';
452:         if(idOfProviderDetailPage!=''){
453:             route1 = route1.replace(':id', val.id+"?id="+idOfProviderDetailPage);
454:         }else{ 
455:             route1 = route1.replace(':id', val.id);
456:         }
457: 
458:         var salary = 0;
459: 

477:         html.push(salary);
478: 
479: 
480:         if (val.hasOwnProperty("providerId")) {
481:             var providerView = '{{route("providers.view",":id")}}';
482:             providerView = providerView.replace(':id', val.providerId);
483:             if(val.providerName==""){
484:                 providerView="javascript:void(0)";
485:                 providerName="{{trans('lang.unknown')}}"
486:             }

478: 
479: 
480:         if (val.hasOwnProperty("providerId")) {
481:             var providerView = '{{route("providers.view",":id")}}';
482:             providerView = providerView.replace(':id', val.providerId);
483:             if(val.providerName==""){
484:                 providerView="javascript:void(0)";
485:                 providerName="{{trans('lang.unknown')}}"
486:             }
487:             html.push('<a href="' + providerView + '">' + val.providerName + '</a>');

479: 
480:         if (val.hasOwnProperty("providerId")) {
481:             var providerView = '{{route("providers.view",":id")}}';
482:             providerView = providerView.replace(':id', val.providerId);
483:             if(val.providerName==""){
484:                 providerView="javascript:void(0)";
485:                 providerName="{{trans('lang.unknown')}}"
486:             }
487:             html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
488:         } else {

480:         if (val.hasOwnProperty("providerId")) {
481:             var providerView = '{{route("providers.view",":id")}}';
482:             providerView = providerView.replace(':id', val.providerId);
483:             if(val.providerName==""){
484:                 providerView="javascript:void(0)";
485:                 providerName="{{trans('lang.unknown')}}"
486:             }
487:             html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
488:         } else {
489:             html.push('');

481:             var providerView = '{{route("providers.view",":id")}}';
482:             providerView = providerView.replace(':id', val.providerId);
483:             if(val.providerName==""){
484:                 providerView="javascript:void(0)";
485:                 providerName="{{trans('lang.unknown')}}"
486:             }
487:             html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
488:         } else {
489:             html.push('');
490:         }

482:             providerView = providerView.replace(':id', val.providerId);
483:             if(val.providerName==""){
484:                 providerView="javascript:void(0)";
485:                 providerName="{{trans('lang.unknown')}}"
486:             }
487:             html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
488:         } else {
489:             html.push('');
490:         }
491: 

484:                 providerView="javascript:void(0)";
485:                 providerName="{{trans('lang.unknown')}}"
486:             }
487:             html.push('<a href="' + providerView + '">' + val.providerName + '</a>');
488:         } else {
489:             html.push('');
490:         }
491: 
492:         var stus = '';
493: 

502:         html.push(stus);
503: 
504:         if (val.active) {
505:             html.push('<label class="switch"><input type="checkbox" checked id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
506:         } else {
507:             html.push('<label class="switch"><input type="checkbox" id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
508:         }
509:         var actionHtml = '';
510:         var chatViewRoute = "{{ route('ondemand.workers.chat', ':id') }}".replace(':id', val.id);
511:         var unreadHtml = '';  

504:         if (val.active) {
505:             html.push('<label class="switch"><input type="checkbox" checked id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
506:         } else {
507:             html.push('<label class="switch"><input type="checkbox" id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
508:         }
509:         var actionHtml = '';
510:         var chatViewRoute = "{{ route('ondemand.workers.chat', ':id') }}".replace(':id', val.id);
511:         var unreadHtml = '';  
512:         actionHtml = actionHtml  + '<span class="action-btn"><a href="' + route1 + '" data-toggle="tooltip" title="{{trans('lang.edit')}}"><i class="mdi mdi-lead-pencil"></i></a>';
513: 

507:             html.push('<label class="switch"><input type="checkbox" id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
508:         }
509:         var actionHtml = '';
510:         var chatViewRoute = "{{ route('ondemand.workers.chat', ':id') }}".replace(':id', val.id);
511:         var unreadHtml = '';  
512:         actionHtml = actionHtml  + '<span class="action-btn"><a href="' + route1 + '" data-toggle="tooltip" title="{{trans('lang.edit')}}"><i class="mdi mdi-lead-pencil"></i></a>';
513: 
514:         if(checkDeletePermission){
515:             actionHtml = actionHtml + '<a id="' + val.id + '" class="delete-btn" name="worker-delete"  href="javascript:void(0)" data-toggle="tooltip" title="{{trans('lang.delete')}}"><i class="mdi mdi-delete"></i></a>';
516:         }

512:         actionHtml = actionHtml  + '<span class="action-btn"><a href="' + route1 + '" data-toggle="tooltip" title="{{trans('lang.edit')}}"><i class="mdi mdi-lead-pencil"></i></a>';
513: 
514:         if(checkDeletePermission){
515:             actionHtml = actionHtml + '<a id="' + val.id + '" class="delete-btn" name="worker-delete"  href="javascript:void(0)" data-toggle="tooltip" title="{{trans('lang.delete')}}"><i class="mdi mdi-delete"></i></a>';
516:         }
517:         if(checkChatPermission){
518:             actionHtml = actionHtml + '<a href="' + chatViewRoute + '" class="chat-message" style="position: relative; display: inline-block;">' +
519:             '<i class="mdi mdi-wechat mdi-24px"></i>' + unreadHtml +
520:             '</a>';
521:         }

528:     }
529: 
530:     $("#is_active").click(function () {
531:         $("#workerTable .is_open").prop('checked', $(this).prop('checked'));
532:     });
533: 
534:     $(document).on("click", "input[name='isActive']", function (e) {
535:         var ischeck = $(this).is(':checked');
536:         var id = this.id;
537:         var isActive = ischeck ? true : false;

531:         $("#workerTable .is_open").prop('checked', $(this).prop('checked'));
532:     });
533: 
534:     $(document).on("click", "input[name='isActive']", function (e) {
535:         var ischeck = $(this).is(':checked');
536:         var id = this.id;
537:         var isActive = ischeck ? true : false;
538:         database.collection('providers_workers').doc(id).update({
539:             'active': isActive
540:         });

534:     $(document).on("click", "input[name='isActive']", function (e) {
535:         var ischeck = $(this).is(':checked');
536:         var id = this.id;
537:         var isActive = ischeck ? true : false;
538:         database.collection('providers_workers').doc(id).update({
539:             'active': isActive
540:         });
541:     });
542: 
543:     $("#deleteAll").click(function () {

535:         var ischeck = $(this).is(':checked');
536:         var id = this.id;
537:         var isActive = ischeck ? true : false;
538:         database.collection('providers_workers').doc(id).update({
539:             'active': isActive
540:         });
541:     });
542: 
543:     $("#deleteAll").click(function () {
544:         if ($('#workerTable .is_open:checked').length) {

536:         var id = this.id;
537:         var isActive = ischeck ? true : false;
538:         database.collection('providers_workers').doc(id).update({
539:             'active': isActive
540:         });
541:     });
542: 
543:     $("#deleteAll").click(function () {
544:         if ($('#workerTable .is_open:checked').length) {
545:             if (confirm("{{trans('lang.selected_delete_alert')}}")) {

541:     });
542: 
543:     $("#deleteAll").click(function () {
544:         if ($('#workerTable .is_open:checked').length) {
545:             if (confirm("{{trans('lang.selected_delete_alert')}}")) {
546:                 jQuery("#data-table_processing").show();
547:                 $('#workerTable .is_open:checked').each(async function () {
548:                     var dataId = $(this).attr('dataId');
549:                     await deleteDocumentWithImage('providers_workers',dataId,'profilePictureURL');
550:                     var deleteUser = deleteUserData(dataId);

544:         if ($('#workerTable .is_open:checked').length) {
545:             if (confirm("{{trans('lang.selected_delete_alert')}}")) {
546:                 jQuery("#data-table_processing").show();
547:                 $('#workerTable .is_open:checked').each(async function () {
548:                     var dataId = $(this).attr('dataId');
549:                     await deleteDocumentWithImage('providers_workers',dataId,'profilePictureURL');
550:                     var deleteUser = deleteUserData(dataId);
551:                     window.location.reload();
552:                 });
553:             }

546:                 jQuery("#data-table_processing").show();
547:                 $('#workerTable .is_open:checked').each(async function () {
548:                     var dataId = $(this).attr('dataId');
549:                     await deleteDocumentWithImage('providers_workers',dataId,'profilePictureURL');
550:                     var deleteUser = deleteUserData(dataId);
551:                     window.location.reload();
552:                 });
553:             }
554:         } else {
555:             alert("{{trans('lang.select_delete_alert')}}");

556:         }
557:     });
558: 
559:     $(document).on("click", "a[name='worker-delete']", async function (e) {
560:         var id = this.id;
561:         jQuery("#data-table_processing").show();
562:         await deleteDocumentWithImage('providers_workers',id,'profilePictureURL');
563:         var deleteUser = deleteUserData(id);
564:         window.location.reload();
565:     });

559:     $(document).on("click", "a[name='worker-delete']", async function (e) {
560:         var id = this.id;
561:         jQuery("#data-table_processing").show();
562:         await deleteDocumentWithImage('providers_workers',id,'profilePictureURL');
563:         var deleteUser = deleteUserData(id);
564:         window.location.reload();
565:     });
566: 
567:     $(document).on("click", "input[name='isActive']", function (e) {
568:         var ischeck = $(this).is(':checked');

564:         window.location.reload();
565:     });
566: 
567:     $(document).on("click", "input[name='isActive']", function (e) {
568:         var ischeck = $(this).is(':checked');
569:         var id = this.id;
570:         if (ischeck) {
571:             database.collection('providers_workers').doc(id).update({
572:                 'active': true
573:             }).then(function (result) { });

568:         var ischeck = $(this).is(':checked');
569:         var id = this.id;
570:         if (ischeck) {
571:             database.collection('providers_workers').doc(id).update({
572:                 'active': true
573:             }).then(function (result) { });
574:         } else {
575:             database.collection('providers_workers').doc(id).update({
576:                 'active': false
577:             }).then(function (result) { });

572:                 'active': true
573:             }).then(function (result) { });
574:         } else {
575:             database.collection('providers_workers').doc(id).update({
576:                 'active': false
577:             }).then(function (result) { });
578:         }
579:     });
580: 
581:     async function getProviderName(providerId) {

578:         }
579:     });
580: 
581:     async function getProviderName(providerId) {
582:         let providerName = '';
583:         if (providerId != '' && providerId != null) {
584:             let providerDoc = await database.collection('users').doc(providerId).get();
585:             if (providerDoc.exists) {
586:                 let providerData = providerDoc.data();
587:                 providerName = providerData.firstName +' '+providerData.lastName;

579:     });
580: 
581:     async function getProviderName(providerId) {
582:         let providerName = '';
583:         if (providerId != '' && providerId != null) {
584:             let providerDoc = await database.collection('users').doc(providerId).get();
585:             if (providerDoc.exists) {
586:                 let providerData = providerDoc.data();
587:                 providerName = providerData.firstName +' '+providerData.lastName;
588:             }

580: 
581:     async function getProviderName(providerId) {
582:         let providerName = '';
583:         if (providerId != '' && providerId != null) {
584:             let providerDoc = await database.collection('users').doc(providerId).get();
585:             if (providerDoc.exists) {
586:                 let providerData = providerDoc.data();
587:                 providerName = providerData.firstName +' '+providerData.lastName;
588:             }
589:         }

581:     async function getProviderName(providerId) {
582:         let providerName = '';
583:         if (providerId != '' && providerId != null) {
584:             let providerDoc = await database.collection('users').doc(providerId).get();
585:             if (providerDoc.exists) {
586:                 let providerData = providerDoc.data();
587:                 providerName = providerData.firstName +' '+providerData.lastName;
588:             }
589:         }
590:         return providerName;

582:         let providerName = '';
583:         if (providerId != '' && providerId != null) {
584:             let providerDoc = await database.collection('users').doc(providerId).get();
585:             if (providerDoc.exists) {
586:                 let providerData = providerDoc.data();
587:                 providerName = providerData.firstName +' '+providerData.lastName;
588:             }
589:         }
590:         return providerName;
591:     } 

583:         if (providerId != '' && providerId != null) {
584:             let providerDoc = await database.collection('users').doc(providerId).get();
585:             if (providerDoc.exists) {
586:                 let providerData = providerDoc.data();
587:                 providerName = providerData.firstName +' '+providerData.lastName;
588:             }
589:         }
590:         return providerName;
591:     } 
592: 

584:             let providerDoc = await database.collection('users').doc(providerId).get();
585:             if (providerDoc.exists) {
586:                 let providerData = providerDoc.data();
587:                 providerName = providerData.firstName +' '+providerData.lastName;
588:             }
589:         }
590:         return providerName;
591:     } 
592: 
593:     async function deleteUserData(userId) {

587:                 providerName = providerData.firstName +' '+providerData.lastName;
588:             }
589:         }
590:         return providerName;
591:     } 
592: 
593:     async function deleteUserData(userId) {
594: 
595:         var dataObject = {
596:             "data": {

612:             }
613:         });
614:     }
615:     async function getProviderNameForFilter(providerId){
616:         await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
617:             var providerData = snapshots.docs[0].data();
618:             providerName = providerData.firstName+' '+providerData.lastName;
619:             $('.PageTitle').html("{{trans('lang.worker_plural')}} - " + providerName);
620:         });
621: 

613:         });
614:     }
615:     async function getProviderNameForFilter(providerId){
616:         await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
617:             var providerData = snapshots.docs[0].data();
618:             providerName = providerData.firstName+' '+providerData.lastName;
619:             $('.PageTitle').html("{{trans('lang.worker_plural')}} - " + providerName);
620:         });
621: 
622:     }

614:     }
615:     async function getProviderNameForFilter(providerId){
616:         await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
617:             var providerData = snapshots.docs[0].data();
618:             providerName = providerData.firstName+' '+providerData.lastName;
619:             $('.PageTitle').html("{{trans('lang.worker_plural')}} - " + providerName);
620:         });
621: 
622:     }
623: 

615:     async function getProviderNameForFilter(providerId){
616:         await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
617:             var providerData = snapshots.docs[0].data();
618:             providerName = providerData.firstName+' '+providerData.lastName;
619:             $('.PageTitle').html("{{trans('lang.worker_plural')}} - " + providerName);
620:         });
621: 
622:     }
623: 
624: 

616:         await database.collection('users').where('id', '==', providerId).get().then(async function (snapshots) {
617:             var providerData = snapshots.docs[0].data();
618:             providerName = providerData.firstName+' '+providerData.lastName;
619:             $('.PageTitle').html("{{trans('lang.worker_plural')}} - " + providerName);
620:         });
621: 
622:     }
623: 
624: 
625: </script>

```

### FILE: C:\deploy\adminpanel\app\Http\Controllers\OnDemandServiceController.php
```text
2: 
3: namespace App\Http\Controllers;
4: 
5: class OnDemandServiceController extends Controller
6: {
7: 
8:     public function __construct()
9:     {
10:         $this->middleware('auth');
11:     }

10:         $this->middleware('auth');
11:     }
12: 
13:     public function Category()
14:     {
15:         return view("OnDemandService.categories.index");
16:     }
17: 
18:     public function CategoryCreate()
19:     {

12: 
13:     public function Category()
14:     {
15:         return view("OnDemandService.categories.index");
16:     }
17: 
18:     public function CategoryCreate()
19:     {
20:         return view("OnDemandService.categories.create");
21:     }

15:         return view("OnDemandService.categories.index");
16:     }
17: 
18:     public function CategoryCreate()
19:     {
20:         return view("OnDemandService.categories.create");
21:     }
22: 
23:     public function CategoryEdit($id)
24:     {

17: 
18:     public function CategoryCreate()
19:     {
20:         return view("OnDemandService.categories.create");
21:     }
22: 
23:     public function CategoryEdit($id)
24:     {
25:         return view('OnDemandService.categories.edit')->with('id', $id);
26:     }

20:         return view("OnDemandService.categories.create");
21:     }
22: 
23:     public function CategoryEdit($id)
24:     {
25:         return view('OnDemandService.categories.edit')->with('id', $id);
26:     }
27:     
28:     public function Coupons($id='')
29:     {

22: 
23:     public function CategoryEdit($id)
24:     {
25:         return view('OnDemandService.categories.edit')->with('id', $id);
26:     }
27:     
28:     public function Coupons($id='')
29:     {
30:         return view("OnDemandService.coupons.index")->with('id', $id);
31:     }

27:     
28:     public function Coupons($id='')
29:     {
30:         return view("OnDemandService.coupons.index")->with('id', $id);
31:     }
32: 
33:     public function CouponCreate($id='')
34:     {
35:         return view("OnDemandService.coupons.create")->with('id', $id);
36:     }

32: 
33:     public function CouponCreate($id='')
34:     {
35:         return view("OnDemandService.coupons.create")->with('id', $id);
36:     }
37: 
38:     public function CouponEdit($id)
39:     {
40:         return view('OnDemandService.coupons.edit')->with('id', $id);
41:     }

37: 
38:     public function CouponEdit($id)
39:     {
40:         return view('OnDemandService.coupons.edit')->with('id', $id);
41:     }
42: 
43:     public function Services($id='')
44:     {
45:         return view("OnDemandService.services.index")->with('id',$id);
46:     }

40:         return view('OnDemandService.coupons.edit')->with('id', $id);
41:     }
42: 
43:     public function Services($id='')
44:     {
45:         return view("OnDemandService.services.index")->with('id',$id);
46:     }
47: 
48:     public function ServicesCreate($id = '')
49:     {

42: 
43:     public function Services($id='')
44:     {
45:         return view("OnDemandService.services.index")->with('id',$id);
46:     }
47: 
48:     public function ServicesCreate($id = '')
49:     {
50:         return view("OnDemandService.services.create")->with('id', $id);
51:     }

45:         return view("OnDemandService.services.index")->with('id',$id);
46:     }
47: 
48:     public function ServicesCreate($id = '')
49:     {
50:         return view("OnDemandService.services.create")->with('id', $id);
51:     }
52: 
53:     public function ServicesEdit($id)
54:     {

47: 
48:     public function ServicesCreate($id = '')
49:     {
50:         return view("OnDemandService.services.create")->with('id', $id);
51:     }
52: 
53:     public function ServicesEdit($id)
54:     {
55:         return view('OnDemandService.services.edit')->with('id', $id);
56:     }

50:         return view("OnDemandService.services.create")->with('id', $id);
51:     }
52: 
53:     public function ServicesEdit($id)
54:     {
55:         return view('OnDemandService.services.edit')->with('id', $id);
56:     }
57: 
58:     public function Bookings($id='')
59:     {

52: 
53:     public function ServicesEdit($id)
54:     {
55:         return view('OnDemandService.services.edit')->with('id', $id);
56:     }
57: 
58:     public function Bookings($id='')
59:     {
60:         return view("OnDemandService.bookings.index")->with('id', $id);
61:     }

57: 
58:     public function Bookings($id='')
59:     {
60:         return view("OnDemandService.bookings.index")->with('id', $id);
61:     }
62: 
63:     public function BookingsCreate($id = '')
64:     {
65:         return view("OnDemandService.bookings.create")->with('id', $id);
66:     }

62: 
63:     public function BookingsCreate($id = '')
64:     {
65:         return view("OnDemandService.bookings.create")->with('id', $id);
66:     }
67: 
68:     public function BookingsEdit($id = '', $pid = '', $aid = '', $rid = '')
69:     {
70:         return view('OnDemandService.bookings.edit')->with('id', $id)->with('pid', $pid)->with('aid', $aid)->with('rid', $rid);
71:     }

67: 
68:     public function BookingsEdit($id = '', $pid = '', $aid = '', $rid = '')
69:     {
70:         return view('OnDemandService.bookings.edit')->with('id', $id)->with('pid', $pid)->with('aid', $aid)->with('rid', $rid);
71:     }
72: 
73:     public function BookingsPrint($id)
74:     {
75:         return view('OnDemandService.bookings.print')->with('id', $id);
76:     }

72: 
73:     public function BookingsPrint($id)
74:     {
75:         return view('OnDemandService.bookings.print')->with('id', $id);
76:     }
77: 
78:     public function Workers($id='')
79:     {
80:         return view("OnDemandService.workers.index")->with('id', $id);
81:     }

75:         return view('OnDemandService.bookings.print')->with('id', $id);
76:     }
77: 
78:     public function Workers($id='')
79:     {
80:         return view("OnDemandService.workers.index")->with('id', $id);
81:     }
82: 
83:     public function WorkersCreate($id = '')
84:     {

77: 
78:     public function Workers($id='')
79:     {
80:         return view("OnDemandService.workers.index")->with('id', $id);
81:     }
82: 
83:     public function WorkersCreate($id = '')
84:     {
85:         return view("OnDemandService.workers.create")->with('id', $id);
86:     }

80:         return view("OnDemandService.workers.index")->with('id', $id);
81:     }
82: 
83:     public function WorkersCreate($id = '')
84:     {
85:         return view("OnDemandService.workers.create")->with('id', $id);
86:     }
87: 
88:     public function WorkersEdit($id)
89:     {

82: 
83:     public function WorkersCreate($id = '')
84:     {
85:         return view("OnDemandService.workers.create")->with('id', $id);
86:     }
87: 
88:     public function WorkersEdit($id)
89:     {
90:         return view('OnDemandService.workers.edit')->with('id', $id);
91:     }

85:         return view("OnDemandService.workers.create")->with('id', $id);
86:     }
87: 
88:     public function WorkersEdit($id)
89:     {
90:         return view('OnDemandService.workers.edit')->with('id', $id);
91:     }
92: 
93:     public function workerChat($id)
94:     {

87: 
88:     public function WorkersEdit($id)
89:     {
90:         return view('OnDemandService.workers.edit')->with('id', $id);
91:     }
92: 
93:     public function workerChat($id)
94:     {
95:         return view('OnDemandService.workers.chat', compact('id'));
96:     }

90:         return view('OnDemandService.workers.edit')->with('id', $id);
91:     }
92: 
93:     public function workerChat($id)
94:     {
95:         return view('OnDemandService.workers.chat', compact('id'));
96:     }
97:    
98: }
99: 

92: 
93:     public function workerChat($id)
94:     {
95:         return view('OnDemandService.workers.chat', compact('id'));
96:     }
97:    
98: }
99: 
100: 

```

## Collection Names Found
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