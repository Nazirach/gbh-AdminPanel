# WEB ADMIN STORE / VENDOR EXACT WRITE BLOCKS

Generated: 07/01/2026 02:16:54
Mode: READ ONLY. No patch. No Firebase write.

Goal: inspect exact Web Admin files that create/edit/list vendors used by APK.


## FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php
```text
FOUND: C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php

  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:6:    $countries = json_decode($countries);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:7:    $countries = (array) $countries;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:8:    $newcountries = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:9:    $newcountriesjs = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:10:    foreach ($countries as $keycountry => $valuecountry) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:11:        $newcountries[$valuecountry->phoneCode] = $valuecountry;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:12:        $newcountriesjs[$valuecountry->phoneCode] = $valuecountry->code;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:13:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:14:    ?>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:15:    <div class="page-wrapper">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:16:        <div class="row page-titles">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:17:            <div class="col-md-5 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:18:                <h3 class="text-themecolor">{{ trans('lang.store_plural') }}</h3>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:19:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:20:            <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:21:                <ol class="breadcrumb">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:22:                    <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{ trans('lang.dashboard') }}</a></li>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:23:                    <li class="breadcrumb-item"><a href="{!! route('stores') !!}">{{ trans('lang.store_plural') }}</a>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:24:                    </li>
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:25:                    <li class="breadcrumb-item active">{{ trans('lang.create_vendor') }}</li>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:26:                </ol>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:27:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:28:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:29:            <div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:30:                <div class="card-body">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:31:                    <div class="error_top"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:32:                    <div class="row vendor_payout_create">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:33:                        <div class="vendor_payout_create-inner">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:34:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:35:                            <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:36:                                <legend>{{ trans('lang.vendor_details') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:37:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:38:                                <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:39:                                    <label class="col-3 control-label">{{ trans('lang.vendor_name') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:40:                                    <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:41:                                        <input type="text" class="form-control vendor_name" required>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:42:                                        <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:43:                                            {{ trans('lang.vendor_name_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:44:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:45:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:46:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:47:                                <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:48:                                    <label class="col-3 control-label">{{ trans('lang.owner_vendor') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:49:                                    <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:50:                                        <select id='store_vendors' class="form-control" required>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:51:                                            <option value="">{{ trans('lang.select_owner_vendor') }}</option>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:52:                                        </select>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:53:                                        <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:54:                                            {{ trans('lang.vendor_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:55:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:56:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:57:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:58:                                
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:59:                                <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:60:                                    <label class="col-3 control-label">{{ trans('lang.vendor_cuisine') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:61:                                    <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:62:                                        <select id='vendor_cuisines' class="form-control chosen-select" multiple="multiple" required>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:63:                                        </select>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:101:                                        <input type="text" class="form-control vendor_address" required>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:102:                                        <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:103:                                            {{ trans('lang.vendor_address_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:104:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:105:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:106:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:107:                               
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:108:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:109:                                <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:110:                                    <div class="col-12">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:111:                                        <h6>{{ trans('lang.know_your_cordinates') }} <a target="_blank" href="https://www.latlong.net/">{{ trans('lang.latitude_and_longitude_finder') }}</a></h6>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:112:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:113:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:114:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:115:                                <div class="form-group row width-50">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:116:                                    <label class="col-3 control-label">{{ trans('lang.vendor_latitude') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:117:                                    <div class="col-7">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:118:                                        <input class="form-control vendor_latitude" type="number" min="-90" max="90" onkeypress="return chkAlphabets3(event,'error3')">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:119:                                        <div id="error3" class="err"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:120:                                        <div class="form-text text-muted">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:121:                                            {{ trans('lang.vendor_latitude_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:122:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:123:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:124:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:125:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:126:                                <div class="form-group row width-50">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:127:                                    <label class="col-3 control-label">{{ trans('lang.vendor_longitude') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:128:                                    <div class="col-7">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:129:                                        <input class="form-control vendor_longitude" type="number" min="-180" max="180" onkeypress="return chkAlphabets3(event,'error4')">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:130:                                        <div id="error4" class="err"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:131:                                        <div class="form-text text-muted">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:132:                                            {{ trans('lang.vendor_longitude_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:133:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:134:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:135:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:136:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:137:                                <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:138:                                    <label class="col-3 control-label ">{{ trans('lang.vendor_description') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:139:                                    <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:140:                                        <textarea rows="7" class="vendor_description form-control" id="vendor_description"></textarea>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:141:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:142:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:143:                            </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:144:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:145:                            <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:146:                                <legend>{{ trans('lang.gallery') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:147:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:148:                                <div class="form-group row width-50 vendor_image">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:149:                                    <div class="">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:150:                                        <div id="photos"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:151:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:152:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:153:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:154:                                <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:155:                                    <div>
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:156:                                        <input type="file" onChange="handleFileSelect(event,'photos')">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:157:                                        <div id="uploding_image_photos"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:158:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:159:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:160:                            </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:161:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:162:                            <fieldset class="working_hour_section d-none" >
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:163:                                <legend>{{ trans('lang.working_hours') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:164:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:165:                                <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:166:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:167:                                    <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:168:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:169:                                            <button type="button" class="btn btn-primary  add_working_hours_restaurant_btn">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:170:                                                <i></i>{{ trans('lang.add_working_hours') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:171:                                            </button>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:172:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:173:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:174:                                    <div class="working_hours_div" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:175:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:176:                                        <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:177:                                            <label class="col-1 control-label">{{ trans('lang.sunday') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:178:                                            <div class="col-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:179:                                                <button type="button" class="btn btn-primary add_more_sunday" onclick="addMorehour('Sunday','sunday', '1')">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:180:                                                    {{ trans('lang.add_more') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:181:                                                </button>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:182:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:183:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:184:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:185:                                        <div class="restaurant_working_options_Sunday_div restaurant_discount" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:186:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:187:                                            <table class="booking-table" id="working_hour_table_Sunday">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:188:                                                <tr>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:189:                                                    <th>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:190:                                                        <label class="col-3 control-label">{{ trans('lang.from') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:191:                                                    </th>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:192:                                                    <th>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:193:                                                        <label class="col-3 control-label">{{ trans('lang.to') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:194:                                                    </th>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:195:                                                    <th>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:352:                                                    </th>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:353:                                                </tr>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:354:                                            </table>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:355:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:356:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:357:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:358:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:359:                            </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:360:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:361:                            <fieldset>
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:362:                                <legend>{{ trans('vendor') }} {{ trans('lang.active_deactive') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:363:                                <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:364:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:365:                                    <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:366:                                        <div class="form-check width-100">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:367:                                            <input type="checkbox" id="is_active">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:368:                                            <label class="col-3 control-label" for="is_active">{{ trans('lang.active') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:369:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:370:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:371:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:372:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:373:                            </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:374:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:375:                            <fieldset style="display: none;" id="services_feature">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:376:                                <legend>{{ trans('lang.services') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:377:                                <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:378:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:379:                                    <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:380:                                        <input type="checkbox" id="Free_Wi_Fi">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:381:                                        <label class="col-3 control-label" for="Free_Wi_Fi">{{ trans('lang.wifi') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:382:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:383:                                    <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:384:                                        <input type="checkbox" id="Good_for_Breakfast">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:385:                                        <label class="col-3 control-label" for="Good_for_Breakfast">{{ trans('lang.breakfast') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:386:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:387:                                    <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:388:                                        <input type="checkbox" id="Good_for_Dinner">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:389:                                        <label class="col-3 control-label" for="Good_for_Dinner">{{ trans('lang.dinner') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:390:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:391:                                    <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:392:                                        <input type="checkbox" id="Good_for_Lunch">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:393:                                        <label class="col-3 control-label" for="Good_for_Lunch">{{ trans('lang.lunch') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:394:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:395:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:396:                                    <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:397:                                        <input type="checkbox" id="Live_Music">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:398:                                        <label class="col-3 control-label" for="Live_Music">{{ trans('lang.live_music') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:399:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:400:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:401:                                    <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:402:                                        <input type="checkbox" id="Outdoor_Seating">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:403:                                        <label class="col-3 control-label" for="Outdoor_Seating">{{ trans('lang.outdoor_seating') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:404:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:405:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:406:                                    <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:445:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:446:                                        <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:447:                                            <label class="col-3 control-label">{{ trans('lang.cost') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:448:                                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:449:                                                <input type="number" class="form-control vendor_cost" required>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:450:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:451:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:452:                                        <div class="form-group row width-100 vendor_image">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:453:                                            <label class="col-3 control-label">{{ trans('lang.menu_card') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:454:                                            <div class="">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:455:                                                <div id="photos_menu_card"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:456:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:457:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:458:                                        <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:459:                                            <div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:460:                                                <input type="file" onChange="handleFileSelectMenuCard(event)">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:461:                                                <div id="uploaded_image_menu"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:462:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:463:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:464:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:465:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:466:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:467:                            </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:468:                            <fieldset class="selfDeliveryOption d-none">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:469:                                <legend>{{ trans('lang.self_delivery_setting') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:470:                                <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:471:                                    <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:472:                                        <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:473:                                            <input type="checkbox" id="enable_self_delivery" class="">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:474:                                            <label class="col-3 control-label" for="enable_self_delivery">{{ trans('lang.enable_self_delivery') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:475:                                            <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:476:                                                {{ trans('lang.enable_self_delivery_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:477:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:478:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:479:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:480:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:481:                            </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:482:                            <fieldset id="delivery_charges_div">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:483:                                <legend>{{ trans('lang.deliveryCharge') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:484:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:485:                                <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:486:                                    <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:487:                                        <label class="col-4 control-label">{{ trans('lang.delivery_charges_per') }} <span class="distance-type"></span></label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:488:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:489:                                            <input type="number" class="form-control" id="delivery_charges_per_km">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:490:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:491:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:492:                                    <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:493:                                        <label class="col-4 control-label">{{ trans('lang.minimum_delivery_charges') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:494:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:495:                                            <input type="number" class="form-control" id="minimum_delivery_charges">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:496:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:497:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:498:                                    <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:499:                                        <label class="col-4 control-label">{{ trans('lang.minimum_delivery_charges_within') }} <span class="distance-type"></span></label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:500:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:501:                                            <input type="number" class="form-control" id="minimum_delivery_charges_within_km">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:502:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:503:                                    </div>                                   
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:504:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:505:                            </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:506:                            <fieldset id="packagingChargeDiv">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:507:                                <legend>{{ trans('lang.packaging_charge') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:508:                                <div class="form-group row width-100 packagingChargeEnable d-none">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:509:                                    <label class="col-4 control-label">{{ trans('lang.packaging_charge') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:510:                                    <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:511:                                        <input type="number" class="form-control" id="packagingCharge">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:512:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:513:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:514:                            </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:515:                            <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:516:                                <legend>{{ trans('lang.special_offer') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:517:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:518:                                <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:519:                                    <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:520:                                        <input type="checkbox" id="enable_special_offer">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:521:                                        <label class="col-3 control-label" for="enable_special_offer">{{ trans('lang.enable_special_offer') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:807:                </button>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:808:                <a href="{!! route('stores') !!}" class="btn btn-default"><i class="fa fa-undo"></i>{{ trans('lang.cancel') }}</a>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:809:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:810:        
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:811:    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:812:@endsection
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:813:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:814:@section('scripts')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:815:    <script type="text/javascript">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:816:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:817:        var section_id = getCookie('section_id') || null;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:818:        var service_type = getCookie('service_type') || null;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:819:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:820:        var database = firebase.firestore();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:821:        var photo = "";
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:822:        var menuPhotoCount = 0;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:823:        var restaurantMenuPhotos = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:824:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:825:        var vendorOwnerId = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:826:        var vendorOwnerOnline = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:827:        var photocount = 0;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:828:        var storageRef = firebase.storage().ref('images');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:829:        var restaurnt_photos = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:830:        var restaurant_photos_filename = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:831:        var ownerphoto = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:832:        var ownerFileName = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:833:        var vendor_menu_photos = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:834:        var vendor_menu_filename = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:835:        var story_thumbnail = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:836:        var story_thumbnail_filename = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:837:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:838:        var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:839:        var createdAt = firebase.firestore.FieldValue.serverTimestamp();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:840:        var sections_list = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:841:        var categories_list = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:842:        var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:843:        var deliveryChargeFlag = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:844:        var workingHours = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:845:        var timeslotworkSunday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:846:        var timeslotworkMonday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:847:        var timeslotworkTuesday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:848:        var timeslotworkWednesday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:849:        var timeslotworkFriday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:850:        var timeslotworkSaturday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:851:        var timeslotworkThursday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:852:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:853:        var specialDiscount = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:854:        var timeslotSunday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:855:        var timeslotMonday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:856:        var timeslotTuesday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:857:        var timeslotWednesday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:858:        var timeslotFriday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:859:        var timeslotSaturday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:860:        var timeslotThursday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:861:        var storevideoDuration = 0;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:862:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:863:        var story_vedios = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:864:        var adminCommission = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:865:        var sectionData = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:866:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:867:        var dine_in_active = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:868:        var story_isEnabled = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:869:        var storyCount = 0;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:870:        var storyRef = firebase.storage().ref('Story');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:871:        var storyImagesRef = firebase.storage().ref('Story/images');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:872:        var vendor_id = database.collection("tmp").doc().id;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:873:        var driverNearBy = database.collection('settings').doc("DriverNearBy");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:874:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:875:        database.collection('settings').doc("story").get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:876:            var story_data = snapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:877:            if (story_data.isEnabled) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:878:                story_isEnabled = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:879:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:880:            storevideoDuration = story_data.videoDuration;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:881:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:882:        var isSelfDelivery = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:883:        var selfDeliveryRef = database.collection('settings').doc("globalSettings");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:884:        selfDeliveryRef.get().then(async function(settingSnapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:885:            if (settingSnapshots.data()) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:886:                var settingData = settingSnapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:887:                if (settingData.isSelfDelivery) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:888:                    isSelfDelivery = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:889:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:890:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:891:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:892:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:893:        var sectionRef = database.collection('sections').doc(section_id);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:894:        sectionRef.get().then(async function(sectionSnapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:895:            if (sectionSnapshots.data()) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:896:                sectionData = sectionSnapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:897:                adminCommission = sectionData.adminCommision;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:898:                if (service_type == "ecommerce-service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:899:                    $("#delivery_charges_div").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:900:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:901:                    $("#delivery_charges_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:902:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:903:                if (service_type == "delivery-service" && story_isEnabled == true) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:904:                    $('#story_upload_div').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:905:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:906:                    $('#story_upload_div').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:907:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:908:                if (service_type == "delivery-service" && isSelfDelivery) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:909:                    $('.selfDeliveryOption').removeClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:910:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:911:                    $('.selfDeliveryOption').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:912:                }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:913:                if (sectionData.dine_in_active == true) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:914:                    $("#is_dine_in_feature").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:915:                    $("#services_feature").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:916:                    dine_in_active = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:917:                }else{
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:918:                    $("#services_feature").hide(); 
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:919:                    $("#is_dine_in_feature").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:920:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:921:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:922:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:923:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:924:        driverNearBy.get().then(async function (snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:925:            var driverNearByData = snapshots.data(); 
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:926:            $(".distance-type").text(driverNearByData.distanceType);      
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:927:        })
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:928:        database.collection('zone').where('publish', '==', true).orderBy('name', 'asc').get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:929:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:930:                var data = listval.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:931:                var area = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:932:                data.area.forEach((location) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:933:                    area.push({
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:934:                        'latitude': location.latitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:935:                        'longitude': location.longitude
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:936:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:937:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:938:                $('#zone').append($("<option></option>")
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:939:                    .attr("value", data.id)
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:940:                    .attr("data-area", JSON.stringify(area))
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:941:                    .text(data.name));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:942:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:943:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:944:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:945:        var currentCurrency = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:946:        var currencyAtRight = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:947:        var refCurrency = database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:948:        refCurrency.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:949:            var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:950:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:951:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:952:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:953:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:954:        var packagingChargeEnable = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:955:        var sectionRef = database.collection('sections').doc(section_id);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:956:        sectionRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:957:            var sectionData = snapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:958:            if (sectionData.packagingChargeEnable) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:959:                packagingChargeEnable = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:960:                $('.packagingChargeEnable').removeClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:961:                $('#packagingChargeDiv').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:962:            }else{
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:963:                $('.packagingChargeEnable').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:964:                $('#packagingChargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:965:                packagingChargeEnable = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:966:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:967:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:968:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:969:        ref_sections.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:970:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:971:                var data = listval.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:972:                if (data.serviceTypeFlag == "delivery-service" || data.serviceTypeFlag == "ecommerce-service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:973:                    sections_list.push(data);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:974:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:975:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:976:        })
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:977:        database.collection('users').where('role', '==', 'vendor').where('sectionId', '==', section_id).orderBy('firstName', 'asc').get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:978:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:979:                var data = listval.data();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:980:                if ((data.vendorID == "" || data.vendorID == null) && data.firstName != "") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:981:                    $('#store_vendors').append($("<option></option>")
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:982:                        .attr("value", data.id)
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:983:                        .text(data.firstName + " " + data.lastName));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:984:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:985:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:986:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:987:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:988:        $('#vendor_cuisines').empty();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:989:        database.collection('vendor_categories').where('publish', '==', true).where('section_id', '==', section_id).get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:990:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:991:                var data = listval.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:992:                categories_list.push(data);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:993:                $('#vendor_cuisines').append($("<option></option>")
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:994:                    .attr("value", data.id)
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:995:                    .text(data.title));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:996:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:997:            $("#vendor_cuisines").show().chosen({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:998:                "placeholder_text": "{{ trans('lang.select_cuisines') }}"
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:999:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1000:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1001:        
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1002:        $('#store_vendors').on('change', function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1003:            ownerId = $(this).val();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1004:            database.collection('users').where('id', '==', ownerId).get().then(async function(snapshot) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1005:                if (snapshot.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1006:                    var data = snapshot.docs[0].data();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1007:                    if (data.hasOwnProperty('section_id') && data.section_id != null && data.section_id != '') {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1008:                        $('#section_id').val(data.section_id).prop('disabled', true).trigger('change');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1009:                    } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1010:                        $('#section_id').val('').prop('disabled', false);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1011:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1012:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1013:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1014:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1015:        var email_templates = database.collection('email_templates').where('type', '==', 'new_vendor_signup');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1016:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1017:        var emailTemplatesData = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1018:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1019:        var adminEmail = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1020:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1021:        var emailSetting = database.collection('settings').doc('emailSetting');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1022:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1023:        $(document).ready(async function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1024:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1025:            jQuery("#country_selector").select2({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1026:                templateResult: formatState,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1027:                templateSelection: formatState2,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1028:                placeholder: "Select Country",
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1029:                allowClear: true
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1030:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1031:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1032:            // --- ADD THIS BLOCK TO SET DEFAULT COUNTRY CODE ---
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1033:            var globalSettingsRef = database.collection('settings').doc('globalSettings');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1034:            globalSettingsRef.get().then(async function (snapshot) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1035:                var globalSettings = snapshot.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1036:                if (globalSettings && globalSettings.defaultCountryCode) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1037:                    var defaultPhoneCode = globalSettings.defaultCountryCode.replace('+', '').trim();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1038:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1039:                    // Find the option with matching phoneCode
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1040:                    var $option = $("#country_selector option").filter(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1041:                        return $(this).val() === defaultPhoneCode;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1042:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1043:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1044:                    if ($option.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1045:                        $("#country_selector").val(defaultPhoneCode).trigger('change');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1046:                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1047:                        console.warn("Default country code not found in list:", defaultPhoneCode);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1048:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1058:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1059:            await emailSetting.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1060:                var emailSettingData = snapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1061:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1062:                adminEmail = emailSettingData.userName;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1063:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1064:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1065:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1066:            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1067:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1068:            ref_deliverycharge.get().then(async function(snapshots_charge) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1069:                var deliveryChargeSettings = snapshots_charge.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1070:                try {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1071:                    if (deliveryChargeSettings.vendor_can_modify) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1072:                        deliveryChargeFlag = true;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1073:                        $("#delivery_charges_per_km").val(deliveryChargeSettings.delivery_charges_per_km);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1074:                        $("#minimum_delivery_charges").val(deliveryChargeSettings.minimum_delivery_charges);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1075:                        $("#minimum_delivery_charges_within_km").val(deliveryChargeSettings.minimum_delivery_charges_within_km);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1076:                    } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1077:                        deliveryChargeFlag = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1078:                        $("#delivery_charges_per_km").val(deliveryChargeSettings.delivery_charges_per_km);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1079:                        $("#minimum_delivery_charges").val(deliveryChargeSettings.minimum_delivery_charges);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1080:                        $("#minimum_delivery_charges_within_km").val(deliveryChargeSettings.minimum_delivery_charges_within_km);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1081:                        $("#delivery_charges_per_km").prop('disabled', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1082:                        $("#minimum_delivery_charges").prop('disabled', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1083:                        $("#minimum_delivery_charges_within_km").prop('disabled', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1084:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1085:                } catch (error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1086:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1087:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1088:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1089:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1090:        
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1091:        $(".save-form-btn").click(async function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1092:            $(".error_top").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1093:            var vendorname = $(".vendor_name").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1094:            var cuisines = $("#vendor_cuisines").val();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1095:            var categoryTitle = $("#vendor_cuisines option:selected").map(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1096:                return $(this).text();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1097:            }).get();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1098:            var vendorOwner = $("#vendor_owners option:selected").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1099:            var address = $(".vendor_address").val();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1100:            var latitude = parseFloat($(".vendor_latitude").val());
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1101:            var longitude = parseFloat($(".vendor_longitude").val());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1102:            var description = $(".vendor_description").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1103:            var country_code = '+' + $("#country_selector").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1104:            var phonenumber = $(".vendor_phone").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1105:            
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1106:            var enabledDiveInFuture = $("#dine_in_feature").is(':checked');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1107:            var restaurantCost = $(".vendor_cost").val();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1108:            var vendor_active = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1109:            if ($("#is_active").is(':checked')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1110:                vendor_active = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1111:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1112:            var enable_self_delivery = $("#enable_self_delivery").is(':checked');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1113:            var packagingCharge = $('#packagingCharge').val();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1114:            var selectedOwnerId = $("#store_vendors option:selected").val();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1115:            var zoneId = $('#zone option:selected').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1116:            var zoneArea = $('#zone option:selected').data('area');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1117:            var isInZone = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1118:            if (zoneId && zoneArea) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1119:                isInZone = checkLocationInZone(zoneArea, longitude, latitude);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1120:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1121:            if (selectedOwnerId && selectedOwnerId != '' && selectedOwnerId != null && selectedOwnerId != undefined) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1122:                var vendorData = await getOwnerDetails(selectedOwnerId);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1123:                if (vendorData != undefined && vendorData != null && vendorData != "") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1124:                    var user_name = vendorData.firstName + " " + vendorData.lastName;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1125:                    var subscriptionPlanId = vendorData.subscriptionPlanId ? vendorData.subscriptionPlanId : null;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1126:                    var subscription_plan = vendorData.subscription_plan ? vendorData.subscription_plan : null;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1127:                    var subscriptionOrderLimit = vendorData.subscription_plan ? vendorData.subscription_plan.orderLimit : null;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1128:                    var subscriptionExpiryDate = vendorData.subscriptionExpiryDate ? vendorData.subscriptionExpiryDate : null;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1129:                    var user_id = vendorData.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1130:                    var user_profilepic = vendorData.profilePictureURL ? vendorData.profilePictureURL : null;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1131:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1132:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1133:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1134:                    $(".error_top").append("<p>{{ trans('lang.owner_detail_not_found') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1135:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1136:                    return;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1137:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1138:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1139:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1140:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1141:                $(".error_top").append("<p>{{ trans('lang.owner_detail_not_found') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1142:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1143:                return;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1144:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1145:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1146:            var openDineTime = $("#openDineTime").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1147:            var openDineTime_val = $("#openDineTime").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1148:            if (openDineTime) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1149:                openDineTime = new Date('1970-01-01T' + openDineTime + 'Z')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1150:                    .toLocaleTimeString('en-US', {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1151:                        timeZone: 'UTC',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1152:                        hour12: true,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1153:                        hour: 'numeric',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1154:                        minute: 'numeric'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1155:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1156:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1157:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1158:            var closeDineTime = $("#closeDineTime").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1159:            var closeDineTime_val = $("#closeDineTime").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1160:            if (closeDineTime) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1161:                closeDineTime = new Date('1970-01-01T' + closeDineTime + 'Z')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1162:                    .toLocaleTimeString('en-US', {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1163:                        timeZone: 'UTC',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1164:                        hour12: true,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1165:                        hour: 'numeric',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1166:                        minute: 'numeric'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1167:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1168:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1169:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1170:            if (dine_in_active == false) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1171:                enabledDiveInFuture = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1172:                restaurantCost = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1173:                openDineTime = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1174:                closeDineTime = "";
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1175:                vendor_menu_photos = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1176:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1177:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1178:            var enabledSpecialOffer = $("#enable_special_offer").is(':checked');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1179:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1180:            var specialDiscount = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1181:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1182:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1183:            var workingHours = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1184:            var timeSlot = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1185:            var timeSlotObj = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1186:                'from': '00:00',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1187:                'to': '23:59'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1188:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1189:            timeSlot.push(timeSlotObj);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1190:            var sunday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1191:                'day': 'Sunday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1192:                'timeslot': timeSlot
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1193:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1194:            var monday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1195:                'day': 'Monday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1196:                'timeslot': timeSlot
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1197:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1198:            var tuesday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1199:                'day': 'Tuesday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1200:                'timeslot': timeSlot
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1201:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1202:            var wednesday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1203:                'day': 'Wednesday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1204:                'timeslot': timeSlot
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1205:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1206:            var thursday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1207:                'day': 'Thursday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1208:                'timeslot': timeSlot
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1209:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1210:            var friday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1211:                'day': 'Friday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1212:                'timeslot': timeSlot
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1213:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1214:            var Saturday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1215:                'day': 'Saturday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1216:                'timeslot': timeSlot
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1217:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1218:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1264:                "Good for Lunch": Good_for_Lunch,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1265:                "Live Music": Live_Music,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1266:                "Outdoor Seating": Outdoor_Seating,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1267:                "Takes Reservations": Takes_Reservations,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1268:                "Vegetarian Friendly": Vegetarian_Friendly
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1269:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1270:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1271:            var delivery_charges_per_km = parseInt($("#delivery_charges_per_km").val());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1272:            var minimum_delivery_charges = parseInt($("#minimum_delivery_charges").val());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1273:            var minimum_delivery_charges_within_km = parseInt($("#minimum_delivery_charges_within_km").val());
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1274:            var deliveryCharge = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1275:                'delivery_charges_per_km': delivery_charges_per_km,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1276:                'minimum_delivery_charges': minimum_delivery_charges,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1277:                'minimum_delivery_charges_within_km': minimum_delivery_charges_within_km
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1278:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1279:         
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1280:            if (vendorname == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1281:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1282:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1283:                $(".error_top").append("<p>{{ trans('lang.vendor_name_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1284:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1285:            } else if (cuisines == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1286:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1287:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1288:                $(".error_top").append("<p>{{ trans('lang.vendor_cuisine_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1289:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1290:            } else if (phonenumber == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1291:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1292:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1293:                $(".error_top").append("<p>{{ trans('lang.vendor_phone_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1294:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1295:            } else if (!country_code) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1296:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1297:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1298:                $(".error_top").append("<p>{{ trans('lang.select_country_code') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1299:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1300:            } else if (address == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1301:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1302:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1303:                $(".error_top").append("<p>{{ trans('lang.vendor_address_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1304:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1305:            }else if (zoneId == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1306:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1307:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1308:                $(".error_top").append("<p>{{ trans('lang.select_zone_help') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1309:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1310:            } else if (isNaN(latitude)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1311:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1312:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1313:                $(".error_top").append("<p>{{ trans('lang.vendor_lattitude_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1314:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1315:            } else if (latitude < -90 || latitude > 90) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1316:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1317:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1318:                $(".error_top").append("<p>{{ trans('lang.vendor_lattitude_limit_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1319:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1320:            } else if (isNaN(longitude)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1321:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1322:                $(".error_top").html("");
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1323:                $(".error_top").append("<p>{{ trans('lang.vendor_longitude_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1324:                window.scrollTo(0, 0);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1325:            } else if (longitude < -180 || longitude > 180) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1326:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1327:                $(".error_top").html("");
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1328:                $(".error_top").append("<p>{{ trans('lang.vendor_longitude_limit_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1329:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1330:            } else if (description == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1331:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1332:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1333:                $(".error_top").append("<p>{{ trans('lang.vendor_description_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1334:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1335:            }else if (isInZone == false) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1336:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1337:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1338:                $(".error_top").append("<p>{{ trans('lang.invalid_location_zone') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1339:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1340:            } else if (packagingChargeEnable && packagingCharge < 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1341:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1342:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1343:                $(".error_top").append("<p>{{ trans('lang.packagingCharge_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1344:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1345:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1346:                if (story_vedios.length > 0 || story_thumbnail != '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1347:                    if (story_vedios.length > 0 && story_thumbnail == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1348:                        $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1349:                        $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1350:                        $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1351:                        window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1352:                        return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1353:                    } else if (story_thumbnail && story_vedios.length == 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1354:                        $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1355:                        $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1356:                        $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1357:                        window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1358:                        return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1359:                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1360:                        await storeStoryImageData().then(async (IMG) => {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1361:                            database.collection('story').doc(vendor_id).set({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1362:                                'createdAt': new Date(),
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1363:                                'sectionID': section_id,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1364:                                'vendorID': vendor_id,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1365:                                'videoThumbnail': IMG.storyThumbnailImage,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1366:                                'videoUrl': story_vedios,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1367:                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1368:                        }).catch(err => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1369:                            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1370:                            $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1371:                            $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1372:                            $(".error_top").append("<p>" + err + "</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1373:                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1374:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1375:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1376:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1377:                jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1378:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1379:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1380:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1381:                await storeImageData().then(async (IMG) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1382:                    await storeGalleryImageData().then(async (GalleryIMG) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1383:                        await storeMenuImageData().then(async (MenuIMG) => {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1384:                            database.collection('users').doc(user_id).update({
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1385:                                'section_id': section_id,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1386:                                'vendorID': vendor_id,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1387:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1388:                            }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1389:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1390:                                coordinates = new firebase.firestore.GeoPoint(latitude, longitude);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1391:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1392:                                geoFirestore.collection('vendors').doc(vendor_id).set({
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1393:                                    'section_id': section_id,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1394:                                    'title': vendorname,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1395:                                    'description': description,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1396:                                    'latitude': latitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1397:                                    'longitude': longitude,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1398:                                    'location': address,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1399:                                    'photo': (Array.isArray(GalleryIMG) && GalleryIMG.length > 0) ? GalleryIMG[0] : null,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1400:                                    'categoryID': cuisines,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1401:                                    'phonenumber': country_code + phonenumber,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1402:                                    'categoryTitle': categoryTitle,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1403:                                    'coordinates': coordinates,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1404:                                    'id': vendor_id,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1405:                                    'filters': filters_new,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1406:                                    'photos': GalleryIMG,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1407:                                    'author': user_id,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1408:                                    'authorName': name,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1409:                                    'authorProfilePic': IMG.ownerImage,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1410:                                    'hidephotos': false,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1411:                                    'createdAt': createdAt,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1412:                                    'enabledDiveInFuture': enabledDiveInFuture,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1413:                                    'specialDiscountEnable': enabledSpecialOffer,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1414:                                    'restaurantMenuPhotos': MenuIMG,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1415:                                    'restaurantCost': restaurantCost,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1416:                                    'openDineTime': openDineTime,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1417:                                    'closeDineTime': closeDineTime,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1418:                                    'workingHours': workingHours,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1419:                                    'specialDiscount': specialDiscount,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1420:                                    'subscription_plan': subscription_plan,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1421:                                    'subscriptionPlanId': subscriptionPlanId,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1422:                                    'subscriptionExpiryDate': subscriptionExpiryDate,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1423:                                    'subscriptionTotalOrders': subscriptionOrderLimit,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1424:                                    'adminCommission': adminCommission,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1425:                                    'isSelfDelivery': enable_self_delivery,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1426:                                    'zoneId': zoneId,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1427:                                    'packagingCharge': packagingCharge ? packagingCharge : '0',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1428:                                }).then(async function(result) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1429:                                    await database.collection('users').doc(user_id).update({
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1430:                                        'section_id': section_id
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1431:                                    })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1432:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1433:                                    if (deliveryChargeFlag) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1434:                                        geoFirestore.collection('vendors').doc(vendor_id).update({
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1435:                                            'deliveryCharge': deliveryCharge
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1436:                                        }).then(async function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1437:                                            window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1438:                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1439:                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1440:                                        window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1441:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1442:                                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1443:                            })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1444:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1445:                        }).catch(function(error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1446:                            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1447:                            $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1448:                            $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1449:                            $(".error_top").append("<p>" + error + "</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1450:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1451:                    }).catch(err => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1452:                        jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1453:                        $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1454:                        $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1455:                        $(".error_top").append("<p>" + err + "</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1456:                        window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1457:                    })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1458:                }).catch(err => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1459:                    jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1460:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1461:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1462:                    $(".error_top").append("<p>" + err + "</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1463:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1464:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1465:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1466:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1467:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1468:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1469:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1470:        $(".add_special_offer_restaurant_btn").click(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1471:            $(".special_offer_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1472:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1473:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1474:        var countAddButton = 1;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1475:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1476:        function addMoreButton(day, day2, count) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1477:            count = countAddButton;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1478:            $(".restaurant_discount_options_" + day + "_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1479:            let dineInOption = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1480:            if (dine_in_active === true) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1481:                dineInOption = '<option value="dinein"/>Dine-In Discount</option>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1482:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1483:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1484:            $('#special_offer_table_' + day + ' tr:last').after('<tr>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1485:                '<td class="" style="width:10%;"><input type="time" class="form-control" id="openTime' + day + count + '"></td>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1486:                '<td class="" style="width:10%;"><input type="time" class="form-control" id="closeTime' + day + count + '"></td>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1487:                '<td class="" style="width:30%;">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1488:                    '<input type="number" class="form-control" id="discount' + day + count + '" style="width:60%;">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1489:                    '<select id="discount_type' + day + count + '" class="form-control" style="width:40%;">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1490:                        '<option value="percentage"/>%</option>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1491:                        '<option value="amount"/>' + currentCurrency + '</option>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1492:                    '</select>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1493:                '</td>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1494:                '<td style="width:30%;">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1495:                    '<select id="type' + day + count + '" class="form-control">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1496:                        '<option value="delivery"/>Delivery Discount</option>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1497:                        dineInOption +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1498:                    '</select>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1499:                '</td>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1500:                '<td class="action-btn" style="width:20%;">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1501:                    '<button type="button" class="btn btn-primary save_option_day_button' + day + count + 
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1502:                    '" onclick="addMoreFunctionButton(`' + day2 + '`,`' + day + '`,' + countAddButton + ')" style="width:62%;">Save</button>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1503:                '</td></tr>');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1504:            countAddButton++;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1505:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1506:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1507:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1508:        function deleteOffer(day, count, i) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1509:            $('.' + i + '_' + count + '_row').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1510:            if (day == 'Sunday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1511:                timeslotSunday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1512:            } else if (day == 'Monday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1513:                timeslotMonday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1514:            } else if (day == 'Tuesday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1515:                timeslotTuesday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1516:            } else if (day == 'Wednesday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1517:                timeslotWednesday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1518:            } else if (day == 'Thursday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1519:                timeslotThursday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1520:            } else if (day == 'Friday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1521:                timeslotFriday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1522:            } else if (day == 'Saturday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1523:                timeslotSaturday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1524:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1525:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1526:            var specialDiscount = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1527:            var sunday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1528:                'day': 'Sunday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1529:                'timeslot': timeslotSunday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1530:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1531:            var monday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1532:                'day': 'Monday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1533:                'timeslot': timeslotMonday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1534:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1535:            var tuesday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1536:                'day': 'Tuesday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1537:                'timeslot': timeslotTuesday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1538:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1539:            var wednesday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1540:                'day': 'Wednesday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1541:                'timeslot': timeslotWednesday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1542:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1543:            var thursday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1544:                'day': 'Thursday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1545:                'timeslot': timeslotThursday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1546:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1547:            var friday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1548:                'day': 'Friday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1549:                'timeslot': timeslotFriday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1550:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1551:            var Saturday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1552:                'day': 'Saturday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1553:                'timeslot': timeslotSaturday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1554:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1555:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1556:            specialDiscount.push(monday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1557:            specialDiscount.push(tuesday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1558:            specialDiscount.push(wednesday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1559:            specialDiscount.push(thursday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1560:            specialDiscount.push(friday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1561:            specialDiscount.push(Saturday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1562:            specialDiscount.push(sunday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1563:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1564:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1565:            database.collection('vendors').doc(id).update({
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1566:                'specialDiscount': specialDiscount
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1567:            }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1568:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1569:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1570:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1571:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1572:        function addMoreFunctionButton(day1, day2, count) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1573:            var discount = $("#discount" + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1574:            var discount_type = $('#discount_type' + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1575:            var type = $('#type' + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1576:            var closeTime = $("#closeTime" + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1577:            var openTime = $("#openTime" + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1578:            $(".error_top").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1579:            $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1580:            if (openTime == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1581:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1582:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1583:                $(".error_top").append("<p>Please enter special offer start time</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1584:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1585:            } else if (closeTime == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1586:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1587:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1588:                $(".error_top").append("<p>Please enter special offer close time</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1589:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1590:            } else if (openTime > closeTime) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1591:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1592:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1593:                $(".error_top").append("<p>Close time can not be less than Open time</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1594:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1595:            } else if (discount == "") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1596:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1597:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1598:                $(".error_top").append("<p>Please Enter discount</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1599:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1600:            } else if (discount > 100 || discount == 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1601:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1602:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1603:                $(".error_top").append("<p>Please Enter valid discount</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1604:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1763:                return function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1764:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1765:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1766:                    var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1767:                    var val = f.name;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1768:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1769:                    var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1770:                    var filename = (f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1771:                    var timestamp = Number(new Date());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1772:                    var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1773:                    ownerphoto = filePayload;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1774:                    ownerFileName = filename;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1775:                    $("#uploaded_image_owner").attr('src', ownerphoto);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1776:                    $(".uploaded_image_owner").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1777:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1778:            })(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1779:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1780:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1781:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1782:        function handleFileSelect(evt, type) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1783:            var f = evt.target.files[0];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1784:            var reader = new FileReader();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1785:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1786:                return function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1787:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1788:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1789:                    var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1790:                    var val = f.name;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1791:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1792:                    var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1793:                    var filename = (f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1794:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1795:                    var timestamp = Number(new Date());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1796:                    var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1797:                    photo = filePayload;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1798:                    if (photo) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1799:                        if (type == 'photos') {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1800:                            photocount++;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1801:                            photos_html = '<span class="image-item" id="photo_' + photocount + '"><span class="remove-btn" data-id="' + photocount + '" data-img="' + photo + '"><i class="fa fa-remove"></i></span><img width="100px" id="" height="auto" src="' + photo + '"></span>';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1802:                            $("#photos").append(photos_html);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1803:                            restaurnt_photos.push(photo);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1804:                            restaurant_photos_filename.push(filename);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1805:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1806:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1807:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1808:            })(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1809:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1810:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1811:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1812:        function handleStoryFileSelect(evt) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1813:            var f = evt.target.files[0];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1814:            var reader = new FileReader();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1815:            var story_video_duration = $("#story_video_duration").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1816:            var isVideo = document.getElementById('video_file');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1817:            var videoValue = isVideo.value;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1818:            var allowedExtensions = /(\.mp4)$/i;;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1819:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1820:            if (!allowedExtensions.exec(videoValue)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1821:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1822:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1823:                $(".error_top").append("<p>Error: Invalid video type</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1824:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1825:                isVideo.value = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1826:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1827:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1828:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1829:            var video = document.createElement('video');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1830:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1831:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1832:            video.preload = 'metadata';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1833:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1834:            video.onloadedmetadata = function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1835:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1836:                window.URL.revokeObjectURL(video.src);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1837:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1838:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1839:                if (video.duration > storevideoDuration) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1840:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1841:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1842:                    $(".error_top").append("<p>Error: Story video duration maximum allow to " + storevideoDuration + " seconds</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1888:                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1889:                })(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1890:                reader.readAsDataURL(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1891:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1892:            video.src = URL.createObjectURL(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1893:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1894:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1895:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1896:        $(document).on("click", ".remove-story-video", function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1897:            var id = $(this).attr('data-id');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1898:            var photo_remove = $(this).attr('data-img');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1899:            firebase.storage().refFromURL(photo_remove).delete();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1900:            $("#story_div_" + id).remove();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1901:            index = story_vedios.indexOf(photo_remove);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1902:            $("#video_file").val('');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1903:            if (index > -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1904:                story_vedios.splice(index, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1905:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1906:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1907:            var newhtml = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1908:            if (story_vedios.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1909:                for (var i = 0; i < story_vedios.length; i++) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1910:                    newhtml += '<div class="col-md-3" id="story_div_' + i + '">\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1911:                        '<div class="video-inner"><video width="320px" height="240px"\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1912:                        'controls="controls">\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1913:                        '<source src="' + story_vedios[i] + '"\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1914:                        'type="video/mp4"></video><span class="remove-story-video" data-id="' + i + '" data-img="' + story_vedios[i] + '"><i class="fa fa-remove"></i></span></div></div>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1915:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1916:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1917:            jQuery("#story_vedios").html(newhtml);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1918:            deleteStoryfromCollection();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1919:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1920:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1921:        $(document).on("click", ".remove-story-thumbnail", function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1922:            var photo_remove = $(this).attr('data-img');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1923:            $("#story_thumbnail").empty();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1924:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1925:            story_thumbnail = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1926:            deleteStoryfromCollection();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1927:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1928:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1929:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1930:        function deleteStoryfromCollection() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1931:            if (story_vedios.length == 0 && story_thumbnail == '') {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1932:                database.collection('story').where('vendorID', '==', vendor_id).get().then(async function(snapshot) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1933:                    if (snapshot.docs.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1934:                        database.collection('story').doc(vendor_id).delete();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1935:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1936:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1937:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1938:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1939:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1940:        function handleStoryThumbnailFileSelect(evt) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1941:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1942:            var f = evt.target.files[0];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1943:            var reader = new FileReader();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1944:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1945:            var fileInput =
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1946:                document.getElementById('file');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1947:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1948:            var filePath = fileInput.value;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1949:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1950:            // Allowing file type
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1951:            var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1952:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1953:            if (!allowedExtensions.exec(filePath)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1954:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1955:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1956:                $(".error_top").append("<p>Error: Invalid File type</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1957:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1958:                fileInput.value = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1959:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1960:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1961:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1962:                return function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1963:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1964:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1965:                    var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1966:                    var val = f.name;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1967:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1968:                    var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1969:                    var filename = (f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1970:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1971:                    var timestamp = Number(new Date());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1972:                    var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1987:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1988:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1989:                    var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1990:                    var val = f.name;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1991:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1992:                    var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1993:                    var filename = (f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1994:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1995:                    var timestamp = Number(new Date());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1996:                    var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1997:                    photo = filePayload;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1998:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:1999:                    if (photo) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2000:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2001:                        menuPhotoCount++;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2002:                        photos_html = '<span class="image-item" id="photo_menu' + menuPhotoCount + '"><span class="remove-menu-btn" data-id="' + menuPhotoCount + '" data-img="' + photo + '"><i class="fa fa-remove"></i></span><img width="100px" id="" height="auto" src="' + photo + '"></span>';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2003:                        $("#photos_menu_card").append(photos_html);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2004:                        vendor_menu_photos.push(photo);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2005:                        vendor_menu_filename.push(filename);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2006:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2007:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2008:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2009:            })(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2010:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2011:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2012:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2013:        $("#dine_in_feature").change(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2014:            if (this.checked) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2015:                $(".divein_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2016:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2017:                $(".divein_div").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2018:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2019:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2020:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2021:        function chkAlphabets(event, msg) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2022:            if (!(event.which >= 97 && event.which <= 122) && !(event.which >= 65 && event.which <= 90)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2023:                document.getElementById(msg).innerHTML = "Accept only Alphabets";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2024:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2025:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2026:                document.getElementById(msg).innerHTML = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2027:                return true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2028:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2029:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2030:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2031:        function chkAlphabets2(event, msg) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2032:            if (!(event.which >= 48 && event.which <= 57)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2033:                document.getElementById(msg).innerHTML = "Accept only Number";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2034:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2035:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2036:                document.getElementById(msg).innerHTML = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2037:                return true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2038:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2039:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2040:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2041:        function chkAlphabets3(event, msg) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2042:            if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2043:                document.getElementById(msg).innerHTML = "Accept only Number and Dot(.)";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2044:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2045:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2046:                document.getElementById(msg).innerHTML = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2047:                return true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2048:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2049:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2050:        async function storeImageData() {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2051:            var newPhoto = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2052:            newPhoto['ownerImage'] = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2053:            try {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2054:                if (ownerphoto != '') {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2055:                    ownerphoto = ownerphoto.replace(/^data:image\/[a-z]+;base64,/, "")
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2056:                    var uploadTask = await storageRef.child(ownerFileName).putString(ownerphoto, 'base64', {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2057:                        contentType: 'image/jpg'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2058:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2059:                    var downloadURL = await uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2060:                    newPhoto['ownerImage'] = downloadURL;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2061:                    ownerphoto = downloadURL;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2062:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2063:            } catch (error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2064:                console.log("ERR ===", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2065:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2066:            return newPhoto;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2067:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2068:        async function storeStoryImageData() {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2069:            var newPhoto = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2070:            newPhoto['storyThumbnailImage'] = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2071:            try {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2072:                if (story_thumbnail != '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2073:                    story_thumbnail = story_thumbnail.replace(/^data:image\/[a-z]+;base64,/, "")
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2074:                    var uploadTask = await storageRef.child(story_thumbnail_filename).putString(story_thumbnail, 'base64', {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2075:                        contentType: 'image/jpg'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2076:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2077:                    var downloadURL = await uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2078:                    newPhoto['storyThumbnailImage'] = downloadURL;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2079:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2080:            } catch (error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2081:                console.log("ERR ===", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2082:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2083:            return newPhoto;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2084:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2085:        async function storeGalleryImageData() {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2086:            var newPhoto = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2087:            if (restaurnt_photos.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2088:                const photoPromises = restaurnt_photos.map(async (resPhoto, index) => {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2089:                    resPhoto = resPhoto.replace(/^data:image\/[a-z]+;base64,/, "");
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2090:                    const uploadTask = await storageRef.child(restaurant_photos_filename[index]).putString(resPhoto, 'base64', {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2091:                        contentType: 'image/jpg'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2092:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2093:                    const downloadURL = await uploadTask.ref.getDownloadURL();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2094:                    return {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2095:                        index,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2096:                        downloadURL
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2097:                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2098:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2099:                const photoResults = await Promise.all(photoPromises);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2100:                photoResults.sort((a, b) => a.index - b.index);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2101:                uploadedPhoto = photoResults.map(photo => photo.downloadURL);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2102:                newPhoto = [...newPhoto, ...uploadedPhoto];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2103:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2104:            return newPhoto;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2105:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2106:        async function storeMenuImageData() {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2107:            var newPhoto = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2108:            if (vendor_menu_photos.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2109:                await Promise.all(vendor_menu_photos.map(async (menuPhoto, index) => {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2110:                    menuPhoto = menuPhoto.replace(/^data:image\/[a-z]+;base64,/, "");
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2111:                    var uploadTask = await storageRef.child(vendor_menu_filename[index]).putString(menuPhoto, 'base64', {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2112:                        contentType: 'image/jpg'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2113:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2114:                    var downloadURL = await uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2115:                    newPhoto.push(downloadURL);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2116:                }));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2117:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2118:            return newPhoto;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2119:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2120:        $(document).on("click", ".remove-btn", function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2121:            var id = $(this).attr('data-id');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2122:            var photo_remove = $(this).attr('data-img');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2123:            $("#photo_" + id).remove();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2124:            index = restaurnt_photos.indexOf(photo_remove);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2125:            if (index > -1) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2126:                restaurnt_photos.splice(index, 1); // 2nd parameter means remove one item only
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2127:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2128:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2129:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2130:        $(document).on("click", ".remove-menu-btn", function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2131:            var id = $(this).attr('data-id');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2132:            var photo_remove = $(this).attr('data-img');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2133:            $("#photo_menu" + id).remove();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2134:            index = vendor_menu_photos.indexOf(photo_remove);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2135:            if (index > -1) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2136:                vendor_menu_photos.splice(index, 1); // 2nd parameter means remove one item only
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2137:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2138:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2139:        });
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2140:        async function getOwnerDetails(selectedOwnerId) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2141:            var data = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2142:            await database.collection('users').doc(selectedOwnerId).get().then(async function(
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2143:                snapshot) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2144:                data = snapshot.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2145:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2146:            return data;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2147:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2148:        var newcountriesjs = '<?php echo json_encode($newcountriesjs); ?>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2149:        var newcountriesjs = JSON.parse(newcountriesjs);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2150:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2151:        function formatState(state) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2152:            if (!state.id) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2153:                return state.text;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2154:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2155:            var baseUrl = "<?php echo URL::to('/'); ?>/scss/icons/flag-icon-css/flags";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2156:            var $state = $(
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2157:                '<span><img src="' + baseUrl + '/' + newcountriesjs[state.element.value].toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2158:            );
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2159:            return $state;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2160:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2161:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2162:        function formatState2(state) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2163:            if (!state.id) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2164:                return state.text;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2165:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2166:            var baseUrl = "<?php echo URL::to('/'); ?>/scss/icons/flag-icon-css/flags"
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2167:            var $state = $(
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2168:                '<span><img class="img-flag" /> <span></span></span>'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2169:            );
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2170:            $state.find("span").text(state.text);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2171:            $state.find("img").attr("src", baseUrl + "/" + newcountriesjs[state.element.value].toLowerCase() + ".svg");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2172:            return $state;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2173:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2174:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2175:        function chkAlphabets2(event, msg) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2176:            if (!(event.which >= 48 && event.which <= 57)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2177:                document.getElementById(msg).innerHTML = "Accept only Number";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2178:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2179:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2180:                document.getElementById(msg).innerHTML = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2181:                return true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2182:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2183:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2184:        function checkLocationInZone(area, address_lng, address_lat) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2185:            var vertices_x = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2186:            var vertices_y = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2187:            for (j = 0; j < area.length; j++) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2188:                var geopoint = area[j];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2189:                vertices_x.push(geopoint.longitude);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2190:                vertices_y.push(geopoint.latitude);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2191:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2192:            var points_polygon = (vertices_x.length) - 1;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2193:            if (is_in_polygon(points_polygon, vertices_x, vertices_y, address_lng, address_lat)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2194:                return true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2195:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2196:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2197:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2198:        }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2199:        function is_in_polygon($points_polygon, $vertices_x, $vertices_y, $longitude_x, $latitude_y) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2200:            $i = $j = $c = $point = 0;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2201:            for ($i = 0, $j = $points_polygon; $i < $points_polygon; $j = $i++) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2202:                $point = $i;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2203:                if ($point == $points_polygon)
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2204:                    $point = 0;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2205:                if ((($vertices_y[$point] > $latitude_y != ($vertices_y[$j] > $latitude_y)) && ($longitude_x < ($vertices_x[$j] - $vertices_x[$point]) * ($latitude_y - $vertices_y[$point]) / ($vertices_y[$j] - $vertices_y[$point]) + $vertices_x[$point])))
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2206:                    $c = !$c;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2207:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2208:            return $c;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2209:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2210:    </script>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\create.blade.php:2211:@endsection
```

