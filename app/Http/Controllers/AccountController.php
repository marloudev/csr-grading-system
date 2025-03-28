<?php

namespace App\Http\Controllers;

use App\Models\Grade;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AccountController extends Controller
{

    public function index(Request $request)
    {
        $search = $request->input('search');
        // Fetch paginated users, you can specify how many items per page, e.g., 10
        if ($request->page) {
            $users = User::where('user_type', $request->user_type)->with(['department', 'course', 'enrollment', 'grades', 'subjects'])->orderBy('id', 'desc')->paginate(10);
            return response()->json([
                'response' => $users,
            ], 200);
        } else {
            $users = User::where('user_type', $request->user_type)
                ->where(function ($query) use ($search) {
                    $query->where('user_id', 'LIKE', "%{$search}%")
                        ->orWhere('fname', 'LIKE', "%{$search}%")
                        ->orWhere('lname', 'LIKE', "%{$search}%")
                        ->orWhere('email', 'LIKE', "%{$search}%");
                })
                ->with(['department', 'course', 'enrollment', 'grades', 'subjects'])
                ->get();

            return response()->json([
                'response' => [
                    'data' => $users
                ],
            ], 200);
        }


        // Return the paginated response

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
            'user_id' => 'required|unique:users,user_id',  // Corrected 'unique' validation for 'user_id'
            'email' => 'required|email|unique:users,email', // Unique validation for email
            // 'address' => 'required|string|max:255',  // Address must be a string with a max length of 255
            'course_id' => 'max:255',  // Course must be a string with a max length of 255
            'department_id' => 'nullable',  // Department must be a string with a max length of 255
            // 'dob' => 'required|date',  // Date of birth must be a valid date
            'fname' => 'required|string|max:255',  // First name must be a string with a max length of 255
            'lname' => 'required|string|max:255',  // Last name must be a string with a max length of 255
            'password' => 'required|string|min:8',  // Password must be a string with a minimum length of 8
            'selected_subjects' => 'nullable|array',
        ]);


        // Create the user
        User::create([
            'user_id' => $validatedData['user_id'],
            'email' => $validatedData['email'],
            'course_id' => $validatedData['course_id'] ?? null,
            'department_id' => $validatedData['department_id'] ?? null,
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
            'user_type' => $request->user_type,
            'password' => Hash::make($validatedData['password']),
        ]);
        if ($request->user_type == 2 && $request->selected_subjects) {
            foreach ($request->selected_subjects as $key => $value) {
                $subject = Subject::where('code', $value['code'])->first();
                if ($subject) {
                    $subject->update([
                        'instructor_id' => $validatedData['user_id']
                    ]);
                }
            }
        } else if ($request->user_type == 3 && $request->selected_subjects) {
            foreach ($request->selected_subjects as $key => $value) {
                $subject = Subject::where('code', $value['code'])->first();
                if ($subject) {
                    Grade::create([
                        'instructor_id' => $value['instructor_id'],
                        'academic_year' => $value['academic_year'],
                        'student_id' => $validatedData['user_id'],
                        'semester' => $value['semester'],
                        'subject_code' =>  $value['code'],
                        'year' => $value['year'],
                        'prelim' => 0,
                        'midterm' => 0,
                        'final' => 0,
                    ]);
                }
            }
        }

        // Return response
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully!',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        // Validate input with correct unique rules
        $validatedData = $request->validate([
            'email' => [
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($id),
            ],
            'course_id' => 'nullable|max:255',
            'department_id' => 'nullable',
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'address' => 'nullable|string|max:255',
            'dob' => 'nullable|date',
            'password' => 'nullable|min:8', // Ensure password validation
        ]);

        // Find the user by ID
        $user = User::findOrFail($id);

        // Prepare data for update
        $dataToUpdate = [
            'email' => $validatedData['email'],
            'course_id' => $validatedData['course_id'] ?? null,
            'address' => $validatedData['address'] ?? $user->address,
            'department_id' => $validatedData['department_id'] ?? $user->department_id,
            'dob' => $validatedData['dob'] ?? $user->dob,
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
        ];

        // Hash and update password only if provided
        if ($request->filled('password')) {
            $dataToUpdate['password'] = Hash::make($validatedData['password']);
        }

        // Update the user with the new data
        $user->update($dataToUpdate);

        if ($user->user_type == 2 && $request->selected_subjects) {
            foreach ($request->selected_subjects as $key => $value) {
                $subject = Subject::where('code', $value['code'])->first();
                if ($subject) {
                    $subject->update([
                        'instructor_id' =>  $request->user_id
                    ]);
                }
            }
        } else if ($user->user_type == 3 && $request->selected_subjects) {
            foreach ($request->selected_subjects as $key => $value) {
                $subject = Subject::where('code', $value['code'])->first();
                if ($subject) {
                    Grade::create([
                        'instructor_id' => $value['instructor_id'],
                        'academic_year' => $value['academic_year'],
                        'student_id' =>  $user->user_id,
                        'semester' => $value['semester'],
                        'subject_code' =>  $value['code'],
                        'year' => $value['year'],
                        'prelim' => 0,
                        'midterm' => 0,
                        'final' => 0,
                    ]);
                }
            }
        }
        if ($request->user_id != $user->user_id) {
            Subject::where('instructor_id', $user->user_id)->update([
                'instructor_id' => $request->user_id
            ]);
            $user->update([
                'user_id' => $request->user_id
            ]);
        }
        // Return success response
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function destroy($id)
    {
        $user = User::find($id);

        if ($user) {
            $subjects = Subject::where('instructor_id', $user->user_id)->get();
            $user->delete();
            if ($subjects->isNotEmpty()) {
                Subject::where('instructor_id', $user->user_id)->update(['instructor_id' => null]);
            }
            return response()->json([
                'response' => 'success',
            ], 200);
        }

        return response()->json([
            'response' => 'User not found',
        ], 404);
    }
}
