import { Pagination } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function PaginationSection() {
  const { students } = useSelector((state) => state.students)
  console.log('students', students)
  return (
    <div className='flex w-full items-center justify-end'>
      <Pagination
        count={Number.isFinite(students?.total) && students?.data?.length
          ? Math.ceil(students.total / students.data.length)
          : 0}  // Default to 0 if the data is invalid
        color="primary"
        shape="rounded"
      />
    </div>
  )
}
