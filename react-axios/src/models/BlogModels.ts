export interface Author {
    username: string
    password: string
}
export interface Article {
    id: number
    title: string
    content: string
    author: Author | string
    publishedAt: Date
    comments: any[]
}