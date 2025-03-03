import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import ClockComponent from './components/ClockComponent'
import ClockFC from './components/ClockFC'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClockComponent />
    <ClockFC />
  </StrictMode>,
)
