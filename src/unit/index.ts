import { blockType } from './const'

export const getNextType = () => {
  // 随机获取下一个方块类型
  const len = blockType.length
  return blockType[Math.floor(Math.random() * len)]
}
