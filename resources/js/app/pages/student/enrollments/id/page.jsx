import React from 'react'
import StudentLayout from '../../layout'
import store from '@/app/pages/store/store'
import { get_student_grade_thunk } from '@/app/pages/admin/grades/redux/grade-thunk'
import { useEffect } from 'react'
import StudentIdTableSection from './sections/student-id-table-section'

export default function StudentEnrollmentIDPage() {
    const enrollment_id = window.location.pathname.split('/')[3]
    useEffect(() => {
        // store.dispatch(get_enrollments_by_id_thunk(student_id))
        store.dispatch(get_student_grade_thunk(enrollment_id))
    }, [])
    return (
        <StudentLayout>
            <StudentIdTableSection />
        </StudentLayout>
    )
}
