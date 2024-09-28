<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
        'academic_year'
    ];
    public function enrollment(): HasOne
    {
        return $this->hasOne(Enrollment::class,'id','course_id');
    }
    public function project(): HasMany
    {
        return $this->hasMany(Project::class);
    }
    public function quiz(): HasMany
    {
        return $this->hasMany(Quiz::class);
    }
    public function Examination(): HasMany
    {
        return $this->hasMany(Examination::class);
    }
    public function class_participation(): HasMany
    {
        return $this->hasMany(ClassParticipation::class);
    }
}
