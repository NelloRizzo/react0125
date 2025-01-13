document.addEventListener('DOMContentLoaded', () => {
    // creo un array con i numeri da estrarre (il sacchetto dei numeri)
    const bag = Array.from({ length: 90 }) // array di 90 posizioni vuote
        .map((_, i) => i + 1) // riempie le posizioni con il numero da 1 a 90 (i è l'indice, il risultato di i+1 viene messo in posizione i)
        // sort ordina l'array in maniera da confrontare uno a uno gli elementi interni
        .sort((a, b) => Math.random() > 0.5 ? -1 : 1)
    let last = 0

    // il primo elemento dell'array risultato della getElementsByClassName
    const [table] = document.getElementsByClassName('table')

    Array.from({ length: 9 }) // creo un array con 9 posizioni al suo interno (vuoto) -> sarà usato per creare le righe
        .map( // funzione arrow che prevede 2 parametri: l'elemento dell'array e il suo indice
            (_, r) => { // trasformo uno ad uno gli elementi dell'array - r è l'indice dell'elemento nell'array (0-8)
                // creo un div per gestire una riga della tabella
                const row = document.createElement('div')
                // imposto opportunamente l'attributo class per questo elemento
                row.setAttribute('class', 'row')
                // inserisco le celle
                Array.from({ length: 10 }).map((_, c) => { // la stessa cosa... con un array di 10 elementi
                    // ogni cella conterrà un numero che calcolo così
                    const number = r * 10 + c + 1
                    // creo un div per la cella
                    const col = document.createElement('div')
                    // imposto l'attributo per la presentazione class='cell'
                    col.setAttribute('class', 'cell')
                    // impost anche l'id per consentire di accedere direttamente a questa cella!!!
                    col.setAttribute('id', `n_${number}`) // se la cella contiene 10 -> id='n_10'
                    // scrivo il numero nella cella
                    col.innerText = `${number}`
                    // qui aggiungo la cella alla riga
                    row.appendChild(col)
                })
                // qui aggiungo la riga alla tabella
                table.appendChild(row)
            })

    // gestione del click sul button
    document.getElementById('draw-button').addEventListener('click', () => {
        // se non ci sono numeri esce
        if (!bag.length) return
        // estrae il primo numero
        const number = bag.pop()
        const lastCell = document.getElementById(`n_${last}`)
        if (lastCell) lastCell.setAttribute('class', 'cell drawn')
        // e modifica opportunamente la vista andando ad aggiungere la classe che segnala l'estrazione
        const cell = document.getElementById(`n_${number}`) // recupero la cella con l'id adeguato
            .setAttribute('class', 'cell drawn last') // aggiungo la classe drawn alla cella
        last = number
    })
})