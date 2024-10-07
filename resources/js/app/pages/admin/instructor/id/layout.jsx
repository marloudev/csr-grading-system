import React from 'react'
import InstructorIdTabsSection from './sections/instructor-id-tabs-section'
import SearchStudentsSection from './sections/search-students-section'
import { useEffect } from 'react'
import store from '@/app/pages/store/store'
import { get_subject_by_id_thunk } from '../../subjects/redux/subject-thunk'
import AddStudentFormSection from './sections/add-student-form-section'

export default function InstructorIDLayout({ children }) {
  const id = window.location.pathname.split('/')[3]

  useEffect(()=>{
    store.dispatch(get_subject_by_id_thunk(id))
  },[])
  return (
    <div className='flex flex-col gap-5'>
      <div>
      <AddStudentFormSection />
       {/* 
       check the enrollment if exist by, course,section,semester, academic year and year .
       */}
      </div>
      <InstructorIdTabsSection />
      <SearchStudentsSection />
      {children}
    </div>
  )
}
