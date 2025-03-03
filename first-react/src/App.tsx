import { FC } from 'react'
import './App.scss'
import Calculator from './components/calculator/Calculator'
import ToDoList from './components/to-do-list/ToDoList'
import ClassComponent from './components/class-component/ClassComponent'

const App: FC = () => {
  return (
    <div className='content'>
      <h1>Welcome!</h1>
      <ClassComponent times={5}></ClassComponent>
    </div>
  )
}

export default App
