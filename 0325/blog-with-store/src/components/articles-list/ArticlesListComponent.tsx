import { FC, useEffect } from "react";
import { RootState, useApplicationDispatch, useApplicationSelector } from "../../store/store";
import { fetchAllArticles } from "../../store/blog/thunks/blog-thunks";

const ArticlesList: FC = () => {
    const blog = useApplicationSelector((s: RootState) => s.blog)
    const dispatch = useApplicationDispatch()

    useEffect(() => {
        dispatch(fetchAllArticles())
    }, [dispatch])

    if (blog.error) {
        return (<div className="error">Errore nel caricamento degli articoli: {blog.error}</div>)
    }
    else {
        return blog.loading ?
            (<div className="waiting">Caricamento in corso...</div>) :
            (
                <div className="articles-list">
                    <h1>Elenco Articoli</h1>
                    <div className="list">
                        {
                            blog.articles.map(a => (
                                <article className="article" key={a.id}>
                                    <h1>{a.title}</h1>
                                </article>
                            ))
                        }
                    </div>
                </div>
            )
    }
}

export default ArticlesList