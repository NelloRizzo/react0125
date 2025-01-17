import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Article } from "../../models/BlogModels"
import axios from "axios"

const URL = "https://localhost:7119/api/Blog"

export default function Read() {
    const { id } = useParams()
    const [article, setArticle] = useState<Article>()

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get<Article>(`${URL}/${id}`)
            setArticle(response.data)
        }
        fetch()
    }, [])

    return (
        <div className="read">
            <h1>{article?.title}</h1>
            <div className="info">pubblicato il {article?.publishedAt.toString()} da {article?.author as string}</div>
            <div className="content">
                {article?.content}
            </div>
        </div>
    )
}