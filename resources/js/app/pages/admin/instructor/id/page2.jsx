import React from 'react'
import AdminLayout from '../../layout'
import InstructorIDLayout from './layout'
import CreateGradesSection from './sections/create-grades-section'

export default function Page2() {
  return (
    <AdminLayout>
     <InstructorIDLayout>
      <CreateGradesSection />
     </InstructorIDLayout>
    </AdminLayout>
  )
}
