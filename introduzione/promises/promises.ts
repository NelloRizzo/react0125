let promise = new Promise<number>((resolve, reject) => {
    let result = false
    if (result)
        resolve(12345)
    else
        reject()
})

promise.then(n => console.log("successo", n)).catch(() => console.log("Promise fallita"))

const url = "https://jsonplaceholder.typicode.com/todos"

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean

}

function getTodos(): Promise<Todo[]> {
    return fetch(url)
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
            throw new Error()
        })
}

getTodos().then(t => t.forEach(i => console.log(i))).catch(reason => console.log(reason))