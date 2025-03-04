import axios from "axios";

const BASE_URL = 'https://localhost:7119';
//export const PROVINCES_URL = `${BASE_URL}/api/Cities/provinces`;
export const PROVINCES_URL = `/api/Cities/provinces`;
//export const CITIES_BY_PROVINCE_URL = `${BASE_URL}/api/Cities/ACRONYM`;
export const CITIES_BY_PROVINCE_URL = `/api/Cities/ACRONYM`;

const axios_instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

axios_instance.interceptors.request.use((config) => {
    console.log('Request sent', config);
    return config;
}, (error) => {
    console.log('Request error', error);
    return Promise.reject(error);
});

axios_instance.interceptors.response.use((response) => {
    console.log('Response received', response);
    return response;
}, (error) => {
    console.log('Response error', error);
    return Promise.reject(error);
});

export default axios_instance;