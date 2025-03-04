import './App.scss'
import ArticlesListComponent from './components/articles-list/ArticlesListComponent'
import NewArticleComponent from './components/new-article/NewArticleComponent'

function App() {

  return (
    <div className='app'>
      <h1>Blog</h1>
      <NewArticleComponent/>
      <ArticlesListComponent/>
    </div>
  )
}

export default App
