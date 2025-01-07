<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    public function index(Request $request)
    {
        $a = Subject::with(['user'])->get();

        // Return the paginated response
        return response()->json([
            'response' => $a,
        ], 200);

    }
    public function show(Request $request,$id)
    {
        $subjects = Subject::where([['instructor_id','=',$id],['academic_year','=',$request->academic_year],['semester','=',$request->semester]])->with(['user','student_grade'])->get();
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
