<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Models\User;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    public function index(Request $request)
    {
        $course_id = $request->input('course_id');
        $semester = $request->input('semester');
        $academic_year = $request->input('academic_year');

        $subjects = Subject::when($course_id, function ($query, $course_id) {
            return $query->where('course_id', $course_id);
        })
            ->when($semester, function ($query, $semester) {
                return $query->where('semester', $semester);
            })
            ->when($academic_year, function ($query, $academic_year) {
                return $query->where('academic_year', $academic_year);
            })
            ->with('course')
            ->get();

        return response()->json([
            'response' => $subjects,
        ], 200);
    }

    public function get_subjects(Request $request)
    {
        $user = User::where('user_id', $request->student_id)->first();
        $subjects = Subject::where([
            ['academic_year', '=', $request->academic_year],
            ['semester', '=', $request->semester],
            ['year', '=', $request->year],
            ['course_id', '=',  $user->course_id],
        ])->get();
        return response()->json([
            'response' => $subjects,
        ], 200);
    }
    public function show(Request $request, $id)
    {
        $subjects = Subject::where([['instructor_id', '=', $id], ['academic_year', '=', $request->academic_year], ['semester', '=', $request->semester]])->with(['user', 'student_grade'])->get();
        return response()->json([
            'response' => $subjects,
        ], 200);
    }
    public function store(Request $request)
    {
        Subject::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $a = Subject::where('id', $id);
        $a->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function destroy($id)
    {
        Subject::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
