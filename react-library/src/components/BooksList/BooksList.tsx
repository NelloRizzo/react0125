import { useSelector } from "react-redux"
import { ApplicationState } from "../../state-management/store"
import BooksListItem from "../BooksListItem/BooksListItem"
import './BooksList.scss'

export default function BooksList() {
    const books = useSelector((s: ApplicationState) => s.library.books)
    return (
        <div className='books-list'>
            <h2>Elenco Libri</h2>
            {books.length === 0 && (
                <div className="warning centered">Nessun libro in archivio</div>
            )}
            {books.length > 0 && (
                books.map(b => (
                    <BooksListItem book={b} key={b.isbn} />
                ))
            )}
        </div>
    )
}