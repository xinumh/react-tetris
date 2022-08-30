import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import keyboard from './features/keyboard/index'
import curSlice from './features/curSlice'
import clearLinesSlice from './features/clearLinesSlice'
import startLinesSlice from './features/startLinesSlice'
import speedRunSlice from './features/speedRunSlice'
import speedStartSlice from './features/speedStartSlice'
import nextSlice from './features/nextSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    cur: curSlice,
    next: nextSlice,
    clearLines: clearLinesSlice,
    startLines: startLinesSlice,
    speedRun: speedRunSlice,
    speedStart: speedStartSlice,
    keyboard: keyboard
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
