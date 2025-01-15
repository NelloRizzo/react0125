import { FC, useState } from "react"
import { Article } from "../../models/Article"
import './ArticleListItem.scss'
interface ArticleListItemProps {
    article: Article
}

type ShowBodyProps = { text: string, visible?: boolean }
const ShowBody: FC<ShowBodyProps> = ({ text, visible }: ShowBodyProps) => {
    if (visible)
        return <div className="body">{text}</div>
    else
        return <div className="body hidden">{text}</div>
}

export default function ArticleListItem({ article }: ArticleListItemProps) {
    const [visible, setVisible] = useState<boolean>(false)
    return (
        <div className="list-item" onClick={() => setVisible(!visible)}>
            <div className="title">{article.title}</div>
            <ShowBody text={article.body} visible={visible}></ShowBody>
        </div>
    )
}