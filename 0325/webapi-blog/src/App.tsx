import { useEffect, useState } from 'react'
import './App.scss'
import ArticleViewComponent from './components/article-view/ArticleViewComponent'
import ArticlesListComponent from './components/articles-list/ArticlesListComponent'
import NewArticleComponent from './components/new-article/NewArticleComponent'
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProtectedRoute from './components/protected-route/ProtectedRoute'
import LogOutComponent from './components/log-out/LogOutComponent'
function App() {

  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    setAuthenticated(localStorage.getItem('token') != null)
  }, [])

  return (
    <Router>
      <div className='app'>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link className={isAuthenticated ? '' : 'shadowed'} to='/new'>Scrivi</Link></li>
            <li><Link to='/logout'>Logout</Link></li>
          </ul>
        </nav>
        <h1>Blog</h1>
        <Routes>
          <Route path='/list' element={<ArticlesListComponent />} />
          <Route path='/new' element={<ProtectedRoute element={<NewArticleComponent />} />} />
          <Route path='/view/:id' element={<ArticleViewComponent />} />
          <Route path='/logout' element={<LogOutComponent />} />
          <Route path='*' element={<Navigate to='/list' />} />
        </Routes>
      </div>
    </Router >
  )
}

export default App
