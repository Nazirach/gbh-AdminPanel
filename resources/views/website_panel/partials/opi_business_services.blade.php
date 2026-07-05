{{-- AI4-0032_OPI_BUSINESS_SERVICE_LAYER_REALIGNMENT --}}
@php
    /*
     * Business Service Layer OPI + GHALBIT MARITRONIX
     * SAFE PREVIEW ONLY
     * Tidak submit.
     * Tidak publish.
     * Tidak membaca/menulis Firebase/database.
     */

    $opiBusinessServices = [
        [
            'no' => '01',
            'title' => 'Ship Agency / Keagenan Kapal',
            'value' => 'Fee koordinasi kapal, dokumen, jadwal, kebutuhan operasional, dan penghubung kapal dengan layanan darat.'
        ],
        [
            'no' => '02',
            'title' => 'Vessel Clearance & Dokumen',
            'value' => 'Nilai bisnis dari kelancaran administrasi, pengurangan risiko keterlambatan, dan kepastian operasi kapal.'
        ],
        [
            'no' => '03',
            'title' => 'STS / Ship-to-Ship Support',
            'value' => 'Layanan bernilai tinggi untuk koordinasi transfer, zona operasi, keselamatan, bukti kegiatan, dan laporan.'
        ],
        [
            'no' => '04',
            'title' => 'Port Coordination',
            'value' => 'Pendapatan dari penghubung kapal dengan pelabuhan, jadwal, otoritas, sandar, dan layanan pendukung.'
        ],
        [
            'no' => '05',
            'title' => 'Tug / Pilot / Mooring Coordination',
            'value' => 'Koordinasi jasa pendukung pergerakan kapal yang dapat menjadi fee operasional per kegiatan.'
        ],
        [
            'no' => '06',
            'title' => 'Bunker Coordination / Marine Fuel',
            'value' => 'Margin dan fee dari koordinasi suplai bahan bakar kapal serta kepercayaan supply chain maritim.'
        ],
        [
            'no' => '07',
            'title' => 'Fresh Water Supply',
            'value' => 'Kebutuhan rutin kapal yang dapat menjadi layanan berulang bagi kapal singgah, menunggu, atau beroperasi.'
        ],
        [
            'no' => '08',
            'title' => 'Food Supply / Ship Chandlery',
            'value' => 'Suplai makanan, bahan dapur, alat kerja, perlengkapan kapal, dan kebutuhan harian awak kapal.'
        ],
        [
            'no' => '09',
            'title' => 'Spare Part & Technical Supply',
            'value' => 'Layanan bernilai tinggi karena kapal membutuhkan komponen cepat, tepat, dan terpercaya.'
        ],
        [
            'no' => '10',
            'title' => 'Crew Change & Crew Handling',
            'value' => 'Layanan awak kapal: transport, dokumen, penginapan, medical, dan koordinasi darat.'
        ],
        [
            'no' => '11',
            'title' => 'Drone Survey, Visual Evidence & Logistics Delivery',
            'value' => 'Jasa inspeksi visual, dokumentasi operasi, bukti kondisi kapal/kawasan, laporan lapangan, serta pengiriman logistik ringan dan urgent seperti dokumen, spare part kecil, medical item, sampel, dan kebutuhan kapal mendadak.'
        ],
        [
            'no' => '12',
            'title' => 'Maritime Monitoring',
            'value' => 'Pemantauan kawasan, kapal, rute, zona operasi, status kegiatan, dan kondisi sekitar.'
        ],
        [
            'no' => '13',
            'title' => 'Risk & Compliance Report',
            'value' => 'Laporan risiko, dokumentasi keselamatan, bukti operasi, compliance, dan bahan keputusan mitra.'
        ],
        [
            'no' => '14',
            'title' => 'Land Transport & Field Runner',
            'value' => 'Menghubungkan kapal dengan daratan: dokumen, barang, teknisi, crew, spare part, dan logistik cepat.'
        ],
        [
            'no' => '15',
            'title' => 'Warehouse / Logistic Support',
            'value' => 'Penyimpanan, konsolidasi barang, pengiriman darat, dan dukungan logistik pelabuhan.'
        ],
        [
            'no' => '16',
            'title' => 'Emergency Maritime Support',
            'value' => 'Layanan darurat: medical, teknisi, supply cepat, kebutuhan kapal mendadak, dan koordinasi lapangan.'
        ],
        [
            'no' => '17',
            'title' => 'Command Center Subscription / Service Dashboard',
            'value' => 'Pendapatan berulang dari dashboard, monitoring, laporan, data, status order, dan kontrol operasi.'
        ],
    ];

    $revenuePillars = [
        [
            'title' => 'Service Fee',
            'text' => 'Pendapatan dari setiap permintaan layanan kapal, pelabuhan, suplai, crew, drone, logistik, dan field operation.'
        ],
        [
            'title' => 'Supply Margin',
            'text' => 'Margin dari bunker, air bersih, makanan, spare part, perlengkapan kapal, dan kebutuhan teknis.'
        ],
        [
            'title' => 'Operation Contract',
            'text' => 'Kontrak bulanan atau project-based untuk monitoring, STS support, port support, drone survey, drone logistics delivery, dan field operation.'
        ],
        [
            'title' => 'Dashboard Subscription',
            'text' => 'Pendapatan berulang dari akses dashboard, laporan, visual evidence, status order, dan data intelligence.'
        ],
    ];
@endphp

<section class="gm-business-layer">
    <div class="gm-business-head">
        <span>OPI BUSINESS SERVICE LAYER</span>
        <h2>17 pelayanan maritim yang dapat menjadi sumber pendapatan nyata</h2>
        <p>
            OPI menjual pelayanan maritim. GHALBIT MARITRONIX mengendalikan, mencatat,
            memetakan, membuktikan, dan memperbesar layanan itu melalui order, vendor, operator,
            drone, dashboard, data, dan laporan.
        </p>
    </div>

    <div class="gm-revenue-pillars">
        @foreach ($revenuePillars as $pillar)
            <article>
                <h3>{{ $pillar['title'] }}</h3>
                <p>{{ $pillar['text'] }}</p>
            </article>
        @endforeach
    </div>

    <div class="gm-business-services-grid">
        @foreach ($opiBusinessServices as $service)
            <article>
                <strong>{{ $service['no'] }}</strong>
                <h3>{{ $service['title'] }}</h3>
                <p>{{ $service['value'] }}</p>
            </article>
        @endforeach
    </div>

    <div class="gm-business-note">
        <strong>Nilai bisnis inti:</strong>
        setiap layanan dapat menjadi service request, ditugaskan kepada mitra/vendor/operator,
        dimonitor melalui peta dan dashboard, dibuktikan dengan drone/data/laporan, lalu
        dikembangkan menjadi kontrak layanan dan pendapatan berulang.
    </div>
</section>



