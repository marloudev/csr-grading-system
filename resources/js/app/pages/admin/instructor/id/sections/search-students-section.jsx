import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import academic_year from '@/app/lib/academic-year';
import { useDispatch, useSelector } from 'react-redux';
import current_academic_year from '@/app/lib/current-academic-year';
import { Button } from '@mui/material';
import { PersonSearch } from '@mui/icons-material';
import { useEffect } from 'react';
import { setSearch } from '../../redux/instructor-slice';
import store from '@/app/pages/store/store';
import { search_students_thunk } from '../../redux/instructor-thunk';

export default function SearchStudentsSection() {
  const { sections } = useSelector((store) => store.sections)
  const { search } = useSelector((store) => store.instructors)
  const { courses } = useSelector((store) => store.courses)
  const { handleds } = useSelector((store) => store.subjects)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSearch({
      ...search,
      section_id: sections?.data[0]?.id
    }))
  }, [sections?.data[0]?.id])

  function handleChange(e) {
    dispatch(setSearch({
      ...search,
      [e.target.name]: e.target.value
    }))
  }

  async function search_students(params) {
    await store.dispatch(search_students_thunk(search))
  }
  console.log('handleds', handleds)
  return (
    <div className='w-full'>
      <div className='flex gap-3'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Subject</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search.subject_code ?? ''}
            name="subject_code"
            label="Subject"
            onChange={handleChange}
          >
            {
              handleds.map((res, i) => {
                return <MenuItem key={i} value={res.code}>{res.name}</MenuItem>
              })
            }
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Academic Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search.academic_year ?? ''}
            name="academic_year"
            label="Academic Year"
            onChange={handleChange}
          >
            {
              academic_year().map((res, i) => {
                return <MenuItem key={i} value={res}>{res}</MenuItem>
              })
            }
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Course</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search.course_id ?? ''}
            name="course_id"
            label="course"
            onChange={handleChange}
          >
            {
              courses.data.map((res, i) => {
                return <MenuItem key={i} value={res.id}>{res.name}</MenuItem>
              })
            }
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select
            id="demo-simple-select"
            name='year'
            label="year"
            value={search.year ?? ''}
            onChange={handleChange}
          >
            <MenuItem value="1st Year">1st Year</MenuItem>
            <MenuItem value="2nd Year">2nd Year</MenuItem>
            <MenuItem value="3rd Year">3rd Year</MenuItem>
            <MenuItem value="4th Year">4th Year</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Section
          </InputLabel>
          <Select
            id="demo-simple-select"
            name="section_id"
            label="Section"
            value={search.section_id ?? ''}
            onChange={handleChange}
          >
            {sections.data.map((res, i) => {
              return (
                <MenuItem key={i} value={res.id}>
                  {res.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>


        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Semester</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search.semester ?? ''}
            name="semester"
            label="Semester"
            onChange={handleChange}
          >
            <MenuItem value='1st Semester'>1st Semester</MenuItem>
            <MenuItem value='2nd Semester'>2nd Semester</MenuItem>
            <MenuItem value='Summer'>Summer</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={search_students}
          variant="contained" className='w-1/2'>
          <PersonSearch />
          Search</Button>
      </div>
    </div >
  )
}
