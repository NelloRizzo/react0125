export interface Task {
    id: number
    title: string
    completed: boolean
}

export type TaskState = Task[]

export const initialState: TaskState = Array.from({ length: 10 })
    .map((_, i) => ({
        id: i + 1, title: `Task ${i + 1}`, completed: Math.random() > .5
    }))