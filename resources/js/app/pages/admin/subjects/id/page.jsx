import React from 'react'
import AdminLayout from '../../layout'
import SubjectIDTableSection from './sections/subject-id-table-section'
import { useEffect } from 'react'
import store from '@/app/pages/store/store'
import { get_subject_handled_by_id_thunk } from '../redux/subject-thunk'

export default function StudentIDPage() {
    const code = window.location.pathname.split('/')[3]
    useEffect(()=>{
        store.dispatch(get_subject_handled_by_id_thunk(code))
    },[])
  return (
    <AdminLayout>
        <SubjectIDTableSection />
    </AdminLayout>
  )
}
