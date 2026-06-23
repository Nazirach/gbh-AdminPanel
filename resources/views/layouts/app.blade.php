<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" <?php if (str_replace('_', '-', app()->getLocale()) == 'ar' || @$_COOKIE['is_rtl'] == 'true') { ?> dir="rtl" <?php } ?>>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>GHALBIT MARITRONIX Control Center</title>
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('assets/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">

    <?php if (str_replace('_', '-', app()->getLocale()) == 'ar' || @$_COOKIE['is_rtl'] == 'true') { ?>
        <link href="{{asset('assets/plugins/bootstrap/css/bootstrap-rtl.min.css')}}" rel="stylesheet">
    <?php } ?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-timepicker/0.5.2/css/bootstrap-timepicker.min.css">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    
    <?php if (str_replace('_', '-', app()->getLocale()) == 'ar' || @$_COOKIE['is_rtl'] == 'true') { ?>
        <link href="{{asset('css/style_rtl.css')}}" rel="stylesheet">
    <?php } ?>
    
    <link href="{{ asset('css/icons/font-awesome/css/font-awesome.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/toast-master/css/jquery.toast.css')}}" rel="stylesheet">
    <link href="{{ asset('css/colors/blue.css') }}" rel="stylesheet">
    <link href="{{ asset('css/chosen.css') }}" rel="stylesheet">
    <link href="{{ asset('css/bootstrap-tagsinput.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/summernote/summernote-bs4.css') }}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    <!-- Datatable css -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.4.1/css/responsive.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.4.1/css/responsive.dataTables.min.css">
    <link rel="stylesheet" href="{{ asset('assets/plugins/select2/dist/css/select2.min.css')}}">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-draw/dist/leaflet.draw.css" />
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="{{ asset('css/toastr.min.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">

    <script>
        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        function getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        let admin_panel_color = getCookie("admin_panel_color");
        if (admin_panel_color) {
            document.documentElement.style.setProperty('--admin-panel-color', admin_panel_color);
        }
    </script>

    <!-- @yield('style') -->
     
     <style>
        :root {
            --admin-panel-color: "#000000";
        }
    </style>

    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
    <style>
        :root {
            --ghalbit-bg: #021321;
            --ghalbit-panel: rgba(4, 27, 45, 0.95);
            --ghalbit-panel-soft: rgba(7, 36, 58, 0.9);
            --ghalbit-border: rgba(0, 217, 255, 0.15);
            --ghalbit-border-strong: rgba(0, 217, 255, 0.32);
            --ghalbit-cyan: #00d9ff;
            --ghalbit-cyan-soft: #6feaff;
            --ghalbit-text: #eaf7ff;
            --ghalbit-text-soft: #9fc2d9;
            --ghalbit-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
            --ghalbit-glow: 0 0 0 1px rgba(0, 217, 255, 0.1), 0 12px 36px rgba(0, 150, 255, 0.12);
            --ghalbit-radius: 20px;
            --ghalbit-radius-sm: 12px;
        }

        .ghalbit-footer {
            margin: 28px 24px 18px;
            padding: 16px 22px;
            border-radius: 18px;
            border: 1px solid rgba(57, 171, 255, 0.14);
            background: linear-gradient(180deg, rgba(6, 25, 45, 0.92), rgba(4, 18, 33, 0.96));
            color: #d7ebff;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .ghalbit-footer__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 18px;
            flex-wrap: wrap;
        }

        .ghalbit-footer__brand {
            font-size: 1rem;
            font-weight: 800;
            letter-spacing: .08em;
            text-transform: uppercase;
        }

        .ghalbit-footer__tagline,
        .ghalbit-footer__message {
            color: #93b9dd;
            font-size: .92rem;
            line-height: 1.5;
        }

        body {
            background:
                radial-gradient(circle at top left, rgba(0, 217, 255, 0.08), transparent 22%),
                radial-gradient(circle at top right, rgba(43, 100, 255, 0.09), transparent 26%),
                linear-gradient(180deg, #031321 0%, #061a2f 100%);
            color: var(--ghalbit-text);
        }

        .page-wrapper {
            background: transparent !important;
        }

        .page-titles {
            margin: 0 24px 22px;
            padding: 22px 26px;
            border-radius: 24px;
            border: 1px solid var(--ghalbit-border);
            background: linear-gradient(180deg, rgba(4, 27, 45, 0.94), rgba(6, 33, 54, 0.92));
            box-shadow: var(--ghalbit-shadow);
        }

        .page-titles .text-themecolor,
        .page-titles h3,
        .page-titles .top-title-left h3,
        .page-titles .top-title-left .mb-0 {
            color: #f5fbff !important;
            font-weight: 800;
            letter-spacing: .01em;
        }

        .breadcrumb {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 16px;
            margin-bottom: 0;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--ghalbit-border);
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.015);
        }

        .breadcrumb-item,
        .breadcrumb-item.active,
        .breadcrumb-item a {
            color: #d5edff !important;
            font-size: .9rem;
        }

        .breadcrumb-item + .breadcrumb-item::before {
            color: #5fd9ff;
        }

        .container-fluid,
        .page-wrapper > .card-body {
            padding-left: 24px;
            padding-right: 24px;
        }

        .admin-top-section,
        .table-list,
        .menu-tab,
        .vendor_payout_create,
        .vendor_payout_create-inner,
        .error_top {
            position: relative;
            z-index: 1;
        }

        .top-title-section,
        .sis-card-head-select-box {
            gap: 12px;
        }

        .top-title-left .icon,
        .top-title-left .counter {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 48px;
            border-radius: 16px;
            border: 1px solid var(--ghalbit-border);
            background: rgba(255, 255, 255, 0.05);
            box-shadow: var(--ghalbit-glow);
        }

        .top-title-left .icon {
            min-width: 52px;
            padding: 8px;
        }

        .top-title-left .icon img {
            max-width: 26px;
            max-height: 26px;
            object-fit: contain;
        }

        .top-title-left .counter {
            min-width: 56px;
            padding: 0 14px;
            color: #7ce8ff;
            font-weight: 800;
        }

        .card,
        .card.border,
        .vendor_payout_create-inner,
        .page-wrapper > .card-body,
        .menu-tab ul,
        fieldset {
            border-radius: var(--ghalbit-radius) !important;
            border: 1px solid var(--ghalbit-border) !important;
            background: linear-gradient(180deg, rgba(4, 27, 45, 0.96), rgba(6, 29, 47, 0.94)) !important;
            box-shadow: var(--ghalbit-shadow);
            color: var(--ghalbit-text);
        }

        .card-header,
        .card-body,
        .vendor_payout_create-inner,
        fieldset,
        .menu-tab ul {
            color: var(--ghalbit-text);
        }

        .card-header {
            border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
            background: transparent !important;
        }

        .card-header .text-dark-2,
        .card-header h3,
        .card-header h4,
        .card-body .text-dark-2,
        .card-body h3,
        .card-body h4,
        .card-body label,
        .card-body legend,
        .card-title,
        .form-text,
        .control-label {
            color: var(--ghalbit-text) !important;
        }

        .card-body p,
        .form-text,
        .card-header p,
        .table-list p,
        fieldset small,
        fieldset span,
        fieldset .text-muted {
            color: var(--ghalbit-text-soft) !important;
        }

        .table-responsive {
            border-radius: 18px;
            border: 1px solid rgba(255, 255, 255, 0.035);
            overflow: hidden;
            background: rgba(255, 255, 255, 0.02);
        }

        table.dataTable,
        .table {
            color: var(--ghalbit-text) !important;
            border-collapse: separate !important;
            border-spacing: 0;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }

        table.dataTable thead th,
        .table thead th {
            background: #041b2d !important;
            color: #dbf7ff !important;
            border-bottom: 1px solid var(--ghalbit-border-strong) !important;
            border-top: none !important;
            border-left: none !important;
            border-right: none !important;
            font-weight: 700;
            letter-spacing: .02em;
        }

        table.dataTable tbody tr,
        .table tbody tr {
            background: transparent !important;
        }

        table.dataTable tbody td,
        .table tbody td {
            color: #ebf9ff !important;
            border-color: rgba(0, 217, 255, 0.1) !important;
            background: transparent !important;
            vertical-align: middle;
        }

        table.dataTable tbody tr:hover td,
        .table-hover tbody tr:hover td {
            background: rgba(0, 217, 255, .08) !important;
        }

        table.dataTable.dtr-inline.collapsed > tbody > tr[role="row"] > td:first-child:before,
        table.dataTable.dtr-inline.collapsed > tbody > tr[role="row"] > th:first-child:before {
            background-color: #00cfff !important;
        }

        td.dataTables_empty {
            padding: 28px 18px !important;
            text-align: center !important;
            color: #dff8ff !important;
            font-weight: 700;
        }

        td.dataTables_empty::before {
            content: "GHALBIT MARITRONIX";
            display: block;
            margin-bottom: 8px;
            color: #70eaff;
            font-size: 1rem;
            letter-spacing: .1em;
            text-transform: uppercase;
        }

        td.dataTables_empty::after {
            content: "Integrated Maritime & Land Intelligence Platform";
            display: block;
            margin-top: 8px;
            color: #97bfd4;
            font-size: .88rem;
            font-weight: 500;
        }

        .dataTables_wrapper .dataTables_filter input,
        .dataTables_wrapper .dataTables_length select,
        .form-control,
        .select2-container--default .select2-selection--single,
        .select2-container--default .select2-selection--multiple,
        textarea.form-control,
        input[type="date"].form-control,
        input[type="number"].form-control,
        input[type="text"].form-control,
        input[type="password"].form-control,
        input[type="email"].form-control,
        select.form-control,
        #daterange {
            min-height: 46px;
            border-radius: 12px !important;
            border: 1px solid rgba(0, 217, 255, 0.18) !important;
            background: rgba(8, 28, 46, 0.88) !important;
            color: #f0fbff !important;
            box-shadow: inset 0 0 0 1px rgba(255,255,255,.015);
        }

        .form-control::placeholder,
        .dataTables_wrapper .dataTables_filter input::placeholder,
        textarea.form-control::placeholder {
            color: #84aac0 !important;
        }

        .dataTables_wrapper .dataTables_filter input:focus,
        .dataTables_wrapper .dataTables_length select:focus,
        .form-control:focus,
        .select2-container--default.select2-container--focus .select2-selection--single,
        .select2-container--default.select2-container--focus .select2-selection--multiple,
        #daterange:focus,
        #daterange:hover {
            border-color: rgba(0, 217, 255, 0.48) !important;
            box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.12), 0 10px 26px rgba(0, 140, 255, 0.12) !important;
            outline: none;
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered,
        .select2-container--default .select2-selection--multiple .select2-selection__rendered,
        .select2-container--default .select2-selection--single .select2-selection__placeholder,
        .select2-dropdown {
            color: #effbff !important;
            background: #092236 !important;
        }

        .select2-container--default .select2-results__option--highlighted[aria-selected],
        .select2-container--default .select2-results__option[aria-selected=true] {
            background: rgba(0, 217, 255, 0.18) !important;
            color: #fff !important;
        }

        .dataTables_wrapper .dataTables_filter,
        .dataTables_wrapper .dataTables_length,
        .dataTables_wrapper .dataTables_info,
        .dataTables_wrapper .dataTables_paginate {
            color: var(--ghalbit-text-soft) !important;
            margin-top: 14px;
        }

        .dataTables_wrapper .dataTables_paginate .paginate_button {
            border-radius: 12px !important;
            border: 1px solid var(--ghalbit-border) !important;
            background: rgba(255,255,255,.03) !important;
            color: #dff8ff !important;
            transition: all .2s ease;
        }

        .dataTables_wrapper .dataTables_paginate .paginate_button:hover,
        .dataTables_wrapper .dataTables_paginate .paginate_button.current {
            background: linear-gradient(135deg, rgba(0, 160, 255, 0.25), rgba(0, 217, 255, 0.22)) !important;
            color: #fff !important;
            border-color: rgba(0, 217, 255, 0.32) !important;
            box-shadow: 0 8px 18px rgba(0, 140, 255, 0.18);
        }

        .dt-buttons .dt-button,
        button.dt-button,
        div.dt-button,
        a.dt-button {
            border-radius: 12px !important;
            border: 1px solid var(--ghalbit-border) !important;
            background: rgba(255,255,255,.04) !important;
            color: #def6ff !important;
            box-shadow: none !important;
        }

        .dt-buttons .dt-button:hover,
        button.dt-button:hover,
        div.dt-button:hover,
        a.dt-button:hover {
            background: rgba(0, 217, 255, .12) !important;
            border-color: rgba(0, 217, 255, .26) !important;
        }

        .btn,
        button,
        input[type="submit"],
        input[type="button"] {
            border-radius: 12px !important;
            transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease;
        }

        .btn:hover,
        button:hover,
        input[type="submit"]:hover,
        input[type="button"]:hover {
            transform: translateY(-1px);
        }

        .btn-primary,
        .btn.btn-primary,
        .card-header-btn .btn-primary {
            border: none !important;
            color: #fff !important;
            background: linear-gradient(135deg, #0d78ff, #00d9ff) !important;
            box-shadow: 0 14px 32px rgba(0, 156, 255, 0.22);
        }

        .btn-success,
        .btn.btn-success {
            border: none !important;
            color: #fff !important;
            background: linear-gradient(135deg, #0f8c5f, #19cc80) !important;
            box-shadow: 0 14px 28px rgba(25, 204, 128, 0.18);
        }

        .btn-danger,
        .btn.btn-danger {
            border: none !important;
            color: #fff !important;
            background: linear-gradient(135deg, #b91c3a, #ff4b6b) !important;
            box-shadow: 0 14px 28px rgba(255, 75, 107, 0.18);
        }

        .btn-warning,
        .btn.btn-warning {
            border: none !important;
            color: #15120b !important;
            background: linear-gradient(135deg, #d18912, #ffca56) !important;
            box-shadow: 0 14px 28px rgba(255, 202, 86, 0.18);
        }

        .btn-secondary,
        .btn.btn-secondary {
            color: #dff6ff !important;
            border: 1px solid var(--ghalbit-border) !important;
            background: rgba(255,255,255,.04) !important;
        }

        .menu-tab ul {
            padding: 10px !important;
            gap: 8px;
            display: flex;
            flex-wrap: wrap;
        }

        .menu-tab ul li a {
            border-radius: 12px;
            color: #d8f3ff !important;
            background: rgba(255,255,255,.03);
            border: 1px solid transparent;
        }

        .menu-tab ul li.active a,
        .menu-tab ul li a:hover {
            background: rgba(0, 217, 255, .11);
            border-color: rgba(0, 217, 255, .24);
        }

        .badge,
        .badge-success,
        .badge-danger,
        .badge-warning,
        .badge-primary,
        .badge-secondary,
        .status,
        .status-active,
        .status-inactive {
            border-radius: 999px !important;
            padding: .45rem .75rem !important;
            font-weight: 700 !important;
            letter-spacing: .02em;
        }

        .badge-success,
        .status-active {
            background: rgba(25, 204, 128, 0.16) !important;
            color: #76f0b1 !important;
            border: 1px solid rgba(25, 204, 128, 0.22) !important;
        }

        .badge-danger,
        .status-inactive {
            background: rgba(255, 75, 107, 0.14) !important;
            color: #ff8ea4 !important;
            border: 1px solid rgba(255, 75, 107, 0.2) !important;
        }

        .badge-warning {
            background: rgba(255, 202, 86, 0.16) !important;
            color: #ffd67f !important;
            border: 1px solid rgba(255, 202, 86, 0.18) !important;
        }

        .badge-primary,
        .badge-secondary {
            background: rgba(0, 217, 255, 0.12) !important;
            color: #8defff !important;
            border: 1px solid rgba(0, 217, 255, 0.18) !important;
        }

        .modal-content {
            border-radius: 24px !important;
            border: 1px solid var(--ghalbit-border) !important;
            background: linear-gradient(180deg, rgba(4, 27, 45, 0.98), rgba(5, 23, 39, 0.98)) !important;
            box-shadow: 0 24px 56px rgba(0, 0, 0, 0.28);
            color: var(--ghalbit-text);
        }

        .modal-header,
        .modal-footer {
            border-color: rgba(255,255,255,.06) !important;
        }

        .modal-title,
        .modal-content label,
        .modal-content h1,
        .modal-content h2,
        .modal-content h3,
        .modal-content h4,
        .modal-content h5,
        .modal-content h6 {
            color: #f4fbff !important;
        }

        .modal-content p,
        .modal-content span,
        .modal-content small {
            color: var(--ghalbit-text-soft);
        }

        .modal-backdrop.show {
            opacity: .72;
        }

        fieldset {
            padding: 24px !important;
            margin-bottom: 20px !important;
        }

        legend {
            width: auto !important;
            padding: 0 14px !important;
            border-radius: 999px;
            background: rgba(0, 217, 255, 0.1);
            border: 1px solid rgba(0, 217, 255, 0.18);
            font-size: .95rem !important;
            letter-spacing: .03em;
        }

        .page-overlay {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background: rgba(3, 17, 29, 0.68);
            backdrop-filter: blur(6px);
        }

        .overlay-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 88px;
            height: 88px;
            border-radius: 999px;
            border: 1px solid rgba(0, 217, 255, 0.2);
            background: radial-gradient(circle, rgba(0, 217, 255, 0.16), rgba(4, 27, 45, 0.94));
            box-shadow: 0 0 0 12px rgba(0, 217, 255, 0.05), 0 0 42px rgba(0, 217, 255, 0.18);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .overlay-text img {
            width: 42px;
            height: 42px;
            object-fit: contain;
            filter: drop-shadow(0 0 12px rgba(0, 217, 255, 0.3));
        }

        .bg--1,
        .bg--5,
        .bg--6,
        .bg--8 {
            background: transparent !important;
        }

        .card.card-box-with-icon.bg--1,
        .card.card-box-with-icon.bg--5,
        .card.card-box-with-icon.bg--6,
        .card.card-box-with-icon.bg--8 {
            background: linear-gradient(180deg, rgba(4, 27, 45, 0.96), rgba(6, 29, 47, 0.94)) !important;
        }

        @media (max-width: 991.98px) {
            .page-titles,
            .container-fluid,
            .page-wrapper > .card-body {
                margin-left: 14px;
                margin-right: 14px;
                padding-left: 16px;
                padding-right: 16px;
            }

            .page-titles {
                padding: 18px;
            }

            .top-title-section,
            .sis-card-head-select-box {
                flex-direction: column;
                align-items: stretch !important;
            }
        }

        @media (max-width: 767.98px) {
            .ghalbit-footer {
                margin: 18px 14px 14px;
                padding: 14px 16px;
            }
        }
    </style>
</head>

<body>
    <div id="app" class="fix-header fix-sidebar card-no-border">
        <div id="main-wrapper">
            <div id="data-table_processing" class="page-overlay" style="display:none;">
                <div class="overlay-text">
                    <img src="{{asset('images/spinner.gif')}}">
                </div>
            </div>
            <header class="topbar non-printable">
                <nav class="navbar top-navbar navbar-expand-md navbar-light">
                    @include('layouts.header')
                </nav>
            </header>
            <aside class="left-sidebar non-printable">
                <div class="scroll-sidebar">
                    @include('layouts.menu')
                </div>
            </aside>
        </div>
        <main class="py-4">
            @yield('content')
        </main>
        <footer class="ghalbit-footer">
            <div class="ghalbit-footer__inner">
                <div>
                    <div class="ghalbit-footer__brand">GHALBIT MARITRONIX</div>
                    <div class="ghalbit-footer__tagline">Integrated Maritime &amp; Land Intelligence Platform</div>
                </div>
                <div class="ghalbit-footer__message">Kekuatan Laut Untuk Masa Depan. Laut dan darat dalam satu jaringan masa depan.</div>
            </div>
        </footer>
    </div>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-draw/dist/leaflet.draw.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-editable/0.7.3/leaflet.editable.min.js"></script>
    <script src="https://unpkg.com/leaflet-draw@0.4.14/dist/leaflet.draw-src.js"></script>
    <script src="https://unpkg.com/leaflet-geojson-layer/src/leaflet.geojson.js"></script>
    <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ asset('assets/plugins/bootstrap/js/popper.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/bootstrap/js/bootstrap.min.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('js/jquery.slimscroll.js') }}"></script>
    <script src="{{ asset('js/waves.js') }}"></script>
    <script src="{{ asset('js/sidebarmenu.js') }}"></script>
    <script src="{{ asset('assets/plugins/sticky-kit-master/dist/sticky-kit.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/sparkline/jquery.sparkline.min.js')}}"></script>
    <script src="{{ asset('js/custom.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/summernote/summernote-bs4.js')}}"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>
<script>
    window.firebaseClientReady = false;
    window.firebaseDb = null;

    var firebaseConfig = {
        apiKey: "{{ env('FIREBASE_API_KEY') }}",
        authDomain: "{{ env('FIREBASE_AUTH_DOMAIN') }}",
        projectId: "{{ env('FIREBASE_PROJECT_ID') }}",
        storageBucket: "{{ env('FIREBASE_STORAGE_BUCKET') }}",
        messagingSenderId: "{{ env('FIREBASE_MESSAGING_SENDER_ID') }}",
        appId: "{{ env('FIREBASE_APP_ID') }}",
        measurementId: "{{ env('FIREBASE_MEASUREMENT_ID') }}"
    };

    if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
        console.warn("Firebase config missing, skipping Firebase client initialization");
    } else {
        try {
            if (!firebase.apps || firebase.apps.length === 0) {
                firebase.initializeApp(firebaseConfig);
            }
            window.firebaseDb = firebase.firestore();
            window.firebaseClientReady = true;
        } catch (error) {
            window.firebaseClientReady = false;
            window.firebaseDb = null;
            console.warn("Firebase initialization failed, skipping Firebase client initialization", error);
        }
    }
</script>
    <script src="https://unpkg.com/geofirestore@5.2.0/dist/geofirestore.js"></script>
    <script src="https://cdn.firebase.com/libs/geofire/5.0.1/geofire.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{ asset('js/chosen.jquery.js') }}"></script>
    <script src="{{ asset('js/jquery.resizeImg.js') }}"></script>
    <script src="{{ asset('js/bootstrap-tagsinput.js') }}"></script>
    <script src="{{ asset('js/crypto-js.js') }}"></script>
    <script src="{{ asset('js/jquery.cookie.js') }}"></script>
    <script src="{{ asset('js/jquery.validate.js') }}"></script>
    <script src="{{ asset('assets/plugins/select2/dist/js/select2.min.js') }}"></script>
    <script src="{{ asset('js/jquery.masking.js') }}"></script>
    <script src="{{ asset('js/toastr.min.js') }}"></script>
    
    <!-- Datatable script -->
    <script type="text/javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/responsive/2.4.1/js/dataTables.responsive.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-timepicker/0.5.2/js/bootstrap-timepicker.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.1/xlsx.full.min.js"></script>
    <script type="text/javascript"src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.24/jspdf.plugin.autotable.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-timepicker/0.5.2/js/bootstrap-timepicker.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-timepicker/0.5.2/js/bootstrap-timepicker.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>

    <script type="text/javascript">
        jQuery(window).scroll(function () {
            var scroll = jQuery(window).scrollTop();
            if (scroll <= 60) {
                jQuery("body").removeClass("sticky");
            } else {
                jQuery("body").addClass("sticky");
            }
        });
        const datatableLang = {
            "decimal":        "",
            "emptyTable":     "{{ trans('lang.no_record_found') }}",
            "info":           "{{ trans('lang.datatable_info') }}", 
            "infoEmpty":      "{{ trans('lang.datatable_info_empty') }}", 
            "infoFiltered":   "{{ trans('lang.datatable_info_filtered') }}", 
            "lengthMenu":     "{{ trans('lang.datatable_length_menu') }}",
            "loadingRecords": "{{ trans('lang.loading') }}",
            "processing":     "{{ trans('lang.processing') }}",
            "search":         "{{ trans('lang.search') }}",
            "zeroRecords":    "{{ trans('lang.no_record_found') }}",
            "paginate": {
                "first":      "{{ trans('lang.first') }}",
                "last":       "{{ trans('lang.last') }}",
                "next":       "{{ trans('lang.next') }}",
                "previous":   "{{ trans('lang.previous') }}"
            },
            "aria": {
                "sortAscending":  ": {{ trans('lang.sort_asc') }}",
                "sortDescending": ": {{ trans('lang.sort_desc') }}"
            }
        };
    </script>
    <script type="text/javascript">

        if (!window.firebaseClientReady || !window.firebaseDb) {
            console.warn("Firebase config missing, skipping Firebase client initialization");
        } else {
            var languages_list_main = [];
            var database = window.firebaseDb;
            var geoFirestore = new GeoFirestore(database);
            var createdAtman = firebase.firestore.Timestamp.fromDate(new Date());
            var createdAt = { _nanoseconds: createdAtman.nanoseconds, _seconds: createdAtman.seconds };
            var mapType = 'ONLINE';

        var sosInitialized = false; 
        database.collection('SOS').onSnapshot((snapshot) => {
            if (!sosInitialized) {               
                sosInitialized = true;
                return;
            }

            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    var data = change.doc.data();
                    Swal.fire({
                        icon: 'warning',
                        title: 'SOS Alert!',
                        html: `New SOS initiated<br>`,
                        confirmButtonText: 'View Details',
                        confirmButtonColor: '#d33',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = '/sos/edit/' + change.doc.id;
                        }
                    });
                }
            });
        });
        
        var ref = database.collection('settings').doc("globalSettings");
        ref.get().then(async function (snapshots) {
            var globalSettings = snapshots.data();
            $("#app_name").html("GHALBIT MARITRONIX");
            $("#logo_web").attr('src', "{{ asset('images/ghalbit-maritronix-logo.svg') }}");
            if (globalSettings && globalSettings.admin_panel_color) {
                document.documentElement.style.setProperty('--admin-panel-color', globalSettings.admin_panel_color);
            }
        });
        
        var placeholderImage = '';
        var placeholder = database.collection('settings').doc('placeHolderImage');
        placeholder.get().then(async function (snapshotsimage) {
            var placeholderImageData = snapshotsimage.data();
            placeholderImage = placeholderImageData.image;
        })
        
        $(document).ready(async function () {
            getServiceSections();
            $(document).on('click', '.service-list-box', function() {
                let sectionUrl = $(this).data('section-url');
                let sectionId = $(this).data('section-id');
                let sectionType = $(this).data('section-type');
                if(sectionId && sectionType){
                    setCookie('section_id', sectionId, 1);
                    setCookie('service_type', sectionType, 1);
                }
                window.location.href = sectionUrl;
                /*window.location.reload();*/
            });
        });
        
        var langcount = 0;
        var languages_list = database.collection('settings').doc('languages');
        languages_list.get().then(async function (snapshotslang) {
            snapshotslang = snapshotslang.data();
            if (snapshotslang != undefined) {
                snapshotslang = snapshotslang.list;
                languages_list_main = snapshotslang;
                snapshotslang.forEach((data) => {
                    if (data.isActive == true) {
                        langcount++;
                        $('#language_dropdown').append($("<option></option>").attr("value", data.slug).text(data.title));
                    }
                });
                if (langcount > 1) {
                    $("#language_dropdown_box").css('visibility', 'visible');
                }
                <?php if (session()->get('locale')) { ?>
                    $("#language_dropdown").val("<?php    echo session()->get('locale'); ?>");
                <?php } ?>
            }
        });

        var url = "{{ route('changeLang') }}";
        $(".changeLang").change(function () {
            var slug = $(this).val();
            languages_list_main.forEach((data) => {
                if (slug == data.slug) {
                    if (data.is_rtl == undefined) {
                        setCookie('is_rtl', 'false', 365);
                    } else {
                        setCookie('is_rtl', data.is_rtl.toString(), 365);
                    }
                    window.location.href = url + "?lang=" + slug;
                }
            });
        });

        var version = database.collection('settings').doc("Version");
        version.get().then(async function (snapshots) {
            var version_data = snapshots.data();
            if (version_data == undefined) {
                database.collection('settings').doc('Version').set({});
            }
            try {
                $('.web_version').html("V:" + version_data.web_version);
            } catch (error) {
            }
        });
        
        async function sendEmail(url, subject, message, recipients) {
            var checkFlag = false;
            await $.ajax({
                type: 'POST',
                data: {
                    subject: subject,
                    message: btoa(message),
                    recipients: recipients
                },
                url: url,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    checkFlag = true;
                },
                error: function (xhr, status, error) {
                    checkFlag = true;
                }
            });
            return checkFlag;
        }

        database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
            var data = snapshots.data();
            if (data && data.selectedMapType && data.selectedMapType == "osm") {
                mapType = "OFFLINE"
            }
        });
        
        async function getServiceSections() {
            let ref = database.collection('sections').where('isActive', '==', true).orderBy('order');
            const sectionsSnapshot = await ref.get();
            const sectionsContainer = document.getElementById('sections_header');
            sectionsContainer.innerHTML = await buildServiceSectionsHTML(sectionsSnapshot);
        }
        
        async function buildServiceSectionsHTML(snapshot) {
            let html = '';
            var addSectionRoute = "{{ route('section.create') }}";
            var idSecActive = getCookie('section_id') || '';
            var typeSecActive = getCookie('service_type') || '';
            snapshot.docs.forEach(doc => {
                var data = doc.data();
                var sectionName = data.name || 'Unnamed Section';
                var sectionDescription = data.description || '';
                var sectionImage = data.sectionImage || placeholderImage;
                var sectionId = data.id || doc.id;
                var sectionRoute = `{{ route('dashboard') }}/${sectionId}/${data.serviceTypeFlag}`;
                var isSelected = (sectionId === idSecActive && (data.serviceTypeFlag || '') === typeSecActive);
                var selectedClass = isSelected ? 'selected-section' : '';
                if (isSelected) {
                    $('#activeSectionLogo').attr('src', `{{ asset('images/ghalbit-maritronix-icon.svg') }}`);
                    $('#activeSectionName').text(sectionName);
                }
                html += `
                <div class="col-md-4">
                    <div class="service-list-box ${selectedClass}" data-section-url="${sectionRoute}" data-section-id="${data.id}" data-section-type="${data.serviceTypeFlag}">
                        <img src="${sectionImage}" onerror="this.onerror=null;this.src='${placeholderImage}'">
                        <h3>${sectionName}</h3>
                        <p>${sectionDescription}</p>
                    </div>
                </div>
                `;
            });
            html += `
                <div class="col-md-12">
                    <div class="service-list-box" data-section-url="${addSectionRoute}" data-section-id="" data-section-type="">
                        <img src="{{ asset('images/add_more.png') }}">
                        <h3>{{trans('lang.add_more')}}</h3>
                        <p>{{trans('lang.expand_by_adding_new_modules_as_your_business_grows')}}</p>
                    </div>
                </div>
                `;
            html = `<div class="dropdown-service-list"><div class="row">${html}</div></div>`;
            return html;
        }

        async function loadGoogleMapsScript() {
            var googleMapKeySnapshotsHeader = await database.collection('settings').doc("googleMapKey").get();
            var placeholderImageHeaderData = googleMapKeySnapshotsHeader.data();
            googleMapKey = placeholderImageHeaderData.key;
            const script = document.createElement('script');
            if (mapType == "OFFLINE") {
                script.src = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
                script.src = "https://unpkg.com/leaflet-draw/dist/leaflet.draw.js";
                script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet-editable/0.7.3/leaflet.editable.min.js";
                script.src = "https://unpkg.com/leaflet-draw@0.4.14/dist/leaflet.draw-src.js";
                script.src = "https://unpkg.com/leaflet-ajax/dist/leaflet.ajax.min.js";
                script.src = "https://unpkg.com/leaflet-geojson-layer/src/leaflet.geojson.js";
                script.src = "https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js";
            } else {
                script.src = "https://maps.googleapis.com/maps/api/js?key=" + googleMapKey + "&libraries=places,drawing";
            }
            script.onload = function () {
                navigator.geolocation.getCurrentPosition(GeolocationSuccessCallback, GeolocationErrorCallback);
                if (typeof window['InitializeGodsEyeMap'] === 'function') {
                    InitializeGodsEyeMap();
                }
            };
            document.head.appendChild(script);
        }

        const GeolocationSuccessCallback = (position) => {
            if (position.coords != undefined) {
                default_latitude = position.coords.latitude
                default_longitude = position.coords.longitude
                setCookie('default_latitude', default_latitude, 365);
                setCookie('default_longitude', default_longitude, 365);
            }
        };
        const GeolocationErrorCallback = (error) => {
            console.log('Error: You denied for your default Geolocation', error.message);
            setCookie('default_latitude', '23.022505', 365);
            setCookie('default_longitude', '72.571365', 365);
        };

        loadGoogleMapsScript();
        
        database.collection('settings').doc("notification_setting").get().then(async function (snapshots) {
            var data = snapshots.data();
            if (!data || !data.serviceJson) {
                return;
            }
            serviceJson = data.serviceJson;
            if (serviceJson != '' && serviceJson != null) {
                $.ajax({
                    type: 'POST',
                    data: {
                        serviceJson: btoa(serviceJson),
                    },
                    url: "{{ route('store-firebase-service') }}",
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function (data) {
                        checkFlag = true;
                    }
                });
            }
        });

        //On delete item delete image also from bucket general code
        const deleteDocumentWithImage = async (collection, id, singleImageField, arrayImageField, profileImageField, carProofPictureURL, driverProofPictureURL) => {
            // Reference to the Firestore document
            const docRef = database.collection(collection).doc(id);
            try {
                const doc = await docRef.get();
                if (!doc.exists) {
                    console.log("No document found for deletion");
                    return;
                }
                const data = doc.data();
                // Handle single image deletion
                // Deleting single image field
                if (singleImageField) {
                    if (Array.isArray(singleImageField)) {
                        for (const field of singleImageField) {
                            const imageUrl = data[field];
                            if (imageUrl) await deleteImageFromBucket(imageUrl);
                        }
                    } else {
                        const imageUrl = data[singleImageField];
                        if (imageUrl) await deleteImageFromBucket(imageUrl);
                    }
                }
                // Deleting array image field
                if (arrayImageField) {
                    if (Array.isArray(arrayImageField)) {
                        for (const field of arrayImageField) {
                            const arrayImages = data[field];
                            if (arrayImages && Array.isArray(arrayImages)) {
                                for (const imageUrl of arrayImages) {
                                    if (imageUrl) await deleteImageFromBucket(imageUrl);
                                }
                            }
                        }
                    } else {
                        const arrayImages = data[arrayImageField];
                        if (arrayImages && Array.isArray(arrayImages)) {
                            for (const imageUrl of arrayImages) {
                                if (imageUrl) await deleteImageFromBucket(imageUrl);
                            }
                        }
                    }
                }
                // Handle variant images deletion
                const item_attribute = data.item_attribute || {};  // Access item_attribute
                const variants = item_attribute.variants || [];    // Access variants array inside item_attribute
                if (variants.length > 0) {
                    for (let i = 0; i < variants.length; i++) {
                        const variantImageUrl = variants[i].variant_image;
                        if (variantImageUrl) {
                            await deleteImageFromBucket(variantImageUrl);
                        }
                    }
                }
                // Handle profile_file_name image deletion
                const profile_file_name = data[profileImageField] || '';  // profile image field
                if (profile_file_name) {
                    await deleteImageFromBucket(profile_file_name);
                }
                // Handle carproof_file_name image deletion
                const carproof_file_name = data[carProofPictureURL] || '';  // carproof image field
                if (carproof_file_name) {
                    await deleteImageFromBucket(carproof_file_name);
                }
                // Handle driverproof_file_name image deletion
                const driverproof_file_name = data[driverProofPictureURL] || '';  // driverproof image field
                if (driverproof_file_name) {
                    await deleteImageFromBucket(driverproof_file_name);
                }
                // Optionally delete the Firestore document after image deletion
                await docRef.delete();
                console.log("Document and images deleted successfully.");
            } catch (error) {
                console.error("Error deleting document and images:", error);
            }
        };

        const deleteImageFromBucket = async (imageUrl) => {
            try {
                const storageRef = firebase.storage().ref();
                // Check if the imageUrl is a full URL or just a child path
                let oldImageUrlRef;
                if (imageUrl.includes('https://')) {
                    // Full URL
                    oldImageUrlRef = storageRef.storage.refFromURL(imageUrl);
                } else {
                    // Child path, use ref instead of refFromURL
                    oldImageUrlRef = storageRef.storage.ref(imageUrl);
                }
                var envBucket = "<?php echo env('FIREBASE_STORAGE_BUCKET'); ?>";
                var imageBucket = oldImageUrlRef.bucket;
                // Check if the bucket name matches
                if (imageBucket === envBucket) {
                    // Delete the image
                    await oldImageUrlRef.delete();
                    console.log("Image deleted successfully.");
                }
            } catch (error) {
            }
        };

        function exportData(dt, format, config) {
            const {
                columns,
                fileName = 'Export',
            } = config;
            const filteredRecords = dt.ajax.json().filteredData;
            const fieldTypes = {};
            const dataMapper = (record) => {
                return columns.map((col) => {
                    const value = record[col.key];
                    if (!fieldTypes[col.key]) {
                        if (value === true || value === false) {
                            fieldTypes[col.key] = 'boolean';
                        } else if (value && typeof value === 'object' && value.seconds) {
                            fieldTypes[col.key] = 'date';
                        } else if (typeof value === 'number') {
                            fieldTypes[col.key] = 'number';
                        } else if (typeof value === 'string') {
                            fieldTypes[col.key] = 'string';
                        } else {
                            fieldTypes[col.key] = 'string';
                        }
                    }
                    switch (fieldTypes[col.key]) {
                        case 'boolean':
                            return value ? 'Yes' : 'No';
                       /*  case 'date':
                            return value ? new Date(value.seconds * 1000).toLocaleString() : '-'; */
                        case 'date':
                            return value?.toDate ? value.toDate().toLocaleString() :
                                (value.seconds ? new Date(value.seconds * 1000).toLocaleString() : '-');
                        case 'number':
                            return typeof value === 'number' ? value : 0;
                        case 'string':
                        default:
                            return value || '-';
                    }
                });
            };
            const tableData = filteredRecords.map(dataMapper);
            const data = [columns.map(col => col.header), ...tableData];
            const columnWidths = columns.map((_, colIndex) =>
                Math.max(...data.map(row => row[colIndex]?.toString().length || 0))
            );
            if (format === 'csv') {
                const csv = data.map(row => row.map(cell => {
                    if (typeof cell === 'string' && (cell.includes(',') || cell.includes('\n') || cell.includes('"'))) {
                        return `"${cell.replace(/"/g, '""')}"`;
                    }
                    return cell;
                }).join(',')).join('\n');
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                saveAs(blob, `${fileName}.csv`);
            } else if (format === 'excel') {
                const ws = XLSX.utils.aoa_to_sheet(data, { cellDates: true });
                ws['!cols'] = columnWidths.map(width => ({ wch: Math.min(width + 5, 30) }));
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, 'Data');
                XLSX.writeFile(wb, `${fileName}.xlsx`);
            } else if (format === 'pdf') {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF('l', 'mm', 'a4');
                doc.setFontSize(12);
                doc.text(fileName, 14, 16);
                doc.autoTable({
                    head: [columns.map(col => col.header)],
                    body: tableData,
                    startY: 20,
                    theme: 'striped',
                    styles: {
                        cellPadding: 1,
                        fontSize: 8,
                        overflow: 'linebreak',
                    },
                    columnStyles: {
                        0: { cellWidth: 'auto' },
                    },
                    margin: { top: 30, bottom: 30 },
                    pageBreak: 'auto',
                });
                doc.save(`${fileName}.pdf`);
            } else {
                console.error('Unsupported format');
            }
        }

        function showError(msg) {
            $(".error_top").show();
            $(".error_top").html("");
            $(".error_top").append(`<p>${msg}</p>`);
            window.scrollTo(0, 0);
            return false;
        }

        function encodeGeohash(latitude, longitude, precision = 10) {

            const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
            let idx = 0;
            let bit = 0;
            let even = true;
            let geohash = "";

            let latMin = -90, latMax = 90;
            let lonMin = -180, lonMax = 180;

            while (geohash.length < precision) {
                if (even) {
                    let mid = (lonMin + lonMax) / 2;
                    if (longitude > mid) {
                        idx = idx * 2 + 1;
                        lonMin = mid;
                    } else {
                        idx = idx * 2;
                        lonMax = mid;
                    }
                } else {
                    let mid = (latMin + latMax) / 2;
                    if (latitude > mid) {
                        idx = idx * 2 + 1;
                        latMin = mid;
                    } else {
                        idx = idx * 2;
                        latMax = mid;
                    }
                }
                even = !even;

                if (++bit == 5) {
                    geohash += BASE32.charAt(idx);
                    bit = 0;
                    idx = 0;
                }
            }

            return geohash;
        }

        function showProcessing() {
            Swal.fire({
                title: window.translations.showProcessingTitle,
                text: window.translations.showProcessingText,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        }

        function showSuccessMessage(message) {
            Swal.fire({
                icon: 'success',
                title: window.translations.successMessageTitle,
                text: message,
                showConfirmButton: false,
                timer: 2000,
            });
        }

        function showErrorMessage(message) {
            Swal.fire({
                icon: 'error',
                title: window.translations.errorMessageTitle,
                text: message,
                showConfirmButton: true
            });
        }

        window.translations = {
            showProcessingTitle:"{{trans('lang.please_wait')}}",
            showProcessingText:"{{trans('lang.processing_your_request')}}",
            errorMessageTitle:"{{trans('lang.error')}}",
            warningMessageTitle:"{{trans('lang.warning')}}",
            successMessageTitle:"{{trans('lang.success')}}",
        };

        async function getUserZoneId(address_lng,address_lat){
            var zone_id = null;
            var zone_list = [];
            var snapshots = await database.collection('zone').where("publish","==",true).get();
            if(snapshots.docs.length > 0){
                snapshots.docs.forEach((snapshot) => {
                    var zone_data = snapshot.data();
                    zone_list.push(zone_data);
                });   
            }
            if(zone_list.length > 0){
                for (i = 0; i < zone_list.length; i++) {
                    var zone = zone_list[i];
                    var vertices_x = [];
                    var vertices_y = [];
                    for (j = 0; j < zone.area.length; j++) {
                        var geopoint = zone.area[j];
                        vertices_x.push(geopoint.longitude);
                        vertices_y.push(geopoint.latitude);
                    }
                    var points_polygon = (vertices_x.length)-1; 
                    if(is_in_polygon(points_polygon, vertices_x, vertices_y, address_lng, address_lat)){
                        zone_id = zone.id;
                        break; 
                    }
                }
            }
            return zone_id;
        }

        function is_in_polygon($points_polygon, $vertices_x, $vertices_y, $longitude_x, $latitude_y){
            $i = $j = $c = $point = 0;
            for ($i = 0, $j = $points_polygon ; $i < $points_polygon; $j = $i++) {
                $point = $i;
                if( $point === $points_polygon )
                    $point = 0;
                if ( (($vertices_y[$point]  >  $latitude_y !== ($vertices_y[$j] > $latitude_y)) && ($longitude_x < ($vertices_x[$j] - $vertices_x[$point]) * ($latitude_y - $vertices_y[$point]) / ($vertices_y[$j] - $vertices_y[$point]) + $vertices_x[$point]) ) )
                    $c = !$c;
            }
            return $c;
        }

        const distanceRadius = (lat1, lon1, lat2, lon2) => {
            if ((lat1 === lat2) && (lon1 === lon2)) {
                return 0;
            }
            else {
                var radlat1 = Math.PI * lat1/180;
                var radlat2 = Math.PI * lat2/180;
                var theta = lon1-lon2;
                var radtheta = Math.PI * theta/180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = dist * 180/Math.PI;
                dist = dist * 60 * 1.1515;
                dist = dist * 1.60934; // Convert to kilometers
                
                return dist;
            }
        }

        function formatCurrency(amount, currency = {}) {
            const symbol = currency.symbol || '';
            const decimals = currency.decimal_degits ?? 2;
            const symbolAtRight = Boolean(currency.symbolAtRight);
            const formatted = parseFloat(amount).toFixed(decimals);
            return symbolAtRight
                ? formatted + ' ' + symbol
                : symbol + formatted;
        }
        
        async function getCountryFromLatLng(lat, lng) {
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            return data?.address?.country || '';
        }

        async function sendNotification(fcmToken = '', title, body, payload = null) {            
            var checkFlag = false;
            var sendNotificationUrl = "{{ route('send-notification') }}";
            if (fcmToken !== '') {
                await $.ajax({
                    type: 'POST',
                    url: sendNotificationUrl,
                    data: {
                        _token: $('meta[name="csrf-token"]').attr('content'),
                        'fcm': fcmToken,
                        'title': title,
                        'message': body,
                        'payload': JSON.stringify(payload)
                    },
                    success: function (data) {
                        checkFlag = true;
                    },
                    error: function (error) {
                        checkFlag = true;
                    }
                });
            } else {
                checkFlag = true;
            }

            return checkFlag;
        }
        }
    </script>

    @yield('scripts')

</body>
</html>





