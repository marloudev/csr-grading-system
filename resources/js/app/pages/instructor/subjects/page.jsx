import React from "react";
import InstructorLayout from "../layout";
import { useEffect } from "react";
import store from "../../store/store";
import { get_subject_by_id_thunk } from "../../admin/subjects/redux/subject-thunk";
import { useSelector } from "react-redux";
import InstructorStudentTableSection from "./sections/student-grades-table-section";
import CreateSection from "./sections/create-section";
import SearchSubjectSection from "../../admin/instructor/id/sections/search-subject-section";
import InstructorIdTabsSection from "../../admin/instructor/id/sections/instructor-id-tabs-section";
import { get_sections_thunk } from "../../admin/sections/redux/sections-thunk";

export default function InstructorSubjectPage() {
    const { user } = useSelector((store) => store.app);
    useEffect(() => {
        if (user.user_id) {
            store.dispatch(get_subject_by_id_thunk(user.user_id));
            store.dispatch(get_sections_thunk())
        }
    }, [user.user_id]);
    return (
        <InstructorLayout>
            <div className="flex flex-col gap-5">
                {/* <CreateSection /> */}
                <SearchSubjectSection />
                <InstructorIdTabsSection />
                {/* <InstructorStudentTableSection /> */}
            </div>
        </InstructorLayout>
    );
}
