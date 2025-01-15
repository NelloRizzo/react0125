import { FC } from "react";
import { CalculatorRadix } from "../../../services/DeveloperCalculator/DeveloperCalculatorState";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state-management/store";
import './Viewer.scss'
import { useDispatch } from "react-redux";
import { changeRadix } from "../../../state-management/Calculators/developer-calculator-slice";
import { convert } from "../../../services/DeveloperCalculator/DeveloperCalculatorService";
interface ViewerProps {
    radix: CalculatorRadix
    title: string
}

export const Viewer: FC<ViewerProps> = ({ radix, title }) => {
    const currentRadix = useSelector((s: RootState) => s.developerCalculator.radix)
    const dispatch = useDispatch<AppDispatch>()
    const display = useSelector((s: RootState) => convert(s.developerCalculator.display, currentRadix, radix))
    console.log(radix, currentRadix)
    return (
        <div className={`radix-viewer ${currentRadix == radix ? 'active' : ''}`} onClick={() => dispatch(changeRadix(radix))}>
            <div className="title">{title}</div>
            <div className="value">{display}</div>
        </div>
    )

}