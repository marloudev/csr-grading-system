<?php

namespace App\Http\Controllers;

use App\Models\ClassParticipation;
use Illuminate\Http\Request;

class ClassParticipationController extends Controller
{
    public function index(Request $request)
    {
        $a = ClassParticipation::get();
        return response()->json([
            'response' => $a,
        ], 200);
    }
    public function show($id)
    {
        ClassParticipation::where('id', $id)->get();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function store(Request $request)
    {
        ClassParticipation::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $a = ClassParticipation::where('id', $id);
        $a->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function destroy($id)
    {
        ClassParticipation::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
