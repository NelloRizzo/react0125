import { useSelector } from "react-redux"
import { AppState } from "../../../store/store-config"

export default function ShapeViewComponent() {
    const shape = useSelector((s: AppState) => s.draw.shape)
    return (
        <div className="shape-view">
            <div className="item-title">Disegno</div>
            {shape}
        </div>
    )
}