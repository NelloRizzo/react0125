import { Article } from "../store/blog/blog-models/BlogModels";
import axios_instance, { BLOG_GET_ALL } from "./http-config";

export interface BlogService {
    getArticles(): Promise<Article[]>
}

export class BlogServiceImpl implements BlogService {
    async getArticles(): Promise<Article[]> {
        const resp = await axios_instance.get(BLOG_GET_ALL)
        return resp.data
    }
}

export default BlogServiceImpl