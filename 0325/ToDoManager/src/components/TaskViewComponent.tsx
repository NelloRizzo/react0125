import { FC, useState } from "react";
import Task from "./Task";
import './TaskViewComponent.scss';

export interface TaskViewProps {
    task: Task;
    handleEdit: (task: Task) => void;
}
const TaskViewComponent: FC<TaskViewProps> = ({ task, handleEdit }) => {
    const [visibility, setVisibility] = useState(false);
    return (
        <div className="task">
            <h3 className={`title ${task.completed ? 'completed' : 'pending'}`}>{task.title}
                <span onClick={(e) => { setVisibility(!visibility); e.stopPropagation() }}>
                    <span className="icon">{visibility ? '🔼' : '🔽'}</span>
                </span>
                <span className="edit-icon" onClick={(e) => { handleEdit(task); e.stopPropagation() }}>✏️</span>
            </h3>
            <p className={`description ${visibility ? '' : 'hidden'}`}>{task.description}</p>
        </div>
    );
}
export default TaskViewComponent;