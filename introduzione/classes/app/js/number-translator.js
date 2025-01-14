"use strict";
class Translator {
    translate(n) {
        if (n < 20)
            return ['uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove', 'dieci',
                'undici', 'dodici', 'tredici', 'quattordici', 'quindici', 'sedici', 'diciassette', 'diciotto', 'diciannove'][n - 1];
        return "out of range";
    }
}
