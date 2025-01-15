import PersonalData from "../model/personal-data";

export default class FiscalCodeService {
    constructor(private data: PersonalData) { }

    getFiscalCode(): string {
        const fc = this.handleLastName(this.data.lastName)
            + this.handleFirstName(this.data.firstName)
            + this.handleBirthday(this.data.birthday, this.data.gender)
            + this.data.birthCity

        return fc + this.checkCode(fc)
    }

    private separateLetters(text: string) {
        let cons: string = ''
        let vow: string = ''
        Array.from(text.toUpperCase()).forEach(c => {
            if (c >= 'A' && c <= 'Z') {
                if ('AEIUO'.indexOf(c) < 0)
                    cons += c
                else
                    vow += c
            }
        })
        return [cons, vow]
    }
    private handleLastName(lastName: string): string {
        const [c, v] = this.separateLetters(lastName)
        return `${c}${v}XXX`.slice(0, 3)
    }
    private handleFirstName(firstName: string): string {
        let [c, v] = this.separateLetters(firstName)
        if (c.length > 3) c = c[0] + c.slice(2)
        return `${c}${v}XXX`.slice(0, 3)
    }
    private handleBirthday(birthday: Date, gender: string): string {
        const year = birthday.getFullYear().toString().slice(-2)
        const month = "ABCDEHLMPRST"[birthday.getMonth()]
        const day = `0${birthday.getDate() + (gender === 'm' ? 0 : 40)}`.slice(-2)
        return `${year}${month}${day}`
    }

    private checkCode(fc: string): string {
        const odds = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23]
        const ZERO = "0".charCodeAt(0)
        const A = 'A'.charCodeAt(0)
        let sum = 0
        for (let i = 0; i < 15; ++i) {
            const c = fc[i]
            const cc = fc.charCodeAt(i)
            const depl = (c >= '0' && c <= '9') ? cc - ZERO : cc - A
            sum += i % 2 == 0 ? odds[depl] : depl
        }
        return String.fromCharCode(A + sum % 26)
    }
}

