<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index(Request $request)
    {
        $users = Department::paginate(10);

        // Return the paginated response
        return response()->json([
            'response' => $users,
        ], 200);
    }
    public function show($id)
    {
        Department::where('id', $id)->get();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function store(Request $request)
    {
        Department::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $a = Department::where('id', $id);
        $a->update([
            'name' => $request->name
        ]);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function destroy($id)
    {
        Department::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
