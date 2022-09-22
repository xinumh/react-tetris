import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const curSlice = createSlice({
  name: 'cur',
  initialState: null,
  reducers: {
    moveBlock: (state: unknown, action?: PayloadAction<unknown>) => {
      console.log('state', state)
      state = action.payload
    }
  }
})

export const { moveBlock } = curSlice.actions

export default curSlice.reducer
