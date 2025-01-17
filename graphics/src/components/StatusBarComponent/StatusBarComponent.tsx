import MouseViewerComponent from './MouseViewerComponent/MouseViewerComponent'
import ShapeViewComponent from './ShapeViewerComponent/ShapeViewerComponent'
import './StatusBarComponent.scss'
export default function StatusBarComponent() {
    return (
        <div className="status-bar">
            <div className="item-title">Status bar</div>
            <MouseViewerComponent/>
            <ShapeViewComponent/>
        </div>
    )
}