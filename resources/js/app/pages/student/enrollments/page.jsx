import React from 'react'
import StudentLayout from '../layout'
import TableSection from './sections/table-section'
import { useEffect } from 'react'
import store from '../../store/store'
import { get_enrollments_by_id_thunk } from '../../admin/enrollment/redux/enrollment-thunk'

export default function StudentSubjectPage({auth}) {

  useEffect(()=>{
    store.dispatch(get_enrollments_by_id_thunk(auth.user.user_id))
  },[])
  return (
    <StudentLayout>
      <TableSection />
    </StudentLayout>
  )
}
