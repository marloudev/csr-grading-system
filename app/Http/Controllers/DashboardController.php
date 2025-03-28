<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Department;
use App\Models\Enrollment;
use App\Models\Grade;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index(Request $request)
    {

        if ($request->user_type == 'instructor') {
            $user = Auth::user();
            $instructorCount = Subject::where('instructor_id', $user->user_id)->count();
            $studentCount = Grade::where('instructor_id', $user->user_id)->count();
            return response()->json([
                'subjectCount' => $instructorCount,
                'studentCount' => $studentCount,
            ], 200);
        } else {
            $instructorCount = User::where('user_type', 2)->count();
            $studentCount = User::where('user_type', 3)->count();
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
}
