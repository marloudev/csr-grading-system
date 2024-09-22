import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const settingsSlice = createSlice({
  name: 'setting',
  initialState: {
    settings: [],
    setting: {},
  },
  reducers: {
    setSettings: (state, action) => {
      state.settings = action.payload
    },
    setSetting: (state, action) => {
      state.setting = action.payload
    },
  },
})
export const { 
  setSettings,
  setSetting
 } = settingsSlice.actions

export default settingsSlice.reducer
