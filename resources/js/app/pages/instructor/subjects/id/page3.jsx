import React from "react";
import InstructorLayout from "../../layout";
import IntructorSubjectIDLayout from "./layout";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import { get_sections_thunk } from "@/app/pages/admin/sections/redux/sections-thunk";
import { get_course_thunk } from "@/app/pages/admin/courses/redux/course-thunk";
import InstructorStudentGradesTableSection from "./sections/instructor-student-grades-table-section";

export default function Page3() {

    // useEffect(()=>{
    //     store.dispatch(get_sections_thunk())
    //     store.dispatch(get_course_thunk())
    //   },[])
    return (
        <InstructorLayout>
            <IntructorSubjectIDLayout>
              <InstructorStudentGradesTableSection />
            </IntructorSubjectIDLayout>
        </InstructorLayout>
    );
}
