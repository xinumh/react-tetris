import React from 'react'
import classnames from 'classnames'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import style from './index.module.less'
import { transform } from './unit/const'
import { drop } from '@/store/features/keyboard/dropSlice'
import Decorate from '@/components/Decorate'
import Music from '@/components/Music'
import Pause from '@/components/Pause'
import TimeNumber from './components/TimeNumber'
import Keyboard from './components/Keyborad'
import useResizeCss from '@/hooks/useResizeCss'
import Point from './components/Point'
import Next from './components/Next'

const App = () => {
  // const keyboard = useAppSelector((store) => store.keyboard)
  const { keyboard, clearLines, startLines, cur, speedRun, speedStart, next } =
    useAppSelector((store) => store)
  const { filling, cssResize } = useResizeCss()
  console.log('cur', cur)

  console.log('value', keyboard)

  return (
    <div className={style.app} style={cssResize}>
      <div className={classnames({ [style.rect]: true, [style.drop]: true })}>
        <Decorate />
        <div className={style.screen}>
          <div className={style.panel}>
            <div className={style.state}>
              <Point cur={true} point={9} max={100} />
              <p>{cur ? '消除行' : '起始行'}</p>
              <TimeNumber number={cur ? clearLines : startLines} />
              <p>级别</p>
              <TimeNumber number={cur ? speedRun : speedStart} length={1} />
              <p>下一个</p>
              <Next data={next} />
              <div className={style.bottom}>
                <Music isShow={true} />
                <Pause isPause={false} />
                <TimeNumber time />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Keyboard filling={filling} keyboard={keyboard} />
    </div>
  )
}

export default App
