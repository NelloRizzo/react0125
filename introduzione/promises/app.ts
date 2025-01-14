interface ToDo {
    id: number
    userId: number
    title: string
    completed: boolean
}

class ToDoService {
    private baseUrl: string = "https://jsonplaceholder.typicode.com/todos"

    getList(): Promise<ToDo[]> {
        return fetch(this.baseUrl)
            .then((response: Response) => // qui la risposta è arrivata al client
                response.json() // risultato della then: legge il json della risposta e, una volta interpretato, lo rende disponibile
            )
    }

    async getListAsync(): Promise<ToDo[]> {
        const response = await fetch(this.baseUrl)
        const json = await response.json()
        return json
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const [ul] = document.getElementsByTagName('ul')
    const service = new ToDoService()

    const [clock] = document.getElementsByTagName('span')
    const timer = () => {
        const d = new Date()
        clock.innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        setTimeout(() => timer(), 1000)
    }
    timer()

    setTimeout(async () => {
        try {
            const todos = await service.getListAsync()
            const [wait] = document.getElementsByClassName('wait-message')
            wait.setAttribute('class', 'hidden')
            todos.map(v => {
                const li = document.createElement('li')
                li.innerText = v.title
                if (v.completed)
                    li.setAttribute('class', 'completed')
                ul.appendChild(li)
            })
        } catch {
            const [error] = document.getElementsByClassName('error')
            let cl = error.getAttribute('class')!
            error.setAttribute('class', cl?.replace('hidden', ''))
        }
    }, 2000)
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
})