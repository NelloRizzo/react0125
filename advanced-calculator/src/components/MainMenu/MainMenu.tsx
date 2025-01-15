import { FC, useState } from "react"
import { NavLink } from "react-router-dom"
import './MainMenu.scss'
import menu from '../../assets/menu-toggle.svg'

export const MainMenu: FC = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="menu">
            <button className="toggle" onClick={() => { setVisible(!visible) }}><img src={menu}></img></button>
            {visible && (
                <nav>
                    <ul>
                        <li><NavLink to="/standard" className={({ isActive }) => isActive ? 'active' : ''} >Standard</NavLink></li>
                        <li><NavLink to="/developer" className={({ isActive }) => isActive ? 'active' : ''} >Programmatore</NavLink></li>
                    </ul>
                </nav>
            )
            }
        </div>
    )
}