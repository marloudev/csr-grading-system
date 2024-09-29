<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subject extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'code',
        'credits',
        'semester',
    ];

    public function subject_handled(): HasMany
    {
        return $this->hasMany(SubjectHandled::class,'subject_code','code')->with(['user']);
    }
}
