import { useEffect, useState } from "react"
import { Article } from "../../models/BlogModels"
import axios from "axios"
import { Link } from "react-router-dom"

const URL = "https://localhost:7119/api/Blog"

export default function Blog() {
    const [list, setList] = useState<Article[]>([])

    useEffect(() => {
        axios.get<Article[]>(URL).then(r => setList(r.data))
    }, [])

    return (
        <div className="blog">
            <h1>Elenco Articoli</h1>

            <div className="list">
                {
                    list.map(a => (
                        <article>
                            <div className="title"><Link to={`/read/${a.id}`}>{a.title}</Link></div>
                            <div className="info">pubblicato il {a.publishedAt.toString()} da {a.author.toString()}</div>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}