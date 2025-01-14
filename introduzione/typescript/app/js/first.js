"use strict";
console.log('Tipizzazione');
let num = 10;
let testo = "Paperino";
let b = false;
let n = null;
let u = undefined;
let v = undefined;
let num_str;
num_str = 10;
console.log(num_str);
num_str = 'Paperino';
console.log(num_str);
function nullableValue(value) {
    if (value === null)
        console.log("Null");
    else
        console.log("Value", value);
}
nullableValue(10);
nullableValue(null);
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tuple = ['paperino', 10];
let t3 = ['topolino', 100, new Date()];
console.log(tuple[0]);
let n1 = 10;
let n2 = 20;
[n1, n2] = [n2, n1];
console.log("n1", n1, "n2", n2);
var ColoriSemaforo;
(function (ColoriSemaforo) {
    ColoriSemaforo["Rosso"] = "Rosso";
    ColoriSemaforo["Giallo"] = "Giallo";
    ColoriSemaforo[ColoriSemaforo["Verde"] = 65280] = "Verde";
})(ColoriSemaforo || (ColoriSemaforo = {}));
let sem = ColoriSemaforo.Giallo;
console.log(sem);
let q = 42;
let s = 'ppppp';
function infinita() {
    for (;;) { }
}
let nnn = 1;
let ss = "Pluto";
let t = 2;
let p = { x: 10, y: 30 };
function saluta(nome) {
    return `Ciao, ${nome}!`;
}
function salutaNC(nome, cognome = '') {
    if (!cognome.length)
        return `Ciao, ${nome}!`;
    return `Ciao, ${nome} ${cognome}!`;
}
//function salutaNull(nome: string, cognome: string | undefined): string {
function salutaNull(nome, cognome) {
    if (!cognome)
        return `Hello, ${nome}!`;
    return `Hello, ${nome} ${cognome}!`;
}
console.log(saluta('Topolino'));
console.log(salutaNC('Mickey', "Mouse"));
console.log(salutaNC('Basettoni'));
console.log(salutaNull('Mickey', "Mouse"));
console.log(salutaNull('Basettoni'));
function printNumbers(asc, ...n) {
    if (!n.length)
        return;
    console.log(asc === "asc" ? n.shift() : n.pop());
    printNumbers(asc, ...n);
}
printNumbers("asc", 1, 2, 3, 4, 5, 6, 7);
