@php
$user = Auth::user();
$role_has_permission = App\Models\Permission::where('role_id', $user->role_id)->pluck('permission')->toArray();
$service_type = @$_COOKIE['service_type'];
@endphp

<div class="navbar-header position-relative">
    <a class="navbar-brand" href="<?php echo URL::to('/'); ?>">
        <b>
            <img src="{{ asset('images/ghalbit-maritronix-logo.svg') }}" onerror="this.onerror=null; this.src='{{ asset('images/ghalbit-maritronix-logo.svg') }}';" alt="GHALBIT MARITRONIX" class="dark-logo" width="100%" id="logo_web">
            <img src="{{ asset('images/ghalbit-maritronix-icon.svg') }}" onerror="this.onerror=null; this.src='{{ asset('images/ghalbit-maritronix-icon.svg') }}';" alt="GHALBIT MARITRONIX" class="light-logo">
        </b>
        <span class="ghalbit-brand-copy">
            <span class="ghalbit-brand-copy__title">GHALBIT MARITRONIX</span>
            <span class="ghalbit-brand-copy__tagline">Integrated Maritime &amp; Land Intelligence Platform</span>
        </span>
    </a>
    <div class="sidebar-toggle">  
        <span class="nav-item mb-toggle">
            <a class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)"><i class="mdi mdi-menu"></i></a>
        </span>
        <span class="nav-item">
            <a class="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.791687 9.49999C0.791687 4.69051 4.69054 0.791656 9.50002 0.791656C14.3095 0.791656 18.2084 4.69051 18.2084 9.49999C18.2084 14.3095 14.3095 18.2083 9.50002 18.2083C4.69054 18.2083 0.791687 14.3095 0.791687 9.49999ZM9.50002 2.37499C5.56499 2.37499 2.37502 5.56496 2.37502 9.49999C2.37502 13.435 5.56499 16.625 9.50002 16.625C13.4351 16.625 16.625 13.435 16.625 9.49999C16.625 5.56496 13.4351 2.37499 9.50002 2.37499ZM9.85861 5.57561C10.1678 5.88478 10.1678 6.38603 9.85861 6.6952L7.64757 8.90624H12.8613C13.2985 8.90624 13.653 9.26068 13.653 9.69791C13.653 10.1351 13.2985 10.4896 12.8613 10.4896H7.64757L9.85861 12.7006C10.1678 13.0098 10.1678 13.511 9.85861 13.8202C9.54945 14.1294 9.04819 14.1294 8.73903 13.8202L5.17653 10.2577C4.86736 9.94853 4.86736 9.44728 5.17653 9.13811L8.73903 5.57561C9.04819 5.26645 9.54945 5.26645 9.85861 5.57561Z"
                        fill="white"></path>
                </svg>
            </a>
        </span>
    </div>
</div>
<style>
    .navbar-brand {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .ghalbit-brand-copy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
        line-height: 1.1;
    }

    .ghalbit-brand-copy__title {
        color: #f7fbff;
        font-weight: 800;
        letter-spacing: .08em;
        text-transform: uppercase;
        font-size: .98rem;
    }

    .ghalbit-brand-copy__tagline {
        color: #8dc7f1;
        font-size: .76rem;
        letter-spacing: .02em;
        white-space: nowrap;
    }

    @media (max-width: 991.98px) {
        .ghalbit-brand-copy__tagline {
            display: none;
        }
    }

    @media (max-width: 767.98px) {
        .ghalbit-brand-copy {
            display: none;
        }
    }
