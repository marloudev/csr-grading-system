import { Pagination } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function PaginationSection() {
  const { sections } = useSelector((state) => state.sections)
  console.log('sections', sections)
  return (
    <div className='flex w-full items-center justify-end'>
      <Pagination
        count={Number.isFinite(sections?.total) && sections?.data?.length
          ? Math.ceil(sections.total / sections.data.length)
          : 0}  // Default to 0 if the data is invalid
        color="primary"
        shape="rounded"
      />
    </div>
  )
}
