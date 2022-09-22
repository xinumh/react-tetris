import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const startLinesSlice = createSlice({
  name: 'startLines',
  initialState: 0,
  reducers: {
    setStartLines: (state: unknown, action?: PayloadAction<unknown>) => {
      console.log('state', state)
      state = action.payload
    }
  }
})

export const { setStartLines } = startLinesSlice.actions

export default startLinesSlice.reducer
