import { useState } from "react";
import './SimpleFetchComponent.scss';
import React from "react";
interface ToDo {
  userId: number
  id: number
  title: string
  completed: boolean
}
const SimpleFetchComponent = () => {
  const [state, setState] = useState('idle');
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const fetchData = () => {
    setState('loading');
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setState('success');
        setToDos(data);
      })
      .catch((error) => {
        setState('error');
        console.error(error);
      });
  };

  return (
    <div className="simple-fetch">
      <button onClick={fetchData}>Fetch Data</button>
      <div>{state}</div>
      <dl>
        {toDos.map((toDo) => (
          <React.Fragment key={toDo.id}>
            <dt>{toDo.title}</dt>
            <dd>{toDo.completed ? 'completed' : 'not completed'}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>

  );
}

export default SimpleFetchComponent;