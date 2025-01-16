import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, libraryInitialState } from "./library-model";

const librarySlice = createSlice({
    name: 'library',
    initialState: libraryInitialState,
    reducers: {
        addBook: (state, action: PayloadAction<Book>) => ({ ...state, books: [...state.books, action.payload] }),
        removeBook: (state, action: PayloadAction<string>) => ({ ...state, books: [...state.books.filter(b => b.isbn !== action.payload)] }),
        editBook: (state, action: PayloadAction<Book>) => ({ ...state, books: [...state.books.filter(b => b.isbn !== action.payload.isbn), action.payload] })
    }
})

export const { addBook, removeBook, editBook } = librarySlice.actions
export default librarySlice.reducer