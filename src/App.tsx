import React from 'react'
import classnames from 'classnames'
import useResizeCss from '@/hooks/useResizeCss'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import style from './index.module.less'

import { incrementByAmount, increment } from '@/store/features/counterSlice'

const App = () => {
  const counter = useAppSelector((store) => store.counter)
  const dispatch = useAppDispatch()
  const store = useAppSelector((store) => store)
  console.log('store', store)
  const { filling, cssResize } = useResizeCss()
  const [input, setInput] = React.useState(0)

  return (
    <>
      <input
        type='number'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(Number(e.target.value))
        }
      />
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        加
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(input))
        }}
      >
        加
      </button>
      {counter.value}
    </>
  )
}

export default App
