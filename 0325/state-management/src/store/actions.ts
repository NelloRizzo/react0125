import { Task } from "./tasks"
import { Action } from "redux"

//type AddTaskAction = { type: 'ADD_TASK', payload: Task }
//type RemoveTaskAction = { type: 'REMOVE_TASK', payload: number }
//type ToggleTaskAction = { type: 'TOGGLE_TASK', payload: number }

// Azione che riceve in input (payload) un task
// e lo aggiunge allo stato
interface AddTaskAction extends Action<'ADD_TASK'> {
    payload: Task
}
// Azione che riceve in input l'id di un task e 
// lo rimuove dallo stato
interface RemoveTaskAction extends Action<'REMOVE_TASK'> {
    payload: number
}
// Azione che modifica l'attributo completed di un task
interface ToggleTaskAction extends Action<'TOGGLE_TASK'> {
    payload: number
}

export type ApplicationAction =
    AddTaskAction | RemoveTaskAction | ToggleTaskAction