"use strict";
function printNumbers(...n) {
    if (!n.length)
        return;
    console.log(n.shift());
    printNumbers(...n);
}
function printStrings(...n) {
    if (!n.length)
        return;
    console.log(n.shift());
    printStrings(...n);
}
function print(...n) {
    if (!n.length)
        return;
    console.log(n.shift());
    printStrings(...n);
}
function gPrint(...n) {
    if (!n.length)
        return;
    console.log(n.shift());
    gPrint(...n);
}
printNumbers(1, 2, 3, 4, 5, 6);
printStrings("a", "b", 'c', 'd');
print(1, 2, 3, 4, 5, 6);
print("a", "b", 'c', 'd');
print(1, new Date(), { x: 1, y: 0 }, 'Topolino');
gPrint(1, 2, 3, 4, 5, 6);
gPrint('a', 'b', 'g');
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    invert() {
        return new Pair(this.second, this.first);
    }
}
let gis = new Pair(1, "Topolino");
console.log(gis.first, gis.second);
let gsi = new Pair("Paperino", 0);
console.log(gsi.first, gsi.second);
let gsi_inverse = gsi.invert();
console.log(gsi, gsi_inverse);
let a = ["1", "2", "3", "4", "5", "6", "7", "8"];
a.map(i => Number.parseInt(i)).forEach(i => console.log(i * i));
