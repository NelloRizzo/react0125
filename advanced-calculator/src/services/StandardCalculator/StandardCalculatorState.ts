export interface StandardCalculatorState {
    accumulator: number
    display: string
    mustClear: boolean
    nextOperation: string
    hasError: boolean
}

export const initialState: StandardCalculatorState = {
    accumulator: 0,
    display: '0,0',
    mustClear: true,
    nextOperation: '=',
    hasError: false
}

