import bell from '/bell.mp3'
import useSound from 'use-sound'
import './ShowWinner.scss'
export default function ShowWinner({ winner }: { winner: number }) {
    const [play] = useSound(bell)
    play()
    return (
        <div key='winner' className="winner">{winner}</div>
    )
}
