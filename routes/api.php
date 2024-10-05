<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\ClassParticipationController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\ExaminationController;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\SubjectHandledController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('/user', function (Request $request) {
//     return $request->user();
// });


Route::resource('class_participation', ClassParticipationController::class);
Route::resource('course', CourseController::class);

Route::resource('account', AccountController::class);
Route::post('search_students', [EnrollmentController::class, 'search_students']);
Route::resource('enrollments', EnrollmentController::class);

Route::resource('dashboard', DashboardController::class);
Route::resource('department', DepartmentController::class);
Route::resource('examination', ExaminationController::class);
Route::resource('grade', GradeController::class);
Route::resource('project', ProjectController::class);
Route::resource('quiz', QuizController::class);

Route::resource('subject', SubjectController::class);
Route::post('get_instructor_subject', [SubjectController::class, 'get_instructor_subject']);

Route::resource('subject_handled', SubjectHandledController::class);

Route::resource('sections', SectionController::class);
