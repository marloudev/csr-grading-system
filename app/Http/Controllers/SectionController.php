<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    public function index(Request $request)
    {
        $a = Section::paginate(10);

        // Return the paginated response
        return response()->json([
            'response' => $a,
        ], 200);
    }
    public function show($id)
    {
        Section::where('id', $id)->get();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|unique:sections',
        ]);
        Section::create([
            'name' => $validatedData['name'],
        ]);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $a = Section::where('id', $id);
        $a->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function destroy($id)
    {
        Section::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
