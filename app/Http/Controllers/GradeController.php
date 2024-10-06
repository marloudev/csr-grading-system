<?php

namespace App\Http\Controllers;

use App\Models\ClassParticipation;
use App\Models\Enrollment;
use App\Models\Examination;
use App\Models\Grade;
use App\Models\Project;
use App\Models\Quiz;
use Illuminate\Http\Request;

class GradeController extends Controller
{

    public function get_student_grade($id)
    {
        $enrollment = Enrollment::where('id',$id)->first();
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
    public function show($id)
    {
        $grades = Grade::where('id', $id)->get();
        return response()->json([
            'response' => $grades,
        ], 200);
    }
    public function store(Request $request)
    {

        foreach ($request->records as $key => $record) {
            $grade = Grade::where([
                ['academic_year', '=', $record['academic_year']],
                ['enrollment_id', '=', $record['enrollment_id']],
                ['instructor_id', '=', $record['instructor_id']],
                ['student_id', '=', $record['student_id']],
                ['subject_code','=',$request->subject_code]
            ])->first();
            if ($request->lecture == 'Examination') {
                Examination::create([
                    'grade_id' => $record['id'],
                    'assessment' =>$request->assessment,
                    'score' => $record['score'],
                    'percent' => 30,
                    'date' => $request->date
                ]);
            } else if ($request->lecture == 'Quizzes') {
                Quiz::create([
                    'grade_id' => $record['id'],
                    'assessment' =>$request->assessment,
                    'score' => $record['score'],
                    'percent' => 30,
                    'date' => $request->date
                ]);
            } else if ($request->lecture == 'Projects/Assignment') {
                Project::create([
                    'grade_id' => $record['id'],
                    'assessment' =>$request->assessment,
                    'score' => $record['score'],
                    'percent' => 20,
                    'date' => $request->date
                ]);
            } else if ($request->lecture == 'Class Participation') {
                ClassParticipation::create([
                    'grade_id' => $record['id'],
                    'assessment' =>$request->assessment,
                    'score' => $record['score'],
                    'percent' => 20,
                    'date' => $request->date
                ]);
            }
        }
        return response()->json([
            $grade,
            'response' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $a = Grade::where('id', $id);
        $a->update($request->all());
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
