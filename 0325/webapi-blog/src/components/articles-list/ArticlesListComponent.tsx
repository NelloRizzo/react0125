import { FC, useEffect, useState } from "react"
import { Article } from "../../models/Models"
import axios_instance, { ALL_ARTICLES_URL } from "../../http-config/http-config"

const ArticlesListComponent: FC = () => {
    const [articles, setArticles] = useState<Article[]>([])
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios_instance.get(ALL_ARTICLES_URL);
                setArticles(response.data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        }
        fetchArticles();
    }, [])
    return articles.length ?
        (
            <div>
                <h1>Elenco Articoli</h1>
                {articles.map(article =>
                    <div key={article.id}><h3>{article.title}</h3><span></span></div>)
                }
            </div>
        ) : (
            <div>Nessun articolo in archivio</div>
        )
}

export default ArticlesListComponent