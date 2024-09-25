<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;
    protected $fillable = [
        'enrollment_id',
        'course_id',
        'semester',
        'remarks',
        'total',
        'final',
        'grading_period'
    ];
}
