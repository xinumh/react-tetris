import { createSlice } from '@reduxjs/toolkit'
import { lastRecord } from '@/unit/const'

let initState =
  lastRecord && !isNaN(parseInt(lastRecord.clearLines, 10))
    ? parseInt(lastRecord.clearLines, 10)
    : 0

if (initState < 0) {
  initState = 0
}

const clearLinesSlice = createSlice({
  name: 'clearLines',
  initialState: initState,
  reducers: {
    clearLines(state) {
      state
    }
  }
})

export const { clearLines } = clearLinesSlice.actions

export default clearLinesSlice.reducer
