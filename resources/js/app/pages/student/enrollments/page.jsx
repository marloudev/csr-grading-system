import React from 'react'
import StudentLayout from '../layout'
import TableSection from './sections/table-section'
import { useEffect } from 'react'
import store from '../../store/store'
import SearchSubjectSection from '../../admin/instructor/id/sections/search-subject-section'
import InstructorIdTabsSection from './sections/student-id-tabs-section'
import { get_grade_by_id_thunk } from '../../admin/grades/redux/grade-thunk'

export default function StudentSubjectPage({auth}) {

  useEffect(()=>{
    store.dispatch(get_grade_by_id_thunk(auth.user.user_id))
  },[])
  return (
    <StudentLayout>
        <SearchSubjectSection />
               {/* <InstructorIdTabsSection></InstructorIdTabsSection> */}
      <TableSection />
      {/* <InstructorIdTabsSection /> */}
    </StudentLayout>
  )
}
