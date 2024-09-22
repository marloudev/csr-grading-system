import { Pagination } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function PaginationSection() {
  const { courses } = useSelector((state) => state.courses)
  console.log('courses', courses)
  return (
    <div className='flex w-full items-center justify-end'>
      <Pagination
        count={Number.isFinite(courses?.total) && courses?.data?.length
          ? Math.ceil(courses.total / courses.data.length)
          : 0}  // Default to 0 if the data is invalid
        color="primary"
        shape="rounded"
      />
    </div>
  )
}
