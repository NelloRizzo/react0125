import { useDispatch } from "react-redux"
import { decrement, increment, incrementBy } from "../state-management/counter-slice"
import { ApplicationDispatch } from "../state-management/store"
import { useState } from "react"

export default function CounterUpdater() {
    const dispatch = useDispatch<ApplicationDispatch>()
    const [value, setValue] = useState(0)
    return (
        <div className="counter-updater">
            Quantità: <input type="number" defaultValue={value} onChange={(e) => setValue(Number.parseInt(e.target.value))} />
            <button onClick={() => dispatch(increment())}>Incrementa</button>
            <button onClick={() => dispatch(decrement())}>Decrementa</button>
            <button onClick={() => dispatch(incrementBy(value))}>Incrementa con Payload</button>
        </div>
    )
}