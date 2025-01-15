import { useState } from "react"
import './ToDoList.scss'
import { ToDo } from "./ToDoModel"
import ToDoItem from "../to-do-item/ToDoItem"

export default function ToDoList() {
    const [todos, setToDos] = useState<ToDo[]>([])
    const [todo, setToDo] = useState('')

    const complete = (id: number): void => {
        const list = [...todos]
        const todo = list.filter(t => t.id === id)[0]
        todo.completed = !todo.completed
        setToDos(list)
    }
    return (
        <div className="todo-list">
            <h1>Cose da Fare</h1>
            <div className="new-todo">
                <input onChange={(e) => setToDo(e.target.value)} />
                <input onChange={(e) => setToDo(e.target.value)} />
                <input onChange={(e) => setToDo(e.target.value)} />
                <button onClick={() => setToDos([...todos, { id: todos.length + 1, title: todo, completed: false }])}>Aggiungi</button>
            </div>
            <div className="ul">
                {
                    todos.map(t => (
                        <ToDoItem todo={t} toggleComplete={complete} className={'test'}/>
                    ))
                }
            </div>
        </div>
    )
}