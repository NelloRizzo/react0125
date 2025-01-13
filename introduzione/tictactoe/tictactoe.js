const grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
const flags = ['X', 'O']

let currentPlayer = 0
let winner = undefined

const checkWin = () => { return false }

const move = (row, col) => {
    // controlla che nella posizione indicata non ci sia nulla (0)
    if (grid[row][col]) return
    // posiziona il segnaposto nella posizione indicata
    grid[row][col] = flags[currentPlayer]
    // controlla se qualcuno ha vinto
    checkWin()
    // passa al player successivo
    currentPlayer = (currentPlayer + 1) % 2
}
