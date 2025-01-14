import { City, Province } from "../models/city-model"

interface JsonCity {
    nome: string
    codice: string
    zona: {
        codice: string
        nome: string
    },
    regione: {
        codice: string
        nome: string
    },
    provincia: {
        codice: string
        nome: string
    },
    sigla: string
    codiceCatastale: string
    cap: string[]
    popolazione: number
}

const CITIES_URL = "https://raw.githubusercontent.com/matteocontrini/comuni-json/refs/heads/master/comuni.json"

export class CityService {
    private async getJsonCities(): Promise<JsonCity[]> {
        const response = await fetch(CITIES_URL)
        return await response.json()
    }

    private async getAllCities(): Promise<City[]> {
        const cities = await this.getJsonCities()
        return cities.map(c => ({
            code: c.codice,
            name: c.nome,
            cadastralCode: c.codiceCatastale,
            zips: c.cap,
            people: c.popolazione,
            province: {
                code: c.provincia.codice,
                name: c.provincia.nome,
                acronym: c.sigla,
                region: {
                    code: c.regione.codice,
                    name: c.regione.nome,
                    area: {
                        code: c.zona.codice,
                        name: c.zona.nome
                    }
                }
            }
        }))
    }

    async getCities(acronym: string): Promise<City[]> {
        return (await this.getAllCities()).filter(c => c.province.acronym === acronym)
    }

    async getProvinces(): Promise<Province[]> {
        const cities = await this.getAllCities()
        return Array.from(new Map(cities.map(c => [c.province.code, c.province])).values()).sort((p1, p2) => p1.name < p2.name ? -1 : 1)
    }

    async getCityById(id: string): Promise<City | undefined> {
        return (await this.getAllCities()).filter(c => c.code === id).shift()
    }
}