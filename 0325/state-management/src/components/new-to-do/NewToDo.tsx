import { FC, useState } from "react";
import { Task } from "../../store/tasks";
//import { useDispatch } from "react-redux";
import { useApplicationDispatch } from "../../store/store";
import { addTask } from "../../store/taskSlice";

const NewToDo: FC = () => {
    const [task, setTask] = useState<Task>({ id: 0, title: '', completed: false })
    //const dispatch = useDispatch()
    const dispatch = useApplicationDispatch()

    const onAddTask = () => {
        //dispatch({ type: 'ADD_TASK', payload: task })
        dispatch(addTask(task))
        setTask({ ...task, title: '' })
    }

    return (
        <div className="new-to-do">
            <label htmlFor="title">Titolo</label>
            <input name="title" id="title" value={task.title} onChange={(e) => setTask(t => ({ ...t, title: e.target.value }))} />
            <button disabled={!task.title.length} onClick={onAddTask}>Add Task</button>
        </div>
    )
}

export default NewToDo