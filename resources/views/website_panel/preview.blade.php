@extends('layouts.website_panel')

@section('title', 'Preview Website')

@section('content')
@php
    /*
     * AI4-0026_GHALBIT_INTEGRATED_PUBLIC_PREVIEW
     * SAFE PREVIEW ONLY
     * Tidak submit.
     * Tidak publish.
     * Tidak membaca/menulis Firebase/database.
     */

    $capabilities = [
        [
            'title' => 'Maritime Control Center',
            'text' => 'Pusat kendali untuk peta maritim, pelabuhan, rute, zona operasi, armada, dan koordinasi lapangan.'
        ],
        [
            'title' => 'AI Data Intelligence',
            'text' => 'Analitik data, risk map, dashboard keputusan, serta integrasi data lintas aplikasi dan panel.'
        ],
        [
            'title' => 'Drone & Field Operation',
            'text' => 'Survey visual, monitoring kawasan, bukti lapangan, inspeksi cepat, dukungan operasi drone, dan pengiriman logistik ringan/urgent untuk kebutuhan kapal serta pelabuhan.'
        ],
        [
            'title' => 'Digital Ecosystem Integration',
            'text' => 'Menghubungkan web, panel, aplikasi, data center, operation room, dan laporan strategis dalam satu ekosistem.'
        ],
    ];

    $roadmap = [
        'Brand dan homepage GHALBIT MARITRONIX dikunci.',
        'CMS publik disiapkan untuk profil, teknologi, operasi maritim, investor, dan compliance.',
        'Preview landing page digabungkan sebelum publish.',
        'Tahap berikutnya: hubungkan konten resmi secara aman, bukan cabang data liar.',
    ];

    $investorPoints = [
        'Nilai strategis Selat Malaka dan Nusantara sebagai poros maritim.',
        'Kebutuhan teknologi kendali, peta, drone, dan data maritim.',
        'Potensi kerja sama pemerintah daerah, pelabuhan, energi, dan investor.',
        'Aset digital: panel, dashboard, mapping, AI workflow, dan operation evidence.',
    ];
@endphp

<div class="wp-page-header">
    <div>
        <p class="wp-eyebrow">AI-4 isolated workspace</p>
        <h1>Preview Website</h1>
        <p class="wp-muted">
            Tampilan gabungan landing page publik GHALBIT MARITRONIX dalam mode aman sebelum publish.
        </p>
    </div>
    <div class="wp-status-pill safe">SAFE MODE</div>
</div>

<section class="gm-preview-hero">
    <div class="gm-preview-hero-content">
        <span>GHALBIT MARITRONIX</span>
        <h2>Maritime intelligence, drone operation, AI control center, and digital ecosystem integration.</h2>
        <p>
            GHALBIT MARITRONIX disiapkan sebagai wajah teknologi maritim masa depan:
            menggabungkan peta, data center, drone, sistem kendali, dan narasi investasi strategis.
        </p>

        <div class="gm-preview-actions">
            <a href="javascript:void(0)">Explore Ecosystem</a>
            <a href="javascript:void(0)" class="outline">Maritime Map</a>
        </div>
    </div>

    <div class="gm-preview-panel">
        <div>
            <strong>Control Layer</strong>
            <span>Admin Web / Website Panel</span>
        </div>
        <div>
            <strong>Data Layer</strong>
            <span>Firebase / Data Center / Evidence</span>
        </div>
        <div>
            <strong>Field Layer</strong>
            <span>Drone / Vessel / Port / Operation</span>
        </div>
        <div>
            <strong>Investor Layer</strong>
            <span>Strategic Value / Revenue / Partnership</span>
        </div>
    </div>
</section>

<div class="wp-section-title">
    <h2>Core Capabilities</h2>
    <p>Kemampuan utama yang akan ditampilkan kepada publik, mitra strategis, dan calon investor.</p>
</div>

<section class="gm-capability-grid">
    @foreach ($capabilities as $capability)
        <article>
            <h3>{{ $capability['title'] }}</h3>
            <p>{{ $capability['text'] }}</p>
        </article>
    @endforeach
</section>

<section class="gm-preview-split">
    <div class="wp-card">
        <h3>Investor Story</h3>
        <p class="wp-muted">
            Narasi investor menjelaskan mengapa sistem ini bernilai sebagai aset teknologi,
            aset data, dan infrastruktur kendali maritim.
        </p>

        <ul class="wp-check-list">
            @foreach ($investorPoints as $point)
                <li>{{ $point }}</li>
            @endforeach
        </ul>
    </div>

    <div class="wp-card">
        <h3>Publish Roadmap</h3>
        <p class="wp-muted">
            Roadmap ini menjaga agar website tidak langsung publish tanpa kontrak data dan konten yang jelas.
        </p>

        <ol class="gm-roadmap-list">
            @foreach ($roadmap as $item)
                <li>{{ $item }}</li>
            @endforeach
        </ol>
    </div>
</section>


