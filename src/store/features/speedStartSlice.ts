import { createSlice } from '@reduxjs/toolkit'
import { lastRecord } from '@/unit/const'

let initState =
  lastRecord && !isNaN(parseInt(lastRecord.speedStart, 10))
    ? parseInt(lastRecord.speedStart, 10)
    : 1
if (initState < 1 || initState > 6) {
  initState = 1
}

const speedStartSlice = createSlice({
  name: 'speedStart',
  initialState: initState,
  reducers: {
    speedStart(state) {
      state
    }
  }
})

export const { speedStart } = speedStartSlice.actions

export default speedStartSlice.reducer
