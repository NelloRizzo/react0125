export interface CounterState {
    value: number,
    min: number,
    max: number
}

export const initialState: CounterState = { value: 10, min: 10, max: 100 }