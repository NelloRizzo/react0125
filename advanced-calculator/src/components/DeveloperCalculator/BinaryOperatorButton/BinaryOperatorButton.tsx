import { useDispatch } from "react-redux"
import { FC, ReactNode } from "react"
import { AppDispatch } from "../../../state-management/store"
import { binaryOperation } from "../../../state-management/Calculators/standard-calculator-slice"

interface BinaryOperatorByttonProps {
    operation: string
    children: ReactNode
}

export const BinaryOperatorBytton: FC<BinaryOperatorByttonProps> = ({ operation, children }) => {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="button" onClick={() => dispatch(binaryOperation(operation))}>{children}</div>
    )
}