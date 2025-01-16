import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../state-management/store"
import { play } from "../../state-management/tic-tac-toe-slice"
import PlayerFlag from "../PlayerFlag/PlayerFlag"

interface TableCellProps {
    row: number,
    col: number
}
export default function TableCell({ row, col }: TableCellProps) {
    const game = useSelector((s: RootState) => s.tictactoe)
    const dispatch = useDispatch()
    return (
        <div className="cell" onClick={() => {
            if (game.winner === -1)
                dispatch(play({ row: row, col: col, player: game.nextPlayer }))
        }
        }><PlayerFlag player={game.grid[row][col]}></PlayerFlag>
        </div>
    )
}