</style>
<div class="navbar-collapse sidebar-nav">
    <ul class="navbar-nav mr-auto mt-md-0 header-user-menu sidebarnav p-l-20">
        @if (in_array('users', $role_has_permission))
        <li class="nav-item text-light">
           <a class="nav-link" href="{!! route('users') !!}" aria-expanded="false">
                <i class="mdi mdi-account-multiple"></i>
                <span class="hide-menu">{{ trans('lang.user_customer') }}</span>
            </a>
        </li>
        @endif
        @if (in_array('zone', $role_has_permission))
        <li class="nav-item text-light">
            <a class="nav-link" href="{!! route('zone') !!}" aria-expanded="false">
                <i class="mdi mdi-map-marker-circle"></i>
                <span class="hide-menu">{{ trans('lang.zone') }}</span>
            </a>
        </li>
        @endif
        @if (in_array('section-service', $role_has_permission))
        <li class="nav-item text-light">
           <a class="nav-link" href="{!! route('section') !!}" aria-expanded="false">
                <i class="mdi mdi-clipboard-text"></i>
                <span class="hide-menu">{{ trans('lang.section_plural') }}</span>
            </a>
        </li>
        @endif
        @if (
        in_array('app-banners-setting', $role_has_permission) ||
        in_array('global-setting', $role_has_permission) ||
        in_array('currency', $role_has_permission) ||
        in_array('payment-method', $role_has_permission) ||
        in_array('business-model', $role_has_permission) ||
        in_array('radius', $role_has_permission) ||
        in_array('scheduleOrderNotification', $role_has_permission) ||
        in_array('tax', $role_has_permission) ||
        in_array('delivery-charge', $role_has_permission) ||
        in_array('document-verification', $role_has_permission) ||
        in_array('language', $role_has_permission) ||
        in_array('special-offer', $role_has_permission) ||
        in_array('terms', $role_has_permission) ||
        in_array('privacy', $role_has_permission) ||
        in_array('home-page', $role_has_permission) ||
        in_array('footer', $role_has_permission) || in_array('settings-maintenance', $role_has_permission)
        )
        <li id="activeSection" class="text-light nav-item dropdown">
                <a class="nav-link dropdown-toggle waves-effect waves-dark" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="mdi mdi-settings"></i>
                    <span class="hide-menu">{{ trans('lang.app_setting') }}</span>
                </a>
              <div class="dropdown-menu dropdown-setting scale-down sidebar-nav">  
                <ul class="sidebarnav">
                    @if (in_array('global-setting', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('settings.app.globals') !!}"><i class="mdi mdi-web"></i> {{ trans('lang.app_setting_globals') }}</a></li>
                    @endif
                    @if (in_array('currency', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('currencies') !!}"><i class="mdi mdi-currency-usd"></i> {{ trans('lang.currency_plural') }}</a></li>
                    @endif
                    @if (in_array('business-model', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('businessModel') !!}"><i class="mdi mdi-domain"></i> {{ trans('lang.business_model_settings') }}</a></li>
                    @endif
                    @if (in_array('tax', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('tax') !!}"><i class="mdi mdi-database"></i> {{ trans('lang.tax_setting') }}</a></li>
                    @endif
                    @if (in_array('payment-method', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('payment.stripe') !!}"><i class="mdi mdi-credit-card"></i> {{ trans('lang.app_setting_payment') }}</a></li>
                    @endif
                    @if (in_array('radius', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('settings.app.radiusConfiguration') !!}"><i class="mdi mdi-map-marker-radius"></i> {{ trans('lang.radios_configuration') }}</a></li>
                    @endif
                    @if (in_array('app-banners-setting', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('settings.app.banners') !!}"><i class="mdi mdi-page-layout-body"></i> {{ trans('lang.app_setting_banners') }}</a></li>
                    @endif
                    @if (in_array('scheduleOrderNotification', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('settings.app.scheduleOrderNotification') !!}"><i class="mdi mdi-bell-outline"></i> {{ trans('lang.schedule_order_notification_title') }}</a></li>
                    @endif
                    @if (in_array('delivery-charge', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('settings.app.deliveryCharge') !!}"><i class="mdi mdi-truck-delivery"></i> {{ trans('lang.delivery_charge') }}</a></li>
                    @endif
                    @if (in_array('openai-settings', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('settings.app.openai-settings') !!}"><i class="mdi mdi-robot"></i> {{ trans('lang.openai_settings') }}</a></li>
                    @endif
                    @if (in_array('document-verification', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('settings.app.documentVerification') !!}"><i class="mdi mdi-file-document"></i> {{ trans('lang.document_verification') }}</a></li>
                    @endif
                    @if (in_array('language', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('settings.app.languages') !!}"><i class="mdi mdi-translate"></i> {{ trans('lang.languages') }}</a></li>
                    @endif
                    @if (in_array('special-offer', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('settings.app.specialoffer') !!}"><i class="mdi mdi-percent"></i> {{ trans('lang.special_offer') }}</a></li>
                    @endif
                    @if (in_array('settings-maintenance', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('settings.app.maintenance') !!}"><i class="mdi mdi-settings"></i> {{ trans('lang.maintenance_mode_settings') }}</a></li>
                    @endif
                    @if (in_array('terms', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('termsAndConditions') !!}"><i class="mdi mdi-file"></i> {{ trans('lang.terms_and_conditions') }}</a></li>
                    @endif
                    @if (in_array('privacy', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('privacyPolicy') !!}"><i class="mdi mdi-file-check"></i> {{ trans('lang.privacy_policy') }}</a></li>
                    @endif
                    @if (in_array('home-page', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('homepageTemplate') !!}"><i class="mdi mdi-page-layout-body"></i> {{ trans('lang.homepageTemplate') }}</a></li>
                    @endif
                    @if (in_array('footer', $role_has_permission))
                    <li><a class="nav-link"href="{!! route('footerTemplate') !!}"><i class="mdi mdi-page-layout-footer"></i> {{ trans('lang.footer_template') }}</a></li>
                    @endif
                </ul>
            </div>
        </li>
        @endif

        @if (
        in_array('banners', $role_has_permission) ||
        in_array('cms', $role_has_permission) ||
        in_array('on-board', $role_has_permission) ||
        in_array('email-template', $role_has_permission)
        )
        <li id="activeSection" class="text-light nav-item dropdown">
            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="mdi mdi-palette"></i>
                <span class="hide-menu">{{ trans('lang.content_management') }}</span>
            </a>
            <div class="dropdown-menu dropdown-setting scale-down sidebar-nav">  
                <ul class="sidebarnav">
                    @if($service_type != "rental-service")
                    @if (in_array('banners', $role_has_permission))
                    <li><a class="waves-effect waves-dark nav-link" href="{!! route('banners') !!}" aria-expanded="false">
                            <i class="mdi mdi-monitor-multiple "></i>
                            <span class="hide-menu">{{ trans('lang.menu_items') }}</span>
                        </a>
                    </li>
                    @endif
                    @endif

                    @if (in_array('cms', $role_has_permission))
                    <li><a class="waves-effect waves-dark nav-link" href="{!! route('cms') !!}" aria-expanded="false">
                            <i class="mdi mdi-book-open-page-variant"></i>
                            <span class="hide-menu">{{ trans('lang.cms_plural') }}</span>
                        </a>
                    </li>
                    @endif

                    @if (in_array('on-board', $role_has_permission))
                    <li><a class="waves-effect waves-dark nav-link onboard_menu" href="{!! route('on-board') !!}" aria-expanded="false">
                            <i class="mdi mdi-cellphone"></i>
                            <span class="hide-menu">{{ trans('lang.on_board_plural') }}</span>
                        </a>
                    </li>
                    @endif

                    @if (in_array('email-template', $role_has_permission))
                    <li><a class="waves-effect waves-dark nav-link" href="{!! route('email-templates.index') !!}" aria-expanded="false">
                            <i class="mdi mdi-email"></i>
                            <span class="hide-menu">{{ trans('lang.email_templates') }}</span>
                        </a>
                    </li>
                    @endif
                </ul>
            </div>
        </li>
        @endif
    </ul>

    <div style="visibility: hidden;" class="language-list icon d-flex align-items-center text-light ml-2" id="language_dropdown_box">
        <div class="language-select">
            <i class="fa fa-globe"></i>
        </div>
        <div class="language-options">
            <select class="form-control changeLang text-dark" id="language_dropdown">
            </select>
        </div>
    </div>
    
    <ul class="navbar-nav my-lg-0">
        <li class="nav-item dropdown gm-profile-nav-item">
            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark gm-profile-trigger" href="" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <span class="gm-profile-avatar profile-pic" aria-hidden="true">
                    <svg viewBox="0 0 64 64" role="img" focusable="false" aria-hidden="true">
                        <defs>
                            <linearGradient id="gmProfileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#00D9FF" />
                                <stop offset="100%" stop-color="#29B6F6" />
                            </linearGradient>
                        </defs>
                        <path d="M32 4l20 8v16c0 15.5-9.1 25.9-20 31.6C21.1 53.9 12 43.5 12 28V12l20-8z" fill="url(#gmProfileGradient)" opacity=".95"/>
                        <path d="M32 12l12 4.8v11.1c0 9.9-5.5 16.9-12 20.7-6.5-3.8-12-10.8-12-20.7V16.8L32 12z" fill="#041B2D"/>
                        <path d="M31 19.5a8.5 8.5 0 108.5 8.5A8.5 8.5 0 0031 19.5zm0 2.8a5.7 5.7 0 11-5.7 5.7 5.7 5.7 0 015.7-5.7z" fill="#7FEFFF"/>
                        <path d="M24.5 42.4a1.8 1.8 0 01.7-2.5l5.5-3.1V28a1.8 1.8 0 113.6 0v8.8l5.4 3a1.8 1.8 0 11-1.7 3.1L32 39.5l-5.1 2.9a1.8 1.8 0 01-2.4-.7z" fill="#7FEFFF"/>
                        <circle cx="20" cy="24" r="2.2" fill="#7FEFFF"/>
                        <circle cx="44" cy="24" r="2.2" fill="#7FEFFF"/>
                        <path d="M22.2 24h7.1M34.7 24h7.1" stroke="#7FEFFF" stroke-width="1.8" stroke-linecap="round"/>
                    </svg>
                </span>
                <span class="gm-profile-meta d-none d-lg-flex">
                    <span class="gm-profile-name">{{ Auth::user()->name }}</span>
                    <span class="gm-profile-role">{{ session('user_role') }}</span>
                </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right scale-up gm-profile-dropdown">
                <ul class="dropdown-user">
                    <li>
                        <div class="dw-user-box gm-user-box">
                            <div class="u-img gm-user-box__avatar" aria-hidden="true">
                                <span class="gm-user-box__avatar-inner">
                                    <svg viewBox="0 0 64 64" role="img" focusable="false" aria-hidden="true">
                                        <defs>
                                            <linearGradient id="gmProfileGradientInner" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stop-color="#00D9FF" />
                                                <stop offset="100%" stop-color="#29B6F6" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M32 4l20 8v16c0 15.5-9.1 25.9-20 31.6C21.1 53.9 12 43.5 12 28V12l20-8z" fill="url(#gmProfileGradientInner)" opacity=".95"/>
                                        <path d="M32 12l12 4.8v11.1c0 9.9-5.5 16.9-12 20.7-6.5-3.8-12-10.8-12-20.7V16.8L32 12z" fill="#041B2D"/>
                                        <path d="M31 19.5a8.5 8.5 0 108.5 8.5A8.5 8.5 0 0031 19.5zm0 2.8a5.7 5.7 0 11-5.7 5.7 5.7 5.7 0 015.7-5.7z" fill="#7FEFFF"/>
                                        <path d="M24.5 42.4a1.8 1.8 0 01.7-2.5l5.5-3.1V28a1.8 1.8 0 113.6 0v8.8l5.4 3a1.8 1.8 0 11-1.7 3.1L32 39.5l-5.1 2.9a1.8 1.8 0 01-2.4-.7z" fill="#7FEFFF"/>
                                        <circle cx="20" cy="24" r="2.2" fill="#7FEFFF"/>
                                        <circle cx="44" cy="24" r="2.2" fill="#7FEFFF"/>
                                        <path d="M22.2 24h7.1M34.7 24h7.1" stroke="#7FEFFF" stroke-width="1.8" stroke-linecap="round"/>
                                    </svg>
                                </span>
                            </div>
                            <div class="u-text">
                                <h4>{{ Auth::user()->name }}</h4>
                                <p class="text-muted">{{ session('user_role') }}</p>
                            </div>
                        </div>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li><a href="{{ route('users.profile') }}"><i class="mdi mdi-shield-account-outline"></i>
                            Profil</a></li>
                    <li><a href="{{ route('users.profile') }}"><i class="mdi mdi-cog-outline"></i>
                            Pengaturan Akun</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#"
                            onclick="event.preventDefault(); document.getElementById('logout-form').submit(); return false;"><i
                                class="mdi mdi-logout-variant"></i> Keluar</a></li>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </ul>
            </div>
        </li>
    </ul>
    <div class="navbar-nav my-lg-0 multi-service-nav">
        <div class="nav-item dropdown gm-service-switcher" id="activeSection">
            <a class="nav-link dropdown-toggle waves-effect waves-dark gm-service-switcher__trigger" href="#" id="activeSectionLink"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="gm-service-switcher__logo-wrap">
                    <img src="{{ asset('images/ghalbit-maritronix-icon.svg') }}" id="activeSectionLogo" alt="GHALBIT MARITRONIX" class="gm-service-switcher__logo">
                </span>
                <span id="activeSectionName"> {{ trans('lang.select_section') }}</span>
            </a>
            <div class="dropdown-menu dropdown-service scale-up gm-service-switcher__menu">
                <div class="dropdown-service_inner">
                    <div class="dropdown-service-top mb-4">
                        <h2>{{ trans('lang.modules_section') }}</h2>
                        <p>{{ trans('lang.select_module_monitor') }}</p>
                    </div>
                    <div id="sections_header"></div>
                </div>
            </div>
        </div>
    </div>
</div>

