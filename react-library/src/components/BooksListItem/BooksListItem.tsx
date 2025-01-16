import { Book } from "../../state-management/library-model";
import './BooksListItems.scss'
type BooksListItemProps = { book: Book }
export default function BooksListItem({ book }: BooksListItemProps) {
    return (
        <div className="book-list-item">
            {book.title}
        </div>
    )
}