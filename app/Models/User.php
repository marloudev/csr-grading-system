<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'department_id',
        'course_id',
        'section',
        'fname',
        'lname',
        'name',
        'email',
        'password',
        'dob',
        'address',
        'user_type',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function department(): HasOne
    {
        return $this->hasOne(Department::class, 'id', 'department_id');
    }
    public function grades(): HasMany
    {
        return $this->hasMany(Grade::class, 'student_id', 'user_id')->with(['subject']);
    }
    public function subjects(): HasMany
    {
        return $this->hasMany(Subject::class, 'instructor_id', 'user_id');
    }
    public function course(): HasOne
    {
        return $this->hasOne(Course::class, 'id', 'course_id')->with(['subjects']);
    }
    public function enrollment(): HasOne
    {
        return $this->hasOne(Enrollment::class, 'user_id', 'user_id');
    }
}
