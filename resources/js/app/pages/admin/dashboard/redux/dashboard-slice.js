import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dashboards: [],
    dashboard: {},
  },
  reducers: {
    setCouses: (state, action) => {
      state.dashboards = action.payload
    },
    setCouse: (state, action) => {
      state.dashboard = action.payload
    },
  },
})
export const { 
  setCouses,
  setCouse
 } = dashboardSlice.actions

export default dashboardSlice.reducer
