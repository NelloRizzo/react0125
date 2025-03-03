import { FC } from "react"

const SecondsViewer: FC<{ seconds: number }> = ({ seconds }) => {
    return (
        <span className="seconds bordered">{seconds.toString().padStart(2, '0')}</span>
    )
}

export default SecondsViewer