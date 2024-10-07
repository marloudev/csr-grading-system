import React from "react";
import InstructorLayout from "../layout";
import { useEffect } from "react";
import store from "../../store/store";
import { get_subject_by_id_thunk } from "../../admin/subjects/redux/subject-thunk";
import { useSelector } from "react-redux";
import InstructorStudentTableSection from "./sections/student-grades-table-section";
import CreateSection from "./sections/create-section";

export default function InstructorSubjectPage() {
    const { user } = useSelector((store) => store.app);
    useEffect(() => {
        if (user.user_id) {
            store.dispatch(get_subject_by_id_thunk(user.user_id));
        }
    }, [user.user_id]);
    return (
        <InstructorLayout>
            <div className="flex flex-col gap-5">
                {/* <CreateSection /> */}
                <InstructorStudentTableSection />
            </div>
        </InstructorLayout>
    );
}
