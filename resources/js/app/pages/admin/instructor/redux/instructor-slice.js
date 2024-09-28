import current_academic_year from '@/app/lib/current-academic-year';
import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const instructorSlice = createSlice({
  name: 'instructor',
  initialState: {
    instructors: {
      data: []
    },
    instructor: {},
    search: {
      academic_year: current_academic_year(),
      section_id: '1'
    },
    students: []
  },
  reducers: {
    setInstructors: (state, action) => {
      state.instructors = action.payload
    },
    setInstructor: (state, action) => {
      state.instructor = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setStudents: (state, action) => {
      state.students = action.payload
    },
  },
})
export const {
  setInstructors,
  setInstructor,
  setSearch,
  setStudents
} = instructorSlice.actions

export default instructorSlice.reducer
