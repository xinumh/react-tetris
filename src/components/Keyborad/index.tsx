import { useAppDispatch, useAppSelector } from '@/store/hooks'
import React from 'react'
import Button from './Button'
import { drop } from '@/store/features/keyboard/dropSlice'

import style from './index.less'

type Props = {
  filling: number
  keyboard: any
}

function Keyboard({ filling }: Props) {
  const btnRef = React.useRef(null)
  const keyboard = useAppSelector((store) => store.keyboard)
  const dispatch = useAppDispatch()

  console.log('keyboard', keyboard.drop.value)

  React.useEffect(() => {
    document.addEventListener(
      'touchstart',
      (e) => {
        if (e.preventDefault) {
          e.preventDefault()
        }
      },
      true
    )
    btnRef.current.addEventListener(
      'click',
      () => {
        dispatch(drop(!keyboard.drop.value))
      },
      true
    )
  }, [])
  return (
    <div
      className={style.keyboard}
      style={{
        marginTop: 20 + filling
      }}
    >
      <Button
        color='blue'
        size='s1'
        top={0}
        left={374}
        label='旋转'
        arrow='translate(0, 63px)'
        position
        active={keyboard.drop.value}
        ref={btnRef}
        // ref={(c) => {
        //   this.dom_rotate = c
        // }}
      />
    </div>
  )
}

export default Keyboard
