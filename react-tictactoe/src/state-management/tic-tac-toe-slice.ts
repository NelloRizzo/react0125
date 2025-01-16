import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./tic-tac-toe-status";

const checkWin = (grid: number[][]): boolean =>
    (grid[0][0] != -1 && grid[0][0] === grid[0][1] && grid[0][0] == grid[0][2]) // prima riga
    || (grid[1][0] != -1 && grid[1][0] === grid[1][1] && grid[1][0] == grid[0][2]) // seconda riga
    || (grid[2][0] != -1 && grid[2][0] === grid[0][1] && grid[0][0] == grid[0][2]) // terza riga
    || (grid[0][0] != -1 && grid[0][0] === grid[1][0] && grid[0][0] == grid[2][0]) // prima colonna
    || (grid[0][1] != -1 && grid[0][1] === grid[1][1] && grid[0][1] == grid[2][1]) // seconda colonna
    || (grid[0][2] != -1 && grid[0][2] === grid[1][2] && grid[0][2] == grid[2][2]) // terza colonna
    || (grid[0][0] != -1 && grid[0][0] === grid[1][1] && grid[0][0] == grid[2][2]) // diagonale 1
    || (grid[0][2] != -1 && grid[0][2] === grid[1][1] && grid[0][2] == grid[2][0]) // diagonale 2

const gameStatus = createSlice({
    name: 'tictactoe',
    initialState: initialState,
    reducers: {
        play: (state, action: PayloadAction<{ row: number, col: number, player: number }>) => {
            const grid = [[...state.grid[0]], [...state.grid[1]], [...state.grid[2]]]
            let { row, col, player } = action.payload
            if (grid[row][col] === -1) {
                grid[action.payload.row][action.payload.col] = action.payload.player
                const winner = checkWin(grid) ? player : -1
                if (winner === -1) player = (action.payload.player + 1) % 2
                return ({ ...state, grid: grid, nextPlayer: player, winner: winner })
            }
            return ({ ...state })
        },
        registerWinning: (state, action: PayloadAction<number>) =>
        ({
            ...initialState, points: {
                player1: state.points.player1 + action.payload == 0 ? 1 : 0,
                player2: state.points.player2 + action.payload == 1 ? 1 : 0
            }
        }),
        reset: (_) => ({ ...initialState })
    }
})

export const { play, registerWinning, reset } = gameStatus.actions
export default gameStatus.reducer