import './App.scss'
import SimpleAxiosComponent from './components/SimpleAxiosComponent'
import SimpleFetchComponent from './components/SimpleFetchComponent'
import SimplePromiseComponent from './components/SimplePromiseComponent'

function App() {

  return (
    <div className="app">
      <header className="header">
      </header>
      <main className="main">
        <h1>Promises e Data Fetching</h1>
        <SimplePromiseComponent />
        <SimpleAxiosComponent />
      </main>
    </div>
  )
}

export default App
