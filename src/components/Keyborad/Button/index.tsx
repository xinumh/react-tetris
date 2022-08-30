import React from 'react'
import cn from 'classnames'

import style from './index.less'
import { transform } from '@/unit/const'

type Props = {
  color: string
  size: string
  top: number
  left: number
  label: string
  active: boolean
  position?: boolean
  arrow?: string
}

const Button = (
  { color, size, top, left, label, active, arrow, position }: Props,
  ref: React.RefObject<any>
) => {
  return (
    <div
      className={cn({
        [style.button]: true,
        [style[color]]: true,
        [style[size]]: true
      })}
      style={{ top, left }}
    >
      <i className={cn({ [style.active]: active })} ref={ref} />
      {size === 's1' && (
        <em
          style={{
            [transform]: `${arrow} scale(1,2)`
          }}
        />
      )}
      <span className={cn({ [style.position]: position })}>{label}</span>
    </div>
  )
}

export default React.forwardRef(Button)
