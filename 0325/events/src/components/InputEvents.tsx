import { useState } from "react"

const InputEvents = () => {
    const [state, setState] = useState({ firstName: '', lastName: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div>
            <input
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <div>{state.firstName} {state.lastName}</div>
        </div>
    )
}

export default InputEvents