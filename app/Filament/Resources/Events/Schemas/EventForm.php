<?php

namespace App\Filament\Resources\Events\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
use Filament\Schemas\Schema;

class EventForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('title')->required()->maxLength(255),
            DatePicker::make('date')->required()->native(false),
            TimePicker::make('time')->required()->seconds(false),
            TextInput::make('location')->required()->maxLength(255),
            Textarea::make('description')->rows(3)->maxLength(500),
            FileUpload::make('flyer_path')
                ->image()
                ->disk('public')
                ->directory('event-flyers')
                ->label('Flyer'),
        ]);
    }
}
