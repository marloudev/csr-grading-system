import React from 'react'
import AdminLayout from '../layout'
import TableSection from './sections/table-section'
import CreateSection from './sections/create-section'
import PaginationSection from './sections/pagination-section'
import SearchSection from './sections/search-section'
import { useEffect } from 'react'
import store from '../../store/store'
import { get_subject_thunk } from './redux/subject-thunk'
import { get_instructor_thunk } from '../instructor/redux/instructor-thunk'
import { get_sections_thunk } from '../sections/redux/sections-thunk'
import { get_course_thunk } from '../courses/redux/course-thunk'

export default function SubjectPage() {


  useEffect(()=>{
    store.dispatch(get_subject_thunk())
    store.dispatch(get_instructor_thunk())
    // store.dispatch(get_sections_thunk())
    store.dispatch(get_course_thunk())
  },[])
  return (
    <AdminLayout>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
        <CreateSection />
        <SearchSection />
        </div>
        <div className="flex flex-col items-center justify-between h-[82vh] w-full">
          <TableSection />
          <PaginationSection />
        </div>
      </div>
    </AdminLayout>
  )
}
