import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./weather-state";

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fetchWeatherStart: (state) => ({ ...state, status: 'loading' }),
        fetchWeatherSuccess: (state, action: PayloadAction<any>) => ({ ...state, data: action.payload, status: 'idle' }),
        fetchWeatherFailed: (state) => ({ ...state, data: null, status: 'failed' })
    }
})

export const { fetchWeatherFailed, fetchWeatherStart, fetchWeatherSuccess } = weatherSlice.actions
export default weatherSlice.reducer