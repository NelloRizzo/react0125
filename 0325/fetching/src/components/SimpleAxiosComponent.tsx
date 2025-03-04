import { useState } from "react";
import './SimpleFetchComponent.scss';
import React from "react";
import axios from "axios";
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
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setState('success');
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        setToDos(response.data);
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