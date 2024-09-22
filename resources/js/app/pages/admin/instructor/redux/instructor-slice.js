import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const instructorSlice = createSlice({
  name: 'instructor',
  initialState: {
    instructors: {
      data:[]
    },
    instructor: {},
  },
  reducers: {
    setInstructors: (state, action) => {
      state.instructors = action.payload
    },
    setInstructor: (state, action) => {
      state.instructor = action.payload
    },
  },
})
export const { 
  setInstructors,
  setInstructor
 } = instructorSlice.actions

export default instructorSlice.reducer
