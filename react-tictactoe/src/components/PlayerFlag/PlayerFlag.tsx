import player1 from '/1.png'
import player2 from '/2.png'

interface PlayerFlagProps {
    player: number
}
export default function PlayerFlag({ player }: PlayerFlagProps) {
    return (
        <div className="player-flag">
            {player === 0 && <img src={player1}></img>}
            {player === 1 && <img src={player2}></img>}
        </div>
    )
}