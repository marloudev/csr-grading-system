import React from 'react'
import InstructorLayout from '../layout'
import DashboardCardSection from './sections/dashboard-card-section'
import store from '../../store/store'
import { get_dashboard_thunk } from '../../admin/dashboard/redux/dashboard-thunk'
import { useEffect } from 'react'

export default function InstructorDashboardPage() {

  useEffect(()=>{
    store.dispatch(get_dashboard_thunk('?user_type=instructor'))
  },[])
  return (
    <InstructorLayout>
      <DashboardCardSection/>
    </InstructorLayout>
  )
}
