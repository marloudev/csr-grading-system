import { Pagination } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function PaginationSection() {
  const { subjects } = useSelector((state) => state.subjects)
  console.log('subjects', subjects)
  return (
    <div className='flex w-full items-center justify-end'>
      <Pagination
        count={Number.isFinite(subjects?.total) && subjects?.data?.length
          ? Math.ceil(subjects.total / subjects.data.length)
          : 0}  // Default to 0 if the data is invalid
        color="primary"
        shape="rounded"
      />
    </div>
  )
}
