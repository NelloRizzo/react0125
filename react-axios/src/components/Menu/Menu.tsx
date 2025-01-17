import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to='/list'>Articoli</Link></li>
                <li><Link to='/write'>Nuovo</Link></li>
            </ul>
        </nav>
    )
}