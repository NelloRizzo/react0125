import { Link } from "react-router-dom"

export default function Home() {
    const users = [{ id: 1, name: 'user1' }, { id: 3, name: 'user3' }, { id: 2, name: 'user2' }]
    return (
        <div className="home">
            <h1>Home</h1>
            <ul>
                {
                    users.map(u => (
                        <li><Link to={`/user/${u.id}`}>{u.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}