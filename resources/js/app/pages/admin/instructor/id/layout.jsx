import React from 'react'
import InstructorIdTabsSection from './sections/instructor-id-tabs-section'

export default function InstructorIDLayout({children}) {
  return (
    <div>
      <InstructorIdTabsSection />
      {children}
    </div>
  )
}
