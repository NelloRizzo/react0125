export interface User {
    username: string
    password: string
}

export interface LoginResponse {
    token: string
    expires: Date
    issuedAt: Date
}