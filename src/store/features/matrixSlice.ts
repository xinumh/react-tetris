import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { blankMatrix } from '@/unit/const'
import { TMatrixState } from '@/unit/type'

const matrixSlice = createSlice({
  name: 'matrix',
  initialState: blankMatrix as any,
  reducers: {
    createMatrix: (
      state: TMatrixState,
      action?: PayloadAction<TMatrixState>
    ) => {
      console.log('state', state)
      console.log('action', action)
      state = action.payload
      return state
    }
  }
})

export const { createMatrix } = matrixSlice.actions

export default matrixSlice.reducer
