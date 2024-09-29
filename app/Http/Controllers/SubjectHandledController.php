<?php

namespace App\Http\Controllers;

use App\Models\SubjectHandled;
use Illuminate\Http\Request;

class SubjectHandledController extends Controller
{
    public function index(Request $request)
    {
        $a = SubjectHandled::paginate(10);

        // Return the paginated response
        return response()->json([
            'response' => $a,
        ], 200);

    }
    public function show($code)
    {
       $sh= SubjectHandled::where('subject_code', $code)->with(['user','grades'])->get();
        return response()->json([
            'response' => $sh,
        ], 200);
    }
    public function store(Request $request)
    {
        SubjectHandled::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $a = SubjectHandled::where('id', $id);
        $a->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function destroy($id)
    {
        SubjectHandled::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
