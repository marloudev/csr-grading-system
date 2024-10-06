import React from 'react'
import IntructorIDSearchStudentsSection from './sections/instructor-id-search-students-section'
import InstructorIdTabsSection from './sections/instructor-id-tabs-section'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import store from '@/app/pages/store/store'
import { get_sections_thunk } from '@/app/pages/admin/sections/redux/sections-thunk'
import { get_subject_by_id_thunk } from '@/app/pages/admin/subjects/redux/subject-thunk'

export default function IntructorSubjectIDLayout({ children }) {
    const { user } = useSelector((store) => store.app)
    useEffect(() => {
        if (user.user_id) {
            store.dispatch(get_sections_thunk())
            store.dispatch(get_subject_by_id_thunk(user.user_id))
        }
    }, [user.user_id])
    return (
        <div className='flex flex-col gap-5'>
            <div>
                Please add Register Students here
                {/* 
          check the enrollment if exist by, course,section,semester, academic year and year .
          */}
            </div>
            <InstructorIdTabsSection />
            <IntructorIDSearchStudentsSection />
            {children}
        </div>
    )
}
