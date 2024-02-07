import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: 'var(--teal-1000)',
  stickyColor: '#333',
  shapeColor: '#f00',
  strokeWidth: '3',
  cursor: 'hand',
  activeTool: 'pen',
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
    changeCursor: (state, { payload }) => {
      state.cursor = payload
    },
  },
})

export const { changeColor, changeStrokeWidth, changeCursor } =
  drawSlice.actions
export default drawSlice.reducer
