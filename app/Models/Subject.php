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
        'academic_year',
        'name',
        'code',
        'credits',
        'semester',
    ];

    public function subject_handled(): HasMany
    {
        return $this->hasMany(SubjectHandled::class,'subject_code','code')->with(['user']);
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class,'user_id','instructor_id');
    }
}
