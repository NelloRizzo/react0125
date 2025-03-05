import { ApplicationAction } from "./actions";
import { TaskState, initialState } from "./tasks";

export const taskReducer = (
    state: TaskState = initialState,
    action: ApplicationAction
): TaskState => {
    switch (action.type) {
        case 'ADD_TASK':
            action.payload.id = Math.max(...state.map(t => t.id), 0) + 1
            return [...state, { ...action.payload }]
        case 'REMOVE_TASK':
            return state.filter(t => t.id !== action.payload)
        case 'TOGGLE_TASK':
            return state.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t)
        default:
            return state
    }
}