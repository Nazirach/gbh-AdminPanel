# WEB ADMIN SECTION EXACT WRITE BLOCKS

Generated: 07/01/2026 01:54:03
Mode: READ ONLY. No patch. No Firebase write.

Goal: read exact create/edit/index Firestore write blocks for sections.


## FILE: Admin Panel\resources\views\section\create.blade.php
```text
FOUND: C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php

  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:5:            <div class="col-md-5 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:6:                <h3 class="text-themecolor">{{ trans('lang.section_plural') }}</h3>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:7:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:8:            <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:9:                <ol class="breadcrumb">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:10:                    <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{ trans('lang.dashboard') }}</a></li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:11:                    <li class="breadcrumb-item"><a href="{!! route('section') !!}">{{ trans('lang.section_plural') }}</a>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:12:                    </li>
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:13:                    <li class="breadcrumb-item active">{{ trans('lang.section_create') }}</li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:14:                </ol>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:15:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:16:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:17:        <div class="card-body">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:18:            <div class="error_top" style="display:none"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:19:            <div class="row vendor_payout_create">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:20:                <div class="vendor_payout_create-inner">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:21:                    <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:22:                        <legend>{{ trans('lang.section_create') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:23:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:24:                            <label class="col-3 control-label">{{ trans('lang.section_name') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:25:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:26:                                <input type="text" name="name" class="form-control name" id="name">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:27:                                <div class="form-text text-muted">{{ trans('lang.section_name_help') }}</div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:28:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:29:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:30:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:31:                            <label class="col-3 control-label ">{{ trans('lang.section_color') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:32:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:33:                                <input type="color" id="color" class="color" value="#0000ff">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:34:                                <div class="form-text text-muted">{{ trans('lang.section_color_help') }}</div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:35:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:36:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:37:                        <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:38:                            <label class="col-3 control-label">{{ trans('lang.section_image') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:39:                            <div class="col-7">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:40:                                <input type="file" id="sectionImage" onChange="handleFileSelect(event)">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:41:                                <div class="placeholder_img_thumb cat_image"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:42:                                <div id="uploding_image"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:43:                                <div class="form-text text-muted w-50">{{ trans('lang.section_image_help') }}</div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:44:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:45:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:46:                        <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:47:                            <label class="col-3 control-label ">{{ trans('lang.service_type') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:48:                            <div class="col-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:49:                                <select name="service_type" id="service_type" class="form-control service_type">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:50:                                    <option value="">{{ trans('lang.select') }} {{ trans('lang.service_type') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:51:                                    </option>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:52:                                </select>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:53:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:54:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:55:                        <div class="form-group row width-100 marker-icon-div" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:56:                            <label class="col-3 control-label">{{trans('lang.marker_icon')}}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:57:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:58:                                <div class="map-markers">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:59:                                    <ul>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:60:                                        <li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:61:                                            <input type="radio" name="marker_icon" value="https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/marker%2Fsedan.png?alt=media&token=50c63470-65e4-45fa-bda1-cecfce83cb47" id="sedan" title="Seden" checked>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:62:                                            <img src="https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/marker%2Fsedan.png?alt=media&token=50c63470-65e4-45fa-bda1-cecfce83cb47">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:63:                                        </li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:64:                                        <li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:65:                                            <input type="radio" name="marker_icon" value="https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/marker%2Fsuv.png?alt=media&token=e741359a-2f69-4e17-b731-a3f52282176b" id="suv" title="SUV">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:66:                                            <img src="https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/marker%2Fsuv.png?alt=media&token=e741359a-2f69-4e17-b731-a3f52282176b">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:67:                                        </li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:68:                                        <li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:100:                                    </ul>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:101:                                    <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:102:                                        {{ trans('lang.marker_icon_help') }} 
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:103:                                    </div>   
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:104:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:105:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:106:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:107:                        <div class="form-group row width-100" id="div_ride_type" style="display: none;">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:108:                            <label class="col-3 control-label" for="user_active">{{ trans('lang.choose_ride_type') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:109:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:110:                                <input type="radio" class="form-check-inline" name="ride_type" id="ride" value="ride" checked>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:111:                                <label for="ride">{{ trans('lang.ride') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:112:                                <input type="radio" class="form-check-inline" name="ride_type" id="intercity" value="intercity">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:113:                                <label for="intercity">{{ trans('lang.intercity') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:114:                                <input type="radio" class="form-check-inline" name="ride_type" id="both" value="both">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:115:                                <label for="both">{{ trans('lang.both') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:116:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:117:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:118:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:119:                            <div class="form-check">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:120:                                <input type="checkbox" class="section_active" id="section_active">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:121:                                <label class="col-3 control-label" for="section_active">{{ trans('lang.active') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:122:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:123:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:124:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:125:                    <fieldset id="" class="diliverychargeDiv" style="display: none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:126:                        <legend>{{ trans('lang.deliveryCharge') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:127:                        <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:128:                            <label class="col-4 control-label">{{ trans('lang.deliveryCharge') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:129:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:130:                                <input type="number" id="deliveryCharge" class="form-control ">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:131:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:132:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:133:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:134:                    <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:135:                        <legend><i class="mr-3 mdi mdi-share"></i>{{ trans('lang.referral_settings') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:136:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:137:                            <label class="col-4 control-label">{{ trans('lang.referral_amount') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:138:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:139:                                <div class="control-inner">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:140:                                    <input type="number" class="form-control" id="referral_amount">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:141:                                    <span class="currentCurrency"></span>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:142:                                    <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:143:                                        {{ trans('lang.referral_amount_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:144:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:145:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:146:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:147:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:148:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:149:                    <fieldset id="food_delivery_set" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:150:                        <legend>{{ trans('lang.food_delivery_feature') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:151:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:152:                            <div class="form-check">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:153:                                <input type="checkbox" class="section_dine_in_active" id="section_dine_in_active">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:154:                                <label class="col-3 control-label" for="section_dine_in_active">{{ trans('lang.dine_in_feature') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:155:                                <span style="font-size: 15px;">{{ trans('lang.dine_in_feature_note') }}</span>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:156:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:157:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:158:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:159:                            <div class="form-check">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:160:                                <input type="checkbox" class="is_product_details" id="is_product_details">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:161:                                <label class="col-3 control-label" for="is_product_details">{{ trans('lang.product_detail_feature') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:162:                                <span style="font-size: 15px;">{{ trans('lang.product_detail_feature_note') }}</span>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:163:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:164:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:165:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:166:                    <fieldset id="radios_set" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:167:                        <legend>{{ trans('lang.radios_configuration') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:168:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:169:                            <label class="col-4 control-label"><span id="stype"></span>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:170:                                {{ trans('lang.nearby_radios') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:171:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:172:                                <div class="control-inner">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:173:                                    <input type="number" class="form-control" id="vendor_nearby_radius" min="1">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:174:                                    <span id="set_distance_type"></span>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:175:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:176:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:177:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:178:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:179:                    <fieldset class="adminCommisitionDiv">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:180:                        <legend>{{ trans('lang.admin_commission') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:181:                        <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:182:                            <label style="font-size: 15px;">{{ trans('lang.admin_commision_note_section') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:183:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:184:                        <div class="form-check width-100">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:185:                            <input type="checkbox" class="form-check-inline" id="enable_commission">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:186:                            <label class="col-5 control-label" for="enable_commission">{{ trans('lang.enable_adminCommission') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:187:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:188:                        <div class="form-fields" id="show_admin_commision_type_value" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:189:                            <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:190:                                <label class="col-4 control-label">{{ trans('lang.commission_type') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:191:                                <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:192:                                    <select class="form-control" id="commission_type">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:193:                                        <option value="percentage">{{ trans('lang.admin_commission_percentage') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:194:                                        </option>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:195:                                        <option value="fixed">{{ trans('lang.admin_commission_fixed') }}</option>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:196:                                    </select>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:197:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:198:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:199:                            <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:200:                                <label class="col-4 control-label">{{ trans('lang.admin_commission_value') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:201:                                <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:202:                                    <input type="number" class="form-control" id="commission_value" min="0">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:203:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:204:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:205:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:206:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:207:                    <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:208:                        <legend><i class="mr-3 mdi mdi-cash-100"></i>{{ trans('lang.platform_fee_setting') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:209:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:210:                            <div class="form-check width-100">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:211:                                <input type="checkbox" class="form-check-inline" id="enable_platform_fee">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:212:                                <label class="col-5 control-label" for="enable_platform_fee">{{ trans('lang.enable_platform_fee') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:213:                                <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:214:                                    {{ trans('lang.enable_platform_fee_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:215:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:216:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:217:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:218:                        <div class="form-group row width-50" id="platform_fee_div" style="display:none;">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:219:                            <label class="col-5 control-label">{{ trans('lang.platform_fee') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:220:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:221:                                <input type="number" class="form-control" id="platform_fee" value="" min="0">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:222:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:223:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:224:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:225:                    <fieldset class="packingChargeDiv" style="display: none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:226:                        <legend><i class="mr-3 mdi mdi-cash-100"></i>{{ trans('lang.packaging_charge_setting') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:227:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:228:                            <div class="form-check width-100">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:229:                                <input type="checkbox" class="form-check-inline" id="packagingChargeEnable">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:230:                                <label class="col-5 control-label" for="packagingChargeEnable">{{ trans('lang.packagingChargeEnable') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:231:                                <div class="form-text text-muted">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:232:                                    {{ trans('lang.packagingChargeEnable_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:233:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:234:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:235:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:236:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:237:                    <fieldset id="homepage_theme" class="d-none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:238:                        <legend>{{ trans('lang.app_homepage_theme') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:239:                        <div class="form-group width-100 choose-theme">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:240:                            <div class="col-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:241:                                <div class="select-theme-radio">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:242:                                    <label class="form-check-label" for="app_homepage_theme_1">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:243:                                        <input type="radio" class="btn-check" name="app_homepage_theme" id="app_homepage_theme_1" value="theme_1" checked>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:244:                                        <img src="{{ url('images/app_homepage_theme_1.png') }}" height="150">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:245:                                    </label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:246:                                    <label class="form-check-label" for="app_homepage_theme_2">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:247:                                        <input type="radio" class="btn-check" name="app_homepage_theme" id="app_homepage_theme_2" value="theme_2">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:248:                                        <img src="{{ url('images/app_homepage_theme_2.png') }}" height="150">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:249:                                    </label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:250:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:251:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:252:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:253:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:254:                    <fieldset class="htmlTemplateDiv" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:255:                        <legend>{{ trans('lang.html_template') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:256:                        <div class="form-group width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:257:                            <textarea class="form-control col-7" name="html_template" id="html_template"></textarea>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:258:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:259:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:260:                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:278:                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:279:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:280:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:281:    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:282:@endsection
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:283:@section('scripts')
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:284:    <script type="text/javascript">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:285:        var database = firebase.firestore();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:286:        var ref = database.collection('sections');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:287:        var services = database.collection('services');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:288:        var photo = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:289:        var fileName = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:290:        var photo_parcel = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:291:        var id_section = "<?php echo uniqid(); ?>";
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:292:        var category_length = 1;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:293:        var placeholderImage = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:294:        var placeholder = database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:295:        var htmlTemplate = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:296:        var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:297:        placeholder.get().then(async function(snapshotsimage) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:298:            var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:299:            placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:300:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:301:        var theme_1_url = '{!! url('images/app_homepage_theme_1.png') !!}';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:302:        var theme_2_url = '{!! url('images/app_homepage_theme_2.png') !!}';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:303:        var refDriver = database.collection('settings').doc("DriverNearBy");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:304:        refDriver.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:305:            var radios = snapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:306:            if (radios.hasOwnProperty('distanceType')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:307:                $("#set_distance_type").text(radios.distanceType);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:308:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:309:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:310:        $('#html_template').summernote({
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:311:            height: 400,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:312:            width: 1000,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:313:            toolbar: [
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:314:                ['style', ['bold', 'italic', 'underline', 'clear']],
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:330:                    $('#service_type').append($("<option></option>")
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:331:                        .attr("value", data.name).attr("flag", data.flag)
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:332:                        .text(data.name));
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:333:                })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:334:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:335:            $(".save-setting-btn").click(async function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:336:                var name = $("#name").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:337:                var color = $("#color").val();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:338:                var active = $("#section_active").is(":checked");
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:339:                var section_dine_in_active = $("#section_dine_in_active").is(":checked");
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:340:                var is_product_details = $("#is_product_details").is(":checked");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:341:                var service_type = $('#service_type').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:342:                var service_type_flag = $('#service_type option:selected').attr('flag');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:343:                var referralAmount = $("#referral_amount").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:344:                var enable_commission = $("#enable_commission").is(":checked");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:345:                var commission_type = $("#commission_type").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:346:                var commission_value = parseInt($("#commission_value").val());
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:347:                var markerIcon = $("input[name='marker_icon']:checked").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:348:                // var vendor_nearby_radius = parseInt($("#vendor_nearby_radius").val());
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:349:                var vendor_nearby_radius = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:350:                if (
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:351:                    service_type === "Multivendor Delivery Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:352:                    service_type === "On Demand Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:353:                    service_type === "Ecommerce Service"
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:354:                ) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:355:                    var inputVal = $("#vendor_nearby_radius").val().trim();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:356:                    vendor_nearby_radius = (inputVal === '' || isNaN(parseInt(inputVal))) ? null : parseInt(inputVal);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:357:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:358:                var app_homepage_theme=null;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:359:                if(service_type=='Multivendor Delivery Service'){
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:360:                     app_homepage_theme = $(".form-group input[name='app_homepage_theme']:checked").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:361:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:362:                if (service_type == "Ecommerce Service") {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:363:                    var delivery_charge = $('#deliveryCharge').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:364:                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:365:                    var delivery_charge = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:366:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:367:                if (service_type == "Cab Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:368:                    var htmlTemplate = $('#html_template').summernote('code');
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:369:                    var rideType = $('input[name="ride_type"]:checked').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:370:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:371:                    var htmlTemplate = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:372:                    var rideType = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:373:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:374:                if (enable_commission == true) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:375:                    var adminCommision = {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:376:                        'commission': commission_value,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:377:                        'enable': true,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:378:                        'type': commission_type,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:379:                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:380:                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:381:                    var adminCommision = {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:382:                        'commission': 0,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:383:                        'enable': false,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:384:                        'type': null,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:385:                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:386:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:387:                
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:388:                var enable_platform_fee = $('#enable_platform_fee').is(":checked");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:389:                var platform_fee = $('#platform_fee').val();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:390:                var platformFee = enable_platform_fee ? { enable: true, fee: platform_fee }  : { enable: false, fee: "0" };
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:391:                var packagingChargeEnable = $("#packagingChargeEnable").is(":checked");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:392:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:393:                $(".error_top").hide().html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:394:                if (name == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:395:                    $(".error_top").show().append("<p>{{ trans('lang.enter_section_name_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:396:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:397:                    return;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:398:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:399:                if (service_type == "") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:400:                    $(".error_top").show().append("<p>{{ trans('lang.service_type_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:401:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:402:                    return;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:403:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:404:                if (referralAmount == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:405:                    $(".error_top").show().append("<p>{{ trans('lang.enter_referral_amount_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:406:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:407:                    return;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:408:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:409:                if (enable_commission && (isNaN(commission_value) || commission_value <= 0)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:410:                    $(".error_top").show().append("<p>{{ trans('lang.commission_fix_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:411:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:412:                    return;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:413:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:414:                if (
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:415:                    (service_type === "Multivendor Delivery Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:416:                    service_type === "On Demand Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:417:                    service_type === "Ecommerce Service") &&
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:418:                    (vendor_nearby_radius === null || vendor_nearby_radius <= 0)
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:419:                ) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:423:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:424:                const IMG = await storeImageData();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:425:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:426:                jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:427:                let sectionData = {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:428:                    'id': id_section,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:429:                    'name': name,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:430:                    'color': color,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:431:                    'sectionImage': IMG,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:432:                    'isActive': active,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:433:                    'dine_in_active': section_dine_in_active,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:434:                    'is_product_details': is_product_details,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:435:                    'rideType': rideType,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:436:                    'serviceType': service_type,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:437:                    'serviceTypeFlag': service_type_flag,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:438:                    'delivery_charge': delivery_charge,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:439:                    'cab_service_template': htmlTemplate,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:440:                    'referralAmount': referralAmount,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:441:                    'adminCommision': adminCommision,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:442:                    'nearByRadius': vendor_nearby_radius,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:443:                    'theme': app_homepage_theme,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:444:                    'order': 10,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:445:                    'platformFee': platformFee,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:446:                    'packagingChargeEnable': packagingChargeEnable,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:447:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:448:                //add this new code 
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:449:                if (
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:450:                    service_type === "Multivendor Delivery Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:451:                    service_type === "On Demand Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:452:                    service_type === "Ecommerce Service"
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:453:                ) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:454:                    sectionData.nearByRadius = vendor_nearby_radius;  // will be number or null
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:455:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:456:                if (
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:457:                    service_type == "Cab Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:458:                    service_type == "Parcel Delivery Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:459:                    service_type == "Rental Service"
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:460:                ) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:461:                    sectionData.markerIcon = markerIcon;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:462:                }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:463:                await database.collection('sections').doc(id_section).set(sectionData);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:464:                if (service_type == 'Multivendor Delivery Service' ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:465:                    service_type == 'On Demand Service' ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:466:                    service_type == 'Ecommerce Service') {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:467:                    await addCommissionModel(id_section);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:468:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:469:                jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:470:                window.location.href = '{{ route('section') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:471:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:472:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:473:        async function addCommissionModel(sectionId) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:474:            var tempId = database.collection("tmp").doc().id;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:475:            var features = {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:476:                'chat': true,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:477:                'qrCodeGenerate': true,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:478:                'ownerMobileApp': true
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:479:            };
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:480:            await database.collection('subscription_plans').doc(tempId).set({
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:481:                'createdAt': firebase.firestore.FieldValue.serverTimestamp(),
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:482:                'description': 'Commission apply per order',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:483:                'expiryDay': '-1',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:484:                'features': features,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:485:                'id': tempId,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:486:                'image': placeholderImage,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:487:                'isEnable': true,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:488:                'itemLimit': '-1',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:489:                'name': 'Commission Base Plan',
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:490:                'orderLimit': '-1',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:491:                'place': '0',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:492:                'plan_points': ['Access to all features easily.'],
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:493:                'price': '0',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:494:                'type': 'free',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:495:                'sectionId': sectionId,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:496:                'isCommissionPlan': true
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:497:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:498:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:499:        function handleFileSelect(evt) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:500:            var f = evt.target.files[0];
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:501:            var reader = new FileReader();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:502:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:503:                return function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:504:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:505:                    var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:506:                    var val = $('#sectionImage').val().toLowerCase();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:507:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:508:                    var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:509:                    var filename = $('#sectionImage').val().replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:510:                    var timestamp = Number(new Date());
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:511:                    var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:512:                    photo = filePayload;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:513:                    fileName = filename;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:514:                    $(".cat_image").empty();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:515:                    $(".cat_image").append(
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:516:                        '<span class="image-item" id="photo_user"><span class="remove-btn" data-id="user-remove" data-img="' +
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:517:                        photo +
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:518:                        '"><i class="fa fa-remove"></i></span><img class="rounded" style="width:50px" src="' +
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:519:                        photo + '" alt="image"></span>');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:520:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:521:            })(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:522:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:523:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:524:        async function storeImageData() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:525:            let newPhoto = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:526:            try {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:527:                if (!photo || photo.trim() === '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:528:                    throw "{{ trans('lang.vendor_image_help') }}"; // show image validation message
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:529:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:530:                if (photo.startsWith('https://')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:531:                    return photo;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:532:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:533:                const mimeMatch = photo.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,/);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:534:                const contentType = mimeMatch ? mimeMatch[1] : 'image/jpeg';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:535:                const allowedTypes = [
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:536:                    'image/jpeg',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:537:                    'image/jpg',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:552:                $(".error_top").show().html("<p>" + err + "</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:553:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:554:                throw err; 
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:555:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:556:            return newPhoto;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:557:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:558:        $(document).on("click", ".remove-btn", function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:559:            $(".image-item").remove();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:560:            $('#sectionImage').val('');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:561:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:562:        $('#enable_commission').click(function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:563:            var checkboxValue = $(this).is(":checked");
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:564:            if (checkboxValue) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:565:                $("#show_admin_commision_type_value").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:566:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:567:                $("#show_admin_commision_type_value").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:568:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:569:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:570:        $("#enable_platform_fee").click(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:571:            if ($(this).is(':checked')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:572:                $("#platform_fee_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:573:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:574:                $("#platform_fee_div").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:575:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:576:        });
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:577:        $('.service_type').change(function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:578:            var serviceType = $(this).val();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:579:            if (serviceType == "Cab Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:580:                $('.diliverychargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:581:                $('.packingChargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:582:                $('.htmlTemplateDiv').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:583:                $('#div_ride_type').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:584:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:585:                $('#radios_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:586:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:587:                $('.marker-icon-div').show();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:588:            } else if (serviceType == "Parcel Delivery Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:589:                $('.diliverychargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:590:                $('.packingChargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:591:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:592:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:593:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:594:                $('#radios_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:595:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:596:                $('.marker-icon-div').show();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:597:            } else if (serviceType == "Ecommerce Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:598:                $('.diliverychargeDiv').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:599:                $('.packingChargeDiv').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:600:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:601:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:602:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:603:                $('#radios_set').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:604:                $('#stype').text("{{ trans('lang.store') }}");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:605:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:606:                $('.marker-icon-div').hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:607:            } else if (serviceType == "Rental Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:608:                $('.diliverychargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:609:                $('.packingChargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:610:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:611:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:612:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:613:                $('#radios_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:614:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:615:                $('.marker-icon-div').show();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:616:            } else if (serviceType == "On Demand Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:617:                $('.diliverychargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:618:                $('.packingChargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:619:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:620:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:621:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:622:                $('#radios_set').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:623:                $('#stype').text("{{ trans('lang.provider_services') }}");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:624:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:625:                $('.marker-icon-div').hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:626:            } else if (serviceType == "Multivendor Delivery Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:627:                $('.diliverychargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:628:                $('.packingChargeDiv').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:629:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:630:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:631:                $('#food_delivery_set').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:632:                $('#radios_set').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:633:                $('#stype').text("{{ trans('lang.store') }}");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:634:                $('#homepage_theme').removeClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:635:                $('.marker-icon-div').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:636:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:637:                $('.diliverychargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:638:                $('.packingChargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:639:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:640:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:641:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:642:                $('#radios_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:643:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:644:                $('.marker-icon-div').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:645:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:646:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:647:        $(".form-group input[name='app_homepage_theme']").click(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:648:            if ($(this).is(':checked')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:649:                var modal = $('#themeModal');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:650:                if ($(this).val() == "theme_1") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:651:                    modal.find('#themeImage').attr('src', theme_1_url);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:652:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:653:                    modal.find('#themeImage').attr('src', theme_2_url);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:654:                }
```

