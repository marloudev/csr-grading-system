<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Department;
use App\Models\Enrollment;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){

        $instructorCount = User::where('user_type',2)->count();
        $studentCount = User::where('user_type',3)->count();
        $departmentCount = Department::count();
        $courses = Course::get();
        $courseCount = $courses->count();
        $courseEnrollments = []; // Initialize an array to store enrollment data for each course

        foreach ($courses as $course) {
            $enrollmentCounts = Enrollment::where('course_id', $course->id)
                ->selectRaw('semester, academic_year, COUNT(*) as total')
                ->groupBy('semester', 'academic_year')
                ->get();
            $courseEnrollments[] = [
                'course_id' => $course->id,
                'course_name' => $course->name,
                'enrollments' => $enrollmentCounts
            ];
        }
        $enrollmentCounts = Enrollment::selectRaw('semester, academic_year, COUNT(*) as total')
        ->groupBy('semester', 'academic_year')
        ->get();

        $uniqueSemesters = Enrollment::select('semester', 'academic_year')
        ->distinct() 
        ->orderBy('academic_year', 'asc')
        ->get();
        return response()->json([
            'instructorCount' => $instructorCount,
            'studentCount' => $studentCount,
            'departmentCount' => $departmentCount,
            'courseCount' => $courseCount,
            'courseEnrollments' => $courseEnrollments,
            'uniqueSemesters' => $uniqueSemesters,
        ], 200);
    }
}
