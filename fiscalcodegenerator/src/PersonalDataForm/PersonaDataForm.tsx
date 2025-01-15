import { useEffect, useState } from "react"
import PersonalData from "../model/personal-data"
import SelectCity from "../SelectCity/SelectCity"

interface PersonalDataFormProps {
    data: PersonalData
    onUpdate?: (s: PersonalData) => void
}

export default function PersonaDataForm({ data, onUpdate }: PersonalDataFormProps) {
    const [input, setInput] = useState(data)

    // gestione degli effetti collaterali legati al cambiamento di stato
    useEffect(
        // metodo che viene richiamato quando si verifica l'effetto collaterale
        () => { if (onUpdate) onUpdate(input) },
        // l'effetto collaterale si verifica sulla base del cambiamento di una delle dipendenze specificate in questo array
        [input])

    const updateState = (e: any) => {
        const [field, value] = [e.target.id, e.target.value]
        setInput(s => ({ ...s, [field]: value }))
    }

    return (
        <div className='form'>
            <h2>Dati Anagrafici</h2>

            <div className='input-row'>
                <label htmlFor='firstName'>Nome</label>
                <input id='firstName' defaultValue={input.firstName} onChange={updateState} />
            </div>
            <div className='input-row'>
                <label htmlFor='lastName'>Cognome</label>
                <input id='lastName' defaultValue={input.lastName} onChange={updateState} />
            </div>
            <div className='input-row'>
                <label htmlFor='birthday'>Data di nascita</label>
                <input id='birthday' type='date' defaultValue={input.birthday.toISOString().slice(0, 10)}
                    onChange={(e) => setInput(s => ({ ...s, birthday: new Date(e.target.value) }))}
                />
            </div>
            <div className='input-row'>
                <label htmlFor='gender_male'>Sesso</label>
                <input id='gender_male' type='radio' checked={input.gender === 'm'} value='m'
                    onChange={() => setInput(s => ({ ...s, gender: 'm' }))} />M
                <input type='radio' checked={input.gender === 'f'} value='f' onChange={() => setInput(s => ({ ...s, gender: 'f' }))} />F
            </div>
            <div className='input-row'>
                <label htmlFor='birthCity'>Città di nascita</label>
                <SelectCity province={data.birthProvince} city={data.birthCity} cityChanged={(c) => setInput(s => ({ ...s, birthCity: c }))} />
            </div>
        </div>
    )
}