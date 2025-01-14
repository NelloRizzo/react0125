"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const [button] = document.getElementsByTagName('button');
    button.addEventListener('click', () => {
        const [input] = document.getElementsByTagName('input');
        const number = Number.parseInt(input.value);
        const service = new Translator();
        const translated = service.translate(number);
        const placeholder = document.getElementById('translated');
        if (placeholder)
            placeholder.innerText = translated;
    });
});
