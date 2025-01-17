import { Outlet } from 'react-router-dom'
import './MainLayoutComponent.scss'
export default function MainLayout() {
    const main = { region: 'main' }
    const right = { region: 'right' }
    return (
        <div className="main-layout">
            <main>
                <h1>Contenuto principale</h1>
                <Outlet context={main}></Outlet>
            </main>
            <aside>
                <h1>Contenuto secondario</h1>
                <Outlet context={right}></Outlet>
            </aside>
        </div>
    )
}