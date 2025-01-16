import { useSelector } from "react-redux"
import { StoreState } from "../state-management/store"

export default function CounterViewer() {
    const counter = useSelector((s: StoreState) => s.counter.value)
    return (
        <div className="counter-viewer">
            <div className="counter">{counter}</div>
        </div>
    )
}