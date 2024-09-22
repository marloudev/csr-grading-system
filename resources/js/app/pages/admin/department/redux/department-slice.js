import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const departmentSlice = createSlice({
  name: 'department',
  initialState: {
    departments: [],
    department: {},
  },
  reducers: {
    setDepartments: (state, action) => {
      state.departments = action.payload
    },
    setDepartment: (state, action) => {
      state.department = action.payload
    },
  },
})
export const { 
  setDepartments,
  setDepartment
 } = departmentSlice.actions

export default departmentSlice.reducer
