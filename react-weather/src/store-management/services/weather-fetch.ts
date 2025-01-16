import { fetchWeatherFailed, fetchWeatherStart, fetchWeatherSuccess } from "../weather-slice"
import { AppDispatch } from "../store"

const BASE_URL = "http://api.weatherapi.com/v1/current.json?key=API_KEY&aqi=no&q=LOCATION"

export const fetchWeather = (city: string) => async (dispatch: AppDispatch) => {
    try {
        const key = import.meta.env.VITE_API_KEY
        const url = BASE_URL.replace('API_KEY', key).replace('LOCATION', city)
        dispatch(fetchWeatherStart())
        const response = await fetch(url)
        const body = await response.json()
        dispatch(fetchWeatherSuccess(body))
    } catch (e) {
        console.log(e)
        dispatch(fetchWeatherFailed())
    }
}