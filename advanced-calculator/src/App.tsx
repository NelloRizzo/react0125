import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Calculator } from './components/StandardCalculator/Calculator'
import { MainMenu } from './components/MainMenu/MainMenu'
import { AdvancedCalculator } from './components/DeveloperCalculator/DeveloperCalculator'

function App() {

  return (
    <BrowserRouter>
      <div className='content'>
        <MainMenu />
        <main>
          <Routes>
            <Route path='/standard' element={<Calculator />}></Route>
            <Route path='/developer' element={<AdvancedCalculator />}></Route>
            <Route path='*' element={<Calculator />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
