import { configureStore } from "@reduxjs/toolkit";
import gameStatusReducer from './tic-tac-toe-slice'

export const store = configureStore({
    reducer: {
        tictactoe: gameStatusReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch