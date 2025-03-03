import { FC } from "react"
import './EventBubblingComponents.scss'
const EventCapturingComponent: FC<{}> = () => {

    const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("DIV Handler", e.target, e.currentTarget)
    }

    const handlePClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
        console.log("P Handler", e.target, e.currentTarget)
    }

    return (
        <div onClickCapture={(e) => handleDivClick(e)}>
            <p onClick={handlePClick}>Click me</p>
        </div>
    )
}

export default EventCapturingComponent;