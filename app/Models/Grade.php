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
        'instructor_id',
        'student_id',
        'section_id',
        'subject_code',
        'semester',
        'remarks',
        'total',
        'final',
        'academic_year',
        'grading_period',
        'year'
    ];

    public function enrollment(): HasOne
    {
        return $this->hasOne(Enrollment::class,'id','course_id');
    }
    //
    public function project(): HasMany
    {
        return $this->hasMany(Project::class);
    }
    public function quiz(): HasMany
    {
        return $this->hasMany(Quiz::class);
    }
    public function examination(): HasMany
    {
        return $this->hasMany(Examination::class);
    }
    public function class_participation(): HasMany
    {
        return $this->hasMany(ClassParticipation::class);
    }
//

    public function user(): HasOne
    {
        return $this->hasOne(User::class,'user_id','student_id')->with('department');
    }
    public function course(): HasOne
    {
        return $this->hasOne(Course::class,'id','course_id');
    }
    public function grade(): HasOne
    {
        return $this->hasOne(Grade::class,'enrollment_id','id')->with(['class_participation','examination','quiz','project']);
    }
    public function section(): HasOne
    {
        return $this->hasOne(Section::class,'id','section_id');
    }
}
