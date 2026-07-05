<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Website Panel')</title>

    {{-- AI4_WEB_APP_PATCH --}}
    <link rel="stylesheet" href="{{ asset('ai4-website-panel/css/website-panel.css') }}">
</head>
<body>
    <div class="wp-shell">
        @include('website_panel.partials.sidebar')

        <main class="wp-main">
            @include('website_panel.partials.topbar')

            <section class="wp-content">
                @yield('content')
            </section>
        </main>
    </div>

    {{-- AI4_WEB_APP_PATCH --}}
    <script src="{{ asset('ai4-website-panel/js/website-panel.js') }}"></script>
</body>
</html>
