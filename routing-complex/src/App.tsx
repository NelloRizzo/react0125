import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import MainLayout from './components/MainLayoutComponent/MainLayoutComponent'
import MainView1 from './components/MainView1/MainView1'
import MainView2 from './components/MainView2/MainView2'

function App() {
  return (
    <div className='app'>
      <h1>Complex Routing</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/view1'>View 1</Link></li>
            <li><Link to='/view2'>View 2</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/view1' element={<MainLayout />} >
            <Route path='main' element={<MainView1></MainView1>} />
          </Route>
          <Route path='/view2' element={<MainLayout />} >
            <Route path='main' element={<MainView2 />} />
          </Route>

          <Route path='*' element={<Navigate to='/view1' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
