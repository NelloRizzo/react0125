import { configureStore } from "@reduxjs/toolkit";
import blogReducer from './blog/store-slice/blog-slice'
import userReducer from './users/store-slice/user-slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        blog: blogReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useApplicationDispatch: () => AppDispatch = useDispatch
export const useApplicationSelector: TypedUseSelectorHook<RootState> = useSelector

export default store