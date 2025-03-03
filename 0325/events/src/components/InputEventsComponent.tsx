import React from "react";
import IncrementButtonComponent from "./IncrementButtonComponent";

class InputEventsComponent extends React.Component<{}, { counter: number }> {

    constructor(props: {}) {
        super(props);
        this.state = { counter: 0 }
    }

    private handleChange = () => {
        this.setState(s => ({ ...s, counter: s.counter + 1 }))
    }
    
    render() {
        return (
            <div>
                <IncrementButtonComponent onIncrement={this.handleChange} />
                <div>{this.state.counter}</div>
            </div>
        );
    }
}

export default InputEventsComponent;