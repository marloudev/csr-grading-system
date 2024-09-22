import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const courseSlice = createSlice({
  name: 'course',
  initialState: {
    courses: {
      data:[]
    },
    course: {},
  },
  reducers: {
    setCouses: (state, action) => {
      state.courses = action.payload
    },
    setCouse: (state, action) => {
      state.course = action.payload
    },
  },
})
export const { 
  setCouses,
  setCouse
 } = courseSlice.actions

export default courseSlice.reducer