## FILE: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php
```text
FOUND: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php

  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1:@extends('layouts.app')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:3:@section('content')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:4:    <div class="page-wrapper">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:5:        <div class="row page-titles">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:6:            <div class="col-md-5 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:7:                <h3 class="text-themecolor">{{ trans('lang.store_edit') }}</h3>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:8:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:9:            <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:10:                <ol class="breadcrumb">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:11:                    <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{ trans('lang.dashboard') }}</a></li>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:12:                    <li class="breadcrumb-item"><a href="{!! route('stores') !!}">{{ trans('lang.store_plural') }}</a>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:13:                    </li>
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:14:                    <li class="breadcrumb-item active">{{ trans('lang.store_edit') }}</li>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:15:                </ol>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:16:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:17:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:18:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:19:        <div class="container-fluid">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:20:            <div class="row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:21:                <div class="col-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:22:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:23:                    <div class="resttab-sec">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:24:                        <div class="menu-tab">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:25:                            <ul>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:26:                                <li>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:27:                                    <a class="profileRoute"><i class="ti-user"></i>{{ trans('lang.profile') }}</a>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:28:                                </li>
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:29:                                <li class="active">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:30:                                    <a href="{{ route('stores.edit', $id) }}"><i class="ri-shopping-bag-2-fill"></i>{{ trans('lang.vendor') }}</a>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:31:                                </li>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:32:                            </ul>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:33:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:34:                        <div class="error_top"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:35:                        <div class="row vendor_payout_create">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:36:                            <div class="vendor_payout_create-inner">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:37:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:38:                                <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:39:                                    <legend>{{ trans('lang.vendor_details') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:40:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:41:                                    <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:42:                                        <label class="col-3 control-label">{{ trans('lang.vendor_name') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:43:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:44:                                            <input type="text" class="form-control vendor_name">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:45:                                            <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:46:                                                {{ trans('lang.vendor_name_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:47:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:48:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:49:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:50:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:51:                                    <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:52:                                        <label class="col-3 control-label">{{ trans('lang.vendor_cuisine') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:53:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:54:                                            <select id='vendor_cuisines' class="form-control chosen-select" multiple="multiple" required>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:55:                                            </select>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:56:                                            <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:57:                                                {{ trans('lang.vendor_cuisines_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:58:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:59:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:60:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:61:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:62:                                    <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:63:                                        <label class="col-3 control-label">{{ trans('lang.vendor_phone') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:64:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:65:                                            <input type="text" class="form-control vendor_phone" onkeypress="return chkAlphabets2(event,'error2')" readonly>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:66:                                            <div id="error2" class="err"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:67:                                            <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:83:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:84:                                            <input type="text" class="form-control vendor_address">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:85:                                            <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:86:                                                {{ trans('lang.vendor_address_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:87:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:88:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:89:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:90:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:91:                                    <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:92:                                        <div class="col-12">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:93:                                            <h6>*{{ trans('lang.dont_know_your_coordinates') }} <a target="_blank" href="https://www.latlong.net/">{{ trans('lang.latitude_and_longitude_finder') }} </a></h6>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:94:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:95:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:96:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:97:                                    <div class="form-group row width-50">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:98:                                        <label class="col-3 control-label">{{ trans('lang.vendor_latitude') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:99:                                        <div class="col-7">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:100:                                            <input type="text" class="form-control vendor_latitude" onkeypress="return chkAlphabets3(event,'error3')">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:101:                                            <div id="error3" class="err"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:102:                                            <div class="form-text text-muted">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:103:                                                {{ trans('lang.vendor_latitude_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:104:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:105:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:106:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:107:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:108:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:109:                                    <div class="form-group row width-50">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:110:                                        <label class="col-3 control-label">{{ trans('lang.vendor_longitude') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:111:                                        <div class="col-7">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:112:                                            <input type="text" class="form-control vendor_longitude" onkeypress="return chkAlphabets3(event,'error4')">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:113:                                            <div id="error4" class="err"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:114:                                            <div class="form-text text-muted">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:115:                                                {{ trans('lang.vendor_longitude_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:116:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:117:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:118:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:119:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:120:                                    <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:121:                                        <label class="col-3 control-label ">{{ trans('lang.vendor_description') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:122:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:123:                                            <textarea rows="7" class="vendor_description form-control" id="vendor_description"></textarea>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:124:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:125:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:126:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:127:                                </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:128:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:129:                                <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:130:                                    <legend>{{ trans('lang.store_admin_commission_details') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:131:                                    <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:132:                                        <label class="col-4 control-label">{{ trans('lang.commission_type') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:133:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:134:                                            <select class="form-control commission_type" id="commission_type">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:135:                                                <option value="percentage">{{ trans('lang.coupon_percent') }}</option>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:136:                                                <option value="fixed">{{ trans('lang.coupon_fixed') }}</option>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:137:                                            </select>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:138:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:139:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:140:                                    <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:141:                                        <label class="col-4 control-label">{{ trans('lang.admin_commission') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:142:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:143:                                            <input type="number" value="0" class="form-control commission_fix">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:144:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:145:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:146:                                </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:147:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:148:                                <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:149:                                    <legend>{{ trans('lang.gallery') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:150:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:151:                                    <div class="form-group row width-50 vendor_image">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:152:                                        <div class="">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:153:                                            <div id="photos"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:154:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:155:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:156:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:157:                                    <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:158:                                        <div>
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:159:                                            <input type="file" onChange="handleFileSelect(event,'photos')">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:160:                                            <div id="uploding_image_photos"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:161:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:162:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:163:                                </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:164:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:165:                                <fieldset class="ecommerce_div">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:166:                                    <legend>{{ trans('lang.working_hours') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:167:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:168:                                    <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:169:                                        <label class="col-12 control-label" style="color:red;font-size:15px;">{{ trans('lang.working_hour_note') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:170:                                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:171:                                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:172:                                                <button type="button" class="btn btn-primary  add_working_hours_restaurant_btn">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:173:                                                    <i></i>{{ trans('lang.add_working_hours') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:174:                                                </button>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:175:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:176:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:177:                                        <div class="working_hours_div" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:178:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:179:                                            <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:180:                                                <label class="col-1 control-label">{{ trans('lang.sunday') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:181:                                                <div class="col-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:182:                                                    <button type="button" class="btn btn-primary add_more_sunday" onclick="addMorehour('Sunday','sunday', '1')">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:183:                                                        {{ trans('lang.add_more') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:184:                                                    </button>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:185:                                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:186:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:187:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:188:                                            <div class="restaurant_discount_options_Sunday_div restaurant_discount" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:189:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:190:                                                <table class="booking-table" id="working_hour_table_Sunday">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:191:                                                    <tr>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:192:                                                        <th>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:193:                                                            <label class="col-3 control-label">{{ trans('lang.from') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:194:                                                        </th>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:195:                                                        <th>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:196:                                                            <label class="col-3 control-label">{{ trans('lang.to') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:197:                                                        </th>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:198:                                                        <th>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:434:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:435:                                            <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:436:                                                <label class="col-3 control-label">{{ trans('lang.cost') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:437:                                                <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:438:                                                    <input type="number" class="form-control vendor_cost" required>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:439:                                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:440:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:441:                                            <div class="form-group row width-100 vendor_image">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:442:                                                <label class="col-3 control-label">{{ trans('lang.menu_card') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:443:                                                <div class="">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:444:                                                    <div id="photos_menu_card"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:445:                                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:446:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:447:                                            <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:448:                                                <div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:449:                                                    <input type="file" onChange="handleFileSelectMenuCard(event)">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:450:                                                    <div id="uploaded_image_menu"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:451:                                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:452:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:453:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:454:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:455:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:456:                                </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:457:                                <fieldset class="selfDeliveryOption d-none">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:458:                                    <legend>{{ trans('lang.self_delivery_setting') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:459:                                    <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:460:                                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:461:                                            <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:462:                                                <input type="checkbox" id="enable_self_delivery" class="">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:463:                                                <label class="col-3 control-label" for="enable_self_delivery">{{ trans('lang.enable_self_delivery') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:464:                                                <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:465:                                                    {{ trans('lang.enable_self_delivery_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:466:                                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:467:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:468:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:469:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:470:                                </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:471:                                <fieldset class="delivery_charges_div">
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:472:                                    <legend>{{ trans('lang.deliveryCharge') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:473:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:474:                                    <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:475:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:476:                                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:477:                                            <label class="col-4 control-label">{{ trans('lang.delivery_charges_per') }} <span class="distance-type"></span></label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:478:                                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:479:                                                <input type="number" class="form-control" id="delivery_charges_per_km">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:480:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:481:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:482:                                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:483:                                            <label class="col-4 control-label">{{ trans('lang.minimum_delivery_charges') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:484:                                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:485:                                                <input type="number" class="form-control" id="minimum_delivery_charges">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:486:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:487:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:488:                                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:489:                                            <label class="col-4 control-label">{{ trans('lang.minimum_delivery_charges_within') }} <span class="distance-type"></span></label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:490:                                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:491:                                                <input type="number" class="form-control" id="minimum_delivery_charges_within_km">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:492:                                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:493:                                        </div>                                        
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:494:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:495:                                </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:496:                                <fieldset id="packagingChargeDiv">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:497:                                    <legend>{{ trans('lang.packaging_charge') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:498:                                    <div class="form-group row width-100 packagingChargeEnable d-none">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:499:                                        <label class="col-4 control-label">{{ trans('lang.packaging_charge') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:500:                                        <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:501:                                            <input type="number" class="form-control" id="packagingCharge">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:502:                                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:503:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:504:                                </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:505:                                <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:506:                                    <legend>{{ trans('lang.special_offer') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:507:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:508:                                    <div class="form-group row">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:509:                                        <label class="col-12 control-label" style="color:red;font-size:15px;">{{ trans('lang.special_discount_note') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:510:                                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:809:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:810:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:811:    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:812:@endsection
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:813:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:814:@section('scripts')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:815:    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"></script>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:816:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:817:    <script type="text/javascript">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:818:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:819:        var section_id = getCookie('section_id') || null;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:820:        var id = "<?php echo $id; ?>";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:821:        var database = firebase.firestore();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:822:        var ref = database.collection('vendors').where("id", "==", id);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:823:        var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:824:        var photo = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:825:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:826:        var vendorOwnerId = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:827:        var vendorOwnerOnline = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:828:        var photocount = 0;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:829:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:830:        var ownerOldImageFile = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:831:        var ownerId = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:832:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:833:        var vendor_photos = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:834:        var new_added_vendor_photos_filename = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:835:        var new_added_vendor_photos = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:836:        var galleryImageToDelete = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:837:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:838:        var menuPhotoCount = 0;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:839:        var restaurantMenuPhotos = "";
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:840:        var vendor_menu_photos = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:841:        var new_added_vendor_menu_filename = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:842:        var new_added_vendor_menu = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:843:        var menuImageToDelete = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:844:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:845:        var sections_list = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:846:        var categories_list = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:847:        var placeholderImage = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:848:        var placeholder = database.collection('settings').doc('placeHolderImage');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:849:        var ref_deliverycharge = database.collection('settings').doc("DeliveryCharge");
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:850:        var deliveryChargeFlag = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:851:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:852:        var workingHours = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:853:        var timeslotworkSunday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:854:        var timeslotworkMonday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:855:        var timeslotworkTuesday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:856:        var timeslotworkWednesday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:857:        var timeslotworkFriday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:858:        var timeslotworkSaturday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:859:        var timeslotworkThursday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:860:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:861:        var story_upload_time = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:862:        var story_vedios = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:863:        var story_thumbnail = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:864:        var story_thumbnail_filename = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:865:        var story_thumbnail_oldfile = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:866:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:867:        var storevideoDuration = 0;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:868:        var story_isEnabled = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:869:        var storyCount = 0;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:870:        var storyRef = firebase.storage().ref('Story');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:871:        var storyImagesRef = firebase.storage().ref('Story/images');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:872:        var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:873:        var storage = firebase.storage();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:874:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:875:        var specialDiscount = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:876:        var timeslotSunday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:877:        var timeslotMonday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:878:        var timeslotTuesday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:879:        var timeslotWednesday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:880:        var timeslotFriday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:881:        var timeslotSaturday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:882:        var timeslotThursday = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:883:        var currentCurrency = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:884:        var currencyAtRight = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:885:        var refCurrency = database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:886:        var driverNearBy = database.collection('settings').doc("DriverNearBy");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:887:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:888:        refCurrency.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:889:            var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:890:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:891:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:892:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:893:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:894:        var packagingChargeEnable = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:895:        var sectionRef = database.collection('sections').doc(section_id);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:896:        sectionRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:897:            var sectionData = snapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:898:            if (sectionData.packagingChargeEnable) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:899:                packagingChargeEnable = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:900:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:901:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:902:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:903:        placeholder.get().then(async function(snapshotsimage) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:904:            var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:905:            placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:906:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:907:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:908:        database.collection('settings').doc("story").get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:909:            var story_data = snapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:910:            if (story_data.isEnabled) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:911:                story_isEnabled = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:912:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:913:            storevideoDuration = story_data.videoDuration;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:914:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:915:        
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:916:        var isSelfDelivery = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:917:        var selfDeliveryRef = database.collection('settings').doc("globalSettings");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:918:        selfDeliveryRef.get().then(async function(settingSnapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:919:            if (settingSnapshots.data()) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:920:                var settingData = settingSnapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:921:                if (settingData.isSelfDelivery) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:922:                    isSelfDelivery = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:923:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:924:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:925:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:926:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:927:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:928:        var dine_in_active = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:929:        driverNearBy.get().then(async function (snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:930:            var driverNearByData = snapshots.data(); 
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:931:            $(".distance-type").text(driverNearByData.distanceType);      
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:932:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:933:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:934:        ref_deliverycharge.get().then(async function(snapshots_charge) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:935:            var deliveryChargeSettings = snapshots_charge.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:936:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:937:            try {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:938:                if (deliveryChargeSettings.vendor_can_modify) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:939:                    deliveryChargeFlag = true;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:940:                    $("#delivery_charges_per_km").val(deliveryChargeSettings.delivery_charges_per_km);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:941:                    $("#minimum_delivery_charges").val(deliveryChargeSettings.minimum_delivery_charges);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:942:                    $("#minimum_delivery_charges_within_km").val(deliveryChargeSettings.minimum_delivery_charges_within_km);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:943:                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:944:                    deliveryChargeFlag = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:945:                    $("#delivery_charges_per_km").val(deliveryChargeSettings.delivery_charges_per_km);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:946:                    $("#minimum_delivery_charges").val(deliveryChargeSettings.minimum_delivery_charges);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:947:                    $("#minimum_delivery_charges_within_km").val(deliveryChargeSettings.minimum_delivery_charges_within_km);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:948:                    $("#delivery_charges_per_km").prop('disabled', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:949:                    $("#minimum_delivery_charges").prop('disabled', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:950:                    $("#minimum_delivery_charges_within_km").prop('disabled', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:951:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:952:            } catch (error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:953:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:954:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:955:        });
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:956:        database.collection('zone').where('publish', '==', true).orderBy('name', 'asc').get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:957:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:958:                var data = listval.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:959:                var area = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:960:                data.area.forEach((location) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:961:                    area.push({
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:962:                        'latitude': location.latitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:963:                        'longitude': location.longitude
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:964:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:965:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:966:                $('#zone').append($("<option></option>")
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:967:                    .attr("value", data.id)
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:968:                    .attr("data-area", JSON.stringify(area))
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:969:                    .text(data.name));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:970:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:971:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:972:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:973:        $("#vendor_cuisines").chosen({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:974:            "placeholder_text": "{{ trans('lang.select_cuisines') }}"
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:975:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:976:        $(document).ready(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:977:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:978:            ref_sections.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:979:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:980:                    var data = listval.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:981:                    if (data.serviceTypeFlag == "delivery-service" || data.serviceTypeFlag == "ecommerce-service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:982:                        sections_list.push(data);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:983:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:984:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:985:                })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:986:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:987:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:988:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:989:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:990:            ref.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:991:                var vendor = snapshots.docs[0].data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:992:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:993:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:994:                $(".vendor_name").val(vendor.title);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:995:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:996:                $(".vendor_address").val(vendor.location);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:997:                if (vendor.adminCommission) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:998:                    $("#commission_type").val(vendor.adminCommission.type);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:999:                    $(".commission_fix").val(vendor.adminCommission.commission);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1000:                }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1001:                $(".vendor_latitude").val(vendor.latitude);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1002:                $(".vendor_longitude").val(vendor.longitude);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1003:                $(".vendor_description").val(vendor.description);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1004:                if (vendor.section_id != undefined) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1005:                    $("#section_id").val(vendor.section_id);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1006:                    var selected_section = vendor.section_id;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1007:                    sections_list.forEach((section) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1008:                        if (section.id == selected_section) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1009:                            if (section.dine_in_active == true) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1010:                                $("#is_dine_in_feature").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1011:                                $("#services_feature").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1012:                                dine_in_active = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1013:                            }else{
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1014:                                $("#services_feature").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1015:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1016:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1017:                        if (section.id == selected_section && section.serviceTypeFlag == "ecommerce-service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1018:                            $(".delivery_charges_div").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1019:                            $(".ecommerce_div").addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1020:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1021:                        if (section.id == selected_section && section.serviceTypeFlag == "delivery-service" && story_isEnabled == true) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1022:                            $("#story_upload_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1023:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1024:                        if (section.id == selected_section && section.serviceTypeFlag == "delivery-service" && isSelfDelivery) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1025:                            $('.selfDeliveryOption').removeClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1026:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1027:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1028:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1029:                }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1030:                if (vendor.hasOwnProperty('zoneId') && vendor.zoneId != '') {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1031:                    $("#zone").val(vendor.zoneId);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1032:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1033:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1034:                if (vendor.opentime) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1035:                    vendor.opentime = moment(vendor.opentime, 'hh:mm A').format('HH:mm');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1036:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1037:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1038:                if (vendor.closetime) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1039:                    vendor.closetime = moment(vendor.closetime, 'hh:mm A').format('HH:mm');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1040:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1041:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1042:                $("#opentime").val(vendor.opentime);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1043:                $("#closetime").val(vendor.closetime);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1044:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1045:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1046:                if (vendor.openDineTime) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1047:                    vendor.openDineTime = moment(vendor.openDineTime, 'hh:mm A').format('HH:mm');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1048:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1049:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1050:                if (vendor.closeDineTime) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1051:                    vendor.closeDineTime = moment(vendor.closeDineTime, 'hh:mm A').format('HH:mm');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1052:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1053:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1054:                $("#openDineTime").val(vendor.openDineTime);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1055:                $("#closeDineTime").val(vendor.closeDineTime);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1056:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1057:                if (vendor.hasOwnProperty('enabledDiveInFuture')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1058:                    if (vendor.enabledDiveInFuture) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1059:                        $("#dine_in_feature").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1060:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1061:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1062:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1063:                if (vendor.hasOwnProperty('restaurantMenuPhotos')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1064:                    restaurantMenuPhotos = vendor.restaurantMenuPhotos;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1065:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1066:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1067:                if (vendor.hasOwnProperty('restaurantCost')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1068:                    $(".vendor_cost").val(vendor.restaurantCost);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1069:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1070:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1071:                for (var key in vendor.filters) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1072:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1073:                    if (key == "Free Wi-Fi" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1074:                        $("#Free_Wi_Fi").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1075:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1076:                    if (key == "Good for Breakfast" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1077:                        $("#Good_for_Breakfast").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1078:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1079:                    if (key == "Good for Dinner" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1080:                        $("#Good_for_Dinner").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1081:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1082:                    if (key == "Good for Lunch" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1083:                        $("#Good_for_Lunch").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1084:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1085:                    if (key == "Live Music" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1086:                        $("#Live_Music").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1087:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1088:                    if (key == "Outdoor Seating" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1089:                        $("#Outdoor_Seating").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1090:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1091:                    if (key == "Takes Reservations" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1092:                        $("#Takes_Reservations").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1093:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1094:                    if (key == "Vegetarian Friendly" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1095:                        $("#Vegetarian_Friendly").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1096:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1097:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1098:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1099:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1100:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1101:                vendor_photos = vendor.photos;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1102:                var photos = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1103:                var menuCardPhotos = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1104:                if (vendor_photos.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1105:                    vendor.photos.forEach((photo) => {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1106:                        photocount++;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1107:                        photos = photos + '<span class="image-item" id="photo_' + photocount + '"><span class="remove-btn" data-id="' + photocount + '" data-img="' + photo + '" data-status="old"><i class="fa fa-remove"></i></span><img width="100px" id="" height="auto" src="' + photo + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1108:                    })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1109:                }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1110:                if (photos) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1111:                    $("#photos").html(photos);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1112:                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1113:                    $("#photos").html('<p>photos not available.</p>');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1114:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1115:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1116:                if (vendor.author != null && vendor.author != '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1117:                    var route1 = '{{ route('vendors.edit', ':id') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1118:                    route1 = route1.replace(':id', vendor.author);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1119:                    $('.profileRoute').attr('href', route1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1120:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1121:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1122:                if (vendor.hasOwnProperty('restaurantMenuPhotos') && vendor.restaurantMenuPhotos != null) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1123:                    vendor_menu_photos = vendor.restaurantMenuPhotos;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1124:                    vendor.restaurantMenuPhotos.forEach((photo) => {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1125:                        menuPhotoCount++;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1126:                        menuCardPhotos = menuCardPhotos + '<span class="image-item" id="photo_menu_' + menuPhotoCount + '"><span class="remove-menu-btn" data-id="' + menuPhotoCount + '" data-img="' + photo + '" data-status="old"><i class="fa fa-remove"></i></span><img width="100px" id="" height="auto" src="' + photo + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1127:                    })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1128:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1129:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1130:                for (var key in vendor.filters) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1131:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1132:                    if (key == "Free Wi-Fi" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1133:                        $("#Free_Wi_Fi").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1134:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1135:                    if (key == "Good for Breakfast" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1136:                        $("#Good_for_Breakfast").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1137:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1138:                    if (key == "Good for Dinner" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1139:                        $("#Good_for_Dinner").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1140:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1141:                    if (key == "Good for Lunch" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1142:                        $("#Good_for_Lunch").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1143:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1144:                    if (key == "Live Music" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1145:                        $("#Live_Music").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1146:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1147:                    if (key == "Outdoor Seating" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1148:                        $("#Outdoor_Seating").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1149:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1150:                    if (key == "Takes Reservations" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1151:                        $("#Takes_Reservations").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1152:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1153:                    if (key == "Vegetarian Friendly" && vendor.filters[key] == "Yes") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1154:                        $("#Vegetarian_Friendly").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1155:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1156:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1157:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1158:                if (vendor.hasOwnProperty('specialDiscountEnable')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1159:                    if (vendor.specialDiscountEnable) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1160:                        $("#enable_special_offer").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1161:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1162:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1163:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1164:                if (vendor.hasOwnProperty('specialDiscount')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1165:                    for (i = 0; i < vendor.specialDiscount.length; i++) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1166:                        var day = vendor.specialDiscount[i]['day'];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1167:                        if (vendor.specialDiscount[i]['timeslot'].length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1168:                            for (j = 0; j < vendor.specialDiscount[i]['timeslot'].length; j++) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1169:                                $(".restaurant_discount_options_" + day + "_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1170:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1171:                                if (vendor.specialDiscount[i]) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1172:                                    if (vendor.specialDiscount[i]['timeslot']) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1173:                                        if (vendor.specialDiscount[i]['timeslot'].length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1174:                                            if (vendor.specialDiscount[i]['timeslot'][j]) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1175:                                                var timeslot = vendor.specialDiscount[i]['timeslot'][j];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1176:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1177:                                                if (timeslot['discount']) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1178:                                                    var discount = timeslot['discount'];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1179:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1180:                                                    var TimeslotVar = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1181:                                                        'discount': timeslot[`discount`],
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1182:                                                        'from': timeslot[`from`],
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1183:                                                        'to': timeslot[`to`],
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1184:                                                        'type': timeslot[`type`],
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1185:                                                        'discount_type': timeslot[`discount_type`]
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1186:                                                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1187:                                                    if (day == 'Sunday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1188:                                                        timeslotSunday.push(TimeslotVar);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1189:                                                    } else if (day == 'Monday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1190:                                                        timeslotMonday.push(TimeslotVar);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1191:                                                    } else if (day == 'Tuesday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1192:                                                        timeslotTuesday.push(TimeslotVar);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1193:                                                    } else if (day == 'Wednesday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1194:                                                        timeslotWednesday.push(TimeslotVar);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1195:                                                    } else if (day == 'Thursday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1196:                                                        timeslotThursday.push(TimeslotVar);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1197:                                                    } else if (day == 'Friday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1198:                                                        timeslotFriday.push(TimeslotVar);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1199:                                                    } else if (day == 'Saturday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1200:                                                        timeslotSaturday.push(TimeslotVar);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1201:                                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1202:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1203:                                                    let dineInOption = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1204:                                                    if (typeof dine_in_active !== 'undefined' && dine_in_active === true) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1205:                                                        dineInOption = '<option value="dinein"/>Dine-in Discount</option>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1206:                                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1207:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1208:                                                    $('#special_offer_table_' + day + ' tr:last').after('<tr>' +
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1209:                                                        '<td class="" style="width:10%;"><input type="time" class="form-control ' + i + '_' + j + '_row" value="' + timeslot[`from`] + '" id="openTime' + day + j + i + '" onchange="replaceText(`' + i + '`,`' + j + '`,`specialDiscount`)"></td>' +
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1210:                                                        '<td class="" style="width:10%;"><input type="time" class="form-control ' + i + '_' + j + '_row" value="' + timeslot[`to`] + '" id="closeTime' + day + j + i + '" onchange="replaceText(`' + i + '`,`' + j + '`,`specialDiscount`)"></td>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1211:                                                        '<td class="" style="width:30%;">' +
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1212:                                                            '<input type="number" class="form-control ' + i + '_' + j + '_row" value="' + timeslot[`discount`] + '" style="width:60%;" id="discount' + day + j + i + '" onchange="replaceText(`' + i + '`,`' + j + '`,`specialDiscount`)">' +
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1213:                                                            '<select id="discount_type' + day + j + i + '" class="form-control ' + i + '_' + j + '_row"  style="width:40%;" onchange="replaceText(`' + i + '`,`' + j + '`,`specialDiscount`)">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1214:                                                                '<option value="percentage"/>%</option>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1215:                                                                '<option value="amount"/>' + currentCurrency + '</option>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1216:                                                            '</select>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1217:                                                        '</td>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1218:                                                        '<td style="width:30%;">' +
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1219:                                                            '<select id="type' + day + j + i + '" class="form-control ' + i + '_' + j + '_row" onchange="replaceText(`' + i + '`,`' + j + '`,`specialDiscount`)">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1220:                                                                '<option value="delivery"/>Delivery Discount</option>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1221:                                                                dineInOption +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1222:                                                            '</select>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1223:                                                        '</td>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1224:                                                        '<td class="action-btn" style="width:20%;">' +
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1225:                                                            '<button type="button" class="btn btn-primary ' + i + '_' + j + '_row  specialDiscount_' + i + '_' + j + '"  onclick="updateMoreFunctionButton(`' + day + '`,`' + j + '`,`' + i + '`)" ><i class="fa fa-edit"></i></button>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1226:                                                            '&nbsp;&nbsp;<button type="button" class="btn btn-primary ' + i + '_' + j + '_row" onclick="deleteOffer(`' + day + '`,`' + j + '`,`' + i + '`)" ><i class="fa fa-trash"></i></button>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1227:                                                        '</td></tr>');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1228:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1229:                                                    if (timeslot[`type`] == 'amount') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1230:                                                        $('#discount_type' + day + j + i).val(timeslot[`type`]);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1231:                                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1232:                                                    if (timeslot[`discount_type`] == 'dinein') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1233:                                                        $('#type' + day + j + i).val('dinein');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1234:                                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1235:                                                        $('#type' + day + j + i).val('delivery');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1236:                                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1237:                                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1238:                                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1239:                                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1240:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1241:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1242:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1243:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1244:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1245:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1246:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1247:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1248:                if (vendor.hasOwnProperty('workingHours')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1249:                    for (i = 0; i < vendor.workingHours.length; i++) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1250:                        var day = vendor.workingHours[i]['day'];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1251:                        if (vendor.workingHours[i]['timeslot'].length != 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1252:                            for (j = 0; j < vendor.workingHours[i]['timeslot'].length; j++) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1253:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1254:                                $(".restaurant_discount_options_" + day + "_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1255:                                var timeslot = vendor.workingHours[i]['timeslot'][j];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1256:                                var discount = vendor.workingHours[i]['timeslot'][j]['discount'];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1257:                                var TimeslotHourVar = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1258:                                    'from': timeslot[`from`],
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1259:                                    'to': timeslot[`to`]
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1260:                                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1261:                                if (day == 'Sunday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1262:                                    timeslotworkSunday.push(TimeslotHourVar);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1263:                                } else if (day == 'Monday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1287:                                    '<td class="action-btn" style="width:20%;">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1288:                                    '<button type="button" class="btn btn-primary  ' + i + '_' + j + '_row workingHours_' + i + '_' + j + '"  onclick="updatehoursFunctionButton(`' + day + '`,`' + j + '`,`' + i + '`,this)" ><i class="fa fa-edit"></i></button>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1289:                                    '&nbsp;&nbsp;<button type="button" class="btn btn-primary ' + i + '_' + j + '_row" onclick="deleteWorkingHour(`' + day + '`,`' + j + '`,`' + i + '`)" ><i class="fa fa-trash"></i></button>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1290:                                    '</td></tr>');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1291:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1292:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1293:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1294:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1295:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1296:                }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1297:                if (menuCardPhotos) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1298:                    $("#photos_menu_card").html(menuCardPhotos);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1299:                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1300:                    $("#photos_menu_card").html('<p>Menu card photos not available.</p>');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1301:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1302:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1303:                vendorOwnerOnline = vendor.isActive;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1304:                if (vendor.hasOwnProperty('enabledDiveInFuture') && vendor.enabledDiveInFuture == true) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1305:                    $(".divein_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1306:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1307:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1308:                vendorOwnerOnline = vendor.isActive;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1309:                photo = vendor.photo;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1310:                vendorOwnerId = vendor.author;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1311:                await database.collection('users').where("id", "==", vendor.author).get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1312:                    snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1313:                        var user = listval.data();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1314:                        ownerId = user.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1315:                    })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1316:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1317:                var selected_category = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1318:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1319:                if (vendor.hasOwnProperty('categoryID') && vendor.categoryID != null && vendor.categoryID !== '') {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1320:                    let categoryIDs = Array.isArray(vendor.categoryID) ? vendor.categoryID : [vendor.categoryID];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1321:                    $.each(categoryIDs, function(index, catId) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1322:                        selected_category.push(catId);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1323:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1324:                }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1325:                await database.collection('vendor_categories').where('publish', '==', true).where('section_id', '==', vendor.section_id).get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1326:                    if ($("#vendor_cuisines").data('chosen')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1327:                        $('#vendor_cuisines').chosen('destroy');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1328:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1329:                    snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1330:                        var data = listval.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1331:                        var selected = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1332:                        if ($.inArray(data.id, selected_category) !== -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1333:                            var selected = 'selected="selected"';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1334:                        }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1335:                        var option = '<option value="' + data.id + '" ' + selected + '>' + data.title + '</option>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1336:                        $('#vendor_cuisines').append(option);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1337:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1338:                    })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1339:                    $("#vendor_cuisines").show().chosen({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1340:                        "placeholder_text": "{{ trans('lang.select_cuisines') }}"
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1341:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1342:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1343:                if (vendor.hasOwnProperty('phonenumber')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1344:                    if (vendor.phonenumber.includes('+')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1345:                        $(".vendor_phone").val('+' + EditPhoneNumber(vendor.phonenumber.slice(1)));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1346:                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1347:                        $(".vendor_phone").val(EditPhoneNumber(vendor.phonenumber));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1348:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1349:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1350:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1351:                if (vendor.deliveryCharge && deliveryChargeFlag) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1352:                    $("#delivery_charges_per_km").val(vendor.deliveryCharge.delivery_charges_per_km);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1353:                    $("#minimum_delivery_charges").val(vendor.deliveryCharge.minimum_delivery_charges);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1354:                    $("#minimum_delivery_charges_within_km").val(vendor.deliveryCharge.minimum_delivery_charges_within_km);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1355:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1356:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1357:                await getRestaurantStory(vendor.id);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1358:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1359:                if (story_vedios.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1360:                    var html = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1361:                    for (var i = 0; i < story_vedios.length; i++) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1362:                        html += '<div class="col-md-3" id="story_div_' + i + '">\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1363:                            '<div class="video-inner"><video width="320px" height="240px"\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1364:                            '                                   controls="controls">\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1365:                            '                            <source src="' + story_vedios[i] + '"\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1366:                            '            type="video/mp4"></video><span class="remove-story-video" data-id="' + i + '" data-img="' + story_vedios[i] + '"><i class="fa fa-remove"></i></span></div></div>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1367:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1368:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1369:                    jQuery("#story_vedios").append(html);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1370:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1371:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1372:                if (story_thumbnail) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1373:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1374:                    html = '<div class="col-md-3"><div class="thumbnail-inner"><span class="remove-story-thumbnail" data-img="' + story_thumbnail + '"><i class="fa fa-remove"></i></span><img id="story_thumbnail_image" src="' + story_thumbnail + '" width="150px" height="150px;" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></div></div>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1375:                    jQuery("#story_thumbnail").html(html);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1376:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1377:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1378:                if (vendor.hasOwnProperty('isSelfDelivery') && vendor.isSelfDelivery != null && vendor.isSelfDelivery != '' && vendor.isSelfDelivery) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1379:                    $('#enable_self_delivery').prop('checked', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1380:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1381:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1382:                if (packagingChargeEnable) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1383:                    $('.packagingChargeEnable').removeClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1384:                    $('#packagingCharge').val(vendor.packagingCharge);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1385:                    $('#packagingChargeDiv').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1386:                }else{
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1387:                    $('.packagingChargeEnable').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1388:                    $('#packagingChargeDiv').hide();                   
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1389:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1390:                jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1391:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1392:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1393:            async function getRestaurantStory(vendorId) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1394:                await database.collection('story').where('vendorID', '==', vendorId).get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1395:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1396:                    if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1397:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1398:                        var story_data = snapshots.docs[0].data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1399:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1400:                        story_vedios = story_data.videoUrl;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1401:                        story_thumbnail = story_data.videoThumbnail;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1402:                        story_thumbnail_oldfile = story_data.videoThumbnail;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1403:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1404:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1405:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1406:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1407:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1408:            $(".edit-form-btn").click(async function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1409:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1410:                var vendorname = $(".vendor_name").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1411:                var cuisines = $("#vendor_cuisines").val();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1412:                var categoryTitle = $("#vendor_cuisines option:selected").map(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1413:                    return $(this).text();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1414:                }).get();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1415:                var address = $(".vendor_address").val();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1416:                var latitude = parseFloat($(".vendor_latitude").val());
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1417:                var longitude = parseFloat($(".vendor_longitude").val());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1418:                var description = $(".vendor_description").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1419:                var phonenumber = $(".vendor_phone").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1420:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1421:                var enabledDiveInFuture = $("#dine_in_feature").is(':checked');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1422:                var change_expiry_date = $('#change_expiry_date').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1423:                var enable_self_delivery = $("#enable_self_delivery").is(':checked');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1424:                var packagingCharge = $('#packagingCharge').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1425:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1426:                var zoneId = $('#zone option:selected').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1427:                var zoneArea = $('#zone option:selected').data('area');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1428:                var isInZone = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1429:                if (zoneId && zoneArea) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1430:                    isInZone = checkLocationInZone(zoneArea, longitude, latitude);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1431:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1432:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1433:                if (change_expiry_date != '' && change_expiry_date != null) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1434:                    var subscriptionPlanExpiryDate = firebase.firestore.Timestamp.fromDate(new Date(
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1435:                        change_expiry_date));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1436:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1437:                    var subscriptionPlanExpiryDate = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1438:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1439:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1440:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1441:                var commissionType = $("#commission_type").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1442:                var fixCommission = $(".commission_fix").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1443:                const adminCommission = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1444:                    "type": commissionType,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1445:                    "commission": parseInt(fixCommission),
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1446:                    "enable": true
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1447:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1448:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1449:                var restaurantCost = $(".vendor_cost").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1450:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1451:                var openDineTime = $("#openDineTime").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1452:                var openDineTime_val = $("#openDineTime").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1453:                if (openDineTime) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1454:                    openDineTime = new Date('1970-01-01T' + openDineTime + 'Z')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1455:                        .toLocaleTimeString('en-US', {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1456:                            timeZone: 'UTC',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1457:                            hour12: true,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1458:                            hour: 'numeric',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1459:                            minute: 'numeric'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1460:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1461:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1462:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1463:                var closeDineTime = $("#closeDineTime").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1464:                var closeDineTime_val = $("#closeDineTime").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1465:                if (closeDineTime) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1466:                    closeDineTime = new Date('1970-01-01T' + closeDineTime + 'Z')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1467:                        .toLocaleTimeString('en-US', {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1468:                            timeZone: 'UTC',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1469:                            hour12: true,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1470:                            hour: 'numeric',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1471:                            minute: 'numeric'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1472:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1473:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1474:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1475:                if (dine_in_active == false) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1476:                    enabledDiveInFuture = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1477:                    restaurantCost = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1478:                    openDineTime = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1479:                    closeDineTime = "";
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1480:                    vendor_menu_photos = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1481:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1482:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1483:                var enabledSpecialOffer = $("#enable_special_offer").is(':checked');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1484:                var specialDiscount = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1485:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1486:                var sunday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1487:                    'day': 'Sunday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1488:                    'timeslot': timeslotSunday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1489:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1490:                var monday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1491:                    'day': 'Monday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1492:                    'timeslot': timeslotMonday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1493:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1494:                var tuesday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1495:                    'day': 'Tuesday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1496:                    'timeslot': timeslotTuesday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1497:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1498:                var wednesday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1499:                    'day': 'Wednesday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1500:                    'timeslot': timeslotWednesday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1501:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1502:                var thursday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1503:                    'day': 'Thursday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1504:                    'timeslot': timeslotThursday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1505:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1506:                var friday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1507:                    'day': 'Friday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1508:                    'timeslot': timeslotFriday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1509:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1510:                var Saturday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1511:                    'day': 'Saturday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1512:                    'timeslot': timeslotSaturday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1513:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1514:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1515:                specialDiscount.push(monday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1516:                specialDiscount.push(tuesday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1517:                specialDiscount.push(wednesday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1518:                specialDiscount.push(thursday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1519:                specialDiscount.push(friday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1520:                specialDiscount.push(Saturday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1521:                specialDiscount.push(sunday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1522:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1523:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1524:                var workingHours = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1525:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1526:                var sunday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1527:                    'day': 'Sunday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1528:                    'timeslot': timeslotworkSunday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1529:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1530:                var monday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1531:                    'day': 'Monday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1532:                    'timeslot': timeslotworkMonday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1533:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1534:                var tuesday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1535:                    'day': 'Tuesday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1536:                    'timeslot': timeslotworkTuesday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1537:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1538:                var wednesday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1539:                    'day': 'Wednesday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1540:                    'timeslot': timeslotworkWednesday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1541:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1542:                var thursday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1543:                    'day': 'Thursday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1544:                    'timeslot': timeslotworkThursday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1545:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1546:                var friday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1547:                    'day': 'Friday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1548:                    'timeslot': timeslotworkFriday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1549:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1550:                var Saturday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1551:                    'day': 'Saturday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1552:                    'timeslot': timeslotworkSaturday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1553:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1554:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1555:                workingHours.push(monday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1556:                workingHours.push(tuesday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1557:                workingHours.push(wednesday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1558:                workingHours.push(thursday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1559:                workingHours.push(friday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1600:                    "Good for Lunch": Good_for_Lunch,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1601:                    "Live Music": Live_Music,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1602:                    "Outdoor Seating": Outdoor_Seating,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1603:                    "Takes Reservations": Takes_Reservations,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1604:                    "Vegetarian Friendly": Vegetarian_Friendly
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1605:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1606:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1607:                var delivery_charges_per_km = parseInt($("#delivery_charges_per_km").val());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1608:                var minimum_delivery_charges = parseInt($("#minimum_delivery_charges").val());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1609:                var minimum_delivery_charges_within_km = parseInt($("#minimum_delivery_charges_within_km").val());
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1610:                var deliveryCharge = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1611:                    'delivery_charges_per_km': delivery_charges_per_km,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1612:                    'minimum_delivery_charges': minimum_delivery_charges,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1613:                    'minimum_delivery_charges_within_km': minimum_delivery_charges_within_km
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1614:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1615:                
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1616:                if (vendorname == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1617:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1618:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1619:                    $(".error_top").append("<p>{{ trans('lang.vendor_name_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1620:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1621:                    jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1622:                } else if (cuisines == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1623:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1624:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1625:                    $(".error_top").append("<p>{{ trans('lang.vendor_cuisine_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1626:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1627:                    jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1628:                } else if (phonenumber == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1629:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1630:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1631:                    $(".error_top").append("<p>{{ trans('lang.vendor_phone_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1632:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1633:                    jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1634:                } else if (address == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1635:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1636:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1637:                    $(".error_top").append("<p>{{ trans('lang.vendor_address_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1638:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1639:                    jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1640:                }else if (zoneId == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1641:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1642:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1643:                    $(".error_top").append("<p>{{ trans('lang.select_zone_help') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1644:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1645:                    jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1646:                } else if (isNaN(latitude)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1647:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1648:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1649:                    $(".error_top").append("<p>{{ trans('lang.vendor_lattitude_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1650:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1651:                    jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1652:                } else if (latitude < -90 || latitude > 90) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1653:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1654:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1655:                    $(".error_top").append("<p>{{ trans('lang.vendor_lattitude_limit_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1656:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1657:                    jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1658:                } else if (isNaN(longitude)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1659:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1660:                    $(".error_top").html("");
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1661:                    $(".error_top").append("<p>{{ trans('lang.vendor_longitude_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1662:                    window.scrollTo(0, 0);                                        
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1663:                    jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1664:                } else if (longitude < -180 || longitude > 180) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1665:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1666:                    $(".error_top").html("");
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1667:                    $(".error_top").append("<p>{{ trans('lang.vendor_longitude_limit_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1668:                    window.scrollTo(0, 0);                                        
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1669:                    jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1670:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1671:                } else if (isInZone == false) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1672:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1673:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1674:                    $(".error_top").append("<p>{{ trans('lang.invalid_location_zone') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1675:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1676:                    jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1677:                }else if (description == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1678:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1679:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1680:                    $(".error_top").append("<p>{{ trans('lang.vendor_description_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1681:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1682:                    jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1683:                } else if (packagingChargeEnable && packagingCharge < 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1684:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1685:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1686:                    $(".error_top").append("<p>{{ trans('lang.packagingCharge_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1687:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1688:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1689:                    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1690:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1691:                    coordinates = new firebase.firestore.GeoPoint(latitude, longitude);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1692:                    await storeImageData().then(async (IMG) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1693:                        await storeGalleryImageData().then(async (GalleryIMG) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1694:                            await storeMenuImageData().then(async (MenuIMG) => {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1695:                                geoFirestore.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1696:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1697:                                    'title': vendorname,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1698:                                    'description': description,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1699:                                    'latitude': latitude,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1700:                                    'longitude': longitude,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1701:                                    'location': address,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1702:                                    'photo': (Array.isArray(GalleryIMG) && GalleryIMG.length > 0) ? GalleryIMG[0] : null,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1703:                                    'photos': GalleryIMG,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1704:                                    'categoryID': cuisines,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1705:                                    'phonenumber': phonenumber,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1706:                                    'categoryTitle': categoryTitle,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1707:                                    'coordinates': coordinates,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1708:                                    'filters': filters_new,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1709:                                    'enabledDiveInFuture': enabledDiveInFuture,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1710:                                    'specialDiscountEnable': enabledSpecialOffer,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1711:                                    'restaurantMenuPhotos': MenuIMG,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1712:                                    'restaurantCost': restaurantCost,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1713:                                    'openDineTime': openDineTime,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1714:                                    'closeDineTime': closeDineTime,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1715:                                    'specialDiscount': specialDiscount,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1716:                                    'workingHours': workingHours,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1717:                                    'adminCommission': adminCommission,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1718:                                    'isSelfDelivery': enable_self_delivery,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1719:                                    'zoneId': zoneId,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1720:                                    'packagingCharge': packagingCharge ? packagingCharge : '0'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1721:                                }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1722:                                    if (story_vedios.length > 0 || story_thumbnail != '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1723:                                        if (story_vedios.length > 0 && story_thumbnail == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1724:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1725:                                            $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1726:                                            $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1727:                                            $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1728:                                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1729:                                            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1730:                                            return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1731:                                        } else if (story_thumbnail && story_vedios.length == 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1732:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1733:                                            $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1734:                                            $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1735:                                            $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1736:                                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1737:                                            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1738:                                            return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1739:                                        } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1740:                                            database.collection('story').doc(id).set({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1741:                                                    'createdAt': new Date(),
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1742:                                                    'sectionID': section_id,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1743:                                                    'vendorID': id,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1744:                                                    'videoThumbnail': IMG.storyThumbnailImage,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1745:                                                    'videoUrl': story_vedios,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1746:                                                })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1747:                                                .then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1748:                                                    jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1749:                                                    if (deliveryChargeFlag) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1750:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1751:                                                        geoFirestore.collection('vendors').doc(id).update({
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1752:                                                            'deliveryCharge': deliveryCharge
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1753:                                                        }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1754:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1755:                                                            window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1756:                                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1757:                                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1758:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1759:                                                        window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1760:                                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1761:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1762:                                                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1763:                                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1764:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1765:                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1766:                                        jQuery("#data-table_processing").hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1767:                                        if (deliveryChargeFlag) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1768:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1769:                                            geoFirestore.collection('vendors').doc(id).update({
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1770:                                                'deliveryCharge': deliveryCharge
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1771:                                            }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1772:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1773:                                                window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1774:                                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1775:                                        } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1776:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1777:                                            window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1778:                                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1779:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1780:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1781:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1782:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1783:                                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1784:                            }).catch(err => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1785:                                jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1786:                                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1787:                                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1788:                                $(".error_top").append("<p>" + err + "</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1789:                                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1790:                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1791:                        }).catch(err => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1792:                            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1793:                            $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1794:                            $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1795:                            $(".error_top").append("<p>" + err + "</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1796:                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1797:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1798:                    }).catch(err => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1799:                        jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1800:                        $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1801:                        $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1802:                        $(".error_top").append("<p>" + err + "</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1803:                        window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1804:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1805:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1806:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1807:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1808:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1813:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1814:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1815:        function replaceTextEdit(i, j, type) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1816:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1817:            $('.' + type + '_' + j + '_' + i).text("Edit");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1818:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1819:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1820:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1821:        $(document).on("click", ".remove-btn", function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1822:            var id = $(this).attr('data-id');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1823:            var photo_remove = $(this).attr('data-img');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1824:            $("#photo_" + id).remove();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1825:            var status = $(this).attr('data-status');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1826:            if (status == "old") {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1827:                galleryImageToDelete.push(firebase.storage().refFromURL(photo_remove));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1828:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1829:            index = vendor_photos.indexOf(photo_remove);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1830:            if (index > -1) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1831:                vendor_photos.splice(index, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1832:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1833:            index = new_added_vendor_photos.indexOf(photo_remove);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1834:            if (index > -1) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1835:                new_added_vendor_photos.splice(index, 1); // 2nd parameter means remove one item only
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1836:                new_added_vendor_photos_filename.splice(index, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1837:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1838:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1839:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1840:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1841:        $(document).on("click", ".remove-menu-btn", function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1842:            var id = $(this).attr('data-id');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1843:            var photo_remove = $(this).attr('data-img');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1844:            var status = $(this).attr('data-status');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1845:            if (status == "old") {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1846:                menuImageToDelete.push(firebase.storage().refFromURL(photo_remove));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1847:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1848:            $("#photo_menu_" + id).remove();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1849:            index = vendor_menu_photos.indexOf(photo_remove);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1850:            if (index > -1) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1851:                vendor_menu_photos.splice(index, 1); // 2nd parameter means remove one item only
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1852:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1853:            index = new_added_vendor_menu.indexOf(photo_remove);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1854:            if (index > -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1855:                new_added_vendor_menu.splice(index, 1); // 2nd parameter means remove one item only
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1856:                new_added_vendor_menu_filename.splice(index, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1857:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1858:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1859:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1860:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1861:        function handleStoryFileSelect(evt) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1862:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1863:            var rests = ["0CwIcsoYhSxYba9DlwuE", "NjYpnm5IhQi0GeeVKXiX", "NjYpnm5IhQi0GeeVKXiX", "XrDAfl3rOWZS11lEIPkI", "a4rYm0HQHskPDGXAlWEt", "wkSUMpzIxl6KmDIKuDVQ"];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1864:            if (jQuery.inArray(id, rests) != -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1865:                alert(doNotUpdateAlert);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1866:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1867:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1868:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1869:            var f = evt.target.files[0];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1870:            var reader = new FileReader();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1871:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1872:            var story_video_duration = $("#story_video_duration").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1873:            var isVideo = document.getElementById('video_file');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1874:            var videoValue = isVideo.value;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1875:            var allowedExtensions = /(\.mp4)$/i;;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1876:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1877:            if (!allowedExtensions.exec(videoValue)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1878:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1879:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1880:                $(".error_top").append("<p>Error: Invalid video type</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1881:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1882:                isVideo.value = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1883:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1884:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1885:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1886:            var video = document.createElement('video');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1887:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1888:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1889:            video.preload = 'metadata';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1890:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1891:            video.onloadedmetadata = function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1954:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1955:        $(document).on("click", ".remove-story-video", function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1956:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1957:            var rests = ["0CwIcsoYhSxYba9DlwuE", "NjYpnm5IhQi0GeeVKXiX", "NjYpnm5IhQi0GeeVKXiX", "XrDAfl3rOWZS11lEIPkI", "a4rYm0HQHskPDGXAlWEt", "wkSUMpzIxl6KmDIKuDVQ"];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1958:            if (jQuery.inArray(id, rests) != -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1959:                alert(doNotUpdateAlert);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1960:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1961:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1962:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1963:            var id = $(this).attr('data-id');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1964:            var photo_remove = $(this).attr('data-img');
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1965:            firebase.storage().refFromURL(photo_remove).delete();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1966:            $("#story_div_" + id).remove();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1967:            index = story_vedios.indexOf(photo_remove);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1968:            $("#video_file").val('');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1969:            if (index > -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1970:                story_vedios.splice(index, 1); // 2nd parameter means remove one item only
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1971:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1972:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1973:            var newhtml = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1974:            if (story_vedios.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1975:                for (var i = 0; i < story_vedios.length; i++) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1976:                    newhtml += '<div class="col-md-3" id="story_div_' + i + '">\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1977:                        '<div class="video-inner"><video width="320px" height="240px"\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1978:                        'controls="controls">\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1979:                        '<source src="' + story_vedios[i] + '"\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1980:                        'type="video/mp4"></video><span class="remove-story-video" data-id="' + i + '" data-img="' + story_vedios[i] + '"><i class="fa fa-remove"></i></span></div></div>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1981:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1982:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1983:            jQuery("#story_vedios").html(newhtml);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1984:            deleteStoryfromCollection();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1985:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1986:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1987:        $(document).on("click", ".remove-story-thumbnail", function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1988:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1989:            var rests = ["0CwIcsoYhSxYba9DlwuE", "NjYpnm5IhQi0GeeVKXiX", "NjYpnm5IhQi0GeeVKXiX", "XrDAfl3rOWZS11lEIPkI", "a4rYm0HQHskPDGXAlWEt", "wkSUMpzIxl6KmDIKuDVQ"];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1990:            if (jQuery.inArray(id, rests) != -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1991:                alert(doNotUpdateAlert);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1992:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1993:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1994:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1995:            var photo_remove = $(this).attr('data-img');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1996:            $("#story_thumbnail").empty();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1997:            story_thumbnail = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1998:            deleteStoryfromCollection();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1999:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2000:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2001:        function deleteStoryfromCollection() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2002:            if (story_vedios.length == 0 && story_thumbnail == '') {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2003:                database.collection('story').where('vendorID', '==', id).get().then(async function(snapshot) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2004:                    if (snapshot.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2005:                        database.collection('story').doc(id).delete();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2006:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2007:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2008:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2009:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2010:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2011:        function handleStoryThumbnailFileSelect(evt) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2012:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2013:            var rests = ["0CwIcsoYhSxYba9DlwuE", "NjYpnm5IhQi0GeeVKXiX", "NjYpnm5IhQi0GeeVKXiX", "XrDAfl3rOWZS11lEIPkI", "a4rYm0HQHskPDGXAlWEt", "wkSUMpzIxl6KmDIKuDVQ"];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2014:            if (jQuery.inArray(id, rests) != -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2015:                alert(doNotUpdateAlert);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2016:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2017:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2018:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2019:            var f = evt.target.files[0];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2020:            var reader = new FileReader();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2021:            var fileInput =
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2022:                document.getElementById('file');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2023:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2024:            var filePath = fileInput.value;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2025:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2026:            // Allowing file type
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2027:            var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2028:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2029:            if (!allowedExtensions.exec(filePath)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2030:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2031:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2032:                $(".error_top").append("<p>Error: Invalid File type</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2033:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2034:                fileInput.value = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2035:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2036:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2037:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2038:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2039:                return function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2040:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2041:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2043:                    var val = f.name;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2044:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2045:                    var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2046:                    var filename = (f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2047:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2048:                    var timestamp = Number(new Date());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2049:                    var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2050:                    story_thumbnail = filePayload;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2051:                    story_thumbnail_filename = filename;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2052:                    if (story_thumbnail) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2053:                        photo = story_thumbnail;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2054:                    } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2055:                        photo = placeholderImage;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2056:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2057:                    var html = '<div class="col-md-3"><div class="thumbnail-inner"><span class="remove-story-thumbnail" data-img="' + story_thumbnail + '"><i class="fa fa-remove"></i></span><img id="story_thumbnail_image" src="' + photo + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'" width="150px" height="150px;"></div></div>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2058:                    jQuery("#story_thumbnail").html(html);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2059:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2060:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2061:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2062:            })(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2063:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2064:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2065:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2066:        function handleFileSelect(evt, type) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2067:            var f = evt.target.files[0];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2068:            var reader = new FileReader();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2069:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2070:                return function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2071:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2072:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2073:                    var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2074:                    var val = f.name;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2075:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2076:                    var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2077:                    var filename = (f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2078:                    var timestamp = Number(new Date());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2079:                    var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2080:                    photo = filePayload;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2081:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2082:                    if (photo) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2083:                        if (type == 'photos') {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2084:                            photocount++;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2085:                            if (photo) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2086:                                photo = photo;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2087:                            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2088:                                photo = placeholderImage;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2089:                            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2090:                            photos_html = '<span class="image-item" id="photo_' + photocount + '"><span class="remove-btn" data-id="' + photocount + '" data-img="' + photo + '" data-status="new"><i class="fa fa-remove"></i></span><img width="100px" id="" height="auto" src="' + photo + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2091:                            $("#photos").append(photos_html);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2092:                            new_added_vendor_photos.push(photo);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2093:                            new_added_vendor_photos_filename.push(filename);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2094:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2095:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2096:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2097:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2098:            })(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2099:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2100:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2101:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2102:        function handleFileSelectowner(evt) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2103:            var f = evt.target.files[0];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2104:            var reader = new FileReader();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2105:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2106:                return function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2107:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2108:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2109:                    var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2110:                    var val = f.name;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2111:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2112:                    var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2113:                    var filename = (f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2114:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2115:                    var timestamp = Number(new Date());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2116:                    var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2117:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2118:                    $(".uploaded_image_owner").html('<img id="uploaded_image_owner" src="' + photo + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'" width="150px" height="150px;">');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2119:                    $(".uploaded_image_owner").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2120:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2121:            })(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2122:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2123:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2124:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2125:        function handleFileSelectMenuCard(evt) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2126:            var f = evt.target.files[0];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2127:            var reader = new FileReader();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2128:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2129:                return function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2130:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2131:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2132:                    var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2133:                    var val = f.name;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2134:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2135:                    var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2136:                    var filename = (f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2137:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2138:                    var timestamp = Number(new Date());
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2139:                    var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2140:                    photo = filePayload;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2141:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2142:                    if (photo) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2143:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2144:                        menuPhotoCount++;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2145:                        if (photo) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2146:                            photo = photo;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2147:                        } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2148:                            photo = placeholderImage;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2149:                        }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2150:                        photos_html = '<span class="image-item" id="photo_menu_' + menuPhotoCount + '"><span class="remove-menu-btn" data-id="' + menuPhotoCount + '" data-img="' + photo + '" data-status="new"><i class="fa fa-remove"></i></span><img width="100px" id="" height="auto" src="' + photo + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2151:                        $("#photos_menu_card").append(photos_html);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2152:                        new_added_vendor_menu.push(photo);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2153:                        new_added_vendor_menu_filename.push(filename);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2154:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2155:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2156:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2157:            })(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2158:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2159:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2160:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2161:        $("#dine_in_feature").change(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2162:            if (this.checked) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2163:                $(".divein_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2164:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2165:                $(".divein_div").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2166:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2167:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2168:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2169:        $(".add_special_offer_restaurant_btn").click(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2170:            $(".special_offer_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2171:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2172:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2173:        var countAddButton = 1;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2174:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2175:        function addMoreButton(day, day2, count) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2176:            count = countAddButton;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2177:            $(".restaurant_discount_options_" + day + "_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2178:            let dineInOption = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2179:            if (dine_in_active === true) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2180:                dineInOption = '<option value="dinein"/>Dine-In Discount</option>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2181:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2182:            $('#special_offer_table_' + day + ' tr:last').after('<tr>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2183:                '<td class="" style="width:10%;"><input type="time" class="form-control" id="openTime' + day + count + '"></td>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2184:                '<td class="" style="width:10%;"><input type="time" class="form-control" id="closeTime' + day + count + '"></td>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2185:                '<td class="" style="width:30%;">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2186:                '<input type="number" class="form-control" id="discount' + day + count + '" style="width:60%;">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2187:                '<select id="discount_type' + day + count + '" class="form-control" style="width:40%;"><option value="percentage"/>%</option><option value="amount"/>' + currentCurrency + '</option></select>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2188:                '</td>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2189:                '<td style="width:30%;"><select id="type' + day + count + '" class="form-control"><option value="delivery"/>Delivery Discount</option>'+ dineInOption + '</select></td>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2190:                '<td class="action-btn" style="width:20%;">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2191:                '<button type="button" class="btn btn-primary save_option_day_button' + day + count + '" onclick="addMoreFunctionButton(`' + day2 + '`,`' + day + '`,' + countAddButton + ')" style="width:62%;">Save</button>' +
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2192:                '</td></tr>');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2193:            countAddButton++;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2194:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2195:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2196:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2197:        function deleteOffer(day, count, i) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2198:            $('.' + i + '_' + count + '_row').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2199:            if (day == 'Sunday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2200:                timeslotSunday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2201:            } else if (day == 'Monday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2202:                timeslotMonday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2203:            } else if (day == 'Tuesday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2204:                timeslotTuesday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2205:            } else if (day == 'Wednesday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2206:                timeslotWednesday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2207:            } else if (day == 'Thursday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2208:                timeslotThursday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2209:            } else if (day == 'Friday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2210:                timeslotFriday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2211:            } else if (day == 'Saturday') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2212:                timeslotSaturday.splice(count, 1);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2213:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2214:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2215:            var specialDiscount = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2216:            var sunday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2217:                'day': 'Sunday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2218:                'timeslot': timeslotSunday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2219:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2220:            var monday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2221:                'day': 'Monday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2222:                'timeslot': timeslotMonday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2223:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2224:            var tuesday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2225:                'day': 'Tuesday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2226:                'timeslot': timeslotTuesday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2227:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2228:            var wednesday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2229:                'day': 'Wednesday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2230:                'timeslot': timeslotWednesday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2231:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2232:            var thursday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2233:                'day': 'Thursday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2234:                'timeslot': timeslotThursday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2235:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2236:            var friday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2237:                'day': 'Friday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2238:                'timeslot': timeslotFriday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2239:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2240:            var Saturday = {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2241:                'day': 'Saturday',
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2242:                'timeslot': timeslotSaturday
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2243:            };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2244:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2245:            specialDiscount.push(monday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2246:            specialDiscount.push(tuesday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2247:            specialDiscount.push(wednesday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2248:            specialDiscount.push(thursday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2249:            specialDiscount.push(friday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2250:            specialDiscount.push(Saturday);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2251:            specialDiscount.push(sunday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2252:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2253:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2254:            database.collection('vendors').doc(id).update({
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2255:                'specialDiscount': specialDiscount
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2256:            }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2257:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2258:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2259:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2260:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2261:        function addMoreFunctionButton(day1, day2, count) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2262:            var discount = $("#discount" + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2263:            var discount_type = $('#discount_type' + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2264:            var type = $('#type' + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2265:            var closeTime = $("#closeTime" + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2266:            var openTime = $("#openTime" + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2267:            if (openTime == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2268:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2269:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2270:                $(".error_top").append("<p>Please enter special offer start time</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2271:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2272:            } else if (closeTime == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2273:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2274:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2275:                $(".error_top").append("<p>Please enter special offer close time</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2276:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2277:            } else if (openTime > closeTime) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2278:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2279:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2280:                $(".error_top").append("<p>Close time can not be less than Open time</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2281:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2282:            } else if (discount == "") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2283:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2284:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2285:                $(".error_top").append("<p>Please Enter discount</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2286:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2287:            } else if (discount > 100 || discount == 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2288:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2289:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2290:                $(".error_top").append("<p>Please Enter valid discount</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2291:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2292:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2293:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2614:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2615:            workingHours.push(monday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2616:            workingHours.push(tuesday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2617:            workingHours.push(wednesday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2618:            workingHours.push(thursday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2619:            workingHours.push(friday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2620:            workingHours.push(Saturday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2621:            workingHours.push(sunday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2622:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2623:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2624:            database.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2625:                'workingHours': workingHours
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2626:            }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2627:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2628:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2629:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2630:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2631:        function updatehoursFunctionButton(day, rowCount, dayCount, buttonElement) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2632:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2633:            const buttonText = buttonElement.textContent.trim();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2634:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2635:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2636:            var to = $("#to" + day + rowCount + dayCount + "").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2637:            var from = $("#from" + day + rowCount + dayCount + "").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2638:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2639:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2640:            if (buttonText == "Edit" || buttonText == "") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2641:                $("#to" + day + rowCount + dayCount).removeAttr('disabled');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2642:                $("#from" + day + rowCount + dayCount).removeAttr('disabled');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2643:                buttonElement.textContent = "Save";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2644:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2645:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2646:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2647:                $("#to" + day + rowCount + dayCount).attr('disabled', "true");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2648:                $("#from" + day + rowCount + dayCount).attr('disabled', "true");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2649:                buttonElement.textContent = "Edit";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2650:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2651:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2652:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2653:            if (to == '' && from == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2654:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2655:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2656:                $(".error_top").append("<p>Please Enter valid time </p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2657:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2658:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2659:            } else if (from > to) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2660:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2661:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2662:                $(".error_top").append("<p>To time can not be less than From time</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2710:        function chkAlphabets3(event, msg) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2711:            if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2712:                document.getElementById(msg).innerHTML = "Accept only Number and Dot(.)";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2713:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2714:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2715:                document.getElementById(msg).innerHTML = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2716:                return true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2717:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2718:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2719:        async function storeImageData() {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2720:            var newPhoto = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2721:            newPhoto['storyThumbnailImage'] = story_thumbnail;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2722:            try {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2723:                if (story_thumbnail != '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2724:                    if (story_thumbnail_oldfile != "" && story_thumbnail != story_thumbnail_oldfile) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2725:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2726:                        var thumbnailOldImageUrlRef = await storage.refFromURL(story_thumbnail_oldfile);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2727:                        imageBucket = thumbnailOldImageUrlRef.bucket;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2728:                        var envBucket = "<?php echo env('FIREBASE_STORAGE_BUCKET'); ?>";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2729:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2730:                        if (imageBucket == envBucket) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2731:                            await thumbnailOldImageUrlRef.delete().then(() => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2732:                                console.log("Old file deleted!")
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2733:                            }).catch((error) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2734:                                console.log("ERR File delete ===", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2735:                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2736:                        } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2737:                            console.log('Bucket not matched');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2738:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2739:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2740:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2741:                    if (story_thumbnail != story_thumbnail_oldfile) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2742:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2743:                        story_thumbnail = story_thumbnail.replace(/^data:image\/[a-z]+;base64,/, "")
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2744:                        var uploadTask = await storageRef.child(story_thumbnail_filename).putString(story_thumbnail, 'base64', {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2745:                            contentType: 'image/jpg'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2746:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2747:                        var downloadURL = await uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2748:                        newPhoto['storyThumbnailImage'] = downloadURL;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2749:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2750:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2751:            } catch (error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2752:                console.log("ERR ===", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2753:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2754:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2755:            return newPhoto;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2756:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2757:        async function storeGalleryImageData() {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2758:            var newPhoto = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2759:            if (vendor_photos.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2760:                newPhoto = vendor_photos;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2761:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2762:            if (new_added_vendor_photos.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2763:                const photoPromises = new_added_vendor_photos.map(async (resPhoto, index) => {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2764:                    resPhoto = resPhoto.replace(/^data:image\/[a-z]+;base64,/, "");
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2765:                    const uploadTask = await storageRef.child(new_added_vendor_photos_filename[index]).putString(resPhoto, 'base64', {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2766:                        contentType: 'image/jpg'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2767:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2768:                    const downloadURL = await uploadTask.ref.getDownloadURL();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2769:                    return {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2770:                        index,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2771:                        downloadURL
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2772:                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2773:                });
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2774:                const photoResults = await Promise.all(photoPromises);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2775:                photoResults.sort((a, b) => a.index - b.index);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2776:                uploadedPhoto = photoResults.map(photo => photo.downloadURL);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2777:                newPhoto = [...newPhoto, ...uploadedPhoto];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2778:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2779:            if (galleryImageToDelete.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2780:                await Promise.all(galleryImageToDelete.map(async (delImage) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2781:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2782:                    imageBucket = delImage.bucket;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2783:                    var envBucket = "<?php echo env('FIREBASE_STORAGE_BUCKET'); ?>";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2784:                    if (imageBucket == envBucket) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2785:                        await delImage.delete().then(() => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2786:                            console.log("Old file deleted!")
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2787:                        }).catch((error) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2788:                            console.log("ERR File delete ===", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2789:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2790:                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2791:                        console.log('Bucket not matched');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2792:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2793:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2794:                }));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2795:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2796:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2797:            return newPhoto;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2798:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2799:        async function storeMenuImageData() {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2800:            var newPhoto = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2801:            if (vendor_menu_photos.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2802:                newPhoto = vendor_menu_photos;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2803:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2804:            if (new_added_vendor_menu.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2805:                await Promise.all(new_added_vendor_menu.map(async (menuPhoto, index) => {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2806:                    menuPhoto = menuPhoto.replace(/^data:image\/[a-z]+;base64,/, "");
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2807:                    var uploadTask = await storageRef.child(new_added_vendor_menu_filename[index]).putString(menuPhoto, 'base64', {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2808:                        contentType: 'image/jpg'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2809:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2810:                    var downloadURL = await uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2811:                    newPhoto.push(downloadURL);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2812:                }));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2813:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2814:            if (menuImageToDelete.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2815:                await Promise.all(menuImageToDelete.map(async (delImage) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2816:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2817:                    imageBucket = delImage.bucket;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2818:                    var envBucket = "<?php echo env('FIREBASE_STORAGE_BUCKET'); ?>";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2819:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2820:                    if (imageBucket == envBucket) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2821:                        await delImage.delete().then(() => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2822:                            console.log("Old file deleted!")
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2823:                        }).catch((error) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2824:                            console.log("ERR File delete ===", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2825:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2826:                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2827:                        console.log('Bucket not matched');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2828:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2829:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2830:                }));
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2831:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2832:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2833:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2834:            return newPhoto;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2835:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2836:        function checkLocationInZone(area, address_lng, address_lat) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2837:            var vertices_x = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2838:            var vertices_y = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2839:            for (j = 0; j < area.length; j++) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2840:                var geopoint = area[j];
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2841:                vertices_x.push(geopoint.longitude);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2842:                vertices_y.push(geopoint.latitude);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2843:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2844:            var points_polygon = (vertices_x.length) - 1;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2845:            if (is_in_polygon(points_polygon, vertices_x, vertices_y, address_lng, address_lat)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2846:                return true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2847:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2848:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2849:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2850:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2851:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2852:        function is_in_polygon($points_polygon, $vertices_x, $vertices_y, $longitude_x, $latitude_y) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2853:            $i = $j = $c = $point = 0;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2854:            for ($i = 0, $j = $points_polygon; $i < $points_polygon; $j = $i++) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2855:                $point = $i;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2856:                if ($point == $points_polygon)
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2857:                    $point = 0;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2858:                if ((($vertices_y[$point] > $latitude_y != ($vertices_y[$j] > $latitude_y)) && ($longitude_x < ($vertices_x[$j] - $vertices_x[$point]) * ($latitude_y - $vertices_y[$point]) / ($vertices_y[$j] - $vertices_y[$point]) + $vertices_x[$point])))
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2859:                    $c = !$c;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2860:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2861:            return $c;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2862:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2863:    </script>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2864:@endsection
```

