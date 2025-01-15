import { FC } from 'react'
import './App.scss'
import Calculator from './components/calculator/Calculator'
import ToDoList from './components/to-do-list/ToDoList'

const App: FC = () => {
  return (
    <div className='content'>
      <h1>Welcome!</h1>
      <Calculator></Calculator>
      <ToDoList></ToDoList>
    </div>
  )
}

export default App
