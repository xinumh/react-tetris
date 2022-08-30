import { blockShape } from '@/unit/const'
import React from 'react'
import style from './index.less'

type Props = {
  data: string
}

const xy: any = {
  // 方块在下一个中的坐标
  I: [1, 0],
  L: [0, 0],
  J: [0, 0],
  Z: [0, 0],
  S: [0, 0],
  O: [0, 1],
  T: [0, 0]
}

const empty = [
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

function Next({ data = '' }: Props) {
  const [block, setBlock] = React.useState<any>(empty)

  React.useEffect(() => {
    build(data)
  }, [data])

  const build = (type: any) => {
    const shape: any = blockShape[type]
    const block = empty.map((e) => [...e])
    shape.forEach((m: any, k1: number) => {
      m.forEach((n: any, k2: number) => {
        if (n) {
          block[k1 + xy[type][0]][k2 + xy[type][1]] = 1
        }
      })
    })
    setBlock(block)
  }

  return (
    <div className={style.next}>
      {block.map((arr: any, k1: number) => (
        <div key={k1}>
          {arr.map((e: any, k2: number) => (
            <b className={e ? 'c' : ''} key={k2} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Next
