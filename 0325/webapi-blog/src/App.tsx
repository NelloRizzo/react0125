import './App.scss'
import ArticleViewComponent from './components/article-view/ArticleViewComponent'
import ArticlesListComponent from './components/articles-list/ArticlesListComponent'
import NewArticleComponent from './components/new-article/NewArticleComponent'
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
function App() {

  return (
    <Router>
      <div className='app'>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/new'>Scrivi</Link></li>
          </ul>
        </nav>
        <h1>Blog</h1>
        <Routes>
          <Route path='/list' element={<ArticlesListComponent />} />
          <Route path='/new' element={<NewArticleComponent />} />
          <Route path='/view/:id' element={<ArticleViewComponent />} />
          <Route path='*' element={<Navigate to='/list' />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
