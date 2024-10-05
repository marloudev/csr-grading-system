import React from 'react'
import AdminLayout from '../../layout'
import StudentIdTableSection from './sections/student-id-table-section'
import { useEffect } from 'react'
import store from '@/app/pages/store/store'
import { get_enrollments_by_id_thunk } from '../redux/enrollment-thunk'
import {  get_student_grade_thunk } from '../../grades/redux/grade-thunk'

export default function EnrollmentIDPage() {
const enrollment_id = window.location.pathname.split('/')[4]
  useEffect(()=>{
    // store.dispatch(get_enrollments_by_id_thunk(student_id))
    store.dispatch(get_student_grade_thunk(enrollment_id))
  },[])
  return (
    <AdminLayout>
      <StudentIdTableSection />
    </AdminLayout>
  )
}
