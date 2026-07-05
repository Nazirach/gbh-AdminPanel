{{-- AI4-0027_GHALBIT_WEBSITE_PANEL_NAVIGATION_REFINEMENT --}}
<aside class="wp-sidebar gm-sidebar">
    <div class="gm-sidebar-brand">
        <div class="gm-brand-mark">GM</div>
        <div>
            <strong>GHALBIT MARITRONIX</strong>
            <span>Website Control Panel</span>
        </div>
    </div>

    <nav class="gm-sidebar-nav">
        <a href="{{ url('/website-panel') }}" class="{{ request()->is('website-panel') ? 'active' : '' }}">
            <span>01</span>
            Dashboard
        </a>

        <a href="{{ url('/website-panel/homepage') }}" class="{{ request()->is('website-panel/homepage') ? 'active' : '' }}">
            <span>02</span>
            Homepage Draft
        </a>

        <a href="{{ url('/website-panel/preview') }}" class="{{ request()->is('website-panel/preview') ? 'active' : '' }}">
            <span>03</span>
            Public Preview
        </a>

        <a href="{{ url('/website-panel/cms') }}" class="{{ request()->is('website-panel/cms') ? 'active' : '' }}">
            <span>04</span>
            CMS Pages
        </a>

        <a href="{{ url('/website-panel/footer') }}" class="{{ request()->is('website-panel/footer') ? 'active' : '' }}">
            <span>05</span>
            Footer Draft
        </a>

        <a href="{{ url('/website-panel/legacy-map') }}" class="{{ request()->is('website-panel/legacy-map') ? 'active' : '' }}">
            <span>06</span>
            Legacy Map
        </a>
    
        {{-- AI4-0036_WEB_ADMIN_CLOUD_LINK --}}
        <a href="https://gbh-adminpanel-main-ieebco.laravel.cloud/" target="_blank" rel="noopener noreferrer" class="gm-cloud-admin-link">
            <span>07</span>
            Web Admin Cloud
        </a>
    </nav>

    <div class="gm-sidebar-status">
        <strong>SAFE MODE</strong>
        <p>Tidak publish, tidak Firebase write, tidak sentuh Admin core.</p>
    </div>
</aside>

