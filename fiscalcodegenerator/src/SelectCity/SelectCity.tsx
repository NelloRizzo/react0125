import { useEffect, useState } from 'react'
import './SelectCity.scss'
import { City, Province } from '../model/city-model'
import { CityService } from '../services/cities-service'

interface SelectCityProps {
    province: string,
    city: string
    cityChanged?: (c: string) => void
}
export default function SelectCity({ cityChanged, city, province }: SelectCityProps) {
    const [provinces, setProvinces] = useState<Province[]>([])
    const [cities, setCities] = useState<City[]>([])
    const [selectedProvince, setSelectedProvince] = useState<string>('')
    const [selectedCity, setSelectedCity] = useState<string>(city)

    const service = new CityService()

    useEffect( 
        () => {
            service.getProvinces().then(p => {
                setProvinces(p)
                setSelectedProvince(province)
            })
        }
        , []) // array vuoto: l'effetto avviene una sola volta al montaggio del componente nella vista

    useEffect(
        () => {
            const fetchCities = async () => {
                const cities = await service.getCities(selectedProvince)
                setCities(cities)
            }
            fetchCities()
        },
        [selectedProvince]) // l'effetto avviene quando cambia la variabile nell'array

    useEffect(() => { if (cityChanged) cityChanged(selectedCity) }, [selectedCity])

    return (
        <div className="city-selector">
            <select className="provinces" defaultValue={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)}>
                {
                    provinces.map(p => (
                        <option selected={p.acronym === selectedProvince} value={p.acronym}>{p.acronym}</option>
                    ))
                }
            </select>
            <select className='cities' defaultValue={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {
                    cities.map(c => (
                        <option selected={c.cadastralCode === selectedCity} value={c.cadastralCode}>{c.name}</option>
                    ))
                }
            </select>
        </div>
    )
}