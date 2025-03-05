//import { legacy_createStore as createStore} from 'redux'
//import { taskReducer } from "./reducers";

import { configureStore } from "@reduxjs/toolkit"
import taskReducer from './taskSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

//const store = createStore(taskReducer)

const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type ApplicationDispatcher = typeof store.dispatch

export const useApplicationDispatch: () => ApplicationDispatcher = useDispatch
export const useApplicationSelector: TypedUseSelectorHook<RootState> = useSelector

export default store