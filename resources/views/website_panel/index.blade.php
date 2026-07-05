@extends('layouts.website_panel')

@section('title', 'Website Panel')
@section('page_title', 'Dashboard Website Panel')

@section('content')
{{-- AI4_WEB_APP_PATCH --}}
<div class="wp-card">
    <h1>Website Panel</h1>
    <p>Panel ini dibuat oleh AI-4 sebagai jalur terpisah untuk mengelola wajah depan website publik.</p>

    <div class="wp-grid">
        <a class="wp-tile" href="{{ route('website-panel.homepage') }}">
            <h3>Homepage</h3>
            <p>Kelola struktur halaman depan website.</p>
        </a>

        <a class="wp-tile" href="{{ route('website-panel.footer') }}">
            <h3>Footer</h3>
            <p>Kelola footer, kontak, dan link penting.</p>
        </a>

        <a class="wp-tile" href="{{ route('website-panel.cms') }}">
            <h3>CMS</h3>
            <p>Kelola halaman informasi publik.</p>
        </a>

        <a class="wp-tile" href="{{ route('website-panel.preview') }}">
            <h3>Preview</h3>
            <p>Lihat tampilan sebelum publish.</p>
        </a>
    </div>
</div>
@endsection
