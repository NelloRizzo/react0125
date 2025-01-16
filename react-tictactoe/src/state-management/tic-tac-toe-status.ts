export interface TicTacToeStatus {
    grid: number[][]
    nextPlayer: number
    winner: number
    points: {
        player1: number
        player2: number
    }
}

export const initialState: TicTacToeStatus = {
    grid: [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]],
    nextPlayer: 0,
    winner: -1,
    points: {
        player1: 0,
        player2: 0
    }
}