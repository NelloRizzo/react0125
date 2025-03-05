import axios from "axios"

export const BLOG_GET_ALL = "blog"
export const USER_REGISTER = "users/register"
export const USER_LOGIN = "users/login"

const axios_instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL || process.env.REACT_APP_BASE_URL,
    timeout: 1000
})

export default axios_instance