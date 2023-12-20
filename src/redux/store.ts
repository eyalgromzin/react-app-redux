import { configureStore } from "@reduxjs/toolkit";
import rootSlice from './rootSlice'

const store = configureStore({ 
    reducer: {
        person: rootSlice
    } 
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
