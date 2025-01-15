import React from "react";
import './ClassComponent.scss'
export interface ComponentProps {
    times: number
}
class ClassComponent extends React.Component<ComponentProps> {

    render(): React.ReactNode {
        const { times } = this.props

        return (
            <div className="my-comp">
                {
                    Array.from({ length: times }).map((_, i) => (
                        <p>{i}</p>
                    ))
                }
            </div>
        )
    }
}

export default ClassComponent