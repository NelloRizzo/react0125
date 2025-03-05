import { Provider } from 'react-redux'
import './App.scss'
import store from './store/store'
import ToDoList from './components/to-do-list/ToDoList'
import NewToDo from './components/new-to-do/NewToDo'
import LastAddedTask from './components/last-added-task/LastAddedTask'

function App() {

  return (
    <Provider store={store}>
      <NewToDo/>
      <LastAddedTask/>
      <ToDoList />
    </Provider>
  )
}

export default App