## FILE: Admin Panel\resources\views\section\edit.blade.php
```text
FOUND: C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php

  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:5:            <div class="col-md-5 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:6:                <h3 class="text-themecolor">{{ trans('lang.section_plural') }}</h3>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:7:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:8:            <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:9:                <ol class="breadcrumb">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:10:                    <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{ trans('lang.dashboard') }}</a></li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:11:                    <li class="breadcrumb-item"><a href="{!! route('section') !!}">{{ trans('lang.section_plural') }}</a>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:12:                    </li>
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:13:                    <li class="breadcrumb-item active">{{ trans('lang.section_edit') }}</li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:14:                </ol>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:15:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:16:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:17:        <div class="card-body">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:18:            <div class="error_top" style="display:none"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:19:            <div class="row vendor_payout_create">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:20:                <div class="vendor_payout_create-inner">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:21:                    <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:22:                        <legend>{{ trans('lang.section_edit') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:23:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:24:                            <label class="col-3 control-label">{{ trans('lang.section_name') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:25:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:26:                                <input type="text" class="form-control" id="name">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:27:                                <div class="form-text text-muted">{{ trans('lang.section_name_help') }}</div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:28:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:29:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:30:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:31:                            <label class="col-3 control-label ">{{ trans('lang.section_color') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:32:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:33:                                <input type="color" id="color" value="#0000ff">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:34:                                <div class="form-text text-muted">{{ trans('lang.section_color_help') }}</div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:35:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:36:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:37:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:38:                            <label class="col-3 control-label">{{ trans('lang.section_image') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:39:                            <div class="col-7">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:40:                                <input type="file" id="sectionImage" onChange="handleFileSelect(event)">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:41:                                <div class="placeholder_img_thumb cat_image"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:42:                                <div id="uploding_image"></div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:43:                                <div class="form-text text-muted w-50">{{ trans('lang.section_image_help') }}</div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:44:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:45:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:46:                        <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:47:                            <label class="col-3 control-label ">{{ trans('lang.service_type') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:48:                            <div class="col-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:49:                                <select name="service_type" id="service_type" class="form-control service_type">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:50:                                    <option value="">{{ trans('lang.select') }} {{ trans('lang.service_type') }}</option>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:51:                                </select>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:52:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:53:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:54:                        <div class="form-group row width-100 marker-icon-div" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:55:                            <label class="col-3 control-label">{{trans('lang.marker_icon')}}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:56:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:57:                                <div class="map-markers">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:58:                                    <ul>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:59:                                        <li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:60:                                            <input type="radio" name="marker_icon" value="https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/marker%2Fsedan.png?alt=media&token=50c63470-65e4-45fa-bda1-cecfce83cb47" id="sedan" title="Seden" checked>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:61:                                            <img src="https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/marker%2Fsedan.png?alt=media&token=50c63470-65e4-45fa-bda1-cecfce83cb47">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:62:                                        </li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:63:                                        <li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:64:                                            <input type="radio" name="marker_icon" value="https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/marker%2Fsuv.png?alt=media&token=e741359a-2f69-4e17-b731-a3f52282176b" id="suv" title="SUV">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:65:                                            <img src="https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/marker%2Fsuv.png?alt=media&token=e741359a-2f69-4e17-b731-a3f52282176b">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:66:                                        </li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:67:                                        <li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:68:                                            <input type="radio" name="marker_icon" value="https://firebasestorage.googleapis.com/v0/b/emart-8d99f.appspot.com/o/marker%2Fhatchback.png?alt=media&token=be339f9a-b483-4662-9965-b60e187e2824" id="hatchback" title="Hatchback">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:99:                                    </ul>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:100:                                    <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:101:                                        {{ trans('lang.marker_icon_help') }} 
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:102:                                    </div>   
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:103:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:104:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:105:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:106:                        <div class="form-group row width-100" id="div_ride_type" style="display: none;">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:107:                            <label class="col-3 control-label" for="user_active">{{ trans('lang.choose_ride_type') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:108:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:109:                                <input type="radio" class="form-check-inline" name="ride_type" id="ride" value="ride">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:110:                                <label for="ride">{{ trans('lang.ride') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:111:                                <input type="radio" class="form-check-inline" name="ride_type" id="intercity" value="intercity">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:112:                                <label for="intercity">{{ trans('lang.intercity') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:113:                                <input type="radio" class="form-check-inline" name="ride_type" id="both" value="both">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:114:                                <label for="both">{{ trans('lang.both') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:115:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:116:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:117:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:118:                            <div class="form-check">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:119:                                <input type="checkbox" class="section_active" id="section_active">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:120:                                <label class="col-3 control-label" for="section_active">{{ trans('lang.active') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:121:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:122:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:123:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:124:                    <fieldset id="" class="diliverychargeDiv" style="display: none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:125:                        <legend>{{ trans('lang.deliveryCharge') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:126:                        <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:127:                            <label class="col-4 control-label">{{ trans('lang.deliveryCharge') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:128:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:129:                                <input type="number" id="deliveryCharge" class="form-control ">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:130:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:131:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:132:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:133:                    <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:134:                        <legend><i class="mr-3 mdi mdi-share"></i>{{ trans('lang.referral_settings') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:135:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:136:                            <label class="col-4 control-label">{{ trans('lang.referral_amount') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:137:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:138:                                <div class="control-inner">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:139:                                    <input type="number" class="form-control" id="referral_amount">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:140:                                    <span class="currentCurrency"></span>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:141:                                    <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:142:                                        {{ trans('lang.referral_amount_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:143:                                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:144:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:145:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:146:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:147:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:148:                    <fieldset id="food_delivery_set" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:149:                        <legend>{{ trans('lang.food_delivery_feature') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:150:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:151:                            <div class="form-check">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:152:                                <input type="checkbox" class="section_dine_in_active" id="section_dine_in_active">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:153:                                <label class="col-3 control-label" for="section_dine_in_active">{{ trans('lang.dine_in_feature') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:154:                                <span style="font-size: 15px;">{{ trans('lang.dine_in_feature_note') }}</span>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:155:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:156:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:157:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:158:                            <div class="form-check">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:159:                                <input type="checkbox" class="is_product_details" id="is_product_details">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:160:                                <label class="col-3 control-label" for="is_product_details">{{ trans('lang.product_detail_feature') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:161:                                <span style="font-size: 15px;">{{ trans('lang.product_detail_feature_note') }}</span>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:162:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:163:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:164:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:165:                    <fieldset id="radios_set" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:166:                        <legend>{{ trans('lang.radios_configuration') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:167:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:168:                            <label class="col-4 control-label"><span id="stype"></span> {{ trans('lang.nearby_radios') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:169:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:170:                                <div class="control-inner">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:171:                                    <input type="number" class="form-control" id="vendor_nearby_radius" min="1">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:172:                                    <span id="set_distance_type"></span>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:173:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:174:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:175:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:176:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:177:                    <fieldset class="adminCommisitionDiv">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:178:                        <legend>{{ trans('lang.admin_commission') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:179:                        <div class="form-check width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:180:                            <label style="font-size: 15px;">{{ trans('lang.admin_commision_note_section') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:181:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:182:                        <div class="form-check width-100">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:183:                            <input type="checkbox" class="form-check-inline" id="enable_commission">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:184:                            <label class="col-5 control-label" for="enable_commission">{{ trans('lang.enable_adminCommission') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:185:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:186:                        <div class="form-fields" id="show_admin_commision_type_value" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:187:                            <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:188:                                <label class="col-4 control-label">{{ trans('lang.commission_type') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:189:                                <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:190:                                    <select class="form-control" id="commission_type">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:191:                                        <option value="percentage">{{ trans('lang.admin_commission_percentage') }}</option>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:192:                                        <option value="fixed">{{ trans('lang.admin_commission_fixed') }}</option>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:193:                                    </select>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:194:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:195:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:196:                            <div class="form-group row width-50">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:197:                                <label class="col-4 control-label">{{ trans('lang.admin_commission_value') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:198:                                <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:199:                                    <input type="number" class="form-control" id="commission_value" min="0">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:200:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:201:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:202:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:203:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:204:                    <fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:205:                        <legend><i class="mr-3 mdi mdi-cash-100"></i>{{ trans('lang.platform_fee_setting') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:206:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:207:                            <div class="form-check width-100">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:208:                                <input type="checkbox" class="form-check-inline" id="enable_platform_fee">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:209:                                <label class="col-5 control-label" for="enable_platform_fee">{{ trans('lang.enable_platform_fee') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:210:                                <div class="form-text text-muted">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:211:                                    {{ trans('lang.enable_platform_fee_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:212:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:213:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:214:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:215:                        <div class="form-group row width-50" id="platform_fee_div" style="display:none;">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:216:                            <label class="col-5 control-label">{{ trans('lang.platform_fee') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:217:                            <div class="col-7">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:218:                                <input type="number" class="form-control" id="platform_fee" value="" min="0">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:219:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:220:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:221:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:222:                    <fieldset class="packingChargeDiv" style="display: none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:223:                        <legend><i class="mr-3 mdi mdi-cash-100"></i>{{ trans('lang.packaging_charge_setting') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:224:                        <div class="form-group row width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:225:                            <div class="form-check width-100">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:226:                                <input type="checkbox" class="form-check-inline" id="packagingChargeEnable">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:227:                                <label class="col-5 control-label" for="packagingChargeEnable">{{ trans('lang.packagingChargeEnable') }}</label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:228:                                <div class="form-text text-muted">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:229:                                    {{ trans('lang.packagingChargeEnable_help') }}
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:230:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:231:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:232:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:233:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:234:                    <fieldset id="homepage_theme" class="d-none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:235:                        <legend>{{ trans('lang.app_homepage_theme') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:236:                        <div class="form-group width-100 choose-theme">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:237:                            <div class="col-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:238:                                <div class="select-theme-radio">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:239:                                    <label class="form-check-label" for="app_homepage_theme_1">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:240:                                        <input type="radio" class="btn-check" name="app_homepage_theme" id="app_homepage_theme_1" value="theme_1" checked>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:241:                                        <img src="{{ url('images/app_homepage_theme_1.png') }}" height="150">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:242:                                    </label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:243:                                    <label class="form-check-label" for="app_homepage_theme_2">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:244:                                        <input type="radio" class="btn-check" name="app_homepage_theme" id="app_homepage_theme_2" value="theme_2">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:245:                                        <img src="{{ url('images/app_homepage_theme_2.png') }}" height="150">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:246:                                    </label>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:247:                                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:248:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:249:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:250:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:251:                    <fieldset class="htmlTemplateDiv" style="display:none">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:252:                        <legend>{{ trans('lang.html_template') }}</legend>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:253:                        <div class="form-group width-100">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:254:                            <textarea class="form-control col-7" name="html_template" id="html_template"></textarea>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:255:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:256:                    </fieldset>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:257:                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:274:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:275:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:276:    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:277:@endsection
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:278:@section('scripts')
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:279:    <script type="text/javascript">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:280:        var id = "<?php echo $id; ?>";
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:281:        var database = firebase.firestore();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:282:        var ref = database.collection('sections').where("id", "==", id);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:283:        var services = database.collection('services');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:284:        var theme_1_url = '{!! url('images/app_homepage_theme_1.png') !!}';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:285:        var theme_2_url = '{!! url('images/app_homepage_theme_2.png') !!}';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:286:        var htmlTemplate = ""
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:287:        var sectionImage = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:288:        var placeholderImage = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:289:        var placeholder = database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:290:        var storageRef = firebase.storage().ref('images');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:291:        var storage = firebase.storage();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:292:        var photo = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:293:        var fileName = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:294:        var oldImageFile = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:295:        placeholder.get().then(async function(snapshotsimage) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:296:            var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:297:            placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:298:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:299:        var refDriver = database.collection('settings').doc("DriverNearBy");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:300:        refDriver.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:301:            var radios = snapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:302:            if (radios.hasOwnProperty('distanceType')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:303:                $("#set_distance_type").text(radios.distanceType);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:304:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:305:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:306:        $('#html_template').summernote({
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:307:            height: 400,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:308:            width: 1000,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:309:            toolbar: [
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:310:                ['style', ['bold', 'italic', 'underline', 'clear']],
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:311:                ['font', ['strikethrough', 'superscript', 'subscript']],
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:312:                ['fontsize', ['fontsize']],
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:313:                ['color', ['color']],
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:314:                ['forecolor', ['forecolor']],
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:315:                ['backcolor', ['backcolor']],
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:328:                        .text(data.name));
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:329:                })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:330:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:331:            ref.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:332:                if (snapshots.docs) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:333:                    var section = snapshots.docs[0].data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:334:                    $("#name").val(section.name);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:335:                    $("#color").val(section.color);
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:336:                    if (section.isActive) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:337:                        $("#section_active").prop('checked', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:338:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:339:                    if (section.markerIcon) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:340:                        $("input[name='marker_icon'][value='" + section.markerIcon + "']").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:341:                    }else{
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:342:                        $("#sedan").prop("checked", true);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:343:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:344:                    if (section.hasOwnProperty('nearByRadius')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:345:                        $("#vendor_nearby_radius").val(section.nearByRadius);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:346:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:347:                    if (section.hasOwnProperty('adminCommision') && section.adminCommision != null && section.adminCommision.enable == true) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:348:                        $("#enable_commission").prop('checked', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:349:                        $("#show_admin_commision_type_value").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:350:                        $("#commission_type").val(section.adminCommision.type);
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:351:                        $("#commission_value").val(section.adminCommision.commission);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:352:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:353:                    if (section.hasOwnProperty('platformFee') && section.platformFee != null) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:354:                        if(section.platformFee.enable == true){
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:355:                            $("#enable_platform_fee").prop('checked', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:356:                            $("#platform_fee_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:357:                        }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:358:                        $("#platform_fee").val(section.platformFee.fee);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:359:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:360:                    if (section.packagingChargeEnable) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:361:                        $("#packagingChargeEnable").prop('checked', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:362:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:363:                    if (section.dine_in_active) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:364:                        $("#section_dine_in_active").prop('checked', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:365:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:366:                    if (section.is_product_details) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:367:                        $("#is_product_details").prop('checked', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:368:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:369:                    if (section.serviceType) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:370:                        $('#service_type').val(section.serviceType).trigger('change');
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:371:                        if (section.serviceType == "Cab Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:372:                            $('.diliverychargeDiv').hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:373:                            if (section.hasOwnProperty('rideType')) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:374:                                if (section.rideType == "ride") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:375:                                    $("#ride").prop('checked', true);
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:376:                                } else if (section.rideType == "intercity") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:377:                                    $("#intercity").prop('checked', true);
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:378:                                } else if (section.rideType == "both") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:379:                                    $("#both").prop('checked', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:380:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:381:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:382:                            if (section.hasOwnProperty('cab_service_template')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:383:                                $('#html_template').summernote("code", section.cab_service_template);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:384:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:385:                        }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:386:                        if (section.serviceType == "Ecommerce Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:387:                            $('.diliverychargeDiv').show();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:388:                            if (section.delivery_charge != '') {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:389:                                $('#deliveryCharge').val(section.delivery_charge);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:390:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:391:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:392:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:393:                    $("#referral_amount").val(section.referralAmount);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:394:                    if (section.theme == "theme_1") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:395:                        $("#app_homepage_theme_1").prop('checked', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:396:                    } else if (section.theme == "theme_2") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:397:                        $("#app_homepage_theme_2").prop('checked', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:398:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:399:                    sectionImage = section.sectionImage;
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:400:                    if (sectionImage != '' && sectionImage != null) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:401:                        photo = sectionImage;
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:402:                        oldImageFile = sectionImage;
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:403:                        if (sectionImage) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:404:                            photo = sectionImage;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:405:                        } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:406:                            photo = placeholderImage;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:407:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:408:                        $(".cat_image").append('<span class="image-item"><span class="remove-btn"><i class="fa fa-remove"></i></span><img class="rounded" style="width:50px" src="' + photo + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'" alt="image"></span>');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:409:                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:410:                        $(".cat_image").append('<span class="image-item"><span class="remove-btn"><i class="fa fa-remove"></i></span><img class="rounded" style="width:50px" src="' + placeholderImage + '" alt="image"></span>');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:411:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:412:                    $("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:413:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:414:            })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:415:            $(".edit-setting-btn").click(async function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:416:                var name = $("#name").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:417:                var color = $("#color").val();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:418:                var active = $("#section_active").is(":checked");
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:419:                var section_dine_in_active = $("#section_dine_in_active").is(":checked");
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:420:                var is_product_details = $("#is_product_details").is(":checked");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:421:                var service_type = $('#service_type').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:422:                var service_type_flag = $('#service_type option:selected').attr('flag');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:423:                var referralAmount = $("#referral_amount").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:424:                var enable_commission = $("#enable_commission").is(":checked");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:425:                var commission_type = $("#commission_type").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:426:                var commission_value = parseInt($("#commission_value").val());
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:427:                var markerIcon = $("input[name='marker_icon']:checked").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:428:                // var vendor_nearby_radius = parseInt($("#vendor_nearby_radius").val());
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:429:                var vendor_nearby_radius = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:430:                if (
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:431:                    service_type === "Multivendor Delivery Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:432:                    service_type === "On Demand Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:433:                    service_type === "Ecommerce Service"
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:434:                ) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:435:                    var inputVal = $("#vendor_nearby_radius").val().trim();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:436:                    vendor_nearby_radius = (inputVal === '' || isNaN(parseInt(inputVal))) ? null : parseInt(inputVal);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:437:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:438:                var app_homepage_theme = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:439:                if (service_type == 'Multivendor Delivery Service') {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:440:                    app_homepage_theme = $(".form-group input[name='app_homepage_theme']:checked").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:441:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:442:                if (service_type == "Ecommerce Service") {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:443:                    var delivery_charge = $('#deliveryCharge').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:444:                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:445:                    var delivery_charge = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:446:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:447:                if (service_type == "Cab Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:448:                    var htmlTemplate = $('#html_template').summernote('code');
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:449:                    var rideType = $('input[name="ride_type"]:checked').val();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:450:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:451:                    var htmlTemplate = '';
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:452:                    var rideType = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:453:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:454:                if (enable_commission == true) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:455:                    var adminCommision = {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:456:                        'commission': commission_value,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:457:                        'enable': true,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:458:                        'type': commission_type,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:459:                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:460:                } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:461:                    var adminCommision = {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:462:                        'commission': 0,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:463:                        'enable': false,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:464:                        'type': null,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:465:                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:466:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:467:                
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:468:                var enable_platform_fee = $('#enable_platform_fee').is(":checked");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:469:                var platform_fee = $('#platform_fee').val();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:470:                var platformFee = enable_platform_fee ? { enable: true, fee: platform_fee }  : { enable: false, fee: "0" };
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:471:                var packagingChargeEnable = $("#packagingChargeEnable").is(":checked");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:472:                
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:473:                if (name == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:474:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:475:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:476:                    $(".error_top").append("<p>{{ trans('lang.enter_cat_name_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:477:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:478:                } else if (service_type == "") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:479:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:480:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:481:                    $(".error_top").append("<p>{{ trans('lang.service_type_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:482:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:483:                } else if (referralAmount == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:484:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:485:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:486:                    $(".error_top").append("<p>{{ trans('lang.enter_referral_amount_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:487:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:488:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:489:                } else if (enable_commission == true && (isNaN(commission_value) || commission_value <= 0)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:490:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:491:                    $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:492:                    $(".error_top").append("<p>{{ trans('lang.commission_fix_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:493:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:494:                } else if (
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:495:                    (service_type === "Multivendor Delivery Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:496:                    service_type === "On Demand Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:497:                    service_type === "Ecommerce Service") &&
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:498:                    (vendor_nearby_radius === null || vendor_nearby_radius <= 0)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:499:                    $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:501:                    $(".error_top").append("<p>{{ trans('lang.enter_vendor_nearby_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:502:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:503:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:504:                    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:505:                    const IMG = await storeImageData();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:506:                    let sectionData = {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:507:                        'name': name,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:508:                        'color': color,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:509:                        'sectionImage': IMG,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:510:                        'isActive': active,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:511:                        'dine_in_active': section_dine_in_active,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:512:                        'is_product_details': is_product_details,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:513:                        'rideType': rideType,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:514:                        'serviceType': service_type,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:515:                        'serviceTypeFlag': service_type_flag,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:516:                        'delivery_charge': delivery_charge,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:517:                        'cab_service_template': htmlTemplate,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:518:                        'referralAmount': referralAmount,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:519:                        'adminCommision': adminCommision,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:520:                        'nearByRadius': vendor_nearby_radius,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:521:                        'theme': app_homepage_theme,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:522:                        'platformFee': platformFee,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:523:                        'packagingChargeEnable': packagingChargeEnable,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:524:                    };
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:525:                    //add this new code 
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:526:                    const radiusServices = ["Multivendor Delivery Service", "On Demand Service", "Ecommerce Service"];
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:527:                    const inputVal = $("#vendor_nearby_radius").val().trim();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:528:                    const radiusValue = (inputVal === '' || isNaN(parseInt(inputVal))) ? null : parseInt(inputVal);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:529:                    if (radiusServices.includes(service_type)) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:530:                        sectionData.nearByRadius = radiusValue;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:531:                    } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:532:                        sectionData.nearByRadius = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:533:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:534:                    if (
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:535:                        service_type == "Cab Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:536:                        service_type == "Parcel Delivery Service" ||
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:537:                        service_type == "Rental Service"
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:538:                    ) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:539:                        sectionData.markerIcon = markerIcon;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:540:                    }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:541:                    database.collection('sections').doc(id).update(sectionData).then(async function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:542:                        jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:543:                        window.location.href = '{{ route('section') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:544:                    })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:545:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:546:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:547:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:548:        function handleFileSelect(evt) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:549:            var f = evt.target.files[0];
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:550:            var reader = new FileReader();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:551:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:552:                return function(e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:553:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:554:                    var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:555:                    var val = $('#sectionImage').val().toLowerCase();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:556:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:557:                    var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:558:                    var filename = $('#sectionImage').val().replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:559:                    var timestamp = Number(new Date());
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:560:                    var filename = filename.split('.')[0] + "_" + timestamp + '.' + ext;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:561:                    photo = filePayload;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:562:                    fileName = filename;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:563:                    $(".cat_image").empty();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:564:                    if (filePayload) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:565:                        photo1 = filePayload;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:566:                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:567:                        photo1 = placeholderImage;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:568:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:569:                    $(".cat_image").append('<span class="image-item" id="photo_user"><span class="remove-btn" data-id="user-remove" data-img="' + photo + '"><i class="fa fa-remove"></i></span><img class="rounded" style="width:50px" src="' + photo1 + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'" alt="image"></span>');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:570:                };
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:571:            })(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:572:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:573:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:574:        async function storeImageData() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:575:            var newPhoto = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:576:            try {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:577:                if (oldImageFile != "" && photo != oldImageFile) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:578:                    var oldImageUrl = await storage.refFromURL(oldImageFile);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:579:                    imageBucket = oldImageUrl.bucket;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:580:                    var envBucket = "<?php echo env('FIREBASE_STORAGE_BUCKET'); ?>";
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:581:                    if (imageBucket == envBucket) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:582:                        await oldImageUrl.delete().then(() => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:583:                            console.log("Old file deleted!")
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:584:                        }).catch((error) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:585:                            console.log("ERR File delete ===", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:586:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:601:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:602:            } catch (error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:603:                console.log("ERR ===", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:604:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:605:            return newPhoto;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:606:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:607:        $(document).on("click", ".remove-btn", function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:608:            $(".image-item").remove();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:609:            $('#sectionImage').val('');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:610:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:611:        $('#enable_commission').click(function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:612:            var checkboxValue = $(this).is(":checked");
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:613:            if (checkboxValue) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:614:                $("#show_admin_commision_type_value").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:615:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:616:                $("#show_admin_commision_type_value").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:617:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:618:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:619:        $("#enable_platform_fee").click(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:620:            if ($(this).is(':checked')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:621:                $("#platform_fee_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:622:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:623:                $("#platform_fee_div").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:624:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:625:        });
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:626:        $('.service_type').change(function() {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:627:            var serviceType = $(this).val();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:628:            if (serviceType == "Cab Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:629:                $('.diliverychargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:630:                $('.packingChargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:631:                $('.htmlTemplateDiv').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:632:                $('#div_ride_type').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:633:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:634:                $('#radios_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:635:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:636:                $('.marker-icon-div').show();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:637:            } else if (serviceType == "Parcel Delivery Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:638:                $('.packingChargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:639:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:640:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:641:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:642:                $('#radios_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:643:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:644:                $('.marker-icon-div').show();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:645:            } else if (serviceType == "Ecommerce Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:646:                $('.diliverychargeDiv').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:647:                $('.packingChargeDiv').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:648:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:649:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:650:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:651:                $('#radios_set').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:652:                $('#stype').text("{{ trans('lang.store') }}");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:653:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:654:                $('.marker-icon-div').hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:655:            } else if (serviceType == "Rental Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:656:                $('.diliverychargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:657:                $('.packingChargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:658:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:659:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:660:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:661:                $('#radios_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:662:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:663:                $('.marker-icon-div').show();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:664:            } else if (serviceType == "On Demand Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:665:                $('.diliverychargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:666:                $('.packingChargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:667:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:668:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:669:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:670:                $('#radios_set').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:671:                $('#stype').text("{{ trans('lang.provider_services') }}");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:672:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:673:                $('.marker-icon-div').hide();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:674:            } else if (serviceType == "Multivendor Delivery Service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:675:                $('.diliverychargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:676:                $('.packingChargeDiv').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:677:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:678:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:679:                $('#food_delivery_set').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:680:                $('#radios_set').show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:681:                $('#stype').text("{{ trans('lang.store') }}");
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:682:                $('#homepage_theme').removeClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:683:                $('.marker-icon-div').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:684:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:685:                $('.diliverychargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:686:                $('.packingChargeDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:687:                $('.htmlTemplateDiv').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:688:                $('#div_ride_type').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:689:                $('#food_delivery_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:690:                $('#radios_set').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:691:                $('#homepage_theme').addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:692:                $('.marker-icon-div').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:693:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:694:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:695:        $(".form-group input[name='app_homepage_theme']").click(function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:696:            if ($(this).is(':checked')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:697:                var modal = $('#themeModal');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:698:                if ($(this).val() == "theme_1") {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:699:                    modal.find('#themeImage').attr('src', theme_1_url);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:700:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:701:                    modal.find('#themeImage').attr('src', theme_2_url);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:702:                }
```

