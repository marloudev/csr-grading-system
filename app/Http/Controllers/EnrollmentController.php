<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    public function index(Request $request)
    {
        $a = Enrollment::get();
        return response()->json([
            'response' => $a,
        ], 200);
    }
    public function show($id)
    {
        Enrollment::where('id', $id)->get();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function store(Request $request)
    {
        Enrollment::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
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
