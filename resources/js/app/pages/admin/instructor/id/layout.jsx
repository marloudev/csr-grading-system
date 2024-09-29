import React from 'react'
import InstructorIdTabsSection from './sections/instructor-id-tabs-section'
import SearchStudentsSection from './sections/search-students-section'

export default function InstructorIDLayout({ children }) {
  return (
    <div className='flex flex-col gap-5'>
      <div>
       Please add Register Students here
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
