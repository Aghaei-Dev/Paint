import { createSlice } from '@reduxjs/toolkit'
import { musicAndCoverArray } from '../../assets/constants'
const initialState = {
  isDarkMode: false,
  isMusicPlaying: false,
  isTimerCount: false,
  isAdditionalModal: true,
  zoomLevel: 100,
  musicNumber: 0,
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
      if (state.zoomLevel > 180 && payload === 'INCREASE') {
        state.zoomLevel = 200
      }
      if (state.zoomLevel < 20 && payload === 'DECREASE') {
        state.zoomLevel = 0
      }
    },
    changeZoomLevelByInp: (state, { payload }) => {
      state.zoomLevel = payload
    },
    changeMusicPlaying: (state) => {
      state.isMusicPlaying = !state.isMusicPlaying
    },
    changeAdditionalModal: (state) => {
      state.isAdditionalModal = !state.isAdditionalModal
    },
    changeMusicNumber: (state) => {
      if (state.musicNumber < musicAndCoverArray.length - 1) {
        state.musicNumber += 1
      } else {
        state.musicNumber = 0
      }
    },
    changeTimerCount: (state) => {
      state.isTimerCount = !state.isTimerCount
    },
  },
})

export const {
  toggleDarkMode,
  changeZoomLevel,
  changeZoomLevelByInp,
  changeMusicPlaying,
  changeAdditionalModal,
  changeMusicNumber,
  changeTimerCount,
} = globalSlice.actions
export default globalSlice.reducer
