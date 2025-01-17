import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './components/Blog/BlogComponent'
import WriteArticle from './components/WriteArticle/WriteArticle'
import Read from './components/Read/Read'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <div className='app'>
      <h1>Blog</h1>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/list' element={<Blog />} />
          <Route path='/write' element={<WriteArticle />} />
          <Route path='/read/:id' element={<Read />} />

          <Route path='*' element={<Navigate to='/list' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
