import { createSlice } from '@reduxjs/toolkit'
import { lastRecord } from '@/unit/const'

const initState = false
const dropSlice = createSlice({
  name: 'drop',
  initialState: initState,
  reducers: {
    increment(state) {
      state
    }
  }
})

export const { increment } = dropSlice.actions

export default dropSlice.reducer
