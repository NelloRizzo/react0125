import { FC, useState } from 'react';
import Task from './Task';
import './TaskEditComponent.scss';
const TaskEditComponent: FC<{ task: Task, onSave: (t: Task) => void }> = ({ task, onSave }) => {
    const [editTask, setEditTask] = useState<Task>(task);
    return (
        <div className='task-edit'>
            <label>Title:</label>
            <input type="text" value={editTask.title} onChange={(e) => setEditTask(t => ({ ...t, title: e.target.value }))} />
            <label>Description:</label>
            <textarea value={editTask.description} onChange={(e) => setEditTask(t => ({ ...t, description: e.target.value }))}></textarea>
            <button onClick={() => onSave(editTask)}>Save</button>
        </div>
    );
}
export default TaskEditComponent;