{{-- AI4-0029_GHALBIT_REVENUE_AND_PARTNERSHIP_SECTION --}}
<section class="gm-revenue-section">
    <div class="gm-revenue-head">
        <span>BUSINESS MODEL</span>
        <h2>Revenue Model & Strategic Partnership</h2>
        <p>
            Section ini menyiapkan bahasa bisnis untuk menjelaskan bagaimana GHALBIT MARITRONIX
            dapat berkembang dari aset teknologi menjadi ekosistem pendapatan maritim.
        </p>
    </div>

    <div class="gm-revenue-grid">
        <article>
            <strong>01</strong>
            <h3>Maritime Operation Service</h3>
            <p>Layanan pemetaan, monitoring kawasan, dukungan operasi pelabuhan, survey maritim, dan laporan lapangan.</p>
        </article>

        <article>
            <strong>02</strong>
            <h3>Drone Survey & Evidence</h3>
            <p>Paket operasi drone untuk visual proof, pemantauan aset, inspeksi cepat, dokumentasi proyek, dan audit lapangan.</p>
        </article>

        <article>
            <strong>03</strong>
            <h3>AI Dashboard Subscription</h3>
            <p>Dashboard berbasis langganan untuk peta, data, status operasi, analitik, laporan, dan indikator risiko.</p>
        </article>

        <article>
            <strong>04</strong>
            <h3>Strategic Data Product</h3>
            <p>Produk data dan laporan strategis untuk pemerintah, pelabuhan, logistik, energi, keamanan, dan investor.</p>
        </article>
    </div>

    <div class="gm-partner-path">
        <div>
            <h3>Target Partner</h3>
            <div class="gm-partner-tags">
                <span>Pemerintah Daerah</span>
                <span>Pelabuhan</span>
                <span>Energi</span>
                <span>Logistik</span>
                <span>Keamanan Maritim</span>
                <span>Investor Strategis</span>
            </div>
        </div>

        <div>
            <h3>Partnership Path</h3>
            <ol>
                <li>Demo visual Website Panel dan landing preview.</li>
                <li>Tunjukkan peta sistem, data layer, dan drone operation path.</li>
                <li>Susun paket pilot project kecil dengan bukti lapangan.</li>
                <li>Naikkan menjadi kontrak kerja sama, dashboard, dan pusat kendali operasional.</li>
            </ol>
        </div>
    </div>

    <div class="gm-revenue-note">
        <strong>Catatan aman:</strong>
        Angka pendapatan belum dikunci di section ini. Estimasi finansial akan dibuat pada service khusus agar tidak bercampur dengan desain visual.
    </div>
</section>
@include('website_panel.partials.opi_business_services')

@include('website_panel.partials.nusantara_global_model')

<section class="gm-preview-footer">
    <div>
        <h2>Ghalbit Maritronix</h2>
        <p>Nusantara - Selat Malaka - Indonesia</p>
    </div>
    <div>
        <span>Maritime Control Center</span>
        <span>AI Data Intelligence</span>
        <span>Drone Operation</span>
        <span>Investor Dashboard</span>
    </div>
</section>


{{-- AI4-0028_GHALBIT_INVESTOR_READINESS_SECTION --}}
<section class="gm-investor-section">
    <div class="gm-investor-head">
        <span>INVESTOR READINESS</span>
        <h2>Ghalbit Maritronix sebagai aset teknologi maritim</h2>
        <p>
            Section ini menyusun narasi nilai proyek: bukan hanya website, tetapi fondasi sistem kendali maritim,
            data intelligence, drone operation, dan ekosistem digital yang dapat dikembangkan menjadi aset investasi.
        </p>
    </div>

    <div class="gm-investor-grid">
        <article>
            <strong>01</strong>
            <h3>Strategic Maritime Position</h3>
            <p>Menempatkan Nusantara dan Selat Malaka sebagai ruang strategis untuk pemetaan, monitoring, dan koordinasi maritim.</p>
        </article>

        <article>
            <strong>02</strong>
            <h3>Technology Asset Layer</h3>
            <p>Web panel, dashboard, peta, data center, workflow AI, dan evidence system menjadi aset digital yang dapat dinilai.</p>
        </article>

        <article>
            <strong>03</strong>
            <h3>Operational Proof Path</h3>
            <p>Drone, field survey, vessel/port observation, drone logistics delivery, dan laporan runtime menjadi bukti operasional sekaligus layanan bisnis sebelum ekspansi besar.</p>
        </article>

        <article>
            <strong>04</strong>
            <h3>Partnership Channels</h3>
            <p>Ruang kerja sama dapat diarahkan ke pemerintah daerah, pelabuhan, energi, logistik, keamanan, dan investor strategis.</p>
        </article>
    </div>

    <div class="gm-investor-matrix">
        <div>
            <h3>Investment Narrative</h3>
            <ul>
                <li>Masalah: data maritim, operasi, dan bukti lapangan masih terpecah.</li>
                <li>Solusi: satu ekosistem kendali visual berbasis web, AI, peta, dan drone.</li>
                <li>Nilai: efisiensi koordinasi, transparansi operasi, dan aset data jangka panjang.</li>
                <li>Skalabilitas: dapat diperluas dari preview website ke dashboard operasional penuh.</li>
            </ul>
        </div>

        <div>
            <h3>Road to Investor Deck</h3>
            <ol>
                <li>Kunci brand dan narasi GHALBIT MARITRONIX.</li>
                <li>Lengkapi homepage, CMS, footer, dan preview visual.</li>
                <li>Siapkan halaman khusus investor dan partnership.</li>
                <li>Susun data pendukung: peta, armada, drone, biaya, dan revenue model.</li>
            </ol>
        </div>
    </div>
</section>
<div class="wp-card">
    <h3>Status Preview</h3>
    <p class="wp-muted">
        Preview ini hanya tampilan visual. Tidak ada submit, tidak ada publish, tidak ada Firebase write,
        dan tidak menyentuh Admin core, vendor, order, payment, tax, driver, wallet, payout, cron, atau Flutter.
    </p>

    <div class="wp-action-row">
        <a class="wp-button" href="{{ url('/website-panel/homepage') }}">Homepage Draft</a>
        <a class="wp-button secondary" href="{{ url('/website-panel/cms') }}">CMS Draft</a>
        <a class="wp-button secondary" href="{{ url('/website-panel/footer') }}">Footer Draft</a>
    </div>
</div>
@endsection







