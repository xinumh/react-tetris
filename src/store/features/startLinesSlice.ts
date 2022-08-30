import { createSlice } from '@reduxjs/toolkit'
import { lastRecord } from '@/unit/const'

let initState =
  lastRecord && !isNaN(parseInt(lastRecord.startLines, 10))
    ? parseInt(lastRecord.startLines, 10)
    : 0

if (initState < 0 || initState > 10) {
  initState = 0
}

const startLinesSlice = createSlice({
  name: 'startLines',
  initialState: initState,
  reducers: {
    startLines(state) {
      state
    }
  }
})

export const { startLines } = startLinesSlice.actions

export default startLinesSlice.reducer
