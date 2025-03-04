import { FC, JSX, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
    element: JSX.Element
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false)

    useEffect(() => {
        setAuthenticated(localStorage.getItem('token') != null)
    }, [])

    return isAuthenticated ? element : <Navigate to='/' />
}

export default ProtectedRoute