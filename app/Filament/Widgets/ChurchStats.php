<?php

namespace App\Filament\Widgets;

use App\Models\Flyer;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Facades\Storage;

class ChurchStats extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Flyers', Flyer::count())
                ->description('Total flyers uploaded')
                ->descriptionIcon('heroicon-m-document-text')
                ->color('primary'),
            
            Stat::make('Storage Used', $this->getFolderSize('public/flyers'))
                ->description('Actual disk usage of flyers')
                ->descriptionIcon('heroicon-m-server')
                ->color('success'),
        ];
    }

    private function getFolderSize(string $path): string
    {
        $bytes = 0;
        $files = Storage::allFiles($path);
        
        foreach ($files as $file) {
            $bytes += Storage::size($file);
        }

        return $this->formatBytes($bytes);
    }

    private function formatBytes($bytes, $precision = 2): string
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];
        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);
        $bytes /= pow(1024, $pow);

        return round($bytes, $precision) . ' ' . $units[$pow];
    }
}