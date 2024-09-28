import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState: {
    sections: {
      data:[]
    },
    section: {},
  },
  reducers: {
    setSections: (state, action) => {
      state.sections = action.payload
    },
    setSection: (state, action) => {
      state.section = action.payload
    },
  },
})
export const { 
  setSections,
  setSection
 } = sectionsSlice.actions

export default sectionsSlice.reducer
