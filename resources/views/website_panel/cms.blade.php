@extends('layouts.website_panel')

@section('title', 'CMS')

@section('content')
@php
    /*
     * AI4-0025_GHALBIT_MARITRONIX_CMS_REFINEMENT
     * SAFE PREVIEW ONLY
     * Tidak submit.
     * Tidak publish.
     * Tidak membaca/menulis Firebase/database.
     */

    $pages = [
        [
            'title' => 'Profil Ghalbit Maritronix',
            'slug' => 'profil-ghalbit-maritronix',
            'status' => 'Draft',
            'summary' => 'Halaman pengenalan perusahaan, visi, misi, arah teknologi, dan posisi Ghalbit Maritronix dalam ekosistem maritim digital.',
            'sections' => ['Visi Maritim', 'Misi Teknologi', 'Kekuatan Sistem', 'Arah Pengembangan'],
        ],
        [
            'title' => 'Maritime Control Center',
            'slug' => 'maritime-control-center',
            'status' => 'Draft',
            'summary' => 'Halaman yang menjelaskan pusat kendali maritim: peta, data armada, pelabuhan, rute, zona, monitoring, dan koordinasi lapangan.',
            'sections' => ['Peta Maritim', 'Pelabuhan', 'Rute Kapal', 'Zona Operasi'],
        ],
        [
            'title' => 'Drone & Field Operation',
            'slug' => 'drone-field-operation',
            'status' => 'Draft',
            'summary' => 'Halaman untuk menjelaskan operasi drone, survey visual, pemantauan kawasan, bukti lapangan, dan integrasi data ke panel.',
            'sections' => ['Drone Survey', 'Visual Evidence', 'Field Team', 'Runtime Proof'],
        ],
        [
            'title' => 'AI Data Intelligence',
            'slug' => 'ai-data-intelligence',
            'status' => 'Draft',
            'summary' => 'Halaman teknologi AI, analitik data, dashboard keputusan, deteksi risiko, dan sinkronisasi lintas sistem.',
            'sections' => ['AI Engine', 'Data Center', 'Risk Map', 'Decision Dashboard'],
        ],
        [
            'title' => 'Investor & Strategic Partnership',
            'slug' => 'investor-strategic-partnership',
            'status' => 'Draft',
            'summary' => 'Halaman untuk calon investor, mitra strategis, pemerintah daerah, perusahaan energi, pelabuhan, dan ekosistem pembiayaan.',
            'sections' => ['Investment Case', 'Strategic Value', 'Revenue Model', 'Partnership Path'],
        ],
        [
            'title' => 'Legal, Safety & Compliance',
            'slug' => 'legal-safety-compliance',
            'status' => 'Draft',
            'summary' => 'Halaman legal, keselamatan operasi, kepatuhan, izin, standar data, dan prinsip kerja aman.',
            'sections' => ['Legal Basis', 'Safety Protocol', 'Data Policy', 'Compliance Map'],
        ],
    ];

    $activePage = $pages[0];

    $checks = [
        'CMS sudah diarahkan ke GHALBIT MARITRONIX.',
        'Konten CMS berfokus pada maritim, AI, drone, investor, dan compliance.',
        'Semua halaman masih draft preview.',
        'Belum ada simpan/publish.',
        'Belum membaca atau menulis Firebase/database.',
        'Belum mengubah CMS lama di luar Website Panel.',
    ];
@endphp

<div class="wp-page-header">
    <div>
        <p class="wp-eyebrow">AI-4 isolated workspace</p>
        <h1>CMS</h1>
        <p class="wp-muted">
            Area ini untuk menyusun struktur halaman publik Ghalbit Maritronix secara aman sebelum konten resmi dipublish.
        </p>
    </div>
    <div class="wp-status-pill safe">SAFE MODE</div>
</div>

<div class="wp-cms-layout">
    <section class="wp-card">
        <div class="wp-card-head">
            <div>
                <h2>CMS Page Drafts</h2>
                <p class="wp-muted">Daftar halaman publik yang dibutuhkan untuk identitas Ghalbit Maritronix.</p>
            </div>
            <span class="wp-badge draft">DRAFT ONLY</span>
        </div>

        <div class="wp-cms-list">
            @foreach ($pages as $page)
                <article class="wp-cms-item">
                    <div>
                        <h3>{{ $page['title'] }}</h3>
                        <p>{{ $page['summary'] }}</p>
                        <code>/{{ $page['slug'] }}</code>
                    </div>
                    <span>{{ $page['status'] }}</span>
                </article>
            @endforeach
        </div>
    </section>

    <section class="wp-cms-live">
        <div class="wp-cms-preview">
            <div class="wp-cms-preview-hero">
                <span>CMS PREVIEW</span>
                <h2>{{ $activePage['title'] }}</h2>
                <p>{{ $activePage['summary'] }}</p>
            </div>

            <div class="wp-cms-section-map">
                @foreach ($activePage['sections'] as $section)
                    <div>
                        <strong>{{ $section }}</strong>
                        <p>Konten resmi akan ditulis setelah struktur CMS disetujui.</p>
                    </div>
                @endforeach
            </div>

            <div class="wp-cms-preview-note">
                Preview ini hanya struktur visual. Tidak ada publish, tidak ada database write.
            </div>
        </div>
    </section>
</div>

<div class="wp-grid-2">
    <div class="wp-card">
        <h3>Checklist CMS</h3>
        <ul class="wp-check-list">
            @foreach ($checks as $check)
                <li>{{ $check }}</li>
            @endforeach
        </ul>
    </div>

    <div class="wp-card">
        <h3>Jalur Aman Berikutnya</h3>
        <p class="wp-muted">
            Setelah CMS rapi, langkah berikutnya adalah membuat halaman Preview gabungan:
            Homepage, Footer, dan CMS dalam satu tampilan landing page Ghalbit Maritronix.
        </p>

        <div class="wp-action-row">
            <a class="wp-button" href="{{ url('/website-panel/homepage') }}">Homepage</a>
            <a class="wp-button secondary" href="{{ url('/website-panel/footer') }}">Footer</a>
            <a class="wp-button secondary" href="{{ url('/website-panel/preview') }}">Preview</a>
        </div>
    </div>
</div>
@endsection
