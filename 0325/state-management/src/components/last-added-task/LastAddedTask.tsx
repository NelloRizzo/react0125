import { FC } from "react";
import { useApplicationSelector } from "../../store/store";

const LastAddedTask: FC = () => {
    const task = useApplicationSelector(s => s.tasks.length ? s.tasks[s.tasks.length - 1] : undefined)
    return (
        <div className="last-added-task">
            <h1>{task?.title ?? 'Nessun Task'}</h1>
        </div>
    )
}

export default LastAddedTask