import { useDispatch } from "react-redux"
import { Digit } from "../../../services/StandardCalculator/StandardCalculatorService"
import { FC } from "react"
import { AppDispatch } from "../../../state-management/store"
import { addDigit } from "../../../state-management/Calculators/standard-calculator-slice"

interface DigitButtonProps {
    digit: Digit 
}

export const DigitButton: FC<DigitButtonProps> = ({ digit }) => {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="button" onClick={() => dispatch(addDigit(digit as Digit))}>{digit}</div>
    )
}