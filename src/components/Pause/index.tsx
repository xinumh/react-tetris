import React from 'react'
import cn from 'classnames'

import style from './index.less'

type Props = {
  isPause: boolean
}

const Pause = ({ isPause = false }: Props) => {
  // 控制显示状态
  const [showPause, setSowPase] = React.useState(false)
  const timeRef = React.useRef(null)

  React.useEffect(() => {
    setShake(isPause)
  }, [isPause])

  // 根据props显示闪烁或停止闪烁
  const setShake = (bool: boolean) => {
    if (bool && !timeRef.current) {
      timeRef.current = setInterval(() => {
        setSowPase(!showPause)
      }, 250)
    }

    if (!bool && timeRef.current) {
      clearInterval(timeRef.current)
      setSowPase(false)
      timeRef.current = null
    }
  }

  return (
    <div
      className={cn({
        bg: true,
        [style.pause]: true,
        [style.c]: showPause
      })}
    >
      Pause
    </div>
  )
}

export default Pause
