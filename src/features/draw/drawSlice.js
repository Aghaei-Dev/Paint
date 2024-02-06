import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: '#000',
  strokeWidth: '10',
}
const drawSlice = createSlice({
  name: 'draw',
  initialState,
  reducers: {
    changeColor: (state, { payload }) => {
      state.color = payload
    },
    changeStrokeWidth: (state, { payload }) => {
      state.strokeWidth = payload
    },
  },
})

export const { changeColor, changeStrokeWidth } = drawSlice.actions
export default drawSlice.reducer
