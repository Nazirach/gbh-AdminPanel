<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebsitePanelController extends Controller
{
    // AI4_WEB_APP_PATCH
    public function index()
    {
        return view('website_panel.index');
    }

    // AI4_WEB_APP_PATCH
    public function homepage()
    {
        return view('website_panel.homepage');
    }

    // AI4_WEB_APP_PATCH
    public function footer()
    {
        return view('website_panel.footer');
    }

    // AI4_WEB_APP_PATCH
    public function cms()
    {
        return view('website_panel.cms');
    }

    // AI4_WEB_APP_PATCH
    public function preview()
    {
        $legacyPreviewFiles = [
            [
                'label' => 'Homepage Template Lama',
                'path' => 'resources/views/homepage_Template/index.blade.php',
                'type' => 'homepage',
            ],
            [
                'label' => 'Footer Template Lama',
                'path' => 'resources/views/footerTemplate/index.blade.php',
                'type' => 'footer',
            ],
            [
                'label' => 'CMS Index Lama',
                'path' => 'resources/views/cms/index.blade.php',
                'type' => 'cms',
            ],
            [
                'label' => 'CMS Create Lama',
                'path' => 'resources/views/cms/create.blade.php',
                'type' => 'cms',
            ],
            [
                'label' => 'CMS Edit Lama',
                'path' => 'resources/views/cms/edit.blade.php',
                'type' => 'cms',
            ],
        ];

        $sources = [];

        foreach ($legacyPreviewFiles as $item) {
            $absolutePath = base_path(str_replace('/', DIRECTORY_SEPARATOR, $item['path']));
            $exists = is_file($absolutePath);
            $content = $exists ? file_get_contents($absolutePath) : '';

            $sources[] = [
                'label' => $item['label'],
                'path' => $item['path'],
                'type' => $item['type'],
                'exists' => $exists,
                'size' => $exists ? filesize($absolutePath) : null,
                'modified' => $exists ? date('Y-m-d H:i:s', filemtime($absolutePath)) : null,
                'lines' => $exists ? substr_count($content, PHP_EOL) + 1 : 0,
                'content' => $content,
            ];
        }

        return view('website_panel.preview', [
            'sources' => $sources,
        ]);
    }

    // AI4_WEB_APP_PATCH
    public function legacyMap()
    {
        $targets = [
            'Homepage Template Lama' => 'resources/views/homepage_Template',
            'Footer Template Lama' => 'resources/views/footerTemplate',
            'CMS Lama' => 'resources/views/cms',
            'Dashboard Lama' => 'resources/views/dashboard',
            'Layouts Lama' => 'resources/views/layouts',
            'Website Panel AI-4' => 'resources/views/website_panel',
        ];

        $folders = [];

        foreach ($targets as $label => $relativePath) {
            $absolutePath = base_path(str_replace('/', DIRECTORY_SEPARATOR, $relativePath));
            $items = [];

            if (is_dir($absolutePath)) {
                foreach (\Illuminate\Support\Facades\File::allFiles($absolutePath) as $file) {
                    $items[] = [
                        'name' => $file->getFilename(),
                        'relative' => str_replace(base_path() . DIRECTORY_SEPARATOR, '', $file->getPathname()),
                        'size' => $file->getSize(),
                        'modified' => date('Y-m-d H:i:s', $file->getMTime()),
                    ];
                }
            }

            $folders[] = [
                'label' => $label,
                'relativePath' => $relativePath,
                'exists' => is_dir($absolutePath),
                'count' => count($items),
                'items' => $items,
            ];
        }

        $controllers = [
            ['label' => 'HomeController', 'path' => 'app/Http/Controllers/HomeController.php'],
            ['label' => 'SettingsController', 'path' => 'app/Http/Controllers/SettingsController.php'],
            ['label' => 'CmsController', 'path' => 'app/Http/Controllers/CmsController.php'],
            ['label' => 'WebsitePanelController', 'path' => 'app/Http/Controllers/WebsitePanelController.php'],
        ];

        foreach ($controllers as &$controller) {
            $absolutePath = base_path(str_replace('/', DIRECTORY_SEPARATOR, $controller['path']));
            $controller['exists'] = is_file($absolutePath);
            $controller['size'] = is_file($absolutePath) ? filesize($absolutePath) : null;
            $controller['modified'] = is_file($absolutePath) ? date('Y-m-d H:i:s', filemtime($absolutePath)) : null;
        }
        unset($controller);

        $routeMatches = [];
        $routeFile = base_path('routes/web.php');
        $keywords = [
            'homepageTemplate',
            'footerTemplate',
            'cms',
            'HomeController',
            'SettingsController',
            'CmsController',
            'website-panel',
            'AI4_WEBSITE_PANEL_ROUTE',
        ];

        if (is_file($routeFile)) {
            $lines = file($routeFile, FILE_IGNORE_NEW_LINES);
            foreach ($lines as $index => $line) {
                foreach ($keywords as $keyword) {
                    if (stripos($line, $keyword) !== false) {
                        $routeMatches[] = [
                            'line' => $index + 1,
                            'content' => trim($line),
                        ];
                        break;
                    }
                }
            }
        }

        return view('website_panel.legacy_map', [
            'folders' => $folders,
            'controllers' => $controllers,
            'routeMatches' => $routeMatches,
        ]);
    }
}
