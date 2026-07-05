# SERVICE 49A EXTRACT ADMIN PRODUCT CREATE EDIT WRITE BLOCK

Generated: 07/02/2026 12:31:49
Mode: READ ONLY.
Admin path: C:\deploy\adminpanel

Purpose: extract exact vendor_products write blocks before applying product normalizer.


## FILE: resources\views\items\create.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\items\create.blade.php:1:@extends('layouts.app')
  C:\deploy\adminpanel\resources\views\items\create.blade.php:2:@section('content')
  C:\deploy\adminpanel\resources\views\items\create.blade.php:3:    <div class="page-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:4:        <div class="row page-titles">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:5:            <div class="col-md-5 align-self-center">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:6:                <?php if ($id != '') { ?>
> C:\deploy\adminpanel\resources\views\items\create.blade.php:7:                <h3 class="text-themecolor 
vendor_name_heading"></h3>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:8:                <?php } else { ?>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:9:                <h3 class="text-themecolor">{{ 
trans('lang.item_plural') }}</h3>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:10:                <?php } ?>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:11:            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:12:            <div class="col-md-7 align-self-center">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:13:                <ol class="breadcrumb">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:14:                    <li class="breadcrumb-item"><a href="{!! 
route('dashboard') !!}">{{ trans('lang.dashboard') }}</a>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:15:                    </li>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:16:                    <?php 
  C:\deploy\adminpanel\resources\views\items\create.blade.php:17:                    if ($id != '') { ?>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:18:                    <li class="breadcrumb-item"><a
  C:\deploy\adminpanel\resources\views\items\create.blade.php:19:                            href="{{ route('vendors.items', $id) 
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:28:        <div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:29:            <div class="card-body">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:30:                <div class="error_top" style="display:none"></div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:31:                <div class="row vendor_payout_create">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:32:                    <div class="vendor_payout_create-inner">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:33:                        <fieldset>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:34:                            <legend>{{ 
trans('lang.item_information') }}</legend>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:35:                            <div class="form-group row width-100" 
id="admin_commision_info">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:36:                                <div class="m-3">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:37:                                    <div class="form-text 
font-weight-bold text-danger h6">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:38:                                        {{ 
trans('lang.price_instruction') }}</div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:39:                                    <div class="form-text 
font-weight-bold text-danger h6" id="admin_commision"></div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:40:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:41:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:42:                            <div class="form-group row width-100">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:43:                                @if (isset($openai_settings) && 
data_get($openai_settings, 'status') == true)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:44:                                    <div class="col-12"> 
> C:\deploy\adminpanel\resources\views\items\create.blade.php:45:                                        <label 
class="control-label">{{ trans('lang.item_name') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:46:                                        <button type="button" 
class="btn bg-white text-primary generate_btn_wrapper opacity-1 pl-1 mb-2 auto_fill_title"
> C:\deploy\adminpanel\resources\views\items\create.blade.php:47:                                            data-error="{{ 
trans('lang.ai_name_error') }}"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:48:                                            data-lang="{{ 
App::getLocale() }}"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:49:                                            data-route="{{ 
route('ai.title-auto-fill') }}">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:50:                                            <div 
class="btn-svg-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:51:                                                <img width="18" 
height="18" class="" src="{{ asset('images/svg/blink-icon-orange.svg') }}" alt="">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:52:                                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:53:                                            <span 
class="ai-text-animation d-none" role="status">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:54:                                                {{ 
trans('lang.ai_just_asecond') }}
  C:\deploy\adminpanel\resources\views\items\create.blade.php:55:                                            </span>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:56:                                            <span 
class="btn-text">{{ trans('lang.ai_generate') }}</span>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:57:                                        </button>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:58:                                        <div class="col-7 
outline-wrapper">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:59:                                            <input type="text" 
class="form-control" id="item_name" required>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:60:                                        </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:61:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:62:                                @else
> C:\deploy\adminpanel\resources\views\items\create.blade.php:63:                                    <label class="control-label 
col-3">{{ trans('lang.item_name') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:64:                                    <div class="col-7">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:65:                                        <input type="text" 
class="form-control" id="item_name" required>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:66:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:67:                                @endif
  C:\deploy\adminpanel\resources\views\items\create.blade.php:68:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:69:                            <div class="form-group row width-100 
desciption-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:70:                                @if (isset($openai_settings) && 
data_get($openai_settings, 'status') == true)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:71:                                    <div class="col-12"> 
  C:\deploy\adminpanel\resources\views\items\create.blade.php:72:                                        <label 
class="control-label">{{ trans('lang.item_description') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:73:                                        <button type="button" 
class="btn bg-white text-primary generate_btn_wrapper opacity-1 pl-1 mb-2 auto_fill_description"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:74:                                            data-error="{{ 
trans('lang.ai_description_error') }}"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:75:                                            data-lang="{{ 
App::getLocale() }}"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:76:                                            data-route="{{ 
route('ai.description-auto-fill') }}">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:77:                                            <div 
class="btn-svg-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:78:                                                <img width="18" 
height="18" class="" src="{{ asset('images/svg/blink-icon-orange.svg') }}" alt="">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:79:                                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:80:                                            <span 
class="ai-text-animation d-none" role="status">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:81:                                                {{ 
trans('lang.ai_just_asecond') }}
  C:\deploy\adminpanel\resources\views\items\create.blade.php:82:                                            </span>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:83:                                            <span 
class="btn-text">{{ trans('lang.ai_generate') }}</span>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:84:                                        </button>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:85:                                        <div class="col-7 
outline-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:86:                                            <textarea rows="8" 
class="form-control" id="item_description"></textarea>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:87:                                        </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:88:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:89:                                @else
  C:\deploy\adminpanel\resources\views\items\create.blade.php:90:                                    <label class="control-label 
col-3">{{ trans('lang.item_description') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:91:                                    <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:92:                                        <textarea rows="8" 
class="form-control" id="item_description"></textarea>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:93:                                    </div>    
  C:\deploy\adminpanel\resources\views\items\create.blade.php:94:                                @endif
  C:\deploy\adminpanel\resources\views\items\create.blade.php:95:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:96:                            <div class="form-group row width-50">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:97:                                <label class="col-3 
control-label">{{ trans('lang.item_price') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:98:                                <div class="col-7">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:99:                                    <input type="text" 
class="form-control" id="item_price" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" 
required>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:100:                                    <div class="form-text 
text-muted">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:101:                                        {{ 
trans('lang.item_price_help') }}
  C:\deploy\adminpanel\resources\views\items\create.blade.php:102:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:103:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:104:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:105:                            <div class="form-group row width-50">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:106:                                <label class="col-3 
control-label">{{ trans('lang.item_discount') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:107:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:108:                                    <input class="form-control 
item_discount" id="item_discount" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:109:                                    <div class="form-text 
text-muted">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:110:                                        {{ 
trans('lang.item_discount_help') }}
  C:\deploy\adminpanel\resources\views\items\create.blade.php:111:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:112:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:113:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:114:                            <div class="form-group row width-50">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:115:                                <label class="col-3 
control-label">{{ trans('lang.item_quantity') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:116:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:117:                                    <input type="number" 
class="form-control item_quantity" id="item_quantity" value="-1">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:118:                                    <div class="form-text 
text-muted">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:119:                                        {{ 
trans('lang.item_quantity_help') }}
  C:\deploy\adminpanel\resources\views\items\create.blade.php:120:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:121:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:122:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:123:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:124:                            <div class="variation_wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:125:                                @if (isset($openai_settings) && 
data_get($openai_settings, 'status') == true)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:126:                                <div class="width-100 text-right">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:127:                                    <button type="button" 
class="btn bg-white text-primary generate_btn_wrapper opacity-1 pl-1 mb-2 variation_setup_auto_fill"
> C:\deploy\adminpanel\resources\views\items\create.blade.php:128:                                        data-error="{{ 
trans('lang.ai_name_description_error') }}"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:129:                                        data-lang="{{ 
App::getLocale() }}"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:130:                                        data-route="{{ 
route('ai.variation-setup-auto-fill') }}">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:131:                                        <div 
class="btn-svg-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:132:                                            <img width="18" 
height="18" class="" src="{{ asset('images/svg/blink-icon-orange.svg') }}" alt="">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:133:                                        </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:134:                                        <span 
class="ai-text-animation d-none" role="status">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:135:                                            {{ 
trans('lang.ai_just_asecond') }}
  C:\deploy\adminpanel\resources\views\items\create.blade.php:136:                                        </span>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:137:                                        <span class="btn-text">{{ 
trans('lang.ai_generate') }}</span>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:138:                                    </button>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:139:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:140:                                @endif
  C:\deploy\adminpanel\resources\views\items\create.blade.php:141:                                <div class="outline-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:142:                                    <?php if ($id == '') { ?>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:143:                                    <div class="form-group row 
width-50">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:144:                                        <label class="col-3 
control-label">{{ trans('lang.item_vendor_id') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:145:                                        <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:146:                                            <select 
id="item_vendor" class="form-control" required>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:147:                                                <option 
value="">{{ trans('lang.select_vendor') }}</option>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:148:                                            </select>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:149:                                        </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:150:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:151:                                    <?php } ?>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:152:                                    <div class="form-group row 
width-50">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:153:                                        <label class="col-3 
control-label">{{ trans('lang.item_category_id') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:154:                                        <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:155:                                            <select 
id='item_category' class="form-control" required>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:156:                                                <option 
value="">{{ trans('lang.select_category') }}</option>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:157:                                            </select>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:158:                                        </div>
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:243:                                    <div class="btn-svg-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:244:                                        <img width="18" 
height="18" class="" src="{{ asset('images/svg/blink-icon-orange.svg') }}" alt="">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:245:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:246:                                    <span 
class="ai-text-animation d-none" role="status">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:247:                                        {{ 
trans('lang.ai_just_asecond') }}
  C:\deploy\adminpanel\resources\views\items\create.blade.php:248:                                    </span>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:249:                                    <span class="btn-text">{{ 
trans('lang.ai_generate') }}</span>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:308:                                    <div class="row">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:309:                                        <div class="col-6">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:310:                                            <label class="col-3 
control-label">{{ trans('lang.item_title') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:311:                                            <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:312:                                                <input 
type="text" class="form-control add_ons_title">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:313:                                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:314:                                        </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:315:                                        <div class="col-6">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:316:                                            <label class="col-3 
control-label">{{ trans('lang.item_price') }}</label>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:317:                                            <div class="col-7">
> C:\deploy\adminpanel\resources\views\items\create.blade.php:318:                                                <input 
type="number" class="form-control add_ons_price">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:319:                                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:320:                                        </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:321:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:322:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:323:                                <div class="form-group row 
save_add_one_btn width-100" style="display:none">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:324:                                    <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:325:                                        <button type="button" 
onclick="saveAddOneFunction()" class="btn btn-primary">{{ trans('lang.save_add_ones') }}</button>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:326:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:327:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:328:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:329:                        </fieldset>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:330:                        
  C:\deploy\adminpanel\resources\views\items\create.blade.php:331:                        <fieldset class="specification-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:332:                            <legend>{{ 
trans('lang.product_specification') }}</legend>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:333:                            @if (isset($openai_settings) && 
data_get($openai_settings, 'status') == true)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:334:                            <div class="width-100 text-right">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:335:                                <button type="button" class="btn 
bg-white text-primary generate_btn_wrapper opacity-1 pl-1 mb-2 specification_auto_fill"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:336:                                    data-error="{{ 
trans('lang.ai_specification_error') }}"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:337:                                    data-lang="{{ 
App::getLocale() }}"
  C:\deploy\adminpanel\resources\views\items\create.blade.php:338:                                    data-route="{{ 
route('ai.specification-auto-fill') }}">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:339:                                    <div class="btn-svg-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:340:                                        <img width="18" 
height="18" class="" src="{{ asset('images/svg/blink-icon-orange.svg') }}" alt="">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:341:                                    </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:342:                                    <span 
class="ai-text-animation d-none" role="status">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:343:                                        {{ 
trans('lang.ai_just_asecond') }}
  C:\deploy\adminpanel\resources\views\items\create.blade.php:344:                                    </span>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:345:                                    <span class="btn-text">{{ 
trans('lang.ai_generate') }}</span>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:346:                                </button>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:347:                            </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:348:                            @endif
  C:\deploy\adminpanel\resources\views\items\create.blade.php:349:                            <div class="outline-wrapper">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:350:                                <div class="form-group 
product_specification extra-row">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:351:                                </div>
  C:\deploy\adminpanel\resources\views\items\create.blade.php:352:                                <div class="form-group row 
width-100">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:353:                                    <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:413:    @endif
  C:\deploy\adminpanel\resources\views\items\create.blade.php:414:    
  C:\deploy\adminpanel\resources\views\items\create.blade.php:415:    <script type="text/javascript">
  C:\deploy\adminpanel\resources\views\items\create.blade.php:416:        
  C:\deploy\adminpanel\resources\views\items\create.blade.php:417:        var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:418:        var vendor_id = "{{ $id }}";
  C:\deploy\adminpanel\resources\views\items\create.blade.php:419:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:420:        var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:421:        var photo = "";
  C:\deploy\adminpanel\resources\views\items\create.blade.php:422:        var digital_product_file = '';
> C:\deploy\adminpanel\resources\views\items\create.blade.php:423:        var digital_product_file_name = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:424:        var digital_product_ext = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:425:        var addOnesTitle = [];
> C:\deploy\adminpanel\resources\views\items\create.blade.php:426:        var addOnesPrice = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:427:        var categories_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:428:        var brand_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:429:        var attributes_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:430:        var vendor_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:431:        var product_specification = {};
> C:\deploy\adminpanel\resources\views\items\create.blade.php:432:        var photos = [];
> C:\deploy\adminpanel\resources\views\items\create.blade.php:433:        var product_image_filename = [];
> C:\deploy\adminpanel\resources\views\items\create.blade.php:434:        var variant_photos = [];
> C:\deploy\adminpanel\resources\views\items\create.blade.php:435:        var variant_filename = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:436:        var variant_vIds = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:437:        var productImagesCount = 0;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:438:        var allowed_file_size = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:439:        var vendor_section_id = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:440:        
  C:\deploy\adminpanel\resources\views\items\create.blade.php:441:        var sections_list = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:442:        var itemLimit = '-1';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:443:        var createdItem = 0;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:444:        var subscriptionModel = false;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:445:        var commissionModel = false;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:446:        var vendorId = '';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:447:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:448:        var ref_sections = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:449:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:450:        ref_sections.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:451:            await snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:452:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:453:                sections_list.push(data);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:454:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:455:            
  C:\deploy\adminpanel\resources\views\items\create.blade.php:456:            var result = sections_list.find(function(e) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:457:                return e.id === section_id;
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:467:        var refCurrency = 
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:506:            if (sectionData.is_product_details) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:507:                $(".food_delivery_div").removeClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:508:            } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:509:                $(".food_delivery_div").addClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:510:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:511:
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:529:        
  C:\deploy\adminpanel\resources\views\items\create.blade.php:530:        
  C:\deploy\adminpanel\resources\views\items\create.blade.php:531:        $(document).ready(async function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:532:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:533:            jQuery(document).on("click", ".mdi-cloud-upload", 
function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:534:                var variant = jQuery(this).data('variant');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:535:                var photo_remove = $(this).attr('data-img');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:536:                index = variant_photos.indexOf(photo_remove);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:537:                if (index > -1) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:538:                    variant_photos.splice(index, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\items\create.blade.php:539:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:540:                var file_remove = $(this).attr('data-file');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:541:                fileindex = variant_filename.indexOf(file_remove);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:542:                if (fileindex > -1) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:543:                    variant_filename.splice(fileindex, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\items\create.blade.php:544:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:545:                variantindex = variant_vIds.indexOf(variant);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:546:                if (variantindex > -1) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:547:                    variant_vIds.splice(variantindex, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\items\create.blade.php:548:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:549:                $('[id="file_' + variant + '"]').click();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:550:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:551:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:552:            jQuery(document).on("click", ".mdi-delete", 
function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:553:                var variant = jQuery(this).data('variant');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:554:                $('[id="variant_' + variant + '_image"]').empty();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:555:                var photo_remove = $(this).attr('data-img');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:556:                index = variant_photos.indexOf(photo_remove);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:557:                if (index > -1) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:558:                    variant_photos.splice(index, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\items\create.blade.php:559:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:560:                var file_remove = $(this).attr('data-file');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:561:                fileindex = variant_filename.indexOf(file_remove);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:562:                if (fileindex > -1) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:563:                    variant_filename.splice(fileindex, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\items\create.blade.php:564:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:565:                variantindex = variant_vIds.indexOf(variant);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:566:                if (variantindex > -1) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:567:                    variant_vIds.splice(variantindex, 1); // 2nd 
parameter means remove one item only
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:576:                    selected_section = vendor_section_id;
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:592:            database.collection('vendors').where('section_id', 
'==', section_id).orderBy('title').where('title','!=', '').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:593:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:594:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:595:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:596:                    vendor_list.push(data);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:597:                    
$('#item_vendor').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\create.blade.php:598:                        .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:602:                        .attr("data-user-id", data.author)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:603:                        .text(data.title));
  C:\deploy\adminpanel\resources\views\items\create.blade.php:604:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:605:                    if (reataurantIDDirec == data.id) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:606:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:607:                        vendor_section_id = data.section_id;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:608:                        localStorage.setItem('vendor_section_id', 
vendor_section_id);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:609:
> C:\deploy\adminpanel\resources\views\items\create.blade.php:610:                        
$(".vendor_name_heading").html(data.title);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:611:                        var section_info = $.map(sections_list, 
function(section, i) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:612:                            if (section.id == data.section_id) {
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:627:                        change_categories(reataurantIDDirec);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:628:                        
$(".vendor_name_heading").html($('#item_vendor option[value="' + reataurantIDDirec + '"]').text());
  C:\deploy\adminpanel\resources\views\items\create.blade.php:629:                        
$(".item_vendor_id").val(reataurantIDDirec).val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:630:                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:631:                })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:632:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:633:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:634:            var vendorsCatRef = 
database.collection('vendor_categories').where('section_id', '==', section_id);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:635:            vendorsCatRef.where('publish', '==', 
true).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:636:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:637:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:638:                    categories_list.push(data);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:639:                })
  C:\deploy\adminpanel\resources\views\items\create.blade.php:640:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:641:            
  C:\deploy\adminpanel\resources\views\items\create.blade.php:642:            var brandRef = 
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
> C:\deploy\adminpanel\resources\views\items\create.blade.php:679:                var name = $("#item_name").val();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:680:                var price = $("#item_price").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:681:                var item_quantity = $("#item_quantity").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:682:                var set_vendor_id = vendor_id ? vendor_id : 
$("#item_vendor option:selected").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:683:                var category = $("#item_category").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:684:                var section_id = 
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
> C:\deploy\adminpanel\resources\views\items\create.blade.php:713:                if (photos != '') {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:714:                    photo = photos[0]
  C:\deploy\adminpanel\resources\views\items\create.blade.php:715:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:716:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:717:                let selectedTaxes = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:718:                $('#taxes option:selected').each(function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:719:                    let taxData = $(this).attr('data-tax');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:720:                    if (taxData) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:721:                        
selectedTaxes.push(JSON.parse(decodeURIComponent(taxData)));
  C:\deploy\adminpanel\resources\views\items\create.blade.php:722:                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:723:                });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:724:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:725:                var id = database.collection('temp').doc().id;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:726:                
> C:\deploy\adminpanel\resources\views\items\create.blade.php:727:                if (name == '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:728:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:729:                    $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\items\create.blade.php:730:                    $(".error_top").append("<p>{{ 
trans('lang.enter_item_name_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:731:                    window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:732:                } else if (price == '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:733:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:734:                    $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\items\create.blade.php:735:                    $(".error_top").append("<p>{{ 
trans('lang.enter_item_price_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:736:                    window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:737:                } else if (price <= 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:738:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:739:                    $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\items\create.blade.php:740:                    $(".error_top").append("<p>{{ 
trans('lang.enter_positive_price_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:741:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:742:                } else if (item_quantity == '' || item_quantity < 
-1) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:743:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:744:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:745:                    if (item_quantity == '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:746:                        $(".error_top").append("<p>{{ 
trans('lang.enter_item_quantity_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:747:                    } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:748:                        $(".error_top").append("<p>{{ 
trans('lang.invalid_item_quantity_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:749:                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:750:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:751:                } else if (set_vendor_id == '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:752:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:753:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:754:                    $(".error_top").append("<p>{{ 
trans('lang.select_vendor_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:755:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:756:                } else if (category == '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:757:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:758:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:759:                    $(".error_top").append("<p>{{ 
trans('lang.select_item_category_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:760:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:761:                } else if (brand == '' && 
sectionData.serviceTypeFlag == "ecommerce-service") {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:762:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:763:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:764:                    $(".error_top").append("<p>{{ 
trans('lang.select_brand_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:765:                    window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:766:                } else if (parseInt(price) < parseInt(discount)) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:767:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:768:                    $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\items\create.blade.php:769:                    $(".error_top").append("<p>{{ 
trans('lang.price_should_not_less_then_discount_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:770:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:771:                } else if (description == '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:772:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:773:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:774:                    $(".error_top").append("<p>{{ 
trans('lang.enter_item_description_error') }}</p>");
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:783:                    var vendorRef = await 
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:816:                    var quantityerror = 0;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:817:                    var priceerror = 0;
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:835:                            $.each(variantsSet, function(key, 
variant) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:836:                                var variant_id = uniqid();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:837:                                var variant_sku = variant;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:838:                                var variant_price = $('#price_' + 
variant)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:839:                                    .val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:840:                                var variant_quantity = $('#qty_' 
+ variant)
  C:\deploy\adminpanel\resources\views\items\create.blade.php:841:                                    .val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:842:                                var variant_image = $('#variant_' 
+ variant +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:843:                                    '_url').val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:844:                                if (variant_image) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:845:                                    variants.push({
  C:\deploy\adminpanel\resources\views\items\create.blade.php:846:                                        'variant_id': variant_id,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:847:                                        'variant_sku': 
variant_sku,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:848:                                        'variant_price': 
variant_price,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:849:                                        'variant_quantity': 
variant_quantity,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:850:                                        'variant_image': 
variant_image
  C:\deploy\adminpanel\resources\views\items\create.blade.php:851:                                    });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:852:                                } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:853:                                    variants.push({
  C:\deploy\adminpanel\resources\views\items\create.blade.php:854:                                        'variant_id': variant_id,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:855:                                        'variant_sku': 
variant_sku,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:856:                                        'variant_price': 
variant_price,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:857:                                        'variant_quantity': 
variant_quantity
  C:\deploy\adminpanel\resources\views\items\create.blade.php:858:                                    });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:859:                                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:860:                                if (variant_quantity = '' ||
  C:\deploy\adminpanel\resources\views\items\create.blade.php:861:                                    variant_quantity < -1 ||
  C:\deploy\adminpanel\resources\views\items\create.blade.php:862:                                    variant_quantity == 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:863:                                    quantityerror++;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:864:                                }
> C:\deploy\adminpanel\resources\views\items\create.blade.php:865:                                if (variant_price == "" || 
variant_price <=
  C:\deploy\adminpanel\resources\views\items\create.blade.php:866:                                    0) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:867:                                    priceerror++;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:868:                                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:869:                            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:870:                        }).catch(err => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:871:                            
jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:872:                            $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:873:                            $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:874:                            $(".error_top").append("<p>" + err + 
"</p>");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:875:                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:876:                        });
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
> C:\deploy\adminpanel\resources\views\items\create.blade.php:887:                        if (priceerror > 0) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:888:                            alert('Please add your variants  
Price');
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:900:                        await storeProductImageData().then(async 
(IMG) => {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:901:                            if (IMG.length > 0) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:902:                                photo = IMG[0];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:903:                            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:904:                            var objects = {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:905:                                'name': name,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:906:                                'price': price.toString(),
  C:\deploy\adminpanel\resources\views\items\create.blade.php:907:                                'quantity': 
parseInt(item_quantity),
> C:\deploy\adminpanel\resources\views\items\create.blade.php:908:                                'disPrice': discount.toString(),
> C:\deploy\adminpanel\resources\views\items\create.blade.php:909:                                'vendorID': set_vendor_id,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:910:                                'categoryID': category,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:911:                                'brandID': brand,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:912:                                'section_id': section_id,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:913:                                'photo': photo,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:914:                                'calories': itemCalories,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:915:                                "grams": itemGrams,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:916:                                'proteins': itemProteins,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:917:                                'fats': itemFats,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:918:                                'description': description,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:919:                                'publish': itemPublish,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:920:                                'nonveg': nonveg,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:921:                                'veg': veg,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:922:                                'addOnsTitle': addOnesTitle,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:923:                                'addOnsPrice': addOnesPrice,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:924:                                'takeawayOption': itemTakeaway,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:925:                                'product_specification': 
product_specification,
  C:\deploy\adminpanel\resources\views\items\create.blade.php:926:                                'id': id,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:927:                                'item_attribute': item_attribute,
> C:\deploy\adminpanel\resources\views\items\create.blade.php:928:                                'photos': IMG,
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:964:            var f = evt.target.files[0];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:965:            var reader = new FileReader();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:966:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:967:                return function(e) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:968:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:969:                    var hash = CryptoJS.SHA256(Math.random() + 
CryptoJS.SHA256(filePayload));
> C:\deploy\adminpanel\resources\views\items\create.blade.php:970:                    var val = f.name;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:971:                    var ext = val.split('.')[1];
> C:\deploy\adminpanel\resources\views\items\create.blade.php:972:                    var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\resources\views\items\create.blade.php:973:                    var filename = 
(f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\items\create.blade.php:974:                    var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\items\create.blade.php:975:                    var filename = filename.split('.')[0] + "_" + 
timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:976:                    var uploadTask = 
storageRef.child(filename).put(theFile);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:977:                    uploadTask.on('state_changed', 
function(snapshot) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:978:                        var progress = (snapshot.bytesTransferred 
/ snapshot.totalBytes) * 100;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:979:                        jQuery("#uploding_image").text("Image is 
uploading...");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:980:                    }, function(error) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:981:                    }, function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:982:                        
uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:983:                            
jQuery("#uploding_image").text("Upload is completed");
> C:\deploy\adminpanel\resources\views\items\create.blade.php:984:                            photo = downloadURL;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:985:                            $(".item_image").empty()
  C:\deploy\adminpanel\resources\views\items\create.blade.php:986:                            $(".item_image").append(
> C:\deploy\adminpanel\resources\views\items\create.blade.php:987:                                '<img class="rounded" 
style="width:50px" src="' + photo +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:988:                                '" alt="image">');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:989:                        });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:990:                    });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:991:                };
  C:\deploy\adminpanel\resources\views\items\create.blade.php:992:            })(f);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:993:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:994:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:995:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:996:        function handleFileSelectProduct(evt) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:997:            var f = evt.target.files[0];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:998:            var reader = new FileReader();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:999:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1000:                return function(e) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1001:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1002:                    var hash = CryptoJS.SHA256(Math.random() + 
CryptoJS.SHA256(filePayload));
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1003:                    var val = f.name;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1004:                    var ext = val.split('.')[1];
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1005:                    var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1006:                    var filename = 
(f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1007:                    var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1008:                    var filename = filename.split('.')[0] + "_" 
+ timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1009:                    var uploadTask = 
storageRef.child(filename).put(theFile);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1010:                    uploadTask.on('state_changed', 
function(snapshot) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1011:                        var progress = 
(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1012:                        
$('.product_image').find(".uploding_image_photos").text(
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1013:                            "Image is uploading...");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1014:                    }, function(error) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1015:                    }, function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1016:                        
uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1017:                            
jQuery("#uploding_image").text("Upload is completed");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1018:                            if (downloadURL) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1019:                                productImagesCount++;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1020:                                photos_html = '<span 
class="image-item" id="photo_' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1021:                                    productImagesCount +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1022:                                    '"><span class="remove-btn" 
data-id="' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1023:                                    productImagesCount + '" 
data-img="' + downloadURL +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1024:                                    '"><i class="fa 
fa-remove"></i></span><img width="100px" id="" height="auto" src="' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1025:                                    downloadURL + '"></span>';
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1026:                                
$(".product_image").append(photos_html);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1027:                                photos.push(downloadURL);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1028:                            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1029:                        });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1030:                    });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1031:                };
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1032:            })(f);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1033:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1034:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1035:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1036:        function handleZipUpload(evt) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1037:            var f = evt.target.files[0];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1038:            var reader = new FileReader();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1039:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1040:                return function(e) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1041:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1042:                    var hash = CryptoJS.SHA256(Math.random() + 
CryptoJS.SHA256(filePayload));
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1043:                    var val = f.name;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1044:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1045:                    var size = f.size;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1046:                    var max_file_size = 
parseInt(allowed_file_size) * 1000000;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1047:                    if (size > max_file_size) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1048:                        $("#digital_product_file").val('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1049:                        alert('{{ 
trans('lang.max_file_limit_error') }}' + allowed_file_size + 'Mb');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1050:                        return false;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1051:                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1052:                    if (ext == "jpg" || ext == "jpeg" || ext == 
"png" || ext == "gif" || ext == "zip" || ext ==
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1053:                        "pdf") {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1054:                        var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1055:                        var filename = 
(f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1056:                        var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1057:                        var filename = filename.split('.')[0] + 
"_" + timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1058:                        digital_product_file_name = filename;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1059:                        digital_product_file = filePayload;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1060:                        if (ext == "zip") {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1061:                            digital_product_ext = 'zip';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1062:                            $("#uploding_zip").html(
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1063:                                '<span class="image-item 
zip-file"><span class=""   data-file="' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1064:                                filePayload + '"></span><a 
href="' + filePayload +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1065:                                '" download><i class="fa 
fa-file-text" style="font-size:45px"></i></a></span>'
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1066:                            );
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1067:                        } else if (ext == 'pdf') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1068:                            digital_product_ext = 'pdf';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1069:                            $("#uploding_zip").html(
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1070:                                '<span class="image-item 
zip-file"><span class=""   data-file="' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1071:                                filePayload + '"></span><a 
href="' + filePayload +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1072:                                '" target="_blank"><i class="fa 
fa-file-text" style="font-size:45px"></i></a></span>'
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1073:                            );
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1074:                        } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1075:                            digital_product_ext = 'image';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1076:                            $("#uploding_zip").html(
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1077:                                '<span class="image-item 
zip-file"><span class=""  data-file="' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1078:                                filePayload + '"></span><img 
width="100px" id="" height="auto" src="' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1079:                                filePayload + '"></span>');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1080:                        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1081:                        $("#digital_product_file").val('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1082:                    } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1083:                        $("#digital_product_file").val('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1084:                        alert('{{ 
trans('lang.enter_valid_file_ext') }}')
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1085:                        return false;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1086:                    }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1087:                };
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1088:            })(f);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1089:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1090:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1091:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1092:        $(document).on("click", ".remove-btn", function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1093:            var id = $(this).attr('data-id');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1094:            var photo_remove = $(this).attr('data-img');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1095:            $("#photo_" + id).remove();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1096:            index = photos.indexOf(photo_remove);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1097:            if (index > -1) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1098:                photos.splice(index, 1);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1099:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1100:        });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1101:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1102:        function handleVariantFileSelect(evt, vid) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1103:            var f = evt.target.files[0];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1104:            var reader = new FileReader();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1105:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1106:                return function(e) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1107:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1108:                    var hash = CryptoJS.SHA256(Math.random() + 
CryptoJS.SHA256(filePayload));
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1109:                    var val = f.name;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1110:                    var ext = val.split('.')[1];
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1111:                    var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1112:                    var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1113:                    var filename = 
(f.name).replace(/C:\\fakepath\\/i, '')
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1114:                    var filename = 'variant_' + vid + '_' + 
timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1115:                    variant_filename.push(filename);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1116:                    variant_photos.push(filePayload);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1117:                    variant_vIds.push(vid);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1118:                    $('[id="variant_' + vid + 
'_image"]').empty();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1119:                    $('[id="variant_' + vid + 
'_image"]').html('<img class="rounded" style="width:50px" src="' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1120:                        filePayload + '" alt="image"><i 
class="mdi mdi-delete" data-variant="' + vid +
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1121:                        '" data-img="' + filePayload + '" 
data-file="' + filename + '"></i>');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1122:                    $('#upload_' + vid).attr('data-img', 
filePayload);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1123:                    $('#upload_' + vid).attr('data-file', 
filename);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1124:                };
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1125:            })(f);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1126:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1127:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1128:        function addOneFunction() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1129:            $("#add_ones_div").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1130:            $(".save_add_one_btn").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1131:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1132:        function addProductSpecificationFunction() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1133:            $("#add_product_specification_div").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1134:            $(".save_product_specification_btn").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1135:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1136:        function addProductimagesFunction() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1137:            $("#add_product_images_div").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1138:            $(".save_product_images_btn").show();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1139:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1140:        function saveAddOneFunction() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1141:            var optiontitle = $(".add_ons_title").val();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1142:            var optionPrice = $(".add_ons_price").val();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1143:            $(".add_ons_price").val('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1144:            $(".add_ons_title").val('');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1145:            if (optiontitle != '' && optionPrice != '') {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1146:                addOnesPrice.push(optionPrice.toString());
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1147:                addOnesTitle.push(optiontitle);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1148:                var index = addOnesTitle.length - 1;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1149:                $(".add_ons_list").append('<div class="row" 
style="margin-top:5px;" id="add_ones_list_iteam_' + index +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1150:                    '"><div class="col-5"><input 
class="form-control" type="text" value="' + optiontitle +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1151:                    '" disabled ></div><div class="col-5"><input 
class="form-control" type="text" value="' +
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1152:                    optionPrice +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1153:                    '" disabled ></div><div 
class="col-2"><button class="btn" type="button" onclick="deleteAddOnesSingle(' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1154:                    index + ')"><span class="fa 
fa-trash"></span></button></div></div>');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1155:            } else {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1156:                alert("Please enter Title and Price");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1157:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1158:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1159:        function saveProductSpecificationFunction() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1160:            var optionlabel = $(".add_label").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1161:            var optionvalue = $(".add_value").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1162:            $(".add_label").val('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1163:            $(".add_value").val('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1164:            if (optionlabel != '' && optionlabel != '') {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1165:                product_specification[optionlabel] = optionvalue;
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1166:                $(".product_specification").append(
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1167:                    '<div class="row" style="margin-top:5px;" 
id="add_product_specification_iteam_' + optionlabel +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1168:                    '"><div class="col-5"><input 
class="form-control" type="text" value="' + optionlabel +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1169:                    '" disabled ></div><div class="col-5"><input 
class="form-control" type="text" value="' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1170:                    optionvalue +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1171:                    '" disabled ></div><div 
class="col-2"><button class="btn" type="button" onclick=deleteProductSpecificationSingle("' +
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1172:                    optionlabel + '")><span class="fa 
fa-trash"></span></button></div></div>');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1173:            } else {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1174:                alert("Please enter Label and Value");
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1175:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1176:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1177:        function deleteAddOnesSingle(index) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1178:            addOnesTitle.splice(index, 1);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1179:            addOnesPrice.splice(index, 1);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1180:            $("#add_ones_list_iteam_" + index).hide();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1181:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1182:        function deleteProductSpecificationSingle(index) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1183:            delete product_specification[index];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1184:            $("#add_product_specification_iteam_" + 
index).hide();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1185:        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1186:         var item_vendor_id = $(".item_vendor_id").val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1187:         
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1188:         if (item_vendor_id) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1189:                var selected_vendor = item_vendor_id;
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1190:         var vendor_name = 
$(this).find('option:selected').text();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1191:            $(".vendor_name_heading").html(vendor_name);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1192:            change_categories(selected_vendor);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1193:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1194:            
database.collection('settings').doc('globalSettings').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1195:                let globalTax = snapshots.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1196:                let vendorLatitude = $("#item_vendor 
option:selected").data('lat');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1197:                let vendorLongitude = $("#item_vendor 
option:selected").data('long');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1198:                let countryName = 
getCookie('vendorCountryName_'+selected_vendor);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1199:                if (!countryName && (vendorLatitude && 
vendorLongitude)) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1200:                    countryName = await 
getCountryFromLatLng(vendorLatitude,vendorLongitude);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1201:                    
setCookie('vendorCountryName_'+selected_vendor, countryName, 365);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1202:                }
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1203:                if(globalTax.taxScope == "product" && 
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1235:                    });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1236:                }else{
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1237:                    $(".product-taxes").addClass('d-none');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1238:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1239:            });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1240:            
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1241:         }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1242:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1243:        $("#item_vendor").change(function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1244:            var selected_vendor = this.value || '';
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1245:            var vendor_name = 
$(this).find('option:selected').text();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1246:            $(".vendor_name_heading").html(vendor_name);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1247:            change_categories(selected_vendor);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1248:
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1249:            
database.collection('settings').doc('globalSettings').get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1250:                let globalTax = snapshots.data();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1251:                let vendorLatitude = $("#item_vendor 
option:selected").data('lat');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1252:                let vendorLongitude = $("#item_vendor 
option:selected").data('long');
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1253:                let countryName = 
getCookie('vendorCountryName_'+selected_vendor);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1254:                if (!countryName && (vendorLatitude && 
vendorLongitude)) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1255:                    countryName = await 
getCountryFromLatLng(vendorLatitude,vendorLongitude);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1256:                    
setCookie('vendorCountryName_'+selected_vendor, countryName, 365);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1257:                }
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1258:                if(globalTax.taxScope == "product" && 
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1298:            
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
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1311:                                .attr("section_id", 
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
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1325:        function selectAttribute(item_attribute = '') {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1326:            if (item_attribute) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1327:                var item_attribute = 
$.parseJSON(atob(item_attribute));
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1328:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1329:            var html = '';
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1330:            
$("#item_attribute").find('option:selected').each(function() {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1331:                var $this = $(this);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1332:                var selected_options = [];
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1333:                if (item_attribute) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1334:                    $.each(item_attribute.attributes, 
function(index, attribute) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1335:                        if ($this.val() == 
attribute.attribute_id) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1336:                            
selected_options.push(attribute.attribute_options);
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1337:                        }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1338:                    });
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1339:                }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1340:                html += '<div class="row" id="attr_' + 
$this.val() + '">';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1341:                html += '<div class="col-md-3">';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1342:                html += '<label>' + $this.text() + '</label>';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1343:                html += '</div>';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1344:                html += '<div class="col-lg-9">';
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1345:                html += '<input type="text" class="form-control" 
id="attribute_options_' + $this.val() + '" value="' + selected_options + '" placeholder="Add attribute values" 
data-role="tagsinput" onchange="variants_update(\'' + btoa(JSON.stringify(item_attribute)) + '\')">';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1346:                html += '</div>';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1347:                html += '</div>';
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1348:            });
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1349:            $("#item_attributes").html(html);
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1350:            $("#item_attributes 
input[data-role=tagsinput]").tagsinput();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1351:            if ($("#item_attribute").val().length == 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1352:                $("#attributes").val('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1353:                $("#variants").val('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1354:                $("#item_variants").html('');
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1355:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1356:        }
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1357:        function variants_update(item_attributeX = '') {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1358:            if (item_attributeX) {
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1359:                var item_attributeX = 
$.parseJSON(atob(item_attributeX));
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1360:            }
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1361:            var html = '';
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1362:            var item_attribute = 
$("#item_attribute").map(function(idx, ele) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1363:                return $(ele).val();
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1364:            }).get();
> C:\deploy\adminpanel\resources\views\items\create.blade.php:1365:            if (item_attribute.length > 0) {
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1366:                var attributes = [];
  C:\deploy\adminpanel\resources\views\items\create.blade.php:1367:                var attributeSet = [];



TEXT_END

## FILE: resources\views\items\edit.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\items\edit.blade.php:21:            <div class="card-body">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:22:                <div class="error_top" style="display:none"></div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:23:                <div class="row vendor_payout_create">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:24:                    <div class="vendor_payout_create-inner">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:25:                        <fieldset>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:26:                            <legend>{{ 
trans('lang.item_information') }}</legend>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:27:                            <div class="form-group row width-100" 
id="admin_commision_info">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:28:                                <div class="m-3">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:29:                                    <div class="form-text 
font-weight-bold text-danger h6">{{ trans('lang.price_instruction') }}</div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:30:                                    <div class="form-text 
font-weight-bold text-danger h6" id="admin_commision"></div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:31:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:32:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:33:                            <div class="form-group row width-50">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:34:                                @if (isset($openai_settings) && 
data_get($openai_settings, 'status') == true)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:35:                                    <div class="col-12"> 
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:36:                                        <label 
class="control-label">{{ trans('lang.item_name') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:37:                                        <button type="button" 
class="btn bg-white text-primary generate_btn_wrapper opacity-1 pl-1 mb-2 auto_fill_title"
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:38:                                            data-error="{{ 
trans('lang.ai_name_error') }}"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:39:                                            data-lang="{{ 
App::getLocale() }}"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:40:                                            data-route="{{ 
route('ai.title-auto-fill') }}">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:41:                                            <div 
class="btn-svg-wrapper">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:42:                                                <img width="18" 
height="18" class="" src="{{ asset('images/svg/blink-icon-orange.svg') }}" alt="">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:43:                                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:44:                                            <span 
class="ai-text-animation d-none" role="status">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:45:                                                {{ 
trans('lang.ai_just_asecond') }}
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:46:                                            </span>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:47:                                            <span 
class="btn-text">{{ trans('lang.ai_generate') }}</span>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:48:                                        </button>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:49:                                        <div class="col-7 
outline-wrapper">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:50:                                            <input type="text" 
class="form-control" id="item_name" required>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:51:                                        </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:52:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:53:                                @else
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:54:                                    <label class="control-label 
col-3">{{ trans('lang.item_name') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:55:                                    <div class="col-7">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:56:                                        <input type="text" 
class="form-control" id="item_name" required>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:57:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:58:                                @endif
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:59:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:60:                            <div class="form-group row width-100 
desciption-wrapper">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:61:                                @if (isset($openai_settings) && 
data_get($openai_settings, 'status') == true)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:62:                                    <div class="col-12"> 
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:63:                                        <label 
class="control-label">{{ trans('lang.item_description') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:64:                                        <button type="button" 
class="btn bg-white text-primary generate_btn_wrapper opacity-1 pl-1 mb-2 auto_fill_description"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:65:                                            data-error="{{ 
trans('lang.ai_description_error') }}"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:66:                                            data-lang="{{ 
App::getLocale() }}"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:67:                                            data-route="{{ 
route('ai.description-auto-fill') }}">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:68:                                            <div 
class="btn-svg-wrapper">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:69:                                                <img width="18" 
height="18" class="" src="{{ asset('images/svg/blink-icon-orange.svg') }}" alt="">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:70:                                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:71:                                            <span 
class="ai-text-animation d-none" role="status">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:72:                                                {{ 
trans('lang.ai_just_asecond') }}
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:73:                                            </span>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:74:                                            <span 
class="btn-text">{{ trans('lang.ai_generate') }}</span>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:75:                                        </button>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:76:                                        <div class="col-7 
outline-wrapper">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:77:                                            <textarea rows="8" 
class="form-control" id="item_description"></textarea>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:78:                                        </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:79:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:80:                                @else
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:81:                                    <label class="control-label 
col-3">{{ trans('lang.item_description') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:82:                                    <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:83:                                        <textarea rows="8" 
class="form-control" id="item_description"></textarea>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:84:                                    </div>    
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:85:                                @endif
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:86:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:87:                            <div class="form-group row width-50">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:88:                                <label class="col-3 
control-label">{{ trans('lang.item_price') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:89:                                <div class="col-7">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:90:                                    <input type="text" 
class="form-control" id="item_price" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" 
required>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:91:                                    <div class="form-text 
text-muted">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:92:                                        {{ 
trans('lang.item_price_help') }}
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:93:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:94:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:95:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:96:                            <div class="form-group row width-50">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:97:                                <label class="col-3 
control-label">{{ trans('lang.item_discount') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:98:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:99:                                    <input class="form-control 
item_discount" id="item_discount" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:100:                                    <div class="form-text 
text-muted">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:101:                                        {{ 
trans('lang.item_discount_help') }}
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:102:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:103:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:104:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:105:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:106:                            <div class="form-group row width-50">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:107:                                <label class="col-3 
control-label">{{ trans('lang.item_quantity') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:108:                                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:109:                                    <input type="number" 
class="form-control item_quantity" id="item_quantity" value="-1">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:110:                                    <div class="form-text 
text-muted">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:111:                                        {{ 
trans('lang.item_quantity_help') }}
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:112:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:113:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:114:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:115:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:116:                            <div class="variation_wrapper">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:117:                                @if (isset($openai_settings) && 
data_get($openai_settings, 'status') == true)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:118:                                <div class="width-100 text-right">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:119:                                    <button type="button" 
class="btn bg-white text-primary generate_btn_wrapper opacity-1 pl-1 mb-2 variation_setup_auto_fill"
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:120:                                        data-error="{{ 
trans('lang.ai_name_description_error') }}"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:121:                                        data-lang="{{ 
App::getLocale() }}"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:122:                                        data-route="{{ 
route('ai.variation-setup-auto-fill') }}">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:123:                                        <div 
class="btn-svg-wrapper">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:124:                                            <img width="18" 
height="18" class="" src="{{ asset('images/svg/blink-icon-orange.svg') }}" alt="">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:125:                                        </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:126:                                        <span 
class="ai-text-animation d-none" role="status">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:127:                                            {{ 
trans('lang.ai_just_asecond') }}
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:128:                                        </span>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:129:                                        <span class="btn-text">{{ 
trans('lang.ai_generate') }}</span>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:130:                                    </button>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:131:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:132:                                @endif
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:133:                                <div class="outline-wrapper">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:134:                                    <div class="form-group row 
width-50 item_vendor_div">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:135:                                        <label class="col-3 
control-label">{{ trans('lang.item_vendor_id') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:136:                                        <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:137:                                            <select 
id="item_vendor" class="form-control" required>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:138:                                                <option value="">{{ 
trans('lang.select_vendor') }}</option>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:139:                                            </select>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:140:                                        </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:141:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:142:                                    <div class="form-group row 
width-50">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:143:                                        <label class="col-3 
control-label">{{ trans('lang.item_category_id') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:144:                                        <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:145:                                            <select 
id='item_category' class="form-control" required>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:146:                                                <option value="">{{ 
trans('lang.select_category') }}</option>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:147:                                            </select>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:148:                                        </div>
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:240:                                    data-route="{{ 
route('ai.ingredients-auto-fill') }}">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:241:                                    <div class="btn-svg-wrapper">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:242:                                        <img width="18" height="18" 
class="" src="{{ asset('images/svg/blink-icon-orange.svg') }}" alt="">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:243:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:244:                                    <span class="ai-text-animation 
d-none" role="status">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:245:                                        {{ 
trans('lang.ai_just_asecond') }}
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:246:                                    </span>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:305:                                    <div class="row">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:306:                                        <div class="col-6">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:307:                                            <label class="col-3 
control-label">{{ trans('lang.item_title') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:308:                                            <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:309:                                                <input type="text" 
class="form-control add_ons_title">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:310:                                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:311:                                        </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:312:                                        <div class="col-6">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:313:                                            <label class="col-3 
control-label">{{ trans('lang.item_price') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:314:                                            <div class="col-7">
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:315:                                                <input 
type="number" class="form-control add_ons_price">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:316:                                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:317:                                        </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:318:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:319:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:320:                                <div class="form-group row 
save_add_one_btn width-100" style="display:none">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:321:                                    <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:322:                                        <button type="button" 
onclick="saveAddOneFunction()" class="btn btn-primary">{{ trans('lang.save_add_ones') }}</button>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:323:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:324:                                </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:325:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:326:                        </fieldset>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:327:                        <fieldset class="specification-wrapper">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:328:                            <legend>{{ 
trans('lang.product_specification') }}</legend>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:329:                             @if (isset($openai_settings) && 
data_get($openai_settings, 'status') == true)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:330:                            <div class="width-100 text-right">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:331:                                <button type="button" class="btn 
bg-white text-primary generate_btn_wrapper opacity-1 pl-1 mb-2 specification_auto_fill"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:332:                                    data-error="{{ 
trans('lang.ai_specification_error') }}"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:333:                                    data-lang="{{ App::getLocale() 
}}"
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:334:                                    data-route="{{ 
route('ai.specification-auto-fill') }}">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:335:                                    <div class="btn-svg-wrapper">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:336:                                        <img width="18" height="18" 
class="" src="{{ asset('images/svg/blink-icon-orange.svg') }}" alt="">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:337:                                    </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:338:                                    <span class="ai-text-animation 
d-none" role="status">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:339:                                        {{ 
trans('lang.ai_just_asecond') }}
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:340:                                    </span>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:341:                                    <span class="btn-text">{{ 
trans('lang.ai_generate') }}</span>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:342:                                </button>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:343:                            </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:344:                            @endif
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:345:                            <div class="outline-wrapper">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:346:                                <div class="form-group 
product_specification extra-row">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:347:                                    <div class="row" 
id="product_specification_heading" style="display: none;">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:348:                                        <div class="col-6">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:349:                                            <label class="col-2 
control-label">{{ trans('lang.lable') }}</label>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:350:                                        </div>
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:413:    @endif
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:414:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:415:    <script type="text/javascript">
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:416:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:417:        var section_id = getCookie('section_id') || null;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:418:        var vendor_id = "{{ $id }}";
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:419:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:420:        var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:421:        var ref = 
database.collection('vendor_products').where("id", "==", vendor_id);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:422:        var ref_sections = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:423:        var storage = firebase.storage();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:424:        var categories_list = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:425:        var brand_list = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:426:        var attributes_list = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:427:        var vendor_list = [];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:428:        var photo = "";
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:429:        var addOnesTitle = [];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:430:        var addOnesPrice = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:431:        var product_specification = {};
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:432:        var photos = [];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:433:        var new_added_photos = [];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:434:        var new_added_photos_filename = [];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:435:        var photosToDelete = [];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:436:        var variant_photos = [];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:437:        var variant_filename = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:438:        var variantImageToDelete = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:439:        var variant_vIds = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:440:        var digital_product_file = '';
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:441:        var digital_product_file_name = '';
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:457:        var refCurrency = 
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:468:        var sectionRef = 
database.collection('sections').doc(section_id);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:469:        sectionRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:470:            sectionData = snapshots.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:471:            if (sectionData.adminCommision.enable == true) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:472:                commissionModel = true;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:473:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:474:            if(sectionData.serviceTypeFlag == "ecommerce-service"){
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:475:                $(".brandDiv").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:476:                $("#is_digital_div").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:488:            if (sectionData.is_product_details) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:489:                $(".item_delivery_div").removeClass('d-none');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:490:            } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:491:                $(".item_delivery_div").addClass('d-none');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:492:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:493:
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:511:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:512:            $('#taxes').chosen({
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:513:                width: '100%',
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:514:                placeholder_text_multiple: '{{ 
trans('lang.select_taxes') }}',
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:515:            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:516:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:517:            jQuery(document).on("click", ".mdi-cloud-upload", 
function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:518:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:519:                var variant = jQuery(this).data('variant');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:520:                var fileurl = $('[id="variant_' + variant + 
'_url"]').val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:521:                if (fileurl) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:522:                    variantImageToDelete.push(fileurl);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:523:                }
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:524:                var photo_remove = $(this).attr('data-img');
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:525:                index = variant_photos.indexOf(photo_remove);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:526:                if (index > -1) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:527:                    variant_photos.splice(index, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:528:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:529:                var file_remove = $(this).attr('data-file');
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:530:                fileindex = variant_filename.indexOf(file_remove);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:531:                if (fileindex > -1) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:532:                    variant_filename.splice(fileindex, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:533:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:534:                variantindex = variant_vIds.indexOf(variant);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:535:                if (variantindex > -1) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:536:                    variant_vIds.splice(variantindex, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:537:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:538:                $('[id="variant_' + variant + '_url"]').val('');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:539:                $('[id="file_' + variant + '"]').click();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:540:            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:541:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:542:            jQuery(document).on("click", ".mdi-delete", function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:543:                var variant = jQuery(this).data('variant');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:544:                var fileurl = $('[id="variant_' + variant + 
'_url"]').val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:545:                if (fileurl) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:546:                    variantImageToDelete.push(fileurl);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:547:                }
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:548:                var photo_remove = $(this).attr('data-img');
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:549:                index = variant_photos.indexOf(photo_remove);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:550:                if (index > -1) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:551:                    variant_photos.splice(index, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:552:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:553:                var file_remove = $(this).attr('data-file');
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:554:                fileindex = variant_filename.indexOf(file_remove);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:555:                if (fileindex > -1) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:556:                    variant_filename.splice(fileindex, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:557:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:558:                variantindex = variant_vIds.indexOf(variant);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:559:                if (variantindex > -1) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:560:                    variant_vIds.splice(variantindex, 1); // 2nd 
parameter means remove one item only
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:561:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:562:                $('[id="variant_' + variant + '_image"]').empty();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:563:                $('[id="variant_' + variant + '_url"]').val('');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:564:            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:565:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:566:            jQuery(document).on("click", "#is_digital_product", 
function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:567:                var selected_section = 
$('#item_vendor').find('option:selected').attr('data-section-id');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:568:                var section_info = $.map(sections_list, 
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:577:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:578:            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:579:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:580:            var digitalProductRef = 
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:589:            ref_sections.get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:590:                snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:591:                    var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:602:                        .attr("value", data.id)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:603:                        .attr("data-lat", data.latitude)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:604:                        .attr("data-long", data.longitude)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:605:                        .attr("data-section-id", data.section_id)
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:617:            var brandRef = 
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
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:685:                $("#item_name").val(product.name);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:686:                $("#item_price").val(product.price);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:687:                $("#item_quantity").val(product.quantity);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:688:                $("#item_discount").val(product.disPrice);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:689:                
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:690:                if (product.hasOwnProperty("calories")) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:691:                    $(".item_calories").val(product.calories)
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:692:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:693:                if (product.hasOwnProperty("grams")) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:694:                    $(".item_grams").val(product.grams);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:695:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:696:                if (product.hasOwnProperty("proteins")) {
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
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:735:                        $(".add_ons_list").append('<div class="row" 
style="margin-top:5px;" id="add_ones_list_iteam_' + index + '"><div class="col-5"><input class="form-control" type="text" value="' 
+ element + '" disabled ></div><div class="col-5"><input class="form-control" type="text" value="' + product.addOnsPrice[index] + 
'" disabled ></div><div class="col-2"><button class="btn" type="button" onclick="deleteAddOnesSingle(' + index +
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:736:                            ')"><span class="fa 
fa-trash"></span></button></div></div>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:737:                    })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:738:                    addOnesTitle = product.addOnsTitle;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:739:                    addOnesPrice = product.addOnsPrice;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:740:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:741:                if 
(product.hasOwnProperty('product_specification')) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:742:                    product_specification = 
product.product_specification;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:743:                    if (product_specification != null && 
product_specification != "") {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:744:                        product_specification = {};
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:745:                        $.each(product.product_specification, 
function(key, value) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:746:                            product_specification[key] = value;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:747:                        });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:748:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:749:                    var count = 1;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:750:                    for (var key in product.product_specification) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:751:                        $('#product_specification_heading').show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:752:                        $(".product_specification").append('<div 
class="row" style="margin-top:5px;" id="add_product_specification_iteam_' + count + '">' +
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:753:                            '<div class="col-5"><input 
class="form-control" type="text" value="' + key + '" disabled ></div>' +
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:754:                            '<div class="col-5"><input 
class="form-control" type="text" value="' + product.product_specification[key] + '" disabled ></div>' +
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:755:                            '<div class="col-2"><button class="btn" 
type="button" onclick="deleteProductSpecificationSingle(' + count + ')"><span class="fa fa-trash"></span></button></div></div>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:756:                        count++;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:757:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:758:                }
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:759:                if (product.hasOwnProperty('photo')) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:760:                    photo = product.photo;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:761:                    if (product.photos.length > 0) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:762:                        photos = product.photos;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:763:                    } else {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:764:                        if (photo != '' && photo != null) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:765:                            photos.push(photo);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:766:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:767:                    }
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:768:                    if (photos.length > 0) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:769:                        photos.forEach((element, index) => {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:770:                            $(".product_image").append('<span 
class="image-item" id="photo_' + index + '"><span class="remove-btn" data-id="' + index + '" data-img="' + photos[index] + '" 
data-status="old"><i class="fa fa-remove"></i></span><img class="rounded" width="50px" id="" height="auto" src="' + photos[index] + 
'" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:771:                        })
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:772:                    } else if (photo != '' && photo != null) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:773:                        $(".product_image").append('<span 
class="image-item" id="photo_1"><img class="rounded" width="50px" id="" height="auto" src="' + photo + '" 
onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:774:                    } else {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:775:                        $(".product_image").append('<span 
class="image-item" id="photo_1"><img class="rounded" style="width:50px" src="' + placeholderImage + '" alt="image">');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:776:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:777:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:778:                jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:779:            })
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:780:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:781:            $(".edit-form-btn").click(async function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:782:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:783:                var name = $("#item_name").val();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:784:                var price = $("#item_price").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:785:                var item_quantity = $("#item_quantity").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:786:                var set_vendor_id = $("#item_vendor 
option:selected").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:787:                var category = $("#item_category 
option:selected").val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:788:                var section_id = 
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
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:817:                if ((photo == '' || photo == null) && photos.length 
> 0) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:818:                    photo = photos[0];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:819:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:820:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:821:                let selectedTaxes = [];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:822:                $('#taxes option:selected').each(function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:823:                    let taxData = $(this).attr('data-tax');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:824:                    if (taxData) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:825:                        
selectedTaxes.push(JSON.parse(decodeURIComponent(taxData)));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:826:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:827:                });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:828:
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:829:                if (name == '') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:830:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:831:                    $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:832:                    $(".error_top").append("<p>{{ 
trans('lang.enter_item_name_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:833:                    window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:834:                } else if (price == '') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:835:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:836:                    $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:837:                    $(".error_top").append("<p>{{ 
trans('lang.enter_item_price_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:838:                    window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:839:                } else if (price <= 0) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:840:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:841:                    $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:842:                    $(".error_top").append("<p>{{ 
trans('lang.enter_positive_price_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:843:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:844:                } else if (item_quantity == '' || item_quantity < 
-1) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:845:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:846:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:847:                    if (item_quantity == '') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:848:                        $(".error_top").append("<p>{{ 
trans('lang.enter_item_quantity_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:849:                    } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:850:                        $(".error_top").append("<p>{{ 
trans('lang.invalid_item_quantity_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:851:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:852:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:853:                } else if (set_vendor_id == '') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:854:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:855:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:856:                    $(".error_top").append("<p>{{ 
trans('lang.select_vendor_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:857:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:858:                } else if (category == undefined || category == '') 
{
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:859:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:860:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:861:                    $(".error_top").append("<p>{{ 
trans('lang.select_item_category_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:862:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:863:                } else if (brand == '' && 
sectionData.serviceTypeFlag == "ecommerce-service") {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:864:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:865:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:866:                    $(".error_top").append("<p>{{ 
trans('lang.select_brand_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:867:                    window.scrollTo(0, 0);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:868:                } else if (parseInt(price) < parseInt(discount)) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:869:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:870:                    $(".error_top").html("");
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:871:                    $(".error_top").append("<p>{{ 
trans('lang.price_should_not_less_then_discount_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:872:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:873:                } else if (description == '') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:874:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:875:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:876:                    $(".error_top").append("<p>{{ 
trans('lang.enter_item_description_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:877:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:878:                } else if (is_digital_product == true && 
digital_product_file == '') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:879:                    $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:880:                    $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:881:                    $(".error_top").append("<p>{{ 
trans('lang.upload_digital_file_error') }}</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:882:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:883:                } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:884:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:885:                    $(".error_top").hide();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:886:                    //start-item attribute
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:887:                    var error = 0;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:888:                    var item_attribute = null;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:889:                    var quantityerror = 0;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:890:                    var priceerror = 0;
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:909:                            $.each(variantsSet, function(key, 
variant) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:910:                                var variant_id = uniqid();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:911:                                var variant_sku = variant;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:912:                                var variant_price = $('#price_' + 
variant).val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:913:                                var variant_quantity = $('#qty_' + 
variant).val();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:914:                                if (variant_price == "" || 
variant_price == 0 || variant_quantity == "") {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:915:                                    error++;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:916:                                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:917:                                var variant_image = $('#variant_' + 
variant + '_url').val();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:918:                                if (variant_image) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:919:                                    variants.push({
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:920:                                        'variant_id': variant_id,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:921:                                        'variant_sku': variant_sku,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:922:                                        'variant_price': 
variant_price,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:923:                                        'variant_quantity': 
variant_quantity,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:924:                                        'variant_image': 
variant_image
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:925:                                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:926:                                } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:927:                                    variants.push({
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:928:                                        'variant_id': variant_id,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:929:                                        'variant_sku': variant_sku,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:930:                                        'variant_price': 
variant_price,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:931:                                        'variant_quantity': 
variant_quantity
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:932:                                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:933:                                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:934:                                if (variant_quantity = '' || 
variant_quantity < -1 || variant_quantity == 0) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:935:                                    quantityerror++;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:936:                                }
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:937:                                if (variant_price == "" || 
variant_price <= 0) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:938:                                    priceerror++;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:939:                                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:940:                            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:941:                        }).catch(err => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:942:                            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:943:                            $(".error_top").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:944:                            $(".error_top").html("");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:945:                            $(".error_top").append("<p>" + err + 
"</p>");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:946:                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:947:                        });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:948:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:949:
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:950:                    if (attributes.length > 0 && variants.length > 
0) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:951:                        if (error > 0) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:952:                            alert('Please add your variants price');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:953:                            return false;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:954:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:955:                        if (quantityerror > 0) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:956:                            alert('Please add your variants 
quantity it should be -1 or greater than -1');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:957:                            return false;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:958:                        }
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:959:                        if (priceerror > 0) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:960:                            alert('Please add your variants  
Price');
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:972:                    
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:973:                    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:974:                    
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:975:                    await storeDigitalImageData().then(async 
(DigitalImg) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:976:                        await storeImageData().then(async (IMG) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:977:                            if (IMG.length > 0) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:978:                                photo = IMG[0];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:979:                            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:980:                            var objects = {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:981:                                'name': name,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:982:                                'price': price.toString(),
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:983:                                'quantity': parseInt(item_quantity),
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:984:                                'disPrice': discount,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:985:                                'vendorID': set_vendor_id,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:986:                                'categoryID': category,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:987:                                'brandID': brand,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:988:                                'section_id': section_id,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:989:                                'photo': photo,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:990:                                'calories': itemCalories,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:991:                                "grams": itemGrams,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:992:                                'proteins': itemProteins,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:993:                                'fats': itemFats,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:994:                                'description': description,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:995:                                'publish': itemPublish,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:996:                                'nonveg': nonveg,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:997:                                'veg': veg,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:998:                                'addOnsTitle': addOnesTitle,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:999:                                'addOnsPrice': addOnesPrice,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1000:                                'takeawayOption': itemTakeaway,
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1001:                                'product_specification': 
product_specification,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1002:                                'item_attribute': item_attribute,
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1003:                                'photos': IMG,
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
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1037:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1038:                return function(e) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1039:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1040:                    var hash = CryptoJS.SHA256(Math.random() + 
CryptoJS.SHA256(filePayload));
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1041:                    var val = f.name;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1042:                    var ext = val.split('.')[1];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1043:                    var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1044:                    var filename = 
(f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1045:                    var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1046:                    var filename = filename.split('.')[0] + "_" + 
timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1047:                    var uploadTask = 
storageRef.child(filename).put(theFile);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1048:                    uploadTask.on('state_changed', 
function(snapshot) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1049:                        var progress = (snapshot.bytesTransferred 
/ snapshot.totalBytes) * 100;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1050:                        jQuery("#uploding_image").text("Image is 
uploading...");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1051:                    }, function(error) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1052:                    }, function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1053:                        
uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1054:                            jQuery("#uploding_image").text("Upload 
is completed");
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1055:                            photo = downloadURL;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1056:                            $(".item_image").empty()
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1057:                            $(".item_image").append('<img 
class="rounded" style="width:50px" src="' + photo + '" alt="image" onerror="this.onerror=null;this.src=\'' + placeholderImage + 
'\'">');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1058:                        });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1059:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1060:                };
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1061:            })(f);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1062:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1063:        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1064:        function handleVariantFileSelect(evt, vid) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1065:            var f = evt.target.files[0];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1066:            var reader = new FileReader();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1067:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1068:                return function(e) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1069:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1070:                    var hash = CryptoJS.SHA256(Math.random() + 
CryptoJS.SHA256(filePayload));
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1071:                    var val = f.name;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1072:                    var ext = val.split('.')[1];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1073:                    var docName = val.split('fakepath')[1];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1074:                    var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1075:                    var filename = 
(f.name).replace(/C:\\fakepath\\/i, '')
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1076:                    var filename = 'variant_' + vid + '_' + 
timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1077:                    variant_filename.push(filename);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1078:                    variant_photos.push(filePayload);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1079:                    variant_vIds.push(vid);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1080:                    $('[id="variant_' + vid + '_image"]').empty();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1081:                    $('[id="variant_' + vid + 
'_image"]').html('<img class="rounded" style="width:50px" src="' + filePayload + '" onerror="this.onerror=null;this.src=\'' + 
placeholderImage + '\'" alt="image"><i class="mdi mdi-delete" data-variant="' + vid + '" data-img="' + filePayload + '" 
data-file="' + filename + '" data-status="new"></i>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1082:                    $('#upload_' + vid).attr('data-img', 
filePayload);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1083:                    $('#upload_' + vid).attr('data-file', 
filename);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1084:                };
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1085:            })(f);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1086:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1087:        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1088:        async function storeVariantImageData() {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1089:            var newPhoto = [];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1090:            if (variant_photos.length > 0) {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1091:                await Promise.all(variant_photos.map(async 
(variantPhoto, index) => {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1092:                    variantPhoto = 
variantPhoto.replace(/^data:image\/[a-z]+;base64,/, "");
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1093:                    var uploadTask = await 
storageRef.child(variant_filename[index]).putString(variantPhoto, 'base64', {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1094:                        contentType: 'image/jpg'
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1095:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1096:                    var downloadURL = await 
uploadTask.ref.getDownloadURL();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1097:                    $('[id="variant_' + variant_vIds[index] + 
'_url"]').val(downloadURL);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1098:                    newPhoto.push(downloadURL);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1099:                }));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1100:            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1101:            if (variantImageToDelete.length > 0) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1102:                await Promise.all(variantImageToDelete.map(async 
(delImage) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1103:                    var delImageUrlRef = await 
storage.refFromURL(delImage);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1104:                    imageBucket = delImageUrlRef.bucket;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1105:                    var envBucket = "<?php echo 
env('FIREBASE_STORAGE_BUCKET'); ?>";
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1106:                    if (imageBucket == envBucket) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1107:                        await delImageUrlRef.delete().then(() => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1108:                            console.log("Old file deleted!")
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1109:                        }).catch((error) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1110:                            console.log("ERR File delete ===", 
error);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1111:                        });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1112:                    } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1113:                        console.log('Bucket not matched');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1114:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1115:                }));
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1116:            }
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1117:            return newPhoto;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1118:        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1119:        function handleFileSelectProduct(evt) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1120:            var f = evt.target.files[0];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1121:            var reader = new FileReader();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1122:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1123:                return function(e) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1124:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1125:                    var hash = CryptoJS.SHA256(Math.random() + 
CryptoJS.SHA256(filePayload));
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1126:                    var val = f.name;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1127:                    var ext = val.split('.')[1];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1128:                    var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1129:                    var filename = 
(f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1130:                    var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1131:                    var filename = filename.split('.')[0] + "_" + 
timestamp + '.' + ext;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1132:                    var uploadTask = 
storageRef.child(filename).put(theFile);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1133:                    uploadTask.on('state_changed', 
function(snapshot) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1134:                        var progress = (snapshot.bytesTransferred 
/ snapshot.totalBytes) * 100;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1135:                        
$('.product_image').find(".uploding_image_photos").text("Image is uploading...");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1136:                    }, function(error) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1137:                    }, function() {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1138:                        
uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1139:                            jQuery("#uploding_image").text("Upload 
is completed");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1140:                            if (downloadURL) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1141:                                productImagesCount++;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1142:                                photos_html = '<span 
class="image-item" id="photo_' + productImagesCount + '"><span class="remove-btn" data-id="' + productImagesCount + '" data-img="' 
+ downloadURL + '"><i class="fa fa-remove"></i></span><img class="rounded" width="50px" id="" height="auto" src="' + downloadURL + 
'" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>'
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1143:                                
$(".product_image").append(photos_html);
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1144:                                photos.push(downloadURL);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1145:                            }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1146:                        });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1147:                    });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1148:                };
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1149:            })(f);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1150:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1151:        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1152:        function handleZipUpload(evt) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1153:            var f = evt.target.files[0];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1154:            var reader = new FileReader();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1155:            reader.onload = (function(theFile) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1156:                return function(e) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1157:                    var filePayload = e.target.result;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1158:                    var hash = CryptoJS.SHA256(Math.random() + 
CryptoJS.SHA256(filePayload));
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1159:                    var val = f.name;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1160:                    var ext = val.split('.')[1];
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1161:                    var size = f.size;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1162:                    var max_file_size = 
parseInt(allowed_file_size) * 1000000;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1163:                    if (size > max_file_size) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1164:                        $("#digital_product_file").val('');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1165:                        alert('{{ 
trans('lang.max_file_limit_error') }}' + allowed_file_size + 'Mb');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1166:                        return false;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1167:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1168:                    if (ext == "jpg" || ext == "jpeg" || ext == 
"png" || ext == "gif" || ext == "zip" || ext == "pdf") {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1169:                        var docName = val.split('fakepath')[1];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1170:                        var filename = 
(f.name).replace(/C:\\fakepath\\/i, '')
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1171:                        var timestamp = Number(new Date());
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1172:                        var filename = filename.split('.')[0] + 
"_" + timestamp + '.' + ext;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1173:                        digital_product_file = filePayload;
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1174:                        digital_product_file_name = filename;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1175:                        if (ext == "zip") {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1176:                            digital_product_ext = 'zip';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1177:                            $("#uploding_zip").html('<span 
class="image-item zip-file"><span class=""   data-file="' + filePayload + '"></span><a href="' + filePayload + '" download><i 
class="fa fa-file-text" style="font-size:45px"></i></a></span>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1178:                        } else if (ext == 'pdf') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1179:                            digital_product_ext = 'pdf';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1180:                            $("#uploding_zip").html('<span 
class="image-item zip-file"><span class=""   data-file="' + filePayload + '"></span><a href="' + filePayload + '" 
target="_blank"><i class="fa fa-file-text" style="font-size:45px"></i></a></span>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1181:                        } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1182:                            digital_product_ext = 'image';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1183:                            $("#uploding_zip").html('<span 
class="image-item zip-file"><span class=""  data-file="' + filePayload + '"></span><img width="100px" id="" height="auto" src="' + 
filePayload + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"></span>');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1184:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1185:                        $("#digital_product_file").val('');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1186:                    } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1187:                        $("#digital_product_file").val('');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1188:                        alert('{{ 
trans('lang.enter_valid_file_ext') }}')
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1189:                        return false;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1190:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1191:                };
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1192:            })(f);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1193:            reader.readAsDataURL(f);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1194:        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1195:        async function storeDigitalImageData() {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1196:            var newPhoto = '';
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1197:            try {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1198:                if (digital_product_file != '') {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1199:                    if (digital_product_old_file != "" && 
digital_product_file != digital_product_old_file) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1200:                        var oldImageUrlRef = await 
storage.refFromURL(digital_product_old_file);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1201:                        imageBucket = oldImageUrlRef.bucket;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1202:                        var envBucket = "<?php echo 
env('FIREBASE_STORAGE_BUCKET'); ?>";
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1203:                        if (imageBucket == envBucket) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1204:                            await oldImageUrlRef.delete().then(() 
=> {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1205:                                console.log("Old file deleted!")
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1206:                            }).catch((error) => {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1207:                                console.log("ERR File delete ===", 
error);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1208:                            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1209:                        } else {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1210:                            console.log('Bucket not matched');
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1211:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1212:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1213:                    if (digital_product_file != 
digital_product_old_file) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1214:                        digital_product_file = 
digital_product_file.replace(/^data:image\/[a-z]+;base64,/, "");
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1215:                        if (digital_product_ext == 'zip' || 
digital_product_ext == "pdf") {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1216:                            var uploadTask = await 
storageRef.child(digital_product_file_name).put(digital_product_file);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1217:                        } else {
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1218:                            var uploadTask = await 
storageRef.child(digital_product_file_name).putString(digital_product_file, 'base64', {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1219:                                contentType: 'image/jpg'
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1220:                            });
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1221:                        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1222:                        var downloadURL = await 
uploadTask.ref.getDownloadURL();
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1223:                        newPhoto = downloadURL;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1224:                        digital_product_file = downloadURL;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1225:                    }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1226:                }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1227:            } catch (error) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1228:                console.log("ERR ===", error);
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1229:            }
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1230:            return newPhoto;
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1231:        }
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1232:        $("#product_image").resizeImg({
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1233:            callback: function(base64str) {
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1234:                var val = $('#product_image').val().toLowerCase();
  C:\deploy\adminpanel\resources\views\items\edit.blade.php:1235:                var ext = val.split('.')[1];
> C:\deploy\adminpanel\resources\views\items\edit.blade.php:1236:                var docName = val.split('fakepath')[1];



TEXT_END

## FILE: resources\views\items\index.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\items\index.blade.php:133:                                   cellspacing="0" width="100%">
  C:\deploy\adminpanel\resources\views\items\index.blade.php:134:                                <thead>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:135:                                <tr>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:136:                                    <?php if 
(in_array('items.delete', json_decode(@session('user_permissions'),true))) { ?>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:137:                                    <th class="delete-all"><input 
type="checkbox" id="is_active"><label class="col-3 control-label" for="is_active"><a id="deleteAll"
  C:\deploy\adminpanel\resources\views\items\index.blade.php:138:                                    class="do_not_delete" 
href="javascript:void(0)"><i class="mdi mdi-delete"></i> {{trans('lang.all')}}</a></label></th>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:139:                                    <?php } ?>                     
               
  C:\deploy\adminpanel\resources\views\items\index.blade.php:140:                                    
<th>{{trans('lang.item_info')}}</th>
> C:\deploy\adminpanel\resources\views\items\index.blade.php:141:                                    
<th>{{trans('lang.item_price')}}</th>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:142:                                   
  C:\deploy\adminpanel\resources\views\items\index.blade.php:143:                                    <?php if ($id == '') { ?>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:144:                                        
<th>{{trans('lang.item_vendor_id')}}</th>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:145:                                    <?php } ?>
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:157:                </div>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:158:            </div>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:159:        </div>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:160:        </div>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:161:    </div>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:162:</div>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:163:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:164:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:165:@endsection
  C:\deploy\adminpanel\resources\views\items\index.blade.php:166:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:167:@section('scripts')
  C:\deploy\adminpanel\resources\views\items\index.blade.php:168:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:169:<script type="text/javascript">
  C:\deploy\adminpanel\resources\views\items\index.blade.php:170:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:171:    var section_id = getCookie('section_id') || '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:172:    var user_permissions = '<?php echo 
@session('user_permissions') ?>';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:173:    user_permissions = Object.values(JSON.parse(user_permissions));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:174:    var checkDeletePermission = false;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:175:    if ($.inArray('items.delete', user_permissions) >= 0) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:176:        checkDeletePermission = true;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:177:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:178:    
  C:\deploy\adminpanel\resources\views\items\index.blade.php:179:    const urlParams = new URLSearchParams(location.search);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:180:    for (const [key, value] of urlParams) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:181:        if (key == 'brandID') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:182:            var brandID = value;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:183:        } else {
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:200:    var ref_sections = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
> C:\deploy\adminpanel\resources\views\items\index.blade.php:201:    var vendorID = "{{$id}}";
  C:\deploy\adminpanel\resources\views\items\index.blade.php:202:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:203:    let globalTaxScope = null;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:204:    (async function() {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:205:            let globalTaxSnapshot = await 
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
> C:\deploy\adminpanel\resources\views\items\index.blade.php:236:        var vendorName = '';
> C:\deploy\adminpanel\resources\views\items\index.blade.php:237:        await database.collection('vendors').where('id', '==', 
vendorId).get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:238:            if (snapshots.docs.length > 0) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:239:                var vendorData = snapshots.docs[0].data();
> C:\deploy\adminpanel\resources\views\items\index.blade.php:240:                vendorName = vendorData.title;
> C:\deploy\adminpanel\resources\views\items\index.blade.php:241:                
$('.page-title').html("{{trans('lang.item_plural')}} - " + vendorName);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:242:               
  C:\deploy\adminpanel\resources\views\items\index.blade.php:243:                var wallet_route = 
"{{route('users.walletstransaction','id')}}";
  C:\deploy\adminpanel\resources\views\items\index.blade.php:244:                $(".wallet_transaction").attr("href", 
wallet_route.replace('id', 'storeID=' + vendorData.author));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:245:            }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:246:        });
> C:\deploy\adminpanel\resources\views\items\index.blade.php:247:        return vendorName;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:248:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:249:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:250:    var refCurrency = 
database.collection('currencies').where('isActive', '==', true);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:251:    var append_list = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:252:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:253:    refCurrency.get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:254:        var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:255:        currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:256:        currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:257:        if (currencyData.decimal_degits) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:258:            decimal_degits = currencyData.decimal_degits;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:259:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:260:    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:261:    var placeholderImage = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:262:    var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:263:    placeholder.get().then(async function (snapshotsimage) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:264:        var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:265:        placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:266:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:267:    })
  C:\deploy\adminpanel\resources\views\items\index.blade.php:268:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:269:    
database.collection('vendor_categories').where('section_id','==',section_id).get().then(async function(snapshots) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:270:        snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:271:            var data=listval.data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:272:            $('.category_selector').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\index.blade.php:273:                .attr("value",data.id)
  C:\deploy\adminpanel\resources\views\items\index.blade.php:274:                .text(data.title));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:275:        })
  C:\deploy\adminpanel\resources\views\items\index.blade.php:276:    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:277:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:278:    var initialRef=ref;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:279:    $('select').change(async function() {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:280:        var itemType = $('.item_type_selector').val();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:281:        var category = $('.category_selector').val();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:282:        refData = initialRef;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:283:      
  C:\deploy\adminpanel\resources\views\items\index.blade.php:284:        if (itemType) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:285:           refData= (itemType=="veg") ? refData.where('nonveg', 
'==', false) : refData.where('nonveg', '==', true)          
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:296:        if (section_id) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:297:            let sectionSnap = await 
database.collection('sections').doc(section_id).get();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:298:            let sectionData = sectionSnap.exists ? 
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:308:            console.warn('section_id cookie is empty; skipping 
section detail lookup on items page.');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:309:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:310:        
  C:\deploy\adminpanel\resources\views\items\index.blade.php:311:        $('.item_type_selector').select2({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:312:            placeholder: "{{trans('lang.type')}}",  
  C:\deploy\adminpanel\resources\views\items\index.blade.php:313:            minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:314:            allowClear: true  
  C:\deploy\adminpanel\resources\views\items\index.blade.php:315:        });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:316:        $('.category_selector').select2({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:317:            placeholder: "{{trans('lang.category')}}",  
  C:\deploy\adminpanel\resources\views\items\index.blade.php:318:            minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:319:            allowClear: true  
  C:\deploy\adminpanel\resources\views\items\index.blade.php:320:        });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:321:        $('.filteredRecords').select2({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:322:            placeholder: "{{trans('lang.select')}} 
{{trans('lang.section_plural')}}",  
  C:\deploy\adminpanel\resources\views\items\index.blade.php:323:            minimumResultsForSearch: Infinity,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:339:        });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:340:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:341:        ref_sections.get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:342:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:343:                var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:344:                if (data.serviceTypeFlag == "delivery-service" || 
data.serviceTypeFlag == "ecommerce-service") {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:345:                    $('#section_id').append($("<option></option>")
  C:\deploy\adminpanel\resources\views\items\index.blade.php:346:                        .attr("value", data.id)
> C:\deploy\adminpanel\resources\views\items\index.blade.php:347:                        .text(data.name));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:348:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:349:                }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:350:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:351:            })
  C:\deploy\adminpanel\resources\views\items\index.blade.php:352:            $('#section_id').val(section_id);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:353:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:354:        })
  C:\deploy\adminpanel\resources\views\items\index.blade.php:355:        $(document.body).on('change', '#selected_search', function 
() {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:356:            if (jQuery(this).val() == 'brand') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:357:                database.collection('brands').get().then(async 
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:366:                jQuery('#category_search_dropdown').hide();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:367:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:368:            } else if (jQuery(this).val() == 'category') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:369:                var section_id = getCookie('section_id');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:370:                if (section_id != '') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:371:                    var ref_category = 
database.collection('vendor_categories').where('section_id', '==', section_id);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:372:                } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:373:                    var ref_category = 
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:382:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:405:            if (!$(event.target).closest('.dt-button-collection, 
.dt-buttons').length) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:406:                $('.dt-button-collection').hide();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:407:                $('.dt-button-background').hide();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:408:            }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:409:        });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:410:       
  C:\deploy\adminpanel\resources\views\items\index.blade.php:411:        var fieldConfig = {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:412:            columns: [
> C:\deploy\adminpanel\resources\views\items\index.blade.php:413:                { key: 'foodName', header: 
"{{trans('lang.item_info')}}" },
> C:\deploy\adminpanel\resources\views\items\index.blade.php:414:                { key: 'finalPrice', header: 
"{{trans('lang.item_price')}}" },                            
  C:\deploy\adminpanel\resources\views\items\index.blade.php:415:              
  C:\deploy\adminpanel\resources\views\items\index.blade.php:416:                 
  C:\deploy\adminpanel\resources\views\items\index.blade.php:417:                <?php if ($id == '') { ?>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:418:                    { key: 'store', header: 
"{{trans('lang.item_vendor_id')}}" }, 
  C:\deploy\adminpanel\resources\views\items\index.blade.php:419:                <?php } ?>                   
  C:\deploy\adminpanel\resources\views\items\index.blade.php:420:                
  C:\deploy\adminpanel\resources\views\items\index.blade.php:421:                { key: 'category', header: 
"{{trans('lang.item_category_id')}}" }, 
  C:\deploy\adminpanel\resources\views\items\index.blade.php:422:               
> C:\deploy\adminpanel\resources\views\items\index.blade.php:423:                { key: 'publish', header: 
"{{trans('lang.item_publish')}}" },
  C:\deploy\adminpanel\resources\views\items\index.blade.php:424:               
  C:\deploy\adminpanel\resources\views\items\index.blade.php:425:            ],
  C:\deploy\adminpanel\resources\views\items\index.blade.php:426:            
> C:\deploy\adminpanel\resources\views\items\index.blade.php:427:            fileName: "{{trans('lang.item_table')}}",
  C:\deploy\adminpanel\resources\views\items\index.blade.php:428:        };
  C:\deploy\adminpanel\resources\views\items\index.blade.php:429:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:430:        const table = $('#itemTable').DataTable({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:431:            pageLength: 10, // Number of rows per page
  C:\deploy\adminpanel\resources\views\items\index.blade.php:432:            processing: false, // Show processing indicator
  C:\deploy\adminpanel\resources\views\items\index.blade.php:433:            serverSide: true, // Enable server-side processing
  C:\deploy\adminpanel\resources\views\items\index.blade.php:434:            responsive: true,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:435:            ajax: async function (data, callback, settings) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:436:                const start = data.start;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:437:                const length = data.length;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:438:                const searchValue = 
data.search.value.toLowerCase();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:439:                const orderColumnIndex = data.order[0].column;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:440:                const orderDirection = data.order[0].dir;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:441:                @if ($id != '')
> C:\deploy\adminpanel\resources\views\items\index.blade.php:442:                    const orderableColumns = 
(checkDeletePermission) ? ['', 'foodName', 'finalPrice', 'category', '', ''] : ['foodName', 'finalPrice', 'category', '', '']; // 
Ensure this matches the actual column names
  C:\deploy\adminpanel\resources\views\items\index.blade.php:443:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:444:                @else
> C:\deploy\adminpanel\resources\views\items\index.blade.php:445:                    const orderableColumns = 
(checkDeletePermission) ? [ '', 'foodName', 'finalPrice', 'store', 'category', '', ''] : [ 'foodName', 'finalPrice', 'store', 
'category', '', '']; // Ensure this matches the actual column names
  C:\deploy\adminpanel\resources\views\items\index.blade.php:446:                @endif
  C:\deploy\adminpanel\resources\views\items\index.blade.php:447:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:448:                const orderByField = 
orderableColumns[orderColumnIndex]; // Adjust the index to match your table
  C:\deploy\adminpanel\resources\views\items\index.blade.php:449:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:450:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:451:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:452:                if (searchValue.length >= 3 || searchValue.length 
=== 0) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:453:                    $('#data-table_processing').show();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:454:                }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:455:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:456:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:457:                await ref.get().then(async function 
(querySnapshot) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:458:                    if (querySnapshot.empty) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:459:                        $('.total_count').text(0);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:460:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:461:                        $('#data-table_processing').hide(); // 
Hide loader
  C:\deploy\adminpanel\resources\views\items\index.blade.php:462:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:463:                        callback({
  C:\deploy\adminpanel\resources\views\items\index.blade.php:464:                            draw: data.draw,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:465:                            recordsTotal: 0,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:466:                            recordsFiltered: 0,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:467:                            data: [] // No data
  C:\deploy\adminpanel\resources\views\items\index.blade.php:468:                        });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:469:                        return;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:470:                    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:471:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:472:                    var storeNames = {};
> C:\deploy\adminpanel\resources\views\items\index.blade.php:473:                    // Fetch restaurants names
  C:\deploy\adminpanel\resources\views\items\index.blade.php:474:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:475:                    @if ($id == '')
  C:\deploy\adminpanel\resources\views\items\index.blade.php:476:                        const vendorDocs = await 
database.collection('vendors').get();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:477:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:478:                    vendorDocs.forEach(doc => {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:479:                        storeNames[doc.id] = doc.data().title;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:480:                    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:481:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:482:                    @endif
  C:\deploy\adminpanel\resources\views\items\index.blade.php:483:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:484:                    var categoryNames = {};
  C:\deploy\adminpanel\resources\views\items\index.blade.php:485:                    const categoryDocs = await 
database.collection('vendor_categories').get();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:486:                    categoryDocs.forEach(doc => {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:487:                        categoryNames[doc.id] = doc.data().title;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:488:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:489:                    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:490:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:491:                    var sectionNames = {};
  C:\deploy\adminpanel\resources\views\items\index.blade.php:492:                    const sectionDocs = await 
database.collection('sections').get();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:493:                    sectionDocs.forEach(doc => {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:494:                        sectionNames[doc.id] = doc.data().name;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:495:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:496:                    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:497:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:498:                    var brandNames = {};
  C:\deploy\adminpanel\resources\views\items\index.blade.php:499:                    const brandDocs = await 
database.collection('brands').get();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:500:                    brandDocs.forEach(doc => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:501:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:502:                        brandNames[doc.id] = doc.data().title;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:503:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:504:                    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:505:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:506:                    let records = [];
  C:\deploy\adminpanel\resources\views\items\index.blade.php:507:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:508:                    let filteredRecords = [];
  C:\deploy\adminpanel\resources\views\items\index.blade.php:509:                    await Promise.all(querySnapshot.docs.map(async 
(doc) => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:510:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:511:                        let childData = doc.data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:512:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:513:                        childData.id = doc.id; // Ensure the 
document ID is included in the data
  C:\deploy\adminpanel\resources\views\items\index.blade.php:514:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:515:                        var finalPrice = 0;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:516:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:517:                        if (childData.hasOwnProperty('disPrice') 
&& childData.disPrice != '' && childData.disPrice != '0') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:518:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:519:                            finalPrice = childData.disPrice;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:520:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:521:                        } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:522:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:523:                            finalPrice = childData.price;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:524:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:525:                        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:526:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:527:                        childData.foodName = childData.name;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:528:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:529:                        childData.finalPrice = 
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
> C:\deploy\adminpanel\resources\views\items\index.blade.php:539:                            childData.brand = 
brandNames[childData.brandID] || '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:540:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:541:                        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:542:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:543:                        if (searchValue) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:544:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:545:                            if (
  C:\deploy\adminpanel\resources\views\items\index.blade.php:546:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:547:                                (childData.name && 
childData.name.toString().toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\items\index.blade.php:548:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:549:                                (childData.finalPrice && 
childData.finalPrice.toString().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\items\index.blade.php:550:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:551:                                (childData.store && 
childData.store.toString().toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\items\index.blade.php:552:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:553:                                (childData.category && 
childData.category.toString().toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\items\index.blade.php:554:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:555:                                (childData.brand && 
childData.brand.toString().toLowerCase().includes(searchValue)) ||
  C:\deploy\adminpanel\resources\views\items\index.blade.php:556:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:557:                                (childData.section && 
childData.section.toString().toLowerCase().includes(searchValue))
  C:\deploy\adminpanel\resources\views\items\index.blade.php:558:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:559:                            ) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:560:                                filteredRecords.push(childData);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:561:                            }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:562:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:563:                        } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:564:                            filteredRecords.push(childData);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:565:                        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:566:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:567:                    }));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:568:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:569:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:570:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:571:                    filteredRecords.sort((a, b) => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:572:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:573:                        let aValue = a[orderByField];
  C:\deploy\adminpanel\resources\views\items\index.blade.php:574:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:575:                        let bValue = b[orderByField];
  C:\deploy\adminpanel\resources\views\items\index.blade.php:576:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:577:                        if (orderByField === 'finalPrice') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:578:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:579:                            aValue = a[orderByField] ? 
parseInt(a[orderByField]) : 0;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:580:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:581:                            bValue = b[orderByField] ? 
parseInt(b[orderByField]) : 0;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:582:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:583:                        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:584:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:585:                        else if (orderByField === 'brand' && 
orderByField != null && orderByField != '') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:586:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:587:                            aValue = a[orderByField] ? 
a[orderByField].toString().toLowerCase().trim() : '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:588:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:589:                            bValue = b[orderByField] ? 
b[orderByField].toString().toLowerCase().trim() : ''
  C:\deploy\adminpanel\resources\views\items\index.blade.php:590:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:591:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:592:                        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:593:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:594:                        else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:595:                            aValue = a[orderByField] ? 
a[orderByField].toString().toLowerCase().trim() : '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:596:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:597:                            bValue = b[orderByField] ? 
b[orderByField].toString().toLowerCase().trim() : ''
  C:\deploy\adminpanel\resources\views\items\index.blade.php:598:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:599:                        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:600:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:601:                        if (orderDirection === 'asc') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:602:                            return (aValue > bValue) ? 1 : -1;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:603:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:604:                        } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:605:                            return (aValue < bValue) ? 1 : -1;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:606:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:607:                        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:608:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:609:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:610:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:611:                    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:612:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:652:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:653:            order: (checkDeletePermission) ? [1, 'asc'] : [0, 
'asc'],
  C:\deploy\adminpanel\resources\views\items\index.blade.php:654:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:655:            columnDefs: [
  C:\deploy\adminpanel\resources\views\items\index.blade.php:656:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:657:            {
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:669:            ],
  C:\deploy\adminpanel\resources\views\items\index.blade.php:670:            "language": datatableLang,
  C:\deploy\adminpanel\resources\views\items\index.blade.php:671:            dom: 'lfrtipB',
  C:\deploy\adminpanel\resources\views\items\index.blade.php:672:            buttons: [
  C:\deploy\adminpanel\resources\views\items\index.blade.php:673:                {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:674:                    extend: 'collection',
  C:\deploy\adminpanel\resources\views\items\index.blade.php:675:                    text: '<i class="mdi mdi-cloud-download"></i> 
{{trans("lang.export_as")}}',
> C:\deploy\adminpanel\resources\views\items\index.blade.php:676:                    className: 'btn btn-info',
  C:\deploy\adminpanel\resources\views\items\index.blade.php:677:                    buttons: [
  C:\deploy\adminpanel\resources\views\items\index.blade.php:678:                        {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:679:                            extend: 'excelHtml5',
  C:\deploy\adminpanel\resources\views\items\index.blade.php:680:                            text: '{{trans("lang.export_excel")}}',
  C:\deploy\adminpanel\resources\views\items\index.blade.php:681:                            action: function (e, dt, button, 
config) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:682:                                exportData(dt, 
'excel',fieldConfig);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:683:                            }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:684:                        },
  C:\deploy\adminpanel\resources\views\items\index.blade.php:685:                        {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:686:                            extend: 'pdfHtml5',
  C:\deploy\adminpanel\resources\views\items\index.blade.php:687:                            text: '{{trans("lang.export_pdf")}}',
  C:\deploy\adminpanel\resources\views\items\index.blade.php:688:                            action: function (e, dt, button, 
config) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:689:                                exportData(dt, 'pdf',fieldConfig);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:690:                            }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:691:                        },   
  C:\deploy\adminpanel\resources\views\items\index.blade.php:692:                        {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:693:                            extend: 'csvHtml5',
  C:\deploy\adminpanel\resources\views\items\index.blade.php:694:                            text: '{{trans("lang.export_csv")}}',
  C:\deploy\adminpanel\resources\views\items\index.blade.php:695:                            action: function (e, dt, button, 
config) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:696:                                exportData(dt, 'csv',fieldConfig);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:697:                            }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:698:                        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:699:                    ]
  C:\deploy\adminpanel\resources\views\items\index.blade.php:700:                }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:701:            ],
  C:\deploy\adminpanel\resources\views\items\index.blade.php:702:            initComplete: function() {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:703:                
$(".dataTables_filter").append($(".dt-buttons").detach());
  C:\deploy\adminpanel\resources\views\items\index.blade.php:704:                $('.dataTables_filter input').attr('placeholder', 
'Search here...').attr('autocomplete','new-password').val('');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:705:                $('.dataTables_filter 
label').contents().filter(function() {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:706:                    return this.nodeType === 3; 
  C:\deploy\adminpanel\resources\views\items\index.blade.php:707:                }).remove();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:708:            }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:709:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:710:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:711:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:791:        route1 = route1 + '?eid={{$id}}';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:792:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:793:    <?php } ?>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:794:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:795:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:796:
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
> C:\deploy\adminpanel\resources\views\items\index.blade.php:806:    if (val.photo != '') {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:807:        html.push('<img class="rounded" style="width:50px" src="' 
+ val.photo + '" alt="image" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"> ' + ' <a href="' + route1 + '" 
class="redirecttopage left_space"> ' + val.name + tax_titles + '</a>');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:808:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:809:    } else {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:810:        html.push('<img class="rounded" style="width:50px" src="' 
+ placeholderImage + '" alt="image"> ' + ' <a href="' + route1 + '" class="redirecttopage left_space">' + val.name + tax_titles + 
'</a>');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:811:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:812:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:813:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:814:    if (val.item_attribute && val.item_attribute.variants && 
val.item_attribute.variants.length > 0) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:815:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:816:    let originalVariantPrices = val.item_attribute.variants
> C:\deploy\adminpanel\resources\views\items\index.blade.php:817:        .map(v => parseFloat(v.variant_price))
> C:\deploy\adminpanel\resources\views\items\index.blade.php:818:        .filter(price => !isNaN(price) && price > 0);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:819:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:820:    if (originalVariantPrices.length > 0) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:821:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:822:        const displayMin = Math.min(...originalVariantPrices);
> C:\deploy\adminpanel\resources\views\items\index.blade.php:823:        const displayMax = Math.max(...originalVariantPrices);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:824:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:825:        let minPriceFormatted = '';
> C:\deploy\adminpanel\resources\views\items\index.blade.php:826:        let maxPriceFormatted = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:827:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:828:        if (currencyAtRight) {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:829:            minPriceFormatted = 
parseFloat(displayMin).toFixed(decimal_degits) + '' + currentCurrency;
> C:\deploy\adminpanel\resources\views\items\index.blade.php:830:            maxPriceFormatted = 
parseFloat(displayMax).toFixed(decimal_degits) + '' + currentCurrency;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:831:        } else {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:832:            minPriceFormatted = currentCurrency + '' + 
parseFloat(displayMin).toFixed(decimal_degits);
> C:\deploy\adminpanel\resources\views\items\index.blade.php:833:            maxPriceFormatted = currentCurrency + '' + 
parseFloat(displayMax).toFixed(decimal_degits);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:834:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:835:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:836:        if (displayMin === displayMax) {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:837:            html.push(minPriceFormatted);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:838:        } else {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:839:            html.push(minPriceFormatted + ' - ' + 
maxPriceFormatted);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:840:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:841:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:842:    }
> C:\deploy\adminpanel\resources\views\items\index.blade.php:843:    else if (val.hasOwnProperty('disPrice') && val.disPrice != '' 
&& val.disPrice != '0') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:844:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:845:        if (currencyAtRight) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:846:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:847:            
html.push(parseFloat(val.disPrice).toFixed(decimal_degits) + '' + currentCurrency + '  <s>' + 
parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency + '</s>');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:848:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:849:        } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:850:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:851:            html.push(currentCurrency + 
parseFloat(val.disPrice).toFixed(decimal_degits) + '  <s>' + currentCurrency + '' + parseFloat(val.price).toFixed(decimal_degits) + 
'</s>');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:852:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:853:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:854:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:855:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:856:    } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:857:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:858:        if (currencyAtRight) {
> C:\deploy\adminpanel\resources\views\items\index.blade.php:859:            
html.push(parseFloat(val.price).toFixed(decimal_degits) + '' + currentCurrency);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:860:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:861:        } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:862:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:863:            html.push(currentCurrency + '' + 
parseFloat(val.price).toFixed(decimal_degits));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:864:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:865:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:866:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:867:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:868:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:869:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:870:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:871:    <?php if ($id == '') { ?>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:872:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:873:        if (val.store == '') {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:874:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:875:            vendorroute = "Javascript:void(0)";
  C:\deploy\adminpanel\resources\views\items\index.blade.php:876:            vendor = '{{trans("lang.unknown")}}'
  C:\deploy\adminpanel\resources\views\items\index.blade.php:877:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:878:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:879:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:880:        html.push('<a href="' + vendorroute + '">' + val.store + 
'</a>');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:881:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:882:    <?php } ?>
  C:\deploy\adminpanel\resources\views\items\index.blade.php:883:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:884:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:885:
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:897:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:898:    html.push('<a href="' + caregoryroute + '">' + val.category + 
'</a>');
  C:\deploy\adminpanel\resources\views\items\index.blade.php:899:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:900:
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:918:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:919:        actionHtml = actionHtml + '<a id="' + val.id + '" 
name="item-delete" href="javascript:void(0)" class="delete-btn" data-toggle="tooltip" title="{{trans("lang.delete")}}"><i 
class="mdi mdi-delete"></i></a>';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:920:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:921:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:922:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:923:    actionHtml = actionHtml + '</span>';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:924:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:925:    html.push(actionHtml);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:926:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:927:    return html;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:928:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:929:}
  C:\deploy\adminpanel\resources\views\items\index.blade.php:930:
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:964:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:965:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:966:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:967:});
  C:\deploy\adminpanel\resources\views\items\index.blade.php:968:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:969:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:970:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:971:$("#is_active").click(function () {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:972:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:973:    $("#itemTable .is_open").prop('checked', 
$(this).prop('checked'));
  C:\deploy\adminpanel\resources\views\items\index.blade.php:974:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:975:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:976:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:977:});
  C:\deploy\adminpanel\resources\views\items\index.blade.php:978:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:979:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:980:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:981:$("#deleteAll").click(function () {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:982:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:983:    if ($('#itemTable .is_open:checked').length) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:984:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:985:        if (confirm("{{trans('lang.selected_delete_alert')}}")) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:986:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:987:            jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:988:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:989:            $('#itemTable .is_open:checked').each(function () {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:990:
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1002:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1003:                    setTimeout(function () {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1004:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1005:                        window.location.reload();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1006:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1007:                    }, 5000);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1008:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1009:                })
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1010:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1011:                .catch((error) => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1012:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1013:                    console.error("Error occurred during deletion 
process:", error);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1014:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1015:                });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1016:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1017:            });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1018:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1019:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1020:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1021:    } else {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1022:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1023:        alert("{{trans('lang.select_delete_alert')}}");
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1024:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1025:    }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1026:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1027:});
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1028:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1035:    await database.collection('sections').where("id", "==", 
section).get().then(async function (snapshotss) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1036:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1037:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1038:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1039:        if (snapshotss.docs[0]) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1040:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1041:            var section_data = snapshotss.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1042:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:1043:            productsection = section_data.name;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1044:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1045:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1046:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1047:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1048:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1049:    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1050:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1051:    return productsection;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1052:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1053:}
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1054:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1055:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1056:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1057:async function productvendor(vendor) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1058:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1059:    var productvendor = '';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1060:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1061:    await database.collection('vendors').where("id", "==", 
vendor).get().then(async function (snapshotss) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1062:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1063:        var vendorroute = '{{route("vendors.edit",":id")}}';
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1064:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1065:        vendorroute = vendorroute.replace(':id', vendor);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1066:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1067:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1068:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1069:        if (snapshotss.docs[0]) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1070:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1071:            var vendor_data = snapshotss.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1072:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1073:            productvendor = vendor_data.title;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1074:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1075:        }
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1076:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1077:    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1078:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1129:    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1130:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1131:    return productBrand;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1132:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1133:}
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1134:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1135:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1136:
> C:\deploy\adminpanel\resources\views\items\index.blade.php:1137:$(document).on("click", "a[name='item-delete']", function (e) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1138:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1139:    var id = this.id;
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1140:
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
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1152:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1153:        setTimeout(function () {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1154:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1155:            window.location.reload();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1156:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1157:        }, 5000);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1158:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1159:    })
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1160:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1161:    .catch((error) => {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1162:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1163:        console.error("Error occurred during deletion process:", 
error);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1164:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1165:    });
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1166:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1167:});
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1168:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1169:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1170:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1171:function clickLink(value) {
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1172:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1173:    setCookie('section_id', value, 30);
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1174:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1175:    location.reload();
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1176:
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1177:}
  C:\deploy\adminpanel\resources\views\items\index.blade.php:1178:



TEXT_END

## FILE: resources\views\items\view.blade.php
TEXT_START

  C:\deploy\adminpanel\resources\views\items\view.blade.php:23:        <div class="error_top" style="display:none"></div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:24:       <div class="row vendor_payout_create">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:25:          <div class="vendor_payout_create-inner">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:26:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:27:            <fieldset>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:28:              <legend>{{trans('lang.item_information')}}</legend>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:29:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:30:              <div class="form-group row width-50">
> C:\deploy\adminpanel\resources\views\items\view.blade.php:31:                <label class="col-3 
control-label">{{trans('lang.item_name')}}</label>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:32:                <div class="col-7">
> C:\deploy\adminpanel\resources\views\items\view.blade.php:33:                    <span class="item_name" id="item_name"></span>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:34:                </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:35:              </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:36:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:37:              <div class="form-group row width-50">
> C:\deploy\adminpanel\resources\views\items\view.blade.php:38:                <label class="col-3 
control-label">{{trans('lang.item_price')}}</label>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:39:                <div class="col-7">
> C:\deploy\adminpanel\resources\views\items\view.blade.php:40:                    <span class="item_price" id="item_price"></span>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:41:                </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:42:              </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:43:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:44:              <div class="form-group row width-50">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:45:                <label class="col-3 
control-label">{{trans('lang.item_discount')}}</label>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:46:                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:47:                    <span class="item_discount" 
id="item_discount"></span>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:48:                </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:49:              </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:50:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:51:              <div class="form-group row width-50">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:52:                <label class="col-3 
control-label">{{trans('lang.item_vendor_id')}}</label>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:53:                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:54:                    <span class="item_vendor" 
id="item_vendor"></span>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:55:                </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:56:              </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:57:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:58:              <div class="form-group row width-50">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:59:                <label class="col-3 
control-label">{{trans('lang.item_category_id')}}</label>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:60:                <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:61:                    <span class="item_category" 
id="item_category"></span>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:62:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:63:                </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:64:              </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:65:                <div class="form-group row width-50">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:66:                    <label class="col-3 
control-label">{{trans('lang.brand')}}</label>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:67:                    <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:68:                        <span class="brand" id="brand"></span>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:69:                    </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:70:                </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:71:                <div class="form-group row width-50">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:72:                    <label class="col-3 
control-label">{{trans('lang.section')}}</label>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:73:                    <div class="col-7">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:74:                        <span class="section" id="section"></span>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:75:                    </div>
  C:\deploy\adminpanel\resources\views\items\view.blade.php:140:@endsection
  C:\deploy\adminpanel\resources\views\items\view.blade.php:141:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:142:@section('scripts')
  C:\deploy\adminpanel\resources\views\items\view.blade.php:143:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:144:<script type="text/javascript">
  C:\deploy\adminpanel\resources\views\items\view.blade.php:145:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:146:var id = "<?php echo $id;?>";
  C:\deploy\adminpanel\resources\views\items\view.blade.php:147:var database = firebase.firestore();
> C:\deploy\adminpanel\resources\views\items\view.blade.php:148:var ref = 
database.collection('vendor_products').where("id","==",id);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:149:var ref_sections = 
database.collection('sections').where('isActive', '==', true).orderBy('order');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:150:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:151:var categories_list = [];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:152:var brand_list=[];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:153:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:154:var attributes_list = [];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:155:var vendor_list=[];
> C:\deploy\adminpanel\resources\views\items\view.blade.php:156:var photo ="";
  C:\deploy\adminpanel\resources\views\items\view.blade.php:157:var addOnesTitle = [];
> C:\deploy\adminpanel\resources\views\items\view.blade.php:158:var addOnesPrice = [];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:159:var sizeTitle = [];
> C:\deploy\adminpanel\resources\views\items\view.blade.php:160:var sizePrice = [];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:161:var product_specification = [];
> C:\deploy\adminpanel\resources\views\items\view.blade.php:162:var photos = [];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:163:var productImagesCount = 0;
  C:\deploy\adminpanel\resources\views\items\view.blade.php:164:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:165:var vendors=[];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:166:var sections_list=[];
  C:\deploy\adminpanel\resources\views\items\view.blade.php:167:var placeholderImage = '';
  C:\deploy\adminpanel\resources\views\items\view.blade.php:168:var placeholder = 
database.collection('settings').doc('placeHolderImage');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:169:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:170:placeholder.get().then( async function(snapshotsimage){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:171:    var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:172:    placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\resources\views\items\view.blade.php:173:})
  C:\deploy\adminpanel\resources\views\items\view.blade.php:174:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:175:$(document).ready(function(){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:176:  
  C:\deploy\adminpanel\resources\views\items\view.blade.php:177:  jQuery(document).on("click",".mdi-cloud-upload",function(){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:178:  		var variant = jQuery(this).data('variant');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:179:  		jQuery("#file_"+variant).click();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:180:  	});
  C:\deploy\adminpanel\resources\views\items\view.blade.php:181:  	
  C:\deploy\adminpanel\resources\views\items\view.blade.php:182:  	jQuery(document).on("click",".mdi-delete",function(){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:183:  		var variant = jQuery(this).data('variant');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:184:  		var fileurl = jQuery("#variant_"+variant+"_url").val();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:185:  		if(fileurl){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:186:  			firebase.storage().refFromURL(fileurl).delete();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:187:  			jQuery("#variant_"+variant+"_image").empty();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:188:  			jQuery("#variant_"+variant+"_url").val('');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:189:  		}
  C:\deploy\adminpanel\resources\views\items\view.blade.php:190:  	});	
  C:\deploy\adminpanel\resources\views\items\view.blade.php:191:  	
  C:\deploy\adminpanel\resources\views\items\view.blade.php:192:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:193:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:194:  jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:195:  ref.get().then( async function(snapshots){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:196:    var product = snapshots.docs[0].data();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:197:      if(getCookie('section_id') != ""){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:202:        var vendorsDb = database.collection('vendor_categories');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:203:          var brand = database.collection('brands');
  C:\deploy\adminpanel\resources\views\items\view.blade.php:204:      }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:205:     await ref_sections.get().then(async function (snapshots) {
  C:\deploy\adminpanel\resources\views\items\view.blade.php:206:          snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\view.blade.php:207:              var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:208:              sections_list.push(data);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:209:              if(data.id == product.section_id){
> C:\deploy\adminpanel\resources\views\items\view.blade.php:210:                  $('#section').text(data.name);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:211:              }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:212:          })
  C:\deploy\adminpanel\resources\views\items\view.blade.php:213:      });
  C:\deploy\adminpanel\resources\views\items\view.blade.php:214: await database.collection('vendors').get().then( async 
function(snapshots){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:215:   snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\resources\views\items\view.blade.php:216:              var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:217:              vendor_list.push(data);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:218:              vendors.push(data);
> C:\deploy\adminpanel\resources\views\items\view.blade.php:219:                if(data.id == product.vendorID){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:220:                    $('#item_vendor').text(data.title);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:221:                }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:222:        })
  C:\deploy\adminpanel\resources\views\items\view.blade.php:223:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:224:}); 
  C:\deploy\adminpanel\resources\views\items\view.blade.php:225:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:226:await vendorsDb.get().then( async function(snapshots){
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
  C:\deploy\adminpanel\resources\views\items\view.blade.php:240:          var data = listval.data();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:241:          brand_list.push(data);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:242:          if(data.id == product.brandID){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:243:              $('#brand').text(data.title);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:244:          }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:245:      })
  C:\deploy\adminpanel\resources\views\items\view.blade.php:246:  });
  C:\deploy\adminpanel\resources\views\items\view.blade.php:247:
> C:\deploy\adminpanel\resources\views\items\view.blade.php:248:  $(".item_name").text(product.name);
> C:\deploy\adminpanel\resources\views\items\view.blade.php:249:  $(".item_price").text(product.price);
> C:\deploy\adminpanel\resources\views\items\view.blade.php:250:  $(".item_discount").text(product.disPrice);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:251:  if(product.hasOwnProperty("calories")){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:252:    $(".item_calories").text(product.calories)
  C:\deploy\adminpanel\resources\views\items\view.blade.php:253:  }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:254:  if(product.hasOwnProperty("grams")){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:255:    $(".item_grams").text(product.grams);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:256:  }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:257:  if(product.hasOwnProperty("proteins")){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:258:    $(".item_proteins").text(product.proteins)
  C:\deploy\adminpanel\resources\views\items\view.blade.php:259:  }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:260:  if(product.hasOwnProperty("fats")){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:261:    $(".item_fats").text(product.fats);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:262:  }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:263:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:264:  $("#item_description").text(product.description);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:265:
> C:\deploy\adminpanel\resources\views\items\view.blade.php:266:if(product.hasOwnProperty('photo')){
  C:\deploy\adminpanel\resources\views\items\view.blade.php:267:
> C:\deploy\adminpanel\resources\views\items\view.blade.php:268:  photos = product.photo;
> C:\deploy\adminpanel\resources\views\items\view.blade.php:269:    if (photos!='' && photos!=null) {
> C:\deploy\adminpanel\resources\views\items\view.blade.php:270:        image='<img width="200px" id="" height="auto" src="' + 
photo + '" onerror="this.onerror=null;this.src=\'' + placeholderImage + '\'"
  C:\deploy\adminpanel\resources\views\items\view.blade.php:271:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:272:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:273:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:274:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:275:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:276:>'
  C:\deploy\adminpanel\resources\views\items\view.blade.php:277:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:278:    }else{
  C:\deploy\adminpanel\resources\views\items\view.blade.php:279:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:280:      image='<img class="rounded" width="200px" id="" height="auto" 
src="'+placeholderImage+'" alt="image">';
  C:\deploy\adminpanel\resources\views\items\view.blade.php:281:    }
  C:\deploy\adminpanel\resources\views\items\view.blade.php:282:}
  C:\deploy\adminpanel\resources\views\items\view.blade.php:283:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:284:$('.product_image').html(image);
  C:\deploy\adminpanel\resources\views\items\view.blade.php:285:  jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\resources\views\items\view.blade.php:286:
  C:\deploy\adminpanel\resources\views\items\view.blade.php:287:  })
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

## Patch Target Decision
TEXT_START
TARGET_PRODUCT_CREATE: resources/views/items/create.blade.php
TARGET_PRODUCT_EDIT: resources/views/items/edit.blade.php
REQUIRED_PRODUCT_FIELDS: vendorID, categoryID, publish, createdAt, updatedAt, takeawayOption.
TEXT_END

STATUS: SERVICE_49A_ADMIN_PRODUCT_WRITE_BLOCK_EXTRACTED