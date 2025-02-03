<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'subject_id',
        'instructor_id',
        'semester',
        'academic_year',
        'section',
    ];

    public function subjects(): HasMany
    {
        return $this->hasMany(Subject::class,'course_id','id');
    }
}
