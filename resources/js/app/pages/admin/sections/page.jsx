import React from 'react'
import AdminLayout from '../layout'
import { useEffect } from 'react'
import store from '../../store/store'
import { get_sections_thunk } from './redux/sections-thunk'
import CreateSection from './sections/create-section'
import SearchSection from './sections/search-section'
import TableSection from './sections/table-section'
import PaginationSection from './sections/pagination-section'

export default function AdminSectionsPage() {


  useEffect(()=>{
    store.dispatch(get_sections_thunk())
  },[])
  return (
    <AdminLayout>
        <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
        <CreateSection />
        <SearchSection />
        </div>
        <div className="flex flex-col items-center justify-between h-[82vh] w-full">
          <TableSection />
          <PaginationSection />
        </div>

      </div>
    </AdminLayout>
  )
}
