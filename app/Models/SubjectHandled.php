<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class SubjectHandled extends Model
{
    use HasFactory;
    protected $fillable = [
       'instructor_id',
       'subject_code',
    ];
    public function user(): HasOne
    {
        return $this->hasOne(User::class,'id','instructor_id');
    }
    public function grades(): HasMany
    {
        return $this->hasMany(Grade::class,'instructor_id','instructor_id');
    }
}
