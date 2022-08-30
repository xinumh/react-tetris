import React from 'react'
import classnames from 'classnames'
import style from './index.less'

type MatrixProps = {
  matrix: any[]
  cur: any
  reset: boolean
}
const Matrix = ({ matrix }: MatrixProps) => {
  return (
    <div className={style.matrix}>
      {matrix.map((p, k1) => (
        <p key={k1}>
          {p.map((e: any, k2: number) => (
            <b
              className={classnames({
                c: e === 1,
                d: e === 2
              })}
              key={k2}
            />
          ))}
        </p>
      ))}
    </div>
  )
}

export default Matrix
