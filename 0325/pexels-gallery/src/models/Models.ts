export interface Photo {
    id: number
    width: number
    height: number
    url: string
    photographer: string
    photographer_url: string
    protographer_id: string
    avg_color: string
    src: Source
    liked: boolean
    alt: string
}

export interface Source {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
}