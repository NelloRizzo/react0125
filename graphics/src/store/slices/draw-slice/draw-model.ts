export interface DrawModel {
    mousePosition: {
        x: number
        y: number
    }
    shape: 'line' | 'point'
    color: string
}

export const drawInitialState: DrawModel = {
    mousePosition: { x: 0, y: 0 },
    shape: 'line',
    color: 'black'
}