import { useSelector } from "react-redux"
import { AppState } from "../../../store/store-config"

export default function MouseViewerComponent() {
    const mousePosition = useSelector((s: AppState) => s.draw.mousePosition)
    return (
        <div className="mouse-viewer">
            <div className="item-title">Mouse</div>
            &#123;{mousePosition.x},{mousePosition.y}&#125;
        </div>
    )
}