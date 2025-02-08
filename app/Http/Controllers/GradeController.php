<?php

namespace App\Http\Controllers;

use App\Models\ClassParticipation;
use App\Models\Enrollment;
use App\Models\Examination;
use App\Models\Grade;
use App\Models\Project;
use App\Models\Quiz;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Http\Request;

class GradeController extends Controller
{
    public function get_grades(Request $request, $id)
    {
        $years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
        $grades_by_year = [];
        $user = User::where('user_id', $id)->with(['grades'])->first();
        $subjects = Subject::where('course_id', $user->course_id)->get();
        foreach ($years as $year) {
            $key = substr(str_replace(' ', '', $year), 1);

            // Fetch grades
            $grades_by_year[$key] = Grade::where([
                ['academic_year', '=', $request->academic_year],
                ['semester', '=', $request->semester],
                ['student_id', '=', $id],
                ['year', '=', $year],
            ])->get();
        }

        return response()->json([
            'user' => $user,
            'subjects' => $subjects,
            'response' => $grades_by_year,
        ], 200);
    }



    public function get_student_grade($id)
    {
        $enrollment = Enrollment::where('id', $id)->first();
        $a = Grade::where([
            ['enrollment_id', '=', $enrollment->id],
            ['student_id', '=', $enrollment->user_id],
            ['section_id', '=', $enrollment->section_id],
            ['semester', '=', $enrollment->semester],
            ['academic_year', '=', $enrollment->academic_year],
        ])->with(['project', 'quiz', 'examination', 'class_participation'])->get();
        return response()->json([
            $enrollment,
            'response' => $a,
        ], 200);
    }
    public function index(Request $request)
    {
        $a = Grade::get();
        return response()->json([
            'response' => $a,
        ], 200);
    }
    public function show(Request $request, $id)
    {
        // $grades = Grade::where('id', $id)->get();
        $grades = Grade::where([['student_id', '=', $id], ['academic_year', '=', $request->academic_year], ['semester', '=', $request->semester]])->with('subject')->get();
        return response()->json([
            'response' => $grades,
        ], 200);
    }
    public function store(Request $request)
    {
        // $user = User::where([
        //     ['user_id', '=', $request->student_id],
        //     ['user_type', '=', 3],
        // ])->first();

        // $grade = Grade::where([
        //     ['instructor_id', '=', $request->instructor_id],
        //     ['academic_year', '=', $request->academic_year],
        //     ['student_id', '=', $request->student_id],
        //     ['semester', '=', $request->semester],
        //     ['subject_code', '=', $request->subject_code],
        // ])->first();
        // if ($grade) {
        //     return response()->json([
        //         'response' => 'Student is already recorded!',
        //     ], 201);
        // } else if (!$user) {
        //     return response()->json([
        //         'response' =>  'Invalid Student ID',
        //     ], 201);
        // } else if ($user) {
        //     Grade::create($request->all());
        //     return response()->json([
        //         'response' => 'success',
        //     ], 200);
        // }
       
        foreach ($request->registered as $key => $value) {
            $grade = Grade::where([
                ['academic_year', '=', $request->academic_year],
                ['student_id', '=', $request->student_id],
                ['semester', '=', $request->semester],
                ['subject_code', '=',  $value['value']],
            ])->first();

        
            if (!$grade) {
                $subject = Subject::where([
                    ['academic_year', '=', $request->academic_year],
                    ['semester', '=', $request->semester],
                    ['code', '=',  $value['value']],
                ])->first();
                Grade::create([
                    'instructor_id' => $subject->instructor_id,
                    'academic_year' => $request->academic_year,
                    'student_id' => $request->student_id,
                    'semester' => $request->semester,
                    'subject_code' => $value['value'],
                    'year' => $request->year,
                    'prelim' => 0,
                    'midterm' => 0,
                    'final' => 0,
                ]);                
            }
        }

        foreach ($request->available as $key => $value) {
            $grade = Grade::where([
                ['academic_year', '=', $request->academic_year],
                ['student_id', '=', $request->student_id],
                ['semester', '=', $request->semester],
                ['subject_code', '=',  $value['value']],
            ])->first();

            if ($grade) {
                $grade->delete();
            }
        }

        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $a = Grade::where('id', $id);
        $a->update([
            'prelim' => $request->prelim,
            'midterm' => $request->midterm,
            'final' => $request->final,
        ]);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function destroy($id)
    {
        Grade::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
