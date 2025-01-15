import { StandardCalculatorState } from "./StandardCalculatorState"

export type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export class StandardCalculatorService {

    constructor(public state: StandardCalculatorState) { }

    private get value(): number { return Number.parseFloat(this.state.display.replace(',', '.')) }

    private checkClear() {
        if (this.state.hasError) return
        if (this.state.mustClear) {
            this.state.display = ''
            this.state.mustClear = false
        }
    }

    changeSignum(): void {
        if (this.state.hasError) return
        this.checkClear()
        if (this.state.display.length === 0) {
            this.state.display = '0,0'
            this.state.mustClear = true
        }
        else {
            this.state.display = (-this.value).toString().replace('.', ',')
        }
    }
    addDigit(d: Digit): void {
        if (this.state.hasError) return
        this.checkClear()
        if (d === '0') {
            if (this.state.display.length > 0)
                this.state.display += '0'
            if (this.state.display.length === 0) {
                this.state.display = '0'
                this.state.mustClear = true
            }
        }
        else
            this.state.display += d
    }

    addComma(): void {
        if (this.state.hasError) return
        this.checkClear()
        if (this.state.display.length === 0) {
            this.state.display = '0,'
        }
        else if (this.state.display.indexOf(',') < 0)
            this.state.display += ','
    }

    private error() {
        this.state.hasError = true
        this.state.display = 'Error'
    }

    backspace() {
        if (this.state.mustClear) return
        if (this.state.display.length > 0)
            this.state.display = this.state.display.slice(0, -1)
        if (this.state.display.length === 0) {
            this.state.display = '0,0'
            this.state.mustClear = true
        }
    }

    clear() {
        this.state.display = '0,0'
        this.state.accumulator = 0
        this.state.mustClear = true
        this.state.hasError = false
        this.state.nextOperation = '='
    }

    clearError() {
        this.state.display = '0,0'
        this.state.mustClear = true
        this.state.hasError = false
    }

    unaryOperation(op: string) {
        if (this.state.hasError) return
        let value = this.value
        switch (op) {
            case 'sqr':
                value *= value
                break
            case 'sqrt':
                value = Math.sqrt(value)
                break
            case 'inv':
                if (value === 0) {
                    this.error()
                    return
                }
                value = 1 / value
                break
            case 'perc':
                value = this.state.accumulator * value / 100
                break
        }
        this.state.display = value.toString().replace('.', ',')
        this.state.mustClear = true
    }

    execute(op: string): void {
        if (this.state.hasError) return
        const value = this.value
        switch (this.state.nextOperation) {
            case '+':
                this.state.accumulator += value
                break
            case '-':
                this.state.accumulator -= value
                break
            case '*':
                this.state.accumulator *= value
                break
            case '/':
                if (value === 0) {
                    this.error()
                    return
                }
                this.state.accumulator /= value
                break
            default:
                this.state.accumulator = value
                break
        }
        if (isNaN(this.state.accumulator)) {
            this.error()
            return
        }
        this.state.display = this.state.accumulator.toString().replace('.', ',')
        this.state.mustClear = true
        this.state.nextOperation = op
    }
}