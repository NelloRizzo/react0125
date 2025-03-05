import { Article } from "../blog-models/BlogModels";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllArticles } from "../thunks/blog-thunks";

interface BlogState {
    articles: Article[]
    loading: boolean
    error: string | undefined
}

const initialState: BlogState = {
    articles: [],
    loading: false,
    error: undefined
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllArticles.pending, (state) => { state.loading = true, state.error = undefined })
            .addCase(fetchAllArticles.fulfilled,
                (state, action: PayloadAction<Article[]>) => { state.loading = false, state.articles = action.payload }
            )
            .addCase(fetchAllArticles.rejected, (state) => {
                state.loading = false, state.error = "Errore nel recupero degli articoli"
            })
    }
})

export default blogSlice.reducer