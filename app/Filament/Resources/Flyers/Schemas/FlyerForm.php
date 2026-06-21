<?php

namespace App\Filament\Resources\Flyers\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Schemas\Schema;

class FlyerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Hidden::make('title')
                    ->default('Flyer'),
                FileUpload::make('file_path')
                    ->image()
                    ->directory('flyers')
                    ->required(),
            ]);
    }
}