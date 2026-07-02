<?php

namespace App\Filament\Widgets;

use App\Models\Event;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class RecentFlyers extends BaseWidget
{
    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(Event::query()->orderBy('date')->limit(5))
            ->columns([
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\TextColumn::make('date')->date('M d, Y'),
                Tables\Columns\TextColumn::make('location'),
                Tables\Columns\ImageColumn::make('flyer_path')->disk('public')->label('Flyer'),
            ]);
    }
}
