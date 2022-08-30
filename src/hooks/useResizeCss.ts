import { transform } from '@/unit/const'
import React from 'react'

function useResizeCss() {
  const [state, setState] = React.useState({
    w: document.documentElement.clientWidth,
    h: document.documentElement.clientHeight
  })

  const filling = React.useRef(null)

  const resize = React.useCallback(() => {
    setState({
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight
    })
  }, [])

  const cssResize = React.useMemo(() => {
    filling.current = 0
    const { w, h } = state
    const ratio = h / w
    let scale
    let css: any = {}
    if (ratio < 1.5) {
      scale = h / 960
    } else {
      scale = w / 640
      filling.current = (h - 960 * scale) / scale / 3
      css = {
        paddingTop: Math.floor(filling.current) + 42,
        paddingBottom: Math.floor(filling.current),
        marginTop: Math.floor(-480 - filling.current * 1.5)
      }
      css[transform] = `scale(${scale})`
    }
    return css
  }, [state])

  React.useEffect(() => {
    window.addEventListener('resize', resize)
  }, [])

  return { filling: filling.current, cssResize }
}

export default useResizeCss
