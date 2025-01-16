import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from './library-slice'

export const store = configureStore({
    reducer: {
        library: libraryReducer
    }
})

export type ApplicationState = ReturnType<typeof store.getState>
export type ApplicationDispatch = typeof store.dispatch