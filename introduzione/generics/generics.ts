function printNumbers(...n: number[]) {
    if (!n.length) return
    console.log(n.shift())
    printNumbers(...n)
}
function printStrings(...n: string[]) {
    if (!n.length) return
    console.log(n.shift())
    printStrings(...n)
}

function print(...n: any[]) {
    if (!n.length) return
    console.log(n.shift())
    printStrings(...n)
}

function gPrint<T>(...n: T[]) {
    if (!n.length) return
    console.log(n.shift())
    gPrint(...n)
}

printNumbers(1, 2, 3, 4, 5, 6)
printStrings("a", "b", 'c', 'd')
print(1, 2, 3, 4, 5, 6)
print("a", "b", 'c', 'd')
print(1, new Date(), { x: 1, y: 0 }, 'Topolino')

gPrint<number>(1, 2, 3, 4, 5, 6)
gPrint<string>('a', 'b', 'g')

class Pair<F, S> {
    constructor(public first: F, public second: S) { }

    invert(): Pair<S, F> {
        return new Pair(this.second, this.first)
    }
}

let gis: Pair<number, string> = new Pair(1, "Topolino")
console.log(gis.first, gis.second)
let gsi = new Pair<string, number>("Paperino", 0)
console.log(gsi.first, gsi.second)

let gsi_inverse = gsi.invert()
console.log(gsi, gsi_inverse)

let a: Array<string> = ["1", "2", "3", "4", "5", "6", "7", "8"]
a.map<number>(i => Number.parseInt(i)).forEach(i => console.log(i * i))





