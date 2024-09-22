<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    public function index(Request $request)
    {
        // Fetch paginated users, you can specify how many items per page, e.g., 10
        $users = User::paginate(10);

        // Return the paginated response
        return response()->json([
            'response' => $users,
        ], 200);
    }

    public function show($id)
    {
        User::where('id', $id)->get();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'email' => 'required|email|unique:users,email',
            'address' => 'required|string|max:255',
            'course' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'dob' => 'required|date',
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'password' => 'required|string|min:8',
        ]);

        // Create the user
        User::create([
            'email' => $validatedData['email'],
            'address' => $validatedData['address'],
            'course' => $validatedData['course'],
            'department' => $validatedData['department'],
            'dob' => $validatedData['dob'],
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
            'password' => Hash::make($validatedData['password']),
        ]);

        // Return response
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully!',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        // Validate the input with the proper unique rule for the email
        $validatedData = $request->validate([
            'email' => 'required|email|unique:users,email',  // Exclude the current user from the unique check
            'address' => 'required|string|max:255',
            'course' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'dob' => 'required|date',
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'password' => 'nullable|string|min:8', // Password is nullable
        ]);

        // Find the user by ID
        $user = User::findOrFail($id);

        // Prepare data for update
        $dataToUpdate = [
            'email' => $validatedData['email'],
            'address' => $validatedData['address'],
            'course' => $validatedData['course'],
            'department' => $validatedData['department'],
            'dob' => $validatedData['dob'],
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
        ];

        // Hash and update password only if provided
        if ($request->filled('password')) {
            $dataToUpdate['password'] = Hash::make($validatedData['password']);
        }

        // Update the user with the new data
        $user->update($dataToUpdate);

        // Return success response
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function destroy($id)
    {
        User::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