## FILE: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php
```text
FOUND: C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php

  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:1:@extends('layouts.app')
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:2:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:3:@section('content')
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:4:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:5:<div class="page-wrapper">
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:6:    <div class="row page-titles">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:7:        <div class="col-md-5 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:8:            <h3 class="text-themecolor">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:9:                @if (request()->is('vendors/approved'))
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:10:                    @php $type = 'approved'; @endphp
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:11:                    {{ trans('lang.approved_vendors') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:12:                @elseif(request()->is('vendors/pending'))
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:13:                    @php $type = 'pending'; @endphp
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:14:                    {{ trans('lang.approval_pending_vendors') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:15:                @else
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:16:                    @php $type = 'all'; @endphp
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:17:                    {{ trans('lang.all_vendors') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:18:                @endif
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:19:            </h3>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:20:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:21:        <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:22:            <ol class="breadcrumb">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:23:                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:24:                <li class="breadcrumb-item active">{{trans('lang.vendor_list')}}</li>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:25:            </ol>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:26:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:27:        <div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:28:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:29:    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:30:    <div class="container-fluid">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:31:       <div class="admin-top-section"> 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:32:        <div class="row">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:33:            <div class="col-12">
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:34:                <div class="d-flex top-title-section pb-4 justify-content-between">
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:35:                    <div class="d-flex top-title-left align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:36:                        <span class="icon mr-3"><img src="{{ asset('images/vendor.png') }}"></span>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:37:                        <h3 class="mb-0">{{trans('lang.vendor_list')}}</h3>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:38:                        <span class="counter ml-3 total_count"></span>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:39:                    </div>  
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:40:                    <div class="d-flex top-title-right align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:41:                            <div class="select-box pl-3">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:42:                                <select class="form-control status_selector filteredRecords">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:43:                                    <option value="">{{trans("lang.status")}}</option>
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:44:                                    <option value="active"  >{{trans("lang.active")}}</option>
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:45:                                    <option value="inactive"  >{{trans("lang.in_active")}}</option>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:46:                                </select>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:47:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:48:                            <div class="select-box pl-3">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:49:                                <div id="daterange"><i class="fa fa-calendar"></i>&nbsp;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:50:                                    <span></span>&nbsp; <i class="fa fa-caret-down"></i>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:51:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:52:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:53:                    </div>                  
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:54:                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:55:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:56:        </div> 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:57:    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:58:       </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:59:       <div class="table-list">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:60:       <div class="row">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:61:           <div class="col-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:62:               <div class="card border">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:63:                 <div class="card-header d-flex justify-content-between align-items-center border-0">
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:64:                   <div class="card-header-title">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:65:                        <h3 class="text-dark-2 mb-2 h4">{{trans('lang.vendor_list')}}</h3>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:66:                        <p class="mb-0 text-dark-2">{{trans('lang.vendor_table_text')}}</p>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:67:                   </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:68:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:69:                    <div class="card-header-right d-flex align-items-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:70:                        <div class="card-header-btn mr-3">                   
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:71:                            <a class="btn-primary btn rounded-full" href="{!! route('vendors.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.createe_vendor')}}</a>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:72:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:73:                    </div>     
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:74:                                  
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:75:                 </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:76:                 <div class="card-body">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:77:                         <div class="table-responsive m-t-10">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:78:                            <table id="userTable"
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:79:                                   class="display nowrap table table-hover table-striped table-bordered table table-striped"
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:80:                                   cellspacing="0" width="100%">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:81:                                <thead>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:82:                                <tr>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:83:                                    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:84:                                    <?php if (($type == "approved" && in_array('approve.vendors.delete', json_decode(@session('user_permissions'), true))) 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:85:                                    || ($type == "pending" && in_array('pending.vendors.delete', json_decode(@session('user_permissions'), true))) 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:86:                                    || ($type == "all" && in_array('vendors.delete', json_decode(@session('user_permissions'), true)))) { ?>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:87:
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:88:                                    <th class="delete-all"><input type="checkbox" id="is_active"><label class="col-3 control-label" for="is_active"><a id="deleteAll"
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:89:                                    class="do_not_delete" href="javascript:void(0)"><i class="mdi mdi-delete"></i> {{trans('lang.all')}}</a></label></th>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:90:                                    <?php } ?>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:91:                                    <th>{{trans('lang.vendor_info')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:92:                                    <th>{{trans('lang.store')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:93:                                    <th>{{trans('lang.contact_info')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:94:                                    <th>{{trans('lang.current_plan')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:95:                                    <th>{{trans('lang.expiry_date')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:96:                                    <th>{{trans('lang.date')}}</th>
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:97:                                    <th>{{trans('lang.active')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:98:                                    <?php if (($type == "approved" && in_array('approve.vendors.delete', json_decode(@session('user_permissions'), true))) 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:99:                                    || ($type == "pending" && in_array('pending.vendors.delete', json_decode(@session('user_permissions'), true))) 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:100:                                    || ($type == "all" && in_array('vendors.delete', json_decode(@session('user_permissions'), true)))) { ?>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:101:                                        <th>{{trans('lang.actions')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:102:                                    <?php }?>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:103:                                </tr>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:104:                                </thead>  
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:105:                                <tbody id="append_list1">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:106:                                </tbody>                             
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:107:                            </table>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:108:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:109:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:110:                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:111:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:112:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:113:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:114:    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:115:</div>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:116:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:117:@endsection
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:118:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:119:@section('scripts')
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:120:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:121:<script type="text/javascript">
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:122:
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:123:    var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:124:    var database = firebase.firestore();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:125:    var type = "{{ $type }}";
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:126:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:127:    var user_permissions = '<?php echo @session('user_permissions')?>';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:128:    user_permissions = Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:129:    var checkDeletePermission = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:130:    var checkChatPermission = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:131:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:132:    if (
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:133:        (type == 'pending' && $.inArray('pending.vendors.delete', user_permissions) >= 0) ||
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:134:        (type == 'approved' && $.inArray('approve.vendors.delete', user_permissions) >= 0) ||
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:135:        (type == 'all' && $.inArray('vendors.delete', user_permissions) >= 0)
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:136:    ) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:137:        checkDeletePermission = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:138:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:139:    if ($.inArray('vendors.chat', user_permissions) >= 0)
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:140:    {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:141:        checkChatPermission = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:142:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:143:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:144:    $('.status_selector').select2({
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:145:        placeholder: '{{trans("lang.status")}}',  
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:146:        minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:147:        allowClear: true 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:148:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:149:    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:150:    $('select').on("select2:unselecting", function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:151:        var self = $(this);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:152:        setTimeout(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:153:            self.select2('close');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:154:        }, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:155:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:156:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:157:    function setDate() {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:158:        $('#daterange span').html('{{trans("lang.select_range")}}');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:159:        $('#daterange').daterangepicker({
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:160:            autoUpdateInput: false, 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:161:        }, function (start, end) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:170:            $('#daterange span').html('{{trans("lang.select_range")}}');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:171:            $('.filteredRecords').trigger('change'); 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:172:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:173:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:174:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:175:    setDate(); 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:176:    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:177:    $('.filteredRecords').change(async function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:178:        var status = $('.status_selector').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:179:        var daterangepicker = $('#daterange').data('daterangepicker');
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:180:        ref = database.collection('users').where("role", "==", "vendor");
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:181:        if(section_id){           
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:182:            ref = ref.where('sectionId', 'in', [section_id, '']);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:183:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:184:        if ($('#daterange span').html() != '{{trans("lang.select_range")}}' && daterangepicker) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:185:            var from = moment(daterangepicker.startDate).toDate();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:186:            var to = moment(daterangepicker.endDate).toDate();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:187:            if (from && to) { 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:188:                var fromDate = firebase.firestore.Timestamp.fromDate(new Date(from));
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:189:                ref = ref.where('createdAt', '>=', fromDate);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:190:                var toDate = firebase.firestore.Timestamp.fromDate(new Date(to));
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:191:                ref = ref.where('createdAt', '<=', toDate);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:192:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:193:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:194:        if (status) {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:195:            ref = (status == "active") ? ref.where('active', '==', true) : ref.where('active', '==', false);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:196:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:197:        $('#userTable').DataTable().ajax.reload();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:198:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:199:    
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:200:    var ref = database.collection('users').where("role", "==", "vendor");
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:201:    if(section_id){       
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:202:        ref = ref.where('sectionId', 'in', [section_id, '']);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:203:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:204:    ref = ref.orderBy('createdAt', 'desc');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:205:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:206:    var placeholderImage = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:207:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:208:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:209:$(document).ready(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:210:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:211:    $(document.body).on('click', '.redirecttopage', function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:212:        var url = $(this).attr('data-url');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:213:        window.location.href = url;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:214:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:215:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:216:    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:217:    $('body').tooltip({
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:218:        selector: '[data-toggle="tooltip"]'
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:219:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:220:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:221:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:222:    var placeholder = database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:223:    placeholder.get().then(async function (snapshotsimage) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:224:        var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:225:        placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:226:    })
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:227:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:228:    $(document).on('click', '.dt-button-collection .dt-button', function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:229:        $('.dt-button-collection').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:230:        $('.dt-button-background').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:231:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:232:    $(document).on('click', function (event) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:233:        if (!$(event.target).closest('.dt-button-collection, .dt-buttons').length) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:234:            $('.dt-button-collection').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:235:            $('.dt-button-background').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:236:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:237:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:238:    var fieldConfig = {        
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:239:        columns: [
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:240:            { key: 'name', header: "{{trans('lang.vendor_info')}}" },
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:241:            { key: 'storeName', header: "{{trans('lang.store')}}" }, 
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:242:            { key: 'contactInfo', header: "{{trans('lang.contact_info')}}" }, 
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:243:            { key: 'activePlanName', header: "{{trans('lang.active_subscription_plan')}}" },    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:244:            { key: 'exportExpiryDate', header: "{{trans('lang.plan_expire_at')}}" },  
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:245:            { key: 'active', header: "{{trans('lang.active')}}" },
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:246:            { key: 'createdAt', header: "{{trans('lang.date')}}" },
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:247:        ],
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:248:        fileName: "{{trans('lang.vendor_list')}}",
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:249:    };
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:250:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:251:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:252:    const table = $('#userTable').DataTable({
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:253:        pageLength: 10, // Number of rows per page
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:254:        processing: false, // Show processing indicator
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:255:        serverSide: true, // Enable server-side processing
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:256:        responsive: true,
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:257:        ajax: async function (data, callback, settings) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:258:            const start = data.start;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:259:            const length = data.length;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:260:            const searchValue = data.search.value.toLowerCase();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:261:            const orderColumnIndex = data.order[0].column;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:262:            const orderDirection = data.order[0].dir;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:263:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:264:          const orderableColumns = (checkDeletePermission) ? ['', 'name', 'storeName', 'contactInfo', 'subscription_plan.name', 'subscriptionExpiryDate', 'createdAt', '', ''] : ['name', 'storeName', 'contactInfo', 'subscription_plan.name', 'subscriptionExpiryDate', 'createdAt', '', ''];
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:265:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:266:            const orderByField = orderableColumns[orderColumnIndex]; // Adjust the index to match your table
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:267:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:268:            if (searchValue.length >= 3 || searchValue.length === 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:269:                $('#data-table_processing').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:270:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:271:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:272:            await ref.get().then(async function (querySnapshot) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:273:                if (querySnapshot.empty) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:274:                    $('.total_count').text(0);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:275:                    console.error("No data found in Firestore.");
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:276:                    $('#data-table_processing').hide(); // Hide loader
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:277:                    callback({
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:278:                        draw: data.draw,
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:279:                        recordsTotal: 0,
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:280:                        recordsFiltered: 0,
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:281:                        data: [] // No data
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:282:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:283:                    return;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:295:                        if (isDocVerified || isAutoVerified) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:296:                            return;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:297:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:298:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:299:                    if (type === 'approved') {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:300:                            if (!isDocVerified && !isAutoVerified) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:301:                            return;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:302:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:303:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:304:
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:305:                    let sid = childData.sectionId;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:306:                    if (
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:307:                        section_id && !(
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:308:                            sid === section_id ||
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:309:                            sid === null ||
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:310:                            sid === '' ||
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:311:                            sid === undefined
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:312:                        )
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:313:                    ) {                       
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:314:                        return;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:315:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:316:                    childData.id = doc.id; // Ensure the document ID is included in the data
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:317:                    childData.name = childData.firstName + ' ' + childData.lastName;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:318:                    if(childData.hasOwnProperty('subscription_plan') && childData.subscription_plan && childData.subscription_plan.name) {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:319:                        childData.activePlanName = childData.subscription_plan.name;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:320:                    }else {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:321:                        childData.activePlanName = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:322:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:323:                    var date='';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:324:                    var time='';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:325:                    if(childData.hasOwnProperty("subscriptionExpiryDate")) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:326:                        try {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:327:                            date=childData.subscriptionExpiryDate.toDate().toDateString();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:328:                            time=childData.subscriptionExpiryDate.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:329:                        } catch(err) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:330:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:331:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:332:
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:333:                    childData.vendorData = childData.vendorID ? await getUserStoreInfo(childData.vendorID) : ''
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:334:                    childData.expiryDate=date+' '+time;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:335:                    childData.phone = (childData.phoneNumber != '' && childData.phoneNumber != null && childData.phoneNumber.slice(0, 1) == '+') ? childData.phoneNumber.slice(1) : childData.phoneNumber;     
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:336:                    childData.maskedPhone = EditPhoneNumber(childData.phone);                       
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:337:                    childData.hasPlusSign = childData.phoneNumber.startsWith('+');                        
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:338:                    childData.exportPhone = childData.hasPlusSign ? `+${childData.maskedPhone}` : childData.maskedPhone;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:339:                    childData.contactInfo = shortEmail(childData.email) + '<br>' + (childData.hasPlusSign ? `+${childData.maskedPhone}` : childData.maskedPhone);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:340:                    if (childData.subscriptionExpiryDate) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:341:                        childData.exportExpiryDate =
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:342:                            childData.subscriptionExpiryDate.toDate().toLocaleDateString() + ' ' +
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:343:                            childData.subscriptionExpiryDate.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:344:                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:345:                        childData.exportExpiryDate = '-';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:346:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:347:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:348:                    if (searchValue) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:349:                        var date = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:350:                        var time = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:351:                        if (childData.hasOwnProperty("createdAt")) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:352:                            try {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:353:                                date = childData.createdAt.toDate().toDateString();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:354:                                time = childData.createdAt.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:355:                            } catch (err) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:356:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:357:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:358:                        var createdAt = date + ' ' + time;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:359:                        if (
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:360:                            (childData.name && childData.name.toString().toLowerCase().includes(searchValue)) ||
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:361:                            (childData.vendorData && childData.vendorData.title && childData.vendorData.title.toString().toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:362:                            (childData.email && childData.email.toString().toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:363:                            (childData.expiryDate&&childData.expiryDate.toString().toLowerCase().indexOf(searchValue)>-1)||
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:364:                            (childData.hasOwnProperty('activePlanName')&&childData.activePlanName.toLowerCase().toString().includes(searchValue))||
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:365:                            (createdAt && createdAt.toString().toLowerCase().indexOf(searchValue) > -1) || (childData.phoneNumber && childData.phoneNumber.toString().toLowerCase().includes(searchValue))
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:366:                        ) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:367:                            filteredRecords.push(childData);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:368:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:369:                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:370:                        filteredRecords.push(childData);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:371:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:372:                }));
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:373:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:374:                filteredRecords.sort((a, b) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:375:                    let aValue = a[orderByField] ;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:376:                    let bValue = b[orderByField] ;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:377:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:378:                   if (orderByField === 'contactInfo') {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:379:                        aValue = a.contactInfo ? a.contactInfo.toString().toLowerCase().trim() : '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:380:                        bValue = b.contactInfo ? b.contactInfo.toString().toLowerCase().trim() : '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:381:                    } else if (orderByField === 'subscriptionExpiryDate') {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:382:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:383:                        aValue=a[orderByField]? new Date(a[orderByField].toDate()).getTime():0;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:384:                        bValue=b[orderByField]? new Date(b[orderByField].toDate()).getTime():0;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:385:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:386:                    } else if (orderByField === 'createdAt' && a[orderByField] != '' && b[orderByField] != '' && a[orderByField] != null && b[orderByField] != null) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:387:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:388:                        /*  aValue = a[orderByField] ? new Date(a[orderByField].toDate()).getTime() : 0;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:389:                            bValue = b[orderByField] ? new Date(b[orderByField].toDate()).getTime() : 0; */
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:390:                        function normalizeDate(v) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:391:                            if (!v) return 0;                             
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:392:                            if (typeof v.toDate === "function") {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:393:                                return new Date(v.toDate()).getTime();  
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:394:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:395:                            if (v instanceof Date) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:396:                                return v.getTime();                    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:397:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:398:                            if (typeof v === "string" || typeof v === "number") {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:399:                                return new Date(v).getTime();         
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:400:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:401:                            return 0;  
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:402:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:534:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:535:    const docs = docSnap.data().documents || [];
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:536:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:537:    // Count approved / rejected
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:538:    const approved = docs.filter(d => d.status === 'approved').length;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:539:    const rejected = docs.filter(d => d.status === 'rejected').length;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:540:    const total   = docs.length;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:541:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:542:    // Both approved?
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:543:    if (approved === total && total > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:544:        return '<i class="mdi mdi-verified verified-icon" data-toggle="tooltip" data-bs-original-title="{{trans('lang.verified')}}"></i>';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:545:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:546:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:547:    // Any rejected?
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:548:    if (rejected > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:549:        return '<i class="mdi mdi-close-circle unverified-icon" data-toggle="tooltip" data-bs-original-title="{{trans('lang.rejected')}}" style="color:red;"></i>';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:550:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:551:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:552:    // Both uploaded (or pending) → no icon
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:553:    return '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:554:}
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:555:async function buildHTML(val) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:556:    var html = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:557:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:558:    var id = val.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:559:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:560:    var route1 = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:561:    var route1 =  '{{route("vendors.edit", ":id")}}';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:562:    route1 = route1.replace(':id', val.id);    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:563:    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:564:    var vendorEdit = '{{route("vendors.edit", ":id")}}';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:565:    vendorEdit = vendorEdit.replace(':id', val.id);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:566:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:567:    var vendorView = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:568:    if(val.vendorData){
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:569:        vendorView = '{{ route('stores.view', ':id') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:570:        vendorView = vendorView.replace(':id', val.vendorData.id);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:571:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:572:    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:573:    var trroute1 = '{{route("users.walletstransaction", ":id")}}';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:574:    trroute1 = trroute1.replace(':id', id);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:575:    if(checkDeletePermission){
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:576:    html.push('<td class="delete-all"><input type="checkbox" id="is_open_' + id + '" class="is_open" dataId="' + id + '" data-vendorid="'+val.vendorID+'"><label class="col-3 control-label"\n' +
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:577:        'for="is_open_' + id + '" ></label></td>');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:578:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:579:    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:580:    var verified = await getDocumentStatusIcon(val.id);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:581:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:582:    if(val.isAutoVerify === true){
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:583:        verified += ' <i class="mdi mdi-check-circle verified-icon" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.auto_approved') }}"></i>';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:584:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:585:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:586:    if (val.profilePictureURL == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:587:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:588:        html.push('<img class="rounded" style="width:50px" src="' + placeholderImage + '" alt="image">  <a id="userName_' + id + '"  href="'+vendorEdit+'" class="redirecttopage left_space">' + val.firstName + ' ' + val.lastName + '</a>' + verified);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:589:    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:590:        if(val.profilePictureURL){
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:591:            photo=val.profilePictureURL;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:592:        }else{
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:593:            photo=placeholderImage;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:594:        }
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:595:        html.push('<img class="rounded" style="width:50px" src="' + photo + '" alt="image" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'">  <a id="userName_' + id + '"  href="'+vendorEdit+'" class="redirecttopage left_space">' + val.firstName + ' ' + val.lastName + '</a>' + verified);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:596:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:597:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:598:    if(val.vendorData){
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:599:        html.push('<a href="'+vendorView+'" class="redirecttopage left_space">' + val.vendorData.title + '</a>');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:600:    }else{
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:601:        html.push('');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:602:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:603:    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:604:    html.push(val.contactInfo);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:605:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:606:    if(val.hasOwnProperty('subscription_plan') && val.subscription_plan && val.subscription_plan.name) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:607:        html.push(val.subscription_plan.name);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:608:    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:609:        html.push('');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:610:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:611:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:612:   
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:613:    if(val.hasOwnProperty('subscription_plan') && val.subscription_plan) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:614:        if(val.expiryDate != ' '){
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:615:            html.push(val.expiryDate);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:616:        }else{
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:617:            html.push('{{trans("lang.unlimited")}}');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:618:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:619:    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:620:        html.push('');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:621:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:622:    
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:623:    var date = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:624:    var time = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:625:    if (val.hasOwnProperty("createdAt")) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:626:        try {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:627:            date = val.createdAt.toDate().toDateString();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:628:            time = val.createdAt.toDate().toLocaleTimeString('en-US');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:629:        } catch (err) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:630:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:631:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:632:        html.push('<td class="dt-time"><span class="wrap-word">' + date + '<br> ' + time + '</span></td>');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:633:    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:634:        html.push('');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:635:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:636:
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:637:    if (val.active) {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:638:        html.push('<label class="switch"><input type="checkbox" checked id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:639:    } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:640:        html.push('<label class="switch"><input type="checkbox" id="' + val.id + '" name="isActive"><span class="slider round"></span></label>');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:641:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:642:    var chatViewRoute = "{{ route('vendors.chat', ':id') }}".replace(':id', val.id);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:643:    var unreadHtml = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:644:    var action='<span class="action-btn">';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:645:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:646:    if(val.isAutoVerify !== true){
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:647:        var document_list_view = "{{ route('vendors.document', ':id') }}";
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:648:        document_list_view = document_list_view.replace(':id', val.id);
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:649:        action+='<a href="' + document_list_view + '" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.document') }}"><i class="fa fa-file"></i></a>';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:650:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:651:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:652:    var planRoute="{{route('subscription.subscriptionPlanHistory',':id')}}";
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:653:    planRoute=planRoute.replace(':id',val.id);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:654:    if(val.hasOwnProperty('subscription_plan')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:655:        action+='<a id="'+val.id+'"  href="'+planRoute+'" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.subscription_plans') }}"><i class="mdi mdi-crown"></i></a>';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:656:    }
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:657:    action+='<a id="'+val.id+'"  href="'+route1+'" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.edit') }}"><i class="mdi mdi-lead-pencil"></i></a>';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:658:    if(checkDeletePermission) {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:659:        action=action+'<a id="'+val.id+'" data-vendorid="'+val.vendorID+'" class="delete-btn" name="user-delete" href="javascript:void(0)" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.delete') }}"><i class="mdi mdi-delete"></i></a>';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:660:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:661:    if(checkChatPermission){
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:662:    action = action + '<a href="' + chatViewRoute + '" class="chat-message" style="position: relative; display: inline-block;">' +
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:663:                '<i class="mdi mdi-wechat mdi-24px"></i>' + unreadHtml +
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:664:                '</a>';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:665:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:666:    action=action+'</span>';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:667:    html.push(action);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:668:    return html;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:669:}
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:670:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:671:
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:672:async function getUserStoreInfo(vendorId) {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:673:    let vendorRef = await database.collection('vendors').doc(vendorId).get();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:674:    let vendorData = vendorRef.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:675:    return vendorData;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:676:}
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:677:
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:678:$("#is_active").click(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:679:    $("#userTable .is_open").prop('checked', $(this).prop('checked'));
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:680:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:681:});
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:682:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:683:$("#deleteAll").click(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:684:    if ($('#userTable .is_open:checked').length) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:685:        if (confirm("{{trans('lang.selected_delete_alert')}}")) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:686:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:687:            $('#userTable .is_open:checked').each(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:688:                var dataId = $(this).attr('dataId');
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:689:                var VendorId = $(this).attr('data-vendorid');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:690:                deleteDocumentWithImage('users', dataId, 'profilePictureURL')
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:691:                .then(() => {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:692:                    return deleteUserData(dataId, VendorId);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:693:                })
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:694:                .then(result => {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:695:                    setTimeout(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:696:                        window.location.reload();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:697:                    }, 7000);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:698:                })
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:699:                .catch(error => {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:700:                    console.error("Error occurred:", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:701:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:702:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:703:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:704:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:705:    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:706:        alert("{{trans('lang.select_delete_alert')}}");
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:707:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:708:});
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:709:
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:710:async function deleteUserData(userId,vendorId) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:711:
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:712:    await database.collection('wallet').where('user_id', '==', userId).get().then(async function (snapshotsItem) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:713:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:714:        if (snapshotsItem.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:715:            snapshotsItem.docs.forEach((temData) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:716:                var item_data = temData.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:717:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:718:                database.collection('wallet').doc(item_data.id).delete().then(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:719:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:720:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:721:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:722:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:723:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:724:
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:725:    if(vendorId != '' && vendorId != null){
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:726:       await deleteDocumentWithImage('vendors',vendorId,'photo',['vendorMenuPhotos','photos']);
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:727:        await database.collection('vendor_products').where('vendorID','==',vendorId).get().then(async function (snapshotsItem) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:728:             if (snapshotsItem.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:729:                for (const listval of snapshotsItem.docs) {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:730:                    await deleteDocumentWithImage('vendor_products', listval.id, 'photo', 'photos');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:731:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:732:             }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:733:        })
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:734:        await database.collection('story').where('vendorID', '==', vendorId).get().then(async function (snapshotsItem) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:735:                if (snapshotsItem.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:736:                    for (const temData of snapshotsItem.docs) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:737:                        await deleteDocumentWithImage('story', temData.id,'videoThumbnail','videoUrl');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:738:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:739:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:740:            });
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:741:        await database.collection('favorite_vendor').where('store_id','==',vendorId).get().then(async function (snapshotsItem) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:742:             if (snapshotsItem.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:743:            snapshotsItem.docs.forEach((temData) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:744:                var item_data = temData.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:745:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:746:                database.collection('favorite_vendor').doc(item_data.id).delete().then(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:747:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:748:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:749:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:750:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:751:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:752:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:753:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:754:      //delete vendor from mysql
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:755:      database.collection('settings').doc("Version").get().then(function(snapshot) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:756:            var settingData=snapshot.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:757:            if(settingData&&settingData.storeUrl) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:758:                var siteurl=settingData.storeUrl+"/api/delete-user";
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:759:                var dataObject={"uuid": userId};
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:760:                jQuery.ajax({
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:761:                    url: siteurl,
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:762:                    method: 'POST',
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:763:                    contentType: "application/json; charset=utf-8",
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:764:                    data: JSON.stringify(dataObject),
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:765:                    success: function(data) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:766:                        console.log('Delete user from sql success:',data);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:767:                    },
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:768:                    error: function(error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:769:                        console.log('Delete user from sql error:',error.responseJSON.message);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:770:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:771:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:772:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:773:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:774:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:775:    //delete user from authentication
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:776:    var dataObject = {"data": {"uid": userId}};
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:777:    var projectId = '<?php echo env('FIREBASE_PROJECT_ID') ?>';
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:778:    jQuery.ajax({
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:779:        url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:780:        method: 'POST',
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:781:        contentType: "application/json; charset=utf-8",
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:782:        data: JSON.stringify(dataObject),
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:783:        success: function (data) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:784:            console.log('Delete user success:', data.result);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:785:        },
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:786:        error: function (xhr, status, error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:787:            var responseText = JSON.parse(xhr.responseText);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:788:            console.log('Delete user error:', responseText.error);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:789:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:790:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:791:}
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:792:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:793:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:794:$(document).on("click", "a[name='user-delete']", function (e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:795:    var id = this.id;
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:796:    var VendorId = $(this).attr('data-vendorid');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:797:    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:798:    deleteDocumentWithImage('users', id, 'profilePictureURL')
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:799:    .then(() => {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:800:        return deleteUserData(id, VendorId);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:801:    })
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:802:    .then(result => {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:803:        setTimeout(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:804:            window.location.reload();
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:805:        }, 7000);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:806:    })
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:807:    .catch(error => {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:808:        console.error("Error occurred:", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:809:    });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:810:});
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:811:
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:812:$(document).on("click", "input[name='isActive']", function (e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:813:    var ischeck = $(this).is(':checked');
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:814:    var id = this.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:815:    if (ischeck) {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:816:        database.collection('users').doc(id).update({'active': true}).then(function (result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:817:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:818:    } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:819:        database.collection('users').doc(id).update({'active': false}).then(function (result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:820:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:821:    }
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:822:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:823:});
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:824:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:825:</script>
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:826:
  C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:827:@endsection
```

## APK Vendor Query Contract To Match
```text
Delivery/ecommerce APK vendor query needs:
- collection vendors
- section_id
- zoneId
- categoryID
- g.geohash / geohash
- title/photo for display
- enabledDiveInFuture for future/dine-in path

Known runtime query shape:
vendors where section_id == section.id and zoneId == selectedZone.id order by g.geohash
```

## Decision Checklist
```text
stores/create writes vendors.section_id:
stores/create writes vendors.zoneId:
stores/create writes vendors.categoryID:
stores/create writes vendors.g.geohash:
stores/create writes vendors.title/photo:
stores/create writes vendors.enabledDiveInFuture:

stores/edit preserves/updates section_id:
stores/edit preserves/updates zoneId:
stores/edit preserves/updates categoryID:
stores/edit preserves/updates g.geohash:
stores/edit preserves/updates title/photo:
stores/edit preserves/updates enabledDiveInFuture:

vendors/index only lists/toggles user active:

Risk:
Patch recommendation:
```

## Final Status
STATUS: WEB_ADMIN_STORE_VENDOR_EXACT_WRITE_BLOCKS_CREATED