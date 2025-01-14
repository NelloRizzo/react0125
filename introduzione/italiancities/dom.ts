import { CityService } from './services/cities-service.js'

document.addEventListener('DOMContentLoaded', async () => {
    // la select di visualizzazione delle province
    const provinces: HTMLSelectElement = document.getElementById('provinces')! as HTMLSelectElement
    // la select di visualizzazione delle città
    const cities: HTMLSelectElement = document.getElementById('cities')! as HTMLSelectElement
    // creo una istanza del servizio di recupero dei dati da remoto
    const service = new CityService();

    // funzione di popolamento delle città
    const selectCity = async (acronym: string) => {
        // ottengo le città
        const citiesList = await service.getCities(acronym)
        // riempio la select
        cities.replaceChildren(
            // aggiungo le options
            ...citiesList.map(c => {
                const opt = document.createElement('option')
                opt.innerText = c.name
                opt.value = c.cadastralCode
                return opt
            })
        )
    }

    // ottengo le province dal servizio
    const provinceList = await service.getProvinces()
    // riempio la select
    provinces.replaceChildren(
        // creo un array di options
        ...provinceList.map(p => {
            const opt = document.createElement('option')
            opt.innerText = p.acronym
            opt.setAttribute('value', p.acronym)
            return opt
        }))
    // sull'evento change richiamo il popolamento delle città
    provinces.addEventListener('change', async () => await selectCity(provinces.value))
    // seleziono la città della provincia selezionata dopo il popolamento delle province
    await selectCity(provinces.value)
})