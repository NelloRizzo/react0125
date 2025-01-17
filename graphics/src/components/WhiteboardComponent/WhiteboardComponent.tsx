import { useDispatch, useSelector } from 'react-redux'
import './WhiteboardComponent.scss'
import { mouseMove } from '../../store/slices/draw-slice/draw-slice'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { AppState } from '../../store/store-config'

export default function WhiteboardComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [canvas, setCanvas] = useState<HTMLCanvasElement>()
    const [graphics, setGraphics] = useState<CanvasRenderingContext2D>()
    const [firstPoint, setFirstPoint] = useState(true)
    const [from, setFrom] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
    const { color, shape } = useSelector((s: AppState) => s.draw)
    const dispatch = useDispatch()

    useEffect(() => {
        setCanvas(canvasRef.current!)
        setGraphics((canvasRef.current! as HTMLCanvasElement).getContext('2d')!)
        graphics?.clearRect(0, 0, canvas!.width, canvas!.height)
    }, [])

    const handleClick: MouseEventHandler<HTMLCanvasElement> = ({ nativeEvent: e }) => {
        if (firstPoint) {
            setFrom({ x: e.offsetX, y: e.offsetY })
            setFirstPoint(false)
        } else {
            graphics?.beginPath()
            graphics!.strokeStyle = color
            graphics?.moveTo(from.x, from.y)
            graphics?.lineTo(e.offsetX, e.offsetY)
            graphics?.stroke()
            graphics?.closePath()
            setFrom({ x: e.offsetX, y: e.offsetY })
            setFirstPoint(true)
        }
    }
    return (
        <div className="whiteboard">
            <div className="item-title">Whiteboard</div>
            <canvas ref={canvasRef}
                onClick={handleClick}
                onMouseMove={({ nativeEvent: e }) => dispatch(mouseMove({ x: e.offsetX, y: e.offsetY }))}></canvas>
        </div>
    )
}