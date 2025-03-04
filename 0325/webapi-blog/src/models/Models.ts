export interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
    publishedAt: Date;
    comments: Comment[];
}

export interface LoginResponse {
    token: string
    expires: Date
    issuedAt: Date
}

export interface User {
    username: string;
    password: string;
}

export interface Comment {
    id: number;
    content: string;
    author: string;
    publishedAt: Date;
    postId: number;
}