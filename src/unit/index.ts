import { TMatrixState } from '@/unit/type'

export const getClearLines = (matrix: TMatrixState) => {
  // 达到消除状态的行
  const clearLines: number[] = []
  matrix.forEach((m, k) => {
    if (m.every((n) => !!n)) {
      clearLines.push(k)
    }
  })
  return clearLines
}
