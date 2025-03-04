export interface Province {
    id: number
    name: string
    acronym: string
    region: {
        id: number
        name: string
        area: {
            id: number
            name: string
        }
    }
}