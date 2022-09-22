import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import matrixSlice from './features/matrixSlice'
import curSlice from './features/curSlice'
import startLines from './features/startLines'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    matrix: matrixSlice,
    cur: curSlice,
    startLines: startLines
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
