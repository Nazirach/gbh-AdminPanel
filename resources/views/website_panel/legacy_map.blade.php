@extends('layouts.website_panel')

@section('title', 'Legacy Map - Website Panel')
@section('page_title', 'Legacy Map Read Only')

@section('content')
<div class="wp-card">
    <h1>Legacy Map Read Only</h1>
    <p>Peta ini membaca struktur homepage lama, footer lama, CMS lama, controller lama, folder view lama, dan route terkait tanpa mengubah data.</p>

    <div class="wp-note">
        Mode: READ ONLY. Tidak ada fitur simpan, publish, delete, atau update.
    </div>
</div>

<div class="wp-card wp-space">
    <h2>Controller Terkait</h2>

    <div class="wp-table-wrap">
        <table class="wp-table">
            <thead>
                <tr>
                    <th>Controller</th>
                    <th>Path</th>
                    <th>Status</th>
                    <th>Ukuran</th>
                    <th>Modified</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($controllers as $controller)
                    <tr>
                        <td>{{ $controller['label'] }}</td>
                        <td><code>{{ $controller['path'] }}</code></td>
                        <td>
                            @if ($controller['exists'])
                                <span class="wp-badge ok">ADA</span>
                            @else
                                <span class="wp-badge warn">TIDAK ADA</span>
                            @endif
                        </td>
                        <td>{{ $controller['size'] ?? '-' }}</td>
                        <td>{{ $controller['modified'] ?? '-' }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>

<div class="wp-card wp-space">
    <h2>Folder View Lama</h2>

    @foreach ($folders as $folder)
        <div class="wp-folder-box">
            <div class="wp-folder-head">
                <div>
                    <h3>{{ $folder['label'] }}</h3>
                    <code>{{ $folder['relativePath'] }}</code>
                </div>

                <div>
                    @if ($folder['exists'])
                        <span class="wp-badge ok">ADA</span>
                    @else
                        <span class="wp-badge warn">TIDAK ADA</span>
                    @endif
                    <span class="wp-badge neutral">{{ $folder['count'] }} file</span>
                </div>
            </div>

            @if ($folder['count'] > 0)
                <div class="wp-table-wrap">
                    <table class="wp-table">
                        <thead>
                            <tr>
                                <th>File</th>
                                <th>Path</th>
                                <th>Ukuran</th>
                                <th>Modified</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($folder['items'] as $item)
                                <tr>
                                    <td>{{ $item['name'] }}</td>
                                    <td><code>{{ $item['relative'] }}</code></td>
                                    <td>{{ $item['size'] }}</td>
                                    <td>{{ $item['modified'] }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            @else
                <p class="wp-muted">Tidak ada file terdeteksi pada folder ini.</p>
            @endif
        </div>
    @endforeach
</div>

<div class="wp-card wp-space">
    <h2>Route Terkait Website</h2>

    <div class="wp-table-wrap">
        <table class="wp-table">
            <thead>
                <tr>
                    <th>Line</th>
                    <th>Isi Route / Referensi</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($routeMatches as $route)
                    <tr>
                        <td>{{ $route['line'] }}</td>
                        <td><code>{{ $route['content'] }}</code></td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="2">Tidak ada route terkait yang ditemukan.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection