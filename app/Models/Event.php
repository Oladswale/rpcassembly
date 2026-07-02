<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = ['title', 'date', 'time', 'location', 'description', 'flyer_path'];

    protected $casts = ['date' => 'date'];
}
