import { FC, useState } from 'react'
import './App.scss'

interface AppProps {
  name?: string
  times?: number
}

const App: FC<AppProps> = ({ name, times }) => {
  const [state, setState] = useState(10)
  return (
    <div className="App">
      <h1>Welcome to My React App, {name ?? 'World'}!</h1>
      <p>State: {state}</p>
      {Array.from({ length: times ?? 0 }, (_, i) => (
        <p key={i}>This is the {i + 1} time</p>
      ))}
    </div>
  )
}

export default App
