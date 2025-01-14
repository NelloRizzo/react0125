"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ToDoService {
    constructor() {
        this.baseUrl = "https://jsonplaceholder.typicode.com/todos";
    }
    getList() {
        return fetch(this.baseUrl)
            .then((response) => // qui la risposta è arrivata al client
         response.json() // risultato della then: legge il json della risposta e, una volta interpretato, lo rende disponibile
        );
    }
    getListAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.baseUrl);
            const json = yield response.json();
            return json;
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const [ul] = document.getElementsByTagName('ul');
    const service = new ToDoService();
    const [clock] = document.getElementsByTagName('span');
    const timer = () => {
        const d = new Date();
        clock.innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        setTimeout(() => timer(), 1000);
    };
    timer();
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const todos = yield service.getListAsync();
            const [wait] = document.getElementsByClassName('wait-message');
            wait.setAttribute('class', 'hidden');
            todos.map(v => {
                const li = document.createElement('li');
                li.innerText = v.title;
                if (v.completed)
                    li.setAttribute('class', 'completed');
                ul.appendChild(li);
            });
        }
        catch (_a) {
            const [error] = document.getElementsByClassName('error');
            let cl = error.getAttribute('class');
            error.setAttribute('class', cl === null || cl === void 0 ? void 0 : cl.replace('hidden', ''));
        }
    }), 2000);
    /*setTimeout(() => {
        service.getList()
            .then(todos => {
                const [wait] = document.getElementsByClassName('wait-message')
                wait.setAttribute('class', 'hidden')
                todos.map(v => {
                    const li = document.createElement('li')
                    li.innerText = v.title
                    if (v.completed)
                        li.setAttribute('class', 'completed')
                    ul.appendChild(li)
                })
            })
            .catch(() => {
                const [error] = document.getElementsByClassName('error')
                let cl = error.getAttribute('class')!
                error.setAttribute('class', cl?.replace('hidden', ''))
            })
    }, 2000)*/
});
