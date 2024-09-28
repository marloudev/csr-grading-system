import React from "react";
import CreateGradesSection from "./sections/search-students-section";
import AdminLayout from "../../layout";
import InstructorIDLayout from "./layout";
import StudentGradesTableSection from "./sections/student-grades-table-section";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import { get_grade_thunk } from "../../grades/redux/grade-thunk";
import { get_sections_thunk } from "../../sections/redux/sections-thunk";
import { get_course_thunk } from "../../courses/redux/course-thunk";

export default function Page3() {

    useEffect(()=>{
        store.dispatch(get_sections_thunk())
        store.dispatch(get_course_thunk())
      },[])
    return (
        <AdminLayout>
            <InstructorIDLayout>
              <StudentGradesTableSection />
            </InstructorIDLayout>
        </AdminLayout>
    );
}
