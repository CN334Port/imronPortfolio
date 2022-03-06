<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Userinformation extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'major',
        'profile',
        'address',
        'phone',
        'email',
        'github',
        'linkedin',
    ];
}
