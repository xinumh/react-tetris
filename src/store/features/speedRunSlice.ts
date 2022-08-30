import { createSlice } from '@reduxjs/toolkit'
import { lastRecord } from '@/unit/const'

let initState =
  lastRecord && !isNaN(parseInt(lastRecord.speedRun, 10))
    ? parseInt(lastRecord.speedRun, 10)
    : 1
if (initState < 1 || initState > 6) {
  initState = 1
}

const speedRunSlice = createSlice({
  name: 'speedRun',
  initialState: initState,
  reducers: {
    speedRun(state) {
      state
    }
  }
})

export const { speedRun } = speedRunSlice.actions

export default speedRunSlice.reducer
