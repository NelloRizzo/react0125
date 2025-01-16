import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./counter-state";

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.value = (state.value + 1) % (state.max - state.min) },
        decrement: (state) => { state.value = (state.value - 1) % (state.max - state.min) },
        incrementBy: (state, action: PayloadAction<number>) => { state.value = (state.value + action.payload) % (state.max - state.min) }
    }
})

export const { increment, decrement, incrementBy } = counterSlice.actions
export default counterSlice.reducer