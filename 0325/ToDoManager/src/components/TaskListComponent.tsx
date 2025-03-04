import { useState } from "react";
import Task from "./Task";
import TaskViewComponent from "./TaskViewComponent";
import './TaskListComponent.scss';
import TaskEditComponent from "./TaskEditComponent";
const TaskListComponent = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
        { id: 2, title: 'Task 2', description: 'Description 2', completed: false },]);

    const [editTask, setEditTask] = useState<Task>({ id: 0, title: '', description: '', completed: false });

    const handleTaskCompletion = (id: number) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    function handleEdit(task: Task): void {
        setEditTask(task);
    }

    const saveTask = (task: Task) => {
        if (task.id !== 0) {
            setTasks(prevTasks => prevTasks.map(t => task.id === t.id ? task : t));
        } else {
            setTasks(prevTasks => [...prevTasks, { id: prevTasks.length + 1, title: task.title, description: task.description, completed: false }]);
        }
        setEditTask({ id: 0, title: '', description: '', completed: false });
    };

    return (
        <div className="task-list">
            <button onClick={() => setEditTask({ id: 0, title: '', description: '', completed: false })}>New Task</button>
            <div className="form">
                <TaskEditComponent task={editTask} onSave={saveTask} />
            </div>
            <div className="list">
                {tasks.map(task =>
                    <div key={task.id} onClick={() => handleTaskCompletion(task.id)}>
                        <TaskViewComponent task={task} handleEdit={handleEdit} />
                    </div>
                )}

            </div>
        </div>
    )
}

export default TaskListComponent;