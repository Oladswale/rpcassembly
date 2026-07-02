<?php

namespace App\Filament\Widgets;

use App\Models\Event;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ChurchStats extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Events', Event::count())
                ->description('Total events created')
                ->descriptionIcon('heroicon-m-calendar-days')
                ->color('primary'),

            Stat::make('Upcoming Events', Event::whereDate('date', '>=', now())->count())
                ->description('Events yet to happen')
                ->descriptionIcon('heroicon-m-clock')
                ->color('success'),
        ];
    }
}
