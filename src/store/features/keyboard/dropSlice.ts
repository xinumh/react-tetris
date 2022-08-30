import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface KeyboardDropState {
  value: boolean
}

const initialState = { value: false } as KeyboardDropState

const keyboardDropSlice = createSlice({
  // used in action types
  name: 'drop',
  initialState,
  reducers: {
    drop(state, action: PayloadAction<boolean>) {
      state.value = action.payload
    }
  }
})

export const { drop } = keyboardDropSlice.actions

export default keyboardDropSlice.reducer
