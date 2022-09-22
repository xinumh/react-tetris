import React from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getStartMatrix } from '../control/states'
import { createMatrix } from '@/store/features/matrixSlice'

const useStart = () => {
  const { startLines } = useAppSelector((store) => store)
  console.log('startLines', startLines)
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    const startMatrix = getStartMatrix(3)
    dispatch(createMatrix(startMatrix))
  }, [startLines])
}

export default useStart
