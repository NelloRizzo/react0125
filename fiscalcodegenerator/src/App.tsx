import { useState } from 'react'
import './App.scss'
import PersonaDataForm from './PersonalDataForm/PersonaDataForm'
import PersonalData, { initialState } from './model/personal-data'
import FiscalCodeViewer from './FiscalCodeViewer/FiscalCodeViewer'
import FiscalCodeService from './services/fiscalcode-service'

function App() {
  const [data, setData] = useState<PersonalData>(initialState)
  const [valid, setValid] = useState<boolean>(false)
  const [fiscalCode, setFiscalCode] = useState<string>('')
  const update = (s: PersonalData) => {
    setData(s)
    setValid(s.birthCity.length * s.firstName.length * s.lastName.length != 0)
  }

  return (
    <div className='content'>
      <h1>Generatore di Codice Fiscale</h1>
      <PersonaDataForm data={data} onUpdate={update}></PersonaDataForm>
      <button disabled={!valid} onClick={() => {
        const service = new FiscalCodeService(data)
        setFiscalCode(service.getFiscalCode())
      }}>Calcola</button>
      <FiscalCodeViewer fiscalCode={fiscalCode} data={data}></FiscalCodeViewer>
    </div>
  )
}

export default App
