import { useSelector } from "react-redux"
import { RootState } from "../../state-management/store"
import player1 from '/1.png'
import player2 from '/2.png'
import './ShowPlayer.scss'
export default function ShowPlayer() {
    const [winner, player] = useSelector((s: RootState) => [s.tictactoe.winner, s.tictactoe.nextPlayer])
    return (
        <div className="show-player">
            <div className={`player ${player === 0 ? 'selected' : ''}`}><img src={player1}></img></div>
            <div className={`player ${player === 1 ? 'selected' : ''}`}><img src={player2}></img></div>
            {winner > -1 && (<div className="winner">Ha vinto il giocatore {winner + 1}</div>)}
        </div >
    )
}