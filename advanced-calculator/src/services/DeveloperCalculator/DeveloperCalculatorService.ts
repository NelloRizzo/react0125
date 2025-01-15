import { CalculatorRadix, DeveloperCalculatorState } from "./DeveloperCalculatorState"

export type DeveloperDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

export const convert = (number: string, fromRadix: CalculatorRadix, toRadix: CalculatorRadix): string => Number.parseInt(number, fromRadix).toString(toRadix)

export class DeveloperCalculatorService {

    constructor(public state: DeveloperCalculatorState) { }

    private get value(): number { return Number.parseInt(convert(this.state.display, this.state.radix, 10)) }

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
            this.state.display = '0'
            this.state.mustClear = true
        }
        else {
            this.state.display = (-this.value).toString()
        }
    }

    changeRadix(radix: CalculatorRadix) {
        this.state.display = convert(this.state.display, this.state.radix, radix)
        this.state.radix = radix
    }

    addDigit(d: DeveloperDigit): void {
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

    private error() {
        this.state.hasError = true
        this.state.display = 'Error'
    }

    backspace() {
        if (this.state.mustClear) return
        if (this.state.display.length > 0)
            this.state.display = this.state.display.slice(0, -1)
        if (this.state.display.length === 0) {
            this.state.display = '0'
            this.state.mustClear = true
        }
    }

    clear() {
        this.state.display = '0'
        this.state.accumulator = 0
        this.state.mustClear = true
        this.state.hasError = false
        this.state.nextOperation = '='
    }

    clearError() {
        this.state.display = '0'
        this.state.mustClear = true
        this.state.hasError = false
    }

    unaryOperation(op: string) {
        if (this.state.hasError) return
        let value = this.value
        switch (op) {
            case 'lsh':
                value = value << 1
                break
            case 'rsh':
                value = value >> 1
                break
            case 'not':
                value = ~value
                break
        }
        this.state.display = convert(value.toString(), 10, this.state.radix)
        this.state.mustClear = true
    }

    execute(op: string): void {
        if (this.state.hasError) return
        const value = this.value
        switch (this.state.nextOperation) {
            case 'and':
                this.state.accumulator &= value
                break
            case 'or':
                this.state.accumulator |= value
                break
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
        this.state.display = convert(this.state.accumulator.toString(), 10, this.state.radix)
        this.state.mustClear = true
        this.state.nextOperation = op
    }
}