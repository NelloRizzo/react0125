import { configureStore } from "@reduxjs/toolkit";
import drawReducer from "./slices/draw-slice/draw-slice";

export const store = configureStore({
    reducer: {
        draw: drawReducer
    }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
