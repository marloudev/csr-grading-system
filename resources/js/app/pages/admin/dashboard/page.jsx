import React from 'react'
import AdminLayout from '../layout'
import DashboardCardSection from './sections/dashboard-card-section'
import DashboardLineGraph from './sections/dashboard-line-graph'
import { useEffect } from 'react'
import { get_dashboard_thunk } from './redux/dashboard-thunk'
import store from '../../store/store'

export default function AdminDashboardPage() {

  useEffect(()=>{
    store.dispatch(get_dashboard_thunk())
  },[])
  return (
    <AdminLayout>
      <DashboardCardSection />
      <div className='flex w-full items-center justify-center'>
        <div className='w-5/6'>
          <DashboardLineGraph />
        </div>
      </div>
    </AdminLayout>
  )
}
