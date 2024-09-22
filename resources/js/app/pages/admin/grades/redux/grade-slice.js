import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const gradesSlice = createSlice({
  name: 'grade',
  initialState: {
    grades: [],
    grade: {},
  },
  reducers: {
    setGrades: (state, action) => {
      state.grades = action.payload
    },
    setGrade: (state, action) => {
      state.grade = action.payload
    },
  },
})
export const { 
  setGrades,
  setGrade
 } = gradesSlice.actions

export default gradesSlice.reducer
