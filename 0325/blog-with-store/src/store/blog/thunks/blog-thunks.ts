import { createAsyncThunk } from "@reduxjs/toolkit";
import BlogService from "../../../services/blog-service";

export const fetchAllArticles = createAsyncThunk(
    "blog/fetchAllArticles",
    async () => {
        const service = new BlogService()
        return await service.getArticles()
    }
)