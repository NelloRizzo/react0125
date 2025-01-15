import { initialState, StandardCalculatorState } from "../../services/StandardCalculator/StandardCalculatorState";
import { Digit, StandardCalculatorService } from "../../services/StandardCalculator/StandardCalculatorService";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const standardCalculatorSlice = createSlice({
    name: 'Standard',
    initialState: initialState,
    reducers: {
        addDigit(state: StandardCalculatorState, action: PayloadAction<Digit>) {
            const service = new StandardCalculatorService({ ...state })
            service.addDigit(action.payload)
            return { ...service.state }
        },
        addComma(state: StandardCalculatorState) {
            const service = new StandardCalculatorService({ ...state })
            service.addComma()
            return { ...service.state }
        },
        binaryOperation(state: StandardCalculatorState, action: PayloadAction<string>) {
            const service = new StandardCalculatorService({ ...state })
            service.execute(action.payload)
            return { ...service.state }
        },
        unaryOperation(state: StandardCalculatorState, action: PayloadAction<string>) {
            const service = new StandardCalculatorService({ ...state })
            service.unaryOperation(action.payload)
            return { ...service.state }
        },
        clearError(state) {
            const service = new StandardCalculatorService({ ...state })
            service.clearError()
            return { ...service.state }
        },
        clear(state) {
            const service = new StandardCalculatorService({ ...state })
            service.clear()
            return { ...service.state }
        },
        changeSignum(state) {
            const service = new StandardCalculatorService({ ...state })
            service.changeSignum()
            return { ...service.state }
        },
        backspace(state) {
            const service = new StandardCalculatorService({ ...state })
            service.backspace()
            return { ...service.state }
        }
    }
})

export const { addDigit, addComma, binaryOperation, unaryOperation, clear, clearError, changeSignum , backspace} = standardCalculatorSlice.actions
export default standardCalculatorSlice.reducer