import { useSelector } from "react-redux"
import { RootState } from "../../state-management/store"
import player1 from '/1.png'
import player2 from '/2.png'

import './ShowPlayer.scss'
import ShowWinner from "../ShowWinner/ShowWinner"
export default function ShowPlayer() {
    const [winner, player] = useSelector((s: RootState) => [s.tictactoe.winner, s.tictactoe.nextPlayer])
    return (
        <div className="show-player">
            <div key='player1' className={`player ${player === 0 ? 'selected' : ''}`}><img src={player1}></img></div>
            <div key='player2' className={`player ${player === 1 ? 'selected' : ''}`}><img src={player2}></img></div>
            {winner > -1 && (<ShowWinner winner={winner + 1}/>)}
        </div >
    )
}