export interface City {
    code: string
    name: string
    cadastralCode: string
    zips: string[]
    people: number
    province: Province
}

export interface Province {
    code: string
    name: string
    acronym: string
    region: Region
}

export interface Region {
    code: string
    name: string
    area: Area
}

export interface Area {
    code: string
    name: string
}