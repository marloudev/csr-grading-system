import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const enrollmentsSlice = createSlice({
  name: 'enrollments',
  initialState: {
    enrollments: {
      data:[]
    },
    enrollment: {},
    userEnrollments:[]
  },
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload
    },
    setEnrollment: (state, action) => {
      state.enrollment = action.payload
    },
    setUserEnrollments: (state, action) => {
      state.userEnrollments = action.payload
    },
  },
})
export const { 
  setEnrollments,
  setEnrollment,
  setUserEnrollments
 } = enrollmentsSlice.actions

export default enrollmentsSlice.reducer
