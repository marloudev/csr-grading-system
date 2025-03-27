<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Subject extends Model
{
    use HasFactory;
    protected $fillable = [
        'instructor_id',
        'section_id',
        'course_id',
        'academic_year',
        'name',
        'code',
        'credits',
        'semester',
        'year',
    ];

    public function subject_handled(): HasMany
    {
        return $this->hasMany(SubjectHandled::class,'subject_code','code')->with(['user']);
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class,'user_id','instructor_id')->with(['subjects']);
    }
    public function course(): HasOne
    {
        return $this->hasOne(Course::class,'id','course_id');
    }
    public function student_grade(): HasMany
    {
        return $this->hasMany(Grade::class,'subject_code','code')->with(['class_participation','examination','quiz','project','user']);
    }
}
