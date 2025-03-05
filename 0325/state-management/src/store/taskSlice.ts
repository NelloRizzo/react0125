import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, Task } from "./tasks";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            action.payload.id = Math.max(...state.map(t => t.id), 0) + 1
            return [...state, { ...action.payload }]
        },
        removeTask: (state, action: PayloadAction<number>) => state.filter(t => t.id !== action.payload),
        toggleTask: (state, action: PayloadAction<number>) => state.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t)
    }
})

export const { addTask, removeTask, toggleTask } = taskSlice.actions
export default taskSlice.reducer