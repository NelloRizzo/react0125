import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter-slice'

export const appStore = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type StoreState = ReturnType<typeof appStore.getState>
export type ApplicationDispatch = typeof appStore.dispatch