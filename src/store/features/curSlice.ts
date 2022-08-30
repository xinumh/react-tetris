import { createSlice } from '@reduxjs/toolkit'
// import { List } from 'immutable'
import { lastRecord } from '@/unit/const'
// import Block from '@/unit/block'

const initState: any = ((): any => {
  if (!lastRecord || !lastRecord.cur) {
    // 无记录 或 有记录 但方块为空, 返回 null
    return null
  }
  // const cur = lastRecord.cur
  // const option = {
  //   type: cur.type,
  //   rotateIndex: cur.rotateIndex,
  //   shape: List(cur.shape.map((e: any) => List(e))),
  //   xy: cur.xy
  // }
  // return new Block(option)
})()

const curSlice = createSlice({
  name: 'cur',
  initialState: initState,
  reducers: {
    moveBlock(state) {
      state
    }
  }
})

export const { moveBlock } = curSlice.actions

export default curSlice.reducer
