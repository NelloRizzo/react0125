console.log('Tipizzazione')

let num: number = 10
let testo: string = "Paperino"
let b: boolean = false

let n: null = null
let u: undefined = undefined
let v: void = undefined

let num_str: number | string
num_str = 10
console.log(num_str)
num_str = 'Paperino'
console.log(num_str)

function nullableValue(value: number | null): void {
    if (value === null)
        console.log("Null")
    else
        console.log("Value", value)
}
nullableValue(10)
nullableValue(null)

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tuple: [string, number] = ['paperino', 10]
let t3: [string, number, Date] = ['topolino', 100, new Date()]

console.log(tuple[0])

let n1 = 10
let n2 = 20;

[n1, n2] = [n2, n1]
console.log("n1", n1, "n2", n2)

enum ColoriSemaforo { Rosso = "Rosso", Giallo = "Giallo", Verde = 0xff00 }

let sem: ColoriSemaforo = ColoriSemaforo.Giallo
console.log(sem)

let q: any = 42;
let s: unknown = 'ppppp'
function infinita(): never {
    for (; ;) { }
}

let nnn: 1 | 2 | 3 = 1
let ss: "Pluto" | "Paperino" | 3 = "Pluto"

type Tre = 1 | 2 | 3

let t: Tre = 2

interface Punto {
    x: number
    y: number
}

let p: Punto = { x: 10, y: 30 }

function saluta(nome: string): string {
    return `Ciao, ${nome}!`
}
function salutaNC(nome: string, cognome: string = ''): string {
    if (!cognome.length)
        return `Ciao, ${nome}!`
    return `Ciao, ${nome} ${cognome}!`
}
//function salutaNull(nome: string, cognome: string | undefined): string {
function salutaNull(nome: string, cognome?: string): string {
    if (!cognome)
        return `Hello, ${nome}!`
    return `Hello, ${nome} ${cognome}!`
}
console.log(saluta('Topolino'))
console.log(salutaNC('Mickey', "Mouse"))
console.log(salutaNC('Basettoni'))
console.log(salutaNull('Mickey', "Mouse"))
console.log(salutaNull('Basettoni'))

function printNumbers(asc: "asc" | "desc", ...n: number[]): void {
    if (!n.length) return
    console.log(asc === "asc" ? n.shift() : n.pop())
    printNumbers(asc, ...n)
}

printNumbers("asc", 1, 2, 3, 4, 5, 6, 7)