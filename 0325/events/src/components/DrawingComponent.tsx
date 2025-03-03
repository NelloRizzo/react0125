import { useRef } from "react";
import './DrawingComponent.scss'
import React from "react";
const DrawingComponent: React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = React.useState(false);

    const startDrawing = () => { setIsDrawing(true); };

    const stopDrawing = () => { setIsDrawing(false); };

    const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!context) return;
        context.strokeStyle = 'black';
        context.lineJoin = 'round';
        context.lineWidth = 1;  
        const rect = canvas!.getBoundingClientRect();
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    };

    return (
        <div>
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
            />
        </div>
    );
}

export default DrawingComponent