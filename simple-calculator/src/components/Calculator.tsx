import { FC, KeyboardEventHandler, ReactNode, useState } from "react"
import { Calculator as Calc, CalculatorState, Digit, initialState } from "../state/Calculator"
import './calculator.scss'

export const Calculator: FC = (): ReactNode => {
    const [state, setCalculator] = useState<CalculatorState>(initialState)
    const calculator = new Calc(state)

    const addDigit = (d: Digit): void => {
        setCalculator(s => {
            calculator.addDigit(d)
            return { ...s }
        })
    }
    const addComma = (): void => {
        setCalculator(s => {
            calculator.addComma()
            return { ...s }
        })
    }

    const unaryOperation = (op: string): void => {
        setCalculator(s => {
            calculator.unaryOperation(op)
            return { ...s }
        })
    }
    const binaryOperation = (op: string): void => {
        setCalculator(s => {
            calculator.execute(op)
            return { ...s }
        })
    }
    const handleKeyDown: KeyboardEventHandler<Element> = (e: React.KeyboardEvent) => {
        console.log(e.key)
        if (e.key >= '0' && e.key <= '9') {
            addDigit(e.key as Digit)
        }
        else if (e.key === ',' || e.key === '.') {
            addComma()
        }
    }
    const clearError = () => {
        setCalculator(s => {
            calculator.clearError()
            return { ...s }
        })
    }
    const clear = () => {
        setCalculator(s => {
            calculator.clear()
            return { ...s }
        })
    }
    const backspace = () => {
        setCalculator(s => {
            calculator.backspace()
            return { ...s }
        })
    }
    const changeSignum = () => {
        setCalculator(s => {
            calculator.changeSignum()
            return { ...s }
        })
    }
    return (
        <div className="calculator" tabIndex={1} onKeyDown={handleKeyDown}>
            <div className="display">{state.display}</div>
            <div className="row">
                <div className="button" onClick={() => unaryOperation('perc')}><span>&#37;</span></div>
                <div className="button" onClick={() => clearError()}><span>CE</span></div>
                <div className="button" onClick={() => clear()}><span>C</span></div>
                <div className="button" onClick={() => backspace()}>&#8592;</div>
            </div>
            <div className="row">
                <div className="button" onClick={() => unaryOperation('inv')}><span><sup>1</sup>/<sub>x</sub></span></div>
                <div className="button" onClick={() => unaryOperation('sqr')}><span>x<sup>2</sup></span></div>
                <div className="button" onClick={() => unaryOperation('sqrt')}><span>&radic;x</span></div>
                <div className="button" onClick={() => binaryOperation('/')}>&divide;</div>
            </div>
            <div className="row">
                <div className="button" onClick={() => addDigit('7')}>7</div>
                <div className="button" onClick={() => addDigit('8')}>8</div>
                <div className="button" onClick={() => addDigit('9')}>9</div>
                <div className="button" onClick={() => binaryOperation('*')}>&times;</div>
            </div>
            <div className="row">
                <div className="button" onClick={() => addDigit('4')}>4</div>
                <div className="button" onClick={() => addDigit('5')}>5</div>
                <div className="button" onClick={() => addDigit('6')}>6</div>
                <div className="button" onClick={() => binaryOperation('-')}>&#45;</div>
            </div>
            <div className="row">
                <div className="button" onClick={() => addDigit('1')}>1</div>
                <div className="button" onClick={() => addDigit('2')}>2</div>
                <div className="button" onClick={() => addDigit('3')}>3</div>
                <div className="button" onClick={() => binaryOperation('+')}>&#43;</div>
            </div>
            <div className="row">
                <div className="button" onClick={() => changeSignum()}>&#177;</div>
                <div className="button" onClick={() => addDigit('0')}>0</div>
                <div className="button" onClick={() => addComma()}>&#44;</div>
                <div className="button" onClick={() => binaryOperation('=')}>&#61;</div>
            </div>
        </div>
    )
}