<?php

use App\Models\Event;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

Route::get('/', function () {
    $events = Event::orderBy('date')->take(3)->get()->map(fn($e) => [
        'id'        => $e->id,
        'title'     => $e->title,
        'date'      => $e->date->format('M d, Y'),
        'time'      => \Carbon\Carbon::parse($e->time)->format('g:i A'),
        'location'  => $e->location,
        'flyer_url' => $e->flyer_path ? Storage::url($e->flyer_path) : null,
    ]);

    return Inertia::render('welcome', ['events' => $events]);
})->name('home');
Route::inertia('/about', 'About')->name('history');
Route::inertia('/contact', 'Contact')->name('contact');
Route::inertia('/ministries', 'Ministries')->name('ministries');
Route::inertia('/sermons', 'Sermons')->name('sermons');
Route::inertia('/first-timer', 'FirstTimer')->name('first-timer');
Route::get('/events', function () {
    $events = \App\Models\Event::orderBy('date')->get()->map(fn($e) => [
        'id'          => $e->id,
        'title'       => $e->title,
        'date'        => $e->date->format('M d, Y'),
        'time'        => \Carbon\Carbon::parse($e->time)->format('g:i A'),
        'location'    => $e->location,
        'description' => $e->description,
        'flyer_url'   => $e->flyer_path ? \Illuminate\Support\Facades\Storage::url($e->flyer_path) : null,
    ]);
    return \Inertia\Inertia::render('Events', ['events' => $events]);
})->name('events');

