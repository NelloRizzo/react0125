import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../state-management/store";
import './Display.scss'
export const Display: FC = () => {
    const display = useSelector((s: RootState) => s.developerCalculator.display)
    return (
        <div className="display">{display}</div>
    )
}