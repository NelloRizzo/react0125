import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CalculatorRadix, DeveloperCalculatorState, initialState } from "../../services/DeveloperCalculator/DeveloperCalculatorState"
import { DeveloperCalculatorService, DeveloperDigit } from "../../services/DeveloperCalculator/DeveloperCalculatorService"

const developerCalculatorSlice = createSlice({
    name: 'Standard',
    initialState: initialState,
    reducers: {
        addDigit(state: DeveloperCalculatorState, action: PayloadAction<DeveloperDigit>) {
            const service = new DeveloperCalculatorService({ ...state })
            service.addDigit(action.payload)
            return { ...service.state }
        },
        binaryOperation(state: DeveloperCalculatorState, action: PayloadAction<string>) {
            const service = new DeveloperCalculatorService({ ...state })
            service.execute(action.payload)
            return { ...service.state }
        },
        unaryOperation(state: DeveloperCalculatorState, action: PayloadAction<string>) {
            const service = new DeveloperCalculatorService({ ...state })
            service.unaryOperation(action.payload)
            return { ...service.state }
        },
        clearError(state) {
            const service = new DeveloperCalculatorService({ ...state })
            service.clearError()
            return { ...service.state }
        },
        clear(state) {
            const service = new DeveloperCalculatorService({ ...state })
            service.clear()
            return { ...service.state }
        },
        changeSignum(state) {
            const service = new DeveloperCalculatorService({ ...state })
            service.changeSignum()
            return { ...service.state }
        },
        backspace(state) {
            const service = new DeveloperCalculatorService({ ...state })
            service.backspace()
            return { ...service.state }
        },
        changeRadix(state, action: PayloadAction<CalculatorRadix>) {
            const service = new DeveloperCalculatorService({ ...state })
            service.changeRadix(action.payload)
            return { ...service.state }
        }
    }
})

export const { addDigit, binaryOperation, unaryOperation, clear, clearError, changeSignum, backspace, changeRadix } = developerCalculatorSlice.actions
export default developerCalculatorSlice.reducer