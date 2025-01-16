import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from './weather-slice'

export const store = configureStore({
    reducer: {
        wheather: weatherReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch