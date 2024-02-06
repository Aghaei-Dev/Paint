import { configureStore } from '@reduxjs/toolkit'
import { globalSlice, drawSlice } from './features'

export const store = configureStore({
  reducer: {
    global: globalSlice,
    draw: drawSlice,
  },
})
