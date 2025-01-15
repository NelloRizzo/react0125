import { ToDo } from "../to-do-list/ToDoModel"

interface ToDoItemProps {
    todo: ToDo
    toggleComplete?: (id: number) => void
    className?: string
}
export default function ToDoItem({ todo, toggleComplete, className }: ToDoItemProps) {
    return (
        <div className={`li ${todo.completed ? 'completed' : ''} ${className}`}
            onClick={() => { if (toggleComplete) toggleComplete(todo.id) }}>{todo.title}</div>
    )
}