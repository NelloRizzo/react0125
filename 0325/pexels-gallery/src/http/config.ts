import axios from "axios"

export const BASE_URL = "https://www.pexels.com/photos/"
export const SEARCH_URL = "search"

const axios_instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
})

axios_instance.interceptors.request.use(config => {
    const pexelsApiKey = import.meta.env.VITE_PEXELS_API_KEY || process.env.REACT_APP_PEXELS_API_KEY;

    config.headers['Authorization'] = pexelsApiKey
    config.headers['Content-Type'] = "application/json"
    config.headers['Accept'] = "application/json"
    config.headers['Access-Control-Allow-Origin'] = '/**'
    config.headers['Access-Control-Allow-Methods'] = 'GET,HEAD,PUT,PATCH,POST,DELETE'
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'

    return config
})

export default axios_instance