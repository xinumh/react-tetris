import React from 'react'
import useResizeCss from '@/hooks/useResizeCss'
import classnames from 'classnames'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { createMatrix } from '@/store/features/matrixSlice'
import Matrix from './components/Matrix'
import useStart from './hooks/useStart'
import style from './index.module.less'
import Decorate from './components/Decorate'
// import states from './control/states'

const App = () => {
  const { matrix, cur } = useAppSelector((store) => store)
  useStart()
  const { filling, cssResize } = useResizeCss()

  return (
    <div className={style.app} style={cssResize}>
      <div
        className={classnames({
          [style.rect]: true,
          [style.drop]: true
        })}
      >
        <Decorate />
        <div className={style.screen}>
          <div className={style.panel}>
            <Matrix matrix={matrix} cur={cur} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
