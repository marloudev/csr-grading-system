import React from 'react'
import InstructorLayout from '../../layout'
import InstructorStudentGradesTableSection from './sections/instructor-student-grades-table-section'
import IntructorSubjectIDLayout from './layout'

export default function InstructorIDPage() {

  return (
    <InstructorLayout>
       <div className='flex gap-4 flex-col'>
        <IntructorSubjectIDLayout />
       <InstructorStudentGradesTableSection />
       </div>
    </InstructorLayout>
  )
}
