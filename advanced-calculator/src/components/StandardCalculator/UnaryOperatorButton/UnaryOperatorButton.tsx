import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state-management/store";
import { unaryOperation } from "../../../state-management/Calculators/standard-calculator-slice";

interface UnaryOperatorButtonProps {
    operation: string
    children: ReactNode
}
export const UnaryOperatorButton: FC<UnaryOperatorButtonProps> = ({ operation, children }) => {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="button" onClick={() => dispatch(unaryOperation(operation))}>{children}</div>
    )

}