import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDarkMode: false,
  isMute: false,
}
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    },

    // logoutUser: (state, { payload }) => {
    //   state.user = null
    //   state.isSidebarOpen = false
    //   removeUserFromLocalStorage()
    //   if (payload) {
    //     toast.success(payload)
    //   }
    // },
  },
})

export const { toggleDarkMode } = globalSlice.actions
export default globalSlice.reducer
