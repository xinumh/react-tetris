import { createMatrix } from '@/store/features/matrixSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { blankLine } from '@/unit/const'
import { TMatrixState } from '@/unit/type'
import { List } from 'immutable'

export const getStartMatrix = (startLines: number) => {
  const getLine = (min: number, max: number) => {
    // 返回标亮个数在min~max之间一行方块, (包含边界)
    const count = parseInt((max - min + 1) * Math.random() + min + '', 10)
    const line = []
    for (let i = 0; i < count; i++) {
      // 插入高亮
      line.push(1)
    }
    for (let i = 0, len = 10 - count; i < len; i++) {
      // 在随机位置插入灰色
      const index = parseInt((line.length + 1) * Math.random() + '', 10)
      line.splice(index, 0, 0)
    }

    return List(line)
  }
  let startMatrix = List([])
  for (let i = 0; i < startLines; i++) {
    if (i <= 2) {
      // 0-3
      startMatrix = startMatrix.push(getLine(5, 8))
    } else if (i <= 6) {
      // 4-6
      startMatrix = startMatrix.push(getLine(4, 9))
    } else {
      // 7-9
      startMatrix = startMatrix.push(getLine(3, 9))
    }
  }
  for (let i = 0, len = 20 - startLines; i < len; i++) {
    // 插入上部分的灰色
    startMatrix = startMatrix.unshift(List(blankLine))
  }
  return startMatrix
}

const states: any = {
  // 自动下落setTimeout变量
  fallInterval: null,

  // 开始
  start: () => {
    // const { startLines } = useAppSelector((store) => store)
    // const dispatch = useAppDispatch()
    // const startMatrix = getStartMatrix(startLines)
    // dispatch(createMatrix(startMatrix))
  },

  // 消除行
  clearLines: (matrix: TMatrixState, lines: number[]) => {
    console.log('matrix', matrix)
    console.log('lines', lines)
  },

  // 游戏结束, 触发动画
  overStart: () => {
    clearTimeout(states.fallInterval)
    console.log('overStart=========')
    states.start()
  }
}

export default states
