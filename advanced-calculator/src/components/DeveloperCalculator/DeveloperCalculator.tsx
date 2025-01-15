import { FC } from "react"
import './DeveloperCalculator.scss'
import { UnaryOperatorButton } from "./UnaryOperatorButton/UnaryOperatorButton"
import { BinaryOperatorBytton } from "./BinaryOperatorButton/BinaryOperatorButton"
import { Viewer } from "./Viewer/Viewer"
import { DigitButton } from "./DigitButton/DigitButton"
import { Display } from "./Display/Display"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../state-management/store"
import { backspace, clear } from "../../state-management/Calculators/developer-calculator-slice"

export const AdvancedCalculator: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="developer-calculator">
            <h1>Developer</h1>
            <Display />
            <Viewer radix={16} title={'HEX'}></Viewer>
            <Viewer radix={10} title={'DEC'}></Viewer>
            <Viewer radix={8} title={'OCT'}></Viewer>
            <Viewer radix={2} title={'BIN'}></Viewer>
            <div className="row">
                <DigitButton digit={'A'}></DigitButton>
                <UnaryOperatorButton operation={'lsh'}>&lt;&lt;</UnaryOperatorButton>
                <UnaryOperatorButton operation={'rsh'}>&gt;&gt;</UnaryOperatorButton>
                <div className="button" onClick={() => dispatch(clear())}><span>C</span></div>
                <div className="button" onClick={() => dispatch(backspace())}>&#8592;</div>
            </div>
            <div className="row">
                <DigitButton digit={'B'}></DigitButton>
                <BinaryOperatorBytton operation={'and'}>AND</BinaryOperatorBytton>
                <BinaryOperatorBytton operation={'or'}>OR</BinaryOperatorBytton>
                <UnaryOperatorButton operation={'not'}>NOT</UnaryOperatorButton>
                <BinaryOperatorBytton operation={'/'}>&divide;</BinaryOperatorBytton>
            </div>
            <div className="row">
                <DigitButton digit={'C'}></DigitButton>
                <DigitButton digit={'7'}></DigitButton>
                <DigitButton digit={'8'}></DigitButton>
                <DigitButton digit={'9'}></DigitButton>
                <BinaryOperatorBytton operation={'*'}>&times;</BinaryOperatorBytton>
            </div>
            <div className="row">
                <DigitButton digit={'D'}></DigitButton>
                <DigitButton digit={'4'}></DigitButton>
                <DigitButton digit={'5'}></DigitButton>
                <DigitButton digit={'6'}></DigitButton>
                <BinaryOperatorBytton operation={'-'}>&#45;</BinaryOperatorBytton>
            </div>
            <div className="row">
                <DigitButton digit={'E'}></DigitButton>
                <DigitButton digit={'1'}></DigitButton>
                <DigitButton digit={'2'}></DigitButton>
                <DigitButton digit={'3'}></DigitButton>
                <BinaryOperatorBytton operation={'+'}>&#43;</BinaryOperatorBytton>
            </div>
            <div className="row">
                <DigitButton digit={'F'}></DigitButton>
                <div className="button">&#177;</div>
                <DigitButton digit={'0'}></DigitButton>
                <div className="button disabled">&#44;</div>
                <BinaryOperatorBytton operation={'='}>&#61;</BinaryOperatorBytton>
            </div>
        </div>
    )
}