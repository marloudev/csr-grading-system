import { Pagination } from '@mui/material'
import React from 'react'

export default function PaginationSection() {
  return (
    <div className='flex w-full items-center justify-end'>
        <Pagination count={10} color="primary" shape="rounded" />
    </div>
  )
}
