<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use App\Models\Grade;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    public function search_students(Request $request)
    {
        $enrollments = Grade::where([
            // ['course_id', '=', $request->course_id],
            ['section_id', '=', $request->section_id],
            ['semester', '=', $request->semester],
            ['academic_year', '=', $request->academic_year],
            ['year', '=', $request->year],
            ['subject_code', '=', $request->subject_code],
        ])->with(['user', 'course', 'grade', 'section', 'project', 'quiz', 'examination', 'class_participation'])->get();
        return response()->json([
            'response' => $enrollments,
        ], 200);
    }
    public function index(Request $request)
    {
        $a = Enrollment::with(['user', 'course', 'section','grade'])->paginate(10);
        return response()->json([
            'response' => $a,
        ], 200);
    }
    public function show($id)
    {
        $enrollments = Enrollment::where('user_id', $id)->with(['user', 'course', 'grade', 'section'])->get();
        return response()->json([
            'response' => $enrollments,
        ], 200);
    }
    public function store(Request $request)
    {
        $user = User::where('user_id',$request->user_id)->first();

        if ($user) {
            $enrollment = Enrollment::where([
                ['user_id', '=', $request->user_id],
                ['course_id', '=', $request->course_id],
                ['semester', '=', $request->semester],
                ['academic_year', '=', $request->academic_year],
                ['year', '=', $request->year],
                ['section_id', '=', $request->section_id],
            ])->first();
    
            if ($enrollment) {
                return response()->json([
                    'response' => 'exist',
                ], 202);
            } else {
           
                if ($request->subject_codes) {
                    $enroll = Enrollment::create($request->all());
                    foreach ($request->subject_codes as $key => $value) {
                        $subject = Subject::where('code', $value['code'])->first();
                        Grade::create([
                            'course_id' => $request->course_id,
                            'enrollment_id' => $enroll->id,
                            'subject_code' => $value['code'],
                            'instructor_id' => $subject->instructor_id,
                            'semester' => $request->semester,
                            'student_id' => $request->user_id,
                            'academic_year' => $request->academic_year,
                            'section_id' => $request->section_id,
                            'year' => $request->year,
                        ]);
                    }
                }
    
                return response()->json([
                    'response' => 'success',
                ], 200);
            }
        }else{
            return response()->json([
                'response' => 'success',
            ], 202);
        }
       
    }
    public function update(Request $request, $id)
    {
        $a = Enrollment::where('id', $id);
        $a->update([
            'academic_year' => $request->academic_year,
            'section_id' => $request->section_id,
            'semester' => $request->semester,
            'year' => $request->year,
        ]);

        if ($request->subject_codes) {
            foreach ($request->subject_codes as $key => $value) {
                $subject = Subject::where('code', $value['code'])->first();
                Grade::create([
                    'course_id' => $request->course['id'], //
                    'enrollment_id' => $request->id, //
                    'subject_code' => $value['code'], //
                    'instructor_id' => $subject->instructor_id, //
                    'semester' => $request->semester, //
                    'student_id' => $request->user_id,
                    'academic_year' => $request->academic_year, //
                    'section_id' => $request->section_id, //
                    'year' => $request->year, //
                ]);
            }
        }

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
