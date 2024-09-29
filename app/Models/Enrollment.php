<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Enrollment extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'course_id',
        'section_id',
        'semester',
        'academic_year',
        'year'
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class,'user_id','user_id')->with('department');
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
