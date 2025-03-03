import React from "react";
import './Clock.scss'
const ClockFC: React.FC = () => {
    const [state, setState] = React.useState({ date: new Date() });
    const [updates, setUpdates] = React.useState(0);
    React.useEffect(() => {
        const timerID = setInterval(() => {
            setState({ date: new Date() });
            setUpdates(prevUpdates => prevUpdates + 1);
        }, 1000);

        return () => {
            clearInterval(timerID);
        }
    }, [])

    return (
        <div className="clock doto">
            {state.date.toLocaleTimeString()} - Updates: {updates}
        </div>
    )
}
export default ClockFC