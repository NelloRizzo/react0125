import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { drawInitialState, DrawModel } from "./draw-model";

const drawSlice = createSlice({
    name: 'draw',
    initialState: drawInitialState,
    reducers: {
        mouseMove: (state: DrawModel, action: PayloadAction<{ x: number, y: number }>) => ({ ...state, mousePosition: { x: action.payload.x, y: action.payload.y } })
    }
})

export const { mouseMove } = drawSlice.actions
export default drawSlice.reducer