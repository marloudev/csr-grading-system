<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    return Inertia::render('login/page');
});

// Route::middleware('auth:sanctum', 'role:1')->prefix('administrator')->group(function () {
Route::prefix('administrator')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard/page');
    });
    Route::prefix('instructor')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/instructor/page');
        });
        Route::prefix('{user_id}')->group(function () {
            Route::get('/', function () {
                return Inertia::render('admin/instructor/id/page1');
            });

            Route::get('/create_grades', function () {
                return Inertia::render('admin/instructor/id/page2');
            });

            Route::get('/students', function () {
                return Inertia::render('admin/instructor/id/page3');
            });
        });
       
    });
    Route::prefix('students')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/students/page');
        });
        Route::get('/{user_id}', function () {
            return Inertia::render('admin/students/id/page');
        });
    });
    Route::get('/department', function () {
        return Inertia::render('admin/department/page');
    });
    Route::get('/courses', function () {
        return Inertia::render('admin/courses/page');
    });
    Route::get('/subjects', function () {
        return Inertia::render('admin/subjects/page');
    });

    Route::get('/grades', function () {
        return Inertia::render('admin/grades/page');
    });
    Route::get('/settings', function () {
        return Inertia::render('admin/settings/page');
    });
});
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
