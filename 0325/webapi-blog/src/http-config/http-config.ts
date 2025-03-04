import axios from "axios";
import { LoginResponse } from "../models/Models";

const BASE_URL = 'https://localhost:7119';

export const ALL_ARTICLES_URL = '/api/blog'
export const SAVE_ARTICLE_URL = "/api/blog"
export const LOGIN_URL = '/api/users/login'

const axios_instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axios_instance.interceptors.request.use((config) => {
    const token: string | null = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})

axios_instance.interceptors.response.use((config) => {
    return config
}, (error) => {
    console.log("Error", error.response.status)
    if (error.response.status === 401) {
        performAuthentication()
    }
    Promise.reject(error)
})
export default axios_instance

const performAuthentication = async () => {
    try {
        console.log("perform authentication")
        const response = await axios.post<LoginResponse>(`${BASE_URL}${LOGIN_URL}`, { username: 'nello', password: 'nello' })
        console.log(response)
        localStorage.setItem('token', response.data.token);
    } catch (error) {
        console.log("Login error", error)
    }
}
