@extends('layouts.website_panel')

@section('title', 'Footer')

@section('content')
@php
    /*
     * AI4-0024_GHALBIT_MARITRONIX_BRAND_REALIGNMENT
     * SAFE PREVIEW ONLY
     * Tidak submit.
     * Tidak publish.
     * Tidak membaca/menulis Firebase/database.
     */

    $company = [
        'brand' => 'Ghalbit Maritronix',
        'tagline' => 'Maritime intelligence, drone operation, AI control center, and digital ecosystem integration.',
        'address' => 'Nusantara - Selat Malaka - Indonesia - Global Maritime Corridor',
        'email' => 'contact@ghalbit-maritronix.local',
        'phone' => '+62 000 0000 0000',
    ];

    $columns = [
        [
            'title' => 'Platform',
            'links' => ['Maritime Control Center', 'AI Data Intelligence', 'Drone Operation', 'Digital Twin Map'],
        ],
        [
            'title' => 'Solusi',
            'links' => ['Pemetaan Maritim', 'Operasi Pelabuhan', 'Monitoring Armada', 'Investor Dashboard'],
        ],
        [
            'title' => 'Ekosistem',
            'links' => ['Ghalbit System', 'Maritronix Panel', 'Field Operation', 'Data Center'],
        ],
    ];

    $checks = [
        'Brand footer sudah dikoreksi menjadi Ghalbit Maritronix.',
        'Kolom footer diarahkan ke maritime intelligence dan digital ecosystem.',
        'Kontak masih placeholder aman.',
        'Belum ada submit/publish.',
        'Belum membaca Firebase/database.',
        'Belum menyentuh footer lama secara langsung.',
    ];
@endphp

<div class="wp-page-header">
    <div>
        <p class="wp-eyebrow">AI-4 isolated workspace</p>
        <h1>Footer</h1>
        <p class="wp-muted">
            Area ini untuk menyusun struktur footer website publik Ghalbit Maritronix sebelum terhubung ke konten resmi.
        </p>
    </div>
    <div class="wp-status-pill safe">SAFE MODE</div>
</div>

<div class="wp-footer-layout">
    <section class="wp-card wp-footer-editor">
        <div class="wp-card-head">
            <div>
                <h2>Ghalbit Maritronix Footer Draft</h2>
                <p class="wp-muted">Struktur identitas, kontak, dan navigasi bawah website.</p>
            </div>
            <span class="wp-badge draft">DRAFT ONLY</span>
        </div>

        <div class="wp-form-preview">
            <label>
                <span>Brand</span>
                <input type="text" value="{{ $company['brand'] }}" readonly>
            </label>

            <label>
                <span>Tagline</span>
                <textarea rows="3" readonly>{{ $company['tagline'] }}</textarea>
            </label>

            <div class="wp-form-grid">
                <label>
                    <span>Alamat</span>
                    <input type="text" value="{{ $company['address'] }}" readonly>
                </label>

                <label>
                    <span>Email</span>
                    <input type="text" value="{{ $company['email'] }}" readonly>
                </label>
            </div>

            <label>
                <span>Telepon</span>
                <input type="text" value="{{ $company['phone'] }}" readonly>
            </label>
        </div>

        <div class="wp-warning-soft">
            Status: preview-safe. Footer belum menyimpan, belum publish, dan belum membaca database.
        </div>
    </section>

    <section class="wp-footer-live">
        <div class="wp-public-footer-preview">
            <div class="wp-public-footer-brand">
                <h2>{{ $company['brand'] }}</h2>
                <p>{{ $company['tagline'] }}</p>
                <div class="wp-public-footer-contact">
                    <span>{{ $company['address'] }}</span>
                    <span>{{ $company['email'] }}</span>
                    <span>{{ $company['phone'] }}</span>
                </div>
            </div>

            <div class="wp-public-footer-columns">
                @foreach ($columns as $column)
                    <div>
                        <h3>{{ $column['title'] }}</h3>
                        @foreach ($column['links'] as $link)
                            <a href="javascript:void(0)">{{ $link }}</a>
                        @endforeach
                    </div>
                @endforeach
            </div>

            <div class="wp-public-footer-bottom">
                <span>© {{ date('Y') }} {{ $company['brand'] }}. Preview only.</span>
                <span>SAFE MODE</span>
            </div>
        </div>
    </section>
</div>

<div class="wp-grid-2">
    <div class="wp-card">
        <h3>Checklist Footer</h3>
        <ul class="wp-check-list">
            @foreach ($checks as $check)
                <li>{{ $check }}</li>
            @endforeach
        </ul>
    </div>

    <div class="wp-card">
        <h3>Jalur Aman Berikutnya</h3>
        <p class="wp-muted">
            Setelah footer Ghalbit Maritronix rapi, langkah berikutnya adalah menyempurnakan CMS:
            profil perusahaan, teknologi, operasi maritim, investor page, dan legal pages.
        </p>

        <div class="wp-action-row">
            <a class="wp-button" href="{{ url('/website-panel/cms') }}">Buka CMS</a>
            <a class="wp-button secondary" href="{{ url('/website-panel/preview') }}">Preview</a>
        </div>
    </div>
</div>
@endsection

