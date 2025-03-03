import { FC } from "react"
import './EventBubblingComponents.scss'
const EventBubblingComponent: FC<{}> = () => {

    const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("Div Handler", e.target, e.currentTarget)
    }

    const handlePClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
        console.log("P Handler", e.target, e.currentTarget)
        console.log(e.nativeEvent)
    }
    const handlePClick1 = (e: React.MouseEvent<HTMLParagraphElement>) => {
        console.log("P Handler1", e.target, e.currentTarget)
        e.stopPropagation()
    }

    return (
        <div onClick={(e) => handleDivClick(e)}>
            <p onClick={handlePClick}>Click me</p>
            <p onClick={handlePClick1}>Click me 1</p>
        </div>
    )
}

export default EventBubblingComponent;