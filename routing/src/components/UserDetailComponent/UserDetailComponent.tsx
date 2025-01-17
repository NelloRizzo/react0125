import { useParams } from "react-router-dom"

export default function UserDetail(){
    const {id} = useParams()
    return (
        <div className="user-detail">
            <h1>Dettagli Utente</h1>
            <p>Id Utente: {id}</p>
        </div>
    )
}