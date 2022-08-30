import React from 'react'
import cn from 'classnames'
import style from './index.less'

type Props = {
  isShow: boolean
}

const Music = ({ isShow = false }: Props) => {
  return (
    <div
      className={cn({
        bg: true,
        [style.music]: true,
        [style.c]: !isShow
      })}
    >
      Music
    </div>
  )
}

export default Music
