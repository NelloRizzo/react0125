import { useEffect, useRef } from 'react'
import './App.scss'

function App() {
  const myCanvas = useRef(null)

  useEffect(() => {
    const canvas = myCanvas.current! as HTMLCanvasElement
    const context = canvas.getContext('2d')! // ! -> non è ammessa la restituzione di un valore null

    context.fillStyle = 'red';
    context.fillRect(10, 10, 380, 380);
  }, [])

  return (
    <div className='app'>
      <canvas ref={myCanvas} width={400} height={400} />
    </div>
  )
}

export default App
