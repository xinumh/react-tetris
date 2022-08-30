import React from 'react'
import cn from 'classnames'
import style from './index.less'

type Props = {
  time?: boolean
  number?: number
  length?: number
}

const formate = (num: number) =>
  num < 10 ? `0${num}`.split('') : `${num}`.split('')

const Number = ({ time = false, number, length = 6 }: Props) => {
  const [timeNow, setTimenow] = React.useState(new Date())
  const [timeCount, setTimeCount] = React.useState(0)
  const timerRef = React.useRef(null)

  React.useEffect(() => {
    const clock = () => {
      const count = +timerRef.current
      timerRef.current = setTimeout(() => {
        setTimenow(new Date())
        setTimeCount(count)
        clock()
      }, 1000)
    }

    clock()

    return () => {
      timerRef.current = null
      clearTimeout(timerRef.current)
    }
  }, [])

  const numRender = React.useCallback((data: any[]) => {
    return (
      <div className={style.number}>
        {data.map((e, k) => (
          <span className={cn(['bg', style[`s_${e}`]])} key={k} />
        ))}
      </div>
    )
  }, [])

  const timeRender = React.useMemo(() => {
    if (time) {
      const now = timeNow
      const hour = formate(now.getHours())
      const min = formate(now.getMinutes())
      const sec = now.getSeconds() % 2
      const t = hour.concat(sec ? 'd' : 'd_c', min)
      return numRender(t)
    }
    const num = `${number}`.split('')
    for (let i = 0, len = length; i < len; i++) {
      num.unshift('n')
    }
    return numRender(num)
  }, [timeNow, time])
  return <div className={style.number}>{timeRender}</div>
}

export default Number
