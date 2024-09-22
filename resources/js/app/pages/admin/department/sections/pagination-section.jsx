import { Pagination } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function PaginationSection() {
  const { departments } = useSelector((state) => state.department)
  console.log('departments', departments)
  return (
    <div className='flex w-full items-center justify-end'>
      <Pagination
        count={Number.isFinite(departments?.total) && departments?.data?.length
          ? Math.ceil(departments.total / departments.data.length)
          : 0}  // Default to 0 if the data is invalid
        color="primary"
        shape="rounded"
      />
    </div>
  )
}
