import React from "react";
import './Clock.scss'

interface ClockState {
    date: Date
    updates: number
}
class ClockComponent extends React.Component<{}, ClockState> {

    private timerID?: NodeJS.Timeout

    constructor() {
        super({});
        this.state = { date: new Date(), updates: 0 }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(prevState => ({
            ...prevState,
            date: new Date(),
            updates: prevState.updates + 1
        }));
    }
    render() {
        return (
            <div className="clock doto">
                {this.state.date.toLocaleTimeString()} - Updates: {this.state.updates}
            </div>
        );
    }
}

export default ClockComponent;