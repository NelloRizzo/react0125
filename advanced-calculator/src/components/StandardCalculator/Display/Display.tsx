import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../state-management/store";

export const Display: FC = () => {
    const display = useSelector((s: RootState) => s.standardCalculator.display)
    return (
        <div className="display">{display}</div>
    )
}