import React from 'react'
import TimeNumber from '@/components/TimeNumber'

type Props = {
  cur?: boolean
  max: number
  point: number
}

const DF = '得分'
const ZDF = '最高得分'
const SLDF = '上次得分'

const Point = ({ cur, max, point }: Props) => {
  const [number, setNumber] = React.useState(0)
  const [label, setLabel] = React.useState('')
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (cur) {
      setLabel(point >= max ? ZDF : DF)
      setNumber(point)
    } else {
      // 游戏未开始

      // 最高分与上轮得分交替出现
      const toogle = () => {
        setLabel(SLDF)
        setNumber(point)
        ref.current = setTimeout(() => {
          setLabel(ZDF)
          setNumber(max)

          ref.current = setTimeout(toogle, 3000)
        }, 3000)
      }
      if (point !== 0) {
        // 如果为上轮没玩, 也不用提示了
        toogle()
      } else {
        setLabel(ZDF)
        setNumber(max)
      }
    }
  }, [])
  return (
    <div>
      <p>{label}</p>
      <TimeNumber number={number} />
    </div>
  )
}

export default Point
