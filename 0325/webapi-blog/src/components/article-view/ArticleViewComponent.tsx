import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Article } from "../../models/Models";
import axios_instance, { GET_ARTICLE_URL } from "../../http-config/http-config";

const ArticleViewComponent: FC = () => {
    const [article, setArticle] = useState<Article>()

    const { id } = useParams()

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios_instance.get<Article>(GET_ARTICLE_URL.replace('ID', id!.toString()))
                setArticle(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [id])

    const nav = useNavigate()

    return (
        <div className="article-view">
            <button onClick={() => nav(-1)}>Indietro</button>
            <article>
                <h1>{article?.title}</h1>
                <p>{article?.content}</p>
            </article>
        </div>
    )
}

export default ArticleViewComponent