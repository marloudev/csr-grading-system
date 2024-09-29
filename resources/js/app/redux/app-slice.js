import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isModalOpen: false,
    pathname:'/'+window.location.pathname.split("/")[2],
    user:{}
  },
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
    setPathname: (state, action) => {
      state.pathname = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})
export const { 
  setPathname,
  setUser
 } = appSlice.actions

export default appSlice.reducer
