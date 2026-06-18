<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'About')->name('history');
Route::inertia('/contact', 'Contact')->name('contact');
Route::inertia('/ministries', 'Ministries')->name('ministries');
Route::inertia('/sermons', 'Sermons')->name('sermons');
Route::inertia('/events', 'Events')->name('events');