## FILE: Admin Panel\resources\views\section\index.blade.php
```text
FOUND: C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php

  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:3:    <div class="page-wrapper">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:4:        <div class="row page-titles">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:5:            <div class="col-md-5 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:6:                <h3 class="text-themecolor">{{trans('lang.section_plural')}}</h3>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:7:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:8:            <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:9:                <ol class="breadcrumb">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:10:                    <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a></li>
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:11:                    <li class="breadcrumb-item active">{{trans('lang.section_table')}}</li>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:12:                </ol>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:13:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:14:            <div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:15:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:16:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:17:        <div class="container-fluid">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:18:        <div class="admin-top-section"> 
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:19:            <div class="row">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:20:                <div class="col-12">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:21:                    <div class="d-flex top-title-section pb-4 justify-content-between">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:22:                        <div class="d-flex top-title-left align-self-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:23:                            <span class="icon mr-3"><img src="{{ asset('images/section_image.png') }}"></span>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:24:                            <h3 class="mb-0">{{trans('lang.section_plural')}}</h3>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:25:                            <span class="counter ml-3 total_count"></span>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:26:                        </div>                    
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:27:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:28:                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:29:            </div> 
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:30:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:31:        <div class="table-list">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:32:        <div class="row">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:33:            <div class="col-12">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:34:                <div class="card border">
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:35:                    <div class="card-header d-flex justify-content-between align-items-center border-0">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:36:                    <div class="card-header-title">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:37:                        <h3 class="text-dark-2 mb-2 h4">{{trans('lang.section_table')}}</h3>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:38:                        <p class="mb-0 text-dark-2">{{trans('lang.section_table_text')}}</p>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:39:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:40:                    <div class="card-header-right d-flex align-items-center">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:41:                        <div class="card-header-btn mr-3"> 
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:42:                            <a class="btn-primary btn rounded-full" href="{!! route('section.create') !!}"><i class="mdi mdi-plus mr-2"></i>{{trans('lang.section_create')}}</a>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:43:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:44:                    </div>                
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:45:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:46:                    <div class="card-body">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:47:                            <div class="table-responsive m-t-10">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:48:                                <table id="sectionTable"
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:49:                                    class="display nowrap table table-hover table-striped table-bordered table table-striped"
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:50:                                    cellspacing="0" width="100%">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:51:                                    <thead>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:52:                                    <tr>
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:53:                                        <th>Sort</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:54:                                        <th>{{trans('lang.section_info')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:55:                                        <th>{{trans('lang.service_type')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:56:                                        <th>{{trans('lang.status')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:57:                                        <th>{{trans('lang.actions')}}</th>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:58:                                    </tr>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:59:                                    </thead>  
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:60:                                    <tbody id="append_list1">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:61:                                    </tbody>                             
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:62:                                </table>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:63:                            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:64:                        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:65:                    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:66:                </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:67:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:68:            </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:69:        </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:70:    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:71:@endsection
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:72:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:73:@section('scripts')
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:74:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:75:    <script type="text/javascript">
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:76:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:77:        var database = firebase.firestore();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:78:        
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:79:        var offest = 1;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:80:        var pagesize = 10;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:81:        var end = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:82:        var endarray = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:83:        var start = null;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:84:        var user_number = [];
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:85:        var ref = database.collection('sections').orderBy('order');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:86:        var append_list = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:87:        var placeholderImage = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:88:        var user_permissions = '<?php echo @session('user_permissions') ?>';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:89:        user_permissions = Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:90:        var checkDeletePermission = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:91:        if ($.inArray('section.service.delete', user_permissions) >= 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:92:            checkDeletePermission = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:93:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:94:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:95:        var placeholder = database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:96:        placeholder.get().then(async function (snapshotsimage) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:97:            var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:98:            placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:99:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:100:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:101:        $(document).ready(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:102:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:103:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:104:            
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:105:            append_list = document.getElementById('append_list1');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:106:            append_list.innerHTML = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:107:            ref.get().then(async function (snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:108:                html = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:109:                if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:110:                    $('.total_count').text(snapshots.docs.length); 
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:111:                }else{
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:112:                    $('.total_count').text(0);                 
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:113:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:114:                html = await buildHTML(snapshots);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:115:                if (html != '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:116:                    append_list.innerHTML = html;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:117:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:118:                jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:119:                const table = $('#sectionTable').DataTable({
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:120:                    ordering: false,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:121:                    order: [[0, "asc"]],
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:122:                    columnDefs: [
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:123:                        {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:124:                            orderable: false,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:125:                            targets: [2, 3]
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:126:                        },
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:127:                    ],
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:128:                    "language": datatableLang,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:129:                    responsive: true
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:130:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:131:                table.on('search.dt', function() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:132:                    var filteredCount = table.rows({ search: 'applied' }).count();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:133:                    $('.total_count').text(filteredCount);  // Update count
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:134:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:135:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:136:            $(function () {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:137:                $('[data-toggle="tooltip"]').tooltip();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:138:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:139:            
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:140:            $('#append_list1').sortable({
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:141:                handle: '.drag-handle',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:142:                helper: fixWidthHelper,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:143:                update: function (event, ui) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:144:                    updateOrder();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:145:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:146:            }).disableSelection();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:147:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:148:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:149:        function fixWidthHelper(e, ui) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:150:            ui.children().each(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:151:                $(this).width($(this).width());
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:152:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:153:            return ui;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:154:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:155:        
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:156:        function updateOrder() {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:157:            $('#data-table_processing').show();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:158:            var order = 1;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:159:            var promises = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:160:            $('#append_list1 tr').each(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:161:                var id = $(this).attr('data-id');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:162:                promises.push(
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:163:                    database.collection('sections').doc(id).update({ order: order })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:164:                );
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:165:                order++;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:166:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:167:            Promise.all(promises).then(() => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:168:                $('#data-table_processing').hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:169:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:170:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:171:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:172:        async function buildHTML(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:173:            var html = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:174:            await Promise.all(snapshots.docs.map(async (listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:175:                var val = listval.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:176:                if (val.title != '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:177:                    var getData = await getListData(val);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:178:                    html += getData;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:179:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:180:            }));
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:181:            return html;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:182:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:183:        
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:184:        async function getListData(val) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:185:            var html = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:186:            html = html + '<tr data-id="' + val.id + '">';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:187:            html += '<td class="drag-handle" style="cursor:move"><i class="mdi mdi-menu"></i></td>';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:188:            newdate = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:189:            var id = val.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:190:            var vendorUserId = val.author;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:191:            var route1 = '{{route("section.edit", ":id")}}';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:192:            route1 = route1.replace(':id', id);
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:193:            if (val.sectionImage != '') {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:194:                if (val.sectionImage) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:195:                    photo = val.sectionImage;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:196:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:197:                    photo = placeholderImage;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:198:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:199:                html = html + '<td><img alt="" width="100%" style="width:70px;height:70px;" src="' + photo + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'" alt="image"> <span data-url="' + route1 + '" class="redirecttopage"><a href="' + route1 + '">' + val.name + '</a></span></td>';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:200:            } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:201:                html = html + '<td><img alt="" width="100%" style="width:70px;height:70px;" src="' + placeholderImage + '" alt="image"> <span data-url="' + route1 + '" class="redirecttopage"><a href="' + route1 + '">' + val.name + '</a></span></td>';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:202:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:203:            html = html + '<td data-url="' + route1 + '" class="redirecttopage">' + val.serviceType + '</td>';
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:204:            if (val.isActive) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:205:                html = html + '<td><label class="switch"><input type="checkbox" checked id="' + val.id + '" name="isSwitch"><span class="slider round"></span></label></td>';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:206:            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:207:                html = html + '<td><label class="switch"><input type="checkbox" id="' + val.id + '" name="isSwitch"><span class="slider round"></span></label></td>';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:208:            }
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:209:            html = html + '<td><span class="action-btn"><a href="' + route1 + '" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.edit') }}"><i class="mdi mdi-lead-pencil"></i></a>';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:210:            if (checkDeletePermission) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:211:                html = html + '<a id="' + val.id + '" name="section-delete" class="delete-btn" href="javascript:void(0)" data-toggle="tooltip" data-bs-original-title="{{ trans('lang.delete') }}"><i class="mdi mdi-delete"></i></a>';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:212:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:213:            html = html + '</span></td>';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:214:            html = html + '</tr>';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:215:            return html;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:216:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:217:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:218:        $(document).on("click", "input[name='isSwitch']", function (e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:219:            var ischeck = $(this).is(':checked');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:220:            var id = this.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:221:            if (ischeck) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:222:                database.collection('sections').doc(id).update({'isActive': true}).then(function (result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:223:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:224:            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:225:                database.collection('sections').doc(id).update({'isActive': false}).then(function (result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:226:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:227:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:228:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:229:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:230:        $(document).on("click", "a[name='section-delete']", async function (e) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:231:            var id = this.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:232:            var all_delete_alert = '{{trans("lang.all_delete_alert")}}';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:233:            if (confirm(all_delete_alert)) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:234:                jQuery("#data-table_processing").show();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:235:                deleteDocumentWithImage('sections',id,'sectionImage')
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:236:                .then(() => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:237:                    return deleteAllSectionData(id);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:238:                })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:239:                .then(result => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:240:                    setTimeout(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:241:                        window.location.reload();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:242:                    }, 7000);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:243:                })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:244:                .catch(error => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:245:                    console.error("Error occurred:", error);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:246:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:247:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:248:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:249:
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:250:        async function deleteAllSectionData(sectionId) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:251:            await database.collection('banner_items').where('sectionId', '==', sectionId).get().then(async function (bannersnapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:252:                if (bannersnapshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:253:                    for (const temData of bannersnapshots.docs) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:254:                        await deleteDocumentWithImage('banner_items',temData.id,'photo');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:255:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:256:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:257:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:258:            await database.collection('subscription_plans').where('sectionId', '==', sectionId).get().then(async function (bannersnapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:259:                if (bannersnapshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:260:                    for (const temData of bannersnapshots.docs) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:261:                        await deleteDocumentWithImage('subscription_plans',temData.id);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:262:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:263:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:315:            await database.collection('vendors').where('section_id', '==', sectionId).get().then(async function (vendorsnapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:316:                if (vendorsnapshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:317:                    for (const temData of vendorsnapshots.docs) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:318:                        var item_data = temData.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:319:                        var vendorID = item_data.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:320:                            const snaps = await database.collection('vendors').where('id', '==', vendorID).get();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:321:                            await deleteDocumentWithImage('vendors',snaps.docs[0].id,'photo','photos','authorProfilePic');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:322:                        database.collection('vendors').doc(item_data.id).delete().then(async function () {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:323:                            await database.collection('order_transactions').where('vendorId', '==', vendorID).get().then(async function (ordertransactionsanpshots) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:324:                                if (ordertransactionsanpshots.docs.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:325:                                    ordertransactionsanpshots.docs.forEach((val) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:326:                                        var item_data = val.data();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:327:                                        database.collection('order_transactions').doc(item_data.id).delete().then(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:328:                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:329:                                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:330:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:331:                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:332:                            await database.collection('payouts').where('vendorID', '==', vendorID).get().then(async function (payoutssanpshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:333:                                if (payoutssanpshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:334:                                    payoutssanpshots.docs.forEach((val) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:335:                                        var item_data = val.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:336:                                        database.collection('payouts').doc(item_data.id).delete().then(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:337:                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:338:                                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:339:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:340:                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:341:                            await database.collection('users').where('vendorID', '==', vendorID).get().then(async function (userssanpshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:342:                                if (userssanpshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:343:                                    var projectId = '<?php echo env('FIREBASE_PROJECT_ID') ?>';
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:344:                                    userssanpshots.docs.forEach((val) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:345:                                        var item_data = val.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:346:                                        var dataObject = {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:347:                                            "data": {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:348:                                                "uid": item_data.id
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:349:                                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:350:                                        };
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:351:                                        jQuery.ajax({
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:352:                                            url: 'https://us-central1-' + projectId + '.cloudfunctions.net/deleteUser',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:353:                                            method: 'POST',
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:354:                                            contentType: "application/json; charset=utf-8",
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:355:                                            data: JSON.stringify(dataObject),
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:361:                                            error: function (xhr, status, error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:362:                                                var responseText = JSON.parse(xhr.responseText);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:363:                                                console.log('Delete user error:', responseText.error);
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:364:                                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:365:                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:366:                                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:367:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:368:                            });
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:369:                            await database.collection('vendor_orders').where('vendorID', '==', vendorID).get().then(async function (vendorordersanpshots) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:370:                                if (vendorordersanpshots.docs.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:371:                                    vendorordersanpshots.docs.forEach((val) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:372:                                        var item_data = val.data();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:373:                                        database.collection('vendor_orders').doc(item_data.id).delete().then(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:374:                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:375:                                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:376:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:377:                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:378:                            await database.collection('vendor_products').where('vendorID', '==', vendorID).get().then(async function (vendorproductsanpshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:379:                                if (vendorproductsanpshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:380:                                    for (const temData of vendorproductsanpshots.docs) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:381:                                        var item_data = temData.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:382:                                        await deleteDocumentWithImage('vendor_products',item_data.id,'photo','photos');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:383:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:384:                                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:385:                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:386:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:387:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:388:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:389:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:390:            //Delete ondemand service data
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:391:            await database.collection('provider_categories').where('sectionId', '==', sectionId).get().then(async function (snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:392:                if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:393:                    for (const temData of snapshots.docs) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:394:                        var item_data = temData.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:395:                        await deleteDocumentWithImage('provider_categories',item_data.id,'image');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:396:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:397:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:398:            });
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:399:            await database.collection('provider_orders').where('sectionId', '==', sectionId).get().then(async function (snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:400:                if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:401:                    snapshots.docs.forEach((val) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:402:                        var item_data = val.data();
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:403:                        database.collection('provider_orders').doc(item_data.id).delete().then(function () {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:404:                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:405:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:406:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:407:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:408:            await database.collection('providers_coupons').where('sectionId', '==', sectionId).get().then(async function (snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:409:                if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:410:                    for (const temData of snapshots.docs) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:411:                        var item_data = temData.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:412:                        await deleteDocumentWithImage('providers_coupons',item_data.id,'image');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:413:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:414:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:415:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:416:            await database.collection('providers_services').where('sectionId', '==', sectionId).get().then(async function (snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:417:                if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:418:                    for (const temData of snapshots.docs) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:419:                        var item_data = temData.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:420:                        await deleteDocumentWithImage('providers_services',item_data.id,'','photos');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:421:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:422:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:423:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:424:            await database.collection('favorite_provider').where('section_id', '==', sectionId).get().then(async function (snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:425:                if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:426:                    snapshots.docs.forEach((val) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:427:                        var item_data = val.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:428:                        database.collection('favorite_provider').doc(item_data.id).delete();
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:429:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:430:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:431:            });
```

## Field Decision Checklist
```text
create.blade.php:
- writes isActive:
- writes active:
- writes order:
- writes serviceTypeFlag:
- writes adminCommision:
- writes platformFee:
- writes nearByRadius:
- writes rideType:

edit.blade.php:
- writes isActive:
- writes active:
- preserves order:
- writes serviceTypeFlag:
- writes adminCommision:
- writes platformFee:
- writes nearByRadius:
- writes rideType:

index.blade.php:
- toggle writes isActive:
- toggle writes active:
- sort writes order:

Risk:
- If active is not written together with isActive, admin/API may drift again.
- If edit omits order, existing order may be preserved only if update() is used, not set().
```

## Final Status
STATUS: WEB_ADMIN_SECTION_EXACT_WRITE_BLOCKS_CREATED