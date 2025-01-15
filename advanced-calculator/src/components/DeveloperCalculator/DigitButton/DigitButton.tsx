import { FC } from "react"
import { DeveloperDigit } from "../../../services/DeveloperCalculator/DeveloperCalculatorService"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../state-management/store"
import { useDispatch } from "react-redux"
import { addDigit } from "../../../state-management/Calculators/developer-calculator-slice"

interface DigitButtonProps {
    digit: DeveloperDigit
}

export const DigitButton: FC<DigitButtonProps> = ({ digit }) => {
    const currentRadix = useSelector((s: RootState) => s.developerCalculator.radix)
    const dispatch = useDispatch<AppDispatch>()

    if (Number.parseInt(digit, currentRadix) <= currentRadix)
        return (
            <div className="button" onClick={() => dispatch(addDigit(digit))}>{digit}</div>
        )
    else
        return (
            <div className="button disabled">{digit}</div>
        )
}