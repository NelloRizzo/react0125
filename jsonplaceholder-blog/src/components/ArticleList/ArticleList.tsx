import { useEffect, useState } from "react"
import ArticleListItem from "../ArticleListItem/ArticleListItem"
import { Article } from "../../models/Article"

const URL = "https://jsonplaceholder.typicode.com/posts"

export default function ArticleList() {
    const [list, setList] = useState<Article[]>([])

    useEffect(() => {
        fetch(URL).then(r => r.json()).then(r => setList(r))
    }, [])
    
    return (
        <div className="articles-list">
            {
                list.map(a => (
                    <ArticleListItem article={a} key={a.id} />
                ))
            }
        </div>
    )
}