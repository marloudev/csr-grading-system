<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Examination extends Model
{
    use HasFactory;
    protected $fillable = [
        'grade_id',
        'assessment',
        'score',
        'percent',
        'total',
        'remarks',
        'date',
    ];
}
