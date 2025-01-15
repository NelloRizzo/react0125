import { useState } from "react"

interface State {
    first: number
    second: number
    result: number
    operator: string
}

const initialState: State = { first: 0, second: 0, result: 0, operator: '+' }

export default function Calculator() {
    const [state, setState] = useState(initialState)

    const calculate = () => {
        switch (state.operator) {
            case '+':
                setState(s => ({ ...s, result: s.first + s.second }))
                break
            case '-':
                setState(s => ({ ...s, result: s.first - s.second }))
                break
            case '*':
                setState(s => ({ ...s, result: s.first * s.second }))
                break
            case '/':
                setState(s => ({ ...s, result: s.first / s.second }))
                break
        }
    }
    return (
        <div className="calculator">
            <input defaultValue={state.first} onChange={(e) => setState(s => ({ ...s, first: Number.parseInt(e.target.value) }))}></input>
            <select onChange={(e) => setState(s => ({ ...s, operator: e.target.value }))}>
                <option value={'+'}>&#43;</option>
                <option value={'-'}>&#8722;</option>
                <option value={'*'}>&times;</option>
                <option value={'/'}>&#247;</option>
            </select>
            <input defaultValue={state.second} onChange={(e) => setState(s => ({ ...s, second: Number.parseInt(e.target.value) }))}></input>
            <button onClick={calculate}> = </button>
            <span className="result">{state.result}</span>
        </div>
    )
}