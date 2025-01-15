import { configureStore } from "@reduxjs/toolkit";
import standardCalculatorReducer from './Calculators/standard-calculator-slice'
import developerCalculatorReducer from './Calculators/developer-calculator-slice'

const store = configureStore({
    reducer: {
        standardCalculator: standardCalculatorReducer,
        developerCalculator: developerCalculatorReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store