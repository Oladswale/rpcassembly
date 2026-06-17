<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home')->name('Home');
Route::inertia('/about', 'About')->name('About');
Route::inertia('/contact', 'Contact')->name('Contact');
Route::inertia('/events', 'Events')->name('Events');
Route::inertia('/ministries', 'Ministries')->name('Ministries');
Route::inertia('/sermons', 'Sermons')->name('Sermons');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
