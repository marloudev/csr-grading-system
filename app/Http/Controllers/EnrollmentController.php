<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    public function search_students(Request $request)
    {
        $enrollments = Enrollment::where([
            ['section_id', '=', $request->section_id],
            ['course_id', '=', $request->course_id],
            ['semester', '=', $request->semester],
            ['academic_year', '=', $request->academic_year],
            ['year', '=', $request->year],
        ])->with(['user', 'course','grade','section'])->get();
        return response()->json([
            'response' => $enrollments,
        ], 200);
    }
    public function index(Request $request)
    {
        $a = Enrollment::with(['user', 'course','section'])->paginate(10);
        return response()->json([
            'response' => $a,
        ], 200);
    }
    public function show($id)
    {
        $enrollments =Enrollment::where('user_id', $id)->with(['user','course','grade','section'])->get();
        return response()->json([
            'response' => $enrollments,
        ], 200);
    }
    public function store(Request $request)
    {
        $enrollment = Enrollment::where([
            ['user_id', '=', $request->user_id],
            ['course_id', '=', $request->course_id],
            ['semester', '=', $request->semester],
            ['academic_year', '=', $request->academic_year],
            ['year', '=', $request->year],
        ])->first();
        if ($enrollment) {
            return response()->json([
                'response' => 'exist',
            ], 202);
        } else {
            Enrollment::create($request->all());
            return response()->json([
                'response' => 'success',
            ], 200);
        }
    }
    public function update(Request $request, $id)
    {
        $a = Enrollment::where('id', $id);
        $a->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function destroy($id)
    {
        Enrollment::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
