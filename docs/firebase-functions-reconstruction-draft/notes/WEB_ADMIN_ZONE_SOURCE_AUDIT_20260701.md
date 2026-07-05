# WEB ADMIN ZONE SOURCE AUDIT

Generated: 07/01/2026 02:28:23
Mode: READ ONLY. No patch. No Firebase write.

Goal: inspect how Web Admin creates/edits zone area fields.

## Existing Zone View Files
```text
FOUND: C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php
FOUND: C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php
FOUND: C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php
MISSING: C:\deploy\adminpanel\Admin Panel\resources\views\zones\create.blade.php
MISSING: C:\deploy\adminpanel\Admin Panel\resources\views\zones\edit.blade.php
MISSING: C:\deploy\adminpanel\Admin Panel\resources\views\zones\index.blade.php
```


## FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php
```text
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:17:            <div class="card">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:18:                <div class="card-body">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:19:                    <div class="error_top" style="display:none"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:20:                    <div class="row vendor_payout_create">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:21:                        <div class="vendor_payout_create-inner">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:22:                            <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:23:                                <legend>{{ trans('lang.zone_create') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:24:                                <div class="form-group row width-100">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:25:                                    <label class="col-3 control-label">{{ trans('lang.zone_name') }}<span class="required-field"></span></label>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:26:                                    <div class="col-7">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:27:                                        <input type="text" class="form-control" id="name">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:28:                                        <div class="form-text text-muted">{{ trans('lang.zone_name_help') }}</div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:29:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:30:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:31:                                <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:32:                                    <div class="form-check">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:33:                                        <input type="checkbox" class="publish" id="publish">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:34:                                        <label class="col-3 control-label" for="publish">{{ trans('lang.status') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:35:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:36:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:37:                                <div class="form-hidden">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:38:                                    <input type="hidden" id="coordinates" name="coordinates" value="">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:39:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:40:                            </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:41:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:42:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:43:                    <div class="row mt-5">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:44:                        <div class="col-sm-5">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:45:                            <div class="row">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:46:                                <div class="col-sm-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:47:                                    <h4>{{ trans('lang.instructions') }}</h4>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:48:                                    <p>{{ trans('lang.instructions_help') }}</p>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:49:                                    <p><i class="fa fa-hand-pointer-o map_icons"></i>{{ trans('lang.instructions_hand_tool') }}</p>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:50:                                    <p><i class="fa fa-plus-circle map_icons"></i>{{ trans('lang.instructions_shape_tool') }}</p>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:51:                                    <p><i class="mdi mdi-delete map_icons"></i>{{ trans('lang.instructions_trash_tool') }}</p>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:52:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:53:                                <div class="col-sm-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:54:                                    <img src="{{ asset('images/zone_info.gif') }}" alt="GIF" width="100%">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:55:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:56:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:57:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:58:                        <div class="col-sm-5">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:59:                            <input type="text" placeholder="{{ trans('lang.search_location') }}" id="search-box" class="form-control controls" />
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:60:                            <div id="autocomplete-list"></div>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:61:                            <div id="map"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:62:                        </div>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:63:                        <div class="col-sm-2 mapType">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:64:                            <ul style="list-style: none;padding:0">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:65:                                <li>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:66:                                    <a id="select-button" href="javascript:void(0)" class="btn-floating zone-add-btn btn-large waves-effect waves-light tooltipped" title="{{trans('lang.use_this_tool_to_drag_the_map_and_select_your_desired_location')}}">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:67:                                        <i class="fa fa-hand-pointer-o map_icons"></i>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:68:                                    </a>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:69:                                </li>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:70:                                <li>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:71:                                    <a id="add-button" href="javascript:void(0)" class="btn-floating zone-add-btn btn-large waves-effect waves-light tooltipped" title="{{trans('lang.use_this_tool_to_highlight_areas_and_connect_the_dots')}}">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:72:                                        <i class="fa fa-plus-circle map_icons"></i>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:73:                                    </a>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:74:                                </li>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:75:                                <li>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:76:                                    <a id="delete-all-button" href="javascript:void(0)" class="btn-floating zone-delete-all-btn btn-large waves-effect waves-light tooltipped" title="{{trans('lang.use_this_tool_to_delete_all_selected_areas')}}">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:77:                                        <i class="mdi mdi-delete map_icons"></i>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:78:                                    </a>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:79:                                </li>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:80:                            </ul>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:81:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:82:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:83:                    <div class="form-group col-12 text-center btm-btn">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:84:                        <button type="button" class="btn btn-primary save-setting-btn">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:85:                            <i class="fa fa-save"></i> {{ trans('lang.save') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:86:                        </button>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:87:                        <a href="{!! route('zone') !!}" class="btn btn-default">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:88:                            <i class="fa fa-undo"></i>{{ trans('lang.cancel') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:89:                        </a>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:90:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:91:                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:92:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:93:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:94:    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:95:@endsection
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:96:<style>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:97:    #map {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:98:        height: 500px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:99:        width: 100%;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:100:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:101:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:102:    #panel {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:103:        width: 200px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:104:        font-family: Arial, sans-serif;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:105:        font-size: 13px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:106:        float: right;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:107:        margin: 10px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:108:        margin-top: 100px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:109:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:110:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:111:    #delete-button,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:112:    #add-button,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:113:    #delete-all-button,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:114:    #save-button {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:115:        margin-top: 5px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:116:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:117:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:118:    #search-box {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:119:        background-color: #f7f7f7;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:120:        font-size: 15px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:121:        font-weight: 300;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:122:        margin-top: 10px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:123:        margin-bottom: 10px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:124:        padding: 0 11px 0 13px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:125:        text-overflow: ellipsis;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:126:        height: 25px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:127:        border: 1px solid #c7c7c7;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:128:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:129:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:130:    .map_icons {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:131:        font-size: 24px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:132:        color: white;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:133:        padding: 10px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:134:        margin: 5px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:135:        background-color: {{ isset($_COOKIE['admin_panel_color']) ? $_COOKIE['admin_panel_color'] : '#072750' }};
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:136:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:137:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:138:    #autocomplete-list {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:139:        border: 1px solid #d4d4d4;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:140:        z-index: 9999;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:141:        position: absolute;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:142:        background-color: white;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:143:        cursor: pointer;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:144:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:145:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:146:    .autocomplete-item {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:147:        padding: 10px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:148:        border-bottom: 1px solid #d4d4d4;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:149:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:150:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:151:    .autocomplete-item:hover {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:152:        background-color: #e9e9e9;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:153:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:154:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:155:    .leaflet-control-custom {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:156:        background-color: #f44336;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:157:        border: none;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:158:        color: white;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:174:    .leaflet-control-custom i {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:175:        font-size: 18px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:176:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:177:</style>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:178:@section('scripts')
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:179:    <script>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:180:        var database = firebase.firestore();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:181:        var id = database.collection("tmp").doc().id;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:182:        var ref = database.collection('zone');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:183:        $(document).ready(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:184:            setTimeout(function(){
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:185:                initMap();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:186:            },2500);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:187:            $(".save-setting-btn").click(function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:188:                var name = $("#name").val();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:189:                var publish = $("#publish").is(":checked");
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:190:                var coordinates_object = $('#coordinates').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:191:                $(".error_top").empty();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:192:                if (name == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:193:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:194:                    $(".error_top").html("");
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:195:                    $(".error_top").append("<p>{{ trans('lang.zone_name_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:196:                    window.scrollTo(0, 0);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:197:                }else if (coordinates_object == "") {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:198:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:199:                    $(".error_top").html("");
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:200:                    $(".error_top").append("<p>{{ trans('lang.zone_coordinates_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:201:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:202:                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:203:                    if (mapType == "ONLINE") {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:204:                        var coordinates_parse = coordinates_object;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:205:                        var coordinates = $.parseJSON(coordinates_parse);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:206:                        var latitude = coordinates[0].lat;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:207:                        var longitude = coordinates[0].lng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:208:                        var area = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:209:                        for (let i = 0; i < coordinates.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:210:                            var item = coordinates[i];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:211:                            area.push(new firebase.firestore.GeoPoint(item.lat, item.lng));
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:212:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:213:                        jQuery("#overlay").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:214:                        database.collection('zone').doc(id).set({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:215:                            'id': id,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:216:                            'name': name,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:217:                            'latitude': latitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:218:                            'longitude': longitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:219:                            'area': area,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:220:                            'publish': publish,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:221:                        }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:222:                            jQuery("#overlay").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:223:                            window.location.href = '{{ route('zone') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:224:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:225:                    } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:226:                        var coordinates, latitude, longitude;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:227:                        var coordinates_parse = $.parseJSON(coordinates_object);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:228:                        // Check if coordinates_parse is an array and has at least one item
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:229:                        if (Array.isArray(coordinates_parse) && coordinates_parse.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:230:                            // Check if the first item in coordinates_parse is an array (polygon)
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:231:                            if (Array.isArray(coordinates_parse[0])) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:232:                                // Handle case where the first element is an array of points (polygon)
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:233:                                if (coordinates_parse[0].length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:234:                                    var firstPoint = coordinates_parse[0][0]; // First point in the first polygon 
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:235:                                    // Ensure the first point has valid lat and lng properties
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:236:                                    if (firstPoint && typeof firstPoint.lat === 'number' && typeof firstPoint.lng === 'number') {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:237:                                        latitude = firstPoint.lat; // First point's latitude
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:238:                                        longitude = firstPoint.lng; // First point's longitude
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:239:                                    } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:240:                                        console.error("Invalid first point in coordinates_parse:", firstPoint);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:241:                                        return; // Exit if the first point is invalid
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:242:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:243:                                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:244:                                    console.error("First polygon (coordinates_parse[0]) is empty.");
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:245:                                    return; // Exit if the first polygon is empty
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:246:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:247:                            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:248:                                // Handle case where the first element is a single point object (no array of points)
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:249:                                var firstPoint = coordinates_parse[0]; // This is an object with lat/lon (single point)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:250:                                // Ensure this object has valid lat and lon properties
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:251:                                if (firstPoint && typeof firstPoint.lat === 'number' && typeof firstPoint.lon === 'number') {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:252:                                    latitude = firstPoint.lat; // Set latitude from the first point
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:253:                                    longitude = firstPoint.lon; // Set longitude from the first point
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:254:                                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:255:                                    console.error("Invalid first point object in coordinates_parse:", firstPoint);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:256:                                    return; // Exit if the point is invalid
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:257:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:258:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:259:                        } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:260:                            console.error("coordinates_parse is not a valid array or is empty:", coordinates_parse);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:261:                            return; // Exit if coordinates_parse is empty or invalid
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:262:                        }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:263:                        var area = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:264:                        for (let i = 0; i < coordinates_parse.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:265:                            var polygon = coordinates_parse[i]; // Each polygon is an array of points or a single point object
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:266:                            // Check if the polygon is an array (an array of points)
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:267:                            if (Array.isArray(polygon)) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:268:                                // Iterate over each point in the polygon
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:269:                                polygon.forEach(function(point, index) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:270:                                    // Check if the point is valid (has lat and lng properties)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:271:                                    if (point && typeof point.lat === 'number' && typeof point.lng === 'number') {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:272:                                        // Correctly create GeoPoint for each valid point and add to the area array
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:273:                                        area.push(new firebase.firestore.GeoPoint(point.lat, point.lng));
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:274:                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:275:                                        // Log the error if a point is invalid or undefined
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:276:                                        console.error("Invalid lat/lng at polygon index " + i + ", point index " + index, point);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:277:                                        $(".error_top").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:278:                                        $(".error_top").html("<p>{{ trans('lang.invalid_coordinates_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:279:                                        window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:280:                                        return; // Stop processing invalid point
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:281:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:282:                                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:283:                            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:284:                                // If the polygon is not an array, handle it as a single point object
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:285:                                if (polygon && typeof polygon.lat === 'number' && typeof polygon.lon === 'number') {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:286:                                    // Correctly create GeoPoint for a single valid point and add to the area array
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:287:                                    area.push(new firebase.firestore.GeoPoint(polygon.lat, polygon.lon));
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:288:                                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:289:                                    console.error("Invalid single point object at polygon index " + i, polygon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:290:                                    $(".error_top").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:291:                                    $(".error_top").html("<p>{{ trans('lang.invalid_coordinates_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:292:                                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:293:                                    return; // Stop processing invalid point
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:294:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:295:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:296:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:297:                        jQuery("#overlay").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:298:                        if (latitude && longitude && area.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:299:                            database.collection('zone').doc(id).set({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:300:                                'id': id,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:301:                                'name': name,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:302:                                'latitude': latitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:303:                                'longitude': longitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:304:                                'area': area,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:305:                                'publish': publish,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:306:                            }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:307:                                jQuery("#overlay").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:308:                                window.location.href = '{{ route('zone') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:309:                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:310:                        } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:311:                            console.error("Invalid latitude, longitude, or area:", latitude, longitude, area);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:312:                            $(".error_top").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:313:                            $(".error_top").html("<p>{{ trans('lang.invalid_coordinates_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:314:                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:315:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:316:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:317:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:318:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:319:        });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:320:        var map;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:321:        let polygon;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:322:        let polygonPath;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:323:        var drawingManager;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:324:        var selectedShape;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:325:        var selectedKernel;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:326:        var gmarkers = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:327:        var coordinates = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:328:        var allShapes = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:329:        var sendable_coordinates = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:330:        var shapeColor = "#007cff";
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:331:        var kernelColor = "#000";
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:332:        var default_lat = getCookie('default_latitude');
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:333:        var default_lng = getCookie('default_longitude');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:334:        let drawnItems;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:335:        let deleteButton, dragMap;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:336:        let selectedPolygon = null;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:337:        var mapType = 'ONLINE';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:338:        
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:339:        database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:340:            var data = snapshots.data();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:341:            if (data && data.selectedMapType && data.selectedMapType == "osm") {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:342:                mapType = "OFFLINE"
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:343:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:344:            var onclick = '',
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:345:                polygon = '',
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:346:                deletearea = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:347:            if (mapType == "OFFLINE") {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:348:                onclick = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:349:                    console.log("Offline mode, no drawing available.");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:350:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:351:                polygon = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:352:                    enablePolygonDrawing(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:353:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:354:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:355:                onclick = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:356:                    drawingManager.setDrawingMode(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:357:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:358:                polygon = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:359:                    drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:360:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:361:                deletearea = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:362:                    clearMap();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:363:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:364:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:365:            document.getElementById("select-button").onclick = onclick;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:366:            document.getElementById("add-button").onclick = polygon;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:367:            document.getElementById("delete-all-button").onclick = deletearea;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:368:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:369:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:370:        function setMapOnAll(map) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:371:            for (var i = 0; i < gmarkers.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:372:                gmarkers[i].setMap(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:373:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:374:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:375:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:376:        function clearMarkers() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:377:            setMapOnAll(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:378:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:379:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:380:        function deleteMarkers() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:381:            clearMarkers();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:382:            gmarkers = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:383:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:384:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:385:        function deleteSelectedShape() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:386:            if (selectedShape) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:387:                selectedShape.setMap(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:388:                var index = allShapes.indexOf(selectedShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:389:                if (index > -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:390:                    allShapes.splice(index, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:391:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:392:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:393:            if (selectedKernel) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:394:                selectedKernel.setMap(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:395:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:396:            let lat_lng = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:397:            allShapes.forEach(function(data, index) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:398:                lat_lng[index] = getCoordinates(data);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:399:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:400:            if (lat_lng.length == 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:401:                document.getElementById('coordinates').value = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:402:            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:403:                document.getElementById('coordinates').value = JSON.stringify(lat_lng);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:404:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:405:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:406:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:407:        function clearMap() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:408:            if (allShapes.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:409:                for (var i = 0; i < allShapes.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:410:                    allShapes[i].setMap(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:411:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:412:                allShapes = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:413:                deleteMarkers();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:414:                document.getElementById('coordinates').value = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:415:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:416:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:417:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:418:        function clearSelection() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:419:            if (selectedShape) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:420:                if (selectedShape.type !== 'marker') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:421:                    selectedShape.setEditable(false);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:422:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:423:                selectedShape = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:424:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:425:            if (selectedKernel) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:426:                if (selectedKernel.type !== 'marker') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:427:                    selectedKernel.setEditable(false);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:428:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:429:                selectedKernel = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:430:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:431:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:432:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:433:        function setSelection(shape, check) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:434:            clearSelection();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:435:            shape.setEditable(true);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:436:            shape.setDraggable(true);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:437:            if (check) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:438:                selectedKernel = shape;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:439:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:440:                selectedShape = shape;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:441:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:442:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:443:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:444:        function getCoordinates(polygon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:445:            var path = polygon.getPath();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:446:            coordinates = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:447:            for (var i = 0; i < path.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:448:                coordinates.push({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:449:                    lat: path.getAt(i).lat(),
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:450:                    lng: path.getAt(i).lng()
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:451:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:452:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:453:            document.getElementById('coordinates').value = JSON.stringify(coordinates);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:454:            return coordinates;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:455:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:456:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:457:        function createMarker(coord, nr, map) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:458:            var mesaj = "<h6>Vârf " + nr + "</h6><br>" + "Lat: " + coord.lat + "<br>" + "Lng: " + coord.lng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:459:            var marker = new google.maps.Marker({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:460:                position: coord,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:461:                map: map,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:462:            });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:463:            google.maps.event.addListener(marker, 'click', function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:464:                infowindow.setContent(mesaj);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:465:                infowindow.open(map, marker);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:466:            });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:467:            google.maps.event.addListener(marker, 'dblclick', function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:468:                marker.setMap(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:469:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:470:            return marker;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:471:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:472:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:473:        function enablePolygonEditingAndDragging(layer) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:474:            // Ensure the layer is editable and draggable
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:475:            if (layer && (layer instanceof L.Polygon || layer instanceof L.MultiPolygon)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:476:                if (!layer.editing) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:477:                    layer.enableEdit(); // Enable editing on the polygon
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:478:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:479:                if (!layer.dragging) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:480:                    if (typeof L.Handler.PolygonDrag !== 'undefined') {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:481:                        layer.dragging = new L.Handler.PolygonDrag(layer);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:482:                        layer.dragging.enable(); // Enable dragging handler
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:483:                    } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:484:                        console.error("L.Handler.PolygonDrag is not available.");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:485:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:486:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:487:            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:488:                console.error("The layer is not a valid L.Polygon or L.MultiPolygon:", layer);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:489:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:490:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:491:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:492:        function makePolygonDraggable(layer) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:493:            var latLngs = layer.getLatLngs()[0]; // Get the LatLngs of the polygon
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:494:            const coordinates = layer.getLatLngs(); // Get the polygon's coordinates
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:495:            document.getElementById('coordinates').value = JSON.stringify(coordinates);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:496:            // To track mouse position and delta
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:497:            var isDragging = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:498:            var startLatLng = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:499:            var startLatLngs = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:500:            // Mouse down event to start dragging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:501:            layer.on('mousedown', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:502:                isDragging = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:503:                startLatLng = e.latlng; // Store the initial mouse position in LatLng
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:504:                startLatLngs = latLngs.map(function(latlng) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:505:                    return latlng; // Clone the LatLngs of the polygon for reference
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:506:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:507:                map.on('mousemove', onMouseMove); // Track mouse movement
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:508:                map.on('mouseup', onMouseUp); // End dragging when mouse is released
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:509:            });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:510:            // Mouse move event to drag the polygon
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:511:            function onMouseMove(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:512:                const coordinates = layer.getLatLngs(); // Get the polygon's coordinates
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:513:                layer.setLatLngs(coordinates);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:514:                document.getElementById('coordinates').value = JSON.stringify(coordinates);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:515:                if (isDragging) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:516:                    var dx = e.latlng.lng - startLatLng.lng; // Calculate change in longitude
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:517:                    var dy = e.latlng.lat - startLatLng.lat; // Calculate change in latitude
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:518:                    // Create new LatLngs by applying the change to each point
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:519:                    var newLatLngs = startLatLngs.map(function(latlng) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:520:                        return L.latLng(latlng.lat + dy, latlng.lng + dx); // Shift each point by dx, dy
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:521:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:522:                    // Update the polygon's LatLngs
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:523:                    layer.setLatLngs([newLatLngs]);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:524:                    document.getElementById('coordinates').value = JSON.stringify(newLatLngs);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:525:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:526:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:527:            // Mouse up event to stop dragging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:528:            function onMouseUp() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:529:                const coordinates = layer.getLatLngs(); // Get the polygon's coordinates
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:530:                layer.setLatLngs(coordinates);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:531:                document.getElementById('coordinates').value = JSON.stringify(coordinates);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:532:                isDragging = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:533:                map.off('mousemove', onMouseMove); // Stop mousemove tracking
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:534:                map.off('mouseup', onMouseUp); // Stop mouseup tracking
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:535:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:536:        }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:537:        // Function to update coordinates (when polygon is resized or dragged)
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:538:        function updateCoordinates(layer) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:539:            let latLngs = layer.getLatLngs();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:540:            let flatLatLngs = L.LineUtil.isFlat(latLngs) ? latLngs : latLngs.flat(Infinity);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:541:            let convertedArray = flatLatLngs.map(function(latLng) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:542:                if (latLng && typeof latLng.lat === 'number' && typeof latLng.lng === 'number') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:543:                    return {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:544:                        lat: latLng.lat,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:545:                        lon: latLng.lng
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:546:                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:547:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:548:            }).filter(item => item !== undefined); // Filter out undefined items
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:549:            // Update coordinates in the input field
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:550:            document.getElementById('coordinates').value = JSON.stringify(convertedArray);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:551:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:552:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:553:        function createDragMapButton() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:554:            if (!dragMap) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:555:                var dragMap = L.control({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:556:                    position: 'topright'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:557:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:558:                dragMap.onAdd = function(map) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:559:                    var button = L.DomUtil.create('button', 'leaflet-control-custom');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:560:                    button.innerHTML = '<i class="fa fa-hand-pointer-o"></i>'; // Using Font Awesome icon
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:561:                    // Disable map dragging when clicking the button
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:562:                    L.DomEvent.disableClickPropagation(button);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:563:                    // Button click functionality
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:564:                    button.addEventListener('click', function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:565:                        DragMap();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:566:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:567:                    return button; // Return the button to the control
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:568:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:569:                // Add the custom button to the map
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:570:                dragMap.addTo(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:571:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:572:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:573:        // Create the delete button once and hide it initially
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:574:        function createDeleteButton() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:575:            if (!deleteButton) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:576:                var deleteButton = L.control({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:577:                    position: 'topright'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:578:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:579:                deleteButton.onAdd = function(map) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:580:                    var button = L.DomUtil.create('button', 'leaflet-control-custom');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:581:                    button.innerHTML = '<i class="mdi mdi-delete"></i>'; // Using Font Awesome icon
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:582:                    // Disable map dragging when clicking the button
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:583:                    L.DomEvent.disableClickPropagation(button);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:584:                    // Button click functionality
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:585:                    button.addEventListener('click', function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:586:                        deleteSelectedPolygon();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:587:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:588:                    return button; // Return the button to the control
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:589:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:590:                // Add the custom button to the map
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:591:                deleteButton.addTo(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:592:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:593:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:594:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:595:        function updateCoordinatesDisplay(lat, lon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:596:            var url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:597:            // Fetch data from Nominatim API
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:598:            fetch(url)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:599:                .then(response => response.json())
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:600:                .then(data => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:601:                    // Display location details
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:602:                    if (data && data.address) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:603:                        var address = data.display_name;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:604:                        document.getElementById('search-box').value = address;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:605:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:606:                })
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:607:                .catch(error => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:608:                    document.getElementById('search-box').innerHTML = "Error fetching data.";
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:609:                    console.error('Error:', error);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:610:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:611:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:612:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:613:        function enablePolygonDrawing(map) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:614:            map.dragging.disable();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:615:            if (!drawnItems) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:616:                drawnItems = new L.FeatureGroup();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:617:                map.addLayer(drawnItems);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:618:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:619:            // Create the delete button before enabling drawing
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:620:            createDeleteButton();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:621:            createDragMapButton();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:622:            map.on('draw:created', function(event) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:623:                var layer = event.layer; // The drawn polygon or shape
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:624:                if (layer instanceof L.Polygon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:625:                    // Add the drawn layer to the map
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:626:                    drawnItems.addLayer(layer);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:627:                    makePolygonDraggable(layer);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:628:                    // Bind a popup and open it
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:629:                    layer.bindPopup("Drag me!").openPopup();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:630:                    // Update selected polygon variable (optional, depending on use case)
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:631:                    selectedPolygon = layer;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:632:                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:633:                    console.log("This is not a polygon.");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:634:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:635:            });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:636:            // Optional: Restrict dragging to only one polygon at a time (click event)
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:637:            map.on('click', function(event) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:638:                map.dragging.disable();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:639:                var latlng = event.latlng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:640:                if (selectedPolygon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:641:                    // If there's already a selected polygon, deselect it
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:642:                    selectedPolygon.setStyle({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:643:                        color: '#3388ff'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:644:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:645:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:646:                drawnItems.eachLayer(function(layer) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:647:                    makePolygonDraggable(layer);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:648:                    if (layer instanceof L.Polygon && layer.getBounds().contains(latlng)) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:649:                        selectedPolygon = layer;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:650:                        layer.setStyle({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:651:                            color: 'red'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:652:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:653:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:654:                    // Optionally, log the coordinates of the drawn polygon to the console
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:655:                    const coordinates = layer.getLatLngs(); // Get the polygon's coordinates
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:656:                    document.getElementById('coordinates').value = JSON.stringify(coordinates);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:657:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:658:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:659:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:660:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:661:        function DragMap() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:662:            map.dragging.enable();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:663:        }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:664:        // Allow deletion of selected polygon
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:665:        function deleteSelectedPolygon() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:666:            map.dragging.disable();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:667:            if (!drawnItems) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:668:                return;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:669:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:670:            if (selectedPolygon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:671:                drawnItems.removeLayer(selectedPolygon);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:672:                selectedPolygon = null;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:673:                if (selectedPolygon == null) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:674:                    document.getElementById('coordinates').value = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:675:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:676:            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:677:                alert("{{trans('lang.please_select_polygon_to_delete')}}");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:678:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:679:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:680:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:681:        function searchBox() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:682:            if (mapType == "OFFLINE") {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:683:                var input = document.getElementById('search-box');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:684:                let marker, newLat, newLon;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:685:                var autocompleteList = document.getElementById('autocomplete-list');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:686:                input.addEventListener('keyup', function(event) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:687:                    if (event.key === 'Enter') return;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:688:                    var query = this.value.trim();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:689:                    if (query && query.length >= 3) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:690:                        fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1`)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:691:                            .then(response => response.json())
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:692:                            .then(data => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:693:                                autocompleteList.innerHTML = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:694:                                data.forEach(place => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:695:                                    var item = document.createElement('div');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:696:                                    item.classList.add('autocomplete-item');
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:697:                                    item.innerText = place.display_name;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:698:                                    item.onclick = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:699:                                        input.value = place.display_name;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:700:                                        input.setAttribute('data-latitude', place.lat);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:701:                                        input.setAttribute('data-longitude', place.lon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:702:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:703:                                        if (marker) map.removeLayer(marker);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:704:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:705:                                        marker = L.marker([place.lat, place.lon], {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:706:                                            draggable: true
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:707:                                        }).addTo(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:708:                                        marker.dragging.enable();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:709:                                        map.setView([place.lat, place.lon], 13);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:710:                                        
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:711:                                        newLat = place.lat;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:712:                                        newLon = place.lon;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:713:                                        // Initially update coordinates display
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:714:                                        updateCoordinatesDisplay(newLat, newLon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:715:                                        marker.on('dragend', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:716:                                            newLat = e.target.getLatLng().lat;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:717:                                            newLon = e.target.getLatLng().lng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:718:                                            updateCoordinatesDisplay(newLat, newLon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:719:                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:720:                                        marker.on('drag', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:721:                                            newLat = e.target.getLatLng().lat;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:722:                                            newLon = e.target.getLatLng().lng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:723:                                            updateCoordinatesDisplay(newLat, newLon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:724:                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:725:                                        marker.on('moveend', function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:726:                                            updateCoordinatesDisplay(newLat, newLon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:727:                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:728:                                        if (place.address) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:729:                                            var city = place.address.city || place.address.town || place.address.village || 'N/A';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:730:                                            var state = place.address.state || 'N/A';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:731:                                            var country = place.address.country || 'N/A';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:732:                                            input.setAttribute('data-city', city);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:733:                                            input.setAttribute('data-state', state);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:734:                                            input.setAttribute('data-country', country);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:735:                                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:736:                                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:737:                                    autocompleteList.appendChild(item);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:738:                                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:739:                                if (data && data.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:740:                                    const lat = parseFloat(data[0].lat);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:741:                                    const lon = parseFloat(data[0].lon);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:742:                                    // Set the map view to the new coordinates
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:743:                                    map.setView([lat, lon], 13);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:744:                                    // If a marker already exists, remove it
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:745:                                    if (marker) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:746:                                        map.removeLayer(marker);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:747:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:748:                                    // Add a new marker at the new location
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:749:                                    marker = L.marker([lat, lon], {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:750:                                        draggable: true
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:751:                                    }).addTo(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:752:                                    marker.dragging.enable();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:753:                                    marker.on('dragend', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:754:                                        newLat = e.target.getLatLng().lat;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:755:                                        newLon = e.target.getLatLng().lng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:756:                                        updateCoordinatesDisplay(newLat, newLon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:757:                                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:758:                                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:759:                                    alert("{{trans('lang.location_not_found_please_try_again')}}");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:760:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:761:                            })
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:762:                            .catch(error => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:763:                                console.error('Error:', error);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:764:                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:765:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:766:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:767:                document.addEventListener('click', function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:768:                    let latitude = input.dataset.latitude;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:769:                    let longitude = input.dataset.longitude;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:770:                    if (e.target !== input) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:771:                        autocompleteList.innerHTML = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:772:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:773:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:774:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:775:            else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:776:                var input = document.getElementById('search-box');
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:777:                var searchBox = new google.maps.places.SearchBox(input);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:778:                map.addListener('bounds_changed', function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:779:                    searchBox.setBounds(map.getBounds());
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:780:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:781:                searchBox.addListener('places_changed', function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:782:                    var places = searchBox.getPlaces();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:783:                    if (places.length == 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:784:                        return;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:785:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:786:                    var bounds = new google.maps.LatLngBounds();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:787:                    places.forEach(function(place) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:788:                        if (!place.geometry) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:789:                            return;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:790:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:791:                        var icon = {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:792:                            url: place.icon,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:793:                            size: new google.maps.Size(71, 71),
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:794:                            origin: new google.maps.Point(0, 0),
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:795:                            anchor: new google.maps.Point(17, 34),
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:796:                            scaledSize: new google.maps.Size(25, 25)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:797:                        };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:798:                        if (place.geometry.viewport) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:799:                            bounds.union(place.geometry.viewport);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:800:                        } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:801:                            bounds.extend(place.geometry.location);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:802:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:803:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:804:                    map.fitBounds(bounds);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:805:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:806:                var autocomplete = new google.maps.places.Autocomplete(input);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:807:                autocomplete.addListener('place_changed', function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:808:                    var place = autocomplete.getPlace();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:809:                    if (place && place.address_components) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:810:                        var placeaddress = autocomplete.getPlace().address_components;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:811:                        var city = place.address_components.filter(f => JSON.stringify(f.types) === JSON.stringify(['locality', 'political']))[0].long_name;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:812:                        var state = place.address_components.filter(f => JSON.stringify(f.types) === JSON.stringify(['administrative_area_level_1', 'political']))[0].long_name;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:813:                        var country = place.address_components.filter(f => JSON.stringify(f.types) === JSON.stringify(['country', 'political']))[0].long_name;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:814:                        $("#search-box").val(place.formatted_address).attr('data-latitude', place.geometry.location.lat()).attr('data-longitude', place.geometry.location.lng()).attr('data-city', city).attr('data-state', state).attr('data-country', country)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:815:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:816:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:817:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:818:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:819:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:820:        function initMap() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:821:            var default_lat = getCookie('default_latitude');
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:822:            var default_lng = getCookie('default_longitude');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:823:            var legend = document.getElementById('legend');
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:824:            if (mapType == "ONLINE") {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:825:                $(".mapType").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:826:                var infowindow = new google.maps.InfoWindow({
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:827:                    size: new google.maps.Size(150, 50)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:828:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:829:                map = new google.maps.Map(document.getElementById('map'), {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:830:                    zoom: 8,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:831:                    center: new google.maps.LatLng(default_lat, default_lng),
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:832:                    mapTypeControl: false,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:833:                    mapTypeControlOptions: {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:834:                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:835:                        position: google.maps.ControlPosition.LEFT_CENTER
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:836:                    },
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:837:                    zoomControl: true,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:838:                    zoomControlOptions: {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:839:                        position: google.maps.ControlPosition.RIGHT_CENTER
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:840:                    },
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:841:                    scaleControl: false,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:842:                    scaleControlOptions: {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:843:                        position: google.maps.ControlPosition.RIGHT_CENTER
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:844:                    },
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:845:                    streetViewControl: false,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:846:                    fullscreenControl: false
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:847:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:848:                searchBox();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:849:                var shapeOptions = {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:850:                    strokeWeight: 1,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:851:                    fillOpacity: 0.4,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:852:                    editable: true,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:853:                    draggable: true
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:854:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:855:                drawingManager = new google.maps.drawing.DrawingManager({
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:856:                    drawingMode: null,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:857:                    drawingControl: false,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:858:                    drawingControlOptions: {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:859:                        position: google.maps.ControlPosition.RIGHT_CENTER,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:860:                        drawingModes: ['polygon']
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:861:                    },
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:862:                    polygonOptions: shapeOptions,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:863:                    map: map
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:864:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:865:                google.maps.event.addListener(drawingManager, 'overlaycomplete', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:866:                    var newShape = e.overlay;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:867:                    allShapes.push(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:868:                    let lat_lng = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:869:                    allShapes.forEach(function(data, index) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:870:                        lat_lng[index] = getCoordinates(data);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:871:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:872:                    document.getElementById('coordinates').value = JSON.stringify(lat_lng);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:873:                    newShape.setOptions({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:874:                        fillColor: shapeColor
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:875:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:876:                    getCoordinates(newShape);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:877:                    drawingManager.setDrawingMode(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:878:                    setSelection(newShape, 0);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:879:                    google.maps.event.addListener(newShape, 'click', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:880:                        if (e.vertex !== undefined) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:881:                            var path = newShape.getPaths().getAt(e.path);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:882:                            path.removeAt(e.vertex);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:883:                            getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:884:                            if (path.length < 3) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:885:                                newShape.setMap(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:886:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:887:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:888:                        setSelection(newShape, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:889:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:890:                    //update coordinates
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:891:                    google.maps.event.addListener(newShape, 'click', function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:892:                        getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:893:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:894:                    google.maps.event.addListener(newShape, "dragend", function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:895:                        getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:896:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:897:                    google.maps.event.addListener(newShape.getPath(), "insert_at", function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:898:                        getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:899:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:900:                    google.maps.event.addListener(newShape.getPath(), "remove_at", function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:901:                        getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:902:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:903:                    google.maps.event.addListener(newShape.getPath(), "set_at", function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:904:                        getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:905:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:906:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:907:                google.maps.event.addListener(drawingManager, 'drawingmode_changed', clearSelection);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:908:                google.maps.event.addListener(map, 'click', clearSelection);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:909:            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:910:                $(".mapType").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:911:                searchBox();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:912:                map = L.map('map').setView([default_lat, default_lng], 10);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:913:                map.dragging.disable();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:914:                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:915:                    maxZoom: 19,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:916:                    attribution: '© OpenStreetMap'
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:917:                }).addTo(map);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:918:                // Create a feature group to store drawn items (polygons, lines, etc.)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:919:                drawnItems = new L.FeatureGroup();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:920:                map.addLayer(drawnItems);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:921:                // Set up the Leaflet Draw control
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:922:                var drawControl = new L.Control.Draw({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:923:                    edit: {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:924:                        featureGroup: drawnItems,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:925:                        remove: false
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:926:                    },
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:927:                    draw: {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:928:                        polygon: {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:929:                            allowIntersection: false, // Disable intersecting polygons
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:930:                            showArea: true // Show area of the polygon
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:931:                        },
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:932:                        rectangle: false, // Disable rectangle drawing
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:933:                        circle: false, // Disable circle drawing
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:934:                        marker: false, // Disable marker drawing
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:935:                        polyline: false, // Disable polyline drawing
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:936:                        circlemarker: false,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:937:                    },
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:938:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:939:                map.addControl(drawControl);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:940:                map.on('draw:dragend', function(event) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:941:                    makePolygonDraggable(event.layer);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:942:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:943:                map.on('draw:edited', function(event) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:944:                    event.layers.eachLayer(function(layer) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:945:                        makePolygonDraggable(layer);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:946:                        if (layer instanceof L.Polygon || layer instanceof L.MultiPolygon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:947:                            // Get the coordinates of the polygon (all vertices)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:948:                            let latLngs = layer.getLatLngs();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:949:                            // Flatten the array of coordinates in case of multi-polygon
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:950:                            let flatLatLngs = L.LineUtil.isFlat(latLngs) ? latLngs : latLngs.flat(Infinity);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:951:                            // Convert to desired format (lat, lon)
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:952:                            let convertedArray = flatLatLngs.map(function(latLng) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:953:                                if (latLng && typeof latLng.lat === 'number' && typeof latLng.lng === 'number') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:954:                                    if (latLng.lat >= -90 && latLng.lat <= 90 && latLng.lng >= -180 && latLng.lng <= 180) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:955:                                        return {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:956:                                            lat: latLng.lat,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:957:                                            lon: latLng.lng
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:958:                                        };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:959:                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:960:                                        console.error("Invalid latLng:", latLng); // Log invalid latLng for debugging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:961:                                        return null; // Avoid undefined latLngs
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:962:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:963:                                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:964:                                    console.error("Invalid latLng:", latLng); // Log invalid latLng for debugging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:965:                                    return null; // Avoid undefined latLngs
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:966:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:967:                            }).filter(item => item !== null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:968:                            // Final array to be saved as JSON
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:969:                            let finalArray = convertedArray;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:970:                            layer.setLatLngs(finalArray);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:971:                            document.getElementById('coordinates').value = JSON.stringify(finalArray);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:972:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:973:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:974:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:975:                map.on('draw:resize', function(event) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:976:                    var layer = event.layer;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:977:                    if (layer instanceof L.Polygon || layer instanceof L.MultiPolygon) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:978:                        let latLngs = layer.getLatLngs();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:979:                        let flatLatLngs = L.LineUtil.isFlat(latLngs) ? latLngs : latLngs.flat(Infinity);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:980:                        let convertedArray = flatLatLngs.map(function(latLng) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:981:                            if (latLng && typeof latLng.lat === 'number' && typeof latLng.lng === 'number') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:982:                                if (latLng.lat >= -90 && latLng.lat <= 90 && latLng.lng >= -180 && latLng.lng <= 180) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:983:                                    return {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:984:                                        lat: latLng.lat,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:985:                                        lon: latLng.lng
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:986:                                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:987:                                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:988:                                    console.error("Invalid latLng:", latLng); // Log invalid latLng for debugging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:989:                                    return null; // Avoid undefined latLngs
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:990:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:991:                            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:992:                                console.error("Invalid latLng:", latLng); // Log invalid latLng for debugging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:993:                                return null; // Avoid undefined latLngs
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:994:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:995:                        }).filter(item => item !== null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:996:                        // Final array to be saved as JSON
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:997:                        let finalArray = convertedArray;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:998:                        document.getElementById('coordinates').value = JSON.stringify(finalArray);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:999:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:1000:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:1001:                enablePolygonDrawing(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:1002:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:1003:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:1004:    </script>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\create.blade.php:1005:@endsection
```

## FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php
```text
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:17:            <div class="card">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:18:                <div class="card-body">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:19:                    <div class="error_top" style="display:none"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:20:                    <div class="row vendor_payout_create">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:21:                        <div class="vendor_payout_create-inner">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:22:                            <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:23:                                <legend>{{ trans('lang.zone_edit') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:24:                                <div class="form-group row width-100">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:25:                                    <label class="col-3 control-label">{{ trans('lang.zone_name') }}<span class="required-field"></span></label>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:26:                                    <div class="col-7">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:27:                                        <input type="text" class="form-control" id="name">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:28:                                        <div class="form-text text-muted">{{ trans('lang.zone_name_help') }}</div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:29:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:30:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:31:                                <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:32:                                    <div class="form-check">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:33:                                        <input type="checkbox" class="publish" id="publish">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:34:                                        <label class="col-3 control-label" for="publish">{{ trans('lang.status') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:35:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:36:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:37:                                <div class="form-hidden">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:38:                                    <input type="hidden" id="coordinates" name="coordinates" value="">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:39:                                    <input type="hidden" id="area" name="area" value="">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:40:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:41:                            </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:42:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:43:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:44:                    <div class="row mt-5">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:45:                        <div class="col-sm-5">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:46:                            <div class="row">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:47:                                <div class="col-sm-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:48:                                    <h4>{{ trans('lang.instructions') }}</h4>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:49:                                    <p>{{ trans('lang.instructions_help') }}</p>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:50:                                    <p><i class="fa fa-hand-pointer-o map_icons"></i>{{ trans('lang.instructions_hand_tool') }}</p>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:51:                                    <p><i class="fa fa-plus-circle map_icons"></i>{{ trans('lang.instructions_shape_tool') }}</p>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:52:                                    <p><i class="mdi mdi-delete map_icons"></i>{{ trans('lang.instructions_trash_tool') }}</p>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:53:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:54:                                <div class="col-sm-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:55:                                    <img src="{{ asset('images/zone_info.gif') }}" alt="GIF" width="100%">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:56:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:57:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:58:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:59:                        <div class="col-sm-5">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:60:                            <input type="text" placeholder="{{ trans('lang.search_location') }}" id="search-box" class="form-control controls" />
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:61:                            <div id="autocomplete-list"></div>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:62:                            <div id="map"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:63:                        </div>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:64:                        <div class="col-sm-2 mapType">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:65:                            <ul style="list-style: none;padding:0">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:66:                                <li>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:67:                                    <a id="select-button" href="javascript:void(0)" class="btn-floating zone-add-btn btn-large waves-effect waves-light tooltipped" title="{{trans('lang.use_this_tool_to_drag_the_map_and_select_your_desired_location')}}">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:68:                                        <i class="fa fa-hand-pointer-o map_icons"></i>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:69:                                    </a>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:70:                                </li>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:71:                                <li>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:72:                                    <a id="add-button" href="javascript:void(0)" class="btn-floating zone-add-btn btn-large waves-effect waves-light tooltipped" title="{{trans('lang.use_this_tool_to_highlight_areas_and_connect_the_dots')}}">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:73:                                        <i class="fa fa-plus-circle map_icons"></i>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:74:                                    </a>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:75:                                </li>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:76:                                <li>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:77:                                    <a id="delete-all-button" href="javascript:void(0)" class="btn-floating zone-delete-all-btn btn-large waves-effect waves-light tooltipped" title="{{trans('lang.use_this_tool_to_delete_all_selected_areas')}}">
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:78:                                        <i class="mdi mdi-delete map_icons"></i>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:79:                                    </a>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:80:                                </li>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:81:                            </ul>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:82:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:83:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:84:                    <div class="form-group col-12 text-center btm-btn">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:85:                        <button type="button" class="btn btn-primary edit-setting-btn">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:86:                            <i class="fa fa-save"></i> {{ trans('lang.save') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:87:                        </button>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:88:                        <a href="{!! route('zone') !!}" class="btn btn-default">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:89:                            <i class="fa fa-undo"></i>{{ trans('lang.cancel') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:90:                        </a>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:91:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:92:                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:93:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:94:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:95:    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:96:@endsection
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:97:<style>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:98:    #map {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:99:        height: 500px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:100:        width: 100%;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:101:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:102:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:103:    #panel {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:104:        width: 200px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:105:        font-family: Arial, sans-serif;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:106:        font-size: 13px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:107:        float: right;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:108:        margin: 10px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:109:        margin-top: 100px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:110:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:111:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:112:    #delete-button,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:113:    #add-button,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:114:    #delete-all-button,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:115:    #save-button {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:116:        margin-top: 5px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:117:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:118:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:119:    #search-box {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:120:        background-color: #f7f7f7;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:121:        font-size: 15px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:122:        font-weight: 300;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:123:        margin-top: 10px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:124:        margin-bottom: 10px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:125:        padding: 0 11px 0 13px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:126:        text-overflow: ellipsis;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:127:        height: 25px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:128:        border: 1px solid #c7c7c7;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:129:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:130:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:131:    .map_icons {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:132:        font-size: 24px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:133:        color: white;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:134:        padding: 10px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:135:        margin: 5px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:136:        background-color: {{ isset($_COOKIE['admin_panel_color']) ? $_COOKIE['admin_panel_color'] : '#072750' }};
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:137:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:138:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:139:    #autocomplete-list {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:140:        border: 1px solid #d4d4d4;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:141:        z-index: 9999;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:142:        position: absolute;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:143:        background-color: white;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:144:        cursor: pointer;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:145:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:146:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:147:    .autocomplete-item {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:148:        padding: 10px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:149:        border-bottom: 1px solid #d4d4d4;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:150:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:151:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:152:    .autocomplete-item:hover {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:153:        background-color: #e9e9e9;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:154:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:155:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:156:    .leaflet-control-custom {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:157:        background-color: #f44336;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:158:        border: none;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:159:        color: white;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:175:    .leaflet-control-custom i {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:176:        font-size: 18px;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:177:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:178:</style>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:179:@section('scripts')
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:180:    <script>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:181:        var id = "<?php echo $id; ?>";
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:182:        var database = firebase.firestore();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:183:        var ref = database.collection('zone').where("id", "==", id);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:184:        var default_lat = getCookie('default_latitude');
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:185:        var default_lng = getCookie('default_longitude');
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:186:        var geopoints = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:187:        let drawnItems = new L.FeatureGroup();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:188:        let deleteButton, dragMap;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:189:        let selectedPolygon = null;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:190:        var mapType = 'ONLINE';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:191:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:192:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:193:        database.collection('settings').doc('DriverNearBy').get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:194:            var data = snapshots.data();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:195:            if (data && data.selectedMapType && data.selectedMapType == "osm") {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:196:                mapType = "OFFLINE"
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:197:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:198:            var onclick = '',
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:199:                polygon = '',
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:200:                deletearea = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:201:            if (mapType == "OFFLINE") {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:202:                onclick = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:203:                    console.log("Offline mode, no drawing available.");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:204:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:205:                polygon = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:206:                    enablePolygonDrawing(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:207:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:208:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:209:                onclick = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:210:                    drawingManager.setDrawingMode(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:211:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:212:                polygon = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:213:                    drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:214:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:215:                deletearea = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:216:                    clearMap();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:217:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:218:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:219:            document.getElementById("select-button").onclick = onclick;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:220:            document.getElementById("add-button").onclick = polygon;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:221:            document.getElementById("delete-all-button").onclick = deletearea;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:222:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:223:        $(document).ready(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:224:            ref.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:225:                if (snapshots.docs) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:226:                    var zone = snapshots.docs[0].data();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:227:                    $("#name").val(zone.name);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:228:                    $("#coordinates").val(zone.area);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:229:                    let coordinates = zone.area.map(item => [item.latitude, item.longitude]);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:230:                    document.getElementById('area').value = coordinates;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:231:                    var AREA = document.getElementById('area').value;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:232:                    const values = AREA.split(',');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:233:                    const latLonArray = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:234:                    for (let i = 0; i < values.length; i += 2) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:235:                        const lat = parseFloat(values[i + 1]); // Latitude is the second value in the pair
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:236:                        const lon = parseFloat(values[i]); // Longitude is the first value in the pair
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:237:                        latLonArray.push([lat, lon]); // Add [lat, lon] pair to the array
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:238:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:239:                    if (mapType == "ONLINE") {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:240:                        latLonArray.push(latLonArray[0]);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:241:                        document.getElementById('coordinates').value = latLonArray;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:242:                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:243:                        // latLonArray.push(latLonArray);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:244:                        // Convert to desired format
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:245:                        var coordinatesUpdated = latLonArray.map(function(coord) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:246:                            return {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:247:                                lat: coord[0], // latitude from the first element of the array
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:248:                                lon: coord[1] // longitude from the second element of the array
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:249:                            };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:250:                        });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:251:                        document.getElementById('coordinates').value = JSON.stringify(coordinatesUpdated);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:252:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:253:                    if (zone.publish) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:254:                        $("#publish").prop('checked', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:255:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:256:                    default_lat = zone.latitude;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:257:                    default_lng = zone.longitude;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:258:                    geopoints = zone.area;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:259:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:260:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:261:            setTimeout(function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:262:                initMap();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:263:            }, 2500);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:264:            $(".edit-setting-btn").click(function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:265:                var name = $("#name").val();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:266:                var publish = $("#publish").is(":checked");
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:267:                var coordinates_object = $('#coordinates').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:268:                $(".error_top").empty();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:269:                if (name == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:270:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:271:                    $(".error_top").html("");
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:272:                    $(".error_top").append("<p>{{ trans('lang.zone_name_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:273:                    window.scrollTo(0, 0);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:274:                } else if (coordinates_object == "") {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:275:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:276:                    $(".error_top").html("");
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:277:                    $(".error_top").append("<p>{{ trans('lang.zone_coordinates_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:278:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:279:                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:280:                    if (mapType == "ONLINE") {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:281:                        var coordinates_parse = coordinates_object;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:282:                        if (coordinates_parse.startsWith('[[')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:283:                            coordinates_parse = coordinates_parse.slice(1); // Remove the first '['
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:284:                        }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:285:                        if (coordinates_parse.endsWith(']]')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:286:                            coordinates_parse = coordinates_parse.slice(0, -1); // Remove the last ']'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:287:                        }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:288:                        var coordinates = JSON.parse(coordinates_parse);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:289:                        if (coordinates && coordinates.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:290:                            var latitude = coordinates[0].lat;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:291:                            var longitude = coordinates[0].lng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:292:                            var area = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:293:                            for (let i = 0; i < coordinates.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:294:                                var item = coordinates[i];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:295:                                if (item && item.lat !== undefined && item.lng !== undefined) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:296:                                    area.push(new firebase.firestore.GeoPoint(item.lat, item.lng));
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:297:                                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:298:                                    console.error("Invalid coordinate at index " + i, item);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:299:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:300:                            }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:301:                            if (latitude && longitude) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:302:                                jQuery("#overlay").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:303:                                database.collection('zone').doc(id).set({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:304:                                    'id': id,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:305:                                    'name': name,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:306:                                    'latitude': latitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:307:                                    'longitude': longitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:308:                                    'area': area,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:309:                                    'publish': publish,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:310:                                    'sectionId': sectionId
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:311:                                }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:312:                                    jQuery("#overlay").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:313:                                    window.location.href = '{{ route('zone') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:314:                                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:315:                            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:316:                                console.error("Invalid latitude or longitude");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:317:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:318:                        } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:319:                            console.error("Coordinates array is empty or invalid.");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:320:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:321:                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:322:                        try {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:323:                            if (coordinates_object.startsWith('[[')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:324:                                coordinates_object = coordinates_object.slice(1); // Remove the first '['
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:325:                            }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:326:                            if (coordinates_object.endsWith(']]')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:327:                                coordinates_object = coordinates_object.slice(0, -1); // Remove the last ']'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:328:                            }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:329:                            if (coordinates_object.trim().startsWith('[') && coordinates_object.trim().endsWith(']')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:330:                                var coordinates_parse;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:331:                                try {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:332:                                    coordinates_parse = JSON.parse(coordinates_object);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:333:                                } catch (error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:334:                                    console.error("Error parsing JSON:", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:335:                                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:336:                                    $(".error_top").html("");
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:337:                                    $(".error_top").append("<p>{{ trans('lang.zone_coordinates_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:338:                                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:339:                                    return; // Exit early if JSON parsing fails
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:340:                                }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:341:                                if (!Array.isArray(coordinates_parse)) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:342:                                    console.error("Coordinates object is not an array:", coordinates_parse);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:343:                                    throw new Error("Coordinates should be an array.");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:344:                                }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:345:                                var latitude, longitude;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:346:                                var validCoordinates = true;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:347:                                var area = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:348:                                // Ensure each element in coordinates_parse has lat and lng
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:349:                                coordinates_parse.forEach((item, index) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:350:                                    let updatedItem = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:351:                                    if (item.lng !== undefined) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:352:                                        // Create a new object with 'lat' and 'lon'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:353:                                        updatedItem = {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:354:                                            lat: item.lat, // Keep lat as is
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:355:                                            lon: item.lng // Replace lng with lon
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:356:                                        };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:357:                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:358:                                        updatedItem = {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:359:                                            lat: item.lat, // Keep lat as is
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:360:                                            lon: item.lon // Replace lng with lon
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:361:                                        };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:362:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:363:                                    if (item && item.lat !== undefined && (item.lon !== undefined || item.lng !== undefined)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:364:                                        const lat = updatedItem.lat;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:365:                                        const lng = updatedItem.lon;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:366:                                        if (typeof lat === 'number' && !isNaN(lat) && !isNaN(lng) && typeof lng === 'number') {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:367:                                            area.push(new firebase.firestore.GeoPoint(lat, lng));
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:368:                                            if (!latitude && !longitude) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:369:                                                latitude = lat;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:370:                                                longitude = lng;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:371:                                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:372:                                        } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:373:                                            validCoordinates = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:374:                                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:375:                                    } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:376:                                        validCoordinates = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:377:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:378:                                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:379:                                // If valid coordinates, proceed with the logic
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:380:                                if (!validCoordinates) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:381:                                    throw new Error("Invalid coordinates.");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:382:                                }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:383:                                if (latitude === undefined || longitude === undefined) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:384:                                    console.error("Latitude or longitude is undefined.");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:385:                                    $(".error_top").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:386:                                    $(".error_top").html("<p>{{ trans('lang.zone_coordinates_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:387:                                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:388:                                    return;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:389:                                }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:390:                                $("#area").val(area);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:391:                            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:392:                                throw new Error("Invalid coordinates format: Should be an array of objects.");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:393:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:394:                        } catch (e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:395:                            console.error("Error parsing coordinates: ", e);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:396:                            $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:397:                            $(".error_top").html("");
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:398:                            $(".error_top").append("<p>{{ trans('lang.zone_coordinates_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:399:                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:400:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:401:                        jQuery("#overlay").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:402:                        database.collection('zone').doc(id).set({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:403:                            'id': id,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:404:                            'name': name,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:405:                            'latitude': latitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:406:                            'longitude': longitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:407:                            'area': area,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:408:                            'publish': publish,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:409:                        }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:410:                            jQuery("#overlay").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:411:                            window.location.href = '{{ route('zone') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:412:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:413:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:414:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:415:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:416:        });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:417:        var map;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:418:        var drawingManager;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:419:        var selectedShape;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:420:        var selectedKernel;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:421:        var gmarkers = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:422:        var coordinates = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:423:        var allShapes = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:424:        var sendable_coordinates = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:425:        var shapeColor = "#007cff";
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:426:        var kernelColor = "#000";
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:427:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:428:        function addNewPolys(newPoly) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:429:            google.maps.event.addListener(newPoly, 'click', function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:430:                setSelection(newPoly);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:431:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:432:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:433:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:434:        function setMapOnAll(map) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:435:            for (var i = 0; i < gmarkers.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:436:                gmarkers[i].setMap(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:437:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:438:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:439:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:440:        function clearMarkers() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:441:            setMapOnAll(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:442:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:443:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:444:        function deleteMarkers() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:445:            clearMarkers();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:446:            gmarkers = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:447:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:448:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:449:        function deleteSelectedShape() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:450:            if (selectedShape) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:451:                selectedShape.setMap(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:452:                var index = allShapes.indexOf(selectedShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:453:                if (index > -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:454:                    allShapes.splice(index, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:455:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:456:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:457:            if (selectedKernel) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:458:                selectedKernel.setMap(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:459:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:460:            let lat_lng = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:461:            allShapes.forEach(function(data, index) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:462:                lat_lng[index] = getCoordinates(data);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:463:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:464:            if (lat_lng.length == 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:465:                document.getElementById('coordinates').value = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:466:            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:467:                document.getElementById('coordinates').value = JSON.stringify(lat_lng);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:468:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:469:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:470:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:471:        function clearMap() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:472:            if (allShapes.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:473:                for (var i = 0; i < allShapes.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:474:                    allShapes[i].setMap(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:475:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:476:                allShapes = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:477:                deleteMarkers();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:478:                document.getElementById('coordinates').value = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:479:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:480:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:481:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:482:        function clearSelection() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:483:            if (selectedShape) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:484:                if (selectedShape.type !== 'marker') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:485:                    selectedShape.setEditable(false);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:486:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:487:                selectedShape = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:488:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:489:            if (selectedKernel) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:490:                if (selectedKernel.type !== 'marker') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:491:                    selectedKernel.setEditable(false);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:492:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:493:                selectedKernel = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:494:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:495:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:496:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:497:        function setSelection(shape, check) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:498:            clearSelection();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:499:            shape.setEditable(true);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:500:            shape.setDraggable(true);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:501:            if (check) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:502:                selectedKernel = shape;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:503:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:504:                selectedShape = shape;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:505:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:506:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:507:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:508:        function getCoordinates(polygon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:509:            var path = polygon.getPath();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:510:            coordinates = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:511:            for (var i = 0; i < path.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:512:                coordinates.push({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:513:                    lat: path.getAt(i).lat(),
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:514:                    lng: path.getAt(i).lng()
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:515:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:516:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:517:            document.getElementById('coordinates').value = JSON.stringify(coordinates);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:518:            return coordinates;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:519:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:520:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:521:        function createMarker(coord, nr, map) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:522:            var mesaj = "<h6>Vârf " + nr + "</h6><br>" + "Lat: " + coord.lat + "<br>" + "Lng: " + coord.lng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:523:            var marker = new google.maps.Marker({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:524:                position: coord,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:525:                map: map,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:526:            });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:527:            google.maps.event.addListener(marker, 'click', function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:528:                infowindow.setContent(mesaj);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:529:                infowindow.open(map, marker);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:530:            });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:531:            google.maps.event.addListener(marker, 'dblclick', function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:532:                marker.setMap(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:533:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:534:            return marker;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:535:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:536:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:537:        function makePolygonDraggable(layer) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:538:            var latLngs = layer.getLatLngs()[0]; // Get the LatLngs of the polygon
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:539:            const coordinates = layer.getLatLngs(); // Get the polygon's coordinates
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:540:            var coordinatesString = JSON.stringify(coordinates);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:541:            if (coordinatesString.startsWith('[[')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:542:                coordinatesString = coordinatesString.slice(1); // Remove the first '['
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:543:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:544:            if (coordinatesString.endsWith(']]')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:545:                coordinatesString = coordinatesString.slice(0, -1); // Remove the last ']'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:546:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:547:            document.getElementById('coordinates').value = coordinatesString;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:548:            // To track mouse position and delta
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:549:            var isDragging = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:550:            var startLatLng = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:551:            var startLatLngs = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:552:            // Mouse down event to start dragging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:553:            layer.on('mousedown', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:554:                isDragging = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:555:                startLatLng = e.latlng; // Store the initial mouse position in LatLng
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:556:                startLatLngs = latLngs.map(function(latlng) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:557:                    return L.latLng(latlng.lat, latlng.lng); // Clone the LatLngs of the polygon for reference
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:558:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:559:                map.on('mousemove', onMouseMove); // Track mouse movement
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:560:                map.on('mouseup', onMouseUp); // End dragging when mouse is released
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:561:            });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:562:            // Mouse move event to drag the polygon
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:563:            function onMouseMove(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:564:                const coordinates = layer.getLatLngs(); // Get the polygon's coordinates
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:565:                layer.setLatLngs(coordinates);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:566:                var coordinatesString = JSON.stringify(coordinates);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:567:                if (coordinatesString.startsWith('[[')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:568:                    coordinatesString = coordinatesString.slice(1); // Remove the first '['
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:569:                }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:570:                if (coordinatesString.endsWith(']]')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:571:                    coordinatesString = coordinatesString.slice(0, -1); // Remove the last ']'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:572:                }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:573:                document.getElementById('coordinates').value = coordinatesString;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:574:                if (isDragging) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:575:                    var dx = e.latlng.lng - startLatLng.lng; // Calculate change in longitude
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:576:                    var dy = e.latlng.lat - startLatLng.lat; // Calculate change in latitude
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:577:                    // Create new LatLngs by applying the change to each point
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:578:                    var newLatLngs = startLatLngs.map(function(latlng) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:579:                        return L.latLng(latlng.lat + dy, latlng.lng + dx); // Shift each point by dx, dy
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:580:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:581:                    // Update the polygon's LatLngs
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:582:                    layer.setLatLngs([newLatLngs]);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:583:                    document.getElementById('coordinates').value = JSON.stringify(newLatLngs);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:584:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:585:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:586:            // Mouse up event to stop dragging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:587:            function onMouseUp() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:588:                isDragging = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:589:                map.off('mousemove', onMouseMove); // Stop mousemove tracking
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:590:                map.off('mouseup', onMouseUp); // Stop mouseup tracking
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:591:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:592:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:593:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:594:        function createDragMapButton() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:595:            if (!dragMap) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:596:                var dragMap = L.control({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:597:                    position: 'topright'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:598:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:599:                dragMap.onAdd = function(map) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:600:                    var button = L.DomUtil.create('button', 'leaflet-control-custom');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:601:                    button.innerHTML = '<i class="fa fa-hand-pointer-o"></i>'; // Using Font Awesome icon
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:602:                    // Disable map dragging when clicking the button
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:603:                    L.DomEvent.disableClickPropagation(button);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:604:                    // Button click functionality
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:605:                    button.addEventListener('click', function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:606:                        DragMap();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:607:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:608:                    return button; // Return the button to the control
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:609:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:610:                // Add the custom button to the map
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:611:                dragMap.addTo(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:612:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:613:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:614:        // Create the delete button once and hide it initially
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:615:        function createDeleteButton() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:616:            if (!deleteButton) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:617:                var deleteButton = L.control({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:618:                    position: 'topright'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:619:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:620:                deleteButton.onAdd = function(map) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:621:                    var button = L.DomUtil.create('button', 'leaflet-control-custom');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:622:                    button.innerHTML = '<i class="mdi mdi-delete"></i>'; // Using Font Awesome icon
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:623:                    // Disable map dragging when clicking the button
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:624:                    L.DomEvent.disableClickPropagation(button);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:625:                    // Button click functionality
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:626:                    button.addEventListener('click', function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:627:                        deleteSelectedPolygon();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:628:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:629:                    return button; // Return the button to the control
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:630:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:631:                // Add the custom button to the map
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:632:                deleteButton.addTo(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:633:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:634:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:635:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:636:        function enablePolygonDrawing(map) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:637:            map.dragging.disable();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:638:            if (!drawnItems) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:639:                drawnItems = new L.FeatureGroup();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:640:                map.addLayer(drawnItems);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:641:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:642:            // Create the delete button before enabling drawing
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:643:            createDeleteButton();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:644:            createDragMapButton();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:645:            map.on('draw:created', function(event) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:646:                var layer = event.layer; // The drawn polygon or shape
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:647:                // Add the drawn layer to the map (it is already added to the 'drawnItems' feature group)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:648:                drawnItems.addLayer(layer);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:649:                makePolygonDraggable(layer);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:650:                layer.bindPopup("Drag me!").openPopup();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:651:                // Optionally, log the coordinates of the drawn polygon to the console
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:652:                const coordinates = layer.getLatLngs(); // Get the polygon's coordinates
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:653:                if (drawnItems.getLayers().length == 1) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:654:                    document.getElementById('coordinates').value = JSON.stringify(coordinates);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:655:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:656:            });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:657:            map.on('click', function(event) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:658:                map.dragging.disable();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:659:                var latlng = event.latlng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:660:                if (selectedPolygon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:661:                    // If there's already a selected polygon, deselect it
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:662:                    selectedPolygon.setStyle({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:663:                        color: '#3388ff'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:664:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:665:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:666:                drawnItems.eachLayer(function(layer) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:667:                    makePolygonDraggable(layer);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:668:                    if (layer instanceof L.Polygon && layer.getBounds().contains(event.latlng)) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:669:                        selectedPolygon = layer;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:670:                        layer.setStyle({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:671:                            color: 'red'
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:672:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:673:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:674:                    // Optionally, log the coordinates of the drawn polygon to the console
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:675:                    const coordinates = layer.getLatLngs(); // Get the polygon's coordinates
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:676:                    document.getElementById('coordinates').value = JSON.stringify(coordinates);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:677:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:678:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:679:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:680:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:681:        function DragMap() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:682:            map.dragging.enable();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:683:        }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:684:        // Allow deletion of selected polygon
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:685:        function deleteSelectedPolygon() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:686:            map.dragging.disable();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:687:            if (!selectedPolygon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:688:                alert("{{trans('lang.no_polygon_selected_to_delete')}}");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:689:                return;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:690:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:691:            drawnItems.removeLayer(selectedPolygon);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:692:            selectedPolygon = null;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:693:            if (selectedPolygon == null) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:694:                document.getElementById('coordinates').value = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:695:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:696:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:697:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:698:        function searchBox() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:699:            if (mapType == "OFFLINE") {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:700:                var input = document.getElementById('search-box');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:701:                let marker, newLat, newLon;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:702:                var autocompleteList = document.getElementById('autocomplete-list');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:703:                input.addEventListener('keyup', function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:704:                    if (event.key === 'Enter') return;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:705:                    var query = this.value.trim();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:706:                    if (query && query.length >= 3) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:707:                        fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1`)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:708:                            .then(response => response.json())
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:709:                            .then(data => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:710:                                autocompleteList.innerHTML = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:711:                                data.forEach(place => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:712:                                    var item = document.createElement('div');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:713:                                    item.classList.add('autocomplete-item');
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:714:                                    item.innerText = place.display_name;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:715:                                    item.onclick = function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:716:                                        input.value = place.display_name;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:717:                                        input.setAttribute('data-latitude', place.lat);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:718:                                        input.setAttribute('data-longitude', place.lon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:719:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:720:                                        if (marker) map.removeLayer(marker);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:721:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:722:                                        marker = L.marker([place.lat, place.lon], {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:723:                                            draggable: true
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:724:                                        }).addTo(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:725:                                        marker.dragging.enable();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:726:                                        map.setView([place.lat, place.lon], 13);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:727:                                        
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:728:                                        newLat = place.lat;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:729:                                        newLon = place.lon;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:730:                                        // Initially update coordinates display
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:731:                                        updateCoordinatesDisplay(newLat, newLon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:732:                                        marker.on('dragend', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:733:                                            newLat = e.target.getLatLng().lat;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:734:                                            newLon = e.target.getLatLng().lng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:735:                                            updateCoordinatesDisplay(newLat, newLon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:736:                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:737:                                        marker.on('drag', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:738:                                            newLat = e.target.getLatLng().lat;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:739:                                            newLon = e.target.getLatLng().lng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:740:                                            updateCoordinatesDisplay(newLat, newLon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:741:                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:742:                                        marker.on('moveend', function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:743:                                            updateCoordinatesDisplay(newLat, newLon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:744:                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:745:                                        if (place.address) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:746:                                            var city = place.address.city || place.address.town || place.address.village || 'N/A';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:747:                                            var state = place.address.state || 'N/A';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:748:                                            var country = place.address.country || 'N/A';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:749:                                            input.setAttribute('data-city', city);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:750:                                            input.setAttribute('data-state', state);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:751:                                            input.setAttribute('data-country', country);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:752:                                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:753:                                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:754:                                    autocompleteList.appendChild(item);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:755:                                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:756:                                if (data && data.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:757:                                    const lat = parseFloat(data[0].lat);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:758:                                    const lon = parseFloat(data[0].lon);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:759:                                    // Set the map view to the new coordinates
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:760:                                    map.setView([lat, lon], 13);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:761:                                    // If a marker already exists, remove it
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:762:                                    if (marker) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:763:                                        map.removeLayer(marker);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:764:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:765:                                    // Add a new marker at the new location
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:766:                                    marker = L.marker([lat, lon], {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:767:                                        draggable: true
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:768:                                    }).addTo(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:769:                                    marker.dragging.enable();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:770:                                    marker.on('dragend', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:771:                                        newLat = e.target.getLatLng().lat;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:772:                                        newLon = e.target.getLatLng().lng;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:773:                                        updateCoordinatesDisplay(newLat, newLon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:774:                                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:775:                                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:776:                                    alert("{{trans('lang.location_not_found_please_try_again')}}");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:777:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:778:                            })
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:779:                            .catch(error => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:780:                                console.error('Error:', error);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:781:                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:782:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:783:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:784:                document.addEventListener('click', function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:785:                    let latitude = input.dataset.latitude;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:786:                    let longitude = input.dataset.longitude;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:787:                    if (e.target !== input) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:788:                        autocompleteList.innerHTML = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:789:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:790:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:791:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:792:                function updateCoordinatesDisplay(lat, lon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:793:                    var url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:794:                    // Fetch data from Nominatim API
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:795:                    fetch(url)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:796:                        .then(response => response.json())
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:797:                        .then(data => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:798:                            // Display location details
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:799:                            if (data && data.address) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:800:                                var address = data.display_name;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:801:                                document.getElementById('search-box').value = address;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:802:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:803:                        })
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:804:                        .catch(error => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:805:                            document.getElementById('search-box').innerHTML = "Error fetching data.";
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:806:                            console.error('Error:', error);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:807:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:808:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:809:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:810:                var input = document.getElementById('search-box');
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:811:                var searchBox = new google.maps.places.SearchBox(input);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:812:                map.addListener('bounds_changed', function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:813:                    searchBox.setBounds(map.getBounds());
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:814:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:815:                searchBox.addListener('places_changed', function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:816:                    var places = searchBox.getPlaces();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:817:                    if (places.length == 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:818:                        return;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:819:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:820:                    var bounds = new google.maps.LatLngBounds();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:821:                    places.forEach(function(place) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:822:                        if (!place.geometry) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:823:                            return;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:824:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:825:                        var icon = {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:826:                            url: place.icon,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:827:                            size: new google.maps.Size(71, 71),
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:828:                            origin: new google.maps.Point(0, 0),
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:829:                            anchor: new google.maps.Point(17, 34),
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:830:                            scaledSize: new google.maps.Size(25, 25)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:831:                        };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:832:                        if (place.geometry.viewport) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:833:                            bounds.union(place.geometry.viewport);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:834:                        } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:835:                            bounds.extend(place.geometry.location);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:836:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:837:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:838:                    map.fitBounds(bounds);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:839:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:840:                var autocomplete = new google.maps.places.Autocomplete(input);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:841:                autocomplete.addListener('place_changed', function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:842:                    var place = autocomplete.getPlace();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:843:                    if (place && place.address_components) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:844:                        var placeaddress = autocomplete.getPlace().address_components;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:845:                        var city = place.address_components.filter(f => JSON.stringify(f.types) === JSON.stringify(['locality', 'political']))[0].long_name;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:846:                        var state = place.address_components.filter(f => JSON.stringify(f.types) === JSON.stringify(['administrative_area_level_1', 'political']))[0].long_name;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:847:                        var country = place.address_components.filter(f => JSON.stringify(f.types) === JSON.stringify(['country', 'political']))[0].long_name;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:848:                        $("#search-box").val(place.formatted_address).attr('data-latitude', place.geometry.location.lat()).attr('data-longitude', place.geometry.location.lng()).attr('data-city', city).attr('data-state', state).attr('data-country', country)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:849:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:850:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:851:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:852:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:853:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:854:        function initMap() {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:855:            if (mapType == "ONLINE") {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:856:                var infowindow = new google.maps.InfoWindow({
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:857:                    size: new google.maps.Size(150, 50)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:858:                })
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:859:                $(".mapType").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:860:                map = new google.maps.Map(document.getElementById('map'), {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:861:                    zoom: 8,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:862:                    center: new google.maps.LatLng(default_lat, default_lng),
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:863:                    mapTypeControl: false,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:864:                    mapTypeControlOptions: {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:865:                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:866:                        position: google.maps.ControlPosition.LEFT_CENTER
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:867:                    },
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:868:                    zoomControl: true,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:869:                    zoomControlOptions: {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:870:                        position: google.maps.ControlPosition.RIGHT_CENTER
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:871:                    },
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:872:                    scaleControl: false,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:873:                    scaleControlOptions: {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:874:                        position: google.maps.ControlPosition.RIGHT_CENTER
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:875:                    },
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:876:                    streetViewControl: false,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:877:                    fullscreenControl: false
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:878:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:879:                var zones = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:880:                var zones_area = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:881:                for (i = 0; i < geopoints.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:882:                    zones_area.push({
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:883:                        'lat': geopoints[i].latitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:884:                        'lng': geopoints[i].longitude
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:885:                    })
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:886:                }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:887:                zones.push(zones_area);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:888:                var i;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:889:                var polygon;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:890:                for (i = 0; i < zones.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:891:                    polygon = new google.maps.Polygon({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:892:                        paths: zones[i],
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:893:                        strokeWeight: 1,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:894:                        strokeColor: '#007cf',
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:895:                        fillColor: '#007cff',
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:896:                        fillOpacity: 0.4,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:897:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:898:                    polygon.setMap(map);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:899:                    addNewPolys(polygon);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:900:                    allShapes.push(polygon);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:901:                    google.maps.event.addListener(polygon, 'click', function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:902:                        getCoordinates(polygon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:903:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:904:                    google.maps.event.addListener(polygon, "dragend", function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:905:                        for (i = 0; i < allShapes.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:906:                            if (polygon.getPath() == allShapes[i].getPath()) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:907:                                allShapes.splice(i, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:908:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:909:                        }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:910:                        allShapes.push(polygon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:911:                        let lat_lng = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:912:                        allShapes.forEach(function(data, index) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:913:                            lat_lng[index] = getCoordinates(data);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:914:                        });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:915:                        document.getElementById('coordinates').value = JSON.stringify(lat_lng);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:916:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:917:                    google.maps.event.addListener(polygon.getPath(), "insert_at", function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:918:                        for (i = 0; i < allShapes.length; i++) { // Clear out the old allShapes entry
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:919:                            if (polygon.getPath() == allShapes[i].getPath()) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:920:                                allShapes.splice(i, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:921:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:922:                        }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:923:                        allShapes.push(polygon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:924:                        let lat_lng = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:925:                        allShapes.forEach(function(data, index) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:926:                            lat_lng[index] = getCoordinates(data);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:927:                        });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:928:                        document.getElementById('coordinates').value = JSON.stringify(lat_lng);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:929:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:930:                    google.maps.event.addListener(polygon.getPath(), "remove_at", function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:931:                        getCoordinates(polygon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:932:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:933:                    google.maps.event.addListener(polygon.getPath(), "set_at", function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:934:                        getCoordinates(polygon);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:935:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:936:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:937:                let lat_lng = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:938:                allShapes.forEach(function(data, index) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:939:                    lat_lng[index] = getCoordinates(data);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:940:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:941:                document.getElementById('coordinates').value = JSON.stringify(lat_lng);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:942:                searchBox();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:943:                var shapeOptions = {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:944:                    strokeWeight: 1,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:945:                    fillOpacity: 0.4,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:946:                    editable: true,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:947:                    draggable: true
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:948:                };
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:949:                drawingManager = new google.maps.drawing.DrawingManager({
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:950:                    // direct polygon drawing setting
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:951:                    // drawingMode: google.maps.drawing.OverlayType.POLYGON,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:952:                    drawingMode: null,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:953:                    drawingControl: false,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:954:                    drawingControlOptions: {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:955:                        position: google.maps.ControlPosition.RIGHT_CENTER,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:956:                        drawingModes: ['polygon']
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:957:                    },
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:958:                    polygonOptions: shapeOptions,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:959:                    map: map
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:960:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:961:                google.maps.event.addListener(drawingManager, 'overlaycomplete', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:962:                    var newShape = e.overlay;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:963:                    allShapes.push(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:964:                    let lat_lng = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:965:                    allShapes.forEach(function(data, index) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:966:                        lat_lng[index] = getCoordinates(data);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:967:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:968:                    document.getElementById('coordinates').value = JSON.stringify(lat_lng);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:969:                    newShape.setOptions({
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:970:                        fillColor: shapeColor
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:971:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:972:                    getCoordinates(newShape);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:973:                    drawingManager.setDrawingMode(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:974:                    setSelection(newShape, 0);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:975:                    google.maps.event.addListener(newShape, 'click', function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:976:                        if (e.vertex !== undefined) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:977:                            var path = newShape.getPaths().getAt(e.path);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:978:                            path.removeAt(e.vertex);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:979:                            getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:980:                            if (path.length < 3) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:981:                                newShape.setMap(null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:982:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:983:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:984:                        setSelection(newShape, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:985:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:986:                    //update coordinates
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:987:                    google.maps.event.addListener(newShape, 'click', function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:988:                        getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:989:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:990:                    google.maps.event.addListener(newShape, "dragend", function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:991:                        getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:992:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:993:                    google.maps.event.addListener(newShape.getPath(), "insert_at", function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:994:                        getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:995:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:996:                    google.maps.event.addListener(newShape.getPath(), "remove_at", function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:997:                        getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:998:                    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:999:                    google.maps.event.addListener(newShape.getPath(), "set_at", function(e) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1000:                        getCoordinates(newShape);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1001:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1002:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1003:                google.maps.event.addListener(drawingManager, 'drawingmode_changed', clearSelection);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1004:                google.maps.event.addListener(map, 'click', clearSelection);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1005:            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1006:                $(".mapType").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1007:                searchBox();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1008:                map = L.map('map').setView([default_lat, default_lng], 10);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1009:                map.dragging.disable();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1010:                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1011:                    maxZoom: 19,
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1012:                    attribution: '© OpenStreetMap'
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1013:                }).addTo(map);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1014:                // Create a feature group to store drawn items (polygons, lines, etc.)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1015:                drawnItems = new L.FeatureGroup();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1016:                map.addLayer(drawnItems);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1017:                const AREA = document.getElementById('area').value;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1018:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1019:                const latLonArray = parseAreaToLatLng(AREA);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1020:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1021:                // Create a polygon and add it to the map
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1022:                var polygon = L.polygon(latLonArray, { color: 'blue' }).addTo(drawnItems);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1023:                polygon.on('click', function () {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1024:                    if (selectedPolygon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1025:                        selectedPolygon.setStyle({ color: 'blue', weight: 3 });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1026:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1027:                    polygon.setStyle({ color: 'red', weight: 3 });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1028:                    selectedPolygon = polygon;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1029:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1030:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1031:                map.addControl(new L.Control.Draw({
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1032:                    draw: {  // Disable drawing functionality
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1033:                        polygon: true,  // Enable drawing of polygons
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1034:                        rectangle: false, // Disable rectangle drawing
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1035:                        circle: false,    // Disable circle drawing
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1036:                        marker: false,    // Disable marker drawing
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1037:                        polyline: false,  // Disable polyline drawing
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1038:                        circlemarker: false,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1039:                    },
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1040:                    edit: {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1041:                        featureGroup: drawnItems,  // Allow editing of drawn items
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1042:                        remove: false  // Allow removal of items
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1043:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1044:                }));
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1045:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1046:                map.on('draw:edited', function(event) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1047:                    event.layers.eachLayer(function(layer) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1048:                        if (layer instanceof L.Polygon || layer instanceof L.MultiPolygon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1049:                            makePolygonDraggable(layer);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1050:                            // Get the coordinates of the polygon (all vertices)
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1051:                            let latLngs = layer.getLatLngs();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1052:                            // Flatten the array of coordinates in case of multi-polygon
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1053:                            let flatLatLngs = L.LineUtil.isFlat(latLngs) ? latLngs : latLngs.flat(Infinity);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1054:                            // Convert to desired format (lat, lon)
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1055:                            let convertedArray = flatLatLngs.map(function(latLng) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1056:                                if (latLng && typeof latLng.lat === 'number' && typeof latLng.lng === 'number') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1057:                                    if (latLng.lat >= -90 && latLng.lat <= 90 && latLng.lng >= -180 && latLng.lng <= 180) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1058:                                        return {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1059:                                            lat: latLng.lat,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1060:                                            lon: latLng.lng
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1061:                                        };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1062:                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1063:                                        console.error("Invalid latLng:", latLng); // Log invalid latLng for debugging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1064:                                        return null; // Avoid undefined latLngs
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1065:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1066:                                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1067:                                    console.error("Invalid latLng:", latLng); // Log invalid latLng for debugging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1068:                                    return null; // Avoid undefined latLngs
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1069:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1070:                            }).filter(item => item !== null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1071:                            // Final array to be saved as JSON
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1072:                            let finalArray = convertedArray;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1073:                            layer.setLatLngs(finalArray);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1074:                            document.getElementById('coordinates').value = JSON.stringify(finalArray);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1075:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1076:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1077:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1078:                map.on('draw:resize', function(event) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1079:                    var layer = event.layer;
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1080:                    if (layer instanceof L.Polygon || layer instanceof L.MultiPolygon) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1081:                        let latLngs = layer.getLatLngs();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1082:                        let flatLatLngs = L.LineUtil.isFlat(latLngs) ? latLngs : latLngs.flat(Infinity);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1083:                        let convertedArray = flatLatLngs.map(function(latLng) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1084:                            if (latLng && typeof latLng.lat === 'number' && typeof latLng.lng === 'number') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1085:                                if (latLng.lat >= -90 && latLng.lat <= 90 && latLng.lng >= -180 && latLng.lng <= 180) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1086:                                    return {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1087:                                        lat: latLng.lat,
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1088:                                        lon: latLng.lng
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1089:                                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1090:                                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1091:                                    console.error("Invalid latLng:", latLng); // Log invalid latLng for debugging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1092:                                    return null; // Avoid undefined latLngs
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1093:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1094:                            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1095:                                console.error("Invalid latLng:", latLng); // Log invalid latLng for debugging
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1096:                                return null; // Avoid undefined latLngs
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1097:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1098:                        }).filter(item => item !== null);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1099:                        // Final array to be saved as JSON
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1100:                        let finalArray = convertedArray;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1101:                        layer.setLatLngs(finalArray);
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1102:                        document.getElementById('coordinates').value = JSON.stringify(finalArray);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1103:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1104:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1105:                enablePolygonDrawing(map);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1106:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1107:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1108:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1109:        function parseAreaToLatLng(areaStr) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1110:            if (!areaStr) return [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1111:
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1112:            const values = areaStr.split(',').map(v => parseFloat(v));
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1113:            const latLngs = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1114:
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1115:            for (let i = 0; i < values.length; i += 2) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1116:                if (!isNaN(values[i]) && !isNaN(values[i + 1])) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1117:                    latLngs.push([values[i], values[i + 1]]); // [lat, lng]
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1118:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1119:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1120:            return latLngs;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1121:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1122:        
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1123:    </script>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\edit.blade.php:1124:@endsection
```

## FILE: C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php
```text
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:55:                                    <tr>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:56:                                        <?php if (in_array('zone.delete', json_decode(@session('user_permissions'),true))) { ?>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:57:                                            <th class="delete-all"><input type="checkbox" id="is_active">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:58:                                                <label class="col-3 control-label" for="is_active">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:59:                                                    <a id="deleteAll" class="do_not_delete" href="javascript:void(0)"><i class="mdi mdi-delete"></i> {{trans('lang.all')}}</a>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:60:                                                </label>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:61:                                            </th>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:62:                                        <?php } ?>
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:63:                                        <th>{{trans('lang.zone_name')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:64:                                        <th>{{trans('lang.status')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:65:                                        <th>{{trans('lang.actions')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:66:                                    </tr>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:67:                                </thead>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:68:                                <tbody id="append_list1">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:69:                                </tbody>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:70:                            </table>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:71:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:72:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:73:                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:74:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:75:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:76:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:77:    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:78:</div>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:79:@endsection
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:80:@section('scripts')
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:81:<script type="text/javascript">
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:82:    var database = firebase.firestore();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:83:    var offest = 1;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:84:    var pagesize = 10; 
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:85:    var end = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:86:    var endarray = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:87:    var start = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:88:    var user_number = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:89:    var ref = database.collection('zone');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:90:    var append_list = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:91:    var placeholderImage = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:92:    var user_permissions = '<?php echo @session("user_permissions")?>';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:93:    user_permissions = Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:94:    var checkDeletePermission = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:95:    if ($.inArray('zone.delete', user_permissions) >= 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:96:        checkDeletePermission = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:97:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:98:    $(document).ready(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:99:        var inx = parseInt(offest) * parseInt(pagesize);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:100:        jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:101:        append_list = document.getElementById('append_list1');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:102:        append_list.innerHTML = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:103:        ref.get().then(async function (snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:104:            html = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:105:            if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:106:                $('.zone_count').text(snapshots.docs.length);    
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:107:                html = await buildHTML(snapshots);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:108:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:109:            if (html != '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:110:                append_list.innerHTML = html;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:111:                start = snapshots.docs[snapshots.docs.length - 1];
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:112:                endarray.push(snapshots.docs[0]);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:113:                if (snapshots.docs.length < pagesize) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:114:                    jQuery("#data-table_paginate").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:115:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:116:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:117:            if (checkDeletePermission) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:136:            $(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:137:                $('[data-toggle="tooltip"]').tooltip();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:138:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:139:            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:140:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:141:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:142:    async function buildHTML(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:143:        var html = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:144:        await Promise.all(snapshots.docs.map(async (listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:145:            var val = listval.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:146:            var getData = await getListData(val);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:147:            html += getData;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:148:        }));
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:149:        return html;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:150:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:151:    async function getListData(val) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:152:        var html = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:153:        html = html + '<tr>';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:154:        var id = val.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:155:        var route1 = '{{route("zone.edit",":id")}}';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:156:        route1 = route1.replace(':id', id);
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:157:        if (checkDeletePermission) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:158:            html = html + '<td class="delete-all"><input type="checkbox" id="is_open_' + id + '" class="is_open" dataId="' + id + '"><label class="col-3 control-label"\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:159:                'for="is_open_' + id + '" ></label></td>';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:160:        }
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:161:        html = html + '<td><a href="' + route1 + '">' + val.name + '</a></td>';
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:162:        if (val.publish) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:163:            html = html + '<td><label class="switch"><input type="checkbox" checked id="' + val.id + '" name="isSwitch"><span class="slider round"></span></label></td>';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:164:        } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:165:            html = html + '<td><label class="switch"><input type="checkbox" id="' + val.id + '" name="isSwitch"><span class="slider round"></span></label></td>';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:166:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:167:        html = html + '<td class="action-btn"><a href="' + route1 + '"  data-toggle="tooltip" data-bs-original-title="{{ trans('lang.edit') }}"><i class="mdi mdi-lead-pencil"></i></a>';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:168:        if (checkDeletePermission) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:169:            html = html + '<a id="' + val.id + '" name="zone-delete" class="delete-btn" href="javascript:void(0)" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.delete') }}"><i class="mdi mdi-delete"></i></a>';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:170:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:171:        html = html + '</td>';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:172:        html = html + '</tr>';
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:173:        return html;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:174:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:175:    $("#is_active").click(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:176:        $("#example24 .is_open").prop('checked', $(this).prop('checked'));
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:177:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:178:    $("#deleteAll").click(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:179:        if ($('#example24 .is_open:checked').length) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:180:            if (confirm("{{trans('lang.selected_delete_alert')}}")) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:181:                jQuery("#overlay").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:182:                $('#example24 .is_open:checked').each(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:183:                    var dataId = $(this).attr('dataId');
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:184:                    database.collection('zone').doc(dataId).delete().then(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:185:                        window.location.reload();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:186:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:187:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:188:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:189:        } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:190:            alert("{{trans('lang.select_delete_alert')}}");
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:191:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:192:    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:193:    $(document).on("click", "input[name='isSwitch']", function (e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:194:        var ischeck = $(this).is(':checked');
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:195:        var id = this.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:196:        if (ischeck) {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:197:            database.collection('zone').doc(id).update({
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:198:                'publish': true
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:199:            }).then(function (result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:200:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:201:        } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:202:            database.collection('zone').doc(id).update({
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:203:                'publish': false
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:204:            }).then(function (result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:205:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:206:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:207:    });
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:208:    $(document).on("click", "a[name='zone-delete']", function (e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:209:        var id = this.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:210:        jQuery("#overlay").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:211:        database.collection('zone').doc(id).delete().then(function (result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:212:            window.location.reload();
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:213:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:214:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:215:</script>
  C:\deploy\adminpanel\Admin Panel\resources\views\zone\index.blade.php:216:@endsection
```

## Decision Checklist
```text
Zone create file:
Zone edit file:
Zone collection name:
Zone area field name:
Zone point format:
Does create write polygon area:
Does edit update polygon area:
Risk:
Patch recommendation:
```

## Final Status
STATUS: WEB_ADMIN_ZONE_SOURCE_AUDIT_CREATED