export type CalculatorRadix = 2 | 8 | 10 | 16

export interface DeveloperCalculatorState {
    accumulator: number
    display: string
    radix: CalculatorRadix
    mustClear: boolean
    nextOperation: string
    hasError: boolean
}

export const initialState: DeveloperCalculatorState = {
    accumulator: 0,
    radix: 10,
    display: '0',
    mustClear: true,
    nextOperation: '=',
    hasError: false
}

