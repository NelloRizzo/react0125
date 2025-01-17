import axios from "axios"

const loginURL = 'https://localhost:7119/api/Users/login'

const login = async () => {
    const response = await axios.post<{ token: string }>(loginURL, { username: 'root', password: 'root' })
    const { token } = response.data
    localStorage.setItem('token', token)
    return token
}

const getToken = async () => {
    return localStorage.getItem('token') || await login()
}

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(
    async config => {
        config.headers.Authorization = `Bearer ${await getToken()}`
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => { return response },
    error => {
        if (error.response.status === 401) {
            console.log("Unauthorized")
        }
        return Promise.reject(error)
    }
)

export default axiosInstance