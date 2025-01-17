import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/HomeComponent/HomeComponent'
import About from './components/AboutComponent/AboutComponent'
import UserDetail from './components/UserDetailComponent/UserDetailComponent'

function App() {

  return (
    <div className='app'>
      <h1>Routing</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/user/:id' element={<UserDetail />}></Route>

          <Route path='*' element={<Navigate to='/home'></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
