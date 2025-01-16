import './GameTable.scss'
import ShowPlayer from '../ShowPlayer/ShowPlayer'
import TableCell from '../TableCell/TableCell'
import { useDispatch } from 'react-redux'
import { reset } from '../../state-management/tic-tac-toe-slice'

export default function GameTable() {
    const dispatch=useDispatch()
    return (
        <div className={`game-table`}>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <ShowPlayer></ShowPlayer>
            {
                Array.from({ length: 3 }).map((_, r) => (
                    <div className="row">
                        {
                            Array.from({ length: 3 }).map((_, c) => (
                                <TableCell row={r} col={c}></TableCell>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}