import { FC } from "react"

const HoursViewer: FC<{ hours: number }> = (props) => {
    return <span className="hours bordered">{props.hours.toString().padStart(2, '0')}</span>
}

export default HoursViewer