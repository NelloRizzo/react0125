import './App.scss'
import CounterUpdater from './CounterUpdater/CounterUpdater'
import CounterViewer from './CounterViewer/CounterViewer'

function App() {
  return (
    <div className='app'>
      <h1>Gestione dello Stato tramite Redux</h1>
      <CounterViewer></CounterViewer>
      <CounterUpdater></CounterUpdater>
    </div>
  )
}

export default App
