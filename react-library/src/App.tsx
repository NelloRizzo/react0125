import './App.scss'
import BookEdit from './components/BooksEdit/BookEdit'
import BooksList from './components/BooksList/BooksList'

function App() {
  return (
    <div className='app'>
      <h1>Gestione Libreria</h1>
      <BookEdit></BookEdit>
      <BooksList></BooksList>
    </div>
  )
}

export default App
