import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const loginURL = 'https://localhost:7119/api/Users/login'
const postURL = 'https://localhost:7119/api/Blog'
export default function WriteArticle() {
    const navigate = useNavigate()
    const [article, setArticle] = useState<{ title?: string, content?: string }>({})

    const post = async () => {
        try {
            const response = await axios.post<{ token: string }>(loginURL, { username: 'root', password: 'root' })
            const { token } = response.data
            const header = { 'Authorization': `Bearer ${token}` }

            const ax = axios.create({ headers: header })
            await ax.post(postURL, article)
            navigate('/list')
        } catch {
            console.log("Error")
        }
    }

    const handlePost = async () => await post()
    return (
        <div className="write-article">
            <h1>Nuovo Articolo</h1>

            <div className="form">
                <div className="input">
                    <label htmlFor="title">Titolo</label><input id='title' onChange={(e) => setArticle(s => ({ ...s, title: e.target.value }))} />
                </div>
                <div className="input">
                    <label htmlFor="content">Contenuto</label><textarea id='content' onChange={(e) => setArticle(s => ({ ...s, content: e.target.value }))} />
                </div>
                <div className="input">
                    <button onClick={handlePost}>Pubblica</button>
                </div>
            </div>
        </div>
    )
}