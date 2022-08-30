export const transform = (function () {
  const trans = [
    'transform',
    'webkitTransform',
    'msTransform',
    'mozTransform',
    'oTransform'
  ]
  const body = document.body
  return trans.filter((e: unknown) => body.style[e as any] !== undefined)[0]
})()

export const origin = {
  I: [
    [-1, 1],
    [1, -1]
  ],
  L: [[0, 0]],
  J: [[0, 0]],
  Z: [[0, 0]],
  S: [[0, 0]],
  O: [[0, 0]],
  T: [
    [0, 0],
    [1, 0],
    [-1, 1],
    [0, -1]
  ]
}

const StorageKey = 'REACT_TETRIS'
export const lastRecord: any = (() => {
  // 上一把的状态
  let data = localStorage.getItem(StorageKey)
  if (!data) {
    return false
  }
  try {
    if (window.btoa) {
      data = atob(data)
    }
    data = decodeURIComponent(data)
    data = JSON.parse(data)
  } catch (e) {
    if (window.console || window.console.error) {
      window.console.error('读取记录错误:', e)
    }
    return false
  }
  return data
})()

export const blockShape: any = {
  I: [[1, 1, 1, 1]],
  L: [
    [0, 0, 1],
    [1, 1, 1]
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1]
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1]
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0]
  ],
  O: [
    [1, 1],
    [1, 1]
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1]
  ]
}

export const blockType = Object.keys(blockShape)
