import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const subjectSlice = createSlice({
  name: 'subject',
  initialState: {
    subjects: {
      data:[]
    },
    subject: {},
    subjectHandleds:[],
    handleds:[],
    subject_list:[],
    available_subjects:[]
  },
  reducers: {
    setSubjects: (state, action) => {
      state.subjects.data = action.payload
    },
    setSubject: (state, action) => {
      state.subject = action.payload
    },
    setSubjectHandleds: (state, action) => {
      state.subjectHandleds = action.payload
    },
    setHandleds: (state, action) => {
      state.handleds = action.payload
    },
    setSubjectList: (state, action) => {
      state.subject_list = action.payload
    },
    setAvailableSubjects: (state, action) => {
      state.available_subjects = action.payload
    },
  },
})
export const { 
  setSubjects,
  setSubject,
  setSubjectHandleds,
  setHandleds,
  setSubjectList,
  setAvailableSubjects
 } = subjectSlice.actions

export default subjectSlice.reducer
