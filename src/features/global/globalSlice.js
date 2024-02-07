import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDarkMode: false,
  isMute: false,
  zoomLevel: 100,
}
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    },
    changeZoomLevel: (state, { payload }) => {
      if (state.zoomLevel <= 180 && payload === 'INCREASE') {
        state.zoomLevel += 20
      }
      if (state.zoomLevel >= 20 && payload === 'DECREASE') {
        state.zoomLevel -= 20
      }
    },
  },
})

export const { toggleDarkMode, changeZoomLevel } = globalSlice.actions
export default globalSlice.reducer
