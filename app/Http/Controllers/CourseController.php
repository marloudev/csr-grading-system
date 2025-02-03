<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index(Request $request)
    {
        $a = Course::with(['subjects'])->paginate(10);
        return response()->json([
            'response' => $a,
        ], 200);
    }
    public function show($id)
    {
        Course::where('id', $id)->get();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function store(Request $request)
    {
        Course::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $a = Course::where('id', $id);
        $a->update([
            'semester' => $request->semester,
            'instructor_id' => $request->instructor_id,
            'academic_year' => $request->academic_year,
            'name' => $request->name,
        ]);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function destroy($id)
    {
        Course::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}

