import states from '@/control/states'
import { getClearLines } from '@/unit'
import { TMatrixState } from '@/unit/type'
import classnames from 'classnames'
import React from 'react'
import style from './index.module.less'

type Props = {
  matrix: TMatrixState
  cur?: unknown
}

const Matrix = ({ matrix, cur }: Props) => {
  console.log('matrix', matrix)
  // 达到消除状态的行
  const clears = React.useMemo(() => getClearLines(matrix), [matrix])

  console.log('clears', clears)

  // 清除行
  const clearAnimate = React.useCallback((clears: number[]) => {
    states.clearLines(matrix, clears)
  }, [])

  React.useEffect(() => {
    if (clears.length) {
      clearAnimate(clears)
    }
  }, [clears])

  return (
    <div className={style.matrix}>
      {matrix.map((p, k1: number) => (
        <p key={k1}>
          {p.map((e, k2: number) => (
            <b
              key={k2}
              className={classnames({
                c: e === 1,
                d: e === 2
              })}
            ></b>
          ))}
        </p>
      ))}
    </div>
  )
}

export default Matrix
