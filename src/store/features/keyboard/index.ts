import { combineReducers } from '@reduxjs/toolkit'
import drop from './dropSlice'

const keyboardReducer = combineReducers({
  drop
})

export default keyboardReducer
