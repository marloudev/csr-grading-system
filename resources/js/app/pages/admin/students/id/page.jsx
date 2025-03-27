import React from "react";
import AdminLayout from "../../layout";
import StudentIdTableSection from "./sections/student-id-table-section";
import StudentTabsSection from "./sections/student-tabs-section";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import { get_grades_thunk } from "../../grades/redux/grade-thunk";
import SearchSubjectSection from "./sections/search-subject-section";
import EnrollStudentSection from "./sections/enroll-student-section";

export default function StudentIDPage() {
    const student_id = window.location.pathname.split("/")[3];

    useEffect(() => {
        store.dispatch(get_grades_thunk(student_id,window.location.search));
     
    }, []);
    return (
        <AdminLayout>
           {/* <div className="my-3">
           <EnrollStudentSection subject="sadas" />
           </div> */}
            <SearchSubjectSection />
            <StudentTabsSection />
            {/* <StudentIdTableSection /> */}
        </AdminLayout>
    );
}
