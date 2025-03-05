import './App.scss'
import ArticlesList from './components/articles-list/ArticlesListComponent'
import UserLogin from './components/user-login/UserLoginComponent'

function App() {
  return (
    <div className='app'>
      <UserLogin />
      <h1>Blog</h1>
      <ArticlesList />
    </div>
  )
}

export default App
