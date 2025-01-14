"use strict";
let promise = new Promise((resolve, reject) => {
    let result = false;
    if (result)
        resolve(12345);
    else
        reject();
});
promise.then(n => console.log("successo", n)).catch(() => console.log("Promise fallita"));
const url = "https://jsonplaceholder.typicode.com/todos";
function getTodos() {
    return fetch(url)
        .then(resp => {
        if (resp.ok) {
            return resp.json();
        }
        throw new Error();
    });
}
getTodos().then(t => t.forEach(i => console.log(i))).catch(reason => console.log(reason));
