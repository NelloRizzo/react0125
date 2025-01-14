"use strict";
class Translator {
    translate(n) {
        if (n === 0)
            return 'zero';
        if (n < 0)
            return `meno ${this.translateNumber(-n)}`;
        return this.translateNumber(n);
    }
    translateNumber(n) {
        if (n === 0)
            return '';
        if (n < 20)
            return ['uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove', 'dieci',
                'undici', 'dodici', 'tredici', 'quattordici', 'quindici', 'sedici', 'diciassette', 'diciotto', 'diciannove'][n - 1];
        if (n < 100) {
            const decades = ['venti', 'trenta', 'quaranta', 'cinquanta', 'sessanta', 'settanta', 'ottanta', 'novanta'];
            const d = Math.floor(n / 10);
            const u = n % 10;
            return `${decades[d - 2]}${this.translateNumber(u)}`;
        }
        if (n < 1000) {
            const h = Math.floor(n / 100);
            const d = n % 100;
            if (h === 1)
                return `cento${this.translateNumber(d)}`;
            else
                return `${this.translateNumber(h)}cento${this.translateNumber(d)}`;
        }
        if (n < 1000000) {
            const t = Math.floor(n / 1000);
            const h = n % 1000;
            if (t === 1)
                return `mille${this.translateNumber(h)}`;
            else
                return `${this.translateNumber(t)}mila${this.translateNumber(h)}`;
        }
        return "out of range";
    }
}
