import { useEffect } from "react"
import { Navigate } from "react-router-dom"

const LogOutComponent = () => {

    useEffect(() => {
        localStorage.removeItem('token')
        console.log(localStorage.getItem('token'))
    }, [])

    return (
        <Navigate to='/' />
    )
}

export default LogOutComponent