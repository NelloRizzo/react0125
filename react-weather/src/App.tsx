import { useState } from 'react'
import './App.scss'
import { fetchWeather } from './store-management/services/weather-fetch'
import { useDispatch, useSelector } from 'react-redux'
import ShowCurrentWeather from './components/ShowCurrentWeather/ShowCurrentWeather'
import { RootState } from './store-management/store'

function App() {
  const [location, setLocation] = useState('')
  const dispatch = useDispatch()
  const wheather = useSelector((s: RootState) => s.wheather)
  return (
    <div className='weather-forecast-app'>
      <h1>Previsioni del Tempo</h1>
      <div className='input'>
        <input defaultValue={location} onChange={(e) => setLocation(e.target.value)} />
        <button onClick={() => dispatch(fetchWeather(location))}>Carica</button>
      </div>
      <div className='weather'>
        {wheather.status === 'loading' && <p>Loading...</p>}
        {wheather.status === 'failed' && <p>Failed!</p>}
        {wheather.data && (
          <ShowCurrentWeather />
        )}
      </div>
    </div>
  )
}

export default App
