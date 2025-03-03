import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import ClockComponent from './components/ClockComponent'
import ClockFC from './components/ClockFC'
import ComplexClock from './components/complex-clock/ComplexClock'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClockComponent />
    <ClockFC />
    <ComplexClock/>
  </StrictMode>,
)
