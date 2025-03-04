import { ChangeEvent, FC, useState } from "react";
import axios_instance, { SAVE_ARTICLE_URL } from "../../http-config/http-config";

interface ArticleModel {
    title: string
    content: string
}
const NewArticleComponent: FC = () => {
    const [article, setArticle] = useState<ArticleModel>({ title: '', content: '' })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => { setArticle(a => ({ ...a, [e.target.name]: e.target.value })) }

    const saveArticle = () => {
        const save = async () => {
            try {
                await axios_instance.post(SAVE_ARTICLE_URL, article)
                setArticle({ title: '', content: '' })
            } catch (t) {
                console.log(t)
            }
        }
        if (article.title.length && article.content.length)
            save()
    }

    return (
        <div>
            <h1>Create a New Article</h1>
            <form>
                <label htmlFor='title'>Titolo</label>
                <input type="text" id='title' name='title' value={article?.title} onChange={handleInputChange} />
                <label htmlFor='title'>Contenuto</label>
                <input type="text" id='content' name='content' value={article?.content} onChange={handleInputChange} />
                <button type="button" onClick={saveArticle}>Submit</button>
            </form>
        </div>
    );
}

export default NewArticleComponent