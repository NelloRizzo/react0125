import { ChangeEvent, ChangeEventHandler, useState } from "react"
import { Book, emptyBook } from "../../state-management/library-model"
import { addBook } from "../../state-management/library-slice"
import { useDispatch } from "react-redux"
import './BooksEdit.scss'
type BookEditProps = {
    book?: Book
}
export default function BookEdit({ book }: BookEditProps) {
    const [editBook, setBook] = useState(book ?? emptyBook)
    const dispatch = useDispatch()

    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setBook(s => ({ ...s, [e.target.id]: e.target.value })) }
    return (
        <div className="book-edit">
            <h2>Libro</h2>
            <div className="form">
                <div className="row">
                    <label htmlFor="isbn">ISBN</label><input id='isbn' defaultValue={editBook.isbn} onChange={handleChange}></input>
                </div>
                <div className="row">
                    <label htmlFor="title">Titolo</label><input id="title" defaultValue={editBook.title} onChange={handleChange}></input>
                </div>
                <div className="row">
                    <label htmlFor="abstract">Recensione</label><textarea id='abstract' defaultValue={editBook.abstract} onChange={handleChange}></textarea>
                </div>
                <div className="row">
                    <label htmlFor="authors">Autori</label><input id='authors' defaultValue={editBook.authors} onChange={handleChange}></input>
                </div>
                <div className="row">
                    <label htmlFor="price">Prezzo</label>
                    <span><input type="number" id='price' defaultValue={editBook.price} onChange={handleChange}></input>
                        <span>&euro;</span></span>
                </div>
                <div className="row">
                    <label htmlFor="pages">Pagine</label><span><input id='pages' type="number" defaultValue={editBook.pages} onChange={handleChange}></input><span>&nbsp;</span></span>
                </div>
                <div className="row">
                    <button onClick={() => dispatch(addBook(editBook))}>Aggiungi</button>
                </div>
            </div>
        </div>
    )
}