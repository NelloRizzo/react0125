import { FC } from "react"
import './Calculator.scss'
import { AppDispatch } from "../../state-management/store"
import { DigitButton } from "./DigitButton/DigitButton"
import { UnaryOperatorButton } from "./UnaryOperatorButton/UnaryOperatorButton"
import { BinaryOperatorBytton } from "./BinaryOperatorButton/BinaryOperatorButton"
import { useDispatch } from "react-redux"
import { addComma, backspace, changeSignum, clear, clearError } from "../../state-management/Calculators/standard-calculator-slice"
import { Display } from "./Display/Display"

export const Calculator: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="standard-calculator">
            <h1>Standard</h1>
            <Display />
            <div className="row">
                <UnaryOperatorButton operation={'perc'}><span>&#37;</span></UnaryOperatorButton>
                <div className="button" onClick={() => dispatch(clearError())} ><span>CE</span></div>
                <div className="button" onClick={() => dispatch(clear())}><span>C</span></div>
                <div className="button" onClick={() => dispatch(backspace())}>&#8592;</div>
            </div>
            <div className="row">
                <UnaryOperatorButton operation={'inv'}><span><sup>1</sup>/<sub>x</sub></span></UnaryOperatorButton>
                <UnaryOperatorButton operation={'sqr'}><span>x<sup>2</sup></span></UnaryOperatorButton>
                <UnaryOperatorButton operation={'sqrt'}><span>&radic;x</span></UnaryOperatorButton>
                <BinaryOperatorBytton operation={'/'}>&divide;</BinaryOperatorBytton>
            </div>
            <div className="row">
                <DigitButton digit={'7'}></DigitButton>
                <DigitButton digit={'8'}></DigitButton>
                <DigitButton digit={'9'}></DigitButton>
                <BinaryOperatorBytton operation={'*'}>&times;</BinaryOperatorBytton>
            </div>
            <div className="row">
                <DigitButton digit={'4'}></DigitButton>
                <DigitButton digit={'5'}></DigitButton>
                <DigitButton digit={'6'}></DigitButton>
                <BinaryOperatorBytton operation={'-'}>&#45;</BinaryOperatorBytton>
            </div>
            <div className="row">
                <DigitButton digit={'1'}></DigitButton>
                <DigitButton digit={'2'}></DigitButton>
                <DigitButton digit={'3'}></DigitButton>
                <BinaryOperatorBytton operation={'+'}>&#43;</BinaryOperatorBytton>
            </div>
            <div className="row">
                <div className="button" onClick={() => dispatch(changeSignum())} >&#177;</div>
                <DigitButton digit={'0'}></DigitButton>
                <div className="button" onClick={() => dispatch(addComma())} >&#44;</div>
                <BinaryOperatorBytton operation={'='}>&#61;</BinaryOperatorBytton>
            </div>
        </div>
    )
}