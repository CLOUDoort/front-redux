import { configureStore } from '@reduxjs/toolkit'
import tempReducer from './reducers/tempSlice'

export const store = configureStore({
    reducer: {
        temp: tempReducer,
    },
    // 다양한 reducer 추가가능
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// redux 세팅
