export interface Book {
    isbn: string
    title: string
    abstract?: string
    authors: string
    price: number
    pages?: number
}
export interface Library {
    books: Book[]
}

export const libraryInitialState: Library = { books: [] }
export const emptyBook: Book = { isbn: '', title: '', abstract: '', authors: '', price: 0, pages: 0 }