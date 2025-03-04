import { useState } from 'react'
import './App.scss'
import Cities from './components/cities/Cities'
import Provinces from './components/provinces/Provinces'

function App() {
  const [selectedProvince, setSelectedProvince] = useState<string | undefined>(undefined)
  return (
    <div className="app">
      <h1>Web Api Samples</h1>
      <main>
        <div className='left'>
          <Provinces onProvinceSelected={(a) => setSelectedProvince(a)} />
        </div>
        <div className='right'>
          <Cities acronym={selectedProvince} />
        </div>
      </main>
    </div>)
}

export default App
