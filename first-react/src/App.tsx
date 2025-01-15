import { FC } from 'react'
import './App.scss'
import Calculator from './components/calculator/Calculator'

const App: FC = () => {
  return (
    <div className='content'>
      <h1>Welcome!</h1>
      <Calculator></Calculator>
    </div>
  )
}

export default App
