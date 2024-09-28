import React from 'react'
import InstructorIdTabsSection from './sections/instructor-id-tabs-section'
import SearchStudentsSection from './sections/search-students-section'

export default function InstructorIDLayout({ children }) {
  return (
    <div className='flex flex-col gap-5'>
      <InstructorIdTabsSection />
      <SearchStudentsSection />
      {children}
    </div>
  )
}
