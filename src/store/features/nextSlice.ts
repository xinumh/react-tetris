import { createSlice } from '@reduxjs/toolkit'
import { lastRecord, blockType } from '@/unit/const'
import { getNextType } from '@/unit'

const initState =
  lastRecord && blockType.indexOf(lastRecord.next) !== -1
    ? lastRecord.next
    : getNextType()

const nextSlice = createSlice({
  name: 'next',
  initialState: initState,
  reducers: {
    next(state) {
      state
    }
  }
})

export const { next } = nextSlice.actions

export default nextSlice.reducer
