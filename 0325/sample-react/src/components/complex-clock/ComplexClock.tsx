import React from 'react'
import './Clock.scss'
import HoursViewer from './HoursViewer'
import MinutesViewer from './MinutesViewer'
import SecondsViewer from './SecondsViewer'

const ComplexClock = () => {

    const [state, setState] = React.useState({ date: new Date() });

    React.useEffect(() => {
        const timerID = setInterval(() => {
            setState(prevState => ({ ...prevState, date: new Date() }));
        }, 1000);

        return () => {
            clearInterval(timerID);
        }
    }, [])

    return (
        <div className="clock doto">
            <HoursViewer hours={state.date.getHours()} />
            <MinutesViewer minutes={state.date.getMinutes()} />
            <SecondsViewer seconds={state.date.getSeconds()} />
        </div>
    )
}
export default ComplexClock