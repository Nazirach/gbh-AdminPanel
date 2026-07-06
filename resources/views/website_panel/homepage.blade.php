@extends('layouts.website_panel')

@section('title', 'Homepage')

@section('content')
@php
    /*
     * AI4-0024_GHALBIT_MARITRONIX_BRAND_REALIGNMENT
     * SAFE PREVIEW ONLY
     * Tidak submit.
     * Tidak publish.
     * Tidak membaca/menulis Firebase/database.
     */

    $hero = [
        'badge' => 'GHALBIT MARITRONIX',
        'title' => 'Sistem maritim cerdas untuk kendali, pemetaan, drone, pelabuhan, dan ekosistem digital masa depan.',
        'subtitle' => 'Website Panel ini disiapkan sebagai ruang kendali visual untuk membangun wajah publik Ghalbit Maritronix: teknologi maritim, AI, peta, drone, data center, dan integrasi operasional.',
        'primaryButton' => 'Lihat Ekosistem',
        'secondaryButton' => 'Peta Maritim',
    ];

    $services = [
        ['title' => 'Maritime Control Center', 'desc' => 'Pusat kendali informasi maritim, pelabuhan, rute, armada, dan operasi lapangan.'],
        ['title' => 'AI & Data Intelligence', 'desc' => 'Analitik data, pemetaan risiko, dashboard keputusan, dan sinkronisasi lintas sistem.'],
        ['title' => 'Drone & Field Operation', 'desc' => 'Dukungan drone, survey visual, pemantauan kawasan, dan bukti runtime lapangan.'],
        ['title' => 'Ghalbit Digital Ecosystem', 'desc' => 'Integrasi web, panel, aplikasi, data center, dan aset teknologi yang saling terhubung.'],
    ];

    $checks = [
        'Brand utama sudah dikoreksi menjadi GHALBIT MARITRONIX.',
        'Konten homepage diarahkan ke maritim, AI, drone, dan sistem kendali.',
        'Tombol CTA masih preview dan belum melakukan transaksi.',
        'Service card masih statis dan aman.',
        'Belum ada koneksi Firebase/database pada halaman ini.',
        'Belum ada publish action.',
    ];
@endphp

<div class="wp-page-header">
    <div>
        <p class="wp-eyebrow">AI-4 isolated workspace</p>
        <h1>Homepage</h1>
        <p class="wp-muted">
            Area ini untuk menyusun tampilan awal website publik Ghalbit Maritronix secara terkendali sebelum disambungkan ke konten resmi.
        </p>
    </div>
    <div class="wp-status-pill safe">SAFE MODE</div>
</div>

<div class="wp-home-layout">
    <section class="wp-card wp-home-editor">
        <div class="wp-card-head">
            <div>
                <h2>Ghalbit Maritronix Homepage Draft</h2>
                <p class="wp-muted">Struktur konten awal untuk hero banner, headline, deskripsi, dan tombol utama.</p>
            </div>
            <span class="wp-badge draft">DRAFT ONLY</span>
        </div>

        <div class="wp-form-preview">
            <label>
                <span>Brand Badge</span>
                <input type="text" value="{{ $hero['badge'] }}" readonly>
            </label>

            <label>
                <span>Judul Utama</span>
                <textarea rows="3" readonly>{{ $hero['title'] }}</textarea>
            </label>

            <label>
                <span>Deskripsi</span>
                <textarea rows="4" readonly>{{ $hero['subtitle'] }}</textarea>
            </label>

            <div class="wp-form-grid">
                <label>
                    <span>Tombol Utama</span>
                    <input type="text" value="{{ $hero['primaryButton'] }}" readonly>
                </label>

                <label>
                    <span>Tombol Kedua</span>
                    <input type="text" value="{{ $hero['secondaryButton'] }}" readonly>
                </label>
            </div>
        </div>

        <div class="wp-warning-soft">
            Status: preview-safe. Belum ada fitur simpan/publish agar tidak membuat cabang data liar.
        </div>
    </section>

    <section class="wp-home-live">
        <div class="wp-public-preview">
            <div class="wp-public-hero">
                <span>{{ $hero['badge'] }}</span>
                <h2>{{ $hero['title'] }}</h2>
                <p>{{ $hero['subtitle'] }}</p>

                <div class="wp-public-actions">
                    <a href="javascript:void(0)">{{ $hero['primaryButton'] }}</a>
                    <a href="javascript:void(0)" class="light">{{ $hero['secondaryButton'] }}</a>
                </div>
            </div>

            <div class="wp-public-services">
                @foreach ($services as $service)
                    <article>
                        <strong>{{ $service['title'] }}</strong>
                        <p>{{ $service['desc'] }}</p>
                    </article>
                @endforeach
            </div>
        </div>
    </section>
