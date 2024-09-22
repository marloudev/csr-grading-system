import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const subjectSlice = createSlice({
  name: 'subject',
  initialState: {
    subjects: [],
    subject: {},
  },
  reducers: {
    setSubjects: (state, action) => {
      state.subjects = action.payload
    },
    setSubject: (state, action) => {
      state.subject = action.payload
    },
  },
})
export const { 
  setSubjects,
  setSubject
 } = subjectSlice.actions

export default subjectSlice.reducer
