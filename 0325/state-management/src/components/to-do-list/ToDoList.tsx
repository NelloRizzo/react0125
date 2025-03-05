import { FC } from "react";
import { useApplicationDispatch, useApplicationSelector } from "../../store/store";
import { removeTask } from "../../store/taskSlice";
//import { useSelector } from "react-redux";
//import { ApplicationState } from "../../store/tasks";

const ToDoList: FC = () => {
    //const tasks = useSelector<ApplicationState, ApplicationState>(state => state)
    const tasks = useApplicationSelector(state => state.tasks)
    const dispatch = useApplicationDispatch()
    return (
        <div className="to-do-list">
            <h1>Tasks</h1>
            <ul>
                {
                    tasks.map(t => (
                        <li key={t.id} className={t.completed ? 'completed' : ''}>
                            {t.title}
                            <button onClick={() => dispatch(removeTask(t.id))}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoList