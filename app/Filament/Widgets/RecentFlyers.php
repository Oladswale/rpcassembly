<?php

namespace App\Filament\Widgets;

use App\Models\Flyer;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class RecentFlyers extends BaseWidget
{
    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(Flyer::query()->latest()->limit(5))
            ->columns([
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\ImageColumn::make('file_path')->label('Flyer'),
                Tables\Columns\TextColumn::make('created_at')->since(),
            ]);
    }
}