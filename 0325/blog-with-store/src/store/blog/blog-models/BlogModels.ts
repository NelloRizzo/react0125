export interface Article {
    id: number
    title: string
    content: string
    author: string
    publishedAt: Date
    comments: Comment[]
}

export interface Comment {
    id: number
    content: string
    author: string
    publishedAt: Date
    postId: number
}

export interface ArticleInput {
    title: string
    content: string
}

export interface CommentInputModel {
    content: string
}