</div>


{{-- AI4-0025_GHALBIT_HOMEPAGE_FUNCTION_MAP --}}
<div class="wp-section-title wp-function-map-section">
    <h2>Peta Fungsi Homepage GHALBIT MARITRONIX</h2>
    <p>Homepage ini bukan halaman transaksi. Ini adalah ruang kendali visual untuk membangun wajah publik, narasi teknologi, dan arah ekosistem maritim.</p>
</div>

<div class="wp-function-map-grid">
    <article class="wp-function-card">
        <span>01</span>
        <h3>Identitas Publik</h3>
        <p>Mengunci nama, posisi, dan pesan utama GHALBIT MARITRONIX sebagai sistem maritim cerdas.</p>
    </article>

    <article class="wp-function-card">
        <span>02</span>
        <h3>Maritime Capability</h3>
        <p>Menjelaskan kemampuan inti: control center, pemetaan, pelabuhan, rute, zona, dan operasi lapangan.</p>
    </article>

    <article class="wp-function-card">
        <span>03</span>
        <h3>AI & Data Narrative</h3>
        <p>Membangun narasi AI, data center, dashboard keputusan, dan integrasi sistem lintas aplikasi.</p>
    </article>

    <article class="wp-function-card">
        <span>04</span>
        <h3>Drone Operation</h3>
        <p>Menyiapkan ruang komunikasi untuk survey visual, bukti lapangan, monitoring kawasan, operasi drone, serta suplai logistik cepat ke kapal, pelabuhan, pulau kecil, anchorage area, dan titik operasi maritim.</p>
    </article>

    <article class="wp-function-card">
        <span>05</span>
        <h3>Investor Story</h3>
        <p>Menjadi dasar landing page untuk mitra strategis, pemerintah, pelabuhan, energi, dan calon investor.</p>
    </article>

    <article class="wp-function-card">
        <span>06</span>
        <h3>Publish Roadmap</h3>
        <p>Menjadi tahap aman sebelum konten disambungkan ke CMS, Firebase, atau sistem publish resmi.</p>
    </article>
</div>
@include('website_panel.partials.opi_business_services')

@include('website_panel.partials.nusantara_global_model')

<div class="wp-grid-2">
    <div class="wp-card">
        <h3>Checklist Ghalbit Maritronix</h3>
        <ul class="wp-check-list">
            @foreach ($checks as $check)
                <li>{{ $check }}</li>
            @endforeach
        </ul>
    </div>

    <div class="wp-card">
        <h3>Jalur Aman Berikutnya</h3>
        <p class="wp-muted">
            Setelah brand terkunci, langkah berikutnya adalah memetakan konten nyata:
            profil Ghalbit Maritronix, arsitektur sistem, peta maritim, drone operation, dan landing page investor.
        </p>

        <div class="wp-action-row">
            <a class="wp-button" href="{{ url('/website-panel/preview') }}">Buka Preview</a>
            <a class="wp-button secondary" href="{{ url('/website-panel/legacy-map') }}">Legacy Map</a>
        </div>
    </div>
</div>
@endsection





